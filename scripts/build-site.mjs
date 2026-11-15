import { createHash } from 'node:crypto';
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, normalize, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sourceRoot = join(root, 'src');
const dist = join(root, 'dist');
const publicDirectories = ['styles', 'js'];

function versionFor(file) {
  return createHash('sha256').update(readFileSync(file)).digest('hex').slice(0, 8);
}

function resolveInclude(baseDirectory, requestedPath) {
  const target = resolve(baseDirectory, requestedPath);
  const relativeTarget = relative(sourceRoot, target);
  if (relativeTarget.startsWith('..') || relativeTarget === '') {
    throw new Error(`Inclusion hors de src interdite : ${requestedPath}`);
  }
  if (!existsSync(target)) throw new Error(`Inclusion absente : ${requestedPath}`);
  return target;
}

function assembleTemplate(templatePath, stack = []) {
  const absoluteTemplate = resolve(templatePath);
  if (stack.includes(absoluteTemplate)) {
    throw new Error(`Inclusion circulaire : ${[...stack, absoluteTemplate].join(' -> ')}`);
  }

  const source = readFileSync(absoluteTemplate, 'utf8');
  return source.replace(/<!--\s*@include\s+([^\s]+)\s*-->/g, (_match, requestedPath) => {
    const includedPath = resolveInclude(dirname(absoluteTemplate), requestedPath);
    return assembleTemplate(includedPath, [...stack, absoluteTemplate]).trim();
  });
}

function injectContentVersions(html) {
  return html.replace(
    /\b(href|src)="([^"?#]+\.(?:css|js))(?:\?v=[^"]*)?"/g,
    (_match, attribute, relativePath) => {
      const publicFile = join(root, normalize(relativePath));
      if (!existsSync(publicFile)) throw new Error(`Ressource publique absente : ${relativePath}`);
      return `${attribute}="${relativePath}?v=${versionFor(publicFile)}"`;
    }
  );
}

function resetDirectory(directory) {
  rmSync(directory, { recursive: true, force: true });
  mkdirSync(directory, { recursive: true });
}

function copySourceDirectory(sourceName, publicName) {
  const target = join(root, publicName);
  resetDirectory(target);
  cpSync(join(sourceRoot, sourceName), target, { recursive: true });
}

for (const directory of publicDirectories) {
  copySourceDirectory(directory === 'js' ? 'scripts' : directory, directory);
}

const assembled = assembleTemplate(join(sourceRoot, 'index.html'));
const generatedNotice = '<!-- FICHIER GÉNÉRÉ. Modifier src/, puis lancer npm run build. -->';
const publicHtml = injectContentVersions(assembled.replace('<!doctype html>', `<!doctype html>\n${generatedNotice}`));
writeFileSync(join(root, 'index.html'), publicHtml, 'utf8');

resetDirectory(dist);
cpSync(join(root, 'index.html'), join(dist, 'index.html'));
for (const directory of publicDirectories) {
  cpSync(join(root, directory), join(dist, directory), { recursive: true });
}
cpSync(join(root, 'assets'), join(dist, 'assets'), { recursive: true });
cpSync(join(root, 'CNAME'), join(dist, 'CNAME'));
writeFileSync(join(dist, '.nojekyll'), '');

console.log('Build terminé :');
console.log('- sources assemblées depuis src/');
console.log('- sortie GitHub Pages générée à la racine');
console.log('- paquet de déploiement généré dans dist/');

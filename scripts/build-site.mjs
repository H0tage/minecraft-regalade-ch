import { createHash } from 'node:crypto';
import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, normalize, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sourceRoot = join(root, 'src');
const dist = join(root, 'dist');
const styleSources = [
  'core/site.css',
  'components/lightbox.css',
  'pages/rules.css',
  'pages/presentation.css',
  'pages/mods.css',
  'pages/status.css',
  'pages/installation.css',
  'pages/registration.css',
  'pages/superpower.css',
  'tutorials/layout.css',
  'tutorials/navigation.css',
  'tutorials/first-minecraft.css',
  'tutorials/exploration.css',
  'tutorials/economy.css',
  'tutorials/cuisine.css',
  'tutorials/agriculture.css',
  'tutorials/photography.css',
  'tutorials/fishing.css',
  'tutorials/buddycards.css',
  'tutorials/doggy-talents.css',
  'tutorials/jei.css',
  'tutorials/storage.css',
  'tutorials/create.css',
  'tutorials/trains.css',
  'tutorials/big-cannons-base.css',
  'tutorials/big-cannons-overview.css',
  'tutorials/big-cannons-survival.css',
  'tutorials/stargate-guide.css',
  'tutorials/stargates-survival.css',
  'tutorials/stargates-industry.css',
  'tutorials/stargates-interactive.css',
];

const scriptSources = [
  'core/galleries.js',
  'core/site.js',
  'pages/mods-page.js',
  'pages/registration.js',
  'pages/status.js',
  'core/tab-groups.js',
  'tutorials/layout.js',
  'tutorials/jei.js',
];

const standaloneScriptSources = ['pages/superpower.js'];

function listFiles(directory, extension, baseDirectory = directory) {
  function walk(currentDirectory) {
    return readdirSync(currentDirectory, { withFileTypes: true }).flatMap((entry) => {
      const target = join(currentDirectory, entry.name);
      return entry.isDirectory() ? walk(target) : [target];
    });
  }

  return walk(directory)
    .filter((file) => file.endsWith(extension))
    .map((file) => relative(baseDirectory, file).replaceAll('\\', '/'))
    .sort();
}

function assertManifestCoverage(directory, extension, manifest, label) {
  const actual = listFiles(directory, extension);
  const expected = [...manifest].sort();
  const unlisted = actual.filter((file) => !expected.includes(file));
  const absent = expected.filter((file) => !actual.includes(file));
  if (unlisted.length || absent.length) {
    const details = [
      unlisted.length ? `${label} non référencé${unlisted.length > 1 ? 's' : ''} : ${unlisted.join(', ')}` : '',
      absent.length ? `${label} absent${absent.length > 1 ? 's' : ''} : ${absent.join(', ')}` : '',
    ]
      .filter(Boolean)
      .join('\n');
    throw new Error(`Manifest incomplet :\n${details}`);
  }
}

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

function injectContentVersions(html, publicDirectory = dist) {
  return html.replace(/\b(href|src)="([^"?#]+\.(?:css|js))(?:\?v=[^"]*)?"/g, (_match, attribute, relativePath) => {
    const publicFile = resolve(publicDirectory, normalize(relativePath));
    if (relative(dist, publicFile).startsWith('..')) {
      throw new Error(`Ressource publique hors de dist interdite : ${relativePath}`);
    }
    if (!existsSync(publicFile)) throw new Error(`Ressource publique absente : ${relativePath}`);
    return `${attribute}="${relativePath}?v=${versionFor(publicFile)}"`;
  });
}

function resetDirectory(directory) {
  rmSync(directory, { recursive: true, force: true });
  mkdirSync(directory, { recursive: true });
}

function bundle(sourceDirectory, files, targetFile, separator) {
  const contents = files.map((file) => {
    const sourceFile = join(sourceRoot, sourceDirectory, file);
    if (!existsSync(sourceFile)) throw new Error(`Source de bundle absente : ${file}`);
    return `/* ${file.replaceAll('*/', '')} */\n${readFileSync(sourceFile, 'utf8').trim()}`;
  });
  mkdirSync(dirname(targetFile), { recursive: true });
  writeFileSync(targetFile, `${contents.join(separator)}\n`, 'utf8');
}

assertManifestCoverage(join(sourceRoot, 'styles'), '.css', styleSources, 'CSS');
assertManifestCoverage(
  join(sourceRoot, 'scripts'),
  '.js',
  [...scriptSources, ...standaloneScriptSources],
  'JavaScript',
);

resetDirectory(dist);
bundle('styles', styleSources, join(dist, 'styles', 'site.css'), '\n\n');
bundle('scripts', scriptSources, join(dist, 'js', 'site.js'), '\n\n;\n\n');
bundle('scripts', standaloneScriptSources, join(dist, 'js', 'superpower.js'), '\n\n;\n\n');
cpSync(join(sourceRoot, 'data'), join(dist, 'data'), { recursive: true });
cpSync(join(root, 'assets'), join(dist, 'assets'), { recursive: true });
cpSync(join(root, 'CNAME'), join(dist, 'CNAME'));
writeFileSync(join(dist, '.nojekyll'), '');

const assembled = assembleTemplate(join(sourceRoot, 'index.html'));
const generatedNotice = '<!-- FICHIER GÉNÉRÉ. Modifier src/, puis lancer npm run build. -->';
const publicHtml = injectContentVersions(assembled.replace('<!doctype html>', `<!doctype html>\n${generatedNotice}`));
writeFileSync(join(dist, 'index.html'), publicHtml, 'utf8');

const superpowerDirectory = join(dist, 'superpower');
mkdirSync(superpowerDirectory, { recursive: true });
const assembledSuperpower = assembleTemplate(join(sourceRoot, 'superpower', 'index.html'));
const superpowerHtml = injectContentVersions(
  assembledSuperpower.replace('<!doctype html>', `<!doctype html>\n${generatedNotice}`),
  superpowerDirectory,
);
writeFileSync(join(superpowerDirectory, 'index.html'), superpowerHtml, 'utf8');

console.log('Build terminé :');
console.log('- sources assemblées depuis src/');
console.log(`- ${styleSources.length} feuilles réunies dans dist/styles/site.css`);
console.log(`- ${scriptSources.length} scripts réunis dans dist/js/site.js`);
console.log(`- ${standaloneScriptSources.length} script autonome généré dans dist/js/superpower.js`);
console.log('- paquet de déploiement généré uniquement dans dist/');

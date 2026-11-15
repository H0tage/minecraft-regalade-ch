import { createHash } from 'node:crypto';
import { cpSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { basename, dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

function versionFor(file) {
  return createHash('sha256').update(readFileSync(file)).digest('hex').slice(0, 8);
}

function copyDeployFiles() {
  const html = readFileSync(join(root, 'index.html'), 'utf8');
  const referencedFiles = [...html.matchAll(/\b(?:href|src)="([^"?#]+\.(?:css|js))(?:\?[^"#]*)?"/g)]
    .map(match => match[1]);
  cpSync(join(root, 'index.html'), join(dist, 'index.html'));
  for (const name of new Set(referencedFiles)) {
    cpSync(join(root, name), join(dist, name));
  }
  cpSync(join(root, 'assets'), join(dist, 'assets'), { recursive: true });
  cpSync(join(root, 'CNAME'), join(dist, 'CNAME'));
  writeFileSync(join(dist, '.nojekyll'), '');
}

function injectContentVersions(indexPath) {
  const html = readFileSync(indexPath, 'utf8').replace(
    /\b(href|src)="([^"?#]+\.(?:css|js))(?:\?v=[^"]*)?"/g,
    (match, attribute, relativePath) => {
      const source = join(root, relativePath.replaceAll('/', '\\'));
      return `${attribute}="${relativePath}?v=${versionFor(source)}"`;
    }
  );
  writeFileSync(indexPath, html);
}

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
injectContentVersions(join(root, 'index.html'));
copyDeployFiles();

const deployedFiles = readdirSync(dist).length;
console.log(`Build terminé : ${deployedFiles} entrées à la racine de dist.`);
console.log(`Source canonique : ${basename(root)} (dist est entièrement généré).`);

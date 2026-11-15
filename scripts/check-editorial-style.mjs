import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const forbiddenCharacter = String.fromCodePoint(0x2014);
const textExtensions = new Set(['.css', '.csv', '.html', '.js', '.json', '.md', '.mjs', '.txt']);

function walk(directory) {
  if (!existsSync(directory)) return [];
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

const tracked = execFileSync('git', ['ls-files'], { cwd: root, encoding: 'utf8' })
  .split(/\r?\n/)
  .filter(Boolean)
  .map(file => join(root, file));
const currentSources = ['src', 'scripts', 'contenus-textuels']
  .flatMap(directory => walk(join(root, directory)));
const files = [...new Set([...tracked, ...currentSources])]
  .filter(file => existsSync(file) && textExtensions.has(extname(file).toLowerCase()));

const violations = [];
for (const file of files) {
  const lines = readFileSync(file, 'utf8').split(/\r?\n/);
  lines.forEach((line, index) => {
    if (line.includes(forbiddenCharacter)) violations.push(`${relative(root, file)}:${index + 1}`);
  });
}

if (violations.length) {
  console.error('Tiret cadratin interdit. Utiliser des parenthèses à la place :');
  violations.forEach(violation => console.error(`- ${violation}`));
  process.exit(1);
}

console.log('Règle éditoriale validée : aucun tiret cadratin détecté.');

import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const sourceRoot = join(root, 'src');
const query = process.argv.slice(2).join(' ').trim().toLocaleLowerCase('fr');

if (!query) {
  console.error('Usage : npm run locate -- "fragment du texte"');
  process.exit(1);
}

function walk(directory) {
  if (!existsSync(directory)) return [];
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

const files = walk(sourceRoot).filter((file) => ['.html', '.js'].includes(extname(file)));
const results = [];

for (const file of files) {
  const lines = readFileSync(file, 'utf8').split(/\r?\n/);
  lines.forEach((line, index) => {
    if (line.toLocaleLowerCase('fr').includes(query)) {
      const excerpt = line.trim().replace(/\s+/g, ' ').slice(0, 140);
      results.push(`${relative(root, file)}:${index + 1}  ${excerpt}`);
    }
  });
}

if (!results.length) {
  console.error('Aucune source canonique ne contient ce fragment.');
  process.exit(1);
}

console.log(results.join('\n'));

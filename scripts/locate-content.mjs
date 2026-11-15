import { readdirSync, readFileSync } from 'node:fs';
import { dirname, extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const query = process.argv.slice(2).join(' ').trim().toLocaleLowerCase('fr');

if (!query) {
  console.error('Usage : node scripts/locate-content.mjs "fragment du texte"');
  process.exit(1);
}

const files = readdirSync(root)
  .filter(name => ['.html', '.js'].includes(extname(name)))
  .map(name => join(root, name));
const results = [];

for (const file of files) {
  const lines = readFileSync(file, 'utf8').split(/\r?\n/);
  lines.forEach((line, index) => {
    if (line.toLocaleLowerCase('fr').includes(query)) results.push(`${relative(root, file)}:${index + 1}`);
  });
}

if (!results.length) {
  console.error('Aucune source technique ne contient ce fragment.');
  process.exit(1);
}

console.log(results.join('\n'));

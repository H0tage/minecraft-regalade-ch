import { PurgeCSS } from 'purgecss';
import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { dirname, extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sourceRoot = join(root, 'src');
const writeChanges = process.argv.includes('--write');

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

const content = walk(sourceRoot).filter((file) => ['.html', '.js', '.json'].includes(extname(file)));
const styles = walk(join(sourceRoot, 'styles')).filter((file) => extname(file) === '.css');
const asPurgePath = (file) => relative(root, file).replaceAll('\\', '/');
const results = await new PurgeCSS().purge({
  content: content.map(asPurgePath),
  css: styles.map(asPurgePath),
  fontFace: true,
  keyframes: true,
  variables: false,
  safelist: {
    standard: ['active', 'current', 'error', 'loading', 'open', 'show', 'visible'],
    deep: [/^is-/, /^has-/],
  },
});

let beforeTotal = 0;
let afterTotal = 0;
for (const [index, result] of results.entries()) {
  const sourceFile = result.file && existsSync(result.file) ? result.file : styles[index];
  if (!sourceFile || !existsSync(sourceFile)) continue;
  const before = statSync(sourceFile).size;
  const output = `${result.css.trim()}\n`;
  const after = Buffer.byteLength(output);
  beforeTotal += before;
  afterTotal += after;
  const gain = before ? Math.round((1 - after / before) * 100) : 0;
  console.log(`${relative(root, sourceFile)} : ${before} -> ${after} octets (${gain}% retirés)`);
  if (writeChanges) writeFileSync(sourceFile, output, 'utf8');
}

console.log(
  `Total : ${beforeTotal} -> ${afterTotal} octets (${Math.round((1 - afterTotal / beforeTotal) * 100)}% retirés)`,
);
console.log(
  writeChanges ? 'Les sources CSS ont été nettoyées.' : 'Aucun fichier modifié. Utiliser --write pour appliquer.',
);

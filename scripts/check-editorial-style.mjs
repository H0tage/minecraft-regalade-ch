import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';

const forbiddenCharacter = String.fromCodePoint(0x2014);
const textExtensions = /\.(?:css|csv|html|js|json|md|mjs|txt)$/i;
const files = execFileSync('git', ['ls-files'], { encoding: 'utf8' })
  .split(/\r?\n/)
  .filter(file => file && textExtensions.test(file) && existsSync(file));

const violations = [];

for (const file of files) {
  const lines = readFileSync(file, 'utf8').split(/\r?\n/);
  lines.forEach((line, index) => {
    if (line.includes(forbiddenCharacter)) violations.push(`${file}:${index + 1}`);
  });
}

if (violations.length) {
  console.error('Tiret cadratin interdit. Utiliser des parenthèses à la place :');
  violations.forEach(violation => console.error(`- ${violation}`));
  process.exit(1);
}

console.log('Règle éditoriale validée : aucun tiret cadratin détecté.');

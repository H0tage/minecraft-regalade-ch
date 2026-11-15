import { createHash } from 'node:crypto';
import { execFileSync, spawnSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const failures = [];
const notices = [];

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function hash(file) {
  return createHash('sha256').update(readFileSync(file)).digest('hex');
}

function fail(message) {
  failures.push(message);
}

const indexPath = join(root, 'index.html');
const html = readFileSync(indexPath, 'utf8');
const localReferences = [...html.matchAll(/\b(?:href|src)="([^"#]+)"/g)]
  .map(match => match[1].split('?')[0])
  .filter(value => !/^(?:https?:|data:|mailto:|tel:)/.test(value));

for (const reference of new Set(localReferences)) {
  if (!existsSync(join(root, reference.replaceAll('/', '\\')))) fail(`Référence locale absente : ${reference}`);
}

const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
if (duplicateIds.length) fail(`Identifiants HTML dupliqués : ${duplicateIds.join(', ')}`);

const rootScripts = readdirSync(root)
  .filter(name => extname(name) === '.js')
  .map(name => join(root, name));

for (const script of rootScripts) {
  const result = spawnSync(process.execPath, ['--check', script], { encoding: 'utf8' });
  if (result.status !== 0) fail(`JavaScript invalide : ${relative(root, script)}\n${result.stderr.trim()}`);
}

try {
  execFileSync(process.execPath, [join(root, 'scripts', 'check-editorial-style.mjs')], { cwd: root, stdio: 'pipe' });
} catch (error) {
  fail(error.stderr?.toString().trim() || 'Le contrôle éditorial a échoué.');
}

if (/Collector's Album/i.test(html) || /Collector's Album/i.test(readFileSync(join(root, 'galleries.js'), 'utf8'))) {
  fail("Référence obsolète détectée : Collector's Album.");
}

if (/members\.map\([^\n]+innerHTML/s.test(html)) {
  fail('Le tableau des inscriptions réinjecte encore des données utilisateur avec innerHTML.');
}

if (!/aria-expanded="false"[^>]+aria-controls="main-navigation"/.test(html)) {
  fail('Le bouton du menu mobile ne déclare pas complètement son état accessible.');
}

if (!existsSync(dist)) {
  fail('Le dossier dist est absent. Lance le build avant la vérification.');
} else {
  const canonicalFiles = [...new Set(localReferences.filter(name => ['.css', '.js'].includes(extname(name))))];
  for (const name of canonicalFiles) {
    const deployed = join(dist, name);
    if (!existsSync(deployed)) fail(`Fichier absent de dist : ${name}`);
    else if (hash(join(root, name)) !== hash(deployed)) fail(`Fichier désynchronisé dans dist : ${name}`);
  }

  const sourceAssets = walk(join(root, 'assets'));
  for (const source of sourceAssets) {
    const deployed = join(dist, relative(root, source));
    if (!existsSync(deployed)) fail(`Asset absent de dist : ${relative(root, source)}`);
    else if (statSync(source).size !== statSync(deployed).size) fail(`Asset désynchronisé dans dist : ${relative(root, source)}`);
  }
}

const oversizedImages = walk(join(root, 'assets'))
  .filter(file => /\.(?:png|jpe?g|webp)$/i.test(file) && statSync(file).size > 750_000)
  .map(file => `${relative(root, file)} (${Math.round(statSync(file).size / 1024)} Ko)`);
if (oversizedImages.length) notices.push(`Images encore lourdes : ${oversizedImages.join(', ')}`);

if (failures.length) {
  console.error(`Vérification échouée (${failures.length} problème${failures.length > 1 ? 's' : ''}) :`);
  failures.forEach(message => console.error(`- ${message}`));
  process.exit(1);
}

console.log(`Vérification réussie : ${rootScripts.length} scripts, ${new Set(localReferences).size} références locales et ${ids.length} identifiants contrôlés.`);
notices.forEach(message => console.warn(`À optimiser : ${message}`));

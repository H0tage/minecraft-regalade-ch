import { createHash } from 'node:crypto';
import { execFileSync, spawnSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const sourceRoot = join(root, 'src');
const dist = join(root, 'dist');
const failures = [];
const notices = [];

function walk(directory) {
  if (!existsSync(directory)) return [];
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
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

function compareTrees(source, target, label) {
  for (const sourceFile of walk(source)) {
    const targetFile = join(target, relative(source, sourceFile));
    if (!existsSync(targetFile)) fail(`${label} absent : ${relative(root, targetFile)}`);
    else if (hash(sourceFile) !== hash(targetFile)) fail(`${label} désynchronisé : ${relative(root, targetFile)}`);
  }
}

const sourceIndex = join(sourceRoot, 'index.html');
const indexPath = join(dist, 'index.html');
if (!existsSync(sourceIndex)) fail('La source src/index.html est absente.');
if (!existsSync(indexPath)) fail('La sortie dist/index.html est absente. Lance le build.');

const sourceFiles = walk(sourceRoot).filter((file) => ['.html', '.css', '.js'].includes(extname(file)));
for (const file of sourceFiles) {
  const content = readFileSync(file, 'utf8');
  if (extname(file) === '.html' && /<style\b|\sstyle="/i.test(content)) {
    fail(`CSS incorporé interdit dans la source : ${relative(root, file)}`);
  }
}

const modsPath = join(sourceRoot, 'data', 'mods.json');
if (!existsSync(modsPath)) {
  fail('La source src/data/mods.json est absente.');
} else {
  try {
    const mods = JSON.parse(readFileSync(modsPath, 'utf8'));
    const requiredFields = ['name', 'category', 'version', 'status', 'description', 'url', 'icon'];
    if (!Array.isArray(mods)) {
      fail('La liste des mods doit être un tableau JSON.');
    } else {
      const names = new Set();
      mods.forEach((mod, index) => {
        const label = `Mod ${index + 1}`;
        if (!mod || typeof mod !== 'object' || Array.isArray(mod)) {
          fail(`${label} n’est pas un objet valide.`);
          return;
        }
        requiredFields.forEach((field) => {
          if (typeof mod[field] !== 'string' || !mod[field].trim()) fail(`${label} : champ ${field} absent ou vide.`);
        });
        const normalizedName = typeof mod.name === 'string' ? mod.name.trim().toLocaleLowerCase('fr') : '';
        if (normalizedName && names.has(normalizedName)) fail(`Mod dupliqué : ${mod.name}.`);
        names.add(normalizedName);
        for (const field of ['url', 'icon']) {
          if (typeof mod[field] !== 'string') continue;
          try {
            const url = new URL(mod[field]);
            if (!['http:', 'https:'].includes(url.protocol)) fail(`${label} : protocole invalide pour ${field}.`);
          } catch {
            fail(`${label} : URL invalide dans ${field}.`);
          }
        }
      });
      notices.push(`${mods.length} mods structurés contrôlés.`);
    }
  } catch (error) {
    fail(`JSON des mods invalide : ${error.message}`);
  }
}

const sourceScripts = sourceFiles.filter((file) => extname(file) === '.js');
for (const script of sourceScripts) {
  const result = spawnSync(process.execPath, ['--check', script], { encoding: 'utf8' });
  if (result.status !== 0) fail(`JavaScript invalide : ${relative(root, script)}\n${result.stderr.trim()}`);
}

const html = existsSync(indexPath) ? readFileSync(indexPath, 'utf8') : '';
if (!html.includes('FICHIER GÉNÉRÉ')) fail('index.html ne porte pas la signature de fichier généré.');
if (/<style\b|\sstyle="/i.test(html)) fail('La sortie HTML contient encore du CSS incorporé.');

const localReferences = [...html.matchAll(/\b(?:href|src)="([^"#]+)"/g)]
  .map((match) => match[1].split('?')[0])
  .filter((value) => !/^(?:https?:|data:|mailto:|tel:)/.test(value));

for (const reference of new Set(localReferences)) {
  const decodedReference = decodeURIComponent(reference);
  if (!existsSync(join(dist, decodedReference))) fail(`Référence locale absente : ${reference}`);
}

const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
if (duplicateIds.length) fail(`Identifiants HTML dupliqués : ${duplicateIds.join(', ')}`);

try {
  execFileSync(process.execPath, [join(root, 'scripts', 'check-editorial-style.mjs')], { cwd: root, stdio: 'pipe' });
} catch (error) {
  fail(error.stderr?.toString().trim() || 'Le contrôle éditorial a échoué.');
}

const searchableSource = sourceFiles.map((file) => readFileSync(file, 'utf8')).join('\n');
if (/Collector's Album/i.test(searchableSource)) fail("Référence obsolète détectée : Collector's Album.");
if (/members\.map\([^\n]+innerHTML/s.test(searchableSource))
  fail('Les inscriptions réinjectent des données utilisateur avec innerHTML.');
if (/createElement\(\s*['"]style['"]\s*\)/.test(searchableSource))
  fail('Le JavaScript crée encore une feuille de style dynamique.');
if (/@include\b/.test(html)) fail('Une inclusion HTML non résolue subsiste dans la sortie.');
if (!/aria-expanded="false"[^>]+aria-controls="main-navigation"/.test(html))
  fail('Le menu mobile ne déclare pas complètement son état accessible.');

compareTrees(join(sourceRoot, 'data'), join(dist, 'data'), 'Donnée déployée');
compareTrees(join(root, 'assets'), join(dist, 'assets'), 'Asset déployé');
if (!existsSync(join(dist, 'styles', 'site.css'))) fail('Le bundle CSS dist/styles/site.css est absent.');
if (!existsSync(join(dist, 'js', 'site.js'))) fail('Le bundle JavaScript dist/js/site.js est absent.');

const oversizedImages = walk(join(root, 'assets'))
  .filter((file) => /\.(?:png|jpe?g|webp)$/i.test(file) && statSync(file).size > 750_000)
  .map((file) => `${relative(root, file)} (${Math.round(statSync(file).size / 1024)} Ko)`);
if (oversizedImages.length) notices.push(`Images encore lourdes : ${oversizedImages.join(', ')}`);

if (failures.length) {
  console.error(`Vérification échouée (${failures.length} problème${failures.length > 1 ? 's' : ''}) :`);
  failures.forEach((message) => console.error(`- ${message}`));
  process.exit(1);
}

console.log(
  `Vérification réussie : ${sourceScripts.length} scripts source, ${new Set(localReferences).size} références locales et ${ids.length} identifiants contrôlés.`,
);
notices.forEach((message) => console.warn(`À optimiser : ${message}`));

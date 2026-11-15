import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const siteDir = resolve(scriptDir, '..');
const packDir = resolve(siteDir, '..', 'modpack-master-1.21.1', 'source');
const modsDir = join(packDir, 'mods');
const profilePath = join(packDir, 'minecraftinstance.json');

const CATEGORY_ORDER = [
  'Ingénierie, énergie et transports',
  'Cuisine, boissons et activités paisibles',
  'Construction, décoration et éclairage',
  'Vie communautaire, confort et interface',
  'Exploration et monde vivant',
  'Économie et missions',
  'Qualité de vie et retours visuels',
  'Administration et performances',
  'Automatisation Create complémentaire'
];

const aliases = new Map([
  ["[Let's Do] Vinery", "Let's Do: Vinery"],
  ["[Let's Do] Bakery - Farm&Charm Compat", "Let's Do: Bakery (Farm & Charm)"],
  ["[Let's Do] Meadow", "Let's Do: Meadow"],
  ["[Let's Do] Camping", "Let's Do: Camping"],
  ["[Let's Do] Candlelight - Farm&Charm Compat", "Let's Do: Candlelight (Farm & Charm Compat)"],
  ['Simple Voice Radio', 'Simple Radio'],
  ['Skin Layers 3D', '3D Skin Layers'],
  ['AmbientSounds 6', 'AmbientSounds'],
  ['FerriteCore ((Neo)Forge)', 'FerriteCore'],
  ['create-collision-fix', 'Create Collision Crashfix'],
  ['Advancement Plaques [Neo/Forge]', 'Advancement Plaques'],
  ['BetterF3 - Spark Module', 'BetterF3 Spark Module'],
  ["Farmer's Respite (Unofficial Port)", "Farmer's Respite (port non officiel)"],
  ['Item Highlighter [Neo/Forge]', 'Item Highlighter'],
  ['Jade Addons (Neo/Forge)', 'Jade Addons'],
  ['Just Enough Breeding (JEBr)', 'Just Enough Breeding'],
  ['Just Enough Effect Descriptions (JEED)', 'Just Enough Effect Descriptions'],
  ['Just Enough Items (JEI)', 'Just Enough Items'],
  ['Snow! Real Magic! ⛄ (Neo/Forge)', 'Snow! Real Magic!'],
  ["Starcatcher's Delight - Let's Do: Kaleidoscope edition", "Starcatcher's Delight"],
  ['What Are They Up To (Watut)', 'What Are They Up To'],
  ["YUNG's Better Mineshafts (NeoForge) [1.20.4 - 1.21.1 ONLY]", "YUNG's Better Mineshafts"]
]);

const excludedProjects = new Set([
  'Immersive Paintings Blocks',
  'Fusion (Connected Textures)',
  'Create: Deployer API',
  'Bookshelf',
  'LootJS: KubeJS Addon'
]);

const additions = new Map([
  ['Starcatcher', {
    category: 'Cuisine, boissons et activités paisibles',
    description: 'Refonte complète de la pêche avec plus de 100 poissons, de nouveaux équipements et du contenu lié aux biomes.'
  }],
  ["Starcatcher's Delight - Let's Do: Kaleidoscope edition", {
    category: 'Cuisine, boissons et activités paisibles',
    description: 'Recettes Farmer’s Delight utilisant les poissons de Starcatcher.'
  }],
  ["[Let's Do] Farm & Charm", {
    name: "Let's Do: Farm & Charm",
    category: 'Cuisine, boissons et activités paisibles',
    description: 'Agriculture, cuisine et décoration rustique, avec de nouveaux ateliers et recettes compatibles avec l’écosystème Let’s Do.'
  }],
  ['Better Advanced Tooltips', {
    category: 'Qualité de vie et retours visuels',
    description: 'Enrichit les infobulles d’objets avec des informations avancées plus lisibles.'
  }],
  ['BetterF3 Spark Module', {
    category: 'Qualité de vie et retours visuels',
    description: 'Ajoute les informations de diagnostic de spark à l’écran BetterF3.',
    status: 'OK (CLIENT)'
  }],
  ['Almost Unified', {
    category: 'Administration et performances',
    description: 'Réduit les doublons de minerais et d’ingots entre mods en harmonisant automatiquement leurs recettes.'
  }],
  ['Create: Dragons Plus', {
    category: 'Ingénierie, énergie et transports',
    description: 'Étend Create avec de nouveaux procédés de ventilation et composants, notamment utilisés par la chaîne Stargate.'
  }]
]);

const customJars = [
  {
    file: 'buddycards-1.21.1-5.2.1.jar', name: 'Buddycards', version: '5.2.1',
    category: 'Vie communautaire, confort et interface', status: 'OK',
    description: 'Cartes à collectionner trouvées en explorant et en jouant.',
    link: 'https://www.curseforge.com/minecraft/mc-mods/buddycards',
    icon: 'https://media.forgecdn.net/avatars/thumbnails/470/383/256/256/637757191265711349.png'
  },
  {
    file: 'Create Buddycards 1.21.1-2.0.4.jar', name: 'Create Buddycards', version: '2.0.4',
    category: 'Vie communautaire, confort et interface', status: 'OK',
    description: 'Ajoute une collection Create à Buddycards et permet de recycler les cartes en double avec des machines Create.',
    link: 'https://www.curseforge.com/minecraft/mc-mods/create-buddycards',
    icon: 'https://media.forgecdn.net/avatars/thumbnails/1758/963/256/256/639118915667843494.png'
  },
  {
    file: 'Delightful Buddycards 1.21.1-2.1.0.jar', name: 'Delightful Buddycards', version: '2.1.0',
    category: 'Vie communautaire, confort et interface', status: 'OK',
    description: 'Ajoute à Buddycards une collection inspirée de Farmer’s Delight et de ses extensions.',
    link: 'https://www.curseforge.com/minecraft/mc-mods/delightful-buddycards',
    icon: 'https://media.forgecdn.net/avatars/thumbnails/1793/367/256/256/639136114020214855.png'
  },
  {
    file: 'etched-5.1.0-regalade.2.jar', name: 'Etched', version: '5.1.0-regalade.2',
    category: 'Vie communautaire, confort et interface', status: 'OK',
    description: 'Musique personnalisée et radios diffusant des flux audio, avec réglage de volume et de portée par radio.',
    link: 'https://www.curseforge.com/minecraft/mc-mods/etched',
    icon: 'https://cdn.modrinth.com/data/zi3Fnfmc/ad6a88011826f38dc4aaad6a96b202947da31c67_96.webp'
  },
  {
    file: 'ExtremeSoundMuffler-3.57_NeoForge-1.21.jar', name: 'Extreme Sound Muffler', version: '3.57',
    category: 'Qualité de vie et retours visuels', status: 'OK (CLIENT)',
    description: 'Permet de réduire ou couper sélectivement les sons du jeu, globalement ou autour d’un point précis.',
    link: 'https://www.curseforge.com/minecraft/mc-mods/extreme-sound-muffler',
    icon: 'https://media.forgecdn.net/avatars/thumbnails/314/978/256/256/637414152851892931.png'
  }
];

function loadWindowArray(fileName, variable) {
  const context = { window: {} };
  vm.runInNewContext(readFileSync(join(siteDir, fileName), 'utf8'), context);
  return context.window[variable];
}

function normalize(value) {
  return value
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/\b(neoforge|forge|fabric|quilt|port non officiel)\b/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function readJarVersion(path, fallback) {
  for (const metadata of ['META-INF/neoforge.mods.toml', 'META-INF/mods.toml']) {
    try {
      const toml = execFileSync('tar', ['-xOf', path, metadata], {
        encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore']
      });
      const versions = [...toml.matchAll(/^\s*version\s*=\s*["']([^"']+)["']/gm)]
        .map(match => match[1])
        .filter(version => !version.includes('${'));
      if (versions.length) return versions[0];
    } catch {}
  }
  return fallback;
}

function writeDataset(fileName, variable, value) {
  const content = `window.${variable}=${JSON.stringify(value)};\n`;
  if (content.includes(String.fromCodePoint(0x2014))) {
    throw new Error(`${fileName} contient un tiret cadratin interdit.`);
  }
  writeFileSync(join(siteDir, fileName), content, 'utf8');
  writeFileSync(join(siteDir, 'dist', fileName), content, 'utf8');
}

const oldDetails = loadWindowArray('mods-details.js', 'REGALE_MOD_DETAILS');
const oldMods = loadWindowArray('mods.js', 'REGALE_MODS');
const oldDetailsByName = new Map(oldDetails.map(record => [record[0], record]));
const oldStatusByName = new Map(oldMods.map(record => [record[0], record[3]]));
const oldByNormalizedName = new Map(oldDetails.map(record => [normalize(record[0]), record]));

const activeJars = new Set(readdirSync(modsDir).filter(file => file.endsWith('.jar')));
const profile = JSON.parse(readFileSync(profilePath, 'utf8'));
const activeAddons = profile.installedAddons.filter(addon => activeJars.has(addon.fileNameOnDisk));
const records = [];
const unresolved = [];

for (const addon of activeAddons) {
  if (addon.primaryCategoryId === 421 || excludedProjects.has(addon.name)) continue;

  const aliasedName = aliases.get(addon.name) ?? addon.name;
  const old = oldDetailsByName.get(aliasedName)
    ?? oldByNormalizedName.get(normalize(aliasedName))
    ?? oldByNormalizedName.get(normalize(addon.name));
  const added = additions.get(addon.name) ?? additions.get(aliasedName);

  if (!old && !added) {
    unresolved.push(addon.name);
    continue;
  }

  const name = added?.name ?? old?.[0] ?? aliasedName;
  const category = added?.category ?? old[1];
  const description = added?.description ?? old[3];
  const status = added?.status ?? oldStatusByName.get(old?.[0]) ?? 'OK';
  const fallbackVersion = old?.[2] ?? addon.installedFile?.fileName ?? '1.21.1';
  const version = readJarVersion(join(modsDir, addon.fileNameOnDisk), fallbackVersion);
  records.push({
    name, category, version, status, description,
    link: addon.webSiteURL,
    icon: addon.thumbnailUrl
  });
}

for (const custom of customJars) {
  if (!activeJars.has(custom.file)) {
    throw new Error(`JAR personnalisé introuvable : ${custom.file}`);
  }
  records.push(custom);
}

if (unresolved.length) {
  throw new Error(`Mods actifs sans fiche éditoriale :\n${unresolved.sort().join('\n')}`);
}

const categoryIndex = new Map(CATEGORY_ORDER.map((category, index) => [category, index]));
records.sort((a, b) => {
  const byCategory = (categoryIndex.get(a.category) ?? 999) - (categoryIndex.get(b.category) ?? 999);
  return byCategory || a.name.localeCompare(b.name, 'fr', { sensitivity: 'base' });
});

for (const record of records) {
  for (const key of ['name', 'category', 'version', 'description', 'link', 'icon']) {
    if (!record[key]) throw new Error(`Champ ${key} manquant pour ${record.name}.`);
  }
  if (!categoryIndex.has(record.category)) throw new Error(`Catégorie inconnue pour ${record.name}: ${record.category}`);
}

const names = new Set();
for (const record of records) {
  if (names.has(record.name)) throw new Error(`Doublon dans la page Mods : ${record.name}`);
  names.add(record.name);
}

writeDataset('mods.js', 'REGALE_MODS', records.map(({ name, category, version, status }) => [name, category, version, status]));
writeDataset('mods-details.js', 'REGALE_MOD_DETAILS', records.map(({ name, category, version, description, link }) => [name, category, version, description, link]));
writeDataset('mods-icons.js', 'REGALE_MOD_ICONS', records.map(({ name, icon }) => [name, icon]));

console.log(`${records.length} mods principaux synchronisés depuis ${activeJars.size} JAR actifs.`);
for (const category of CATEGORY_ORDER) {
  console.log(`${category}: ${records.filter(record => record.category === category).length}`);
}

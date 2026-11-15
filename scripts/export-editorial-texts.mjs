import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const output = path.join(root, 'contenus-textuels');

const groups = [
  {
    file: '01-pages-principales.md',
    title: 'Pages principales du site',
    sources: [
      'src/pages/accueil.html',
      'src/pages/mods.html',
      'src/pages/reglement.html',
      'src/pages/statut.html',
      'src/pages/inscription.html',
    ],
  },
  {
    file: '02-installation-et-connexion.md',
    title: 'Installation et connexion',
    sources: [
      'src/pages/installation.html',
      'src/content/installation/guide.html',
      'src/content/installation/connection.html',
    ],
  },
  {
    file: '03-argent-et-echanges.md',
    title: 'Argent et échanges',
    sources: ['src/content/tutorials/economy.html'],
  },
  {
    file: '04-create.md',
    title: 'Create (description générale et première usine)',
    sources: ['src/content/tutorials/create.html'],
  },
  {
    file: '05-big-cannons.md',
    title: 'Big Cannons',
    sources: ['src/content/tutorials/big-cannons.html'],
  },
  {
    file: '06-porte-des-etoiles.md',
    title: 'Porte des étoiles',
    sources: ['src/content/tutorials/stargates.html'],
  },
];

const entities = new Map([
  ['&nbsp;', ' '],
  ['&amp;', '&'],
  ['&lt;', '<'],
  ['&gt;', '>'],
  ['&quot;', '"'],
  ['&#39;', "'"],
  ['&apos;', "'"],
]);

function decodeEntities(value) {
  return value
    .replace(/&(nbsp|amp|lt|gt|quot|apos);|&#39;/g, (match) => entities.get(match) ?? match)
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)));
}

function extractHtml(source, extension) {
  if (extension === '.html') {
    return source.replace(/<script\b[\s\S]*?<\/script>/gi, '').replace(/<style\b[\s\S]*?<\/style>/gi, '');
  }

  const fragments = [];
  const templatePattern = /`((?:\\`|[^`])*)`/g;
  let match;
  while ((match = templatePattern.exec(source))) {
    const fragment = match[1];
    if (fragment.length > 120 && /<(?:section|article|header|h[1-6]|p|li|div|table)\b/i.test(fragment)) {
      fragments.push(fragment);
    }
  }

  const generatedSectionPattern =
    /\$\{(step|mission)\(\s*(\d+)\s*,\s*'([^']*)'\s*,\s*'([^']*)'\s*,\s*'([^']*)'\s*,\s*`([\s\S]*?)`\)\}/g;
  while ((match = generatedSectionPattern.exec(source))) {
    const [, helper, number, phase, kickerOrTitle, titleOrIntro, body] = match;
    const kicker = helper === 'step' ? kickerOrTitle : phase;
    const title = helper === 'step' ? titleOrIntro : kickerOrTitle;
    const introduction = helper === 'mission' ? `<p>${titleOrIntro}</p>` : '';
    fragments.push(`<section><p>Étape ${number} · ${kicker}</p><h2>${title}</h2>${introduction}${body}</section>`);
  }
  return fragments.join('\n');
}

function htmlToMarkdown(source) {
  let text = source
    .replace(/\$\{[^}]*\}/g, '')
    .replace(/<img\b[^>]*\balt=["']([^"']*)["'][^>]*>/gi, (_, alt) => (alt ? `\n[Illustration : ${alt}]\n` : ''))
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<h1\b[^>]*>/gi, '\n# ')
    .replace(/<h2\b[^>]*>/gi, '\n## ')
    .replace(/<h3\b[^>]*>/gi, '\n### ')
    .replace(/<h4\b[^>]*>/gi, '\n#### ')
    .replace(/<h5\b[^>]*>/gi, '\n##### ')
    .replace(/<h6\b[^>]*>/gi, '\n###### ')
    .replace(/<\/h[1-6]>/gi, '\n')
    .replace(/<li\b[^>]*>/gi, '\n- ')
    .replace(/<\/li>/gi, '')
    .replace(/<(?:strong|b)\b[^>]*>/gi, '**')
    .replace(/<\/(?:strong|b)>/gi, '** ')
    .replace(/<(?:em)\b[^>]*>/gi, '*')
    .replace(/<\/(?:em)>/gi, '*')
    .replace(/<(?:code|kbd)\b[^>]*>/gi, '`')
    .replace(/<\/(?:code|kbd)>/gi, '`')
    .replace(
      /<(?:p|article|section|header|footer|div|nav|aside|figure|figcaption|table|thead|tbody|tr|td|th|ol|ul)\b[^>]*>/gi,
      '\n',
    )
    .replace(
      /<\/(?:p|article|section|header|footer|div|nav|aside|figure|figcaption|table|thead|tbody|tr|td|th|ol|ul)>/gi,
      '\n',
    )
    .replace(/<[^>]+>/g, '')
    .replace(/^\$\{(?:step|mission)\(.*$/gm, '')
    .replace(/\\`/g, '`');

  text = decodeEntities(text)
    .replace(/^#{1,6}\s*$/gm, '')
    .replace(/^">\s*$/gm, '')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n[ \t]+/g, '\n')
    .replace(/[ \t]{2,}/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  return text;
}

fs.mkdirSync(output, { recursive: true });

for (const group of groups) {
  const sections = group.sources.map((sourceName) => {
    const sourcePath = path.join(root, sourceName);
    const source = fs.readFileSync(sourcePath, 'utf8');
    const extracted = htmlToMarkdown(extractHtml(source, path.extname(sourceName)));
    return `## Source actuelle : ${sourceName}\n\n${extracted}`;
  });

  const introduction = [
    `# ${group.title}`,
    '',
    '> Copie éditoriale locale du contenu actuellement présent sur le site.',
    '> Tu peux modifier les titres et paragraphes directement dans ce fichier, puis demander à Codex de synchroniser ces changements avec le site.',
    '> Ne relance pas le script d’export après avoir commencé tes corrections : il remplacerait cette copie par le texte du site.',
    '',
  ].join('\n');

  fs.writeFileSync(path.join(output, group.file), `${introduction}\n${sections.join('\n\n---\n\n')}\n`, 'utf8');
}

console.log(`Contenus éditoriaux exportés dans ${output}`);

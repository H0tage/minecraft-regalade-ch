import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const playwrightModule = process.env.REGALE_PLAYWRIGHT || 'playwright';
const { chromium } = require(playwrightModule);
const baseUrl = process.argv[2] || 'http://127.0.0.1:8766/';
const executablePath = process.env.REGALE_CHROME || undefined;
const widths = [390, 800, 1366];
const routes = ['accueil', 'installation', 'tutoriels', 'mods', 'reglement', 'statut', 'inscription'];
const browser = await chromium.launch({ headless: true, executablePath });
const failures = [];

for (const width of widths) {
  const page = await browser.newPage({ viewport: { width, height: 844 } });
  const runtimeErrors = [];
  page.on('console', message => {
    if (message.type() === 'error') runtimeErrors.push(message.text());
  });
  page.on('pageerror', error => runtimeErrors.push(error.message));

  for (const route of routes) {
    await page.goto(`${baseUrl}?qa=${Date.now()}#${route}`, { waitUntil: 'networkidle' });
    const metrics = await page.evaluate(() => ({
      viewport: window.innerWidth,
      width: document.documentElement.scrollWidth,
      headings: [...document.querySelectorAll('.view.active h1')].filter(element => element.offsetParent).length
    }));
    if (metrics.width > metrics.viewport + 1) failures.push(`${route} déborde à ${width}px (${metrics.width - metrics.viewport}px).`);
    if (metrics.headings !== 1) failures.push(`${route} possède ${metrics.headings} H1 visibles à ${width}px.`);
  }

  await page.goto(`${baseUrl}?qa=${Date.now()}#tutoriels`, { waitUntil: 'networkidle' });
  await page.evaluate(() => {
    const bigCannonsTab = [...document.querySelectorAll('[role="tab"]')]
      .find(element => element.textContent.trim() === 'Big Cannons');
    bigCannonsTab?.click();
    const overviewTab = [...document.querySelectorAll('#tutorial-big-cannons [role="tab"]')]
      .find(element => element.textContent.trim() === 'Fonctionnement général');
    overviewTab?.click();
  });
  const bigCannons = await page.evaluate(() => ({ viewport: window.innerWidth, width: document.documentElement.scrollWidth }));
  if (bigCannons.width > bigCannons.viewport + 1) failures.push(`Big Cannons déborde à ${width}px (${bigCannons.width - bigCannons.viewport}px).`);

  if (width === 390) {
    await page.goto(`${baseUrl}?qa=${Date.now()}#accueil`, { waitUntil: 'networkidle' });
    await page.locator('.menu').click();
    if (await page.locator('.menu').getAttribute('aria-expanded') !== 'true') failures.push('Le menu mobile ne signale pas son ouverture.');
    await page.keyboard.press('Escape');
    if (await page.locator('.menu').getAttribute('aria-expanded') !== 'false') failures.push('Le menu mobile ne se ferme pas avec Échap.');

    await page.goto(`${baseUrl}?qa=${Date.now()}#inscription`, { waitUntil: 'networkidle' });
    await page.locator('#pseudo').fill('QaRegalade');
    await page.locator('#source').fill('<img src=x onerror=alert(1)>');
    await page.locator('#signup-form button[type="submit"]').click();
    const registration = await page.evaluate(() => ({
      text: document.querySelector('#member-list')?.textContent || '',
      injectedImage: Boolean(document.querySelector('#member-list img'))
    }));
    if (!registration.text.includes('<img src=x onerror=alert(1)>') || registration.injectedImage) {
      failures.push('Les données de l’inscription ne sont pas rendues comme du texte sûr.');
    }
  }

  runtimeErrors.forEach(error => failures.push(`Erreur navigateur à ${width}px : ${error}`));
  await page.close();
}

await browser.close();

if (failures.length) {
  console.error(`Audit responsive échoué (${failures.length}) :`);
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Audit responsive réussi : ${routes.length} pages et Big Cannons testés à ${widths.join(', ')} pixels.`);

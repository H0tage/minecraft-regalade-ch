import { createRequire } from 'node:module';
import { existsSync } from 'node:fs';

const require = createRequire(import.meta.url);
const playwrightModule = process.env.REGALE_PLAYWRIGHT || 'playwright';
const { chromium } = require(playwrightModule);
const baseUrl = process.argv[2] || 'http://127.0.0.1:8766/';
const browserCandidates = [
  process.env.REGALE_CHROME,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
].filter(Boolean);
const executablePath = browserCandidates.find(existsSync);
const widths = [390, 800, 1366];
const routes = ['accueil', 'installation', 'tutoriels', 'mods', 'textures', 'reglement', 'statut', 'inscription'];
const browser = await chromium.launch({ headless: true, executablePath });
const failures = [];

async function auditTabList(page, selector, label) {
  const tabs = page.locator(`${selector} > [role="tab"]`);
  const tabCount = await tabs.count();
  if (!tabCount) {
    failures.push(`${label} ne contient aucun onglet contrôlable.`);
    return;
  }
  for (let index = 0; index < tabCount; index += 1) {
    const tab = tabs.nth(index);
    await tab.evaluate((element) => element.click());
    const panelId = await tab.getAttribute('aria-controls');
    const state = await page.evaluate((id) => {
      const panel = id ? document.getElementById(id) : null;
      return { exists: Boolean(panel), hidden: panel?.hidden ?? true };
    }, panelId);
    if ((await tab.getAttribute('aria-selected')) !== 'true' || !state.exists || state.hidden) {
      failures.push(`${label} ne sélectionne pas correctement l’onglet ${index + 1}.`);
    }
  }
}

for (const width of widths) {
  const page = await browser.newPage({ viewport: { width, height: 844 } });
  const registrations = [];
  const adminRegistrations = [
    {
      id: 1,
      minecraft_username: 'QaRegalade',
      discovery_source: 'Audit local',
      created_at: '2026-11-17T00:00:00.000Z',
    },
  ];
  await page.route('https://fvuvfdwdmwjpkrxxslgp.supabase.co/functions/v1/registrations', async (route) => {
    const request = route.request();
    if (request.method() === 'GET') {
      await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ registrations }) });
      return;
    }
    if (request.method() === 'POST') {
      const payload = request.postDataJSON();
      registrations.push({
        minecraft_username: payload.minecraftUsername,
        discovery_source: payload.discoverySource,
        created_at: '2026-11-17T00:00:00.000Z',
      });
      await route.fulfill({
        status: 201,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'Ajouté.' }),
      });
      return;
    }
    await route.fulfill({ status: 405, contentType: 'application/json', body: '{}' });
  });
  await page.route('https://fvuvfdwdmwjpkrxxslgp.supabase.co/auth/v1/token**', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        access_token: 'qa-access-token',
        refresh_token: 'qa-refresh-token',
        expires_in: 3600,
        user: { email: 'admin@regalade.ch' },
      }),
    });
  });
  await page.route('https://fvuvfdwdmwjpkrxxslgp.supabase.co/functions/v1/registrations-admin', async (route) => {
    const request = route.request();
    if (request.method() === 'GET') {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ registrations: adminRegistrations }),
      });
      return;
    }
    if (request.method() === 'DELETE') {
      const payload = request.postDataJSON();
      const index = adminRegistrations.findIndex((registration) => registration.id === payload.id);
      if (index >= 0) adminRegistrations.splice(index, 1);
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ deleted: { id: payload.id } }),
      });
      return;
    }
    await route.fulfill({ status: 405, contentType: 'application/json', body: '{}' });
  });
  await page.route('https://fvuvfdwdmwjpkrxxslgp.supabase.co/functions/v1/server-status', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        state: 'online',
        players: 3,
        maxPlayers: 20,
        updatedAt: new Date().toISOString(),
      }),
    });
  });
  const runtimeErrors = [];
  page.on('console', (message) => {
    if (message.type() === 'error') runtimeErrors.push(message.text());
  });
  page.on('pageerror', (error) => runtimeErrors.push(error.message));

  for (const route of routes) {
    await page.goto(`${baseUrl}?qa=${Date.now()}#${route}`, { waitUntil: 'networkidle' });
    const countdown = page.locator('[data-opening-countdown]');
    if ((await countdown.count()) !== 1) {
      failures.push(`${route} ne contient pas le compte à rebours d’ouverture à ${width}px.`);
    } else if (!/\d+ j \d{2} h \d{2} min \d{2} s|Le serveur est ouvert !/.test((await countdown.textContent()) || '')) {
      failures.push(`${route} n’actualise pas le compte à rebours d’ouverture à ${width}px.`);
    }
    const metrics = await page.evaluate(() => ({
      viewport: window.innerWidth,
      width: document.documentElement.scrollWidth,
      headings: [...document.querySelectorAll('.view.active h1')].filter((element) => element.offsetParent).length,
    }));
    if (metrics.width > metrics.viewport + 1)
      failures.push(`${route} déborde à ${width}px (${metrics.width - metrics.viewport}px).`);
    if (metrics.headings !== 1) failures.push(`${route} possède ${metrics.headings} H1 visibles à ${width}px.`);
  }

  await page.goto(`${baseUrl}superpower/?qa=${Date.now()}`, { waitUntil: 'networkidle' });
  const superpowerMetrics = await page.evaluate(() => ({
    viewport: window.innerWidth,
    width: document.documentElement.scrollWidth,
    headings: [...document.querySelectorAll('h1')].filter((element) => element.offsetParent).length,
  }));
  if (superpowerMetrics.width > superpowerMetrics.viewport + 1) {
    failures.push(`Superpower déborde à ${width}px (${superpowerMetrics.width - superpowerMetrics.viewport}px).`);
  }
  if (superpowerMetrics.headings !== 1) {
    failures.push(`Superpower possède ${superpowerMetrics.headings} H1 visibles à ${width}px.`);
  }

  await page.goto(`${baseUrl}?qa=${Date.now()}#tutoriels`, { waitUntil: 'networkidle' });
  await auditTabList(page, '#tutoriels [data-tab-storage="regalade.tutorial.active"]', `Tutoriels à ${width}px`);
  for (const [panelId, hasNestedTabs] of [
    ['tutorial-exploration', false],
    ['tutorial-agriculture', true],
    ['tutorial-economy', true],
    ['tutorial-cuisine', true],
    ['tutorial-photography', true],
    ['tutorial-jei', true],
    ['tutorial-create-first-factory', true],
    ['tutorial-trains', true],
    ['tutorial-big-cannons', true],
    ['tutorial-stargates', true],
  ]) {
    const outerTab = page.locator(`[aria-controls="${panelId}"]`).first();
    await outerTab.evaluate((element) => element.click());
    if (hasNestedTabs) await auditTabList(page, `#${panelId} [data-tab-storage]`, `${panelId} à ${width}px`);
  }
  await page
    .locator('[aria-controls="tutorial-big-cannons"]')
    .first()
    .evaluate((element) => element.click());
  await page.locator('[aria-controls="cbc-guide-panel"]').evaluate((element) => element.click());
  const bigCannons = await page.evaluate(() => ({
    viewport: window.innerWidth,
    width: document.documentElement.scrollWidth,
  }));
  if (bigCannons.width > bigCannons.viewport + 1)
    failures.push(`Big Cannons déborde à ${width}px (${bigCannons.width - bigCannons.viewport}px).`);

  await page.goto(`${baseUrl}?qa=${Date.now()}#installation`, { waitUntil: 'networkidle' });
  await auditTabList(page, '#installation > [data-tab-storage]', `Installation à ${width}px`);

  await page.goto(`${baseUrl}?qa=${Date.now()}#mods`, { waitUntil: 'networkidle' });
  await page.waitForSelector('#mods-grid .mod-link');
  if ((await page.locator('#mods-grid .mod-link').count()) < 100) {
    failures.push(`Le catalogue des mods paraît incomplet à ${width}px.`);
  }

  if (width === 800) {
    await page.goto(`${baseUrl}?qa=${Date.now()}#tutoriels`, { waitUntil: 'networkidle' });
    await page
      .locator('[aria-controls="tutorial-create-first-factory"]')
      .first()
      .evaluate((element) => element.click());
    await page.locator('[aria-controls="cff-overview-panel"]').evaluate((element) => element.click());
    await page.locator('#cff-overview-panel [data-open-tab="cff-start-tab"]').scrollIntoViewIfNeeded();
    const scrollBeforeInternalLink = await page.evaluate(() => window.scrollY);
    await page.locator('#cff-overview-panel [data-open-tab="cff-start-tab"]').click();
    await page.waitForFunction((previousScroll) => window.scrollY < previousScroll - 100, scrollBeforeInternalLink);
    if ((await page.locator('#cff-start-tab').getAttribute('aria-selected')) !== 'true') {
      failures.push('Le lien interne Create n’ouvre pas le sous-onglet demandé.');
    }

    await page.locator('#cff-start-panel').evaluate((element) =>
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY + element.scrollHeight,
        behavior: 'auto',
      }),
    );
    const scrollBeforeTabClick = await page.evaluate(() => window.scrollY);
    await page.locator('#cff-factory-tab').click();
    await page.waitForFunction((previousScroll) => window.scrollY < previousScroll - 100, scrollBeforeTabClick);
    if ((await page.locator('#cff-factory-tab').getAttribute('aria-selected')) !== 'true') {
      failures.push('Le menu Create n’ouvre pas le sous-onglet demandé.');
    }

    await page.goto(`${baseUrl}?qa=${Date.now()}#tutoriels`, { waitUntil: 'networkidle' });
    await page
      .locator('[aria-controls="tutorial-big-cannons"]')
      .first()
      .evaluate((element) => element.click());
    await page.locator('[aria-controls="cbc-autocannon-panel"]').evaluate((element) => element.click());
    await page.reload({ waitUntil: 'networkidle' });
    if (
      (await page.locator('[aria-controls="tutorial-big-cannons"]').first().getAttribute('aria-selected')) !== 'true'
    ) {
      failures.push('Le tutoriel sélectionné n’est pas conservé après rechargement.');
    }
    if ((await page.locator('[aria-controls="cbc-autocannon-panel"]').getAttribute('aria-selected')) !== 'true') {
      failures.push('Le sous-onglet sélectionné n’est pas conservé après rechargement.');
    }

    await page.goto(`${baseUrl}?qa=${Date.now()}#tutoriels/create-first-factory/logistics`, {
      waitUntil: 'networkidle',
    });
    if (
      (await page.locator('#tutorial-create-first-factory-tab').getAttribute('aria-selected')) !== 'true' ||
      (await page.locator('#cff-logistics-tab').getAttribute('aria-selected')) !== 'true'
    ) {
      failures.push('Un lien partagé n’ouvre pas le tutoriel et le sous-onglet demandés.');
    }
    await page.locator('#cff-advanced-tab').click();
    if ((await page.evaluate(() => location.hash)) !== '#tutoriels/create-first-factory/advanced') {
      failures.push('L’adresse ne suit pas la navigation dans les sous-onglets des tutoriels.');
    }
  }

  if (width === 390) {
    await page.goto(`${baseUrl}?qa=${Date.now()}#accueil`, { waitUntil: 'networkidle' });
    await page.locator('.site-menu').click();
    if ((await page.locator('.site-menu').getAttribute('aria-expanded')) !== 'true')
      failures.push('Le menu mobile ne signale pas son ouverture.');
    await page.keyboard.press('Escape');
    if ((await page.locator('.site-menu').getAttribute('aria-expanded')) !== 'false')
      failures.push('Le menu mobile ne se ferme pas avec Échap.');

    await page.goto(`${baseUrl}?qa=${Date.now()}#textures`, { waitUntil: 'networkidle' });
    const firstGalleryImage = page.locator('#textures .gallery-trigger').first();
    if ((await firstGalleryImage.count()) > 0) {
      await firstGalleryImage.click();
      if ((await page.locator('.image-lightbox').getAttribute('aria-hidden')) !== 'false') {
        failures.push('La galerie ne signale pas correctement l’ouverture de l’image.');
      }
      await page.keyboard.press('Escape');
      if ((await page.locator('.image-lightbox').getAttribute('aria-hidden')) !== 'true') {
        failures.push('La galerie ne se ferme pas avec Échap.');
      }
    }

    await page.goto(`${baseUrl}?qa=${Date.now()}#inscription`, { waitUntil: 'networkidle' });
    await page.locator('#pseudo').fill('QaRegalade');
    await page.locator('#source').fill('<img src=x onerror=alert(1)>');
    await page.locator('#signup-form button[type="submit"]').click();
    await page.waitForFunction(() => document.querySelector('#member-list')?.textContent?.includes('<img src=x'));
    const registration = await page.evaluate(() => ({
      text: document.querySelector('#member-list')?.textContent || '',
      injectedImage: Boolean(document.querySelector('#member-list img')),
    }));
    if (!registration.text.includes('<img src=x onerror=alert(1)>') || registration.injectedImage) {
      failures.push('Les données de l’inscription ne sont pas rendues comme du texte sûr.');
    }

    await page.goto(`${baseUrl}superpower/?qa=${Date.now()}`, { waitUntil: 'networkidle' });
    await page.locator('#admin-email').fill('admin@regalade.ch');
    await page.locator('#admin-password').fill('mot-de-passe-de-test');
    await page.locator('#admin-login-button').click();
    await page.locator('#admin-dashboard').waitFor({ state: 'visible' });
    if ((await page.locator('.superpower-delete').count()) !== 1) {
      failures.push('Superpower n’affiche pas les contrôles de suppression après connexion.');
    } else {
      page.once('dialog', (dialog) => dialog.accept());
      await page.locator('.superpower-delete').click();
      await page.waitForFunction(() =>
        document.querySelector('#admin-member-list')?.textContent?.includes('premier nom'),
      );
    }
  }

  runtimeErrors.forEach((error) => failures.push(`Erreur navigateur à ${width}px : ${error}`));
  await page.close();
}

await browser.close();

if (failures.length) {
  console.error(`Audit responsive échoué (${failures.length}) :`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(
  `Audit responsive réussi : ${routes.length} pages, Superpower et Big Cannons testés à ${widths.join(', ')} pixels.`,
);

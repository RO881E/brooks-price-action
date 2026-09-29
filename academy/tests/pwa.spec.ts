import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { createServer, type Server } from 'node:http';
import type { AddressInfo, Socket } from 'node:net';
import { extname, join, normalize } from 'node:path';
import { expect, test, type Page } from '@playwright/test';
import { brooksTrendsCourse, publishedLessons } from '../src/content/course';

/*
 * F-09: Diese Tests prüfen den echten Produktions-Build. Er wird mit relativem
 * Basis-Pfad gebaut und – wie auf GitHub Pages – unter `/academy/` ausgeliefert.
 * Ein eigener kleiner Server erlaubt, Ausfälle und neue Versionen zu simulieren.
 */

const ROOT = join(process.cwd(), '.wqt-playwright-tmp', 'pwa-dist');
const TYPES: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
};

const serverState = {
  down: false,
  failing: [] as RegExp[],
  swTransform: null as ((source: string) => string) | null,
};

let server: Server;
let origin = '';
const sockets = new Set<Socket>();

function resetServer() {
  serverState.down = false;
  serverState.failing = [];
  serverState.swTransform = null;
}

test.describe.configure({ mode: 'serial' });

test.beforeAll(async () => {
  test.setTimeout(180_000);
  execFileSync(
    process.execPath,
    [join('node_modules', 'vite', 'bin', 'vite.js'), 'build', '--base=./', '--outDir', ROOT, '--emptyOutDir'],
    { stdio: 'pipe', env: { ...process.env, VITE_CONFIG_NATIVE_IGNORE_WARNING: 'true' } },
  );

  server = createServer((request, response) => {
    if (serverState.down) {
      request.socket.destroy();
      return;
    }
    const path = decodeURIComponent(new URL(request.url ?? '/', 'http://x').pathname);
    response.setHeader('Cache-Control', 'no-cache');
    response.setHeader('Access-Control-Allow-Origin', '*');

    if (serverState.failing.some((pattern) => pattern.test(path))) {
      response.writeHead(500).end('kaputt');
      return;
    }
    if (path === '/academy') {
      response.writeHead(301, { Location: '/academy/' }).end();
      return;
    }
    if (path.endsWith('.pdf')) {
      response.writeHead(200, { 'Content-Type': 'application/pdf' }).end('%PDF-1.4 test');
      return;
    }
    if (!path.startsWith('/academy/')) {
      response.writeHead(404).end();
      return;
    }

    const relative = path.slice('/academy/'.length) || 'index.html';
    const file = normalize(join(ROOT, relative));
    if (!file.startsWith(ROOT) || !existsSync(file) || !statSync(file).isFile()) {
      response.writeHead(404).end();
      return;
    }
    let body: Buffer | string = readFileSync(file);
    if (relative === 'sw.js' && serverState.swTransform) {
      body = serverState.swTransform(body.toString('utf8'));
    }
    response.writeHead(200, { 'Content-Type': TYPES[extname(file)] ?? 'application/octet-stream' });
    response.end(body);
  });
  server.on('connection', (socket) => {
    sockets.add(socket);
    socket.on('close', () => sockets.delete(socket));
  });
  await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
  origin = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
});

test.afterAll(async () => {
  sockets.forEach((socket) => socket.destroy());
  await new Promise((resolve) => server?.close(resolve));
});

test.beforeEach(() => resetServer());

function builtVersion(): string {
  const match = /const SW_VERSION = "([0-9a-f]+)";/.exec(readFileSync(join(ROOT, 'sw.js'), 'utf8'));
  if (!match) throw new Error('sw.js ohne Version');
  return match[1];
}

function builtPrecache(): string[] {
  const match = /const SW_PRECACHE = (\[[\s\S]*?\]);/.exec(readFileSync(join(ROOT, 'sw.js'), 'utf8'));
  return JSON.parse(match![1]) as string[];
}

/** Neue Version: gleiche Dateien, anderer Versionsname – wie nach einem Deployment. */
function publishNewVersion(suffix = 'next') {
  serverState.swTransform = (source) =>
    source.replace(/const SW_VERSION = "([0-9a-f]+)";/, `const SW_VERSION = "$1-${suffix}";`);
}

function trackConsoleErrors(page: Page) {
  const errors: string[] = [];
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  page.on('pageerror', (error) => errors.push(error.message));
  return errors;
}

/** Erster Online-Besuch: warten, bis der Service Worker die Seite steuert. */
async function firstVisit(page: Page, hash = '') {
  await page.goto(`${origin}/academy/${hash}`);
  await expect(page.getByRole('heading', { name: 'Trading Price Action Trends' })).toBeVisible();
  await page.waitForFunction(() => navigator.serviceWorker.controller !== null);
}

async function cacheState(page: Page) {
  return page.evaluate(async () => {
    const names = await caches.keys();
    const entries: Record<string, string[]> = {};
    for (const name of names) {
      const cache = await caches.open(name);
      entries[name] = (await cache.keys()).map((request) => request.url).sort();
    }
    return { names: names.sort(), entries };
  });
}

async function checkForUpdate(page: Page) {
  await page.evaluate(async () => {
    const registration = await navigator.serviceWorker.getRegistration();
    await registration?.update().catch(() => undefined);
  });
}

test('registriert den Service Worker unter relativem Pfad ohne Konsolenfehler @desktop', async ({ page }) => {
  const errors = trackConsoleErrors(page);
  await firstVisit(page);

  const registration = await page.evaluate(async () => {
    const reg = await navigator.serviceWorker.getRegistration();
    return { scope: reg?.scope, script: reg?.active?.scriptURL };
  });
  expect(registration).toEqual({
    scope: `${origin}/academy/`,
    script: `${origin}/academy/sw.js`,
  });

  const version = builtVersion();
  const { names, entries } = await cacheState(page);
  expect(names).toEqual([`wqt-academy-${version}`]);
  expect(entries[`wqt-academy-${version}`]).toEqual(
    builtPrecache().map((path) => `${origin}/academy/${path}`).sort(),
  );
  expect(builtPrecache()).toEqual(
    expect.arrayContaining(['index.html', 'manifest.webmanifest', 'icons/icon-192.png']),
  );
  // Auch nachgeladene Chunks (Schaubilder) gehören zur App-Shell.
  expect(builtPrecache().some((path) => /^assets\/ChartFocus-.*\.js$/.test(path))).toBe(true);

  const manifest = await page.evaluate(async () => {
    const link = document.querySelector<HTMLLinkElement>('link[rel="manifest"]')!;
    const response = await fetch(link.href);
    return { href: link.href, json: await response.json() };
  });
  expect(manifest.href).toBe(`${origin}/academy/manifest.webmanifest`);
  expect(manifest.json).toMatchObject({
    short_name: 'WQT Academy',
    start_url: './',
    scope: './',
    display: 'standalone',
    theme_color: '#0d1728',
  });
  for (const icon of manifest.json.icons as Array<{ src: string }>) {
    const status = await page.evaluate(
      async (src) => (await fetch(new URL(src, document.querySelector<HTMLLinkElement>('link[rel="manifest"]')!.href))).status,
      icon.src,
    );
    expect(status, icon.src).toBe(200);
  }

  // Erstinstallation ist kein Update: kein Hinweis, kein Neuladen.
  await expect(page.getByText('Neue Version verfügbar')).toHaveCount(0);
  expect(errors).toEqual([]);
});

test('Lernpfad, Lektion, Glossar und Fortschritt funktionieren offline', async ({ page, context }) => {
  const errors = trackConsoleErrors(page);
  await firstVisit(page);

  // Fortschritt online anlegen: Lektion öffnen und einen Schritt weitergehen.
  await page.getByRole('button', { name: /Der Chart ist das Ergebnis: Jetzt lernen/ }).click();
  await page.getByRole('button', { name: 'Weiter' }).click();
  await expect(page.getByRole('heading', { name: 'Eine Auktion hinter jedem Bar' })).toBeVisible();
  const lessonUrl = page.url();

  serverState.down = true;
  await context.setOffline(true);
  await page.reload();

  await expect(page.getByRole('heading', { name: 'Eine Auktion hinter jedem Bar' })).toBeVisible();
  expect(page.url()).toBe(lessonUrl);
  // Das nachgeladene Schaubild-Modul kommt ebenfalls aus dem Cache (F-10).
  await expect(page.locator('.learning-chart svg')).toBeVisible();
  await expect(page.getByText('Bereits geladene Inhalte bleiben nutzbar.', { exact: false })).toBeVisible();
  await page.getByRole('button', { name: 'Weiter' }).click();
  await expect(page.getByRole('heading', { name: 'Beschreibung vor Erklärung' })).toBeVisible();

  await page.goto(`${origin}/academy/#/glossary?term=High%202`);
  await expect(page.getByRole('heading', { name: 'Price-Action-Glossar' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'High 2' })).toBeVisible();

  await page.goto(`${origin}/academy/#/path`);
  await expect(page.getByRole('heading', { name: 'Trading Price Action Trends' })).toBeVisible();
  await expect(
    page.getByRole('button', { name: /^(Weiterlernen|Der Chart ist das Ergebnis weiterlernen)$/ }).first(),
  ).toBeVisible();

  await page.goto(`${origin}/academy/#/settings`);
  await expect(page.getByTestId('offline-status')).toContainText('offline verfügbar');

  const stored = await page.evaluate(() => JSON.parse(localStorage.getItem('wqt-academy-progress-v1') ?? '{}'));
  expect(Object.keys(stored.lessonPositions ?? {})).not.toHaveLength(0);

  // Offline-Hinweis lässt sich schließen; nach der Rückkehr ins Netz verschwindet er.
  await page.getByRole('button', { name: 'OK' }).click();
  await expect(page.getByText('Bereits geladene Inhalte bleiben nutzbar.', { exact: false })).toHaveCount(0);
  serverState.down = false;
  await context.setOffline(false);

  expect(errors).toEqual([]);
});

test('Offline-Neustart: nie geöffnete Kapitel kommen aus dem Vorab-Cache (F-12)', async ({ page, context }) => {
  const errors = trackConsoleErrors(page);
  // Alles abgeschlossen: jede Lektion ist frei; online wird kein Kapitel geöffnet.
  await page.addInitScript((ids) => {
    if (localStorage.getItem('wqt-academy-progress-v1')) return;
    localStorage.setItem(
      'wqt-academy-progress-v1',
      JSON.stringify({ version: 2, completedLessonIds: ids, answers: {} }),
    );
  }, publishedLessons.map((lesson) => lesson.id));
  await firstVisit(page);

  // Jede Einheit liegt als eigener Chunk im Vorab-Cache.
  const chunks = builtPrecache().filter((path) => /^assets\/(introduction|part-01|chapter-0\d)-.*\.js$/.test(path));
  expect(chunks).toHaveLength(brooksTrendsCourse.units.length);

  serverState.down = true;
  await context.setOffline(true);
  for (const unit of [brooksTrendsCourse.units.at(-1)!, brooksTrendsCourse.units[3]]) {
    const lesson = unit.lessons[0];
    await page.goto(`${origin}/academy/#/lesson/${lesson.id}?step=1`);
    await expect(page.getByRole('heading', { name: lesson.steps[0].title, level: 1 })).toBeVisible();
  }
  // Suche über alle Kapitel funktioniert offline aus der Gliederung.
  await page.goto(`${origin}/academy/#/path`);
  await page.keyboard.press('/');
  await page.keyboard.type(brooksTrendsCourse.units[5].lessons[1].title);
  await expect(page.getByRole('option').first()).toBeVisible();

  serverState.down = false;
  await context.setOffline(false);
  expect(errors).toEqual([]);
});

test('Buchleser offline: Kapitel lesen und Lesestelle halten (F-13)', async ({ page, context }) => {
  const errors = trackConsoleErrors(page);
  const intro = brooksTrendsCourse.units[0];
  const [first, second] = intro.lessons;
  await page.addInitScript((id) => {
    if (localStorage.getItem('wqt-academy-progress-v1')) return;
    localStorage.setItem(
      'wqt-academy-progress-v1',
      JSON.stringify({ version: 2, completedLessonIds: [id], answers: {} }),
    );
  }, first.id);
  await firstVisit(page);

  serverState.down = true;
  await context.setOffline(true);
  await page.goto(`${origin}/academy/#/read/${intro.id}`);
  await expect(page.getByRole('heading', { name: second.title, level: 2 })).toBeVisible();
  for (const step of second.steps) {
    await expect(page.getByRole('heading', { name: step.title, level: 3 })).toBeVisible();
  }
  await expect
    .poll(() =>
      page.evaluate(() => JSON.parse(localStorage.getItem('wqt-academy-progress-v1') ?? '{}').readerPositions),
    )
    .toMatchObject({ [intro.id]: { lessonId: second.id } });

  serverState.down = false;
  await context.setOffline(false);
  expect(errors).toEqual([]);
});

test('kündigt ein Update an, aktiviert es erst nach Zustimmung und räumt alte Caches auf @desktop', async ({ page }) => {
  const errors = trackConsoleErrors(page);
  const version = builtVersion();
  await firstVisit(page);
  await page.getByRole('button', { name: /Der Chart ist das Ergebnis: Jetzt lernen/ }).click();
  await page.getByRole('button', { name: 'Weiter' }).click();
  await expect(page.getByRole('heading', { name: 'Eine Auktion hinter jedem Bar' })).toBeVisible();
  await page.evaluate(() => {
    (window as unknown as { wqtMarker: boolean }).wqtMarker = true;
  });

  publishNewVersion();
  await checkForUpdate(page);
  await expect(page.getByText('Neue Version verfügbar')).toBeVisible();

  // Nichts passiert ungefragt: gleiche Seite, alter Cache noch in Benutzung.
  expect(await page.evaluate(() => (window as unknown as { wqtMarker?: boolean }).wqtMarker)).toBe(true);
  expect((await cacheState(page)).names).toEqual(
    [`wqt-academy-${version}`, `wqt-academy-${version}-next`].sort(),
  );

  // „Später“ lässt alles wie es ist.
  await page.getByRole('button', { name: 'Später' }).click();
  await expect(page.getByText('Neue Version verfügbar')).toHaveCount(0);
  expect(await page.evaluate(() => (window as unknown as { wqtMarker?: boolean }).wqtMarker)).toBe(true);

  // Einstellungen bieten das Update weiter an – Zustimmung lädt genau einmal neu.
  await page.goto(`${origin}/academy/#/settings`);
  let loads = 0;
  page.on('load', () => {
    loads += 1;
  });
  await page.getByRole('button', { name: 'Neue Version laden' }).click();
  await page.waitForFunction(() => !(window as unknown as { wqtMarker?: boolean }).wqtMarker);
  await expect(page.getByRole('heading', { name: 'Einstellungen' })).toBeVisible();
  await page.waitForTimeout(1500);
  expect(loads).toBe(1);

  await expect(page.getByText('Neue Version verfügbar')).toHaveCount(0);
  expect((await cacheState(page)).names).toEqual([`wqt-academy-${version}-next`]);

  // Fortschritt hat das Update überstanden.
  await page.goto(`${origin}/academy/#/path`);
  await expect(
    page.getByRole('button', { name: /^(Weiterlernen|Der Chart ist das Ergebnis weiterlernen)$/ }).first(),
  ).toBeVisible();
  expect(errors).toEqual([]);
});

test('Update-Banner: „Jetzt aktualisieren“ lädt die neue Version @desktop', async ({ page }) => {
  const version = builtVersion();
  await firstVisit(page);
  publishNewVersion('banner');
  await checkForUpdate(page);
  // Auf das Laden der neuen Seite warten – nicht auf den Zustand der alten.
  const reloaded = page.waitForEvent('load');
  await page.getByRole('button', { name: 'Jetzt aktualisieren' }).click();
  await reloaded;
  await expect(page.getByRole('heading', { name: 'Trading Price Action Trends' })).toBeVisible();
  await expect.poll(async () => (await cacheState(page)).names).toEqual([`wqt-academy-${version}-banner`]);
  await expect(page.getByText('Neue Version verfügbar')).toHaveCount(0);
});

test('eine fehlgeschlagene Datei verhindert das Update und die alte Version bleibt nutzbar @desktop', async ({ page }) => {
  const version = builtVersion();
  await firstVisit(page);

  publishNewVersion('broken');
  serverState.failing = [/^\/academy\/assets\/.*\.js$/];
  await checkForUpdate(page);
  await expect
    .poll(() =>
      page.evaluate(async () => {
        const reg = await navigator.serviceWorker.getRegistration();
        return Boolean(reg?.installing || reg?.waiting);
      }),
    )
    .toBe(false);
  await expect(page.getByText('Neue Version verfügbar')).toHaveCount(0);
  expect((await cacheState(page)).names).toEqual([`wqt-academy-${version}`]);

  // Das Skript liefert das Netz gerade nur mit Fehler – die App kommt aus dem Cache.
  await page.reload();
  await expect(page.getByRole('heading', { name: 'Trading Price Action Trends' })).toBeVisible();

  // Sobald die Dateien wieder erreichbar sind, klappt das Update.
  serverState.failing = [];
  await checkForUpdate(page);
  await expect(page.getByText('Neue Version verfügbar')).toBeVisible();
});

test('speichert weder PDFs noch fremde Ressourcen im Cache @desktop', async ({ page }) => {
  await firstVisit(page);
  const before = await cacheState(page);
  const foreignOrigin = origin.replace('127.0.0.1', 'localhost');

  const results = await page.evaluate(
    async ({ foreign }) => {
      const pdfInScope = await fetch('./handbuch.pdf');
      const pdfOutside = await fetch('/pdfs/brooks.pdf');
      const foreignAsset = await fetch(`${foreign}/academy/manifest.webmanifest`);
      const unknown = await fetch('./unbekannt.json');
      return [pdfInScope.status, pdfOutside.status, foreignAsset.status, unknown.status];
    },
    { foreign: foreignOrigin },
  );
  expect(results).toEqual([200, 200, 200, 404]);

  expect(await cacheState(page)).toEqual(before);
});

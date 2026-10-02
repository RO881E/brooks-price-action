import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { createServer, type Server } from 'node:http';
import type { AddressInfo, Socket } from 'node:net';
import { extname, join, normalize } from 'node:path';
import { expect, test, type Page } from '@playwright/test';
import { barCases } from '../src/content/barCases';
import { priceActionTrendsCourse, publishedLessons } from '../src/content/course';
import { marketBasicsDefinition } from '../src/content/courses/how-exchanges-work';
import { unitDefinitions } from '../src/content/units';
import { librarySubjects } from '../src/content/library';

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
  await expect(page.getByRole('heading', { name: 'Price Action: Trends' })).toBeVisible();
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
  await expect(page.getByRole('heading', { name: 'Price Action: Trends' })).toBeVisible();
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

  // Jede Einheit jedes Kurses liegt als eigener Chunk im Vorab-Cache.
  const chunks = builtPrecache().filter((path) => /^assets\/(introduction|part-\d\d|chapter-\d\d)-[A-Za-z0-9_-]{8}\.js$/.test(path));
  expect(chunks).toHaveLength(unitDefinitions.length + marketBasicsDefinition.units.length);

  serverState.down = true;
  await context.setOffline(true);
  for (const unit of [priceActionTrendsCourse.units.at(-1)!, priceActionTrendsCourse.units[3]]) {
    const lesson = unit.lessons[0];
    await page.goto(`${origin}/academy/#/lesson/${lesson.id}?step=1`);
    await expect(page.getByRole('heading', { name: lesson.steps[0].title, level: 1 })).toBeVisible();
  }
  // Suche über alle Kapitel funktioniert offline aus der Gliederung.
  await page.goto(`${origin}/academy/#/path`);
  await page.keyboard.press('/');
  await page.keyboard.type(priceActionTrendsCourse.units[5].lessons[1].title);
  await expect(page.getByRole('option').first()).toBeVisible();

  serverState.down = false;
  await context.setOffline(false);
  expect(errors).toEqual([]);
});

test('Bar-für-Bar-Trainer offline: Runde spielen und nach Neustart fortsetzen (F-15)', async ({ page, context }) => {
  const errors = trackConsoleErrors(page);
  const barCase = barCases.find((item) => item.status === 'approved')!;
  const unitIndex = priceActionTrendsCourse.units.findIndex((unit) => unit.id === barCase.unitId);
  const ids = priceActionTrendsCourse.units
    .slice(0, unitIndex + 1)
    .flatMap((unit) => unit.lessons)
    .filter((lesson) => lesson.status === 'published')
    .map((lesson) => lesson.id);
  await page.addInitScript((completed) => {
    if (localStorage.getItem('wqt-academy-progress-v1')) return;
    localStorage.setItem(
      'wqt-academy-progress-v1',
      JSON.stringify({ version: 10, completedLessonIds: completed, answers: {} }),
    );
  }, ids);
  await firstVisit(page);

  serverState.down = true;
  await context.setOffline(true);
  await page.goto(`${origin}/academy/#/train/${barCase.id}`);
  await page.getByRole('button', { name: 'Runde starten' }).click();
  // F-24: eigene Begründung auch offline.
  await page.getByRole('textbox', { name: 'Kurz: Warum entscheidest du so?' }).fill('Offline notiert');
  await page.getByRole('radio', { name: 'Abwarten', exact: true }).check();
  await page.getByRole('checkbox', { name: barCase.decisions[0].cues[0].label }).check();
  await page.getByRole('button', { name: 'Entscheidung abgeben' }).click();
  await expect(page.getByRole('heading', { name: /^Auflösung: Abwarten/ })).toBeVisible();
  await page.reload();
  await expect(page.getByText('Fortgesetzt')).toBeVisible();
  await expect(page.getByRole('heading', { name: /^Auflösung: Abwarten/ })).toBeVisible();
  await expect(page.locator('.trainer-compare').getByText('Offline notiert', { exact: true })).toBeVisible();
  // F-26: Tabellenansicht auch offline, mit den nach dem Reveal freigegebenen Bars.
  await page.getByRole('button', { name: 'Tabelle', exact: true }).click();
  const shown = barCase.decisions[1] ? barCase.decisions[1].afterBar + 1 : barCase.bars.length;
  await expect(page.locator('[data-bar-row]')).toHaveCount(shown);

  serverState.down = false;
  await context.setOffline(false);
  expect(errors).toEqual([]);
});

test('Rückblick auf eine abgeschlossene Runde offline (F-25)', async ({ page, context }) => {
  const errors = trackConsoleErrors(page);
  const barCase = barCases.find((item) => item.status === 'approved')!;
  const unitIndex = priceActionTrendsCourse.units.findIndex((unit) => unit.id === barCase.unitId);
  const ids = priceActionTrendsCourse.units
    .slice(0, unitIndex + 1)
    .flatMap((unit) => unit.lessons)
    .filter((lesson) => lesson.status === 'published')
    .map((lesson) => lesson.id);
  const answers = Object.fromEntries(
    barCase.decisions.map((decision) => [decision.id, { decision: 'wait', cueIds: [decision.cues[0].id] }]),
  );
  await page.addInitScript(
    ({ completed, caseId, runAnswers }) => {
      if (localStorage.getItem('wqt-academy-progress-v1')) return;
      localStorage.setItem(
        'wqt-academy-progress-v1',
        JSON.stringify({
          version: 14,
          completedLessonIds: completed,
          answers: {},
          guideSeenAt: '2026-09-29T08:00:00.000Z',
          caseRuns: {
            [caseId]: [
              { sessionId: 'run-offline', completedAt: '2026-09-29T09:00:00.000Z', best: 0, defensible: 0, mistake: 0, missedCues: 0, answers: runAnswers },
            ],
          },
        }),
      );
    },
    { completed: ids, caseId: barCase.id, runAnswers: answers },
  );
  await firstVisit(page);
  serverState.down = true;
  await context.setOffline(true);
  await page.goto(`${origin}/academy/#/train/${barCase.id}/review/run-offline`);
  await expect(page.getByRole('heading', { name: barCase.title, level: 1 })).toBeVisible();
  await page.getByRole('button', { name: 'Auflösung zeigen' }).click();
  await expect(page.getByText(barCase.decisions[0].explanation)).toBeVisible();
  serverState.down = false;
  await context.setOffline(false);
  expect(errors).toEqual([]);
});

test('Kurz lernen offline: Vorschläge, Überspringen und Lektion öffnen (F-23)', async ({ page, context }) => {
  const errors = trackConsoleErrors(page);
  await firstVisit(page);
  await page.getByRole('button', { name: 'Einführung schließen' }).click();
  serverState.down = true;
  await context.setOffline(true);
  await page.getByRole('region', { name: 'Kurz lernen' }).getByRole('button', { name: '≈ 10 Minuten' }).click();
  await expect(page.getByRole('heading', { name: 'Für etwa 10 Minuten', level: 1 })).toBeVisible();
  const card = page.locator('.study-card').first();
  const title = (await card.locator('h2').textContent())!;
  await page.getByRole('button', { name: `Überspringen: ${title}` }).click();
  await page.getByRole('button', { name: `Zurückholen: ${title}` }).click();
  await card.getByRole('button', { name: 'Lektion starten' }).click();
  await expect(page).toHaveURL(/#\/lesson\//);
  await expect(page.getByRole('button', { name: 'Weiter' })).toBeVisible();
  serverState.down = false;
  await context.setOffline(false);
  expect(errors).toEqual([]);
});

test('Fehlerbericht offline erstellen (F-28)', async ({ page, context }) => {
  const errors = trackConsoleErrors(page);
  await firstVisit(page);
  await page.getByRole('button', { name: 'Einführung schließen' }).click();
  serverState.down = true;
  await context.setOffline(true);
  await page.getByRole('button', { name: 'Hilfe', exact: true }).click();
  await page.getByRole('dialog').getByRole('button', { name: 'Fehler melden' }).click();
  const form = page.getByRole('dialog', { name: 'Fehler melden' });
  await form.getByLabel('Was ist passiert?').fill('Offline-Test');
  await expect(form.getByLabel('Vorschau – genau dieser Text wird kopiert')).toHaveValue(/Verbindung: offline/);
  await expect(form.getByRole('button', { name: 'Als Textdatei herunterladen' })).toBeEnabled();
  serverState.down = false;
  await context.setOffline(false);
  await expect(form.getByLabel('Vorschau – genau dieser Text wird kopiert')).toHaveValue(/Verbindung: online/);
  expect(errors).toEqual([]);
});

test('Nach Thema üben offline: Themenliste und Lernlink (F-27)', async ({ page, context }) => {
  const errors = trackConsoleErrors(page);
  await firstVisit(page);
  await page.getByRole('button', { name: 'Einführung schließen' }).click();
  serverState.down = true;
  await context.setOffline(true);
  await page.goto(`${origin}/academy/#/practice`);
  const section = page.getByRole('region', { name: 'Nach Thema üben' });
  await expect(section).toBeVisible();
  await expect(section.getByRole('article').first()).toBeVisible();
  await expect(section.getByRole('button', { name: /Runde starten/ })).toHaveCount(0);
  await section.getByRole('button', { name: /^(Lektion starten|Weiter im Lernpfad):/ }).first().click();
  await expect(page).toHaveURL(/#\/lesson\//);
  serverState.down = false;
  await context.setOffline(false);
  expect(errors).toEqual([]);
});

test('Bibliothek offline: Übersicht, Gebiet und Kursseite (mehrere Kurse)', async ({ page, context }) => {
  const errors = trackConsoleErrors(page);
  const volume = librarySubjects.find((subject) => subject.id === 'volume')!;
  const vwap = volume.courses.find((course) => course.id === 'vwap')!;
  await firstVisit(page);
  await page.getByRole('button', { name: 'Einführung schließen' }).click();
  serverState.down = true;
  await context.setOffline(true);
  await page.goto(`${origin}/academy/#/library`);
  await expect(page.getByRole('heading', { level: 1, name: 'Bibliothek' })).toBeVisible();
  // Im veröffentlichten Build gibt es nur den Kurs mit Inhalt – keinen Testkurs.
  await expect(page.locator('.library-mine > li')).toHaveCount(1);
  await expect(page.locator('.library-tile')).toHaveCount(librarySubjects.length);
  await page.getByRole('link', { name: volume.title, exact: true }).click();
  await expect(page.getByRole('heading', { level: 1, name: volume.title })).toBeVisible();
  await page.getByRole('link', { name: vwap.title, exact: true }).click();
  await expect(page.getByRole('heading', { level: 1, name: vwap.title })).toBeVisible();
  await expect(page.locator('.library-start')).toContainText('Geplant');
  serverState.down = false;
  await context.setOffline(false);
  expect(errors).toEqual([]);
});

test('der veröffentlichte Build enthält den Testkurs nicht (mehrere Kurse) @desktop', () => {
  const files = (dir: string): string[] =>
    readdirSync(dir, { withFileTypes: true }).flatMap((entry) =>
      entry.isDirectory() ? files(join(dir, entry.name)) : [join(dir, entry.name)],
    );
  const leaks = files(ROOT).filter(
    (file) => /\.(js|html|css|webmanifest)$/.test(file) && /Testkurs|test-course/.test(readFileSync(file, 'utf8')),
  );
  expect(leaks).toEqual([]);
});

test('Einführung und Hilfe offline (F-18)', async ({ page, context }) => {
  const errors = trackConsoleErrors(page);
  await firstVisit(page);
  serverState.down = true;
  await context.setOffline(true);
  await page.reload();
  const welcome = page.getByRole('region', { name: 'So lernst du in der WQT Academy' });
  await expect(welcome).toBeVisible();
  await welcome.getByRole('button', { name: 'Einführung schließen' }).click();
  await expect(welcome).toHaveCount(0);
  // Der Offline-Hinweis liegt unter der Kopfzeile: Menü, Suche und Hilfe bleiben bedienbar.
  const banner = page.locator('.app-status');
  await expect(banner).toBeVisible();
  const topbar = page.locator('.app-topbar');
  const bannerBox = (await banner.boundingBox())!;
  const topbarBox = (await topbar.boundingBox())!;
  expect(bannerBox.y).toBeGreaterThanOrEqual(topbarBox.y + topbarBox.height);
  await page.getByRole('button', { name: 'Suchen' }).first().click();
  await page.keyboard.press('Escape');
  await page.getByRole('button', { name: 'Hilfe', exact: true }).click();
  await expect(page.getByRole('dialog', { name: 'So lernst du in der WQT Academy' })).toBeVisible();
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
  await expect(page.getByRole('heading', { name: 'Price Action: Trends' })).toBeVisible();
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
  await expect(page.getByRole('heading', { name: 'Price Action: Trends' })).toBeVisible();

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
      const pdfOutside = await fetch('/pdfs/ausserhalb.pdf');
      const foreignAsset = await fetch(`${foreign}/academy/manifest.webmanifest`);
      const unknown = await fetch('./unbekannt.json');
      return [pdfInScope.status, pdfOutside.status, foreignAsset.status, unknown.status];
    },
    { foreign: foreignOrigin },
  );
  expect(results).toEqual([200, 200, 200, 404]);

  expect(await cacheState(page)).toEqual(before);
});

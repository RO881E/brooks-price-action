import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { c02BarCases } from '../src/content/barCases/c02';
import { priceActionTrendsCourse } from '../src/content/course';
import { ACADEMY_PROGRESS_VERSION } from '../src/features/progress';

/*
 * F-17: Transferprüfung mit C-02-Fällen. Die Fälle sind bis zur fachlichen Freigabe
 * Entwürfe; die Tests geben sie nur für den Browser-Test frei, indem die Datei im
 * Dev-Server umgeschrieben wird.
 */

const published = (through?: string) =>
  priceActionTrendsCourse.units
    .slice(0, through ? priceActionTrendsCourse.units.findIndex((unit) => unit.id === through) + 1 : undefined)
    .flatMap((unit) => unit.lessons)
    .filter((lesson) => lesson.status === 'published')
    .map((lesson) => lesson.id);

async function approveTransferCases(page: Page) {
  await page.route('**/src/content/barCases/c02.ts*', async (route) => {
    const response = await route.fetch();
    const body = (await response.text()).replace(/status:\s*["']draft["']/g, 'status: "approved"');
    await route.fulfill({ response, body });
  });
}

/** Simuliert einen Stand ohne freigegebene Transferfälle. */
async function unapproveTransferCases(page: Page) {
  await page.route('**/src/content/barCases/c02.ts*', async (route) => {
    const response = await route.fetch();
    const body = (await response.text()).replace(/status:\s*["']approved["']/g, 'status: "draft"');
    await route.fulfill({ response, body });
  });
}

async function seed(page: Page, ids: string[]) {
  await page.addInitScript(
    ({ completed, version }) => {
      if (sessionStorage.getItem('seeded')) return;
      sessionStorage.setItem('seeded', '1');
      localStorage.setItem(
        'wqt-academy-progress-v1',
        JSON.stringify({ version, completedLessonIds: completed, answers: {}, guideSeenAt: '2026-09-29T08:00:00.000Z' }),
      );
    },
    { completed: ids, version: ACADEMY_PROGRESS_VERSION },
  );
}

const stored = (page: Page) => page.evaluate(() => JSON.parse(localStorage.getItem('wqt-academy-progress-v1') ?? '{}'));
const SPOILER = /Beste Wahl|Nicht tragfähig|Vertretbar|Erkannt|Übersehen/;

/** Beantwortet einen Punkt mit „Abwarten“ und dem ersten Hinweis. */
async function answerPoint(page: Page) {
  await page.getByRole('radio', { name: 'Abwarten' }).check();
  await page.getByRole('checkbox').first().check();
  await page.getByRole('button', { name: 'Antwort abgeben' }).click();
}

async function playAll(page: Page, cases = c02BarCases.length) {
  const caseResults = c02BarCases.slice(0, cases);
  for (const barCase of caseResults) {
    if (await page.getByRole('button', { name: 'Fall beginnen' }).count()) {
      await page.getByRole('button', { name: 'Fall beginnen' }).click();
    }
    await expect(page.getByRole('heading', { level: 2, name: barCase.title })).toBeVisible();
    for (const _ of barCase.decisions) {
      await expect(page.getByText(SPOILER)).toHaveCount(0);
      await answerPoint(page);
    }
  }
}

test.describe('F-17 Transferprüfung', () => {
  test('ohne freigegebene Fälle: kein Angebot, Adresse fällt zurück', async ({ page }) => {
    await unapproveTransferCases(page);
    await seed(page, published());
    await page.goto('/#/practice');
    await expect(page.getByRole('heading', { name: 'Analyse-Training' })).toBeVisible();
    await expect(page.getByRole('region', { name: 'Transferprüfung' })).toHaveCount(0);
    await page.goto('/#/transfer');
    await expect(page.getByRole('heading', { name: 'Neue Fälle ohne Zwischenlösung' })).toHaveCount(0);
  });

  test('Erstversuch: alle Fälle ohne Zwischenlösung, dann Auswertung; Wiederholung ist gekennzeichnet', async ({ page }) => {
    test.setTimeout(120_000);
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await approveTransferCases(page);
    await seed(page, published());
    await page.goto('/#/practice');
    const entry = page.getByRole('region', { name: 'Transferprüfung' });
    await expect(entry.getByText(`${c02BarCases.length} neue Fälle`)).toBeVisible();
    const before = await stored(page);
    await entry.getByRole('button', { name: 'Zur Transferprüfung' }).click();
    await expect(page).toHaveURL(/#\/transfer$/);
    await expect(page.getByText('Dies ist dein Erstversuch.')).toBeVisible();
    await page.getByRole('button', { name: 'Prüfung starten' }).click();

    await playAll(page);
    // Auswertung erst jetzt.
    await expect(page.getByRole('heading', { name: 'Auswertung' })).toBeVisible();
    for (const barCase of c02BarCases) {
      const article = page.getByRole('article', { name: new RegExp(barCase.title) });
      await expect(article.getByText('Erstversuch')).toBeVisible();
      await expect(article.getByText(/Deine Wahl:/).first()).toBeVisible();
    }
    await expect(page.getByText(SPOILER).first()).toBeVisible();
    const lessonLink = page.getByRole('button', { name: /^Lektion öffnen: / }).first();
    await expect(lessonLink).toBeVisible();

    // Keine XP, keine Lernaktivität; nur Runden der C-02-Fälle wurden gespeichert.
    const after = await stored(page);
    const { caseRuns, caseSessions, updatedAt: _a, ...restAfter } = after;
    const { caseRuns: _r, caseSessions: _s, updatedAt: _b, ...restBefore } = before;
    expect(restAfter).toEqual(restBefore);
    expect(Object.keys(caseRuns).sort()).toEqual(c02BarCases.map((barCase) => barCase.id).sort());
    expect(Object.keys(caseSessions)).toEqual([]);

    // Wiederholung.
    await expect(page.getByText(/Dies ist eine Wiederholung \(Durchlauf 2\)/)).toBeVisible();
    await page.getByRole('button', { name: 'Als Wiederholung starten' }).click();
    await playAll(page);
    for (const barCase of c02BarCases) {
      await expect(page.getByRole('article', { name: new RegExp(barCase.title) }).getByText('Wiederholung (Durchlauf 2)')).toBeVisible();
    }
    const twice = await stored(page);
    for (const barCase of c02BarCases) expect(twice.caseRuns[barCase.id]).toHaveLength(2);
    expect(errors).toEqual([]);
  });

  test('Reload mitten in der Prüfung setzt fort; die Auflösung bleibt verborgen', async ({ page }) => {
    await approveTransferCases(page);
    await seed(page, published());
    await page.goto('/#/transfer');
    await page.getByRole('button', { name: 'Prüfung starten' }).click();
    const first = c02BarCases[0];
    await expect(page.getByRole('heading', { level: 2, name: first.title })).toBeVisible();
    for (const _ of first.decisions) await answerPoint(page);
    await expect(page.getByRole('button', { name: 'Fall beginnen' })).toBeVisible();
    await page.reload();
    await expect(page.getByText(`Fall 2 von ${c02BarCases.length} · Erstversuch`)).toBeVisible();
    await expect(page.getByText(SPOILER)).toHaveCount(0);
    expect(Object.keys((await stored(page)).caseRuns)).toEqual([first.id]);
  });

  test('nur erreichte Kapitel: gesperrte Fälle werden nicht angeboten', async ({ page }) => {
    await approveTransferCases(page);
    await seed(page, published('price-action-trends.chapter-01'));
    await page.goto('/#/transfer');
    await expect(page.getByText(/1 Fall aus bereits abgeschlossenen Kapiteln/)).toBeVisible();
    await expect(page.getByText(/weitere öffnen sich mit späteren Kapiteln/)).toBeVisible();
    await page.getByRole('button', { name: 'Prüfung starten' }).click();
    await expect(page.getByRole('heading', { level: 2, name: c02BarCases[0].title })).toBeVisible();
    await expect(page.getByText(`Fall 1 von 1`)).toBeVisible();
  });

  test('neuer Stand: erklärter Leerzustand mit Lernlink statt kaputter Prüfung', async ({ page }) => {
    await approveTransferCases(page);
    await seed(page, []);
    await page.goto('/#/transfer');
    await expect(page.getByText('Noch keine Fälle zugänglich')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Zur Lektion' })).toBeVisible();
    await expect(page.getByRole('button', { name: /Prüfung starten/ })).toHaveCount(0);
  });

  test('Tastatur, 360 px ohne Überlauf und keine Axe-Verstöße', async ({ page }) => {
    await approveTransferCases(page);
    await seed(page, published());
    await page.goto('/#/transfer');
    await page.getByRole('button', { name: 'Prüfung starten' }).click();
    await expect(page.getByRole('heading', { level: 2, name: c02BarCases[0].title })).toBeVisible();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(0);
    const axe = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(axe.violations.map((violation) => violation.id)).toEqual([]);
    await page.getByRole('radio', { name: 'Long' }).focus();
    await page.keyboard.press('Space');
    await expect(page.getByRole('radio', { name: 'Long' })).toBeChecked();
    await page.getByRole('checkbox').first().focus();
    await page.keyboard.press('Space');
    await page.getByRole('button', { name: 'Antwort abgeben' }).focus();
    await page.keyboard.press('Enter');
    await expect(page.getByText(SPOILER)).toHaveCount(0);
  });
});

import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { barCases } from '../src/content/barCases';
import { priceActionTrendsCourse } from '../src/content/course';

/*
 * F-24: eigene Begründung vor dem Reveal. Desktop und Mobil.
 */

const barCase = barCases.find((item) => item.status === 'approved' && item.decisions.length >= 2)!;
const unitIndex = priceActionTrendsCourse.units.findIndex((unit) => unit.id === barCase.unitId);
const unlockIds = priceActionTrendsCourse.units
  .slice(0, unitIndex + 1)
  .flatMap((unit) => unit.lessons)
  .filter((lesson) => lesson.status === 'published')
  .map((lesson) => lesson.id);

async function seed(page: Page) {
  await page.addInitScript((ids) => {
    if (sessionStorage.getItem('seeded')) return;
    sessionStorage.setItem('seeded', '1');
    localStorage.setItem(
      'wqt-academy-progress-v1',
      JSON.stringify({ version: 13, completedLessonIds: ids, answers: {}, guideSeenAt: '2026-09-29T08:00:00.000Z' }),
    );
  }, unlockIds);
}

const stored = (page: Page) =>
  page.evaluate(() => JSON.parse(localStorage.getItem('wqt-academy-progress-v1') ?? '{}'));

const ownText = (page: Page) => page.getByRole('textbox', { name: 'Kurz: Warum entscheidest du so?' });

async function start(page: Page) {
  await page.goto(`/#/train/${barCase.id}`);
  await page.getByRole('button', { name: /Runde starten/ }).click();
}

async function decide(page: Page, index: number) {
  const point = barCase.decisions[index];
  await page.getByRole('radio', { name: 'Abwarten', exact: true }).check();
  await page.getByRole('checkbox', { name: point.cues[0].label }).check();
  await page.getByRole('button', { name: 'Entscheidung abgeben' }).click();
  await expect(page.getByRole('heading', { name: /^Auflösung: Abwarten/ })).toBeFocused();
}

async function finish(page: Page, fromIndex: number) {
  for (let index = fromIndex; index < barCase.decisions.length; index += 1) {
    await page.getByRole('button', { name: 'Weiter zur nächsten Entscheidung' }).click();
    await decide(page, index);
  }
  await page.getByRole('button', { name: 'Auswertung anzeigen' }).click();
}

test.describe('F-24 Eigene Begründung', () => {
  test('ohne Eingabe: erlaubt, Hinweis nach der Abgabe, nichts gespeichert, keine XP', async ({ page }) => {
    await seed(page);
    await start(page);
    await decide(page, 0);
    await expect(page.getByText('Keine eigene Begründung notiert.')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Fachliche Einordnung' })).toBeVisible();
    await finish(page, 1);
    const data = await stored(page);
    expect(data.caseRuns[barCase.id][0].reasoning).toBeUndefined();
    expect(data.lessonResults).toEqual({});
  });

  test('Text und Sicherheit per Tastatur, Reload vor und nach der Abgabe, Klartext-Anzeige', async ({ page }) => {
    await seed(page);
    await start(page);
    const text = 'Erst <b>Bestätigung</b> abwarten – der Schluss ist schwach.';
    await ownText(page).fill(text);
    const confidence = page.getByRole('radiogroup', { name: 'Wie sicher bist du?' });
    await confidence.getByRole('radio', { name: 'Keine Angabe' }).focus();
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowRight');
    await expect(confidence.getByRole('radio', { name: 'Eher sicher' })).toBeChecked();

    // Reload vor der Entscheidung: Entwurf bleibt.
    await page.reload();
    await expect(ownText(page)).toHaveValue(text);
    await expect(confidence.getByRole('radio', { name: 'Eher sicher' })).toBeChecked();

    await decide(page, 0);
    const own = page.locator('.trainer-compare');
    await expect(own.getByText(text, { exact: true })).toBeVisible();
    await expect(own.getByText('Sicherheit: Eher sicher')).toBeVisible();
    // Kein HTML aus der Eingabe.
    await expect(own.locator('b')).toHaveCount(0);
    // Neben der fachlichen Erklärung, ohne Bewertung des Freitexts.
    await expect(own.getByText(barCase.decisions[0].explanation)).toBeVisible();

    // Reload nach der Abgabe: eingefrorene Fassung bleibt, keine Eingabe mehr.
    await page.reload();
    await expect(page.locator('.trainer-compare').getByText(text, { exact: true })).toBeVisible();
    await expect(ownText(page)).toHaveCount(0);

    await finish(page, 1);
    await expect(page.locator('.trainer-summary').getByText(text, { exact: true })).toBeVisible();
    const [run] = (await stored(page)).caseRuns[barCase.id];
    expect(run.reasoning).toEqual({ [barCase.decisions[0].id]: { text, confidence: 'fairly' } });
  });

  test('Längenlimit 500 Zeichen und getrennter zweiter Versuch', async ({ page }) => {
    await seed(page);
    await start(page);
    await ownText(page).fill('x'.repeat(620));
    await expect(ownText(page)).toHaveValue('x'.repeat(500));
    await expect(page.getByText('500 von 500 Zeichen.')).toBeVisible();
    await decide(page, 0);
    await finish(page, 1);

    await page.getByRole('button', { name: 'Neue Runde' }).click();
    await expect(ownText(page)).toHaveValue('');
    await ownText(page).fill('Zweiter Versuch');
    await decide(page, 0);
    await finish(page, 1);
    const runs = (await stored(page)).caseRuns[barCase.id];
    const id = barCase.decisions[0].id;
    expect(runs.map((item: { reasoning?: Record<string, { text: string }> }) => item.reasoning?.[id]?.text)).toEqual([
      'x'.repeat(500),
      'Zweiter Versuch',
    ]);
    expect(runs[0].sessionId).not.toBe(runs[1].sessionId);
  });

  test('Datenschutzhinweis bei der Sicherung', async ({ page }) => {
    await seed(page);
    await page.goto('/#/settings');
    await expect(page.getByText(/Notizen und eigene Begründungen stehen im Klartext in der Datei/)).toBeVisible();
  });

  test('360 px: kein Überlauf, axe ohne Befund', async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 740 });
    await seed(page);
    await start(page);
    await ownText(page).fill('Eine längere eigene Begründung mit einem sehr langen Wort: Trendfortsetzungswahrscheinlichkeit.');
    for (const phase of ['Eingabe', 'Auflösung']) {
      if (phase === 'Auflösung') await decide(page, 0);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow, phase).toBeLessThanOrEqual(0);
      const axe = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
        .analyze();
      expect(axe.violations.map((violation) => violation.id), phase).toEqual([]);
    }
  });
});

import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { priceActionTrendsCourse } from '../src/content/course';
import { glossaryEntries } from '../src/content/glossary';

/*
 * Stufe 4b: Begriffe-Memory. Reine Übung ohne Einfluss auf den Lernstand.
 */

const AXE_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];
const intro = priceActionTrendsCourse.units[0].lessons.filter((lesson) => lesson.status === 'published');
const definitionOf = (term: string) => glossaryEntries.find((entry) => entry.term === term)!.definition;

async function seed(page: Page, ids: string[]) {
  await page.addInitScript((completed) => {
    if (sessionStorage.getItem('seeded')) return;
    sessionStorage.setItem('seeded', '1');
    localStorage.setItem(
      'wqt-academy-progress-v1',
      JSON.stringify({ version: 14, completedLessonIds: completed, answers: {}, guideSeenAt: '2026-09-29T08:00:00.000Z' }),
    );
  }, ids);
}

const stored = (page: Page) => page.evaluate(() => localStorage.getItem('wqt-academy-progress-v1'));

async function play(page: Page) {
  await page.goto('/#/practice');
  await page.getByRole('button', { name: /^Spielen/ }).click();
  await expect(page.locator('.match-terms button')).toHaveCount(5);
}

test.describe('Begriffe-Memory', () => {
  test('neuer Stand: erklärt, warum noch nicht spielbar', async ({ page }) => {
    await seed(page, []);
    await page.goto('/#/practice');
    const game = page.locator('.match-game');
    await expect(game).toContainText('Noch 0 von mindestens 4 Begriffen bereit');
    await expect(game.getByRole('button', { name: /^Spielen/ })).toHaveCount(0);
  });

  test('Runde spielen: Paare finden, Ergebnis mit Bulle, Lernstand bleibt unverändert', async ({ page }) => {
    await seed(page, intro.map((lesson) => lesson.id));
    await page.goto('/#/practice');
    const before = await stored(page);
    await play(page);
    const terms = await page.locator('.match-terms button span:first-child').allTextContents();
    expect(new Set(terms).size).toBe(5);
    for (const term of terms) {
      await page.locator('.match-terms button', { hasText: term }).first().click();
      await page.locator('.match-definitions button:not([disabled])', { hasText: definitionOf(term) }).first().click();
      await expect(page.getByRole('status').filter({ hasText: `Passt: „${term}“.` })).toBeVisible();
    }
    await expect(page.getByText('Alle Paare gefunden.')).toBeVisible();
    await expect(page.locator('.match-game .bull-bubble')).toContainText('Alle Paare auf Anhieb');
    await expect(page.locator('.match-game .bull-says img.bull')).toHaveAttribute('alt', '');
    expect(await stored(page)).toBe(before);
    await page.getByRole('button', { name: 'Neue Runde' }).click();
    await expect(page.locator('.match-terms button:not([disabled])')).toHaveCount(5);
  });

  test('Fehlversuch erklärt statt zu bestrafen und zählt nur in der Runde', async ({ page }) => {
    await seed(page, intro.map((lesson) => lesson.id));
    await play(page);
    const terms = await page.locator('.match-terms button span:first-child').allTextContents();
    const [a, b] = terms;
    await page.locator('.match-terms button', { hasText: a }).first().click();
    await page.locator('.match-definitions button', { hasText: definitionOf(b) }).first().click();
    await expect(page.getByRole('status').filter({ hasText: `gehört zu „${b}“` })).toBeVisible();
    await expect(page.getByText('Fehlversuche in dieser Runde: 1.')).toBeVisible();
    await expect(page.locator('.match-game')).not.toContainText(/verloren|verpasst|falsch\b/i);
    // Beschreibung ohne gewählten Begriff: nur ein Hinweis.
    await page.locator('.match-definitions button', { hasText: definitionOf(terms[2]) }).first().click();
    await expect(page.getByRole('status').filter({ hasText: 'Wähle zuerst einen Begriff.' })).toBeVisible();
  });

  test('Tastatur, 360 px ohne Überlauf, axe ohne Befund; Beenden führt zurück', async ({ page }) => {
    await seed(page, intro.map((lesson) => lesson.id));
    await play(page);
    const first = page.locator('.match-terms button').first();
    await first.focus();
    await page.keyboard.press('Enter');
    await expect(first).toHaveAttribute('aria-pressed', 'true');
    await page.keyboard.press('Enter');
    await expect(first).toHaveAttribute('aria-pressed', 'false');
    expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBeLessThanOrEqual(0);
    const axe = await new AxeBuilder({ page }).include('.match-game').withTags(AXE_TAGS).analyze();
    expect(axe.violations.map((violation) => violation.id)).toEqual([]);
    await page.getByRole('button', { name: 'Beenden' }).click();
    await expect(page.getByRole('button', { name: /^Spielen/ })).toBeVisible();
  });
});

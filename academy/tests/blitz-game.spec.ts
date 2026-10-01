import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { priceActionTrendsCourse } from '../src/content/course';

/*
 * Stufe 4c: Blitzrunde. Freiwillig, Zeit zuschaltbar (gleichwertig ohne Zeit), Pause,
 * reine Übung ohne Einfluss auf den Lernstand.
 */

const AXE_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];
const intro = priceActionTrendsCourse.units[0].lessons.filter((lesson) => lesson.status === 'published');

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
const game = (page: Page) => page.locator('.blitz-game');

async function answerAll(page: Page) {
  for (let step = 0; step < 12; step += 1) {
    if (await page.getByRole('heading', { name: 'Blitzrunde beendet' }).isVisible()) return;
    await game(page).getByRole('radio').first().click();
    const finish = game(page).getByRole('button', { name: /Nächste Frage|Ergebnis anzeigen/ });
    await expect(finish).toBeFocused();
    await finish.click();
  }
}

test.describe('Blitzrunde', () => {
  test('neuer Stand: erklärt, warum noch nicht spielbar', async ({ page }) => {
    await seed(page, []);
    await page.goto('/#/practice');
    await expect(game(page)).toContainText('Noch 0 von mindestens 3 Fragen bereit');
    await expect(game(page).getByRole('button', { name: /Sekunden|Ohne Zeit/ })).toHaveCount(0);
  });

  test('ohne Zeit: bis zum Ende spielen, Ergebnis mit Bulle, Lernstand unverändert', async ({ page }) => {
    await seed(page, intro.map((lesson) => lesson.id));
    await page.goto('/#/practice');
    const before = await stored(page);
    await game(page).getByRole('button', { name: 'Ohne Zeit spielen' }).click();
    await expect(game(page).locator('.blitz-timer')).toHaveText('ohne Zeit');
    await expect(game(page).getByRole('button', { name: 'Pause' })).toHaveCount(0);
    await answerAll(page);
    await expect(page.getByRole('heading', { name: 'Blitzrunde beendet' })).toBeFocused();
    await expect(game(page).locator('.blitz-score')).toContainText(/\d+ von \d+ beantworteten Fragen richtig/);
    await expect(game(page).locator('img.bull')).toHaveAttribute('alt', '');
    expect(await stored(page)).toBe(before);
    await expect(game(page).getByText('Nichts davon wird gespeichert.')).toBeVisible();
    await game(page).getByRole('button', { name: 'Fertig' }).click();
    await expect(game(page).getByRole('button', { name: 'Ohne Zeit spielen' })).toBeVisible();
  });

  test('mit Zeit: Anzeige, Ansagen nur zu wenigen Zeitpunkten, Pause hält die Zeit an, Ende nach 60 s', async ({ page }) => {
    await page.clock.install();
    await seed(page, intro.map((lesson) => lesson.id));
    await page.goto('/#/practice');
    const before = await stored(page);
    await game(page).getByRole('button', { name: 'Mit 60 Sekunden' }).click();
    const timer = game(page).locator('.blitz-timer');
    await expect(timer).toHaveText('60 s');
    await page.clock.runFor(5000);
    await expect(timer).toHaveText(/^5\d s$/);
    const running = await timer.textContent();
    // Pause: die Zeit steht, Antworten sind gesperrt.
    await game(page).getByRole('button', { name: 'Pause' }).click();
    await page.clock.runFor(20000);
    await expect(timer).toHaveText('Pause');
    await expect(game(page).getByRole('radio').first()).toBeDisabled();
    await game(page).getByRole('button', { name: 'Weiter mit Zeit' }).click();
    await expect(timer).toHaveText(running!);
    await page.clock.runFor(30000);
    await expect(game(page).getByRole('status').filter({ hasText: 'Noch 30 Sekunden.' })).toBeAttached();
    await page.clock.runFor(30000);
    await expect(page.getByRole('heading', { name: 'Blitzrunde beendet' })).toBeVisible();
    await expect(game(page).getByText('Diesmal wurde keine Frage beantwortet.')).toBeVisible();
    expect(await stored(page)).toBe(before);
  });

  test('Falsche Antworten werden erklärt und führen zur Lektion; Tastatur, 360 px, axe', async ({ page }) => {
    await seed(page, intro.map((lesson) => lesson.id));
    await page.goto('/#/practice');
    await game(page).getByRole('button', { name: 'Ohne Zeit spielen' }).click();
    // Bewusst die letzte Antwort wählen, bis ein Fehler dabei ist.
    let sawWrong = false;
    for (let step = 0; step < 12 && !sawWrong; step += 1) {
      await game(page).getByRole('radio').last().click();
      sawWrong = (await game(page).locator('.practice-feedback.incorrect').count()) > 0;
      if (sawWrong) {
        await expect(game(page).locator('.practice-feedback.incorrect')).toContainText('Nicht ganz.');
        await expect(game(page).locator('.practice-feedback img.bull')).toHaveAttribute('alt', '');
      }
      if (!sawWrong) await game(page).getByRole('button', { name: /Nächste Frage|Ergebnis anzeigen/ }).click();
    }
    expect(sawWrong).toBe(true);
    expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBeLessThanOrEqual(0);
    const axe = await new AxeBuilder({ page }).include('.blitz-game').withTags(AXE_TAGS).analyze();
    expect(axe.violations.map((violation) => violation.id)).toEqual([]);
    await game(page).getByRole('button', { name: 'Beenden' }).click();
    await expect(game(page).getByRole('list', { name: 'Zum Nachlesen' })).toBeVisible();
    await game(page).getByRole('button', { name: /Lektion öffnen/ }).first().click();
    await expect(page).toHaveURL(/#\/lesson\//);
  });
});

import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { publishedLessons } from '../src/content/course';

/*
 * Level-System: Level aus den XP aller Kurse, sichtbar im Lernpfad und unter Fortschritt, Aufstieg mit
 * Meldung. Kein eigener gespeicherter Zustand.
 */

const AXE_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];
const later = publishedLessons[5];

/** Eine spätere Lektion mit 80 XP abgeschlossen – die erste Lektion bringt dann Level 2. */
const almostLevelTwo = {
  version: 16,
  completedLessonIds: [later.id],
  answers: {},
  lessonResults: {
    [later.id]: { firstCompletedAt: '2026-10-01T08:00:00.000Z', lastCompletedAt: '2026-10-01T08:00:00.000Z', xpAwarded: 80 },
  },
  guideSeenAt: '2026-10-01T07:00:00.000Z',
};

async function seed(page: Page, record: Record<string, unknown>) {
  await page.addInitScript((value) => {
    if (sessionStorage.getItem('seeded')) return;
    sessionStorage.setItem('seeded', '1');
    localStorage.setItem('wqt-academy-progress-v1', JSON.stringify(value));
  }, record);
}

test.describe('Level-System', () => {
  test('Level im Lernpfad, Aufstieg mit Meldung, Rangleiter unter Fortschritt', async ({ page }) => {
    await seed(page, almostLevelTwo);
    await page.goto('/');
    const line = page.locator('.course-hero .level-line');
    await expect(line).toContainText('Level 1 · Neuling');
    await expect(line).toContainText('Noch 20 XP bis Level 2');
    // Nichts zu feiern beim Laden.
    await expect(page.locator('.celebration')).toHaveCount(0);

    await page.getByRole('button', { name: /Der Chart ist das Ergebnis: Jetzt lernen/ }).click();
    await page.getByRole('button', { name: 'Weiter' }).click();
    await page.getByRole('button', { name: 'Weiter' }).click();
    await page.getByRole('button', { name: 'Weiter' }).click();
    await page.getByRole('radio', { name: /Die schwache Reaktion/ }).click();
    await page.getByRole('button', { name: 'Weiter' }).click();
    await page.getByRole('button', { name: 'Lektion abschließen' }).click();
    // Kommt das Tagesziel gleichzeitig, steht der Aufstieg als Zeile in derselben Meldung.
    await expect(page.locator('.celebration')).toContainText('Level 2: Neuling');

    await page.getByRole('button', { name: 'Zurück zum Lernpfad' }).click();
    await expect(page.locator('.course-hero .level-line')).toContainText('Level 2 · Neuling');

    await page.goto('/#/progress');
    const panel = page.getByRole('region', { name: 'Dein Level' });
    await expect(panel).toContainText('Level 2');
    await expect(panel.locator('.level-ranks li')).toHaveCount(9);
    await expect(panel.locator('[aria-current="step"]')).toContainText('Neuling');
    await expect(panel).toContainText('Nächster Rang: „Chartleser“ ab Level 5');
  });

  test('barrierefrei und schmal (360 px), auch dunkel', async ({ page }) => {
    await seed(page, almostLevelTwo);
    await page.setViewportSize({ width: 360, height: 740 });
    for (const theme of ['light', 'dark']) {
      await page.emulateMedia({ colorScheme: theme as 'light' | 'dark' });
      for (const hash of ['/#/', '/#/progress']) {
        await page.goto(hash);
        await expect(page.locator('.level-line').first()).toBeVisible();
        const results = await new AxeBuilder({ page }).withTags(AXE_TAGS).analyze();
        expect(results.violations.map((v) => `${theme} ${hash}: ${v.id}`)).toEqual([]);
        expect(await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(0);
      }
    }
  });
});

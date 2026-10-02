import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { priceActionTrendsCourse } from '../src/content/course';

/*
 * F-18: Einführung beim ersten Besuch und jederzeit über „Hilfe“. Desktop und Mobil.
 */

const firstLesson = priceActionTrendsCourse.units[0].lessons[0];
const welcome = (page: Page) => page.getByRole('region', { name: 'So lernst du in der WQT Academy' });
const helpButton = (page: Page) => page.getByRole('button', { name: 'Hilfe', exact: true });

const stored = (page: Page) =>
  page.evaluate(() => JSON.parse(localStorage.getItem('wqt-academy-progress-v1') ?? '{}'));

test.describe('F-18 Einführung', () => {
  test('brandneuer Stand: Einführung, Schließen bleibt nach Reload, kein Lerntag und keine XP', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto('/');
    await expect(welcome(page)).toBeVisible();
    for (const way of ['Lernpfad', 'Üben', 'Chart trainieren']) {
      await expect(welcome(page).getByText(way, { exact: true })).toBeVisible();
    }
    // Noch sind alle Trainerfälle gesperrt – kein fertiges Angebot.
    await expect(welcome(page).getByText('Die Fälle werden frei, sobald du die zugehörigen Kapitel erreicht hast.', { exact: false })).toBeVisible();
    await expect(welcome(page).getByText(/nur in diesem Browser auf diesem Gerät/)).toBeVisible();

    await welcome(page).getByRole('button', { name: 'Einführung schließen' }).click();
    await expect(welcome(page)).toHaveCount(0);
    await expect(helpButton(page)).toBeFocused();

    await page.reload();
    await expect(page.getByRole('heading', { name: 'Price Action: Trends' })).toBeVisible();
    await expect(welcome(page)).toHaveCount(0);
    const data = await stored(page);
    expect(typeof data.guideSeenAt).toBe('string');
    expect(data.activityDays).toEqual([]);
    expect(data.dailyActivity).toEqual({});
    expect(data.completedLessonIds).toEqual([]);
    expect(data.lessonResults).toEqual({});
    expect(errors).toEqual([]);
  });

  test('„Erste Lektion starten“ öffnet die erste Lektion', async ({ page }) => {
    await page.goto('/');
    await welcome(page).getByRole('button', { name: `Erste Lektion starten: ${firstLesson.title}` }).click();
    await expect(page).toHaveURL(new RegExp(`#/lesson/${firstLesson.id}`));
    await page.goBack();
    await expect(page.getByRole('heading', { name: 'Price Action: Trends' })).toBeVisible();
    await expect(welcome(page)).toHaveCount(0);
  });

  test('bestehender Fortschritt: keine erzwungene Einführung; Hilfe jederzeit per Tastatur', async ({ page }) => {
    await page.addInitScript((id) => {
      if (sessionStorage.getItem('seeded')) return;
      sessionStorage.setItem('seeded', '1');
      localStorage.setItem('wqt-academy-progress-v1', JSON.stringify({ version: 2, completedLessonIds: [id], answers: {} }));
    }, firstLesson.id);
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Price Action: Trends' })).toBeVisible();
    await expect(welcome(page)).toHaveCount(0);

    await helpButton(page).focus();
    await page.keyboard.press('Enter');
    const dialog = page.getByRole('dialog', { name: 'So lernst du in der WQT Academy' });
    await expect(dialog).toBeVisible();
    await expect(dialog.getByRole('heading', { name: 'So lernst du in der WQT Academy' })).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(dialog).toHaveCount(0);
    await expect(helpButton(page)).toBeFocused();

    // Wiederaufruf und Weg zu den Einstellungen (Sicherung).
    await helpButton(page).click();
    await page.getByRole('button', { name: 'Zu den Einstellungen' }).click();
    await expect(page).toHaveURL(/#\/settings$/);
    await expect(page.getByRole('button', { name: 'Sicherung herunterladen' })).toBeVisible();
    // Hilfe ändert keinen Lernstand.
    expect((await stored(page)).completedLessonIds).toEqual([firstLesson.id]);
  });

  test('360 px: kein Überlauf, axe ohne Befund – Einführung und Hilfe-Dialog', async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 740 });
    await page.goto('/');
    await expect(welcome(page)).toBeVisible();
    const check = async (label: string) => {
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow, label).toBeLessThanOrEqual(0);
      const axe = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
        .analyze();
      expect(axe.violations.map((violation) => violation.id), label).toEqual([]);
    };
    await check('welcome');
    await helpButton(page).click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await check('dialog');
  });
});

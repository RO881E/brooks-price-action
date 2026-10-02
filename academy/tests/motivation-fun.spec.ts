import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { barAlbum } from '../src/content/barAlbum';
import { priceActionTrendsCourse } from '../src/content/course';
import { openCollection } from './practiceTab';

/*
 * Stufe 3 „spielerischer“: Wochenblick und Ziel-Ring auf „Heute“, Missionstruhe und
 * Bar-Album unter „Fortschritt“. Alles wird aus dem echten Lernstand abgeleitet.
 */

const AXE_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];
const lessons = new Map(priceActionTrendsCourse.units.flatMap((unit) => unit.lessons).map((lesson) => [lesson.id, lesson]));
const first = barAlbum[1];
const firstLesson = lessons.get(first.lessonId)!;
const todayKey = () => new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);

async function seed(page: Page, extra: Record<string, unknown> = {}) {
  await page.addInitScript(
    (data) => {
      if (sessionStorage.getItem('seeded')) return;
      sessionStorage.setItem('seeded', '1');
      localStorage.setItem(
        'wqt-academy-progress-v1',
        JSON.stringify({ version: 14, completedLessonIds: [], answers: {}, guideSeenAt: '2026-09-29T08:00:00.000Z', ...data }),
      );
    },
    extra,
  );
}

const axe = async (page: Page, include: string) => {
  const result = await new AxeBuilder({ page }).include(include).withTags(AXE_TAGS).analyze();
  expect(result.violations.map((violation) => violation.id)).toEqual([]);
};

test.describe('Heute: Wochenblick und Ziel-Ring', () => {
  test('neuer Stand: 0 von 7, Ring leer, keine Verlust-Sprache, axe ohne Befund', async ({ page }) => {
    await seed(page);
    await page.goto('/#/');
    const strip = page.getByRole('list', { name: 'Wochenblick' });
    await expect(strip.getByRole('listitem')).toHaveCount(7);
    await expect(page.getByText('0 von 7')).toBeVisible();
    expect(await page.locator('.bull-ring').evaluate((el) => el.style.getPropertyValue('--ring'))).toBe('0%');
    await expect(page.locator('.today-primary')).not.toContainText(/verpasst|verloren|Serie/i);
    expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBeLessThanOrEqual(0);
    await axe(page, '.today-primary');
  });

  test('Lerntag heute: Punkt gefüllt, Ring voll, „Tagesziel geschafft“', async ({ page }) => {
    const day = todayKey();
    await seed(page, { activityDays: [day], dailyActivity: { [day]: { lessons: 1, reviewSessions: 0, xp: 40 } } });
    await page.goto('/#/');
    await expect(page.getByText('1 von 7')).toBeVisible();
    expect(await page.locator('.bull-ring').evaluate((el) => el.style.getPropertyValue('--ring'))).toBe('100%');
    await expect(page.getByText(/Tagesziel heute: 1 von 1 – geschafft/)).toBeVisible();
    await expect(page.locator('.week-strip li.today')).toContainText('Ziel erreicht');
  });
});

test.describe('Fortschritt: Missionstruhe und Bar-Album', () => {
  test('neuer Stand: Truhe geschlossen, Album 0 Karten, alle Karten mit Hinweis gesperrt', async ({ page }) => {
    await seed(page);
    await page.goto('/#/progress');
    await openCollection(page);
    await expect(page.getByText(/dann öffnet sich die Truhe/)).toBeVisible();
    const album = page.locator('.bar-album');
    await expect(album.getByText(`0 von ${barAlbum.length} Karten`)).toBeVisible();
    await expect(album.locator('li.locked')).toHaveCount(barAlbum.length);
    await expect(album.getByText(`Schließe die Lektion „${firstLesson.title}“ ab`)).toBeVisible();
    // Gesperrte Karten zeigen keine Definition und keinen Link.
    await expect(album.getByRole('button', { name: /Lektion öffnen/ })).toHaveCount(0);
  });

  test('Lektion abgeschlossen: genau diese Karte ist frei, mit Definition und Sprung zur Lektion', async ({ page }) => {
    await seed(page, { completedLessonIds: [firstLesson.id] });
    await page.goto('/#/progress');
    await openCollection(page);
    const album = page.locator('.bar-album');
    const cards = barAlbum.filter((entry) => entry.lessonId === firstLesson.id).length;
    await expect(album.locator('li.unlocked')).toHaveCount(cards);
    const card = album.locator('li.unlocked').first();
    await expect(card.getByRole('img', { name: /Schematische Bars:/ })).toBeVisible();
    await card.getByRole('button', { name: `Lektion öffnen: ${firstLesson.title}` }).click();
    await expect(page).toHaveURL(new RegExp(`#/lesson/${firstLesson.id}`));
  });

  test('Album: 360 px ohne Überlauf, axe ohne Befund, Tastatur erreicht den Link', async ({ page }) => {
    await seed(page, { completedLessonIds: [firstLesson.id] });
    await page.goto('/#/progress');
    await openCollection(page);
    await page.locator('.bar-album').scrollIntoViewIfNeeded();
    expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBeLessThanOrEqual(0);
    await axe(page, '.bar-album');
    await axe(page, '.mission-panel');
    const link = page.locator('.bar-album li.unlocked .link-button').first();
    await link.focus();
    await expect(link).toBeFocused();
  });
});

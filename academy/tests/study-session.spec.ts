import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { priceActionTrendsCourse } from '../src/content/course';

/*
 * F-23: „Kurz lernen“ – Vorschläge für etwa zehn oder zwanzig Minuten.
 * Feste Reihenfolge, kein Timer, kein eigener gespeicherter Zustand.
 */

const published = priceActionTrendsCourse.units.flatMap((unit) => unit.lessons).filter((lesson) => lesson.status === 'published');
const unitIndex = priceActionTrendsCourse.units.findIndex((unit) => unit.id === 'price-action-trends.chapter-01');
const throughChapterOne = priceActionTrendsCourse.units
  .slice(0, unitIndex + 1)
  .flatMap((unit) => unit.lessons)
  .filter((lesson) => lesson.status === 'published');
const nextLesson = published[throughChapterOne.length];

async function seed(page: Page, record: Record<string, unknown>) {
  await page.addInitScript((value) => {
    if (sessionStorage.getItem('seeded')) return;
    sessionStorage.setItem('seeded', '1');
    localStorage.setItem('wqt-academy-progress-v1', JSON.stringify(value));
  }, record);
}

/** Abschlüsse aus einer älteren Version ohne Datum: alle Fragen sofort fällig. */
const advanced = (page: Page) =>
  seed(page, {
    version: 2,
    completedLessonIds: throughChapterOne.map((lesson) => lesson.id),
    answers: {},
  });

const stored = (page: Page) =>
  page.evaluate(() => {
    const value = JSON.parse(localStorage.getItem('wqt-academy-progress-v1') ?? 'null');
    if (value) delete value.updatedAt;
    return value;
  });

const studyList = (page: Page) => page.locator('.study-list > li');

test.describe('F-23 Kurz lernen', () => {
  test.beforeEach(async ({ page }) => {
    await page.clock.setFixedTime(new Date(2026, 9, 5, 10, 0));
  });

  test('neuer Stand: nur die erste Lektion, keine gesperrten Vorschläge, Öffnen vergibt nichts', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto('/#/study/20');
    await expect(page.getByRole('heading', { name: 'Für etwa 20 Minuten', level: 1 })).toBeVisible();
    await expect(studyList(page)).toHaveCount(1);
    await expect(page.getByRole('heading', { name: `Nächste Lektion: ${published[0].title}` })).toBeVisible();
    await expect(page.getByText(/fällige Frage/)).toHaveCount(0);
    await expect(page.getByText(/Chart trainieren/)).toHaveCount(0);
    const before = await stored(page);
    await page.getByRole('button', { name: 'Lektion starten' }).click();
    await expect(page).toHaveURL(new RegExp(`#/lesson/${published[0].id}`));
    const after = await stored(page);
    expect(after?.xp ?? 0).toBe(before?.xp ?? 0);
    expect(after?.completedLessonIds ?? []).toEqual([]);
    expect(errors).toEqual([]);
  });

  test('fortgeschritten: Wiederholung, Lektion, Fall – Überspringen, Zurückholen, Neuladen', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await advanced(page);
    await page.goto('/');
    const entry = page.getByRole('region', { name: 'Kurz lernen' });
    await entry.getByRole('button', { name: '≈ 20 Minuten' }).click();
    await expect(page).toHaveURL(/#\/study\/20$/);
    await expect(studyList(page)).toHaveCount(3);
    const titles = await page.locator('.study-card h2').allTextContents();
    expect(titles[0]).toBe('10 fällige Fragen wiederholen');
    expect(titles[1]).toBe(`Nächste Lektion: ${nextLesson.title}`);
    expect(titles[2]).toMatch(/^Chart trainieren: /);

    // Rahmen wechseln: 10 Minuten → höchstens fünf Fragen, weiterhin Lektion zuerst nach der Wiederholung.
    await page.getByRole('radio', { name: '≈ 10 Minuten' }).check();
    await expect(page).toHaveURL(/#\/study\/10$/);
    await expect(page.getByRole('heading', { name: '5 fällige Fragen wiederholen' })).toBeVisible();
    await expect(studyList(page)).toHaveCount(2);
    await page.getByRole('radio', { name: '≈ 20 Minuten' }).check();
    await expect(studyList(page)).toHaveCount(3);

    // Überspringen ändert nichts am Lernstand und gilt nur bis zum Neuladen.
    const before = await stored(page);
    const lessonTitle = `Nächste Lektion: ${nextLesson.title}`;
    await page.getByRole('button', { name: `Überspringen: ${lessonTitle}` }).click();
    await expect(studyList(page)).toHaveCount(2);
    await expect(page.getByText('Übersprungen (nur bis zum Neuladen):')).toBeVisible();
    await page.getByRole('button', { name: `Zurückholen: ${lessonTitle}` }).click();
    await expect(studyList(page)).toHaveCount(3);
    await page.getByRole('button', { name: `Überspringen: ${lessonTitle}` }).click();
    expect(await stored(page)).toEqual(before);
    await page.reload();
    await expect(studyList(page)).toHaveCount(3);
    expect(await page.locator('.study-card h2').allTextContents()).toEqual(titles);

    // Wiederholung starten: Übungsrunde mit genau den vorgeschlagenen Fragen.
    await page.getByRole('button', { name: 'Wiederholung starten' }).click();
    await expect(page.getByText(/^Frage 1 \/ 10 · /)).toBeVisible();
    // Zurück in „Kurz lernen“: die laufende Runde wird fortgesetzt statt neu gebaut.
    await page.goto('/#/study/20');
    await expect(page.getByRole('heading', { name: 'Wiederholungsrunde fortsetzen' })).toBeVisible();
    await expect(page.getByText('Noch 10 Fragen in deiner laufenden Runde.')).toBeVisible();
    await page.getByRole('button', { name: 'Fortsetzen', exact: true }).click();
    await expect(page.getByText(/^Frage 1 \/ 10 · /)).toBeVisible();
    expect(errors).toEqual([]);
  });

  test('alles übersprungen, Sitzung verlassen', async ({ page }) => {
    await advanced(page);
    await page.goto('/#/study/10');
    await expect(studyList(page)).toHaveCount(2);
    for (const title of await page.locator('.study-card h2').allTextContents()) {
      await page.getByRole('button', { name: `Überspringen: ${title}` }).click();
    }
    await expect(page.getByText('Alle Vorschläge übersprungen')).toBeVisible();
    await page.getByRole('button', { name: 'Sitzung verlassen' }).click();
    await expect(page.getByRole('region', { name: 'Kurz lernen' })).toBeVisible();
  });

  test('Tastatur, kein Überlauf und keine Axe-Verstöße', async ({ page }) => {
    await advanced(page);
    await page.goto('/#/study/20');
    const heading = page.getByRole('heading', { name: 'Für etwa 20 Minuten', level: 1 });
    await expect(heading).toBeFocused();
    const skip = page.getByRole('button', { name: /^Überspringen: \d+ fällige Fragen/ });
    await skip.focus();
    await page.keyboard.press('Enter');
    await expect(studyList(page)).toHaveCount(2);
    await expect(heading).toBeFocused();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(0);
    const axe = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(axe.violations.map((violation) => violation.id)).toEqual([]);
  });
});

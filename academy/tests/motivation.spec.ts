import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { priceActionTrendsCourse } from '../src/content/course';
import { ACADEMY_PROGRESS_VERSION } from '../src/features/progress';
import { openCollection } from './practiceTab';

/*
 * P07: faire, sichtbare Motivation – Überblick, Abzeichen, freiwillige Tagesvorschläge,
 * dezente Erfolgsmeldung. Alles aus gespeichertem Zustand; Öffnen zählt nicht als Lerntag.
 */

const published = priceActionTrendsCourse.units.flatMap((unit) => unit.lessons).filter((lesson) => lesson.status === 'published');

async function seed(page: Page, ids: string[], extra: Record<string, unknown> = {}) {
  await page.addInitScript(
    ({ completed, version, more }) => {
      if (sessionStorage.getItem('seeded')) return;
      sessionStorage.setItem('seeded', '1');
      localStorage.setItem(
        'wqt-academy-progress-v1',
        JSON.stringify({ version, completedLessonIds: completed, answers: {}, guideSeenAt: '2026-09-01T08:00:00.000Z', ...more }),
      );
    },
    { completed: ids, version: ACADEMY_PROGRESS_VERSION, more: extra },
  );
}

const stored = (page: Page) => page.evaluate(() => JSON.parse(localStorage.getItem('wqt-academy-progress-v1') ?? '{}'));
const overview = (page: Page) => page.getByRole('region', { name: 'Dein Überblick' });
const missions = (page: Page) => page.getByRole('region', { name: 'Kleine Vorschläge für heute' });
const badges = (page: Page) => page.getByRole('region', { name: 'Meilensteine' });

test.describe('P07 Motivation', () => {
  test.beforeEach(async ({ page }) => {
    await page.clock.setFixedTime(new Date(2026, 9, 5, 10, 0));
  });

  test('Überblick: Zahlen entsprechen dem gespeicherten Zustand und bleiben nach Reload gleich', async ({ page }) => {
    const done = published.slice(0, 3).map((lesson) => lesson.id);
    await seed(page, done, {
      reviewCards: {
        [`${'chapter-01-01-question'}`]: { stage: 1, dueDay: '2026-10-08', lastReviewedDay: '2026-10-05', lastResult: 'correct', reviews: 2, lapses: 0 },
        'chapter-01-02-question': { stage: 0, dueDay: '2026-10-06', lastReviewedDay: '2026-10-05', lastResult: 'wrong', reviews: 1, lapses: 1 },
      },
      caseRuns: {
        'bar-case.chapter-01.range-high-test': [
          { sessionId: 'run-1', completedAt: '2026-10-04T10:00:00.000Z', best: 1, defensible: 1, mistake: 0, missedCues: 0 },
        ],
      },
      activityDays: ['2026-10-04', '2026-10-05'],
    });
    await page.goto('/#/progress');
    await openCollection(page);
    const panel = overview(page);
    const readItem = panel.locator('li[data-mode="read"]');
    await expect(readItem).toContainText(`3 von ${published.length}`);
    await expect(panel.locator('li[data-mode="review"]')).toContainText('2');
    await expect(panel.locator('li[data-mode="train"]')).toContainText(/1 von \d+/);
    await expect(panel.locator('li[data-mode="progress"]')).toContainText('2');
    const before = await panel.innerText();
    const state = await stored(page);
    expect(Object.values<{ reviews: number }>(state.reviewCards).filter((card) => card.reviews > 0)).toHaveLength(2);
    await page.reload();
    expect(await overview(page).innerText()).toBe(before);
    expect(await stored(page)).toEqual(state);
  });

  test('Tagesvorschläge sind freiwillig: Öffnen und Verlassen zählt nicht als Lerntag', async ({ page }) => {
    await seed(page, published.slice(0, 3).map((lesson) => lesson.id));
    await page.goto('/#/progress');
    await openCollection(page);
    const list = missions(page);
    await expect(list.getByText('Eine Wiederholungsrunde')).toBeVisible();
    await expect(list.getByText('Eine neue Lektion')).toBeVisible();
    await expect(list.getByText(/Vorschläge zählen nichts/)).toBeVisible();
    const before = await stored(page);
    await list.getByRole('button', { name: 'Runde starten' }).click();
    await expect(page.getByText(/^Frage 1 \//).first()).toBeVisible();
    // Runde verlassen, ohne zu antworten: kein Lerntag, keine XP.
    await page.goto('/#/progress');
    await openCollection(page);
    const after = await stored(page);
    expect(after.activityDays ?? []).toEqual(before.activityDays ?? []);
    expect(after.dailyActivity ?? {}).toEqual(before.dailyActivity ?? {});
    expect(after.completedLessonIds).toEqual(before.completedLessonIds);
    await expect(missions(page).getByText('Eine Wiederholungsrunde')).toBeVisible();
    await expect(missions(page).locator('li.done')).toHaveCount(0);
  });

  test('Abzeichen: erklärtes Kriterium, offen und erhalten, Datum bleibt bei erneuter Vergabe', async ({ page }) => {
    await seed(page, [], { milestones: { 'seven-days': { achievedDay: '2026-09-01' } } });
    await page.goto('/#/progress');
    await openCollection(page);
    const grid = badges(page);
    await expect(grid.locator('li.earned')).toHaveCount(1);
    await expect(grid.locator('li.earned')).toContainText('Sieben Lerntage');
    await expect(grid.locator('li.earned')).toContainText('Erhalten am 01.09.2026');
    await expect(grid.locator('li.open').first()).toContainText('Noch offen');
    await expect(grid.locator('li.open').first()).toContainText(/Die erste Lektion abgeschlossen|Alle Lektionen|1000 XP|Wiederholungsrunde/);
    // Eine echte Vergabe (erste Lektion) lässt das vorhandene Abzeichen unverändert.
    await page.goto('/');
    await page.getByRole('button', { name: 'Nächste Lektion beginnen' }).click();
    for (const _ of [1, 2, 3]) await page.getByRole('button', { name: 'Weiter' }).click();
    await page.getByRole('radio', { name: /Die schwache Reaktion/ }).click();
    await page.getByRole('button', { name: 'Weiter' }).click();
    await page.getByRole('button', { name: 'Lektion abschließen' }).click();
    await expect(page.getByText('Lektion abgeschlossen')).toBeVisible();
    const after = await stored(page);
    expect(after.milestones['seven-days'].achievedDay).toBe('2026-09-01');
    expect(after.milestones['first-lesson'].achievedDay).toBe('2026-10-05');
    // Wiederholen derselben Lektion vergibt nichts doppelt.
    await page.getByRole('button', { name: 'Lektion wiederholen' }).click();
    await page.goto('/#/progress');
    await openCollection(page);
    expect((await stored(page)).milestones).toEqual(after.milestones);
  });

  test('Erfolgsmeldung: Statusmeldung, Escape schließt, ohne Bewegung ruhig', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await seed(page, []);
    await page.goto('/');
    await page.getByRole('button', { name: 'Nächste Lektion beginnen' }).click();
    for (const _ of [1, 2, 3]) await page.getByRole('button', { name: 'Weiter' }).click();
    await page.getByRole('radio', { name: /Die schwache Reaktion/ }).click();
    await page.getByRole('button', { name: 'Weiter' }).click();
    await page.getByRole('button', { name: 'Lektion abschließen' }).click();
    const toast = page.locator('.celebration');
    await expect(toast).toBeVisible();
    await expect(toast).toHaveAttribute('role', 'status');
    const animation = await toast.evaluate((el) => getComputedStyle(el).animationName);
    expect(animation).toBe('none');
    const close = toast.getByRole('button', { name: 'Meldung schließen' });
    expect((await close.boundingBox())!.height).toBeGreaterThanOrEqual(43.5);
    await page.keyboard.press('Escape');
    await expect(toast).toHaveCount(0);
  });

  test('360 px: kein Überlauf, axe ohne Befund, Tastatur erreicht die Vorschläge', async ({ page }) => {
    await seed(page, published.slice(0, 3).map((lesson) => lesson.id), { milestones: { 'first-lesson': { achievedDay: '2026-09-01' } } });
    await page.goto('/#/progress');
    await openCollection(page);
    await expect(overview(page)).toBeVisible();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(0);
    const axe = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(axe.violations.map((violation) => violation.id)).toEqual([]);
    const start = missions(page).getByRole('button', { name: 'Lektion starten' });
    await start.focus();
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/#\/lesson\//);
  });
});

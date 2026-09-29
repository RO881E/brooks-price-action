import { expect, test, type Page } from '@playwright/test';
import { brooksTrendsCourse, publishedLessons } from '../src/content/course';
import type { Lesson } from '../src/content/types';

/*
 * F-12: Kapitel werden erst bei Bedarf geladen. Die Gliederung (Lernpfad,
 * Freischaltung, Suche, Fortsetzen) steht sofort bereit. Läuft auf Desktop und
 * Mobil gegen den Entwicklungsserver, in dem jede Inhaltsdatei eine eigene
 * Anfrage ist – so lässt sich genau sehen, welche Einheit geladen wird.
 */

/**
 * Einstiegsdatei je Einheit, abgeleitet aus der ID (wie in `src/content/units.ts`):
 * `brooks-trends.chapter-08` → `chapter-08`, `brooks-trends.part-01-introduction` → `part-01`.
 * Abgeleitet statt aufgezählt, damit neue Kapitel diesen Test nicht still brechen.
 */
const UNIT_FILES: Record<string, string> = Object.fromEntries(
  brooksTrendsCourse.units.map((unit) => {
    const name = unit.id.replace(/^brooks-trends\./, '');
    return [unit.id, name === 'introduction' ? name : name.replace(/-introduction$/, '')];
  }),
);

const unitOf = (lesson: Lesson) =>
  brooksTrendsCourse.units.find((unit) => unit.lessons.some((item) => item.id === lesson.id))!;

const lastUnit = brooksTrendsCourse.units.at(-1)!;
const chapterThree = brooksTrendsCourse.units.find((unit) => unit.id === 'brooks-trends.chapter-03')!;
const deepLesson = chapterThree.lessons[2];

/** Beobachtet, welche Einheiten (Inhaltsdateien) der Browser anfragt. */
function trackUnits(page: Page) {
  const requested = new Set<string>();
  page.on('request', (request) => {
    const match = /\/src\/content\/courses\/brooks-trends\/(introduction|part-\d\d|chapter-\d\d)[\w-]*\.ts/.exec(
      request.url(),
    );
    if (match) requested.add(match[1]);
  });
  return requested;
}

function trackErrors(page: Page) {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  return errors;
}

/** Alle Lektionen vor `lesson` (ohne Angabe: alle) gelten als abgeschlossen. */
async function seedCompletedUntil(page: Page, lesson: Lesson | null, extra: Record<string, unknown> = {}) {
  const index = lesson ? publishedLessons.findIndex((item) => item.id === lesson.id) : publishedLessons.length;
  const completed = publishedLessons.slice(0, index).map((item) => item.id);
  await page.addInitScript(
    ({ ids, rest }) => {
      if (sessionStorage.getItem('seeded')) return;
      sessionStorage.setItem('seeded', '1');
      localStorage.setItem(
        'wqt-academy-progress-v1',
        JSON.stringify({ version: 2, completedLessonIds: ids, answers: {}, ...rest }),
      );
    },
    { ids: completed, rest: extra },
  );
}

const stored = (page: Page) =>
  page.evaluate(() => localStorage.getItem('wqt-academy-progress-v1'));

test.describe('F-12 kapitelweises Laden', () => {
  test('der Lernpfad startet ohne Kapitelinhalte; nur das nächste Kapitel wird vorgeladen', async ({ page }) => {
    const errors = trackErrors(page);
    const units = trackUnits(page);
    await seedCompletedUntil(page, deepLesson);
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Trading Price Action Trends' })).toBeVisible();
    // Gliederung genügt für Pfad, Fortschritt und Freischaltung.
    await expect(page.getByRole('button', { name: `${deepLesson.title}: Jetzt lernen` }).first()).toBeVisible();
    await page.goto('/#/chapters');
    await expect(page.getByRole('button', { name: `${deepLesson.title}: Verfügbar` })).toBeVisible();
    await expect(page.getByRole('button', { name: `${lastUnit.lessons.at(-1)!.title}: Gesperrt` })).toBeDisabled();
    // Im Leerlauf nur die Einheit der nächsten Lektion.
    await expect.poll(() => [...units]).toEqual(['chapter-03']);
    expect(errors).toEqual([]);
  });

  test('direkter Lektionslink nach frischem Aufruf, Zurück und Vorwärts', async ({ page }) => {
    const errors = trackErrors(page);
    const units = trackUnits(page);
    await seedCompletedUntil(page, deepLesson);
    await page.goto(`/#/lesson/${deepLesson.id}?step=1`);
    await expect(page.getByRole('heading', { name: deepLesson.steps[0].title, level: 1 })).toBeVisible();
    await expect(page.getByRole('heading', { name: deepLesson.steps[0].title, level: 1 })).toBeFocused();
    expect([...units]).toEqual([UNIT_FILES[chapterThree.id]]);

    await page.getByRole('button', { name: 'Weiter', exact: true }).click();
    await expect(page).toHaveURL(/step=2$/);
    await page.getByRole('button', { name: 'Lektion schließen' }).click();
    await expect(page.getByRole('heading', { name: 'Trading Price Action Trends' })).toBeVisible();
    // Schrittwechsel ersetzen den Verlaufseintrag; Zurück führt zum letzten Schritt.
    await page.goBack();
    await expect(page.getByRole('heading', { name: deepLesson.steps[1].title, level: 1 })).toBeVisible();
    await page.goForward();
    await expect(page.getByRole('heading', { name: 'Trading Price Action Trends' })).toBeVisible();
    await page.goBack();
    await expect(page.getByRole('heading', { name: deepLesson.steps[1].title, level: 1 })).toBeVisible();
    expect(errors).toEqual([]);
  });

  test('unbekannte und gesperrte Lektionen fallen sofort auf den Lernpfad zurück', async ({ page }) => {
    const units = trackUnits(page);
    await seedCompletedUntil(page, deepLesson);
    await page.goto('/#/lesson/gibt-es-nicht?step=2');
    await expect(page.getByText('Dieser Link führt zu keiner verfügbaren Ansicht oder Lektion.', { exact: false })).toBeVisible();
    const locked = lastUnit.lessons.at(-1)!;
    await page.goto(`/#/lesson/${locked.id}`);
    await expect(page.getByRole('heading', { name: 'Trading Price Action Trends' })).toBeVisible();
    await expect(page.getByRole('heading', { name: locked.steps[0].title, level: 1 })).toHaveCount(0);
    // Für gesperrte Inhalte wird nichts geladen.
    expect(units.has(UNIT_FILES[lastUnit.id])).toBe(false);
  });

  test('Suche findet Schritte aus noch nicht geladenen Kapiteln', async ({ page }) => {
    const units = trackUnits(page);
    const target = lastUnit.lessons[0];
    const step = target.steps[1];
    // Alles abgeschlossen: Treffer lässt sich öffnen, und es gibt keine „nächste
    // Lektion“, deren Kapitel vorab geladen würde.
    await seedCompletedUntil(page, null);
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Trading Price Action Trends' })).toBeVisible();
    await page.keyboard.press('/');
    await page.keyboard.type(step.title);
    const option = page.getByRole('option', { name: new RegExp(step.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')) }).first();
    await expect(option).toBeVisible();
    expect(units.has(UNIT_FILES[lastUnit.id])).toBe(false);
    await option.click();
    await expect(page.getByRole('heading', { name: step.title, level: 1 })).toBeVisible();
    expect(units.has(UNIT_FILES[lastUnit.id])).toBe(true);
  });

  test('Review mit Fragen aus anderen Kapiteln lädt diese nach', async ({ page }) => {
    const errors = trackErrors(page);
    // Abgeschlossen bis einschließlich Kapitel 1 (Altstand ohne Datum: sofort fällig).
    const firstOfChapterTwo = brooksTrendsCourse.units[3].lessons[0];
    await seedCompletedUntil(page, firstOfChapterTwo);
    await page.goto('/#/practice');
    await expect(page.getByRole('heading', { name: 'Analyse-Training' })).toBeVisible();
    await page.getByRole('button', { name: 'Fällige Fragen üben' }).click();
    await expect(page.getByText(/Frage 1 \/ \d+/)).toBeVisible();
    await expect(page.locator('.practice-options button').first()).toBeVisible();
    await page.locator('.practice-options button').first().click();
    await expect(page.locator('.practice-feedback')).toBeVisible();
    // Nach Reload läuft die Runde mit geladenem Inhalt weiter.
    await page.reload();
    await expect(page.locator('.practice-feedback')).toBeVisible();
    expect(errors).toEqual([]);
  });

  test('Ladefehler: verständlicher Hinweis, Fortschritt bleibt, erneutes Laden hilft', async ({ page }) => {
    await seedCompletedUntil(page, deepLesson);
    const blocked = `**/src/content/courses/brooks-trends/${UNIT_FILES[chapterThree.id]}*.ts*`;
    await page.route(blocked, (route) => route.abort());
    await page.goto(`/#/lesson/${deepLesson.id}?step=1`);
    const alert = page.getByRole('alert');
    await expect(alert).toContainText('Die Lektion konnte nicht geladen werden.');
    await expect(alert).toContainText('bleiben gespeichert');
    // Titel aus der Gliederung bleibt sichtbar; nichts wurde gelöscht.
    await expect(page.getByRole('heading', { name: deepLesson.title, level: 1 })).toBeVisible();
    const before = await stored(page);
    expect(JSON.parse(before!).completedLessonIds.length).toBeGreaterThan(0);

    await page.unroute(blocked);
    await alert.getByRole('button', { name: 'Erneut laden' }).click();
    await expect(page.getByRole('heading', { name: deepLesson.steps[0].title, level: 1 })).toBeVisible();
    expect(new URL(page.url()).hash).toBe(`#/lesson/${deepLesson.id}?step=1`);
    expect(JSON.parse((await stored(page))!).completedLessonIds).toEqual(JSON.parse(before!).completedLessonIds);
  });

  test('Ladefehler: „Zurück zur Übersicht“ führt ohne Datenverlust zum Lernpfad', async ({ page }) => {
    await seedCompletedUntil(page, deepLesson);
    const blocked = `**/src/content/courses/brooks-trends/${UNIT_FILES[unitOf(deepLesson).id]}*.ts*`;
    await page.route(blocked, (route) => route.abort());
    await page.goto('/#/chapters');
    await page.getByRole('button', { name: `${deepLesson.title}: Verfügbar` }).click();
    await page.getByRole('alert').getByRole('button', { name: 'Zurück zur Übersicht' }).click();
    // Zurück in die Ansicht, aus der die Lektion geöffnet wurde.
    await expect(page.getByRole('heading', { name: 'Inhalte zusammenhängend lesen' })).toBeVisible();
    await expect(page.getByRole('button', { name: `${deepLesson.title}: Verfügbar` })).toBeVisible();
    expect(JSON.parse((await stored(page))!).completedLessonIds.length).toBeGreaterThan(0);
  });
});

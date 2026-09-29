import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Locator, type Page } from '@playwright/test';
import { brooksTrendsCourse } from '../src/content/course';
import type { Lesson } from '../src/content/types';

/*
 * F-13: Buchleser. Läuft auf Desktop und Mobil gegen den Entwicklungsserver.
 */

type QuestionStep = Extract<Lesson['steps'][number], { type: 'question' }>;

const intro = brooksTrendsCourse.units[0];
const chapterOne = brooksTrendsCourse.units[2];
const [first, second, third] = intro.lessons;

const questionOf = (lesson: Lesson) =>
  lesson.steps.find((step): step is QuestionStep => step.type === 'question')!;
const option = (question: QuestionStep, correct: boolean) =>
  question.options.find((item) => (item.id === question.correctOptionId) === correct)!;

function trackErrors(page: Page) {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  return errors;
}

async function seed(page: Page, record: Record<string, unknown>) {
  await page.addInitScript((value) => {
    if (sessionStorage.getItem('seeded')) return;
    sessionStorage.setItem('seeded', '1');
    localStorage.setItem('wqt-academy-progress-v1', JSON.stringify(value));
  }, record);
}

const stored = (page: Page) =>
  page.evaluate(() => JSON.parse(localStorage.getItem('wqt-academy-progress-v1') ?? '{}'));

const sectionHeading = (page: Page, lesson: Lesson) =>
  page.getByRole('heading', { name: lesson.title, level: 2 });

async function isFocused(locator: Locator) {
  return locator.evaluate((element) => element === document.activeElement);
}

async function arrowTo(page: Page, target: Locator) {
  for (let step = 0; step < 8; step += 1) {
    if (await isFocused(target)) return;
    await page.keyboard.press('ArrowDown');
  }
  throw new Error('Antwort per Pfeiltaste nicht erreichbar');
}

async function openReaderFromChapters(page: Page, label: RegExp) {
  await page.goto('/#/chapters');
  await page.getByRole('button', { name: label }).click();
}

test.describe('F-13 Buchleser', () => {
  test('lesen, Frage falsch und richtig beantworten, weiterlesen – XP genau einmal', async ({ page }) => {
    const errors = trackErrors(page);
    await openReaderFromChapters(page, /^Kapitel lesen: Einleitung/);
    await expect(page.getByRole('heading', { name: intro.title, level: 1 })).toBeVisible();
    await expect(sectionHeading(page, first)).toBeVisible();
    await expect(page).toHaveURL(new RegExp(`#/read/${intro.id}\\?lesson=${first.id}`));
    await expect(page.getByText('0 von 22 Abschnitten abgeschlossen')).toBeVisible();

    // Alle Schritte des Abschnitts stehen untereinander, das Schaubild inklusive.
    for (const step of first.steps) {
      await expect(page.getByRole('heading', { name: step.title, level: 3 })).toBeVisible();
    }
    await expect(page.locator('.reader-step .learning-chart svg').first()).toBeVisible();

    // Pflichtfrage: Weiterlesen erst nach der Antwort.
    const next = page.getByRole('button', { name: 'Abschnitt abschließen und weiterlesen' });
    await expect(next).toBeDisabled();
    await expect(page.getByText('Beantworte zuerst die Frage in diesem Abschnitt')).toBeVisible();

    // Frage mit der Tastatur: erst falsch, dann richtig.
    const question = questionOf(first);
    await page.locator('.reader-step-question .answer-list button').first().focus();
    await arrowTo(page, page.getByRole('radio', { name: option(question, false).label }));
    await page.keyboard.press('Enter');
    await expect(page.getByText('Noch nicht ganz.')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Noch einmal versuchen' })).toBeFocused();
    await page.keyboard.press('Enter');
    await arrowTo(page, page.getByRole('radio', { name: option(question, true).label }));
    await page.keyboard.press('Enter');
    await expect(page.getByText('Richtig – im neuen Versuch.')).toBeVisible();
    await expect(next).toBeEnabled();
    await expect(next).toBeFocused();
    await page.keyboard.press('Enter');

    await expect(sectionHeading(page, second)).toBeVisible();
    await expect(sectionHeading(page, second)).toBeFocused();
    await expect(page).toHaveURL(new RegExp(`lesson=${second.id}`));
    await expect(page.getByText('1 von 22 Abschnitten abgeschlossen')).toBeVisible();

    const data = await stored(page);
    expect(data.version).toBe(10);
    expect(data.completedLessonIds).toEqual([first.id]);
    expect(data.lessonResults[first.id].xpAwarded).toBe(first.xp);
    expect(data.questionResults[question.id]).toMatchObject({ firstAttemptCorrect: false, status: 'correct' });
    expect(data.readerPositions[intro.id].lessonId).toBe(second.id);

    // Zurück zum abgeschlossenen Abschnitt: kein erneuter Abschluss, keine neuen XP.
    await page.getByRole('button', { name: 'Vorheriger Abschnitt' }).click();
    await expect(sectionHeading(page, first)).toBeVisible();
    await expect(page.getByText('Bereits abgeschlossen – erneutes Lesen bringt keine neuen XP.')).toBeVisible();
    await page.getByRole('button', { name: `Weiterlesen: ${second.title}` }).click();
    await expect(sectionHeading(page, second)).toBeVisible();
    const after = await stored(page);
    expect(after.lessonResults).toEqual(data.lessonResults);
    expect(after.dailyActivity).toEqual(data.dailyActivity);
    expect(errors).toEqual([]);
  });

  test('gesperrte Abschnitte und Kapitel werden benannt und nie als gelesen gezählt', async ({ page }) => {
    await seed(page, { version: 2, completedLessonIds: [first.id], answers: {} });

    // Link auf einen gesperrten Abschnitt fällt sicher auf die nächste offene Stelle zurück.
    await page.goto(`/#/read/${intro.id}?lesson=${third.id}&step=2`);
    await expect(page.getByText('Der verlinkte Abschnitt ist nicht (mehr) verfügbar')).toBeVisible();
    await expect(sectionHeading(page, second)).toBeVisible();
    await expect(page).toHaveURL(new RegExp(`lesson=${second.id}$`));

    // Gliederung: Gesperrtes ist sichtbar, aber nicht anwählbar.
    const outline = page.getByRole('navigation', { name: 'Kapitelgliederung' });
    if (!(await outline.isVisible())) await page.getByText('Kapitelgliederung').first().click();
    await expect(outline.getByRole('button', { name: new RegExp(third.title) })).toHaveCount(0);
    await expect(outline.getByText(third.title)).toBeVisible();
    await expect(page.getByText(`Nächster Abschnitt „${third.title}“ ist noch gesperrt.`)).toBeVisible();

    // Unbekannte Abschnitts-ID: ebenfalls sicher zurück.
    await page.goto(`/#/read/${intro.id}?lesson=gibt-es-nicht`);
    await expect(sectionHeading(page, second)).toBeVisible();

    // Ganzes Kapitel gesperrt: klarer Hinweis mit dem nächsten Schritt.
    await page.goto(`/#/read/${chapterOne.id}`);
    await expect(page.getByRole('heading', { name: 'Dieses Kapitel ist noch gesperrt' })).toBeVisible();
    await expect(page.getByText(`Als Nächstes steht „${second.title}“ (${intro.label}) an.`)).toBeVisible();
    await page.getByRole('button', { name: `Zu „${second.title}“` }).click();
    await expect(sectionHeading(page, second)).toBeVisible();

    // Unbekanntes Kapitel: zurück zum Lernpfad.
    await page.goto('/#/read/gibt-es-nicht');
    await expect(page.getByText('Dieser Link führt zu keiner verfügbaren Ansicht oder Lektion.')).toBeVisible();

    const data = await stored(page);
    expect(data.completedLessonIds).toEqual([first.id]);
  });

  test('Reload und Wechsel über den Lernpfad führen genau zur Lesestelle zurück', async ({ page }) => {
    await seed(page, { version: 2, completedLessonIds: [first.id], answers: {} });
    await page.goto(`/#/read/${intro.id}?lesson=${second.id}`);
    await expect(sectionHeading(page, second)).toBeVisible();

    // Zum dritten Schritt lesen (scrollen); die Adresse folgt der Lesestelle.
    const target = second.steps[2];
    await page.locator('[data-step-index="2"]').evaluate((element) => element.scrollIntoView({ block: 'start' }));
    await expect(page).toHaveURL(new RegExp(`lesson=${second.id}&step=3$`));

    await page.reload();
    const heading = page.getByRole('heading', { name: target.title, level: 3 });
    await expect(heading).toBeInViewport();

    // Wechsel Lernpfad → Buchmodus → „Weiterlesen“.
    await page.goto('/#/path');
    await expect(page.getByRole('heading', { name: 'Trading Price Action Trends' })).toBeVisible();
    await page.goto('/#/chapters');
    await expect(page.getByText(`Zuletzt: ${second.title}`)).toBeVisible();
    await page.getByRole('button', { name: /^Weiterlesen: Einleitung/ }).click();
    await expect(sectionHeading(page, second)).toBeVisible();
    await expect(page).toHaveURL(new RegExp(`lesson=${second.id}&step=3$`));
    await expect(heading).toBeInViewport();

    // Browser-Zurück führt aus dem Leser in die Kapitelübersicht.
    await page.goBack();
    await expect(page.getByRole('heading', { name: 'Inhalte zusammenhängend lesen' })).toBeVisible();

    const data = await stored(page);
    expect(data.readerPositions[intro.id]).toMatchObject({ lessonId: second.id, stepId: target.id });
    // Lesestelle ist kein Abschluss.
    expect(data.completedLessonIds).toEqual([first.id]);
  });

  test('Diagramm-Fokus funktioniert auch im Leser', async ({ page }) => {
    await openReaderFromChapters(page, /^Kapitel lesen: Einleitung/);
    const diagram = first.steps.find((step) => step.type === 'diagram')!;
    const trigger = page.getByRole('button', { name: `Vergrößern: ${diagram.title}` });
    await trigger.click();
    const dialog = page.getByRole('dialog', { name: diagram.title });
    await expect(dialog).toBeVisible();
    await dialog.getByRole('button', { name: 'Vergrößern', exact: true }).click();
    await page.keyboard.press('Escape');
    await expect(dialog).toHaveCount(0);
    await expect(trigger).toBeFocused();
    await expect(page).toHaveURL(new RegExp(`#/read/${intro.id}`));
  });

  test('Lesestelle übersteht Export, Zurücksetzen und Import', async ({ page }) => {
    await seed(page, {
      version: 9,
      completedLessonIds: [first.id],
      answers: {},
      readerPositions: {
        [intro.id]: { lessonId: second.id, stepId: second.steps[1].id, updatedAt: '2026-09-28T10:00:00.000Z' },
      },
    });
    await page.goto('/#/settings');
    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Sicherung herunterladen' }).click(),
    ]);
    const file = (await download.path())!;
    await page.getByRole('button', { name: 'Academy-Daten zurücksetzen …' }).click();
    await page.getByRole('checkbox', { name: 'Ich möchte alle Academy-Daten in diesem Browser löschen.' }).check();
    await page.getByRole('button', { name: 'Endgültig zurücksetzen' }).click();
    expect((await stored(page)).readerPositions).toEqual({});

    await page.getByLabel('Sicherung einspielen …').setInputFiles(file);
    await page.getByRole('button', { name: 'Zusammenführen', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Import abgeschlossen' })).toBeVisible();
    expect((await stored(page)).readerPositions[intro.id]).toMatchObject({ lessonId: second.id });

    await page.goto('/#/chapters');
    await page.getByRole('button', { name: /^Weiterlesen: Einleitung/ }).click();
    await expect(sectionHeading(page, second)).toBeVisible();
    await expect(page).toHaveURL(new RegExp(`lesson=${second.id}&step=2$`));
  });

  test('barrierearm und ohne Überbreite bei 360 px', async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 740 });
    await seed(page, { version: 2, completedLessonIds: [first.id], answers: {} });
    for (const hash of [`#/read/${intro.id}`, `#/read/${chapterOne.id}`, '#/chapters']) {
      await page.goto(`/${hash}`);
      await page.waitForTimeout(400);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow, hash).toBeLessThanOrEqual(0);
      const axe = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
        .analyze();
      expect(axe.violations.map((violation) => violation.id), hash).toEqual([]);
    }
  });
});

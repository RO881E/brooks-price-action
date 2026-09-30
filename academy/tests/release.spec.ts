import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Locator, type Page } from '@playwright/test';
import { brooksTrendsCourse, publishedLessons } from '../src/content/course';
import type { Lesson } from '../src/content/types';

/*
 * F-10: Release-Suite. Läuft auf Desktop und Mobil (beide Playwright-Projekte).
 * Sie prüft Hauptansichten, Barrierefreiheit (axe, WCAG 2.2 A/AA), fehlende
 * Überbreite bei 360 px und dass sich die Hauptabläufe allein mit der Tastatur
 * erledigen lassen. Der Offline-Aufruf steht in `pwa.spec.ts`.
 */

type QuestionStep = Extract<Lesson['steps'][number], { type: 'question' }>;

const VIEWS = [
  { hash: '#/path', heading: 'Trading Price Action Trends' },
  { hash: '#/chapters', heading: 'Inhalte zusammenhängend lesen' },
  { hash: '#/practice', heading: 'Analyse-Training' },
  { hash: '#/progress', heading: 'Fortschritt' },
  { hash: '#/saved', heading: 'Gespeichert' },
  { hash: '#/glossary', heading: 'Price-Action-Glossar' },
  { hash: '#/settings', heading: 'Einstellungen' },
];

const firstUnit = brooksTrendsCourse.units[0].lessons.filter(
  (lesson) => lesson.status === 'published',
);

function questionOf(lesson: Lesson): QuestionStep | undefined {
  return lesson.steps.find((step): step is QuestionStep => step.type === 'question');
}

function option(question: QuestionStep, correct: boolean) {
  return question.options.find((item) => (item.id === question.correctOptionId) === correct)!;
}

function trackErrors(page: Page) {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  return errors;
}

async function expectAccessible(page: Page, label: string) {
  // Kontrast erst nach Ein-/Ausblendanimationen messen. Zwei Frames abwarten,
  // damit auch eine gerade erst eingeblendete Meldung ihre Animation gestartet hat.
  await page.evaluate(
    () => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))),
  );
  await page.waitForFunction(() =>
    document
      .getAnimations()
      .every((animation) => !animation.pending && animation.playState !== 'running'),
  );
  const result = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
    .analyze();
  const violations = result.violations.map(
    (violation) =>
      `${violation.id}: ${violation.nodes
        .map((node) => `${node.target.join(' ')} (${node.failureSummary?.split('\n')[1]?.trim()})`)
        .join(', ')}`,
  );
  expect(violations, label).toEqual([]);
}

async function expectNoOverflow(page: Page, label: string) {
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );
  expect(overflow, `${label}: horizontale Überbreite`).toBeLessThanOrEqual(0);
}

async function isFocused(locator: Locator) {
  if ((await locator.count()) === 0) return false;
  return locator.first().evaluate((element) => element === document.activeElement);
}

/** Nur mit Tab weiterspringen, bis das Ziel den Fokus hat. */
async function tabTo(page: Page, target: Locator, max = 160) {
  for (let step = 0; step < max; step += 1) {
    if (await isFocused(target)) return;
    await page.keyboard.press('Tab');
  }
  throw new Error(`Per Tab nicht erreichbar: ${target}`);
}

/** Mit den Pfeiltasten innerhalb einer Antwortgruppe wandern. */
async function arrowTo(page: Page, target: Locator) {
  for (let step = 0; step < 8; step += 1) {
    if (await isFocused(target)) return;
    await page.keyboard.press('ArrowDown');
  }
  throw new Error(`Per Pfeiltaste nicht erreichbar: ${target}`);
}

async function stored(page: Page) {
  return page.evaluate(() => JSON.parse(localStorage.getItem('wqt-academy-progress-v1') ?? '{}'));
}

/** Öffnet eine Ansicht wie ein Mensch: Seitenleiste, untere Leiste oder Menü. */
async function openView(page: Page, label: string) {
  const bottom = page.getByRole('navigation', { name: 'Mobile Navigation' });
  if (await bottom.isVisible()) {
    const direct = bottom.getByRole('button', { name: label });
    if (await direct.count()) {
      await direct.click();
      return;
    }
    await page.getByRole('button', { name: 'Menü öffnen' }).click();
  }
  await page.getByRole('navigation', { name: 'Hauptnavigation' }).getByRole('button', { name: label }).click();
}

/** Tastatur-Variante: Tab bis zum Eintrag, bei Bedarf über das Menü. */
async function openViewByKeyboard(page: Page, label: string) {
  const bottom = page.getByRole('navigation', { name: 'Mobile Navigation' });
  if (await bottom.isVisible()) {
    const direct = bottom.getByRole('button', { name: label });
    if (await direct.count()) {
      await tabTo(page, direct);
      await page.keyboard.press('Enter');
      return;
    }
    await tabTo(page, page.getByRole('button', { name: 'Menü öffnen' }));
    await page.keyboard.press('Enter');
    await expect(page.getByRole('button', { name: 'Menü öffnen' })).toHaveAttribute('aria-expanded', 'true');
  }
  const entry = page
    .getByRole('navigation', { name: 'Hauptnavigation' })
    .getByRole('button', { name: label });
  await tabTo(page, entry);
  await page.keyboard.press('Enter');
}

/**
 * Eine Lektion vollständig per Tastatur: Schritte mit Enter, bei der Frage
 * zuerst eine falsche Antwort, dann „Noch einmal versuchen“ und die richtige.
 */
async function finishLessonByKeyboard(page: Page, lesson: Lesson, withRetry: boolean) {
  const next = page.locator('.lesson-footer .primary-button');
  await expect(page.getByRole('heading', { name: lesson.steps[0].title, level: 1 })).toBeFocused();
  await tabTo(page, next);

  for (const [index, step] of lesson.steps.entries()) {
    await expect(page.getByRole('heading', { name: step.title, level: 1 })).toBeVisible();
    if (step.type === 'question') {
      const right = page.getByRole('radio', { name: option(step, true).label });
      // Offene Frage: Der Fokus steht schon auf der ersten Antwort.
      await expect(page.locator('.answer-list button').first()).toBeFocused();
      if (withRetry) {
        await arrowTo(page, page.getByRole('radio', { name: option(step, false).label }));
        await page.keyboard.press('Enter');
        await expect(page.getByText('Noch nicht ganz.')).toBeVisible();
        await expect(page.getByRole('button', { name: 'Noch einmal versuchen' })).toBeFocused();
        await page.keyboard.press('Enter');
      }
      await arrowTo(page, right);
      await page.keyboard.press('Space');
      await expect(page.locator('.answer-feedback.correct')).toBeVisible();
      await expect(next).toBeFocused();
    }
    const last = index === lesson.steps.length - 1;
    await expect(next).toHaveText(last ? 'Lektion abschließen' : 'Weiter');
    await page.keyboard.press('Enter');
  }

  await expect(page.getByRole('heading', { name: lesson.title, level: 1 })).toBeFocused();
  await tabTo(page, page.getByRole('button', { name: 'Zurück zum Lernpfad' }));
  await page.keyboard.press('Enter');
  await expect(page.getByRole('heading', { name: 'Trading Price Action Trends' })).toBeFocused();
}

test.describe('F-10 Release-Suite', () => {
  test('alle Hauptansichten: Navigation, WCAG-Prüfung und keine Fehler', async ({ page }) => {
    const errors = trackErrors(page);
    await page.goto('/');
    for (const view of VIEWS) {
      const label = {
        '#/path': 'Lernpfad',
        '#/chapters': 'Buchmodus',
        '#/practice': 'Üben',
        '#/progress': 'Fortschritt',
        '#/saved': 'Gespeichert',
        '#/glossary': 'Glossar',
        '#/settings': 'Einstellungen',
      }[view.hash]!;
      await openView(page, label);
      await expect(page.getByRole('heading', { name: view.heading, level: 1 })).toBeVisible();
      expect(new URL(page.url()).hash).toBe(view.hash);
      await expect(page.locator(`[aria-current="page"]`).first()).toContainText(label);
      await expectAccessible(page, view.hash);
    }
    expect(errors).toEqual([]);
  });

  test('360 px: keine horizontale Überbreite in Ansichten, Lektion, Suche und Import', async ({ page }) => {
    // axe über alle Ansichten inkl. Lernpfad mit 250+ Stationen: rund 40 s.
    test.setTimeout(120_000);
    const errors = trackErrors(page);
    await page.setViewportSize({ width: 360, height: 740 });
    for (const view of VIEWS) {
      await page.goto(`/${view.hash}`);
      await expect(page.getByRole('heading', { name: view.heading, level: 1 })).toBeVisible();
      await expectNoOverflow(page, view.hash);
      await expectAccessible(page, `360 ${view.hash}`);
    }

    const lesson = publishedLessons[0];
    await page.goto(`/#/lesson/${lesson.id}`);
    for (const step of lesson.steps) {
      await expect(page.getByRole('heading', { name: step.title, level: 1 })).toBeVisible();
      if (step.type === 'diagram') await expect(page.locator('.learning-chart svg')).toBeVisible();
      if (step.type === 'question') {
        await page.getByRole('radio', { name: option(step, false).label }).click();
        await expectNoOverflow(page, `${step.id} falsch`);
        await expectAccessible(page, `${step.id} falsch`);
        await page.getByRole('button', { name: 'Noch einmal versuchen' }).click();
        await page.getByRole('radio', { name: option(step, true).label }).click();
      }
      await expectNoOverflow(page, step.id);
      await expectAccessible(page, step.id);
      await page.locator('.lesson-footer .primary-button').click();
    }
    await expect(page.getByText('Lektion abgeschlossen')).toBeVisible();
    await expectNoOverflow(page, 'Ergebnis');
    await expectAccessible(page, 'Ergebnis');

    await page.goto('/#/path');
    await page.keyboard.press('/');
    await page.keyboard.type('High');
    await expect(page.getByRole('option').first()).toBeVisible();
    await expectNoOverflow(page, 'Suche');
    await expectAccessible(page, 'Suche');
    await page.keyboard.press('Escape');

    await page.goto('/#/settings');
    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Sicherung herunterladen' }).click(),
    ]);
    await page.getByLabel('Sicherung einspielen …').setInputFiles((await download.path())!);
    await expect(page.getByRole('heading', { name: /Vorschau: Sicherung vom/ })).toBeVisible();
    await expectNoOverflow(page, 'Import-Vorschau');
    await expectAccessible(page, 'Import-Vorschau');
    expect(errors).toEqual([]);
  });

  test('vollständiger erster Lernabschnitt nur mit der Tastatur', async ({ page }) => {
    test.setTimeout(240_000);
    const errors = trackErrors(page);
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Trading Price Action Trends' })).toBeVisible();

    for (const [index, lesson] of firstUnit.entries()) {
      await tabTo(page, page.getByRole('button', { name: `${lesson.title}: Jetzt lernen` }));
      await page.keyboard.press('Enter');
      // Falsch-dann-richtig in der ersten Lektion, danach direkt richtig.
      await finishLessonByKeyboard(page, lesson, index === 0);
    }

    const data = await stored(page);
    expect(data.completedLessonIds).toEqual(expect.arrayContaining(firstUnit.map((lesson) => lesson.id)));
    const firstQuestion = questionOf(firstUnit[0])!;
    expect(data.questionResults[firstQuestion.id]).toMatchObject({ firstAttemptCorrect: false });
    const nextUnitLesson = brooksTrendsCourse.units[1].lessons[0];
    await expect(page.getByRole('button', { name: `${nextUnitLesson.title}: Jetzt lernen` })).toBeVisible();
    expect(errors).toEqual([]);
  });

  test('Review, Fortschritt und Suche mit der Tastatur', async ({ page }) => {
    const errors = trackErrors(page);
    const lessons = publishedLessons.slice(0, 2);
    const questions = lessons.map((lesson) => questionOf(lesson)!);
    await page.addInitScript((ids) => {
      if (sessionStorage.getItem('seeded')) return;
      sessionStorage.setItem('seeded', '1');
      // Abschlüsse einer älteren Version ohne Datum: sofort fällig.
      localStorage.setItem(
        'wqt-academy-progress-v1',
        JSON.stringify({ version: 2, completedLessonIds: ids, answers: {} }),
      );
    }, lessons.map((lesson) => lesson.id));

    await page.goto('/');
    await openViewByKeyboard(page, 'Üben');
    await expect(page.getByRole('heading', { name: 'Analyse-Training' })).toBeVisible();
    await tabTo(page, page.getByRole('button', { name: 'Fällige Fragen üben' }));
    await page.keyboard.press('Enter');

    for (const [index, question] of questions.entries()) {
      await expect(page.getByRole('heading', { name: question.title, level: 2 })).toBeFocused();
      await tabTo(page, page.locator('.practice-options button').first());
      // Erste Frage falsch, zweite richtig – beides mit Symbol, nicht nur Farbe.
      await arrowTo(page, page.getByRole('radio', { name: option(question, index !== 0).label }));
      await page.keyboard.press('Enter');
      await expect(page.getByText(index === 0 ? 'Schau auf den Kontext.' : 'Sauber analysiert.')).toBeVisible();
      await expect(page.getByRole('radio', { name: /richtige Antwort/ })).toBeVisible();
      if (index === 0) await expect(page.getByRole('radio', { name: /falsche Antwort/ })).toBeVisible();
      const next = page.getByRole('button', {
        name: index === questions.length - 1 ? 'Auswertung anzeigen' : 'Nächste Frage',
      });
      await expect(next).toBeFocused();
      await page.keyboard.press('Enter');
    }
    await expect(page.getByRole('heading', { name: `1 von ${questions.length} richtig` })).toBeVisible();
    await expectAccessible(page, 'Review-Auswertung');

    await openViewByKeyboard(page, 'Fortschritt');
    await expect(page.getByRole('heading', { name: 'Fortschritt', level: 1 })).toBeVisible();
    await expectAccessible(page, 'Fortschritt');

    // Suche: `/` öffnet, Pfeil und Enter springen zum Treffer, Escape schließt.
    await page.keyboard.press('/');
    await expect(
      page.getByRole('combobox', { name: 'Lektionen, Schritte und Glossar durchsuchen' }),
    ).toBeFocused();
    await page.keyboard.type('Candle');
    await expect(page.getByRole('option').first()).toContainText('Bar');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowUp');
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/#\/glossary\?term=Bar$/);
    await expect(page.getByRole('heading', { name: 'Bar', exact: true })).toBeVisible();
    expect(errors).toEqual([]);
  });

  test('Lesezeichen, Notiz sowie Export und Import mit der Tastatur', async ({ page }) => {
    const errors = trackErrors(page);
    const lesson = publishedLessons[0];
    await page.goto(`/#/lesson/${lesson.id}`);
    await expect(page.getByRole('heading', { name: lesson.steps[0].title, level: 1 })).toBeFocused();

    await tabTo(page, page.locator('summary', { hasText: 'Notiz & Lesezeichen' }));
    await page.keyboard.press('Enter');
    await tabTo(page, page.getByRole('button', { name: /Schritt merken/ }));
    await page.keyboard.press('Space');
    await expect(page.getByRole('button', { name: /Schritt merken/ })).toHaveAttribute('aria-pressed', 'true');
    await tabTo(page, page.getByRole('textbox', { name: /Deine Notiz zu Schritt 1/ }));
    await page.keyboard.type('Tastatur-Notiz für den Release-Check');
    await expect(page.getByText(/Gespeichert um/)).toBeVisible();
    await expectAccessible(page, 'Notiz');

    await tabTo(page, page.getByRole('button', { name: 'Lektion schließen' }));
    await page.keyboard.press('Enter');
    await openViewByKeyboard(page, 'Gespeichert');
    await expect(page.getByText('Tastatur-Notiz für den Release-Check')).toBeVisible();
    await expectAccessible(page, 'Gespeichert');

    await openViewByKeyboard(page, 'Einstellungen');
    await expect(page.getByRole('heading', { name: 'Einstellungen', level: 1 })).toBeVisible();
    await tabTo(page, page.getByRole('button', { name: 'Sicherung herunterladen' }));
    const [download] = await Promise.all([page.waitForEvent('download'), page.keyboard.press('Enter')]);
    const file = (await download.path())!;

    // Import: Dateiauswahl per Tastatur, Vorschau bekommt den Fokus.
    await tabTo(page, page.getByLabel('Sicherung einspielen …'));
    const [chooser] = await Promise.all([page.waitForEvent('filechooser'), page.keyboard.press('Space')]);
    await chooser.setFiles(file);
    await expect(page.getByRole('heading', { name: /Vorschau: Sicherung vom/ })).toBeFocused();
    await tabTo(page, page.getByRole('button', { name: 'Zusammenführen', exact: true }));
    await page.keyboard.press('Enter');
    await expect(page.getByRole('heading', { name: 'Import abgeschlossen' })).toBeFocused();

    const data = await stored(page);
    expect(Object.values(data.notes as Record<string, { text: string }>).map((note) => note.text)).toContain(
      'Tastatur-Notiz für den Release-Check',
    );
    expect(errors).toEqual([]);
  });

  test('Schaubild nicht ladbar: verständlicher Hinweis und Neuladen', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    const lesson = publishedLessons.find((item) => item.steps.some((step) => step.type === 'diagram'))!;
    const diagramIndex = lesson.steps.findIndex((step) => step.type === 'diagram');
    const chartModule = '**/src/components/LearningChart.tsx*';
    await page.route(chartModule, (route) => route.abort());

    await page.goto(`/#/lesson/${lesson.id}?step=${diagramIndex + 1}`);
    await expect(page.getByRole('alert')).toContainText('Das Schaubild konnte nicht geladen werden.');
    // Der Schritt bleibt lesbar und bedienbar.
    await expect(page.getByRole('heading', { name: lesson.steps[diagramIndex].title, level: 1 })).toBeVisible();
    await expect(page.locator('.lesson-footer .primary-button')).toBeEnabled();

    await page.unroute(chartModule);
    await page.getByRole('button', { name: 'Seite neu laden' }).click();
    // Gleicher Schritt nach dem Neuladen, jetzt mit Schaubild.
    await expect(page.locator('.learning-chart svg')).toBeVisible();
    await expect(page.getByRole('heading', { name: lesson.steps[diagramIndex].title, level: 1 })).toBeVisible();
    await expect(page.getByRole('alert')).toHaveCount(0);
    expect(errors).toEqual([]);
  });

  test('reduzierte Bewegung wird respektiert @mobile', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    const duration = await page
      .getByRole('button', { name: 'Menü öffnen' })
      .evaluate(() => getComputedStyle(document.querySelector('.app-sidebar')!).transitionDuration);
    expect(duration.split(',').every((value) => Number.parseFloat(value) <= 0.01)).toBe(true);
  });
});

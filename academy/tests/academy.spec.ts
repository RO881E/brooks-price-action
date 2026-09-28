import { expect, test } from '@playwright/test';
import { publishedLessons } from '../src/content/course';

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem(
      'brooks-progress',
      JSON.stringify({ 'b1-intro': true, 'b1-ch1': true }),
    );
    localStorage.setItem('brooks-tr-best', '9');
  });
});

test('loads every main view without JavaScript errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));

  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Trading Price Action Trends' })).toBeVisible();
  await expect(page.getByText('Alter Fortschritt erkannt')).toBeVisible();

  const mobileNavigation = page.getByRole('navigation', { name: 'Mobile Navigation' });
  const navigation = (await mobileNavigation.isVisible())
    ? mobileNavigation
    : page.getByRole('navigation', { name: 'Hauptnavigation' });

  await navigation.getByRole('button', { name: 'Buchmodus' }).click();
  await expect(page.getByRole('heading', { name: 'Inhalte zusammenhängend lesen' })).toBeVisible();
  await expect(page.getByRole('button', { name: /Der Chart ist das Ergebnis: Verfügbar/ })).toBeEnabled();
  await expect(
    page.getByRole('button', { name: /Wahrscheinlichkeit statt Gewissheit: Gesperrt/ }),
  ).toBeDisabled();

  await navigation.getByRole('button', { name: 'Üben' }).click();
  await expect(page.getByRole('heading', { name: 'Analyse-Training' })).toBeVisible();
  await expect(page.getByText('Dein Training füllt sich mit dem Lernpfad')).toBeVisible();

  await navigation.getByRole('button', { name: 'Glossar' }).click();
  await expect(page.getByRole('heading', { name: 'Price-Action-Glossar' })).toBeVisible();
  await page.getByRole('searchbox', { name: 'Glossar durchsuchen' }).fill('H2');
  await expect(page.getByRole('heading', { name: 'High 2' })).toBeVisible();

  expect(errors).toEqual([]);
});

test('completes a lesson, persists progress and preserves legacy keys', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: /Der Chart ist das Ergebnis: Jetzt lernen/ }).click();

  await expect(page.getByRole('heading', { name: 'Nicht Kerzen auswendig lernen, sondern Entscheidungen lesen' })).toBeVisible();
  await page.getByRole('button', { name: 'Weiter' }).click();
  await expect(page.getByRole('heading', { name: 'Eine Auktion hinter jedem Bar' })).toBeVisible();
  await page.getByRole('button', { name: 'Weiter' }).click();
  await expect(page.getByRole('heading', { name: 'Beschreibung vor Erklärung' })).toBeVisible();
  await page.getByRole('button', { name: 'Weiter' }).click();

  await page.getByRole('radio', { name: /Die schwache Reaktion/ }).click();
  await expect(page.getByText('Richtig eingeordnet.')).toBeVisible();
  await page.getByRole('button', { name: 'Weiter' }).click();
  await page.getByRole('button', { name: 'Lektion abschließen' }).click();
  await expect(page.getByText('Lektion abgeschlossen')).toBeVisible();
  await page.getByRole('button', { name: 'Zurück zum Lernpfad' }).click();

  await expect(page.getByRole('button', { name: /Der Chart ist das Ergebnis: Abgeschlossen/ })).toBeVisible();
  await expect(page.getByRole('button', { name: /Institutionen, Programme und dein einzelner Stop: Jetzt lernen/ })).toBeVisible();

  const valuesBeforeReload = await page.evaluate(() => ({
    legacy: localStorage.getItem('brooks-progress'),
    best: localStorage.getItem('brooks-tr-best'),
    academy: localStorage.getItem('wqt-academy-progress-v1'),
  }));

  await page.reload();
  await expect(page.getByRole('button', { name: /Der Chart ist das Ergebnis: Abgeschlossen/ })).toBeVisible();

  const mobileNavigation = page.getByRole('navigation', { name: 'Mobile Navigation' });
  const navigation = (await mobileNavigation.isVisible())
    ? mobileNavigation
    : page.getByRole('navigation', { name: 'Hauptnavigation' });
  await navigation.getByRole('button', { name: 'Üben' }).click();
  await expect(page.getByRole('heading', { name: 'Welche Aussage bleibt am belastbarsten?' })).toBeVisible();

  const valuesAfterReload = await page.evaluate(() => ({
    legacy: localStorage.getItem('brooks-progress'),
    best: localStorage.getItem('brooks-tr-best'),
    academy: localStorage.getItem('wqt-academy-progress-v1'),
  }));

  expect(valuesBeforeReload.legacy).toBe(JSON.stringify({ 'b1-intro': true, 'b1-ch1': true }));
  expect(valuesAfterReload.legacy).toBe(valuesBeforeReload.legacy);
  expect(valuesAfterReload.best).toBe('9');
  expect(valuesAfterReload.academy).toContain('brooks-trends.introduction.lesson-01');
});

test.describe('desktop content traversal', () => {
  test('opens every published lesson and renders every learning step', { tag: '@desktop' }, async ({ page }) => {
    test.setTimeout(90_000);

    const completedLessonIds = publishedLessons.map((lesson) => lesson.id);
    const answers = Object.fromEntries(
      publishedLessons.flatMap((lesson) =>
        lesson.steps
          .filter((step) => step.type === 'question')
          .map((step) => [step.id, step.correctOptionId]),
      ),
    );

    await page.addInitScript(
      ({ lessonIds, savedAnswers }) => {
        localStorage.setItem(
          'wqt-academy-progress-v1',
          JSON.stringify({
            version: 1,
            completedLessonIds: lessonIds,
            answers: savedAnswers,
            lastLessonId: lessonIds.at(-1) ?? null,
            legacyReadChapters: [],
            legacyTrendRangeBest: 0,
            updatedAt: new Date().toISOString(),
          }),
        );
      },
      { lessonIds: completedLessonIds, savedAnswers: answers },
    );

    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto('/');
    await page.getByRole('navigation', { name: 'Hauptnavigation' })
      .getByRole('button', { name: 'Buchmodus' })
      .click();

    for (const lesson of publishedLessons) {
      await page
        .getByRole('button', { name: `${lesson.title}: Abgeschlossen`, exact: true })
        .click();

      for (const [index, step] of lesson.steps.entries()) {
        await expect(
          page.getByRole('heading', { name: step.title, level: 1 }),
        ).toBeVisible();
        if (step.type === 'diagram') {
          await expect(page.getByRole('img', { name: step.title })).toBeVisible();
        }
        if (index < lesson.steps.length - 1) {
          await page.getByRole('button', { name: 'Weiter' }).click();
        }
      }

      await page.getByRole('button', { name: 'Lektion schließen' }).click();
    }

    expect(errors).toEqual([]);
  });
});

test('is usable in a narrow mobile viewport', { tag: '@mobile' }, async ({ page }) => {
  const completedLessonIds = publishedLessons.map((lesson) => lesson.id);
  await page.addInitScript((lessonIds) => {
    localStorage.setItem(
      'wqt-academy-progress-v1',
      JSON.stringify({
        version: 1,
        completedLessonIds: lessonIds,
        answers: {},
        lastLessonId: lessonIds.at(-1) ?? null,
        legacyReadChapters: [],
        legacyTrendRangeBest: 0,
        updatedAt: new Date().toISOString(),
      }),
    );
  }, completedLessonIds);

  await page.goto('/');
  const mobileNavigation = page.getByRole('navigation', { name: 'Mobile Navigation' });
  await expect(mobileNavigation).toBeVisible();
  await mobileNavigation.getByRole('button', { name: 'Glossar' }).click();
  await expect(page.getByRole('heading', { name: 'Price-Action-Glossar' })).toBeVisible();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    ),
  ).toBe(false);

  await mobileNavigation.getByRole('button', { name: 'Buchmodus' }).click();
  await page
    .getByRole('button', {
      name: 'Die Falle vor der Trendwiederaufnahme: Abgeschlossen',
      exact: true,
    })
    .click();
  await page.getByRole('button', { name: 'Weiter' }).click();
  await expect(
    page.getByRole('img', { name: 'Der Fehlausbruch fängt die falsche Seite' }),
  ).toBeVisible();
  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(hasHorizontalOverflow).toBe(false);
});

test.describe('F-01 resume and stable URLs', () => {
  const firstLessonId = 'brooks-trends.introduction.lesson-01';

  const mainNavigation = async (page: import('@playwright/test').Page) => {
    const mobileNavigation = page.getByRole('navigation', { name: 'Mobile Navigation' });
    return (await mobileNavigation.isVisible())
      ? mobileNavigation
      : page.getByRole('navigation', { name: 'Hauptnavigation' });
  };

  test('opens a deep link at its step and keeps it after reload', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));

    await page.goto(`/#/lesson/${firstLessonId}?step=2`);
    await expect(page.getByRole('heading', { name: 'Eine Auktion hinter jedem Bar' })).toBeVisible();
    await expect(page.getByText('2 / 5')).toBeVisible();

    await page.reload();
    await expect(page.getByRole('heading', { name: 'Eine Auktion hinter jedem Bar' })).toBeVisible();
    await expect(page).toHaveURL(new RegExp(`#/lesson/${firstLessonId}\\?step=2$`));

    // Ein Link hinter eine noch offene Frage landet an der Frage, nicht dahinter.
    await page.goto(`/#/lesson/${firstLessonId}?step=5`);
    await expect(page.getByText('4 / 5')).toBeVisible();
    await expect(page).toHaveURL(new RegExp(`#/lesson/${firstLessonId}\\?step=4$`));

    expect(errors).toEqual([]);
  });

  test('continues a started lesson exactly after a restart', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('button', { name: /Nächste Lektion starten|Der Chart ist das Ergebnis starten/ })).toBeVisible();
    await page.getByRole('button', { name: /Der Chart ist das Ergebnis: Jetzt lernen/ }).click();
    await page.getByRole('button', { name: 'Weiter' }).click();
    await page.getByRole('button', { name: 'Weiter' }).click();
    await expect(page.getByRole('heading', { name: 'Beschreibung vor Erklärung' })).toBeVisible();
    await expect(page).toHaveURL(/step=3$/);

    // Neustart: ohne Hash erneut aufrufen.
    await page.goto('about:blank');
    await page.goto('/');
    await expect(page.getByText('Begonnene Lektion').filter({ visible: true })).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Der Chart ist das Ergebnis: Begonnen · Schritt 3 von 5' }),
    ).toBeVisible();
    await page.getByRole('button', { name: /^(Weiterlernen|Der Chart ist das Ergebnis weiterlernen)$/ }).click();

    await expect(page.getByRole('heading', { name: 'Beschreibung vor Erklärung' })).toBeVisible();
    await expect(page.getByText('3 / 5')).toBeVisible();

    const stored = await page.evaluate(() =>
      JSON.parse(localStorage.getItem('wqt-academy-progress-v1') ?? '{}'),
    );
    expect(stored.version).toBe(3);
    expect(stored.lessonPositions['brooks-trends.introduction.lesson-01'].stepIndex).toBe(2);
  });

  test('supports browser back and forward between views and lessons', async ({ page }) => {
    await page.goto('/');
    const navigation = await mainNavigation(page);

    await navigation.getByRole('button', { name: 'Glossar' }).click();
    await expect(page).toHaveURL(/#\/glossary$/);
    await navigation.getByRole('button', { name: 'Buchmodus' }).click();
    await expect(page.getByRole('heading', { name: 'Inhalte zusammenhängend lesen' })).toBeVisible();

    await page.getByRole('button', { name: /Der Chart ist das Ergebnis: Verfügbar/ }).click();
    await page.getByRole('button', { name: 'Weiter' }).click();
    await expect(page.getByRole('heading', { name: 'Eine Auktion hinter jedem Bar' })).toBeVisible();

    await page.goBack();
    await expect(page.getByRole('heading', { name: 'Inhalte zusammenhängend lesen' })).toBeVisible();
    await page.goBack();
    await expect(page.getByRole('heading', { name: 'Price-Action-Glossar' })).toBeVisible();

    await page.goForward();
    await page.goForward();
    await expect(page.getByRole('heading', { name: 'Eine Auktion hinter jedem Bar' })).toBeVisible();

    // „Schließen“ führt in die Ansicht zurück, aus der die Lektion kam.
    await page.getByRole('button', { name: 'Lektion schließen' }).click();
    await expect(page.getByRole('heading', { name: 'Inhalte zusammenhängend lesen' })).toBeVisible();
  });

  test('falls back to the learning path for invalid links', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));

    for (const hash of [
      '#/lesson/does-not-exist?step=3',
      '#/lesson/brooks-trends.introduction.lesson-02',
      '#/unknown-view',
      '#/lesson/%E0%A4%A',
    ]) {
      await page.goto(`/${hash}`);
      await expect(page.getByRole('heading', { name: 'Trading Price Action Trends' })).toBeVisible();
      await expect(page.getByRole('status').filter({ hasText: 'zurück im Lernpfad' })).toBeVisible();
      await expect(page).toHaveURL(/#\/path$/);
    }

    expect(errors).toEqual([]);
  });

  test('reopens a completed lesson from the beginning', async ({ page }) => {
    await page.addInitScript((lessonId) => {
      localStorage.setItem(
        'wqt-academy-progress-v1',
        JSON.stringify({
          version: 1,
          completedLessonIds: [lessonId],
          answers: { 'intro-01-question': 'reaction' },
          lastLessonId: lessonId,
          legacyReadChapters: [],
          legacyTrendRangeBest: 0,
          updatedAt: '2026-09-01T08:00:00.000Z',
          futureField: { keep: true },
        }),
      );
    }, firstLessonId);

    await page.goto('/');
    await page.getByRole('button', { name: /Der Chart ist das Ergebnis: Abgeschlossen/ }).click();
    await expect(
      page.getByRole('heading', { name: 'Nicht Kerzen auswendig lernen, sondern Entscheidungen lesen' }),
    ).toBeVisible();
    await expect(page.getByText('1 / 5')).toBeVisible();

    const stored = await page.evaluate(() => ({
      academy: JSON.parse(localStorage.getItem('wqt-academy-progress-v1') ?? '{}'),
      legacy: localStorage.getItem('brooks-progress'),
      best: localStorage.getItem('brooks-tr-best'),
    }));
    expect(stored.academy.version).toBe(3);
    expect(stored.academy.completedLessonIds).toEqual([firstLessonId]);
    expect(stored.academy.lessonPositions).toEqual({});
    expect(stored.academy.futureField).toEqual({ keep: true });
    expect(stored.legacy).toBe(JSON.stringify({ 'b1-intro': true, 'b1-ch1': true }));
    expect(stored.best).toBe('9');
  });

  test('keeps working with corrupted academy data and backs it up', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.addInitScript(() => {
      localStorage.setItem('wqt-academy-progress-v1', '{"version":1,"completedLess');
    });

    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Trading Price Action Trends' })).toBeVisible();
    expect(
      await page.evaluate(() => localStorage.getItem('wqt-academy-progress-backup')),
    ).toBe('{"version":1,"completedLess');
    expect(errors).toEqual([]);
  });
});

test.describe('F-02 repeatable questions and lesson results', () => {
  const lessonId = 'brooks-trends.introduction.lesson-01';
  const lessonTitle = 'Der Chart ist das Ergebnis';
  const correctAnswer = /Die schwache Reaktion/;
  const wrongAnswer = /Die Nachricht war positiv/;

  const openFirstQuestion = async (page: import('@playwright/test').Page) => {
    await page.goto('/');
    await page.getByRole('button', { name: `${lessonTitle}: Jetzt lernen` }).click();
    for (let step = 0; step < 3; step += 1) {
      await page.getByRole('button', { name: 'Weiter' }).click();
    }
    await expect(page.getByText('4 / 5')).toBeVisible();
  };

  const finishLesson = async (page: import('@playwright/test').Page) => {
    await page.getByRole('button', { name: 'Weiter' }).click();
    await page.getByRole('button', { name: 'Lektion abschließen' }).click();
    await expect(page.getByRole('heading', { name: lessonTitle, level: 1 })).toBeVisible();
    await expect(page).toHaveURL(new RegExp(`#/lesson/${lessonId}/result$`));
  };

  const stat = (page: import('@playwright/test').Page, label: string) =>
    page.locator('.result-stats > div').filter({ hasText: label });

  const storedAcademy = (page: import('@playwright/test').Page) =>
    page.evaluate(() => JSON.parse(localStorage.getItem('wqt-academy-progress-v1') ?? '{}'));

  test('correct on the first attempt shows a full result that survives reload', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));

    await openFirstQuestion(page);
    await page.getByRole('radio', { name: correctAnswer }).click();
    await expect(page.getByText('Richtig eingeordnet.')).toBeVisible();
    await finishLesson(page);

    await expect(page.getByText('Lektion abgeschlossen')).toBeVisible();
    await expect(stat(page, 'Beantwortete Fragen')).toContainText('1 von 1');
    await expect(stat(page, 'Richtig im ersten Versuch')).toContainText('100 %');
    await expect(stat(page, 'Status')).toContainText('Abgeschlossen');
    await expect(stat(page, 'Verdiente XP')).toContainText('+30 XP');

    await page.reload();
    await expect(stat(page, 'Verdiente XP')).toContainText('+30 XP');
    await expect(stat(page, 'Richtig im ersten Versuch')).toContainText('100 %');

    const stored = await storedAcademy(page);
    expect(stored.version).toBe(3);
    expect(stored.completedLessonIds).toEqual([lessonId]);
    expect(stored.lessonResults[lessonId].xpAwarded).toBe(30);
    expect(stored.questionResults['intro-01-question']).toMatchObject({
      attempts: 1,
      firstAttemptCorrect: true,
      status: 'correct',
    });

    await page.getByRole('button', { name: 'Zurück zum Lernpfad' }).click();
    await expect(page.locator('.stat-card')).toContainText('30');
    expect(errors).toEqual([]);
  });

  test('a wrong answer explains, allows a retry and does not lock the next lesson', async ({ page }) => {
    await openFirstQuestion(page);
    await page.getByRole('radio', { name: wrongAnswer }).click();

    await expect(page.getByText('Noch nicht ganz.')).toBeVisible();
    await expect(page.getByText('tatsächliche Auktion akzeptierte')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Weiter' })).toBeDisabled();
    await expect(page.getByRole('radio', { name: correctAnswer })).toBeDisabled();

    // Auch nach einem Reload bleibt der Stand erhalten.
    await page.reload();
    await expect(page.getByText('Noch nicht ganz.')).toBeVisible();

    await page.getByRole('button', { name: 'Noch einmal versuchen' }).click();
    await expect(page.getByRole('radio', { name: wrongAnswer })).toBeDisabled();
    await expect(page.getByRole('radio', { name: correctAnswer })).toBeFocused();
    await page.getByRole('radio', { name: correctAnswer }).click();
    await expect(page.getByText('Richtig – im neuen Versuch.')).toBeVisible();
    await finishLesson(page);

    await expect(stat(page, 'Richtig im ersten Versuch')).toContainText('0 %');
    await expect(stat(page, 'Richtig im ersten Versuch')).toContainText('0 von 1 Fragen');
    await expect(stat(page, 'Verdiente XP')).toContainText('+30 XP');
    await expect(page.getByText('unabhängig von der Quote freigeschaltet')).toBeVisible();

    const stored = await storedAcademy(page);
    expect(stored.questionResults['intro-01-question']).toMatchObject({
      attempts: 2,
      firstAttemptCorrect: false,
      status: 'correct',
    });

    await page.getByRole('button', { name: 'Zurück zum Lernpfad' }).click();
    await expect(
      page.getByRole('button', { name: /Institutionen, Programme und dein einzelner Stop: Jetzt lernen/ }),
    ).toBeVisible();
  });

  test('the solution can be revealed after a wrong attempt', async ({ page }) => {
    await openFirstQuestion(page);
    await page.getByRole('radio', { name: wrongAnswer }).click();
    await page.getByRole('button', { name: 'Lösung anzeigen' }).click();

    await expect(page.getByText(/Lösung: Die schwache Reaktion/)).toBeVisible();
    await expect(page.getByRole('button', { name: 'Weiter' })).toBeEnabled();
    await finishLesson(page);
    await expect(stat(page, 'Beantwortete Fragen')).toContainText('1 von 1');
    await expect(stat(page, 'Richtig im ersten Versuch')).toContainText('0 %');
  });

  test('repeating a completed lesson awards no second XP or completion', async ({ page }) => {
    await openFirstQuestion(page);
    await page.getByRole('radio', { name: correctAnswer }).click();
    await finishLesson(page);

    await page.getByRole('button', { name: 'Lektion wiederholen' }).click();
    await expect(page.getByText('1 / 5')).toBeVisible();
    for (let step = 0; step < 3; step += 1) {
      await page.getByRole('button', { name: 'Weiter' }).click();
    }
    await expect(page.getByRole('radio', { name: correctAnswer })).toBeEnabled();
    await page.getByRole('radio', { name: correctAnswer }).click();
    await finishLesson(page);

    await expect(page.getByText('Wiederholung abgeschlossen')).toBeVisible();
    await expect(stat(page, 'Verdiente XP')).toContainText('+0 XP');
    await expect(stat(page, 'Verdiente XP')).toContainText('bereits beim ersten Abschluss');

    await page.reload();
    await expect(stat(page, 'Verdiente XP')).toContainText('+0 XP');

    const stored = await storedAcademy(page);
    expect(stored.completedLessonIds).toEqual([lessonId]);
    expect(stored.lessonResults[lessonId].xpAwarded).toBe(30);
    expect(stored.questionResults['intro-01-question'].attempts).toBe(2);

    await page.getByRole('button', { name: 'Zurück zum Lernpfad' }).click();
    await expect(page.locator('.stat-card')).toContainText('1 /');
    await expect(page.locator('.stat-card')).toContainText('30');
  });

  test('old answers stay visible and are not turned into attempts', async ({ page }) => {
    await page.addInitScript((id) => {
      if (sessionStorage.getItem('seeded')) return;
      sessionStorage.setItem('seeded', '1');
      localStorage.setItem(
        'wqt-academy-progress-v1',
        JSON.stringify({
          version: 2,
          completedLessonIds: [id],
          answers: { 'intro-01-question': 'headline' },
          lastLessonId: id,
          lessonPositions: {},
          legacyReadChapters: [],
          legacyTrendRangeBest: 0,
          updatedAt: '2026-09-01T08:00:00.000Z',
        }),
      );
    }, lessonId);

    await page.goto(`/#/lesson/${lessonId}?step=4`);
    await expect(page.getByText(/Lösung: Die schwache Reaktion/)).toBeVisible();
    await expect(page.getByRole('button', { name: 'Weiter' })).toBeEnabled();
    await finishLesson(page);

    await expect(stat(page, 'Richtig im ersten Versuch')).toContainText('Nicht erfasst');
    await expect(page.getByText('keine Versuchsdaten')).toBeVisible();
    await expect(stat(page, 'Verdiente XP')).toContainText('+0 XP');

    const stored = await storedAcademy(page);
    expect(stored.answers).toEqual({ 'intro-01-question': 'headline' });
    expect(stored.questionResults).toEqual({});
    expect(stored.lessonResults[lessonId].firstCompletedAt).toBeNull();
    expect(stored.lessonResults[lessonId].xpAwarded).toBe(30);
  });
});

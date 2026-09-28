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
  // Heute abgeschlossen: erst morgen fällig, aber schon in der gemischten Runde.
  await expect(page.getByText('Für heute ist alles wiederholt.')).toBeVisible();
  await page.getByRole('button', { name: 'Gemischte Runde' }).click();
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
    expect(stored.version).toBe(6);
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
    expect(stored.academy.version).toBe(6);
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
    expect(stored.version).toBe(6);
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

test.describe('F-03 smart review queue', () => {
  const firstLessons = publishedLessons.slice(0, 3);
  const questions = firstLessons.flatMap((lesson) =>
    lesson.steps.filter(
      (step): step is Extract<(typeof lesson.steps)[number], { type: 'question' }> =>
        step.type === 'question',
    ),
  );
  const optionLabel = (question: (typeof questions)[number], correct: boolean) =>
    question.options.find((option) => (option.id === question.correctOptionId) === correct)!.label;

  const openPractice = async (page: import('@playwright/test').Page) => {
    const mobileNavigation = page.getByRole('navigation', { name: 'Mobile Navigation' });
    const navigation = (await mobileNavigation.isVisible())
      ? mobileNavigation
      : page.getByRole('navigation', { name: 'Hauptnavigation' });
    await navigation.getByRole('button', { name: 'Üben' }).click();
    await expect(page.getByRole('heading', { name: 'Analyse-Training' })).toBeVisible();
  };

  const seed = async (page: import('@playwright/test').Page, record: Record<string, unknown>) => {
    await page.addInitScript((value) => {
      if (sessionStorage.getItem('seeded')) return;
      sessionStorage.setItem('seeded', '1');
      localStorage.setItem('wqt-academy-progress-v1', JSON.stringify(value));
    }, record);
  };

  const storedAcademy = (page: import('@playwright/test').Page) =>
    page.evaluate(() => JSON.parse(localStorage.getItem('wqt-academy-progress-v1') ?? '{}'));

  test.beforeEach(async ({ page }) => {
    await page.clock.setFixedTime(new Date(2026, 9, 5, 10, 0));
  });

  test('runs a due round with explanations, survives reload and plans the next review', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    // Abschlüsse aus einer älteren Version ohne Datum: sofort fällig.
    await seed(page, {
      version: 2,
      completedLessonIds: firstLessons.map((lesson) => lesson.id),
      answers: {},
    });

    await page.goto('/');
    await openPractice(page);
    await expect(page.getByText(`${questions.length} Fragen sind heute dran.`)).toBeVisible();
    await page.getByRole('button', { name: 'Fällige Fragen üben' }).click();

    for (const [index, question] of questions.entries()) {
      await expect(page.getByText(`Frage ${index + 1} / ${questions.length}`)).toBeVisible();
      await expect(page.getByRole('heading', { name: question.title, level: 2 })).toBeVisible();
      await page.getByRole('radio', { name: optionLabel(question, true) }).click();
      await expect(page.getByText('Sauber analysiert.')).toBeVisible();
      await expect(page.getByText('Nächste Wiederholung morgen.')).toBeVisible();

      if (index === 0) {
        // Reload mitten in der Runde setzt nichts zurück und wertet nicht doppelt.
        await page.reload();
        await expect(page.getByText(`Frage 1 / ${questions.length}`)).toBeVisible();
        await expect(page.getByText('Sauber analysiert.')).toBeVisible();
      }

      await page
        .getByRole('button', {
          name: index === questions.length - 1 ? 'Auswertung anzeigen' : 'Nächste Frage',
        })
        .click();
    }

    await expect(
      page.getByRole('heading', { name: `${questions.length} von ${questions.length} richtig` }),
    ).toBeVisible();
    await expect(page.getByText('Für heute ist nichts mehr fällig.')).toBeVisible();

    const stored = await storedAcademy(page);
    expect(stored.version).toBe(6);
    for (const question of questions) {
      expect(stored.reviewCards[question.id]).toMatchObject({
        stage: 0,
        dueDay: '2026-10-06',
        lastReviewedDay: '2026-10-05',
        reviews: 1,
      });
    }

    await page.getByRole('button', { name: 'Zur Übersicht' }).click();
    await expect(page.getByText('Für heute ist alles wiederholt. Nächste Wiederholung morgen.')).toBeVisible();

    // Am nächsten Kalendertag sind die Fragen wieder fällig.
    await page.clock.setFixedTime(new Date(2026, 9, 6, 8, 0));
    await page.reload();
    await expect(page.getByText(`${questions.length} Fragen sind heute dran.`)).toBeVisible();
    expect(errors).toEqual([]);
  });

  test('trains mistakes until they are answered correctly', async ({ page }) => {
    const [question] = questions;
    await seed(page, {
      version: 3,
      completedLessonIds: [firstLessons[0].id],
      answers: { [question.id]: question.correctOptionId },
      questionResults: {
        [question.id]: {
          selectedOptionId: question.correctOptionId,
          attempts: 2,
          firstAttemptCorrect: false,
          status: 'correct',
          wrongOptionIds: [],
        },
      },
      lessonResults: {
        [firstLessons[0].id]: {
          firstCompletedAt: new Date(2026, 9, 5, 9, 0).toISOString(),
          lastCompletedAt: new Date(2026, 9, 5, 9, 0).toISOString(),
          xpAwarded: firstLessons[0].xp,
        },
      },
    });

    await page.goto('/#/practice');
    await expect(page.getByText('Für heute ist alles wiederholt.')).toBeVisible();
    await expect(page.getByText('1 Frage wartet auf einen richtigen Versuch.')).toBeVisible();
    await page.getByRole('button', { name: 'Fehler trainieren' }).click();

    await page.getByRole('radio', { name: optionLabel(question, false) }).click();
    await expect(page.getByText('Schau auf den Kontext.')).toBeVisible();
    await expect(page.getByText(`Richtig ist „${optionLabel(question, true)}“:`)).toBeVisible();
    await page.getByRole('button', { name: 'Auswertung anzeigen' }).click();
    await expect(page.getByRole('heading', { name: '0 von 1 richtig' })).toBeVisible();

    await page.getByRole('button', { name: 'Fehler trainieren' }).click();
    await page.getByRole('radio', { name: optionLabel(question, true) }).click();
    await expect(page.getByText('Sauber analysiert.')).toBeVisible();
    await page.getByRole('button', { name: 'Auswertung anzeigen' }).click();
    await expect(page.getByRole('heading', { name: '1 von 1 richtig' })).toBeVisible();

    await page.getByRole('button', { name: 'Zur Übersicht' }).click();
    await expect(page.getByText('Keine offenen Fehler – stark.')).toBeVisible();

    const stored = await storedAcademy(page);
    expect(stored.reviewCards[question.id]).toMatchObject({
      stage: 0,
      dueDay: '2026-10-06',
      lastResult: 'correct',
      reviews: 2,
      lapses: 1,
    });
    expect(stored.reviewSession).toBeNull();
  });

  test('shows clear empty states and allows chapter practice', async ({ page }) => {
    await page.goto('/#/practice');
    await expect(page.getByText('Dein Training füllt sich mit dem Lernpfad')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Fällige Fragen üben' })).toHaveCount(0);

    await page.evaluate((lessonId) => {
      const at = new Date(2026, 9, 5, 9, 0).toISOString();
      localStorage.setItem(
        'wqt-academy-progress-v1',
        JSON.stringify({
          version: 4,
          completedLessonIds: [lessonId],
          lessonResults: { [lessonId]: { firstCompletedAt: at, lastCompletedAt: at, xpAwarded: 30 } },
        }),
      );
    }, firstLessons[0].id);
    await page.reload();

    await expect(page.getByText('Für heute ist alles wiederholt. Nächste Wiederholung morgen.')).toBeVisible();
    await expect(page.getByText('Keine offenen Fehler – stark.')).toBeVisible();
    await expect(page.getByRole('combobox', { name: 'Kapitel' })).toHaveValue(
      'brooks-trends.introduction',
    );
    await page.getByRole('button', { name: 'Kapitel üben' }).click();
    await expect(page.getByText('Frage 1 / 1')).toBeVisible();
    await page.getByRole('button', { name: 'Runde beenden' }).click();
    await expect(page.getByRole('button', { name: 'Kapitel üben' })).toBeVisible();

    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
      ),
    ).toBe(false);
  });
});

test.describe('F-04 progress dashboard', () => {
  const [lessonOne, lessonTwo, lessonThree] = publishedLessons;
  const questionOf = (lesson: (typeof publishedLessons)[number]) =>
    lesson.steps.find((step) => step.type === 'question')!;

  const openProgress = async (page: import('@playwright/test').Page) => {
    const mobileNavigation = page.getByRole('navigation', { name: 'Mobile Navigation' });
    const navigation = (await mobileNavigation.isVisible())
      ? mobileNavigation
      : page.getByRole('navigation', { name: 'Hauptnavigation' });
    await navigation.getByRole('button', { name: 'Fortschritt' }).click();
    await expect(page.getByRole('heading', { name: 'Fortschritt', level: 1 })).toBeVisible();
    await expect(page).toHaveURL(/#\/progress$/);
  };

  const seed = async (page: import('@playwright/test').Page, record: Record<string, unknown>) => {
    await page.addInitScript((value) => {
      if (sessionStorage.getItem('seeded')) return;
      sessionStorage.setItem('seeded', '1');
      localStorage.setItem('wqt-academy-progress-v1', JSON.stringify(value));
    }, record);
  };

  const noHorizontalOverflow = (page: import('@playwright/test').Page) =>
    page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);

  test.beforeEach(async ({ page }) => {
    await page.clock.setFixedTime(new Date(2026, 9, 5, 10, 0));
  });

  test('shows a clean empty state and starts the first lesson', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));

    await page.goto('/');
    await openProgress(page);
    await expect(page.getByText('Noch keine Lerndaten')).toBeVisible();
    // Gelesene Kapitel der alten Website bleiben sichtbar, zählen aber nicht mit.
    await expect(page.getByText('2 gelesene Kapitel erhalten')).toBeVisible();

    await page.reload();
    await expect(page.getByRole('heading', { name: 'Fortschritt', level: 1 })).toBeVisible();

    await page.getByRole('button', { name: 'Nächste Lektion starten' }).click();
    await expect(page.getByText('1 / 5')).toBeVisible();
    await expect(page).toHaveURL(new RegExp(`#/lesson/${lessonOne.id}\\?step=1$`));

    await page.getByRole('button', { name: 'Lektion schließen' }).click();
    await expect(page.getByRole('heading', { name: 'Fortschritt', level: 1 })).toBeVisible();
    expect(errors).toEqual([]);
  });

  test('shows real metrics and runs the direct actions', async ({ page }) => {
    const completedAt = new Date(2026, 9, 3, 12, 0).toISOString();
    const q1 = questionOf(lessonOne);
    const q2 = questionOf(lessonTwo);
    await seed(page, {
      version: 4,
      completedLessonIds: [lessonOne.id, lessonTwo.id],
      answers: { [q1.id]: q1.correctOptionId, [q2.id]: q2.correctOptionId },
      questionResults: {
        [q1.id]: { selectedOptionId: q1.correctOptionId, attempts: 1, firstAttemptCorrect: true, status: 'correct', wrongOptionIds: [] },
        [q2.id]: { selectedOptionId: q2.correctOptionId, attempts: 2, firstAttemptCorrect: false, status: 'correct', wrongOptionIds: [] },
      },
      lessonResults: {
        [lessonOne.id]: { firstCompletedAt: completedAt, lastCompletedAt: completedAt, xpAwarded: lessonOne.xp },
        [lessonTwo.id]: { firstCompletedAt: completedAt, lastCompletedAt: completedAt, xpAwarded: lessonTwo.xp },
      },
      lessonPositions: { [lessonThree.id]: { stepIndex: 1, updatedAt: completedAt } },
    });

    await page.goto('/#/progress');
    const tile = (label: string) => page.locator('.progress-tile').filter({ hasText: label });
    await expect(tile('Abgeschlossene Lektionen')).toContainText(`2 / ${publishedLessons.length}`);
    await expect(tile('Verdiente XP')).toContainText(String(lessonOne.xp + lessonTwo.xp));
    await expect(tile('Richtig im ersten Versuch')).toContainText('50 %');
    await expect(tile('Richtig im ersten Versuch')).toContainText('1 von 2 Fragen');
    await expect(tile('Heute fällig')).toContainText('2');
    await expect(
      page.getByRole('img', { name: 'An 1 der letzten 30 Tage aktiv, davon an 1 der letzten 7 Tage.' }),
    ).toBeVisible();
    await expect(page.locator('.unit-progress-list li').first()).toContainText('2 von 22 Lektionen');

    // Hauptaktion per Tastatur: begonnene Lektion fortsetzen.
    const resume = page.getByRole('button', { name: 'Weiterlernen' });
    await expect(page.getByText('weiter bei Schritt 2 von')).toBeVisible();
    await resume.focus();
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(new RegExp(`#/lesson/${lessonThree.id}\\?step=2$`));
    await page.getByRole('button', { name: 'Lektion schließen' }).click();

    // Zweite Aktion: fällige Wiederholung direkt starten.
    await page.getByRole('button', { name: 'Fällige Wiederholung starten' }).click();
    await expect(page).toHaveURL(/#\/practice$/);
    await expect(page.getByText('Frage 1 / 2')).toBeVisible();

    const firstReviewQuestion = await page.locator('.practice-card h2').textContent();
    await page.getByRole('radio').first().click();

    await openProgress(page);
    // Eine laufende Runde wird über die Aktion fortgesetzt statt neu gestartet.
    await page.getByRole('button', { name: 'Fällige Wiederholung starten' }).click();
    await expect(page.getByText('Frage 1 / 2')).toBeVisible();
    await expect(page.locator('.practice-card h2')).toHaveText(firstReviewQuestion ?? '');
    await expect(page.locator('.practice-feedback')).toBeVisible();
  });

  test('shows the completed state without overflow at 360 pixels', async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 780 });
    const completedAt = new Date(2026, 9, 5, 9, 0).toISOString();
    await seed(page, {
      version: 4,
      completedLessonIds: publishedLessons.map((lesson) => lesson.id),
      lessonResults: Object.fromEntries(
        publishedLessons.map((lesson) => [
          lesson.id,
          { firstCompletedAt: completedAt, lastCompletedAt: completedAt, xpAwarded: lesson.xp },
        ]),
      ),
    });

    await page.goto('/#/progress');
    await expect(page.getByRole('heading', { name: 'Alles erledigt' })).toBeVisible();
    await expect(page.locator('.progress-tile').filter({ hasText: 'Abgeschlossene Lektionen' })).toContainText('100 %');
    await expect(
      page.getByRole('img', { name: 'An 1 der letzten 30 Tage aktiv, davon an 1 der letzten 7 Tage.' }),
    ).toBeVisible();
    expect(await noHorizontalOverflow(page)).toBe(false);

    const mobileNavigation = page.getByRole('navigation', { name: 'Mobile Navigation' });
    await expect(mobileNavigation.getByRole('button', { name: 'Fortschritt' })).toHaveClass(/active/);
    expect(await noHorizontalOverflow(page)).toBe(false);
  });
});

test.describe('F-05 daily goal, streak and milestones', () => {
  const [lessonOne] = publishedLessons;
  const firstQuestion = lessonOne.steps.find((step) => step.type === 'question')!;
  const correctLabel = firstQuestion.options.find(
    (option) => option.id === firstQuestion.correctOptionId,
  )!.label;

  const seed = async (page: import('@playwright/test').Page, record: Record<string, unknown>) => {
    await page.addInitScript((value) => {
      if (sessionStorage.getItem('seeded')) return;
      sessionStorage.setItem('seeded', '1');
      localStorage.setItem('wqt-academy-progress-v1', JSON.stringify(value));
    }, record);
  };

  const completeFirstLesson = async (page: import('@playwright/test').Page) => {
    await page.getByRole('button', { name: `${lessonOne.title}: Jetzt lernen` }).click();
    for (let step = 0; step < 3; step += 1) {
      await page.getByRole('button', { name: 'Weiter' }).click();
    }
    await page.getByRole('radio', { name: correctLabel }).click();
    await page.getByRole('button', { name: 'Weiter' }).click();
    await page.getByRole('button', { name: 'Lektion abschließen' }).click();
  };

  const toast = (page: import('@playwright/test').Page) =>
    page.getByRole('status').filter({ hasText: 'Tagesziel erreicht' });

  test('reaching the daily goal celebrates once and shows up in week and milestones', async ({ page }) => {
    await page.clock.setFixedTime(new Date(2026, 9, 7, 10, 0));
    await page.goto('/');
    await expect(page.locator('.today-card')).toContainText('0 von 1');

    await completeFirstLesson(page);
    await expect(toast(page)).toBeVisible();
    await expect(toast(page)).toContainText('Meilenstein: Erste Lektion');
    const animation = await page.locator('.celebration').evaluate((node) => getComputedStyle(node).animationName);
    expect(animation).toBe('celebration-in');

    // Reload der Auswertung: keine zweite Meldung, keine doppelten Werte.
    await page.reload();
    await expect(page.getByText('Lektion abgeschlossen')).toBeVisible();
    await expect(page.locator('.celebration')).toHaveCount(0);

    await page.goto('/#/progress');
    const goalPanel = page.locator('.goal-panel');
    await expect(goalPanel).toContainText('Heute: 1 von 1 Lernaktivität – geschafft.');
    await expect(goalPanel).toContainText('Serie: 1 Tag');
    await expect(goalPanel.getByText('2026-10-07: Ziel erreicht')).toBeAttached();
    await expect(page.locator('.milestone-list li.achieved')).toHaveCount(1);
    await expect(page.locator('.milestone-list li.achieved')).toContainText('Erhalten am 07.10.2026');

    // Ein höheres Ziel wählen: kein Jubel, ehrliche Anzeige.
    await page.getByRole('radio', { name: '2 Lernaktivitäten' }).check();
    await expect(goalPanel).toContainText('Heute: 1 von 2 Lernaktivitäten.');
    await expect(page.locator('.celebration')).toHaveCount(0);

    const stored = await page.evaluate(() =>
      JSON.parse(localStorage.getItem('wqt-academy-progress-v1') ?? '{}'),
    );
    expect(stored.dailyGoal).toEqual({ kind: 'activities', target: 2 });
    expect(stored.dailyActivity['2026-10-07']).toEqual({ lessons: 1, reviewSessions: 0, xp: lessonOne.xp });
    expect(Object.keys(stored.milestones)).toEqual(['first-lesson']);
  });

  test('the next days keep, pause and restart the streak only through real activity', async ({ page }) => {
    await page.clock.setFixedTime(new Date(2026, 9, 7, 9, 0));
    await seed(page, {
      version: 5,
      // Ältere Abschlüsse ohne Datum: Fragen sind sofort fällig.
      completedLessonIds: [lessonOne.id],
      activityDays: ['2026-10-05', '2026-10-06'],
    });

    await page.goto('/#/progress');
    const goalPanel = page.locator('.goal-panel');
    await expect(goalPanel).toContainText('Serie: 2 Tage');
    await expect(goalPanel).toContainText('Die Serie zählt bis gestern.');
    await expect(goalPanel.getByText('2026-10-05: Ziel erreicht')).toBeAttached();
    await expect(goalPanel.getByText('2026-10-07: heute noch offen')).toBeAttached();

    // Nur öffnen und neu laden: nichts ändert sich.
    await page.reload();
    await expect(goalPanel).toContainText('Serie: 2 Tage');

    // Zwei Tage ausgelassen: die Serie ruht, die längste bleibt.
    await page.clock.setFixedTime(new Date(2026, 9, 9, 18, 0));
    await page.reload();
    await expect(goalPanel).toContainText('Serie: 0 Tage · Längste: 2');
    await expect(goalPanel.getByText('2026-10-07: kein Lerntag')).toBeAttached();
    await expect(page.getByText(/verlier|verpasst/i)).toHaveCount(0);

    // Eine beendete Wiederholungsrunde ist echte Aktivität.
    await page.getByRole('button', { name: 'Fällige Wiederholung starten' }).click();
    await page.getByRole('radio', { name: correctLabel }).click();
    await page.getByRole('button', { name: 'Auswertung anzeigen' }).click();
    await expect(toast(page)).toBeVisible();
    await expect(toast(page)).toContainText('Fehlerfreie Runde');

    await page.goto('/#/progress');
    await expect(goalPanel).toContainText('Serie: 1 Tag · Längste: 2');
    await expect(goalPanel.getByText('2026-10-09: Ziel erreicht')).toBeAttached();
  });

  test('respects reduced motion for the celebration', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.clock.setFixedTime(new Date(2026, 9, 7, 10, 0));
    await page.goto('/');
    await completeFirstLesson(page);

    await expect(toast(page)).toBeVisible();
    const animations = await page.locator('.celebration').evaluate((node) => ({
      toast: getComputedStyle(node).animationName,
      mark: getComputedStyle(node.querySelector('.celebration-mark')!).animationName,
    }));
    expect(animations).toEqual({ toast: 'none', mark: 'none' });

    await page.getByRole('button', { name: 'Meldung schließen' }).click();
    await expect(page.locator('.celebration')).toHaveCount(0);
  });
});

test.describe('F-06 global search', () => {
  const [lessonOne] = publishedLessons;
  const dialog = (page: import('@playwright/test').Page) => page.getByRole('dialog', { name: 'Suche' });
  const input = (page: import('@playwright/test').Page) =>
    page.getByRole('combobox', { name: 'Lektionen, Schritte und Glossar durchsuchen' });

  test('opens with the keyboard, navigates with arrows and closes with Escape', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Trading Price Action Trends' })).toBeVisible();

    await page.keyboard.press('/');
    await expect(dialog(page)).toBeVisible();
    await expect(input(page)).toBeFocused();
    await expect(page.getByText('Tippe, um Lektionen')).toBeVisible();

    await input(page).fill('kerze');
    const options = dialog(page).getByRole('option');
    await expect(options.first()).toHaveAttribute('aria-selected', 'true');
    await page.keyboard.press('ArrowDown');
    await expect(options.nth(1)).toHaveAttribute('aria-selected', 'true');
    await page.keyboard.press('ArrowUp');
    await expect(options.first()).toHaveAttribute('aria-selected', 'true');

    await page.keyboard.press('Escape');
    await expect(dialog(page)).toBeHidden();

    // In Eingabefeldern bleibt „/“ ein normales Zeichen.
    await page.goto('/#/glossary');
    const glossarySearch = page.getByRole('searchbox', { name: 'Glossar durchsuchen' });
    await glossarySearch.fill('a/b');
    await expect(glossarySearch).toHaveValue('a/b');
    await expect(dialog(page)).toBeHidden();

    // Eine verfügbare Lektion per Enter öffnen.
    await page.locator('body').click({ position: { x: 5, y: 5 } });
    await page.keyboard.press('/');
    await input(page).fill('Der Chart ist das Ergebnis');
    await expect(dialog(page).getByRole('option').first()).toContainText('Verfügbar');
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(new RegExp(`#/lesson/${lessonOne.id}\\?step=1$`));
    await expect(dialog(page)).toBeHidden();
    expect(errors).toEqual([]);
  });

  test('jumps to a step, keeps the deep link on reload and supports browser back', async ({ page }) => {
    await page.addInitScript((id) => {
      if (sessionStorage.getItem('seeded')) return;
      sessionStorage.setItem('seeded', '1');
      localStorage.setItem('wqt-academy-progress-v1', JSON.stringify({ version: 6, completedLessonIds: [id] }));
    }, lessonOne.id);

    await page.goto('/#/chapters');
    await expect(page.getByRole('heading', { name: 'Inhalte zusammenhängend lesen' })).toBeVisible();
    await page.getByRole('button', { name: 'Suchen' }).click();
    await input(page).fill('beschreibung erklarung');
    const stepOption = dialog(page).getByRole('option', { name: /Beschreibung vor Erklärung/ });
    await expect(stepOption).toContainText('Schritt 3');
    await expect(stepOption).toContainText('Abgeschlossen');
    await stepOption.click();

    await expect(page.getByRole('heading', { name: 'Beschreibung vor Erklärung', level: 1 })).toBeVisible();
    await expect(page).toHaveURL(new RegExp(`#/lesson/${lessonOne.id}\\?step=3$`));

    await page.reload();
    await expect(page.getByRole('heading', { name: 'Beschreibung vor Erklärung', level: 1 })).toBeVisible();

    await page.goBack();
    await expect(page.getByRole('heading', { name: 'Inhalte zusammenhängend lesen' })).toBeVisible();
    await page.goForward();
    await expect(page.getByRole('heading', { name: 'Beschreibung vor Erklärung', level: 1 })).toBeVisible();
  });

  test('opens glossary hits as a shareable deep link', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Trading Price Action Trends' })).toBeVisible();
    await page.keyboard.press('/');
    await input(page).fill('Candle');
    await expect(dialog(page).getByRole('option').first()).toContainText('Bar');
    await page.keyboard.press('Enter');

    await expect(page).toHaveURL(/#\/glossary\?term=Bar$/);
    await expect(page.getByRole('searchbox', { name: 'Glossar durchsuchen' })).toHaveValue('Bar');
    await expect(page.getByRole('heading', { name: 'Bar', exact: true })).toBeVisible();

    await page.goBack();
    await expect(page.getByRole('heading', { name: 'Trading Price Action Trends' })).toBeVisible();

    await page.goto('/#/glossary?term=High%202');
    await expect(page.getByRole('searchbox', { name: 'Glossar durchsuchen' })).toHaveValue('High 2');
    await expect(page.getByRole('heading', { name: 'High 2' })).toBeVisible();
  });

  test('shows locked lessons only as preview', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Trading Price Action Trends' })).toBeVisible();
    await page.keyboard.press('/');
    await input(page).fill('Institutionen');
    const locked = dialog(page).getByRole('option', { name: /Institutionen, Programme/ }).first();
    await expect(locked).toHaveAttribute('aria-disabled', 'true');
    await expect(locked).toContainText('Gesperrt');
    await expect(locked).toHaveAttribute('aria-selected', 'true');

    // Enter auf einem gesperrten Treffer öffnet nichts, sondern erklärt.
    await page.keyboard.press('Enter');
    await expect(dialog(page)).toBeVisible();
    await expect(dialog(page).getByRole('status')).toContainText('noch gesperrt');
    await expect(page).not.toHaveURL(/#\/lesson\//);

    // Auch ein direkter Link umgeht die Freischaltung nicht.
    const lockedLesson = publishedLessons[1];
    await page.goto(`/#/lesson/${lockedLesson.id}?step=2`);
    await expect(page).toHaveURL(/#\/path$/);
  });

  test('works from the mobile top bar without overflow', { tag: '@mobile' }, async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 780 });
    await page.goto('/');
    await page.getByRole('button', { name: 'Suchen' }).click();
    await expect(input(page)).toBeFocused();
    await input(page).fill('doji');
    await expect(dialog(page).getByRole('option').first()).toBeVisible();
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth),
    ).toBe(false);
    await page.getByRole('button', { name: 'Suche schließen' }).click();
    await expect(dialog(page)).toBeHidden();
    await expect(page.getByRole('button', { name: 'Suchen' })).toBeFocused();
  });
});

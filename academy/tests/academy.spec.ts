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
    expect(stored.version).toBe(2);
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
    expect(stored.academy.version).toBe(2);
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

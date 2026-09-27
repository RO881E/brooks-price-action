import { expect, test } from '@playwright/test';
import { brooksTrendsCourse } from '../src/content/course';

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
  test('opens every introduction lesson and renders every learning step', { tag: '@desktop' }, async ({ page }) => {

    const introduction = brooksTrendsCourse.units[0];
    const completedLessonIds = introduction.lessons.map((lesson) => lesson.id);
    const answers = Object.fromEntries(
      introduction.lessons.flatMap((lesson) =>
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

    for (const lesson of introduction.lessons) {
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
  await page.goto('/');
  await expect(page.getByRole('navigation', { name: 'Mobile Navigation' })).toBeVisible();
  await page.getByRole('button', { name: 'Glossar' }).last().click();
  await expect(page.getByRole('heading', { name: 'Price-Action-Glossar' })).toBeVisible();
  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(hasHorizontalOverflow).toBe(false);
});

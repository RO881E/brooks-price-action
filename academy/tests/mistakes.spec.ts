import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { barCases } from '../src/content/barCases';
import { brooksTrendsCourse } from '../src/content/course';
import type { Lesson } from '../src/content/types';
import { ACADEMY_PROGRESS_VERSION } from '../src/features/progress';

/*
 * F-16: „Was ich noch verwechsle“ im Bereich Üben. Desktop und Mobil.
 */

type QuestionStep = Extract<Lesson['steps'][number], { type: 'question' }>;

const barCase = barCases.find((item) => item.id === 'bar-case.chapter-01.range-high-test')!;
const [highTest, backInside] = barCase.decisions;
const unitIndex = brooksTrendsCourse.units.findIndex((unit) => unit.id === barCase.unitId);
const completed = brooksTrendsCourse.units
  .slice(0, unitIndex + 1)
  .flatMap((unit) => unit.lessons)
  .filter((lesson) => lesson.status === 'published');
const firstLesson = completed[0];
const question = firstLesson.steps.find((step): step is QuestionStep => step.type === 'question')!;
const wrongOption = question.options.find((option) => option.id !== question.correctOptionId)!;
const correctOption = question.options.find((option) => option.id === question.correctOptionId)!;

/** Beispiel A (Frage) und B (Trainerfall, zuletzt fehlerhaft) wie in den Unit-Tests. */
function exampleRecord(completedIds = completed.map((lesson) => lesson.id)) {
  return {
    version: 12,
    completedLessonIds: completedIds,
    answers: {},
    questionResults: {
      [question.id]: {
        selectedOptionId: question.correctOptionId,
        attempts: 2,
        firstAttemptCorrect: false,
        status: 'correct',
        wrongOptionIds: [wrongOption.id],
      },
    },
    reviewCards: {
      [question.id]: { stage: 0, dueDay: '2026-09-30', lastReviewedDay: '2026-09-29', lastResult: 'wrong', reviews: 2, lapses: 1 },
    },
    caseRuns: {
      [barCase.id]: [
        {
          sessionId: 'run-1',
          completedAt: '2026-09-28T10:00:00.000Z',
          best: 0,
          defensible: 1,
          mistake: 1,
          missedCues: 3,
          answers: {
            [highTest.id]: { decision: 'long', cueIds: [highTest.cues.find((cue) => !cue.relevant)!.id] },
            [backInside.id]: { decision: 'short', cueIds: backInside.cues.filter((cue) => cue.relevant).map((cue) => cue.id) },
          },
        },
      ],
      'bar-case.geloescht': [
        { sessionId: 'run-x', completedAt: '2026-09-27T10:00:00.000Z', best: 1, defensible: 0, mistake: 0, missedCues: 0 },
      ],
    },
  };
}

async function seed(page: Page, record: Record<string, unknown>) {
  await page.addInitScript((value) => {
    if (sessionStorage.getItem('seeded')) return;
    sessionStorage.setItem('seeded', '1');
    localStorage.setItem('wqt-academy-progress-v1', JSON.stringify(value));
  }, record);
}

const overview = (page: Page) => page.getByRole('region', { name: 'Was ich noch verwechsle' });

test.describe('F-16 Was ich noch verwechsle', () => {
  test('neuer Stand: verständlicher Leerzustand', async ({ page }) => {
    await page.goto('/#/practice');
    await expect(overview(page).getByText('Noch keine Fehler erfasst')).toBeVisible();
  });

  test('Frage: Fakten, Lernlink mit Zurück, „Erneut üben“ bis „später richtig“', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await seed(page, exampleRecord());
    await page.goto('/#/practice');
    const card = overview(page).getByRole('article', { name: question.title });
    await expect(card.getByText('Zuletzt falsch', { exact: true })).toBeVisible();
    await expect(card.getByText('In der Lektion: erster Versuch falsch.')).toBeVisible();
    await expect(card.getByText('In der Wiederholung: 1 von 2 Antworten falsch.')).toBeVisible();
    await expect(card.getByText(`Zuletzt falsch gewählt: „${wrongOption.label}“.`)).toBeVisible();
    await expect(card.getByText('Erfasste falsche Antworten: 2.')).toBeVisible();
    // Gelöschter Fall wird benannt, nicht gedeutet.
    await expect(overview(page).getByText('Eine Runde gehört zu einem Fall, der nicht mehr angeboten wird.')).toBeVisible();

    // Lernlink führt in die Lektion, Zurück wieder in die Übersicht.
    await card.getByRole('button', { name: `Lektion: ${firstLesson.title}` }).click();
    await expect(page).toHaveURL(new RegExp(`#/lesson/${firstLesson.id}`));
    await page.goBack();
    await expect(overview(page)).toBeVisible();

    // Erneut üben: Wiederholungsrunde mit genau dieser Frage.
    await overview(page).getByRole('button', { name: `Erneut üben: ${question.title}` }).click();
    await expect(page.getByText(`Frage 1 / 1 · ${firstLesson.title}`)).toBeVisible();
    await page.getByRole('radio', { name: new RegExp(correctOption.label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')) }).click();
    await page.getByRole('button', { name: 'Auswertung anzeigen' }).click();
    await page.getByRole('button', { name: 'Zur Übersicht' }).click();

    // Jetzt „später richtig“: nicht mehr unter „Noch offen“, aber unter „Alle“.
    await expect(overview(page).getByRole('article', { name: question.title })).toHaveCount(0);
    await overview(page).getByRole('radio', { name: /^Alle/ }).check();
    const again = overview(page).getByRole('article', { name: question.title });
    await expect(again.getByText('Später richtig')).toBeVisible();
    const stored = await page.evaluate(() => JSON.parse(localStorage.getItem('wqt-academy-progress-v1') ?? '{}'));
    expect(stored.version).toBe(ACADEMY_PROGRESS_VERSION);
    expect(stored.reviewCards[question.id].lastResult).toBe('correct');
    expect(errors).toEqual([]);
  });

  test('Trainerfall: übersehene Hinweise mit Lernlink und „Erneut üben“ öffnet den Fall', async ({ page }) => {
    await seed(page, exampleRecord());
    await page.goto('/#/practice');
    const card = overview(page).getByRole('article', { name: `${barCase.title} · Entscheidung 1` });
    await expect(card.getByText('Zuletzt mit Fehler: Long – Vertretbar.')).toBeVisible();
    await expect(card.getByText('In 1 von 1 Runde mit Fehler (einmal).')).toBeVisible();
    for (const cue of highTest.cues.filter((item) => item.relevant)) {
      await expect(card.getByText(cue.label)).toBeVisible();
    }
    const cueLesson = completed.find((lesson) => lesson.id === highTest.cues.find((cue) => cue.relevant && cue.lessonId)!.lessonId)!;
    await expect(card.getByRole('button', { name: `Lektion: ${cueLesson.title}` })).toBeVisible();
    // Entscheidung 2 war fehlerfrei und erscheint nicht.
    await expect(overview(page).getByRole('article', { name: `${barCase.title} · Entscheidung 2` })).toHaveCount(0);

    await card.getByRole('button', { name: `Erneut üben: ${barCase.title}` }).click();
    await expect(page).toHaveURL(new RegExp(`#/train/${barCase.id}$`));
    await expect(page.getByRole('heading', { name: barCase.title, level: 1 })).toBeVisible();
  });

  test('gesperrter Fall: kein Übungs- oder Lektionslink, kein Deep Link in gesperrte Inhalte', async ({ page }) => {
    // Nur die erste Lektion abgeschlossen: Fall und Hinweis-Lektionen sind gesperrt.
    await seed(page, exampleRecord([firstLesson.id]));
    await page.goto('/#/practice');
    const card = overview(page).getByRole('article', { name: `${barCase.title} · Entscheidung 1` });
    await expect(card.getByText('Dieser Fall ist derzeit gesperrt.')).toBeVisible();
    await expect(card.getByRole('button')).toHaveCount(0);
  });

  test('Tastatur, 360 px und axe', async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 740 });
    await seed(page, exampleRecord());
    await page.goto('/#/practice');
    const open = overview(page).getByRole('radio', { name: /^Noch offen/ });
    await open.focus();
    await page.keyboard.press('ArrowRight');
    await expect(overview(page).getByRole('radio', { name: /^Alle/ })).toBeChecked();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(0);
    const axe = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(axe.violations.map((violation) => violation.id)).toEqual([]);
  });
});

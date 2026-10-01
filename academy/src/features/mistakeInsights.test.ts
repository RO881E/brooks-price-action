import { describe, expect, it } from 'vitest';
import { toCourseOutline } from '../../build/courseOutline';
import { barCases } from '../content/barCases';
import { priceActionTrendsCourse } from '../content/course';
import type { QuestionOutline } from '../content/types';
import {
  accessibleLesson,
  caseMistakes,
  filterMistakes,
  mistakeOverview,
  questionMistakes,
  sortMistakes,
  type CaseMistake,
  type QuestionMistake,
} from './mistakeInsights';
import { completeLesson, createEmptyProgress, migrateProgress, type AcademyProgress, type CaseRun } from './progress';

const course = toCourseOutline(priceActionTrendsCourse);
const lessons = course.units.flatMap((unit) => unit.lessons).filter((lesson) => lesson.status === 'published');
const [firstLesson, secondLesson] = lessons;
const questionOf = (index: number) =>
  lessons[index].steps.find((step): step is QuestionOutline => step.type === 'question')!;
const q1 = questionOf(0);
const q2 = questionOf(1);
const barCase = barCases.find((item) => item.id === 'bar-case.chapter-01.range-high-test')!;
const [highTest, backInside] = barCase.decisions;

function completedThrough(count: number): AcademyProgress {
  return lessons.slice(0, count).reduce((progress, lesson) => completeLesson(progress, lesson.id, 0, '2026-09-20T08:00:00.000Z'), createEmptyProgress());
}

/** Alle Lektionen bis einschließlich Kapitel 1 – der C-01-Fall ist dann frei. */
function caseUnlocked(): AcademyProgress {
  const unitIndex = course.units.findIndex((unit) => unit.id === barCase.unitId);
  const ids = course.units.slice(0, unitIndex + 1).flatMap((unit) => unit.lessons).filter((lesson) => lesson.status === 'published');
  return completedThrough(lessons.indexOf(ids.at(-1)!) + 1);
}

function run(sessionId: string, completedAt: string, answers?: CaseRun['answers']): CaseRun {
  return { sessionId, completedAt, best: 0, defensible: 0, mistake: 0, missedCues: 0, ...(answers ? { answers } : {}) };
}

/**
 * Beispielzustand A (Frage): In der Lektion im ersten Versuch falsch, dann
 * richtig; in der Wiederholung zweimal geübt, zuletzt wieder falsch.
 */
function exampleA(): AcademyProgress {
  const progress = completedThrough(1);
  const wrong = q1.correctOptionId === 'a' ? 'b' : 'a';
  return {
    ...progress,
    questionResults: {
      [q1.id]: { selectedOptionId: q1.correctOptionId, attempts: 2, firstAttemptCorrect: false, status: 'correct', wrongOptionIds: [wrong] },
    },
    reviewCards: {
      [q1.id]: { stage: 0, dueDay: '2026-09-30', lastReviewedDay: '2026-09-29', lastResult: 'wrong', reviews: 2, lapses: 1 },
    },
  };
}

/**
 * Beispielzustand B (Trainerfall): Runde 1 wählt am Hochtest „Long“ und
 * markiert nur den irreführenden Hinweis; Runde 2 wählt „Abwarten“ mit beiden
 * relevanten Hinweisen.
 */
function exampleB(): AcademyProgress {
  const relevant = highTest.cues.filter((cue) => cue.relevant).map((cue) => cue.id);
  const distractor = highTest.cues.find((cue) => !cue.relevant)!.id;
  const backRelevant = backInside.cues.filter((cue) => cue.relevant).map((cue) => cue.id);
  return {
    ...caseUnlocked(),
    caseRuns: {
      [barCase.id]: [
        run('run-1', '2026-09-28T10:00:00.000Z', {
          [highTest.id]: { decision: 'long', cueIds: [distractor] },
          [backInside.id]: { decision: 'short', cueIds: backRelevant },
        }),
        run('run-2', '2026-09-29T10:00:00.000Z', {
          [highTest.id]: { decision: 'wait', cueIds: relevant },
          [backInside.id]: { decision: 'short', cueIds: backRelevant },
        }),
      ],
    },
  };
}

describe('Was ich noch verwechsle: Fragen', () => {
  it('neuer oder fehlerfreier Stand: keine Einträge', () => {
    expect(mistakeOverview(course, createEmptyProgress())).toMatchObject({ items: [], open: 0, laterCorrect: 0 });
    const clean = {
      ...completedThrough(2),
      questionResults: {
        [q1.id]: { selectedOptionId: q1.correctOptionId, attempts: 1, firstAttemptCorrect: true, status: 'correct' as const, wrongOptionIds: [] },
      },
    };
    expect(mistakeOverview(course, clean).items).toEqual([]);
  });

  it('Beispiel A: Fehler in Lektion und Wiederholung, zuletzt falsch → offen, Häufigkeit 2', () => {
    const [item] = questionMistakes(course, exampleA()).items;
    expect(item).toMatchObject({
      kind: 'question',
      firstAttempt: 'wrong',
      reviewWrong: 1,
      reviews: 2,
      count: 2,
      state: 'open',
      lessonAccessible: true,
    });
    expect(item.lesson.id).toBe(firstLesson.id);
  });

  it('Fehler mit anschließend richtigem Versuch → „später richtig“', () => {
    const progress = exampleA();
    progress.reviewCards[q1.id] = { ...progress.reviewCards[q1.id], lastResult: 'correct' };
    expect(questionMistakes(course, progress).items[0].state).toBe('later-correct');
    // Ohne Wiederholung zählt der Lektionsstand.
    const lessonOnly = { ...progress, reviewCards: {} };
    expect(questionMistakes(course, lessonOnly).items[0]).toMatchObject({ state: 'later-correct', count: 1 });
  });

  it('aufgedeckte Lösung ist ein offener Fehler', () => {
    const progress = {
      ...completedThrough(1),
      questionResults: {
        [q1.id]: { selectedOptionId: null, attempts: 1, firstAttemptCorrect: false, status: 'revealed' as const, wrongOptionIds: ['x'] },
      },
    };
    expect(questionMistakes(course, progress).items[0]).toMatchObject({ revealed: true, state: 'open' });
  });

  it('Altstand: Erstversuch unbekannt zählt nicht als Fehler, wird aber benannt', () => {
    // Wie ein importierter v1-Stand: nur `answers`, keine Versuchsdaten.
    const legacy = migrateProgress({ version: 1, completedLessonIds: [firstLesson.id, secondLesson.id], answers: { [q1.id]: 'x', [q2.id]: 'y' } })!;
    const overview = mistakeOverview(course, legacy);
    expect(overview.items).toEqual([]);
    expect(overview.unknownFirstAttempts).toBe(2);
    const partial = {
      ...completedThrough(1),
      questionResults: {
        [q1.id]: { selectedOptionId: 'x', attempts: 1, firstAttemptCorrect: null, status: 'correct' as const, wrongOptionIds: [] },
      },
    };
    expect(questionMistakes(course, partial)).toEqual({ items: [], unknownFirstAttempts: 1 });
  });

  it('Fragen aus noch nicht abgeschlossenen Lektionen erscheinen nie', () => {
    const progress = {
      ...createEmptyProgress(),
      questionResults: {
        [q2.id]: { selectedOptionId: null, attempts: 1, firstAttemptCorrect: false, status: 'open' as const, wrongOptionIds: ['x'] },
      },
    };
    expect(questionMistakes(course, progress).items).toEqual([]);
  });
});

describe('Was ich noch verwechsle: Trainerfälle', () => {
  it('Beispiel B: Fehler in Runde 1, in Runde 2 behoben → „später richtig“ mit zuletzt übersehenen Hinweisen', () => {
    const { items } = caseMistakes(course, exampleB());
    expect(items).toHaveLength(1);
    const [item] = items;
    expect(item).toMatchObject({ kind: 'case', answeredRuns: 2, count: 1, state: 'later-correct', caseAvailable: true });
    expect(item.decision.id).toBe(highTest.id);
    expect(item.last.answer.decision).toBe('long');
    expect(item.last.missed.map((cue) => cue.id)).toEqual(highTest.cues.filter((cue) => cue.relevant).map((cue) => cue.id));
  });

  it('bleibt offen, solange die letzte erfasste Runde fehlerhaft ist', () => {
    const progress = exampleB();
    progress.caseRuns[barCase.id] = [...progress.caseRuns[barCase.id]].reverse().map((item, index) => ({
      ...item,
      completedAt: `2026-09-2${8 + index}T10:00:00.000Z`,
    }));
    expect(caseMistakes(course, progress).items[0].state).toBe('open');
  });

  it('Runden ohne Einzelantworten (v11) und gelöschte Fälle werden gezählt, nicht gedeutet', () => {
    const progress = {
      ...caseUnlocked(),
      caseRuns: {
        [barCase.id]: [run('alt', '2026-09-27T10:00:00.000Z')],
        'bar-case.gibt-es-nicht': [run('weg-1', '2026-09-27T10:00:00.000Z'), run('weg-2', '2026-09-28T10:00:00.000Z')],
      },
    };
    const overview = mistakeOverview(course, progress);
    expect(overview.items).toEqual([]);
    expect(overview.runsWithoutAnswers).toBe(1);
    expect(overview.runsOfUnknownCases).toBe(2);
  });

  it('unbekannte Entscheidungspunkte oder ungültige Antworten werden übersprungen', () => {
    const progress = {
      ...caseUnlocked(),
      caseRuns: { [barCase.id]: [run('x', '2026-09-27T10:00:00.000Z', { 'gibt-es-nicht': { decision: 'long', cueIds: [] } })] },
    };
    expect(caseMistakes(course, progress).items).toEqual([]);
  });

  it('gesperrter Fall: Eintrag bleibt sichtbar, aber ohne Übungslink', () => {
    const progress = { ...exampleB(), completedLessonIds: [] };
    expect(caseMistakes(course, progress).items[0].caseAvailable).toBe(false);
  });
});

describe('Was ich noch verwechsle: Sortierung, Filter, Links', () => {
  it('offen vor später richtig, häufiger vor seltener, Fragen vor Fällen, Buchreihenfolge', () => {
    const base = { state: 'open', count: 1, order: 0 } as const;
    const items = [
      { ...base, kind: 'case', key: 'c', state: 'later-correct', count: 5 } as unknown as CaseMistake,
      { ...base, kind: 'question', key: 'q2', order: 2 } as unknown as QuestionMistake,
      { ...base, kind: 'case', key: 'c2', count: 3 } as unknown as CaseMistake,
      { ...base, kind: 'question', key: 'q1', order: 1 } as unknown as QuestionMistake,
    ];
    expect(sortMistakes(items).map((item) => item.key)).toEqual(['c2', 'q1', 'q2', 'c']);
    expect(filterMistakes(items, 'open').map((item) => item.key)).toEqual(['q2', 'c2', 'q1']);
    expect(filterMistakes(items, 'all')).toHaveLength(4);
  });

  it('Beispiele A und B zusammen: offene Frage vor behobenem Fall', () => {
    const progress = { ...exampleB(), questionResults: exampleA().questionResults, reviewCards: exampleA().reviewCards };
    const overview = mistakeOverview(course, progress);
    expect(overview.items.map((item) => item.kind)).toEqual(['question', 'case']);
    expect(overview).toMatchObject({ open: 1, laterCorrect: 1 });
  });

  it('Lernlinks nur zu zugänglichen Lektionen', () => {
    const cueLesson = highTest.cues.find((cue) => cue.lessonId)!.lessonId!;
    expect(accessibleLesson(course, createEmptyProgress(), cueLesson)).toBeUndefined();
    expect(accessibleLesson(course, caseUnlocked(), cueLesson)?.id).toBe(cueLesson);
    expect(accessibleLesson(course, caseUnlocked(), 'gibt-es-nicht')).toBeUndefined();
    expect(accessibleLesson(course, caseUnlocked(), undefined)).toBeUndefined();
  });
});

describe('Datenformat v12: Einzelantworten je Trainerrunde', () => {
  it('migriert v11-Runden ohne Antworten unverändert und verwirft ungültige Antworten', () => {
    const migrated = migrateProgress({
      version: 11,
      caseRuns: {
        [barCase.id]: [
          run('alt', '2026-09-27T10:00:00.000Z'),
          { ...run('neu', '2026-09-28T10:00:00.000Z'), answers: { [highTest.id]: { decision: 'wait', cueIds: ['overlap'] } } },
          { ...run('kaputt', '2026-09-29T10:00:00.000Z'), answers: { [highTest.id]: { decision: 'kaufen', cueIds: [] } } },
        ],
      },
    })!;
    const runs = migrated.caseRuns[barCase.id];
    expect(runs.map((item) => item.sessionId)).toEqual(['alt', 'neu', 'kaputt']);
    expect(runs[0].answers).toBeUndefined();
    expect(runs[1].answers).toEqual({ [highTest.id]: { decision: 'wait', cueIds: ['overlap'] } });
    expect(runs[2].answers).toBeUndefined();
  });
});

describe('Erneut üben: Runde aus ausgewählten Fragen', () => {
  it('nimmt nur wiederholbare Fragen, ohne Doppelungen', async () => {
    const { buildQuestionSession, reviewPool } = await import('./reviewSession');
    const items = reviewPool(course, completedThrough(1));
    expect(buildQuestionSession([q1.id, q1.id, q2.id, 'x'], items, '2026-09-29')).toMatchObject({
      mode: 'mistakes',
      questionIds: [q1.id],
      index: 0,
    });
    expect(buildQuestionSession([q2.id], items, '2026-09-29')).toBeNull();
  });
});

describe('Reihenfolge innerhalb eines Falls', () => {
  it('Entscheidungen erscheinen in Fallreihenfolge', () => {
    const progress = {
      ...caseUnlocked(),
      caseRuns: {
        [barCase.id]: [
          run('r', '2026-09-28T10:00:00.000Z', {
            [highTest.id]: { decision: 'long', cueIds: [] },
            [backInside.id]: { decision: 'long', cueIds: [] },
          }),
        ],
      },
    };
    expect(mistakeOverview(course, progress).items.map((item) => (item.kind === 'case' ? item.decision.id : ''))).toEqual([
      highTest.id,
      backInside.id,
    ]);
  });
});

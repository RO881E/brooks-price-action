import { describe, expect, it } from 'vitest';
import type { Course, CourseUnit, Lesson } from '../content/types';
import { revealSolution, submitAnswer, type QuestionStep } from './lessonResults';
import { completeLesson, createEmptyProgress, type AcademyProgress } from './progress';
import { seededRandom } from './reviewScheduler';
import {
  advanceSession,
  answerReview,
  buildSession,
  currentSessionItem,
  dueDayFor,
  dueItems,
  endSession,
  hasOpenMistake,
  isSessionFinished,
  mistakeItems,
  nextDueDay,
  reviewOverview,
  reviewPool,
  sanitizeSession,
  sessionSummary,
  startSession,
} from './reviewSession';

function question(id: string): QuestionStep {
  return {
    id,
    type: 'question',
    title: `Titel ${id}`,
    prompt: 'Frage?',
    options: [
      { id: 'a', label: 'A', explanation: 'Weil A.' },
      { id: 'b', label: 'B', explanation: 'Weil B.' },
    ],
    correctOptionId: 'a',
  };
}

function lesson(id: string, questionIds: string[], status: Lesson['status'] = 'published'): Lesson {
  return {
    id,
    title: `Lektion ${id}`,
    summary: '',
    durationMinutes: 3,
    xp: 10,
    sourceUnit: 'Test',
    status,
    steps: [
      { id: `${id}-e`, type: 'explanation', title: 'E', paragraphs: ['x'] },
      ...questionIds.map(question),
    ],
  };
}

function unit(id: string, lessons: Lesson[]): CourseUnit {
  return {
    id,
    order: 1,
    kind: 'chapter',
    label: id,
    title: id,
    description: '',
    estimatedLessonCount: lessons.length,
    lessons,
  };
}

const l1 = lesson('l1', ['q1', 'q2']);
const l2 = lesson('l2', ['q3']);
const l3 = lesson('l3', ['q4', 'q5']);
const planned = lesson('l4', ['q6'], 'planned');
const course: Course = {
  id: 'c',
  eyebrow: '',
  title: '',
  subtitle: '',
  sourceOrderNotice: '',
  units: [unit('u1', [l1, l2]), unit('u2', [l3, planned])],
};

const TODAY = '2026-09-28';
const q = (id: string) =>
  course.units
    .flatMap((u) => u.lessons)
    .flatMap((l) => l.steps)
    .find((step) => step.id === id) as QuestionStep;

/** Abgeschlossene Lektionen mit festem Abschlussdatum (lokale Mittagszeit). */
function completed(lessonIds: string[], day = '2026-09-20'): AcademyProgress {
  const [year, month, date] = day.split('-').map(Number);
  const at = new Date(year, month - 1, date, 12).toISOString();
  return lessonIds.reduce(
    (progress, id) => completeLesson(progress, id, 10, at),
    createEmptyProgress(),
  );
}

describe('review pool', () => {
  it('uses only questions of completed, published lessons in book order', () => {
    const progress = { ...completed(['l1', 'l3']), completedLessonIds: ['l1', 'l3', 'l4'] };
    expect(reviewPool(course, progress).map((item) => item.question.id)).toEqual([
      'q1',
      'q2',
      'q4',
      'q5',
    ]);
    expect(reviewPool(course, createEmptyProgress())).toEqual([]);
  });
});

describe('due dates', () => {
  it('makes new questions due the day after the lesson was completed', () => {
    const progress = completed(['l1'], '2026-09-28');
    const [item] = reviewPool(course, progress);
    expect(dueDayFor(item, progress, TODAY)).toBe('2026-09-29');
    expect(dueItems(reviewPool(course, progress), progress, TODAY)).toEqual([]);
    expect(dueItems(reviewPool(course, progress), progress, '2026-09-29')).toHaveLength(2);
  });

  it('makes questions of lessons completed before tracking due immediately', () => {
    const progress = { ...createEmptyProgress(), completedLessonIds: ['l2'] };
    const [item] = reviewPool(course, progress);
    expect(dueDayFor(item, progress, TODAY)).toBe(TODAY);
  });

  it('orders overdue questions first, then by book order', () => {
    const progress: AcademyProgress = {
      ...completed(['l1', 'l2', 'l3']),
      reviewCards: {
        q4: {
          stage: 1,
          dueDay: '2026-09-10',
          lastReviewedDay: '2026-09-07',
          lastResult: 'correct',
          reviews: 2,
          lapses: 0,
        },
        q2: {
          stage: 2,
          dueDay: '2026-10-10',
          lastReviewedDay: '2026-09-26',
          lastResult: 'correct',
          reviews: 3,
          lapses: 0,
        },
      },
    };
    const items = reviewPool(course, progress);
    expect(dueItems(items, progress, TODAY).map((item) => item.question.id)).toEqual([
      'q4',
      'q1',
      'q3',
      'q5',
    ]);
    expect(nextDueDay(items, progress, TODAY)).toBe('2026-10-10');
  });
});

describe('mistakes', () => {
  it('picks up first-attempt errors and revealed solutions from lessons', () => {
    let progress = completed(['l1', 'l2']);
    progress = submitAnswer(progress, q('q1'), 'b');
    progress = revealSolution(progress, q('q1'));
    progress = submitAnswer(progress, q('q2'), 'a');
    progress = { ...progress, answers: { ...progress.answers, q3: 'b' } };

    const items = reviewPool(course, progress);
    expect(mistakeItems(items, progress).map((item) => item.question.id)).toEqual(['q1', 'q3']);
  });

  it('follows the latest review result once a question has been reviewed', () => {
    let progress = completed(['l1']);
    progress = submitAnswer(progress, q('q1'), 'b');
    const [item] = reviewPool(course, progress);
    expect(hasOpenMistake(item, progress)).toBe(true);

    progress = startSession(progress, buildSession('mistakes', reviewPool(course, progress), progress, {
      today: TODAY,
      random: seededRandom(1),
    }));
    progress = answerReview(progress, q('q1'), 'a', TODAY);
    expect(hasOpenMistake(item, progress)).toBe(false);
  });
});

describe('building sessions', () => {
  const progress = completed(['l1', 'l2', 'l3']);
  const items = reviewPool(course, progress);
  const options = { today: TODAY, random: seededRandom(3) };

  it('builds each mode and respects the size limit', () => {
    expect(buildSession('due', items, progress, options)?.questionIds).toEqual([
      'q1',
      'q2',
      'q3',
      'q4',
      'q5',
    ]);
    expect(buildSession('due', items, progress, { ...options, size: 2 })?.questionIds).toEqual([
      'q1',
      'q2',
    ]);
    expect(buildSession('unit', items, progress, { ...options, unitId: 'u2' })).toMatchObject({
      mode: 'unit',
      unitId: 'u2',
      questionIds: ['q4', 'q5'],
      index: 0,
      startedDay: TODAY,
    });
  });

  it('shuffles the mixed mode deterministically', () => {
    const first = buildSession('mixed', items, progress, { today: TODAY, random: seededRandom(9) });
    const second = buildSession('mixed', items, progress, { today: TODAY, random: seededRandom(9) });
    expect(first?.questionIds).toEqual(second?.questionIds);
    expect([...(first?.questionIds ?? [])].sort()).toEqual(['q1', 'q2', 'q3', 'q4', 'q5']);
  });

  it('returns null for empty modes', () => {
    expect(buildSession('mistakes', items, progress, options)).toBeNull();
    expect(buildSession('unit', items, progress, options)).toBeNull();
    expect(buildSession('unit', items, progress, { ...options, unitId: 'nope' })).toBeNull();
    expect(buildSession('due', [], createEmptyProgress(), options)).toBeNull();
    expect(startSession(progress, null)).toBe(progress);
  });
});

describe('running a session', () => {
  const start = () => {
    const progress = completed(['l1']);
    const items = reviewPool(course, progress);
    return {
      items,
      progress: startSession(
        progress,
        buildSession('due', items, progress, { today: TODAY, random: seededRandom(1) }),
      ),
    };
  };

  it('schedules each answer once and only for the current question', () => {
    let { progress, items } = start();
    expect(currentSessionItem(progress.reviewSession!, items)?.question.id).toBe('q1');

    // Nicht die aktuelle Frage oder ungültige Option: keine Änderung.
    expect(answerReview(progress, q('q2'), 'a', TODAY)).toBe(progress);
    expect(answerReview(progress, q('q1'), 'zzz', TODAY)).toBe(progress);
    // Weiter erst nach einer Antwort.
    expect(advanceSession(progress)).toBe(progress);

    progress = answerReview(progress, q('q1'), 'b', TODAY);
    expect(progress.reviewCards.q1).toMatchObject({ stage: 0, dueDay: '2026-09-29', lapses: 1 });

    // Erneutes Absenden (z. B. doppelter Klick oder Reload) zählt nicht doppelt.
    expect(answerReview(progress, q('q1'), 'a', TODAY)).toBe(progress);

    progress = advanceSession(progress);
    progress = answerReview(progress, q('q2'), 'a', TODAY);
    progress = advanceSession(progress);
    expect(isSessionFinished(progress.reviewSession!)).toBe(true);
    expect(advanceSession(progress)).toBe(progress);

    const summary = sessionSummary(progress.reviewSession!, items);
    expect(summary).toMatchObject({ total: 2, answered: 2, correct: 1 });
    expect(summary.entries.map((entry) => [entry.item.question.id, entry.correct])).toEqual([
      ['q1', false],
      ['q2', true],
    ]);

    expect(endSession(progress).reviewSession).toBeNull();
  });

  it('continues a stored session after reload with the same state', () => {
    let { progress, items } = start();
    progress = answerReview(progress, q('q1'), 'a', TODAY);

    const reloaded = JSON.parse(JSON.stringify(progress)) as AcademyProgress;
    expect(sanitizeSession(reloaded, items)).toBe(reloaded);
    expect(reloaded.reviewSession).toEqual(progress.reviewSession);
    expect(answerReview(reloaded, q('q1'), 'b', TODAY)).toBe(reloaded);
  });

  it('drops questions that are no longer available and discards empty sessions', () => {
    let { progress } = start();
    progress = answerReview(progress, q('q1'), 'a', TODAY);
    progress = advanceSession(progress);

    const onlyQ2 = reviewPool(course, progress).filter((item) => item.question.id === 'q2');
    expect(sanitizeSession(progress, onlyQ2).reviewSession).toMatchObject({
      questionIds: ['q2'],
      index: 0,
      answers: {},
    });
    expect(sanitizeSession(progress, []).reviewSession).toBeNull();
  });
});

describe('overview', () => {
  it('summarises counts per mode and unit', () => {
    let progress = completed(['l1', 'l3'], '2026-09-28');
    progress = submitAnswer(progress, q('q4'), 'b');
    const items = reviewPool(course, progress);

    expect(reviewOverview(course, items, progress, TODAY)).toMatchObject({
      total: 4,
      due: 0,
      mistakes: 1,
      nextDueDay: '2026-09-29',
    });
    expect(
      reviewOverview(course, items, progress, TODAY).units.map(({ unit: u, count }) => [u.id, count]),
    ).toEqual([
      ['u1', 2],
      ['u2', 2],
    ]);
  });
});

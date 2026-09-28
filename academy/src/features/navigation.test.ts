import { describe, expect, it } from 'vitest';
import type { Course, Lesson, LessonStep } from '../content/types';
import {
  clampStepIndex,
  DEFAULT_ROUTE,
  formatRoute,
  maxReachableStepIndex,
  parseRoute,
  resolveRoute,
  resumeTarget,
  startStepIndex,
  type AppRoute,
} from './navigation';
import { retryQuestion, revealSolution, submitAnswer } from './lessonResults';
import { completeLesson, createEmptyProgress, recordAnswer, recordLessonStep } from './progress';

function explanation(id: string): LessonStep {
  return { id, type: 'explanation', title: id, paragraphs: ['Text'] };
}

function question(id: string): LessonStep {
  return {
    id,
    type: 'question',
    title: id,
    prompt: 'Frage?',
    options: [
      { id: 'a', label: 'A', explanation: 'Weil A.' },
      { id: 'b', label: 'B', explanation: 'Weil B.' },
    ],
    correctOptionId: 'a',
  };
}

function lesson(id: string, steps: LessonStep[], status: Lesson['status'] = 'published'): Lesson {
  return {
    id,
    title: id,
    summary: id,
    durationMinutes: 3,
    xp: 10,
    sourceUnit: 'Test',
    status,
    steps,
  };
}

// Schritt 1–2 Erklärung, Schritt 3 Frage, Schritt 4–5 Erklärung.
const first = lesson('unit.lesson-01', [
  explanation('s1'),
  explanation('s2'),
  question('q1'),
  explanation('s4'),
  explanation('s5'),
]);
const second = lesson('unit.lesson-02', [explanation('t1'), explanation('t2')]);
const planned = lesson('unit.lesson-03', [explanation('p1')], 'planned');

const course: Course = {
  id: 'test',
  eyebrow: '',
  title: 'Test',
  subtitle: '',
  sourceOrderNotice: '',
  units: [
    {
      id: 'unit',
      order: 1,
      kind: 'chapter',
      label: 'Kapitel',
      title: 'Kapitel',
      description: '',
      estimatedLessonCount: 3,
      lessons: [first, second, planned],
    },
  ],
};

describe('parseRoute', () => {
  it('treats an empty hash as the learning path', () => {
    expect(parseRoute('')).toEqual(DEFAULT_ROUTE);
    expect(parseRoute('#')).toEqual(DEFAULT_ROUTE);
    expect(parseRoute('#/')).toEqual(DEFAULT_ROUTE);
  });

  it('reads every main view', () => {
    expect(parseRoute('#/path')).toEqual({ kind: 'view', view: 'path' });
    expect(parseRoute('#/chapters')).toEqual({ kind: 'view', view: 'chapters' });
    expect(parseRoute('#/practice')).toEqual({ kind: 'view', view: 'practice' });
    expect(parseRoute('#/progress')).toEqual({ kind: 'view', view: 'progress' });
    expect(parseRoute('#/glossary')).toEqual({ kind: 'view', view: 'glossary' });
  });

  it('reads a lesson with and without step', () => {
    expect(parseRoute('#/lesson/brooks-trends.introduction.lesson-01?step=3')).toEqual({
      kind: 'lesson',
      lessonId: 'brooks-trends.introduction.lesson-01',
      step: 3,
    });
    expect(parseRoute('#/lesson/unit.lesson-01')).toEqual({
      kind: 'lesson',
      lessonId: 'unit.lesson-01',
      step: null,
    });
  });

  it('ignores invalid step values instead of failing', () => {
    for (const step of ['0', '-2', 'abc', '2.5', '']) {
      expect(parseRoute(`#/lesson/unit.lesson-01?step=${step}`)).toEqual({
        kind: 'lesson',
        lessonId: 'unit.lesson-01',
        step: null,
      });
    }
  });

  it('reads the lesson result route', () => {
    expect(parseRoute('#/lesson/unit.lesson-01/result')).toEqual({
      kind: 'lesson-result',
      lessonId: 'unit.lesson-01',
    });
    expect(formatRoute({ kind: 'lesson-result', lessonId: 'unit.lesson-01' })).toBe(
      '#/lesson/unit.lesson-01/result',
    );
  });

  it('returns null for unknown or malformed routes', () => {
    expect(parseRoute('#/unknown')).toBeNull();
    expect(parseRoute('#/lesson')).toBeNull();
    expect(parseRoute('#/lesson/')).toBeNull();
    expect(parseRoute('#/lesson/a/b')).toBeNull();
    expect(parseRoute('#/lesson//result')).toBeNull();
    expect(parseRoute('#/lesson/a/result/x')).toBeNull();
    expect(parseRoute('#glossary')).toBeNull();
    expect(parseRoute('#/lesson/%E0%A4%A')).toBeNull();
  });

  it('round-trips through formatRoute', () => {
    const routes: AppRoute[] = [
      { kind: 'view', view: 'chapters' },
      { kind: 'lesson', lessonId: 'unit.lesson-01', step: 4 },
      { kind: 'lesson', lessonId: 'id mit/zeichen', step: null },
    ];
    for (const route of routes) {
      expect(parseRoute(formatRoute(route))).toEqual(route);
    }
    expect(formatRoute({ kind: 'lesson', lessonId: 'unit.lesson-01', step: 3 })).toBe(
      '#/lesson/unit.lesson-01?step=3',
    );
  });
});

/** Nur alte Antworten, noch ohne Versuchsdaten. */
function legacyAnswers(answers: Record<string, string> = {}) {
  return { answers, questionResults: {} };
}

describe('step validation', () => {
  it('stops at the first unresolved question', () => {
    expect(maxReachableStepIndex(first, legacyAnswers())).toBe(2);
    expect(maxReachableStepIndex(first, legacyAnswers({ q1: 'b' }))).toBe(4);
    expect(maxReachableStepIndex(second, legacyAnswers())).toBe(1);
  });

  it('treats a wrong attempt as unresolved until retried correctly or revealed', () => {
    const q1 = first.steps[2] as Extract<LessonStep, { type: 'question' }>;
    let progress = submitAnswer(createEmptyProgress(), q1, 'b');
    expect(maxReachableStepIndex(first, progress)).toBe(2);

    progress = submitAnswer(retryQuestion(progress, q1), q1, 'a');
    expect(maxReachableStepIndex(first, progress)).toBe(4);

    const revealed = revealSolution(submitAnswer(createEmptyProgress(), q1, 'b'), q1);
    expect(maxReachableStepIndex(first, revealed)).toBe(4);
  });

  it('clamps negative, fractional and too large steps', () => {
    expect(clampStepIndex(first, legacyAnswers(), -1)).toBe(0);
    expect(clampStepIndex(first, legacyAnswers(), 1.5)).toBe(0);
    expect(clampStepIndex(first, legacyAnswers(), 99)).toBe(2);
    expect(clampStepIndex(first, legacyAnswers({ q1: 'a' }), 99)).toBe(4);
    expect(clampStepIndex(first, legacyAnswers({ q1: 'a' }), 3)).toBe(3);
  });
});

describe('resolveRoute', () => {
  it('passes views through unchanged', () => {
    expect(resolveRoute({ kind: 'view', view: 'glossary' }, course, createEmptyProgress())).toEqual({
      kind: 'view',
      view: 'glossary',
    });
  });

  it('rejects unknown, deleted, planned and locked lessons', () => {
    const progress = createEmptyProgress();
    expect(resolveRoute({ kind: 'lesson', lessonId: 'gone', step: 1 }, course, progress)).toBeNull();
    expect(
      resolveRoute({ kind: 'lesson', lessonId: planned.id, step: null }, course, progress),
    ).toBeNull();
    expect(
      resolveRoute({ kind: 'lesson', lessonId: second.id, step: 1 }, course, progress),
    ).toBeNull();
  });

  it('opens a deep link at the requested step, limited to the last valid one', () => {
    const progress = createEmptyProgress();
    expect(
      resolveRoute({ kind: 'lesson', lessonId: first.id, step: 2 }, course, progress),
    ).toEqual({ kind: 'lesson', lesson: first, stepIndex: 1 });
    expect(
      resolveRoute({ kind: 'lesson', lessonId: first.id, step: 5 }, course, progress),
    ).toEqual({ kind: 'lesson', lesson: first, stepIndex: 2 });
  });

  it('shows the result view only for completed lessons', () => {
    const route = { kind: 'lesson-result', lessonId: first.id } as const;
    expect(resolveRoute(route, course, createEmptyProgress())).toBeNull();
    expect(
      resolveRoute(route, course, completeLesson(createEmptyProgress(), first.id, first.xp)),
    ).toEqual({ kind: 'lesson-result', lesson: first });
    expect(
      resolveRoute({ kind: 'lesson-result', lessonId: 'gone' }, course, createEmptyProgress()),
    ).toBeNull();
  });

  it('resumes a started lesson when the link has no step', () => {
    let progress = recordAnswer(createEmptyProgress(), 'q1', 'a');
    progress = recordLessonStep(progress, first.id, 3);
    expect(
      resolveRoute({ kind: 'lesson', lessonId: first.id, step: null }, course, progress),
    ).toEqual({ kind: 'lesson', lesson: first, stepIndex: 3 });
  });
});

describe('resume and restart', () => {
  it('starts new lessons at the beginning', () => {
    expect(startStepIndex(first, createEmptyProgress())).toBe(0);
    expect(resumeTarget(course, createEmptyProgress())).toBeUndefined();
  });

  it('continues a started lesson at the saved step', () => {
    let progress = recordAnswer(createEmptyProgress(), 'q1', 'a');
    progress = recordLessonStep(progress, first.id, 3);

    expect(startStepIndex(first, progress)).toBe(3);
    expect(resumeTarget(course, progress)).toEqual({ lesson: first, stepIndex: 3 });
  });

  it('never resumes beyond an unanswered question', () => {
    // Gespeicherte Position hinter einer Frage, deren Antwort fehlt.
    const progress = recordLessonStep(createEmptyProgress(), first.id, 4);
    expect(startStepIndex(first, progress)).toBe(2);
  });

  it('opens a completed lesson from the beginning', () => {
    let progress = recordAnswer(createEmptyProgress(), 'q1', 'a');
    progress = recordLessonStep(progress, first.id, 4);
    progress = completeLesson(progress, first.id, first.xp);

    expect(startStepIndex(first, progress)).toBe(0);
    expect(resumeTarget(course, progress)).toBeUndefined();
    expect(
      resolveRoute({ kind: 'lesson', lessonId: first.id, step: null }, course, progress),
    ).toEqual({ kind: 'lesson', lesson: first, stepIndex: 0 });
  });

  it('skips saved positions of unknown or no longer accessible lessons', () => {
    let progress = recordLessonStep(createEmptyProgress(), 'deleted.lesson', 2);
    progress = recordLessonStep(progress, second.id, 1);
    expect(resumeTarget(course, progress)).toBeUndefined();
  });

  it('prefers the most recently used lesson', () => {
    const progress = {
      ...completeLesson(createEmptyProgress(), first.id, first.xp),
      lessonPositions: {
        [second.id]: { stepIndex: 1, updatedAt: '2026-09-28T10:00:00.000Z' },
        'deleted.lesson': { stepIndex: 0, updatedAt: '2026-09-28T11:00:00.000Z' },
      },
    };
    expect(resumeTarget(course, progress)).toEqual({ lesson: second, stepIndex: 1 });
  });
});

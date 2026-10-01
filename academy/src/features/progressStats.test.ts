import { describe, expect, it } from 'vitest';
import type { Course, CourseUnit, Lesson } from '../content/types';
import { submitAnswer, type QuestionStep } from './lessonResults';
import { completeLesson, createEmptyProgress, recordLessonStep, type AcademyProgress } from './progress';
import {
  activityStats,
  firstAttemptStats,
  lessonStats,
  nextActions,
  progressOverview,
  safePercent,
  unitStats,
} from './progressStats';

function question(id: string): QuestionStep {
  return {
    id,
    type: 'question',
    title: id,
    prompt: '?',
    options: [
      { id: 'a', label: 'A', explanation: 'A' },
      { id: 'b', label: 'B', explanation: 'B' },
    ],
    correctOptionId: 'a',
  };
}

function lesson(id: string, questionIds: string[], status: Lesson['status'] = 'published'): Lesson {
  return {
    id,
    title: `Lektion ${id}`,
    summary: '',
    durationMinutes: 4,
    xp: 20,
    sourceUnit: 'Test',
    status,
    steps: [
      { id: `${id}-e`, type: 'explanation', title: 'E', paragraphs: ['x'] },
      ...questionIds.map(question),
    ],
  };
}

function unit(id: string, lessons: Lesson[], estimated = lessons.length): CourseUnit {
  return {
    id,
    order: 1,
    kind: 'chapter',
    label: `Label ${id}`,
    title: `Titel ${id}`,
    description: '',
    estimatedLessonCount: estimated,
    lessons,
  };
}

const l1 = lesson('l1', ['q1']);
const l2 = lesson('l2', ['q2', 'q3']);
const l3 = lesson('l3', ['q4']);
const course: Course = {
  id: 'c',
  eyebrow: '',
  title: 'Kurs',
  subtitle: '',
  sourceOrderNotice: '',
  units: [
    unit('u1', [l1, l2]),
    unit('u2', [l3, lesson('l4', ['q5'], 'planned')], 6),
    unit('u3', [], 3),
  ],
};
const emptyCourse: Course = { ...course, units: [] };

const TODAY = '2026-10-05';
const at = (day: string) => {
  const [y, m, d] = day.split('-').map(Number);
  return new Date(y, m - 1, d, 12).toISOString();
};
const q = (id: string) =>
  course.units.flatMap((u) => u.lessons).flatMap((l) => l.steps).find((s) => s.id === id) as QuestionStep;

describe('safePercent', () => {
  it('never returns NaN, negatives or more than 100', () => {
    expect(safePercent(0, 0)).toBe(0);
    expect(safePercent(3, 0)).toBe(0);
    expect(safePercent(-1, 4)).toBe(0);
    expect(safePercent(Number.NaN, 4)).toBe(0);
    expect(safePercent(1, Number.POSITIVE_INFINITY)).toBe(0);
    expect(safePercent(5, 4)).toBe(100);
    expect(safePercent(1, 3)).toBe(33);
    expect(safePercent(2, 3)).toBe(67);
  });
});

describe('new users', () => {
  it('shows zero values and the first lesson as next action', () => {
    const overview = progressOverview(course, createEmptyProgress(), TODAY);

    expect(overview.state).toBe('new');
    expect(overview.lessons).toEqual({ completed: 0, published: 3, percent: 0 });
    expect(overview.xp).toBe(0);
    expect(overview.firstAttempt).toEqual({ known: 0, correct: 0, rate: null, unrecorded: 0 });
    expect(overview.dueToday).toBe(0);
    expect(overview.activity.last7).toBe(0);
    expect(overview.activity.last30).toBe(0);
    expect(overview.undatedCompletions).toBe(0);
    expect(overview.actions).toEqual([{ kind: 'lesson', lesson: l1 }]);
  });

  it('handles a course without published lessons', () => {
    const overview = progressOverview(emptyCourse, createEmptyProgress(), TODAY);
    expect(overview.state).toBe('new');
    expect(overview.lessons).toEqual({ completed: 0, published: 0, percent: 0 });
    expect(overview.units).toEqual([]);
    expect(overview.actions).toEqual([]);
  });
});

describe('lesson and unit progress', () => {
  it('counts only currently published lessons', () => {
    const progress = {
      ...createEmptyProgress(),
      completedLessonIds: ['l1', 'l4', 'deleted-lesson'],
    };
    expect(lessonStats(course, progress)).toEqual({ completed: 1, published: 3, percent: 33 });
    expect(unitStats(course, progress)).toEqual([
      { id: 'u1', label: 'Label u1', title: 'Titel u1', completed: 1, published: 2, planned: 2, percent: 50 },
      { id: 'u2', label: 'Label u2', title: 'Titel u2', completed: 0, published: 1, planned: 6, percent: 0 },
      { id: 'u3', label: 'Label u3', title: 'Titel u3', completed: 0, published: 0, planned: 3, percent: 0 },
    ]);
  });
});

describe('first attempts', () => {
  it('computes the rate from recorded first attempts only', () => {
    let progress = submitAnswer(createEmptyProgress(), q('q1'), 'a');
    progress = submitAnswer(progress, q('q2'), 'b');
    progress = submitAnswer(progress, q('q3'), 'a');
    expect(firstAttemptStats(course, progress)).toEqual({ known: 3, correct: 2, rate: 67, unrecorded: 0 });
  });

  it('reports old answers as unrecorded instead of inventing attempts', () => {
    const progress: AcademyProgress = {
      ...createEmptyProgress(),
      answers: { q1: 'a', q2: 'b', gone: 'a' },
    };
    expect(firstAttemptStats(course, progress)).toEqual({ known: 0, correct: 0, rate: null, unrecorded: 2 });
  });
});

describe('active days', () => {
  it('counts local calendar days in the last 7 and 30 days including today', () => {
    const progress: AcademyProgress = {
      ...createEmptyProgress(),
      activityDays: ['2026-08-01', '2026-09-05', '2026-09-06', '2026-09-29', '2026-09-30', '2026-10-05'],
    };
    const stats = activityStats(progress, TODAY);
    expect(stats.days).toHaveLength(30);
    expect(stats.days[0].day).toBe('2026-09-06');
    expect(stats.days.at(-1)).toEqual({ day: TODAY, active: true });
    expect(stats.last7).toBe(3);
    expect(stats.last30).toBe(4);
  });

  it('crosses month and year boundaries', () => {
    const progress: AcademyProgress = {
      ...createEmptyProgress(),
      activityDays: ['2026-12-26', '2026-12-31', '2027-01-01'],
    };
    const stats = activityStats(progress, '2027-01-02');
    // Die letzten 7 Tage beginnen am 27.12. – der 26.12. zählt nur für 30 Tage.
    expect(stats.last7).toBe(2);
    expect(stats.last30).toBe(3);
    expect(stats.days[0].day).toBe('2026-12-04');
  });

  it('records activity on lesson completion', () => {
    const progress = completeLesson(createEmptyProgress(), 'l1', 20, at('2026-10-04'));
    expect(progress.activityDays).toEqual(['2026-10-04']);
    expect(activityStats(progress, TODAY).last7).toBe(1);
  });
});

describe('next actions', () => {
  it('puts a started lesson first, then due reviews, then the next lesson', () => {
    let progress = completeLesson(createEmptyProgress(), 'l1', 20, at('2026-10-01'));
    progress = recordLessonStep(progress, 'l2', 1);

    expect(nextActions(course, progress, TODAY)).toEqual([
      { kind: 'resume', lesson: l2, stepIndex: 1 },
      { kind: 'review', due: 1 },
    ]);
  });

  it('offers the next lesson when nothing was started and nothing is due', () => {
    const progress = completeLesson(createEmptyProgress(), 'l1', 20, at(TODAY));
    expect(nextActions(course, progress, TODAY)).toEqual([{ kind: 'lesson', lesson: l2 }]);
  });
});

describe('complete and migrated users', () => {
  it('marks a user with every published lesson as complete', () => {
    let progress = createEmptyProgress();
    for (const id of ['l1', 'l2', 'l3']) progress = completeLesson(progress, id, 20, at(TODAY));
    const overview = progressOverview(course, progress, TODAY);

    expect(overview.state).toBe('complete');
    expect(overview.lessons.percent).toBe(100);
    expect(overview.xp).toBe(60);
    expect(overview.actions).toEqual([]);
    expect(overview.activity.last7).toBe(1);
  });

  it('keeps old completions without dates, their XP and their due reviews', () => {
    const progress: AcademyProgress = {
      ...createEmptyProgress(),
      completedLessonIds: ['l1', 'l2'],
    };
    const overview = progressOverview(course, progress, TODAY);

    expect(overview.state).toBe('active');
    expect(overview.xp).toBe(40);
    expect(overview.undatedCompletions).toBe(2);
    expect(overview.activity.last30).toBe(0);
    expect(overview.dueToday).toBe(3);
    expect(overview.actions[0]).toEqual({ kind: 'review', due: 3 });
  });
});

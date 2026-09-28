import { describe, expect, it } from 'vitest';
import {
  ACADEMY_PROGRESS_BACKUP_KEY,
  ACADEMY_PROGRESS_KEY,
  ACADEMY_PROGRESS_VERSION,
  completeLesson,
  createEmptyProgress,
  LEGACY_PROGRESS_KEY,
  LEGACY_TREND_RANGE_BEST_KEY,
  loadProgress,
  progressPercent,
  logActivity,
  migrateProgress,
  recordActivity,
  recordAnswer,
  recordLessonStep,
  saveProgress,
} from './progress';

class MemoryStorage implements Pick<Storage, 'getItem' | 'setItem'> {
  values = new Map<string, string>();

  getItem(key: string): string | null {
    return this.values.get(key) ?? null;
  }

  setItem(key: string, value: string): void {
    this.values.set(key, value);
  }
}

describe('progress migration', () => {
  it('reads legacy values without treating old chapters as mastered lessons', () => {
    const storage = new MemoryStorage();
    storage.setItem(
      LEGACY_PROGRESS_KEY,
      JSON.stringify({ 'b1-intro': true, 'b1-ch1': true, 'b1-ch2': false }),
    );
    storage.setItem(LEGACY_TREND_RANGE_BEST_KEY, '11');

    const progress = loadProgress(storage);

    expect(progress.legacyReadChapters).toEqual(['b1-ch1', 'b1-intro']);
    expect(progress.legacyTrendRangeBest).toBe(11);
    expect(progress.completedLessonIds).toEqual([]);
    expect(storage.getItem(LEGACY_PROGRESS_KEY)).toContain('b1-intro');
    expect(storage.getItem(ACADEMY_PROGRESS_KEY)).toBeNull();
  });

  it('ignores malformed legacy data safely', () => {
    const storage = new MemoryStorage();
    storage.setItem(LEGACY_PROGRESS_KEY, '{broken');
    storage.setItem(LEGACY_TREND_RANGE_BEST_KEY, 'not-a-number');

    const progress = loadProgress(storage);

    expect(progress.legacyReadChapters).toEqual([]);
    expect(progress.legacyTrendRangeBest).toBe(0);
  });

  it('saves only the new versioned key', () => {
    const storage = new MemoryStorage();
    storage.setItem(LEGACY_PROGRESS_KEY, JSON.stringify({ 'b1-intro': true }));
    storage.setItem(LEGACY_TREND_RANGE_BEST_KEY, '4');
    const legacyBefore = storage.getItem(LEGACY_PROGRESS_KEY);
    const bestBefore = storage.getItem(LEGACY_TREND_RANGE_BEST_KEY);

    saveProgress(storage, loadProgress(storage));

    expect(storage.getItem(ACADEMY_PROGRESS_KEY)).not.toBeNull();
    expect(storage.getItem(LEGACY_PROGRESS_KEY)).toBe(legacyBefore);
    expect(storage.getItem(LEGACY_TREND_RANGE_BEST_KEY)).toBe(bestBefore);
  });
});

describe('progress updates', () => {
  it('deduplicates completed lessons and records answers', () => {
    let progress = createEmptyProgress();
    progress = completeLesson(progress, 'lesson-1', 20);
    progress = completeLesson(progress, 'lesson-1', 20);
    progress = recordAnswer(progress, 'question-1', 'answer-b');

    expect(progress.completedLessonIds).toEqual(['lesson-1']);
    expect(progress.lastLessonId).toBe('lesson-1');
    expect(progress.answers).toEqual({ 'question-1': 'answer-b' });
  });

  it('calculates progress only from currently published lesson IDs', () => {
    const progress = {
      ...createEmptyProgress(),
      completedLessonIds: ['lesson-1', 'old-lesson'],
    };

    expect(progressPercent(progress, ['lesson-1', 'lesson-2'])).toBe(50);
    expect(progressPercent(progress, [])).toBe(0);
  });
});

describe('academy data migration', () => {
  const v1Record = {
    version: 1,
    completedLessonIds: ['lesson-1', 'lesson-2'],
    answers: { 'question-1': 'a' },
    lastLessonId: 'lesson-2',
    legacyReadChapters: ['b1-intro'],
    legacyTrendRangeBest: 5,
    updatedAt: '2026-09-01T08:00:00.000Z',
  };

  it('migrates a v1 record without losing data and adds empty positions', () => {
    const storage = new MemoryStorage();
    storage.setItem(ACADEMY_PROGRESS_KEY, JSON.stringify(v1Record));

    const progress = loadProgress(storage);

    expect(progress.version).toBe(ACADEMY_PROGRESS_VERSION);
    expect(progress.completedLessonIds).toEqual(['lesson-1', 'lesson-2']);
    expect(progress.answers).toEqual({ 'question-1': 'a' });
    expect(progress.lastLessonId).toBe('lesson-2');
    expect(progress.legacyReadChapters).toEqual(['b1-intro']);
    expect(progress.legacyTrendRangeBest).toBe(5);
    expect(progress.lessonPositions).toEqual({});
    expect(progress.preservedFields).toEqual({});
    expect(storage.getItem(ACADEMY_PROGRESS_BACKUP_KEY)).toBeNull();
  });

  it('writes the migrated record back under the unchanged key', () => {
    const storage = new MemoryStorage();
    storage.setItem(ACADEMY_PROGRESS_KEY, JSON.stringify(v1Record));

    saveProgress(storage, loadProgress(storage));
    const saved = JSON.parse(storage.getItem(ACADEMY_PROGRESS_KEY) ?? '{}');

    expect(saved.version).toBe(ACADEMY_PROGRESS_VERSION);
    expect(saved.completedLessonIds).toEqual(['lesson-1', 'lesson-2']);
    expect(saved.lessonPositions).toEqual({});
    expect(saved).not.toHaveProperty('preservedFields');
    expect(loadProgress(storage).completedLessonIds).toEqual(['lesson-1', 'lesson-2']);
  });

  it('starts empty for missing and empty storage', () => {
    const storage = new MemoryStorage();
    expect(loadProgress(storage).completedLessonIds).toEqual([]);

    storage.setItem(ACADEMY_PROGRESS_KEY, '');
    const progress = loadProgress(storage);
    expect(progress.completedLessonIds).toEqual([]);
    expect(progress.lessonPositions).toEqual({});
    expect(storage.getItem(ACADEMY_PROGRESS_BACKUP_KEY)).toBeNull();
  });

  it('backs up corrupted JSON before it can be overwritten', () => {
    const storage = new MemoryStorage();
    storage.setItem(ACADEMY_PROGRESS_KEY, '{"version":1,"completedLess');

    const progress = loadProgress(storage);

    expect(progress.completedLessonIds).toEqual([]);
    expect(storage.getItem(ACADEMY_PROGRESS_BACKUP_KEY)).toBe('{"version":1,"completedLess');
  });

  it('backs up well-formed JSON that is not an academy record', () => {
    for (const raw of ['null', '[]', '"text"', '42', '{"completedLessonIds":["x"]}']) {
      const storage = new MemoryStorage();
      storage.setItem(ACADEMY_PROGRESS_KEY, raw);

      expect(loadProgress(storage).completedLessonIds).toEqual([]);
      expect(storage.getItem(ACADEMY_PROGRESS_BACKUP_KEY)).toBe(raw);
    }
  });

  it('keeps unknown extra fields and writes them back unchanged', () => {
    const storage = new MemoryStorage();
    storage.setItem(
      ACADEMY_PROGRESS_KEY,
      JSON.stringify({ ...v1Record, futureSettings: { theme: 'dark' }, bookmarks: ['x'] }),
    );

    const progress = loadProgress(storage);
    expect(progress.preservedFields).toEqual({
      futureSettings: { theme: 'dark' },
      bookmarks: ['x'],
    });

    saveProgress(storage, progress);
    const saved = JSON.parse(storage.getItem(ACADEMY_PROGRESS_KEY) ?? '{}');
    expect(saved.futureSettings).toEqual({ theme: 'dark' });
    expect(saved.bookmarks).toEqual(['x']);
    expect(saved.completedLessonIds).toEqual(['lesson-1', 'lesson-2']);
  });

  it('drops invalid field values individually instead of discarding the record', () => {
    const progress = migrateProgress({
      version: 2,
      completedLessonIds: ['ok', 7, null],
      answers: { good: 'a', bad: 3 },
      lastLessonId: 12,
      lessonPositions: {
        valid: { stepIndex: 2, updatedAt: '2026-09-28T09:00:00.000Z' },
        negative: { stepIndex: -1, updatedAt: 'x' },
        fractional: { stepIndex: 1.5 },
        missing: {},
        wrongType: 'step-3',
      },
      legacyReadChapters: 'b1-intro',
      legacyTrendRangeBest: Number.NaN,
    });

    expect(progress).not.toBeNull();
    expect(progress?.completedLessonIds).toEqual(['ok']);
    expect(progress?.answers).toEqual({ good: 'a' });
    expect(progress?.lastLessonId).toBeNull();
    expect(progress?.lessonPositions).toEqual({
      valid: { stepIndex: 2, updatedAt: '2026-09-28T09:00:00.000Z' },
    });
    expect(progress?.legacyReadChapters).toEqual([]);
    expect(progress?.legacyTrendRangeBest).toBe(0);
  });

  it('never touches the legacy keys during migration', () => {
    const storage = new MemoryStorage();
    storage.setItem(LEGACY_PROGRESS_KEY, JSON.stringify({ 'b1-ch1': true }));
    storage.setItem(LEGACY_TREND_RANGE_BEST_KEY, '7');
    storage.setItem(ACADEMY_PROGRESS_KEY, JSON.stringify(v1Record));

    saveProgress(storage, loadProgress(storage));

    expect(storage.getItem(LEGACY_PROGRESS_KEY)).toBe(JSON.stringify({ 'b1-ch1': true }));
    expect(storage.getItem(LEGACY_TREND_RANGE_BEST_KEY)).toBe('7');
  });
});

describe('lesson positions', () => {
  it('records the step of a started lesson', () => {
    const progress = recordLessonStep(createEmptyProgress(), 'lesson-1', 2);
    expect(progress.lessonPositions['lesson-1']?.stepIndex).toBe(2);
  });

  it('ignores invalid steps and unchanged positions', () => {
    const start = recordLessonStep(createEmptyProgress(), 'lesson-1', 2);
    expect(recordLessonStep(start, 'lesson-1', -1)).toBe(start);
    expect(recordLessonStep(start, 'lesson-1', 0.5)).toBe(start);
    expect(recordLessonStep(start, 'lesson-1', 2)).toBe(start);
  });

  it('clears the position on completion and does not track completed lessons', () => {
    let progress = recordLessonStep(createEmptyProgress(), 'lesson-1', 3);
    progress = completeLesson(progress, 'lesson-1', 20);
    expect(progress.lessonPositions).toEqual({});

    expect(recordLessonStep(progress, 'lesson-1', 1)).toBe(progress);
  });
});

describe('attempt and completion data (v3)', () => {
  it('migrates v2 records with empty results and untouched answers', () => {
    const progress = migrateProgress({
      version: 2,
      completedLessonIds: ['lesson-1'],
      answers: { 'question-1': 'b' },
      lessonPositions: {},
    });

    expect(progress?.version).toBe(ACADEMY_PROGRESS_VERSION);
    expect(progress?.answers).toEqual({ 'question-1': 'b' });
    expect(progress?.questionResults).toEqual({});
    expect(progress?.lessonResults).toEqual({});
    expect(progress?.completedLessonIds).toEqual(['lesson-1']);
  });

  it('keeps valid results and drops invalid entries individually', () => {
    const progress = migrateProgress({
      version: 3,
      questionResults: {
        good: {
          selectedOptionId: 'a',
          attempts: 2,
          firstAttemptCorrect: false,
          status: 'correct',
          wrongOptionIds: ['b', 4],
        },
        legacy: { selectedOptionId: null, attempts: 0, firstAttemptCorrect: 'x', status: 'open' },
        badStatus: { attempts: 1, status: 'done' },
        badAttempts: { attempts: -1, status: 'open' },
        notObject: 3,
      },
      lessonResults: {
        done: { firstCompletedAt: '2026-09-01', lastCompletedAt: '2026-09-02', xpAwarded: 30 },
        legacyDone: { firstCompletedAt: null, lastCompletedAt: '2026-09-02', xpAwarded: 20 },
        badXp: { lastCompletedAt: '2026-09-02', xpAwarded: -5 },
        missingDate: { xpAwarded: 10 },
      },
    });

    expect(progress?.questionResults).toEqual({
      good: {
        selectedOptionId: 'a',
        attempts: 2,
        firstAttemptCorrect: false,
        status: 'correct',
        wrongOptionIds: ['b'],
      },
      legacy: {
        selectedOptionId: null,
        attempts: 0,
        firstAttemptCorrect: null,
        status: 'open',
        wrongOptionIds: [],
      },
    });
    expect(progress?.lessonResults).toEqual({
      done: { firstCompletedAt: '2026-09-01', lastCompletedAt: '2026-09-02', xpAwarded: 30 },
      legacyDone: { firstCompletedAt: null, lastCompletedAt: '2026-09-02', xpAwarded: 20 },
    });
  });

  it('round-trips results through storage', () => {
    const storage = new MemoryStorage();
    const progress = completeLesson(createEmptyProgress(), 'lesson-1', 30, '2026-09-28T10:00:00.000Z');

    saveProgress(storage, progress);
    const loaded = loadProgress(storage);

    expect(loaded.lessonResults).toEqual(progress.lessonResults);
    expect(JSON.parse(storage.getItem(ACADEMY_PROGRESS_KEY) ?? '{}').version).toBe(
      ACADEMY_PROGRESS_VERSION,
    );
  });

  it('completes a lesson once and ignores negative XP', () => {
    let progress = completeLesson(createEmptyProgress(), 'lesson-1', -10, 't1');
    progress = completeLesson(progress, 'lesson-1', 99, 't2');

    expect(progress.completedLessonIds).toEqual(['lesson-1']);
    expect(progress.lessonResults['lesson-1']).toEqual({
      firstCompletedAt: 't1',
      lastCompletedAt: 't2',
      xpAwarded: 0,
    });
  });
});

describe('review data (v4)', () => {
  it('migrates older records with an empty review plan', () => {
    const progress = migrateProgress({ version: 3, completedLessonIds: ['lesson-1'] });
    expect(progress?.version).toBe(ACADEMY_PROGRESS_VERSION);
    expect(progress?.reviewCards).toEqual({});
    expect(progress?.reviewSession).toBeNull();
  });

  it('keeps valid cards and sessions and drops invalid ones', () => {
    const progress = migrateProgress({
      version: 4,
      reviewCards: {
        ok: {
          stage: 2,
          dueDay: '2026-10-05',
          lastReviewedDay: '2026-09-28',
          lastResult: 'correct',
          reviews: 3,
          lapses: 1,
        },
        badStage: { stage: 9, dueDay: '2026-10-05', lastReviewedDay: '2026-09-28', lastResult: 'correct' },
        badDay: { stage: 1, dueDay: '2026-02-30', lastReviewedDay: '2026-09-28', lastResult: 'wrong' },
        badResult: { stage: 1, dueDay: '2026-10-05', lastReviewedDay: '2026-09-28', lastResult: 'meh' },
      },
      reviewSession: {
        mode: 'due',
        unitId: null,
        questionIds: ['q1', 'q2', 3],
        index: 1,
        answers: { q1: 'a', stray: 'b', q2: 4 },
        startedDay: '2026-09-28',
      },
    });

    expect(Object.keys(progress?.reviewCards ?? {})).toEqual(['ok']);
    expect(progress?.reviewSession).toEqual({
      mode: 'due',
      unitId: null,
      questionIds: ['q1', 'q2'],
      index: 1,
      answers: { q1: 'a' },
      startedDay: '2026-09-28',
      activityRecorded: false,
    });
  });

  it('discards unusable sessions without touching the rest', () => {
    for (const reviewSession of [
      { mode: 'quiz', questionIds: ['q1'], index: 0, startedDay: '2026-09-28' },
      { mode: 'due', questionIds: [], index: 0, startedDay: '2026-09-28' },
      { mode: 'due', questionIds: ['q1'], index: 5, startedDay: '2026-09-28' },
      { mode: 'due', questionIds: ['q1'], index: 0, startedDay: 'morgen' },
      'kaputt',
    ]) {
      const progress = migrateProgress({ version: 4, completedLessonIds: ['x'], reviewSession });
      expect(progress?.reviewSession).toBeNull();
      expect(progress?.completedLessonIds).toEqual(['x']);
    }
  });
});

describe('activity days (v5)', () => {
  it('derives activity from existing completion and review timestamps', () => {
    const completedAt = new Date(2026, 8, 20, 12).toISOString();
    const replayedAt = new Date(2026, 8, 24, 12).toISOString();
    const progress = migrateProgress({
      version: 4,
      lessonResults: {
        a: { firstCompletedAt: completedAt, lastCompletedAt: replayedAt, xpAwarded: 10 },
        legacy: { firstCompletedAt: null, lastCompletedAt: 'kaputt', xpAwarded: 10 },
      },
      reviewCards: {
        q1: {
          stage: 0,
          dueDay: '2026-09-27',
          lastReviewedDay: '2026-09-26',
          lastResult: 'correct',
          reviews: 1,
          lapses: 0,
        },
      },
    });

    expect(progress?.version).toBe(ACADEMY_PROGRESS_VERSION);
    expect(progress?.activityDays).toEqual(['2026-09-20', '2026-09-24', '2026-09-26']);
  });

  it('starts empty for old records without timestamps', () => {
    expect(migrateProgress({ version: 1, completedLessonIds: ['a'] })?.activityDays).toEqual([]);
  });

  it('keeps stored days, drops invalid ones and deduplicates', () => {
    const progress = migrateProgress({
      version: 5,
      activityDays: ['2026-10-02', '2026-10-01', '2026-10-02', '2026-02-30', 7, 'heute'],
    });
    expect(progress?.activityDays).toEqual(['2026-10-01', '2026-10-02']);
  });

  it('records each day once and keeps only the most recent days', () => {
    let progress = recordActivity(createEmptyProgress(), '2026-10-05');
    expect(recordActivity(progress, '2026-10-05')).toBe(progress);
    expect(recordActivity(progress, 'nope')).toBe(progress);

    const many = Array.from({ length: 450 }, (_, index) => {
      const date = new Date(2025, 0, 1 + index);
      return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    });
    progress = migrateProgress({ version: 5, activityDays: many })!;
    expect(progress.activityDays).toHaveLength(400);
    expect(progress.activityDays.at(-1)).toBe(many.at(-1));
  });
});

describe('goals, daily activity and milestones (v6)', () => {
  const first = new Date(2026, 9, 1, 12).toISOString();
  const replay = new Date(2026, 9, 3, 12).toISOString();

  it('derives daily counts from lesson results when upgrading', () => {
    const progress = migrateProgress({
      version: 5,
      activityDays: ['2026-10-01', '2026-10-03'],
      lessonResults: {
        a: { firstCompletedAt: first, lastCompletedAt: replay, xpAwarded: 30 },
        b: { firstCompletedAt: first, lastCompletedAt: first, xpAwarded: 20 },
        old: { firstCompletedAt: null, lastCompletedAt: replay, xpAwarded: 10 },
      },
    });

    expect(progress?.version).toBe(ACADEMY_PROGRESS_VERSION);
    expect(progress?.dailyActivity).toEqual({
      '2026-10-01': { lessons: 2, reviewSessions: 0, xp: 50 },
      '2026-10-03': { lessons: 2, reviewSessions: 0, xp: 0 },
    });
    expect(progress?.dailyGoal).toEqual({ kind: 'activities', target: 1 });
    expect(progress?.milestones).toEqual({});
  });

  it('never derives again once daily counts exist, so reloads do not double count', () => {
    const storage = new MemoryStorage();
    storage.setItem(
      ACADEMY_PROGRESS_KEY,
      JSON.stringify({
        version: 5,
        lessonResults: { a: { firstCompletedAt: first, lastCompletedAt: first, xpAwarded: 30 } },
      }),
    );

    saveProgress(storage, loadProgress(storage));
    saveProgress(storage, loadProgress(storage));

    expect(loadProgress(storage).dailyActivity).toEqual({
      '2026-10-01': { lessons: 1, reviewSessions: 0, xp: 30 },
    });
  });

  it('does not derive activity days from review answers once v5 data exists', () => {
    const progress = migrateProgress({
      version: 5,
      activityDays: [],
      reviewCards: {
        q: { stage: 0, dueDay: '2026-10-06', lastReviewedDay: '2026-10-05', lastResult: 'correct' },
      },
    });
    expect(progress?.activityDays).toEqual([]);
  });

  it('keeps valid goals and milestones and drops invalid ones', () => {
    const progress = migrateProgress({
      version: 6,
      dailyGoal: { kind: 'xp', target: 60 },
      dailyActivity: { '2026-10-01': { lessons: 1, reviewSessions: -2, xp: 'viel' }, kaputt: {} },
      milestones: {
        'first-lesson': { achievedDay: '2026-10-01' },
        'seven-days': { achievedDay: 'gestern' },
        'gold-badge': { achievedDay: '2026-10-01' },
      },
    });

    expect(progress?.dailyGoal).toEqual({ kind: 'xp', target: 60 });
    expect(progress?.dailyActivity).toEqual({ '2026-10-01': { lessons: 1, reviewSessions: 0, xp: 0 } });
    expect(progress?.milestones).toEqual({ 'first-lesson': { achievedDay: '2026-10-01' } });
    expect(migrateProgress({ version: 6, dailyGoal: { kind: 'xp', target: 7 } })?.dailyGoal).toEqual({
      kind: 'activities',
      target: 1,
    });
  });

  it('credits lesson XP once per lesson and counts every completion as activity', () => {
    let progress = completeLesson(createEmptyProgress(), 'a', 30, first);
    progress = completeLesson(progress, 'a', 30, new Date(2026, 9, 1, 18).toISOString());

    expect(progress.dailyActivity['2026-10-01']).toEqual({ lessons: 2, reviewSessions: 0, xp: 30 });

    // Vor der Erfassung abgeschlossene Lektion: keine neuen XP beim Wiederholen.
    const legacy = completeLesson(
      { ...createEmptyProgress(), completedLessonIds: ['b'] },
      'b',
      20,
      first,
    );
    expect(legacy.dailyActivity['2026-10-01']).toEqual({ lessons: 1, reviewSessions: 0, xp: 0 });
  });

  it('ignores invalid days and negative values when logging activity', () => {
    const progress = createEmptyProgress();
    expect(logActivity(progress, 'morgen', { lessons: 1 })).toBe(progress);
    expect(logActivity(progress, '2026-10-01', { lessons: -3, xp: Number.NaN }).dailyActivity).toEqual({
      '2026-10-01': { lessons: 0, reviewSessions: 0, xp: 0 },
    });
  });
});

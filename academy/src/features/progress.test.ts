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
  migrateProgress,
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
    progress = completeLesson(progress, 'lesson-1');
    progress = completeLesson(progress, 'lesson-1');
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

    expect(saved.version).toBe(2);
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
    progress = completeLesson(progress, 'lesson-1');
    expect(progress.lessonPositions).toEqual({});

    expect(recordLessonStep(progress, 'lesson-1', 1)).toBe(progress);
  });
});

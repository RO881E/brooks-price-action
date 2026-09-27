import { describe, expect, it } from 'vitest';
import {
  ACADEMY_PROGRESS_KEY,
  completeLesson,
  createEmptyProgress,
  LEGACY_PROGRESS_KEY,
  LEGACY_TREND_RANGE_BEST_KEY,
  loadProgress,
  progressPercent,
  recordAnswer,
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

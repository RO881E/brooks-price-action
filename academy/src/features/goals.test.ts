import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { Course, CourseUnit, Lesson } from '../content/types';
import {
  activitiesOn,
  awardMilestone,
  awardMilestones,
  goalProgress,
  newMilestones,
  streakStats,
  weekStart,
  weekView,
} from './goals';
import {
  completeLesson,
  createEmptyProgress,
  loadProgress,
  logActivity,
  saveProgress,
  setDailyGoal,
  type AcademyProgress,
} from './progress';

const withDays = (days: string[], extra: Partial<AcademyProgress> = {}): AcademyProgress => ({
  ...createEmptyProgress(),
  activityDays: days,
  ...extra,
});

describe('daily goal', () => {
  it('counts activities and XP of a day', () => {
    let progress = logActivity(createEmptyProgress(), '2026-10-05', { lessons: 1, xp: 30 });
    progress = logActivity(progress, '2026-10-05', { reviewSessions: 1 });

    expect(activitiesOn(progress, '2026-10-05')).toBe(2);
    expect(goalProgress(progress, '2026-10-05')).toMatchObject({ value: 2, met: true, percent: 100 });

    progress = setDailyGoal(progress, { kind: 'xp', target: 60 });
    expect(goalProgress(progress, '2026-10-05')).toMatchObject({ value: 30, met: false, percent: 50 });
    expect(goalProgress(progress, '2026-10-06')).toMatchObject({ value: 0, met: false, percent: 0 });
  });

  it('counts an old activity day without details as exactly one activity', () => {
    const progress = withDays(['2026-10-01']);
    expect(activitiesOn(progress, '2026-10-01')).toBe(1);
    expect(goalProgress(progress, '2026-10-01').met).toBe(true);
    expect(goalProgress(setDailyGoal(progress, { kind: 'activities', target: 2 }), '2026-10-01').met).toBe(false);
  });

  it('accepts only the offered goals', () => {
    const progress = createEmptyProgress();
    expect(setDailyGoal(progress, { kind: 'xp', target: 5 })).toBe(progress);
    expect(setDailyGoal(progress, { kind: 'activities', target: 1 })).toBe(progress);
    expect(setDailyGoal(progress, { kind: 'activities', target: 3 }).dailyGoal).toEqual({
      kind: 'activities',
      target: 3,
    });
  });
});

describe('streak', () => {
  it('counts consecutive days and keeps yesterday’s streak while today is open', () => {
    const progress = withDays(['2026-10-02', '2026-10-03', '2026-10-04']);
    expect(streakStats(progress, '2026-10-04')).toEqual({ current: 3, longest: 3, activeToday: true });
    expect(streakStats(progress, '2026-10-05')).toEqual({ current: 3, longest: 3, activeToday: false });
  });

  it('breaks after a skipped day but keeps the longest streak', () => {
    const progress = withDays(['2026-10-01', '2026-10-02', '2026-10-03', '2026-10-05']);
    expect(streakStats(progress, '2026-10-05')).toEqual({ current: 1, longest: 3, activeToday: true });
    expect(streakStats(progress, '2026-10-07')).toEqual({ current: 0, longest: 3, activeToday: false });
  });

  it('continues across month and year boundaries', () => {
    expect(streakStats(withDays(['2026-09-29', '2026-09-30', '2026-10-01']), '2026-10-01').current).toBe(3);
    expect(streakStats(withDays(['2026-12-30', '2026-12-31', '2027-01-01']), '2027-01-01').current).toBe(3);
    expect(streakStats(withDays(['2028-02-28', '2028-02-29', '2028-03-01']), '2028-03-01').current).toBe(3);
  });

  it('ignores activity days after today', () => {
    expect(streakStats(withDays(['2026-10-05', '2026-10-06']), '2026-10-05')).toEqual({
      current: 1,
      longest: 1,
      activeToday: true,
    });
  });

  it('does not change when the app is only opened', () => {
    const storage = new Map<string, string>();
    const memory = {
      getItem: (key: string) => storage.get(key) ?? null,
      setItem: (key: string, value: string) => void storage.set(key, value),
    };
    const progress = withDays(['2026-10-03', '2026-10-04']);
    saveProgress(memory, progress);

    const reopened = loadProgress(memory);
    saveProgress(memory, reopened);
    const again = loadProgress(memory);

    expect(again.activityDays).toEqual(['2026-10-03', '2026-10-04']);
    expect(streakStats(again, '2026-10-05').current).toBe(2);
  });
});

describe('daylight-saving time', () => {
  beforeEach(() => {
    vi.stubEnv('TZ', 'Europe/Berlin');
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('counts streaks and weeks over the clock changes', () => {
    expect(new Date(2026, 9, 24).getTimezoneOffset()).toBe(-120);
    expect(new Date(2026, 9, 26).getTimezoneOffset()).toBe(-60);

    expect(streakStats(withDays(['2026-10-24', '2026-10-25', '2026-10-26']), '2026-10-26').current).toBe(3);
    expect(streakStats(withDays(['2027-03-27', '2027-03-28', '2027-03-29']), '2027-03-29').current).toBe(3);
    expect(weekStart('2026-10-25')).toBe('2026-10-19');
    expect(weekStart('2027-03-29')).toBe('2027-03-29');
  });

  it('records a lesson completed shortly after midnight on the new local day', () => {
    const progress = completeLesson(
      createEmptyProgress(),
      'lesson',
      30,
      new Date(2026, 9, 25, 0, 30).toISOString(),
    );
    expect(progress.activityDays).toEqual(['2026-10-25']);
    expect(progress.dailyActivity['2026-10-25']).toEqual({ lessons: 1, reviewSessions: 0, xp: 30 });
  });
});

describe('week view', () => {
  it('starts on Monday, also across month and year', () => {
    expect(weekStart('2026-10-05')).toBe('2026-10-05');
    expect(weekStart('2026-10-11')).toBe('2026-10-05');
    expect(weekStart('2026-10-01')).toBe('2026-09-28');
    expect(weekStart('2027-01-01')).toBe('2026-12-28');
  });

  it('marks met, active, missed, open and future days', () => {
    let progress = setDailyGoal(createEmptyProgress(), { kind: 'activities', target: 2 });
    progress = logActivity(progress, '2026-10-05', { lessons: 2 });
    progress = logActivity(progress, '2026-10-06', { reviewSessions: 1 });

    expect(weekView(progress, '2026-10-08').map((day) => [day.label, day.status, day.isToday])).toEqual([
      ['Mo', 'met', false],
      ['Di', 'active', false],
      ['Mi', 'missed', false],
      ['Do', 'open', true],
      ['Fr', 'future', false],
      ['Sa', 'future', false],
      ['So', 'future', false],
    ]);
  });
});

function lesson(id: string): Lesson {
  return {
    id,
    title: id,
    summary: '',
    durationMinutes: 3,
    xp: 400,
    sourceUnit: 'Test',
    status: 'published',
    steps: [{ id: `${id}-e`, type: 'explanation', title: 'E', paragraphs: ['x'] }],
  };
}

function unit(id: string, lessons: Lesson[], estimated: number): CourseUnit {
  return { id, order: 1, kind: 'chapter', label: id, title: id, description: '', estimatedLessonCount: estimated, lessons };
}

const course: Course = {
  id: 'c',
  eyebrow: '',
  title: '',
  subtitle: '',
  sourceOrderNotice: '',
  units: [unit('u1', [lesson('a'), lesson('b')], 2), unit('u2', [lesson('c')], 5)],
};

describe('milestones', () => {
  it('awards each reached milestone exactly once', () => {
    const empty = createEmptyProgress();
    expect(awardMilestones(empty, course, '2026-10-05')).toBe(empty);

    let progress = completeLesson(empty, 'a', 400, new Date(2026, 9, 5, 9).toISOString());
    progress = awardMilestones(progress, course, '2026-10-05');
    expect(progress.milestones).toEqual({ 'first-lesson': { achievedDay: '2026-10-05' } });

    // Erneutes Prüfen – etwa nach Reload – ändert nichts.
    expect(awardMilestones(progress, course, '2026-10-06')).toBe(progress);
    expect(awardMilestone(progress, 'first-lesson', '2026-10-09')).toBe(progress);
  });

  it('needs a fully released unit for the first chapter', () => {
    let progress = completeLesson(createEmptyProgress(), 'c', 400, new Date(2026, 9, 5, 9).toISOString());
    progress = awardMilestones(progress, course, '2026-10-05');
    expect(progress.milestones['first-chapter']).toBeUndefined();

    progress = completeLesson(progress, 'a', 400, new Date(2026, 9, 6, 9).toISOString());
    progress = completeLesson(progress, 'b', 400, new Date(2026, 9, 6, 10).toISOString());
    const before = progress;
    progress = awardMilestones(progress, course, '2026-10-06');

    expect(progress.milestones['first-chapter']).toEqual({ achievedDay: '2026-10-06' });
    expect(progress.milestones['xp-1000']).toEqual({ achievedDay: '2026-10-06' });
    expect(newMilestones(before, progress).map((milestone) => milestone.id)).toEqual([
      'first-chapter',
      'xp-1000',
    ]);
  });

  it('counts seven distinct learning days, not consecutive ones', () => {
    const days = ['2026-09-01', '2026-09-03', '2026-09-05', '2026-09-09', '2026-09-12', '2026-09-20'];
    expect(awardMilestones(withDays(days), course, '2026-10-05').milestones['seven-days']).toBeUndefined();
    expect(
      awardMilestones(withDays([...days, '2026-10-01']), course, '2026-10-05').milestones['seven-days'],
    ).toEqual({ achievedDay: '2026-10-05' });
  });
});

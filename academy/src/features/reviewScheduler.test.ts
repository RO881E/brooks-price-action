import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  addDays,
  daysBetween,
  isDayKey,
  isDue,
  localDayKey,
  REVIEW_INTERVALS,
  scheduleReview,
  seededRandom,
  shuffle,
  type ReviewCard,
} from './reviewScheduler';

describe('local calendar days', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('uses the local date, not UTC, around midnight', () => {
    vi.setSystemTime(new Date(2026, 8, 28, 23, 59, 30));
    expect(localDayKey(new Date())).toBe('2026-09-28');

    vi.setSystemTime(new Date(2026, 8, 29, 0, 0, 30));
    expect(localDayKey(new Date())).toBe('2026-09-29');
  });

  it('adds calendar days across month, year and leap-day boundaries', () => {
    expect(addDays('2026-09-30', 1)).toBe('2026-10-01');
    expect(addDays('2026-12-31', 1)).toBe('2027-01-01');
    expect(addDays('2028-02-28', 1)).toBe('2028-02-29');
    expect(addDays('2027-02-28', 1)).toBe('2027-03-01');
    expect(addDays('2026-10-01', -1)).toBe('2026-09-30');
    expect(addDays('2026-09-28', 30)).toBe('2026-10-28');
  });

  it('counts whole days across daylight-saving changes', () => {
    // In Europa wechselt die Uhr am 25.10.2026 und am 28.03.2027.
    expect(addDays('2026-10-24', 1)).toBe('2026-10-25');
    expect(addDays('2026-10-25', 1)).toBe('2026-10-26');
    expect(addDays('2027-03-27', 3)).toBe('2027-03-30');
    expect(daysBetween('2026-10-24', '2026-10-26')).toBe(2);
    expect(daysBetween('2027-03-27', '2027-03-30')).toBe(3);
    expect(daysBetween('2026-12-31', '2027-01-01')).toBe(1);
    expect(daysBetween('2026-09-29', '2026-09-28')).toBe(-1);
  });

  it('validates day keys', () => {
    expect(isDayKey('2026-09-28')).toBe(true);
    expect(isDayKey('2026-02-30')).toBe(false);
    expect(isDayKey('2026-9-28')).toBe(false);
    expect(isDayKey('gestern')).toBe(false);
    expect(isDayKey(20260928)).toBe(false);
  });

  it('treats the due day itself and earlier days as due', () => {
    expect(isDue('2026-09-28', '2026-09-28')).toBe(true);
    expect(isDue('2026-09-27', '2026-09-28')).toBe(true);
    expect(isDue('2026-09-29', '2026-09-28')).toBe(false);
  });
});

describe('daylight-saving time in a real time zone', () => {
  beforeEach(() => {
    vi.stubEnv('TZ', 'Europe/Berlin');
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllEnvs();
  });

  it('keeps calendar days intact on 23- and 25-hour days', () => {
    // Die Zeitzone ist wirklich aktiv: Sommer- und Winterzeit unterscheiden sich.
    expect(new Date(2026, 9, 24).getTimezoneOffset()).toBe(-120);
    expect(new Date(2026, 9, 26).getTimezoneOffset()).toBe(-60);

    expect(addDays('2026-10-24', 1)).toBe('2026-10-25');
    expect(addDays('2026-10-25', 1)).toBe('2026-10-26');
    expect(addDays('2027-03-28', 1)).toBe('2027-03-29');
    expect(daysBetween('2027-03-27', '2027-03-29')).toBe(2);

    // Kurz nach Mitternacht am Umstellungstag gilt schon der neue Kalendertag.
    vi.setSystemTime(new Date(2026, 9, 25, 0, 30));
    expect(localDayKey(new Date())).toBe('2026-10-25');
    vi.setSystemTime(new Date(2027, 2, 28, 23, 45));
    expect(localDayKey(new Date())).toBe('2027-03-28');
  });

  it('schedules a card due tomorrow even across the clock change', () => {
    expect(scheduleReview(undefined, false, '2026-10-24').dueDay).toBe('2026-10-25');
    expect(scheduleReview(undefined, true, '2027-03-27').dueDay).toBe('2027-03-28');
  });
});

describe('scheduleReview', () => {
  it('walks through every interval on correct answers at the due day', () => {
    let today = '2026-09-28';
    let card: ReviewCard | undefined;
    const seen: Array<[number, number]> = [];

    for (let round = 0; round < 10; round += 1) {
      card = scheduleReview(card, true, today);
      seen.push([card.stage, daysBetween(today, card.dueDay)]);
      today = card.dueDay;
    }

    expect(REVIEW_INTERVALS).toEqual([1, 3, 7, 14, 30, 60, 120, 180]);
    expect(seen).toEqual([
      [0, 1],
      [1, 3],
      [2, 7],
      [3, 14],
      [4, 30],
      [5, 60],
      [6, 120],
      [7, 180],
      [7, 180],
      [7, 180],
    ]);
    expect(card).toMatchObject({ reviews: 10, lapses: 0, lastResult: 'correct' });
  });

  it('resets to the shortest interval after a wrong answer at any stage', () => {
    const mature: ReviewCard = {
      stage: 4,
      dueDay: '2026-09-28',
      lastReviewedDay: '2026-08-29',
      lastResult: 'correct',
      reviews: 5,
      lapses: 0,
    };

    const lapsed = scheduleReview(mature, false, '2026-09-28');
    expect(lapsed).toEqual({
      stage: 0,
      dueDay: '2026-09-29',
      lastReviewedDay: '2026-09-28',
      lastResult: 'wrong',
      reviews: 6,
      lapses: 1,
    });

    // Danach wieder aufwärts: 3 Tage statt der früheren 30.
    const recovered = scheduleReview(lapsed, true, '2026-09-29');
    expect(recovered.stage).toBe(1);
    expect(recovered.dueDay).toBe('2026-10-02');
  });

  it('makes a wrong first review due tomorrow', () => {
    expect(scheduleReview(undefined, false, '2026-12-31')).toMatchObject({
      stage: 0,
      dueDay: '2027-01-01',
      lapses: 1,
    });
  });

  it('does not move the plan on early correct answers', () => {
    const card: ReviewCard = {
      stage: 2,
      dueDay: '2026-10-05',
      lastReviewedDay: '2026-09-28',
      lastResult: 'wrong',
      reviews: 3,
      lapses: 1,
    };

    const early = scheduleReview(card, true, '2026-09-30');
    expect(early).toEqual({
      ...card,
      lastReviewedDay: '2026-09-30',
      lastResult: 'correct',
      reviews: 4,
    });
  });

  it('still resets on early wrong answers', () => {
    const card: ReviewCard = {
      stage: 3,
      dueDay: '2026-10-20',
      lastReviewedDay: '2026-10-06',
      lastResult: 'correct',
      reviews: 4,
      lapses: 0,
    };
    expect(scheduleReview(card, false, '2026-10-10')).toMatchObject({
      stage: 0,
      dueDay: '2026-10-11',
    });
  });

  it('counts overdue reviews like due ones', () => {
    const overdue: ReviewCard = {
      stage: 1,
      dueDay: '2026-09-01',
      lastReviewedDay: '2026-08-29',
      lastResult: 'correct',
      reviews: 2,
      lapses: 0,
    };
    expect(scheduleReview(overdue, true, '2026-09-28')).toMatchObject({
      stage: 2,
      dueDay: '2026-10-05',
    });
  });
});

describe('deterministic randomness', () => {
  it('produces the same order for the same seed', () => {
    const items = Array.from({ length: 12 }, (_, index) => index);
    const first = shuffle(items, seededRandom(42));
    const second = shuffle(items, seededRandom(42));

    expect(first).toEqual(second);
    expect([...first].sort((a, b) => a - b)).toEqual(items);
    expect(shuffle(items, seededRandom(7))).not.toEqual(first);
    expect(items).toEqual(Array.from({ length: 12 }, (_, index) => index));
  });
});

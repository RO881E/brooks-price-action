import { describe, expect, it } from 'vitest';
import { toCourseOutline } from '../../build/courseOutline';
import { brooksTrendsCourse } from '../content/course';
import { BLITZ_MIN_QUESTIONS, BLITZ_SIZE, blitzQuestions, blitzSummary, timerAnnouncement } from './blitz';
import { completeLesson, createEmptyProgress } from './progress';
import { reviewPool } from './reviewSession';

const course = toCourseOutline(brooksTrendsCourse);
const published = course.units.flatMap((unit) => unit.lessons).filter((lesson) => lesson.status === 'published');
const progress = published
  .slice(0, 12)
  .reduce((state, lesson) => completeLesson(state, lesson.id, lesson.xp, '2026-09-20T08:00:00.000Z'), createEmptyProgress());
const pool = reviewPool(course, progress);

describe('Blitzrunde (Stufe 4c)', () => {
  it('zu wenige Fragen: keine Runde; sonst höchstens 10, deterministisch und ohne Doppelte', () => {
    expect(blitzQuestions(pool.slice(0, BLITZ_MIN_QUESTIONS - 1), 1)).toEqual([]);
    const a = blitzQuestions(pool, 5);
    expect(a).toHaveLength(Math.min(BLITZ_SIZE, pool.length));
    expect(a.map((item) => item.question.id)).toEqual(blitzQuestions(pool, 5).map((item) => item.question.id));
    expect(new Set(a.map((item) => item.question.id)).size).toBe(a.length);
    expect(blitzQuestions(pool, 6).map((item) => item.question.id)).not.toEqual(a.map((item) => item.question.id));
  });

  it('Zeit-Ansagen nur zu wenigen Zeitpunkten', () => {
    const announced = Array.from({ length: 61 }, (_, index) => timerAnnouncement(60 - index)).filter(Boolean);
    expect(announced).toEqual(['Noch 30 Sekunden.', 'Noch 10 Sekunden.', 'Die Zeit ist um.']);
  });

  it('Zusammenfassung zählt nur beantwortete Fragen', () => {
    const results = [
      { item: pool[0], correct: true },
      { item: pool[1], correct: false },
      { item: pool[2], correct: true },
    ];
    expect(blitzSummary(results)).toMatchObject({ answered: 3, correct: 2 });
    expect(blitzSummary(results).wrong).toEqual([results[1]]);
    expect(blitzSummary([])).toEqual({ answered: 0, correct: 0, wrong: [] });
  });
});

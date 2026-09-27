import { describe, expect, it } from 'vitest';
import { brooksTrendsCourse, publishedLessons } from './course';

describe('Brooks course model', () => {
  it('keeps introduction, part introduction and chapter 1 in source order', () => {
    expect(brooksTrendsCourse.units.map((unit) => unit.id)).toEqual([
      'brooks-trends.introduction',
      'brooks-trends.part-01-introduction',
      'brooks-trends.chapter-01',
    ]);
    expect(brooksTrendsCourse.units.map((unit) => unit.order)).toEqual([1, 2, 3]);
  });

  it('uses globally unique stable IDs', () => {
    const ids = [
      brooksTrendsCourse.id,
      ...brooksTrendsCourse.units.flatMap((unit) => [
        unit.id,
        ...unit.lessons.flatMap((lesson) => [
          lesson.id,
          ...lesson.steps.map((step) => step.id),
        ]),
      ]),
    ];

    expect(new Set(ids).size).toBe(ids.length);
  });

  it('validates every published question and lesson', () => {
    for (const lesson of publishedLessons) {
      expect(lesson.steps.length).toBeGreaterThanOrEqual(3);
      expect(lesson.durationMinutes).toBeGreaterThan(0);
      expect(lesson.xp).toBeGreaterThan(0);

      for (const step of lesson.steps) {
        if (step.type !== 'question') continue;
        expect(step.options.some((option) => option.id === step.correctOptionId)).toBe(true);
        expect(new Set(step.options.map((option) => option.id)).size).toBe(step.options.length);
      }
    }
  });

  it('does not claim fewer estimated lessons than are already modeled', () => {
    for (const unit of brooksTrendsCourse.units) {
      expect(unit.estimatedLessonCount).toBeGreaterThanOrEqual(unit.lessons.length);
    }
  });
});

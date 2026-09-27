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

  it('publishes the complete source-mapped introduction as 22 micro-lessons', () => {
    const introduction = brooksTrendsCourse.units[0];

    expect(introduction.estimatedLessonCount).toBe(22);
    expect(introduction.lessons).toHaveLength(22);
    expect(
      introduction.lessons.every((lesson) => lesson.status === 'published'),
    ).toBe(true);

    for (const lesson of introduction.lessons) {
      expect(lesson.sourceAnchors?.length).toBeGreaterThan(0);
    }
  });

  it('places strength and bar counting before the Part I HFT source unit', () => {
    const introduction = brooksTrendsCourse.units[0];
    const partIntroduction = brooksTrendsCourse.units[1];

    expect(introduction.lessons.map((lesson) => lesson.title)).toEqual(
      expect.arrayContaining([
        'Stärke eines Trends lesen',
        'Stärke eines Breakouts lesen',
        'High 1 und High 2 richtig zählen',
        'Low 1 bis Low 4 spiegeln die Logik',
      ]),
    );
    expect(
      introduction.lessons.findIndex(
        (lesson) => lesson.title === 'Stärke eines Trends lesen',
      ),
    ).toBeLessThan(
      introduction.lessons.findIndex(
        (lesson) => lesson.title === 'High 1 und High 2 richtig zählen',
      ),
    );
    expect(partIntroduction.title).toContain('High-Frequency Trading');
    expect(
      partIntroduction.lessons.every((lesson) => lesson.status === 'planned'),
    ).toBe(true);
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

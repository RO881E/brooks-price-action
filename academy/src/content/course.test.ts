import { describe, expect, it } from 'vitest';
import { brooksTrendsCourse, publishedLessons } from './course';

describe('Brooks course model', () => {
  it('keeps introduction, part introduction and chapters 1–7 in source order', () => {
    expect(brooksTrendsCourse.units.map((unit) => unit.id)).toEqual([
      'brooks-trends.introduction',
      'brooks-trends.part-01-introduction',
      'brooks-trends.chapter-01',
      'brooks-trends.chapter-02',
      'brooks-trends.chapter-03',
      'brooks-trends.chapter-04',
      'brooks-trends.chapter-05',
      'brooks-trends.chapter-06',
      'brooks-trends.chapter-07',
    ]);
    expect(brooksTrendsCourse.units.map((unit) => unit.order)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
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

  it('places the complete introduction before the complete Part I source unit', () => {
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
    expect(partIntroduction.title).toContain('Price Action');
    expect(partIntroduction.estimatedLessonCount).toBe(24);
    expect(partIntroduction.lessons).toHaveLength(24);
    expect(
      partIntroduction.lessons.every((lesson) => lesson.status === 'published'),
    ).toBe(true);
    expect(
      partIntroduction.lessons.every(
        (lesson) => (lesson.sourceAnchors?.length ?? 0) >= 3,
      ),
    ).toBe(true);
    expect(partIntroduction.lessons.at(0)?.title).toBe(
      'Price Action beginnt beim kleinsten Schritt',
    );
    expect(partIntroduction.lessons.at(-1)?.title).toBe(
      'So trainierst du Price Action wirklich',
    );
  });

  it('publishes chapter 1 as eight source-ordered micro-lessons', () => {
    const chapterOne = brooksTrendsCourse.units[2];

    expect(chapterOne.estimatedLessonCount).toBe(8);
    expect(chapterOne.lessons).toHaveLength(8);
    expect(
      chapterOne.lessons.every((lesson) => lesson.status === 'published'),
    ).toBe(true);
    expect(
      chapterOne.lessons.every(
        (lesson) => (lesson.sourceAnchors?.length ?? 0) >= 3,
      ),
    ).toBe(true);
    expect(chapterOne.lessons.at(0)?.title).toBe(
      'Ein Spektrum, keine zwei Schubladen',
    );
    expect(chapterOne.lessons.at(-1)?.title).toBe(
      'Die Falle vor der Trendwiederaufnahme',
    );
  });

  it('publishes chapter 2 as twenty source-ordered micro-lessons', () => {
    const chapterTwo = brooksTrendsCourse.units[3];

    expect(chapterTwo.estimatedLessonCount).toBe(20);
    expect(chapterTwo.lessons).toHaveLength(20);
    expect(
      chapterTwo.lessons.every((lesson) => lesson.status === 'published'),
    ).toBe(true);
    expect(
      chapterTwo.lessons.every(
        (lesson) => (lesson.sourceAnchors?.length ?? 0) >= 3,
      ),
    ).toBe(true);
    expect(chapterTwo.lessons.at(0)?.title).toBe(
      'Trendbar oder Ein-Bar-Range',
    );
    expect(chapterTwo.lessons.at(5)?.title).toBe(
      'Follow-through entscheidet den Spike',
    );
    expect(chapterTwo.lessons.at(11)?.title).toBe(
      'Dojis können gemeinsam trenden',
    );
    expect(chapterTwo.lessons.at(-1)?.title).toBe(
      'Chartfall 2.6: Vom Trend in die Trading Range',
    );
  });

  it('publishes chapter 3 as twenty-five source-ordered micro-lessons', () => {
    const chapterThree = brooksTrendsCourse.units[4];

    expect(chapterThree.estimatedLessonCount).toBe(25);
    expect(chapterThree.lessons).toHaveLength(25);
    expect(
      chapterThree.lessons.every((lesson) => lesson.status === 'published'),
    ).toBe(true);
    expect(
      chapterThree.lessons.every(
        (lesson) => (lesson.sourceAnchors?.length ?? 0) >= 3,
      ),
    ).toBe(true);
    expect(chapterThree.lessons.at(0)?.title).toBe(
      'Ein Breakout beginnt als Kontrollwechsel',
    );
    expect(chapterThree.lessons.at(2)?.title).toBe(
      'Im Kanal wird der Handel schrittweise zweiseitig',
    );
    expect(chapterThree.lessons.at(8)?.title).toBe(
      'Testzonen entstehen aus mehreren Erinnerungsebenen',
    );
    expect(chapterThree.lessons.at(13)?.title).toBe(
      'Chartfall 3.1: Jeder Swing testet eine alte Entscheidung',
    );
    expect(chapterThree.lessons.at(18)?.title).toBe(
      'Chartfall 3.1: Bar 9 verteidigt den Long-Einstand',
    );
    expect(chapterThree.lessons.at(23)?.title).toBe(
      'Chartfall 3.1: Mehrere Flags liegen ineinander',
    );
    expect(chapterThree.lessons.at(-1)?.title).toBe(
      'Chartfall 3.1: Der komplette Spike-and-Channel-Plan',
    );

    const diagramScenarios = chapterThree.lessons.flatMap((lesson) =>
      lesson.steps
        .filter((step) => step.type === 'diagram')
        .map((step) => step.scenario),
    );
    expect(diagramScenarios).toHaveLength(25);
    expect(new Set(diagramScenarios).size).toBe(25);
  });

  it('publishes chapter 4 as twenty-five source-ordered micro-lessons', () => {
    const chapterFour = brooksTrendsCourse.units[5];

    expect(chapterFour.estimatedLessonCount).toBe(25);
    expect(chapterFour.lessons).toHaveLength(25);
    expect(
      chapterFour.lessons.every((lesson) => lesson.status === 'published'),
    ).toBe(true);
    expect(
      chapterFour.lessons.every(
        (lesson) => (lesson.sourceAnchors?.length ?? 0) >= 3,
      ),
    ).toBe(true);
    expect(chapterFour.lessons.at(0)?.title).toBe(
      'Ein Setup ist eine Möglichkeit, noch kein Signal',
    );
    expect(chapterFour.lessons.at(5)?.title).toBe(
      'Fortsetzungssignale brauchen Initiative und Anschluss',
    );
    expect(chapterFour.lessons.at(10)?.title).toBe(
      'ii und iii verschachteln die Kompression',
    );
    expect(chapterFour.lessons.at(17)?.title).toBe(
      'Shaved Bars und Swing-Struktur ergänzen die Setups',
    );
    expect(chapterFour.lessons.at(20)?.title).toBe(
      'Eine nicht ausgelöste Order wird gestrichen',
    );
    expect(chapterFour.lessons.at(-1)?.title).toBe(
      'Chartfall 4.1: Fill, Follow-through und die Setups 4–5',
    );

    const diagramScenarios = chapterFour.lessons.flatMap((lesson) =>
      lesson.steps
        .filter((step) => step.type === 'diagram')
        .map((step) => step.scenario),
    );
    expect(diagramScenarios).toHaveLength(25);
    expect(new Set(diagramScenarios).size).toBe(25);
  });

  it('publishes chapter 5 with 25 source-ordered lessons and distinct charts', () => {
    const chapterFive = brooksTrendsCourse.units[6];

    expect(chapterFive.estimatedLessonCount).toBe(25);
    expect(chapterFive.lessons).toHaveLength(25);
    expect(chapterFive.lessons.every((lesson) => lesson.status === 'published')).toBe(true);
    expect(chapterFive.lessons.every((lesson) => (lesson.sourceAnchors?.length ?? 0) >= 3)).toBe(true);
    expect(chapterFive.lessons.at(0)?.title).toBe('Eine Reversal-Bar ist ein Versuch, keine Trendwende');
    expect(chapterFive.lessons.at(17)?.title).toContain('Chartfall 5.1');
    expect(chapterFive.lessons.at(19)?.title).toContain('Chartfall 5.2');
    expect(chapterFive.lessons.at(21)?.title).toContain('Chartfall 5.3');
    expect(chapterFive.lessons.at(-1)?.title).toBe('Drei Reversal-Bars, drei Entscheidungen');

    const scenarios = chapterFive.lessons.flatMap((lesson) =>
      lesson.steps.filter((step) => step.type === 'diagram').map((step) => step.scenario),
    );
    expect(scenarios).toHaveLength(25);
    expect(new Set(scenarios).size).toBe(25);
    for (const lesson of chapterFive.lessons) {
      expect(lesson.steps.filter((step) => step.type === 'question')).toHaveLength(1);
      expect(lesson.steps.find((step) => step.type === 'explanation')?.paragraphs.length).toBeGreaterThanOrEqual(3);
    }
  });

  it('publishes chapter 6 with foundational rules and all 19 chart cases', () => {
    const chapterSix = brooksTrendsCourse.units[7];
    expect(chapterSix.estimatedLessonCount).toBe(40);
    expect(chapterSix.lessons).toHaveLength(40);
    expect(chapterSix.lessons.every((lesson) => lesson.status === 'published')).toBe(true);
    expect(chapterSix.lessons.at(0)?.title).toBe('Ein Signal-Bar entsteht erst durch die Auslösung');
    expect(chapterSix.lessons.at(19)?.sourceUnit).toContain('Chartfall 6.1');
    expect(chapterSix.lessons.at(-1)?.sourceUnit).toContain('Chartfall 6.19');

    const cases = chapterSix.lessons.slice(19);
    const figureNumbers = cases.map((lesson) => {
      const figure = lesson.sourceAnchors?.[0]?.match(/^Abbildung 6\.(\d+)/);
      expect(figure).not.toBeNull();
      return Number(figure?.[1]);
    });
    expect([...new Set(figureNumbers)]).toEqual(Array.from({ length: 19 }, (_, i) => i + 1));
    expect(figureNumbers).toEqual([...figureNumbers].sort((a, b) => a - b));

    for (const [index, lesson] of chapterSix.lessons.entries()) {
      expect(lesson.id).toBe(`brooks-trends.chapter-06.lesson-${String(index + 1).padStart(2, '0')}`);
      expect(lesson.sourceAnchors).toHaveLength(3);
      expect(lesson.steps.map((step) => step.type)).toEqual(['explanation', 'diagram', 'question', 'recap']);
      expect(lesson.steps.find((step) => step.type === 'explanation')?.paragraphs).toHaveLength(3);
      expect(lesson.steps.find((step) => step.type === 'diagram')?.observations).toHaveLength(3);
    }
  });

  it('publishes chapter 7 with four complete chart discussions', () => {
    const chapterSeven = brooksTrendsCourse.units[8];
    expect(chapterSeven.estimatedLessonCount).toBe(24);
    expect(chapterSeven.lessons).toHaveLength(24);
    expect(publishedLessons).toHaveLength(213);
    expect(chapterSeven.lessons.every((lesson) => lesson.status === 'published')).toBe(true);
    expect(chapterSeven.lessons.at(0)?.title).toBe('Ein Outside-Bar umfasst seinen Vorgänger');
    expect(chapterSeven.lessons.at(11)?.sourceUnit).toContain('Chartfall 7.1');
    expect(chapterSeven.lessons.at(-1)?.sourceUnit).toContain('Chartfall 7.4');

    const cases = chapterSeven.lessons.slice(11);
    const figures = cases.map((lesson) => {
      const number = lesson.sourceAnchors?.[0]?.match(/^Abbildung 7\.(\d+)/)?.[1];
      expect(number).toBeDefined();
      return Number(number);
    });
    expect([...new Set(figures)]).toEqual([1, 2, 3, 4]);
    expect(figures).toEqual([...figures].sort((a, b) => a - b));

    const scenarios = chapterSeven.lessons.flatMap((lesson) =>
      lesson.steps.filter((step) => step.type === 'diagram').map((step) => step.scenario),
    );
    expect(new Set(scenarios).size).toBe(24);
    for (const [index, lesson] of chapterSeven.lessons.entries()) {
      expect(lesson.id).toBe(`brooks-trends.chapter-07.lesson-${String(index + 1).padStart(2, '0')}`);
      expect(lesson.sourceAnchors).toHaveLength(3);
      expect(lesson.steps.map((step) => step.type)).toEqual(['explanation', 'diagram', 'question', 'recap']);
      expect(lesson.steps.find((step) => step.type === 'explanation')?.paragraphs).toHaveLength(3);
      expect(lesson.steps.find((step) => step.type === 'diagram')?.observations).toHaveLength(3);
    }
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

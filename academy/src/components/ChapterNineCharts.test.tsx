import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { chapterNineLessons } from '../content/courses/price-action-trends/chapter-09';
import { CHAPTER_NINE_SCENARIOS } from '../content/types';
import { chapterNineCharts } from './ChapterNineCharts';
import { LearningChart } from './LearningChart';

afterEach(cleanup);

describe('chapter nine teaching charts', () => {
  it('renders one accessible original schematic per lesson', () => {
    const scenarios = chapterNineLessons.flatMap((lesson) =>
      lesson.steps.filter((step) => step.type === 'diagram').map((step) => step.scenario),
    );
    expect(scenarios).toEqual([...CHAPTER_NINE_SCENARIOS]);
    for (const scenario of scenarios) {
      const definition = chapterNineCharts[scenario as keyof typeof chapterNineCharts];
      expect(definition.description.length).toBeGreaterThan(60);
      const { container } = render(<LearningChart scenario={scenario} title={definition.heading} />);
      expect(container.querySelector('g.chapter-nine-chart')?.textContent).toContain(definition.heading);
      expect(container.querySelector('svg[role="img"] desc')?.textContent).toBe(definition.description);
      cleanup();
    }
  });

  it('compares valid bars and preserves the key directional relationships', () => {
    for (const definition of Object.values(chapterNineCharts)) {
      for (const panel of definition.panels) {
        for (const [open, high, low, close] of panel.bars) {
          expect(high).toBeGreaterThanOrEqual(Math.max(open, close));
          expect(low).toBeLessThanOrEqual(Math.min(open, close));
          expect(low).toBeGreaterThanOrEqual(0);
          expect(high).toBeLessThanOrEqual(100);
        }
      }
    }
    const [bars, line] = chapterNineCharts['c09-view-choice'].panels;
    expect(bars.bars.map((bar) => bar[3])).toEqual(line.bars.map((bar) => bar[3]));

    const [holding, failing] = chapterNineCharts['c09-failed-breakout'].panels;
    expect(holding.bars.at(-1)![3]).toBeGreaterThan(holding.level![0]);
    expect(failing.bars.at(-2)![3]).toBeGreaterThan(failing.level![0]);
    expect(failing.bars.at(-1)![3]).toBeLessThan(failing.level![0]);

    const [spy, emini] = chapterNineCharts['c09-figure-92-gap'].panels;
    expect(spy.bars[0][0] - spy.level![0]).toBeGreaterThan(emini.bars[0][0] - emini.level![0]);
    for (const index of [1, 2, 3, 4, 5, 6]) {
      const spyMove = spy.bars[index][3] - spy.bars[index - 1][3];
      const eminiMove = emini.bars[index][3] - emini.bars[index - 1][3];
      expect(Math.sign(spyMove)).toBe(Math.sign(eminiMove));
    }
  });
});

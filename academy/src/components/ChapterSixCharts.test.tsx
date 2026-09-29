import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { chapterSixLessons } from '../content/courses/brooks-trends/chapter-06';
import { CHAPTER_SIX_SCENARIOS } from '../content/types';
import { ChapterSixChart, chapterSixCharts } from './ChapterSixCharts';
import { LearningChart } from './LearningChart';

afterEach(cleanup);

describe('chapter six charts', () => {
  const scenarios = chapterSixLessons.flatMap((lesson) =>
    lesson.steps.filter((step) => step.type === 'diagram').map((step) => step.scenario),
  );

  it('covers every lesson with readable original two-panel sketches', () => {
    expect(scenarios).toHaveLength(40);
    expect(new Set(scenarios).size).toBe(38);
    expect(Object.keys(chapterSixCharts).sort()).toEqual([...CHAPTER_SIX_SCENARIOS].sort());
    for (const scenario of new Set(scenarios)) {
      const definition = chapterSixCharts[scenario as keyof typeof chapterSixCharts];
      expect(definition.description.length).toBeGreaterThan(55);
      expect(definition.panels).toHaveLength(2);
      const { container } = render(<LearningChart scenario={scenario} title={definition.heading} />);
      const drawing = container.querySelector('g.chapter-six-chart');
      expect(drawing?.querySelectorAll('rect.candle-body').length).toBeGreaterThan(5);
      expect(drawing?.textContent).toContain(definition.heading);
      expect(container.querySelector('svg[role="img"] desc')?.textContent).toBe(definition.description);
      cleanup();
    }
  });

  it('draws valid OHLC bars and only highlights bars in each panel', () => {
    for (const definition of Object.values(chapterSixCharts)) {
      for (const panel of definition.panels) {
        for (const [open, high, low, close] of panel.bars) {
          expect(high).toBeGreaterThanOrEqual(Math.max(open, close));
          expect(low).toBeLessThanOrEqual(Math.min(open, close));
          expect(low).toBeGreaterThanOrEqual(0);
          expect(high).toBeLessThanOrEqual(100);
        }
        for (const index of panel.focus ?? []) {
          expect(index).toBeGreaterThanOrEqual(0);
          expect(index).toBeLessThan(panel.bars.length);
        }
        if (panel.range) expect(panel.range[1]).toBeGreaterThan(panel.range[0]);
      }
    }
  });

  it('does not render a chapter six group for an earlier scenario', () => {
    const { container } = render(<svg viewBox="0 0 760 330"><ChapterSixChart scenario="setup-direction" /></svg>);
    expect(container.querySelector('.chapter-six-chart')).toBeNull();
  });
});

import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { chapterEightLessons } from '../content/courses/brooks-trends/chapter-08';
import { CHAPTER_EIGHT_SCENARIOS } from '../content/types';
import { ChapterEightChart, chapterEightCharts } from './ChapterEightCharts';
import { LearningChart } from './LearningChart';

afterEach(cleanup);

describe('chapter eight charts', () => {
  const scenarios = chapterEightLessons.flatMap((lesson) =>
    lesson.steps.filter((step) => step.type === 'diagram').map((step) => step.scenario),
  );

  it('renders a separate accessible teaching chart for each lesson', () => {
    expect(scenarios).toHaveLength(12);
    expect(new Set(scenarios).size).toBe(12);
    expect(Object.keys(chapterEightCharts).sort()).toEqual([...CHAPTER_EIGHT_SCENARIOS].sort());
    for (const scenario of scenarios) {
      const definition = chapterEightCharts[scenario as keyof typeof chapterEightCharts];
      expect(definition.description.length).toBeGreaterThan(55);
      expect(definition.panels).toHaveLength(2);
      const { container } = render(<LearningChart scenario={scenario} title={definition.heading} />);
      const drawing = container.querySelector('g.chapter-eight-chart');
      expect(drawing?.textContent).toContain(definition.heading);
      expect(drawing?.querySelectorAll('rect.candle-body').length).toBeGreaterThan(2);
      expect(container.querySelector('svg[role="img"] desc')?.textContent).toBe(definition.description);
      cleanup();
    }
  });

  it('uses valid OHLC values, focus indexes and structural levels', () => {
    for (const definition of Object.values(chapterEightCharts)) {
      for (const panel of definition.panels) {
        for (const [open, high, low, close] of panel.bars) {
          expect(high).toBeGreaterThanOrEqual(Math.max(open, close));
          expect(low).toBeLessThanOrEqual(Math.min(open, close));
          expect(low).toBeGreaterThanOrEqual(0);
          expect(high).toBeLessThanOrEqual(100);
        }
        for (const index of panel.focus) {
          expect(index).toBeGreaterThanOrEqual(0);
          expect(index).toBeLessThan(panel.bars.length);
        }
        if (panel.level) expect(panel.level[0]).toBeGreaterThanOrEqual(0);
      }
    }
  });

  it('shows the late close, the two stop distances and an actual outside bar', () => {
    const [early, final] = chapterEightCharts['c08-early-entry'].panels;
    expect(early.bars.at(-1)?.[1]).toBe(final.bars.at(-1)?.[1]);
    expect(early.bars.at(-1)![3]).toBeGreaterThan(final.bars.at(-1)![3]);
    const [tight, wide] = chapterEightCharts['c08-figure-stopout'].panels;
    expect(tight.bars[3][2]).toBeLessThan(tight.level![0]);
    expect(wide.bars[3][2]).toBeGreaterThan(wide.level![0]);
    const recovery = chapterEightCharts['c08-figure-recovery'].panels[0].bars;
    expect(recovery[3][1]).toBeGreaterThan(recovery[2][1]);
    expect(recovery[3][2]).toBeLessThan(recovery[2][2]);
  });

  it('does not render chapter eight for another scenario', () => {
    const { container } = render(<svg viewBox="0 0 760 330"><ChapterEightChart scenario="c07-boundaries" /></svg>);
    expect(container.querySelector('.chapter-eight-chart')).toBeNull();
  });
});

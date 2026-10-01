import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { chapterSevenLessons } from '../content/courses/price-action-trends/chapter-07';
import { CHAPTER_SEVEN_SCENARIOS } from '../content/types';
import { ChapterSevenChart, chapterSevenCharts } from './ChapterSevenCharts';
import { LearningChart } from './LearningChart';

afterEach(cleanup);

describe('chapter seven charts', () => {
  const scenarios = chapterSevenLessons.flatMap((lesson) =>
    lesson.steps.filter((step) => step.type === 'diagram').map((step) => step.scenario),
  );

  it('renders an accessible original two-panel drawing for each lesson', () => {
    expect(scenarios).toHaveLength(24);
    expect(new Set(scenarios).size).toBe(24);
    expect(Object.keys(chapterSevenCharts).sort()).toEqual([...CHAPTER_SEVEN_SCENARIOS].sort());
    for (const scenario of scenarios) {
      const definition = chapterSevenCharts[scenario as keyof typeof chapterSevenCharts];
      expect(definition.description.length).toBeGreaterThan(55);
      expect(definition.panels).toHaveLength(2);
      const { container } = render(<LearningChart scenario={scenario} title={definition.heading} />);
      const drawing = container.querySelector('g.chapter-seven-chart');
      expect(drawing?.querySelectorAll('rect.candle-body').length).toBeGreaterThan(5);
      expect(drawing?.textContent).toContain(definition.heading);
      expect(container.querySelector('svg[role="img"] desc')?.textContent).toBe(definition.description);
      cleanup();
    }
  });

  it('uses valid bars and existing focus indexes throughout', () => {
    for (const definition of Object.values(chapterSevenCharts)) {
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
        if (panel.range) expect(panel.range[1]).toBeGreaterThan(panel.range[0]);
      }
    }
  });

  it('distinguishes a true outside bar and the inside-outside-inside sequence', () => {
    const [outer, oneSided] = chapterSevenCharts['c07-boundaries'].panels;
    expect(outer.bars[1][1]).toBeGreaterThan(outer.bars[0][1]);
    expect(outer.bars[1][2]).toBeLessThan(outer.bars[0][2]);
    expect(oneSided.bars[1][2]).toBeGreaterThan(oneSided.bars[0][2]);

    const bars = chapterSevenCharts['c07-ioi-context'].panels[0].bars;
    expect(bars[1][1]).toBeLessThan(bars[0][1]);
    expect(bars[1][2]).toBeGreaterThan(bars[0][2]);
    expect(bars[2][1]).toBeGreaterThan(bars[1][1]);
    expect(bars[2][2]).toBeLessThan(bars[1][2]);
    expect(bars[3][1]).toBeLessThan(bars[2][1]);
    expect(bars[3][2]).toBeGreaterThan(bars[2][2]);
  });

  it('does not draw chapter seven for an earlier chart', () => {
    const { container } = render(<svg viewBox="0 0 760 330"><ChapterSevenChart scenario="setup-direction" /></svg>);
    expect(container.querySelector('.chapter-seven-chart')).toBeNull();
  });
});

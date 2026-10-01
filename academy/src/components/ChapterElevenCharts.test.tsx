import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { chapterElevenLessons } from '../content/courses/price-action-trends/chapter-11';
import { CHAPTER_ELEVEN_SCENARIOS } from '../content/types';
import { chapterElevenCharts } from './ChapterElevenCharts';
import { LearningChart } from './LearningChart';

afterEach(cleanup);

describe('chapter eleven teaching charts', () => {
  it('renders an accessible diagram for every new lesson', () => {
    const scenarios = chapterElevenLessons.flatMap((lesson) =>
      lesson.steps.filter((step) => step.type === 'diagram').map((step) => step.scenario));
    expect(scenarios).toEqual([...CHAPTER_ELEVEN_SCENARIOS]);
    for (const scenario of scenarios) {
      const definition = chapterElevenCharts[scenario as keyof typeof chapterElevenCharts];
      const { container } = render(<LearningChart scenario={scenario} title={definition.heading} />);
      expect(container.querySelector('g.chapter-eleven-chart')?.textContent).toContain(definition.heading);
      expect(container.querySelector('svg[role="img"] desc')?.textContent).toBe(definition.description);
      cleanup();
    }
  });

  it('uses valid OHLC data and depicts the named structural differences', () => {
    for (const definition of Object.values(chapterElevenCharts)) {
      for (const panel of definition.panels) {
        for (const [open, high, low, close] of panel.bars) {
          expect(high).toBeGreaterThanOrEqual(Math.max(open, close));
          expect(low).toBeLessThanOrEqual(Math.min(open, close));
          expect(low).toBeGreaterThanOrEqual(0);
          expect(high).toBeLessThanOrEqual(100);
        }
      }
    }
    const inside = chapterElevenCharts['c11-inside-signal'].panels[0].bars;
    expect(inside[2][1]).toBeLessThan(inside[1][1]);
    expect(inside[2][2]).toBeGreaterThan(inside[1][2]);
    const [contact, gap] = chapterElevenCharts['c11-ma-gap'].panels;
    expect(contact.bars[0][2]).toBe(contact.level![0]);
    expect(gap.bars.at(-1)![1]).toBeLessThan(gap.level![0]);
    const trend = chapterElevenCharts['c11-twenty-gap'].panels[0];
    expect(trend.bars).toHaveLength(20);
    expect(trend.bars.every((bar) => bar[2] > trend.level![0])).toBe(true);
    const [early, late] = chapterElevenCharts['c11-risk-size'].panels;
    expect(late.bars.at(-1)![3] - late.level![0]).toBe(3 * (early.bars.at(-1)![3] - early.level![0]));
  });
});

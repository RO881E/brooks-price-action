import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { chapterTwelveLessons } from '../content/courses/price-action-trends/chapter-12';
import { CHAPTER_TWELVE_SCENARIOS } from '../content/types';
import { chapterTwelveCharts } from './ChapterTwelveCharts';
import { LearningChart } from './LearningChart';

afterEach(cleanup);

describe('chapter twelve teaching charts', () => {
  it('renders every lesson diagram with its own accessible description', () => {
    const scenarios = chapterTwelveLessons.flatMap((lesson) =>
      lesson.steps.filter((step) => step.type === 'diagram').map((step) => step.scenario));
    expect(scenarios).toEqual([...CHAPTER_TWELVE_SCENARIOS]);
    for (const scenario of scenarios) {
      const definition = chapterTwelveCharts[scenario as keyof typeof chapterTwelveCharts];
      const { container } = render(<LearningChart scenario={scenario} title={definition.heading} />);
      expect(container.querySelector('g.chapter-twelve-chart')?.textContent).toContain(definition.heading);
      expect(container.querySelector('svg[role="img"] desc')?.textContent).toBe(definition.description);
      cleanup();
    }
  });

  it('uses valid OHLC data and shows expansion, reversal and opening gap as described', () => {
    for (const definition of Object.values(chapterTwelveCharts)) {
      for (const panel of definition.panels) {
        for (const [open, high, low, close] of panel.bars) {
          expect(high).toBeGreaterThanOrEqual(Math.max(open, close));
          expect(low).toBeLessThanOrEqual(Math.min(open, close));
          expect(low).toBeGreaterThanOrEqual(0);
          expect(high).toBeLessThanOrEqual(100);
        }
        expect(panel.focus?.every((index) => index >= 0 && index < panel.bars.length)).toBe(true);
      }
    }
    const [five, seven] = chapterTwelveCharts['c12-expanding-triangle'].panels;
    expect(five.bars).toHaveLength(6); // Six endpoints, five alternating legs.
    expect(seven.bars).toHaveLength(8);
    expect(seven.bars.slice(0, 6)).toEqual(five.bars);
    const closes = seven.bars.map((bar) => bar[3]);
    expect(closes[1]).toBeLessThan(closes[3]);
    expect(closes[3]).toBeLessThan(closes[5]);
    expect(closes[5]).toBeLessThan(closes[7]);
    expect(closes[2]).toBeGreaterThan(closes[4]);
    expect(closes[4]).toBeGreaterThan(closes[6]);

    const [trigger, failed] = chapterTwelveCharts['c12-trapped-orders'].panels;
    expect(trigger.bars.at(-1)![3]).toBeGreaterThan(trigger.level![0]);
    expect(failed.bars.at(-1)![3]).toBeLessThan(failed.level![0]);
    const [previous, opening] = chapterTwelveCharts['c12-122-gap-reversal'].panels;
    expect(opening.bars[0][1]).toBeLessThan(previous.bars.at(-1)![2]);
    expect(opening.bars.slice(0, 3).every((bar) => bar[3] > bar[0])).toBe(true);

    const [earlySpike, laterSpike] = chapterTwelveCharts['c12-122-two-readings'].panels;
    expect(earlySpike.bars).toEqual(laterSpike.bars);
    expect(earlySpike.focus).not.toEqual(laterSpike.focus);
  });
});

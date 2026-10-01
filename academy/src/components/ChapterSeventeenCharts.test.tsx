import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { chapterSeventeenLessons } from '../content/courses/price-action-trends/chapter-17';
import { CHAPTER_SEVENTEEN_SCENARIOS } from '../content/types';
import { chapterSeventeenCharts } from './ChapterSeventeenCharts';
import { LearningChart } from './LearningChart';

afterEach(cleanup);

describe('chapter seventeen price-level charts', () => {
  it('renders every published lesson through the shared chart with its accessible description', () => {
    const scenarios = chapterSeventeenLessons.flatMap((lesson) =>
      lesson.steps.filter((step) => step.type === 'diagram').map((step) => step.scenario));
    expect(scenarios).toEqual([...CHAPTER_SEVENTEEN_SCENARIOS]);
    for (const id of CHAPTER_SEVENTEEN_SCENARIOS) {
      const definition = chapterSeventeenCharts[id];
      const { container } = render(<LearningChart scenario={id} title={definition.heading} />);
      expect(container.querySelector('g.chapter-seventeen-chart')?.textContent).toContain(definition.heading);
      expect(container.querySelector('svg[role="img"] desc')?.textContent).toBe(definition.description);
      expect(container.querySelectorAll('.c17-teaching-line')).toHaveLength(
        definition.panels.reduce((count, panel) => count + panel.lines.length, 0));
      cleanup();
    }
  });

  it('uses horizontal price references, valid OHLC data and visible endpoints', () => {
    for (const definition of Object.values(chapterSeventeenCharts)) {
      for (const panel of definition.panels) {
        for (const [open, high, low, close] of panel.bars) {
          expect(low).toBeLessThanOrEqual(Math.min(open, close));
          expect(high).toBeGreaterThanOrEqual(Math.max(open, close));
          expect(low).toBeGreaterThanOrEqual(0);
          expect(high).toBeLessThanOrEqual(100);
        }
        for (const line of panel.lines) {
          if (line.kind === 'reference') expect(line.start[1]).toBe(line.end[1]);
          for (const [index, price] of [line.start, line.end]) {
            expect(index).toBeGreaterThanOrEqual(0);
            expect(index).toBeLessThan(panel.bars.length);
            expect(price).toBeGreaterThanOrEqual(0);
            expect(price).toBeLessThanOrEqual(100);
          }
        }
        expect(panel.focus.every((index) => index >= 0 && index < panel.bars.length)).toBe(true);
      }
    }
  });

  it('shows genuine higher-high and lower-low failures at unchanged references', () => {
    const high = chapterSeventeenCharts['c17-04'].panels[1];
    const low = chapterSeventeenCharts['c17-05'].panels[1];
    expect(high.bars[5][1]).toBe(76);
    expect(high.bars[5][3]).toBeLessThan(70);
    expect(high.bars[6][3]).toBeLessThan(high.bars[5][3]);
    expect(low.bars[5][2]).toBe(24);
    expect(low.bars[5][3]).toBeGreaterThan(30);
    expect(low.bars[6][3]).toBeGreaterThan(low.bars[5][3]);
    high.bars.forEach((bar, index) => {
      const [open, hi, lo, close] = bar;
      expect(low.bars[index]).toEqual([100 - open, 100 - lo, 100 - hi, 100 - close]);
    });
  });

  it('separates attempts and depicts actual High 2 after an interrupted first attempt', () => {
    const upper = chapterSeventeenCharts['c17-06'].panels[1].bars;
    expect(upper[4][1]).toBeGreaterThan(70);
    expect(upper[5][3]).toBeLessThan(70);
    expect(upper[7][1]).toBeGreaterThan(upper[4][1]);
    expect(upper[8][3]).toBeLessThan(70);
    const h2 = chapterSeventeenCharts['c17-16'].panels[1].bars;
    expect(h2[6][1]).toBeGreaterThan(h2[5][1]);
    expect(h2[7][2]).toBeLessThan(h2[6][2]);
    expect(h2[8][1]).toBeGreaterThan(h2[7][1]);
    expect(h2[9][3]).toBeGreaterThan(h2[8][3]);
  });

  it('distinguishes local lower lows from the larger higher low and preserves replay prefixes', () => {
    const [before, after] = chapterSeventeenCharts['c17-20'].panels;
    expect(after.bars.slice(0, before.bars.length)).toEqual(before.bars);
    expect([3, 5, 7].map((i) => before.bars[i][2])).toEqual([58, 56, 54]);
    expect(before.bars[0][2]).toBe(30);
    for (const i of [3, 5, 7]) expect(before.bars[i][2]).toBeGreaterThan(30);
    const [known, tested] = chapterSeventeenCharts['c17-12'].panels;
    expect(tested.bars.slice(0, known.bars.length)).toEqual(known.bars);
    expect(known.lines[0].start[1]).toBe(tested.lines[0].start[1]);
    expect((68 - 50) / (78 - 68)).toBe(1.8);
    expect((54 - 50) / (78 - 54)).toBeLessThan(1.8);
  });

  it('computes averages from actual close histories and shows a first later contact', () => {
    for (const [id, history, period] of [
      ['c17-22', [13, 15, 17, 19, 21, 23, 25, 27, 29, 31], 10],
      ['c17-27', [6, 10, 14, 18], 5],
    ] as const) {
      chapterSeventeenCharts[id].panels.forEach((panel, panelIndex) => {
        const seed = id === 'c17-22' && panelIndex === 1 ? history.map((v) => 100 - v) : [...history];
        const closes = [...seed, ...panel.bars.map((bar) => bar[3])];
        const averageAt = (index: number) => {
          const end = seed.length + index + 1;
          return closes.slice(end - period, end).reduce((sum, value) => sum + value, 0) / period;
        };
        for (const line of panel.lines) {
          expect(line.kind).toBe('average');
          expect(line.start[1]).toBeCloseTo(averageAt(line.start[0]));
          expect(line.end[1]).toBeCloseTo(averageAt(line.end[0]));
        }
        if (id === 'c17-22') {
          expect(panel.bars).toHaveLength(20);
          panel.bars.forEach((bar, index) => {
            if (panelIndex === 0) expect(bar[2]).toBeGreaterThan(averageAt(index));
            else expect(bar[1]).toBeLessThan(averageAt(index));
          });
        } else {
          for (let i = 0; i < 6; i += 1) expect(panel.bars[i][2]).toBeGreaterThan(averageAt(i));
          expect(panel.bars[6][2]).toBeLessThanOrEqual(averageAt(6));
          expect(panel.bars[6][1]).toBeGreaterThanOrEqual(averageAt(6));
        }
      });
    }
  });
});

import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { chapterFourteenLessons } from '../content/courses/price-action-trends/chapter-14';
import { CHAPTER_FOURTEEN_SCENARIOS } from '../content/types';
import { chapterFourteenCharts, type TeachingLine } from './ChapterFourteenCharts';
import { LearningChart } from './LearningChart';

afterEach(cleanup);
const slope = (line: TeachingLine) => (line.end[1] - line.start[1]) / (line.end[0] - line.start[0]);
const at = (line: TeachingLine, index: number) => line.start[1] + (index - line.start[0]) * slope(line);

describe('chapter fourteen teaching charts', () => {
  it('renders all lesson diagrams with described lines and accessible text', () => {
    const scenarios = chapterFourteenLessons.flatMap((lesson) =>
      lesson.steps.filter((step) => step.type === 'diagram').map((step) => step.scenario));
    expect(scenarios).toEqual([...CHAPTER_FOURTEEN_SCENARIOS]);
    for (const scenario of scenarios) {
      const definition = chapterFourteenCharts[scenario as keyof typeof chapterFourteenCharts];
      const { container } = render(<LearningChart scenario={scenario} title={definition.heading} />);
      expect(container.querySelector('g.chapter-fourteen-chart')?.textContent).toContain(definition.heading);
      expect(container.querySelector('svg[role="img"] desc')?.textContent).toBe(definition.description);
      expect(container.querySelectorAll('.c14-teaching-line')).toHaveLength(
        definition.panels.reduce((count, panel) => count + panel.lines.length, 0));
      cleanup();
    }
  });

  it('uses valid candles and keeps line endpoints and markers inside the chart', () => {
    for (const definition of Object.values(chapterFourteenCharts)) {
      for (const panel of definition.panels) {
        for (const [open, high, low, close] of panel.bars) {
          expect(high).toBeGreaterThanOrEqual(Math.max(open, close));
          expect(low).toBeLessThanOrEqual(Math.min(open, close));
          expect(low).toBeGreaterThanOrEqual(0);
          expect(high).toBeLessThanOrEqual(100);
        }
        expect(panel.focus.every((index) => index >= 0 && index < panel.bars.length)).toBe(true);
        for (const line of panel.lines) {
          expect(line.end[0]).toBeGreaterThan(line.start[0]);
          for (const [index, price] of [line.start, line.end]) {
            expect(index).toBeGreaterThanOrEqual(0);
            expect(index).toBeLessThan(panel.bars.length);
            expect(price).toBeGreaterThanOrEqual(0);
            expect(price).toBeLessThanOrEqual(100);
          }
        }
      }
    }
  });

  it('constructs enclosing parallels with real anchors and equal slopes', () => {
    for (const id of ['c14-07', 'c14-08'] as const) {
      const panel = chapterFourteenCharts[id].panels[1];
      const [trend, channel] = panel.lines;
      expect(slope(trend)).toBeCloseTo(slope(channel), 8);
      const extreme = id === 'c14-07' ? 2 : 1;
      const opposite = id === 'c14-07' ? 1 : 2;
      expect(at(trend, 0)).toBe(panel.bars[0][extreme]);
      expect(at(trend, 4)).toBe(panel.bars[4][extreme]);
      expect(at(channel, 1)).toBe(panel.bars[1][opposite]);
      for (let i = 0; i < panel.bars.length; i++) {
        if (id === 'c14-07') expect(panel.bars[i][1]).toBeLessThanOrEqual(at(channel, i));
        else expect(panel.bars[i][2]).toBeGreaterThanOrEqual(at(channel, i));
      }
    }
  });
  it('shows different outcomes after the same overshoot and honest alternative boundaries', () => {
    const [acceleration, failure] = chapterFourteenCharts['c14-05'].panels;
    expect(acceleration.bars.slice(0, 7)).toEqual(failure.bars.slice(0, 7));
    expect(acceleration.bars[6][3]).toBeGreaterThan(at(acceleration.lines[0], 6));
    expect(acceleration.bars[8][3]).toBeGreaterThan(at(acceleration.lines[0], 8));
    expect(failure.bars[8][3]).toBeLessThan(at(failure.lines[0], 8));
    const [wide, direct] = chapterFourteenCharts['c14-24'].panels;
    expect(wide.bars).toEqual(direct.bars);
    expect(slope(wide.lines[0])).toBeCloseTo(slope(wide.lines[1]), 8);
    expect(at(wide.lines[1], 0)).toBe(wide.bars[0][2]);
    expect(at(direct.lines[0], 0)).toBe(direct.bars[0][2]);
    expect(at(direct.lines[0], 6)).toBe(direct.bars[6][2]);
    expect(wide.bars[8][2]).toBeGreaterThan(at(wide.lines[1], 8));
    expect(direct.bars[8][2]).toBeLessThan(at(direct.lines[0], 8));
  });
});

import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { chapterThirteenLessons } from '../content/courses/price-action-trends/chapter-13';
import { CHAPTER_THIRTEEN_SCENARIOS } from '../content/types';
import { chapterThirteenCharts, type TeachingLine } from './ChapterThirteenCharts';
import { LearningChart } from './LearningChart';

afterEach(cleanup);
const slope = (line: TeachingLine) => (line.end[1] - line.start[1]) / (line.end[0] - line.start[0]);
const at = (line: TeachingLine, index: number) => line.start[1] + (index - line.start[0]) * slope(line);

describe('chapter thirteen teaching charts', () => {
  it('renders all lesson diagrams with described lines and accessible text', () => {
    const scenarios = chapterThirteenLessons.flatMap((lesson) =>
      lesson.steps.filter((step) => step.type === 'diagram').map((step) => step.scenario));
    expect(scenarios).toEqual([...CHAPTER_THIRTEEN_SCENARIOS]);
    for (const scenario of scenarios) {
      const definition = chapterThirteenCharts[scenario as keyof typeof chapterThirteenCharts];
      const { container } = render(<LearningChart scenario={scenario} title={definition.heading} />);
      expect(container.querySelector('g.chapter-thirteen-chart')?.textContent).toContain(definition.heading);
      expect(container.querySelector('svg[role="img"] desc')?.textContent).toBe(definition.description);
      expect(container.querySelectorAll('.c13-teaching-line')).toHaveLength(
        definition.panels.reduce((count, panel) => count + panel.lines.length, 0));
      cleanup();
    }
  });

  it('uses valid candles and keeps line endpoints and markers inside the chart', () => {
    for (const definition of Object.values(chapterThirteenCharts)) {
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

  it('depicts actual parallel construction and the difference made by alternate anchors', () => {
    for (const id of ['c13-01', 'c13-18', 'c13-21', 'c13-22', 'c13-23', 'c13-24', 'c13-25', 'c13-26', 'c13-32'] as const) {
      for (const panel of chapterThirteenCharts[id].panels) {
        if (panel.lines.length === 2) expect(slope(panel.lines[0])).toBeCloseTo(slope(panel.lines[1]), 8);
      }
    }
    const bull = chapterThirteenCharts['c13-21'].panels[1];
    expect(at(bull.lines[0], 1)).toBe(bull.bars[1][1]);
    expect(at(bull.lines[0], 3)).toBe(bull.bars[3][1]);
    expect(at(bull.lines[1], 2)).toBe(bull.bars[2][2]);
    const bear = chapterThirteenCharts['c13-22'].panels[1];
    expect(at(bear.lines[0], 1)).toBe(bear.bars[1][2]);
    expect(at(bear.lines[0], 3)).toBe(bear.bars[3][2]);
    expect(at(bear.lines[1], 2)).toBe(bear.bars[2][1]);
    const shoulder = chapterThirteenCharts['c13-23'].panels[1];
    expect(at(shoulder.lines[1], 1)).toBe(shoulder.bars[1][2]);
    const [steep, flatter] = chapterThirteenCharts['c13-25'].panels;
    expect(steep.bars).toEqual(flatter.bars);
    expect(steep.bars[5][2]).toBeGreaterThan(at(steep.lines[1], 5));
    expect(flatter.bars[5][2]).toBeLessThan(at(flatter.lines[1], 5));
  });
});

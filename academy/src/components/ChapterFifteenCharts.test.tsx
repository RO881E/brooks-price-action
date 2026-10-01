import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { chapterFifteenLessons } from '../content/courses/price-action-trends/chapter-15';
import { CHAPTER_FIFTEEN_SCENARIOS } from '../content/types';
import { chapterFifteenCharts, type TeachingLine } from './ChapterFifteenCharts';
import { LearningChart } from './LearningChart';

afterEach(cleanup);
const slope = (line: TeachingLine) => (line.end[1] - line.start[1]) / (line.end[0] - line.start[0]);
const at = (line: TeachingLine, index: number) => line.start[1] + (index - line.start[0]) * slope(line);

describe('chapter fifteen teaching charts', () => {
  it('renders all lesson diagrams with described lines and accessible text', () => {
    const scenarios = chapterFifteenLessons.flatMap((lesson) =>
      lesson.steps.filter((step) => step.type === 'diagram').map((step) => step.scenario));
    expect(scenarios).toEqual([...CHAPTER_FIFTEEN_SCENARIOS]);
    for (const scenario of scenarios) {
      const definition = chapterFifteenCharts[scenario as keyof typeof chapterFifteenCharts];
      const { container } = render(<LearningChart scenario={scenario} title={definition.heading} />);
      expect(container.querySelector('g.chapter-fifteen-chart')?.textContent).toContain(definition.heading);
      expect(container.querySelector('svg[role="img"] desc')?.textContent).toBe(definition.description);
      expect(container.querySelectorAll('.c15-teaching-line')).toHaveLength(
        definition.panels.reduce((count, panel) => count + panel.lines.length, 0));
      cleanup();
    }
  });

  it('uses valid candles and keeps line endpoints and markers inside the chart', () => {
    for (const definition of Object.values(chapterFifteenCharts)) {
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

  it('anchors the repeatedly tested bear channel to actual highs and a low', () => {
    const panel = chapterFifteenCharts['c15-41'].panels[1];
    const [trend, channel] = panel.lines;
    expect(slope(trend)).toBe(slope(channel));
    for (const index of [1, 3, 5, 7]) expect(at(trend, index)).toBe(panel.bars[index][1]);
    expect(at(channel, 2)).toBe(panel.bars[2][2]);
    panel.bars.forEach((bar, index) => {
      expect(bar[1]).toBeLessThanOrEqual(at(trend, index));
      expect(bar[2]).toBeGreaterThanOrEqual(at(channel, index));
    });
  });
  it('uses the stated local height for horizontal and sloping target projections', () => {
    const horizontal = chapterFifteenCharts['c15-17'].panels;
    const [top, bottom, target] = horizontal[0].lines.map((line) => at(line, 0));
    expect(target).toBe(top + (top - bottom));
    expect(at(horizontal[1].lines[2], 0)).toBe(bottom - (top - bottom));
    for (const [id, index] of [['c15-18', 5], ['c15-34', 5]] as const) {
      const [before, after] = chapterFifteenCharts[id].panels;
      const lower = at(before.lines[0], index);
      const upper = at(before.lines[1], index);
      const targetLine = after.lines.find((line) => line.label?.startsWith('Ziel'))!;
      expect(at(targetLine, 0)).toBe(lower - (upper - lower));
    }
    const lesson = chapterFifteenLessons[33];
    const question = lesson.steps.find((step) => step.type === 'question')!;
    expect(question.options.find((option) => option.id === question.correctOptionId)?.label).toBe('Bei 36.');
  });
  it('keeps average-price examples and the complete two-bar trigger consistent', () => {
    for (const [id, expected] of [['c15-13', 48], ['c15-48', 55]] as const) {
      const panel = chapterFifteenCharts[id].panels[0];
      const entries = panel.lines.filter((line) => line.label?.startsWith('Einstieg'));
      const average = panel.lines.find((line) => line.label?.startsWith('Mittel'))!;
      expect(entries).toHaveLength(2);
      expect(at(average, 0)).toBe((at(entries[0], 0) + at(entries[1], 0)) / 2);
      expect(at(average, 0)).toBe(expected);
    }
    const [early, complete] = chapterFifteenCharts['c15-50'].panels;
    expect(early.bars).toEqual(complete.bars);
    const low = Math.min(early.bars[0][2], early.bars[1][2]);
    expect(at(complete.lines[0], 0)).toBe(low);
    expect(early.bars[2][2]).toBeLessThan(early.bars[1][2]);
    expect(early.bars[2][2]).toBeGreaterThan(low);
  });
});

import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { chapterSixteenLessons } from '../content/courses/price-action-trends/chapter-16';
import { CHAPTER_SIXTEEN_SCENARIOS } from '../content/types';
import { chapterSixteenCharts, type TeachingLine } from './ChapterSixteenCharts';
import { LearningChart } from './LearningChart';

afterEach(cleanup);
const slope = (line: TeachingLine) => (line.end[1] - line.start[1]) / (line.end[0] - line.start[0]);
const at = (line: TeachingLine, index: number) => line.start[1] + (index - line.start[0]) * slope(line);

describe('chapter sixteen teaching charts', () => {
  it('renders all lesson diagrams with described lines and accessible text', () => {
    const scenarios = chapterSixteenLessons.flatMap((lesson) =>
      lesson.steps.filter((step) => step.type === 'diagram').map((step) => step.scenario));
    expect(scenarios).toEqual([...CHAPTER_SIXTEEN_SCENARIOS]);
    for (const scenario of scenarios) {
      const definition = chapterSixteenCharts[scenario as keyof typeof chapterSixteenCharts];
      const { container } = render(<LearningChart scenario={scenario} title={definition.heading} />);
      expect(container.querySelector('g.chapter-sixteen-chart')?.textContent).toContain(definition.heading);
      expect(container.querySelector('svg[role="img"] desc')?.textContent).toBe(definition.description);
      expect(container.querySelectorAll('.c16-teaching-line')).toHaveLength(
        definition.panels.reduce((count, panel) => count + panel.lines.length, 0));
      cleanup();
    }
  });

  it('uses valid candles and keeps line endpoints and markers inside the chart', () => {
    for (const definition of Object.values(chapterSixteenCharts)) {
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

  it('compares the same synthetic price path across timeframes', () => {
    for (const id of ['c16-19', 'c16-21', 'c16-35'] as const) {
      const [detail, larger] = chapterSixteenCharts[id].panels;
      expect(detail.bars).toHaveLength(larger.bars.length * 5);
      larger.bars.forEach((bar, index) => {
        const chunk = detail.bars.slice(index * 5, index * 5 + 5);
        expect(bar).toEqual([chunk[0][0], Math.max(...chunk.map((b) => b[1])),
          Math.min(...chunk.map((b) => b[2])), chunk[4][3]]);
      });
    }
  });
  it('depicts a real first pullback after rising lows and a subsequent High 1', () => {
    const [before, after] = chapterSixteenCharts['c16-07'].panels;
    expect(after.bars.slice(0, 6)).toEqual(before.bars);
    expect(slope(before.lines[0])).toBe(slope(before.lines[1]));
    before.bars.forEach((bar, index) => {
      expect(at(before.lines[0], index)).toBe(bar[2]);
      expect(at(before.lines[1], index)).toBe(bar[1]);
      if (index > 0) expect(bar[2]).toBeGreaterThan(before.bars[index - 1][2]);
    });
    expect(after.bars[6][2]).toBeLessThan(after.bars[5][2]);
    const entry = chapterSixteenCharts['c16-08'].panels[1];
    const trigger = entry.lines.find((line) => line.label?.startsWith('Auslösung'))!;
    expect(at(trigger, 0)).toBe(entry.bars[6][1] + 1);
    expect(entry.bars[7][1]).toBeGreaterThan(at(trigger, 0));
  });
  it('keeps geometric penetration, an unfilled order and inside-bar boundaries distinct', () => {
    const geo = chapterSixteenCharts['c16-16'].panels[0];
    expect(geo.bars.every((bar) => bar.every(Number.isInteger))).toBe(true);
    expect(at(geo.lines[0], 2)).toBe(52.5);
    expect(geo.bars[2][2]).toBe(52);
    const [pending, filled] = chapterSixteenCharts['c16-26'].panels;
    expect(pending.bars[7][1]).toBeLessThan(at(pending.lines[0], 0));
    expect(filled.bars[7][1]).toBeLessThan(at(filled.lines[0], 0));
    expect(filled.bars[8][1]).toBeGreaterThan(at(filled.lines[0], 0));
    const inside = chapterSixteenCharts['c16-27'].panels[0];
    expect(inside.bars[5][1]).toBeLessThan(inside.bars[4][1]);
    expect(inside.bars[5][2]).toBeGreaterThan(inside.bars[4][2]);
    expect(inside.bars[5][2]).toBeLessThan(at(inside.lines[0], 5));
  });
  it('matches the volatile-day risk example and the unusual reversal-bar explanation', () => {
    const [quiet, volatile] = chapterSixteenCharts['c16-38'].panels;
    const distance = (panel: typeof quiet) => at(panel.lines[0], 0) - at(panel.lines[1], 0);
    expect(distance(quiet)).toBe(4);
    expect(distance(volatile)).toBe(8);
    expect(2 * distance(quiet)).toBe(distance(volatile));
    const signal = chapterSixteenCharts['c16-32'].panels[0].bars[4];
    expect(signal[3]).toBeGreaterThan(signal[0]);
    expect(signal[3]).toBeLessThan((signal[1] + signal[2]) / 2);
    const question = chapterSixteenLessons[37].steps.find((step) => step.type === 'question')!;
    expect(question.options.find((option) => option.id === question.correctOptionId)?.label)
      .toBe('Sie halbiert sich vor Rundung und Kosten.');
  });
});

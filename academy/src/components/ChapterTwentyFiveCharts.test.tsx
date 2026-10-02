import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { chapterTwentyFiveLessons } from '../content/courses/price-action-trends/chapter-25';
import { CHAPTER_TWENTY_FIVE_SCENARIOS } from '../content/types';
import { chapterTwentyFiveCharts } from './ChapterTwentyFiveCharts';
import { LearningChart } from './LearningChart';
afterEach(cleanup);
const panels = (n: number) => chapterTwentyFiveCharts[`c25-${String(n).padStart(2, '0')}` as keyof typeof chapterTwentyFiveCharts].panels;
const hull = (bars: readonly (readonly number[])[]) => [bars[0][0], Math.max(...bars.map(b => b[1])), Math.min(...bars.map(b => b[2])), bars.at(-1)![3]];
describe('chapter twenty-five trend resumption', () => {
  it('connects all lessons to accessible charts and retains complete lesson steps', () => {
    expect(chapterTwentyFiveLessons.map(l => l.steps.find(s => s.type === 'diagram')?.scenario)).toEqual([...CHAPTER_TWENTY_FIVE_SCENARIOS]);
    expect(new Set(chapterTwentyFiveLessons.map(l => l.sourceUnit)).size).toBe(6);
    for (const [i, lesson] of chapterTwentyFiveLessons.entries()) {
      expect(lesson.id).toBe(`price-action-trends.chapter-25.lesson-${String(i + 1).padStart(2, '0')}`);
      expect(lesson.steps.map(s => s.type)).toEqual(['explanation', 'diagram', 'question', 'recap']);
      const q = lesson.steps.find(s => s.type === 'question')!;
      expect(q.correctOptionId).toBe(`choice-${i % 3}`);
      expect(new Set(q.options.map(o => o.explanation)).size).toBe(3);
      const scenario = CHAPTER_TWENTY_FIVE_SCENARIOS[i];
      const { container } = render(<LearningChart scenario={scenario} title={lesson.title} />);
      expect(container.querySelector('g.chapter-twenty-five-chart')).not.toBeNull();
      expect(container.querySelector('svg[role="img"] desc')?.textContent).toBe(chapterTwentyFiveCharts[scenario].description);
      cleanup();
    }
  });
  it('keeps valid OHLC and reference geometry within the renderer', () => {
    for (const chart of Object.values(chapterTwentyFiveCharts)) for (const p of chart.panels) {
      for (const [o, h, l, c] of p.bars) { expect(h).toBeGreaterThanOrEqual(Math.max(o, c)); expect(l).toBeLessThanOrEqual(Math.min(o, c)); expect(l).toBeGreaterThanOrEqual(0); expect(h).toBeLessThanOrEqual(100); }
      for (const line of p.lines) for (const [index, price] of [line.start, line.end]) { expect(index).toBeGreaterThanOrEqual(0); expect(index).toBeLessThan(p.bars.length); expect(price).toBeGreaterThanOrEqual(0); expect(price).toBeLessThanOrEqual(100); }
    }
  });
  it('preserves every visible replay prefix exactly', () => {
    for (const n of [1, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 17, 18, 20, 21, 23]) { const [a, b] = panels(n); expect(b.bars.slice(0, a.bars.length), `case ${n}`).toEqual(a.bars); }
  });
  it('distinguishes incomplete gap test, exact contact and continuation below the fixed reference', () => {
    expect(panels(5)[0].bars[0][0] - 40).toBe(8);
    expect(Math.min(...panels(6)[0].bars.map(b => b[2]))).toBe(47); // Open wick 47, later test wick 50.
    expect(panels(6)[0].bars.at(-1)![2]).toBe(50);
    expect(panels(7)[0].bars.at(-1)![2]).toBe(40);
    expect(panels(8)[1].bars.slice(panels(8)[0].bars.length).some(b => b[3] < 40)).toBe(true);
    for (const n of [5, 6, 7, 8]) for (const p of panels(n)) expect(p.lines[0].start[1]).toBe(40);
  });
  it('derives tight range extremes from the pause and separates return from new breakout', () => {
    const pause = panels(9)[0].bars.slice(4); expect(Math.min(...pause.map(b => b[2]))).toBe(71); expect(Math.max(...pause.map(b => b[1]))).toBe(75);
    expect(panels(10)[0].bars.at(-1)![3]).toBeLessThan(71);
    expect(panels(10)[1].bars.at(-1)![3]).toBe(74);
    expect(panels(11)[1].bars[panels(11)[0].bars.length][3]).toBeGreaterThan(75);
  });
  it('only reaches the planned trigger after signal completion and distinguishes retest penetration', () => {
    const [a, b] = panels(13); expect(a.bars.every(bar => bar[1] < 76)).toBe(true); expect(b.bars[a.bars.length][1]).toBeGreaterThanOrEqual(76);
    const [retest, follow] = panels(14); expect(retest.bars.at(-2)![3]).toBe(73); expect(follow.bars.at(-1)![3]).toBe(89);
  });
  it('keeps plan arithmetic and unvisited projection anchored to the shown prices', () => {
    const [a,b] = panels(15); expect(a.lines[0].start[1] - a.lines[1].start[1]).toBe(5); expect(b.lines[0].start[1] - b.lines[1].start[1]).toBe(9);
    const risk = (panels(16)[0].lines[0].start[1] - panels(16)[0].lines[1].start[1]) * 5 + 5; expect(risk).toBe(50); expect(Math.floor(120 / risk)).toBe(2);
    const [impulse, target] = panels(18); const length = impulse.lines[1].start[1] - impulse.lines[0].start[1]; expect(length).toBe(33); expect(target.lines[0].start[1] + length).toBe(target.lines[1].start[1]); expect(target.bars.every(bar => bar[1] < 93)).toBe(true);
    const [entry, stop] = panels(19); const gain = entry.lines[1].start[1] - entry.lines[0].start[1]; const loss = stop.lines[0].start[1] - stop.lines[1].start[1]; expect(gain).toBe(3); expect(loss).toBe(9); expect(loss / (gain + loss)).toBe(.75);
  });
  it('shows identical daily envelopes for different intraday paths', () => { const [a,b]=panels(22); expect(a.bars).not.toEqual(b.bars); expect(hull(a.bars)).toEqual([30,81,29,80]); expect(hull(b.bars)).toEqual(hull(a.bars)); });
  it('retains the same initial data in successful and unsuccessful final cases', () => { const [a,b]=panels(24); expect(a.bars.slice(0,12)).toEqual(b.bars.slice(0,12)); expect(a.bars.at(-1)![3]).toBe(80); expect(b.bars.at(-1)![3]).toBe(48); });
});

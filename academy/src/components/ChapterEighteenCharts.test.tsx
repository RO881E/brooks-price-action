import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { chapterEighteenLessons } from '../content/courses/price-action-trends/chapter-18';
import { CHAPTER_EIGHTEEN_SCENARIOS } from '../content/types';
import { chapterEighteenCharts } from './ChapterEighteenCharts';
import { LearningChart } from './LearningChart';

afterEach(cleanup);

describe('chapter eighteen trend plans', () => {
  it('integrates all 48 lesson diagrams with accessible descriptions', () => {
    const ids = chapterEighteenLessons.flatMap((lesson) =>
      lesson.steps.filter((step) => step.type === 'diagram').map((step) => step.scenario));
    expect(ids).toEqual([...CHAPTER_EIGHTEEN_SCENARIOS]);
    for (const id of CHAPTER_EIGHTEEN_SCENARIOS) {
      const chart = chapterEighteenCharts[id];
      const { container } = render(<LearningChart scenario={id} title={chart.heading} />);
      expect(container.querySelector('g.chapter-eighteen-chart')?.textContent).toContain(chart.heading);
      expect(container.querySelector('svg[role="img"] desc')?.textContent).toBe(chart.description);
      expect(container.querySelectorAll('.c18-teaching-line')).toHaveLength(
        chart.panels.reduce((sum, panel) => sum + panel.lines.length, 0));
      cleanup();
    }
  });

  it('uses valid candles, horizontal price references and bounded markers', () => {
    for (const chart of Object.values(chapterEighteenCharts)) {
      for (const panel of chart.panels) {
        for (const [open, high, low, close] of panel.bars) {
          expect(low).toBeLessThanOrEqual(Math.min(open, close));
          expect(high).toBeGreaterThanOrEqual(Math.max(open, close));
          expect(low).toBeGreaterThanOrEqual(0);
          expect(high).toBeLessThanOrEqual(100);
        }
        expect(panel.focus.every((index) => index >= 0 && index < panel.bars.length)).toBe(true);
        for (const line of panel.lines) {
          expect(line.end[0]).toBeGreaterThan(line.start[0]);
          if (line.kind === 'reference') expect(line.start[1]).toBe(line.end[1]);
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

  it('depicts real interrupted High 2 and mirrored Low 2 attempts', () => {
    const [bull, bear] = chapterEighteenCharts['c18-03'].panels;
    expect(bull.bars[5][1]).toBeGreaterThan(bull.bars[4][1]);
    expect(bull.bars[6][2]).toBeLessThan(bull.bars[5][2]);
    expect(bull.bars[7][1]).toBeGreaterThan(bull.bars[6][1]);
    bull.bars.forEach(([o,h,l,c],i) => expect(bear.bars[i]).toEqual([100-o,100-l,100-h,100-c]));
    const late = chapterEighteenCharts['c18-42'].panels[1].bars;
    expect(late[3][1]).toBeGreaterThan(late[2][1]);
    expect(late[4][2]).toBeLessThan(late[3][2]);
    expect(late[5][1]).toBeLessThanOrEqual(late[4][1]);
    expect(late[5][2]).toBeGreaterThanOrEqual(late[4][2]);
    expect(late[6][1]).toBeGreaterThan(late[5][1]);
    const third = chapterEighteenCharts['c18-26'].panels[1].bars;
    expect(third[8][2]).toBeLessThan(44);
    expect(third[9][1]).toBeGreaterThan(third[8][1]);
  });

  it('preserves the exact path in sequential replay panels and aggregates that path', () => {
    for (const id of ['c18-05','c18-13','c18-14','c18-17','c18-23','c18-25','c18-26',
      'c18-29','c18-30','c18-31','c18-33','c18-34','c18-35','c18-36','c18-39','c18-40',
      'c18-41','c18-42','c18-43'] as const) {
      const [before, after] = chapterEighteenCharts[id].panels;
      expect(after.bars.slice(0, before.bars.length)).toEqual(before.bars);
    }
    const [detail, large] = chapterEighteenCharts['c18-45'].panels;
    expect(detail.bars).toHaveLength(large.bars.length * 3);
    large.bars.forEach((bar, index) => {
      const group = detail.bars.slice(index * 3, index * 3 + 3);
      expect(bar).toEqual([group[0][0],Math.max(...group.map(b=>b[1])),
        Math.min(...group.map(b=>b[2])),group.at(-1)![3]]);
    });
  });

  it('shows a calculated average, twenty gap bars, a first close below and a genuine inside bar', () => {
    const [before, after] = chapterEighteenCharts['c18-17'].panels;
    expect(before.bars).toHaveLength(20);
    const history = [13,15,17,19,21,23,25,27,29,31];
    const closes = [...history,...after.bars.map(b=>b[3])];
    const mean = (index: number) => closes.slice(index+1,index+11).reduce((sum,v)=>sum+v,0)/10;
    for (const line of after.lines) {
      expect(line.kind).toBe('average');
      expect(line.start[1]).toBeCloseTo(mean(line.start[0]));
      expect(line.end[1]).toBeCloseTo(mean(line.end[0]));
    }
    before.bars.forEach((bar,index)=>expect(bar[2]).toBeGreaterThan(mean(index)));
    const contact = after.bars[20];
    expect(contact[2]).toBeLessThanOrEqual(mean(20));
    expect(contact[1]).toBeGreaterThanOrEqual(mean(20));
    expect(contact[3]).toBeLessThan(mean(20));
    const inside = after.bars[21];
    expect(inside[1]).toBeLessThan(contact[1]);
    expect(inside[2]).toBeGreaterThan(contact[2]);
    expect(inside[3]).toBeGreaterThan(inside[0]);
    expect(after.bars[22][3]).toBeGreaterThan(mean(22));
  });

  it('checks risk and partial-exit arithmetic against the prices taught in the charts', () => {
    const prices = (id: keyof typeof chapterEighteenCharts, panel: number) =>
      chapterEighteenCharts[id].panels[panel].lines.filter(l=>l.kind==='reference').map(l=>l.start[1]);
    expect(prices('c18-16',1)).toEqual([60,56,50]);
    const [first,second,stop] = prices('c18-16',1);
    expect(2*(first-stop)+2*(second-stop)).toBe(32);
    expect((first*2+second*2)/4).toBe(58);
    expect(prices('c18-37',1)).toEqual([60,53]);
    expect(Math.floor((140-14)/(60-53))).toBe(18);
    expect(prices('c18-38',0)).toEqual([60,75]);
    expect(prices('c18-38',1)).toEqual([60,55]);
    expect((2*(60-40)+2*(75-40))/(4*(40-30))).toBe(2.75);
    expect((2*(60-40)+2*(55-40))/(4*(40-30))).toBe(1.75);
    expect(0.5*2-0.5*1).toBe(0.5);
    expect(1/(1+0.5)).toBeCloseTo(2/3);
  });

  it('starts trailing protection after confirmation and leaves an untouched limit unfilled', () => {
    const [first, later] = chapterEighteenCharts['c18-39'].panels;
    expect(first.bars[2][2]).toBe(48);
    expect(first.bars[3][1]).toBeGreaterThan(first.bars[1][1]);
    expect(first.lines[0].start).toEqual([3,47]);
    expect(later.bars[4][2]).toBe(60);
    expect(later.bars[5][1]).toBeGreaterThan(later.bars[3][1]);
    expect(later.lines[0].start).toEqual([5,59]);
    const offer = chapterEighteenCharts['c18-36'].panels[0];
    expect(offer.bars[1][1]).toBe(70);
    expect(offer.bars[2][2]).toBe(64);
    expect(offer.bars.slice(2).every(bar=>bar[2]>62)).toBe(true);
  });
});

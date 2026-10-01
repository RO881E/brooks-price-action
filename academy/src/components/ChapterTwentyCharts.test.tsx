import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { chapterTwentyLessons } from '../content/courses/price-action-trends/chapter-20';
import { CHAPTER_TWENTY_SCENARIOS } from '../content/types';
import { aggregateThree, chapterTwentyCharts } from './ChapterTwentyCharts';
import { LearningChart } from './LearningChart';

afterEach(cleanup);
describe('chapter twenty two-legged moves', () => {
  it('connects all 22 lessons to rendered accessible charts', () => {
    expect(chapterTwentyLessons.flatMap(l=>l.steps.filter(s=>s.type==='diagram').map(s=>s.scenario))).toEqual([...CHAPTER_TWENTY_SCENARIOS]);
    for(const id of CHAPTER_TWENTY_SCENARIOS) {
      const chart=chapterTwentyCharts[id];
      const {container}=render(<LearningChart scenario={id} title={chart.heading}/>);
      expect(container.querySelector('g.chapter-twenty-chart')?.textContent).toContain(chart.heading);
      expect(container.querySelector('svg[role="img"] desc')?.textContent).toBe(chart.description);
      cleanup();
    }
  });
  it('uses valid OHLC and bounded reference geometry', () => {
    for(const chart of Object.values(chapterTwentyCharts)) for(const p of chart.panels) {
      for(const [o,h,l,c] of p.bars) {
        expect(l).toBeLessThanOrEqual(Math.min(o,c));expect(h).toBeGreaterThanOrEqual(Math.max(o,c));
        expect(l).toBeGreaterThanOrEqual(0);expect(h).toBeLessThanOrEqual(100);
      }
      expect(p.focus.every(i=>i>=0 && i<p.bars.length)).toBe(true);
      for(const line of p.lines) {
        expect(line.end[0]).toBeGreaterThan(line.start[0]);
        if(line.kind==='reference') expect(line.start[1]).toBe(line.end[1]);
        for(const [i,price] of [line.start,line.end]) {expect(i).toBeGreaterThanOrEqual(0);expect(i).toBeLessThan(p.bars.length);expect(price).toBeGreaterThanOrEqual(0);expect(price).toBeLessThanOrEqual(100);}
      }
    }
  });
  it('distinguishes a deeper C from a higher C without changing the first leg', () => {
    const [deeper,higher]=chapterTwentyCharts['c20-05'].panels;
    expect(deeper.bars.slice(0,4)).toEqual(higher.bars.slice(0,4));
    expect(deeper.bars[1][2]).toBe(60);expect(deeper.bars[5][2]).toBe(54);
    expect(higher.bars[5][2]).toBe(63);
    for(const p of [deeper,higher]) {expect(p.bars[3][3]).toBeGreaterThan(p.bars[1][3]);expect(p.bars[5][3]).toBeLessThan(p.bars[3][3]);}
  });
  it('aggregates identical chronological data including wicks and rejects incomplete groups', () => {
    for(const id of ['c20-14','c20-15'] as const) {
      const [small,big]=chapterTwentyCharts[id].panels;
      expect(small.bars).toHaveLength(12);expect(big.bars).toHaveLength(4);
      big.bars.forEach((bar,i)=>{const group=small.bars.slice(i*3,i*3+3);expect(bar).toEqual([group[0][0],Math.max(...group.map(b=>b[1])),Math.min(...group.map(b=>b[2])),group[2][3]]);});
    }
    expect(aggregateThree([[10,15,8,13],[13,20,12,17],[17,19,9,11]])).toEqual([[10,20,8,11]]);
    expect(()=>aggregateThree([[10,15,8,13]])).toThrow('complete');
  });
  it('preserves the past in replay panels and the same trendline slope', () => {
    for(const id of ['c20-04','c20-07','c20-08','c20-10','c20-11','c20-12','c20-13','c20-17','c20-18','c20-19','c20-22'] as const) {
      const [early,late]=chapterTwentyCharts[id].panels;expect(late.bars.slice(0,early.bars.length)).toEqual(early.bars);
    }
    const [early,late]=chapterTwentyCharts['c20-07'].panels;
    const a=early.lines[0],b=late.lines[0];
    expect(a.start).toEqual(b.start);
    expect((a.end[1]-a.start[1])/(a.end[0]-a.start[0])).toBe((b.end[1]-b.start[1])/(b.end[0]-b.start[0]));
    expect(late.bars[6][3]).toBeLessThan(b.start[1]+6*5);
  });
  it('separates two tests above the old high from only the second crossing it', () => {
    const both=chapterTwentyCharts['c20-18'].panels[1].bars;
    const second=chapterTwentyCharts['c20-19'].panels[1].bars;
    for(const values of [both,second]) {expect(values[1][1]).toBe(60);expect(values[7][3]).toBeLessThan(values[5][3]);expect(values[9][1]).toBeGreaterThan(60);}
    expect(both[5][1]).toBeGreaterThan(60);expect(second[5][1]).toBe(58);
  });
  it('compares different outcomes after an identical first push and pullback', () => {
    const [failure,success]=chapterTwentyCharts['c20-09'].panels;
    expect(failure.bars.slice(0,5)).toEqual(success.bars.slice(0,5));
    expect(failure.bars[5][1]).toBe(61);expect(failure.bars.at(-1)![3]).toBeLessThan(47);
    expect(success.bars.slice(5).every(b=>b[3]>61)).toBe(true);
  });
});

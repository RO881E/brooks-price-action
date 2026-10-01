import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { chapterNineteenLessons } from '../content/courses/price-action-trends/chapter-19';
import { CHAPTER_NINETEEN_SCENARIOS } from '../content/types';
import { chapterNineteenCharts } from './ChapterNineteenCharts';
import { LearningChart } from './LearningChart';

afterEach(cleanup);

describe('chapter nineteen trend strength charts', () => {
  it('renders all 45 published lessons with their accessible description', () => {
    const ids = chapterNineteenLessons.flatMap((lesson) =>
      lesson.steps.filter((step) => step.type === 'diagram').map((step) => step.scenario));
    expect(ids).toEqual([...CHAPTER_NINETEEN_SCENARIOS]);
    for (const id of CHAPTER_NINETEEN_SCENARIOS) {
      const chart = chapterNineteenCharts[id];
      const { container } = render(<LearningChart scenario={id} title={chart.heading} />);
      expect(container.querySelector('g.chapter-nineteen-chart')?.textContent).toContain(chart.heading);
      expect(container.querySelector('svg[role="img"] desc')?.textContent).toBe(chart.description);
      expect(container.querySelectorAll('.c19-teaching-line')).toHaveLength(
        chart.panels.reduce((sum, panel) => sum + panel.lines.length, 0));
      cleanup();
    }
  });

  it('uses valid candles, bounded markers and horizontal price references', () => {
    for (const chart of Object.values(chapterNineteenCharts)) {
      for (const panel of chart.panels) {
        for (const [open,high,low,close] of panel.bars) {
          expect(low).toBeLessThanOrEqual(Math.min(open,close));
          expect(high).toBeGreaterThanOrEqual(Math.max(open,close));
          expect(low).toBeGreaterThanOrEqual(0);
          expect(high).toBeLessThanOrEqual(100);
        }
        expect(panel.focus.every(i=>i>=0 && i<panel.bars.length)).toBe(true);
        for (const line of panel.lines) {
          expect(line.end[0]).toBeGreaterThan(line.start[0]);
          if (line.kind==='reference') expect(line.start[1]).toBe(line.end[1]);
          for (const [index,price] of [line.start,line.end]) {
            expect(index).toBeGreaterThanOrEqual(0);
            expect(index).toBeLessThan(panel.bars.length);
            expect(price).toBeGreaterThanOrEqual(0);
            expect(price).toBeLessThanOrEqual(100);
          }
        }
      }
    }
  });

  it('distinguishes body gaps, full gaps, retained breakout distance and micro-gap contact', () => {
    const [body,full] = chapterNineteenCharts['c19-07'].panels;
    expect(body.bars[1][0]).toBeGreaterThan(body.bars[0][3]);
    expect(body.bars[1][2]).toBeLessThan(body.bars[0][3]);
    expect(full.bars[1][2]).toBeGreaterThan(full.bars[0][1]);
    const [open,closed] = chapterNineteenCharts['c19-09'].panels;
    expect(open.bars[2][2]-open.lines[0].start[1]).toBe(4);
    expect(closed.bars[2][2]).toBeLessThan(closed.lines[0].start[1]);
    const [micro,touch] = chapterNineteenCharts['c19-10'].panels;
    expect(micro.bars[2][2]-micro.bars[0][1]).toBe(2);
    expect(touch.bars[2][2]).toBe(touch.bars[0][1]);
    expect(micro.bars[1][2]).toBeLessThan(micro.bars[0][1]);
  });

  it('keeps replay prefixes exact and aggregates the same full price path', () => {
    for (const id of ['c19-08','c19-14','c19-22','c19-23','c19-25','c19-26','c19-28',
      'c19-29','c19-30','c19-31','c19-32','c19-33','c19-35','c19-36','c19-37',
      'c19-38','c19-40','c19-44'] as const) {
      const [before,after] = chapterNineteenCharts[id].panels;
      expect(after.bars.slice(0,before.bars.length)).toEqual(before.bars);
    }
    for (const id of ['c19-24','c19-27'] as const) {
      const [small,big] = chapterNineteenCharts[id].panels;
      expect(small.bars).toHaveLength(big.bars.length*3);
      big.bars.forEach((bar,i)=> {
        const group=small.bars.slice(i*3,i*3+3);
        expect(bar).toEqual([group[0][0],Math.max(...group.map(b=>b[1])),
          Math.min(...group.map(b=>b[2])),group.at(-1)![3]]);
      });
    }
  });

  it('calculates actual averages and distinguishes gap bars from countertrend closes', () => {
    const seed=[13,15,17,19,21,23,25,27,29,31];
    const [bull,bear] = chapterNineteenCharts['c19-15'].panels;
    [bull,bear].forEach((panel,j)=> {
      const history=j===0 ? seed : seed.map(v=>100-v);
      const closes=[...history,...panel.bars.map(b=>b[3])];
      const mean=(i:number)=>closes.slice(i+1,i+11).reduce((s,v)=>s+v,0)/10;
      expect(panel.bars).toHaveLength(20);
      panel.lines.forEach(line=> {
        expect(line.start[1]).toBeCloseTo(mean(line.start[0]));
        expect(line.end[1]).toBeCloseTo(mean(line.end[0]));
      });
      panel.bars.forEach((bar,i)=> {
        if(j===0) expect(bar[2]).toBeGreaterThan(mean(i));
        else expect(bar[1]).toBeLessThan(mean(i));
      });
    });
    const [single,double] = chapterNineteenCharts['c19-21'].panels;
    const mean=(panel:typeof single,i:number)=> {
      const closes=[...seed,...panel.bars.map(b=>b[3])];
      return closes.slice(i+1,i+11).reduce((s,v)=>s+v,0)/10;
    };
    expect(single.bars[20][3]).toBeLessThan(mean(single,20));
    expect(single.bars[21][3]).toBeGreaterThan(mean(single,21));
    for(const i of [20,21]) expect(double.bars[i][3]).toBeLessThan(mean(double,i));
    const rally=chapterNineteenCharts['c19-40'].panels[1];
    const closes=[100,98,96,94,92,90,88,86,84,82,...rally.bars.map(b=>b[3])];
    const rallyMean=(i:number)=>closes.slice(i+1,i+11).reduce((s,v)=>s+v,0)/10;
    for(const i of [13,14]) expect(rally.bars[i][3]).toBeGreaterThan(rallyMean(i));
    expect(rally.bars[16][2]).toBeGreaterThan(rallyMean(16));
  });

  it('depicts four separated upward attempts, an untriggered short and a true outside bar', () => {
    const attempts=chapterNineteenCharts['c19-34'].panels[0].bars;
    for(const i of [1,3,5,9]) expect(attempts[i][1]).toBeGreaterThan(attempts[i-1][1]);
    for(const i of [2,4,6,8]) expect(attempts[i][2]).toBeLessThan(attempts[i-1][2]);
    expect(attempts[7][1]).toBeLessThanOrEqual(attempts[6][1]);
    const gap=chapterNineteenCharts['c19-34'].panels[1];
    const average=gap.lines.find(l=>l.kind==='average')!;
    expect(gap.bars[0][1]).toBeLessThan(average.start[1]);
    const final=chapterNineteenCharts['c19-36'].panels[1];
    expect(final.bars[5][2]).toBe(72);
    expect(final.bars.slice(6).every(bar=>bar[2]>71)).toBe(true);
    expect(final.bars[6][1]).toBeGreaterThan(final.bars[5][1]);
    expect(final.bars[7][2]).toBeLessThan(final.bars[6][2]);
    expect(final.bars[8][1]).toBeGreaterThan(final.bars[7][1]);
    const outside=chapterNineteenCharts['c19-18'].panels[1].bars;
    expect(outside[2][2]).toBeLessThan(outside[1][2]);
    expect(outside[3][2]).toBeGreaterThan(outside[2][2]);
    expect(outside[4][1]).toBeGreaterThan(outside[3][1]);
    expect(outside[4][2]).toBeLessThan(outside[3][2]);
    expect(outside[4][3]).toBeLessThan(outside[4][0]);
  });

  it('distinguishes an unvisited limit, contact and a one-unit trade-through without asserting fills', () => {
    const [unvisited,touched]=chapterNineteenCharts['c19-42'].panels;
    expect(unvisited.bars[0][3]).toBe(40);
    expect(unvisited.bars[1][2]).toBe(41);
    expect(touched.bars[1][2]).toBe(40);
    expect(unvisited.bars[3][2]).toBe(unvisited.bars[2][3]-1);
    expect(unvisited.note).not.toContain('garantiert gefüllt');
    const next=chapterNineteenCharts['c19-44'].panels[1].bars;
    expect(Math.max(...next.slice(0,3).map(b=>b[1]))).toBeLessThan(78);
    expect(next[3][2]).toBeLessThan(next[2][2]);
    expect(next[4][2]).toBeGreaterThan(next[3][2]);
    expect(next[5][2]).toBeLessThan(next[4][2]);
  });
});

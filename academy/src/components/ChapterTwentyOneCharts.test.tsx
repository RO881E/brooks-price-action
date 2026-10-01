import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { chapterTwentyOneLessons } from '../content/courses/price-action-trends/chapter-21';
import { CHAPTER_TWENTY_ONE_SCENARIOS } from '../content/types';
import { aggregateThree, chapterTwentyOneCharts } from './ChapterTwentyOneCharts';
import { LearningChart } from './LearningChart';

afterEach(cleanup);
describe('chapter twenty-one impulse and channel examples',()=>{
 it('connects all sixty lessons to accessible rendered diagrams',()=>{
  expect(chapterTwentyOneLessons.flatMap(l=>l.steps.filter(s=>s.type==='diagram').map(s=>s.scenario))).toEqual([...CHAPTER_TWENTY_ONE_SCENARIOS]);
  for(const id of CHAPTER_TWENTY_ONE_SCENARIOS){const chart=chapterTwentyOneCharts[id];const {container}=render(<LearningChart scenario={id} title={chart.heading}/>);expect(container.querySelector('g.chapter-twenty-one-chart')?.textContent).toContain(chart.heading);expect(container.querySelector('svg[role="img"] desc')?.textContent).toBe(chart.description);cleanup();}
 });
 it('uses valid OHLC and bounded focus and reference geometry',()=>{
  for(const [id,chart] of Object.entries(chapterTwentyOneCharts))for(const p of chart.panels){
   for(const [o,h,l,c] of p.bars){expect(l,id).toBeLessThanOrEqual(Math.min(o,c));expect(h,id).toBeGreaterThanOrEqual(Math.max(o,c));expect(l,id).toBeGreaterThanOrEqual(0);expect(h,id).toBeLessThanOrEqual(100);}
   expect(p.focus.every(i=>i>=0&&i<p.bars.length),id).toBe(true);
   for(const line of p.lines){if(line.kind==='reference')expect(line.start[1]).toBe(line.end[1]);for(const [index,price] of [line.start,line.end]){expect(index,id).toBeGreaterThanOrEqual(0);expect(index,id).toBeLessThan(p.bars.length);expect(price,id).toBeGreaterThanOrEqual(0);expect(price,id).toBeLessThanOrEqual(100);}}
  }
 });
 it('keeps identical prefixes in before-and-after replay views',()=>{
  for(const id of ['c21-01','c21-03','c21-09','c21-10','c21-12','c21-14','c21-15','c21-17','c21-19','c21-23','c21-24','c21-25','c21-27','c21-28','c21-30','c21-31','c21-32','c21-33','c21-34','c21-35','c21-37','c21-40','c21-41','c21-42','c21-43','c21-44','c21-47','c21-49','c21-50','c21-51','c21-52','c21-54','c21-56','c21-57','c21-58','c21-59'] as const){const [a,b]=chapterTwentyOneCharts[id].panels;expect(b.bars.slice(0,a.bars.length),id).toEqual(a.bars);}
 });
 it('aggregates the same eighteen small bars including complete extremes',()=>{
  for(const id of ['c21-26','c21-46','c21-48'] as const){const [a,b]=chapterTwentyOneCharts[id].panels;expect(a.bars).toHaveLength(18);expect(b.bars).toHaveLength(6);b.bars.forEach((bar,i)=>{const group=a.bars.slice(i*3,i*3+3);expect(bar).toEqual([group[0][0],Math.max(...group.map(x=>x[1])),Math.min(...group.map(x=>x[2])),group[2][3]]);});}
  expect(()=>aggregateThree([[10,15,8,13]])).toThrow('complete');
 });
 it('preserves the functional eight-unit gap without claiming an untraded range',()=>{
  const [a,b]=chapterTwentyOneCharts['c21-11'].panels;
  expect(a.bars.at(-1)![3]).toBe(50);expect(b.bars[3][2]).toBe(40);
  expect(b.bars[3][2]-a.lines[0].start[1]).toBe(8);
  expect(a.bars[1][2]).toBeLessThan(a.bars[0][1]);
 });
 it('shows both anchored projection calculations and only an example bounce proportion',()=>{
  const [a,b]=chapterTwentyOneCharts['c21-13'].panels;
  const size=a.bars[1][3]-a.bars[0][0];expect(size).toBe(30);
  expect(a.lines[0].start[1]).toBe(a.bars[1][3]+size);
  expect(b.lines[0].start[1]).toBe(b.bars[3][2]+size);
  const bounce=chapterTwentyOneCharts['c21-19'].panels[1].bars;
  expect((bounce[3][3]-bounce[2][3])/(bounce[0][0]-bounce[2][3])).toBe(.25);
 });
 it('distinguishes a triggered buy from a never-triggered buy signal',()=>{
  const open=chapterTwentyOneCharts['c21-20'].panels[1];
  expect(open.bars[3][3]).toBeGreaterThan(open.bars[3][0]);
  expect(open.bars.slice(3).every(b=>b[1]<35)).toBe(true);
  const [early,late]=chapterTwentyOneCharts['c21-57'].panels;
  expect(early.bars[2][1]).toBeGreaterThan(66);expect(early.bars[1][1]).toBeLessThan(66);
  expect(late.bars[3][3]).toBeLessThan(early.bars[2][2]);
 });
 it('retains the same start zone for both a later test and an unfulfilled test',()=>{
  const [visit,keep]=chapterTwentyOneCharts['c21-38'].panels;
  expect(keep.bars.slice(0,10)).toEqual(visit.bars.slice(0,10));
  expect(visit.bars.slice(10).some(b=>b[2]<=40&&b[1]>=40)).toBe(true);
  expect(keep.bars.slice(10).every(b=>b[2]>40)).toBe(true);
  expect(keep.lines[0].start[1]).toBe(visit.lines[0].start[1]);
 });
 it('does not mistake the opening-range ratio for a measured hit rate',()=>{
  const p=chapterTwentyOneCharts['c21-55'].panels[0];
  const width=Math.max(...p.bars.map(b=>b[1]))-Math.min(...p.bars.map(b=>b[2]));
  expect(width).toBe(12);expect(width/50).toBe(.24);
  const explanation=chapterTwentyOneLessons[54].steps.find(s=>s.type==='explanation');
  expect(explanation?.type==='explanation'&&explanation.paragraphs.join(' ')).toContain('keine garantierte Ausbruchsquote');
 });
 it('shows shrinking actual high advances and an untriggered start-test plan before invalidation',()=>{
  const p=chapterTwentyOneCharts['c21-53'].panels[0];
  const highs=p.focus.map(i=>p.bars[i][1]);expect(highs).toEqual([62,71,76]);
  expect(highs[1]-highs[0]).toBe(9);expect(highs[2]-highs[1]).toBe(5);
  const [early,late]=chapterTwentyOneCharts['c21-33'].panels;
  expect(early.bars[16][3]).toBeGreaterThan(early.bars[16][0]);
  expect(late.bars.slice(17,19).every(b=>b[1]<44)).toBe(true);
  expect(late.bars[17][2]).toBeLessThan(early.bars[16][2]);
 });
});

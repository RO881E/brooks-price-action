import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { chapterTwentyTwoLessons } from '../content/courses/price-action-trends/chapter-22';
import { CHAPTER_TWENTY_TWO_SCENARIOS } from '../content/types';
import { aggregateDay, chapterTwentyTwoCharts } from './ChapterTwentyTwoCharts';
import { LearningChart } from './LearningChart';

afterEach(cleanup);
describe('chapter twenty-two trending ranges',()=>{
 it('connects all forty-eight lessons to accessible diagrams',()=>{
  expect(chapterTwentyTwoLessons.flatMap(l=>l.steps.filter(s=>s.type==='diagram').map(s=>s.scenario))).toEqual([...CHAPTER_TWENTY_TWO_SCENARIOS]);
  for(const id of CHAPTER_TWENTY_TWO_SCENARIOS){const c=chapterTwentyTwoCharts[id];const {container}=render(<LearningChart scenario={id} title={c.heading}/>);expect(container.querySelector('g.chapter-twenty-two-chart')?.textContent).toContain(c.heading);expect(container.querySelector('svg[role="img"] desc')?.textContent).toBe(c.description);cleanup();}
 });
 it('uses valid OHLC, range zones and bounded reference markers',()=>{
  for(const [id,c] of Object.entries(chapterTwentyTwoCharts))for(const p of c.panels){
   for(const [o,h,l,close] of p.bars){expect(l,id).toBeLessThanOrEqual(Math.min(o,close));expect(h,id).toBeGreaterThanOrEqual(Math.max(o,close));expect(l,id).toBeGreaterThanOrEqual(0);expect(h,id).toBeLessThanOrEqual(100);}
   expect(p.focus.every(i=>i>=0&&i<p.bars.length),id).toBe(true);
   for(const [lo,hi] of p.zones??[]){expect(lo,id).toBeGreaterThanOrEqual(0);expect(hi,id).toBeLessThanOrEqual(100);expect(hi,id).toBeGreaterThan(lo);}
   for(const line of p.lines){expect(line.start[1]).toBe(line.end[1]);for(const [i,price] of [line.start,line.end]){expect(i,id).toBeGreaterThanOrEqual(0);expect(i,id).toBeLessThan(p.bars.length);expect(price,id).toBeGreaterThanOrEqual(0);expect(price,id).toBeLessThanOrEqual(100);}}
  }
 });
 it('preserves the past in replay panels',()=>{
  for(const id of ['c22-01','c22-03','c22-04','c22-07','c22-08','c22-09','c22-14','c22-15','c22-16','c22-18','c22-20','c22-21','c22-24','c22-25','c22-26','c22-27','c22-28','c22-29','c22-30','c22-32','c22-34','c22-35','c22-36','c22-37','c22-38','c22-40','c22-41','c22-43','c22-44','c22-45','c22-46','c22-47'] as const){const [a,b]=chapterTwentyTwoCharts[id].panels;expect(b.bars.slice(0,a.bars.length),id).toEqual(a.bars);}
 });
 it('computes the opening width, historical ratio and projection from fixed anchors',()=>{
  const a=chapterTwentyTwoCharts['c22-02'].panels[0];
  const low=Math.min(...a.bars.map(b=>b[2])),high=Math.max(...a.bars.map(b=>b[1]));
  expect([low,high]).toEqual([30,46]);expect((high-low)/40).toBe(.4);
  expect(chapterTwentyTwoCharts['c22-09'].panels[1].lines[1].start[1]).toBe(high+high-low);
  const inner=chapterTwentyTwoCharts['c22-22'].panels[1].lines;
  expect(inner[2].start[1]).toBe(inner[1].start[1]+inner[1].start[1]-inner[0].start[1]);
 });
 it('distinguishes an unvisited border, exact touch and actual penetration',()=>{
  const [shallow,inside]=chapterTwentyTwoCharts['c22-13'].panels;
  expect(shallow.bars.slice(0,14)).toEqual(inside.bars.slice(0,14));
  expect(shallow.bars[14][2]).toBe(47);expect(inside.bars[14][2]).toBe(44);
  const touch=chapterTwentyTwoCharts['c22-08'].panels[1];expect(touch.bars[14][2]).toBe(46);
  const [early,later]=chapterTwentyTwoCharts['c22-44'].panels;
  expect(early.bars[14][2]).toBeLessThan(46);expect(later.bars[18][2]).toBe(46);
 });
 it('aggregates actual source paths into the same completed daily OHLC',()=>{
  for(const id of ['c22-17','c22-33','c22-39'] as const){const [a,b]=chapterTwentyTwoCharts[id].panels;expect(b.bars).toEqual([[a.bars[0][0],Math.max(...a.bars.map(x=>x[1])),Math.min(...a.bars.map(x=>x[2])),a.bars.at(-1)![3]]]);}
  expect(()=>aggregateDay([])).toThrow('Empty day');
 });
 it('retains the original range when both sides fail and neither projection is met',()=>{
  const [a,b]=chapterTwentyTwoCharts['c22-45'].panels;
  const oldLow=Math.min(...a.bars.map(x=>x[2])),oldHigh=Math.max(...a.bars.map(x=>x[1]));
  expect(b.bars.slice(6).some(x=>x[1]>oldHigh)).toBe(true);expect(b.bars.slice(6).some(x=>x[2]<oldLow)).toBe(true);
  expect(Math.max(...b.bars.map(x=>x[1]))).toBeLessThan(62);expect(Math.min(...b.bars.map(x=>x[2]))).toBeGreaterThan(14);
  expect(b.bars.at(-1)![3]).toBeGreaterThan(oldLow);expect(b.bars.at(-1)![3]).toBeLessThan(oldHigh);
 });
 it('shows two distinct failed buyer attempts before a later seller trigger',()=>{
  const [a,b]=chapterTwentyTwoCharts['c22-40'].panels;
  expect(a.bars[0][3]).toBeGreaterThan(a.bars[0][0]);expect(a.bars[1][3]).toBeLessThan(a.bars[1][0]);expect(a.bars[2][3]).toBeGreaterThan(a.bars[2][0]);
  expect(a.bars.every(x=>x[2]>34)).toBe(true);expect(b.bars[3][2]).toBeLessThan(34);expect(b.bars[3][3]).toBeLessThan(a.bars[2][2]);
 });
 it('computes price risk without inventing a measured win rate',()=>{
  const p=chapterTwentyTwoCharts['c22-23'].panels[0];const [stop,entry,target]=p.lines.map(l=>l.start[1]);expect((target-entry)/(entry-stop)).toBe(2);
  const step=chapterTwentyTwoLessons[22].steps.find(s=>s.type==='explanation');
  expect(step?.type==='explanation'&&step.paragraphs.join(' ')).toContain('keine Trefferquote');
 });
});

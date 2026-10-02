import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { chapterTwentyThreeLessons } from '../content/courses/price-action-trends/chapter-23';
import { CHAPTER_TWENTY_THREE_SCENARIOS } from '../content/types';
import { aggregateDay, chapterTwentyThreeCharts, sma20 } from './ChapterTwentyThreeCharts';
import { LearningChart } from './LearningChart';
afterEach(cleanup);
describe('chapter twenty-three early trends and small pullbacks',()=>{
 it('connects forty lessons and all eleven cases to accessible diagrams',()=>{
  expect(chapterTwentyThreeLessons.flatMap(l=>l.steps.filter(s=>s.type==='diagram').map(s=>s.scenario))).toEqual([...CHAPTER_TWENTY_THREE_SCENARIOS]);
  expect(chapterTwentyThreeLessons.slice(18).map(l=>l.sourceUnit)).toEqual(Array.from({length:22},(_,i)=>`Kapitel 23 · Lernfall ${Math.floor(i/2)+1}`));
  for(const id of CHAPTER_TWENTY_THREE_SCENARIOS){const c=chapterTwentyThreeCharts[id];const {container}=render(<LearningChart scenario={id} title={c.heading}/>);expect(container.querySelector('g.chapter-twenty-three-chart')?.textContent).toContain(c.heading);expect(container.querySelector('svg[role="img"] desc')?.textContent).toBe(c.description);cleanup();}
 });
 it('has complete lessons, stable IDs, varied answers and individual feedback',()=>{
  for(const [i,l] of chapterTwentyThreeLessons.entries()){
   expect(l.id).toBe(`price-action-trends.chapter-23.lesson-${String(i+1).padStart(2,'0')}`);
   expect(l.steps.map(s=>s.type)).toEqual(['explanation','diagram','question','recap']);
   const explanation=l.steps.find(s=>s.type==='explanation');expect(explanation?.paragraphs).toHaveLength(3);
   const q=l.steps.find(s=>s.type==='question');expect(q?.correctOptionId).toBe(`choice-${i%3}`);expect(q?.options).toHaveLength(3);expect(new Set(q?.options.map(o=>o.explanation)).size).toBe(3);
  }
 });
 it('uses valid OHLC and bounded references and focus markers',()=>{
  for(const [id,c] of Object.entries(chapterTwentyThreeCharts))for(const p of c.panels){
   for(const [o,h,l,close] of p.bars){expect(l,id).toBeLessThanOrEqual(Math.min(o,close));expect(h,id).toBeGreaterThanOrEqual(Math.max(o,close));expect(l,id).toBeGreaterThanOrEqual(0);expect(h,id).toBeLessThanOrEqual(100);}
   expect(p.focus.every(i=>i>=0&&i<p.bars.length),id).toBe(true);
   for(const line of p.lines)for(const [i,price] of [line.start,line.end]){expect(i,id).toBeGreaterThanOrEqual(0);expect(i,id).toBeLessThan(p.bars.length);expect(price,id).toBeGreaterThanOrEqual(0);expect(price,id).toBeLessThanOrEqual(100);}
  }
 });
 it('preserves the already known bars in replay panels',()=>{
  for(const id of ['c23-01','c23-04','c23-05','c23-08','c23-11','c23-12','c23-14','c23-15','c23-19','c23-20','c23-21','c23-22','c23-23','c23-25','c23-26','c23-27','c23-28','c23-29','c23-30','c23-31','c23-32','c23-33','c23-34','c23-35','c23-37','c23-38','c23-39','c23-40'] as const){const [a,b]=chapterTwentyThreeCharts[id].panels;expect(b.bars.slice(0,a.bars.length),id).toEqual(a.bars);}
 });
 it('computes opening width and relative pullback sizes from actual extremes',()=>{
  const first=chapterTwentyThreeCharts['c23-02'].panels[0];const width=Math.max(...first.bars.map(b=>b[1]))-Math.min(...first.bars.map(b=>b[2]));expect(width).toBe(8);expect(width/40).toBe(.2);
  const [small,large]=chapterTwentyThreeCharts['c23-13'].panels;expect(small.bars[0][1]-small.bars[1][2]).toBe(4);expect(large.bars[0][1]-large.bars[2][2]).toBe(8);
 });
 it('leaves the first pullback stop unfilled until the later breakout',()=>{
  const [a,b]=chapterTwentyThreeCharts['c23-20'].panels;const trigger=a.lines[0].start[1];expect(a.bars.every(x=>x[1]<trigger)).toBe(true);expect(b.bars[a.bars.length][1]).toBeGreaterThan(trigger);expect(a.bars.at(-1)![3]).toBeLessThan(a.bars.at(-1)![0]);
 });
 it('fills the early buyer stop before the later protection failure',()=>{
  const [a,b]=chapterTwentyThreeCharts['c23-27'].panels;expect(a.bars[0][1]).toBeLessThan(52);expect(a.bars[1][1]).toBeGreaterThanOrEqual(52);expect(a.bars.every(x=>x[2]>39)).toBe(true);expect(b.bars[2][2]).toBeLessThan(39);
 });
 it('shows two nested inside bars before a separately timed breakout',()=>{
  const [a,b]=chapterTwentyThreeCharts['c23-23'].panels;
  for(const i of [3,4]){expect(a.bars[i][1]).toBeLessThanOrEqual(a.bars[i-1][1]);expect(a.bars[i][2]).toBeGreaterThanOrEqual(a.bars[i-1][2]);}
  expect(b.bars[5][1]).toBeGreaterThan(50);
 });
 it('computes every plotted SMA 20 from closes including previous history',()=>{
  for(const p of chapterTwentyThreeCharts['c23-15'].panels){const expected=sma20(p.bars,Array(19).fill(10));
   for(const line of p.lines){const [a,av]=line.start,[b,bv]=line.end;expect(av).toBeCloseTo(expected[a],12);expect(bv).toBeCloseTo(expected[b],12);}
   const closes=[...Array(19).fill(10),...p.bars.map(b=>b[3])];for(const [i,value] of expected.entries())expect(value).toBeCloseTo(closes.slice(i,i+20).reduce((x,y)=>x+y,0)/20,12);
  }
  const [a,b]=chapterTwentyThreeCharts['c23-15'].panels;const averages=sma20(a.bars,Array(19).fill(10));expect(a.bars.every((bar,i)=>bar[2]>averages[i])).toBe(true);expect(a.bars).toHaveLength(22);
  const later=sma20(b.bars,Array(19).fill(10));expect(b.bars.some((bar,i)=>bar[2]<=later[i]&&bar[1]>=later[i])).toBe(true);expect(b.bars.at(-1)![1]).toBeLessThan(later.at(-1)!);expect(()=>sma20(a.bars,[])).toThrow('19 preceding');
 });
 it('updates the same unfinished bar without losing its known low',()=>{
  const [a,b]=chapterTwentyThreeCharts['c23-16'].panels;expect(b.bars[0][0]).toBe(a.bars[0][0]);expect(b.bars[0][2]).toBe(a.bars[0][2]);expect(b.bars[0][1]).toBeGreaterThanOrEqual(a.bars[0][1]);expect(a.bars[0][3]).toBeLessThan(a.bars[0][0]);expect(b.bars[0][3]).toBeGreaterThan(b.bars[0][0]);
 });
 it('does not fill an earlier reversal until a later independent setup',()=>{
  const [a,b]=chapterTwentyThreeCharts['c23-34'].panels;expect(a.bars[1][1]).toBe(35);expect(a.bars.slice(2).every(x=>x[1]<36)).toBe(true);expect(b.bars.slice(a.bars.length).some(x=>x[1]>=36)).toBe(true);
 });
 it('keeps the signal protection intact while the tighter entry stop is crossed',()=>{
  const p=chapterTwentyThreeCharts['c23-38'].panels[0];expect(p.bars[0][2]).toBe(44);expect(p.bars[1][2]).toBe(51);expect(p.bars[2][2]).toBeLessThan(50);expect(p.bars[2][2]).toBeGreaterThan(43);
 });
 it('aggregates exactly the illustrated daily path and leaves the outer target unmet',()=>{
  const [a,b]=chapterTwentyThreeCharts['c23-36'].panels;expect(b.bars).toEqual([aggregateDay(a.bars)]);expect(b.bars[0]).toEqual([50,69,30,49]);expect(Math.max(...a.bars.map(x=>x[1]))).toBeLessThan(70);expect(()=>aggregateDay([])).toThrow('Empty day');
 });
 it('crosses the opening reversal boundary after the first long trigger',()=>{
  const [a,b]=chapterTwentyThreeCharts['c23-39'].panels;expect(a.bars.slice(0,3).every(x=>x[1]<56)).toBe(true);expect(a.bars[3][1]).toBeGreaterThanOrEqual(56);expect(a.bars.every(x=>x[2]>45)).toBe(true);expect(b.bars[4][2]).toBeLessThan(45);
 });
});

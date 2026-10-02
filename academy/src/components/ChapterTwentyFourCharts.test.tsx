import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { chapterTwentyFourLessons } from '../content/courses/price-action-trends/chapter-24';
import { CHAPTER_TWENTY_FOUR_SCENARIOS } from '../content/types';
import { aggregate, aggregateMinutes, chapterTwentyFourCharts, minuteBars } from './ChapterTwentyFourCharts';
import { LearningChart } from './LearningChart';
afterEach(cleanup);
describe('chapter twenty-four reversal days',()=>{
 it('connects all twenty-four lessons and three cases to accessible charts',()=>{
  expect(chapterTwentyFourLessons.flatMap(l=>l.steps.filter(s=>s.type==='diagram').map(s=>s.scenario))).toEqual([...CHAPTER_TWENTY_FOUR_SCENARIOS]);
  expect(chapterTwentyFourLessons.slice(8).map(l=>l.sourceUnit)).toEqual([...Array(7).fill('Kapitel 24 · Lernfall 1'),...Array(7).fill('Kapitel 24 · Lernfall 2'),...Array(2).fill('Kapitel 24 · Lernfall 3')]);
  for(const id of CHAPTER_TWENTY_FOUR_SCENARIOS){const c=chapterTwentyFourCharts[id];const {container}=render(<LearningChart scenario={id} title={c.heading}/>);expect(container.querySelector('g.chapter-twenty-four-chart')?.textContent).toContain(c.heading);expect(container.querySelector('svg[role="img"] desc')?.textContent).toBe(c.description);cleanup();}
 });
 it('has stable IDs, complete steps and individual feedback with varied correct answers',()=>{
  for(const [i,l] of chapterTwentyFourLessons.entries()){
   expect(l.id).toBe(`price-action-trends.chapter-24.lesson-${String(i+1).padStart(2,'0')}`);expect(l.steps.map(s=>s.type)).toEqual(['explanation','diagram','question','recap']);
   expect(l.steps.find(s=>s.type==='explanation')?.paragraphs).toHaveLength(3);const q=l.steps.find(s=>s.type==='question');expect(q?.correctOptionId).toBe(`choice-${i%3}`);expect(q?.options).toHaveLength(3);expect(new Set(q?.options.map(o=>o.explanation)).size).toBe(3);
  }
 });
 it('uses valid bounded OHLC and focus and reference coordinates',()=>{
  for(const [id,c] of Object.entries(chapterTwentyFourCharts))for(const p of c.panels){
   for(const [o,h,l,close] of p.bars){expect(l,id).toBeLessThanOrEqual(Math.min(o,close));expect(h,id).toBeGreaterThanOrEqual(Math.max(o,close));expect(l,id).toBeGreaterThanOrEqual(0);expect(h,id).toBeLessThanOrEqual(100);}
   expect(p.focus.every(i=>i>=0&&i<p.bars.length),id).toBe(true);
   for(const line of p.lines)for(const [i,price] of [line.start,line.end]){expect(i,id).toBeGreaterThanOrEqual(0);expect(i,id).toBeLessThan(p.bars.length);expect(price,id).toBeGreaterThanOrEqual(0);expect(price,id).toBeLessThanOrEqual(100);}
  }
 });
 it('preserves the past in all replay panels',()=>{
  for(const id of ['c24-01','c24-02','c24-03','c24-05','c24-06','c24-07','c24-09','c24-10','c24-11','c24-12','c24-13','c24-14','c24-16','c24-17','c24-18','c24-19','c24-20','c24-21','c24-22'] as const){const [a,b]=chapterTwentyFourCharts[id].panels;expect(b.bars.slice(0,a.bars.length),id).toEqual(a.bars);}
 });
 it('shows a real late control reversal after the earlier buyer section',()=>{
  const [a,b]=chapterTwentyFourCharts['c24-01'].panels;expect(a.bars.at(-1)![3]).toBeGreaterThan(a.bars[0][0]);expect(b.bars.at(-1)![3]).toBeLessThan(a.bars[0][0]);
  const [first,later]=chapterTwentyFourCharts['c24-05'].panels;expect(first.bars.at(-1)![3]).toBeLessThan(70);expect(later.bars.at(-1)![3]).toBeGreaterThan(70);
 });
 it('measures the opening range and retains two actual inside bars',()=>{
  const [a,b]=chapterTwentyFourCharts['c24-10'].panels;const width=Math.max(...a.bars.map(x=>x[1]))-Math.min(...a.bars.map(x=>x[2]));expect(width).toBe(14);expect(width/40).toBe(.35);
  for(const i of [2,3]){expect(a.bars[i][1]).toBeLessThanOrEqual(a.bars[i-1][1]);expect(a.bars[i][2]).toBeGreaterThanOrEqual(a.bars[i-1][2]);}
  expect(a.bars[3][1]).toBeLessThan(40);expect(b.bars[4][1]).toBeGreaterThan(40);
 });
 it('shows two seller triggers separated by a bounce after the higher high',()=>{
  const [a,b]=chapterTwentyFourCharts['c24-11'].panels;expect(a.bars[9][1]).toBeGreaterThan(Math.max(...a.bars.slice(0,9).map(x=>x[1])));
  for(const i of [10,12])expect(b.bars[i][2]).toBeLessThan(b.bars[i-1][2]);expect(b.bars[11][3]).toBeGreaterThan(b.bars[11][0]);
 });
 it('breaks a line anchored to actual rising lows only after the acceleration',()=>{
  const p=chapterTwentyFourCharts['c24-12'].panels[0],line=p.lines[0];const price=(i:number)=>line.start[1]+(i-line.start[0])*(line.end[1]-line.start[1])/(line.end[0]-line.start[0]);
  expect(line.start).toEqual([7,p.bars[7][2]]);expect(price(9)).toBe(p.bars[9][2]);for(const i of [7,8,9])expect(p.bars[i][2]).toBeGreaterThanOrEqual(price(i));expect(p.bars[10][1]).toBeLessThan(price(10));
 });
 it('plots the actual SMA 20 instead of a drawn proxy curve',()=>{
  const p=chapterTwentyFourCharts['c24-12'].panels[1];const closes=[...Array(19).fill(40),...p.bars.map(b=>b[3])];const average=(i:number)=>closes.slice(i,i+20).reduce((a,b)=>a+b,0)/20;
  for(const line of p.lines){expect(line.kind).toBe('average');expect(line.start[1]).toBeCloseTo(average(line.start[0]),12);expect(line.end[1]).toBeCloseTo(average(line.end[0]),12);}
  expect(p.bars.slice(-5).every((b,i)=>b[3]<average(p.bars.length-5+i))).toBe(true);
 });
 it('keeps the breakout pullback below the old floor and verifies the midpoint example',()=>{
  const [a,b]=chapterTwentyFourCharts['c24-13'].panels;expect(Math.min(...a.bars.slice(12,17).map(x=>x[2]))).toBe(60);expect(a.bars[18][1]).toBe(50);expect((60+50)/2).toBe(55);expect(Math.max(...b.bars.map(x=>x[1]))).toBe(80);expect(Math.min(...b.bars.map(x=>x[2]))).toBe(30);expect((80+30)/2).toBe(55);
 });
 it('crosses the tight stop before the later new low while the structural stop holds',()=>{
  const [a,b]=chapterTwentyFourCharts['c24-14'].panels;expect(a.bars[1][1]).toBeGreaterThan(54);expect(a.bars.slice(1).every(x=>x[1]<68)).toBe(true);expect(b.bars.at(-1)![2]).toBeLessThan(Math.min(...a.bars.map(x=>x[2])));
 });
 it('builds the doji daily bar from exactly the shown intraday path',()=>{
  const [a,b]=chapterTwentyFourCharts['c24-15'].panels;expect(b.bars).toEqual([aggregate(a.bars)]);expect(b.bars[0]).toEqual([31,80,30,31]);expect(()=>aggregate([])).toThrow('Empty price path');
 });
 it('shows the bear-flag target and the failed-wedge target as reached prices',()=>{
  const [flag,follow]=chapterTwentyFourCharts['c24-17'].panels;expect(flag.bars[2][1]).toBe(60);expect(flag.bars[4][1]).toBe(59);expect(Math.min(...follow.bars.map(x=>x[2]))).toBe(40-(60-40));
  const [wedge,failed]=chapterTwentyFourCharts['c24-18'].panels;expect(Math.max(...wedge.bars.map(x=>x[1]))).toBe(60);expect(Math.min(...wedge.bars.map(x=>x[2]))).toBe(50);expect(failed.bars.at(-1)![2]).toBeLessThan(50-(60-50));
 });
 it('shows three distinct lower lows and two failed seller attempts before the buyer trigger',()=>{
  const p=chapterTwentyFourCharts['c24-19'].panels[0];expect([p.bars[0][2],p.bars[2][2],p.bars[4][2]]).toEqual([40,30,20]);
  const [a,b]=chapterTwentyFourCharts['c24-20'].panels;for(const i of [3,6])expect(a.bars[i][2]).toBeLessThan(a.bars[i-1][2]);expect(a.bars[6][2]).toBeGreaterThan(a.bars[3][2]);expect(a.bars[6][1]).toBeLessThan(35);expect(b.bars[7][1]).toBeGreaterThan(35);
 });
 it('derives both chart timeframes from the same complete aligned minute data',()=>{
  for(const [id,length] of [['c24-23',15],['c24-24',30]] as const){const [three,five]=chapterTwentyFourCharts[id].panels;
   for(const [p,period] of [[three,3],[five,5]] as const){expect(p.bars).toEqual(aggregateMinutes(minuteBars.slice(0,length),period));for(const [i,b] of p.bars.entries()){const block=minuteBars.slice(i*period,(i+1)*period);expect(b).toEqual([block[0][0],Math.max(...block.map(x=>x[1])),Math.min(...block.map(x=>x[2])),block.at(-1)![3]]);}}
   expect(aggregate(three.bars)).toEqual(aggregate(five.bars));expect(aggregate(three.bars)).toEqual(aggregate(minuteBars.slice(0,length)));
  }
  expect(()=>aggregateMinutes(minuteBars,0)).toThrow('Complete aligned');expect(()=>aggregateMinutes(minuteBars,2.5)).toThrow('Complete aligned');expect(()=>aggregateMinutes(minuteBars.slice(0,29),5)).toThrow('Complete aligned');
 });
 it('reveals two earlier inside signals only on the smaller timeframe',()=>{
  const [three,five]=chapterTwentyFourCharts['c24-23'].panels;for(const i of [1,3]){expect(three.bars[i][3]).toBeLessThan(three.bars[i][0]);expect(three.bars[i][1]).toBeLessThanOrEqual(three.bars[i-1][1]);expect(three.bars[i][2]).toBeGreaterThanOrEqual(three.bars[i-1][2]);}expect(five.bars[1][1]).toBeGreaterThan(five.bars[0][1]);expect(five.bars[2][1]).toBeGreaterThan(five.bars[1][1]);
 });
 it('shows both later bearish signal bars closed before the shared buyer trigger',()=>{
  const [three,five]=chapterTwentyFourCharts['c24-24'].panels;for(const [p,signal,entry] of [[three,7,8],[five,4,5]] as const){expect(p.bars[signal][3]).toBeLessThan(p.bars[signal][0]);expect(p.bars[signal][1]).toBeCloseTo(61.4,12);expect(p.bars.slice(0,signal+1).every(x=>x[1]<62)).toBe(true);expect(p.bars[entry][1]).toBeGreaterThan(62);}expect(minuteBars.slice(0,25).every(b=>b[1]<62)).toBe(true);expect(minuteBars[25][1]).toBeGreaterThan(62);
 });
});

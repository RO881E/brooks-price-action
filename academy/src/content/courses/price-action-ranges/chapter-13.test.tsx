import {describe,it,expect} from 'vitest';
import {renderToStaticMarkup} from 'react-dom/server';
import {rangesChapterThirteenLessons as lessons} from './chapter-13';
import {rangesDefinition} from './index';
import {chartDescription,chartScenarioIds} from '../../../components/LearningChart';
import {awayMain,awayTrend,awayBear,awayClimax,awayNear,awayBoundary,awayEma,awaySide,awayRuns,awayScenarioBars as bars,awayAggregate,awayMirror,awayMaxUnits,AwayMarks} from '../../../components/RangesAwayCharts';
describe('Ranges chapter 13: consecutive whole-bar separation and causal EMA',()=>{
 it('publishes the chapter and every described chart with appropriate higher-timeframe labels',async()=>{
  const u=rangesDefinition.units.find(u=>u.id==='price-action-ranges.chapter-13')!;expect(await u.load()).toEqual(lessons);expect(u.estimatedLessonCount).toBe(33);
  const d=lessons.flatMap(l=>l.steps.filter(s=>s.type==='diagram'));expect(new Set(d.map(s=>s.scenario)).size).toBe(25);
  for(const s of d){expect(chartScenarioIds()).toContain(s.scenario);expect(chartDescription(s.scenario).length).toBeGreaterThan(70);}
  expect(d.find(s=>s.scenario==='par13-higher')!.caption).toContain('Drei-Minuten');
 });
 it('computes initialized EMA20 from past and current closes without future changes',()=>{
  const ema=awayEma(awayMain);expect(ema[0]).toBeCloseTo(100+4.8*2/21);
  expect(ema[19]).toBeCloseTo(115.0701245713087);expect(ema[20]).toBeCloseTo(115.15868413594596);
  for(let end=1;end<=awayMain.length;end++)expect(awayEma(awayMain.slice(0,end))).toEqual(ema.slice(0,end));
  expect(awayEma(awayMain,20,120)).toEqual(ema);
 });
 it('counts nineteen and twenty only at their own completed cutoffs and resets on contact',()=>{
  expect(bars('par13-nineteen')).toHaveLength(19);expect(awayRuns(bars('par13-nineteen')).at(-1)).toBe(19);
  expect(awayRuns(awayTrend)).toEqual(Array.from({length:20},(_,i)=>i+1));expect(awayRuns(awayMain)[20]).toBe(0);expect(awayRuns(awayMain)[21]).toBe(1);
  const svg=renderToStaticMarkup(<svg><AwayMarks scenario="par13-nineteen"/></svg>);expect((svg.match(/candle-body/g)||[])).toHaveLength(19);expect(svg).not.toContain('Hoch20 124');
 });
 it('uses full high/low spans, exact equality and same-side runs rather than close-only counts',()=>{
  expect(awayEma(awayBoundary)[0]).toBe(101);expect(awaySide(awayBoundary[0],101)).toBe('contact');
  expect(awaySide({open:101,high:104,low:99,close:103},100)).toBe('contact');
  expect(awaySide({open:99,high:100,low:98,close:99},100)).toBe('contact');
  const sample=[{open:101,high:103,low:101,close:102},{open:101,high:104,low:100,close:103},{open:101,high:103,low:101,close:102},{open:99,high:99.5,low:98,close:98.5}];
  expect(awayRuns(sample,[100,100,100,100])).toEqual([1,0,1,1]);
 });
 it('keeps near-test positive using unrounded EMA and preserves all earlier twenty bars',()=>{
  expect(awayNear.slice(0,20)).toEqual(awayTrend);const ema=awayEma(awayNear).at(-1)!;
  expect(ema).toBeCloseTo(115.34916032642215);expect(awayNear[20].low-ema).toBeGreaterThan(0);expect(awayNear[20].low-ema).toBeCloseTo(.05083967357785);
  expect(awayRuns(awayNear).at(-1)).toBe(21);
 });
 it('compares signal, non-trigger, near-extreme and later new extreme chronologically',()=>{
  const missing=bars('par13-untriggered');expect(missing.slice(0,22)).toEqual(awayMain.slice(0,22));expect(missing[22].high).toBeLessThan(119.1);
  expect(bars('par13-signal')).toHaveLength(22);expect(awayMain[22].high).toBeGreaterThan(119.1);expect(awayMain[23].high).toBe(123.5);expect(awayMain[24].high).toBeGreaterThan(124);
  expect(Math.max(...awayMain.slice(22,24).map(b=>b.high))).toBeLessThan(124);
  const failure=bars('par13-reversal');expect(failure.slice(0,20)).toEqual(awayTrend);expect(failure[21].close).toBeLessThan(failure[20].close);
 });
 it('mirrors all prices and same-time EMA consistently',()=>{
  const m=awayTrend.map(awayMirror),ema=awayEma(awayTrend),bear=awayEma(m);expect(bars('par13-bear-away')).toEqual(m);
  for(let i=0;i<20;i++){expect(bear[i]).toBeCloseTo(200-ema[i]);expect(awaySide(m[i],bear[i])).toBe('below');expect(awayMirror(m[i]).low).toBeCloseTo(awayTrend[i].low);}
  expect(Math.min(...m.map(b=>b.low))).toBe(76);
 });
 it('finds the first contact after six green counterbars and separates first/second short attempts',()=>{
  const ema=awayEma(awayBear);
  for(let i=20;i<26;i++)expect(awayBear[i].close).toBeGreaterThan(awayBear[i].open);
  for(let i=20;i<25;i++)expect(awaySide(awayBear[i],ema[i])).toBe('below');expect(awaySide(awayBear[25],ema[25])).toBe('contact');
  expect(awayBear[26].high).toBeLessThan(awayBear[25].high);expect(awayBear[26].low).toBeGreaterThan(awayBear[25].low);
  expect(awayBear[27].low).toBeLessThan(82.6);expect(awayBear[27].close).toBeGreaterThan(82.6);
  expect(awayBear[28].low-.1).toBeCloseTo(83.3);expect(awayBear[29].close).toBeLessThan(83.3);
  expect(awayBear[30].low).toBe(77);expect(awayBear[30].low).toBeGreaterThan(76);expect(awayBear[31].high).toBeCloseTo(awayBear[28].high-.1);
 });
 it('keeps acceleration context, first contact, second signal and failed follow-through distinct',()=>{
  expect(awayClimax.slice(0,17)).toEqual(awayTrend.slice(0,17));expect(awayRuns(awayClimax.slice(0,20)).at(-1)).toBe(20);
  const bodies=awayClimax.slice(17,20).map(b=>b.close-b.open);expect(bodies[1]).toBeGreaterThan(bodies[0]);expect(bodies[2]).toBeGreaterThan(bodies[1]);
  const ema=awayEma(awayClimax);expect(awaySide(awayClimax[20],ema[20])).toBe('above');expect(awaySide(awayClimax[21],ema[21])).toBe('contact');
  expect(awayClimax[23].high).toBeLessThan(ema[23]);expect(awayClimax[24].low).toBeLessThan(awayClimax[22].low);expect(awayClimax[25].close).toBeGreaterThan(awayClimax[25].open);
  expect(bars('par13-climax-second')).toHaveLength(26);expect(awayClimax[26].high).toBeGreaterThan(111.9);expect(awayClimax[27].low).toBe(99);
 });
 it('aggregates only complete groups and computes a separate higher-frame EMA and count',()=>{
  const g=bars('par13-higher');expect(g).toEqual(awayAggregate(awayTrend.slice(0,18),3));expect(g).toHaveLength(6);
  expect(g[0]).toEqual({open:104,high:107,low:103.8,close:106.8});expect(g[5].close).toBe(121.8);expect(awayRuns(g).at(-1)).toBe(6);
  expect(awayAggregate([...awayTrend.slice(0,18),{open:120,high:1000,low:1,close:500}],3)).toEqual(g);
  expect(awayEma(g)[0]).toBeCloseTo(100+6.8*2/21);expect(awayEma(g)[0]).not.toBe(awayEma(awayTrend)[2]);
 });
 it('reconciles model quantities, target profit and remaining partial-position risk',()=>{
  expect(awayMaxUnits(30,2,119.1,113.9)).toBe(5);expect(5*(119.1-113.9)+2).toBeCloseTo(28);expect(6*(119.1-113.9)+2).toBeGreaterThan(30);
  expect(5*(124-119.1)-2).toBeCloseTo(22.5);expect(2*(124-119.1)).toBeCloseTo(9.8);expect(3*(119.1-113.9)).toBeCloseTo(15.6);expect(2*(124-119.1)-3*(119.1-113.9)).toBeCloseTo(-5.8);
  expect(20*5).toBe(100);expect(120/5).toBe(24);
 });
 it('renders all valid synthetic datasets with finite geometry',()=>{
  for(const s of chartScenarioIds().filter(s=>s.startsWith('par13-'))){for(const b of bars(s)){expect(b.low).toBeLessThanOrEqual(Math.min(b.open,b.close));expect(b.high).toBeGreaterThanOrEqual(Math.max(b.open,b.close));}
   const svg=renderToStaticMarkup(<svg><AwayMarks scenario={s}/></svg>);expect(svg).not.toMatch(/NaN|Infinity/);expect(svg).toContain('EMA20');}
 });
});

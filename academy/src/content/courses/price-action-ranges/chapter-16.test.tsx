import {describe,it,expect} from 'vitest';
import {renderToStaticMarkup} from 'react-dom/server';
import {rangesChapterSixteenLessons as lessons} from './chapter-16';
import {rangesDefinition} from './index';
import {chartDescription,chartScenarioIds} from '../../../components/LearningChart';
import {countingMain as b,countingTest,countingFlag,countingWedge,countingEma,countingSwingConfirmed,countingEqualProjection,countingRangeProjection,countingAggregate,countingUnits,countingScenarioBars as bars,CountingMarks} from '../../../components/RangesCountingCharts';
describe('Ranges chapter 16: scales, confirmed anchors and equal-path countercases',()=>{
 it('publishes all lessons, comparison IDs and correctly captioned scales',async()=>{
  const u=rangesDefinition.units.find(u=>u.id==='price-action-ranges.chapter-16')!;expect(await u.load()).toEqual(lessons);expect(u.estimatedLessonCount).toBe(33);
  const d=lessons.flatMap(l=>l.steps.filter(s=>s.type==='diagram'));expect(new Set(d.map(s=>s.scenario)).size).toBe(27);expect(new Set(lessons.flatMap(l=>l.steps.map(s=>s.id))).size).toBe(166);
  for(const s of d){expect(chartScenarioIds()).toContain(s.scenario);expect(chartDescription(s.scenario).length).toBeGreaterThan(70);}
  expect(d.find(s=>s.scenario==='par16-higher')!.caption).toContain('Zehn-Minuten');expect(d.find(s=>s.scenario==='par16-small-correction')!.caption).toContain('Fünf-Minuten');
 });
 it('uses causal seeded EMA and a real prior lower-high break for the first upward movement',()=>{
  const ema=countingEma(b);expect(ema[0]).toBeCloseTo(126+(123.8-126)*2/21);for(let end=1;end<=b.length;end++)expect(countingEma(b.slice(0,end))).toEqual(ema.slice(0,end));
  expect(b[5].close).toBeGreaterThan(124);expect(b[5].close).toBeGreaterThan(ema[5]);expect(b[6].high).toBe(128);expect(countingSwingConfirmed(b.slice(0,4),2,'high')).toBe(4);
 });
 it('makes anchor availability depend on following completed bars',()=>{
  expect(countingSwingConfirmed(b.slice(0,7),6,'high')).toBeUndefined();expect(countingSwingConfirmed(b.slice(0,8),6,'high')).toBe(8);
  expect(countingSwingConfirmed(b.slice(0,9),8,'low')).toBeUndefined();expect(countingSwingConfirmed(b.slice(0,10),8,'low')).toBe(10);expect(countingSwingConfirmed(b.slice(0,5),3,'low')).toBe(5);
  expect(b[8].low-b[3].low).toBe(4);
 });
 it('preserves shared histories for old-low failure, non-trigger and second-top failure',()=>{
  expect(bars('par16-new-low').slice(0,7)).toEqual(b.slice(0,7));expect(bars('par16-new-low')[7].low).toBeLessThan(116);
  expect(bars('par16-untriggered').slice(0,10)).toEqual(b.slice(0,10));expect(bars('par16-untriggered')[10].high).toBeLessThan(123.3);
  expect(bars('par16-failure').slice(0,11)).toEqual(b.slice(0,11));expect(b[10].high).toBeLessThan(128);expect(bars('par16-failure')[11].low).toBeLessThan(120);expect(bars('par16-failure')[12].low).toBeLessThan(116);
 });
 it('prepares the twelve-point target before confirmation and does not leak later prices into signal view',()=>{
  expect(countingEqualProjection(116,128,120)).toBe(132);expect(b[9].high+.1).toBeCloseTo(123.3);expect(b[10].high).toBeGreaterThan(123.3);
  expect(Math.max(...b.slice(0,12).map(x=>x.high))).toBeLessThan(132);expect(b[12].high).toBe(132);
  const svg=renderToStaticMarkup(<svg><CountingMarks scenario="par16-signal"/></svg>);expect((svg.match(/candle-body/g)||[])).toHaveLength(10);expect(svg).not.toContain('Stand13');
 });
 it('counts the later correction separately from the first two upward movements',()=>{
  expect(b[13].low).toBe(126);expect(b[14].high).toBe(129);expect(b[15].low).toBeLessThan(b[13].low);expect(bars('par16-post').slice(0,13)).toEqual(bars('par16-resume'));
 });
 it('separates old signal high, assumed entry and exact retest with later confirmation',()=>{
  const t=countingTest;expect(t[1].high).toBe(104);expect(t[1].high+.1).toBeCloseTo(104.1);expect(t[5].low).toBe(t[1].high);expect(t[5].low).toBeLessThan(104.1);expect(t[4].low).toBeGreaterThan(104.1);
  expect(countingSwingConfirmed(t.slice(0,6),5,'low')).toBeUndefined();expect(countingSwingConfirmed(t.slice(0,7),5,'low')).toBe(7);
  expect(countingEqualProjection(t[1].low,t[3].high,t[5].low)).toBe(113);expect(t[8].high).toBeGreaterThan(113);
 });
 it('changes only the declared retest low in near and through variants',()=>{
  for(const s of ['par16-test-near','par16-test-through'] as const){const v=bars(s);expect(v.slice(0,5)).toEqual(countingTest.slice(0,5));expect({...v[5],low:104}).toEqual(countingTest[5]);}
  expect(bars('par16-test-near')[5].low).toBeGreaterThan(104.1);expect(bars('par16-test-through')[5].low).toBeLessThan(104);
 });
 it('measures a two-rally bearish flag with its own EMA, projection boundary and opposite failure',()=>{
  const c=countingFlag,ema=countingEma(c,106);expect(c[4].high-c[2].high).toBeCloseTo(-.1);expect(c[4].low).toBeLessThan(ema[4]);expect(c[4].high).toBeGreaterThan(ema[4]);
  expect(countingRangeProjection(106,103.5)).toBe(101);expect(106-2*(106-103.5)).toBe(101);expect(103.5-2*(106-103.5)).toBe(98.5);
  expect(c[5].low).toBe(101);expect(c[6].high).toBe(103.8);expect(c[7].low).toBeLessThan(c[5].low);
  expect(bars('par16-bear-fail').slice(0,5)).toEqual(c.slice(0,5));expect(bars('par16-bear-fail')[5].high).toBeGreaterThan(106);expect(bars('par16-bear-fail')[5].high).toBeLessThan(c[0].high);
 });
 it('compares a 150-minute buildup with its 40-minute finer correction without relabeling future bars',()=>{
  expect(bars('par16-wedge')).toHaveLength(30);expect(bars('par16-small-correction')).toHaveLength(38);expect(30*5).toBe(150);expect(8*5).toBe(40);
  const w=countingWedge;expect(w[6].high).toBeCloseTo(111.4);expect(w[16].high).toBeCloseTo(118.4);expect(w[29].high).toBeCloseTo(120.9);
  for(const i of [30,31,32])expect(w[i].close).toBeLessThan(w[i].open);expect(w[33].close).toBeGreaterThan(w[33].open);for(const i of [34,35,36,37])expect(w[i].close).toBeLessThan(w[i].open);
  const svg=renderToStaticMarkup(<svg><CountingMarks scenario="par16-small-correction"/></svg>);expect((svg.match(/candle-body/g)||[])).toHaveLength(8);expect(svg).toContain('Zoom');expect(svg).not.toContain('Stand44');
 });
 it('aggregates the exact same complete data into a continuous higher-scale downward section',()=>{
  const g=bars('par16-higher');expect(g).toEqual(countingAggregate(countingWedge.slice(0,38),2));expect(g).toHaveLength(19);
  const last=g.slice(-4);for(const c of last)expect(c.close).toBeLessThan(c.open);for(let i=1;i<4;i++){expect(last[i].high).toBeLessThan(last[i-1].high);expect(last[i].low).toBeLessThan(last[i-1].low);}
  expect(countingAggregate([...countingWedge.slice(0,38),{open:110.6,high:1000,low:1,close:500}],2)).toEqual(g);
 });
 it('allows the larger second corrective section to finish higher before a later new extreme',()=>{
  expect(countingWedge[40].low-countingWedge[37].low).toBeCloseTo(.3);expect(bars('par16-sideways')).toHaveLength(41);expect(bars('par16-wedge-resume').slice(0,41)).toEqual(bars('par16-sideways'));
  expect(countingWedge[43].high).toBeGreaterThan(countingWedge[29].high);
 });
 it('reconciles unit budget, price risk and projected net return independently',()=>{
  expect(countingUnits(40,2,123.3,119.9)).toBe(11);expect(11*(123.3-119.9)+2).toBeCloseTo(39.4);expect(12*(123.3-119.9)+2).toBeGreaterThan(40);expect(11*(132-123.3)-2).toBeCloseTo(93.7);
 });
 it('renders all registered synthetic cases with valid candles and finite geometry',()=>{
  for(const s of chartScenarioIds().filter(s=>s.startsWith('par16-'))){for(const c of bars(s)){expect(c.low).toBeLessThanOrEqual(Math.min(c.open,c.close));expect(c.high).toBeGreaterThanOrEqual(Math.max(c.open,c.close));}
   const svg=renderToStaticMarkup(<svg><CountingMarks scenario={s}/></svg>);expect(svg).not.toMatch(/NaN|Infinity/);expect(svg).toContain('Erfundene Daten');}
 });
});

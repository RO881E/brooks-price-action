import {describe,it,expect} from 'vitest';
import {renderToStaticMarkup} from 'react-dom/server';
import {rangesChapterTwelveLessons as lessons} from './chapter-12';
import {rangesDefinition} from './index';
import {chartDescription,chartScenarioIds} from '../../../components/LearningChart';
import {doubleFlagBars as b,doubleFlagScenarioBars as bars,doubleFlagMirror,doubleFlagProjection,doubleFlagMaxUnits,doubleFlagAggregate,doubleFlagInside,doubleFlagChannel,DoubleFlagMarks} from '../../../components/RangesDoubleFlagCharts';
describe('Ranges chapter 12: double flags, failures and causal comparisons',()=>{
 it('publishes all lessons and chart cases with stable extra comparisons',async()=>{
  const u=rangesDefinition.units.find(u=>u.id==='price-action-ranges.chapter-12')!;expect(await u.load()).toEqual(lessons);expect(u.estimatedLessonCount).toBe(43);
  const d=lessons.flatMap(l=>l.steps.filter(s=>s.type==='diagram'));expect(new Set(d.map(s=>s.scenario)).size).toBe(35);expect(new Set(lessons.flatMap(l=>l.steps.map(s=>s.id))).size).toBe(217);
  for(const s of d){expect(chartScenarioIds()).toContain(s.scenario);expect(chartDescription(s.scenario).length).toBeGreaterThan(70);}expect(d.find(s=>s.scenario==='par12-higher')!.caption).toContain('Drei-Minuten');
 });
 it('keeps low confirmation and H1/H2 causal, without showing future breakout candles',()=>{
  expect(b[4].low).toBeGreaterThan(b[3].low);expect(b[6].low).toBeGreaterThan(b[5].low);expect(b[4].high).toBeGreaterThan(b[3].high);expect(b[6].high).toBeLessThan(b[5].high);expect(b[7].high).toBeGreaterThan(b[6].high);
  expect(bars('par12-first')).toHaveLength(5);expect(bars('par12-bottom')).toHaveLength(6);expect(bars('par12-signal')).toHaveLength(7);
  const svg=renderToStaticMarkup(<svg><DoubleFlagMarks scenario="par12-entry"/></svg>);expect((svg.match(/candle-body/g)||[])).toHaveLength(7);expect(svg).not.toContain('H8 95');
 });
 it('preserves the same signal before continuation, non-trigger and ambiguous intrabar outcome',()=>{
  for(const s of ['par12-untriggered','par12-trigger-fail','par12-breakout'] as const)expect(bars(s).slice(0,7)).toEqual(b.slice(0,7));
  expect(bars('par12-untriggered')[7].high).toBeLessThan(92.9);const f=bars('par12-trigger-fail')[7];expect(f.high).toBeGreaterThan(92.9);expect(f.low).toBeLessThan(90.1);expect(f.close).toBe(90);
  expect(b[7].high).toBeGreaterThan(94);expect(b[7].high).toBeLessThan(96);expect(b[8].high).toBeGreaterThan(98);
 });
 it('changes only the declared second low in exact/undercut cases and keeps fixed tolerance',()=>{
  for(const s of ['par12-equal','par12-undercut'] as const){const v=bars(s);expect(v.slice(0,5)).toEqual(b.slice(0,5));expect({...v[5],low:b[5].low}).toEqual(b[5]);expect(v[5].low).toBeGreaterThanOrEqual(89.7);expect(v[5].low).toBeLessThanOrEqual(90.3);}
  expect(bars('par12-equal')[5].low).toBe(90);expect(bars('par12-undercut')[5].low).toBe(89.8);
 });
 it('mirrors highs, lows and prior trend together',()=>{
  const top=bars('par12-top');expect(top).toEqual(b.slice(0,6).map(doubleFlagMirror));expect(top[3].high).toBe(110);expect(top[5].high).toBeCloseTo(109.8);expect(top[2].low).toBe(104);
  for(const c of b){const twice=doubleFlagMirror(doubleFlagMirror(c));for(const k of ['open','high','low','close'] as const)expect(twice[k]).toBeCloseTo(c[k]);}
 });
 it('distinguishes competing high defense and post-breakdown continuation or third-push return',()=>{
  expect(bars('par12-defense').slice(0,6)).toEqual(b.slice(0,6));expect(bars('par12-defense')[6].high).toBeLessThan(94);expect(bars('par12-defense-down')[7].low).toBe(88);
  for(const s of ['par12-third','par12-down-follow'] as const)expect(bars(s).slice(0,8)).toEqual(bars('par12-untriggered'));
  const third=bars('par12-third');expect([third[3].low,third[5].low,third[7].low]).toEqual([90,90.2,88]);expect(third[8].close).toBeGreaterThan(90);expect(bars('par12-down-follow')[8].close).toBeLessThan(88);
  expect(third[8].high).toBe(92.2);expect(bars('par12-third-entry')[9].high).toBeGreaterThan(92.3);
 });
 it('keeps two-sided probes and channel/shoulder anchors independent',()=>{
  const both=bars('par12-two-sided');expect(both.slice(0,7)).toEqual(b.slice(0,7));expect(both[7].high).toBeGreaterThan(94);expect(both[8].low).toBeLessThan(90);
  const c=doubleFlagChannel;expect(c[5].low-c[1].low).toBeCloseTo(.2);expect(c[4].high).toBe(119);expect(c[6].high).toBeLessThan(119);expect(c[7].high).toBeGreaterThan(113.6);expect(c[7].high).toBeLessThan(119);
  expect(bars('par12-channel')).toHaveLength(6);expect(bars('par12-shoulders')).toHaveLength(7);
 });
 it('computes fixed/alternate projections and confirms target and later pause only when known',()=>{
  expect(doubleFlagProjection(90,94,'up')).toBe(98);expect(doubleFlagProjection(90,94,'down')).toBe(86);expect(doubleFlagProjection(90.2,94,'up')).toBeCloseTo(97.8);expect(90.2+(94-90)/4).toBeCloseTo(91.2);
  expect(Math.max(...bars('par12-breakout').map(c=>c.high))).toBeLessThan(98);expect(bars('par12-target')[8].high).toBeGreaterThanOrEqual(98);
  expect(bars('par12-high-pause')).toHaveLength(10);expect(bars('par12-follow').slice(0,10)).toEqual(bars('par12-high-pause'));expect(b[9].low).toBeGreaterThan(94);expect(b[11].low-b[9].low).toBeCloseTo(.1);expect(b[10].high).toBe(101);
 });
 it('compares entry-bar trailing and later entry-price retest using the same trade history',()=>{
  const v=bars('par12-entry-test');expect(v.slice(0,8)).toEqual(b.slice(0,8));expect(v[8].low).toBe(92.9);expect(v[8].low).toBeGreaterThan(90.1);expect(b[7].low-.1).toBeCloseTo(92.4);expect(bars('par12-trail')).toHaveLength(8);
 });
 it('derives integer unit budgets without binary floating-point undercounting',()=>{
  expect(doubleFlagMaxUnits(30,2,92.9,90.1)).toBe(10);expect(10*(92.9-90.1)+2).toBeCloseTo(30);expect(10*(98-92.9)-2).toBeCloseTo(49);
  expect(doubleFlagMaxUnits(30,2,92.9,89.9)).toBe(9);expect(9*(92.9-89.9)+2).toBeCloseTo(29);expect(10*(92.9-89.9)+2).toBeGreaterThan(30);expect(doubleFlagMaxUnits(1,2,92.9,90.1)).toBe(0);
  expect(92.3-87.9).toBeCloseTo(4.4);expect(94-92.3).toBeCloseTo(1.7);
 });
 it('builds ii from complete groups of the explicitly disclosed variant',()=>{
  const g=bars('par12-higher');expect(g).toEqual(doubleFlagAggregate(doubleFlagInside,3));expect(g).toHaveLength(3);expect(g[0]).toEqual({open:80,high:96,low:79.8,close:93.8});
  for(let i=1;i<3;i++){expect(g[i].high).toBeLessThan(g[i-1].high);expect(g[i].low).toBeGreaterThan(g[i-1].low);}
  expect(doubleFlagAggregate([...doubleFlagInside,{open:92,high:1000,low:1,close:500}],3)).toEqual(g);expect(g).not.toEqual(doubleFlagAggregate(b.slice(0,9),3));
 });
 it('renders all scenarios with valid synthetic OHLC and finite geometry',()=>{
  for(const s of chartScenarioIds().filter(s=>s.startsWith('par12-'))){for(const c of bars(s)){expect(c.low).toBeLessThanOrEqual(Math.min(c.open,c.close));expect(c.high).toBeGreaterThanOrEqual(Math.max(c.open,c.close));}const svg=renderToStaticMarkup(<svg><DoubleFlagMarks scenario={s}/></svg>);expect(svg).not.toMatch(/NaN|Infinity/);expect(svg).toContain('Erfundene Daten');}
 });
});

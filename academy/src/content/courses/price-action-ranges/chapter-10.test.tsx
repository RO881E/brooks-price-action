import {describe,it,expect} from 'vitest';
import {renderToStaticMarkup} from 'react-dom/server';
import {rangesChapterTenLessons as lessons} from './chapter-10';
import {rangesDefinition} from './index';
import {magnetBars,magnetTrendBars,magnetScenarioBars,magnetFailureBars,magnetNoTestBars,magnetEntryTestBars,magnetMirror,magnetLine,magnetChannel,magnetSma,magnetAggregate,magnetRetracement,magnetPreviousDay,MagnetMarks} from '../../../components/RangesMagnetCharts';
import {chartScenarioIds,chartDescription} from '../../../components/LearningChart';
const answer=(title:string)=>{const q=lessons.find(l=>l.title===title)!.steps.find(s=>s.type==='question')!;return q.options.find(o=>o.id===q.correctOptionId)!.label;};
describe('Ranges chapter 10: disclosed magnets, comparisons and execution assumptions',()=>{
 it('loads chapter 10 and registers its charts, extra comparisons and appropriate time labels',async()=>{
  const unit=rangesDefinition.units[10];expect(await unit.load()).toEqual(lessons);expect(unit.estimatedLessonCount).toBe(37);expect(lessons).toHaveLength(37);
  const steps=lessons.flatMap(l=>l.steps.filter(s=>s.type==='diagram'));
  expect(new Set(steps.map(s=>s.scenario)).size).toBe(29);
  for(const d of steps){expect(chartScenarioIds()).toContain(d.scenario);expect(chartDescription(d.scenario).length).toBeGreaterThan(60);}
  expect(steps.find(s=>s.scenario==='par10-higher')!.caption).toContain('Drei-Minuten');expect(steps.find(s=>s.scenario==='par10-gap')!.caption).toContain('zwei Minuten der neuen');
 });
 it('keeps the big-bar, inside-bar and failed-test paths coherent and time-limited',()=>{
  const big=magnetBars[4],inside=magnetBars[5],test=magnetBars[6];expect(big.open).toBe(big.low);expect(big.close-big.open).toBe(5);expect(big.high-big.low).toBeCloseTo(5.2);
  expect(inside.high).toBeLessThan(big.high);expect(inside.low).toBeGreaterThan(big.low);expect(test.low).toBeLessThan(101.7);expect(test.close).toBeGreaterThan(big.low);expect(test.low).toBeGreaterThan(magnetBars[3].low);
  expect(magnetScenarioBars('par10-big')).toHaveLength(5);expect(magnetScenarioBars('par10-inside')).toHaveLength(6);expect(magnetScenarioBars('par10-test')).toHaveLength(7);
  const early=renderToStaticMarkup(<svg><MagnetMarks scenario="par10-big"/></svg>);expect((early.match(/candle-body/g)||[])).toHaveLength(5);expect(early).not.toContain('Modellstop');
 });
 it('preserves common histories before rebound, deeper failure and no immediate test',()=>{
  expect(magnetFailureBars.slice(0,6)).toEqual(magnetBars.slice(0,6));expect(magnetFailureBars[6].close).toBe(99.5);expect(magnetFailureBars[7].close).toBe(97.5);
  expect(magnetNoTestBars.slice(0,5)).toEqual(magnetBars.slice(0,5));expect(magnetNoTestBars[5].low).toBeGreaterThan(magnetBars[4].low);expect(magnetNoTestBars[5].close).toBeGreaterThan(magnetBars[4].high);
  const bear=magnetScenarioBars('par10-mirror');expect(bear).toEqual(magnetBars.slice(0,8).map(magnetMirror));expect(bear[4].high).toBeCloseTo(98.2);expect(bear[6].high).toBeCloseTo(98.4);expect(bear[6].close).toBeLessThan(98.2);
 });
 it('keeps outside daily context distinct from intraday-derived values and projections',()=>{
  expect(magnetPreviousDay).toEqual({open:100,high:109,low:97,close:104,session:'09:00–17:00 UTC'});
  const range=magnetBars.slice(0,4),low=Math.min(...range.map(b=>b.low)),high=Math.max(...range.map(b=>b.high));expect(low).toBe(98);expect(high).toBe(102);expect(high+(high-low)).toBe(106);expect((low+high)/2).toBe(100);
  expect(magnetBars[4].high).toBeGreaterThan(106);expect(magnetPreviousDay.high-magnetBars[4].close).toBeCloseTo(2.2);expect(answer('Hoch und Tief des Vortags als äußere Bezüge lesen')).toBe('2,2 Punkte.');
 });
 it('computes selected trend/channel lines and keeps successive SMA values separate',()=>{
  expect(magnetLine(1)).toBe(magnetTrendBars[0].low);expect(magnetLine(3)).toBe(magnetTrendBars[2].low);expect(magnetLine(6)).toBe(104);expect(magnetChannel(2)).toBe(magnetTrendBars[1].high);expect(magnetChannel(6)).toBe(107);expect(magnetTrendBars[5].high-magnetChannel(6)).toBeCloseTo(.6);
  expect(magnetSma(magnetTrendBars.slice(0,6),3)).toBeCloseTo(105.333333);expect(magnetSma(magnetTrendBars,3)).toBeCloseTo(105.666667);expect(magnetTrendBars[6].low).toBeLessThan(magnetSma(magnetTrendBars.slice(0,6),3));
  expect(magnetSma(magnetBars.slice(0,4),3)).toBeCloseTo(101.1);expect(magnetBars[4].low-magnetSma(magnetBars.slice(0,4),3)).toBeCloseTo(.7);expect(magnetBars[4].low).toBeLessThan(magnetBars[3].high);
 });
 it('uses real completed-group aggregation without exposing open-group extrema',()=>{
  expect(magnetAggregate(magnetTrendBars.slice(0,6),3)).toEqual([{open:100,high:104,low:99,close:103},{open:103,high:107.6,low:102,close:107}]);
  expect(magnetAggregate(magnetTrendBars.slice(0,4),3)).toHaveLength(1);expect(magnetScenarioBars('par10-higher')).toHaveLength(2);
 });
 it('distinguishes partial gap return, completed gap contact and a later flag failure',()=>{
  const gap=magnetScenarioBars('par10-gap');expect(gap).toHaveLength(3);expect(gap[1].low-gap[0].high).toBeCloseTo(2.6);expect(gap[2].low).toBeGreaterThan(gap[0].high);
  const filled=magnetScenarioBars('par10-gap-filled');expect(filled.slice(0,3)).toEqual(gap);expect(filled[3].low).toBeLessThan(gap[0].high);
  const flag=magnetScenarioBars('par10-flag-start'),later=magnetScenarioBars('par10-flag-return');expect(flag).toHaveLength(4);expect(later.slice(0,4)).toEqual(flag);expect(later[4].high).toBe(108);expect(later[6].close).toBeLessThan(104.8);
 });
 it('reconciles retracement prices and price-step rounding from selected swing',()=>{
  const low=magnetBars[3].low,high=magnetBars[4].high;expect(high-low).toBeCloseTo(7.2);expect(magnetRetracement(low,high,.5)).toBeCloseTo(103.4);expect(magnetRetracement(low,high,.618)).toBeCloseTo(102.5504);
  expect(Math.round(magnetRetracement(low,high,.618)*10)/10).toBe(102.6);expect(high+(high-low)).toBeCloseTo(114.2);expect(answer('Fibonacci-Rechnungen brauchen einen ausdrücklich gewählten Swing')).toBe('103,4.');
 });
 it('reconciles stops, payout scenarios, fixed-distance targets and a late net loss',()=>{
  const risk=105.1-101.5;expect(risk).toBeCloseTo(3.6);expect(105.1+risk).toBeCloseTo(108.7);expect(risk*7+2).toBeCloseTo(27.2);expect(risk*8+2).toBeCloseTo(30.8);
  expect((107-105.1)*7-2).toBeCloseTo(11.3);expect((110-105.1)*7-2).toBeCloseTo(32.3);expect(105.1+3).toBeCloseTo(108.1);
  expect((110-109.8)*5-2).toBeCloseTo(-1);expect((109.8-108.4)*5+2).toBeCloseTo(9);expect(answer('Preisziele in Geld übersetzen')).toBe('Sieben.');
 });
 it('separates signal/entry protection and a retest of the actual assumed entry price',()=>{
  expect(magnetBars[7].low-.1).toBeCloseTo(102);expect(magnetBars[8].low-.1).toBeCloseTo(104.4);expect(magnetEntryTestBars.slice(0,9)).toEqual(magnetBars.slice(0,9));expect(magnetEntryTestBars[9].low).toBeLessThan(105.1);expect(magnetEntryTestBars[9].close).toBeGreaterThan(105.1);
 });
 it('renders all registered charts without invalid ranges or nonfinite geometry',()=>{
  for(const s of chartScenarioIds().filter(s=>s.startsWith('par10-'))){const bars=magnetScenarioBars(s);for(const b of bars){expect(b.high).toBeGreaterThanOrEqual(Math.max(b.open,b.close));expect(b.low).toBeLessThanOrEqual(Math.min(b.open,b.close));}const markup=renderToStaticMarkup(<svg><MagnetMarks scenario={s}/></svg>);expect(markup).not.toMatch(/NaN|Infinity|undefined/);expect((markup.match(/candle-body/g)||[])).toHaveLength(bars.length);}
 });
});

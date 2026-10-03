import {describe,it,expect} from 'vitest';
import {renderToStaticMarkup} from 'react-dom/server';
import {rangesChapterFourLessons as lessons} from './chapter-04';
import {rangesDefinition} from './index';
import {trendBars,secondAttemptBars,trendFailureBars,nextDayBars,trendMirror,trendScenarioBars,TrendMarks} from '../../../components/RangesTrendCharts';
import {chartScenarioIds,chartDescription} from '../../../components/LearningChart';
const answer=(title:string)=>{const q=lessons.find(l=>l.title===title)!.steps.find(s=>s.type==='question')!;return q.options.find(o=>o.id===q.correctOptionId)!.label;};
describe('Ranges chapter 4: entries in an existing trend',()=>{
 it('loads the fifth unit and provides consistent lesson metadata and described charts',async()=>{
  expect(await rangesDefinition.units[4].load()).toEqual(lessons);expect(lessons).toHaveLength(25);
  expect(rangesDefinition.units[4].estimatedLessonCount).toBe(lessons.length);
  for(const l of lessons){expect(l.id).toMatch(/^price-action-ranges.chapter-04\./);const d=l.steps.find(s=>s.type==='diagram')!;expect(chartScenarioIds()).toContain(d.scenario);expect(chartDescription(d.scenario).length).toBeGreaterThan(40);}
 });
 it('distinguishes the earlier trigger from merely touching and then exceeding the old high',()=>{
  const old=trendBars[3].high,pause=trendBars[4];
  expect(pause.high+.1).toBeCloseTo(old);expect(old+.1).toBeCloseTo(100.1);
  expect(trendBars[5].high).toBeGreaterThan(old+.1);expect(trendBars[5].close).toBeGreaterThan(old);
  expect(answer('Vor dem alten Hoch kann ein früherer Auslöser liegen')).toBe('100,0; das alte Trendhoch wird damit nur berührt.');
  expect(trendScenarioBars('par4-context')).toHaveLength(4);expect(trendScenarioBars('par4-pullback')).toHaveLength(5);
 });
 it('requires a renewed correction between the two illustrated attempts',()=>{
  expect(secondAttemptBars[5].high).toBeGreaterThan(secondAttemptBars[4].high);
  expect(secondAttemptBars[6].low).toBeLessThan(secondAttemptBars[5].low);
  expect(secondAttemptBars[7].high).toBeLessThan(secondAttemptBars[6].high);
  expect(secondAttemptBars[8].high).toBeGreaterThan(secondAttemptBars[7].high);
  expect(answer('Zwei Versuche benötigen eine erneute Gegenbewegung')).toBe('Eine erneute Gegenbewegung zwischen ihnen.');
  expect(trendFailureBars.slice(0,5)).toEqual(trendBars.slice(0,5));
  expect(trendFailureBars[5].high).toBeGreaterThan(100);expect(trendFailureBars[5].close).toBeLessThan(100);
 });
 it('reconciles risk, target distances and the loss of a countertrend addition',()=>{
  const stop=99,target=101.8;expect((100-stop)*10).toBeCloseTo(10);expect((100.1-stop)*10).toBeCloseTo(11);
  expect(target-100.1).toBeCloseTo(1.7);expect(target-100).toBeCloseTo(1.8);
  const avg=(10*100+10*101)/20;expect(avg).toBe(100.5);expect((102-avg)*20).toBe(30);expect((102-100)*10).toBe(20);
  expect(answer('Aufstocken gegen den Trend kann den Verlust vergrößern')).toBe('Der bessere Durchschnitt verhindert den höheren Geldverlust nicht.');
 });
 it('uses actual new-day prices and correctly mirrors both price boundaries',()=>{
  expect(nextDayBars[0].high).toBeLessThan(100);expect(nextDayBars[1].high).toBeLessThan(100);expect(nextDayBars[2].high).toBeGreaterThan(100);
  const b=trendMirror(trendBars[4]);expect(b.low).toBeCloseTo(100.1);expect(b.high).toBeCloseTo(100.9);
  expect(trendMirror(trendBars[5]).close).toBeCloseTo(99.6);
  expect(answer('Im Abwärtstrend die Bezüge spiegeln')).toBe('99,9.');
  for(const scenario of chartScenarioIds().filter(s=>s.startsWith('par4-'))){
   for(const bar of trendScenarioBars(scenario)){expect(bar.high).toBeGreaterThanOrEqual(Math.max(bar.open,bar.close));expect(bar.low).toBeLessThanOrEqual(Math.min(bar.open,bar.close));}
   expect(renderToStaticMarkup(<svg><TrendMarks scenario={scenario}/></svg>)).not.toMatch(/NaN|Infinity|undefined/);
  }
 });
});

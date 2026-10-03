import {describe,it,expect} from 'vitest';
import {renderToStaticMarkup} from 'react-dom/server';
import {rangesChapterFiveLessons as lessons} from './chapter-05';
import {rangesDefinition} from './index';
import {testBars,failedTestBars,deepTestBars,stairsTestBars,reversalTestBars,doubleTestBars,nearTestBars,testMirror,testScenarioBars,TestMarks} from '../../../components/RangesTestCharts';
import {chartScenarioIds,chartDescription} from '../../../components/LearningChart';
const answer=(title:string)=>{const q=lessons.find(l=>l.title===title)!.steps.find(s=>s.type==='question')!;return q.options.find(o=>o.id===q.correctOptionId)!.label;};
describe('Ranges chapter 5: outcomes and test prices',()=>{
 it('loads the chapter and all of its described diagrams',async()=>{
  expect(await rangesDefinition.units[5].load()).toEqual(lessons);
  expect(lessons).toHaveLength(37);expect(rangesDefinition.units[5].estimatedLessonCount).toBe(lessons.length);
  for(const lesson of lessons){expect(lesson.id).toMatch(/^price-action-ranges.chapter-05\./);const d=lesson.steps.find(s=>s.type==='diagram')!;expect(chartScenarioIds()).toContain(d.scenario);expect(chartDescription(d.scenario).length).toBeGreaterThan(40);}
 });
 it('keeps the same early information for divergent outcomes and hides later bars in decision views',()=>{
  expect(failedTestBars.slice(0,5)).toEqual(testBars.slice(0,5));
  expect(testScenarioBars('par5-start')).toHaveLength(5);expect(testScenarioBars('par5-open')).toHaveLength(6);expect(testScenarioBars('par5-risk')).toHaveLength(7);
  expect(failedTestBars[5].close).toBeLessThan(100);expect(failedTestBars[6].close).toBeLessThan(failedTestBars[5].close);
  expect(testBars[6].low).toBeGreaterThanOrEqual(99.8);expect(testBars[6].low).toBeLessThanOrEqual(100.3);
  expect(testBars[7].high).toBeGreaterThan(testBars[6].high+.1);
  expect(answer('Ein Signal nach dem Test ist noch kein Einstieg')).toBe('101,8.');
 });
 it('reconciles the plan, cost budget and break-even examples',()=>{
  const entry=101.8,stop=100.1,target=103.5,cost=2;
  expect(entry-stop).toBeCloseTo(1.7);expect(target-entry).toBeCloseTo(1.7);
  expect((entry-stop)*10+cost).toBeCloseTo(19);expect((entry-stop)*11+cost).toBeCloseTo(20.7);
  expect(Math.floor((20-cost)/(entry-stop))).toBe(10);
  expect((100.1-100.0)*10+cost).toBeCloseTo(3);
  expect(answer('Ein Stop am Einstieg ist netto nicht immer null')).toBe('2 Euro.');
 });
 it('distinguishes deep tests from structure breaks and exact stops from wider hypotheses',()=>{
  expect(deepTestBars[6].low).toBeLessThan(100.1);expect(deepTestBars[7].close).toBeGreaterThan(100);
  expect(stairsTestBars[6].low).toBeLessThan(stairsTestBars[1].high);expect(stairsTestBars[6].low).toBeGreaterThan(stairsTestBars[2].low);
  expect(reversalTestBars[6].low).toBeLessThan(reversalTestBars[2].low);expect(reversalTestBars[7].high).toBeGreaterThan(reversalTestBars[4].high);
  expect(doubleTestBars[6].low).toBeGreaterThan(doubleTestBars[2].low);
  expect(nearTestBars[3].high).toBeLessThan(102);expect(nearTestBars[3].high).toBeGreaterThan(nearTestBars[0].high);
 });
 it('preserves aggregation and correctly mirrors the short trigger and stop distances',()=>{
  const bars=testBars.slice(4,7);expect(bars[0].open).toBe(99.5);expect(Math.max(...bars.map(b=>b.high))).toBe(101.8);expect(Math.min(...bars.map(b=>b.low))).toBe(99.4);expect(bars.at(-1)!.close).toBe(100.6);
  const test=testMirror(testBars[6]);expect(test.high).toBeCloseTo(99.8);expect(test.low).toBeCloseTo(98.3);expect(test.low-.1).toBeCloseTo(98.2);expect(test.high+.1-(test.low-.1)).toBeCloseTo(1.7);
  expect(answer('Im Abwärtsfall wechseln die Preisrichtungen')).toBe('98,2.');
 });
 it('renders all new cases using valid OHLC data and finite geometry',()=>{
  for(const scenario of chartScenarioIds().filter(s=>s.startsWith('par5-'))){
   for(const bar of testScenarioBars(scenario)){expect(bar.high).toBeGreaterThanOrEqual(Math.max(bar.open,bar.close));expect(bar.low).toBeLessThanOrEqual(Math.min(bar.open,bar.close));}
   expect(renderToStaticMarkup(<svg><TestMarks scenario={scenario}/></svg>)).not.toMatch(/NaN|Infinity|undefined/);
  }
 });
});

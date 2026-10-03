import {describe,it,expect} from 'vitest';
import {renderToStaticMarkup} from 'react-dom/server';
import {rangesChapterEightLessons as lessons} from './chapter-08';
import {rangesDefinition} from './index';
import {targetBars,negativeTargetBars,failedTargetBars,reversalTargetBars,lateSpikeBars,profileVisits,rangeTarget,midpointTarget,targetMirror,chosenTrendLine,targetScenarioBars,TargetMarks} from '../../../components/RangesTargetCharts';
import {chartScenarioIds,chartDescription} from '../../../components/LearningChart';
const answer=(title:string)=>{const q=lessons.find(l=>l.title===title)!.steps.find(s=>s.type==='question')!;return q.options.find(o=>o.id===q.correctOptionId)!.label;};
describe('Ranges chapter 8: range, gap and profile measurements',()=>{
 it('loads the ninth unit and provides descriptions and appropriate profile captions',async()=>{
  expect(await rangesDefinition.units[8].load()).toEqual(lessons);expect(lessons).toHaveLength(30);expect(rangesDefinition.units[8].estimatedLessonCount).toBe(lessons.length);
  for(const l of lessons){expect(l.id).toMatch(/^price-action-ranges.chapter-08\./);const d=l.steps.find(s=>s.type==='diagram')!;expect(chartScenarioIds()).toContain(d.scenario);expect(chartDescription(d.scenario).length).toBeGreaterThan(40);if(d.scenario==='par8-profile')expect(d.caption).toContain('Besuchszählung');}
 });
 it('reconciles range height, positive gap middle, alternative starts and candle-middle choices',()=>{
  const range=targetBars.slice(0,4),low=Math.min(...range.map(b=>b.low)),high=Math.max(...range.map(b=>b.high));
  expect(low).toBe(98);expect(high).toBe(102);expect(rangeTarget(low,high,'up')).toBe(106);expect(rangeTarget(low,high,'down')).toBe(94);
  expect(midpointTarget(low,high,targetBars[6].low)).toBe(107);expect(midpointTarget(96,high,targetBars[6].low)).toBe(109);
  const b=targetBars[4];expect(2*((b.high+b.low)/2)-98).toBeCloseTo(108.6);expect(2*((b.open+b.close)/2)-98).toBeCloseTo(108.4);
  expect(answer('Die Lückenmitte als andere Messidee rechnen')).toBe('107,0.');
 });
 it('keeps first-pause and earlier range forecasts at their correct information times',()=>{
  expect(targetScenarioBars('par8-range')).toHaveLength(4);expect(targetScenarioBars('par8-breakout')).toHaveLength(5);expect(targetScenarioBars('par8-gap')).toHaveLength(7);
  expect(targetBars[4].high).toBeLessThan(106);expect(targetBars[5].high).toBeGreaterThan(106);expect(targetBars[5].high).toBeLessThan(107);
  expect(Math.abs(targetBars[6].close-targetBars[6].open)).toBeLessThan(.2);
  const early=renderToStaticMarkup(<svg><TargetMarks scenario="par8-breakout"/></svg>);expect(early).not.toContain('Pause 103');expect(early).not.toContain('Lückenziel 107');
 });
 it('distinguishes negative tests, nearest targets and divergent outcomes',()=>{
  expect(negativeTargetBars.slice(0,5)).toEqual(targetBars.slice(0,5));expect(negativeTargetBars[5].low-102).toBeCloseTo(-.5);
  expect(midpointTarget(98,102,negativeTargetBars[5].low)).toBe(105.5);expect(negativeTargetBars[4].high).toBeLessThan(105.5);expect(negativeTargetBars[6].high).toBeGreaterThan(105.5);
  expect(failedTargetBars.slice(0,7)).toEqual(targetBars.slice(0,7));expect(failedTargetBars[7].close).toBeLessThan(102);expect(Math.max(...failedTargetBars.map(b=>b.high))).toBeLessThan(107);
  expect(107-targetBars[7].high).toBeCloseTo(.2);expect(targetBars[8].high).toBeGreaterThan(107);expect(targetBars[9].high).toBe(109);
 });
 it('uses separately disclosed profile visit counts rather than fabricated candle-derived volume',()=>{
  expect(profileVisits).toHaveLength(9);expect(profileVisits.reduce((best,b)=>b.visits>best.visits?b:best)).toEqual({price:99,visits:12});
  const middle=profileVisits.filter(b=>b.price>=101&&b.price<=103);expect(middle.reduce((n,b)=>n+b.visits,0)).toBe(9);
  expect((101+103)/2).toBe(102);expect(2*102-98).toBe(106);
  const markup=renderToStaticMarkup(<svg><TargetMarks scenario="par8-profile"/></svg>);expect(markup).toContain('keine gehandelte Menge');expect(markup).toContain('nicht aus den anderen Kerzen berechnet');
 });
 it('checks the specified trendline break, lower-high sequence and separate spike miss',()=>{
  expect(chosenTrendLine(5)).toBeCloseTo(101.6);expect(chosenTrendLine(7)).toBe(103);expect(chosenTrendLine(10)).toBeCloseTo(105.1);
  expect(reversalTargetBars[9].low).toBeLessThan(chosenTrendLine(10));expect(reversalTargetBars[10].high).toBeLessThan(reversalTargetBars[8].high);expect(reversalTargetBars[11].close).toBeLessThan(reversalTargetBars[10].close);
  expect(lateSpikeBars[0].open-lateSpikeBars[4].close).toBe(10);expect(lateSpikeBars.at(-1)!.low-90).toBeCloseTo(.1);
 });
 it('reconciles risk budget, remaining distances and the mirrored time-limited example',()=>{
  expect((102.1-97.9)*6+2).toBeCloseTo(27.2);expect((106-102.1)*6-2).toBeCloseTo(21.4);expect(Math.floor((30-2)/(102.1-97.9))).toBe(6);expect((102.1-97.9)*7+2).toBeCloseTo(31.4);
  const mirrored=targetBars.map(targetMirror);expect(midpointTarget(102,98,mirrored[6].high)).toBe(93);expect(mirrored[6].close).toBeCloseTo(94.1);expect(mirrored[6].close-93).toBeCloseTo(1.1);
  expect(107-105.9).toBeCloseTo(1.1);expect(105.9-102.9).toBe(3);
 });
 it('renders all new diagrams with finite geometry and valid synthetic OHLC ranges',()=>{
  for(const scenario of chartScenarioIds().filter(s=>s.startsWith('par8-'))){
   if(scenario!=='par8-profile')for(const b of targetScenarioBars(scenario)){expect(b.high).toBeGreaterThanOrEqual(Math.max(b.open,b.close));expect(b.low).toBeLessThanOrEqual(Math.min(b.open,b.close));}
   expect(renderToStaticMarkup(<svg><TargetMarks scenario={scenario}/></svg>)).not.toMatch(/NaN|Infinity|undefined/);
  }
 });
});

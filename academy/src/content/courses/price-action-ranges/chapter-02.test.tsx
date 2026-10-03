import {describe,it,expect} from 'vitest';
import {renderToStaticMarkup} from 'react-dom/server';
import {rangesChapterTwoLessons as lessons} from './chapter-02';
import {rangesDefinition} from './index';
import {StrengthMarks,strengthBars,weakBars,smallBars,strengthVolumes,strengthPaths,mirrorStrength} from '../../../components/RangesStrengthCharts';
import {chartScenarioIds,chartDescription} from '../../../components/LearningChart';
const answer=(title:string)=>{const q=lessons.find(l=>l.title===title)!.steps.find(s=>s.type==='question')!;return q.options.find(o=>o.id===q.correctOptionId)!.label;};
describe('Ranges chapter 2: strength and contradictory evidence',()=>{
 it('loads as the third unit and provides explanations, questions and valid diagrams',async()=>{
  expect(await rangesDefinition.units[2].load()).toEqual(lessons);
  expect(lessons).toHaveLength(24);
  for(const lesson of lessons){
   expect(lesson.id).toMatch(/^price-action-ranges.chapter-02\./);
   const q=lesson.steps.find(s=>s.type==='question')!;
   expect(q.options.filter(o=>o.id===q.correctOptionId)).toHaveLength(1);
   const d=lesson.steps.find(s=>s.type==='diagram')!;
   expect(chartScenarioIds()).toContain(d.scenario);
   expect(chartDescription(d.scenario).length).toBeGreaterThan(40);
  }
 });
 it('reconciles body, shadows, overlap and micro gap with independently specified OHLC',()=>{
  const b=strengthBars[4],next=strengthBars[5],before=strengthBars[3];
  expect(b.close-b.open).toBeCloseTo(2);
  expect(b.high-b.low).toBeCloseTo(2.2);
  expect((b.close-b.open)/(b.high-b.low)*100).toBeCloseTo(90.909);
  expect(Math.min(b.high,next.high)-Math.max(b.low,next.low)).toBeCloseTo(.3);
  expect(next.low-before.high).toBeCloseTo(1.3);
  expect(b.low).toBeLessThan(before.high);expect(b.high).toBeGreaterThan(next.low);
  expect(weakBars[4].high).toBe(b.high);
  expect(weakBars[4].high-weakBars[4].close).toBeCloseTo(1.7);
  expect(weakBars[4].close).toBeLessThan(50);
  expect(smallBars.slice(4).map(v=>v.close)).toEqual([50.2,50.8,51.3]);
  expect(answer('Ein großer Körper mit kleinen Schatten')).toBe('2 Punkte.');
  expect(answer('Wenig Überlappung erkennen')).toBe('0,3 Punkt.');
 });
 it('uses equal units for volumes, valid mirrored highs/lows and two different paths with equal OHLC',()=>{
  const average=strengthVolumes.slice(0,4).reduce((a,b)=>a+b,0)/4;
  expect(average).toBe(100);expect(strengthVolumes[4]/average).toBe(6);
  const b=mirrorStrength(strengthBars[4]);
  expect(b.open).toBeCloseTo(50.6);expect(b.high).toBeCloseTo(50.7);
  expect(b.low).toBeCloseTo(48.5);expect(b.close).toBeCloseTo(48.6);
  const summary=(ps:number[])=>({open:ps[0],high:Math.max(...ps),low:Math.min(...ps),close:ps.at(-1)});
  expect(strengthPaths[0]).not.toEqual(strengthPaths[1]);
  expect(summary(strengthPaths[0])).toEqual(summary(strengthPaths[1]));
  expect(summary(strengthPaths[0])).toEqual({open:49.4,high:51.5,low:49.3,close:51.4});
  expect(answer('Volumen mit einem passenden Durchschnitt vergleichen')).toBe('Sechsfach.');
 });
 it('renders all nine own scenarios without invalid SVG geometry',()=>{
  const ids=chartScenarioIds().filter(s=>s.startsWith('par2-'));
  expect(ids).toHaveLength(9);
  for(const scenario of ids){const markup=renderToStaticMarkup(<svg><StrengthMarks scenario={scenario}/></svg>);expect(markup).not.toMatch(/NaN|Infinity|undefined/);}
  const first=renderToStaticMarkup(<svg><StrengthMarks scenario="par2-strong"/></svg>);
  expect((first.match(/candle-body/g)||[]).length).toBe(6);
 });
});

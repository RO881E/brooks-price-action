import {describe,it,expect} from 'vitest';
import {renderToStaticMarkup} from 'react-dom/server';
import {rangesChapterSixLessons as lessons} from './chapter-06';
import {rangesDefinition} from './index';
import {dailyGapBars,dailyGapFailure,dailyGapOverlap,islandGapBars,microGapBars,gapTestBar,negativeGapTestBar,zeroGapTestBar,averageGapBars,openCloseGapBars,gapScenarioBars,gapMidpoint,gapProjection,simpleAverage,gapMirror,GapMarks} from '../../../components/RangesGapCharts';
import {chartScenarioIds,chartDescription} from '../../../components/LearningChart';
const answer=(title:string)=>{const q=lessons.find(l=>l.title===title)!.steps.find(s=>s.type==='question')!;return q.options.find(o=>o.id===q.correctOptionId)!.label;};
describe('Ranges chapter 6: gap definitions and projections',()=>{
 it('registers the seventh unit and describes all used diagrams with interval-aware captions',async()=>{
  expect(await rangesDefinition.units[6].load()).toEqual(lessons);expect(lessons).toHaveLength(36);expect(rangesDefinition.units[6].estimatedLessonCount).toBe(lessons.length);
  for(const l of lessons){expect(l.id).toMatch(/^price-action-ranges.chapter-06\./);const d=l.steps.find(s=>s.type==='diagram')!;expect(chartScenarioIds()).toContain(d.scenario);expect(chartDescription(d.scenario).length).toBeGreaterThan(40);expect(d.caption).toContain('Intervalle');}
 });
 it('distinguishes complete gaps, opening differences, filling and classical islands',()=>{
  expect(dailyGapBars[1].low-dailyGapBars[0].high).toBe(1);
  expect(dailyGapFailure.slice(0,2)).toEqual(dailyGapBars.slice(0,2));expect(dailyGapFailure[2].low).toBeLessThan(100);
  expect(dailyGapOverlap[1].open-dailyGapOverlap[0].close).toBe(2);expect(dailyGapOverlap[1].low).toBeLessThan(dailyGapOverlap[0].high);
  expect(islandGapBars[1].low).toBeGreaterThan(islandGapBars[0].high);expect(islandGapBars[3].high).toBeLessThan(islandGapBars[2].low);
  expect(gapScenarioBars('par6-classic')).toHaveLength(2);expect(gapScenarioBars('par6-micro-start')).toHaveLength(2);
  expect(gapScenarioBars('par6-session')[1].low).toBeGreaterThan(100);expect(gapScenarioBars('par6-session')[1].low).toBeLessThan(103);
 });
 it('reconciles positive, revised, negative and zero gap projections',()=>{
  const point=microGapBars[0].high,start=microGapBars[0].low;
  expect(microGapBars[2].low-point).toBe(1);expect(microGapBars[1].low).toBeLessThan(point);expect(microGapBars[1].high).toBeGreaterThan(microGapBars[2].low);
  expect(gapMidpoint(point,microGapBars[2].low)).toBe(100.5);expect(gapProjection(start,100.5)).toBe(105);
  expect(microGapBars[2].high).toBeLessThan(105);
  expect(gapProjection(start,gapMidpoint(point,gapTestBar.low))).toBeCloseTo(104.6);
  expect(negativeGapTestBar.low-point).toBeCloseTo(-.2);expect(gapProjection(start,gapMidpoint(point,negativeGapTestBar.low))).toBeCloseTo(103.8);
  expect(zeroGapTestBar.low-point).toBe(0);expect(gapProjection(start,gapMidpoint(point,zeroGapTestBar.low))).toBe(104);
  expect(answer('Mittelpunkt und Ziel vollständig ausrechnen')).toBe('105,0.');
  expect(answer('Auch mit Überlappung bleibt die Rechnung nachvollziehbar')).toBe('103,8.');
 });
 it('mirrors both price extremes and the downward projection',()=>{
  const bars=microGapBars.map(gapMirror);expect(bars[0].high).toBe(104);expect(bars[0].low).toBe(100);expect(bars[2].high).toBe(99);
  expect(gapProjection(bars[0].high,gapMidpoint(bars[0].low,bars[2].high))).toBe(95);
  expect(answer('Die Abwärtsprojektion mit dem Mittelpunkt rechnen')).toBe('95,0.');
 });
 it('uses real completed SMA values and separates tiny opening gaps from span gaps',()=>{
  expect(simpleAverage(averageGapBars,1)).toBeNull();expect(simpleAverage(averageGapBars,5)).toBe(99);
  expect(averageGapBars[4].low).toBeLessThan(simpleAverage(averageGapBars,4)!);expect(averageGapBars[5].low-simpleAverage(averageGapBars,5)!).toBeCloseTo(1.4);
  expect(gapScenarioBars('par6-average')).toHaveLength(6);expect(gapScenarioBars('par6-average-follow')).toHaveLength(7);
  for(let i=1;i<openCloseGapBars.length;i++){expect(openCloseGapBars[i].open-openCloseGapBars[i-1].close).toBeCloseTo(.1);expect(openCloseGapBars[i].low).toBeLessThan(openCloseGapBars[i-1].high);}
 });
 it('reconciles costs without treating the projected target as an achieved trade',()=>{
  expect((101-99.7)*10+2).toBeCloseTo(15);expect((105-101)*10-2).toBe(38);
  expect(answer('Preisrisiko und Zielentfernung als Modell rechnen')).toBe('15 Euro bei Ausführung genau am geplanten Stop.');
 });
 it('renders every new scenario using finite geometry and valid OHLC ranges',()=>{
  for(const scenario of chartScenarioIds().filter(s=>s.startsWith('par6-'))){
   for(const b of gapScenarioBars(scenario)){expect(b.high).toBeGreaterThanOrEqual(Math.max(b.open,b.close));expect(b.low).toBeLessThanOrEqual(Math.min(b.open,b.close));}
   expect(renderToStaticMarkup(<svg><GapMarks scenario={scenario}/></svg>)).not.toMatch(/NaN|Infinity|undefined/);
  }
 });
});

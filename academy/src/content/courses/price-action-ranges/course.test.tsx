import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { checkContent, snapshotKnownIds, formatReport } from '../../../../build/contentCheck';
import { toCourseOutline } from '../../../../build/courseOutline';
import { baseCourses } from '../../allCourses';
import { courseOfLesson } from '../../catalog';
import { lessonAccessState } from '../../../features/courseAccess';
import { rangesBars, rangesFailureBar, RangesBreakoutMarks } from '../../../components/RangesBreakoutCharts';
import { chartDescription, chartScenarioIds } from '../../../components/LearningChart';
import known from '../../../../build/published-ids-price-action-ranges.json';
import { rangesDefinition } from './index';
import { rangesGlossary } from './glossary';
import { rangesChapterOneLessons } from './chapter-01';
const course = baseCourses.find(c=>c.id==='price-action-ranges')!;
describe('Ranges course integration and independent exercise data',()=>{
 it('validates content and keeps progress scoped to this course',async()=>{
  const report=checkContent({course,glossary:rangesGlossary,scenarioIds:chartScenarioIds(),describe:s=>chartDescription(s as Parameters<typeof chartDescription>[0]),caseIssues:[],known});
  expect(report.errors,formatReport(report)).toBe(0);
  expect(snapshotKnownIds(course)).toEqual(known);
  expect(await rangesDefinition.units[1].load()).toEqual(rangesChapterOneLessons);
  const [one,two]=course.units[0].lessons;
  const outline=toCourseOutline(course);
  expect(lessonAccessState(outline,one,[])).toBe('available');
  expect(lessonAccessState(outline,two,['reading-charts.chapter-01.lesson-01'])).toBe('locked');
  expect(lessonAccessState(outline,two,[one.id])).toBe('available');
  for(const unit of course.units) for(const lesson of unit.lessons) expect(courseOfLesson(lesson.id)?.id).toBe(course.id);
 });
 it('derives body, risk, target and cost threshold from the actual example',()=>{
  const breakout=rangesBars[4];
  expect(breakout.close-breakout.open).toBeCloseTo(2.2);
  expect(breakout.high-breakout.low).toBeCloseTo(2.4);
  const target=breakout.high+(breakout.high-breakout.low);
  expect(target).toBeCloseTo(103.9);
  const stop=98.4, risk=breakout.close-stop;
  expect(risk*10).toBeCloseTo(30);
  expect(Math.floor(30/(rangesBars[5].close-stop))).toBe(7);
  const gain=(target-breakout.close)*10-2,loss=risk*10+2;
  expect(gain).toBeCloseTo(23);expect(loss).toBeCloseTo(32);
  expect(loss/(loss+gain)).toBeCloseTo(0.581818);
  expect(rangesFailureBar.close).toBeLessThan(100);
  expect(rangesBars[6].low).toBeGreaterThan(100);
  expect(rangesBars[8].high).toBeGreaterThan(target);
 });
 it('hides future candles at early decisions and renders each scenario with finite geometry',()=>{
  for(const scenario of chartScenarioIds().filter(s=>s.startsWith('par1-'))){
   const markup=renderToStaticMarkup(<svg><RangesBreakoutMarks scenario={scenario}/></svg>);
   expect(markup).not.toMatch(/NaN|Infinity|undefined/);
   const candles=(markup.match(/candle-body/g)||[]).length;
   expect(candles).toBe(scenario==='par1-context'?4:scenario==='par1-breakout'||scenario==='par1-risk'?5:scenario==='par1-failure'?6:scenario==='par1-pullback'?8:9);
   expect(chartDescription(scenario).length).toBeGreaterThan(50);
  }
 });
});

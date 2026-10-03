import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { reportTrades,reportMinutes,reportAggregate,summarizeTrades,validReportBar,closeLocation,reportPaths,reportOriginal,reportCalculated,reportHA } from './chapter-10-model';
import { chartsChapterTenLessons as lessons } from './chapter-10';
import { chartsDefinition } from './index';
import { chartsGlossary } from './glossary';
import { baseCourses } from '../../allCourses';
import { StepChart, ComparisonStep } from '../../../components/LessonSteps';
import { ReportChart } from '../../../components/ReadingReportCharts';
import { LearningChart, chartDescription, chartScenarioIds } from '../../../components/LearningChart';
import { checkContent, formatReport, snapshotKnownIds } from '../../../../build/contentCheck';
import { toCourseOutline } from '../../../../build/courseOutline';
import { lessonAccessState } from '../../../features/courseAccess';
import known from '../../../../build/published-ids-reading-charts.json';
afterEach(cleanup);
const course=baseCourses.find(c=>c.id==='reading-charts')!;
describe('Complete chart report',()=>{
 it('derives OHLC and volume from the ordered input rather than averages or message counts',()=>{
  expect(reportMinutes).toEqual([{open:30,high:32,low:29,close:31,volume:10},{open:31,high:33,low:30,close:32,volume:6}]);
  expect(reportAggregate).toEqual({open:30,high:33,low:29,close:32,volume:16});
  expect(reportTrades.filter(t=>t.second<60)).toHaveLength(4);expect(reportAggregate.close).not.toBe(31.5);
  expect(()=>summarizeTrades([])).toThrow();expect(()=>summarizeTrades([...reportTrades].reverse())).toThrow();
  expect(()=>summarizeTrades([{second:5,price:NaN,quantity:2}])).toThrow();expect(()=>summarizeTrades([{second:5,price:30,quantity:0}])).toThrow();
 });
 it('distinguishes body, range, close location, prior close and a still-open partial bar',()=>{
  const b=reportMinutes[0];expect(b.high-b.low).toBe(3);expect(b.close-b.open).toBe(1);
  expect(b.high-Math.max(b.open,b.close)).toBe(1);expect(Math.min(b.open,b.close)-b.low).toBe(1);
  expect(closeLocation(b)).toBeCloseTo(2/3);expect(b.close-32).toBe(-1);expect((b.close/32-1)*100).toBe(-3.125);
  expect(summarizeTrades(reportTrades.filter(t=>t.second<=30))).toEqual({open:30,high:32,low:30,close:32,volume:3});
  expect(closeLocation({open:30,high:30,low:30,close:30,volume:2})).toBeNull();
 });
 it('rejects inconsistent prices without silently rewriting the input',()=>{
  const bad={...reportMinutes[0],close:33};expect(validReportBar(bad)).toBe(false);expect(()=>closeLocation(bad)).toThrow();expect(bad.close).toBe(33);
  expect(validReportBar({...reportMinutes[0],volume:-1})).toBe(false);expect(validReportBar({...reportMinutes[0],open:Infinity})).toBe(false);
 });
 it('constructs identical OHLC from two different intra-bar orders',()=>{
  const bars=reportPaths.map(path=>summarizeTrades(path.map((price,i)=>({second:i,price,quantity:1}))));
  expect(bars[0]).toEqual(bars[1]);expect(reportPaths[0].indexOf(32)).toBeLessThan(reportPaths[0].indexOf(29));expect(reportPaths[1].indexOf(32)).toBeGreaterThan(reportPaths[1].indexOf(29));
 });
 it('shows HA body rising despite original body falling and keeps unspecified volume absent',()=>{
  expect(reportCalculated).toEqual({open:29,high:35,low:29,close:32.5});expect(reportOriginal.close-reportOriginal.open).toBe(-3);
  expect(reportCalculated.close-reportCalculated.open).toBe(3.5);expect(reportCalculated.low).toBeLessThan(reportOriginal.low);
  expect(reportOriginal).not.toHaveProperty('volume');expect(reportCalculated).not.toHaveProperty('volume');expect(()=>reportHA(reportOriginal,NaN,30)).toThrow();
 });
 it('preserves IDs and completes the course with chapter ten after 208 prerequisites',async()=>{
  expect(await chartsDefinition.units[9].load()).toEqual(lessons);expect(lessons).toHaveLength(24);expect(chartsGlossary).toHaveLength(116);
  expect(course.units).toHaveLength(10);expect(course.units.flatMap(u=>u.lessons)).toHaveLength(232);const prior=course.units.slice(0,9).flatMap(u=>u.lessons.map(l=>l.id));expect(prior).toHaveLength(208);
  const outline=toCourseOutline(course);expect(lessonAccessState(outline,lessons[0],prior)).toBe('available');expect(lessonAccessState(outline,lessons[0],prior.slice(0,-1))).toBe('locked');
  expect(lessonAccessState(outline,lessons[1],prior)).toBe('locked');expect(lessonAccessState(outline,lessons[1],[...prior,lessons[0].id])).toBe('available');
  const report=checkContent({course,glossary:chartsGlossary,scenarioIds:chartScenarioIds(),describe:s=>chartDescription(s as Parameters<typeof chartDescription>[0]),caseIssues:[],known});expect(report.errors,formatReport(report)).toBe(0);expect(snapshotKnownIds(course)).toEqual(known);
  expect(JSON.stringify([course,chartsGlossary])).not.toMatch(/Murphy|TradingView|OceanofPDF/);
 });
 it('renders every comparison and all three accessible diagrams with rotating answer positions',()=>{
  const scenarios=new Set();for(const[i,l]of lessons.entries()){
   const q=l.steps.find(s=>s.type==='question')!;expect(q.correctOptionId).toBe(`choice-${i%3}`);expect(l.steps.find(s=>s.type==='explanation')!.paragraphs).toHaveLength(3);
   const comp=l.steps.find(s=>s.type==='comparison')!;render(<ComparisonStep step={comp}/>);for(const c of comp.columns)for(const p of c.points)expect(screen.getByText(p)).toBeVisible();cleanup();
   const d=l.steps.find(s=>s.type==='diagram');if(d){scenarios.add(d.scenario);render(<ReportChart scenario={d.scenario} title={d.title}/>);expect(screen.getByRole('img')).toHaveAccessibleName();expect(screen.getByRole('img').querySelector('desc')?.textContent).toBe(chartDescription(d.scenario));cleanup();}
  }expect(scenarios.size).toBe(3);
 });
 it('loads dedicated charts and restores focus after closing the enlarged view',async()=>{
  const d=lessons[4].steps.find(s=>s.type==='diagram')!;render(<StepChart step={d}/>);expect(await screen.findByText('Volumen: 16 Aktien')).toBeVisible();
  const button=screen.getByRole('button',{name:`Vergrößern: ${d.title}`});fireEvent.click(button);const dialog=screen.getByRole('dialog',{hidden:true});expect(dialog.querySelector('svg')?.getAttribute('viewBox')).toBe('0 0 760 330');
  const ids=[...document.querySelectorAll('svg [id]')].map(n=>n.id);expect(new Set(ids).size).toBe(ids.length);act(()=>dialog.dispatchEvent(new Event('cancel',{cancelable:true})));expect(button).toHaveFocus();expect(screen.queryByRole('dialog',{hidden:true})).not.toBeInTheDocument();cleanup();
  render(<LearningChart scenario="rc10-calculated" title="Berechnete Kerze"/>);expect(await screen.findByText('Heikin-Ashi ↑')).toBeVisible();
 });
});

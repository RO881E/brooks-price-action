import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { splitExample,oldSplitBar,splitBar,dividendStages,dividendValue,oldContract,rawContinuous,adjustedContinuous,additiveBackAdjust,ratioBackAdjust,executionResult } from './chapter-09-model';
import { chartsChapterNineLessons as lessons } from './chapter-09';
import { chartsDefinition } from './index';
import { chartsGlossary } from './glossary';
import { baseCourses } from '../../allCourses';
import { StepChart, ComparisonStep } from '../../../components/LessonSteps';
import { DataChart } from '../../../components/ReadingDataCharts';
import { LearningChart, chartDescription, chartScenarioIds } from '../../../components/LearningChart';
import { checkContent, formatReport, snapshotKnownIds } from '../../../../build/contentCheck';
import { toCourseOutline } from '../../../../build/courseOutline';
import { lessonAccessState } from '../../../features/courseAccess';
import known from '../../../../build/published-ids-reading-charts.json';
afterEach(cleanup);
const course=baseCourses.find(c=>c.id==='reading-charts')!;
describe('Data sources and adjustments',()=>{
 it('conserves split value, adjusts every OHLC field and distinguishes raw price from position change',()=>{
  const s=splitExample;expect(s.oldShares*s.before).toBe(320);expect(s.newShares*s.after).toBe(320);
  expect(s.newShares*s.later).toBe(328);expect((s.later/s.after-1)*100).toBeCloseTo(2.5);
  expect((s.later/s.before-1)*100).toBeCloseTo(-48.75);
  expect(splitBar(oldSplitBar,2)).toEqual({open:39,high:41,low:38,close:40});expect(oldSplitBar.close).toBe(80);
  expect(10*80).toBe(20*40);expect(()=>splitBar(oldSplitBar,0)).toThrow();
 });
 it('counts an unpaid dividend once and replaces it with cash at payment',()=>{
  expect(dividendStages.map(d=>dividendValue(d.price,8,d.claim,d.cash))).toEqual([408,408,408]);
  expect(dividendStages[1]).toMatchObject({claim:8,cash:0});expect(dividendStages[2]).toMatchObject({claim:0,cash:8});
  expect(51*((51-1)/51)).toBe(50);expect(()=>dividendValue(NaN,8,0,0)).toThrow();
 });
 it('separates contract spread from movement and preserves the stated adjustment invariants',()=>{
  expect(rawContinuous).toEqual([72,74,76,84]);expect(84-76).toBe((83-76)+(84-83));
  expect(adjustedContinuous).toEqual([79,81,83,84]);const ratio=ratioBackAdjust(oldContract,83/76);
  expect(ratio[2]).toBeCloseTo(83);expect(ratio[1]/ratio[0]).toBeCloseTo(74/72);expect(ratio[1]-ratio[0]).not.toBeCloseTo(2);
  expect(adjustedContinuous[1]-adjustedContinuous[0]).toBe(2);expect(adjustedContinuous[1]/adjustedContinuous[0]).not.toBeCloseTo(74/72,4);
  expect(additiveBackAdjust([-2,0],-7)).toEqual([-9,-7]);expect(()=>ratioBackAdjust(oldContract,0)).toThrow();expect(()=>additiveBackAdjust(oldContract,Infinity)).toThrow();
 });
 it('calculates two actual execution pairs and four fees without booking the contract gap',()=>{
  const trades=[{entry:72,exit:76,quantity:1},{entry:83,exit:84,quantity:1}];expect(executionResult(trades,10,[2,2,2,2])).toBe(42);
  expect(executionResult([{entry:76,exit:72,quantity:1}],10,[])).toBe(-40);
  expect(()=>executionResult(trades,10,[-2])).toThrow();expect(()=>executionResult(trades,0,[])).toThrow();
 });
 it('preserves IDs and unlocks chapter nine after its 184 prerequisites',async()=>{
  expect(await chartsDefinition.units[8].load()).toEqual(lessons);expect(lessons).toHaveLength(24);expect(chartsGlossary).toHaveLength(104);
  expect(course.units.flatMap(u=>u.lessons)).toHaveLength(208);const prior=course.units.slice(0,8).flatMap(u=>u.lessons.map(l=>l.id));expect(prior).toHaveLength(184);
  const outline=toCourseOutline(course);expect(lessonAccessState(outline,lessons[0],prior)).toBe('available');expect(lessonAccessState(outline,lessons[0],prior.slice(0,-1))).toBe('locked');
  expect(lessonAccessState(outline,lessons[1],prior)).toBe('locked');expect(lessonAccessState(outline,lessons[1],[...prior,lessons[0].id])).toBe('available');
  const report=checkContent({course,glossary:chartsGlossary,scenarioIds:chartScenarioIds(),describe:s=>chartDescription(s as Parameters<typeof chartDescription>[0]),caseIssues:[],known});expect(report.errors,formatReport(report)).toBe(0);expect(snapshotKnownIds(course)).toEqual(known);
  expect(JSON.stringify([course,chartsGlossary])).not.toMatch(/Murphy|TradingView|Investor.gov|OceanofPDF/);
 });
 it('renders every comparison and all three accessible diagrams',()=>{
  const scenarios=new Set();for(const[i,l]of lessons.entries()){
   const q=l.steps.find(s=>s.type==='question')!;expect(q.correctOptionId).toBe(`choice-${i%3}`);expect(l.steps.find(s=>s.type==='explanation')!.paragraphs).toHaveLength(3);
   const comp=l.steps.find(s=>s.type==='comparison')!;render(<ComparisonStep step={comp}/>);for(const c of comp.columns)for(const p of c.points)expect(screen.getByText(p)).toBeVisible();cleanup();
   const d=l.steps.find(s=>s.type==='diagram');if(d){scenarios.add(d.scenario);render(<DataChart scenario={d.scenario} title={d.title}/>);expect(screen.getByRole('img')).toHaveAccessibleName();expect(screen.getByRole('img').querySelector('desc')?.textContent).toBe(chartDescription(d.scenario));cleanup();}
  }expect(scenarios.size).toBe(3);
 });
 it('lazy loads charts and restores focus after closing the enlarged view',async()=>{
  const d=lessons[6].steps.find(s=>s.type==='diagram')!;render(<StepChart step={d}/>);expect(await screen.findByText('Gleiche Stückbasis: +2,5%')).toBeVisible();
  const button=screen.getByRole('button',{name:`Vergrößern: ${d.title}`});fireEvent.click(button);const dialog=screen.getByRole('dialog',{hidden:true});expect(dialog.querySelector('svg')?.getAttribute('viewBox')).toBe('0 0 760 330');
  const ids=[...document.querySelectorAll('svg [id]')].map(n=>n.id);expect(new Set(ids).size).toBe(ids.length);act(()=>dialog.dispatchEvent(new Event('cancel',{cancelable:true})));expect(button).toHaveFocus();expect(screen.queryByRole('dialog',{hidden:true})).not.toBeInTheDocument();cleanup();
  render(<LearningChart scenario="rc9-roll" title="Kontraktwechsel"/>);expect(await screen.findByText('Letzter Schritt: +1 Punkt')).toBeVisible();
 });
});

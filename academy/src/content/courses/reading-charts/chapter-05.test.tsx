import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { calculateHA, haOriginalBars as original } from './chapter-05-model';
import { chartsChapterFiveLessons as lessons } from './chapter-05';
import { chartsDefinition } from './index';
import { chartsGlossary } from './glossary';
import { baseCourses } from '../../allCourses';
import { StepChart, ComparisonStep } from '../../../components/LessonSteps';
import { HAChart, haY } from '../../../components/ReadingHACharts';
import { LearningChart, chartDescription, chartScenarioIds } from '../../../components/LearningChart';
import { checkContent, formatReport, snapshotKnownIds } from '../../../../build/contentCheck';
import { toCourseOutline } from '../../../../build/courseOutline';
import { lessonAccessState } from '../../../features/courseAccess';
import known from '../../../../build/published-ids-reading-charts.json';
afterEach(cleanup);
const course=baseCourses.find(c=>c.id==='reading-charts')!;
const answer=(title:string)=>{const q=lessons.find(l=>l.title===title)!.steps.find(s=>s.type==='question')!;return q.options.find(o=>o.id===q.correctOptionId)!.label;};
describe('Heikin-Ashi: original inputs, recurrence and interpretation',()=>{
 it('reconstructs exact original and HA bars without intermediate rounding',()=>{
   expect(calculateHA(original)).toEqual([
    {open:101,high:104,low:98,close:101},
    {open:101,high:108,low:100,close:103.5},
    {open:102.25,high:106,low:100,close:102.75},
    {open:102.5,high:114,low:102.5,close:112.25},
   ]);
   const variant=calculateHA(original,100);
   expect(variant.map(b=>b.open)).toEqual([100,100.5,102,102.375]);
   expect(variant.map(b=>b.close)).toEqual(calculateHA(original).map(b=>b.close));
   expect(calculateHA([])).toEqual([]);
   expect(()=>calculateHA(original,NaN)).toThrow();
   expect(()=>calculateHA([{open:100,high:99,low:98,close:102}])).toThrow();
   expect(()=>calculateHA([{open:100,high:104,low:101,close:102}])).toThrow();
 });
 it('distinguishes body direction, close change, shadows and original gap',()=>{
   const ha=calculateHA(original);
   expect(original[2].close-original[2].open).toBe(-3);
   expect(ha[2].close-ha[2].open).toBe(.5);
   expect(ha[2].close-ha[1].close).toBe(-.75);
   expect(original[3].open-original[2].close).toBe(11);
   expect(original[3].low-original[2].high).toBe(4);
   expect(ha[3].low).toBeLessThan(ha[2].high);
   expect(ha[3].low).toBeLessThan(original[3].low);
   expect(ha[3].open-ha[3].low).toBe(0);
   expect(ha[1].high-ha[1].close).toBe(4.5);
   expect(answer('Eine fallende Originalkerze kann einen steigenden HA-Körper haben')).toBe('Originalkörper fällt, HA-Körper steigt.');
   expect(answer('Den Preissprung der vierten Minute im Original erkennen')).toBe('11 Euro.');
   expect(answer('Ein HA-Tief kann außerhalb der Originalspanne liegen')).toBe('102,50 Euro.');
   expect(answer('Ein anderer Startwert wirkt zunächst weiter')).toBe('102,375 Euro.');
 });
 it('updates a live bar from current OHLC without using future bars or resetting the predecessor',()=>{
   const before=original.slice(0,3),early=calculateHA([...before,{open:112,high:112,low:112,close:112}]);
   expect(early.slice(0,3)).toEqual(calculateHA(before));
   expect(early[3]).toEqual({open:102.5,high:112,low:102.5,close:112});
   expect(calculateHA(original)[3].open).toBe(early[3].open);
   expect(calculateHA(original)[3].close).toBe(112.25);
 });
 it('preserves IDs, validates all new content and unlocks after preceding chapters',async()=>{
   expect(await chartsDefinition.units[4].load()).toEqual(lessons);
   expect(lessons).toHaveLength(24);expect(chartsGlossary).toHaveLength(104);
   expect(course.units.flatMap(u=>u.lessons)).toHaveLength(208);
   const prior=course.units.slice(0,4).flatMap(u=>u.lessons.map(l=>l.id)),outline=toCourseOutline(course);
   expect(lessonAccessState(outline,lessons[0],prior)).toBe('available');
   expect(lessonAccessState(outline,lessons[0],prior.slice(0,-1))).toBe('locked');
   expect(lessonAccessState(outline,lessons[1],prior)).toBe('locked');
   expect(lessonAccessState(outline,lessons[1],[...prior,lessons[0].id])).toBe('available');
   const report=checkContent({course,glossary:chartsGlossary,scenarioIds:chartScenarioIds(),describe:s=>chartDescription(s as Parameters<typeof chartDescription>[0]),caseIssues:[],known});
   expect(report.errors,formatReport(report)).toBe(0);expect(snapshotKnownIds(course)).toEqual(known);
   expect(JSON.stringify([course,chartsGlossary])).not.toMatch(/Murphy|TradingView|NinjaTrader|OceanofPDF/);
 });
 it('renders all comparisons and three accessible diagram scenarios on a consistent price scale',()=>{
   const scenarios=new Set<string>();
   for(const [i,l]of lessons.entries()){
     const q=l.steps.find(s=>s.type==='question')!;expect(q.correctOptionId).toBe(`choice-${i%3}`);
     expect(l.steps.find(s=>s.type==='explanation')!.paragraphs).toHaveLength(3);
     const comp=l.steps.find(s=>s.type==='comparison')!;render(<ComparisonStep step={comp}/>);
     for(const c of comp.columns)for(const p of c.points)expect(screen.getByText(p)).toBeVisible();cleanup();
     const d=l.steps.find(s=>s.type==='diagram');if(d){scenarios.add(d.scenario);render(<HAChart scenario={d.scenario} title={d.title}/>);expect(screen.getByRole('img')).toHaveAccessibleName();expect(screen.getByRole('img').querySelector('desc')?.textContent).toBe(chartDescription(d.scenario));cleanup();}
   }
   expect(scenarios.size).toBe(3);expect(haY(114)).toBe(66);expect(haY(110)-haY(114)).toBe(36);
 });
 it('loads the chapter-specific diagram, opens the shared focus and returns keyboard focus',async()=>{
   const d=lessons[2].steps.find(s=>s.type==='diagram')!;render(<StepChart step={d}/>);
   expect(await screen.findByText('HA-C2 = 414 / 4 = 103,50')).toBeVisible();
   const button=screen.getByRole('button',{name:`Vergrößern: ${d.title}`});fireEvent.click(button);
   const dialog=screen.getByRole('dialog',{hidden:true});expect(dialog).toBeInTheDocument();
   expect(dialog.querySelector('svg')?.getAttribute('viewBox')).toBe('0 0 760 330');
   const ids=[...document.querySelectorAll('svg [id]')].map(n=>n.id);expect(new Set(ids).size).toBe(ids.length);
   act(()=>dialog.dispatchEvent(new Event('cancel',{cancelable:true})));
   expect(screen.queryByRole('dialog',{hidden:true})).not.toBeInTheDocument();expect(button).toHaveFocus();
 });
 it('supports the legacy public renderer through a lazy chart import',async()=>{
   render(<LearningChart scenario="rc5-gap" title="Original und HA"/>);
   expect(await screen.findByText('HA-L4 =102,50')).toBeVisible();
   expect(screen.getByRole('img')).toHaveAccessibleName();
 });
});

import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { calculatePF, pfInputs as tape, pfPathA, pfPathB, pfVariantInputs } from './chapter-06-model';
import { chartsChapterSixLessons as lessons } from './chapter-06';
import { chartsDefinition } from './index';
import { chartsGlossary } from './glossary';
import { baseCourses } from '../../allCourses';
import { StepChart, ComparisonStep } from '../../../components/LessonSteps';
import { PFChart, pfY } from '../../../components/ReadingPFCharts';
import { LearningChart, chartDescription, chartScenarioIds } from '../../../components/LearningChart';
import { checkContent, formatReport, snapshotKnownIds } from '../../../../build/contentCheck';
import { toCourseOutline } from '../../../../build/courseOutline';
import { lessonAccessState } from '../../../features/courseAccess';
import known from '../../../../build/published-ids-reading-charts.json';
afterEach(cleanup);
const course=baseCourses.find(c=>c.id==='reading-charts')!;
const levels=(p:ReturnType<typeof calculatePF>)=>p.map(c=>c.marks.map(m=>m.level));
const answer=(title:string)=>{const q=lessons.find(l=>l.title===title)!.steps.find(s=>s.type==='question')!;return q.options.find(o=>o.id===q.correctOptionId)!.label;};
describe('P&F: explicit grid, inclusive reversals and independent inputs',()=>{
 it('reconstructs four exact columns and their source triggers',()=>{
   const p=calculatePF(tape);
   expect(p.map(c=>c.symbol)).toEqual(['X','O','X','O']);
   expect(levels(p)).toEqual([[5050,5100,5150,5200],[5150,5100,5050,5000],[5050,5100,5150,5200,5250],[5200,5150,5100,5050]]);
   expect(p.map(c=>c.marks.map(m=>m.triggerId))).toEqual([[2,3,3,3],[5,5,5,6],[8,8,8,9,9],[10,10,10,11]]);
   expect(p.flatMap(c=>c.marks)).toHaveLength(17);expect(tape).toHaveLength(12);
   expect(tape.some(t=>t.cents===5200)).toBe(false);
   expect(tape.at(-1)!.cents).toBe(5150);expect(p.at(-1)!.marks.at(-1)!.level).toBe(5050);
   expect(answer('Ein Preissprung ergänzt mehrere X in derselben Spalte')).toBe('Drei neue X.');
   expect(answer('Vier Spalten und siebzehn Zeichen nachzählen')).toBe('17 Zeichen.');
 });
 it('handles exact and one-cent-short reversal boundaries in both directions',()=>{
   const input=(cents:number)=>({id:20,second:500,cents});
   const up=tape.slice(0,3);
   expect(calculatePF([...up,input(5051)])).toHaveLength(1);
   expect(levels(calculatePF([...up,input(5050)]))[1]).toEqual([5150,5100,5050]);
   expect(calculatePF([...tape,input(5199)])).toHaveLength(4);
   expect(levels(calculatePF([...tape,input(5200)]))[4]).toEqual([5100,5150,5200]);
   expect(levels(calculatePF([...tape,input(5001)]))[3]).toEqual([5200,5150,5100,5050]);
   expect(levels(calculatePF([...tape,input(5000)]))[3]).toEqual([5200,5150,5100,5050,5000]);
   expect(answer('Die nächsten Schwellen vom aktuellen O-Tief bestimmen')).toBe('52,00 Euro.');
 });
 it('separates initialization, ignored movement and setting changes',()=>{
   expect(calculatePF(tape.slice(0,1))).toEqual([]);
   expect(calculatePF(tape.slice(0,3))).toEqual(calculatePF(tape.slice(0,4)));
   expect(calculatePF(tape.slice(0,6))).toEqual(calculatePF(tape.slice(0,7)));
   expect(calculatePF(tape.slice(0,11))).toEqual(calculatePF(tape));
   expect(levels(calculatePF(tape,5000,100,3))).toEqual([[5100,5200]]);
   const r2=calculatePF(tape,5000,50,2);expect(r2).toHaveLength(5);expect(levels(r2).at(-1)).toEqual([5100,5150]);
   const down=[{id:1,second:0,cents:5000},{id:2,second:1,cents:4890}];
   expect(calculatePF(down)).toEqual([{symbol:'O',marks:[{level:4950,triggerId:2},{level:4900,triggerId:2}]}]);
   expect(calculatePF([...tape,...Array.from({length:20},(_,i)=>({id:i+13,second:361+i,cents:5150}))])).toEqual(calculatePF(tape));
   expect(calculatePF([])).toEqual([]);expect(()=>calculatePF(tape,5000,0)).toThrow();
   expect(()=>calculatePF(tape,5000,50,1)).toThrow();expect(()=>calculatePF(tape,5000,50,2.5)).toThrow();
   expect(()=>calculatePF([{id:1,second:0,cents:NaN}])).toThrow();
   expect(answer('Eine größere Kästchengröße mit gleichen Daten prüfen')).toBe('Eine X-Spalte mit zwei Zeichen.');
 });
 it('shows equal OHLC with different raster histories, independent of time spacing',()=>{
   const ohlc=(p:number[])=>[p[0],Math.max(...p),Math.min(...p),p.at(-1)];expect(ohlc(pfPathA)).toEqual(ohlc(pfPathB));
   const a=calculatePF(pfVariantInputs(pfPathA)),b=calculatePF(pfVariantInputs(pfPathB));
   expect(a.at(-1)!.marks.at(-1)!.level).toBe(5200);expect(b.at(-1)!.marks.at(-1)!.level).toBe(5300);
   expect(a[0].marks.at(-1)!.level).toBe(5300);expect(b[0].marks.at(-1)!.level).toBe(5200);
   expect(calculatePF(tape.map(t=>({...t,second:t.second*10})))).toEqual(calculatePF(tape));
   const starts=calculatePF(tape).map(c=>tape.find(t=>t.id===c.marks[0].triggerId)!.second);
   expect(starts).toEqual([20,80,185,260]);expect(starts.slice(1).map((s,i)=>s-starts[i])).toEqual([60,105,75]);
 });
 it('preserves published identifiers and course access after five prerequisite chapters',async()=>{
   expect(await chartsDefinition.units[5].load()).toEqual(lessons);
   expect(lessons).toHaveLength(24);expect(chartsGlossary).toHaveLength(116);
   expect(course.units.flatMap(u=>u.lessons)).toHaveLength(232);
   const prior=course.units.slice(0,5).flatMap(u=>u.lessons.map(l=>l.id)),outline=toCourseOutline(course);
   expect(lessonAccessState(outline,lessons[0],prior)).toBe('available');
   expect(lessonAccessState(outline,lessons[0],prior.slice(0,-1))).toBe('locked');
   expect(lessonAccessState(outline,lessons[1],prior)).toBe('locked');
   expect(lessonAccessState(outline,lessons[1],[...prior,lessons[0].id])).toBe('available');
   const report=checkContent({course,glossary:chartsGlossary,scenarioIds:chartScenarioIds(),describe:s=>chartDescription(s as Parameters<typeof chartDescription>[0]),caseIssues:[],known});
   expect(report.errors,formatReport(report)).toBe(0);expect(snapshotKnownIds(course)).toEqual(known);
   expect(JSON.stringify([course,chartsGlossary])).not.toMatch(/Murphy|StockCharts|TradingView|OceanofPDF/);
 });
 it('renders every authored comparison and accessible diagram with consistent linear price spacing',()=>{
   const scenarios=new Set<string>();
   for(const [i,l]of lessons.entries()){
     const q=l.steps.find(s=>s.type==='question')!;expect(q.correctOptionId).toBe(`choice-${i%3}`);
     expect(l.steps.find(s=>s.type==='explanation')!.paragraphs).toHaveLength(3);
     const comp=l.steps.find(s=>s.type==='comparison')!;render(<ComparisonStep step={comp}/>);
     for(const c of comp.columns)for(const p of c.points)expect(screen.getByText(p)).toBeVisible();cleanup();
     const d=l.steps.find(s=>s.type==='diagram');if(d){scenarios.add(d.scenario);render(<PFChart scenario={d.scenario} title={d.title}/>);expect(screen.getByRole('img')).toHaveAccessibleName();expect(screen.getByRole('img').querySelector('desc')?.textContent).toBe(chartDescription(d.scenario));cleanup();}
   }
   expect(scenarios.size).toBe(3);expect(pfY(5300)).toBe(50);expect(pfY(5000)-pfY(5050)).toBe(20);
 });
 it('loads the dedicated lazy diagram, keeps shared focus behavior and uses unique SVG descriptions',async()=>{
   const d=lessons[6].steps.find(s=>s.type==='diagram')!;render(<StepChart step={d}/>);
   expect(await screen.findByText('Spalte 4 · O')).toBeVisible();
   const button=screen.getByRole('button',{name:`Vergrößern: ${d.title}`});fireEvent.click(button);
   const dialog=screen.getByRole('dialog',{hidden:true});expect(dialog).toBeInTheDocument();
   expect(dialog.querySelector('svg')?.getAttribute('viewBox')).toBe('0 0 760 330');
   const ids=[...document.querySelectorAll('svg [id]')].map(n=>n.id);expect(new Set(ids).size).toBe(ids.length);
   act(()=>dialog.dispatchEvent(new Event('cancel',{cancelable:true})));
   expect(screen.queryByRole('dialog',{hidden:true})).not.toBeInTheDocument();expect(button).toHaveFocus();
 });
 it('supports all four method outputs through the legacy public renderer',async()=>{
   render(<LearningChart scenario="rc6-methods" title="Methodenvergleich"/>);
   expect(await screen.findByText('Einzelpreise A')).toBeVisible();
   expect(screen.getAllByText('Extrem:52,00')).toHaveLength(2);expect(screen.getAllByText('Extrem:53,00')).toHaveLength(2);
   expect(screen.getByRole('img')).toHaveAccessibleName();
 });
});

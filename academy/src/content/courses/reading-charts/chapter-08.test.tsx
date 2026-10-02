import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { percentChange, indexedPrice, scalePosition, scaleInterpolate, scaleCloses, additiveCloses, scaleCandles } from './chapter-08-model';
import { chartsChapterEightLessons as lessons } from './chapter-08';
import { chartsDefinition } from './index';
import { chartsGlossary } from './glossary';
import { baseCourses } from '../../allCourses';
import { StepChart, ComparisonStep } from '../../../components/LessonSteps';
import { ScaleChart, scaleY } from '../../../components/ReadingScalesCharts';
import { LearningChart, chartDescription, chartScenarioIds } from '../../../components/LearningChart';
import { checkContent, formatReport, snapshotKnownIds } from '../../../../build/contentCheck';
import { toCourseOutline } from '../../../../build/courseOutline';
import { lessonAccessState } from '../../../features/courseAccess';
import known from '../../../../build/published-ids-reading-charts.json';
afterEach(cleanup);
const course=baseCourses.find(c=>c.id==='reading-charts')!;
const answer=(title:string)=>{const q=lessons.find(l=>l.title===title)!.steps.find(s=>s.type==='question')!;return q.options.find(o=>o.id===q.correctOptionId)!.label;};
describe('Price scales: original prices, ratios and display geometry',()=>{
 it('shows constant log distances for doublings but increasing linear distances',()=>{
   expect(scaleCloses).toEqual([15,30,60,120]);
   expect(scaleCloses.slice(1).map((p,i)=>p-scaleCloses[i])).toEqual([15,30,60]);
   expect(scaleCloses.slice(1).map((p,i)=>percentChange(scaleCloses[i],p))).toEqual([100,100,100]);
   const log=scaleCloses.map(p=>scalePosition(p,15,120,'log'));
   log.forEach((v,i)=>expect(v).toBeCloseTo(i/3,12));
   const linear=scaleCloses.map(p=>scalePosition(p,15,120,'linear'));
   expect(linear[1]-linear[0]).toBeCloseTo(1/7);expect(linear[2]-linear[1]).toBeCloseTo(2/7);expect(linear[3]-linear[2]).toBeCloseTo(4/7);
   expect(scaleY(15,15,120,'log')).toBe(205);expect(scaleY(120,15,120,'log')).toBe(48);
 });
 it('preserves equal additive steps linearly and shrinks them on the logarithmic axis',()=>{
   const linear=additiveCloses.map(p=>scalePosition(p,15,60,'linear')),log=additiveCloses.map(p=>scalePosition(p,15,60,'log'));
   for(let i=1;i<linear.length;i++)expect(linear[i]-linear[i-1]).toBeCloseTo(1/3);
   expect(log[1]-log[0]).toBeGreaterThan(log[2]-log[1]);expect(log[2]-log[1]).toBeGreaterThan(log[3]-log[2]);
   expect(percentChange(15,30)).toBe(100);expect(percentChange(30,45)).toBe(50);expect(percentChange(45,60)).toBeCloseTo(100/3);
   const ratioA=scalePosition(20,16,80,'log')-scalePosition(16,16,80,'log');
   const ratioB=scalePosition(80,16,80,'log')-scalePosition(64,16,80,'log');expect(ratioA).toBeCloseTo(ratioB,12);
 });
 it('distinguishes signed percent changes, cumulative factors, fixed-base percentages and indexes',()=>{
   expect(percentChange(15,30)).toBe(100);expect(percentChange(30,15)).toBe(-50);
   expect(percentChange(15,120)).toBe(700);expect(scaleCloses.map(p=>percentChange(15,p))).toEqual([0,100,300,700]);
   expect(scaleCloses.map(p=>indexedPrice(15,p))).toEqual([100,200,400,800]);
   expect(percentChange(15,15*1.2*.8)).toBeCloseTo(-4);
   expect(answer('Drei Verdopplungen nicht als dreihundert Prozent addieren')).toBe('700 Prozent.');
   expect(answer('Verdopplung und Halbierung mit ihrer Richtung lesen')).toBe('Minus50 Prozent.');
 });
 it('rejects nonpositive log inputs while allowing signed linear values and zero endpoints in valid percentage calculations',()=>{
   expect(scalePosition(-5,-10,10,'linear')).toBe(.25);expect(scalePosition(0,-10,10,'linear')).toBe(.5);
   expect(scalePosition(5,-10,10,'linear')).toBe(.75);
   expect(percentChange(30,0)).toBe(-100);expect(indexedPrice(30,0)).toBe(0);
   expect(()=>percentChange(0,30)).toThrow();expect(()=>percentChange(30,Infinity)).toThrow();
   expect(()=>scalePosition(0,0,30,'log')).toThrow();expect(()=>scalePosition(-5,-10,10,'log')).toThrow();
   expect(()=>scalePosition(15,15,15,'linear')).toThrow();expect(()=>scalePosition(120,15,60,'linear')).toThrow();
   expect(()=>scaleInterpolate(0,30,.5,'log')).toThrow();expect(()=>scaleInterpolate(15,30,2,'linear')).toThrow();
 });
 it('keeps OHLC intact and distinguishes price-space body ratios from log display ratios',()=>{
   const[a,b]=scaleCandles;expect([a.open,a.high,a.low,a.close]).toEqual([15,30,12,24]);
   expect([b.open,b.high,b.low,b.close]).toEqual([60,120,48,96]);
   expect(percentChange(a.open,a.close)).toBe(60);expect(percentChange(b.open,b.close)).toBe(60);
   const height=(mode:'linear'|'log',open:number,close:number)=>scaleY(open,12,120,mode)-scaleY(close,12,120,mode);
   expect(height('linear',b.open,b.close)/height('linear',a.open,a.close)).toBeCloseTo(4);
   expect(height('log',b.open,b.close)).toBeCloseTo(height('log',a.open,a.close),12);
   expect((a.close-a.open)/(a.high-a.low)).toBe(.5);
   const pixelRatio=height('log',a.open,a.close)/(scaleY(a.low,12,120,'log')-scaleY(a.high,12,120,'log'));
   expect(pixelRatio*100).toBeCloseTo(51.29415,4);expect(pixelRatio).not.toBeCloseTo(.5,3);
 });
 it('interpolates arithmetic and geometric midpoints and changes display fractions with axis limits',()=>{
   expect(scaleInterpolate(30,120,.5,'linear')).toBe(75);expect(scaleInterpolate(30,120,.5,'log')).toBeCloseTo(60,12);
   expect(scaleInterpolate(15,120,1/3,'linear')).toBe(50);expect(scaleInterpolate(15,120,2/3,'linear')).toBe(85);
   expect(scaleInterpolate(15,120,1/3,'log')).toBeCloseTo(30,12);expect(scaleInterpolate(15,120,2/3,'log')).toBeCloseTo(60,12);
   expect(scalePosition(60,15,120,'linear')-scalePosition(30,15,120,'linear')).toBeCloseTo(2/7);
   expect(scalePosition(60,15,75,'linear')-scalePosition(30,15,75,'linear')).toBe(.5);
   expect(answer('Die Mitte zwischen zwei Achsenwerten richtig lesen')).toBe('60 Euro.');
 });
 it('preserves published IDs and course access after seven prerequisite chapters',async()=>{
   expect(await chartsDefinition.units[7].load()).toEqual(lessons);
   expect(lessons).toHaveLength(24);expect(chartsGlossary).toHaveLength(104);
   expect(course.units.flatMap(u=>u.lessons)).toHaveLength(208);
   const prior=course.units.slice(0,7).flatMap(u=>u.lessons.map(l=>l.id)),outline=toCourseOutline(course);
   expect(lessonAccessState(outline,lessons[0],prior)).toBe('available');
   expect(lessonAccessState(outline,lessons[0],prior.slice(0,-1))).toBe('locked');
   expect(lessonAccessState(outline,lessons[1],prior)).toBe('locked');
   expect(lessonAccessState(outline,lessons[1],[...prior,lessons[0].id])).toBe('available');
   const report=checkContent({course,glossary:chartsGlossary,scenarioIds:chartScenarioIds(),describe:s=>chartDescription(s as Parameters<typeof chartDescription>[0]),caseIssues:[],known});
   expect(report.errors,formatReport(report)).toBe(0);expect(snapshotKnownIds(course)).toEqual(known);
   expect(JSON.stringify([course,chartsGlossary])).not.toMatch(/Murphy|StockCharts|TradingView|NinjaTrader|OceanofPDF/);
 });
 it('renders every comparison and the three authored diagrams with accessible descriptions',()=>{
   const scenarios=new Set<string>();
   for(const[i,l]of lessons.entries()){
     const q=l.steps.find(s=>s.type==='question')!;expect(q.correctOptionId).toBe(`choice-${i%3}`);
     expect(l.steps.find(s=>s.type==='explanation')!.paragraphs).toHaveLength(3);
     const comp=l.steps.find(s=>s.type==='comparison')!;render(<ComparisonStep step={comp}/>);
     for(const c of comp.columns)for(const p of c.points)expect(screen.getByText(p)).toBeVisible();cleanup();
     const d=l.steps.find(s=>s.type==='diagram');if(d){scenarios.add(d.scenario);render(<ScaleChart scenario={d.scenario} title={d.title}/>);expect(screen.getByRole('img')).toHaveAccessibleName();expect(screen.getByRole('img').querySelector('desc')?.textContent).toBe(chartDescription(d.scenario));cleanup();}
   }
   expect(scenarios.size).toBe(3);
 });
 it('loads the dedicated diagram and returns focus after using the shared enlarged view',async()=>{
   const d=lessons[1].steps.find(s=>s.type==='diagram')!;render(<StepChart step={d}/>);
   expect(await screen.findByText('Schritte: jeweils Faktor 2')).toBeVisible();
   const button=screen.getByRole('button',{name:`Vergrößern: ${d.title}`});fireEvent.click(button);
   const dialog=screen.getByRole('dialog',{hidden:true});expect(dialog).toBeInTheDocument();
   expect(dialog.querySelector('svg')?.getAttribute('viewBox')).toBe('0 0 760 330');
   const ids=[...document.querySelectorAll('svg [id]')].map(n=>n.id);expect(new Set(ids).size).toBe(ids.length);
   act(()=>dialog.dispatchEvent(new Event('cancel',{cancelable:true})));
   expect(screen.queryByRole('dialog',{hidden:true})).not.toBeInTheDocument();expect(button).toHaveFocus();
 });
 it('also renders the lazy scale chart through the public legacy interface',async()=>{
   render(<LearningChart scenario="rc8-candles" title="Gleiche OHLC auf zwei Skalen"/>);
   expect(await screen.findAllByText('Kerze A ↑')).toHaveLength(2);
   expect(screen.getAllByText('O15 → C24')).toHaveLength(2);expect(screen.getByRole('img')).toHaveAccessibleName();
 });
});

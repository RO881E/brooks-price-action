import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { aggregateTimeBars, timeBars, timeTrades as tape, type TimeBar } from './chapter-07-model';
import { chartsChapterSevenLessons as lessons } from './chapter-07';
import { chartsDefinition } from './index';
import { chartsGlossary } from './glossary';
import { baseCourses } from '../../allCourses';
import { StepChart, ComparisonStep } from '../../../components/LessonSteps';
import { TimeframeChart, timeframeY, timeframeX } from '../../../components/ReadingTimeframesCharts';
import { LearningChart, chartDescription, chartScenarioIds } from '../../../components/LearningChart';
import { checkContent, formatReport, snapshotKnownIds } from '../../../../build/contentCheck';
import { toCourseOutline } from '../../../../build/courseOutline';
import { lessonAccessState } from '../../../features/courseAccess';
import known from '../../../../build/published-ids-reading-charts.json';
afterEach(cleanup);
const course=baseCourses.find(c=>c.id==='reading-charts')!;
const fields=(bars:TimeBar[])=>bars.map(b=>[b.open,b.high,b.low,b.close,b.shares]);
const answer=(title:string)=>{const q=lessons.find(l=>l.title===title)!.steps.find(s=>s.type==='question')!;return q.options.find(o=>o.id===q.correctOptionId)!.label;};
describe('Timeframes: exact aggregation and shared observation time',()=>{
 it('reconstructs six exact minutes and preserves every original quantity once',()=>{
   const bars=timeBars(tape,60);
   expect(fields(bars)).toEqual([[3000,3020,3000,3010,6],[3010,3030,2990,3030,5],[3040,3050,3020,3020,8],[3010,3010,2980,3000,4],[3000,3060,3000,3040,7],[3030,3070,3020,3070,6]]);
   expect(bars.map(b=>b.ids)).toEqual([[1,2,3],[4,5,6],[7,8,9],[10,11,12],[13,14,15],[16,17,18]]);
   expect(bars.flatMap(b=>b.ids)).toEqual(tape.map(t=>t.id));expect(bars.every(b=>b.complete)).toBe(true);
   expect(bars.reduce((n,b)=>n+b.shares,0)).toBe(36);
   expect(answer('Die erste Minutenkerze aus drei Geschäften bilden')).toBe('Sechs Aktien.');
 });
 it('agrees between raw trades and fully aligned one-, three- and six-minute aggregation',()=>{
   const minute=timeBars(tape,60),three=timeBars(tape,180),six=timeBars(tape,360);
   expect(fields(three)).toEqual([[3000,3050,2990,3020,19],[3010,3070,2980,3070,17]]);
   expect(fields(six)).toEqual([[3000,3070,2980,3070,36]]);
   expect(aggregateTimeBars(minute,180)).toEqual(three);expect(aggregateTimeBars(minute,360)).toEqual(six);
   expect(aggregateTimeBars(three,360)).toEqual(six);
   expect(minute[2].close-minute[2].open).toBe(-20);expect(three[0].close-three[0].open).toBe(20);
   expect(minute[5].close-minute[5].open).toBe(40);expect(minute[5].close-minute[4].close).toBe(30);
   expect(answer('Die ersten drei Minuten zu einer Kerze zusammenfassen')).toBe('29,90 Euro.');
 });
 it('assigns exact boundaries only once and distinguishes shifted and crossing windows',()=>{
   const minute=timeBars(tape,60);expect(minute[1].ids[0]).toBe(4);
   expect(timeBars(tape,180)[1].ids[0]).toBe(10);
   const shifted=timeBars(tape,180,360,60).find(b=>b.start===60)!;
   expect(fields([shifted])).toEqual([[3010,3050,2980,3000,17]]);
   expect(shifted.ids).toEqual([4,5,6,7,8,9,10,11,12]);
   expect(()=>aggregateTimeBars(timeBars(tape,120),180)).toThrow(/Teilfenster/);
   expect(()=>aggregateTimeBars([minute[0],minute[0]],180)).toThrow(/Teilfenster/);
   const next=timeBars([...tape,{id:19,second:360,cents:3080,shares:1}],60);
   expect(next).toHaveLength(7);expect(next[6]).toMatchObject({start:360,end:420,ids:[19],complete:false});
 });
 it('limits all views to the known snapshot, handles empty windows and avoids future extrema',()=>{
   const live=timeBars(tape,180,275);
   expect(fields(live)).toEqual([[3000,3050,2990,3020,19],[3010,3060,2980,3060,9]]);
   expect(live.map(b=>b.complete)).toEqual([true,false]);expect(live.flatMap(b=>b.ids)).toEqual(tape.slice(0,14).map(t=>t.id));
   expect(aggregateTimeBars(timeBars(tape,60,275),180,275)).toEqual(live);
   expect(timeBars(tape,360,275)[0]).toMatchObject({close:3060,high:3060,shares:28,complete:false});
   expect(timeBars(tape,180,175)[0].complete).toBe(false);
   const at180=timeBars(tape,180,180);expect(at180[0].complete).toBe(true);expect(at180[1]).toMatchObject({ids:[10],complete:false});
   const missing=timeBars(tape.filter(t=>t.second<180||t.second>=240),60);
   expect(missing.map(b=>b.start)).toEqual([0,60,120,240,300]);expect(timeBars([],60)).toEqual([]);
   expect(()=>timeBars(tape,0)).toThrow();expect(()=>timeBars([...tape].reverse(),60)).toThrow();
   expect(answer('Einen gemeinsamen laufenden Zwischenstand bilden')).toBe('Neun Aktien.');
 });
 it('preserves published IDs and unlocks chapter7 after six earlier chapters',async()=>{
   expect(await chartsDefinition.units[6].load()).toEqual(lessons);
   expect(lessons).toHaveLength(24);expect(chartsGlossary).toHaveLength(92);
   expect(course.units.flatMap(u=>u.lessons)).toHaveLength(184);
   const prior=course.units.slice(0,6).flatMap(u=>u.lessons.map(l=>l.id)),outline=toCourseOutline(course);
   expect(lessonAccessState(outline,lessons[0],prior)).toBe('available');
   expect(lessonAccessState(outline,lessons[0],prior.slice(0,-1))).toBe('locked');
   expect(lessonAccessState(outline,lessons[1],prior)).toBe('locked');
   expect(lessonAccessState(outline,lessons[1],[...prior,lessons[0].id])).toBe('available');
   const report=checkContent({course,glossary:chartsGlossary,scenarioIds:chartScenarioIds(),describe:s=>chartDescription(s as Parameters<typeof chartDescription>[0]),caseIssues:[],known});
   expect(report.errors,formatReport(report)).toBe(0);expect(snapshotKnownIds(course)).toEqual(known);
   expect(JSON.stringify([course,chartsGlossary])).not.toMatch(/Murphy|StockCharts|TradingView|NinjaTrader|OceanofPDF/);
 });
 it('renders all comparisons and three descriptive diagrams with shared time and price mappings',()=>{
   const scenarios=new Set<string>();
   for(const[i,l]of lessons.entries()){
     const q=l.steps.find(s=>s.type==='question')!;expect(q.correctOptionId).toBe(`choice-${i%3}`);
     expect(l.steps.find(s=>s.type==='explanation')!.paragraphs).toHaveLength(3);
     const comp=l.steps.find(s=>s.type==='comparison')!;render(<ComparisonStep step={comp}/>);
     for(const c of comp.columns)for(const p of c.points)expect(screen.getByText(p)).toBeVisible();cleanup();
     const d=l.steps.find(s=>s.type==='diagram');if(d){scenarios.add(d.scenario);render(<TimeframeChart scenario={d.scenario} title={d.title}/>);expect(screen.getByRole('img')).toHaveAccessibleName();expect(screen.getByRole('img').querySelector('desc')?.textContent).toBe(chartDescription(d.scenario));cleanup();}
   }
   expect(scenarios.size).toBe(3);expect(timeframeX(0)).toBe(90);expect(timeframeX(360)).toBe(690);
   expect(timeframeX(180)-timeframeX(0)).toBe(300);expect(timeframeY(3080)).toBe(48);expect(timeframeY(2980)).toBe(188);
 });
 it('loads the dedicated diagram and returns keyboard focus after the shared enlarged view',async()=>{
   const d=lessons[3].steps.find(s=>s.type==='diagram')!;render(<StepChart step={d}/>);
   expect(await screen.findByText('Min. 6 ↑')).toBeVisible();
   const button=screen.getByRole('button',{name:`Vergrößern: ${d.title}`});fireEvent.click(button);
   const dialog=screen.getByRole('dialog',{hidden:true});expect(dialog).toBeInTheDocument();
   expect(dialog.querySelector('svg')?.getAttribute('viewBox')).toBe('0 0 760 330');
   const ids=[...document.querySelectorAll('svg [id]')].map(n=>n.id);expect(new Set(ids).size).toBe(ids.length);
   act(()=>dialog.dispatchEvent(new Event('cancel',{cancelable:true})));
   expect(screen.queryByRole('dialog',{hidden:true})).not.toBeInTheDocument();expect(button).toHaveFocus();
 });
 it('supports the legacy public renderer without presenting future values as current',async()=>{
   render(<LearningChart scenario="rc7-live" title="Damals bekannter Stand"/>);
   expect(await screen.findByText('9 Aktien · bisher')).toBeVisible();
   expect(screen.getByText('Letzter 30,60')).toBeVisible();expect(screen.queryByText('C 30,70')).not.toBeInTheDocument();
   expect(screen.getByRole('img')).toHaveAccessibleName();
 });
});

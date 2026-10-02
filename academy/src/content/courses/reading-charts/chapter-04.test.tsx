import { act, cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { baseCourses } from '../../allCourses';
import { checkContent, snapshotKnownIds, formatReport } from '../../../../build/contentCheck';
import { toCourseOutline } from '../../../../build/courseOutline';
import { lessonAccessState } from '../../../features/courseAccess';
import { ComparisonStep, StepChart } from '../../../components/LessonSteps';
import { chartDescription, chartScenarioIds, LearningChart } from '../../../components/LearningChart';
import { PriceStepChart, priceStepsY, priceRangeBars, priceRenkoBricks } from '../../../components/ReadingPriceStepsCharts';
import { PriceStepsWithFocus } from '../../../components/ReadingPriceStepsFocus';
import { priceStepTrades as tape, rangeGroups, teachingRenko } from './chapter-04-model';
import { chartsChapterFourLessons as lessons } from './chapter-04';
import { chartsDefinition } from './index';
import { chartsGlossary } from './glossary';
import known from '../../../../build/published-ids-reading-charts.json';
afterEach(cleanup);
const course=baseCourses.find(c=>c.id==='reading-charts')!;
const qAnswer=(title:string)=>{const q=lessons.find(l=>l.title===title)!.steps.find(s=>s.type==='question')!;return q.options.find(o=>o.id===q.correctOptionId)!.label;};
const pricePath=(prices:number[])=>prices.map((cents,i)=>({id:i+1,second:i,cents,shares:1}));
describe('Charts chapter 4: explicit price rules',()=>{
  it('reconstructs whole-trade range groups, overshoots and the unfinished remainder',()=>{
    expect(priceRangeBars.map(b=>b.ids)).toEqual([[1,2,3,4],[5,6,7],[8,9],[10,11,12,13],[14,15]]);
    expect(priceRangeBars.map(b=>[b.open,b.high,b.low,b.last,b.shares,b.complete])).toEqual([
      [10000,10020,9990,10020,8,true],[10030,10030,10000,10000,6,true],
      [10010,10050,10010,10050,5,true],[10040,10040,10000,10000,8,true],
      [9960,9970,9960,9970,3,false],
    ]);
    expect(priceRangeBars.flatMap(b=>b.ids)).toEqual(tape.map(t=>t.id));
    expect(priceRangeBars.reduce((n,b)=>n+b.shares,0)).toBe(30);
    expect(priceRangeBars.map(b=>b.high-b.low)).toEqual([30,30,40,40,10]);
    expect(qAnswer('Eine Range-Schwelle ist in unserem Modell kein exakter Höhenzwang')).toBe('0,40 Euro.');
    expect(qAnswer('Den vierten Bar und den offenen Rest prüfen')).toBe('Spanne 0,10; drei Aktien; noch offen.');
    expect(rangeGroups(tape,50)[0].ids).toEqual([1,2,3,4,5,6,7,8,9]);
    expect(()=>rangeGroups(tape,0)).toThrow();
  });
  it('builds the exact five-brick sequence with inclusive two-box reversal',()=>{
    expect(priceRenkoBricks).toEqual([
      {open:10000,close:10020,direction:1,triggerId:4},
      {open:10020,close:10040,direction:1,triggerId:9},
      {open:10020,close:10000,direction:-1,triggerId:13},
      {open:10000,close:9980,direction:-1,triggerId:14},
      {open:9980,close:9960,direction:-1,triggerId:14},
    ]);
    expect(priceRenkoBricks.every(b=>Math.abs(b.close-b.open)===20)).toBe(true);
    expect(tape.some(t=>Number(t.cents)===9980)).toBe(false);
    expect(tape.filter(t=>t.id===14)).toHaveLength(1);
    expect(qAnswer('Zwei Steine können durch eine Meldung entstehen')).toBe('Eine Meldung: G14.');
    const before=tape.filter(t=>t.id<=11);
    expect(teachingRenko(before,10000,20)).toHaveLength(2);
    expect(teachingRenko([...before,{id:16,second:200,cents:10001,shares:1}],10000,20)).toHaveLength(2);
    expect(teachingRenko([...before,{id:16,second:200,cents:10000,shares:1}],10000,20)).toHaveLength(3);
    expect(qAnswer('Die Zwei-Stein-Umkehr vom richtigen Rand aus prüfen')).toBe('100,00 Euro.');
  });
  it('distinguishes equal OHLC paths and the reverse-to-up boundary',()=>{
    const a=pricePath([10000,10040,9980,10020]),b=pricePath([10000,9980,10040,10020]);
    const ohlc=(p:typeof a)=>[p[0].cents,Math.max(...p.map(t=>t.cents)),Math.min(...p.map(t=>t.cents)),p.at(-1)!.cents];
    expect(ohlc(a)).toEqual(ohlc(b));
    expect(teachingRenko(a,10000,20).map(b=>b.direction)).toEqual([1,1,-1,-1,1]);
    expect(teachingRenko(b,10000,20).map(b=>b.direction)).toEqual([-1,1,1]);
    const down=pricePath([10000,9980,9960]);
    expect(teachingRenko([...down,...pricePath([9999]).map(t=>({...t,id:4}))],10000,20)).toHaveLength(2);
    expect(teachingRenko([...down,...pricePath([10000]).map(t=>({...t,id:4}))],10000,20).at(-1)).toMatchObject({open:9980,close:10000,direction:1});
    expect(teachingRenko(tape,10010,20)[0]).toMatchObject({open:10010,close:9990,triggerId:3});
    expect(teachingRenko(tape.filter(t=>t.id<=4),10000,40)).toEqual([]);
    expect(()=>teachingRenko(tape,10000,0)).toThrow();
  });
  it('preserves published IDs and unlocks after all three course prerequisites',async()=>{
    expect(await chartsDefinition.units[3].load()).toEqual(lessons);
    expect(lessons).toHaveLength(24);expect(chartsGlossary).toHaveLength(92);
    expect(course.units.flatMap(u=>u.lessons)).toHaveLength(184);
    const prior=course.units.slice(0,3).flatMap(u=>u.lessons.map(l=>l.id)),outline=toCourseOutline(course);
    expect(lessonAccessState(outline,lessons[0],prior)).toBe('available');
    expect(lessonAccessState(outline,lessons[0],prior.slice(0,-1))).toBe('locked');
    expect(lessonAccessState(outline,lessons[1],prior)).toBe('locked');
    expect(lessonAccessState(outline,lessons[1],[...prior,lessons[0].id])).toBe('available');
    const report=checkContent({course,glossary:chartsGlossary,scenarioIds:chartScenarioIds(),describe:s=>chartDescription(s as Parameters<typeof chartDescription>[0]),caseIssues:[],known});
    expect(report.errors,formatReport(report)).toBe(0);expect(snapshotKnownIds(course)).toEqual(known);
    expect(JSON.stringify([course,chartsGlossary])).not.toMatch(/Murphy|TradingView|NinjaTrader|OceanofPDF/);
  });
  it('renders all authored comparisons and diagrams with valid descriptive information',()=>{
    for(const [i,l] of lessons.entries()){
      const q=l.steps.find(s=>s.type==='question')!;expect(q.correctOptionId).toBe(`choice-${i%3}`);
      expect(l.steps.find(s=>s.type==='explanation')!.paragraphs).toHaveLength(3);
      render(<ComparisonStep step={l.steps.find(s=>s.type==='comparison')!}/>);
      for(const c of l.steps.find(s=>s.type==='comparison')!.columns)for(const p of c.points)expect(screen.getByText(p)).toBeVisible();cleanup();
      const d=l.steps.find(s=>s.type==='diagram');
      if(d){render(<PriceStepChart scenario={d.scenario} title={d.title}/>);expect(screen.getByRole('img')).toHaveAccessibleName();expect(screen.getByRole('img').querySelector('desc')?.textContent).toBe(chartDescription(d.scenario));cleanup();}
    }
    expect(priceStepsY(10060)).toBe(42);expect(priceStepsY(10000)).toBe(132);
    expect(priceStepsY(9980)-priceStepsY(10000)).toBe(30);
  });
  it('loads the new diagram route, keeps the shared focus and zoom state, and returns focus',async()=>{
    const d=lessons.find(l=>l.title==='Die eigene Range-Regel Schritt für Schritt anwenden')!.steps.find(s=>s.type==='diagram')!;
    render(<StepChart step={d}/>);
    expect(await screen.findByText('Bar 5 · offen')).toBeVisible();
    const button=screen.getByRole('button',{name:`Vergrößern: ${d.title}`});fireEvent.click(button);
    const dialog=screen.getByRole('dialog',{hidden:true});expect(dialog).toBeInTheDocument();
    expect(dialog.querySelector('svg[role="img"]')?.getAttribute('viewBox')).toBe('0 0 760 330');
    const ids=[...document.querySelectorAll('svg [id]')].map(n=>n.id);expect(new Set(ids).size).toBe(ids.length);
    act(()=>dialog.dispatchEvent(new Event('cancel',{cancelable:true})));
    expect(screen.queryByRole('dialog',{hidden:true})).not.toBeInTheDocument();expect(button).toHaveFocus();
  });
  it('also renders the lazy price diagram through the legacy public chart interface',async()=>{
    render(<LearningChart scenario="rc4-renko" title="Renko-Folge"/>);
    expect(await screen.findByText('Stein 5 · ↓')).toBeVisible();
    cleanup();
    render(<PriceStepsWithFocus scenario="rc4-reversal" title="Umkehr" caption="Zwischenstand bis G11" observations={['Noch keine Umkehr']}/>);
    fireEvent.click(screen.getByRole('button',{name:/Vergrößern/}));
    const dialog=screen.getByRole('dialog',{hidden:true});expect(within(dialog).getByText('Noch keine Umkehr')).toBeInTheDocument();
  });
});

import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { baseCourses } from '../../allCourses';
import { toCourseOutline } from '../../../../build/courseOutline';
import { lessonAccessState } from '../../../features/courseAccess';
import { checkContent, formatReport, snapshotKnownIds } from '../../../../build/contentCheck';
import { ComparisonStep } from '../../../components/LessonSteps';
import { LearningChart, chartDescription, chartScenarioIds } from '../../../components/LearningChart';
import { ChartWithFocus } from '../../../components/ChartFocus';
import { groupingPriceY } from '../../../components/ReadingChartsGrouping';
import { groupingTrades as tape, groupedMinuteBars as time, groupedTickBars as tick, groupedVolumeBars as volume, groupByMinute, groupByActivity } from './chapter-03-model';
import { chartsChapterThreeLessons as lessons } from './chapter-03';
import { chartsGlossary } from './glossary';
import { chartsDefinition } from './index';
import known from '../../../../build/published-ids-reading-charts.json';
afterEach(cleanup);
const values = (bars: typeof time) => bars.map(b => [b.open,b.high,b.low,b.close,b.shares]);
const answer = (title: string) => {
  const q = lessons.find(l=>l.title===title)!.steps.find(s=>s.type==='question')!;
  return q.options.find(o=>o.id===q.correctOptionId)!.label;
};
const course = baseCourses.find(c=>c.id==='reading-charts')!;
describe('Charts chapter 3: exact event grouping',()=> {
  it('assigns boundary trades once and reconstructs the four minute bars',()=>{
    expect(groupByMinute(tape,240)).toEqual(time);
    expect(time.map(b=>b.ids)).toEqual([[1,2,3,4],[5,6,7],[8,9,10],[11,12]]);
    expect(values(time)).toEqual([[2000,2010,1995,2005,8],[2015,2020,2000,2000,7],[1990,2010,1990,2010,8],[2025,2025,2015,2015,4]]);
    expect(time.every(b=>b.complete)).toBe(true);
    expect(answer('Minuten mit klaren Grenzen bilden')).toBe('In die zweite Minute.');
    expect(answer('Die erste Minuten-Zusammenfassung berechnen')).toBe('20,05 Euro.');
    expect(groupByMinute([{id:1,second:60,cents:1234,shares:1}],60).map(b=>[b.ids,b.complete])).toEqual([[[1],false]]);
  });
  it('reconstructs three-message groups independently of their duration or quantity',()=>{
    expect(groupByActivity(tape,'tick',3)).toEqual(tick);
    expect(tick.map(b=>b.ids)).toEqual([[1,2,3],[4,5,6],[7,8,9],[10,11,12]]);
    expect(values(tick)).toEqual([[2000,2010,1995,1995,6],[2005,2020,2005,2020,7],[2000,2000,1990,1995,8],[2010,2025,2010,2015,6]]);
    expect(tick.map(b=>b.lastSecond-b.firstSecond)).toEqual([15,25,20,50]);
    expect(answer('Alle vier Tick-Gruppen nachrechnen')).toBe('Geschäfte 4, 5 und 6.');
    expect(answer('Meldungszahl und Stückzahl bleiben verschieden')).toBe('Acht Aktien.');
    const samePrice=[1,2,3].map(id=>({id,second:id,cents:3000,shares:1}));
    const flat=groupByActivity(samePrice,'tick',3)[0];
    expect(flat.complete).toBe(true); expect(flat.high-flat.low).toBe(0);
  });
  it('closes whole-trade volume groups on hit or overshoot and preserves the open remainder',()=>{
    expect(groupByActivity(tape,'volume',5)).toEqual(volume);
    expect(volume.map(b=>b.ids)).toEqual([[1,2,3],[4,5],[6,7,8,9],[10,11],[12]]);
    expect(values(volume)).toEqual([[2000,2010,1995,1995,6],[2005,2015,2005,2015,6],[2020,2020,1990,1995,9],[2010,2025,2010,2025,5],[2015,2015,2015,2015,1]]);
    expect(volume.map(b=>b.complete)).toEqual([true,true,true,true,false]);
    for(const bars of [time,tick,volume]) {
      expect(bars.flatMap(b=>b.ids)).toEqual(tape.map(t=>t.id));
      expect(bars.reduce((sum,b)=>sum+b.shares,0)).toBe(27);
      expect(new Set(bars.flatMap(b=>b.ids)).size).toBe(12);
    }
    expect(answer('Die große Überschreitung im dritten Volumen-Bar prüfen')).toBe('Neun Aktien.');
    expect(answer('Den fertigen vierten Bar und den offenen Rest trennen')).toBe('Eine Aktie vorhanden, Bar noch offen.');
    const separate=[{id:1,second:1,cents:2000,shares:3},{id:2,second:2,cents:2100,shares:7}];
    expect(groupByActivity(separate,'volume',5).map(b=>b.shares)).toEqual([10]);
    expect(3+2+5).toBe(10); // Alternative split keeps quantity, not this model's groups.
    expect(()=>groupByActivity(tape,'volume',0)).toThrow();
  });
  it('does not leak later trades into running snapshots or fabricate empty bars',()=>{
    const snapshot=groupByMinute(tape,75);
    expect(values(snapshot)[1]).toEqual([2015,2020,2015,2020,5]);
    expect(snapshot[1].complete).toBe(false); expect(snapshot.flatMap(b=>b.ids)).toEqual([1,2,3,4,5,6]);
    expect(answer('Die laufende Minute nur mit bisherigen Daten lesen')).toBe('20,15 Euro.');
    expect(groupByMinute([],120)).toEqual([]);
    expect(groupByMinute([{id:1,second:1,cents:1000,shares:1},{id:2,second:181,cents:1100,shares:1}],240)).toHaveLength(2);
    const alternateStart=groupByActivity(tape.slice(1),'tick',3)[0];
    expect([alternateStart.ids,alternateStart.open,alternateStart.high,alternateStart.low,alternateStart.close]).toEqual([[2,3,4],2010,2010,1995,2005]);
  });
  it('registers stable published IDs and unlocks only after the course prerequisites',async()=>{
    expect(await chartsDefinition.units[2].load()).toEqual(lessons);
    expect(lessons).toHaveLength(24); expect(chartsGlossary).toHaveLength(68);
    const outline=toCourseOutline(course), previous=course.units.slice(0,2).flatMap(u=>u.lessons.map(l=>l.id));
    expect(lessonAccessState(outline,lessons[0],previous)).toBe('available');
    expect(lessonAccessState(outline,lessons[0],previous.slice(0,-1))).toBe('locked');
    expect(lessonAccessState(outline,lessons[1],previous)).toBe('locked');
    expect(lessonAccessState(outline,lessons[1],[...previous,lessons[0].id])).toBe('available');
    const report=checkContent({course,glossary:chartsGlossary,scenarioIds:chartScenarioIds(),describe:s=>chartDescription(s as Parameters<typeof chartDescription>[0]),caseIssues:[],known});
    expect(report.errors,formatReport(report)).toBe(0); expect(snapshotKnownIds(course)).toEqual(known);
    expect(JSON.stringify([course,chartsGlossary])).not.toMatch(/Murphy|TradingView|NinjaTrader|OceanofPDF/);
  });
  it('renders every comparison and diagram and labels the open bar without relying on color',()=>{
    for(const [i,lesson] of lessons.entries()) {
      const question=lesson.steps.find(s=>s.type==='question')!;
      expect(question.correctOptionId).toBe(`choice-${i%3}`);
      expect(lesson.steps.find(s=>s.type==='explanation')!.paragraphs).toHaveLength(3);
      render(<ComparisonStep step={lesson.steps.find(s=>s.type==='comparison')!}/>);
      for(const col of lesson.steps.find(s=>s.type==='comparison')!.columns) for(const point of col.points) expect(screen.getByText(point)).toBeVisible();
      cleanup();
      const diagram=lesson.steps.find(s=>s.type==='diagram');
      if(diagram) {
        render(<LearningChart scenario={diagram.scenario} title={diagram.title}/>);
        expect(screen.getByRole('img')).toHaveAccessibleName();
        expect(screen.getByRole('img').querySelector('desc')?.textContent).toBe(chartDescription(diagram.scenario));
        if(diagram.scenario==='rc3-volume') expect(screen.getByText('Bar 5 · offen')).toBeVisible();
        cleanup();
      }
    }
  });
  it('uses a fixed linear price mapping and retains focus with unique SVG IDs',async()=>{
    expect(groupingPriceY(2030)).toBe(45); expect(groupingPriceY(1985)).toBe(195);
    expect(groupingPriceY(2000)-groupingPriceY(2015)).toBe(50);
    render(<ChartWithFocus scenario="rc3-volume" title="Volumen-Gruppen" caption="Eigene Luma-Daten" observations={["Letzter Bar offen"]}/>);
    const button=screen.getByRole('button',{name:/vergrößern/i});
    await act(async()=>fireEvent.click(button));
    expect(screen.getByRole('dialog', { hidden: true })).toBeInTheDocument();
    const ids=[...document.querySelectorAll('svg [id]')].map(el=>el.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

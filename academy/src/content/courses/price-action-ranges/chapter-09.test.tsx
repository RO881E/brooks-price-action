import {describe,it,expect} from 'vitest';
import {renderToStaticMarkup} from 'react-dom/server';
import {rangesChapterNineLessons as lessons} from './chapter-09';
import {rangesDefinition} from './index';
import {signalBars,signalReferences,signalScenarioBars,signalMirror,signalFailureBars,signalThroughBars,signalTurnBars,SignalMarks} from '../../../components/RangesSignalCharts';
import {chartScenarioIds,chartDescription} from '../../../components/LearningChart';
const answer=(title:string)=>{const q=lessons.find(l=>l.title===title)!.steps.find(s=>s.type==='question')!;return q.options.find(o=>o.id===q.correctOptionId)!.label;};
describe('Ranges chapter 9: earlier failed signals, time boundaries and orders',()=>{
 it('loads the tenth unit and registers every exercise diagram',async()=>{
  const unit=rangesDefinition.units[9];expect(await unit.load()).toEqual(lessons);expect(lessons).toHaveLength(28);expect(unit.estimatedLessonCount).toBe(lessons.length);
  for(const l of lessons){expect(l.id).toMatch(/^price-action-ranges.chapter-09\./);const d=l.steps.find(s=>s.type==='diagram')!;expect(chartScenarioIds()).toContain(d.scenario);expect(chartDescription(d.scenario).length).toBeGreaterThan(60);}
 });
 it('derives trigger contacts and subsequent structure failures from selected bars',()=>{
  for(const r of signalReferences){expect(signalBars[r.index].high).toBe(r.high);expect(signalBars[r.index].low).toBe(r.low);expect(r.entry-r.high).toBeCloseTo(.1);const next=signalBars[r.index+1];expect(next.high).toBeGreaterThan(r.entry);expect(next.close).toBeLessThan(r.low);}
  expect(Math.min(...signalBars.slice(0,7).map(b=>b.low))).toBe(98.5);expect(signalScenarioBars('par9-untriggered')[2].high).toBeLessThan(signalReferences[0].entry);
 });
 it('keeps later candles and references hidden at each decision',()=>{
  const sizes={'par9-signal':2,'par9-trigger':3,'par9-history':7,'par9-recovery':8,'par9-first':9,'par9-pause':10,'par9-contact':11} as const;
  for(const [s,n] of Object.entries(sizes))expect(signalScenarioBars(s as keyof typeof sizes)).toHaveLength(n);
  const early=renderToStaticMarkup(<svg><SignalMarks scenario="par9-signal"/></svg>);expect(early).toContain('Signal A');expect(early).not.toContain('Signal B');expect(early).not.toContain('Signal C');expect((early.match(/candle-body/g)||[])).toHaveLength(2);
  expect(signalBars[7].high).toBeLessThan(103);expect(signalBars[8].high).toBeGreaterThan(103);expect(signalBars[8].high).toBeLessThan(105.5);
 });
 it('shows comparable divergent paths without altering shared history',()=>{
  expect(signalFailureBars.slice(0,10)).toEqual(signalBars.slice(0,10));expect(Math.max(...signalFailureBars.slice(7).map(b=>b.high))).toBeLessThan(108);
  expect(signalThroughBars.slice(0,11)).toEqual(signalBars);expect(signalTurnBars.slice(0,11)).toEqual(signalBars);
  expect(signalThroughBars[11].close).toBeGreaterThan(108);expect(signalTurnBars[11].close).toBe(105.8);expect(signalTurnBars[12].high).toBeLessThan(108);expect(signalTurnBars[12].close).toBeLessThan(signalTurnBars[11].close);
 });
 it('distinguishes exact signal contact, preselected zone and missed entry',()=>{
  const b=signalBars[10];expect(b.high).toBe(108);expect(b.high).toBeGreaterThanOrEqual(107.8);expect(b.high).toBeLessThanOrEqual(108.2);expect(b.high).toBeLessThan(108.1);
  expect(answer('Eine vorab gewählte Zone schafft eine eigene Regel')).toBe('Zone besucht und Signalhoch erreicht; Einstieg 108,1 noch nicht erreicht.');
  const mirror=signalScenarioBars('par9-mirror');expect(mirror).toEqual(signalBars.map(signalMirror));expect(mirror[10].low).toBe(92);expect(mirror[10].low).toBeGreaterThan(91.9);expect(signalReferences.map(r=>200-r.high)).toEqual([92,94.5,97]);
 });
 it('reconciles budget, net payouts and payout-only break-even rates',()=>{
  const loss=(102-98.4)*5+2;expect(loss).toBeCloseTo(20);expect((102-98.4)*6+2).toBeCloseTo(23.6);
  const gains=[103,105.5,108].map(t=>(t-102)*5-2);expect(gains).toEqual([3,15.5,28]);
  const thresholds=gains.map(g=>loss/(loss+g));expect(thresholds[0]).toBeCloseTo(.869565);expect(thresholds[1]).toBeCloseTo(.56338);expect(thresholds[2]).toBeCloseTo(.416667);
  expect(answer('Geldrisiko vor dem Zielwunsch rechnen')).toBe('Fünf.');expect(answer('Das nähere Ziel hat auch eine kleinere Auszahlung')).toBe('15,5 Euro.');expect((108-105.3)*5-2).toBeCloseTo(11.5);expect((105.3-103.7)*5+2).toBeCloseTo(10);
 });
 it('keeps averaged entry arithmetic separate from drawdown and gross break-even',()=>{
  expect((108.1+103.1)/2).toBe(105.6);expect((108.1-98.5)+(103.1-98.5)).toBeCloseTo(14.2);expect((108.1-108.1)+(108.1-103.1)-2).toBeCloseTo(3);expect(answer('Nachkäufe erklären den Bezug, heilen aber kein Risiko')).toBe('105,6.');
 });
 it('renders valid candles and finite geometry for every chart branch',()=>{
  for(const s of chartScenarioIds().filter(s=>s.startsWith('par9-'))){for(const b of signalScenarioBars(s)){expect(b.high).toBeGreaterThanOrEqual(Math.max(b.open,b.close));expect(b.low).toBeLessThanOrEqual(Math.min(b.open,b.close));}const markup=renderToStaticMarkup(<svg><SignalMarks scenario={s}/></svg>);expect(markup).not.toMatch(/NaN|Infinity|undefined/);expect((markup.match(/candle-body/g)||[])).toHaveLength(signalScenarioBars(s).length);}
 });
});

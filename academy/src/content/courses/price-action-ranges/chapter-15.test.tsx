import {describe,it,expect} from 'vitest';
import {renderToStaticMarkup} from 'react-dom/server';
import {rangesChapterFifteenLessons as lessons} from './chapter-15';
import {rangesDefinition} from './index';
import {chartDescription,chartScenarioIds} from '../../../components/LearningChart';
import {timingDuration,timingClock,timingKnown,timingContains,timingMorning,timingMorningReversal,timingMorningQuiet,timingAfternoon,timingAfternoonFailure,timingRange,timingNext,timingPreviousSession,timingPriorLine,timingLine,timingEma,timingMirror,timingUnits,timingScenario,TimingMarks} from '../../../components/RangesTimingCharts';
describe('Ranges chapter 15: dated sessions, event windows and completed information',()=>{
 it('loads the chapter and registers every diagram with truthful time captions',async()=>{
  const u=rangesDefinition.units.find(u=>u.id==='price-action-ranges.chapter-15')!;expect(await u.load()).toEqual(lessons);expect(u.estimatedLessonCount).toBe(34);
  const d=lessons.flatMap(l=>l.steps.filter(s=>s.type==='diagram'));expect(new Set(d.map(s=>s.scenario)).size).toBe(27);
  for(const s of d){expect(chartScenarioIds()).toContain(s.scenario);expect(chartDescription(s.scenario).length).toBeGreaterThan(70);}
  expect(d.find(s=>s.scenario==='par15-clock')!.caption).toContain('keine Kursdaten');expect(d.find(s=>s.scenario==='par15-next-day')!.caption).toContain('05.02.2026');
 });
 it('converts dated winter and transition-week instants rather than using a constant Berlin offset',()=>{
  const cases=[['2026-02-04T15:00:00Z','16:00'],['2026-03-18T14:00:00Z','15:00'],['2026-04-08T14:00:00Z','16:00'],['2026-10-29T14:00:00Z','15:00']];
  for(const [iso,berlin] of cases){expect(timingClock(Date.parse(iso))).toBe('10:00');expect(timingClock(Date.parse(iso),'Europe/Berlin')).toBe(berlin);}
  expect(timingClock(Date.parse(cases[0][0]),'America/Los_Angeles')).toBe('07:00');expect(timingClock(Date.parse(cases[0][0]),'UTC')).toBe('15:00');
 });
 it('assigns an exact event to its start-inclusive, end-exclusive bar',()=>{
  const event=Date.parse('2026-02-04T15:00:00Z');expect(timingContains(timingMorning[2],event)).toBe(false);expect(timingContains(timingMorning[3],event)).toBe(true);
  expect(timingContains(timingMorning[3],event+timingDuration-1)).toBe(true);expect(timingContains(timingMorning[3],event+timingDuration)).toBe(false);
 });
 it('exposes completed bars only, including the exact pre-event boundary and partial last bar',()=>{
  const ten=Date.parse('2026-02-04T15:00:00Z');expect(timingKnown(timingMorning,ten)).toEqual(timingMorning.slice(0,3));expect(timingKnown(timingMorning,ten+timingDuration-1)).toHaveLength(3);expect(timingKnown(timingMorning,ten+timingDuration)).toHaveLength(4);
  const pre=timingScenario('par15-morning-pre');expect(pre.asOf).toBe(ten);expect(pre.bars).toHaveLength(3);
  const svg=renderToStaticMarkup(<svg><TimingMarks scenario="par15-morning-pre"/></svg>);expect((svg.match(/candle-body/g)||[])).toHaveLength(3);expect(svg).not.toContain('L102 / C102,4');
 });
 it('preserves identical morning histories before opposite outcomes and a quiet-window alternative',()=>{
  expect(timingMorningReversal.slice(0,4)).toEqual(timingMorning.slice(0,4));expect(timingMorningQuiet.slice(0,3)).toEqual(timingMorning.slice(0,3));
  expect(timingMorning[4].close).toBeGreaterThan(106);expect(timingMorningReversal[4].close).toBeLessThan(100);expect(timingMorningQuiet[3].high-timingMorningQuiet[3].low).toBeCloseTo(.5);
  expect(timingMorning[3].start).toBe(timingMorningReversal[3].start);
 });
 it('separates known range bounds, both early probes and unknown participants',()=>{
  const opening=timingScenario('par15-opening-range').bars,full=timingScenario('par15-opening-traps').bars;
  expect(full.slice(0,3)).toEqual(opening);expect(Math.min(...opening.map(b=>b.low))).toBe(98.5);expect(Math.max(...opening.map(b=>b.high))).toBe(104.5);expect(full[3].low).toBeLessThan(98.5);expect(full[4].high).toBeGreaterThan(104.5);
  expect(chartDescription('par15-opening-traps')).toContain('Teilnehmerpositionen');
 });
 it('computes causal EMA contacts before the shock and first whole opposing bar after it',()=>{
  const ema=timingEma(timingAfternoon);for(let end=1;end<=timingAfternoon.length;end++)expect(timingEma(timingAfternoon.slice(0,end))).toEqual(ema.slice(0,end));
  for(const i of [3,5]){expect(timingAfternoon[i].low).toBeLessThan(ema[i]);expect(timingAfternoon[i].high).toBeGreaterThan(ema[i]);}
  expect(ema[0]).toBeCloseTo(108+.8*2/21);expect(timingAfternoon.slice(0,7).every((b,i)=>b.high>=ema[i])).toBe(true);expect(timingAfternoon[7].high).toBeLessThan(ema[7]);
 });
 it('keeps the external line anchors and first visible violation known before use',()=>{
  expect(timingLine(timingPriorLine.start)).toBeCloseTo(106.2);expect(timingLine(timingPriorLine.secondStart)).toBeCloseTo(107.8);expect(timingLine(timingAfternoon[6].start)).toBeCloseTo(109);
  for(const b of timingAfternoon.slice(0,6))expect(b.low+1e-10).toBeGreaterThanOrEqual(timingLine(b.start));expect(timingAfternoon[6].low).toBeLessThan(timingLine(timingAfternoon[6].start));
 });
 it('separates first threshold, deeper second low and a later known second signal',()=>{
  expect(timingAfternoon[8].high).toBeGreaterThan(107.9);expect(timingAfternoon[8].close).toBeLessThan(107.9);
  expect(timingAfternoon[9].low).toBeLessThan(timingAfternoon[6].low);expect(timingAfternoon[9].low).toBeGreaterThan(104.5);
  expect(timingAfternoon[10].high).toBeLessThan(timingAfternoon[9].high);expect(timingAfternoon[11].high).toBeGreaterThan(106.1);
  expect(timingClock(timingScenario('par15-late-signal').asOf)).toBe('14:50');
 });
 it('holds a different late outcome to the same completed shock and mirrors all prices and EMA',()=>{
  expect(timingAfternoonFailure.slice(0,7)).toEqual(timingAfternoon.slice(0,7));expect(timingAfternoonFailure.at(-1)!.low).toBe(101);
  const mirror=timingScenario('par15-late-bear').bars;expect(mirror).toEqual(timingAfternoon.map(timingMirror));const e=timingEma(timingAfternoon),me=timingEma(mirror,112);for(let i=0;i<e.length;i++)expect(me[i]).toBeCloseTo(220-e[i]);
  expect(timingAfternoon[12].high).toBeLessThan(111.5);expect(timingAfternoon[13].high).toBeGreaterThan(111.5);expect(timingClock(timingScenario('par15-late-resume').asOf)).toBe('15:05');
 });
 it('retains two upper-range hours before lower probes and does not invent a full close early',()=>{
  const upper=timingScenario('par15-range-upper');expect(upper.bars).toHaveLength(24);expect(upper.asOf-upper.bars[0].start).toBe(120*60000);
  for(const b of upper.bars){expect(b.low).toBeGreaterThan(102);expect(b.high).toBeLessThan(108);}
  expect(timingRange[24].low).toBeLessThan(96);expect(timingRange[27].low).toBeLessThan(timingRange[24].low);expect(timingRange[28].high).toBe(96.5);expect(timingRange[29].high).toBeGreaterThan(96.6);
  expect(timingScenario('par15-range-middle').bars).toHaveLength(31);expect(timingRange[30].high).toBeGreaterThan(102);expect(timingRange[30].high).toBeLessThan(108);
  const close=timingScenario('par15-range-close');expect(close.bars).toHaveLength(42);expect(timingClock(close.bars.at(-1)!.start)).toBe('15:55');expect(timingClock(close.asOf)).toBe('16:00');expect(close.bars.at(-1)!.close).toBe(101.8);
 });
 it('reconciles late costs, adverse fills and independent next-session context',()=>{
  expect(5*(111.5-111.3)-2).toBeCloseTo(-1);expect(timingUnits(20,2,106.1,104.5)).toBe(11);expect(11*(106.1-104.5)+2).toBeCloseTo(19.6);
  expect(timingUnits(20,2,106.4,104.5)).toBe(9);expect(11*(106.4-104.5)+2).toBeCloseTo(22.9);
  expect(timingPreviousSession).toEqual({high:112,low:104.5,close:111.6});expect(new Date(timingNext[0].start).toISOString().slice(0,10)).toBe('2026-02-05');expect(timingNext[0].high).toBeGreaterThan(112);expect(timingNext[3].close).toBeLessThan(timingNext[1].close);
 });
 it('renders every scenario with truthful cutoffs and valid finite OHLC geometry',()=>{
  for(const s of chartScenarioIds().filter(s=>s.startsWith('par15-'))){const m=timingScenario(s);for(const b of m.bars){expect(b.start+timingDuration).toBeLessThanOrEqual(m.asOf);expect(b.low).toBeLessThanOrEqual(Math.min(b.open,b.close));expect(b.high).toBeGreaterThanOrEqual(Math.max(b.open,b.close));}
   const svg=renderToStaticMarkup(<svg><TimingMarks scenario={s}/></svg>);expect(svg).not.toMatch(/NaN|Infinity/);}
 });
});

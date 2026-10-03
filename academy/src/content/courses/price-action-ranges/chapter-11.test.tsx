import {describe,it,expect} from 'vitest';
import {renderToStaticMarkup} from 'react-dom/server';
import {rangesChapterElevenLessons as lessons} from './chapter-11';
import {rangesDefinition} from './index';
import {chartDescription,chartScenarioIds} from '../../../components/LearningChart';
import {pullbackBars,pullbackEma,pullbackEma20,pullbackAggregate,pullbackMirror,pullbackMinorLine,pullbackMajorLine,pullbackScenarioBars,pullbackH2Bars,pullbackMajor,PullbackMarks} from '../../../components/RangesPullbackCharts';
describe('Ranges chapter 11: known information and scoped pullbacks',()=>{
 it('loads the chapter and registers every diagram',async()=>{
  const unit=rangesDefinition.units.at(-1)!;expect(await unit.load()).toEqual(lessons);expect(unit.estimatedLessonCount).toBe(35);
  const d=lessons.flatMap(l=>l.steps.filter(s=>s.type==='diagram'));expect(new Set(d.map(s=>s.scenario)).size).toBe(28);
  for(const s of d){expect(chartScenarioIds()).toContain(s.scenario);expect(chartDescription(s.scenario).length).toBeGreaterThan(70);}
  expect(d.find(s=>s.scenario==='par11-higher')!.caption).toContain('Drei-Minuten');
 });
 it('keeps identical known history before continuation, non-trigger and failure',()=>{
  for(const s of ['par11-resume','par11-untriggered','par11-failure'] as const)expect(pullbackScenarioBars(s).slice(0,4)).toEqual(pullbackBars.slice(0,4));
  expect(pullbackScenarioBars('par11-resume')[4].high).toBeGreaterThan(112.1);
  expect(pullbackScenarioBars('par11-untriggered')[4].high).toBeLessThan(112.1);
  expect(pullbackScenarioBars('par11-failure')[4].high).toBeGreaterThan(112.1);expect(pullbackScenarioBars('par11-failure')[4].close).toBeLessThan(109.5);
  const svg=renderToStaticMarkup(<svg><PullbackMarks scenario="par11-entry"/></svg>);expect((svg.match(/candle-body/g)||[])).toHaveLength(4);expect(svg).not.toContain('H5 114');
 });
 it('separates an ABC shape from the qualifying H1/H2 variant',()=>{
  expect(pullbackBars[6].high).toBeLessThan(pullbackBars[5].high);
  expect(pullbackH2Bars[6].high).toBeGreaterThan(pullbackH2Bars[5].high);expect(pullbackH2Bars[7].high).toBeLessThan(pullbackH2Bars[6].high);expect(pullbackH2Bars[8].high).toBeGreaterThan(pullbackH2Bars[7].high);
  expect(pullbackH2Bars.filter((b,i)=>b!==pullbackBars[i])).toHaveLength(1);
 });
 it('calculates EMA causally and identifies first post-spike contact and whole opposite bars',()=>{
  expect(pullbackEma([100,110,105],3)).toEqual([100,105,105]);const ema=pullbackEma20(pullbackBars);expect(ema[0]).toBeCloseTo(100+3.8*2/21);
  for(let end=1;end<=16;end++)expect(pullbackEma20(pullbackBars.slice(0,end))).toEqual(ema.slice(0,end));
  for(let i=3;i<9;i++)expect(pullbackBars[i].low).toBeGreaterThan(ema[i]);
  expect(pullbackBars[9].low).toBeLessThan(ema[9]);expect(pullbackBars[9].high).toBeGreaterThan(ema[9]);
  expect(pullbackBars[11].close).toBeLessThan(ema[11]);expect(pullbackBars[11].high).toBeGreaterThan(ema[11]);
  for(let i=12;i<16;i++)expect(pullbackBars[i].high).toBeLessThan(ema[i]);
  expect(pullbackScenarioBars('par11-contact')).toHaveLength(10);expect(pullbackScenarioBars('par11-full-below')).toHaveLength(13);
 });
 it('distinguishes minor line, new high and older swing violation',()=>{
  expect(pullbackMinorLine(4)).toBe(pullbackBars[3].low);expect(pullbackMinorLine(6)).toBe(pullbackBars[5].low);expect(pullbackMinorLine(8)).toBe(111.5);
  expect(pullbackBars[7].low).toBeLessThan(111.5);expect(pullbackBars[7].low).toBeGreaterThan(pullbackBars[1].low);
  expect(pullbackBars[8].high).toBeGreaterThan(pullbackBars[4].high);expect(pullbackBars[11].low).toBeLessThan(pullbackBars[1].low);
 });
 it('keeps major line, local test and absolute anchors independent',()=>{
  expect(pullbackMajorLine(1)).toBe(pullbackMajor[0].high);expect(pullbackMajorLine(3)).toBe(pullbackMajor[2].high);
  expect(pullbackMajor[4].high).toBeGreaterThan(pullbackMajorLine(5));expect(pullbackMajor[4].high).toBeLessThan(122);
  expect(pullbackMajor[7].low).toBeLessThan(pullbackMajor[5].low);expect(pullbackMajor[7].low).toBeGreaterThan(109);
  expect(pullbackScenarioBars('par11-double')).toHaveLength(8);expect(Math.max(...pullbackMajor.slice(1,9).map(b=>b.high))).toBeLessThan(122);expect(pullbackMajor[9].high).toBeGreaterThan(122);
  expect(pullbackScenarioBars('par11-bear-resume').slice(0,5)).toEqual(pullbackMajor.slice(0,5));expect(pullbackScenarioBars('par11-bear-resume')[5].low).toBeLessThan(109);
 });
 it('mirrors high, low and same-time EMA consistently',()=>{
  for(const b of pullbackBars){expect(pullbackMirror(pullbackMirror(b)).open).toBeCloseTo(b.open);expect(pullbackMirror(b).high).toBeCloseTo(220-b.low);}
  const mirrored=pullbackScenarioBars('par11-bear-full'),ema=pullbackEma20(pullbackBars.slice(0,13));expect(mirrored[12].low).toBeGreaterThan(220-ema[12]);
 });
 it('uses only complete three-minute groups and a disclosed EMA3',()=>{
  const g=pullbackScenarioBars('par11-higher');expect(g).toEqual(pullbackAggregate(pullbackBars.slice(0,9),3));expect(g).toHaveLength(3);
  expect(g[0]).toEqual({open:100,high:112,low:99.8,close:111.8});expect(g[2].close).toBe(115);expect(pullbackAggregate(pullbackBars.slice(0,11),3)).toEqual(g);
  const ema=pullbackEma(g.map(b=>b.close),3);expect(ema[0]).toBeCloseTo(111.8);expect(ema[1]).toBeCloseTo(111.4);expect(ema[2]).toBeCloseTo(113.2);
  const svg=renderToStaticMarkup(<svg><PullbackMarks scenario="par11-higher"/></svg>);expect(svg).toContain('EMA3');expect(svg).not.toContain('10–12');
 });
 it('validates OHLC datasets, finite charts and independent risk budgets',()=>{
  for(const id of chartScenarioIds().filter(s=>s.startsWith('par11-'))){for(const b of pullbackScenarioBars(id)){expect(b.low).toBeLessThanOrEqual(Math.min(b.open,b.close));expect(b.high).toBeGreaterThanOrEqual(Math.max(b.open,b.close));}expect(renderToStaticMarkup(<svg><PullbackMarks scenario={id}/></svg>)).not.toMatch(/NaN|Infinity/);}
  expect(Math.floor((30-2)/(112.1-109.4))).toBe(10);expect(10*(112.1-109.4)+2).toBeCloseTo(29);expect(Math.floor((30-2)/(112.1-106.9))).toBe(5);expect(5*(112.1-106.9)+2).toBeCloseTo(28);
 });
});

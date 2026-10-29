import {describe,it,expect} from 'vitest';
import {renderToStaticMarkup} from 'react-dom/server';
import {rangesChapterFourteenLessons as lessons} from './chapter-14';
import {rangesDefinition} from './index';
import {chartDescription,chartScenarioIds} from '../../../components/LearningChart';
import {averageGapMain as b,averageGapRange,averageGapStrong,averageGapBoundary,averageGapTight,averageGapEma,averageGapSide,averageGapFirstOpposite,averageGapMirror,averageGapLine,averageGapUnits,averageGapScenarioBars as bars,AverageGapMarks} from '../../../components/RangesAverageGapCharts';
describe('Ranges chapter 14: first whole opposing EMA bars and separate attempts',()=>{
 it('publishes the unit, lessons and each described diagram',async()=>{
  const u=rangesDefinition.units.find(u=>u.id==='price-action-ranges.chapter-14')!;expect(await u.load()).toEqual(lessons);expect(u.estimatedLessonCount).toBe(31);
  const d=lessons.flatMap(l=>l.steps.filter(s=>s.type==='diagram'));expect(new Set(d.map(s=>s.scenario)).size).toBe(24);
  for(const s of d){expect(chartScenarioIds()).toContain(s.scenario);expect(chartDescription(s.scenario).length).toBeGreaterThan(70);}
 });
 it('derives EMA20 independently from forty completed preparation closes and stays causal',()=>{
  const closes=[...Array<number>(40).fill(110),...b.map(x=>x.close)];let v=closes[0];const reference=closes.map((c,i)=>{v=i===0?c:(19*v+2*c)/21;return v;}).slice(40),ema=averageGapEma(b);
  for(let i=0;i<b.length;i++)expect(ema[i]).toBeCloseTo(reference[i],10);
  for(let end=1;end<=b.length;end++)expect(averageGapEma(b.slice(0,end))).toEqual(ema.slice(0,end));
  expect(ema[5]).toBeCloseTo(112.303337);expect(ema[6]).toBeCloseTo(112.131591);
 });
 it('separates close below from first whole bar below and requires no classical price gap',()=>{
  const e=averageGapEma(b);expect(b[5].close).toBeLessThan(e[5]);expect(b[5].high).toBeGreaterThan(e[5]);expect(averageGapSide(b[5],e[5])).toBe('contact');
  expect(b[6].high).toBeLessThan(e[6]);expect(averageGapFirstOpposite(b.slice(0,6),'bull')).toBeUndefined();expect(averageGapFirstOpposite(b,'bull')).toBe(7);
  expect(Math.max(b[5].low,b[6].low)).toBeLessThan(Math.min(b[5].high,b[6].high));
  expect(bars('par14-first')).toHaveLength(7);expect(renderToStaticMarkup(<svg><AverageGapMarks scenario="par14-first"/></svg>)).not.toContain('Stand8');
 });
 it('keeps equality as contact and classifies fully separated spans strictly',()=>{
  expect(averageGapEma(averageGapBoundary)[0]).toBe(109);expect(averageGapSide(averageGapBoundary[0],109)).toBe('contact');
  expect(averageGapSide({open:110,high:111,low:109,close:110},109)).toBe('contact');
  expect(averageGapSide({open:110,high:111,low:109.1,close:110},109)).toBe('above');
 });
 it('computes the independent line before the first whole opposing bar',()=>{
  expect(averageGapLine(1)).toBe(b[0].low);expect(averageGapLine(3)).toBeCloseTo(b[2].low);expect(averageGapLine(6)).toBeCloseTo(119.3);expect(b[5].low).toBeLessThan(averageGapLine(6));
  expect(bars('par14-line')).toHaveLength(6);expect(averageGapFirstOpposite(b.slice(0,6),'bull')).toBeUndefined();
 });
 it('distinguishes first threshold reach, still-open average gap and subsequent modeled stop',()=>{
  const e=averageGapEma(b);expect(b[7].high).toBeGreaterThan(111.3);expect(b[7].high).toBeLessThan(e[7]);expect(b[7].low).toBeGreaterThan(110.1);expect(b[8].low).toBeLessThan(110.1);
  expect(b[9].high).toBeLessThan(b[8].high);expect(b[10].high).toBeGreaterThan(111.1);
  expect(b.slice(6,10).every((x,i)=>averageGapSide(x,e[i+6])==='below')).toBe(true);expect(averageGapSide(b[10],e[10])).toBe('contact');
 });
 it('preserves shared histories for second non-trigger and weak triggered counterexamples',()=>{
  for(const s of ['par14-untriggered','par14-second-fail','par14-second-entry'] as const)expect(bars(s).slice(0,10)).toEqual(b.slice(0,10));
  expect(bars('par14-untriggered')[10].high).toBeLessThan(111.1);const f=bars('par14-second-fail')[10];expect(f.high).toBeGreaterThan(111.1);expect(f.low).toBeLessThan(108.9);expect(f.close).toBe(108);
 });
 it('keeps current EMA, old reference and later exact extreme tests independent',()=>{
  const e=averageGapEma(b);expect(e[9]).toBeCloseTo(111.705386);expect(e[10]).toBeCloseTo(111.904873);expect(e[9]).not.toBe(e[10]);
  expect(b[10].low).toBeLessThan(e[10]);expect(b[10].high).toBeGreaterThan(e[10]);expect(Math.max(...b.slice(6,13).map(x=>x.high))).toBeLessThan(120);expect(b[13].high).toBeGreaterThan(120);
  expect(b[14].low).toBe(114);expect(b[15].high).toBe(117);expect(b[16].low).toBeLessThan(b[14].low);
 });
 it('mirrors high, low, EMA and first opposing side consistently',()=>{
  const mirrored=bars('par14-bear'),ema=averageGapEma(b.slice(0,14));expect(mirrored).toEqual(b.slice(0,14).map(averageGapMirror));
  const me=averageGapEma(mirrored);for(let i=0;i<mirrored.length;i++)expect(me[i]).toBeCloseTo(220-ema[i]);
  expect(averageGapFirstOpposite(mirrored,'bear')).toBe(7);expect(mirrored[12].low).toBe(100.5);expect(mirrored[13].low).toBe(99.5);
 });
 it('uses a disclosed fixed range target and retains different strong-return context',()=>{
  const e=averageGapEma(averageGapRange,100);expect(e[4]).toBeCloseTo(99.68334333553454);expect(Math.floor(e[4]*10)/10).toBe(99.6);expect(e[5]).toBeCloseTo(99.71350111310268);
  expect(averageGapRange[5].high).toBeGreaterThan(99.6);expect(averageGapRange[5].high).toBeGreaterThan(e[5]);expect(averageGapRange[5].low).toBeLessThan(e[5]);
  expect(averageGapStrong.slice(0,5)).toEqual(averageGapRange.slice(0,5));const se=averageGapEma(averageGapStrong,100);expect(averageGapStrong[6].low).toBeGreaterThan(se[6]);expect(averageGapStrong[7].high).toBeGreaterThan(averageGapStrong[5].high);
 });
 it('rejects the small-cost opportunity and reconciles standalone versus shared budgets',()=>{
  expect(averageGapSide(averageGapTight[0],averageGapEma(averageGapTight,100)[0])).toBe('above');expect(10*(100.1-100)-2).toBeCloseTo(-1);expect(10*(100.6-100.1)+2).toBeCloseTo(7);
  expect(averageGapUnits(30,2,111.1,108.9)).toBe(12);expect(12*(111.1-108.9)+2).toBeCloseTo(28.4);expect(12*(120-111.1)-2).toBeCloseTo(104.8);
  expect(10*(111.3-110.1)+2).toBeCloseTo(14);expect(averageGapUnits(16,2,111.1,108.9)).toBe(6);expect(14+6*(111.1-108.9)+2).toBeCloseTo(29.2);
  expect((2*111.1+2*109.1)/4).toBeCloseTo(110.1);expect(2*(111.1-108.9)+2*(109.1-108.9)).toBeCloseTo(4.8);
 });
 it('renders all synthetic scenarios with valid OHLC and finite chart geometry',()=>{
  for(const s of chartScenarioIds().filter(s=>s.startsWith('par14-'))){for(const x of bars(s)){expect(x.low).toBeLessThanOrEqual(Math.min(x.open,x.close));expect(x.high).toBeGreaterThanOrEqual(Math.max(x.open,x.close));}
   const svg=renderToStaticMarkup(<svg><AverageGapMarks scenario={s}/></svg>);expect(svg).not.toMatch(/NaN|Infinity/);expect(svg).toContain('Erfundene Daten');}
 });
});

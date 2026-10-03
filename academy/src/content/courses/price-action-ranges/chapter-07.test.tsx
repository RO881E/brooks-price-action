import {describe,it,expect} from 'vitest';
import {renderToStaticMarkup} from 'react-dom/server';
import {rangesChapterSevenLessons as lessons} from './chapter-07';
import {rangesDefinition} from './index';
import {legBars,deeperLegBars,failedLegBars,variantLegBars,nestedLegBars,symmetryLegBars,equalLegTarget,spikeTarget,legMirror,legScenarioBars,LegMarks} from '../../../components/RangesLegCharts';
import {chartScenarioIds,chartDescription} from '../../../components/LearningChart';
const answer=(title:string)=>{const q=lessons.find(l=>l.title===title)!.steps.find(s=>s.type==='question')!;return q.options.find(o=>o.id===q.correctOptionId)!.label;};
describe('Ranges chapter 7: anchors and measured first legs',()=>{
 it('loads the eighth unit and all described diagrams',async()=>{
  expect(await rangesDefinition.units[7].load()).toEqual(lessons);expect(lessons).toHaveLength(33);expect(rangesDefinition.units[7].estimatedLessonCount).toBe(lessons.length);
  for(const l of lessons){expect(l.id).toMatch(/^price-action-ranges.chapter-07\./);const d=l.steps.find(s=>s.type==='diagram')!;expect(chartScenarioIds()).toContain(d.scenario);expect(chartDescription(d.scenario).length).toBeGreaterThan(40);}
 });
 it('distinguishes equal legs from direct spike extensions and reconciles the midpoint identity',()=>{
  const a=legBars[0].open,b=legBars[2].high,c=legBars[4].low,close=legBars[2].close;
  expect(b-a).toBeCloseTo(6.4);expect(equalLegTarget(a,b,c)).toBeCloseTo(106.4);
  expect(2*((b+c)/2)-a).toBeCloseTo(equalLegTarget(a,b,c));
  expect(spikeTarget(a,close)).toBe(108);expect(spikeTarget(a,b)).toBeCloseTo(108.8);
  expect(equalLegTarget(a,b,deeperLegBars[4].low)).toBeCloseTo(106);
  expect(answer('Die gleiche Strecke ab dem Rücksetzertief abtragen')).toBe('106,4.');
 });
 it('preserves the early information and hides unknown future pullback anchors in the pause view',()=>{
  expect(legScenarioBars('par7-pause')).toHaveLength(4);expect(legScenarioBars('par7-leg')).toHaveLength(5);
  const pause=renderToStaticMarkup(<svg><LegMarks scenario="par7-pause"/></svg>);
  expect(pause).not.toContain('Rücklauf C=100');expect(pause).not.toContain('Gleiches Ziel 106,4');
  expect(failedLegBars.slice(0,5)).toEqual(legBars.slice(0,5));expect(failedLegBars[6].low).toBeLessThan(96);
  expect(legScenarioBars('par7-failure')).toHaveLength(7);expect(legScenarioBars('par7-opposite').at(-1)!.low).toBe(90);
 });
 it('separates misses, contact, alternative anchors and larger nested measurements',()=>{
  expect(106.4-legBars[6].high).toBeCloseTo(.2);expect(legBars[7].high).toBeGreaterThan(106.4);
  expect(equalLegTarget(variantLegBars[0].open,variantLegBars[1].low,variantLegBars[5].high)).toBe(101);
  expect(equalLegTarget(variantLegBars[0].open,variantLegBars[3].low,variantLegBars[5].high)).toBe(100);
  expect(variantLegBars.at(-1)!.low).toBe(101);
  expect(equalLegTarget(nestedLegBars[0].open,nestedLegBars[7].high,nestedLegBars[8].low)).toBeCloseTo(114.1);
  expect(nestedLegBars.at(-1)!.high).toBeCloseTo(114.1);
 });
 it('mirrors both measurement directions and selected extremes',()=>{
  const bars=legBars.map(legMirror);
  expect(bars[0].open).toBe(104);expect(bars[2].low).toBeCloseTo(97.6);expect(bars[2].close).toBe(98);expect(bars[4].high).toBe(100);
  expect(equalLegTarget(bars[0].open,bars[2].low,bars[4].high)).toBeCloseTo(93.6);expect(spikeTarget(bars[0].open,bars[2].close)).toBe(92);
 });
 it('reconciles budget, late entries, current giveback, additions and the cost-adjusted probability model',()=>{
  expect(Math.floor((30-2)/(102-95.9))).toBe(4);expect(4*(102-95.9)+2).toBeCloseTo(26.4);expect(5*(102-95.9)+2).toBeCloseTo(32.5);
  expect(106.4-105).toBeCloseTo(1.4);expect(105-102.8).toBeCloseTo(2.2);
  expect(102-98).toBe(4);expect(98-95.9).toBeCloseTo(2.1);expect(102-95.9).toBeCloseTo(6.1);
  expect((98-95.9)+(102-95.9)).toBeCloseTo(8.2);expect(((98+102)/2-95.9)*2).toBeCloseTo(8.2);
  expect(.6*3-.4*4-.3).toBeCloseTo(-.1);
  expect(answer('Erwartungswert mit frei gesetzten Modellannahmen prüfen')).toBe('Minus 0,1 Euro pro Trade.');
 });
 it('renders all own cases with valid ranges, finite SVG coordinates and selected-day context',()=>{
  expect(Math.max(...symmetryLegBars.map(b=>b.high))-Math.min(...symmetryLegBars.map(b=>b.low))).toBe(6);
  for(const scenario of chartScenarioIds().filter(s=>s.startsWith('par7-'))){for(const b of legScenarioBars(scenario)){expect(b.high).toBeGreaterThanOrEqual(Math.max(b.open,b.close));expect(b.low).toBeLessThanOrEqual(Math.min(b.open,b.close));}expect(renderToStaticMarkup(<svg><LegMarks scenario={scenario}/></svg>)).not.toMatch(/NaN|Infinity|undefined/);}
  expect(renderToStaticMarkup(<svg><LegMarks scenario="par7-symmetry"/></svg>)).toContain('Zwischenzeiten ausgelassen');
 });
});

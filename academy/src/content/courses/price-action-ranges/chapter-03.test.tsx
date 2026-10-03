import {describe,it,expect} from 'vitest';
import {renderToStaticMarkup} from 'react-dom/server';
import {rangesChapterThreeLessons as lessons} from './chapter-03';
import {rangesDefinition} from './index';
import {initialBars,initialPause,initialResume,initialFailure,initialTrap,initialMirror,initialScenarioBars,InitialMarks} from '../../../components/RangesInitialCharts';
import {chartScenarioIds,chartDescription} from '../../../components/LearningChart';
const answer=(title:string)=>{const q=lessons.find(l=>l.title===title)!.steps.find(s=>s.type==='question')!;return q.options.find(o=>o.id===q.correctOptionId)!.label;};
describe('Ranges chapter 3: initial breakout decisions',()=>{
 it('loads the fourth unit and connects every lesson to a described scenario',async()=>{
  expect(await rangesDefinition.units[3].load()).toEqual(lessons);expect(lessons).toHaveLength(24);
  for(const l of lessons){expect(l.id).toMatch(/^price-action-ranges.chapter-03\./);const d=l.steps.find(s=>s.type==='diagram')!;expect(chartScenarioIds()).toContain(d.scenario);expect(chartDescription(d.scenario).length).toBeGreaterThan(40);}
 });
 it('uses the same first six candles for incompatible later outcomes without exposing future bars',()=>{
  const resume=initialScenarioBars('par3-resume'),failure=initialScenarioBars('par3-failure');
  expect(resume.slice(0,6)).toEqual(failure.slice(0,6));
  expect(resume[6]).toEqual(initialResume);expect(failure[6]).toEqual(initialFailure);
  expect(resume[6].close).toBeGreaterThan(70);expect(failure[6].close).toBeLessThan(70);
  expect(initialScenarioBars('par3-first')).toHaveLength(5);expect(initialScenarioBars('par3-inside')).toHaveLength(6);
  expect(initialPause.high).toBeLessThan(initialBars[4].high);expect(initialPause.low).toBeGreaterThan(initialBars[4].low);
  expect(answer('Die gleiche Pause kann auch scheitern')).toBe('Die nach der gleichen Pause folgende siebte Kerze.');
 });
 it('derives distinct targets and position sizes from explicitly named reference prices',()=>{
  const b=initialBars[4];expect(b.close-70).toBeCloseTo(1.1);expect(b.close-b.open).toBeCloseTo(1.7);
  expect(b.close+(b.close-b.open)).toBeCloseTo(72.8);
  expect(b.high+(b.high-b.low)).toBeCloseTo(73.1);
  expect((b.close-69.2)*10).toBeCloseTo(19);
  expect(Math.floor(20/(72.5-69.2))).toBe(6);
  expect(72.55+.05).toBeCloseTo(72.6);
  expect(answer('Mehrere Messziele ausdrücklich benennen')).toBe('72,8 Punkte.');
  expect(answer('Ein größerer Preisabstand verlangt eine kleinere Menge')).toBe('Sechs Einheiten.');
 });
 it('distinguishes price conditions from executions and validates the later outside-bar',()=>{
  expect(initialBars[5].low).toBe(initialBars[4].close);
  expect(answer('Ein Limit am alten Schluss kann unerfüllt bleiben')).toBe('Nein, dafür braucht sie ihre eigene Ausführungsbestätigung.');
  expect(initialTrap[6].high).toBeLessThan(initialTrap[5].high);
  expect(initialTrap[8].high).toBeGreaterThan(initialTrap[7].high);expect(initialTrap[8].low).toBeLessThan(initialTrap[7].low);
  const mirror=initialMirror(initialBars[4]);expect(mirror.high).toBeCloseTo(70.7);expect(mirror.low).toBeCloseTo(68.8);expect(mirror.close).toBeCloseTo(68.9);
 });
 it('renders all own scenarios with valid ranges and finite SVG geometry',()=>{
  const ids=chartScenarioIds().filter(s=>s.startsWith('par3-'));expect(ids).toHaveLength(12);
  for(const scenario of ids){for(const b of initialScenarioBars(scenario)){expect(b.high).toBeGreaterThanOrEqual(Math.max(b.open,b.close));expect(b.low).toBeLessThanOrEqual(Math.min(b.open,b.close));}
   const markup=renderToStaticMarkup(<svg><InitialMarks scenario={scenario}/></svg>);expect(markup).not.toMatch(/NaN|Infinity|undefined/);
  }
 });
});

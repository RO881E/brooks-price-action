import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { chapterTwentySixLessons } from '../content/courses/price-action-trends/chapter-26';
import { CHAPTER_TWENTY_SIX_SCENARIOS } from '../content/types';
import { aggregateThree, chapterTwentySixCharts } from './ChapterTwentySixCharts';
import { LearningChart } from './LearningChart';
afterEach(cleanup);
const chart = (n: number) => chapterTwentySixCharts[`c26-${String(n).padStart(2, '0')}` as keyof typeof chapterTwentySixCharts];
const panels = (n: number) => chart(n).panels;
describe('chapter twenty-six stairs and broad channels', () => {
  it('publishes thirty complete lessons in six groups with connected accessible diagrams', () => {
    expect(chapterTwentySixLessons.map(l=>l.steps.find(s=>s.type==='diagram')?.scenario)).toEqual([...CHAPTER_TWENTY_SIX_SCENARIOS]);
    expect(new Set(chapterTwentySixLessons.map(l=>l.sourceUnit)).size).toBe(6);
    for(const [i,l] of chapterTwentySixLessons.entries()) {
      expect(l.id).toBe(`price-action-trends.chapter-26.lesson-${String(i+1).padStart(2,'0')}`);
      expect(l.steps.map(s=>s.type)).toEqual(['explanation','diagram','question','recap']);
      expect(l.steps.find(s=>s.type==='explanation')?.paragraphs).toHaveLength(3);
      const q=l.steps.find(s=>s.type==='question')!;expect(q.correctOptionId).toBe(`choice-${i%3}`);expect(new Set(q.options.map(o=>o.explanation)).size).toBe(3);
      const scenario=CHAPTER_TWENTY_SIX_SCENARIOS[i];const {container}=render(<LearningChart scenario={scenario} title={l.title}/>);
      expect(container.querySelector('g.chapter-twenty-six-chart')).not.toBeNull();expect(container.querySelector('svg[role="img"] desc')?.textContent).toBe(chapterTwentySixCharts[scenario].description);cleanup();
    }
  });
  it('uses valid OHLC and bounded reference geometry in every panel',()=>{
    for(const c of Object.values(chapterTwentySixCharts)) for(const p of [...c.panels,...(c.comparison?[c.comparison]:[])]) {
      for(const [o,h,l,close] of p.bars){expect(h).toBeGreaterThanOrEqual(Math.max(o,close));expect(l).toBeLessThanOrEqual(Math.min(o,close));expect(l).toBeGreaterThanOrEqual(0);expect(h).toBeLessThanOrEqual(100);}
      for(const line of p.lines) for(const [i,price] of [line.start,line.end]) {expect(i).toBeGreaterThanOrEqual(0);expect(i).toBeLessThan(p.bars.length);expect(price).toBeGreaterThanOrEqual(0);expect(price).toBeLessThanOrEqual(100);}
    }
  });
  it('preserves earlier information in progressive examples',()=>{
    for(const n of [1,2,3,5,6,10,11,12,16,17,20,21,22,23,25,26,27,28,29]){const[a,b]=panels(n);expect(b.bars.slice(0,a.bars.length),`case ${n}`).toEqual(a.bars);}
  });
  it('shows an overlapping pullback while retaining higher structural lows',()=>{
    const p=panels(2)[1];expect(p.bars[2][1]).toBe(52);expect(p.bars[3][2]).toBe(42);expect(p.bars[1][2]).toBe(34);expect(p.bars[3][2]).toBeGreaterThan(p.bars[1][2]);
  });
  it('shows a real prior-high violation followed by renewed selling',()=>{
    const[a,b]=panels(5);expect(a.lines[0].start[1]).toBe(57);expect(b.bars[a.bars.length][1]).toBe(60);expect(b.bars.at(-1)![3]).toBe(39);
  });
  it('extends the same parallel channel without retroactively moving its slope',()=>{
    const[a,b]=panels(6);for(let i=0;i<2;i++){const slope=(p:typeof a)=>{const l=p.lines[i];return(l.end[1]-l.start[1])/(l.end[0]-l.start[0]);};expect(slope(a)).toBe(3.5);expect(slope(b)).toBe(slope(a));expect(a.lines[i].start).toEqual(b.lines[i].start);}
    expect(b.lines[1].end[1]-b.lines[0].end[1]).toBe(18);
  });
  it('aggregates each three-bar block with exact open high low close and rejects incomplete blocks',()=>{
    const[a,b]=panels(9);expect(a.bars).toHaveLength(12);expect(b.bars).toHaveLength(4);expect(b.bars).toEqual(aggregateThree(a.bars));expect(b.bars[0]).toEqual([30,47,29,46]);expect(()=>aggregateThree(a.bars.slice(1))).toThrow('Incomplete three-bar block');
  });
  it('distinguishes unvisited references, unfilled-price plans and triggered plans',()=>{
    expect(Math.min(...panels(10)[0].bars.map(b=>b[2]))).toBe(42);
    const[a,b]=panels(12);expect(a.bars.every(x=>x[1]<55)).toBe(true);expect(b.bars[a.bars.length][1]).toBeGreaterThanOrEqual(55);
    expect(Math.min(...panels(13)[0].bars.map(b=>b[2]))).toBe(43);expect(panels(13)[1].bars.some(b=>b[2]<40)).toBe(true);
    for(const p of panels(17))expect(p.bars.every(b=>b[2]>77)).toBe(true);
  });
  it('keeps projected parallel distances equal at the same bar index',()=>{
    const p=panels(19)[1];expect(p.lines.map(l=>l.end[1])).toEqual([54,72,90]);expect(p.lines[1].start[1]-p.lines[0].start[1]).toBe(18);expect(p.lines[2].start[1]-p.lines[1].start[1]).toBe(18);
    for(const l of p.lines)expect((l.end[1]-l.start[1])/(l.end[0]-l.start[0])).toBe(3);
  });
  it('measures shrinking extensions from swing extremes in both directions',()=>{
    const bull=panels(21)[1].bars;const highs=[0,2,4,6].map(i=>bull[i][1]);expect(highs).toEqual([45,55,61,64]);expect(highs.slice(1).map((h,i)=>h-highs[i])).toEqual([10,6,3]);
    const bear=panels(22)[0].bars;expect([0,2,4,6].map(i=>bear[i][2])).toEqual([55,45,39,36]);
    const[a,b]=panels(24);expect([0,2,4,6].map(i=>a.bars[i][1])).toEqual([0,2,4,6].map(i=>b.bars[i][1]));expect(b.bars[1][2]).toBeLessThan(a.bars[1][2]);
  });
  it('preserves risk calculations and checks stops only after the hypothetical entry',()=>{
    const refs=panels(15)[0].lines.map(l=>l.start[1]);expect((refs[0]-refs[2])+(refs[1]-refs[2])).toBe(16);
    const bars=panels(26)[1].bars.slice(2);expect(bars.some(b=>b[2]<=55)).toBe(true);expect(bars.every(b=>b[2]>47)).toBe(true);
    const p=panels(27)[0];const risk=(p.lines[0].start[1]-p.lines[1].start[1])*2+4;expect(risk).toBe(30);expect(Math.floor(80/risk)).toBe(2);
    const refs28=panels(28)[0].lines.map(l=>l.start[1]);expect(refs28[1]-refs28[0]).toBe(8);expect(refs28[0]-refs28[2]).toBe(6);
  });
  it('renders all three possible outcomes from exactly the same four initial bars',()=>{
    const c=chart(30);expect(c.comparison).toBeDefined();const prefix=c.panels[0].bars.slice(0,4);expect(c.panels[1].bars.slice(0,4)).toEqual(prefix);expect(c.comparison!.bars.slice(0,4)).toEqual(prefix);
    const{container}=render(<LearningChart scenario="c26-30" title="Drei Folgen"/>);expect(container.querySelectorAll('g.chapter-twenty-six-chart rect.chart-panel')).toHaveLength(3);
  });
});

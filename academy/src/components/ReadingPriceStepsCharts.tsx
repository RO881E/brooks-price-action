import { useId } from 'react';
import type { ChartScenarioId } from '../content/types';
import { priceStepDescriptions } from './ReadingPriceStepsDescriptions';
import { priceStepTrades, rangeGroups, teachingRenko } from '../content/courses/reading-charts/chapter-04-model';
export const priceRangeBars=rangeGroups(priceStepTrades,30);
export const priceRenkoBricks=teachingRenko(priceStepTrades,10000,20);
export const priceStepsY=(cents:number)=>42+(10060-cents)*1.5;
const euro=(cents:number)=>(cents/100).toFixed(2).replace('.',',');
export function PriceStepMarks({scenario}:{scenario:ChartScenarioId}) {
  if(!(scenario in priceStepDescriptions)) return null;
  const range=scenario==='rc4-range', reversal=scenario==='rc4-reversal';
  return <g className="reading-price-steps">
    <text className="chart-small strong" x="390" y="24" textAnchor="middle">{range?'Range-Schwelle 0,30 · eigene Ganzgeschäftsregel':reversal?'Zwischenstand bis Geschäft 11 · Zwei-Stein-Umkehr':'Renko: Stein 0,20 · Anker 100,00 · eigene Regel'}</text>
    {[9960,10000,10040,10060].map(p=><g key={p}><line className="chart-grid" x1="75" x2="730" y1={priceStepsY(p)} y2={priceStepsY(p)}/><text className="chart-small" x="65" y={priceStepsY(p)+5} textAnchor="end">{euro(p)}</text></g>)}
    {reversal ? <>
      <rect x="190" y={priceStepsY(10040)} width="70" height="30" fill="none" stroke="currentColor" strokeWidth="3"/>
      <text className="chart-small" x="275" y={priceStepsY(10060)+5}>100,60: nächster Aufwärtsstein</text>
      <text className="chart-small" x="275" y={priceStepsY(10040)+5}>100,40: letzter Steinschluss</text>
      <circle cx="225" cy={priceStepsY(10030)} r="5" fill="currentColor"/>
      <text className="chart-small" x="275" y={priceStepsY(10030)+18}>100,30: beobachtet, keine Umkehr</text>
      <text className="chart-small strong" x="275" y={priceStepsY(10000)+5}>100,00: Umkehrschwelle</text>
      <text className="chart-small" x="390" y="257" textAnchor="middle">100,40 − 2 × 0,20 = 100,00</text>
    </> : range ? priceRangeBars.map((b,i)=>{
      const x=145+i*128;
      return <g key={i}>
        <line x1={x} x2={x} y1={priceStepsY(b.high)} y2={priceStepsY(b.low)} stroke="currentColor" strokeWidth="3"/>
        <line x1={x-17} x2={x} y1={priceStepsY(b.open)} y2={priceStepsY(b.open)} stroke="currentColor" strokeWidth="3"/>
        <line x1={x} x2={x+17} y1={priceStepsY(b.last)} y2={priceStepsY(b.last)} stroke="currentColor" strokeWidth="3"/>
        <text className="chart-small strong" x={x} y="218" textAnchor="middle">Bar {i+1}{b.complete?'':' · offen'}</text>
        <text className="chart-small" x={x} y="238" textAnchor="middle">G {b.ids[0]}–{b.ids.at(-1)} · {b.shares} Aktien</text>
        <text className="chart-small" x={x} y="258" textAnchor="middle">O {euro(b.open)}</text>
        <text className="chart-small" x={x} y="278" textAnchor="middle">{b.complete?'C':'Letzter'} {euro(b.last)}</text>
        <text className="chart-small" x={x} y="298" textAnchor="middle">Spanne {euro(b.high-b.low)}</text>
      </g>;
    }) : priceRenkoBricks.map((b,i)=>{
      const x=140+i*128;
      return <g key={i}>
        <rect x={x-64} y={priceStepsY(Math.max(b.open,b.close))} width="128" height="30" fill="none" stroke="currentColor" strokeWidth="3"/>
        <text className="chart-small strong" x={x} y="218" textAnchor="middle">Stein {i+1} · {b.direction===1?'↑':'↓'}</text>
        <text className="chart-small" x={x} y="241" textAnchor="middle">{euro(b.open)} → {euro(b.close)}</text>
        <text className="chart-small" x={x} y="264" textAnchor="middle">Auslöser G {b.triggerId}</text>
      </g>;
    })}
    <text className="chart-small" x="390" y="323" textAnchor="middle">Euro je Aktie · Reihenfolge ohne feste Zeitdauer · eigene Lernregeln</text>
  </g>;
}
export function PriceStepChart({scenario,title,viewBox}:{scenario:ChartScenarioId;title:string;viewBox?:string}) {
  const id=useId(), description=scenario in priceStepDescriptions?priceStepDescriptions[scenario as keyof typeof priceStepDescriptions]:'';
  return <div className="learning-chart"><svg viewBox={viewBox??'0 0 760 330'} role="img" aria-labelledby={`${id}-title ${id}-desc`}><title id={`${id}-title`}>{title}</title><desc id={`${id}-desc`}>{description}</desc><PriceStepMarks scenario={scenario}/></svg></div>;
}

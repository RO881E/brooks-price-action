import { useId } from 'react';
import type { ChartScenarioId } from '../content/types';
import { scalePosition, scaleCloses, additiveCloses, scaleCandles, type PriceScale } from '../content/courses/reading-charts/chapter-08-model';
import { scaleDescriptions } from './ReadingScalesDescriptions';
export const scaleY=(price:number,min:number,max:number,mode:PriceScale)=>205-scalePosition(price,min,max,mode)*157;
export function ScaleMarks({scenario}:{scenario:ChartScenarioId}){
 if(!(scenario in scaleDescriptions))return null;
 const candle=scenario==='rc8-candles',additive=scenario==='rc8-additive';
 const min=candle?12:15,max=additive?60:120,series=additive?additiveCloses:scaleCloses;
 const ticks=candle?[12,30,60,120]:additive?[15,30,45,60]:[15,30,60,120];
 return <g className="reading-scales">
   {(['linear','log'] as const).map((mode,panel)=>{
     const offset=panel*375,y=(price:number)=>scaleY(price,min,max,mode);
     return <g key={mode}>
       <text className="chart-small strong" x={220+offset} y="25" textAnchor="middle">{mode==='linear'?'Linear':'Logarithmisch'} · {min}–{max}</text>
       {ticks.map(price=><g key={price}><line className="chart-grid" x1={90+offset} x2={360+offset} y1={y(price)} y2={y(price)}/><text className="chart-small" x={75+offset} y={y(price)+4} textAnchor="end">{price}</text></g>)}
       {candle?scaleCandles.map((b,i)=>{
         const x=160+offset+i*125;return <g key={i}>
           <line x1={x} x2={x} y1={y(b.high)} y2={y(b.low)} stroke="currentColor" strokeWidth="2"/>
           <rect x={x-14} y={y(b.close)} width="28" height={y(b.open)-y(b.close)} fill="var(--surface,white)" stroke="currentColor" strokeWidth="2"/>
           <text className="chart-small strong" x={x} y="229" textAnchor="middle">Kerze {i===0?'A':'B'} ↑</text>
           <text className="chart-small" x={x} y="252" textAnchor="middle">Körper: {b.close-b.open} Euro</text>
           <text className="chart-small" x={x} y="276" textAnchor="middle">C/O = 1,6</text>
           <text className="chart-small" x={x} y="297" textAnchor="middle">O{b.open} → C{b.close}</text>
         </g>;
       }):<>
         <polyline points={series.map((price,i)=>`${110+offset+i*75},${y(price)}`).join(' ')} fill="none" stroke="currentColor" strokeWidth="2"/>
         {series.map((price,i)=>{const x=110+offset+i*75;return <g key={i}>
           <circle cx={x} cy={y(price)} r="4" fill="currentColor"/>
           <text className="chart-small" x={x} y="229" textAnchor="middle">T{i+1}</text>
           <text className="chart-small" x={x} y="252" textAnchor="middle">{price} Euro</text>
         </g>})}
         <text className="chart-small" x={220+offset} y="286" textAnchor="middle">{mode==='linear'?(additive?'Dreimal +15 Euro':'Schritte: +15 / +30 / +60 Euro'):(additive?'Faktoren: 2 · 1,5 · 4/3':'Schritte: jeweils Faktor 2')}</text>
       </>}
     </g>;
   })}
   <text className="chart-small" x="380" y="323" textAnchor="middle">{candle?'Euro je Aktie · gleiche OHLC-Werte und Grenzen · ↑ C höher als O':'Euro je Aktie · T1–T4: gleiche Zeitabstände · gleiche Daten und Preisgrenzen'}</text>
 </g>;
}
export function ScaleChart({scenario,title,viewBox}:{scenario:ChartScenarioId;title:string;viewBox?:string}){
 const id=useId();return <div className="learning-chart"><svg viewBox={viewBox??'0 0 760 330'} role="img" aria-labelledby={`${id}-title ${id}-desc`}><title id={`${id}-title`}>{title}</title><desc id={`${id}-desc`}>{scaleDescriptions[scenario as keyof typeof scaleDescriptions]}</desc><ScaleMarks scenario={scenario}/></svg></div>;
}

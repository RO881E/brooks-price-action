import { useId } from 'react';
import type { ChartScenarioId } from '../content/types';
import { splitExample,dividendStages,dividendValue,rawContinuous,adjustedContinuous } from '../content/courses/reading-charts/chapter-09-model';
import { dataDescriptions } from './ReadingDataDescriptions';
export function DataMarks({scenario}:{scenario:ChartScenarioId}){
 if(!(scenario in dataDescriptions))return null;
 if(scenario==='rc9-dividend')return <g>
  <text className="chart-small strong" x="380" y="28" textAnchor="middle">Acht Aktien · eigener vereinfachter Dividendenfall</text>
  {dividendStages.map((d,i)=>{const x=140+i*240;return <g key={d.label}>
   <rect className="chart-grid" x={x-100} y="55" width="200" height="214" rx="8" fill="none"/>
   <text className="chart-small strong" x={x} y="85" textAnchor="middle">{i===0?'Vor Ex-Tag':d.label}</text>
   <text className="chart-small" x={x} y="123" textAnchor="middle">Aktien: 8 × {d.price} = {8*d.price} Euro</text>
   <text className="chart-small" x={x} y="158" textAnchor="middle">Anspruch: {d.claim} Euro</text>
   <text className="chart-small" x={x} y="193" textAnchor="middle">Bargeld: {d.cash} Euro</text>
   <text className="chart-small strong" x={x} y="241" textAnchor="middle">Summe: {dividendValue(d.price,8,d.claim,d.cash)} Euro</text>
  </g>})}
  <text className="chart-small" x="380" y="303" textAnchor="middle">Zahlung ersetzt den Anspruch · keine doppelte Zählung</text>
  <text className="chart-small" x="380" y="325" textAnchor="middle">Ohne weitere Markteinflüsse, Steuern und Gebühren</text>
 </g>;
 const split=scenario==='rc9-split';
 const series=split?[[splitExample.before,splitExample.after,splitExample.later],[splitExample.after,splitExample.after,splitExample.later]]:[rawContinuous,adjustedContinuous];
 const min=split?35:70,max=split?85:86,ticks=split?[40,60,80]:[72,76,80,84];
 return <g>{series.map((values,panel)=>{const offset=375*panel,y=(price:number)=>205-(price-min)/(max-min)*155;return <g key={panel}>
  <text className="chart-small strong" x={215+offset} y="25" textAnchor="middle">{panel===0?'Unbereinigt':split?'Auf neue Stückbasis':'Alte Werte +7 Punkte'}</text>
  {ticks.map(v=><g key={v}><line className="chart-grid" x1={65+offset} x2={350+offset} y1={y(v)} y2={y(v)}/><text className="chart-small" x={55+offset} y={y(v)+4} textAnchor="end">{v}</text></g>)}
  <polyline points={values.map((v,i)=>`${95+offset+i*(240/(values.length-1))},${y(v)}`).join(' ')} fill="none" stroke="currentColor" strokeWidth="2"/>
  {values.map((v,i)=>{const x=95+offset+i*(240/(values.length-1));return <g key={i}><circle cx={x} cy={y(v)} r="4" fill="currentColor"/><text className="chart-small" x={x} y="230" textAnchor="middle">{split?['Vorher','Split','Später'][i]:`T${i+1}`}</text><text className="chart-small" x={x} y="254" textAnchor="middle">{v}{split?' €':' P.'}</text></g>})}
  <text className="chart-small" x={215+offset} y="287" textAnchor="middle">{split?(panel===0?'Stückbasis wechselt':'Gleiche Stückbasis: +2,5%'):(panel===0?'Letzter Schritt: +8 Punkte':'Letzter Schritt: +1 Punkt')}</text>
 </g>})}<text className="chart-small" x="380" y="323" textAnchor="middle">{split?'Euro je Aktie · Split allein: 4 × 80 = 8 × 40 = 320 Euro':'Preispunkte · Wechsel nach T3 · F-A 76 und F-B 83 gleichzeitig an T3'}</text></g>;
}
export function DataChart({scenario,title,viewBox}:{scenario:ChartScenarioId;title:string;viewBox?:string}){
 const id=useId();return <div className="learning-chart"><svg viewBox={viewBox??'0 0 760 330'} role="img" aria-labelledby={`${id}-title ${id}-desc`}><title id={`${id}-title`}>{title}</title><desc id={`${id}-desc`}>{dataDescriptions[scenario as keyof typeof dataDescriptions]}</desc><DataMarks scenario={scenario}/></svg></div>;
}

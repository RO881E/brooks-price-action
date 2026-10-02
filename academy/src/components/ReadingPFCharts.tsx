import { useId } from 'react';
import type { ChartScenarioId } from '../content/types';
import { calculatePF, pfInputs, pfPathA, pfPathB, pfVariantInputs } from '../content/courses/reading-charts/chapter-06-model';
import { pfDescriptions } from './ReadingPFDescriptions';
export const pfColumns=calculatePF(pfInputs);
export const pfY=(cents:number)=>50+(5300-cents)*.4;
const euro=(c:number)=>(c/100).toFixed(2).replace('.',',');
export function PFMarks({scenario}:{scenario:ChartScenarioId}){
 if(!(scenario in pfDescriptions))return null;
 if(scenario==='rc6-methods'){
   const a=calculatePF(pfVariantInputs(pfPathA)),b=calculatePF(pfVariantInputs(pfPathB));
   const variants=[
     {label:'Schlussmethode',input:['Nur C52,00'],edge:5200,newColumns:0},
     {label:'Hoch-Tief-Regel',input:['H53,00 zuerst','Tief dann ignoriert'],edge:5300,newColumns:0},
     {label:'Einzelpreise A',input:['52 →53 →50 →52'],edge:a.at(-1)!.marks.at(-1)!.level,newColumns:a.length-1},
     {label:'Einzelpreise B',input:['52 →50 →53 →52'],edge:b.at(-1)!.marks.at(-1)!.level,newColumns:b.length-1},
   ];
   return <g className="reading-pf">
     <text className="chart-small strong" x="380" y="25" textAnchor="middle">Getrennte Varianten · zuvor X-Spalte bis52,00</text>
     <text className="chart-small" x="380" y="49" textAnchor="middle">Original-O/H/L/C:52/53/50/52 · Kästchen0,50 · Umkehr3</text>
     {variants.map((v,i)=>{const x=35+i*180;return <g key={v.label}>
       <rect x={x} y="65" width="165" height="226" rx="10" fill="none" stroke="currentColor"/>
       <text className="chart-small strong" x={x+82.5} y="91" textAnchor="middle">{v.label}</text>
       {v.input.map((text,j)=><text className="chart-small" key={text} x={x+82.5} y={124+j*20} textAnchor="middle">{text}</text>)}
       <text className="chart-small" x={x+82.5} y="187" textAnchor="middle">Letzte Spalte: X</text>
       <text className="chart-small strong" x={x+82.5} y="216" textAnchor="middle">Extrem:{euro(v.edge)}</text>
       <text className="chart-small" x={x+82.5} y="261" textAnchor="middle">Neue Spalten:{v.newColumns}</text>
     </g>})}
     <text className="chart-small" x="380" y="317" textAnchor="middle">Euro je Aktie · gleiche Kennwerte bestimmen keine eindeutige Zwischenfolge</text>
   </g>;
 }
 const threshold=scenario==='rc6-threshold';
 return <g className="reading-pf">
   <text className="chart-small strong" x="380" y="25" textAnchor="middle">{threshold?'Nach G12: Fortsetzung und Umkehr vom O-Tief rechnen':'Nivo nach G12 · Kästchen0,50 · inklusive Umkehr3'}</text>
   {[4950,5000,5050,5100,5150,5200,5250,5300].map(p=><g key={p}>
     <line className="chart-grid" x1="70" x2="730" y1={pfY(p)} y2={pfY(p)}/>
     <text className="chart-small" x="60" y={pfY(p)+4} textAnchor="end">{euro(p)}</text>
   </g>)}
   {threshold?<>
     {pfColumns[3].marks.map(m=><circle key={m.level} cx="165" cy={pfY(m.level)} r="7" fill="none" stroke="currentColor" strokeWidth="2"/>)}
     <text className="chart-small strong" x="285" y={pfY(5200)+4}>52,00: neue X-Spalte ab dieser Grenze</text>
     <circle cx="225" cy={pfY(5150)} r="4" fill="currentColor"/>
     <text className="chart-small" x="285" y={pfY(5150)+4}>51,50: G12, noch keine Umkehr</text>
     <text className="chart-small strong" x="285" y={pfY(5050)+4}>50,50: tiefstes gezeichnetes O</text>
     <text className="chart-small" x="285" y={pfY(5000)+4}>50,00: nächstes O ab dieser Grenze</text>
     <text className="chart-small" x="380" y="245" textAnchor="middle">Umkehr:50,50 +3 ×0,50 =52,00</text>
     <text className="chart-small" x="380" y="273" textAnchor="middle">Fortsetzung:50,50 −0,50 =50,00</text>
   </>:pfColumns.map((c,i)=>{const x=185+i*145,ids=[...new Set(c.marks.map(m=>m.triggerId))];return <g key={i}>
     {c.marks.map(m=>c.symbol==='O'?<circle key={m.level} cx={x} cy={pfY(m.level)} r="7" fill="none" stroke="currentColor" strokeWidth="2"/>:<g key={m.level}><line x1={x-7} x2={x+7} y1={pfY(m.level)-7} y2={pfY(m.level)+7} stroke="currentColor" strokeWidth="2"/><line x1={x-7} x2={x+7} y1={pfY(m.level)+7} y2={pfY(m.level)-7} stroke="currentColor" strokeWidth="2"/></g>)}
     <text className="chart-small strong" x={x} y="229" textAnchor="middle">Spalte {i+1} · {c.symbol}</text>
     <text className="chart-small" x={x} y="251" textAnchor="middle">{c.marks.length} Zeichen · {i===3?'aktuell':'vorherig'}</text>
     <text className="chart-small" x={x} y="273" textAnchor="middle">Auslöser {ids.map(id=>`G${id}`).join('/')}</text>
     <text className="chart-small" x={x} y="295" textAnchor="middle">Letztes:{euro(c.marks.at(-1)!.level)}</text>
   </g>})}
   <text className="chart-small" x="380" y="322" textAnchor="middle">Euro je Aktie · Rasteranker50,00 ohne Zeichen · keine feste Spaltendauer</text>
 </g>;
}
export function PFChart({scenario,title,viewBox}:{scenario:ChartScenarioId;title:string;viewBox?:string}){
 const id=useId();return <div className="learning-chart"><svg viewBox={viewBox??'0 0 760 330'} role="img" aria-labelledby={`${id}-title ${id}-desc`}><title id={`${id}-title`}>{title}</title><desc id={`${id}-desc`}>{pfDescriptions[scenario as keyof typeof pfDescriptions]}</desc><PFMarks scenario={scenario}/></svg></div>;
}

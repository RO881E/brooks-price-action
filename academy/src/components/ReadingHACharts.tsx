import { useId } from 'react';
import type { ChartScenarioId } from '../content/types';
import { haDescriptions } from './ReadingHADescriptions';
import { calculateHA, haOriginalBars, type PriceBar } from '../content/courses/reading-charts/chapter-05-model';
export const haBars=calculateHA(haOriginalBars);
export const haY=(price:number)=>48+(116-price)*9;
const num=(n:number)=>n.toFixed(2).replace('.',',');
function Candle({bar,x,label}:{bar:PriceBar;x:number;label:string}){
 const top=Math.max(bar.open,bar.close),bottom=Math.min(bar.open,bar.close),flat=top===bottom;
 return <g>
   <line x1={x} x2={x} y1={haY(bar.high)} y2={haY(bar.low)} stroke="currentColor" strokeWidth="2"/>
   {flat?<line x1={x-12} x2={x+12} y1={haY(top)} y2={haY(top)} stroke="currentColor" strokeWidth="3"/>:<rect x={x-12} y={haY(top)} width="24" height={haY(bottom)-haY(top)} fill="var(--surface,white)" stroke="currentColor" strokeWidth="2"/>}
   <text className="chart-small strong" x={x} y="243" textAnchor="middle">{label} {flat?'=':bar.close>bar.open?'↑':'↓'}</text>
   <text className="chart-small" x={x} y="265" textAnchor="middle">O {num(bar.open)}</text>
   <text className="chart-small" x={x} y="284" textAnchor="middle">C {num(bar.close)}</text>
 </g>;
}
export function HAMarks({scenario}:{scenario:ChartScenarioId}){
 if(!(scenario in haDescriptions))return null;
 if(scenario==='rc5-formula')return <g className="reading-ha">
   <text className="chart-small strong" x="380" y="30" textAnchor="middle">Minute 2 · Vorgänger und aktuelle Originalwerte trennen</text>
   <rect x="35" y="55" width="315" height="220" rx="12" fill="none" stroke="currentColor"/>
   <rect x="390" y="55" width="335" height="220" rx="12" fill="none" stroke="currentColor"/>
   <text className="chart-small strong" x="55" y="87">HA-Vorgänger: Minute 1</text>
   <text className="chart-small" x="55" y="118">HA-O1 = 101 · HA-C1 = 101</text>
   <text className="chart-small" x="55" y="152">HA-O2 = (101 + 101) / 2 = 101</text>
   <text className="chart-small" x="55" y="204">Eröffnung aus berechnetem Vorgänger</text>
   <text className="chart-small" x="55" y="240">Start HA-O1 = (100 + 102) / 2</text>
   <text className="chart-small strong" x="410" y="87">Original: Minute 2</text>
   <text className="chart-small" x="410" y="118">O102 · H108 · L100 · C104</text>
   <text className="chart-small" x="410" y="152">HA-C2 = 414 / 4 = 103,50</text>
   <text className="chart-small" x="410" y="204">HA-H2 = max(108; 101; 103,50) = 108</text>
   <text className="chart-small" x="410" y="240">HA-L2 = min(100; 101; 103,50) = 100</text>
   <text className="chart-small" x="380" y="311" textAnchor="middle">Euro je Aktie · erklärte Initialisierung · keine Zwischenrundung</text>
 </g>;
 const gap=scenario==='rc5-gap';
 return <g className="reading-ha">
   <text className="chart-small strong" x="380" y="25" textAnchor="middle">{gap?'Preissprung: Originalspanne und berechnete HA-Spanne':'Vier abgeschlossene Minuten · Original und HA nebeneinander'}</text>
   {[98,102,106,110,114].map(p=><g key={p}><line className="chart-grid" x1="62" x2="735" y1={haY(p)} y2={haY(p)}/><text className="chart-small" x="52" y={haY(p)+4} textAnchor="end">{p}</text></g>)}
   {gap?<>
     <text className="chart-small strong" x="237" y="45" textAnchor="middle">Original</text>
     <text className="chart-small strong" x="560" y="45" textAnchor="middle">Heikin-Ashi</text>
     <Candle bar={haOriginalBars[2]} x={155} label="Min. 3"/><Candle bar={haOriginalBars[3]} x={305} label="Min. 4"/>
     <Candle bar={haBars[2]} x={485} label="Min. 3"/><Candle bar={haBars[3]} x={635} label="Min. 4"/>
     <text className="chart-small" x="80" y="95">H3:106 · L4:110</text>
     <text className="chart-small" x="510" y="204">HA-L4 =102,50</text>
     <text className="chart-small" x="237" y="307" textAnchor="middle">Originalspannen getrennt</text>
     <text className="chart-small" x="560" y="307" textAnchor="middle">HA-Spannen überlappen</text>
   </>:<>
     {haOriginalBars.map((b,i)=><g key={i}>
       <text className="chart-small strong" x={147+i*166} y="45" textAnchor="middle">Minute {i+1}</text>
       <Candle bar={b} x={110+i*166} label="Original"/><Candle bar={haBars[i]} x={186+i*166} label="HA"/>
     </g>)}
     <text className="chart-small" x="380" y="311" textAnchor="middle">Euro je Aktie · ↑ C höher als eigenes O · ↓ C niedriger · = gleich</text>
   </>}
 </g>;
}
export function HAChart({scenario,title,viewBox}:{scenario:ChartScenarioId;title:string;viewBox?:string}){
 const id=useId(),description=haDescriptions[scenario as keyof typeof haDescriptions];
 return <div className="learning-chart"><svg viewBox={viewBox??'0 0 760 330'} role="img" aria-labelledby={`${id}-title ${id}-desc`}><title id={`${id}-title`}>{title}</title><desc id={`${id}-desc`}>{description}</desc><HAMarks scenario={scenario}/></svg></div>;
}

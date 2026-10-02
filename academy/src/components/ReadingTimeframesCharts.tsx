import { useId } from 'react';
import type { ChartScenarioId } from '../content/types';
import { timeBars, timeTrades } from '../content/courses/reading-charts/chapter-07-model';
import { timeframeDescriptions } from './ReadingTimeframesDescriptions';
export const timeframeY=(cents:number)=>48+(3080-cents)*1.4;
export const timeframeX=(second:number)=>90+second*600/360;
const euro=(cents:number)=>(cents/100).toFixed(2).replace('.',',');
const clock=(second:number)=>`09:${String(Math.floor(second/60)).padStart(2,'0')}`;
export function TimeframeMarks({scenario}:{scenario:ChartScenarioId}){
 if(!(scenario in timeframeDescriptions))return null;
 const minute=scenario==='rc7-minute',live=scenario==='rc7-live';
 const snapshot=live?275:360,width=minute?60:180,bars=timeBars(timeTrades,width,snapshot);
 return <g className="reading-timeframes">
   <text className="chart-small strong" x="380" y="25" textAnchor="middle">{minute?'Ein-Minuten-Fenster · Aufnahme09:06':live?'Drei-Minuten-Fenster · nur bekannt bis09:04:35':'Drei-Minuten-Fenster · Aufnahme09:06'}</text>
   {[2980,3000,3020,3040,3060,3080].map(p=><g key={p}>
     <line className="chart-grid" x1="80" x2="730" y1={timeframeY(p)} y2={timeframeY(p)}/>
     <text className="chart-small" x="70" y={timeframeY(p)+4} textAnchor="end">{euro(p)}</text>
   </g>)}
   {bars.map((b,i)=>{
     const x=timeframeX((b.start+b.end)/2),top=Math.max(b.open,b.close),bottom=Math.min(b.open,b.close),half=minute?10:20;
     return <g key={b.start}>
       <line x1={x} x2={x} y1={timeframeY(b.high)} y2={timeframeY(b.low)} stroke="currentColor" strokeWidth="2"/>
       {top===bottom?<line x1={x-half} x2={x+half} y1={timeframeY(top)} y2={timeframeY(top)} stroke="currentColor" strokeWidth="3"/>:<rect x={x-half} y={timeframeY(top)} width={half*2} height={timeframeY(bottom)-timeframeY(top)} fill="var(--surface,white)" stroke="currentColor" strokeWidth="2" strokeDasharray={b.complete?undefined:'4 2'}/>}
       <text className="chart-small strong" x={x} y="246" textAnchor="middle">{minute?`Min. ${i+1}`:`${clock(b.start)}–${clock(b.end)}`}{b.close>b.open?' ↑':b.close<b.open?' ↓':' ='}</text>
       <text className="chart-small" x={x} y="267" textAnchor="middle">{b.shares} Aktien{b.complete?'':' · bisher'}</text>
       <text className="chart-small" x={x} y="287" textAnchor="middle">O {euro(b.open)}{!minute?(b.complete?' · fertig':' · offen'):''}</text>
       <text className="chart-small" x={x} y="307" textAnchor="middle">{b.complete?'C':'Letzter'} {euro(b.close)}</text>
     </g>;
   })}
   <line x1="90" x2="690" y1="202" y2="202" stroke="currentColor"/>
   {[0,60,120,180,240,300,360].map(t=><g key={t}><line x1={timeframeX(t)} x2={timeframeX(t)} y1="202" y2="207" stroke="currentColor"/><text className="chart-small" x={timeframeX(t)} y="222" textAnchor="middle">{clock(t)}</text></g>)}
   {live?<><line x1={timeframeX(275)} x2={timeframeX(275)} y1="40" y2="202" stroke="currentColor" strokeDasharray="4 4"/><text className="chart-small" x={timeframeX(275)+10} y="43">Aufnahme</text></>:null}
   <text className="chart-small" x="380" y="327" textAnchor="middle">Euro je Aktie · gleiche Zeitabbildung · ↑ C/Letzter höher als O · ↓ niedriger</text>
 </g>;
}
export function TimeframeChart({scenario,title,viewBox}:{scenario:ChartScenarioId;title:string;viewBox?:string}){
 const id=useId();return <div className="learning-chart"><svg viewBox={viewBox??'0 0 760 330'} role="img" aria-labelledby={`${id}-title ${id}-desc`}><title id={`${id}-title`}>{title}</title><desc id={`${id}-desc`}>{timeframeDescriptions[scenario as keyof typeof timeframeDescriptions]}</desc><TimeframeMarks scenario={scenario}/></svg></div>;
}

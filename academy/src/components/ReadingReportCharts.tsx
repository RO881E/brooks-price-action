import { useId } from 'react';
import type { ChartScenarioId } from '../content/types';
import { reportMinutes,reportAggregate,reportPaths,reportOriginal,reportCalculated } from '../content/courses/reading-charts/chapter-10-model';
import { reportDescriptions } from './ReadingReportDescriptions';
export function ReportMarks({scenario}:{scenario:ChartScenarioId}){
 if(!(scenario in reportDescriptions))return null;
 const summary=scenario==='rc10-summary',paths=scenario==='rc10-paths';
 const min=summary?28:paths?28:27,max=summary?34:paths?33:36;
 const y=(v:number)=>205-(v-min)/(max-min)*155;
 const bars=summary?[...reportMinutes,reportAggregate]:[reportOriginal,reportCalculated];
 const count=summary?3:2,width=summary?250:375;
 return <g>{Array.from({length:count},(_,i)=>{const offset=i*width,center=summary?135+offset:215+offset;
  const title=summary?['Minute 1','Minute 2','Beide Minuten'][i]:paths?`Weg ${i===0?'A':'B'}`:i===0?'Original ↓':'Heikin-Ashi ↑';
  const ticks=summary?[29,30,31,32,33]:paths?[29,30,31,32]:[28,30,32,34,35];
  return <g key={i}>
   <text className="chart-small strong" x={center} y="25" textAnchor="middle">{title}</text>
   {ticks.map(v=><g key={v}><line className="chart-grid" x1={summary?60+offset:65+offset} x2={summary?220+offset:350+offset} y1={y(v)} y2={y(v)}/><text className="chart-small" x={summary?50+offset:55+offset} y={y(v)+4} textAnchor="end">{v}</text></g>)}
   {paths?<>
    <polyline points={reportPaths[i].map((v,j)=>`${95+offset+j*80},${y(v)}`).join(' ')} fill="none" stroke="currentColor" strokeWidth="2"/>
    {reportPaths[i].map((v,j)=><g key={j}><circle cx={95+offset+j*80} cy={y(v)} r="4" fill="currentColor"/><text className="chart-small" x={95+offset+j*80} y="234" textAnchor="middle">{['O',i===0?'H':'L',i===0?'L':'H','C'][j]}: {v}</text></g>)}
    <text className="chart-small" x={center} y="277" textAnchor="middle">{i===0?'Hoch vor Tief':'Tief vor Hoch'}</text>
   </>:<>
    <line x1={center} x2={center} y1={y(bars[i].high)} y2={y(bars[i].low)} stroke="currentColor" strokeWidth="2"/>
    <rect x={center-14} y={y(Math.max(bars[i].open,bars[i].close))} width="28" height={Math.abs(y(bars[i].open)-y(bars[i].close))} fill="var(--surface,white)" stroke="currentColor" strokeWidth="2"/>
    <text className="chart-small" x={center} y="231" textAnchor="middle">O {bars[i].open} · C {String(bars[i].close).replace('.',',')}</text>
    <text className="chart-small" x={center} y="254" textAnchor="middle">H {bars[i].high} · L {bars[i].low}</text>
    <text className="chart-small" x={center} y="279" textAnchor="middle">{summary?`Volumen: ${[10,6,16][i]} Aktien`:i===0?'Originalspanne: 30–35':'Berechnete Spanne: 29–35'}</text>
   </>}
  </g>;
 })}<text className="chart-small" x="380" y="322" textAnchor="middle">{summary?'Euro je Aktie · D1 · UTC · gemeinsame lineare Grenzen 28–34':paths?'Euro je Aktie · gleiche OHLC · Verbindungen zeigen keine Zwischen-Geschäfte':'Euro je Aktie · eigener Zusatzfall · HA-Startwerte: O 28, C 30 · Mengen unbekannt'}</text></g>;
}
export function ReportChart({scenario,title,viewBox}:{scenario:ChartScenarioId;title:string;viewBox?:string}){
 const id=useId();return <div className="learning-chart"><svg viewBox={viewBox??'0 0 760 330'} role="img" aria-labelledby={`${id}-title ${id}-desc`}><title id={`${id}-title`}>{title}</title><desc id={`${id}-desc`}>{reportDescriptions[scenario as keyof typeof reportDescriptions]}</desc><ReportMarks scenario={scenario}/></svg></div>;
}

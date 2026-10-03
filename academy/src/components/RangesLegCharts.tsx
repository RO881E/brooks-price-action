import type {ChartScenarioId} from '../content/types';
type Bar={open:number;high:number;low:number;close:number};
export const legBars:Bar[]=[
 {open:96,high:98.2,low:96,close:98},
 {open:98,high:100.2,low:97.9,close:100},
 {open:100,high:102.4,low:99.9,close:102},
 {open:102,high:102.3,low:101.6,close:102.1},
 {open:102.1,high:102.2,low:100,close:100.5},
 {open:100.5,high:104.2,low:100.4,close:104},
 {open:104,high:106.2,low:103.8,close:105.9},
 {open:105.9,high:106.6,low:105.4,close:106.3},
 {open:106.3,high:108.8,low:106.1,close:108.4},
];
export const deeperLegBars:Bar[]=[...legBars.slice(0,4),{open:102.1,high:102.2,low:99.6,close:100.2}];
export const failedLegBars:Bar[]=[...legBars.slice(0,5),
 {open:100.5,high:100.6,low:98,close:98.3},
 {open:98.3,high:98.4,low:95.4,close:95.6},
 {open:95.6,high:95.7,low:93,close:93.5},
 {open:93.5,high:93.6,low:90,close:90.5},
];
export const variantLegBars:Bar[]=[
 {open:110,high:110.2,low:107,close:107.2},
 {open:107.2,high:107.3,low:104,close:104.3},
 {open:104.3,high:106,low:104.2,close:105.8},
 {open:105.8,high:105.9,low:103,close:103.4},
 {open:103.4,high:106,low:103.3,close:105.7},
 {open:105.7,high:107,low:105.6,close:106.8},
 {open:106.8,high:106.9,low:105.5,close:105.7},
 {open:105.7,high:105.8,low:102,close:102.3},
 {open:102.3,high:102.4,low:101,close:101.4},
];
export const nestedLegBars:Bar[]=[...legBars.slice(0,8),
 {open:106.3,high:106.4,low:103.5,close:104},
 {open:104,high:108,low:103.9,close:107.8},
 {open:107.8,high:111,low:107.7,close:110.8},
 {open:110.8,high:114.1,low:110.7,close:113.8},
];
export const symmetryLegBars:Bar[]=[
 {open:100,high:103,low:99.9,close:102.8},
 {open:102.8,high:102.9,low:100.5,close:100.7},
 {open:100.7,high:100.8,low:97,close:97.5},
 {open:97.5,high:100.4,low:97.2,close:100.1},
];
export const equalLegTarget=(start:number,end:number,pullback:number)=>pullback+(end-start);
export const spikeTarget=(start:number,end:number)=>end+(end-start);
export const legMirror=(b:Bar):Bar=>({open:200-b.open,high:200-b.low,low:200-b.high,close:200-b.close});
export function legScenarioBars(s:ChartScenarioId):Bar[]{
 switch(s){
 case 'par7-pause':case 'par7-spike':return legBars.slice(0,4);
 case 'par7-stop':return legBars.slice(0,5);
 case 'par7-deeper':return deeperLegBars;
 case 'par7-near':return legBars.slice(0,7);
 case 'par7-contact':return legBars.slice(0,8);
 case 'par7-channel':return legBars;
 case 'par7-failure':return failedLegBars.slice(0,7);
 case 'par7-opposite':return failedLegBars;
 case 'par7-bear-spike':return legBars.slice(0,4).map(legMirror);
 case 'par7-bear-leg':return legBars.slice(0,5).map(legMirror);
 case 'par7-variant':return variantLegBars;
 case 'par7-nested':return nestedLegBars;
 case 'par7-symmetry':return symmetryLegBars;
 default:return legBars.slice(0,5);
 }
}
const fmt=(v:number)=>Number(v.toFixed(2)).toString().replace('.',',');
export function LegMarks({scenario}:{scenario:ChartScenarioId}){
 const bars=legScenarioBars(scenario),bear=scenario==='par7-bear-spike'||scenario==='par7-bear-leg',spike=scenario==='par7-spike'||scenario==='par7-bear-spike',variant=scenario==='par7-variant',nested=scenario==='par7-nested',symmetry=scenario==='par7-symmetry',stop=scenario==='par7-stop',opposite=scenario==='par7-opposite',deeper=scenario==='par7-deeper';
 const target=bear?spike?92:93.6:deeper?106:106.4;
 const levels:{price:number;label:string}[]=symmetry?[{price:100,label:'Eröffnung 100'},{price:103,label:'Hoch 103'},{price:97,label:'Tief 97'}]:variant?[{price:104,label:'Erstes Ende 104'},{price:103,label:'Tieferes Tief 103'},{price:107,label:'Korrekturhoch 107'},{price:101,label:'Nahes Ziel 101'},{price:100,label:'Alternative 100'}]:nested?[{price:106.6,label:'Größeres Ende 106,6'},{price:103.5,label:'Neuer Rücklauf 103,5'},{price:114.1,label:'Neues Ziel 114,1'}]:spike?[{price:bear?104:96,label:bear?'Eröffnung 104':'Eröffnung 96'},{price:bear?98:102,label:bear?'Schluss 98':'Schluss 102'},{price:target===106.4?108:target,label:bear?'OC-Ziel 92':'OC-Ziel 108'},...(!bear?[{price:108.8,label:'Hoch-Variante 108,8'}]:[])]:[{price:bear?104:96,label:bear?'Start A=104':'Start A=96'},{price:bear?97.6:102.4,label:bear?'Ende B=97,6':'Ende B=102,4'},...(!stop&&scenario!=='par7-pause'?[{price:bear?100:deeper?99.6:100,label:bear?'Rücklauf C=100':deeper?'Rücklauf C=99,6':'Rücklauf C=100'},{price:target,label:`Gleiches Ziel ${fmt(target)}`}]:[])];
 if(scenario==='par7-midpoint')levels.push({price:101.2,label:'Mitte M=101,2'});
 if(stop)levels.push({price:95.9,label:'Breiter Stop 95,9'},{price:99.9,label:'Enger Stop 99,9'});
 if(opposite)levels.push({price:90,label:'Gegenziel 90'});
 if(scenario==='par7-risk')levels.push({price:102.8,label:'Modellstop 102,8'});
 if(scenario==='par7-channel')levels.push({price:108,label:'OC-Projektion 108'});
 const min=Math.floor(Math.min(...bars.map(b=>b.low),...levels.map(l=>l.price))-.5),max=Math.ceil(Math.max(...bars.map(b=>b.high),...levels.map(l=>l.price))+.5);
 const y=(v:number)=>250-(v-min)/(max-min)*207,x=(i:number)=>95+i*(bars.length>9?450/(bars.length-1):48);
 const labelPositions=new Map<string,number>();let previous=25;
 for(const l of [...levels].sort((a,b)=>b.price-a.price)){const pos=Math.max(y(l.price)+4,previous+18);labelPositions.set(l.label,pos);previous=pos;}
 return <g>
  <text x="80" y="24" className="chart-small strong">{symmetry?'Eigener Tagesfall · vier ausgewählte Minutenabschnitte':'Eigener Messfall · abgeschlossene Minuten · Preise in Punkten'}</text>
  {[min,(min+max)/2,max].map(v=><g key={v}><line x1="80" x2="610" y1={y(v)} y2={y(v)} stroke="currentColor" opacity="0.12"/><text x="65" y={y(v)+4} textAnchor="end" className="chart-small">{fmt(v)}</text></g>)}
  {scenario==='par7-midpoint'?<rect x="80" y={y(102.4)} width="530" height={y(100)-y(102.4)} fill="currentColor" opacity="0.08"/>:null}
  {levels.map(l=><g key={l.label}><line x1="80" x2="610" y1={y(l.price)} y2={y(l.price)} stroke="currentColor" strokeDasharray="5 4"/><line x1="610" x2="616" y1={y(l.price)} y2={labelPositions.get(l.label)!-4} stroke="currentColor" opacity="0.5"/><text x="620" y={labelPositions.get(l.label)} className="chart-small">{l.label}</text></g>)}
  {bars.map((b,i)=>{const tone=b.close>=b.open?'bull':'bear';return <g key={i}><line x1={x(i)} x2={x(i)} y1={y(b.high)} y2={y(b.low)} className={`candle-wick ${tone}`}/><rect x={x(i)-9} y={y(Math.max(b.open,b.close))} width="18" height={Math.max(2,Math.abs(y(b.open)-y(b.close)))} className={`candle-body ${tone}`}/><text x={x(i)} y="278" textAnchor="middle" className="chart-small">{symmetry?['Start','Anstieg','Tief','Ende'][i]:i+1}</text></g>})}
  <text x="80" y="302" className="chart-small">{scenario==='par7-pause'?'Pause nach Minute 3 · spätere Rücklaufgrenze noch unbekannt':symmetry?'Zwischenzeiten ausgelassen · Beginn 100 / Ende 100,1':variant?'6 Punkte ab 107 → 101 · alternative 7 Punkte → 100':nested?'Neue größere Messung: 106,6−96=10,6 · ab 103,5 → 114,1':spike?'OC-Strecke 6 Punkte · direkte Verlängerung ab Schubschluss':stop?'Stops sind Modellregeln · Ausführung und Menge separat prüfen':opposite?'Neue Gegenprojektion: 96−6=90 · erst nach eigener Bestätigung':scenario==='par7-risk'?'Preisszenarien: Einstieg 103,8 / 105 · Stop 102,8 · Ziel 106,4':bear?'Gleiche Abwärtsstrecke: 104−97,6=6,4 · ab 100 → 93,6':`Erste Strecke 6,4 · ab ${deeper?'99,6':'100'} → ${fmt(target)} · Ziel zunächst geplant`}</text>
  <text x="80" y="324" className="chart-small">Erfundene Kurse · keine gemessene Trefferquote oder Bestätigung eigener Orders</text>
 </g>;
}

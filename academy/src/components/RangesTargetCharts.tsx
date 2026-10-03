import type {ChartScenarioId} from '../content/types';
type Bar={open:number;high:number;low:number;close:number};
export const targetBars:Bar[]=[
 {open:100,high:102,low:98,close:101},
 {open:101,high:101.8,low:98.5,close:99},
 {open:99,high:102,low:98.7,close:101.5},
 {open:101.5,high:101.8,low:99.2,close:101.8},
 {open:101.8,high:105,low:101.6,close:104.6},
 {open:104.6,high:106.2,low:104.4,close:106},
 {open:106,high:106.1,low:103,close:105.9},
 {open:105.9,high:106.8,low:105.1,close:106.4},
 {open:106.4,high:107.2,low:106.1,close:107},
 {open:107,high:109,low:106.9,close:108.7},
];
export const negativeTargetBars:Bar[]=[...targetBars.slice(0,5),
 {open:104.6,high:104.9,low:101.5,close:102.2},
 {open:102.2,high:105.6,low:102.1,close:105.2},
];
export const failedTargetBars:Bar[]=[...targetBars.slice(0,7),
 {open:105.9,high:106,low:100,close:100.5},
 {open:100.5,high:100.6,low:97.7,close:98},
];
export const reversalTargetBars:Bar[]=[...targetBars.slice(0,9),
 {open:107,high:107.1,low:104.9,close:105.2},
 {open:105.2,high:106.6,low:105.1,close:106.2},
 {open:106.2,high:106.3,low:102.8,close:103.2},
];
export const lateSpikeBars:Bar[]=[
 {open:110,high:110.1,low:107.9,close:108},
 {open:108,high:108.1,low:105.9,close:106},
 {open:106,high:106.1,low:103.9,close:104},
 {open:104,high:104.1,low:101.9,close:102},
 {open:102,high:102.1,low:99.9,close:100},
 {open:100,high:100.4,low:99.8,close:100.1},
 {open:100.1,high:100.2,low:90.1,close:90.5},
];
export const profileVisits=[{price:98,visits:8},{price:99,visits:12},{price:100,visits:10},{price:101,visits:4},{price:102,visits:2},{price:103,visits:3},{price:104,visits:9},{price:105,visits:11},{price:106,visits:8}];
export const rangeTarget=(low:number,high:number,direction:'up'|'down')=>direction==='up'?high+(high-low):low-(high-low);
export const midpointTarget=(start:number,edge:number,test:number)=>edge+test-start;
export const targetMirror=(b:Bar):Bar=>({open:200-b.open,high:200-b.low,low:200-b.high,close:200-b.close});
export const chosenTrendLine=(minute:number)=>101.6+(minute-5)*.7;
export function targetScenarioBars(s:ChartScenarioId):Bar[]{
 switch(s){
 case 'par8-range':case 'par8-up':return targetBars.slice(0,4);
 case 'par8-down':return targetBars.slice(0,4).map(targetMirror);
 case 'par8-breakout':case 'par8-bar-mid':return targetBars.slice(0,5);
 case 'par8-negative':return negativeTargetBars.slice(0,6);
 case 'par8-negative-follow':return negativeTargetBars;
 case 'par8-follow':return targetBars.slice(0,9);
 case 'par8-near':return targetBars.slice(0,8);
 case 'par8-overshoot':return targetBars;
 case 'par8-reversal':return reversalTargetBars;
 case 'par8-failure':return failedTargetBars;
 case 'par8-bear':case 'par8-late':return targetBars.slice(0,7).map(targetMirror);
 case 'par8-spike':return lateSpikeBars;
 default:return targetBars.slice(0,7);
 }
}
const fmt=(v:number)=>Number(v.toFixed(2)).toString().replace('.',',');
export function ProfileMarks(){
 return <g>
  <text x="80" y="24" className="chart-small strong">Eigene erfundene Zeitprofil-Zählung · Besuche gleicher Zeitabschnitte</text>
  <rect x="80" y="112" width="435" height="72" fill="currentColor" opacity="0.06"/>
  {[...profileVisits].reverse().map((b,i)=><g key={b.price}><text x="68" y={53+i*24} textAnchor="end" className="chart-small">{b.price}</text><rect x="80" y={40+i*24} width={b.visits*28} height="16" fill="currentColor" opacity={b.price>=101&&b.price<=103?.35:.6}/><text x={88+b.visits*28} y={53+i*24} className="chart-small">{b.visits}</text></g>)}
  <text x="540" y="80" className="chart-small">Häufigster Preis: 99</text><text x="540" y="100" className="chart-small">12 Besuche</text>
  <text x="540" y="140" className="chart-small">Dünn: 101 bis 103</text><text x="540" y="160" className="chart-small">Geometrische Mitte: 102</text>
  <text x="80" y="284" className="chart-small">Balken = gezählte Zeitabschnittsbesuche · keine gehandelte Menge</text>
  <text x="80" y="304" className="chart-small">Getrennte Beispieldaten · nicht aus den anderen Kerzen berechnet</text>
  <text x="80" y="324" className="chart-small">Projektion aus Start 98 und Mitte 102: 106 · keine Richtungs- oder Erfolgsquote</text>
 </g>;
}
export function TargetMarks({scenario}:{scenario:ChartScenarioId}){
 if(scenario==='par8-profile')return <ProfileMarks/>;
 const bars=targetScenarioBars(scenario),bear=scenario==='par8-bear'||scenario==='par8-late',negative=scenario==='par8-negative'||scenario==='par8-negative-follow',spike=scenario==='par8-spike',barMid=scenario==='par8-bar-mid',risk=scenario==='par8-risk',old=scenario==='par8-older',reversal=scenario==='par8-reversal';
 const rangeOnly=scenario==='par8-range'||scenario==='par8-up'||scenario==='par8-down'||scenario==='par8-breakout';
 const levels:{price:number;label:string}[]=spike?[{price:110,label:'Erster Start 110'},{price:100,label:'Schubschluss 100'},{price:90,label:'Schubziel 90'}]:[{price:98,label:bear?'Ausbruchsbezug 98':'Rangeunterkante 98'},{price:102,label:bear?'Start 102':'Rangeoberkante 102'}];
 if(scenario==='par8-up'||scenario==='par8-breakout')levels.push({price:106,label:'Rangeziel 106'});
 if(scenario==='par8-down')levels.push({price:94,label:'Rangeziel 94'});
 if(!rangeOnly&&!spike){
  if(barMid)levels.push({price:103.3,label:'Spannenmitte 103,3'},{price:108.6,label:'Spannenziel 108,6'},{price:108.4,label:'Körperziel 108,4'});
  else if(negative)levels.push({price:101.5,label:'Test 101,5'},{price:105.5,label:'Negativziel 105,5'},{price:106,label:'Rangeziel 106'});
  else if(bear)levels.push({price:97,label:'Rücklaufhoch 97'},{price:93,label:'Lückenziel 93'},{price:94,label:'Rangeziel 94'});
  else levels.push({price:103,label:'Pause 103'},{price:106,label:'Rangeziel 106'},{price:107,label:'Lückenziel 107'});
 }
 if(old)levels.push({price:96,label:'Älterer Start 96'},{price:109,label:'Älteres Ziel 109'});
 if(risk)levels.push({price:97.9,label:'Modellstop 97,9'});
 const min=Math.floor(Math.min(...bars.map(b=>b.low),...levels.map(l=>l.price))-.5),max=Math.ceil(Math.max(...bars.map(b=>b.high),...levels.map(l=>l.price))+.5);
 const y=(v:number)=>250-(v-min)/(max-min)*207,x=(i:number)=>95+i*(bars.length>9?450/(bars.length-1):48);
 const positions=new Map<string,number>();let previous=25;for(const l of [...levels].sort((a,b)=>b.price-a.price)){const pos=Math.max(y(l.price)+4,previous+18);positions.set(l.label,pos);previous=pos;}
 return <g>
  <text x="80" y="24" className="chart-small strong">Eigener Zielfall · abgeschlossene Minuten · Preise in Punkten</text>
  {[min,(min+max)/2,max].map(v=><g key={v}><line x1="80" x2="610" y1={y(v)} y2={y(v)} stroke="currentColor" opacity="0.12"/><text x="65" y={y(v)+4} textAnchor="end" className="chart-small">{fmt(v)}</text></g>)}
  {!spike?<rect x="80" y={y(102)} width="530" height={y(98)-y(102)} fill="currentColor" opacity="0.035"/>:null}
  {!rangeOnly&&!spike&&!barMid?<rect x="80" y={y(bear?98:negative?102:103)} width="530" height={y(bear?97:negative?101.5:102)-y(bear?98:negative?102:103)} fill="currentColor" opacity="0.09"/>:null}
  {levels.map(l=><g key={l.label}><line x1="80" x2="610" y1={y(l.price)} y2={y(l.price)} stroke="currentColor" strokeDasharray="5 4"/><line x1="610" x2="616" y1={y(l.price)} y2={positions.get(l.label)!-4} stroke="currentColor" opacity="0.5"/><text x="620" y={positions.get(l.label)} className="chart-small">{l.label}</text></g>)}
  {bars.map((b,i)=>{const tone=b.close>=b.open?'bull':'bear';return <g key={i}><line x1={x(i)} x2={x(i)} y1={y(b.high)} y2={y(b.low)} className={`candle-wick ${tone}`}/><rect x={x(i)-9} y={y(Math.max(b.open,b.close))} width="18" height={Math.max(2,Math.abs(y(b.open)-y(b.close)))} className={`candle-body ${tone}`}/><text x={x(i)} y="278" textAnchor="middle" className="chart-small">{i+1}</text></g>})}
  {reversal?<line x1={x(4)} y1={y(chosenTrendLine(5))} x2={x(11)} y2={y(chosenTrendLine(12))} stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 4"/>:null}
  <text x="80" y="302" className="chart-small">{scenario==='par8-late'?'Gesonderter Zeitfall: noch 2 Minuten · aktueller Preis 94,1 / Ziel 93':spike?'OC-Strecke 10 Punkte · Tief 90,1 verfehlt Projektion 90 um 0,1':old?'Start 96 aus bekanntem früherem Ausschnitt · nicht aus späteren Kerzen':barMid?'Spannenmitte 103,3 / Körpermitte 103,2 · eigene Mittendefinitionen':rangeOnly?'Nur bekannter Rangeausschnitt · Ausbruch und Kontakt gesondert prüfen':negative?'Mitte 101,75 · Start 98 · Projektion 105,5':bear?'Mitte 97,5 · Start 102 · Projektion 93':risk?'Modell: Einstieg 102,1 / Stop 97,9 / Ziel 106 · 1 Euro/Punkt/Einheit':reversal?'Linie durch L5 und L7 · Bruch in Minute 10 · niedrigeres Hoch in 11':'Rangehöhe → 106 · Lückenmitte → 107 · verschiedene Messregeln'}</text>
  <text x="80" y="324" className="chart-small">Erfundene Daten · Projektionen sind keine Garantie oder bestätigte eigene Ausführung</text>
 </g>;
}

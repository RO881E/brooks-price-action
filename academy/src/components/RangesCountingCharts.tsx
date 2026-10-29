import type {ChartScenarioId} from '../content/types';
export type CountingBar={open:number;high:number;low:number;close:number};
export const countingMain:CountingBar[]=[
 {open:128,high:129,low:123.5,close:123.8},{open:123.8,high:123.9,low:120,close:120.5},{open:120.5,high:124,low:120.2,close:123.6},{open:123.6,high:123.8,low:116,close:116.5},
 {open:116.5,high:120,low:116.2,close:119.8},{open:119.8,high:124.5,low:119.6,close:124.2},{open:124.2,high:128,low:124,close:127.6},
 {open:127.6,high:127.8,low:122,close:122.5},{open:122.5,high:123,low:120,close:120.4},{open:120.4,high:123.2,low:120.2,close:123},
 {open:123,high:127.6,low:122.8,close:127.4},{open:127.4,high:128.8,low:127.2,close:128.5},{open:128.5,high:132,low:128.3,close:131.8},
 {open:131.8,high:131.9,low:126,close:126.5},{open:126.5,high:129,low:126.3,close:128.6},{open:128.6,high:128.8,low:124,close:124.5},
];
export const countingNewLow:CountingBar[]=[...countingMain.slice(0,7),{open:127.6,high:127.8,low:115,close:115.5},{open:115.5,high:116,low:112,close:112.5}];
export const countingUntriggered:CountingBar[]=[...countingMain.slice(0,10),{open:123,high:123.2,low:118,close:118.5}];
export const countingFailure:CountingBar[]=[...countingMain.slice(0,11),{open:127.4,high:127.5,low:119,close:119.5},{open:119.5,high:120,low:115,close:115.5}];
export const countingTest:CountingBar[]=[
 {open:100,high:103,low:99,close:102.5},{open:102.5,high:104,low:101,close:103.5},{open:103.5,high:108,low:103.4,close:107.8},{open:107.8,high:110,low:107.5,close:109.8},
 {open:109.8,high:109.8,low:106,close:106.5},{open:106.5,high:107,low:104,close:104.5},{open:104.5,high:107.5,low:104.2,close:107.2},
 {open:107.2,high:110.2,low:107,close:110},{open:110,high:113.5,low:109.8,close:113.2},
];
export const countingNear=countingTest.slice(0,6).map((b,i)=>i===5?{...b,low:104.3}:b);
export const countingThrough=countingTest.slice(0,6).map((b,i)=>i===5?{...b,low:103.8}:b);
export const countingFlag:CountingBar[]=[
 {open:110,high:110.2,low:106,close:106.2},{open:106.2,high:106.4,low:102,close:102.2},{open:102.2,high:106,low:102.1,close:105.8},
 {open:105.8,high:105.9,low:103.5,close:103.8},{open:103.8,high:105.9,low:103.6,close:105.6},
 {open:105.6,high:105.7,low:101,close:101.2},{open:101.2,high:103.8,low:101.1,close:103.5},{open:103.5,high:103.6,low:99.5,close:100},
];
export const countingFlagFailure:CountingBar[]=[...countingFlag.slice(0,5),{open:105.6,high:107,low:105.4,close:106.8}];
const wedgeCloses=[100,101,103,105,107,109,111,110,108,106,108,110,112,114,116,117,118,117,115,113,114,115,116,117,118,119,119.5,120,120.2,120.5];
const wedgeStart:CountingBar[]=wedgeCloses.map((close,i)=>{const open=i===0?99:wedgeCloses[i-1];return{open,high:Math.max(open,close)+.4,low:Math.min(open,close)-.4,close};});
export const countingWedge:CountingBar[]=[...wedgeStart,
 {open:120.5,high:120.6,low:117,close:117.2},{open:117.2,high:117.3,low:114.6,close:114.8},{open:114.8,high:114.9,low:112.2,close:112.4},
 {open:112.4,high:113.1,low:112.3,close:112.9},{open:112.9,high:113,low:111.5,close:111.8},{open:111.8,high:111.9,low:111.3,close:111.5},{open:111.5,high:111.7,low:110.8,close:111},{open:111,high:111.2,low:110.4,close:110.6},
 {open:110.6,high:114.2,low:110.5,close:113.8},{open:113.8,high:114,low:112.2,close:112.7},{open:112.7,high:113,low:110.7,close:111},
 {open:111,high:114.5,low:110.9,close:114.2},{open:114.2,high:118,low:114,close:117.8},{open:117.8,high:121.5,low:117.6,close:121.3},
];
export function countingEma(bars:CountingBar[],seed=126):number[]{let previous=seed;return bars.map(b=>{previous+=2/21*(b.close-previous);return previous;});}
export function countingSwingConfirmed(bars:CountingBar[],index:number,side:'high'|'low'):number|undefined{
 if(index<1||index+1>=bars.length)return undefined;
 const values=[bars[index-1][side],bars[index][side],bars[index+1][side]];
 const confirmed=side==='low'?values[1]<values[0]&&values[1]<values[2]:values[1]>values[0]&&values[1]>values[2];
 return confirmed?index+2:undefined;
}
export const countingEqualProjection=(start:number,end:number,newStart:number)=>newStart+(end-start);
export const countingRangeProjection=(top:number,bottom:number)=>bottom-(top-bottom);
export function countingAggregate(bars:CountingBar[],size:number):CountingBar[]{
 if(!Number.isInteger(size)||size<1)throw new Error('Invalid group size');const out:CountingBar[]=[];
 for(let i=0;i+size<=bars.length;i+=size){const g=bars.slice(i,i+size);out.push({open:g[0].open,high:Math.max(...g.map(b=>b.high)),low:Math.min(...g.map(b=>b.low)),close:g.at(-1)!.close});}return out;
}
export const countingUnits=(budget:number,cost:number,entry:number,stop:number)=>{const cents=Math.round(Math.abs(entry-stop)*100);return cents>0&&budget>=cost?Math.floor(Math.round((budget-cost)*100)/cents):0;};
export function countingScenarioBars(s:ChartScenarioId):CountingBar[]{
 switch(s){
 case 'par16-context':return countingMain.slice(0,4);
 case 'par16-first-up':return countingMain.slice(0,7);
 case 'par16-pause':return countingMain.slice(0,9);
 case 'par16-signal':case 'par16-projection':case 'par16-risk':return countingMain.slice(0,10);
 case 'par16-stall':return countingMain.slice(0,11);
 case 'par16-resume':return countingMain.slice(0,13);
 case 'par16-post':return countingMain;
 case 'par16-new-low':return countingNewLow;
 case 'par16-untriggered':return countingUntriggered;
 case 'par16-failure':return countingFailure;
 case 'par16-test-start':return countingTest.slice(0,2);
 case 'par16-test':return countingTest.slice(0,6);
 case 'par16-test-near':return countingNear;
 case 'par16-test-through':return countingThrough;
 case 'par16-test-projection':return countingTest.slice(0,7);
 case 'par16-test-follow':return countingTest;
 case 'par16-bear-flag':return countingFlag.slice(0,5);
 case 'par16-bear-breakdown':return countingFlag.slice(0,6);
 case 'par16-bear-retest':return countingFlag;
 case 'par16-bear-fail':return countingFlagFailure;
 case 'par16-wedge':return countingWedge.slice(0,30);
 case 'par16-small-correction':return countingWedge.slice(0,38);
 case 'par16-higher':return countingAggregate(countingWedge.slice(0,38),2);
 case 'par16-sideways':return countingWedge.slice(0,41);
 case 'par16-wedge-resume':return countingWedge;
 default:throw new Error(`Unknown counting scenario ${s}`);
 }
}
const fmt=(p:number)=>Number(p.toFixed(3)).toString().replace('.',',');
export function CountingMarks({scenario}:{scenario:ChartScenarioId}){
 const source=countingScenarioBars(scenario),test=scenario.startsWith('par16-test'),flag=scenario.startsWith('par16-bear-'),wedge=['par16-wedge','par16-small-correction','par16-higher','par16-sideways','par16-wedge-resume'].includes(scenario),higher=scenario==='par16-higher',zoom=scenario==='par16-small-correction';
 const bars=zoom?source.slice(30):source,ema=countingEma(source,flag?106:126),levels:{price:number;label:string}[]=[];
 if(test){levels.push({price:104,label:'Alter Signalrand 104'},{price:104.1,label:'Modellkauf / Einstand 104,1'});if(['par16-test-projection','par16-test-follow'].includes(scenario))levels.push({price:113,label:'Andere Projektion 113'});}
 else if(flag){levels.push({price:106,label:'Erster Hochtest 106'},{price:103.5,label:'Gewählter unterer Rand 103,5'});if(scenario!=='par16-bear-fail')levels.push({price:101,label:'Geplantes Bereichsziel 101'});}
 else if(wedge){levels.push({price:120.9,label:'Großer Hochbezug 120,9'});if(scenario!=='par16-wedge')levels.push({price:110.4,label:'Erster großer Tiefbezug 110,4'});if(scenario==='par16-sideways'||scenario==='par16-wedge-resume')levels.push({price:110.7,label:'Zweiter höherer Test 110,7'});}
 else{levels.push({price:124,label:'Früherer Hochbezug 124'},{price:116,label:'Altes Tief 116'});if(source.length>=7)levels.push({price:128,label:'Erster Aufwärtsweg bis 128'});if(source.length>=9&&scenario!=='par16-new-low')levels.push({price:120,label:'Neuer Tiefanker 120'});if(['par16-signal','par16-projection','par16-risk','par16-untriggered'].includes(scenario))levels.push({price:123.3,label:'Kaufplan 123,3'});if(scenario==='par16-projection'||scenario==='par16-risk')levels.push({price:132,label:'Projektion 132'});}
 const average=!test&&!wedge;
 const min=Math.floor(Math.min(...bars.map(b=>b.low),...levels.map(l=>l.price),...(average?ema:[]))-.5),max=Math.ceil(Math.max(...bars.map(b=>b.high),...levels.map(l=>l.price),...(average?ema:[]))+.5);
 const y=(p:number)=>245-(p-min)/(max-min)*196,x=(i:number)=>94+i*Math.min(48,476/Math.max(1,bars.length-1)),width=bars.length>28?6:bars.length>16?10:14,stride=Math.max(1,Math.ceil(bars.length/12));
 let previous=76;const labelY=new Map<string,number>();for(const l of [...levels].sort((a,b)=>b.price-a.price)){previous=Math.max(previous+19,y(l.price)+4);labelY.set(l.label,previous);}
 const notes:Partial<Record<ChartScenarioId,string>>={
 'par16-context':'FallA · Stand4 · alter Rückgang mit Zwischenerholung · Tief116 vorläufig',
 'par16-first-up':'FallA · Stand7 · kräftiger erster Gegenweg bis128 · Fortsetzung offen',
 'par16-pause':'FallA · Stand9 · Testtief120 über altem116 · nächste Reaktion unbekannt',
 'par16-signal':'FallA · Stand10 · Tief120 jetzt bestätigt · eigener Kaufplan123,3 offen',
 'par16-projection':'FallA · Stand10 · 128−116=12 · ab neuem Tief120 ergibt das132',
 'par16-risk':'Eigenständiges Modell · Budget40 · Kosten2 · Preisrisiko3,4 · Menge11',
 'par16-stall':'FallA · Stand11 · zweiter Hochtest127,6 liegt0,4 unter128',
 'par16-resume':'FallA · Stand13 · nach nahem Test neues Hoch und Ziel132 erreicht',
 'par16-post':'Späterer Vergleich · neue Abwärtsstrecken14 und16 mit Erholung15',
 'par16-new-low':'Gleiche Minuten1–7 · Gegenfall fällt unter116 bis115 und112',
 'par16-untriggered':'Gleiche Minuten1–10 · Hoch11 123,2 erreicht Kaufplan123,3 nicht',
 'par16-failure':'Gleiche Minuten1–11 · danach Gegenfortschritt unter120 und116',
 'par16-test-start':'FallB · alter Signalrand104 · Modellkauf eine Preisstufe höher104,1',
 'par16-test':'FallB · Stand6 · Testtief104 genau am Signalrand, unter Modellkauf104,1',
 'par16-test-near':'FallB-Variante · gleiche1–5 · Tief6 104,3 vor Rand104 und Einstand104,1',
 'par16-test-through':'FallB-Variante · gleiche1–5 · Tief6 103,8 unter beiden Bezügen',
 'par16-test-projection':'FallB · Stand7 · bestätigtes Tief104 · Strecke110−101=9 · Ziel113',
 'par16-test-follow':'FallB · Stand9 · späteres Hoch113,5 überschreitet Projektion113',
 'par16-bear-flag':'FallC · Stand5 · zwei Erholungen bis106 /105,9 · EMA-Start106',
 'par16-bear-breakdown':'FallC · Stand6 · Höhe2,5 · 103,5−2,5 =106−2×2,5 =101',
 'par16-bear-retest':'FallC · späterer Rücklauf bis103,8 · dann erneutes tieferes Tief99,5',
 'par16-bear-fail':'Gleiche FallC-Minuten1–5 · danach Hoch107 über den beiden Tests',
 'par16-wedge':'FallD · drei größere Stöße · 30 Fünf-Minuten-Kerzen sind150 Minuten',
 'par16-small-correction':'FallD-Zoom31–38 · schnell31–33 · Pause34 · kleiner Kanal35–38',
 'par16-higher':'FallD · dieselben Daten bis38 · letzte vier Zehn-Minuten-Kerzen fallen',
 'par16-sideways':'FallD · Stand41 · zweiter größerer Korrekturteil bleibt bei110,7 höher',
 'par16-wedge-resume':'FallD · Stand44 · nach größerer Korrektur neuer Schub bis121,5',
 };
 return <g>
  <text x="80" y="22" className="chart-small strong">Eigene Bewegungszählung · benannte Anker und Ebenen · Preise in Punkten</text>
  <text x="620" y="44" className="chart-small">{higher?'10-Minuten-Gruppen':wedge?'5-Minuten-Kerzen':'Minutenkerzen'}</text><text x="620" y="66" className="chart-small">{zoom?'Zoom bis Grundkerze 38':higher?'Daten bis Grundkerze 38':`Stand nach Kerze ${source.length}`}</text>
  {[min,(min+max)/2,max].map(p=><g key={p}><line x1="80" x2="610" y1={y(p)} y2={y(p)} stroke="currentColor" opacity="0.1"/><text x="67" y={y(p)+4} textAnchor="end" className="chart-small">{fmt(p)}</text></g>)}
  {levels.map(l=><g key={l.label}><line x1="80" x2="610" y1={y(l.price)} y2={y(l.price)} stroke="currentColor" opacity="0.55" strokeDasharray="5 4"/><line x1="610" x2="616" y1={y(l.price)} y2={labelY.get(l.label)!-4} stroke="currentColor" opacity="0.4"/><text x="620" y={labelY.get(l.label)} className="chart-small">{l.label}</text></g>)}
  {average?<polyline points={ema.map((v,i)=>`${x(i)},${y(v)}`).join(' ')} fill="none" stroke="currentColor" strokeWidth="2"/>:null}
  {bars.map((b,i)=>{const tone=b.close>=b.open?'bull':'bear';return <g key={i}><line x1={x(i)} x2={x(i)} y1={y(b.high)} y2={y(b.low)} className={`candle-wick ${tone}`}/><rect x={x(i)-width/2} y={y(Math.max(b.open,b.close))} width={width} height={Math.max(2,Math.abs(y(b.open)-y(b.close)))} className={`candle-body ${tone}`}/>{i===bars.length-1||(i%stride===0&&i<=bars.length-1-stride)?<text x={x(i)} y="273" textAnchor="middle" className="chart-small">{higher?`${i*2+1}–${i*2+2}`:zoom?i+31:i+1}</text>:null}</g>})}
  <text x="80" y="301" className="chart-small">{notes[scenario]}</text>
  <text x="80" y="325" className="chart-small">Erfundene Daten · Zählung, Signal und Ausführung getrennt · keine historische Trefferquote</text>
 </g>;
}

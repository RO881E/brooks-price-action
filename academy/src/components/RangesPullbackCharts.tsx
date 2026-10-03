import type { ChartScenarioId } from '../content/types';
export type PullbackBar = { open: number; high: number; low: number; close: number };
export const pullbackBars: PullbackBar[] = [
 {open:100,high:104,low:99.8,close:103.8},
 {open:103.8,high:108,low:103.8,close:107.8},
 {open:107.8,high:112,low:107.6,close:111.8},
 {open:111.8,high:112,low:109.5,close:110.2},
 {open:110.2,high:114.2,low:110,close:114},
 {open:114,high:114,low:110.5,close:111},
 {open:111,high:113.4,low:110.8,close:113},
 {open:113,high:113.2,low:108.5,close:109},
 {open:109,high:115.2,low:108.8,close:115},
 {open:115,high:115,low:103,close:106},
 {open:106,high:112.4,low:105.6,close:112},
 {open:112,high:112,low:100,close:101},
 {open:101,high:102.8,low:99.5,close:100},
 {open:100,high:101,low:98.5,close:99},
 {open:99,high:100,low:97.5,close:98},
 {open:98,high:100.5,low:97.8,close:100},
];
export const pullbackH2Bars = pullbackBars.slice(0,9).map((b,i)=>i===6?{...b,high:114.1}:b);
export const pullbackUntriggered: PullbackBar[] = [...pullbackBars.slice(0,4),{open:110.2,high:111.5,low:105.5,close:106}];
export const pullbackFailure: PullbackBar[] = [...pullbackBars.slice(0,4),{open:110.2,high:112.4,low:107.5,close:108}];
export const pullbackMajor: PullbackBar[] = [
 {open:121,high:122,low:118,close:119},
 {open:119,high:120,low:114,close:115},
 {open:115,high:118,low:109,close:110},
 {open:110,high:113,low:109.5,close:112},
 {open:112,high:115,low:111,close:114},
 {open:114,high:114,low:110,close:111},
 {open:111,high:114.8,low:110.5,close:114},
 {open:114,high:114,low:109.7,close:110.5},
 {open:110.5,high:118,low:110.2,close:117},
 {open:117,high:123,low:116.8,close:122.5},
];
export const pullbackBearResume: PullbackBar[] = [...pullbackMajor.slice(0,5),{open:114,high:114.2,low:108,close:108.2}];
export const pullbackWedge: PullbackBar[] = [pullbackBars[4],
 {open:114,high:114,low:110,close:110.5},{open:110.5,high:112,low:110.4,close:111.8},
 {open:111.8,high:112,low:109,close:109.5},{open:109.5,high:111.2,low:109.3,close:111},
 {open:111,high:111.1,low:108.7,close:109.2}];
export const pullbackRange: PullbackBar[] = [
 {open:101,high:106,low:100,close:105},{open:105,high:105.5,low:99,close:100},
 {open:100,high:105,low:99.5,close:104},{open:104,high:106,low:100,close:101},
 {open:101,high:105,low:99,close:104},{open:104,high:105,low:99.8,close:100.5}];
export function pullbackEma(closes: number[], period: number): number[] {
 if(!Number.isInteger(period)||period<1) throw new Error('EMA period must be a positive integer');
 let previous=closes[0]; return closes.map((close,i)=>{previous=i===0?close:previous+(2/(period+1))*(close-previous);return previous;});
}
// Explicit initialization: thirty completed warm-up closes at 100, not future data.
export function pullbackEma20(bars: PullbackBar[]): number[] {
 return pullbackEma([...Array<number>(30).fill(100),...bars.map(b=>b.close)],20).slice(30);
}
export function pullbackAggregate(bars: PullbackBar[], size: number): PullbackBar[] {
 if(!Number.isInteger(size)||size<1) throw new Error('Group size must be a positive integer');
 const groups: PullbackBar[]=[];
 for(let i=0;i+size<=bars.length;i+=size){const g=bars.slice(i,i+size);groups.push({open:g[0].open,high:Math.max(...g.map(b=>b.high)),low:Math.min(...g.map(b=>b.low)),close:g.at(-1)!.close});}return groups;
}
export const pullbackMirror=(b: PullbackBar): PullbackBar=>({open:220-b.open,high:220-b.low,low:220-b.high,close:220-b.close});
export const pullbackMinorLine=(minute: number)=>109.5+(minute-4)*.5;
export const pullbackMajorLine=(minute: number)=>122-(minute-1)*2;
export function pullbackScenarioBars(s: ChartScenarioId): PullbackBar[] {
 switch(s){
 case 'par11-spike':return pullbackBars.slice(0,3);
 case 'par11-pause':case 'par11-entry':case 'par11-orders':case 'par11-risk':return pullbackBars.slice(0,4);
 case 'par11-resume':return pullbackBars.slice(0,5);
 case 'par11-untriggered':return pullbackUntriggered;
 case 'par11-failure':return pullbackFailure;
 case 'par11-abc':case 'par11-minor':return pullbackBars.slice(0,8);
 case 'par11-h2':return pullbackH2Bars;
 case 'par11-renew':case 'par11-ema-before':return pullbackBars.slice(0,9);
 case 'par11-contact':return pullbackBars.slice(0,10);
 case 'par11-bounce':return pullbackBars.slice(0,11);
 case 'par11-structure':return pullbackBars.slice(0,12);
 case 'par11-full-below':return pullbackBars.slice(0,13);
 case 'par11-persistent':return pullbackBars;
 case 'par11-bear':return pullbackBars.slice(0,5).map(pullbackMirror);
 case 'par11-bear-full':return pullbackBars.slice(0,13).map(pullbackMirror);
 case 'par11-major':return pullbackMajor.slice(0,5);
 case 'par11-test-low':return pullbackMajor.slice(0,6);
 case 'par11-double':return pullbackMajor.slice(0,8);
 case 'par11-turn':return pullbackMajor;
 case 'par11-bear-resume':return pullbackBearResume;
 case 'par11-wedge':return pullbackWedge;
 case 'par11-range':return pullbackRange;
 case 'par11-higher':return pullbackAggregate(pullbackBars.slice(0,10),3);
 default:throw new Error(`Unknown pullback scenario: ${s}`);
 }
}
const fmt=(n:number)=>Number(n.toFixed(2)).toString().replace('.',',');
export function PullbackMarks({scenario}:{scenario: ChartScenarioId}) {
 const bars=pullbackScenarioBars(scenario),mirror=['par11-bear','par11-bear-full'].includes(scenario),higher=scenario==='par11-higher';
 const major=['par11-major','par11-test-low','par11-double','par11-turn','par11-bear-resume'].includes(scenario);
 const average=['par11-ema-before','par11-contact','par11-bounce','par11-full-below','par11-persistent','par11-bear-full','par11-higher'].includes(scenario);
 const ema=higher?pullbackEma(bars.map(b=>b.close),3):pullbackEma20(mirror?bars.map(pullbackMirror):bars).map(v=>mirror?220-v:v);
 const levels: {price:number;label:string}[]=[];
 if(['par11-entry','par11-orders','par11-risk','par11-untriggered','par11-failure'].includes(scenario)) levels.push({price:112.1,label:'Stopkaufplan 112,1'});
 if(scenario==='par11-orders')levels.push({price:109.4,label:'Limitkaufidee 109,4'});
 if(scenario==='par11-risk')levels.push({price:109.4,label:'Enger Schutz 109,4'},{price:106.9,label:'Weiter Schutz 106,9'});
 if(['par11-minor','par11-structure'].includes(scenario))levels.push({price:103.8,label:'Älteres Tief 103,8'});
 if(scenario==='par11-bounce')levels.push({price:115.2,label:'Altes Trendhoch 115,2'});
 if(major)levels.push({price:122,label:'Großes Hoch 122'},{price:109,label:'Absolutes Tief 109'});
 if(['par11-test-low','par11-double','par11-turn'].includes(scenario))levels.push({price:110,label:'Erster Test 110'});
 if(['par11-double','par11-turn'].includes(scenario))levels.push({price:109.7,label:'Zweiter Test 109,7'});
 const lines=scenario==='par11-minor'?[pullbackMinorLine(4),pullbackMinorLine(bars.length)]:scenario==='par11-major'?[122,pullbackMajorLine(bars.length)]:[];
 const min=Math.floor(Math.min(...bars.map(b=>b.low),...levels.map(l=>l.price),...lines,...(average?ema:[]))-1),max=Math.ceil(Math.max(...bars.map(b=>b.high),...levels.map(l=>l.price),...lines,...(average?ema:[]))+1);
 const x=(i:number)=>96+i*Math.min(48,460/Math.max(1,bars.length-1)),y=(p:number)=>249-(p-min)/(max-min)*204;
 let previous=27;const positions=new Map<string,number>();for(const l of [...levels].sort((a,b)=>b.price-a.price)){previous=Math.max(previous+19,y(l.price)+4);positions.set(l.label,previous);}
 const notes: Partial<Record<ChartScenarioId,string>>={
 'par11-spike':'Stand 3 · kräftiger Schub · spätere Pause verborgen',
 'par11-pause':'Stand 4 · H4 112 / L4 109,5 · kleiner Körper, mehr Überlappung',
 'par11-entry':'Stand 4 · geplante Schwelle · Auslösung noch offen',
 'par11-orders':'Zwei verschiedene Orderideen · keine genaue Füllung aus OHLC ableiten',
 'par11-resume':'Stand 5 · H5 114,2 über altem Hoch 112',
 'par11-untriggered':'Gleiche Minuten 1–4 · H5 111,5 erreicht Stopplan 112,1 nicht',
 'par11-failure':'Gleiche Minuten 1–4 · H5 112,4 / C5 108 · Intrabarfolge unbekannt',
 'par11-abc':'A: Minute 6 ↓ · B: Minute 7 ↑ · C: Minute 8 ↓',
 'par11-h2':'Eigene Variante: H7 114,1 über H6 114 · Pause 8 · zweiter Versuch 9',
 'par11-wedge':'Zusatzfall · drei getrennte Gegenstrecken · Tiefs 110 / 109 / 108,7',
 'par11-minor':'Örtliche Linie L4–L6 · Wert8 111,5 · Tief8 108,5',
 'par11-renew':'Stand 9 · nach kleinem Linienbruch neues Hoch 115,2',
 'par11-ema-before':'Stand 9 · seit Schubende kein EMA20-Kontakt · 30 Startschlüsse 100',
 'par11-contact':'Stand 10 · erster EMA20-Kontakt seit Schubende · Tief 103',
 'par11-bounce':'Stand 11 · Hoch 112,4 bleibt unter dem alten Hoch 115,2',
 'par11-full-below':'Stand 13 · ganze Kerze unter EMA20 · Hoch13 102,8',
 'par11-persistent':'Stand 16 · vier ganze Kerzen unter EMA20 · keine schnelle Erholung',
 'par11-structure':'Stand 12 · Tief12 100 verletzt das ältere Tief 103,8',
 'par11-major':'Zusatzfall · große Linie H1–H3 · Hoch5 115 über Linienwert 114',
 'par11-bear':'220 minus Preis · Gegenpause steigt · Fortsetzung fällt',
 'par11-bear-full':'Gespiegelter EMA20 · erste ganze Kerze darüber in Minute 13',
 'par11-test-low':'Stand 6 · Testtief 110 bleibt über altem Gesamttief 109',
 'par11-double':'Stand 8 · 109,7 unter 110, zugleich über absolutem Tief 109',
 'par11-bear-resume':'Gleiche Minuten 1–5 · neues Tief 108 nach großem Linienbruch',
 'par11-turn':'Stand 10 · erst jetzt Hoch 123 über großem alten Hoch 122',
 'par11-range':'Separater Seitwärtsfall · Überlappung und wechselnde Körper',
 'par11-higher':'Stand Minute 10 · nur Gruppen 1–3 / 4–6 / 7–9 abgeschlossen',
 'par11-risk':'Budget 30 Euro · 2 Euro Kosten · eng Menge10 / weit Menge5',
 };
 return <g>
  <text x="80" y="24" className="chart-small strong">Eigene Rücksetzerfälle · abgeschlossene Kerzen · Preise in Punkten</text>
  {[min,(min+max)/2,max].map(v=><g key={v}><line x1="80" x2="610" y1={y(v)} y2={y(v)} stroke="currentColor" opacity="0.1"/><text x="67" y={y(v)+4} textAnchor="end" className="chart-small">{fmt(v)}</text></g>)}
  {levels.map(l=><g key={l.label}><line x1="80" x2="610" y1={y(l.price)} y2={y(l.price)} stroke="currentColor" strokeDasharray="5 4" opacity="0.6"/><line x1="610" x2="616" y1={y(l.price)} y2={positions.get(l.label)!-4} stroke="currentColor" opacity="0.4"/><text x="620" y={positions.get(l.label)} className="chart-small">{l.label}</text></g>)}
  {average?<><polyline points={ema.map((v,i)=>`${x(i)},${y(v)}`).join(' ')} fill="none" stroke="currentColor" strokeWidth="2"/><text x="620" y="268" className="chart-small">{higher?'EMA3 auf Gruppen':'EMA20 auf Minuten'}</text></>:null}
  {scenario==='par11-minor'?<line x1={x(3)} x2={x(bars.length-1)} y1={y(pullbackMinorLine(4))} y2={y(pullbackMinorLine(bars.length))} stroke="currentColor" strokeDasharray="4 3"/>:null}
  {scenario==='par11-major'?<line x1={x(0)} x2={x(bars.length-1)} y1={y(122)} y2={y(pullbackMajorLine(bars.length))} stroke="currentColor" strokeDasharray="4 3"/>:null}
  {bars.map((b,i)=>{const tone=b.close>=b.open?'bull':'bear',width=bars.length>12?12:16;return <g key={i}><line x1={x(i)} x2={x(i)} y1={y(b.high)} y2={y(b.low)} className={`candle-wick ${tone}`}/><rect x={x(i)-width/2} y={y(Math.max(b.open,b.close))} width={width} height={Math.max(2,Math.abs(y(b.open)-y(b.close)))} className={`candle-body ${tone}`}/><text x={x(i)} y="277" textAnchor="middle" className="chart-small">{higher?`${i*3+1}–${i*3+3}`:i+1}</text></g>})}
  <text x="80" y="302" className="chart-small">{notes[scenario]}</text>
  <text x="80" y="324" className="chart-small">{average?'EMA nur aus bekannten Schlüssen · Start ausdrücklich erklärt':'Erfundene Daten · Beobachtung und Handelsausführung getrennt prüfen'}</text>
 </g>;
}

export interface TimeTrade { id:number; second:number; cents:number; shares:number }
export interface TimeBar { start:number; end:number; ids:number[]; open:number; high:number; low:number; close:number; shares:number; complete:boolean }
/** Neuer eigener Riva-Datensatz. Sekunden seit09:00, Cent je Aktie, Aktien. */
export const timeTrades:readonly TimeTrade[]=[
 {id:1,second:5,cents:3000,shares:2},{id:2,second:20,cents:3020,shares:1},{id:3,second:50,cents:3010,shares:3},
 {id:4,second:60,cents:3010,shares:1},{id:5,second:85,cents:2990,shares:2},{id:6,second:110,cents:3030,shares:2},
 {id:7,second:125,cents:3040,shares:3},{id:8,second:150,cents:3050,shares:1},{id:9,second:175,cents:3020,shares:4},
 {id:10,second:180,cents:3010,shares:1},{id:11,second:200,cents:2980,shares:1},{id:12,second:235,cents:3000,shares:2},
 {id:13,second:245,cents:3000,shares:2},{id:14,second:275,cents:3060,shares:3},{id:15,second:295,cents:3040,shares:2},
 {id:16,second:300,cents:3030,shares:1},{id:17,second:330,cents:3020,shares:2},{id:18,second:355,cents:3070,shares:3},
];
const windowStart=(second:number,width:number,anchor:number)=>anchor+Math.floor((second-anchor)/width)*width;
function validateWindow(width:number,snapshot:number,anchor:number){
 if(!Number.isSafeInteger(width)||width<=0||!Number.isFinite(snapshot)||!Number.isSafeInteger(anchor))throw new Error('Ungültige Zeitfensterregel');
}
/** [start,end), Meldungen am Aufnahmezeitpunkt eingeschlossen; kein erfundener leerer Bar.
 * complete bezeichnet das zeitliche Ende, keine zugesicherte Datenabdeckung. */
export function timeBars(trades:readonly TimeTrade[],width:number,snapshot=360,anchor=0):TimeBar[]{
 validateWindow(width,snapshot,anchor);
 const buckets=new Map<number,TimeTrade[]>();let previous=-Infinity;
 for(const t of trades){
  if(!Number.isFinite(t.second)||t.second<previous||!Number.isSafeInteger(t.cents)||!Number.isSafeInteger(t.shares)||t.shares<=0)throw new Error('Ungültige oder ungeordnete Geschäftsdaten');
  previous=t.second;if(t.second>snapshot)continue;
  const start=windowStart(t.second,width,anchor);buckets.set(start,[...(buckets.get(start)??[]),t]);
 }
 return [...buckets].map(([start,group])=>({start,end:start+width,ids:group.map(t=>t.id),open:group[0].cents,high:Math.max(...group.map(t=>t.cents)),low:Math.min(...group.map(t=>t.cents)),close:group.at(-1)!.cents,shares:group.reduce((n,t)=>n+t.shares,0),complete:start+width<=snapshot}));
}
/** Bereits gebildete Teilbars nur ganz zusammenfassen, nie an Zielgrenzen aufteilen. */
export function aggregateTimeBars(bars:readonly TimeBar[],width:number,snapshot=360,anchor=0):TimeBar[]{
 validateWindow(width,snapshot,anchor);
 const buckets=new Map<number,TimeBar[]>();let previousEnd=-Infinity;
 for(const b of bars){
  const start=windowStart(b.start,width,anchor);
  if(b.end<=b.start||b.start<previousEnd||b.start>snapshot||b.end>start+width)throw new Error('Teilfenster passt nicht vollständig in die Zielgruppe');
  previousEnd=b.end;buckets.set(start,[...(buckets.get(start)??[]),b]);
 }
 return [...buckets].map(([start,group])=>({start,end:start+width,ids:group.flatMap(b=>b.ids),open:group[0].open,high:Math.max(...group.map(b=>b.high)),low:Math.min(...group.map(b=>b.low)),close:group.at(-1)!.close,shares:group.reduce((n,b)=>n+b.shares,0),complete:start+width<=snapshot&&group.every(b=>b.complete)}));
}

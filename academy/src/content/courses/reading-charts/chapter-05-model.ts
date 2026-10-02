export interface PriceBar { open:number; high:number; low:number; close:number }
/** Eigene abgeschlossene Minuten; Euro je Aktie. Keine Einzelgeschäftsfolge. */
export const haOriginalBars:readonly PriceBar[]=[
  {open:100,high:104,low:98,close:102},
  {open:102,high:108,low:100,close:104},
  {open:104,high:106,low:100,close:101},
  {open:112,high:114,low:110,close:113},
];
/** Eigene Initialisierung; später rekursiver HA-Körper. Keine Zwischenrundung. */
export function calculateHA(bars:readonly PriceBar[], initialOpen?:number):PriceBar[] {
  if(initialOpen!==undefined&&!Number.isFinite(initialOpen)) throw new Error('Ungültiger HA-Startwert');
  const result:PriceBar[]=[];
  for(const b of bars){
    if(!Object.values(b).every(Number.isFinite)||b.low>Math.min(b.open,b.close)||b.high<Math.max(b.open,b.close)||b.low>b.high) throw new Error('Ungültige Original-OHLC-Werte');
    const prior=result.at(-1);
    const open=prior?(prior.open+prior.close)/2:(initialOpen??(b.open+b.close)/2);
    const close=(b.open+b.high+b.low+b.close)/4;
    result.push({open,close,high:Math.max(b.high,open,close),low:Math.min(b.low,open,close)});
  }
  return result;
}

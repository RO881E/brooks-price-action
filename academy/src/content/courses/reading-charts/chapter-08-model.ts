export type PriceScale='linear'|'log';
export const scaleCloses=[15,30,60,120] as const;
export const additiveCloses=[15,30,45,60] as const;
export const scaleCandles=[{open:15,high:30,low:12,close:24},{open:60,high:120,low:48,close:96}] as const;
const positive=(value:number)=>{if(!Number.isFinite(value)||value<=0)throw new Error('Positive endliche Preisbasis erforderlich');};
/** Einfacher Zuwachs zur positiven Anfangsbasis, kein Log-Return. */
export function percentChange(start:number,end:number){positive(start);if(!Number.isFinite(end))throw new Error('Endlicher Endpreis erforderlich');return (end-start)/start*100;}
export function indexedPrice(base:number,price:number){positive(base);if(!Number.isFinite(price))throw new Error('Endlicher Preis erforderlich');return price/base*100;}
/** Normierte Bildposition0 unten,1 oben; keine automatische Rundung oder Sonderregel. */
export function scalePosition(price:number,min:number,max:number,mode:PriceScale){
 if(![price,min,max].every(Number.isFinite)||min>=max||price<min||price>max)throw new Error('Ungültiger Preisbereich');
 if(mode==='linear')return (price-min)/(max-min);
 positive(price);positive(min);positive(max);return (Math.log(price)-Math.log(min))/(Math.log(max)-Math.log(min));
}
/** Zwischenwert einer gedachten geraden Verbindung in der angegebenen Skala. */
export function scaleInterpolate(start:number,end:number,fraction:number,mode:PriceScale){
 if(!Number.isFinite(start)||!Number.isFinite(end)||!Number.isFinite(fraction)||fraction<0||fraction>1)throw new Error('Ungültige Zwischenposition');
 if(mode==='linear')return start+(end-start)*fraction;
 positive(start);positive(end);return Math.exp(Math.log(start)+(Math.log(end)-Math.log(start))*fraction);
}

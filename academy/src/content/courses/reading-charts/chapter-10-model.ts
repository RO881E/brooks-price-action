/** Original report exercise. Times are seconds after 09:00 UTC on fictional D1. */
export type ReportTrade={second:number;price:number;quantity:number};
export type ReportBar={open:number;high:number;low:number;close:number;volume:number};
export type ReportOHLC=Omit<ReportBar,'volume'>;
export const reportTrades:readonly ReportTrade[]=[
 {second:5,price:30,quantity:2},{second:20,price:32,quantity:1},{second:35,price:29,quantity:4},{second:50,price:31,quantity:3},
 {second:65,price:31,quantity:1},{second:80,price:33,quantity:2},{second:95,price:30,quantity:2},{second:110,price:32,quantity:1},
];
export function summarizeTrades(trades:readonly ReportTrade[]):ReportBar{
 if(!trades.length)throw new RangeError('Empty trade list');
 for(const[t,i]of trades.map((t,i)=>[t,i] as const)){
  if(!Number.isFinite(t.second)||!Number.isFinite(t.price)||!Number.isFinite(t.quantity)||t.price<=0||t.quantity<=0||!Number.isInteger(t.quantity))throw new RangeError('Invalid trade');
  if(i>0&&t.second<trades[i-1].second)throw new RangeError('Unordered trades');
 }
 return {open:trades[0].price,high:Math.max(...trades.map(t=>t.price)),low:Math.min(...trades.map(t=>t.price)),close:trades[trades.length-1].price,volume:trades.reduce((sum,t)=>sum+t.quantity,0)};
}
export const reportMinutes=[summarizeTrades(reportTrades.slice(0,4)),summarizeTrades(reportTrades.slice(4))];
export const reportAggregate=summarizeTrades(reportTrades);
export const reportPaths=[[30,32,29,31],[30,29,32,31]] as const;
export function validReportBar(b:ReportOHLC & {volume?:number}){return Object.values(b).every(Number.isFinite)&&b.low>0&&(b.volume===undefined||b.volume>=0)&&b.high>=Math.max(b.open,b.close)&&b.low<=Math.min(b.open,b.close)&&b.high>=b.low;}
export function closeLocation(b:ReportBar){if(!validReportBar(b))throw new RangeError('Invalid bar');return b.high===b.low?null:(b.close-b.low)/(b.high-b.low);}
export const reportOriginal:ReportOHLC={open:34,high:35,low:30,close:31};
/** Separate HA exercise; volume is intentionally not specified or drawn. */
export function reportHA(b:ReportOHLC,previousOpen:number,previousClose:number){
 if(!validReportBar(b)||![previousOpen,previousClose].every(p=>Number.isFinite(p)&&p>0))throw new RangeError('Invalid HA input');
 const open=(previousOpen+previousClose)/2,close=(b.open+b.high+b.low+b.close)/4;
 return {open,close,high:Math.max(b.high,open,close),low:Math.min(b.low,open,close)};
}
export const reportCalculated=reportHA(reportOriginal,28,30);

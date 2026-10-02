/** Original classroom data. No market feed or execution assumptions. */
const finite=(n:number)=>{if(!Number.isFinite(n))throw new RangeError('Finite value required');return n;};
const positive=(n:number)=>{finite(n);if(n<=0)throw new RangeError('Positive value required');return n;};
export const splitExample={before:80,after:40,later:41,oldShares:4,newShares:8,ratio:2} as const;
export const oldSplitBar={open:78,high:82,low:76,close:80} as const;
export function splitBar(bar:typeof oldSplitBar,ratio:number){positive(ratio);return {open:positive(bar.open)/ratio,high:positive(bar.high)/ratio,low:positive(bar.low)/ratio,close:positive(bar.close)/ratio};}
export const dividendStages=[{label:'Vor Ex-Tag',price:51,claim:0,cash:0},{label:'Ex-Tag',price:50,claim:8,cash:0},{label:'Zahlung',price:50,claim:0,cash:8}] as const;
export function dividendValue(price:number,shares:number,claim:number,cash:number){positive(price);positive(shares);return price*shares+finite(claim)+finite(cash);}
export const oldContract=[72,74,76] as const;
export const rollReference={old:76,next:83,nextClose:84} as const;
export const rawContinuous=[...oldContract,rollReference.nextClose];
export function additiveBackAdjust(prices:readonly number[],offset:number){finite(offset);return prices.map(p=>finite(finite(p)+offset));}
export function ratioBackAdjust(prices:readonly number[],factor:number){positive(factor);return prices.map(p=>positive(positive(p)*factor));}
export const adjustedContinuous=[...additiveBackAdjust(oldContract,rollReference.next-rollReference.old),rollReference.nextClose];
export function executionResult(trades:readonly {entry:number;exit:number;quantity:number}[],pointValue:number,fees:readonly number[]){positive(pointValue);return trades.reduce((sum,t)=>sum+(finite(t.exit)-finite(t.entry))*positive(t.quantity)*pointValue,0)-fees.reduce((sum,f)=>{finite(f);if(f<0)throw new RangeError('Negative fee');return sum+f;},0);}

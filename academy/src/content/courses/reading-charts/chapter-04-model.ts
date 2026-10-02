export const priceStepTrades = [
  { id:1, second:5, cents:10000, shares:2 }, { id:2, second:20, cents:10010, shares:1 },
  { id:3, second:35, cents:9990, shares:3 }, { id:4, second:50, cents:10020, shares:2 },
  { id:5, second:65, cents:10030, shares:1 }, { id:6, second:80, cents:10020, shares:2 },
  { id:7, second:100, cents:10000, shares:3 }, { id:8, second:120, cents:10010, shares:1 },
  { id:9, second:125, cents:10050, shares:4 }, { id:10, second:150, cents:10040, shares:2 },
  { id:11, second:175, cents:10030, shares:1 }, { id:12, second:205, cents:10040, shares:2 },
  { id:13, second:245, cents:10000, shares:3 }, { id:14, second:260, cents:9960, shares:1 },
  { id:15, second:290, cents:9970, shares:2 },
] as const;
export type PriceStepTrade = {id:number;second:number;cents:number;shares:number};
/** Own whole-trade range grouping: first H-L >= threshold closes; next trade starts fresh. */
export function rangeGroups(trades: readonly PriceStepTrade[], threshold:number) {
  if(!Number.isInteger(threshold)||threshold<=0) throw Error('Positive integer threshold required');
  const bars: {ids:number[];open:number;high:number;low:number;last:number;shares:number;complete:boolean}[]=[];
  let group: PriceStepTrade[]=[];
  const finish=(complete:boolean)=>({ids:group.map(t=>t.id),open:group[0].cents,high:Math.max(...group.map(t=>t.cents)),low:Math.min(...group.map(t=>t.cents)),last:group.at(-1)!.cents,shares:group.reduce((n,t)=>n+t.shares,0),complete});
  for(const trade of trades) {
    group.push(trade);
    if(Math.max(...group.map(t=>t.cents))-Math.min(...group.map(t=>t.cents))>=threshold) {bars.push(finish(true));group=[];}
  }
  if(group.length) bars.push(finish(false));
  return bars;
}
export type TeachingBrick = {open:number;close:number;direction:1|-1;triggerId:number};
/** Own fixed-box Renko: inclusive thresholds; two-box reversal, no wicks/projections. */
export function teachingRenko(trades:readonly PriceStepTrade[], anchor:number, size:number) {
  if(!Number.isInteger(size)||size<=0) throw Error('Positive integer size required');
  const bricks:TeachingBrick[]=[];
  let end=anchor, direction:0|1|-1=0;
  const emit=(open:number,close:number,dir:1|-1,id:number)=>{bricks.push({open,close,direction:dir,triggerId:id});end=close;direction=dir;};
  for(const trade of trades) {
    const p=trade.cents;
    if(direction===0) {
      while(p>=end+size) emit(end,end+size,1,trade.id);
      if(direction===0) while(p<=end-size) emit(end,end-size,-1,trade.id);
    } else if(direction===1) {
      if(p<=end-2*size) emit(end-size,end-2*size,-1,trade.id);
      while(direction===-1&&p<=end-size) emit(end,end-size,-1,trade.id);
      while(direction===1&&p>=end+size) emit(end,end+size,1,trade.id);
    } else {
      if(p>=end+2*size) emit(end+size,end+2*size,1,trade.id);
      while(direction===1&&p>=end+size) emit(end,end+size,1,trade.id);
      while(direction===-1&&p<=end-size) emit(end,end-size,-1,trade.id);
    }
  }
  return bricks;
}

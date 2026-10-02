/** Original teaching tape. Seconds since 09:00, integer euro cents, shares. */
export const groupingTrades = [
  { id: 1, second: 5, cents: 2000, shares: 2 },
  { id: 2, second: 12, cents: 2010, shares: 1 },
  { id: 3, second: 20, cents: 1995, shares: 3 },
  { id: 4, second: 45, cents: 2005, shares: 2 },
  { id: 5, second: 60, cents: 2015, shares: 4 },
  { id: 6, second: 70, cents: 2020, shares: 1 },
  { id: 7, second: 110, cents: 2000, shares: 2 },
  { id: 8, second: 125, cents: 1990, shares: 1 },
  { id: 9, second: 130, cents: 1995, shares: 5 },
  { id: 10, second: 155, cents: 2010, shares: 2 },
  { id: 11, second: 185, cents: 2025, shares: 3 },
  { id: 12, second: 205, cents: 2015, shares: 1 },
] as const;
export type GroupingTrade = { id: number; second: number; cents: number; shares: number };
export type GroupedBar = {
  ids: number[]; open: number; high: number; low: number; close: number;
  shares: number; firstSecond: number; lastSecond: number; complete: boolean;
};
function summarize(trades: readonly GroupingTrade[], complete: boolean): GroupedBar {
  return {
    ids: trades.map(t => t.id), open: trades[0].cents,
    high: Math.max(...trades.map(t => t.cents)), low: Math.min(...trades.map(t => t.cents)), close: trades.at(-1)!.cents,
    shares: trades.reduce((sum,t) => sum+t.shares,0), firstSecond: trades[0].second, lastSecond: trades.at(-1)!.second, complete,
  };
}
/** Fixed 60-second windows [start,end); no fabricated bar for an empty window. */
export function groupByMinute(trades: readonly GroupingTrade[], snapshotSecond: number): GroupedBar[] {
  const buckets = new Map<number, GroupingTrade[]>();
  for(const trade of trades.filter(t => t.second <= snapshotSecond)) {
    const window = Math.floor(trade.second/60);
    buckets.set(window, [...(buckets.get(window) ?? []), trade]);
  }
  return [...buckets].map(([window,group]) => summarize(group, (window+1)*60 <= snapshotSecond));
}
/** Teaching conventions: trade messages count once, volume trades stay whole.
 * Threshold hit/overshoot closes the bar; next trade starts a fresh counter. */
export function groupByActivity(trades: readonly GroupingTrade[], mode: 'tick' | 'volume', threshold: number): GroupedBar[] {
  if(!Number.isInteger(threshold) || threshold < 1) throw new Error('Positive integer threshold required');
  const bars: GroupedBar[] = [];
  let pending: GroupingTrade[] = [], count = 0;
  for(const trade of trades) {
    pending.push(trade); count += mode === 'tick' ? 1 : trade.shares;
    if(count >= threshold) { bars.push(summarize(pending,true)); pending = []; count = 0; }
  }
  if(pending.length) bars.push(summarize(pending,false));
  return bars;
}
// Display specifications are independent of the grouping algorithms above.
// Tests compare both, so rendering does not need to ship the entire tape engine.
function displayBars(specs: [number[], number, number, number, number, number, number, number, boolean][]): GroupedBar[] {
  return specs.map(([ids,open,high,low,close,shares,firstSecond,lastSecond,complete]) => ({ids,open,high,low,close,shares,firstSecond,lastSecond,complete}));
}
export const groupedMinuteBars = displayBars([
  [[1,2,3,4],2000,2010,1995,2005,8,5,45,true],
  [[5,6,7],2015,2020,2000,2000,7,60,110,true],
  [[8,9,10],1990,2010,1990,2010,8,125,155,true],
  [[11,12],2025,2025,2015,2015,4,185,205,true],
]);
export const groupedTickBars = displayBars([
  [[1,2,3],2000,2010,1995,1995,6,5,20,true],
  [[4,5,6],2005,2020,2005,2020,7,45,70,true],
  [[7,8,9],2000,2000,1990,1995,8,110,130,true],
  [[10,11,12],2010,2025,2010,2015,6,155,205,true],
]);
export const groupedVolumeBars = displayBars([
  [[1,2,3],2000,2010,1995,1995,6,5,20,true],
  [[4,5],2005,2015,2005,2015,6,45,60,true],
  [[6,7,8,9],2020,2020,1990,1995,9,70,130,true],
  [[10,11],2010,2025,2010,2025,5,155,185,true],
  [[12],2015,2015,2015,2015,1,205,205,false],
]);

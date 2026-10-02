export interface PFInput { id:number; second:number; cents:number }
export interface PFMark { level:number; triggerId:number }
export interface PFColumn { symbol:'X'|'O'; marks:PFMark[] }
/** Eigenständige Nivo-Meldungen, Sekunden nach09:00 und Cent je Aktie. Mengen unbekannt. */
export const pfInputs:readonly PFInput[]=[
  {id:1,second:5,cents:5000},{id:2,second:20,cents:5050},{id:3,second:40,cents:5210},
  {id:4,second:55,cents:5150},{id:5,second:80,cents:5050},{id:6,second:120,cents:5000},
  {id:7,second:180,cents:5100},{id:8,second:185,cents:5150},{id:9,second:220,cents:5250},
  {id:10,second:260,cents:5100},{id:11,second:290,cents:5050},{id:12,second:360,cents:5150},
];
/** Eigenes festes Raster: kein Ankerzeichen, inklusive Grenzen, Umkehr ab zwei Kästchen.
 * Ein-Kästchen-Sonderkonventionen gehören ausdrücklich nicht zu diesem Lernmodell. */
export function calculatePF(inputs:readonly PFInput[],anchor=5000,box=50,reversal=3):PFColumn[]{
  if(!Number.isSafeInteger(anchor)||!Number.isSafeInteger(box)||box<=0||!Number.isSafeInteger(reversal)||reversal<2)throw new Error('Ungültige Rasterregel');
  const columns:PFColumn[]=[];
  const extend=(column:PFColumn,from:number,price:number,id:number)=>{
    const direction=column.symbol==='X'?1:-1;
    const count=Math.floor(direction*(price-from)/box);
    for(let i=1;i<=count;i++)column.marks.push({level:from+direction*i*box,triggerId:id});
  };
  for(const input of inputs){
    if(!Number.isSafeInteger(input.cents))throw new Error('Ungültiger Originalpreis');
    const current=columns.at(-1);
    if(!current){
      if(input.cents>=anchor+box||input.cents<=anchor-box){
        const first:PFColumn={symbol:input.cents>anchor?'X':'O',marks:[]};
        extend(first,anchor,input.cents,input.id);columns.push(first);
      }
      continue;
    }
    const extreme=current.marks.at(-1)!.level,direction=current.symbol==='X'?1:-1;
    if(direction*(input.cents-extreme)>=box)extend(current,extreme,input.cents,input.id);
    else if(direction*(input.cents-extreme)<=-reversal*box){
      const next:PFColumn={symbol:current.symbol==='X'?'O':'X',marks:[]};
      extend(next,extreme,input.cents,input.id);columns.push(next);
    }
  }
  return columns;
}
export const pfPathA=[5200,5300,5000,5200];
export const pfPathB=[5200,5000,5300,5200];
/** Beide Varianten starten mit bereits vorhandener X-Spalte bis52,00. */
export const pfVariantInputs=(path:readonly number[]):PFInput[]=>[5000,5200,...path].map((cents,i)=>({id:i+1,second:i,cents}));

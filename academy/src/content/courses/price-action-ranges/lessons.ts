import type { Lesson, ChartScenarioId } from '../../types';
export interface Draft { title: string; summary: string; paragraphs: string[]; prompt: string; answers: string[]; rule: string; diagram: string }
export function makeLessons(unit: string, sourceUnit: string, drafts: Draft[]): Lesson[] {
 return drafts.map((d, i) => {
  const key = `price-action-ranges.${unit}.lesson-${String(i+1).padStart(2,'0')}`;
  const correct = i % 3;
  const options = d.answers.map((label, j) => ({id:`choice-${j}`,label,explanation:j===0 ? `Richtig: ${d.rule}` : `Prüfe noch einmal: ${d.paragraphs[1]}`}));
  const answer = options.shift()!; options.splice(correct,0,answer);
  return {id:key,title:d.title,summary:d.summary,sourceUnit,sourceAnchors:[d.title],durationMinutes:6,xp:35,status:'published',steps:[
   {id:`${key}.explain`,type:'explanation',title:d.title,paragraphs:d.paragraphs,callout:d.rule},
   {id:`${key}.diagram`,type:'diagram',title:'Eigener Übungsfall',scenario:d.diagram as ChartScenarioId,caption:'Erfundener Markt · abgeschlossene Minuten · Preise in Punkten · keine historische Leistungsstatistik.',observations:[d.summary,d.rule]},
   {id:`${key}.compare`,type:'comparison',title:'Beobachtung und Entscheidung',columns:[{title:'Das prüfen wir',tone:'neutral',points:[d.summary]},{title:'Für deinen Plan',tone:'positive',points:[d.rule]}]},
   {id:`${key}.question`,type:'question',title:'Kurz prüfen',prompt:d.prompt,options,correctOptionId:answer.id},
   {id:`${key}.recap`,type:'recap',title:'Das nimmst du mit',points:[d.rule,d.summary]}
  ]};
 });
}

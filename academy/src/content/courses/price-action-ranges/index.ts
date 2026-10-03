import type { CourseDefinition } from '../../registry';
import { rangesGlossary } from './glossary';
export const rangesDefinition: CourseDefinition = {
 info: {id:'price-action-ranges',eyebrow:'Teil 2 von 3 · Einführung und Kapitel 1–4 verfügbar',title:'Price Action: Ranges',subtitle:'Ausbrüche, Rücksetzer und Seitwärtsmärkte verstehen und mit einem nachvollziehbaren Risikoplan verbinden.',sourceOrderNotice:'Einführung und Kapitel 1–4 sind verfügbar. Weitere Kapitel folgen schrittweise. Neue Begriffe werden direkt erklärt.'},
 units:[
  {id:'price-action-ranges.introduction',order:1,kind:'introduction',label:'Einleitung',title:'Ausbrüche und Seitwärtsmärkte',description:'Marktzustand, Kontext, Wahrscheinlichkeit und geplantes Risiko verständlich verbinden.',estimatedLessonCount:8,load:()=>import('./introduction').then(m=>m.rangesIntroductionLessons)},
  {id:'price-action-ranges.chapter-01',order:2,kind:'chapter',label:'Kapitel 1',title:'Einen Ausbruch Schritt für Schritt verstehen',description:'Einen eigenen Chartfall mit Anschluss, Rücksetzer, Scheitern, Stop, Messziel und Kosten prüfen.',estimatedLessonCount:20,load:()=>import('./chapter-01').then(m=>m.rangesChapterOneLessons)},
  {id:'price-action-ranges.chapter-02',order:3,kind:'chapter',label:'Kapitel 2',title:'Stärkezeichen eines Ausbruchs prüfen',description:'Körper, Schlusslage, Anschluss, Mikrolücken, Volumen und Gegenargumente mit eigenen Aufwärts- und Abwärtsfällen vergleichen.',estimatedLessonCount:24,load:()=>import('./chapter-02').then(m=>m.rangesChapterTwoLessons)},
  {id:'price-action-ranges.chapter-03',order:4,kind:'chapter',label:'Kapitel 3',title:'Den ersten Ausbruch einordnen',description:'Ersten Schub, nicht ausgeführte Orders, mehrdeutige Pausen, verschiedene Fortsetzungen und Umkehrversuche mit eigenem Informationsstand prüfen.',estimatedLessonCount:24,load:()=>import('./chapter-03').then(m=>m.rangesChapterThreeLessons)},
  {id:'price-action-ranges.chapter-04',order:5,kind:'chapter',label:'Kapitel 4',title:'Ausbrüche innerhalb eines starken Trends',description:'Frühen Rücksetzereinstieg und Ausbruch am alten Hoch, erste und zweite Versuche, veränderte Stärke sowie Vortagskontext mit eigenen Fällen prüfen.',estimatedLessonCount:25,load:()=>import('./chapter-04').then(m=>m.rangesChapterFourLessons)},
 ],
 glossary:{title:'Ranges-Glossar',entries:rangesGlossary},
};

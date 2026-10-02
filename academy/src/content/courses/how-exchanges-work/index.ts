import type { CourseDefinition } from '../../registry';
import { marketBasicsGlossary } from './glossary';

export const marketBasicsDefinition: CourseDefinition = {
  info: {
    id: 'how-exchanges-work',
    eyebrow: 'Trading von null · Kapitel 1–4 verfügbar',
    title: 'Wie Börsen funktionieren',
    subtitle: 'Ein Einführungskurs ohne vorausgesetztes Tradingwissen. Verstehe Handel, Produktarten, Marktteilnehmer und Handelsplätze; weitere Kapitel folgen.',
    sourceOrderNotice: 'Lerne die Grundlagen schrittweise. Aktuell sind Kapitel 1 bis 4 verfügbar; der Kurs wird weiter aufgebaut.',
  },
  units: [{
    id: 'how-exchanges-work.chapter-01',
    order: 1,
    kind: 'chapter',
    label: 'Kapitel 1',
    title: 'Handel, Preise und Teilnehmer',
    description: 'Was gehandelt wird, warum Menschen handeln und wie Angebote, Preise und verfügbare Menge zusammenhängen.',
    estimatedLessonCount: 12,
    load: () => import('./chapter-01').then((m) => m.marketBasicsChapterOneLessons),
  }, {
    id: 'how-exchanges-work.chapter-02',
    order: 2,
    kind: 'chapter',
    label: 'Kapitel 2',
    title: 'Was genau wird gehandelt?',
    description: 'Aktien, Anleihen, Fonds und ETFs, Währungen sowie Derivate von Grund auf: Rechte, Pflichten, Preisbezug und eigene Rechenbeispiele.',
    estimatedLessonCount: 24,
    load: () => import('./chapter-02').then((m) => m.marketBasicsChapterTwoLessons),
  }, {
    id: 'how-exchanges-work.chapter-03',
    order: 3,
    kind: 'chapter',
    label: 'Kapitel 3',
    title: 'Wer handelt und warum?',
    description: 'Privatanleger, Fonds, Unternehmen, Banken, Market Maker und weitere Rollen: Handelsmotive, Zeithorizonte und eigene Fallbeispiele.',
    estimatedLessonCount: 22,
    load: () => import('./chapter-03').then((m) => m.marketBasicsChapterThreeLessons),
  }, {
    id: 'how-exchanges-work.chapter-04',
    order: 4,
    kind: 'chapter',
    label: 'Kapitel 4',
    title: 'Wo findet Handel statt?',
    description: 'Börsen, außerbörslicher Handel und verschiedene Ausführungswege: Zugang, Datenquelle, Angebote, Mengen und Kosten richtig unterscheiden.',
    estimatedLessonCount: 21,
    load: () => import('./chapter-04').then((m) => m.marketBasicsChapterFourLessons),
  }],
  glossary: { title: 'Marktgrundlagen-Glossar', entries: marketBasicsGlossary },
};

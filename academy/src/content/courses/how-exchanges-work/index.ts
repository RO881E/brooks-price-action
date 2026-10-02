import type { CourseDefinition } from '../../registry';
import { marketBasicsGlossary } from './glossary';

export const marketBasicsDefinition: CourseDefinition = {
  info: {
    id: 'how-exchanges-work',
    eyebrow: 'Trading von null · Kapitel 1 verfügbar',
    title: 'Wie Börsen funktionieren',
    subtitle: 'Ein Einführungskurs ohne vorausgesetztes Tradingwissen. Starte mit Instrumenten, Handelsmotiven und Preisbildung; weitere Kapitel folgen.',
    sourceOrderNotice: 'Lerne die Grundlagen schrittweise. Aktuell ist Kapitel 1 verfügbar; der Kurs wird weiter aufgebaut.',
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
  }],
  glossary: { title: 'Marktgrundlagen-Glossar', entries: marketBasicsGlossary },
};

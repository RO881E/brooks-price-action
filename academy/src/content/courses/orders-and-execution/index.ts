import type { CourseDefinition } from '../../registry';
import { ordersGlossary } from './glossary';
export const ordersDefinition: CourseDefinition = {
  info: {
    id: 'orders-and-execution',
    eyebrow: 'Trading von null · Kapitel 1–2 verfügbar',
    title: 'Orders und Ausführung',
    subtitle: 'Lerne, Handelsaufträge klar zu formulieren und ihren tatsächlichen Verlauf zu prüfen. Kapitel 1 beginnt mit Produkt, Seite, Menge, Preisregel, Gültigkeit und bestätigtem Status. Kapitel 2 erklärt Market-Orders, verfügbare Mengen und tatsächliche Ausführungspreise.',
    sourceOrderNotice: 'Kapitel 1 und 2 sind verfügbar. Die weiteren acht Kapitel werden schrittweise ergänzt. Du kannst hier direkt beginnen; die Marktgrundlagen helfen bei der Einordnung.',
  },
  units: [{
    id: 'orders-and-execution.chapter-01', order: 1, kind: 'chapter',
    label: 'Kapitel 1', title: 'Vom Handelswunsch zum Auftrag',
    description: 'Auftragsfelder, Vorschau, Annahme, Teilausführung, Kosten und Stornierung anhand eigener Lernfälle verstehen.',
    estimatedLessonCount: 20,
    load: () => import('./chapter-01').then((module) => module.ordersChapterOneLessons),
  }, {
    id: 'orders-and-execution.chapter-02', order: 2, kind: 'chapter',
    label: 'Kapitel 2', title: 'Market-Orders und verfügbare Angebote',
    description: 'Kauf- und Verkaufsseite, Preisstufen, Durchschnitt, Slippage, Kosten und Reststatus anhand eigener Market-Fälle prüfen.',
    estimatedLessonCount: 22,
    load: () => import('./chapter-02').then((module) => module.ordersChapterTwoLessons),
  }],
  glossary: { title: 'Orders-Glossar', entries: ordersGlossary },
};

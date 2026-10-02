import type { CourseDefinition } from '../../registry';
import { ordersGlossary } from './glossary';
export const ordersDefinition: CourseDefinition = {
  info: {
    id: 'orders-and-execution',
    eyebrow: 'Trading von null · Kapitel 1–8 verfügbar',
    title: 'Orders und Ausführung',
    subtitle: 'Lerne, Handelsaufträge klar zu formulieren und ihren tatsächlichen Verlauf zu prüfen. Kapitel 1 beginnt mit Produkt, Seite, Menge, Preisregel, Gültigkeit und bestätigtem Status. Kapitel 2 erklärt Market-Orders und tatsächliche Ausführungspreise. Kapitel 3 verbindet Limits und Warteschlangen. Kapitel 4 erklärt Stop-Auslösung und Folgeorders. Kapitel 5 ergänzt Gültigkeit, volle und teilweise Mengen sowie bestätigte Restzustände. Kapitel 6 verbindet Positionsausstiege, OCO-Regeln und Brackets. Kapitel 7 ergänzt nachziehende Schwellen und bedingte Aktivierung. Kapitel 8 verbindet Preisvergleiche, Gebühren und Ausführungsqualität.',
    sourceOrderNotice: 'Kapitel 1 bis 8 sind verfügbar. Die weiteren zwei Kapitel werden schrittweise ergänzt. Du kannst hier direkt beginnen; die Marktgrundlagen helfen bei der Einordnung.',
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
  }, {
    id: 'orders-and-execution.chapter-03', order: 3, kind: 'chapter',
    label: 'Kapitel 3', title: 'Limit-Orders und Warteschlangen',
    description: 'Preisgrenzen, sofort ausführbare und ruhende Limits, Preis- und Zeitvorrang sowie tatsächliche eigene Zuteilungen verstehen.',
    estimatedLessonCount: 22,
    load: () => import('./chapter-03').then((module) => module.ordersChapterThreeLessons),
  }, {
    id: 'orders-and-execution.chapter-04', order: 4, kind: 'chapter',
    label: 'Kapitel 4', title: 'Stop- und Stop-Limit-Orders',
    description: 'Auslösequelle, Schwelle, aktive Folgeorder, Ausführungen und Restbestand bei Stop-Market und Stop-Limit Schritt für Schritt unterscheiden.',
    estimatedLessonCount: 22,
    load: () => import('./chapter-04').then((module) => module.ordersChapterFourLessons),
  }, {
    id: 'orders-and-execution.chapter-05', order: 5, kind: 'chapter',
    label: 'Kapitel 5', title: 'Gültigkeit und Mengenbedingungen',
    description: 'Tagesende, GTC, GTD, IOC, FOK, AON und Mindestmengen anhand eigener Mengen- und Geldbilanzen vergleichen.',
    estimatedLessonCount: 22,
    load: () => import('./chapter-05').then((module) => module.ordersChapterFiveLessons),
  }, {
    id: 'orders-and-execution.chapter-06', order: 6, kind: 'chapter',
    label: 'Kapitel 6', title: 'Positionen schließen, OCO und Brackets',
    description: 'Bestandsbilanzen, verknüpfte Ausstiege, Parent- und Child-Aktivierung, Teilmengen und verbleibende Orders prüfen.',
    estimatedLessonCount: 22,
    load: () => import('./chapter-06').then((module) => module.ordersChapterSixLessons),
  }, {
    id: 'orders-and-execution.chapter-07', order: 7, kind: 'chapter',
    label: 'Kapitel 7', title: 'Trailing Stops und bedingte Aufträge',
    description: 'Referenzverlauf, feste und prozentuale Abstände, Folgelimits, Signalbedingungen und bestätigte Aktivierung unterscheiden.',
    estimatedLessonCount: 22,
    load: () => import('./chapter-07').then((module) => module.ordersChapterSevenLessons),
  }, {
    id: 'orders-and-execution.chapter-08', order: 8, kind: 'chapter',
    label: 'Kapitel 8', title: 'Slippage, Gebühren und Ausführungsqualität',
    description: 'Vorherige Preisreferenzen, tatsächliche Geldbuchungen, Nettogewinn, Mengenabdeckung und Ausführungszeiten gemeinsam prüfen.',
    estimatedLessonCount: 22,
    load: () => import('./chapter-08').then((module) => module.ordersChapterEightLessons),
  }],
  glossary: { title: 'Orders-Glossar', entries: ordersGlossary },
};

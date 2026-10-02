import type { CourseDefinition } from '../../registry';
import { chartsGlossary } from './glossary';
export const chartsDefinition: CourseDefinition = {
  info: {
    id: 'reading-charts', eyebrow: 'Trading von null · Kapitel 1 verfügbar', title: 'Charts lesen',
    subtitle: 'Lerne, welche Daten ein Chart zeigt und welche Angaben im Bild fehlen. Kapitel 1 verbindet einzelne Geschäfte mit OHLC-Werten, Linie, Balken und Kerze.',
    sourceOrderNotice: 'Kapitel 1 ist verfügbar. Die weiteren neun Kapitel werden schrittweise ergänzt. Du kannst ohne andere abgeschlossene Kurse beginnen.',
  },
  units: [{
    id: 'reading-charts.chapter-01', order: 1, kind: 'chapter', label: 'Kapitel 1', title: 'Vom Geschäft zum Chartbild',
    description: 'Geschäftsdaten, Zeitabschnitte, vier Kennwerte und die Grenzen von Linie, Balken und Kerze anhand eigener Bilder verstehen.',
    estimatedLessonCount: 20,
    load: () => import('./chapter-01').then((module) => module.chartsChapterOneLessons),
  }],
  glossary: { title: 'Charts-Glossar', entries: chartsGlossary },
};

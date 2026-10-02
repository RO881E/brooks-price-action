import type { CourseDefinition } from '../../registry';
import { chartsGlossary } from './glossary';
export const chartsDefinition: CourseDefinition = {
  info: {
    id: 'reading-charts', eyebrow: 'Trading von null · Kapitel 1–2 verfügbar', title: 'Charts lesen',
    subtitle: 'Lerne, welche Daten ein Chart zeigt und welche Angaben im Bild fehlen. Kapitel 1–2 verbinden Geschäftsdaten mit Charts und erklären den sicheren Vergleich von Linien, Balken und Kerzen.',
    sourceOrderNotice: 'Kapitel 1–2 sind verfügbar. Die weiteren acht Kapitel werden schrittweise ergänzt. Du kannst ohne andere abgeschlossene Kurse beginnen.',
  },
  units: [{
    id: 'reading-charts.chapter-01', order: 1, kind: 'chapter', label: 'Kapitel 1', title: 'Vom Geschäft zum Chartbild',
    description: 'Geschäftsdaten, Zeitabschnitte, vier Kennwerte und die Grenzen von Linie, Balken und Kerze anhand eigener Bilder verstehen.',
    estimatedLessonCount: 20,
    load: () => import('./chapter-01').then((module) => module.chartsChapterOneLessons),
  }, {
    id: 'reading-charts.chapter-02', order: 2, kind: 'chapter', label: 'Kapitel 2', title: 'Linien, Balken und Kerzen sicher vergleichen',
    description: 'Gleiche Daten in verschiedenen Bildern lesen, Preisbezüge trennen und Körperanteile, Schlusslage sowie Spannenüberlappung prüfen.',
    estimatedLessonCount: 20,
    load: () => import('./chapter-02').then(module => module.chartsChapterTwoLessons),
  }],
  glossary: { title: 'Charts-Glossar', entries: chartsGlossary },
};

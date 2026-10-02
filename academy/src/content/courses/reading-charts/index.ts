import type { CourseDefinition } from '../../registry';
import { chartsGlossary } from './glossary';
export const chartsDefinition: CourseDefinition = {
  info: {
    id: 'reading-charts', eyebrow: 'Trading von null · Kapitel 1–3 verfügbar', title: 'Charts lesen',
    subtitle: 'Lerne, welche Daten ein Chart zeigt und welche Angaben im Bild fehlen. Kapitel 1–3 verbinden Geschäftsdaten mit Charts und erklären Linien, Balken, Kerzen sowie Zeit-, Tick- und Volumen-Gruppierungen.',
    sourceOrderNotice: 'Kapitel 1–3 sind verfügbar. Die weiteren sieben Kapitel werden schrittweise ergänzt. Du kannst ohne andere abgeschlossene Kurse beginnen.',
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
  }, {
    id: 'reading-charts.chapter-03', order: 3, kind: 'chapter', label: 'Kapitel 3', title: 'Zeit-Bars, Tick-Bars und Volumen-Bars',
    description: 'Zwölf eigene Geschäfte nach Zeit, Meldungszahl und Menge gruppieren; Schwellen, offene Reste und Datenanforderungen prüfen.',
    estimatedLessonCount: 24,
    load: () => import('./chapter-03').then(module => module.chartsChapterThreeLessons),
  }],
  glossary: { title: 'Charts-Glossar', entries: chartsGlossary },
};

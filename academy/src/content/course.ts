import { introductionLessons } from './courses/brooks-trends/introduction';
import { partOneLessons } from './courses/brooks-trends/part-01';
import type { Course, Lesson } from './types';

const planned = (
  id: string,
  title: string,
  summary: string,
  sourceUnit: string,
): Lesson => ({
  id,
  title,
  summary,
  durationMinutes: 0,
  xp: 0,
  sourceUnit,
  status: 'planned',
  steps: [],
});

const chapterOneLessons: Lesson[] = [
  {
    id: 'brooks-trends.chapter-01.lesson-01',
    title: 'Ein Spektrum, keine Schubladen',
    summary: 'Wie Trends kleinere Ranges und Ranges kleinere Trends enthalten.',
    durationMinutes: 8,
    xp: 30,
    sourceUnit: 'Kapitel 1',
    status: 'published',
    steps: [
      {
        id: 'chapter-01-spectrum-explain',
        type: 'explanation',
        eyebrow: 'Kapitel 1',
        title: 'Marktverhalten besitzt viele Zwischenstufen',
        paragraphs: [
          'Ein extremer Trend mit fast ununterbrochener Bewegung und eine extrem enge Trading Range sind seltene Endpunkte. Die meisten Charts liegen irgendwo dazwischen: ein Trend mit deutlichen Pullbacks, ein breiter Channel oder eine Range mit kräftigen einzelnen Beinen.',
          'Die Einordnung hängt außerdem vom Zeitrahmen ab. Was auf dem Fünf-Minuten-Chart wie ein vollständiger Abwärtstrend aussieht, kann auf dem Stundenchart nur ein Rücksetzer sein. Umgekehrt besteht eine mehrstündige Range aus vielen kleinen Trends.',
          'Deshalb ist die nützlichere Frage nicht nur „Trend oder Range?“, sondern: Wie trendstark oder wie zweiseitig ist der Markt gerade, und verändert sich dieser Zustand?',
        ],
        callout:
          'Regime ist eine abgestufte Einschätzung. Die Mitte des Spektrums ist häufiger als seine Extreme.',
      },
      {
        id: 'chapter-01-spectrum-diagram',
        type: 'diagram',
        title: 'Trendstärke nimmt ab, Überlappung nimmt zu',
        scenario: 'trend-range-transition',
        caption:
          'Der Verlauf beginnt gerichtet, wird zweiseitiger und verlässt die Balance später mit einem neuen Impuls.',
        observations: [
          'Große Körper und geringe Überlappung liegen näher am Trendextrem.',
          'Mehr Tails und Rückläufe verschieben den Markt Richtung Range.',
          'Ein Ausbruch zählt erst dann als neuer Trend, wenn Anschluss und Preisakzeptanz folgen.',
        ],
      },
      {
        id: 'chapter-01-spectrum-question',
        type: 'question',
        title: 'Welche Beschreibung ist präziser?',
        prompt:
          'Ein Markt steigt insgesamt, besitzt aber tiefe, überlappende Rücksetzer und häufige Gegenbewegungen. Wie würdest du ihn zunächst beschreiben?',
        options: [
          {
            id: 'extreme',
            label: 'Extrem starker Trend',
            explanation:
              'Tiefe Rücksetzer und starke Überlappung sprechen gegen das Trendextrem.',
          },
          {
            id: 'broad',
            label: 'Breiter bullischer Channel',
            explanation:
              'Richtig. Die übergeordnete Richtung ist aufwärts, gleichzeitig bleibt der Handel deutlich zweiseitig.',
          },
          {
            id: 'flat',
            label: 'Vollständig richtungslose Range',
            explanation:
              'Die steigende Gesamtstruktur enthält weiterhin gerichtete Information.',
          },
        ],
        correctOptionId: 'broad',
      },
      {
        id: 'chapter-01-spectrum-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Trend und Range sind Endpunkte eines Spektrums.',
          'Jeder Zeitrahmen kann eine andere Ebene derselben Struktur zeigen.',
          'Überlappung, Pullbacktiefe und Anschlussbewegung helfen bei der Abstufung.',
        ],
      },
    ],
  },
  planned(
    'brooks-trends.chapter-01.lesson-02',
    'Marktträgheit praktisch lesen',
    'Warum Trends Fortsetzung und Ranges Rückkehr begünstigen.',
    'Kapitel 1',
  ),
  planned(
    'brooks-trends.chapter-01.lesson-03',
    'Struktur über mehrere Zeitebenen',
    'Trend, Pullback und Range gleichzeitig richtig einordnen.',
    'Kapitel 1',
  ),
];

export const brooksTrendsCourse: Course = {
  id: 'brooks-trends',
  eyebrow: 'Buch 1 von 3 · Price Action',
  title: 'Trading Price Action Trends',
  subtitle:
    'Lerne, Kursbewegungen als fortlaufende Auktion zu lesen – vom einzelnen Bar bis zum vollständigen Trendtag.',
  sourceOrderNotice:
    'Der Lernpfad folgt der Reihenfolge des Buches. Kleine Lektionen ersetzen keine Inhalte, sondern machen sie schrittweise zugänglich.',
  units: [
    {
      id: 'brooks-trends.introduction',
      order: 1,
      kind: 'introduction',
      label: 'Einleitung',
      title: 'Wie Price Action gedacht wird',
      description:
        'Marktlogik, Wahrscheinlichkeit, Disziplin, Stärkezeichen und die grundlegende High-/Low-Zählung in der Reihenfolge der Quelle.',
      estimatedLessonCount: 22,
      lessons: introductionLessons,
    },
    {
      id: 'brooks-trends.part-01-introduction',
      order: 2,
      kind: 'part-introduction',
      label: 'Teil I · Price Action',
      title: 'Price Action als Entscheidungsmodell',
      description:
        'Vom einzelnen Tick über Trend- und Range-Entscheidungen bis zu institutioneller Ausführung, HFT, Pullback-Zählung und einer konkreten Trainingsmethode.',
      estimatedLessonCount: 24,
      lessons: partOneLessons,
    },
    {
      id: 'brooks-trends.chapter-01',
      order: 3,
      kind: 'chapter',
      label: 'Kapitel 1',
      title: 'Das Spektrum von Trend bis Range',
      description:
        'Charts bewegen sich nicht zwischen zwei starren Schubladen, sondern auf einem Kontinuum.',
      estimatedLessonCount: 5,
      lessons: chapterOneLessons,
    },
  ],
};

export const publishedLessons = brooksTrendsCourse.units.flatMap((unit) =>
  unit.lessons.filter((lesson) => lesson.status === 'published'),
);

export const publishedLessonIds = publishedLessons.map((lesson) => lesson.id);

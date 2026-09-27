import { introductionLessons } from './courses/brooks-trends/introduction';
import { partOneLessons } from './courses/brooks-trends/part-01';
import { chapterOneLessons } from './courses/brooks-trends/chapter-01';
import { chapterTwoLessons } from './courses/brooks-trends/chapter-02';
import type { Course } from './types';

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
        'Extremzustände, Marktträgheit, zweibeinige Bewegungen und Trendwiederaufnahme am zentralen Chartfall.',
      estimatedLessonCount: 8,
      lessons: chapterOneLessons,
    },
    {
      id: 'brooks-trends.chapter-02',
      order: 4,
      kind: 'chapter',
      label: 'Kapitel 2',
      title: 'Trendbars, Dojis und Klimaxe',
      description:
        'Kontrolle im einzelnen Bar, Follow-through, kumulativer Druck, Klimaxlogik und alle sechs Chartfälle in der Reihenfolge des Buches.',
      estimatedLessonCount: 20,
      lessons: chapterTwoLessons,
    },
  ],
};

export const publishedLessons = brooksTrendsCourse.units.flatMap((unit) =>
  unit.lessons.filter((lesson) => lesson.status === 'published'),
);

export const publishedLessonIds = publishedLessons.map((lesson) => lesson.id);
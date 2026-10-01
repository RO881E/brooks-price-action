import type { Lesson } from '../../types';

/* Lektionen des Testkurses (nur Modus `e2e`). Schritt-IDs tragen das Kurspräfix, damit sie eindeutig bleiben. */
export const testCourseLessons: Lesson[] = [
  {
    id: 'test-course.unit-01.lesson-01',
    title: 'Erste Testlektion',
    summary: 'Ein eigener Kurs hat einen eigenen Lernpfad.',
    durationMinutes: 2,
    xp: 10,
    sourceUnit: 'Testkurs · Kapitel 1',
    status: 'published',
    steps: [
      {
        id: 'test-course-01-explain',
        type: 'explanation',
        title: 'Jeder Kurs ist eine eigene Lernreise',
        paragraphs: ['Lernpfad, Wiederholung und Fortschritt gehören zum Kurs. Lerntage und XP zählen für alle Kurse gemeinsam.'],
      },
      {
        id: 'test-course-01-question',
        type: 'question',
        title: 'Was gehört zum Kurs?',
        prompt: 'Welche Aussage über mehrere Kurse stimmt?',
        options: [
          { id: 'own', label: 'Jeder Kurs hat seinen eigenen Fortschritt.', explanation: 'Richtig. Lerntage und XP zählen trotzdem gemeinsam.' },
          { id: 'shared', label: 'Alle Kurse teilen sich einen Lernpfad.', explanation: 'Nein. Jeder Kurs hat seinen eigenen Lernpfad.' },
        ],
        correctOptionId: 'own',
      },
      {
        id: 'test-course-01-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: ['Jeder Kurs hat einen eigenen Lernpfad.', 'Lerntage und XP gelten für alle Kurse.'],
      },
    ],
  },
  {
    id: 'test-course.unit-01.lesson-02',
    title: 'Zweite Testlektion',
    summary: 'Zwischen Kursen wechseln, ohne etwas zu verlieren.',
    durationMinutes: 2,
    xp: 10,
    sourceUnit: 'Testkurs · Kapitel 1',
    status: 'published',
    steps: [
      {
        id: 'test-course-02-explain',
        type: 'explanation',
        title: 'Wechseln ist jederzeit möglich',
        paragraphs: ['Wer den Kurs wechselt, findet beim Zurückkommen alles so vor, wie es war.'],
      },
      {
        id: 'test-course-02-question',
        type: 'question',
        title: 'Was passiert beim Wechseln?',
        prompt: 'Du wechselst in einen anderen Kurs. Was geschieht mit dem Fortschritt im ersten Kurs?',
        options: [
          { id: 'kept', label: 'Er bleibt erhalten.', explanation: 'Richtig. Jeder Kurs behält seinen Stand.' },
          { id: 'lost', label: 'Er wird gelöscht.', explanation: 'Nein. Beim Wechseln geht nichts verloren.' },
        ],
        correctOptionId: 'kept',
      },
      {
        id: 'test-course-02-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: ['Beim Wechseln bleibt jeder Kurs, wie er war.'],
      },
    ],
  },
];

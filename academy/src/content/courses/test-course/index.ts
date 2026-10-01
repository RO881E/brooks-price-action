import type { LibrarySubject } from '../../library';
import type { CourseDefinition } from '../../registry';
import { testCourseLessons } from './lessons';

/*
 * Testkurs – nur für die Browser-Tests der Mehrkurs-Technik (Vite-Modus `e2e`). In der veröffentlichten App
 * ist er nicht enthalten. Er hat ein Kapitel mit zwei kurzen Lektionen und eine eigene Bibliothekskarte.
 * Die Lektionen sind bewusst statisch eingebunden: Ein dynamischer Import erzeugte auch im normalen Build
 * einen eigenen Chunk, obwohl der Kurs dort gar nicht vorkommt.
 */
export const TEST_COURSE_ID = 'test-course';

export const testCourseDefinition: CourseDefinition = {
  info: {
    id: TEST_COURSE_ID,
    eyebrow: 'Testkurs · nur für automatische Tests',
    title: 'Testkurs: Grundgerüst',
    subtitle: 'Ein kleiner Kurs, mit dem die Tests das Starten und Wechseln von Kursen prüfen.',
    sourceOrderNotice: 'Diesen Kurs gibt es nur in der Testumgebung.',
  },
  units: [
    {
      id: `${TEST_COURSE_ID}.unit-01`,
      order: 1,
      kind: 'chapter',
      label: 'Kapitel 1',
      title: 'Erste Schritte im Testkurs',
      description: 'Zwei kurze Lektionen mit je einer Frage.',
      estimatedLessonCount: 2,
      load: () => Promise.resolve(testCourseLessons),
    },
  ],
};

export const testLibrarySubject: LibrarySubject = {
  id: 'test-subject',
  title: 'Testgebiet',
  description: 'Nur in der Testumgebung sichtbar: ein Gebiet mit einem kleinen Testkurs.',
  exercises: 'Fragen.',
  courses: [
    {
      id: TEST_COURSE_ID,
      title: 'Testkurs: Grundgerüst',
      description: 'Zwei kurze Lektionen, um das Starten und Wechseln von Kursen zu prüfen.',
      status: 'available',
      subtopics: ['Erste Testlektion', 'Zweite Testlektion'],
    },
  ],
};

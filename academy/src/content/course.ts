import { courseInfo, unitDefinitions } from './units';
import type { Course } from './types';

/*
 * Der vollständige Kurs mit allen Lehrtexten. Nur für Tests und für die
 * Build-Erzeugung der Gliederung – die App selbst importiert diese Datei nicht,
 * sondern lädt Kapitel über `catalog.ts` bei Bedarf (F-12).
 */
const lessonsByUnit = await Promise.all(unitDefinitions.map((unit) => unit.load()));

export const brooksTrendsCourse: Course = {
  ...courseInfo,
  units: unitDefinitions.map(({ load: _load, ...unit }, index) => ({
    ...unit,
    lessons: lessonsByUnit[index],
  })),
};

export const publishedLessons = brooksTrendsCourse.units.flatMap((unit) =>
  unit.lessons.filter((lesson) => lesson.status === 'published'),
);

export const publishedLessonIds = publishedLessons.map((lesson) => lesson.id);

import { baseCourseDefinitions, testCourseDefinitions, type CourseDefinition } from './registry';
import type { Course } from './types';

/*
 * Alle Kurse des Registers vollständig mit Lehrtexten. Nur für Tests und für die
 * Build-Erzeugung der Gliederungen – die App selbst lädt Kapitel über
 * `catalog.ts` bei Bedarf (F-12).
 */
async function fullCourse({ info, units }: CourseDefinition): Promise<Course> {
  const lessons = await Promise.all(units.map((unit) => unit.load()));
  return { ...info, units: units.map(({ load: _load, ...unit }, index) => ({ ...unit, lessons: lessons[index] })) };
}

/** Kurse der veröffentlichten App. */
export const baseCourses: Course[] = await Promise.all(baseCourseDefinitions.map(fullCourse));

/** Nur in den Browser-Tests (Modus `e2e`). */
export const testCourses: Course[] = await Promise.all(testCourseDefinitions.map(fullCourse));

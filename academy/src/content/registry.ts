import { glossaryEntries, type GlossaryEntry } from './glossary';
import type { LibrarySubject } from './library';
import type { Course } from './types';
import { courseInfo, unitDefinitions, type UnitDefinition } from './units';
import { testCourseDefinition, testLibrarySubject } from './courses/test-course';

/*
 * Kursregister: alle Kurse mit Inhalt. Jeder Kurs hat eigene Einheiten (mit Ladefunktion je Kapitel) und
 * einen eigenen Lernpfad; die Bibliothek (`library.ts`) kennt zusätzlich die geplanten Kurse ohne Inhalt.
 * Kurs-, Einheiten- und Lektions-IDs sind über alle Kurse hinweg eindeutig (Präfix = Kurs-ID), Schritt-IDs
 * ebenso (Test `registry.test.ts`). Neuer Kurs: Definition hier eintragen und in der Bibliothek auf
 * „verfügbar“ setzen.
 */

export interface CourseGlossary {
  /** Überschrift der Glossar-Ansicht. */
  title: string;
  entries: GlossaryEntry[];
}

export interface CourseDefinition {
  info: Omit<Course, 'units'>;
  units: UnitDefinition[];
  /** Begriffe des Kurses (Glossar, Suche, Begriffe-Memory); ohne Angabe hat der Kurs noch keine. */
  glossary?: CourseGlossary;
}

/** Kurse der veröffentlichten App. Der erste ist der Standardkurs. */
export const baseCourseDefinitions: CourseDefinition[] = [
  { info: courseInfo, units: unitDefinitions, glossary: { title: 'Price-Action-Glossar', entries: glossaryEntries } },
];

/** Nur in den Browser-Tests (Modus `e2e`): ein kleiner Testkurs, um mehrere Kurse zu prüfen. */
export const testCourseDefinitions: CourseDefinition[] = [testCourseDefinition];

/** Der Kurs, mit dem die App beginnt, solange noch kein anderer gewählt ist. */
export const DEFAULT_COURSE_ID = courseInfo.id;

/** Alle Kurse dieser App-Variante; den Testkurs gibt es nur im Modus `e2e`. */
export const courseDefinitions: CourseDefinition[] =
  import.meta.env.MODE === 'e2e' ? [...baseCourseDefinitions, ...testCourseDefinitions] : baseCourseDefinitions;

/** Zusätzliche Bibliotheksgebiete dieser App-Variante (nur das Testgebiet im Modus `e2e`). */
export const extraLibrarySubjects: LibrarySubject[] = import.meta.env.MODE === 'e2e' ? [testLibrarySubject] : [];

const EMPTY_GLOSSARY: CourseGlossary = { title: 'Glossar', entries: [] };

/** Glossar eines Kurses; Kurse ohne eigene Begriffe haben ein leeres Glossar. */
export function glossaryFor(courseId: string, definitions: readonly CourseDefinition[] = courseDefinitions): CourseGlossary {
  return definitions.find((definition) => definition.info.id === courseId)?.glossary ?? EMPTY_GLOSSARY;
}

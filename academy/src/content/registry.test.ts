import { describe, expect, it } from 'vitest';
import { checkContent, formatReport, snapshotKnownIds } from '../../build/contentCheck';
import { toCourseOutline } from '../../build/courseOutline';
import { chartDescription, chartScenarioIds } from '../components/LearningChart';
import { baseCourses, testCourses } from './allCourses';
import {
  allCoursesOutline,
  courseOfLesson,
  courseOfUnit,
  courseOutlineFor,
  courseOutlines,
  defaultCourseOutline,
  findCourseOutline,
  unitIdOfLesson,
} from './catalog';
import { TEST_COURSE_ID, testLibrarySubject } from './courses/test-course';
import { librarySubjects, validateLibrary } from './library';
import {
  baseCourseDefinitions,
  courseDefinitions,
  DEFAULT_COURSE_ID,
  extraLibrarySubjects,
  testCourseDefinitions,
} from './registry';
import type { ChartScenarioId } from './types';

const everyCourse = [...baseCourses, ...testCourses];

describe('Kursregister (mehrere Kurse)', () => {
  it('der Standardkurs ist der erste Kurs der App', () => {
    expect(baseCourses[0].id).toBe(DEFAULT_COURSE_ID);
    expect(defaultCourseOutline.id).toBe(DEFAULT_COURSE_ID);
    expect(testCourses.map((course) => course.id)).toEqual([TEST_COURSE_ID]);
  });

  it('IDs sind über alle Kurse eindeutig und tragen das Präfix ihres Kurses', () => {
    const seen = new Set<string>();
    const claim = (id: string) => {
      expect(seen.has(id), `doppelte ID ${id}`).toBe(false);
      seen.add(id);
    };
    for (const course of everyCourse) {
      claim(course.id);
      for (const unit of course.units) {
        claim(unit.id);
        expect(unit.id.startsWith(`${course.id}.`), unit.id).toBe(true);
        for (const lesson of unit.lessons) {
          claim(lesson.id);
          expect(lesson.id.startsWith(`${course.id}.`), lesson.id).toBe(true);
          lesson.steps.forEach((step) => claim(step.id));
        }
      }
    }
  });

  it('ohne Modus e2e enthält die App nur die veröffentlichten Kurse', () => {
    expect(courseDefinitions).toEqual(baseCourseDefinitions);
    expect(extraLibrarySubjects).toEqual([]);
    expect(courseOutlines.map((course) => course.id)).toEqual(baseCourses.map((course) => course.id));
    expect(courseOutlines.map((course) => course.id)).not.toContain(TEST_COURSE_ID);
  });

  it('die Gliederungen aus dem Build passen zu den vollständigen Kursen', () => {
    expect(courseOutlines).toEqual(baseCourses.map(toCourseOutline));
  });

  it('die Bibliothek führt jeden Kurs mit Inhalt als verfügbar – auch mit dem Testgebiet', () => {
    expect(validateLibrary(librarySubjects, DEFAULT_COURSE_ID, baseCourses.map((course) => course.id))).toEqual([]);
    expect(
      validateLibrary([...librarySubjects, testLibrarySubject], DEFAULT_COURSE_ID, everyCourse.map((course) => course.id)),
    ).toEqual([]);
  });

  it('der Testkurs besteht die Strukturprüfung der Inhalte', () => {
    const [testCourse] = testCourses;
    const report = checkContent({
      course: testCourse,
      glossary: [],
      scenarioIds: chartScenarioIds(),
      describe: (scenario) => chartDescription(scenario as ChartScenarioId),
      caseIssues: [],
      known: snapshotKnownIds(testCourse),
    });
    expect(report.errors, formatReport(report)).toBe(0);
  });

  it('die Lektionen des Testkurses laden je Einheit wie im Katalog', async () => {
    const [definition] = testCourseDefinitions;
    const lessons = await definition.units[0].load();
    expect(lessons.map((lesson) => lesson.id)).toEqual(testCourses[0].units[0].lessons.map((lesson) => lesson.id));
  });

  it('findet Kurs zu Lektion und Einheit; ohne gültige Wahl gilt der Standardkurs', () => {
    const unit = defaultCourseOutline.units[0];
    const lesson = unit.lessons[0];
    expect(unitIdOfLesson(lesson.id)).toBe(unit.id);
    expect(courseOfLesson(lesson.id)?.id).toBe(DEFAULT_COURSE_ID);
    expect(courseOfUnit(unit.id)?.id).toBe(DEFAULT_COURSE_ID);
    expect(courseOfLesson('unbekannt')).toBeUndefined();
    expect(courseOfUnit('unbekannt')).toBeUndefined();

    expect(findCourseOutline(DEFAULT_COURSE_ID)).toBe(defaultCourseOutline);
    expect(findCourseOutline('unbekannt')).toBeUndefined();
    expect(findCourseOutline(null)).toBeUndefined();
    expect(courseOutlineFor('unbekannt')).toBe(defaultCourseOutline);
    expect(courseOutlineFor(null)).toBe(defaultCourseOutline);
    expect(findCourseOutline(TEST_COURSE_ID, everyCourse.map(toCourseOutline))?.title).toBe('Testkurs: Grundgerüst');
  });

  it('die Gesamtgliederung enthält die Einheiten aller Kurse', () => {
    expect(allCoursesOutline.units.map((unit) => unit.id)).toEqual(
      courseOutlines.flatMap((course) => course.units.map((unit) => unit.id)),
    );
  });
});

describe('Glossar je Kurs', () => {
  it('der Standardkurs hat sein Glossar, andere Kurse beginnen leer', async () => {
    const { glossaryEntries } = await import('./glossary');
    const { glossaryFor, testCourseDefinitions: tests } = await import('./registry');
    expect(glossaryFor(DEFAULT_COURSE_ID)).toEqual({ title: 'Price-Action-Glossar', entries: glossaryEntries });
    expect(glossaryFor(TEST_COURSE_ID, [...baseCourseDefinitions, ...tests]).entries).toEqual([]);
    expect(glossaryFor('unbekannt').entries).toEqual([]);
  });
});

import outlines from 'virtual:wqt-course-outline';
import { useEffect, useSyncExternalStore } from 'react';
import { courseDefinitions, DEFAULT_COURSE_ID } from './registry';
import type { CourseOutline, Lesson, LessonOutline, LessonStep } from './types';
import type { UnitDefinition } from './units';

/*
 * Kurskatalog der App (F-12, mehrere Kurse). Die Gliederungen aller Kurse sind
 * sofort da – damit arbeiten Lernpfad, Freischaltung, Suche, Fortsetzen und
 * Statistik ohne Wartezeit. Die vollständigen Lektionen einer Einheit werden
 * erst geladen, wenn eine Ansicht sie wirklich anzeigt, und danach im Speicher
 * gehalten.
 */

/** Gliederungen aller Kurse mit Inhalt, in der Reihenfolge des Kursregisters. */
export const courseOutlines: readonly CourseOutline[] = outlines;

/** Gliederung eines Kurses – `undefined` für unbekannte Kurse und Kurse ohne Inhalt. */
export function findCourseOutline(
  courseId: string | null | undefined,
  available: readonly CourseOutline[] = courseOutlines,
): CourseOutline | undefined {
  return courseId ? available.find((course) => course.id === courseId) : undefined;
}

/** Der Kurs, mit dem die App beginnt, solange kein anderer gewählt ist. */
export const defaultCourseOutline: CourseOutline = findCourseOutline(DEFAULT_COURSE_ID) ?? courseOutlines[0];

/** Gliederung des gewählten Kurses; ohne gültige Wahl gilt der Standardkurs. */
export function courseOutlineFor(courseId: string | null | undefined): CourseOutline {
  return findCourseOutline(courseId) ?? defaultCourseOutline;
}

/**
 * Alle Kurse als eine Gliederung – nur für Fragen über Kursgrenzen hinweg
 * (Gespeichertes, XP, Meilensteine, Laden). Nicht für die Freischaltung:
 * Die Reihenfolge der Einheiten gilt immer nur innerhalb eines Kurses.
 */
export const allCoursesOutline: CourseOutline = {
  ...defaultCourseOutline,
  id: 'all-courses',
  title: 'Alle Kurse',
  units: courseOutlines.flatMap((course) => course.units),
};

/** Gliederung des Standardkurses (für Tests und Prüfskripte, die nur ihn betreffen). */
export const courseOutline: CourseOutline = defaultCourseOutline;

export function publishedLessonOutlinesOf(course: CourseOutline): LessonOutline[] {
  return course.units.flatMap((unit) => unit.lessons.filter((lesson) => lesson.status === 'published'));
}

export function publishedLessonIdsOf(course: CourseOutline): string[] {
  return publishedLessonOutlinesOf(course).map((lesson) => lesson.id);
}

/** Veröffentlichte Lektionen des Standardkurses. */
export const publishedLessonOutlines: LessonOutline[] = publishedLessonOutlinesOf(defaultCourseOutline);

export const publishedLessonIds = publishedLessonOutlines.map((lesson) => lesson.id);

const unitOfLessonId = new Map(
  allCoursesOutline.units.flatMap((unit) => unit.lessons.map((lesson) => [lesson.id, unit.id] as const)),
);

const courseOfUnitId = new Map(
  courseOutlines.flatMap((course) => course.units.map((unit) => [unit.id, course] as const)),
);

/** Einheit, zu der eine Lektion gehört – `undefined` für unbekannte IDs. */
export function unitIdOfLesson(lessonId: string): string | undefined {
  return unitOfLessonId.get(lessonId);
}

/** Kurs, zu dem eine Einheit gehört – `undefined` für unbekannte IDs. */
export function courseOfUnit(unitId: string): CourseOutline | undefined {
  return courseOfUnitId.get(unitId);
}

/** Kurs, zu dem eine Lektion gehört – `undefined` für unbekannte IDs. */
export function courseOfLesson(lessonId: string): CourseOutline | undefined {
  const unitId = unitIdOfLesson(lessonId);
  return unitId ? courseOfUnit(unitId) : undefined;
}

export type UnitLoadStatus = 'idle' | 'loading' | 'ready' | 'error';

export interface CatalogLoader {
  /** Liefert die vollständigen Lektionen einer Einheit. */
  load: (unitId: string) => Promise<Lesson[]>;
}

/**
 * Zustand der geladenen Einheiten. Als eigene Klasse, damit Tests eigene
 * Ladefunktionen (z. B. mit Fehlern) einsetzen können.
 */
export class LessonCatalog {
  private readonly lessons = new Map<string, Lesson>();
  private readonly status = new Map<string, UnitLoadStatus>();
  private readonly inflight = new Map<string, Promise<void>>();
  private readonly listeners = new Set<() => void>();
  private version = 0;

  constructor(
    private readonly outline: CourseOutline,
    private readonly loader: CatalogLoader,
  ) {}

  subscribe = (listener: () => void) => {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  };

  /** Ändert sich bei jedem Ladeereignis – für `useSyncExternalStore`. */
  getVersion = () => this.version;

  unitStatus(unitId: string): UnitLoadStatus {
    return this.status.get(unitId) ?? 'idle';
  }

  lesson(lessonId: string): Lesson | undefined {
    return this.lessons.get(lessonId);
  }

  /**
   * Lädt eine Einheit genau einmal; parallele Aufrufe teilen sich den Vorgang.
   * Ein Fehler wird gemerkt, bis ausdrücklich erneut geladen wird.
   */
  loadUnit(unitId: string): Promise<void> {
    if (this.unitStatus(unitId) === 'ready') return Promise.resolve();
    const running = this.inflight.get(unitId);
    if (running) return running;

    const expected = this.outline.units.find((unit) => unit.id === unitId);
    if (!expected) return Promise.reject(new Error(`Unbekannte Einheit: ${unitId}`));

    this.setStatus(unitId, 'loading');
    const task = this.loader
      .load(unitId)
      .then((lessons) => {
        // Inhalt und Gliederung müssen zusammenpassen – sonst lieber ein
        // verständlicher Fehler als eine Lektion mit falschen Schritten.
        const ids = lessons.map((lesson) => `${lesson.id}:${lesson.steps.map((step) => step.id).join(',')}`);
        const outlineIds = expected.lessons.map(
          (lesson) => `${lesson.id}:${lesson.steps.map((step) => step.id).join(',')}`,
        );
        if (ids.join('|') !== outlineIds.join('|')) {
          throw new Error(`Inhalt von ${unitId} passt nicht zur Gliederung.`);
        }
        for (const lesson of lessons) this.lessons.set(lesson.id, lesson);
        this.setStatus(unitId, 'ready');
      })
      .catch((error: unknown) => {
        this.setStatus(unitId, 'error');
        throw error;
      })
      .finally(() => {
        this.inflight.delete(unitId);
      });
    this.inflight.set(unitId, task);
    return task;
  }

  /** Lädt mehrere Einheiten; Fehler landen im Status, nicht als Ausnahme. */
  ensureUnits(unitIds: Iterable<string>): void {
    for (const unitId of new Set(unitIds)) {
      if (this.unitStatus(unitId) === 'idle') this.loadUnit(unitId).catch(() => undefined);
    }
  }

  /** Gesamtstatus mehrerer Einheiten: Fehler vor Laden vor Fertig. */
  combinedStatus(unitIds: Iterable<string>): UnitLoadStatus {
    let result: UnitLoadStatus = 'ready';
    for (const unitId of unitIds) {
      const status = this.unitStatus(unitId);
      if (status === 'error') return 'error';
      if (status !== 'ready') result = 'loading';
    }
    return result;
  }

  private setStatus(unitId: string, status: UnitLoadStatus) {
    this.status.set(unitId, status);
    this.version += 1;
    this.listeners.forEach((listener) => listener());
  }
}

function loaderFor(definitions: UnitDefinition[]): CatalogLoader {
  return {
    load: (unitId) => {
      const definition = definitions.find((unit) => unit.id === unitId);
      return definition ? definition.load() : Promise.reject(new Error(`Unbekannte Einheit: ${unitId}`));
    },
  };
}

/** Ein gemeinsamer Katalog für alle Kurse: Einheiten-IDs sind kursübergreifend eindeutig. */
export const catalog = new LessonCatalog(
  allCoursesOutline,
  loaderFor(courseDefinitions.flatMap((course) => course.units)),
);

export interface ContentState {
  status: UnitLoadStatus;
  /** Neu laden. Browser merken sich fehlgeschlagene Module, daher per Reload. */
  retry: () => void;
}

/**
 * Stellt sicher, dass die Einheiten der angegebenen Lektionen geladen sind,
 * und meldet den gemeinsamen Status. Unbekannte IDs werden ignoriert.
 */
export function useLessonContent(lessonIds: readonly string[], source: LessonCatalog = catalog): ContentState {
  useSyncExternalStore(source.subscribe, source.getVersion);
  const unitIds = [...new Set(lessonIds.map(unitIdOfLesson).filter((id): id is string => Boolean(id)))];
  const key = unitIds.join('|');

  useEffect(() => {
    // `key` fasst die Einheiten stabil zusammen; `unitIds` selbst ist je Render neu.
    source.ensureUnits(key === '' ? [] : key.split('|'));
  }, [key, source]);

  return {
    status: unitIds.length === 0 ? 'ready' : source.combinedStatus(unitIds),
    retry: () => window.location.reload(),
  };
}

export type FullQuestion = Extract<LessonStep, { type: 'question' }>;

/** Vollständige Frage, sofern ihre Einheit geladen ist. */
export function loadedQuestion(lessonId: string, questionId: string): FullQuestion | undefined {
  return catalog
    .lesson(lessonId)
    ?.steps.find((step): step is FullQuestion => step.type === 'question' && step.id === questionId);
}

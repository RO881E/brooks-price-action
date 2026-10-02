import type { CourseOutline, LessonOutline } from '../content/types';
import type { BarCase } from '../content/barCaseTypes';
import { caseAvailable, findPublishedCase } from './caseTraining';
import { lessonAccessState } from './courseAccess';
import { planTransfer } from './transferCheck';
import { isStepResolved } from './lessonResults';
import type { AcademyProgress } from './progress';

type AnswerData = Pick<AcademyProgress, 'answers' | 'questionResults'>;

export type AppView =
  | 'home'
  | 'path'
  | 'practice'
  | 'progress'
  | 'saved'
  | 'glossary'
  | 'library'
  | 'settings';

export const APP_VIEWS: readonly AppView[] = [
  'home',
  'path',
  'practice',
  'progress',
  'saved',
  'glossary',
  'library',
  'settings',
];

export type AppRoute =
  | {
      kind: 'view';
      view: AppView;
      /** Glossarbegriff für `#/glossary?term=…` (seit F-06). */
      term?: string;
    }
  | {
      kind: 'lesson';
      lessonId: string;
      /** Einsbasierter Schritt aus der URL; `null`, wenn keiner angegeben ist. */
      step: number | null;
    }
  | { kind: 'lesson-result'; lessonId: string }
  | {
      /** Bar-für-Bar-Trainer (seit F-15): `#/train/<case-id>`. */
      kind: 'train';
      caseId: string;
    }
  | {
      /** Kurz lernen (seit F-23): `#/study/10` oder `#/study/20`. */
      kind: 'study';
      minutes: 10 | 20;
    }
  | {
      /** Transferprüfung (seit F-17): `#/transfer`. */
      kind: 'transfer';
    }
  | {
      /** Rückblick auf eine abgeschlossene Runde (seit F-25): `#/train/<case-id>/review/<session-id>`. */
      kind: 'replay';
      caseId: string;
      sessionId: string;
    }
  | {
      /** Themengebiet der Bibliothek mit seinen Kursen (mehrere Kurse): `#/library/<gebiet-id>`. */
      kind: 'subject';
      subjectId: string;
    }
  | {
      /** Kursseite mit Beschreibung, Unterthemen und „Kurs starten“: `#/course/<kurs-id>`. */
      kind: 'course';
      courseId: string;
    };

export const DEFAULT_ROUTE: AppRoute = { kind: 'view', view: 'home' };

function isAppView(value: string): value is AppView {
  return (APP_VIEWS as readonly string[]).includes(value);
}

function parseStep(query: string): number | null {
  const raw = new URLSearchParams(query).get('step');
  if (raw === null || !/^\d+$/.test(raw)) return null;
  const step = Number.parseInt(raw, 10);
  return step >= 1 ? step : null;
}

/**
 * Liest einen Hash wie `#/glossary` oder `#/lesson/<id>?step=3`.
 * Ein leerer Hash ist die Startseite; alles Unbekannte ergibt `null`.
 */
export function parseRoute(hash: string): AppRoute | null {
  const trimmed = hash.replace(/^#/, '');
  if (trimmed === '' || trimmed === '/') return DEFAULT_ROUTE;
  if (!trimmed.startsWith('/')) return null;

  const [pathPart, query = ''] = trimmed.slice(1).split('?', 2);
  const segments = pathPart.split('/');

  if (segments.length === 1 && isAppView(segments[0])) {
    const term = segments[0] === 'glossary' ? new URLSearchParams(query).get('term')?.trim() : '';
    return term ? { kind: 'view', view: segments[0], term } : { kind: 'view', view: segments[0] };
  }

  if (segments.length === 1 && segments[0] === 'transfer') return { kind: 'transfer' };

  // Bibliotheksseiten (mehrere Kurse). Ob Gebiet oder Kurs existieren, prüft erst die Seite selbst:
  // Die Bibliotheksdaten werden mit ihr nachgeladen.
  if (segments.length === 2 && (segments[0] === 'library' || segments[0] === 'course') && segments[1] !== '') {
    let id: string;
    try {
      id = decodeURIComponent(segments[1]);
    } catch {
      return null;
    }
    return segments[0] === 'library' ? { kind: 'subject', subjectId: id } : { kind: 'course', courseId: id };
  }

  if (segments.length === 2 && segments[0] === 'study') {
    return segments[1] === '10' || segments[1] === '20' ? { kind: 'study', minutes: segments[1] === '10' ? 10 : 20 } : null;
  }

  if (segments.length === 4 && segments[0] === 'train' && segments[2] === 'review' && segments[1] && segments[3]) {
    try {
      return { kind: 'replay', caseId: decodeURIComponent(segments[1]), sessionId: decodeURIComponent(segments[3]) };
    } catch {
      return null;
    }
  }

  if (segments.length === 2 && segments[0] === 'train' && segments[1] !== '') {
    try {
      return { kind: 'train', caseId: decodeURIComponent(segments[1]) };
    } catch {
      return null;
    }
  }

  const isResult = segments.length === 3 && segments[2] === 'result';
  if ((segments.length === 2 || isResult) && segments[0] === 'lesson' && segments[1] !== '') {
    let lessonId: string;
    try {
      lessonId = decodeURIComponent(segments[1]);
    } catch {
      return null;
    }
    return isResult
      ? { kind: 'lesson-result', lessonId }
      : { kind: 'lesson', lessonId, step: parseStep(query) };
  }

  return null;
}

export function formatRoute(route: AppRoute): string {
  if (route.kind === 'view') {
    return route.term && route.view === 'glossary'
      ? `#/glossary?term=${encodeURIComponent(route.term)}`
      : `#/${route.view}`;
  }
  if (route.kind === 'train') return `#/train/${encodeURIComponent(route.caseId)}`;
  if (route.kind === 'subject') return `#/library/${encodeURIComponent(route.subjectId)}`;
  if (route.kind === 'course') return `#/course/${encodeURIComponent(route.courseId)}`;
  if (route.kind === 'study') return `#/study/${route.minutes}`;
  if (route.kind === 'transfer') return '#/transfer';
  if (route.kind === 'replay') {
    return `#/train/${encodeURIComponent(route.caseId)}/review/${encodeURIComponent(route.sessionId)}`;
  }
  const base = `#/lesson/${encodeURIComponent(route.lessonId)}`;
  if (route.kind === 'lesson-result') return `${base}/result`;
  return route.step === null ? base : `${base}?step=${route.step}`;
}

/**
 * Höchster Schritt, der ohne Überspringen einer offenen Frage erreichbar ist.
 * Eine Frage ist erst erledigt, wenn sie richtig beantwortet oder ihre Lösung
 * aufgedeckt wurde – wie die Sperre der „Weiter“-Schaltfläche im LessonOutline Player.
 */
export function maxReachableStepIndex(lesson: LessonOutline, data: AnswerData): number {
  const blocking = lesson.steps.findIndex((step) => !isStepResolved(step, data));
  return blocking === -1 ? lesson.steps.length - 1 : blocking;
}

export function clampStepIndex(lesson: LessonOutline, data: AnswerData, stepIndex: number): number {
  if (!Number.isInteger(stepIndex) || stepIndex < 0) return 0;
  return Math.min(stepIndex, maxReachableStepIndex(lesson, data));
}

export function findLesson(course: CourseOutline, lessonId: string): LessonOutline | undefined {
  return course.units
    .flatMap((unit) => unit.lessons)
    .find((lesson) => lesson.id === lessonId);
}

/** Ob eine Lektion geöffnet werden darf (veröffentlicht und freigeschaltet). */
export function canOpenLesson(
  course: CourseOutline,
  lesson: LessonOutline,
  progress: AcademyProgress,
): boolean {
  const state = lessonAccessState(course, lesson, progress.completedLessonIds);
  return state === 'available' || state === 'complete';
}

/**
 * Schritt, mit dem eine Lektion beim normalen Öffnen startet: Begonnene
 * Lektionen setzen am gespeicherten Schritt fort, alle anderen starten vorn.
 */
export function startStepIndex(lesson: LessonOutline, progress: AcademyProgress): number {
  const saved = progress.lessonPositions[lesson.id];
  if (!saved || progress.completedLessonIds.includes(lesson.id)) return 0;
  return clampStepIndex(lesson, progress, saved.stepIndex);
}

export type ResolvedRoute =
  | { kind: 'view'; view: AppView; term?: string }
  | { kind: 'lesson'; lesson: LessonOutline; stepIndex: number }
  | { kind: 'lesson-result'; lesson: LessonOutline }
  | { kind: 'train'; barCase: BarCase }
  // Die Prüfung der Runde (abgeschlossen, passend) übernimmt `buildReplay` – mit klarer Meldung.
  | { kind: 'replay'; caseId: string; sessionId: string }
  | { kind: 'study'; minutes: 10 | 20 }
  // Nur, wenn es freigegebene Transferfälle gibt – sonst zurück zum Lernpfad.
  | { kind: 'transfer' }
  // Bibliotheksseiten: unbekannte Gebiete und Kurse meldet die Seite selbst.
  | { kind: 'subject'; subjectId: string }
  | { kind: 'course'; courseId: string };

/** Kurs, zu dem eine Einheit gehört – unter mehreren Kursen. */
export function courseWithUnit(courses: readonly CourseOutline[], unitId: string): CourseOutline | undefined {
  return courses.find((course) => course.units.some((unit) => unit.id === unitId));
}

/** Kurs, zu dem eine Lektion gehört – unter mehreren Kursen. */
export function courseWithLesson(courses: readonly CourseOutline[], lessonId: string): CourseOutline | undefined {
  return courses.find((course) => findLesson(course, lessonId) !== undefined);
}

/**
 * Prüft eine Route gegen Kurs und Fortschritt. Unbekannte, geplante oder
 * gesperrte Lektionen ergeben `null` – der Aufrufer fällt auf den Lernpfad
 * zurück. Ein ungültiger Schritt wird auf den letzten gültigen begrenzt. Die
 * Abschlussansicht gibt es nur für bereits abgeschlossene Lektionen.
 *
 * Mehrere Kurse: Lektionen, Leser und Fälle werden in **ihrem** Kurs geprüft
 * (`courses`), damit Links und Verlauf auch nach einem Kurswechsel funktionieren.
 * Transferprüfung und „Kurz lernen“ gehören zum gewählten Kurs `course`.
 */
export function resolveRoute(
  route: AppRoute,
  course: CourseOutline,
  progress: AcademyProgress,
  courses: readonly CourseOutline[] = [course],
): ResolvedRoute | null {
  if (route.kind === 'view' || route.kind === 'subject' || route.kind === 'course') return route;
  if (route.kind === 'train') {
    // Nur freigegebene Fälle, deren Lektionen bereits zugänglich sind.
    const barCase = findPublishedCase(route.caseId);
    const owner = barCase ? courseWithUnit(courses, barCase.unitId) : undefined;
    return barCase && owner && caseAvailable(owner, progress, barCase) ? { kind: 'train', barCase } : null;
  }
  if (route.kind === 'replay' || route.kind === 'study') return route;
  if (route.kind === 'transfer') return planTransfer(course, progress).approved > 0 ? route : null;
  const owner = courseWithLesson(courses, route.lessonId) ?? course;
  const lesson = findLesson(owner, route.lessonId);
  if (!lesson || lesson.steps.length === 0 || !canOpenLesson(owner, lesson, progress)) {
    return null;
  }

  if (route.kind === 'lesson-result') {
    return progress.completedLessonIds.includes(lesson.id)
      ? { kind: 'lesson-result', lesson }
      : null;
  }

  const stepIndex =
    route.step === null
      ? startStepIndex(lesson, progress)
      : clampStepIndex(lesson, progress, route.step - 1);

  return { kind: 'lesson', lesson, stepIndex };
}

export interface ResumeTarget {
  lesson: LessonOutline;
  stepIndex: number;
}

/**
 * Die zuletzt bearbeitete, noch offene und weiterhin zugängliche Lektion –
 * Grundlage für „Weiterlernen“. Ohne begonnene Lektion gibt es kein Ziel.
 */
export function resumeTarget(
  course: CourseOutline,
  progress: AcademyProgress,
): ResumeTarget | undefined {
  const candidates = Object.entries(progress.lessonPositions)
    .sort(([, a], [, b]) => b.updatedAt.localeCompare(a.updatedAt));

  for (const [lessonId] of candidates) {
    const lesson = findLesson(course, lessonId);
    if (!lesson || progress.completedLessonIds.includes(lessonId)) continue;
    if (!canOpenLesson(course, lesson, progress)) continue;
    return { lesson, stepIndex: startStepIndex(lesson, progress) };
  }

  return undefined;
}

import type { CourseOutline, LessonOutline } from '../content/types';
import type { BarCase } from '../content/barCaseTypes';
import { caseAvailable, findPublishedCase } from './caseTraining';
import { lessonAccessState } from './courseAccess';
import { isStepResolved } from './lessonResults';
import { resolveReader, type ResolvedReader } from './reader';
import type { AcademyProgress } from './progress';

type AnswerData = Pick<AcademyProgress, 'answers' | 'questionResults'>;

export type AppView =
  | 'path'
  | 'chapters'
  | 'practice'
  | 'progress'
  | 'saved'
  | 'glossary'
  | 'settings';

export const APP_VIEWS: readonly AppView[] = [
  'path',
  'chapters',
  'practice',
  'progress',
  'saved',
  'glossary',
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
      /** Buchleser (seit F-13): `#/read/<unit-id>?lesson=<lesson-id>&step=<n>`. */
      kind: 'read';
      unitId: string;
      lessonId: string | null;
      step: number | null;
    }
  | {
      /** Bar-für-Bar-Trainer (seit F-15): `#/train/<case-id>`. */
      kind: 'train';
      caseId: string;
    }
  | {
      /** Rückblick auf eine abgeschlossene Runde (seit F-25): `#/train/<case-id>/review/<session-id>`. */
      kind: 'replay';
      caseId: string;
      sessionId: string;
    };

export const DEFAULT_ROUTE: AppRoute = { kind: 'view', view: 'path' };

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
 * Ein leerer Hash ist der Lernpfad; alles Unbekannte ergibt `null`.
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

  if (segments.length === 2 && segments[0] === 'read' && segments[1] !== '') {
    let unitId: string;
    try {
      unitId = decodeURIComponent(segments[1]);
    } catch {
      return null;
    }
    const lessonId = new URLSearchParams(query).get('lesson')?.trim() || null;
    return { kind: 'read', unitId, lessonId, step: lessonId ? parseStep(query) : null };
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
  if (route.kind === 'replay') {
    return `#/train/${encodeURIComponent(route.caseId)}/review/${encodeURIComponent(route.sessionId)}`;
  }
  if (route.kind === 'read') {
    const base = `#/read/${encodeURIComponent(route.unitId)}`;
    if (!route.lessonId) return base;
    const lesson = `${base}?lesson=${encodeURIComponent(route.lessonId)}`;
    return route.step === null ? lesson : `${lesson}&step=${route.step}`;
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
  | { kind: 'read'; reader: ResolvedReader }
  | { kind: 'train'; barCase: BarCase }
  // Die Prüfung der Runde (abgeschlossen, passend) übernimmt `buildReplay` – mit klarer Meldung.
  | { kind: 'replay'; caseId: string; sessionId: string };

/**
 * Prüft eine Route gegen Kurs und Fortschritt. Unbekannte, geplante oder
 * gesperrte Lektionen ergeben `null` – der Aufrufer fällt auf den Lernpfad
 * zurück. Ein ungültiger Schritt wird auf den letzten gültigen begrenzt. Die
 * Abschlussansicht gibt es nur für bereits abgeschlossene Lektionen.
 */
export function resolveRoute(
  route: AppRoute,
  course: CourseOutline,
  progress: AcademyProgress,
): ResolvedRoute | null {
  if (route.kind === 'view') return route;
  if (route.kind === 'train') {
    // Nur freigegebene Fälle, deren Lektionen bereits zugänglich sind.
    const barCase = findPublishedCase(route.caseId);
    return barCase && caseAvailable(course, progress, barCase) ? { kind: 'train', barCase } : null;
  }
  if (route.kind === 'replay') return route;
  if (route.kind === 'read') {
    const reader = resolveReader(course, progress, route.unitId, route.lessonId, route.step);
    return reader ? { kind: 'read', reader } : null;
  }

  const lesson = findLesson(course, route.lessonId);
  if (!lesson || lesson.steps.length === 0 || !canOpenLesson(course, lesson, progress)) {
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

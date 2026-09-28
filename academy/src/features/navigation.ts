import type { Course, Lesson } from '../content/types';
import { lessonAccessState } from './courseAccess';
import { isStepResolved } from './lessonResults';
import type { AcademyProgress } from './progress';

type AnswerData = Pick<AcademyProgress, 'answers' | 'questionResults'>;

export type AppView = 'path' | 'chapters' | 'practice' | 'glossary';

export const APP_VIEWS: readonly AppView[] = ['path', 'chapters', 'practice', 'glossary'];

export type AppRoute =
  | { kind: 'view'; view: AppView }
  | {
      kind: 'lesson';
      lessonId: string;
      /** Einsbasierter Schritt aus der URL; `null`, wenn keiner angegeben ist. */
      step: number | null;
    }
  | { kind: 'lesson-result'; lessonId: string };

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
    return { kind: 'view', view: segments[0] };
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
  if (route.kind === 'view') return `#/${route.view}`;
  const base = `#/lesson/${encodeURIComponent(route.lessonId)}`;
  if (route.kind === 'lesson-result') return `${base}/result`;
  return route.step === null ? base : `${base}?step=${route.step}`;
}

/**
 * Höchster Schritt, der ohne Überspringen einer offenen Frage erreichbar ist.
 * Eine Frage ist erst erledigt, wenn sie richtig beantwortet oder ihre Lösung
 * aufgedeckt wurde – wie die Sperre der „Weiter“-Schaltfläche im Lesson Player.
 */
export function maxReachableStepIndex(lesson: Lesson, data: AnswerData): number {
  const blocking = lesson.steps.findIndex((step) => !isStepResolved(step, data));
  return blocking === -1 ? lesson.steps.length - 1 : blocking;
}

export function clampStepIndex(lesson: Lesson, data: AnswerData, stepIndex: number): number {
  if (!Number.isInteger(stepIndex) || stepIndex < 0) return 0;
  return Math.min(stepIndex, maxReachableStepIndex(lesson, data));
}

export function findLesson(course: Course, lessonId: string): Lesson | undefined {
  return course.units
    .flatMap((unit) => unit.lessons)
    .find((lesson) => lesson.id === lessonId);
}

/** Ob eine Lektion geöffnet werden darf (veröffentlicht und freigeschaltet). */
export function canOpenLesson(
  course: Course,
  lesson: Lesson,
  progress: AcademyProgress,
): boolean {
  const state = lessonAccessState(course, lesson, progress.completedLessonIds);
  return state === 'available' || state === 'complete';
}

/**
 * Schritt, mit dem eine Lektion beim normalen Öffnen startet: Begonnene
 * Lektionen setzen am gespeicherten Schritt fort, alle anderen starten vorn.
 */
export function startStepIndex(lesson: Lesson, progress: AcademyProgress): number {
  const saved = progress.lessonPositions[lesson.id];
  if (!saved || progress.completedLessonIds.includes(lesson.id)) return 0;
  return clampStepIndex(lesson, progress, saved.stepIndex);
}

export type ResolvedRoute =
  | { kind: 'view'; view: AppView }
  | { kind: 'lesson'; lesson: Lesson; stepIndex: number }
  | { kind: 'lesson-result'; lesson: Lesson };

/**
 * Prüft eine Route gegen Kurs und Fortschritt. Unbekannte, geplante oder
 * gesperrte Lektionen ergeben `null` – der Aufrufer fällt auf den Lernpfad
 * zurück. Ein ungültiger Schritt wird auf den letzten gültigen begrenzt. Die
 * Abschlussansicht gibt es nur für bereits abgeschlossene Lektionen.
 */
export function resolveRoute(
  route: AppRoute,
  course: Course,
  progress: AcademyProgress,
): ResolvedRoute | null {
  if (route.kind === 'view') return route;

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
  lesson: Lesson;
  stepIndex: number;
}

/**
 * Die zuletzt bearbeitete, noch offene und weiterhin zugängliche Lektion –
 * Grundlage für „Weiterlernen“. Ohne begonnene Lektion gibt es kein Ziel.
 */
export function resumeTarget(
  course: Course,
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

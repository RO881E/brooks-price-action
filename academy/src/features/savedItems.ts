import type { Course, CourseUnit, Lesson } from '../content/types';
import { lessonAccessState } from './courseAccess';
import {
  normalizeNoteText,
  savedKey,
  type AcademyProgress,
  type Bookmark,
  type Note,
} from './progress';

function nowIso(): string {
  return new Date().toISOString();
}

/* ------------------------------------------------------------------ */
/* Lesezeichen                                                         */
/* ------------------------------------------------------------------ */

export function isBookmarked(
  progress: AcademyProgress,
  lessonId: string,
  stepId: string | null,
): boolean {
  return savedKey(lessonId, stepId) in progress.bookmarks;
}

export function toggleBookmark(
  progress: AcademyProgress,
  lessonId: string,
  stepId: string | null,
  now: string = nowIso(),
): AcademyProgress {
  const key = savedKey(lessonId, stepId);
  if (key in progress.bookmarks) return removeBookmark(progress, key).progress;
  return {
    ...progress,
    bookmarks: { ...progress.bookmarks, [key]: { lessonId, stepId, createdAt: now } },
  };
}

export function removeBookmark(
  progress: AcademyProgress,
  key: string,
): { progress: AcademyProgress; removed: Bookmark | null } {
  const removed = progress.bookmarks[key] ?? null;
  if (!removed) return { progress, removed };
  const { [key]: _gone, ...bookmarks } = progress.bookmarks;
  return { progress: { ...progress, bookmarks }, removed };
}

/** Stellt ein entferntes Lesezeichen wieder her, sofern es nicht neu gesetzt wurde. */
export function restoreBookmark(progress: AcademyProgress, bookmark: Bookmark): AcademyProgress {
  const key = savedKey(bookmark.lessonId, bookmark.stepId);
  if (key in progress.bookmarks) return progress;
  return { ...progress, bookmarks: { ...progress.bookmarks, [key]: bookmark } };
}

/* ------------------------------------------------------------------ */
/* Notizen                                                             */
/* ------------------------------------------------------------------ */

export function noteText(progress: AcademyProgress, lessonId: string, stepId: string | null): string {
  return progress.notes[savedKey(lessonId, stepId)]?.text ?? '';
}

/**
 * Speichert eine Notiz als normalisierten Klartext. Leerer oder nur aus
 * Leerzeichen bestehender Inhalt entfernt die Notiz. Unveränderter Text lässt
 * den Fortschritt unverändert.
 */
export function saveNote(
  progress: AcademyProgress,
  lessonId: string,
  stepId: string | null,
  text: string,
  now: string = nowIso(),
): AcademyProgress {
  const key = savedKey(lessonId, stepId);
  const normalized = normalizeNoteText(text);

  if (normalized.trim() === '') {
    return key in progress.notes ? deleteNote(progress, key).progress : progress;
  }
  if (progress.notes[key]?.text === normalized) return progress;

  return {
    ...progress,
    notes: { ...progress.notes, [key]: { lessonId, stepId, text: normalized, updatedAt: now } },
  };
}

export function deleteNote(
  progress: AcademyProgress,
  key: string,
): { progress: AcademyProgress; removed: Note | null } {
  const removed = progress.notes[key] ?? null;
  if (!removed) return { progress, removed };
  const { [key]: _gone, ...notes } = progress.notes;
  return { progress: { ...progress, notes }, removed };
}

/** Stellt eine gelöschte Notiz wieder her – aber überschreibt nie eine neuere. */
export function restoreNote(progress: AcademyProgress, note: Note): AcademyProgress {
  const key = savedKey(note.lessonId, note.stepId);
  if (key in progress.notes) return progress;
  return { ...progress, notes: { ...progress.notes, [key]: note } };
}

/* ------------------------------------------------------------------ */
/* Übersicht „Gespeichert“                                             */
/* ------------------------------------------------------------------ */

export interface SavedTarget {
  key: string;
  lesson: Lesson | null;
  unit: CourseUnit | null;
  /** Nullbasierter Schritt oder `null` für die ganze Lektion. */
  stepIndex: number | null;
  title: string;
  context: string;
  /** Nur zugängliche, noch vorhandene Fundstellen lassen sich öffnen. */
  openable: boolean;
}

export interface SavedBookmark extends SavedTarget {
  bookmark: Bookmark;
}

export interface SavedNote extends SavedTarget {
  note: Note;
}

function resolveTarget(
  course: Course,
  progress: AcademyProgress,
  key: string,
  lessonId: string,
  stepId: string | null,
): SavedTarget {
  for (const unit of course.units) {
    const lesson = unit.lessons.find((candidate) => candidate.id === lessonId);
    if (!lesson) continue;

    const stepIndex = stepId ? lesson.steps.findIndex((step) => step.id === stepId) : null;
    const state = lessonAccessState(course, lesson, progress.completedLessonIds);
    const accessible = state === 'available' || state === 'complete';

    if (stepIndex === -1) {
      return {
        key,
        lesson,
        unit,
        stepIndex: null,
        title: lesson.title,
        context: 'Der gemerkte Schritt existiert nicht mehr – die Lektion öffnet von vorn.',
        openable: accessible,
      };
    }

    return {
      key,
      lesson,
      unit,
      stepIndex,
      title: stepIndex === null ? lesson.title : lesson.steps[stepIndex].title,
      context:
        stepIndex === null
          ? `${unit.label} · ${unit.title}`
          : `Schritt ${stepIndex + 1} · ${lesson.title}`,
      openable: accessible,
    };
  }

  return {
    key,
    lesson: null,
    unit: null,
    stepIndex: null,
    title: 'Nicht mehr verfügbar',
    context: 'Diese Lektion gibt es im Kurs nicht mehr.',
    openable: false,
  };
}

export interface SavedOverview {
  bookmarks: SavedBookmark[];
  notes: SavedNote[];
}

/** Lesezeichen und Notizen, neueste zuerst, mit aufgelöster Fundstelle. */
export function savedOverview(course: Course, progress: AcademyProgress): SavedOverview {
  return {
    bookmarks: Object.entries(progress.bookmarks)
      .sort(([, a], [, b]) => b.createdAt.localeCompare(a.createdAt))
      .map(([key, bookmark]) => ({
        ...resolveTarget(course, progress, key, bookmark.lessonId, bookmark.stepId),
        bookmark,
      })),
    notes: Object.entries(progress.notes)
      .sort(([, a], [, b]) => b.updatedAt.localeCompare(a.updatedAt))
      .map(([key, note]) => ({
        ...resolveTarget(course, progress, key, note.lessonId, note.stepId),
        note,
      })),
  };
}

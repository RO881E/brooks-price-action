import type { CourseOutline, UnitOutline, LessonOutline } from '../content/types';
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
  lesson: LessonOutline | null;
  unit: UnitOutline | null;
  /** Nullbasierter Schritt oder `null` für die ganze Lektion. */
  stepIndex: number | null;
  title: string;
  context: string;
  /** Nur zugängliche, noch vorhandene Fundstellen lassen sich öffnen. */
  openable: boolean;
  /** Position in der Buchreihenfolge (Einheit, Lektion, Schritt); nicht mehr vorhandene Fundstellen zuletzt. */
  order: number;
}

export interface SavedBookmark extends SavedTarget {
  bookmark: Bookmark;
}

export interface SavedNote extends SavedTarget {
  note: Note;
}

function resolveTarget(
  course: CourseOutline,
  progress: AcademyProgress,
  key: string,
  lessonId: string,
  stepId: string | null,
): SavedTarget {
  for (const [unitIndex, unit] of course.units.entries()) {
    const lessonIndex = unit.lessons.findIndex((candidate) => candidate.id === lessonId);
    const lesson = unit.lessons[lessonIndex];
    if (!lesson) continue;
    const position = (unitIndex * 1000 + lessonIndex) * 1000;

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
        order: position,
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
      order: position + (stepIndex === null ? 0 : stepIndex + 1),
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
    order: Number.MAX_SAFE_INTEGER,
  };
}

export interface SavedOverview {
  bookmarks: SavedBookmark[];
  notes: SavedNote[];
}

/**
 * Lesezeichen und Notizen, neueste zuerst, mit aufgelöster Fundstelle. Bei mehreren Kursen
 * zeigt jeder Kurs nur seine eigenen: Einträge, deren Lektion zu einem der `otherCourseIds`
 * gehört (Präfix der Lektions-ID), bleiben gespeichert, erscheinen aber in jenem Kurs.
 */
export function savedOverview(
  course: CourseOutline,
  progress: AcademyProgress,
  otherCourseIds: readonly string[] = [],
): SavedOverview {
  const elsewhere = (lessonId: string) => otherCourseIds.some((id) => lessonId.startsWith(`${id}.`));
  return {
    bookmarks: Object.entries(progress.bookmarks)
      .filter(([, bookmark]) => !elsewhere(bookmark.lessonId))
      .sort(([, a], [, b]) => b.createdAt.localeCompare(a.createdAt))
      .map(([key, bookmark]) => ({
        ...resolveTarget(course, progress, key, bookmark.lessonId, bookmark.stepId),
        bookmark,
      })),
    notes: Object.entries(progress.notes)
      .filter(([, note]) => !elsewhere(note.lessonId))
      .sort(([, a], [, b]) => b.updatedAt.localeCompare(a.updatedAt))
      .map(([key, note]) => ({
        ...resolveTarget(course, progress, key, note.lessonId, note.stepId),
        note,
      })),
  };
}

export type SavedSort = 'recent' | 'book';

/** Normalisierter Suchtext (Umlaute und Großschreibung egal). */
function fold(value: string): string {
  return value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/ß/g, 'ss').toLowerCase();
}

/**
 * Ordnet und filtert die Übersicht: „recent“ = neueste zuerst (wie gespeichert), „book“ = in
 * Buchreihenfolge. Der Filter sucht in Titel, Fundstelle und Notiztext. Reine Ansicht – nichts
 * wird verändert oder gespeichert, und der Suchtext steht nie in einer Adresse.
 */
export function arrangeSaved(overview: SavedOverview, sort: SavedSort, query: string): SavedOverview {
  const needle = fold(query.trim());
  const matches = (item: SavedTarget, extra = '') =>
    needle === '' || fold(`${item.title} ${item.context} ${extra}`).includes(needle);
  const order = <T extends SavedTarget>(items: T[]) =>
    sort === 'book' ? [...items].sort((a, b) => a.order - b.order) : items;
  return {
    bookmarks: order(overview.bookmarks.filter((item) => matches(item))),
    notes: order(overview.notes.filter((item) => matches(item, item.note.text))),
  };
}

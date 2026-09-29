import type { CourseOutline, LessonOutline, UnitOutline } from '../content/types';
import { lessonAccessState, nextAvailableLesson, type LessonAccessState } from './courseAccess';
import { isStepResolved } from './lessonResults';
import type { AcademyProgress } from './progress';

/*
 * Buchleser (F-13): reine Logik für Abschnitte, Lesestelle und Sperrhinweise.
 * Ein Abschnitt ist eine veröffentlichte Lektion; der Leser zeigt immer genau
 * einen Abschnitt, damit nicht alle Schaubilder eines Kapitels gleichzeitig
 * entstehen. Abschluss und XP laufen über die vorhandene Lektionslogik.
 */

export interface ReaderSection {
  lesson: LessonOutline;
  state: LessonAccessState;
  /** 1-basierte Position unter den veröffentlichten Abschnitten der Einheit. */
  number: number;
}

export function findUnit(course: CourseOutline, unitId: string): UnitOutline | undefined {
  return course.units.find((unit) => unit.id === unitId);
}

/** Veröffentlichte Abschnitte einer Einheit in Buchreihenfolge mit ihrem Zugriff. */
export function readerSections(
  course: CourseOutline,
  unit: UnitOutline,
  progress: Pick<AcademyProgress, 'completedLessonIds'>,
): ReaderSection[] {
  const completed = new Set(progress.completedLessonIds);
  return unit.lessons
    .filter((lesson) => lesson.status === 'published')
    .map((lesson, index) => ({
      lesson,
      state: lessonAccessState(course, lesson, completed),
      number: index + 1,
    }));
}

export function isReadable(section: ReaderSection): boolean {
  return section.state === 'available' || section.state === 'complete';
}

/**
 * Abschnitt, mit dem „Kapitel lesen“ öffnet: die gespeicherte Lesestelle,
 * sofern sie noch lesbar ist; sonst der erste offene Abschnitt; sonst der
 * erste Abschnitt überhaupt (alles gelesen). `undefined`, wenn noch nichts
 * lesbar ist.
 */
export function defaultSection(
  course: CourseOutline,
  unit: UnitOutline,
  progress: Pick<AcademyProgress, 'completedLessonIds' | 'readerPositions'>,
): ReaderSection | undefined {
  const sections = readerSections(course, unit, progress);
  const saved = progress.readerPositions[unit.id];
  const atSaved = saved && sections.find((section) => section.lesson.id === saved.lessonId);
  if (atSaved && isReadable(atSaved)) return atSaved;
  return (
    sections.find((section) => section.state === 'available') ??
    sections.find((section) => section.state === 'complete')
  );
}

export interface ResolvedReader {
  unit: UnitOutline;
  sections: ReaderSection[];
  /** Angezeigter Abschnitt; `undefined`, wenn die Einheit noch gesperrt ist. */
  section: ReaderSection | undefined;
  /** Nullbasierter Schritt, zu dem gescrollt wird; `null` = Abschnittsanfang. */
  stepIndex: number | null;
  /** Der Link nannte einen nicht lesbaren Abschnitt; es wurde zurückgefallen. */
  fellBack: boolean;
}

/**
 * Prüft eine Leser-Route. Unbekannte Einheiten ergeben `null` (zurück zum
 * Lernpfad). Unbekannte, geplante oder gesperrte Abschnitte fallen auf den
 * Standardabschnitt zurück, ein ungültiger Schritt auf den Abschnittsanfang.
 */
export function resolveReader(
  course: CourseOutline,
  progress: Pick<AcademyProgress, 'completedLessonIds' | 'readerPositions'>,
  unitId: string,
  lessonId: string | null,
  step: number | null,
): ResolvedReader | null {
  const unit = findUnit(course, unitId);
  if (!unit) return null;
  const sections = readerSections(course, unit, progress);
  if (sections.length === 0) return null;

  const requested = lessonId ? sections.find((section) => section.lesson.id === lessonId) : undefined;
  const readable = requested && isReadable(requested);
  const section = readable ? requested : defaultSection(course, unit, progress);
  const fellBack = lessonId !== null && !readable;

  let stepIndex: number | null = null;
  if (section) {
    if (readable && step !== null && step >= 1 && step <= section.lesson.steps.length) {
      stepIndex = step - 1;
    } else if (!lessonId || fellBack) {
      // Ohne Schritt im Link: an der gespeicherten Stelle weiterlesen.
      const saved = progress.readerPositions[unit.id];
      if (saved && saved.lessonId === section.lesson.id && saved.stepId) {
        const index = section.lesson.steps.findIndex((candidate) => candidate.id === saved.stepId);
        stepIndex = index >= 0 ? index : null;
      }
    }
  }

  return { unit, sections, section, stepIndex, fellBack };
}

/** Sind alle Fragen des Abschnitts erledigt (richtig oder Lösung aufgedeckt)? */
export function sectionResolved(
  lesson: LessonOutline,
  progress: Pick<AcademyProgress, 'answers' | 'questionResults'>,
): boolean {
  return lesson.steps.every((step) => isStepResolved(step, progress));
}

/** Zahl der noch offenen Fragen im Abschnitt – für den Hinweis am Ende. */
export function openQuestions(
  lesson: LessonOutline,
  progress: Pick<AcademyProgress, 'answers' | 'questionResults'>,
): number {
  return lesson.steps.filter((step) => step.type === 'question' && !isStepResolved(step, progress))
    .length;
}

export function nextSection(sections: ReaderSection[], lessonId: string): ReaderSection | undefined {
  const index = sections.findIndex((section) => section.lesson.id === lessonId);
  return index >= 0 ? sections[index + 1] : undefined;
}

export function previousSection(sections: ReaderSection[], lessonId: string): ReaderSection | undefined {
  const index = sections.findIndex((section) => section.lesson.id === lessonId);
  return index > 0 ? sections[index - 1] : undefined;
}

export interface LockHint {
  /** Erster gesperrter Abschnitt dieser Einheit, falls es einen gibt. */
  locked: ReaderSection | undefined;
  /** Was als Nächstes zu tun ist – die nächste freie Lektion im ganzen Kurs. */
  prerequisite: LessonOutline | undefined;
  prerequisiteUnit: UnitOutline | undefined;
}

/**
 * Benennt den nächsten gesperrten Abschnitt und den Schritt, der ihn
 * freischaltet. Gesperrte Abschnitte gelten nie als gelesen.
 */
export function lockHint(
  course: CourseOutline,
  unit: UnitOutline,
  progress: Pick<AcademyProgress, 'completedLessonIds'>,
): LockHint {
  const locked = readerSections(course, unit, progress).find((section) => section.state === 'locked');
  const prerequisite = nextAvailableLesson(course, progress.completedLessonIds);
  const prerequisiteUnit = prerequisite
    ? course.units.find((candidate) => candidate.lessons.some((lesson) => lesson.id === prerequisite.id))
    : undefined;
  return { locked, prerequisite, prerequisiteUnit };
}

export interface ReaderProgress {
  completed: number;
  total: number;
}

/** Abgeschlossene Abschnitte der Einheit – eine echte Zählung, keine Quote. */
export function readerProgress(sections: ReaderSection[]): ReaderProgress {
  return {
    completed: sections.filter((section) => section.state === 'complete').length,
    total: sections.length,
  };
}

/** Nächste Einheit in Buchreihenfolge. */
export function nextUnit(course: CourseOutline, unitId: string): UnitOutline | undefined {
  const index = course.units.findIndex((unit) => unit.id === unitId);
  return index >= 0 ? course.units[index + 1] : undefined;
}

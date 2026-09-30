import { barAlbum, type AlbumEntry } from '../content/barAlbum';
import { glossaryEntries } from '../content/glossary';
import type { CourseOutline, LessonOutline } from '../content/types';
import type { AcademyProgress } from './progress';

export interface AlbumCard {
  entry: AlbumEntry;
  /** Vorhandene Glossar-Definition des Begriffs. */
  definition: string;
  lesson: LessonOutline;
  unlocked: boolean;
}

export interface AlbumOverview {
  cards: AlbumCard[];
  unlocked: number;
}

/**
 * Karten des Bar-Albums aus dem echten Lernstand: freigeschaltet ist genau die Karte, deren
 * Lektion abgeschlossen ist. Karten mit unbekanntem Begriff oder unbekannter Lektion
 * werden ausgelassen (die Validierung im Test verhindert das für die eingetragenen).
 */
export function albumOverview(
  course: CourseOutline,
  progress: AcademyProgress,
  entries: readonly AlbumEntry[] = barAlbum,
): AlbumOverview {
  const lessons = new Map(course.units.flatMap((unit) => unit.lessons).map((lesson) => [lesson.id, lesson] as const));
  const terms = new Map(glossaryEntries.map((entry) => [entry.term, entry.definition] as const));
  const completed = new Set(progress.completedLessonIds);
  const cards = entries.flatMap((entry): AlbumCard[] => {
    const lesson = lessons.get(entry.lessonId);
    const definition = terms.get(entry.term);
    if (!lesson || !definition) return [];
    return [{ entry, definition, lesson, unlocked: completed.has(lesson.id) }];
  });
  return { cards, unlocked: cards.filter((card) => card.unlocked).length };
}

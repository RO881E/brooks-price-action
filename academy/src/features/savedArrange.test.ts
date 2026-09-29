import { describe, expect, it } from 'vitest';
import { toCourseOutline } from '../../build/courseOutline';
import { brooksTrendsCourse } from '../content/course';
import { createEmptyProgress, savedKey, type AcademyProgress } from './progress';
import { arrangeSaved, savedOverview } from './savedItems';

const course = toCourseOutline(brooksTrendsCourse);
const published = course.units.flatMap((unit) => unit.lessons).filter((lesson) => lesson.status === 'published');
const [one, two, three] = [published[0], published[5], published[12]];
const stepOf = (lesson: typeof one, index: number) => lesson.steps[index].id;

function progress(): AcademyProgress {
  const base = createEmptyProgress();
  const done = published.slice(0, 20).map((lesson) => lesson.id);
  return {
    ...base,
    completedLessonIds: done,
    // Absichtlich nicht in Buchreihenfolge angelegt (neueste zuerst: three, one, two).
    bookmarks: {
      [savedKey(one.id, stepOf(one, 1))]: { lessonId: one.id, stepId: stepOf(one, 1), createdAt: '2026-09-28T10:00:00.000Z' },
      [savedKey(three.id, null)]: { lessonId: three.id, stepId: null, createdAt: '2026-09-29T10:00:00.000Z' },
    },
    notes: {
      [savedKey(two.id, stepOf(two, 0))]: { lessonId: two.id, stepId: stepOf(two, 0), text: 'Ausbruch später prüfen – Größe zählt', updatedAt: '2026-09-27T10:00:00.000Z' },
      [savedKey(one.id, stepOf(one, 0))]: { lessonId: one.id, stepId: stepOf(one, 0), text: 'Das ist die Größe des Bars', updatedAt: '2026-09-29T09:00:00.000Z' },
    },
  };
}

describe('Gespeichert als Notizbuch (P10)', () => {
  it('jede Fundstelle kennt ihre Position in der Buchreihenfolge', () => {
    const overview = savedOverview(course, progress());
    const orders = [...overview.bookmarks, ...overview.notes].map((item) => item.order);
    expect(orders.every((value) => Number.isFinite(value) && value >= 0)).toBe(true);
    const lessonOne = overview.notes.find((item) => item.note.lessonId === one.id)!;
    const lessonTwo = overview.notes.find((item) => item.note.lessonId === two.id)!;
    expect(lessonOne.order).toBeLessThan(lessonTwo.order);
  });

  it('Sortierung: neueste zuerst bleibt, Buchreihenfolge ordnet um; nichts wird verändert', () => {
    const source = savedOverview(course, progress());
    const before = JSON.stringify(source);
    const recent = arrangeSaved(source, 'recent', '');
    expect(recent.bookmarks.map((item) => item.bookmark.lessonId)).toEqual([three.id, one.id]);
    const book = arrangeSaved(source, 'book', '');
    expect(book.bookmarks.map((item) => item.bookmark.lessonId)).toEqual([one.id, three.id]);
    expect(book.notes.map((item) => item.note.lessonId)).toEqual([one.id, two.id]);
    expect(JSON.stringify(source)).toBe(before);
  });

  it('Filter sucht in Titel, Fundstelle und Notiztext – unabhängig von Groß-/Kleinschreibung und Umlauten', () => {
    const source = savedOverview(course, progress());
    expect(arrangeSaved(source, 'recent', 'grosse').notes).toHaveLength(2);
    expect(arrangeSaved(source, 'recent', 'GRÖSSE').notes).toHaveLength(2);
    expect(arrangeSaved(source, 'recent', 'ausbruch später').notes.map((item) => item.note.lessonId)).toEqual([two.id]);
    expect(arrangeSaved(source, 'recent', 'gibt-es-nicht')).toEqual({ bookmarks: [], notes: [] });
    expect(arrangeSaved(source, 'recent', '   ')).toEqual(arrangeSaved(source, 'recent', ''));
  });

  it('nicht mehr vorhandene Fundstellen stehen in der Buchreihenfolge zuletzt', () => {
    const base = progress();
    const withMissing: AcademyProgress = {
      ...base,
      notes: {
        ...base.notes,
        [savedKey('brooks-trends.gibt-es-nicht', null)]: { lessonId: 'brooks-trends.gibt-es-nicht', stepId: null, text: 'alt', updatedAt: '2026-09-29T11:00:00.000Z' },
      },
    };
    const book = arrangeSaved(savedOverview(course, withMissing), 'book', '');
    expect(book.notes.at(-1)?.note.lessonId).toBe('brooks-trends.gibt-es-nicht');
  });
});

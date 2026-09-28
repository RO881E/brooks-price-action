import { describe, expect, it } from 'vitest';
import type { Course, Lesson } from '../content/types';
import {
  createEmptyProgress,
  MAX_NOTE_LENGTH,
  migrateProgress,
  normalizeNoteText,
  savedKey,
} from './progress';
import {
  deleteNote,
  isBookmarked,
  noteText,
  removeBookmark,
  restoreBookmark,
  restoreNote,
  saveNote,
  savedOverview,
  toggleBookmark,
} from './savedItems';

function lesson(id: string, steps: string[]): Lesson {
  return {
    id,
    title: `Lektion ${id}`,
    summary: '',
    durationMinutes: 3,
    xp: 10,
    sourceUnit: 'Test',
    status: 'published',
    steps: steps.map((stepId) => ({ id: stepId, type: 'explanation', title: `Titel ${stepId}`, paragraphs: ['x'] })),
  };
}

const course: Course = {
  id: 'c',
  eyebrow: '',
  title: '',
  subtitle: '',
  sourceOrderNotice: '',
  units: [
    {
      id: 'u1',
      order: 1,
      kind: 'chapter',
      label: 'Kapitel 1',
      title: 'Grundlagen',
      description: '',
      estimatedLessonCount: 2,
      lessons: [lesson('l1', ['a', 'b']), lesson('l2', ['c'])],
    },
  ],
};

describe('note normalisation', () => {
  it('keeps HTML and special characters as plain text', () => {
    const text = '<script>alert(1)</script> & "Zitat" ✓ 😀 ÄÖÜß';
    expect(normalizeNoteText(text)).toBe(text);
  });

  it('unifies line breaks and removes control characters', () => {
    expect(normalizeNoteText('eins\r\nzwei\rdrei\u0000\u0007\tvier\n')).toBe('eins\nzwei\ndrei\tvier\n');
  });

  it('caps long notes by characters, not UTF-16 units', () => {
    expect(Array.from(normalizeNoteText('😀'.repeat(MAX_NOTE_LENGTH + 20)))).toHaveLength(MAX_NOTE_LENGTH);
    expect(normalizeNoteText('x'.repeat(MAX_NOTE_LENGTH + 1))).toHaveLength(MAX_NOTE_LENGTH);
  });
});

describe('saving notes', () => {
  it('stores, updates and reads a note per step', () => {
    let progress = saveNote(createEmptyProgress(), 'l1', 'a', 'Erste Idee', 't1');
    expect(progress.notes['l1::a']).toEqual({ lessonId: 'l1', stepId: 'a', text: 'Erste Idee', updatedAt: 't1' });
    expect(noteText(progress, 'l1', 'a')).toBe('Erste Idee');
    expect(noteText(progress, 'l1', 'b')).toBe('');

    progress = saveNote(progress, 'l1', 'a', 'Zweite Idee', 't2');
    expect(progress.notes['l1::a'].text).toBe('Zweite Idee');
    expect(progress.notes['l1::a'].updatedAt).toBe('t2');
  });

  it('keeps the same object for unchanged text', () => {
    const progress = saveNote(createEmptyProgress(), 'l1', 'a', 'Gleich', 't1');
    expect(saveNote(progress, 'l1', 'a', 'Gleich', 't2')).toBe(progress);
  });

  it('removes a note when it becomes empty or whitespace only', () => {
    const progress = saveNote(createEmptyProgress(), 'l1', 'a', 'Text', 't1');
    expect(saveNote(progress, 'l1', 'a', '', 't2').notes).toEqual({});
    expect(saveNote(progress, 'l1', 'a', '  \n\t ', 't2').notes).toEqual({});
    const empty = createEmptyProgress();
    expect(saveNote(empty, 'l1', 'a', '   ')).toBe(empty);
  });

  it('deletes with undo, but never overwrites a newer note', () => {
    let progress = saveNote(createEmptyProgress(), 'l1', 'a', 'Alt', 't1');
    const { progress: deleted, removed } = deleteNote(progress, 'l1::a');
    expect(deleted.notes).toEqual({});
    expect(restoreNote(deleted, removed!).notes['l1::a'].text).toBe('Alt');

    progress = saveNote(deleted, 'l1', 'a', 'Neu', 't2');
    expect(restoreNote(progress, removed!)).toBe(progress);
    expect(deleteNote(createEmptyProgress(), 'l1::a').removed).toBeNull();
  });
});

describe('bookmarks', () => {
  it('toggles lesson and step bookmarks independently', () => {
    let progress = toggleBookmark(createEmptyProgress(), 'l1', null, 't1');
    progress = toggleBookmark(progress, 'l1', 'b', 't2');
    expect(isBookmarked(progress, 'l1', null)).toBe(true);
    expect(isBookmarked(progress, 'l1', 'b')).toBe(true);
    expect(isBookmarked(progress, 'l1', 'a')).toBe(false);
    expect(Object.keys(progress.bookmarks)).toEqual(['l1', 'l1::b']);

    progress = toggleBookmark(progress, 'l1', null);
    expect(isBookmarked(progress, 'l1', null)).toBe(false);
    expect(isBookmarked(progress, 'l1', 'b')).toBe(true);
  });

  it('removes with undo and keeps a bookmark that was set again', () => {
    const progress = toggleBookmark(createEmptyProgress(), 'l2', 'c', 't1');
    const { progress: removedState, removed } = removeBookmark(progress, 'l2::c');
    expect(removedState.bookmarks).toEqual({});
    expect(restoreBookmark(removedState, removed!).bookmarks['l2::c'].createdAt).toBe('t1');

    const again = toggleBookmark(removedState, 'l2', 'c', 't9');
    expect(restoreBookmark(again, removed!)).toBe(again);
  });
});

describe('saved overview', () => {
  it('resolves targets, newest first, and handles missing content', () => {
    let progress = toggleBookmark(createEmptyProgress(), 'l1', 'b', '2026-10-01T10:00:00.000Z');
    progress = toggleBookmark(progress, 'l2', null, '2026-10-02T10:00:00.000Z');
    progress = toggleBookmark(progress, 'gone', null, '2026-10-03T10:00:00.000Z');
    progress = toggleBookmark(progress, 'l1', 'deleted-step', '2026-09-30T10:00:00.000Z');
    progress = saveNote(progress, 'l1', 'a', '<b>fett</b>', '2026-10-01T09:00:00.000Z');

    const overview = savedOverview(course, progress);
    expect(overview.bookmarks.map((item) => [item.key, item.title, item.stepIndex, item.openable])).toEqual([
      ['gone', 'Nicht mehr verfügbar', null, false],
      ['l2', 'Lektion l2', null, false],
      ['l1::b', 'Titel b', 1, true],
      ['l1::deleted-step', 'Lektion l1', null, true],
    ]);
    expect(overview.bookmarks[2].context).toBe('Schritt 2 · Lektion l1');
    expect(overview.notes).toHaveLength(1);
    expect(overview.notes[0]).toMatchObject({ key: 'l1::a', title: 'Titel a', stepIndex: 0 });
    expect(overview.notes[0].note.text).toBe('<b>fett</b>');
  });
});

describe('migration (v7)', () => {
  it('starts older records with empty bookmarks and notes', () => {
    const progress = migrateProgress({ version: 6, completedLessonIds: ['l1'] });
    expect(progress?.bookmarks).toEqual({});
    expect(progress?.notes).toEqual({});
  });

  it('keeps valid entries, rebuilds keys and drops invalid ones', () => {
    const progress = migrateProgress({
      version: 7,
      bookmarks: {
        wrongKey: { lessonId: 'l1', stepId: 'a', createdAt: 't1' },
        lesson: { lessonId: 'l2', stepId: null },
        broken: { stepId: 'x' },
        text: 'kaputt',
      },
      notes: {
        n1: { lessonId: 'l1', stepId: 'a', text: 'Hallo\r\nWelt', updatedAt: 't1' },
        empty: { lessonId: 'l1', stepId: 'b', text: '   ' },
        noText: { lessonId: 'l2', stepId: 'c', text: 42 },
      },
    });

    expect(Object.keys(progress?.bookmarks ?? {})).toEqual([savedKey('l1', 'a'), 'l2']);
    expect(progress?.bookmarks['l2'].stepId).toBeNull();
    expect(progress?.notes).toEqual({
      'l1::a': { lessonId: 'l1', stepId: 'a', text: 'Hallo\nWelt', updatedAt: 't1' },
    });
  });
});

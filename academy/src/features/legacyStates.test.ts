import { describe, expect, it } from 'vitest';
import { toCourseOutline } from '../../build/courseOutline';
import { priceActionTrendsCourse } from '../content/course';
import { applyImport, createBackup, parseBackup, sameBackupData, serializeBackup } from './backup';
import { earnedXp } from './lessonResults';
import { awardMilestone } from './goals';
import {
  ACADEMY_PROGRESS_BACKUP_KEY,
  ACADEMY_PROGRESS_KEY,
  ACADEMY_PROGRESS_VERSION,
  completeLesson,
  createEmptyProgress,
  loadProgress,
  migrateProgress,
  saveProgress,
} from './progress';
import { readRescuedData, discardRescuedData } from './recovery';
import { saveNote, toggleBookmark } from './savedItems';

class MemoryStorage implements Pick<Storage, 'getItem' | 'setItem' | 'removeItem'> {
  values = new Map<string, string>();
  getItem(key: string) {
    return this.values.get(key) ?? null;
  }
  setItem(key: string, value: string) {
    this.values.set(key, value);
  }
  removeItem(key: string) {
    this.values.delete(key);
  }
}

const course = toCourseOutline(priceActionTrendsCourse);
const published = course.units.flatMap((unit) => unit.lessons).filter((lesson) => lesson.status === 'published');
const [one, two, three] = published;

/** Datensätze früherer Versionen: nur, was es damals gab – plus Kern, der nie verloren gehen darf. */
const core = { completedLessonIds: [one.id, two.id], answers: { 'chapter-01-01-question': 'a' } };
const history: Array<[number, Record<string, unknown>]> = [
  [1, { version: 1, ...core, lastLessonId: two.id }],
  [2, { version: 2, ...core, questionResults: {}, lessonResults: {} }],
  [5, { version: 5, ...core, reviewCards: {}, activityDays: ['2026-09-01'] }],
  [8, { version: 8, ...core, bookmarks: {}, notes: {}, milestones: { 'first-lesson': { achievedDay: '2026-09-01' } } }],
  [9, { version: 9, ...core, readerPositions: {} }],
  [10, { version: 10, ...core, readingOptions: { size: 'large', spacing: 'standard' } }],
  [12, { version: 12, ...core, caseRuns: { 'bar-case.chapter-01.range-high-test': [{ sessionId: 'run-1', completedAt: '2026-09-02T10:00:00.000Z', best: 1, defensible: 0, mistake: 0, missedCues: 0 }] } }],
  [14, { version: 14, ...core, guideSeenAt: '2026-09-03T08:00:00.000Z' }],
  [15, { version: 15, ...core, guideSeenAt: '2026-09-03T08:00:00.000Z' }],
];

describe('Alte Lernstände absichern (P12)', () => {
  it.each(history)('Stand v%i: lädt und hebt auf die aktuelle Version, behält den Kern', (_version, record) => {
    const storage = new MemoryStorage();
    storage.setItem(ACADEMY_PROGRESS_KEY, JSON.stringify(record));
    const progress = loadProgress(storage);
    expect(progress.version).toBe(ACADEMY_PROGRESS_VERSION);
    expect(progress.completedLessonIds).toEqual([one.id, two.id]);
    expect(progress.answers).toEqual(core.answers);
    expect(readRescuedData(storage)).toBeNull();
    // Die Academy-Daten werden beim Speichern angehoben.
    saveProgress(storage, progress);
    expect(JSON.parse(storage.getItem(ACADEMY_PROGRESS_KEY)!).version).toBe(ACADEMY_PROGRESS_VERSION);
    // Erneutes Laden ändert nichts (idempotent).
    expect(loadProgress(storage)).toEqual(loadProgress(storage));
  });

  it.each(history)('Stand v%i: Export → Import (Ersetzen) und (Zusammenführen) ergibt denselben Stand', (_version, record) => {
    const progress = migrateProgress(record)!;
    const text = serializeBackup(createBackup(progress, new Date('2026-09-29T10:00:00.000Z')));
    const parsed = parseBackup(text);
    expect(parsed.ok).toBe(true);
    if (!parsed.ok) return;
    expect(sameBackupData(parsed.imported, progress)).toBe(true);
    expect(sameBackupData(applyImport(createEmptyProgress(), parsed.imported, 'replace'), progress)).toBe(true);
    const merged = applyImport(progress, parsed.imported, 'merge');
    // Zusammenführen mit sich selbst verändert nichts und verdoppelt nichts.
    expect(sameBackupData(merged, progress)).toBe(true);
    expect(sameBackupData(applyImport(merged, parsed.imported, 'merge'), merged)).toBe(true);
  });

  it('Zusammenführen alt + neu: XP entstehen einmal, Meilensteine behalten das frühere Datum, Notizen und Runden gehen nicht verloren', () => {
    let old = completeLesson(createEmptyProgress(), one.id, one.xp, '2026-09-01T08:00:00.000Z');
    old = awardMilestone(old, 'first-lesson', '2026-09-01');
    old = saveNote(old, one.id, one.steps[0].id, 'alte Notiz', '2026-09-01T09:00:00.000Z');
    let fresh = completeLesson(createEmptyProgress(), one.id, one.xp, '2026-09-20T08:00:00.000Z');
    fresh = completeLesson(fresh, three.id, three.xp, '2026-09-21T08:00:00.000Z');
    fresh = awardMilestone(fresh, 'first-lesson', '2026-09-20');
    fresh = saveNote(fresh, one.id, one.steps[0].id, 'neue Notiz', '2026-09-22T09:00:00.000Z');
    fresh = toggleBookmark(fresh, three.id, null, '2026-09-21T09:00:00.000Z');
    const both = (a: typeof old, b: typeof old) => applyImport(a, b, 'merge');
    const forward = both(fresh, old);
    const backward = both(old, fresh);
    const lessons = [one, two, three];
    const expectedXp = one.xp + three.xp;
    expect(earnedXp(forward, lessons)).toBe(expectedXp);
    expect(earnedXp(backward, lessons)).toBe(expectedXp);
    for (const merged of [forward, backward]) {
      expect(merged.milestones['first-lesson']?.achievedDay).toBe('2026-09-01');
      expect(merged.completedLessonIds.sort()).toEqual([one.id, three.id].sort());
      expect(Object.values(merged.notes).map((note) => note.text)).toEqual(['neue Notiz']);
      expect(Object.keys(merged.bookmarks)).toHaveLength(1);
    }
  });

  it('Trainerrunden werden je Runden-ID vereinigt, nichts doppelt', () => {
    const run = (id: string) => ({ sessionId: id, completedAt: '2026-09-02T10:00:00.000Z', best: 1, defensible: 0, mistake: 0, missedCues: 0 });
    const a = { ...createEmptyProgress(), caseRuns: { 'bar-case.x': [run('r1'), run('r2')] } };
    const b = { ...createEmptyProgress(), caseRuns: { 'bar-case.x': [run('r2'), run('r3')] } };
    expect(applyImport(a, b, 'merge').caseRuns['bar-case.x'].map((item) => item.sessionId).sort()).toEqual(['r1', 'r2', 'r3']);
  });
});

describe('Defekte Daten führen zu verständlicher Wiederherstellung (P12)', () => {
  const broken = ['{kaputt', '', 'null', '[]', '"text"', '42', '{"version":"x"}', '{"version":0}', '{"version":-3,"completedLessonIds":[]}'];

  it.each(broken.filter(Boolean))('unlesbarer Datensatz %s: leerer Stand, Kopie gesichert', (raw) => {
    const storage = new MemoryStorage();
    storage.setItem(ACADEMY_PROGRESS_KEY, raw);
    const progress = loadProgress(storage);
    expect(progress.completedLessonIds).toEqual([]);
    expect(progress.version).toBe(ACADEMY_PROGRESS_VERSION);
    expect(readRescuedData(storage)?.raw).toBe(raw);
    expect(storage.getItem(ACADEMY_PROGRESS_BACKUP_KEY)).toBe(raw);
  });

  it('Falsche Feldtypen in einem sonst lesbaren Datensatz werden abgefangen, nicht übernommen', () => {
    const progress = migrateProgress({
      version: 14,
      completedLessonIds: 'nicht-eine-liste',
      answers: [1, 2],
      notes: 'x',
      bookmarks: 5,
      milestones: { 'first-lesson': 'gestern' },
      caseRuns: { 'bar-case.y': 'kaputt' },
      dailyGoal: { kind: 'unbekannt', target: -1 },
    })!;
    expect(progress.completedLessonIds).toEqual([]);
    expect(progress.answers).toEqual({});
    expect(progress.notes).toEqual({});
    expect(progress.bookmarks).toEqual({});
    expect(progress.caseRuns).toEqual({});
    expect(progress.dailyGoal.target).toBeGreaterThan(0);
  });

  it('kaputte Sicherungsdateien werden mit Klartext abgelehnt und ändern nichts', () => {
    for (const text of ['', '{', 'kein json', '{"format":"anders"}', JSON.stringify({ format: 'wqt-academy-backup', data: {} })]) {
      const parsed = parseBackup(text);
      expect(parsed.ok).toBe(false);
      if (!parsed.ok) expect(parsed.errors.length).toBeGreaterThan(0);
    }
  });

  it('die gesicherte Kopie lässt sich verwerfen – aber nur bewusst', () => {
    const storage = new MemoryStorage();
    storage.setItem(ACADEMY_PROGRESS_KEY, '{kaputt');
    loadProgress(storage);
    expect(readRescuedData(storage)).not.toBeNull();
    // Normales Weiterarbeiten löscht die Kopie nicht.
    saveProgress(storage, loadProgress(storage));
    expect(readRescuedData(storage)).not.toBeNull();
    discardRescuedData(storage);
    expect(readRescuedData(storage)).toBeNull();
  });
});

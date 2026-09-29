import { describe, expect, it } from 'vitest';
import {
  applyImport,
  BACKUP_FIELDS,
  BACKUP_FORMAT,
  backupFileName,
  createBackup,
  MAX_IMPORT_BYTES,
  mergeLessonResult,
  mergeNote,
  mergeProgress,
  mergeReviewCard,
  parseBackup,
  previewImport,
  replaceProgress,
  resetAcademyData,
  serializeBackup,
} from './backup';
import {
  ACADEMY_PROGRESS_KEY,
  ACADEMY_PROGRESS_VERSION,
  completeLesson,
  createEmptyProgress,
  LEGACY_PROGRESS_KEY,
  LEGACY_TREND_RANGE_BEST_KEY,
  loadProgress,
  logActivity,
  recordReaderPosition,
  MAX_NOTE_LENGTH,
  saveProgress,
  setDailyGoal,
  updateReadingOptions,
  updateSettings,
  type AcademyProgress,
} from './progress';
import { saveNote, toggleBookmark } from './savedItems';

class MemoryStorage {
  values = new Map<string, string>();
  getItem(key: string): string | null {
    return this.values.get(key) ?? null;
  }
  setItem(key: string, value: string): void {
    this.values.set(key, value);
  }
  removeItem(key: string): void {
    this.values.delete(key);
  }
}

const at = (day: string, hour = 12) => {
  const [y, m, d] = day.split('-').map(Number);
  return new Date(y, m - 1, d, hour).toISOString();
};

/** Ein Stand mit Daten in jedem gesicherten Feld. */
function richProgress(): AcademyProgress {
  let progress = completeLesson(createEmptyProgress(), 'lesson-1', 30, at('2026-09-20'));
  progress = completeLesson(progress, 'lesson-2', 20, at('2026-09-21'));
  progress = logActivity(progress, '2026-09-22', { reviewSessions: 1 });
  progress = setDailyGoal(progress, { kind: 'xp', target: 60 });
  progress = updateSettings(progress, { motion: 'reduce', compact: true });
  progress = toggleBookmark(progress, 'lesson-1', null, at('2026-09-20', 13));
  progress = toggleBookmark(progress, 'lesson-2', 'step-b', at('2026-09-21', 13));
  progress = saveNote(progress, 'lesson-1', 'step-a', 'Idee <b>fett</b> & „Zitat“\nZeile 2', at('2026-09-20', 14));
  return {
    ...progress,
    answers: { q1: 'a', q2: 'b' },
    questionResults: {
      q1: { selectedOptionId: 'a', attempts: 1, firstAttemptCorrect: true, status: 'correct', wrongOptionIds: [] },
      q2: { selectedOptionId: 'b', attempts: 2, firstAttemptCorrect: false, status: 'correct', wrongOptionIds: ['c'] },
    },
    reviewCards: {
      q1: { stage: 1, dueDay: '2026-09-25', lastReviewedDay: '2026-09-22', lastResult: 'correct', reviews: 2, lapses: 0 },
    },
    milestones: { 'first-lesson': { achievedDay: '2026-09-20' } },
    lessonPositions: { 'lesson-3': { stepIndex: 2, updatedAt: at('2026-09-22') } },
    reviewSession: {
      mode: 'due',
      unitId: null,
      questionIds: ['q1'],
      index: 0,
      answers: {},
      startedDay: '2026-09-22',
      activityRecorded: false,
    },
    legacyReadChapters: ['b1-intro'],
    legacyTrendRangeBest: 7,
    preservedFields: { futureThing: 1 },
  };
}

const dataOf = (progress: AcademyProgress) => createBackup(progress, new Date(0)).data;

function backupText(progress: AcademyProgress, patch: (backup: Record<string, unknown>) => void = () => {}) {
  const backup = JSON.parse(serializeBackup(createBackup(progress))) as Record<string, unknown>;
  patch(backup);
  return JSON.stringify(backup);
}

function expectRejected(text: string, message: RegExp) {
  const result = parseBackup(text);
  expect(result.ok).toBe(false);
  if (!result.ok) expect(result.errors.join(' | ')).toMatch(message);
}

describe('export', () => {
  it('writes format, version, date and only academy data', () => {
    const backup = createBackup(richProgress(), new Date('2026-09-29T08:00:00.000Z'));

    expect(backup).toMatchObject({
      format: BACKUP_FORMAT,
      formatVersion: 1,
      app: 'WQT Academy',
      exportedAt: '2026-09-29T08:00:00.000Z',
      dataVersion: ACADEMY_PROGRESS_VERSION,
    });
    expect(Object.keys(backup.data).sort()).toEqual([...BACKUP_FIELDS].sort());
    const text = serializeBackup(backup);
    expect(text).not.toMatch(/"reviewSession"/);
    expect(text).not.toContain('legacyReadChapters');
    expect(text).not.toContain('futureThing');
    expect(text).toContain('<b>fett</b>');
    expect(backupFileName(new Date(2026, 8, 29, 23, 30))).toBe('wqt-academy-sicherung-2026-09-29.json');
  });
});

describe('roundtrip', () => {
  it('restores exactly the exported data', () => {
    const original = richProgress();
    const parsed = parseBackup(serializeBackup(createBackup(original)));
    expect(parsed.ok).toBe(true);
    if (!parsed.ok) return;

    expect(dataOf(parsed.imported)).toEqual(dataOf(original));
    expect(dataOf(replaceProgress(createEmptyProgress(), parsed.imported))).toEqual(dataOf(original));
    expect(dataOf(mergeProgress(createEmptyProgress(), parsed.imported))).toEqual(dataOf(original));
  });

  it('survives export → reset → import and never touches the old keys', () => {
    const storage = new MemoryStorage();
    storage.setItem(LEGACY_PROGRESS_KEY, '{"b1-intro":true}');
    storage.setItem(LEGACY_TREND_RANGE_BEST_KEY, '7');
    saveProgress(storage, richProgress());
    const before = loadProgress(storage);
    const exported = serializeBackup(createBackup(before));

    const fresh = resetAcademyData(storage);
    expect(dataOf(fresh)).toEqual(dataOf(createEmptyProgress()));
    expect(fresh.legacyReadChapters).toEqual(['b1-intro']);
    expect(storage.getItem(ACADEMY_PROGRESS_KEY)).toBeNull();

    const parsed = parseBackup(exported);
    if (!parsed.ok) throw new Error(parsed.errors.join());
    saveProgress(storage, applyImport(fresh, parsed.imported, 'merge'));

    expect(dataOf(loadProgress(storage))).toEqual(dataOf(before));
    expect(storage.getItem(LEGACY_PROGRESS_KEY)).toBe('{"b1-intro":true}');
    expect(storage.getItem(LEGACY_TREND_RANGE_BEST_KEY)).toBe('7');
  });
});

describe('rejected files', () => {
  const base = richProgress();

  it('rejects broken JSON and foreign files', () => {
    expectRejected('{"format": "wqt-academy-backup", "data": {', /beschädigt/);
    expectRejected('', /beschädigt/);
    expectRejected('[]', /keine Sicherung/);
    expectRejected('null', /keine Sicherung/);
    expectRejected('{"format":"something-else"}', /keine Sicherung/);
  });

  it('rejects unknown and newer versions', () => {
    expectRejected(backupText(base, (b) => (b.formatVersion = 2)), /Sicherungsformat 2 .*neueren Version/);
    expectRejected(backupText(base, (b) => (b.formatVersion = '1')), /Sicherungsformat ist unbekannt/);
    expectRejected(backupText(base, (b) => (b.dataVersion = 99)), /Version 99\) stammen aus einer neueren/);
    expectRejected(backupText(base, (b) => (b.dataVersion = 3)), /Datenversion .* ungültig/);
    expectRejected(backupText(base, (b) => (b.exportedAt = 'gestern')), /Exportdatum/);
  });

  it('rejects missing and unknown fields', () => {
    expectRejected(
      backupText(base, (b) => delete (b.data as Record<string, unknown>).notes),
      /Pflichtfeld fehlt: „notes“/,
    );
    expectRejected(backupText(base, (b) => delete b.data), /Lerndaten fehlen/);
    expectRejected(
      backupText(base, (b) => ((b.data as Record<string, unknown>).cloudToken = 'x')),
      /Unbekanntes Datenfeld „cloudToken“/,
    );
    expectRejected(backupText(base, (b) => (b.uploadUrl = 'https://example.com')), /Unbekanntes Feld „uploadUrl“/);
  });

  it('rejects invalid entries with a precise reason', () => {
    const patchData = (fn: (data: Record<string, any>) => void) =>
      backupText(base, (b) => fn(b.data as Record<string, any>));

    expectRejected(patchData((d) => (d.reviewCards.q1.stage = 9)), /„reviewCards“ enthält 1 ungültigen Eintrag .*Stufe/);
    expectRejected(patchData((d) => (d.notes['lesson-1::step-a'].text = '   ')), /leerer Text/);
    expectRejected(
      patchData((d) => (d.notes['lesson-1::step-a'].text = 'x'.repeat(MAX_NOTE_LENGTH + 1))),
      /Text zu lang/,
    );
    expectRejected(
      patchData((d) => {
        d.notes.falsch = d.notes['lesson-1::step-a'];
        delete d.notes['lesson-1::step-a'];
      }),
      /Schlüssel passt nicht/,
    );
    expectRejected(patchData((d) => d.activityDays.push('2026-02-30')), /activityDays/);
    expectRejected(patchData((d) => (d.dailyGoal = { kind: 'xp', target: 5 })), /kein angebotenes Tagesziel/);
    expectRejected(patchData((d) => (d.settings = { motion: 'wild', compact: false })), /settings/);
    expectRejected(patchData((d) => (d.questionResults.q1.extra = true)), /questionResults.*unvollständig/);
    expectRejected(patchData((d) => (d.milestones.gold = { achievedDay: '2026-09-20' })), /unbekannter Meilenstein/);
  });

  it('rejects dangerous keys without polluting objects', () => {
    const text = backupText(base).replace('"notes":{', '"notes":{"__proto__":{"polluted":true},');
    expect(text).toContain('__proto__');
    expectRejected(text, /unzulässigen Schlüssel „__proto__“/);
    expect(({} as Record<string, unknown>).polluted).toBeUndefined();
  });

  it('rejects oversized files before parsing', () => {
    const huge = `{"format":"${BACKUP_FORMAT}","padding":"${'x'.repeat(MAX_IMPORT_BYTES)}"}`;
    expectRejected(huge, /größer als 10 MB/);
  });

  it('never changes the current progress when a file is rejected', () => {
    const local = richProgress();
    const snapshot = structuredClone(local);
    parseBackup('{"broken"');
    parseBackup(backupText(local, (b) => (b.dataVersion = 99)));
    expect(local).toEqual(snapshot);
  });
});

describe('duplicates and idempotency', () => {
  it('collapses duplicate IDs inside a file', () => {
    const text = backupText(richProgress(), (b) => {
      const data = b.data as Record<string, string[]>;
      data.completedLessonIds = ['lesson-1', 'lesson-1', 'lesson-2'];
      data.activityDays = ['2026-09-20', '2026-09-20'];
    });
    const parsed = parseBackup(text);
    if (!parsed.ok) throw new Error(parsed.errors.join());
    expect(parsed.imported.completedLessonIds).toEqual(['lesson-1', 'lesson-2']);
    expect(parsed.imported.activityDays).toEqual(['2026-09-20']);
  });

  it('merging the same backup again changes nothing and never doubles XP or counts', () => {
    const local = richProgress();
    const parsed = parseBackup(serializeBackup(createBackup(local)));
    if (!parsed.ok) throw new Error(parsed.errors.join());

    const once = mergeProgress(local, parsed.imported);
    const twice = mergeProgress(once, parsed.imported);
    expect(dataOf(once)).toEqual(dataOf(local));
    expect(dataOf(twice)).toEqual(dataOf(local));
    expect(twice.lessonResults['lesson-1'].xpAwarded).toBe(30);
    expect(twice.dailyActivity['2026-09-20']).toEqual({ lessons: 1, reviewSessions: 0, xp: 30 });
    expect(previewImport(local, parsed.imported, 'x').merge.changes).toBe(false);
  });
});

describe('merge rules', () => {
  it('keeps the earlier first completion with its XP and the later last completion', () => {
    expect(
      mergeLessonResult(
        { firstCompletedAt: '2026-09-10T10:00:00.000Z', lastCompletedAt: '2026-09-12T10:00:00.000Z', xpAwarded: 30 },
        { firstCompletedAt: '2026-09-05T10:00:00.000Z', lastCompletedAt: '2026-09-06T10:00:00.000Z', xpAwarded: 25 },
      ),
    ).toEqual({ firstCompletedAt: '2026-09-05T10:00:00.000Z', lastCompletedAt: '2026-09-12T10:00:00.000Z', xpAwarded: 25 });
    // Abschluss vor der Erfassung (null) gilt als frühester.
    expect(
      mergeLessonResult(
        { firstCompletedAt: '2026-09-10T10:00:00.000Z', lastCompletedAt: '2026-09-10T10:00:00.000Z', xpAwarded: 30 },
        { firstCompletedAt: null, lastCompletedAt: '2026-09-01T10:00:00.000Z', xpAwarded: 30 },
      ).firstCompletedAt,
    ).toBeNull();
  });

  it('prefers the more recent review and note', () => {
    const older = { stage: 3, dueDay: '2026-10-10', lastReviewedDay: '2026-09-20', lastResult: 'correct' as const, reviews: 4, lapses: 0 };
    const newer = { stage: 0, dueDay: '2026-09-26', lastReviewedDay: '2026-09-25', lastResult: 'wrong' as const, reviews: 5, lapses: 1 };
    expect(mergeReviewCard(older, newer)).toBe(newer);
    expect(mergeReviewCard(newer, older)).toBe(newer);

    const localNote = { lessonId: 'l', stepId: 's', text: 'lokal', updatedAt: '2026-09-20T10:00:00.000Z' };
    const newerNote = { ...localNote, text: 'neu', updatedAt: '2026-09-21T10:00:00.000Z' };
    const sameTime = { ...localNote, text: 'anders' };
    expect(mergeNote(localNote, newerNote)).toBe(newerNote);
    expect(mergeNote(newerNote, localNote)).toBe(newerNote);
    expect(mergeNote(localNote, sameTime)).toBe(localNote);
  });

  it('merges every collection by its documented rule', () => {
    const local = richProgress();
    let incoming = completeLesson(createEmptyProgress(), 'lesson-9', 40, at('2026-09-23'));
    incoming = logActivity(incoming, '2026-09-20', { lessons: 3, xp: 10 });
    incoming = toggleBookmark(incoming, 'lesson-1', null, at('2026-09-01'));
    incoming = toggleBookmark(incoming, 'lesson-9', null, at('2026-09-23'));
    incoming = saveNote(incoming, 'lesson-9', 'x', 'Neue Notiz', at('2026-09-23'));
    incoming = setDailyGoal(incoming, { kind: 'activities', target: 3 });
    incoming = updateSettings(incoming, { motion: 'system', compact: false });
    incoming = {
      ...incoming,
      answers: { q1: 'z', q9: 'a' },
      questionResults: {
        q2: { selectedOptionId: 'b', attempts: 5, firstAttemptCorrect: false, status: 'correct', wrongOptionIds: [] },
      },
      milestones: { 'first-lesson': { achievedDay: '2026-09-01' }, 'seven-days': { achievedDay: '2026-09-23' } },
      lessonPositions: {
        'lesson-3': { stepIndex: 4, updatedAt: at('2026-09-23') },
        'lesson-1': { stepIndex: 1, updatedAt: at('2026-09-23') },
      },
    };

    const merged = mergeProgress(local, incoming);

    expect(merged.completedLessonIds).toEqual(['lesson-1', 'lesson-2', 'lesson-9']);
    expect(merged.dailyActivity['2026-09-20']).toEqual({ lessons: 3, reviewSessions: 0, xp: 30 });
    expect(merged.activityDays).toEqual(['2026-09-20', '2026-09-21', '2026-09-22', '2026-09-23']);
    expect(merged.bookmarks['lesson-1'].createdAt).toBe(at('2026-09-01'));
    expect(Object.keys(merged.bookmarks)).toHaveLength(3);
    expect(Object.keys(merged.notes)).toHaveLength(2);
    expect(merged.answers).toEqual({ q1: 'a', q2: 'b', q9: 'a' });
    expect(merged.questionResults.q2.attempts).toBe(5);
    expect(merged.milestones).toEqual({
      'first-lesson': { achievedDay: '2026-09-01' },
      'seven-days': { achievedDay: '2026-09-23' },
    });
    // Jüngere Position gewinnt; abgeschlossene Lektionen haben keine Position.
    expect(merged.lessonPositions).toEqual({ 'lesson-3': { stepIndex: 4, updatedAt: at('2026-09-23') } });
    // Tagesziel und Darstellung kommen standardmäßig aus der Sicherung …
    expect(merged.dailyGoal).toEqual({ kind: 'activities', target: 3 });
    expect(merged.settings).toEqual({ motion: 'system', compact: false });
    // … oder bleiben auf Wunsch lokal.
    const keep = mergeProgress(local, incoming, { keepLocalPreferences: true });
    expect(keep.dailyGoal).toEqual({ kind: 'xp', target: 60 });
    expect(keep.settings).toEqual({ motion: 'reduce', compact: true });
    // Lokal bleiben immer: laufende Runde, alte Website-Daten, unbekannte Felder.
    expect(merged.reviewSession?.questionIds).toEqual(['q1']);
    expect(merged.legacyReadChapters).toEqual(['b1-intro']);
    expect(merged.preservedFields).toEqual({ futureThing: 1 });
  });
});

describe('replace', () => {
  it('uses the backup and keeps only old website data and unknown fields', () => {
    const local = richProgress();
    const incoming = completeLesson(createEmptyProgress(), 'lesson-9', 40, at('2026-09-23'));
    const replaced = replaceProgress(local, incoming);

    expect(replaced.completedLessonIds).toEqual(['lesson-9']);
    expect(replaced.notes).toEqual({});
    expect(replaced.bookmarks).toEqual({});
    expect(replaced.dailyGoal).toEqual({ kind: 'activities', target: 1 });
    expect(replaced.reviewSession).toBeNull();
    expect(replaced.legacyReadChapters).toEqual(['b1-intro']);
    expect(replaced.legacyTrendRangeBest).toBe(7);
    expect(replaced.preservedFields).toEqual({ futureThing: 1 });
    expect(applyImport(local, incoming, 'replace').completedLessonIds).toEqual(['lesson-9']);
  });
});

describe('preview', () => {
  it('describes merge gains and replace losses before anything changes', () => {
    const local = richProgress();
    let incoming = completeLesson(createEmptyProgress(), 'lesson-1', 30, at('2026-09-20'));
    incoming = completeLesson(incoming, 'lesson-9', 40, at('2026-09-23'));
    incoming = saveNote(incoming, 'lesson-1', 'step-a', 'Neuere Fassung', at('2026-09-25'));
    incoming = saveNote(incoming, 'lesson-9', 'x', 'Neu', at('2026-09-23'));
    const snapshot = structuredClone(local);

    const preview = previewImport(local, incoming, '2026-09-29T08:00:00.000Z');

    expect(local).toEqual(snapshot);
    expect(preview.file).toMatchObject({ lessons: 2, notes: 2, bookmarks: 0 });
    expect(preview.merge).toMatchObject({
      newLessons: 1,
      newNotes: 1,
      updatedNotes: 1,
      keptLocalNotes: 0,
      newBookmarks: 0,
      newLearningDays: 1,
      preferencesDiffer: true,
      changes: true,
    });
    expect(preview.replace).toMatchObject({
      lostLessons: 1,
      lostNotes: 0,
      lostBookmarks: 2,
      goalChanges: true,
      settingsChange: true,
    });

    const olderNote = saveNote(incoming, 'lesson-1', 'step-a', 'Ältere Fassung', at('2026-09-01'));
    expect(previewImport(local, olderNote, 'x').merge).toMatchObject({ updatedNotes: 0, keptLocalNotes: 1 });
  });
});

describe('Lesestellen im Buchleser (F-13, v9)', () => {
  const withPosition = (progress: AcademyProgress, lessonId: string, stepId: string | null, at: string) =>
    recordReaderPosition(progress, 'brooks-trends.chapter-01', lessonId, stepId, at);

  it('sichert und liest die Lesestellen mit', () => {
    const progress = withPosition(createEmptyProgress(), 'lesson-a', 'step-2', '2026-09-29T08:00:00.000Z');
    const result = parseBackup(serializeBackup(createBackup(progress)));
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.imported.readerPositions).toEqual(progress.readerPositions);
    }
  });

  it('nimmt Sicherungen aus v8 ohne Lesestellen weiterhin an', () => {
    const text = backupText(createEmptyProgress(), (backup) => {
      backup.dataVersion = 8;
      delete (backup.data as Record<string, unknown>).readerPositions;
    });
    const result = parseBackup(text);
    expect(result.ok).toBe(true);
    if (result.ok) expect(result.imported.readerPositions).toEqual({});
  });

  it('verlangt das Feld ab v9 und prüft jeden Eintrag streng', () => {
    expectRejected(
      backupText(createEmptyProgress(), (backup) => {
        delete (backup.data as Record<string, unknown>).readerPositions;
      }),
      /Pflichtfeld fehlt: „readerPositions“/,
    );
    const broken = (entry: unknown) =>
      backupText(createEmptyProgress(), (backup) => {
        (backup.data as Record<string, unknown>).readerPositions = { 'brooks-trends.chapter-01': entry };
      });
    expectRejected(broken({ lessonId: '', stepId: null, updatedAt: '2026-09-29T08:00:00.000Z' }), /readerPositions/);
    expectRejected(broken({ lessonId: 'a', stepId: 3, updatedAt: '2026-09-29T08:00:00.000Z' }), /readerPositions/);
    expectRejected(broken({ lessonId: 'a', stepId: null }), /readerPositions/);
    expectRejected(broken({ lessonId: 'a', stepId: null, updatedAt: 'gestern', extra: 1 }), /readerPositions/);
  });

  it('führt zusammen: die zuletzt gesetzte Lesestelle je Einheit gewinnt', () => {
    const older = withPosition(createEmptyProgress(), 'lesson-a', null, '2026-09-01T08:00:00.000Z');
    const newer = withPosition(createEmptyProgress(), 'lesson-b', 'step-1', '2026-09-20T08:00:00.000Z');
    const other = recordReaderPosition(createEmptyProgress(), 'brooks-trends.chapter-02', 'lesson-x', null, '2026-09-02T08:00:00.000Z');
    expect(mergeProgress(older, newer).readerPositions['brooks-trends.chapter-01'].lessonId).toBe('lesson-b');
    expect(mergeProgress(newer, older).readerPositions['brooks-trends.chapter-01'].lessonId).toBe('lesson-b');
    const merged = mergeProgress(older, other);
    expect(Object.keys(merged.readerPositions).sort()).toEqual(['brooks-trends.chapter-01', 'brooks-trends.chapter-02']);
    // Derselbe Import zweimal ändert nichts.
    expect(mergeProgress(merged, merged).readerPositions).toEqual(merged.readerPositions);
  });

  it('ersetzt beim vollständigen Import und leert beim Zurücksetzen', () => {
    const local = withPosition(createEmptyProgress(), 'lesson-a', null, '2026-09-01T08:00:00.000Z');
    expect(replaceProgress(local, createEmptyProgress()).readerPositions).toEqual({});
    const storage = new MemoryStorage();
    saveProgress(storage, local);
    resetAcademyData(storage);
    expect(loadProgress(storage).readerPositions).toEqual({});
  });
});

describe('Leseoptionen im Buchmodus (F-22, v10)', () => {
  const larger = () => updateReadingOptions(createEmptyProgress(), { size: 'larger', spacing: 'wide' });

  it('sichert und liest die Leseoptionen mit', () => {
    const backup = createBackup(larger());
    expect(backup.dataVersion).toBe(ACADEMY_PROGRESS_VERSION);
    expect(backup.data.readingOptions).toEqual({ size: 'larger', spacing: 'wide' });
    const result = parseBackup(serializeBackup(backup));
    expect(result.ok).toBe(true);
    if (result.ok) expect(result.imported.readingOptions).toEqual({ size: 'larger', spacing: 'wide' });
  });

  it('nimmt Sicherungen aus v8 und v9 ohne Leseoptionen weiterhin an', () => {
    for (const version of [8, 9]) {
      const text = backupText(createEmptyProgress(), (backup) => {
        backup.dataVersion = version;
        delete (backup.data as Record<string, unknown>).readingOptions;
        if (version === 8) delete (backup.data as Record<string, unknown>).readerPositions;
      });
      const result = parseBackup(text);
      expect(result.ok, `v${version}`).toBe(true);
      if (result.ok) expect(result.imported.readingOptions).toEqual({ size: 'standard', spacing: 'standard' });
    }
  });

  it('verlangt das Feld ab v10 und prüft es streng', () => {
    expectRejected(
      backupText(createEmptyProgress(), (backup) => {
        delete (backup.data as Record<string, unknown>).readingOptions;
      }),
      /Pflichtfeld fehlt: „readingOptions“/,
    );
    const broken = (value: unknown) =>
      backupText(createEmptyProgress(), (backup) => {
        (backup.data as Record<string, unknown>).readingOptions = value;
      });
    expectRejected(broken({ size: 'riesig', spacing: 'standard' }), /„readingOptions“ hat das falsche Format/);
    expectRejected(broken({ size: 'large' }), /readingOptions/);
    expectRejected(broken({ size: 'large', spacing: 'wide', extra: 1 }), /readingOptions/);
    expectRejected(broken('large'), /readingOptions/);
  });

  it('Zusammenführen: Leseoptionen zählen zur Darstellung und können lokal bleiben', () => {
    const local = createEmptyProgress();
    const incoming = larger();
    expect(mergeProgress(local, incoming).readingOptions).toEqual(incoming.readingOptions);
    expect(mergeProgress(local, incoming, { keepLocalPreferences: true }).readingOptions).toEqual(local.readingOptions);
    const preview = previewImport(local, incoming, '2026-09-29T08:00:00.000Z');
    expect(preview.merge.preferencesDiffer).toBe(true);
    expect(preview.replace.settingsChange).toBe(true);
    expect(previewImport(local, createEmptyProgress(), 'x').merge.preferencesDiffer).toBe(false);
  });

  it('ersetzt beim vollständigen Import und setzt beim Zurücksetzen auf „Standard“', () => {
    expect(replaceProgress(createEmptyProgress(), larger()).readingOptions).toEqual({ size: 'larger', spacing: 'wide' });
    const storage = new MemoryStorage();
    saveProgress(storage, larger());
    resetAcademyData(storage);
    expect(loadProgress(storage).readingOptions).toEqual({ size: 'standard', spacing: 'standard' });
  });
});

describe('Trainerrunden (F-15, v11)', () => {
  const run = (sessionId: string, completedAt: string) => ({
    sessionId,
    completedAt,
    best: 1,
    defensible: 0,
    mistake: 1,
    missedCues: 1,
  });
  const withRuns = (runs: ReturnType<typeof run>[]): AcademyProgress => ({
    ...createEmptyProgress(),
    caseRuns: { 'bar-case.chapter-01.range-high-test': runs },
  });
  const withSession = (progress: AcademyProgress): AcademyProgress => ({
    ...progress,
    caseSessions: {
      'bar-case.chapter-01.range-high-test': {
        sessionId: 'run-open',
        startedAt: '2026-09-29T08:00:00.000Z',
        updatedAt: '2026-09-29T08:00:00.000Z',
        session: {
          caseId: 'bar-case.chapter-01.range-high-test',
          index: 0,
          draft: { decision: null, cueIds: [] },
          answers: {},
          revealed: false,
          finished: false,
        },
      },
    },
  });

  it('sichert abgeschlossene Runden, aber keine laufende Runde', () => {
    const progress = withSession(withRuns([run('run-a', '2026-09-29T08:00:00.000Z')]));
    const backup = createBackup(progress);
    expect(backup.data.caseRuns).toEqual(progress.caseRuns);
    expect('caseSessions' in backup.data).toBe(false);
    const result = parseBackup(serializeBackup(backup));
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.imported.caseRuns).toEqual(progress.caseRuns);
      expect(result.imported.caseSessions).toEqual({});
    }
  });

  it('nimmt Sicherungen aus v10 ohne Trainerrunden weiterhin an', () => {
    const result = parseBackup(
      backupText(createEmptyProgress(), (backup) => {
        backup.dataVersion = 10;
        delete (backup.data as Record<string, unknown>).caseRuns;
      }),
    );
    expect(result.ok).toBe(true);
    if (result.ok) expect(result.imported.caseRuns).toEqual({});
  });

  it('verlangt das Feld ab v11 und prüft jede Runde streng', () => {
    expectRejected(
      backupText(createEmptyProgress(), (backup) => {
        delete (backup.data as Record<string, unknown>).caseRuns;
      }),
      /Pflichtfeld fehlt: „caseRuns“/,
    );
    const broken = (runs: unknown) =>
      backupText(createEmptyProgress(), (backup) => {
        (backup.data as Record<string, unknown>).caseRuns = { 'bar-case.x': runs };
      });
    expectRejected(broken('x'), /caseRuns/);
    expectRejected(broken([{ ...run('a', '2026-09-29T08:00:00.000Z'), best: -1 }]), /caseRuns/);
    expectRejected(broken([{ ...run('a', '2026-09-29T08:00:00.000Z'), extra: 1 }]), /caseRuns/);
    expectRejected(broken([run('a', 'gestern')]), /caseRuns/);
    expectRejected(broken([run('a', '2026-09-29T08:00:00.000Z'), run('a', '2026-09-29T09:00:00.000Z')]), /doppelt/);
  });

  it('führt zusammen, ohne Runden doppelt zu zählen, und behält die lokale laufende Runde', () => {
    const local = withSession(withRuns([run('run-a', '2026-09-29T08:00:00.000Z')]));
    const incoming = withRuns([run('run-a', '2026-09-29T08:00:00.000Z'), run('run-b', '2026-09-29T09:00:00.000Z')]);
    const merged = mergeProgress(local, incoming);
    expect(merged.caseRuns['bar-case.chapter-01.range-high-test'].map((item) => item.sessionId)).toEqual(['run-a', 'run-b']);
    expect(merged.caseSessions).toEqual(local.caseSessions);
    expect(mergeProgress(merged, incoming).caseRuns).toEqual(merged.caseRuns);
    const preview = previewImport(local, incoming, '2026-09-29T10:00:00.000Z');
    expect(preview.file.caseRuns).toBe(2);
    expect(preview.merge.newCaseRuns).toBe(1);
    expect(preview.merge.changes).toBe(true);
    expect(previewImport(local, withRuns([]), 'x').replace.lostCaseRuns).toBe(1);
  });

  it('Ersetzen übernimmt die Runden der Sicherung und beendet laufende; Zurücksetzen leert beides', () => {
    const local = withSession(withRuns([run('run-a', '2026-09-29T08:00:00.000Z')]));
    const replaced = replaceProgress(local, withRuns([run('run-z', '2026-09-29T09:00:00.000Z')]));
    expect(Object.values(replaced.caseRuns).flat().map((item) => item.sessionId)).toEqual(['run-z']);
    expect(replaced.caseSessions).toEqual({});
    const storage = new MemoryStorage();
    saveProgress(storage, local);
    resetAcademyData(storage);
    const reset = loadProgress(storage);
    expect(reset.caseRuns).toEqual({});
    expect(reset.caseSessions).toEqual({});
  });
});

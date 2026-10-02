import {
  ACADEMY_PROGRESS_KEY,
  ACADEMY_PROGRESS_VERSION,
  DAILY_GOAL_OPTIONS,
  MAX_ACTIVITY_DAYS,
  MAX_NOTE_LENGTH,
  MAX_CASE_RUNS,
  MAX_REASONING_LENGTH,
  REASONING_CONFIDENCES,
  MILESTONE_IDS,
  isCourseId,
  loadProgress,
  tidyCaseRuns,
  migrateProgress,
  savedKey,
  type AcademyProgress,
  type LessonResult,
  type MilestoneRecord,
  type Note,
} from './progress';
import { isDayKey, localDayKey, MAX_REVIEW_STAGE, type ReviewCard } from './reviewScheduler';

/* ------------------------------------------------------------------ */
/* Format                                                              */
/* ------------------------------------------------------------------ */

export const BACKUP_FORMAT = 'wqt-academy-backup';
export const BACKUP_FORMAT_VERSION = 1;
/** Sicherungen gibt es seit Datenmodell v8 (F-08). */
export const MIN_BACKUP_DATA_VERSION = 8;
/**
 * Größere Dateien werden ohne Lesen abgelehnt. Großzügig genug für jede
 * realistische eigene Sicherung (auch mit vielen langen Notizen).
 */
export const MAX_IMPORT_BYTES = 10 * 1024 * 1024;
export const MAX_IMPORT_LABEL = `${MAX_IMPORT_BYTES / (1024 * 1024)} MB`;
/** Obergrenze je Sammlung (Notizen, Antworten …) gegen unangemessene Dateien. */
export const MAX_COLLECTION_ENTRIES = 20_000;
const MAX_ID_LENGTH = 200;
const FORBIDDEN_KEYS = new Set(['__proto__', 'constructor', 'prototype']);

/**
 * Felder einer Sicherung. Nicht enthalten sind die laufende
 * Wiederholungsrunde (flüchtig) und unbekannte Zusatzfelder.
 */
export const BACKUP_FIELDS = [
  'completedLessonIds',
  'answers',
  'questionResults',
  'lessonResults',
  'reviewCards',
  'activityDays',
  'dailyActivity',
  'dailyGoal',
  'milestones',
  'bookmarks',
  'notes',
  'settings',
  'lastLessonId',
  'lessonPositions',
  'caseRuns',
  'guideSeenAt',
  'activeCourseId',
] as const;

/** Felder des gestrichenen Buchmodus: in Sicherungen bis v16 noch vorhanden, werden beim Import ignoriert. */
const RETIRED_FIELDS = ['readerPositions', 'readingOptions'] as const;

export type BackupField = (typeof BACKUP_FIELDS)[number];

/**
 * Felder, die es erst ab einer bestimmten Datenversion gibt. Ältere
 * Sicherungen ohne sie bleiben gültig; die Migration ergänzt leere Werte.
 */
const FIELD_SINCE: Partial<Record<BackupField, number>> = {
  caseRuns: 11,
  guideSeenAt: 13,
  activeCourseId: 16,
};
export type BackupData = Pick<AcademyProgress, BackupField>;

export interface AcademyBackup {
  format: typeof BACKUP_FORMAT;
  formatVersion: number;
  app: string;
  exportedAt: string;
  dataVersion: number;
  data: BackupData;
}

const ENVELOPE_FIELDS = new Set(['format', 'formatVersion', 'app', 'exportedAt', 'dataVersion', 'data']);

export function createBackup(progress: AcademyProgress, now: Date = new Date()): AcademyBackup {
  const data = Object.fromEntries(
    BACKUP_FIELDS.map((field) => [field, progress[field]]),
  ) as unknown as BackupData;
  return {
    format: BACKUP_FORMAT,
    formatVersion: BACKUP_FORMAT_VERSION,
    app: 'WQT Academy',
    exportedAt: now.toISOString(),
    dataVersion: ACADEMY_PROGRESS_VERSION,
    data: { ...data, completedLessonIds: [...new Set(progress.completedLessonIds)] },
  };
}

export function serializeBackup(backup: AcademyBackup): string {
  return `${JSON.stringify(backup, null, 2)}\n`;
}

export function backupFileName(now: Date = new Date()): string {
  return `wqt-academy-sicherung-${localDayKey(now)}.json`;
}

/* ------------------------------------------------------------------ */
/* Strenge Prüfung                                                     */
/* ------------------------------------------------------------------ */

type Errors = string[];

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function isIsoDate(value: unknown): value is string {
  return typeof value === 'string' && value.length <= 40 && !Number.isNaN(Date.parse(value));
}

function isId(value: unknown): value is string {
  return typeof value === 'string' && value.length > 0 && value.length <= MAX_ID_LENGTH;
}

function isCount(value: unknown): value is number {
  return typeof value === 'number' && Number.isInteger(value) && value >= 0 && value <= 1e9;
}

function hasExactKeys(value: Record<string, unknown>, keys: readonly string[]): boolean {
  const actual = Object.keys(value);
  return actual.length === keys.length && keys.every((key) => key in value);
}

/** Findet gefährliche Schlüssel wie `__proto__` in beliebiger Tiefe. */
function findForbiddenKey(value: unknown, depth = 0): string | null {
  if (depth > 8 || value === null || typeof value !== 'object') return null;
  for (const key of Object.keys(value)) {
    if (FORBIDDEN_KEYS.has(key)) return key;
    const nested = findForbiddenKey((value as Record<string, unknown>)[key], depth + 1);
    if (nested) return nested;
  }
  return null;
}

type EntryCheck = (key: string, entry: unknown) => string | null;

function checkRecord(field: string, value: unknown, errors: Errors, check: EntryCheck): void {
  if (!isRecord(value)) {
    errors.push(`„${field}“ hat das falsche Format.`);
    return;
  }
  const entries = Object.entries(value);
  if (entries.length > MAX_COLLECTION_ENTRIES) {
    errors.push(`„${field}“ enthält unangemessen viele Einträge.`);
    return;
  }
  let invalid = 0;
  let example: string | null = null;
  for (const [key, entry] of entries) {
    const problem = isId(key) ? check(key, entry) : 'ungültiger Schlüssel';
    if (problem) {
      invalid += 1;
      example ??= `${key.slice(0, 60)}: ${problem}`;
    }
  }
  if (invalid > 0) {
    errors.push(
      `„${field}“ enthält ${invalid} ungültige${invalid === 1 ? 'n Eintrag' : ' Einträge'} (z. B. ${example}).`,
    );
  }
}

const QUESTION_RESULT_KEYS = ['selectedOptionId', 'attempts', 'firstAttemptCorrect', 'status', 'wrongOptionIds'];
const LESSON_RESULT_KEYS = ['firstCompletedAt', 'lastCompletedAt', 'xpAwarded'];
const REVIEW_CARD_KEYS = ['stage', 'dueDay', 'lastReviewedDay', 'lastResult', 'reviews', 'lapses'];
const DAILY_KEYS = ['lessons', 'reviewSessions', 'xp'];
const BOOKMARK_KEYS = ['lessonId', 'stepId', 'createdAt'];
const NOTE_KEYS = ['lessonId', 'stepId', 'text', 'updatedAt'];
const POSITION_KEYS = ['stepIndex', 'updatedAt'];
const CASE_RUN_KEYS = ['sessionId', 'completedAt', 'best', 'defensible', 'mistake', 'missedCues'];

function validRunReasoning(value: unknown): boolean {
  if (!isRecord(value)) return false;
  return Object.entries(value).every(
    ([decisionId, reasoning]) =>
      isId(decisionId) &&
      isRecord(reasoning) &&
      hasExactKeys(reasoning, ['text', 'confidence']) &&
      typeof reasoning.text === 'string' &&
      Array.from(reasoning.text).length <= MAX_REASONING_LENGTH &&
      (reasoning.confidence === null || (REASONING_CONFIDENCES as readonly unknown[]).includes(reasoning.confidence)),
  );
}

function validRunAnswers(value: unknown): boolean {
  if (!isRecord(value)) return false;
  return Object.entries(value).every(
    ([decisionId, answer]) =>
      isId(decisionId) &&
      isRecord(answer) &&
      hasExactKeys(answer, ['decision', 'cueIds']) &&
      (answer.decision === 'long' || answer.decision === 'short' || answer.decision === 'wait') &&
      Array.isArray(answer.cueIds) &&
      answer.cueIds.length <= 50 &&
      answer.cueIds.every(isId),
  );
}

const checks: Record<BackupField, (value: unknown, errors: Errors) => void> = {
  completedLessonIds(value, errors) {
    if (!Array.isArray(value) || value.length > MAX_COLLECTION_ENTRIES || !value.every(isId)) {
      errors.push('„completedLessonIds“ muss eine Liste von Lektions-IDs sein.');
    }
  },
  answers(value, errors) {
    checkRecord('answers', value, errors, (_key, entry) => (isId(entry) ? null : 'keine Antwort-ID'));
  },
  questionResults(value, errors) {
    checkRecord('questionResults', value, errors, (_key, entry) => {
      if (!isRecord(entry) || !hasExactKeys(entry, QUESTION_RESULT_KEYS)) return 'unvollständig';
      if (entry.selectedOptionId !== null && !isId(entry.selectedOptionId)) return 'Auswahl ungültig';
      if (!isCount(entry.attempts)) return 'Versuche ungültig';
      if (entry.firstAttemptCorrect !== null && typeof entry.firstAttemptCorrect !== 'boolean') {
        return 'Erstversuch ungültig';
      }
      if (!['open', 'correct', 'revealed'].includes(entry.status as string)) return 'Status ungültig';
      if (!Array.isArray(entry.wrongOptionIds) || !entry.wrongOptionIds.every(isId)) {
        return 'Fehlversuche ungültig';
      }
      return null;
    });
  },
  lessonResults(value, errors) {
    checkRecord('lessonResults', value, errors, (_key, entry) => {
      if (!isRecord(entry) || !hasExactKeys(entry, LESSON_RESULT_KEYS)) return 'unvollständig';
      if (entry.firstCompletedAt !== null && !isIsoDate(entry.firstCompletedAt)) return 'Datum ungültig';
      if (!isIsoDate(entry.lastCompletedAt)) return 'Datum ungültig';
      return isCount(entry.xpAwarded) ? null : 'XP ungültig';
    });
  },
  reviewCards(value, errors) {
    checkRecord('reviewCards', value, errors, (_key, entry) => {
      if (!isRecord(entry) || !hasExactKeys(entry, REVIEW_CARD_KEYS)) return 'unvollständig';
      if (!isCount(entry.stage) || entry.stage > MAX_REVIEW_STAGE) return 'Stufe ungültig';
      if (!isDayKey(entry.dueDay) || !isDayKey(entry.lastReviewedDay)) return 'Tag ungültig';
      if (entry.lastResult !== 'correct' && entry.lastResult !== 'wrong') return 'Ergebnis ungültig';
      return isCount(entry.reviews) && isCount(entry.lapses) ? null : 'Zähler ungültig';
    });
  },
  activityDays(value, errors) {
    if (!Array.isArray(value) || value.length > MAX_ACTIVITY_DAYS || !value.every(isDayKey)) {
      errors.push('„activityDays“ muss eine Liste gültiger Kalendertage sein.');
    }
  },
  dailyActivity(value, errors) {
    if (isRecord(value) && Object.keys(value).length > MAX_ACTIVITY_DAYS) {
      errors.push('„dailyActivity“ enthält unangemessen viele Tage.');
      return;
    }
    checkRecord('dailyActivity', value, errors, (key, entry) => {
      if (!isDayKey(key)) return 'kein Kalendertag';
      if (!isRecord(entry) || !hasExactKeys(entry, DAILY_KEYS)) return 'unvollständig';
      return DAILY_KEYS.every((field) => isCount(entry[field])) ? null : 'Zähler ungültig';
    });
  },
  dailyGoal(value, errors) {
    const valid =
      isRecord(value) &&
      hasExactKeys(value, ['kind', 'target']) &&
      DAILY_GOAL_OPTIONS.some((option) => option.kind === value.kind && option.target === value.target);
    if (!valid) errors.push('„dailyGoal“ ist kein angebotenes Tagesziel.');
  },
  milestones(value, errors) {
    checkRecord('milestones', value, errors, (key, entry) => {
      if (!(MILESTONE_IDS as readonly string[]).includes(key)) return 'unbekannter Meilenstein';
      return isRecord(entry) && hasExactKeys(entry, ['achievedDay']) && isDayKey(entry.achievedDay)
        ? null
        : 'Tag ungültig';
    });
  },
  bookmarks(value, errors) {
    checkRecord('bookmarks', value, errors, (key, entry) => {
      if (!isRecord(entry) || !hasExactKeys(entry, BOOKMARK_KEYS)) return 'unvollständig';
      if (!isId(entry.lessonId) || (entry.stepId !== null && !isId(entry.stepId))) return 'Fundstelle ungültig';
      if (key !== savedKey(entry.lessonId, entry.stepId as string | null)) return 'Schlüssel passt nicht';
      return isIsoDate(entry.createdAt) ? null : 'Datum ungültig';
    });
  },
  notes(value, errors) {
    checkRecord('notes', value, errors, (key, entry) => {
      if (!isRecord(entry) || !hasExactKeys(entry, NOTE_KEYS)) return 'unvollständig';
      if (!isId(entry.lessonId) || (entry.stepId !== null && !isId(entry.stepId))) return 'Fundstelle ungültig';
      if (key !== savedKey(entry.lessonId, entry.stepId as string | null)) return 'Schlüssel passt nicht';
      if (typeof entry.text !== 'string' || entry.text.trim() === '') return 'leerer Text';
      if (Array.from(entry.text).length > MAX_NOTE_LENGTH) return 'Text zu lang';
      return isIsoDate(entry.updatedAt) ? null : 'Datum ungültig';
    });
  },
  settings(value, errors) {
    const valid =
      isRecord(value) &&
      hasExactKeys(value, ['motion', 'compact']) &&
      (value.motion === 'system' || value.motion === 'reduce') &&
      typeof value.compact === 'boolean';
    if (!valid) errors.push('„settings“ hat das falsche Format.');
  },
  caseRuns(value, errors) {
    checkRecord('caseRuns', value, errors, (_key, runs) => {
      if (!Array.isArray(runs)) return 'keine Liste';
      if (runs.length > MAX_CASE_RUNS) return 'zu viele Runden';
      const ids = new Set<string>();
      for (const run of runs) {
        if (!isRecord(run)) return 'Runde unvollständig';
        // `answers` gibt es seit v12; Runden aus v11 haben es nicht.
        // `reasoning` (eigene Begründungen) seit v14.
        const keys = [...CASE_RUN_KEYS, ...(['answers', 'reasoning'] as const).filter((key) => key in run)];
        if (!hasExactKeys(run, keys)) return 'Runde unvollständig';
        if ('answers' in run && !validRunAnswers(run.answers)) return 'Antworten ungültig';
        if ('reasoning' in run && !validRunReasoning(run.reasoning)) return 'Begründung ungültig';
        if (!isId(run.sessionId) || ids.has(run.sessionId)) return 'Runden-ID ungültig oder doppelt';
        ids.add(run.sessionId);
        if (!isIsoDate(run.completedAt)) return 'Datum ungültig';
        if (![run.best, run.defensible, run.mistake, run.missedCues].every(isCount)) return 'Zählwert ungültig';
      }
      return null;
    });
  },
  guideSeenAt(value, errors) {
    if (value !== null && !isIsoDate(value)) errors.push('„guideSeenAt“ ist ungültig.');
  },
  lastLessonId(value, errors) {
    if (value !== null && !isId(value)) errors.push('„lastLessonId“ ist ungültig.');
  },
  activeCourseId(value, errors) {
    if (value !== null && !isCourseId(value)) errors.push('„activeCourseId“ ist ungültig.');
  },
  lessonPositions(value, errors) {
    checkRecord('lessonPositions', value, errors, (_key, entry) => {
      if (!isRecord(entry) || !hasExactKeys(entry, POSITION_KEYS)) return 'unvollständig';
      return isCount(entry.stepIndex) && isIsoDate(entry.updatedAt) ? null : 'Position ungültig';
    });
  },
};

export type ParsedBackup =
  | { ok: true; backup: AcademyBackup; imported: AcademyProgress }
  | { ok: false; errors: string[] };

function byteLength(text: string): number {
  return new TextEncoder().encode(text).length;
}

/**
 * Liest und prüft eine Sicherung streng. Nichts wird übernommen, solange ein
 * Fehler vorliegt: falsches Format, unbekannte oder neuere Version, fehlende
 * oder unbekannte Felder, ungültige Einträge, gefährliche Schlüssel oder eine
 * zu große Datei.
 */
export function parseBackup(text: string): ParsedBackup {
  if (byteLength(text) > MAX_IMPORT_BYTES) {
    return { ok: false, errors: [`Die Datei ist größer als ${MAX_IMPORT_LABEL} und wird nicht gelesen.`] };
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    return { ok: false, errors: ['Die Datei ist beschädigt oder kein gültiges JSON.'] };
  }

  if (!isRecord(parsed) || parsed.format !== BACKUP_FORMAT) {
    return { ok: false, errors: ['Die Datei ist keine Sicherung der WQT Academy.'] };
  }

  const forbidden = findForbiddenKey(parsed);
  if (forbidden) {
    return { ok: false, errors: [`Die Datei enthält den unzulässigen Schlüssel „${forbidden}“.`] };
  }

  const errors: Errors = [];
  const { formatVersion, dataVersion, exportedAt, data } = parsed;

  if (formatVersion !== BACKUP_FORMAT_VERSION) {
    errors.push(
      typeof formatVersion === 'number' && formatVersion > BACKUP_FORMAT_VERSION
        ? `Das Sicherungsformat ${formatVersion} stammt aus einer neueren Version der Academy.`
        : 'Das Sicherungsformat ist unbekannt.',
    );
  }
  if (
    typeof dataVersion !== 'number' ||
    !Number.isInteger(dataVersion) ||
    dataVersion < MIN_BACKUP_DATA_VERSION ||
    dataVersion > ACADEMY_PROGRESS_VERSION
  ) {
    errors.push(
      typeof dataVersion === 'number' && dataVersion > ACADEMY_PROGRESS_VERSION
        ? `Die Daten (Version ${dataVersion}) stammen aus einer neueren Version der Academy.`
        : 'Die Datenversion der Sicherung ist ungültig.',
    );
  }
  if (!isIsoDate(exportedAt)) errors.push('Das Exportdatum fehlt oder ist ungültig.');
  if ('app' in parsed && typeof parsed.app !== 'string') errors.push('Die App-Angabe ist ungültig.');
  for (const key of Object.keys(parsed)) {
    if (!ENVELOPE_FIELDS.has(key)) errors.push(`Unbekanntes Feld „${key.slice(0, 60)}“.`);
  }

  if (!isRecord(data)) {
    errors.push('Die Lerndaten fehlen.');
    return { ok: false, errors };
  }
  for (const field of BACKUP_FIELDS) {
    if (field in data) checks[field](data[field], errors);
    else if (typeof dataVersion !== 'number' || dataVersion >= (FIELD_SINCE[field] ?? 0)) {
      errors.push(`Pflichtfeld fehlt: „${field}“.`);
    }
  }
  for (const key of Object.keys(data)) {
    if ((BACKUP_FIELDS as readonly string[]).includes(key)) continue;
    // Sicherungen bis v16 enthalten noch die Felder des früheren Buchmodus; sie werden ignoriert.
    const retired = (RETIRED_FIELDS as readonly string[]).includes(key) && typeof dataVersion === 'number' && dataVersion <= 16;
    if (!(retired && isRecord(data[key]))) errors.push(`Unbekanntes Datenfeld „${key.slice(0, 60)}“.`);
  }

  if (errors.length > 0) return { ok: false, errors };

  const imported = migrateProgress({ ...data, version: dataVersion });
  if (!imported) return { ok: false, errors: ['Die Lerndaten konnten nicht gelesen werden.'] };

  return {
    ok: true,
    backup: parsed as unknown as AcademyBackup,
    imported: {
      ...imported,
      // Doppelte Einträge in Listen sind harmlos und werden zusammengefasst.
      completedLessonIds: [...new Set(imported.completedLessonIds)],
      reviewSession: null,
      // Laufende Trainerrunden sind nicht Teil der Sicherung.
      caseSessions: {},
      preservedFields: {},
    },
  };
}

/* ------------------------------------------------------------------ */
/* Merge-Regeln                                                        */
/* ------------------------------------------------------------------ */

function time(value: string | null): number {
  if (value === null) return Number.NEGATIVE_INFINITY;
  const parsed = Date.parse(value);
  return Number.isNaN(parsed) ? Number.NEGATIVE_INFINITY : parsed;
}

function unionIds(first: readonly string[], second: readonly string[]): string[] {
  return [...new Set([...first, ...second])];
}

/**
 * Führt zwei Sammlungen zusammen. Schlüssel nur auf einer Seite werden
 * übernommen, bei Schlüsseln auf beiden Seiten entscheidet `resolve`.
 * `resolve(x, x)` muss `x` liefern – so ändert ein wiederholter Import nichts.
 */
function mergeRecords<T>(
  local: Record<string, T>,
  incoming: Record<string, T>,
  resolve: (local: T, incoming: T) => T,
): Record<string, T> {
  const result: Record<string, T> = { ...local };
  for (const [key, value] of Object.entries(incoming)) {
    result[key] = key in local ? resolve(local[key], value) : value;
  }
  return result;
}

/** Der frühere Erstabschluss bestimmt die XP; `null` (vor der Erfassung) gilt als frühester. */
export function mergeLessonResult(local: LessonResult, incoming: LessonResult): LessonResult {
  const first = time(incoming.firstCompletedAt) < time(local.firstCompletedAt) ? incoming : local;
  const last = time(incoming.lastCompletedAt) > time(local.lastCompletedAt) ? incoming : local;
  return {
    firstCompletedAt: first.firstCompletedAt,
    lastCompletedAt: last.lastCompletedAt,
    xpAwarded: first.xpAwarded,
  };
}

/** Der jüngere Wiederholungsstand gewinnt; bei Gleichstand der mit mehr Wiederholungen. */
export function mergeReviewCard(local: ReviewCard, incoming: ReviewCard): ReviewCard {
  if (incoming.lastReviewedDay !== local.lastReviewedDay) {
    return incoming.lastReviewedDay > local.lastReviewedDay ? incoming : local;
  }
  return incoming.reviews > local.reviews ? incoming : local;
}

/** Die neuere Fassung einer Notiz gewinnt; bei gleichem Zeitpunkt bleibt die lokale. */
export function mergeNote(local: Note, incoming: Note): Note {
  if (incoming.text === local.text) return local;
  return time(incoming.updatedAt) > time(local.updatedAt) ? incoming : local;
}

export interface MergeOptions {
  /** Eigenes Tagesziel und eigene Darstellung behalten statt die der Sicherung. */
  keepLocalPreferences?: boolean;
}

/**
 * Sicherer Merge (Standard). Nichts Lokales geht verloren, außer der älteren
 * Fassung einer Notiz, die auf beiden Seiten unterschiedlich existiert:
 *
 * - abgeschlossene Lektionen, Lerntage, Lesezeichen, Meilensteine: Vereinigung
 *   (Lesezeichen und Meilensteine mit dem früheren Datum)
 * - Lektionsergebnisse: früherer Erstabschluss samt seinen XP, späterer letzter
 *   Abschluss – XP entstehen nie doppelt
 * - Versuchsdaten: der Datensatz mit mehr Versuchen; Antworten: lokal vor Import
 * - Wiederholungsplan: jüngerer Stand; Lektionspositionen: jüngerer Stand,
 *   entfällt für abgeschlossene Lektionen
 * - Tageszählwerte: je Feld der größere Wert – nie eine Summe, damit dieselbe
 *   Sicherung nichts doppelt zählt
 * - Notizen: neuere Fassung
 * - Tagesziel und Darstellung: aus der Sicherung, außer `keepLocalPreferences`
 * - gewählter Kurs: lokal, ohne lokale Wahl der aus der Sicherung
 * - laufende Runde und unbekannte Zusatzfelder: lokal
 */
export function mergeProgress(
  local: AcademyProgress,
  incoming: AcademyProgress,
  options: MergeOptions = {},
): AcademyProgress {
  const completedLessonIds = unionIds(local.completedLessonIds, incoming.completedLessonIds);
  const completed = new Set(completedLessonIds);
  const positions = mergeRecords(local.lessonPositions, incoming.lessonPositions, (a, b) =>
    time(b.updatedAt) > time(a.updatedAt) ? b : a,
  );

  return {
    ...local,
    completedLessonIds,
    lessonResults: mergeRecords(local.lessonResults, incoming.lessonResults, mergeLessonResult),
    answers: { ...incoming.answers, ...local.answers },
    questionResults: mergeRecords(local.questionResults, incoming.questionResults, (a, b) =>
      b.attempts > a.attempts ? b : a,
    ),
    reviewCards: mergeRecords(local.reviewCards, incoming.reviewCards, mergeReviewCard),
    activityDays: unionIds(local.activityDays, incoming.activityDays).sort().slice(-MAX_ACTIVITY_DAYS),
    dailyActivity: mergeRecords(local.dailyActivity, incoming.dailyActivity, (a, b) => ({
      lessons: Math.max(a.lessons, b.lessons),
      reviewSessions: Math.max(a.reviewSessions, b.reviewSessions),
      xp: Math.max(a.xp, b.xp),
    })),
    milestones: mergeRecords<MilestoneRecord>(
      local.milestones as Record<string, MilestoneRecord>,
      incoming.milestones as Record<string, MilestoneRecord>,
      (a, b) => (b.achievedDay < a.achievedDay ? b : a),
    ),
    bookmarks: mergeRecords(local.bookmarks, incoming.bookmarks, (a, b) =>
      time(b.createdAt) < time(a.createdAt) ? b : a,
    ),
    notes: mergeRecords(local.notes, incoming.notes, mergeNote),
    lessonPositions: Object.fromEntries(
      Object.entries(positions).filter(([lessonId]) => !completed.has(lessonId)),
    ),
    lastLessonId: local.lastLessonId ?? incoming.lastLessonId,
    dailyGoal: options.keepLocalPreferences ? local.dailyGoal : incoming.dailyGoal,
    settings: options.keepLocalPreferences ? local.settings : incoming.settings,
    // Abgeschlossene Trainerrunden: Vereinigung je Runden-ID, nichts doppelt.
    caseRuns: mergeCaseRuns(local.caseRuns, incoming.caseRuns),
    // Einmal geschlossen bleibt geschlossen.
    guideSeenAt: local.guideSeenAt ?? incoming.guideSeenAt,
    // Der hier gewählte Kurs bleibt; ohne eigene Wahl gilt die der Sicherung.
    activeCourseId: local.activeCourseId ?? incoming.activeCourseId,
  };
}

/**
 * Vollständiges Ersetzen: Der Stand der Sicherung gilt. Erhalten bleiben nur
 * unbekannte Zusatzfelder; eine laufende Wiederholungsrunde endet.
 */
export function replaceProgress(local: AcademyProgress, incoming: AcademyProgress): AcademyProgress {
  return {
    ...incoming,
    reviewSession: null,
    caseSessions: {},
    preservedFields: local.preservedFields,
    updatedAt: new Date().toISOString(),
  };
}

function mergeCaseRuns(
  local: AcademyProgress['caseRuns'],
  incoming: AcademyProgress['caseRuns'],
): AcademyProgress['caseRuns'] {
  const ids = new Set([...Object.keys(local), ...Object.keys(incoming)]);
  return Object.fromEntries(
    [...ids].map((caseId) => [caseId, tidyCaseRuns([...(local[caseId] ?? []), ...(incoming[caseId] ?? [])])]),
  );
}

function caseRunIds(progress: AcademyProgress): Set<string> {
  return new Set(Object.values(progress.caseRuns).flatMap((runs) => runs.map((run) => run.sessionId)));
}

export type ImportMode = 'merge' | 'replace';

export function applyImport(
  local: AcademyProgress,
  incoming: AcademyProgress,
  mode: ImportMode,
  options: MergeOptions = {},
): AcademyProgress {
  return mode === 'replace'
    ? replaceProgress(local, incoming)
    : mergeProgress(local, incoming, options);
}

/** Vergleich unabhängig von der Reihenfolge der Schlüssel. */
function canonical(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(canonical);
  if (isRecord(value)) {
    return Object.fromEntries(
      Object.keys(value)
        .sort()
        .map((key) => [key, canonical(value[key])]),
    );
  }
  return value;
}

export function sameBackupData(first: AcademyProgress, second: AcademyProgress): boolean {
  const epoch = new Date(0);
  return (
    JSON.stringify(canonical(createBackup(first, epoch).data)) ===
    JSON.stringify(canonical(createBackup(second, epoch).data))
  );
}

/* ------------------------------------------------------------------ */
/* Vorschau                                                            */
/* ------------------------------------------------------------------ */

export interface BackupCounts {
  lessons: number;
  answeredQuestions: number;
  reviewCards: number;
  learningDays: number;
  milestones: number;
  bookmarks: number;
  notes: number;
  caseRuns: number;
}

function counts(progress: AcademyProgress): BackupCounts {
  return {
    lessons: new Set(progress.completedLessonIds).size,
    answeredQuestions: new Set([
      ...Object.keys(progress.answers),
      ...Object.keys(progress.questionResults),
    ]).size,
    reviewCards: Object.keys(progress.reviewCards).length,
    learningDays: progress.activityDays.length,
    milestones: Object.keys(progress.milestones).length,
    bookmarks: Object.keys(progress.bookmarks).length,
    notes: Object.keys(progress.notes).length,
    caseRuns: caseRunIds(progress).size,
  };
}

function missingKeys(from: Record<string, unknown>, target: Record<string, unknown>): number {
  return Object.keys(from).filter((key) => !(key in target)).length;
}

export interface ImportPreview {
  exportedAt: string;
  file: BackupCounts;
  merge: {
    newLessons: number;
    newLearningDays: number;
    newMilestones: number;
    newBookmarks: number;
    newNotes: number;
    /** Lokale Notizen, die durch eine neuere Fassung aus der Sicherung ersetzt werden. */
    updatedNotes: number;
    /** Notizen, deren lokale Fassung neuer ist und bleibt. */
    keptLocalNotes: number;
    newReviewCards: number;
    newCaseRuns: number;
    /** Tagesziel oder Darstellung der Sicherung weichen vom aktuellen Stand ab. */
    preferencesDiffer: boolean;
    changes: boolean;
  };
  replace: {
    lostLessons: number;
    lostNotes: number;
    lostBookmarks: number;
    lostLearningDays: number;
    lostCaseRuns: number;
    goalChanges: boolean;
    settingsChange: boolean;
  };
}

/** Was ein Import bewirken würde – berechnet, ohne etwas zu verändern. */
export function previewImport(
  local: AcademyProgress,
  incoming: AcademyProgress,
  exportedAt: string,
): ImportPreview {
  const merged = mergeProgress(local, incoming);
  const localLessons = new Set(local.completedLessonIds);
  const incomingLessons = new Set(incoming.completedLessonIds);
  const conflicts = Object.keys(incoming.notes).filter(
    (key) => key in local.notes && local.notes[key].text !== incoming.notes[key].text,
  );
  const updatedNotes = conflicts.filter((key) => merged.notes[key] === incoming.notes[key]).length;

  const merge = {
    newLessons: [...incomingLessons].filter((id) => !localLessons.has(id)).length,
    newLearningDays: merged.activityDays.length - local.activityDays.length,
    newMilestones: missingKeys(incoming.milestones, local.milestones),
    newBookmarks: missingKeys(incoming.bookmarks, local.bookmarks),
    newNotes: missingKeys(incoming.notes, local.notes),
    updatedNotes,
    keptLocalNotes: conflicts.length - updatedNotes,
    newReviewCards: missingKeys(incoming.reviewCards, local.reviewCards),
    newCaseRuns: [...caseRunIds(incoming)].filter((id) => !caseRunIds(local).has(id)).length,
    preferencesDiffer: false,
    changes: !sameBackupData(merged, local),
  };

  const goalChanges =
    local.dailyGoal.kind !== incoming.dailyGoal.kind ||
    local.dailyGoal.target !== incoming.dailyGoal.target;
  const settingsChange =
    local.settings.motion !== incoming.settings.motion ||
    local.settings.compact !== incoming.settings.compact;
  merge.preferencesDiffer = goalChanges || settingsChange;

  return {
    exportedAt,
    file: counts(incoming),
    merge,
    replace: {
      lostLessons: [...localLessons].filter((id) => !incomingLessons.has(id)).length,
      lostNotes: missingKeys(local.notes, incoming.notes),
      lostBookmarks: missingKeys(local.bookmarks, incoming.bookmarks),
      lostLearningDays: local.activityDays.filter((day) => !incoming.activityDays.includes(day)).length,
      lostCaseRuns: [...caseRunIds(local)].filter((id) => !caseRunIds(incoming).has(id)).length,
      goalChanges,
      settingsChange,
    },
  };
}

/* ------------------------------------------------------------------ */
/* Zurücksetzen                                                        */
/* ------------------------------------------------------------------ */

/**
 * Löscht ausschließlich den Academy-Datensatz.
 */
export function resetAcademyData(
  storage: Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>,
): AcademyProgress {
  storage.removeItem(ACADEMY_PROGRESS_KEY);
  return loadProgress(storage);
}

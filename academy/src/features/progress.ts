export const LEGACY_PROGRESS_KEY = 'brooks-progress';
export const LEGACY_TREND_RANGE_BEST_KEY = 'brooks-tr-best';
/**
 * Der Schlüssel behält aus Kompatibilitätsgründen sein Suffix `-v1`, auch wenn
 * der gespeicherte Datensatz inzwischen `version: 2` trägt.
 */
export const ACADEMY_PROGRESS_KEY = 'wqt-academy-progress-v1';
/** Sicherung eines unlesbaren Academy-Datensatzes, bevor er ersetzt wird. */
export const ACADEMY_PROGRESS_BACKUP_KEY = 'wqt-academy-progress-backup';

export const ACADEMY_PROGRESS_VERSION = 3;

export interface LessonPosition {
  /** Nullbasierter Index des zuletzt geöffneten gültigen Schritts. */
  stepIndex: number;
  updatedAt: string;
}

export type QuestionStatus = 'open' | 'correct' | 'revealed';

/**
 * Versuche und Ergebnis einer Frage. Die aktuelle Auswahl liegt getrennt davon
 * in `AcademyProgress.answers`.
 */
export interface QuestionResult {
  /** Auswahl im aktuellen Durchgang; `null` vor einem (erneuten) Versuch. */
  selectedOptionId: string | null;
  /** Anzahl aller abgegebenen Antworten über alle Durchgänge. */
  attempts: number;
  /**
   * Ergebnis des ersten erfassten Versuchs. `null`, wenn die Frage schon vor
   * der Versuchserfassung beantwortet wurde – dieser Wert wird nie erfunden.
   */
  firstAttemptCorrect: boolean | null;
  /** Stand im aktuellen Durchgang. */
  status: QuestionStatus;
  /** Im aktuellen Durchgang bereits falsch gewählte Optionen. */
  wrongOptionIds: string[];
}

/** Einmaliger Abschluss einer Lektion samt gutgeschriebener XP. */
export interface LessonResult {
  /** `null`, wenn die Lektion schon vor der Abschlusserfassung erledigt war. */
  firstCompletedAt: string | null;
  lastCompletedAt: string;
  /** Beim ersten Abschluss gutgeschriebene XP; ändert sich danach nie. */
  xpAwarded: number;
}

export interface AcademyProgress {
  version: typeof ACADEMY_PROGRESS_VERSION;
  completedLessonIds: string[];
  /** Zuletzt abgegebene Auswahl je Frage (seit v1 unverändert im Format). */
  answers: Record<string, string>;
  questionResults: Record<string, QuestionResult>;
  lessonResults: Record<string, LessonResult>;
  lastLessonId: string | null;
  /** Begonnene, noch nicht abgeschlossene Lektionen mit ihrem letzten Schritt. */
  lessonPositions: Record<string, LessonPosition>;
  legacyReadChapters: string[];
  legacyTrendRangeBest: number;
  updatedAt: string;
  /**
   * Unbekannte Felder (z. B. aus einer späteren Version) werden nicht
   * verworfen, sondern beim Speichern unverändert zurückgeschrieben.
   */
  preservedFields: Record<string, unknown>;
}

type StorageLike = Pick<Storage, 'getItem' | 'setItem'>;

function nowIso(): string {
  return new Date().toISOString();
}

export function createEmptyProgress(): AcademyProgress {
  return {
    version: ACADEMY_PROGRESS_VERSION,
    completedLessonIds: [],
    answers: {},
    questionResults: {},
    lessonResults: {},
    lastLessonId: null,
    lessonPositions: {},
    legacyReadChapters: [],
    legacyTrendRangeBest: 0,
    updatedAt: nowIso(),
    preservedFields: {},
  };
}

function readLegacyChapters(storage: StorageLike): string[] {
  try {
    const raw = storage.getItem(LEGACY_PROGRESS_KEY);
    if (!raw) return [];

    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return [];

    return Object.entries(parsed as Record<string, unknown>)
      .filter(([, value]) => value === true)
      .map(([key]) => key)
      .sort();
  } catch {
    return [];
  }
}

function readLegacyBest(storage: StorageLike): number {
  const parsed = Number.parseInt(
    storage.getItem(LEGACY_TREND_RANGE_BEST_KEY) ?? '0',
    10,
  );
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
}

const KNOWN_FIELDS = new Set([
  'version',
  'completedLessonIds',
  'answers',
  'questionResults',
  'lessonResults',
  'lastLessonId',
  'lessonPositions',
  'legacyReadChapters',
  'legacyTrendRangeBest',
  'updatedAt',
]);

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function stringArray(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === 'string')
    : [];
}

function normalizePositions(value: unknown): Record<string, LessonPosition> {
  if (!isRecord(value)) return {};

  return Object.fromEntries(
    Object.entries(value).flatMap(([lessonId, position]) => {
      if (!isRecord(position)) return [];
      const { stepIndex, updatedAt } = position;
      if (typeof stepIndex !== 'number' || !Number.isInteger(stepIndex) || stepIndex < 0) {
        return [];
      }
      return [
        [
          lessonId,
          { stepIndex, updatedAt: typeof updatedAt === 'string' ? updatedAt : nowIso() },
        ],
      ];
    }),
  );
}

const QUESTION_STATUSES: readonly QuestionStatus[] = ['open', 'correct', 'revealed'];

function normalizeQuestionResults(value: unknown): Record<string, QuestionResult> {
  if (!isRecord(value)) return {};

  return Object.fromEntries(
    Object.entries(value).flatMap(([questionId, result]) => {
      if (!isRecord(result)) return [];
      const { selectedOptionId, attempts, firstAttemptCorrect, status } = result;
      if (typeof attempts !== 'number' || !Number.isInteger(attempts) || attempts < 0) {
        return [];
      }
      if (typeof status !== 'string' || !(QUESTION_STATUSES as readonly string[]).includes(status)) {
        return [];
      }
      return [
        [
          questionId,
          {
            selectedOptionId: typeof selectedOptionId === 'string' ? selectedOptionId : null,
            attempts,
            firstAttemptCorrect:
              typeof firstAttemptCorrect === 'boolean' ? firstAttemptCorrect : null,
            status: status as QuestionStatus,
            wrongOptionIds: stringArray(result.wrongOptionIds),
          },
        ],
      ];
    }),
  );
}

function normalizeLessonResults(value: unknown): Record<string, LessonResult> {
  if (!isRecord(value)) return {};

  return Object.fromEntries(
    Object.entries(value).flatMap(([lessonId, result]) => {
      if (!isRecord(result)) return [];
      const { firstCompletedAt, lastCompletedAt, xpAwarded } = result;
      if (
        typeof xpAwarded !== 'number' ||
        !Number.isFinite(xpAwarded) ||
        xpAwarded < 0 ||
        typeof lastCompletedAt !== 'string'
      ) {
        return [];
      }
      return [
        [
          lessonId,
          {
            firstCompletedAt: typeof firstCompletedAt === 'string' ? firstCompletedAt : null,
            lastCompletedAt,
            xpAwarded,
          },
        ],
      ];
    }),
  );
}

/**
 * Überführt einen gespeicherten Datensatz beliebiger bekannter Version in das
 * aktuelle Modell. v1 besitzt noch keine Lektionspositionen, v1 und v2 noch
 * keine Versuchs- und Abschlussdaten; diese starten leer. Vorhandene Antworten
 * bleiben unverändert in `answers` und werden nicht in Versuche umgedeutet.
 * Liefert `null`, wenn der Wert kein erkennbarer Academy-Datensatz ist.
 */
export function migrateProgress(value: unknown): AcademyProgress | null {
  if (!isRecord(value)) return null;
  if (typeof value.version !== 'number' || value.version < 1) return null;

  const best = value.legacyTrendRangeBest;

  return {
    version: ACADEMY_PROGRESS_VERSION,
    completedLessonIds: stringArray(value.completedLessonIds),
    answers: isRecord(value.answers)
      ? Object.fromEntries(
          Object.entries(value.answers).filter(
            (entry): entry is [string, string] => typeof entry[1] === 'string',
          ),
        )
      : {},
    questionResults: normalizeQuestionResults(value.questionResults),
    lessonResults: normalizeLessonResults(value.lessonResults),
    lastLessonId:
      typeof value.lastLessonId === 'string' ? value.lastLessonId : null,
    lessonPositions: normalizePositions(value.lessonPositions),
    legacyReadChapters: stringArray(value.legacyReadChapters),
    legacyTrendRangeBest:
      typeof best === 'number' && Number.isFinite(best) && best > 0 ? best : 0,
    updatedAt: typeof value.updatedAt === 'string' ? value.updatedAt : nowIso(),
    preservedFields: Object.fromEntries(
      Object.entries(value).filter(([key]) => !KNOWN_FIELDS.has(key)),
    ),
  };
}

export function loadProgress(storage: StorageLike): AcademyProgress {
  let stored: AcademyProgress | null = null;
  let raw: string | null = null;
  try {
    raw = storage.getItem(ACADEMY_PROGRESS_KEY);
  } catch {
    raw = null;
  }

  if (raw) {
    try {
      stored = migrateProgress(JSON.parse(raw));
    } catch {
      stored = null;
    }

    // Unlesbare Daten nicht still überschreiben: vorher sichern.
    if (!stored) {
      try {
        storage.setItem(ACADEMY_PROGRESS_BACKUP_KEY, raw);
      } catch {
        // Speicher voll oder gesperrt – die Anwendung bleibt trotzdem nutzbar.
      }
    }
  }

  const progress = stored ?? createEmptyProgress();
  const legacyReadChapters = readLegacyChapters(storage);
  const legacyTrendRangeBest = readLegacyBest(storage);

  return {
    ...progress,
    legacyReadChapters: Array.from(
      new Set([...progress.legacyReadChapters, ...legacyReadChapters]),
    ).sort(),
    legacyTrendRangeBest: Math.max(
      progress.legacyTrendRangeBest,
      legacyTrendRangeBest,
    ),
  };
}

export function saveProgress(
  storage: StorageLike,
  progress: AcademyProgress,
): AcademyProgress {
  const next = { ...progress, updatedAt: nowIso() };
  const { preservedFields, ...known } = next;
  storage.setItem(
    ACADEMY_PROGRESS_KEY,
    JSON.stringify({ ...preservedFields, ...known }),
  );
  return next;
}

/**
 * Schließt eine Lektion ab. Abschluss und XP entstehen genau einmal; jeder
 * weitere Abschluss aktualisiert nur `lastCompletedAt`. Eine bereits vor der
 * Abschlusserfassung erledigte Lektion erhält `firstCompletedAt: null`.
 */
export function completeLesson(
  progress: AcademyProgress,
  lessonId: string,
  xp: number,
  now: string = nowIso(),
): AcademyProgress {
  const { [lessonId]: _finished, ...openPositions } = progress.lessonPositions;
  const alreadyCompleted = progress.completedLessonIds.includes(lessonId);
  const existing = progress.lessonResults[lessonId];

  const result: LessonResult = existing
    ? { ...existing, lastCompletedAt: now }
    : {
        firstCompletedAt: alreadyCompleted ? null : now,
        lastCompletedAt: now,
        xpAwarded: Number.isFinite(xp) && xp > 0 ? xp : 0,
      };

  return {
    ...progress,
    completedLessonIds: alreadyCompleted
      ? progress.completedLessonIds
      : [...progress.completedLessonIds, lessonId],
    lastLessonId: lessonId,
    lessonPositions: openPositions,
    lessonResults: { ...progress.lessonResults, [lessonId]: result },
  };
}

/**
 * Merkt sich den aktuellen Schritt einer begonnenen Lektion. Abgeschlossene
 * Lektionen werden bewusst nicht erfasst: Sie öffnen sich wieder von vorn.
 */
export function recordLessonStep(
  progress: AcademyProgress,
  lessonId: string,
  stepIndex: number,
): AcademyProgress {
  if (progress.completedLessonIds.includes(lessonId)) return progress;
  if (!Number.isInteger(stepIndex) || stepIndex < 0) return progress;
  if (progress.lessonPositions[lessonId]?.stepIndex === stepIndex) return progress;

  return {
    ...progress,
    lessonPositions: {
      ...progress.lessonPositions,
      [lessonId]: { stepIndex, updatedAt: nowIso() },
    },
  };
}

export function recordAnswer(
  progress: AcademyProgress,
  questionId: string,
  optionId: string,
): AcademyProgress {
  return {
    ...progress,
    answers: { ...progress.answers, [questionId]: optionId },
  };
}

export function progressPercent(
  progress: AcademyProgress,
  publishedLessonIds: string[],
): number {
  if (publishedLessonIds.length === 0) return 0;

  const completed = new Set(progress.completedLessonIds);
  const completedPublished = publishedLessonIds.filter((id) =>
    completed.has(id),
  ).length;

  return Math.round((completedPublished / publishedLessonIds.length) * 100);
}

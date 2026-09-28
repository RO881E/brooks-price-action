export const LEGACY_PROGRESS_KEY = 'brooks-progress';
export const LEGACY_TREND_RANGE_BEST_KEY = 'brooks-tr-best';
/**
 * Der Schlüssel behält aus Kompatibilitätsgründen sein Suffix `-v1`, auch wenn
 * der gespeicherte Datensatz inzwischen `version: 2` trägt.
 */
export const ACADEMY_PROGRESS_KEY = 'wqt-academy-progress-v1';
/** Sicherung eines unlesbaren Academy-Datensatzes, bevor er ersetzt wird. */
export const ACADEMY_PROGRESS_BACKUP_KEY = 'wqt-academy-progress-backup';

export const ACADEMY_PROGRESS_VERSION = 2;

export interface LessonPosition {
  /** Nullbasierter Index des zuletzt geöffneten gültigen Schritts. */
  stepIndex: number;
  updatedAt: string;
}

export interface AcademyProgress {
  version: typeof ACADEMY_PROGRESS_VERSION;
  completedLessonIds: string[];
  answers: Record<string, string>;
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

/**
 * Überführt einen gespeicherten Datensatz beliebiger bekannter Version in das
 * aktuelle Modell. v1 besitzt noch keine Lektionspositionen; sie starten leer.
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

export function completeLesson(
  progress: AcademyProgress,
  lessonId: string,
): AcademyProgress {
  const { [lessonId]: _finished, ...openPositions } = progress.lessonPositions;

  return {
    ...progress,
    completedLessonIds: Array.from(
      new Set([...progress.completedLessonIds, lessonId]),
    ),
    lastLessonId: lessonId,
    lessonPositions: openPositions,
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

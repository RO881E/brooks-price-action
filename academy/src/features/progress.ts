export const LEGACY_PROGRESS_KEY = 'brooks-progress';
export const LEGACY_TREND_RANGE_BEST_KEY = 'brooks-tr-best';
export const ACADEMY_PROGRESS_KEY = 'wqt-academy-progress-v1';

export interface AcademyProgress {
  version: 1;
  completedLessonIds: string[];
  answers: Record<string, string>;
  lastLessonId: string | null;
  legacyReadChapters: string[];
  legacyTrendRangeBest: number;
  updatedAt: string;
}

type StorageLike = Pick<Storage, 'getItem' | 'setItem'>;

function nowIso(): string {
  return new Date().toISOString();
}

export function createEmptyProgress(): AcademyProgress {
  return {
    version: 1,
    completedLessonIds: [],
    answers: {},
    lastLessonId: null,
    legacyReadChapters: [],
    legacyTrendRangeBest: 0,
    updatedAt: nowIso(),
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

function normalizeProgress(value: unknown): AcademyProgress | null {
  if (!value || typeof value !== 'object') return null;

  const candidate = value as Partial<AcademyProgress>;
  if (candidate.version !== 1) return null;

  return {
    version: 1,
    completedLessonIds: Array.isArray(candidate.completedLessonIds)
      ? candidate.completedLessonIds.filter(
          (item): item is string => typeof item === 'string',
        )
      : [],
    answers:
      candidate.answers && typeof candidate.answers === 'object'
        ? Object.fromEntries(
            Object.entries(candidate.answers).filter(
              (entry): entry is [string, string] =>
                typeof entry[1] === 'string',
            ),
          )
        : {},
    lastLessonId:
      typeof candidate.lastLessonId === 'string'
        ? candidate.lastLessonId
        : null,
    legacyReadChapters: Array.isArray(candidate.legacyReadChapters)
      ? candidate.legacyReadChapters.filter(
          (item): item is string => typeof item === 'string',
        )
      : [],
    legacyTrendRangeBest:
      typeof candidate.legacyTrendRangeBest === 'number'
        ? candidate.legacyTrendRangeBest
        : 0,
    updatedAt:
      typeof candidate.updatedAt === 'string' ? candidate.updatedAt : nowIso(),
  };
}

export function loadProgress(storage: StorageLike): AcademyProgress {
  let stored: AcademyProgress | null = null;

  try {
    const raw = storage.getItem(ACADEMY_PROGRESS_KEY);
    stored = raw ? normalizeProgress(JSON.parse(raw)) : null;
  } catch {
    stored = null;
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
  storage.setItem(ACADEMY_PROGRESS_KEY, JSON.stringify(next));
  return next;
}

export function completeLesson(
  progress: AcademyProgress,
  lessonId: string,
): AcademyProgress {
  return {
    ...progress,
    completedLessonIds: Array.from(
      new Set([...progress.completedLessonIds, lessonId]),
    ),
    lastLessonId: lessonId,
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

import {
  isDayKey,
  localDayKey,
  MAX_REVIEW_STAGE,
  type DayKey,
  type ReviewCard,
} from './reviewScheduler';
import type { CaseSession } from './barTrainer';

/**
 * Der Schlüssel behält aus Kompatibilitätsgründen sein Suffix `-v1`, auch wenn
 * der gespeicherte Datensatz inzwischen `version: 2` trägt.
 */
export const ACADEMY_PROGRESS_KEY = 'wqt-academy-progress-v1';
/** Sicherung eines unlesbaren Academy-Datensatzes, bevor er ersetzt wird. */
export const ACADEMY_PROGRESS_BACKUP_KEY = 'wqt-academy-progress-backup';

export const ACADEMY_PROGRESS_VERSION = 16;

/** Wie viele Lerntage höchstens gespeichert werden (gut ein Jahr). */
export const MAX_ACTIVITY_DAYS = 400;

/**
 * Lesestelle im Buchleser je Einheit (seit F-13, v9): zuletzt gelesener
 * Abschnitt (Lektion) und Schritt. Unabhängig vom Lektionsabschluss und von
 * `lessonPositions` des Lesson Players.
 */
export interface ReaderPosition {
  lessonId: string;
  stepId: string | null;
  updatedAt: string;
}

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

export type ReviewMode = 'due' | 'mistakes' | 'unit' | 'mixed';

export const REVIEW_MODES: readonly ReviewMode[] = ['due', 'mistakes', 'unit', 'mixed'];

/** Laufende Wiederholungsrunde; übersteht einen Reload. */
export interface ReviewSession {
  mode: ReviewMode;
  /** Gewähltes Kapitel bei `mode: 'unit'`, sonst `null`. */
  unitId: string | null;
  /** Feste Reihenfolge der Fragen dieser Runde. */
  questionIds: string[];
  /** Aktuelle Frage; gleich der Länge, wenn die Runde beendet ist. */
  index: number;
  /** In dieser Runde gewählte Antwort je Frage. */
  answers: Record<string, string>;
  startedDay: DayKey;
  /** Ob die Runde bereits als Lernaktivität gezählt wurde (seit F-05). */
  activityRecorded: boolean;
  /**
   * Themenrunde (seit F-27, v15): nur die Beschriftung. Die Fragen bleiben die
   * bestehenden; fehlt das Thema später in der Karte, bleibt die Runde spielbar.
   */
  topicId?: string;
}

/** Zählwerte eines Kalendertags für Tagesziel und Wochenansicht (seit F-05). */
export interface DailyActivity {
  /** Abgeschlossene Lektionen, auch Wiederholungen einer Lektion. */
  lessons: number;
  /** Beendete Wiederholungsrunden mit mindestens einer beantworteten Frage. */
  reviewSessions: number;
  /** An diesem Tag tatsächlich gutgeschriebene XP. */
  xp: number;
}

export type DailyGoalKind = 'activities' | 'xp';

export interface DailyGoal {
  kind: DailyGoalKind;
  target: number;
}

/** Wählbare Tagesziele; das erste ist die Voreinstellung. */
export const DAILY_GOAL_OPTIONS: readonly DailyGoal[] = [
  { kind: 'activities', target: 1 },
  { kind: 'activities', target: 2 },
  { kind: 'activities', target: 3 },
  { kind: 'xp', target: 30 },
  { kind: 'xp', target: 60 },
  { kind: 'xp', target: 100 },
];

export type MilestoneId =
  | 'first-lesson'
  | 'first-chapter'
  | 'xp-1000'
  | 'seven-days'
  | 'perfect-review';

export const MILESTONE_IDS: readonly MilestoneId[] = [
  'first-lesson',
  'first-chapter',
  'xp-1000',
  'seven-days',
  'perfect-review',
];

export interface MilestoneRecord {
  achievedDay: DayKey;
}

/** Lesezeichen auf eine Lektion (`stepId: null`) oder einen Schritt (seit F-07). */
export interface Bookmark {
  lessonId: string;
  stepId: string | null;
  createdAt: string;
}

/** Persönliche Klartextnotiz zu einem Schritt (seit F-07). */
export interface Note {
  lessonId: string;
  stepId: string | null;
  text: string;
  updatedAt: string;
}

/**
 * Laufende Runde im Bar-für-Bar-Trainer je Fall (seit F-15, v11). `session`
 * ist der Zustand der Engine (`features/barTrainer.ts`); ob er noch zum Fall
 * passt, prüft `restoreSession` beim Öffnen – hier wird nur die Form gesichert.
 */
export interface StoredCaseSession {
  /** Stabile ID dieser Runde. */
  sessionId: string;
  startedAt: string;
  updatedAt: string;
  session: CaseSession;
  /**
   * Eigene Begründung (seit F-24, v14): Entwurf zum aktuellen Punkt und die bei
   * der Abgabe eingefrorenen Fassungen je Entscheidungs-ID.
   */
  reasoningDraft?: CaseReasoning;
  reasoning?: Record<string, CaseReasoning>;
}

/** Eigene Sicherheit vor dem Reveal (F-24). */
export type ReasoningConfidence = 'unsure' | 'fairly' | 'sure';
export const REASONING_CONFIDENCES: readonly ReasoningConfidence[] = ['unsure', 'fairly', 'sure'];
/** Höchstlänge der eigenen Begründung in Zeichen. */
export const MAX_REASONING_LENGTH = 500;

/** Eigene, unbewertete Begründung zu einer Trainerentscheidung (F-24). */
export interface CaseReasoning {
  /** Klartext, höchstens {@link MAX_REASONING_LENGTH} Zeichen; darf leer sein. */
  text: string;
  confidence: ReasoningConfidence | null;
}

/** Bereinigt eine Begründung; `undefined`, wenn nichts festgehalten ist. */
export function normalizeReasoning(value: unknown): CaseReasoning | undefined {
  if (!isRecord(value)) return undefined;
  const text = typeof value.text === 'string' ? Array.from(value.text).slice(0, MAX_REASONING_LENGTH).join('') : '';
  const confidence = REASONING_CONFIDENCES.find((item) => item === value.confidence) ?? null;
  return text.trim() === '' && confidence === null ? undefined : { text, confidence };
}

function normalizeReasoningMap(value: unknown): Record<string, CaseReasoning> | undefined {
  if (!isRecord(value)) return undefined;
  const entries = Object.entries(value).flatMap(([decisionId, reasoning]) => {
    const normalized = isReaderId(decisionId) ? normalizeReasoning(reasoning) : undefined;
    return normalized ? [[decisionId, normalized] as const] : [];
  });
  return entries.length ? Object.fromEntries(entries) : undefined;
}

/** Abgeschlossene Trainerrunde (seit F-15, v11). Vergibt keine XP. */
export interface CaseRun {
  sessionId: string;
  completedAt: string;
  /** Anzahl der Entscheidungen je Einordnung. */
  best: number;
  defensible: number;
  mistake: number;
  /** Übersehene relevante Hinweise. */
  missedCues: number;
  /**
   * Abgegebene Antworten je Entscheidungspunkt (seit F-16, v12). Fehlt bei
   * Runden aus v11 – deren Einzelantworten gelten als „nicht erfasst“.
   */
  answers?: Record<string, CaseRunAnswer>;
  /** Eigene Begründungen je Entscheidungspunkt, eingefroren vor dem Reveal (seit F-24, v14). */
  reasoning?: Record<string, CaseReasoning>;
}

/** Eine abgegebene Trainerentscheidung (seit F-16). */
export interface CaseRunAnswer {
  decision: 'long' | 'short' | 'wait';
  cueIds: string[];
}

const CASE_DECISIONS = ['long', 'short', 'wait'];

function normalizeRunAnswers(value: unknown): Record<string, CaseRunAnswer> | undefined {
  if (!isRecord(value)) return undefined;
  const entries = Object.entries(value).flatMap(([decisionId, answer]) => {
    if (!isReaderId(decisionId) || !isRecord(answer)) return [];
    if (!CASE_DECISIONS.includes(answer.decision as string) || !Array.isArray(answer.cueIds)) return [];
    const cueIds = answer.cueIds.filter(isReaderId);
    if (cueIds.length !== answer.cueIds.length) return [];
    return [[decisionId, { decision: answer.decision as CaseRunAnswer['decision'], cueIds }] as const];
  });
  return entries.length === Object.keys(value).length ? Object.fromEntries(entries) : undefined;
}

/** Höchstens so viele abgeschlossene Runden je Fall werden aufbewahrt (die jüngsten). */
export const MAX_CASE_RUNS = 50;

/** Bewegung: der Systemeinstellung folgen oder immer reduzieren (seit F-08). */
export type MotionPreference = 'system' | 'reduce';

/** Darstellungseinstellungen dieses Browsers (seit F-08). */
export interface AcademySettings {
  motion: MotionPreference;
  compact: boolean;
}

export const DEFAULT_SETTINGS: AcademySettings = { motion: 'system', compact: false };

/** Schriftgröße des Lesetexts im Buchmodus (seit F-22, v10). */
export type ReadingSize = 'standard' | 'large' | 'larger';
/** Zeilenabstand des Lesetexts im Buchmodus (seit F-22, v10). */
export type ReadingSpacing = 'standard' | 'relaxed' | 'wide';

/** Leseoptionen des Buchmodus – nur Darstellung, kein Einfluss auf Inhalte. */
export interface ReadingOptions {
  size: ReadingSize;
  spacing: ReadingSpacing;
}

export const READING_SIZES: readonly ReadingSize[] = ['standard', 'large', 'larger'];
export const READING_SPACINGS: readonly ReadingSpacing[] = ['standard', 'relaxed', 'wide'];
export const DEFAULT_READING_OPTIONS: ReadingOptions = { size: 'standard', spacing: 'standard' };

export interface AcademyProgress {
  version: typeof ACADEMY_PROGRESS_VERSION;
  completedLessonIds: string[];
  /** Zuletzt abgegebene Auswahl je Frage (seit v1 unverändert im Format). */
  answers: Record<string, string>;
  questionResults: Record<string, QuestionResult>;
  lessonResults: Record<string, LessonResult>;
  /** Wiederholungsplan je Frage (seit F-03). */
  reviewCards: Record<string, ReviewCard>;
  reviewSession: ReviewSession | null;
  /**
   * Lokale Kalendertage mit echter Lernaktivität – Lektionsabschluss oder
   * beantwortete Wiederholung (seit F-04), aufsteigend sortiert.
   */
  activityDays: DayKey[];
  /** Zählwerte je Tag mit Lernaktivität (seit F-05). */
  dailyActivity: Record<DayKey, DailyActivity>;
  dailyGoal: DailyGoal;
  /** Einmalig erreichte Meilensteine; einmal vergeben, nie entfernt. */
  milestones: Partial<Record<MilestoneId, MilestoneRecord>>;
  /** Schlüssel: `lessonId` oder `lessonId::stepId`. */
  bookmarks: Record<string, Bookmark>;
  notes: Record<string, Note>;
  settings: AcademySettings;
  lastLessonId: string | null;
  /** Begonnene, noch nicht abgeschlossene Lektionen mit ihrem letzten Schritt. */
  lessonPositions: Record<string, LessonPosition>;
  /** Lesestelle im Buchleser, Schlüssel: Einheit-ID (seit F-13). */
  readerPositions: Record<string, ReaderPosition>;
  /** Schriftgröße und Zeilenabstand im Buchmodus (seit F-22). */
  readingOptions: ReadingOptions;
  /** Laufende Trainerrunden, Schlüssel: Fall-ID (seit F-15). Nicht Teil der Sicherung. */
  caseSessions: Record<string, StoredCaseSession>;
  /** Abgeschlossene Trainerrunden je Fall, älteste zuerst (seit F-15). */
  caseRuns: Record<string, CaseRun[]>;
  /**
   * Wann die Einführung für den ersten Besuch geschlossen wurde (seit F-18,
   * v13). `null`: noch nicht – sie erscheint trotzdem nur ohne Lernstand.
   */
  guideSeenAt: string | null;
  /**
   * Gewählter Kurs (seit v16). `null`: noch keiner gewählt – dann gilt der
   * Standardkurs. Ein Kurs, den diese Version nicht kennt, bleibt gespeichert;
   * die App zeigt solange den Standardkurs. Der Lernstand selbst hängt an den
   * IDs von Lektionen, Fragen und Fällen und ist damit je Kurs getrennt.
   */
  activeCourseId: string | null;
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
    reviewCards: {},
    reviewSession: null,
    activityDays: [],
    dailyActivity: {},
    dailyGoal: DAILY_GOAL_OPTIONS[0],
    milestones: {},
    bookmarks: {},
    notes: {},
    settings: DEFAULT_SETTINGS,
    lastLessonId: null,
    lessonPositions: {},
    readerPositions: {},
    readingOptions: DEFAULT_READING_OPTIONS,
    caseSessions: {},
    caseRuns: {},
    guideSeenAt: null,
    activeCourseId: null,
    updatedAt: nowIso(),
    preservedFields: {},
  };
}

const KNOWN_FIELDS = new Set([
  'version',
  'completedLessonIds',
  'answers',
  'questionResults',
  'lessonResults',
  'reviewCards',
  'reviewSession',
  'activityDays',
  'dailyActivity',
  'dailyGoal',
  'milestones',
  'bookmarks',
  'notes',
  'settings',
  'lastLessonId',
  'lessonPositions',
  'readerPositions',
  'readingOptions',
  'caseSessions',
  'caseRuns',
  'guideSeenAt',
  'activeCourseId',
  // Bis v15 Felder der früheren Einzeldatei-Website; werden gelesen, aber verworfen.
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

const MAX_READER_ID_LENGTH = 200;

/** Kurs-IDs wie in der Bibliothek: Kleinbuchstaben, Ziffern und Bindestriche. */
const COURSE_ID_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function isCourseId(value: unknown): value is string {
  return typeof value === 'string' && value.length <= MAX_READER_ID_LENGTH && COURSE_ID_PATTERN.test(value);
}

/**
 * Wählt den Kurs, in dem gelernt wird (seit v16). Ändert nur die Wahl – der
 * Lernstand aller Kurse bleibt, wie er ist. Ungültige IDs ändern nichts.
 */
export function chooseCourse(progress: AcademyProgress, courseId: string): AcademyProgress {
  if (!isCourseId(courseId) || progress.activeCourseId === courseId) return progress;
  return { ...progress, activeCourseId: courseId };
}

function isReaderId(value: unknown): value is string {
  return typeof value === 'string' && value !== '' && value.length <= MAX_READER_ID_LENGTH;
}

/**
 * Lesestellen aus beliebigen, auch defekten Daten: Einträge ohne gültige
 * Einheit oder Lektion entfallen, ein fehlender Schritt bedeutet Abschnittsanfang.
 * Ob die Lektion noch existiert, entscheidet erst die Route – unbekannte IDs
 * fallen dort sicher zurück, ohne die gespeicherte Stelle zu löschen.
 */
export function normalizeReaderPositions(value: unknown): Record<string, ReaderPosition> {
  if (!isRecord(value)) return {};
  return Object.fromEntries(
    Object.entries(value).flatMap(([unitId, position]) => {
      if (!isReaderId(unitId) || !isRecord(position) || !isReaderId(position.lessonId)) return [];
      return [
        [
          unitId,
          {
            lessonId: position.lessonId,
            stepId: isReaderId(position.stepId) ? position.stepId : null,
            updatedAt: typeof position.updatedAt === 'string' ? position.updatedAt : nowIso(),
          },
        ],
      ];
    }),
  );
}

/** Laufende Trainerrunden: nur Form und Zuordnung, der Inhalt wird beim Öffnen geprüft. */
function optional<K extends string, V>(key: K, value: V | undefined): Partial<Record<K, V>> {
  return value === undefined ? {} : ({ [key]: value } as Record<K, V>);
}

export function normalizeCaseSessions(value: unknown): Record<string, StoredCaseSession> {
  if (!isRecord(value)) return {};
  return Object.fromEntries(
    Object.entries(value).flatMap(([caseId, entry]) => {
      if (!isReaderId(caseId) || !isRecord(entry) || !isReaderId(entry.sessionId)) return [];
      if (!isRecord(entry.session) || entry.session.caseId !== caseId) return [];
      const startedAt = typeof entry.startedAt === 'string' ? entry.startedAt : nowIso();
      return [
        [
          caseId,
          {
            sessionId: entry.sessionId,
            startedAt,
            updatedAt: typeof entry.updatedAt === 'string' ? entry.updatedAt : startedAt,
            session: entry.session as unknown as CaseSession,
            ...optional('reasoningDraft', normalizeReasoning(entry.reasoningDraft)),
            ...optional('reasoning', normalizeReasoningMap(entry.reasoning)),
          },
        ],
      ];
    }),
  );
}

export function isCaseRun(value: unknown): value is CaseRun {
  return (
    isRecord(value) &&
    isReaderId(value.sessionId) &&
    typeof value.completedAt === 'string' &&
    isCount(value.best) &&
    isCount(value.defensible) &&
    isCount(value.mistake) &&
    isCount(value.missedCues)
  );
}

/** Runden eindeutig je `sessionId`, nach Abschluss sortiert, auf die jüngsten begrenzt. */
export function tidyCaseRuns(runs: CaseRun[]): CaseRun[] {
  const bySession = new Map<string, CaseRun>();
  for (const run of runs) if (!bySession.has(run.sessionId)) bySession.set(run.sessionId, run);
  return [...bySession.values()]
    .sort((a, b) => a.completedAt.localeCompare(b.completedAt) || a.sessionId.localeCompare(b.sessionId))
    .slice(-MAX_CASE_RUNS);
}

export function normalizeCaseRuns(value: unknown): Record<string, CaseRun[]> {
  if (!isRecord(value)) return {};
  return Object.fromEntries(
    Object.entries(value).flatMap(([caseId, runs]) => {
      if (!isReaderId(caseId) || !Array.isArray(runs)) return [];
      const valid = tidyCaseRuns(
        runs.filter(isCaseRun).map(({ sessionId, completedAt, best, defensible, mistake, missedCues, answers, reasoning }) => {
          const valid = normalizeRunAnswers(answers);
          return {
            sessionId,
            completedAt,
            best,
            defensible,
            mistake,
            missedCues,
            ...(valid ? { answers: valid } : {}),
            ...optional('reasoning', normalizeReasoningMap(reasoning)),
          };
        }),
      );
      return valid.length ? [[caseId, valid]] : [];
    }),
  );
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

function isCount(value: unknown): value is number {
  return typeof value === 'number' && Number.isInteger(value) && value >= 0;
}

function normalizeReviewCards(value: unknown): Record<string, ReviewCard> {
  if (!isRecord(value)) return {};

  return Object.fromEntries(
    Object.entries(value).flatMap(([questionId, card]) => {
      if (!isRecord(card)) return [];
      const { stage, dueDay, lastReviewedDay, lastResult, reviews, lapses } = card;
      if (!isCount(stage) || stage > MAX_REVIEW_STAGE) return [];
      if (!isDayKey(dueDay) || !isDayKey(lastReviewedDay)) return [];
      if (lastResult !== 'correct' && lastResult !== 'wrong') return [];
      return [
        [
          questionId,
          {
            stage,
            dueDay,
            lastReviewedDay,
            lastResult,
            reviews: isCount(reviews) ? reviews : 0,
            lapses: isCount(lapses) ? lapses : 0,
          },
        ],
      ];
    }),
  );
}

const TOPIC_ID = /^topic\.[a-z0-9]+(?:-[a-z0-9]+)*$/;

function normalizeReviewSession(value: unknown): ReviewSession | null {
  if (!isRecord(value)) return null;
  const { mode, unitId, index, startedDay } = value;
  if (typeof mode !== 'string' || !(REVIEW_MODES as readonly string[]).includes(mode)) {
    return null;
  }
  const questionIds = stringArray(value.questionIds);
  if (questionIds.length === 0 || !isCount(index) || index > questionIds.length) return null;
  if (!isDayKey(startedDay)) return null;

  return {
    mode: mode as ReviewMode,
    unitId: typeof unitId === 'string' ? unitId : null,
    questionIds,
    index,
    answers: isRecord(value.answers)
      ? Object.fromEntries(
          Object.entries(value.answers).filter(
            (entry): entry is [string, string] =>
              typeof entry[1] === 'string' && questionIds.includes(entry[0]),
          ),
        )
      : {},
    startedDay,
    activityRecorded: value.activityRecorded === true,
    ...(typeof value.topicId === 'string' && TOPIC_ID.test(value.topicId) ? { topicId: value.topicId } : {}),
  };
}

function normalizeActivityDays(days: Iterable<unknown>): DayKey[] {
  const unique = new Set<DayKey>();
  for (const day of days) if (isDayKey(day)) unique.add(day);
  return [...unique].sort().slice(-MAX_ACTIVITY_DAYS);
}

export function isoToLocalDay(value: string | null | undefined): DayKey | null {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : localDayKey(date);
}

/**
 * Lerntage, die sich bei älteren Ständen (vor v5) aus gespeicherten
 * Zeitstempeln belegen lassen: Lektionsabschlüsse (seit F-02) und letzte
 * Wiederholungen (seit F-03). Wird nur beim Upgrade verwendet.
 */
function recordedActivityDays(
  lessonResults: Record<string, LessonResult>,
  reviewCards: Record<string, ReviewCard>,
): DayKey[] {
  const days: Array<DayKey | null> = [];
  for (const result of Object.values(lessonResults)) {
    days.push(isoToLocalDay(result.firstCompletedAt), isoToLocalDay(result.lastCompletedAt));
  }
  for (const card of Object.values(reviewCards)) days.push(card.lastReviewedDay);
  return days.filter((day): day is DayKey => day !== null);
}

function emptyDay(): DailyActivity {
  return { lessons: 0, reviewSessions: 0, xp: 0 };
}

function pruneDays<T>(record: Record<DayKey, T>): Record<DayKey, T> {
  const keys = Object.keys(record).sort();
  if (keys.length <= MAX_ACTIVITY_DAYS) return record;
  const keep = new Set(keys.slice(-MAX_ACTIVITY_DAYS));
  return Object.fromEntries(Object.entries(record).filter(([day]) => keep.has(day)));
}

function normalizeDailyActivity(value: unknown): Record<DayKey, DailyActivity> {
  if (!isRecord(value)) return {};
  return pruneDays(
    Object.fromEntries(
      Object.entries(value).flatMap(([day, entry]) => {
        if (!isDayKey(day) || !isRecord(entry)) return [];
        const count = (field: unknown) => (isCount(field) ? field : 0);
        return [
          [
            day,
            {
              lessons: count(entry.lessons),
              reviewSessions: count(entry.reviewSessions),
              xp: count(entry.xp),
            },
          ],
        ];
      }),
    ),
  );
}

/**
 * Zählwerte älterer Stände (vor v6) aus den Lektionsabschlüssen: erster
 * Abschluss mit seinen XP, ein späterer letzter Abschluss als Wiederholung.
 * Wiederholungsrunden lassen sich nicht rekonstruieren und fehlen daher.
 */
function recordedDailyActivity(
  lessonResults: Record<string, LessonResult>,
): Record<DayKey, DailyActivity> {
  const days: Record<DayKey, DailyActivity> = {};
  const add = (day: DayKey | null, xp: number) => {
    if (!day) return;
    const entry = days[day] ?? emptyDay();
    days[day] = { ...entry, lessons: entry.lessons + 1, xp: entry.xp + xp };
  };
  for (const result of Object.values(lessonResults)) {
    add(isoToLocalDay(result.firstCompletedAt), result.xpAwarded);
    if (result.lastCompletedAt !== result.firstCompletedAt) {
      add(isoToLocalDay(result.lastCompletedAt), 0);
    }
  }
  return pruneDays(days);
}

function normalizeDailyGoal(value: unknown): DailyGoal {
  if (isRecord(value)) {
    const match = DAILY_GOAL_OPTIONS.find(
      (option) => option.kind === value.kind && option.target === value.target,
    );
    if (match) return match;
  }
  return DAILY_GOAL_OPTIONS[0];
}

function normalizeMilestones(value: unknown): Partial<Record<MilestoneId, MilestoneRecord>> {
  if (!isRecord(value)) return {};
  return Object.fromEntries(
    Object.entries(value).flatMap(([id, record]) =>
      (MILESTONE_IDS as readonly string[]).includes(id) &&
      isRecord(record) &&
      isDayKey(record.achievedDay)
        ? [[id, { achievedDay: record.achievedDay }]]
        : [],
    ),
  );
}

/** Höchstlänge einer Notiz in Zeichen. */
export const MAX_NOTE_LENGTH = 5000;

/** Schlüssel für Lesezeichen und Notizen: Lektion oder Lektion plus Schritt. */
export function savedKey(lessonId: string, stepId: string | null): string {
  return stepId ? `${lessonId}::${stepId}` : lessonId;
}

/**
 * Klartext ohne Steuerzeichen, einheitliche Zeilenumbrüche, höchstens
 * `MAX_NOTE_LENGTH` Zeichen. HTML bleibt reiner Text und wird nie gerendert.
 */
export function normalizeNoteText(value: string): string {
  const text = value
    .replace(/\r\n?/g, '\n')
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '');
  return Array.from(text).slice(0, MAX_NOTE_LENGTH).join('');
}

function normalizeBookmarks(value: unknown): Record<string, Bookmark> {
  if (!isRecord(value)) return {};
  return Object.fromEntries(
    Object.values(value).flatMap((entry) => {
      if (!isRecord(entry) || typeof entry.lessonId !== 'string' || entry.lessonId === '') return [];
      const stepId = typeof entry.stepId === 'string' && entry.stepId !== '' ? entry.stepId : null;
      const bookmark: Bookmark = {
        lessonId: entry.lessonId,
        stepId,
        createdAt: typeof entry.createdAt === 'string' ? entry.createdAt : nowIso(),
      };
      return [[savedKey(bookmark.lessonId, stepId), bookmark]];
    }),
  );
}

function normalizeNotes(value: unknown): Record<string, Note> {
  if (!isRecord(value)) return {};
  return Object.fromEntries(
    Object.values(value).flatMap((entry) => {
      if (!isRecord(entry) || typeof entry.lessonId !== 'string' || entry.lessonId === '') return [];
      if (typeof entry.text !== 'string') return [];
      const text = normalizeNoteText(entry.text);
      if (text.trim() === '') return [];
      const stepId = typeof entry.stepId === 'string' && entry.stepId !== '' ? entry.stepId : null;
      const note: Note = {
        lessonId: entry.lessonId,
        stepId,
        text,
        updatedAt: typeof entry.updatedAt === 'string' ? entry.updatedAt : nowIso(),
      };
      return [[savedKey(note.lessonId, stepId), note]];
    }),
  );
}

function normalizeSettings(value: unknown): AcademySettings {
  if (!isRecord(value)) return DEFAULT_SETTINGS;
  return {
    motion: value.motion === 'reduce' ? 'reduce' : 'system',
    compact: value.compact === true,
  };
}

/** Gültige Leseoptionen aus beliebigen Daten; Unbekanntes wird zu „Standard“. */
export function normalizeReadingOptions(value: unknown): ReadingOptions {
  if (!isRecord(value)) return DEFAULT_READING_OPTIONS;
  const size = READING_SIZES.find((item) => item === value.size) ?? 'standard';
  const spacing = READING_SPACINGS.find((item) => item === value.spacing) ?? 'standard';
  return size === 'standard' && spacing === 'standard' ? DEFAULT_READING_OPTIONS : { size, spacing };
}

export function sameReadingOptions(first: ReadingOptions, second: ReadingOptions): boolean {
  return first.size === second.size && first.spacing === second.spacing;
}

/** Ändert Leseoptionen; `DEFAULT_READING_OPTIONS` setzt nur sie zurück. */
export function updateReadingOptions(
  progress: AcademyProgress,
  changes: Partial<ReadingOptions>,
): AcademyProgress {
  const next = normalizeReadingOptions({ ...progress.readingOptions, ...changes });
  return sameReadingOptions(next, progress.readingOptions) ? progress : { ...progress, readingOptions: next };
}

/**
 * Gibt es schon irgendeinen Lernstand? Dann ist es
 * kein erster Besuch, und die Einführung erscheint nicht von selbst (F-18).
 */
export function hasLearningData(progress: AcademyProgress): boolean {
  return (
    progress.completedLessonIds.length > 0 ||
    Object.keys(progress.answers).length > 0 ||
    Object.keys(progress.questionResults).length > 0 ||
    Object.keys(progress.lessonPositions).length > 0 ||
    Object.keys(progress.readerPositions).length > 0 ||
    Object.keys(progress.reviewCards).length > 0 ||
    Object.keys(progress.bookmarks).length > 0 ||
    Object.keys(progress.notes).length > 0 ||
    Object.keys(progress.caseSessions).length > 0 ||
    Object.keys(progress.caseRuns).length > 0 ||
    progress.activityDays.length > 0
  );
}

/** Einführung beim ersten echten Besuch: nur ohne Lernstand und solange nicht geschlossen. */
export function shouldShowFirstUseGuide(progress: AcademyProgress): boolean {
  return progress.guideSeenAt === null && !hasLearningData(progress);
}

/** Vermerkt, dass die Einführung geschlossen wurde – einmalig, ohne Lernaktivität. */
export function markGuideSeen(progress: AcademyProgress, now: string = nowIso()): AcademyProgress {
  return progress.guideSeenAt === null ? { ...progress, guideSeenAt: now } : progress;
}

export function updateSettings(
  progress: AcademyProgress,
  changes: Partial<AcademySettings>,
): AcademyProgress {
  const next = normalizeSettings({ ...progress.settings, ...changes });
  if (next.motion === progress.settings.motion && next.compact === progress.settings.compact) {
    return progress;
  }
  return { ...progress, settings: next };
}

/** Vermerkt einen Tag mit echter Lernaktivität in der Tagesliste. */
export function recordActivity(progress: AcademyProgress, day: DayKey): AcademyProgress {
  if (!isDayKey(day) || progress.activityDays.includes(day)) return progress;
  return {
    ...progress,
    activityDays: normalizeActivityDays([...progress.activityDays, day]),
  };
}

/**
 * Zählt echte Lernaktivität: Lektionsabschluss oder beendete
 * Wiederholungsrunde. Aktualisiert Tagesliste und Zählwerte des Tages.
 */
export function logActivity(
  progress: AcademyProgress,
  day: DayKey,
  delta: Partial<DailyActivity>,
): AcademyProgress {
  if (!isDayKey(day)) return progress;
  const entry = progress.dailyActivity[day] ?? emptyDay();
  const add = (value: number | undefined) =>
    typeof value === 'number' && Number.isFinite(value) && value > 0 ? value : 0;

  return recordActivity(
    {
      ...progress,
      dailyActivity: pruneDays({
        ...progress.dailyActivity,
        [day]: {
          lessons: entry.lessons + add(delta.lessons),
          reviewSessions: entry.reviewSessions + add(delta.reviewSessions),
          xp: entry.xp + add(delta.xp),
        },
      }),
    },
    day,
  );
}

export function setDailyGoal(progress: AcademyProgress, goal: DailyGoal): AcademyProgress {
  const match = DAILY_GOAL_OPTIONS.find(
    (option) => option.kind === goal.kind && option.target === goal.target,
  );
  if (!match || match === progress.dailyGoal) return progress;
  return { ...progress, dailyGoal: match };
}

/**
 * Überführt einen gespeicherten Datensatz beliebiger bekannter Version in das
 * aktuelle Modell. v1 besitzt noch keine Lektionspositionen, v1 und v2 noch
 * keine Versuchs- und Abschlussdaten, v1–v3 noch keinen Wiederholungsplan;
 * diese starten leer. Lerntage (vor v5) und Tageszählwerte (vor v6) werden
 * einmalig aus vorhandenen Zeitstempeln abgeleitet, nie geschätzt. Vorhandene Antworten
 * bleiben unverändert in `answers` und werden nicht in Versuche umgedeutet.
 * Vor v9 gibt es keine Lesestellen im Buchleser; sie beginnen leer.
 * Vor v10 gibt es keine Leseoptionen; sie beginnen bei „Standard“.
 * Vor v11 gibt es keine Trainerrunden; beide Felder beginnen leer. Runden aus
 * v11 haben noch keine Einzelantworten (seit v12); sie bleiben ohne `answers`.
 * Vor v13 gibt es keinen Vermerk zur Einführung (`guideSeenAt: null`); wer
 * bereits Lernstand hat, sieht sie trotzdem nie automatisch.
 * Vor v14 gibt es keine eigenen Trainerbegründungen; Runden bleiben ohne `reasoning`.
 * Vor v16 gibt es keinen gewählten Kurs (`activeCourseId: null`): Es gilt der Standardkurs.
 * Liefert `null`, wenn der Wert kein erkennbarer Academy-Datensatz ist.
 */
export function migrateProgress(value: unknown): AcademyProgress | null {
  if (!isRecord(value)) return null;
  if (typeof value.version !== 'number' || value.version < 1) return null;

  const lessonResults = normalizeLessonResults(value.lessonResults);
  const reviewCards = normalizeReviewCards(value.reviewCards);

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
    lessonResults,
    reviewCards,
    reviewSession: normalizeReviewSession(value.reviewSession),
    // Nur beim Upgrade ableiten: Seit v5 wird Aktivität direkt erfasst.
    activityDays: Array.isArray(value.activityDays)
      ? normalizeActivityDays(value.activityDays)
      : normalizeActivityDays(recordedActivityDays(lessonResults, reviewCards)),
    dailyActivity:
      value.dailyActivity === undefined
        ? recordedDailyActivity(lessonResults)
        : normalizeDailyActivity(value.dailyActivity),
    dailyGoal: normalizeDailyGoal(value.dailyGoal),
    milestones: normalizeMilestones(value.milestones),
    bookmarks: normalizeBookmarks(value.bookmarks),
    notes: normalizeNotes(value.notes),
    settings: normalizeSettings(value.settings),
    lastLessonId:
      typeof value.lastLessonId === 'string' ? value.lastLessonId : null,
    lessonPositions: normalizePositions(value.lessonPositions),
    // Seit v9; ältere Stände starten ohne Lesestelle.
    readerPositions: normalizeReaderPositions(value.readerPositions),
    // Seit v10; ältere Stände lesen in der Standarddarstellung.
    readingOptions: normalizeReadingOptions(value.readingOptions),
    // Seit v11 (F-15); ältere Stände haben noch keine Trainerrunden.
    caseSessions: normalizeCaseSessions(value.caseSessions),
    caseRuns: normalizeCaseRuns(value.caseRuns),
    guideSeenAt: typeof value.guideSeenAt === 'string' && value.guideSeenAt !== '' ? value.guideSeenAt : null,
    // Seit v16; ältere Stände lernen im Standardkurs.
    activeCourseId: isCourseId(value.activeCourseId) ? value.activeCourseId : null,
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

  return stored ?? createEmptyProgress();
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

  const next: AcademyProgress = {
    ...progress,
    completedLessonIds: alreadyCompleted
      ? progress.completedLessonIds
      : [...progress.completedLessonIds, lessonId],
    lastLessonId: lessonId,
    lessonPositions: openPositions,
    lessonResults: { ...progress.lessonResults, [lessonId]: result },
  };
  const day = isoToLocalDay(now);
  return day
    ? logActivity(next, day, { lessons: 1, xp: existing || alreadyCompleted ? 0 : result.xpAwarded })
    : next;
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

/**
 * Merkt sich die Lesestelle einer Einheit im Buchleser. Unabhängig vom
 * Abschluss: Auch in bereits abgeschlossenen Abschnitten bleibt die Stelle.
 */
export function recordReaderPosition(
  progress: AcademyProgress,
  unitId: string,
  lessonId: string,
  stepId: string | null,
  now: string = nowIso(),
): AcademyProgress {
  if (!isReaderId(unitId) || !isReaderId(lessonId)) return progress;
  const step = isReaderId(stepId) ? stepId : null;
  const current = progress.readerPositions[unitId];
  if (current && current.lessonId === lessonId && current.stepId === step) return progress;
  return {
    ...progress,
    readerPositions: {
      ...progress.readerPositions,
      [unitId]: { lessonId, stepId: step, updatedAt: now },
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

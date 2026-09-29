import type { GlossaryEntry } from '../content/glossary';
import type { CourseOutline, UnitOutline, LessonOutline } from '../content/types';
import { lessonAccessState, type LessonAccessState } from './courseAccess';

/* ------------------------------------------------------------------ */
/* Normalisierung                                                      */
/* ------------------------------------------------------------------ */

const UMLAUT_EXPANSIONS: Record<string, string> = { ä: 'ae', ö: 'oe', ü: 'ue', ß: 'ss' };

function stripToWords(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

/**
 * Zwei Schreibweisen je Text: Umlaute als Grundbuchstabe („uben“) und
 * ausgeschrieben („ueben“). So finden „Übung“, „ubung“ und „uebung“ dasselbe.
 */
export function searchForms(text: string): [string, string] {
  const lower = text.toLocaleLowerCase('de');
  const base = stripToWords(lower.replace(/ß/g, 'ss'));
  const expanded = stripToWords(lower.replace(/[äöüß]/g, (char) => UMLAUT_EXPANSIONS[char]));
  return [base, expanded];
}

/** Suchbegriff in Wörter zerlegt, Umlaute auf den Grundbuchstaben reduziert. */
export function queryTokens(query: string): string[] {
  const [base] = searchForms(query);
  return base ? base.split(' ') : [];
}

/* ------------------------------------------------------------------ */
/* Index                                                               */
/* ------------------------------------------------------------------ */

export type SearchResultType = 'lesson' | 'step' | 'glossary';

interface IndexedField {
  forms: [string, string];
  /** Gewicht des Feldes für die Rangfolge. */
  weight: number;
}

interface IndexEntry {
  id: string;
  type: SearchResultType;
  order: number;
  fields: IndexedField[];
  lesson?: LessonOutline;
  unit?: UnitOutline;
  /** Nullbasierter Schritt für Schritt-Treffer. */
  stepIndex?: number;
  title: string;
  context: string;
  glossaryTerm?: string;
}

export interface SearchIndex {
  course: CourseOutline;
  entries: IndexEntry[];
}

const WEIGHTS = {
  lessonTitle: 10,
  lessonSummary: 4,
  source: 3,
  stepTitle: 6,
  glossaryTerm: 10,
  glossaryAlias: 8,
} as const;

function field(text: string, weight: number): IndexedField {
  return { forms: searchForms(text), weight };
}

/** Baut einen kleinen Suchindex in Buchreihenfolge; Inhalte bleiben unverändert. */
export function buildSearchIndex(course: CourseOutline, glossary: GlossaryEntry[]): SearchIndex {
  const entries: IndexEntry[] = [];

  for (const unit of course.units) {
    for (const lesson of unit.lessons) {
      entries.push({
        id: `lesson:${lesson.id}`,
        type: 'lesson',
        order: entries.length,
        fields: [
          field(lesson.title, WEIGHTS.lessonTitle),
          field(lesson.summary, WEIGHTS.lessonSummary),
          field([lesson.sourceUnit, ...(lesson.sourceAnchors ?? [])].join(' '), WEIGHTS.source),
        ],
        lesson,
        unit,
        title: lesson.title,
        context: lesson.summary,
      });

      lesson.steps.forEach((step, stepIndex) => {
        entries.push({
          id: `step:${lesson.id}:${step.id}`,
          type: 'step',
          order: entries.length,
          fields: [field(step.title, WEIGHTS.stepTitle)],
          lesson,
          unit,
          stepIndex,
          title: step.title,
          context: `Schritt ${stepIndex + 1} · ${lesson.title}`,
        });
      });
    }
  }

  for (const entry of glossary) {
    entries.push({
      id: `glossary:${entry.term}`,
      type: 'glossary',
      order: entries.length,
      fields: [
        field(entry.term, WEIGHTS.glossaryTerm),
        ...entry.aliases.map((alias) => field(alias, WEIGHTS.glossaryAlias)),
      ],
      title: entry.term,
      context: entry.aliases.length ? `Auch: ${entry.aliases.join(', ')}` : entry.firstUnit,
      glossaryTerm: entry.term,
    });
  }

  return { course, entries };
}

/* ------------------------------------------------------------------ */
/* Suche                                                               */
/* ------------------------------------------------------------------ */

export interface SearchResult {
  id: string;
  type: SearchResultType;
  title: string;
  context: string;
  score: number;
  /** Buchabschnitt, z. B. „Kapitel 2 · Trendbars, Dojis und Klimaxe“. */
  section: string | null;
  access: LessonAccessState | null;
  /** Nur zugängliche Treffer können geöffnet werden. */
  openable: boolean;
  lesson?: LessonOutline;
  stepIndex?: number;
  glossaryTerm?: string;
}

function tokenScore(fieldForms: [string, string], token: string, weight: number): number {
  const words = [...fieldForms[0].split(' '), ...fieldForms[1].split(' ')];
  if (fieldForms[0] === token || fieldForms[1] === token) return weight * 3;
  if (words.includes(token)) return weight * 2;
  if (words.some((word) => word.startsWith(token))) return weight * 1.5;
  if (fieldForms[0].includes(token) || fieldForms[1].includes(token)) return weight;
  return 0;
}

function scoreEntry(entry: IndexEntry, tokens: string[]): number {
  let total = 0;
  for (const token of tokens) {
    const best = Math.max(...entry.fields.map((f) => tokenScore(f.forms, token, f.weight)));
    if (best === 0) return 0;
    total += best;
  }
  return total;
}

/**
 * Durchsucht den Index. Alle Suchwörter müssen vorkommen. Sortiert nach
 * Trefferqualität, bei Gleichstand nach Buchreihenfolge. Leere Suche: keine
 * Treffer. Gesperrte oder geplante Lektionen erscheinen als Vorschau, sind
 * aber nie `openable`.
 */
export function search(
  index: SearchIndex,
  query: string,
  completedLessonIds: Iterable<string>,
): SearchResult[] {
  const tokens = queryTokens(query);
  if (tokens.length === 0) return [];
  const completed = new Set(completedLessonIds);

  return index.entries
    .map((entry) => ({ entry, score: scoreEntry(entry, tokens) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.entry.order - b.entry.order)
    .map(({ entry, score }) => {
      const access = entry.lesson
        ? lessonAccessState(index.course, entry.lesson, completed)
        : null;
      return {
        id: entry.id,
        type: entry.type,
        title: entry.title,
        context: entry.context,
        score,
        section: entry.unit ? `${entry.unit.label} · ${entry.unit.title}` : null,
        access,
        openable: access === null || access === 'available' || access === 'complete',
        lesson: entry.lesson,
        stepIndex: entry.stepIndex,
        glossaryTerm: entry.glossaryTerm,
      };
    });
}

export interface SearchGroup {
  type: SearchResultType;
  label: string;
  results: SearchResult[];
  /** Anzahl aller Treffer dieses Typs, auch wenn nicht alle gezeigt werden. */
  total: number;
}

const GROUP_LABELS: Record<SearchResultType, string> = {
  lesson: 'Lektionen',
  step: 'Schritte',
  glossary: 'Glossar',
};

const GROUP_ORDER: readonly SearchResultType[] = ['lesson', 'step', 'glossary'];

/**
 * Gruppiert nach Typ, höchstens `limit` Treffer je Gruppe. Die Gruppe mit dem
 * besten Treffer steht oben – so ist der insgesamt beste Treffer vorausgewählt.
 * Bei Gleichstand gilt die feste Reihenfolge Lektionen, Schritte, Glossar.
 */
export function groupResults(results: SearchResult[], limit = 6): SearchGroup[] {
  return GROUP_ORDER.map((type) => {
    const matching = results.filter((result) => result.type === type);
    return {
      type,
      label: GROUP_LABELS[type],
      results: matching.slice(0, limit),
      total: matching.length,
      best: Math.max(0, ...matching.map((result) => result.score)),
    };
  })
    .filter((group) => group.total > 0)
    .sort((a, b) => b.best - a.best || GROUP_ORDER.indexOf(a.type) - GROUP_ORDER.indexOf(b.type))
    .map(({ best: _best, ...group }) => group);
}

import { glossaryEntries, type GlossaryEntry } from './glossary';
import type { Course, LessonStep } from './types';

/**
 * Begriffe am Lernort (F-21): ausdrückliche Zuordnung stabiler Schritt-IDs zu
 * bestehenden Glossareinträgen. Keine automatische Wortsuche im Fließtext und
 * keine zweite Kopie der Definitionen – angezeigt wird der Glossareintrag.
 *
 * Regeln (geprüft in `stepTerms.test.ts` und `npm run check:content`):
 * - `lessonId`/`stepId` bezeichnen einen veröffentlichten Schritt, der keine
 *   Frage ist; je Schritt höchstens {@link MAX_TERMS_PER_STEP} Begriffe.
 * - `terms` nennt Glossarbegriffe (Feld `term`), keine Aliasse.
 * - Der Begriff steht wörtlich im Text dieses Schritts. Die Zuordnung zeigt
 *   also nur, was an dieser Stelle ohnehin gelesen wird.
 */
export interface StepTermLink {
  lessonId: string;
  stepId: string;
  terms: string[];
}

export const MAX_TERMS_PER_STEP = 3;

export const stepTermLinks: StepTermLink[] = [
  { lessonId: 'brooks-trends.introduction.lesson-01', stepId: 'intro-01-explain', terms: ['Price Action'] },
  { lessonId: 'brooks-trends.introduction.lesson-03', stepId: 'intro-03-explain', terms: ['Trading Range'] },
  { lessonId: 'brooks-trends.introduction.lesson-05', stepId: 'intro-05-explain', terms: ['Trend', 'Pullback'] },
  { lessonId: 'brooks-trends.introduction.lesson-14', stepId: 'intro-14-explain', terms: ['Verkaufsdruck'] },
  { lessonId: 'brooks-trends.introduction.lesson-17', stepId: 'intro-17-explain', terms: ['Breakout', 'Follow-through'] },
  { lessonId: 'brooks-trends.introduction.lesson-18', stepId: 'intro-18-explain', terms: ['Doji', 'Entry-Bar'] },
  { lessonId: 'brooks-trends.part-01.lesson-06', stepId: 'part-01-06-explain', terms: ['Inside-Bar', 'Fehlausbruch'] },
  { lessonId: 'brooks-trends.chapter-01.lesson-06', stepId: 'chapter-01-06-explain', terms: ['Setup-Bar', 'Leg'] },
  { lessonId: 'brooks-trends.chapter-02.lesson-04', stepId: 'chapter-02-04-explain', terms: ['Klimax'] },
  { lessonId: 'brooks-trends.chapter-02.lesson-06', stepId: 'chapter-02-06-explain', terms: ['Always-in'] },
  { lessonId: 'brooks-trends.chapter-02.lesson-16', stepId: 'chapter-02-16-explain', terms: ['Breakout-Pullback'] },
  { lessonId: 'brooks-trends.chapter-04.lesson-12', stepId: 'chapter-04-12-explain', terms: ['ioi', 'Outside-Bar'] },
  { lessonId: 'brooks-trends.chapter-09.lesson-02', stepId: 'chapter-09-02-explain', terms: ['SPY'] },
  { lessonId: 'brooks-trends.chapter-09.lesson-03', stepId: 'chapter-09-03-explain', terms: ['SDS'] },
  { lessonId: 'brooks-trends.chapter-09.lesson-07', stepId: 'chapter-09-07-explain', terms: ['ETF'] },
  { lessonId: 'brooks-trends.chapter-10.lesson-01', stepId: 'chapter-10-01-explain', terms: ['Zweiter Entry'] },
  { lessonId: 'brooks-trends.chapter-10.lesson-09', stepId: 'chapter-10-09-explain', terms: ['Mikro-Doppeltop', 'Mikro-Doppeltief'] },
  { lessonId: 'brooks-trends.chapter-10.lesson-17', stepId: 'chapter-10-17-explain', terms: ['Low 4'] },
];

function linkKey(lessonId: string, stepId: string) {
  return `${lessonId}\u0000${stepId}`;
}

/**
 * Glossareinträge zu einem Schritt, in der Reihenfolge der Zuordnung.
 * Unbekannte Begriffe werden sicher ausgelassen (Meldung über die Prüfung).
 */
export function termsForStep(
  lessonId: string,
  stepId: string,
  links: StepTermLink[] = stepTermLinks,
  glossary: GlossaryEntry[] = glossaryEntries,
): GlossaryEntry[] {
  const key = linkKey(lessonId, stepId);
  const link = links.find((item) => linkKey(item.lessonId, item.stepId) === key);
  if (!link) return [];
  const seen = new Set<string>();
  const entries: GlossaryEntry[] = [];
  for (const term of link.terms) {
    const entry = glossary.find((item) => item.term === term);
    if (!entry || seen.has(entry.term)) continue;
    seen.add(entry.term);
    entries.push(entry);
    if (entries.length === MAX_TERMS_PER_STEP) break;
  }
  return entries;
}

/** Lesbarer Text eines Schritts – Grundlage der Wörtlichkeitsprüfung. */
export function stepText(step: LessonStep): string {
  switch (step.type) {
    case 'explanation':
      return [step.eyebrow ?? '', step.title, ...step.paragraphs, step.callout ?? ''].join('\n');
    case 'diagram':
      return [step.title, step.caption, ...step.observations].join('\n');
    case 'comparison':
      return [step.title, ...step.columns.flatMap((column) => [column.title, ...column.points])].join('\n');
    case 'recap':
      return [step.title, ...step.points].join('\n');
    case 'question':
      return [step.title, step.prompt].join('\n');
  }
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Steht der Begriff als eigenes Wort im Text (nicht nur als Wortteil)? */
export function mentionsTerm(text: string, term: string): boolean {
  return new RegExp(`(?<![\\p{L}\\p{N}])${escapeRegExp(term)}(?![\\p{L}\\p{N}])`, 'u').test(text);
}

export interface StepTermIssue {
  lessonId: string;
  stepId: string;
  /** Betroffener Begriff; fehlt bei Fehlern der ganzen Zuordnung. */
  term?: string;
  message: string;
}

/** Prüft die Zuordnung gegen Kurs und Glossar. Leeres Ergebnis = gültig. */
export function validateStepTermLinks(
  course: Course,
  glossary: GlossaryEntry[] = glossaryEntries,
  links: StepTermLink[] = stepTermLinks,
): StepTermIssue[] {
  const issues: StepTermIssue[] = [];
  const lessons = new Map(course.units.flatMap((unit) => unit.lessons).map((lesson) => [lesson.id, lesson]));
  const terms = new Set(glossary.map((entry) => entry.term));
  const seenLinks = new Set<string>();

  for (const { lessonId, stepId, terms: linked } of links) {
    const report = (message: string, term?: string) => issues.push({ lessonId, stepId, term, message });
    const key = linkKey(lessonId, stepId);
    if (seenLinks.has(key)) report('Der Schritt ist mehrfach zugeordnet.');
    seenLinks.add(key);

    const lesson = lessons.get(lessonId);
    if (!lesson) {
      report(`Unbekannte Lektion „${lessonId}“.`);
      continue;
    }
    if (lesson.status !== 'published') report('Die Lektion ist nicht veröffentlicht.');
    const step = lesson.steps.find((item) => item.id === stepId);
    if (!step) {
      report(`Unbekannter Schritt „${stepId}“ in dieser Lektion.`);
      continue;
    }
    if (step.type === 'question') report('Fragen bekommen keine Begriffe – sie könnten die Antwort vorwegnehmen.');
    if (linked.length === 0) report('Die Zuordnung nennt keinen Begriff.');
    if (linked.length > MAX_TERMS_PER_STEP) report(`Höchstens ${MAX_TERMS_PER_STEP} Begriffe je Schritt (gefunden: ${linked.length}).`);

    const text = stepText(step);
    const seenTerms = new Set<string>();
    for (const term of linked) {
      if (seenTerms.has(term)) report('Begriff doppelt zugeordnet.', term);
      seenTerms.add(term);
      if (!terms.has(term)) {
        report(`Kein Glossareintrag „${term}“ (erwartet wird das Feld „term“, kein Alias).`, term);
        continue;
      }
      if (!mentionsTerm(text, term)) report(`„${term}“ kommt im Text dieses Schritts nicht vor.`, term);
    }
  }
  return issues;
}

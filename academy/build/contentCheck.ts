import type { Course } from '../src/content/types.ts';

/*
 * Strukturprüfung der Buchinhalte (F-29). Reine Funktionen ohne Dateizugriff:
 * Die Eingaben lädt `check-content.mjs` aus den echten Inhaltsdateien, Tests
 * übergeben gezielt defekte Fixtures. Das Werkzeug liegt außerhalb von `src`
 * und gelangt nie ins Browser-Bundle.
 *
 * Geprüft wird nur, was sich maschinell prüfen lässt. Fachliche Treue zum
 * Buch, Eigenständigkeit der Formulierungen und Bildrechte bleiben
 * redaktionelle Prüfung – ein grüner Check sagt darüber nichts aus.
 */

export type Severity = 'error' | 'warning';

/** Bereich des Befunds – bestimmt die Zuordnung zu einer Datei. */
export type IssueArea = 'course' | 'diagram' | 'glossary' | 'case' | 'term-link' | 'topic' | 'known-ids';

export interface ContentIssue {
  severity: Severity;
  area?: IssueArea;
  /** Kurzer Regelname, z. B. `doppelte-id`. */
  rule: string;
  /** Betroffene ID (Einheit, Lektion, Schritt, Szenario, Begriff, Fall). */
  id: string;
  message: string;
  /** Lektion, in der die ID vorkommt – für die Zuordnung zu einer Datei. */
  lessonId?: string;
  unitId?: string;
  /** Wird vom Aufrufer ergänzt: Datei, in der die ID steht. */
  file?: string;
}

/** Stand der bekannten veröffentlichten IDs – bewusst versioniert. */
export interface KnownIds {
  /** Freitext für Menschen, bleibt beim Ergänzen erhalten. */
  note?: string;
  units: Array<{
    id: string;
    lessons: Array<{ id: string; steps: string[] }>;
  }>;
}

export interface GlossaryInput {
  term: string;
  aliases: string[];
  definition: string;
  firstUnit: string;
}

export interface CaseIssueInput {
  caseId: string;
  path: string;
  message: string;
}

export interface TermLinkIssueInput {
  lessonId: string;
  stepId: string;
  term?: string;
  message: string;
}

export interface ContentCheckInput {
  course: Course;
  glossary: readonly GlossaryInput[];
  /** Alle Schaubild-Szenarien, die der Renderer kennt. */
  scenarioIds: readonly string[];
  /** Bildbeschreibung eines Szenarios (leer/undefiniert = fehlt). */
  describe: (scenarioId: string) => string | undefined;
  /** Befunde der Fallprüfung aus F-14. */
  caseIssues: readonly CaseIssueInput[];
  /** Befunde der Begriffszuordnung aus F-21 (`validateStepTermLinks`). */
  termLinkIssues?: readonly TermLinkIssueInput[];
  /** Befunde der Themenkarte aus C-03 (`validateTopicMap`). */
  topicIssues?: readonly { topicId: string; path: string; message: string }[];
  known: KnownIds;
}

const ID_PATTERN = /^[A-Za-z0-9][A-Za-z0-9._-]*$/;

function isText(value: unknown): value is string {
  return typeof value === 'string' && value.trim() !== '';
}

/* ------------------------------------------------------------------ */
/* Struktur                                                            */
/* ------------------------------------------------------------------ */

function checkStructure(course: Course, issues: ContentIssue[]) {
  const error = (issue: Omit<ContentIssue, 'severity'>) => issues.push({ severity: 'error', area: 'course', ...issue });

  const unitIds = new Map<string, number>();
  course.units.forEach((unit, index) => {
    if (!ID_PATTERN.test(unit.id)) error({ rule: 'ungueltige-id', id: unit.id, unitId: unit.id, message: 'Einheit-ID enthält unzulässige Zeichen.' });
    if (unitIds.has(unit.id)) error({ rule: 'doppelte-id', id: unit.id, unitId: unit.id, message: 'Einheit-ID kommt mehrfach vor.' });
    unitIds.set(unit.id, index);
    // Buchreihenfolge: `order` zählt lückenlos in der Reihenfolge der Liste.
    if (unit.order !== index + 1) {
      error({
        rule: 'reihenfolge',
        id: unit.id,
        unitId: unit.id,
        message: `Einheit steht an Position ${index + 1}, hat aber order: ${unit.order}.`,
      });
    }
    if (!isText(unit.title) || !isText(unit.label)) error({ rule: 'pflichtfeld', id: unit.id, unitId: unit.id, message: 'Titel oder Bezeichnung fehlt.' });
  });

  const lessonUnit = new Map<string, string>();
  const questionLesson = new Map<string, string>();
  for (const unit of course.units) {
    for (const lesson of unit.lessons) {
      const where = { lessonId: lesson.id, unitId: unit.id };
      if (!ID_PATTERN.test(lesson.id)) error({ rule: 'ungueltige-id', id: lesson.id, ...where, message: 'Lektions-ID enthält unzulässige Zeichen.' });
      const other = lessonUnit.get(lesson.id);
      if (other !== undefined) {
        error({ rule: 'doppelte-id', id: lesson.id, ...where, message: `Lektions-ID kommt mehrfach vor (auch in ${other}).` });
      }
      lessonUnit.set(lesson.id, unit.id);
      if (lesson.status !== 'published' && lesson.status !== 'planned') {
        error({ rule: 'pflichtfeld', id: lesson.id, ...where, message: 'Status muss „published“ oder „planned“ sein.' });
      }
      if (!isText(lesson.title)) error({ rule: 'pflichtfeld', id: lesson.id, ...where, message: 'Lektionstitel fehlt.' });
      if (!(Number.isFinite(lesson.xp) && lesson.xp >= 0)) error({ rule: 'pflichtfeld', id: lesson.id, ...where, message: 'XP müssen eine Zahl ≥ 0 sein.' });
      if (lesson.status === 'published' && lesson.steps.length === 0) {
        error({ rule: 'pflichtfeld', id: lesson.id, ...where, message: 'Veröffentlichte Lektion ohne Schritte.' });
      }

      const stepIds = new Set<string>();
      for (const step of lesson.steps) {
        if (!ID_PATTERN.test(step.id)) error({ rule: 'ungueltige-id', id: step.id, ...where, message: 'Schritt-ID enthält unzulässige Zeichen.' });
        if (stepIds.has(step.id)) error({ rule: 'doppelte-id', id: step.id, ...where, message: 'Schritt-ID kommt in dieser Lektion mehrfach vor.' });
        stepIds.add(step.id);
        if (!isText(step.title)) error({ rule: 'pflichtfeld', id: step.id, ...where, message: 'Schrittüberschrift fehlt.' });

        if (step.type === 'question') {
          // Antworten und Wiederholungen hängen global an der Frage-ID.
          const seen = questionLesson.get(step.id);
          if (seen !== undefined) {
            error({ rule: 'doppelte-id', id: step.id, ...where, message: `Frage-ID ist nicht kursweit eindeutig (auch in ${seen}).` });
          }
          questionLesson.set(step.id, lesson.id);
          checkQuestion(step, where, error);
        }
        if (step.type === 'diagram') {
          if (!isText(step.caption)) error({ rule: 'pflichtfeld', id: step.id, ...where, message: 'Diagramm ohne Bildunterschrift.' });
        }
      }
    }
  }
}

type QuestionLike = {
  id: string;
  prompt: string;
  options: Array<{ id: string; label: string; explanation: string }>;
  correctOptionId: string;
};

function checkQuestion(
  step: QuestionLike,
  where: { lessonId: string; unitId: string },
  error: (issue: Omit<ContentIssue, 'severity'>) => void,
) {
  const report = (message: string) => error({ rule: 'frage', id: step.id, ...where, message });
  if (!isText(step.prompt)) report('Fragetext fehlt.');
  if (step.options.length < 2) report('Eine Frage braucht mindestens zwei Antworten.');
  const optionIds = new Set<string>();
  for (const option of step.options) {
    if (optionIds.has(option.id)) report(`Antwort-ID „${option.id}“ kommt mehrfach vor.`);
    optionIds.add(option.id);
    if (!isText(option.label)) report(`Antwort „${option.id}“ ohne Text.`);
    if (!isText(option.explanation)) report(`Antwort „${option.id}“ ohne Erklärung.`);
  }
  if (!optionIds.has(step.correctOptionId)) report(`Richtige Antwort „${step.correctOptionId}“ gibt es nicht.`);
}

/* ------------------------------------------------------------------ */
/* Schaubilder                                                         */
/* ------------------------------------------------------------------ */

function checkDiagrams(input: ContentCheckInput, issues: ContentIssue[]) {
  const known = new Set(input.scenarioIds);
  const used = new Set<string>();
  for (const unit of input.course.units) {
    for (const lesson of unit.lessons) {
      for (const step of lesson.steps) {
        if (step.type !== 'diagram') continue;
        used.add(step.scenario);
        const where = { lessonId: lesson.id, unitId: unit.id };
        if (!known.has(step.scenario)) {
          issues.push({ severity: 'error', area: 'diagram', rule: 'diagramm', id: step.scenario, ...where, message: `Schritt „${step.id}“ nutzt ein Szenario, das der Renderer nicht kennt.` });
        } else if (!isText(input.describe(step.scenario))) {
          issues.push({ severity: 'error', area: 'diagram', rule: 'bildbeschreibung', id: step.scenario, ...where, message: `Szenario in Schritt „${step.id}“ hat keine Bildbeschreibung.` });
        }
      }
    }
  }
  // Verwaist: definiert, aber in keinem Schritt verwendet. Kein Fehler –
  // Inhalte werden nicht nur für einen grünen Check geändert.
  for (const scenario of input.scenarioIds) {
    if (!used.has(scenario)) {
      issues.push({ severity: 'warning', area: 'diagram', rule: 'verwaistes-diagramm', id: scenario, message: 'Szenario ist definiert, wird aber in keinem Schritt verwendet.' });
    }
  }
}

/* ------------------------------------------------------------------ */
/* Glossar und Fälle                                                   */
/* ------------------------------------------------------------------ */

function normalizeTerm(value: string): string {
  return value.trim().toLocaleLowerCase('de-DE');
}

/**
 * `firstUnit` ist die angezeigte Einheit, in der ein Begriff zuerst vorkommt:
 * die volle Bezeichnung („Kapitel 3“) oder ihre Kurzform vor „ · “
 * („Teil I“ für „Teil I · Price Action“).
 */
function unitLabelMatches(firstUnit: string, labels: readonly string[]): boolean {
  return labels.some((label) => label === firstUnit || label.startsWith(`${firstUnit} · `));
}

function checkGlossary(input: ContentCheckInput, issues: ContentIssue[]) {
  const labels = input.course.units.map((unit) => unit.label);
  const terms = new Map<string, string>();
  const names = new Map<string, string>();
  for (const entry of input.glossary) {
    const report = (message: string, rule = 'glossar', severity: Severity = 'error') =>
      issues.push({ severity, area: 'glossary', rule, id: entry.term, message });
    if (!isText(entry.term)) report('Begriff ohne Namen.');
    if (!isText(entry.definition)) report('Begriff ohne Definition.');
    if (!unitLabelMatches(entry.firstUnit, labels)) {
      report(`„firstUnit“ verweist auf „${entry.firstUnit}“, keine Einheit trägt diese Bezeichnung.`);
    }
    // Deep Links `#/glossary?term=…` brauchen eindeutige Begriffe.
    const termKey = normalizeTerm(entry.term);
    if (terms.has(termKey)) report('Begriff kommt mehrfach vor.', 'doppelte-id');
    terms.set(termKey, entry.term);
    // Ein Alias bei mehreren Begriffen ist mehrdeutig; die Suche zeigt dann beide.
    for (const name of [entry.term, ...entry.aliases]) {
      const key = normalizeTerm(name);
      const owner = names.get(key);
      if (owner !== undefined && owner !== entry.term) {
        report(`„${name}“ ist auch Name oder Alias von „${owner}“ – die Suche zeigt beide.`, 'mehrdeutiger-begriff', 'warning');
      }
      names.set(key, entry.term);
    }
  }
}

function checkCases(input: ContentCheckInput, issues: ContentIssue[]) {
  for (const issue of input.caseIssues) {
    issues.push({ severity: 'error', area: 'case', rule: 'fall', id: issue.caseId, message: `${issue.path}: ${issue.message}` });
  }
}

function checkTopics(input: ContentCheckInput, issues: ContentIssue[]) {
  for (const issue of input.topicIssues ?? []) {
    issues.push({ severity: 'error', area: 'topic', rule: 'themenkarte', id: issue.topicId, message: `${issue.path}: ${issue.message}` });
  }
}

function checkTermLinks(input: ContentCheckInput, issues: ContentIssue[]) {
  for (const issue of input.termLinkIssues ?? []) {
    issues.push({
      severity: 'error',
      area: 'term-link',
      rule: 'begriff-am-lernort',
      id: issue.term ? `${issue.stepId} → ${issue.term}` : issue.stepId,
      lessonId: issue.lessonId,
      message: issue.message,
    });
  }
}

/* ------------------------------------------------------------------ */
/* Bekannte veröffentlichte IDs                                        */
/* ------------------------------------------------------------------ */

/** Relative Reihenfolge von `known` in `actual` erhalten? Liefert die erste Abweichung. */
function orderBreak(known: readonly string[], actual: readonly string[]): string | undefined {
  const positions = known.map((id) => actual.indexOf(id)).filter((position) => position >= 0);
  for (let index = 1; index < positions.length; index += 1) {
    if (positions[index] < positions[index - 1]) return actual[positions[index]];
  }
  return undefined;
}

export function snapshotKnownIds(course: Course, note?: string): KnownIds {
  return {
    ...(note ? { note } : {}),
    units: course.units.map((unit) => ({
      id: unit.id,
      lessons: unit.lessons
        .filter((lesson) => lesson.status === 'published')
        .map((lesson) => ({ id: lesson.id, steps: lesson.steps.map((step) => step.id) })),
    })),
  };
}

/**
 * Bereits veröffentlichte IDs dürfen weder verschwinden noch umziehen oder
 * ihre Reihenfolge ändern – an ihnen hängen Fortschritt, Antworten, Notizen,
 * Lesezeichen, Lesestellen und Wiederholungen. Neue IDs sind erlaubt, müssen
 * aber bewusst in die Liste aufgenommen werden (`--accept-new`).
 */
function checkKnownIds(input: ContentCheckInput, issues: ContentIssue[]) {
  const error = (issue: Omit<ContentIssue, 'severity' | 'rule'>) =>
    issues.push({ severity: 'error', area: 'known-ids', rule: 'bekannte-id', ...issue });
  const unitIndex = new Map(input.course.units.map((unit) => [unit.id, unit]));
  const lessonHome = new Map(
    input.course.units.flatMap((unit) => unit.lessons.map((lesson) => [lesson.id, { unit, lesson }] as const)),
  );

  const breakUnit = orderBreak(input.known.units.map((unit) => unit.id), input.course.units.map((unit) => unit.id));
  if (breakUnit) error({ id: breakUnit, unitId: breakUnit, message: 'Die Reihenfolge bekannter Einheiten hat sich geändert.' });

  for (const knownUnit of input.known.units) {
    const unit = unitIndex.get(knownUnit.id);
    if (!unit) {
      error({ id: knownUnit.id, unitId: knownUnit.id, message: 'Bekannte Einheit fehlt (gelöscht oder umbenannt).' });
      continue;
    }
    const breakLesson = orderBreak(knownUnit.lessons.map((lesson) => lesson.id), unit.lessons.map((lesson) => lesson.id));
    if (breakLesson) error({ id: breakLesson, lessonId: breakLesson, unitId: unit.id, message: 'Die Reihenfolge bekannter Lektionen hat sich geändert.' });

    for (const knownLesson of knownUnit.lessons) {
      const home = lessonHome.get(knownLesson.id);
      if (!home) {
        error({ id: knownLesson.id, unitId: unit.id, message: 'Bekannte veröffentlichte Lektion fehlt (gelöscht oder umbenannt).' });
        continue;
      }
      const where = { lessonId: knownLesson.id, unitId: home.unit.id };
      if (home.unit.id !== unit.id) error({ id: knownLesson.id, ...where, message: `Lektion ist von ${unit.id} nach ${home.unit.id} umgezogen.` });
      if (home.lesson.status !== 'published') error({ id: knownLesson.id, ...where, message: 'Bekannte Lektion ist nicht mehr veröffentlicht.' });
      const actualSteps = home.lesson.steps.map((step) => step.id);
      for (const stepId of knownLesson.steps) {
        if (!actualSteps.includes(stepId)) error({ id: stepId, ...where, message: 'Bekannter Schritt fehlt (gelöscht oder umbenannt).' });
      }
      const breakStep = orderBreak(knownLesson.steps, actualSteps);
      if (breakStep) error({ id: breakStep, ...where, message: 'Die Reihenfolge bekannter Schritte hat sich geändert.' });
    }
  }

  // Neu hinzugekommen: erlaubt, aber noch nicht bewusst aufgenommen.
  const knownUnits = new Map(input.known.units.map((unit) => [unit.id, unit]));
  for (const unit of input.course.units) {
    const knownUnit = knownUnits.get(unit.id);
    const knownLessons = new Map((knownUnit?.lessons ?? []).map((lesson) => [lesson.id, lesson]));
    const newItems: string[] = [];
    if (!knownUnit) newItems.push(`Einheit ${unit.id}`);
    for (const lesson of unit.lessons.filter((candidate) => candidate.status === 'published')) {
      const knownLesson = knownLessons.get(lesson.id);
      if (!knownLesson) {
        newItems.push(`Lektion ${lesson.id}`);
        continue;
      }
      for (const step of lesson.steps) {
        if (!knownLesson.steps.includes(step.id)) newItems.push(`Schritt ${step.id} (${lesson.id})`);
      }
    }
    if (newItems.length > 0) {
      issues.push({
        severity: 'error',
        area: 'known-ids',
        rule: 'neue-id',
        id: unit.id,
        unitId: unit.id,
        message: `${newItems.length} neue veröffentlichte ID(s) noch nicht in der Liste bekannter IDs, z. B. ${newItems.slice(0, 3).join(', ')}. Bewusst aufnehmen mit „npm run check:content -- --accept-new“.`,
      });
    }
  }
}

/**
 * Nimmt neue veröffentlichte IDs in die Liste auf – ohne je eine bekannte ID
 * zu entfernen oder umzuordnen. Nur erlaubt, wenn keine bekannte ID verletzt
 * ist; Löschungen bleiben eine bewusste Handarbeit an der Datei.
 */
export function acceptNewIds(known: KnownIds, course: Course): KnownIds {
  const current = snapshotKnownIds(course);
  const knownUnits = new Map(known.units.map((unit) => [unit.id, unit]));
  return {
    ...(known.note ? { note: known.note } : {}),
    units: current.units.map((unit) => {
      const previous = knownUnits.get(unit.id);
      if (!previous) return unit;
      const previousLessons = new Map(previous.lessons.map((lesson) => [lesson.id, lesson]));
      return {
        id: unit.id,
        lessons: unit.lessons.map((lesson) => {
          const before = previousLessons.get(lesson.id);
          return before ? { id: lesson.id, steps: [...before.steps, ...lesson.steps.filter((id) => !before.steps.includes(id))] } : lesson;
        }),
      };
    }),
  };
}

/* ------------------------------------------------------------------ */
/* Gesamtprüfung                                                       */
/* ------------------------------------------------------------------ */

export interface ContentReport {
  issues: ContentIssue[];
  errors: number;
  warnings: number;
}

export function checkContent(input: ContentCheckInput): ContentReport {
  const issues: ContentIssue[] = [];
  checkStructure(input.course, issues);
  checkDiagrams(input, issues);
  checkGlossary(input, issues);
  checkCases(input, issues);
  checkTermLinks(input, issues);
  checkTopics(input, issues);
  checkKnownIds(input, issues);
  return {
    issues,
    errors: issues.filter((issue) => issue.severity === 'error').length,
    warnings: issues.filter((issue) => issue.severity === 'warning').length,
  };
}

/** Kompakte Ausgabe: eine Zeile je Befund mit Regel, ID und Datei. */
export function formatReport(report: ContentReport): string {
  const lines = report.issues.map((issue) => {
    const mark = issue.severity === 'error' ? '✗' : '!';
    const where = [issue.file, issue.lessonId && issue.lessonId !== issue.id ? issue.lessonId : undefined]
      .filter(Boolean)
      .join(' · ');
    return `${mark} [${issue.rule}] ${issue.id}${where ? ` (${where})` : ''}: ${issue.message}`;
  });
  lines.push(`${report.errors} Fehler, ${report.warnings} Hinweise.`);
  return lines.join('\n');
}

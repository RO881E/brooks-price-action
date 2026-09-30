import {
  BAR_CASE_SCHEMA_VERSION,
  TRADE_DECISIONS,
  type BarCase,
  type CaseBar,
  type DecisionPoint,
} from '../content/barCaseTypes';
import type { CourseOutline } from '../content/types';

/*
 * Prüfung von Bar-für-Bar-Fällen (F-14). Alle Befunde werden gesammelt und mit
 * Pfad gemeldet, damit ein Content-PR jeden Fehler auf einmal sieht. Geprüft
 * werden Form und Logik, nicht die fachliche Richtigkeit – die bleibt eine
 * redaktionelle Freigabe (C-01).
 */

export interface CaseIssue {
  caseId: string;
  /** Ort im Fall, z. B. `decisions[1].options`. */
  path: string;
  message: string;
}

/** Stabile, lesbare IDs: Kleinbuchstaben, Ziffern, Punkt und Bindestrich. */
const ID_PATTERN = /^[a-z0-9]+(?:[.-][a-z0-9]+)*$/;
const MAX_ID_LENGTH = 120;
/** Rückmeldungen und Erklärungen müssen eine echte Begründung enthalten. */
export const MIN_EXPLANATION_LENGTH = 20;
const MIN_BARS = 3;

function isText(value: unknown, min = 1): value is string {
  return typeof value === 'string' && value.trim().length >= min;
}

function isId(value: unknown): value is string {
  return typeof value === 'string' && value.length <= MAX_ID_LENGTH && ID_PATTERN.test(value);
}

interface LessonRef {
  unitId: string;
  published: boolean;
}

function lessonIndex(course: CourseOutline): Map<string, LessonRef> {
  return new Map(
    course.units.flatMap((unit) =>
      unit.lessons.map(
        (lesson) => [lesson.id, { unitId: unit.id, published: lesson.status === 'published' }] as const,
      ),
    ),
  );
}

export function checkBar(bar: CaseBar, path: string, report: (path: string, message: string) => void) {
  const values = [bar.open, bar.high, bar.low, bar.close];
  if (!values.every((value) => typeof value === 'number' && Number.isFinite(value))) {
    report(path, 'OHLC-Werte müssen endliche Zahlen sein.');
    return;
  }
  if (bar.low > bar.high) report(path, 'Das Tief liegt über dem Hoch.');
  if (bar.low > Math.min(bar.open, bar.close)) report(path, 'Das Tief liegt über Eröffnung oder Schluss.');
  if (bar.high < Math.max(bar.open, bar.close)) report(path, 'Das Hoch liegt unter Eröffnung oder Schluss.');
  if (bar.label !== undefined && !isText(bar.label)) report(path, 'Eine Beschriftung darf nicht leer sein.');
}

function checkDecision(
  decision: DecisionPoint,
  path: string,
  lessons: Map<string, LessonRef>,
  report: (path: string, message: string) => void,
) {
  if (!isId(decision.id)) report(`${path}.id`, 'Ungültige ID des Entscheidungspunkts.');
  if (!isText(decision.prompt)) report(`${path}.prompt`, 'Die Frage fehlt.');
  if (!isText(decision.explanation, MIN_EXPLANATION_LENGTH)) {
    report(`${path}.explanation`, `Die Einordnung braucht mindestens ${MIN_EXPLANATION_LENGTH} Zeichen.`);
  }

  // Genau eine Option je Entscheidung, genau eine davon die beste.
  const options = Array.isArray(decision.options) ? decision.options : [];
  const decisions = options.map((option) => option.decision);
  for (const expected of TRADE_DECISIONS) {
    const count = decisions.filter((value) => value === expected).length;
    if (count !== 1) report(`${path}.options`, `Option „${expected}“ muss genau einmal vorkommen (gefunden: ${count}).`);
  }
  if (options.length !== TRADE_DECISIONS.length) {
    report(`${path}.options`, `Erwartet werden genau ${TRADE_DECISIONS.length} Optionen.`);
  }
  const best = options.filter((option) => option.verdict === 'best').length;
  if (best !== 1) report(`${path}.options`, `Genau eine Option muss „best“ sein (gefunden: ${best}).`);
  options.forEach((option, index) => {
    if (!['best', 'defensible', 'mistake'].includes(option.verdict)) {
      report(`${path}.options[${index}].verdict`, 'Unbekannte Einordnung.');
    }
    if (!isText(option.feedback, MIN_EXPLANATION_LENGTH)) {
      report(`${path}.options[${index}].feedback`, `Jede Option braucht eine begründete Rückmeldung (mindestens ${MIN_EXPLANATION_LENGTH} Zeichen).`);
    }
  });

  // Hinweise: mindestens zwei, eindeutig, mindestens einer relevant.
  const cues = Array.isArray(decision.cues) ? decision.cues : [];
  if (cues.length < 2) report(`${path}.cues`, 'Mindestens zwei Hinweise sind nötig.');
  if (!cues.some((cue) => cue.relevant === true)) report(`${path}.cues`, 'Mindestens ein Hinweis muss relevant sein.');
  const cueIds = new Set<string>();
  cues.forEach((cue, index) => {
    const cuePath = `${path}.cues[${index}]`;
    if (!isId(cue.id)) report(`${cuePath}.id`, 'Ungültige Hinweis-ID.');
    else if (cueIds.has(cue.id)) report(`${cuePath}.id`, `Doppelte Hinweis-ID „${cue.id}“.`);
    cueIds.add(cue.id);
    if (!isText(cue.label)) report(`${cuePath}.label`, 'Die Beschriftung fehlt.');
    if (typeof cue.relevant !== 'boolean') report(`${cuePath}.relevant`, '„relevant“ muss true oder false sein.');
    if (!isText(cue.explanation, MIN_EXPLANATION_LENGTH)) {
      report(`${cuePath}.explanation`, `Jeder Hinweis braucht eine Erklärung (mindestens ${MIN_EXPLANATION_LENGTH} Zeichen).`);
    }
    if (cue.lessonId !== undefined) {
      const ref = lessons.get(cue.lessonId);
      if (!ref || !ref.published) report(`${cuePath}.lessonId`, `Lernlink auf unbekannte oder unveröffentlichte Lektion „${cue.lessonId}“.`);
    }
  });
}

/** Prüft einen einzelnen Fall gegen den Vertrag und die Kursgliederung. */
export function validateBarCase(barCase: BarCase, course: CourseOutline): CaseIssue[] {
  const issues: CaseIssue[] = [];
  const caseId = typeof barCase.id === 'string' ? barCase.id : '(ohne ID)';
  const report = (path: string, message: string) => issues.push({ caseId, path, message });
  const lessons = lessonIndex(course);

  if (!isId(barCase.id)) report('id', 'Ungültige Fall-ID (Kleinbuchstaben, Ziffern, „.“ und „-“).');
  if (barCase.schemaVersion !== BAR_CASE_SCHEMA_VERSION) {
    report('schemaVersion', `Unbekannte Vertragsversion (erwartet ${BAR_CASE_SCHEMA_VERSION}).`);
  }
  if (barCase.status !== 'draft' && barCase.status !== 'approved') report('status', 'Status muss „draft“ oder „approved“ sein.');
  if (!isText(barCase.title)) report('title', 'Der Titel fehlt.');
  if (!isText(barCase.setup)) report('setup', 'Die Ausgangslage fehlt.');
  if (barCase.timeframe !== undefined && !isText(barCase.timeframe)) report('timeframe', 'Der Rahmen darf nicht leer sein.');

  // Referenzen: veröffentlichte Einheit und Lektionen dieser Einheit.
  const unit = course.units.find((candidate) => candidate.id === barCase.unitId);
  if (!unit) report('unitId', `Unbekannte Einheit „${String(barCase.unitId)}“.`);
  const lessonIds = Array.isArray(barCase.lessonIds) ? barCase.lessonIds : [];
  if (lessonIds.length === 0) report('lessonIds', 'Mindestens eine zugeordnete Lektion ist nötig.');
  lessonIds.forEach((lessonId, index) => {
    const ref = lessons.get(lessonId);
    if (!ref) report(`lessonIds[${index}]`, `Unbekannte Lektion „${lessonId}“.`);
    else if (!ref.published) report(`lessonIds[${index}]`, `Lektion „${lessonId}“ ist nicht veröffentlicht.`);
    else if (unit && ref.unitId !== unit.id) report(`lessonIds[${index}]`, `Lektion „${lessonId}“ gehört nicht zu „${unit.id}“.`);
  });
  const anchors = Array.isArray(barCase.sourceAnchors) ? barCase.sourceAnchors : [];
  if (anchors.length === 0 || !anchors.every((anchor) => isText(anchor))) {
    report('sourceAnchors', 'Mindestens ein nicht leerer Quellenanker ist nötig.');
  }

  // Bars: genug Kontext, gültige OHLC-Werte.
  const bars = Array.isArray(barCase.bars) ? barCase.bars : [];
  if (bars.length < MIN_BARS) report('bars', `Mindestens ${MIN_BARS} Bars sind nötig.`);
  bars.forEach((bar, index) => checkBar(bar, `bars[${index}]`, report));

  // Entscheidungspunkte: eindeutig, chronologisch, nie ohne Folgebar.
  const decisions = Array.isArray(barCase.decisions) ? barCase.decisions : [];
  if (decisions.length === 0) report('decisions', 'Mindestens ein Entscheidungspunkt ist nötig.');
  const decisionIds = new Set<string>();
  let previous = -1;
  decisions.forEach((decision, index) => {
    const path = `decisions[${index}]`;
    if (decisionIds.has(decision.id)) report(`${path}.id`, `Doppelte ID „${decision.id}“.`);
    decisionIds.add(decision.id);
    const after = decision.afterBar;
    if (!Number.isInteger(after) || after < 0) {
      report(`${path}.afterBar`, '„afterBar“ muss ein Bar-Index ab 0 sein.');
    } else {
      if (after <= previous) report(`${path}.afterBar`, 'Entscheidungspunkte müssen zeitlich aufsteigen.');
      if (after >= bars.length - 1) report(`${path}.afterBar`, 'Nach jedem Entscheidungspunkt muss mindestens ein Bar folgen.');
      previous = after;
    }
    checkDecision(decision, path, lessons, report);
  });

  return issues;
}

/** Prüft alle Fälle und zusätzlich die Eindeutigkeit der Fall-IDs. */
export function validateBarCases(cases: readonly BarCase[], course: CourseOutline): CaseIssue[] {
  const seen = new Set<string>();
  const issues: CaseIssue[] = [];
  for (const barCase of cases) {
    if (seen.has(barCase.id)) {
      issues.push({ caseId: barCase.id, path: 'id', message: `Doppelte Fall-ID „${barCase.id}“.` });
    }
    seen.add(barCase.id);
    issues.push(...validateBarCase(barCase, course));
  }
  return issues;
}

/** Lesbare Zusammenfassung der Befunde, z. B. für Testausgaben. */
export function formatIssues(issues: readonly CaseIssue[]): string {
  return issues.map((issue) => `${issue.caseId} › ${issue.path}: ${issue.message}`).join('\n');
}

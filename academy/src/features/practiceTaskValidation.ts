import type { OrderTask, SignalBarTask } from '../content/practiceTaskTypes';
import { PRACTICE_TASK_SCHEMA_VERSION } from '../content/practiceTaskTypes';
import type { CourseOutline } from '../content/types';
import { checkBar, MIN_EXPLANATION_LENGTH } from './barCaseValidation';
import { FIRST_MATCH_RULES, ruleMatches } from './practiceTasks';

/*
 * Prüfung der C-04-Aufgaben. Wie bei den Bar-Fällen werden alle Befunde gesammelt. Geprüft werden
 * Form, IDs, Lektionsbezug und – für Signal-Bars – dass der Zielbar die genannte Regel wirklich
 * erfüllt (und kein anderer). Die fachliche Richtigkeit bleibt eine redaktionelle Freigabe.
 */

export interface PracticeTaskIssue {
  taskId: string;
  path: string;
  message: string;
}

const ID_PATTERN = /^[a-z0-9]+(?:[.-][a-z0-9]+)*$/;
const text = (value: unknown, min = 1): value is string => typeof value === 'string' && value.trim().length >= min;

function lessonMap(course: CourseOutline) {
  return new Map(
    course.units.flatMap((unit) =>
      unit.lessons.map((lesson) => [lesson.id, { unitId: unit.id, published: lesson.status === 'published' }] as const),
    ),
  );
}

interface Common {
  id: string;
  schemaVersion: number;
  status: string;
  title: string;
  unitId: string;
  lessonIds: string[];
  prompt: string;
  explanation: string;
  sourceAnchors: string[];
}

function checkCommon(task: Common, course: CourseOutline, report: (path: string, message: string) => void) {
  if (typeof task.id !== 'string' || !ID_PATTERN.test(task.id) || task.id.length > 120) report('id', 'Ungültige ID.');
  if (task.schemaVersion !== PRACTICE_TASK_SCHEMA_VERSION) report('schemaVersion', 'Unbekannte Vertragsversion.');
  if (task.status !== 'draft' && task.status !== 'approved') report('status', 'Status muss draft oder approved sein.');
  if (!text(task.title)) report('title', 'Der Titel fehlt.');
  if (!text(task.prompt, 10)) report('prompt', 'Die Aufgabenstellung fehlt.');
  if (!text(task.explanation, MIN_EXPLANATION_LENGTH)) {
    report('explanation', `Die Erklärung braucht mindestens ${MIN_EXPLANATION_LENGTH} Zeichen.`);
  }
  if (!Array.isArray(task.sourceAnchors) || task.sourceAnchors.length === 0 || !task.sourceAnchors.every((a) => text(a))) {
    report('sourceAnchors', 'Mindestens ein Quellenanker ist nötig.');
  }
  const lessons = lessonMap(course);
  if (!course.units.some((unit) => unit.id === task.unitId)) report('unitId', `Unbekannte Einheit ${task.unitId}.`);
  if (!Array.isArray(task.lessonIds) || task.lessonIds.length === 0) {
    report('lessonIds', 'Mindestens eine Lektion ist nötig.');
    return;
  }
  task.lessonIds.forEach((lessonId, index) => {
    const lesson = lessons.get(lessonId);
    if (!lesson) report(`lessonIds[${index}]`, `Unbekannte Lektion ${lessonId}.`);
    else if (!lesson.published) report(`lessonIds[${index}]`, `Lektion ${lessonId} ist nicht veröffentlicht.`);
    else if (lesson.unitId !== task.unitId) report(`lessonIds[${index}]`, `Lektion ${lessonId} gehört nicht zur Einheit ${task.unitId}.`);
  });
}

export function validateSignalTasks(tasks: readonly SignalBarTask[], course: CourseOutline): PracticeTaskIssue[] {
  const issues: PracticeTaskIssue[] = [];
  const seen = new Set<string>();
  for (const task of tasks) {
    const report = (path: string, message: string) => issues.push({ taskId: String(task.id), path, message });
    if (seen.has(task.id)) report('id', 'Doppelte ID.');
    seen.add(task.id);
    checkCommon(task, course, report);
    if (!text(task.retryHint, 10)) report('retryHint', 'Der Hinweis bei Fehlversuchen fehlt.');

    const bars = Array.isArray(task.bars) ? task.bars : [];
    if (bars.length < 6 || bars.length > 14) report('bars', 'Eine Aufgabe braucht 6 bis 14 Bars.');
    bars.forEach((bar, index) => checkBar(bar, `bars[${index}]`, report));
    if (!Number.isInteger(task.targetBarIndex) || task.targetBarIndex < 0 || task.targetBarIndex >= bars.length) {
      report('targetBarIndex', 'Der Zielbar liegt außerhalb der Bars.');
      continue;
    }
    if (task.hints.some((hint) => !Number.isInteger(hint.barIndex) || hint.barIndex < 0 || hint.barIndex >= bars.length || hint.barIndex === task.targetBarIndex || !text(hint.text, 10))) {
      report('hints', 'Hinweise brauchen einen anderen, gültigen Bar und einen Text.');
    }
    const matches = ruleMatches(bars, task.rule);
    const expected = FIRST_MATCH_RULES.includes(task.rule) ? matches[0] === task.targetBarIndex : matches.length === 1 && matches[0] === task.targetBarIndex;
    if (!expected) {
      report('rule', `Regel „${task.rule}“ trifft auf Bar(s) ${matches.map((i) => i + 1).join(', ') || '–'}, nicht eindeutig auf Bar ${task.targetBarIndex + 1}.`);
    }
  }
  return issues;
}

export function validateOrderTasks(tasks: readonly OrderTask[], course: CourseOutline): PracticeTaskIssue[] {
  const issues: PracticeTaskIssue[] = [];
  const seen = new Set<string>();
  for (const task of tasks) {
    const report = (path: string, message: string) => issues.push({ taskId: String(task.id), path, message });
    if (seen.has(task.id)) report('id', 'Doppelte ID.');
    seen.add(task.id);
    checkCommon(task, course, report);
    const steps = Array.isArray(task.steps) ? task.steps : [];
    if (steps.length < 3 || steps.length > 6) report('steps', 'Eine Aufgabe braucht 3 bis 6 Schritte.');
    const ids = new Set<string>();
    steps.forEach((step, index) => {
      if (typeof step.id !== 'string' || !ID_PATTERN.test(step.id)) report(`steps[${index}].id`, 'Ungültige Schritt-ID.');
      if (ids.has(step.id)) report(`steps[${index}].id`, 'Doppelte Schritt-ID.');
      ids.add(step.id);
      if (!text(step.text, 5)) report(`steps[${index}].text`, 'Der Schritttext fehlt.');
    });
    const texts = steps.map((step) => step.text?.trim());
    if (new Set(texts).size !== texts.length) report('steps', 'Zwei Schritte haben denselben Text.');
  }
  return issues;
}

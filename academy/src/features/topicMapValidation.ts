import type { BarCase } from '../content/barCaseTypes';
import type { PriceActionTopic } from '../content/topicMap';
import type { Course } from '../content/types';

/*
 * Prüfung der Themenkarte (C-03). Sammelt alle Befunde mit Thema und Pfad, damit
 * ein Content-PR jeden Fehler auf einmal sieht. Geprüft werden Form und Bezug
 * (vorhandene Lektionen, Quellenanker, Fragen, freigegebene Fälle) – nicht die
 * fachliche Richtigkeit der Zuordnung; die bleibt eine redaktionelle Prüfung.
 */

export interface TopicIssue {
  topicId: string;
  /** Ort im Thema, z. B. `teaching[2].anchor`. */
  path: string;
  message: string;
}

const TOPIC_ID = /^topic\.[a-z0-9]+(?:-[a-z0-9]+)*$/;

const isText = (value: unknown): value is string => typeof value === 'string' && value.trim() !== '';

export function validateTopicMap(
  topics: readonly PriceActionTopic[],
  course: Course,
  cases: readonly BarCase[],
  transferCases: readonly BarCase[] = [],
): TopicIssue[] {
  const issues: TopicIssue[] = [];
  const lessons = new Map(
    course.units.flatMap((unit) => unit.lessons.map((lesson) => [lesson.id, lesson] as const)),
  );
  const questionLesson = new Map<string, string>();
  for (const lesson of lessons.values()) {
    if (lesson.status !== 'published') continue;
    for (const step of lesson.steps) if (step.type === 'question') questionLesson.set(step.id, lesson.id);
  }
  const caseById = new Map(cases.map((barCase) => [barCase.id, barCase] as const));
  const transferById = new Map(transferCases.map((barCase) => [barCase.id, barCase] as const));
  const seenTopics = new Set<string>();

  for (const topic of topics) {
    const report = (path: string, message: string) => issues.push({ topicId: topic.id, path, message });
    if (!TOPIC_ID.test(topic.id)) report('id', 'Ungültige Themen-ID (erwartet „topic.<name>“).');
    if (seenTopics.has(topic.id)) report('id', `Doppelte Themen-ID „${topic.id}“.`);
    seenTopics.add(topic.id);
    if (!isText(topic.title)) report('title', 'Der Titel fehlt.');
    if (!isText(topic.summary)) report('summary', 'Die Kurzbeschreibung fehlt.');

    // Lehrstellen: veröffentlichte Lektion mit vorhandenem Quellenanker.
    if (topic.teaching.length === 0) report('teaching', 'Mindestens eine Lehrstelle ist nötig.');
    const teachingLessons = new Set<string>();
    topic.teaching.forEach((ref, index) => {
      const lesson = lessons.get(ref.lessonId);
      if (!lesson) report(`teaching[${index}].lessonId`, `Unbekannte Lektion „${ref.lessonId}“.`);
      else if (lesson.status !== 'published') report(`teaching[${index}].lessonId`, `Lektion „${ref.lessonId}“ ist nicht veröffentlicht.`);
      else if (!(lesson.sourceAnchors ?? []).includes(ref.anchor)) {
        report(`teaching[${index}].anchor`, `Quellenanker „${ref.anchor}“ fehlt in Lektion „${ref.lessonId}“.`);
      }
      if (teachingLessons.has(ref.lessonId)) report(`teaching[${index}].lessonId`, `Lektion „${ref.lessonId}“ ist doppelt aufgeführt.`);
      teachingLessons.add(ref.lessonId);
    });

    // Fragen: vorhanden, eindeutig und aus einer Lehrstelle des Themas.
    const questions = new Set<string>();
    topic.questionIds.forEach((questionId, index) => {
      const owner = questionLesson.get(questionId);
      if (!owner) report(`questionIds[${index}]`, `Unbekannte oder unveröffentlichte Frage „${questionId}“.`);
      else if (!teachingLessons.has(owner)) {
        report(`questionIds[${index}]`, `Frage „${questionId}“ gehört zu „${owner}“, das keine Lehrstelle dieses Themas ist.`);
      }
      if (questions.has(questionId)) report(`questionIds[${index}]`, `Frage „${questionId}“ ist doppelt zugeordnet.`);
      questions.add(questionId);
    });

    // Fälle: nur freigegebene, mit gemeinsamer Lektion.
    const seenCases = new Set<string>();
    topic.caseIds.forEach((caseId, index) => {
      const barCase = caseById.get(caseId);
      if (!barCase) report(`caseIds[${index}]`, `Unbekannter Fall „${caseId}“.`);
      else {
        if (barCase.status !== 'approved') report(`caseIds[${index}]`, `Fall „${caseId}“ ist nicht freigegeben.`);
        if (!barCase.lessonIds.some((lessonId) => teachingLessons.has(lessonId))) {
          report(`caseIds[${index}]`, `Fall „${caseId}“ teilt keine Lektion mit den Lehrstellen des Themas.`);
        }
      }
      if (seenCases.has(caseId)) report(`caseIds[${index}]`, `Fall „${caseId}“ ist doppelt zugeordnet.`);
      seenCases.add(caseId);
    });

    // Transferfälle (C-02): eigener Pool, freigegeben, mit gemeinsamer Lektion, nie doppelt.
    const seenTransfer = new Set<string>();
    (topic.transferCaseIds ?? []).forEach((caseId, index) => {
      const barCase = transferById.get(caseId);
      if (!barCase) report(`transferCaseIds[${index}]`, `Unbekannter Transferfall „${caseId}“.`);
      else {
        if (barCase.status !== 'approved') report(`transferCaseIds[${index}]`, `Transferfall „${caseId}“ ist nicht freigegeben.`);
        if (!barCase.lessonIds.some((lessonId) => teachingLessons.has(lessonId))) {
          report(`transferCaseIds[${index}]`, `Transferfall „${caseId}“ teilt keine Lektion mit den Lehrstellen des Themas.`);
        }
      }
      if (seenTransfer.has(caseId)) report(`transferCaseIds[${index}]`, `Transferfall „${caseId}“ ist doppelt zugeordnet.`);
      seenTransfer.add(caseId);
    });

    if (topic.questionIds.length === 0 && topic.caseIds.length === 0) {
      report('questionIds', 'Ein Thema ohne Frage und Fall wird nicht aufgefüllt – bitte entfernen oder Bezug belegen.');
    }
  }
  return issues;
}

export function formatTopicIssues(issues: readonly TopicIssue[]): string {
  return issues.map((issue) => `${issue.topicId} › ${issue.path}: ${issue.message}`).join('\n');
}

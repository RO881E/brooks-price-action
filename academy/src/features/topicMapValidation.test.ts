import { describe, expect, it } from 'vitest';
import { barCases, transferCases } from '../content/barCases';
import { brooksTrendsCourse } from '../content/course';
import { brooksTopics, type BrooksTopic } from '../content/topicMap';
import { formatTopicIssues, validateTopicMap } from './topicMapValidation';

const check = (topics: readonly BrooksTopic[]) => formatTopicIssues(validateTopicMap(topics, brooksTrendsCourse, barCases, transferCases));
const first = brooksTopics[0];
const clone = (patch: Partial<BrooksTopic>): BrooksTopic => ({ ...structuredClone(first), ...patch });

describe('C-03 Themenkarte', () => {
  it('die eingetragene Karte erfüllt alle Bezüge', () => {
    expect(check(brooksTopics)).toBe('');
  });

  it('enthält sechs bis zehn stabile, eindeutige Themen ohne leere Themen', () => {
    expect(brooksTopics.length).toBeGreaterThanOrEqual(6);
    expect(brooksTopics.length).toBeLessThanOrEqual(10);
    expect(new Set(brooksTopics.map((topic) => topic.id)).size).toBe(brooksTopics.length);
    for (const topic of brooksTopics) {
      expect(topic.teaching.length).toBeGreaterThan(0);
      expect(topic.questionIds.length + topic.caseIds.length).toBeGreaterThan(0);
    }
  });

  it('erlaubt Mehrfachzuordnung, ordnet aber keine Frage doppelt innerhalb eines Themas zu', () => {
    const counts = new Map<string, number>();
    for (const topic of brooksTopics) for (const id of topic.questionIds) counts.set(id, (counts.get(id) ?? 0) + 1);
    expect([...counts.values()].some((count) => count > 1)).toBe(true);
    for (const topic of brooksTopics) expect(new Set(topic.questionIds).size).toBe(topic.questionIds.length);
  });

  it('enthält nur freigegebene Fälle des gewöhnlichen Trainers', () => {
    const approved = new Set(barCases.filter((barCase) => barCase.status === 'approved').map((barCase) => barCase.id));
    for (const topic of brooksTopics) for (const id of topic.caseIds) expect(approved.has(id)).toBe(true);
  });

  it('meldet Doppelte, Unbekanntes und fehlende Bezüge lesbar', () => {
    const question = first.questionIds[0];
    expect(check([first, clone({})])).toContain('Doppelte Themen-ID');
    expect(check([clone({ id: 'Ungültig' })])).toContain('Ungültige Themen-ID');
    expect(check([clone({ questionIds: [...first.questionIds, 'gibt-es-nicht'] })])).toContain('Unbekannte oder unveröffentlichte Frage „gibt-es-nicht“');
    expect(check([clone({ questionIds: [question, question] })])).toContain('doppelt zugeordnet');
    expect(check([clone({ teaching: [{ lessonId: 'brooks-trends.chapter-01.lesson-01', anchor: 'erfunden' }] })])).toContain('Quellenanker „erfunden“ fehlt');
    expect(check([clone({ teaching: [{ lessonId: 'brooks-trends.gibt-es-nicht', anchor: 'x' }] })])).toContain('Unbekannte Lektion');
    expect(check([clone({ caseIds: ['bar-case.gibt-es-nicht'] })])).toContain('Unbekannter Fall');
    expect(check([clone({ questionIds: [], caseIds: [] })])).toContain('Ein Thema ohne Frage und Fall');
  });

  it('weist Fragen fremder Lektionen und fremde Fälle zurück', () => {
    const foreign = brooksTopics.find((topic) => topic.id !== first.id)!.questionIds.find((id) => !first.questionIds.includes(id))!;
    expect(check([clone({ questionIds: [foreign] })])).toContain('keine Lehrstelle dieses Themas');
    const otherCase = barCases.find((barCase) => !first.teaching.some((ref) => barCase.lessonIds.includes(ref.lessonId)))!;
    expect(check([clone({ caseIds: [otherCase.id] })])).toContain('teilt keine Lektion');
  });

  it('Transferfälle: nur aus dem Transferpool, freigegeben, mit gemeinsamer Lektion und ohne Doppelte', () => {
    const transferTopic = brooksTopics.find((topic) => topic.transferCaseIds?.length)!;
    const id = transferTopic.transferCaseIds![0];
    const withIds = (ids: string[]) => check([{ ...structuredClone(transferTopic), transferCaseIds: ids }]);
    expect(withIds([id])).toBe('');
    expect(withIds(['bar-case.c02.gibt-es-nicht'])).toContain('Unbekannter Transferfall');
    expect(withIds([id, id])).toContain('doppelt zugeordnet');
    // Ein C-01-Fall gehört nicht in den Transferpool.
    expect(withIds([barCases[0].id])).toContain('Unbekannter Transferfall');
    // Ein Fall ohne gemeinsame Lektion mit den Lehrstellen wird abgelehnt.
    const other = transferCases.find((barCase) => !barCase.lessonIds.some((lessonId) => transferTopic.teaching.some((ref) => ref.lessonId === lessonId)))!;
    expect(withIds([other.id])).toContain('teilt keine Lektion');
  });

  it('jeder freigegebene Transferfall ist mindestens einem Thema zugeordnet', () => {
    const mapped = new Set(brooksTopics.flatMap((topic) => topic.transferCaseIds ?? []));
    for (const barCase of transferCases.filter((item) => item.status === 'approved')) expect(mapped.has(barCase.id)).toBe(true);
  });
});

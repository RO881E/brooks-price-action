import { describe, expect, it } from 'vitest';
import { toCourseOutline } from '../../build/courseOutline';
import { c02BarCases } from '../content/barCases/c02';
import { barCases } from '../content/barCases';
import type { BarCase } from '../content/barCaseTypes';
import { brooksTrendsCourse } from '../content/course';
import { activeSession, caseEntries, findPublishedCase } from './caseTraining';
import { canSubmit, chooseDecision, publicView, toggleCue } from './barTrainer';
import { completeLesson, createEmptyProgress, migrateProgress, type AcademyProgress } from './progress';
import {
  answerTransferPoint,
  beginTransferCase,
  planTransfer,
  transferResults,
  updateTransferDraft,
} from './transferCheck';

const course = toCourseOutline(brooksTrendsCourse);
const approved: BarCase[] = c02BarCases.map((barCase) => ({ ...barCase, status: 'approved' }));
const published = course.units.flatMap((unit) => unit.lessons).filter((lesson) => lesson.status === 'published');

const everything = published.reduce(
  (progress, lesson) => completeLesson(progress, lesson.id, lesson.xp, '2026-09-20T08:00:00.000Z'),
  createEmptyProgress(),
);

/** Spielt einen Fall komplett durch: „Abwarten“ mit dem ersten Hinweis je Punkt. */
function playCase(progress: AcademyProgress, barCase: BarCase): AcademyProgress {
  let current = beginTransferCase(progress, barCase);
  for (let index = 0; index < barCase.decisions.length; index += 1) {
    const point = barCase.decisions[index];
    current = updateTransferDraft(current, barCase, (s) => chooseDecision(s, 'wait'));
    current = updateTransferDraft(current, barCase, (s) => toggleCue(barCase, s, point.cues[0].id));
    current = answerTransferPoint(current, barCase);
  }
  return current;
}

const plan = (progress: AcademyProgress, cases = approved) => planTransfer(course, progress, cases);

describe('Transferprüfung (F-17)', () => {
  it('ohne freigegebene Fälle: kein Angebot (Entwürfe zählen nicht)', () => {
    const result = planTransfer(course, everything, c02BarCases);
    expect(result.status).toBe('none');
    expect(result.approved).toBe(0);
    expect(result.cases).toEqual([]);
  });

  it('neuer Stand: freigegebene Fälle sind gesperrt und nennen die fehlende Lektion', () => {
    const result = plan(createEmptyProgress());
    expect(result.status).toBe('none');
    expect(result.approved).toBe(approved.length);
    expect(result.locked).toHaveLength(approved.length);
    expect(result.locked[0].lockedBy.title.length).toBeGreaterThan(0);
  });

  it('fortgeschritten: Erstversuch bereit mit allen zugänglichen Fällen in fester Reihenfolge', () => {
    const result = plan(everything);
    expect(result.status).toBe('ready');
    expect(result.attempt).toBe(1);
    expect(result.cases.map((barCase) => barCase.id)).toEqual(approved.map((barCase) => barCase.id));
    expect(new Set(result.cases.map((barCase) => barCase.id)).size).toBe(result.cases.length);
    expect(plan(everything)).toEqual(result);
  });

  it('nur bereits erreichte Kapitel: Fälle aus späteren Kapiteln bleiben gesperrt und werden nicht angeboten', () => {
    const chapterTwo = course.units.findIndex((unit) => unit.id === 'brooks-trends.chapter-02');
    const progress = course.units
      .slice(0, chapterTwo + 1)
      .flatMap((unit) => unit.lessons)
      .filter((lesson) => lesson.status === 'published')
      .reduce((p, lesson) => completeLesson(p, lesson.id, lesson.xp, '2026-09-20T08:00:00.000Z'), createEmptyProgress());
    const result = plan(progress);
    expect(result.cases.map((barCase) => barCase.unitId)).toEqual(['brooks-trends.chapter-01', 'brooks-trends.chapter-02']);
    expect(result.locked.length).toBe(approved.length - 2);
  });

  it('keine Lösung vor dem Ende: die öffentliche Sicht enthält weder Einordnung noch spätere Bars', () => {
    const barCase = approved.find((item) => item.decisions.length > 1)!;
    let progress = beginTransferCase(everything, barCase);
    const view = () => publicView(barCase, activeSession(progress, barCase)!);
    const first = view();
    expect(first.bars).toHaveLength(barCase.decisions[0].afterBar + 1);
    expect(JSON.stringify(first.current)).not.toMatch(/verdict|feedback|relevant|explanation/);
    progress = updateTransferDraft(progress, barCase, (s) => chooseDecision(s, 'long'));
    progress = updateTransferDraft(progress, barCase, (s) => toggleCue(barCase, s, barCase.decisions[0].cues[0].id));
    expect(canSubmit(activeSession(progress, barCase)!)).toBe(true);
    progress = answerTransferPoint(progress, barCase);
    // Direkt der nächste Punkt – nicht aufgelöst, Bars nur bis zu dessen Entscheidungsstelle.
    const second = view();
    expect(second.phase).toBe('decide');
    expect(second.bars).toHaveLength(barCase.decisions[1].afterBar + 1);
    expect(second.progress.position).toBe(2);
    expect(progress.caseRuns[barCase.id]).toBeUndefined();
  });

  it('Abgabe ohne Entscheidung oder Hinweis ändert nichts', () => {
    const barCase = approved[0];
    const started = beginTransferCase(everything, barCase);
    expect(answerTransferPoint(started, barCase)).toBe(started);
    const chosen = updateTransferDraft(started, barCase, (s) => chooseDecision(s, 'wait'));
    expect(answerTransferPoint(chosen, barCase)).toBe(chosen);
  });

  it('Reload mitten im Fall: der Durchlauf wird exakt fortgesetzt (Speicher-Round-Trip)', () => {
    const barCase = approved.find((item) => item.decisions.length > 1)!;
    let progress = beginTransferCase(everything, barCase);
    progress = updateTransferDraft(progress, barCase, (s) => chooseDecision(s, 'short'));
    progress = updateTransferDraft(progress, barCase, (s) => toggleCue(barCase, s, barCase.decisions[0].cues[0].id));
    progress = answerTransferPoint(progress, barCase);
    const reloaded = migrateProgress(JSON.parse(JSON.stringify(progress)))!;
    expect(activeSession(reloaded, barCase)).toEqual(activeSession(progress, barCase));
    expect(plan(reloaded).status).toBe('active');
    expect(plan(reloaded).pending[0].id).toBe(approved[0].id);
  });

  it('Durchlauf 1 bis Ende: Auswertung erst danach, Erstversuch gekennzeichnet, keine XP oder Lernaktivität', () => {
    const before = everything;
    let progress = before;
    for (const [index, barCase] of approved.entries()) {
      progress = playCase(progress, barCase);
      if (index < approved.length - 1) {
        expect(plan(progress).status).toBe('active');
        expect(transferResults(course, progress, approved)).toEqual([]);
      }
    }
    expect(plan(progress).status).toBe('done');
    const results = transferResults(course, progress, approved);
    expect(results).toHaveLength(approved.length);
    for (const entry of results) {
      expect(entry.attempt).toBe(1);
      expect(entry.replay.ok).toBe(true);
    }
    const { caseRuns: _runs, caseSessions: _sessions, ...restAfter } = progress;
    const { caseRuns: _runs0, caseSessions: _sessions0, ...restBefore } = before;
    expect(restAfter).toEqual(restBefore);
    expect(Object.keys(progress.caseSessions)).toEqual([]);
  });

  it('Wiederholung: eigener Durchlauf, Erstversuch bleibt erhalten und wird als Wiederholung gekennzeichnet', () => {
    let progress = everything;
    for (const barCase of approved) progress = playCase(progress, barCase);
    expect(plan(progress).attempt).toBe(2);
    const firstRuns = approved.map((barCase) => progress.caseRuns[barCase.id]![0]);
    progress = playCase(progress, approved[0]);
    expect(plan(progress).status).toBe('active');
    expect(plan(progress).attempt).toBe(2);
    expect(plan(progress).pending.map((barCase) => barCase.id)).toEqual(approved.slice(1).map((barCase) => barCase.id));
    for (const barCase of approved.slice(1)) progress = playCase(progress, barCase);
    expect(plan(progress).status).toBe('done');
    expect(transferResults(course, progress, approved).every((entry) => entry.attempt === 2)).toBe(true);
    // Erstversuch unverändert vorhanden (Reihenfolge nur nach Zeitstempel; bei gleicher Millisekunde entscheidet die ID).
    approved.forEach((barCase, index) =>
      expect(progress.caseRuns[barCase.id]!.find((run) => run.sessionId === firstRuns[index].sessionId)).toEqual(firstRuns[index]),
    );
  });

  it('Pool getrennt: der gewöhnliche Trainer kennt die Transferfälle nicht', () => {
    const entries = caseEntries(course, everything);
    for (const barCase of c02BarCases) {
      expect(entries.some((entry) => entry.barCase.id === barCase.id)).toBe(false);
      expect(findPublishedCase(barCase.id)).toBeUndefined();
      expect(barCases.some((item) => item.id === barCase.id)).toBe(false);
    }
  });

  it('entfallener Fall: vorhandene Runden bleiben gespeichert, die Prüfung nutzt nur die übrigen Fälle', () => {
    let progress = everything;
    for (const barCase of approved) progress = playCase(progress, barCase);
    const remaining = approved.slice(1);
    const result = planTransfer(course, progress, remaining);
    expect(result.cases).toHaveLength(remaining.length);
    expect(progress.caseRuns[approved[0].id]).toHaveLength(1);
    expect(result.status).toBe('done');
  });
});

describe('Route der Transferprüfung', () => {
  it('parst #/transfer und löst nur mit freigegebenen Fällen auf', async () => {
    const { formatRoute, parseRoute, resolveRoute } = await import('./navigation');
    expect(parseRoute('#/transfer')).toEqual({ kind: 'transfer' });
    expect(formatRoute({ kind: 'transfer' })).toBe('#/transfer');
    // Registrierter Transferpool besteht derzeit aus Entwürfen: keine Route ohne freigegebene Fälle.
    expect(resolveRoute({ kind: 'transfer' }, course, everything)).toBeNull();
  });
});

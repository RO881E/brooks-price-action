import { describe, expect, it } from 'vitest';
import { toCourseOutline } from '../../build/courseOutline';
import type { BarCase } from '../content/barCaseTypes';
import { barCases } from '../content/barCases';
import { brooksTrendsCourse } from '../content/course';
import { twoStepFixture } from '../test/fixtures/barCases';
import { advance, caseSummary, chooseDecision, startSession, submitDecision, toggleCue, type CaseSession } from './barTrainer';
import {
  activeSession,
  beginCaseRun,
  caseEntries,
  caseLockedBy,
  casesForLesson,
  discardCaseRun,
  findPublishedCase,
  lastCaseRun,
  newSessionId,
  publishedCases,
  updateCaseRun,
} from './caseTraining';
import { completeLesson, createEmptyProgress, MAX_CASE_RUNS, migrateProgress, type AcademyProgress } from './progress';

const course = toCourseOutline(brooksTrendsCourse);
const allLessons = course.units.flatMap((unit) => unit.lessons);
/** Fixture als freigegebener Fall – nur in diesem Test. */
const approvedFixture: BarCase = { ...twoStepFixture, status: 'approved' };
const draftFixture: BarCase = { ...twoStepFixture, id: 'test-fixture.draft', status: 'draft' };

function completedUntil(lessonId: string): AcademyProgress {
  let progress = createEmptyProgress();
  for (const lesson of allLessons) {
    if (lesson.status !== 'published') continue;
    if (lesson.id === lessonId) break;
    progress = completeLesson(progress, lesson.id, 0, '2026-09-29T08:00:00.000Z');
  }
  return progress;
}

/** Spielt einen Fall mit der ersten Option und dem ersten Hinweis je Punkt durch. */
function playThrough(barCase: BarCase, session: CaseSession = startSession(barCase)): CaseSession {
  let current = session;
  while (!current.finished) {
    const point = barCase.decisions[current.index];
    current = chooseDecision(current, 'wait');
    current = toggleCue(barCase, current, point.cues[0].id);
    current = submitDecision(barCase, current);
    current = advance(barCase, current);
  }
  return current;
}

describe('Bar-für-Bar-Trainer: Fallauswahl', () => {
  it('zeigt nur freigegebene Fälle', () => {
    expect(publishedCases([approvedFixture, draftFixture]).map((item) => item.id)).toEqual([approvedFixture.id]);
    expect(findPublishedCase(draftFixture.id, [draftFixture])).toBeUndefined();
    expect(publishedCases().length).toBe(barCases.filter((item) => item.status === 'approved').length);
    expect(publishedCases().length).toBeGreaterThan(0);
  });

  it('sperrt Fälle, bis alle zugeordneten Lektionen zugänglich sind, und nennt die erste fehlende', () => {
    const fresh = createEmptyProgress();
    const target = allLessons.find((lesson) => lesson.id === approvedFixture.lessonIds[1])!;
    expect(caseLockedBy(course, fresh, approvedFixture)?.id).toBe(target.id);
    const [entry] = caseEntries(course, fresh, [approvedFixture]);
    expect(entry).toMatchObject({ state: 'locked', lockedBy: { id: target.id, title: target.title } });

    const reached = completedUntil(target.id);
    expect(caseLockedBy(course, reached, approvedFixture)).toBeUndefined();
    expect(caseEntries(course, reached, [approvedFixture])[0].state).toBe('available');
  });

  it('unbekannte Lektionen sperren den Fall', () => {
    const broken = { ...approvedFixture, lessonIds: ['gibt-es-nicht'] };
    expect(caseEntries(course, createEmptyProgress(), [broken])[0].state).toBe('locked');
  });

  it('bietet „Chart trainieren“ nur für zugängliche, passende Lektionen an', () => {
    const lessonId = approvedFixture.lessonIds[0];
    expect(casesForLesson(course, createEmptyProgress(), lessonId, [approvedFixture])).toEqual([]);
    const reached = completedUntil(approvedFixture.lessonIds[1]);
    expect(casesForLesson(course, reached, lessonId, [approvedFixture, draftFixture]).map((item) => item.id)).toEqual([
      approvedFixture.id,
    ]);
    expect(casesForLesson(course, reached, 'andere-lektion', [approvedFixture])).toEqual([]);
  });
});

describe('Bar-für-Bar-Trainer: Runden speichern', () => {
  const reached = completedUntil(approvedFixture.lessonIds[1]);
  const at = (minute: number) => `2026-09-29T10:${String(minute).padStart(2, '0')}:00.000Z`;

  it('beginnt, speichert jeden Zwischenstand und setzt exakt fort', () => {
    let progress = beginCaseRun(reached, approvedFixture, 'run-a', at(0));
    expect(progress.caseSessions[approvedFixture.id]).toMatchObject({ sessionId: 'run-a', startedAt: at(0) });
    let session = activeSession(progress, approvedFixture)!;
    session = chooseDecision(session, 'long');
    session = toggleCue(approvedFixture, session, approvedFixture.decisions[0].cues[1].id);
    progress = updateCaseRun(progress, approvedFixture, session, at(1));

    // Wie nach einem Reload: aus JSON gelesen und migriert.
    const reloaded = migrateProgress(JSON.parse(JSON.stringify(progress)))!;
    expect(activeSession(reloaded, approvedFixture)).toEqual(session);
    expect(caseEntries(course, reloaded, [approvedFixture])[0]).toMatchObject({
      state: 'in-progress',
      progress: { position: 1, total: 2 },
    });
  });

  it('zählt eine beendete Runde genau einmal und entfernt sie aus den laufenden', () => {
    let progress = beginCaseRun(reached, approvedFixture, 'run-a', at(0));
    const finished = playThrough(approvedFixture, activeSession(progress, approvedFixture)!);
    progress = updateCaseRun(progress, approvedFixture, finished, at(5));
    expect(progress.caseSessions[approvedFixture.id]).toBeUndefined();
    const expected = caseSummary(approvedFixture, finished);
    expect(progress.caseRuns[approvedFixture.id]).toEqual([
      {
        sessionId: 'run-a',
        completedAt: at(5),
        ...expected.counts,
        missedCues: expected.missedCues,
      },
    ]);
    expect(expected.counts.best + expected.counts.defensible + expected.counts.mistake).toBe(approvedFixture.decisions.length);
    // Nochmaliges Speichern derselben (nun unbekannten) Runde ändert nichts.
    expect(updateCaseRun(progress, approvedFixture, finished, at(6))).toBe(progress);
    // Keine XP, kein Lektionsabschluss.
    expect(progress.lessonResults).toEqual(reached.lessonResults);
    expect(progress.completedLessonIds).toEqual(reached.completedLessonIds);
    expect(lastCaseRun(progress, approvedFixture.id)?.sessionId).toBe('run-a');
    expect(caseEntries(course, progress, [approvedFixture])[0]).toMatchObject({ state: 'completed', runs: 1 });

    // Neue Runde: neue ID, zweite Zählung.
    progress = beginCaseRun(progress, approvedFixture, 'run-b', at(7));
    progress = updateCaseRun(progress, approvedFixture, playThrough(approvedFixture), at(8));
    expect(progress.caseRuns[approvedFixture.id].map((run) => run.sessionId)).toEqual(['run-a', 'run-b']);
  });

  it('Abbrechen verwirft die Runde, ohne sie zu zählen', () => {
    const started = beginCaseRun(reached, approvedFixture, 'run-a', at(0));
    const discarded = discardCaseRun(started, approvedFixture.id);
    expect(discarded.caseSessions).toEqual({});
    expect(discarded.caseRuns).toEqual({});
    expect(discardCaseRun(discarded, approvedFixture.id)).toBe(discarded);
  });

  it('eine nicht mehr passende Runde wird nicht repariert, sondern als fehlend behandelt', () => {
    const progress = beginCaseRun(reached, approvedFixture, 'run-a', at(0));
    const changed = { ...approvedFixture, decisions: approvedFixture.decisions.slice(0, 1) };
    const tampered: AcademyProgress = {
      ...progress,
      caseSessions: {
        [approvedFixture.id]: { ...progress.caseSessions[approvedFixture.id], session: { ...startSession(approvedFixture), index: 1 } },
      },
    };
    expect(activeSession(tampered, changed)).toBeNull();
    expect(caseEntries(course, tampered, [changed])[0].state).toBe('available');
  });

  it('bewahrt höchstens die jüngsten Runden je Fall auf', () => {
    let progress = reached;
    for (let index = 0; index < MAX_CASE_RUNS + 3; index += 1) {
      progress = beginCaseRun(progress, approvedFixture, `run-${index}`, at(0));
      progress = updateCaseRun(progress, approvedFixture, playThrough(approvedFixture), `2026-09-29T11:${String(index).padStart(2, '0')}:00.000Z`);
    }
    const runs = progress.caseRuns[approvedFixture.id];
    expect(runs).toHaveLength(MAX_CASE_RUNS);
    expect(runs.at(-1)?.sessionId).toBe(`run-${MAX_CASE_RUNS + 2}`);
  });

  it('erzeugt eindeutige Runden-IDs', () => {
    const ids = new Set(Array.from({ length: 20 }, () => newSessionId()));
    expect(ids.size).toBe(20);
    for (const id of ids) expect(id).toMatch(/^run-[\w-]+$/);
  });
});

describe('Datenmodell v11: Trainerrunden', () => {
  it('migriert v10-Stände mit leeren Trainerfeldern und lässt alles andere unverändert', () => {
    const migrated = migrateProgress({
      version: 10,
      completedLessonIds: ['a'],
      answers: { q: 'o' },
      readingOptions: { size: 'large', spacing: 'standard' },
    })!;
    expect(migrated.version).toBe(11);
    expect(migrated.caseSessions).toEqual({});
    expect(migrated.caseRuns).toEqual({});
    expect(migrated.readingOptions).toEqual({ size: 'large', spacing: 'standard' });
    expect(migrated.preservedFields).toEqual({});
  });

  it('verwirft defekte Runden und Sitzungen einzeln', () => {
    const migrated = migrateProgress({
      version: 11,
      caseRuns: {
        ok: [
          { sessionId: 'b', completedAt: '2026-09-29T09:00:00.000Z', best: 1, defensible: 0, mistake: 1, missedCues: 2 },
          { sessionId: 'a', completedAt: '2026-09-29T08:00:00.000Z', best: 2, defensible: 0, mistake: 0, missedCues: 0 },
          { sessionId: 'a', completedAt: '2026-09-29T10:00:00.000Z', best: 0, defensible: 0, mistake: 0, missedCues: 0 },
          { sessionId: 'c', completedAt: '2026-09-29T08:00:00.000Z', best: -1, defensible: 0, mistake: 0, missedCues: 0 },
        ],
        leer: [],
        kaputt: 'x',
      },
      caseSessions: {
        ok: { sessionId: 's', startedAt: 'x', updatedAt: 'y', session: { caseId: 'ok' } },
        falscherFall: { sessionId: 's', session: { caseId: 'anderer' } },
        ohneId: { session: { caseId: 'ohneId' } },
      },
    })!;
    expect(Object.keys(migrated.caseRuns)).toEqual(['ok']);
    expect(migrated.caseRuns.ok.map((run) => run.sessionId)).toEqual(['a', 'b']);
    expect(Object.keys(migrated.caseSessions)).toEqual(['ok']);
  });
});

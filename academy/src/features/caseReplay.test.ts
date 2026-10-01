import { describe, expect, it } from 'vitest';
import { toCourseOutline } from '../../build/courseOutline';
import { barCases } from '../content/barCases';
import { priceActionTrendsCourse } from '../content/course';
import { advance, chooseDecision, startSession, submitDecision, toggleCue, type CaseSession } from './barTrainer';
import { buildReplay, completedRuns } from './caseReplay';
import { activeSession, beginCaseRun, setReasoningDraft, updateCaseRun } from './caseTraining';
import { formatRoute, parseRoute, resolveRoute } from './navigation';
import { completeLesson, createEmptyProgress, migrateProgress, type AcademyProgress } from './progress';

const course = toCourseOutline(priceActionTrendsCourse);
const barCase = barCases.find((item) => item.id === 'bar-case.chapter-01.range-high-test')!;
const [highTest, backInside] = barCase.decisions;

function unlocked(): AcademyProgress {
  const unitIndex = course.units.findIndex((unit) => unit.id === barCase.unitId);
  return course.units
    .slice(0, unitIndex + 1)
    .flatMap((unit) => unit.lessons)
    .filter((lesson) => lesson.status === 'published')
    .reduce((progress, lesson) => completeLesson(progress, lesson.id, 0, '2026-09-20T08:00:00.000Z'), createEmptyProgress());
}

/** Spielt eine Runde: am Hochtest „Long“ (falsch), danach „Short“ mit relevanten Hinweisen. */
function play(progress: AcademyProgress, sessionId: string, reason?: string): AcademyProgress {
  let next = beginCaseRun(progress, barCase, sessionId, '2026-09-29T10:00:00.000Z');
  if (reason) next = setReasoningDraft(next, barCase.id, { text: reason, confidence: 'unsure' });
  let session: CaseSession = activeSession(next, barCase)!;
  const pick = (decision: 'long' | 'short' | 'wait', cueId: string) => {
    session = chooseDecision(session, decision);
    session = toggleCue(barCase, session, cueId);
    session = submitDecision(barCase, session);
    next = updateCaseRun(next, barCase, session, '2026-09-29T10:01:00.000Z');
    session = advance(barCase, session);
    next = updateCaseRun(next, barCase, session, '2026-09-29T10:02:00.000Z');
  };
  pick('long', highTest.cues.find((cue) => !cue.relevant)!.id);
  pick('short', backInside.cues.find((cue) => cue.relevant)!.id);
  return next;
}

describe('Rückblick auf abgeschlossene Runden (F-25)', () => {
  it('mehrstufig: damals sichtbare Bars, eigene Wahl, Einordnung, Folgebars und damalige Begründung', () => {
    const progress = play(unlocked(), 'run-1', 'Neues Hoch = Stärke?');
    const replay = buildReplay(course, progress, barCase.id, 'run-1');
    expect(replay.ok).toBe(true);
    if (!replay.ok) return;
    expect(replay.steps).toHaveLength(2);
    const [first, second] = replay.steps;
    expect(first.barsBefore).toHaveLength(highTest.afterBar + 1);
    expect(first.barsAfter).toHaveLength(backInside.afterBar + 1);
    expect(second.barsAfter).toHaveLength(barCase.bars.length);
    expect(first.answer.decision).toBe('long');
    expect(first.evaluation.verdict).toBe(highTest.options.find((option) => option.decision === 'long')!.verdict);
    expect(first.evaluation.missed.map((cue) => cue.id)).toEqual(highTest.cues.filter((cue) => cue.relevant).map((cue) => cue.id));
    expect(first.reasoning).toEqual({ text: 'Neues Hoch = Stärke?', confidence: 'unsure' });
    expect(second.reasoning).toBeUndefined();
  });

  it('Erst- und Zweitversuch bleiben getrennt; jüngste Runde zuerst', () => {
    const progress = play(play(unlocked(), 'run-1', 'erster'), 'run-2', 'zweiter');
    expect(completedRuns(progress, barCase.id).map((item) => item.run.sessionId)).toEqual(['run-2', 'run-1']);
    const first = buildReplay(course, progress, barCase.id, 'run-1');
    const second = buildReplay(course, progress, barCase.id, 'run-2');
    expect(first.ok && first.steps[0].reasoning?.text).toBe('erster');
    expect(second.ok && second.steps[0].reasoning?.text).toBe('zweiter');
  });

  it('eine laufende oder abgebrochene Runde hat keinen Rückblick – auch nicht per Deep Link', () => {
    const running = beginCaseRun(unlocked(), barCase, 'run-open', '2026-09-29T10:00:00.000Z');
    expect(buildReplay(course, running, barCase.id, 'run-open')).toEqual({ ok: false, problem: 'unknown-run', barCase });
  });

  it('klare Gründe statt falscher Rekonstruktion', () => {
    const progress = play(unlocked(), 'run-1');
    expect(buildReplay(course, progress, 'bar-case.gibt-es-nicht', 'run-1')).toEqual({ ok: false, problem: 'unknown-case' });
    expect(buildReplay(course, { ...progress, completedLessonIds: [] }, barCase.id, 'run-1')).toMatchObject({ problem: 'locked' });

    // Alter Import (v11): Runde ohne Einzelantworten.
    const old = migrateProgress({
      version: 11,
      completedLessonIds: unlocked().completedLessonIds,
      caseRuns: { [barCase.id]: [{ sessionId: 'alt', completedAt: '2026-09-27T10:00:00.000Z', best: 1, defensible: 1, mistake: 0, missedCues: 0 }] },
    })!;
    expect(buildReplay(course, old, barCase.id, 'alt')).toMatchObject({ ok: false, problem: 'no-answers' });
    expect(completedRuns(old, barCase.id)[0].replayable).toBe(false);

    // Geänderter Fall: Antwort zu einem Punkt, den es nicht mehr gibt, oder unbekannter Hinweis.
    const run = progress.caseRuns[barCase.id][0];
    const extra = { ...progress, caseRuns: { [barCase.id]: [{ ...run, answers: { ...run.answers, weg: { decision: 'wait' as const, cueIds: [] } } }] } };
    expect(buildReplay(course, extra, barCase.id, 'run-1')).toMatchObject({ problem: 'changed' });
    const badCue = { ...progress, caseRuns: { [barCase.id]: [{ ...run, answers: { ...run.answers, [highTest.id]: { decision: 'wait' as const, cueIds: ['weg'] } } }] } };
    expect(buildReplay(course, badCue, barCase.id, 'run-1')).toMatchObject({ problem: 'changed' });
    const missing = { ...progress, caseRuns: { [barCase.id]: [{ ...run, answers: { [highTest.id]: run.answers![highTest.id] } }] } };
    expect(buildReplay(course, missing, barCase.id, 'run-1')).toMatchObject({ problem: 'changed' });
  });

  it('liest nur: der Stand bleibt unverändert', () => {
    const progress = play(unlocked(), 'run-1');
    const before = JSON.stringify(progress);
    buildReplay(course, progress, barCase.id, 'run-1');
    completedRuns(progress, barCase.id);
    expect(JSON.stringify(progress)).toBe(before);
  });

  it('Route #/train/<Fall>/review/<Runde>', () => {
    const route = { kind: 'replay' as const, caseId: barCase.id, sessionId: 'run-1' };
    expect(formatRoute(route)).toBe(`#/train/${barCase.id}/review/run-1`);
    expect(parseRoute(formatRoute(route))).toEqual(route);
    expect(parseRoute(`#/train/${barCase.id}/review/`)).toBeNull();
    expect(parseRoute(`#/train/${barCase.id}/anders/run-1`)).toBeNull();
    expect(resolveRoute(route, course, createEmptyProgress())).toEqual(route);
    expect(startSession(barCase).caseId).toBe(barCase.id);
  });
});

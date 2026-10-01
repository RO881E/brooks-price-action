import { describe, expect, it } from 'vitest';
import { toCourseOutline } from '../../build/courseOutline';
import { barCases } from '../content/barCases';
import { priceActionTrendsCourse } from '../content/course';
import { buildReplay } from './caseReplay';
import { completeLesson, createEmptyProgress, type AcademyProgress, type CaseRun } from './progress';

const course = toCourseOutline(priceActionTrendsCourse);
const barCase = barCases.find((item) => item.status === 'approved' && item.decisions.length >= 2)!;
const unitIndex = course.units.findIndex((unit) => unit.id === barCase.unitId);
const base = course.units
  .slice(0, unitIndex + 1)
  .flatMap((unit) => unit.lessons)
  .filter((lesson) => lesson.status === 'published')
  .reduce((progress, lesson) => completeLesson(progress, lesson.id, lesson.xp, '2026-09-20T08:00:00.000Z'), createEmptyProgress());

const [first, second] = barCase.decisions;
const answers = (a: string, b: string, cue1 = first.cues[0].id, cue2 = second.cues[0].id) => ({
  [first.id]: { decision: a as 'long', cueIds: [cue1] },
  [second.id]: { decision: b as 'long', cueIds: [cue2] },
});
const run = (sessionId: string, day: string, extra: Partial<CaseRun>): CaseRun => ({
  sessionId,
  completedAt: `${day}T10:00:00.000Z`,
  best: 1,
  defensible: 1,
  mistake: 0,
  missedCues: 0,
  ...extra,
});
const withRuns = (...runs: CaseRun[]): AcademyProgress => ({ ...base, caseRuns: { [barCase.id]: runs } });

describe('Rückblick: Vergleich mit der vorherigen Runde (P08)', () => {
  it('erste Runde: kein Vergleich', () => {
    const replay = buildReplay(course, withRuns(run('run-1', '2026-09-27', { answers: answers('long', 'wait') })), barCase.id, 'run-1');
    expect(replay.ok && replay.steps.every((step) => step.previous === undefined)).toBe(true);
  });

  it('zweite Runde: geänderte Wahl und Sicherheit als Fakten, damalige Begründung bleibt', () => {
    const progress = withRuns(
      run('run-1', '2026-09-27', {
        answers: answers('long', 'wait'),
        reasoning: { [first.id]: { text: 'Ausbruch kaufen.', confidence: 'sure' } },
      }),
      run('run-2', '2026-09-29', {
        answers: answers('wait', 'wait'),
        reasoning: { [first.id]: { text: 'Erst Anschluss abwarten.', confidence: 'unsure' } },
      }),
    );
    const replay = buildReplay(course, progress, barCase.id, 'run-2');
    expect(replay.ok).toBe(true);
    if (!replay.ok) return;
    const [one, two] = replay.steps;
    expect(one.previous).toMatchObject({ decisionChanged: true, confidenceChanged: true, answer: { decision: 'long' } });
    expect(one.previous?.reasoning?.text).toBe('Ausbruch kaufen.');
    expect(one.reasoning?.text).toBe('Erst Anschluss abwarten.');
    expect(two.previous).toMatchObject({ decisionChanged: false, confidenceChanged: false });
    // Die frühere Runde wird nie verändert oder überschrieben.
    expect(progress.caseRuns[barCase.id][0].reasoning?.[first.id]?.text).toBe('Ausbruch kaufen.');
  });

  it('ältere Runde ohne Einzelantworten: kein Vergleich statt Raten', () => {
    const replay = buildReplay(
      course,
      withRuns(run('run-1', '2026-09-27', {}), run('run-2', '2026-09-29', { answers: answers('long', 'wait') })),
      barCase.id,
      'run-2',
    );
    expect(replay.ok && replay.steps.every((step) => step.previous === undefined)).toBe(true);
  });

  it('Sicherheit nur dann verglichen, wenn sie in beiden Runden notiert ist', () => {
    const replay = buildReplay(
      course,
      withRuns(
        run('run-1', '2026-09-27', { answers: answers('long', 'wait') }),
        run('run-2', '2026-09-29', {
          answers: answers('long', 'wait'),
          reasoning: { [first.id]: { text: '', confidence: 'sure' } },
        }),
      ),
      barCase.id,
      'run-2',
    );
    expect(replay.ok && replay.steps[0].previous?.confidenceChanged).toBe(false);
  });
});

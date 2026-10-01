import { describe, expect, it } from 'vitest';
import type { BarCase } from '../content/barCaseTypes';
import { singleStepFixture, twoStepFixture } from '../test/fixtures/barCases';
import {
  advance,
  canSubmit,
  caseSummary,
  chooseDecision,
  currentDecision,
  evaluateAnswer,
  publicView,
  restoreSession,
  sessionProgress,
  startSession,
  submitDecision,
  toggleCue,
  visibleBarCount,
  visibleBars,
  type CaseSession,
} from './barTrainer';

const fixture = twoStepFixture;

/** Wählt, begründet und gibt ab. */
function answer(barCase: BarCase, session: CaseSession, decision: 'long' | 'short' | 'wait', cues: string[]) {
  let next = chooseDecision(session, decision);
  for (const cue of cues) next = toggleCue(barCase, next, cue);
  return submitDecision(barCase, next);
}

/** Alle Texte und Werte, die vor dem jeweiligen Reveal nicht sichtbar sein dürfen. */
function hiddenBefore(barCase: BarCase, decisionIndex: number): string[] {
  const decision = barCase.decisions[decisionIndex];
  const values = (bar: BarCase['bars'][number]) => [bar.open, bar.close, bar.high, bar.low].map(String);
  // Werte, die schon sichtbar sind (z. B. Eröffnung = letzter Schluss), verraten nichts.
  const visible = new Set(barCase.bars.slice(0, decision.afterBar + 1).flatMap(values));
  const futureBars = barCase.bars.slice(decision.afterBar + 1);
  return [
    decision.explanation,
    ...decision.options.map((option) => option.feedback),
    ...decision.cues.map((cue) => cue.explanation),
    ...futureBars.flatMap((bar) => [...values(bar).filter((value) => !visible.has(value)), bar.label ?? '']),
    '"relevant"',
    '"verdict"',
    '"best"',
    '"mistake"',
  ].filter((text) => text !== '' && text !== '""');
}

describe('Sichtbarkeit', () => {
  it('zeigt vor der ersten Entscheidung nur die Bars bis zum Entscheidungspunkt', () => {
    const session = startSession(fixture);
    expect(visibleBarCount(fixture, session)).toBe(4);
    expect(visibleBars(fixture, session)).toEqual(fixture.bars.slice(0, 4));
    expect(currentDecision(fixture, session)?.id).toBe('decision-1');
  });

  it('zeigt nach dem Reveal die Bars bis zum nächsten Punkt, am Ende alle', () => {
    let session = answer(fixture, startSession(fixture), 'wait', ['cue-a']);
    expect(session.revealed).toBe(true);
    expect(visibleBarCount(fixture, session)).toBe(6);
    session = advance(fixture, session);
    expect(visibleBarCount(fixture, session)).toBe(6);
    session = answer(fixture, session, 'long', ['cue-d']);
    expect(visibleBarCount(fixture, session)).toBe(8);
    session = advance(fixture, session);
    expect(session.finished).toBe(true);
    expect(visibleBarCount(fixture, session)).toBe(8);
    expect(currentDecision(fixture, session)).toBeUndefined();
  });
});

describe('Auswahl, Abgabe und Übergänge', () => {
  it('braucht eine Entscheidung und mindestens einen Hinweis', () => {
    let session = startSession(fixture);
    expect(canSubmit(session)).toBe(false);
    expect(submitDecision(fixture, session)).toBe(session);
    session = chooseDecision(session, 'wait');
    expect(canSubmit(session)).toBe(false);
    session = toggleCue(fixture, session, 'cue-c');
    expect(canSubmit(session)).toBe(true);
  });

  it('ordnet Hinweise stabil und ignoriert fremde Hinweise', () => {
    const base = chooseDecision(startSession(fixture), 'long');
    const ab = toggleCue(fixture, toggleCue(fixture, base, 'cue-a'), 'cue-c');
    const ba = toggleCue(fixture, toggleCue(fixture, base, 'cue-c'), 'cue-a');
    expect(ab.draft.cueIds).toEqual(['cue-a', 'cue-c']);
    expect(ba.draft).toEqual(ab.draft);
    expect(toggleCue(fixture, ab, 'cue-a').draft.cueIds).toEqual(['cue-c']);
    // Hinweis eines späteren Punkts oder unbekannte ID: keine Änderung.
    expect(toggleCue(fixture, ab, 'cue-d')).toBe(ab);
    expect(toggleCue(fixture, ab, 'gibt-es-nicht')).toBe(ab);
    // Unbekannte Entscheidung wird ignoriert.
    expect(chooseDecision(ab, 'hold' as 'long')).toBe(ab);
  });

  it('eine abgegebene Antwort lässt sich nicht mehr ändern', () => {
    const revealed = answer(fixture, startSession(fixture), 'short', ['cue-b']);
    expect(chooseDecision(revealed, 'wait')).toBe(revealed);
    expect(toggleCue(fixture, revealed, 'cue-a')).toBe(revealed);
    expect(submitDecision(fixture, revealed)).toBe(revealed);
    expect(revealed.answers['decision-1']).toEqual({ decision: 'short', cueIds: ['cue-b'] });
  });

  it('geht nur nach dem Reveal weiter und endet nach dem letzten Punkt', () => {
    const open = startSession(fixture);
    expect(advance(fixture, open)).toBe(open);
    let session = advance(fixture, answer(fixture, open, 'wait', ['cue-a']));
    expect(session).toMatchObject({ index: 1, revealed: false, finished: false, draft: { decision: null, cueIds: [] } });
    expect(sessionProgress(fixture, session)).toEqual({ position: 2, total: 2, answered: 1 });
    session = advance(fixture, answer(fixture, session, 'long', ['cue-d']));
    expect(session).toMatchObject({ finished: true, revealed: false });
    expect(sessionProgress(fixture, session)).toEqual({ position: 2, total: 2, answered: 2 });
    expect(advance(fixture, session)).toBe(session);
    expect(chooseDecision(session, 'short')).toBe(session);
  });
});

describe('Auswertung', () => {
  it('bewertet deterministisch nach Falldaten', () => {
    const decision = fixture.decisions[0];
    const result = evaluateAnswer(decision, { decision: 'wait', cueIds: ['cue-a', 'cue-b'] });
    expect(result.verdict).toBe('best');
    expect(result.recognized.map((cue) => cue.id)).toEqual(['cue-a']);
    expect(result.missed.map((cue) => cue.id)).toEqual(['cue-c']);
    expect(result.misleading.map((cue) => cue.id)).toEqual(['cue-b']);
    expect(evaluateAnswer(decision, { decision: 'wait', cueIds: ['cue-a', 'cue-b'] })).toEqual(result);
    expect(evaluateAnswer(decision, { decision: 'short', cueIds: ['cue-a'] }).verdict).toBe('mistake');
    expect(evaluateAnswer(decision, { decision: 'long', cueIds: ['cue-a'] }).verdict).toBe('defensible');
  });

  it('fasst richtig, vertretbar und falsch zusammen – mit Lernlinks zu übersehenen Hinweisen', () => {
    let session = answer(fixture, startSession(fixture), 'long', ['cue-c']);
    session = answer(fixture, advance(fixture, session), 'short', ['cue-e']);
    const summary = caseSummary(fixture, advance(fixture, session));
    expect(summary.counts).toEqual({ best: 0, defensible: 1, mistake: 1 });
    expect(summary.recognizedCues).toBe(1);
    expect(summary.missedCues).toBe(2);
    // Übersehen: cue-a (mit Lernlink) und cue-d; danach die Lektionen des Falls.
    expect(summary.lessonIds).toEqual([
      'price-action-trends.introduction.lesson-04',
      'price-action-trends.introduction.lesson-01',
    ]);
    expect(summary.finished).toBe(true);
  });

  it('„Abwarten“ kann die beste Wahl sein', () => {
    const session = answer(fixture, startSession(fixture), 'wait', ['cue-a', 'cue-c']);
    expect(caseSummary(fixture, session).counts.best).toBe(1);
  });
});

describe('Öffentliche Sicht: nichts wird vor dem Reveal verraten', () => {
  it('enthält vor jeder Entscheidung weder spätere Bars noch Lösungen', () => {
    let session = startSession(fixture);
    for (const [index] of fixture.decisions.entries()) {
      const view = publicView(fixture, session);
      expect(view.phase).toBe('decide');
      expect(view.bars).toEqual(fixture.bars.slice(0, fixture.decisions[index].afterBar + 1));
      expect(view.current?.options).toEqual(['long', 'short', 'wait']);
      expect(view.current?.cues.every((cue) => Object.keys(cue).sort().join() === 'id,label')).toBe(true);
      const json = JSON.stringify(view.current) + JSON.stringify(view.bars) + JSON.stringify(view.selection);
      for (const hidden of hiddenBefore(fixture, index)) expect(json).not.toContain(hidden);
      // Bereits aufgelöste Punkte dürfen vollständig sichtbar sein, der aktuelle nicht.
      expect(view.revealed.map((result) => result.decision.id)).not.toContain(fixture.decisions[index].id);
      session = advance(fixture, answer(fixture, session, 'wait', [fixture.decisions[index].cues[0].id]));
    }
  });

  it('zeigt nach dem Reveal die vollständige Einordnung des Punkts', () => {
    const view = publicView(fixture, answer(fixture, startSession(fixture), 'long', ['cue-a']));
    expect(view.phase).toBe('revealed');
    expect(view.current).toBeNull();
    expect(view.revealed).toHaveLength(1);
    expect(view.revealed[0].evaluation.option.feedback).toBe(fixture.decisions[0].options[0].feedback);
    expect(view.bars).toHaveLength(6);
  });

  it('verändert die Falldaten nicht', () => {
    const before = structuredClone(fixture);
    const view = publicView(fixture, startSession(fixture));
    view.bars[0].open = -1;
    expect(fixture).toEqual(before);
  });
});

describe('Fortsetzen nach Reload oder Abbruch', () => {
  function journey(): CaseSession[] {
    const states: CaseSession[] = [];
    let session = startSession(fixture);
    states.push(session);
    session = chooseDecision(session, 'wait');
    states.push(session);
    session = toggleCue(fixture, session, 'cue-c');
    states.push(session);
    session = submitDecision(fixture, session);
    states.push(session);
    session = advance(fixture, session);
    states.push(session);
    session = answer(fixture, session, 'long', ['cue-d']);
    states.push(session);
    session = advance(fixture, session);
    states.push(session);
    return states;
  }

  it('stellt jeden Zwischenstand exakt wieder her', () => {
    for (const state of journey()) {
      expect(restoreSession(fixture, JSON.parse(JSON.stringify(state)))).toEqual(state);
    }
  });

  it('verwirft Stände, die nicht (mehr) zum Fall passen', () => {
    const [start, , , revealed, second] = journey();
    const broken: Array<[string, unknown, BarCase]> = [
      ['anderer Fall', start, singleStepFixture],
      ['kein Objekt', 'kaputt', fixture],
      ['Index außerhalb', { ...second, index: 5 }, fixture],
      ['negativer Index', { ...start, index: -1 }, fixture],
      ['fehlende Antwort', { ...second, answers: {} }, fixture],
      ['Antwort zu viel', { ...start, answers: second.answers }, fixture],
      ['unbekannte Entscheidung', { ...second, answers: { 'decision-1': { decision: 'hold', cueIds: ['cue-a'] } } }, fixture],
      ['unbekannter Hinweis', { ...second, answers: { 'decision-1': { decision: 'wait', cueIds: ['cue-z'] } } }, fixture],
      ['Antwort ohne Hinweis', { ...second, answers: { 'decision-1': { decision: 'wait', cueIds: [] } } }, fixture],
      ['Entwurf trotz Reveal', { ...revealed, draft: { decision: 'long', cueIds: [] } }, fixture],
      ['Entwurf mit fremdem Hinweis', { ...start, draft: { decision: 'long', cueIds: ['cue-d'] } }, fixture],
      ['beendet und aufgelöst zugleich', { ...second, revealed: true, finished: true }, fixture],
      ['fehlende Felder', { caseId: fixture.id, index: 0 }, fixture],
    ];
    for (const [name, stored, barCase] of broken) {
      expect(restoreSession(barCase, stored), name).toBeNull();
    }
  });

  it('ordnet wiederhergestellte Hinweise wie im Fall', () => {
    const stored = { ...startSession(fixture), draft: { decision: 'long', cueIds: ['cue-c', 'cue-a'] } };
    expect(restoreSession(fixture, stored)?.draft.cueIds).toEqual(['cue-a', 'cue-c']);
  });

  it('ein Abbruch ist einfach ein Neustart', () => {
    expect(startSession(fixture)).toEqual({
      caseId: fixture.id,
      index: 0,
      draft: { decision: null, cueIds: [] },
      answers: {},
      revealed: false,
      finished: false,
    });
  });
});

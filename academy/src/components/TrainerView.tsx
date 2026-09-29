import { useEffect, useId, useRef, useState } from 'react';
import { TRADE_DECISION_LABELS, type BarCase, type OptionVerdict } from '../content/barCaseTypes';
import type { CourseOutline, LessonOutline } from '../content/types';
import {
  advance,
  canSubmit,
  caseSummary,
  chooseDecision,
  publicView,
  submitDecision,
  toggleCue,
  visibleBarCount,
  type CaseSession,
  type DecisionResult,
} from '../features/barTrainer';
import { activeSession, lastCaseRun } from '../features/caseTraining';
import type { AcademyProgress } from '../features/progress';
import { CaseChart } from './CaseChart';

export const VERDICT_LABELS: Record<OptionVerdict, string> = {
  best: 'Beste Wahl',
  defensible: 'Vertretbar',
  mistake: 'Nicht tragfähig',
};

interface TrainerViewProps {
  course: CourseOutline;
  barCase: BarCase;
  progress: AcademyProgress;
  /** Neue Runde beginnen (ersetzt eine laufende). */
  onBegin: () => void;
  /** Neuen Zustand der laufenden Runde speichern. */
  onUpdate: (session: CaseSession) => void;
  /** Laufende Runde verwerfen. */
  onDiscard: () => void;
  onOpenLesson: (lesson: LessonOutline) => void;
  onBack: () => void;
}

function lessonById(course: CourseOutline, lessonId: string): LessonOutline | undefined {
  for (const unit of course.units) {
    const lesson = unit.lessons.find((item) => item.id === lessonId);
    if (lesson) return lesson;
  }
  return undefined;
}

/**
 * Bar-für-Bar-Trainer (F-15). Gerendert wird ausschließlich die öffentliche
 * Sicht der Engine (`publicView`): vor der Abgabe keine späteren Bars, keine
 * Einordnung, keine Rückmeldungen und keine Markierung relevanter Hinweise –
 * weder sichtbar noch in ARIA-Texten. Jede Aktion wird sofort gespeichert; nach
 * Reload geht es exakt an derselben Stelle weiter.
 */
export function TrainerView({ course, barCase, progress, onBegin, onUpdate, onDiscard, onOpenLesson, onBack }: TrainerViewProps) {
  const stored = progress.caseSessions[barCase.id];
  const session = activeSession(progress, barCase);
  // Nach dem Abschluss ist die Runde gespeichert und nicht mehr „laufend“ –
  // die Auswertung bleibt bis zum Verlassen oder einer neuen Runde stehen.
  const [finished, setFinished] = useState<CaseSession | null>(null);
  const [confirm, setConfirm] = useState<'restart' | 'discard' | null>(null);
  // „Fortgesetzt“ nur, wenn beim Öffnen schon eine begonnene Runde vorlag.
  const [resumed, setResumed] = useState(() =>
    Boolean(
      session &&
        !session.finished &&
        (Object.keys(session.answers).length > 0 || session.draft.decision !== null || session.draft.cueIds.length > 0),
    ),
  );
  const heading = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    heading.current?.focus({ preventScroll: true });
  }, []);

  const update = (next: CaseSession) => {
    if (next === session) return;
    if (next.finished) setFinished(next);
    onUpdate(next);
  };

  const begin = () => {
    setFinished(null);
    setConfirm(null);
    setResumed(false);
    onBegin();
  };

  const unit = course.units.find((item) => item.id === barCase.unitId);
  const shown = session ?? finished;

  return (
    <div className="page-shell trainer-page">
      <header className="page-heading trainer-heading">
        <div>
          <p className="eyebrow">Chart trainieren · {unit?.label ?? barCase.unitId}</p>
          <h1 ref={heading} tabIndex={-1}>
            {barCase.title}
          </h1>
          <p>{barCase.setup}</p>
          {barCase.timeframe ? <p className="trainer-timeframe">{barCase.timeframe}</p> : null}
        </div>
        <button type="button" className="secondary-button" onClick={onBack}>
          Zur Fallauswahl
        </button>
      </header>

      <p className="trainer-disclaimer">
        Lernfall mit frei gewählten, schematischen Werten – keine echten Kurse, kein Handelssignal, kein
        Gewinn oder Verlust.
      </p>

      {shown ? (
        <RunView
          key={stored?.sessionId ?? 'finished'}
          course={course}
          barCase={barCase}
          session={shown}
          resumed={resumed && Boolean(session)}
          onUpdate={update}
          onOpenLesson={onOpenLesson}
          onRestart={() => (session ? setConfirm('restart') : begin())}
          onDiscard={() => setConfirm('discard')}
          onBack={onBack}
        />
      ) : (
        <StartPanel
          barCase={barCase}
          progress={progress}
          broken={Boolean(stored && !session)}
          onBegin={begin}
        />
      )}

      {confirm && session ? (
        <div className="trainer-confirm" role="alertdialog" aria-labelledby="trainer-confirm-title" aria-modal="false">
          <h2 id="trainer-confirm-title">
            {confirm === 'restart' ? 'Runde von vorn beginnen?' : 'Runde abbrechen?'}
          </h2>
          <p>
            Deine bisherigen Entscheidungen in dieser Runde werden verworfen und nicht gezählt.
          </p>
          <div className="trainer-actions">
            <button
              type="button"
              className="primary-button"
              autoFocus
              onClick={() => {
                if (confirm === 'restart') begin();
                else {
                  setConfirm(null);
                  onDiscard();
                }
              }}
            >
              {confirm === 'restart' ? 'Ja, von vorn beginnen' : 'Ja, Runde abbrechen'}
            </button>
            <button type="button" className="secondary-button" onClick={() => setConfirm(null)}>
              Weiter trainieren
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function StartPanel({
  barCase,
  progress,
  broken,
  onBegin,
}: {
  barCase: BarCase;
  progress: AcademyProgress;
  broken: boolean;
  onBegin: () => void;
}) {
  const last = lastCaseRun(progress, barCase.id);
  const runs = progress.caseRuns[barCase.id]?.length ?? 0;
  return (
    <section className="trainer-panel" aria-labelledby="trainer-start-title">
      <h2 id="trainer-start-title">{runs ? 'Neue Runde' : 'So funktioniert es'}</h2>
      {broken ? (
        <p className="trainer-notice" role="status">
          Deine gespeicherte Runde passt nicht mehr zu diesem Fall und kann nicht fortgesetzt werden.
          Beginne sie bitte neu.
        </p>
      ) : null}
      <ol className="trainer-steps">
        <li>Du siehst nur die Bars bis zur Entscheidung.</li>
        <li>Wähle Long, Short oder Abwarten und markiere mindestens einen Hinweis als Begründung.</li>
        <li>Erst nach der Abgabe folgen Einordnung, Erklärung und die nächsten Bars.</li>
      </ol>
      <p>
        {barCase.decisions.length === 1
          ? 'Dieser Fall hat eine Entscheidung.'
          : `Dieser Fall hat ${barCase.decisions.length} Entscheidungen.`}{' '}
        Runden vergeben keine XP und ändern deinen Lektionsfortschritt nicht.
      </p>
      {last ? (
        <p className="trainer-last">
          Bisher {runs === 1 ? 'eine abgeschlossene Runde' : `${runs} abgeschlossene Runden`}. Zuletzt:{' '}
          {countsText(last)}.
        </p>
      ) : null}
      <button type="button" className="primary-button" onClick={onBegin}>
        {runs ? 'Neue Runde starten' : 'Runde starten'}
      </button>
    </section>
  );
}

function countsText(counts: Record<OptionVerdict, number>): string {
  return (['best', 'defensible', 'mistake'] as const)
    .map((verdict) => `${counts[verdict]} × ${VERDICT_LABELS[verdict].toLowerCase()}`)
    .join(', ');
}

interface RunProps {
  course: CourseOutline;
  barCase: BarCase;
  session: CaseSession;
  resumed: boolean;
  onUpdate: (session: CaseSession) => void;
  onOpenLesson: (lesson: LessonOutline) => void;
  onRestart: () => void;
  onDiscard: () => void;
  onBack: () => void;
}

function RunView({ course, barCase, session, resumed, onUpdate, onOpenLesson, onRestart, onDiscard, onBack }: RunProps) {
  const view = publicView(barCase, session);
  const focusTarget = useRef<HTMLHeadingElement>(null);
  const phaseKey = `${view.phase}-${view.progress.position}`;
  const firstRender = useRef(true);

  // Nach Abgabe, Weiter und Abschluss: Fokus an die neue Überschrift.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    focusTarget.current?.focus();
  }, [phaseKey]);

  // Beim Reveal kommen die Bars bis zum nächsten Punkt hinzu – sie werden hervorgehoben.
  const decidedBars = session.revealed ? barCase.decisions[session.index].afterBar + 1 : undefined;
  const current = view.revealed.find((result) => result.decision.id === barCase.decisions[session.index]?.id);

  return (
    <>
      <div className="trainer-status">
        <span>
          {view.phase === 'finished'
            ? 'Fall abgeschlossen'
            : `Entscheidung ${view.progress.position} von ${view.progress.total}`}
        </span>
        {resumed && view.phase !== 'finished' ? <span className="trainer-resumed">Fortgesetzt</span> : null}
        {view.phase !== 'finished' ? (
          <span className="trainer-run-actions">
            <button type="button" className="link-button" onClick={onRestart}>
              Von vorn beginnen
            </button>
            <button type="button" className="link-button" onClick={onDiscard}>
              Runde abbrechen
            </button>
          </span>
        ) : null}
      </div>

      <CaseChart
        bars={view.bars}
        deciding={view.phase === 'decide'}
        newFrom={view.phase === 'revealed' ? decidedBars : undefined}
      />
      <p className="visually-hidden" role="status">
        {view.phase === 'decide'
          ? `Entscheidung ${view.progress.position} von ${view.progress.total}. ${view.bars.length} Bars sichtbar.`
          : view.phase === 'revealed'
            ? `Aufgelöst. Jetzt ${view.bars.length} Bars sichtbar.`
            : 'Fall abgeschlossen. Auswertung folgt.'}
      </p>

      {view.phase !== 'finished' && view.progress.position > 1 ? (
        <details className="trainer-history">
          <summary>Bisherige Entscheidungen</summary>
          <ul>
            {view.revealed
              .filter((result) => result !== current)
              .map((result, index) => (
                <li key={result.decision.id}>
                  {index + 1}. {TRADE_DECISION_LABELS[result.answer.decision]} –{' '}
                  {VERDICT_LABELS[result.evaluation.verdict]}
                </li>
              ))}
          </ul>
        </details>
      ) : null}

      {view.phase === 'decide' && view.current ? (
        <DecisionForm
          key={view.current.id}
          headingRef={focusTarget}
          view={view}
          onChoose={(decision) => onUpdate(chooseDecision(session, decision))}
          onToggleCue={(cueId) => onUpdate(toggleCue(barCase, session, cueId))}
          onSubmit={() => onUpdate(submitDecision(barCase, session))}
          canSubmit={canSubmit(session)}
        />
      ) : null}

      {view.phase === 'revealed' && current ? (
        <Reveal
          headingRef={focusTarget}
          course={course}
          result={current}
          last={view.progress.position === view.progress.total}
          addedBars={view.bars.length - (decidedBars ?? view.bars.length)}
          onOpenLesson={onOpenLesson}
          onNext={() => onUpdate(advance(barCase, session))}
        />
      ) : null}

      {view.phase === 'finished' ? (
        <Summary
          headingRef={focusTarget}
          course={course}
          barCase={barCase}
          session={session}
          onOpenLesson={onOpenLesson}
          onRestart={onRestart}
          onBack={onBack}
        />
      ) : null}
    </>
  );
}

function DecisionForm({
  headingRef,
  view,
  onChoose,
  onToggleCue,
  onSubmit,
  canSubmit: ready,
}: {
  headingRef: React.RefObject<HTMLHeadingElement | null>;
  view: ReturnType<typeof publicView>;
  onChoose: (decision: 'long' | 'short' | 'wait') => void;
  onToggleCue: (cueId: string) => void;
  onSubmit: () => void;
  canSubmit: boolean;
}) {
  const ids = useId();
  const current = view.current!;
  return (
    <form
      className="trainer-panel trainer-decision"
      aria-labelledby={`${ids}-title`}
      onSubmit={(event) => {
        event.preventDefault();
        if (ready) onSubmit();
      }}
    >
      <h2 id={`${ids}-title`} ref={headingRef} tabIndex={-1}>
        Entscheidung {view.progress.position} von {view.progress.total}
      </h2>
      <p className="trainer-prompt">{current.prompt}</p>

      <fieldset>
        <legend>Deine Entscheidung</legend>
        <div className="trainer-choices">
          {current.options.map((decision) => (
            <label key={decision}>
              <input
                type="radio"
                name={`${ids}-decision`}
                value={decision}
                checked={view.selection.decision === decision}
                onChange={() => onChoose(decision)}
              />
              <span>{TRADE_DECISION_LABELS[decision]}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend>Begründung: Welche Hinweise sprechen für deine Wahl? (mindestens einer)</legend>
        <div className="trainer-cues">
          {current.cues.map((cue) => (
            <label key={cue.id}>
              <input
                type="checkbox"
                checked={view.selection.cueIds.includes(cue.id)}
                onChange={() => onToggleCue(cue.id)}
              />
              <span>{cue.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="trainer-actions">
        <button type="submit" className="primary-button" disabled={!ready} aria-describedby={`${ids}-hint`}>
          Entscheidung abgeben
        </button>
        <p id={`${ids}-hint`} className="trainer-hint">
          {ready
            ? 'Nach der Abgabe lässt sich die Wahl nicht mehr ändern.'
            : 'Wähle eine Entscheidung und mindestens einen Hinweis.'}
        </p>
      </div>
    </form>
  );
}

function LessonLink({
  course,
  lessonId,
  onOpenLesson,
}: {
  course: CourseOutline;
  lessonId: string;
  onOpenLesson: (lesson: LessonOutline) => void;
}) {
  const lesson = lessonById(course, lessonId);
  if (!lesson) return null;
  return (
    <button type="button" className="link-button" onClick={() => onOpenLesson(lesson)}>
      Lektion: {lesson.title}
    </button>
  );
}

function cueStatus(result: DecisionResult, cueId: string): { label: string; tone: string } {
  const chosen = result.answer.cueIds.includes(cueId);
  const cue = result.decision.cues.find((item) => item.id === cueId)!;
  if (cue.relevant) return chosen ? { label: 'Erkannt', tone: 'good' } : { label: 'Übersehen', tone: 'missed' };
  return chosen ? { label: 'Markiert, trägt hier nicht', tone: 'misleading' } : { label: 'Trägt hier nicht', tone: 'neutral' };
}

function Reveal({
  headingRef,
  course,
  result,
  last,
  addedBars,
  onOpenLesson,
  onNext,
}: {
  headingRef: React.RefObject<HTMLHeadingElement | null>;
  course: CourseOutline;
  result: DecisionResult;
  last: boolean;
  addedBars: number;
  onOpenLesson: (lesson: LessonOutline) => void;
  onNext: () => void;
}) {
  const { decision, answer, evaluation } = result;
  return (
    <section className="trainer-panel trainer-reveal" aria-labelledby={`reveal-${decision.id}`}>
      <h2 id={`reveal-${decision.id}`} ref={headingRef} tabIndex={-1}>
        Auflösung: {TRADE_DECISION_LABELS[answer.decision]} – {VERDICT_LABELS[evaluation.verdict]}
      </h2>
      <p className="trainer-explanation">{decision.explanation}</p>
      {addedBars > 0 ? (
        <p className="trainer-added">
          {addedBars === 1 ? 'Ein weiterer Bar ist jetzt sichtbar.' : `${addedBars} weitere Bars sind jetzt sichtbar.`}
        </p>
      ) : null}

      <h3>Alle drei Möglichkeiten</h3>
      <ul className="trainer-options">
        {decision.options.map((option) => (
          <li key={option.decision} className={`verdict-${option.verdict} ${option.decision === answer.decision ? 'chosen' : ''}`}>
            <strong>
              {TRADE_DECISION_LABELS[option.decision]} · {VERDICT_LABELS[option.verdict]}
              {option.decision === answer.decision ? ' (deine Wahl)' : ''}
            </strong>
            <p>{option.feedback}</p>
          </li>
        ))}
      </ul>

      <h3>Deine Begründung</h3>
      <ul className="trainer-cue-results">
        {decision.cues.map((cue) => {
          const status = cueStatus(result, cue.id);
          return (
            <li key={cue.id} className={`cue-${status.tone}`}>
              <strong>
                {cue.label} · {status.label}
              </strong>
              <p>{cue.explanation}</p>
              {cue.lessonId ? <LessonLink course={course} lessonId={cue.lessonId} onOpenLesson={onOpenLesson} /> : null}
            </li>
          );
        })}
      </ul>

      <div className="trainer-actions">
        <button type="button" className="primary-button" onClick={onNext}>
          {last ? 'Auswertung anzeigen' : 'Weiter zur nächsten Entscheidung'}
        </button>
      </div>
    </section>
  );
}

function Summary({
  headingRef,
  course,
  barCase,
  session,
  onOpenLesson,
  onRestart,
  onBack,
}: {
  headingRef: React.RefObject<HTMLHeadingElement | null>;
  course: CourseOutline;
  barCase: BarCase;
  session: CaseSession;
  onOpenLesson: (lesson: LessonOutline) => void;
  onRestart: () => void;
  onBack: () => void;
}) {
  const summary = caseSummary(barCase, session);
  const missed = summary.results.flatMap((result) =>
    result.evaluation.missed.map((cue) => ({ decisionId: result.decision.id, cue })),
  );
  const shownBars = visibleBarCount(barCase, session);
  return (
    <section className="trainer-panel trainer-summary" aria-labelledby="trainer-summary-title">
      <h2 id="trainer-summary-title" ref={headingRef} tabIndex={-1}>
        Auswertung
      </h2>
      <p>
        {summary.results.length === 1 ? 'Eine Entscheidung' : `${summary.results.length} Entscheidungen`} über{' '}
        {shownBars} Bars: {countsText(summary.counts)}. Erkannte Hinweise: {summary.recognizedCues}, übersehen:{' '}
        {summary.missedCues}.
      </p>
      <ol className="trainer-summary-list">
        {summary.results.map((result) => (
          <li key={result.decision.id}>
            <strong>
              {TRADE_DECISION_LABELS[result.answer.decision]} – {VERDICT_LABELS[result.evaluation.verdict]}
            </strong>
            <p>{result.decision.prompt}</p>
          </li>
        ))}
      </ol>

      <h3>Übersehene Hinweise</h3>
      {missed.length ? (
        <ul className="trainer-cue-results">
          {missed.map(({ decisionId, cue }) => (
            <li key={`${decisionId}-${cue.id}`} className="cue-missed">
              <strong>{cue.label}</strong>
              <p>{cue.explanation}</p>
              {cue.lessonId ? <LessonLink course={course} lessonId={cue.lessonId} onOpenLesson={onOpenLesson} /> : null}
            </li>
          ))}
        </ul>
      ) : (
        <p>Du hast alle relevanten Hinweise markiert.</p>
      )}

      <h3>Zum Nacharbeiten</h3>
      <ul className="trainer-lessons">
        {summary.lessonIds.map((lessonId) => (
          <li key={lessonId}>
            <LessonLink course={course} lessonId={lessonId} onOpenLesson={onOpenLesson} />
          </li>
        ))}
      </ul>

      <div className="trainer-actions">
        <button type="button" className="primary-button" onClick={onRestart}>
          Neue Runde
        </button>
        <button type="button" className="secondary-button" onClick={onBack}>
          Zur Fallauswahl
        </button>
      </div>
    </section>
  );
}

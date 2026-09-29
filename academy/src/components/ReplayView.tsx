import { useEffect, useId, useRef, useState } from 'react';
import { TRADE_DECISION_LABELS } from '../content/barCaseTypes';
import type { CourseOutline, LessonOutline } from '../content/types';
import { buildReplay, type ReplayProblem, type ReplayStep } from '../features/caseReplay';
import type { AcademyProgress } from '../features/progress';
import { CaseChart } from './CaseChart';
import { CaseTable } from './CaseTable';
import { CONFIDENCE_LABELS, OwnReasoning, VERDICT_LABELS } from './TrainerView';

const PROBLEM_TEXT: Record<ReplayProblem, string> = {
  'unknown-case': 'Diesen Trainingsfall gibt es nicht (mehr). Ein Rückblick ist deshalb nicht möglich.',
  locked: 'Dieser Fall ist derzeit gesperrt. Er wird frei, sobald du die zugehörigen Lektionen erreicht hast.',
  'unknown-run':
    'Zu dieser Adresse gibt es keine abgeschlossene Runde. Einen Rückblick gibt es erst, wenn eine Runde vollständig abgeschlossen ist.',
  'no-answers':
    'Diese Runde stammt aus einer älteren Version ohne gespeicherte Einzelantworten. Sie lässt sich nicht Schritt für Schritt nachvollziehen.',
  changed:
    'Der Fall wurde seit dieser Runde geändert. Damit keine falschen Bars oder Antworten erscheinen, wird der Rückblick nicht angezeigt.',
};

function dateLabel(iso: string): string {
  const date = new Date(iso);
  return Number.isNaN(date.getTime())
    ? iso
    : date.toLocaleString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

interface Props {
  course: CourseOutline;
  progress: AcademyProgress;
  caseId: string;
  sessionId: string;
  onRetrain: (caseId: string) => void;
  onOpenLesson: (lesson: LessonOutline) => void;
  onBack: () => void;
}

/**
 * Rückblick auf eine abgeschlossene Trainerrunde (F-25): je Entscheidung
 * zuerst die damals sichtbaren Bars und die eigene Wahl samt damaliger
 * Begründung, danach Einordnung, Erklärung und Folgebars. Liest nur – kein
 * neuer Versuch, keine XP, kein Lerntag.
 */
export function ReplayView({ course, progress, caseId, sessionId, onRetrain, onOpenLesson, onBack }: Props) {
  const replay = buildReplay(course, progress, caseId, sessionId);
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    heading.current?.focus({ preventScroll: true });
  }, []);

  if (!replay.ok) {
    return (
      <div className="page-shell trainer-page" data-mode="train">
        <header className="page-heading">
          <p className="eyebrow">Rückblick</p>
          <h1 ref={heading} tabIndex={-1}>
            {replay.barCase?.title ?? 'Rückblick nicht verfügbar'}
          </h1>
        </header>
        <div className="trainer-panel">
          <p className="trainer-notice" role="status">
            {PROBLEM_TEXT[replay.problem]}
          </p>
          <div className="trainer-actions">
            <button type="button" className="secondary-button" onClick={onBack}>
              Zur Fallauswahl
            </button>
          </div>
        </div>
      </div>
    );
  }

  const { barCase, run, steps } = replay;
  const unit = course.units.find((item) => item.id === barCase.unitId);
  return (
    <div className="page-shell trainer-page" data-mode="train">
      <header className="page-heading trainer-heading">
        <div>
          <p className="eyebrow">Rückblick · {unit?.label ?? barCase.unitId}</p>
          <h1 ref={heading} tabIndex={-1}>
            {barCase.title}
          </h1>
          <p>
            Abgeschlossene Runde vom {dateLabel(run.completedAt)}. Du siehst, was damals sichtbar war und wie du
            entschieden hast. Der Rückblick speichert nichts.
          </p>
        </div>
        <div className="trainer-actions">
          <button type="button" className="primary-button" onClick={() => onRetrain(barCase.id)}>
            Erneut trainieren
          </button>
          <button type="button" className="secondary-button" onClick={onBack}>
            Zur Fallauswahl
          </button>
        </div>
      </header>
      <ReplaySteps key={run.sessionId} course={course} steps={steps} onOpenLesson={onOpenLesson} />
    </div>
  );
}

/** Vergleich mit der vorherigen Runde: nur Fakten (Wahl, Sicherheit, eigene Worte) – keine Bewertung. */
function PreviousRound({ previous, current }: { previous: NonNullable<ReplayStep['previous']>; current: ReplayStep }) {
  const ids = useId();
  const before = TRADE_DECISION_LABELS[previous.answer.decision];
  const now = TRADE_DECISION_LABELS[current.answer.decision];
  return (
    <section className="previous-round" aria-labelledby={`${ids}-title`}>
      <h3 id={`${ids}-title`}>Vorherige Runde vom {dateLabel(previous.completedAt)}</h3>
      <p className="previous-summary">
        {previous.decisionChanged
          ? `Deine Wahl hat sich geändert: von ${before} zu ${now}.`
          : `Deine Wahl war dieselbe: ${now}.`}
        {previous.confidenceChanged && previous.reasoning?.confidence && current.reasoning?.confidence
          ? ` Sicherheit: von „${CONFIDENCE_LABELS[previous.reasoning.confidence]}“ zu „${CONFIDENCE_LABELS[current.reasoning.confidence]}“.`
          : ''}
      </p>
      <p className="previous-choice">Damals gewählt: {before}</p>
      <OwnReasoning reasoning={previous.reasoning} />
    </section>
  );
}

function ReplaySteps({
  course,
  steps,
  onOpenLesson,
}: {
  course: CourseOutline;
  steps: ReplayStep[];
  onOpenLesson: (lesson: LessonOutline) => void;
}) {
  const ids = useId();
  const [current, setCurrent] = useState(0);
  const [shown, setShown] = useState<Set<number>>(() => new Set());
  const [display, setDisplay] = useState<'chart' | 'table'>('chart');
  const stepHeading = useRef<HTMLHeadingElement>(null);
  const resolution = useRef<HTMLHeadingElement>(null);
  const moved = useRef(false);
  const step = steps[current];
  const revealed = shown.has(current);

  useEffect(() => {
    if (moved.current) stepHeading.current?.focus();
  }, [current]);

  const go = (index: number) => {
    moved.current = true;
    setCurrent(index);
  };

  const reveal = () => {
    setShown((previous) => new Set(previous).add(current));
    window.requestAnimationFrame(() => resolution.current?.focus());
  };

  const bars = (list: ReplayStep['barsBefore'], newFrom?: number, text?: string) =>
    display === 'chart' ? (
      <CaseChart bars={list} deciding={newFrom === undefined} newFrom={newFrom} />
    ) : (
      <CaseTable bars={list} newFrom={newFrom} decisionText={text ?? ''} />
    );

  return (
    <div className="replay">
      <nav className="replay-index" aria-label="Schritte der Runde">
        <ol>
          {steps.map((item) => (
            <li key={item.decision.id}>
              <button
                type="button"
                aria-current={item.index === current ? 'step' : undefined}
                onClick={() => go(item.index)}
              >
                Entscheidung {item.index + 1}: {TRADE_DECISION_LABELS[item.answer.decision]}
              </button>
            </li>
          ))}
        </ol>
      </nav>

      <section className="trainer-panel" aria-labelledby={`${ids}-step`}>
        <h2 id={`${ids}-step`} ref={stepHeading} tabIndex={-1}>
          Entscheidung {current + 1} von {steps.length}
        </h2>
        <div className="bar-display-toggle" role="group" aria-label="Darstellung der Bars">
          <button type="button" aria-pressed={display === 'chart'} onClick={() => setDisplay('chart')}>
            Chart
          </button>
          <button type="button" aria-pressed={display === 'table'} onClick={() => setDisplay('table')}>
            Tabelle
          </button>
        </div>
        <h3>Damals sichtbar</h3>
        {bars(step.barsBefore, undefined, `Entscheidungspunkt ${current + 1}: nach Bar ${step.barsBefore.length}.`)}
        <p className="trainer-prompt">{step.decision.prompt}</p>
        <ul className="mistake-facts">
          <li>Deine Wahl: {TRADE_DECISION_LABELS[step.answer.decision]}</li>
          <li>
            Deine Hinweise:{' '}
            {step.answer.cueIds.length
              ? step.decision.cues
                  .filter((cue) => step.answer.cueIds.includes(cue.id))
                  .map((cue) => cue.label)
                  .join('; ')
              : 'keine'}
          </li>
        </ul>
        <h3>Deine damalige Einschätzung</h3>
        <OwnReasoning reasoning={step.reasoning} />
        {step.previous ? <PreviousRound previous={step.previous} current={step} /> : null}

        {revealed ? (
          <>
            <h3 ref={resolution} tabIndex={-1}>
              Auflösung: {TRADE_DECISION_LABELS[step.answer.decision]} – {VERDICT_LABELS[step.evaluation.verdict]}
            </h3>
            <p className="trainer-explanation">{step.decision.explanation}</p>
            <ul className="trainer-options">
              {step.decision.options.map((option) => (
                <li
                  key={option.decision}
                  className={`verdict-${option.verdict} ${option.decision === step.answer.decision ? 'chosen' : ''}`}
                >
                  <strong>
                    {TRADE_DECISION_LABELS[option.decision]} · {VERDICT_LABELS[option.verdict]}
                    {option.decision === step.answer.decision ? ' (deine Wahl)' : ''}
                  </strong>
                  <p>{option.feedback}</p>
                </li>
              ))}
            </ul>
            {step.evaluation.missed.length ? (
              <>
                <h3>Damals übersehen</h3>
                <ul className="trainer-cue-results">
                  {step.evaluation.missed.map((cue) => {
                    const lesson = cue.lessonId
                      ? course.units.flatMap((unit) => unit.lessons).find((item) => item.id === cue.lessonId)
                      : undefined;
                    return (
                      <li key={cue.id} className="cue-missed">
                        <strong>{cue.label}</strong>
                        <p>{cue.explanation}</p>
                        {lesson ? (
                          <button type="button" className="link-button" onClick={() => onOpenLesson(lesson)}>
                            Lektion: {lesson.title}
                          </button>
                        ) : null}
                      </li>
                    );
                  })}
                </ul>
              </>
            ) : null}
            <h3>Danach</h3>
            {bars(
              step.barsAfter,
              step.barsBefore.length,
              `Nach der Entscheidung: Bar ${step.barsBefore.length + 1} bis ${step.barsAfter.length}.`,
            )}
          </>
        ) : (
          <div className="trainer-actions">
            <button type="button" className="primary-button" onClick={reveal}>
              Auflösung zeigen
            </button>
          </div>
        )}

        <div className="trainer-actions replay-nav">
          <button type="button" className="secondary-button" disabled={current === 0} onClick={() => go(current - 1)}>
            Vorheriger Schritt
          </button>
          <button
            type="button"
            className="secondary-button"
            disabled={current === steps.length - 1}
            onClick={() => go(current + 1)}
          >
            Nächster Schritt
          </button>
        </div>
      </section>
    </div>
  );
}

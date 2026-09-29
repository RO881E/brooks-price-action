import { useEffect, useId, useMemo, useRef } from 'react';
import { TRADE_DECISION_LABELS, type OptionVerdict } from '../content/barCaseTypes';
import type { CourseOutline, LessonOutline } from '../content/types';
import { canSubmit, chooseDecision, publicView, toggleCue } from '../features/barTrainer';
import { activeSession } from '../features/caseTraining';
import type { AcademyProgress } from '../features/progress';
import {
  answerTransferPoint,
  beginTransferCase,
  planTransfer,
  transferResults,
  updateTransferDraft,
  type TransferResultEntry,
} from '../features/transferCheck';
import { CaseChart } from './CaseChart';

const VERDICT_LABEL: Record<OptionVerdict, string> = {
  best: 'Beste Wahl',
  defensible: 'Vertretbar',
  mistake: 'Nicht tragfähig',
};

function lessonById(course: CourseOutline, lessonId: string): LessonOutline | undefined {
  return course.units.flatMap((unit) => unit.lessons).find((lesson) => lesson.id === lessonId);
}

const attemptLabel = (attempt: number) => (attempt <= 1 ? 'Erstversuch' : `Wiederholung (Durchlauf ${attempt})`);

interface Props {
  course: CourseOutline;
  progress: AcademyProgress;
  onChange: (update: (progress: AcademyProgress) => AcademyProgress) => void;
  onOpenLesson: (lesson: LessonOutline) => void;
  onBack: () => void;
}

/**
 * Transferprüfung (F-17): mehrere ungesehene Fälle ohne Zwischenlösung, danach die
 * begründete Auswertung. Die Ansicht liest die Falldaten nur über `publicView`
 * (nur bekannte Bars, keine Einordnung) und zeigt Auflösungen erst am Ende.
 */
export function TransferView({ course, progress, onChange, onOpenLesson, onBack }: Props) {
  const plan = useMemo(() => planTransfer(course, progress), [course, progress]);
  const heading = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    heading.current?.focus({ preventScroll: true });
  }, [plan.status]);

  const next = plan.pending[0];
  const done = plan.cases.length - plan.pending.length;

  return (
    <div className="page-shell trainer-page transfer-page" data-mode="train">
      <header className="page-heading">
        <p className="eyebrow">Transferprüfung</p>
        <h1 ref={heading} tabIndex={-1}>
          Neue Fälle ohne Zwischenlösung
        </h1>
        <p>
          Du entscheidest mehrere bisher ungesehene Chartsituationen nacheinander. Die Auflösung folgt erst nach
          dem letzten Fall. Das Ergebnis ist eine Lernstandsanzeige – keine Prognose und keine Handelsempfehlung.
          Es gibt dafür keine XP.
        </p>
        <button type="button" className="secondary-button" onClick={onBack}>
          Zur Übersicht
        </button>
      </header>

      {plan.status === 'none' ? (
        <div className="empty-state" role="status">
          <strong>Noch keine Fälle zugänglich</strong>
          {plan.locked.length > 0 ? (
            <>
              <p>
                Die Transferfälle bauen auf deinen abgeschlossenen Lektionen auf. Als Nächstes fehlt:{' '}
                „{plan.locked[0].lockedBy.title}“.
              </p>
              {(() => {
                const lesson = lessonById(course, plan.locked[0].lockedBy.id);
                return lesson ? (
                  <button type="button" className="secondary-button" onClick={() => onOpenLesson(lesson)}>
                    Zur Lektion
                  </button>
                ) : null;
              })()}
            </>
          ) : (
            <p>Für die Transferprüfung sind derzeit keine geprüften Fälle freigegeben.</p>
          )}
        </div>
      ) : null}

      {plan.status === 'ready' || plan.status === 'done' ? (
        <>
          {plan.status === 'done' ? (
            <Results entries={transferResults(course, progress)} course={course} onOpenLesson={onOpenLesson} />
          ) : null}
          <section className="trainer-panel" aria-labelledby="transfer-start-title">
            <h2 id="transfer-start-title">
              {plan.status === 'ready' ? 'Prüfung starten' : 'Noch einmal versuchen'}
            </h2>
            <p>
              {plan.cases.length === 1 ? '1 Fall' : `${plan.cases.length} Fälle`} aus bereits abgeschlossenen Kapiteln
              {plan.locked.length > 0 ? `; ${plan.locked.length} weitere öffnen sich mit späteren Kapiteln` : ''}.{' '}
              {plan.attempt <= 1
                ? 'Dies ist dein Erstversuch.'
                : `Dies ist eine Wiederholung (Durchlauf ${plan.attempt}); dein Erstversuch bleibt gespeichert.`}
            </p>
            <div className="trainer-actions">
              <button
                type="button"
                className="primary-button"
                onClick={() => onChange((current) => beginTransferCase(current, next))}
              >
                {plan.status === 'ready' ? 'Prüfung starten' : 'Als Wiederholung starten'}
              </button>
            </div>
          </section>
        </>
      ) : null}

      {plan.status === 'active' && next ? (
        <CaseStep
          key={next.id}
          barCase={next}
          position={done + 1}
          total={plan.cases.length}
          attempt={plan.attempt}
          progress={progress}
          onChange={onChange}
        />
      ) : null}
    </div>
  );
}

function CaseStep({
  barCase,
  position,
  total,
  attempt,
  progress,
  onChange,
}: {
  barCase: NonNullable<ReturnType<typeof planTransfer>['pending'][number]>;
  position: number;
  total: number;
  attempt: number;
  progress: AcademyProgress;
  onChange: Props['onChange'];
}) {
  const ids = useId();
  const session = activeSession(progress, barCase);
  const view = session ? publicView(barCase, session) : null;
  const heading = useRef<HTMLHeadingElement>(null);
  const pointKey = view ? `${barCase.id}/${view.progress.position}` : `${barCase.id}/start`;

  useEffect(() => {
    heading.current?.focus({ preventScroll: true });
  }, [pointKey]);

  if (!session || !view || !view.current) {
    return (
      <section className="trainer-panel" aria-labelledby={`${ids}-start`}>
        <p className="question-number">
          Fall {position} von {total} · {attemptLabel(attempt)}
        </p>
        <h2 id={`${ids}-start`} ref={heading} tabIndex={-1}>
          Nächster Fall
        </h2>
        <p>Die Auflösung folgt erst nach dem letzten Fall.</p>
        <div className="trainer-actions">
          <button
            type="button"
            className="primary-button"
            onClick={() => onChange((current) => beginTransferCase(current, barCase))}
          >
            Fall beginnen
          </button>
        </div>
      </section>
    );
  }

  const ready = canSubmit(session);
  const current = view.current;
  return (
    <>
      <section className="trainer-panel" aria-labelledby={`${ids}-case`}>
        <p className="question-number">
          Fall {position} von {total} · {attemptLabel(attempt)}
        </p>
        <h2 id={`${ids}-case`} ref={heading} tabIndex={-1}>
          {view.title}
        </h2>
        <p>{view.setup}</p>
        {view.timeframe ? <p className="trainer-timeframe">{view.timeframe}</p> : null}
        <CaseChart bars={view.bars} deciding />
      </section>
      <form
        className="trainer-panel trainer-decision"
        aria-labelledby={`${ids}-decision`}
        onSubmit={(event) => {
          event.preventDefault();
          if (ready) onChange((currentProgress) => answerTransferPoint(currentProgress, barCase));
        }}
      >
        <h3 id={`${ids}-decision`}>
          Entscheidung {view.progress.position} von {view.progress.total}
        </h3>
        <p className="trainer-prompt">{current.prompt}</p>
        <fieldset>
          <legend>Deine Entscheidung</legend>
          <div className="trainer-choices">
            {current.options.map((decision) => (
              <label key={decision}>
                <input
                  type="radio"
                  name={`${ids}-decision-choice`}
                  value={decision}
                  checked={view.selection.decision === decision}
                  onChange={() =>
                    onChange((currentProgress) =>
                      updateTransferDraft(currentProgress, barCase, (s) => chooseDecision(s, decision)),
                    )
                  }
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
                  onChange={() =>
                    onChange((currentProgress) =>
                      updateTransferDraft(currentProgress, barCase, (s) => toggleCue(barCase, s, cue.id)),
                    )
                  }
                />
                <span>{cue.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <div className="trainer-actions">
          <button type="submit" className="primary-button" disabled={!ready} aria-describedby={`${ids}-hint`}>
            Antwort abgeben
          </button>
          <p id={`${ids}-hint`} className="trainer-hint">
            {ready
              ? 'Nach der Abgabe lässt sich die Wahl nicht mehr ändern; die Auflösung folgt am Ende.'
              : 'Wähle eine Entscheidung und mindestens einen Hinweis.'}
          </p>
        </div>
      </form>
    </>
  );
}

function Results({
  entries,
  course,
  onOpenLesson,
}: {
  entries: TransferResultEntry[];
  course: CourseOutline;
  onOpenLesson: (lesson: LessonOutline) => void;
}) {
  const ids = useId();
  return (
    <section className="trainer-panel transfer-results" aria-labelledby={`${ids}-title`}>
      <h2 id={`${ids}-title`}>Auswertung</h2>
      <p>
        Hier siehst du zu jeder Entscheidung deine Wahl, die begründete Einordnung und die passenden Lehrstellen.
        Eine Lernstandsanzeige – kein Hinweis darauf, wie ein echter Markt weiterläuft.
      </p>
      {entries.map(({ barCase, attempt, replay }) => (
        <article key={barCase.id} className="transfer-case-result" aria-labelledby={`${ids}-${barCase.id}`}>
          <h3 id={`${ids}-${barCase.id}`}>
            {barCase.title} <small>· {attemptLabel(attempt)}</small>
          </h3>
          {!replay.ok ? (
            <p role="status">Zu diesem Fall liegt keine vollständige Runde mehr vor.</p>
          ) : (
            <>
              <ol className="trainer-summary-list">
                {replay.steps.map((step) => {
                  const best = step.decision.options.find((option) => option.verdict === 'best')!;
                  return (
                    <li key={step.decision.id}>
                      <p>
                        <strong>Entscheidung {step.index + 1}:</strong> {step.decision.prompt}
                      </p>
                      <p>
                        Deine Wahl: <strong>{TRADE_DECISION_LABELS[step.answer.decision]}</strong> –{' '}
                        {VERDICT_LABEL[step.evaluation.verdict]}. Beste Wahl: {TRADE_DECISION_LABELS[best.decision]}.
                      </p>
                      <p>{step.evaluation.option.feedback}</p>
                      <p className="trainer-explanation">{step.decision.explanation}</p>
                      <ul className="trainer-cue-results">
                        {step.decision.cues.map((cue) => {
                          const chosen = step.answer.cueIds.includes(cue.id);
                          const label = cue.relevant
                            ? chosen
                              ? 'Erkannt'
                              : 'Übersehen'
                            : chosen
                              ? 'Irreführend gewählt'
                              : 'Nicht relevant';
                          return (
                            <li key={cue.id}>
                              <strong>{label}:</strong> {cue.label} – {cue.explanation}
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
              </ol>
              <ul className="trainer-lessons">
                {[
                  ...new Set([
                    ...replay.steps.flatMap((step) =>
                      step.evaluation.missed.flatMap((cue) => (cue.lessonId ? [cue.lessonId] : [])),
                    ),
                    ...barCase.lessonIds,
                  ]),
                ].flatMap((lessonId) => {
                  const lesson = lessonById(course, lessonId);
                  return lesson
                    ? [
                        <li key={lessonId}>
                          <button
                            type="button"
                            className="link-button"
                            aria-label={`Lektion öffnen: ${lesson.title}`}
                            onClick={() => onOpenLesson(lesson)}
                          >
                            Lektion: {lesson.title}
                          </button>
                        </li>,
                      ]
                    : [];
                })}
              </ul>
            </>
          )}
        </article>
      ))}
    </section>
  );
}

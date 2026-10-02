import { lazy, Suspense, useEffect, useRef, type ReactNode } from 'react';
import type { LessonStep } from '../content/types';
import {
  isQuestionResolved,
  type QuestionStep as QuestionStepData,
  type QuestionView,
} from '../features/lessonResults';
import { moveAnswerFocus } from './answerKeys';
import { Bull } from './Bull';
import { FeedbackCue } from './FeedbackCue';
import { ErrorBoundary } from './ErrorBoundary';

/*
 * Darstellung der Lernschritte – gemeinsam für Lesson Player und Buchleser
 * (F-13). Im Lesson Player ist die Schrittüberschrift `h1`, im Leser steht sie
 * unter der Abschnittsüberschrift und ist `h3`.
 */

export type HeadingLevel = 1 | 3;

function subLevel(level: HeadingLevel): 2 | 4 {
  return level === 1 ? 2 : 4;
}

function StepHeading({
  level,
  plain = false,
  children,
}: {
  level: HeadingLevel | 2 | 4;
  /** Zwischenüberschrift ohne Fokusziel. */
  plain?: boolean;
  children: ReactNode;
}) {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4';
  return plain ? <Tag>{children}</Tag> : <Tag tabIndex={-1}>{children}</Tag>;
}

// Die Schaubilder sind der größte Code-Block; sie werden erst beim ersten
// Diagramm-Schritt geladen (und vom Service Worker für offline vorgehalten).
// Zusammen mit dem Diagramm-Fokus (F-11), der dieselben Schaubilder nutzt.
const PFWithFocus = lazy(() => import('./ReadingPFFocus').then(module => ({ default: module.PFWithFocus })));
const HAWithFocus = lazy(() => import('./ReadingHAFocus').then(module => ({ default: module.HAWithFocus })));
const PriceStepsWithFocus = lazy(() => import('./ReadingPriceStepsFocus').then(module => ({ default: module.PriceStepsWithFocus })));
const ChartWithFocus = lazy(() =>
  import('./ChartFocus').then((module) => ({ default: module.ChartWithFocus })),
);

/** Platzhalter in Schaubildgröße, damit beim Nachladen nichts springt. */
function ChartPlaceholder() {
  return (
    <div className="learning-chart chart-loading" role="status">
      <span>Schaubild wird geladen …</span>
    </div>
  );
}

/**
 * Das Schaubild-Modul kam nicht an (z. B. offline ohne Service Worker). Der
 * Browser merkt sich fehlgeschlagene Module – verlässlich hilft nur ein
 * Neuladen. Schritt und Fortschritt bleiben erhalten (Hash-URL, Speicher).
 */
function ChartLoadError() {
  return (
    <div className="learning-chart chart-loading chart-error" role="alert">
      <p>
        Das Schaubild konnte nicht geladen werden. Prüfe die Verbindung – der Text dieses
        Schritts bleibt lesbar.
      </p>
      <button
        type="button"
        className="secondary-button"
        onClick={() => window.location.reload()}
      >
        Seite neu laden
      </button>
    </div>
  );
}

export function StepChart({ step }: { step: Extract<LessonStep, { type: 'diagram' }> }) {
  const Chart = step.scenario.startsWith('rc6-') ? PFWithFocus : step.scenario.startsWith('rc5-') ? HAWithFocus : step.scenario.startsWith('rc4-') ? PriceStepsWithFocus : ChartWithFocus;
  return (
    <ErrorBoundary fallback={() => <ChartLoadError />}>
      <Suspense fallback={<ChartPlaceholder />}>
        <Chart
          scenario={step.scenario}
          title={step.title}
          caption={step.caption}
          observations={step.observations}
        />
      </Suspense>
    </ErrorBoundary>
  );
}

export function ExplanationStep({
  step,
  level = 1,
}: {
  step: Extract<LessonStep, { type: 'explanation' }>;
  level?: HeadingLevel;
}) {
  return (
    <article className="step-copy">
      {step.eyebrow ? <p className="eyebrow">{step.eyebrow}</p> : null}
      <StepHeading level={level}>{step.title}</StepHeading>
      {step.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {step.callout ? (
        <aside className="lesson-callout">
          <span aria-hidden="true">◆</span>
          <p>{step.callout}</p>
        </aside>
      ) : null}
    </article>
  );
}

export function DiagramStep({
  step,
  level = 1,
}: {
  step: Extract<LessonStep, { type: 'diagram' }>;
  level?: HeadingLevel;
}) {
  return (
    <article className="step-copy diagram-step">
      <p className="eyebrow">Schaubild</p>
      <StepHeading level={level}>{step.title}</StepHeading>
      <StepChart step={step} />
      <p className="chart-caption">{step.caption}</p>
      <ul className="observation-list">
        {step.observations.map((observation, index) => (
          <li key={observation}>
            <span>{index + 1}</span>
            <p>{observation}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function ComparisonStep({
  step,
  level = 1,
}: {
  step: Extract<LessonStep, { type: 'comparison' }>;
  level?: HeadingLevel;
}) {
  return (
    <article className="step-copy">
      <p className="eyebrow">Vergleich</p>
      <StepHeading level={level}>{step.title}</StepHeading>
      <div className="comparison-grid">
        {step.columns.map((column) => (
          <section className={`comparison-card ${column.tone}`} key={column.title}>
            <StepHeading level={subLevel(level)} plain>
              {column.title}
            </StepHeading>
            <ul>
              {column.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  );
}

export function QuestionStep({
  step,
  state,
  onAnswer,
  onRetry,
  onReveal,
  onResolved,
  level = 1,
}: {
  step: QuestionStepData;
  state: QuestionView;
  onAnswer: (optionId: string) => void;
  onRetry: () => void;
  onReveal: () => void;
  /** Fokus auf „Weiter“, sobald die Frage erledigt ist (nur nach eigener Eingabe). */
  onResolved: () => void;
  level?: HeadingLevel;
}) {
  const resolved = isQuestionResolved(state);
  const selected = state.selectedOptionId;
  const awaitingRetry = !resolved && selected !== null;
  const locked = resolved || awaitingRetry;
  const correctOption = step.options.find((option) => option.id === step.correctOptionId);
  const selectedOption = step.options.find((option) => option.id === selected);
  const listRef = useRef<HTMLDivElement>(null);
  const retryButton = useRef<HTMLButtonElement>(null);
  const retryPending = useRef(false);
  // Nur nach einer eigenen Antwort wird der Fokus verschoben – nie beim Laden.
  const answered = useRef(false);

  // Die gewählte Antwort wird gesperrt; der Fokus darf dabei nicht verloren gehen.
  useEffect(() => {
    if (!answered.current) return;
    answered.current = false;
    if (awaitingRetry) retryButton.current?.focus();
    else if (resolved) onResolved();
  }, [awaitingRetry, resolved, onResolved]);

  // Nach „Noch einmal versuchen“ landet der Fokus auf der ersten freien Antwort.
  useEffect(() => {
    if (!retryPending.current || locked) return;
    retryPending.current = false;
    listRef.current?.querySelector<HTMLButtonElement>('button:not(:disabled)')?.focus();
  }, [locked]);

  return (
    <article className="step-copy question-step">
      <p className="eyebrow">Aktiv anwenden</p>
      <StepHeading level={level}>{step.title}</StepHeading>
      <p className="question-prompt">{step.prompt}</p>
      <div
        className="answer-list"
        role="radiogroup"
        aria-label={step.prompt}
        ref={listRef}
        onKeyDown={moveAnswerFocus}
      >
        {step.options.map((option, index) => {
          const isSelected = selected === option.id;
          const isCorrect = option.id === step.correctOptionId;
          const triedWrong = state.wrongOptionIds.includes(option.id);
          const stateClass =
            resolved && isCorrect
              ? 'correct'
              : isSelected && !isCorrect
                ? 'incorrect'
                : triedWrong
                  ? 'tried'
                  : locked
                    ? 'muted'
                    : '';

          return (
            <button
              className={`answer-option ${stateClass}`}
              key={option.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              disabled={locked || triedWrong}
              onClick={() => {
                answered.current = true;
                onAnswer(option.id);
              }}
            >
              <span className="answer-key">{String.fromCharCode(65 + index)}</span>
              <span>{option.label}</span>
              {/* Symbol und Text zusätzlich zur Farbe – auch für Screenreader. */}
              {resolved && isCorrect ? (
                <b>
                  <span aria-hidden="true">✓</span>
                  <span className="visually-hidden"> – richtige Antwort</span>
                </b>
              ) : null}
              {(isSelected || triedWrong) && !isCorrect ? (
                <b>
                  <span aria-hidden="true">×</span>
                  <span className="visually-hidden"> – falsche Antwort</span>
                </b>
              ) : null}
            </button>
          );
        })}
      </div>

      <FeedbackCue kind="correct" active={state.status === 'correct'} />
      {awaitingRetry && selectedOption ? (
        <div className="answer-feedback incorrect with-bull" role="status">
          <Bull mood="think" size={52} />
          <strong>Noch nicht ganz.</strong>
          <p>{selectedOption.explanation}</p>
          <div className="answer-actions">
            <button
              ref={retryButton}
              className="primary-button"
              type="button"
              onClick={() => {
                retryPending.current = true;
                onRetry();
              }}
            >
              Noch einmal versuchen
            </button>
            <button
              className="secondary-button"
              type="button"
              onClick={() => {
                answered.current = true;
                onReveal();
              }}
            >
              Lösung anzeigen
            </button>
          </div>
        </div>
      ) : null}

      {state.status === 'correct' && correctOption ? (
        <div className="answer-feedback correct with-bull" role="status">
          <Bull mood="cheer" size={52} />
          <strong>
            {state.wrongOptionIds.length > 0 && !state.legacy
              ? 'Richtig – im neuen Versuch.'
              : 'Richtig eingeordnet.'}
          </strong>
          <p>{correctOption.explanation}</p>
        </div>
      ) : null}

      {state.status === 'revealed' && correctOption ? (
        <div className="answer-feedback revealed with-bull" role="status">
          <Bull mood="calm" size={52} />
          <strong>Lösung: {correctOption.label}</strong>
          <p>{correctOption.explanation}</p>
          {selectedOption && selectedOption.id !== correctOption.id ? (
            <p>
              <em>Deine Wahl:</em> {selectedOption.explanation}
            </p>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

export function RecapStep({
  step,
  level = 1,
}: {
  step: Extract<LessonStep, { type: 'recap' }>;
  level?: HeadingLevel;
}) {
  return (
    <article className="step-copy recap-step">
      <div className="recap-seal" aria-hidden="true">✓</div>
      <p className="eyebrow">Zusammenfassung</p>
      <StepHeading level={level}>{step.title}</StepHeading>
      <ul>
        {step.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
}

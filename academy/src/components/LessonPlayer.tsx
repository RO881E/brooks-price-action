import { useEffect, useMemo, useRef } from 'react';
import type { Lesson, LessonStep } from '../content/types';
import {
  isQuestionResolved,
  type QuestionStep as QuestionStepData,
  type QuestionView,
} from '../features/lessonResults';
import { LearningChart } from './LearningChart';
import { NotesPanel } from './NotesPanel';

interface LessonPlayerProps {
  lesson: Lesson;
  /** Nullbasierter, bereits validierter Schritt. */
  stepIndex: number;
  onStepChange: (stepIndex: number) => void;
  questionState: (question: QuestionStepData) => QuestionView;
  onAnswer: (question: QuestionStepData, optionId: string) => void;
  onRetry: (question: QuestionStepData) => void;
  onReveal: (question: QuestionStepData) => void;
  onComplete: () => void;
  onClose: () => void;
  /** Lesezeichen und Notizen (seit F-07). */
  saved?: {
    isBookmarked: (stepId: string | null) => boolean;
    noteText: (stepId: string) => string;
    onToggleBookmark: (stepId: string | null) => void;
    onCommitNote: (stepId: string, text: string) => void;
    onCommitNoteNow: (stepId: string, text: string) => void;
    onDeleteNote: (stepId: string) => void;
  };
}

function ExplanationStep({ step }: { step: Extract<LessonStep, { type: 'explanation' }> }) {
  return (
    <article className="step-copy">
      {step.eyebrow ? <p className="eyebrow">{step.eyebrow}</p> : null}
      <h1>{step.title}</h1>
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

function DiagramStep({ step }: { step: Extract<LessonStep, { type: 'diagram' }> }) {
  return (
    <article className="step-copy diagram-step">
      <p className="eyebrow">Schaubild</p>
      <h1>{step.title}</h1>
      <LearningChart scenario={step.scenario} title={step.title} />
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

function ComparisonStep({ step }: { step: Extract<LessonStep, { type: 'comparison' }> }) {
  return (
    <article className="step-copy">
      <p className="eyebrow">Vergleich</p>
      <h1>{step.title}</h1>
      <div className="comparison-grid">
        {step.columns.map((column) => (
          <section className={`comparison-card ${column.tone}`} key={column.title}>
            <h2>{column.title}</h2>
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

function QuestionStep({
  step,
  state,
  onAnswer,
  onRetry,
  onReveal,
}: {
  step: QuestionStepData;
  state: QuestionView;
  onAnswer: (optionId: string) => void;
  onRetry: () => void;
  onReveal: () => void;
}) {
  const resolved = isQuestionResolved(state);
  const selected = state.selectedOptionId;
  const awaitingRetry = !resolved && selected !== null;
  const locked = resolved || awaitingRetry;
  const correctOption = step.options.find((option) => option.id === step.correctOptionId);
  const selectedOption = step.options.find((option) => option.id === selected);
  const listRef = useRef<HTMLDivElement>(null);
  const retryPending = useRef(false);

  // Nach „Noch einmal versuchen“ landet der Fokus auf der ersten freien Antwort.
  useEffect(() => {
    if (!retryPending.current || locked) return;
    retryPending.current = false;
    listRef.current?.querySelector<HTMLButtonElement>('button:not(:disabled)')?.focus();
  }, [locked]);

  return (
    <article className="step-copy question-step">
      <p className="eyebrow">Aktiv anwenden</p>
      <h1>{step.title}</h1>
      <p className="question-prompt">{step.prompt}</p>
      <div className="answer-list" role="radiogroup" aria-label={step.prompt} ref={listRef}>
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
              onClick={() => onAnswer(option.id)}
            >
              <span className="answer-key">{String.fromCharCode(65 + index)}</span>
              <span>{option.label}</span>
              {resolved && isCorrect ? <b aria-label="richtige Antwort">✓</b> : null}
              {(isSelected || triedWrong) && !isCorrect ? (
                <b aria-label="falsche Antwort">×</b>
              ) : null}
            </button>
          );
        })}
      </div>

      {awaitingRetry && selectedOption ? (
        <div className="answer-feedback incorrect" role="status">
          <strong>Noch nicht ganz.</strong>
          <p>{selectedOption.explanation}</p>
          <div className="answer-actions">
            <button
              className="primary-button"
              type="button"
              onClick={() => {
                retryPending.current = true;
                onRetry();
              }}
            >
              Noch einmal versuchen
            </button>
            <button className="secondary-button" type="button" onClick={onReveal}>
              Lösung anzeigen
            </button>
          </div>
        </div>
      ) : null}

      {state.status === 'correct' && correctOption ? (
        <div className="answer-feedback correct" role="status">
          <strong>
            {state.wrongOptionIds.length > 0 && !state.legacy
              ? 'Richtig – im neuen Versuch.'
              : 'Richtig eingeordnet.'}
          </strong>
          <p>{correctOption.explanation}</p>
        </div>
      ) : null}

      {state.status === 'revealed' && correctOption ? (
        <div className="answer-feedback revealed" role="status">
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

function RecapStep({ step }: { step: Extract<LessonStep, { type: 'recap' }> }) {
  return (
    <article className="step-copy recap-step">
      <div className="recap-seal" aria-hidden="true">✓</div>
      <p className="eyebrow">Zusammenfassung</p>
      <h1>{step.title}</h1>
      <ul>
        {step.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
}

export function LessonPlayer({
  lesson,
  stepIndex,
  onStepChange,
  questionState,
  onAnswer,
  onRetry,
  onReveal,
  onComplete,
  onClose,
  saved,
}: LessonPlayerProps) {
  const step = lesson.steps[stepIndex];
  const isLast = stepIndex === lesson.steps.length - 1;
  const currentQuestion = step.type === 'question' ? questionState(step) : undefined;
  const canContinue = !currentQuestion || isQuestionResolved(currentQuestion);
  const percent = useMemo(
    () => Math.round(((stepIndex + 1) / lesson.steps.length) * 100),
    [lesson.steps.length, stepIndex],
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [stepIndex]);

  return (
    <main className="lesson-player">
      <header className="lesson-topbar">
        <button className="icon-button" type="button" onClick={onClose} aria-label="Lektion schließen">
          ×
        </button>
        <div className="lesson-progress" aria-label={`Lektionsfortschritt ${percent} Prozent`}>
          <span style={{ width: `${percent}%` }} />
        </div>
        <div className="lesson-xp">+{lesson.xp} XP</div>
      </header>

      <div className="lesson-stage">
        <div className="lesson-meta">
          <span>{lesson.sourceUnit}</span>
          <span>{stepIndex + 1} / {lesson.steps.length}</span>
        </div>

        {step.type === 'explanation' ? <ExplanationStep step={step} /> : null}
        {step.type === 'diagram' ? <DiagramStep step={step} /> : null}
        {step.type === 'comparison' ? <ComparisonStep step={step} /> : null}
        {step.type === 'question' && currentQuestion ? (
          <QuestionStep
            key={step.id}
            step={step}
            state={currentQuestion}
            onAnswer={(optionId) => onAnswer(step, optionId)}
            onRetry={() => onRetry(step)}
            onReveal={() => onReveal(step)}
          />
        ) : null}
        {step.type === 'recap' ? <RecapStep step={step} /> : null}

        {saved ? (
          <NotesPanel
            key={`notes-${step.id}`}
            stepNumber={stepIndex + 1}
            stepTitle={step.title}
            lessonBookmarked={saved.isBookmarked(null)}
            stepBookmarked={saved.isBookmarked(step.id)}
            savedText={saved.noteText(step.id)}
            onToggleLessonBookmark={() => saved.onToggleBookmark(null)}
            onToggleStepBookmark={() => saved.onToggleBookmark(step.id)}
            onCommit={(text) => saved.onCommitNote(step.id, text)}
            onCommitNow={(text) => saved.onCommitNoteNow(step.id, text)}
            onDelete={() => saved.onDeleteNote(step.id)}
          />
        ) : null}
      </div>

      <footer className="lesson-footer">
        <button
          className="secondary-button"
          type="button"
          onClick={() => onStepChange(Math.max(0, stepIndex - 1))}
          disabled={stepIndex === 0}
        >
          Zurück
        </button>
        <button
          className="primary-button"
          type="button"
          disabled={!canContinue}
          onClick={() => {
            if (isLast) onComplete();
            else onStepChange(stepIndex + 1);
          }}
        >
          {isLast ? 'Lektion abschließen' : 'Weiter'}
        </button>
      </footer>
    </main>
  );
}

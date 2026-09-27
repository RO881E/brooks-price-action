import { useEffect, useMemo, useState } from 'react';
import type { Lesson, LessonStep } from '../content/types';
import { LearningChart } from './LearningChart';

interface LessonPlayerProps {
  lesson: Lesson;
  answers: Record<string, string>;
  onAnswer: (questionId: string, optionId: string) => void;
  onComplete: () => void;
  onClose: () => void;
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
  answer,
  onAnswer,
}: {
  step: Extract<LessonStep, { type: 'question' }>;
  answer?: string;
  onAnswer: (optionId: string) => void;
}) {
  const answered = Boolean(answer);

  return (
    <article className="step-copy question-step">
      <p className="eyebrow">Aktiv anwenden</p>
      <h1>{step.title}</h1>
      <p className="question-prompt">{step.prompt}</p>
      <div className="answer-list" role="radiogroup" aria-label={step.prompt}>
        {step.options.map((option, index) => {
          const selected = answer === option.id;
          const correct = option.id === step.correctOptionId;
          const stateClass = answered
            ? correct
              ? 'correct'
              : selected
                ? 'incorrect'
                : 'muted'
            : '';

          return (
            <button
              className={`answer-option ${stateClass}`}
              key={option.id}
              type="button"
              role="radio"
              aria-checked={selected}
              disabled={answered}
              onClick={() => onAnswer(option.id)}
            >
              <span className="answer-key">{String.fromCharCode(65 + index)}</span>
              <span>{option.label}</span>
              {answered && correct ? <b aria-label="richtige Antwort">✓</b> : null}
              {answered && selected && !correct ? <b aria-label="falsche Antwort">×</b> : null}
            </button>
          );
        })}
      </div>
      {answer ? (
        <div
          className={`answer-feedback ${answer === step.correctOptionId ? 'correct' : 'incorrect'}`}
          role="status"
        >
          <strong>
            {answer === step.correctOptionId ? 'Richtig eingeordnet.' : 'Noch nicht ganz.'}
          </strong>
          <p>{step.options.find((option) => option.id === answer)?.explanation}</p>
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
  answers,
  onAnswer,
  onComplete,
  onClose,
}: LessonPlayerProps) {
  const [stepIndex, setStepIndex] = useState(0);
  const step = lesson.steps[stepIndex];
  const isLast = stepIndex === lesson.steps.length - 1;
  const currentAnswer = step.type === 'question' ? answers[step.id] : undefined;
  const canContinue = step.type !== 'question' || Boolean(currentAnswer);
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
        {step.type === 'question' ? (
          <QuestionStep
            step={step}
            answer={currentAnswer}
            onAnswer={(optionId) => onAnswer(step.id, optionId)}
          />
        ) : null}
        {step.type === 'recap' ? <RecapStep step={step} /> : null}
      </div>

      <footer className="lesson-footer">
        <button
          className="secondary-button"
          type="button"
          onClick={() => setStepIndex((index) => Math.max(0, index - 1))}
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
            else setStepIndex((index) => index + 1);
          }}
        >
          {isLast ? 'Lektion abschließen' : 'Weiter'}
        </button>
      </footer>
    </main>
  );
}

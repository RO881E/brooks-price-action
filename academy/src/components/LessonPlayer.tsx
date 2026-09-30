import { useCallback, useEffect, useMemo, useRef } from 'react';
import type { Lesson } from '../content/types';
import {
  isQuestionResolved,
  type QuestionStep as QuestionStepData,
  type QuestionView,
} from '../features/lessonResults';
import { scrollToTop } from '../features/motion';
import {
  ComparisonStep,
  DiagramStep,
  ExplanationStep,
  QuestionStep,
  RecapStep,
} from './LessonSteps';
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

  const stageRef = useRef<HTMLDivElement>(null);
  const continueButton = useRef<HTMLButtonElement>(null);
  // Wurde der Schritt über „Zurück“/„Weiter“ gewechselt? Dann führt der Fokus mit.
  const navigated = useRef(false);
  const focusContinue = useCallback(() => continueButton.current?.focus(), []);

  useEffect(() => {
    scrollToTop();
    if (!navigated.current) return;
    navigated.current = false;
    const stage = stageRef.current;
    // Offene Frage: direkt zur ersten Antwort. Sonst bleibt der Fokus auf dem
    // Knopf – außer er ist jetzt gesperrt, dann geht er zur Schrittüberschrift.
    const firstAnswer = stage?.querySelector<HTMLButtonElement>(
      '.answer-list button:not(:disabled)',
    );
    if (firstAnswer) {
      firstAnswer.focus();
      return;
    }
    const active = document.activeElement;
    if (!active || active === document.body || (active as HTMLButtonElement).disabled) {
      stage?.querySelector<HTMLElement>('h1')?.focus();
    }
  }, [stepIndex]);

  // Beim Öffnen der Lektion landet der Fokus auf der Schrittüberschrift, damit
  // Tastatur und Screenreader nicht am Seitenanfang neu beginnen müssen.
  useEffect(() => {
    const active = document.activeElement;
    if (active && active !== document.body) return;
    stageRef.current?.querySelector<HTMLElement>('h1')?.focus({ preventScroll: true });
  }, []);

  const goTo = (index: number) => {
    navigated.current = true;
    onStepChange(index);
  };

  return (
    <main className="lesson-player">
      <header className="lesson-topbar">
        <button className="icon-button" type="button" onClick={onClose} aria-label="Lektion schließen">
          ×
        </button>
        <div
          className="lesson-progress"
          role="progressbar"
          aria-label="Lektionsfortschritt"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percent}
          aria-valuetext={`Schritt ${stepIndex + 1} von ${lesson.steps.length}`}
        >
          <span style={{ width: `${percent}%` }} />
          <i className="progress-ticks" aria-hidden="true" style={{ '--steps': lesson.steps.length } as React.CSSProperties} />
        </div>
        <div className="lesson-xp">+{lesson.xp} XP</div>
      </header>

      <div className="lesson-stage" ref={stageRef}>
        <div className="lesson-meta">
          <span>{lesson.sourceUnit}</span>
          <span aria-hidden="true">{stepIndex + 1} / {lesson.steps.length}</span>
        </div>
        <p className="visually-hidden" role="status">
          Schritt {stepIndex + 1} von {lesson.steps.length}: {step.title}
        </p>

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
            onResolved={focusContinue}
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
          onClick={() => goTo(Math.max(0, stepIndex - 1))}
          disabled={stepIndex === 0}
        >
          Zurück
        </button>
        <button
          ref={continueButton}
          className="primary-button"
          type="button"
          disabled={!canContinue}
          onClick={() => {
            if (isLast) onComplete();
            else goTo(stepIndex + 1);
          }}
        >
          {isLast ? 'Lektion abschließen' : 'Weiter'}
        </button>
      </footer>
    </main>
  );
}

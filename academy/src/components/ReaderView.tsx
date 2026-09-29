import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { catalog, useLessonContent } from '../content/catalog';
import type { CourseOutline, LessonOutline, LessonStep } from '../content/types';
import { questionView, type QuestionStep as QuestionStepData } from '../features/lessonResults';
import { prefersReducedMotion, scrollToTop } from '../features/motion';
import type { AcademyProgress, ReadingOptions } from '../features/progress';
import {
  isReadable,
  lockHint,
  nextSection,
  nextUnit,
  openQuestions,
  previousSection,
  readerProgress,
  sectionResolved,
  type ReaderSection,
  type ResolvedReader,
} from '../features/reader';
import { termsForStep } from '../content/stepTerms';
import { ContentLoadState } from './ContentLoadState';
import { ReadingOptionsPanel } from './ReadingOptionsPanel';
import { ComparisonStep, DiagramStep, ExplanationStep, QuestionStep, RecapStep } from './LessonSteps';
import { StepTerms } from './StepTerms';
import { casesForLesson } from '../features/caseTraining';
import { CaseLinks } from './CaseTraining';

interface ReaderViewProps {
  course: CourseOutline;
  reader: ResolvedReader;
  progress: AcademyProgress;
  /** Wechsel des Abschnitts innerhalb der Einheit (ersetzt den Verlaufseintrag). */
  onOpenSection: (lessonId: string) => void;
  /** Leser einer anderen Einheit öffnen, optional an einem Abschnitt. */
  onOpenUnit: (unitId: string, lessonId?: string) => void;
  /** Aktuelle Lesestelle melden (Abschnitt und Schritt im Blick). */
  onPosition: (lessonId: string, stepId: string | null, stepIndex: number | null) => void;
  onAnswer: (question: QuestionStepData, optionId: string) => void;
  onRetry: (question: QuestionStepData) => void;
  onReveal: (question: QuestionStepData) => void;
  /** Schließt den Abschnitt über die vorhandene Lektionslogik ab (XP einmalig). */
  onCompleteSection: (lesson: LessonOutline) => void;
  onBackToChapters: () => void;
  /** Schriftgröße/Zeilenabstand ändern (F-22). */
  onReadingOptions: (changes: Partial<ReadingOptions>) => void;
  /** Passenden Bar-für-Bar-Fall öffnen (F-15). */
  onTrain?: (caseId: string) => void;
}

const stateLabel: Record<ReaderSection['state'], string> = {
  complete: 'abgeschlossen',
  available: 'offen',
  locked: 'gesperrt',
  planned: 'geplant',
};

/** Nach programmatischem Scrollen kurz keine Lesestelle aus dem Beobachter übernehmen. */
const SCROLL_SETTLE_MS = 700;

/**
 * Buchleser (F-13): ein Kapitel als zusammenhängender Text, Abschnitt für
 * Abschnitt. Gliederung, aktuelle Stelle und Lesefortschritt helfen bei der
 * Orientierung; Fragen bleiben Pflicht, gesperrte Abschnitte werden benannt.
 */
export function ReaderView({
  course,
  reader,
  progress,
  onOpenSection,
  onOpenUnit,
  onPosition,
  onAnswer,
  onRetry,
  onReveal,
  onCompleteSection,
  onBackToChapters,
  onReadingOptions,
  onTrain,
}: ReaderViewProps) {
  const ids = useId();
  const { unit, sections, section, stepIndex, fellBack } = reader;
  const counts = readerProgress(sections);
  const [outlineOpen, setOutlineOpen] = useState(
    () => typeof window.matchMedia === 'function' && window.matchMedia('(min-width: 1080px)').matches,
  );

  return (
    <div
      className="page-shell reader-page"
      data-reading-size={progress.readingOptions.size}
      data-reading-spacing={progress.readingOptions.spacing}
    >
      <header className="page-heading reader-heading">
        <div>
          <p className="eyebrow">Buchmodus · {unit.label}</p>
          <h1>{unit.title}</h1>
          <p className="reader-count">
            {counts.completed} von {counts.total} Abschnitten abgeschlossen
          </p>
          <div
            className="reader-progress"
            role="progressbar"
            aria-label="Abgeschlossene Abschnitte dieses Kapitels"
            aria-valuemin={0}
            aria-valuemax={counts.total}
            aria-valuenow={counts.completed}
          >
            <span style={{ width: `${counts.total ? (counts.completed / counts.total) * 100 : 0}%` }} />
          </div>
        </div>
        <button type="button" className="secondary-button" onClick={onBackToChapters}>
          Zur Kapitelübersicht
        </button>
      </header>

      <ReadingOptionsPanel options={progress.readingOptions} onChange={onReadingOptions} />

      {fellBack ? (
        <p className="reader-notice" role="status">
          Der verlinkte Abschnitt ist nicht (mehr) verfügbar oder noch gesperrt. Du liest an der
          nächsten möglichen Stelle weiter.
        </p>
      ) : null}

      <div className="reader-layout">
        <details
          className="reader-outline"
          open={outlineOpen}
          onToggle={(event) => setOutlineOpen(event.currentTarget.open)}
        >
          <summary>
            Kapitelgliederung
            {section ? (
              <span className="reader-outline-current">
                {' '}
                · Abschnitt {section.number} von {sections.length}
              </span>
            ) : null}
          </summary>
          <nav aria-label="Kapitelgliederung">
            <ol>
              {sections.map((item) => {
                const current = item.lesson.id === section?.lesson.id;
                return (
                  <li key={item.lesson.id} className={`reader-outline-item ${item.state} ${current ? 'current' : ''}`}>
                    {isReadable(item) ? (
                      <button
                        type="button"
                        aria-current={current ? 'location' : undefined}
                        onClick={() => onOpenSection(item.lesson.id)}
                      >
                        <span className="reader-outline-number">{item.number}</span>
                        <span className="reader-outline-title">{item.lesson.title}</span>
                        <small>
                          {item.state === 'complete' ? '✓ ' : ''}
                          {stateLabel[item.state]}
                        </small>
                      </button>
                    ) : (
                      <span className="reader-outline-locked">
                        <span className="reader-outline-number">{item.number}</span>
                        <span className="reader-outline-title">{item.lesson.title}</span>
                        <small>🔒 {stateLabel[item.state]}</small>
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        </details>

        {section ? (
          <ReaderSectionView
            key={section.lesson.id}
            course={course}
            reader={reader}
            section={section}
            stepIndex={stepIndex}
            progress={progress}
            headingId={`${ids}-section`}
            onOpenSection={onOpenSection}
            onOpenUnit={onOpenUnit}
            onPosition={onPosition}
            onAnswer={onAnswer}
            onRetry={onRetry}
            onReveal={onReveal}
            onCompleteSection={onCompleteSection}
            onTrain={onTrain}
          />
        ) : (
          <LockedUnit course={course} reader={reader} progress={progress} onOpenUnit={onOpenUnit} />
        )}
      </div>
    </div>
  );
}

function LockedUnit({
  course,
  reader,
  progress,
  onOpenUnit,
}: Pick<ReaderViewProps, 'course' | 'reader' | 'progress' | 'onOpenUnit'>) {
  const hint = lockHint(course, reader.unit, progress);
  return (
    <section className="reader-section reader-locked" aria-label="Kapitel gesperrt">
      <h2>Dieses Kapitel ist noch gesperrt</h2>
      <LockMessage hint={hint} onOpenUnit={onOpenUnit} />
    </section>
  );
}

function LockMessage({
  hint,
  onOpenUnit,
}: {
  hint: ReturnType<typeof lockHint>;
  onOpenUnit: ReaderViewProps['onOpenUnit'];
}) {
  const { prerequisite, prerequisiteUnit } = hint;
  if (!prerequisite || !prerequisiteUnit) {
    return (
      <p>
        Weitere Abschnitte werden freigeschaltet, sobald das vorherige Kapitel vollständig
        veröffentlicht und abgeschlossen ist.
      </p>
    );
  }
  return (
    <>
      <p>
        Als Nächstes steht „{prerequisite.title}“ ({prerequisiteUnit.label}) an. Schließe diesen
        Abschnitt ab, dann öffnen sich die folgenden der Reihe nach.
      </p>
      <button
        type="button"
        className="secondary-button"
        onClick={() => onOpenUnit(prerequisiteUnit.id, prerequisite.id)}
      >
        Zu „{prerequisite.title}“
      </button>
    </>
  );
}

interface SectionProps extends Omit<ReaderViewProps, 'onBackToChapters' | 'onReadingOptions'> {
  section: ReaderSection;
  stepIndex: number | null;
  headingId: string;
}

function ReaderSectionView({
  course,
  reader,
  section,
  stepIndex,
  progress,
  headingId,
  onOpenSection,
  onOpenUnit,
  onPosition,
  onAnswer,
  onRetry,
  onReveal,
  onCompleteSection,
  onTrain,
}: SectionProps) {
  const { lesson } = section;
  const content = useLessonContent([lesson.id]);
  const full = catalog.lesson(lesson.id);
  const heading = useRef<HTMLHeadingElement>(null);
  const continueButton = useRef<HTMLButtonElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const suppressUntil = useRef(0);
  const positionRef = useRef(onPosition);
  positionRef.current = onPosition;

  const complete = section.state === 'complete';
  const resolved = sectionResolved(lesson, progress);
  const open = openQuestions(lesson, progress);
  const next = nextSection(reader.sections, lesson.id);
  const previous = previousSection(reader.sections, lesson.id);
  const followingUnit = nextUnit(course, reader.unit.id);
  const canLeave = complete || resolved;

  // Öffnen des Abschnitts: an die Lesestelle oder an den Anfang. Nur einmal je
  // Abschnitt – spätere Stellen meldet der Beobachter, ohne zurückzuspringen.
  const placed = useRef(false);
  useEffect(() => {
    if (!full || placed.current) return;
    placed.current = true;
    suppressUntil.current = performance.now() + SCROLL_SETTLE_MS;
    const target =
      stepIndex !== null
        ? stepsRef.current?.querySelector<HTMLElement>(`[data-step-index="${stepIndex}"]`)
        : null;
    if (target) {
      target.scrollIntoView({ block: 'start', behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    } else {
      scrollToTop();
    }
    const active = document.activeElement;
    if (!active || active === document.body || !active.isConnected || active.closest('.reader-section-footer')) {
      heading.current?.focus({ preventScroll: true });
    }
    positionRef.current(lesson.id, stepIndex !== null ? full.steps[stepIndex].id : null, stepIndex);
  }, [full, lesson.id, stepIndex]);

  // Welcher Schritt wird gerade gelesen? Der, der die Leselinie (30 % der
  // Fensterhöhe) kreuzt; am Seitenende der letzte sichtbare. Daraus wird die
  // Lesestelle – ausgewertet kurz nach dem Scrollen, nicht bei jedem Pixel.
  useEffect(() => {
    const container = stepsRef.current;
    if (!full || !container) return undefined;
    let timer: number | undefined;

    const evaluate = () => {
      const steps = [...container.querySelectorAll<HTMLElement>('[data-step-index]')];
      if (steps.length === 0) return;
      const line = window.innerHeight * 0.3;
      const atEnd =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      let current = 0;
      steps.forEach((element, index) => {
        const box = element.getBoundingClientRect();
        if (atEnd ? box.top < window.innerHeight : box.top <= line) current = index;
      });
      positionRef.current(lesson.id, full.steps[current].id, current);
    };

    const schedule = () => {
      // Direkt nach dem Platzieren nicht übernehmen, aber auch nicht verwerfen.
      const wait = Math.max(0, suppressUntil.current - performance.now()) + 250;
      window.clearTimeout(timer);
      timer = window.setTimeout(evaluate, wait);
    };

    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [full, lesson.id]);

  const focusNext = useCallback(() => {
    // Nach einer Antwort: zur nächsten offenen Frage, sonst zu „Weiterlesen“.
    const nextOpen = stepsRef.current?.querySelector<HTMLButtonElement>('.answer-list button:not(:disabled)');
    (nextOpen ?? continueButton.current)?.focus();
  }, []);

  const goToNext = () => {
    if (!complete) onCompleteSection(lesson);
    if (next) onOpenSection(next.lesson.id);
  };

  return (
    <article className="reader-section" aria-labelledby={headingId}>
      <p className="eyebrow">
        Abschnitt {section.number} von {reader.sections.length} · {lesson.sourceUnit}
      </p>
      <h2 id={headingId} ref={heading} tabIndex={-1}>
        {lesson.title}
      </h2>
      <p className="visually-hidden" role="status">
        Abschnitt {section.number} von {reader.sections.length}: {lesson.title}
      </p>
      {complete ? (
        <p className="reader-note">
          Bereits abgeschlossen – erneutes Lesen bringt keine neuen XP.
        </p>
      ) : null}

      {!full ? (
        <ContentLoadState status={content.status} what="Der Abschnitt" onRetry={content.retry} />
      ) : (
        <div className="reader-steps" ref={stepsRef}>
          {full.steps.map((step, index) => (
            <section
              key={step.id}
              className={`reader-step reader-step-${step.type}`}
              data-step-index={index}
              aria-label={`Schritt ${index + 1}: ${step.title}`}
            >
              <ReaderStep
                step={step}
                progress={progress}
                onAnswer={onAnswer}
                onRetry={onRetry}
                onReveal={onReveal}
                onResolved={focusNext}
              />
              <StepTerms entries={termsForStep(lesson.id, step.id)} />
            </section>
          ))}
        </div>
      )}

      <footer className="reader-section-footer">
        {!canLeave && full ? (
          <p className="reader-gate" role="status">
            {open === 1
              ? 'Beantworte zuerst die Frage in diesem Abschnitt, um weiterzulesen.'
              : `Beantworte zuerst die ${open} Fragen in diesem Abschnitt, um weiterzulesen.`}
          </p>
        ) : null}
        <div className="reader-actions">
          {previous && isReadable(previous) ? (
            <button type="button" className="secondary-button" onClick={() => onOpenSection(previous.lesson.id)}>
              Vorheriger Abschnitt
            </button>
          ) : (
            <span />
          )}
          {next ? (
            <button
              ref={continueButton}
              type="button"
              className="primary-button"
              disabled={!full || !canLeave}
              onClick={goToNext}
            >
              {complete ? `Weiterlesen: ${next.lesson.title}` : 'Abschnitt abschließen und weiterlesen'}
            </button>
          ) : !complete ? (
            <button
              ref={continueButton}
              type="button"
              className="primary-button"
              disabled={!full || !canLeave}
              onClick={() => onCompleteSection(lesson)}
            >
              Abschnitt abschließen
            </button>
          ) : null}
        </div>

        {complete && onTrain ? (
          <CaseLinks cases={casesForLesson(course, progress, lesson.id)} onTrain={onTrain} />
        ) : null}
        {!next && complete ? (
          <UnitEnd course={course} reader={reader} progress={progress} followingUnit={followingUnit} onOpenUnit={onOpenUnit} />
        ) : null}
        {next && !isReadable(next) ? (
          <p className="reader-lock-hint">
            Nächster Abschnitt „{next.lesson.title}“ ist noch gesperrt. Er öffnet sich, sobald
            dieser Abschnitt abgeschlossen ist.
          </p>
        ) : null}
      </footer>
    </article>
  );
}

function UnitEnd({
  course,
  reader,
  progress,
  followingUnit,
  onOpenUnit,
}: Pick<ReaderViewProps, 'course' | 'reader' | 'progress' | 'onOpenUnit'> & {
  followingUnit: ReturnType<typeof nextUnit>;
}) {
  const allDone = reader.sections.every((item) => item.state === 'complete');
  if (!followingUnit) {
    return (
      <div className="reader-unit-end" role="status">
        <strong>{allDone ? 'Du hast das letzte veröffentlichte Kapitel durchgelesen.' : 'Ende des Kapitels.'}</strong>
      </div>
    );
  }
  const firstOfNext = followingUnit.lessons.find((lesson) => lesson.status === 'published');
  const hint = lockHint(course, followingUnit, progress);
  const nextOpen = firstOfNext && hint.locked?.lesson.id !== firstOfNext.id;
  return (
    <div className="reader-unit-end" role="status">
      <strong>Ende von {reader.unit.label}.</strong>
      {nextOpen ? (
        <button type="button" className="primary-button" onClick={() => onOpenUnit(followingUnit.id)}>
          Weiterlesen: {followingUnit.label} · {followingUnit.title}
        </button>
      ) : (
        <>
          <p>{followingUnit.label} ist noch gesperrt.</p>
          <LockMessage hint={hint} onOpenUnit={onOpenUnit} />
        </>
      )}
    </div>
  );
}

function ReaderStep({
  step,
  progress,
  onAnswer,
  onRetry,
  onReveal,
  onResolved,
}: {
  step: LessonStep;
  progress: AcademyProgress;
  onAnswer: ReaderViewProps['onAnswer'];
  onRetry: ReaderViewProps['onRetry'];
  onReveal: ReaderViewProps['onReveal'];
  onResolved: () => void;
}) {
  if (step.type === 'explanation') return <ExplanationStep step={step} level={3} />;
  if (step.type === 'diagram') return <DiagramStep step={step} level={3} />;
  if (step.type === 'comparison') return <ComparisonStep step={step} level={3} />;
  if (step.type === 'recap') return <RecapStep step={step} level={3} />;
  return (
    <QuestionStep
      step={step}
      state={questionView(step, progress)}
      onAnswer={(optionId) => onAnswer(step, optionId)}
      onRetry={() => onRetry(step)}
      onReveal={() => onReveal(step)}
      onResolved={onResolved}
      level={3}
    />
  );
}

import { useEffect, useRef } from 'react';
import type { LessonOutline } from '../content/types';
import type { BarCase } from '../content/barCaseTypes';
import type { LessonSummary } from '../features/lessonResults';
import { CaseLinks } from './CaseTraining';

interface LessonResultViewProps {
  lesson: LessonOutline;
  summary: LessonSummary;
  onRepeat: () => void;
  onBackToPath: () => void;
  /** Beschriftung des Rückwegs, z. B. „Zurück zum Üben“ (Standard: Lernpfad). */
  backLabel?: string;
  /** Nächste freigeschaltete Lektion – nur dann gibt es „Weiter: …“. */
  nextLesson?: LessonOutline;
  onNext?: (lesson: LessonOutline) => void;
  /** Passende, zugängliche Bar-für-Bar-Fälle (F-15). */
  trainingCases?: BarCase[];
  onTrain?: (caseId: string) => void;
}

export function LessonResultView({
  lesson,
  summary,
  onRepeat,
  onBackToPath,
  backLabel = 'Zurück zum Lernpfad',
  nextLesson,
  onNext,
  trainingCases = [],
  onTrain = () => {},
}: LessonResultViewProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    headingRef.current?.focus();
  }, []);

  const rateLabel =
    summary.firstAttemptRate === null
      ? 'Nicht erfasst'
      : `${summary.firstAttemptRate} %`;

  return (
    <main className="lesson-player lesson-result">
      <div className="lesson-stage">
        <div className="lesson-meta">
          <span>{lesson.sourceUnit}</span>
          <span>Auswertung</span>
        </div>

        <article className="step-copy result-copy">
          <div className="recap-seal" aria-hidden="true">✓</div>
          <p className="eyebrow">
            {summary.repeated ? 'Wiederholung abgeschlossen' : 'Lektion abgeschlossen'}
          </p>
          <h1 tabIndex={-1} ref={headingRef}>
            {lesson.title}
          </h1>

          <dl className="result-stats">
            <div>
              <dt>Beantwortete Fragen</dt>
              <dd>
                {summary.answeredCount} von {summary.questionCount}
              </dd>
            </div>
            <div>
              <dt>Richtig im ersten Versuch</dt>
              <dd>{rateLabel}</dd>
              {summary.firstAttemptKnown > 0 ? (
                <dd className="result-stat-note">
                  <small>
                    {summary.firstAttemptCorrect} von {summary.firstAttemptKnown} Fragen
                  </small>
                </dd>
              ) : null}
            </div>
            <div>
              <dt>Status</dt>
              <dd>{summary.completed ? 'Abgeschlossen' : 'Offen'}</dd>
            </div>
            <div>
              <dt>Verdiente XP</dt>
              <dd>+{summary.xpEarnedThisRun} XP</dd>
              {summary.repeated ? (
                <dd className="result-stat-note">
                  <small>
                    Die {summary.xpAwarded} XP dieser Lektion wurden bereits beim ersten
                    Abschluss gutgeschrieben.
                  </small>
                </dd>
              ) : null}
            </div>
          </dl>

          {summary.legacyQuestionCount > 0 ? (
            <p className="result-note">
              Für {summary.legacyQuestionCount === 1 ? 'eine Frage' : `${summary.legacyQuestionCount} Fragen`}{' '}
              liegen aus einer älteren Version keine Versuchsdaten vor. Sie zählen nicht in die
              Erstversuch-Quote.
            </p>
          ) : null}
          {summary.firstAttemptRate !== null && summary.firstAttemptRate < 100 ? (
            <p className="result-note">
              Fehler gehören zum Lernen. Die nächste Lektion bleibt unabhängig von der Quote
              freigeschaltet.
            </p>
          ) : null}
          <CaseLinks cases={trainingCases} onTrain={onTrain} />
        </article>
      </div>

      <footer className="lesson-footer">
        <button className="secondary-button" type="button" onClick={onRepeat}>
          Lektion wiederholen
        </button>
        {nextLesson && onNext ? (
          <button className="secondary-button" type="button" onClick={onBackToPath}>
            {backLabel}
          </button>
        ) : null}
        <button
          className="primary-button"
          type="button"
          onClick={nextLesson && onNext ? () => onNext(nextLesson) : onBackToPath}
        >
          {nextLesson && onNext ? `Weiter: ${nextLesson.title}` : backLabel}
        </button>
      </footer>
    </main>
  );
}

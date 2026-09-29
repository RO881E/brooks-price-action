import { useEffect, useMemo, useRef, useState } from 'react';
import type { Course } from '../content/types';
import type { QuestionStep } from '../features/lessonResults';
import type { AcademyProgress, ReviewMode, ReviewSession } from '../features/progress';
import {
  currentSessionItem,
  isSessionFinished,
  REVIEW_SESSION_SIZE,
  reviewOverview,
  reviewPool,
  sessionSummary,
  type ReviewItem,
} from '../features/reviewSession';
import { daysBetween, REVIEW_INTERVALS, type DayKey } from '../features/reviewScheduler';
import { moveAnswerFocus } from './answerKeys';

const modeLabels: Record<ReviewMode, string> = {
  due: 'Heute fällig',
  mistakes: 'Fehler trainieren',
  unit: 'Kapitel auswählen',
  mixed: 'Alles mischen',
};

function formatDay(day: DayKey): string {
  const [year, month, date] = day.split('-');
  return `${date}.${month}.${year}`;
}

/** „morgen“, „in 3 Tagen“ – bezogen auf lokale Kalendertage. */
export function relativeDayLabel(day: DayKey, today: DayKey): string {
  const distance = daysBetween(today, day);
  if (distance <= 0) return 'heute';
  if (distance === 1) return 'morgen';
  return `in ${distance} Tagen (${formatDay(day)})`;
}

interface PracticeViewProps {
  course: Course;
  progress: AcademyProgress;
  today: DayKey;
  onStart: (mode: ReviewMode, unitId?: string) => void;
  onAnswer: (question: QuestionStep, optionId: string) => void;
  onNext: () => void;
  onEnd: () => void;
}

export function PracticeView({
  course,
  progress,
  today,
  onStart,
  onAnswer,
  onNext,
  onEnd,
}: PracticeViewProps) {
  const items = useMemo(() => reviewPool(course, progress), [course, progress]);
  const session = progress.reviewSession;

  return (
    <div className="page-shell practice-page">
      <header className="page-heading practice-heading">
        <div>
          <p className="eyebrow">Wiederholung ohne Bestrafung</p>
          <h1>Analyse-Training</h1>
          <p>
            Wiederhole, was fällig ist, trainiere gezielt deine Fehler oder übe ein Kapitel. Jede
            Antwort wird direkt erklärt.
          </p>
        </div>
      </header>

      {session && !isSessionFinished(session) ? (
        <SessionQuestion
          session={session}
          items={items}
          progress={progress}
          today={today}
          onAnswer={onAnswer}
          onNext={onNext}
          onEnd={onEnd}
        />
      ) : session ? (
        <SessionResult
          course={course}
          session={session}
          items={items}
          progress={progress}
          today={today}
          onStart={onStart}
          onEnd={onEnd}
        />
      ) : (
        <ReviewStart
          course={course}
          items={items}
          progress={progress}
          today={today}
          onStart={onStart}
        />
      )}
    </div>
  );
}

function ReviewStart({
  course,
  items,
  progress,
  today,
  onStart,
}: {
  course: Course;
  items: ReviewItem[];
  progress: AcademyProgress;
  today: DayKey;
  onStart: (mode: ReviewMode, unitId?: string) => void;
}) {
  const overview = useMemo(
    () => reviewOverview(course, items, progress, today),
    [course, items, progress, today],
  );
  const [unitId, setUnitId] = useState('');
  const selectedUnit = overview.units.some(({ unit }) => unit.id === unitId)
    ? unitId
    : (overview.units[0]?.unit.id ?? '');

  if (overview.total === 0) {
    return (
      <div className="empty-state practice-empty-state">
        <strong>Dein Training füllt sich mit dem Lernpfad</strong>
        <p>
          Schließe zuerst eine Lektion ab. Danach kannst du ihre Fragen hier wiederholen – im
          richtigen Abstand, damit sie hängen bleiben.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="review-modes">
        <section className="review-mode-card">
          <h2>{modeLabels.due}</h2>
          {overview.due > 0 ? (
            <>
              <p>
                <strong>{overview.due}</strong> {overview.due === 1 ? 'Frage ist' : 'Fragen sind'}{' '}
                heute dran.
              </p>
              <button className="primary-button" type="button" onClick={() => onStart('due')}>
                Fällige Fragen üben
              </button>
            </>
          ) : (
            <p className="review-done" role="status">
              Für heute ist alles wiederholt.
              {overview.nextDueDay
                ? ` Nächste Wiederholung ${relativeDayLabel(overview.nextDueDay, today)}.`
                : ''}
            </p>
          )}
        </section>

        <section className="review-mode-card">
          <h2>{modeLabels.mistakes}</h2>
          {overview.mistakes > 0 ? (
            <>
              <p>
                <strong>{overview.mistakes}</strong>{' '}
                {overview.mistakes === 1 ? 'Frage wartet' : 'Fragen warten'} auf einen richtigen
                Versuch.
              </p>
              <button
                className="primary-button"
                type="button"
                onClick={() => onStart('mistakes')}
              >
                Fehler trainieren
              </button>
            </>
          ) : (
            <p className="review-done">Keine offenen Fehler – stark.</p>
          )}
        </section>

        <section className="review-mode-card">
          <h2>{modeLabels.unit}</h2>
          <label className="review-select">
            <span>Kapitel</span>
            <select value={selectedUnit} onChange={(event) => setUnitId(event.target.value)}>
              {overview.units.map(({ unit, count }) => (
                <option key={unit.id} value={unit.id}>
                  {unit.label} · {unit.title} ({count})
                </option>
              ))}
            </select>
          </label>
          <button
            className="secondary-button"
            type="button"
            onClick={() => onStart('unit', selectedUnit)}
          >
            Kapitel üben
          </button>
        </section>

        <section className="review-mode-card">
          <h2>{modeLabels.mixed}</h2>
          <p>
            Bis zu {REVIEW_SESSION_SIZE} zufällige Fragen aus {overview.total} abgeschlossenen.
          </p>
          <button className="secondary-button" type="button" onClick={() => onStart('mixed')}>
            Gemischte Runde
          </button>
        </section>
      </div>

      <aside className="review-explainer">
        <strong>So plant die Wiederholung</strong>
        <p>
          Neue Fragen kommen am Tag nach der Lektion. Jede richtige Antwort am Fälligkeitstag
          verlängert den Abstand ({REVIEW_INTERVALS.join(', ')} Tage). Eine falsche Antwort holt
          die Frage auf morgen zurück. Wer früher übt, verschiebt den Plan nicht.
        </p>
      </aside>
    </>
  );
}

function SessionQuestion({
  session,
  items,
  progress,
  today,
  onAnswer,
  onNext,
  onEnd,
}: {
  session: ReviewSession;
  items: ReviewItem[];
  progress: AcademyProgress;
  today: DayKey;
  onAnswer: (question: QuestionStep, optionId: string) => void;
  onNext: () => void;
  onEnd: () => void;
}) {
  const item = currentSessionItem(session, items);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const nextButton = useRef<HTMLButtonElement>(null);
  const answeredHere = useRef(false);

  useEffect(() => {
    headingRef.current?.focus();
  }, [session.index]);

  const answeredNow = item ? session.answers[item.question.id] !== undefined : false;
  // Die Antworten werden nach der Wahl gesperrt – der Fokus geht zu „Weiter“.
  useEffect(() => {
    if (!answeredNow || !answeredHere.current) return;
    answeredHere.current = false;
    nextButton.current?.focus();
  }, [answeredNow]);

  if (!item) return null;

  const { question } = item;
  const answer = session.answers[question.id];
  const answered = answer !== undefined;
  const correct = answer === question.correctOptionId;
  const chosen = question.options.find((option) => option.id === answer);
  const solution = question.options.find((option) => option.id === question.correctOptionId);
  const card = progress.reviewCards[question.id];
  const position = session.index + 1;
  const isLast = position === session.questionIds.length;

  return (
    <>
      <div className="review-session-bar">
        <span>{modeLabels[session.mode]}</span>
        <div
          className="review-progress"
          role="progressbar"
          aria-label="Fortschritt der Runde"
          aria-valuemin={0}
          aria-valuemax={session.questionIds.length}
          aria-valuenow={session.index + (answered ? 1 : 0)}
        >
          <span
            style={{
              width: `${((session.index + (answered ? 1 : 0)) / session.questionIds.length) * 100}%`,
            }}
          />
        </div>
        <button className="text-button" type="button" onClick={onEnd}>
          Runde beenden
        </button>
      </div>

      <article className="practice-card">
        <span className="question-number">
          Frage {position} / {session.questionIds.length} · {item.lesson.title}
        </span>
        <h2 tabIndex={-1} ref={headingRef}>
          {question.title}
        </h2>
        <p>{question.prompt}</p>

        <div
          className="practice-options"
          role="radiogroup"
          aria-label={question.prompt}
          onKeyDown={moveAnswerFocus}
        >
          {question.options.map((option, optionIndex) => {
            const isCorrect = option.id === question.correctOptionId;
            const selected = answer === option.id;
            const state = answered
              ? isCorrect
                ? 'correct'
                : selected
                  ? 'incorrect'
                  : 'muted'
              : '';

            return (
              <button
                type="button"
                role="radio"
                aria-checked={selected}
                className={state}
                disabled={answered}
                key={option.id}
                onClick={() => {
                  answeredHere.current = true;
                  onAnswer(question, option.id);
                }}
              >
                <span>{String.fromCharCode(65 + optionIndex)}</span>
                <strong>{option.label}</strong>
                {/* Symbol und Text zusätzlich zur Farbe. */}
                {answered && isCorrect ? (
                  <b className="option-mark">
                    <span aria-hidden="true">✓</span>
                    <span className="visually-hidden"> – richtige Antwort</span>
                  </b>
                ) : null}
                {answered && selected && !isCorrect ? (
                  <b className="option-mark">
                    <span aria-hidden="true">×</span>
                    <span className="visually-hidden"> – falsche Antwort</span>
                  </b>
                ) : null}
              </button>
            );
          })}
        </div>

        {answered && chosen ? (
          <div className={`practice-feedback ${correct ? 'correct' : 'incorrect'}`} role="status">
            <strong>{correct ? 'Sauber analysiert.' : 'Schau auf den Kontext.'}</strong>
            <p>{chosen.explanation}</p>
            {!correct && solution ? (
              <p>
                <em>Richtig ist „{solution.label}“:</em> {solution.explanation}
              </p>
            ) : null}
            {card ? (
              <p className="review-next">
                Nächste Wiederholung {relativeDayLabel(card.dueDay, today)}.
              </p>
            ) : null}
          </div>
        ) : null}

        <div className="practice-actions">
          <span />
          <button
            ref={nextButton}
            type="button"
            className="primary-button"
            disabled={!answered}
            onClick={onNext}
          >
            {isLast ? 'Auswertung anzeigen' : 'Nächste Frage'}
          </button>
        </div>
      </article>
    </>
  );
}

function SessionResult({
  course,
  session,
  items,
  progress,
  today,
  onStart,
  onEnd,
}: {
  course: Course;
  session: ReviewSession;
  items: ReviewItem[];
  progress: AcademyProgress;
  today: DayKey;
  onStart: (mode: ReviewMode, unitId?: string) => void;
  onEnd: () => void;
}) {
  const summary = sessionSummary(session, items);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const remaining = reviewOverview(course, items, progress, today);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <article className="practice-card review-result">
      <span className="question-number">Runde abgeschlossen · {modeLabels[session.mode]}</span>
      <h2 tabIndex={-1} ref={headingRef}>
        {summary.correct} von {summary.total} richtig
      </h2>

      <ul className="review-result-list">
        {summary.entries.map(({ item, correct }) => (
          <li key={item.question.id} className={correct ? 'correct' : 'incorrect'}>
            <b aria-label={correct ? 'richtig' : 'falsch'}>{correct ? '✓' : '×'}</b>
            <span>
              <strong>{item.question.title}</strong>
              <small>{item.lesson.title}</small>
            </span>
          </li>
        ))}
      </ul>

      <p className="review-done">
        {remaining.due > 0
          ? `Heute ${remaining.due === 1 ? 'ist noch 1 Frage' : `sind noch ${remaining.due} Fragen`} fällig.`
          : 'Für heute ist nichts mehr fällig.'}{' '}
        Falsch beantwortete Fragen kommen morgen wieder.
      </p>

      <div className="practice-actions">
        {remaining.mistakes > 0 ? (
          <button className="secondary-button" type="button" onClick={() => onStart('mistakes')}>
            Fehler trainieren
          </button>
        ) : (
          <span />
        )}
        <button className="primary-button" type="button" onClick={onEnd}>
          Zur Übersicht
        </button>
      </div>
    </article>
  );
}

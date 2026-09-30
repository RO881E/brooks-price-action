import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { loadedQuestion, useLessonContent } from '../content/catalog';
import type { CourseOutline, LessonOutline } from '../content/types';
import {
  BLITZ_MIN_QUESTIONS,
  BLITZ_SECONDS,
  blitzQuestions,
  blitzSummary,
  timerAnnouncement,
  type BlitzResult,
} from '../features/blitz';
import type { AcademyProgress } from '../features/progress';
import { reviewPool } from '../features/reviewSession';
import { Bull, BullSays } from './Bull';
import { ContentLoadState } from './ContentLoadState';
import { FeedbackCue } from './FeedbackCue';

type Phase = 'idle' | 'playing' | 'result';

/**
 * Blitzrunde (Stufe 4c): freiwillig, mit zuschaltbarer Zeit („Ohne Zeit spielen“ ist gleichwertig),
 * jederzeit pausierbar. Reine Übung: nichts wird gespeichert, kein Einfluss auf Wiederholungsplan,
 * XP, Serie oder Lernstand.
 */
export function BlitzGame({
  course,
  progress,
  onOpenLesson,
}: {
  course: CourseOutline;
  progress: AcademyProgress;
  onOpenLesson?: (lesson: LessonOutline) => void;
}) {
  const ids = useId();
  const pool = useMemo(() => reviewPool(course, progress), [course, progress]);
  const [phase, setPhase] = useState<Phase>('idle');
  const [seed, setSeed] = useState(1);
  const [timed, setTimed] = useState(true);
  const [index, setIndex] = useState(0);
  const [chosen, setChosen] = useState<string | null>(null);
  const [results, setResults] = useState<BlitzResult[]>([]);
  const [remaining, setRemaining] = useState(BLITZ_SECONDS);
  const [paused, setPaused] = useState(false);
  const [announcement, setAnnouncement] = useState('');
  const questions = useMemo(() => (phase === 'idle' ? [] : blitzQuestions(pool, seed)), [phase, pool, seed]);
  const content = useLessonContent(questions.map((item) => item.lesson.id));
  const ready = content.status === 'ready';
  const heading = useRef<HTMLHeadingElement>(null);
  const nextButton = useRef<HTMLButtonElement>(null);

  // Zeitgeber: läuft nur mit Zeit, geladenen Fragen und ohne Pause.
  useEffect(() => {
    if (phase !== 'playing' || !timed || !ready || paused) return;
    const timer = window.setInterval(() => setRemaining((seconds) => Math.max(0, seconds - 1)), 1000);
    return () => window.clearInterval(timer);
  }, [phase, timed, ready, paused]);

  useEffect(() => {
    if (phase !== 'playing' || !timed) return;
    const text = timerAnnouncement(remaining);
    if (text) setAnnouncement(text);
    if (remaining === 0) setPhase('result');
  }, [remaining, phase, timed]);

  useEffect(() => {
    if (phase === 'result') heading.current?.focus();
  }, [phase]);

  const start = (withTime: boolean) => {
    setSeed(Date.now() % 2147483647);
    setTimed(withTime);
    setIndex(0);
    setChosen(null);
    setResults([]);
    setRemaining(BLITZ_SECONDS);
    setPaused(false);
    setAnnouncement('');
    setPhase('playing');
  };

  const enough = pool.length >= BLITZ_MIN_QUESTIONS;

  if (phase === 'idle') {
    return (
      <section className="topic-practice blitz-game" aria-labelledby={`${ids}-title`}>
        <h2 id={`${ids}-title`}>Blitzrunde</h2>
        <p className="topic-intro">
          Bis zu 10 Fragen aus deinen abgeschlossenen Lektionen, freiwillig und ohne Bewertung. Es zählt nichts, ändert
          weder Wiederholungsplan noch Lernstand und wird nicht gespeichert. Du kannst mit 60 Sekunden oder ganz ohne
          Zeit spielen.
        </p>
        {enough ? (
          <div className="topic-actions">
            <button type="button" className="primary-button" onClick={() => start(true)}>
              Mit 60 Sekunden
            </button>
            <button type="button" className="secondary-button" onClick={() => start(false)}>
              Ohne Zeit spielen
            </button>
          </div>
        ) : (
          <p className="topic-facts">
            Noch {pool.length} von mindestens {BLITZ_MIN_QUESTIONS} Fragen bereit. Schließe weitere Lektionen ab, dann
            schaltet sich die Blitzrunde frei.
          </p>
        )}
      </section>
    );
  }

  if (phase === 'result' || index >= questions.length) {
    const summary = blitzSummary(results);
    return (
      <section className="topic-practice blitz-game" aria-labelledby={`${ids}-title`}>
        <FeedbackCue kind="complete" mode="mount" active={summary.answered > 0} />
        <h2 id={`${ids}-title`} tabIndex={-1} ref={heading}>
          Blitzrunde beendet
        </h2>
        <p className="blitz-score">
          {summary.answered === 0
            ? 'Diesmal wurde keine Frage beantwortet.'
            : `${summary.correct} von ${summary.answered} beantworteten Fragen richtig.`}
        </p>
        {summary.answered > 0 ? (
          <BullSays mood={summary.wrong.length === 0 ? 'cheer' : 'happy'}>
            {summary.wrong.length === 0
              ? 'Alles richtig – das saß!'
              : 'Gut gemacht! Bei ein paar Fragen lohnt ein zweiter Blick.'}
          </BullSays>
        ) : null}
        {summary.wrong.length > 0 ? (
          <ul className="blitz-wrong" aria-label="Zum Nachlesen">
            {summary.wrong.map(({ item }) => (
              <li key={item.question.id}>
                <span>
                  <strong>{item.question.title}</strong>
                  <small>{item.lesson.title}</small>
                </span>
                {onOpenLesson ? (
                  <button
                    type="button"
                    className="link-button"
                    aria-label={`Lektion öffnen: ${item.lesson.title}`}
                    onClick={() => onOpenLesson(item.lesson)}
                  >
                    Lektion öffnen
                  </button>
                ) : null}
              </li>
            ))}
          </ul>
        ) : null}
        <div className="topic-actions">
          <button type="button" className="primary-button" onClick={() => start(timed)}>
            Noch eine Runde
          </button>
          <button type="button" className="secondary-button" onClick={() => setPhase('idle')}>
            Fertig
          </button>
        </div>
        <p className="match-note">Nichts davon wird gespeichert.</p>
      </section>
    );
  }

  const item = questions[index];
  const question = loadedQuestion(item.lesson.id, item.question.id);
  const answered = chosen !== null;
  const correct = answered && chosen === question?.correctOptionId;
  const picked = question?.options.find((option) => option.id === chosen);
  const solution = question?.options.find((option) => option.id === question.correctOptionId);
  const last = index === questions.length - 1;

  const answer = (optionId: string) => {
    if (!question || answered) return;
    setChosen(optionId);
    setResults((current) => [...current, { item, correct: optionId === question.correctOptionId }]);
    window.setTimeout(() => nextButton.current?.focus(), 0);
  };

  const next = () => {
    if (last) {
      setPhase('result');
      return;
    }
    setIndex(index + 1);
    setChosen(null);
    window.setTimeout(() => heading.current?.focus(), 0);
  };

  return (
    <section className="topic-practice blitz-game playing" aria-labelledby={`${ids}-title`}>
      <FeedbackCue kind="correct" active={correct} />
      <div className="blitz-head">
        <h2 id={`${ids}-title`}>Blitzrunde</h2>
        <span className="question-number">
          Frage {index + 1} / {questions.length}
        </span>
        {timed ? (
          <span className={`blitz-timer${paused ? ' paused' : ''}`} aria-hidden="true">
            {paused ? 'Pause' : `${remaining} s`}
          </span>
        ) : (
          <span className="blitz-timer untimed">ohne Zeit</span>
        )}
      </div>
      <p className="visually-hidden" role="status">
        {announcement}
      </p>

      {!question ? (
        <ContentLoadState
          status={content.status}
          what="Die Frage"
          onRetry={content.retry}
          onBack={() => setPhase('idle')}
          backLabel="Runde beenden"
        />
      ) : (
        <>
          <h3 tabIndex={-1} ref={heading}>
            {question.title}
          </h3>
          <p>{question.prompt}</p>
          <div className="blitz-options" role="radiogroup" aria-label={question.prompt}>
            {question.options.map((option, optionIndex) => {
              const isCorrect = option.id === question.correctOptionId;
              const state = answered ? (isCorrect ? 'correct' : option.id === chosen ? 'incorrect' : 'muted') : '';
              return (
                <button
                  type="button"
                  role="radio"
                  aria-checked={option.id === chosen}
                  key={option.id}
                  className={`blitz-option ${state}`}
                  disabled={answered || paused}
                  onClick={() => answer(option.id)}
                >
                  <span aria-hidden="true">{String.fromCharCode(65 + optionIndex)}</span>
                  <strong>{option.label}</strong>
                  {answered && isCorrect ? <span className="visually-hidden"> – richtige Antwort</span> : null}
                  {answered && option.id === chosen && !isCorrect ? <span className="visually-hidden"> – falsche Antwort</span> : null}
                </button>
              );
            })}
          </div>
          {answered && picked ? (
            <div className={`practice-feedback with-bull ${correct ? 'correct' : 'incorrect'}`} role="status">
              <Bull mood={correct ? 'cheer' : 'think'} size={44} />
              <strong>{correct ? 'Richtig.' : 'Nicht ganz.'}</strong>
              <p>{picked.explanation}</p>
              {!correct && solution ? (
                <p>
                  <em>Richtig ist „{solution.label}“:</em> {solution.explanation}
                </p>
              ) : null}
            </div>
          ) : null}
        </>
      )}

      <div className="topic-actions">
        {answered ? (
          <button type="button" className="primary-button" ref={nextButton} onClick={next}>
            {last ? 'Ergebnis anzeigen' : 'Nächste Frage'}
          </button>
        ) : null}
        {timed ? (
          <button type="button" className="secondary-button" onClick={() => setPaused((value) => !value)}>
            {paused ? 'Weiter mit Zeit' : 'Pause'}
          </button>
        ) : null}
        <button type="button" className="secondary-button" onClick={() => setPhase('result')}>
          Beenden
        </button>
      </div>
    </section>
  );
}

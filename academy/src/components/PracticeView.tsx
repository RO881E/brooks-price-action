import { useMemo, useState } from 'react';
import type { Course, LessonStep } from '../content/types';

type QuestionStep = Extract<LessonStep, { type: 'question' }>;

export function PracticeView({
  course,
  completedLessonIds,
}: {
  course: Course;
  completedLessonIds: string[];
}) {
  const completed = useMemo(() => new Set(completedLessonIds), [completedLessonIds]);
  const questions = useMemo(
    () =>
      course.units
        .flatMap((unit) => unit.lessons)
        .filter((lesson) => lesson.status === 'published' && completed.has(lesson.id))
        .flatMap((lesson) => lesson.steps)
        .filter((step): step is QuestionStep => step.type === 'question'),
    [completed, course],
  );
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const question = questions[index];
  const answer = question ? answers[question.id] : undefined;
  const correctCount = questions.filter(
    (candidate) => answers[candidate.id] === candidate.correctOptionId,
  ).length;

  return (
    <div className="page-shell practice-page">
      <header className="page-heading practice-heading">
        <div>
          <p className="eyebrow">Wiederholung ohne Bestrafung</p>
          <h1>Analyse-Training</h1>
          <p>Beantworte die Frage und lies die Begründung – auch wenn du richtig liegst.</p>
        </div>
        <div className="practice-score">
          <strong>{correctCount}</strong>
          <span>richtig von {Object.keys(answers).length}</span>
        </div>
      </header>

      {!question ? (
        <div className="empty-state practice-empty-state">
          <strong>Dein Training füllt sich mit dem Lernpfad</strong>
          <p>
            Schließe zuerst eine Lektion ab. Danach kannst du ihre Kernfrage hier gezielt
            wiederholen.
          </p>
        </div>
      ) : (
        <>
          <div
            className="practice-progress"
            aria-label={`Frage ${index + 1} von ${questions.length}`}
          >
            {questions.map((candidate, candidateIndex) => (
              <span
                key={candidate.id}
                className={
                  candidateIndex === index ? 'active' : answers[candidate.id] ? 'done' : ''
                }
              />
            ))}
          </div>

          <article className="practice-card">
            <span className="question-number">
              Frage {index + 1} / {questions.length}
            </span>
            <h2>{question.title}</h2>
            <p>{question.prompt}</p>

            <div className="practice-options">
              {question.options.map((option, optionIndex) => {
                const isCorrect = option.id === question.correctOptionId;
                const selected = answer === option.id;
                const state = answer
                  ? isCorrect
                    ? 'correct'
                    : selected
                      ? 'incorrect'
                      : 'muted'
                  : '';

                return (
                  <button
                    type="button"
                    className={state}
                    disabled={Boolean(answer)}
                    key={option.id}
                    onClick={() =>
                      setAnswers((current) => ({ ...current, [question.id]: option.id }))
                    }
                  >
                    <span>{String.fromCharCode(65 + optionIndex)}</span>
                    <strong>{option.label}</strong>
                  </button>
                );
              })}
            </div>

            {answer ? (
              <div
                className={`practice-feedback ${answer === question.correctOptionId ? 'correct' : 'incorrect'}`}
              >
                <strong>
                  {answer === question.correctOptionId
                    ? 'Sauber analysiert.'
                    : 'Schau auf den Kontext.'}
                </strong>
                <p>{question.options.find((option) => option.id === answer)?.explanation}</p>
              </div>
            ) : null}

            <div className="practice-actions">
              <button
                type="button"
                className="secondary-button"
                disabled={index === 0}
                onClick={() => setIndex((current) => Math.max(0, current - 1))}
              >
                Vorherige
              </button>
              <button
                type="button"
                className="primary-button"
                disabled={!answer}
                onClick={() => setIndex((current) => (current + 1) % questions.length)}
              >
                Nächste Frage
              </button>
            </div>
          </article>
        </>
      )}
    </div>
  );
}

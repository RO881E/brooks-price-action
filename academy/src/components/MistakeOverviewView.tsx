import { useId, useMemo, useState } from 'react';
import { TRADE_DECISION_LABELS } from '../content/barCaseTypes';
import { loadedQuestion, useLessonContent } from '../content/catalog';
import type { CourseOutline, LessonOutline } from '../content/types';
import {
  accessibleLesson,
  filterMistakes,
  type CaseMistake,
  type MistakeFilter,
  type MistakeOverview,
  type QuestionMistake,
} from '../features/mistakeInsights';
import type { AcademyProgress } from '../features/progress';
import { VERDICT_LABELS } from './TrainerView';

/** Zunächst sichtbare Einträge; der Rest über „Weitere anzeigen“. */
const INITIAL_VISIBLE = 6;

function times(count: number): string {
  return count === 1 ? 'einmal' : `${count}-mal`;
}

interface Props {
  course: CourseOutline;
  progress: AcademyProgress;
  overview: MistakeOverview;
  onOpenLesson: (lesson: LessonOutline) => void;
  onPracticeQuestions: (questionIds: string[]) => void;
  onTrain: (caseId: string) => void;
}

/**
 * „Was ich noch verwechsle“ (F-16): sachliche Liste erfasster Fehler aus
 * Lektionsfragen, Wiederholung und Trainerfällen – mit Häufigkeit, letztem
 * Stand, Lernlink und „Erneut üben“. Keine Diagnosen, keine Prozentwerte.
 */
export function MistakeOverviewView({ course, progress, overview, onOpenLesson, onPracticeQuestions, onTrain }: Props) {
  const ids = useId();
  const [filter, setFilter] = useState<MistakeFilter>('open');
  const [expanded, setExpanded] = useState(false);
  const items = filterMistakes(overview.items, filter);
  const visible = expanded ? items : items.slice(0, INITIAL_VISIBLE);
  // Antworttexte der sichtbaren Fragen nachladen (kapitelweise, auch offline aus dem Cache).
  const lessonIds = useMemo(
    () => [...new Set(visible.flatMap((item) => (item.kind === 'question' ? [item.lesson.id] : [])))],
    [visible],
  );
  useLessonContent(lessonIds);
  const openQuestionIds = overview.items.flatMap((item) =>
    item.kind === 'question' && item.state === 'open' ? [item.question.id] : [],
  );

  const notes = [
    overview.unknownFirstAttempts
      ? `${overview.unknownFirstAttempts === 1 ? 'Eine Frage' : `${overview.unknownFirstAttempts} Fragen`} aus einem älteren Stand ${overview.unknownFirstAttempts === 1 ? 'hat' : 'haben'} keinen erfassten Erstversuch und ${overview.unknownFirstAttempts === 1 ? 'zählt' : 'zählen'} nicht als Fehler.`
      : '',
    overview.runsWithoutAnswers
      ? `${overview.runsWithoutAnswers === 1 ? 'Eine ältere Trainerrunde' : `${overview.runsWithoutAnswers} ältere Trainerrunden`} ohne gespeicherte Einzelantworten ${overview.runsWithoutAnswers === 1 ? 'wird' : 'werden'} nicht ausgewertet.`
      : '',
    overview.runsOfUnknownCases
      ? `${overview.runsOfUnknownCases === 1 ? 'Eine Runde gehört' : `${overview.runsOfUnknownCases} Runden gehören`} zu einem Fall, der nicht mehr angeboten wird.`
      : '',
  ].filter(Boolean);

  return (
    <section className="mistake-overview" aria-labelledby={`${ids}-title`}>
      <h2 id={`${ids}-title`}>Was ich noch verwechsle</h2>
      <p className="mistake-intro">
        Erfasste Fehler aus Lektionsfragen, Wiederholungen und Chart-Trainings – mit Häufigkeit, letztem
        Stand und dem Weg zurück zur Erklärung.
      </p>

      {overview.items.length === 0 ? (
        <div className="empty-state">
          <strong>Noch keine Fehler erfasst</strong>
          <p>Sobald du eine Frage oder Trainerentscheidung verfehlst, erscheint sie hier.</p>
        </div>
      ) : (
        <>
          <div className="mistake-toolbar">
            <fieldset className="mistake-filter">
              <legend className="visually-hidden">Anzeigen</legend>
              <label>
                <input type="radio" name={`${ids}-filter`} checked={filter === 'open'} onChange={() => setFilter('open')} />
                <span>Noch offen ({overview.open})</span>
              </label>
              <label>
                <input type="radio" name={`${ids}-filter`} checked={filter === 'all'} onChange={() => setFilter('all')} />
                <span>Alle ({overview.items.length})</span>
              </label>
            </fieldset>
            {openQuestionIds.length > 1 ? (
              <button type="button" className="secondary-button" onClick={() => onPracticeQuestions(openQuestionIds)}>
                Offene Fragen üben ({Math.min(openQuestionIds.length, 10)})
              </button>
            ) : null}
          </div>

          {items.length === 0 ? (
            <p className="mistake-empty" role="status">
              Keine offenen Fehler – alles Erfasste hast du später richtig gelöst.
            </p>
          ) : (
            <ul className="mistake-list">
              {visible.map((item) => (
                <li key={item.key}>
                  {item.kind === 'question' ? (
                    <QuestionCard
                      course={course}
                      progress={progress}
                      item={item}
                      onOpenLesson={onOpenLesson}
                      onPractice={() => onPracticeQuestions([item.question.id])}
                    />
                  ) : (
                    <CaseCard course={course} progress={progress} item={item} onOpenLesson={onOpenLesson} onTrain={onTrain} />
                  )}
                </li>
              ))}
            </ul>
          )}
          {items.length > INITIAL_VISIBLE ? (
            <button type="button" className="link-button mistake-more" onClick={() => setExpanded((value) => !value)}>
              {expanded ? 'Weniger anzeigen' : `Weitere anzeigen (${items.length - INITIAL_VISIBLE})`}
            </button>
          ) : null}
        </>
      )}

      {notes.length ? (
        <ul className="mistake-notes">
          {notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

function StateBadge({ state }: { state: QuestionMistake['state'] }) {
  return (
    <span className={`mistake-state ${state}`}>
      {state === 'open' ? 'Zuletzt falsch' : 'Später richtig'}
    </span>
  );
}

function QuestionCard({
  course,
  progress,
  item,
  onOpenLesson,
  onPractice,
}: {
  course: CourseOutline;
  progress: AcademyProgress;
  item: QuestionMistake;
  onOpenLesson: (lesson: LessonOutline) => void;
  onPractice: () => void;
}) {
  const full = loadedQuestion(item.lesson.id, item.question.id);
  const lastWrong = item.lessonWrongOptions.at(-1);
  const wrongLabel = lastWrong ? full?.options.find((option) => option.id === lastWrong)?.label : undefined;
  const lesson = item.lessonAccessible ? item.lesson : accessibleLesson(course, progress, item.lesson.id);
  const firstAttempt =
    item.firstAttempt === 'wrong'
      ? 'erster Versuch falsch'
      : item.firstAttempt === 'correct'
        ? 'erster Versuch richtig'
        : 'erster Versuch nicht erfasst (älterer Stand)';
  return (
    <article className="mistake-card" aria-labelledby={`${item.key}-title`}>
      <div className="mistake-card-head">
        <p className="eyebrow">Frage · {item.unit.label}</p>
        <StateBadge state={item.state} />
      </div>
      <h3 id={`${item.key}-title`}>{item.question.title}</h3>
      {full ? <p className="mistake-prompt">{full.prompt}</p> : null}
      <ul className="mistake-facts">
        <li>
          In der Lektion: {firstAttempt}
          {item.revealed ? ', Lösung aufgedeckt' : ''}.
        </li>
        {item.reviews > 0 ? (
          <li>
            In der Wiederholung: {item.reviewWrong} von {item.reviews} Antworten falsch.
          </li>
        ) : null}
        {wrongLabel ? <li>Zuletzt falsch gewählt: „{wrongLabel}“.</li> : null}
        <li>Erfasste falsche Antworten: {item.count}.</li>
      </ul>
      <div className="mistake-actions">
        <button type="button" className="primary-button" onClick={onPractice} aria-label={`Erneut üben: ${item.question.title}`}>
          Erneut üben
        </button>
        {lesson ? (
          <button type="button" className="link-button" onClick={() => onOpenLesson(lesson)}>
            Lektion: {lesson.title}
          </button>
        ) : null}
      </div>
    </article>
  );
}

function CaseCard({
  course,
  progress,
  item,
  onOpenLesson,
  onTrain,
}: {
  course: CourseOutline;
  progress: AcademyProgress;
  item: CaseMistake;
  onOpenLesson: (lesson: LessonOutline) => void;
  onTrain: (caseId: string) => void;
}) {
  const unit = course.units.find((candidate) => candidate.id === item.barCase.unitId);
  const position = item.barCase.decisions.indexOf(item.decision) + 1;
  return (
    <article className="mistake-card" aria-labelledby={`${item.key}-title`}>
      <div className="mistake-card-head">
        <p className="eyebrow">Chart trainieren · {unit?.label ?? item.barCase.unitId}</p>
        <StateBadge state={item.state} />
      </div>
      <h3 id={`${item.key}-title`}>
        {item.barCase.title} · Entscheidung {position}
      </h3>
      <p className="mistake-prompt">{item.decision.prompt}</p>
      <ul className="mistake-facts">
        <li>
          Zuletzt mit Fehler: {TRADE_DECISION_LABELS[item.last.answer.decision]} – {VERDICT_LABELS[item.last.verdict]}.
        </li>
        <li>
          In {item.count} von {item.answeredRuns} {item.answeredRuns === 1 ? 'Runde' : 'Runden'} mit Fehler (
          {times(item.count)}).
        </li>
      </ul>
      {item.last.missed.length ? (
        <>
          <p className="mistake-subhead">Dabei übersehen:</p>
          <ul className="mistake-cues">
            {item.last.missed.map((cue) => {
              const lesson = accessibleLesson(course, progress, cue.lessonId);
              return (
                <li key={cue.id}>
                  <strong>{cue.label}</strong>
                  <span>{cue.explanation}</span>
                  {lesson ? (
                    <button type="button" className="link-button" onClick={() => onOpenLesson(lesson)}>
                      Lektion: {lesson.title}
                    </button>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </>
      ) : null}
      <div className="mistake-actions">
        {item.caseAvailable ? (
          <button
            type="button"
            className="primary-button"
            onClick={() => onTrain(item.barCase.id)}
            aria-label={`Erneut üben: ${item.barCase.title}`}
          >
            Erneut üben
          </button>
        ) : (
          <p className="mistake-locked">Dieser Fall ist derzeit gesperrt.</p>
        )}
      </div>
    </article>
  );
}

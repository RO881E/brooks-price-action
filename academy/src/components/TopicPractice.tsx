import { useId, useMemo } from 'react';
import type { CourseOutline, LessonOutline } from '../content/types';
import type { AcademyProgress } from '../features/progress';
import type { DayKey } from '../features/reviewScheduler';
import { planTopicRound, topicEntries, TOPIC_ROUND_SIZE, type TopicEntry } from '../features/topicPractice';

const STATE_LABEL = { complete: 'abgeschlossen', available: 'freigeschaltet', locked: 'noch gesperrt', planned: 'geplant' } as const;

function plural(count: number, one: string, many: string): string {
  return `${count} ${count === 1 ? one : many}`;
}

function EmptyReason({ entry, onOpenLesson }: { entry: TopicEntry; onOpenLesson: (lesson: LessonOutline) => void }) {
  if (entry.nextLesson) {
    const lesson = entry.nextLesson;
    return (
      <>
        <p>
          Noch keine Frage aus diesem Thema ist freigeschaltet. Die nächste passende Lehrstelle ist
          bereit: „{lesson.title}“.
        </p>
        <button type="button" className="secondary-button" onClick={() => onOpenLesson(lesson)}>
          Lektion starten: {lesson.title}
        </button>
      </>
    );
  }
  const course = entry.courseNextLesson;
  return (
    <>
      <p>
        Die Lehrstellen zu diesem Thema sind noch gesperrt. Sie öffnen sich der Reihe nach, sobald du
        die vorherigen Lektionen abgeschlossen hast.
      </p>
      {course ? (
        <button type="button" className="secondary-button" onClick={() => onOpenLesson(course)}>
          Weiter im Lernpfad: {course.title}
        </button>
      ) : null}
    </>
  );
}

interface Props {
  course: CourseOutline;
  progress: AcademyProgress;
  today: DayKey;
  onStartTopic: (topicId: string, questionIds: string[]) => void;
  onOpenLesson: (lesson: LessonOutline) => void;
  onTrain: (caseId: string) => void;
  /** Öffnet die Transferprüfung (C-02-Fälle werden nie im gewöhnlichen Trainer geöffnet). */
  onOpenTransfer?: () => void;
}

/**
 * „Nach Thema üben“ (F-27): überschaubare Themenliste aus der redaktionellen
 * Themenkarte mit dem, was heute zugänglich ist. Die Runde nutzt die vorhandene
 * Wiederholung; gesperrte Lektionen und Fälle werden nie angeboten.
 */
export function TopicPractice({ course, progress, today, onStartTopic, onOpenLesson, onTrain, onOpenTransfer }: Props) {
  const ids = useId();
  const entries = useMemo(() => topicEntries(course, progress, today), [course, progress, today]);

  return (
    <section className="topic-practice" aria-labelledby={`${ids}-title`}>
      <h2 id={`${ids}-title`}>Nach Thema üben</h2>
      <p className="topic-intro">
        Wähle ein Thema. Die Runde nutzt nur Fragen aus Lektionen, die du schon abgeschlossen hast;
        Fälligkeit, XP und Lernstand bleiben wie bei jeder Wiederholung.
      </p>
      <ul className="topic-list">
        {entries.map((entry) => {
          const questions = entry.questions.length;
          const roundSize = Math.min(TOPIC_ROUND_SIZE, questions);
          const empty = questions === 0 && entry.cases.length === 0;
          const titleId = `${ids}-${entry.topic.id}`;
          return (
            <li key={entry.topic.id}>
              <article className="topic-card" aria-labelledby={titleId} data-empty={empty || undefined}>
                <h3 id={titleId}>{entry.topic.title}</h3>
                <p>{entry.topic.summary}</p>
                <p className="topic-facts">
                  {plural(questions, 'Frage bereit', 'Fragen bereit')}
                  {entry.due > 0 ? ` (${entry.due} fällig)` : ''} · {plural(entry.cases.length, 'Fall', 'Fälle')}
                  {entry.lockedCases > 0 ? ` (+ ${entry.lockedCases} noch gesperrt)` : ''}
                </p>
                {entry.transferCases > 0 || entry.lockedTransferCases > 0 ? (
                  <p className="topic-transfer">
                    {entry.transferCases > 0
                      ? `${plural(entry.transferCases, 'neuer Transferfall', 'neue Transferfälle')} zu diesem Thema – ohne Zwischenlösung in der Transferprüfung.`
                      : null}
                    {entry.lockedTransferCases > 0 ? ` (+ ${entry.lockedTransferCases} noch gesperrt)` : ''}
                    {entry.transferCases > 0 && onOpenTransfer ? (
                      <>
                        {' '}
                        <button
                          type="button"
                          className="link-button"
                          aria-label={`Zur Transferprüfung: ${entry.topic.title}`}
                          onClick={onOpenTransfer}
                        >
                          Zur Transferprüfung
                        </button>
                      </>
                    ) : null}
                  </p>
                ) : null}
                {empty ? (
                  <EmptyReason entry={entry} onOpenLesson={onOpenLesson} />
                ) : (
                  <div className="topic-actions">
                    {questions > 0 ? (
                      <button
                        type="button"
                        className="primary-button"
                        onClick={() => onStartTopic(entry.topic.id, planTopicRound(entry, progress, today))}
                      >
                        Runde starten ({plural(roundSize, 'Frage', 'Fragen')})
                      </button>
                    ) : null}
                    {entry.cases.map((item) => (
                      <button
                        key={item.barCase.id}
                        type="button"
                        className="secondary-button"
                        onClick={() => onTrain(item.barCase.id)}
                      >
                        Fall: {item.barCase.title}
                      </button>
                    ))}
                  </div>
                )}
                <details className="topic-sources">
                  <summary>Lehrstellen zu diesem Thema</summary>
                  <ul>
                    {entry.lessons.map(({ lesson, state }) => {
                      const anchor = entry.topic.teaching.find((ref) => ref.lessonId === lesson.id)?.anchor;
                      return (
                        <li key={lesson.id}>
                          <span>
                            {lesson.title}
                            {anchor ? <small> · {anchor}</small> : null} <em>({STATE_LABEL[state]})</em>
                          </span>
                          {state === 'complete' || state === 'available' ? (
                            <button
                              type="button"
                              className="link-button"
                              aria-label={`Lektion öffnen: ${lesson.title}`}
                              onClick={() => onOpenLesson(lesson)}
                            >
                              Öffnen
                            </button>
                          ) : null}
                        </li>
                      );
                    })}
                  </ul>
                </details>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

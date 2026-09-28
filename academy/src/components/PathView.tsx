import type { Course, Lesson } from '../content/types';
import {
  lessonAccessState,
  nextAvailableLesson,
  type LessonAccessState,
} from '../features/courseAccess';
import type { ResumeTarget } from '../features/navigation';
import type { AcademyProgress } from '../features/progress';

interface PathViewProps {
  course: Course;
  progress: AcademyProgress;
  percent: number;
  /** Begonnene Lektion für „Weiterlernen“, falls vorhanden. */
  resume?: ResumeTarget;
  /** Hinweis nach einem ungültigen oder veralteten Link. */
  notice?: string | null;
  onDismissNotice?: () => void;
  onOpenLesson: (lesson: Lesson) => void;
}

const statusLabels: Record<LessonAccessState, string> = {
  complete: 'Abgeschlossen',
  available: 'Jetzt lernen',
  locked: 'Noch gesperrt',
  planned: 'In Vorbereitung',
};

export function PathView({
  course,
  progress,
  percent,
  resume,
  notice,
  onDismissNotice,
  onOpenLesson,
}: PathViewProps) {
  const published = course.units.flatMap((unit) =>
    unit.lessons.filter((lesson) => lesson.status === 'published'),
  );
  const completed = new Set(progress.completedLessonIds);

  const lessonState = (lesson: Lesson) =>
    lessonAccessState(course, lesson, completed);

  const statusLabel = (lesson: Lesson, state: LessonAccessState) =>
    resume && resume.lesson.id === lesson.id
      ? `Begonnen · Schritt ${resume.stepIndex + 1} von ${lesson.steps.length}`
      : statusLabels[state];

  const nextLesson = nextAvailableLesson(course, completed);
  const completedCount = published.filter((lesson) => completed.has(lesson.id)).length;

  return (
    <div className="path-layout">
      <div className="path-column">
        {notice ? (
          <div className="route-notice" role="status">
            <p>{notice}</p>
            {onDismissNotice ? (
              <button type="button" onClick={onDismissNotice} aria-label="Hinweis schließen">
                ×
              </button>
            ) : null}
          </div>
        ) : null}

        <section className="course-hero">
          <div>
            <p className="eyebrow">{course.eyebrow}</p>
            <h1>{course.title}</h1>
            <p>{course.subtitle}</p>
            <div className="course-meta-row">
              <span>26 Originalkapitel</span>
              <span>121 Chartfälle inventarisiert</span>
              <span>Reihenfolge geschützt</span>
            </div>
          </div>
          <div className="progress-orb" style={{ '--progress': `${percent * 3.6}deg` } as React.CSSProperties}>
            <div>
              <strong>{percent}%</strong>
              <span>Pilot</span>
            </div>
          </div>
        </section>

        <div className="source-order-note">
          <span aria-hidden="true">↳</span>
          <p>{course.sourceOrderNotice}</p>
        </div>

        {resume ? (
          <section className="mobile-next-card resume">
            <div>
              <p className="eyebrow">Begonnene Lektion</p>
              <h2>{resume.lesson.title}</h2>
              <span>Schritt {resume.stepIndex + 1} von {resume.lesson.steps.length}</span>
            </div>
            <button
              type="button"
              onClick={() => onOpenLesson(resume.lesson)}
              aria-label={`${resume.lesson.title} weiterlernen`}
            >
              ▶
            </button>
          </section>
        ) : nextLesson ? (
          <section className="mobile-next-card">
            <div>
              <p className="eyebrow">Nächste Lektion</p>
              <h2>{nextLesson.title}</h2>
              <span>{nextLesson.durationMinutes} Min · {nextLesson.xp} XP</span>
            </div>
            <button type="button" onClick={() => onOpenLesson(nextLesson)} aria-label={`${nextLesson.title} starten`}>
              ▶
            </button>
          </section>
        ) : null}

        <div className="learning-road" aria-label="Lernpfad">
          {course.units.map((unit, unitIndex) => {
            const publishedInUnit = unit.lessons.filter(
              (lesson) => lesson.status === 'published',
            ).length;

            return (
              <section className="unit-section" key={unit.id}>
                <header className="unit-header">
                  <div className="unit-number">{String(unitIndex + 1).padStart(2, '0')}</div>
                  <div>
                    <p>{unit.label}</p>
                    <h2>{unit.title}</h2>
                    <span>{unit.description}</span>
                  </div>
                  <div className="unit-count">
                    <strong>{publishedInUnit}</strong>
                    <span>von ca. {unit.estimatedLessonCount}</span>
                  </div>
                </header>

                <div className="lesson-nodes">
                  {unit.lessons.map((lesson, lessonIndex) => {
                    const state = lessonState(lesson);
                    const interactive = state === 'available' || state === 'complete';

                    return (
                      <div className={`lesson-node-row ${lessonIndex % 2 ? 'offset' : ''}`} key={lesson.id}>
                        <span className="road-line" aria-hidden="true" />
                        <button
                          className={`lesson-node ${state}`}
                          type="button"
                          disabled={!interactive}
                          onClick={() => interactive && onOpenLesson(lesson)}
                          aria-label={`${lesson.title}: ${statusLabel(lesson, state)}`}
                        >
                          <span className="node-icon" aria-hidden="true">
                            {state === 'complete'
                              ? '✓'
                              : state === 'available'
                                ? '▶'
                                : state === 'planned'
                                  ? '…'
                                  : '◆'}
                          </span>
                          <span className="node-copy">
                            <small>{statusLabel(lesson, state)}</small>
                            <strong>{lesson.title}</strong>
                            <span>{lesson.summary}</span>
                            {lesson.status === 'published' ? (
                              <em>{lesson.durationMinutes} Min · {lesson.xp} XP</em>
                            ) : null}
                          </span>
                        </button>
                      </div>
                    );
                  })}
                </div>

                {unit.estimatedLessonCount > unit.lessons.length ? (
                  <div className="unit-backlog">
                    <span aria-hidden="true">＋</span>
                    <p>
                      Weitere {unit.estimatedLessonCount - unit.lessons.length} Mikro-Lektionen
                      sind in der Quellenmatrix vorgesehen.
                    </p>
                  </div>
                ) : null}
              </section>
            );
          })}
        </div>
      </div>

      <aside className="path-rail">
        <section className="rail-card continue-card">
          {resume ? (
            <>
              <p className="eyebrow">Begonnene Lektion</p>
              <h2>{resume.lesson.title}</h2>
              <p>
                Du warst bei Schritt {resume.stepIndex + 1} von {resume.lesson.steps.length}.
              </p>
              <button
                className="primary-button full"
                type="button"
                onClick={() => onOpenLesson(resume.lesson)}
              >
                Weiterlernen
              </button>
            </>
          ) : nextLesson ? (
            <>
              <p className="eyebrow">Nächste Lektion</p>
              <h2>{nextLesson.title}</h2>
              <p>{nextLesson.summary}</p>
              <button className="primary-button full" type="button" onClick={() => onOpenLesson(nextLesson)}>
                Nächste Lektion starten
              </button>
            </>
          ) : (
            <>
              <p className="eyebrow">Nächster Schritt</p>
              <h2>Pilot abgeschlossen</h2>
              <p>Alle aktuell veröffentlichten Lektionen sind erledigt.</p>
            </>
          )}
        </section>

        <section className="rail-card stat-card">
          <div>
            <span>Pilot-Lektionen</span>
            <strong>{completedCount} / {published.length}</strong>
          </div>
          <div>
            <span>Gesammelte XP</span>
            <strong>
              {published
                .filter((lesson) => completed.has(lesson.id))
                .reduce((sum, lesson) => sum + lesson.xp, 0)}
            </strong>
          </div>
        </section>

        {progress.legacyReadChapters.length > 0 || progress.legacyTrendRangeBest > 0 ? (
          <section className="rail-card migration-card">
            <span className="migration-icon" aria-hidden="true">↻</span>
            <div>
              <h2>Alter Fortschritt erkannt</h2>
              <p>
                {progress.legacyReadChapters.length} gelesene Kapitel und dein alter Drill-Rekord
                von {progress.legacyTrendRangeBest} bleiben erhalten. Sie werden nicht als neue
                Mastery ausgegeben.
              </p>
            </div>
          </section>
        ) : null}

        <section className="rail-card quality-card">
          <p className="eyebrow">Qualitätsversprechen</p>
          <ul>
            <li>Buchreihenfolge bleibt erhalten</li>
            <li>Grafiken werden eigenständig erstellt</li>
            <li>Fehler führen zu Erklärung, nicht zu Strafe</li>
          </ul>
        </section>
      </aside>
    </div>
  );
}

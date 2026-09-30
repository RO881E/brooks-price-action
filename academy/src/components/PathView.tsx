import type { CourseOutline, LessonOutline } from '../content/types';
import {
  lessonAccessState,
  nextAvailableLesson,
  type LessonAccessState,
} from '../features/courseAccess';
import { goalLabel, type GoalProgress, type StreakStats } from '../features/goals';
import { earnedXp } from '../features/lessonResults';
import type { ResumeTarget } from '../features/navigation';
import type { AcademyProgress } from '../features/progress';
import { Bull } from './Bull';
import { Icon, type IconName } from './Icon';

interface PathViewProps {
  course: CourseOutline;
  progress: AcademyProgress;
  percent: number;
  /** Begonnene Lektion für „Weiterlernen“, falls vorhanden. */
  resume?: ResumeTarget;
  /** Hinweis nach einem ungültigen oder veralteten Link. */
  notice?: string | null;
  onDismissNotice?: () => void;
  /** Tagesziel und Serie für die Karte „Heute“. */
  goal?: GoalProgress;
  streak?: StreakStats;
  onOpenLesson: (lesson: LessonOutline) => void;
}

/** Etappenstatus eines Buchteils: nur aus echtem Fortschritt und Freischaltung. */
type StationState = 'done' | 'current' | 'open' | 'locked' | 'planned';

const stationLabels: Record<StationState, string> = {
  done: '✓ Abgeschlossen',
  current: '▶ Hier geht es weiter',
  open: 'Bereit',
  locked: '◆ Noch gesperrt',
  planned: '… In Vorbereitung',
};

/** Symbol je Stationszustand (nur Dekoration, der Status steht als Text daneben). */
const nodeIcons: Record<LessonAccessState, IconName> = {
  complete: 'check',
  available: 'play',
  locked: 'lock',
  planned: 'dots',
};

/** Seitlicher Versatz der Station auf dem Weg in Prozent der Wegbreite (sanfte Wellenlinie). */
const waveX = (index: number) => Math.round(50 + 27 * Math.sin(index * 1.15));

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
  goal,
  streak,
  onOpenLesson,
}: PathViewProps) {
  const published = course.units.flatMap((unit) =>
    unit.lessons.filter((lesson) => lesson.status === 'published'),
  );
  const completed = new Set(progress.completedLessonIds);

  const lessonState = (lesson: LessonOutline) =>
    lessonAccessState(course, lesson, completed);

  const statusLabel = (lesson: LessonOutline, state: LessonAccessState) =>
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
            const states = unit.lessons.map((lesson) => lessonState(lesson));
            const completeInUnit = states.filter((state) => state === 'complete').length;
            const station: StationState =
              publishedInUnit === 0
                ? 'planned'
                : completeInUnit === publishedInUnit
                  ? 'done'
                  : states.includes('available')
                    ? unit.lessons.some((lesson) => lesson.id === (resume?.lesson.id ?? nextLesson?.id))
                      ? 'current'
                      : 'open'
                    : 'locked';

            return (
              <section className="unit-section" key={unit.id} data-station={station}>
                <header className="unit-header">
                  <div
                    className="unit-number"
                    data-station={station}
                    style={{ '--ring': `${publishedInUnit ? Math.round((completeInUnit / publishedInUnit) * 100) : 0}%` } as React.CSSProperties}
                  >
                    {String(unitIndex + 1).padStart(2, '0')}
                    {station === 'done' ? (
                      <span className="medal-star" aria-hidden="true">
                        <Icon name="star" size={14} />
                      </span>
                    ) : null}
                  </div>
                  <div>
                    <p>{unit.label}</p>
                    <h2>{unit.title}</h2>
                    <span>{unit.description}</span>
                    <span className={`station-chip ${station}`}>
                      {stationLabels[station]}
                      {publishedInUnit > 0 && station !== 'done' && station !== 'locked'
                        ? ` · ${completeInUnit} von ${publishedInUnit} Lektionen`
                        : ''}
                    </span>
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
                    const x = waveX(lessonIndex);
                    const nextX = waveX(lessonIndex + 1);
                    const isNext = lesson.id === (resume?.lesson.id ?? nextLesson?.id);

                    return (
                      <div
                        className={`lesson-node-row ${state}${isNext ? ' next' : ''}`}
                        key={lesson.id}
                        style={{ '--x': `${x}%` } as React.CSSProperties}
                      >
                        <svg className="road-curve" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
                          <path d={`M ${x} 0 C ${x} 55, ${nextX} 45, ${nextX} 100`} />
                        </svg>
                        <button
                          className={`lesson-node ${state}`}
                          type="button"
                          disabled={!interactive}
                          onClick={() => interactive && onOpenLesson(lesson)}
                          aria-label={`${lesson.title}: ${statusLabel(lesson, state)}`}
                        >
                          <span className="node-lane" aria-hidden="true">
                            <span className="node-icon">
                              <Icon name={nodeIcons[state]} size={24} />
                            </span>
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
                        {isNext ? <Bull mood="happy" size={44} className="path-bull" /> : null}
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

        {goal && streak ? (
          <section className="rail-card today-card" aria-labelledby="today-card-heading">
            <p className="eyebrow" id="today-card-heading">
              Heute
            </p>
            <p>
              Tagesziel {goalLabel(goal.goal)}:{' '}
              <strong>{goal.met ? 'erreicht' : `${goal.value} von ${goal.goal.target}`}</strong>
            </p>
            <div className="stat-meter" aria-hidden="true">
              <span style={{ width: `${goal.percent}%` }} />
            </div>
            <small>
              Serie: {streak.current} {streak.current === 1 ? 'Tag' : 'Tage'}
            </small>
          </section>
        ) : null}

        <section className="rail-card stat-card">
          <div>
            <span>Pilot-Lektionen</span>
            <strong>{completedCount} / {published.length}</strong>
          </div>
          <div>
            <span>Gesammelte XP</span>
            <strong>{earnedXp(progress, published)}</strong>
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

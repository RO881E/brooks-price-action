import { useEffect, useState } from 'react';
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
  /** XP aus allen Kursen (mehrere Kurse zählen gemeinsam); ohne Angabe die dieses Kurses. */
  totalXp?: number;
  onOpenLesson: (lesson: LessonOutline) => void;
}

/** Geöffnete Kapitel merkt sich nur dieser Browser-Tab (Sitzung), damit der Weg nach einer Lektion so aussieht wie vorher. */
const OPEN_UNITS_KEY = 'wqt-academy-path-open';

function readOpenUnits(): Set<string> {
  try {
    const stored = JSON.parse(window.sessionStorage.getItem(OPEN_UNITS_KEY) ?? '[]') as unknown;
    return new Set(Array.isArray(stored) ? stored.filter((id): id is string => typeof id === 'string') : []);
  } catch {
    return new Set();
  }
}

function writeOpenUnits(open: ReadonlySet<string>): void {
  try {
    window.sessionStorage.setItem(OPEN_UNITS_KEY, JSON.stringify([...open]));
  } catch {
    // Speicher gesperrt: der Weg funktioniert trotzdem, nur ohne Merken.
  }
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
  totalXp,
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
  // Nur das Kapitel mit dem nächsten Schritt ist von Anfang an offen; alle anderen sind zugeklappt.
  const focusLessonId = resume?.lesson.id ?? nextLesson?.id;
  const currentUnitId = course.units.find((unit) => unit.lessons.some((lesson) => lesson.id === focusLessonId))?.id;
  const [open, setOpen] = useState<Set<string>>(() => {
    const initial = readOpenUnits();
    if (currentUnitId) initial.add(currentUnitId);
    return initial;
  });
  useEffect(() => writeOpenUnits(open), [open]);
  useEffect(() => {
    if (currentUnitId) setOpen((previous) => (previous.has(currentUnitId) ? previous : new Set(previous).add(currentUnitId)));
  }, [currentUnitId]);
  const toggleUnit = (id: string) =>
    setOpen((previous) => {
      const next = new Set(previous);
      if (!next.delete(id)) next.add(id);
      return next;
    });
  const completedCount = published.filter((lesson) => completed.has(lesson.id)).length;
  // Gemerkt werden Kapitel aller Kurse; gezählt werden nur die dieses Kurses.
  const openCount = course.units.filter((unit) => open.has(unit.id)).length;

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
              <span>{course.units.length} {course.units.length === 1 ? 'Kursabschnitt' : 'Kursabschnitte'}</span>
              <span>{published.length} {published.length === 1 ? 'Lektion' : 'Lektionen'}</span>
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

        <div className="road-controls">
          <p>
            {openCount === 0 ? 'Alle Kapitel sind zugeklappt.' : `${openCount} von ${course.units.length} Kapiteln geöffnet.`}
          </p>
          <button type="button" className="link-button" onClick={() => setOpen(new Set(course.units.map((unit) => unit.id)))}>
            Alle öffnen
          </button>
          <button type="button" className="link-button" onClick={() => setOpen(new Set())}>
            Alle schließen
          </button>
        </div>

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

            const isOpen = open.has(unit.id);

            return (
              <section className="unit-section" key={unit.id} data-station={station} data-open={isOpen}>
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
                    <h2>
                      <button
                        type="button"
                        className="unit-toggle"
                        aria-expanded={isOpen}
                        aria-controls={`unit-lessons-${unit.id}`}
                        onClick={() => toggleUnit(unit.id)}
                      >
                        {unit.title}
                      </button>
                    </h2>
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
                    <span className="unit-chevron" aria-hidden="true">
                      <Icon name="chevron" size={22} />
                    </span>
                  </div>
                </header>

                <div id={`unit-lessons-${unit.id}`} hidden={!isOpen}>
                {isOpen ? (
                <>
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
                      sind noch vorgesehen.
                    </p>
                  </div>
                ) : null}
                </>
                ) : null}
                </div>
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
            <strong>{totalXp ?? earnedXp(progress, published)}</strong>
          </div>
        </section>

        <section className="rail-card quality-card">
          <p className="eyebrow">Qualitätsversprechen</p>
          <ul>
            <li>Reihenfolge der Kapitel bleibt erhalten</li>
            <li>Grafiken werden eigenständig erstellt</li>
            <li>Fehler führen zu Erklärung, nicht zu Strafe</li>
          </ul>
        </section>
      </aside>
    </div>
  );
}

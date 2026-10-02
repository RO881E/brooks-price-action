import { useEffect, useState } from 'react';
import type { CourseOutline, LessonOutline } from '../content/types';
import {
  lessonAccessState,
  nextAvailableLesson,
  type LessonAccessState,
} from '../features/courseAccess';
import { earnedXp } from '../features/lessonResults';
import { LevelLine } from './LevelCard';
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
  /** XP aus allen Kursen (mehrere Kurse zählen gemeinsam); ohne Angabe die dieses Kurses. */
  totalXp?: number;
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
  // Gezeigt wird immer nur ein Kapitel: das mit dem nächsten Schritt; per Kapitelwahl lässt sich ein anderes ansehen.
  const focusLessonId = resume?.lesson.id ?? nextLesson?.id;
  const currentUnitId = course.units.find((unit) => unit.lessons.some((lesson) => lesson.id === focusLessonId))?.id;
  const [chosenId, setChosenId] = useState<string | null>(null);
  const [listOpen, setListOpen] = useState(false);
  // Weiter im Kurs (z. B. nach einer Lektion): Die Anzeige folgt dem aktuellen Kapitel.
  useEffect(() => setChosenId(null), [currentUnitId, course.id]);
  const shownIndex = Math.max(
    0,
    course.units.findIndex((unit) => unit.id === (chosenId ?? currentUnitId ?? course.units[0]?.id)),
  );
  const completedCount = published.filter((lesson) => completed.has(lesson.id)).length;
  const unitStats = (unit: CourseOutline['units'][number]) => {
    const publishedInUnit = unit.lessons.filter((lesson) => lesson.status === 'published').length;
    const states = unit.lessons.map((lesson) => lessonState(lesson));
    const completeInUnit = states.filter((state) => state === 'complete').length;
    const station: StationState =
      publishedInUnit === 0
        ? 'planned'
        : completeInUnit === publishedInUnit
          ? 'done'
          : states.includes('available')
            ? unit.id === currentUnitId
              ? 'current'
              : 'open'
            : 'locked';
    return { publishedInUnit, completeInUnit, station };
  };
  const chooseUnit = (index: number) => {
    const unit = course.units[index];
    if (unit) setChosenId(unit.id === currentUnitId ? null : unit.id);
    setListOpen(false);
  };

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
              <span>{completedCount} von {published.length} {published.length === 1 ? 'Lektion' : 'Lektionen'}</span>
              <span>{totalXp ?? earnedXp(progress, published)} XP</span>
              <span>{course.units.length} {course.units.length === 1 ? 'Kursabschnitt' : 'Kursabschnitte'}</span>
            </div>
            <LevelLine xp={totalXp ?? earnedXp(progress, published)} />
          </div>
          <div className="progress-orb" style={{ '--progress': `${percent * 3.6}deg` } as React.CSSProperties}>
            <div>
              <strong>{percent}%</strong>
              <span>Pilot</span>
            </div>
          </div>
        </section>

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

        <nav className="chapter-switcher" aria-label="Kapitel wählen">
          <button
            type="button"
            className="chapter-step"
            aria-label="Vorheriges Kapitel"
            disabled={shownIndex <= 0}
            onClick={() => chooseUnit(shownIndex - 1)}
          >
            ‹
          </button>
          <button
            type="button"
            className="chapter-switcher-current"
            aria-expanded={listOpen}
            aria-controls="chapter-list"
            onClick={() => setListOpen((value) => !value)}
          >
            <span>
              Kapitel {shownIndex + 1} von {course.units.length}
            </span>
            <strong>{course.units[shownIndex]?.title}</strong>
            <small>{listOpen ? 'Liste schließen' : 'Alle Kapitel'}</small>
          </button>
          <button
            type="button"
            className="chapter-step"
            aria-label="Nächstes Kapitel"
            disabled={shownIndex >= course.units.length - 1}
            onClick={() => chooseUnit(shownIndex + 1)}
          >
            ›
          </button>
        </nav>

        {listOpen ? (
          <ol className="chapter-list" id="chapter-list" aria-label="Alle Kapitel">
            {course.units.map((unit, index) => {
              const { publishedInUnit, completeInUnit, station } = unitStats(unit);
              return (
                <li key={unit.id}>
                  <button
                    type="button"
                    data-station={station}
                    aria-current={index === shownIndex ? 'true' : undefined}
                    onClick={() => chooseUnit(index)}
                  >
                    <span className="chapter-list-number">{String(index + 1).padStart(2, '0')}</span>
                    <span className="chapter-list-title">{unit.title}</span>
                    <small>
                      {station === 'done' ? '✓ ' : station === 'locked' ? '◆ ' : ''}
                      {completeInUnit}/{publishedInUnit}
                    </small>
                  </button>
                </li>
              );
            })}
          </ol>
        ) : null}

        <div className="learning-road" aria-label="Lernpfad">
          {course.units.map((unit, unitIndex) => {
            if (unitIndex !== shownIndex) return null;
            const { publishedInUnit, completeInUnit, station } = unitStats(unit);
            const isOpen = true;

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
                    <strong>{completeInUnit}/{publishedInUnit}</strong>
                    <span>Lektionen</span>
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

    </div>
  );
}

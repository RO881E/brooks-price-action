import type { CourseOutline, LessonOutline } from '../content/types';
import { lessonAccessState } from '../features/courseAccess';
import type { AcademyProgress } from '../features/progress';
import { defaultSection, readerProgress, readerSections } from '../features/reader';

export function ChapterView({
  course,
  progress,
  onOpenLesson,
  onReadUnit,
}: {
  course: CourseOutline;
  progress: Pick<AcademyProgress, 'completedLessonIds' | 'readerPositions'>;
  onOpenLesson: (lesson: LessonOutline) => void;
  /** Öffnet den Buchleser einer Einheit an ihrer Lesestelle (seit F-13). */
  onReadUnit: (unitId: string) => void;
}) {
  const completed = new Set(progress.completedLessonIds);

  return (
    <div className="page-shell chapter-page">
      <header className="page-heading">
        <p className="eyebrow">Buchmodus</p>
        <h1>Inhalte zusammenhängend lesen</h1>
        <p>
          „Kapitel lesen“ öffnet ein Kapitel als zusammenhängenden Text in Buchreihenfolge –
          mit Schaubildern, Vergleichen und Fragen. Die Lesestelle wird gemerkt. Einzelne
          Abschnitte lassen sich weiterhin als Lektion öffnen.
        </p>
      </header>

      <div className="chapter-index">
        {course.units.map((unit) => {
          const published = unit.lessons.filter((lesson) => lesson.status === 'published');
          const start = defaultSection(course, unit, progress);
          const saved = progress.readerPositions[unit.id];
          const resumes = Boolean(start && saved && saved.lessonId === start.lesson.id);
          const counts = readerProgress(readerSections(course, unit, progress));
          return (
            <article className="chapter-entry" key={unit.id}>
              <div className="chapter-order">{String(unit.order).padStart(2, '0')}</div>
              <div className="chapter-entry-copy">
                <p>{unit.label}</p>
                <h2>{unit.title}</h2>
                <span>{unit.description}</span>
                <div className="chapter-read">
                  <button
                    type="button"
                    className={resumes ? 'primary-button' : 'secondary-button'}
                    disabled={!start}
                    aria-label={`${resumes ? 'Weiterlesen' : 'Kapitel lesen'}: ${unit.label} · ${unit.title}`}
                    onClick={() => onReadUnit(unit.id)}
                  >
                    {resumes ? 'Weiterlesen' : 'Kapitel lesen'}
                  </button>
                  <small>
                    {!start
                      ? 'Gesperrt – vorherige Kapitel zuerst abschließen'
                      : resumes
                        ? `Zuletzt: ${start.lesson.title}`
                        : `${counts.completed} von ${counts.total} Abschnitten abgeschlossen`}
                  </small>
                </div>
                <div className="chapter-lessons">
                  {published.map((lesson) => {
                    const state = lessonAccessState(course, lesson, completed);
                    const isUnlocked = state === 'available' || state === 'complete';
                    const isComplete = state === 'complete';

                    return (
                      <button
                        type="button"
                        key={lesson.id}
                        disabled={!isUnlocked}
                        aria-label={`${lesson.title}: ${isComplete ? 'Abgeschlossen' : isUnlocked ? 'Verfügbar' : 'Gesperrt'}`}
                        onClick={() => onOpenLesson(lesson)}
                      >
                        <span>{lesson.title}</span>
                        <small>
                          {isComplete ? '✓ Erledigt' : isUnlocked ? `${lesson.durationMinutes} Min` : 'Gesperrt'}
                        </small>
                      </button>
                    );
                  })}
                  {unit.estimatedLessonCount > published.length ? (
                    <div className="chapter-planned">
                      + {unit.estimatedLessonCount - published.length} weitere Lektionen laut
                      Quellenplan
                    </div>
                  ) : null}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

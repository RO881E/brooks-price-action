import type { Course, Lesson } from '../content/types';

export function ChapterView({
  course,
  completedLessonIds,
  onOpenLesson,
}: {
  course: Course;
  completedLessonIds: string[];
  onOpenLesson: (lesson: Lesson) => void;
}) {
  const completed = new Set(completedLessonIds);
  const publishedLessons = course.units.flatMap((unit) =>
    unit.lessons.filter((lesson) => lesson.status === 'published'),
  );
  const unlockedLessonIds = new Set(
    publishedLessons
      .filter(
        (lesson, index) =>
          index === 0 || completed.has(lesson.id) || completed.has(publishedLessons[index - 1].id),
      )
      .map((lesson) => lesson.id),
  );

  return (
    <div className="page-shell chapter-page">
      <header className="page-heading">
        <p className="eyebrow">Buchmodus</p>
        <h1>Inhalte zusammenhängend lesen</h1>
        <p>
          Die Kapitelansicht zeigt dieselben Kursinhalte in ihrer Buchreihenfolge. So gehen
          Zusammenhänge zwischen den Mikro-Lektionen nicht verloren.
        </p>
      </header>

      <div className="chapter-index">
        {course.units.map((unit) => {
          const published = unit.lessons.filter((lesson) => lesson.status === 'published');
          return (
            <article className="chapter-entry" key={unit.id}>
              <div className="chapter-order">{String(unit.order).padStart(2, '0')}</div>
              <div className="chapter-entry-copy">
                <p>{unit.label}</p>
                <h2>{unit.title}</h2>
                <span>{unit.description}</span>
                <div className="chapter-lessons">
                  {published.map((lesson) => {
                    const isUnlocked = unlockedLessonIds.has(lesson.id);
                    const isComplete = completed.has(lesson.id);

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

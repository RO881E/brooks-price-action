import { useId } from 'react';
import { ACTIVE_COURSE_ID, librarySubjects, subjectStatus, type LibrarySubject } from '../content/library';
import { Icon } from './Icon';

/**
 * Bibliothek: alle Themengebiete und ihre Kurse. Verfügbare Kurse führen in den Lernpfad,
 * angekündigte stehen als „Geplant“ dabei – ohne Link und ohne Inhalt.
 */
export function LibraryView({
  percent,
  onOpenCourse,
  subjects = librarySubjects,
}: {
  percent: number;
  onOpenCourse: () => void;
  subjects?: readonly LibrarySubject[];
}) {
  const ids = useId();
  return (
    <section className="library-view" aria-labelledby={`${ids}-title`}>
      <h1 id={`${ids}-title`}>Bibliothek</h1>
      <p className="library-intro">
        Hier stehen alle Themen, die du lernen kannst. Neue Themen kommen dazu, sobald es Inhalt gibt; bis dahin
        sind sie als „Geplant“ markiert.
      </p>
      <div className="library-subjects">
        {subjects.map((subject) => {
          const status = subjectStatus(subject);
          return (
            <article key={subject.id} className={`library-subject is-${status}`} aria-labelledby={`${ids}-${subject.id}`}>
              <header>
                <h2 id={`${ids}-${subject.id}`}>{subject.title}</h2>
                {status === 'planned' ? <span className="library-badge planned">Geplant</span> : null}
              </header>
              <p>{subject.description}</p>
              {subject.courses.length > 0 ? (
                <ul className="library-courses" aria-label={`Kurse zu ${subject.title}`}>
                  {subject.courses.map((course) => {
                    const active = course.status === 'available' && course.id === ACTIVE_COURSE_ID;
                    return (
                      <li key={course.id} className={`library-course is-${course.status}`}>
                        <div>
                          <strong>{course.title}</strong>
                          {course.label ? <small>{course.label}</small> : null}
                          <span>{course.description}</span>
                        </div>
                        {course.status === 'available' ? (
                          <div className="library-course-action">
                            <span className="library-badge active">
                              {active ? `Aktiv · ${percent} % im Pilot` : 'Verfügbar'}
                            </span>
                            <button type="button" className="primary-button" onClick={onOpenCourse}>
                              <Icon name="path" size={18} /> Zum Lernpfad
                            </button>
                          </div>
                        ) : (
                          <span className="library-badge planned">Geplant · noch ohne Inhalt</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p className="library-empty">Noch ohne Kurs und Inhalt.</p>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

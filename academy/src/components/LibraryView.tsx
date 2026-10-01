import { useEffect, useId, useState } from 'react';
import {
  ACTIVE_COURSE_ID,
  libraryCounts,
  librarySubjects,
  subjectStatus,
  type LibraryCourse,
  type LibrarySubject,
} from '../content/library';
import { Icon } from './Icon';

/** Geöffnete Themengebiete merkt sich nur dieser Browser-Tab (Sitzung), wie die Kapitel im Lernpfad. */
const OPEN_SUBJECTS_KEY = 'wqt-academy-library-open';

/** `null`: in diesem Tab noch nichts gemerkt – dann gilt die Voreinstellung. */
function readOpenSubjects(): Set<string> | null {
  try {
    const raw = window.sessionStorage.getItem(OPEN_SUBJECTS_KEY);
    if (raw === null) return null;
    const stored = JSON.parse(raw) as unknown;
    return new Set(Array.isArray(stored) ? stored.filter((id): id is string => typeof id === 'string') : []);
  } catch {
    return null;
  }
}

function writeOpenSubjects(open: ReadonlySet<string>): void {
  try {
    window.sessionStorage.setItem(OPEN_SUBJECTS_KEY, JSON.stringify([...open]));
  } catch {
    // Speicher gesperrt: die Bibliothek funktioniert trotzdem, nur ohne Merken.
  }
}

/**
 * Bibliothek: alle Themengebiete und ihre Kurse. Die Gebiete sind aufklappbar; offen ist zu Beginn
 * nur das Gebiet mit Inhalt. Verfügbare Kurse führen in den Lernpfad, angekündigte stehen als
 * „Geplant“ dabei – ohne Link und ohne Inhalt, aber mit ihren möglichen Unterthemen.
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
  const counts = libraryCounts(subjects);
  const [open, setOpen] = useState<Set<string>>(
    () =>
      readOpenSubjects() ??
      new Set(subjects.filter((subject) => subjectStatus(subject) === 'available').map((subject) => subject.id)),
  );
  useEffect(() => writeOpenSubjects(open), [open]);
  const toggle = (id: string) =>
    setOpen((previous) => {
      const next = new Set(previous);
      if (!next.delete(id)) next.add(id);
      return next;
    });

  return (
    <section className="library-view" aria-labelledby={`${ids}-title`}>
      <h1 id={`${ids}-title`}>Bibliothek</h1>
      <p className="library-intro">
        Hier stehen alle Themen, die du lernen kannst: {counts.subjects} Themengebiete mit {counts.courses} Kursen. Was
        schon Inhalt hat, ist als „Aktiv“ markiert; alles andere ist „Geplant“ und kommt nach und nach dazu.
      </p>

      <div className="library-controls">
        <p>
          {open.size === 0
            ? 'Alle Themengebiete sind zugeklappt.'
            : `${open.size} von ${counts.subjects} Themengebieten geöffnet.`}
        </p>
        <button type="button" className="link-button" onClick={() => setOpen(new Set(subjects.map((subject) => subject.id)))}>
          Alle öffnen
        </button>
        <button type="button" className="link-button" onClick={() => setOpen(new Set())}>
          Alle schließen
        </button>
      </div>

      <div className="library-subjects">
        {subjects.map((subject) => {
          const status = subjectStatus(subject);
          const isOpen = open.has(subject.id);
          const headingId = `${ids}-${subject.id}`;
          const panelId = `${ids}-${subject.id}-courses`;
          return (
            <article key={subject.id} className={`library-subject is-${status}`} data-open={isOpen} aria-labelledby={headingId}>
              <header>
                <h2 id={headingId}>
                  <button
                    type="button"
                    className="library-toggle"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(subject.id)}
                  >
                    {subject.title}
                  </button>
                </h2>
                <span className={`library-badge ${status === 'available' ? 'active' : 'planned'}`}>
                  {status === 'available' ? 'Aktiv' : 'Geplant'}
                </span>
                <span className="library-count">
                  {subject.courses.length} {subject.courses.length === 1 ? 'Kurs' : 'Kurse'}
                </span>
                <span className="library-chevron" aria-hidden="true">
                  <Icon name="chevron" size={22} />
                </span>
              </header>
              <p>{subject.description}</p>
              <div id={panelId} hidden={!isOpen}>
                {isOpen ? (
                  subject.courses.length > 0 ? (
                    <ul className="library-courses" aria-label={`Kurse zu ${subject.title}`}>
                      {subject.courses.map((course) => (
                        <CourseCard key={course.id} course={course} percent={percent} onOpenCourse={onOpenCourse} />
                      ))}
                    </ul>
                  ) : (
                    <p className="library-empty">Noch ohne Kurs und Inhalt.</p>
                  )
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function CourseCard({ course, percent, onOpenCourse }: { course: LibraryCourse; percent: number; onOpenCourse: () => void }) {
  const active = course.status === 'available' && course.id === ACTIVE_COURSE_ID;
  return (
    <li className={`library-course is-${course.status}`}>
      <div className="library-course-text">
        <strong>{course.title}</strong>
        {course.label ? <small>{course.label}</small> : null}
        <span>{course.description}</span>
        <details className="library-subtopics">
          <summary>
            {course.subtopics.length} {course.subtopics.length === 1 ? 'Unterthema' : 'Unterthemen'}
          </summary>
          <ul>
            {course.subtopics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </details>
      </div>
      {course.status === 'available' ? (
        <div className="library-course-action">
          <span className="library-badge active">{active ? `Aktiv · ${percent} % im Pilot` : 'Verfügbar'}</span>
          <button type="button" className="primary-button" onClick={onOpenCourse}>
            <Icon name="path" size={18} /> Zum Lernpfad
          </button>
        </div>
      ) : (
        <span className="library-badge planned">Geplant</span>
      )}
    </li>
  );
}

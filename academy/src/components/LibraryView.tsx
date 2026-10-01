import { useId, type MouseEvent, type ReactNode } from 'react';
import { courseOutlines, findCourseOutline, publishedLessonIdsOf } from '../content/catalog';
import {
  libraryCounts,
  librarySubjects,
  subjectStatus,
  type LibraryCourse,
  type LibrarySubject,
} from '../content/library';
import { extraLibrarySubjects } from '../content/registry';
import type { CourseOutline } from '../content/types';
import { formatRoute, type AppRoute } from '../features/navigation';
import { progressPercent, type AcademyProgress } from '../features/progress';
import { Icon } from './Icon';

/*
 * Bibliothek als eigene Seiten (mehrere Kurse): Übersicht mit „Deine Kurse“ und allen
 * Themengebieten → Seite eines Gebiets mit seinen Kursen → Seite eines Kurses mit
 * Beschreibung, Unterthemen und „Kurs starten“. Kurse mit Inhalt lassen sich parallel
 * lernen und jederzeit wechseln; geplante Kurse stehen ohne Start dabei, bis es Lektionen gibt.
 */

/** Alle Gebiete dieser App-Variante (im Modus `e2e` zusätzlich das Testgebiet). */
const allSubjects: readonly LibrarySubject[] = [...librarySubjects, ...extraLibrarySubjects];

type Navigate = (route: AppRoute) => void;

/** Echter Link (neuer Tab, Adresse kopieren), der in der App ohne Neuladen wechselt. */
function PageLink({
  route,
  onNavigate,
  className,
  children,
}: {
  route: AppRoute;
  onNavigate: Navigate;
  className?: string;
  children: ReactNode;
}) {
  const open = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onNavigate(route);
  };
  return (
    <a href={formatRoute(route)} className={className} onClick={open}>
      {children}
    </a>
  );
}

const LIBRARY_ROUTE: AppRoute = { kind: 'view', view: 'library' };

function Crumbs({ trail, onNavigate }: { trail: Array<{ label: string; route?: AppRoute }>; onNavigate: Navigate }) {
  return (
    <nav className="library-crumbs" aria-label="Brotkrumen">
      <ol>
        {trail.map((item, index) => (
          <li key={`${index}-${item.label}`}>
            {item.route ? (
              <PageLink route={item.route} onNavigate={onNavigate}>
                {item.label}
              </PageLink>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Stand eines Kurses mit Inhalt: Anteil abgeschlossener Lektionen und ob schon etwas gelernt wurde. */
function courseStanding(outline: CourseOutline, progress: AcademyProgress) {
  const lessonIds = publishedLessonIdsOf(outline);
  const completed = new Set(progress.completedLessonIds);
  const done = lessonIds.filter((id) => completed.has(id)).length;
  const started =
    done > 0 ||
    lessonIds.some((id) => id in progress.lessonPositions) ||
    outline.units.some((unit) => unit.id in progress.readerPositions);
  return { percent: progressPercent(progress, lessonIds), done, total: lessonIds.length, started };
}

function plural(count: number, one: string, many: string) {
  return `${count} ${count === 1 ? one : many}`;
}

function standingText(standing: ReturnType<typeof courseStanding>) {
  return standing.started
    ? `${standing.percent} % geschafft · ${standing.done} von ${plural(standing.total, 'Lektion', 'Lektionen')}`
    : `Noch nicht begonnen · ${plural(standing.total, 'Lektion', 'Lektionen')}`;
}

/** `#/library`: deine Kurse mit Inhalt und alle Themengebiete als Kacheln. */
export function LibraryView({
  progress,
  activeCourseId,
  onNavigate,
  onContinue,
  subjects = allSubjects,
}: {
  progress: AcademyProgress;
  activeCourseId: string;
  onNavigate: Navigate;
  onContinue: () => void;
  subjects?: readonly LibrarySubject[];
}) {
  const ids = useId();
  const counts = libraryCounts(subjects);

  return (
    <section className="library-view" aria-labelledby={`${ids}-title`}>
      <h1 id={`${ids}-title`}>Bibliothek</h1>
      <p className="library-intro">
        Hier stehen alle Themen, die du lernen kannst: {counts.subjects} Themengebiete mit {counts.courses} Kursen. Kurse
        mit Inhalt kannst du starten und jederzeit wechseln – jeder behält seinen eigenen Stand. Alles andere ist
        „Geplant“ und kommt nach und nach dazu.
      </p>

      <section className="library-section" aria-labelledby={`${ids}-mine`}>
        <h2 id={`${ids}-mine`}>Deine Kurse</h2>
        <ul className="library-mine">
          {courseOutlines.map((outline) => {
            const active = outline.id === activeCourseId;
            const standing = courseStanding(outline, progress);
            return (
              <li key={outline.id} className={active ? 'is-active' : undefined}>
                <div className="library-mine-text">
                  <h3>
                    <PageLink route={{ kind: 'course', courseId: outline.id }} onNavigate={onNavigate}>
                      {outline.title}
                    </PageLink>
                  </h3>
                  <p>
                    {active ? <span className="library-badge active">Aktiver Kurs</span> : null}
                    <span>{standingText(standing)}</span>
                  </p>
                  <div className="library-meter" aria-hidden="true">
                    <span style={{ width: `${standing.percent}%` }} />
                  </div>
                </div>
                {active ? (
                  <button type="button" className="primary-button" onClick={onContinue}>
                    <Icon name="path" size={18} /> Weiterlernen
                  </button>
                ) : null}
              </li>
            );
          })}
        </ul>
      </section>

      <section className="library-section" aria-labelledby={`${ids}-subjects`}>
        <h2 id={`${ids}-subjects`}>Themengebiete</h2>
        <ul className="library-tiles">
          {subjects.map((subject) => {
            const status = subjectStatus(subject);
            return (
              <li key={subject.id} className={`library-tile is-${status}`}>
                <h3>
                  <PageLink route={{ kind: 'subject', subjectId: subject.id }} onNavigate={onNavigate}>
                    {subject.title}
                  </PageLink>
                </h3>
                <p>{subject.description}</p>
                <p className="library-tile-meta">
                  <span className={`library-badge ${status === 'available' ? 'active' : 'planned'}`}>
                    {status === 'available' ? 'Aktiv' : 'Geplant'}
                  </span>
                  <span className="library-count">{plural(subject.courses.length, 'Kurs', 'Kurse')}</span>
                </p>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
}

function NotFound({ title, text, onNavigate }: { title: string; text: string; onNavigate: Navigate }) {
  const ids = useId();
  return (
    <section className="library-view" aria-labelledby={`${ids}-title`}>
      <Crumbs trail={[{ label: 'Bibliothek', route: LIBRARY_ROUTE }, { label: title }]} onNavigate={onNavigate} />
      <h1 id={`${ids}-title`}>{title}</h1>
      <p className="library-intro">{text}</p>
      <PageLink route={LIBRARY_ROUTE} onNavigate={onNavigate} className="secondary-button library-back">
        Zur Bibliothek
      </PageLink>
    </section>
  );
}

function StatusBadge({ course, activeCourseId }: { course: LibraryCourse; activeCourseId: string }) {
  if (course.status === 'planned') return <span className="library-badge planned">Geplant</span>;
  return <span className="library-badge active">{course.id === activeCourseId ? 'Aktiver Kurs' : 'Verfügbar'}</span>;
}

/** `#/library/<gebiet>`: ein Themengebiet mit seinen Kursen. */
export function SubjectPage({
  subjectId,
  activeCourseId,
  onNavigate,
  subjects = allSubjects,
}: {
  subjectId: string;
  activeCourseId: string;
  onNavigate: Navigate;
  subjects?: readonly LibrarySubject[];
}) {
  const ids = useId();
  const subject = subjects.find((item) => item.id === subjectId);
  if (!subject) {
    return (
      <NotFound
        title="Themengebiet nicht gefunden"
        text="Dieses Themengebiet gibt es in der Bibliothek nicht. Vielleicht ist der Link veraltet."
        onNavigate={onNavigate}
      />
    );
  }

  return (
    <section className="library-view" aria-labelledby={`${ids}-title`}>
      <Crumbs trail={[{ label: 'Bibliothek', route: LIBRARY_ROUTE }, { label: subject.title }]} onNavigate={onNavigate} />
      <h1 id={`${ids}-title`}>{subject.title}</h1>
      <p className="library-intro">{subject.description}</p>
      <p className="library-exercises">
        <strong>Passende Übungen:</strong> {subject.exercises}
      </p>

      <section className="library-section" aria-labelledby={`${ids}-courses`}>
        <h2 id={`${ids}-courses`}>{plural(subject.courses.length, 'Kurs', 'Kurse')}</h2>
        <ul className="library-courses">
          {subject.courses.map((course) => (
            <li key={course.id} className={`library-course is-${course.status}`}>
              <div className="library-course-text">
                <h3>
                  <PageLink route={{ kind: 'course', courseId: course.id }} onNavigate={onNavigate}>
                    {course.title}
                  </PageLink>
                </h3>
                {course.label ? <small>{course.label}</small> : null}
                <span>{course.description}</span>
              </div>
              <StatusBadge course={course} activeCourseId={activeCourseId} />
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

/** `#/course/<kurs>`: Beschreibung, Unterthemen und – bei Kursen mit Inhalt – Start oder Wechsel. */
export function CoursePage({
  courseId,
  progress,
  activeCourseId,
  onNavigate,
  onStart,
  onContinue,
  subjects = allSubjects,
}: {
  courseId: string;
  progress: AcademyProgress;
  activeCourseId: string;
  onNavigate: Navigate;
  onStart: (courseId: string) => void;
  onContinue: () => void;
  subjects?: readonly LibrarySubject[];
}) {
  const ids = useId();
  const subject = subjects.find((item) => item.courses.some((course) => course.id === courseId));
  const entry = subject?.courses.find((course) => course.id === courseId);
  if (!subject || !entry) {
    return (
      <NotFound
        title="Kurs nicht gefunden"
        text="Diesen Kurs gibt es in der Bibliothek nicht. Vielleicht ist der Link veraltet."
        onNavigate={onNavigate}
      />
    );
  }

  // Starten lässt sich nur, was als verfügbar gilt **und** wirklich Lektionen hat.
  const outline = entry.status === 'available' ? findCourseOutline(entry.id) : undefined;
  const active = outline !== undefined && outline.id === activeCourseId;
  const standing = outline ? courseStanding(outline, progress) : null;

  return (
    <section className="library-view library-course-page" aria-labelledby={`${ids}-title`}>
      <Crumbs
        trail={[
          { label: 'Bibliothek', route: LIBRARY_ROUTE },
          { label: subject.title, route: { kind: 'subject', subjectId: subject.id } },
          { label: entry.title },
        ]}
        onNavigate={onNavigate}
      />
      {entry.label ? <p className="eyebrow">{entry.label}</p> : null}
      <h1 id={`${ids}-title`}>{entry.title}</h1>
      <p className="library-intro">{entry.description}</p>

      {outline && standing ? (
        <div className="library-start">
          <div>
            <StatusBadge course={entry} activeCourseId={activeCourseId} />
            <p>{standingText(standing)}</p>
            {!active ? (
              <p className="library-start-note">
                Dein Stand in den anderen Kursen bleibt erhalten; XP und Lerntage zählen für alle Kurse gemeinsam.
              </p>
            ) : null}
          </div>
          {active ? (
            <button type="button" className="primary-button" onClick={onContinue}>
              <Icon name="path" size={18} /> Weiterlernen
            </button>
          ) : (
            <button type="button" className="primary-button" onClick={() => onStart(outline.id)}>
              <Icon name="play" size={18} /> {standing.started ? 'Zu diesem Kurs wechseln' : 'Kurs starten'}
            </button>
          )}
        </div>
      ) : (
        <div className="library-start is-planned">
          <div>
            <span className="library-badge planned">Geplant</span>
            <p>Dieser Kurs hat noch keine Lektionen. Sobald es Inhalt gibt, kannst du ihn hier starten.</p>
          </div>
        </div>
      )}

      <section className="library-section" aria-labelledby={`${ids}-topics`}>
        <h2 id={`${ids}-topics`}>Unterthemen</h2>
        <ul className="library-topic-list">
          {entry.subtopics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </section>

      {outline && standing ? (
        <section className="library-section" aria-labelledby={`${ids}-units`}>
          <h2 id={`${ids}-units`}>Aufbau</h2>
          <p className="library-intro">
            {plural(outline.units.length, 'Kursabschnitt', 'Kursabschnitte')} ·{' '}
            {plural(standing.total, 'Lektion', 'Lektionen')}
          </p>
          <details className="library-units">
            <summary>Alle Kursabschnitte zeigen</summary>
            <ol>
              {outline.units.map((unit) => (
                <li key={unit.id}>
                  <strong>{unit.label}</strong> · {unit.title}
                </li>
              ))}
            </ol>
          </details>
        </section>
      ) : null}
    </section>
  );
}

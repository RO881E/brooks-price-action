/*
 * Bibliothek: Themengebiete und ihre Kurse (Bücher). Einzige Liste dafür – die Navigation
 * (`components/LibraryView.tsx`) liest nur von hier. Ein neues Thema ist ein weiterer Eintrag;
 * Anleitung und Grenzen stehen in `docs/DESIGN_BIBLIOTHEK.md`.
 *
 * `available` heißt: Der Kurs hat Inhalt und ist als Kurs der App registriert (`units.ts`).
 * `planned` heißt: nur angekündigt, ohne Inhalt – die Karte ist sichtbar, aber nicht anklickbar.
 * Titel und Beschreibungen sind eigene, knappe Formulierungen und versprechen keine Inhalte.
 */

export type CourseStatus = 'available' | 'planned';

export interface LibraryCourse {
  /** Stabile ID; bei `available` die ID des registrierten Kurses (`courseInfo.id`). */
  id: string;
  title: string;
  /** Kurzer Zusatz, z. B. „Teil 1 von 3“. */
  label?: string;
  description: string;
  status: CourseStatus;
}

export interface LibrarySubject {
  id: string;
  title: string;
  description: string;
  /** Leer, solange das Thema nur angekündigt ist. */
  courses: LibraryCourse[];
}

/** Der Kurs, mit dem die App heute arbeitet (Lernpfad, Üben, Fortschritt …). */
export const ACTIVE_COURSE_ID = 'price-action-trends';

export const librarySubjects: LibrarySubject[] = [
  {
    id: 'price-action',
    title: 'Price Action',
    description: 'Kursbewegungen Bar für Bar lesen: Kontext, Setups und Entscheidungen.',
    courses: [
      {
        id: 'price-action-trends',
        title: 'Price Action: Trends',
        label: 'Teil 1 von 3',
        description: 'Vom einzelnen Bar bis zum vollständigen Trendtag.',
        status: 'available',
      },
      {
        id: 'price-action-ranges',
        title: 'Price Action: Ranges',
        label: 'Teil 2 von 3',
        description: 'Ausbrüche, Gaps, Unterstützung und Widerstand, Pullbacks, Ranges und Trade-Management.',
        status: 'planned',
      },
      {
        id: 'price-action-reversals',
        title: 'Price Action: Umkehrungen',
        label: 'Teil 3 von 3',
        description: 'Umkehrungen, Tageshandel, größere Zeitebenen und selektive Setups.',
        status: 'planned',
      },
    ],
  },
  {
    id: 'volume',
    title: 'Volumen',
    description: 'Wie Handelsumsatz Bewegungen bestätigt oder in Frage stellt.',
    courses: [],
  },
  {
    id: 'orderflow',
    title: 'Orderflow',
    description: 'Wie sich Aufträge im Handelsstrom zeigen.',
    courses: [],
  },
  {
    id: 'valuation',
    title: 'Unternehmensbewertung',
    description: 'Wie sich der Wert eines Unternehmens aus Zahlen und Annahmen herleiten lässt.',
    courses: [],
  },
];

/** Ein Thema ist verfügbar, sobald mindestens einer seiner Kurse verfügbar ist. */
export function subjectStatus(subject: LibrarySubject): CourseStatus {
  return subject.courses.some((course) => course.status === 'available') ? 'available' : 'planned';
}

export interface LibraryIssue {
  path: string;
  message: string;
}

const ID_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** Prüft die Liste: eindeutige IDs, genau der aktive Kurs ist verfügbar, Texte vorhanden. */
export function validateLibrary(
  subjects: readonly LibrarySubject[],
  activeCourseId: string,
  availableCourseIds: readonly string[],
): LibraryIssue[] {
  const issues: LibraryIssue[] = [];
  const ids = new Set<string>();
  const claim = (id: string, path: string) => {
    if (!ID_PATTERN.test(id)) issues.push({ path, message: `Ungültige ID „${id}“.` });
    if (ids.has(id)) issues.push({ path, message: `Doppelte ID „${id}“.` });
    ids.add(id);
  };

  subjects.forEach((subject, s) => {
    const base = `subjects[${s}]`;
    claim(subject.id, `${base}.id`);
    if (!subject.title.trim()) issues.push({ path: `${base}.title`, message: 'Der Titel fehlt.' });
    if (subject.description.trim().length < 10) issues.push({ path: `${base}.description`, message: 'Die Beschreibung fehlt.' });
    subject.courses.forEach((course, c) => {
      const path = `${base}.courses[${c}]`;
      claim(course.id, `${path}.id`);
      if (!course.title.trim()) issues.push({ path: `${path}.title`, message: 'Der Titel fehlt.' });
      if (course.description.trim().length < 10) issues.push({ path: `${path}.description`, message: 'Die Beschreibung fehlt.' });
      const registered = availableCourseIds.includes(course.id);
      if (course.status === 'available' && !registered) {
        issues.push({ path, message: 'Als verfügbar markiert, aber kein registrierter Kurs mit dieser ID.' });
      }
      if (course.status === 'planned' && registered) {
        issues.push({ path, message: 'Ein registrierter Kurs mit Inhalt darf nicht als geplant stehen.' });
      }
    });
  });

  const active = subjects.flatMap((subject) => subject.courses).find((course) => course.id === activeCourseId);
  if (!active) issues.push({ path: 'activeCourseId', message: 'Der aktive Kurs fehlt in der Bibliothek.' });
  else if (active.status !== 'available') issues.push({ path: 'activeCourseId', message: 'Der aktive Kurs muss verfügbar sein.' });
  return issues;
}

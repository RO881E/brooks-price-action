import { describe, expect, it } from 'vitest';
import { courseInfo } from './units';
import {
  ACTIVE_COURSE_ID,
  libraryCounts,
  librarySubjects,
  subjectStatus,
  validateLibrary,
  type LibrarySubject,
} from './library';

const registered = [courseInfo.id];

describe('Bibliothek (Themenliste)', () => {
  it('die echte Liste ist gültig und der aktive Kurs ist der registrierte', () => {
    expect(validateLibrary(librarySubjects, ACTIVE_COURSE_ID, registered)).toEqual([]);
    expect(ACTIVE_COURSE_ID).toBe(courseInfo.id);
  });

  it('enthält alle Themengebiete; nur der Kurs mit Inhalt ist verfügbar, alles andere geplant', () => {
    const titles = librarySubjects.map((subject) => subject.title);
    expect(titles).toEqual(
      expect.arrayContaining([
        'Price Action und Marktstruktur',
        'Volumen',
        'Orderflow und Marktmikrostruktur',
        'Fundamentalanalyse und Unternehmensbewertung',
      ]),
    );
    const counts = libraryCounts(librarySubjects);
    expect(counts.available).toBe(1);
    expect(counts.courses).toBeGreaterThan(counts.subjects);
    const withContent = librarySubjects.filter((subject) => subjectStatus(subject) === 'available');
    expect(withContent.map((subject) => subject.id)).toEqual(['price-action']);
    // Jedes Thema nennt mögliche Unterthemen.
    for (const course of librarySubjects.flatMap((subject) => subject.courses)) {
      expect(course.subtopics.length, course.id).toBeGreaterThan(0);
    }
  });

  it('meldet Fehler: Doppelte IDs, verfügbar ohne Kurs, geplant mit Kurs, fehlende Texte und Unterthemen', () => {
    const bad: LibrarySubject[] = [
      {
        id: 'a',
        title: 'A',
        description: 'Beschreibung eins.',
        exercises: 'Fragen und mehr.',
        courses: [
          { id: 'x', title: 'X', description: 'Beschreibung zwei.', status: 'available', subtopics: ['Eins'] },
          { id: courseInfo.id, title: 'Y', description: 'Beschreibung drei.', status: 'planned', subtopics: [] },
          { id: 'z', title: 'Z', description: 'Beschreibung vier.', status: 'planned', subtopics: ['Doppelt', 'Doppelt'] },
        ],
      },
      { id: 'a', title: '', description: 'kurz', exercises: '', courses: [] },
    ];
    const messages = validateLibrary(bad, 'fehlt', registered).map((issue) => issue.message).join(' | ');
    expect(messages).toContain('Doppelte ID');
    expect(messages).toContain('kein registrierter Kurs');
    expect(messages).toContain('darf nicht als geplant stehen');
    expect(messages).toContain('Der Titel fehlt');
    expect(messages).toContain('Die passenden Übungen fehlen');
    expect(messages).toContain('mindestens ein Thema');
    expect(messages).toContain('Mindestens ein Unterthema');
    expect(messages).toContain('Ein Unterthema steht doppelt');
    expect(messages).toContain('Der aktive Kurs fehlt');
  });
});

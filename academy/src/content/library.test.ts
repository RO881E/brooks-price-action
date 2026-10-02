import { describe, expect, it } from 'vitest';
import { courseInfo } from './units';
import { baseCourseDefinitions } from './registry';
import { DEFAULT_COURSE_ID } from './registry';
import {
  libraryCounts,
  librarySubjects,
  subjectStatus,
  validateLibrary,
  type LibrarySubject,
} from './library';

const registered = baseCourseDefinitions.map((course) => course.info.id);

describe('Bibliothek (Themenliste)', () => {
  it('die echte Liste ist gültig und der Standardkurs ist der registrierte', () => {
    expect(validateLibrary(librarySubjects, DEFAULT_COURSE_ID, registered)).toEqual([]);
    expect(DEFAULT_COURSE_ID).toBe(courseInfo.id);
  });

  it('enthält alle Themengebiete; nur Kurse mit Inhalt sind verfügbar, alles andere geplant', () => {
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
    expect(counts.available).toBe(3);
    expect(counts.courses).toBeGreaterThan(counts.subjects);
    const withContent = librarySubjects.filter((subject) => subjectStatus(subject) === 'available');
    expect(withContent.map((subject) => subject.id)).toEqual(['market-basics', 'price-action']);
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
    expect(messages).toContain('Der Standardkurs fehlt');
  });
});

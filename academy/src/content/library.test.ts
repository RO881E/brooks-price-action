import { describe, expect, it } from 'vitest';
import { courseInfo } from './units';
import { ACTIVE_COURSE_ID, librarySubjects, subjectStatus, validateLibrary, type LibrarySubject } from './library';

const registered = [courseInfo.id];

describe('Bibliothek (Themenliste)', () => {
  it('die echte Liste ist gültig und der aktive Kurs ist der registrierte', () => {
    expect(validateLibrary(librarySubjects, ACTIVE_COURSE_ID, registered)).toEqual([]);
    expect(ACTIVE_COURSE_ID).toBe(courseInfo.id);
  });

  it('enthält die angekündigten Themen als geplant', () => {
    const planned = librarySubjects.filter((subject) => subjectStatus(subject) === 'planned').map((s) => s.title);
    expect(planned).toEqual(expect.arrayContaining(['Volumen', 'Orderflow', 'Unternehmensbewertung']));
    expect(subjectStatus(librarySubjects[0])).toBe('available');
  });

  it('meldet Fehler: Doppelte IDs, verfügbar ohne Kurs, geplant mit Kurs, fehlender aktiver Kurs', () => {
    const bad: LibrarySubject[] = [
      {
        id: 'a',
        title: 'A',
        description: 'Beschreibung eins.',
        courses: [
          { id: 'x', title: 'X', description: 'Beschreibung zwei.', status: 'available' },
          { id: courseInfo.id, title: 'Y', description: 'Beschreibung drei.', status: 'planned' },
        ],
      },
      { id: 'a', title: '', description: 'kurz', courses: [] },
    ];
    const messages = validateLibrary(bad, 'fehlt', registered).map((issue) => issue.message).join(' | ');
    expect(messages).toContain('Doppelte ID');
    expect(messages).toContain('kein registrierter Kurs');
    expect(messages).toContain('darf nicht als geplant stehen');
    expect(messages).toContain('Der Titel fehlt');
    expect(messages).toContain('Der aktive Kurs fehlt');
  });
});

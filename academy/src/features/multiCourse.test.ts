import { describe, expect, it } from 'vitest';
import { toCourseOutline } from '../../build/courseOutline';
import { baseCourses, testCourses } from '../content/allCourses';
import { barCases, transferCases } from '../content/barCases';
import { glossaryEntries } from '../content/glossary';
import { orderTasks, signalBarTasks } from '../content/practiceTasks';
import { albumOverview } from './barAlbum';
import { caseEntries, caseInCourse, courseCases } from './caseTraining';
import { matchTerms } from './matchPairs';
import { caseMistakes } from './mistakeInsights';
import {
  courseWithLesson,
  courseWithUnit,
  formatRoute,
  parseRoute,
  resolveRoute,
} from './navigation';
import { courseTasks } from './practiceTasks';
import { completeLesson, createEmptyProgress, type AcademyProgress } from './progress';
import { saveNote, savedOverview, toggleBookmark } from './savedItems';
import { topicEntries } from './topicPractice';
import { planTransfer } from './transferCheck';

/*
 * Mehrere Kurse: Jeder Kurs zeigt nur seine eigenen Übungsinhalte, Lesezeichen und Notizen.
 * Geprüft mit dem echten Kurs und dem kleinen Testkurs (den die App nur im Modus `e2e` enthält).
 */

const main = toCourseOutline(baseCourses[0]);
const test = toCourseOutline(testCourses[0]);
const both = [main, test];
const mainLessons = main.units.flatMap((unit) => unit.lessons).filter((lesson) => lesson.status === 'published');
const [testFirst, testSecond] = test.units[0].lessons;
const today = '2026-10-01';

/** Alles im Hauptkurs abgeschlossen: Dort ist dann jeder Inhalt zugänglich. */
function mainDone(): AcademyProgress {
  return mainLessons.reduce(
    (progress, lesson) => completeLesson(progress, lesson.id, lesson.xp, '2026-10-01T08:00:00.000Z'),
    createEmptyProgress(),
  );
}

describe('Mehrere Kurse: Inhalte gehören zu ihrem Kurs', () => {
  it('Trainerfälle und Transferfälle erscheinen nur im eigenen Kurs', () => {
    const progress = mainDone();
    const firstCase = barCases.find((item) => item.status === 'approved')!;
    expect(caseInCourse(main, firstCase)).toBe(true);
    expect(caseInCourse(test, firstCase)).toBe(false);
    expect(courseCases(main).length).toBeGreaterThan(0);
    expect(courseCases(test)).toEqual([]);
    expect(caseEntries(test, progress)).toEqual([]);
    expect(caseEntries(main, progress).length).toBe(courseCases(main).length);
    expect(planTransfer(test, progress, transferCases)).toMatchObject({ status: 'none', approved: 0, cases: [], locked: [] });
    expect(planTransfer(main, progress, transferCases).approved).toBeGreaterThan(0);
  });

  it('Themen, Übungsaufgaben und Album gehören zum Kurs ihrer Lektionen', () => {
    const progress = mainDone();
    expect(topicEntries(test, progress, today)).toEqual([]);
    expect(topicEntries(main, progress, today).length).toBeGreaterThan(0);
    expect(courseTasks(test, signalBarTasks)).toEqual([]);
    expect(courseTasks(test, orderTasks)).toEqual([]);
    expect(courseTasks(main, signalBarTasks)).toEqual(signalBarTasks);
    expect(albumOverview(test, progress).cards).toEqual([]);
    expect(albumOverview(main, progress).cards.length).toBeGreaterThan(0);
  });

  it('das Begriffe-Memory nutzt nur das Glossar des Kurses', () => {
    // „Kapitel 1“ gibt es in beiden Kursen – erst das eigene Glossar trennt sie.
    const progress = completeLesson(createEmptyProgress(), testFirst.id, testFirst.xp, '2026-10-01T08:00:00.000Z');
    expect(matchTerms(test, progress, glossaryEntries).length).toBeGreaterThan(0);
    expect(matchTerms(test, progress, [])).toEqual([]);
  });

  it('Fehler aus Trainerrunden zählen nur im Kurs des Falls – nicht als unbekannte Runden', () => {
    const firstCase = barCases.find((item) => item.status === 'approved')!;
    const progress: AcademyProgress = {
      ...mainDone(),
      caseRuns: {
        [firstCase.id]: [
          { sessionId: 'run-1', completedAt: '2026-10-01T09:00:00.000Z', best: 0, defensible: 0, mistake: 1, missedCues: 0 },
        ],
      },
    };
    expect(caseMistakes(test, progress)).toEqual({ items: [], runsWithoutAnswers: 0, runsOfUnknownCases: 0 });
    expect(caseMistakes(main, progress).runsWithoutAnswers).toBe(1);
  });

  it('Lesezeichen und Notizen erscheinen im eigenen Kurs, verwaiste Einträge bleiben sichtbar', () => {
    let progress = toggleBookmark(createEmptyProgress(), mainLessons[0].id, null, '2026-10-01T08:00:00.000Z');
    progress = toggleBookmark(progress, testFirst.id, null, '2026-10-01T08:01:00.000Z');
    progress = saveNote(progress, testSecond.id, null, 'Notiz im Testkurs', '2026-10-01T08:02:00.000Z');
    progress = saveNote(progress, 'alter-kurs.unit.lesson', null, 'Verwaist', '2026-10-01T08:03:00.000Z');

    const inMain = savedOverview(main, progress, [test.id]);
    expect(inMain.bookmarks.map((item) => item.bookmark.lessonId)).toEqual([mainLessons[0].id]);
    expect(inMain.notes.map((item) => item.note.text)).toEqual(['Verwaist']);
    expect(inMain.notes[0].title).toBe('Nicht mehr verfügbar');

    const inTest = savedOverview(test, progress, [main.id]);
    expect(inTest.bookmarks.map((item) => item.bookmark.lessonId)).toEqual([testFirst.id]);
    expect(inTest.notes.map((item) => item.note.text)).toEqual(['Verwaist', 'Notiz im Testkurs']);
    expect(inTest.bookmarks[0].openable).toBe(true);
  });
});

describe('Mehrere Kurse: Seiten und Links', () => {
  it('liest und schreibt die Bibliotheksseiten', () => {
    expect(parseRoute('#/library')).toEqual({ kind: 'view', view: 'library' });
    expect(parseRoute('#/library/volumen')).toEqual({ kind: 'subject', subjectId: 'volumen' });
    expect(parseRoute('#/course/test-course')).toEqual({ kind: 'course', courseId: 'test-course' });
    expect(parseRoute('#/course/')).toBeNull();
    expect(parseRoute('#/course/a/b')).toBeNull();
    expect(parseRoute('#/library/%E0%A4%A')).toBeNull();
    expect(formatRoute({ kind: 'subject', subjectId: 'volumen' })).toBe('#/library/volumen');
    expect(formatRoute({ kind: 'course', courseId: 'a b' })).toBe('#/course/a%20b');
    // Ob es Gebiet oder Kurs gibt, prüft die Seite selbst – die Route bleibt erhalten.
    expect(resolveRoute({ kind: 'course', courseId: 'gibt-es-nicht' }, main, createEmptyProgress())).toEqual({
      kind: 'course',
      courseId: 'gibt-es-nicht',
    });
  });

  it('Lektionen werden in ihrem eigenen Kurs geprüft – auch wenn ein anderer gewählt ist', () => {
    const progress = createEmptyProgress();
    expect(courseWithLesson(both, testFirst.id)).toBe(test);
    expect(courseWithUnit(both, main.units[0].id)).toBe(main);
    expect(courseWithLesson(both, 'gibt-es-nicht')).toBeUndefined();

    // Gewählt ist der Hauptkurs; die erste Lektion des Testkurses ist trotzdem offen.
    const lessonRoute = { kind: 'lesson', lessonId: testFirst.id, step: null } as const;
    expect(resolveRoute(lessonRoute, main, progress, both)).toMatchObject({ kind: 'lesson', lesson: { id: testFirst.id } });
    // Ohne den Testkurs in der Liste ist die Lektion unbekannt.
    expect(resolveRoute(lessonRoute, main, progress)).toBeNull();
    // Die zweite Lektion bleibt gesperrt, bis die erste abgeschlossen ist – im eigenen Kurs.
    const second = { kind: 'lesson', lessonId: testSecond.id, step: null } as const;
    expect(resolveRoute(second, main, progress, both)).toBeNull();
    const afterFirst = completeLesson(progress, testFirst.id, testFirst.xp, '2026-10-01T08:00:00.000Z');
    expect(resolveRoute(second, main, afterFirst, both)).toMatchObject({ kind: 'lesson', lesson: { id: testSecond.id } });
  });

  it('Transferprüfung gehört zum gewählten Kurs', () => {
    const progress = mainDone();
    expect(resolveRoute({ kind: 'transfer' }, main, progress, both)).toEqual({ kind: 'transfer' });
    expect(resolveRoute({ kind: 'transfer' }, test, progress, both)).toBeNull();
  });

  it('Trainerfälle öffnen im Kurs des Falls', () => {
    const progress = mainDone();
    const firstCase = barCases.find((item) => item.status === 'approved')!;
    const route = { kind: 'train', caseId: firstCase.id } as const;
    expect(resolveRoute(route, test, progress, both)).toMatchObject({ kind: 'train', barCase: { id: firstCase.id } });
    expect(resolveRoute(route, test, progress, [test])).toBeNull();
  });
});

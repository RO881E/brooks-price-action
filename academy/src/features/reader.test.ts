import { describe, expect, it } from 'vitest';
import { priceActionTrendsCourse } from '../content/course';
import { formatRoute, parseRoute, resolveRoute } from './navigation';
import { createEmptyProgress, recordReaderPosition, type AcademyProgress } from './progress';
import {
  defaultSection,
  lockHint,
  nextSection,
  nextUnit,
  openQuestions,
  previousSection,
  readerProgress,
  readerSections,
  resolveReader,
  sectionResolved,
} from './reader';

const course = priceActionTrendsCourse;
const [intro, partOne, chapterOne] = course.units;

function completed(ids: string[]): AcademyProgress {
  return { ...createEmptyProgress(), completedLessonIds: ids };
}

/** Alles bis einschließlich der ersten `count` Lektionen der Einleitung erledigt. */
const introDone = (count: number) => completed(intro.lessons.slice(0, count).map((lesson) => lesson.id));

describe('Leser-Route', () => {
  it('liest und schreibt Einheit, Abschnitt und Schritt', () => {
    expect(parseRoute('#/read/price-action-trends.chapter-01')).toEqual({
      kind: 'read',
      unitId: 'price-action-trends.chapter-01',
      lessonId: null,
      step: null,
    });
    const route = parseRoute('#/read/u%201?lesson=l%2F2&step=3');
    expect(route).toEqual({ kind: 'read', unitId: 'u 1', lessonId: 'l/2', step: 3 });
    expect(parseRoute(formatRoute(route!))).toEqual(route);
    expect(formatRoute({ kind: 'read', unitId: 'u', lessonId: 'l', step: null })).toBe('#/read/u?lesson=l');
    expect(formatRoute({ kind: 'read', unitId: 'u', lessonId: null, step: 4 })).toBe('#/read/u');
  });

  it('verwirft kaputte oder unvollständige Leser-Links', () => {
    expect(parseRoute('#/read/')).toBeNull();
    expect(parseRoute('#/read/%E0%A4%A')).toBeNull();
    expect(parseRoute('#/read/u/extra')).toBeNull();
    // Schritt ohne Abschnitt wird ignoriert, ungültiger Schritt ebenso.
    expect(parseRoute('#/read/u?step=2')).toMatchObject({ lessonId: null, step: null });
    expect(parseRoute('#/read/u?lesson=l&step=0')).toMatchObject({ lessonId: 'l', step: null });
    expect(parseRoute('#/read/u?lesson=%20&step=2')).toMatchObject({ lessonId: null, step: null });
  });

  it('fällt bei unbekannter Einheit auf den Lernpfad zurück', () => {
    expect(resolveRoute({ kind: 'read', unitId: 'gibt-es-nicht', lessonId: null, step: null }, course, createEmptyProgress())).toBeNull();
    expect(resolveRoute({ kind: 'read', unitId: intro.id, lessonId: null, step: null }, course, createEmptyProgress())).toMatchObject({ kind: 'read' });
  });
});

describe('resolveReader', () => {
  it('beginnt neu beim ersten freien Abschnitt', () => {
    const reader = resolveReader(course, createEmptyProgress(), intro.id, null, null)!;
    expect(reader.section?.lesson.id).toBe(intro.lessons[0].id);
    expect(reader.section?.number).toBe(1);
    expect(reader.stepIndex).toBeNull();
    expect(reader.fellBack).toBe(false);
  });

  it('zeigt für eine gesperrte Einheit keinen Abschnitt, aber die Gliederung', () => {
    const reader = resolveReader(course, createEmptyProgress(), chapterOne.id, null, null)!;
    expect(reader.section).toBeUndefined();
    expect(reader.sections.every((section) => section.state === 'locked')).toBe(true);
  });

  it('fällt bei gesperrtem, unbekanntem oder fremdem Abschnitt sicher zurück', () => {
    const progress = introDone(2);
    for (const lessonId of [intro.lessons[5].id, 'gibt-es-nicht', partOne.lessons[0].id]) {
      const reader = resolveReader(course, progress, intro.id, lessonId, 3)!;
      expect(reader.fellBack).toBe(true);
      expect(reader.section?.lesson.id).toBe(intro.lessons[2].id);
      expect(reader.stepIndex).toBeNull();
    }
  });

  it('öffnet abgeschlossene Abschnitte erneut und begrenzt den Schritt', () => {
    const progress = introDone(2);
    const lesson = intro.lessons[0];
    expect(resolveReader(course, progress, intro.id, lesson.id, 2)!).toMatchObject({
      fellBack: false,
      stepIndex: 1,
    });
    expect(resolveReader(course, progress, intro.id, lesson.id, 99)!.stepIndex).toBeNull();
    expect(resolveReader(course, progress, intro.id, lesson.id, null)!.stepIndex).toBeNull();
  });

  it('setzt ohne Abschnitt im Link an der gespeicherten Lesestelle fort', () => {
    const lesson = intro.lessons[1];
    const progress = recordReaderPosition(introDone(3), intro.id, lesson.id, lesson.steps[2].id);
    const reader = resolveReader(course, progress, intro.id, null, null)!;
    expect(reader.section?.lesson.id).toBe(lesson.id);
    expect(reader.stepIndex).toBe(2);
    // Gespeicherter Schritt existiert nicht mehr: Abschnittsanfang.
    const stale = recordReaderPosition(introDone(3), intro.id, lesson.id, 'alter-schritt');
    expect(resolveReader(course, stale, intro.id, null, null)!.stepIndex).toBeNull();
  });

  it('ignoriert eine gespeicherte Lesestelle, die nicht (mehr) lesbar ist', () => {
    const progress = recordReaderPosition(introDone(1), intro.id, intro.lessons[8].id, null);
    expect(defaultSection(course, intro, progress)?.lesson.id).toBe(intro.lessons[1].id);
    const unknown = recordReaderPosition(introDone(1), intro.id, 'geloescht', null);
    expect(defaultSection(course, intro, unknown)?.lesson.id).toBe(intro.lessons[1].id);
  });

  it('liest nach vollständigem Abschluss wieder von vorn', () => {
    const all = completed(intro.lessons.map((lesson) => lesson.id));
    expect(defaultSection(course, intro, all)?.lesson.id).toBe(intro.lessons[0].id);
  });
});

describe('Abschnitte, Fragen und Hinweise', () => {
  const lesson = intro.lessons[0];
  const question = lesson.steps.find((step) => step.type === 'question')!;

  it('verlangt jede Pflichtfrage, bevor weitergelesen wird', () => {
    const open = createEmptyProgress();
    expect(sectionResolved(lesson, open)).toBe(false);
    expect(openQuestions(lesson, open)).toBe(1);
    const answered: AcademyProgress = {
      ...open,
      questionResults: {
        [question.id]: {
          selectedOptionId: question.type === 'question' ? question.correctOptionId : null,
          attempts: 1,
          firstAttemptCorrect: true,
          status: 'correct',
          wrongOptionIds: [],
        },
      },
    };
    expect(sectionResolved(lesson, answered)).toBe(true);
    expect(openQuestions(lesson, answered)).toBe(0);
  });

  it('benennt den nächsten gesperrten Abschnitt und was ihn freischaltet', () => {
    const hint = lockHint(course, intro, introDone(1));
    expect(hint.locked?.lesson.id).toBe(intro.lessons[2].id);
    expect(hint.prerequisite?.id).toBe(intro.lessons[1].id);
    expect(hint.prerequisiteUnit?.id).toBe(intro.id);

    const chapter = lockHint(course, chapterOne, introDone(1));
    expect(chapter.locked?.lesson.id).toBe(chapterOne.lessons[0].id);
    expect(chapter.prerequisiteUnit?.id).toBe(intro.id);
  });

  it('zählt abgeschlossene Abschnitte statt eine Quote zu erfinden', () => {
    const sections = readerSections(course, intro, introDone(3));
    expect(readerProgress(sections)).toEqual({ completed: 3, total: intro.lessons.length });
    expect(nextSection(sections, intro.lessons[0].id)?.lesson.id).toBe(intro.lessons[1].id);
    expect(nextSection(sections, intro.lessons.at(-1)!.id)).toBeUndefined();
    expect(previousSection(sections, intro.lessons[0].id)).toBeUndefined();
    expect(nextUnit(course, intro.id)?.id).toBe(partOne.id);
    expect(nextUnit(course, course.units.at(-1)!.id)).toBeUndefined();
  });
});

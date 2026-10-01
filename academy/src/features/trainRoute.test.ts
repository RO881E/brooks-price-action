import { describe, expect, it } from 'vitest';
import { toCourseOutline } from '../../build/courseOutline';
import { barCases } from '../content/barCases';
import { priceActionTrendsCourse } from '../content/course';
import { caseLockedBy, publishedCases } from './caseTraining';
import { formatRoute, parseRoute, resolveRoute } from './navigation';
import { completeLesson, createEmptyProgress, type AcademyProgress } from './progress';

const course = toCourseOutline(priceActionTrendsCourse);
const [firstCase] = publishedCases();

function unlocked(): AcademyProgress {
  let progress = createEmptyProgress();
  for (const lesson of course.units.flatMap((unit) => unit.lessons)) {
    if (!caseLockedBy(course, progress, firstCase)) break;
    if (lesson.status === 'published') progress = completeLesson(progress, lesson.id, 0, '2026-09-29T08:00:00.000Z');
  }
  return progress;
}

describe('Route des Bar-für-Bar-Trainers (F-15)', () => {
  it('liest und schreibt #/train/<Fall-ID>', () => {
    const route = { kind: 'train' as const, caseId: firstCase.id };
    expect(formatRoute(route)).toBe(`#/train/${firstCase.id}`);
    expect(parseRoute(formatRoute(route))).toEqual(route);
    expect(parseRoute('#/train/')).toBeNull();
    expect(parseRoute('#/train/%E0%A4%A')).toBeNull();
    expect(parseRoute('#/train/a/b')).toBeNull();
  });

  it('öffnet nur freigegebene, zugängliche Fälle', () => {
    expect(resolveRoute({ kind: 'train', caseId: firstCase.id }, course, createEmptyProgress())).toBeNull();
    expect(resolveRoute({ kind: 'train', caseId: firstCase.id }, course, unlocked())).toEqual({
      kind: 'train',
      barCase: firstCase,
    });
    expect(resolveRoute({ kind: 'train', caseId: 'gibt-es-nicht' }, course, unlocked())).toBeNull();
    const draft = barCases.find((item) => item.status !== 'approved');
    if (draft) expect(resolveRoute({ kind: 'train', caseId: draft.id }, course, unlocked())).toBeNull();
  });
});

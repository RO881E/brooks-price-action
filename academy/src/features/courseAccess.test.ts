import { describe, expect, it } from 'vitest';
import { brooksTrendsCourse } from '../content/course';
import type { Course } from '../content/types';
import { lessonAccessState, nextAvailableLesson } from './courseAccess';

describe('course access', () => {
  const introduction = brooksTrendsCourse.units[0];
  const partIntroduction = brooksTrendsCourse.units[1];
  const chapterOne = brooksTrendsCourse.units[2];

  it('unlocks published lessons one by one inside a complete source unit', () => {
    expect(
      lessonAccessState(brooksTrendsCourse, introduction.lessons[0], []),
    ).toBe('available');
    expect(
      lessonAccessState(brooksTrendsCourse, introduction.lessons[1], []),
    ).toBe('locked');

    expect(
      lessonAccessState(brooksTrendsCourse, introduction.lessons[1], [
        introduction.lessons[0].id,
      ]),
    ).toBe('available');
  });

  it('opens Part I after the introduction and keeps chapter 1 behind it', () => {
    const completedIntroduction = introduction.lessons.map((lesson) => lesson.id);

    expect(partIntroduction.lessons.every((lesson) => lesson.status === 'published')).toBe(true);
    expect(
      lessonAccessState(
        brooksTrendsCourse,
        partIntroduction.lessons[0],
        completedIntroduction,
      ),
    ).toBe('available');
    expect(
      lessonAccessState(
        brooksTrendsCourse,
        partIntroduction.lessons[1],
        completedIntroduction,
      ),
    ).toBe('locked');
    expect(
      lessonAccessState(
        brooksTrendsCourse,
        chapterOne.lessons[0],
        completedIntroduction,
      ),
    ).toBe('locked');
    expect(
      nextAvailableLesson(brooksTrendsCourse, completedIntroduction),
    ).toBe(partIntroduction.lessons[0]);
  });

  it('does not skip a planned gap within a unit', () => {
    const syntheticCourse: Course = {
      id: 'test',
      eyebrow: 'Test',
      title: 'Test',
      subtitle: 'Test',
      sourceOrderNotice: 'Test',
      units: [
        {
          id: 'unit',
          order: 1,
          kind: 'chapter',
          label: 'Unit',
          title: 'Unit',
          description: 'Unit',
          estimatedLessonCount: 3,
          lessons: [
            {
              id: 'one',
              title: 'One',
              summary: 'One',
              durationMinutes: 1,
              xp: 1,
              sourceUnit: 'Unit',
              status: 'published',
              steps: [],
            },
            {
              id: 'gap',
              title: 'Gap',
              summary: 'Gap',
              durationMinutes: 0,
              xp: 0,
              sourceUnit: 'Unit',
              status: 'planned',
              steps: [],
            },
            {
              id: 'three',
              title: 'Three',
              summary: 'Three',
              durationMinutes: 1,
              xp: 1,
              sourceUnit: 'Unit',
              status: 'published',
              steps: [],
            },
          ],
        },
      ],
    };

    expect(
      lessonAccessState(syntheticCourse, syntheticCourse.units[0].lessons[2], [
        'one',
      ]),
    ).toBe('locked');
  });

  it('keeps completed lessons revisitable', () => {
    expect(
      lessonAccessState(brooksTrendsCourse, chapterOne.lessons[0], [
        chapterOne.lessons[0].id,
      ]),
    ).toBe('complete');
  });
});

import { describe, expect, it } from 'vitest';
import { priceActionTrendsCourse } from '../content/course';
import type { Course } from '../content/types';
import { lessonAccessState, nextAvailableLesson } from './courseAccess';

describe('course access', () => {
  const introduction = priceActionTrendsCourse.units[0];
  const partIntroduction = priceActionTrendsCourse.units[1];
  const chapterOne = priceActionTrendsCourse.units[2];
  const chapterTwo = priceActionTrendsCourse.units[3];
  const chapterThree = priceActionTrendsCourse.units[4];
  const chapterFour = priceActionTrendsCourse.units[5];

  it('unlocks published lessons one by one inside a complete source unit', () => {
    expect(
      lessonAccessState(priceActionTrendsCourse, introduction.lessons[0], []),
    ).toBe('available');
    expect(
      lessonAccessState(priceActionTrendsCourse, introduction.lessons[1], []),
    ).toBe('locked');

    expect(
      lessonAccessState(priceActionTrendsCourse, introduction.lessons[1], [
        introduction.lessons[0].id,
      ]),
    ).toBe('available');
  });

  it('opens Part I after the introduction and keeps chapter 1 behind it', () => {
    const completedIntroduction = introduction.lessons.map((lesson) => lesson.id);

    expect(partIntroduction.lessons.every((lesson) => lesson.status === 'published')).toBe(true);
    expect(
      lessonAccessState(
        priceActionTrendsCourse,
        partIntroduction.lessons[0],
        completedIntroduction,
      ),
    ).toBe('available');
    expect(
      lessonAccessState(
        priceActionTrendsCourse,
        partIntroduction.lessons[1],
        completedIntroduction,
      ),
    ).toBe('locked');
    expect(
      lessonAccessState(
        priceActionTrendsCourse,
        chapterOne.lessons[0],
        completedIntroduction,
      ),
    ).toBe('locked');
    expect(
      nextAvailableLesson(priceActionTrendsCourse, completedIntroduction),
    ).toBe(partIntroduction.lessons[0]);
  });

  it('opens chapter 1 after Part I and unlocks its lessons in order', () => {
    const completedEarlierUnits = [
      ...introduction.lessons.map((lesson) => lesson.id),
      ...partIntroduction.lessons.map((lesson) => lesson.id),
    ];

    expect(
      lessonAccessState(
        priceActionTrendsCourse,
        chapterOne.lessons[0],
        completedEarlierUnits,
      ),
    ).toBe('available');
    expect(
      lessonAccessState(
        priceActionTrendsCourse,
        chapterOne.lessons[1],
        completedEarlierUnits,
      ),
    ).toBe('locked');
    expect(nextAvailableLesson(priceActionTrendsCourse, completedEarlierUnits)).toBe(
      chapterOne.lessons[0],
    );
  });

  it('keeps chapter 3 behind the complete chapter 2', () => {
    const completedThroughChapterOne = [
      ...introduction.lessons,
      ...partIntroduction.lessons,
      ...chapterOne.lessons,
    ].map((lesson) => lesson.id);
    const completedThroughChapterTwo = [
      ...completedThroughChapterOne,
      ...chapterTwo.lessons.map((lesson) => lesson.id),
    ];

    expect(
      lessonAccessState(
        priceActionTrendsCourse,
        chapterThree.lessons[0],
        completedThroughChapterOne,
      ),
    ).toBe('locked');
    expect(
      lessonAccessState(
        priceActionTrendsCourse,
        chapterThree.lessons[0],
        completedThroughChapterTwo,
      ),
    ).toBe('available');
  });

  it('keeps chapter 4 behind the complete chapter 3', () => {
    const completedThroughChapterTwo = [
      ...introduction.lessons,
      ...partIntroduction.lessons,
      ...chapterOne.lessons,
      ...chapterTwo.lessons,
    ].map((lesson) => lesson.id);
    const completedThroughChapterThree = [
      ...completedThroughChapterTwo,
      ...chapterThree.lessons.map((lesson) => lesson.id),
    ];

    expect(
      lessonAccessState(
        priceActionTrendsCourse,
        chapterFour.lessons[0],
        completedThroughChapterTwo,
      ),
    ).toBe('locked');
    expect(
      lessonAccessState(
        priceActionTrendsCourse,
        chapterFour.lessons[0],
        completedThroughChapterThree,
      ),
    ).toBe('available');
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
      lessonAccessState(priceActionTrendsCourse, chapterOne.lessons[0], [
        chapterOne.lessons[0].id,
      ]),
    ).toBe('complete');
  });
});

import type { Course, CourseUnit, Lesson } from '../content/types';

export type LessonAccessState = 'complete' | 'available' | 'locked' | 'planned';

function unitIsFullyReleased(unit: CourseUnit): boolean {
  const publishedCount = unit.lessons.filter(
    (lesson) => lesson.status === 'published',
  ).length;

  return publishedCount >= unit.estimatedLessonCount;
}

function unitIsComplete(unit: CourseUnit, completed: Set<string>): boolean {
  return (
    unitIsFullyReleased(unit) &&
    unit.lessons.every(
      (lesson) => lesson.status === 'published' && completed.has(lesson.id),
    )
  );
}

export function lessonAccessState(
  course: Course,
  lesson: Lesson,
  completedLessonIds: Iterable<string>,
): LessonAccessState {
  if (lesson.status === 'planned') return 'planned';

  const completed = new Set(completedLessonIds);
  if (completed.has(lesson.id)) return 'complete';

  const unitIndex = course.units.findIndex((unit) =>
    unit.lessons.some((candidate) => candidate.id === lesson.id),
  );

  if (unitIndex < 0) return 'locked';

  const previousUnitsComplete = course.units
    .slice(0, unitIndex)
    .every((unit) => unitIsComplete(unit, completed));

  if (!previousUnitsComplete) return 'locked';

  const unit = course.units[unitIndex];
  const lessonIndex = unit.lessons.findIndex(
    (candidate) => candidate.id === lesson.id,
  );
  const previousLessonsComplete = unit.lessons
    .slice(0, lessonIndex)
    .every(
      (candidate) =>
        candidate.status === 'published' && completed.has(candidate.id),
    );

  return previousLessonsComplete ? 'available' : 'locked';
}

export function nextAvailableLesson(
  course: Course,
  completedLessonIds: Iterable<string>,
): Lesson | undefined {
  return course.units
    .flatMap((unit) => unit.lessons)
    .find(
      (lesson) =>
        lessonAccessState(course, lesson, completedLessonIds) === 'available',
    );
}

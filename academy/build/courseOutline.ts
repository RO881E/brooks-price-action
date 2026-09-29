import type { Course, CourseOutline, LessonStep, StepOutline } from '../src/content/types.ts';

function stepOutline(step: LessonStep): StepOutline {
  return step.type === 'question'
    ? { id: step.id, type: step.type, title: step.title, correctOptionId: step.correctOptionId }
    : { id: step.id, type: step.type, title: step.title };
}

/**
 * Gliederung aus dem vollständigen Kurs (F-12): Einheiten, Lektionen und
 * Schritte in unveränderter Reihenfolge und mit unveränderten IDs, aber ohne
 * Lehrtexte, Antwortoptionen und Diagrammdaten.
 */
export function toCourseOutline(course: Course): CourseOutline {
  return {
    ...course,
    units: course.units.map((unit) => ({
      ...unit,
      lessons: unit.lessons.map((lesson) => ({
        ...lesson,
        steps: lesson.steps.map(stepOutline),
      })),
    })),
  };
}

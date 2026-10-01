import type { Lesson } from '../../types';
import { chapterTenFoundationLessons } from './chapter-10-foundations';
import { chapterTenFigure101Lessons } from './chapter-10-figure-101';
import { chapterTenFigure102Lessons } from './chapter-10-figure-102';
import { chapterTenDeepDiveLessons } from './chapter-10-deep-dive';

export const chapterTenLessons = [
  ...chapterTenFoundationLessons,
  ...chapterTenFigure101Lessons,
  ...chapterTenFigure102Lessons,
  ...chapterTenDeepDiveLessons,
] satisfies Lesson[];

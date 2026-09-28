import type { Lesson } from '../../types';
import { chapterFourApplicationLessons } from './chapter-04-application';
import { chapterFourCaseFollowthroughLessons } from './chapter-04-case-followthrough';
import { chapterFourFoundationLessons } from './chapter-04-foundations';
import { chapterFourPatternLessons } from './chapter-04-patterns';

export const chapterFourLessons = [
  ...chapterFourFoundationLessons.slice(0, 5),
  ...chapterFourPatternLessons,
  ...chapterFourFoundationLessons.slice(5),
  ...chapterFourApplicationLessons,
  ...chapterFourCaseFollowthroughLessons,
] satisfies Lesson[];

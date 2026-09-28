import type { Lesson } from '../../types';
import { chapterFourApplicationLessons } from './chapter-04-application';
import { chapterFourFoundationLessons } from './chapter-04-foundations';

export const chapterFourLessons = [
  ...chapterFourFoundationLessons,
  ...chapterFourApplicationLessons,
] satisfies Lesson[];

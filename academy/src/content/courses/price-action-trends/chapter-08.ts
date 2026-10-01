import type { Lesson } from '../../types';
import { chapterEightFoundationLessons } from './chapter-08-foundations';
import { chapterEightCaseLessons } from './chapter-08-cases';

export const chapterEightLessons = [
  ...chapterEightFoundationLessons,
  ...chapterEightCaseLessons,
] satisfies Lesson[];

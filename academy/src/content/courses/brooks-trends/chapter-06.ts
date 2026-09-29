import type { Lesson } from '../../types';
import { chapterSixFoundationLessons } from './chapter-06-foundations';
import { chapterSixCaseLessons } from './chapter-06-cases';

export const chapterSixLessons = [
  ...chapterSixFoundationLessons,
  ...chapterSixCaseLessons,
] satisfies Lesson[];

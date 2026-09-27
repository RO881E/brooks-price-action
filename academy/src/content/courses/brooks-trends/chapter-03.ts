import type { Lesson } from '../../types';
import { chapterThreeCaseLessons } from './chapter-03-case';
import { chapterThreeFoundationLessons } from './chapter-03-foundations';

export const chapterThreeLessons = [
  ...chapterThreeFoundationLessons,
  ...chapterThreeCaseLessons,
] satisfies Lesson[];

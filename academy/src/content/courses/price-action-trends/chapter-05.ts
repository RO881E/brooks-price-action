import type { Lesson } from '../../types';
import { chapterFiveFoundationLessons } from './chapter-05-foundations';
import { chapterFiveContextLessons } from './chapter-05-context';
import { chapterFiveCaseLessons } from './chapter-05-cases';

export const chapterFiveLessons = [
  ...chapterFiveFoundationLessons,
  ...chapterFiveContextLessons,
  ...chapterFiveCaseLessons,
] satisfies Lesson[];

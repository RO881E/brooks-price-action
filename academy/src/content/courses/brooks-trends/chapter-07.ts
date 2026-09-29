import type { Lesson } from '../../types';
import { chapterSevenFoundationLessons } from './chapter-07-foundations';
import { chapterSevenCaseLessons } from './chapter-07-cases';

export const chapterSevenLessons = [
  ...chapterSevenFoundationLessons,
  ...chapterSevenCaseLessons,
] satisfies Lesson[];

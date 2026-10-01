import type { Lesson } from '../../types';
import { chapterNineFoundationLessons } from './chapter-09-foundations';
import { chapterNineCaseLessons } from './chapter-09-cases';

export const chapterNineLessons = [
  ...chapterNineFoundationLessons,
  ...chapterNineCaseLessons,
] satisfies Lesson[];

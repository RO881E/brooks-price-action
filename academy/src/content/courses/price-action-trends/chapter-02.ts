import type { Lesson } from '../../types';
import { chapterTwoCaseLessons } from './chapter-02-cases';
import { chapterTwoClimaxLessons } from './chapter-02-climaxes';
import { chapterTwoFoundationLessons } from './chapter-02-foundations';
import { chapterTwoPressureDojiLessons } from './chapter-02-pressure-dojis';

export const chapterTwoLessons = [
  ...chapterTwoFoundationLessons,
  ...chapterTwoClimaxLessons,
  ...chapterTwoPressureDojiLessons,
  ...chapterTwoCaseLessons,
] satisfies Lesson[];

import type { Lesson } from '../../types';
import { chapterOneCountingLessons } from './chapter-01-counting';
import { chapterOneFoundationLessons } from './chapter-01-foundations';

export const chapterOneLessons = [
  ...chapterOneFoundationLessons,
  ...chapterOneCountingLessons,
] satisfies Lesson[];

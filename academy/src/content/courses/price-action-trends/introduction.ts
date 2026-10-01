import type { Lesson } from '../../types';
import { introductionFoundationLessons } from './introduction-foundations';
import { introductionPracticeLessons } from './introduction-practice';
import { introductionStrengthLessons } from './introduction-strength';

export const introductionLessons = [
  ...introductionFoundationLessons,
  ...introductionPracticeLessons,
  ...introductionStrengthLessons,
] satisfies Lesson[];

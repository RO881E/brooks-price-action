import type { Lesson } from '../../types';
import { partOneBasicLessons } from './part-01-basics';
import { partOneContextLessons } from './part-01-context';
import { partOneFlowAndHftLessons } from './part-01-flow-hft';
import { partOnePracticeLessons } from './part-01-practice';

export const partOneLessons = [
  ...partOneBasicLessons,
  ...partOneContextLessons,
  ...partOneFlowAndHftLessons,
  ...partOnePracticeLessons,
] satisfies Lesson[];

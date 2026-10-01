import type { Lesson } from '../../types';
import { chapterThreeCaseLessons } from './chapter-03-case';
import { chapterThreeExpansionCaseLessons } from './chapter-03-expansion-case';
import { chapterThreeExpansionFoundationLessons } from './chapter-03-expansion-foundations';
import { chapterThreeFoundationLessons } from './chapter-03-foundations';

export const chapterThreeLessons = [
  chapterThreeFoundationLessons[0],
  chapterThreeFoundationLessons[1],
  chapterThreeExpansionFoundationLessons.channelTwoSided,
  chapterThreeFoundationLessons[2],
  chapterThreeExpansionFoundationLessons.channelStartTest,
  chapterThreeFoundationLessons[3],
  chapterThreeExpansionFoundationLessons.channelBreakoutPaths,
  chapterThreeExpansionFoundationLessons.rangeDualRole,
  chapterThreeExpansionFoundationLessons.testReferenceMap,
  ...chapterThreeFoundationLessons.slice(4),
  chapterThreeExpansionCaseLessons.everySwingTest,
  ...chapterThreeCaseLessons.slice(0, 4),
  chapterThreeExpansionCaseLessons.barNineDefense,
  chapterThreeExpansionCaseLessons.barThreeGap,
  chapterThreeCaseLessons[4],
  chapterThreeExpansionCaseLessons.channelPositioning,
  chapterThreeExpansionCaseLessons.wedgePushes,
  chapterThreeExpansionCaseLessons.flagStack,
  chapterThreeCaseLessons[5],
] satisfies Lesson[];

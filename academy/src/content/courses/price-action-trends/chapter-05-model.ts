import type { ChartScenarioId, Lesson } from '../../types';

export interface ReversalLessonDraft {
  number: number;
  title: string;
  summary: string;
  sourceUnit: string;
  sourceAnchors: [string, string, string, ...string[]];
  durationMinutes: number;
  teachingTitle: string;
  paragraphs: [string, string, string, ...string[]];
  callout: string;
  scenario: ChartScenarioId;
  chartTitle: string;
  caption: string;
  observations: [string, string, string, ...string[]];
  questionTitle: string;
  prompt: string;
  choices: [string, string, string];
  explanations: [string, string, string];
  correct: 0 | 1 | 2;
  takeaways: [string, string, string, ...string[]];
  comparison?: {
    title: string;
    positive: { title: string; points: [string, string, ...string[]] };
    warning: { title: string; points: [string, string, ...string[]] };
  };
}

// Stable IDs are derived from the book's chapter and lesson number, not array position.
// This matters because progress, bookmarks and review cards refer to these IDs.
export function makeChapterFiveLesson(draft: ReversalLessonDraft): Lesson {
  const key = 'chapter-05-' + String(draft.number).padStart(2, '0');
  return {
    id: 'price-action-trends.chapter-05.lesson-' + String(draft.number).padStart(2, '0'),
    title: draft.title,
    summary: draft.summary,
    durationMinutes: draft.durationMinutes,
    xp: 45,
    sourceUnit: draft.sourceUnit,
    sourceAnchors: draft.sourceAnchors,
    status: 'published',
    steps: [
      {
        id: key + '-explain',
        type: 'explanation',
        eyebrow: 'Kapitel 5 · Reversal-Bars',
        title: draft.teachingTitle,
        paragraphs: draft.paragraphs,
        callout: draft.callout,
      },
      {
        id: key + '-diagram',
        type: 'diagram',
        title: draft.chartTitle,
        scenario: draft.scenario,
        caption: draft.caption,
        observations: draft.observations,
      },
      ...(draft.comparison
        ? [{
            id: key + '-compare',
            type: 'comparison' as const,
            title: draft.comparison.title,
            columns: [
              {
                title: draft.comparison.positive.title,
                tone: 'positive' as const,
                points: draft.comparison.positive.points,
              },
              {
                title: draft.comparison.warning.title,
                tone: 'warning' as const,
                points: draft.comparison.warning.points,
              },
            ],
          }]
        : []),
      {
        id: key + '-question',
        type: 'question',
        title: draft.questionTitle,
        prompt: draft.prompt,
        options: draft.choices.map((label, index) => ({
          id: 'choice-' + index,
          label,
          explanation: draft.explanations[index],
        })),
        correctOptionId: 'choice-' + draft.correct,
      },
      {
        id: key + '-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: draft.takeaways,
      },
    ],
  };
}

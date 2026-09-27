export type ChartScenarioId =
  | 'auction-balance'
  | 'institutional-flow'
  | 'fractal-timeframes'
  | 'indicator-lag'
  | 'news-reaction'
  | 'timeframe-discipline'
  | 'risk-reward'
  | 'martingale-growth'
  | 'trend-strength'
  | 'breakout-strength'
  | 'reversal-bars'
  | 'reversal-strength'
  | 'probability-spectrum'
  | 'trend-range-transition'
  | 'order-flow-cycle'
  | 'trend-range-choice'
  | 'breakout-outcomes'
  | 'pattern-evolution'
  | 'tick-auction'
  | 'institutional-wave'
  | 'hft-small-edge'
  | 'latency-race'
  | 'liquidity-crowding'
  | 'inertia-excess'
  | 'bar-close-trap'
  | 'bar-anatomy'
  | 'high-low-count'
  | 'high-low-failure'
  | 'price-action-spectrum'
  | 'market-inertia'
  | 'bear-range-resumption'
  | 'two-leg-labels'
  | 'failed-open-breakout'
  | 'midday-false-breakout';

export type LessonStep =
  | {
      id: string;
      type: 'explanation';
      eyebrow?: string;
      title: string;
      paragraphs: string[];
      callout?: string;
    }
  | {
      id: string;
      type: 'diagram';
      title: string;
      scenario: ChartScenarioId;
      caption: string;
      observations: string[];
    }
  | {
      id: string;
      type: 'comparison';
      title: string;
      columns: Array<{
        title: string;
        tone: 'neutral' | 'positive' | 'warning';
        points: string[];
      }>;
    }
  | {
      id: string;
      type: 'question';
      title: string;
      prompt: string;
      options: Array<{
        id: string;
        label: string;
        explanation: string;
      }>;
      correctOptionId: string;
    }
  | {
      id: string;
      type: 'recap';
      title: string;
      points: string[];
    };

export interface Lesson {
  id: string;
  title: string;
  summary: string;
  durationMinutes: number;
  xp: number;
  sourceUnit: string;
  sourceAnchors?: string[];
  status: 'published' | 'planned';
  steps: LessonStep[];
}

export interface CourseUnit {
  id: string;
  order: number;
  kind: 'reference' | 'introduction' | 'part-introduction' | 'chapter';
  label: string;
  title: string;
  description: string;
  estimatedLessonCount: number;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  sourceOrderNotice: string;
  units: CourseUnit[];
}

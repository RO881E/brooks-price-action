export type ChapterFiveScenarioId =
  | 'reversal-meaning'
  | 'bull-reversal-anatomy'
  | 'bear-reversal-anatomy'
  | 'reversal-many-closes'
  | 'reversal-entry-chain'
  | 'reversal-with-trend'
  | 'reversal-break-retest'
  | 'reversal-second-test'
  | 'reversal-overlap-range'
  | 'reversal-midpoint-overlap'
  | 'reversal-large-doji'
  | 'reversal-wrong-end-tail'
  | 'reversal-small-bar'
  | 'reversal-forming-trap'
  | 'reversal-tail-context'
  | 'reversal-timeframe-zoom'
  | 'reversal-daily-compression'
  | 'reversal-case-51-overlap'
  | 'reversal-case-51-failure'
  | 'reversal-case-52-break'
  | 'reversal-case-52-inside'
  | 'reversal-case-53-unconventional'
  | 'reversal-case-53-doji-entry'
  | 'reversal-case-53-flag'
  | 'reversal-three-decisions';

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
  | 'midday-false-breakout'
  | 'bar-control-spectrum'
  | 'two-sided-trend-bar'
  | 'relative-doji'
  | 'trend-bar-four-roles'
  | 'vacuum-vs-follow-through'
  | 'follow-through-decision'
  | 'human-vs-tick-speed'
  | 'climax-vs-reversal'
  | 'ideal-trend-bar'
  | 'cumulative-pressure'
  | 'strong-weak-range'
  | 'trending-dojis'
  | 'late-buy-climax'
  | 'contextual-doji'
  | 'multiframe-doji-reversal'
  | 'bear-day-context'
  | 'failed-bull-breakout'
  | 'quiet-collapse'
  | 'exhaustion-bear-spike'
  | 'trend-to-range-pressure'
  | 'breakout-spike-channel'
  | 'channel-shallowing'
  | 'channel-to-range-cycle'
  | 'channel-counter-flag'
  | 'test-area-decision'
  | 'behavior-reversal'
  | 'reversal-inertia'
  | 'reversal-multiframe-map'
  | 'failed-low-breakout'
  | 'repeated-high-test'
  | 'spike-to-overlap'
  | 'breakeven-defense'
  | 'breakout-gap-always-in'
  | 'spike-channel-playbook'
  | 'channel-two-sided-orders'
  | 'channel-start-magnet'
  | 'channel-breakout-paths'
  | 'range-dual-role'
  | 'test-reference-layers'
  | 'every-swing-test-map'
  | 'bar-nine-defense'
  | 'bar-three-breakout-gap'
  | 'channel-positioning-cycle'
  | 'wedge-pushes'
  | 'nested-flags-map'
  | 'setup-direction'
  | 'bar-role-lifecycle'
  | 'one-bar-order-map'
  | 'contextual-imbalance'
  | 'signal-family-map'
  | 'inside-outside-sequences'
  | 'contextual-failure-setups'
  | 'beginner-signal-filter'
  | 'trend-signal-strength'
  | 'stop-entry-lifecycle'
  | 'candle-name-reduction'
  | 'forming-bar-climax'
  | 'signal-entry-case'
  | 'continuation-setup-map'
  | 'one-bar-reversal-setup'
  | 'two-bar-reversal-setup'
  | 'three-bar-reversal-setup'
  | 'small-inside-context'
  | 'ii-iii-compression'
  | 'ioi-sequence'
  | 'outside-oo-sequence'
  | 'double-test-setup'
  | 'failed-continuation-setup'
  | 'shaved-structural-setups'
  | 'figure-41-followthrough'
  | ChapterFiveScenarioId;

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

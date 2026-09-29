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

export const CHAPTER_SIX_SCENARIOS = [
  'c06-signal-context', 'c06-strong-spike', 'c06-trend-asymmetry',
  'c06-two-bar', 'c06-pair-boundary', 'c06-overlap-ma',
  'c06-three-bar', 'c06-small-inside', 'c06-ii-iii',
  'c06-ioi-outside', 'c06-micro-double', 'c06-failed-reversal',
  'c06-shaved', 'c06-exhaustion', 'c06-trend-range',
  'c06-channel-orders', 'c06-breakout-pause', 'c06-final-flag',
  'c06-small-location',
  'c06-case-01', 'c06-case-02', 'c06-case-03', 'c06-case-04',
  'c06-case-05', 'c06-case-06', 'c06-case-07', 'c06-case-08',
  'c06-case-09', 'c06-case-10', 'c06-case-11', 'c06-case-12',
  'c06-case-13', 'c06-case-14', 'c06-case-15', 'c06-case-16',
  'c06-case-17', 'c06-case-18', 'c06-case-19',
] as const;

export type ChapterSixScenarioId = (typeof CHAPTER_SIX_SCENARIOS)[number];

export const CHAPTER_SEVEN_SCENARIOS = [
  'c07-boundaries', 'c07-three-roles', 'c07-breakout-risk',
  'c07-prior-signal', 'c07-second-entry', 'c07-range-middle',
  'c07-ioi-context', 'c07-trend-outside', 'c07-leg-origin',
  'c07-trapped-orders', 'c07-wait',
  'c07-figure-71-trend', 'c07-figure-71-range',
  'c07-figure-72-failed-ioi', 'c07-figure-72-upper-edge',
  'c07-figure-72-later-bottom',
  'c07-figure-73-open', 'c07-figure-73-higher-low',
  'c07-figure-73-oo', 'c07-figure-73-day-type',
  'c07-figure-74-bull-entry', 'c07-figure-74-bear-trap',
  'c07-figure-74-second-signal', 'c07-figure-74-failed-highs',
] as const;

export type ChapterSevenScenarioId = (typeof CHAPTER_SEVEN_SCENARIOS)[number];

export const CHAPTER_EIGHT_SCENARIOS = [
  'c08-early-entry', 'c08-daily-close', 'c08-false-bull-reversal',
  'c08-bear-signal-weakens', 'c08-premature-stop', 'c08-entry-followthrough',
  'c08-close-line', 'c08-figure-context', 'c08-figure-stop-distance',
  'c08-figure-stopout', 'c08-figure-recovery', 'c08-figure-failed-breaks',
] as const;

export type ChapterEightScenarioId = (typeof CHAPTER_EIGHT_SCENARIOS)[number];

export const CHAPTER_NINE_SCENARIOS = [
  'c09-view-choice', 'c09-spy-context', 'c09-inverse-view',
  'c09-flag-or-bottom', 'c09-failed-breakout', 'c09-extra-markets',
  'c09-adjustments', 'c09-figure-91-pair', 'c09-figure-91-inverse',
  'c09-figure-92-gap',
] as const;

export type ChapterNineScenarioId = (typeof CHAPTER_NINE_SCENARIOS)[number];

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
  | ChapterFiveScenarioId
  | ChapterSixScenarioId
  | ChapterSevenScenarioId
  | ChapterEightScenarioId
  | ChapterNineScenarioId;

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

/*
 * Gliederung des Kurses (F-12): alles, was Navigation, Freischaltung, Suche,
 * Fortsetzen und Statistik brauchen – ohne die Lehrtexte der Schritte. Die
 * Gliederung wird beim Build aus denselben Inhaltsdateien erzeugt und ist
 * sofort verfügbar; die vollständigen Lektionen lädt die App kapitelweise.
 * Vollständige Typen (`Lesson`, `Course`) erfüllen diese Typen strukturell.
 */
export type StepOutline =
  | { id: string; type: Exclude<LessonStep['type'], 'question'>; title: string }
  | { id: string; type: 'question'; title: string; correctOptionId: string };

export type QuestionOutline = Extract<StepOutline, { type: 'question' }>;

export interface LessonOutline extends Omit<Lesson, 'steps'> {
  steps: StepOutline[];
}

export interface UnitOutline extends Omit<CourseUnit, 'lessons'> {
  lessons: LessonOutline[];
}

export interface CourseOutline extends Omit<Course, 'units'> {
  units: UnitOutline[];
}

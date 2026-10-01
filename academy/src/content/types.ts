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

export const CHAPTER_TEN_SCENARIOS = [
  'c10-second-at-extremes', 'c10-first-second', 'c10-better-price',
  'c10-smaller-timeframe', 'c10-countertrend-wait',
  'c10-101-price-map', 'c10-101-bargain-trap', 'c10-101-bull-evidence',
  'c10-101-micro-doubles',
  'c10-102-first-short', 'c10-102-second-long', 'c10-102-no-second',
  'c10-102-second-short',
  'c10-deep-yesterday', 'c10-deep-low-failure', 'c10-deep-double-top',
  'c10-deep-low4', 'c10-deep-high2', 'c10-deep-final-flag',
  'c10-deep-three-climaxes', 'c10-deep-micro-bottom', 'c10-deep-low1',
  'c10-deep-bar11',
] as const;

export type ChapterTenScenarioId = (typeof CHAPTER_TEN_SCENARIOS)[number];

export const CHAPTER_ELEVEN_SCENARIOS = [
  "c11-missed-trend",
  "c11-clear-direction",
  "c11-swing-size",
  "c11-risk-size",
  "c11-hold-vs-enter",
  "c11-four-bars",
  "c11-wait-pullback",
  "c11-failed-bear",
  "c11-inside-signal",
  "c11-late-arrival",
  "c11-add-position",
  "c11-tight-channel",
  "c11-ma-gap",
  "c11-twenty-gap",
  "c11-higher-timeframe",
  "c11-checklist"
] as const;

export type ChapterElevenScenarioId = (typeof CHAPTER_ELEVEN_SCENARIOS)[number];

export const CHAPTER_TWELVE_SCENARIOS = [
  "c12-current-bars",
  "c12-expand-or-reverse",
  "c12-trapped-orders",
  "c12-reset-context",
  "c12-scalp-vs-swing",
  "c12-expanding-triangle",
  "c12-micro-line",
  "c12-final-flag",
  "c12-channel-range",
  "c12-opening-flags",
  "c12-121-wedge-top",
  "c12-121-complex-low2",
  "c12-121-wedge-bottom",
  "c12-121-failed-low2",
  "c12-121-channel-top",
  "c12-121-failed-high2",
  "c12-122-gap-reversal",
  "c12-122-double-flags",
  "c12-122-two-readings",
  "c12-122-trending-ranges",
  "c12-observation-plan"
] as const;

export type ChapterTwelveScenarioId = (typeof CHAPTER_TWELVE_SCENARIOS)[number];

export const CHAPTER_NINETEEN_SCENARIOS = [
  "c19-01",
  "c19-02",
  "c19-03",
  "c19-04",
  "c19-05",
  "c19-06",
  "c19-07",
  "c19-08",
  "c19-09",
  "c19-10",
  "c19-11",
  "c19-12",
  "c19-13",
  "c19-14",
  "c19-15",
  "c19-16",
  "c19-17",
  "c19-18",
  "c19-19",
  "c19-20",
  "c19-21",
  "c19-22",
  "c19-23",
  "c19-24",
  "c19-25",
  "c19-26",
  "c19-27",
  "c19-28",
  "c19-29",
  "c19-30",
  "c19-31",
  "c19-32",
  "c19-33",
  "c19-34",
  "c19-35",
  "c19-36",
  "c19-37",
  "c19-38",
  "c19-39",
  "c19-40",
  "c19-41",
  "c19-42",
  "c19-43",
  "c19-44",
  "c19-45"
] as const;
export type ChapterNineteenScenarioId = (typeof CHAPTER_NINETEEN_SCENARIOS)[number];

export const CHAPTER_EIGHTEEN_SCENARIOS = [
  "c18-01",
  "c18-02",
  "c18-03",
  "c18-04",
  "c18-05",
  "c18-06",
  "c18-07",
  "c18-08",
  "c18-09",
  "c18-10",
  "c18-11",
  "c18-12",
  "c18-13",
  "c18-14",
  "c18-15",
  "c18-16",
  "c18-17",
  "c18-18",
  "c18-19",
  "c18-20",
  "c18-21",
  "c18-22",
  "c18-23",
  "c18-24",
  "c18-25",
  "c18-26",
  "c18-27",
  "c18-28",
  "c18-29",
  "c18-30",
  "c18-31",
  "c18-32",
  "c18-33",
  "c18-34",
  "c18-35",
  "c18-36",
  "c18-37",
  "c18-38",
  "c18-39",
  "c18-40",
  "c18-41",
  "c18-42",
  "c18-43",
  "c18-44",
  "c18-45",
  "c18-46",
  "c18-47",
  "c18-48"
] as const;
export type ChapterEighteenScenarioId = (typeof CHAPTER_EIGHTEEN_SCENARIOS)[number];

export const CHAPTER_SEVENTEEN_SCENARIOS = [
  "c17-01",
  "c17-02",
  "c17-03",
  "c17-04",
  "c17-05",
  "c17-06",
  "c17-07",
  "c17-08",
  "c17-09",
  "c17-10",
  "c17-11",
  "c17-12",
  "c17-13",
  "c17-14",
  "c17-15",
  "c17-16",
  "c17-17",
  "c17-18",
  "c17-19",
  "c17-20",
  "c17-21",
  "c17-22",
  "c17-23",
  "c17-24",
  "c17-25",
  "c17-26",
  "c17-27",
  "c17-28"
] as const;
export type ChapterSeventeenScenarioId = (typeof CHAPTER_SEVENTEEN_SCENARIOS)[number];

export const CHAPTER_SIXTEEN_SCENARIOS = [
  "c16-01",
  "c16-02",
  "c16-03",
  "c16-04",
  "c16-05",
  "c16-06",
  "c16-07",
  "c16-08",
  "c16-09",
  "c16-10",
  "c16-11",
  "c16-12",
  "c16-13",
  "c16-14",
  "c16-15",
  "c16-16",
  "c16-17",
  "c16-18",
  "c16-19",
  "c16-20",
  "c16-21",
  "c16-22",
  "c16-23",
  "c16-24",
  "c16-25",
  "c16-26",
  "c16-27",
  "c16-28",
  "c16-29",
  "c16-30",
  "c16-31",
  "c16-32",
  "c16-33",
  "c16-34",
  "c16-35",
  "c16-36",
  "c16-37",
  "c16-38",
  "c16-39",
  "c16-40",
  "c16-41",
  "c16-42",
  "c16-43",
  "c16-44",
  "c16-45",
  "c16-46"
] as const;
export type ChapterSixteenScenarioId = (typeof CHAPTER_SIXTEEN_SCENARIOS)[number];

export const CHAPTER_FIFTEEN_SCENARIOS = [
  "c15-01",
  "c15-02",
  "c15-03",
  "c15-04",
  "c15-05",
  "c15-06",
  "c15-07",
  "c15-08",
  "c15-09",
  "c15-10",
  "c15-11",
  "c15-12",
  "c15-13",
  "c15-14",
  "c15-15",
  "c15-16",
  "c15-17",
  "c15-18",
  "c15-19",
  "c15-20",
  "c15-21",
  "c15-22",
  "c15-23",
  "c15-24",
  "c15-25",
  "c15-26",
  "c15-27",
  "c15-28",
  "c15-29",
  "c15-30",
  "c15-31",
  "c15-32",
  "c15-33",
  "c15-34",
  "c15-35",
  "c15-36",
  "c15-37",
  "c15-38",
  "c15-39",
  "c15-40",
  "c15-41",
  "c15-42",
  "c15-43",
  "c15-44",
  "c15-45",
  "c15-46",
  "c15-47",
  "c15-48",
  "c15-49",
  "c15-50",
  "c15-51",
  "c15-52"
] as const;
export type ChapterFifteenScenarioId = (typeof CHAPTER_FIFTEEN_SCENARIOS)[number];

export const CHAPTER_FOURTEEN_SCENARIOS = [
  "c14-01",
  "c14-02",
  "c14-03",
  "c14-04",
  "c14-05",
  "c14-06",
  "c14-07",
  "c14-08",
  "c14-09",
  "c14-10",
  "c14-11",
  "c14-12",
  "c14-13",
  "c14-14",
  "c14-15",
  "c14-16",
  "c14-17",
  "c14-18",
  "c14-19",
  "c14-20",
  "c14-21",
  "c14-22",
  "c14-23",
  "c14-24",
  "c14-25",
  "c14-26",
  "c14-27",
  "c14-28"
] as const;
export type ChapterFourteenScenarioId = (typeof CHAPTER_FOURTEEN_SCENARIOS)[number];

export const CHAPTER_THIRTEEN_SCENARIOS = [
  "c13-01",
  "c13-02",
  "c13-03",
  "c13-04",
  "c13-05",
  "c13-06",
  "c13-07",
  "c13-08",
  "c13-09",
  "c13-10",
  "c13-11",
  "c13-12",
  "c13-13",
  "c13-14",
  "c13-15",
  "c13-16",
  "c13-17",
  "c13-18",
  "c13-19",
  "c13-20",
  "c13-21",
  "c13-22",
  "c13-23",
  "c13-24",
  "c13-25",
  "c13-26",
  "c13-27",
  "c13-28",
  "c13-29",
  "c13-30",
  "c13-31",
  "c13-32",
  "c13-33",
  "c13-34",
  "c13-35",
  "c13-36"
] as const;

export type ChapterThirteenScenarioId = (typeof CHAPTER_THIRTEEN_SCENARIOS)[number];

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
  | ChapterNineScenarioId
  | ChapterTenScenarioId
  | ChapterElevenScenarioId
  | ChapterTwelveScenarioId
  | ChapterThirteenScenarioId
  | ChapterFourteenScenarioId
  | ChapterFifteenScenarioId
  | ChapterSixteenScenarioId
  | ChapterSeventeenScenarioId
  | ChapterEighteenScenarioId
  | ChapterNineteenScenarioId;

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

export type ChartScenarioId =
  | 'auction-balance'
  | 'probability-spectrum'
  | 'trend-range-transition'
  | 'bar-anatomy'
  | 'high-low-count';

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

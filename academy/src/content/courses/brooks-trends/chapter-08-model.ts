import type { ChapterEightScenarioId, Lesson } from '../../types';

type Triple<T> = [T, T, T];
type Answer = [label: string, explanation: string];

export interface ChapterEightDraft {
  number: number;
  title: string;
  summary: string;
  section: string;
  anchors: Triple<string>;
  scenario: ChapterEightScenarioId;
  paragraphs: Triple<string>;
  callout: string;
  diagramTitle: string;
  caption: string;
  observations: Triple<string>;
  prompt: string;
  answers: Triple<Answer>;
  correct: 0 | 1 | 2;
  takeaways: Triple<string>;
}

export function chapterEightLesson(d: ChapterEightDraft): Lesson {
  const number = String(d.number).padStart(2, '0');
  const id = `brooks-trends.chapter-08.lesson-${number}`;
  const key = `chapter-08-${number}`;
  return {
    id, title: d.title, summary: d.summary,
    sourceUnit: `Kapitel 8 · ${d.section}`,
    sourceAnchors: d.anchors,
    durationMinutes: 12, xp: 45, status: 'published',
    steps: [
      { id: `${key}-explain`, type: 'explanation', eyebrow: 'Kapitel 8 · Der Schluss eines Bars',
        title: d.title, paragraphs: d.paragraphs, callout: d.callout },
      { id: `${key}-diagram`, type: 'diagram', title: d.diagramTitle,
        scenario: d.scenario, caption: d.caption, observations: d.observations },
      { id: `${key}-question`, type: 'question', title: 'Entscheidung am Schluss', prompt: d.prompt,
        options: d.answers.map(([label, explanation], index) => ({
          id: `choice-${index}`, label, explanation,
        })), correctOptionId: `choice-${d.correct}` },
      { id: `${key}-recap`, type: 'recap', title: 'Das nimmst du mit', points: d.takeaways },
    ],
  };
}

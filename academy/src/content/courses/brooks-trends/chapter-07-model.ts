import type { ChapterSevenScenarioId, Lesson } from '../../types';

type Triple<T> = [T, T, T];
type Answer = [label: string, explanation: string];

export interface ChapterSevenDraft {
  number: number;
  title: string;
  summary: string;
  section: string;
  anchors: Triple<string>;
  scenario: ChapterSevenScenarioId;
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

export function chapterSevenLesson(d: ChapterSevenDraft): Lesson {
  const number = String(d.number).padStart(2, '0');
  const id = `brooks-trends.chapter-07.lesson-${number}`;
  const key = `chapter-07-${number}`;
  return {
    id,
    title: d.title,
    summary: d.summary,
    sourceUnit: `Kapitel 7 · ${d.section}`,
    sourceAnchors: d.anchors,
    durationMinutes: 12,
    xp: 45,
    status: 'published',
    steps: [
      { id: `${key}-explain`, type: 'explanation', eyebrow: 'Kapitel 7 · Outside Bars',
        title: d.title, paragraphs: d.paragraphs, callout: d.callout },
      { id: `${key}-diagram`, type: 'diagram', title: d.diagramTitle,
        scenario: d.scenario, caption: d.caption, observations: d.observations },
      { id: `${key}-question`, type: 'question', title: 'Kontext prüfen', prompt: d.prompt,
        options: d.answers.map(([label, explanation], index) => ({
          id: `choice-${index}`, label, explanation,
        })), correctOptionId: `choice-${d.correct}` },
      { id: `${key}-recap`, type: 'recap', title: 'Das nimmst du mit', points: d.takeaways },
    ],
  };
}

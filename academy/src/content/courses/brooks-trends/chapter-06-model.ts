import type { ChapterSixScenarioId, Lesson } from '../../types';

type Triple<T> = [T, T, T];
type Answer = [label: string, explanation: string];

export interface ChapterSixDraft {
  number: number;
  title: string;
  summary: string;
  section: string;
  anchors: Triple<string>;
  scenario: ChapterSixScenarioId;
  paragraphs: [string, string, string, ...string[]];
  callout: string;
  diagramTitle: string;
  caption: string;
  observations: Triple<string>;
  prompt: string;
  answers: Triple<Answer>;
  correct: 0 | 1 | 2;
  takeaways: Triple<string>;
}

// Stable IDs are independent of array position. Review, notes and bookmarks
// keep pointing to the same lesson when further chapters are added.
export function chapterSixLesson(d: ChapterSixDraft): Lesson {
  const index = String(d.number).padStart(2, '0');
  const id = `brooks-trends.chapter-06.lesson-${index}`;
  const key = `chapter-06-${index}`;
  return {
    id,
    title: d.title,
    summary: d.summary,
    durationMinutes: 12,
    xp: 45,
    sourceUnit: `Kapitel 6 · ${d.section}`,
    sourceAnchors: d.anchors,
    status: 'published',
    steps: [
      { id: `${key}-explain`, type: 'explanation', eyebrow: 'Kapitel 6 · Weitere Signal-Bars',
        title: d.title, paragraphs: d.paragraphs, callout: d.callout },
      { id: `${key}-diagram`, type: 'diagram', title: d.diagramTitle,
        scenario: d.scenario, caption: d.caption, observations: d.observations },
      { id: `${key}-question`, type: 'question', title: 'Kontext prüfen', prompt: d.prompt,
        options: d.answers.map(([label, explanation], i) => ({
          id: `choice-${i}`, label, explanation,
        })), correctOptionId: `choice-${d.correct}` },
      { id: `${key}-recap`, type: 'recap', title: 'Das nimmst du mit', points: d.takeaways },
    ],
  };
}

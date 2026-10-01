import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { librarySubjects } from '../src/content/library';
import { renderCatalog } from './catalog.mjs';

const root = join(import.meta.dirname, '..');

describe('Themenkatalog', () => {
  it('docs/THEMENKATALOG.md ist aus der Bibliothek erzeugt und aktuell', () => {
    const file = readFileSync(join(root, 'docs/THEMENKATALOG.md'), 'utf8');
    expect(file, 'Themenkatalog veraltet – `npm run catalog` ausführen').toBe(renderCatalog(librarySubjects));
  });

  it('nennt jedes Thema und jedes Unterthema der Bibliothek', () => {
    const text = renderCatalog(librarySubjects);
    for (const subject of librarySubjects) {
      expect(text).toContain(`. ${subject.title}\n`);
      for (const course of subject.courses) {
        expect(text).toContain(`### ${course.title}`);
        for (const topic of course.subtopics) expect(text).toContain(`- ${topic}\n`);
      }
    }
  });
});

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

const root = join(import.meta.dirname, '..');

/* Auch IDs, Code-Bezeichner und Texte im Quellcode nennen den Autor nicht (Repository-Name ausgenommen). */
function sourceFiles(dir: string, out: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) sourceFiles(path, out);
    else if (/\.(tsx?|css|json|html|webmanifest)$/.test(name)) out.push(path);
  }
  return out;
}

describe('keine Autoren- oder Buchnamen im Quellcode', () => {
  it('src, public und index.html', () => {
    const files = [...sourceFiles(join(root, 'src')), ...sourceFiles(join(root, 'public')), join(root, 'index.html')].filter(
      (file) => !file.endsWith('noBookReferences.test.ts'),
    );
    const hits = files.filter((file) => /brooks/i.test(readFileSync(file, 'utf8')));
    expect(hits).toEqual([]);
  });
});

import { readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { runnerImport, type Plugin } from 'vite';
import { toCourseOutline } from './courseOutline.ts';
import type { Course } from '../src/content/types.ts';

export const COURSE_OUTLINE_ID = 'virtual:wqt-course-outline';
const RESOLVED_ID = `\0${COURSE_OUTLINE_ID}`;

function contentFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    return entry.isDirectory() ? contentFiles(full) : entry.name.endsWith('.ts') ? [full] : [];
  });
}

/**
 * Stellt die Kursgliederung als virtuelles Modul bereit (F-12). Sie wird aus
 * den echten Inhaltsdateien berechnet – beim Build und im Entwicklungsserver –
 * und kann deshalb nie von den Lektionen abweichen.
 */
export function courseOutlinePlugin(): Plugin {
  let root = process.cwd();
  return {
    name: 'wqt-course-outline',
    configResolved(config) {
      root = config.root;
    },
    resolveId(id) {
      return id === COURSE_OUTLINE_ID ? RESOLVED_ID : undefined;
    },
    async load(id) {
      if (id !== RESOLVED_ID) return undefined;
      const contentDir = resolve(root, 'src/content');
      // Änderungen an Inhalten erneuern die Gliederung auch im Entwicklungsserver.
      for (const file of contentFiles(contentDir)) this.addWatchFile(file);
      const { module } = await runnerImport<{ brooksTrendsCourse: Course }>(
        resolve(contentDir, 'course.ts'),
        { configFile: false, logLevel: 'error' },
      );
      // Als JSON-String: Große Datenobjekte parst der Browser so schneller als ein
      // gleichwertiges Objektliteral.
      const json = JSON.stringify(toCourseOutline(module.brooksTrendsCourse));
      return `export default JSON.parse(${JSON.stringify(json)});\n`;
    },
  };
}

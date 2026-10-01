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
 * Stellt die Gliederungen aller Kurse als virtuelles Modul bereit (F-12, Mehrkurs). Sie werden aus
 * den echten Inhaltsdateien berechnet – beim Build und im Entwicklungsserver –
 * und können deshalb nie von den Lektionen abweichen.
 */
export function courseOutlinePlugin(): Plugin {
  let root = process.cwd();
  let mode = 'production';
  return {
    name: 'wqt-course-outline',
    configResolved(config) {
      root = config.root;
      mode = config.mode;
    },
    resolveId(id) {
      return id === COURSE_OUTLINE_ID ? RESOLVED_ID : undefined;
    },
    async load(id) {
      if (id !== RESOLVED_ID) return undefined;
      const contentDir = resolve(root, 'src/content');
      // Änderungen an Inhalten erneuern die Gliederung auch im Entwicklungsserver.
      for (const file of contentFiles(contentDir)) this.addWatchFile(file);
      const { module } = await runnerImport<{ baseCourses: Course[]; testCourses: Course[] }>(
        resolve(contentDir, 'allCourses.ts'),
        { configFile: false, logLevel: 'error' },
      );
      // Den Testkurs gibt es nur in den Browser-Tests (Modus `e2e`), wie im Kursregister der App.
      const courses = mode === 'e2e' ? [...module.baseCourses, ...module.testCourses] : module.baseCourses;
      // Als JSON-String: Große Datenobjekte parst der Browser so schneller als ein
      // gleichwertiges Objektliteral.
      const json = JSON.stringify(courses.map(toCourseOutline));
      return `export default JSON.parse(${JSON.stringify(json)});\n`;
    },
  };
}

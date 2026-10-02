import { readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { runnerImport, type Plugin } from 'vite';
import { toCourseOutline } from './courseOutline.ts';
import { compactJsonModule } from './compactJson.ts';
import type { Course } from '../src/content/types.ts';

export const COURSE_OUTLINE_ID = 'virtual:wqt-course-outline';
const RESOLVED_ID = `\0${COURSE_OUTLINE_ID}`;

function contentFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    return entry.isDirectory() ? contentFiles(full) : entry.name.endsWith('.ts') ? [full] : [];
  });
}

/** Separate build modules keep a growing course from invalidating every outline. */
export function courseOutlineModules(courses: readonly Course[]): Map<string, string> {
  const modules = new Map<string, string>();
  const imports = courses.map((course, index) => {
    const id = `${COURSE_OUTLINE_ID}/${course.id}`;
    modules.set(id, compactJsonModule(toCourseOutline(course)));
    return `import course${index} from ${JSON.stringify(id)};`;
  });
  modules.set(COURSE_OUTLINE_ID, `${imports.join('\n')}\nexport default [${courses.map((_, index) => `course${index}`).join(', ')}];\n`);
  return modules;
}

/**
 * The catalog remains synchronous for cross-course search and saved progress.
 * Each course has its own statically imported outline chunk and size limit.
 * Lesson texts continue to load lazily, independently of these small outlines.
 */
export function courseOutlinePlugin(): Plugin {
  let root = process.cwd();
  let mode = 'production';
  let moduleCache: Promise<Map<string, string>> | undefined;
  const reset = () => { moduleCache = undefined; };
  return {
    name: 'wqt-course-outline',
    configResolved(config) {
      root = config.root;
      mode = config.mode;
      reset();
    },
    buildStart: reset,
    watchChange: reset,
    handleHotUpdate: reset,
    resolveId(id) {
      return id === COURSE_OUTLINE_ID || id.startsWith(`${COURSE_OUTLINE_ID}/`) ? `\0${id}` : undefined;
    },
    async load(id) {
      if (id !== RESOLVED_ID && !id.startsWith(`${RESOLVED_ID}/`)) return undefined;
      const contentDir = resolve(root, 'src/content');
      for (const file of contentFiles(contentDir)) this.addWatchFile(file);
      moduleCache ??= runnerImport<{ baseCourses: Course[]; testCourses: Course[] }>(
        resolve(contentDir, 'allCourses.ts'),
        { configFile: false, logLevel: 'error' },
      ).then(({ module }) => courseOutlineModules(
        mode === 'e2e' ? [...module.baseCourses, ...module.testCourses] : module.baseCourses,
      )).catch((error: unknown) => { reset(); throw error; });
      return (await moduleCache).get(id.slice(1));
    },
  };
}

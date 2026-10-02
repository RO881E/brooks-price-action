import { readFileSync } from 'node:fs';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import { courseOutlinePlugin } from './build/courseOutlinePlugin.ts';
import { serviceWorkerPlugin } from './pwa/serviceWorkerPlugin.ts';

const { version } = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8')) as { version: string };

export default defineConfig({
  base: './',
  define: { __APP_VERSION__: JSON.stringify(version) },
  plugins: [react(), courseOutlinePlugin(), serviceWorkerPlugin()],
  build: {
    rolldownOptions: {
      output: {
        // React als eigener, selten wechselnder Chunk. Die Kursinhalte teilt
        // `src/content/units.ts` per dynamischem Import in je einen Chunk pro
        // Einheit (F-12); die Schaubilder lädt der Lesson Player bei Bedarf.
        codeSplitting: {
          groups: [
            { name: 'react', test: /node_modules[\\/](react|react-dom|scheduler)[\\/]/ },
            // Course outlines stay immediately available to the catalog, but
            // each course has a separate cached chunk with its own size budget.
            { name: (id: string) => {
              const prefix = 'virtual:wqt-course-outline/';
              const start = id.indexOf(prefix);
              return start < 0 ? null : `course-outline-${id.slice(start + prefix.length)}`;
            }, test: /virtual:wqt-course-outline\//, includeDependenciesRecursively: false },
            // Keep the growing chart collection below the per-chunk size warning.
            { name: 'ChartFocus-basics', test: /(?:ReadingCharts(?:Basics|Grouping)\.tsx|chapter-03-model\.ts)$/, includeDependenciesRecursively: false },
            { name: 'ChartFocus-phase', test: /ChapterTwenty(?:One|Two|Three|Four|Five|Six)Charts\.tsx$/ },
          ],
        },
      },
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    exclude: ['tests/**', 'node_modules/**', 'dist/**', '.wqt-playwright-tmp/**'],
    coverage: {
      reporter: ['text', 'html'],
    },
  },
});

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import { courseOutlinePlugin } from './build/courseOutlinePlugin.ts';
import { serviceWorkerPlugin } from './pwa/serviceWorkerPlugin.ts';

export default defineConfig({
  base: './',
  plugins: [react(), courseOutlinePlugin(), serviceWorkerPlugin()],
  build: {
    rolldownOptions: {
      output: {
        // React als eigener, selten wechselnder Chunk. Die Kursinhalte teilt
        // `src/content/units.ts` per dynamischem Import in je einen Chunk pro
        // Einheit (F-12); die Schaubilder lädt der Lesson Player bei Bedarf.
        codeSplitting: {
          groups: [{ name: 'react', test: /node_modules[\\/](react|react-dom|scheduler)[\\/]/ }],
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

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import { serviceWorkerPlugin } from './pwa/serviceWorkerPlugin.ts';

export default defineConfig({
  base: './',
  plugins: [react(), serviceWorkerPlugin()],
  build: {
    rolldownOptions: {
      output: {
        // Eigene Chunks für React und die Kursinhalte: Sie ändern sich selten
        // gemeinsam, laden parallel und bleiben einzeln unter der Warnschwelle.
        // Die Schaubilder lädt der Lesson Player zusätzlich erst bei Bedarf.
        codeSplitting: {
          groups: [
            { name: 'react', test: /node_modules[\\/](react|react-dom|scheduler)[\\/]/ },
            // Buchreihenfolge bleibt unverändert – nur die Auslieferung ist geteilt.
            {
              name: 'course-basics',
              test: /src[\\/]content[\\/]courses[\\/][^\\/]+[\\/](introduction|part-01)/,
            },
            { name: 'course-chapters', test: /src[\\/]content[\\/]/ },
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

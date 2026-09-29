import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import { serviceWorkerPlugin } from './pwa/serviceWorkerPlugin.ts';

export default defineConfig({
  base: './',
  plugins: [react(), serviceWorkerPlugin()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    exclude: ['tests/**', 'node_modules/**', 'dist/**', '.wqt-playwright-tmp/**'],
    coverage: {
      reporter: ['text', 'html'],
    },
  },
});

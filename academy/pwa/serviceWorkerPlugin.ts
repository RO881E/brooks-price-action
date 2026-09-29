import { createHash } from 'node:crypto';
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Plugin } from 'vite';

export const SW_FILE_NAME = 'sw.js';
export const SW_TEMPLATE_PATH = fileURLToPath(new URL('./sw-template.js', import.meta.url));

/**
 * Dateien, die nie vorgeladen werden: der Service Worker selbst, Source Maps,
 * PDFs und versteckte Dateien. PDFs sind groß und gehören nicht zur App-Shell.
 */
export function isPrecacheable(path: string): boolean {
  const name = path.split('/').pop() ?? '';
  if (path === SW_FILE_NAME || name.startsWith('.')) return false;
  return !/\.(map|pdf)$/i.test(name);
}

export interface BuildFile {
  /** Pfad relativ zum Ausgabeordner, mit `/` getrennt. */
  path: string;
  content: Uint8Array | string;
}

/**
 * Sortierte Vorlade-Liste und Version. Die Version ist ein Hash über Pfade,
 * Inhalte und die Vorlage – jede geänderte Datei ergibt eine neue Version,
 * ein unveränderter Build dieselbe.
 */
export function precacheManifest(files: BuildFile[], template: string) {
  const entries = files
    .filter((file) => isPrecacheable(file.path))
    .sort((a, b) => (a.path < b.path ? -1 : a.path > b.path ? 1 : 0));
  const hash = createHash('sha256').update(template);
  for (const entry of entries) hash.update(`\0${entry.path}\0`).update(entry.content);
  return { version: hash.digest('hex').slice(0, 12), paths: entries.map((entry) => entry.path) };
}

export function renderServiceWorker(template: string, version: string, paths: string[]): string {
  return (
    `const SW_VERSION = ${JSON.stringify(version)};\n` +
    `const SW_PRECACHE = ${JSON.stringify(paths, null, 2)};\n\n` +
    template
  );
}

function listFiles(dir: string, root = dir): BuildFile[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) return listFiles(full, root);
    return [{ path: relative(root, full).split(sep).join('/'), content: readFileSync(full) }];
  });
}

/**
 * Schreibt nach dem Produktions-Build `sw.js` in den Ausgabeordner. Ohne
 * Zusatzpaket: Die Liste ergibt sich aus den tatsächlich gebauten Dateien,
 * damit auch der relative Basis-Pfad (`base: './'`) unverändert funktioniert.
 */
export function serviceWorkerPlugin(): Plugin {
  let outDir = '';
  return {
    name: 'wqt-academy-service-worker',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const template = readFileSync(SW_TEMPLATE_PATH, 'utf8');
      const { version, paths } = precacheManifest(listFiles(outDir), template);
      writeFileSync(join(outDir, SW_FILE_NAME), renderServiceWorker(template, version, paths));
    },
  };
}

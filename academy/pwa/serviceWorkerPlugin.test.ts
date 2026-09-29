// @vitest-environment node
import { describe, expect, it } from 'vitest';
import { isPrecacheable, precacheManifest, renderServiceWorker } from './serviceWorkerPlugin';

const files = [
  { path: 'index.html', content: '<html></html>' },
  { path: 'assets/index-abc.js', content: 'console.log(1)' },
  { path: 'assets/index-abc.js.map', content: '{}' },
  { path: 'icons/icon-192.png', content: new Uint8Array([1, 2, 3]) },
  { path: 'manifest.webmanifest', content: '{}' },
  { path: 'guide.pdf', content: '%PDF' },
  { path: 'sw.js', content: 'old' },
  { path: '.DS_Store', content: '' },
];

describe('isPrecacheable', () => {
  it('lässt Service Worker, Source Maps, PDFs und versteckte Dateien aus', () => {
    expect(isPrecacheable('sw.js')).toBe(false);
    expect(isPrecacheable('assets/a.js.map')).toBe(false);
    expect(isPrecacheable('docs/Buch.PDF')).toBe(false);
    expect(isPrecacheable('.DS_Store')).toBe(false);
    expect(isPrecacheable('assets/sw.js')).toBe(true);
    expect(isPrecacheable('index.html')).toBe(true);
  });
});

describe('precacheManifest', () => {
  it('listet nur App-Dateien, sortiert und relativ zum Scope', () => {
    const { paths } = precacheManifest(files, 'template');
    expect(paths).toEqual([
      'assets/index-abc.js',
      'icons/icon-192.png',
      'index.html',
      'manifest.webmanifest',
    ]);
  });

  it('bleibt bei gleichem Inhalt stabil – unabhängig von der Reihenfolge', () => {
    const a = precacheManifest(files, 'template');
    const b = precacheManifest([...files].reverse(), 'template');
    expect(a.version).toMatch(/^[0-9a-f]{12}$/);
    expect(b.version).toBe(a.version);
  });

  it('ändert die Version bei neuem Inhalt, neuer Datei oder neuer Vorlage', () => {
    const base = precacheManifest(files, 'template').version;
    const changed = files.map((file) =>
      file.path === 'index.html' ? { ...file, content: '<html>v2</html>' } : file,
    );
    expect(precacheManifest(changed, 'template').version).not.toBe(base);
    expect(
      precacheManifest([...files, { path: 'icons/new.png', content: 'x' }], 'template').version,
    ).not.toBe(base);
    expect(precacheManifest(files, 'template v2').version).not.toBe(base);
  });

  it('ignoriert ausgeschlossene Dateien für die Version', () => {
    const base = precacheManifest(files, 'template').version;
    const withNewPdf = files.map((file) =>
      file.path === 'guide.pdf' ? { ...file, content: '%PDF-2' } : file,
    );
    expect(precacheManifest(withNewPdf, 'template').version).toBe(base);
  });
});

describe('renderServiceWorker', () => {
  it('stellt Version und Liste als Konstanten vor die Vorlage', () => {
    const source = renderServiceWorker('/* body */', 'abc123', ['index.html']);
    expect(source).toContain('const SW_VERSION = "abc123";');
    expect(source).toContain('"index.html"');
    expect(source.trimEnd().endsWith('/* body */')).toBe(true);
  });
});

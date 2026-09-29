/*
 * Service Worker der WQT Academy (F-09).
 *
 * Das Vite-Plugin `pwa/serviceWorkerPlugin.ts` stellt beim Produktions-Build
 * zwei Konstanten voran:
 *   - SW_VERSION: Inhalts-Hash aller vorgeladenen Dateien
 *   - SW_PRECACHE: Pfade relativ zum Scope (App-Shell, Kursdaten, Icons)
 *
 * Regeln:
 *   - Nur GET-Anfragen der eigenen Herkunft innerhalb des Scopes.
 *   - Nur die vorgeladenen Dateien werden aus dem Cache bedient; alles andere
 *     (z. B. PDFs, fremde Ressourcen) geht unverändert ans Netz und wird nie
 *     gespeichert.
 *   - Eine neue Version wartet, bis die Seite ausdrücklich SKIP_WAITING
 *     schickt oder alle Tabs geschlossen sind.
 *   - Beim Aktivieren werden nur ältere Caches dieser App entfernt.
 */
/* global SW_VERSION, SW_PRECACHE */

const CACHE_PREFIX = 'wqt-academy-';
const CACHE_NAME = `${CACHE_PREFIX}${SW_VERSION}`;
const SCOPE = self.registration.scope;
const INDEX_URL = new URL('index.html', SCOPE).href;
const PRECACHE_URLS = new Set(SW_PRECACHE.map((path) => new URL(path, SCOPE).href));

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) =>
        // `reload` umgeht den HTTP-Cache, damit keine veraltete Datei in die neue
        // Version gerät. Schlägt eine Datei fehl, scheitert die ganze Installation
        // und die bisherige Version bleibt aktiv.
        cache.addAll([...PRECACHE_URLS].map((url) => new Request(url, { cache: 'reload' }))),
      )
      .catch((error) =>
        // Keinen halb gefüllten Cache zurücklassen.
        caches.delete(CACHE_NAME).then(() => {
          throw error;
        }),
      ),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

/** Adresse ohne Suchparameter und Fragment – so liegen die Dateien im Cache. */
function cacheKey(url) {
  return `${url.origin}${url.pathname}`;
}

function fromCache(key, request) {
  return caches
    .open(CACHE_NAME)
    .then((cache) => cache.match(key))
    .then((cached) => cached || fetch(request));
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin || !url.href.startsWith(SCOPE)) return;

  const key = cacheKey(url);
  if (request.mode === 'navigate') {
    // Die App kennt nur ihre Startseite; die Route steht im Hash.
    if (key === SCOPE || key === INDEX_URL) event.respondWith(fromCache(INDEX_URL, request));
    return;
  }

  if (PRECACHE_URLS.has(key)) event.respondWith(fromCache(key, request));
});

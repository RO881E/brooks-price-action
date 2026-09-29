// @vitest-environment node
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { renderServiceWorker, SW_TEMPLATE_PATH } from './serviceWorkerPlugin';

const SCOPE = 'https://example.test/academy/';
const PRECACHE = ['assets/app.js', 'index.html', 'manifest.webmanifest'];
const template = readFileSync(SW_TEMPLATE_PATH, 'utf8');

type Listener = (event: Record<string, unknown>) => void;

/** Kleiner CacheStorage-Ersatz: `addAll` ist wie im Browser alles oder nichts. */
function createCaches(fetchImpl: (request: Request) => Promise<Response>) {
  const stores = new Map<string, Map<string, Response>>();
  const open = async (name: string) => {
    if (!stores.has(name)) stores.set(name, new Map());
    const store = stores.get(name)!;
    return {
      async addAll(requests: Request[]) {
        const responses = await Promise.all(requests.map((request) => fetchImpl(request)));
        if (responses.some((response) => !response.ok)) throw new TypeError('bad response');
        requests.forEach((request, index) => store.set(request.url, responses[index]));
      },
      async match(key: string) {
        return store.get(key)?.clone();
      },
    };
  };
  return {
    stores,
    api: {
      open,
      keys: async () => [...stores.keys()],
      delete: async (name: string) => stores.delete(name),
    },
  };
}

function loadWorker(version = 'v1', options: { failing?: string[] } = {}) {
  const listeners = new Map<string, Listener>();
  const requested: Request[] = [];
  const fetchImpl = vi.fn(async (request: Request | string) => {
    const req = typeof request === 'string' ? new Request(request) : request;
    requested.push(req);
    const path = new URL(req.url).pathname;
    if (options.failing?.some((failing) => path.endsWith(failing))) {
      return new Response('error', { status: 500 });
    }
    return new Response(`network:${path}`, { status: 200 });
  });
  const caches = createCaches(fetchImpl);
  const self = {
    registration: { scope: SCOPE },
    location: { origin: new URL(SCOPE).origin },
    addEventListener: (type: string, listener: Listener) => listeners.set(type, listener),
    skipWaiting: vi.fn(),
    clients: { claim: vi.fn(async () => undefined) },
  };
  runInNewContext(renderServiceWorker(template, version, PRECACHE), {
    self,
    caches: caches.api,
    fetch: fetchImpl,
    Request,
    Response,
    URL,
    Promise,
    Set,
  });

  const dispatch = (type: string, extra: Record<string, unknown> = {}) => {
    let waited: Promise<unknown> | undefined;
    let response: Promise<Response> | undefined;
    listeners.get(type)!({
      ...extra,
      waitUntil: (promise: Promise<unknown>) => {
        waited = promise;
      },
      respondWith: (value: Promise<Response>) => {
        response = Promise.resolve(value);
      },
    });
    return { waited, response };
  };

  const fetchEvent = (url: string, init: { mode?: string; method?: string } = {}) =>
    dispatch('fetch', {
      request: { url, mode: init.mode ?? 'cors', method: init.method ?? 'GET' },
    }).response;

  return { self, caches, dispatch, fetchEvent, fetchImpl, requested };
}

describe('Service Worker', () => {
  let worker: ReturnType<typeof loadWorker>;

  beforeEach(async () => {
    worker = loadWorker();
    await worker.dispatch('install').waited;
  });

  it('lädt bei der Installation alle App-Dateien am HTTP-Cache vorbei', () => {
    const store = worker.caches.stores.get('wqt-academy-v1')!;
    expect([...store.keys()].sort()).toEqual(PRECACHE.map((path) => SCOPE + path).sort());
    expect(worker.requested.every((request) => request.cache === 'reload')).toBe(true);
    // Keine automatische Aktivierung – das entscheidet die Seite.
    expect(worker.self.skipWaiting).not.toHaveBeenCalled();
  });

  it('scheitert als Ganzes, wenn eine Datei nicht geladen werden kann', async () => {
    const broken = loadWorker('v2', { failing: ['assets/app.js'] });
    await expect(broken.dispatch('install').waited).rejects.toThrow();
    expect(broken.caches.stores.has('wqt-academy-v2')).toBe(false);
  });

  it('entfernt beim Aktivieren nur ältere Caches dieser App', async () => {
    worker.caches.stores.set('wqt-academy-old', new Map());
    worker.caches.stores.set('other-app', new Map());
    await worker.dispatch('activate').waited;
    expect([...worker.caches.stores.keys()].sort()).toEqual(['other-app', 'wqt-academy-v1']);
    expect(worker.self.clients.claim).toHaveBeenCalled();
  });

  it('aktiviert eine wartende Version nur auf ausdrückliche Nachricht', () => {
    worker.dispatch('message', { data: { type: 'OTHER' } });
    expect(worker.self.skipWaiting).not.toHaveBeenCalled();
    worker.dispatch('message', { data: { type: 'SKIP_WAITING' } });
    expect(worker.self.skipWaiting).toHaveBeenCalledTimes(1);
  });

  it('beantwortet Seitenaufrufe der Startseite aus dem Cache – auch mit Hash-Route', async () => {
    worker.fetchImpl.mockClear();
    for (const url of [SCOPE, `${SCOPE}index.html`, `${SCOPE}?utm=x#/lesson/a?step=2`]) {
      const response = await worker.fetchEvent(url, { mode: 'navigate' });
      expect(await response!.text()).toBe('network:/academy/index.html');
    }
    expect(worker.fetchImpl).not.toHaveBeenCalled();
  });

  it('bedient vorgeladene Dateien aus dem Cache', async () => {
    worker.fetchImpl.mockClear();
    const response = await worker.fetchEvent(`${SCOPE}assets/app.js?v=1`);
    expect(await response!.text()).toBe('network:/academy/assets/app.js');
    expect(worker.fetchImpl).not.toHaveBeenCalled();
  });

  it('fällt aufs Netz zurück, wenn eine Datei im Cache fehlt', async () => {
    worker.caches.stores.get('wqt-academy-v1')!.delete(`${SCOPE}index.html`);
    worker.fetchImpl.mockClear();
    const response = await worker.fetchEvent(SCOPE, { mode: 'navigate' });
    expect(await response!.text()).toBe('network:/academy/');
    expect(worker.fetchImpl).toHaveBeenCalledTimes(1);
  });

  it('lässt PDFs, fremde Herkunft, andere Pfade und POST unberührt', () => {
    expect(worker.fetchEvent(`${SCOPE}buch.pdf`)).toBeUndefined();
    expect(worker.fetchEvent('https://example.test/pdfs/buch.pdf')).toBeUndefined();
    expect(worker.fetchEvent('https://cdn.example.org/academy/assets/app.js')).toBeUndefined();
    expect(worker.fetchEvent(`${SCOPE}assets/app.js`, { method: 'POST' })).toBeUndefined();
    expect(worker.fetchEvent(`${SCOPE}other.html`, { mode: 'navigate' })).toBeUndefined();
    expect(worker.fetchEvent('https://example.test/', { mode: 'navigate' })).toBeUndefined();
  });

  it('legt beim Ausliefern nichts Neues im Cache ab', async () => {
    const store = worker.caches.stores.get('wqt-academy-v1')!;
    const before = [...store.keys()];
    await worker.fetchEvent(`${SCOPE}assets/app.js`);
    await worker.fetchEvent(SCOPE, { mode: 'navigate' });
    expect([...store.keys()]).toEqual(before);
  });
});

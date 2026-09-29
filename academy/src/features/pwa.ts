/**
 * Installierbare Offline-App (F-09): Registrierung des Service Workers,
 * Update-Hinweis und Online-Status.
 *
 * Update-Strategie: Eine neue Version wird im Hintergrund vollständig geladen,
 * aber erst aktiviert, wenn die Person „Jetzt aktualisieren“ wählt – oder
 * wenn alle Tabs geschlossen sind. Erst dann lädt die Seite genau einmal neu.
 * Laufende Eingaben gehen dabei nicht verloren: Fortschritt steht sofort im
 * Speicher, Notizen werden beim Verlassen der Seite geschrieben und die
 * Route steht im Hash.
 */

export const SERVICE_WORKER_URL = './sw.js';

export interface PwaSnapshot {
  online: boolean;
  /** Ein Service Worker steuert die Seite – geladene Inhalte gehen offline. */
  offlineReady: boolean;
  /** Eine neue Version liegt bereit und wartet auf Zustimmung. */
  updateReady: boolean;
}

export interface PwaController {
  getSnapshot: () => PwaSnapshot;
  subscribe: (listener: () => void) => () => void;
  /**
   * Beobachtet sofort den Online-Status und registriert – falls ein Container
   * übergeben wird – den Service Worker, sobald `ready` erfüllt ist.
   */
  start: (container?: ServiceWorkerContainer, ready?: Promise<void>) => Promise<void>;
  /** Aktiviert die wartende Version und lädt danach einmal neu. */
  applyUpdate: () => void;
}

interface ControllerEnv {
  window: Window;
  reload: () => void;
}

export function createPwaController(env: ControllerEnv): PwaController {
  const { window: win } = env;
  let snapshot: PwaSnapshot = {
    online: win.navigator.onLine,
    offlineReady: false,
    updateReady: false,
  };
  const listeners = new Set<() => void>();
  let waiting: ServiceWorker | null = null;
  let applying = false;
  let reloading = false;
  // Eine andere Registerkarte hat die neue Version schon aktiviert.
  let activatedElsewhere = false;

  const set = (patch: Partial<PwaSnapshot>) => {
    const next = { ...snapshot, ...patch };
    if (
      next.online === snapshot.online &&
      next.offlineReady === snapshot.offlineReady &&
      next.updateReady === snapshot.updateReady
    ) {
      return;
    }
    snapshot = next;
    listeners.forEach((listener) => listener());
  };

  const reloadOnce = () => {
    if (reloading) return;
    reloading = true;
    env.reload();
  };

  const markWaiting = (worker: ServiceWorker) => {
    waiting = worker;
    set({ updateReady: true });
    worker.addEventListener('statechange', () => {
      // Scheitert die Aktivierung, bleibt die bisherige Version ohne Hinweis aktiv.
      if (worker.state === 'redundant' && waiting === worker && !activatedElsewhere) {
        waiting = null;
        applying = false;
        set({ updateReady: false });
      }
    });
  };

  const track = (registration: ServiceWorkerRegistration, container: ServiceWorkerContainer) => {
    if (registration.waiting && container.controller) markWaiting(registration.waiting);
    registration.addEventListener('updatefound', () => {
      const installing = registration.installing;
      if (!installing) return;
      installing.addEventListener('statechange', () => {
        if (installing.state !== 'installed') return;
        // Ohne bisherigen Controller ist das die Erstinstallation, kein Update.
        if (container.controller) markWaiting(installing);
        else set({ offlineReady: true });
      });
    });
  };

  return {
    getSnapshot: () => snapshot,
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    async start(container, ready) {
      win.addEventListener('online', () => set({ online: true }));
      win.addEventListener('offline', () => set({ online: false }));
      if (!container) return;
      await ready;

      const hadController = Boolean(container.controller);
      set({ offlineReady: hadController });
      container.addEventListener('controllerchange', () => {
        set({ offlineReady: true });
        if (applying) {
          reloadOnce();
        } else if (hadController) {
          // Neue Version kam aus einem anderen Tab: nicht ungefragt neu laden.
          activatedElsewhere = true;
          set({ updateReady: true });
        }
      });

      let registration: ServiceWorkerRegistration;
      try {
        registration = await container.register(SERVICE_WORKER_URL, { updateViaCache: 'none' });
      } catch {
        // Ohne Service Worker läuft die App unverändert online weiter.
        return;
      }
      track(registration, container);
      if (registration.active) set({ offlineReady: true });

      // Beim Zurückkehren in den Tab nach einer neuen Version sehen.
      win.document.addEventListener('visibilitychange', () => {
        if (win.document.visibilityState === 'visible') {
          registration.update().catch(() => undefined);
        }
      });
    },
    applyUpdate() {
      if (activatedElsewhere) {
        reloadOnce();
        return;
      }
      if (!waiting || applying) return;
      applying = true;
      waiting.postMessage({ type: 'SKIP_WAITING' });
    },
  };
}

export const pwa = createPwaController({
  window,
  reload: () => window.location.reload(),
});

/** Registriert den Service Worker im Produktions-Build nach dem Laden der Seite. */
export function startPwa(): void {
  const container =
    import.meta.env.PROD && 'serviceWorker' in navigator ? navigator.serviceWorker : undefined;
  const loaded =
    document.readyState === 'complete'
      ? Promise.resolve()
      : new Promise<void>((resolve) =>
          window.addEventListener('load', () => resolve(), { once: true }),
        );
  void pwa.start(container, loaded);
}

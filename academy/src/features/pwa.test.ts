import { describe, expect, it, vi } from 'vitest';
import { createPwaController, SERVICE_WORKER_URL } from './pwa';

class FakeWorker extends EventTarget {
  state: ServiceWorkerState = 'installing';
  postMessage = vi.fn();
  setState(state: ServiceWorkerState) {
    this.state = state;
    this.dispatchEvent(new Event('statechange'));
  }
}

class FakeRegistration extends EventTarget {
  installing: FakeWorker | null = null;
  waiting: FakeWorker | null = null;
  active: FakeWorker | null = null;
  update = vi.fn(async () => undefined);
  /** Simuliert eine gefundene neue Version. */
  found(worker = new FakeWorker()) {
    this.installing = worker;
    this.dispatchEvent(new Event('updatefound'));
    return worker;
  }
}

class FakeContainer extends EventTarget {
  controller: FakeWorker | null;
  registration = new FakeRegistration();
  register = vi.fn(async () => this.registration as unknown as ServiceWorkerRegistration);
  constructor(controlled: boolean) {
    super();
    this.controller = controlled ? new FakeWorker() : null;
  }
  changeController() {
    this.controller = new FakeWorker();
    this.dispatchEvent(new Event('controllerchange'));
  }
}

async function setup(options: { controlled?: boolean; waiting?: boolean } = {}) {
  const reload = vi.fn();
  const controller = createPwaController({ window, reload });
  const container = new FakeContainer(options.controlled ?? true);
  if (options.waiting) container.registration.waiting = new FakeWorker();
  container.registration.active = options.controlled === false ? null : new FakeWorker();
  const changes = vi.fn();
  controller.subscribe(changes);
  await controller.start(container as unknown as ServiceWorkerContainer);
  return { controller, container, reload, changes };
}

describe('PWA-Controller', () => {
  it('registriert den Service Worker relativ und ohne HTTP-Cache für sw.js', async () => {
    const { container, controller } = await setup();
    expect(container.register).toHaveBeenCalledWith(SERVICE_WORKER_URL, { updateViaCache: 'none' });
    expect(SERVICE_WORKER_URL).toBe('./sw.js');
    expect(controller.getSnapshot()).toMatchObject({ offlineReady: true, updateReady: false });
  });

  it('meldet die Erstinstallation als offline bereit, nicht als Update', async () => {
    const { container, controller, reload } = await setup({ controlled: false });
    expect(controller.getSnapshot().offlineReady).toBe(false);
    const worker = container.registration.found();
    worker.setState('installed');
    expect(controller.getSnapshot()).toMatchObject({ offlineReady: true, updateReady: false });
    // clients.claim() beim ersten Besuch darf nicht neu laden.
    container.changeController();
    expect(reload).not.toHaveBeenCalled();
    expect(controller.getSnapshot().updateReady).toBe(false);
  });

  it('kündigt eine neue Version an und aktiviert sie erst nach Zustimmung', async () => {
    const { container, controller, reload } = await setup();
    const worker = container.registration.found();
    worker.setState('installed');
    expect(controller.getSnapshot().updateReady).toBe(true);
    expect(worker.postMessage).not.toHaveBeenCalled();
    expect(reload).not.toHaveBeenCalled();

    controller.applyUpdate();
    controller.applyUpdate();
    expect(worker.postMessage).toHaveBeenCalledTimes(1);
    expect(worker.postMessage).toHaveBeenCalledWith({ type: 'SKIP_WAITING' });

    container.changeController();
    container.changeController();
    expect(reload).toHaveBeenCalledTimes(1);
  });

  it('erkennt eine schon wartende Version beim Start', async () => {
    const { controller } = await setup({ waiting: true });
    expect(controller.getSnapshot().updateReady).toBe(true);
  });

  it('verwirft den Hinweis, wenn die neue Version unbrauchbar wird', async () => {
    const { container, controller, reload } = await setup();
    const worker = container.registration.found();
    worker.setState('installed');
    worker.setState('redundant');
    expect(controller.getSnapshot().updateReady).toBe(false);
    controller.applyUpdate();
    expect(worker.postMessage).not.toHaveBeenCalled();
    expect(reload).not.toHaveBeenCalled();
  });

  it('lädt nicht ungefragt neu, wenn ein anderer Tab aktualisiert hat', async () => {
    const { container, controller, reload } = await setup();
    container.changeController();
    expect(reload).not.toHaveBeenCalled();
    expect(controller.getSnapshot().updateReady).toBe(true);
    controller.applyUpdate();
    expect(reload).toHaveBeenCalledTimes(1);
  });

  it('sucht beim Zurückkehren in den Tab nach Updates – Fehler offline bleiben still', async () => {
    const { container } = await setup();
    container.registration.update.mockRejectedValueOnce(new TypeError('offline'));
    document.dispatchEvent(new Event('visibilitychange'));
    await Promise.resolve();
    expect(container.registration.update).toHaveBeenCalledTimes(1);
  });

  it('läuft ohne Service Worker weiter, wenn die Registrierung scheitert', async () => {
    const controller = createPwaController({ window, reload: vi.fn() });
    const container = new FakeContainer(false);
    container.register.mockRejectedValueOnce(new Error('blocked'));
    await expect(
      controller.start(container as unknown as ServiceWorkerContainer),
    ).resolves.toBeUndefined();
    expect(controller.getSnapshot()).toMatchObject({ offlineReady: false, updateReady: false });
  });

  it('verfolgt den Online-Status', async () => {
    const { controller, changes } = await setup();
    window.dispatchEvent(new Event('offline'));
    expect(controller.getSnapshot().online).toBe(false);
    window.dispatchEvent(new Event('online'));
    expect(controller.getSnapshot().online).toBe(true);
    expect(changes).toHaveBeenCalled();
  });

  it('startet ohne Container nur die Online-Beobachtung', async () => {
    const controller = createPwaController({ window, reload: vi.fn() });
    await controller.start(undefined);
    window.dispatchEvent(new Event('offline'));
    expect(controller.getSnapshot()).toMatchObject({ online: false, offlineReady: false });
    window.dispatchEvent(new Event('online'));
  });
});

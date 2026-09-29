/**
 * Zoom und Verschieben für den Diagramm-Fokus (F-11) als reine Funktionen.
 *
 * Die Ansicht wird relativ zur sichtbaren Fläche beschrieben: `x`/`y` sind
 * Verschiebungen in Bruchteilen der Flächenbreite bzw. -höhe. So bleibt die
 * Ansicht beim Drehen des Geräts oder bei einer anderen Fenstergröße gültig.
 * Bei `scale` 1 passt das ganze Diagramm hinein und nichts ist verschoben.
 */
export interface ZoomView {
  scale: number;
  x: number;
  y: number;
}

export const MIN_SCALE = 1;
export const MAX_SCALE = 4;
/** Faktor je Klick auf „Vergrößern“/„Verkleinern“. */
export const ZOOM_STEP = 1.5;
/** Anteil der sichtbaren Fläche je Klick auf eine Verschieben-Taste. */
export const PAN_STEP = 0.2;

export const INITIAL_VIEW: ZoomView = { scale: 1, x: 0, y: 0 };

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

/**
 * Hält die Ansicht in gültigen Grenzen: Maßstab zwischen MIN und MAX, und das
 * Diagramm bedeckt die Fläche stets vollständig – man kann es nicht aus dem
 * Bild schieben.
 */
export function clampView(view: ZoomView): ZoomView {
  const scale = Number.isFinite(view.scale) ? clamp(view.scale, MIN_SCALE, MAX_SCALE) : MIN_SCALE;
  const limit = 1 - scale;
  const x = Number.isFinite(view.x) ? clamp(view.x, limit, 0) : 0;
  const y = Number.isFinite(view.y) ? clamp(view.y, limit, 0) : 0;
  // -0 vermeiden, damit Vergleiche und Anzeigen eindeutig bleiben.
  return { scale, x: x === 0 ? 0 : x, y: y === 0 ? 0 : y };
}

/**
 * Zoomt um `factor` so, dass der Punkt unter `focusX`/`focusY` (0–1 in der
 * sichtbaren Fläche) an seiner Stelle bleibt – wie beim Mausrad oder Pinch.
 */
export function zoomAt(view: ZoomView, factor: number, focusX = 0.5, focusY = 0.5): ZoomView {
  if (!Number.isFinite(factor) || factor <= 0) return clampView(view);
  const scale = clamp(view.scale * factor, MIN_SCALE, MAX_SCALE);
  const contentX = (focusX - view.x) / view.scale;
  const contentY = (focusY - view.y) / view.scale;
  return clampView({ scale, x: focusX - contentX * scale, y: focusY - contentY * scale });
}

export function zoomIn(view: ZoomView): ZoomView {
  return zoomAt(view, ZOOM_STEP);
}

export function zoomOut(view: ZoomView): ZoomView {
  return zoomAt(view, 1 / ZOOM_STEP);
}

/** Verschiebt um Bruchteile der sichtbaren Fläche (positiv = Inhalt nach rechts/unten). */
export function panBy(view: ZoomView, dx: number, dy: number): ZoomView {
  return clampView({ ...view, x: view.x + dx, y: view.y + dy });
}

export type PanDirection = 'left' | 'right' | 'up' | 'down';

/**
 * Tastatur-Verschieben: „links“ zeigt weiter links liegende Teile des
 * Diagramms, der Inhalt rückt also nach rechts.
 */
export function panToward(view: ZoomView, direction: PanDirection): ZoomView {
  const delta = {
    left: [PAN_STEP, 0],
    right: [-PAN_STEP, 0],
    up: [0, PAN_STEP],
    down: [0, -PAN_STEP],
  }[direction];
  return panBy(view, delta[0], delta[1]);
}

/** Ob in diese Richtung noch etwas zu sehen ist (für gesperrte Tasten). */
export function canPan(view: ZoomView, direction: PanDirection): boolean {
  const limit = 1 - view.scale;
  const epsilon = 1e-9;
  if (direction === 'left') return view.x < -epsilon;
  if (direction === 'right') return view.x > limit + epsilon;
  if (direction === 'up') return view.y < -epsilon;
  return view.y > limit + epsilon;
}

export function isInitialView(view: ZoomView): boolean {
  return view.scale === INITIAL_VIEW.scale && view.x === 0 && view.y === 0;
}

/** Zoomstufe für Anzeige und Screenreader, z. B. „150 %“. */
export function zoomLabel(view: ZoomView): string {
  return `${Math.round(view.scale * 100)} %`;
}

/** Wandelt das Scrollen des Mausrads in einen sanften Zoomfaktor um. */
export function wheelFactor(deltaY: number): number {
  if (!Number.isFinite(deltaY) || deltaY === 0) return 1;
  return Math.exp(-clamp(deltaY, -300, 300) * 0.002);
}

/**
 * Sichtbarer Ausschnitt als SVG-`viewBox`. Gezoomt wird über die viewBox statt
 * über eine CSS-Skalierung – so bleibt das Diagramm Vektorgrafik und scharf.
 */
export function viewBoxOf(view: ZoomView, width: number, height: number): string {
  const safe = clampView(view);
  const round = (value: number) => Math.round(value * 100) / 100 + 0;
  return [
    round((-safe.x / safe.scale) * width),
    round((-safe.y / safe.scale) * height),
    round(width / safe.scale),
    round(height / safe.scale),
  ].join(' ');
}

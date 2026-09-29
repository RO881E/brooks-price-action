import { describe, expect, it } from 'vitest';
import {
  canPan,
  clampView,
  INITIAL_VIEW,
  isInitialView,
  MAX_SCALE,
  MIN_SCALE,
  panBy,
  panToward,
  viewBoxOf,
  wheelFactor,
  zoomAt,
  zoomIn,
  zoomLabel,
  zoomOut,
} from './chartZoom';

describe('chartZoom', () => {
  it('beginnt vollständig sichtbar und unverschoben', () => {
    expect(INITIAL_VIEW).toEqual({ scale: 1, x: 0, y: 0 });
    expect(isInitialView(INITIAL_VIEW)).toBe(true);
    expect(zoomLabel(INITIAL_VIEW)).toBe('100 %');
  });

  it('hält die Zoomgrenzen ein', () => {
    let view = INITIAL_VIEW;
    for (let i = 0; i < 10; i += 1) view = zoomIn(view);
    expect(view.scale).toBe(MAX_SCALE);
    for (let i = 0; i < 10; i += 1) view = zoomOut(view);
    expect(view.scale).toBe(MIN_SCALE);
    expect(view).toEqual(INITIAL_VIEW);
  });

  it('zoomt über die Tasten um die Mitte', () => {
    const view = zoomIn(INITIAL_VIEW);
    expect(view.scale).toBe(1.5);
    expect(view.x).toBeCloseTo(-0.25);
    expect(view.y).toBeCloseTo(-0.25);
    expect(zoomLabel(view)).toBe('150 %');
  });

  it('lässt den Punkt unter Maus oder Fingern an seiner Stelle', () => {
    const view = zoomAt({ scale: 2, x: -0.5, y: -0.2 }, 1.5, 0.3, 0.6);
    // Inhaltspunkt unter (0.3, 0.6) vorher und nachher gleich.
    const before = { x: (0.3 + 0.5) / 2, y: (0.6 + 0.2) / 2 };
    const after = { x: (0.3 - view.x) / view.scale, y: (0.6 - view.y) / view.scale };
    expect(after.x).toBeCloseTo(before.x);
    expect(after.y).toBeCloseTo(before.y);
  });

  it('kann das Diagramm nicht aus dem Bild schieben', () => {
    expect(panBy(INITIAL_VIEW, 0.5, -0.5)).toEqual(INITIAL_VIEW);
    const zoomed = { scale: 2, x: -0.5, y: -0.5 };
    expect(panBy(zoomed, 5, 5)).toEqual({ scale: 2, x: 0, y: 0 });
    expect(panBy(zoomed, -5, -5)).toEqual({ scale: 2, x: -1, y: -1 });
  });

  it('verschiebt per Taste in die angegebene Richtung und meldet Grenzen', () => {
    const zoomed = { scale: 2, x: -0.5, y: -0.5 };
    expect(panToward(zoomed, 'left').x).toBeCloseTo(-0.3);
    expect(panToward(zoomed, 'right').x).toBeCloseTo(-0.7);
    expect(panToward(zoomed, 'up').y).toBeCloseTo(-0.3);
    expect(panToward(zoomed, 'down').y).toBeCloseTo(-0.7);
    expect(canPan(INITIAL_VIEW, 'left')).toBe(false);
    expect(canPan(INITIAL_VIEW, 'right')).toBe(false);
    expect(canPan({ scale: 2, x: 0, y: -1 }, 'left')).toBe(false);
    expect(canPan({ scale: 2, x: 0, y: -1 }, 'right')).toBe(true);
    expect(canPan({ scale: 2, x: 0, y: -1 }, 'down')).toBe(false);
    expect(canPan({ scale: 2, x: 0, y: -1 }, 'up')).toBe(true);
  });

  it('verwirft ungültige Werte statt eine kaputte Ansicht zu erzeugen', () => {
    expect(clampView({ scale: Number.NaN, x: Number.POSITIVE_INFINITY, y: -3 })).toEqual(INITIAL_VIEW);
    expect(zoomAt(INITIAL_VIEW, 0)).toEqual(INITIAL_VIEW);
    expect(zoomAt(INITIAL_VIEW, -2)).toEqual(INITIAL_VIEW);
  });

  it('übersetzt das Mausrad in einen begrenzten Faktor', () => {
    expect(wheelFactor(0)).toBe(1);
    expect(wheelFactor(-100)).toBeGreaterThan(1);
    expect(wheelFactor(100)).toBeLessThan(1);
    expect(wheelFactor(10_000)).toBe(wheelFactor(300));
    expect(wheelFactor(Number.NaN)).toBe(1);
  });

  it('beschreibt den Ausschnitt als scharfe SVG-viewBox', () => {
    expect(viewBoxOf(INITIAL_VIEW, 760, 330)).toBe('0 0 760 330');
    expect(viewBoxOf({ scale: 2, x: -0.5, y: -0.5 }, 760, 330)).toBe('190 82.5 380 165');
    expect(viewBoxOf({ scale: 2, x: -1, y: 0 }, 760, 330)).toBe('380 0 380 165');
    // Ungültige Ansichten werden vorher begrenzt.
    expect(viewBoxOf({ scale: 9, x: 3, y: 3 }, 760, 330)).toBe('0 0 190 82.5');
  });
});

/**
 * Bewegung ist reduziert, wenn das System es verlangt oder die Einstellung
 * „Bewegung immer reduzieren“ aktiv ist (`<html data-motion="reduce">`).
 */
export function prefersReducedMotion(): boolean {
  if (document.documentElement.dataset.motion === 'reduce') return true;
  return (
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

/** Nach oben scrollen – ohne Gleiten, wenn Bewegung reduziert ist. */
export function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
}

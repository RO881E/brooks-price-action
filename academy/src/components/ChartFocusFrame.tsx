import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
  type RefObject,
  type ComponentType,
} from 'react';
import type { ChartScenarioId } from '../content/types';
import {
  canPan,
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
  type PanDirection,
  type ZoomView,
} from '../features/chartZoom';
const CHART_WIDTH = 760, CHART_HEIGHT = 330;
export interface ChartRendererProps { scenario: ChartScenarioId; title: string; viewBox?: string }
export interface ChartContent { scenario: ChartScenarioId; title: string; caption: string; observations: readonly string[] }
interface RendererContent extends ChartContent { Chart: ComponentType<ChartRendererProps>; description: string }

/**
 * Schaubild eines Diagramm-Schritts mit der Aktion „Vergrößern“ (F-11). Die
 * Lektion selbst bleibt unverändert; der Fokus öffnet sich darüber.
 */
export function ChartFocusFrame(props: RendererContent) {
  const { Chart } = props;
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);

  return (
    <div className="chart-focus-frame">
      <Chart scenario={props.scenario} title={props.title} />
      <button
        ref={trigger}
        type="button"
        className="chart-zoom-trigger"
        aria-haspopup="dialog"
        aria-label={`Vergrößern: ${props.title}`}
        onClick={() => setOpen(true)}
      >
        <MagnifierIcon />
        Vergrößern
      </button>
      {open ? (
        <ChartFocusDialog {...props} returnFocusTo={trigger} onClose={() => setOpen(false)} />
      ) : null}
    </div>
  );
}

function MagnifierIcon() {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true" focusable="false">
      <circle cx="8.5" cy="8.5" r="5.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M12.6 12.6 17 17M8.5 6v5M6 8.5h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const PAN_BUTTONS: Array<{ direction: PanDirection; label: string; icon: string }> = [
  { direction: 'up', label: 'Ansicht nach oben schieben', icon: '↑' },
  { direction: 'left', label: 'Ansicht nach links schieben', icon: '←' },
  { direction: 'right', label: 'Ansicht nach rechts schieben', icon: '→' },
  { direction: 'down', label: 'Ansicht nach unten schieben', icon: '↓' },
];

interface DialogProps extends RendererContent {
  returnFocusTo: RefObject<HTMLElement | null>;
  onClose: () => void;
}

interface PointerPoint {
  x: number;
  y: number;
}

/**
 * Modaler Diagramm-Fokus: Zoom mit Tasten, Mausrad oder zwei Fingern,
 * Verschieben durch Ziehen oder Pfeil-Tasten. Tab bleibt im Dialog, Escape
 * schließt, danach steht der Fokus wieder auf „Vergrößern“. Jedes Öffnen
 * beginnt mit der vollständigen Ansicht.
 */
function ChartFocusDialog({
  Chart,
  description,
  scenario,
  title,
  caption,
  observations,
  returnFocusTo,
  onClose,
}: DialogProps) {
  const ids = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const [view, setView] = useState<ZoomView>(INITIAL_VIEW);
  const pointers = useRef(new Map<number, PointerPoint>());
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  // Öffnen: modal anzeigen, Seite sperren, Fokus hinein. Schließen: alles
  // zurück, einschließlich Scrollposition und Fokus auf den Auslöser.
  useEffect(() => {
    const dialog = dialogRef.current;
    const trigger = returnFocusTo.current;
    const scrollY = window.scrollY;
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = 'hidden';
    root.dataset.chartFocus = 'open';
    if (dialog && typeof dialog.showModal === 'function' && !dialog.open) dialog.showModal();
    closeButton.current?.focus();

    return () => {
      if (dialog?.open) dialog.close();
      root.style.overflow = previousOverflow;
      delete root.dataset.chartFocus;
      if (window.scrollY !== scrollY) window.scrollTo({ top: scrollY });
      trigger?.focus({ preventScroll: true });
    };
  }, [returnFocusTo]);

  // Mausrad zoomt um den Mauszeiger; nicht passiv, damit die Seite nicht scrollt.
  useEffect(() => {
    const element = viewport.current;
    if (!element) return undefined;
    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      const box = element.getBoundingClientRect();
      if (box.width === 0 || box.height === 0) return;
      setView((current) =>
        zoomAt(
          current,
          wheelFactor(event.deltaY),
          (event.clientX - box.left) / box.width,
          (event.clientY - box.top) / box.height,
        ),
      );
    };
    element.addEventListener('wheel', onWheel, { passive: false });
    return () => element.removeEventListener('wheel', onWheel);
  }, []);

  const relative = (point: PointerPoint) => {
    const box = viewport.current?.getBoundingClientRect();
    if (!box || box.width === 0 || box.height === 0) return null;
    return { x: (point.x - box.left) / box.width, y: (point.y - box.top) / box.height };
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    try {
      // Ziehen darf den Bereich verlassen, ohne abzubrechen.
      event.currentTarget.setPointerCapture?.(event.pointerId);
    } catch {
      // Nicht jede Eingabe lässt sich festhalten – Zoom und Ziehen gehen trotzdem.
    }
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const previous = pointers.current.get(event.pointerId);
    if (!previous) return;
    const next = { x: event.clientX, y: event.clientY };
    const others = [...pointers.current.entries()].filter(([id]) => id !== event.pointerId);
    pointers.current.set(event.pointerId, next);

    if (others.length === 0) {
      // Ein Finger oder die Maus: verschieben.
      const from = relative(previous);
      const to = relative(next);
      if (from && to) setView((current) => panBy(current, to.x - from.x, to.y - from.y));
      return;
    }

    // Zwei Finger: Abstand bestimmt den Zoom, die Mitte bleibt stehen.
    const other = others[0][1];
    const before = Math.hypot(previous.x - other.x, previous.y - other.y);
    const after = Math.hypot(next.x - other.x, next.y - other.y);
    const center = relative({ x: (next.x + other.x) / 2, y: (next.y + other.y) / 2 });
    if (before > 0 && center) {
      setView((current) => zoomAt(current, after / before, center.x, center.y));
    }
  };

  const onPointerEnd = (event: PointerEvent<HTMLDivElement>) => {
    pointers.current.delete(event.pointerId);
  };

  // Tab bleibt im Dialog – auch am Ende der Liste.
  const onKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key !== 'Tab') return;
    const focusable = [
      ...(dialogRef.current?.querySelectorAll<HTMLElement>(
        'button:not(:disabled), [href], [tabindex]:not([tabindex="-1"])',
      ) ?? []),
    ];
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const zoomed = !isInitialView(view);
  // Beobachtungen auf Wunsch einzeln durchgehen (P09): dieselben Sätze der Lektion, nur nacheinander
  // hervorgehoben. Es entsteht kein neuer fachlicher Satz und keine Zuordnung zu Chart-Stellen.
  const [stepping, setStepping] = useState(false);
  const [observation, setObservation] = useState(0);

  return (
    <dialog
      ref={dialogRef}
      className="chart-focus-dialog"
      aria-labelledby={`${ids}-title`}
      onKeyDown={onKeyDown}
      onCancel={(event) => {
        // Escape: schließen über React-Zustand, damit alles sauber aufräumt.
        event.preventDefault();
        onCloseRef.current();
      }}
    >
      <div className="chart-focus-shell">
        <header className="chart-focus-header">
          <div>
            <p className="eyebrow">Schaubild</p>
            <h2 id={`${ids}-title`}>{title}</h2>
          </div>
          <button
            ref={closeButton}
            type="button"
            className="chart-focus-close"
            onClick={() => onCloseRef.current()}
          >
            <span aria-hidden="true">×</span> Schließen
          </button>
        </header>

        <div className="chart-focus-toolbar" role="toolbar" aria-label="Ansicht anpassen">
          <button
            type="button"
            onClick={() => setView(zoomOut)}
            disabled={view.scale <= MIN_SCALE}
            aria-label="Verkleinern"
          >
            −
          </button>
          <span className="chart-focus-level" role="status" aria-live="polite">
            <span className="visually-hidden">Zoom </span>
            {zoomLabel(view)}
          </span>
          <button
            type="button"
            onClick={() => setView(zoomIn)}
            disabled={view.scale >= MAX_SCALE}
            aria-label="Vergrößern"
          >
            +
          </button>
          <span className="chart-focus-pan">
            {PAN_BUTTONS.map((button) => (
              <button
                key={button.direction}
                type="button"
                aria-label={button.label}
                disabled={!canPan(view, button.direction)}
                onClick={() => setView((current) => panToward(current, button.direction))}
              >
                {button.icon}
              </button>
            ))}
          </span>
          <button
            type="button"
            className="chart-focus-reset"
            onClick={() => setView(INITIAL_VIEW)}
            disabled={!zoomed}
          >
            Zurücksetzen
          </button>
        </div>

        <div
          ref={viewport}
          className={`chart-focus-viewport ${zoomed ? 'zoomed' : ''}`}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerEnd}
          onPointerCancel={onPointerEnd}
          onDoubleClick={() => setView((current) => (isInitialView(current) ? zoomIn(current) : INITIAL_VIEW))}
        >
          {/* Gezoomt wird über die viewBox: Das Diagramm bleibt Vektorgrafik
              und damit auch vergrößert scharf. */}
          <div className="chart-focus-canvas" data-scale={view.scale}>
            <Chart scenario={scenario} title={title} viewBox={viewBoxOf(view, CHART_WIDTH, CHART_HEIGHT)} />
          </div>
        </div>
        <p className="chart-focus-hint">
          Ziehen verschiebt, Mausrad oder zwei Finger zoomen. Doppelklick wechselt zwischen
          Übersicht und Nahansicht.
        </p>

        <section
          className="chart-focus-text"
          aria-label="Erläuterung zum Schaubild"
          tabIndex={0}
        >
          <h3>Bildbeschreibung</h3>
          <p>{description}</p>
          <h3>Einordnung</h3>
          <p>{caption}</p>
          {observations.length > 0 ? (
            <>
              <h3>Beobachtungen</h3>
              <div className="observation-controls">
                <button
                  type="button"
                  aria-pressed={stepping}
                  onClick={() => {
                    setStepping((current) => !current);
                    setObservation(0);
                  }}
                >
                  {stepping ? 'Alle Beobachtungen zeigen' : 'Einzeln durchgehen'}
                </button>
                {stepping ? (
                  <span className="observation-stepper">
                    <button
                      type="button"
                      aria-label="Vorherige Beobachtung"
                      disabled={observation === 0}
                      onClick={() => setObservation((current) => Math.max(0, current - 1))}
                    >
                      ←
                    </button>
                    <span role="status" aria-live="polite">
                      Beobachtung {observation + 1} von {observations.length}
                    </span>
                    <button
                      type="button"
                      aria-label="Nächste Beobachtung"
                      disabled={observation === observations.length - 1}
                      onClick={() => setObservation((current) => Math.min(observations.length - 1, current + 1))}
                    >
                      →
                    </button>
                  </span>
                ) : null}
              </div>
              <ol className={stepping ? 'stepping' : undefined}>
                {observations.map((text, index) => (
                  <li
                    key={text}
                    className={stepping ? (index === observation ? 'current' : 'dim') : undefined}
                    aria-current={stepping && index === observation ? 'true' : undefined}
                  >
                    {text}
                  </li>
                ))}
              </ol>
            </>
          ) : null}
        </section>
      </div>
    </dialog>
  );
}

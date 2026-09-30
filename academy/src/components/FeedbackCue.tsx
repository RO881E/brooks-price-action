import { useCueOnMount, useCueOnTransition, type CueKind } from '../features/feedbackCues';

/**
 * Löst nach Einstellung Vibration/Ton aus, rendert aber nichts. `transition`: nur wenn
 * `active` von falsch auf wahr wechselt (nie beim Laden mit fertigem Zustand); `mount`: einmal,
 * wenn die Ansicht erscheint (nur Ansichten, die eine Nutzeraktion öffnet).
 */
export function FeedbackCue({
  kind,
  active = true,
  mode = 'transition',
}: {
  kind: CueKind;
  active?: boolean;
  mode?: 'transition' | 'mount';
}) {
  return mode === 'mount' ? <MountCue kind={kind} active={active} /> : <TransitionCue kind={kind} active={active} />;
}

function TransitionCue({ kind, active }: { kind: CueKind; active: boolean }) {
  useCueOnTransition(kind, active);
  return null;
}

function MountCue({ kind, active }: { kind: CueKind; active: boolean }) {
  useCueOnMount(kind, active);
  return null;
}

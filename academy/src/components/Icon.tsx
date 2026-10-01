/*
 * Einheitliche Symbole (Stufe 2): schlichte, abgerundete Linien-Icons für Navigation
 * und Stationen. Reine Dekoration (aria-hidden) – die Bedeutung steht immer als Text
 * daneben. Die Farbe folgt `currentColor`.
 */

export type IconName =
  | 'path'
  | 'book'
  | 'library'
  | 'practice'
  | 'progress'
  | 'saved'
  | 'glossary'
  | 'settings'
  | 'check'
  | 'play'
  | 'lock'
  | 'dots'
  | 'star'
  | 'chest'
  | 'chest-open'
  | 'arrow-up'
  | 'arrow-down'
  | 'pause'
  | 'chevron';

const SHAPES: Record<IconName, React.ReactNode> = {
  path: (
    <>
      <path d="M5 19c5 0 2.5-6 7-6s2-5 7-5" />
      <circle cx="5" cy="19" r="1.7" fill="currentColor" stroke="none" />
      <circle cx="19" cy="8" r="1.7" fill="currentColor" stroke="none" />
    </>
  ),
  book: (
    <>
      <path d="M4.5 5.5A2 2 0 0 1 6.5 3.5H19v15H6.5a2 2 0 0 0-2 2z" />
      <path d="M4.5 5.5v15M9 8h6" />
    </>
  ),
  library: (
    <>
      <rect x="4" y="4" width="6" height="16" rx="1.4" />
      <rect x="13.5" y="4" width="6" height="7" rx="1.4" />
      <rect x="13.5" y="14" width="6" height="6" rx="1.4" />
    </>
  ),
  practice: <path d="M13.2 3 5.5 13.5h5.3l-1 7.5 7.7-10.5h-5.3z" />,
  progress: <path d="M5 20v-7M12 20V5M19 20v-10" />,
  saved: <path d="M7 3.5h10a1 1 0 0 1 1 1V20l-6-4-6 4V4.5a1 1 0 0 1 1-1z" />,
  glossary: (
    <text x="12" y="16.5" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="currentColor" stroke="none">
      Aa
    </text>
  ),
  settings: (
    <>
      <path d="M4 7h9M17 7h3M4 12h3M11 12h9M4 17h11M19 17h1" />
      <circle cx="15" cy="7" r="2" />
      <circle cx="9" cy="12" r="2" />
      <circle cx="17" cy="17" r="2" />
    </>
  ),
  check: <path d="m5.5 12.5 4.2 4.2L18.5 7.5" strokeWidth="3" />,
  play: <path d="M8.5 5.5v13l10-6.5z" fill="currentColor" />,
  lock: (
    <>
      <rect x="6" y="11" width="12" height="9" rx="2.2" />
      <path d="M8.5 11V8.5a3.5 3.5 0 0 1 7 0V11" />
    </>
  ),
  dots: <path d="M7 12h.01M12 12h.01M17 12h.01" strokeWidth="3.2" />,
  chest: (
    <>
      <path d="M4 11V8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3" />
      <rect x="4" y="11" width="16" height="9" rx="2" />
      <path d="M4 14h16M12 12.5v3" />
    </>
  ),
  'chest-open': (
    <>
      <path d="M5 9.5 3.5 5.5h17L19 9.5" />
      <rect x="4" y="11" width="16" height="9" rx="2" />
      <path d="M4 14h16M9 8V6M12 8V4.5M15 8V6" />
    </>
  ),
  'arrow-up': <path d="M12 19V6M6 11.5 12 5.5l6 6" />,
  'arrow-down': <path d="M12 5v13M6 12.5l6 6 6-6" />,
  chevron: <path d="m6.5 9.5 5.5 5.5 5.5-5.5" strokeWidth="2.8" />,
  pause: <path d="M9 6v12M15 6v12" strokeWidth="3.2" />,
  star: <path d="m12 3.6 2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.2-4.1 5.8-.8z" fill="currentColor" />,
};

export function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  return (
    <svg
      className="icon"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {SHAPES[name]}
    </svg>
  );
}

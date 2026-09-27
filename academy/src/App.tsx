import { useEffect, useMemo, useState } from 'react';
import { ChapterView } from './components/ChapterView';
import { GlossaryView } from './components/GlossaryView';
import { LessonPlayer } from './components/LessonPlayer';
import { PathView } from './components/PathView';
import { PracticeView } from './components/PracticeView';
import { brooksTrendsCourse, publishedLessonIds } from './content/course';
import { glossaryEntries } from './content/glossary';
import type { Lesson } from './content/types';
import {
  completeLesson,
  loadProgress,
  progressPercent,
  recordAnswer,
  saveProgress,
} from './features/progress';

type View = 'path' | 'chapters' | 'practice' | 'glossary';

const navigation: Array<{ id: View; label: string; icon: string }> = [
  { id: 'path', label: 'Lernpfad', icon: '⌁' },
  { id: 'chapters', label: 'Buchmodus', icon: '▤' },
  { id: 'practice', label: 'Üben', icon: '◇' },
  { id: 'glossary', label: 'Glossar', icon: 'Aa' },
];

export default function App() {
  const [view, setView] = useState<View>('path');
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [progress, setProgress] = useState(() => loadProgress(window.localStorage));
  const percent = useMemo(
    () => progressPercent(progress, publishedLessonIds),
    [progress],
  );

  useEffect(() => {
    saveProgress(window.localStorage, progress);
  }, [progress]);

  const chooseView = (next: View) => {
    setView(next);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (activeLesson) {
    return (
      <LessonPlayer
        key={activeLesson.id}
        lesson={activeLesson}
        answers={progress.answers}
        onAnswer={(questionId, optionId) =>
          setProgress((current) => recordAnswer(current, questionId, optionId))
        }
        onComplete={() => {
          setProgress((current) => completeLesson(current, activeLesson.id));
          setActiveLesson(null);
          setView('path');
        }}
        onClose={() => setActiveLesson(null)}
      />
    );
  }

  return (
    <div className="academy-app">
      <aside className={`app-sidebar ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="brand-lockup">
          <div className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div>
            <strong>WQT</strong>
            <span>Academy</span>
          </div>
        </div>

        <div className="sidebar-course">
          <span>Aktiver Kurs</span>
          <strong>Price Action Trends</strong>
          <div className="sidebar-progress">
            <span style={{ width: `${percent}%` }} />
          </div>
          <small>{percent}% im Pilot</small>
        </div>

        <nav className="sidebar-nav" aria-label="Hauptnavigation">
          {navigation.map((item) => (
            <button
              type="button"
              key={item.id}
              className={view === item.id ? 'active' : ''}
              onClick={() => chooseView(item.id)}
            >
              <span aria-hidden="true">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="sidebar-spacer" />
        <div className="sidebar-status">
          <span className="status-dot" />
          <div>
            <strong>V2 · technischer Pilot</strong>
            <small>Bestehende Website bleibt erhalten</small>
          </div>
        </div>
      </aside>

      {mobileMenuOpen ? (
        <button
          className="sidebar-backdrop"
          type="button"
          aria-label="Menü schließen"
          onClick={() => setMobileMenuOpen(false)}
        />
      ) : null}

      <div className="app-main">
        <header className="app-topbar">
          <button
            className="mobile-menu-button"
            type="button"
            aria-label="Menü öffnen"
            onClick={() => setMobileMenuOpen(true)}
          >
            ☰
          </button>
          <div className="topbar-crumbs">
            <span>WQT Academy</span>
            <b>/</b>
            <strong>{navigation.find((item) => item.id === view)?.label}</strong>
          </div>
          <div className="topbar-actions">
            <span className="pilot-pill">Pilot · Buch 1</span>
            <div className="profile-chip" aria-label="Profil Robert">
              RW
            </div>
          </div>
        </header>

        <div className="view-container">
          {view === 'path' ? (
            <PathView
              course={brooksTrendsCourse}
              progress={progress}
              percent={percent}
              onOpenLesson={setActiveLesson}
            />
          ) : null}
          {view === 'chapters' ? (
            <ChapterView
              course={brooksTrendsCourse}
              completedLessonIds={progress.completedLessonIds}
              onOpenLesson={setActiveLesson}
            />
          ) : null}
          {view === 'practice' ? (
            <PracticeView
              course={brooksTrendsCourse}
              completedLessonIds={progress.completedLessonIds}
            />
          ) : null}
          {view === 'glossary' ? <GlossaryView entries={glossaryEntries} /> : null}
        </div>
      </div>

      <nav className="mobile-bottom-nav" aria-label="Mobile Navigation">
        {navigation.map((item) => (
          <button
            type="button"
            key={item.id}
            className={view === item.id ? 'active' : ''}
            onClick={() => chooseView(item.id)}
          >
            <span aria-hidden="true">{item.icon}</span>
            <small>{item.label}</small>
          </button>
        ))}
      </nav>
    </div>
  );
}

import { useCallback, useEffect, useMemo, useState } from 'react';
import { ChapterView } from './components/ChapterView';
import { GlossaryView } from './components/GlossaryView';
import { LessonPlayer } from './components/LessonPlayer';
import { LessonResultView } from './components/LessonResultView';
import { PathView } from './components/PathView';
import { PracticeView } from './components/PracticeView';
import { brooksTrendsCourse, publishedLessonIds } from './content/course';
import { glossaryEntries } from './content/glossary';
import type { Lesson } from './content/types';
import {
  lessonSummary,
  questionView,
  restartLesson,
  retryQuestion,
  revealSolution,
  submitAnswer,
} from './features/lessonResults';
import {
  DEFAULT_ROUTE,
  formatRoute,
  parseRoute,
  resolveRoute,
  resumeTarget,
  startStepIndex,
  type AppRoute,
  type AppView,
} from './features/navigation';
import {
  completeLesson,
  loadProgress,
  progressPercent,
  recordLessonStep,
  saveProgress,
  type ReviewMode,
} from './features/progress';
import { localDayKey, seededRandom } from './features/reviewScheduler';
import {
  advanceSession,
  answerReview,
  buildSession,
  endSession,
  reviewPool,
  sanitizeSession,
  startSession,
} from './features/reviewSession';

type View = AppView;

const INVALID_LINK_NOTICE =
  'Dieser Link führt zu keiner verfügbaren Ansicht oder Lektion. Du bist zurück im Lernpfad.';

/** Merkt sich im Verlaufseintrag einer Lektion, aus welcher Ansicht sie geöffnet wurde. */
interface LessonHistoryState {
  wqtOpenedFrom: View;
}

function openedFromView(state: unknown): boolean {
  return Boolean(
    state &&
      typeof state === 'object' &&
      typeof (state as Partial<LessonHistoryState>).wqtOpenedFrom === 'string',
  );
}

const navigation: Array<{ id: View; label: string; icon: string }> = [
  { id: 'path', label: 'Lernpfad', icon: '⌁' },
  { id: 'chapters', label: 'Buchmodus', icon: '▤' },
  { id: 'practice', label: 'Üben', icon: '◇' },
  { id: 'glossary', label: 'Glossar', icon: 'Aa' },
];

export default function App() {
  // Einzige Quelle der Wahrheit ist der Hash; die Route wird daraus abgeleitet.
  const [hash, setHash] = useState(() => window.location.hash);
  const route = useMemo(() => parseRoute(hash), [hash]);
  const [lastView, setLastView] = useState<View>('path');
  const [notice, setNotice] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [progress, setProgress] = useState(() => loadProgress(window.localStorage));
  const percent = useMemo(
    () => progressPercent(progress, publishedLessonIds),
    [progress],
  );
  const resolved = useMemo(
    () => (route ? resolveRoute(route, brooksTrendsCourse, progress) : null),
    [route, progress],
  );
  const resume = useMemo(() => resumeTarget(brooksTrendsCourse, progress), [progress]);
  const activeLesson = resolved?.kind === 'lesson' ? resolved.lesson : null;
  const activeStepIndex = resolved?.kind === 'lesson' ? resolved.stepIndex : 0;
  const resultLesson = resolved?.kind === 'lesson-result' ? resolved.lesson : null;
  const view: View = resolved?.kind === 'view' ? resolved.view : lastView;

  useEffect(() => {
    saveProgress(window.localStorage, progress);
  }, [progress]);

  // Eine gespeicherte Wiederholungsrunde nur mit noch vorhandenen Fragen fortsetzen.
  useEffect(() => {
    setProgress((current) =>
      sanitizeSession(current, reviewPool(brooksTrendsCourse, current)),
    );
  }, []);

  // Fälligkeit nach lokalem Kalendertag; wird bei jedem Rendern neu bestimmt.
  const today = localDayKey(new Date());

  const startReview = (mode: ReviewMode, unitId?: string) => {
    setProgress((current) =>
      startSession(
        current,
        buildSession(mode, reviewPool(brooksTrendsCourse, current), current, {
          today,
          unitId,
          random: seededRandom(Date.now()),
        }),
      ),
    );
    window.scrollTo({ top: 0 });
  };

  // Browser-Zurück/-Vorwärts und manuell geänderte Adressen übernehmen.
  useEffect(() => {
    // Die Ansichten werden neu gerendert; eine automatische Scroll-
    // Wiederherstellung des Browsers würde dabei an falsche Stellen springen.
    window.history.scrollRestoration = 'manual';
    const syncFromLocation = () => setHash(window.location.hash);
    window.addEventListener('hashchange', syncFromLocation);
    window.addEventListener('popstate', syncFromLocation);
    return () => {
      window.removeEventListener('hashchange', syncFromLocation);
      window.removeEventListener('popstate', syncFromLocation);
    };
  }, []);

  // Ungültige oder veraltete Links fallen auf den Lernpfad zurück.
  // Beide folgenden Effekte laufen zeitversetzt: Hat sich die Adresse
  // inzwischen geändert (z. B. durch Browser-Zurück), darf ein veralteter
  // Effekt sie nicht überschreiben – die neue Adresse folgt ohnehin gleich.
  useEffect(() => {
    if (resolved || window.location.hash !== hash) return;
    const fallback = formatRoute(DEFAULT_ROUTE);
    window.history.replaceState(null, '', fallback);
    setHash(fallback);
    setNotice(INVALID_LINK_NOTICE);
  }, [resolved, hash]);

  // Die Adresse zeigt immer den tatsächlich geöffneten Schritt (reload-fest).
  useEffect(() => {
    if (resolved?.kind === 'view') {
      setLastView(resolved.view);
      return;
    }
    if (resolved?.kind !== 'lesson' || window.location.hash !== hash) return;

    const canonical = formatRoute({
      kind: 'lesson',
      lessonId: resolved.lesson.id,
      step: resolved.stepIndex + 1,
    });
    if (canonical !== hash) {
      window.history.replaceState(window.history.state, '', canonical);
      setHash(canonical);
    }
  }, [resolved, hash]);

  // Letzten gültigen Schritt einer begonnenen Lektion speichern.
  const activeLessonId = activeLesson?.id ?? null;
  useEffect(() => {
    if (!activeLessonId) return;
    setProgress((current) =>
      recordLessonStep(current, activeLessonId, activeStepIndex),
    );
  }, [activeLessonId, activeStepIndex]);

  const navigate = useCallback(
    (next: AppRoute, mode: 'push' | 'replace', state: unknown = null) => {
      const nextHash = formatRoute(next);
      if (mode === 'replace') window.history.replaceState(state, '', nextHash);
      else if (window.location.hash !== nextHash) {
        window.history.pushState(state, '', nextHash);
      }
      setHash(nextHash);
    },
    [],
  );

  const chooseView = (next: View) => {
    navigate({ kind: 'view', view: next }, 'push');
    setNotice(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openLesson = (lesson: Lesson) => {
    const state: LessonHistoryState = { wqtOpenedFrom: view };
    navigate(
      { kind: 'lesson', lessonId: lesson.id, step: startStepIndex(lesson, progress) + 1 },
      'push',
      state,
    );
    setNotice(null);
  };

  const closeLesson = () => {
    // Wurde die Lektion aus einer Ansicht geöffnet, führt „Schließen“ genau
    // dorthin zurück – wie der Zurück-Knopf des Browsers.
    if (openedFromView(window.history.state)) window.history.back();
    else navigate({ kind: 'view', view: lastView }, 'push');
  };

  if (activeLesson) {
    return (
      <LessonPlayer
        key={activeLesson.id}
        lesson={activeLesson}
        stepIndex={activeStepIndex}
        onStepChange={(stepIndex) =>
          navigate(
            { kind: 'lesson', lessonId: activeLesson.id, step: stepIndex + 1 },
            'replace',
            window.history.state,
          )
        }
        questionState={(question) => questionView(question, progress)}
        onAnswer={(question, optionId) =>
          setProgress((current) => submitAnswer(current, question, optionId))
        }
        onRetry={(question) => setProgress((current) => retryQuestion(current, question))}
        onReveal={(question) => setProgress((current) => revealSolution(current, question))}
        onComplete={() => {
          setProgress((current) =>
            completeLesson(current, activeLesson.id, activeLesson.xp),
          );
          navigate(
            { kind: 'lesson-result', lessonId: activeLesson.id },
            'replace',
            window.history.state,
          );
        }}
        onClose={closeLesson}
      />
    );
  }

  if (resultLesson) {
    return (
      <LessonResultView
        key={resultLesson.id}
        lesson={resultLesson}
        summary={lessonSummary(resultLesson, progress)}
        onRepeat={() => {
          setProgress((current) => restartLesson(current, resultLesson));
          navigate(
            { kind: 'lesson', lessonId: resultLesson.id, step: 1 },
            'replace',
            window.history.state,
          );
        }}
        onBackToPath={() => navigate({ kind: 'view', view: 'path' }, 'replace')}
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
              resume={resume}
              notice={notice}
              onDismissNotice={() => setNotice(null)}
              onOpenLesson={openLesson}
            />
          ) : null}
          {view === 'chapters' ? (
            <ChapterView
              course={brooksTrendsCourse}
              completedLessonIds={progress.completedLessonIds}
              onOpenLesson={openLesson}
            />
          ) : null}
          {view === 'practice' ? (
            <PracticeView
              course={brooksTrendsCourse}
              progress={progress}
              today={today}
              onStart={startReview}
              onAnswer={(question, optionId) =>
                setProgress((current) => answerReview(current, question, optionId, today))
              }
              onNext={() => {
                setProgress(advanceSession);
                window.scrollTo({ top: 0 });
              }}
              onEnd={() => setProgress(endSession)}
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

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react';
import { AppStatusBanner } from './components/AppStatusBanner';
import { CelebrationToast, type Celebration } from './components/CelebrationToast';
import { ChapterView } from './components/ChapterView';
import { GlossaryView } from './components/GlossaryView';
import { LessonPlayer } from './components/LessonPlayer';
import { LessonResultView } from './components/LessonResultView';
import { PathView } from './components/PathView';
import { PracticeView } from './components/PracticeView';
import { ProgressView } from './components/ProgressView';
import { SavedView } from './components/SavedView';
import { SearchDialog, SearchIcon } from './components/SearchDialog';
import { SettingsView } from './components/SettingsView';
import { UndoToast, type UndoAction } from './components/UndoToast';
import { brooksTrendsCourse, publishedLessonIds } from './content/course';
import { glossaryEntries } from './content/glossary';
import type { Lesson } from './content/types';
import {
  applyImport,
  backupFileName,
  createBackup,
  resetAcademyData,
  serializeBackup,
  type ImportMode,
  type MergeOptions,
} from './features/backup';
import { downloadTextFile } from './features/download';
import {
  awardMilestones,
  goalLabel,
  goalOverview,
  goalProgress,
  newMilestones,
} from './features/goals';
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
  savedKey,
  setDailyGoal,
  updateSettings,
  type AcademyProgress,
  type ReviewMode,
} from './features/progress';
import { scrollToTop } from './features/motion';
import { pwa } from './features/pwa';
import { progressOverview, type NextAction } from './features/progressStats';
import {
  deleteNote,
  isBookmarked,
  noteText,
  removeBookmark,
  restoreBookmark,
  restoreNote,
  saveNote,
  savedOverview,
  toggleBookmark,
  type SavedTarget,
} from './features/savedItems';
import { buildSearchIndex, type SearchResult } from './features/search';
import { localDayKey, seededRandom } from './features/reviewScheduler';
import {
  advanceSession,
  answerReview,
  buildSession,
  endSession,
  isSessionFinished,
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

/** Tastenkürzel `/` nur, wenn gerade nicht in ein Feld geschrieben wird. */
function isTypingTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  return (
    target.isContentEditable ||
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    target instanceof HTMLSelectElement
  );
}

const navigation: Array<{ id: View; label: string; icon: string; mobile: boolean }> = [
  { id: 'path', label: 'Lernpfad', icon: '⌁', mobile: true },
  { id: 'chapters', label: 'Buchmodus', icon: '▤', mobile: true },
  { id: 'practice', label: 'Üben', icon: '◇', mobile: true },
  { id: 'progress', label: 'Fortschritt', icon: '◎', mobile: true },
  // Auf Mobilgeräten über das Menü erreichbar, damit die untere Leiste lesbar bleibt.
  { id: 'saved', label: 'Gespeichert', icon: '★', mobile: false },
  { id: 'glossary', label: 'Glossar', icon: 'Aa', mobile: true },
  { id: 'settings', label: 'Einstellungen', icon: '⚙︎', mobile: false },
];

export default function App() {
  // Einzige Quelle der Wahrheit ist der Hash; die Route wird daraus abgeleitet.
  const [hash, setHash] = useState(() => window.location.hash);
  const route = useMemo(() => parseRoute(hash), [hash]);
  const [lastView, setLastView] = useState<View>('path');
  const [notice, setNotice] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  // Bereits früher erreichte Meilensteine werden beim Laden still nachgetragen.
  const [progress, setStoredProgress] = useState(() =>
    awardMilestones(loadProgress(window.localStorage), brooksTrendsCourse, localDayKey(new Date())),
  );
  // Jede Änderung prüft im selben Schritt die Meilensteine – so gibt es keinen
  // Zwischenstand und jede Vergabe bleibt einmalig.
  const setProgress = useCallback(
    (update: (current: AcademyProgress) => AcademyProgress) =>
      setStoredProgress((current) =>
        awardMilestones(update(current), brooksTrendsCourse, localDayKey(new Date())),
      ),
    [],
  );
  const [celebration, setCelebration] = useState<Celebration | null>(null);
  const [undoAction, setUndoAction] = useState<UndoAction | null>(null);
  const dismissUndo = useCallback(() => setUndoAction(null), []);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchOpener = useRef<HTMLElement | null>(null);
  const searchIndex = useMemo(() => buildSearchIndex(brooksTrendsCourse, glossaryEntries), []);
  const closeCelebration = useCallback(() => setCelebration(null), []);
  const appStatus = useSyncExternalStore(pwa.subscribe, pwa.getSnapshot);
  // Neuester Stand für das sofortige Speichern beim Verlassen der Seite.
  const progressRef = useRef(progress);
  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);
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
  const glossaryTerm = resolved?.kind === 'view' ? resolved.term : undefined;

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

  // Darstellungseinstellungen als Attribute am Wurzelelement (CSS und Scrollen) –
  // als Layout-Effekt, damit die Standardansicht nicht kurz aufblitzt.
  useLayoutEffect(() => {
    const root = document.documentElement;
    if (progress.settings.motion === 'reduce') root.dataset.motion = 'reduce';
    else delete root.dataset.motion;
    if (progress.settings.compact) root.dataset.density = 'compact';
    else delete root.dataset.density;
  }, [progress.settings]);

  // Nach einem Ansichtswechsel (z. B. „Zurück zum Lernpfad“) nicht am
  // Seitenanfang neu beginnen: Ist der Fokus verloren, geht er zur Überschrift.
  const firstRoute = useRef(true);
  useEffect(() => {
    if (firstRoute.current) {
      firstRoute.current = false;
      return;
    }
    const frame = window.requestAnimationFrame(() => {
      const active = document.activeElement;
      if (active && active !== document.body) return;
      const heading = document.querySelector<HTMLElement>('.view-container h1');
      if (!heading) return;
      if (!heading.hasAttribute('tabindex')) heading.setAttribute('tabindex', '-1');
      heading.focus({ preventScroll: true });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [hash]);

  // Mobiles Menü: Fokus hinein beim Öffnen, Escape schließt und führt zurück.
  const menuWasOpen = useRef(false);
  useEffect(() => {
    if (mobileMenuOpen) {
      menuWasOpen.current = true;
      const nav = document.querySelector('#app-sidebar .sidebar-nav');
      (
        nav?.querySelector<HTMLElement>('button[aria-current="page"]') ??
        nav?.querySelector<HTMLElement>('button')
      )?.focus();
      const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') setMobileMenuOpen(false);
      };
      window.addEventListener('keydown', onKeyDown);
      return () => window.removeEventListener('keydown', onKeyDown);
    }
    if (menuWasOpen.current) {
      menuWasOpen.current = false;
      // Nur zurückführen, wenn der Fokus sonst im geschlossenen Menü verloren ginge.
      const active = document.activeElement;
      if (!active || active === document.body || active.closest('#app-sidebar')) {
        menuButton.current?.focus();
      }
    }
    return undefined;
  }, [mobileMenuOpen]);

  // Nur echte Übergänge feiern: Reload, Zieländerungen, Import und Reset lösen nichts aus.
  const previousProgress = useRef(progress);
  const skipCelebration = useRef(false);
  useEffect(() => {
    const before = previousProgress.current;
    previousProgress.current = progress;
    if (before === progress) return;
    if (skipCelebration.current) {
      skipCelebration.current = false;
      return;
    }

    const reached = newMilestones(before, progress).map(
      (milestone) => `Meilenstein: ${milestone.title}`,
    );
    const goalReached =
      before.dailyGoal === progress.dailyGoal &&
      !goalProgress(before, today).met &&
      goalProgress(progress, today).met;

    if (goalReached || reached.length > 0) {
      // Kommt kurz nacheinander mehr zusammen, wird die Meldung ergänzt statt ersetzt.
      setCelebration((current) => {
        const details = [
          ...(current?.details ?? []),
          ...(goalReached ? [`Heute geschafft: ${goalLabel(progress.dailyGoal)}.`] : []),
          ...reached,
        ];
        return {
          id: (current?.id ?? 0) + 1,
          title:
            goalReached || current?.title === 'Tagesziel erreicht'
              ? 'Tagesziel erreicht'
              : 'Meilenstein erreicht',
          details: [...new Set(details)],
        };
      });
    }
  }, [progress, today]);

  const openSearch = useCallback(() => {
    searchOpener.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setMobileMenuOpen(false);
    setSearchOpen(true);
  }, []);

  const closeSearch = useCallback(() => {
    setSearchOpen(false);
    // Fokus zurück an die Stelle, von der aus gesucht wurde.
    window.requestAnimationFrame(() => {
      const opener = searchOpener.current;
      if (opener && opener.isConnected) opener.focus();
    });
  }, []);

  // Layout-Effekt: Das Kürzel steht bereit, sobald die Oberfläche sichtbar ist.
  useLayoutEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== '/' || event.ctrlKey || event.metaKey || event.altKey) return;
      if (searchOpen || isTypingTarget(event.target)) return;
      event.preventDefault();
      openSearch();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [openSearch, searchOpen]);

  const toast = (
    <>
      <AppStatusBanner status={appStatus} onApplyUpdate={pwa.applyUpdate} />
      {undoAction ? <UndoToast action={undoAction} onDismiss={dismissUndo} /> : null}
      {celebration ? (
        <CelebrationToast celebration={celebration} onClose={closeCelebration} />
      ) : null}
      <SearchDialog
        open={searchOpen}
        index={searchIndex}
        completedLessonIds={progress.completedLessonIds}
        onClose={closeSearch}
        onSelect={(result) => openSearchResult(result)}
      />
    </>
  );

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
    scrollToTop();
  };

  const runNextAction = (action: NextAction) => {
    if (action.kind === 'review') {
      // Eine laufende Runde wird fortgesetzt, nicht ersetzt.
      const running = progress.reviewSession && !isSessionFinished(progress.reviewSession);
      if (!running) startReview('due');
      chooseView('practice');
    } else {
      openLesson(action.lesson);
    }
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

  const openSearchResult = (result: SearchResult) => {
    setSearchOpen(false);
    setNotice(null);
    if (result.type === 'glossary' && result.glossaryTerm) {
      navigate({ kind: 'view', view: 'glossary', term: result.glossaryTerm }, 'push');
      window.scrollTo({ top: 0 });
      return;
    }
    if (!result.lesson) return;
    // Der Sprung läuft über die normale Route: Freischaltung und gültige
    // Schritte prüft weiterhin resolveRoute.
    const step =
      result.type === 'step' && result.stepIndex !== undefined
        ? result.stepIndex + 1
        : startStepIndex(result.lesson, progress) + 1;
    const state: LessonHistoryState = { wqtOpenedFrom: view };
    navigate({ kind: 'lesson', lessonId: result.lesson.id, step }, 'push', state);
  };

  const offerUndo = (message: string, undo: () => void) =>
    setUndoAction((current) => ({ id: (current?.id ?? 0) + 1, message, undo }));

  const removeBookmarkWithUndo = (key: string) => {
    const { removed } = removeBookmark(progress, key);
    if (!removed) return;
    setProgress((current) => removeBookmark(current, key).progress);
    offerUndo('Lesezeichen entfernt.', () =>
      setProgress((current) => restoreBookmark(current, removed)),
    );
  };

  const deleteNoteWithUndo = (key: string) => {
    const { removed } = deleteNote(progress, key);
    if (!removed) return;
    setProgress((current) => deleteNote(current, key).progress);
    offerUndo('Notiz gelöscht.', () => setProgress((current) => restoreNote(current, removed)));
  };

  const openSavedTarget = (target: SavedTarget) => {
    if (!target.lesson || !target.openable) return;
    const step =
      target.stepIndex !== null ? target.stepIndex + 1 : startStepIndex(target.lesson, progress) + 1;
    const state: LessonHistoryState = { wqtOpenedFrom: view };
    navigate({ kind: 'lesson', lessonId: target.lesson.id, step }, 'push', state);
  };

  const exportBackup = () => {
    downloadTextFile(backupFileName(), serializeBackup(createBackup(progress)));
  };

  const importBackup = (imported: AcademyProgress, mode: ImportMode, options: MergeOptions) => {
    skipCelebration.current = true;
    setCelebration(null);
    setUndoAction(null);
    setProgress((current) => applyImport(current, imported, mode, options));
  };

  const resetAll = () => {
    // Nur der Academy-Datensatz wird gelöscht; alte Website-Schlüssel bleiben.
    const fresh = resetAcademyData(window.localStorage);
    skipCelebration.current = true;
    setCelebration(null);
    setUndoAction(null);
    setProgress(() => fresh);
  };

  const closeLesson = () => {
    // Wurde die Lektion aus einer Ansicht geöffnet, führt „Schließen“ genau
    // dorthin zurück – wie der Zurück-Knopf des Browsers.
    if (openedFromView(window.history.state)) window.history.back();
    else navigate({ kind: 'view', view: lastView }, 'push');
  };

  if (activeLesson) {
    return (
      <>
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
          saved={{
            isBookmarked: (stepId) => isBookmarked(progress, activeLesson.id, stepId),
            noteText: (stepId) => noteText(progress, activeLesson.id, stepId),
            onToggleBookmark: (stepId) =>
              setProgress((current) => toggleBookmark(current, activeLesson.id, stepId)),
            onCommitNote: (stepId, text) =>
              setProgress((current) => saveNote(current, activeLesson.id, stepId, text)),
            onCommitNoteNow: (stepId, text) => {
              // Seite wird verlassen: sofort schreiben, der Effekt käme zu spät.
              const next = saveNote(progressRef.current, activeLesson.id, stepId, text);
              progressRef.current = next;
              saveProgress(window.localStorage, next);
              setProgress((current) => saveNote(current, activeLesson.id, stepId, text));
            },
            onDeleteNote: (stepId) => deleteNoteWithUndo(savedKey(activeLesson.id, stepId)),
          }}
        />
        {toast}
      </>
    );
  }

  if (resultLesson) {
    return (
      <>
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
        {toast}
      </>
    );
  }

  return (
    <div className="academy-app">
      <aside id="app-sidebar" className={`app-sidebar ${mobileMenuOpen ? 'open' : ''}`}>
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
              aria-current={view === item.id ? 'page' : undefined}
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
            ref={menuButton}
            className="mobile-menu-button"
            type="button"
            aria-label="Menü öffnen"
            aria-expanded={mobileMenuOpen}
            aria-controls="app-sidebar"
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
            <button
              type="button"
              className="search-trigger"
              onClick={openSearch}
              aria-keyshortcuts="/"
              aria-label="Suchen"
            >
              <SearchIcon />
              <span className="search-trigger-label">Suchen</span>
              <kbd aria-hidden="true">/</kbd>
            </button>
            <span className="pilot-pill">Pilot · Buch 1</span>
            <div className="profile-chip" role="img" aria-label="Profil Robert">
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
              goal={goalProgress(progress, today)}
              streak={goalOverview(progress, today).streak}
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
                setProgress((current) => advanceSession(current, today));
                window.scrollTo({ top: 0 });
              }}
              onEnd={() => setProgress((current) => endSession(current, today))}
            />
          ) : null}
          {view === 'progress' ? (
            <ProgressView
              course={brooksTrendsCourse}
              overview={progressOverview(brooksTrendsCourse, progress, today)}
              goals={goalOverview(progress, today)}
              today={today}
              onAction={runNextAction}
              onGoalChange={(goal) => setProgress((current) => setDailyGoal(current, goal))}
            />
          ) : null}
          {view === 'saved' ? (
            <SavedView
              overview={savedOverview(brooksTrendsCourse, progress)}
              onOpen={openSavedTarget}
              onRemoveBookmark={removeBookmarkWithUndo}
              onDeleteNote={deleteNoteWithUndo}
            />
          ) : null}
          {view === 'settings' ? (
            <SettingsView
              progress={progress}
              onGoalChange={(goal) => setProgress((current) => setDailyGoal(current, goal))}
              onSettingsChange={(changes) => setProgress((current) => updateSettings(current, changes))}
              onExport={exportBackup}
              onImport={importBackup}
              onReset={resetAll}
              appStatus={appStatus}
              onApplyUpdate={pwa.applyUpdate}
            />
          ) : null}
          {view === 'glossary' ? (
            <GlossaryView
              key={glossaryTerm ?? ''}
              entries={glossaryEntries}
              initialQuery={glossaryTerm}
            />
          ) : null}
        </div>
      </div>

      {toast}

      <nav className="mobile-bottom-nav" aria-label="Mobile Navigation">
        {navigation.filter((item) => item.mobile).map((item) => (
          <button
            type="button"
            key={item.id}
            className={view === item.id ? 'active' : ''}
            aria-current={view === item.id ? 'page' : undefined}
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

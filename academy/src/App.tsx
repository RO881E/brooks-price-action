import {
  type ComponentType,
  Suspense,
  lazy,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react';
import { AppStatusBanner } from './components/AppStatusBanner';
import { albumOverview } from './features/barAlbum';
import { useApplyTheme } from './features/theme';
import { Icon, type IconName } from './components/Icon';
import { CelebrationToast, type Celebration } from './components/CelebrationToast';
import { ChapterView } from './components/ChapterView';
import { LessonLoading } from './components/ContentLoadState';
import { GlossaryView } from './components/GlossaryView';
import { LessonPlayer } from './components/LessonPlayer';
import { LessonResultView } from './components/LessonResultView';
import { PathView } from './components/PathView';
import { ReaderView } from './components/ReaderView';
import { SearchDialog, SearchIcon } from './components/SearchDialog';
import { TrainerView } from './components/TrainerView';
import { StudyView } from './components/StudyView';
import { TodayPanel } from './components/TodayPanel';
import { planToday } from './features/today';
import { dailyMissions } from './features/missions';
import { progressSummary } from './features/progressSummary';
import { planStudySession } from './features/studySession';
import { FirstUseWelcome, GuideDialog, type GuideFacts } from './components/FirstUseGuide';
import { UndoToast, type UndoAction } from './components/UndoToast';
import {
  allCoursesOutline,
  catalog,
  courseOfLesson,
  courseOfUnit,
  courseOutlineFor,
  courseOutlines,
  findCourseOutline,
  publishedLessonIdsOf,
  publishedLessonOutlinesOf,
  unitIdOfLesson,
  useLessonContent,
} from './content/catalog';
import { glossaryFor } from './content/registry';
import type { CourseOutline, LessonOutline } from './content/types';
import {
  applyImport,
  backupFileName,
  createBackup,
  resetAcademyData,
  serializeBackup,
  type ImportMode,
  type MergeOptions,
} from './features/backup';
import {
  beginCaseRun,
  caseEntries,
  casesForLesson,
  courseCases,
  discardCaseRun,
  findPublishedCase,
  setReasoningDraft,
  updateCaseRun,
} from './features/caseTraining';
import { nextAvailableLesson } from './features/courseAccess';
import { downloadTextFile } from './features/download';
import { RescueNotice } from './components/RescueNotice';
import { discardRescuedData, readRescuedData, RESCUE_FILE_NAME } from './features/recovery';
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
  chooseCourse,
  completeLesson,
  loadProgress,
  markGuideSeen,
  progressPercent,
  recordLessonStep,
  recordReaderPosition,
  saveProgress,
  savedKey,
  setDailyGoal,
  shouldShowFirstUseGuide,
  updateReadingOptions,
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
import { earnedXp } from './features/lessonResults';
import { localDayKey, seededRandom } from './features/reviewScheduler';
import {
  advanceSession,
  answerReview,
  buildQuestionSession,
  buildSession,
  endSession,
  isSessionFinished,
  reviewPool,
  sanitizeSession,
  startSession,
} from './features/reviewSession';

/**
 * Lädt eine Ansicht erst bei Bedarf. Jede Ansicht hat ihren eigenen Suspense-Rahmen:
 * ein gemeinsamer würde beim Nachladen bereits gemountete Ansichten verstecken.
 */
function lazyView<Props extends object>(load: () => Promise<ComponentType<Props>>) {
  const Inner = lazy(async () => ({ default: await load() }));
  return function LazyView(props: Props) {
    return (
      <Suspense fallback={<p className="content-load" role="status">Ansicht wird geladen …</p>}>
        <Inner {...(props as React.ComponentProps<typeof Inner>)} />
      </Suspense>
    );
  };
}

// Selten genutzte Ansichten laden erst bei Bedarf (P12): hält das Hauptbündel unter 500 kB.
const PracticeView = lazyView(() => import('./components/PracticeView').then((module) => module.PracticeView));
const ProgressView = lazyView(() => import('./components/ProgressView').then((module) => module.ProgressView));
const SavedView = lazyView(() => import('./components/SavedView').then((module) => module.SavedView));
const SettingsView = lazyView(() => import('./components/SettingsView').then((module) => module.SettingsView));
const TransferView = lazyView(() => import('./components/TransferView').then((module) => module.TransferView));
const ReplayView = lazyView(() => import('./components/ReplayView').then((module) => module.ReplayView));
// Bibliothek mit Gebiets- und Kursseiten (mehrere Kurse): ein gemeinsamer Chunk mit den Bibliotheksdaten.
const LibraryView = lazyView(() => import('./components/LibraryView').then((module) => module.LibraryView));
const SubjectPage = lazyView(() => import('./components/LibraryView').then((module) => module.SubjectPage));
const CoursePage = lazyView(() => import('./components/LibraryView').then((module) => module.CoursePage));

type View = AppView;

const INVALID_LINK_NOTICE =
  'Dieser Link führt zu keiner verfügbaren Ansicht oder Lektion. Du bist zurück im Lernpfad.';

/** Gewählter Kurs eines Lernstands; ohne gültige Wahl der Standardkurs (mehrere Kurse). */
const outlineOf = (progress: AcademyProgress): CourseOutline => courseOutlineFor(progress.activeCourseId);

/** Fragen eines Kurses – grenzt die Zusammenfassung auf ihn ein. */
function questionIdsOf(course: CourseOutline): Set<string> {
  return new Set(
    course.units.flatMap((unit) =>
      unit.lessons.flatMap((lesson) => lesson.steps.filter((step) => step.type === 'question').map((step) => step.id)),
    ),
  );
}

/** Alle veröffentlichten Lektionen aller Kurse: XP zählen kursübergreifend. */
const allPublishedLessons = publishedLessonOutlinesOf(allCoursesOutline);

/** Merkt sich im Verlaufseintrag einer Lektion, aus welcher Ansicht sie geöffnet wurde. */
interface LessonHistoryState {
  wqtOpenedFrom: View;
}

/** Ansicht, aus der die Lektion geöffnet wurde (für „Zurück zum …“ nach dem Abschluss). */
function openedFromOrigin(state: unknown): View | null {
  if (typeof state !== 'object' || state === null) return null;
  const from = (state as Partial<LessonHistoryState>).wqtOpenedFrom;
  return typeof from === 'string' ? (from as View) : null;
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

/** Lernmodus je Bereich: bestimmt Akzentfarbe (Designgrundlage P05); Farbe nie allein als Träger. */
type NavMode = 'read' | 'practice' | 'review' | 'progress' | 'neutral';

const navigation: Array<{ id: View; label: string; icon: IconName; mobile: boolean; mode: NavMode }> = [
  { id: 'path', label: 'Lernpfad', icon: 'path', mobile: true, mode: 'read' },
  { id: 'chapters', label: 'Buchmodus', icon: 'book', mobile: true, mode: 'read' },
  { id: 'practice', label: 'Üben', icon: 'practice', mobile: true, mode: 'practice' },
  { id: 'progress', label: 'Fortschritt', icon: 'progress', mobile: true, mode: 'progress' },
  // Auf Mobilgeräten über das Menü erreichbar, damit die untere Leiste lesbar bleibt.
  { id: 'saved', label: 'Gespeichert', icon: 'saved', mobile: false, mode: 'review' },
  { id: 'glossary', label: 'Glossar', icon: 'glossary', mobile: true, mode: 'read' },
  // Themenübersicht; auf Mobilgeräten über das Menü und den Kursblock erreichbar.
  { id: 'library', label: 'Bibliothek', icon: 'library', mobile: false, mode: 'neutral' },
  { id: 'settings', label: 'Einstellungen', icon: 'settings', mobile: false, mode: 'neutral' },
];

export default function App() {
  useApplyTheme();
  // Einzige Quelle der Wahrheit ist der Hash; die Route wird daraus abgeleitet.
  const [hash, setHash] = useState(() => window.location.hash);
  const route = useMemo(() => parseRoute(hash), [hash]);
  const [lastView, setLastView] = useState<View>('path');
  const [notice, setNotice] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  // Bereits früher erreichte Meilensteine werden beim Laden still nachgetragen. Sie
  // gelten wie XP und Serie für alle Kurse gemeinsam.
  const [progress, setStoredProgress] = useState(() =>
    awardMilestones(loadProgress(window.localStorage), allCoursesOutline, localDayKey(new Date())),
  );
  // Jede Änderung prüft im selben Schritt die Meilensteine – so gibt es keinen
  // Zwischenstand und jede Vergabe bleibt einmalig.
  const setProgress = useCallback(
    (update: (current: AcademyProgress) => AcademyProgress) =>
      setStoredProgress((current) =>
        awardMilestones(update(current), allCoursesOutline, localDayKey(new Date())),
      ),
    [],
  );
  // Lernpfad, Üben, Fortschritt & Co. zeigen den gewählten Kurs (mehrere Kurse).
  const course = useMemo(() => outlineOf(progress), [progress]);
  const glossary = useMemo(() => glossaryFor(course.id), [course.id]);
  const album = useMemo(() => albumOverview(course, progress), [course, progress]);
  const [celebration, setCelebration] = useState<Celebration | null>(null);
  const [undoAction, setUndoAction] = useState<UndoAction | null>(null);
  const dismissUndo = useCallback(() => setUndoAction(null), []);
  const [searchOpen, setSearchOpen] = useState(false);
  // Gesicherte, nicht lesbare Altdaten (P12): sichtbar machen statt still liegen zu lassen.
  const [rescued, setRescued] = useState(() => readRescuedData(window.localStorage));
  const [rescueHidden, setRescueHidden] = useState(false);
  // Einführung (F-18): Hilfe-Dialog jederzeit, Willkommen nur beim ersten Besuch.
  const [guideOpen, setGuideOpen] = useState(false);
  const helpButton = useRef<HTMLButtonElement>(null);
  const searchOpener = useRef<HTMLElement | null>(null);
  const searchIndex = useMemo(() => buildSearchIndex(course, glossary.entries), [course, glossary]);
  const closeCelebration = useCallback(() => setCelebration(null), []);
  const appStatus = useSyncExternalStore(pwa.subscribe, pwa.getSnapshot);
  // Neuester Stand für das sofortige Speichern beim Verlassen der Seite.
  const progressRef = useRef(progress);
  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);
  const percent = useMemo(
    () => progressPercent(progress, publishedLessonIdsOf(course)),
    [progress, course],
  );
  const totalXp = useMemo(() => earnedXp(progress, allPublishedLessons), [progress]);
  // Lektionen, Leser und Fälle aller Kurse bleiben erreichbar – jeweils in ihrem eigenen Kurs geprüft.
  const resolved = useMemo(
    () => (route ? resolveRoute(route, course, progress, courseOutlines) : null),
    [route, course, progress],
  );
  const resume = useMemo(() => resumeTarget(course, progress), [course, progress]);
  const activeLesson = resolved?.kind === 'lesson' ? resolved.lesson : null;
  const activeStepIndex = resolved?.kind === 'lesson' ? resolved.stepIndex : 0;
  const resultLesson = resolved?.kind === 'lesson-result' ? resolved.lesson : null;
  // Die Lektion selbst lädt kapitelweise nach (F-12); Route und Freischaltung
  // sind bereits anhand der Gliederung geprüft.
  const activeContent = useLessonContent(activeLesson ? [activeLesson.id] : []);
  const activeLessonContent = activeLesson ? catalog.lesson(activeLesson.id) : undefined;

  // Das Kapitel der nächsten Lektion im Leerlauf vorladen – so öffnet sie ohne
  // Wartezeit. Offline liefert es der Service Worker ohnehin aus dem Cache.
  const upcomingLessonId =
    resume?.lesson.id ?? nextAvailableLesson(course, progress.completedLessonIds)?.id;
  useEffect(() => {
    const unitId = upcomingLessonId ? unitIdOfLesson(upcomingLessonId) : undefined;
    if (!unitId) return undefined;
    const prefetch = () => catalog.ensureUnits([unitId]);
    if (typeof window.requestIdleCallback === 'function') {
      const handle = window.requestIdleCallback(prefetch, { timeout: 3000 });
      return () => window.cancelIdleCallback(handle);
    }
    const timer = window.setTimeout(prefetch, 1500);
    return () => window.clearTimeout(timer);
  }, [upcomingLessonId]);
  const reading = resolved?.kind === 'read' ? resolved.reader : null;
  const training = resolved?.kind === 'train' ? resolved.barCase : null;
  const replaying = resolved?.kind === 'replay' ? resolved : null;
  // Rückblick im Kurs des Falls (mehrere Kurse).
  const replayCase = replaying ? findPublishedCase(replaying.caseId) : undefined;
  const replayCourse = (replayCase && courseOfUnit(replayCase.unitId)) ?? course;
  const studying = resolved?.kind === 'study' ? resolved : null;
  const transferring = resolved?.kind === 'transfer';
  const librarySubject = resolved?.kind === 'subject' ? resolved.subjectId : null;
  const libraryCourse = resolved?.kind === 'course' ? resolved.courseId : null;
  // Der Buchleser gehört zur Ansicht „Buchmodus“, der Trainer zu „Üben“
  // (Navigation bleibt markiert).
  const view: View =
    resolved?.kind === 'view'
      ? resolved.view
      : reading
        ? 'chapters'
        : training || replaying || transferring
          ? 'practice'
          : studying
            ? 'path'
            : librarySubject !== null || libraryCourse !== null
              ? 'library'
              : lastView;
  // Hinweis, wenn ein Leser-Link auf einen nicht lesbaren Abschnitt zeigte –
  // bleibt stehen, obwohl die Adresse danach auf die echte Stelle zeigt.
  const [readerFallbackUnit, setReaderFallbackUnit] = useState<string | null>(null);
  const glossaryTerm = resolved?.kind === 'view' ? resolved.term : undefined;

  useEffect(() => {
    saveProgress(window.localStorage, progress);
  }, [progress]);

  // Eine gespeicherte Wiederholungsrunde nur mit noch vorhandenen Fragen fortsetzen.
  useEffect(() => {
    setProgress((current) =>
      sanitizeSession(current, reviewPool(outlineOf(current), current)),
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

  const guideFacts: GuideFacts = useMemo(
    () => ({
      courseTitle: course.title,
      firstLesson: nextAvailableLesson(course, progress.completedLessonIds),
      publishedCases: courseCases(course).length,
      availableCases: caseEntries(course, progress).filter((entry) => entry.state !== 'locked').length,
    }),
    [course, progress],
  );

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
      {guideOpen ? (
        <GuideDialog
          facts={guideFacts}
          returnFocusTo={helpButton}
          onClose={() => setGuideOpen(false)}
          onOpenSettings={() => {
            setGuideOpen(false);
            chooseView('settings');
          }}
        />
      ) : null}
    </>
  );

  const startReview = (mode: ReviewMode, unitId?: string) => {
    setProgress((current) =>
      startSession(
        current,
        buildSession(mode, reviewPool(outlineOf(current), current), current, {
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
    if (resolved?.kind === 'read' && window.location.hash === hash) {
      const { reader } = resolved;
      if (reader.fellBack) setReaderFallbackUnit(reader.unit.id);
      const canonicalRead = formatRoute({
        kind: 'read',
        unitId: reader.unit.id,
        lessonId: reader.section?.lesson.id ?? null,
        step: reader.section && reader.stepIndex !== null ? reader.stepIndex + 1 : null,
      });
      if (canonicalRead !== hash) {
        window.history.replaceState(window.history.state, '', canonicalRead);
        setHash(canonicalRead);
      }
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

  // Buchleser (F-13): aus dem Buchmodus öffnen (neuer Verlaufseintrag),
  // innerhalb eines Kapitels blättern (ersetzt den Eintrag).
  const openReader = (unitId: string, lessonId?: string) => {
    setReaderFallbackUnit(null);
    setNotice(null);
    navigate({ kind: 'read', unitId, lessonId: lessonId ?? null, step: null }, 'push');
  };

  const openReaderSection = (unitId: string, lessonId: string) => {
    setReaderFallbackUnit(null);
    navigate({ kind: 'read', unitId, lessonId, step: null }, 'replace');
  };

  const recordReading = (
    unitId: string,
    lessonId: string,
    stepId: string | null,
    stepIndex: number | null,
  ) => {
    setProgress((current) => recordReaderPosition(current, unitId, lessonId, stepId));
    // Die Adresse zeigt die Lesestelle – ein Reload landet genau dort.
    const next: AppRoute = {
      kind: 'read',
      unitId,
      lessonId,
      step: stepIndex === null ? null : stepIndex + 1,
    };
    if (window.location.hash !== formatRoute(next)) {
      navigate(next, 'replace', window.history.state);
    }
  };

  // Bibliothek (mehrere Kurse): Gebiets- und Kursseiten mit eigenem Verlaufseintrag.
  const openLibraryPage = (next: AppRoute) => {
    navigate(next, 'push');
    setNotice(null);
    setMobileMenuOpen(false);
    scrollToTop();
  };

  // Kurs starten oder wechseln: Nur die Wahl ändert sich, der Lernstand aller Kurse bleibt.
  // Eine laufende Wiederholungsrunde gehört zum bisherigen Kurs und endet (wie „Runde beenden“).
  const startCourse = (courseId: string) => {
    const target = findCourseOutline(courseId);
    if (!target) return;
    const switching = target.id !== course.id;
    setProgress((current) => chooseCourse(switching ? endSession(current, today) : current, target.id));
    navigate({ kind: 'view', view: 'path' }, 'push');
    setMobileMenuOpen(false);
    setNotice(
      switching ? `Du lernst jetzt „${target.title}“. Dein Stand in den anderen Kursen bleibt erhalten.` : null,
    );
    scrollToTop();
  };

  // Bar-für-Bar-Trainer (F-15): eigener Verlaufseintrag je Fall.
  const openTraining = (caseId: string) => {
    setNotice(null);
    navigate({ kind: 'train', caseId }, 'push');
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

  const openLesson = (lesson: LessonOutline) => {
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
    // Nur der Academy-Datensatz wird gelöscht.
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

  if (activeLesson && !activeLessonContent) {
    return (
      <>
        <LessonLoading
          lesson={activeLesson}
          status={activeContent.status}
          onRetry={activeContent.retry}
          onClose={closeLesson}
        />
        {toast}
      </>
    );
  }

  if (activeLesson && activeLessonContent) {
    return (
      <>
        <LessonPlayer
          key={activeLesson.id}
          lesson={activeLessonContent}
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
    // Zurück dorthin, woher die Lektion geöffnet wurde – nur, wenn es eine echte Ansicht ist.
    const origin = openedFromOrigin(window.history.state);
    // „Nächste Lektion“ und Trainingsfälle aus dem Kurs der Lektion – auch wenn ein anderer gewählt ist.
    const resultCourse = courseOfLesson(resultLesson.id) ?? course;
    const resultOrigin: View = origin === 'practice' || origin === 'chapters' ? origin : 'path';
    const openNextFromResult = (lesson: LessonOutline) =>
      navigate(
        { kind: 'lesson', lessonId: lesson.id, step: startStepIndex(lesson, progress) + 1 },
        'replace',
        { wqtOpenedFrom: resultOrigin } satisfies LessonHistoryState,
      );
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
          onBackToPath={() => navigate({ kind: 'view', view: resultOrigin }, 'replace')}
          backLabel={resultOrigin === 'practice' ? 'Zurück zum Üben' : resultOrigin === 'chapters' ? 'Zurück zum Buchmodus' : 'Zurück zum Lernpfad'}
          nextLesson={nextAvailableLesson(resultCourse, progress.completedLessonIds)}
          onNext={openNextFromResult}
          trainingCases={casesForLesson(resultCourse, progress, resultLesson.id)}
          onTrain={openTraining}
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
          <strong>{course.title}</strong>
          <div className="sidebar-progress">
            <span style={{ width: `${percent}%` }} />
          </div>
          <div className="sidebar-course-foot">
            <small>{percent}% im Pilot</small>
            <button
              type="button"
              className="sidebar-course-switch"
              aria-label="Alle Themen ansehen"
              onClick={() => chooseView('library')}
            >
              Alle Themen
            </button>
          </div>
        </div>

        <nav className="sidebar-nav" aria-label="Hauptnavigation">
          {navigation.map((item) => (
            <button
              type="button"
              key={item.id}
              className={view === item.id ? 'active' : ''}
              data-mode={item.mode}
              aria-current={view === item.id ? 'page' : undefined}
              onClick={() => chooseView(item.id)}
            >
              <span aria-hidden="true">
                <Icon name={item.icon} size={20} />
              </span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="sidebar-spacer" />
        <div className="sidebar-status">
          <span className="status-dot" />
          <div>
            <strong>V2 · technischer Pilot</strong>
            <small>Lernstand nur auf diesem Gerät</small>
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
              ref={helpButton}
              type="button"
              className="help-trigger"
              aria-haspopup="dialog"
              onClick={() => setGuideOpen(true)}
            >
              <span aria-hidden="true">?</span>
              <span className="help-trigger-label">Hilfe</span>
            </button>
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
            <span className="pilot-pill">Pilot</span>
            <div className="profile-chip" role="img" aria-label="Profil Robert">
              RW
            </div>
          </div>
        </header>

        <div className="view-container" data-mode={navigation.find((item) => item.id === view)?.mode}>
          {rescued && !rescueHidden ? (
            <RescueNotice
              rescued={rescued}
              onDownload={() => downloadTextFile(RESCUE_FILE_NAME, rescued.raw, 'text/plain')}
              onHide={() => setRescueHidden(true)}
              onDiscard={() => {
                discardRescuedData(window.localStorage);
                setRescued(null);
              }}
            />
          ) : null}
          {studying ? (
            <StudyView
              key={studying.minutes}
              plan={planStudySession(course, progress, today, studying.minutes)}
              onMinutes={(minutes) => navigate({ kind: 'study', minutes }, 'replace')}
              onReview={(questionIds) => {
                // Neue Runde aus den vorgeschlagenen Fragen – oder die laufende fortsetzen.
                if (questionIds) {
                  setProgress((current) =>
                    startSession(current, buildQuestionSession(questionIds, reviewPool(outlineOf(current), current), today)),
                  );
                }
                chooseView('practice');
              }}
              onLesson={openLesson}
              onCase={openTraining}
              onBack={() => chooseView('path')}
            />
          ) : null}
          {view === 'path' && !studying && shouldShowFirstUseGuide(progress) ? (
            <FirstUseWelcome
              facts={guideFacts}
              onStart={(lesson) => {
                setProgress((current) => markGuideSeen(current));
                openLesson(lesson);
              }}
              onDismiss={() => {
                setProgress((current) => markGuideSeen(current));
                helpButton.current?.focus();
              }}
            />
          ) : null}
          {view === 'path' && !studying && !shouldShowFirstUseGuide(progress) ? (
            <TodayPanel
              plan={planToday(course, progress, today)}
              goals={goalOverview(progress, today)}
              onLesson={openLesson}
              onReview={() => {
                // Eine laufende Runde wird fortgesetzt, nicht ersetzt.
                const running = progress.reviewSession && !isSessionFinished(progress.reviewSession);
                if (!running) startReview('due');
                chooseView('practice');
              }}
              onPractice={() => chooseView('practice')}
              onTrain={openTraining}
              onRead={(unit, lesson) => openReader(unit.id, lesson.id)}
              onStudy={(minutes) => {
                navigate({ kind: 'study', minutes }, 'push');
                scrollToTop();
              }}
            />
          ) : null}
          {view === 'path' && !studying ? (
            <PathView
              course={course}
              progress={progress}
              percent={percent}
              resume={resume}
              notice={notice}
              onDismissNotice={() => setNotice(null)}
              goal={goalProgress(progress, today)}
              streak={goalOverview(progress, today).streak}
              totalXp={totalXp}
              onOpenLesson={openLesson}
            />
          ) : null}
          {reading ? (
            <ReaderView
              course={courseOfUnit(reading.unit.id) ?? course}
              reader={
                readerFallbackUnit === reading.unit.id ? { ...reading, fellBack: true } : reading
              }
              progress={progress}
              onOpenSection={(lessonId) => openReaderSection(reading.unit.id, lessonId)}
              onOpenUnit={openReader}
              onPosition={(lessonId, stepId, stepIndex) =>
                recordReading(reading.unit.id, lessonId, stepId, stepIndex)
              }
              onAnswer={(question, optionId) =>
                setProgress((current) => submitAnswer(current, question, optionId))
              }
              onRetry={(question) => setProgress((current) => retryQuestion(current, question))}
              onReveal={(question) => setProgress((current) => revealSolution(current, question))}
              onCompleteSection={(lesson) =>
                setProgress((current) =>
                  current.completedLessonIds.includes(lesson.id)
                    ? current
                    : completeLesson(current, lesson.id, lesson.xp),
                )
              }
              onBackToChapters={() => chooseView('chapters')}
              onReadingOptions={(changes) => setProgress((current) => updateReadingOptions(current, changes))}
              onTrain={openTraining}
            />
          ) : null}
          {training ? (
            <TrainerView
              key={training.id}
              course={courseOfUnit(training.unitId) ?? course}
              barCase={training}
              progress={progress}
              onBegin={() => setProgress((current) => beginCaseRun(current, training))}
              onUpdate={(session) => setProgress((current) => updateCaseRun(current, training, session))}
              onDiscard={() => setProgress((current) => discardCaseRun(current, training.id))}
              onReasoning={(draft) => setProgress((current) => setReasoningDraft(current, training.id, draft))}
              onReplay={(sessionId) => {
                navigate({ kind: 'replay', caseId: training.id, sessionId }, 'push');
                scrollToTop();
              }}
              onOpenLesson={openLesson}
              onBack={() => chooseView('practice')}
            />
          ) : null}
          {transferring ? (
            <TransferView
              course={course}
              progress={progress}
              onChange={setProgress}
              onOpenLesson={openLesson}
              onBack={() => chooseView('practice')}
            />
          ) : null}
          {view === 'chapters' && !reading ? (
            <ChapterView
              course={course}
              progress={progress}
              onOpenLesson={openLesson}
              onReadUnit={openReader}
            />
          ) : null}
          {replaying ? (
            <ReplayView
              key={`${replaying.caseId}/${replaying.sessionId}`}
              course={replayCourse}
              progress={progress}
              caseId={replaying.caseId}
              sessionId={replaying.sessionId}
              onRetrain={(caseId) => {
                // Getrennter neuer Durchlauf; eine laufende Runde wird nicht ersetzt.
                const barCase = findPublishedCase(caseId);
                if (barCase && !progress.caseSessions[caseId]) {
                  setProgress((current) => beginCaseRun(current, barCase));
                }
                openTraining(caseId);
              }}
              onOpenLesson={openLesson}
              onBack={() => chooseView('practice')}
            />
          ) : null}
          {view === 'practice' && !training && !replaying && !transferring ? (
            <PracticeView
              course={course}
              progress={progress}
              today={today}
              glossary={glossary.entries}
              onStart={startReview}
              onAnswer={(question, optionId) =>
                setProgress((current) => answerReview(current, question, optionId, today))
              }
              onNext={() => {
                setProgress((current) => advanceSession(current, today));
                window.scrollTo({ top: 0 });
              }}
              onEnd={() => setProgress((current) => endSession(current, today))}
              onTrain={openTraining}
              onOpenLesson={openLesson}
              onOpenTransfer={() => {
                navigate({ kind: 'transfer' }, 'push');
                scrollToTop();
              }}
              onPracticeTopic={(topicId, questionIds) => {
                setProgress((current) =>
                  startSession(
                    current,
                    buildQuestionSession(questionIds, reviewPool(outlineOf(current), current), today, topicId),
                  ),
                );
                window.scrollTo({ top: 0 });
              }}
              onPracticeQuestions={(questionIds) => {
                setProgress((current) =>
                  startSession(
                    current,
                    buildQuestionSession(questionIds, reviewPool(outlineOf(current), current), today),
                  ),
                );
                window.scrollTo({ top: 0 });
              }}
            />
          ) : null}
          {view === 'progress' ? (
            <ProgressView
              key={course.id}
              course={course}
              overview={progressOverview(course, progress, today, allCoursesOutline)}
              goals={goalOverview(progress, today)}
              today={today}
              onAction={runNextAction}
              onGoalChange={(goal) => setProgress((current) => setDailyGoal(current, goal))}
              summary={progressSummary(progress, courseCases(course), questionIdsOf(course))}
              missions={dailyMissions(course, progress, today)}
              album={album.cards.length > 0 ? album : undefined}
              onOpenLesson={openLesson}
              onMission={(mission) => {
                if (mission.kind === 'review') runNextAction({ kind: 'review', due: 0 });
                else if (mission.kind === 'lesson' && mission.lesson) openLesson(mission.lesson);
                else if (mission.kind === 'train' && mission.caseId) openTraining(mission.caseId);
              }}
            />
          ) : null}
          {view === 'saved' ? (
            <SavedView
              overview={savedOverview(
                course,
                progress,
                courseOutlines.filter((other) => other.id !== course.id).map((other) => other.id),
              )}
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
              onReadingOptions={(changes) => setProgress((current) => updateReadingOptions(current, changes))}
              onExport={exportBackup}
              onImport={importBackup}
              onReset={resetAll}
              appStatus={appStatus}
              onApplyUpdate={pwa.applyUpdate}
            />
          ) : null}
          {view === 'library' && librarySubject === null && libraryCourse === null ? (
            <LibraryView
              progress={progress}
              activeCourseId={course.id}
              onNavigate={openLibraryPage}
              onContinue={() => chooseView('path')}
            />
          ) : null}
          {librarySubject !== null ? (
            <SubjectPage subjectId={librarySubject} activeCourseId={course.id} onNavigate={openLibraryPage} />
          ) : null}
          {libraryCourse !== null ? (
            <CoursePage
              key={libraryCourse}
              courseId={libraryCourse}
              progress={progress}
              activeCourseId={course.id}
              onNavigate={openLibraryPage}
              onStart={startCourse}
              onContinue={() => chooseView('path')}
            />
          ) : null}
          {view === 'glossary' ? (
            <GlossaryView
              key={`${course.id}:${glossaryTerm ?? ''}`}
              entries={glossary.entries}
              title={glossary.title}
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
            data-mode={item.mode}
            aria-current={view === item.id ? 'page' : undefined}
            onClick={() => chooseView(item.id)}
          >
            <span aria-hidden="true">
                <Icon name={item.icon} size={20} />
              </span>
            <small>{item.label}</small>
          </button>
        ))}
      </nav>
    </div>
  );
}

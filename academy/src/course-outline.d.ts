declare module 'virtual:wqt-course-outline' {
  import type { CourseOutline } from './content/types';

  /** Beim Build aus den Inhaltsdateien erzeugte Kursgliederung (F-12). */
  const outline: CourseOutline;
  export default outline;
}

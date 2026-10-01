declare module 'virtual:wqt-course-outline' {
  import type { CourseOutline } from './content/types';

  /** Beim Build aus den Inhaltsdateien erzeugte Gliederungen aller Kurse, in Registerreihenfolge (F-12). */
  const outlines: CourseOutline[];
  export default outlines;
}

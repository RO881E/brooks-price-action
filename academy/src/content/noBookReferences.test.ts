import { describe, expect, it } from 'vitest';
import { toCourseOutline } from '../../build/courseOutline';
import { priceActionTrendsCourse } from './course';
import { courseInfo } from './units';
import { glossaryEntries } from './glossary';
import { librarySubjects } from './library';
import { signalBarTasks, orderTasks } from './practiceTasks';
import { barCases, transferCases } from './barCases';

/* Sichtbare Texte dürfen weder den Autor noch Buchtitel oder Abbildungsnummern nennen (siehe docs/KEINE_BUCHVERWEISE.md). */
const FORBIDDEN =
  /Brooks|Trading Price Action|Buchfall|Buchfälle|Buchchart|Buchbeispiel|Buchabbildung|Buchgrafik|Buchquelle|Buchreihe|Buchkapitel|Buchkurs|Buchtag|Buchvorlage|Wiley|Abbildung \d|\bim Buch\b|\bdes Buches\b|\bBand [123]\b|\bBuch [123]\b|How to Read|Signs of Strength|Bar Counting Basics/;

function collect(value: unknown, out: string[] = []): string[] {
  if (typeof value === 'string') out.push(value);
  else if (Array.isArray(value)) value.forEach((item) => collect(item, out));
  else if (value && typeof value === 'object') Object.values(value).forEach((item) => collect(item, out));
  return out;
}

describe('keine Buch- und Autorenverweise in sichtbaren Texten', () => {
  const visible = (label: string, value: unknown) => ({ label, texts: collect(value) });
  const sets = [
    visible('Kurs und Lektionen', priceActionTrendsCourse),
    visible('Gliederung', toCourseOutline(priceActionTrendsCourse)),
    visible('Kursinfo', courseInfo),
    visible('Glossar', glossaryEntries),
    visible('Bibliothek', librarySubjects),
    visible('Übungsaufgaben', [signalBarTasks, orderTasks]),
    visible('Fälle', [barCases, transferCases]),
  ];

  for (const { label, texts } of sets) {
    it(label, () => {
      const hits = texts.filter((text) => FORBIDDEN.test(text)).map((text) => text.match(FORBIDDEN)?.[0] + ' → ' + text.slice(0, 80));
      expect(hits).toEqual([]);
    });
  }
});

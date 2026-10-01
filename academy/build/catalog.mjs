// Erzeugt docs/THEMENKATALOG.md aus src/content/library.ts – der einzigen Liste der Bibliothek.
// Aufruf: `npm run catalog`; der Test `catalog.test.ts` prüft, dass die Datei aktuell ist.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = join(import.meta.dirname, '..');

const count = (value, one, many) => `${value} ${value === 1 ? one : many}`;

const INTRO = [
  '# Themenkatalog: mögliche Themen und Unterthemen',
  '',
  '<!-- Erzeugt aus src/content/library.ts mit `npm run catalog` – bitte dort ändern, nicht hier. -->',
  '',
  'Alle Themen, die als Kurse in die App passen könnten – von der Chartanalyse über Risiko und Psychologie bis',
  'zu Unternehmensbewertung und Makroökonomie. Jedes Thema steht in der **Bibliothek** der App als',
  '„Geplant“-Karte; nur was mit **[aktiv]** markiert ist, hat schon Inhalt. Die Liste darf wachsen.',
  '',
  '- **Aufbau:** Themengebiet → Thema (ein möglicher Kurs) → Unterthemen (mögliche Kapitel oder Lektionen).',
];

const NOTES = [
  '- **Übungen:** Je Gebiet steht, welche Übungsformen passen. Vorhanden sind Fragen, Chart-Trainer,',
  '  „Finde den Bar“, „Ordne die Schritte“, Begriffe-Memory und Blitzrunde. Manche Gebiete bräuchten neue',
  '  Formen (siehe ganz unten).',
  '- Methodennamen wie Wyckoff, Fibonacci oder Elliott sind gängige Fachbegriffe. Bücher, Autoren und',
  '  Produktnamen nennt die App nicht; alle Inhalte werden in eigenen Worten geschrieben.',
  '- Keine Anlage- oder Steuerberatung.',
];

const OUTRO = [
  '## Vorschlag: Reihenfolge nach Nähe zur Price Action',
  '',
  '1. **Direkt anschließend:** Price Action Teil 2 und 3, Risiko- und Money-Management, Trading-Plan und',
  '   Journal, Trading-Psychologie.',
  '2. **Markttechnik vertiefen:** Volumen, Orderflow und Market Profile, Futures- und Optionsgrundlagen,',
  '   mehrere Zeitebenen, Intraday-Konzepte.',
  '3. **Eigene Welten:** Unternehmensbewertung, Makroökonomie, Portfolio und Vermögensaufbau, systematisches',
  '   Trading.',
  '',
  '## Neue Übungsformen, die manche Themen bräuchten',
  '',
  '- **Rechenaufgaben** mit Eingabefeld (Positionsgröße, Kennzahlen, DCF, Optionswert)',
  '- **Orderbuch- und Footprint-Bilder** lesen',
  '- **Szenarien** mit Entscheidungen (Psychologie, Risiko, Kontoregeln)',
  '- **Tabellen ausfüllen** (Bilanz, Journal, Trading-Plan)',
  '',
  '## So kommt ein Thema in die App',
  '',
  'Alle Themen stehen in `src/content/library.ts` – der einzigen Liste der Bibliothek. Neue Themen oder',
  'Unterthemen dort eintragen und danach `npm run catalog` ausführen; das erzeugt diese Datei neu. Hat ein Kurs',
  'Inhalt, wird er dort auf „verfügbar“ gesetzt – siehe [`DESIGN_BIBLIOTHEK.md`](DESIGN_BIBLIOTHEK.md).',
];

/** Der Themenkatalog als Markdown, vollständig aus der Bibliothek abgeleitet. */
export function renderCatalog(subjects) {
  const courses = subjects.flatMap((subject) => subject.courses);
  const available = courses.filter((course) => course.status === 'available').length;
  const lines = [
    ...INTRO,
    `- **Umfang:** ${count(subjects.length, 'Themengebiet', 'Themengebiete')}, ${count(courses.length, 'Thema', 'Themen')}, davon ${available} aktiv.`,
    ...NOTES,
    '',
    '## Überblick',
    '',
  ];
  subjects.forEach((subject, index) => {
    const active = subject.courses.filter((course) => course.status === 'available').length;
    lines.push(`${index + 1}. ${subject.title} (${count(subject.courses.length, 'Thema', 'Themen')}${active ? `, ${active} aktiv` : ''})`);
  });
  subjects.forEach((subject, index) => {
    lines.push('', '---', '', `## ${index + 1}. ${subject.title}`, '', subject.description, '', `*Passende Übungen:* ${subject.exercises}`);
    for (const course of subject.courses) {
      const label = course.label ? ` (${course.label})` : '';
      const marker = course.status === 'available' ? ' **[aktiv]**' : '';
      lines.push('', `### ${course.title}${label}${marker}`, '', course.description, '', ...course.subtopics.map((topic) => `- ${topic}`));
    }
  });
  lines.push('', '---', '', ...OUTRO);
  return `${lines.join('\n')}\n`;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const { runnerImport } = await import('vite');
  const { module } = await runnerImport(join(root, 'src/content/library.ts'), { configFile: false, logLevel: 'error' });
  const subjects = module.librarySubjects;
  writeFileSync(join(root, 'docs/THEMENKATALOG.md'), renderCatalog(subjects));
  const courses = subjects.reduce((sum, subject) => sum + subject.courses.length, 0);
  console.log(`docs/THEMENKATALOG.md: ${subjects.length} Themengebiete, ${courses} Themen`);
}

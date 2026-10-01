// Misst die gebaute Academy (P12): Größe der Dateien, Offline-Vorladung und Grenzwerte.
// Aufruf nach `npm run build`: `npm run report:size`. Endet mit Fehler, wenn ein Grenzwert überschritten ist.
//
// Die Grenzen trennen App-Code von Kursinhalten: Der App-Code soll klein bleiben, Kursinhalte wachsen mit
// jedem Kapitel. Für Inhalte gilt deshalb je Baustein eine Grenze – wird sie erreicht, wird der Baustein
// aufgeteilt (Hinweis in der Meldung), statt die Grenze still anzuheben.
import { readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';
import { gzipSync } from 'node:zlib';

const dist = join(import.meta.dirname, '..', 'dist');
const BUDGET = {
  // Hauptbündel (Einstieg, nur App-Code): roh (Release-Checkliste: keine Chunk-Warnung über 500 kB) und gzip
  mainRawKb: 500,
  mainGzipKb: 160,
  // App-Grundgerüst: alles außer Kursinhalten (Kapitel, Gliederung, Schaubilder), unkomprimiert
  appMb: 1.0,
  // Gliederung aller Kurse, gzip (so wird sie übertragen; beim Start parallel geladen)
  outlineGzipKb: 120,
  // Schaubilder (ChartFocus), gzip – erst beim ersten Diagramm geladen
  chartsGzipKb: 150,
  // Größtes einzelnes Kapitel, gzip
  chapterGzipKb: 40,
  // Offline-Vorladung laut Service Worker, so wie sie übertragen wird (gzip)
  precacheGzipMb: 1.5,
};

function files(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    return entry.isDirectory() ? files(full) : [full];
  });
}

/** Bereich einer Datei: Kursinhalte wachsen mit dem Kurs, alles andere ist App-Grundgerüst. */
function area(path) {
  if (/^assets\/(chapter|introduction|part)-.*\.js$/.test(path)) return 'chapter';
  if (/^assets\/course-outline-.*\.js$/.test(path)) return 'outline';
  if (/^assets\/ChartFocus-.*\.js$/.test(path)) return 'charts';
  return 'app';
}

const all = files(dist).map((file) => {
  const bytes = readFileSync(file);
  const path = relative(dist, file);
  return { path, area: area(path), raw: bytes.length, gzip: gzipSync(bytes).length };
});
const kb = (value) => Math.round((value / 1024) * 10) / 10;
const mb = (value) => (value / 1024 / 1024).toFixed(2);
const sum = (list, key) => list.reduce((total, file) => total + file[key], 0);
const assets = all.filter((file) => file.path.startsWith('assets/')).sort((a, b) => b.raw - a.raw);

const sw = readFileSync(join(dist, 'sw.js'), 'utf8');
const listText = /const SW_PRECACHE = (\[[\s\S]*?\]);/.exec(sw)?.[1] ?? '[]';
const precachePaths = new Set(JSON.parse(listText));
const precached = all.filter((file) => precachePaths.has(file.path));

console.log('Datei'.padEnd(44), 'roh (kB)'.padStart(10), 'gzip (kB)'.padStart(11));
for (const file of assets) console.log(file.path.padEnd(44), String(kb(file.raw)).padStart(10), String(kb(file.gzip)).padStart(11));

const app = all.filter((file) => file.area === 'app');
const chapters = all.filter((file) => file.area === 'chapter').sort((a, b) => b.gzip - a.gzip);
const outline = all.find((file) => file.area === 'outline');
const charts = all.filter((file) => file.area === 'charts');
const main = assets.find((file) => /^assets\/index-.*\.js$/.test(file.path));

console.log(`\nGesamt dist: ${mb(sum(all, 'raw'))} MB`);
console.log(`- App-Grundgerüst: ${app.length} Dateien, ${mb(sum(app, 'raw'))} MB roh, ${kb(sum(app, 'gzip'))} kB gzip`);
console.log(`- Kapitel: ${chapters.length} Dateien, ${mb(sum(chapters, 'raw'))} MB roh, ${kb(sum(chapters, 'gzip'))} kB gzip`);
if (outline) console.log(`- Gliederung: ${kb(outline.raw)} kB roh, ${kb(outline.gzip)} kB gzip`);
if (charts.length) console.log(`- Schaubilder: ${charts.length} Dateien, ${kb(sum(charts, 'raw'))} kB roh, ${kb(sum(charts, 'gzip'))} kB gzip`);
console.log(
  `Vorladung offline: ${precachePaths.size} Dateien, ${mb(sum(precached, 'raw'))} MB roh, ${mb(sum(precached, 'gzip'))} MB übertragen (gzip)`,
);

const problems = [];
if (!main) problems.push('Hauptbündel (assets/index-*.js) nicht gefunden');
if (!outline) problems.push('Gliederung (assets/course-outline-*.js) nicht als eigener Baustein gefunden');
if (main && main.raw / 1024 > BUDGET.mainRawKb) problems.push(`Hauptbündel ${kb(main.raw)} kB roh > ${BUDGET.mainRawKb} kB`);
if (main && main.gzip / 1024 > BUDGET.mainGzipKb) problems.push(`Hauptbündel ${kb(main.gzip)} kB gzip > ${BUDGET.mainGzipKb} kB`);
if (sum(app, 'raw') / 1024 / 1024 > BUDGET.appMb) problems.push(`App-Grundgerüst ${mb(sum(app, 'raw'))} MB > ${BUDGET.appMb} MB`);
if (outline && outline.gzip / 1024 > BUDGET.outlineGzipKb) {
  problems.push(
    `Gliederung ${kb(outline.gzip)} kB gzip > ${BUDGET.outlineGzipKb} kB – Zeit, sie je Kurs aufzuteilen (nur der gewählte Kurs lädt beim Start)`,
  );
}
if (sum(charts, 'gzip') / 1024 > BUDGET.chartsGzipKb) {
  problems.push(`Schaubilder ${kb(sum(charts, 'gzip'))} kB gzip > ${BUDGET.chartsGzipKb} kB – Zeit, sie je Kapitel nachzuladen`);
}
if (chapters[0] && chapters[0].gzip / 1024 > BUDGET.chapterGzipKb) {
  problems.push(`Kapitel ${chapters[0].path} ${kb(chapters[0].gzip)} kB gzip > ${BUDGET.chapterGzipKb} kB`);
}
if (sum(precached, 'gzip') / 1024 / 1024 > BUDGET.precacheGzipMb) {
  problems.push(`Vorladung ${mb(sum(precached, 'gzip'))} MB gzip > ${BUDGET.precacheGzipMb} MB`);
}
if (problems.length) {
  console.error(`\nGrenzwerte überschritten:\n- ${problems.join('\n- ')}`);
  process.exit(1);
}
console.log('\nAlle Grenzwerte eingehalten.');

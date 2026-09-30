// Misst die gebaute Academy (P12): Größe der Dateien, Offline-Vorladung und Grenzwerte.
// Aufruf nach `npm run build`: `npm run report:size`. Endet mit Fehler, wenn ein Grenzwert überschritten ist.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { gzipSync } from 'node:zlib';

const dist = join(import.meta.dirname, '..', 'dist');
const BUDGET = {
  // Hauptbündel (App-Code ohne Kapitel): roh (Release-Checkliste: keine Chunk-Warnung über 500 kB) und gzip
  mainRawKb: 500,
  mainGzipKb: 160,
  // Größtes einzelnes Kapitel-Chunk, gzip
  chapterGzipKb: 40,
  // Gesamtgröße von dist, unkomprimiert
  totalMb: 2.4,
  // Vorgeladene Dateien laut Service Worker, unkomprimiert
  precacheMb: 2.4,
};

function files(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    return entry.isDirectory() ? files(full) : [full];
  });
}

const all = files(dist).map((file) => {
  const bytes = readFileSync(file);
  return { path: relative(dist, file), raw: bytes.length, gzip: gzipSync(bytes).length };
});
const kb = (value) => Math.round((value / 1024) * 10) / 10;
const assets = all.filter((file) => file.path.startsWith('assets/')).sort((a, b) => b.raw - a.raw);
const total = all.reduce((sum, file) => sum + file.raw, 0);

const sw = readFileSync(join(dist, 'sw.js'), 'utf8');
const listText = /const SW_PRECACHE = (\[[\s\S]*?\]);/.exec(sw)?.[1] ?? '[]';
const precache = JSON.parse(listText);
const precacheBytes = precache.reduce((sum, path) => {
  try {
    return sum + statSync(join(dist, path)).size;
  } catch {
    return sum;
  }
}, 0);

console.log('Datei'.padEnd(44), 'roh (kB)'.padStart(10), 'gzip (kB)'.padStart(11));
for (const file of assets) console.log(file.path.padEnd(44), String(kb(file.raw)).padStart(10), String(kb(file.gzip)).padStart(11));
console.log(`\nGesamt dist: ${(total / 1024 / 1024).toFixed(2)} MB · Vorladung offline: ${precache.length} Dateien, ${(precacheBytes / 1024 / 1024).toFixed(2)} MB`);

const main = assets.find((file) => /^assets\/index-.*\.js$/.test(file.path));
const chapters = assets.filter((file) => /^assets\/(chapter|introduction|part)-.*\.js$/.test(file.path));
const largestChapter = chapters.sort((a, b) => b.gzip - a.gzip)[0];
const problems = [];
if (main && main.raw / 1024 > BUDGET.mainRawKb) problems.push(`Hauptbündel ${kb(main.raw)} kB roh > ${BUDGET.mainRawKb} kB`);
if (main && main.gzip / 1024 > BUDGET.mainGzipKb) problems.push(`Hauptbündel ${kb(main.gzip)} kB gzip > ${BUDGET.mainGzipKb} kB`);
if (largestChapter && largestChapter.gzip / 1024 > BUDGET.chapterGzipKb) problems.push(`Kapitel ${largestChapter.path} ${kb(largestChapter.gzip)} kB gzip > ${BUDGET.chapterGzipKb} kB`);
if (total / 1024 / 1024 > BUDGET.totalMb) problems.push(`dist ${(total / 1024 / 1024).toFixed(2)} MB > ${BUDGET.totalMb} MB`);
if (precacheBytes / 1024 / 1024 > BUDGET.precacheMb) problems.push(`Vorladung ${(precacheBytes / 1024 / 1024).toFixed(2)} MB > ${BUDGET.precacheMb} MB`);
if (problems.length) {
  console.error(`\nGrenzwerte überschritten:\n- ${problems.join('\n- ')}`);
  process.exit(1);
}
console.log('\nAlle Grenzwerte eingehalten.');

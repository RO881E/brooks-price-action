#!/usr/bin/env node
/*
 * Strukturprüfung der Buchinhalte (F-29): `npm run check:content`.
 * Lädt die echten Inhalte über Vites Modul-Runner (TypeScript/TSX ohne
 * Browser-Bundle), prüft sie mit `build/contentCheck.ts` und ordnet jeden
 * Befund einer Datei zu. `--accept-new` nimmt neue veröffentlichte IDs bewusst
 * in `build/published-ids.json` auf – bekannte IDs werden dabei nie entfernt.
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { runnerImport } from 'vite';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const knownPath = join(root, 'build', 'published-ids.json');
const acceptNew = process.argv.includes('--accept-new');

async function load(path) {
  const { module } = await runnerImport(join(root, path), { configFile: false, logLevel: 'error' });
  return module;
}

const [{ brooksTrendsCourse }, { glossaryEntries }, chart, { barCases, allBarCases }, { validateBarCases }, { validateStepTermLinks }, { brooksTopics }, { validateTopicMap }, check] =
  await Promise.all([
    load('src/content/course.ts'),
    load('src/content/glossary.ts'),
    load('src/components/LearningChart.tsx'),
    load('src/content/barCases.ts'),
    load('src/features/barCaseValidation.ts'),
    load('src/content/stepTerms.ts'),
    load('src/content/topicMap.ts'),
    load('src/features/topicMapValidation.ts'),
    load('build/contentCheck.ts'),
  ]);

const known = JSON.parse(readFileSync(knownPath, 'utf8'));
const input = {
  course: brooksTrendsCourse,
  glossary: glossaryEntries,
  scenarioIds: chart.chartScenarioIds(),
  describe: (scenario) => chart.chartDescription(scenario),
  caseIssues: validateBarCases(allBarCases, brooksTrendsCourse),
  termLinkIssues: validateStepTermLinks(brooksTrendsCourse, glossaryEntries),
  topicIssues: validateTopicMap(brooksTopics, brooksTrendsCourse, barCases),
  known,
};

// Datei zu jeder ID: wo sie wörtlich steht, sonst die Einstiegsdatei der Einheit.
function sourceFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    return entry.isDirectory() ? sourceFiles(full) : /\.tsx?$/.test(entry.name) && !/\.test\./.test(entry.name) ? [full] : [];
  });
}
const files = [...sourceFiles(join(root, 'src', 'content')), ...sourceFiles(join(root, 'src', 'components'))].map((file) => ({
  path: relative(root, file),
  text: readFileSync(file, 'utf8'),
}));
const unitsSource = readFileSync(join(root, 'src', 'content', 'units.ts'), 'utf8');
function unitEntry(unitId) {
  const block = unitsSource.slice(unitsSource.indexOf(`'${unitId}'`));
  const match = /import\('\.\/(courses\/[^']+)'\)/.exec(block);
  return match ? `src/content/${match[1]}.ts` : 'src/content/units.ts';
}
function locate(issue) {
  if (issue.area === 'glossary') return 'src/content/glossary.ts';
  if (issue.area === 'case') return 'src/content/barCases.ts';
  if (issue.area === 'term-link') return 'src/content/stepTerms.ts';
  if (issue.area === 'topic') return 'src/content/topicMap.ts';
  if (issue.area === 'known-ids' && !issue.lessonId) return 'build/published-ids.json';
  if (issue.area === 'diagram' && !issue.lessonId) return 'src/components/LearningChart.tsx';
  for (const id of [issue.id, issue.lessonId]) {
    if (!id) continue;
    const hit = files.find((file) => file.text.includes(`'${id}'`) || file.text.includes(`"${id}"`));
    if (hit) return hit.path;
  }
  return issue.unitId ? unitEntry(issue.unitId) : undefined;
}

if (acceptNew) {
  const withoutNew = check.checkContent(input).issues.filter((issue) => issue.rule === 'bekannte-id');
  if (withoutNew.length > 0) {
    console.error('Bekannte IDs sind verletzt – neue IDs werden erst nach der Korrektur aufgenommen:\n');
    console.error(withoutNew.map((issue) => `✗ ${issue.id}: ${issue.message}`).join('\n'));
    process.exit(1);
  }
  const next = check.acceptNewIds(known, brooksTrendsCourse);
  writeFileSync(knownPath, `${JSON.stringify(next, null, 2)}\n`);
  console.log('Neue veröffentlichte IDs aufgenommen: build/published-ids.json (bitte im PR mitsenden).');
}

const report = check.checkContent({ ...input, known: acceptNew ? JSON.parse(readFileSync(knownPath, 'utf8')) : known });
for (const issue of report.issues) issue.file = locate(issue);
console.log(check.formatReport(report));
console.log('Hinweis: Der Check prüft nur Struktur – nicht fachliche Treue, Formulierungen oder Bildrechte.');
process.exit(report.errors > 0 ? 1 : 0);

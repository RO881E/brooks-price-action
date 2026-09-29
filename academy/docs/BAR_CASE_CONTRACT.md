# Vertrag für Bar-für-Bar-Fälle (F-14)

Dieser Vertrag beschreibt, wie ein Content-PR (C-01, später C-02) eigenständig
entworfene Trainingsfälle liefert – **ohne Änderung an Engine oder Oberfläche**.
Typen: `src/content/barCaseTypes.ts` · Prüfung: `src/features/barCaseValidation.ts`
· Engine: `src/features/barTrainer.ts` · Registrierung: `src/content/barCases.ts`.

## Grundsätze

- **Eigenständig und schematisch.** Keine Originalcharts, keine Buchabbildungen,
  keine langen Buchpassagen, keine echten Kurse. OHLC-Werte sind relativ (frei
  gewählte Skala, z. B. um 100).
- **Nur, was sichtbar ist.** Ausgangslage, Frage und Hinweise dürfen nur
  Informationen enthalten, die am jeweiligen Entscheidungspunkt schon bekannt
  sind. Spätere Bars, Einordnung und Rückmeldungen erscheinen erst nach der
  Abgabe.
- **Didaktisch, nicht prognostisch.** Bewertet werden Kontext und Begründung,
  nicht eine behauptete Gewissheit über den nächsten Bar. „Abwarten“ kann die
  beste Wahl sein. Kein P&L, kein Depot, keine Handelssignale.
- **Freigabe.** Neue Fälle kommen als `status: 'draft'`. Erst nach fachlicher
  Prüfung wird `status: 'approved'` gesetzt; nur freigegebene Fälle zeigt der
  spätere Trainer (F-15).

## Aufbau eines Falls (`BarCase`)

| Feld | Pflicht | Bedeutung |
|---|---|---|
| `id` | ja | Stabil und eindeutig, nur `a-z`, `0-9`, `.` und `-`, max. 120 Zeichen. Empfohlen: `bar-case.<einheit>.<thema>`, z. B. `bar-case.chapter-02.trend-bar-follow-through`. Nie wiederverwenden oder umbenennen – Ergebnisse hängen daran. |
| `schemaVersion` | ja | Immer `1`. |
| `status` | ja | `draft` oder `approved`. |
| `title` | ja | Kurzer Titel. |
| `unitId` | ja | Veröffentlichte Einheit, z. B. `brooks-trends.chapter-02`. |
| `lessonIds` | ja | Mindestens eine **veröffentlichte** Lektion **dieser** Einheit, deren Inhalt der Fall übt. |
| `setup` | ja | Ausgangslage vor dem ersten Bar (ein bis drei Sätze). |
| `timeframe` | nein | Rahmen, z. B. „schematischer 5-Minuten-Chart“. |
| `bars` | ja | Mindestens 3 Bars `{ open, high, low, close, label? }`, endliche Zahlen, `low ≤ min(open, close)`, `high ≥ max(open, close)`. `label` erscheint erst, wenn der Bar sichtbar ist. |
| `decisions` | ja | Mindestens ein Entscheidungspunkt, siehe unten. |
| `sourceAnchors` | ja | Mindestens ein Quellenanker (Abschnitt der Buchvorlage). |

### Entscheidungspunkt (`DecisionPoint`)

| Feld | Pflicht | Bedeutung |
|---|---|---|
| `id` | ja | Innerhalb des Falls eindeutig und stabil. |
| `afterBar` | ja | Nullbasierter Index des **letzten sichtbaren** Bars. Streng aufsteigend über alle Punkte; nach dem letzten Punkt muss mindestens ein Bar folgen. |
| `prompt` | ja | Frage an dieser Stelle. |
| `options` | ja | **Genau drei**: `long`, `short`, `wait` – je einmal. Genau eine hat `verdict: 'best'`, die anderen `defensible` (vertretbar) oder `mistake`. Jede braucht `feedback` (mind. 20 Zeichen) mit Begründung, auch die nicht gewählten. |
| `cues` | ja | Mindestens **zwei** Hinweise `{ id, label, relevant, explanation, lessonId? }`, mindestens einer `relevant: true`. Irrelevante Hinweise sind plausible Fehlinterpretationen. `explanation` (mind. 20 Zeichen) sagt, warum der Hinweis hier zählt oder nicht. `lessonId` verweist optional auf eine veröffentlichte Lektion für die Auswertung. |
| `explanation` | ja | Zusammenfassende Einordnung nach der Abgabe (mind. 20 Zeichen). |

## Ablauf in der Engine

1. Sichtbar sind die Bars `0 … afterBar` des aktuellen Punkts.
2. Die Person wählt `long`, `short` oder `wait` und markiert mindestens einen
   Hinweis als Begründung.
3. Abgabe → Reveal: Einordnung aller Optionen, Erklärung der Hinweise und die
   Bars bis zum nächsten Punkt (bzw. alle nach dem letzten).
4. Weiter zum nächsten Punkt; eine abgegebene Antwort ist nicht mehr änderbar.
5. Auswertung: je Punkt `best`/`defensible`/`mistake`, erkannte, übersehene und
   irreführende Hinweise sowie Lernlinks (zuerst Lektionen übersehener
   Hinweise, dann die Lektionen des Falls).

`publicView()` liefert der Oberfläche nur das, was sie zeigen darf. Vor der
Abgabe enthält sie keine späteren Bars, keine Einordnung, keine Rückmeldungen
und keine Markierung relevanter Hinweise. Ein clientseitiges Lernangebot kann
gebündelte Falldaten nicht vor absichtlicher Quellcode-Inspektion schützen.

## Einen Fall liefern (C-01)

1. Neue Datei, z. B. `src/content/barCases/chapter-02.ts`, die ein
   `BarCase[]` exportiert.
2. In `src/content/barCases.ts` in `barCases` eintragen.
3. `npm test` im Ordner `academy/` ausführen. Der Test „alle registrierten Fälle
   erfüllen den Vertrag“ prüft jeden Fall gegen diesen Vertrag und die
   Kursgliederung und nennt jeden Fehler mit Fall-ID und Pfad, z. B.
   `bar-case.x › decisions[1].options: Genau eine Option muss „best“ sein`.
4. Keine Änderungen an Engine, Validator oder Oberfläche im Content-PR.

## Beispiel

Ein vollständiger, **rein technischer** Beispielfall steht in
`src/test/fixtures/barCases.ts`: **`test-fixture.two-step-wait-then-long`**
(zwei Entscheidungspunkte, beim ersten ist `wait` die beste Wahl). Er dient nur
den Engine-Tests, enthält keine fachliche Aussage und wird nie registriert.
Gekürzt:

```ts
{
  id: 'test-fixture.two-step-wait-then-long',
  schemaVersion: 1,
  status: 'draft',
  title: 'Technischer Testfall: zwei Entscheidungen',
  unitId: 'brooks-trends.introduction',
  lessonIds: ['brooks-trends.introduction.lesson-01', 'brooks-trends.introduction.lesson-04'],
  setup: 'Technische Ausgangslage für Engine-Tests ohne fachliche Aussage.',
  bars: [{ open: 100, high: 101.5, low: 99.4, close: 101.2 }, /* … 8 Bars */],
  decisions: [
    {
      id: 'decision-1',
      afterBar: 3,
      prompt: 'Technische Frage 1 an Bar 4.',
      explanation: 'Technische Einordnung 1: nur für Tests, ohne fachliche Aussage.',
      options: [
        { decision: 'long', verdict: 'defensible', feedback: '…' },
        { decision: 'short', verdict: 'mistake', feedback: '…' },
        { decision: 'wait', verdict: 'best', feedback: '…' },
      ],
      cues: [
        { id: 'cue-a', label: 'Test-Hinweis A', relevant: true, explanation: '…',
          lessonId: 'brooks-trends.introduction.lesson-04' },
        { id: 'cue-b', label: 'Test-Hinweis B', relevant: false, explanation: '…' },
      ],
    },
    // decision-2 bei afterBar: 5 …
  ],
  sourceAnchors: ['Technischer Anker (Test)'],
}
```

## Transferpool (C-02)

Ungesehene Transferfälle für die spätere Transferprüfung (F-17) liegen in
`src/content/barCases/c02.ts` und werden als `transferCases` registriert – **nie**
in `barCases`. So erscheint ein C-02-Fall nicht im gewöhnlichen Trainer,
der Fehlerübersicht, dem Kurzlernen oder dem Rückblick. Fall-IDs tragen `c02`
(`bar-case.c02.<einheit>.<thema>`) und sind disjunkt zu C-01. Vertrags- und
Inhaltsprüfung laufen über `allBarCases` (beide Pools). Fallmatrix und
Review-Notiz: [`C02_FALLMATRIX.md`](C02_FALLMATRIX.md).

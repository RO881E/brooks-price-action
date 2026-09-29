import type { BarCase, CaseBar } from '../barCaseTypes';

// C-01: eigenständig konstruierte relative Preisfolgen. Weder Buchabbildungen
// noch echte Kursdaten oder nachgezeichnete Chartfälle werden verwendet.
const bars = (...rows: [open: number, high: number, low: number, close: number][]): CaseBar[] =>
  rows.map(([open, high, low, close]) => ({ open, high, low, close }));

export const c01BarCases: BarCase[] = [
  {
    id: 'bar-case.chapter-01.range-high-test',
    schemaVersion: 1,
    status: 'approved',
    title: 'Eine überlappende Spanne',
    unitId: 'brooks-trends.chapter-01',
    lessonIds: ['brooks-trends.chapter-01.lesson-03', 'brooks-trends.chapter-01.lesson-07'],
    setup: 'Ein Markt ohne klare Trendrichtung wird neu beobachtet. Die Zahlen sind eine frei gewählte Skala; beurteile Lage und Reaktion der kommenden Bars.',
    timeframe: 'Schematische Bars auf einer Zeitebene',
    bars: bars(
      [100, 103, 98, 102], [102, 104, 99, 100], [100, 102, 97, 99],
      [99, 103, 98, 102], [102, 105, 101, 103], [103, 104, 100, 101],
      [101, 102, 98, 99], [99, 101, 97, 98],
    ),
    decisions: [
      {
        id: 'high-test',
        afterBar: 4,
        prompt: 'Der letzte Bar setzt ein neues Hoch, schließt aber wieder unter dem bisherigen Range-Hoch. Welche Entscheidung passt zu diesem Zeitpunkt am besten?',
        options: [
          { decision: 'long', verdict: 'defensible', feedback: 'Ein Ausbruchsversuch ist sichtbar. Ohne Schluss oberhalb der alten Zone und ohne Anschluss bleibt der Kauf aber schwach begründet.' },
          { decision: 'short', verdict: 'defensible', feedback: 'Ein aggressiver Verkauf nahe dem oberen Range-Rand ist denkbar. Eine sichtbare bärische Reaktion nach dem Hochtest fehlt aber noch.' },
          { decision: 'wait', verdict: 'best', feedback: 'Der Markt hat die Grenze nur kurz überschritten. Ein Folgebalken kann zeigen, ob der Bruch gehalten oder zurückgenommen wird.' },
        ],
        cues: [
          { id: 'overlap', label: 'Mehrere Bars überlappen stark', relevant: true, explanation: 'Die überlappende Vorgeschichte spricht zunächst für eine Trading Range statt für einen laufenden Trend.', lessonId: 'brooks-trends.chapter-01.lesson-03' },
          { id: 'close', label: 'Das neue Hoch hält bis zum Schluss nicht', relevant: true, explanation: 'Der Schluss unter dem bisherigen Hoch liefert noch keine Akzeptanz oberhalb der Grenze.', lessonId: 'brooks-trends.chapter-01.lesson-07' },
          { id: 'new-high', label: 'Ein neues Hoch reicht als Beweis für Trendfortsetzung', relevant: false, explanation: 'Ein einzelnes neues Extrem innerhalb einer Range kann sofort wieder zurückgenommen werden.' },
        ],
        explanation: 'Der Ausbruchsversuch ist real, die Bestätigung fehlt. An einer Range-Grenze zählt die Reaktion nach dem Hochtest.',
      },
      {
        id: 'back-inside',
        afterBar: 5,
        prompt: 'Der nächste Bar fällt in die alte Spanne zurück und schließt bärisch. Welche Richtung ist nun im gezeigten Kontext am ehesten begründet?',
        options: [
          { decision: 'long', verdict: 'mistake', feedback: 'Das neue Hoch wurde nicht gehalten und der Folgebalken verkauft zurück in die Range. Für einen Kauf fehlt hier ein neuer bullischer Beleg.' },
          { decision: 'short', verdict: 'best', feedback: 'Ein Short vom oberen Bereich in Richtung Range-Mitte hat nun eine nachvollziehbare Grundlage: Der Hochbruch wurde zurückgewiesen.' },
          { decision: 'wait', verdict: 'defensible', feedback: 'Abwarten ist bei unpassendem Risiko vertretbar. Die klarere fachliche Einordnung ist nun aber die Zurückweisung am oberen Rand.' },
        ],
        cues: [
          { id: 'reentry', label: 'Rückkehr unter das vorherige Hoch', relevant: true, explanation: 'Die Rückkehr in die alte Spanne schwächt die These eines gehaltenen Ausbruchs.', lessonId: 'brooks-trends.chapter-01.lesson-07' },
          { id: 'bear-close', label: 'Bärischer Schluss nach dem Randtest', relevant: true, explanation: 'Der neue Bar liefert erst jetzt eine sichtbare Verkäuferreaktion nahe der oberen Bereichsgrenze.' },
          { id: 'lower-edge', label: 'Das untere Range-Ende muss sofort erreicht werden', relevant: false, explanation: 'Eine plausible Richtung ist keine Garantie für den nächsten Zielpreis oder für einen durchgehenden Trend.' },
        ],
        explanation: 'Der Hochtest ist fehlgeschlagen. Damit verschiebt sich die Arbeitshypothese zu einer Bewegung zurück in die Range; Größe und Schutzort müssen dennoch passen.',
      },
    ],
    sourceAnchors: ['Kapitel 1 · Marktträgheit in der Trading Range', 'Kapitel 1 · gescheiterter Ausbruch über einem vorherigen Hoch'],
  },
  {
    id: 'bar-case.chapter-02.breakout-follow-through',
    schemaVersion: 1,
    status: 'approved',
    title: 'Eine enge Zone beobachten',
    unitId: 'brooks-trends.chapter-02',
    lessonIds: ['brooks-trends.chapter-02.lesson-05', 'brooks-trends.chapter-02.lesson-06'],
    setup: 'Der Markt hat vor dem Ausschnitt keine klare Richtung. Beurteile neue Bars zunächst einzeln und prüfe später, ob ihre Folge eine Richtung trägt.',
    timeframe: 'Schematische Bars auf einer Zeitebene',
    bars: bars(
      [100, 102, 99, 101], [101, 103, 100, 102], [102, 103, 100, 101],
      [101, 104, 100, 103], [103, 108, 102, 107], [107, 110, 106, 109],
      [109, 110, 107, 108], [108, 112, 107, 111], [111, 113, 109, 112],
    ),
    decisions: [
      {
        id: 'initial-spike',
        afterBar: 4,
        prompt: 'Ein bullischer Bar verlässt die enge Zone deutlich. Was ist die sorgfältigste Einordnung direkt nach diesem Bar?',
        options: [
          { decision: 'long', verdict: 'defensible', feedback: 'Der Ausbruch hat einen starken Schluss und kann gehandelt werden, wenn der Plan die weite Risikostrecke vorsieht. Die Qualität des Anschlusses ist noch unbekannt.' },
          { decision: 'short', verdict: 'mistake', feedback: 'Allein die Größe des Bars belegt noch keinen Kaufklimax. Eine Verkaufsentscheidung gegen den sichtbaren Ausbruch braucht weitere Hinweise.' },
          { decision: 'wait', verdict: 'best', feedback: 'Der einzelne Spike könnte Initiative oder eine kurze Bewegung in leeren Raum sein. Ein Folgebalken klärt, ob Käufer oberhalb der Zone bleiben.' },
        ],
        cues: [
          { id: 'range-break', label: 'Schluss klar über den überlappenden Bars', relevant: true, explanation: 'Der Preis verlässt die alte Zone mit gerichteter Schlusskontrolle; das ist mehr als ein kurzer Hochstich.', lessonId: 'brooks-trends.chapter-02.lesson-05' },
          { id: 'no-follow', label: 'Noch kein Folgebalken sichtbar', relevant: true, explanation: 'Ob Marktteilnehmer den höheren Bereich akzeptieren, kann der einzelne Bar noch nicht zeigen.', lessonId: 'brooks-trends.chapter-02.lesson-06' },
          { id: 'large-equals-climax', label: 'Ein großer Bar ist zwangsläufig ein Endklimax', relevant: false, explanation: 'Größe allein unterscheidet einen tragfähigen Spike nicht von einer Übertreibung.' },
        ],
        explanation: 'Der Ausbruch zeigt bullische Kontrolle, doch der Anschluss ist eine eigene Beobachtung. Abwarten ist hier die klarere Lernentscheidung; ein geplanter Long bleibt vertretbar.',
      },
      {
        id: 'shallow-test',
        afterBar: 6,
        prompt: 'Nach einem weiteren bullischen Schluss bleibt der Rücklauf oberhalb der alten Zone. Welche Seite hat jetzt den besseren Kontext?',
        options: [
          { decision: 'long', verdict: 'best', feedback: 'Der zweite starke Schluss und der flache Rücklauf stützen die bullische Fortsetzung. Ein Long ist hier besser begründet als beim ersten Spike allein.' },
          { decision: 'short', verdict: 'mistake', feedback: 'Der Rücklauf bricht die alte Zone nicht wieder auf und die beiden starken Schlüsse bleiben sichtbar. Die reine Größe des ersten Bars trägt keinen Short.' },
          { decision: 'wait', verdict: 'defensible', feedback: 'Wer keinen passenden Einstieg oder Schutzabstand findet, darf aussetzen. Inhaltlich hat der Anschluss die Long-These gestärkt.' },
        ],
        cues: [
          { id: 'second-close', label: 'Zweiter Schluss oberhalb der alten Zone', relevant: true, explanation: 'Der Anschluss bestätigt, dass die neue Preiszone zunächst angenommen wurde.', lessonId: 'brooks-trends.chapter-02.lesson-06' },
          { id: 'shallow', label: 'Rücklauf bleibt flach', relevant: true, explanation: 'Die Verkäufer schaffen bislang keine Rückkehr in die vorherige Balancezone.' },
          { id: 'one-red', label: 'Ein kleiner roter Bar beendet jeden Breakout', relevant: false, explanation: 'Ein kleiner Rücklauf nach Anschluss kann eine Pause sein; seine Lage ist entscheidend.' },
        ],
        explanation: 'Die Folge aus Spike, bullischem Anschluss und flachem Test liefert nun einen anderen Informationsstand als beim ersten Entscheid.',
      },
    ],
    sourceAnchors: ['Kapitel 2 · Trend-Bar als Breakout und Spike', 'Kapitel 2 · Follow-through nach einem Ausbruch'],
  },
  {
    id: 'bar-case.chapter-03.failed-low-test',
    schemaVersion: 1,
    status: 'approved',
    title: 'Fallende Bars beobachten',
    unitId: 'brooks-trends.chapter-03',
    lessonIds: ['brooks-trends.chapter-03.lesson-05', 'brooks-trends.chapter-03.lesson-06'],
    setup: 'Vor dem Ausschnitt überwog die Abwärtsrichtung. Prüfe mit jedem neuen Bar, ob die bisherige Seite weiter durchkommt oder ihr Verhalten sich ändert.',
    timeframe: 'Schematische Bars auf einer Zeitebene',
    bars: bars(
      [111, 112, 107, 108], [108, 110, 104, 105], [105, 108, 102, 103],
      [103, 107, 101, 106], [106, 108, 103, 104], [104, 105, 100, 101],
      [101, 104, 99, 103], [103, 107, 102, 106], [106, 108, 104, 107],
      [107, 110, 106, 109],
    ),
    decisions: [
      {
        id: 'lower-low',
        afterBar: 5,
        prompt: 'Nach einem Rücklauf erscheint ein neues Tief mit schwachem Schluss. Was lässt sich an diesem Punkt fachlich am besten entscheiden?',
        options: [
          { decision: 'long', verdict: 'mistake', feedback: 'Ein neues Tief allein ist noch kein Umkehrsignal. Der letzte Bar schließt schwach und zeigt noch keine Rückeroberung.' },
          { decision: 'short', verdict: 'defensible', feedback: 'Der fallende Hintergrund stützt einen Short. Nach der größeren Gegenbewegung und nahe einem Testbereich bleibt ein vorsichtiger Plan wichtig.' },
          { decision: 'wait', verdict: 'best', feedback: 'Ob der neue Tiefbereich angenommen oder zurückgewiesen wird, ist noch offen. Die nächste Reaktion liefert mehr Information.' },
        ],
        cues: [
          { id: 'new-low', label: 'Neues Tief mit Schluss nahe unten', relevant: true, explanation: 'Der letzte Bar zeigt zunächst Verkäuferkontrolle, noch keine bestätigte Wende.' },
          { id: 'larger-bounce', label: 'Vorheriger Rücklauf ist größer geworden', relevant: true, explanation: 'Die Gegenseite hat zuvor mehr erreicht; deshalb ist die Qualität des neuen Tiefbruchs besonders zu prüfen.', lessonId: 'brooks-trends.chapter-03.lesson-06' },
          { id: 'cheap-long', label: 'Tieferer Preis macht den Long automatisch günstig', relevant: false, explanation: 'Ein tieferer Preis sagt nichts darüber, ob Verkäufer schon die Kontrolle verloren haben.' },
        ],
        explanation: 'Trend und Gegenbewegung liefern konkurrierende Hinweise. Erst ein sichtbarer Fehlschlag am neuen Tief würde die Umkehrthese stärken.',
      },
      {
        id: 'reclaimed-zone',
        afterBar: 7,
        prompt: 'Ein weiterer Tiefstich wurde zurückgekauft, danach schließt ein kräftiger Bar höher. Welche Arbeitshypothese ist jetzt am besten gestützt?',
        options: [
          { decision: 'long', verdict: 'best', feedback: 'Der Bruch unter die Tiefzone wurde zurückgenommen und der nächste Bar bestätigt den höheren Bereich. Das stützt eine Long-These als mögliche Umkehrbewegung.' },
          { decision: 'short', verdict: 'mistake', feedback: 'Zwei neue Bars zeigen nun Kaufreaktion statt bärischem Anschluss. Den früheren Abwärtstrend unverändert fortzuschreiben blendet diese Änderung aus.' },
          { decision: 'wait', verdict: 'defensible', feedback: 'Eine größere Umkehr ist nicht garantiert; ohne passenden Schutzpunkt ist Warten vertretbar. Die sichtbare Verhaltensänderung spricht jedoch eher für Long.' },
        ],
        cues: [
          { id: 'reclaim', label: 'Preis kehrt über die getestete Tiefzone zurück', relevant: true, explanation: 'Der tiefere Preis findet keine anhaltende Akzeptanz und wird im selben Test zurückerobert.', lessonId: 'brooks-trends.chapter-03.lesson-05' },
          { id: 'higher-close', label: 'Der Folgebalken schließt deutlich höher', relevant: true, explanation: 'Die Gegenbewegung erhält einen zweiten Beleg und ist nicht mehr nur ein einzelner Schatten.', lessonId: 'brooks-trends.chapter-03.lesson-06' },
          { id: 'sure-reversal', label: 'Ein Rücklauf garantiert einen neuen Bullenmarkt', relevant: false, explanation: 'Ein stärkerer Gegenimpuls kann auch zunächst nur eine Trading Range erzeugen.' },
        ],
        explanation: 'Die Entscheidung beruht auf dem geänderten Verhalten am Testbereich und dem Folgeschluss, nicht auf dem Wunsch, das exakte Tief zu treffen.',
      },
    ],
    sourceAnchors: ['Kapitel 3 · Tests betreffen Preisbereiche', 'Kapitel 3 · Umkehr als Verhaltenswechsel'],
  },
  {
    id: 'bar-case.chapter-04.signal-and-entry',
    schemaVersion: 1,
    status: 'approved',
    title: 'Aufwärtsfolge im Blick',
    unitId: 'brooks-trends.chapter-04',
    lessonIds: ['brooks-trends.chapter-04.lesson-01', 'brooks-trends.chapter-04.lesson-02', 'brooks-trends.chapter-04.lesson-21'],
    setup: 'Vor dem Ausschnitt lag ein Aufwärtstrend vor. Beurteile die neuen Bars und trenne ein mögliches Signal von seiner tatsächlichen Auslösung.',
    timeframe: 'Schematische Bars auf einer Zeitebene',
    bars: bars(
      [98, 101, 97, 100], [100, 104, 99, 103], [103, 107, 102, 106],
      [106, 108, 103, 104], [104, 105, 100, 101], [101, 104, 99, 103],
      [103, 106, 102, 105], [105, 108, 104, 107], [107, 109, 105, 108],
    ),
    decisions: [
      {
        id: 'untriggered',
        afterBar: 5,
        prompt: 'Der letzte Bar schließt bullisch nach dem Pullback. Welcher Schritt passt zu einer geplanten Stop-Auslösung über seinem Hoch?',
        options: [
          { decision: 'long', verdict: 'defensible', feedback: 'Ein sofortiger Kauf kann eine eigene Strategie sein, ist aber noch nicht die hier geplante Auslösung über dem Signalhoch.' },
          { decision: 'short', verdict: 'mistake', feedback: 'Der bisherige Aufwärtstrend und die Käuferreaktion am höheren Tief geben keinen guten Grund für einen neuen Gegentrend-Short.' },
          { decision: 'wait', verdict: 'best', feedback: 'Der mögliche Signal-Bar ist geschlossen, sein Hoch aber noch nicht überschritten. Für den beschriebenen Plan fehlt die Auslösung.' },
        ],
        cues: [
          { id: 'higher-low', label: 'Pullback hält über dem früheren Ausgangstief', relevant: true, explanation: 'Die Aufwärtsstruktur ist im gezeigten Ausschnitt noch nicht durch ein neues tieferes Tief widerlegt.', lessonId: 'brooks-trends.chapter-04.lesson-01' },
          { id: 'signal-high', label: 'Hoch des bullischen Signal-Bars ist bekannt', relevant: true, explanation: 'Die Grenze für den geplanten Stop-Einstieg ist jetzt definiert, wurde aber noch nicht ausgelöst.', lessonId: 'brooks-trends.chapter-04.lesson-02' },
          { id: 'green-means-entry', label: 'Bullischer Schluss bedeutet bereits erfolgten Fill', relevant: false, explanation: 'Ein gutes Signal und die Ausführung der darauf geplanten Order sind verschiedene Ereignisse.' },
        ],
        explanation: 'Ein Signal ist eine vorbereitete Möglichkeit. Im gewählten Stop-Plan entscheidet erst der nächste Hochbruch, ob daraus ein Entry wird.',
      },
      {
        id: 'triggered',
        afterBar: 6,
        prompt: 'Der neue Bar überschreitet das Signalhoch und schließt darüber. Welche Richtung trägt nun die sichtbare Auslösung?',
        options: [
          { decision: 'long', verdict: 'best', feedback: 'Der geplante Hochbruch ist erfolgt und hat einen bullischen Schluss. Damit ist die Mit-Trend-Long-Idee tatsächlich ausgelöst.' },
          { decision: 'short', verdict: 'mistake', feedback: 'Der letzte Bar bestätigt gerade den Hochbruch des Signals. Ein Short würde die vorhandene Käuferreaktion ignorieren.' },
          { decision: 'wait', verdict: 'defensible', feedback: 'Bei ungünstiger Ausführung darf man aussetzen. Fachlich ist die geplante Long-Auslösung jetzt aber sichtbar.' },
        ],
        cues: [
          { id: 'entry-high', label: 'Vorheriges Signalhoch wurde überschritten', relevant: true, explanation: 'Der neue Bar erfüllt die zuvor festgelegte Trigger-Bedingung.', lessonId: 'brooks-trends.chapter-04.lesson-02' },
          { id: 'close-above', label: 'Schluss liegt über dem Signalhoch', relevant: true, explanation: 'Der Bar kehrt nicht sofort unter die Auslösungsgrenze zurück.' },
          { id: 'one-short-bar', label: 'Zwei rote Pullback-Bars haben den Trend sicher gedreht', relevant: false, explanation: 'Ein Pullback im Aufwärtstrend ist nicht automatisch eine bestätigte Bärenwende.' },
        ],
        explanation: 'Jetzt ist das Setup zum Entry geworden. Die nachfolgenden Bars bleiben unbekannt und müssen später erneut bewertet werden.',
      },
    ],
    sourceAnchors: ['Kapitel 4 · vom Setup zum Signal', 'Kapitel 4 · Signal-Bar, Entry-Bar und Stop-Auslösung'],
  },
  {
    id: 'bar-case.chapter-05.range-top-reversal',
    schemaVersion: 1,
    status: 'approved',
    title: 'Obergrenze einer Seitwärtszone',
    unitId: 'brooks-trends.chapter-05',
    lessonIds: ['brooks-trends.chapter-05.lesson-01', 'brooks-trends.chapter-05.lesson-03', 'brooks-trends.chapter-05.lesson-19'],
    setup: 'Vor dem Ausschnitt wurde der Markt überwiegend seitwärts gehandelt. Beobachte, was neue Bars an den Grenzen dieses Bereichs zeigen.',
    timeframe: 'Schematische Bars auf einer Zeitebene',
    bars: bars(
      [101, 104, 99, 103], [103, 105, 100, 101], [101, 104, 98, 102],
      [102, 106, 100, 105], [105, 107, 103, 106], [106, 107, 103, 103.2],
      [103.2, 104, 100, 101], [101, 102, 98, 99],
    ),
    decisions: [
      {
        id: 'bear-reaction',
        afterBar: 5,
        prompt: 'Nach einem kurzen Hochbruch schließt ein bärischer Bar wieder innerhalb der vorherigen Zone. Welche Seite ist im gezeigten Kontext am besten gestützt?',
        options: [
          { decision: 'long', verdict: 'mistake', feedback: 'Der höhere Bereich wurde gerade zurückgewiesen. Ein Kauf nur wegen des vorigen neuen Hochs ignoriert den aktuelleren bärischen Schluss.' },
          { decision: 'short', verdict: 'best', feedback: 'Die Reversal-Form steht am oberen Rand nach einem misslungenen Hochbruch. Die Kombination gibt dem Short eine konkrete Begründung.' },
          { decision: 'wait', verdict: 'defensible', feedback: 'Bei ungünstigem Schutzabstand darf man warten. Die beobachtete Zurückweisung liefert aber bereits eine fachlich klare Short-These.' },
        ],
        cues: [
          { id: 'upper-edge', label: 'Hochtest oberhalb früherer Bars', relevant: true, explanation: 'Die Reversal-Bar liegt an einer bedeutenden Bereichsgrenze statt zufällig in der Mitte.', lessonId: 'brooks-trends.chapter-05.lesson-19' },
          { id: 'bear-close', label: 'Bärischer Schluss zurück in der Zone', relevant: true, explanation: 'Der Schluss zeigt, dass der Ausbruch zum Ende des Bars keinen höheren Preisbereich halten konnte.', lessonId: 'brooks-trends.chapter-05.lesson-03' },
          { id: 'red-anywhere', label: 'Jeder rote Bar ist automatisch ein Short', relevant: false, explanation: 'Dieselbe Kerzenfarbe wäre ohne Hochtest und Rückkehr in die Range kein gleichwertiges Signal.' },
        ],
        explanation: 'Der relevante Wechsel ist der gescheiterte Hochbruch mit bärischer Rückkehr. Die Kerzenform allein hätte nicht dieselbe Aussage.',
      },
    ],
    sourceAnchors: ['Kapitel 5 · bärische Reversal-Bar im Kontext', 'Kapitel 5 · Käuferbruch am oberen Bereichsrand scheitert'],
  },
  {
    id: 'bar-case.chapter-06.inside-pause',
    schemaVersion: 1,
    status: 'approved',
    title: 'Fallender Markt im Blick',
    unitId: 'brooks-trends.chapter-06',
    lessonIds: ['brooks-trends.chapter-06.lesson-01', 'brooks-trends.chapter-06.lesson-08', 'brooks-trends.chapter-06.lesson-17'],
    setup: 'Vor dem Ausschnitt überwog Verkaufsdruck. Entscheide erst anhand der sichtbaren Bars, ob eine Pause, Fortsetzung oder Umkehr vorliegt.',
    timeframe: 'Schematische Bars auf einer Zeitebene',
    bars: bars(
      [111, 112, 108, 109], [109, 110, 105, 106], [106, 107, 101, 102],
      [102, 104, 100, 101], [101, 103, 100.5, 102], [102, 102.5, 98, 99],
      [99, 100, 96, 97], [97, 99, 95, 96],
    ),
    decisions: [
      {
        id: 'lower-trigger',
        afterBar: 5,
        prompt: 'Der kleine Innenbar wurde nach unten verlassen; der neue Bar schließt tief. Welche Richtung folgt aus dem sichtbaren Kontext am ehesten?',
        options: [
          { decision: 'long', verdict: 'mistake', feedback: 'Der kleine bullische Innenbar hat keine Umkehr ausgelöst. Die anschließende Abwärtsauslösung widerspricht einer Long-Begründung.' },
          { decision: 'short', verdict: 'best', feedback: 'Fallende Vorgeschichte, kurze Pause und ein tiefer Schluss unter der Pausengrenze stützen eine Mit-Trend-Fortsetzung.' },
          { decision: 'wait', verdict: 'defensible', feedback: 'Eine ungünstige Distanz zum sinnvollen Schutzpunkt kann zum Aussetzen führen. Inhaltlich ist die Fortsetzungsseite hier deutlicher.' },
        ],
        cues: [
          { id: 'bear-context', label: 'Vor der Pause fallen Hochs und Tiefs', relevant: true, explanation: 'Die Trendrichtung liefert den Kontext; ein kleiner Gegenbar hebt ihn nicht automatisch auf.', lessonId: 'brooks-trends.chapter-06.lesson-08' },
          { id: 'break-low', label: 'Unterkante der Pause wird unterschritten', relevant: true, explanation: 'Die bärische Seite wird tatsächlich ausgelöst und der neue Bar schließt unter der alten Grenze.', lessonId: 'brooks-trends.chapter-06.lesson-17' },
          { id: 'small-bull-reversal', label: 'Kleiner bullischer Innenbar ist schon eine bestätigte Umkehr', relevant: false, explanation: 'Ohne Auslösung über seinem Hoch und ohne stärkere Struktur bleibt der kleine Gegenbar eine Pause.' },
        ],
        explanation: 'Die Aufgabe des Innenbars ergibt sich aus seinem Ort und aus der Richtung des nachfolgenden Bruchs. Ein kleines bullisches Gehäuse allein ändert den Bärentrend nicht.',
      },
    ],
    sourceAnchors: ['Kapitel 6 · kleine Inside-Bars im Trend', 'Kapitel 6 · Pause oder Fehlschlag nach einem Ausbruch'],
  },
  {
    id: 'bar-case.chapter-07.outside-in-range',
    schemaVersion: 1,
    status: 'approved',
    title: 'Zweiseitiger Markt',
    unitId: 'brooks-trends.chapter-07',
    lessonIds: ['brooks-trends.chapter-07.lesson-01', 'brooks-trends.chapter-07.lesson-06', 'brooks-trends.chapter-07.lesson-11'],
    setup: 'Der Ausgangsmarkt schwankt ohne feste Richtung. Lies die kommenden Bars im Verhältnis zu ihren Vorgängern und zum bisherigen Bereich.',
    timeframe: 'Schematische Bars auf einer Zeitebene',
    bars: bars(
      [100, 104, 98, 103], [103, 105, 99, 100], [100, 103, 97, 99],
      [99, 104, 98, 102], [102, 106, 96, 101], [101, 105, 100, 104],
      [104, 107, 103, 106], [106, 107.5, 102, 102.5], [102.5, 104, 100, 101],
    ),
    decisions: [
      {
        id: 'wide-middle',
        afterBar: 4,
        prompt: 'Der letzte Bar überschreitet beide Grenzen seines Vorbars, schließt aber nahe der eigenen Mitte. Welche Wahl passt am besten zur gezeigten Range?',
        options: [
          { decision: 'long', verdict: 'mistake', feedback: 'Ein Kauf in der Mitte der breiten Outside-Spanne liegt weit von einem klaren Schutzpunkt entfernt und hat noch keinen bullischen Anschluss.' },
          { decision: 'short', verdict: 'mistake', feedback: 'Auch der Short in der Mitte der erweiterten Spanne folgt keiner bestätigten Zurückweisung am Rand.' },
          { decision: 'wait', verdict: 'best', feedback: 'Der Outside-Bar bestätigt zunächst, dass beide Seiten aktiv sind. Ein Randtest oder klarer Anschluss wäre zusätzliche Information.' },
        ],
        cues: [
          { id: 'both-bounds', label: 'Hoch höher und Tief tiefer als beim Vorbar', relevant: true, explanation: 'Erst beide überschrittenen Grenzen machen diesen Bar zu einem Outside-Bar.', lessonId: 'brooks-trends.chapter-07.lesson-01' },
          { id: 'middle-close', label: 'Schluss liegt ungefähr in der neuen Spannenmitte', relevant: true, explanation: 'Der große Ausschlag endet ohne eindeutige Schlusskontrolle und steht innerhalb einer überlappenden Zone.', lessonId: 'brooks-trends.chapter-07.lesson-06' },
          { id: 'guaranteed-break', label: 'Größere Spanne garantiert den nächsten Ausbruch', relevant: false, explanation: 'Die Größe zeigt Aktivität beider Seiten, sagt aber allein nichts über einen gehaltenen Folgebruch.' },
        ],
        explanation: 'Mitten in der Range ist der breite Bar kein kostenloser Richtungsfilter. Der sinnvolle nächste Schritt ist das Beobachten der Folge.',
      },
    ],
    sourceAnchors: ['Kapitel 7 · Outside-Bar und Überlappung', 'Kapitel 7 · Outside-Bar in der Mitte einer Trading Range'],
  },
];

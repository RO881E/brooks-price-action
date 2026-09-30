import type { BarCase, CaseBar } from '../barCaseTypes';

// C-02: ungesehene Transferfälle für die spätere Transferprüfung (F-17).
// Eigenständig konstruierte relative Preisfolgen – weder Buchabbildungen noch
// echte Kursdaten oder nachgezeichnete Chartfälle. Jeder Fall übt ein bereits
// vermitteltes Thema in einer anderen Preisfolge als C-01.
// Status `draft`, bis Robert die fachliche Freigabe erteilt; Fall-IDs tragen
// `c02`, damit sie nie mit dem gewöhnlichen Trainer (C-01) verwechselt werden.
const bars = (...rows: [open: number, high: number, low: number, close: number][]): CaseBar[] =>
  rows.map(([open, high, low, close]) => ({ open, high, low, close }));

export const c02BarCases: BarCase[] = [
  {
    id: 'bar-case.c02.chapter-01.tight-pause-in-trend',
    schemaVersion: 1,
    status: 'draft',
    title: 'Enge Pause nach starkem Anstieg',
    unitId: 'brooks-trends.chapter-01',
    lessonIds: ['brooks-trends.chapter-01.lesson-04', 'brooks-trends.chapter-01.lesson-03'],
    setup: 'Nach mehreren kräftigen Aufwärtsbars wird das Kursbild plötzlich ruhig. Die Zahlen sind eine frei gewählte Skala; achte darauf, was die Ruhe über die nächste Bewegung sagt – und was nicht.',
    timeframe: 'Schematische Bars auf einer Zeitebene',
    bars: bars(
      [100, 103, 99.5, 102.5], [102.5, 106, 102, 105.5], [105.5, 109, 105, 108.5], [108.5, 112, 108, 111.5],
      [111.5, 113, 110.5, 112], [112, 113.5, 111, 112.5], [112.5, 113, 111.5, 112], [112.2, 116.5, 112, 116],
      [116, 118.5, 115.5, 118], [118, 120, 117, 119.5],
    ),
    decisions: [
      {
        id: 'tight-pause',
        afterBar: 5,
        prompt: 'Nach vier starken Aufwärtsbars folgen zwei kleine, stark überlappende Bars nahe dem Hoch. Welche Entscheidung passt zu diesem Zeitpunkt am besten?',
        options: [
          { decision: 'long', verdict: 'defensible', feedback: 'Mit der starken Vorbewegung im Rücken ist ein Kauf denkbar. Solange die enge Zone nicht verlassen ist, steht aber nur eine Pause fest, kein Ausbruch nach oben.' },
          { decision: 'short', verdict: 'mistake', feedback: 'Zwei kleine Bars sind noch keine Umkehr. Ein Short bräuchte einen Bruch nach unten und Kontrolle der Verkäufer – beides fehlt.' },
          { decision: 'wait', verdict: 'best', feedback: 'Die enge Zone ist eine kleine Trading Range: Ihr Ausgang ist offen, auch wenn die Vorbewegung eher für Fortsetzung spricht. Der Ausbruch zeigt, welche Seite Kontrolle übernimmt.' },
        ],
        cues: [
          { id: 'strong-leg', label: 'Vier kräftige Aufwärtsbars davor', relevant: true, explanation: 'Die starke Vorbewegung macht eine Fortsetzung nach der Pause wahrscheinlicher als eine sofortige Umkehr.', lessonId: 'brooks-trends.chapter-01.lesson-04' },
          { id: 'tight-overlap', label: 'Zwei kleine, überlappende Bars', relevant: true, explanation: 'Enge Überlappung bedeutet: Beide Seiten warten. Die Zone ist eine Range im Kleinen, ihr Ausbruch ist die eigentliche Information.', lessonId: 'brooks-trends.chapter-01.lesson-03' },
          { id: 'quiet-means-top', label: 'Ruhe nach einem Anstieg markiert immer das Hoch', relevant: false, explanation: 'Eine Pause ist zunächst nur eine Pause. Sie wird erst durch das Verhalten danach zur Umkehr oder zur Fortsetzung.' },
        ],
        explanation: 'Eine enge Pause im starken Trend spricht eher für Fortsetzung, ist aber selbst noch kein Signal. Die klarere Entscheidung ist, den Ausbruch aus der engen Zone abzuwarten.',
      },
      {
        id: 'breakout-out-of-pause',
        afterBar: 7,
        prompt: 'Ein kräftiger Aufwärtsbar verlässt die enge Zone und schließt nahe seinem Hoch. Welche Seite hat jetzt den besseren Kontext?',
        options: [
          { decision: 'long', verdict: 'best', feedback: 'Der Ausbruch geht in Richtung der Vorbewegung und schließt stark. Damit passen Kontext und Bar zusammen; der Mit-Trend-Kauf ist hier am besten begründet.' },
          { decision: 'short', verdict: 'mistake', feedback: 'Ein Short gegen einen starken Ausbruch aus einer Pause ohne jede bärische Reaktion hat keine Grundlage im sichtbaren Kursbild.' },
          { decision: 'wait', verdict: 'defensible', feedback: 'Wer das Risiko nach dem großen Bar nicht tragen will, darf aussetzen. Die Information hat sich aber klar zugunsten der Käufer verändert.' },
        ],
        cues: [
          { id: 'exit-zone', label: 'Schluss deutlich über der engen Zone', relevant: true, explanation: 'Der Preis akzeptiert die Ausbruchsrichtung mit Schlusskontrolle – das war der Punkt, auf den zuvor gewartet wurde.', lessonId: 'brooks-trends.chapter-01.lesson-04' },
          { id: 'with-trend', label: 'Ausbruch in Richtung der Vorbewegung', relevant: true, explanation: 'Ein Ausbruch mit dem bisherigen Trend braucht weniger Beweise als einer dagegen.' },
          { id: 'too-big', label: 'Ein großer Bar ist automatisch ein Fehlausbruch', relevant: false, explanation: 'Größe allein macht einen Ausbruch nicht falsch. Entscheidend ist, ob danach Anschluss folgt.' },
        ],
        explanation: 'Nach dem Warten liegt jetzt die Auflösung der Pause vor: Ausbruch mit Trend und starkem Schluss. Der Anschluss bleibt eine eigene Beobachtung.',
      },
    ],
    sourceAnchors: ['Kapitel 1 · Ungewöhnlich enge Trading Range', 'Kapitel 1 · Marktverhalten besitzt Trägheit'],
  },
  {
    id: 'bar-case.c02.chapter-02.climax-is-not-reversal',
    schemaVersion: 1,
    status: 'draft',
    title: 'Ein ungewöhnlich großer Bar',
    unitId: 'brooks-trends.chapter-02',
    lessonIds: ['brooks-trends.chapter-02.lesson-08', 'brooks-trends.chapter-02.lesson-09'],
    setup: 'Ein Markt steigt gleichmäßig in kleinen Schritten. Dann erscheint ein ungewöhnlich großer Bar. Beurteile, was dieser eine Bar belegt – und was noch offen ist.',
    timeframe: 'Schematische Bars auf einer Zeitebene',
    bars: bars(
      [100, 101.5, 99.5, 101], [101, 103, 100.5, 102.5], [102.5, 104, 102, 103.5], [103.5, 105, 103, 104.5],
      [104.5, 106, 104, 105.5], [105.5, 113, 105, 112.5],
      [112.5, 113.5, 109.5, 110], [110, 111, 108.5, 109], [109, 113, 108.8, 112.5], [112.5, 115, 112, 114.5],
    ),
    decisions: [
      {
        id: 'oversized-bar',
        afterBar: 5,
        prompt: 'Nach fünf gleichmäßigen Aufwärtsbars folgt ein Bar, der mehrfach größer ist als seine Vorgänger und nahe seinem Hoch schließt. Was ist die sorgfältigste Entscheidung direkt danach?',
        options: [
          { decision: 'long', verdict: 'defensible', feedback: 'Die Richtung bleibt bullisch, ein Kauf ist nicht abwegig. Der Einstieg nach dem größten Bar der Folge trägt aber das weiteste Risiko und liegt weit vom letzten Stützpunkt.' },
          { decision: 'short', verdict: 'mistake', feedback: 'Ein Klimax ist noch keine Umkehr. Ohne Gegenbewegung und ohne bärischen Anschluss fehlt jede sichtbare Grundlage für einen Verkauf.' },
          { decision: 'wait', verdict: 'best', feedback: 'Ein ungewöhnlich großer Bar kann Erschöpfung oder Übertreibung anzeigen. Erst die nächsten Bars zeigen, ob eine Pause, ein Rücklauf oder eine Fortsetzung folgt.' },
        ],
        cues: [
          { id: 'size', label: 'Der Bar ist ungewöhnlich groß im Vergleich zu den fünf davor', relevant: true, explanation: 'Extreme Größe verändert das Risiko-Bild: Der Schutzabstand wird groß und die Bewegung möglicherweise überdehnt.', lessonId: 'brooks-trends.chapter-02.lesson-09' },
          { id: 'no-follow', label: 'Es gibt noch keinen Folgebar', relevant: true, explanation: 'Ob Marktteilnehmer den höheren Bereich annehmen oder zurückgeben, zeigt erst der nächste Bar.', lessonId: 'brooks-trends.chapter-02.lesson-08' },
          { id: 'climax-ends-trend', label: 'Ein Klimax beendet den Trend immer sofort', relevant: false, explanation: 'Nach einem Klimax folgt oft zunächst zweiseitiger Handel, nicht zwingend eine Umkehr.' },
        ],
        explanation: 'Der große Bar liefert Information über Kontrolle und zugleich über Risiko. Die klarere Entscheidung ist, den Anschluss abzuwarten, statt den Klimax für eine Umkehr zu halten.',
      },
    ],
    sourceAnchors: ['Kapitel 2 · Extrem große Bars als mögliche Erschöpfung oder Falle', 'Kapitel 2 · Klimax als Übergang zu zweiseitigem Handel'],
  },
  {
    id: 'bar-case.c02.chapter-03.breakout-test-holds',
    schemaVersion: 1,
    status: 'draft',
    title: 'Rücklauf an den alten Rand',
    unitId: 'brooks-trends.chapter-03',
    lessonIds: ['brooks-trends.chapter-03.lesson-05', 'brooks-trends.chapter-03.lesson-01'],
    setup: 'Ein Markt bewegte sich mehrere Bars seitwärts und hat die Zone dann deutlich nach oben verlassen. Beurteile, was die Bars am Ende des sichtbaren Ausschnitts über diesen Ausbruch aussagen.',
    timeframe: 'Schematische Bars auf einer Zeitebene',
    bars: bars(
      [100, 102, 98.5, 101], [101, 102.5, 99, 99.5], [99.5, 102, 99, 101.5], [101.5, 102.3, 99.5, 100], [100, 102.2, 99.5, 101.8],
      [101.8, 107, 101.5, 106.5], [106.5, 108, 105.5, 107.5], [107.5, 107.8, 103.2, 103.8], [103.8, 106.5, 103, 106.2],
      [106.2, 108, 105.8, 107.6], [107.6, 110, 107, 109.5],
    ),
    decisions: [
      {
        id: 'retest-reaction',
        afterBar: 8,
        prompt: 'Nach dem Ausbruch fällt ein Bär-Bar bis nahe an den alten oberen Rand der Zone zurück, ohne ihn zu durchstoßen. Der nächste Bar schließt kräftig bullisch. Welche Entscheidung passt jetzt am besten?',
        options: [
          { decision: 'long', verdict: 'best', feedback: 'Der Preis ist an die alte Kante zurückgekehrt und wurde dort abgelehnt. Der bullische Schluss liefert die sichtbare Reaktion, die für einen Mit-Trend-Kauf am Test nötig ist.' },
          { decision: 'short', verdict: 'mistake', feedback: 'Der Rücklauf hat den Ausbruch nicht zurückgenommen, und der Folgebar kehrt sofort um. Ein Short würde gegen die bestätigte Reaktion handeln.' },
          { decision: 'wait', verdict: 'defensible', feedback: 'Wer keinen passenden Schutzort findet, darf aussetzen. Inhaltlich hat der Test aber gerade eine erkennbare Zustimmung der Käufer gezeigt.' },
        ],
        cues: [
          { id: 'zone-return', label: 'Rücklauf bis nahe an den alten Rand, nicht durch ihn hindurch', relevant: true, explanation: 'Ein Test prüft einen Bereich, keinen exakten Tick. Der Rand hat gehalten, obwohl er nicht auf den Punkt getroffen wurde.', lessonId: 'brooks-trends.chapter-03.lesson-05' },
          { id: 'rejection', label: 'Kräftiger bullischer Schluss nach dem Rücklauf', relevant: true, explanation: 'Erst die Zurückweisung am Rand macht aus dem Rücklauf eine Bestätigung des Kontrollwechsels.', lessonId: 'brooks-trends.chapter-03.lesson-01' },
          { id: 'exact-tick', label: 'Der Rücklauf muss den alten Rand exakt berühren', relevant: false, explanation: 'Eine Preiszone wird selten auf den Tick getroffen; wer das verlangt, verpasst gültige Tests.' },
          { id: 'bear-bar', label: 'Der Bär-Bar davor beweist eine Trendwende', relevant: false, explanation: 'Ein einzelner bärischer Bar im Rücklauf ist ein Pullback, solange die Zone darunter hält.' },
        ],
        explanation: 'Ein Ausbruch, ein Rücklauf an den alten Rand und eine bullische Reaktion bilden zusammen die Bestätigung. Der Test entscheidet, ob der Kontrollwechsel hält.',
      },
    ],
    sourceAnchors: ['Kapitel 3 · Test als Rückkehr zu einer relevanten Preiszone', 'Kapitel 3 · Zurückweisung wichtiger als exakte Hochform', 'Kapitel 3 · Erfolgreicher und gescheiterter Ausbruch als zentrale Entscheidung'],
  },
  {
    id: 'bar-case.c02.chapter-04.unfilled-order-cancelled',
    schemaVersion: 1,
    status: 'draft',
    title: 'Ein Signal und der nächste Bar',
    unitId: 'brooks-trends.chapter-04',
    lessonIds: ['brooks-trends.chapter-04.lesson-21', 'brooks-trends.chapter-04.lesson-03'],
    setup: 'In einer zweiseitigen Zone erscheint ein bullischer Bar nahe seinem Hoch. Für einen Kauf liegt eine Stop-Order einen Tick über diesem Hoch bereit. Beurteile, was der nächste Bar für diesen Plan bedeutet.',
    timeframe: 'Schematische Bars auf einer Zeitebene',
    bars: bars(
      [100, 102, 99, 101.5], [101.5, 102.5, 100, 100.8], [100.8, 101.8, 99.5, 101], [101, 102, 100, 101.7], [101.7, 103.5, 101.2, 103.2],
      [103.2, 103.4, 101.8, 102],
      [102, 102.6, 100.5, 100.8], [100.8, 101.9, 100.2, 101.5], [101.5, 103.8, 101.4, 103.5], [103.5, 105, 103, 104.6],
    ),
    decisions: [
      {
        id: 'order-not-triggered',
        afterBar: 5,
        prompt: 'Der Bar nach dem Signal bleibt unter dessen Hoch, verliert Höhe und schließt schwach nahe seinem Tief. Die Kauforder wurde nicht ausgelöst. Wie geht es weiter?',
        options: [
          { decision: 'long', verdict: 'defensible', feedback: 'Die Order stehen zu lassen ist möglich, wenn der Plan es so vorsieht. Das Signal hat aber schon nicht ausgelöst und der Folgebar wirkt schwächer als das ursprüngliche Setup.' },
          { decision: 'short', verdict: 'mistake', feedback: 'Mitten in der Zone unter einem kleinen Bar zu verkaufen hat keinen eigenen Signal-Bar und keinen Kontext. Ein nicht ausgelöstes Kaufsignal ist kein Verkaufssignal.' },
          { decision: 'wait', verdict: 'best', feedback: 'Die ursprüngliche Bedingung ist nicht eingetreten und der neue Bar verändert das Bild. Die Order zu streichen und neu zu bewerten ist die sauberste Entscheidung.' },
        ],
        cues: [
          { id: 'no-trigger', label: 'Der Bar hat das Signal-Hoch nicht überschritten', relevant: true, explanation: 'Ohne Auslösung ist der Kauf nie zustande gekommen; das Setup ist nur eine Möglichkeit geblieben.', lessonId: 'brooks-trends.chapter-04.lesson-21' },
          { id: 'weak-close', label: 'Schwacher Schluss nach dem Signal', relevant: true, explanation: 'Der schwache Bar verändert die Ausgangslage, auf die sich die Order stützte.', lessonId: 'brooks-trends.chapter-04.lesson-03' },
          { id: 'sell-now', label: 'Ein nicht ausgelöstes Kaufsignal ist automatisch ein Short-Signal', relevant: false, explanation: 'Beide Richtungen brauchen ihre eigene Auslösung. Der Wegfall eines Setups begründet keinen Gegentrade.' },
        ],
        explanation: 'Viele vorbereitete Orders werden nie ausgelöst. Das Streichen der Order ist Teil des Plans und keine Prognose über die nächste Bewegung.',
      },
    ],
    sourceAnchors: ['Kapitel 4 · Streichen der Order bei ausbleibender Auslösung', 'Kapitel 4 · Jeder Bar als Signalgrundlage für Long und Short'],
  },
  {
    id: 'bar-case.c02.chapter-05.counter-trend-needs-evidence',
    schemaVersion: 1,
    status: 'draft',
    title: 'Ein Bar mit langem Schatten im Abwärtstrend',
    unitId: 'brooks-trends.chapter-05',
    lessonIds: ['brooks-trends.chapter-05.lesson-07', 'brooks-trends.chapter-05.lesson-15'],
    setup: 'Ein Markt fällt mehrere Bars in Folge. Dann erscheint ein Bar mit langem unterem Schatten. Prüfe, welche Belege eine Gegenrichtung braucht und wann der Trend die bessere Seite bleibt.',
    timeframe: 'Schematische Bars auf einer Zeitebene',
    bars: bars(
      [110, 110.5, 107.5, 108], [108, 108.5, 105, 105.5], [105.5, 106, 102.5, 103], [103, 103.5, 99.5, 100], [100, 100.3, 96, 96.5],
      [96.5, 97, 92, 96.2],
      [96.2, 99, 95.8, 98.5], [98.5, 99.2, 96.5, 97], [97, 97.4, 93.5, 94],
      [94, 94.5, 91, 91.5], [91.5, 93, 90.5, 92.5],
    ),
    decisions: [
      {
        id: 'long-tail-bar',
        afterBar: 5,
        prompt: 'Nach mehreren starken Bärenbars stößt ein Bar tief nach unten und schließt weit über seinem Tief, mit sehr kleinem Körper. Welche Entscheidung ist nach diesem einen Bar am besten begründet?',
        options: [
          { decision: 'long', verdict: 'mistake', feedback: 'Ein langer Schatten allein hebt den Abwärtstrend nicht auf. Ein Kauf gegen einen starken Trend braucht mehr als eine einzelne Ablehnung.' },
          { decision: 'short', verdict: 'defensible', feedback: 'Mit dem Trend zu verkaufen ist grundsätzlich vertretbar. Nach dem großen Tiefabstand und der sichtbaren Ablehnung ist der Einstieg aber spät und risikoreich.' },
          { decision: 'wait', verdict: 'best', feedback: 'Der Bar zeigt Ablehnung, aber keinen Trendbruch. Weitere Bars zeigen, ob Käufer Kontrolle gewinnen oder der Trend wieder aufgenommen wird.' },
        ],
        cues: [
          { id: 'long-tail', label: 'Langer unterer Schatten, kleiner Körper', relevant: true, explanation: 'Der Schatten ist eine Ablehnung des Tiefs, aber nur ein einzelner Beleg – seine Wirkung hängt vom Kontext ab.', lessonId: 'brooks-trends.chapter-05.lesson-15' },
          { id: 'strong-trend', label: 'Mehrere starke Bärenbars davor', relevant: true, explanation: 'Gegen einen starken Trend gilt eine höhere Beweislast; die Struktur zählt vor der einzelnen Kerze.', lessonId: 'brooks-trends.chapter-05.lesson-07' },
          { id: 'hammer-name', label: 'Der Bar heißt „Hammer“ und ist deshalb ein Kaufsignal', relevant: false, explanation: 'Der Name einer Form ersetzt nicht die Prüfung von Kontext und Anschluss.' },
        ],
        explanation: 'Ein einzelner Rückweisungsbar gegen einen starken Trend ist ein Hinweis, kein Beleg. Abwarten bis zur nächsten Struktur ist die klarere Entscheidung.',
      },
      {
        id: 'failed-bounce',
        afterBar: 8,
        prompt: 'Nach dem Hammer folgt ein Rücklauf, dessen Hoch unter dem Hoch vor dem Hammer bleibt; der nächste Bar fällt kräftig zurück und schließt nahe seinem Tief. Welche Seite hat jetzt den besseren Kontext?',
        options: [
          { decision: 'long', verdict: 'mistake', feedback: 'Der Rücklauf ist gescheitert und der Verkauf hat sofort wieder Kontrolle. Ein Kauf hätte keinen neuen bullischen Beleg.' },
          { decision: 'short', verdict: 'best', feedback: 'Der Gegenversuch hat nicht getragen und der Trend wird mit starkem Schluss wieder aufgenommen. Ein Short mit dem Trend ist jetzt nachvollziehbar begründet.' },
          { decision: 'wait', verdict: 'defensible', feedback: 'Aussetzen ist vertretbar, wenn der Schutzabstand nicht passt. Fachlich ist der Trendfortsatz aber nun klarer als beim Hammer.' },
        ],
        cues: [
          { id: 'lower-high', label: 'Das Hoch des Rücklaufs bleibt unter dem Hoch vor dem Hammer', relevant: true, explanation: 'Das tiefere Hoch zeigt, dass die Käufer keine Kontrolle über den Bereich gewinnen konnten.', lessonId: 'brooks-trends.chapter-05.lesson-07' },
          { id: 'bear-close', label: 'Kräftiger bärischer Schluss nahe dem Tief', relevant: true, explanation: 'Der neue Bar liefert die Wiederaufnahme des Trends mit sichtbarer Verkäuferkontrolle.' },
          { id: 'hammer-holds', label: 'Der Hammer bleibt gültig, weil sein Tief noch nicht gebrochen ist', relevant: false, explanation: 'Ein nicht gebrochenes Tief macht einen gescheiterten Rücklauf nicht zum Kaufsignal.' },
        ],
        explanation: 'Erst nach dem gescheiterten Gegenversuch wechselt die Beweislage: Der Trend ist bestätigt, die Gegenrichtung hat nicht gehalten.',
      },
    ],
    sourceAnchors: ['Kapitel 5 · Langer unterer Schatten mit kleinem Körper', 'Kapitel 5 · Trendbruch vor größerer Gegen-Trend-These', 'Kapitel 5 · Gegen-Trend-Signal unter höherer Beweislast'],
  },
  {
    id: 'bar-case.c02.chapter-10.second-short-attempt',
    schemaVersion: 1,
    status: 'draft',
    title: 'Nach dem ersten bärischen Bar',
    unitId: 'brooks-trends.chapter-10',
    lessonIds: ['brooks-trends.chapter-10.lesson-05', 'brooks-trends.chapter-10.lesson-01'],
    setup: 'Ein Markt steigt in einem klaren Lauf. Nahe dem Hoch erscheinen die ersten Anzeichen von Verkaufsdruck. Prüfe, was ein erster und was ein zweiter Umkehrversuch belegt.',
    timeframe: 'Schematische Bars auf einer Zeitebene',
    bars: bars(
      [100, 102, 99.5, 101.8], [101.8, 104, 101.5, 103.6], [103.6, 106, 103.2, 105.7], [105.7, 108, 105.3, 107.8], [107.8, 110, 107.5, 109.6],
      [109.6, 110.2, 107, 107.4],
      [107.4, 110.6, 107, 110.2], [110.2, 110.8, 108.2, 108.6], [108.6, 109, 105.8, 106.2],
      [106.2, 107.5, 104.5, 105], [105, 106, 102.8, 103.2],
    ),
    decisions: [
      {
        id: 'first-attempt',
        afterBar: 5,
        prompt: 'Nach fünf kräftigen Aufwärtsbars erscheint der erste bärische Bar mit tiefem Schluss nahe dem Hoch der Bewegung. Was ist die sorgfältigste Entscheidung nach diesem Bar?',
        options: [
          { decision: 'long', verdict: 'defensible', feedback: 'Ein Kauf mit dem starken Lauf ist möglich, wenn der Plan den Rücksetzer vorsieht. Nach dem bärischen Bar ist der Einstieg aber noch ungeklärt.' },
          { decision: 'short', verdict: 'defensible', feedback: 'Ein erster Umkehrversuch ist sichtbar, aber gegen einen starken Trend scheitert der erste Versuch häufig. Ein früher Short trägt daher die höhere Beweislast.' },
          { decision: 'wait', verdict: 'best', feedback: 'Gegen einen starken Trend lohnt es, den ersten Versuch zu beobachten und einen zweiten abzuwarten. Ob Käufer den Bar zurücknehmen, zeigt der nächste Bar.' },
        ],
        cues: [
          { id: 'strong-run', label: 'Fünf kräftige Aufwärtsbars vor dem bärischen Bar', relevant: true, explanation: 'Ein starker Lauf erhöht die Beweislast einer Gegenposition; ein einzelner Bar reicht selten.', lessonId: 'brooks-trends.chapter-10.lesson-05' },
          { id: 'first-try', label: 'Es ist erst der erste Umkehrversuch', relevant: true, explanation: 'Ein zweiter Versuch am selben Bereich hat mehr Gewicht als der erste.', lessonId: 'brooks-trends.chapter-10.lesson-01' },
          { id: 'red-means-top', label: 'Ein roter Bar am Hoch markiert das Ende des Laufs', relevant: false, explanation: 'Ein einzelner bärischer Bar beweist keinen Kontrollwechsel; er kann sofort zurückgenommen werden.' },
        ],
        explanation: 'Der erste bärische Bar ist ein Versuch. Gegen einen starken Trend ist Abwarten die sorgfältigere Entscheidung, bis ein zweiter Versuch mehr Gewicht liefert.',
      },
      {
        id: 'second-attempt',
        afterBar: 8,
        prompt: 'Der erste Versuch wurde mit einem neuen Hoch zurückgenommen. Nun erscheint ein zweiter bärischer Bar nahe demselben Hoch, und der nächste Bar schließt unter dem Tief des ersten bärischen Bars. Welche Seite hat jetzt den besseren Kontext?',
        options: [
          { decision: 'long', verdict: 'mistake', feedback: 'Der Anstieg hat zweimal am Hoch nicht getragen und schließt nun unter dem früheren Tief. Für einen Kauf fehlt hier jeder neue bullische Beleg.' },
          { decision: 'short', verdict: 'best', feedback: 'Der zweite Versuch am selben Bereich, der Schluss unter dem Tief des ersten bärischen Bars und die Zurückweisung des Hochs liefern zusammen eine deutlich tragfähigere Grundlage als der erste Bar.' },
          { decision: 'wait', verdict: 'defensible', feedback: 'Aussetzen ist vertretbar, wenn der Schutzabstand zu groß ist. Der Beleg für einen Verkauf ist nun aber ungleich stärker als beim ersten Bar.' },
        ],
        cues: [
          { id: 'second-try', label: 'Zweiter bärischer Versuch am selben Hoch', relevant: true, explanation: 'Der zweite Versuch am selben Bereich zeigt, dass die Verkäufer zurückkehren und die Käufer das Hoch nicht halten.', lessonId: 'brooks-trends.chapter-10.lesson-01' },
          { id: 'break-first-low', label: 'Schluss unter dem Tief des ersten bärischen Bars', relevant: true, explanation: 'Der Bruch des früheren Tiefs macht aus dem Versuch eine sichtbare Verhaltensänderung.' },
          { id: 'new-high-bullish', label: 'Das neue Hoch dazwischen beweist bullische Stärke', relevant: false, explanation: 'Ein neues Hoch, das direkt wieder zurückgegeben wird, spricht eher für einen Fehlausbruch als für Stärke.' },
        ],
        explanation: 'Erst der zweite Versuch mit Bruch des früheren Tiefs verändert den Kontext. Der Gegenversuch hat mehr Gewicht als der erste, ist aber weiterhin keine Gewissheit.',
      },
    ],
    sourceAnchors: ['Kapitel 10 · Zweiter Umkehrversuch am Tief', 'Kapitel 10 · Gleiches Prinzip an einem Hoch', 'Kapitel 10 · Ersten Versuch auslassen und zweiten abwarten'],
  },
];

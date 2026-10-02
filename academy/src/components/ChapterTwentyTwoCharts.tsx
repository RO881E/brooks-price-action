import type { ChartScenarioId, ChapterTwentyTwoScenarioId } from '../content/types';

type Bar = readonly [open: number, high: number, low: number, close: number];
export interface TeachingLine {
  start: readonly [index: number, price: number]; end: readonly [index: number, price: number];
  kind: 'trend' | 'channel' | 'reference' | 'average'; label?: string;
}
interface Panel { title: string; note: string; bars: readonly Bar[]; lines: readonly TeachingLine[]; focus: readonly number[]; zones?: readonly (readonly [number,number])[]; }
interface Definition { heading: string; panels: readonly [Panel, Panel]; footer: string; description: string; }

const bars = (points: readonly number[]): Bar[] => points.slice(1).map((c,i)=>[points[i],Math.max(points[i],c)+1,Math.min(points[i],c)-1,c]);
const mirror = (values: readonly Bar[]): Bar[] => values.map(([o,h,l,c])=>[100-o,100-l,100-h,100-c]);
const panel = (title: string,note: string,values: readonly Bar[],refs: readonly (readonly [number,string])[] = [],focus: readonly number[] = [],zones: readonly (readonly [number,number])[] = []): Panel=>({title,note,bars:values,focus,zones,lines:refs.map(([price,label])=>({start:[0,price],end:[values.length-1,price],kind:'reference',label}))});
const rp = (title: string,note: string,values: readonly Bar[],low: number,high: number,focus: readonly number[] = []): Panel=>panel(title,note,values,[[low,`untere Grenze ${low}`],[high,`obere Grenze ${high}`]],focus,[[low,high]]);
const define = (heading: string,left: Panel,right: Panel,footer: string): Definition=>({heading,panels:[left,right],footer,description:`Eigenes schematisches Beispiel: links ${left.title} (${left.note}), rechts ${right.title} (${right.note}). Gepunktet: bekannte Preisreferenz; hinterlegte Bereiche: benannte Rangezonen. ${footer}`});
export function aggregateDay(values: readonly Bar[]): Bar {
 if(!values.length)throw new Error('Empty day');
 return [values[0][0],Math.max(...values.map(b=>b[1])),Math.min(...values.map(b=>b[2])),values.at(-1)![3]];
}
const first: Bar[] = [[36,42,32,40],[40,45,35,37],[37,41,30,34],[34,46,33,43],[43,44,36,38],[38,43,34,41]];
const upper: Bar[] = [[62,67,58,64],[64,69,60,62],[62,66,57,60],[60,68,56,65],[65,68,59,63],[63,67,57,61]];
const up: Bar[] = [...first,[41,59,40,57],[57,64,55,62],...upper];
const one: Bar[] = [...first,[41,65,40,62],...upper];
const direct: Bar[] = [...first,[41,59,40,57],[57,64,55,62],...bars([62,71,69,78,76,84])];
const shallow: Bar[] = [...up,[61,62,47,50],[50,58,49,56]];
const touching: Bar[] = [...up,[61,62,46,50],[50,58,49,56]];
const inside: Bar[] = [...up,[61,62,44,48],[48,56,47,54]];
const secondTest: Bar[] = [...inside,[54,64,53,62],[62,63,55,56],[56,57,46,46],[46,59,46,58]];
const reentry: Bar[] = [...up,[61,62,42,44],[44,49,38,41],[41,43,30,33],[33,42,32,40]];
const fade: Bar[] = [...up,[61,77,60,75],[75,77,59,60],[60,62,45,48],[48,57,47,54]];
const failBoth: Bar[] = [...first,[41,52,40,50],[50,51,37,39],[39,40,24,26],[26,40,25,38],[38,53,37,51],[51,52,32,35],[35,43,34,41]];
const drift = bars([31,42,35,45,38,48,41,51]);
const triple: Bar[] = [...up,[61,78,60,75],...bars([75,70,76,71,78])];
const tripleReturn: Bar[] = [...triple,...bars([78,64,56,44,39])];
const late: Bar[] = [...first,...bars([41,37,43,38,44,39,42,37,41,38,43,40,42]),[42,63,41,61],[61,68,59,65]];
const buyerAttempts: Bar[] = [[32,39,31,37],[37,38,28,30],[30,40,29,38],[38,50,37,48],[48,60,47,58],[58,68,57,66]];
const failedBuyers: Bar[] = [[38,47,37,45],[45,46,35,37],[37,46,36,44],[44,45,30,32],[32,35,24,26]];
const down = mirror(up);
const reverse = [...down,...bars([39,49,55,64,70])];
const oldClose = first.slice(0,4);
export const chapterTwentyTwoCharts: Record<ChapterTwentyTwoScenarioId,Definition> = {
 'c22-01': define("Ein Trend aus mehreren Handelsbereichen",rp('Erster Bereich','bekannte Balance zwischen 30 und 46',first,30,46),panel('Neuer höherer Bereich','schneller Übergang und Gegenhandel',up,[[46,'alter Rand 46'],[55,'neuer Boden 55']],[6,7],[[30,46],[55,69]]),"Tagesrichtung und innere Seitwärtsphasen getrennt lesen."),
 'c22-02': define("Die Eröffnungsrange relativ messen",rp('Breite 16','46 minus 30',first,30,46),panel('Historische Referenz 40','16 / 40 = 40 Prozent',first,[[30,'unten 30'],[46,'oben 46'],[70,'30 plus Referenz 40']]),"Breitenverhältnis ist keine Trefferquote."),
 'c22-03': define("Lange Anfangsbalance und spätere Verlagerung",rp('Längere Anfangsbalance','mehrere Swings im gleichen Bereich',late.slice(0,18),30,46),panel('Später Übergang','neue Richtung erst nach Ausbruch',late,[[46,'alter Rand 46']],[18,19]),"Uhrzeit und Preisfolge gemeinsam prüfen."),
 'c22-04': define("Gerichtete Swings innerhalb einer Range",panel('Innere Swings steigen','Hochs und Tiefs werden höher',drift),panel('Späterer Ausbruch','neuer Käuferanschluss',[...drift,...bars([51,61,65])],[ [52,'vorheriges Hoch 52']],[7,8]),"Innere Richtung ist eine Hypothese, kein fertiger Ausbruch."),
 'c22-05': define("Starker Spike oder Übergang in eine neue Range?",panel('Direktere Folge','kleine Rückgabe und neue Hochs',direct),rp('Neue obere Balance','mehr Gegenhandel nach dem Ausbruch',up,55,69),"Anschluss ist wichtiger als ein starrer Tagesname."),
 'c22-06': define("Ein Bar oder mehrere Bars als Brücke",panel('Ein-Bar-Brücke','großer Körper zwischen zwei Bereichen',one,[[46,'alter Rand 46']],[6]),panel('Zwei-Bar-Brücke','zusätzlicher Anschlussbar',up,[[46,'alter Rand 46']],[6,7]),"Übergang und fertige Folgerange sind verschiedene Zeitpunkte."),
 'c22-07': define("Ein Ausbruch allein ist kein vollständiger Einstieg",panel('Ausbruchsangebot','Preis gewinnt Raum',up.slice(0,8),[[46,'alter Rand 46']],[6,7]),panel('Später Rücklauftest','eigener Plan statt erfundener Füllung',touching,[[46,'Test 46']],[14,15]),"Orderplan bleibt vom Muster getrennt."),
 'c22-08': define("Rücklauf zum Ausbruchspunkt",rp('Alter Bezug steht fest','obere Grenze 46',first,30,46),panel('Später Test am Rand','genaue Berührung von 46',touching,[[46,'Test 46']],[14]),"Alte Grenze vor dem Test festhalten."),
 'c22-09': define("Rangehöhe als Projektionsstrecke",rp('Rangehöhe 16','30 → 46 als Rechnung',first,30,46),panel('Projektion bis 62','46 plus 16',up,[[46,'Ausbruch 46'],[62,'Ziel 62']],[7]),"46 plus 16 ergibt 62, nicht Gewissheit."),
 'c22-10': define("Bei neuer Balance das Management anpassen",panel('Trendfortsetzung','weiter gerichtete Swings',direct),rp('Management in Balance','Schutz bleibt, Gewinnplan prüfen',up,55,69),"Range-Management entfernt keine Verlustgrenze."),
 'c22-11': define("Oberer Rand, unterer Rand und Mitte",rp('Bekannte Ränder','neue obere Balance',up,55,69),panel('Mitte und Rand unterscheiden','62 liegt in der bisherigen Zone',up,[[55,'unterer Rand 55'],[62,'innere Referenz 62'],[69,'oberer Rand 69']],[],[[55,69]]),"Randlage ersetzt kein Signal."),
 'c22-12': define("Großer Trendbar im Zielbereich",panel('Großer Bar gewinnt Anschluss','weitere Käuferfolge',direct,[[62,'Zielgebiet 62']]),panel('Großer Bar wird zurückgenommen','Gegenfolge erst danach sichtbar',fade,[[62,'Zielgebiet 62']],[14,15,16]),"Großer Zielbar ist kein sicherer Umkehrbefehl."),
 'c22-13': define("Rücktest bleibt vor der alten Range",panel('Test bleibt oberhalb','Tief 47 erreicht 46 nicht',shallow,[[46,'alter Rand 46']],[14]),panel('Test reicht hinein','Tief 44 unterschreitet 46',inside,[[46,'alter Rand 46']],[14]),"Knapp davor und hinein sind unterschiedliche Preisbesuche."),
 'c22-14': define("Rückkehr in den alten Bereich",panel('Wiedereintritt','Schluss 44 unter 46',reentry.slice(0,15),[[46,'alter Rand 46']],[14]),rp('Weiterer Durchlauf','neue Folge Richtung 30',reentry,30,46,[15,16]),"Wiedereintritt und Anschluss gemeinsam lesen."),
 'c22-15': define("Vom Range-Trend zum Umkehrtag",rp('Tiefere Tagesbereiche','Verkäuferfolge mit Gegenhandel',down,31,45),panel('Spätere Käuferumkehr','Rückkehr in den alten oberen Bereich',reverse,[[54,'alter Unterrand 54'],[70,'alter Oberrand 70']],[15,16,17]),"Tagesname folgt dem Verlauf."),
 'c22-16': define("Mehrere versetzte Ranges",rp('Zwei höhere Bereiche','neue Balance nach erstem Übergang',up,55,69),panel('Dritter höherer Bereich','mehrfache Verlagerung',triple,[[46,'erster Rand 46'],[69,'zweiter Rand 69']],[],[[55,69],[69,79]]),"Viele Ranges bedeuten nicht automatisch schwachen Trend."),
 'c22-17': define("Ein Tagesbar, viele Intraday-Swings",panel('Intraday-Gegenhandel','derselbe Preisweg im Detail',up),panel('Ein aggregierter Tagesbar','gleiche Daten ohne innere Reihenfolge',[aggregateDay(up)]),"Gleiche Daten liefern verschiedene Ansichten."),
 'c22-18': define("Alte Gegen-Signalpreise als Testzonen",panel('Alter Gegen-Signalpreis','bekannte Referenz im unteren Bereich',first,[[38,'alter Signalpreis 38']]),panel('Späterer Besuch','Preis testet die Referenz',reentry,[[38,'alter Signalpreis 38']],[15,16]),"Preisreferenz ist keine sichtbare Orderliste."),
 'c22-19': define("Späte Gegenbewegung und verbleibende Zeit",panel('Naher Rücktest','nächster bekannter Rand ist 46',inside,[[46,'naher Rand 46']]),panel('Ferneres Gebiet','zusätzliche Strecke bis 30',reentry,[[30,'ferner Rand 30'],[46,'naher Rand 46']]),"Zeitrest gehört zum Halteplan."),
 'c22-20': define("Beide Ausbruchsseiten scheitern",rp('Früher Bereich','ursprüngliche Grenzen bleiben',first,30,46),panel('Beide Seiten erweitert','neue Extreme ohne dauerhafte Richtung',failBoth,[[30,'alter Unterrand 30'],[46,'alter Oberrand 46']],[6,8,10]),"Größerer Raum ist nicht dasselbe wie Trend."),
 'c22-21': define("Später Ausbruch aus kleiner Tagesrange",rp('Lange kleine Range','später Ausbruch noch offen',late.slice(0,18),30,46),panel('Späte Erweiterung','kurzer Anschluss vor Sitzungsende',late,[[46,'alter Rand 46']],[18,19]),"Kleine Tagesrange erzwingt keinen Ausbruch."),
 'c22-22': define("Mehrere plausible Anfangsgrenzen",rp('Größerer Bezug','Höhe 16 projiziert bis 62',first,30,46),panel('Innerer Bezug','Höhe 10: 44 plus 10 ergibt 54',first,[[34,'innen unten 34'],[44,'innen oben 44'],[54,'inneres Ziel 54']]),"Zielrechnungen brauchen unveränderte Anker."),
 'c22-23': define("Wahrscheinlichkeit nicht aus einem Gefühl messen",panel('Bekannter Preisplan','Entry 42, Schutz 38, Ziel 50',buyerAttempts,[[38,'Schutz 38'],[42,'Entry 42'],[50,'Ziel 50']]),panel('Gleiche Preise, offene Folge','2 zu 1 ist keine Trefferquote',buyerAttempts.slice(0,3),[[38,'Schutz 38'],[42,'Entry 42'],[50,'Ziel 50']]),"Preisrechnung und Wahrscheinlichkeitsmessung getrennt halten."),
 'c22-24': define("Dein Range-Übergangsprotokoll",rp('Bekannte Ausgangsrange','Grenzen und Erwartungen notieren',first,30,46),panel('Neue Folge prüfen','Test und tatsächliche Ausführung trennen',reentry,[[30,'alter Unterrand 30'],[46,'alter Oberrand 46']]),"Lesart und Ausführung zeitgerecht dokumentieren."),
 'c22-25': define("Erster Bereich reicht über die Sessiongrenze",rp('Vorherige Schlusszone','alter Bereich bereits bekannt',oldClose,30,46),rp('Neuer Handel bleibt darin','Sessionbezug ausdrücklich trennen',first,30,46),"Alte Zone und heutige Tageskerze auseinanderhalten."),
 'c22-26': define("Starker Übergang und kleine obere Balance",panel('Starke Brücke','schnelle Verlagerung nach oben',up.slice(0,8),[[46,'alter Rand 46']]),rp('Kleine obere Balance','vergleichsweise wenig neue Höhe',up,55,69),"Abstand und Rangehöhe getrennt messen."),
 'c22-27': define("Oberer Ausbruch scheitert, alter Bereich wirkt wieder",rp('Obere Fortsetzungsidee','Ausbruch noch nicht zurückgenommen',fade.slice(0,15),55,69,[14]),panel('Gegenfolge und Reaktion','alter Bereich wird wieder relevant',fade,[[46,'alter Rand 46']],[15,16,17]),"Gegenanschluss kann eine neue Balance begründen."),
 'c22-28': define("Abwärtsausbruch aus einer mittleren Anfangsrange",rp('Anfangsbereich oben','alte Grenzen 54 und 70',mirror(first),54,70),rp('Neuer tieferer Bereich','Gegenhandel nach Verkäuferausbruch',down,31,45),"Neue tiefere Zone mit ihrer eigenen Folge lesen."),
 'c22-29': define("Zweiter Käuferversuch im unteren Bereich",panel('Erster Käuferversuch','Rückgabe trennt die Versuche',buyerAttempts.slice(0,2),[],[0]),panel('Zweiter Käuferversuch','Signalhoch 40, späterer Buy-Stop 41',buyerAttempts,[[41,'Buy-Stop 41']],[2,3]),"Zweiter Versuch ist ein neues Angebot, keine Pflicht."),
 'c22-30': define("Gehaltene Rückkehr wird zum Umkehrtag",panel('Erster Rücktest','neue Käuferstrecke bis 55',reverse.slice(0,16),[[54,'alter Unterrand 54']]),panel('Gehaltene Rückkehr','weiterer Raum zum alten Oberrand',reverse,[[54,'alter Unterrand 54'],[70,'alter Oberrand 70']],[16,17]),"Wiedereintritt braucht sichtbaren Anschluss."),
 'c22-31': define("Große Signalbars am falschen Ort",rp('Frühe enge Range','großer Signalbar nahe Unterrand',first,30,46,[2]),panel('Späterer Rücklaufplan','anderer Preis und anderer Zeitpunkt',mirror(touching),[[54,'alter Unterrand 54']],[14,15]),"Gute Form kann am ungünstigen Preis stehen."),
 'c22-32': define("Untere Basis und Rücktestziel",panel('Basis und neue Käuferidee','ein eigener Plan',buyerAttempts.slice(0,3),[[38,'Schutz 38'],[42,'Entry 42'],[50,'Ziel 50']]),panel('Spätere Folge','neue Preise erst jetzt sichtbar',buyerAttempts,[[38,'Schutz 38'],[42,'Entry 42'],[50,'Ziel 50']],[3,4,5]),"Neuer Versuch braucht einen neuen vollständigen Plan."),
 'c22-33': define("Gerichteter Tagesbar trotz vieler Ranges",panel('Mehrere tiefere Bereiche','Gegenbewegungen bleiben sichtbar',down),panel('Bearish Tageshülle','gleiche Quelle, ein OHLC-Bar',[aggregateDay(down)]),"Tageshülle ist keine frühe Zukunftsinformation."),
 'c22-34': define("Vorherige Schlussrange als Bärenflagge",rp('Bekannte Schlussrange','alter Bereich als möglicher Gegenabschnitt',mirror(first),54,70),rp('Späterer Verkäuferausbruch','beide Namen beschreiben dieselben Bars',down,31,45,[6,7]),"Mehr passende Namen erhöhen nicht automatisch die Sicherheit."),
 'c22-35': define("Späte Reaktion aus der letzten unteren Range",rp('Letzter unterer Bereich','Gegenhandel ist sichtbar',down,31,45),panel('Spätere Käuferreaktion','Test eines höheren alten Bereichs',reverse,[[54,'alter Unterrand 54']]),"Aktuelle Gegenfolge neben der Tagesrichtung lesen."),
 'c22-36': define("Drei höhere Bereiche und Trendvorrang",rp('Zwei höhere Bereiche','Trendkontrolle zunächst erhalten',up,55,69),panel('Dritter höherer Bereich','neue Käuferfolge',triple,[[46,'erster Rand 46'],[69,'zweiter Rand 69']],[],[[55,69],[69,79]]),"Anschluss entscheidet stärker als die Anzahl der Boxen."),
 'c22-37': define("Letzte obere Balance als scheiternde Flagge",panel('Letzter Fortsetzungsversuch','neues Hoch noch offen',triple),panel('Fortsetzung scheitert','Rückgabe unter die letzte Zone',tripleReturn,[[69,'letzter Unterrand 69']],[18,19,20,21]),"Letzte Flagge ist früh nur eine Möglichkeit."),
 'c22-38': define("Gegenbewegung durch mehrere alte Zonen",panel('Erster Rücklauf','letzte Zone wird zurückgenommen',tripleReturn.slice(0,20),[[69,'letzter Unterrand 69']]),panel('Weitere alte Bezüge','nächste Zonen werden besucht',tripleReturn,[[46,'erster Rand 46'],[38,'alter Signalpreis 38']],[20,21]),"Fernere Ziele erst mit neuer Folge neu gewichten."),
 'c22-39': define("Schwacher Intraday-Trend unter starker Tageshülle",panel('Intraday-Gegenräume','bearish Richtung mit Balancen',down),panel('Verdichtete Tagesform','innerer Weg ist nicht mehr sichtbar',[aggregateDay(down)]),"Tagesrichtung ersetzt keine Intraday-Struktur."),
 'c22-40': define("Zwei gescheiterte Käuferideen im unteren Kontext",panel('Zwei kleine Käuferideen','Rückgabe zwischen den Versuchen',failedBuyers.slice(0,3),[[46,'zweites Signalhoch 46']],[0,2]),panel('Neue Verkäuferauslösung','Sell-Stop 34 wird besucht',failedBuyers,[[34,'Sell-Stop 34']],[3,4]),"Zwei Versuche können beide scheitern."),
 'c22-41': define("Früher Käufertrend, später Verkäufer-Range",panel('Früher Käuferabschnitt','gerichteter Anfang',direct),panel('Späterer Verkäuferabschnitt','neue größere Gegenfolge',[...direct,...bars([84,68,73,61,65,51])],[[68,'gebrochener Bereich 68']],[13,15,17]),"Neue Kontrolle darf die alte Lesart verändern."),
 'c22-42': define("Breite Bärentreppen statt enger Kanal",rp('Tiefer versetzte Bereiche','Verkäuferseite hält größere Kontrolle',down,31,45),panel('Breitere Gegenrückgabe','Treppen und Ranges überlappen',mirror(inside),[[54,'alter Unterrand 54']],[14,15]),"Breite Rückgabe und größere Richtung zusammen halten."),
 'c22-43': define("Käuferdruck wächst innerhalb der Anfangsrange",panel('Innere Swings werden höher','schrittweise Käuferhinweise',drift),panel('Neuer Käuferausbruch','stärkere Folge erst später',[...drift,...bars([51,61,65])],[[52,'vorheriges Hoch 52']],[7,8]),"Käuferdruck aus der ganzen sichtbaren Folge lesen."),
 'c22-44': define("Ein Test dringt ein, der nächste berührt nur",panel('Erster Test reicht hinein','Tief 44 unter 46',inside,[[46,'alter Rand 46']],[14]),panel('Später Test berührt nur','Tief genau 46',secondTest,[[46,'alter Rand 46']],[18]),"Preisbesuch exakt benennen."),
 'c22-45': define("Erweiterung oben und unten statt Zieltrend",rp('Ursprüngliche Range','Projektionsanker bleiben bestehen',first,30,46),panel('Beidseitige Fehlausbrüche','Ziele bleiben offen oder unerfüllt',failBoth,[[62,'oberes Projektionsziel 62'],[14,'unteres Projektionsziel 14']],[6,8,10]),"Nicht erfüllte Ziele ehrlich führen."),
 'c22-46': define("Erster Gegenversuch und spätere zweite Reaktion",panel('Erster Gegenversuch','erster Gegenbar nach enger Käuferfolge',[...direct,...bars([84,76])],[],[13]),panel('Neuer Test und Gegenfolge','spätere zweite Reaktion',[...direct,...bars([84,76,85,72,64])],[[85,'späterer Testbereich 85']],[13,15,16]),"Zweiter Versuch bringt neue Information, keine Garantie."),
 'c22-47': define("Lange kleine Range und später Käuferausbruch",rp('Lange kleine Tagesrange','Ausbruch noch nicht entstanden',late.slice(0,18),30,46),panel('Später Käuferanschluss','neue Strecke über die Grenze',late,[[46,'alter Rand 46']],[18,19]),"Historische Beobachtung ist keine heutige Garantie."),
 'c22-48': define("Spätes Ziel und wenig Raum für eine zweite Range",panel('Spätes Zielgebiet','kurzer Impuls besucht 62',late,[[62,'Projektionszone 62']],[18,19]),panel('Wenig obere Folge','Sitzungsende nach kurzem Anschluss',late.slice(-2),[[62,'Projektionszone 62']]),"Zeitrest und Zielerreichung getrennt führen."),
};

export const chapterTwentyTwoDescriptions = Object.fromEntries(
  Object.entries(chapterTwentyTwoCharts).map(([id, definition]) => [id, definition.description]),
) as Record<ChapterTwentyTwoScenarioId, string>;

function PanelDrawing({ value, x }: { value: Panel; x: number }) {
  const width = 343;
  const y = (price: number) => 260 - price * 1.55;
  const spacing = (width - 52) / value.bars.length;
  const bodyWidth = Math.min(23, spacing * 0.48);
  const cx = (index: number) => x + 26 + (index + 0.5) * spacing;
  return <g>
    <rect className="chart-panel" x={x} y={65} width={width} height={230} rx={14} />
    <text className="chart-panel-title" x={x + width / 2} y={87} textAnchor="middle">{value.title}</text>
    {value.zones?.map(([low,high], index) => <rect key={`zone-${index}`} className="chart-zone" x={x+15} y={y(high)} width={width-30} height={y(low)-y(high)} rx={5} />)}
    {value.lines.map((line, index) => <g key={`line-${index}`}><line
      className="c22-teaching-line" data-kind={line.kind}
      x1={cx(line.start[0])} y1={y(line.start[1])}
      x2={cx(line.end[0])} y2={y(line.end[1])}
      stroke="currentColor" strokeWidth={2} opacity={0.65}
      strokeDasharray={line.kind === 'channel' ? '6 4' : line.kind === 'reference' ? '2 4' : line.kind === 'average' ? '8 3 2 3' : undefined} />{line.label ? <text className="chart-small" x={x + width - 18 - (index % 3) * 95} y={y(line.end[1]) - 5} textAnchor="end">{line.label}</text> : null}</g>)}
    {value.bars.map(([open, high, low, close], index) => {
      const tone = close >= open ? 'bull' : 'bear';
      const xBar = cx(index);
      return <g key={index}>
        {value.focus.includes(index) ? <rect className="chart-zone"
          x={xBar - bodyWidth / 2 - 7} y={y(high) - 8}
          width={bodyWidth + 14} height={y(low) - y(high) + 16} rx={6} /> : null}
        <line className={`candle-wick ${tone}`} x1={xBar} x2={xBar} y1={y(high)} y2={y(low)} />
        <rect className={`candle-body ${tone}`} x={xBar - bodyWidth / 2}
          y={Math.min(y(open), y(close))} width={bodyWidth}
          height={Math.max(3, Math.abs(y(open) - y(close)))} rx={2} />
      </g>;
    })}
    <text className="chart-small strong" x={x + width / 2} y={286} textAnchor="middle">{value.note}</text>
  </g>;
}

export function ChapterTwentyTwoChart({ scenario }: { scenario: ChartScenarioId }) {
  if (!Object.hasOwn(chapterTwentyTwoCharts, scenario)) return null;
  const definition = chapterTwentyTwoCharts[scenario as ChapterTwentyTwoScenarioId];
  return <g className="chapter-twenty-two-chart">
    <text className="chart-kicker" x={380} y={28} textAnchor="middle">{definition.heading}</text>
    {definition.panels.map((value, index) =>
      <PanelDrawing key={index} value={value} x={30 + index * 357} />)}
    <text className="chart-small strong" x={380} y={320} textAnchor="middle">{definition.footer}</text>
  </g>;
}

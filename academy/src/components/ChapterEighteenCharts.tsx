import type { ChartScenarioId, ChapterEighteenScenarioId } from '../content/types';

type Bar = readonly [open: number, high: number, low: number, close: number];
export interface TeachingLine {
  start: readonly [index: number, price: number]; end: readonly [index: number, price: number];
  kind: 'trend' | 'channel' | 'reference' | 'average'; label?: string;
}
interface Panel { title: string; note: string; bars: readonly Bar[]; lines: readonly TeachingLine[]; focus: readonly number[]; }
interface Definition { heading: string; panels: readonly [Panel, Panel]; footer: string; description: string; }

// Original synthetic paths. Shared data also preserves before/after replay continuity.
const bars = (points: readonly number[]): Bar[] => points.slice(1).map((close, i) =>
  [points[i], Math.max(points[i], close) + 2, Math.min(points[i], close) - 2, close]);
const mirror = (values: readonly Bar[]): Bar[] => values.map(([o, h, l, c]) => [100-o, 100-l, 100-h, 100-c]);
const level = (values: readonly Bar[], price: number, label: string, start = 0): TeachingLine =>
  ({ start: [start, price], end: [values.length-1, price], kind: 'reference', label });
const slope = (start: readonly [number, number], end: readonly [number, number], kind: 'trend' | 'channel'): TeachingLine => ({start, end, kind});
const panel = (title: string, note: string, values: readonly Bar[], levels: readonly (readonly [number, string])[] = [], focus: readonly number[] = [], extra: readonly TeachingLine[] = []): Panel =>
  ({title, note, bars: values, lines: [...levels.map(([price, label]) => level(values, price, label)), ...extra], focus});
const average = (values: readonly Bar[], history: readonly number[], period: number): TeachingLine[] => {
  const closes = [...history, ...values.map((bar) => bar[3])];
  const means = values.map((_, i) => closes.slice(history.length+i-period+1, history.length+i+1).reduce((sum,v)=>sum+v,0)/period);
  return means.slice(1).map((value,i)=>({start:[i,means[i]],end:[i+1,value],kind:'average', ...(i===0 ? {label:`SMA ${period}`} : {})}));
};
const withAverage = (value: Panel, history: readonly number[], period: number): Panel =>
  ({...value, lines:[...value.lines, ...average(value.bars,history,period)]});
const define = (heading: string, left: Panel, right: Panel, footer: string): Definition => ({heading, panels:[left,right],footer,
  description:`Eigenes schematisches Beispiel: links ${left.title} (${left.note}), rechts ${right.title} (${right.note}). Gepunktet: Preisreferenz; durchgezogen: Trendseite; gestrichelt: Kanalgrenze; strichpunktiert: berechneter Durchschnitt. ${footer}`});
const up = bars([20,31,43,56,67,79]);
const down = mirror(up);
const first: Bar[] = [...up, [79,81,67,72], [72,86,71,84]];
const h2: Bar[] = [[20,35,18,33],[33,50,32,48],[48,66,47,64],[64,65,51,53],[53,58,48,56],[56,61,50,58],[58,59,44,47],[47,60,45,56],[56,70,55,68]];
const wedge = bars([22,43,65,56,62,50,58,44,61,73]);
const flag = bars([22,40,60,52,57,48,65,59,74]);
const test = bars([32,40,52,41,39,57,65]);
const risk = bars([40,52,67,60,56,54,63]);
const gap: Bar[] = Array.from({length:20},(_,i)=>[30+2*i,34+2*i,29+2*i,33+2*i]);
const gapHistory = [13,15,17,19,21,23,25,27,29,31];
const gapTest: Bar[] = [...gap,[71,72,50,53],[53,60,52,58],[58,72,57,70],[70,76,68,74]];
const local: Bar[] = [...up,[79,80,68,70],[70,73,60,64],[64,69,57,65],[65,80,64,78]];
const swing = bars([32,40,52,46,61,57,75]);
const trail = bars([30,50,62,50,68,62,80,86]);
const failedH2: Bar[] = [...h2.slice(0,8),[56,58,39,42],[42,59,40,57],[57,72,56,70]];
const transition = bars([24,40,53,46,64,54,73,59,65,49,62,52]);
const open: Bar[] = [[32,34,30,33],[44,53,43,51],[51,54,42,44],[44,46,41,45],[45,62,44,60],[60,70,59,68],[68,72,64,66],[66,78,65,76]];
const small: Bar[] = [...up,[79,80,65,68],[68,82,67,80],[80,88,79,86]];
const triple = bars([35,56,50,65,55,62,54,68,64,74,72,84]);
const unfilled: Bar[] = [[40,57,39,56],[56,70,55,68],[68,69,64,66],[66,74,65,72],[72,82,71,80]];
const mature: Bar[] = [...bars([22,42,38,57,51,72,64,78]),[78,96,77,94],[94,95,79,82],[82,84,67,70]];
const correction: Bar[] = [[82,84,68,70],[70,78,69,76],[76,77,59,62],[62,79,60,66],[66,67,58,61],[61,67,60,65],[65,75,64,73]];
const slow: Bar[] = [[82,84,68,70],[70,77,69,75],[75,76,57,60],[60,64,58,62],[62,65,59,63],[63,68,61,66],[66,71,63,69],[69,70,62,65]];
const quiet = bars([34,48,61,58,60,57,59,62]);
const aggregates = (values: readonly Bar[], count: number): Bar[] => Array.from({length:values.length/count},(_,i)=> {
 const group=values.slice(i*count,(i+1)*count); return [group[0][0],Math.max(...group.map(b=>b[1])),Math.min(...group.map(b=>b[2])),group.at(-1)![3]];
});
const detail = bars([22,29,35,32,40,46,43,51,58,54,62,69,75]);

export const chapterEighteenCharts: Record<ChapterEighteenScenarioId, Definition> = {
  "c18-01": define("Mit der Kontrolle planen oder flat bleiben", panel('Bullenverlauf','Kaufplan oder keine Position',up), panel('Bärenverlauf','Shortplan oder keine Position',down), "Die Richtung ersetzt weder Order noch Verlustgrenze"),
  "c18-02": define("Drei Orderwege, verschiedene Zeitpunkte", panel('Preisangebot im Pullback','Limit 68, aktuelle Gegend 72',first,[[68,'Limit 68']], [5]), panel('Durchbruch mit dem Trend','Stop 82 nach Signalhoch 81',first,[[82,'Stop 82']], [6]), "Market sucht sofortige Ausführung; Stop wartet auf Durchbruch"),
  "c18-03": define("Zweite Versuche in beiden Trendrichtungen", withAverage(panel('High 2 im Bullenpullback','erster Versuch, Rückgabe, zweiter Versuch',h2,[],[5,6,7]),[12,14,16,18],5), withAverage(panel('Low 2 im Bärenpullback','gespiegelte Reihenfolge',mirror(h2),[],[5,6,7]),[88,86,84,82],5), "Zählung braucht eine erkennbare Unterbrechung"),
  "c18-04": define("Drei Schübe in den Trendflaggen", panel('Bullenflagge','drei lokale Abwärtsversuche',wedge,[],[2,4,6,7]), panel('Bärenflagge','drei lokale Aufwärtsversuche',mirror(wedge),[],[2,4,6,7]), "Die Auslösung wird mit der größeren Kontrolle geprüft"),
  "c18-05": define("Flaggenausbruch und späterer Pullback", panel('Erster Ausbruch','Pause wird verlassen',flag.slice(0,6),[[60,'Grenze 60']],[5]), panel('Erneuter Test','Käuferreaktion nach Rücklauf',flag,[[60,'Grenze 60']],[6,7]), "Ausbruch, Test und Fortsetzung entstehen nacheinander"),
  "c18-06": define("Frischer Spike oder späte Beschleunigung?", panel('Früher erster Rücklauf','High 1 nach kurzer Pause',first,[],[5,6]), panel('Reife Bewegung','großer späte Schub und Rückgabe',mature,[],[7,8,9]), "Die gleiche kleine Pause hat nicht in jeder Phase dieselbe Bedeutung"),
  "c18-07": define("Ausbruch über das alte Swinghoch", panel('Starke Folge','Durchbruch mit der Kontrolle',flag,[[62,'altes Hoch 62']],[5,7]), panel('Mehr Überlappung','Hoch ist auch ein Gewinnbereich',transition,[[66,'alte Referenz']],[6,7,8]), "Trendstärke und Tagesphase vor dem Auftrag prüfen"),
  "c18-08": define("Schneller Spike und weit entfernter Schutz", panel('Früherer Einstieg','Abstand zur Verlustgrenze kleiner',up,[[44,'früher 44'],[18,'Schutz 18']],[1]), panel('Später Einstieg','Menge muss zum Abstand passen',up,[[79,'später 79'],[18,'Schutz 18']],[4]), "Weiterer Preisabstand verlangt bei gleichem Budget kleinere Menge"),
  "c18-09": define("Frühe Angebote im ersten Gegenbar", panel('Bullen-Spike','Vorbar-Limit oder Gegenschluss',first,[[65,'Vorbar-Tief 65']],[5,6]), panel('Bären-Spike','gleiche Varianten gespiegelt',mirror(first),[[35,'Vorbar-Hoch 35']],[5,6]), "Die spätere Trendreaktion war beim frühen Einstieg noch offen"),
  "c18-10": define("Trendlinie und Swingbereich im Pullback", panel('Trendseite','geneigte Grenze prüfen',local,[],[7], [slope([0,18],[8,66],'trend')]), panel('Alter Swingbereich','horizontaler Preisbezug',local,[[60,'früher Tiefbereich']],[6,7,8]), "Zwei Referenzen ersetzen keine Reaktion und keinen Schutz"),
  "c18-11": define("Schwacher Gegenversuch nach neuer Stärke", panel('Käufer übernehmen','kleiner lokaler Verkäuferbar',bars([76,58,44,62,79,74,82]),[],[4]), panel('Verkäufer übernehmen','kleiner lokaler Käuferbar',mirror(bars([76,58,44,62,79,74,82])),[],[4]), "Lokales Signal und neue größere Richtung auseinanderhalten"),
  "c18-12": define("Ruhige Flagge am Durchschnitt", withAverage(panel('Kleine Bullenflagge','ruhige Bars, enger Zielraum',quiet,[],[3,4,5]),[20,24,28,30],5), withAverage(panel('Kleine Bärenflagge','gleiche Idee gespiegelt',mirror(quiet),[],[3,4,5]),[80,76,72,70],5), "Ruhige Optik ersetzt keine Rechnung von Risiko und Kosten"),
  "c18-13": define("Ausbruchspullback mit frühem Limit", panel('Nach dem Ausbruchsbar','Preisangebot nimmt Rücklauf vorweg',flag.slice(0,6),[[59,'Limitbereich 59']],[5]), panel('Spätere Käuferreaktion','Bestätigung erst jetzt sichtbar',flag,[[59,'Limitbereich 59']],[6,7]), "Frühes Angebot und spätere Bestätigung kennen verschiedene Daten"),
  "c18-14": define("Der Einstiegspreis wird noch einmal getestet", panel('Rückkehr zur eigenen Referenz','früher Einstandstop kann auslösen',test.slice(0,4),[[40,'Einstieg 40'],[30,'Struktur 30']],[3]), panel('Neue Käuferfortsetzung','Test hielt im gezeigten Verlauf',test,[[40,'Einstieg 40'],[30,'Struktur 30']],[4,5]), "Persönlicher Einstand und struktureller Schutz sind verschieden"),
  "c18-15": define("Rücklaufgröße mit dem bisherigen Verlauf vergleichen", panel('Rückgabe von acht','Preisangebot am beobachteten Maß',[[40,57,39,56],[56,70,55,68],[68,69,62,64],[64,76,63,75]],[[62,'acht unter 70']],[2]), panel('Nur sechs zurück','tieferes Angebot bleibt ungefüllt',unfilled,[[62,'Limit 62']],[2,3]), "Eine bisherige Größe ist keine Grenze für die nächste Rückgabe"),
  "c18-16": define("Zwei Tranchen, ein gemeinsamer Schutz", panel('Zwei Einheiten bei 60','Preisrisiko bis 50: 20',risk,[[60,'erste 60'],[50,'Schutz 50']],[3]), panel('Zwei weitere bei 56','Gesamtrisiko 32 vor Kosten',risk,[[60,'erste 60'],[56,'zweite 56'],[50,'Schutz 50']],[4]), "Durchschnitt 58; vier Einheiten riskieren insgesamt 32 bis 50"),
  "c18-17": define("Erster Durchschnittstest nach langer Trennung", withAverage(panel('Zwanzig Bars getrennt','gerichtete Vorgeschichte',gap),gapHistory,10), withAverage(panel('Späterer erster Kontakt','Test mit offenen Folgen',gapTest,[],[20,21,22]),gapHistory,10), "Barzahl liefert Kontext und kein zusätzliches Risikobudget"),
  "c18-18": define("Erster Gegenschluss jenseits des Durchschnitts", withAverage(panel('Bullenfall','Verkäufer schließt unter SMA',gapTest,[],[20,21,22]),gapHistory,10), withAverage(panel('Bärenfall','Käufer schließt über SMA',mirror(gapTest),[],[20,21,22]),gapHistory.map(v=>100-v),10), "Erster Schluss, Insidebar und Trendreaktion getrennt beobachten"),
  "c18-19": define("Kleiner Gegentrend im größeren Trendpullback", panel('Lokaler Tiefbruch','größerer Bullenverlauf',local,[[60,'lokales Tief 60']],[7,8]), panel('Lokaler Hochbruch','größerer Bärenverlauf',mirror(local),[[40,'lokales Hoch 40']],[7,8]), "Ein lokaler Durchbruch kann mit der größeren Kontrolle scheitern"),
  "c18-20": define("Tempo im Spike, schwache Signale im Kanal", panel('Schneller Spike','große gerichtete Körper',up), panel('Überlappender Kanal','kleine schwache lokale Signale',bars([24,40,33,49,43,56,50,64,58,70])), "Ein erkannter Trend muss kein vertrautes Einstiegssignal liefern"),
  "c18-21": define("Scalp und Swing als verschiedene Vorabpläne", panel('Kurzer Zielplan','kleiner Zielbereich 55',swing,[[55,'Scalp 55'],[30,'Schutz 30']]), panel('Größerer Halteplan','weiterer Bereich 75',swing,[[75,'Swing 75'],[30,'Schutz 30']]), "Die vorige Enttäuschung darf den aktuellen Zielplan nicht ersetzen"),
  "c18-22": define("Modellrechnung mit ursprünglichem R", panel('2R Gewinn, 1R Verlust','bei angenommenen 50 Prozent: 0,5R',swing,[[60,'Ziel 60'],[40,'Start 40'],[30,'Schutz 30']]), panel('0,5R Gewinn, 1R Verlust','höhere Mindestquote nötig',swing,[[45,'Ziel 45'],[40,'Start 40'],[30,'Schutz 30']]), "Beispielannahmen sind keine aus dem Chart gemessenen Quoten"),
  "c18-23": define("Hälfte bei 2R, Rest nach eigenem Plan", panel('Vier Einheiten bei 40','ursprünglicher Schutz 30',swing.slice(0,4),[[40,'Start 40'],[30,'Schutz 30']]), panel('Zwei bei 60 verkauft','zwei bleiben offen',swing,[[60,'Teilgewinn 60'],[40,'Start 40']],[3]), "Realisierter Teil und offener Rest werden getrennt geführt"),
  "c18-24": define("Nachführung an bestätigten höheren Tiefs", panel('Erstes höheres Tief 48','neues Hoch bestätigt den Test',trail.slice(0,5),[],[2,3],[level(trail.slice(0,5),47,'Schutz 47',3)]), panel('Späteres höheres Tief 60','zweite Schutzmarke nach Bestätigung',trail,[],[4,5],[level(trail,59,'Schutz 59',5)]), "Die spätere Marke ist in der frühen Bildhälfte noch unbekannt"),
  "c18-25": define("Einstandtest und späteres neues Hoch", panel('Test unter den Einstieg','ursprüngliche Struktur bleibt',test.slice(0,4),[[40,'Einstand 40'],[30,'Schutz 30']],[3]), panel('Neues Hoch nach dem Test','neue Breakeven-Prüfung',test,[[40,'Einstand 40']],[4,5]), "Einstand vor Kosten ist nicht zwingend netto null"),
  "c18-26": define("Gescheitertes High 2 und späteres High 3", panel('Erster Plan scheitert','Schutz 44 wird unterschritten',failedH2.slice(0,9),[[44,'alter Schutz 44']],[8]), panel('Neuer dritter Versuch','eigene Verlustgrenze nötig',failedH2,[[38,'neuer Schutz 38']],[9,10]), "Der spätere Versuch löscht den ursprünglichen Verlust nicht"),
  "c18-27": define("Vier oder zwölf Abstand: andere Menge", panel('Engerer Preisplan','Einstand 60, Schutz 56',risk,[[60,'Start 60'],[56,'Schutz 56']]), panel('Weiter Strukturplan','Einstand 60, Schutz 48',risk,[[60,'Start 60'],[48,'Schutz 48']]), "Dreifacher Abstand verlangt bei gleichem Budget etwa ein Drittel Menge"),
  "c18-28": define("Von der Trendfolge zur größeren Überlappung", panel('Früher gerichtet','höhere Hochs und Tiefs',transition.slice(0,6)), panel('Später zweiseitig','tieferer Rücklauf und schwacher Test',transition,[[52,'alter Tiefbereich']],[8,9,10]), "Ausstieg, Flatbleiben und Short-Einstieg sind getrennte Entscheidungen"),
  "c18-29": define("Tagesstart: Gap und unscheinbarer Tiefbereichstest", panel('Früher Sprung nach oben','kleine Zweibarreaktion ist noch offen',open.slice(0,4),[[41,'früher Test']],[2,3]), panel('Spätere Stärke','Käuferkontrolle wird sichtbarer',open,[[41,'früher Test']],[4,5]), "Der frühe Signalbar kennt die spätere Tagesform noch nicht"),
  "c18-30": define("Kräftiger Bruch des Eröffnungsbereichs", panel('Bereich vor dem Ausbruch','oberer Preis 54 ist sichtbar',open.slice(0,4),[[54,'Eröffnung oben 54']]), panel('Großer Käuferbar','Ausbruch und erster Anschluss',open.slice(0,6),[[54,'Eröffnung oben 54'],[43,'Schutzbereich 43']],[4,5]), "Der große Schutzabstand muss vor der Order zur Menge passen"),
  "c18-31": define("Erster Bruch der engen Mikrostruktur", panel('Kleine Gegenbewegung','lokaler Bruch statt großer Wechsel',small.slice(0,6),[],[5],[slope([0,18],[5,73],'trend')]), panel('Käufer kehren zurück','Folgebars sind neue Information',small,[],[6,7],[slope([0,18],[5,73],'trend')]), "Limit, Gegenschluss und spätere Stop-Auslösung sind Alternativen"),
  "c18-32": define("Lokale Gegenidee bei starker größerer Kontrolle", panel('Höheres Hoch nach Mikrobruch','Shortidee braucht ihren Umfang',small,[[81,'früher Hochbereich']],[6]), panel('Rücklauf statt großer Umkehr','größere Käuferfolge bleibt Kontext',local,[[60,'höherer Tiefbereich']],[6,7,8]), "Ein lokaler Shortname beweist keinen vollständigen Tageswechsel"),
  "c18-33": define("Doppeltiefbereich und zweite Käuferauslösung", panel('Erster Aufwärtsversuch','lokaler Tiefbereich um 46',h2.slice(0,7),[[46,'gemeinsamer Bereich']],[4,5,6]), panel('Zweiter Aufwärtsversuch','High 2 nach erneuter Rückgabe',h2,[[46,'gemeinsamer Bereich']],[7,8]), "Ähnliche Tiefpreise beschreiben den Ort; High 2 die Reihenfolge"),
  "c18-34": define("Nächster Mikrobruch: Angebot oder Bestätigung?", panel('Vor der Käuferreaktion','Limit kennt nur den lokalen Bruch',small.slice(0,6),[[65,'Limitbereich 65']],[5]), panel('Nach neuer Stärke','Stoppreis wird erst später erreicht',small,[[81,'Auslösung 81']],[6,7]), "Die frühe Bildhälfte enthält keine späteren Bestätigungsbars"),
  "c18-35": define("Längere Seitwärtspause vor dem Ausbruch", panel('Kleine überlappende Bars','High 2 oder weitere Pause möglich',triple.slice(0,7),[[67,'obere Grenze']],[2,4,5]), panel('Ausbruch und kleiner Test','Fortsetzung als neue Beobachtung',triple,[[67,'obere Grenze']],[6,7,8]), "Dreieck und Keil sind Perspektiven auf denselben Abschnitt"),
  "c18-36": define("Sechs zurück, Angebot bei acht bleibt offen", panel('Limit unter dem Hoch','Preis 62 wird nicht besucht',unfilled.slice(0,4),[[62,'Limit 62']],[2]), panel('Spätere neue Hochs','Stopplan gesondert prüfen',unfilled,[[72,'neuer Stopbereich']],[3,4]), "Eine ungefüllte Order verlangt keinen emotionalen Ersatztrade"),
  "c18-37": define("Menge aus dem geplanten Preisverlust ableiten", panel('Ohne Kostenreserve','60 bis 53: sieben pro Stück',risk,[[60,'Start 60'],[53,'Schutz 53']]), panel('Mit Reserve 14','126 Preisbudget erlaubt 18 Stück',risk,[[60,'Start 60'],[53,'Schutz 53']]), "Budget 140: theoretisch 20; mit Reserve bleiben 18 vor Ausführung"),
  "c18-38": define("Teilgewinn und zwei mögliche Restexits", panel('Rest beendet bei 75','Gesamtgewinn 110 = 2,75R',swing,[[60,'Teil 60'],[75,'Rest 75']],[5]), panel('Rest beendet bei 55','Gesamtgewinn 70 = 1,75R',bars([32,40,52,46,61,57,55]),[[60,'Teil 60'],[55,'Rest 55']],[5]), "Vier bei 40, Schutz 30; zwei bei 60 verkaufen, zwei später beenden"),
  "c18-39": define("Schutzmarken erst nach sichtbarer Bestätigung", panel('Erster bestätigter Pullback','Tief 48, danach neues Hoch',trail.slice(0,5),[],[2,3],[level(trail.slice(0,5),47,'Schutz 47',3)]), panel('Nächster bestätigter Pullback','Tief 60, danach neues Hoch',trail,[],[4,5],[level(trail,59,'Schutz 59',5)]), "Nachführung wird zeitgerecht aus vorhandenen Bars abgeleitet"),
  "c18-40": define("Dritter größerer Schub an der äußeren Grenze", panel('Reife Käuferbewegung','mehrere Schübe, spätere Beschleunigung',mature.slice(0,8),[],[2,4,7],[slope([1,44],[7,88],'channel')]), panel('Größere Rückgabe folgt','Umfang der Korrektur war vorher offen',mature,[],[8,9],[slope([1,44],[7,88],'channel')]), "Ein Gewinnbereich ist keine automatische Verpflichtung zum Short"),
  "c18-41": define("Gegenschluss, Insidebar und Käuferreaktion", withAverage(panel('Erster Schluss unter SMA','frühe Variante noch ohne Bestätigung',gapTest.slice(0,21),[],[20]),gapHistory,10), withAverage(panel('Insidebar und Rückkehr','weitere Information erscheint später',gapTest,[],[21,22]),gapHistory,10), "Ein erster Gegenschluss allein beweist keinen neuen großen Trend"),
  "c18-42": define("Zwei Rückläufe und spätere zweite Auslösung", panel('Erster Käuferansatz','Gegenbewegung unterbricht den Versuch',correction.slice(0,5),[],[3,4]), panel('Neuer Käuferdurchbruch','Signal und Auslösung sind getrennt',correction,[[68,'Auslösung 68']],[5,6]), "Eine Stop-Order kann erst auf einem späteren Bar auslösen"),
  "c18-43": define("Lokaler Tiefbruch und langsame Rückkehr", panel('Neues kleines Tief','Verkäuferanschluss bleibt begrenzt',slow.slice(0,4),[[68,'altes lokales Tief']],[2,3]), panel('Mehr zweiseitiger Handel','Käufer kommen nur langsam zurück',slow,[[68,'altes lokales Tief']],[4,5,6,7]), "Scheiternder Tiefbruch kann in Range statt in neuen Spike führen"),
  "c18-44": define("Innere Trendseite und äußere Schubgrenze", panel('Pullback zur Trendseite','Rückkehr nach lokaler Verletzung',local,[],[7,8],[slope([0,18],[8,66],'trend')]), panel('Später äußerer Test','Teilgewinn oder Restprüfung',mature,[],[7,8],[slope([1,44],[7,88],'channel')]), "Durchgezogen und gestrichelt bezeichnen verschiedene Rollen"),
  "c18-45": define("Dieselbe Preisfolge auf zwei Zeitebenen", panel('Zwölf Einzelbars','synthetischer Detailverlauf',detail,[[48,'früher Hochbereich']]), panel('Vier größere Bars','je drei Einzelbars zusammengefasst',aggregates(detail,3),[[48,'gleiche Referenz']]), "Größere Bars ändern möglicherweise Schutzabstand und Menge"),
  "c18-46": define("Spätes Hoch bei stärkerem Verkaufsdruck", panel('Früher Ausbruchskontext','Käufer finden Anschluss',flag,[[62,'Referenz 62']],[5,7]), panel('Später schwacher Test','Gewinnbereich oder neue Gegenidee',transition,[[66,'früher Hochbereich']],[8,9,10]), "Gleicher Preisbezug verlangt nicht in jeder Phase dieselbe Order"),
  "c18-47": define("Viele mögliche Signale, ein Positionsplan", panel('Eine passende Swingposition','nicht jedes Signal ergänzen',triple,[[40,'früher Einstieg']]), panel('Geplante Tranchen','Gesamtrisiko aller offenen Mengen',risk,[[60,'Tranche 60'],[56,'Tranche 56'],[50,'Schutz 50']],[3,4]), "Jede Ergänzung gehört in dieselbe offene Verlustrechnung"),
  "c18-48": define("Dein Protokoll vom Einstieg bis zum Restexit", panel('Vor der Order','Richtung, Preis, Menge und Schutz',open.slice(0,6),[[54,'Ausbruch 54'],[43,'Schutz 43']],[4]), panel('Während der Folge','Teilgewinn und Restregel anwenden',trail,[],[3,5],[level(trail,59,'Restschutz 59',5)]), "Wenige zeitgerecht geführte Entscheidungen statt nachträglich perfekter Signale")
};

export const chapterEighteenDescriptions = Object.fromEntries(
  Object.entries(chapterEighteenCharts).map(([id, definition]) => [id, definition.description]),
) as Record<ChapterEighteenScenarioId, string>;

function PanelDrawing({ value, x }: { value: Panel; x: number }) {
  const width = 343;
  const y = (price: number) => 260 - price * 1.55;
  const spacing = (width - 52) / value.bars.length;
  const bodyWidth = Math.min(23, spacing * 0.48);
  const cx = (index: number) => x + 26 + (index + 0.5) * spacing;
  return <g>
    <rect className="chart-panel" x={x} y={65} width={width} height={230} rx={14} />
    <text className="chart-panel-title" x={x + width / 2} y={87} textAnchor="middle">{value.title}</text>
    {value.lines.map((line, index) => <g key={`line-${index}`}><line
      className="c18-teaching-line" data-kind={line.kind}
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

export function ChapterEighteenChart({ scenario }: { scenario: ChartScenarioId }) {
  if (!Object.hasOwn(chapterEighteenCharts, scenario)) return null;
  const definition = chapterEighteenCharts[scenario as ChapterEighteenScenarioId];
  return <g className="chapter-eighteen-chart">
    <text className="chart-kicker" x={380} y={28} textAnchor="middle">{definition.heading}</text>
    {definition.panels.map((value, index) =>
      <PanelDrawing key={index} value={value} x={30 + index * 357} />)}
    <text className="chart-small strong" x={380} y={320} textAnchor="middle">{definition.footer}</text>
  </g>;
}

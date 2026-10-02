import type { ChartScenarioId, ChapterTwentyOneScenarioId } from '../content/types';

type Bar = readonly [open: number, high: number, low: number, close: number];
export interface TeachingLine {
  start: readonly [index: number, price: number]; end: readonly [index: number, price: number];
  kind: 'trend' | 'channel' | 'reference' | 'average'; label?: string;
}
interface Panel { title: string; note: string; bars: readonly Bar[]; lines: readonly TeachingLine[]; focus: readonly number[]; }
interface Definition { heading: string; panels: readonly [Panel, Panel]; footer: string; description: string; }

const bars = (points: readonly number[]): Bar[] => points.slice(1).map((close,i) => [points[i],Math.max(points[i],close)+1,Math.min(points[i],close)-1,close]);
const mirror = (values: readonly Bar[]): Bar[] => values.map(([o,h,l,c])=>[100-o,100-l,100-h,100-c]);
const panel = (title: string, note: string, values: readonly Bar[], refs: readonly (readonly [number,string])[] = [], focus: readonly number[] = [], extra: readonly TeachingLine[] = []): Panel => ({title,note,bars:values,focus,lines:[...refs.map(([price,label]): TeachingLine=>({start:[0,price],end:[values.length-1,price],kind:'reference',label})),...extra]});
const define = (heading: string, left: Panel, right: Panel, footer: string): Definition => ({heading,panels:[left,right],footer,description:`Eigenes schematisches Beispiel: links ${left.title} (${left.note}), rechts ${right.title} (${right.note}). Gepunktet: bekannte Preisreferenz; durchgezogen: zuvor festgelegte Trendlinie. ${footer}`});
export function aggregateThree(values: readonly Bar[]): Bar[] {
 if(values.length%3!==0) throw new Error('Only complete three-bar groups');
 return Array.from({length:values.length/3},(_,i)=>{const group=values.slice(i*3,i*3+3);return [group[0][0],Math.max(...group.map(b=>b[1])),Math.min(...group.map(b=>b[2])),group[2][3]];});
}

const base = bars([20,32,50,44,40,48,58,52,65,59,72]);
base[3]=[44,45,40,40];base[4]=[40,49,40,48];
const test = [...base,...bars([72,60,49,40,48,45,53])];
const breakout = [...base,...bars([72,82,91,79,66,52])];
const keep = [...base,...bars([72,82,91,88,95])];
const balance = [...base.slice(0,2),...bars([50,44,48,43,49,44,47,45,50,44,46])];
const broad = bars([20,32,50,36,55,40,64,47,72]);
const tight = bars([20,32,50,47,55,53,61,59,68]);
const fast = bars([15,26,38,47,53,61,74,90]);
const detail = bars([20,26,32,30,39,50,47,44,40,49,58,63,60,65,72,69,75,80,84]);
const failure: Bar[] = [[40,46,39,44],[44,45,35,37],[37,38,29,31],[31,34,30,33],[33,33,22,24]];
const signaled: Bar[] = [[20,33,19,32],[32,50,31,49],[46,48,43,45],[45,53,41,51],[51,61,50,59],[59,68,57,66]];
const limitTouch: Bar[] = [[50,58,49,56],[56,60,50,58],[58,67,57,65]];
const lowerHigh=bars([72,58,49,60,55,43,40,48]);
const higherHigh=bars([72,58,49,76,65,52,40,48]);
const c1 = bars([28,18,24,20,33,50,43,40,54,48,62,55,71,64,55,46,40,37,33,42,48]);
c1[16]=[40,43,39,42];
c1[17]=[42,42,32,33];
const c2 = bars([82,66,60,67,56,61,49,54,41,47,33,25,19,28,39,34,47,56,63]);
const c3 = bars([20,39,33,47,42,59,51,69,60,51,61,72,64,55,44]);
const c4 = bars([18,30,26,43,38,43,48,53,58,64,72,83,92,87,89,76,64,71,59]);
const gap: Bar[] = [[20,24,19,23],[43,47,41,45],[45,46,38,40],...bars([40,49,56,53,62,59,65,61,67,64])];
const gapLater: Bar[] = [...gap,...bars([64,56,48,40,47])];
const delayed=bars([81,68,52,59,66,74,83,87,78,64,60,63,57,60,51,54,45,48,38]);
const climaxes=bars([88,64,62,68,43,39,45,24,20,33,47,41,57,52,62,57,71,64,76,65,52,46,57,69,58,42,39,50]);
for (const [index,high] of [[13,62],[14,62],[15,71],[16,71],[17,76],[18,76]] as const) { const [o,,l,c]=climaxes[index];climaxes[index]=[o,high,l,c]; }
const compete=bars([40,55,72,49,53,48,54,50,57,47,36,29]);
const finalFlag: Bar[] = [[60,65,56,62],[62,64,57,61],[61,68,60,67],[67,68,47,49],[49,55,45,52],[52,53,37,39]];
const channelClimax=bars([30,40,36,48,43,55,51,64,59,69,65,91,76,81,69,74,57,52,62,48,41,50]);
export const chapterTwentyOneCharts: Record<ChapterTwentyOneScenarioId,Definition> = {
 'c21-01': define("Impuls, Pause und Kanal",panel('Impuls und erste Pause','schnell 20 → 50, Rücklauf bis 40',base.slice(0,4),[],[0,1,3]),panel('Spätere Kanalfolge','höhere Swings mit Gegenhandel',base,[[40,'Startzone 40']],[5,7,9]),"Die Tagesform wird schrittweise sichtbar."),
 'c21-02': define("Den Spike an seinen Preisen erkennen",panel('Direkter Impuls','wenig Rückgabe',base.slice(0,2)),panel('Mehr Überlappung','gerichtet, aber nicht derselbe Impuls',balance),"Bargröße braucht Kontext."),
 'c21-03': define("Erste Pause als Phasengrenze",panel('Bis zum Impulsende','Pause noch nicht entstanden',base.slice(0,2)),panel('Erste erkennbare Pause','neue Gegenbars nach dem Impuls',base.slice(0,4),[],[2,3]),"Phasengrenze und Trendende sind verschiedene Dinge."),
 'c21-04': define("Kurzer oder langer erster Rücklauf",panel('Kurzer Rücklauf','Fortsetzung nach kleiner Pause',tight),panel('Längere Balance','mehrfach hin und zurück',balance),"Dauer und Preisstruktur zusammen prüfen."),
 'c21-05': define("Nach dem Impuls: drei mögliche Wege",panel('Kanalfortsetzung','eine mögliche Folge',base),panel('Kräftige Rücknahme','eine andere mögliche Folge',[...base.slice(0,2),...bars([50,38,26,17])]),"Ein Impuls bestimmt nicht den ganzen Tag."),
 'c21-06': define("Der Kanal handelt in beide Richtungen",panel('Enger Kanal','kleine Gegenbars im Trend',tight),panel('Breiter Kanal','größere Swings in beide Richtungen',broad),"Zweiseitiger Handel kann gerichtete Struktur enthalten."),
 'c21-07': define("Enger Kanal und kleiner Gegenraum",panel('Wenig Gegenraum','kleine Rückgaben',tight),panel('Mehr Gegenraum','größere Rückgaben',broad),"Ein Signal ohne Zielraum ist kein vollständiger Plan."),
 'c21-08': define("Breiter Kanal und größere Swings",panel('Kleine Swings','enge Trendfolge',tight),panel('Breite Swings','mehr Raum und mehr Unruhe',broad),"Halteabsicht vor dem Einstieg benennen."),
 'c21-09': define("Starker Impuls und schwächerer Kanal",panel('Schneller Anfang','direkte Strecke bis 50',base.slice(0,2)),panel('Langsamere Folge','Rückläufe im gerichteten Kanal',base),"Tempo und Richtung getrennt lesen."),
 'c21-10': define("Kanalstart als bekannter Bezug",panel('Startzone bereits bekannt','erste Pause bis 40',base.slice(0,4),[[40,'Start 40']]),panel('Späterer Starttest','Preis kehrt zur Zone zurück',test,[[40,'Start 40']],[12]),"Eine bekannte Zone bleibt eine offene Testhypothese."),
 'c21-11': define("Spike als funktionaler Abstand",panel('Ausbruchspunkt 32','Impuls läuft bis Schluss 50',base.slice(0,2),[[32,'Ausbruch 32']]),panel('Erstes Rücklauftief 40','acht Einheiten über dem Bezug',base.slice(0,4),[[32,'Ausbruch 32'],[40,'Rücklauf 40']],[3]),"Funktionalen Abstand und ungehandelten Preisraum trennen."),
 'c21-12': define("Inside-Pause und erste Kanal-Auslösung",panel('Inside und Käufersignal','Signalhoch 53 ist bekannt',signaled.slice(0,4),[[54,'Buy-Stop 54']],[2,3]),panel('Spätere Auslösung','neue Bars handeln über 54',signaled,[[54,'Buy-Stop 54']],[4,5]),"Signalbar ist nicht gleich Einstieg."),
 'c21-13': define("Zwei Zielprojektionen vergleichen",panel('Impuls 20 → 50','30 ab 50 ergibt 80',base,[[80,'Ziel 80'],[50,'Endschluss 50']]),panel('Zweites Bein ab 40','30 ab 40 ergibt 70',base,[[70,'Ziel 70'],[40,'Start 40']]),"30 ab 50 und 30 ab 40 ergeben verschiedene Ziele."),
 'c21-14': define("Projektionsziel und Gewinnmitnahme",panel('Zielzone besucht','Management prüfen',base,[[70,'Zielzone 70']]),panel('Weiterer Anschluss','Ziel ist kein Deckel',keep,[[70,'Zielzone 70']],[10,11,12,13]),"Zielbesuch und Gegen-Signal getrennt prüfen."),
 'c21-15': define("Dritter Schub und Kanalüberschreitung",panel('Drei Kanalspitzen','Schlüsse 58, 65 und 72',base,[],[5,7,9]),panel('Gegenfolge danach','neue Verkäuferstrecke',test,[],[10,11,12]),"Dreischubform ist kein automatischer Short."),
 'c21-16': define("Ausbruch in Kanalrichtung",panel('Erfolgreicher neuer Impuls','Anschluss bleibt oben',keep),panel('Ausbruch zurückgenommen','Rückkehr unter die alte Zone',breakout,[[73,'altes Hoch 73']],[12,13,14]),"Ein großer Ausbruchsbar kann scheitern oder fortsetzen."),
 'c21-17': define("Ausbruch gegen den Kanal",panel('Erster Gegenbruch','Preis gewinnt Abwärtsraum',lowerHigh.slice(0,2)),panel('Rücklauf und neue Folge','neuer Verkäuferanschluss',lowerHigh,[[72,'alter Bezug 72']],[2,3,4]),"Bruch, Rücklauf und neue Auslösung getrennt planen."),
 'c21-18': define("Rücklauftest: höher, gleich oder tiefer",panel('Tieferer Rücklauftest','Erholung bleibt unter 72',lowerHigh,[[72,'alter Bezug 72']],[2]),panel('Höherer Rücklauftest','Überschreitung und Rücknahme',higherHigh,[[72,'alter Bezug 72']],[2,3]),"Rücklaufhöhe und Testergebnis sind verschiedene Fragen."),
 'c21-19': define("Test des Kanalstarts und Gegenreaktion",panel('Starttest nach 72','Rückgang zur Zone 40',bars([72,60,49,40]),[[40,'Start 40']]),panel('Reaktion bis 48','acht von 32 Einheiten',bars([72,60,49,40,48]),[[40,'Start 40'],[48,'Reaktion 48']],[3]),"Eine Beispielquote ist keine Marktgarantie."),
 'c21-20': define("Doppeltief am Kanalstart",panel('Startzone reagiert','neuer Käuferanschluss',bars([55,46,40,47,53]),[[40,'Start 40']]),panel('Buy-Stop bleibt offen','späteres Hoch nur 34',failure,[[35,'Buy-Stop 35'],[40,'Start 40']],[3,4]),"Testzone ist kein garantierter Halt."),
 'c21-21': define("Von Trend zu Range umschalten",panel('Gerichteter Kanal','noch höhere Swings',base),panel('Range wird sichtbar','Starttest und mehrere Gegenreaktionen',test,[[40,'untere Zone 40'],[72,'obere Zone 72']]),"Der neue Kontext ersetzt die alte Gewissheit."),
 'c21-22': define("Beschleunigender Kanal",panel('Gleichmäßigere Folge','normaler Käuferkanal',tight),panel('Beschleunigter Verlauf','spätere Strecke wird steiler',fast,[],[5,6]),"Ein steiler Kanal kann länger laufen als erwartet."),
 'c21-23': define("Zwei oder drei aufeinanderfolgende Klimaxe",panel('Zwei Verkäuferklimaxe','Pausen zwischen den Schüben',climaxes.slice(0,6),[],[0,3]),panel('Dritter Schub möglich','danach neue Käuferreaktion',climaxes.slice(0,10),[],[6,7,8,9]),"Klimax bedeutet Überdehnung, nicht sichere sofortige Umkehr."),
 'c21-24': define("Kanal zuerst, Klimax später",panel('Kanal vor dem Endschub','mehrere gerichtete Swings',channelClimax.slice(0,10)),panel('Später großer Körper','Beschleunigung und Gegenfolge',channelClimax.slice(0,15),[],[10,11,12,13,14]),"Funktionale Ähnlichkeit ändert nicht die Reihenfolge."),
 'c21-25': define("Eröffnungsgap als Impulsvariante",panel('Vorheriger Schluss 23','neue Eröffnung 43',gap.slice(0,3),[[23,'Vorschluss 23']],[1]),panel('Gap und Kanalanschluss','erste Pause liefert Startbereich',gap,[[23,'Vorschluss 23'],[38,'Starttief 38']]),"Sessionbezug für den Gapvergleich benennen."),
 'c21-26': define("Ein Preisweg, mehrere Zeitebenen",panel('18 kleine Ausgangsbars','enge gerichtete Folge',detail),panel('Sechs Dreierbars','identisch aggregierter Preisweg',aggregateThree(detail)),"Aggregation verändert die Ansicht, nicht die Datenhistorie."),
 'c21-27': define("Gegenspikes sammeln Gewicht",panel('Früher Gegenversuch','Käufer behalten noch Raum',c1.slice(0,10),[],[6,8]),panel('Mehr Verkäufergewicht','weitere Gegenstrecke',c1.slice(0,17),[],[12,13,14,15,16]),"Übergang aus der ganzen sichtbaren Folge lesen."),
 'c21-28': define("Entgegengesetzte Impulse und Balance",panel('Konkurrierende Impulse','Käufer bis 72, Verkäufer bis 49',compete.slice(0,5)),panel('Späterer Verkäuferkanal','die neue Folge entscheidet',compete,[],[8,9,10]),"Konkurrierende Impulse brauchen Anschlussprüfung."),
 'c21-29': define("Phasen passend handeln",panel('Impulsphase','schnell gerichtete Preise',base.slice(0,2)),panel('Limitpreis berührt','Preisbesuch ohne Füllgarantie',limitTouch,[[50,'Limit 50']],[1]),"Phase beschreiben, Order gesondert rechnen."),
 'c21-30': define("Dein Phasenprotokoll vor dem nächsten Bar",panel('Bekannte bisherige Anker','Impuls und Startzone notieren',base.slice(0,4),[[40,'Start 40']]),panel('Neue Folge getrennt prüfen','keine frühere Zukunftsinformation',test,[[40,'Start 40']]),"Beschreibung und Orderhistorie getrennt führen."),
 'c21-31': define("Unsaubere Eröffnung und zweite Käuferidee",panel('Erste Gegenreaktion','kleiner grüner Bar im Verkäuferbereich',c1.slice(0,3)),panel('Späterer Käuferimpuls','neue direkte Strecke nach zweitem Versuch',c1.slice(0,7),[],[4,5]),"Überlappung vor Umkehrnamen prüfen."),
 'c21-32': define("Drei Kanalspitzen und Gegenübergang",panel('Käuferkanal mit drei Spitzen','frühere Gegenabschnitte sichtbar',c1.slice(0,12),[],[7,9,11]),panel('Neuer Gegenbruch','größere Verkäuferfolge beginnt',c1.slice(0,16),[],[12,13,14,15]),"Den Gegenübergang zeitgerecht lesen."),
 'c21-33': define("Starttest scheitert und Korrektur wächst",panel('Am früheren Startbereich','Buy-Stop 44 noch nicht ausgelöst',c1.slice(0,17),[[40,'Startzone 40'],[44,'Buy-Stop 44']],[16]),panel('Weiterfall und Erholung','Starttest hielt zunächst nicht',c1,[[40,'Startzone 40']],[16,17,18,19]),"Ein nicht ausgelöstes Signal ist keine Position."),
 'c21-34': define("Bärenkanal über eine Sitzung hinaus",panel('Erster Tagesabschnitt','Bärenkanal beginnt an alter Zone',c2.slice(0,10),[[67,'alte Startzone 67']]),panel('Späterer Kontextblick','Käuferreaktion nach Bärenkanal',c2,[[67,'alte Startzone 67']],[13,14,16,17]),"Sessiongrenze beendet die Testhypothese nicht automatisch."),
 'c21-35': define("Beschleunigung am Bärenkanalende",panel('Normaler Bärenkanal','kleine Rückläufe',c2.slice(0,10)),panel('Spätere Beschleunigung','kein vorher sicherer Boden',c2.slice(0,14),[],[10,11,12]),"Zeit und Gesamtgeldrisiko bleiben begrenzt."),
 'c21-36': define("Neuer Käuferkontext und alter Bärenbezug",panel('Neue Käuferfolge','größere Rückkehr nach dem Tief',c2.slice(11)),panel('Aktueller Käuferkontext','alten Bezug neu prüfen',[...c2.slice(11),...bars([63,56,66])],[[67,'alter Bezug 67']]),"Alte Referenz mit neuer Kontrolle vergleichen."),
 'c21-37': define("Verschachtelte Impulse und Kanäle",panel('Kleiner eigener Abschnitt','Impuls und kurze Pause',c3.slice(0,4)),panel('Größerer Zusammenhang','mehrere innere Folgen',c3),"Bezug und Größe für jeden Test notieren."),
 'c21-38': define("Ein Starttest bleibt aus",panel('Starttest als mögliche Folge','Rückkehr in die alte Zone',test,[[40,'Startzone 40']]),panel('Andere mögliche Folge','neue Hochs ohne Starttest',keep,[[40,'Startzone 40']]),"Ausgebliebene Tests gehören ins Protokoll."),
 'c21-39': define("Früher Verkäuferimpuls, später höherer Test",panel('Tieferer Rücklauf','neuer Verkäuferanschluss',lowerHigh,[[72,'alter Bezug 72']]),panel('Höherer Test scheitert','höheres Hoch vor dem Bärenabschnitt',higherHigh,[[72,'alter Bezug 72']]),"Ein höherer Rücklauf kann vor einem Bärenkanal liegen."),
 'c21-40': define("Gleichmäßiger Mikrokanal und Beschleunigung",panel('Gleichmäßiger Mikrokanal','kleine ähnliche Körper',c4.slice(3,9)),panel('Spätere Beschleunigung','Körper gewinnen mehr Strecke',c4.slice(3,12),[],[6,7,8]),"Kleine Menge kann zu weitem Schutz passen."),
 'c21-41': define("Erster Gegenversuch im Mikrokanal",panel('Erster Verkäuferbar','noch kein großer bestätigter Wechsel',c4.slice(0,4),[],[1]),panel('Käufer setzen fort','Gegenversuch wird zurückgenommen',c4.slice(0,12),[],[2,3,4,5,6,7]),"Erster Gegenbar und bestätigte Umkehr trennen."),
 'c21-42': define("Später Klimax und tieferer Rücklauf",panel('Später Klimaxkörper','Endspitze noch offen',c4.slice(0,12),[],[11]),panel('Komplexere Gegenfolge','neue Verkäuferstrecken',c4,[],[14,15,17]),"Sichtbare Folge vor vermuteten Motiven gewichten."),
 'c21-43': define("Gap, Rücklauf und neuer Kanal",panel('Gap und erste Pause','Starttief ist 38',gap.slice(0,3),[[23,'Vorschluss 23'],[38,'Start 38']]),panel('Neuer Käuferkanal','gerichtete Anschluss-Swings',gap,[[38,'Start 38']]),"Gap und Anschluss getrennt lesen."),
 'c21-44': define("Abflachender Kanal nach dem Gap",panel('Abflachende Fortschritte','neue Hochs werden kleiner',gap),panel('Späterer Gegenbruch','erst jetzt größere Rückgabe',gapLater,[[38,'Start 38']],[12,13,14]),"Abflachung ist ein Befund, kein fertiger Trade."),
 'c21-45': define("Kanalstarttest am Folgetag",panel('Alter Startbereich','bekannter Tiefbezug 38',gap,[[38,'Start 38']]),panel('Späterer Sitzungsabschnitt','Test der alten Zone',bars([64,54,45,38,46]),[[38,'Start 38']],[2,3]),"Historischer Bezug ist kein heutiger Orderbefehl."),
 'c21-46': define("Steiler Kanal als gröberer Impuls",panel('Kleiner steiler Kanal','18 chronologische Ausgangsbars',detail),panel('Gröberer Impuls','sechs identische Dreierbars',aggregateThree(detail)),"Phasennamen gelten auf einer benannten Ebene."),
 'c21-47': define("Kleiner Gegenspike in großer Käuferfolge",panel('Lokaler Verkäuferabschnitt','erste Gegenstrecke',base.slice(0,4)),panel('Größere Käuferfortsetzung','größere Richtung bleibt erhalten',base,[[40,'größere Startzone 40']]),"Lokaler Impuls und größere Kontrolle getrennt prüfen."),
 'c21-48': define("Großer Kanal und späterer Starttest",panel('Kleine Ebene','mehrere innere Pausen',detail),panel('Größere Ebene','eigene Phasenbezüge festlegen',aggregateThree(detail)),"Testziel gehört zur Ebene seines Ursprungs."),
 'c21-49': define("Ein Kanal kann deutlich später beginnen",panel('Längere Gegenphase','späterer Kanalstart noch offen',delayed.slice(0,7),[[81,'alter Ursprung 81']]),panel('Verzögerter Bärenkanal','neue Verkäuferfolge erst später',delayed,[[81,'alter Ursprung 81']],[8,9,12,14,16]),"Alternative Startlesarten offen benennen."),
 'c21-50': define("Rücklauf über den Impulsursprung",panel('Alter Ursprung bekannt','früher Verkäuferimpuls',delayed.slice(0,2),[[81,'Ursprung 81']]),panel('Rücklauf darüber','spätere Rücknahme bleibt möglich',delayed,[[81,'Ursprung 81']],[6,7,8]),"Eine Überschreitung ist echte neue Information."),
 'c21-51': define("Kleiner Verkäuferimpuls im späteren Kanal",panel('Späterer kleiner Impuls','neuer Gegenanschluss',delayed.slice(7,11)),panel('Innerer Bärenkanal','Unterteilung desselben Preiswegs',delayed.slice(7)),"Mehr Musterwörter bedeuten nicht mehr unabhängige Sicherheit."),
 'c21-52': define("Aufeinanderfolgende Verkäuferklimaxe",panel('Zwei schnelle Verkaufsschübe','Boden weiterhin offen',climaxes.slice(0,6),[],[0,3]),panel('Dritter und Gegenreaktion','neue Informationen erst später',climaxes.slice(0,10),[],[6,7,8,9]),"Die letzte Spitze ist erst im Rückblick die letzte."),
 'c21-53': define("Schrumpfende Hochfortschritte im Käuferkanal",panel('Käuferkanal mit drei Spitzen','kleinere Hochgewinne',climaxes.slice(8,19),[[62,'erste Spitze 62'],[71,'zweite Spitze 71'],[76,'dritte Spitze 76']],[5,7,9]),panel('Gegenfolge nach dem Kanal','neue größere Rückgabe',climaxes.slice(8),[[39,'Startbereich 39']]),"Kleinere Hochgewinne und Gegenanschluss getrennt lesen."),
 'c21-54': define("Komplexe Korrektur und neuer Tiefentest",panel('Erstes größeres Gegenbein','kleine innere Unterteilung',climaxes.slice(18,23)),panel('Zweiter größerer Test','Rücklauf und neues Tief',climaxes.slice(18),[[39,'bekannte Zone 39']],[6,7,8]),"Große Korrektur und innere Unterteilung auseinanderhalten."),
 'c21-55': define("Großes Gap und kleine Eröffnungsrange",panel('Kleine Eröffnungsbalance','Grenzen 41 und 53: Breite 12',[[43,50,41,46],[46,53,43,49],[49,51,42,45],[45,50,41,48]],[[41,'Untergrenze 41'],[53,'Obergrenze 53']]),panel('Käuferanschluss möglich','Gegenausbruch bleibt alternative Folge',gap,[[41,'Untergrenze 41'],[53,'Obergrenze 53']]),"Enge Eröffnungsbalance bleibt in beide Richtungen offen."),
 'c21-56': define("Käuferklimax trifft Verkäuferspike",panel('Konkurrierende Impulse','beide Seiten gewinnen Strecke',compete.slice(0,5)),panel('Verkäufer gewinnen Anschluss','Balance wird unten verlassen',compete,[],[8,9,10]),"Das jüngste Anschlussverhalten neu gewichten."),
 'c21-57': define("Letzte Käuferflagge mit kurzer Auslösung",panel('Kurzer Käufertrigger','High 68: Buy-Stop 66 besucht',finalFlag.slice(0,3),[[66,'Buy-Stop 66']],[2]),panel('Trigger wird zurückgenommen','anschließende Verkäuferfolge',finalFlag,[[66,'Buy-Stop 66']],[3,5]),"Ausgelöst und ungetriggert sind verschiedene Zustände."),
 'c21-58': define("Kanal mit spätem Käuferklimax",panel('Geordneter Anfangskanal','Käufer gewinnen mit Rückläufen',channelClimax.slice(0,10)),panel('Später Klimax an Zielzone','schneller Besuch und Rücknahme',channelClimax.slice(0,14),[[90,'bekannte Zielzone 90']],[10,11,12]),"Buy-Vacuum ist eine Deutung der sichtbaren Folge."),
 'c21-59': define("Frühe Käufer-Signale in der Korrektur",panel('Erste kleine Käuferidee','Gegenstrecke noch nicht fertig',channelClimax.slice(11,14)),panel('Weitere Verkäuferfolge','kleine Erholungen scheitern',channelClimax.slice(11),[],[2,4,7,9]),"Zweite Versuchszahl ersetzt keine Kontextprüfung."),
 'c21-60': define("Neuer Verkäuferkanal und zweiter Ausbruch",panel('Verkäuferkanal nach Klimax','neuer Abwärtskontext',mirror(base)),panel('Später Ausbruch und Rückkehr','untere Zone wird neu geprüft',mirror(breakout),[[27,'bekannte untere Zone 27']],[10,11,12,13,14]),"Aktuellen Anschluss statt alten Tagesnamen handeln."),
};

export const chapterTwentyOneDescriptions = Object.fromEntries(
  Object.entries(chapterTwentyOneCharts).map(([id, definition]) => [id, definition.description]),
) as Record<ChapterTwentyOneScenarioId, string>;

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
      className="c21-teaching-line" data-kind={line.kind}
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

export function ChapterTwentyOneChart({ scenario }: { scenario: ChartScenarioId }) {
  if (!Object.hasOwn(chapterTwentyOneCharts, scenario)) return null;
  const definition = chapterTwentyOneCharts[scenario as ChapterTwentyOneScenarioId];
  return <g className="chapter-twenty-one-chart">
    <text className="chart-kicker" x={380} y={28} textAnchor="middle">{definition.heading}</text>
    {definition.panels.map((value, index) =>
      <PanelDrawing key={index} value={value} x={30 + index * 357} />)}
    <text className="chart-small strong" x={380} y={320} textAnchor="middle">{definition.footer}</text>
  </g>;
}

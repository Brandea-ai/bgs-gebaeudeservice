# Suchintention, Themenzuständigkeit und Kannibalisierung

**Status: Phase 4 durchgeführt am 24.09.2026.** Grundlage sind die Inhalte aller 32 Seiten (N027, Seitenberichte), die Eigenangabe des Kunden (N014), die Registerdaten (N033, N037) und eine Suchergebnis-Stichprobe (N038). **Search Console und Google.ch waren nicht zugänglich** (R11, Werkzeuggrenze N038). Alle Aussagen zu Kannibalisierung sind deshalb **Risiko oder HYPOTHESE**, keine beobachtete Kannibalisierung. Es gibt keine Suchvolumina und keine Rankings. Die fünf Leistungen und die Region sind vorläufig (E09, R3, R4).

## 1. Was tatsächlich geprüft wird

Nicht jede gemeinsame Wortverwendung und nicht jedes Ranking mehrerer eigener URLs ist schädliche Kannibalisierung. Prüfe, ob mehrere Seiten dieselbe konkrete Nutzeraufgabe bedienen und dadurch die gewünschte Zielseite, interne Verlinkung oder Conversion-Strecke unklar wird. Ohne Suchdaten zunächst „Risiko/Hypothese“ schreiben.

**Eigener Analyseansatz:** Kombination aus Suchergebnisprüfung, Inhalt/Angebotsvergleich und, soweit zugänglich, Query-URL-Daten aus Search Console. Canonicals sind für gleiche beziehungsweise sehr ähnliche Inhalte vorgesehen und kein Universalwerkzeug für unterschiedliche Leistungen. [S05]

**Tatsächlich angewandt:** Inhalt und Angebot aller Seiten verglichen (H1, Titelvorschläge, Leistungslisten, FAQ, CTA, interne Links). Dazu zwölf Suchanfragen als Stichprobe (N038) und die Eigenangabe des Kunden. Query-URL-Daten: NICHT PRÜFBAR.

### Suchergebnis-Stichprobe (N038)

Werkzeug: Websuche der Prüfumgebung, 24.09.2026 ~12:45 UTC, Standort USA, Suchmaschine nicht festgelegt, je Anfrage 9–10 Treffer. Kein Google.ch, keine Karten- oder Anzeigenplätze sichtbar. Die Tabelle zeigt **Seitentypen**, keine Rankings.

| Anfrage | Beobachtete Seitentypen | Beispiele |
|---|---|---|
| „Unterhaltsreinigung Luzern“ | 8 von 9 sind Leistungs-Orts-Seiten von Reinigungsfirmen oder Exact-Match-Domains, 1 lokale Firmen-Startseite, kein Verzeichnis | `reinigungsfuchs.ch/unterhaltsreinigung/luzern/`, `biagclean.ch/unterhaltsreinigung-luzern/`, `unterhaltsreinigung-luzern.ch` |
| „Büroreinigung Luzern“ | Leistungs-Orts-Seiten mehrerer Anbieter, eine Exact-Match-Domain | `harega.ch/bueroreinigung-luzern/`, `cleanprofis.ch/bueroreinigung/luzern/`, `bueroreinigung-luzern.ch` |
| „Reinigungsfirma Luzern“ | Stadtseiten überregionaler Anbieter, Exact-Match-Domain, lokale Firmen-Startseiten | `mrclean.ch/reinigungsfirma-luzern/`, `reinigungsfirma-luzern.ch`, `bruetsch-cleanup.ch` |
| „Reinigungsfirma Zug“ | 2 Verzeichnisse vorne, dann Stadtseiten und lokale Firmen | `local.ch/de/q/zug/reinigungsfirma`, `ofri.ch/suche/ZG/Zug/Reinigungsfirma`, `tiptopcleaners.ch/reinigungsfirma/zug` |
| „Hauswartung Luzern“ | 1 Verzeichnis, sonst Hauswartungsseiten von Firmen, teils „Luzern und Zug“ | `search.ch/tel/Luzern/Hauswartungen-Liegenschaftenservice`, `biagclean.ch/hauswartung-luzern/`, `vierwald.ch/hauswartungen/` |
| „Hauswartung Zug“ | Gemischt: Verzeichnis, Stellenportal, Schule (Behörde), überwiegend Startseiten lokaler Hauswartfirmen | `search.ch/tel/Zug/Hauswartungen-Liegenschaftenservice`, `luso.ch`, `rzuercher.ch` |
| „Winterdienst Luzern Firma“ | Stark gemischt: Stellen, Kanton, Preisrechner, Verzeichnis, wenige Anbieter. Ein Anbieter führt den Winterdienst unter der Hauswartung | `zentras.lu.ch/aufgaben/winterdienst`, `fixando.ch/schneeraumung/preise/Luzern/Luzern`, `rundumshus.ch/hauswartung/schneeraeumung-und-winterdienst/` |
| „Grundreinigung Sonderreinigung Luzern Firma“ | Allgemeine Stadtseiten von Reinigungsfirmen, eine Grundreinigungsseite, 2 Verzeichnisse | `mrcleaner.ch/grundreinigung-luzern/`, `ofri.ch/suche/LU/Luzern/Reinigungsfirma` |
| „Umgebungspflege Gartenunterhalt Liegenschaft Luzern“ | Überwiegend Gartenbaufirmen, 3 Verzeichnisse, 1 Hauswartfirma, 1 Steuerdokument des Kantons | `egligartenbau.com/umgebungspflege-von-liegenschaften/`, `rzuercher.ch/garten-und-umgebungspflege-3/` |
| „BGS Gebäudeservice Emmenbrücke“ | Registerdienst, Verzeichnisse, Facebook, Bewertungsportal (1 Bewertung), drei ältere Seiten von `bgs-service.ch` | `moneyhouse.ch/…/bgs-gebaeudeservice-gmbh-…`, `local.ch/…/bgs-gebaeudeservice-gmbh-…`, `bgs-service.ch/impressum.html` |
| „"Swiss Reinigungsfirma"“ | Kein Markenname. Mehrere ähnlich benannte Firmen („Top Swiss Reinigungen“, „SwissClean“, „Swiss Clean Service“) | `topswissreinigungen.ch`, `swissclean.swiss` |
| „bgs-gebaeudeservice.vercel.app“ | Die Vorab-Adresse erscheint nicht. Das öffentliche GitHub-Repository erscheint | `github.com/Brandea-ai/bgs-gebaeudeservice` |

**Folgerungen (HYPOTHESE, mit Google.ch zu prüfen):**

- Für „Leistung + Ort“ zeigen die Treffer Leistungsseiten mit Ortsbezug. Eine Leistungsseite, die die reale Region in Titel und H1 nennt („… in Luzern und Zug“), passt zu diesem Muster. Eigene Stadtvarianten je Leistung braucht es dafür nicht.
- Für „Reinigungsfirma + Ort“ und „Hauswartung Zug“ sind Verzeichnisse und Startseiten lokaler Firmen stark. Hier zählen Startseite, Verzeichniseinträge und das Google-Unternehmensprofil [S32].
- „Umgebungspflege“ besetzen Gartenbaufirmen. Die Seite zur Aussen- und Grünflächenpflege konkurriert dort mit Spezialisten. Sie sollte als Teil der Hauswartung auftreten.
- Beim Winterdienst suchen viele nach Preisen, Stellen oder Behördeninfos. Mehrere Anbieter führen ihn unter der Hauswartung, das stützt die Zuordnung zur Hauswartung.
- Der Schweizer Suchbegriff „Hauswartung“ taucht in fast allen Hauswart-Treffern auf. Die neue Website verwendet ihn nirgends (SEITE-P04-001).

## 2. Intent-Matrix

### 2a. Zielbild: Zuständigkeit je Seite (Vorschlag nach Eigenangabe N014, gilt nach R3/R4)

| Seite (Ziel-URL) | Primäre Nutzeraufgabe | Themen-/Query-Cluster (Arbeitshypothese, ohne Volumen) | Nicht ihr Hauptthema | Abgrenzung/Beleg | Primärer nächster Schritt |
|---|---|---|---|---|---|
| Startseite `/` | Anbieter erkennen und einordnen | Marke („BGS Gebäudeservice“), „Reinigungsfirma/Hauswartung Emmenbrücke, Luzern, Zug“ | Leistungsdetails, Preise | Zwei Bereiche, Region, Offerte vor Ort (N014) | Leistung ansehen oder Offerte anfragen |
| Leistungen `/leistungen` | Passende Leistung auswählen | „Gebäudereinigung und Hauswartung Luzern/Zug“, Vergleich der Leistungen | Volltexte der Leistungen | Auswahlhilfe Ausgangslage → Leistung (P02) | Leistungsseite |
| Unterhaltsreinigung `/leistungen/unterhaltsreinigung` | Regelmässige Reinigung vergeben | „Unterhaltsreinigung Luzern/Zug“, „Büroreinigung Luzern/Zug“ (als Abschnitt), Nachfüllservice | Grund- und Bauendreinigung, Hauswartung | Rhythmus, Umfang, Ablauf (P03) | Offerte vor Ort |
| Sonderreinigungen `/leistungen/sonderreinigungen` | Einmalige oder spezielle Reinigung vergeben | „Grundreinigung“, „Bauendreinigung“, weitere Spezialreinigungen nach R3 | Laufende Reinigung | Leistungsliste vom Kunden (SEITE-P05-001) | Offerte vor Ort |
| Hauswartung `/leistungen/hauswartung` | Liegenschaft betreuen lassen | „Hauswartung Luzern/Zug“, „Hausmeisterservice“, „Liegenschaftsbetreuung“, „Facility-Services“ (als Begriff im Text) | Einzelne Reinigungsleistungen | Klassische Hauswartung und infrastrukturelle Pflege (N014) | Offerte vor Ort |
| Winterdienst `/leistungen/winterdienst` | Schneeräumung und Streudienst sichern | „Winterdienst Luzern/Zug“, „Schneeräumung Liegenschaft“ | Grünflächenpflege | Einzige Seite mit Winterdienst-Zusagen (SEITE-P06-002) | Offerte vor dem Winter |
| Aussen- und Grünflächenpflege `/leistungen/aussen-und-gruenflaechenpflege` | Umgebung der Liegenschaft pflegen lassen | „Umgebungspflege Liegenschaft“, „Gartenunterhalt Liegenschaft“, „Grünflächenpflege“ | Winterdienst (nur Link), Gartenbau/Neuanlage | Teil der Hauswartung (N014) | Offerte vor Ort |
| Über uns `/ueber-uns` | Anbieter prüfen und Vertrauen gewinnen | Markensuche, „BGS Gebäudeservice Erfahrungen“ | Keine sechste Leistungsseite | Registerdaten, Personen, Arbeitsweise (P08) | Kontakt |
| Einzugsgebiet `/einzugsgebiet` | Klären, ob das Objekt im Gebiet liegt | „Reinigung/Hauswartung Kanton Luzern/Zug“, Gemeindenamen (nur bestätigte) | Keine Niederlassungen, keine Stadtvarianten | Gemeindeliste nach R4 (P09) | Offerte oder Rückfrage |
| Kontakt `/kontakt` | Unternehmen erreichen | Marke + „Kontakt“, Adresse, Telefon | Kein SEO-Langtext | Bestätigte Kontaktdaten (R5) | Abgeschlossene Anfrage |
| Referenzen `/referenzen` | Belege prüfen | Markensuche, „Referenzen“ | Leistungsbeschreibung | Nur echte, freigegebene Fälle (P26) | Kontakt |
| Ratgeber `/blog/…` | Vorab informieren (Kosten, Auswahl) | „Was kostet eine Unterhaltsreinigung“, „Reinigungsfirma finden Kriterien“ | Leistungsverkauf | Ehrliche Kostenfaktoren, Auswahlkriterien (P29, P30) | Passende Leistung |
| Impressum/Datenschutz | Anbieter- und Rechtsinformationen finden | Keine kommerzielle Optimierung | Leistungskeywords | Registerdaten (N033), tatsächliche Verarbeitung (P12) | Information |

Das ist eine Rollenverteilung, keine bereits validierte Keyword-Zuordnung. Ein Themencluster darf verwandte Formulierungen enthalten; nicht jede Suchphrase braucht eine eigene Seite.

**Bedingte Zusatzseiten, nur wenn R3 die Leistung bestätigt:** Fenster- und Fassadenreinigung (U14, U15 zusammen), Industrie- und Hallenreinigung mit Abschnitt Maschinen (U13, U17, U18 zusammen), Büroreinigung als eigene Seite (U11, nur mit klar anderem Inhalt als die Unterhaltsreinigung), Haushaltsreinigung für Privatpersonen mit Materialpflege (U09, U10 zusammen). Privatjet und Yacht (U07, U08) gehören nach der Eigenangabe nicht dazu.

### 2b. Alt-neu-Mapping (Vorschlag)

Die heutigen Pfade `/basis/`, `/business/` und `/premium/` spiegeln eine Preisstufen-Einteilung, die das Zielbild aufgibt (SEITE-P02-002). **Vor dem Launch ist eine Umstellung am günstigsten.** Die Vorab-Adresse hat vermutlich kaum Suchsignale, belegt ist das nicht (N038). Trotzdem erhält jede alte URL ein fachlich passendes Ziel [S07]. Keine Weiterleitung auf die Startseite.

| Heutige URL | Ziel | Status | Bedingung |
|---|---|---|---|
| `/` | `/` | bleibt | — |
| (fehlt) | `/leistungen` | neu | — |
| `/basis/unterhaltsreinigung` | `/leistungen/unterhaltsreinigung` | 308 | — |
| `/business/bueroreinigung` | `/leistungen/unterhaltsreinigung` (Abschnitt Büros) | 308 | Falls R3 eine eigene Büroreinigung mit eigenem Inhalt bestätigt: `/leistungen/bueroreinigung` |
| `/basis/beschaffung` | `/leistungen/unterhaltsreinigung` (Abschnitt Nachfüllservice) | 308 | — |
| `/basis/sonderleistungen` | `/leistungen/sonderreinigungen` | 308 | Seite nur mit Leistungsliste veröffentlichen (SEITE-P05-001) |
| `/business/baureinigung` | `/leistungen/sonderreinigungen` | 308 | Nur wenn die Sonderreinigungen die Bauendreinigung beschreiben, sonst 410 |
| `/basis/hausmeisterservice` | `/leistungen/hauswartung` | 308 | — |
| `/business/facility-management` | `/leistungen/hauswartung` | 308 | — |
| `/basis/winterdienst` | `/leistungen/winterdienst` | 308 | — |
| `/business/aussenanlagen` | `/leistungen/aussen-und-gruenflaechenpflege` | 308 | — |
| `/business/fensterreinigung`, `/business/fassadenreinigung` | `/leistungen/fenster-und-fassadenreinigung` | 308 | Nur wenn R3 bestätigt. Sonst Fenster → Unterhaltsreinigung (falls dort als Zusatz bestätigt) bzw. Sonderreinigungen, Fassaden → Sonderreinigungen oder 410 |
| `/business/industriereinigung`, `/business/hallenreinigung`, `/business/maschinenreinigung` | `/leistungen/industrie-und-hallenreinigung` | 308 | Nur wenn R3 bestätigt, sonst 410 bzw. Sonderreinigungen bei fachlicher Eignung |
| `/premium/housekeeping`, `/premium/luxusimmobilien` | `/leistungen/haushaltsreinigung` | 308 | Nur wenn R3 Privathaushalte bestätigt, sonst 410. Luxusimmobilien alternativ auf die Sonderreinigungen, wenn diese die Materialpflege beschreiben |
| `/premium/privatjet`, `/premium/yacht` | — | 410 | Ausser R3 bestätigt die Leistung ausdrücklich |
| `/standorte/zuerich`, `/standorte/zug`, `/standorte/luzern` | `/einzugsgebiet` | 308 | Eigene Ortsseiten nur mit echtem lokalem Inhalt (P09) |
| `/ueber-uns`, `/kontakt`, `/impressum`, `/datenschutz`, `/blog` | gleich | bleibt | — |
| `/referenzen` | gleich | 404 bis zu echten Belegen | P26 |
| `/blog/professionelle-gebaeudereinigung` | `/blog/richtige-reinigungsfirma-finden` | 308 | P28 |
| `/blog/reinigungskosten-schweiz` | gleich (Titel neu, Slug prüfen) | bleibt | Nur ohne unbelegte Zahlen (P29) |
| `/blog/richtige-reinigungsfirma-finden` | gleich | bleibt | — |
| `/blog/umweltfreundliche-reinigung` | — | vor Launch nicht ausliefern | P31, bis Angaben des Kunden vorliegen |

**Bisherige Website des Kunden, nur falls die neue Seite `bgs-service.ch` übernimmt (R9):** `/` → `/`, `/gebäudereinigung` → `/leistungen`, `/hauswartung` → `/leistungen/hauswartung`, `/kontakt` → `/kontakt`, dazu die drei älteren Seiten aus N038: `/bgs-gebaeude-serviceleistungen.html` → `/leistungen`, `/gebaeude-serviceleistungen-luzern.html` → `/kontakt` (Inhalt vorher prüfen), `/impressum.html` → `/impressum`. Alle per 308. Vor dem Umzug alle alten URLs vollständig erfassen, etwa per Search Console oder Crawl mit Freigabe des Kunden.

## 3. Prüfverfahren

- [x] Geeignete Suchbegriffe aus dem tatsächlichen Angebot und realen Kundenfragen ableiten. → *Erledigt als Arbeitshypothese: Begriffe aus der Eigenangabe (N014), den FAQ der Seiten und der Stichprobe (N038). Echte Kundenfragen fehlen (R10).*
- [x] Land, Region, Sprache, Gerät und Prüfdatum festhalten. → *Festgehalten in N038: Deutsch, 24.09.2026. BEFUND Werkzeuggrenze: Standort USA, Gerät und Suchmaschine nicht steuerbar. Eine Prüfung mit Google.ch (Region Luzern/Zug, mobil) steht aus.*
- [x] Brand, Non-Brand, Informationssuche, Anbietervergleich und konkrete Beauftragungsabsicht trennen. → *Erledigt in 2a: Marke (Startseite, Über uns, Kontakt), Anbietersuche mit Ort (Leistungsseiten, Startseite), Information (Ratgeber), Vergleich (Übersicht, Ratgeber „Reinigungsfirma finden“).*
- [x] Für jeden wichtigen Cluster dokumentieren, welche Seitentypen Google tatsächlich zeigt. Ein Verzeichnis, ein Ratgeber und eine Leistungsseite erfüllen oft unterschiedliche Aufgaben. → *Teilweise: Seitentypen der Stichprobe dokumentiert (Abschnitt 1), aber nicht von Google. NICHT PRÜFBAR für Google.ch.*
- [x] Überlappende eigene URLs anhand Hauptaussage, Leistungsumfang, H1, Titel, Text, CTA und internen Linkzielen vergleichen. → *Erledigt, Konflikte K01–K13 in Abschnitt 4.*
- [ ] Bei vorhandenen Suchdaten wechselnde Ziel-URLs, Impressionen, Klicks und qualifizierte Anfragezuordnung über einen sinnvollen Zeitraum analysieren. → *NICHT PRÜFBAR: keine Search Console, keine Messung (R11, GLOBAL-029). Nach dem Launch nachholen, Erfolgskriterien je Konflikt in Abschnitt 4.*
- [x] Saison, Relaunch, neue Indexierung, Suchvolumen und Messrauschen als alternative Ursachen berücksichtigen. → *Berücksichtigt: Die Website ist noch nicht gelauncht, Beobachtungen nach dem Launch sind anfangs Neuindexierung. Winterdienst und Grünflächenpflege sind saisonal, ihre Auswertung braucht mindestens eine Saison.*
- [x] Interne Links auf widersprüchliche Themenzuweisungen prüfen. → *BEFUND: Die Hallenreinigung verlinkt im ersten Absatz „Unsere Industriereinigung“ (SEITE-P18-002). Startseitenkarten führen auf die erste Leistung einer Gruppe (SEITE-P02-001). Die Zürich-Seite berechnet Links aus Anzeigenamen, 7 davon ins Leere (GLOBAL-016). Zwischen verwandten Leistungen gibt es keine erklärenden Links.*
- [x] Städteseiten auf echte regionale Informationen, Leistungserbringung und eigenen Nutzen prüfen. → *BEFUND: Varianten ohne lokalen Nutzen, Zürich ausserhalb des Arbeitsgebiets (SEITE-P09-002, K09).*
- [x] Unterschiede zwischen Homepage, Leistungsübersicht und Detailseiten nicht durch identische Texte nivellieren. → *BEFUND/Risiko: Die Übersicht fehlt. Die Vorschläge für Startseite, Übersicht und Facility Management (Pfad a) nutzen dieselbe Formel „Reinigung und Hauswartung … in Luzern und Zug“ (K11). Auflösung in Abschnitt 4.*

## 4. Entscheidung pro Überschneidung

| Situation | Mögliche Empfehlung | Erforderlicher Nachweis |
|---|---|---|
| Verschiedene Nutzeraufgaben, beide Seiten sinnvoll | Behalten, Abgrenzung und Links verbessern | Unterschiedlicher Zweck klar nachvollziehbar |
| Gleiche Aufgabe, eine inhaltlich schwache Dublette | Konsolidierung prüfen | Nachfrage, bestehende Signale, Inhalt und Redirect-Ziel geprüft |
| Technische URL-Varianten mit gleichem Inhalt | Konsistente Canonical-/Redirect-Strategie | Tatsächliche Gleichheit und keine legitime getrennte Nutzung |
| Regionalseiten unterscheiden sich fast nur im Ortsnamen | Eigenständigen Nutzen nachweisen oder Zusammenführung prüfen | Reale Abdeckung und inhaltliche Differenzierung |
| Zwei eigene relevante Suchtreffer ohne beobachteten Schaden | Nicht automatisch eingreifen | Sichtbarkeit und Geschäftsnutzen gemeinsam betrachten |

Keine unterschiedlichen Leistungsseiten pauschal auf die Homepage kanonisieren. Keine erfolgsrelevante Seite vorschnell auf `noindex` setzen. URLs bei Zusammenlegung mit fachlich passendem Ziel behandeln; nicht alle alten Pfade auf die Homepage umleiten. [S05][S07]

### Konflikte im Bestand

Alle Einträge sind HYPOTHESE bzw. Risiko: Ohne Suchdaten ist keine Kannibalisierung beobachtet. „Nachgewiesen“ ist jeweils die inhaltliche Überschneidung.

| ID | URLs | Beobachtung (Nachweis) | Unsicherheit | Empfehlung | Erfolgskriterium nach Umsetzung |
|---|---|---|---|---|---|
| K01 | `/basis/unterhaltsreinigung`, `/business/bueroreinigung` | Beide beschreiben regelmässige Büroreinigung, 10 von 12 Listenpunkten sind wortgleich (SEITE-P03-002, -P13-002) | Ob Büros eine eigene Zielgruppe sind (R10) | Zusammenlegen in die Unterhaltsreinigung mit Abschnitt „Büros und Gewerbeflächen“, 308. Nur bei eigener Zielgruppe zwei Seiten, dann mit getrenntem Fokus (siehe Titel-/H1-Empfehlungen) | Eine URL erhält die Impressionen für „Unterhaltsreinigung/Büroreinigung + Ort“, kein Wechsel der Ziel-URL über 90 Tage (Search Console) |
| K02 | `/basis/hausmeisterservice`, `/business/facility-management` | FM enthält einen eigenen Block „Hausmeisterservice“ und verspricht mehr als die Eigenangabe (SEITE-P04-002, -P20-003, -P20-004) | Ob der Kunde „Facility-Services“ als eigenes Paket verkauft (R3) | Zusammenlegen in „Hauswartung“, 308. „Facility-Services“ als Begriff im Text | Eine URL für „Hauswartung/Hausmeisterservice/Facility-Services + Ort“ |
| K03 | `/basis/winterdienst`, `/business/aussenanlagen` (Reiter und FAQ), Hausmeisterservice, Facility Management | Vier Seiten beschreiben den Winterdienst mit abweichenden Zusagen („ab 2cm“, „Eigene Streufahrzeuge“, „24/7“) (SEITE-P06-002, -P07-001) | gering | Winterdienst nur auf einer Seite, die anderen verlinken mit dem Linktext „Winterdienst“. Zusagen einheitlich und belegt (SEITE-P06-001) | Volltextsuche findet Winterdienst-Zusagen nur auf der Winterdienst-Seite |
| K04 | `/business/industriereinigung`, `/business/hallenreinigung`, `/business/maschinenreinigung` | Gleiche Nutzeraufgabe (Industrie-/Gewerbereinigung). Fast gleiche H1-Vorschläge („für Produktion und Lager“ bzw. „für Lager und Produktion“). Die Hallenreinigung verlinkt „Unsere Industriereinigung“ (SEITE-P15-003, -P18-002) | Ob der Kunde Industrie überhaupt anbietet (R3) | Ohne Bestätigung: 410 bzw. Sonderreinigungen. Mit Bestätigung: eine Seite „Industrie- und Hallenreinigung“ mit Abschnitt „Maschinen und Anlagen“ | Eine URL für den Cluster, keine konkurrierenden H1 |
| K05 | `/business/fassadenreinigung`, `/business/fensterreinigung` | Überschneidung bei Glasfassaden, beide mit „Zertifizierte Höhenarbeiter“ (SEITE-P16-004, -P17-003) | R3 | Mit Bestätigung eine Seite „Fenster- und Fassadenreinigung“, sonst in die Sonderreinigungen bzw. Unterhaltsreinigung | wie K04 |
| K06 | `/premium/housekeeping`, `/premium/luxusimmobilien` | Gleicher Einstieg, gleiche FAQ mit anderen Antworten, gleiche Stichworte im Chat (SEITE-P23-004, -P24-004) | R3, R7 (Privatkunden?) | Ohne Bestätigung 410. Mit Bestätigung eine Seite „Haushaltsreinigung“ mit Abschnitt Materialpflege | eine URL, keine widersprüchlichen FAQ-Antworten |
| K07 | `/basis/sonderleistungen`, `/business/baureinigung`, FAQ der Unterhaltsreinigung, Blog „Professionelle Gebäudereinigung“ | Unklar, welche Seite Grund-, Bau- und Endreinigung erklärt. Der Blog definiert Unterhaltsreinigung als „regelmäßige Grundreinigung“ (SEITE-P05-002, -P14-003, -P28-001) | Leistungsliste der Sonderreinigungen (R3) | Die Sonderreinigungen sind zuständig für Grund-, Bauend- und Spezialreinigung. Die Unterhaltsreinigung beantwortet den Unterschied in einem Satz und verlinkt. Der Blog übernimmt keine abweichende Definition | Einheitliche Definitionen auf allen Seiten, Link aus der FAQ der Unterhaltsreinigung |
| K08 | `/basis/beschaffung`, `/basis/unterhaltsreinigung` | Nachfüllen von Material während der Reinigung ist eine Zusatzleistung, kein eigener Dienst (SEITE-P25-001, -P25-003) | gering | Abschnitt „Nachfüllservice“ in der Unterhaltsreinigung, 308 | — |
| K09 | `/standorte/zuerich`, `/standorte/zug`, `/standorte/luzern` | Varianten einer Vorlage mit erfundenen Spezialisierungen, Zürich ausserhalb des Gebiets (SEITE-P09-001, -P09-002) | R4 | Eine Seite „Einzugsgebiet“, 308 von allen drei. Ortsseiten nur mit echtem lokalem Inhalt | Keine Ortsseite ohne eigenen Inhalt, keine Zürich-Aussage ohne Bestätigung |
| K10 | `/blog/professionelle-gebaeudereinigung`, `/blog/richtige-reinigungsfirma-finden` | 5 von 8 „Qualitätsmerkmalen“ decken sich (SEITE-P28-002) | gering | Zusammenführen in P30, 308 | Eine URL für „Reinigungsfirma finden/Qualitätsmerkmale“ |
| K11 | `/`, künftige `/leistungen`, Facility Management (Pfad a) | Drei Vorschläge mit „Reinigung und Hauswartung … in Luzern und Zug“ | gering | Startseite: Marke vorne (Titel „BGS Gebäudeservice – …“). Übersicht: „Leistungen: …“. Facility Management entfällt (K02) oder wird Abschnitt „Aus einer Hand“ auf `/leistungen` | Unterschiedliche Titel und H1, jede Seite mit eigener Aufgabe (2a) |
| K12 | Blog „Reinigungskosten“, Zürich-FAQ, Fassaden, Privatjet | Preisangaben an vier Stellen, teils identische Zahlen, teils als eigenes Angebot (SEITE-P09-001, -P16-003, -P21-003, -P29-001) | Ob der Kunde Preise nennen will (R6) | Kosteninformation nur an einer Stelle (Ratgeber P29), ohne unbelegte Zahlen. Keine Preise auf Leistungs- oder Ortsseiten ohne Freigabe | Volltextsuche findet CHF-Beträge nur mit Freigabe und Stand |
| K13 | `/standorte/zuerich` für „Reinigungsfirma Zürich“ | Die Seite bedient eine Suchintention in einem Gebiet, das der Kunde nicht angibt (N014) | R4 | Entfernen (K09). Zürich nur nennen, wenn R4 es bestätigt | Keine Zürich-Aussage ohne Bestätigung |

**Technische URL-Varianten:** `/kontakt/` leitet per 308 auf `/kontakt` (BESTANDEN). Grossschreibung liefert 404 (BESTANDEN). Parameter wie `?utm_source=` liefern 200 ohne Canonical (N008). Mit selbstreferenzierenden Canonicals auf die Launch-Domain ist das gelöst (GLOBAL-010, -018).

### Konkrete Titel-, H1- und Linktext-Empfehlungen für die Abgrenzungen

- **K01, falls beide Seiten bleiben:** Unterhaltsreinigung H1 „Unterhaltsreinigung für Wohn- und Geschäftsliegenschaften in Luzern und Zug“ (statt „für Büros und Gewerbe“, P03). Büroreinigung H1 „Büroreinigung für Firmen in Luzern und Zug“ (P13). Querlinks: „Treppenhaus und Allgemeinflächen? → Unterhaltsreinigung“, „Nur Büroflächen? → Büroreinigung“. **Falls zusammengelegt (Standard):** Titel und H1 aus P03, Abschnittsüberschrift „Büros und Gewerbeflächen“ mit Sprungmarke `#bueros`. Auf `/leistungen` lautet der Linktext „Büroreinigung“ mit Ziel `/leistungen/unterhaltsreinigung#bueros`.
- **K02:** Titel „Hauswartung und Hausmeisterservice in Luzern und Zug | BGS Gebäudeservice“ (P04). Linktext überall „Hauswartung“. „Facility Management“ nicht als Menüpunkt.
- **K03:** Auf Hauswartung und Aussenpflege nur ein Satz mit Link „Winterdienst“ → `/leistungen/winterdienst`.
- **K04 (mit Bestätigung):** Titel „Industrie- und Hallenreinigung in Luzern und Zug | BGS Gebäudeservice“, H1 „Industrie- und Hallenreinigung für Produktion und Lager in Luzern und Zug“, Abschnitt „Maschinen und Anlagen“.
- **K05 (mit Bestätigung):** Titel „Fenster- und Fassadenreinigung in Luzern und Zug | BGS Gebäudeservice“.
- **K06 (mit Bestätigung):** Titel „Haushaltsreinigung für Privatpersonen in Luzern und Zug | BGS Gebäudeservice“ (P23), Abschnitt „Materialpflege“ (P24).
- **K07:** Linktext in der FAQ der Unterhaltsreinigung: „Grund- und Sonderreinigungen“ → `/leistungen/sonderreinigungen`.
- **K11:** Startseite „BGS Gebäudeservice – Reinigung und Hauswartung in Luzern und Zug“, Übersicht „Leistungen: Gebäudereinigung und Hauswartung in Luzern und Zug | BGS Gebäudeservice“. Die H1 der Übersicht beginnt mit „Unsere Leistungen“.

## 5. Lokal- und Spam-Risiken

Ortsseiten nur erstellen oder erhalten, wenn sie eine reale regionale Nutzerfrage besser beantworten. Austauschbare Massenvarianten zur Besetzung von Suchergebnissen können in den Bereich von Doorway- beziehungsweise skalierter Spam-Produktion fallen. [S33]

Google-Unternehmensprofil und lokales Ranking separat untersuchen. Relevanz, Entfernung und Bekanntheit lassen sich nicht durch das Wiederholen eines Ortsnamens vollständig ersetzen. [S32]

**Ergebnis:**

- **Ortsseiten:** Die drei Standortseiten sind austauschbare Varianten, eine liegt ausserhalb des Gebiets. Empfehlung: zusammenführen (K09). Leistungs-Orts-Kombinationen wie „Unterhaltsreinigung Luzern“ und „Unterhaltsreinigung Zug“ **nicht** als eigene Seiten anlegen. Die Region steht in Titel und H1 der Leistungsseite.
- **Google-Unternehmensprofil:** NICHT PRÜFBAR (kein Zugang, R11). Die Stichprobe zeigt Einträge bei local.ch, search.ch, ofri.ch, Moneyhouse, Facebook und einem Bewertungsportal (N038). Vorgabe: Name „BGS - Gebäudeservice GmbH“ bzw. die nach R2 festgelegte Marke, Adresse Tannhof 10, 6020 Emmenbrücke und die nach R5 bestätigte Telefonnummer überall gleich pflegen. Die Website-URL in allen Einträgen nach dem Launch aktualisieren.
- **Verwechslung:** Unter „Swiss Reinigungsfirma“ gibt es keinen Markenschutz, dafür ähnliche Namen anderer Firmen (N038). Der Auftritt unter diesem Namen schwächt die Markensuche nach BGS (GLOBAL-020).

## 6. Zu liefernde Ergebnisse

- [x] Eine eindeutige Zuständigkeitsmatrix für alle kommerziellen Kernseiten. → *Abschnitt 2a.*
- [x] Pro Konflikt: betroffene URLs, Beobachtung, Nachweis, Unsicherheit, Empfehlung und späteres Erfolgskriterium. → *Abschnitt 4, K01–K13.*
- [x] Konkrete Titel-/H1-/Linktext-Empfehlungen für tatsächlich problematische Abgrenzungen. → *Abschnitt 4, Titel-, H1- und Linktext-Empfehlungen.*
- [x] Ein Alt-neu-Mapping für begründet vorgeschlagene Zusammenlegungen oder URL-Änderungen. → *Abschnitt 2b, einschliesslich der bisherigen Kunden-Website (bedingt, R9).*
- [x] Keine Änderung durchführen; sämtliche Maßnahmen im Backlog dokumentieren. → *Keine Änderung durchgeführt. Übertrag ins Backlog in Phase 5 (06).*

## 7. Querprüfung (weitere Punkte der Phase 4)

### 7a. Widersprüchliche Aussagen über Seiten hinweg

| Thema | Aussagen auf der Website (Fundstellen) | Beleg | Folge |
|---|---|---|---|
| Firmenname | „Swiss Reinigungsfirma“ (31 Seiten), Logo „SWISS REINIGUNG“, Titel „BGS Gebäudeservice“ | Register: „BGS - Gebäudeservice GmbH“ (N033) | GLOBAL-020, SEITE-P11-001 |
| Region | „Zürich, Zug und Luzern“ (fast alle Seiten), „Schweizweit“ (Startseite, Aussenanlagen), „gesamten Zentralschweiz“ (Kontakt), Flugplätze in sechs Kantonen (Privatjet), „Mittelmeerhäfen“ (Yacht) | Eigenangabe: Kantone Luzern und Zug (N014) | GLOBAL-021, R4 |
| Erreichbarkeit und Reaktion | „24/7“ (15 Seiten) gegenüber „Mo-Fr 7:00-18:00“ (Standortseiten). Rückmeldung „24 Stunden“ (Formular, Kontakt), „12 Stunden (werktags)“ (Chat), „in Kürze“ (Erfolgsmeldung). Vor Ort in „1–2“ bzw. „2–4 Stunden“ | fehlt | GLOBAL-021, -028, R5 |
| ISO und Zertifikate | Zertifizierungsaussagen auf 14 Seiten, u. a. „ISO 9001 zertifiziert“ (Büroreinigung), „ISO 9001 & ISO 14001“ (Zürich), „ISO 27001“ (Zug), „ISO-Zertifizierung erreicht“ (Referenzen), „Zertifizierte Höhenarbeiter“ (Fassaden, Fenster), gegenüber „in Bearbeitung“ (Impressum) | Impressum widerlegt die ISO-Aussagen, die übrigen sind unbelegt | GLOBAL-021 |
| Versicherung | „CHF 10 Millionen“ (Industrie, Luxusimmobilien, Privatjet), „CHF 5 Millionen“ (Housekeeping), „umfassend“ (Kontakt) | fehlt | Nachweisregister, R6 |
| Gründung und Erfahrung | „2005“ (Über uns), „15+ Jahre“ (Startseite, Baureinigung), „seit 2008“ (Privatjet) | Register: Zweck Reinigung seit 2012 (N037) | Nachweisregister, R6 |
| Kundenzahl | „500+“ gesamt (Startseite, Referenzen) gegenüber „Über 500 … in Zürich“ | fehlt | Nachweisregister |
| Reinigungsmittel | „konsequent“ ökologisch (Zürich), „Alle Mittel sind umweltfreundlich“ (Maschinen) gegenüber „Auf Wunsch … ökologische Produkte“ (Unterhaltsreinigung) | fehlt | SEITE-P31-001, R6 |
| Kontaktdaten | `info@bgs-service.ch` gegenüber `info@swiss-reinigung.ch` (ohne MX). Festnetz auf der neuen Seite, Mobilnummer auf der bisherigen | N013, N014, N038 | GLOBAL-020, R5 |
| Preise | CHF 8–12/m² monatlich und 45–65/h (Zürich, Blog), CHF 8–15/m² (Fassaden), ab CHF 800 (Privatjet) gegenüber der Eigenangabe, nach der die Offerte nach einem Besuch vor Ort entsteht | fehlt | K12 |
| Leistungsnamen | vier Varianten für die Aussenanlagen, zwei für Beschaffung, Gruppen „Business Lösungen/Services/B2B“ | — | SEITE-P02-002 |
| Winterdienst | unterschiedliche Zusagen auf vier Seiten | fehlt | K03 |

**Vorgabe:** Eine zentrale Faktenliste (Firmenname, Kontakt, Region, Erreichbarkeit, Rückmeldezeit, Versicherung, Zertifikate, Leistungsnamen), aus der alle Seiten, der Chat-Katalog in `server/gemini.ts` und die strukturierten Daten gespeist werden. Grundlage ist das Nachweisregister in 01. Abnahme: Eine Volltextsuche findet je Thema genau eine Aussage.

### 7b. Metadaten

Heute tragen alle 32 Seiten denselben Titel und dieselbe Beschreibung (GLOBAL-010). Die in Phase 3 vorgeschlagenen Titel sind **alle verschieden** (Abgleich der 29 Titelvorschläge, P28 und P31 ohne Vorschlag wegen Zusammenführung bzw. Zurückstellung). Überschneidungen gibt es nur inhaltlich (K01, K04, K11). Marke im Titel: „BGS Gebäudeservice“ als Marke, „BGS - Gebäudeservice GmbH“ nur bei Impressum und Datenschutz (R2).

### 7c. Interne Links

- Alle 28 Nicht-Blog-Seiten hängen an Navigation und Footer. Die Blogartikel sind nur von `/blog` erreichbar (GLOBAL-017).
- 7 defekte Links auf der Zürich-Seite (GLOBAL-016). In Zug und Luzern ist keine Leistungskarte verlinkt (SEITE-P09-002).
- Kontextlinks zwischen verwandten Leistungen fehlen fast überall. Linkempfehlungen stehen je Seitenbericht in Abschnitt 4.
- **Link um Button:** Viele Handlungsaufforderungen sind ein Link, der einen Button umschliesst (`<a><button>…</button></a>`, z. B. „Weiterlesen“, „Mehr erfahren“, SEITE-P27-002). Das ist verschachtelter interaktiver Inhalt, laut HTML unzulässig. Tastatur und Screenreader erhalten zwei Stopps oder eine unklare Rolle. Nachtrag zu GLOBAL-026.

### 7d. Designkonsistenz

- Die „Team“-Bilder zeigen je nach Seite andere Arbeitskleidung: rot/grau (Startseite), dunkelblau mit Schweizerkreuz (Über uns), drei Varianten auf Hallen- und Maschinenseite (SEITE-P18-003, -P19-004). Das ist ein weiteres Indiz für KI-Bilder (GLOBAL-023).
- Gleiche Seitenmuster auf allen Leistungsseiten (Hero, Merkmalskarten, Reiter, FAQ, CTA), unterschiedlich benannte Gruppen (SEITE-P02-002). Emoji in einer Überschrift (Impressum).
- Das Gesamtbild beschreibt GLOBAL-032. Die Seitenprüfung bestätigt es, neue Designbefunde gibt es nicht.

### 7e. Seitenvorlagen

- Es gibt eine Komponente `ServiceTemplate`, die aber **keine der 32 Seiten nutzt**. Jede der 18 Leistungsseiten ist eine eigene Datei mit 141–327 Zeilen und weitgehend demselben Aufbau. Deshalb wiederholen sich dieselben Fehler auf allen Seiten: wirkungslose `SEO`-Komponente (N015), `AppointmentButton` zum defekten Chat (22 Seiten), versteckte Reiter und FAQ (GLOBAL-011), Region „Zürich, Zug und Luzern“.
- **Vorgabe für den Umbau:** eine datengetriebene Vorlage für Leistungsseiten plus die zentrale Leistungs- und Faktenliste (7a, SEITE-P02-002). Die Inhalte je Leistung kommen vom Kunden (R3). Das behebt viele Seitenbefunde auf einmal und verhindert neue Abweichungen.

### 7f. Gemeinsame Backend-Abhängigkeiten

| Abhängigkeit | Genutzt auf | Zustand | Folge bei Ausfall |
|---|---|---|---|
| Footer-Formular → `/api/contact` → Resend → `info@brandea.de` | alle 32 Seiten | Erfolg ohne Zustellnachweis, falscher Empfänger (GLOBAL-003) | Anfragen gehen von jeder Seite still verloren |
| `AppointmentButton` „Termin vereinbaren“ → Chat → `/api/chat` → Google Gemini | 22 Seiten | Schlüssel ungültig, Fehler als HTTP 200 (GLOBAL-002) | Der Terminweg fällt auf 22 Seiten aus |
| Chat-Weiterleitung `/api/chat-to-specialist` → E-Mail an die Agentur | Chat | nicht in der Datenschutzerklärung (P12) | wie Formular |
| KI-Branchen-Berater → `/api/industry-analysis` → Gemini | Startseite | vermutlich wie Chat, bewusst nicht ausgelöst | Prominenter Fehler in der ersten Ansicht (SEITE-P01-002) |
| Cookie-Banner (`localStorage`) | alle Seiten | Auswahl wirkungslos (GLOBAL-019, SEITE-P12-001) | — |
| Google Maps und Google Fonts | `/kontakt` | ohne Schlüssel, ohne Einwilligung (GLOBAL-019) | Fehlermeldung in der Karte |

**Folge für die Priorisierung:** Zwei Schlüssel (Resend, Gemini) entscheiden über alle Anfragewege der Website. Ohne Monitoring fällt ein Ausfall nicht auf (GLOBAL-029). Das stützt die P0-Einstufung von GLOBAL-002 und -003.

---

**Quellen zu dieser Datei:** siehe 09-QUELLEN.md (S05, S07, S32, S33).

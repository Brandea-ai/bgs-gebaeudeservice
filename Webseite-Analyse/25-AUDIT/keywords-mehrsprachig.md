# Keyword-Daten mehrsprachig (M5) und Prüfung der deutschen Titelbegriffe (T2)

**Stand 28.09.2026.** Befund M5 und T2 aus `25-AUDIT/seo.md`. Quelle: DataForSEO, Google Ads Suchvolumen live (`/v3/keywords_data/google_ads/search_volume/live`), Standort Schweiz (location_code 2756), vier Aufgaben mit language_code en, fr, it, de, zusammen 532 Messwerte, dazu drei SERP-Abrufe. Kosten 0,366 USD. Volumen sind Monatsmittel September 2025 bis August 2026 und Momentaufnahmen. Die vollständige Messtabelle liegt daneben in `keywords-mehrsprachig.csv`.

Grundlage für Titel, H1 und Beschreibungen aller Sprachen im Umbau (`26-UMBAU-SPEZ.md`, Abschnitt 3, SEO). Die Empfehlungen ändern nichts im Code. Übersetzungen bleiben unter dem Lektorat durch Muttersprachler (E72). Ranking und Anfragen sind nicht garantierbar.

## Kurzfazit

1. **Der Sprachfilter trennt das Volumen nicht.** Mit language_code en liefert «entreprise de nettoyage» 1'600 wie mit fr, «impresa di pulizie» 170 wie mit it, «hauswartung» 2'400 und «umzugsreinigung» 720 wie mit de. Jede Zahl gilt also für die Zeichenfolge in der ganzen Schweiz, egal in welcher Sprache die Person Google nutzt. Französische Nachfrage dürfte deshalb überwiegend aus der Romandie stammen (das SERP zu «conciergerie» zeigt Anbieter um Genf), italienische aus dem Tessin, also ausserhalb des Einzugsgebiets. Das ist eine Ableitung, die Daten trennen nicht nach Region.
2. **Mit Ortszusatz gibt es in Englisch, Französisch und Italienisch fast keine Daten.** Von 83 gemessenen Begriffen mit einem Ort im Einzugsgebiet (EN 35, FR 26, IT 22) liefern drei einen Wert, je 10: «cleaning company zug», «housekeeping zug», «nettoyage lucerne». Für diese Seiten empfehlen wir die natürlichste Formulierung mit dem Kopfbegriff vorne. Verkehr aus der Suche wird in EN, FR und IT klein bleiben; der Nutzen der Seiten liegt vor allem bei Besuchern, die schon suchen oder verwiesen werden.
3. **Wo es Daten gibt, sind sie eindeutig.** FR: «entreprise de nettoyage» 1'600, «conciergerie» 880 (mehrdeutig), «nettoyage vitres» 590 und «nettoyage de vitres» 140, «nettoyage de fin de bail» 320. IT: «impresa di pulizie» 170, «ditta di pulizie» 140. EN: «cleaning services» 1'000, «deep cleaning» 320, «facade cleaning» 90, «window cleaning» 70, «move out cleaning» 50.
4. **T2 ist für alle sechs deutschen Seiten bestätigt.** Die zusammengezogenen Formen haben höchstens 10 Suchen oder keine Daten, die ausgeschriebenen Hauptbegriffe 90 bis 1'600. Stärkster Fall: «fenster und fassadenreinigung» 10 gegen «fensterreinigung» 1'600 und «fassadenreinigung» 1'300. Eine Abweichung: Im Gartentitel «Gartenunterhalt» (320) statt «Umgebungspflege» (10).
5. **Dasselbe Muster steckt in Englisch und Französisch.** «Office and practice cleaning», «Deep and special cleaning», «Window and facade cleaning», «Industrial and warehouse cleaning» trennen den Hauptbegriff, ebenso die französische H1 der Umzugsreinigung («de déménagement et de fin de bail»). Vorschläge je Seite unten.
6. **Zwei Kopfbegriffe sind mehrdeutig und brauchen einen Zusatz:** «conciergerie» (SERP: Airbnb- und Privat-Conciergerien, nur 2 von 9 Treffern Hauswartung) und «custode» (SERP: Stellensuche). Empfehlung FR «conciergerie d’immeubles», IT bleibt bei «custodia di stabili».

## Methode und Lesehilfe

- **Auswahl:** je Seite und Sprache 2 bis 11 plausible Varianten (Fachbegriff, Umgangsform, mit und ohne Funktionswort, mit Ort), dazu die deutschen Varianten aus T2. Liste der Seiten aus `content/de/seo.ts` (29 Einträge).
- **Werte:** Google Ads rundet auf Stufen (10, 20, 30, 40, 50, 70, 90, 110, 140, 170, 210, 260, 320, 390, 480, 590, 720, 880, 1'000, 1'300, 1'600 …). Benachbarte Stufen sind kein belastbarer Unterschied.
- **k. D.** heisst: Google Ads liefert keine Daten (unter der Meldeschwelle oder nicht erfasst). **0** heisst: ausdrücklich null. **(G)** heisst Gruppenwert: Google meldet für nahe Varianten dieselbe Zahl und Monatsreihe (etwa Singular und Plural, mit und ohne «de»), die Zahl gilt für die Gruppe, nicht zusätzlich je Variante. Erkannt an identischer Monatsreihe ab Volumen 20.
- **Hauptbegriff in natürlicher Form:** Wo nur die Kurzform ohne Funktionswort gemessen wurde («pulizia uffici»), steht der Hauptbegriff in der Schreibweise für die Website («pulizia di uffici») mit dem Hinweis «gemessen als». Wo beide Formen gemessen wurden und nur die Kurzform Daten hat, stehen beide Werte da, etwa «nettoyage de déménagement» k. D., Kurzform «nettoyage déménagement» 70. Google Ads fasst solche Formen nicht immer zusammen; für die Website zählt die grammatisch vollständige Form.
- **Spalte «Heute»:** Steht der Hauptbegriff heute zusammenhängend im Titel und in der H1? Geprüft ohne Gross- und Kleinschreibung, Bindestriche und Funktionswörter (de, di, in, the …), gegen den Bestand im Integrationszweig (Commit `36307e9`).
- **Titel ohne Marke**, `metaFor()` hängt sie an (Startseite: Marke vorne, steht in `seo.ts`). Ziel laut Spezifikation: höchstens rund 50 Zeichen. Die Länge steht beim Vorschlag.
- **Nicht geprüft:** Rankings (die Seite ist `noindex`), stadtgenaue Volumen (Auftrag: nur Schweiz 2756), Suchabsicht per SERP ausser bei den drei mehrdeutigen Kopfbegriffen.

## Abrufe und Kosten

| Abruf | Parameter | Zeit | Aufgabe | Ergebnis | Kosten |
|---|---|---|---|---|---|
| Suchvolumen FR | 2756, fr, 140 Begriffe | 28.09.2026, 10:33 UTC | `09281033-1996-0367-0000-bfb88543723e` | 20000 Ok, 140 Zeilen | 0,09 USD |
| Suchvolumen IT | 2756, it, 131 Begriffe | 28.09.2026, 10:34 UTC | `09281034-1996-0367-0000-0e5a1634a0f5` | 20000 Ok, 131 Zeilen | 0,09 USD |
| Suchvolumen EN | 2756, en, 142 Begriffe | 28.09.2026, 10:35 UTC | `09281035-1996-0367-0000-931b0f917071` | 20000 Ok, 142 Zeilen | 0,09 USD |
| Suchvolumen DE | 2756, de, 119 Begriffe | 28.09.2026, 10:35 UTC | `09281035-1996-0367-0000-30bcb90ffd0e` | 20000 Ok, 119 Zeilen | 0,09 USD |
| SERP «conciergerie» | 2756, fr, Desktop, Tiefe 10 | 28.09.2026, 10:36 UTC | `09281036-1996-0139-0000-5ed18649c1dc` | 20000 Ok | 0,002 USD |
| SERP «custode» | 2756, it, Desktop, Tiefe 10 | 28.09.2026, 10:37 UTC | `09281036-1996-0139-0000-688cad00d4ff` | 20000 Ok | 0,002 USD |
| SERP «caretaker» | 2756, en, Desktop, Tiefe 10 | 28.09.2026, 10:37 UTC | `09281037-1996-0139-0000-7b9fbef95b7a` | 20000 Ok | 0,002 USD |
| **Summe** | | | | | **0,366 USD** |

Budget 1 USD, nacheinander abgerufen, jeder bezahlte Abruf mit `noAiMode: true`. Abgleich: Die französischen Werte vom 27.09.2026 in der Übersetzungsnotiz (Abschnitt 4.5) stimmen mit heute überein, die deutschen mit `24-SEO-KEYWORDS.md` (etwa umzugsreinigung 720, fensterreinigung 1'600, hauswartung 2'400, gartenpflege 390, treppenhausreinigung 110).

## Deutsch: Prüfung T2, dazu T1 und M1

| Seite | Zusammengezogene Form wie heute | Ausgeschriebene Begriffe | Ergebnis |
|---|---|---|---|
| `/leistungen/bueroreinigung` | «büro und praxisreinigung» 10 | «büroreinigung» 320, «praxisreinigung» 70 | T2 bestätigt |
| `/leistungen/sonderreinigungen` | «grund und sonderreinigung» 10 | «grundreinigung» 170, «sonderreinigung» 10, «sonderreinigungen» 10 | T2 bestätigt, Grundreinigung vorne |
| `/leistungen/baureinigung` | «bau und bauendreinigung» k. D. | «baureinigung» 390, «bauendreinigung» 90 | T2 bestätigt |
| `/leistungen/fenster-und-fassadenreinigung` | «fenster und fassadenreinigung» 10 | «fensterreinigung» 1'600, «fassadenreinigung» 1'300 | T2 bestätigt, stärkster Fall |
| `/leistungen/industrie-und-hallenreinigung` | «industrie und hallenreinigung» k. D. | «industriereinigung» 90, «hallenreinigung» 10 | T2 bestätigt, «Industriereinigung» jetzt mit Zahl |
| `/leistungen/aussen-und-gruenflaechenpflege` | «aussen und grünflächenpflege» k. D. | «gartenpflege» 390, «gartenunterhalt» 320, «grünflächenpflege» 20, «umgebungspflege» 10 | T2 im Titel ändern: «Gartenunterhalt» statt «Umgebungspflege» |

**T1 (Umzugsreinigung):** «umzugsreinigung» 720, «endreinigung» 390, «umzugsreinigung mit abnahmegarantie» 170, «endreinigung mit abnahmegarantie» 140, «wohnungsendreinigung» 110. Für die Form «umzugsreinigung und endreinigung» liefert Google keine Daten. Die H1 aus T1 nennt beide Hauptbegriffe ausgeschrieben, bestätigt.

**M1 (Treppenhausreinigung):** «treppenhausreinigung» 110, mit Ort («treppenhausreinigung luzern») keine Daten. Bestätigt, der Begriff gehört wörtlich in den Umfang der Unterhaltsreinigung, sofern der Umfang stimmt (E18).

Neu gemessen und nicht in 24: «fassadenreinigung» 1'300, «gartenunterhalt» 320, «umgebungsarbeiten» 140, «hauswartungsfirma» 110, «liegenschaftsunterhalt» 90, «industriereinigung» 90, «praxisreinigung» 70, «reinigung offerte» 70, «reinigungsofferte» 50, «bootsreinigung» 30. Die Titel- und H1-Vorschläge für Deutsch stehen je Seite unten (T2 unverändert ausser Garten).

## Welche Titel und H1 sich ändern sollten

Vorschläge dort, wo der Hauptbegriff heute nicht zusammenhängend steht und ein Wechsel sprachlich ohne Nachteil geht, oder wo ein Befund (T1, T2, T6, N8) schon eine Änderung vorsieht. Wo der Begriff getrennt steht, das Volumen aber 0 bis 20 beträgt und der heutige Titel besser klingt (Premium-Einzelseiten, Ratgeber), oder wo der Begriff nicht in einen Seitentitel gehört (Kontakt), bleibt der Bestand. Alles andere bleibt ebenfalls.

| Seite | Sprache | Feld | Vorschlag | Zeichen |
|---|---|---|---|---|
| `/` | EN | Titel | «Cleaning services and caretaking in Lucerne and Zug» | 51 |
| `/` | EN | H1 | «Cleaning services and caretaking for Lucerne, Zug and the region» | 64 |
| `/` | FR | Titel | «Entreprise de nettoyage et conciergerie à Lucerne» | 49 |
| `/` | FR | H1 | «Entreprise de nettoyage et conciergerie à Lucerne, Zoug et environs» | 67 |
| `/` | IT | Titel | «Impresa di pulizie e custodia a Lucerna e Zugo» | 46 |
| `/` | IT | H1 | «Impresa di pulizie e custodia di stabili a Lucerna, Zugo e dintorni» | 67 |
| `/premium` | DE | Titel | «Premium-Reinigung: Villen, Jets, Yachten» | 40 |
| `/premium` | DE | H1 | «Premium-Reinigung für besondere Ansprüche» | 41 |
| `/premium` | EN | Titel | «Premium cleaning: villas, jets, yachts» | 38 |
| `/premium` | EN | H1 | «Premium cleaning for exacting standards» | 39 |
| `/premium` | FR | Titel | «Nettoyage premium : villas, jets, yachts» | 40 |
| `/premium` | FR | H1 | «Nettoyage premium pour des exigences particulières» | 50 |
| `/premium` | IT | Titel | «Pulizie premium: ville, jet, yacht» | 34 |
| `/premium` | IT | H1 | «Pulizie premium per esigenze particolari» | 40 |
| `/leistungen` | EN | Titel | «Commercial cleaning services and caretaking» | 43 |
| `/leistungen` | EN | H1 | «Commercial cleaning services and caretaking for properties and businesses» | 73 |
| `/leistungen` | FR | Titel | «Services de nettoyage et de conciergerie» | 40 |
| `/leistungen` | FR | H1 | «Services de nettoyage et de conciergerie pour immeubles, bureaux et commerces» | 77 |
| `/leistungen` | IT | Titel | «Servizi di pulizia e custodia di stabili» | 40 |
| `/leistungen` | IT | H1 | «Servizi di pulizia e custodia per stabili, uffici e attività commerciali» | 72 |
| `/leistungen/bueroreinigung` | DE | Titel | «Büroreinigung und Praxisreinigung Luzern, Zug» | 45 |
| `/leistungen/bueroreinigung` | DE | H1 | «Büroreinigung und Praxisreinigung» | 33 |
| `/leistungen/bueroreinigung` | EN | Titel | «Office cleaning in Lucerne and Zug» | 34 |
| `/leistungen/bueroreinigung` | EN | H1 | «Office cleaning for businesses and medical practices» | 52 |
| `/leistungen/sonderreinigungen` | DE | Titel | «Grundreinigung und Sonderreinigung Luzern, Zug» | 46 |
| `/leistungen/sonderreinigungen` | DE | H1 | «Grundreinigung und Sonderreinigung für Liegenschaften und Gewerbe» | 65 |
| `/leistungen/sonderreinigungen` | EN | Titel | «Deep cleaning and special cleaning in Lucerne» | 45 |
| `/leistungen/sonderreinigungen` | EN | H1 | «Deep cleaning and special cleaning for properties and businesses» | 64 |
| `/leistungen/umzugsreinigung` | DE | Titel | «Umzugsreinigung Luzern für Verwaltungen, Eigentümer» | 51 |
| `/leistungen/umzugsreinigung` | DE | H1 | «Umzugsreinigung und Endreinigung mit Abnahmegarantie» | 52 |
| `/leistungen/umzugsreinigung` | EN | Titel | «End-of-tenancy cleaning in Lucerne for landlords» | 48 |
| `/leistungen/umzugsreinigung` | FR | Titel | «Nettoyage de fin de bail à Lucerne pour gérances» | 48 |
| `/leistungen/umzugsreinigung` | FR | H1 | «Nettoyage de fin de bail et de déménagement avec garantie de remise» | 67 |
| `/leistungen/umzugsreinigung` | IT | Titel | «Pulizia di fine locazione a Lucerna per amministrazioni» | 55 |
| `/leistungen/umzugsreinigung` | IT | H1 | «Pulizia di fine locazione e di trasloco con garanzia di consegna» | 64 |
| `/leistungen/baureinigung` | DE | Titel | «Baureinigung und Bauendreinigung Luzern, Zug» | 44 |
| `/leistungen/baureinigung` | DE | H1 | «Baureinigung und Bauendreinigung für Neubau und Umbau» | 53 |
| `/leistungen/baureinigung` | FR | Titel | «Nettoyage de fin de chantier à Lucerne et Zoug» | 46 |
| `/leistungen/baureinigung` | FR | H1 | «Nettoyage de chantier et nettoyage de fin de chantier pour constructions neuves et transformations» | 98 |
| `/leistungen/fenster-und-fassadenreinigung` | DE | Titel | «Fensterreinigung und Fassadenreinigung Luzern» | 45 |
| `/leistungen/fenster-und-fassadenreinigung` | DE | H1 | «Fensterreinigung und Fassadenreinigung für Unternehmen und Liegenschaften» | 73 |
| `/leistungen/fenster-und-fassadenreinigung` | EN | Titel | «Window cleaning and facade cleaning in Lucerne» | 46 |
| `/leistungen/fenster-und-fassadenreinigung` | EN | H1 | «Window cleaning and facade cleaning for businesses and properties» | 65 |
| `/leistungen/fenster-und-fassadenreinigung` | FR | Titel | «Nettoyage de vitres et de façades à Lucerne» | 43 |
| `/leistungen/fenster-und-fassadenreinigung` | IT | Titel | «Pulizia di vetri e facciate a Lucerna e Zugo» | 44 |
| `/leistungen/industrie-und-hallenreinigung` | DE | Titel | «Industriereinigung und Hallenreinigung» | 38 |
| `/leistungen/industrie-und-hallenreinigung` | DE | H1 | «Industriereinigung und Hallenreinigung für Produktion und Lager» | 63 |
| `/leistungen/industrie-und-hallenreinigung` | EN | Titel | «Industrial cleaning and warehouse cleaning» | 42 |
| `/leistungen/industrie-und-hallenreinigung` | EN | H1 | «Industrial cleaning and warehouse cleaning for production and storage» | 69 |
| `/leistungen/hauswartung` | FR | Titel | «Conciergerie d’immeubles à Lucerne et Zoug» | 42 |
| `/leistungen/hauswartung` | FR | H1 | «Conciergerie d’immeubles d’habitation et de bureaux» | 51 |
| `/leistungen/aussen-und-gruenflaechenpflege` | DE | Titel | «Gartenpflege und Gartenunterhalt Luzern, Zug» | 44 |
| `/leistungen/aussen-und-gruenflaechenpflege` | DE | H1 | «Gartenpflege und Grünflächenpflege für Liegenschaften» | 53 |
| `/leistungen/aussen-und-gruenflaechenpflege` | EN | Titel | «Garden maintenance in Lucerne and Zug» | 37 |
| `/leistungen/aussen-und-gruenflaechenpflege` | EN | H1 | «Garden maintenance and grounds care for properties» | 50 |
| `/leistungen/aussen-und-gruenflaechenpflege` | FR | Titel | «Entretien des espaces verts à Lucerne et Zoug» | 45 |
| `/leistungen/aussen-und-gruenflaechenpflege` | FR | H1 | «Entretien des espaces verts et des extérieurs pour immeubles» | 60 |
| `/leistungen/aussen-und-gruenflaechenpflege` | IT | Titel | «Manutenzione di giardini e aree verdi a Lucerna» | 47 |
| `/leistungen/aussen-und-gruenflaechenpflege` | IT | H1 | «Manutenzione di giardini e aree verdi per stabili» | 49 |
| `/einzugsgebiet` | IT | Titel | «Zona d’intervento: Svizzera centrale e Argovia» | 46 |
| `/einzugsgebiet/luzern` | EN | Titel | «Cleaning company in Lucerne with caretaking» | 43 |
| `/einzugsgebiet/luzern` | IT | Titel | «Impresa di pulizie nel Cantone di Lucerna» | 41 |
| `/einzugsgebiet/zug` | EN | Titel | «Office cleaning company in Zug» | 30 |
| `/einzugsgebiet/zug` | IT | Titel | «Impresa di pulizie nel Cantone di Zugo» | 38 |
| `/einzugsgebiet/aargau` | EN | Titel | «Cleaning company in Aargau with caretaking» | 42 |
| `/einzugsgebiet/aargau` | IT | Titel | «Impresa di pulizie nel Cantone di Argovia» | 41 |
| `/einzugsgebiet/nidwalden` | DE | Titel | «Reinigungsfirma Nidwalden und Hauswartung» | 41 |
| `/einzugsgebiet/nidwalden` | EN | Titel | «Cleaning company in Nidwalden with caretaking» | 45 |
| `/einzugsgebiet/nidwalden` | IT | Titel | «Impresa di pulizie nel Cantone di Nidvaldo» | 42 |
| `/einzugsgebiet/obwalden` | EN | Titel | «Cleaning company in Obwalden and Engelberg» | 42 |
| `/einzugsgebiet/obwalden` | IT | Titel | «Impresa di pulizie a Obvaldo ed Engelberg» | 41 |

## Empfehlung je Seite

Quelle für alle Zahlen: DataForSEO, Google Ads Suchvolumen, Schweiz 2756. Abrufzeit je Sprache: DE und EN 28.09.2026, 10:35 UTC; FR 10:33 UTC; IT 10:34 UTC. Aufgaben-IDs oben.

### `/` Startseite

| Sprache | Hauptbegriff für Titel und H1 | Nebenbegriffe | Heute (Titel, H1) | Empfehlung |
|---|---|---|---|---|
| DE | «reinigung luzern» 390 | «gebäudereinigung» 590, «reinigungsfirma» 2'400 | Titel nein, H1 nein | bleibt |
| EN | «cleaning services» 1'000 | «cleaning company» 140 | Titel nein, H1 nein | Titel «Cleaning services and caretaking in Lucerne and Zug» (51 Zeichen); H1 «Cleaning services and caretaking for Lucerne, Zug and the region» (64 Zeichen) |
| FR | «entreprise de nettoyage» 1'600 | «entreprise nettoyage» 480, «conciergerie» 880 | Titel nein, H1 nein | Titel «Entreprise de nettoyage et conciergerie à Lucerne» (49 Zeichen); H1 «Entreprise de nettoyage et conciergerie à Lucerne, Zoug et environs» (67 Zeichen) |
| IT | «impresa di pulizie» 170 (G) | «ditta di pulizie» 140 (G) | Titel nein, H1 nein | Titel «Impresa di pulizie e custodia a Lucerna e Zugo» (46 Zeichen); H1 «Impresa di pulizie e custodia di stabili a Lucerna, Zugo e dintorni» (67 Zeichen) |

- **DE:** Nicht Teil von T2. Bleibt nach 24: Die Startseite führt «Reinigung» und «Luzern» mit Marke vorne, zusammenhängend steht «Reinigungsfirma Luzern» auf der Kantonsseite.
- **EN:** Einziger englischer Kopfbegriff mit nennenswertem Volumen (Spitze 1'600 im April 2026). Ortszusätze ohne Daten. Startseite trägt «cleaning services», die Kantonsseiten «cleaning company» mit Ort, so konkurrieren sie nicht. «building cleaning» (heute H1) hat 10.
- **FR:** Stärkster Begriff ausserhalb des Deutschen (Spitze 2'400 im September 2025), die Nachfrage liegt überwiegend in der Romandie. «nettoyage de bâtiments» (heute H1) hat 10. «conciergerie» ist mehrdeutig (siehe Hauswartung), steht hier nur als Nebenbegriff. Abgrenzung zur Kantonsseite Luzern («Entreprise de nettoyage à Lucerne») über «et conciergerie»; wirkt das zu nah, «à Lucerne et Zoug» anhängen (57 Zeichen).
- **IT:** «impresa di pulizie» 170 ist Gruppenwert mit «impresa pulizie», «ditta di pulizie» 140 ebenso mit «ditta pulizie». «pulizia edifici» (Sinn der heutigen H1) hat 10.

Gemessene Varianten: DE: reinigungsfirma 2'400, reinigungsunternehmen 260, gebäudereinigung 590, reinigung und hauswartung k. D. · EN: cleaning company 140, cleaning company switzerland 10, cleaning services switzerland k. D., building cleaning 10, cleaning and caretaking k. D. · FR: entreprise de nettoyage 1'600, société de nettoyage 110, entreprise nettoyage 480, entreprise de nettoyage suisse 50, nettoyage et conciergerie k. D., nettoyage de bâtiments 10 · IT: impresa di pulizie 170 (G), ditta di pulizie 140 (G), impresa pulizie 170 (G), ditta pulizie 140 (G), azienda di pulizie 10, pulizie e custodia k. D.

### `/premium` Premium-Übersicht

| Sprache | Hauptbegriff für Titel und H1 | Nebenbegriffe | Heute (Titel, H1) | Empfehlung |
|---|---|---|---|---|
| DE | «premium reinigung» 10 | «luxus reinigung» 20 | Titel ja, H1 nein | Titel «Premium-Reinigung: Villen, Jets, Yachten» (40 Zeichen); H1 «Premium-Reinigung für besondere Ansprüche» (41 Zeichen) |
| EN | «premium cleaning» 30 | «luxury cleaning» 10 | Titel ja, H1 nein | Titel «Premium cleaning: villas, jets, yachts» (38 Zeichen); H1 «Premium cleaning for exacting standards» (39 Zeichen) |
| FR | «nettoyage premium» 10 | «nettoyage haut de gamme» 10, «nettoyage de luxe» 10 | Titel ja, H1 nein | Titel «Nettoyage premium : villas, jets, yachts» (40 Zeichen); H1 «Nettoyage premium pour des exigences particulières» (50 Zeichen) |
| IT | «pulizie premium» k. D. | «pulizie di lusso» k. D. | Titel nein, H1 nein | Titel «Pulizie premium: ville, jet, yacht» (34 Zeichen); H1 «Pulizie premium per esigenze particolari» (40 Zeichen) |

- **DE:** Volumen sehr klein (wie 24). Titel wie N8, H1 mit demselben Begriff, damit beide zusammenpassen. Der Bindestrich zählt für Google Ads nicht.
- **EN:** «premium cleaning» 30 liegt vor «luxury cleaning» 10. Titel wie N8.
- **FR:** Alle Varianten 10, also nach Sprachgefühl: «premium» deckt sich mit Marke und N8.
- **IT:** Keine Daten für alle Varianten. Natürlichste Form, gleich wie N8.

Gemessene Varianten: DE: premium reinigung 10, luxus reinigung 20 · EN: premium cleaning 30, luxury cleaning 10, luxury cleaning services 10, high end cleaning 10 · FR: nettoyage premium 10, nettoyage de luxe 10, nettoyage haut de gamme 10, ménage de luxe 10 · IT: pulizie premium k. D., pulizie di lusso k. D., pulizie di alta gamma k. D.

### `/premium/luxusimmobilien` Villen und Luxusimmobilien

| Sprache | Hauptbegriff für Titel und H1 | Nebenbegriffe | Heute (Titel, H1) | Empfehlung |
|---|---|---|---|---|
| DE | «villa reinigung» 10 | «housekeeping luzern» 20 | Titel nein, H1 nein | bleibt |
| EN | «villa cleaning» 10 | «luxury home cleaning» 10, «housekeeping services» 20 | Titel nein, H1 nein | bleibt |
| FR | «nettoyage de villas» k. D., Kurzform «nettoyage villa» 10 | «entretien de villa» 10 (gemessen als «entretien villa») | Titel ja, H1 nein | bleibt |
| IT | «pulizia di ville» 0 (gemessen als «pulizia ville») | «pulizia villa» 0 | Titel ja, H1 nein | bleibt |

- **DE:** Volumen zu klein für eine Umbenennung. «Housekeeping» nur verwenden, wenn der Umfang der Seite das trägt (E18).
- **EN:** Alle Werte 10 bis 20. Bleibt. «housekeeping» meint laufende Haushaltsführung, nur mit Beleg im Umfang (E18).
- **FR:** Bleibt. «gouvernante de maison» 30 meint Hauspersonal, nicht verwenden (E18).
- **IT:** Bleibt, beide Formen 0. «governante» 30 meint Hauspersonal.

Gemessene Varianten: DE: villenreinigung k. D., villa reinigung 10, luxusimmobilien reinigung k. D., housekeeping luzern 20 · EN: villa cleaning 10, luxury home cleaning 10, housekeeping services 20, housekeeping zug 10, housekeeping lucerne k. D. · FR: nettoyage villa 10, nettoyage de villas k. D., entretien villa 10, nettoyage maison de luxe k. D., gouvernante de maison 30 · IT: pulizia ville 0, pulizia villa 0, pulizie ville di lusso k. D., governante 30

### `/premium/privatjet` Privatjet

| Sprache | Hauptbegriff für Titel und H1 | Nebenbegriffe | Heute (Titel, H1) | Empfehlung |
|---|---|---|---|---|
| DE | «privatjet reinigung» 10 | «flugzeugreinigung» 20 | Titel ja, H1 nein | bleibt |
| EN | «private jet cleaning» 10 | «aircraft interior cleaning» 10 | Titel nein, H1 nein | bleibt |
| FR | «nettoyage de jet privé» 10 (gemessen als «nettoyage jet privé») | «nettoyage d'avion» 10 | Titel nein, H1 nein | bleibt |
| IT | «pulizia di jet privati» k. D. (gemessen als «pulizia jet privato») | «pulizia aerei» 10 | Titel ja, H1 nein | bleibt |

- **DE:** Bleibt. «Flugzeugreinigung» 20 ist allgemeiner (auch Linienflugzeuge), als Nebenbegriff im Text.
- **EN:** Bleibt, alles 10. «jet cleaning» 20 ist mehrdeutig (auch Hochdruckreinigung), Absicht nicht geprüft.
- **FR:** Bleibt, alles 10.
- **IT:** Bleibt, keine Daten.

Gemessene Varianten: DE: privatjet reinigung 10, flugzeugreinigung 20, jet reinigung 10, flugzeug innenreinigung k. D. · EN: private jet cleaning 10, aircraft cleaning 10, aircraft interior cleaning 10, jet cleaning 20 · FR: nettoyage jet privé 10, nettoyage avion 10, nettoyage d'avion 10, nettoyage intérieur avion k. D. · IT: pulizia jet privato k. D., pulizia aerei 10, pulizia aereo 10, pulizia interni aereo k. D.

### `/premium/yacht` Yacht

| Sprache | Hauptbegriff für Titel und H1 | Nebenbegriffe | Heute (Titel, H1) | Empfehlung |
|---|---|---|---|---|
| DE | «bootsreinigung» 30 | «yachtreinigung» 10 | Titel ja, H1 nein | bleibt |
| EN | «boat cleaning» 10 | «yacht cleaning» 10, «teak cleaning» 10 | Titel ja, H1 nein | bleibt |
| FR | «nettoyage de bateau» 10 | «nettoyage de yacht» 10 (gemessen als «nettoyage yacht»), «nettoyage du teck» 10 (gemessen als «nettoyage teck») | Titel nein, H1 nein | bleibt |
| IT | «pulizia barche» 10 | «pulizia yacht» 0, «pulizia teak» 10 | Titel nein, H1 nein | bleibt |

- **DE:** Bleibt. «Bootsreinigung» 30 liegt vor «Yachtreinigung» 10 und steht im Titel schon als ganzes Wort.
- **EN:** Bleibt, alles 10.
- **FR:** Bleibt, alles 10. Unterschied zu klein für eine Umstellung der Wortfolge.
- **IT:** Bleibt. «imbarcazioni» ist nicht gemessen, «barche» 10, ein Tausch brächte nichts Messbares.

Gemessene Varianten: DE: yachtreinigung 10, yacht reinigung k. D., bootsreinigung 30, boot reinigen lassen k. D., bootsreinigung luzern k. D. · EN: yacht cleaning 10, boat cleaning 10, boat cleaning lucerne k. D., yacht detailing 10, teak cleaning 10 · FR: nettoyage bateau 10, nettoyage de bateau 10, nettoyage yacht 10, nettoyage teck 10, nettoyage bateau lucerne k. D. · IT: pulizia barche 10, pulizia barca 10, pulizia yacht 0, pulizia teak 10

### `/leistungen` Leistungsübersicht

| Sprache | Hauptbegriff für Titel und H1 | Nebenbegriffe | Heute (Titel, H1) | Empfehlung |
|---|---|---|---|---|
| DE | «reinigungsservice» 140 | «reinigungsdienstleistungen» 10 | Titel nein, H1 nein | bleibt |
| EN | «commercial cleaning services» 30 | «cleaning services» 1'000, «professional cleaning services» 40 | Titel nein, H1 nein | Titel «Commercial cleaning services and caretaking» (43 Zeichen); H1 «Commercial cleaning services and caretaking for properties and businesses» (73 Zeichen) |
| FR | «services de nettoyage» 140 (G) | «nettoyage professionnel» 70 | Titel nein, H1 nein | Titel «Services de nettoyage et de conciergerie» (40 Zeichen); H1 «Services de nettoyage et de conciergerie pour immeubles, bureaux et commerces» (77 Zeichen) |
| IT | «servizi di pulizia» 10 | «pulizie professionali» 10 | Titel ja, H1 nein | Titel «Servizi di pulizia e custodia di stabili» (40 Zeichen); H1 «Servizi di pulizia e custodia per stabili, uffici e attività commerciali» (72 Zeichen) |

- **DE:** Nicht Teil von T2. Bleibt. «Reinigungsservice» 140 höchstens in der Beschreibung, der Begriff zieht auch Privathaushalte an.
- **EN:** Trennt die Übersicht von der Startseite («cleaning services» 1'000) und passt zur Zielgruppe (E28).
- **FR:** 140 (Gruppenwert mit «service de nettoyage»), «prestations de nettoyage» (heute Titel) hat 10.
- **IT:** Alles 10. Kleinste Änderung: aus «Servizi: pulizia» wird «Servizi di pulizia».

Gemessene Varianten: DE: reinigungsdienstleistungen 10, reinigungsservice 140 · EN: cleaning services 1'000, commercial cleaning services 30, building cleaning services 10, professional cleaning services 40 · FR: services de nettoyage 140 (G), prestations de nettoyage 10, nettoyage professionnel 70, service de nettoyage 140 (G) · IT: servizi di pulizia 10, pulizie professionali 10, pulizia edifici 10, servizio di pulizie 10

### `/leistungen/unterhaltsreinigung` Unterhaltsreinigung

| Sprache | Hauptbegriff für Titel und H1 | Nebenbegriffe | Heute (Titel, H1) | Empfehlung |
|---|---|---|---|---|
| DE | «unterhaltsreinigung» 390 | «treppenhausreinigung» 110, «unterhaltsreinigung luzern» 20 | Titel ja, H1 ja | bleibt |
| EN | «maintenance cleaning» 20 | «commercial cleaning» 20, «stairwell cleaning» 10 | Titel ja, H1 ja | bleibt |
| FR | «nettoyage d'entretien» 10 | «nettoyage d'immeubles» 10, «nettoyage de cage d'escalier» 10 (gemessen als «nettoyage cage d'escalier») | Titel ja, H1 ja | bleibt |
| IT | «pulizia di manutenzione» 10 | «pulizia condomini» 10, «pulizia scale condominio» 10 | Titel ja, H1 ja | bleibt |

- **DE:** Bleibt. M1 bestätigt: «Treppenhausreinigung» 110 gehört wörtlich in den Umfang, sofern der Umfang stimmt (E18).
- **EN:** Bleibt, Hauptbegriff steht in Titel und H1.
- **FR:** Bleibt. Die Kurzform «nettoyage entretien» hat 40, im Titel aber nicht nachbauen (unvollständiges Französisch).
- **IT:** Bleibt.

Gemessene Varianten: DE: unterhaltsreinigung 390, treppenhausreinigung 110, unterhaltsreinigung luzern 20, liegenschaftsreinigung 10, treppenhausreinigung luzern k. D. · EN: maintenance cleaning 20, regular cleaning 10, commercial cleaning 20, contract cleaning 10, stairwell cleaning 10, communal area cleaning 10 · FR: nettoyage d'entretien 10, nettoyage entretien 40, nettoyage régulier 10, nettoyage immeuble 10, nettoyage d'immeubles 10, nettoyage cage d'escalier 10, nettoyage escaliers immeuble k. D. · IT: pulizia di manutenzione 10, pulizie ordinarie 10, pulizie regolari k. D., pulizia condomini 10, pulizia scale condominio 10, pulizia stabili k. D., pulizie stabili k. D.

### `/leistungen/bueroreinigung` Büro- und Praxisreinigung

| Sprache | Hauptbegriff für Titel und H1 | Nebenbegriffe | Heute (Titel, H1) | Empfehlung |
|---|---|---|---|---|
| DE | «büroreinigung» 320 | «praxisreinigung» 70, «büroreinigung luzern» 40 | Titel nein, H1 nein | Titel «Büroreinigung und Praxisreinigung Luzern, Zug» (45 Zeichen); H1 «Büroreinigung und Praxisreinigung» (33 Zeichen) |
| EN | «office cleaning» 30 | «office cleaning services» 40 | Titel nein, H1 nein | Titel «Office cleaning in Lucerne and Zug» (34 Zeichen); H1 «Office cleaning for businesses and medical practices» (52 Zeichen) |
| FR | «nettoyage de bureaux» 70 | «nettoyage bureau» 110, «nettoyage de cabinet médical» 10 (gemessen als «nettoyage cabinet médical») | Titel ja, H1 ja | bleibt |
| IT | «pulizia di uffici» 10 (gemessen als «pulizia uffici») | «pulizia di studi medici» 10 (gemessen als «pulizia studi medici») | Titel ja, H1 ja | bleibt |

- **DE:** T2 bestätigt: «büro und praxisreinigung» hat 10, die ausgeschriebenen Einzelbegriffe 320 und 70.
- **EN:** Heute steht «office cleaning» weder im Titel noch in der H1 zusammenhängend (gleiches Muster wie T2). «medical practice cleaning» 0, die Praxen bleiben im Label und in der Beschreibung.
- **FR:** Bleibt, Hauptbegriff in Titel und H1.
- **IT:** Bleibt.

Gemessene Varianten: DE: büroreinigung 320, praxisreinigung 70, büro und praxisreinigung 10, büroreinigung luzern 40, büroreinigung zug 30, arztpraxis reinigung 10 · EN: office cleaning 30, office cleaning services 40, office cleaning zurich 10, office cleaning lucerne k. D., office cleaning zug k. D., medical practice cleaning 0, surgery cleaning 10 · FR: nettoyage de bureaux 70, nettoyage bureau 110, nettoyage bureaux lucerne k. D., nettoyage bureaux zoug k. D., nettoyage cabinet médical 10, entreprise nettoyage bureaux 10 · IT: pulizia uffici 10, pulizie uffici 10, pulizie uffici lucerna k. D., pulizia studi medici 10, impresa pulizie uffici 0

### `/leistungen/sonderreinigungen` Grund- und Sonderreinigung

| Sprache | Hauptbegriff für Titel und H1 | Nebenbegriffe | Heute (Titel, H1) | Empfehlung |
|---|---|---|---|---|
| DE | «grundreinigung» 170 | «sonderreinigung» 10 | Titel nein, H1 nein | Titel «Grundreinigung und Sonderreinigung Luzern, Zug» (46 Zeichen); H1 «Grundreinigung und Sonderreinigung für Liegenschaften und Gewerbe» (65 Zeichen) |
| EN | «deep cleaning» 320 (G) | «special cleaning» 10 | Titel nein, H1 nein | Titel «Deep cleaning and special cleaning in Lucerne» (45 Zeichen); H1 «Deep cleaning and special cleaning for properties and businesses» (64 Zeichen) |
| FR | «nettoyage en profondeur» 10 | «nettoyage à fond» 20 | Titel ja, H1 ja | bleibt |
| IT | «pulizie a fondo» 10 | «pulizie speciali» 10, «pulizie straordinarie» 10 | Titel ja, H1 ja | bleibt |

- **DE:** T2 bestätigt: «grund und sonderreinigung» 10, «Grundreinigung» 170, «Sonderreinigung» 10. Grundreinigung gehört nach vorne.
- **EN:** 320, Gruppenwert mit «deep clean». Heute steht nur «deep and special cleaning», also nicht zusammenhängend. Das Volumen enthält Privathaushalte, die Zielgruppe bleibt E28.
- **FR:** Bleibt. Alle Varianten 10 bis 30, «remise en état» 30 meint oft Renovation.
- **IT:** Bleibt, alles 10.

Gemessene Varianten: DE: grundreinigung 170, sonderreinigung 10, grund und sonderreinigung 10, sonderreinigungen 10, grundreinigung luzern k. D., grundreinigung büro 10 · EN: deep cleaning 320 (G), deep clean 320 (G), specialist cleaning 10, special cleaning 10, one off deep clean 0 · FR: nettoyage en profondeur 10, nettoyage à fond 20, grand nettoyage 10, nettoyage spécial k. D., remise en état 30, nettoyage de remise en état k. D. · IT: pulizia a fondo 10, pulizie a fondo 10, pulizie straordinarie 10, pulizie speciali 10, pulizia profonda 10

### `/leistungen/umzugsreinigung` Umzugsreinigung

| Sprache | Hauptbegriff für Titel und H1 | Nebenbegriffe | Heute (Titel, H1) | Empfehlung |
|---|---|---|---|---|
| DE | «umzugsreinigung» 720 | «endreinigung» 390, «umzugsreinigung mit abnahmegarantie» 170 | Titel ja, H1 nein | Titel «Umzugsreinigung Luzern für Verwaltungen, Eigentümer» (51 Zeichen); H1 «Umzugsreinigung und Endreinigung mit Abnahmegarantie» (52 Zeichen) |
| EN | «end-of-tenancy cleaning» 30 (gemessen als «end of tenancy cleaning») | «move-out cleaning» 50 (G) (gemessen als «move out cleaning»), «Umzugsreinigung» 720 | Titel ja, H1 ja | Titel «End-of-tenancy cleaning in Lucerne for landlords» (48 Zeichen) |
| FR | «nettoyage de fin de bail» 320 (G) | «nettoyage de déménagement» k. D., Kurzform «nettoyage déménagement» 70, «nettoyage état des lieux» 40 | Titel ja, H1 nein | Titel «Nettoyage de fin de bail à Lucerne pour gérances» (48 Zeichen); H1 «Nettoyage de fin de bail et de déménagement avec garantie de remise» (67 Zeichen) |
| IT | «pulizia di fine locazione» k. D., Kurzform «pulizia fine locazione» 10 | «pulizia finale» 10, «pulizia di trasloco» k. D. (gemessen als «pulizia trasloco») | Titel ja, H1 nein | Titel «Pulizia di fine locazione a Lucerna per amministrazioni» (55 Zeichen); H1 «Pulizia di fine locazione e di trasloco con garanzia di consegna» (64 Zeichen) |

- **DE:** T1 bestätigt (Variante A, E28 bleibt). «endreinigung mit abnahmegarantie» 140 und «wohnungsendreinigung» 110 kommen dazu. Spitzen im März und September (Zügeltermine).
- **EN:** «move out cleaning» 50 und «end of tenancy cleaning» 30 liegen nur zwei Google-Stufen auseinander. «End of tenancy» ist britisch und vermieterseitig, passt zu T1 A und E28. Die H1 nennt heute beide. Das deutsche Wort «Umzugsreinigung» (720, schweizweit, nach Sprache nicht trennbar) einmal im englischen Text nennen, etwa in Klammern.
- **FR:** 320, Gruppenwert mit «nettoyage fin de bail», Spitze 720 im September 2025. Heute steht der Begriff in der H1 nur getrennt. Nachfrage vor allem am Genfersee (Lausanne 90, Genf 70), Lucerne ohne Daten.
- **IT:** Die Kurzform hat 10, mit hohem Wettbewerb und Klickpreis 4,09 USD (kommerzielle Absicht). Die vollständige Form liefert keine Daten, bleibt aber die richtige Schreibweise für die Website. «trasloco» ohne Daten, gehört nach hinten. Titel wie T1 A, gut 50 Zeichen.

Gemessene Varianten: DE: umzugsreinigung 720, endreinigung 390, wohnungsendreinigung 110, umzugsreinigung mit abnahmegarantie 170, endreinigung mit abnahmegarantie 140, umzugsreinigung luzern 140, umzugsreinigung und endreinigung k. D. · EN: end of tenancy cleaning 30, move out cleaning 50 (G), moving out cleaning 50 (G), end of lease cleaning 10, final cleaning 10, move out cleaning switzerland k. D., move out cleaning zurich 10, move out cleaning lucerne k. D., end of tenancy cleaning lucerne k. D., cleaning with handover guarantee k. D., umzugsreinigung 720 · FR: nettoyage de fin de bail 320 (G), nettoyage fin de bail 320 (G), nettoyage de fin de bail avec garantie k. D., nettoyage fin de bail avec garantie k. D., nettoyage de déménagement k. D., nettoyage déménagement 70, nettoyage avec garantie k. D., nettoyage fin de bail lucerne k. D., nettoyage fin de bail genève 70, nettoyage fin de bail lausanne 90, nettoyage état des lieux 40 · IT: pulizia di fine locazione k. D., pulizia fine locazione 10, pulizie fine locazione 10, pulizia trasloco k. D., pulizie trasloco k. D., pulizia con garanzia k. D., pulizie con garanzia k. D., pulizia finale 10, pulizia riconsegna appartamento k. D., pulizia trasloco lugano k. D., pulizia fine locazione lucerna k. D.

### `/leistungen/baureinigung` Bau- und Bauendreinigung

| Sprache | Hauptbegriff für Titel und H1 | Nebenbegriffe | Heute (Titel, H1) | Empfehlung |
|---|---|---|---|---|
| DE | «baureinigung» 390 | «bauendreinigung» 90, «baureinigung luzern» 30 | Titel nein, H1 nein | Titel «Baureinigung und Bauendreinigung Luzern, Zug» (44 Zeichen); H1 «Baureinigung und Bauendreinigung für Neubau und Umbau» (53 Zeichen) |
| EN | «construction cleaning» 10 | «post-construction cleaning» 10 (gemessen als «post construction cleaning»), «after builders cleaning» 10 | Titel ja, H1 ja | bleibt |
| FR | «nettoyage de fin de chantier» 70 (G) | «nettoyage de chantier» 20, «nettoyage chantier» 30 | Titel nein, H1 nein | Titel «Nettoyage de fin de chantier à Lucerne et Zoug» (46 Zeichen); H1 «Nettoyage de chantier et nettoyage de fin de chantier pour constructions neuves et transformations» (98 Zeichen) |
| IT | «pulizia di cantiere» 10 | «pulizia di fine cantiere» 10 (gemessen als «pulizia fine cantiere») | Titel ja, H1 ja | bleibt |

- **DE:** T2 bestätigt: «bau und bauendreinigung» ohne Daten, Einzelbegriffe 390 und 90.
- **EN:** Bleibt, alles 10.
- **FR:** «fin de chantier» 70 (Gruppenwert der beiden Schreibweisen) gegen «de chantier» 20. Die Bauendreinigung ist der typische Auftrag. Die H1 wird mit 98 Zeichen lang; das Lektorat darf die Objektangabe kürzen, solange «nettoyage de fin de chantier» am Stück bleibt.
- **IT:** Bleibt, alles 10. «pulizia fine cantiere» mit hohem Wettbewerb, steht in der H1 schon.

Gemessene Varianten: DE: baureinigung 390, bauendreinigung 90, bau und bauendreinigung k. D., baureinigung luzern 30, bauschlussreinigung 10, baufeinreinigung 10 · EN: construction cleaning 10, post construction cleaning 10, builders cleaning 10, after builders cleaning 10, construction site cleaning 10 · FR: nettoyage de chantier 20, nettoyage chantier 30, nettoyage fin de chantier 70 (G), nettoyage de fin de chantier 70 (G), nettoyage après travaux 10 · IT: pulizia di cantiere 10, pulizia cantiere 10, pulizia fine cantiere 10, pulizie fine cantiere 10, pulizie post cantiere 10, pulizia fine lavori k. D.

### `/leistungen/fenster-und-fassadenreinigung` Fenster- und Fassadenreinigung

| Sprache | Hauptbegriff für Titel und H1 | Nebenbegriffe | Heute (Titel, H1) | Empfehlung |
|---|---|---|---|---|
| DE | «fensterreinigung» 1'600 | «fassadenreinigung» 1'300, «fenster reinigen lassen» 140 | Titel nein, H1 nein | Titel «Fensterreinigung und Fassadenreinigung Luzern» (45 Zeichen); H1 «Fensterreinigung und Fassadenreinigung für Unternehmen und Liegenschaften» (73 Zeichen) |
| EN | «window cleaning» 70 (G) | «facade cleaning» 90 | Titel nein, H1 nein | Titel «Window cleaning and facade cleaning in Lucerne» (46 Zeichen); H1 «Window cleaning and facade cleaning for businesses and properties» (65 Zeichen) |
| FR | «nettoyage de vitres» 140 | «nettoyage vitres» 590, «nettoyage de façades» 20 | Titel ja, H1 ja | Titel «Nettoyage de vitres et de façades à Lucerne» (43 Zeichen) |
| IT | «pulizia di vetri» 20 (gemessen als «pulizia vetri») | «pulizia facciate» 10, «pulizia finestre» 10 | Titel ja, H1 ja | Titel «Pulizia di vetri e facciate a Lucerna e Zugo» (44 Zeichen) |

- **DE:** Stärkste Bestätigung von T2: «fenster und fassadenreinigung» 10 gegen 1'600 und 1'300. «fensterputzer» 720 nicht in den Titel (Personenbezeichnung, Spitze 3'600 im März, Absicht nicht geprüft).
- **EN:** «window cleaning» 70 (Gruppenwert mit «window cleaners»), «facade cleaning» 90. Heute steht «window cleaning» nicht zusammenhängend.
- **FR:** Hauptbegriff steht in Titel und H1. Google meldet «nettoyage vitres» (590) getrennt, im Titel aber nicht ohne «de» nachbauen. Ob Google beide gleich wertet, ist nicht dokumentiert. Titelvorschlag nur mit Ort wie die übrigen Leistungen, optional.
- **IT:** Bleibt im Kern, Titelvorschlag nur mit Ort wie die übrigen Leistungen, optional.

Gemessene Varianten: DE: fensterreinigung 1'600, fassadenreinigung 1'300, fenster und fassadenreinigung 10, fensterreinigung luzern 70, fassadenreinigung luzern 30, glasreinigung 70, fensterputzer 720, fenster reinigen lassen 140 · EN: window cleaning 70 (G), window cleaners 70 (G), window cleaning services 30, window cleaning lucerne k. D., window cleaning zug k. D., facade cleaning 90, window and facade cleaning k. D. · FR: nettoyage de vitres 140, nettoyage vitres 590, laveur de vitres 20, nettoyage de fenêtres 10, nettoyage fenêtres 70, nettoyage façade 70, nettoyage de façades 20, nettoyage vitres et façades k. D. · IT: pulizia vetri 20, pulizia finestre 10, lavaggio vetri 10, pulizia vetrate 10, pulizia facciate 10, pulizia vetri e facciate k. D.

### `/leistungen/industrie-und-hallenreinigung` Industrie- und Hallenreinigung

| Sprache | Hauptbegriff für Titel und H1 | Nebenbegriffe | Heute (Titel, H1) | Empfehlung |
|---|---|---|---|---|
| DE | «industriereinigung» 90 | «hallenreinigung» 10, «maschinenreinigung» 20 | Titel nein, H1 nein | Titel «Industriereinigung und Hallenreinigung» (38 Zeichen); H1 «Industriereinigung und Hallenreinigung für Produktion und Lager» (63 Zeichen) |
| EN | «industrial cleaning» 20 | «warehouse cleaning» 10, «factory cleaning» 10 | Titel nein, H1 nein | Titel «Industrial cleaning and warehouse cleaning» (42 Zeichen); H1 «Industrial cleaning and warehouse cleaning for production and storage» (69 Zeichen) |
| FR | «nettoyage industriel» 30 | «nettoyage d'usine» 10 (gemessen als «nettoyage usine»), «nettoyage de halles» k. D. | Titel ja, H1 ja | bleibt |
| IT | «pulizia industriale» 10 | «pulizie industriali» 10, «pulizia di capannoni» 10 (gemessen als «pulizia capannoni») | Titel ja, H1 ja | bleibt |

- **DE:** T2 bestätigt: «industrie und hallenreinigung» ohne Daten, «Industriereinigung» 90 (24 hatte hier keine Zahl), «Hallenreinigung» 10.
- **EN:** 20, «industrial cleaning services» ebenfalls 20. Heute nicht zusammenhängend.
- **FR:** Bleibt.
- **IT:** Bleibt.

Gemessene Varianten: DE: industriereinigung 90, hallenreinigung 10, industrie und hallenreinigung k. D., industriereinigung luzern 10, maschinenreinigung 20, produktionsreinigung 10 · EN: industrial cleaning 20, warehouse cleaning 10, factory cleaning 10, industrial cleaning services 20, machine cleaning 10 · FR: nettoyage industriel 30, nettoyage de halles k. D., nettoyage entrepôt 0, nettoyage usine 10, nettoyage de machines k. D. · IT: pulizie industriali 10, pulizia industriale 10, pulizia capannoni 10, pulizia magazzini 10, pulizia macchinari 10

### `/leistungen/hauswartung` Hauswartung

| Sprache | Hauptbegriff für Titel und H1 | Nebenbegriffe | Heute (Titel, H1) | Empfehlung |
|---|---|---|---|---|
| DE | «hauswartung» 2'400 (G) | «hauswartung luzern» 140, «hauswartungsfirma» 110 | Titel ja, H1 ja | bleibt |
| EN | «caretaking services» 10 | «caretaker» 170, «Hauswartung» 2'400 (G) | Titel ja, H1 nein | bleibt |
| FR | «conciergerie d'immeubles» 20 (G) (gemessen als «conciergerie immeuble») | «service de conciergerie» 40, «entreprise de conciergerie» 30 | Titel nein, H1 nein | Titel «Conciergerie d’immeubles à Lucerne et Zoug» (42 Zeichen); H1 «Conciergerie d’immeubles d’habitation et de bureaux» (51 Zeichen) |
| IT | «custodia di stabili» k. D. | «servizio di custodia» 10, «custode» 170 | Titel ja, H1 ja | bleibt |

- **DE:** Bleibt. Neu: «hauswartungsfirma» 110 als Nebenbegriff.
- **EN:** Bleibt. «caretaker» 170 ist gemischt (SERP: Wörterbuch, Musik, Film, eine Schweizer Hauswartungsfirma). «janitor» 1'600 ist amerikanisch und in der Absicht nicht geprüft, nicht verwenden. «Hauswartung» einmal im englischen Text nennen. Die H1 mit «Caretaking» genügt.
- **FR:** «conciergerie» allein hat 880, ist aber mehrdeutig: Im SERP stehen Airbnb- und Privat-Conciergerien (Local Pack Annemasse, Genf, Evian), nur 2 von 9 organischen Treffern meinen die Hauswartung. Der Zusatz macht den Klick ehrlich. Gemessen 20 (Gruppenwert mit «concierge immeuble»).
- **IT:** Keine messbare Nachfrage. «custode» 170 ist Stellen- und Berufssuche (SERP: Jooble, Indeed, orientamento.ch), bestätigt aber «custode di stabili» als Schweizer Fachbegriff. Bleibt.

Gemessene Varianten: DE: hauswartung 2'400 (G), hauswart 2'400 (G), hauswartung luzern 140, hauswartung zug 70, hauswartdienst 20, hauswartungsfirma 110 · EN: caretaker 170, caretaking services 10, caretaker services 10, building caretaker 10, janitorial services 30, janitor 1'600, property maintenance 20, building maintenance 10, caretaker lucerne k. D., caretaker zug k. D., hauswart 2'400 (G), hauswartung 2'400 (G) · FR: conciergerie 880, conciergerie immeuble 20 (G), concierge immeuble 20 (G), service de conciergerie 40, entreprise de conciergerie 30, conciergerie lucerne k. D., conciergerie zoug k. D., concierge 2'400, cahier des charges concierge 10 · IT: custodia stabili k. D., custodia di stabili k. D., custode 170, custode stabile k. D., custode condominio 10, servizio di custodia 10, portineria 20, manutenzione stabili 10, custode lucerna k. D.

### `/leistungen/aussen-und-gruenflaechenpflege` Aussen- und Grünflächenpflege

| Sprache | Hauptbegriff für Titel und H1 | Nebenbegriffe | Heute (Titel, H1) | Empfehlung |
|---|---|---|---|---|
| DE | «gartenpflege» 390 | «gartenunterhalt» 320, «grünflächenpflege» 20 | Titel nein, H1 nein | Titel «Gartenpflege und Gartenunterhalt Luzern, Zug» (44 Zeichen); H1 «Gartenpflege und Grünflächenpflege für Liegenschaften» (53 Zeichen) |
| EN | «garden maintenance» 20 | «grounds maintenance» 10 | Titel nein, H1 nein | Titel «Garden maintenance in Lucerne and Zug» (37 Zeichen); H1 «Garden maintenance and grounds care for properties» (50 Zeichen) |
| FR | «entretien des espaces verts» 20 (G) | «entretien de jardin» 50 (gemessen als «entretien jardin»), «entretien des extérieurs» 10 | Titel nein, H1 nein | Titel «Entretien des espaces verts à Lucerne et Zoug» (45 Zeichen); H1 «Entretien des espaces verts et des extérieurs pour immeubles» (60 Zeichen) |
| IT | «manutenzione di giardini» 40 (gemessen als «manutenzione giardini») | «manutenzione del verde» 10, «manutenzione aree verdi» 10 | Titel nein, H1 nein | Titel «Manutenzione di giardini e aree verdi a Lucerna» (47 Zeichen); H1 «Manutenzione di giardini e aree verdi per stabili» (49 Zeichen) |

- **DE:** Abweichung von T2 im Titel: T2 nennt «Umgebungspflege» (10). «Gartenunterhalt» ist die Schweizer Form und hat 320. H1 wie T2. «umgebungsarbeiten» 140 meint oft Gartenbau bei Neubauten (nicht geprüft), nicht verwenden. «liegenschaftsunterhalt» 90 passt eher zur Hauswartung.
- **EN:** 20 gegen 10. «landscaping» 140 meint Gestaltung und Gartenbau, nicht im Umfang (E18).
- **FR:** «entretien des abords» (heute im Titel) hat 0. «entretien jardin» 50 mit hohem Wettbewerb als Nebenbegriff. «jardinier» 390 ist Personen- und Stellensuche.
- **IT:** 40 gegen 10. «aree esterne» (heute) ohne Daten. «giardiniere» 320 ist Personensuche.

Gemessene Varianten: DE: gartenpflege 390, gartenunterhalt 320, umgebungspflege 10, grünflächenpflege 20, aussen und grünflächenpflege k. D., umgebungsarbeiten 140, umgebungsunterhalt k. D., gartenpflege luzern 40, gartenunterhalt luzern 10, liegenschaftsunterhalt 90 · EN: grounds maintenance 10, garden maintenance 20, green space maintenance 10, landscaping 140, gardening services 10, garden maintenance lucerne k. D. · FR: entretien des espaces verts 20 (G), entretien espaces verts 20 (G), entretien jardin 50, entretien des extérieurs 10, entretien des abords 0, jardinier 390 · IT: manutenzione aree verdi 10, manutenzione del verde 10, manutenzione giardini 40, cura del verde 10, giardiniere 320, manutenzione aree esterne k. D.

### `/leistungen/facility-services` Facility Services

| Sprache | Hauptbegriff für Titel und H1 | Nebenbegriffe | Heute (Titel, H1) | Empfehlung |
|---|---|---|---|---|
| DE | «facility services» 720 | «facility management» 2'400 | Titel ja, H1 ja | bleibt |
| EN | «facility services» 720 | «facility management» 2'400 | Titel ja, H1 ja | bleibt |
| FR | «facility services» 720 | «gestion technique de bâtiments» 0 | Titel ja, H1 ja | bleibt |
| IT | «facility services» 720 | «servizi di facility management» 10 | Titel ja, H1 ja | bleibt |

- **DE:** Bleibt. «Facility Management» nur, wo die Seite das Leistungsbild trägt (E18).
- **EN:** Bleibt. Werte in allen vier Sprachen gleich, die Nachfrage stammt überwiegend aus der Deutschschweiz.
- **FR:** Bleibt. Französische Umschreibungen ohne Nachfrage (0 oder keine Daten).
- **IT:** Bleibt. «gestione immobili» 40 meint Liegenschaftsverwaltung, nicht verwenden.

Gemessene Varianten: DE: facility services 720, facility management 2'400, facility management luzern 10, facility services luzern k. D. · EN: facility services 720, facility management 2'400, facility management services 20, integrated facility management 10, facility management switzerland 10 · FR: facility services 720, facility management 2'400, gestion technique de bâtiments 0, services aux immeubles k. D., entretien d'immeubles 10 · IT: facility services 720, facility management 2'400, gestione immobili 40, servizi di facility management 10

### `/einzugsgebiet` Einzugsgebiet

| Sprache | Hauptbegriff für Titel und H1 | Nebenbegriffe | Heute (Titel, H1) | Empfehlung |
|---|---|---|---|---|
| DE | «reinigungsfirma zentralschweiz» 10 | keine (nur eine Variante gemessen) | Titel nein, H1 nein | bleibt |
| EN | «service area» nicht gemessen | «cleaning company central switzerland» k. D. | Titel ja, H1 ja | bleibt |
| FR | «zone d'intervention» nicht gemessen | «entreprise de nettoyage suisse centrale» k. D. | Titel ja, H1 ja | bleibt |
| IT | «zona d'intervento» nicht gemessen | «impresa di pulizie svizzera centrale» k. D. | Titel nein, H1 ja | Titel «Zona d’intervento: Svizzera centrale e Argovia» (46 Zeichen) |

- **DE:** Bleibt.
- **EN:** Bleibt, kein Suchziel.
- **FR:** Bleibt, kein Suchziel.
- **IT:** Kein Suchziel. Optional: Titel an die H1 angleichen, heute weichen beide ab.

Gemessene Varianten: DE: reinigungsfirma zentralschweiz 10 · EN: cleaning company central switzerland k. D., cleaning services central switzerland k. D. · FR: entreprise de nettoyage suisse centrale k. D., nettoyage suisse centrale k. D. · IT: impresa di pulizie svizzera centrale k. D., pulizie svizzera centrale k. D.

### `/einzugsgebiet/luzern` Kanton Luzern

| Sprache | Hauptbegriff für Titel und H1 | Nebenbegriffe | Heute (Titel, H1) | Empfehlung |
|---|---|---|---|---|
| DE | «reinigungsfirma luzern» 320 | «reinigung luzern» 390, «hauswartung luzern» 140 | Titel ja, H1 nein | bleibt |
| EN | «cleaning company» 140 | «cleaning company lucerne» k. D. | Titel ja, H1 ja | Titel «Cleaning company in Lucerne with caretaking» (43 Zeichen) |
| FR | «entreprise de nettoyage» 1'600 | «entreprise de nettoyage lucerne» k. D. | Titel ja, H1 ja | bleibt |
| IT | «impresa di pulizie» 170 (G) | «impresa di pulizie lucerna» k. D., «ditta di pulizie» 140 (G) | Titel ja, H1 ja | Titel «Impresa di pulizie nel Cantone di Lucerna» (41 Zeichen) |

- **DE:** Bleibt (24).
- **EN:** Der heutige Titel enthält den Begriff, liest sich aber holprig (N4). Ortszusatz ohne Daten, also natürlichste Form mit dem Kopfbegriff am Stück. T6 schlägt «Cleaning and caretaking company in Lucerne» vor, das trennt «cleaning company».
- **FR:** Bleibt (T6: FR sauber).
- **IT:** Heute holprig (N4 nennt diesen Titel). T6 übernehmen, Ortszusatz ohne Daten, «ditta di pulizie» als Nebenbegriff im Text.

Gemessene Varianten: DE: reinigungsfirma luzern 320, reinigung luzern 390, reinigungsunternehmen luzern 20 · EN: cleaning company lucerne k. D., cleaning company luzern k. D., cleaning services lucerne k. D., cleaning lucerne k. D., cleaners lucerne k. D. · FR: entreprise de nettoyage lucerne k. D., société de nettoyage lucerne k. D., nettoyage lucerne 10, entreprise de nettoyage luzern k. D. · IT: impresa di pulizie lucerna k. D., ditta di pulizie lucerna k. D., pulizie lucerna k. D., impresa di pulizie luzern k. D.

### `/einzugsgebiet/zug` Kanton Zug

| Sprache | Hauptbegriff für Titel und H1 | Nebenbegriffe | Heute (Titel, H1) | Empfehlung |
|---|---|---|---|---|
| DE | «reinigungsfirma zug» 170 | «reinigung zug» 210, «büroreinigung zug» 30 | Titel ja, H1 nein | bleibt |
| EN | «cleaning company» 140 | «cleaning company zug» 10 | Titel ja, H1 ja | Titel «Office cleaning company in Zug» (30 Zeichen) |
| FR | «entreprise de nettoyage» 1'600 | «entreprise de nettoyage zoug» k. D. | Titel ja, H1 ja | bleibt |
| IT | «impresa di pulizie» 170 (G) | «impresa di pulizie zugo» k. D. | Titel ja, H1 ja | Titel «Impresa di pulizie nel Cantone di Zugo» (38 Zeichen) |

- **DE:** Bleibt (24).
- **EN:** T6 übernehmen (Befund N4). «cleaning company zug» ist neben «housekeeping zug» der einzige englische Ortsbegriff mit Daten (10, hoher Wettbewerb, Klickpreis 11,17 USD).
- **FR:** Bleibt.
- **IT:** T6 übernehmen (Befund N4).

Gemessene Varianten: DE: reinigungsfirma zug 170, reinigung zug 210 · EN: cleaning company zug 10, cleaning services zug k. D., cleaning zug k. D., cleaners zug k. D., commercial cleaning zug k. D. · FR: entreprise de nettoyage zoug k. D., nettoyage zoug k. D., société de nettoyage zoug k. D. · IT: impresa di pulizie zugo k. D., pulizie zugo k. D., ditta di pulizie zugo k. D., impresa di pulizie zug k. D.

### `/einzugsgebiet/aargau` Kanton Aargau

| Sprache | Hauptbegriff für Titel und H1 | Nebenbegriffe | Heute (Titel, H1) | Empfehlung |
|---|---|---|---|---|
| DE | «reinigungsfirma aargau» 260 | «reinigungsfirma aarau» 140, «reinigungsfirma baden» 110 | Titel ja, H1 nein | bleibt |
| EN | «cleaning company» 140 | «cleaning company aargau» k. D. | Titel ja, H1 ja | Titel «Cleaning company in Aargau with caretaking» (42 Zeichen) |
| FR | «entreprise de nettoyage» 1'600 | «entreprise de nettoyage argovie» k. D. | Titel ja, H1 ja | bleibt |
| IT | «impresa di pulizie» 170 (G) | «impresa di pulizie argovia» k. D. | Titel ja, H1 ja | Titel «Impresa di pulizie nel Cantone di Argovia» (41 Zeichen) |

- **DE:** Bleibt (24).
- **EN:** Wie Luzern: T6 (zu Befund N4) trennt «cleaning company», der Vorschlag hält den Begriff am Stück.
- **FR:** Bleibt.
- **IT:** T6 übernehmen (Befund N4).

Gemessene Varianten: DE: reinigungsfirma aargau 260, reinigungsfirma aarau 140, reinigungsfirma baden 110 · EN: cleaning company aargau k. D., cleaning company aarau k. D., cleaning company baden k. D., cleaning services aargau k. D. · FR: entreprise de nettoyage argovie k. D., entreprise de nettoyage aarau k. D., nettoyage argovie k. D., entreprise de nettoyage baden k. D. · IT: impresa di pulizie argovia k. D., impresa di pulizie aarau k. D., pulizie argovia k. D.

### `/einzugsgebiet/nidwalden` Kanton Nidwalden

| Sprache | Hauptbegriff für Titel und H1 | Nebenbegriffe | Heute (Titel, H1) | Empfehlung |
|---|---|---|---|---|
| DE | «reinigungsfirma nidwalden» 30 | «hauswartung nidwalden» k. D. | Titel ja, H1 nein | Titel «Reinigungsfirma Nidwalden und Hauswartung» (41 Zeichen) |
| EN | «cleaning company» 140 | «cleaning company nidwalden» k. D. | Titel ja, H1 ja | Titel «Cleaning company in Nidwalden with caretaking» (45 Zeichen) |
| FR | «entreprise de nettoyage» 1'600 | «entreprise de nettoyage nidwald» k. D. | Titel ja, H1 ja | bleibt |
| IT | «impresa di pulizie» 170 (G) | «impresa di pulizie nidvaldo» k. D. | Titel ja, H1 ja | Titel «Impresa di pulizie nel Cantone di Nidvaldo» (42 Zeichen) |

- **DE:** T6 übernehmen (Befund N4).
- **EN:** Wie Luzern: T6 (zu Befund N4) trennt «cleaning company», der Vorschlag hält den Begriff am Stück.
- **FR:** Bleibt.
- **IT:** T6 übernehmen (Befund N4).

Gemessene Varianten: DE: reinigungsfirma nidwalden 30, hauswartung nidwalden k. D., reinigungsfirma stans k. D. · EN: cleaning company nidwalden k. D., cleaning company stans k. D., cleaning services nidwalden k. D. · FR: entreprise de nettoyage nidwald k. D., entreprise de nettoyage stans k. D., nettoyage nidwald k. D. · IT: impresa di pulizie nidvaldo k. D., impresa di pulizie stans k. D., pulizie nidvaldo k. D.

### `/einzugsgebiet/obwalden` Kanton Obwalden

| Sprache | Hauptbegriff für Titel und H1 | Nebenbegriffe | Heute (Titel, H1) | Empfehlung |
|---|---|---|---|---|
| DE | «reinigungsfirma obwalden» 30 | «reinigungsfirma engelberg» k. D. | Titel ja, H1 nein | bleibt |
| EN | «cleaning company» 140 | «cleaning company engelberg» k. D. | Titel ja, H1 ja | Titel «Cleaning company in Obwalden and Engelberg» (42 Zeichen) |
| FR | «entreprise de nettoyage» 1'600 | «entreprise de nettoyage obwald» k. D. | Titel ja, H1 ja | bleibt |
| IT | «impresa di pulizie» 170 (G) | «impresa di pulizie obvaldo» k. D. | Titel ja, H1 ja | Titel «Impresa di pulizie a Obvaldo ed Engelberg» (41 Zeichen) |

- **DE:** Bleibt.
- **EN:** T6 übernehmen (Befund N4).
- **FR:** Bleibt.
- **IT:** T6 übernehmen (Befund N4).

Gemessene Varianten: DE: reinigungsfirma obwalden 30, reinigungsfirma engelberg k. D., reinigungsfirma sarnen k. D. · EN: cleaning company obwalden k. D., cleaning company engelberg k. D., cleaning engelberg k. D., cleaning company sarnen k. D. · FR: entreprise de nettoyage obwald k. D., nettoyage engelberg k. D., entreprise de nettoyage sarnen k. D., conciergerie engelberg k. D. · IT: impresa di pulizie obvaldo k. D., pulizie engelberg k. D., impresa di pulizie sarnen k. D.

### `/blog` Ratgeber (Übersicht)

| Sprache | Hauptbegriff für Titel und H1 | Nebenbegriffe | Heute (Titel, H1) | Empfehlung |
|---|---|---|---|---|
| DE | «ratgeber gebäudereinigung» k. D. | keine (nur eine Variante gemessen) | Titel ja, H1 ja | bleibt |
| EN | «cleaning guide» 10 | «building cleaning guide» k. D. | Titel nein, H1 nein | bleibt |
| FR | «guide du nettoyage» 10 | «conseils nettoyage» 10 | Titel ja, H1 ja | bleibt |
| IT | «guida alle pulizie» k. D. | «consigli pulizie» 10 | Titel nein, H1 nein | bleibt |

- **DE:** Bleibt, kein Suchvolumen.
- **EN:** Bleibt.
- **FR:** Bleibt.
- **IT:** Bleibt, keine Daten.

Gemessene Varianten: DE: ratgeber reinigung k. D., ratgeber gebäudereinigung k. D. · EN: cleaning guide 10, building cleaning guide k. D., cleaning tips 10 · FR: guide nettoyage k. D., conseils nettoyage 10, guide du nettoyage 10 · IT: guida pulizie 0, consigli pulizie 10, guida alle pulizie k. D.

### `/blog/richtige-reinigungsfirma-finden` Ratgeber Reinigungsfirma finden

| Sprache | Hauptbegriff für Titel und H1 | Nebenbegriffe | Heute (Titel, H1) | Empfehlung |
|---|---|---|---|---|
| DE | «reinigungsfirma finden» 10 | «reinigungsfirma wählen» k. D. | Titel ja, H1 nein | bleibt |
| EN | «choose a cleaning company» k. D. (gemessen als «how to choose a cleaning company») | «find a cleaning company» k. D. | Titel ja, H1 nein | bleibt |
| FR | «choisir une entreprise de nettoyage» k. D. | «comment choisir une entreprise de nettoyage» 0 | Titel ja, H1 nein | bleibt |
| IT | «scegliere l'impresa di pulizie» k. D. (gemessen als «scegliere impresa di pulizie») | «come scegliere impresa di pulizie» k. D. | Titel ja, H1 nein | bleibt |

- **DE:** Bleibt.
- **EN:** Bleibt. Informative Fragen haben in der Schweiz keine Ads-Daten; der Wert des Artikels liegt in Long Tail und KI-Antworten, nicht im Volumen.
- **FR:** Bleibt.
- **IT:** Bleibt.

Gemessene Varianten: DE: reinigungsfirma finden 10, reinigungsfirma wählen k. D., gute reinigungsfirma finden k. D. · EN: how to choose a cleaning company k. D., choosing a cleaning company k. D., find a cleaning company k. D., hire a cleaning company k. D. · FR: comment choisir une entreprise de nettoyage 0, choisir une entreprise de nettoyage k. D., choisir entreprise de nettoyage k. D., trouver une entreprise de nettoyage k. D. · IT: come scegliere un'impresa di pulizie k. D., come scegliere impresa di pulizie k. D., scegliere impresa di pulizie k. D., trovare impresa di pulizie k. D.

### `/blog/reinigungskosten-schweiz` Ratgeber Kosten

| Sprache | Hauptbegriff für Titel und H1 | Nebenbegriffe | Heute (Titel, H1) | Empfehlung |
|---|---|---|---|---|
| DE | «unterhaltsreinigung kosten» 10 | «büroreinigung preise» 10, «reinigungsfirma kosten» 10 | Titel nein, H1 nein | bleibt |
| EN | «cleaning company prices» 10 | «office cleaning cost» 0 | Titel nein, H1 nein | bleibt |
| FR | «prix entreprise de nettoyage» 10 | «tarif nettoyage bureaux» 10, «prix nettoyage m2» 10 | Titel nein, H1 nein | bleibt |
| IT | «prezzi impresa di pulizie» 10 | «prezzi pulizie uffici» 10 | Titel nein, H1 nein | bleibt |

- **DE:** Bleibt. Der Fragetitel passt zur Absicht, alle Kostenbegriffe 10.
- **EN:** Bleibt. Preisbegriffe im Text verwenden, ohne Preise zu nennen (E18).
- **FR:** Bleibt. «prix» und «tarif» im Text verwenden, ohne Preise (E18).
- **IT:** Bleibt. «prezzi» im Text verwenden, ohne Preise (E18).

Gemessene Varianten: DE: unterhaltsreinigung kosten 10, büroreinigung kosten 10, büroreinigung preise 10, reinigungskosten 10, reinigungsfirma kosten 10, reinigung kosten pro m2 k. D. · EN: office cleaning cost 0, office cleaning prices 0, commercial cleaning cost 0, cleaning prices switzerland k. D., cleaning company prices 10, cleaning costs switzerland k. D., how much does office cleaning cost 0 · FR: prix nettoyage bureau 10, tarif nettoyage bureaux 10, prix nettoyage entretien k. D., prix entreprise de nettoyage 10, tarif entreprise de nettoyage 10, prix nettoyage immeuble 10, coût nettoyage bureau k. D., prix nettoyage m2 10, prix nettoyage suisse k. D. · IT: prezzi pulizie uffici 10, costo pulizie uffici k. D., tariffe impresa di pulizie 10, prezzi impresa di pulizie 10, costo pulizie condominio k. D., prezzo pulizie al metro quadro k. D., quanto costa un'impresa di pulizie 10, prezzi pulizie svizzera k. D.

### `/ueber-uns` Über uns

| Sprache | Hauptbegriff für Titel und H1 | Nebenbegriffe | Heute (Titel, H1) | Empfehlung |
|---|---|---|---|---|
| DE | kein Suchziel | | | bleibt |
| EN | kein Suchziel | | | bleibt |
| FR | kein Suchziel | | | bleibt |
| IT | kein Suchziel | | | bleibt |

- **DE:** Kein Suchziel (Marke). Nicht gemessen.
- **EN:** Kein Suchziel. Nicht gemessen.
- **FR:** Kein Suchziel. Nicht gemessen.
- **IT:** Kein Suchziel. Nicht gemessen.

### `/kontakt` Kontakt

| Sprache | Hauptbegriff für Titel und H1 | Nebenbegriffe | Heute (Titel, H1) | Empfehlung |
|---|---|---|---|---|
| DE | «reinigung offerte» 70 | «reinigungsofferte» 50, «offerte reinigung» 40 | Titel nein, H1 nein | bleibt |
| EN | «cleaning quote» 10 | «cleaning company quote» 10 | Titel nein, H1 nein | bleibt |
| FR | «devis nettoyage» 20 | «devis gratuit nettoyage» 10 | Titel nein, H1 nein | bleibt |
| IT | «offerta pulizie» 10 | «preventivo pulizie» 10 | Titel nein, H1 nein | bleibt |

- **DE:** Bleibt. Neu gemessen: «reinigung offerte» 70, «reinigungsofferte» 50, beide mit Klickpreis über 7 USD. In Beschreibung und Formularüberschrift nutzen.
- **EN:** Bleibt.
- **FR:** Bleibt, «devis» bestätigt (20 gegen «offre nettoyage» 10).
- **IT:** Bleibt. «offerta» und «preventivo» je 10, «offerta» entspricht dem Schweizer Gebrauch und dem Bestand.

Gemessene Varianten: DE: offerte reinigung 40, reinigungsofferte 50, reinigung offerte 70 · EN: cleaning quote 10, free cleaning quote 0, cleaning company quote 10 · FR: devis nettoyage 20, devis gratuit nettoyage 10, offre nettoyage 10, devis entreprise de nettoyage 10 · IT: preventivo pulizie 10, preventivo gratuito pulizie k. D., offerta pulizie 10, preventivo impresa di pulizie 10

### `/impressum` Impressum

| Sprache | Hauptbegriff für Titel und H1 | Nebenbegriffe | Heute (Titel, H1) | Empfehlung |
|---|---|---|---|---|
| DE | kein Suchziel | | | bleibt |
| EN | «legal notice» 20 | «imprint» 320 | Titel ja, H1 k. A. | bleibt |
| FR | «mentions légales» 30 | keine (nur eine Variante gemessen) | Titel ja, H1 k. A. | bleibt |
| IT | «note legali» 10 | keine (nur eine Variante gemessen) | Titel ja, H1 k. A. | bleibt |

- **DE:** Kein Suchziel. Nicht gemessen.
- **EN:** Bleibt. «imprint» 320 ist ein Germanismus, Absicht unklar. Kein Suchziel.
- **FR:** Bleibt, kein Suchziel.
- **IT:** Bleibt, kein Suchziel.

Gemessene Varianten: EN: legal notice 20, imprint 320 · FR: mentions légales 30 · IT: note legali 10

### `/datenschutz` Datenschutz

| Sprache | Hauptbegriff für Titel und H1 | Nebenbegriffe | Heute (Titel, H1) | Empfehlung |
|---|---|---|---|---|
| DE | kein Suchziel | | | bleibt |
| EN | «privacy policy» 210 | «privacy notice» 40 | Titel ja, H1 k. A. | bleibt |
| FR | «déclaration de protection des données» 10 | «protection des données» 170, «politique de confidentialité» 90 | Titel ja, H1 k. A. | bleibt |
| IT | «protezione dei dati» 30 | «informativa sulla privacy» 10 | Titel ja, H1 k. A. | bleibt |

- **DE:** Kein Suchziel. Nicht gemessen.
- **EN:** Bleibt, kein Suchziel.
- **FR:** Bleibt. Die Wahl folgt dem EDÖB und TERMDAT (Übersetzungsnotiz Nr. 15), nicht dem Volumen. Kein Suchziel.
- **IT:** Bleibt, kein Suchziel.

Gemessene Varianten: EN: privacy policy 210, privacy notice 40 · FR: politique de confidentialité 90, déclaration de protection des données 10, protection des données 170 · IT: informativa sulla privacy 10, protezione dei dati 30, dichiarazione sulla protezione dei dati k. D.

## SERP-Befunde zu den mehrdeutigen Kopfbegriffen

Momentaufnahmen vom 28.09.2026, Schweiz, Desktop, Tiefe 10. Eine SERP ist kein festes Ranking.

- **«conciergerie» (fr, 880):** Local Pack mit drei Airbnb- und Ferienwohnungs-Conciergerien (Annemasse, Genf, Evian). Organisch: Wikipedia, conciergerie-privee-vaud.ch (Privat-Conciergerie), Indeed (Stellen), pluri-services.ch (Schlüsselübergabe für Reisende), enzonet.ch (Conciergerie d’entreprise), bconciergerie.ch («conciergerie d’immeuble» für Régies und PPE), local.ch (Privat-Conciergerie Genf), fragniere-conciergeriepro.ch (Unterhalt von Liegenschaften, Freiburg), piguetgalland.ch (Zweitwohnungen). Verwandte Suchen: Airbnb, de luxe, privée, emploi. Nur 2 von 9 Treffern meinen die Hauswartung.
- **«custode» (it, 170):** KI-Übersicht zum Beruf (Quellen orientamento.ch, Treccani, Manpower), organisch abad.ch («Custode sociale», anderer Sinn), Stellenportale (Jooble, Indeed, esperto.ch, Pemsa mit «Custode di stabili»), Berufsinformation (orientamento.ch «Custode Express», gateway.one «Custode APF», benke.ch), Wörterbuch Treccani. Kein Hauswartungsanbieter. Bestätigt den Fachbegriff «custode di stabili», zeigt aber Berufs- statt Kaufabsicht.
- **«caretaker» (en, 170):** Nutzerfragen zur Bedeutung, organisch care-taker.ch (Hauswartung Thurgau), Merriam-Webster, Cambridge («a person employed to take care of a large building»), Spotify, Wikipedia, caregiveraction.org (Pflege), pluralpedia.org, IMDb, caretaker.de (Empfangsdienst in Deutschland). Eine Hauswartungsfirma unter neun Treffern.

## Kontrolltest Sprachfilter

| Begriff | mit en | mit fr | mit it | mit de |
|---|---|---|---|---|
| entreprise de nettoyage | 1'600 | 1'600 | nicht gesendet | 1'600 |
| impresa di pulizie | 170 | nicht gesendet | 170 (G) | 170 |
| hauswartung | 2'400 (G) | nicht gesendet | nicht gesendet | 2'400 (G) |
| umzugsreinigung | 720 | nicht gesendet | nicht gesendet | 720 |
| facility services | 720 | 720 | 720 | 720 |
| facility management | 2'400 | 2'400 | 2'400 | 2'400 |
| conciergerie | nicht gesendet | 880 | nicht gesendet | 880 |
| cleaning company | 140 | nicht gesendet | nicht gesendet | 140 |

Gleiche Zahl, gleicher Klickpreis, gleiche Monatsreihe: Der Parameter language_code verändert das Volumen hier nicht. Die Werte sind deshalb keine Aussage über die Sprache der Suchenden. Für Seitenentscheide zählt die Zeichenfolge.

## Grenzen

- Google-Ads-Volumen sind gerundete Monatsmittel, keine Klickprognose. Kleine Werte (10 bis 30) schwanken stark.
- Die Suchabsicht ist nur für drei Kopfbegriffe per SERP geprüft. Wo «Absicht nicht geprüft» steht, ist die Einordnung eine begründete Annahme.
- Ob Google «Fenster- und Fassadenreinigung» als «Fensterreinigung» wertet, ist weiter nicht dokumentiert (wie H3). Die Daten zeigen nur, dass fast niemand die Klammerform sucht.
- Die Vorschläge für EN, FR und IT sind sprachlich nicht muttersprachlich abgenommen (E72).
- Keine Standortcodes unterhalb der Schweiz verwendet (Auftrag). Stadtgenaue Werte für Luzern und Zug liegen für Deutsch in 24 vor.

## Übergabe an den Umbau

- Leistungs- und Premium-Agenten: Abschnitt der eigenen Seite, Titel in `content/<sprache>/seo.ts` (nur eigener Eintrag), H1 in der eigenen Inhaltsdatei.
- Kantone: EN-Titel für Luzern, Aargau und Nidwalden weichen von T6 ab, damit «cleaning company» zusammenhängend bleibt. IT und DE Nidwalden wie T6.
- Startseite und Übersicht, Premium-Übersicht: Vorschläge für `/`, `/leistungen`, `/premium`.
- Die Beschreibungen (T4) nennen den Hauptbegriff der jeweiligen Sprache am Anfang und die Nebenbegriffe im Text.


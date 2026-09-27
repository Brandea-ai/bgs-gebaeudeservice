# Lektorat der englischen Übersetzung: BGS - Gebäudeservice GmbH

Stand 27.09.2026. Geprüft wurde `content/en/` gegen die deutsche Quelle `content/de/` in der Arbeitskopie `scratchpad/bgs-gebaeudeservice`. Dieses Lektorat übernimmt für Englisch die Prüfung, die nach E50 bei Brandea lag. Geändert wurden nur Texte in `content/en/`, keine Schlüssel, Typen, Importe oder Template-Ausdrücke. Kein Commit, kein Build.

> **Nachtrag 27.09.2026 (N088):** Behoben sind die technischen Punkte ohne Entscheid: `areaServed` mit Kantonsnamen je Sprache, Rhythmus kommt als deutscher Wert in die E-Mail, Fehlerseite (ErrorBoundary) in der Sprache der Seite. Offen bleiben der Hinweis «deutsche Fassung massgebend» (Rechtstext, Brandea), die 404-Seite nur auf Deutsch (bekannt, N085) und die Stilpunkte für Muttersprachler (E72).

## 1. Kurzurteil

**Englisch ist nach den Korrekturen freigabefähig.** Die Übersetzung war schon vorher solide: vollständig, britische Schreibung durchgehend (organise, harbour, grey, enquiry), keine erfundenen Zahlen, Kantone und Orte korrekt. Die zwei kritischen Fehler (eine Haftungsaussage im Impressum, ein falscher Bezug auf den Premiumseiten) sind behoben, ebenso neun unübliche oder missverständliche Begriffe und 40 kleinere Stellen. Typprüfung, Titellängen, Zeichenprüfung sowie der Abgleich von Zahlen und Links laufen fehlerfrei.

**Aber `LANGUAGES=true` noch nicht allein wegen Englisch setzen.** Der Schalter gibt Englisch, Französisch und Italienisch gemeinsam frei (`next.config.ts` Z. 15 bis 17, `shared/i18n.ts` Z. 25 und 26). Er darf erst gesetzt werden, wenn auch FR und IT freigegeben sind, oder nachdem ein Schalter je Sprache eingebaut ist (Vorschlag in Abschnitt 6, Punkt A).

Drei Vorbehalte, keiner blockiert Englisch:

1. Ein Hinweis «bei Abweichungen gilt die deutsche Fassung» fehlt in beiden Rechtstexten. Vorschlag in Abschnitt 6, Punkt C. Weil es ein Rechtstext ist, entscheidet Brandea (E70).
2. Die deutschen Rechtstexte selbst sind ohne Fachprüfung (E22). Die englische Fassung gibt sie jetzt treu wieder und erbt dieses akzeptierte Restrisiko.
3. Die Abnahme von M60 verlangt «Übersetzungen von Muttersprachlern freigegeben» (`06-MASSNAHMEN-BACKLOG.md`, Zeile M60). Ein Mensch mit Englisch als Muttersprache sollte die 14 Stellen in Abschnitt 6.3 ansehen. Das sind Stil- und Wortwahlfragen, keine Fehler.

## 2. Zahlen

| Grösse | Wert |
|---|---|
| Geprüfte Dateien | 9 von 9 in `content/en/`, dazu die 9 deutschen Quelldateien, `shared/company.ts`, `shared/i18n.ts`, `shared/seo.ts`, `shared/structured-data.ts` und alle Darstellungskomponenten auf fest verdrahtete Texte |
| Schlüssel im englischen Wörterbuch | 1'268 (1'269 mit neuer Marke) |
| Sichtbare Textstellen | 1'129 (ohne Pfade, Datumswerte, technische Formularwerte) |
| Verschiedene Zeichenketten | 859 über beide Marken-Modi, rund 8'700 Wörter |
| Geänderte Dateien und Zeilen | 8 Dateien, 106 Zeilen (`index.ts` unverändert) |
| Befunde kritisch | 2 (2 Zeilen, eine davon wirkt auf 3 Seiten) |
| Befunde mittel | 9 (35 Zeilen) |
| Befunde gering | 40 (69 Zeilen) |

Schwere: **kritisch** heisst, Bedeutung, Recht oder eine Zusage hat sich verschoben, und die englische Aussage ist nirgends im Deutschen gedeckt. **Mittel** heisst falscher oder unüblicher Begriff, oder eine im Deutschen belegte Zusage stand an einer Stelle, an der die Vorlage sie nicht macht. **Gering** heisst Stil, Typografie, Wortstellung, Einheitlichkeit.

Automatische Prüfungen nach allen Änderungen (Skripte im Scratchpad: `pruef_en.cjs`, `vergleich_de_en.cjs`):

- `npm run check` fehlerfrei.
- Alle 23 Titel höchstens 70 Zeichen in beiden Marken-Modi, längster 68 («Office and practice cleaning in Lucerne and Zug \| BGS Gebäudeservice»). Keine doppelten Titel.
- Keine Gedankenstriche, keine Guillemets, keine geraden Anführungszeichen im sichtbaren Text. Apostrophe und Anführungszeichen durchgehend typografisch (’ und ‘ ’).
- Zahlen je Schlüssel identisch mit Deutsch (seit 2006, über 50, über 120, CHF 10 Mio., 24 Stunden). Interne Links je Schlüssel identisch.
- Keine deutschen Wörter im sichtbaren Text ausser Firmenname, Orts- und Strassennamen und dem Zusatz «MWST» (dieser ist Pflicht, siehe Terminologie).

## 3. Tabelle aller Änderungen

Zeilen beziehen sich auf die Dateien nach der Änderung. Stellen mit demselben Befund sind in einer Zeile zusammengefasst.

### Kritisch

| Nr. | Datei: Zeile (Schlüssel) | Vorher | Nachher | Grund | Schwere |
|---|---|---|---|---|---|
| K1 | `recht.ts`: 30 (Impressum, «Liability for content») | However, we accept no liability for its accuracy, completeness or timeliness. Only our quotes and contracts are binding. | However, we give no guarantee that it is accurate, complete or up to date. It is our quotes and contracts that are binding. | DE «keine Gewähr» ist eine Gewährleistung, kein Haftungsausschluss. Das Englische schloss die Haftung ohne Vorbehalt aus, also weiter als das Deutsche. Ein Vorausausschluss für Absicht und grobe Fahrlässigkeit ist nach Art. 100 Abs. 1 OR nichtig. Den Haftungsausschluss enthält im Deutschen erst der nächste Absatz, mit «soweit das Gesetz es zulässt». «Only» stand nicht in der Quelle. | kritisch (Recht) |
| K2 | `premium.ts`: 16 (Schritt «Your team», erscheint auf Luxusimmobilien, Privatjet und Yacht) | Everyone who works in your home has been vetted by us. | Everyone who works for you has been vetted by us. | DE «Wer bei Ihnen arbeitet» ist ortsneutral. «in your home» war auf der Privatjet- und der Yachtseite falsch. | kritisch (Bedeutung) |

### Mittel

| Nr. | Datei: Zeile (Schlüssel) | Vorher | Nachher | Grund | Schwere |
|---|---|---|---|---|---|
| M1 | `leistungen.ts`: 429, 430, 434, 444, 454, 456, 465; `seiten.ts`: 179; `seo.ts`: 73 (Industrie und Hallen) | machinery and installations; When an installation is shut down | machinery and equipment; When equipment is shut down | «Anlagen» heisst im Industriekontext "equipment" (oder "plant"). "installations" ist unüblich und missverständlich. | mittel |
| M2 | `leistungen.ts`: 208, 280, 297, 324, 326, 329, 336; `seiten.ts`: 177; `navigation.ts`: 99 | final construction cleaning | post-construction cleaning (H1 jetzt: Construction and post-construction cleaning for new builds and renovations) | «Bauendreinigung»: im Englischen üblich ist "post-construction cleaning", so auch bei Schweizer Anbietern mit englischen Seiten. Suchvolumen Schweiz englisch für beide Varianten gleich (je 10 pro Monat), entschieden wurde nach Verständlichkeit. | mittel |
| M3 | `leistungen.ts`: 283, 286; `seo.ts`: 63 (Baureinigung) | building clients; For clients, architects … | building owners; For building owners, architects … | «Bauherrschaft»: "clients" ist auf der Website einer Reinigungsfirma mehrdeutig, "building clients" unüblich. TERMDAT hat keinen englischen Eintrag (Eintrag 39347). In `seo.ts`: 63 zusätzlich "construction" zu "building", damit die Beschreibung bei 158 Zeichen bleibt. | mittel |
| M4 | `ratgeber.ts`: 150, 167, 193; `seo.ts`: 108 (Kosten der Unterhaltsreinigung) | working hours (als Kostenfaktor) | cleaning times | «Einsatzzeiten» sind die Zeiten der Reinigung. "working hours" steht auf der Büroseite für die Arbeitszeiten der Kundschaft und war hier missverständlich. | mittel |
| M5 | `premium.ts`: 96, 166, 226 | All offers and commitments of our premium line. | All services and commitments of our premium line. | "offers" liest sich im Englischen wie Sonderangebote. | mittel |
| M6 | `premium.ts`: 107, 130, 138, 149 (Privatjet) | your flight operator | your aircraft operator | Luftfahrtbegriff für den Betreiber eines Flugzeugs ist "aircraft operator". | mittel |
| M7 | `seo.ts`: 33 (Beschreibung Privatjet) | Discreet, by arrangement and always with the same dedicated team. | Discreet, by arrangement and with dedicated teams. | DE-Beschreibung: «mit festen Teams». Die stärkere Zusage «immer dasselbe Team» ist auf der deutschen Seite belegt, gehört aber nicht in eine Beschreibung, die «feste Teams» übersetzt. | mittel |
| M8 | `seo.ts`: 128 (Beschreibung Datenschutz) | … processes personal data on this website, to whom it is passed on and what rights you have under Swiss data protection law. | … processes personal data on this website and what rights you have. | Zusätze gegenüber der deutschen Beschreibung in einem Rechtskontext. Inhaltlich deckt sie die Erklärung, die Vorlage enthält sie nicht. | mittel |
| M9 | `recht.ts`: 55 (Datenschutz, Einleitung) | It is governed by the Swiss Federal Act on Data Protection (FADP). | The Swiss Federal Act on Data Protection (FADP) applies. | «Massgebend ist das DSG» ist keine Rechtswahlklausel, "is governed by" ist eine Vertragsformel. Titel und Kürzel nach Fedlex SR 235.1. | mittel |

### Gering

| Nr. | Datei: Zeile (Schlüssel) | Vorher | Nachher | Grund | Schwere |
|---|---|---|---|---|---|
| G1 | `seo.ts`: 15 (Titel Startseite) | ${company.brand} [Gedankenstrich U+2013] Cleaning and caretaking in Lucerne and Zug | ${company.brand} \| Cleaning and caretaking in Lucerne and Zug | Gedankenstrich (Projektregel). Trennzeichen wie bei allen anderen Titeln, 63 Zeichen. | gering (Pflicht) |
| G2 | `recht.ts`: 80 (Karte) | «Load map» | ‘Load map’ | Guillemets sind im Englischen unüblich. Britisch einfache Anführungszeichen, passend zu den typografischen Apostrophen. | gering |
| G3 | `seiten.ts`: 221 (Namensbedeutung, nur mit neuer Marke sichtbar) | comes from the Latin «clavis», the key. | comes from the Latin ‘clavis’, meaning key. | wie G2, dazu idiomatischer | gering |
| G4 | `common.ts`: 62 (Antwort «Was kostet …», auf 15 Seiten) | That depends on the property and the work involved. We therefore only quote prices once we have seen the property. | That depends on what needs cleaning and how much work is involved. We therefore only give prices in our quote, once we have seen everything on site. | «in der Offerte» fehlte. «property» passte nicht auf die Privatjet- und Yachtseite, das deutsche «Objekt» ist neutral. | gering |
| G5 | `ratgeber.ts`: 179 | We only quote prices once we have seen the property. | We only give prices in our quote, once we have seen the property. | «in der Offerte» ergänzt | gering |
| G6 | `common.ts`: 63; `ratgeber.ts`: 45, 49, 53, 128; `leistungen.ts`: 530 | More under [X](…) | Find out more about [X](…); bei der Aufzählung: see [X](…) | Germanismus («Mehr dazu unter») | gering |
| G7 | `leistungen.ts`: 39, 229; `seiten.ts`: 145, 194 | premium range | premium services | einheitlich mit dem Linktext «Premium services». "range" klingt nach Produktsortiment. | gering |
| G8 | `seo.ts`: 48; `leistungen.ts`: 413, 709; `seiten.ts`: 46, 166, 168; `ratgeber.ts`: 145 | residential and commercial buildings (and business premises); buildings | properties | «Liegenschaften» einheitlich "properties", Doppelung "commercial buildings and business premises" entfernt | gering |
| G9 | `seo.ts`: 93; `seiten.ts`: 144, 145 (Einzugsgebiet) | the lakeshores; Lakeshores and holiday resorts; We are also there for you on the lakeshores … | lakeside areas; Lakeside areas and holiday resorts; We also work in lakeside areas and holiday resorts across the region … | "lakeshore" ist vor allem nordamerikanisch. «sind wir für Sie da» war wörtlich übersetzt. | gering |
| G10 | `seiten.ts`: 148, 243 | Lake Aegeri | Lake Ägeri | Beide Formen sind üblich. Der Umlaut passt zu «Oberägeri» im selben Satz und zu den übrigen Ortsnamen. | gering |
| G11 | `ratgeber.ts`: 133; `seiten.ts`: 213 | Quote on site | On-site quote | idiomatisch ("free on-site quote") | gering |
| G12 | `seiten.ts`: 242 | Where we are there for you | Where we work | Germanismus | gering |
| G13 | `seiten.ts`: 162 | Choose by occasion. | Choose by what you need. | «nach Anlass» wörtlich übersetzt | gering |
| G14 | `seiten.ts`: 86 | We only name a price … | We only quote a price … | idiomatisch | gering |
| G15 | `leistungen.ts`: 26, 602 | We record what we clean and how often after the site visit. (ebenso bei der Umgebungspflege) | After the site visit, we record what we clean and how often. | Wortstellung war mehrdeutig | gering |
| G16 | `leistungen.ts`: 128 | Waste and waste paper, restocking consumables | Waste and paper recycling, restocking consumables | Doppelung | gering |
| G17 | `leistungen.ts`: 247 | What does handover guarantee mean? | What does the handover guarantee mean? | Artikel fehlte | gering |
| G18 | `leistungen.ts`: 303, 345 | after occupancy | after move-in | «nach dem Bezug», "after occupancy" missverständlich | gering |
| G19 | `leistungen.ts`: 400 | Do you clean facades with high pressure? | Do you use high-pressure cleaning on facades? | idiomatisch | gering |
| G20 | `leistungen.ts`: 418 | A quote for windows and facade | A quote for your windows and facade | wie die übrigen Titel der Offertaufrufe | gering |
| G21 | `leistungen.ts`: 592, 607, 608 | open areas | paved areas | «Plätze» einer Liegenschaft sind befestigte Flächen | gering |
| G22 | `leistungen.ts`: 606 | Removing leaves | Clearing leaves | britisch üblich | gering |
| G23 | `leistungen.ts`: 622 | Please arrange additional visits, for example before an event, with us. | Additional visits, for example before an event, can be arranged with us. | Satzbau | gering |
| G24 | `leistungen.ts`: 535 | Major repairs and trade work. | Major repairs and work by tradespeople. | idiomatisch | gering |
| G25 | `leistungen.ts`: 542 | which tasks arise | which tasks are needed | idiomatisch | gering |
| G26 | `leistungen.ts`: 562 | No, we carry out minor repairs. … We report any damage we notice during inspection rounds to you. | No, we only carry out minor repairs. … We report to you any damage we notice during inspection rounds. | Das deutsche «Nein» klar wiedergegeben, Wortstellung | gering |
| G27 | `leistungen.ts`: 652 | We put together the services included with you. | We work out with you which services are included. | Satzbau | gering |
| G28 | `leistungen.ts`: 661 | We put together facility services from our own services: | We put together facility services from these in-house services: | Wortwiederholung. «eigene Leistungen» im Sinn von E53 (keine Partner) | gering |
| G29 | `leistungen.ts`: 674 | Arranging third-party companies, such as tradespeople. | Referrals to third-party firms, such as tradespeople. | «Vermittlung» genauer | gering |
| G30 | `leistungen.ts`: 199, 512, 515 | condominium owners’ associations | communities of condominium owners | amtlicher Begriff: ZGB englisch Art. 712l ff., TERMDAT Grundbuch-Terminologie (Eintrag 67301) | gering |
| G31 | `leistungen.ts`: 517, 533, 565, 566, 598, 611, 626, 673 | winter services | winter maintenance | TERMDAT, Terminologie des ASTRA (Eintrag 236283) | gering |
| G32 | `premium.ts`: 30 | at times that suit you: including evenings … | at times that suit you, including evenings … | Zeichensetzung | gering |
| G33 | `ratgeber.ts`: 12 | Answers to questions about awarding, costing and running building cleaning contracts. | Answers to questions about awarding building cleaning contracts, the costs involved and how the work is organised. | «Kosten» ist nicht "costing" (Kalkulation) | gering |
| G34 | `ratgeber.ts`: 153 | We visit you for the site visit free of charge and without obligation. | We carry out the site visit free of charge and without obligation. | Doppelung | gering |
| G35 | `seo.ts`: 108 | With tips on how to compare quotes from providers. | With tips on comparing quotes. | Zusatz "from providers" (gleiche Zeile wie M4) | gering |
| G36 | `seo.ts`: 58 (Beschreibung Sonderreinigungen) | Deep cleaning and move-out cleaning … in Lucerne, Zug and the surrounding area. | Deep cleaning, move-out and end-of-tenancy cleaning … in Lucerne, Zug and beyond. | «Wohnungsendreinigung» fehlte. Länge 150 Zeichen. | gering |
| G37 | `seo.ts`: 118 (Beschreibung Kontakt) | Free, non-binding quote after an on-site visit | Free quote after an on-site visit | Zusatz gegenüber der deutschen Beschreibung, Zusage anderswo belegt | gering |
| G38 | `seo.ts`: 123 (Beschreibung Impressum) | commercial register, UID, VAT number and contact details. | commercial register, UID and contact details. | Zusatz gegenüber der deutschen Beschreibung | gering |
| G39 | `navigation.ts`: 71 (Formular, Einleitung) | Request a free, non-binding quote. | Request a non-binding quote. | DE «Fordern Sie eine unverbindliche Offerte an.» ohne «kostenlos». Die Zusage steht im Button «Kostenlose Offerte anfragen», daher keine neue Aussage. | gering |
| G40 | `recht.ts`: 99 (Ihre Rechte) | request information about which personal data we process about you | request information on which personal data we process about you | Doppelung «about … about» | gering |

Bewusst **nicht** geändert, obwohl geprüft:

- `recht.ts`: 25, «VAT number CHE-108.687.458 MWST». Korrekt. Die ESTV schreibt: «Die englische Abkürzung (VAT) ist hingegen nicht erlaubt.» Der Zusatz bleibt also «MWST», nur die Bezeichnung davor ist englisch.
- `recht.ts`: 25, «UID CHE-108.687.458». «UID» ist auch die amtliche englische Abkürzung (TERMDAT: Unique Enterprise Identification Number, UID).
- `common.ts`: 17, «Commercial Register of the Canton of Lucerne». Fedlex und TERMDAT schreiben den Gattungsbegriff klein ("commercial register"). Hier steht er als Name des kantonalen Registers und auf der Seite «About us» als eigene Zeile, die Grossschreibung ist dort richtig.
- Rechte der betroffenen Person, Empfänger, Übermittlung ins Ausland, Aufbewahrung, Kontakt: inhaltlich deckungsgleich mit Deutsch, Begriffe wie im DSG englisch (controller, disclosure abroad, adequate level of protection, standard contractual clauses, FDPIC).

## 4. Entscheide zu den Ermessensfragen

### «Geschäftsführer»: «managing director» bleibt

- **Fundstellen DE (10):** `common.ts`: 31; `premium.ts`: 15, 25, 64; `seiten.ts`: 98, 108, 242, 259; `ratgeber.ts`: 133, 214. Alle im Werbetext, sichtbar auf allen Leistungs- und Premiumseiten, Startseite, Kontakt, Über uns und in beiden Ratgebern.
- **Fundstellen EN (10 sichtbar):** `common.ts`: 51; `premium.ts`: 11, 21, 59; `seiten.ts`: 85, 95, 204, 247; `ratgeber.ts`: 124, 204. Überall einheitlich «our managing director». Dazu ein Code-Kommentar in `common.ts`: 46.
- **Impressum:** Das deutsche Impressum nennt keine Funktion, nur «Vertreten durch». Englisch «Represented by» ist richtig. Falls die Funktion später ergänzt wird, heisst sie für eine GmbH «managing director».
- **Begründung:** Die englische Fedlex-Fassung des OR nennt die Geschäftsführer der GmbH «managing directors» (Art. 809 bis 814, Randtitel «Duties of the managing directors»). TERMDAT hat für den GmbH-Geschäftsführer keinen englischen Eintrag, nur andere Bedeutungen («person conducting business» für die Geschäftsführung ohne Auftrag, «accountable manager» in der Luftfahrt). Im britischen Werbetext ist «managing director» die natürliche Bezeichnung für die Leitung eines kleinen Unternehmens. «Director» allein wäre in der Schweiz missverständlich (Verwaltungsrat einer AG heisst «board of directors»), «CEO» wirkt für einen KMU-Betrieb übertrieben.

### «Luxusimmobilien»: «luxury properties» bleibt

- **Fundstellen DE:** `navigation.ts`: 37, 94; `seiten.ts`: 73, 226; `seo.ts`: 26, 27.
- **Fundstellen EN:** `navigation.ts`: 34, 86; `seiten.ts`: 61, 224; `seo.ts`: 26, 27; Adresse `premium/luxury-properties` in `shared/i18n.ts`: 83.
- **Begründung:** Standardbegriff im englischen Immobilienmarkt, deckt Villen, Lofts und Residenzen ab (nicht nur «homes»). Er passt zur englischen Adresse, Linktext und URL bleiben gleich. Suchvolumen Schweiz englisch (DataForSEO, 27.09.2026): «luxury properties switzerland» 110 pro Monat, «luxury homes switzerland» 70. Der Titel nennt zusätzlich «villas» («Cleaning for villas and luxury properties», 62 Zeichen).

### «Zweitwohnungen und Residences»: «second homes and residences» bleibt

- **Fundstellen DE:** `navigation.ts`: 97 (Formularoption); `seiten.ts`: 232 (Überschrift «Ausserdem für»); «Zweitwohnungen» zusätzlich in `premium.ts`: 38, 171, 232; `seiten.ts`: 155, 218; `seo.ts`: 22, 23.
- **Fundstellen EN:** `navigation.ts`: 89; `seiten.ts`: 230; zusätzlich `premium.ts`: 33, 164, 224; `seiten.ts`: 145, 219; `seo.ts`: 22, 23.
- **Begründung:** «Second home» ist der amtliche Schweizer Begriff (Zweitwohnungsgesetz englisch: Federal Act on Second Homes, SHA; TERMDAT Raumplanung, Eintrag 127720: «second home»). «Holiday home» wäre enger (touristische Nutzung) und würde die Aussage verschieben. «Residences» gibt das deutsche Lehnwort für hochwertige Wohnanlagen wieder und ist im Englischen gängig. Der Formularwert bleibt absichtlich deutsch («Zweitwohnungen und Residences»), weil er so in die E-Mail an die Firma geht. Nur die Anzeige ist englisch.

## 5. Terminologie (Deutsch zu Englisch, vereinheitlicht)

| Deutsch | Englisch | Beleg oder Hinweis |
|---|---|---|
| Unterhaltsreinigung | maintenance cleaning (umschrieben: regular cleaning) | Vorgabe; «maintenance cleaning» 20 Suchen pro Monat in CH, «regular cleaning» 10 |
| Büro- und Praxisreinigung | office and practice cleaning | |
| Sonderreinigung(en) | special cleaning (services) | Adresse `services/special-cleaning`, siehe 6.3 |
| Grundreinigung | deep cleaning, deep clean | «deep cleaning» 320 Suchen pro Monat in CH |
| Umzugsreinigung | move-out cleaning | «move out cleaning» 50 Suchen pro Monat |
| Wohnungsendreinigung | end-of-tenancy cleaning | «end of tenancy cleaning» 30 |
| Abnahmegarantie | handover guarantee | in der Schweiz englisch so verwendet (Anbieter in Zürich und Zug) |
| Abnahme (Wohnung) / Bauabnahme | handover / acceptance inspection | |
| Baureinigung | construction cleaning | |
| Bauendreinigung | post-construction cleaning | M2 |
| Grob-, Zwischenreinigung | rough cleaning, interim cleaning | |
| Fenster- und Fassadenreinigung | window and facade cleaning | |
| mit Hochdruck | high-pressure cleaning | |
| Industrie- und Hallenreinigung | industrial and warehouse cleaning | |
| Maschinen und Anlagen | machinery and equipment | M1 |
| Hauswartung / Hauswart | caretaking (services) / caretaker | britisch; «caretaker» 170 gegen «janitor services» 30. TERMDAT nennt «Building Custodian» nur als SBFI-Berufstitel mit Fachausweis |
| Kontrollgänge | inspection rounds | |
| Haustechnik | building services | |
| Wohnungsübergabe | flat handover | «flat cleaning» 40 gegen «apartment cleaning» 20 |
| Aussen- und Grünflächenpflege / Umgebungspflege | grounds and green space maintenance / grounds maintenance | |
| Plätze | paved areas | G21 |
| Winterdienst | winter maintenance | TERMDAT 236283 |
| Pikettdienst | on-call service | TERMDAT 41408: on-call duty |
| Facility Services / technisches Facility Management | facility services / technical facility management | |
| Nachfüllservice, Verbrauchsmaterial | restocking service, consumables | |
| Treppenhaus, Waschküche, Lift | stairwell, laundry room, lift | britisch «lift» |
| Liegenschaft, Objekt | property | bei Jets und Yachten neutral umschrieben (G4) |
| Gewerbeflächen | business premises | |
| Mehrfamilienhaus / Wohn- und Geschäftshaus / Wohnung | apartment building / mixed-use building / flat | siehe 6.3 |
| Verwaltung | property manager, property management | |
| Stockwerkeigentümerschaft | community of condominium owners | ZGB englisch, TERMDAT 67301 |
| Bauherrschaft | building owner | TERMDAT ohne englischen Eintrag (39347) |
| Generalunternehmen, Makler | general contractor, estate agent | |
| Offerte, Besichtigung, Rundgang | quote, site visit, walk-through | |
| Anfrage | enquiry | britisch |
| Einsatzzeiten | cleaning times | M4 |
| Rhythmus | frequency, schedule | |
| Geschäftsführer | managing director | OR englisch Art. 809 ff. |
| feste Teams / immer dasselbe Team | dedicated teams / always the same team | |
| überprüft (Personal) | vetted | |
| Geheimhaltungsvereinbarung | non-disclosure agreement | |
| Luxusimmobilien | luxury properties | Abschnitt 4 |
| Zweitwohnungen | second homes | Zweitwohnungsgesetz (SHA), TERMDAT 127720 |
| Premium-Linie / Premium-Bereich | premium line / premium services | G7 |
| Betriebshaftpflichtversicherung | business liability insurance | so bei Schweizer Versicherern, siehe 6.3 |
| Ratgeber, Einzugsgebiet | guides, service area | |
| Vierwaldstättersee, Zugersee, Ägerisee, Sempachersee, Hallwilersee | Lake Lucerne, Lake Zug, Lake Ägeri, Lake Sempach, Lake Hallwil | |
| Luzern (Stadt) / Kanton Luzern | Lucerne / Canton of Lucerne | |
| Impressum / Datenschutzerklärung | legal notice / privacy policy | |
| Betreiberin / Vertreten durch | operator / represented by | |
| Handelsregister (des Kantons Luzern) | commercial register (Commercial Register of the Canton of Lucerne) | TERMDAT 106867, OR Art. 954a |
| UID | UID (Unique Enterprise Identification Number) | TERMDAT 92424 |
| Mehrwertsteuernummer | VAT number, Zusatz bleibt «MWST» | TERMDAT 96627, ESTV |
| DSG / EDÖB | Federal Act on Data Protection (FADP) / Federal Data Protection and Information Commissioner (FDPIC) | Fedlex SR 235.1, TERMDAT 3054 |
| Verantwortlicher, Bekanntgabe ins Ausland | controller, disclosure abroad | DSG Art. 5 Bst. j, Art. 16 |
| Auskunft, Datenherausgabe | (right to) information, data portability | DSG Art. 25, Art. 28 |
| keine Gewähr | no guarantee (nicht: no liability) | K1 |

## 6. Offene Punkte ausserhalb von `content/en/`, Restrisiken, Prüfliste für Muttersprachler

### 6.1 Offene Punkte (nicht geändert, nur gemeldet)

**A. Ein Schalter für alle Sprachen.** `LANGUAGES=true` gibt EN, FR und IT gleichzeitig frei (`next.config.ts` Z. 15 bis 17 setzt `LANGUAGES_ACTIVE`, `shared/i18n.ts` Z. 25 und 26 wertet nur `'true'` aus). Soll Englisch vor FR und IT live gehen, braucht es eine Liste. Vorschlag:

```ts
// next.config.ts: Wert unverändert durchreichen, 'true' oder Liste wie 'en' oder 'en,fr'
const languagesActive = process.env.LANGUAGES ?? (process.env.VERCEL_ENV !== 'production' ? 'true' : 'false')
// env: { LANGUAGES_ACTIVE: languagesActive }

// shared/i18n.ts
const rawLanguages = process.env.LANGUAGES_ACTIVE ?? 'false'
export const activeLocales: readonly Locale[] =
  rawLanguages === 'true'
    ? locales
    : [defaultLocale, ...locales.filter((l) => l !== defaultLocale && rawLanguages.split(',').includes(l))]
```

hreflang, Sitemap und Umschalter nutzen bereits `activeLocales` und würden automatisch folgen. Danach mit dem Seiten-Prüfskript kontrollieren.

**B. Gedankenstrich im deutschen Startseitentitel.** `content/de/seo.ts` Z. 15: «${company.brand} [Gedankenstrich U+2013] Reinigung und Hauswartung in Luzern und Zug». Einziger Gedankenstrich in `content/de/` und `shared/`. Vorschlag wie im Englischen: «${company.brand} \| Reinigung und Hauswartung in Luzern und Zug». Die französische und italienische Fassung prüfen die anderen Agenten.

**C. Hinweis zur massgebenden Fassung fehlt** in Impressum und Datenschutzerklärung, in keiner Sprache vorhanden. Vorschlag für das Ende beider englischen Rechtstexte, als eigener letzter Abschnitt in `content/en/recht.ts`:

> **Language**
> This English version is a translation provided for your convenience. In the event of any discrepancy between the English and the German version, the German version shall prevail.

Gleiche Formel sinngemäss für FR und IT. Rechtstext, daher Entscheid von Brandea (E70).

**D. Strukturierte Daten auf Deutsch.** `shared/structured-data.ts` Z. 17 erzeugt `areaServed` immer als «Kanton Luzern» usw., auch auf englischen Seiten (unsichtbar, JSON-LD). Vorschlag: Namen je Sprache, im Englischen «Canton of Lucerne» (die Wörter stehen schon in `content/en/seiten.ts`: 141). Gering.

**E. Telefonnummern nur im nationalen Format.** `shared/company.ts` Z. 33 und 34 («041 320 56 10», «079 711 39 40») erscheinen so im englischen Impressum, Datenschutz, Kontakt und in der Fehlermeldung des Formulars. Für internationale Kundschaft wäre «+41 41 320 56 10» und «+41 79 711 39 40» klarer (eigene Anzeige je Sprache). Optional.

**F. Vorläufige E-Mail-Adresse** (`shared/company.ts` Z. 36, E15) steht auch im englischen Impressum, Datenschutz und Formular. Bekannt, vor dem Go-live ersetzen.

**G. Kaputter Code-Kommentar** in `content/en/seiten.ts` Z. 238 und 239 (unsichtbar, nicht geändert, weil der Auftrag nur Texte umfasst). Vorschlag: `// Same keys and order as the German list (symbols in app/premium/page.tsx).`

**H. Geprüft und in Ordnung:** übersetzte Adressen in `shared/i18n.ts` (passen zu allen Begriffen), Titelaufbau in `shared/seo.ts`, alle Darstellungskomponenten ohne fest verdrahtete deutsche Texte (einzige Ausnahme `PremiumParallax.tsx` Z. 107 «Bild folgt», die Komponente wird nirgends verwendet). Die 404-Seite erscheint absichtlich immer auf Deutsch (`app/global-not-found.tsx`, M60). Das Formular schickt die Leistung als deutschen Wert und den Rhythmus in der Sprache der Seite; die E-Mail nennt die Sprache der Anfrage (`server/email.ts` Z. 96 bis 98).

### 6.2 Restrisiken

1. **Rechtstexte:** Die deutschen Texte sind ohne Fachprüfung (E22). Die englischen Fedlex-Fassungen sind laut Fedlex nicht rechtsverbindlich («English is not an official language of the Swiss Confederation»). Die Übersetzung folgt deren Terminologie, ersetzt aber keine juristische Prüfung.
2. **Keine Sichtprüfung im Browser:** Kein Build und kein Server laut Auftrag. Geprüft wurde automatisch (Typen, Titel, Zeichen, Zahlen, Links, beide Marken-Modi) und durch zwei vollständige Lesedurchgänge.
3. **FR und IT** sind nicht Teil dieses Lektorats, wegen des gemeinsamen Schalters (Punkt A) aber Voraussetzung für `LANGUAGES=true`.
4. **TERMDAT** war am 27.09.2026 von etwa 09:27 bis 09:36 Uhr gestört («technische Probleme»). Die Abfragen danach liefen über die Weboberfläche. Die öffentliche TERMDAT-Schnittstelle enthält fast nur Behördennamen, Fachbegriffe fehlen dort.
5. **Suchvolumen** für englische Suchbegriffe in der Schweiz sind sehr klein (meist 10 pro Monat). Die Wortwahl wirkt kaum auf das Ranking, Vorrang hatte die Verständlichkeit.

### 6.3 Für eine Person mit Englisch als Muttersprache (konkret, nach Priorität)

1. `recht.ts`: 30, Impressum: Klingt «However, we give no guarantee that it is accurate, complete or up to date. It is our quotes and contracts that are binding.» für britische Leser natürlich und rechtlich eindeutig? Am besten mit juristischer Erfahrung.
2. «Special cleaning» als Leistungsname (`navigation.ts`: 15, `seo.ts`: 56 und 57, Adresse `services/special-cleaning` in `shared/i18n.ts`: 47). Britisch idiomatischer wäre «specialist cleaning». Eine Änderung müsste auch die Adresse betreffen.
3. «Maintenance cleaning» als Hauptbegriff (`seo.ts`: 46 und 47, `leistungen.ts`: 14). Britisch sagt man eher «regular cleaning» oder «contract cleaning». Beibehalten wegen Vorgabe und Adresse `services/maintenance-cleaning`.
4. «Winter maintenance» (`leistungen.ts`: 517, 598): Wird «Not offered: Winter maintenance» als Schneeräumung verstanden oder als «keine Wartung im Winter»? Alternative: «snow clearing and gritting».
5. «Communities of condominium owners» (`leistungen.ts`: 199, 512, 515): amtlich korrekt. Ist das im Werbetext verständlich genug, oder ist «condominium owners’ associations» besser?
6. «Handover guarantee» (`leistungen.ts`: 201, 207, 226, 228, 247): Verstehen britische Leser ohne Erklärung, was garantiert ist? Die FAQ erklärt es, die Kurzfakten nicht.
7. «Building cleaning» in der H1 der Startseite (`seiten.ts`: 36) und im Ratgebertitel «Guides to building cleaning» (`ratgeber.ts`: 11, `seo.ts`: 97). Natürlich oder zu wörtlich?
8. «Flat» neben «apartment buildings» (`leistungen.ts`: 17, 20 gegen 195, 214, 511, 582). Britisch gemischt üblich, bitte bestätigen.
9. «Business liability insurance» (`common.ts`: 64, `seiten.ts`: 21, 212): so bei Schweizer Versicherern. Britisch hiesse das Produkt «public liability insurance».
10. «Caretaking» und «caretaker» (`navigation.ts`: 24, `seo.ts`: 76 bis 78): für Expats in der Schweiz verständlich?
11. «Let us get to know each other» (`seiten.ts`: 100): eher «Let’s get to know each other»?
12. «Aircraft operator» (`premium.ts`: 107, 130, 138, 149): passend für Eigentümer von Privatjets, oder nur «operator»?
13. «Lakeside areas and holiday resorts» (`seiten.ts`: 144 und 145).
14. «Do you also take on assignments at short notice?» (`seiten.ts`: 129): «jobs» statt «assignments»?

## 7. Quellen

Recht und Terminologie:

- ESTV, Unternehmens-Identifikationsnummer (UID), Format der MWST-Nummer, «Die englische Abkürzung (VAT) ist hingegen nicht erlaubt»: https://www.estv.admin.ch/de/unternehmens-identifikationsnummer-uid
- ESTV, englische Seite «Enterprise Identification Number (UID)»: https://www.estv.admin.ch/en/enterprise-identification-number-uid
- Fedlex, Federal Act on Data Protection (FADP), SR 235.1, englisch, Stand 7.7.2025 (Art. 4, 5, 16, 25, 28, 32): https://fedlex.data.admin.ch/filestore/fedlex.data.admin.ch/eli/cc/2022/491/20250707/en/pdf-a/fedlex-data-admin-ch-eli-cc-2022-491-20250707-en-pdf-a.pdf und https://www.fedlex.admin.ch/eli/cc/2022/491/en
- Fedlex, Code of Obligations, SR 220, englisch, Stand 1.1.2026 (Art. 100, 809 bis 814, 954a): https://fedlex.data.admin.ch/filestore/fedlex.data.admin.ch/eli/cc/27/317_321_377/20260101/en/pdf-a/fedlex-data-admin-ch-eli-cc-27-317_321_377-20260101-en-pdf-a.pdf und https://www.fedlex.admin.ch/eli/cc/27/317_321_377/en
- Fedlex, Swiss Civil Code, SR 210, englisch, Stand 1.1.2025 (Art. 712a ff., community of condominium owners): https://fedlex.data.admin.ch/filestore/fedlex.data.admin.ch/eli/cc/24/233_245_233/20250101/en/pdf-a/fedlex-data-admin-ch-eli-cc-24-233_245_233-20250101-en-pdf-a.pdf
- Zweitwohnungsgesetz, englischer Titel «Federal Act on Second Homes (Second Homes Act, SHA)»: https://lex.weblaw.ch/lex.php?lex_id=19582&norm_id=702 und deutsch https://www.fedlex.admin.ch/eli/cc/2015/886/de
- TERMDAT (Weboberfläche, abgefragt 27.09.2026): Stockwerkeigentümergemeinschaft https://www.termdat.bk.admin.ch/search/entry/67301 ; UID https://www.termdat.bk.admin.ch/search/entry/92424 ; Mehrwertsteuernummer https://www.termdat.bk.admin.ch/search/entry/96627 ; Handelsregister https://www.termdat.bk.admin.ch/search/entry/106867 ; EDÖB https://www.termdat.bk.admin.ch/search/entry/3054 ; Pikettdienst https://www.termdat.bk.admin.ch/search/entry/41408 ; Winterdienst https://www.termdat.bk.admin.ch/search/entry/236283 ; Zweitwohnung https://www.termdat.bk.admin.ch/search/entry/127720 ; Hauswart https://www.termdat.bk.admin.ch/search/entry/55507 ; Bauherrschaft https://www.termdat.bk.admin.ch/search/entry/39347 ; Geschäftsführer https://www.termdat.bk.admin.ch/search/entry/106591
- TERMDAT, öffentliche Schnittstelle (Umfang geprüft): https://api.termdat.bk.admin.ch/swagger/index.html

Sprachgebrauch und Ortsnamen:

- Lake Ägeri / Lake Aegeri: https://commons.wikimedia.org/wiki/Category:Lake_%C3%84geri ; https://www.aegerisee-schifffahrt.ch/en/cruise-information/lake-aegeri-cruise/ ; https://www.myswitzerland.com/en-us/destinations/lake-aegeri/ ; https://en.wikipedia.org/wiki/%C3%84gerisee
- «Handover guarantee» im Schweizer Englisch: https://zuericlean.com/cleaning-handover-guarantee
- «Post-construction cleaning» und «final construction cleaning» bei Schweizer Anbietern: https://flexiclean.ch/services/post-construction-cleaning ; https://zuericlean.com/cleaning-services/post-construction-cleaning ; https://areinigung.ch/en/maintenance-and-building-cleaning/

Suchvolumen:

- DataForSEO, Google Ads Search Volume (Schweiz, Sprache Englisch, 12 Monate bis August 2026), abgefragt am 27.09.2026, zwei Abfragen mit zusammen 107 Suchbegriffen: https://docs.dataforseo.com/v3/keywords_data/google_ads/search_volume/live/

Projektdokumente:

- `CLAUDE.md` (Schalter `LANGUAGES`, E70), `Webseite-Analyse/07-BRIEFING-UND-ENTSCHEIDUNGEN.md` (E43, E50, E51, E71), `Webseite-Analyse/06-MASSNAHMEN-BACKLOG.md` (M60, Abnahmekriterium), `Webseite-Analyse/14-ANTWORTEN-RUNDE-3.md` Abschnitt 5

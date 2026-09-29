# Welle 3, unabhängiger Audit Inhalt, Fakten und Sprachen

Stand 29.09.2026. Produktbasis `fc6a788`, ursprüngliche Arbeitskopie. Nur lesend am Produkt gearbeitet. Keine Builds, kein Formularversand, keine Änderung von Website-Dateien. Auditwerkzeuge und Ergebnisse liegen in diesem Ordner. Änderungen in parallelen Korrekturzweigen sind noch keine integrierte Abnahme.

## Ergebnis und Prüfgrenze

Zwei neue mittlere Befunde sind durch Primärtext und zweiten Skeptiker bestätigt: die zu weiche praktische Folgerung aus dem Gewässerschutzverbot auf Yacht und die fehlende Probezeit-Einschränkung der Kündigungsfristen auf Facility Services. Der bekannte Sitzfehler in Navigation/Footer/SEO ist ebenfalls noch im Basisstand. Sechs weitere niedrige Präzisierungen sind einzeln dokumentiert.

`befunde-r1.json` enthält je Befund ID, Schwere, Seite, Datei, Problem, Beleg, Fix, Kundenfrage und Gegenprüfung. Das ist kein pauschaler Produktions-Pass. UX, SEO des gebauten HTML, A4-Druck und Runtime-Funktion prüft diese Linse nicht stellvertretend.

Alle **156** übergebenen Punkte wurden einzeln disponiert. Stand dieser Prüfung: **70 aktuell, 34 erledigt oder widerlegt, 32 Kundenfrage, 20 Vorschlag**. Die Kategorien beziehen sich auf die originalen Einträge, nicht auf 156 unterschiedliche Fehler. Die Integrator-Einträge O136 bis O156 wiederholen viele Einzelpunkte. Mischpunkte enthalten eine Teilentscheidung. Originalwortlaut und aktuelle Entscheidung stehen in `offene-punkte-disposition.json`, lesbar zusammengefasst in `.md`.

## Linsenmatrix

| Linse | Umfang und durchgeführte Prüfung | Ergebnis, Grenze |
|---|---|---|
| fakten-leistungen | 10 Leistungen und 3 Premiumseiten; Unternehmensbehauptungen gegen R3/R5/R6, E18/E28/E29/E30/E40/E41/E56/E58; verlinkte Rechts-/Fachquellen und jeweilige Anwendung | INH-R1-01/02 mittel, INH-R1-04/05/07/08 niedrig; Quellenmatrix separat |
| fakten-rest | 5 Kantone, Einzugsgebiet, Start, Übersichten, Über uns, Kontakt, 5 Ratgeber und Rechtstexte; Steuer-/GAV-/Register-/Regiondaten | Sitz INH-R1-03; Kostenbeispiel INH-R1-09. Datenschutz nennt Rollen/Grösse und beide Karten bereits |
| deutsch A | 13 Seiten; Zielgruppen, Versprechen, Rechtswörter, Zahlen, klare Abgrenzungen, Schweizer ss, Gedankenstriche | 0 Gedankenstriche/ß im Inhaltsmodell. Sachbefunde wie oben |
| deutsch B | 19 übrige Seiten plus Navigation/Formular; gleiche Checks, zusätzliche Kantons-/Ratgeberdaten | Sitz und Kostenbeispiel; kein erfundener Winterdienst/Privatmieterumfang |
| englisch A | 13 Seiten; Inhaltsschlüssel, Zahlen/Zeitfenster, Technik-/Rechtsbezüge, Zielgruppe, britische Begriffe | Keine zusätzliche bestätigte Bedeutungsverschiebung. Meter readings ist auch britisch korrekt. Fachlese-Gate E72 bleibt |
| englisch B | 19 Seiten plus Shared-Texte; Übersetzungs-/Zahlenabgleich und Link-/Quellenlabels | Englischer ArG/VUV-Link korrekt als deutscher Text ausgewiesen, kein erfundenes englisches Gesetz. E72 bleibt |
| französisch A | 13 Seiten; Strukturen, Rechtsverweise, Zahlen, Höflichkeit, Terminologie, geschützte Zwischenräume | Keine zusätzliche bestätigte Bedeutungsverschiebung. Projetypografie mit schmalem geschütztem Zwischenraum beibehalten. E72 bleibt |
| französisch B | 19 Seiten plus Shared-Texte; Kantons-/Feiertagsnamen, Daten, Rollen-/Datenschutzparität | Ergänzendes au-delà de20% im Luzerner Fact stimmt inhaltlich mit Detailtext. Keine neue Fehlerstufe allein wegen anderer Kürzung. E72 bleibt |
| italienisch A | 13 Seiten; gleiche Paritäts-/Faktenchecks und direkte Höflichkeitsansprache | INH-R1-06: sua in Heros gegen Projektkonvention; Vostra in einer Kundenfrage an BGS ist nicht pauschal ein Fehler. E72 bleibt |
| italienisch B | 19 Seiten plus Shared-Texte; Titel, Behörden-/Feiertagsbegriffe, Zahlen und Anrede | Weitere sua-Stellen in Heros vereinheitlichen. Amministrazioni/Gerenze ist Stilentscheid. E72 bleibt |
| verkauf-mehrwert | Alle 32 Seitentypen je Sprache: konkrete Auswahlhilfe, Umfänge, Grenzen, Werkzeuge, Offertvergleich und CTAs; alle 156 Übergabepunkte | Jede Leistungs-/Premiumseite besitzt2 bis 4 eigenständige Werkzeuge. Kein Bedarf an erfundenen Preisen, Referenzen oder Zusatzversprechen. Mobil/Druck müssen Nutzbarkeit der Werkzeuge noch zeigen |
| seo | Kein eigener Produktions-HTML-Crawl in diesem Auftrag | Parent/SEO-Linse, nicht aus Textschlüsseln abgeleitet |
| ux-desktop | Codebezüge und alte offene Hinweise gelesen, keine neue Screenshotabnahme | Parent/UX-Linse; alte Pixelzahlen ausdrücklich keine aktuellen Beweise |
| ux-mobil | Inhaltliche Länge/Ursachen betrachtet, keine neue Browserlängenmessung | Parent/UX-Linse; Werkzeugverdichtung statt Nutzen entfernen |
| a11y, Tempo, Druck | Vorlagenprobleme lokalisiert, keine eigene Build-/Lighthouse-/A4-Prüfung | Parent/Technik-Linse; kein Ersatz durch vorhandene Testberichte |

Die acht Sprachlinsen sind in `sprachen-linsen.json` getrennt erfasst. Automatische Vollständigkeit/Zahlenprüfung, risikobasierte manuelle Sprachprüfung und echte Muttersprachler-Abnahme sind drei verschiedene Belege. Diese Runde beansprucht keine muttersprachliche Freigabe.

## Quellen: Abruf und semantischer Abgleich getrennt

Das komplette Inhaltsmodell enthält **262 eindeutige Quell-URLs**, nach Entfernen von Artikelankern **174 Dokumentadressen**. Jeder URL ist in `quellen-pruefmatrix.json` eine konkrete Verwendung zugeordnet. `source-fetch.json` protokolliert den ersten HTTP-Abruf, einschliesslich Fehlern. HTTP200 allein wurde nie als gelesener Quelltext gewertet.

- Die 65 Fedlex-Sprachdokumente wurden als echte Gesetzestexte aufgelöst. 64 amtliche HTML-Manifestationen stammen aus den öffentlichen RDFa-Metadaten; der englische StGB-Text war im Browser vollständig lesbar. `source-official.json`, `source-browser.json`, `source-documents/*.official.txt` und `*.browser.txt` dokumentieren das. Die ursprünglich gelieferte JavaScript-Hülle ist kein Nachweis für den Gesetzesinhalt.
- `rechtsanker-texte.json` enthält die tatsächlich gefundenen Artikeltexte je verlinktem Anker. Die ganze zugeordnete Aussage ist zusätzlich in der Themenmatrix beurteilt. Eine Quelle kann mehrere im Label genannte Artikel umfassen, auch wenn ihr Link nur auf den ersten zeigt.
- Suva 44033, Suva 67075 und das BS/BL-Fassadenmerkblatt wurden nach dem Aufruf der Downloadseite als Original-PDF gelesen (`*.linked-0.txt`).
- Der Behördenbrief Umwelt Zentralschweiz vom 26.03.2025 ist ein Scan. Ich habe die Seite gerendert und visuell gelesen (`S040-scan-1.png`). Sie bestätigt die Orientierung am Basler Merkblatt und nennt die sechs zuständigen Zentralschweizer Fachstellen.
- Die Hansgrohe-Primärseite war über das Web-Werkzeug vollständig lesbar, obwohl Requests403 erhielt. Die Empfehlungen zu Baumwolltuch, Zitronensäure und Vermeidung von Mikrofasertüchern stimmen mit der Materialtabelle. Quelle: https://www.hansgrohe.de/bad/ratgeber/pflege-wartung/armaturen-entkalken .
- WHO IRIS blockierte den Volltextabruf. Der WHO-Originaltext ist jedoch bei NCBI vollständig veröffentlicht: https://www.ncbi.nlm.nih.gov/sites/books/NBK310704/?report=reader . Ich habe **die vollständige Tabelle Anhang F mit A unter 60 Minuten, B über 60 Minuten und C über Nacht** gegen Kabine, Bordküche und Waschraum verglichen. Die Website fasst die jeweiligen Pflicht-/Wunschaufgaben richtig zusammen und benennt die Tabelle ausdrücklich als Beispiel aus dem Linienverkehr. Lokal: `S074.annex-f.html` und `.txt`. Kapitel 3 wurde zusätzlich gelesen und bestätigt Mittelzulassung/Materialrisiken. Das ist keine Zusage einer BGS-Ausführungsdauer.
- eCFR 14 CFR 25.853 war über das Web-Werkzeug vollständig lesbar, Stand 25.09.2026. Absatz(a) umfasst Beschichtungen und dekorative Oberflächen; der Websitehinweis nennt zutreffend die US-Bauvorschrift. Requests- oder Captcha-Meldungen anderer Abrufwege wurden nicht als Erfolg verbucht. Quelle: https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-25/subpart-D/subject-group-ECFR1e1f52030ba4797/section-25.853 .
- MeteoSchweiz war wegen deklarativem ShadowDOM scheinbar leer. Der Originalinhalt in `S086.shadow.txt` bestätigt Fichten im April und Föhren im Mai sowie gelben Staub auf Seen. Die Website deklariert die Monatsangaben als Richtwerte.
- Die sechs Zweitwohnungsanteile wurden unmittelbar aus dem **verlinkten ARE-Datenlayer** abgefragt: Flühli 58,31 %, Vitznau 32,71 %, Weggis 24,95 %, Emmetten 32,51 %, Engelberg 55,87 %, Lungern 18,92 %. Alle stimmen exakt. `are-layer.json` und `are-verified.json` enthalten API-Adresse und Originaldatensätze.

`semantic-topic-matrix.json` nennt für jede Aussagegruppe die Quellen, konkret geprüften Aussagen, Urteile und Grenzen. Sie ist ausdrücklich unabhängig von den Abrufstatusfeldern.

## Wichtige Widerlegungen alter Befunde

- **Erfahrung seit 2006:** R6a in `11-ANTWORTEN-RUNDE-1.md` erklärt ausdrücklich die frühere Einzelfirma. E58 bestätigt den schriftlichen Zahlenbeleg. Die GmbH-Gründung 1997 widerspricht der Formulierung Erfahrung seit 2006 nicht. Keine erneute allgemeine Frage dazu.
- **Feste Premium-Teams:** E41 ist ein positiver Beleg. Offen ist Vertretung, weshalb absolute Immer-Formulierungen begrenzt werden. Nicht die gesamte Zusage streichen.
- **Abnahmegarantie:** E56/ABNAHME bestätigt den bestehenden Wortlaut. Nur die später ergänzte besondere Beauftragungskonstellation nach Verwaltungsprotokoll bleibt offen.
- **Geschäftsführer:** R5d bestätigt persönliche Bearbeitung. Technische Weiterleitung durch Brandea widerspricht ihr nicht automatisch. Direkt an steht auf Kontakt im aktuellen Hauptstand bereits nicht mehr. Neutrale Fassung kann den temporären Prozess klarer darstellen.
- **About-Haftpflicht:** Der beanstandete Satz Schäden bei der Arbeit ist bereits entfernt. Die aktuelle Kennzahl nennt nur Deckung der Betriebshaftpflicht.
- **About-Doppelung:** `about.promises` ist totes Datenmaterial, seine frühere Startseitenkomponente besteht nicht mehr. Ein Vorkommen im Wörterbuch beweist keinen doppelten sichtbaren Absatz.
- **Datenschutz:** Rollenfeld, Grösse, Kontaktkarte und Einzugsgebietkarte sind bereits erklärt. `ConsentMap` ist auf Einzugsgebiet vorhanden.
- **Jet-Ausschlüsse:** `scope.notIncluded` ist vorhanden. Der alte Befund Fehlen gilt nicht mehr.

## Kundenfragen und Freigaben

Die Einzel-Disposition bewahrt die tatsächlichen Kundenfragen. Für den konsolidierten Fragebogen sind sie zu deduplizieren:

- F1 Qualitätskontrolle, F2 Vertretung, F3 GAV-/PK-Bestätigung, F4 tatsächliches Abwasservorgehen, F5 Rapport/Übergabe mit Fotos, F6 Geschäftsführername ausserhalb des Impressums, F7 B2B-Schlüssel-/Alarmprotokoll.
- Genaue Garantie bei Reinigungsauftrag nach dem Verwaltungs-Abnahmeprotokoll, Vertragsbündelung mehrerer Standorte, allgemeiner Verzicht auf Spritzmittel, ergänzender Deckungsumfang der Haftpflicht.
- Neue Fachtexte durch BGS gegenlesen, besonders Material-/pH-Tabellen, Leistungen an Bord, Schäden versus reinigbare Verschmutzung. Quellenprüfung belegt Fachinformation, nicht automatisch die reale BGS-Arbeitsweise.
- Sprachfreigabe EN/FR/IT durch Muttersprachler vor `SITE_INDEXABLE` gemäss E72.
- Die bestehenden Launch-Gates zu Kunden-E-Mail, Ziel-Domain/Weiterleitungen/Google-Profil und Marke/Indexierung bleiben beim Parent. Keine davon hier ausgelöst.

Keine erneute Frage allein zu 2006, festen Premium-Teams, bereits bestätigten Standards oder bereits vorhandenen Datenschutzfeldern. Optionale Stil- und Ausbauvorschläge sind keine neuen Pflichtfreigaben.

## Gezielt nach Integration erneut prüfen

1. INH-R1-01/02 mit den identischen Primärtexten erneut lesen, vier Sprachen und druckbare Tabellen/Checklisten einschliessen.
2. Sitz in Navigation, Footer und Luzerner Metabeschreibung gegen `company.seat`; Postadresse unverändert Emmenbrücke.
3. Feste Teamzuteilung ohne absolute Immer-/always-/toujours-/sempre-Formulierung; Qualität/Vertretung nicht neu erfinden.
4. Fugenmassstab, Art. 264-Voraussetzungen und Kostenbeispiel in allen vier Sprachen prüfen.
5. Neue Formulardaten gegen Datenschutzerklärung und versendetes Testpayload prüfen, nur Resend-Nachbau.
6. Neue Textwerkzeuge/IDs/Quellen nach Vorlagenänderung nicht verlieren. Alle 156 Punkte aktualisieren, erledigt erst nach aktuellem Code oder aktuellem Runtime-Beleg.

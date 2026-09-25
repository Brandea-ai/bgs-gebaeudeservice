# Antworten auf die Rückfragen, Runde 1

**Stand 24.09.2026, ausgewertet nach dem Ping-Pong-Verfahren (07, Abschnitt 4).** Grundlage ist der Export des Fragebogens vom 24.09.2026, 14:19:39 UTC (N041). Brandea hat die 58 Fragen beantwortet, Angaben zum Kunden kommen als Eigenangabe über Brandea. Der Export zählt 43 Antworten mit Auswahl oder Text und 15 ohne. 14 dieser 15 sind im Kommentar beantwortet, **ganz offen ist nur R4d**. Personennamen aus den Antworten werden hier nicht übernommen, es steht jeweils die Rolle.

**Umsetzung:** Brandea hat die Umsetzung freigegeben: erst validieren, dann umsetzen (E05 → E11). Umgesetzt wird auf dem Arbeits-Branch in den Wellen aus 06. Ein Produktions- oder Live-Deployment braucht weiterhin eine ausdrückliche Zustimmung, der Launch zusätzlich die Kriterien aus 05.

## 1. Kurzfassung

**Fest steht jetzt:**

- **Sicherheit und Sichtbarkeit:** Der Schlüssel in den Repository-Dokumenten ist abgelaufen. Schlüssel gehören nie wieder in öffentliche Dateien, und die ganze Website wird bis zum Launch auf `noindex` gesetzt (R1, R9a).
- **Leistungen:** 15 von 18 Leistungen werden angeboten, dazu fünf Sonderreinigungen und acht Aufgaben in der Hauswartung. **Winterdienst und Reinigung normaler Privathaushalte entfallen.** Der Nachfüllservice gehört zur Unterhaltsreinigung (R3a–R3c, R6j).
- **Neuer Premium-Bereich** für vermögende Privatkunden: Luxusimmobilien, Privatjet und Yacht. Er kommt neben die normale B2B-Reinigung (R3f, R7b, R10a).
- **Büroreinigung bekommt eine eigene Seite** (R3d). Auf der Website stehen keine Preise, nur die kostenlose Offerte (R3e).
- **Chat und KI-Berater bleiben** und werden nach dem Vorbild von FIMI repariert, das Modell ist noch offen (R8a, R8b). **Die Karte bleibt** und wird erst nach einem Klick geladen (R8c).
- **Formular:** Die Anfragen gehen vorerst an `admin@brandea.de`, versendet über Resend (R5c).
- **Nur belegbare Aussagen:** Erfahrung seit 2006, über 50 Mitarbeitende mit Deutsch, Englisch, Französisch und Italienisch, über 120 Kunden, Betriebshaftpflicht CHF 10 Mio., umweltfreundliche Mittel auf Wunsch. **Entfernt werden** ISO-Zertifizierung, 24/7, Zertifikate, Kundenstimmen, Referenzen und Preise (R5f, R6a–R6k).
- **Bilder:** überall Platzhalter, später KI-Bilder wie bei FIMI (R6g).
- **Rechtstexte:** Brandea schreibt sie selbst, ohne fachliche Prüfung. Das ist ein akzeptiertes Restrisiko (R7d).
- **Launch** Ende November 2026 unter `bgs-service.ch`, die DNS verwaltet Brandea über Vercel (R5h, R9b, R9c).
- **Entscheidungen:** Brandea (Projektleitung) entscheidet, der Agent entscheidet nach Best Practice mit und dokumentiert das. Die Farbwelt ist Rot-Weiss (R12a, R12b).

**Neu geprüft und widerlegt bzw. präzisiert:**

- `swiss-reinigung.ch` gehört **nicht** Brandea. Die Domain ist seit 2003 bei einem Dritten registriert und auf einem Domain-Marktplatz geparkt (N043).
- Die bisherige Kunden-Website nennt nur die Mobilnummer. Verzeichnisse führen Festnetz und Mobilnummer sowie Öffnungszeiten (N042, N046).
- Resend kann heute nur über `brandea.de` versenden. `bgs-service.ch` ist dort nicht eingerichtet (N044).
- Das Impressum muss die eingetragene Firma „BGS - Gebäudeservice GmbH“ nennen, auch bei einem neuen Markennamen (Art. 954a OR, S43).

**Offen (Runde 2, Abschnitt 7):** der Name, die E-Mail-Adresse des Kunden, das Chat-Modell, die Widersprüche W01–W08 und R4d.

## 2. Einordnung je Frage

Einordnung: **Fakt** = Angabe zu einer Tatsache. **Präferenz** = Wunsch oder Entscheidung. **Auftrag** = Brandea bittet um Prüfung oder Vorschlag. Status: **GEKLÄRT**, **GEKLÄRT MIT VORBEHALT** (Beleg oder Bestätigung fehlt noch), **TEILWEISE**, **OFFEN**, **WIDERSPRUCH** (siehe Abschnitt 4).

| ID | Antwort (sinngemäss) | Einordnung | Prüfung | Folge | Status |
|---|---|---|---|---|---|
| R1 | Nur ein abgelaufener Schlüssel. Nichts mehr öffentlich machen, alles auf `noindex`. | Fakt + Präferenz | Inhalt weiter nicht eingesehen. Das Repository ist öffentlich, der Schlüssel bleibt in der Git-Historie. Weil er abgelaufen ist, ist das unkritisch | Schlüssel in den Dateien durch Platzhalter ersetzen, ohne ihn anzuzeigen (M01). Repository auf privat stellen kann nur Brandea (Abschnitt 7). Ganze Website `noindex` (E12) | GEKLÄRT |
| R9a | Vorab-Adresse per `noindex` verbergen, Seite bleibt erreichbar. | Präferenz | — | `noindex` für alle Seiten bis zum Launch, gesteuert über eine Umgebungsvariable (M08, E12). In Produktion wirksam erst nach einem Deployment | GEKLÄRT |
| R8a | Chat bleibt wie bei FIMI, wird optimiert, mit richtigem Schlüssel und Modell. Modell noch offen. | Präferenz | FIMI nutzt Gemini 3.5 Flash über Vertex AI, BGS heute Gemini 2.5 Flash mit einem ungültigen Schlüssel (N045) | M03 geändert: reparieren statt entfernen. Bis dahin sichtbarer Fehlerzustand mit Ausweichkontakt statt stillem Ausfall (E14) | TEILWEISE (Modell) |
| R5c | Noch keine Kundenadresse. Bis alles fertig ist `admin@brandea.de` über Resend. | Präferenz | Resend: `brandea.de` verifiziert, `bgs-service.ch` nicht angelegt (N044). Die heutige Absenderadresse `info@bgs-service.ch` würde abgelehnt | Empfänger `admin@brandea.de`, Absender eine Adresse unter `brandea.de`, beides per Umgebungsvariable. Umstellung auf die Kundenadresse ist Launch-Kriterium (E15, G05) | TEILWEISE (W05) |
| R2a | Neuer Name, neues Logo, alles neu. | Präferenz | Das Impressum muss die eingetragene Firma nennen (S43). Unter „BGS“ gibt es Registereintrag, Verzeichnisse, Facebook und die Domain `bgs-service.ch` (N033, N038, N046) | Namensentscheid mit Optionen in Runde 2. Bis dahin „BGS Gebäudeservice“ als Arbeitsmarke an einer zentralen Stelle, damit der Wechsel ein Eintrag bleibt (E26) | OFFEN (W03) |
| R2b | „Swiss Reinigungsfirma“ war ein Platzhalter. Ein freier, vernünftiger Name wird gesucht. | Fakt + Auftrag | Deckt sich mit N038: kein eigener Markenname, ähnliche Namen bei Dritten | Platzhalter entfernen (M10). Namensprüfung nach Abschnitt 3.6 | GEKLÄRT |
| R2c | Antwort „Brandea“, mit der Rückfrage, ob die Domain überhaupt gekauft wurde. | Auftrag | **Widerlegt:** nicht im Vercel-Team, registriert seit 21.04.2003 über hosttech, Nameserver eines Domain-Marktplatzes, kein Mailserver (N043) | Die Domain gehört Dritten. Alle Verweise und `info@swiss-reinigung.ch` entfernen, Mails dorthin gehen verloren (M09) | GEKLÄRT |
| R2d | Kein Logo, keine Markenfarben, neu gestalten. | Fakt | — | M35, M36 nach dem Namensentscheid | GEKLÄRT |
| R2e | „Powered by Brandea AI“ bleibt sichtbar. | Präferenz | Steht heute in der ersten Ansicht am KI-Berater (N026) | Bleibt, Platzierung beim Berater (E21) | GEKLÄRT |
| R2f | Schweizer Rechtschreibung und Begriffe: ja. | Präferenz | — | M37, `lang="de-CH"` | GEKLÄRT |
| R3a | 15 Leistungen ja, Winterdienst und Privathaushalte nein, Nachfüllservice ist Teil der Unterhaltsreinigung. | Fakt | Die bisherige Kunden-Website und local.ch führen noch einen Winterdienst (N014, N046) | Zielstruktur v2 in 03, Abschnitt 2a und 2b (E17) | GEKLÄRT (W02) |
| R3b | Grundreinigung, Bauendreinigung, Umzugsreinigung mit Abnahmegarantie, Fenster/Glas, Fassade/Hochdruck. | Fakt | — | Sonderreinigungen als Übersicht mit diesen fünf, Links zu Bau-, Fenster- und Fassadenreinigung | GEKLÄRT (W01) |
| R3c | Kontrollgänge, Treppenhaus, Waschküche, Kleinreparaturen, Haustechnik, Wohnungsübergaben, Entsorgung, Umgebungspflege. | Fakt | Ohne Winterdienst und Pikett | Aufgabenkatalog mit Grenzen auf der Hauswartungsseite (04, Chance 2) | GEKLÄRT |
| R3d | Eigene Seite Büroreinigung, Büros sind Hauptzielgruppe. | Präferenz | K01: heute 10 von 12 Punkten wortgleich mit der Unterhaltsreinigung | Zwei Seiten mit getrenntem Fokus: Büros und Praxen bzw. Liegenschaften und Gewerbe (03, K01) | GEKLÄRT |
| R3e | Keine Preise, nur kostenlose Offerte nach Besichtigung. | Präferenz | — | Alle CHF-Beträge entfernen (K12). Der Kostenratgeber nennt Faktoren ohne Zahlen | GEKLÄRT |
| R3f | Premium-Reinigung für gehobene Kunden neben der üblichen B2B-Reinigung. Frage nach Aufbau oder Subdomain. | Auftrag | Google: beides möglich, Unterordner einfacher zu pflegen (S48) | Premium als Unterordner `/premium` auf derselben Domain (E16, Abschnitt 3.8) | GEKLÄRT |
| R4a | Kantone Luzern, Zug, Aargau, nach Einschätzung etwa 15–20 km um Luzern. | Fakt (unsicher) | Zug und das Aargauer Freiamt liegen teils ausserhalb von 20 km | Einzugsgebiet-Seite mit den drei Kantonen, Gemeinden erst nach Bestätigung | TEILWEISE (W04) |
| R4b | Nur Emmenbrücke. | Fakt | Deckt sich mit dem Register (N033) | Keine Standortseiten, keine weiteren Kartenmarker | GEKLÄRT |
| R4c | Besuch möglich, Zeiten „im Kommentar“, dort aber keine. | Fakt | Öffnungszeiten auf local.ch: Mo–Fr 08:00–19:00, Sa 09:00–17:00, So geschlossen (N046) | Zeiten aus local.ch übernehmen, Bestätigung in Runde 2 | GEKLÄRT MIT VORBEHALT |
| R4d | — | — | — | Annahme: gleiche Leistungen im ganzen Gebiet | OFFEN |
| R5a | Nummern von der aktuellen Website übernehmen und validieren. | Auftrag | Kunden-Website: nur Mobilnummer +41 79 … (N042). local.ch: Festnetz 041 320 56 10 und die Mobilnummer (N046). Facebook: Festnetz (N038) | Beide Nummern sind öffentlich für die Firma geführt. Festnetz als Hauptnummer, wie in Verzeichnissen und auf Facebook, Mobilnummer zusätzlich. Ob das Festnetz bedient wird, klärt Runde 2 | GEKLÄRT MIT VORBEHALT |
| R5b | Die Kundenadresse existiert noch nicht, bis dahin Platzhalter `admin@brandea.de`. | Präferenz | `info@bgs-service.ch` steht auf der Kunden-Website und hat einen Mailserver (N013, N042) | Anzeige vorläufig `admin@brandea.de` an einer zentralen Stelle (M54) | TEILWEISE (W05) |
| R5d | Der Geschäftsführer persönlich. | Fakt | — | Ablauf bis zur Offerte auf der Kontaktseite (Rolle, kein Name) | GEKLÄRT |
| R5e | Innerhalb von 24 Stunden (werktags). | Präferenz | Heute 24 h, 12 h und „in Kürze“ gemischt (GLOBAL-028) | Einheitlich „innerhalb von 24 Stunden an Werktagen“ (M30) | GEKLÄRT |
| R5f | 24/7 ist nicht relevant. | Präferenz | „24/7“ steht heute auf 15 Seiten | 24/7 überall entfernen (M11) | GEKLÄRT |
| R5g | Erreichbarkeit wie die heutigen Öffnungszeiten. | Auftrag | Kunden-Website nennt keine Zeiten (N042). local.ch: siehe R4c | Zeiten aus local.ch, Bestätigung in Runde 2 | GEKLÄRT MIT VORBEHALT |
| R5h | Brandea, über Vercel. | Präferenz | Die Mails von `bgs-service.ch` laufen heute über Swizzonic (N013) | Beim DNS-Umzug MX-, SPF- und DMARC-Einträge übernehmen, sonst fällt die Kunden-E-Mail aus (M58, G10) | GEKLÄRT |
| R6a | Schon vorher als Einzelfirma, seit 2006. | Fakt (Eigenangabe) | GmbH seit 1997 im Register, Zweck Reinigung seit 2012 (N037). Nicht unabhängig belegt | Formulierung „Erfahrung seit 2006“, nicht „gegründet 2006“ | GEKLÄRT MIT VORBEHALT |
| R6b | In Arbeit, ohne Termin. | Fakt | Das Impressum sagt heute „in Bearbeitung“ | Keine ISO-Aussage bis zum Zertifikat mit Norm, Stelle und Gültigkeit (M11) | GEKLÄRT |
| R6c | CHF 10 Mio. | Fakt (Eigenangabe) | Heute uneinheitlich 5 bzw. 10 Mio. | Einheitlich CHF 10 Mio., Police als Beleg ablegen | GEKLÄRT MIT VORBEHALT |
| R6d | „Über 120 zufriedene Kunden“, Felder leer. | Fakt (Eigenangabe) | Heute „500+“ | „Über 120 Kunden“ mit Stand September 2026, ohne „zufrieden“, weil das nicht gemessen ist | GEKLÄRT MIT VORBEHALT |
| R6e | Keine echten Kundenstimmen. | Fakt | GLOBAL-022 | Alle Stimmen entfernen, keine Sterne (M12) | GEKLÄRT |
| R6f | Keine Referenzen. | Fakt | — | Referenzseite offline, aus Navigation und Sitemap (M52) | GEKLÄRT |
| R6g | Keine echten Fotos. KI-Bilder wie bei FIMI, bis dahin überall Platzhalter. | Präferenz | KI-Bilder dürfen keine echten Mitarbeitenden, Objekte oder Einsätze vortäuschen | Platzhalter jetzt. KI-Bilder später als Symbolbilder, nie als „unser Team“ oder Referenz (E19, M13) | GEKLÄRT |
| R6h | Keine. Bitte recherchieren, was ohne Risiko nutzbar und im Marketing relevant ist. | Auftrag | Recherche in Abschnitt 3.7 | Nichts behaupten, was nicht vorliegt. Empfehlungsliste für den Kunden (M59) | GEKLÄRT |
| R6i | Auf Wunsch. | Fakt | Heute „konsequent“, „alle Mittel“, „auf Wunsch“ gemischt | Einheitlich „auf Wunsch“, ohne Label- oder Produktangaben | GEKLÄRT |
| R6j | Es gibt keinen Winterdienst. | Fakt | Widerspricht der bisherigen Kunden-Website und local.ch (N014, N046) | Seite und alle Winterdienst-Aussagen entfernen, `/basis/winterdienst` → 410 | GEKLÄRT (W02) |
| R6k | Über 50 Mitarbeitende, Deutsch, Englisch, Französisch, Italienisch. | Fakt (Eigenangabe) | — | Zulässig mit Stand. Mehrsprachigkeit ist für Zug und Premium relevant | GEKLÄRT MIT VORBEHALT |
| R7a | Ja. | Fakt | Zefix aus der Prüfumgebung nicht abrufbar | Person mit Funktion im Impressum. Der Name wird hier nicht dokumentiert | GEKLÄRT |
| R7b | Firmen, Verwaltungen, Eigentümergemeinschaften, dazu vermögende Privatpersonen. | Fakt | Auswahl und Kommentar ergänzen sich | B2B plus Premium-Privatkunden. Datenschutz deckt Privatpersonen ab | GEKLÄRT |
| R7c | Nur Schweiz. | Fakt | — | Datenschutz nach DSG, keine Ausrichtung auf EU-Märkte | GEKLÄRT |
| R7d | Brandea allein, ohne fachliche Prüfung. | Präferenz | Die heutige Datenschutzerklärung beschreibt eine andere Verarbeitung (GLOBAL-027) | Restrisiko von Brandea akzeptiert (E22, G07). Grundlage: Inventar aus P12 | GEKLÄRT |
| R7e | Erst den Namen finden, dann vorsorglich vorbereiten, online erst wenn alles fertig ist. | Präferenz | Art. 954a OR: eingetragene Firma vollständig und unverändert, Marke und Logo zusätzlich erlaubt (S43) | Impressum: „BGS - Gebäudeservice GmbH“, solange keine Umfirmierung eingetragen ist | TEILWEISE (W03) |
| R8b | KI-Berater bleibt, wird repariert und hochwertig wie bei FIMI. | Präferenz | Gleicher Dienst wie der Chat (N045) | M03 geändert, gleiches Modell wie der Chat | GEKLÄRT |
| R8c | Karte ja. | Präferenz | Heute lädt Google ohne Einwilligung, Platzhalter-Standorte (GLOBAL-019) | Interaktive Karte nur nach Klick, nur der Sitz Emmenbrücke mit richtigen Koordinaten (E20, M15) | GEKLÄRT |
| R9b | Ja, die neue Seite ersetzt die Wix-Seite komplett. | Präferenz | Hängt am Namen, falls eine neue Domain kommt (W03) | Alt-neu-Mapping der Kunden-URLs (03, 2b), Liste vor dem Umzug vervollständigen | GEKLÄRT |
| R9c | Ende November. | Präferenz | Etwa 9 Wochen ab heute, die Roadmap rechnete mit 90 Tagen | Zeitplan in Abschnitt 6 | GEKLÄRT |
| R9d | Der Kunde selbst. | Fakt | — | Nameserver-Wechsel und Wix-Kündigung macht der Kunde, mit Anleitung | GEKLÄRT |
| R10a | Firmen und Büros, Gewerbe und Industrie, Praxen, öffentliche Hand, vermögende Privatkunden. Bewertung evidenzbasiert nach Best Practice. | Präferenz + Auftrag | Liegenschaftsverwaltungen und Stockwerkeigentümer nicht gewählt, obwohl Hauswartung und Mehrfamilienhäuser Kernleistungen sind | Bewertung in Abschnitt 3.9 | GEKLÄRT (W08) |
| R10b | Bauendreinigung, Mehrfamilienhäuser, Unterhaltsreinigung über CHF 50'000 im Monat, Sonder-, Maschinen-, Hallenreinigung. | Präferenz | CHF 50'000 pro Monat entspräche CHF 600'000 im Jahr für einen Auftrag | Einheit klären | GEKLÄRT MIT VORBEHALT (W07) |
| R10c | Kleine private Anfragen (etwa CHF 500 im Monat), einmal pro Woche reinigen. Mindestens zwei- bis dreimal pro Woche, je nach Fläche. | Präferenz | Die öffentlichen Bewertungen betreffen laut Suchauszügen vor allem Wohnungsabgaben (N047) | Formular fragt Rhythmus und Objekt ab, damit die Anfrage eingeordnet werden kann (M30) | GEKLÄRT (W01) |
| R10d | Unbekannt. Soll mit Daten belegt werden. | Auftrag | Belegtabelle in Abschnitt 3.10 | Positionierung als HYPOTHESE mit Prüfplan (M28) | GEKLÄRT |
| R10e | Zwei bis drei neue Aufträge pro Monat. | Präferenz | — | Erfolgskriterium für die Messung nach dem Launch (M32) | GEKLÄRT |
| R11a | Noch keine Zugänge, werden eingerichtet. | Fakt | — | Search Console und Google-Unternehmensprofil zum Launch (M32, M55) | GEKLÄRT |
| R11b | Ja, sobald die neue Website läuft. Die alte Seite ist nicht relevant. | Präferenz | — | Keine Baseline der alten Seite, Messung ab Launch | GEKLÄRT |
| R12a | Brandea und der Agent entscheiden, der Agent auch selbst. Rot-Weiss wegen der Schweiz, eventuell eine weitere Kontrastfarbe. | Präferenz | Das Schweizerkreuz ist für Dienstleistungen mit Sitz und Verwaltung in der Schweiz erlaubt, das Schweizerwappen nicht (S49, S50) | E23, E24 | GEKLÄRT |
| R12b | Brandea (Projektleitung). | Fakt | — | G14: Freigabe durch die Projektleitung von Brandea | GEKLÄRT |
| E05 | Nach Best Practice validieren, dann mit der Arbeit beginnen. | Präferenz | — | E11: Umsetzung auf dem Arbeits-Branch | GEKLÄRT |

## 3. Prüfungen und Recherchen

### 3.1 Kontaktdaten und Öffnungszeiten (R5a, R5g, R4c)

Auf ausdrücklichen Wunsch von Brandea wurden die Start- und die Kontaktseite der bisherigen Kunden-Website einmal abgerufen (N042, Ergänzung zu E07). Beide nennen nur die Mobilnummer +41 79 … und `info@bgs-service.ch`, keine Öffnungszeiten und keine Strassenadresse. Der Eintrag auf local.ch führt das Festnetz 041 320 56 10, die Mobilnummer und Öffnungszeiten: Mo–Fr 08:00–19:00, Sa 09:00–17:00, So geschlossen bzw. nach Vereinbarung (N046). Facebook zeigt das Festnetz (N038).

**Umsetzung:** Festnetz als Hauptnummer, weil Verzeichnisse und Facebook es führen und einheitliche Firmenangaben im lokalen Umfeld helfen [S32]. Die Mobilnummer steht zusätzlich. Die Öffnungszeiten kommen aus local.ch. Beides wird in Runde 2 bestätigt und steht nur an einer zentralen Stelle (M54), damit eine Korrektur ein Eintrag bleibt.

### 3.2 Domain `swiss-reinigung.ch` (R2c)

Die Nameserver gehören zu Dan.com, einem Domain-Marktplatz. Das SOA verweist auf GoDaddy. Es gibt zwei A-Records und keinen MX. Laut RDAP ist die Domain seit 21.04.2003 über den Registrar hosttech registriert, der Inhaber wird nicht ausgegeben. Im Vercel-Team von Brandea ist sie nicht vorhanden (N043). **Folge:** Die Domain gehört Dritten und ist vermutlich zu verkaufen. Die drei Standortseiten nennen `info@swiss-reinigung.ch`, dorthin geschickte Mails gehen verloren. Das Logo „SWISS REINIGUNG“ passt ebenfalls zu diesem fremden Namen.

### 3.3 E-Mail-Versand (R5c, R5b, R5h)

Im Resend-Konto sind drei Domains verifiziert, darunter `brandea.de` (Senden aktiv). `bgs-service.ch` ist nicht angelegt (N044). In Vercel ist `RESEND_API_KEY` gesetzt (N011). Ob der Schlüssel gültig ist, wurde nicht geprüft, Werte werden nie entschlüsselt. Die Kontakt-Route meldet heute immer Erfolg und versendet mit dem Absender `info@bgs-service.ch` (N016). Resend würde das ablehnen, weil die Domain dort nicht verifiziert ist.

**Umsetzung bis zum Launch:** Empfänger `admin@brandea.de` und ein Absender unter `brandea.de`, beides über Umgebungsvariablen. Erfolg wird nur nach bestätigtem Versand gemeldet, sonst ein Fehler mit Telefonnummer als Ausweichweg (M04). **Zum Launch:**

- die Absenderdomain des Kunden in Resend verifizieren (DNS-Einträge über Vercel)
- den Empfänger auf die Kundenadresse umstellen
- eine Testanfrage bis ins Kundenpostfach senden (G05)

**Risiko beim DNS-Umzug:** Die heutigen MX-, SPF- und DMARC-Einträge für Swizzonic müssen vollständig in Vercel übernommen werden, bevor die Nameserver wechseln. Sonst fällt die E-Mail des Kunden aus (M58).

### 3.4 Chat und KI-Berater (R8a, R8b)

Aus dem lokalen FIMI-Klon nur gelesen (E06): FIMI nutzt Gemini 3.5 Flash über Vertex AI. BGS nutzt heute das ältere Paket `@google/generative-ai` mit Gemini 2.5 Flash und `GEMINI_API_KEY`. Dieser Schlüssel ist in Produktion ungültig, und der Fehler wird nicht gemeldet (GLOBAL-002, N045). Übernommen wird von FIMI nur das Prinzip: aktueller Dienst, sauberer Fehlerzustand, Modell zentral konfiguriert. Texte, Prompts und Daten von FIMI werden nicht übernommen (E02).

**Reihenfolge:** Zuerst ein sichtbarer Fehlerzustand mit Ausweichkontakt (Welle 0). Danach die Reparatur mit dem Modell, das Brandea festlegt. Den Schlüssel bzw. die Zugangsdaten hinterlegt Brandea in Vercel als sensible Variable (M06). Der Agent sieht und setzt keine Schlüssel. Die Chat-Inhalte (Leistungen, Region, Belege) kommen aus der zentralen Faktenliste (M54), damit der Chat nichts behauptet, was die Website nicht belegt.

### 3.5 Öffentliche Bewertungen (für R10d)

Suchauszüge nennen für local.ch 5 von 5 Sternen bei 4 Bewertungen. Die Themen: gründliche Reinigung, freundlich und unkompliziert, pünktlich, problemlose Wohnungsübergabe mit zufriedener Verwaltung, gutes Preis-Leistungs-Verhältnis. Einmal wurde langsame Kommunikation vor dem Auftrag bemängelt (N047). **Nicht verifiziert:** Der abgerufene local.ch-Eintrag zeigt keine Bewertungen (N046), vermutlich werden sie per Skript nachgeladen. Die Auszüge gelten deshalb als HYPOTHESE.

**Folgen:**

- Fremde Bewertungen werden nicht als Kundenstimmen auf die Website kopiert.
- Keine Bewertungssterne per strukturierten Daten für das eigene Unternehmen [S15].
- Stattdessen ein Google-Unternehmensprofil einrichten und echte Bewertungen sammeln (M55).

### 3.6 Name und Marke (R2a, R2b, R7e, R9b)

**Rechtlicher Rahmen:** Art. 954a OR verlangt in Korrespondenz, auf Bestellscheinen und Rechnungen sowie in Bekanntmachungen die eingetragene Firma **vollständig und unverändert**. Kurzbezeichnungen, Logos, Geschäftsbezeichnungen und Enseignes dürfen **zusätzlich** verwendet werden (S43, keine Rechtsberatung). Für die Website bedeutet das: Ein neuer Markenname ist möglich. Impressum, Offerten und Rechnungen nennen weiter „BGS - Gebäudeservice GmbH“, solange keine Umfirmierung im Handelsregister eingetragen ist.

**Das Schweizerkreuz** darf für Dienstleistungen verwendet werden, wenn der Sitz in der Schweiz liegt und das Unternehmen tatsächlich von hier aus verwaltet wird (S49). Das trifft nach den Registerdaten zu. Das Schweizerwappen, also das Kreuz im Schild, ist seit dem revidierten Wappenschutzgesetz der Eidgenossenschaft vorbehalten (S50).

**Was unter „BGS“ schon besteht:**

- Registereintrag seit 1997 (N033, N037)
- Verzeichniseinträge, Facebook und die Domain `bgs-service.ch` (N038, N046)
- mögliche Bewertungen (N047)

Ein neuer Name müsste überall nachgezogen werden, auch im Google-Unternehmensprofil.

**Prüfschritte für einen neuen Namen:**

- Handelsregister (Zefix, aus der Prüfumgebung blockiert, NICHT PRÜFBAR) und Markenregister (Swissreg, Klasse 37) auf gleiche und ähnliche Namen prüfen.
- Die `.ch`-Domain prüfen (RDAP, hier möglich), dazu eine Websuche auf Verwechslungsgefahr.
- Den Schutz der Wortmarke anmelden, bevor Logo und Website entstehen.

**Optionen (Entscheid in Runde 2):**

| Option | Vorteil | Nachteil |
|---|---|---|
| A · „BGS“ als Dachmarke behalten, neues Logo, eigener Name nur für die Premium-Linie (Empfehlung) | Bestehende Einträge bleiben gültig, keine Domain- oder Umfirmierungsfrage, Termin Ende November realistisch | Wenig Neuanfang beim Namen |
| B · Neue Marke, Firma „BGS - Gebäudeservice GmbH“ bleibt im Impressum | Freie Namenswahl, klarer Auftritt | Namensprüfung, neue Domain, Verzeichnisse umstellen. Die Frist Ende November wird knapp |
| C · Neue Marke und Umfirmierung im Handelsregister | Marke und Firma identisch | Zusätzlich Statutenänderung und Registereintrag (Aufwand und Dauer hier nicht geprüft). Launch Ende November unwahrscheinlich |

### 3.7 Vertrauenssignale ohne Risiko (R6h)

Grundsatz: Nur nennen, was tatsächlich vorliegt und nachgewiesen werden kann. Verbandslogos, Siegel oder „zertifiziert“ ohne Mitgliedschaft oder Zertifikat wären irreführend.

| Signal | Stand bei BGS | Voraussetzung | Aufwand | Nutzen für |
|---|---|---|---|---|
| Registerdaten: UID, Handelsregister seit 1997, MWST | liegt vor (N033, N037) | — | keiner | alle, besonders Firmen und Verwaltungen |
| Betriebshaftpflicht CHF 10 Mio. | Eigenangabe (R6c) | Police als Beleg ablegen | gering | Firmen, Industrie, Premium |
| Arbeitsbedingungen nach dem allgemeinverbindlichen GAV der Reinigungsbranche Deutschschweiz | BGS ist mit über 50 Mitarbeitenden unterstellt (Schwelle 6, S44), Einhaltung nicht geprüft | Einhaltung. Unterstellte Betriebe können bei der Geschäftsstelle der PK Reinigung eine Bestätigung beziehen, etwa für Submissionen (S45) | gering | öffentliche Hand, grössere Firmen |
| Allpura-Mitgliedschaft (Branchen- und Arbeitgeberverband) | keine (R6h) | Sitz in der Schweiz, mindestens zwei Jahre am Markt (S46) | Mitgliederbeitrag (nicht geprüft) | alle B2B-Gruppen |
| Branchenlösung Arbeitssicherheit EKAS Nr. 54 | keine | Mindestens eine Person mit SIBE-Grundkurs. Einmalig CHF 1'150 (Allpura-Mitglied) bzw. CHF 1'950, jährlich CHF 550 (S47) | mittel | Industrie, Hallen, Fassaden (Arbeiten in der Höhe) |
| ISO 9001 | in Arbeit (R6b) | Zertifikat mit Norm, Stelle, Gültigkeit | hoch | öffentliche Hand, grosse Firmen, erst nach Abschluss |
| Echte Bewertungen im Google-Unternehmensprofil | Profil fehlt (R11a) | Profil einrichten, Kunden um Bewertung bitten | gering | alle, lokale Suche [S32] |
| Lehrbetrieb (Gebäudereiniger/in EFZ) | nicht erfragt | nur wenn tatsächlich ausgebildet wird | — | Arbeitgeberimage, öffentliche Hand |

**Empfehlung für den Kunden:**

1. **Sofort, ohne Kosten:** Registerdaten und Haftpflicht belegen.
2. **Kurzfristig:** Die Bestätigung der PK Reinigung beziehen, falls der GAV eingehalten wird.
3. **Mittelfristig:** Allpura-Mitgliedschaft und Branchenlösung EKAS Nr. 54.
4. **Nach Abschluss:** ISO nennen, sobald das Zertifikat vorliegt.

Auf der Website erscheint jeweils erst, was vorliegt.

### 3.8 Premium-Bereich: Unterordner statt Subdomain (R3f)

Google überlässt die Wahl dem Geschäftsmodell und nennt Unterordner als leichter zu verwalten (S48). Für BGS spricht alles für einen **Unterordner `/premium` auf derselben Domain**:

- Ein Auftritt, ein Google-Unternehmensprofil, eine Messung.
- Die Premium-Seiten profitieren vom Vertrauen der Hauptdomain.
- Die heutigen Pfade `/premium/luxusimmobilien`, `/premium/privatjet` und `/premium/yacht` können bleiben.

Eine Subdomain brächte hier keinen Vorteil. Eine eigene Domain lohnt sich erst, wenn Premium eine eigenständige Marke mit eigener Vermarktung wird. Dann wird mit 301-Weiterleitungen umgezogen [S07].

**Umsetzung (E16):**

- **Auftritt:** eine eigene Premium-Übersicht mit eigenem, ruhigerem Auftritt.
- **Navigation und Wege:** getrennt von den B2B-Seiten, ein eigener Menüpunkt und ein diskreter Kontaktweg (Rückruf, Telefon).
- **Inhalte:** keine Vermischung mit Industrie- oder Hallenreinigung.
- **Belege:** Premium verlangt besonders glaubwürdige Belege. Solange es keine Referenzen und echten Fotos gibt, trägt die Seite Arbeitsweise, Diskretion, Versicherung und Sprachen, nicht erfundene Fälle.

### 3.9 Zielgruppen evidenzbasiert bewertet (R10a)

Bewertet nach Passung zum Angebot (R3), Auftragsgrösse und Rhythmus (R10b, R10c), heute verfügbaren Belegen (3.7), Wettbewerb in der Suchstichprobe (N038, 04) und Erreichbarkeit über die Website. **Ohne Suchvolumina und ohne Anfragedaten ist die Reihenfolge eine HYPOTHESE.** Sie wird nach dem Launch mit Search Console und der Herkunft der Anfragen geprüft (M32).

| Rang | Zielgruppe | Passung | Auftragsgrösse | Belege heute | Erreichbar über die Website | Einschätzung |
|---|---|---|---|---|---|---|
| 1 | Firmen und Büros, inkl. Praxen | hoch (Büro-, Unterhalts-, Fensterreinigung) | regelmässig, mittel | Grösse, Haftpflicht, Sprachen | ja, die Stichprobe zeigt Leistungs-Orts-Seiten für „Büroreinigung Luzern“ (N038) | Kernzielgruppe, eigene Seite (R3d) |
| 2 | Liegenschaftsverwaltungen, Eigentümer, Stockwerkeigentümer | hoch (Hauswartung, Mehrfamilienhäuser, Wohnungsübergaben) | regelmässig, mittel bis gross | Bewertungsthemen zur Wohnungsübergabe (HYPOTHESE) | ja, „Hauswartung Luzern/Zug“ (N038) | Nicht gewählt, aber durch Hauswartung und R10b angelegt, W08 |
| 3 | Gewerbe und Industrie | hoch (Industrie, Hallen, Maschinen, Bau) | gross, auch Einzelaufträge (Bauendreinigung) | Haftpflicht. Arbeitssicherheit (EKAS) fehlt | ja, bei spezifischen Suchbegriffen | Hoher Auftragswert, Arbeitssicherheit belegen |
| 4 | Premium-Privatkunden (Residenzen, Jets, Yachten) | mittel bis hoch (Luxusimmobilien, Privatjet, Yacht) | hoch pro Objekt, Rhythmus nach Objekt | kaum: keine Referenzen, keine Fotos | eingeschränkt, eher über Empfehlungen, Verwaltungen, Marinas und Flugzeugbetreuer | Eigener Bereich, Vertrieb vor allem ausserhalb der Suche |
| 5 | Öffentliche Hand | mittel | gross, über Ausschreibungen | GAV-Bestätigung möglich (S45), Referenzen fehlen | kaum, Vergabe über Ausschreibungen statt Suche | Erst mit Referenzen und Nachweisen realistisch |

### 3.10 Warum BGS: belegbare Gründe (R10d)

Brandea kennt den Grund nicht und möchte ihn mit Daten belegt haben. Heute gibt es keine Kundenbefragung und keine Anfragedaten. Belegbar ist nur, was in der Tabelle steht. **Die Positionierung ist bis zur Prüfung eine HYPOTHESE (M28).**

| Möglicher Grund | Beleg heute | Stärke | Prüfen durch |
|---|---|---|---|
| Regional verankert: Sitz Emmenbrücke, Erfahrung seit 2006 | Register (N033, N037), Jahr als Eigenangabe (R6a) | mittel | Bestätigung des Kunden, schriftlich |
| Grösse und Verlässlichkeit: über 50 Mitarbeitende, über 120 Kunden | Eigenangabe (R6d, R6k) | mittel | Stichtag, Aussage vom Kunden freigegeben |
| Absicherung: Betriebshaftpflicht CHF 10 Mio. | Eigenangabe (R6c) | stark mit Police | Police |
| Alles aus einer Hand: Reinigung, Hauswartung, Aussenpflege, Sonderreinigung | Leistungsliste (R3a–R3c) | mittel, Wettbewerber werben ähnlich (04) | Anfragen mit mehreren Leistungen zählen |
| Mehrsprachiges Team (DE, EN, FR, IT) | Eigenangabe (R6k) | mittel bis stark für internationale Firmen und Premium | Nachfrage in Anfragen und Gesprächen |
| Sorgfalt bei Wohnungsübergaben | Suchauszüge von Bewertungen (N047, nicht verifiziert) | offen | echte Bewertungen im Unternehmensprofil |
| Klarer Einstieg: kostenlose Offerte vor Ort | Eigenangabe (N014) | schwach als Alleinstellung, stark als Ablauf (04, Chance 3) | Anteil Anfragen mit Termin |

**Prüfplan für die Positionierung:**

1. Fünf kurze Gespräche mit bestehenden Kunden des Kunden: Warum BGS? Was fehlt?
2. Die Bewertungen im Google-Unternehmensprofil nach Themen auswerten.
3. Im Formular die Zielgruppe und die Herkunft der Anfrage erfassen.
4. Nach 90 Tagen die Aussage auf der Startseite anhand dieser Daten bestätigen oder ändern.

## 4. Widersprüche aus Runde 1

**Stand nach Runde 2 (12):** W01, W02, W04, W05, W06, W07 und W08 sind geklärt. W03 (Name) ist offen, die Namensrecherche läuft.

Nach Regel 3 des Ping-Pong-Verfahrens wird kein Widerspruch stillschweigend aufgelöst. Die vorläufige Behandlung steht in der Tabelle, die Entscheidung fällt in Runde 2.

| ID | Widerspruch | Belege | Vorläufige Behandlung | Frage in Runde 2 |
|---|---|---|---|---|
| W01 | Die Umzugs- bzw. Wohnungsendreinigung ist im Angebot (R3b), und die öffentlichen Bewertungen betreffen laut Suchauszügen vor allem Wohnungsabgaben. Gleichzeitig passen „kleine private Anfragen“ nicht (R10c), und normale Privathaushalte entfallen (R3a) | R3a, R3b, R10c, N047 | Die Umzugsreinigung steht in den Sonderreinigungen und richtet sich an Verwaltungen und Eigentümer. Anfragen von Mietern werden nicht beworben, aber auch nicht ausgeschlossen | Sollen Umzugsreinigungen für private Mieter angenommen werden? |
| W02 | Kein Winterdienst (R3a, R6j), aber die bisherige Kunden-Website und local.ch führen ihn | N014, N046 | Antwort vom 24.09.2026 gilt, Winterdienst entfällt | Bestätigen und den Eintrag in Verzeichnissen bereinigen? |
| W03 | Neuer Name gewünscht (R2a, R2b). Die Domain `bgs-service.ch` soll übernommen werden (R9b), und unter „BGS“ bestehen Register, Verzeichnisse und Bewertungen. Das Impressum muss die eingetragene Firma nennen | S43, N033, N038, N046 | Arbeitsmarke „BGS Gebäudeservice“ an einer zentralen Stelle, Registername im Impressum | Option A, B oder C aus 3.6 |
| W04 | Kantone Luzern, Zug und Aargau (R4a), aber „etwa 15–20 km um Luzern“ | R4a | Die Einzugsgebiet-Seite nennt die drei Kantone, keine Gemeindeliste und keinen Radius | Welche Gemeinden bzw. Regionen in Zug und Aargau? |
| W05 | „Die E-Mail-Adresse existiert noch nicht“ (R5b, R5c), aber `info@bgs-service.ch` steht auf der Kunden-Website und die Domain hat einen Mailserver | N013, N042 | Ausgelegt als „die künftige Adresse zum neuen Namen fehlt noch“. Bis dahin `admin@brandea.de` | Richtig ausgelegt? Soll `info@bgs-service.ch` genutzt werden, falls Option A gewählt wird? |
| W06 | Auswahl „nur Firmen, Verwaltungen, Eigentümergemeinschaften“, Kommentar „auch vermögende Privatpersonen“ (R7b) | R7b | **Aufgelöst:** B2B plus Premium-Privatkunden, deckt sich mit R3a und R10a | — |
| W07 | „Unterhaltsreinigung über CHF 50'000 im Monat“ als gute Anfrage (R10b). Bei über 120 Kunden und über 50 Mitarbeitenden wäre das ein sehr grosser Einzelauftrag | R6d, R6k, R10b | Kein Betrag auf der Website. Das Formular fragt Rhythmus und Fläche ab, nicht das Budget | Pro Monat oder pro Jahr? |
| W08 | Liegenschaftsverwaltungen und Stockwerkeigentümer nicht als Zielgruppe gewählt (R10a), aber Hauswartung, Mehrfamilienhäuser und Wohnungsübergaben sind Kernleistungen (R3c, R10b) | R3c, R10a, R10b | In der Bewertung als Rang 2 geführt (3.9) | Gehören Verwaltungen und Stockwerkeigentümer zu den Zielgruppen? |

## 5. Entscheidungen aus Runde 1

Die Einträge E11–E26 stehen auch im Entscheidungsprotokoll in 07.

- **E11 · Umsetzung freigegeben.** Nach der Validierung beginnt die Umsetzung auf dem Arbeits-Branch in den Wellen aus 06. E03 wird damit für Quellcode erweitert, weiterhin nur auf `claude/optimistic-sagan-h5y2i9`. Jede Welle wird mit Build und Typecheck geprüft. Für Produktion und Live-Deployment gilt:
  - Ein Deployment braucht die ausdrückliche Zustimmung von Brandea.
  - Der Launch braucht die Kriterien aus 05 und die Freigabe nach G14.
- **E12 · Die ganze Website ist bis zum Launch `noindex`.** Umgesetzt wird das mit Meta-Robots und `X-Robots-Tag`, ohne `Disallow` in `robots.txt`, damit Suchmaschinen das `noindex` lesen können. Gesteuert wird es über eine Umgebungsvariable: Die Standardeinstellung ist „nicht indexierbar“, freigeschaltet wird erst zum Launch.
- **E13 · Keine Schlüssel in Repository-Dateien.** Es werden Platzhalter verwendet, Schlüssel liegen nur in Vercel als sensible Variablen (M01, M06).
- **E14 · Chat und KI-Berater bleiben.** Die Reparatur folgt dem FIMI-Prinzip mit zentral konfiguriertem Modell. Bis dahin zeigen beide einen sichtbaren Fehlerzustand mit Ausweichkontakt.
- **E15 · Formular und angezeigte E-Mail vorläufig über `admin@brandea.de`.** Der Absender liegt unter `brandea.de` über Resend. Die Umstellung auf die Kundenadresse ist ein Launch-Kriterium.
- **E16 · Informationsarchitektur v2.** B2B-Leistungen liegen unter `/leistungen/…`, der Premium-Bereich unter `/premium/…` auf derselben Domain (03, Abschnitt 2a und 2b).
- **E17 · Leistungszuschnitt.** Der Winterdienst entfällt (410), normale Privathaushalte entfallen, und der Nachfüllservice wird ein Abschnitt der Unterhaltsreinigung. Diese Leistungen bekommen eigene Seiten:
  - Büroreinigung (mit Praxen)
  - Baureinigung
  - Fenster und Fassade (zusammen)
  - Industrie und Hallen mit Abschnitt Maschinen
  - Facility Services als Bündel
- **E18 · Belegregel.** Zulässig sind nur die Aussagen aus Abschnitt 1 mit Stand bzw. Beleg. Streichen: ISO, 24/7, Zertifikate, Kundenstimmen, Referenzen und Preise.
- **E19 · Bilder.** Bis zu den KI-Bildern werden überall neutrale Platzhalter verwendet. KI-Bilder sind Symbolbilder, nie „unser Team“, keine Referenz und kein Vorher/Nachher.
- **E20 · Karte.** Die interaktive Karte lädt erst nach einem Klick und zeigt nur den Sitz Emmenbrücke.
- **E21 · „Powered by Brandea AI“ bleibt sichtbar.**
- **E22 · Rechtstexte schreibt Brandea ohne fachliche Prüfung.** Das Restrisiko hat Brandea akzeptiert. Grundlage ist das Verarbeitungsinventar aus P12.
- **E23 · Entscheidungsrollen.**
  - **Inhalte, Struktur und Gestaltung:** Brandea (Projektleitung) entscheidet. Der Agent darf nach Best Practice entscheiden und dokumentiert das.
  - **Tatsachen über den Kunden:** Sie brauchen eine Eigenangabe oder einen Beleg.
  - **Launch:** Die Freigabe erteilt Brandea (Projektleitung).
- **E24 · Farbwelt Rot-Weiss.** Der Rotton muss mit Weiss mindestens 4,5:1 erreichen, dazu kommt ein dunkles Neutral als Kontrastfarbe. Das Schweizerkreuz ist nur nach den Regeln des IGE erlaubt, das Schweizerwappen nie (S49, S50).
- **E25 · E07 ergänzt.** Auf Anweisung von Brandea wurden die Start- und die Kontaktseite der Kunden-Website einmal gelesen, nur zur Prüfung der Kontaktdaten (N042).
- **E26 · Arbeitsmarke bis zum Namensentscheid: „BGS Gebäudeservice“.** Sie steht an einer zentralen Stelle, das Impressum nennt „BGS - Gebäudeservice GmbH“. Der Platzhalter „Swiss Reinigungsfirma“ wird entfernt.

## 6. Zeitplan bis Ende November 2026 (R9c)

Neun Wochen statt 90 Tage gehen nur, wenn die Entscheidungen in Runde 2 schnell fallen und Bilder und Texte parallel entstehen. Kritischer Pfad: **Name → Logo und Farben → Gestaltung → Bilder**. Dazu kommen die Rechtstexte und der DNS-Umzug mit der E-Mail des Kunden.

| Zeitraum | Ergebnis | Hängt ab von |
|---|---|---|
| bis 02.10. | Welle 0 auf dem Arbeits-Branch: `noindex`, Schlüssel-Platzhalter, unbelegte Aussagen und Kundenstimmen entfernt, Formular mit echter Fehlermeldung, Chat mit Fehlerzustand. Produktion für `noindex` nach Zustimmung | Runde 2 (Produktion) |
| bis 09.10. | Namensentscheid und Namensprüfung, Zielstruktur v2 als Seiten und Weiterleitungen angelegt | Runde 2 (Name) |
| bis 23.10. | Logo, Farben, Gestaltung. Texte der Kernseiten und des Premium-Bereichs | Name, Fachinput des Kunden |
| bis 06.11. | KI-Bilder (Brandea), Chat und Berater repariert, Rechtstexte gegen die fertige Umsetzung | Modellwahl, Zugangsdaten in Vercel |
| bis 20.11. | Technik und Qualität (Welle 2), Search Console und Unternehmensprofil vorbereitet, DNS-Einträge inklusive E-Mail in Vercel vorbereitet, Testanfrage | Kundenzugang zum Registrar |
| bis 30.11. | Launch nach 05 und Freigabe (G14), danach Kontrolle nach 05, Abschnitt 7 | alle Launch-Kriterien |

## 7. Offene Fragen für Runde 2

1. **Name und Marke:** Option A, B oder C (3.6, W03)?
2. **Produktion für `noindex`:** Darf der Stand mit `noindex` nach Welle 0 in Produktion, damit er auf `bgs-gebaeudeservice.vercel.app` wirkt?
3. **Umzugsreinigung für private Mieter:** annehmen oder nicht (W01)?
4. **Winterdienst:** endgültig nicht angeboten (W02)?
5. **Einzugsgebiet:** Welche Gemeinden bzw. Regionen gehören in Zug und Aargau dazu (W04)?
6. **E-Mail:** Ist die Auslegung von W05 richtig?
7. **Gute Anfrage:** CHF 50'000 pro Monat oder pro Jahr (W07)?
8. **Zielgruppen:** Gehören Verwaltungen und Stockwerkeigentümer dazu (W08)?
9. **Kontaktdaten:** Bestätigung von Festnetz, Mobilnummer und Öffnungszeiten (3.1).
10. **Chat-Modell:** Welches Modell, und legt Brandea den Zugang in Vercel an (3.4)?
11. **Leistungen im Teilgebiet:** Gibt es Leistungen nur in einem Teil des Gebiets (R4d)?
12. **Nur Brandea, ausserhalb des Codes:** Das Repository auf privat stellen (R1) und die Schlüssel in Vercel als „sensitive“ markieren (M06).

---

**Quellen zu dieser Datei:** siehe 09-QUELLEN.md (S07, S15, S32, S43–S50). Nachweise N041–N047 in 08-PRUEFNACHWEISE.md.

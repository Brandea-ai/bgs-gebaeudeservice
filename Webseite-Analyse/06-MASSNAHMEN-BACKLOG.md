# Maßnahmen-Backlog

**Status: Phase 5 durchgeführt am 24.09.2026, angepasst nach den Rückfragen Runde 1 (11).** Alle 37 globalen Befunde (01) und alle 88 seitenspezifischen Befunde (`Seiten/`) sind in 55 Maßnahmen überführt, dazu kommen M56–M59 aus Runde 1 und M60 aus Runde 3. **Die Umsetzung ist seit 24.09.2026 freigegeben (E11)** und läuft auf dem Arbeits-Branch in den Wellen unten. Produktions-Deployments brauchen weiter eine ausdrückliche Zustimmung. Geänderte Maßnahmen sind mit „Runde 1“ markiert. Dort gilt der Runde-1-Text vor dem ursprünglichen Text derselben Zelle.

## Umsetzungsstand auf dem Arbeits-Branch (Stand 26.09.2026)

Umgesetzt heisst: auf dem Arbeits-Branch committet (bis 25.09.2026 `claude/optimistic-sagan-h5y2i9`, seit 26.09.2026 `claude/funny-einstein-5acss7`), gebaut und getestet (N048, N074). **Nichts davon ist in Produktion.** Wirksam auf der Vorab-Adresse wird es erst nach einem Produktions-Deployment, das Brandea ausdrücklich freigeben muss (Runde 2, Frage „LIVE“).

| ID | Stand | Commit | Offen |
|---|---|---|---|
| M01 | umgesetzt: abgelaufener Google-Schlüssel in `DEPLOYMENT.md` durch Platzhalter ersetzt. `EMAIL_SETUP.md` enthielt nur einen x-Platzhalter | `6abe7c8` | Repository privat stellen (Brandea). Der Schlüssel bleibt in der Git-Historie, unkritisch, weil abgelaufen |
| M02 | umgesetzt: Next.js 15.5.26, nicht-brechende Updates transitiver Pakete, Bildoptimierer ohne fremde Hosts | `e43e262` | PostCSS-Meldungen in der von Next mitgelieferten Version (nur Build-Zeit, eigenes CSS), Behebung mit Next 16 |
| M03 | Zwischenstand: Chat per Schalter aus, Termin-Buttons zum Formular, Berater mit ehrlichem Hinweis, APIs melden 503 | `3cd05f8` | Reparatur mit Modell und Zugang (Runde 2). Vor dem Einschalten Prompt aus M54 neu aufbauen: keine unbelegten Aussagen, keine erfundenen Beraterpersonen mit Foto |
| M04 | umgesetzt: Erfolg nur nach Versand, Empfänger und Absender per Umgebungsvariable | `0a5d5bc` | Echttest bis ins Postfach mit Freigabe, Kundendomain zum Launch (M58) |
| M05 | teilweise: ein Lockfile, `npm ci` läuft | `e43e262` | ESLint-Konfiguration, CI, Framework-Preset in Vercel |
| M07 | umgesetzt: Längen, Typen, HTML-Escaping, Honeypot, Ratenbegrenzung je Instanz, keine Formularinhalte im Log | `0a5d5bc` | Ratenbegrenzung über alle Instanzen (Vercel-Firewall) |
| M08 | umgesetzt: `noindex` per `SITE_INDEXABLE` | `6abe7c8` | Produktions-Deployment (Freigabe). Zum Launch `SITE_INDEXABLE=true` nur in Produktion |
| M09 | teilweise: `info@swiss-reinigung.ch` entfernt | `3cd05f8` | Alle Kontaktangaben aus M54 speisen (Welle 1) |
| M17 | teilweise: Verifizierungs-Platzhalter entfernt | `6abe7c8` | Sitemap und 404-Seite |
| M54 | begonnen: `shared/company.ts` für Firma, Adresse, Telefon, E-Mail, Rückmeldezeit | `0a5d5bc` | Alle Seiten darauf umstellen |

**Welle 1, Teil 1 (Commit `fe75da7`, 25.09.2026, Tests N052):**

| ID | Stand | Offen |
|---|---|---|
| M11 | umgesetzt für die Belegregel E18 (24/7, ISO, Zertifikate, HACCP/GMP, Jahre, Kundenzahl, Preise, Notfall-Zusagen, Referenzobjekte) | übrige Einträge des Nachweisregisters bei der Textüberarbeitung (M29), allgemeiner ISO-Hinweis im Ratgeber (M53) |
| M12 | umgesetzt: alle Kundenstimmen entfernt | — |
| M13 | umgesetzt: alle Bildflächen als Platzhalter (Schalter `NEXT_PUBLIC_REAL_IMAGES`), Vorher/Nachher entfernt | neue Bilder als Symbolbilder (E19) |
| M15 | umgesetzt: Karte nach Klick nur mit Sitz, Cookie-Banner entfernt | Datenschutztext anpassen (M51) |
| M18 | erledigt durch 308 der Standortseiten | — |
| M30 | teilweise: Leistungsauswahl nur bestätigte Leistungen, ohne Dubletten | Feld Ort/PLZ und Rhythmus |
| M44 | entfällt (E29): Seite 410, Aussagen entfernt | — |
| M46 | teilweise: Housekeeping 308 auf Luxusimmobilien, Zürich-Flughäfen und Referenzobjekte entfernt | Zusammenlegungen nach Zielbild v2 (M20) |
| M47 | teilweise: belegte Angaben, Registerdaten, Ansprechperson als Rolle | Personen nur mit Einwilligung |
| M48 | umgesetzt: `/einzugsgebiet`, Standortseiten 308 | — |
| M50 | umgesetzt: eingetragene Firma, Handelsregister Luzern, UID, MWST, ohne ISO | Rechtstexte durch Brandea (E22) |
| M52 | umgesetzt: `/referenzen` offline (404), aus Navigation und Sitemap | — |
| M53 | teilweise: Kostenartikel offline bis zur Fassung ohne Preise | übrige Artikel |
| M10 | teilweise: Platzhaltermarke durch Arbeitsmarke als Schriftzug ersetzt, seit `85024bb` «Mantena» (E46) | Logo von Brandea (M35, E49) |

**Zielbild v2 (Commits `bf42af2` und `2fb0508`, 25.09.2026, Tests N055):**

| ID | Stand | Offen |
|---|---|---|
| M20 | umgesetzt: neun Leistungsseiten unter `/leistungen/…`, Übersicht `/leistungen`, 13 alte Adressen 308 nach 03 (2b), Winterdienst 410. Menü, Footer, Startseite und Sitemap folgen der neuen Gliederung | Breadcrumbs. Alte Adressen der Kunden-Website zum Launch (M58) |
| M40 | umgesetzt: `/leistungen` mit Auswahl nach Anlass in drei Gruppen, jede Leistung mit einem Klick erreichbar. Menü per Tastatur bedienbar (`2fb0508`) | Gesamter Barrierefreiheitstest (Welle 2) |
| M41 | umgesetzt (Struktur): Unterhaltsreinigung mit Abschnitt Nachfüllservice, Büro- und Praxisreinigung als eigene Seite | Texte (M29) |
| M42 | umgesetzt (Struktur): Sonderreinigungen und Bau- und Bauendreinigung unter `/leistungen` | Texte (M29) |
| M43 | umgesetzt (Struktur): Hauswartung und Facility Services als eigene Seiten | Aufgabenkatalog R3c im Text (M29) |
| M45 | umgesetzt: ein Name „Aussen- und Grünflächenpflege“ in Menü, Footer, Formular und Seite, ohne Winterdienst | Texte (M29) |
| M46 | umgesetzt: Fenster mit Fassaden, Hallen und Maschinen mit Industrie zusammengeführt, alte Adressen 308 | — |
| M57 | umgesetzt: Premium-Übersicht `/premium` mit eigenem Menüpunkt, drei Angeboten, belegten Zusagen (E18) und diskretem Kontakt | Eigener Auftritt nach dem Namensentscheid (M56), Texte der drei Seiten (M29), Nischen aus 13 nur nach Bestätigung |
| M17 | teilweise: Sitemap mit 24 Adressen, nur Seiten mit Status 200 | 404-Seite |

**Runde 3 (Commit `31f87eb`, 25.09.2026, Tests N055 und N058):**

| ID | Stand | Offen |
|---|---|---|
| M57 | erweitert: sechs weitere Angebote (Zweitwohnungen, Hotels, Büros und Family Offices, Räume mit Kunst, Privatanlässe, Makler und Verwaltungen), zehn Zusagen, Seeufer als Einsatzorte (E40–E42) | Drei Zusagen erst mit Beleg (M59), Texte der drei Premium-Seiten (M29), Gegenlesen durch den Kunden |
| M48 | ergänzt: Seeufer und Ferienorte als Text, keine Ortsseiten (E42) | — |
| M60 | geplant (14, Abschnitt 5). Runde 4: Brandea prüft die Übersetzungen (E50), Adressen übersetzt (E51) | Umsetzung nach M29 |

**Metadaten (Commit `fa01801`, 25.09.2026, Tests N059):**

| ID | Stand | Offen |
|---|---|---|
| M16 | umgesetzt: eigene Titel und Beschreibungen für alle 24 Seiten aus `shared/seo.ts`, selbstreferenzierende Canonicals, Open Graph je Seite, 404 mit eigenem Titel | Canonical-Domain beim Launch per `NEXT_PUBLIC_SITE_URL`, Vorschaubild nach M35, Übersetzung der Metadaten (M60) |

**Technik und Formular (Commits `8a2baa7`, `de943f0`, `e025ef6`, 25.09.2026, Tests N060–N062):**

| ID | Stand | Offen |
|---|---|---|
| M34 | umgesetzt: doppelter Asset-Ordner `client/public` (24 MB), alte Vite-Seiten, Express-Server, neun ungenutzte Komponenten, Patch und Altdateien entfernt | Ungenutzte UI-Bausteine und Pakete, Personenbilder des alten Chats in `public/` (mit M03) |
| M30 | umgesetzt: Felder „Ort oder PLZ des Objekts“ und „Rhythmus“, Längengrenzen im Formular wie in der API, Premium-Auswahl ergänzt | — |
| M33 | umgesetzt: Content-Security-Policy, Permissions-Policy, Referrer-Policy | Nonce-basierte CSP erst bei dynamischem Rendern sinnvoll |
| M31 | umgesetzt (`46fefce`): Hauptaktion überall „Kostenlose Offerte anfragen“, Telefon als zweite Aktion, solange der Chat aus ist. KI-Berater auf der Startseite nur mit Chat. 39 Buttons in Links auf gültiges HTML umgestellt | Texte der Abschnitte rund um die Aktionen (M29) |
| M11 | ergänzt (`ebdf3ec`): zehn weitere Aussagen aus zugeklappten FAQ und Reitern entfernt, ISO-Hinweise im Ratgeber durch überprüfbare Nachweise ersetzt (N064) | Übrige Einträge des Nachweisregisters bei der Textüberarbeitung (M29) |
| M17 | umgesetzt (`0ada91c`): Sitemap und robots.txt aus `shared/seo.ts` erzeugt, statische Dateien mit Platzhalternamen entfernt, 404 fest auf „noindex, follow“ | Sitemap mit Sprachversionen (M60) |
| M54 | ergänzt (`9c6adcc`): Adresse auf Kontakt- und Impressumsseite aus `shared/company.ts` | Chat-Prompt in `server/gemini.ts` mit alter Adresse, wird bei M03 neu aufgebaut |
| M05 | ergänzt (`3b3bef4`): Vercel installiert mit `npm ci` | ESLint-Konfiguration, CI, Framework-Preset im Vercel-Projekt (heute „vite“, per `vercel.json` übersteuert) |

**Namensrunde 2 (25.09.2026, Nachweise N065 bis N067):**

| ID | Stand | Offen |
|---|---|---|
| M56 | Empfehlung erarbeitet: Fable und Opus im Wechsel, Prüfung der Finalisten. Beide empfehlen Mantena + Silendo, Alternativen sind Takta + Intendia und Mantena + Clavea (13, Abschnitt 8). **Runde 4:** Mantena und Clavea gewählt (E46, E47), Vorprüfung in Zefix und Swissreg (15, Abschnitt 3), auf dem Branch eingebaut (`85024bb`) | Domains (Brandea, E48), Markenrecherche beim IGE, Verwechslungsgefahr Clavea und CLAVIS. Öffentlich erst danach (E38) |

**Runde 4 (Commits `ff99f92` und `85024bb`, 25.09.2026, Tests N073):**

| ID | Stand | Offen |
|---|---|---|
| M56 | umgesetzt auf dem Branch: «Mantena» als Dachmarke, «Clavea» für die Premium-Seiten, Registername im Footer und Impressum | Nicht öffentlich vor Domainregistrierung und Markenrecherche (E38). Stand ohne neuen Namen für die Produktion: `ff99f92` |
| M11 | ergänzt (`ff99f92`): «Handwerker aus unserem Netzwerk» und «Handwerker-Koordination» entfernt (E53, R3c) | — |
| M59 | geschlossen für die drei Premium-Zusagen (E52) | Übrige Vertrauenssignale bei Bedarf |

**Welle 1, Teil 2 (Commits `2ec126e` bis `9e62a2f`, 26.09.2026, Tests N074, N075 und N077):**

| ID | Stand | Offen |
|---|---|---|
| M16 | ergänzt (`2ec126e`): 19 wirkungslose `SEO`-Aufrufe mit alten Titeln entfernt, dazu die nie ausgegebenen Schema-Hilfen mit erfundener Bewertung (4.9 bei 127). Strukturierte Daten aus den zentralen Angaben (`2b1fa59`, GLOBAL-010): LocalBusiness einmal im Layout, Service je Leistungsseite, BlogPosting, BreadcrumbList, nur sichtbare und belegte Angaben | Vorschaubild (M35), Übersetzung (M60) |
| M20 | Brotkrumen umgesetzt (`2b1fa59`, `72787d4`, `a03bc73`): sichtbar ab der zweiten Ebene auf den 12 Leistungs- und Premiumseiten und den Ratgeberartikeln, mit BreadcrumbList. Seiten der ersten Ebene ohne Brotkrumen, dort genügt das Menü | Alte Adressen der Kunden-Website zum Launch (M58) |
| M29 | Entwürfe umgesetzt (`72787d4`): 9 Leistungs- und 3 Premiumseiten mit neuen Texten aus `content/de/`, gemeinsame Vorlage `ServicePage`. Je Seite für wen, Umfang, Grenzen («Nicht Teil dieser Leistung»), Ablauf, Gebiet und FAQ. Service-Pakete ohne Inhalt, «Express-Service», Aussenreinigung von Jets, Salzwasser und Bewuchs auf Schweizer Seen und weitere unbelegte Zusagen entfernt | Gegenlesen durch den Kunden (Liste in FORTSCHRITT), Übersetzung (M60) |
| M53 | umgesetzt (`a03bc73`): P30 neu mit den Teilen aus P28, P28 per 308 auf P30, P29 ohne Zahlen wieder online (R3e), P31 zurückgestellt und per 308 auf die Unterhaltsreinigung, Übersicht «Ratgeber Gebäudereinigung», Menü und Footer «Ratgeber» | P31: Widerspruch zu 03, Abschnitt 2b («bleibt»), Entscheid Brandea. Kostenfaktoren vom Kunden bestätigen lassen (P29) |
| M19 | umgesetzt (`a03bc73`): keine erfundenen Daten und Lesezeiten mehr. Sichtbar ist der Stand des Textes, `datePublished` erst ab dem Launch | Veröffentlichungsdatum zum Launch in `content/de/ratgeber.ts` eintragen |
| M38 | umgesetzt (`a03bc73`): Unterhalts- und Büroreinigung verlinken beide Artikel, der Ratgeber verlinkt die Leistungen | — |
| M21, M22, M23 | für 15 Seiten umgesetzt (12 Leistungs- und Premiumseiten, Ratgeber mit zwei Artikeln): Server-Komponenten, FAQ als `details` im HTML, Hero ohne Einblendung, `main`-Landmarke | Startseite, Über uns, Kontakt, Einzugsgebiet, Übersichten, Rechtstexte |
| M27 | teilweise (`ff87765`): Primärrot 4,80:1 zu Weiss statt 3,78:1 (E24), Footer-Zeile 6,9:1. axe `color-contrast` 2 Treffer statt 166 (N075) | Zielgrössen (368 Treffer, v. a. Footer-Links), Skip-Link, Einblendungen auf `/ueber-uns` (M23), Screenreader-Stichprobe |
| M37 | für die neuen Texte umgesetzt: kein «ß», Footer-Formular «Offerte» statt «Angebot» | Startseite, Über uns und weitere Seiten mit alten Texten |
| M54 | ergänzt (`2b1fa59`): Kantone und Sprachen als Listen in `company.ts`, Namen aller Seiten in `seo.ts` | Kantonsliste als Text auf Startseite, Kontakt, Über uns, Premium, Leistungen und Einzugsgebiet auf `cantonList` umstellen |
| M34 | ergänzt (`a03bc73`): vier ungenutzte Blogbilder aus `public/` entfernt | übrige ungenutzte Dateien |
| M56 | ergänzt (`9e62a2f`): Schalter `NEW_BRAND`. Ohne Angabe zeigt ein Produktions-Build die Arbeitsmarke «BGS Gebäudeservice», Previews und lokal Mantena und Clavea. Damit kann der aktuelle Stand vor der Markenrecherche in die Produktion (E38, E39), `ff99f92` ist nicht mehr nötig. Das Prüfskript sucht im Arbeitsmarken-Modus nach dem neuen Namen | Nach der Markenrecherche in Vercel (Production) `NEW_BRAND=true` setzen und neu deployen |
| M35 | ergänzt (`9e62a2f`): Manifest aus `app/manifest.ts` mit dem geltenden Namen und Rot statt Blau. Das Icon `swiss-logo.webp` («SWISS REINIGUNG» mit Kreuz im Schild) entfernt, bis zum Logo keine Icons | Logo-Dateien von Brandea (15, Abschnitt 5), Favicon und Touch-Icon (heute 404) |
| M21, M22, M23 | ergänzt: Startseite, Über uns und Kontakt als Server-Komponenten, Antworten der FAQ im HTML (`Faq`), Ablauf als gemeinsame Komponente (`Steps`). Hero ohne Einblendung, Hintergrund, Karte und Chat als Client-Inseln. Kontrastverstösse (axe-core) von 2 auf 0 | Rechtstexte |
| M39 | umgesetzt nach P01: Kernleistungen zuerst (Reinigung, Hauswartung), Premium als dritte Karte. Belegte Kennzahlen, neuer Abschnitt «So kommen Sie zu Ihrer Offerte», Einzugsgebiet, eine Hauptaktion | Bilder nach Freigabe (E19) |
| M47 | ergänzt: «Unsere Werte» mit Floskeln und «ß» ersetzt durch «Worauf Sie sich verlassen können» mit belegten Zusagen (E18). Platzhalterbild im Hero entfernt | Personen nur mit Einwilligung |
| M49 | ergänzt: Kontaktwege mit Festnetz und Mobil, Ablauf bis zum ersten Einsatz, FAQ mit Versicherungssumme statt «umfassend», toter Formularcode entfernt. Formular bleibt im Footer, Karte nach Klick (E20) | Empfängeradresse des Kunden (W05) |
| M54 | ergänzt: Texte von Startseite, Über uns, Kontakt, Einzugsgebiet und beiden Übersichten in `content/de/seiten.ts`, Kantonslisten überall aus `cantonList` | Rechtstexte, Footer |
| M14, M50 | umgesetzt (E22, E60): Impressum und Datenschutz neu aus `content/de/recht.ts` als Server-Seiten mit gemeinsamer Vorlage `LegalPage`. Datenschutz nach DSG auf Grundlage des Inventars (N080): Vercel, Resend, Postfach von Brandea bis zur Kundenadresse, Karte nach Klick, keine Cookies, keine Analyse, Bekanntgabe ins Ausland, Rechte, EDÖB. Impressum mit Mobilnummer, Registerangaben aus `company.ts`, ohne KI-Satz (E59). Einwilligung im Formular ohne «dauerhaft gespeichert» | Fachprüfung bleibt aus (E22). Nachführen bei Chat (M03) und Kundenadresse (W05) |
| M52 | ergänzt (E59): Bildflächen bleiben als Platzhalter, Komponente `ImageSlot` ohne Animation, Über uns wieder mit Bildfläche | Echte Bilder (E19) |
| M21, M31 | ergänzt (N081): `main`-Landmarke auf Einzugsgebiet, Leistungs- und Premium-Übersicht. Abschluss überall mit `OfferCta` (Offerte als Hauptaktion, Telefon als zweite). Auf `/premium` war das Telefon die Hauptaktion, `/leistungen` hatte keine Offerte | — |
| M26 | ergänzt (N082): Vorlage `ServicePage` mit `min-w-0` und Silbentrennung in der H1. «Geschäftsliegenschaften» sprengte auf 390 px die Spalte (Hauswartung, 12 px Überlauf). Jetzt kein Überlauf auf allen 23 Seiten | — |
| M54, M27 | ergänzt (N083): Menü, Footer, Kontaktformular und 404 aus `content/de/navigation.ts`, Menü und Footer mit denselben Leistungsgruppen, Kernleistungen zuerst. Footer-Links als Liste mit Innenabstand: axe-core meldet keine `target-size`-Verstösse mehr (vorher 368). Verschachteltes `footer` im `footer` aufgelöst, Formular als `section` | Weitere Punkte aus Welle 2 (M25) |
| M17 | ergänzt (N083): 404 mit Menü, Footer, `main`, Titel mit Marke und drei Wegweisern, weiter `noindex` | — |

**Umgebungsvariablen für Vercel (neu):** `SITE_INDEXABLE` (nur Produktion, erst zum Launch `true`), `NEXT_PUBLIC_CHAT_ENABLED` (erst nach der Reparatur `true`), optional `CONTACT_TO_EMAIL` und `CONTACT_FROM_EMAIL`. Ohne Angabe gelten `admin@brandea.de` und ein Absender unter `brandea.de`.

## Priorisierung

| Priorität | Bedeutung | Typische, erst nachzuweisende Beispiele |
|---|---|---|
| P0 | Kritisch, sofortige Risikoentscheidung | Sensible Daten öffentlich, kritischer ausnutzbarer Sicherheitsfehler, zentrale Anfragefunktion vollständig ausgefallen |
| P1 | Hohe geschäftliche oder technische Bedeutung | Versehentlich blockierte Leistungsseiten, unklare zentrale Leistung, verlorene wichtige Redirects |
| P2 | Sinnvolle Optimierung | Bessere Inhaltsabgrenzung, gezielte Bildoptimierung, stärkere belegte Referenzdarstellung |
| P3 | Nachgelagerte Verbesserung | Kleine visuelle Inkonsistenz, optionale Komfortfunktion ohne Kernpfadrisiko |

Priorität und Launch-Blocker sind getrennte Felder. Nicht jede SEO-Idee ist ein Launch-Blocker. Ungeklärte Risiken werden nicht durch einen hohen Design-Score ausgeglichen.

**Aufwand (grobe Schätzung ohne Wartezeit auf Kundenangaben):** S = bis 1 Personentag, M = 2–5 Personentage, L = mehr als 5 Personentage. **Status aller Maßnahmen: offen.** Befundstatus: BEFUND = nachgewiesen, HYPOTHESE = begründete Annahme.

## Entscheidungen, von denen Maßnahmen abhängen

| Rückfrage (07) | Blockiert | Stand nach Runde 1 (11) |
|---|---|---|
| R1 Schlüssel in öffentlichen Dokumenten | M01 | Abgelaufen. Platzhalter statt Schlüssel, Repository privat (Brandea), Website `noindex` (E12, E13) |
| R2 Marke | M09, M35, M39, M56 | Neuer Name gewünscht, Entscheid in Runde 2 (W03). Bis dahin Arbeitsmarke „BGS Gebäudeservice“ zentral, Registername im Impressum (E26) |
| R3 Leistungen | M20, M40–M46, M29, M57 | 15 Leistungen bestätigt, Winterdienst und normale Privathaushalte entfallen, Premium-Bereich (Zielbild v2 in 03, E16, E17) |
| R4 Region | M11, M48 | Kantone Luzern, Zug, Aargau, Gemeinden offen (W04) |
| R5 Kontakt, Empfänger, Rückmeldezeit | M04, M09, M30, M49, M58 | Vorläufig `admin@brandea.de` über Resend (E15), Festnetz und Mobilnummer, Zeiten laut local.ch, 24 h werktags, kein 24/7. Kundenadresse vor Launch (W05) |
| R6 Belege | M11, M12, M13, M47, M52, M59 | Belegregel E18: seit 2006, über 50 Mitarbeitende, über 120 Kunden, CHF 10 Mio., Sprachen, „auf Wunsch“. Keine Stimmen, Referenzen, ISO, Zertifikate. Bilder als Platzhalter (E19) |
| R7 Rechtliches | M14, M50, M51 | Vertretung bestätigt, B2B plus Premium-Privatkunden, nur Schweiz. Rechtstexte von Brandea ohne Fachprüfung, Restrisiko akzeptiert (E22) |
| R8 KI-Funktionen und Karte | M03, M15 | Chat und Berater bleiben und werden repariert (E14), Karte nach Klick (E20). Modell offen |
| R9 Domain und Launch | M08, M20 (Altbestand), M58 | `noindex` bis Launch, `bgs-service.ch` wird ersetzt, Launch Ende November 2026, Zugang zum Registrar beim Kunden |
| R10 Ziele und Zielgruppen | M28, M41 | Firmen und Büros, Gewerbe und Industrie, Praxen, öffentliche Hand, Premium-Privatkunden. Bewertung in 11, 3.9. W07, W08 offen |
| R11 Datenzugänge | M32, M55 | Keine Zugänge, werden zum Launch eingerichtet, Lesezugang zugesagt |
| R12 Verantwortung | G14 in 05 | Brandea (Projektleitung) entscheidet und gibt frei. Agent entscheidet nach Best Practice mit (E23) |
| E10 Push/Previews (entschieden) | — | Pushes auf den Arbeits-Branch erlaubt, M06 bleibt als Empfehlung |
| E05 Umsetzungsfreigabe (entschieden) | alle | Umsetzung freigegeben (E11). Produktion nur mit ausdrücklicher Zustimmung |

## Aufgabenmatrix

### Welle 0: sofort, unabhängig vom Umbau (Produktions- und Datenrisiken)

| ID | URL/Bereich | Befundstatus | Priorität | Launch-Blocker | Konkrete Maßnahme | Abnahmetest | Verantwortliche Rolle | Aufwand | Abhängigkeit | Nachweis |
|---|---|---|---|---|---|---|---|---|---|---|
| M01 | Repository, `DEPLOYMENT.md`, `EMAIL_SETUP.md` | HYPOTHESE (Inhalt bewusst nicht eingesehen) | P0 | ja (G06) | **Runde 1:** Schlüssel ist abgelaufen (R1). Durch Platzhalter ersetzen, ohne ihn anzuzeigen. Repository auf privat stellen (Brandea). Prüfen, ob dort gültige Schlüssel stehen. Falls ja: beim Anbieter widerrufen, neu erzeugen, nur in Vercel hinterlegen, Dateien bereinigen, Git-Historie bewerten (öffentliches Repository), Secret-Scanning aktivieren | Secret-Scan über Repository und Historie ohne Treffer. Alte Schlüssel beim Anbieter als widerrufen sichtbar | Operations (Brandea) | S | R1 | GLOBAL-035 |
| M02 | Abhängigkeiten, `next.config.ts` | BEFUND | P0 | ja (G06) | Next.js innerhalb 15.x auf eine Version ohne bekannte kritische Meldungen heben (Stand N006: ab 15.5.26, bei Umsetzung neu prüfen). Bildoptimierung für fremde Hosts schließen (`remotePatterns '**'`) | `npm audit --omit=dev` ohne critical/high für `next`. Build und Seitenprüfung wie N005/N007 grün | Entwicklung | S–M | M05 | GLOBAL-001, N006, N018 |
| M03 | Chat, „Termin vereinbaren“ (22 Seiten), KI-Berater | BEFUND | P0 | ja (G05) | **Runde 1:** Chat und Berater bleiben (E14). Sofort sichtbarer Fehlerzustand mit Ausweichkontakt, dann Reparatur mit dem Modell nach Wahl von Brandea und Fakten aus M54. Entscheidung R8 einholen. Bis dahin alle Chat- und Berater-Einstiege entfernen oder auf das Formular umleiten. Falls der Chat bleibt: gültiger Schlüssel, Fehler als Fehler melden (kein HTTP 200), sichtbare Ersatzkontakte, Alarm bei Ausfall | Mit absichtlich ungültigem Schlüssel in der Testumgebung erscheint eine Fehlermeldung mit Telefon und Formular. Keine CTA führt in einen nicht funktionierenden Weg | Entwicklung, Entscheidung Geschäftsführung | S | R8, M06 | GLOBAL-002, N012, N017 |
| M04 | Formular (alle Seiten), `/api/contact`, `server/email.ts`, DNS `bgs-service.ch` | BEFUND | P0 | ja (G05) | **Runde 1:** Vorläufig Empfänger `admin@brandea.de`, Absender unter `brandea.de` (in Resend verifiziert, N044), beides per Umgebungsvariable (E15). Erfolg nur nach bestätigtem Versand melden, sonst Fehler mit Ausweichkontakt. Empfänger auf die bestätigte Kundenadresse umstellen. Absenderdomain beim Versanddienst verifizieren (SPF, DKIM). Zuständige Person für Anfragen benennen | In der freigegebenen Testumgebung (1) führt ein simulierter Versandfehler zu einer Fehlermeldung, (2) kommt eine Testanfrage im Kundenpostfach an, bestätigt durch den Kunden | Entwicklung, DNS: Kunde/Hoster | S–M | R5 | GLOBAL-003, N013, N016, N032 |
| M05 | Build, CI | BEFUND | P1 | ja (G02) | Lockfile mit `package.json` abgleichen (nur ein Paketmanager), `npm ci` lauffähig machen, ESLint-Konfiguration, CI mit Build, Typecheck, Lint und Audit. Framework-Preset in Vercel auf Next.js | `npm ci && npm run build` in sauberer Umgebung ohne Fehler, CI-Lauf grün auf dem Arbeits-Branch | Entwicklung | M | — | GLOBAL-007, N003, N005 |
| M06 | Vercel-Umgebungsvariablen, Git-Anbindung | BEFUND | P1 | nein | Geheimnisse als „sensitiv“ speichern. Eigene Schlüssel oder Test-Empfänger für Preview und Development. Ungenutzten Anthropic-Schlüssel entfernen und widerrufen. Kartenschlüssel richtig benennen oder entfernen (R8). Automatische Previews für Nicht-main-Branches bewusst entscheiden (z. B. Ignored Build Step) | Vercel zeigt keine „readable-secret“-Hinweise. Preview nutzt nachweislich andere Schlüssel. Ein Test-Push auf einen Analyse-Branch erzeugt nur dann ein Deployment, wenn es gewollt ist | Operations | S | E10 | GLOBAL-005, N011, N035 |
| M07 | `/api/*` | BEFUND | P1 | ja (G06) | Ratenbegrenzung, Längenlimits, HTML-Escaping aller Formularfelder in der E-Mail, Honeypot gegen Spam | Automatischer Test: 20.000 Zeichen werden abgelehnt, HTML im Namen erscheint in der Mail als Text, schnelle Wiederholungen erhalten 429 | Entwicklung | S–M | M04 | GLOBAL-004, N032 |
| M08 | Vorab-Adresse `bgs-gebaeudeservice.vercel.app` | BEFUND | P1 | ja (G04, G10) | **Runde 1:** Ganze Website `noindex` per Umgebungsvariable bis zum Launch, ohne `Disallow` (E12). Entscheidung R9. Bis zum Relaunch die Vorab-Adresse vor Indexierung schützen (`X-Robots-Tag: noindex` oder Zugriffsschutz), weil dort heute unbelegte Aussagen, vermutlich erfundene Stimmen und ein falscher Firmenname öffentlich stehen. Nach dem Launch Canonical auf die echte Domain | Antwort-Header der Vorab-Adresse mit `noindex` bzw. Schutz aktiv. Nach dem Launch zeigen alle Canonicals auf die Launch-Domain | Entwicklung/SEO, Entscheidung Brandea/Kunde | S | R9 | GLOBAL-018, N007, N038 |
| M09 | Standortseiten, alle Kontaktangaben | BEFUND | P1 | ja (G09) | **Runde 1:** `swiss-reinigung.ch` gehört Dritten (N043). Kontaktdaten nach 11, Abschnitt 3.1, aus M54. Sofort: `info@swiss-reinigung.ch` (geparkte Domain ohne MX) durch die bestätigte Adresse ersetzen. Danach alle Kontaktangaben aus einer zentralen Quelle speisen | Volltextsuche findet keine Adresse ohne MX. Testmail an die angezeigte Adresse kommt an (Kunde bestätigt) | Redaktion/Entwicklung | S | R5 | GLOBAL-020, N013 |

### Welle 1: Launch-Blocker für den Umbau

| ID | URL/Bereich | Befundstatus | Priorität | Launch-Blocker | Konkrete Maßnahme | Abnahmetest | Verantwortliche Rolle | Aufwand | Abhängigkeit | Nachweis |
|---|---|---|---|---|---|---|---|---|---|---|
| M10 | Alle Seiten, Logo, Footer, Schema | BEFUND | P1 | ja (G07, G09) | **Runde 1:** Arbeitsmarke „BGS Gebäudeservice“ bis zum Namensentscheid (E26, M56). Marke festlegen (R2). Registrierten Namen „BGS - Gebäudeservice GmbH“ in Impressum, Datenschutz und Footer. Marke in Logo, Titeln und Texten einheitlich. „Swiss Reinigungsfirma“ und „Powered by Brandea AI“ entfernen | Volltextsuche findet „Swiss Reinigung“ 0-mal. Name, Rechtsform, Adresse und UID stimmen mit dem Register überein | Geschäftsführung Kunde, Redaktion, Design | M | R2 | GLOBAL-020, N033, SEITE-P11-001 |
| M11 | Alle Seiten, Chat-Katalog `server/gemini.ts` | BEFUND | P1 | ja (G09) | **Runde 1:** Belegregel E18 anwenden. Nachweisregister (01, Abschnitt A) Zeile für Zeile abarbeiten: belegen oder streichen. Das gilt für ISO, 24/7, Kundenzahlen, Gründung, Region, Versicherung, Preise, Fach- und Vertragszusagen. Die zentrale Faktenliste (M54) verwenden | Jede verbleibende Behauptung hat einen dokumentierten Beleg mit Datum und Freigabe. Volltextsuche nach „ISO“, „24/7“, „500“, „CHF“, „zertifiziert“, „führend“ ohne unbelegte Treffer | Geschäftsführung Kunde, Redaktion | M | R4, R6 | GLOBAL-021, Nachweisregister, SEITE-P06-001, -P09-001, -P13-001, -P13-003, -P14-001, -P15-001, -P15-002, -P16-001 bis -003, -P17-001, -P18-001, -P19-001, -P20-001, -P20-002, -P21-001 bis -003, -P22-002, -P23-002, -P24-002, -P29-001 |
| M12 | Startseite, Über uns, Referenzen | HYPOTHESE (vermutlich erfunden) | P1 | ja (G09) | **Runde 1:** Keine echten Stimmen vorhanden (R6e), alle entfernen. Alle Kundenstimmen entfernen. Nur echte Stimmen mit schriftlicher Freigabe, Datum und Organisation wieder aufnehmen. Keine Sterne ohne Quelle | Für jede Stimme liegt eine Freigabe vor. Ohne Freigabe steht keine Stimme online | Geschäftsführung Kunde, Redaktion | S | R6 | GLOBAL-022, SEITE-P26-004 |
| M13 | Alle Seiten mit Team-, Referenz- und Vorher/Nachher-Bildern | BEFUND (Einschätzung) | P1 | ja (G09) | **Runde 1:** Keine echten Fotos (R6g). Überall neutrale Platzhalter, später KI-Bilder nur als Symbolbilder (E19). KI-Bilder in Vertrauenszusammenhängen (Team, Referenz, Vorher/Nachher, Gründer) durch echte, freigegebene Fotos ersetzen oder entfernen. Verbleibende Illustrationen am Bild kennzeichnen. Bildrechte dokumentieren | Bildliste mit Herkunft, Rechten und Einwilligungen. Kein KI-Bild zeigt „unser Team“ oder „unsere Arbeit“ | Kunde (Fotos), Design | M | R6 | GLOBAL-023, N029, SEITE-P05-003, -P18-003, -P19-004, -P26-003 |
| M14 | `/impressum`, `/datenschutz` | BEFUND | P1 | ja (G07) | **Runde 1:** Brandea schreibt die Texte ohne Fachprüfung, Restrisiko akzeptiert (E22). Nach dem Umbau die tatsächliche Verarbeitung erneut inventarisieren (Vorlage: Inventar in P12). Impressum und Datenschutz neu schreiben lassen und rechtlich prüfen (B07) | Jede Zeile des Inventars ist korrekt beschrieben oder entfernt. Rechtsprüfung dokumentiert | Fachprüfung Recht, Kunde, Redaktion | M | R7, M03, M04, M15 | GLOBAL-027, SEITE-P11-001, -P11-002, -P12-001, -P12-002 |
| M15 | `/kontakt` (Karte), Cookie-Banner | BEFUND | P1 | ja (G07) | **Runde 1:** Karte bleibt, lädt erst nach Klick, nur Sitz Emmenbrücke (E20). Karte entfernen oder erst nach Klick laden (R8). Banner nur, wenn einwilligungspflichtige Dienste bleiben, dann mit echter Sperre und Widerrufslink im Footer | Netzwerkprotokoll ohne Einwilligung zeigt keine Anfrage an Google. Auswahl jederzeit änderbar | Entwicklung, Fachprüfung Datenschutz | S | R8 | GLOBAL-019, N020, N034, SEITE-P10-001, -P12-001 |
| M16 | Alle Seiten | BEFUND | P1 | ja (G03) | Titel, Beschreibung und H1 je Seite aus den Seitenberichten übernehmen (nach R2–R4), selbstreferenzierendes Canonical, eigene Open-Graph-Angaben | Crawl: 0 doppelte Titel oder Beschreibungen, jede Seite mit eigenem Canonical | Redaktion/SEO, Entwicklung | M | M21, R2–R4 | GLOBAL-010, Seitenberichte Abschnitt 4 |
| M17 | `app/layout.tsx`, `robots.txt`, `sitemap.xml`, 404-Seite | BEFUND | P2 | ja (Platzhalter) | Verifizierungs-Platzhalter entfernen, widersprüchliche robots-Tags der 404-Seite beheben, Sitemap aus den echten Routen mit echtem `lastmod` erzeugen | HTML ohne Platzhalter, 404 nur mit `noindex`, Sitemap-Einträge = veröffentlichte Routen | Entwicklung | S | M20 | GLOBAL-015, N007, N008 |
| M18 | `/standorte/zuerich` | BEFUND | P1 | ja (G03) | Entfällt mit M48 (308). Falls die Seite bis dahin online bleibt: die 7 Linkziele korrigieren | Kein interner Link auf 404 (Crawl) | Entwicklung | S | M48 | GLOBAL-016, N009, N024 |
| M19 | Blog | BEFUND | P2 | ja (falsche Daten) | Veröffentlichungsdaten korrigieren (keine Scheinaktualität), unbelegte Zahlen streichen oder mit Quelle und Stand belegen | Jedes Datum entspricht der echten Veröffentlichung. Jede Zahl hat Quelle und Stand | Redaktion | S | M53 | GLOBAL-031, SEITE-P29-001, -P29-003 |
| M20 | Informationsarchitektur, alle Leistungs- und Standort-URLs | BEFUND | P1 | ja (G10) | **Runde 1:** Zielbild v2 und Mapping v2 (03, 2a und 2b). Zielstruktur aus 03 (2a) umsetzen: `/leistungen` mit Unterseiten, Einzugsgebiet, Breadcrumbs. Alt-neu-Mapping (03, 2b) mit 308 bzw. 410, keine Sammelumleitung auf die Startseite. Bei Übernahme von `bgs-service.ch` auch die alten Kunden-URLs | Jede alte URL liefert das geplante Ziel (308 ohne Kette) oder den geplanten Status. Menü, Footer, Sitemap und Formular enthalten nur Zielseiten | Entwicklung/SEO, Entscheidung Kunde | M | R3, R4, R9 | GLOBAL-033, 03 K01–K13, SEITE-P02-001 |

### Welle 2: Qualität und Technik (vor oder kurz nach dem Launch)

| ID | URL/Bereich | Befundstatus | Priorität | Launch-Blocker | Konkrete Maßnahme | Abnahmetest | Verantwortliche Rolle | Aufwand | Abhängigkeit | Nachweis |
|---|---|---|---|---|---|---|---|---|---|---|
| M21 | Alle Seiten (Architektur) | BEFUND | P1 | nein | Seiten als Server-Komponenten rendern, interaktive Teile als kleine Client-Inseln. Metadaten je Seite mit der Next.js-Metadaten-API | Ausgeliefertes HTML enthält je Seite eigene Metadaten und den vollständigen Inhalt | Entwicklung | L | M16 | GLOBAL-009, N015 |
| M22 | 26 Seiten mit Reitern und Akkordeons | BEFUND | P1 | nein | FAQ-Antworten und Reiter-Inhalte im HTML ausliefern (sichtbar oder per `details`), keine Inhalte erst nach Klick erzeugen | Textprobe jeder Antwort steht im ausgelieferten HTML | Entwicklung | S–M | M21 | GLOBAL-011, N023 |
| M23 | Hero aller Seiten mit Einblendung | BEFUND | P1 | nein | H1 und primäre CTA sofort sichtbar ausliefern. Animationen nur ergänzend, `prefers-reduced-motion` beachten | HTML ohne `opacity:0` an H1/CTA. Mobil-Screenshot direkt nach dem Laden zeigt H1 und CTA | Entwicklung/Design | S | — | GLOBAL-012, N022 |
| M24 | Footer (alle Seiten) | BEFUND | P1 | nein | Jahreszahl nicht beim Build berechnen (oder als Client-Wert rendern) | Konsole ohne React-Fehler #418 auf allen Seiten | Entwicklung | S | — | GLOBAL-013, N021 |
| M25 | Mobile Ladeleistung | BEFUND (Labor) | P1 | nein (Budget G12) | Budgets aus 01 (I) verbindlich machen. Umsetzung vor allem über M15, M23, M26, M21 | Lighthouse mobil (3 Läufe, Median) LCP ≤ 2,5 s auf Startseite, Kontakt und einer Leistungsseite. Nach dem Launch Felddaten beobachten | Entwicklung | M | M15, M21, M23, M26 | GLOBAL-025, N030 |
| M26 | Bilder, `public/` | BEFUND | P2 | nein | Responsive Bilder (`next/image` oder `srcset`), `loading="lazy"` unterhalb der ersten Ansicht, moderne Formate, 51 ungenutzte Dateien entfernen | Kein Bild mehr als 2-fach überdimensioniert. Offscreen-Bilder werden verzögert geladen | Entwicklung/Redaktion | M | M13 | GLOBAL-024, N029 |
| M27 | Alle Seiten, Navigation, Formular | BEFUND | P1 | nein | Kontrast der Primärfarbe, Zielgrössen, Skip-Link, `<main>`, Mega-Menü per Tastatur, Namen und Zustand des Mobil-Menüs, Banner als Dialog, Statusmeldungen mit `role`, kein Link um Button, nur ein `<footer>` | axe ohne Kontrast- und Zielgrössenfehler, Tastaturtest der Hauptstrecke, Screenreader-Stichprobe (NVDA oder VoiceOver) | Design/Entwicklung | M | R2 (Farbe) | GLOBAL-026, N031, N036, SEITE-P10-002, -P17-002, -P27-002 |
| M28 | Positionierung | BEFUND | P1 | nein | **Runde 1:** Zielgruppen und Belege in 11, Abschnitt 3.9 und 3.10. Prüfplan dort. Workshop mit dem Kunden: für wen, welches Problem, welcher belegbare Grund für BGS. Ergebnis als eine Aussage für Startseite, Über uns und Übersicht | Schriftlich freigegebene Positionierung, jede Aussage darin belegt | Geschäftsführung Kunde, Marketing | M | R10 | GLOBAL-030, 04 |
| M29 | Kern-Leistungsseiten | BEFUND | P1 | nein | **Runde 1:** Gilt für alle Seiten des Zielbilds v2. Inhalte der fünf Kernleistungen mit Fachinput des Kunden neu schreiben: Umfang, Grenzen, Ablauf, Rhythmus, Beispiele, FAQ mit echten Antworten. Umsetzung je Seite in M40–M45 | Jede Kernseite beantwortet die Fragen aus ihrem Seitenbericht. Keine Schablonensätze | Redaktion, Kunde | L | R3, M28 | GLOBAL-036 |
| M30 | Formular | BEFUND | P2 | nein | Leistungsauswahl aus der bestätigten Liste (keine Dubletten), Längengrenzen, Feld für Ort/PLZ des Objekts, eine einheitliche Rückmeldezeit, neutrale Platzhalter | Formular zeigt nur bestätigte Leistungen, Rückmeldezeit überall gleich | Entwicklung/Redaktion | S | R3, R5, M04 | GLOBAL-028, SEITE-P02-002, -P10-002 |
| M31 | Handlungsaufforderungen | BEFUND | P2 | nein | Eine primäre CTA („Kostenlose Offerte vor Ort anfragen“), eine sekundäre (Telefon). Keine CTA zu Chat oder Berater, solange R8 offen ist | Jede Seite hat genau eine primäre CTA, alle Ziele funktionieren | Marketing/Design | S | M03, R5 | GLOBAL-034 |
| M32 | Messung, Monitoring | BEFUND | P2 | nach Projektentscheidung (G13) | Fehlerüberwachung für Formular und Server-Routen (Alarm bei Versandfehlern), datenschutzkonforme Reichweitenmessung nach Entscheidung. Lead = serverseitig bestätigte, zugestellte Anfrage | Ein simulierter Versandfehler löst einen Alarm aus. Messkonzept dokumentiert und in der Datenschutzerklärung beschrieben | Operations/Marketing | S–M | M14, R11 | GLOBAL-029 |
| M33 | Sicherheitsheader | BEFUND | P2 | nein | Content-Security-Policy und Permissions-Policy passend zu den verbleibenden Diensten | Header vorhanden, Konsole ohne CSP-Verstösse | Entwicklung | S | M15 | GLOBAL-006, N004 |
| M34 | Repository | BEFUND | P2 | nein | Altlasten des Vite-Aufbaus, ungenutzte Pakete, doppelten Asset-Ordner und ungenutzte Komponenten entfernen (u. a. `ServiceTemplate`, Formularlogik in `app/kontakt/page.tsx`) | Build grün, keine ungenutzten Abhängigkeiten laut Prüfwerkzeug | Entwicklung | S | M05 | GLOBAL-008 |
| M35 | Favicon, Touch-Icon, Vorschaubild, Manifest | BEFUND | P2 | nein | **Runde 4:** Brandea gestaltet das Logo (E49), benötigte Dateien in 15, Abschnitt 5. Manifest-Name seit `85024bb` «Mantena». Dateien nach der Markenentscheidung erstellen, Manifest-Farbe und Icons anpassen | Alle drei Pfade liefern 200 mit der richtigen Marke | Design/Entwicklung | S | R2 | GLOBAL-014, N008 |
| M36 | Gestaltung | BEFUND | P2 | nein | Farb- und Kontrastsystem, Bildwelt mit echten Fotos, einheitliche Icons, keine Emoji in Überschriften | Design-Abnahme mit Kontrastwerten ≥ 4,5:1 für Text | Design | M | R2, M13 | GLOBAL-032 |
| M37 | Texte | BEFUND | P2 | nein | Schweizer Hochdeutsch („ss“ statt „ß“), Schweizer Begriffe („Hauswartung“, „Offerte“, „Strafregisterauszug“) | Volltextsuche findet kein „ß“ | Redaktion | S | M29 | GLOBAL-037, SEITE-P04-001, -P23-002 |
| M38 | Blog-Verlinkung | BEFUND | P3 | nein | Artikel aus passenden Leistungsseiten verlinken (z. B. Kostenartikel aus der Unterhaltsreinigung) | Jeder Artikel hat mindestens einen Kontextlink von einer Leistungsseite | Redaktion/SEO | S | M53 | GLOBAL-017 |

### Neue Maßnahmen aus Runde 1 (11)

| ID | URL/Bereich | Befundstatus | Priorität | Launch-Blocker | Konkrete Maßnahme | Abnahmetest | Verantwortliche Rolle | Aufwand | Abhängigkeit | Nachweis |
|---|---|---|---|---|---|---|---|---|---|---|
| M56 | Marke, Name | Entschieden, Markenprüfung offen | P1 | ja (G07, G09) | **Runde 4:** Dachmarke Mantena, Premium-Linie Clavea (E46, E47), Ersatz Silendo. Brandea registriert die Domains (E48). Vorprüfung: Mantena niedriges, Clavea mittleres Risiko wegen der Marke CLAVIS in Klasse 37 (15, Abschnitt 3). **Runde 3:** Dachmarke plus eigener Premium-Name (E37). Domains der Favoriten sofort sichern, dann Recherche beim IGE (E38). Namensrunde 2 abgeschlossen (13, Abschnitt 8): Beide Modelle empfehlen Mantena + Silendo, Alternativen sind Takta + Intendia und Mantena + Clavea. Wahl in Runde 4 (DACH, PREMIUM). Namensentscheid nach Option A, B oder C (11, 3.6). Bei neuem Namen: Handelsregister, Markenregister (voraussichtlich Klassen 37 und 44, für die Premium-Linie allenfalls 45), `.ch`-Domain und Verwechslungsgefahr prüfen, Wortmarke vor Logo und Website sichern | Schriftlicher Namensentscheid mit Prüfprotokoll. Impressum nennt die eingetragene Firma | Brandea, Kunde | S–M | Runde 2 | W03, S43 |
| M57 | Premium-Bereich `/premium` | Auftrag | P2 | nein | Premium-Übersicht mit eigenem Auftritt und diskretem Kontaktweg, drei Seiten Luxusimmobilien, Privatjet, Yacht. Nur bestätigte Abläufe, keine erfundenen Fälle | Eigener Menüpunkt, keine Vermischung mit B2B-Seiten, jede Aussage belegt | Redaktion, Design, Entwicklung | M | M56, M54 | R3f, E16 |
| M58 | DNS-Umzug `bgs-service.ch` zu Vercel, E-Mail | Risiko | P0 zum Launch | ja (G05, G10) | Vor dem Wechsel der Nameserver alle MX-, SPF-, DKIM- und DMARC-Einträge des heutigen Mailanbieters in Vercel anlegen. Absenderdomain des Kunden in Resend verifizieren, Empfänger umstellen | Mail an die Kundenadresse kommt nach dem Wechsel an. Testanfrage bis ins Kundenpostfach. Resend zeigt die Domain als verifiziert | Brandea, Kunde (Registrar) | S | R9d, M04 | N013, N044, R5h |
| M59 | Vertrauenssignale beim Kunden | Geschlossen für die drei Premium-Zusagen | P2 | nein | **Runde 4:** Keine Belege, die drei zurückgestellten Aussagen bleiben weg (E52). **Runde 3:** Belege für die zurückgestellten Premium-Zusagen: Police mit Deckung für Kunst und Wertgegenstände, Zutritt Flugfeld Buochs, Prüfverfahren für das Personal (E41). Police belegen, Bestätigung der PK Reinigung beziehen (falls GAV eingehalten), Allpura-Mitgliedschaft und Branchenlösung EKAS Nr. 54 prüfen, ISO erst nach Zertifikat nennen | Jede Aussage auf der Website hat einen abgelegten Beleg | Kunde | S–M | — | 11, 3.7, S44–S47 |

### Neue Maßnahmen aus Runde 3 (14)

| ID | URL/Bereich | Befundstatus | Priorität | Launch-Blocker | Konkrete Maßnahme | Abnahmetest | Verantwortliche Rolle | Aufwand | Abhängigkeit | Nachweis/Quelle |
|---|---|---|---|---|---|---|---|---|---|---|
| M60 | Alle Seiten, Sprachen DE, EN, FR, IT | Auftrag | P1 | ja (Launch-Umfang, E43) | Deutsch ohne Präfix unter den heutigen Adressen, Englisch, Französisch und Italienisch unter `/en`, `/fr`, `/it`. Sprachumschalter in Kopfzeile und Footer, keine automatische Umleitung nach Browsersprache oder Standort. hreflang `de-CH`, `fr-CH`, `it-CH`, `en` und `x-default` im Kopf oder in der Sitemap. Inhalte und Metadaten in Wörterbüchern, Rechtstexte übersetzt (14, Abschnitt 5). **Runde 4:** Adressen je Sprache übersetzt (E51, S82), Entwürfe vom Agenten, Prüfung durch Brandea (E50) | Jede Seite in vier Sprachen mit Status 200. hreflang gegenseitig vollständig (Prüfskript). Umschalter führt zur gleichen Seite in der anderen Sprache. Keine Umleitung nach Browsersprache. Übersetzungen von Muttersprachlern freigegeben | Entwicklung, Redaktion, Kunde (Prüfung) | L | M56, M29 | E43, S75–S77 |

### Seitenmaßnahmen nach Zielseite (03, Abschnitt 2a)

| ID | URL/Bereich | Befundstatus | Priorität | Launch-Blocker | Konkrete Maßnahme | Abnahmetest | Verantwortliche Rolle | Aufwand | Abhängigkeit | Nachweis |
|---|---|---|---|---|---|---|---|---|---|---|
| M39 | Startseite | BEFUND | P1 | über Globale | Neu aufbauen nach P01: bestätigte Kernleistungen zuerst, kein KI-Berater in der ersten Ansicht, Ablauf, Einzugsgebiet, echte Belege | Erste Ansicht zeigt H1, Nutzen, eine CTA. Erste Leistung ist eine bestätigte Kernleistung | Redaktion/Design | M | R2, R3, M28 | SEITE-P01-001, -P01-002 |
| M40 | `/leistungen` (neu) | BEFUND | P2 | nein | Übersicht mit Auswahlhilfe nach P02, zentrale Leistungsliste | `/leistungen` antwortet mit 200, ist per Tastatur aus dem Menü erreichbar, jede Leistung mit einem Klick erreichbar | Redaktion/Entwicklung | M | R3, M54 | SEITE-P02-001, -P02-002 |
| M41 | Unterhaltsreinigung (+ Büroreinigung, Nachfüllservice) | BEFUND | P1 | über Globale | **Runde 1:** Büroreinigung eigene Seite (R3d), Unterhaltsreinigung für Liegenschaften und Gewerbe. Seite nach P03, Büroreinigung und Nachfüllservice als Abschnitte (K01, K08), 308 von beiden alten URLs. Nur bei eigener Zielgruppe zwei Seiten (03, Titel-/H1-Empfehlungen) | Eine URL für den Cluster, Grundreinigungs-Antwort im HTML mit Link | Redaktion, Kunde | M | R3, R10 | SEITE-P03-001, -P03-002, -P13-001 bis -003, -P25-001 bis -003 |
| M42 | Sonderreinigungen (+ Baureinigung bei Eignung) | BEFUND | P1 | über Globale | **Runde 1:** Leistungsliste liegt vor (R3b). Baureinigung eigene Seite. Leistungsliste vom Kunden (R3). Ohne Liste nicht veröffentlichen. Zuständig für Grund-, Bauend- und Spezialreinigung (K07). Hero-Motiv passend | Seite nennt jede angebotene Sonderreinigung mit Einsatzfall. Einheitliche Definitionen auf allen Seiten | Redaktion, Kunde | M | R3 | SEITE-P05-001 bis -003, -P14-001 bis -003 |
| M43 | Hauswartung (+ Facility Management) | BEFUND | P1 | über Globale | **Runde 1:** Facility Services eigene Bündelseite, Hauswartung mit Aufgabenkatalog R3c. Seite nach P04 mit dem Kundenbegriff „Hauswartung“, Facility Management integriert (K02), 308 | Eine URL für „Hauswartung/Hausmeisterservice“, kein eigener FM-Menüpunkt | Redaktion, Kunde | M | R3 | SEITE-P04-001, -P04-002, -P20-001 bis -004 |
| M44 | Winterdienst | BEFUND | P1 | ja (G09) | **Runde 1: Entfällt.** Kein Winterdienst (R3a, R6j). Seite 410, alle Winterdienst-Aussagen entfernen. Einzige Seite mit Winterdienst-Zusagen (K03). Einsatzregel, Zeiten und Dokumentation nur mit Beleg | Volltextsuche: Winterdienst-Zusagen nur hier, jede mit Beleg | Redaktion, Kunde | S–M | R6 | SEITE-P06-001, -P06-002, -P07-001 |
| M45 | Aussen- und Grünflächenpflege | BEFUND | P2 | nein | **Runde 1:** Ohne Winterdienst. Seite nach P07 als Teil der Hauswartung, ohne eigenen Winterdienst-Teil, ein Leistungsname | Ein Name überall, Winterdienst nur als Link | Redaktion | S | R3 | SEITE-P07-001, -P07-002 |
| M46 | Bedingte Leistungen: Fenster/Fassaden, Industrie/Hallen/Maschinen, Haushalt/Luxusimmobilien, Privatjet, Yacht | BEFUND | P1 | ja (G09, solange unbestätigt online) | **Runde 1:** Bestätigt: Fenster/Fassade, Industrie/Hallen/Maschinen, Luxusimmobilien, Privatjet, Yacht. Housekeeping → Luxusimmobilien (308). Premium-Bereich M57. Je Leistung R3 einholen. Bestätigt: zusammengefasste Seite nach 03 (K04–K06) mit Pfad (a) des Berichts. Nicht bestätigt: Pfad (b), also 308 auf die fachlich nächste Kernleistung oder 410. Überall entfernen (Menü, Footer, Formular, Sitemap, Startseite, Chat-Katalog) | Für jede der 11 URLs ist der geplante Status live. Keine unbestätigte Leistung irgendwo erwähnt | Kunde (Entscheidung), Entwicklung | M | R3 | SEITE-P15-001 bis -003, -P16-001 bis -004, -P17-001 bis -003, -P18-001 bis -003, -P19-001 bis -004, -P21-001 bis -003, -P22-001 bis -003, -P23-001 bis -004, -P24-001 bis -004, 03 K04–K06 |
| M47 | Über uns | BEFUND | P1 | über Globale | Neu nach P08: registrierter Name, verantwortliche Personen mit Einwilligung, Arbeitsweise, Geschichte nur belegt (Registerdaten N037) | Mindestens eine verantwortliche Person mit Funktion und Kontaktweg. Keine unbelegte Jahreszahl | Geschäftsführung Kunde, Redaktion | S–M | R2, R6, R12 | SEITE-P08-001, -P08-002 |
| M48 | Einzugsgebiet (+ drei Standortseiten) | BEFUND | P1 | ja (G09) | **Runde 1:** Kantone Luzern, Zug, Aargau (W04 offen). `/einzugsgebiet` nach P09, 308 von allen Standortseiten, Zürich nur nach Bestätigung. Preise der Zürich-Seite entfernen | Keine Ortsseite ohne eigenen Inhalt. Keine Preisangabe ohne Freigabe | Redaktion/Entwicklung | S–M | R4 | SEITE-P09-001, -P09-002 |
| M49 | Kontakt | BEFUND | P1 | über Globale | **Runde 1:** Karte nach Klick statt entfernen (E20). Nach P10: Formular auf der Seite, bestätigte Kontaktdaten und Rückmeldezeit, Ablauf bis zur Offerte, Karte entfernen | Testanfrage kommt beim Kunden an (M04), keine Kartenanfrage beim Laden | Redaktion/Entwicklung | S–M | R5, M04, M15 | SEITE-P10-001, -P10-002 |
| M50 | Impressum | BEFUND | P1 | ja (G07) | **Runde 1:** Vertretung bestätigt (R7a). Firma nach Art. 954a OR (S43). Nach P11 mit Registerdaten (N033, N037), Rechtsprüfung | Name, Rechtsform, Adresse, UID zeichengenau wie im Register | Redaktion, Recht | S | R7 | SEITE-P11-001, -P11-002 |
| M51 | Datenschutz | BEFUND | P1 | ja (G07) | Nach P12 gegen die fertige Umsetzung schreiben (M14) | Inventar aus P12 wiederholt, jede Zeile korrekt | Recht, Redaktion | S–M | M14 | SEITE-P12-001, -P12-002 |
| M52 | Referenzen | BEFUND | P1 | ja (G09) | **Runde 1:** Keine Referenzen (R6f), bleibt offline. Bis zu echten, freigegebenen Fällen nicht veröffentlichen (404, aus Navigation, Footer, Sitemap). Danach nach dem Zielbild in P26 | Jede Referenz hat Freigabe, echte Fotos, nachvollziehbare Zahlen | Kunde, Redaktion | S (Entfernen), M (Neu) | R6 | SEITE-P26-001 bis -005 |
| M53 | Ratgeber (Blog) | BEFUND | P2 | ja (falsche Daten) | P27 überarbeiten, P28 in P30 zusammenführen (308), P29 ohne unbelegte Zahlen, P31 zurückstellen, P30 überarbeiten | Keine Scheinaktualität, keine unbelegten Zahlen, jeder Artikel mit Kontextlinks | Redaktion | M | M19 | SEITE-P27 bis -P31 (alle Befunde), 03 K10, K12 |
| M54 | Zentrale Fakten- und Leistungsliste, Leistungsvorlage | BEFUND | P1 | nein (Voraussetzung für M10, M11, M30) | Eine Datenquelle für Firmenname, Kontakt, Region, Erreichbarkeit, Rückmeldezeit, Versicherung, Zertifikate und Leistungen. Daraus Menü, Footer, Formular, Seiten, Chat-Katalog und Schema speisen. Eine datengetriebene Vorlage für Leistungsseiten | Volltextsuche findet je Fakt genau eine Formulierung. Neue Leistung = ein Eintrag in der Liste | Entwicklung, Redaktion | M | R2–R6 | 03 (7a, 7e), SEITE-P02-002 |
| M55 | Verzeichnisse, Google-Unternehmensprofil | HYPOTHESE (Profil nicht geprüft) | P3 | nein | Einheitliche Firmenangaben (Name, Adresse, Telefon, Website) in Google-Unternehmensprofil, local.ch, search.ch, Moneyhouse, Facebook pflegen. Echte Bewertungen erbitten, keine gekauften | Stichprobe: alle Einträge mit identischen Angaben und der neuen Website-URL | Kunde/Marketing | S | R11, Launch | 03 (Abschnitt 5), N038, [S32] |

**Summe:** 55 Maßnahmen (M01–M55). P0: 4, P1: 35, P2: 14, P3: 2. „Über Globale“ in der Spalte Launch-Blocker heißt: Die Seite ist über M10–M13 blockiert. Alle 37 globalen Befunde und alle 88 Seitenbefunde sind mindestens einer Maßnahme zugeordnet.

## Regeln

- [x] Nur nachvollziehbare Befunde oder klar benannte Hypothesen aufnehmen. → *Erledigt: Jede Maßnahme verweist auf GLOBAL-, SEITE- oder N-IDs. Hypothesen sind markiert (M01, M12, M55).*
- [x] Globale Probleme einmal führen; betroffene Seiten auf die gemeinsame Befund-ID verweisen lassen. → *Erledigt: Seitenmaßnahmen verweisen für Behauptungen, Bilder und Stimmen auf M11–M13 („über Globale“).*
- [x] Jede Aufgabe hat eine konkrete Handlung in Alltagssprache, keinen vagen Wunsch wie „SEO verbessern“. → *Erledigt.*
- [x] Messbare Abnahme passend zur Aufgabe definieren, nicht pauschal „100 % Score“. → *Erledigt, Spalte „Abnahmetest“.*
- [x] Vorgeschlagene neue Titel, Beschreibungen und CTA-Texte direkt in der betreffenden Seitenanalyse ausschreiben. → *Erledigt in `Seiten/` (Abschnitt 4 je Bericht) und 03 (Abgrenzungen).*
- [x] Aufwand als nachvollziehbare Größenklasse oder begründete Schätzung kennzeichnen. → *S/M/L, oben definiert. Grobe Schätzung, Wartezeiten auf Kundenangaben nicht eingerechnet.*
- [x] Unsichere Conversion-/SEO-Effekte als Hypothese markieren. Keine künstliche Prozentprognose. → *Erledigt: keine Prozentprognosen. SEO-Wirkung der Zusammenlegungen ist in 03 als HYPOTHESE mit Erfolgskriterium geführt.*
- [x] Eine Behebung nur dann als erledigt markieren, wenn eine spätere autorisierte Umsetzung geprüft wurde. In diesem Auftrag wird nichts behoben. → *Alle Maßnahmen offen.*

## Reihenfolge nach dem Audit

Zuerst Produktions-/Datenrisiken und funktionskritische Probleme. Danach Positionierung, Seitenzuständigkeit und globale Standards. Anschließend seitenweise Content-/UX-/SEO-Maßnahmen; zum Schluss gezielte Wachstumsversuche. Abhängigkeiten können die Reihenfolge verändern, müssen aber erklärt werden.

**Konkrete Reihenfolge für BGS:**

1. **Welle 0 (sofort, auch ohne Umbau):** M01 → M05 → M02, parallel M03, M04, M07, M08, M09, M06. Begründung: Diese Punkte betreffen die heute öffentlich erreichbare Seite (Sicherheit, verlorene Anfragen, falsche Kontaktdaten).
2. **Kundenklärung:** R2–R7 und R10 in einem Termin (07, Abschnitt 2a). Ohne R3 und R5 lassen sich weder Seitenstruktur noch Anfrageweg festlegen.
3. **Grundlagen des Umbaus:** M28 (Positionierung), M54 (Faktenliste und Vorlage), M20 (Struktur und Weiterleitungen), M21 (Rendering und Metadaten).
4. **Inhalte und Belege:** M10–M13, M29, M39–M53.
5. **Qualität:** M22–M27, M30, M31, M33–M37.
6. **Recht und Freigabe:** M14, M50, M51, danach Deploy-Freigabe (05).
7. **Nach dem Launch:** M32 (Messung, falls nicht vorher), M38, M55, Auswertung der Erfolgskriterien aus 03.

---

**Quellen zu dieser Datei:** siehe 09-QUELLEN.md (S32 und die Quellen der verlinkten Befunde).

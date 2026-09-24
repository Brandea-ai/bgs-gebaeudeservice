# Wettbewerb, Markt und sinnvolle Differenzierung

**Status: Stichprobe durchgeführt am 24.09.2026 (12:45–12:53 UTC).** Vier direkte Anbieter mit elf öffentlichen Seiten verglichen, ein fünfter Anbieter ist NICHT PRÜFBAR (Website aus der Prüfumgebung nicht erreichbar). Keine Google-Schweiz-Daten, keine Rankings, keine Suchvolumina, keine Linkmetriken. Beobachtungen zu den Wettbewerbern sind Befunde dieser Stichprobe, ihre Aussagen (Gründungsjahr, Kundenzahlen, Zertifikate, Bewertungen) gelten als Behauptungen. Die fünf Differenzierungschancen in Abschnitt 5 sind HYPOTHESEN, bis der Kunde Leistungen, Region, Belege und Zielgruppen bestätigt (R3–R6, R10).

## 1. Vergleichsrahmen

Definiere zunächst, welche Suchergebnisse verglichen werden: Suchbegriff, Region, Sprache, Mobil/Desktop, Datum und Suchintention. Organische Anbieterergebnisse, Anzeigen, Karten/Local Pack, Verzeichnisse und informative Inhalte getrennt dokumentieren. „Die Top 10“ ist keine unveränderliche branchenweite Liste.

Für priorisierte Suchcluster die sichtbaren organischen Ergebnisse erfassen, soweit das Werkzeug tatsächlich Zugang bietet. Bei eingeschränkter Suche keine Vollständigkeit behaupten. Die intensive manuelle Analyse auf die relevantesten direkten Anbieter konzentrieren; Auswahl begründen und übrige Ergebnisse wenigstens nach Seitentyp einordnen.

### 1.1 Durchführung, Werkzeuge und Grenzen (Stand 24.09.2026)

| Schritt | Werkzeug und Bedingungen | Zeitpunkt (UTC) | Umfang |
|---|---|---|---|
| Suchergebnis-Stichprobe | Websuche-Werkzeug der Prüfumgebung. Suchmaschine nicht festgelegt, Standort USA, keine Personalisierung (N038) | ~12:45 | 12 Anfragen, je ca. 9–10 Treffer |
| Kontrollsuche zur Einordnung nach Seitentyp | Dasselbe Werkzeug. Fünf Anfragen aus N038 wiederholt, um URL und Titel der übrigen Treffer zu sehen. Kein Abruf der Trefferseiten | 12:52–12:53 | 5 Anfragen, je 9–10 Treffer |
| Seitenabrufe der Anbieter | curl 8.5.0 über den ausgehenden Proxy der Cloud-Prüfumgebung (Ausgangsstandort nicht bekannt). Nur GET, ohne Cookies, User-Agent `Mozilla/5.0 (compatible; Webseite-Analyse/1.0)` (bewusst ohne Kundennamen), `Accept-Language: de-CH`, 2 s Pause zwischen den Abrufen. Nur das HTML-Dokument, keine Bilder, Skripte oder `robots.txt`. Einzelne Seiten wie bei einem Besuch, kein Crawler, keine Formulare, keine Logins | 12:46:05–12:50:57 | **14 Abrufversuche: 11 erfolgreich (HTTP 200), 3 gescheitert.** Mit 2 Weiterleitungen bei luso.ch insgesamt 13 HTTP-Antworten |
| Auswertung | Python `html.parser`, offline auf den gespeicherten HTML-Dateien: Title, Meta-Description, H1–H3, JSON-LD-Typen, Canonical, Sprache, Links, Bilder, sichtbarer Text, Stichwortsuche | im Anschluss | 11 Seiten |

**Gescheiterte Abrufe:** vierwald.ch (12:46:08 und 12:49:10) sowie harega.ch (12:46:22). Der TLS-Verbindungsaufbau blieb ohne Antwort, der Tunnel brach nach 11 bis 12 s ab („Connection reset by peer“, laut Proxy-Protokoll 517 Byte gesendet, keine Antwort des Zielservers). Ob die Zielseite sperrt oder der Netzpfad gestört ist, lässt sich nicht unterscheiden. Je Host gab es genau einen identischen Wiederholungsversuch. Es gab keine Umgehung: kein anderer User-Agent, kein anderes Werkzeug, kein Cache- oder Archivdienst. harega.ch antwortete beim zweiten Versuch normal. **vierwald.ch bleibt NICHT PRÜFBAR.**

**Grenzen:**

- **Stichprobe:** vier Anbieter mit zwei bis drei Seiten. Keine Vollständigkeit. Weitere mögliche direkte Wettbewerber (1.3, 1.4) wurden nicht analysiert.
- **Standort und Suchmaschine:** Das Suchwerkzeug arbeitet aus den USA mit nicht festgelegter Suchmaschine. Es gibt keine Google-Daten und keine Google.ch-Ergebnisse. Mobil/Desktop ist nicht bestimmbar. Anzeigen und Karten/Local Pack zeigt das Werkzeug nicht: NICHT PRÜFBAR. Die Reihenfolge der Treffer wird nicht als Ranking gewertet.
- **HTML ohne JavaScript-Ausführung:** Inhalte, die erst im Browser entstehen, fehlen. Mobile Darstellung, Performance und Barrierefreiheit der Vergleichsseiten sind NICHT GEPRÜFT (bewusst, um keine Last zu erzeugen). Alle elf Seiten haben ein `viewport`-Meta-Tag.
- **Bilder** wurden nicht abgerufen. Aussagen zur Echtheit von Fotos sind Einschätzungen aus Dateinamen, Alt-Texten und Kontext.
- **Aussagen der Anbieter** wurden nicht überprüft. Sie stehen hier als Behauptung.
- **Nachweisablage:** Die Abrufe sind nur in dieser Datei belegt (Abruf-IDs in 1.3). Ein Eintrag in `08-PRUEFNACHWEISE.md` steht noch aus.

**Prüfabdeckung:** Direkt beobachtet: ausgeliefertes HTML von 11 Seiten und die Trefferlisten von 5 Suchanfragen. Gezählt: Tags, Links und Stichworte im HTML. Nichts aus Code abgeleitet. HYPOTHESEN: Relevanz für Käufer, Wirkung auf Anfragen, Echtheit von Fotos. Es fehlen Google.ch-Ergebnisse, Google-Unternehmensprofile mit Bewertungen, Rankings und Anfragedaten. Diese Daten könnten die Gewichtung der Chancen ändern, etwa wenn Karten-Ergebnisse die Anbieterwahl stark prägen [S32].

### 1.2 Suchbegriffe, Suchintention und beobachtete Seitentypen

Sprache der Anfragen: Deutsch. Region: im Suchbegriff (Luzern, Zug). Datum: 24.09.2026. Gerät: nicht bestimmbar. Zählung aus der Kontrollsuche, ohne Rangfolge.

| Suchbegriff | Suchintention (Einschätzung) | Beobachtete Seitentypen (Anzahl Treffer) |
|---|---|---|
| Hauswartung Luzern | Anbietersuche, lokal | 1 Verzeichnis · 8 Anbieterseiten: 6 mit Ort in der URL (Leistungs-Orts-, Standort- oder Artikelseiten), 1 Leistungsseite mit Ort im Titel, 1 Startseite |
| Hauswartung Zug | gemischt: Anbietersuche, Stellensuche, Behörde | 1 Verzeichnis · 1 Stellenportal · 1 Behörden-/Schulseite · 7 Anbieterseiten: 5 Startseiten lokaler Hauswartbetriebe, 1 Leistungs-Orts-Seite, 1 Leistungsseite |
| Unterhaltsreinigung Luzern | Anbietersuche, lokal | 9 Anbieterseiten: 2 Seiten einer Exact-Match-Domain (davon 1 FAQ-Seite), 6 Leistungs-Orts- bzw. Ortsseiten und Artikel, 1 Startseite |
| Reinigungsfirma Luzern | Anbietersuche, lokal | 9 Anbieterseiten: 7 Ortsseiten, 1 Exact-Match-Domain, 1 Startseite |
| Reinigungsfirma Zug | Anbietersuche, lokal | 2 Verzeichnisse bzw. Vergleichsportale · 7 Anbieterseiten: 3 Ortsseiten, 1 Exact-Match-Domain, 3 Startseiten |
| Nur in N038 (nicht wiederholt): Winterdienst Luzern Firma, Büroreinigung Luzern, Grundreinigung Sonderreinigung Luzern Firma, Umgebungspflege Gartenunterhalt Liegenschaft Luzern, Markensuche | gemischt bzw. navigational | Laut N038 überwiegend Leistungs-Orts-Seiten, Exact-Match-Domains und Verzeichnisse. Bei „Winterdienst Luzern“ auch Stellenportale, Behörden und Preisrechner, bei „Umgebungspflege“ vor allem Gartenbaufirmen. Markensuche: Register, Verzeichnisse, Facebook-Profil der BGS, ältere Seiten von bgs-service.ch. Die Vorab-Adresse erscheint nicht |

**Beobachtung (Stichprobe, nicht Google.ch):** Bei „Reinigungsfirma …“ überwiegen Ortsseiten von Reinigungsfirmen, die mit Varianten für Luzern und Zug auftreten. Bei „Hauswartung Zug“ überwiegen Startseiten lokaler Hauswartbetriebe mit der Region im Titel, dazu Stellen- und Behördenseiten. Informative Inhalte ohne Anbieterbezug (Ratgeber) erscheinen in keiner der fünf Anfragen, nur eine FAQ-Seite und einzelne Artikel von Anbietern.

### 1.3 Auswahl der direkt verglichenen Anbieter

**Auswahlkriterien:** (1) gleiche Kombination aus Reinigung und Hauswartung, (2) Tätigkeit in Luzern oder Zug laut eigener Seite oder Suchtreffer, (3) Treffer bei „Hauswartung Luzern“ oder „Hauswartung Zug“ in N038 und in der Kontrollsuche.

| Anbieter | Begründung | Abgerufene Seiten (Abruf-ID, Zeit UTC) | Status |
|---|---|---|---|
| BiAg Facility Services GmbH | Adressen in Luzern und Zug, Reinigung und Hauswartung. Treffer bei „Hauswartung Luzern“ und „Unterhaltsreinigung Luzern“. Deckt wie BGS beide Kantone ab (LU und ZG) | **BI1** https://biagclean.ch/ (12:46:05) · **BI2** https://biagclean.ch/hauswartung-luzern/ (12:49:00) · **BI3** https://biagclean.ch/putzfirma-luzern/ (Über uns, 12:50:51) | geprüft |
| Luso AG | Sitz in Baar (ZG), Reinigung, Unterhalt und Hauswartung. Treffer bei „Hauswartung Zug“ | **LS1** https://www.luso.ch/, weitergeleitet auf https://www.luso.ch/de/index.php (12:46:35) · **LS2** https://www.luso.ch/de/dienstleistungen/Hauswartung/ (12:49:04) · **LS3** https://www.luso.ch/de/referenzen/ (12:50:57) | geprüft |
| R. Zürcher Hauswart-Service AG | Sitz in Baar (ZG), Hauswartung mit Reinigung, Haustechnik und Umgebung. Nennt Verwaltungen und Eigentümer als Kunden. Treffer bei „Hauswartung Zug“ | **RZ1** https://rzuercher.ch/ (12:46:40) · **RZ2** https://rzuercher.ch/hauswartung-und-reinigung/ (12:49:06) · **RZ3** https://rzuercher.ch/team/ (12:50:54) | geprüft |
| HAREGA AG | Hauswartung, Reinigung und Gartenpflege, eigene Luzern-Seite, Treffer bei „Hauswartung Luzern“. Sitz im Kanton Aargau: eher Suchwettbewerber für Luzern als regionaler Wettbewerber | **HA1** https://harega.ch/ (12:46:22 gescheitert, 12:49:23 erfolgreich) · **HA2** https://harega.ch/hauswartung-luzern/ (12:50:48) | geprüft |
| Vierwald Group | Titel des Suchtreffers: „Hauswartung & Unterhaltsreinigung in Luzern“ (https://vierwald.ch/hauswartungen/), also dieselbe Kombination in Luzern | **VW** https://vierwald.ch/ (12:46:08 und 12:49:10, beide gescheitert) | NICHT PRÜFBAR |

**Nicht ausgewählt, obwohl möglicherweise direkt vergleichbar:** deinhauswart.ch und lurel.ch (aus N038) sowie tst-hauswartung.ch, ci-hauswartung.ch und dober-fs.ch (erst in der Kontrollsuche). Grund: Abrufbudget und Vorauswahl aus N038. Die Auswahl ist deshalb keine Marktübersicht.

### 1.4 Übrige Treffer nach Seitentyp (nicht abgerufen, nicht intensiv analysiert)

| Seitentyp | Treffer (aus N038, ergänzt durch die Kontrollsuche) | Bedeutung für BGS |
|---|---|---|
| Verzeichnisse und Vergleichsportale | search.ch (Rubrik Hauswartungen/Liegenschaftenservice für Luzern und Zug), local.ch, ofri.ch | Einträge mit demselben Namen, derselben Adresse und derselben Telefonnummer wie auf der Website pflegen. BGS ist in Verzeichnissen bereits gelistet (N038). Die lokale Bekanntheit hängt auch von solchen Angaben ab [S32] |
| Exact-Match-Domains | unterhaltsreinigung-luzern.ch (auch `/faq/`), reinigungsfirma-luzern.ch, reinigungsfirma-zug.ch (gleiches Titelmuster wie reinigungsfirma-luzern.ch) | Betreiber und Inhalte nicht geprüft. Kein Vorbild: Zusätzliche Keyword-Domains stärken die Marke BGS nicht (HYPOTHESE) |
| Orts- bzw. Leistungs-Orts-Seiten von Reinigungsfirmen mit mehreren Regionen | reinigungsfuchs.ch (`/unterhaltsreinigung/luzern/`, `/luzern/`), cleanprofis.ch (`/unterhaltsreinigung/luzern/`, `/reinigungsfirma-luzern/`, `/reinigungsfirma-zug/`), tiptopcleaners.ch (`/unterhaltsreinigung-luzern.aspx`, `/reinigungsfirma/luzern`, `/reinigungsfirma/zug`), mrclean.ch (`/reinigungsfirma-luzern/`). Kontrollsuche zusätzlich: volki-clean.ch, mrcleaner.ch, slavi.ch | Dieselben Anbieter erscheinen mit Luzern- und Zug-Varianten. Ob diese Seiten eigenständigen Inhalt haben, ist nicht geprüft. Für BGS nur Ortsseiten mit echtem lokalem Inhalt [S33], siehe `Seiten/09-einzugsgebiete.md` |
| Leistungs-Orts-Seiten und Artikel von Hauswart- und Reinigungsfirmen | ever-clean.ch (`/hauswartung-luzern/`), wneu.ch (`/de/hauswartung-zug/`), kellerreinigung.ch (mehrere Artikel mit langen Orts-Slugs zu Hauswartung und Unterhaltsreinigung in Luzern), toka-gebaeudereinigung.ch (`/hausmeisterservice/`, der Titel nennt Zug, Zürich und die ganze Schweiz). Kontrollsuche zusätzlich: immoheld.swiss (`/standorte/…`) | Wettbewerber im weiteren Sinn, nicht analysiert |
| Startseiten regionaler Betriebe | lurel.ch (Titel: Luzern und Innerschweiz), deinhauswart.ch (Titel: Hauswartung und Gebäudeunterhalt, Luzern). Kontrollsuche zusätzlich: ci-hauswartung.ch, tst-hauswartung.ch, dober-fs.ch, bruetsch-cleanup.ch, sssreinigung.ch, marijanovic-reinigung.ch, perzug.ch | Mögliche direkte Wettbewerber, nicht analysiert (Grenze der Stichprobe) |
| Stellenportale, Behörden, Preisrechner | Bei „Hauswartung Zug“ und „Winterdienst Luzern“ (N038). Kontrollsuche: jobscout24.ch (Hauswart-Stellen in Zug), stadtschulenzug.ch (Hauswartung der Stadtschulen) | Keine Wettbewerber. Zeigen eine gemischte Suchintention: Ein Teil der Suchenden sucht eine Stelle oder eine Behörde |
| Gartenbaufirmen | Bei „Umgebungspflege Gartenunterhalt Liegenschaft Luzern“ (N038) | Bei der Aussen- und Grünflächenpflege konkurrieren Gartenbaufirmen. Eine Abgrenzung für BGS läge vermutlich in der Kombination mit der Hauswartung (HYPOTHESE) |
| Markensuche | Registerdienste, Verzeichnisse, Facebook-Profil der BGS - Gebäudeservice GmbH, drei ältere Seiten von bgs-service.ch. Die Vorab-Adresse erscheint nicht (N038) | Grundlage für einheitliche Firmenangaben (GLOBAL-020) |

## 2. Vergleichsraster

| Dimension | Was beobachten? | Was nicht daraus ableiten? |
|---|---|---|
| Angebot | Umfang, Zielgruppe, Einstieg, Abgrenzung | Nicht bekannte Lieferfähigkeit erfinden |
| Inhalt | Beantwortete Fragen, Tiefe, echte Praxisbeispiele | Wortzahl nicht als Qualitätsersatz |
| Vertrauen | Team, überprüfbare Referenzen, nachvollziehbare Ergebnisse | Sichtbare Behauptung nicht automatisch als wahr ansehen |
| UX | Orientierung, mobile Bedienung, Kontaktweg | Eigene Geschmackspräferenz nicht als Conversion-Beweis |
| Technik | Öffentliche HTTP-/Render-/Performance-Befunde | Backend-Qualität nicht vom Screenshot ableiten |
| Sichtbarkeit | Tatsächlich gemessene Treffer und externe Erwähnungen | Keine erfundenen Suchvolumina, Umsätze oder Linkmetriken |

### 2.1 Vergleichstabelle (Stichprobe 24.09.2026)

Lesehilfe: Kürzel in Klammern sind die Abruf-IDs aus 1.3. Alle Angaben der Anbieter sind deren eigene Aussagen und wurden nicht überprüft. Die Spalte BGS fasst Befunde aus `01-GLOBALE-ANALYSE.md` (Stand `d7e1122`) und die Eigenangabe des Kunden (N014) zusammen. Externe Erwähnungen und mobile Bedienung der Vergleichsseiten: NICHT GEPRÜFT.

| Dimension | BiAg Facility Services | Luso AG | R. Zürcher Hauswart-Service AG | HAREGA AG | BGS, neue Website (zum Abgleich) |
|---|---|---|---|---|---|
| **Angebot: Umfang** | Büro-, Unterhalts-, Fenster-, Bau-, Umzugs- und Spezialreinigung. Hauswartung inkl. Aussenanlagen, Schneeräumung, kleiner Reparaturen und Koordination von Fremdfirmen (BI1, BI2) | Reinigung, Unterhalt, Hauswartung, Support Services, Mietservice, Privatkunden. Startseite mit rund 37 Leistungen und Objektarten (LS1) | Drei Bereiche: Hauswartung und Reinigung, Gebäudetechnik inkl. Reparaturen, Garten- und Umgebungspflege inkl. Winterdienst (RZ1) | Hauswartung, Büro-, Unterhalts-, Fenster- und Solaranlagenreinigung, Gartenpflege. Im Formular auch Räumung/Entsorgung (HA1) | 18 Leistungsseiten bis Privatjet und Yacht (GLOBAL-030). Eigenangabe: zwei Bereiche mit sieben Unterleistungen (N014) |
| **Angebot: Zielgruppe laut Seite** | Privat- und Geschäftskunden. Hauswartung mit Blick auf Mieter (BI1, BI2) | Geschäfts- und Privatkunden, im Menü getrennt (LS1) | Verwaltungen und Eigentümer, ausdrücklich genannt (RZ1) | Wohn- und Geschäftsliegenschaften, Immobilieneigentümer (HA1, HA2) | Nicht festgelegt (R10). Die neue Seite spricht auch Luxuskunden an (GLOBAL-030) |
| **Angebot: Region laut Seite** | Adressen in Luzern und Zug, zugleich schweizweit (BI2, BI3). Widersprüchlich | Sitz Baar, Niederlassungen Zug und Zürich. Raum Zug und Zürich (LS1, LS3) | Sitz Baar. Vorwiegend Region Zug und angrenzende Kantone (RZ1) | Sitz Mägenwil (AG). Formular: AG, ZH, LU, SO. Luzern-Seite ohne Adresse in Luzern (HA1, HA2) | Eigenangabe LU/ZG (N014). Neue Seite zusätzlich Zürich und schweizweit (GLOBAL-021) |
| **Angebot: Einstieg** | Rückruf-Formular. Ablauf Besichtigung → Planung → individuelles Angebot in einem Absatz (BI1) | Offertanfrage mit Upload für Leistungsverzeichnisse. Preis erst nach Besichtigung, Offerte 20 Tage gültig (LS2). Zugleich Ab-Preise auf der Startseite (LS1) | Kontakt für ein unverbindliches Angebot. Kombiverträge für Hauswartung und Wartung (RZ2) | Kostenlose Offerte per Formular mit Leistung und Kanton (HA1, HA2) | Viele konkurrierende Handlungsaufforderungen, Formular ohne Zustellnachweis (GLOBAL-003, -034). Eigenangabe: kostenlose, unverbindliche Offerte vor Ort (N014) |
| **Inhalt: beantwortete Fragen, Tiefe** | Was gereinigt wird (allgemein), wann (auch am Wochenende), privat oder gewerblich, Rhythmus. Vier allgemeine FAQ (BI1). Die Hauswartungsseite nennt keine Grenzen, keinen Ablauf, keine Preise (BI2) | Aufgaben nach Umgebung, Haustechnik und Reinigung gegliedert. Preislogik. Winterdienst auch ohne Hauswartungsvertrag (LS2) | Konkrete Aufgabenlisten, z. B. Notbeleuchtung testen, Rauchmelder prüfen, Tiefgarage reinigen, Fassadenreinigung mit Höhenangabe (RZ2) | Luzern-Seite mit allgemeinem Text ohne lokale oder überprüfbare Angaben, der Ortsname wird oft wiederholt (HA2) | Schablonentexte. FAQ- und Reiterinhalte erst nach Klick im HTML (GLOBAL-011, -036) |
| **Inhalt: Praxisbeispiele** | keine | keine Fallbeispiele, aber Kundenstimmen (LS1) | keine | keine. Weitere Referenzen nur auf Anfrage (HA2) | Referenzen ohne Nachweis, KI-Projektbilder (GLOBAL-022, -023) |
| **Vertrauen: Team** | Keine Personen genannt oder gezeigt. Das Team nur als allgemeine Aussage (BI3) | Keine Personen auf den drei Seiten. Inhabergeführt als Aussage (LS1) | Teamseite mit 39 Einzelporträts, Funktion und Filter nach Bereich. Kontaktknöpfe bei Leitung und Administration (RZ3) | Keine Personen. Erfahrene Hauswarte als Aussage (HA2) | KI-Teambild (GLOBAL-023) |
| **Vertrauen: Fotos** | Leistungsbilder ohne Personen- oder Objektbezug. Herkunft nicht geprüft | Slider, Symbolgrafiken, Porträts bei Kundenstimmen. Herkunft nicht geprüft | Leistungsseiten mit Illustrationen statt Fotos. Teamporträts nach Dateinamen und Aufbau vermutlich echte Mitarbeitende (Einschätzung) | Kundenlogos, wenige Fotos. Ein Dateiname spricht für Fremdmaterial (HYPOTHESE) | KI-Bilder, im Impressum eingeräumt (GLOBAL-023) |
| **Vertrauen: Referenzen, Bewertungen** | Keine. Kennzahl von über 800 zufriedenen Kunden ohne Beleg (BI1) | Liste mit 17 Geschäftskunden (ein Eintrag doppelt), datiert auf Frühling 2026 (LS3). Kundenstimmen mit Organisation und Link (LS1) | Keine Liste. Langjährige Kundenbeziehungen als Aussage (RZ1) | Kundenlogos. Google-Bewertungswidget mit 4,9 aus 15 Bewertungen, angezeigt, nicht geprüft (HA1) | Stimmen mit Merkmalen erfundener Stimmen (GLOBAL-022) |
| **Vertrauen: Zertifikate, Mitgliedschaften** | Keine. Umweltaussagen ohne Label (BI3) | ISO 9001:2015, Branchenverband, Sicherheits-Charta, Lehrbetrieb, jeweils mit Logo oder Link (LS1, LS3) | Keine auf den drei Seiten | Keine auf den zwei Seiten | ISO behauptet, laut Impressum in Bearbeitung (GLOBAL-021) |
| **Vertrauen: Gründung, Erfahrung (Behauptung)** | Über 20 Jahre Erfahrung (BI1, BI3) | Gegründet 2007, rund 500 betreute Objekte (LS1) | Seit 20 Jahren (RZ1) | Kein Jahr genannt, Copyright ab 2017 (HA1) | Gründung 2005 und 15+ Jahre, widerspricht den Registerdaten (N037) |
| **Vertrauen: pauschale Zusagen, Superlative** | 24 Stunden an 7 Tagen, schweizweit (BI1–BI3) | Führender Anbieter der Region, Qualität garantiert (LS1) | Superlativ zur Region Zug als H1 (RZ1) | Exzellenz und höchste Qualität als Mission. Firmenname uneinheitlich: Harega AG bzw. HAREGA Facility Services AG (HA1) | ISO, 500+ Kunden, 24/7, führend (GLOBAL-021) |
| **UX: Orientierung** | 9 Menüeinträge, Leistungen meist mit Ortsnamen (BI1) | Rund 28 Menüeinträge, Geschäfts- und Privatkunden getrennt (LS1) | 7 Menüeinträge: drei Leistungsbereiche, Über uns, Team, Kontakt, Jobs (RZ1) | 7 Menüeinträge. Die Luzern-Seite ist von der Startseite aus nicht verlinkt. Schlagwort-Links mit Ortsvarianten (HA1, HA2) | Mega-Menü, keine Übersichtsseiten (GLOBAL-033) |
| **UX: Kontaktweg** | Rückruf-Formular. Telefon und E-Mail nur als Text, ohne `tel:`- und `mailto:`-Link. Formularmeldungen auf Englisch (BI1–BI3) | Telefon je Region, Formular, WhatsApp-Kurzberatung, Kundencenter für Störungen auch außerhalb der Geschäftszeiten (LS1) | Telefon und E-Mail im Kopfbereich. Dem E-Mail-Link fehlt `mailto:` (RZ1) | Offertformular, auf der Luzern-Seite mehrstufig. Telefon und E-Mail als Text ohne Link. Öffnungszeiten (HA1, HA2) | Chat defekt, Formular meldet Erfolg ohne Zustellung (GLOBAL-002, -003) |
| **Technik: Title** | Leistung, Ort und Marke, teils mit 24/7 (BI1–BI3) | Derselbe lange Zusatz mit Kanton Zug auf allen drei Seiten (LS1–LS3) | Seitenname und Firma, auf der Startseite mit Region (RZ1–RZ3) | Startseite nur Firma und Gebäudereinigung, Luzern-Seite mit Leistung und Ort (HA1, HA2) | 32 identische Titles (GLOBAL-010) |
| **Technik: Meta-Description** | auf 3 von 3 Seiten | auf 2 von 3, auf der Referenzseite leer | auf 0 von 3 | auf 2 von 2, jeweils doppelt, die zweite mit Textfragment | auf 32 Seiten identisch (GLOBAL-010) |
| **Technik: H1** | je genau eine | keine auf allen drei Seiten | nur auf der Startseite | Startseite nur Firmenname, Luzern-Seite mit zwei H1 | je genau eine (N007) |
| **Technik: JSON-LD** | Organization mit Adresse und ContactPoint, WebSite, WebPage bzw. AboutPage, Place. Zusätzlich Theme-Blöcke mit einer zweiten Organization unter dem Domainnamen und einem Article | keins | keins | Organization, WebSite, WebPage, BreadcrumbList | keins (N007) |
| **Technik: Sonstiges** | Canonical vorhanden, `lang="de-CH"`, WordPress | Kein Canonical. Die Startseite leitet über HTTP weiter (https → http → https). Weblication CMS | Canonical vorhanden, `lang="de"`, WordPress | Canonical vorhanden, `lang="de"`, WordPress mit zwei Slider-Plugins | Kein Canonical, `lang="de"` (GLOBAL-010, -037) |
| **Technik: Leistung×Ort-Seiten** | Ja, z. B. `/hauswartung-luzern/`, `/unterhaltsreinigung-luzern/`, `/bueroreinigung-zug/` | Nein, Region nur im Title | Nein | Ja, `/hauswartung-luzern/` plus Schlagwortseiten. Übrige Leistungsseiten ohne Ort | Drei Stadtseiten inkl. Zürich als Vorlagenvarianten (SEITE-P09-002) |
| **Sichtbarkeit (Stichprobe, ohne Rangfolge)** | Treffer bei „Hauswartung Luzern“ und „Unterhaltsreinigung Luzern“ | Treffer bei „Hauswartung Zug“ | Treffer bei „Hauswartung Zug“ | Treffer bei „Hauswartung Luzern“ | Vorab-Adresse nicht sichtbar. Markensuche zeigt Register, Verzeichnisse, Facebook-Profil und ältere Kundenseiten (N038) |

**Vierwald Group:** NICHT PRÜFBAR. Bekannt ist nur der Titel des Suchtreffers (1.3). Über Angebot, Inhalt, Vertrauen, UX und Technik wird nichts ausgesagt.

### 2.2 Was die Stichprobe zeigt

- **Angebot:** Alle vier Anbieter verbinden Reinigung und Hauswartung. Die Kombination allein unterscheidet BGS deshalb nicht.
- **Inhalt:** Konkrete Aufgabenlisten zeigen nur R. Zürcher (RZ2) und Luso (LS2). Keine der elf Seiten sagt ausdrücklich, was nicht enthalten ist, wie die eigene Arbeit kontrolliert und nachgewiesen wird oder wie der Start nach der Offerte abläuft. Kontrollen der Haustechnik (RZ2, LS2) sind Leistungen am Gebäude, keine Qualitätskontrolle der Arbeit. Stichwortsuche im Text: 0 Fundstellen für „Stockwerk“ und „STWEG“, 0 für „Rapport“, „Protokoll“, „Bericht“ und „Checkliste“, 0 für ausdrückliche Leistungsgrenzen („nicht enthalten“, „separat“, „Aufpreis“).
- **Vertrauen:** Die Belege sind sehr unterschiedlich nachvollziehbar: eine Teamseite mit Porträts (RZ3), eine datierte Referenzliste und Kundenstimmen mit Organisation (LS3, LS1), Logos und ein Bewertungswidget (HA1), nur Kennzahlen (BI1). Fallbeispiele mit Ausgangslage und Ergebnis zeigt keiner.
- **Aussagen:** Alle vier nutzen pauschale Zusagen oder Superlative. Zwei machen weite oder widersprüchliche Regionsangaben (BiAg, HAREGA). Dasselbe Muster zeigt die neue BGS-Seite (GLOBAL-021, -030). Die Wettbewerber haben hier keinen Vorsprung, BGS hat die Chance auf überprüfbare Aussagen.
- **UX:** Nur Luso trennt Kontaktwege nach Anliegen (Offerte, Störung, Kurzberatung). Bei BiAg und HAREGA sind Telefon und E-Mail im ausgelieferten HTML nicht verlinkt, bei R. Zürcher fehlt dem E-Mail-Link `mailto:`.
- **Technik:** Die Grundlagen sind uneinheitlich: keine H1 bei Luso, keine Meta-Description bei R. Zürcher, doppelte Descriptions bei HAREGA, doppelte Organization-Angaben bei BiAg. Keiner nutzt `LocalBusiness`- oder `Service`-Markup. Saubere Technik ist für BGS eine Voraussetzung, aber allein kein Kaufgrund und keine Garantie für gute Positionen [S37]. Strukturierte Daten nur mit zutreffenden, sichtbaren Angaben [S10].

## 3. Eigene Differenzierung erarbeiten

- [x] Welche relevante Kundenfrage beantwortet keiner der verglichenen Anbieter ausreichend? → *Geprüft (Stichprobe, 11 Seiten, Stichwortsuche im Text). Keiner beantwortet ausreichend, (1) was nicht im Leistungsumfang enthalten ist, (2) wie die Arbeit kontrolliert und gegenüber dem Auftraggeber nachgewiesen wird, (3) wie der Start nach der Offerte abläuft, also Übergabe, Ansprechperson und Vertretung, und (4) welche Fragen Stockwerkeigentümergemeinschaften haben (0 Fundstellen). Einen einzigen Ansprechpartner versprechen Luso (LS1) und HAREGA (HA2), wer das ist, sagt keine Seite. Kostenfaktoren erklärt keiner, Luso nennt nur Ab-Preise (LS1). Ansätze gibt es bei Luso: Meldeweg für Störungen (LS1), Preis erst nach Besichtigung (LS2). Ob diese Fragen für die Käufer von BGS entscheidend sind, ist HYPOTHESE (R10) → Chancen 2, 3 und 5*
- [x] Welche nachweisbare Spezialisierung oder Arbeitsweise besitzt unser Unternehmen tatsächlich? → *NICHT PRÜFBAR (Kundenangaben fehlen, B06, R10). Belegt sind nur: Registereintrag „BGS - Gebäudeservice GmbH“, Sitz Tannhof 10, 6020 Emmenbrücke, aktiv (N033). Handelsregister Luzern seit 1997, Zweck Gebäudereinigung und Gebäudeunterhalt seit 20.11.2012 (N037, Sekundärquelle). Eigenangabe ohne unabhängige Prüfung (N014): Hauswart- und Reinigungsfirma für die Kantone Luzern und Zug, zwei Bereiche mit sieben Unterleistungen, kostenlose und unverbindliche Offerte vor Ort. Eine Spezialisierung (Objektart, Zielgruppe) oder eine belegte Arbeitsweise (Ansprechperson, Kontrolle, Reaktionszeit) ist nicht dokumentiert. Die Kombination aus Reinigung und Hauswartung bieten alle vier Vergleichsanbieter ebenfalls an, sie ist allein kein Unterscheidungsmerkmal*
- [x] Welche konkreten Belege fehlen uns, obwohl Wettbewerber sie bereits nachvollziehbar zeigen? → *BEFUND für BGS (R6). Es fehlen (1) echte Fotos von Mitarbeitenden mit Funktion: R. Zürcher zeigt 39 Porträts (RZ3), BGS ein KI-Teambild (GLOBAL-023); (2) eine datierte Referenzliste und Kundenstimmen mit Organisation: Luso (LS3, LS1), BGS nur Stimmen ohne Nachweis (GLOBAL-022); (3) belegbare Zertifikate und Mitgliedschaften: Luso nennt ISO 9001:2015, Branchenverband, Sicherheits-Charta und Lehrbetrieb, bei BGS ist ISO laut Impressum in Bearbeitung (GLOBAL-021); (4) externe Bewertungen: Widget bei HAREGA (HA1), ob BGS ein Google-Unternehmensprofil hat, ist offen (R11). Eine Adresse zeigen alle, auch BGS, dort aber ohne den Registernamen (GLOBAL-020). Die Belege der Wettbewerber sind sichtbar und grundsätzlich überprüfbar, wurden hier aber nicht überprüft*
- [x] Welche Informationen reduzieren Unsicherheit: Leistungsgrenzen, Verantwortlichkeiten, Prozess, Kostenfaktoren oder Auswahlhilfe? → *HYPOTHESE (Wirkung auf Anfragen nicht gemessen). In der Stichprobe reduzieren vor allem konkrete Aufgabenlisten (RZ2, LS2), die Preislogik mit Besichtigung und Gültigkeit der Offerte (LS2), ein Einstieg ohne Vertrag beim Winterdienst (LS2) und nach Anliegen getrennte Kontaktwege (LS1) die Unsicherheit. Überall fehlen Leistungsgrenzen, eine benannte Ansprechperson mit Vertretung, Kostenfaktoren und eine Auswahlhilfe zwischen Reinigung, Hauswartung und Kombination. Für BGS vorrangig: der Ablauf der Offerte vor Ort (N014), Leistungsgrenzen und Kostenfaktoren je bestätigter Leistung (R3) und eine Auswahlhilfe auf der Leistungsübersicht (GLOBAL-033). Detailvorgaben stehen in Seiten/03, Seiten/04 und Seiten/10 → Chancen 2 und 3*
- [x] Welche Inhalte wären auch ohne Suchmaschinen nützlich genug, um sie einem Interessenten zu schicken? → *HYPOTHESE. (1) Eine Leistungsbeschreibung je bestätigter Leistung mit Aufgaben, Rhythmus und Grenzen, als Seite und druckbar. (2) Eine Erklärung, wie die Offerte vor Ort abläuft und welche Unterlagen Interessenten bereithalten können, z. B. Pläne, Flächen oder ein bestehendes Leistungsverzeichnis. (3) Eine Winterdienst-Regelung mit Einsatzbeginn und Dokumentation, nur mit bestätigter Regel (SEITE-P06-001). (4) Zwei bis drei freigegebene Fallbeispiele (Seiten/26-referenzen.md). Hinweise aus der Stichprobe: BiAg bietet einen Katalog als PDF an, laut Dateiname von 2021 (BI3). Luso nimmt Leistungsverzeichnisse und Ausschreibungsunterlagen per Upload an (LS2). Beides spricht dafür, dass Unterlagen im Kaufprozess eine Rolle spielen*
- [x] Welche gestalterischen Muster unterstützen Vertrauen, ohne Wettbewerber oder FIMI zu kopieren? → *HYPOTHESE (Wirkung nicht getestet). Als Prinzip übertragbar: echte Personen mit Funktion statt Symbolbildern (RZ3); Illustrationen statt Stockfotos, solange keine echten Fotos vorliegen (RZ1, RZ2); sichtbare Trennung von Eigenaussage und Kundenbestätigung (LS1); ein Datum an Referenzen (LS3); Kontaktwege nach Anliegen (LS1); Adresse und Erreichbarkeit auf jeder Seite (alle). Nicht übernehmen: Kennzahlen-Leisten ohne Beleg (BI1), Logo-Wände ohne Kontext (HA1), Superlative in der H1 (RZ1). Texte, Layouts und Bilder der Wettbewerber werden nicht übernommen. FIMI wurde für diese Datei nicht geöffnet, die FIMI-Prinzipien stehen in 01-GLOBALE-ANALYSE.md, Abschnitt C*
- [x] Welche Verbesserung ist kurzfristig realistisch und welche setzt echte operative Leistungen voraus? → *HYPOTHESE, abhängig von R2–R6 und R10. Kurzfristig, nur mit Redaktion und schriftlicher Kundenbestätigung: Registername und Region LU/ZG überall gleich, unbelegte Zahlen und Siegel entfernen (GLOBAL-020, -021), bestätigte Leistungen mit Aufgaben und Grenzen, Ablauf der Offerte vor Ort, eine primäre Handlungsaufforderung (GLOBAL-034). Mit Unternehmenssubstanz, aber ohne neue Betriebsleistung: freigegebene Referenzen, echte Team- und Objektfotos mit Einwilligung, Nachweis der Haftpflichtversicherung, Google-Unternehmensprofil mit echten Bewertungen [S32]. Nur mit echter operativer Leistung: Störungsmeldung oder Pikettdienst, zugesagte Reaktionszeiten, Dokumentation der Einsätze, Zertifizierung*

## 4. Mögliche Ideen, nur nach Geschäftsrelevanz priorisieren

Echte Fallstudien mit messbarer Ausgangslage; nachvollziehbare Leistungsabgrenzung; eine Auswahlhilfe zwischen den fünf Leistungen; offen erklärte Zusammenarbeit; eine freigegebene Checkliste für Erstgespräche; ein relevanter Fachbeitrag mit eigenen Erfahrungen; ein einfacher Anfrageprozess mit klaren nächsten Schritten.

Diese Ideen sind keine pauschalen Pflichtseiten. Jede Idee braucht Zielgruppe, konkrete Aufgabe, verfügbaren Nachweis, zuständige Person und Messansatz. Kein Blog nur, um mehr URLs zu produzieren. Keine beliebigen „GEO-Landingpages“ ohne Zusatznutzen. Google betont eigenständigen Inhalt statt spezieller KI-Optimierungstricks. [S02][S34]

**Abgleich mit der Stichprobe (24.09.2026):**

- **Echte Fallstudien:** bei keinem der vier Anbieter gefunden, nur Listen, Logos und Stimmen → Chance 4.
- **Nachvollziehbare Leistungsabgrenzung:** Aufgabenlisten bei R. Zürcher und Luso, ausdrückliche Grenzen bei keinem → Chance 2.
- **Auswahlhilfe zwischen den Leistungen:** bei keinem gefunden. Die „fünf Leistungen“ sind nicht bestätigt (R3), die Eigenangabe nennt zwei Bereiche mit sieben Unterleistungen (N014).
- **Offen erklärte Zusammenarbeit:** nur Teilaspekte, z. B. die Störungsmeldung bei Luso → Chance 5.
- **Checkliste für Erstgespräche und einfacher Anfrageprozess:** Upload bei Luso, Kantonsauswahl bei HAREGA, einen erklärten Ablauf hat keiner → Chance 3.
- **Fachbeitrag mit eigenen Erfahrungen:** nicht Teil der Stichprobe (keine Blogs abgerufen), NICHT GEPRÜFT.
- **Ortsseiten:** Leistung×Ort-Seiten sind bei den Wettbewerbern verbreitet, die geprüfte Luzern-Seite von HAREGA enthält aber keine lokalen Angaben. Für BGS gilt die Vorgabe aus `Seiten/09-einzugsgebiete.md`: eine Einzugsgebietsseite, Ortsseiten nur mit echtem lokalem Inhalt [S33].

## 5. Priorisierter Ergebnisteil

Nach der Prüfung maximal fünf größte Differenzierungschancen herausarbeiten. Je Chance: Beobachtung mit konkreten Vergleichsseiten, Relevanz für den Käufer, benötigte Unternehmenssubstanz, Aufwand, Risiko und Erfolgskriterium.

**Kein Fazit „Wir stellen die Top 10 locker in den Schatten“.** Möglich ist ein belegbares Fazit wie: „Die vorgeschlagene Seite beantwortet die Fragen X und Y nachvollziehbarer als die untersuchten Vergleichsseiten; ob daraus bessere Sichtbarkeit und mehr qualifizierte Anfragen entstehen, wird gemessen.“ Rankinggarantien sind kein seriöser Leistungsnachweis. [S36]

**Reihenfolge:** nach heute verfügbarer Unternehmenssubstanz und vermuteter Relevanz für Käufer. Chance 1 und 2 brauchen nur Kundenbestätigungen, Chance 3 zusätzlich einen funktionierenden Formularweg, Chance 4 Freigaben und Fotos, Chance 5 echte Prozesse. Chance 5 greift Lücken auf, die in der Stichprobe alle vier Anbieter offenlassen (Nachweis der Arbeit, Stockwerkeigentum). Dort ist aber auch das Risiko hoch. Die Zielgruppen Verwaltungen, Eigentümer, STWEG und Gewerbe sind unbestätigt (R10).

### Chance 1 · Überprüfbare Identität und ein klar begrenztes Einzugsgebiet

- **Beobachtung:** BiAg nennt Adressen in Luzern und Zug und zugleich „Schweizweit im Einsatz“ (https://biagclean.ch/putzfirma-luzern/) bzw. „Luzern, Zug und der ganzen Schweiz“ (https://biagclean.ch/hauswartung-luzern/). HAREGA betreibt eine Luzern-Seite mit Sitz in Mägenwil (AG) und ohne Angaben zu Luzern (https://harega.ch/hauswartung-luzern/). R. Zürcher setzt einen Superlativ in die H1, nennt aber ein nachvollziehbares Gebiet: „vorwiegend in der Region Zug und in den angrenzenden Kantonen“ (https://rzuercher.ch/). Die neue BGS-Seite nennt Zürich und „Schweizweit“, der Registername fehlt (GLOBAL-020, -021).
- **Chance:** BGS tritt mit Registername, Sitz in Emmenbrücke und dem Einzugsgebiet Kantone Luzern und Zug auf, überall gleich: Website, Verzeichnisse und strukturierte Daten [S14]. Eine Seite „Einzugsgebiet“ statt dreier Stadtvorlagen (`Seiten/09-einzugsgebiete.md`), keine Ortsseiten ohne eigenen Inhalt [S33].
- **Relevanz für Käufer:** Verwaltungen, Eigentümer, STWEG und Gewerbe in LU/ZG wollen vermutlich wissen, ob der Betrieb in der Nähe ist und ihr Objekt bedient (HYPOTHESE, R10). Für lokale Ergebnisse zählen laut Google Relevanz, Entfernung und Bekanntheit, nicht die Wiederholung von Ortsnamen [S32].
- **Benötigte Unternehmenssubstanz:** Bestätigung von Marke (R2), Region und bedienten Gemeinden (R4) sowie Kontaktdaten (R5). Keine neue Betriebsleistung.
- **Aufwand:** klein (Redaktion, zentrale Firmendaten, Abgleich der Verzeichnisse).
- **Risiko:** gering. Weniger Anfragen von außerhalb des Gebiets sind erwünscht, wenn BGS dort nicht arbeitet.
- **Erfolgskriterium:** Die Volltextsuche über alle Seiten findet keine andere Region als LU/ZG und keinen abweichenden Firmennamen. Stichprobe search.ch und local.ch: Name, Adresse und Telefon stimmen mit der Website überein. Nach dem Launch: Anteil der Anfragen mit Objekt in LU/ZG (Messung nach GLOBAL-029).

### Chance 2 · Leistungsumfang als konkreter Aufgabenkatalog mit Grenzen

- **Beobachtung:** R. Zürcher listet prüfbare Einzelaufgaben, z. B. „Notbeleuchtung testen“ oder die Reinigung der Tiefgarage (https://rzuercher.ch/hauswartung-und-reinigung/). Luso gliedert die Hauswartung nach Umgebung, Haustechnik und Reinigung (https://www.luso.ch/de/dienstleistungen/Hauswartung/). BiAg (https://biagclean.ch/hauswartung-luzern/) und HAREGA (https://harega.ch/hauswartung-luzern/) bleiben allgemein. Keine der elf Seiten sagt ausdrücklich, was nicht enthalten ist. Die BGS-Leistungsseiten sind Schablonen (GLOBAL-036).
- **Chance:** Je bestätigter Leistung (R3) ein eigener Katalog: enthalten, nicht enthalten bzw. separat, typischer Rhythmus, Beispiele nach Objektart. Als Seite und als druckbare Fassung, in eigenen Worten aus dem Betrieb, ohne Übernahme von Wettbewerberlisten.
- **Relevanz für Käufer:** Verwaltungen und STWEG vergleichen Offerten vermutlich anhand von Leistungsverzeichnissen (HYPOTHESE, R10). Dafür spricht, dass Luso solche Unterlagen per Upload annimmt (https://www.luso.ch/de/dienstleistungen/Hauswartung/).
- **Benötigte Unternehmenssubstanz:** der tatsächliche Aufgabenkatalog aus dem Betrieb, ein Entscheid über Grenzen (z. B. Reparaturen, Entsorgung), bestätigte Winterdienst-Regeln (SEITE-P06-001).
- **Aufwand:** mittel (Fachinput des Kunden, Redaktion).
- **Risiko:** Zusagen, die nicht geleistet werden. Der Katalog muss aktuell bleiben.
- **Erfolgskriterium:** Jede Leistungsseite beantwortet im sichtbaren Text „was genau, was nicht, wie oft, wo“ (Abnahme GLOBAL-036) und ist vom Kunden freigegeben. Nutzertest mit drei bis fünf Personen aus der Zielgruppe: Die Grenzen einer Leistung werden ohne Hilfe gefunden.

### Chance 3 · Den Einstieg „Offerte vor Ort“ Schritt für Schritt erklären

- **Beobachtung:** BiAg fasst den Weg von der Besichtigung zum Angebot in einem Absatz zusammen (https://biagclean.ch/). Luso schreibt „Preisangaben sind nur nach Besichtigung möglich“ und nennt 20 Tage Gültigkeit der Offerte (https://www.luso.ch/de/dienstleistungen/Hauswartung/). HAREGA bietet „Kostenlose Offerte anfragen“ mit Auswahl von Leistung und Kanton (https://harega.ch/). R. Zürcher verweist auf ein unverbindliches Angebot (https://rzuercher.ch/hauswartung-und-reinigung/). Keine Seite erklärt, was bei der Besichtigung geschieht, wie lange sie dauert und wann die Offerte folgt.
- **Chance:** Die kostenlose, unverbindliche Offerte vor Ort ist bereits Eigenangabe des Kunden (N014). Dazu ein Ablauf in wenigen bestätigten Schritten, ein Formular mit Objektort und Leistung, optional mit Unterlagen, und eine einheitliche Rückmeldezeit (`Seiten/10-kontakt.md`, `Seiten/03-leistung-unterhaltsreinigung.md`, `Seiten/04-leistung-hausmeisterservice.md`).
- **Relevanz für Käufer:** senkt vermutlich die Schwelle für Eigentümer und kleine STWEG. Verwaltungen können vorhandene Unterlagen mitschicken (HYPOTHESE, R10).
- **Benötigte Unternehmenssubstanz:** bestätigter Ablauf, wer besichtigt, eine realistische Rückmeldezeit (B10, R5), Gültigkeit der Offerte. Ein funktionierender Formularweg, GLOBAL-003 muss vorher behoben sein.
- **Aufwand:** klein bis mittel.
- **Risiko:** Zugesagte Zeiten werden nicht eingehalten. Ein Formular ohne Zustellnachweis würde gerade diesen Einstieg beschädigen.
- **Erfolgskriterium:** Der Ablauf ist vom Kunden schriftlich freigegeben, der End-to-End-Test des Formulars ist bestanden. Nach dem Launch gemessen: Anteil vollständiger Anfragen (Objektort und Leistung angegeben) und Zeit bis zur ersten Rückmeldung.

### Chance 4 · Wenige, echte und datierte Belege statt Kennzahlen

- **Beobachtung:** R. Zürcher zeigt 39 Mitarbeitende mit Porträt und Funktion (https://rzuercher.ch/team/). Luso zeigt eine Referenzliste mit „Stand Frühling 2026“ (https://www.luso.ch/de/referenzen/) und Kundenstimmen mit Organisation (https://www.luso.ch/). HAREGA zeigt Kundenlogos und ein Bewertungswidget (https://harega.ch/). BiAg zeigt Kennzahlen wie „über 800 zufriedene Kunden“ ohne Beleg (https://biagclean.ch/). Die neue BGS-Seite zeigt KI-Bilder sowie unbelegte Stimmen und Zahlen (GLOBAL-021 bis -023).
- **Chance:** Statt Zahlen ohne Quelle zwei bis drei freigegebene Fallbeispiele (Aufbau in `Seiten/26-referenzen.md`), echte Team- und Objektfotos, der Registereintrag und ein Versicherungsnachweis auf Anfrage. Jeder Beleg mit Datum.
- **Relevanz für Käufer:** Gewerbe und Verwaltungen prüfen vermutlich Referenzen vor einer Vergabe (HYPOTHESE, R10).
- **Benötigte Unternehmenssubstanz:** Freigaben der Auftraggeber, Fotoshooting mit Einwilligung der Mitarbeitenden, Versicherungsnachweis (R6, R7).
- **Aufwand:** mittel (Organisation, Fotos, Freigaben).
- **Risiko:** Datenschutz bei Personenfotos, veraltete Referenzen. Die Gestaltung der Wettbewerber nicht nachahmen.
- **Erfolgskriterium:** Für jeden veröffentlichten Beleg liegen Freigabe und Datum vor (Abnahme GLOBAL-022). Keine Zahl ohne Quelle. Nutzertest: Testpersonen nennen mindestens zwei überprüfbare Gründe, BGS zu vertrauen.

### Chance 5 · Zusammenarbeit für Verwaltungen und STWEG offenlegen: Ansprechperson, Meldeweg, Nachweis der Arbeit

- **Beobachtung:** Keine der elf Seiten erwähnt Stockwerkeigentum, keine nennt Rapport, Kontrollgang oder Protokoll. Luso bietet ein Kundencenter, um „Störungen und Schäden unkompliziert auch ausserhalb der Geschäftszeiten“ zu melden (https://www.luso.ch/), und listet einen Pikettdienst (https://www.luso.ch/de/dienstleistungen/Hauswartung/). R. Zürcher nennt „Verwaltungen und Eigentümer“ als Kunden (https://rzuercher.ch/). BiAg verspricht „24h und 7-Tage“ ohne Bedingungen (https://biagclean.ch/).
- **Chance:** BGS beschreibt, wie die Zusammenarbeit konkret läuft: feste Ansprechperson und Vertretung, Meldeweg für Mängel, Rückmeldung nach Einsätzen, Dokumentation im Winterdienst. Nur was tatsächlich existiert.
- **Relevanz für Käufer:** Verwaltungen und STWEG verantworten Liegenschaften gegenüber Eigentümern und Mietern. Nachvollziehbarkeit ist vermutlich ein Auswahlkriterium (HYPOTHESE, R10).
- **Benötigte Unternehmenssubstanz:** echte Prozesse für Ansprechperson, Meldeweg, Erreichbarkeit (B10) und Dokumentation. Ohne diese Substanz nicht veröffentlichen.
- **Aufwand:** mittel, wenn die Prozesse bestehen. Groß, wenn sie erst aufgebaut werden müssen.
- **Risiko:** hoch, wenn Zusagen den Betrieb übersteigen (vgl. „24/7“ auf der neuen Seite, GLOBAL-021).
- **Erfolgskriterium:** Der Kunde bestätigt jeden beschriebenen Schritt schriftlich. Nach dem Launch: Anteil der Anfragen von Verwaltungen und STWEG (Formularfeld Objektart bzw. Auftraggeber) und Rückmeldungen aus Erstgesprächen.

### Belegbares Fazit

In der Stichprobe (vier Anbieter, elf Seiten) beantwortet keine Vergleichsseite, was nicht im Leistungsumfang enthalten ist, wie die eigene Arbeit kontrolliert und nachgewiesen wird und wie der Einstieg über die Besichtigung im Einzelnen abläuft. Eine BGS-Seite, die diese Fragen mit bestätigten Angaben beantwortet, wäre darin nachvollziehbarer als die untersuchten Vergleichsseiten. Ob daraus bessere Sichtbarkeit und mehr qualifizierte Anfragen entstehen, wird nach dem Launch gemessen (GLOBAL-029). Eine Rankingzusage lässt sich daraus nicht ableiten [S36].

---

**Quellen zu dieser Datei:** siehe 09-QUELLEN.md (S02, S10, S14, S32, S33, S34, S36, S37).

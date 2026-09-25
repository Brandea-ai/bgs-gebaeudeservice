# Fortschritt, offene Punkte und nächste Aufgabe

**Prüfziel:** BGS Gebäudeservice (`Brandea-ai/bgs-gebaeudeservice`, geprüfter Stand `main` @ `d7e1122`)
**Referenz:** FIMI-Gebäudereinigung (`Brandea-ai/FIMI-Gebaeudereinigung` @ `1143a9f`), nur lesend, nur Inspiration
**Letzte Aktualisierung:** 25.09.2026

## Goldener Stand

`_GOLDENER-STAND/Webseite-Analyse-Gesamt.md` ist das unveränderte Original des Prüfauftrags vom 24.09.2026 (SHA-256 beginnt mit `926ccd59f07b6010`). **Diese Datei wird nie bearbeitet.** Sie ist die verbindliche Regel für die gesamte Arbeit.

Die übrigen Dateien in diesem Ordner sind wortgleich aus dem Original abgeleitet: 22 Dokumente, 1.542 von 1.542 Inhaltszeilen, Vollständigkeit geprüft. Sie sind die Arbeitsdateien und werden Schritt für Schritt ausgefüllt und abgehakt. Weichen Arbeitsdatei und Original voneinander ab, gilt das Original, soweit keine dokumentierte Nutzerentscheidung in `07-BRIEFING-UND-ENTSCHEIDUNGEN.md` etwas anderes festlegt.

**Einstieg für jede neue Sitzung:** 1. diese Datei, 2. `00-START-HIER.md` (Auftrag und Regeln), 3. `07-BRIEFING-UND-ENTSCHEIDUNGEN.md` (Entscheidungen). Nicht auf Erinnerung vertrauen.

## Arbeitsregeln in Kürze

Maßgeblich ist `00-START-HIER.md`, Abschnitte 2 bis 7. Kurzfassung:

- ~~Nur Markdown in `Webseite-Analyse/`.~~ **Seit E11 (24.09.2026): Umsetzung freigegeben.** Quellcode darf auf dem Arbeits-Branch geändert werden, in den Wellen aus 06, jede Welle mit Build und Typecheck. Lockfile nur mit dem Paketmanager des Projekts ändern.
- **E03, E10, E11:** Commit und Push nur auf den Arbeits-Branch `claude/optimistic-sagan-h5y2i9`, niemals auf `main`. Preview-Deployments durch Pushes sind akzeptiert. **Produktions- oder Live-Deployment nur mit ausdrücklicher Zustimmung von Brandea.** Keine Schlüssel in Dateien (E13).
- **FIMI niemals anfassen (E06, ausdrücklich vom Nutzer):** Erlaubt ist nur das Lesen des lokalen Klons. Keine Änderungen, keine Dateien, keine Installation, keine Skripte, keine Commits, Pushes, Issues oder PRs. Auf der FIMI-Live-Seite nie etwas abschicken.
- Keine Produktionsdaten: keine echten Formulare, Leads, Mails, Buchungen.
- Builds und Tests nur in der freigegebenen isolierten Kopie (E04).
- Keine Geheimnisse und keine personenbezogenen Daten in Markdown.
- Fehlender Zugang heißt „NICHT PRÜFBAR“, nicht „in Ordnung“.
- Status: NICHT GEPRÜFT · BESTANDEN · BEFUND · HYPOTHESE · NICHT PRÜFBAR · NICHT ANWENDBAR. Prüfstatus und Behebungsstatus getrennt führen.
- Jeder wichtige Befund hat eine ID, Nachweise, Auswirkung, Priorität (P0–P3), Launch-Blocker ja/nein, eine konkrete Vorgabe und ein Abnahmekriterium.
- Umgesetzt wird nur, was in 06 steht oder in 07/11 entschieden ist. Tatsachen über den Kunden nur mit Eigenangabe oder Beleg (E18, E23).

## Phasenstatus

| Phase | Inhalt | Status | Ergebnis/Datei |
|---|---|---|---|
| 0 | Scope klären | **Erledigt 24.09.2026** (B03 dokumentiert offen) | `07-BRIEFING-UND-ENTSCHEIDUNGEN.md` |
| 1 | Bestand sichern: URL-Inventar, Baseline, Architektur | **Erledigt 24.09.2026** (Browser-Systemtests → Phase 2) | `02-URL-INVENTAR.md`, `08-PRUEFNACHWEISE.md` (N001–N019), `01-GLOBALE-ANALYSE.md` (Bestandsaufnahme) |
| 2 | Strategie und globale Prüfung | **Erledigt 24.09.2026** (35 Befunde, 169 Prüfpunkte, Rückfragen R1–R12) | `01-GLOBALE-ANALYSE.md`, `08` (N020–N032), `07` (Abschnitt 2a) |
| 3 | Seitenprüfung | **Erledigt 24.09.2026** (31 Berichte, 88 SEITE-Befunde, Nachweise N033–N038) | `Seiten/`, `02-URL-INVENTAR.md` (Empfehlung je URL) |
| 4 | Querprüfung | **Erledigt 24.09.2026** (K01–K13, Zielbild, Alt-neu-Mapping, widersprüchliche Aussagen, Vorlagen, Backend) | `03-SUCHINTENTION-UND-KANNIBALISIERUNG.md`, `04-WETTBEWERB-UND-MARKT.md` |
| 5 | Risiko und Priorisierung | **Erledigt 24.09.2026** (55 Maßnahmen, P0: 4; Freigabe: nicht freigabefähig) | `06-MASSNAHMEN-BACKLOG.md`, `05-DEPLOY-FREIGABE.md` |
| 6 | Gegenprüfung | **Erledigt 24.09.2026** (Querverweise, Zitatabgleich, SEO-Regeln, Prüfabdeckung) | alle, `08` (Prüfabdeckung), `02` (Vollständigkeit) |
| 7 | Abschlussbericht | **Erledigt 24.09.2026** (No-Go, fünf Fragen, Roadmap 14/30/90) | `10-ABSCHLUSSBERICHT.md` |
| 8 | Rückfragen Runde 1 | **Erledigt 24.09.2026** (58 Antworten ausgewertet, Widersprüche W01–W08, Entscheidungen E11–E26, Zielbild v2, Nachweise N041–N047, Quellen S43–S50, M56–M59) | `11-ANTWORTEN-RUNDE-1.md`, `03` (2a, 2b), `05`, `06`, `07` |
| 9 | Umsetzung Welle 0 | **Auf dem Branch umgesetzt 24.09.2026** (M01, M02, M03 als Zwischenstand, M04, M07, M08, M09 teilweise, M05 teilweise; nicht in Produktion) | Commits `6abe7c8`, `e43e262`, `0a5d5bc`, `3cd05f8`; `06` (Umsetzungsstand), `08` (N048) |
| 10 | Rückfragen Runde 2 | **Erledigt 25.09.2026** (12 Antworten, E27–E36, N049–N052; Produktions-Push blockiert) | `12-ANTWORTEN-RUNDE-2.md` |
| 11 | Umsetzung Welle 1, Teil 1 | **Auf dem Branch umgesetzt 25.09.2026** (Aussagen, Kundenstimmen, Einzugsgebiet, Winterdienst, Bilder, Karte, Impressum; nicht in Produktion) | Commit `fe75da7`, `06` (Umsetzungsstand), N052 |
| 12 | Zielbild v2 | **Auf dem Branch umgesetzt 25.09.2026** (`/leistungen` mit neun Seiten, `/premium`, 13 Weiterleitungen, Menü, Footer, Startseite, Sitemap, Tastaturbedienung des Menüs; nicht in Produktion) | Commits `bf42af2`, `2fb0508`, `06` (Umsetzungsstand), N055 |
| 13 | Namen und Nischen | **Erledigt 25.09.2026** (19 Namen geprüft, Top 5; wohlhabende Gemeinden aus der ESTV-Statistik nachgerechnet; zehn Nischen bewertet) | `13-NAMEN-UND-NISCHEN.md`, N053, N054, S51–S74 |
| 14 | Rückfragen Runde 3 | **Ausgewertet 25.09.2026** (8 von 11 beantwortet, E37–E45, M60; Seeufer und Premium-Zusagen umgesetzt; Produktions-Push erneut blockiert; Namensrunde 2 läuft) | `14-ANTWORTEN-RUNDE-3.md`, Commit `31f87eb`, N056–N058, S75–S81 |

## Protokoll

| Datum | Durchlauf | Ergebnis |
|---|---|---|
| 24.09.2026 | Setup | Prüfauftrag in 22 Arbeitsdateien zerlegt, Original in `_GOLDENER-STAND/` gesichert, Vollständigkeit geprüft (1.542/1.542 Inhaltszeilen). Nutzerentscheidungen E01–E06 protokolliert. Kontrolle FIMI-Klon: unverändert (HEAD `1143a9f`, 0 geänderte Dateien). |

| 24.09.2026 | Phase 0 | Produktion bestätigt: `bgs-gebaeudeservice.vercel.app` = `d7e1122`, keine eigene Domain. Rollen geklärt (E07): Kunde BGS Gebäudeservice GmbH, neue Seite von Brandea, bisherige Kunden-Website `bgs-service.ch` nicht Prüfziel. Vercel-MCP nur lesend (E08). Leistungs- und Regionsabweichungen dokumentiert (B03, B04, B10). |
| 24.09.2026 | Phase 1 | 32 Inhalts-URLs inventarisiert und live geprüft, Varianten und Systemdateien, interne Links, Migrationsbestand. Isolierter Build: Build/Typecheck ok, `npm ci` scheitert (Lockfile), kein Lint/Test/CI. `npm audit`: 23 Meldungen in Produktionsabhängigkeiten, Next.js mit kritischen Advisories. Runtime: KI-Chat fällt aus. Nachweise N001–N019. |

| 24.09.2026 | Phase 2 | Browser-Prüfung aller 32 Seiten (Desktop/Mobil, 7 Breiten), versteckte Inhalte, Volltext und Behauptungen, Impressum/Datenschutz, Medien, Lighthouse-Labor, axe-core/Tastatur, lokaler End-to-End-Formulartest. FIMI-Prinzipien nur lesend ausgewertet. 35 globale Befunde (P0: 4, P1: 19, P2: 11, P3: 1), 169 Prüfpunkte A–N bearbeitet, Nachweisregister, Markenrichtungen, Budgets, Datenfluss. Gebündelte Rückfragen R1–R12. |

| 24.09.2026 | Phase 3 | 31 Seitenberichte für alle 32 URLs und die fehlende Übersicht, 88 seitenspezifische Befunde (P1: 36, P2: 44, P3: 8), alle Seiten „BEFUND, nicht freigabefähig“. 13 Berichte selbst geschrieben, 18 von vier Hilfsagenten nach dem Musterbericht P03 entworfen und stichprobenartig gegen Code und HTML geprüft. Amtliches UID-Register: Kundin ist die „BGS - Gebäudeservice GmbH“ (N033), Registerdaten zu Gründung und Zweck (N037). Cookie-Messung (N034), Umbruchtest (N036), Suchergebnis-Stichprobe (N038). Nachweisregister um alle Fundstellen erweitert. Messkorrektur N023/GLOBAL-011 (alle vier Blogartikel betroffen). Namen aus Kundenstimmen durch ein Muster ersetzt. |

| 24.09.2026 | Phasen 4 und 5 | Suchintention und Querprüfung (03): Zielbild mit fünf Kernleistungen unter `/leistungen/…`, Alt-neu-Mapping aller 32 URLs und der bekannten Kunden-URLs, Konflikte K01–K13 mit Erfolgskriterien, widersprüchliche Aussagen über Seiten hinweg, Vorlagen und gemeinsame Backend-Abhängigkeiten. Backlog (06): 55 Maßnahmen in Wellen, jede der 37 globalen und 88 Seitenbefunde zugeordnet (maschinell geprüft). Deploy-Freigabe (05): G01–G14 ausgefüllt, Ergebnis nicht freigabefähig. |

| 24.09.2026 | Phasen 6 und 7 | Gegenprüfung: Alle Verweise auf Befunde, Nachweise, Quellen, Maßnahmen, Konflikte und Entscheidungen lösen auf. 3.493 Zitate maschinell gegen Code, HTML und Volltexte abgeglichen, 31 Stellen mit abweichendem Wortlaut korrigiert (u. a. „zu einem der führenden …“, „repräsentieren die Qualität …“). Keine veraltete SEO-Regel in den Empfehlungen. Prüfabdeckung in 08 und Vollständigkeit in 02 ausgewiesen. Abschlussbericht mit No-Go, den fünf Fragen und der Roadmap 14/30/90 (10). |
| 24.09.2026 | Rückfragen Runde 1 | Fragebogen als Artifact erstellt, 58 Antworten eingegangen (N041) und ausgewertet (11). Geprüft: Kontaktdaten der Kunden-Website und local.ch (N042, N046), `swiss-reinigung.ch` gehört Dritten (N043), Resend nur mit `brandea.de` (N044), Chat-Modelle FIMI/BGS (N045), Bewertungsauszüge unbestätigt (N047). Recht und Signale recherchiert (S43–S50). Zielbild v2, Backlog, Freigabematrix und Entscheidungen angepasst. Umsetzung freigegeben (E11) |
| 24.09.2026 | Welle 0 | `noindex` per Umgebungsvariable, Schlüssel-Platzhalter, Next.js 15.5.26 und Bildoptimierer ohne fremde Hosts, ein Lockfile, Formular mit echtem Erfolg und Missbrauchsschutz, Chat per Schalter aus bis zur Reparatur, ehrlicher Berater-Zustand, tote Adresse entfernt. Alles in der isolierten Kopie getestet (N048). Rückfragen Runde 2 als Fragebogen bereitgestellt |
| 25.09.2026 | Runde 2 und Welle 1 | Antworten ausgewertet (12). Push nach `main` von der Rechteprüfung blockiert, nicht umgangen (N051). Welle 1, Teil 1 umgesetzt und getestet (N052). Namens- und Nischenrecherche gestartet |
| 25.09.2026 | Zielbild v2, Namen und Nischen | Neun Leistungsseiten nach `/leistungen/…`, Übersichten `/leistungen` und `/premium`, 13 Weiterleitungen 308, Menü, Footer, Startseite und Sitemap umgestellt, getestet (N055). Befund beim Test: Leistungsmenü nur per Maus bedienbar, behoben (`2fb0508`). Namens- und Marktrecherche ausgewertet und nachgeprüft (13, N053, N054). Korrektur: 691 statt „mindestens 561“ Steuerpflichtige über CHF 1 Mio. |
| 25.09.2026 | Runde 3 | Fragebogen Runde 3 veröffentlicht, Antworten ausgewertet (14). Seeufer und Premium-Zusagen umgesetzt und getestet (`31f87eb`, N055, N058). Zweiter Push nach `main` blockiert (N057), Freigabe liegt bei Brandea. Namensrunde 2 mit Fable gestartet. Mehrsprachigkeit geplant (M60) |

## Abweichungen und Vorfälle

| Datum | Was | Auswirkung | Behandlung |
|---|---|---|---|
| 24.09.2026 | **Jeder der sechs Pushes auf den Arbeits-Branch hat automatisch ein Vercel-Preview-Deployment ausgelöst** (N035). Regel 3 verbietet Deployments, E03 erlaubt nur Commit und Push. | Produktion unverändert (`d7e1122`). Die Previews sind per Vercel Authentication geschützt, enthalten nur zusätzliches Markdown, nutzen aber die gemeinsamen Umgebungsvariablen. Build-Minuten verbraucht. | Nach der Entdeckung nur lokal committet und den Nutzer gefragt. **Entscheidung E10 (24.09.2026): Pushes mit Previews sind in Ordnung.** Keine Previews gelöscht, weil nur lesender Zugriff erlaubt ist (E08). |
| 24.09.2026 | Drei Hilfsagenten haben entgegen der Vorgabe je einen lesenden git-Befehl ausgeführt (`git log -1` bzw. `git status`). | Keine inhaltliche Änderung. `git status` kann höchstens den Index-Zeitstempel auffrischen. | Dokumentiert. Die Ergebnisse der Agenten wurden geprüft: Nur die vorgesehenen Berichtsdateien wurden geschrieben, FIMI blieb unberührt. |
| 24.09.2026 | Messartefakt in N023 bei zwei Seiten (Reiterwechsel nicht ausgelöst). | Zahlen zu verborgenen Inhalten zu niedrig, eine Seite fälschlich als unbetroffen geführt. | Per Code-Abgleich korrigiert (N023, GLOBAL-011). |

## Offene Punkte

- **Runde 2 ist ausgewertet (12).** Offen daraus: Name und Marke (W03, Vorschläge in 13) und die Freigabe für Produktion (E27).
- **Runde 3 ist ausgewertet (14).** Offen daraus: Namenswahl nach Namensrunde 2 (W03), Produktion (E39), Partner (PARTNER), Terminal-Auftrag bewusst zurückgestellt (E45).
- **Runde 4 (vorgemerkt):** Namenswahl, Prüfung der Übersetzungen (M60), Adressen je Sprache, Partner.
- **Nur Brandea:** Repository auf privat stellen (R1), Vercel-Variablen als „sensitive“ markieren (M06).
- *Die folgenden Punkte stammen aus der Analyse und sind durch Runde 1 weitgehend beantwortet (11).*

- **B03/R3, Leistungsumfang:** Die Vorgabe nennt fünf, die neue Seite hat 18, die bisherige Kunden-Website nennt 2 Bereiche mit 7 Unterleistungen. Alle 18 Seiten sind geprüft. Die fünf Leistungsdateien sind vorläufig zugeordnet (E09). Für die übrigen 13 gilt bis zur Antwort Pfad (b) der Berichte (308 auf eine bestätigte Leistung oder 410, siehe 02).
- **E10, Push und Preview-Deployments:** entschieden, Pushes auf den Arbeits-Branch sind erlaubt.
- **R1–R12 (gebündelte Rückfragen, 07 Abschnitt 2a):** Geschäftsfragen, die sich nicht aus dem Repository beantworten lassen. R7 ist durch das UID-Register teilweise beantwortet (N033). Zu R2, R5 und R6 gibt es Hinweise aus Registern und Verzeichnissen (N037, N038).
- **B08:** Soll die neue Seite später unter `bgs-service.ch` laufen und die bisherige ersetzen? Davon hängen der Migrationsbestand und die Indexierungsstrategie für `*.vercel.app` ab.

## Die wichtigsten Befunde nach Phase 2 (Details in 01)

**P0, sofortige Risikoentscheidung:**
1. **GLOBAL-035:** Mögliche API-Schlüssel in öffentlich einsehbaren Projektdokumenten (`DEPLOYMENT.md`, `EMAIL_SETUP.md`), bitte sofort prüfen (R1).
2. **GLOBAL-001:** Next.js 15.1.11 mit bekannten kritischen und hohen Sicherheitsmeldungen, ein Fix ohne Major-Sprung ist verfügbar.
3. **GLOBAL-002:** Der KI-Chat (auch „Termin vereinbaren“) fällt in Produktion aus, der Fehler ist unsichtbar (HTTP 200).
4. **GLOBAL-003:** Das Formular meldet Erfolg ohne Zustellnachweis, der stille Verlust ist in der Testumgebung end-to-end belegt. Die Absenderdomain ist nicht eingerichtet, Anfragen gehen an die Agentur.

**Vertrauen und Identität (P1, Launch-Blocker):** Die Seite tritt als „Swiss Reinigungsfirma“ auf, „BGS“ kommt im Text nicht vor. Eine E-Mail-Adresse liegt auf einer geparkten Domain ohne MX. Die ISO-Angabe wird durch das eigene Impressum widerlegt. Kundenstimmen sind vermutlich erfunden. KI-Bilder erscheinen als Team, Referenz und Vorher/Nachher (GLOBAL-020 bis -023).

**SEO-Grundlage (P1):** 32 identische Titel und Beschreibungen, kein Canonical, keine strukturierten Daten, FAQ-/Reiter-Inhalte nicht im HTML, unsichtbarer Hero, Hydration-Fehler auf allen Seiten (GLOBAL-009 bis -013).

## Die wichtigsten Ergebnisse aus Phase 3

- **Registerdaten statt Werbetext:** Die Kundin heißt amtlich „BGS - Gebäudeservice GmbH“ (N033). Laut Registerdaten hat sie den Zweck Gebäudereinigung und -unterhalt erst seit 2012 (N037). „Gründung 2005“, „15+ Jahre“ und „Erfahrung seit 2008“ sind damit nicht belegt.
- **Leistungsangebot:** 13 der 18 Leistungsseiten haben keine direkte Entsprechung in der Eigenangabe des Kunden. Manche lassen sich als Teil einer Kernleistung deuten, etwa Büro- oder Fensterreinigung, Facility Management als „Facility-Services“. Einige sind in sich widersprüchlich: Versicherungssumme 5 bzw. 10 Mio. CHF, Öko-Mittel „immer“ bzw. „auf Wunsch“, ISO „zertifiziert“, „erreicht“ bzw. „in Bearbeitung“.
- **Preise ohne Grundlage** auf vier Seiten, eine davon als verbindlich formuliert („berechnen wir“).
- **Die Kernleistungen des Kunden** (Unterhaltsreinigung, Hauswartung, Winterdienst, Aussenanlagen, Sonderreinigungen) sind die dünnsten Seiten. Den Begriff „Hauswartung“ nennt keine davon.
- **Datenschutz:** Die Website setzt ohne Einwilligung keine Cookies, lädt auf `/kontakt` aber Google-Dienste. Die Erklärung beschreibt eine andere Verarbeitung als die tatsächliche.

## Nächste Aufgabe

**Welle 0, Welle 1 (Teil 1), Zielbild v2 und die Premium-Inhalte aus Runde 3 sind auf dem Arbeits-Branch umgesetzt. In Produktion ist noch nichts (N051, N057).**

1. **Produktion:** Brandea stellt die Freigabe ein oder spielt den Stand selbst ein (14, Abschnitt 3).
2. **Namensrunde 2** abschliessen: Ping-Pong Fable und Opus, Prüfung, Schlussrunde, Ergebnis mit Bedeutungen in 13, Abschnitt 8. Danach Wahl durch Brandea (E37, E38).
3. **Welle 1, Teil 2:**
   - Metadaten je Seite (M16): 21 Seiten tragen noch den Standard-Titel
   - Texte der Kern- und Premiumseiten (M29), gleich in einer übersetzbaren Inhaltsschicht für M60
   - Favicon und Logo nach dem Namensentscheid (M35)
   - Ratgeber (M53)
   - Breadcrumbs (M20)
4. **Mehrsprachigkeit (M60)** nach M56 und M29.
5. **Belege** für die zurückgestellten Premium-Zusagen (M59).

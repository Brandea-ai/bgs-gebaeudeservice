# Fortschritt, offene Punkte und nächste Aufgabe

**Prüfziel:** BGS Gebäudeservice (`Brandea-ai/bgs-gebaeudeservice`, geprüfter Stand `main` @ `d7e1122`)
**Referenz:** FIMI-Gebäudereinigung (`Brandea-ai/FIMI-Gebaeudereinigung` @ `1143a9f`), nur lesend, nur Inspiration
**Letzte Aktualisierung:** 24.09.2026

## Goldener Stand

`_GOLDENER-STAND/Webseite-Analyse-Gesamt.md` ist das unveränderte Original des Prüfauftrags vom 24.09.2026 (SHA-256 beginnt mit `926ccd59f07b6010`). **Diese Datei wird nie bearbeitet.** Sie ist die verbindliche Regel für die gesamte Arbeit.

Die übrigen Dateien in diesem Ordner sind wortgleich aus dem Original abgeleitet: 22 Dokumente, 1.542 von 1.542 Inhaltszeilen, Vollständigkeit geprüft. Sie sind die Arbeitsdateien und werden Schritt für Schritt ausgefüllt und abgehakt. Weichen Arbeitsdatei und Original voneinander ab, gilt das Original, soweit keine dokumentierte Nutzerentscheidung in `07-BRIEFING-UND-ENTSCHEIDUNGEN.md` etwas anderes festlegt.

**Einstieg für jede neue Sitzung:** 1. diese Datei, 2. `00-START-HIER.md` (Auftrag und Regeln), 3. `07-BRIEFING-UND-ENTSCHEIDUNGEN.md` (Entscheidungen). Nicht auf Erinnerung vertrauen.

## Arbeitsregeln in Kürze

Maßgeblich ist `00-START-HIER.md`, Abschnitte 2 bis 7. Kurzfassung:

- Nur Markdown in `Webseite-Analyse/`. Kein Quellcode, keine Konfiguration, keine Lockfiles, keine Medien ändern.
- **Ausnahme E03:** Commit und Push dieser Markdown-Dateien auf den Arbeits-Branch sind erlaubt, niemals auf `main`, kein Deployment auslösen.
- **FIMI niemals anfassen (E06, ausdrücklich vom Nutzer):** Erlaubt ist nur das Lesen des lokalen Klons. Keine Änderungen, keine Dateien, keine Installation, keine Skripte, keine Commits, Pushes, Issues oder PRs. Auf der FIMI-Live-Seite nie etwas abschicken.
- Keine Produktionsdaten: keine echten Formulare, Leads, Mails, Buchungen.
- Builds und Tests nur in der freigegebenen isolierten Kopie (E04).
- Keine Geheimnisse und keine personenbezogenen Daten in Markdown.
- Fehlender Zugang heißt „NICHT PRÜFBAR“, nicht „in Ordnung“.
- Status: NICHT GEPRÜFT · BESTANDEN · BEFUND · HYPOTHESE · NICHT PRÜFBAR · NICHT ANWENDBAR. Prüfstatus und Behebungsstatus getrennt führen.
- Jeder wichtige Befund hat eine ID, Nachweise, Auswirkung, Priorität (P0–P3), Launch-Blocker ja/nein, eine konkrete Vorgabe und ein Abnahmekriterium.
- Nichts umsetzen. Eine Empfehlung ist keine Freigabe zur Umsetzung.

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

## Abweichungen und Vorfälle

| Datum | Was | Auswirkung | Behandlung |
|---|---|---|---|
| 24.09.2026 | **Jeder der sechs Pushes auf den Arbeits-Branch hat automatisch ein Vercel-Preview-Deployment ausgelöst** (N035). Regel 3 verbietet Deployments, E03 erlaubt nur Commit und Push. | Produktion unverändert (`d7e1122`). Die Previews sind per Vercel Authentication geschützt, enthalten nur zusätzliches Markdown, nutzen aber die gemeinsamen Umgebungsvariablen. Build-Minuten verbraucht. | Nach der Entdeckung nur lokal committet und den Nutzer gefragt. **Entscheidung E10 (24.09.2026): Pushes mit Previews sind in Ordnung.** Keine Previews gelöscht, weil nur lesender Zugriff erlaubt ist (E08). |
| 24.09.2026 | Drei Hilfsagenten haben entgegen der Vorgabe je einen lesenden git-Befehl ausgeführt (`git log -1` bzw. `git status`). | Keine inhaltliche Änderung. `git status` kann höchstens den Index-Zeitstempel auffrischen. | Dokumentiert. Die Ergebnisse der Agenten wurden geprüft: Nur die vorgesehenen Berichtsdateien wurden geschrieben, FIMI blieb unberührt. |
| 24.09.2026 | Messartefakt in N023 bei zwei Seiten (Reiterwechsel nicht ausgelöst). | Zahlen zu verborgenen Inhalten zu niedrig, eine Seite fälschlich als unbetroffen geführt. | Per Code-Abgleich korrigiert (N023, GLOBAL-011). |

## Offene Punkte

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

**Die Analyse nach dem goldenen Stand ist abgeschlossen (Phasen 0–7).** Es wird nichts umgesetzt, bis die Umsetzung eigens freigegeben ist (E05).

Offen beim Nutzer bzw. Kunden:
1. **R1 (sofort):** Enthalten `DEPLOYMENT.md` und `EMAIL_SETUP.md` gültige Schlüssel?
2. **R2–R12:** Kundentermin (07, Abschnitt 2a).
3. **Freigabe der Umsetzung:** Danach Welle 0 aus 06 (M01–M09).

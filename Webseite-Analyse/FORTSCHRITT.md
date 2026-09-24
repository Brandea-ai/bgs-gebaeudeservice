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
| 2 | Strategie und globale Prüfung | Offen | `01-GLOBALE-ANALYSE.md` |
| 3 | Seitenprüfung | Offen | `Seiten/` |
| 4 | Querprüfung | Offen | `03-SUCHINTENTION-UND-KANNIBALISIERUNG.md` u. a. |
| 5 | Risiko und Priorisierung | Offen | `06-MASSNAHMEN-BACKLOG.md`, `05-DEPLOY-FREIGABE.md` |
| 6 | Gegenprüfung | Offen | alle |
| 7 | Abschlussbericht | Offen | Abschlussbericht |

## Protokoll

| Datum | Durchlauf | Ergebnis |
|---|---|---|
| 24.09.2026 | Setup | Prüfauftrag in 22 Arbeitsdateien zerlegt, Original in `_GOLDENER-STAND/` gesichert, Vollständigkeit geprüft (1.542/1.542 Inhaltszeilen). Nutzerentscheidungen E01–E06 protokolliert. Kontrolle FIMI-Klon: unverändert (HEAD `1143a9f`, 0 geänderte Dateien). |

| 24.09.2026 | Phase 0 | Produktion bestätigt: `bgs-gebaeudeservice.vercel.app` = `d7e1122`, keine eigene Domain. Rollen geklärt (E07): Kunde BGS Gebäudeservice GmbH, neue Seite von Brandea, bisherige Kunden-Website `bgs-service.ch` nicht Prüfziel. Vercel-MCP nur lesend (E08). Leistungs- und Regionsabweichungen dokumentiert (B03, B04, B10). |
| 24.09.2026 | Phase 1 | 32 Inhalts-URLs inventarisiert und live geprüft, Varianten und Systemdateien, interne Links, Migrationsbestand. Isolierter Build: Build/Typecheck ok, `npm ci` scheitert (Lockfile), kein Lint/Test/CI. `npm audit`: 23 Meldungen in Produktionsabhängigkeiten, Next.js mit kritischen Advisories. Runtime: KI-Chat fällt aus. Nachweise N001–N019. |

## Offene Punkte

- **B03, Leistungsumfang:** Die Vorgabe nennt fünf, die neue Seite hat 18, die bisherige Kunden-Website nennt 2 Bereiche mit 7 Unterleistungen. Bis zur Antwort werden alle 18 vorhandenen Seiten geprüft. Die fünf Leistungsdateien werden erst nach der Klärung umbenannt.
- **B04–B10, B13, B14:** Geschäftsfragen, die sich nicht aus dem Repository beantworten lassen. Sie werden gebündelt gestellt, sobald die globale Prüfung zeigt, welche Antworten wirklich fehlen.
- **B08:** Soll die neue Seite später unter `bgs-service.ch` laufen und die bisherige ersetzen? Davon hängen der Migrationsbestand und die Indexierungsstrategie für `*.vercel.app` ab.

## Auffälligste Zwischenbefunde (noch nicht priorisiert, Details in 08 und später 01/06)

1. Next.js 15.1.11 mit bekannten kritischen und hohen Sicherheitsmeldungen, ein Fix ohne Major-Sprung ist verfügbar (N006).
2. KI-Chat fällt in Produktion aus, und der Fehler bleibt dank HTTP 200 unsichtbar (N012).
3. Das Kontaktformular meldet immer Erfolg. Die Absenderdomain ist laut DNS nicht für Resend eingerichtet, Leads gehen an die Agentur statt an den Kunden (N013, N016).
4. Alle 32 Seiten haben denselben Titel und dieselbe Beschreibung, kein Canonical, keine strukturierten Daten, OG-Bild, Favicon und Touch-Icon sind 404 (N007, N008).
5. Angaben widersprechen der Eigenangabe des Kunden: Telefonnummer, Arbeitsgebiet (Zürich, „Schweizweit“), Leistungsumfang. Zudem eine E-Mail-Adresse auf einer geparkten Domain ohne MX (N009, N013, N014).
6. 7 defekte Links auf der Zürich-Seite (N009).

## Nächste Aufgabe

Phase 2: globale Prüfung A–N. Reihenfolge: zuerst K (Backend/Sicherheit) und F/G (Crawling/Metadaten) mit formalen Befunden, danach Browser-Tests (Rendering, Formular im lokalen Build, Consent, Tastatur, Breiten-Matrix), Performance-Labormessung, Medieninventar, Content/Vertrauen, Positionierung.

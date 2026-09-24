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
| 0 | Scope klären | In Arbeit | `07-BRIEFING-UND-ENTSCHEIDUNGEN.md` |
| 1 | Bestand sichern: URL-Inventar, Baseline, Architektur | Offen | `02-URL-INVENTAR.md`, `08-PRUEFNACHWEISE.md` |
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

## Offene Punkte

- **B03, Leistungsumfang:** Die Vorgabe nennt genau fünf Leistungen, BGS hat laut Code 18 Leistungsseiten. Das wird in Phase 0 dokumentiert und als gebündelte Rückfrage vorgelegt. Bis dahin werden alle tatsächlich vorhandenen Seiten geprüft.
- **B04–B10, B13, B14:** Geschäftsfragen, die sich nicht aus dem Repository beantworten lassen. Sie werden nach Phase 1 gebündelt gestellt.

## Nächste Aufgabe

Phase 0 abschließen: Produktionsdomain über Vercel (nur lesend) und HTTP bestätigen, tatsächliche Leistungsseiten und Regionen aus dem Code erfassen, Prüfberechtigungen festhalten.

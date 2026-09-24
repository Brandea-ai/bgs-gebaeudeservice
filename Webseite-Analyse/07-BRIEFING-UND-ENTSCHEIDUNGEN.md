# Gebündelte Rückfragen und Entscheidungen

**Status: in Bearbeitung (Stand 24.09.2026).** B01, B02 und B12 sind durch den Nutzer entschieden, B11 ist teilweise beantwortet. Alle übrigen Fragen sind offen. Dies ist bewusst nur Markdown, kein HTML-Artefakt und keine Website-Änderung.

## 1. Zuerst aus freigegebenen Quellen beantworten

Der Agent soll bestätigte Angaben aus dem Ziel-Repository und der richtigen Website lesen. Nicht jede bereits vorhandene Information erneut abfragen. Unklare oder strategische Entscheidungen gesammelt vorlegen; parallel alle davon unabhängigen Prüfungen fortsetzen.

## 2. Einmaliges Kernbriefing

| ID | Frage | Antwort | Herkunft/Status |
|---|---|---|---|
| B01 | Welche konkrete Ziel-URL und welches Ziel-Repository werden analysiert? | **BGS Gebäudeservice.** Repository `Brandea-ai/bgs-gebaeudeservice`, geprüfter Stand `main` @ `d7e1122` (20.12.2025). **Produktions-URL bestätigt:** `https://bgs-gebaeudeservice.vercel.app`, Vercel-Projekt `bgs-gebaeudeservice`, Produktions-Deployment vom 20.12.2025 aus `d7e1122` (N002, N003). Eine eigene Domain ist nicht verbunden. Es ist die **neue Website, die Brandea für den Kunden BGS Gebäudeservice GmbH baut**. Die bisherige Website des Kunden (`www.bgs-service.ch`, Wix) gehört dem Kunden und ist nicht Teil dieses Projekts (E07). | Nutzerentscheidung 24.09.2026 (E01, E07). Phase 0 bestätigt |
| B02 | Welche Referenz ist gemeint: FIMI-Hub, FIMI-Gebäudereinigung oder beide? Welche Bereiche dürfen gelesen werden? | **FIMI-Gebäudereinigung** (`Brandea-ai/FIMI-Gebaeudereinigung`, Stand `1143a9f`), vollständig nur lesend, ausschließlich als Inspiration: keine Installation, keine Skripte, keine Dateien dort. FIMI-Hub ist nicht einbezogen. | Nutzer: „dich von FIMI inspirieren lassen“ (E02). Ausschluss FIMI-Hub = Annahme, vom Nutzer korrigierbar |
| B03 | Wie heißen die fünf tatsächlich angebotenen Leistungen? | **Teilweise, Widerspruch offen.** Das Zielprojekt hat **18 Leistungsseiten** (4 Premium, 9 Business, 5 Basis, siehe 02-URL-INVENTAR). Die bisherige Website des Kunden nennt **2 Bereiche mit 7 Unterleistungen**: Gebäudereinigung (Unterhaltsreinigung; Aussen- und Facility-Services; Spezial- und Sonderreinigungen) und Hauswartung (Hausmeisterservice; Infrastrukturelle Pflege; Winterdienst; Aussen- und Grünflächenpflege) (N014). Die Vorgabe spricht von genau fünf. Welche Leistungen real angeboten werden, muss der Kunde bestätigen. | Aus Zielprojekt übernommen, gegen die Eigenangabe des Kunden verglichen. Rückfrage gebündelt |
| B04 | Wer kauft welche Leistung, in welcher Situation und für welche Region? | **Region teilweise:** Die bisherige Kunden-Website nennt als Arbeitsgebiet Kanton Luzern und Kanton Zug (N014). Die neue Seite behauptet zusätzlich Zürich (eigene Standortseite, Karten-Marker „Standort Zürich“, Startseite „Schweizweit“). Käufer und Kaufsituation sind offen. | Region: Eigenangabe des Kunden. Zürich/„Schweizweit“ = unbelegt. Rest offen |
| B05 | Was gilt wirtschaftlich als gute Anfrage, und welche Anfragen sind unpassend? | Offen | Geschäftsentscheidung |
| B06 | Welche belegbaren Gründe sprechen für dieses Unternehmen statt eines etablierten Wettbewerbers? | Offen | Unbequeme Kernfrage |
| B07 | Welche realen Referenzen, Teamfotos, Zertifikate und Ergebnisse dürfen veröffentlicht werden? | Offen | Nachweise/Freigaben |
| B08 | Welche bestehenden URLs und Inhalte erzielen bereits Anfragen oder Sichtbarkeit? | Offen | Messdaten/Vertrieb |
| B09 | Welche Markenbestandteile sind fix, welche nur zur späteren Diskussion offen? | Offen | Noch keine Neugestaltung |
| B10 | Welche Kontaktwege und Antwortzeiten kann das Team tatsächlich zuverlässig bedienen? | **Widersprüche belegt, Antwort offen.** Telefon auf der neuen Seite `+41 41 320 56 10`, auf der bisherigen Kunden-Website eine Mobilnummer (+41 79 …). E-Mail-Adressen auf der neuen Seite: `info@bgs-service.ch` (Kontakt, Impressum), `info@swiss-reinigung.ch` (3 Standortseiten, Domain ohne MX, Parking-Seite). Formular- und Chat-Leads gehen an `info@brandea.de`, also an die Agentur, nicht an den Kunden (N009, N013, N014, N016). | Operativer Nachweis offen |
| B11 | Gibt es lesenden Zugang zu Search Console, Vercel/CI und anonymisierten Lead-Kennzahlen? | **Vercel:** Der Connector ist in der Arbeitssitzung vorhanden und wird ausschließlich lesend genutzt. **Search Console:** kein Zugang. **Lead-Kennzahlen/CRM:** kein Zugang. **CI:** Kein Workflow vorhanden (`.github/` fehlt, N005). Einzige automatische Prüfung ist der Vercel-Build. **Vercel-Runtime-Logs:** 7 Tage lesbar (N012). | Stand 24.09.2026; Search Console und Lead-Daten weiterhin offen |
| B12 | Welche isolierte Testumgebung ist für Build und Formularprüfung ausdrücklich freigegeben? | **Die Claude-Code-Cloud-Umgebung dieser Arbeitssitzung.** Isolierter Container ohne gesetzte Produktionsschlüssel (`RESEND_API_KEY` und `GEMINI_API_KEY` sind nicht gesetzt). Builds und Tests laufen nur in einer separaten Kopie des geprüften Commits, nicht im Arbeitsverzeichnis mit den Analyse-Dateien. Auf der Live-Seite werden keine Formulare abgeschickt. | Nutzerfreigabe 24.09.2026 (E04) |
| B13 | Ist das Angebot rein B2B oder auch für Verbraucher? Welche rechtlichen Besonderheiten bestehen? | Offen | Fachprüfung benötigt |
| B14 | Wer entscheidet über Positionierung, Markenrichtung, Rechtliches und spätere Launch-Freigabe? | Offen | Verantwortlichkeiten |

## 3. Optionaler JSON-Antwortblock

Dieser Block ist nur ein austauschbares Briefingformat, kein Programmcode. Leere Werte bleiben unbekannt. Keine Passwörter, Tokens, personenbezogenen Kundendaten oder vertraulichen Nachweise hineinkopieren.

```json
{
  "ziel_url": "https://bgs-gebaeudeservice.vercel.app (Produktionsdomain in Phase 0 zu bestätigen)",
  "ziel_repository": "Brandea-ai/bgs-gebaeudeservice",
  "referenzen_nur_lesen": ["Brandea-ai/FIMI-Gebaeudereinigung"],
  "leistungen": [null, null, null, null, null],
  "zielgruppen": [],
  "zielregionen": [],
  "qualifizierte_anfrage_definition": null,
  "belegbare_differenzierung": [],
  "freigegebene_referenzen": [],
  "markenvorgaben": null,
  "bestehende_erfolgreiche_urls": [],
  "kontaktprozess": null,
  "lesende_datenzugaenge_vorhanden": ["Vercel-Connector (nur lesend)"],
  "freigegebene_testumgebung": "Claude-Code-Cloud-Umgebung dieser Arbeitssitzung, separate Kopie, ohne Produktionsschlüssel",
  "b2b_b2c_einordnung": null,
  "freigabeverantwortliche_rolle": null,
  "modus": "nur_analyse_keine_codeaenderungen"
}
```

## 4. Ping-Pong-Verfahren

1. Offene Fragen bündeln und begründen, welche Entscheidung davon abhängt.
2. Antworten als Fakten, Präferenzen oder Hypothesen einsortieren.
3. Widersprüche ausdrücklich klären; keine stillschweigende Auswahl treffen.
4. Für Marken- oder Strukturentscheidungen begründete Alternativen mit Vor-/Nachteilen dokumentieren.
5. Nur den Analyseentwurf aktualisieren. Eine beantwortete Frage ist noch keine Umsetzungserlaubnis.

## Entscheidungsprotokoll

| ID | Datum | Entscheidung | Begründung | Betroffene Seiten | Freigabe | Noch offene Folgefrage |
|---|---|---|---|---|---|---|
| E01 | 24.09.2026 | Prüfziel ist **BGS Gebäudeservice** (`Brandea-ai/bgs-gebaeudeservice`). | Nutzerantwort auf B01. Nutzer: „bgs ist die seite die umgebaut gehört“. | Alle | Nutzer | B03: Die Vorgabe nennt genau fünf Leistungen, BGS hat 18 Leistungsseiten (siehe Phase 0). |
| E02 | 24.09.2026 | Referenz ist **FIMI-Gebäudereinigung**, nur lesend, ausschließlich als Inspiration auf Prinzipebene. Keine Texte, Logos, Referenzen, Daten oder Assets übernehmen. | Nutzer: „es geht darum, dass du dich von FIMI inspirieren lässt“. Vorgabe A4 und Abschnitt 8. | Global, Design | Nutzer | FIMI-Hub einbeziehen? Annahme: nein. |
| E03 | 24.09.2026 | **Ausnahme von Regel 3:** Commit und Push sind erlaubt, und zwar ausschließlich für die Markdown-Dateien in `Webseite-Analyse/` auf den Arbeits-Branch `claude/optimistic-sagan-h5y2i9`, nie auf `main`. Quellcode, Konfiguration, Lockfiles und Medien bleiben unverändert. | Nutzer: „doch du darfst commit und pushen“. Ohne Commit ginge der Stand beim Ende der Cloud-Sitzung verloren. | — | Nutzer | Hinweis: Ein Push kann bei Vercel einen Preview-Build des Branches auslösen, die Produktion bleibt unberührt. |
| E04 | 24.09.2026 | Die **isolierte Testumgebung** ist diese Cloud-Umgebung. Build, Typecheck, Lint und lokale Render-/Formularprüfung laufen nur in einer separaten Kopie von `d7e1122`. Auf der Live-Seite werden keine Formulare abgeschickt. | Nutzerfreigabe auf B12. | Alle | Nutzer | — |
| E05 | 24.09.2026 | Ziel des Gesamtvorhabens ist ein späterer **Umbau von BGS**. Dieser Auftrag bleibt nach dem goldenen Stand eine Analyse, die Phasen 0–7 werden der Reihe nach abgearbeitet. Die Umsetzung braucht nach dem Abschlussbericht eine eigene Freigabe. | Nutzeraussage zu E01. Vorgabe: „Eine Empfehlung ist keine Freigabe zur Umsetzung.“ | Alle | Nutzer | Umsetzungsfreigabe nach Phase 7 |
| E06 | 24.09.2026 | **FIMI wird in keiner Form verändert.** Erlaubt ist nur das Lesen des lokalen Klons (Code, Struktur, Gestaltungsprinzipien). Dort gibt es keine Änderungen, keine Dateien, keine Installation, keine Skripte, keine Commits oder Pushes, keine Issues oder PRs. Die FIMI-Live-Seite wird höchstens wie von einem normalen Besucher angesehen, Formulare, Chat und Rechner werden dort nie abgeschickt. Kontrollierter Zustand: lokaler Klon sauber, HEAD `1143a9f`, 0 geänderte Dateien. | Nutzer: „ganz wichtig du darfst nicht ich wiederhole nicht fimi websiete anfassen“. Deckt sich mit Regel 4. | — | Nutzer | — |
| E07 | 24.09.2026 | **Rollen:** BGS Gebäudeservice GmbH ist der **Kunde**. `www.bgs-service.ch` ist die **bisherige Website des Kunden** (Wix). Sie gehört nicht zu Brandea und ist nicht Prüfziel. Brandea baut dem Kunden eine **neue Website**, das Vercel-Projekt `bgs-gebaeudeservice`. Die bisherige Kunden-Website wird nicht weiter abgerufen. Die einmal gelesenen öffentlichen Angaben der Startseite dienen nur als Eigenangabe des Kunden, um Aussagen der neuen Seite zu prüfen (N014). | Nutzer: „bgs-service.ch das gehört nicht zu uns das ist der kunde selber ich baue für den kunde eine neue seite“ | Alle | Nutzer | B08: Soll die neue Seite später unter `bgs-service.ch` die bisherige ersetzen? Dann gilt der Migrationsbestand in 02 |
| E08 | 24.09.2026 | **Vercel-MCP nur lesend nutzen:** Projekt, Domains, Deployments, Build-Logs, Runtime-Logs und Fehlergruppen sowie die Namen der Umgebungsvariablen, nie Werte. Keine Schreibaktionen (kein Deploy, kein Redeploy, kein Rollback, keine Einstellungsänderung). | Nutzer: „warum nutzt du nicht die mcp von vercel“. Vorgabe B11 und Regel 5. | Alle | Nutzer | — |

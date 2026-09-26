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

## 2a. Gebündelte Rückfragen nach Phase 2 (Stand 24.09.2026)

**Beantwortet am 24.09.2026 per Fragebogen (N041). Auswertung je Frage, Widersprüche W01–W08 und offene Fragen für Runde 2 in 11-ANTWORTEN-RUNDE-1.md.** Nach dem Ping-Pong-Verfahren (Abschnitt 4) gebündelt, mit der Entscheidung, die jeweils davon abhängt. Die Analyse läuft ohne diese Antworten weiter, die betroffenen Punkte bleiben so lange als offen oder HYPOTHESE markiert. **Sofort** bedeutet: öffentlich sichtbares Risiko, unabhängig vom Umbau.

| Nr. | Frage an | Frage | Hängt davon ab | Dringlichkeit |
|---|---|---|---|---|
| R1 | Brandea | Enthalten `DEPLOYMENT.md` und `EMAIL_SETUP.md` echte, gültige API-Schlüssel? Das Repository ist öffentlich. Bitte selbst prüfen, der Inhalt wurde hier bewusst nicht eingesehen. | GLOBAL-035 | **Sofort** |
| R2 | Kunde | **Markenname:** Soll die neue Seite als „BGS Gebäudeservice“ auftreten? Woher kommt „Swiss Reinigungsfirma“/„SWISS REINIGUNG“, und gehört `swiss-reinigung.ch` dem Kunden? *Hinweis Phase 3: „Swiss Reinigungsfirma“ ist kein eigener Markenname, es gibt aber mehrere ähnlich benannte „Swiss…“-Reinigungsfirmen (N038). Verzeichnisse und Register führen „BGS - Gebäudeservice GmbH“ (N033, N038).* | B09, GLOBAL-020, -014, -032 | Hoch |
| R3 | Kunde | **Leistungen (B03).** Vorschlag aus der Eigenangabe des Kunden, bitte bestätigen oder korrigieren. Die fünf Leistungen könnten sein: 1) regelmässige Unterhaltsreinigung, 2) Spezial- und Sonderreinigungen, 3) Hauswartung/Hausmeisterservice inkl. infrastruktureller Pflege, 4) Winterdienst, 5) Aussen- und Grünflächenpflege bzw. Facility-Services. Werden Privatjet, Yacht, Luxusimmobilien, Housekeeping, Industrie-, Maschinen-, Hallen-, Fassaden-, Fenster-, Bau-Reinigung und Beschaffung tatsächlich angeboten? | B03, alle Leistungsseiten, GLOBAL-021, -030, -033 | Hoch |
| R4 | Kunde | **Region (B04):** Nur Kantone Luzern und Zug oder auch Zürich bzw. „schweizweit“? Gibt es Niederlassungen oder nur einen Sitz (Emmenbrücke)? | B04, Standortseiten, GLOBAL-021 | Hoch |
| R5 | Kunde | **Kontaktdaten (B10):** Richtige Telefonnummer, E-Mail und Adresse? An wen sollen Anfragen gehen, den Kunden oder die Agentur? Welche Antwortzeit ist realistisch? Gibt es 24/7-Bereitschaft? *Hinweis Phase 3: Verzeichnisse führen die Festnetznummer 041 320 56 10 und eine Mobilnummer, teils auch eine E-Mail-Adresse auf einer weiteren Domain (Suchergebnis-Auszug, nicht geprüft, N038).* | GLOBAL-003, -020, -028 | Hoch |
| R6 | Kunde | **Belege (B07):** Stimmen die Kundenstimmen und Referenzen? Gibt es Freigaben, echte Team- und Objektfotos, Zertifikate (ISO?), Gründungsjahr, Kundenzahl? *Hinweis Phase 3: Laut Registerdaten ist die GmbH seit 1997 eingetragen, hat den Zweck Gebäudereinigung und -unterhalt aber erst seit 20.11.2012 (N037). Wie begründen sich „Gründung 2005“ und „15+ Jahre“, etwa durch eine frühere Einzelfirma?* | GLOBAL-021, -022, -023 | Hoch (öffentlich sichtbar) |
| R7 | Kunde/Brandea | **Rechtliches (B13):** ~~Rechtsträger und Rechtsform, UID~~ **teilweise beantwortet durch das amtliche UID-Register (N033):** „BGS - Gebäudeservice GmbH“, GmbH, Tannhof 10, 6020 Emmenbrücke, aktiv. Offen: Soll die Website den registrierten Namen mit Bindestrich verwenden? Wer ist vertretungsberechtigt (Zefix nicht abrufbar)? Reines B2B oder auch Privatkunden, Zielmärkte (nur Schweiz?). Wer erstellt bzw. prüft Impressum und Datenschutz fachlich? | GLOBAL-027, -020, SEITE-P11-001 | Hoch |
| R8 | Brandea/Kunde | **KI-Funktionen und Karte (B05):** Soll der KI-Chat (Terminbuchung) und der „KI-Branchen-Berater“ bleiben? Wird eine interaktive Karte gebraucht? | GLOBAL-002, -019, -027, -034 | Mittel |
| R9 | Brandea | **Domain und Launch (B08):** Soll die neue Seite unter `bgs-service.ch` die bisherige Wix-Seite ersetzen? Bis wann? Soll die Vorab-Adresse bis dahin aus dem Index genommen werden? | GLOBAL-018, Migrationsbestand in 02 | Mittel |
| R10 | Kunde | **Ziele (B05, B06):** Was ist eine gute Anfrage (Objektart, Größe, Region), was eine unpassende? Warum wählen Kunden heute BGS statt eines Wettbewerbers? | GLOBAL-030, Intent-Matrix | Mittel |
| R11 | Brandea | **Daten (B11):** Gibt es Search Console, Analytics oder ein Google-Unternehmensprofil für BGS? Lesezugang möglich? | GLOBAL-029, N-Abschnitt | Niedrig |
| R12 | Kunde/Brandea | **Verantwortung (B14):** Wer entscheidet über Positionierung, Marke, Rechtliches und die spätere Launch-Freigabe? | G14 | Niedrig |

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
| E05 | 24.09.2026 | Ziel des Gesamtvorhabens ist ein späterer **Umbau von BGS**. Dieser Auftrag bleibt nach dem goldenen Stand eine Analyse, die Phasen 0–7 werden der Reihe nach abgearbeitet. Die Umsetzung braucht nach dem Abschlussbericht eine eigene Freigabe. | Nutzeraussage zu E01. Vorgabe: „Eine Empfehlung ist keine Freigabe zur Umsetzung.“ | Alle | Nutzer | Erledigt: Umsetzung freigegeben am 24.09.2026 (E11) |
| E06 | 24.09.2026 | **FIMI wird in keiner Form verändert.** Erlaubt ist nur das Lesen des lokalen Klons (Code, Struktur, Gestaltungsprinzipien). Dort gibt es keine Änderungen, keine Dateien, keine Installation, keine Skripte, keine Commits oder Pushes, keine Issues oder PRs. Die FIMI-Live-Seite wird höchstens wie von einem normalen Besucher angesehen, Formulare, Chat und Rechner werden dort nie abgeschickt. Kontrollierter Zustand: lokaler Klon sauber, HEAD `1143a9f`, 0 geänderte Dateien. | Nutzer: „ganz wichtig du darfst nicht ich wiederhole nicht fimi websiete anfassen“. Deckt sich mit Regel 4. | — | Nutzer | — |
| E07 | 24.09.2026 | **Rollen:** BGS Gebäudeservice GmbH ist der **Kunde**. `www.bgs-service.ch` ist die **bisherige Website des Kunden** (Wix). Sie gehört nicht zu Brandea und ist nicht Prüfziel. Brandea baut dem Kunden eine **neue Website**, das Vercel-Projekt `bgs-gebaeudeservice`. Die bisherige Kunden-Website wird nicht weiter abgerufen. Die einmal gelesenen öffentlichen Angaben der Startseite dienen nur als Eigenangabe des Kunden, um Aussagen der neuen Seite zu prüfen (N014). | Nutzer: „bgs-service.ch das gehört nicht zu uns das ist der kunde selber ich baue für den kunde eine neue seite“ | Alle | Nutzer | Erledigt: Ja, sie ersetzt sie (R9b). Ergänzt durch E25 |
| E08 | 24.09.2026 | **Vercel-MCP nur lesend nutzen:** Projekt, Domains, Deployments, Build-Logs, Runtime-Logs und Fehlergruppen sowie die Namen der Umgebungsvariablen, nie Werte. Keine Schreibaktionen (kein Deploy, kein Redeploy, kein Rollback, keine Einstellungsänderung). | Nutzer: „warum nutzt du nicht die mcp von vercel“. Vorgabe B11 und Regel 5. | Alle | Nutzer | — |
| E09 | 24.09.2026 | **Vorläufige Zuordnung der fünf Leistungsberichte** zu den Kernleistungen laut Eigenangabe des Kunden: P03 Unterhaltsreinigung (U20), P04 Hausmeisterservice (U21), P05 Sonderleistungen (U24), P06 Winterdienst (U22), P07 Aussenanlagen (U16). Die Dateien sind entsprechend umbenannt. Die übrigen 13 Leistungsseiten sowie Referenzen und Blog erhalten zusätzliche Berichte P13–P31, weil sie tatsächlich existieren. | Vorgabe Abschnitt 9: Leistungsdateien nach echten Slugs umbenennen, zusätzliche Berichte für vorhandene URLs. Eigenangabe N014 | P03–P07, P13–P31 | Agent (vorläufig) | R3: Bestätigung oder Korrektur der fünf Leistungen durch den Kunden |
| E10 | 24.09.2026 | **Pushes auf den Arbeits-Branch sind erlaubt, auch wenn sie geschützte Vercel-Preview-Deployments auslösen.** `main` und die Produktion bleiben unverändert (E03 gilt weiter). Ein Live-Deployment ist nicht Teil dieses Auftrags. | Nutzerantwort auf die Rückfrage zu den automatischen Previews (N035): „lass es es soll live pushen es ist oke“. Ausgelegt als Zustimmung zum Push samt Previews, nicht als Auftrag, die Produktion zu ändern | — | Nutzer | Ein Live-Deployment nur nach Freigabe der Umsetzung (E05) |
| E11 | 24.09.2026 | **Umsetzung freigegeben.** Erst validieren, dann umsetzen, in den Wellen aus 06 auf dem Arbeits-Branch. E03 gilt damit auch für Quellcode, weiterhin nur auf `claude/optimistic-sagan-h5y2i9`. Jede Welle mit Build und Typecheck | Antwort auf E05: „Nach best practic, also du validierst das jetzt alles und dann fängst du an zu arbeiten“ | Alle | Nutzer | Ein Produktions- oder Live-Deployment braucht eine ausdrückliche Zustimmung, der Launch zusätzlich 05 und G14 |
| E12 | 24.09.2026 | **Ganze Website `noindex` bis zum Launch**: Meta-Robots und `X-Robots-Tag`, kein `Disallow`, gesteuert über eine Umgebungsvariable (Standard: nicht indexierbar) | R1, R9a | Alle | Nutzer | Wirksam auf der Vorab-Adresse erst nach einem Produktions-Deployment |
| E13 | 24.09.2026 | **Keine Schlüssel in Repository-Dateien**, Platzhalter statt Werten, Schlüssel nur in Vercel als sensible Variablen | R1: Schlüssel abgelaufen, „nicht mehr öffentlich“ | Repository | Nutzer | Repository auf privat stellen und Variablen als „sensitive“ markieren, nur durch Brandea möglich |
| E14 | 24.09.2026 | **Chat und KI-Berater bleiben** und werden nach dem FIMI-Prinzip repariert (aktueller Dienst, zentral konfiguriertes Modell, sauberer Fehlerzustand). Bis dahin sichtbarer Fehlerzustand mit Ausweichkontakt | R8a, R8b, N045 | 22 Seiten mit Termin-Buttons, Startseite | Nutzer | Modell und Zugang in Vercel (Runde 2) |
| E15 | 24.09.2026 | **Formular und angezeigte E-Mail vorläufig `admin@brandea.de`**, Versand über Resend mit Absender unter `brandea.de`, per Umgebungsvariable | R5b, R5c, N044 | Formular, Kontakt, Footer | Nutzer | Umstellung auf die Kundenadresse vor dem Launch (W05, M58) |
| E16 | 24.09.2026 | **Zielbild v2:** B2B unter `/leistungen/…`, Premium als Unterordner `/premium/…` auf derselben Domain | R3f, R7b, S48 | Alle Leistungsseiten | Agent nach Best Practice (E23) | Eigene Domain erst bei eigenständiger Premium-Marke |
| E17 | 24.09.2026 | **Leistungszuschnitt:** Winterdienst entfällt (410), normale Privathaushalte entfallen, Nachfüllservice als Abschnitt. Eigene Seiten für Büro (mit Praxen), Bau, Fenster und Fassade, Industrie und Hallen, Facility Services | R3a–R3d, R6j | Leistungsseiten | Nutzer, Zuschnitt Agent | W01, W02 |
| E18 | 24.09.2026 | **Belegregel:** zulässig sind Erfahrung seit 2006, über 50 Mitarbeitende, über 120 Kunden (Stand 09/2026), CHF 10 Mio. Haftpflicht, Sprachen DE/EN/FR/IT, umweltfreundliche Mittel auf Wunsch. Streichen: ISO, 24/7, Zertifikate, Stimmen, Referenzen, Preise | R5f, R6a–R6k, R3e | Alle | Nutzer | Belege ablegen (M59) |
| E19 | 24.09.2026 | **Bilder:** überall neutrale Platzhalter, später KI-Bilder nur als Symbolbilder, nie als Team, Referenz oder Vorher/Nachher | R6g | Alle | Nutzer | — |
| E20 | 24.09.2026 | **Karte** interaktiv, lädt erst nach Klick, nur Sitz Emmenbrücke | R8c | Kontakt | Nutzer, Umsetzung Agent | — |
| E21 | 24.09.2026 | **„Powered by Brandea AI“ bleibt sichtbar** | R2e | Startseite | Nutzer | — |
| E22 | 24.09.2026 | **Rechtstexte schreibt Brandea ohne fachliche Prüfung.** Restrisiko von Brandea akzeptiert | R7d | Impressum, Datenschutz | Nutzer | — |
| E23 | 24.09.2026 | **Rollen:** Brandea (Projektleitung) entscheidet über Inhalte, Marke und Launch. Der Agent entscheidet nach Best Practice mit und dokumentiert das. Tatsachen über den Kunden brauchen eine Eigenangabe oder einen Beleg | R12a, R12b | Alle | Nutzer | — |
| E24 | 24.09.2026 | **Farbwelt Rot-Weiss** mit barrierefreiem Rotton (≥ 4,5:1 zu Weiss) und dunklem Neutral. Schweizerkreuz nur nach IGE-Regeln, kein Schweizerwappen | R12a, S49, S50 | Gestaltung | Nutzer | Logo nach Namensentscheid |
| E25 | 24.09.2026 | **Ergänzung zu E07:** Start- und Kontaktseite der Kunden-Website einmal gelesen, nur zur Prüfung der Kontaktdaten | R5a, R5g: „Schau auf der aktuellen Webseite … Validiere.“ | Kontakt | Nutzer | — |
| E26 | 24.09.2026 | **Arbeitsmarke „BGS Gebäudeservice“ bis zum Namensentscheid**, an einer zentralen Stelle. Impressum „BGS - Gebäudeservice GmbH“. Platzhalter „Swiss Reinigungsfirma“ entfällt | R2a, R2b, R7e, S43 | Alle | Agent nach Best Practice (E23) | Name (W03, Runde 2) |
| E27 | 25.09.2026 | **Produktions-Deployments macht der Agent selbst** (Push nach `main`). Der Versuch wurde von der Rechteprüfung der Arbeitssitzung blockiert und nicht umgangen | LIVE: „du commit und pusht selber“, N051 | Alle | Nutzer | Freigabe per Berechtigungsregel oder Einspielen durch Brandea (12, Abschnitt 3) |
| E28 | 25.09.2026 | **Privatkunden nur im Premium-Segment** (Villen, Lofts, Luxusimmobilien). Hotels mit besonderen Wünschen als B2B-Premium. Keine Umzugsreinigung für private Mieter | W01 | Sonderreinigungen, Premium | Nutzer | Nischen (13) |
| E29 | 25.09.2026 | **Kein Winterdienst**, endgültig | W02 | Winterdienst 410 (`fe75da7`) | Nutzer | Kunde bereinigt local.ch und die alte Website |
| E30 | 25.09.2026 | **Einzugsgebiet:** ganze Kantone Luzern, Zug, Aargau, Nidwalden, Obwalden, alle Leistungen überall | W04, R4d | `/einzugsgebiet` | Nutzer | Wohlhabende Gebiete (13) |
| E31 | 25.09.2026 | **E-Mail `admin@brandea.de` bis kurz vor dem Launch**, zuvor Name und Domain | W05 | Kontakt, Formular | Nutzer | M58 |
| E32 | 25.09.2026 | **Kontaktdaten bestätigt:** Festnetz Hauptnummer, Mobilnummer zusätzlich, Öffnungszeiten laut local.ch | KONTAKT, N046, N049 | `shared/company.ts` | Nutzer | — |
| E33 | 25.09.2026 | **Gute Anfrage:** Unterhaltsreinigung ab CHF 50'000 pro Jahr (interner Richtwert) | W07 | Formular, Messung | Nutzer | — |
| E34 | 25.09.2026 | **Zielgruppen:** B2B mit relevantem Umsatz inkl. Verwaltungen und Stockwerkeigentümer, privat nur vermögende Kunden | W08 | Positionierung | Nutzer | — |
| E35 | 25.09.2026 | **Modell für Chat und Berater später**, Chat bleibt aus | MODELL | Chat, Berater | Nutzer | — |
| E36 | 25.09.2026 | **Aufgaben ausserhalb des Codes über das Terminal von Brandea**, Rückmeldung als JSON | BRANDEA | Repository, Vercel | Nutzer | Terminal-Bericht |
| E37 | 25.09.2026 | **Markenaufbau: Dachmarke plus eigener Name für Premium.** Eingetragene Firma bleibt in Impressum, Offerten und Rechnungen | AUFBAU (14) | Marke, alle Seiten | Nutzer | Namensrunde 2 (14, Abschnitt 4) |
| E38 | 25.09.2026 | **Nach der Namenswahl:** Domains der Favoriten sofort sichern (Brandea), dann Markenrecherche beim IGE, Nutzung erst danach | PRUEFUNG (14) | Marke, Domain | Nutzer | M56 |
| E39 | 25.09.2026 | **Produktion durch den Agenten, von Brandea freigegeben.** Zweiter Versuch erneut von der Rechteprüfung blockiert, nicht umgangen | LIVE (14), N057 | Alle | Nutzer | Freigabe nach 14, Abschnitt 3 |
| E40 | 25.09.2026 | **Alle zehn Premium-Nischen** aus 13 werden heute schon bedient (Eigenangabe) | NISCHEN (14) | `/premium` | Nutzer | Gegenlesen durch den Kunden vor dem Launch |
| E41 | 25.09.2026 | **Premium-Zusagen:** Arbeitsweisen veröffentlichen. Deckung für Kunst und Wertgegenstände, Zutritt Flugfeld Buochs und Prüfmethode erst mit Beleg | VORAUS (14), E18 | `/premium` | Agent (Belegregel) | M59 |
| E42 | 25.09.2026 | **Seeufer und Orte nennen**, nur als Text auf `/einzugsgebiet` und `/premium`, keine Ortsseiten | ORTE (14), M48, S33 | `/einzugsgebiet`, `/premium` (`31f87eb`) | Nutzer | — |
| E43 | 25.09.2026 | **Mehrsprachige Website:** Deutsch, Englisch, Französisch, Italienisch, mit Umschalter | ENGLISCH (14), S75–S77 | Alle | Nutzer | M60, Prüfung der Übersetzungen |
| E44 | 25.09.2026 | **Anfahrt:** überall dieselben Bedingungen | ANFAHRT (14) | `/einzugsgebiet` | Nutzer | — |
| E45 | 25.09.2026 | **Terminal-Auftrag vorerst nicht ausgeführt.** Repository bleibt öffentlich, R1 und M06 offen | TERMINAL (14) | Repository, Vercel | Nutzer | Risiko genannt (14, E45) |
| E46 | 25.09.2026 | **Dachmarke Mantena.** Eingetragene Firma bleibt «BGS - Gebäudeservice GmbH» | DACH (15), 13 Abschnitt 8 | Alle (`85024bb`) | Nutzer | Öffentlich erst nach der Markenrecherche (E38) |
| E47 | 25.09.2026 | **Premium-Linie Clavea**, Ersatz Silendo | PREMIUM (15), 13 Abschnitt 8 | `/premium` (`85024bb`) | Nutzer | Verwechslungsgefahr mit der Marke CLAVIS (Klassen 37, 45) klären (15, Abschnitt 3.3) |
| E48 | 25.09.2026 | **Domains:** Brandea registriert, Inhaberin ist die Firma des Kunden | DOMAINS (15) | — | Nutzer | `mantena.ch`, `clavea.ch` frei um 19:45 UTC (N069) |
| E49 | 25.09.2026 | **Logo:** Brandea gestaltet es, bis dahin Schriftzug | LOGO (15) | Alle, M35 | Nutzer | Dateiliste in 15, Abschnitt 5 |
| E50 | 25.09.2026 | **Übersetzungen:** Brandea prüft die Entwürfe des Agenten | LEKTORAT (15) | Alle, M60 | Nutzer | — |
| E51 | 25.09.2026 | **Übersetzte Adressen** je Sprache, z. B. `/fr/prestations/…` | ADRESSEN (15), S82 | Alle, M60 | Nutzer | Zuordnungstabelle bei M60 |
| E52 | 25.09.2026 | **Die drei zurückgestellten Premium-Zusagen bleiben weg** (Deckung Kunst, Flugfeld, Prüfmethode) | BELEGE (15), E41 | `/premium` | Nutzer | M59 geschlossen |
| E53 | 25.09.2026 | **Keine Partner.** Die Website nennt weder Partner noch ein Netzwerk | PARTNER (15) | `/leistungen/hauswartung` (`ff99f92`) | Nutzer | — |
| E54 | 26.09.2026 | **Produktion durch den Agenten:** Arbeits-Branch nach `main`, ohne `NEW_BRAND` (Arbeitsmarke) | LIVE (16) | Alle | Nutzer | Mantena erst nach der Markenrecherche (E38) |
| E55 | 26.09.2026 | **Umwelt-Artikel zurückgestellt**, 308 auf die Unterhaltsreinigung | UMWELT (16) | `/blog/umweltfreundliche-reinigung` | Nutzer | Wiederaufnahme mit Angaben zu Mitteln |
| E56 | 26.09.2026 | **Neue Leistungstexte bestätigt** (Abnahmegarantie, Mieter, Rhythmus, Offerte, Nachfüllservice, Haustechnik, Jet, Garten), Lektorat Brandea | 16 | Leistungs- und Premiumseiten | Nutzer | — |
| E57 | 26.09.2026 | **Neue Seiten in die Produktion:** Arbeits-Branch mit `b1c7acf` nach `main`, Push durch den Agenten | LIVE (17) | Alle | Nutzer | — |
| E58 | 26.09.2026 | **Kennzahlen schriftlich belegt:** seit 2006, über 120 Kunden, über 50 Mitarbeitende | ZAHLEN (17) | Startseite, Über uns | Nutzer | Beleg bei Brandea |
| E59 | 26.09.2026 | **Bildflächen als Platzhalter, kein KI-Hinweis im Impressum** bis zu echten Bildern | KIBILD (17) | Impressum, alle Seiten mit Bildern | Nutzer | Echte Bilder (E19) |
| E60 | 26.09.2026 | **Nächster Block: Impressum und Datenschutz** nach Schweizer Recht | NEXT (17) | `/impressum`, `/datenschutz` | Nutzer | — |
| E61 | 26.09.2026 | **Seiten-Checkliste:** jede Seite einzeln, erledigte angekreuzt | Globale Notiz (17) | Alle | Nutzer | `18-SEITEN-CHECKLISTE.md` |
| E62 | 26.09.2026 | **Rechtstexte bestätigt:** Brandea als Empfängerin im Datenschutz, Vertretung mit Namen im Impressum | POSTFACH, VERTRETUNG (19) | `/datenschutz`, `/impressum` | Nutzer | Kundenadresse (W05) |
| E63 | 26.09.2026 | **USA-Satz bleibt** ohne Einzelprüfung der Anbieter | DPF (19) | `/datenschutz` | Nutzer | — |
| E64 | 26.09.2026 | **Fragebogen nach jedem Bereich** im Seitendurchgang | TEMPO (19) | Alle | Nutzer | — |
| E65 | 26.09.2026 | **Rechtstexte in die Produktion**, Push durch den Agenten | LIVE (19) | Alle | Nutzer | — |
| E66 | 26.09.2026 | **Bildfläche als Platzhalter** oben rechts auf Leistungs- und Premiumseiten | BILDER_LEISTUNG (20) | Vorlage `ServicePage` | Nutzer | Echte Bilder (E19) |
| E67 | 26.09.2026 | **Kernleistungen zuerst** in Menü und Footer | MENU_ORDER (20) | Alle | Nutzer | — |
| E68 | 26.09.2026 | **Knopf im Kopf «Offerte anfragen»** statt «Kontakt aufnehmen» | HEADER_CTA (20) | Alle | Nutzer | — |
| E69 | 26.09.2026 | **Seitendurchgang in die Produktion**, Push durch den Agenten | LIVE (20) | Alle | Nutzer | E66, E68 mit eigener Freigabe |
| E70 | 26.09.2026 | **Durcharbeiten ohne Routine-Freigaben:** Agent pusht nach grünen Prüfungen selbst nach `main`, fragt nur bei wichtigen Punkten (Aussagen, Recht, Marke, Schalter, Kosten, Widersprüche). Offene Fragen aus Runde 9 entscheidet der Agent nach seiner Empfehlung | Nutzer: «bitte nicht mehr so viele unnötigen Freigaben, arbeite mal etwas mehr durch, nur dann wenn es wirklich wichtig wird» | Alle | Nutzer | Ersetzt die Einzelfreigaben aus E54, E57, E65, E69 |

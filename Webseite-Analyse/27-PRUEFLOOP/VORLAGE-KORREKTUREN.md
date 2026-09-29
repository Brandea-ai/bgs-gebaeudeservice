# BGS Welle 3, Einheit Vorlage

Stand 29.09.2026. Eigener Worktree: `.worktrees/fix-r1-vorlage-20260928`. Branch `agent/fix-r1-vorlage`, HEAD `81276cfbf3e12773ea41d6718a2c62c4740d8887`, Arbeitsbaum sauber. Autor unverändert `Brandea <info@brandea.de>`. Der Integrator hat `20ecea3` bereits übernommen; `81276cf` wurde als Zusatzcommit übergeben. Von dieser Einheit wurde nichts gepusht.

## Änderungen

- Werkzeuge mobil über benannte Buttons einklappbar. Alle Inhalte bleiben serverseitig vorhanden und ohne JavaScript lesbar. Anker öffnen das richtige Werkzeug, auch bei erneutem Klick auf denselben Hash. Drucken funktioniert aus geschlossenem Zustand.
- Leistungsseiten haben unter der Vertrauensleiste eine mobile klebende Navigation. Dieselbe Funktion erzeugt das Desktop-Verzeichnis und die mobile Reihenfolge. SectionNav meldet seine Höhe auch mobil und korrigiert den initialen Hashsprung nach der Layoutmessung. Zickzack-Anker sitzen auf Überschriften.
- A4-Druck mit 10 mm Rand, 10.5 pt Grundschrift und 10 pt Tabellen, engeren Zeilen, zwei Checklisten-Spalten, zusammengehaltenen Hinweisen/Quellen, wiederholbaren Tabellenköpfen und ohne ausgeschriebene Link-URLs. Alle 196 druckbaren Werkzeuge bleiben einseitig, ohne Inhaltskürzung.
- ToolPrintOptions gelten für alle Werkzeugtypen. `printHeader:false` erlaubt Aushänge ohne Firmen-/Seitenkopf. `form:true` zeigt mobil eine kompakte Prüfliste sowie im Druck Liegenschaft, Datum und Name mit Schreiblinien. Inhalt-Agent setzte die konkreten Optionen in vier Sprachen.
- Lange Werkzeugtitel verdrängen den Druckknopf am Desktop nicht mehr in eine neue Zeile. Letzte ungerade Checklisten-Gruppe über volle Breite.
- FAQ-Bilder entfallen mobil. Desktopbild ab sieben Fragen im kompakteren 16:9-Format, Yacht mit sechs Fragen als Textvariante. Premium-Verwandtkarten nutzen bei normalen Leistungen die vorhandenen Service-Symbole.
- FigureGrid-Schrift richtet sich nach der verfügbaren Zellenbreite. Kein Überlauf bei 360, 1024 und 1279 px.
- ProcessScrolly nutzt für Besichtigung ein Clipboard-Symbol. Der zusätzliche Scrollweg beträgt bei drei Schritten 216 statt 594 px; alle drei Schritte bleiben erreichbar.
- RichText unterstützt `[Text](#anker)`. HTTPS und mailto funktionieren weiter, javascript-Links werden weiterhin nicht als Link interpretiert.
- Ungenutzter kursiver Cormorant-Schnitt aus RootShell entfernt, auf Wunsch des Technik-Auditors nach bestätigter Nichtverwendung.

## Prüfbelege

Die vollständige Prüfkette lief auf `20ecea3` mit `LANGUAGES=true NEW_BRAND=true` und endete GRÜN:

- TypeScript und Produktions-Build bestanden.
- 128 Sitemap-Seiten, 19/19 Weiterleitungen, 128 interne Linkziele, hreflang in vier Sprachen.
- 0 CSP-Verstösse, 0 Konsolenfehler, Menü und Karte bestanden.
- 0 axe-Verstösse, 0 Überlauf bei 390 px, 0 deutsche Reste.
- Logs dauerhaft in `pruefkette/`. Integrator prüft beide Markenmodi nochmals auf dem Gesamtstand.

Druck: `print-final/manifest.json` enthält 196 PDFs mit je einer Seite. Die unveränderte Stichprobe aus 14 Werkzeugen brauchte zuvor 26 Seiten (`print-baseline/manifest.json`). Nachher passen dieselben 14 auf 14 Seiten. Dichte deutsche/französische Pflichtenhefte sowie das Formular wurden zusätzlich gerendert und visuell geprüft.

Bedienung: `final-screens/interactions.json` dokumentiert mobile Klappen, Enter-Taste, Druckziel und afterprint-Aufräumen, Symbole und Kennzahlen. Der darin frühere Hashmesswert wurde nach dem letzten Fix durch `anchors-final.json` ersetzt: Werkzeugoberkante etwa 169 px, Überschriften/Umfang etwa 153 px bei Unterkante der Navigation 129 px. Kein verdeckter Titel. Ohne JavaScript bleiben Werkzeugtexte lesbar.

Formulare: `forms/forms.json`, je Sprache zwölf Prüfpunkte mit lokalisiertem Kopf, je 1 A4-Seite. Beide deutschen Aushänge drucken ohne Firmenkopf. `richtext-check.json` enthält die gezielte Link-Parser-Prüfung. `process.json` zeigt alle drei aktiven Ablaufschritte bei kürzerem Scrollweg.

Deutsch-Doppelungsprüfung: Leistungs-/Premiumseiten 3.0 %, Kantone 5.0 %, übrige Seiten 5.4 %. Keine Gedankenstriche oder ß. Quelle `doppelungen-de.log`. Keine neuen fachlichen oder Unternehmenszusagen in diesem Scope.

Mobile Länge, gleiche Seiten und gleiches 390-px-Prüfprofil, reduzierte Bewegung:

| Seite | Vorher, px | Nachher, px | Kürzer |
|---|---:|---:|---:|
| `/leistungen/hauswartung` | 26’388 | 15’566 | 41.0 % |
| `/leistungen/bueroreinigung` | 24’664 | 15’878 | 35.6 % |
| `/leistungen/baureinigung` | 24’422 | 15’487 | 36.6 % |
| `/leistungen` | 15’179 | 13’339 | 12.1 % |
| `/premium/yacht` | 24’390 | 14’440 | 40.8 % |
| `/ueber-uns` | 14’224 | 12’133 | 14.7 % |

Die übrigen Agenten sind in diesen Werten noch nicht integriert. Vorher/Nachher stehen in `baseline.json` und `final-metrics.json`.

## Zusatzprüfung 81276cf

Die unabhängige UX-Prüfung fand ohne JavaScript verdeckte Hashziele. CSS-Fallbacks gelten jetzt ausschliesslich vor Hydration und ohne `data-nav`: Headerreserve enthält die Infozeile, sichtbare Abschnittsleisten erhalten `calc(3.25rem + 1px)` Reserve. Die mobile Leistungsleiste wird am Desktop ausgenommen. Normale JS-Anker ändern sich dadurch nicht.

`nojs-css-probe.json` dokumentiert die Gegenprobe mit den neuen Regeln auf dem vorhandenen Build, ausdrücklich noch keinen neu gebauten Gesamtstand. Bei 390 px liegen die Überschriften bei 153 px unter der Nav-Unterkante 129 px, bei 1440 px bei 136 px unter dem Header bis 114 px, bei 3840 px bei 272 px unter dem Header bis 226 px. Geprüft wurden Hauswartung und Luxusimmobilien. Der Integrator und UX-Auditor prüfen den echten Gesamtbuild danach erneut.

Ausserdem wurden Helfer ohne Renderingänderung ausgelagert: `werkzeug.tsx` 196 Zeilen, `werkzeug-zusatz.tsx` 118, `ProcessScrolly.tsx` 206, `ProcessStage.tsx` 78. TypeScript und diffcheck bestanden. Auf Wunsch des Integrators folgt der nächste vollständige Build auf dem zusammengeführten Stand.

## Einordnung und offene Punkte

- ContactForm, SwissFooter und MobileCta wurden nicht angefasst; diese gehören der Kontakt-Einheit.
- Der Druckkopf nennt weiterhin die juristische Firma. Eine Premium-Seitenüberschrift und die juristische Identität widersprechen sich nicht. Aushänge können den Kopf gezielt ausblenden.
- Ein AVIF-Request hing in einem lokalen Zwischenstand mit zwei Servern auf derselben Build-Ausgabe. Baseline-Gegenprobe gesund; nach sauberem Neustart final ebenfalls 200 in 0.179 s. Kein reproduzierbarer Anwendungsfehler.
- Keine bekannten unbehobenen Vorlagenfehler im eigenen Scope; der no-JS-Fix braucht noch den Readback des integrierten Builds. Gesamtintegration, zweiter Markenmodus, unabhängige Runde 2 und Deployment liegen beim Integrator. Die Launch-Gates aus der Übergabe bleiben unverändert.
- Branch enthält Typ-Commit `1164dac` und Contentoptions-Commit `b885b4e`, letzterer ist dieselbe Änderung wie `71021cf` aus dem Inhalt-Branch.

## Nachprüfung und Rücknahme

`metrics.cjs`, `print.cjs`, `interactions.cjs`, `forms.cjs` können mit Basis-URL und Ausgabeordner gegen den integrierten Stand laufen. NODE_PATH zeigt wie in der Übergabe auf `scratchpad/tools/node_modules`. Die druckbaren Werkzeuge werden über alle 128 Sitemap-Seiten ermittelt.

Rollback vor Integration: Branch nicht mergen. Nach Integration den Merge-Commit gezielt revertieren; keine Worktrees oder fremden Änderungen überschreiben. Ausgangsbasis dieser Einheit ist `fc6a788`.

## Dateien im Branch

- `app/globals.css`
- `client/src/components/FaqBlock.tsx`
- `client/src/components/IntroBand.tsx`
- `client/src/components/ProcessScrolly.tsx`
- `client/src/components/ProcessStage.tsx`
- `client/src/components/RichText.tsx`
- `client/src/components/RootShell.tsx`
- `client/src/components/SectionNav.tsx`
- `client/src/components/Zigzag.tsx`
- `client/src/seiten/leistung/03-einsatz.tsx`
- `client/src/seiten/leistung/04-inhalt.tsx`
- `client/src/seiten/leistung/07-verwandt.tsx`
- `client/src/seiten/leistung/drucken.tsx`
- `client/src/seiten/leistung/index.tsx`
- `client/src/seiten/leistung/navigation.tsx`
- `client/src/seiten/leistung/werkzeug-checkliste.tsx`
- `client/src/seiten/leistung/werkzeug-inhalt.tsx`
- `client/src/seiten/leistung/werkzeug-tabelle.tsx`
- `client/src/seiten/leistung/werkzeug-zusatz.tsx`
- `client/src/seiten/leistung/werkzeug.tsx`
- `content/de/common.ts`
- `content/de/leistungen/fenster-und-fassadenreinigung.ts`
- `content/de/leistungen/sonderreinigungen.ts`
- `content/de/leistungen/unterhaltsreinigung.ts`
- `content/en/common.ts`
- `content/en/leistungen/fenster-und-fassadenreinigung.ts`
- `content/en/leistungen/sonderreinigungen.ts`
- `content/en/leistungen/unterhaltsreinigung.ts`
- `content/fr/common.ts`
- `content/fr/leistungen/fenster-und-fassadenreinigung.ts`
- `content/fr/leistungen/sonderreinigungen.ts`
- `content/fr/leistungen/unterhaltsreinigung.ts`
- `content/it/common.ts`
- `content/it/leistungen/fenster-und-fassadenreinigung.ts`
- `content/it/leistungen/sonderreinigungen.ts`
- `content/it/leistungen/unterhaltsreinigung.ts`
- `content/types.ts`

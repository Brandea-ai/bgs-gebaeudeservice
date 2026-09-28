# Umbau-Spezifikation nach dem Audit (E85)

**Stand 28.09.2026.** Verbindlich für alle Agenten im Umbau. Freigabe: Nutzer am 28.09.2026 («ja bitte alles hochwertig implementieren, jede einzelne Seite»). Grundlage: `25-AUDIT/inhalt.md`, `25-AUDIT/seo.md`, `25-AUDIT/visuell.md`, `25-AUDIT/UMBAUPLAN.html`. Es gelten weiter `CLAUDE.md`, `07` (vor allem E18, E19, E28, E29, E30, E50), `23-REBRANDING-BRIEF.md`, `24-SEO-KEYWORDS.md`.

## 1. Ziel

Jede Seite liefert Mehrwert, den es nur auf dieser Seite gibt: Werkzeuge (Vorlagen, Checklisten, Tabellen, Kalender), Rechtspflichten mit Quelle, Materialkunde, seitentypische Fragen. Keine Schablone mehr. Messbar:

- Doppelte Sätze (identisch oder mindestens 80 % ähnlich, Methode wie `25-AUDIT/inhalt.md`) auf den 13 Leistungs- und Premiumseiten unter 15 %, auf den Kantonsseiten unter 20 %.
- Vertröstungen («bei der Besichtigung», «klären wir», «nach Absprache», «in der Offerte») unter 5 % der Sätze je Seite.
- «kostenlos und unverbindlich» höchstens einmal je Seite (im Abschluss).
- Prüfkette in beiden Marken-Modi grün, axe 0, kein Überlauf bei 390 px.

## 2. Inhaltsmodell der Leistungs- und Premiumseiten

Die Inhalte liegen je Sprache in einer Datei je Leistung: `content/<sprache>/leistungen/<schluessel>.ts` und `content/<sprache>/premium/<schluessel>.ts` (Aufteilung durch das Fundament, der Export `leistungen` bzw. `premium` bleibt gleich).

```ts
/** Externe Quelle, tatsächlich gelesen (WebFetch), etwa fedlex.admin.ch, vogelwarte.ch, bafu.admin.ch */
export type Source = { label: string; href: string }

/** Werkzeug-Baustein: der Mehrwert der Seite. 2 bis 4 je Seite, jeweils mit eindeutiger id. */
export type Tool =
  | { kind: 'table'; id: string; title: string; intro?: Text; columns: string[]; rows: Text[][]; note?: Text; sources?: Source[]; printable?: boolean }
  | { kind: 'checklist'; id: string; title: string; intro?: Text; groups: { title: string; items: Text[] }[]; note?: Text; sources?: Source[]; printable?: boolean }
  | { kind: 'timeline'; id: string; title: string; intro?: Text; entries: { label: string; text: Text }[]; note?: Text; sources?: Source[] }
  | { kind: 'text'; id: string; title: string; paragraphs: Text[]; items?: Text[]; note?: Text; sources?: Source[] }

ServicePageContent:
  tools?: Tool[]      // neu
  facts               // 3 bis 5 seitentypische Eckdaten (etwa «Nicht enthalten», «Garantie», «Einsatzzeiten», «Vorlauf»); die Vorlage hängt kein Gebiet mehr an
  steps: Step[]       // nur die seitentypischen Schritte; «Anfrage» und «Besichtigung und Offerte» stellt die Vorlage als eine Zeile davor
Step:
  figure?: FigureKey | ImageKey   // Bühne je Schritt: Remotion-Video (anfrage, besichtigung, offerte, start) oder Bild aus dem Register
```

Darstellung (Vorlage `client/src/seiten/leistung/`):

- Werkzeuge im Hauptinhalt vor «Umfang», im Inhaltsverzeichnis enthalten. Tabellen mobil als Karten mit Spaltenbeschriftung, sonst in eigenem Container mit `overflow-x: auto`. `printable` zeigt «Drucken»: Beim Drucken erscheint nur dieses Werkzeug, mit Seitentitel, Firma und Stand.
- Quellen klein unter dem Werkzeug, als Link mit `rel="noopener"`.
- Zickzack Zeile 1 mit `detailImage`, Zeile 2 mit `sceneImage` (`shared/scene-images.ts`). Ohne Eintrag hat Zeile 2 kein Bild. Kein Hero-Bild ein zweites Mal auf der Seite.
- Fragen-Bereich mit `faqImage[path]`. Ohne Eintrag gibt es die Variante ohne Bild. Mobil stehen die Fragen vor Bild und Knöpfen.
- Vertrauensleiste auf Leistungsseiten nur drei Punkte: Seit 2006, CHF 10 Mio., Offerte nach Besichtigung.
- Ablauf: eine klebende Bühne über die volle Höhe links, alle Schritte rechts ohne Leerraum; der Scroll setzt nur den aktiven Schritt. Premium mit eigener Bühne in Elfenbein und Champagner, nie Signalrot.
- Premium-Seiten (`area: 'premium'`) bis zum Seitenende in der Premium-Welt, auch Umfang, Checkliste, Abschluss und Mobil-Leiste. Champagner nie auf Standardseiten.

## 3. Schreibregeln für alle Texte

- **E18:** Über das Unternehmen nur Belegtes (Seit 2006, über 50 Mitarbeitende, über 120 Kunden, CHF 10 Mio. Haftpflicht, vier Sprachen, Antwort in 24 Stunden an Werktagen, Offerte nach Besichtigung, Abnahmegarantie bei der Umzugsreinigung). Keine neuen Zusagen, Preise, Zertifikate, Referenzen, Kundenstimmen, Zahlen. Mehrwert entsteht durch Fachwissen, Recht mit Quelle, Vorlagen, Planung.
- **Offene Kundenfragen F1 bis F7** (`25-AUDIT/inhalt.md`) nicht beantworten, nichts dazu erfinden. Wo eine Antwort den Text stärker machen würde: Text ohne diese Aussage schreiben.
- **E28:** Zielgruppen Verwaltungen, Stockwerkeigentümerschaften, Eigentümer, Unternehmen, Premium-Privatkunden. Keine Privatmieter (Umzugsreinigung: bleibt so, der Titel nennt die Zielgruppe ehrlich, Variante A aus `25-AUDIT/seo.md` T1).
- **E29:** kein Winterdienst.
- **Recht und Fakten:** Jede Aussage zu Gesetz, Norm oder Empfehlung vorher an der Primärquelle prüfen (fedlex.admin.ch für OR, DSG, GSchG; Fachstellen wie Vogelwarte, BAFU, BFU, SUVA) und als `sources` angeben. Keine Rechtsberatung, Formulierungen wie «Das OR sieht vor …», «Klären Sie im Einzelfall …».
- **Sprache:** Deutsch zuerst, dann Englisch (britisch), Französisch (Schweiz, geschütztes Leerzeichen vor «:» wie im Bestand), Italienisch (Schweiz), dieselben Schlüssel. Schweizer Rechtschreibung (ss), Guillemets «», Höflichkeitsform Sie. **Keine Gedankenstriche** (— oder –). Keine KI-Floskeln («umfassend», «ganzheitlich», «nahtlos»), keine Dreierketten von Adjektiven, Satzlänge wechselnd, konkret.
- **SEO:** Hauptbegriff wörtlich in Titel und H1 (`25-AUDIT/seo.md` T2), Beschreibung mit Nutzen und Handlungsaufruf (T4), Keywords je Sprache aus `25-AUDIT/keywords-mehrsprachig.md`. Titel ohne Marke höchstens rund 50 Zeichen, Beschreibung 110 bis 160 Zeichen. Interne Links nur auf Seiten aus `content/de/seo.ts`, Ankertext nennt das Ziel.
- **Fragen:** 6 bis 8 je Seite, nur seitentypisch. Keine Standardfragen «In welchen Regionen», «Sind Sie versichert», «Umweltfreundliche Mittel», «Sprachen» auf Leistungsseiten (die stehen auf `/kontakt`). Die Kostenfrage je Leistung mit den Kostenfaktoren dieser Leistung, ohne Preise.

## 4. Dateihoheit im parallelen Umbau

Jeder Agent ändert nur seine Dateien. Braucht er etwas ausserhalb, schreibt er es in seinen Bericht statt es zu ändern.

| Agent | Darf ändern |
|---|---|
| Leistung `<schluessel>` | `content/<4 Sprachen>/leistungen/<schluessel>.ts` bzw. `premium/<schluessel>.ts`, in `content/<4 Sprachen>/seo.ts` nur den eigenen Eintrag |
| Kantone | `content/*/kantone.ts`, Block `area` in `content/*/seiten.ts`, `client/src/seiten/kanton/*`, `client/src/views/AreaView.tsx`, `client/src/components/CantonMap.tsx`, `KantonKarte.tsx`, eigene Einträge in `seo.ts` |
| Startseite und Übersicht | `client/src/seiten/startseite/*`, `client/src/seiten/leistungen-uebersicht/*`, Blöcke `home`, `servicesOverview`, `proof` in `seiten.ts`, `TrustStrip.tsx`, `chrome.trust` in `navigation.ts`, eigene Einträge in `seo.ts` |
| Premium-Übersicht | `client/src/seiten/premium-uebersicht/*`, Block `premiumOverview` in `seiten.ts`, `/premium` in `seo.ts`, `structured-data.ts` nur `Service.name` (N8) |
| Über uns | `client/src/seiten/ueber-uns/*`, Block `about` in `seiten.ts`, eigener Eintrag in `seo.ts` |
| Kontakt und Formular | `SwissFooter.tsx` (ContactSection), `app/api/contact/*`, `contactForm` und Kontaktteile in `navigation.ts`, `client/src/seiten/kontakt/*`, Block `contact` in `seiten.ts`, `recht.ts` (K4), `MobileCta.tsx` |
| Ratgeber | `content/*/ratgeber.ts`, `client/src/seiten/ratgeber/*`, `client/src/seiten/artikel/*`, neue Adressen in `shared/i18n.ts`, neue Einträge in `seo.ts`, `hero.ts` und `shared/hero-images.ts` |

`content/*/hero.ts`, `content/*/bilder.ts`, `shared/images.ts` und `shared/scene-images.ts` ändern nur Fundament, Bilder-Agent und Integrator.

## 5. Arbeitsweise je Agent

1. Eigene Arbeitskopie: `bash <scratchpad>/tools/arbeitskopie.sh <name>` (legt `.worktrees/<name>-20260928` auf Zweig `agent/<name>` an, `node_modules` als APFS-Klon). Nie im Hauptordner arbeiten.
2. Arbeiten, dann `npm run check` in der Arbeitskopie.
3. Prüfkette: `bash <scratchpad>/tools/pruefen.sh <arbeitskopie> <eigener Port> <name> "LANGUAGES=true NEW_BRAND=true" voll`. Ergebnis muss GRÜN sein. Builds warten automatisch auf einen freien Build-Platz.
4. Sichtprüfung der eigenen Seite bei 1440 und 390 px (Playwright aus `<scratchpad>/tools/node_modules`, Server auf dem eigenen Port), mindestens ein Blick je neuem Baustein.
5. Commit im eigenen Zweig mit Autor-E-Mail des Repos (nicht ändern), Nachricht auf Deutsch. Nicht pushen, nicht zusammenführen, Arbeitskopie stehen lassen.
6. Bericht: Zweig, Commit, geänderte Dateien, Prüfergebnis, offene Punkte für den Integrator.

`<scratchpad>` = `/private/tmp/claude-501/-Users-brandea/114fc6cf-e5c5-4e1f-9667-d47c99605956/scratchpad`.

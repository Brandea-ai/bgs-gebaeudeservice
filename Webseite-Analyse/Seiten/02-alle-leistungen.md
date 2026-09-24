# Seitenanalyse: Alle Leistungen

**Seiten-ID: P02 (kein Inventareintrag, die Seite existiert nicht)**  
**Status: Seitenprüfung durchgeführt am 24.09.2026. Seitenurteil: BEFUND, die erwartete Seite fehlt.**  
**URL:** `https://bgs-gebaeudeservice.vercel.app/leistungen` → **404** (N008, am 24.09.2026 um `/business` und `/premium` ergänzt, ebenfalls 404) · **Codepfad:** keiner. Ersatzweise geprüft: Mega-Menü `client/src/components/SwissNavigation.tsx:21-45, 71-123`, Startseitenabschnitt `app/page.tsx:198-307`, Footer `client/src/components/SwissFooter.tsx:295-335` · **Stand:** `d7e1122`

## 1. Aufgabe dieser Seite

Interessenten bei der Auswahl zwischen den fünf Leistungen unterstützen.

**Abgrenzung:** Übersicht beantwortet „Welche Leistung passt?“, Unterseiten beantworten „Ist diese konkrete Leistung für mich geeignet?“.

**Primäre Zielhandlung:** Zur passenden Leistungsseite wechseln; bei Unklarheit eine realistische Auswahlberatung anfragen.

**Ergebnis der Prüfung:** Es gibt keine Übersichtsseite. `/leistungen`, `/basis`, `/business` und `/premium` liefern 404 (N008, globaler Befund GLOBAL-033). Die Auswahl übernehmen drei Ersatzflächen: das Mega-Menü (18 Links in drei Gruppen, nur per Maus zu öffnen, N031), der Startseitenabschnitt „Unsere Reinigungsdienstleistungen“ (drei Karten) und der Footer (18 Links). Keine davon erklärt, welche Leistung zu welcher Ausgangslage passt. Die drei Flächen benennen dieselben Leistungen unterschiedlich (SEITE-P02-002).

## 2. Seitenspezifische Prüfliste

- [x] Genau die bestätigten fünf Leistungen vollständig, eindeutig benannt und erreichbar aufführen. → *BEFUND: Keine Seite vorhanden. Die Ersatzflächen führen 18 Leistungen in den Gruppen „Premium Services“, „Business Lösungen“/„Business Services“ und „Basisreinigung“/„Basis Services“. Welche Leistungen bestätigt sind, klärt R3. Die Eigenangabe des Kunden nennt zwei Bereiche mit sieben Unterleistungen (N014).*
- [x] Je Leistung erklären, für welche Ausgangslage sie passt und was sie von den anderen unterscheidet. → *BEFUND: fehlt überall. Menü und Footer zeigen nur Namen. Die Startseitenkarten nennen je Gruppe einen Satz, z. B. „Exklusive Reinigungsdienstleistungen für höchste Ansprüche“, aber keine Ausgangslage je Leistung.*
- [x] Leistungsnamen verständlich halten; interne Fachbegriffe nicht ohne Erklärung als Navigation verwenden. → *BEFUND: Die Gruppierung „Premium/Business/Basis“ ordnet nach Preisstufe oder Kundentyp, nicht nach der Aufgabe. „Basisreinigung“ enthält Hausmeisterservice, Winterdienst und „Beschaffungsmanagement“, die keine Reinigung sind. Die Namen weichen zwischen Menü, Footer, Formular und H1 voneinander ab (SEITE-P02-002).*
- [x] Eine Vergleichs-/Auswahlhilfe prüfen, wenn Nutzer zwischen ähnlichen Leistungen unterscheiden müssen. → *BEFUND: keine Auswahlhilfe. Nötig wäre sie mindestens für Unterhalts- gegen Büroreinigung, Hausmeisterservice gegen Facility Management, Fassaden- gegen Fensterreinigung sowie Industrie-, Hallen- und Maschinenreinigung (Kannibalisierung → Phase 4).*
- [x] Keine fünf nahezu identischen Texte nur mit ausgetauschtem Begriff wiederholen. → *NICHT ANWENDBAR für diese Seite (existiert nicht). Für die Detailseiten belegt GLOBAL-036 das Schablonenmuster.*
- [x] Links auf die echten Detailseiten und sinnvolle Beratung bei Unsicherheit prüfen. → *Teilweise BESTANDEN: Alle 18 Menü- und Footer-Links führen auf 200-Seiten (N009). BEFUND: In den Startseitenkarten sind die Leistungsnamen nicht verlinkt, und „Mehr erfahren“ führt jeweils auf die erste Leistung der Gruppe, nicht auf eine Übersicht (SEITE-P02-001). Einen Beratungsweg „Ich weiß nicht, was ich brauche“ gibt es nicht, der Formularwert „Beratung“ kommt dem am nächsten.*
- [x] Großzügiges Raster nicht durch inhaltsarme Karten erzwingen; ausreichende Information pro Option verlangen. → *BEFUND: Die Startseitenkarten füllen ein Drei-Spalten-Raster mit großen Symbolen und Stichwortlisten, je Leistung gibt es null erklärende Wörter.*
- [x] Titel, H1 und Einstieg klar als Übersicht statt als konkurrierende Detailseite ausrichten. → *NICHT ANWENDBAR im Bestand. Vorgabe für die neue Seite siehe Abschnitt 4.*

## 3. Individuellen Ist-Zustand erfassen

| Feld | Ist-Zustand | Soll/Vorschlag | Nachweis |
|---|---|---|---|
| URL und Statuscode | `/leistungen` 404, ebenso `/basis`, `/business`, `/premium` | Neue Seite `/leistungen` mit 200 | N008 |
| Hauptzielgruppe und Suchintention | Orientierung: „Was bietet die Firma an, was passt zu mir?“ (navigational/kommerziell). Heute nur über Menü, Startseite, Footer bedient | Übersicht für Verwaltungen, Eigentümer und Gewerbe (Zielgruppen nach R10) | N009, N014 |
| Meta-Title | — (keine Seite) | Siehe Vorgabe | — |
| Meta-Description | — | Siehe Vorgabe | — |
| H1 und Abschnittsstruktur | Ersatz auf der Startseite: H2 „Unsere Reinigungsdienstleistungen“, drei H3-Karten. Im Mega-Menü drei H3 („Premium Services“, „Business Lösungen“, „Basisreinigung“) | Siehe Abschnittsfolge | Code `app/page.tsx:198-307`, `SwissNavigation.tsx:84-108` |
| Canonical/Robots/Sitemap | — | Selbstreferenzierendes Canonical, in die Sitemap aufnehmen | — |
| Wichtigste Textpassagen | Startseite: „Von Premium-Services für Luxusimmobilien bis zur professionellen Gebäudereinigung für Unternehmen – wir bieten maßgeschneiderte Reinigungslösungen für jeden Bedarf.“ | Auswahl nach Ausgangslage statt Werbesatz | N027 |
| Haupt-CTA und Ziel | Karten: „Mehr erfahren“ → erste Leistung der Gruppe (`/premium/privatjet`, `/business/bueroreinigung`, `/basis/unterhaltsreinigung`) | Je Leistung „[Leistung] ansehen“, am Ende „Kostenlose Offerte vor Ort anfragen“ | Code `app/page.tsx:236, 265, 294` |
| Bildmotive und Alt-Texte | Ersatzflächen: nur Symbole (Lucide), keine Bilder | Keine Bilder nötig. Optional je Leistung ein echtes Einsatzfoto | — |
| Interne Links | Menü und Footer: 18 Leistungslinks auf allen 32 Seiten. Startseitenkarten: 3 Links | Übersicht verlinkt jede bestätigte Leistung. Alle Leistungsseiten verlinken zurück (Breadcrumb) | N009 |
| Schema-Typen | keine | `CollectionPage` mit `ItemList` der `Service`-Einträge | — |
| Mobile/Desktop/Accessibility | Mega-Menü nur per Maus: Der Button „Leistungen“ öffnet auf `mouseenter`, ohne `aria-expanded`, per Enter nicht bedienbar. Mobil zeigt das Menü die drei Gruppen als Überschriften ohne Link | Übersichtsseite als tastaturbedienbare Alternative, Menü nach GLOBAL-026 | N031, Code `SwissNavigation.tsx:71-80, 176-210` |
| Performance/Ladeabhängigkeiten | — | Budgets aus Abschnitt I, keine Bilder über 100 KB | — |
| Globale Abhängigkeiten | GLOBAL-010, -026, -028, -030, -033, -034, -036, -037 | — | 01 |

## 4. Konkrete redaktionelle und technische Vorgaben

Grundlage sind nur die Eigenangaben des Kunden (N014): zwei Bereiche, **Gebäudereinigung** (regelmässige Unterhaltsreinigung; Aussen- und Facility-Services; Spezial- und Sonderreinigungen) und **Hauswartung** (klassischer Hausmeisterservice; infrastrukturelle Pflege; Winterdienst; Aussen- und Grünflächenpflege), Kantone Luzern und Zug, kostenlose Offerte vor Ort. Die endgültige Liste folgt aus R3.

- **Meta-Title soll lauten:** „Leistungen: Gebäudereinigung und Hauswartung in Luzern und Zug | BGS Gebäudeservice“. Begründung: Übersichtscharakter („Leistungen“), die beiden realen Bereiche, reale Region. Konkurriert nicht mit den Detailseiten, weil keine Einzelleistung im Titel steht.
- **Meta-Description soll lauten:** „Unterhaltsreinigung, Sonderreinigungen, Hauswartung, Winterdienst sowie Aussen- und Grünflächenpflege in den Kantonen Luzern und Zug. Finden Sie die passende Leistung und fordern Sie eine kostenlose Offerte vor Ort an.“ Die Aufzählung an R3 anpassen.
- **URL-Slug:** `/leistungen` neu anlegen (heute 404, deshalb keine Weiterleitung nötig). Die bestehenden Detail-Slugs zunächst behalten. Werden sie später unter `/leistungen/…` zusammengeführt, braucht jede alte URL eine 308-Weiterleitung und einen Eintrag im Alt-neu-Mapping in 02 [S07]. Die 404-Pfade `/basis`, `/business`, `/premium` entfallen mit der neuen Struktur oder leiten per 308 auf `/leistungen` weiter.
- **H1-Vorschlag:** „Unsere Leistungen: Gebäudereinigung und Hauswartung in Luzern und Zug“
- **Abschnittsfolge:**
  1. Einstieg (2 Sätze): Wer BGS ist und dass Reinigung und Hauswartung aus einer Hand kommen können. Den zweiten Teil nur, wenn der Kunde das Kombinationsangebot bestätigt (R3).
  2. Bereich Gebäudereinigung: je bestätigter Leistung eine Karte mit Name, einem Satz „passt, wenn …“ und dem Link „[Leistung] ansehen“.
  3. Bereich Hauswartung: gleich aufgebaut.
  4. Auswahlhilfe „Welche Leistung passt?“ als Tabelle Ausgangslage → Leistung, zum Beispiel „Büro oder Treppenhaus soll laufend sauber sein → Unterhaltsreinigung“, „Einmalige intensive Reinigung nötig → Sonderreinigung“, „Liegenschaft braucht regelmässige Betreuung und Kontrolle → Hauswartung“, „Schnee und Glätte auf Wegen und Parkplätzen → Winterdienst“, „Rasen, Hecken und Umgebung → Aussen- und Grünflächenpflege“. Jede Zeile vom Kunden bestätigen lassen.
  5. Einzugsgebiet in einem Satz (Kantone Luzern und Zug) mit Link auf die künftige Einzugsgebietsseite (P09).
  6. Unsicher? „Beschreiben Sie Ihre Liegenschaft, wir schlagen die passende Kombination vor.“ mit dem Link zum Formular, Leistung vorbelegt mit „Beratung“.
- **Zu streichende oder zu ersetzende Passagen (auf den heutigen Ersatzflächen):**
  - Startseite „Von Premium-Services für Luxusimmobilien bis zur professionellen Gebäudereinigung für Unternehmen – wir bieten maßgeschneiderte Reinigungslösungen für jeden Bedarf.“ → „Gebäudereinigung und Hauswartung für Liegenschaften und Gewerbe in den Kantonen Luzern und Zug.“ Grund: Premium-Fokus unbestätigt (SEITE-P01-001), „für jeden Bedarf“ ist unkonkret.
  - Gruppennamen „Premium Services“, „Business Lösungen“/„Business Services“/„B2B Lösungen“, „Basisreinigung“/„Basis Services“ → „Gebäudereinigung“ und „Hauswartung“, wie der Kunde selbst gliedert (N014). Grund: Aufgabe statt Preisstufe, ein einheitlicher Name je Gruppe.
  - Startseitenkarte „Business Lösungen“ mit „Fassaden- & Fensterreinigung“ als einem Punkt, obwohl es zwei Seiten gibt → je Leistung ein eigener, verlinkter Eintrag.
- **Bilder:** Keine erforderlich. Wenn Bilder, dann je Leistung ein echtes, freigegebenes Einsatzfoto (AVIF/WebP, ca. 400 px breit, `loading="lazy"`, ≤ 60 KB), Alt-Text nach Inhalt. Symbole dekorativ mit `alt=""` bzw. `aria-hidden` [S17].
- **Strukturierte Daten:** `CollectionPage` mit `ItemList`, deren Einträge auf die `Service`-Objekte der Detailseiten (`@id` = Canonical der Detailseite) verweisen. `BreadcrumbList` „Start › Leistungen“. Kein Rich Result versprechen, das Markup beschreibt nur die Seite [S10][S11].
- **Linkempfehlungen:**
  - Hauptmenü: Der Button „Leistungen“ wird zu einem Link auf `/leistungen` oder erhält einen ersten Menüeintrag „Alle Leistungen im Überblick“. So gibt es einen tastaturbedienbaren Weg (GLOBAL-026).
  - Startseite: Abschnittslink „Alle Leistungen ansehen“ auf `/leistungen`.
  - Jede Leistungsseite: Breadcrumb „Start › Leistungen › [Leistung]“ mit Link auf `/leistungen`.
  - Footer: Spaltentitel „Leistungen“ verlinkt auf `/leistungen`.
  - Von der Übersicht auf jede bestätigte Leistung mit dem Linktext „[Leistung] ansehen“, z. B. „Unterhaltsreinigung ansehen“ → `/basis/unterhaltsreinigung`.

Titel und Snippets sind Vorgaben, keine Garantie für die Google-Anzeige. [S08][S09] Bildalternativen hängen vom Zweck ab. [S17] Seitenspezifische URL-Änderungen benötigen einen passenden Migrationsplan. [S07]

## 5. Befunde und Hypothesen

Das Fehlen der Übersichtsseite selbst führt der globale Befund GLOBAL-033 (keine Übersichtsseiten, keine Breadcrumbs). Seitenspezifisch:

### SEITE-P02-001 · Die Ersatzflächen führen nicht zur passenden Leistung

- **Ist-Zustand:** In den drei Startseitenkarten sind die Leistungsnamen reiner Text mit Häkchen (`app/page.tsx:228-234`). Nur „Mehr erfahren“ ist verlinkt, und zwar auf die jeweils erste Leistung der Gruppe: `/premium/privatjet`, `/business/bueroreinigung`, `/basis/unterhaltsreinigung`. Die Karte „Business Lösungen“ nennt 4 von 9 Leistungen. Das Mega-Menü ist nur per Maus zu öffnen (N031).
- **Auswirkung:** Wer zum Beispiel „Winterdienst“ in der Karte sieht, landet nach „Mehr erfahren“ auf der Unterhaltsreinigung. Weil das Menü seine Links erst nach dem Mausereignis in die Seite einfügt, erreichen Tastaturnutzende am Desktop die meisten Leistungen nur über den Footer.
- **Priorität:** P2 · **Launch-Blocker:** nein
- **Vorgabe:** Übersichtsseite `/leistungen` nach Abschnitt 4. In den Startseitenkarten jeden Leistungsnamen verlinken und „Mehr erfahren“ durch „Alle Leistungen ansehen“ → `/leistungen` ersetzen.
- **Abnahme:** Jede auf der Startseite genannte Leistung ist mit einem Klick erreichbar. `/leistungen` antwortet mit 200 und ist per Tastatur aus dem Hauptmenü erreichbar.
- **Evidenz:** Codebefund `app/page.tsx:228-297`, Renderbefund N020, N031. **Quelle:** S02, S04

### SEITE-P02-002 · Dieselben Leistungen tragen je nach Stelle unterschiedliche Namen

- **Ist-Zustand:**

  | Leistung | Mega-Menü | Footer-Links | Formular | H1 der Seite |
  |---|---|---|---|---|
  | Gruppe 2 | „Business Lösungen“ | „Business Services“ | „B2B Lösungen“ und zusätzlich „Business Services“ (Dubletten) | — |
  | Gruppe 3 | „Basisreinigung“ | „Basis Services“ | „Basis Services“ | — |
  | Aussenanlagen | „Außenanlagenpflege“ | „Außenanlagen“ | „Außenanlagen“ / „Business Außenanlagen“ | „Außenanlagen & Grünflächenpflege“ |
  | Beschaffung | „Beschaffungsmanagement“ | „Beschaffung“ | „Beschaffung“ | „Professionelles Beschaffungsmanagement“ |
  | Luxusimmobilien | „Luxusimmobilien“ | „Luxusimmobilien“ | „Luxusimmobilien“ | „Luxusimmobilien-Reinigung“ |

  Hinzu kommt die Schreibweise „ß“ statt Schweizer „ss“ (GLOBAL-037). Die Zürich-Seite erzeugt aus solchen Anzeigenamen sogar Links auf nicht existierende URLs (GLOBAL-016).
- **Auswirkung:** Nutzende können nicht sicher erkennen, ob „Außenanlagenpflege“ und „Außenanlagen“ dasselbe Angebot sind. Im Formular wählen sie zwischen Dubletten, was die Auswertung der Anfragen verfälscht (GLOBAL-028).
- **Priorität:** P2 · **Launch-Blocker:** nein
- **Vorgabe:** Eine zentrale Leistungsliste (Name, Kurzname, Slug, Bereich) als einzige Quelle für Menü, Footer, Übersicht, Formular und Links. Namen nach R3 festlegen, in Schweizer Schreibweise.
- **Abnahme:** Ein Abgleich von Menü, Footer, Übersicht, Formular und H1 ergibt je Leistung genau einen Namen. Keine Formularoption ist doppelt.
- **Evidenz:** Codebefund `SwissNavigation.tsx:21-45`, `SwissFooter.tsx:143-180, 295-326`, N009, N027. **Quelle:** S02

## 6. Abnahme nach einer später separat freigegebenen Umsetzung

- [ ] Seitenzweck und Abgrenzung zu anderen Seiten nachvollziehbar.
- [ ] Fachliche Aussagen bestätigt und Textvorschläge redaktionell freigegeben.
- [ ] Metadaten, Links und Indexierungssteuerung stimmen mit dem Seitenzweck überein.
- [ ] Relevante Darstellungs-/Bedienungszustände geprüft.
- [ ] Kritische Seite-/Backend-Abhängigkeiten nachgewiesen oder ausdrücklich offen markiert.
- [ ] Kein ungeklärter Launch-Blocker für diese Seite.

**Aktuelles Seitenurteil: BEFUND, die erwartete Seite fehlt.** Die Übersichtsseite ist nicht zwingend für den Launch, aber die Leistungsliste hängt an R3. Ohne sie lassen sich Übersicht, Menü und Formular nicht festlegen. Launch-Blocker entstehen hier nur mittelbar über GLOBAL-010 und -021 auf den Detailseiten.

---

**Quellen zu dieser Datei:** siehe ../09-QUELLEN.md (S02, S04, S07, S08, S09, S10, S11, S17).

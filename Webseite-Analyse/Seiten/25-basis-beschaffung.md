# Seitenanalyse: Zusätzliche Leistungsseite · Beschaffungsmanagement

**Seiten-ID: P25 (Inventar U23)**  
**Status: Seitenprüfung durchgeführt am 24.09.2026. Seitenurteil: BEFUND, nicht freigabefähig.**  
**URL:** `https://bgs-gebaeudeservice.vercel.app/basis/beschaffung` · **Codepfad:** `app/basis/beschaffung/page.tsx` (324 Zeilen) · **Stand:** `d7e1122`

**Zuordnung:** Zusätzlicher Bericht für eine vorhandene URL (E09). Leistungsstatus: in der Eigenangabe des Kunden (N014) nicht genannt → R3.

## 1. Aufgabe dieser Seite

Eine konkrete Leistungsentscheidung ermöglichen und passende Interessenten zur qualifizierten Anfrage führen.

**Abgrenzung:** Ein primärer Themen-/Intent-Cluster. Allgemeine Unternehmensdarstellung kurz halten; verwandte Leistungen nur erklärend verlinken. Keine pauschale Canonical-Verweisung auf eine andere Leistung.

**Primäre Zielhandlung:** Eine konkrete Anfrage zu dieser Leistung mit nachvollziehbarem weiteren Ablauf; CTA-Wortlaut erst nach Prüfung ausschreiben.

**Ergebnis der Prüfung:** Die Seite beschreibt keinen eigenständigen Dienst, sondern das Nachfüllen von Reinigungsmitteln und Verbrauchsmaterial während der Reinigungseinsätze („Unsere Reinigungskräfte prüfen bei jedem Einsatz die Bestände.“). Sie nennt das „Beschaffungsmanagement“, „automatisch“ und „Prozess & System“, obwohl der eigene Text eine Sichtkontrolle durch Mitarbeitende beschreibt (SEITE-P25-001). Die Angaben zur Lagerung widersprechen sich (SEITE-P25-002). Umfang: 158 sichtbare Wörter, weitere 173 in Reitern. Die Reiter „Prozess & System“ und „Service-Pakete“ sowie alle FAQ-Antworten fehlen im ausgelieferten HTML (GLOBAL-011), obwohl gerade die FAQ die praktischen Fragen beantworten. Die Leistung ist in der Eigenangabe nicht genannt (R3) und fehlt auf der Startseite in der Kategorie „Basisreinigung“. Fachlich gehört sie am ehesten zur Unterhaltsreinigung (HYPOTHESE, SEITE-P25-003). Ohne Bestätigung gilt für den Launch Pfad (b) in Abschnitt 4: 308 auf `/basis/unterhaltsreinigung`.

## 2. Seitenspezifische Prüfliste

- [x] Den tatsächlichen Namen und URL-Slug der Leistung aus dem bestätigten Zielprojekt ermitteln; anschließend Datei und Inventar konsistent umbenennen. → *Erledigt: `/basis/beschaffung` (U23), zusätzlicher Bericht P25 (E09). Die Navigation nennt die Seite „Beschaffungsmanagement“, Footer und Formular „Beschaffung“. Ob die Leistung angeboten wird, ist offen (R3).*
- [x] Kaufanlass, primäre Entscheiderrolle und Problemstellung anhand realer Angaben festhalten. → *NICHT PRÜFBAR: Die Pakete nennen „Ideal für kleine Objekte“, „Ideal für Gewerbe“ und „Ideal für große Objekte“, reale Angaben fehlen (R3, R10). HYPOTHESE: bestehende Reinigungskunden, die den Nachschub an Seife, Papier und Reinigungsmitteln nicht selbst organisieren wollen.*
- [x] Leistungsumfang, konkrete Tätigkeiten, Ergebnis und Grenzen verständlich beschreiben. → *BEFUND: zwölf Produktstichworte im ersten Reiter. Wer bestellt, wer Vertragspartner beim Warenkauf ist, wie abgerechnet wird und was nicht geliefert wird, fehlt (GLOBAL-036).*
- [x] Die Abgrenzung zu jeder der vier anderen Leistungen separat prüfen; keine bloßen Synonyme als eigenständiges Angebot verkaufen. → *BEFUND: Die Leistung hängt an den Reinigungseinsätzen (FAQ Z. 265), also an der Unterhaltsreinigung (P03) bzw. Hauswartung (P04). Keine Seite erklärt das Zusammenspiel. Kannibalisierung und Zusammenlegung → Phase 4 (SEITE-P25-003).*
- [x] Eignung und Nicht-Eignung erklären, soweit dies Kunden bei der Auswahl hilft. → *BEFUND: nur die Paket-Schlagworte „kleine Objekte“, „Gewerbe“, „große Objekte“.*
- [x] Zusammenarbeit, Mitwirkung, Schritte und realistische Zeit-/Kostenfaktoren prüfen; keine Zahlen ohne belastbare Grundlage nennen. → *BEFUND: Der Ablauf (Bedarfsanalyse → Überwachung → Bestellung → Lieferung und Lagerung) steht nur im zweiten Reiter, nicht im HTML, und widerspricht der FAQ zur Lagerung (SEITE-P25-002). „Mengenrabatten“ und „Optimierte Mengen & Preise“ ohne Grundlage. Die Pakete „Basic“, „Standard“, „Premium“ haben keinen unterscheidbaren Preisinhalt.*
- [x] Mindestens die vorhandenen relevanten Belege auf Eignung prüfen; fehlende Belege explizit vom Unternehmen anfordern, nicht erfinden. → *BEFUND: keine Belege. „Öko-Zertifizierungen“ werden nicht benannt, „genauso effektiv wie konventionelle Produkte“ ist unbelegt (GLOBAL-021). Angefordert über R6.*
- [x] Leistungsspezifische Bilder oder nachvollziehbare Ablaufdarstellungen beurteilen; nicht das gleiche generische Motiv auf allen Seiten verwenden. → *BEFUND: ein KI-typisches Motiv (`beschaffung-hero.jpg`, 1536×1024): Materialraum mit Kanistern und Flaschen, deren Etiketten durchgehend leer sind, ohne Personen (Einschätzung, GLOBAL-023). Als neutrale Illustration weniger heikel als Personenbilder, darf aber nicht als Lager von BGS erscheinen. Eine Ablaufgrafik fehlt, obwohl der Ablauf der Kern der Leistung ist.*
- [x] Echte Einwände, FAQ und Risikofragen beantworten; FAQ-Schema nicht als Google-Pflicht behandeln. → *Teilweise: vier praktische Fragen (Ablauf, eigene Produkte, ökologische Produkte, Lagerung), die echte Entscheidungsfragen treffen. Die Antworten sind nicht im HTML (GLOBAL-011), eine widerspricht einem Reiter (SEITE-P25-002). Kein FAQ-Schema vorhanden, auch keines nötig.*
- [x] Anfrage-CTA, Vorbelegung und Formularfelder auf diese Leistung abstimmen, ohne den globalen Kontaktprozess zu duplizieren. → *BEFUND: „Jetzt anfragen“ springt zum allgemeinen Formular ohne Vorbelegung. Der Abschluss verspricht ein „kostenloses Beratungsgespräch“ und ein „maßgeschneidertes Beschaffungskonzept“. Die Option heißt „Beschaffung“, in einer Auswahl mit Dubletten (GLOBAL-028).*
- [x] Leistungsregionen nur nennen, wenn die Leistung dort tatsächlich angeboten wird. → *BEFUND: „in Zürich, Zug und Luzern“, laut Eigenangabe nur LU/ZG (GLOBAL-021, R4).*
- [x] Für jede vorgeschlagene neue Behauptung einen fachlichen Freigabeinhaber benennen. → *Erledigt: Freigabe durch die Geschäftsführung des Kunden (R12). Aussagen zu Produkten und Öko-Labels nur mit Produktliste.*

## 3. Individuellen Ist-Zustand erfassen

| Feld | Ist-Zustand | Soll/Vorschlag | Nachweis |
|---|---|---|---|
| URL und Statuscode | `/basis/beschaffung`, 200 | Pfad (a): beibehalten oder zusammenlegen (SEITE-P25-003). Pfad (b): 308 auf `/basis/unterhaltsreinigung` | N007 |
| Hauptzielgruppe und Suchintention | „kleine Objekte“, „Gewerbe“, „große Objekte“. Intent unklar: „Beschaffungsmanagement“ steht allgemein für Einkaufsorganisation, die Seite beschreibt aber Nachschub von Reinigungs- und Hygienematerial durch den Reinigungsdienst (HYPOTHESE) | Erst R3, dann Zielgruppe (R10) und Begriffswahl mit Suchdaten (Phase 4) | N027 |
| Meta-Title | Globaler Standardtitel (identisch auf 32 Seiten). Der hinterlegte, nicht ausgegebene Titel lautet „Beschaffungsmanagement Zürich, Zug & Luzern - Swiss Reinigungsfirma“ (falsche Marke, unbelegte Region) | Pfad (a): siehe Vorgabe unten. Pfad (b): entfällt | N007, N015, GLOBAL-009, -010, -020 |
| Meta-Description | Globale Standardbeschreibung. Hinterlegt, nicht ausgegeben: „Professionelles Beschaffungsmanagement in der Schweiz. Reinigungsmittel und Verbrauchsmaterialien automatisch und bedarfsgerecht.“ | Pfad (a): siehe Vorgabe unten | N007, N015 |
| H1 und Abschnittsstruktur | Badge „Basis Service“, H1 „Professionelles Beschaffungsmanagement“. Danach H3 „Umfassendes Beschaffungsmanagement“ (im Reiter), H2 „Häufig gestellte Fragen“ mit vier H3-Fragen, H2 „Bereit für automatisches Beschaffungsmanagement?“. Der Cookie-Banner bringt ein H3 vor die H1 | Pfad (a): siehe Abschnittsfolge unten | N020, Faktenblatt |
| Canonical/Robots/Sitemap | kein Canonical, `index, follow`, in der Sitemap (`public/sitemap.xml:113`, `lastmod` 2025-01-02) | Pfad (a): selbstreferenzierendes Canonical auf die Launch-Domain. Pfad (b): Sitemap-Eintrag entfernen | N007, N008 |
| Wichtigste Textpassagen | „Automatische Beschaffung von Reinigungsmitteln und Verbrauchsmaterialien in Zürich, Zug und Luzern. Bedarfsgerecht, nachhaltig und kosteneffizient.“ Merkmalskarten „Automatisch – Bedarfsgerechte Nachbestellung“, „Zeitsparend – Keine manuelle Bestellung nötig“, „Kosteneffizient – Optimierte Mengen & Preise“, „Nachhaltig – Ökologische Produkte“ | Tatsächlichen Ablauf beschreiben (Abschnitt 4) | N027, Code Z. 50, 80-99 |
| Haupt-CTA und Ziel | „Jetzt anfragen“ → `#kontakt-formular` (Footer), „Termin vereinbaren“ → Chat (defekt). Abschluss „Jetzt Kontakt aufnehmen“ mit „Kontaktieren Sie uns für ein kostenloses Beratungsgespräch. Wir erstellen ein maßgeschneidertes Beschaffungskonzept.“ | Pfad (a): eine primäre CTA „Kostenlose Offerte vor Ort anfragen“ mit vorbelegter Leistung | N020, GLOBAL-002, -034 |
| Bildmotive und Alt-Texte | 1 Hero-Bild `beschaffung-hero.jpg` (199 KB, KI-typisch nach Einschätzung, leere Etiketten), Alt „Beschaffungsmanagement“ (beschreibt nicht den Inhalt), 1536×1024 geliefert, 666×517 dargestellt (mobil 356×547) | Pfad (a): echtes Foto oder Ablaufgrafik, Alt nach Inhalt. Pfad (b): Datei entfernen | N029, Sichtprüfung |
| Interne Links | Keine Kontextlinks. Eingehend: Navigation („Beschaffungsmanagement“) und Footer („Beschaffung“) auf allen Seiten. Nicht in der Startseiten-Kategorie „Basisreinigung“ (`app/page.tsx:287`). Der Link aus dem Basis-Reiter von `/standorte/zuerich` zielt auf `/basis/beschaffungsmanagement` (404, nur nach Klick gerendert) | Siehe Linkempfehlungen bzw. Entfernungsliste | N009, N024, GLOBAL-016 |
| Schema-Typen | keine. Das vorbereitete `serviceSchema` (`category: "Procurement Management"`) wird nicht ausgegeben | Pfad (a): `Service` nur bei eigener Seite | N007, N015 |
| Mobile/Desktop/Accessibility | Kein Overflow. axe: 6 Kontrastverstöße, 25 zu kleine Klickziele | Siehe GLOBAL-026 | N031 |
| Performance/Ladeabhängigkeiten | ca. 2,0 MB, 83 Anfragen (Desktop, dekodiert). LCP-Element im Browser-Test: das Hero-Bild | Budgets aus Abschnitt I | N020 |
| Globale Abhängigkeiten | GLOBAL-002, -003, -009, -010, -011, -012, -013, -016, -020, -021, -023, -024, -026, -028, -030, -033, -034, -036, -037 | — | 01 |

## 4. Konkrete redaktionelle und technische Vorgaben

Ob die Seite bleibt, entscheidet die Antwort auf R3. Bis zu einer schriftlichen Bestätigung gilt für den Launch **Pfad (b)**, weil eine unbestätigte Leistung eine unfreigegebene Behauptung ist (G09, GLOBAL-021). Auch bei Bestätigung ist in Phase 4 zu prüfen, ob die Leistung als Abschnitt der Unterhaltsreinigung besser aufgehoben ist (SEITE-P25-003).

**Pfad (a): Die Leistung wird durch R3 bestätigt.** Die Vorschläge nutzen nur Fakten aus der Eigenangabe des Kunden (N014: BGS Gebäudeservice GmbH, Arbeitsgebiet Kanton Luzern und Kanton Zug, „regelmässige Unterhaltsreinigung“, „kostenlose und unverbindliche Offerte“ nach einem Besuch vor Ort) und die bestätigte Leistung. Sie gelten, sobald R2 (Marke), R3 (Leistung und Ablauf) und R4 (Region) beantwortet sind.

- **Meta-Title soll lauten:** „Nachfüllservice für Reinigungs- und Hygienematerial in Luzern und Zug | BGS Gebäudeservice“. Begründung: beschreibt, was Kunden tatsächlich bekommen, statt des allgemeinen Einkaufsbegriffs „Beschaffungsmanagement“ (Suchintention als HYPOTHESE in Phase 4 prüfen). Reale Region, Marke zur Wiedererkennung.
- **Meta-Description soll lauten:** „Seife, Papier, Müllsäcke und Reinigungsmittel: Auf Wunsch prüfen wir bei der Unterhaltsreinigung Ihre Bestände und sorgen für Nachschub – in den Kantonen Luzern und Zug. Die Offerte ist kostenlos und unverbindlich.“ Den Ablauf nach R3 bestätigen lassen.
- **URL-Slug:** Slug `beschaffung` beibehalten, solange die Seite eigenständig bleibt. Bei Zusammenlegung mit der Unterhaltsreinigung per 308 auf `/basis/unterhaltsreinigung` weiterleiten und das Mapping in 02 dokumentieren [S07].
- **H1-Vorschlag:** „Nachfüllservice für Reinigungs- und Hygienematerial“
- **Abschnittsfolge (nur hilfreiche Inhalte, sichtbar im HTML):**
  1. Einstieg aus Kundensicht (Problem → Lösung): Es fehlt Seife oder Papier, niemand fühlt sich zuständig. Die Lösung in 2–3 Sätzen.
  2. Welche Materialien: die bestätigte Liste als sichtbarer Text (heute im ersten Reiter).
  3. Ablauf: Bestandsprüfung beim Reinigungseinsatz → Meldung → Lieferung → Auffüllen. Dazu, wer bestellt, wer Vertragspartner ist und wie abgerechnet wird. Nur Schritte, die der Kunde bestätigt.
  4. Lagerung: eine einzige, klare Aussage (SEITE-P25-002).
  5. Eigene Produkte des Kunden: Die heutige FAQ-Aussage „Ja, Sie können Ihre bevorzugten Marken und Produkte wählen.“ ist hilfreich, wenn sie bestätigt ist.
  6. FAQ mit sichtbaren Antworten, mindestens die vier bestehenden Fragen.
  7. Abschluss-CTA „Kostenlose Offerte vor Ort anfragen“, das Formular mit vorausgewählter Leistung.
- **Zu streichende oder zu ersetzende Passagen:**
  - „Automatische Beschaffung von Reinigungsmitteln und Verbrauchsmaterialien in Zürich, Zug und Luzern. Bedarfsgerecht, nachhaltig und kosteneffizient.“ (Z. 50) → „Wir prüfen bei jedem Reinigungseinsatz Ihre Bestände an Reinigungs- und Hygienematerial und sorgen rechtzeitig für Nachschub – in den Kantonen Luzern und Zug.“ Grund: beschreibt den tatsächlichen Ablauf laut FAQ, „automatisch“ ist irreführend (SEITE-P25-001), Region (R4).
  - Merkmalskarten „Automatisch – Bedarfsgerechte Nachbestellung“, „Zeitsparend – Keine manuelle Bestellung nötig“, „Kosteneffizient – Optimierte Mengen & Preise“, „Nachhaltig – Ökologische Produkte“ (Z. 80-99) → streichen. Ersatz nur durch bestätigte Fakten, z. B. „Auf Wunsch mit Ihren eigenen Produkten“. Grund: unbelegte Versprechen (GLOBAL-021).
  - Reiter-Titel „Prozess & System“ (Z. 105), Überschrift „Intelligenter Beschaffungsprozess“ (Z. 155) und Schritt „Automatische Überwachung“ (Z. 163-164) → „So läuft der Nachfüllservice ab“. Grund: Es ist kein System belegt (SEITE-P25-001).
  - „Wir bestellen in optimalen Mengen direkt beim Hersteller. Sie profitieren von Mengenrabatten ohne selbst große Lagerbestände halten zu müssen.“ (Z. 168) → nur, wenn bestätigt, sonst streichen. Grund: unbelegt und im Widerspruch zur Lagerung beim Kunden (SEITE-P25-002).
  - „Die Produkte werden direkt zu Ihnen geliefert und von uns fachgerecht gelagert.“ (Z. 172) und „Die Produkte werden in Ihren Räumlichkeiten in einem dafür vorgesehenen Lagerbereich gelagert.“ (Z. 292) → eine gemeinsame Aussage, z. B. „Das Material lagert in einem Raum in Ihrem Gebäude. Wir halten ihn geordnet und füllen ihn bei Bedarf auf.“, nur wenn so zutreffend.
  - FAQ-Antwort „Selbstverständlich. Wir bieten ein vollständiges Sortiment an umweltfreundlichen Reinigungsmitteln mit Öko-Zertifizierungen, die genauso effektiv sind wie konventionelle Produkte.“ (Z. 283) → nur mit Nennung der tatsächlichen Produkte und Labels. Den Wirksamkeitsvergleich streichen. Grund: überprüfbare Umwelt- und Wirksamkeitsaussage ohne Beleg.
  - Reiter „Service-Pakete“ mit „Basic“, „Standard“, „Premium“ (Z. 184-255) → ersetzen durch einen Satz: „Umfang und Preis legen wir nach der Besichtigung fest. Die Offerte ist kostenlos und unverbindlich.“ Grund: Die Pakete haben keinen unterscheidbaren Inhalt (GLOBAL-036).
  - Abschluss „Bereit für automatisches Beschaffungsmanagement?“ und „… Wir erstellen ein maßgeschneidertes Beschaffungskonzept.“ (Z. 303-306) → „Nachfüllservice anfragen“. Grund: Die CTA soll sagen, was passiert (GLOBAL-034).
  - „Professionelles Beschaffungsmanagement“ (H1) → siehe H1-Vorschlag. Grund: Schablonenformel „Professionelle …“ (GLOBAL-030).
  - Schreibweisen „Maßgeschneidertes“, „maßgeschneidertes“, „Objektgröße“, „große“ → „Massgeschneidertes“, „massgeschneidertes“, „Objektgrösse“, „grosse“ (GLOBAL-037).
- **Bilder:** Echtes, freigegebenes Foto eines aufgefüllten Spenders oder Materialraums in einem betreuten Objekt (mit Einwilligung des Auftraggebers) oder eine einfache Ablaufgrafik (Prüfen → Melden → Liefern → Auffüllen) als SVG mit Textalternative. Kein KI-Bild mit leeren Etiketten. Fotos als AVIF/WebP mit `sizes` (mobil ca. 355–390 px, Desktop ca. 670 px), Budget ≤ 150 KB mobil. Alt-Text nach Inhalt, z. B. „Aufgefüllter Seifenspender in einem Sanitärraum“, nur wenn das Bild das zeigt. Nutzungsrecht dokumentieren.
- **Strukturierte Daten:** Bleibt die Seite eigenständig: `Service` mit `name` „Nachfüllservice für Reinigungs- und Hygienematerial“, `serviceType` „Verbrauchsmaterial-Service“, `provider` = die globale Organisation BGS Gebäudeservice GmbH (gleiche ID wie auf allen Seiten), `areaServed` „Kanton Luzern“ und „Kanton Zug“ (nach R4), `url` = Canonical. Bei Zusammenlegung kein eigenes Markup, die Leistung ist dann Teil des `Service` der Unterhaltsreinigung. Kein FAQ-Schema [S13].
- **Linkempfehlungen:**
  - Von `/basis/unterhaltsreinigung` (Abschnitt Leistungsumfang) hierher mit dem Linktext „Nachfüllservice für Verbrauchsmaterial“ und von hier zurück mit „Unterhaltsreinigung“.
  - Von `/basis/hausmeisterservice` mit dem Linktext „Nachfüllservice für Verbrauchsmaterial“, sofern der Kunde die Leistung auch bei der Hauswartung erbringt.
  - Den defekten Link `/basis/beschaffungsmanagement` auf `/standorte/zuerich` entfernen oder auf `/basis/beschaffung` korrigieren, aber nur, wenn Zürich bestätigt ist (GLOBAL-016, R4).

**Pfad (b): Die Leistung wird nicht bestätigt (Launch-Vorgabe bis zur Antwort).**

- **Statuscode:** `/basis/beschaffung` leitet per 308 auf `/basis/unterhaltsreinigung` weiter. Begründung: Die Seite beschreibt das Nachfüllen während der Reinigungseinsätze, die fachlich nächste bestätigte Leistung ist die „regelmässige Unterhaltsreinigung“ (N014). Die Weiterleitung ist einstufig und endet auf einer 200-Seite, keine Weiterleitung auf die Startseite [S07]. Laut Runtime-Logs gibt es praktisch keinen Besucherverkehr (N012), Suchdaten fehlen (B11).
- **Entfernen aus:**
  - Navigation: `client/src/components/SwissNavigation.tsx:44` (Array `basisServices`, speist das Mega-Menü Z. 110 und das mobile Menü Z. 204).
  - Footer-Spalte „Basis Services“: `client/src/components/SwissFooter.tsx:325`.
  - Formularauswahl: Option „Beschaffung“, `SwissFooter.tsx:178` (Gruppe „Basis Services“).
  - Sitemap: `public/sitemap.xml:113` (Eintrag Z. 112-117).
  - Startseite: nicht betroffen, die Kategorie „Basisreinigung“ führt die Leistung nicht (`app/page.tsx:287`).
  - Standortseiten: `app/standorte/zuerich/page.tsx:159` (Karte im Basis-Reiter mit defektem Link, GLOBAL-016), `app/standorte/zug/page.tsx:157` (Karte „Beschaffungsmanagement“ im Facility-Reiter).
  - KI-Chat-Katalog: `server/gemini.ts:154-158` (Code „BE“, sofern der Chat bleibt, R8). Die Code-Liste im Prompt (Z. 685) nennt „BE“ schon heute nicht.
  - Bilddatei `public/beschaffung-hero.jpg` und die Kopie in `client/public/` (GLOBAL-008, -024).
- **Alt-neu-Mapping (in 02 eintragen, G10):**

| Bisherige URL | Neues Ziel | Status | Begründung |
|---|---|---|---|
| `/basis/beschaffung` | `/basis/unterhaltsreinigung` | 308 | fachlich nächste bestätigte Leistung, das Nachfüllen gehört zum Reinigungseinsatz |
| `/basis/beschaffungsmanagement` (nur defektes Linkziel, nie eine Seite) | — | 404 bleibt, der Link entfällt | GLOBAL-016 |

  Das Mapping gilt auf der Vorab-Adresse und nach dem Launch auf der eigenen Domain (GLOBAL-018).
- **Prüfung nach Umsetzung:** `/basis/beschaffung` antwortet mit einer einstufigen 308 auf `/basis/unterhaltsreinigung` (200). Ein Linkprüfer über alle Seiten einschließlich aller Reiter findet keinen Link auf die alte URL. Die Volltextsuche findet „Beschaffung“ weder in Navigation, Footer, Formular, Standortseiten noch im Chat-Katalog. Die Sitemap enthält die URL nicht.

Titel und Snippets sind Vorgaben, keine Garantie für die Google-Anzeige. [S08][S09] Bildalternativen hängen vom Zweck ab. [S17] Seitenspezifische URL-Änderungen benötigen einen passenden Migrationsplan. [S07]

## 5. Befunde und Hypothesen

Gemeinsame Probleme stehen nur im globalen Register (unbestätigte Leistung und Region: GLOBAL-021, R3, R4). Seitenspezifisch:

### SEITE-P25-001 · „Automatisch“ und „System“ versprechen eine Technik, die der eigene Text als Sichtkontrolle beschreibt

- **Ist-Zustand:** Hero „Automatische Beschaffung …“ (Z. 50), Merkmalskarten „Automatisch – Bedarfsgerechte Nachbestellung“ und „Zeitsparend – Keine manuelle Bestellung nötig“ (Z. 82-88), Reiter „Prozess & System“ (Z. 105) mit „Intelligenter Beschaffungsprozess“ (Z. 155) und „Automatische Überwachung – Unsere Mitarbeiter prüfen bei jedem Reinigungseinsatz die Bestände und melden automatisch, wenn Nachschub benötigt wird“ (Z. 163-164). Die FAQ sagt: „Unsere Reinigungskräfte prüfen bei jedem Einsatz die Bestände. Wenn der Mindestbestand unterschritten wird, erfolgt automatisch eine Nachbestellung“ (Z. 265). Beschrieben wird also eine Prüfung durch Menschen. Ein System, das „automatisch“ bestellt, ist nicht belegt. Wer eine technische Lösung erwartet (z. B. Füllstandsmeldung), wird enttäuscht, und die Zusage „Keine manuelle Bestellung nötig“ hängt am Einsatzrhythmus.
- **Priorität:** P2 · **Launch-Blocker:** nein (die Behauptungsebene läuft über GLOBAL-021)
- **Vorgabe:** In Pfad (a) den tatsächlichen Ablauf in Alltagssprache beschreiben (Ersatztexte in Abschnitt 4), „automatisch“, „System“ und „intelligent“ nur verwenden, wenn der Kunde ein technisches Verfahren nachweist. In Pfad (b) entfällt die Seite.
- **Abnahme:** Die Volltextsuche nach „automatisch“, „System“ und „intelligent“ findet auf der Seite nur Stellen, für die ein technisches Verfahren belegt ist. Der beschriebene Ablauf stimmt mit der FAQ überein.
- **Evidenz:** Codebefund `app/basis/beschaffung/page.tsx:50, 82-88, 105, 155, 163-164, 265`. **Quelle:** S02

### SEITE-P25-002 · Widersprüchliche Angaben zu Lagerung und Lagerbeständen

- **Ist-Zustand:** Reiter „Prozess & System“: „Die Produkte werden direkt zu Ihnen geliefert und von uns fachgerecht gelagert.“ (Z. 172) und „Sie profitieren von Mengenrabatten ohne selbst große Lagerbestände halten zu müssen.“ (Z. 168). FAQ „Wo werden die Produkte gelagert?“: „Die Produkte werden in Ihren Räumlichkeiten in einem dafür vorgesehenen Lagerbereich gelagert. Wir helfen Ihnen bei der optimalen Organisation des Lagerraums.“ (Z. 292). Ob BGS oder der Kunde lagert und ob der Kunde Bestände hält, bleibt unklar. Genau das ist für die Entscheidung wichtig (Platzbedarf, Eigentum, Abrechnung). Beide Texte stehen nicht im ausgelieferten HTML.
- **Priorität:** P2 · **Launch-Blocker:** nein
- **Vorgabe:** Pfad (a): Der Kunde klärt Lagerort, Eigentum der Ware und Abrechnung. Die Seite nennt das an einer einzigen Stelle, sichtbar im HTML (Ersatztext in Abschnitt 4). Pfad (b): entfällt mit der Seite.
- **Abnahme:** Es gibt genau eine Aussage zur Lagerung, und sie widerspricht keiner anderen Stelle der Website.
- **Evidenz:** Codebefund `app/basis/beschaffung/page.tsx:168, 172, 292`, Textproben-Abgleich mit dem HTML aus N007. **Quelle:** S02

### SEITE-P25-003 · Eigene Seite für eine Zusatzleistung der Reinigung, Suchbegriff und Inhalt passen nicht zusammen

- **Ist-Zustand:** H1 und Navigation sprechen von „Beschaffungsmanagement“, einem allgemeinen Begriff für Einkaufsorganisation. Der Inhalt beschreibt das Nachfüllen von Seife, Papier und Reinigungsmitteln während der Reinigungseinsätze (FAQ Z. 265), also eine Zusatzleistung zur Unterhaltsreinigung (P03). Die Startseite führt sie in der Kategorie „Basisreinigung“ nicht (`app/page.tsx:287`), der Zuführungslink von `/standorte/zuerich` ist defekt (GLOBAL-016). Wer „Beschaffungsmanagement“ sucht, erwartet vermutlich Einkaufsberatung oder Software, wer Nachschub für die eigene Liegenschaft sucht, findet die Seite unter diesem Begriff kaum (HYPOTHESE). Als eigene Seite bleibt sie dünn (GLOBAL-036).
- **Priorität:** P2 · **Launch-Blocker:** nein
- **Vorgabe:** In Phase 4 entscheiden: als Abschnitt „Nachfüllservice“ in `/basis/unterhaltsreinigung` aufnehmen und `/basis/beschaffung` per 308 dorthin leiten (bevorzugt, falls die Suchdaten keine eigenständige Nachfrage zeigen) oder als eigene Seite nach Pfad (a) mit alltagssprachlichem Titel. Ohne Suchdaten ist die fehlende Nachfrage eine HYPOTHESE.
- **Abnahme:** Entscheidung dokumentiert, gegebenenfalls Alt-neu-Mapping mit 308. Die gewählte Seite benennt die Leistung so, wie Kunden sie beschreiben (Begriff mit Suchdaten oder Kundengesprächen geprüft, R10).
- **Evidenz:** HYPOTHESE (Inhaltsvergleich, keine Suchdaten, B11), Codebefund `app/basis/beschaffung/page.tsx:47, 265`, `app/page.tsx:287`. **Quelle:** S05, S07

## 6. Abnahme nach einer später separat freigegebenen Umsetzung

- [ ] R3 entschieden und der gewählte Pfad vollständig umgesetzt: (a) mit Belegen und Entscheidung zur Zusammenlegung oder (b) mit 308, Entfernungsliste und Mapping.
- [ ] Seitenzweck und Abgrenzung zu anderen Seiten nachvollziehbar.
- [ ] Fachliche Aussagen bestätigt und Textvorschläge redaktionell freigegeben.
- [ ] Metadaten, Links und Indexierungssteuerung stimmen mit dem Seitenzweck überein.
- [ ] Relevante Darstellungs-/Bedienungszustände geprüft.
- [ ] Kritische Seite-/Backend-Abhängigkeiten nachgewiesen oder ausdrücklich offen markiert.
- [ ] Kein ungeklärter Launch-Blocker für diese Seite.

**Aktuelles Seitenurteil: BEFUND, nicht freigabefähig.** Launch-Blocker: die offene Entscheidung R3 (G09) sowie global GLOBAL-002 (Terminweg), -003 (Formular), -010 (Metadaten), -016 (defekter Zuführungslink, entfällt mit Pfad b), -020 (Identität), -021 (unbelegte Leistung, Region, Öko- und Kostenaussagen), -023 (Bild). Seitenspezifisch keine zusätzlichen Blocker.

---

**Quellen zu dieser Datei:** siehe ../09-QUELLEN.md (S02, S05, S07, S08, S09, S10, S11, S12, S13, S16, S17).

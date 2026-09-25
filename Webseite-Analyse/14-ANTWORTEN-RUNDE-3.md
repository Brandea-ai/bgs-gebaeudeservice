# Antworten auf die Rückfragen, Runde 3

**Stand 25.09.2026.** Grundlage ist der Export des Fragebogens vom 25.09.2026, 15:28:52 UTC (N056).
- 8 von 11 Fragen sind beantwortet.
- Bei NAME und TERMINAL steht nur ein Kommentar.
- PARTNER blieb leer.

Personennamen werden nicht übernommen. Die Grundlagen zu Namen, Gebieten und Nischen stehen in 13.

## 1. Kurzfassung

- **Name:** Keiner der Vorschläge überzeugt.
  - Brandea wünscht neue Namen.
  - Fable soll mitarbeiten, und die Modelle sollen sich gegenseitig prüfen („Ping-Pong“).
  - Zu jedem Namen soll die Bedeutung erklärt werden.
  - Die zweite Namensrunde läuft (Abschnitt 4).
- **Markenaufbau:** Dachmarke plus eigener Name für Premium (E37).
- **Vorgehen nach der Wahl:** Brandea sichert die Domains der Favoriten sofort, danach folgt die Markenrecherche beim IGE (E38).
- **Produktion:** Brandea will, dass der Agent selbst nach `main` pusht, und gibt das frei (E39).
  - Der zweite Versuch am 25.09.2026 um 15:37 UTC wurde erneut blockiert (N057).
  - Die Freigabe muss Brandea in der Sitzung einstellen (Abschnitt 3).
- **Nischen:** Alle zehn Nischen aus 13 bedient das Unternehmen laut Brandea heute schon (E40).
- **Zusagen für Premium:** Alle neun sind bestätigt.
  - Sechs, die die Arbeitsweise beschreiben, stehen jetzt auf `/premium`.
  - Drei folgen erst mit Beleg (E41, Abschnitt 6).
- **Orte:** Seeufer und Orte werden auf `/einzugsgebiet` und `/premium` genannt, ohne eigene Ortsseiten (E42). Umgesetzt in `31f87eb`.
- **Sprachen:** Die ganze Website erscheint auf Deutsch, Englisch, Französisch und Italienisch, mit Sprachumschalter (E43, M60, Abschnitt 5).
- **Anfahrt:** Überall gelten dieselben Bedingungen (E44).
- **Terminal-Auftrag:** Er ist nicht ausgeführt und vorerst nicht geplant (E45). Das Repository bleibt damit öffentlich.

## 2. Einordnung je Frage

| ID | Antwort (sinngemäss) | Einordnung | Prüfung | Folge | Status |
|---|---|---|---|---|---|
| NAME | Keine Auswahl. „Bitte nochmal neue“, Fable fragen, validieren, gegenseitig Ping-Pong spielen, immer die Bedeutung erklären | Auftrag | — | Namensrunde 2 (Abschnitt 4) | OFFEN (läuft) |
| AUFBAU | Dachmarke plus eigener Name für Premium | Präferenz | — | E37 | GEKLÄRT |
| PRUEFUNG | Domains der Favoriten gleich sichern, dann Recherche beim IGE | Präferenz | Der Agent kann keine Domains kaufen und keine Recherche beauftragen (E36) | E38 | GEKLÄRT |
| LIVE | „Ich gebe dir den Push nach main frei“, der Agent soll es selbst machen, die Einstellung in der Cloud-App muss das erlauben | Präferenz | Zweiter Versuch 15:37 UTC blockiert, Grund „Auto-Mode Bypass“ (N057) | E39, Abschnitt 3 | OFFEN (Einstellung durch Brandea) |
| NISCHEN | Alle zehn Nischen „heute schon“ | Fakt (Eigenangabe über Brandea) | Einheitliche Antwort ohne Kommentar | E40. Auf `/premium` umgesetzt (`31f87eb`) | GEKLÄRT |
| VORAUS | Alle neun Zusagen bestätigt | Fakt (Eigenangabe über Brandea) | Drei betreffen Dritte oder ein Prüfverfahren | E41, Abschnitt 6 | GEKLÄRT MIT VORBEHALT |
| PARTNER | keine Antwort | — | — | Nachfrage in Runde 4 | OFFEN |
| ORTE | Ja, Seeufer und Orte auf Einzugsgebiet und Premium nennen | Präferenz | Keine eigenen Ortsseiten (M48, S33) | E42, umgesetzt (`31f87eb`) | GEKLÄRT |
| ENGLISCH | Ganze Website auf Englisch, dazu Deutsch, Französisch und Italienisch, einstellbar | Präferenz | Google-Regeln zu Sprachversionen (S75, S76) | E43, M60 | GEKLÄRT |
| ANFAHRT | Nein, überall gleich | Fakt | — | E44 | GEKLÄRT |
| TERMINAL | Nicht ausgeführt, vorerst nicht geplant | Präferenz | Repository öffentlich, darin auch diese Analyse | E45. R1 und M06 bleiben offen | OFFEN (bewusst) |

## 3. Produktion: Freigabe für den Push

**Stand:**
- `main` und die Produktion stehen weiter auf `d7e1122`.
- Der Arbeits-Branch steht auf `31f87eb`. Er ist in der isolierten Kopie getestet (N055).
- Die Vercel-Vorschau ist geprüft: `/premium` liefert 200, `noindex` steht im Header und im Meta-Tag, die neuen Inhalte sind da (N058).

**Blockierung:** Den Push nach `main` hat die Rechteprüfung der Arbeitssitzung zweimal blockiert, am 25.09.2026 (N051) und um 15:37 UTC (N057). Der Agent umgeht das nicht:
- kein Merge über GitHub
- kein Promote bei Vercel
- keine anderen Werkzeuge oder Hilfsagenten

**Möglichkeiten für Brandea** (laut Dokumentation von Claude Code, S78–S81):

1. **Modus umstellen:** Im Auswahlfeld für den Modus neben dem Eingabefeld der Sitzung von „Auto“ auf „Accept edits“ wechseln und dem Agenten schreiben, dass er pushen soll.
   - Die App fragt dann vor Befehlen wie dem Push nach, und Brandea bestätigt einmal.
   - Danach kann der Modus zurück auf „Auto“.
   - Im Modus „Accept edits“ fragt die App auch bei anderen Befehlen nach.
2. **Berechtigungsregel:** In `.claude/settings.json` des Repositorys `{"permissions": {"ask": ["Bash(git push origin HEAD:main)"]}}` eintragen.
   - Mit `"ask"` fragt die App jedes Mal nach, mit `"allow"` wäre der Push ohne Nachfrage erlaubt.
   - Die Regel wirkt erst in einer neuen Sitzung.
   - Der Agent ändert diese Datei nicht selbst, weil das seine eigenen Rechte erweitern würde.
3. **Selbst einspielen:** Auf GitHub einen Pull Request von `claude/optimistic-sagan-h5y2i9` nach `main` erstellen und mergen. Vercel veröffentlicht danach automatisch.

In allen drei Fällen bleibt die Seite für Suchmaschinen gesperrt, solange `SITE_INDEXABLE` nicht gesetzt ist (M08).

## 4. Namensrunde 2

Auftrag aus NAME: neue Namen, Fable einbeziehen, gegenseitig prüfen und jede Bedeutung erklären. Vorgaben aus Runde 3:
- **Rollen:** Dachmarke plus eigener Name für Premium (E37).
- **Sprachen:** Die Namen müssen in allen vier Sprachen der Website funktionieren (E43).

Ablauf:
1. Fable und ein zweites Modell entwickeln unabhängig voneinander Namen, je mit Bedeutung und Domain-Vorprüfung.
2. Jedes Modell kritisiert die Liste des anderen.
3. Ein dritter Agent prüft die Finalisten: `.ch` und `.com` per RDAP, Firmen über Moneyhouse und Websuche.
4. Fable gibt auf dieser Grundlage die Schlussempfehlung ab.

Das Ergebnis mit der Bedeutung jedes Namens folgt in 13, Abschnitt 8.

## 5. Mehrsprachigkeit (M60)

Plan nach den Quellen S75 bis S77:

- **Eigene Adresse je Sprache:** Die Sprachen liegen in Unterverzeichnissen [S75].
  - Deutsch bleibt ohne Präfix unter den heutigen Adressen, damit keine zweite Umstellung mit Weiterleitungen nötig ist.
  - Englisch, Französisch und Italienisch folgen unter `/en/…`, `/fr/…` und `/it/…`.
- **Keine automatische Umleitung** nach Browsersprache oder Standort [S75]. Die Sprache wählt man im Umschalter in Kopfzeile und Footer.
  - Das Beispiel in der Next.js-Dokumentation leitet nach der Browsersprache um [S77].
  - Für die Suche gilt die Empfehlung von Google (09, „Vorgehen bei widersprüchlichen Empfehlungen“).
- **Sprachverweise (hreflang):** Jede Sprachversion nennt sich selbst und alle anderen, im HTML-Kopf oder in der Sitemap [S76].
  - Codes: `de-CH`, `fr-CH`, `it-CH`, `en`.
  - `x-default` zeigt auf die deutsche Fassung.
- **Vollständig übersetzt:** Google bestimmt die Sprache aus dem sichtbaren Inhalt. Nur übersetzte Navigation um deutschen Text herum schadet [S75].
- **Technik:** Next.js App Router mit Sprachsegment, Wörterbüchern auf dem Server und statischer Erzeugung je Sprache [S77].
  - Die Dokumentation beschreibt Next.js 16.
  - Das Projekt läuft auf 15.5, dort heisst `proxy` noch `middleware`.
- **Reihenfolge:**
  1. Name und Marke (M56)
  2. deutsche Texte (M29), gleich in einer Inhaltsschicht, die sich übersetzen lässt
  3. Übersetzungen, geprüft von Muttersprachlern, zum Beispiel Mitarbeitenden des Kunden
  4. Sprachrouting, Umschalter, hreflang und Sitemap
  5. Rechtstexte in allen Sprachen (Brandea, E22)
- **Offen für Runde 4:**
  - Wer prüft die Übersetzungen?
  - Sollen die Adressen je Sprache übersetzt werden, zum Beispiel `/fr/services/…`?

## 6. Belege für die Premium-Zusagen (E41)

- **Veröffentlicht als Eigenangabe (Arbeitsweise):**
  - Geheimhaltungsvereinbarung auf Wunsch
  - feste Teams
  - überprüftes Personal, ohne Angabe der Methode
  - Regeln für Schlüssel und Alarm
  - Einsätze abends, am Wochenende und während Abwesenheiten
  - Materialkenntnis bei Naturstein, Parkett, Hochglanz, Teak, Gelcoat und Polstern
- **Zurückgestellt bis zum Beleg (M59):**
  - Die Police deckt Kunst und Wertgegenstände. Beleg: Police mit Deckungsumfang.
  - Zutritt zum Flugfeld Buochs. Beleg: Ausweis oder Bestätigung des Betreibers.
  - Strafregisterauszug als Prüfmethode. Beleg: beschriebenes Verfahren.
- **Gegenlesen:** Alle zehn Nischen und alle neun Zusagen wurden ohne Einschränkung bestätigt. Vor dem Launch sollte der Kunde die Premium-Seiten einmal gegenlesen.

## 7. Entscheidungen aus Runde 3

Diese Einträge stehen auch im Entscheidungsprotokoll in 07.

- **E37 · Markenaufbau:** Dachmarke plus eigener Name für die Premium-Linie. Die eingetragene Firma bleibt im Impressum, in Offerten und auf Rechnungen.
- **E38 · Vorgehen nach der Namenswahl:**
  1. Brandea sichert die Domains der Favoriten sofort.
  2. Danach folgt die Markenrecherche beim IGE.
  3. Genutzt wird der Name erst nach der Recherche.
- **E39 · Produktion durch den Agenten, freigegeben durch Brandea.**
  - Die Rechteprüfung blockiert den Push weiterhin (N057).
  - Brandea stellt die Freigabe ein (Abschnitt 3) oder spielt den Stand selbst ein.
- **E40 · Nischen:** Alle zehn Nischen aus 13 bedient das Unternehmen heute schon (Eigenangabe).
- **E41 · Premium-Zusagen:** Arbeitsweisen werden veröffentlicht. Deckungsumfang, Zutritt zum Flugfeld und Prüfmethode erst mit Beleg.
- **E42 · Orte:** Seeufer und Orte stehen als Text auf `/einzugsgebiet` und `/premium`, ohne eigene Ortsseiten.
- **E43 · Mehrsprachigkeit:** Deutsch, Englisch, Französisch und Italienisch, mit Sprachumschalter (M60).
- **E44 · Anfahrt:** Überall gelten dieselben Bedingungen, die Website nennt keine Einschränkungen.
- **E45 · Terminal-Auftrag vorerst nicht.**
  - Das Repository bleibt öffentlich, R1 und M06 bleiben offen.
  - Solange es öffentlich ist, kann jeder den Code und diese Analyse lesen, auch die Befunde zum Kunden.

---

**Nachweise:** N056–N058 in 08-PRUEFNACHWEISE.md. **Quellen:** S75–S81 in 09-QUELLEN.md.

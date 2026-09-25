# Antworten auf die Rückfragen, Runde 2

**Stand 25.09.2026.** Grundlage ist der Export des Fragebogens vom 25.09.2026, 13:57:59 UTC (N050). Der Export zählt 8 von 12 Fragen als beantwortet. Die übrigen 4 sind im Kommentar beantwortet. Personennamen werden nicht übernommen. Offene Fragen und Widersprüche aus Runde 1 stehen in 11, Abschnitte 4 und 7.

## 1. Kurzfassung

- **Name:** Brandea möchte zuerst geprüfte Namensvorschläge sehen (W03). Die Recherche läuft, das Ergebnis folgt in Abschnitt 4.
- **Produktion:** Brandea will, dass der Agent selbst committet und pusht, auch nach `main` (LIVE). Der Versuch am 25.09.2026 hat die Rechteprüfung der Arbeitssitzung als Produktions-Deployment blockiert. Er wurde nicht umgangen (Abschnitt 3).
- **Privatkunden:** Nur exklusive Aufträge (Villen, Lofts, Luxusimmobilien) und Hotels mit besonderen Wünschen. Keine Umzugsreinigung für private Mieter (W01). Welche Nischen es dafür gibt, soll recherchiert werden (Abschnitt 4).
- **Winterdienst:** endgültig nicht im Angebot (W02).
- **Einzugsgebiet:** ganze Kantone Luzern, Zug, Aargau, Nidwalden und Obwalden, alle Leistungen überall (W04, R4d). Dazu der Auftrag, die wohlhabenden Gebiete zu bestimmen (Abschnitt 4).
- **E-Mail:** `admin@brandea.de` bis kurz vor dem Launch. Name und Domain kommen vorher (W05).
- **Kontaktdaten:** bestätigt und erneut geprüft (N049). Festnetz 041 320 56 10 als Hauptnummer, Mobilnummer zusätzlich, Öffnungszeiten Mo–Fr 08:00–19:00, Sa 09:00–17:00, So geschlossen.
- **Gute Anfrage:** Unterhaltsreinigung ab CHF 50'000 **pro Jahr** (W07).
- **Zielgruppen:** privat nur vermögende Kunden, im B2B zählt, was Umsatz bringt (W08). Verwaltungen und Stockwerkeigentümer gehören dazu, wenn das Volumen passt.
- **Modell für Chat und Berater:** später. Der Chat bleibt bis dahin abgeschaltet (E14).
- **Aufgaben ausserhalb des Codes:** Brandea erledigt sie über das eigene Terminal. Der Agent liefert den Auftrag, die Rückmeldung kommt als JSON zurück (Abschnitt 5).

## 2. Einordnung je Frage

| ID | Antwort (sinngemäss) | Einordnung | Prüfung | Folge | Status |
|---|---|---|---|---|---|
| W03 | Zuerst geprüfte Namensvorschläge sehen. „Lassen wir uns einen Namen einfallen.“ | Auftrag | Rechtlicher Rahmen in 11, 3.6 (Art. 954a OR) | Namensrecherche mit Domain-, Register- und Konfliktprüfung (Abschnitt 4). Bis dahin Arbeitsmarke (E26) | OFFEN (Auftrag läuft) |
| LIVE | „Du committest und pushst selbst.“ | Präferenz | Push nach `main` am 25.09.2026 von der Rechteprüfung blockiert (N051) | E27. Entscheidung zur Freigabe liegt bei Brandea | OFFEN (blockiert) |
| W01 | Keine Mieter. Privat nur exklusiv: Villen, Lofts, Hotels mit besonderen Wünschen. Nischenmärkte identifizieren | Präferenz + Auftrag | — | Umzugsreinigung nur für Verwaltungen, Eigentümer und Premium-Objekte. Nischenrecherche (Abschnitt 4) | GEKLÄRT |
| W02 | Kein Winterdienst | Fakt | Kunden-Website und local.ch führen ihn noch (N014, N046) | E29. Der Kunde sollte local.ch und die alte Website bereinigen | GEKLÄRT |
| W04 | Ganze Kantone LU, ZG, AG, NW/OW. „Wo sich die Reichen und Schönen tummeln, dort arbeiten wir auch.“ | Fakt + Auftrag | — | Einzugsgebiet-Seite mit fünf Kantonen umgesetzt (`fe75da7`). Wohlhabende Gebiete recherchieren (Abschnitt 4) | GEKLÄRT |
| R4d | Nein, alles gleich | Fakt | — | Seite nennt „alle Leistungen im ganzen Gebiet“ | GEKLÄRT |
| W05 | `admin@brandea.de` bis kurz vor dem Launch. Vorher Name und Domain | Präferenz | Eine neue Domain folgt dem Namen. `bgs-service.ch` wird dann weitergeleitet | E31. Umstellung der Adresse ist Teil von M58 | GEKLÄRT |
| KONTAKT | Alles richtig, Festnetz als Hauptnummer. „Validiere nochmals im Internet.“ | Fakt + Auftrag | search.ch: Festnetz, Adresse, Website, keine Zeiten (N049). local.ch: beide Nummern und Zeiten (N046). Kunden-Website: Mobilnummer (N042) | Angaben in `shared/company.ts`. Öffnungszeiten nur aus local.ch, von Brandea bestätigt | GEKLÄRT |
| W07 | Pro Jahr | Fakt | Plausibel bei über 120 Kunden | Richtwert für die Einordnung von Anfragen, nicht auf der Website | GEKLÄRT |
| W08 | Privat nur Reiche, B2B zählt, was Umsatz bringt | Präferenz | — | Verwaltungen und Stockwerkeigentümer als B2B-Zielgruppe bei passendem Volumen (Rang 2 in 11, 3.9 bleibt) | GEKLÄRT |
| MODELL | Später | Präferenz | — | Chat bleibt aus (E14, E35) | GEKLÄRT |
| BRANDEA | „Was du nicht kannst, gibst du mir als Prompt, ich mache das im Terminal, das Terminal schickt dir die Rückmeldung.“ | Auftrag | Der Agent hat hier keinen Zugriff auf die Einstellungen des Repositorys. Schlüsselwerte werden nie entschlüsselt | Terminal-Auftrag (Abschnitt 5) | GEKLÄRT |

## 3. Produktions-Deployment

Auf die Antwort „du committest und pushst selbst“ hat der Agent am 25.09.2026 versucht, `main` ohne Umschreiben auf den geprüften Stand des Arbeits-Branches vorzuspulen:

- Stand: `01ded94`, Preview-Build READY.
- Das würde die Produktion auf `bgs-gebaeudeservice.vercel.app` aktualisieren.

Die Rechteprüfung der Arbeitssitzung hat den Push als Produktions-Deployment blockiert (N051). Der Agent hat das nicht umgangen: kein Pull Request, kein Promote bei Vercel, keine andere Route.

**Stand:** `main` und Produktion stehen weiter auf `d7e1122`. Welle 0 und Welle 1 liegen nur auf dem Arbeits-Branch.

**Entscheidung durch Brandea:**

- **Option a:** Brandea erlaubt dem Agenten den Push nach `main` über eine Berechtigungsregel in den Einstellungen der Sitzung.
- **Option b:** Brandea spielt den Stand selbst ein.

## 4. Recherchen (werden ergänzt)

- **Namensvorschläge** mit Prüfung von Domain, Register und Konflikten: siehe 13-NAMEN-UND-NISCHEN.md, sobald abgeschlossen.
- **Wohlhabende Gemeinden und Premium-Nischen im Einzugsgebiet:** siehe 13-NAMEN-UND-NISCHEN.md, sobald abgeschlossen.

## 5. Terminal-Auftrag für Brandea

Aufgaben, die der Agent in dieser Umgebung nicht erledigen kann oder darf:

- Das Repository auf privat stellen.
- Schlüssel in Vercel als „sensitive“ markieren. Dafür wäre der Wert nötig, und der Agent entschlüsselt keine Werte.

Den Auftrag gibt der Agent im Chat aus. Er verlangt eine Rückmeldung als JSON ohne Schlüsselwerte. Der Produktions-Push ist bewusst nicht Teil des Auftrags (Abschnitt 3).

### Auftrag (zum Kopieren in das Terminal von Brandea)

````text
Du arbeitest für Brandea am Projekt „BGS Gebäudeservice“:
- GitHub: Brandea-ai/bgs-gebaeudeservice
- Vercel: Team „brandea“, Projekt „bgs-gebaeudeservice“

Erledige die Aufgaben der Reihe nach. Frage mich vor jeder Änderung einmal zur Bestätigung.
Gib niemals Werte von Schlüsseln oder Umgebungsvariablen aus, auch nicht teilweise.
Wenn etwas nicht geht, brich den Schritt ab und notiere den Grund.
Am Ende gibst du nur den JSON-Bericht aus.

1. Vorprüfung
   a) Sichtbarkeit prüfen:
      gh repo view Brandea-ai/bgs-gebaeudeservice --json visibility
      gh repo view Brandea-ai/FIMI-Gebaeudereinigung --json visibility
   b) Vercel-Plan des Teams „brandea“ ermitteln und prüfen, ob das Team Projekte aus
      privaten Repositories der Organisation Brandea-ai baut (z. B. FIMI, falls privat).

2. Repository auf privat stellen, nur wenn 1b zeigt, dass private Org-Repositories gebaut
   werden, oder ich es ausdrücklich bestätige:
      gh repo edit Brandea-ai/bgs-gebaeudeservice --visibility private --accept-visibility-change-consequences
   Danach die Sichtbarkeit erneut prüfen und im Vercel-Projekt (Settings → Git) prüfen,
   dass die Verbindung zum Repository besteht.

3. In Vercel die Variablen RESEND_API_KEY, GEMINI_API_KEY und ANTHROPIC_API_KEY für
   Production und Preview als „Sensitive“ speichern. Werte unverändert übernehmen und nicht
   anzeigen (am sichersten im Dashboard: Variable bearbeiten, „Sensitive“ aktivieren).
   VITE_GOOGLE_MAPS_API_KEY nicht ändern.

4. Kontrolle: Namen, Typ und Ziele aller Umgebungsvariablen des Projekts auflisten (ohne
   Werte). Bestätigen, dass SITE_INDEXABLE und NEXT_PUBLIC_CHAT_ENABLED nicht gesetzt sind.

JSON-Bericht (nur diesen ausgeben):
{
  "schema": "bgs-terminal-bericht/v1",
  "datum": "",
  "repo": {
    "bgs_sichtbarkeit_vorher": "",
    "bgs_sichtbarkeit_nachher": "",
    "fimi_sichtbarkeit": "",
    "vercel_plan": "",
    "vercel_baut_private_org_repos": "ja | nein | unklar",
    "git_verbindung_vercel_ok": "ja | nein | nicht geprüft"
  },
  "vercel_variablen": [ { "name": "", "typ": "", "ziele": [] } ],
  "site_indexable_gesetzt": false,
  "chat_enabled_gesetzt": false,
  "erledigt": [],
  "nicht_erledigt": [ { "aufgabe": "", "grund": "" } ],
  "hinweise": ""
}
````

## 6. Entscheidungen aus Runde 2

Diese Einträge stehen auch im Entscheidungsprotokoll in 07.

- **E27 · Produktions-Deployments durch den Agenten gewünscht.** Technisch in dieser Sitzung blockiert. Freigabe nach Abschnitt 3 durch Brandea.
- **E28 · Privatkunden nur im Premium-Segment:** Villen, Lofts und Luxusimmobilien. Hotels mit besonderen Wünschen gelten als B2B-Premium. Keine Umzugsreinigung für private Mieter.
- **E29 · Kein Winterdienst,** endgültig.
- **E30 · Einzugsgebiet:** ganze Kantone Luzern, Zug, Aargau, Nidwalden und Obwalden, alle Leistungen im ganzen Gebiet.
- **E31 · E-Mail `admin@brandea.de` bis kurz vor dem Launch.** Zuvor Name und Domain festlegen. Umstellung in M58.
- **E32 · Kontaktdaten bestätigt:**
  - Festnetz als Hauptnummer, Mobilnummer zusätzlich
  - Öffnungszeiten laut local.ch
- **E33 · Gute Anfrage:** Unterhaltsreinigung ab CHF 50'000 pro Jahr. Interner Richtwert, nicht auf der Website.
- **E34 · Zielgruppen:**
  - B2B mit relevantem Umsatz, einschliesslich Verwaltungen und Stockwerkeigentümer bei passendem Volumen
  - privat nur vermögende Kunden
- **E35 · Modell für Chat und Berater später.** Der Chat bleibt abgeschaltet.
- **E36 · Aufgaben ausserhalb des Codes erledigt Brandea im eigenen Terminal.** Die Rückmeldung kommt als JSON.

---

**Nachweise:** N049–N052 in 08-PRUEFNACHWEISE.md.

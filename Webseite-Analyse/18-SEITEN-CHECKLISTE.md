# Seiten-Checkliste (E61)

**Zweck:** Jede Seite wird einzeln durchgegangen. Eine Seite bekommt ihr Kreuz erst, wenn alle Prüfpunkte unten erfüllt und getestet sind. So ist sichtbar, wo wir stehen, und keine Seite wird doppelt bearbeitet.

**Legende:** `[x]` erledigt · `[~]` in Arbeit · `[ ]` offen

## Prüfpunkte je Seite

1. **Inhalt:** Texte in `content/de/`, nur Belegtes (E18), Schweizer Rechtschreibung, kein «ß», keine Floskeln
2. **Aufbau:** Server-Komponente, eine H1, Brotkrumen ab der zweiten Ebene, `main`-Landmarke
3. **Aktionen:** eine Hauptaktion «Offerte», Telefon als zweite Aktion (M31), alle Links gültig
4. **Bilder:** Bildflächen als neutrale Platzhalter, keine KI-Bilder (E19, E59)
5. **Metadaten:** Titel, Beschreibung und Name aus `shared/seo.ts`, beide Marken-Modi geprüft
6. **Test:** Typprüfung, Build, beide Prüfskripte, axe-core ohne Kontrastfehler, Mobil ohne Überlauf

Nicht Teil dieses Durchgangs: Übersetzungen (M60) und Klickflächen (M27, Welle 2). Sie folgen als eigener Durchgang.

## Seiten

| | Seite | Stand vor dem Durchgang | Nachweis |
|---|---|---|---|
| [x] | `/impressum` | Alter Text, «ß», KI-Satz (E59) | N080: neu aus `content/de/recht.ts`, ohne KI-Satz, mit Mobil und MWST |
| [x] | `/datenschutz` | Alter Text nach DSGVO, «ß», Schweizer DSG fehlt | N080: nach DSG, gemäss Inventar (Vercel, Resend, Karte nach Klick, keine Cookies) |
| [x] | `/ueber-uns` | Inhaltsschicht (N079), Bildplatz als Platzhalter zurückholen (E59) | N080: Bildfläche als Platzhalter (`ImageSlot`) |
| [~] | `/` Startseite | Inhaltsschicht (N079), Reihenfolge bestätigt (E57) | |
| [ ] | `/kontakt` | Inhaltsschicht (N079) | |
| [ ] | `/einzugsgebiet` | Inhaltsschicht (N079) | |
| [ ] | `/leistungen` | Inhaltsschicht (N079) | |
| [ ] | `/leistungen/unterhaltsreinigung` | Vorlage, Texte bestätigt (E56) | |
| [ ] | `/leistungen/bueroreinigung` | Vorlage, Texte bestätigt (E56) | |
| [ ] | `/leistungen/sonderreinigungen` | Vorlage, Texte bestätigt (E56) | |
| [ ] | `/leistungen/baureinigung` | Vorlage, Texte bestätigt (E56) | |
| [ ] | `/leistungen/fenster-und-fassadenreinigung` | Vorlage, Texte bestätigt (E56) | |
| [ ] | `/leistungen/industrie-und-hallenreinigung` | Vorlage, Texte bestätigt (E56) | |
| [ ] | `/leistungen/hauswartung` | Vorlage, Texte bestätigt (E56) | |
| [ ] | `/leistungen/aussen-und-gruenflaechenpflege` | Vorlage, Texte bestätigt (E56) | |
| [ ] | `/leistungen/facility-services` | Vorlage, Texte bestätigt (E56) | |
| [ ] | `/premium` | Inhaltsschicht (N079) | |
| [ ] | `/premium/luxusimmobilien` | Vorlage, Texte bestätigt (E56) | |
| [ ] | `/premium/privatjet` | Vorlage, nur Kabine (E56) | |
| [ ] | `/premium/yacht` | Vorlage, Texte bestätigt (E56) | |
| [ ] | `/blog` Ratgeber | Übersicht neu (M53) | |
| [ ] | `/blog/richtige-reinigungsfirma-finden` | Neu (M53) | |
| [ ] | `/blog/reinigungskosten-schweiz` | Neu (M53) | |
| [ ] | 404-Seite | Alter Stand | |
| [ ] | Navigation (alle Seiten) | Umgestellt, Texte noch im Code | |
| [ ] | Footer mit Formular (alle Seiten) | Umgestellt, Texte noch im Code. Einwilligungssatz ohne «dauerhaft gespeichert» angepasst (N080) | |

**Stand 26.09.2026:** 3 von 26 erledigt, als Nächstes die Startseite.

**Reihenfolge:** Rechtstexte zuerst (E60), dann Über uns wegen der Bildfläche, danach von oben nach unten.

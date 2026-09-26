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
| [x] | `/` Startseite | Inhaltsschicht (N079), Reihenfolge bestätigt (E57) | N081: alle Prüfpunkte, Hintergrund als Platzhalter |
| [x] | `/kontakt` | Inhaltsschicht (N079) | N081: alle Prüfpunkte, Karte nach Klick |
| [x] | `/einzugsgebiet` | Inhaltsschicht (N079) | N081: `main` ergänzt, Abschluss mit Offerte und Telefon |
| [x] | `/leistungen` | Inhaltsschicht (N079) | N081: `main` ergänzt, neuer Abschluss mit Offerte |
| [x] | `/leistungen/unterhaltsreinigung` | Vorlage, Texte bestätigt (E56) | N082: alle Prüfpunkte |
| [x] | `/leistungen/bueroreinigung` | Vorlage, Texte bestätigt (E56) | N082: alle Prüfpunkte |
| [x] | `/leistungen/sonderreinigungen` | Vorlage, Texte bestätigt (E56) | N082: alle Prüfpunkte |
| [x] | `/leistungen/baureinigung` | Vorlage, Texte bestätigt (E56) | N082: alle Prüfpunkte |
| [x] | `/leistungen/fenster-und-fassadenreinigung` | Vorlage, Texte bestätigt (E56) | N082: alle Prüfpunkte |
| [x] | `/leistungen/industrie-und-hallenreinigung` | Vorlage, Texte bestätigt (E56) | N082: alle Prüfpunkte |
| [x] | `/leistungen/hauswartung` | Vorlage, Texte bestätigt (E56) | N082: alle Prüfpunkte, Überlauf auf dem Handy behoben |
| [x] | `/leistungen/aussen-und-gruenflaechenpflege` | Vorlage, Texte bestätigt (E56) | N082: alle Prüfpunkte |
| [x] | `/leistungen/facility-services` | Vorlage, Texte bestätigt (E56) | N082: alle Prüfpunkte |
| [x] | `/premium` | Inhaltsschicht (N079) | N081: `main` ergänzt, Offerte als Hauptaktion statt Telefon |
| [x] | `/premium/luxusimmobilien` | Vorlage, Texte bestätigt (E56) | N083: alle Prüfpunkte, Zusagen nach E41, E52, M59 |
| [x] | `/premium/privatjet` | Vorlage, nur Kabine (E56) | N083: alle Prüfpunkte, Zusagen nach E41, E52, M59 |
| [x] | `/premium/yacht` | Vorlage, Texte bestätigt (E56) | N083: alle Prüfpunkte, Zusagen nach E41, E52, M59 |
| [x] | `/blog` Ratgeber | Übersicht neu (M53) | N083: alle Prüfpunkte |
| [x] | `/blog/richtige-reinigungsfirma-finden` | Neu (M53) | N083: alle Prüfpunkte |
| [x] | `/blog/reinigungskosten-schweiz` | Neu (M53) | N083: alle Prüfpunkte |
| [x] | 404-Seite | Alter Stand | N083: mit Menü, Footer, `main` und drei Wegweisern, Texte in `content/de/navigation.ts` |
| [x] | Navigation (alle Seiten) | Umgestellt, Texte noch im Code | N083: Texte und Gruppen aus `content/de/navigation.ts`, Kernleistungen zuerst, Links als Liste |
| [x] | Footer mit Formular (alle Seiten) | Umgestellt, Texte noch im Code. Einwilligungssatz ohne «dauerhaft gespeichert» angepasst (N080) | N083: Texte aus `content/de/navigation.ts`, kein `footer` mehr im `footer`, Links als Liste mit ausreichender Klickfläche |

**Stand 26.09.2026:** 26 von 26 erledigt. Alle Bereiche fertig (N081 bis N083). Offen sind nur die Antworten aus Runde 8 und der Push nach `main`.

**Reihenfolge:** Rechtstexte zuerst (E60), dann Über uns wegen der Bildfläche, danach bereichsweise mit Fragebogen am Ende jedes Bereichs (E64): Hauptseiten, Leistungsseiten, Premium, Ratgeber, Globales.

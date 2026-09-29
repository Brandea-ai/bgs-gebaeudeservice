## Kopfzeile: Sprachauswahl und Kontaktgruppe, 29.09.2026

Gezielter Nutzerauftrag nach dem pausierten Zwischenstand `297f994`: Die Flaggen in der Kopfzeile erscheinen auf Desktop und Mobil als Dropdown. Telefon und Offerte stehen in einer gemeinsamen Gruppe direkt nebeneinander. Auch im geöffneten Mobilmenü stehen beide Kontaktaktionen nebeneinander. Die übrige Gesamtaufgabe bleibt pausiert.

Änderung nur in `client/src/components/SwissNavigation.tsx`. Bestehende Sprachziele, Telefonnummer, Formularziele, Markenfarben und Scrollverhalten bleiben erhalten. Auf schmalen Bildschirmen ist die Telefonnummer als beschrifteter Telefonbutton erreichbar; auf breitem Desktop zusätzlich ausgeschrieben.

Nachweise: TypeScript und Produktionsbuild in beiden Markenmodi; Seitenprüfung jeweils 128 Seiten; gezielte Navigationsprüfung in 20 Ansichten (DE/EN/FR/IT bei 320, 390, 768, 1280 und 1600 px), vier Sprachwechsel auf derselben Leistungsübersicht, gleiche Höhe und direkte Nachbarschaft der Kontaktbuttons, Mobilmenü mit Escape schließbar. Axe-Prüfung der geänderten Kopfzeile auf Desktop/Premium und Mobil ohne Verstöße. Browsernachweise liegen unter `../uebergabe-2026-09-29/navigation-dropdown/` relativ zum Repo.

Dies ist eine Prüfung der Kopfzeilenänderung, keine vollständige Abschlussabnahme der übrigen Website.

Browserprüfung in beiden Markenmodi: jeweils 128 Seiten, 0 CSP-Verstöße, 0 Konsolenfehler, Karte und Leistungsmenü funktionsfähig. Zusätzliche Axe-Prüfung der BGS-Kopfzeile ebenfalls ohne Verstöße.

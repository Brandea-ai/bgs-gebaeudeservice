# Lokale Bildprüfung und Node-Version

29.09.2026, R2. Vorgeschriebene Laufzeit laut CLAUDE.md und frisch gelesener Vercel-Projekteinstellung: Node22.x. Die globale lokale Version war25.1.0. Für Abschlussprüfungen wird Node22.23.3 verwendet; engines und .nvmrc halten die Vorgabe fest.

Die Kontakt-Browserprüfung hatte zweimal26/27 Fälle bestanden. Der verbleibende Fall scheiterte beim Warten auf networkidle, nicht an einer Layout-Assertion. Request-Protokoll und direkte Abrufe zeigten dauerhaft offene einzelne Bildvarianten. Betroffen waren AVIF-Anfragen nach zuvor abgebrochenem kaltem Bildtransform. Dasselbe Bild mit anderer Breite, anderem Cachekey oder WebP antwortete sofort. Die serverseitige CPU war dabei0%. Ein frischer Prozess lieferte dieselbe zuvor hängende AVIF-Variante in0,148s mit HTTP200.

Das entspricht dem bestätigten Upstream-Problem [Next.js96538](https://github.com/vercel/next.js/issues/96538), behoben durch [PR98168](https://github.com/vercel/next.js/pull/98168), noch nicht enthalten in der verwendeten15.5.26. Der Bericht unterscheidet den lokalen next-start-Optimierer von Vercels verwaltetem Bilddienst. Der endgültige Vercel-Bildabruf wird beim Live-Readback geprüft.

Kein Codecwechsel, kein Patch in node_modules und kein unbegründeter Next-Majorwechsel. Die Layout-Prüfung lässt nun die beim Ändern der Viewportbreite und Scrollen ausgelösten Bildanfragen abschliessen, bevor sie navigiert oder die Seite schliesst. Ihre Layout-, Fokus-, Formular- und Karten-Assertions bleiben gleich. Das vermeidet den bekannten Abbruchfehler im lokalen Prüfwerkzeug; es behauptet nicht, den Upstream-Bug im Selfhosting behoben zu haben.

Mit dieser expliziten Prüfbedingung am unveränderten R2-Build und Node22:27/27 UI-Fälle bestanden. Die beiden fehlgeschlagenen Läufe bleiben in final-contact-ui und final-contact-ui-retry, der erfolgreiche Gegenlauf in final-contact-ui-node22. Rohbelege unter dem Welle3-Nachweisarchiv.

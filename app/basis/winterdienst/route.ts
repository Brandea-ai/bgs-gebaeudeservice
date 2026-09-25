// Winterdienst wird nicht angeboten (R3a, R6j, W02). 410 statt Weiterleitung,
// weil es keine fachlich passende Zielseite gibt (03, Abschnitt 2b).
export function GET() {
  return new Response(
    '<!DOCTYPE html><html lang="de-CH"><head><meta charset="utf-8"><meta name="robots" content="noindex"><title>Seite entfernt</title></head><body><h1>Diese Seite gibt es nicht mehr</h1><p>Winterdienst gehört nicht zu unserem Angebot. <a href="/">Zur Startseite</a></p></body></html>',
    { status: 410, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
  )
}

import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail } from '@/server/email'
import { company } from '../../../shared/company'
import { CONTACT_LIMITS, EMAIL_REGEX, isContactRole } from '../../../shared/contact-form'

// Längengrenzen je Feld (M07), gemeinsam mit dem Formular im Browser
const LIMITS = CONTACT_LIMITS

type Field = keyof typeof LIMITS

const SUCCESS_MESSAGE = `Vielen Dank für Ihre Nachricht! Wir melden uns ${company.responseTime}.`
const FALLBACK_CONTACT = `Bitte rufen Sie uns an (${company.phone.display}) oder schreiben Sie an ${company.email}.`

// Einfache Ratenbegrenzung je Serverinstanz (M07). Ersetzt keine
// Firewall-Regel, bremst aber Serienanfragen aus einer Quelle.
const RATE_WINDOW_MS = 10 * 60 * 1000
const RATE_MAX_REQUESTS = 5
const RATE_MAX_CLIENTS = 10_000
const recentRequests = new Map<string, number[]>()
let cleanupTimer: ReturnType<typeof setTimeout> | undefined

function removeExpiredClients(now: number) {
  for (const [key, timestamps] of recentRequests) {
    if (now - timestamps[timestamps.length - 1] >= RATE_WINDOW_MS) recentRequests.delete(key)
  }
}

// Ein Timer für die ganze Map, auch ohne Folgeanfrage derselben IP. Nach einer
// eingefrorenen Serverless-Instanz räumt zusätzlich der nächste Request auf.
function scheduleCleanup() {
  if (cleanupTimer || recentRequests.size === 0) return
  let expiresAt = Infinity
  for (const timestamps of recentRequests.values()) {
    expiresAt = Math.min(expiresAt, timestamps[timestamps.length - 1] + RATE_WINDOW_MS)
  }
  cleanupTimer = setTimeout(() => {
    cleanupTimer = undefined
    removeExpiredClients(Date.now())
    scheduleCleanup()
  }, Math.max(1, expiresAt - Date.now()))
  cleanupTimer.unref()
}

function isRateLimited(key: string): boolean {
  const now = Date.now()
  removeExpiredClients(now)
  const timestamps = (recentRequests.get(key) || []).filter((t) => now - t < RATE_WINDOW_MS)
  // Abgelehnte Anfragen verlängern weder die Aufbewahrung noch das Array.
  if (timestamps.length >= RATE_MAX_REQUESTS) return true
  if (!recentRequests.has(key) && recentRequests.size >= RATE_MAX_CLIENTS) return true
  timestamps.push(now)
  recentRequests.set(key, timestamps)
  scheduleCleanup()
  return false
}

function fail(status: number, message: string) {
  return NextResponse.json({ success: false, message, error: message }, { status })
}

// Liefert den getrimmten Wert, '' für fehlende Felder und null für ungültige.
function readField(body: Record<string, unknown>, field: Field): string | null {
  const value = body[field]
  if (value === undefined || value === null) return ''
  if (typeof value !== 'string') return null
  const trimmed = value.trim()
  return trimmed.length > LIMITS[field] ? null : trimmed
}

export async function POST(request: NextRequest) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return fail(400, 'Die Anfrage konnte nicht gelesen werden.')
  }
  if (!body || typeof body !== 'object') {
    return fail(400, 'Die Anfrage konnte nicht gelesen werden.')
  }
  const fields = body as Record<string, unknown>

  // Honeypot: Das Feld ist für Menschen unsichtbar. Ist es gefüllt, wird
  // die Anfrage verworfen, ohne dem Absender das zu verraten (M07).
  if (typeof fields.website === 'string' && fields.website.trim() !== '') {
    return NextResponse.json({ success: true, message: SUCCESS_MESSAGE })
  }

  const clientKey = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unbekannt'
  if (isRateLimited(clientKey)) {
    return fail(429, `Es wurden in kurzer Zeit zu viele Anfragen gesendet. ${FALLBACK_CONTACT}`)
  }

  const name = readField(fields, 'name')
  const email = readField(fields, 'email')
  const phone = readField(fields, 'phone')
  // «Sie sind» (Pflicht, feste Auswahl) und «Grösse» (freiwillig), Audit Inhalt Massnahme 3
  const role = readField(fields, 'role')
  const size = readField(fields, 'size')
  const service = readField(fields, 'service')
  const location = readField(fields, 'location')
  const frequency = readField(fields, 'frequency')
  // Sprache der Seite, von der die Anfrage kommt (M60), nur bekannte Codes
  const language = readField(fields, 'language')
  const message = readField(fields, 'message')

  if (name === null || email === null || phone === null || role === null || size === null || service === null || location === null || frequency === null || message === null) {
    return fail(400, 'Eine Eingabe ist zu lang oder ungültig. Bitte kürzen Sie Ihre Nachricht.')
  }
  if (!name || !email || !message || !role) {
    return fail(400, 'Bitte füllen Sie alle Pflichtfelder aus.')
  }
  // Nur die Werte aus der Auswahl, damit die Anfrage sich eindeutig einordnen lässt (E33, E34)
  if (!isContactRole(role)) {
    return fail(400, 'Bitte wählen Sie aus, wer die Anfrage stellt.')
  }
  // Einwilligung zur Datenschutzerklärung ist Pflicht (M14); der Browser prüft sie, der Server auch
  if (fields.acceptPrivacy !== true) {
    return fail(400, 'Bitte bestätigen Sie die Datenschutzerklärung.')
  }
  if (!EMAIL_REGEX.test(email)) {
    return fail(400, 'Bitte geben Sie eine gültige E-Mail-Adresse ein.')
  }

  // Rolle und Grösse stehen am Anfang der Nachricht, so sieht der Betrieb sofort,
  // wer anfragt und wie gross das Objekt ist. Der Versand in server/email.ts bleibt gleich.
  const details = `Sie sind: ${role}\nGrösse: ${size || 'Nicht angegeben'}`

  // Erfolg nur nach bestätigtem Versand (M04)
  const sent = await sendContactEmail({
    name,
    email,
    phone: phone || undefined,
    service: service || undefined,
    location: location || undefined,
    frequency: frequency || undefined,
    language: language && ['en', 'fr', 'it'].includes(language) ? language : undefined,
    message: `${details}\n\n${message}`,
  })

  if (!sent) {
    return fail(503, `Ihre Nachricht konnte gerade nicht gesendet werden. ${FALLBACK_CONTACT}`)
  }

  return NextResponse.json({ success: true, message: SUCCESS_MESSAGE })
}

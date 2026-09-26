import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail } from '@/server/email'
import { company } from '../../../shared/company'

// Längengrenzen je Feld (M07)
const LIMITS = {
  name: 100,
  email: 254,
  phone: 40,
  service: 100,
  location: 100,
  frequency: 40,
  language: 2,
  message: 5000,
} as const

type Field = keyof typeof LIMITS

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const SUCCESS_MESSAGE = `Vielen Dank für Ihre Nachricht! Wir melden uns ${company.responseTime}.`
const FALLBACK_CONTACT = `Bitte rufen Sie uns an (${company.phone.display}) oder schreiben Sie an ${company.email}.`

// Einfache Ratenbegrenzung je Serverinstanz (M07). Ersetzt keine
// Firewall-Regel, bremst aber Serienanfragen aus einer Quelle.
const RATE_WINDOW_MS = 10 * 60 * 1000
const RATE_MAX_REQUESTS = 5
const recentRequests = new Map<string, number[]>()

function isRateLimited(key: string): boolean {
  const now = Date.now()
  const timestamps = (recentRequests.get(key) || []).filter((t) => now - t < RATE_WINDOW_MS)
  timestamps.push(now)
  recentRequests.set(key, timestamps)
  return timestamps.length > RATE_MAX_REQUESTS
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
  const service = readField(fields, 'service')
  const location = readField(fields, 'location')
  const frequency = readField(fields, 'frequency')
  // Sprache der Seite, von der die Anfrage kommt (M60), nur bekannte Codes
  const language = readField(fields, 'language')
  const message = readField(fields, 'message')

  if (name === null || email === null || phone === null || service === null || location === null || frequency === null || message === null) {
    return fail(400, 'Eine Eingabe ist zu lang oder ungültig. Bitte kürzen Sie Ihre Nachricht.')
  }
  if (!name || !email || !message) {
    return fail(400, 'Bitte füllen Sie alle Pflichtfelder aus.')
  }
  if (!EMAIL_REGEX.test(email)) {
    return fail(400, 'Bitte geben Sie eine gültige E-Mail-Adresse ein.')
  }

  // Erfolg nur nach bestätigtem Versand (M04)
  const sent = await sendContactEmail({
    name,
    email,
    phone: phone || undefined,
    service: service || undefined,
    location: location || undefined,
    frequency: frequency || undefined,
    language: language && ['en', 'fr', 'it'].includes(language) ? language : undefined,
    message,
  })

  if (!sent) {
    return fail(503, `Ihre Nachricht konnte gerade nicht gesendet werden. ${FALLBACK_CONTACT}`)
  }

  return NextResponse.json({ success: true, message: SUCCESS_MESSAGE })
}

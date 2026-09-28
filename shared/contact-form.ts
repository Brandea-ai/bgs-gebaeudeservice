/**
 * Regeln des Kontaktformulars, gemeinsam für Browser und Server (M07, E33, E34,
 * Audit Inhalt Massnahme 3). Die Werte gehen auf Deutsch in die E-Mail an den
 * Betrieb; die Beschriftungen je Sprache stehen in
 * content/<sprache>/navigation.ts (contactForm.roleOptions).
 */

/** «Sie sind»: die Zielgruppen nach E28 und E34, keine Privatmieter */
export const CONTACT_ROLES = [
  'Verwaltung',
  'Stockwerkeigentümerschaft',
  'Eigentümer',
  'Unternehmen',
  'Premium-Privatkunde',
] as const

export type ContactRole = (typeof CONTACT_ROLES)[number]

export function isContactRole(value: string): value is ContactRole {
  return (CONTACT_ROLES as readonly string[]).includes(value)
}

/** Längengrenzen je Feld (M07), im Browser als maxLength, auf dem Server als Prüfung */
export const CONTACT_LIMITS = {
  name: 100,
  email: 254,
  phone: 40,
  role: 40,
  size: 100,
  service: 100,
  location: 100,
  frequency: 40,
  language: 2,
  message: 5000,
} as const

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

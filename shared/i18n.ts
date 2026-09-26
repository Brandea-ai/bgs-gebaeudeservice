import type { PagePath } from './seo'

/**
 * Mehrsprachigkeit (M60, E43, E51). Deutsch ohne Präfix unter den heutigen
 * Adressen, Englisch, Französisch und Italienisch unter /en, /fr und /it mit
 * übersetzten Adressen. Schlüssel jeder Seite ist ihre deutsche Adresse.
 * Keine Umleitung nach Browsersprache (14, Abschnitt 5).
 */

export const locales = ['de', 'en', 'fr', 'it'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'de'

/** Sprachcodes für hreflang und das lang-Attribut (S76) */
export const hreflang: Record<Locale, string> = { de: 'de-CH', en: 'en', fr: 'fr-CH', it: 'it-CH' }
export const ogLocale: Record<Locale, string> = { de: 'de_CH', en: 'en_GB', fr: 'fr_CH', it: 'it_CH' }
/** Name der Sprache in ihrer eigenen Sprache, für den Umschalter */
export const languageNames: Record<Locale, string> = { de: 'Deutsch', en: 'English', fr: 'Français', it: 'Italiano' }

/**
 * Weitere Sprachen erst nach der Prüfung der Übersetzungen (E50). Wie beim
 * Namen (E38) legt next.config.ts den Wert beim Build fest: in der Produktion nur
 * mit LANGUAGES=true, in Previews und lokal ohne Angabe an.
 */
export const activeLocales: readonly Locale[] =
  process.env.LANGUAGES_ACTIVE === 'true' ? locales : [defaultLocale]

export const isActiveLocale = (lang: string): lang is Locale => (activeLocales as readonly string[]).includes(lang)

type Slugs = Record<Exclude<Locale, 'de'>, string>

/** Übersetzte Adressen je Seite ohne Sprachpräfix (E51, S82) */
const slugs = {
  '/': { en: '', fr: '', it: '' },
  '/leistungen': { en: 'services', fr: 'prestations', it: 'servizi' },
  '/leistungen/unterhaltsreinigung': {
    en: 'services/maintenance-cleaning',
    fr: 'prestations/nettoyage-d-entretien',
    it: 'servizi/pulizia-di-manutenzione',
  },
  '/leistungen/bueroreinigung': {
    en: 'services/office-cleaning',
    fr: 'prestations/nettoyage-de-bureaux',
    it: 'servizi/pulizia-di-uffici',
  },
  '/leistungen/sonderreinigungen': {
    en: 'services/special-cleaning',
    fr: 'prestations/nettoyages-speciaux',
    it: 'servizi/pulizie-speciali',
  },
  '/leistungen/baureinigung': {
    en: 'services/construction-cleaning',
    fr: 'prestations/nettoyage-de-chantier',
    it: 'servizi/pulizia-di-cantiere',
  },
  '/leistungen/fenster-und-fassadenreinigung': {
    en: 'services/window-and-facade-cleaning',
    fr: 'prestations/nettoyage-de-vitres-et-facades',
    it: 'servizi/pulizia-di-vetri-e-facciate',
  },
  '/leistungen/industrie-und-hallenreinigung': {
    en: 'services/industrial-cleaning',
    fr: 'prestations/nettoyage-industriel',
    it: 'servizi/pulizia-industriale',
  },
  '/leistungen/hauswartung': {
    en: 'services/caretaking',
    fr: 'prestations/conciergerie',
    it: 'servizi/custodia-di-stabili',
  },
  '/leistungen/aussen-und-gruenflaechenpflege': {
    en: 'services/grounds-maintenance',
    fr: 'prestations/entretien-des-espaces-verts',
    it: 'servizi/manutenzione-del-verde',
  },
  '/leistungen/facility-services': {
    en: 'services/facility-services',
    fr: 'prestations/facility-services',
    it: 'servizi/facility-services',
  },
  '/premium': { en: 'premium', fr: 'premium', it: 'premium' },
  '/premium/luxusimmobilien': {
    en: 'premium/luxury-properties',
    fr: 'premium/proprietes-de-luxe',
    it: 'premium/immobili-di-lusso',
  },
  '/premium/privatjet': { en: 'premium/private-jet', fr: 'premium/jet-prive', it: 'premium/jet-privato' },
  '/premium/yacht': { en: 'premium/yacht', fr: 'premium/yacht', it: 'premium/yacht' },
  '/einzugsgebiet': { en: 'service-area', fr: 'zone-d-intervention', it: 'zona-di-servizio' },
  '/blog': { en: 'guide', fr: 'guide', it: 'guida' },
  '/blog/richtige-reinigungsfirma-finden': {
    en: 'guide/choosing-a-cleaning-company',
    fr: 'guide/choisir-une-entreprise-de-nettoyage',
    it: 'guida/scegliere-un-impresa-di-pulizie',
  },
  '/blog/reinigungskosten-schweiz': {
    en: 'guide/cost-of-maintenance-cleaning',
    fr: 'guide/cout-du-nettoyage-d-entretien',
    it: 'guida/costi-della-pulizia-di-manutenzione',
  },
  '/ueber-uns': { en: 'about-us', fr: 'a-propos', it: 'chi-siamo' },
  '/kontakt': { en: 'contact', fr: 'contact', it: 'contatto' },
  '/impressum': { en: 'legal-notice', fr: 'mentions-legales', it: 'note-legali' },
  '/datenschutz': { en: 'privacy-policy', fr: 'protection-des-donnees', it: 'protezione-dei-dati' },
} satisfies Record<PagePath, Slugs>

export const pagePaths = Object.keys(slugs) as PagePath[]

/** Adresse einer Seite in einer Sprache, etwa /fr/prestations/conciergerie */
export function localizePath(path: PagePath, lang: Locale): string {
  if (lang === 'de') return path
  const slug = slugs[path][lang]
  return slug ? `/${lang}/${slug}` : `/${lang}`
}

/** Seite zu den Adressteilen nach dem Sprachpräfix, für die Catch-all-Routen */
export function pageForSlug(lang: Locale, segments: string[] = []): PagePath | undefined {
  const joined = segments.join('/')
  if (lang === 'de') return pagePaths.find((path) => path === `/${joined}` || (path === '/' && joined === ''))
  return pagePaths.find((path) => slugs[path][lang] === joined)
}

/** Adressteile einer Seite für generateStaticParams */
export function segmentsFor(path: PagePath, lang: Locale): string[] {
  const full = lang === 'de' ? path : slugs[path][lang]
  return full.split('/').filter(Boolean)
}

/** Interne Links im Fliesstext stehen mit deutscher Adresse, ein Hash oder fremde Adressen bleiben */
export function localizeHref(href: string, lang: Locale): string {
  if (lang === 'de' || !href.startsWith('/')) return href
  const [path, hash] = href.split('#')
  const known = pagePaths.find((p) => p === path)
  const localized = known ? localizePath(known, lang) : `/${lang}${path === '/' ? '' : path}`
  return hash ? `${localized}#${hash}` : localized
}

/** Sprachversionen einer Seite für hreflang (S76), x-default auf Deutsch */
export function alternatesFor(path: PagePath): Record<string, string> {
  const languages: Record<string, string> = {}
  for (const lang of activeLocales) languages[hreflang[lang]] = localizePath(path, lang)
  if (activeLocales.length > 1) languages['x-default'] = path
  return languages
}

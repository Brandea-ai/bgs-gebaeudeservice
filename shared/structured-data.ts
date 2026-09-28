import { company } from './company'
import { previewImage, siteUrl, trailFor, type PagePath } from './seo'
import { getDict } from '../content'
import { hreflang, localizePath, type Locale } from './i18n'
import { cantonTitle } from './cantons'

/**
 * Strukturierte Daten (GLOBAL-010, Webseite-Analyse/01, Abschnitt G).
 * Nur Angaben, die sichtbar auf der Website stehen und belegt sind (E18):
 * keine Bewertungen, keine Preise. Die Öffnungszeiten stehen sichtbar im Kontaktbereich.
 */

const organizationId = `${siteUrl}/#organization`

const absolute = (path: string) => new URL(path, siteUrl).href

// Einzugsgebiet: ganze Kantone (E30), Namen in der Sprache der Seite
const areaServed = (lang: Locale) =>
  company.cantons.map((name) => ({ '@type': 'AdministrativeArea', name: cantonTitle(name, lang) }))

/** Das Unternehmen, einmal je Seite im Layout. Leistungen verweisen per @id darauf. */
export const organizationJsonLd = (lang: Locale = 'de') => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': organizationId,
  name: company.brand,
  // Brücke zur bisherigen Marke, die alle Fremdquellen (sameAs) führen, nur mit NEW_BRAND (E76)
  ...(company.premiumBrand ? { alternateName: 'BGS Gebäudeservice' } : {}),
  legalName: company.legalName,
  description: getDict(lang).pages['/'].description,
  url: absolute('/'),
  image: absolute(previewImage('/', lang).url),
  telephone: company.phone.href.replace('tel:', ''),
  vatID: company.vat,
  address: {
    '@type': 'PostalAddress',
    streetAddress: company.address.street,
    postalCode: company.address.postalCode,
    addressLocality: company.address.city,
    addressRegion: company.address.region,
    addressCountry: company.address.country,
  },
  geo: { '@type': 'GeoCoordinates', latitude: company.geo.latitude, longitude: company.geo.longitude },
  openingHoursSpecification: company.openingHours.map(({ days, opens, closes }) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: days.map((day) => `https://schema.org/${day}`),
    opens,
    closes,
  })),
  sameAs: [...company.sameAs],
  areaServed: areaServed(lang),
  // Deutsch, Englisch, Französisch und Italienisch (company.languages)
  knowsLanguage: ['de', 'en', 'fr', 'it'],
})

/** Eine Leistung auf ihrer eigenen Seite. Premium-Leistungen tragen die Premium-Linie als Marke (E47). */
export function serviceJsonLd(path: PagePath, lang: Locale = 'de') {
  const dict = getDict(lang)
  const { label, description } = dict.pages[path]
  // Premium-Seiten tragen im Markup den ausgeschriebenen Leistungsnamen statt des kurzen Menünamens (N8)
  const premiumName = dict.seiten.premiumOverview.offers.find((offer) => offer.path === path)?.name
  const url = localizePath(path, lang)
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absolute(url)}#leistung`,
    name: premiumName ?? label,
    serviceType: label,
    description,
    url: absolute(url),
    provider: { '@id': organizationId },
    areaServed: areaServed(lang),
    ...(path.startsWith('/premium/') && company.premiumBrand ? { brand: { '@type': 'Brand', name: company.premiumBrand } } : {}),
  }
}

/** Brotkrumen wie sichtbar auf der Seite (M20) */
export function breadcrumbJsonLd(path: PagePath, lang: Locale = 'de') {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trailFor(path, lang).map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: absolute(localizePath(crumb.path, lang)),
    })),
  }
}

/** Ratgeberartikel (P29, P30): Autor und Herausgeber ist das Unternehmen, keine erfundenen Personen */
export function articleJsonLd(path: PagePath, article: { h1: string; updated: string; published?: string }, lang: Locale = 'de') {
  const url = localizePath(path, lang)
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${absolute(url)}#artikel`,
    headline: article.h1,
    description: getDict(lang).pages[path].description,
    // Veröffentlichungsdatum erst ab dem Launch (M19)
    ...(article.published ? { datePublished: article.published } : {}),
    dateModified: article.updated,
    image: absolute(previewImage(path, lang).url),
    author: { '@type': 'Organization', '@id': organizationId, name: company.brand, url: absolute('/') },
    publisher: { '@id': organizationId },
    mainEntityOfPage: absolute(url),
    url: absolute(url),
    inLanguage: hreflang[lang],
  }
}

/** Übersicht mehrerer Leistungen oder Artikel als Liste (Leistungen, Premium, Ratgeber) */
export function itemListJsonLd(path: PagePath, items: PagePath[], lang: Locale = 'de') {
  const texts = getDict(lang).pages
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${absolute(localizePath(path, lang))}#liste`,
    name: texts[path].label,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: texts[item].label,
      url: absolute(localizePath(item, lang)),
    })),
  }
}

/** Über uns und Kontakt als Seitentyp, verweist auf das Unternehmen */
export function pageJsonLd(path: PagePath, type: 'AboutPage' | 'ContactPage', lang: Locale = 'de') {
  const { label, description } = getDict(lang).pages[path]
  const url = absolute(localizePath(path, lang))
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url}#seite`,
    name: label,
    description,
    url,
    inLanguage: hreflang[lang],
    about: { '@id': organizationId },
    mainEntity: { '@id': organizationId },
  }
}

/** Seitenname für die Suche (Google Site Names), nur auf der Startseite je Sprache */
export const websiteJsonLd = (lang: Locale = 'de') => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  name: company.brand,
  ...(company.premiumBrand ? { alternateName: 'BGS Gebäudeservice' } : {}),
  url: absolute(localizePath('/', lang)),
  inLanguage: hreflang[lang],
  publisher: { '@id': organizationId },
})

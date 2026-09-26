import { company } from './company'
import { pages, siteUrl, trailFor, type PagePath } from './seo'

/**
 * Strukturierte Daten (GLOBAL-010, Webseite-Analyse/01, Abschnitt G).
 * Nur Angaben, die sichtbar auf der Website stehen und belegt sind (E18):
 * keine Bewertungen, keine Preise, keine Öffnungszeiten ohne Anzeige.
 */

const organizationId = `${siteUrl}/#organization`

const absolute = (path: string) => new URL(path, siteUrl).href

// Einzugsgebiet: ganze Kantone (E30)
const areaServed = company.cantons.map((name) => ({ '@type': 'AdministrativeArea', name: `Kanton ${name}` }))

/** Das Unternehmen, einmal je Seite im Layout. Leistungen verweisen per @id darauf. */
export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': organizationId,
  name: company.brand,
  legalName: company.legalName,
  url: absolute('/'),
  telephone: company.phone.href.replace('tel:', ''),
  address: {
    '@type': 'PostalAddress',
    streetAddress: company.address.street,
    postalCode: company.address.postalCode,
    addressLocality: company.address.city,
    addressRegion: 'LU',
    addressCountry: 'CH',
  },
  areaServed,
  // Deutsch, Englisch, Französisch und Italienisch (company.languages)
  knowsLanguage: ['de', 'en', 'fr', 'it'],
}

/** Eine Leistung auf ihrer eigenen Seite. Premium-Leistungen tragen die Premium-Linie als Marke (E47). */
export function serviceJsonLd(path: PagePath) {
  const { label, description } = pages[path]
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absolute(path)}#leistung`,
    name: label,
    serviceType: label,
    description,
    url: absolute(path),
    provider: { '@id': organizationId },
    areaServed,
    ...(path.startsWith('/premium/') ? { brand: { '@type': 'Brand', name: company.premiumBrand } } : {}),
  }
}

/** Brotkrumen wie sichtbar auf der Seite (M20) */
export function breadcrumbJsonLd(path: PagePath) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trailFor(path).map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: absolute(crumb.path),
    })),
  }
}

/** Ratgeberartikel (P29, P30): Autor und Herausgeber ist das Unternehmen, keine erfundenen Personen */
export function articleJsonLd(path: PagePath, article: { h1: string; updated: string; published?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${absolute(path)}#artikel`,
    headline: article.h1,
    description: pages[path].description,
    // Veröffentlichungsdatum erst ab dem Launch (M19)
    ...(article.published ? { datePublished: article.published } : {}),
    dateModified: article.updated,
    author: { '@id': organizationId },
    publisher: { '@id': organizationId },
    mainEntityOfPage: absolute(path),
    url: absolute(path),
    inLanguage: 'de-CH',
  }
}

/**
 * Zentrale Firmen- und Kontaktangaben (M54, Webseite-Analyse/11).
 * Nur Angaben mit Eigenangabe des Kunden oder Beleg. Änderungen nur hier.
 */

/**
 * Der neue Name wird erst nach der Markenrecherche öffentlich (E38). Welcher Name
 * gilt, legt next.config.ts beim Build fest: in der Produktion nur mit
 * NEW_BRAND=true, in Previews und lokal ohne Angabe der neue Name.
 */
export const newBrandActive = process.env.NEW_BRAND_ACTIVE === 'true'

// Dachmarke und Premium-Linie aus Runde 4 (E46, E47), sonst die Arbeitsmarke (E26)
const names = newBrandActive
  ? { brand: 'Mantena', premiumBrand: 'Clavea' }
  : { brand: 'BGS Gebäudeservice', premiumBrand: null }

export const company = {
  brand: names.brand,
  premiumBrand: names.premiumBrand,
  // Eingetragene Firma für Impressum, Offerten und Rechnungen (Art. 954a OR)
  legalName: 'BGS - Gebäudeservice GmbH',
  uid: 'CHE-108.687.458',
  address: {
    street: 'Tannhof 10',
    postalCode: '6020',
    city: 'Emmenbrücke',
  },
  phone: { display: '041 320 56 10', href: 'tel:+41413205610' },
  mobile: { display: '079 711 39 40', href: 'tel:+41797113940' },
  // Vorläufige Adresse bis zur Adresse des Kunden (E15, W05)
  email: 'admin@brandea.de',
  responseTime: 'innerhalb von 24 Stunden an Werktagen',
  // Einzugsgebiet: ganze Kantone, alle Leistungen überall (E30, R4d)
  cantons: ['Luzern', 'Zug', 'Aargau', 'Nidwalden', 'Obwalden'],
  // Sprachen der Mitarbeitenden (E18)
  languages: ['Deutsch', 'Englisch', 'Französisch', 'Italienisch'],
} as const

/** «a, b und c» für Aufzählungen im Fliesstext */
export function listDe(items: readonly string[]): string {
  return items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} und ${items[items.length - 1]}`
}

/** «Luzern, Zug, Aargau, Nidwalden und Obwalden» */
export const cantonList = listDe(company.cantons)

/** Premium-Bereich in Menü, Footer und Brotkrumen */
export const premiumLabel = company.premiumBrand ? `${company.premiumBrand} Premium` : 'Premium'

/** Marke im Titel der Premium-Seiten (E37, E47) */
export const premiumTitleBrand = company.premiumBrand ? `${company.premiumBrand} von ${company.brand}` : company.brand

/** Zeile über der Hauptüberschrift der Premium-Seiten */
export const premiumLine = company.premiumBrand ? `${company.premiumBrand} · Premium-Linie von ${company.brand}` : 'Premium'

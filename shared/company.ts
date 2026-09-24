/**
 * Zentrale Firmen- und Kontaktangaben (M54, Webseite-Analyse/11).
 * Nur Angaben mit Eigenangabe des Kunden oder Beleg. Änderungen nur hier.
 */
export const company = {
  // Arbeitsmarke bis zum Namensentscheid (E26)
  brand: 'BGS Gebäudeservice',
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
} as const

import { company, premiumLabel } from '../../shared/company'
import type { PagePath } from '../../shared/seo'

/**
 * Texte von Menü, Footer, Kontaktformular und 404-Seite (M54, E61). Menü und
 * Footer nutzen dieselben Leistungsgruppen, damit beide gleich bleiben.
 */

export type NavLink = { path: PagePath; label: string }

/** Leistungsgruppen nach Zielbild v2 (03, Abschnitt 2a), Kernleistungen zuerst (M39) */
export const serviceGroups: { title: string; links: NavLink[] }[] = [
  {
    title: 'Reinigung',
    links: [
      { path: '/leistungen/unterhaltsreinigung', label: 'Unterhaltsreinigung' },
      { path: '/leistungen/bueroreinigung', label: 'Büro- und Praxisreinigung' },
      { path: '/leistungen/sonderreinigungen', label: 'Sonderreinigungen' },
      { path: '/leistungen/baureinigung', label: 'Bau- und Bauendreinigung' },
      { path: '/leistungen/fenster-und-fassadenreinigung', label: 'Fenster und Fassaden' },
      { path: '/leistungen/industrie-und-hallenreinigung', label: 'Industrie und Hallen' },
    ],
  },
  {
    title: 'Hauswartung und Pflege',
    links: [
      { path: '/leistungen/hauswartung', label: 'Hauswartung' },
      { path: '/leistungen/aussen-und-gruenflaechenpflege', label: 'Aussen- und Grünflächenpflege' },
      { path: '/leistungen/facility-services', label: 'Facility Services' },
      { path: '/leistungen', label: 'Alle Leistungen' },
    ],
  },
  {
    title: premiumLabel,
    links: [
      { path: '/premium', label: 'Premium im Überblick' },
      { path: '/premium/luxusimmobilien', label: 'Luxusimmobilien' },
      { path: '/premium/privatjet', label: 'Privatjet-Reinigung' },
      { path: '/premium/yacht', label: 'Yacht-Reinigung' },
    ],
  },
]

export const menu = {
  home: { path: '/', label: 'Home' } satisfies NavLink,
  services: 'Leistungen',
  after: [
    { path: '/einzugsgebiet', label: 'Einzugsgebiet' },
    { path: '/ueber-uns', label: 'Über uns' },
    { path: '/blog', label: 'Ratgeber' },
  ] satisfies NavLink[],
  cta: { path: '/kontakt', label: 'Kontakt aufnehmen' } satisfies NavLink,
  open: 'Menü öffnen',
  close: 'Menü schliessen',
  label: 'Hauptmenü',
}

export const footer = {
  newBrandLine: `Eine Marke der ${company.legalName}`,
  about: `Reinigung und Hauswartung für Unternehmen und anspruchsvolle Privatkunden. Sitz in ${company.address.city}.`,
  companyLinks: [
    { path: '/ueber-uns', label: 'Über uns' },
    { path: '/kontakt', label: 'Kontakt' },
    { path: '/blog', label: 'Ratgeber' },
  ] satisfies NavLink[],
  areaTitle: 'Einzugsgebiet',
  areaLink: { path: '/einzugsgebiet', label: 'Luzern, Zug, Aargau, Nid- und Obwalden' } satisfies NavLink,
  rights: `${company.legalName}. Alle Rechte vorbehalten.`,
  legal: [
    { path: '/impressum', label: 'Impressum' },
    { path: '/datenschutz', label: 'Datenschutz' },
  ] satisfies NavLink[],
}

/** Kontaktformular im Footer (M04, M07, M30). Die Werte gehen als Text in die E-Mail. */
export const contactForm = {
  title: 'Jetzt Kontakt aufnehmen',
  intro: `Fordern Sie eine unverbindliche Offerte an. Wir melden uns ${company.responseTime}.`,
  choose: 'Bitte wählen...',
  fields: {
    name: { label: 'Name *', placeholder: 'Ihr vollständiger Name' },
    email: { label: 'E-Mail *', placeholder: 'name@firma.ch' },
    phone: { label: 'Telefon', placeholder: 'Ihre Telefonnummer' },
    service: { label: 'Gewünschte Leistung' },
    location: { label: 'Ort oder PLZ des Objekts', placeholder: 'z. B. 6300 Zug' },
    frequency: { label: 'Rhythmus' },
    message: { label: 'Ihre Nachricht *', placeholder: 'Beschreiben Sie Ihr Anliegen...' },
  },
  serviceOptions: [
    {
      group: 'Premium',
      options: [
        { value: 'Luxusimmobilien', label: 'Luxusimmobilien (Villen, Lofts)' },
        { value: 'Privatjet-Reinigung', label: 'Privatjet-Reinigung' },
        { value: 'Yacht-Reinigung', label: 'Yacht-Reinigung' },
        { value: 'Zweitwohnungen und Residences', label: 'Zweitwohnungen und Residences' },
        { value: 'Hotels', label: 'Hotels' },
      ],
    },
    {
      group: 'Reinigung und Hauswartung',
      options: [
        { value: 'Unterhaltsreinigung', label: 'Unterhaltsreinigung' },
        { value: 'Büroreinigung', label: 'Büro- und Praxisreinigung' },
        { value: 'Sonderreinigungen', label: 'Sonderreinigungen (Grund-, Umzugsreinigung)' },
        { value: 'Baureinigung', label: 'Bau- und Bauendreinigung' },
        { value: 'Fenster- und Fassadenreinigung', label: 'Fenster- und Fassadenreinigung' },
        { value: 'Industrie- und Hallenreinigung', label: 'Industrie-, Hallen- und Maschinenreinigung' },
        { value: 'Hauswartung', label: 'Hauswartung' },
        { value: 'Aussen- und Grünflächenpflege', label: 'Aussen- und Grünflächenpflege' },
        { value: 'Facility Services', label: 'Facility Services (mehrere Leistungen)' },
      ],
    },
    {
      group: 'Sonstiges',
      options: [
        { value: 'Beratung', label: 'Beratung' },
        { value: 'Andere', label: 'Andere' },
      ],
    },
  ],
  frequencyOptions: ['Einmalig', 'Wöchentlich', 'Mehrmals pro Woche', 'Täglich', 'Noch offen'],
  consentBefore: 'Ich habe die',
  consentLink: 'Datenschutzerklärung',
  consentAfter: 'zur Kenntnis genommen und bin einverstanden, dass meine Angaben zur Bearbeitung meiner Anfrage verwendet werden. *',
  required: '* Pflichtfelder',
  submit: 'Nachricht senden',
  sending: 'Wird gesendet...',
  success: `Vielen Dank! Ihre Nachricht wurde versendet. Wir melden uns ${company.responseTime}.`,
  error: `Ihre Nachricht konnte nicht gesendet werden. Bitte rufen Sie uns an (${company.phone.display}) oder schreiben Sie an ${company.email}.`,
}

export const notFound = {
  title: 'Seite nicht gefunden',
  text: 'Diese Seite gibt es nicht oder nicht mehr. Vielleicht hilft Ihnen einer dieser Links weiter.',
  links: [
    { path: '/', label: 'Zur Startseite' },
    { path: '/leistungen', label: 'Alle Leistungen' },
    { path: '/kontakt', label: 'Kontakt und Offerte' },
  ] satisfies NavLink[],
}

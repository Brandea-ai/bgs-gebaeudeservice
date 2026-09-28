import { cantonList, company, premiumLabel } from '../../shared/company'
import type { PagePath } from '../../shared/seo'
import type { KantonKey } from '../../shared/cantons'

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
      { path: '/leistungen/sonderreinigungen', label: 'Grund- und Sonderreinigung' },
      { path: '/leistungen/umzugsreinigung', label: 'Umzugsreinigung' },
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

/**
 * Kantone im Mega-Menü «Einzugsgebiet» und auf der Übersicht (E80). Reihenfolge
 * wie company.cantons, Adresse /einzugsgebiet/<Schlüssel>. Kurztext höchstens 60 Zeichen.
 */
export const kantonMenu: Record<KantonKey, { label: string; text: string }> = {
  luzern: { label: 'Luzern', text: 'Unser Sitz: Stadt, Agglomeration und Seeufer' },
  zug: { label: 'Zug', text: 'Büros, Firmensitze und Wohnen am See' },
  aargau: { label: 'Aargau', text: 'Industrie, Hallen, Lager und Liegenschaften' },
  nidwalden: { label: 'Nidwalden', text: 'Seeufer, Zweitwohnungen und Hauswartung' },
  obwalden: { label: 'Obwalden', text: 'Sarnen, Engelberg, Zweitwohnungen und Hotels' },
}

/** Mega-Menü «Einzugsgebiet»: Kantone, Übersicht und Sitz */
export const areaMenu = {
  label: 'Einzugsgebiet',
  cantonsTitle: 'Kantone',
  cantons: kantonMenu,
  overview: { path: '/einzugsgebiet', label: 'Das ganze Einzugsgebiet' } satisfies NavLink,
  overviewText: 'Karte, Orte an den Seen und alle Kantone im Überblick',
  seatTitle: 'Unser Sitz',
  seatText: 'Von hier aus arbeiten wir in fünf Kantonen, mit allen Leistungen und überall zu denselben Bedingungen.',
}

export const menu = {
  home: { path: '/', label: 'Home' } satisfies NavLink,
  services: 'Leistungen',
  // Einzugsgebiet steht als eigenes Mega-Menü zwischen Leistungen und diesen Links (areaMenu)
  after: [
    { path: '/ueber-uns', label: 'Über uns' },
    { path: '/blog', label: 'Ratgeber' },
  ] satisfies NavLink[],
  // Hauptaktion im Kopf führt zum Formular im Footer (M31, E68)
  cta: { href: '#kontakt-formular', label: 'Offerte anfragen' },
  open: 'Menü öffnen',
  close: 'Menü schliessen',
  label: 'Hauptmenü',
}

export const footer = {
  newBrandLine: `Eine Marke der ${company.legalName}`,
  about: `Reinigung und Hauswartung für Unternehmen und anspruchsvolle Privatkunden. Sitz in ${company.address.city}, tätig in den Kantonen ${cantonList}.`,
  companyLinks: [
    { path: '/ueber-uns', label: 'Über uns' },
    { path: '/kontakt', label: 'Kontakt' },
    { path: '/blog', label: 'Ratgeber' },
  ] satisfies NavLink[],
  areaTitle: 'Unternehmen',
  areaLink: { path: '/einzugsgebiet', label: 'Einzugsgebiet' } satisfies NavLink,
  rights: `${company.legalName}. Alle Rechte vorbehalten.`,
  legal: [
    { path: '/impressum', label: 'Impressum' },
    { path: '/datenschutz', label: 'Datenschutz' },
  ] satisfies NavLink[],
}

/** Kontaktformular im Footer (M04, M07, M30). Die Werte gehen als Text in die E-Mail. */
export const contactForm = {
  title: 'Offerte anfragen',
  intro: `Beschreiben Sie uns Objekt und Anliegen. Wir melden uns ${company.responseTime} und vereinbaren die Besichtigung, kostenlos und unverbindlich.`,
  choose: 'Bitte wählen...',
  fields: {
    name: { label: 'Name *', placeholder: 'Ihr vollständiger Name' },
    email: { label: 'E-Mail *', placeholder: 'name@firma.ch' },
    phone: { label: 'Telefon', placeholder: 'Ihre Telefonnummer' },
    service: { label: 'Gewünschte Leistung' },
    location: { label: 'Ort oder PLZ des Objekts', placeholder: 'z. B. 6300 Zug' },
    frequency: { label: 'Gewünschter Rhythmus' },
    message: { label: 'Objekt und Anliegen *', placeholder: 'Zum Beispiel: Art des Objekts, ungefähre Fläche oder Anzahl Wohnungen, gewünschter Rhythmus und Startzeitpunkt' },
  },
  serviceOptions: [
    {
      group: 'Reinigung und Hauswartung',
      options: [
        { value: 'Unterhaltsreinigung', label: 'Unterhaltsreinigung' },
        { value: 'Büroreinigung', label: 'Büro- und Praxisreinigung' },
        { value: 'Sonderreinigungen', label: 'Grund- und Sonderreinigung' },
        { value: 'Umzugsreinigung', label: 'Umzugsreinigung mit Abnahmegarantie' },
        { value: 'Baureinigung', label: 'Bau- und Bauendreinigung' },
        { value: 'Fenster- und Fassadenreinigung', label: 'Fenster- und Fassadenreinigung' },
        { value: 'Industrie- und Hallenreinigung', label: 'Industrie-, Hallen- und Maschinenreinigung' },
        { value: 'Hauswartung', label: 'Hauswartung' },
        { value: 'Aussen- und Grünflächenpflege', label: 'Aussen- und Grünflächenpflege' },
        { value: 'Facility Services', label: 'Facility Services (mehrere Leistungen)' },
      ],
    },
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
  submit: 'Anfrage senden',
  sending: 'Wird gesendet...',
  success: `Vielen Dank, Ihre Anfrage ist bei uns eingegangen. Wir melden uns ${company.responseTime} und vereinbaren mit Ihnen einen Termin für die Besichtigung. Wenn es eilt, erreichen Sie uns unter ${company.phone.display}.`,
  successTitle: 'Anfrage eingegangen',
  errors: {
    required: 'Bitte füllen Sie dieses Feld aus.',
    email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
    consent: 'Bitte bestätigen Sie die Datenschutzerklärung, damit wir Ihre Anfrage bearbeiten dürfen.',
    summary: 'Bitte prüfen Sie die markierten Felder.',
  },
  error: `Ihre Anfrage konnte nicht gesendet werden. Bitte rufen Sie uns an (${company.phone.display}) oder schreiben Sie an ${company.email}.`,
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

/** Alles, was Menü, Footer, Formular und 404 brauchen, in einem Objekt (M60) */
export const nav = {
  serviceGroups,
  menu,
  areaMenu,
  footer,
  contactForm,
  notFound,
  languageSwitch: 'Sprache',
  languageSwitchFooter: 'Sprache im Fussbereich',
  chrome: {
    skip: 'Zum Inhalt springen',
    answer: `Antwort ${company.responseTime}`,
    seat: `Sitz in ${company.address.city}`,
    megaTitle: 'Offerte vor Ort',
    megaText: 'Wir sehen uns Ihr Objekt an und erstellen eine schriftliche Offerte, kostenlos und unverbindlich.',
    premiumTeaser: 'Diskrete Reinigung und Pflege für Villen, Privatjets und Yachten.',
    heroLanguages: 'Beratung in Ihrer Sprache',
    phone: 'Telefon',
    email: 'E-Mail',
    address: 'Adresse',
    contactEyebrow: 'Kontakt',
    trust: [
      { key: 'seit', label: 'Seit 2006', text: 'Reinigung und Hauswartung' },
      { key: 'versichert', label: 'CHF 10 Mio.', text: 'Betriebshaftpflicht' },
      { key: 'register', label: 'Handelsregister', text: 'Kanton Luzern, mit UID' },
      { key: 'sprachen', label: 'Vier Sprachen', text: 'Deutsch, Englisch, Französisch, Italienisch' },
      { key: 'antwort', label: '24 Stunden', text: 'Antwort an Werktagen' },
      { key: 'offerte', label: 'Kostenlos', text: 'Offerte nach Besichtigung' },
    ],
    mobileCta: 'Offerte anfragen',
    scrollHint: 'Weiter',
  },
  errorPage: { title: 'Leider ist ein Fehler aufgetreten.', reload: 'Seite neu laden' },
}

export type NavDictionary = typeof nav

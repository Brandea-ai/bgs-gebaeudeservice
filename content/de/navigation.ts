import { cantonList, company, premiumLabel } from '../../shared/company'
import type { PagePath } from '../../shared/seo'
import type { KantonKey } from '../../shared/cantons'
import type { ContactRole } from '../../shared/contact-form'

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
  about: `Reinigung und Hauswartung für Unternehmen und anspruchsvolle Privatkunden. Sitz in ${company.seat} LU, tätig in den Kantonen ${cantonList}.`,
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

/**
 * Kontaktformular (M04, M07, M30, Audit Inhalt Massnahme 3). Die Werte gehen als
 * Text in die E-Mail. «Sie sind» und «Grösse» ordnen die Anfrage ein (E33, E34),
 * die Werte der Auswahl stehen in shared/contact-form.ts.
 */
export const contactForm = {
  title: 'Offerte anfragen',
  intro: 'Beschreiben Sie uns Objekt und Anliegen. Mit diesen Angaben bereiten wir die Besichtigung vor.',
  premiumIntro: 'Nennen Sie uns Objekt, Standort und den gewünschten Einsatz. Mit diesen Angaben können wir Ihre Anfrage einordnen.',
  additionalDetails: 'Weitere Angaben (optional)',
  choose: 'Bitte wählen...',
  fields: {
    role: { label: 'Sie sind *' },
    name: { label: 'Name *', placeholder: 'Ihr vollständiger Name' },
    email: { label: 'E-Mail *', placeholder: 'name@firma.ch' },
    phone: { label: 'Telefon', placeholder: 'Ihre Telefonnummer' },
    service: { label: 'Gewünschte Leistung' },
    size: { label: 'Grösse des Objekts', placeholder: 'z. B. 12 Wohnungen oder 800 m²' },
    location: { label: 'Ort oder PLZ des Objekts', placeholder: 'z. B. 6300 Zug' },
    frequency: { label: 'Gewünschter Rhythmus' },
    message: {
      label: 'Objekt und Anliegen *',
      placeholder: 'Zum Beispiel: Treppenhaus und Waschküche in zwei Mehrfamilienhäusern, jede Woche, ab Januar',
      hint: 'Pläne, Flächenlisten oder Fotos schicken Sie uns am besten per E-Mail an',
    },
  },
  /** Beschriftung je Wert aus CONTACT_ROLES, in dieser Reihenfolge */
  roleOptions: {
    Verwaltung: 'Verwaltung',
    Stockwerkeigentümerschaft: 'Stockwerkeigentümerschaft',
    Eigentümer: 'Eigentümerin oder Eigentümer',
    Unternehmen: 'Unternehmen',
    'Premium-Privatkunde': 'Privatkunde (Villa, Zweitwohnung, Yacht oder Jet)',
  } satisfies Record<ContactRole, string>,
  /** Premium-Seiten: eigene Beispiele statt Wohnungen und Büros (Audit visuell, Umbau 2) */
  premiumPlaceholders: {
    '/premium': {
      size: 'z. B. Villa, 400 m² Wohnfläche',
      message: 'Zum Beispiel: Zweitwohnung am See, Pflege während Ihrer Abwesenheit, erster Termin im Frühling',
    },
    '/premium/luxusimmobilien': {
      size: 'z. B. Villa, 400 m² auf 3 Etagen',
      message: 'Zum Beispiel: Villa am Zugersee, Parkett und Naturstein, jede Woche während Ihrer Abwesenheit',
    },
    '/premium/privatjet': {
      size: 'z. B. Flugzeugtyp, Kabinenlänge',
      message: 'Zum Beispiel: Kabine und Galley nach jedem Flug, Standort des Flugzeugs, gewünschte Zeiten',
    },
    '/premium/yacht': {
      size: 'z. B. Motoryacht, 14 m Länge',
      message: 'Zum Beispiel: Liegeplatz am Vierwaldstättersee, Reinigung vor Saisonbeginn und nach Anlässen an Bord',
    },
  } satisfies Partial<Record<PagePath, { size: string; message: string }>>,
  oneOffTitle: 'Termin für den Einsatz',
  oneOffHint: 'Bitte nennen Sie im Anliegen den gewünschten Reinigungs- oder Übergabetermin.',
  oneOffPlaceholders: {
    'Sonderreinigungen': {
      size: 'z. B. 180 m² Natursteinboden',
      message: 'Zum Beispiel: Kalkrückstände auf Naturstein im Eingangsbereich, rund 180 m², Reinigung vor der Wiedereröffnung am 15. Oktober',
    },
    'Umzugsreinigung': {
      size: 'z. B. 4 Wohnungen mit je 80 m²',
      message: 'Zum Beispiel: Endreinigung von vier Wohnungen für die Verwaltung, Übergabe am 30. November, Reinigung in der Woche davor',
    },
    'Baureinigung': {
      size: 'z. B. 600 m² auf 2 Etagen',
      message: 'Zum Beispiel: Bauendreinigung von Büroflächen nach dem Innenausbau, Fertigstellung am 10. Oktober, Übergabe am 16. Oktober',
    },
  } satisfies Record<string, { size: string; message: string }>,
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
  success: `Vielen Dank, Ihre Anfrage wurde übermittelt. Wir melden uns bei Ihnen. Wenn es eilt, erreichen Sie uns unter ${company.phone.display}.`,
  /**
   * «So geht es weiter» unter Formular und Kontaktwegen. Die Antwortzeit fällt im
   * Kontaktbereich nur einmal (Audit visuell, Umbau 3): hier, oder in der
   * Einleitung der Seite, dann steht als erster Schritt nextStepPlain.
   */
  nextTitle: 'So geht es weiter',
  nextSteps: [`Wir melden uns ${company.responseTime}.`, 'Wir besichtigen das Objekt vor Ort, kostenlos.', 'Sie erhalten eine schriftliche Offerte.'],
  nextStepPlain: 'Wir melden uns und vereinbaren den Termin.',
  premiumVisitStep: 'Wir stimmen Pflegebedarf, Standort und Zugang mit Ihnen ab.',
  /** Schmales Kontaktband auf Impressum und Datenschutz statt des Formulars (Audit visuell, /impressum) */
  band: {
    title: 'Fragen oder eine Offerte?',
    text: 'Rufen Sie uns an, schreiben Sie uns oder nutzen Sie das Formular auf der Kontaktseite.',
    action: 'Zum Formular',
  },
  /** Adresse in den Kontaktwegen führt zur Karte auf der Kontaktseite */
  mapLink: 'Zur Karte',
  successTitle: 'Anfrage eingegangen',
  errors: {
    required: 'Bitte füllen Sie dieses Feld aus.',
    role: 'Bitte wählen Sie aus, wer die Anfrage stellt.',
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
    answer: 'Beratung in vier Sprachen',
    seat: `Sitz in ${company.seat} LU`,
    megaTitle: 'Offerte vor Ort',
    megaText: 'Wir sehen uns Ihr Objekt an und erstellen eine schriftliche Offerte, kostenlos und unverbindlich.',
    premiumTeaser: 'Diskrete Reinigung und Pflege für Villen, Privatjets und Yachten.',
    heroLanguages: 'Beratung in Ihrer Sprache',
    // Ohne Antwortzeit: die nennt der Kontaktbereich direkt darunter (Audit visuell, Umbau 3)
    faqMore: 'Ihre Frage ist nicht dabei? Rufen Sie uns an oder schreiben Sie uns.',
    phone: 'Telefon',
    email: 'E-Mail',
    address: 'Adresse',
    mobile: 'Mobil',
    hours: 'Erreichbar',
    hoursValue: 'Mo bis Fr 8 bis 19 Uhr, Sa 9 bis 17 Uhr',
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

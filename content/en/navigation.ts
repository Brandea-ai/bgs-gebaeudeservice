import { company, premiumLabel } from '../../shared/company'
import type { NavDictionary } from '../de/navigation'
import { cantons } from './common'

/** English texts of menu, footer, contact form and 404 page (M60) */

const responseTime = 'within 24 hours on working days'

const areaMenu: NavDictionary['areaMenu'] = {
  label: 'Service area',
  cantonsTitle: 'Cantons',
  cantons: {
    luzern: { label: 'Lucerne', text: 'Our head office: city, suburbs and lakeshore' },
    zug: { label: 'Zug', text: 'Offices, headquarters and lakeside living' },
    aargau: { label: 'Aargau', text: 'Industry, halls, warehouses and properties' },
    nidwalden: { label: 'Nidwalden', text: 'Lakeshore, second homes and caretaking' },
    obwalden: { label: 'Obwalden', text: 'Sarnen, Engelberg, second homes and hotels' },
  },
  overview: { path: '/einzugsgebiet', label: 'The whole service area' },
  overviewText: 'Map, lakeside places and all cantons at a glance',
  seatTitle: 'Our head office',
  seatText: 'From here we work in five cantons, with all services and on the same terms everywhere.',
}

export const nav: NavDictionary = {
  serviceGroups: [
    {
      title: 'Cleaning',
      links: [
        { path: '/leistungen/unterhaltsreinigung', label: 'Maintenance cleaning' },
        { path: '/leistungen/bueroreinigung', label: 'Office and practice cleaning' },
        { path: '/leistungen/sonderreinigungen', label: 'Deep and special cleaning' },
        { path: '/leistungen/umzugsreinigung', label: 'End-of-tenancy cleaning' },
        { path: '/leistungen/baureinigung', label: 'Construction cleaning' },
        { path: '/leistungen/fenster-und-fassadenreinigung', label: 'Windows and facades' },
        { path: '/leistungen/industrie-und-hallenreinigung', label: 'Industrial and warehouse' },
      ],
    },
    {
      title: 'Caretaking and grounds',
      links: [
        { path: '/leistungen/hauswartung', label: 'Caretaking' },
        { path: '/leistungen/aussen-und-gruenflaechenpflege', label: 'Grounds and green spaces' },
        { path: '/leistungen/facility-services', label: 'Facility services' },
        { path: '/leistungen', label: 'All services' },
      ],
    },
    {
      title: premiumLabel,
      links: [
        { path: '/premium', label: 'Premium overview' },
        { path: '/premium/luxusimmobilien', label: 'Luxury properties' },
        { path: '/premium/privatjet', label: 'Private jet cleaning' },
        { path: '/premium/yacht', label: 'Yacht cleaning' },
      ],
    },
  ],
  menu: {
    home: { path: '/', label: 'Home' },
    services: 'Services',
    after: [
      { path: '/ueber-uns', label: 'About us' },
      { path: '/blog', label: 'Guides' },
    ],
    cta: { href: '#kontakt-formular', label: 'Request a quote' },
    open: 'Open menu',
    close: 'Close menu',
    label: 'Main menu',
  },
  areaMenu,
  footer: {
    newBrandLine: `A brand of ${company.legalName}`,
    about: `Cleaning and caretaking for businesses and discerning private clients. Based in ${company.address.city}, working in the cantons of ${cantons}.`,
    companyLinks: [
      { path: '/ueber-uns', label: 'About us' },
      { path: '/kontakt', label: 'Contact' },
      { path: '/blog', label: 'Guides' },
    ],
    areaTitle: 'Company',
    areaLink: { path: '/einzugsgebiet', label: 'Service area' },
    rights: `${company.legalName}. All rights reserved.`,
    legal: [
      { path: '/impressum', label: 'Legal notice' },
      { path: '/datenschutz', label: 'Privacy' },
    ],
  },
  contactForm: {
    title: 'Request a quote',
    intro: `Describe your property and what you need. We will get back to you ${responseTime} and arrange the site visit, free of charge and without obligation.`,
    choose: 'Please select...',
    fields: {
      name: { label: 'Name *', placeholder: 'Your full name' },
      email: { label: 'Email *', placeholder: 'name@company.ch' },
      phone: { label: 'Phone', placeholder: 'Your phone number' },
      service: { label: 'Service required' },
      location: { label: 'Location or postcode of the property', placeholder: 'e.g. 6300 Zug' },
      frequency: { label: 'Desired frequency' },
      message: { label: 'Property and request *', placeholder: 'For example: type of property, approximate area or number of flats, desired frequency and start date' },
    },
    serviceOptions: [
      {
        group: 'Cleaning and caretaking',
        options: [
          { value: 'Unterhaltsreinigung', label: 'Maintenance cleaning' },
          { value: 'Büroreinigung', label: 'Office and practice cleaning' },
          { value: 'Sonderreinigungen', label: 'Deep and special cleaning' },
          { value: 'Umzugsreinigung', label: 'End-of-tenancy cleaning with handover guarantee' },
          { value: 'Baureinigung', label: 'Construction and post-construction cleaning' },
          { value: 'Fenster- und Fassadenreinigung', label: 'Window and facade cleaning' },
          { value: 'Industrie- und Hallenreinigung', label: 'Industrial, warehouse and machine cleaning' },
          { value: 'Hauswartung', label: 'Caretaking' },
          { value: 'Aussen- und Grünflächenpflege', label: 'Grounds and green space maintenance' },
          { value: 'Facility Services', label: 'Facility services (several services)' },
        ],
      },
      {
        group: 'Premium',
        options: [
          { value: 'Luxusimmobilien', label: 'Luxury properties (villas, lofts)' },
          { value: 'Privatjet-Reinigung', label: 'Private jet cleaning' },
          { value: 'Yacht-Reinigung', label: 'Yacht cleaning' },
          { value: 'Zweitwohnungen und Residences', label: 'Second homes and residences' },
          { value: 'Hotels', label: 'Hotels' },
        ],
      },
      {
        group: 'Other',
        options: [
          { value: 'Beratung', label: 'Advice' },
          { value: 'Andere', label: 'Other' },
        ],
      },
    ],
    frequencyOptions: ['One-off', 'Weekly', 'Several times a week', 'Daily', 'Not yet decided'],
    consentBefore: 'I have read the',
    consentLink: 'privacy policy',
    consentAfter: 'and agree that my details will be used to process my enquiry. *',
    required: '* Required fields',
    submit: 'Send request',
    sending: 'Sending...',
    success: `Thank you, we have received your request. We will get back to you ${responseTime} and arrange a date for the site visit with you. If it is urgent, you can reach us on ${company.phone.display}.`,
    successTitle: 'Request received',
    errors: {
      required: 'Please fill in this field.',
      email: 'Please enter a valid email address.',
      consent: 'Please confirm the privacy policy so that we may process your request.',
      summary: 'Please check the highlighted fields.',
    },
    error: `Your request could not be sent. Please call us (${company.phone.display}) or write to ${company.email}.`,
  },
  notFound: {
    title: 'Page not found',
    text: 'This page does not exist or is no longer available. One of these links may help.',
    links: [
      { path: '/', label: 'Go to the home page' },
      { path: '/leistungen', label: 'All services' },
      { path: '/kontakt', label: 'Contact and quote' },
    ],
  },
  languageSwitch: 'Language',
  languageSwitchFooter: 'Language in the footer',
  chrome: {
    skip: 'Skip to content',
    answer: `Reply ${responseTime}`,
    seat: `Based in ${company.address.city}`,
    megaTitle: 'On-site quote',
    megaText: 'We visit your property and prepare a written quote, free of charge and without obligation.',
    premiumTeaser: 'Discreet cleaning and care for villas, private jets and yachts.',
    heroLanguages: 'Advice in your language',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    contactEyebrow: 'Contact',
    trust: [
      { key: 'seit', label: 'Since 2006', text: 'Cleaning and caretaking' },
      { key: 'versichert', label: 'CHF 10 million', text: 'Liability insurance' },
      { key: 'register', label: 'Registered', text: 'Commercial register of Lucerne' },
      { key: 'sprachen', label: 'Four languages', text: 'German, English, French, Italian' },
      { key: 'antwort', label: '24 hours', text: 'Reply on working days' },
      { key: 'offerte', label: 'Free of charge', text: 'Quote after a site visit' },
    ],
    mobileCta: 'Request a quote',
    scrollHint: 'Scroll',
  },
  errorPage: { title: 'Sorry, something went wrong.', reload: 'Reload page' },
}

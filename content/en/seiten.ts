import { company, premiumLabel } from '../../shared/company'
import type { PagePath } from '../../shared/seo'
import type { Dictionary } from '../de'
import type { Step } from '../types'
import { answers, cantons, languages, premiumLine, register, responseTime, steps } from './common'

/**
 * English texts of the home page, About us, Contact, Service area and the two
 * overviews (M60). Faithful translation of content/de/seiten.ts (E18).
 */

type Card = { title: string; text: string }
type LinkCard = Card & { path: PagePath }
type Seiten = Dictionary['seiten']

/** Verified key figures (E18, as of September 2026) */
export const proof: Seiten['proof'] = [
  { value: 'Since 2006', label: 'Experience in cleaning and caretaking' },
  { value: 'Over 120', label: 'Clients' },
  { value: 'Over 50', label: 'Employees, four languages' },
  { value: 'CHF 10m', label: 'Business liability cover' },
]

/** Steps up to the first assignment, same on home and contact page */
const offerSteps: Step[] = [
  steps.anfrage,
  steps.besichtigung,
  {
    title: 'Start',
    text: 'Once you accept, we schedule the first assignment and agree times and access with you.',
  },
]

export const home: Seiten['home'] = {
  eyebrow: `Cleaning and caretaking from ${company.address.city}`,
  h1: 'Building cleaning and caretaking for Lucerne, Zug and the surrounding area',
  lead: 'For businesses, property managers and discerning private clients. We will visit you to prepare a free, non-binding quote.',
  proofTitle: 'At a glance',
  services: {
    title: 'Our services',
    intro: 'Building cleaning and caretaking for businesses and properties, plus cleaning for exacting standards.',
    groups: [
      {
        key: 'reinigung',
        title: 'Cleaning',
        text: 'For residential and commercial buildings, offices, practices and businesses.',
        items: ['Maintenance and office cleaning', 'Special and construction cleaning', 'Windows and facades', 'Industrial and warehouse'],
        link: { path: '/leistungen', text: 'All services' },
      },
      {
        key: 'hauswartung',
        title: 'Caretaking and grounds',
        text: 'For property managers, owners and businesses who want their property looked after.',
        items: ['Caretaking', 'Grounds and green space maintenance', 'Facility services'],
        link: { path: '/leistungen/hauswartung', text: 'Caretaking' },
      },
      {
        key: 'premium',
        title: premiumLabel,
        text: 'Cleaning for exacting standards, discreet and in your language.',
        items: ['Villas, lofts and luxury properties', 'Private jets', 'Yachts'],
        link: { path: '/premium', text: 'Premium services' },
      },
    ],
  },
  steps: { title: 'How to get your quote', items: offerSteps },
  area: {
    title: 'Our service area',
    text: `From our base in ${company.address.city}, we work in the cantons of ${cantons}. We offer all our services throughout the area.`,
    link: 'View service area',
  },
  cta: {
    title: 'A quote for your property',
    text: `Briefly describe your property and what you need. We will get back to you ${responseTime} and arrange a site visit.`,
  },
}

export const about: Seiten['about'] = {
  h1: `Cleaning and caretaking from ${company.address.city}`,
  imageAlt: 'Our team at work',
  lead: `We have been working in cleaning and caretaking since 2006. Today, over 50 employees look after more than 120 clients in the cantons of ${cantons}, in ${languages}.`,
  promises: {
    title: 'What you can rely on',
    items: [
      { title: 'Personal', text: 'Your enquiry is handled personally by our managing director.' },
      { title: 'Quote after a site visit', text: 'We only name a price once we have seen your property. The site visit and the quote are free of charge and non-binding.' },
      { title: 'Throughout the area', text: `All services in the cantons of ${cantons}, on the same terms everywhere.` },
      { title: 'Insured', text: answers.versicherung.replace('Yes. ', '') },
      { title: 'Four languages', text: answers.sprachen },
      { title: 'Environmentally friendly products', text: 'On request, we clean with environmentally friendly products.' },
    ] satisfies Card[],
  },
  contact: {
    title: 'Your contact person',
    text: `Your enquiry is handled personally by our managing director. We will get back to you ${responseTime}.`,
  },
  // The German type is the literal German register name (company.register is «as const»)
  register: { title: 'Registration details', court: register as Seiten['about']['register']['court'] },
  statsLabel: 'In figures',
  cta: {
    title: 'Let us get to know each other',
    text: 'During the site visit, we look at your property and clarify the scope and times. You then receive a written quote.',
  },
}

export const contact: Seiten['contact'] = {
  h1: 'Contact and quote',
  lead: `Call us or write to us. We will get back to you ${responseTime}.`,
  formLink: 'Go to the contact form',
  channelsLabel: 'Ways to contact us',
  phone: { title: 'Phone', text: 'Landline and mobile', mobile: 'Mobile' },
  email: { title: 'Email', text: 'Send us a message' },
  address: { title: 'Address', text: 'Our head office' },
  steps: { title: 'From enquiry to first assignment', items: offerSteps },
  map: {
    title: 'How to find us',
    text: `Based in ${company.address.city}. We work in the cantons of ${cantons}.`,
  },
  faq: [
    {
      question: 'How quickly will I receive a quote?',
      answer: `We will get back to you ${responseTime} and arrange an appointment for the site visit. You then receive the quote in writing.`,
    },
    {
      question: 'What does the cleaning cost?',
      answer: `${answers.kosten} More in our guide: [What the cost of maintenance cleaning depends on](/blog/reinigungskosten-schweiz).`,
    },
    { question: 'Which regions do you cover?', answer: answers.gebiet },
    { question: 'Are you insured?', answer: answers.versicherung },
    { question: 'Do you also take on assignments at short notice?', answer: 'Give us a call. We will discuss with you what is possible at short notice.' },
  ],
  cta: {
    title: 'Ready for your quote?',
    text: `The form is at the bottom of every page. We will get back to you ${responseTime}.`,
  },
}

export const area: Seiten['area'] = {
  h1: `Service area: ${cantons}`,
  lead: `From our base in ${company.address.city}, we work in five cantons. We offer all our services throughout the area, for businesses and discerning private clients alike.`,
  cantonsTitle: 'Cantons',
  cantonLabels: ['Canton of Lucerne', 'Canton of Zug', 'Canton of Aargau', 'Canton of Nidwalden', 'Canton of Obwalden'],
  seatTitle: 'Head office and contact',
  places: {
    title: 'Lakeshores and holiday resorts',
    text: 'We are also there for you on the lakeshores and in the holiday resorts of the region, for example for villas, second homes and hotels. For exacting standards, there is our [premium range](/premium).',
    groups: [
      { title: 'On Lake Lucerne', items: ['Lucerne', 'Horw', 'Meggen', 'Weggis', 'Vitznau', 'Hergiswil', 'Stansstad', 'Ennetbürgen'] },
      { title: 'On Lake Zug and Lake Aegeri', items: ['Zug', 'Cham', 'Risch', 'Hünenberg', 'Walchwil', 'Baar', 'Oberägeri'] },
      { title: 'On Lake Sempach and Lake Hallwil', items: ['Eich', 'Meisterschwanden'] },
      { title: 'Baden and Mutschellen region', items: ['Ennetbaden', 'Bergdietikon', 'Oberwil-Lieli'] },
      { title: 'In the mountains', items: ['Engelberg'] },
    ],
  },
  cta: {
    title: 'Is your property in our area?',
    text: `Tell us about the property and its location. We will visit you for a free, non-binding quote and get back to you ${responseTime}.`,
  },
}

export const servicesOverview: Seiten['servicesOverview'] = {
  h1: 'Services: cleaning and caretaking',
  lead: `Choose by occasion. We offer all services in the cantons of ${cantons}. We visit you free of charge and without obligation to prepare a quote.`,
  groups: [
    {
      title: 'Ongoing cleaning',
      text: 'For residential and commercial buildings, offices and business premises on a fixed schedule.',
      items: [
        { title: 'Maintenance cleaning', path: '/leistungen/unterhaltsreinigung', text: 'Regular cleaning of residential and commercial buildings and business premises, restocking service included.' },
        { title: 'Office and practice cleaning', path: '/leistungen/bueroreinigung', text: 'Cleaning of offices and practices, scheduled around your working hours.' },
      ],
    },
    {
      title: 'One-off and special cleaning',
      text: 'For construction, moves, glass surfaces and production.',
      items: [
        { title: 'Special cleaning', path: '/leistungen/sonderreinigungen', text: 'Deep cleaning and move-out cleaning with a handover guarantee.' },
        { title: 'Construction and final construction cleaning', path: '/leistungen/baureinigung', text: 'Cleaning during and after construction and renovation work.' },
        { title: 'Window and facade cleaning', path: '/leistungen/fenster-und-fassadenreinigung', text: 'Windows, glass surfaces and facades, including high-pressure cleaning.' },
        { title: 'Industrial and warehouse cleaning', path: '/leistungen/industrie-und-hallenreinigung', text: 'Production halls, warehouses, machinery and installations.' },
      ],
    },
    {
      title: 'Property care',
      text: 'For property managers, owners and businesses who want everything from a single provider.',
      items: [
        { title: 'Caretaking', path: '/leistungen/hauswartung', text: 'Inspection rounds, stairwell, laundry room, minor repairs, building services, flat handovers, waste disposal and grounds.' },
        { title: 'Grounds and green space maintenance', path: '/leistungen/aussen-und-gruenflaechenpflege', text: 'Maintenance of the grounds and green spaces of your property.' },
        { title: 'Facility services', path: '/leistungen/facility-services', text: 'Several services under one contract with one contact person.' },
      ],
    },
  ] satisfies { title: string; text: string; items: LinkCard[] }[],
  premium: {
    title: 'Villas, private jets or yachts?',
    text: 'For exacting standards, there is our premium range.',
    link: 'Premium services',
  },
  cta: {
    title: 'Not sure what you need?',
    text: `Tell us about your property and what you need. We will visit you, clarify the scope with you and get back to you ${responseTime}.`,
  },
}

const promises = [
  { key: 'persoenlich', title: 'Personal', text: 'Your enquiry is handled personally by our managing director.' },
  { key: 'diskret', title: 'Discreet', text: 'On request, we sign a non-disclosure agreement.' },
  { key: 'teams', title: 'Dedicated teams', text: 'The same team always works for you.' },
  { key: 'personal', title: 'Vetted staff', text: 'Everyone who works for you has been vetted by us.' },
  { key: 'schluessel', title: 'Keys and alarm', text: 'According to fixed rules that we agree with you.' },
  { key: 'zeiten', title: 'At your convenience', text: 'Including evenings, weekends and while you are away.' },
  { key: 'material', title: 'Knowledge of materials', text: 'Natural stone, parquet and high-gloss surfaces, and on boats teak, gelcoat and upholstery.' },
  { key: 'sprachen', title: 'Four languages', text: `${languages}.` },
  { key: 'versichert', title: 'Insured', text: 'Business liability insurance with CHF 10 million cover.' },
  { key: 'offerte', title: 'Quote on site', text: 'Free of charge and non-binding, after a site visit.' },
] as const

export const premiumOverview: Seiten['premiumOverview'] = {
  line: premiumLine,
  h1: 'Cleaning for exacting standards',
  lead: 'For villas and residences, second homes, hotels with special requirements, family offices, private jets and yachts. Discreet, meticulous and in your language.',
  nameMeaning: company.premiumBrand
    ? `The name ${company.premiumBrand} comes from the Latin «clavis», the key. You entrust us with your home, and we treat it as if it were our own.`
    : null,
  offers: [
    { title: 'Luxury properties', path: '/premium/luxusimmobilien', text: 'Villas, lofts and residences, regularly or ahead of special occasions, with care for delicate materials.' },
    { title: 'Private jet', path: '/premium/privatjet', text: 'Cabin cleaning with care for high-quality materials, by arrangement with you.' },
    { title: 'Yacht', path: '/premium/yacht', text: 'Cleaning of boats and yachts on Lake Lucerne and Lake Zug.' },
  ] satisfies LinkCard[],
  moreTitle: 'Also for',
  more: [
    { title: 'Second homes and residences', text: 'Cleaning before your arrival and after your departure, inspection rounds while you are away.' },
    { title: 'Hotels', text: 'Special and deep cleaning, assignments before openings and after renovations.' },
    { title: 'Offices and family offices', text: 'Confidential, outside your working hours, with dedicated teams.' },
    { title: 'Rooms with art and antiques', text: 'Careful cleaning of the rooms, works of art only with your approval.' },
    { title: 'Private events', text: 'Cleaning before and after the event, including at weekends.' },
    { title: 'Estate agents and property managers', text: 'Cleaning at short notice before a sale, photo shoot or handover.' },
  ] satisfies Card[],
  promisesTitle: 'What you can rely on',
  // Same keys and order as the German list (symbols in app/premium/page.tsx). The
  // German list is declared «as const», so its titles and texts are literal German
  // types; the assertion bridges that without changing content/de.
  promises: promises as unknown as Seiten['premiumOverview']['promises'],
  places: {
    title: 'Where we are there for you',
    text: `On Lake Lucerne from Lucerne and Meggen to Weggis, Vitznau, Hergiswil and Ennetbürgen, on Lake Zug and Lake Aegeri from Zug and Walchwil to Oberägeri, in Engelberg and throughout the cantons of ${cantons}. [View service area](/einzugsgebiet)`,
  },
  cta: {
    title: 'Enquire discreetly',
    text: `Call us or write to us. Your enquiry is handled personally by our managing director, under confidentiality if you wish. We will get back to you ${responseTime}.`,
  },
}

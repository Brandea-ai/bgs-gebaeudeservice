import { company, premiumLabel } from '../../shared/company'
import type { Dictionary } from '../de'
import { cantons, responseTime } from './common'
import { kantone } from './kantone'

/**
 * Name, title and description per page in English (M16, M60). Same keys as
 * content/de/seo.ts. Titles without brand, metaFor() in shared/seo.ts adds it.
 */

const region = cantons

export const pages: Dictionary['pages'] = {
  '/': {
    label: 'Home',
    title: `${company.brand} | Cleaning and caretaking, Lucerne & Zug`,
    description: `Building cleaning, caretaking and facility services for businesses and properties in ${region}, plus premium cleaning.`,
  },
  '/premium': {
    label: premiumLabel,
    title: 'Premium cleaning to exacting standards',
    description: company.premiumBrand
      ? `${company.premiumBrand}, the premium line by ${company.brand}: discreet cleaning for villas, second homes, hotels, family offices, private jets and yachts.`
      : 'Discreet cleaning for villas, second homes, hotels, family offices, private jets and yachts on Lake Lucerne, Lake Zug and in the region.',
  },
  '/premium/luxusimmobilien': {
    label: 'Luxury properties',
    title: 'Villa cleaning and care for luxury homes',
    description: 'Villa cleaning in Lucerne, Zug and beyond: natural stone, parquet and lacquer properly cared for, even while you are away. Free quote after a site visit.',
  },
  '/premium/privatjet': {
    label: 'Private jet',
    title: 'Private jet cleaning: cabin and galley',
    description: 'Private jet cleaning for cabin, galley and lavatory, using the products approved for your aircraft. Free quote after a site visit.',
  },
  '/premium/yacht': {
    label: 'Yacht',
    title: 'Yacht and boat cleaning in Lucerne and Zug',
    description: 'Boat cleaning and yacht cleaning at your mooring: teak, gelcoat, upholstery and saloon, on Lake Lucerne and Lake Zug. Free quote after a site visit.',
  },
  '/leistungen': {
    label: 'Services',
    title: 'Services: cleaning and caretaking',
    description: `Maintenance, office, special, construction, window and industrial cleaning, caretaking and facility services in Lucerne, Zug and beyond.`,
  },
  '/leistungen/unterhaltsreinigung': {
    label: 'Maintenance cleaning',
    title: 'Maintenance cleaning, Lucerne and Zug',
    description: 'Maintenance cleaning and stairwell cleaning for properties, with restocking of supplies. In Lucerne, Zug and beyond. Free quote after a site visit.',
  },
  '/leistungen/bueroreinigung': {
    label: 'Office and practice cleaning',
    title: 'Office cleaning in Lucerne and Zug',
    description: 'Office cleaning for businesses and practices outside working hours, with a printable task schedule. Lucerne, Zug and beyond. Free quote after a site visit.',
  },
  '/leistungen/sonderreinigungen': {
    label: 'Deep and special cleaning',
    title: 'Deep cleaning and special cleaning in Lucerne',
    description: 'Deep cleaning and special cleaning of floors, grout and washrooms, matched to the surface, in Lucerne, Zug and beyond. Free quote after a site visit.',
  },
  '/leistungen/umzugsreinigung': {
    label: 'End-of-tenancy cleaning',
    title: 'End-of-tenancy cleaning in Lucerne for landlords',
    description: 'End-of-tenancy cleaning with a handover guarantee for landlords, property managers and businesses in Lucerne and Zug. Free quote after a site visit.',
  },
  '/leistungen/baureinigung': {
    label: 'Construction cleaning',
    title: 'Construction cleaning, Lucerne and Zug',
    description: 'Construction and post-construction cleaning in Lucerne, Zug and beyond, in stages up to acceptance, with printable checklists. Free quote after a site visit.',
  },
  '/leistungen/fenster-und-fassadenreinigung': {
    label: 'Window and facade cleaning',
    title: 'Window cleaning and facade cleaning in Lucerne',
    description: 'Window cleaning and facade cleaning with a checklist and a tenant notice template, in Lucerne, Zug and beyond. Free quote after a site visit.',
  },
  '/leistungen/industrie-und-hallenreinigung': {
    label: 'Industrial and warehouse cleaning',
    title: 'Industrial cleaning and warehouse cleaning',
    description: 'Industrial cleaning and warehouse cleaning for production and storage, planned by zone and shift, with printable checklists. Free quote after a site visit.',
  },
  '/leistungen/hauswartung': {
    label: 'Caretaking',
    title: 'Caretaking services in Lucerne and Zug',
    description: 'Caretaking services in Lucerne, Zug and beyond: inspection rounds, stairwell and laundry room, plus a printable specification. Free quote after a site visit.',
  },
  '/leistungen/aussen-und-gruenflaechenpflege': {
    label: 'Grounds and green spaces',
    title: 'Garden maintenance in Lucerne and Zug',
    description: 'Garden maintenance for properties in Lucerne, Zug and beyond: lawns, hedges cut in winter, weeds and leaves cleared from paths. Free quote after a site visit.',
  },
  '/leistungen/facility-services': {
    label: 'Facility services',
    title: 'Facility services in Lucerne and Zug, one contract',
    description: 'Facility services in Lucerne, Zug and beyond: cleaning, caretaking and grounds maintenance under one contract. Free quote after a site visit.',
  },
  '/einzugsgebiet': {
    label: 'Service area',
    title: 'Service area: Lucerne, Zug and Aargau',
    description: `From ${company.address.city} across the cantons of ${region}, including lakeside areas and Engelberg. All services everywhere.`,
  },
  // Canton pages (E80): title and description live with the content in kantone.ts
  '/einzugsgebiet/luzern': { label: 'Canton of Lucerne', ...kantone.luzern.seo },
  '/einzugsgebiet/zug': { label: 'Canton of Zug', ...kantone.zug.seo },
  '/einzugsgebiet/aargau': { label: 'Canton of Aargau', ...kantone.aargau.seo },
  '/einzugsgebiet/nidwalden': { label: 'Canton of Nidwalden', ...kantone.nidwalden.seo },
  '/einzugsgebiet/obwalden': { label: 'Canton of Obwalden', ...kantone.obwalden.seo },
  '/blog': {
    label: 'Guides',
    title: 'Guides to building cleaning',
    description: `Guides by ${company.brand}: what to look for when choosing a cleaning company and what the cost of maintenance cleaning depends on.`,
  },
  '/blog/richtige-reinigungsfirma-finden': {
    label: 'Choosing a cleaning company',
    title: 'How to choose a cleaning company',
    description: 'Scope of services, insurance, quality control, references and quote: what to clarify before hiring a cleaning company, with the steps up to the contract.',
  },
  '/blog/reinigungskosten-schweiz': {
    label: 'Cost of maintenance cleaning',
    title: 'What does maintenance cleaning cost?',
    description: 'What the price of maintenance cleaning depends on: floor area, frequency, use and cleaning times. With tips on comparing quotes.',
  },
  '/ueber-uns': {
    label: 'About us',
    title: 'About us',
    description: `${company.legalName} from ${company.address.city}: experience since 2006, over 50 employees, over 120 clients, advice in German, English, French and Italian.`,
  },
  '/kontakt': {
    label: 'Contact',
    title: 'Contact and quote',
    description: `Call us on ${company.phone.display} or write to us. Free quote after an on-site visit, and a reply ${responseTime}.`,
  },
  '/impressum': {
    label: 'Legal notice',
    title: 'Legal notice',
    description: `Legal notice of ${company.legalName}, ${company.address.street}, ${company.address.postalCode} ${company.address.city}: commercial register, UID, VAT number and contact details.`,
  },
  '/datenschutz': {
    label: 'Privacy',
    title: 'Privacy policy',
    description: `How ${company.legalName} processes personal data on this website, for what purpose, and what rights you have. No cookies, no analytics.`,
  },
}

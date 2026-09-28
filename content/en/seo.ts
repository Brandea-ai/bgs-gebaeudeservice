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
    title: 'Villa and luxury property cleaning',
    description: 'Discreet cleaning and care of villas, lofts and residences on Lake Lucerne, Lake Zug and in the region. Dedicated teams, quote after a site visit.',
  },
  '/premium/privatjet': {
    label: 'Private jet',
    title: 'Private jet cabin cleaning',
    description: 'Cabin cleaning for private jets with care for high-quality materials. Discreet, by arrangement and with dedicated teams.',
  },
  '/premium/yacht': {
    label: 'Yacht',
    title: 'Yacht and boat cleaning',
    description: 'Cleaning of yachts and motorboats on Lake Lucerne and Lake Zug: interior, upholstery, teak and gelcoat. Discreet and by arrangement.',
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
    description: 'Cleaning during and after building and renovation work, until handover. For building owners, architects and property managers in Lucerne, Zug and beyond.',
  },
  '/leistungen/fenster-und-fassadenreinigung': {
    label: 'Window and facade cleaning',
    title: 'Window and facade cleaning',
    description: `Cleaning of windows, glass and facades, including high-pressure cleaning, for businesses and properties in ${region}.`,
  },
  '/leistungen/industrie-und-hallenreinigung': {
    label: 'Industrial and warehouse cleaning',
    title: 'Industrial and warehouse cleaning',
    description: `Cleaning of production halls, warehouses, machinery and equipment, planned around your operations. In ${region}.`,
  },
  '/leistungen/hauswartung': {
    label: 'Caretaking',
    title: 'Caretaking services in Lucerne and Zug',
    description: 'Caretaking for your property: inspection rounds, stairwell, laundry room, minor repairs, building services, flat handovers, waste disposal and grounds.',
  },
  '/leistungen/aussen-und-gruenflaechenpflege': {
    label: 'Grounds and green spaces',
    title: 'Grounds and green space maintenance',
    description: `Maintenance of the grounds and green spaces of your property, on its own or as part of caretaking. In ${region}.`,
  },
  '/leistungen/facility-services': {
    label: 'Facility services',
    title: 'Facility services from one provider',
    description: 'Cleaning, caretaking and grounds maintenance under one contract with one contact person. For property managers and businesses in Lucerne, Zug and beyond.',
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

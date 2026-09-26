import { company, premiumLabel } from '../../shared/company'
import type { Dictionary } from '../de'
import { cantons, responseTime } from './common'

/**
 * Name, title and description per page in English (M16, M60). Same keys as
 * content/de/seo.ts. Titles without brand, metaFor() in shared/seo.ts adds it.
 */

const region = cantons

export const pages: Dictionary['pages'] = {
  '/': {
    label: 'Home',
    title: `${company.brand} – Cleaning and caretaking in Lucerne and Zug`,
    description: `Building cleaning, caretaking and facility services for businesses and properties in ${region}, plus premium cleaning.`,
  },
  '/premium': {
    label: premiumLabel,
    title: 'Premium cleaning for exacting standards',
    description: company.premiumBrand
      ? `${company.premiumBrand}, the premium line by ${company.brand}: discreet cleaning for villas, second homes, hotels, family offices, private jets and yachts.`
      : 'Discreet cleaning for villas, second homes, hotels, family offices, private jets and yachts on Lake Lucerne, Lake Zug and in the region.',
  },
  '/premium/luxusimmobilien': {
    label: 'Luxury properties',
    title: 'Cleaning for villas and luxury properties',
    description: 'Discreet cleaning and care of villas, lofts and residences on Lake Lucerne, Lake Zug and in the region. Dedicated teams, quote after a site visit.',
  },
  '/premium/privatjet': {
    label: 'Private jet',
    title: 'Private jet cabin cleaning',
    description: 'Cabin cleaning for private jets with care for high-quality materials. Discreet, by arrangement and always with the same dedicated team.',
  },
  '/premium/yacht': {
    label: 'Yacht',
    title: 'Yacht and boat cleaning',
    description: 'Cleaning of yachts and motorboats on Lake Lucerne and Lake Zug: interior, upholstery, teak and gelcoat. Discreet and by arrangement.',
  },
  '/leistungen': {
    label: 'Services',
    title: 'Services: cleaning and caretaking',
    description: `Maintenance, office, special, construction, window and industrial cleaning, caretaking and facility services by ${company.brand} in Lucerne, Zug and beyond.`,
  },
  '/leistungen/unterhaltsreinigung': {
    label: 'Maintenance cleaning',
    title: 'Maintenance cleaning in Lucerne and Zug',
    description: `Regular cleaning of residential and commercial buildings, stairwells and business premises, with a restocking service. In ${region}.`,
  },
  '/leistungen/bueroreinigung': {
    label: 'Office and practice cleaning',
    title: 'Office and practice cleaning in Lucerne and Zug',
    description: `Cleaning of offices and medical practices, scheduled around your working hours. Free quote after a site visit in ${region}.`,
  },
  '/leistungen/sonderreinigungen': {
    label: 'Special cleaning',
    title: 'Special cleaning: deep and move-out cleaning',
    description: 'Deep cleaning and move-out cleaning with a handover guarantee for property managers, owners and businesses in Lucerne, Zug and the surrounding area.',
  },
  '/leistungen/baureinigung': {
    label: 'Construction cleaning',
    title: 'Construction cleaning in Lucerne and Zug',
    description: 'Cleaning during and after construction and renovation work, through to handover. For clients, architects and property managers in Lucerne, Zug and beyond.',
  },
  '/leistungen/fenster-und-fassadenreinigung': {
    label: 'Window and facade cleaning',
    title: 'Window and facade cleaning',
    description: `Cleaning of windows, glass surfaces and facades, including high-pressure cleaning, for businesses and properties in ${region}.`,
  },
  '/leistungen/industrie-und-hallenreinigung': {
    label: 'Industrial and warehouse cleaning',
    title: 'Industrial and warehouse cleaning',
    description: `Cleaning of production halls, warehouses, machinery and installations, planned around your operations. In ${region}.`,
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
    title: 'Facility services from a single provider',
    description: 'Cleaning, caretaking and grounds maintenance under one contract with one contact person. For property managers and businesses in Lucerne, Zug and beyond.',
  },
  '/einzugsgebiet': {
    label: 'Service area',
    title: 'Service area: Central Switzerland and Aargau',
    description: `From ${company.address.city} across the cantons of ${region}, including the lakeshores and Engelberg. All services throughout the area.`,
  },
  '/blog': {
    label: 'Guides',
    title: 'Guides to building cleaning',
    description: `Guides by ${company.brand}: what to look for when choosing a cleaning company and what the cost of maintenance cleaning depends on.`,
  },
  '/blog/richtige-reinigungsfirma-finden': {
    label: 'Choosing a cleaning company',
    title: 'Choosing a cleaning company: criteria and questions',
    description: 'Scope of services, insurance, quality control, references and quote: what to clarify before hiring a cleaning company, with the steps up to the contract.',
  },
  '/blog/reinigungskosten-schweiz': {
    label: 'Cost of maintenance cleaning',
    title: 'How much does maintenance cleaning cost?',
    description: 'What the price of maintenance cleaning depends on: floor area, frequency, use and working hours. With tips on how to compare quotes from providers.',
  },
  '/ueber-uns': {
    label: 'About us',
    title: 'About us',
    description: `${company.legalName} from ${company.address.city}: experience since 2006, over 50 employees, over 120 clients, advice in German, English, French and Italian.`,
  },
  '/kontakt': {
    label: 'Contact',
    title: 'Contact and quote',
    description: `Call us on ${company.phone.display} or write to us. Free quote after an on-site visit, reply ${responseTime}.`,
  },
  '/impressum': {
    label: 'Legal notice',
    title: 'Legal notice',
    description: `Legal notice of ${company.legalName}, ${company.address.street}, ${company.address.postalCode} ${company.address.city}: commercial register, UID and contact.`,
  },
  '/datenschutz': {
    label: 'Privacy',
    title: 'Privacy policy',
    description: `How ${company.legalName} processes personal data on this website and what rights you have.`,
  },
}

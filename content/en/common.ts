import { company } from '../../shared/company'
import type { Step } from '../types'

/**
 * Shared English texts of the service pages (M29, M60). Same keys as
 * content/de/common.ts. The German helpers for response time, cantons,
 * register and languages are replaced by the English wording below.
 */

/** English form of company.responseTime */
export const responseTime = 'within 24 hours on working days'

/** English form of cantonList */
export const cantons = 'Lucerne, Zug, Aargau, Nidwalden and Obwalden'

/** English form of company.register */
export const register: string = 'Commercial Register of the Canton of Lucerne'

/** English form of company.languages */
export const languages = 'German, English, French and Italian'

/** Line above the main heading of the premium pages */
export const premiumLine = company.premiumBrand ? `${company.premiumBrand} · Premium line by ${company.brand}` : 'Premium'

/** Brand in the title of the premium pages */
export const premiumTitleBrand = company.premiumBrand ? `${company.premiumBrand} by ${company.brand}` : company.brand

export const ui = {
  offerCta: 'Request a free quote',
  toService: 'View service',
  atAGlance: 'At a glance',
  notIncluded: 'Not part of this service',
  steps: 'How it works',
  faq: 'Frequently asked questions',
  related: 'You may also need',
  onThisPage: 'On this page',
  premiumLine,
  factArea: 'Area',
  factAreaValue: `Cantons of ${cantons}`,
  factOffer: 'Quote',
  factOfferValue: 'Free and non-binding, after an on-site visit',
  factAnswer: 'Response',
  factAnswerValue: responseTime.charAt(0).toUpperCase() + responseTime.slice(1),
}

/**
 * The first two steps are the same for all services: enquiry handled by the
 * managing director and a quote after the site visit.
 */
export const steps = {
  anfrage: {
    title: 'Enquiry',
    text: `Call us or write to us. Your enquiry is handled personally by our managing director, and you will hear from us ${responseTime}.`,
  },
  besichtigung: {
    title: 'Site visit and quote',
    text: 'We look at the property on site and agree the scope and times with you. You then receive a written quote, free of charge and non-binding.',
  },
} satisfies Record<string, Step>

/** Answers that are the same on several pages */
export const answers = {
  kosten:
    'That depends on what needs cleaning and how much work is involved. We therefore only give prices in our quote, once we have seen everything on site. The site visit and the quote are free of charge and non-binding.',
  gebiet: `Throughout the cantons of ${cantons}, with all services and on the same terms everywhere. Find out more about our [service area](/einzugsgebiet).`,
  versicherung: 'Yes. We hold business liability insurance with cover of CHF 10 million.',
  mittel: 'Yes, on request we clean with environmentally friendly products. Just let us know during the site visit.',
  sprachen: `Our staff speak ${languages}.`,
}

import type { ServicePageContent } from '../../types'
import { answers } from '../common'

export const umzugsreinigung: ServicePageContent = {
  path: '/leistungen/umzugsreinigung',
  area: 'leistungen',
  eyebrow: 'One-off and special cleaning',
  h1: 'Move-out and end-of-tenancy cleaning with a handover guarantee',
  lead: [
    'When a flat is handed back, the property management checks every room: kitchen, bathroom, windows, blinds, cupboards and ancillary rooms. For the handover to go through without complaints, the flat must be cleaned thoroughly, and by a fixed date.',
    'We carry out move-out and end-of-tenancy cleaning of flats and business premises for property managers, owners and businesses, with a handover guarantee: if the property management raises a complaint about our cleaning at the handover, we clean again free of charge.',
  ],
  facts: [
    { label: 'For', value: 'Property managers, owners, communities of condominium owners and businesses' },
    { label: 'Properties', value: 'Flats and business premises before handover' },
    { label: 'Guarantee', value: 'Handover guarantee, details in the quote' },
  ],
  scope: {
    title: 'What the final clean includes',
    intro: 'After the site visit, we set out the exact scope of the flat cleaning in the quote. Typically this includes:',
    items: [
      'Kitchen with oven, hob, extractor hood, fridge and cupboards, inside and out',
      'Bathroom and WC with taps, tiles, joints and mirrors, descaled',
      'Windows inside and out, including frames, rebates and window sills',
      'Blinds and shutters by arrangement',
      'Built-in cupboards, doors, door frames, switches and sockets',
      'Floors and skirting boards in all rooms',
      'Balcony or patio, cellar and attic compartment',
    ],
    notIncluded: [
      'Move-out cleaning commissioned by tenants of individual flats. For villas and residences, see our [premium services](/premium).',
      'Removals and clearing out furniture.',
      'Repairs, painting and fixing damage.',
      'Deep cleaning without a handover: see [deep and special cleaning](/leistungen/sonderreinigungen).',
    ],
  },
  sections: [
    {
      title: 'The handover guarantee',
      paragraphs: [
        'If the property management raises a complaint about our cleaning at the handover, we clean again free of charge. The details are set out in the quote.',
        'The guarantee relates to our cleaning. Damage, wear and tear or repairs recorded at the handover do not concern the cleaning and are therefore not covered.',
      ],
    },
    {
      title: 'How clean does a flat have to be at the handover?',
      paragraphs: [
        'How thoroughly a flat has to be cleaned is usually governed by the tenancy agreement. In Switzerland, a thorough clean of the whole flat including ancillary rooms is customary. At the handover, the property management therefore also looks where hardly anyone cleans in everyday life: inside the oven, in the extractor hood, at the blinds, in the window rebates and in the cupboards.',
        'What applies in an individual case is set out in the tenancy agreement and the handover report. This page gives an overview and is no substitute for legal advice.',
      ],
    },
    {
      title: 'Planning and date',
      paragraphs: [
        'The final clean takes place between moving out and the handover. Ideally the rooms are empty by then, so that cupboards, floors behind furniture and fitted units can be cleaned too. Plan the cleaning so that as little time as possible passes between the cleaning and the handover.',
        'Book early, as soon as the handover date is fixed. Around the end of the month and on the customary local moving dates, many slots are in demand.',
      ],
      items: [
        'Furniture and personal belongings have been cleared out',
        'Electricity and water are still connected',
        'Keys for the flat, cellar, attic and letterbox are available',
      ],
    },
    {
      title: 'Who we do end-of-tenancy cleaning for',
      paragraphs: [
        'For property managers who get flats ready for occupancy between two tenancies. For owners and condominium owners who sell, hand over or re-let a flat. And for businesses handing back office or business premises.',
        'We do not serve tenants of individual flats. For villas and residences, we also do the final clean for private individuals through our [premium services](/premium).',
      ],
    },
    {
      title: 'How to recognise a good final clean',
      items: [
        'Oven, baking trays and extractor hood are free of grease film',
        'Taps, shower glass and tiles are free of limescale marks',
        'Windows, frames and rebates are free of streaks and dust',
        'Cupboards are clean and dry inside',
        'No dust lines remain along the skirting boards',
      ],
    },
  ],
  steps: [
    {
      title: 'Final clean',
      text: 'We clean between moving out and the handover, on the agreed date.',
    },
    {
      title: 'Handover',
      text: 'At the handover, the handover guarantee applies as set out in the quote.',
    },
  ],
  faq: [
    {
      question: 'How much does end-of-tenancy cleaning cost?',
      answer:
        'That depends mainly on the size and condition of the flat, the number of windows and blinds, ancillary rooms such as a cellar, attic or balcony, and the date. We therefore only give prices in the quote, after we have seen the property. The site visit and quote are free of charge and non-binding.',
    },
    {
      question: 'How clean does a flat have to be at the handover in Switzerland?',
      answer:
        'A thorough clean of the whole flat including ancillary rooms is customary: kitchen and appliances, bathroom and WC, windows inside and out including frames, blinds, cupboards, floors, cellar, attic and balcony. What applies in an individual case is governed by the tenancy agreement and the handover report. This answer is not legal advice.',
    },
    {
      question: 'What happens if the property management raises a complaint at the handover?',
      answer:
        'If the property management raises a complaint about our cleaning at the handover, we clean again free of charge. The details are set out in the quote.',
    },
    {
      question: 'When is the best time to book end-of-tenancy cleaning?',
      answer:
        'As soon as the handover date is fixed. Around the end of the month and on the customary local moving dates, many slots are in demand. We schedule the cleaning between moving out and the handover.',
    },
    {
      question: 'Do the rooms have to be empty for the final clean?',
      answer:
        'Ideally, yes. In empty rooms, cupboards, fitted units and floors behind furniture can be cleaned too, and these are exactly the places the property management checks at the handover.',
    },
    {
      question: 'Do you also do end-of-tenancy cleaning for tenants?',
      answer:
        'No. We carry out end-of-tenancy cleaning for property managers, owners and businesses. For villas and residences, it is also available to private individuals through our [premium services](/premium).',
    },
    { question: 'Which regions do you cover?', answer: answers.gebiet },
    { question: 'Are you insured?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/sonderreinigungen', text: 'For deep cleaning without a handover, for example before maintenance cleaning starts.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'For glass surfaces and facades of the whole property.' },
    { path: '/leistungen/hauswartung', text: 'If the caretaker is to assist with flat handovers.' },
  ],
  cta: {
    title: 'A quote for your end-of-tenancy cleaning',
    text: 'Tell us about the property, its size and the handover date. We will look at the rooms and prepare a quote for you, free of charge and non-binding.',
  },
}

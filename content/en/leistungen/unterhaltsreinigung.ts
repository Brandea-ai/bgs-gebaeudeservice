import type { ServicePageContent } from '../../types'
import { answers } from '../common'

export const unterhaltsreinigung: ServicePageContent = {
  path: '/leistungen/unterhaltsreinigung',
  area: 'leistungen',
  eyebrow: 'Ongoing cleaning',
  h1: 'Maintenance cleaning for residential and commercial buildings',
  lead: [
    'The stairwell, entrance and common areas shape the impression a building makes, on tenants as much as on customers and visitors. With maintenance cleaning, they stay clean without you having to take care of it yourself.',
    'We clean apartment buildings, mixed-use buildings and business premises on a fixed schedule, which we agree with you after the site visit. We also restock consumables as part of the service.',
  ],
  facts: [
    { label: 'For', value: 'Apartment buildings, mixed-use buildings, business premises' },
    { label: 'Frequency', value: 'Several times a week, depending on area and use' },
    { label: 'Included', value: 'Restocking service for consumables' },
  ],
  scope: {
    title: 'What is included',
    intro: 'After the site visit, we record what we clean and how often. Typically this includes:',
    items: [
      'Stairwells, entrances and lifts',
      'Floors in all agreed rooms',
      'Doors, handrails, switches and glass in the entrance area',
      'Sanitary facilities, kitchens and staff rooms',
      'Laundry rooms, cellars and ancillary rooms',
      'Emptying bins and restocking consumables',
    ],
    notIncluded: [
      'Offices and practices: see [office and practice cleaning](/leistungen/bueroreinigung).',
      'One-off deep cleaning: see [deep and special cleaning](/leistungen/sonderreinigungen), final cleaning before a handover under [end-of-tenancy cleaning](/leistungen/umzugsreinigung).',
      'Exterior windows and facades: see [window and facade cleaning](/leistungen/fenster-und-fassadenreinigung).',
      'Private households. For villas and residences, see our [premium services](/premium).',
    ],
  },
  sections: [
    {
      title: 'Typical properties and situations',
      paragraphs: [
        'Maintenance cleaning pays off wherever many people use the same areas. In an apartment building, that means the stairwell, lift and laundry room. Mixed-use buildings add entrances with public footfall, business premises add reception, corridors and sanitary facilities.',
        'Enquiries often come when the previous arrangement no longer works: cleaning by the tenants does not work out, the previous company stops, or a property management firm takes over a new property.',
      ],
    },
    {
      title: 'Restocking service',
      paragraphs: [
        'We restock consumables as part of maintenance cleaning. Which items are included and who procures them is set out in the quote.',
      ],
      items: [
        'Toilet paper, paper towels and soap',
        'Bin bags and cleaning cloths',
        'Other consumables by arrangement',
      ],
    },
    {
      title: 'Planning and frequency',
      paragraphs: [
        'How often cleaning takes place depends on use, not just on floor area. An entrance with heavy public footfall needs more care than a cellar corridor that few people enter. It therefore makes sense to set a frequency per area rather than a single one for the whole building. We discuss our proposal with you after the site visit.',
      ],
      items: [
        'Entrance, lift and stairwell: more often, because most dirt comes in from outside here',
        'Sanitary facilities and kitchens: more often, for reasons of hygiene',
        'Cellars, attics and ancillary rooms: less often, depending on use',
        'Glass in the entrance area: as needed, more often in wet weather and in winter',
      ],
    },
    {
      title: 'How to recognise good maintenance cleaning',
      paragraphs: [
        'Clean means more than a mopped floor. During a walk round, these points quickly show you how thoroughly the cleaning is done:',
      ],
      items: [
        'Handrails, light switches and lift buttons are clean, not just the floors',
        'No dirt is left in corners, on stair edges or behind doors',
        'Sanitary facilities smell fresh, soap and paper are restocked',
        'Glass doors at the entrance are free of streaks and fingerprints',
        'The agreed scope is set out in writing, so both sides know what applies',
      ],
    },
    {
      title: 'Working with property management and owners',
      paragraphs: [
        'Before we start, we clarify with you how we access the property, for example with a key or badge, and where equipment and cleaning products may be kept. A lockable cleaning room or cellar compartment makes the work easier.',
        'For tenants, a short notice saying on which days cleaning takes place helps. Stairs and corridors then stay clear of shoes, bicycles and other items on those days.',
      ],
    },
  ],
  steps: [
    {
      title: 'Agreement',
      text: 'Once you accept, it is settled which rooms we clean, how often, and what we restock.',
    },
    {
      title: 'Start',
      text: 'We start on the agreed date. If the use of the premises changes, we discuss a new scope or frequency with you.',
    },
  ],
  faq: [
    {
      question: 'How often should cleaning take place?',
      answer:
        'That depends on how heavily the areas are used. After the site visit, we suggest a frequency. Maintenance cleaning is intended for properties that are cleaned several times a week.',
    },
    {
      question: 'How does it differ from deep cleaning?',
      answer:
        'Maintenance cleaning keeps areas clean on a fixed schedule. Deep cleaning is a one-off, thorough job that also removes dirt that ongoing cleaning does not reach. More under [deep and special cleaning](/leistungen/sonderreinigungen).',
    },
    {
      question: 'Can we change the frequency later?',
      answer: 'Yes. If the use of the premises changes, we discuss a new scope or frequency with you.',
    },
    {
      question: 'Do the tenants have to prepare anything?',
      answer:
        'No. It helps if stairs and corridors are clear of shoes, bicycles and other items on cleaning days. A short notice in the stairwell is usually enough.',
    },
    { question: 'Do you clean with environmentally friendly products?', answer: answers.mittel },
    {
      question: 'How much does maintenance cleaning cost?',
      answer: `${answers.kosten} More in our guide: [What the cost of maintenance cleaning depends on](/blog/reinigungskosten-schweiz).`,
    },
    {
      question: 'What should we look for when choosing a cleaning company?',
      answer:
        'A clearly described scope of services, proof of insurance, a dedicated contact person and a quote after a site visit. More in our guide: [How do I find the right cleaning company?](/blog/richtige-reinigungsfirma-finden)',
    },
    { question: 'Which regions do you cover?', answer: answers.gebiet },
  ],
  related: [
    { path: '/leistungen/bueroreinigung', text: 'If it is mainly about offices or a practice.' },
    { path: '/leistungen/hauswartung', text: 'If inspection rounds, minor repairs and waste disposal are needed as well as cleaning.' },
    { path: '/leistungen/sonderreinigungen', text: 'For deep cleaning, for example before the start or after intensive use.' },
  ],
  cta: {
    title: 'A quote for your property',
    text: 'Tell us about the property, the floor area and the frequency you would like. We will come for a site visit and prepare a quote for you, free of charge and non-binding.',
  },
}

import type { ServicePageContent } from '../../types'
import { answers } from '../common'

export const sonderreinigungen: ServicePageContent = {
  path: '/leistungen/sonderreinigungen',
  area: 'leistungen',
  eyebrow: 'One-off and special cleaning',
  h1: 'Deep and special cleaning for properties and businesses',
  lead: [
    'Some dirt can no longer be reached by ongoing cleaning: limescale in sanitary facilities, grease in kitchens, dirt in joints and corners, old layers on floors. That is when a deep clean is needed, as a one-off or at longer intervals.',
    'We carry out deep and special cleaning for property managers, owners and businesses. For the final clean when a flat is handed back, there is our [end-of-tenancy cleaning with a handover guarantee](/leistungen/umzugsreinigung).',
  ],
  facts: [
    { label: 'For', value: 'Property managers, owners, communities of condominium owners and businesses' },
    { label: 'Type', value: 'One-off or at longer intervals' },
    { label: 'Areas', value: 'Residential, office and commercial premises' },
  ],
  scope: {
    title: 'Our deep and special cleaning services',
    items: [
      'Deep cleaning of residential, office and commercial premises',
      '[Move-out and end-of-tenancy cleaning](/leistungen/umzugsreinigung) with a handover guarantee',
      '[Post-construction cleaning](/leistungen/baureinigung) after new builds and renovations',
      '[Window and glass cleaning](/leistungen/fenster-und-fassadenreinigung)',
      '[Facade cleaning](/leistungen/fenster-und-fassadenreinigung), including high-pressure cleaning',
    ],
    notIncluded: [
      'Regular cleaning: see [maintenance cleaning](/leistungen/unterhaltsreinigung).',
      'Move-out cleaning commissioned by tenants of individual flats.',
    ],
  },
  sections: [
    {
      title: 'What makes a deep clean',
      paragraphs: [
        'Deep cleaning goes further than ongoing cleaning. It removes dirt that has built up over a long period: limescale and urine scale in sanitary facilities, grease in kitchens, dirt in joints, corners and on skirting boards, residue of old care products on floors.',
        'For floors, the approach depends on the surface, such as natural stone, tiles, linoleum or parquet. Which method and which products are suitable is clarified during the site visit.',
      ],
    },
    {
      title: 'Typical occasions',
      paragraphs: [
        'A deep clean is worthwhile whenever an area makes a fresh start or has been heavily used for a long time:',
      ],
      items: [
        'Before office or commercial premises are re-let',
        'After intensive use or a longer period of vacancy',
        'Before [maintenance cleaning](/leistungen/unterhaltsreinigung) begins',
        'When ongoing cleaning no longer removes stubborn dirt',
      ],
    },
    {
      title: 'Move-out and end-of-tenancy cleaning',
      paragraphs: [
        'For the final clean when a flat or business premises are handed over, there is a separate page with all the details: [end-of-tenancy cleaning with a handover guarantee](/leistungen/umzugsreinigung). We offer it to property managers, owners and businesses, and also to private individuals for villas and residences through our [premium services](/premium).',
      ],
    },
    {
      title: 'Planning and frequency',
      paragraphs: [
        'A deep clean takes time and, ideally, empty rooms. In offices and business premises, it can often be scheduled for a weekend, the company holidays or the period between two tenancies. In buildings with tenants, advance notice is needed, because the stairwell or laundry room, for example, cannot be used for a short time.',
        'How often a deep clean makes sense depends on use and wear. With good ongoing cleaning, it is needed less often.',
      ],
    },
    {
      title: 'How to recognise a good deep clean',
      items: [
        'The joints are light again, not just the tiles',
        'Taps and tiles are free of limescale marks',
        'The floor is free of streaks and sticky patches',
        'Skirting boards, doors and door frames have been cleaned too',
        'Delicate surfaces are undamaged, because the products suit the material',
      ],
    },
  ],
  steps: [
    {
      title: 'Date',
      text: 'We schedule the job for a date that suits your use of the premises or your operations.',
    },
    {
      title: 'Handover',
      text: 'After the job, we hand over the rooms. If regular cleaning is to follow, we are happy to discuss it with you.',
    },
  ],
  faq: [
    {
      question: 'What is deep cleaning?',
      answer:
        'A one-off, thorough job that also removes dirt that has built up over a long period, such as limescale, grease, dirt in joints or old layers of care products on floors.',
    },
    {
      question: 'When is deep cleaning worthwhile?',
      answer:
        'For example before re-letting, after intensive use, or when ongoing cleaning no longer removes stubborn dirt. During the site visit, we will tell you whether deep cleaning is necessary.',
    },
    {
      question: 'How does it differ from maintenance cleaning?',
      answer:
        'Maintenance cleaning keeps areas clean on a fixed schedule, while deep cleaning is a one-off, thorough job. The two can be combined: first a deep clean, then ongoing [maintenance cleaning](/leistungen/unterhaltsreinigung).',
    },
    {
      question: 'Do the rooms have to be empty for a deep clean?',
      answer:
        'Not entirely, but the clearer the areas are, the more thoroughly they can be cleaned. What stays in place and who moves it is clarified during the site visit.',
    },
    {
      question: 'Do you also do end-of-tenancy cleaning?',
      answer:
        'Yes, with a handover guarantee, for property managers, owners and businesses. Everything else is set out under [end-of-tenancy cleaning with a handover guarantee](/leistungen/umzugsreinigung).',
    },
    { question: 'How much does deep cleaning cost?', answer: answers.kosten },
    { question: 'Which regions do you cover?', answer: answers.gebiet },
    { question: 'Are you insured?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/umzugsreinigung', text: 'For the final clean before a flat or business premises are handed over, with a handover guarantee.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'If regular cleaning is to follow the deep clean.' },
    { path: '/leistungen/baureinigung', text: 'For cleaning during and after construction and renovation work.' },
  ],
  cta: {
    title: 'A quote for your deep clean',
    text: 'Tell us about the property, the occasion and the date. We will look at the rooms and prepare a quote for you, free of charge and non-binding.',
  },
}

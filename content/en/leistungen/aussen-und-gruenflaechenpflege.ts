import type { ServicePageContent } from '../../types'
import { answers } from '../common'

export const aussenUndGruen: ServicePageContent = {
  path: '/leistungen/aussen-und-gruenflaechenpflege',
  area: 'leistungen',
  eyebrow: 'Property care',
  h1: 'Grounds and green space maintenance for properties',
  lead: [
    'The grounds are the first thing tenants, customers and visitors see of a property. Well-kept green spaces, clean paths and paved areas are therefore just as much part of its care as the stairwell.',
    'We maintain the grounds of your property, on their own or as part of [caretaking](/leistungen/hauswartung).',
  ],
  facts: [
    { label: 'For', value: 'Property managers, owners and businesses' },
    { label: 'Service', value: 'On its own or as part of caretaking' },
    { label: 'Not offered', value: 'Winter maintenance' },
  ],
  scope: {
    title: 'What is included',
    intro: 'After the site visit, we record which work we take on. Typically this includes:',
    items: [
      'Mowing lawns and trimming edges',
      'Tending hedges, shrubs and flower beds',
      'Clearing leaves',
      'Keeping paths, paved areas and car parks clean',
      'Removing weeds from paved areas and joints',
      'Collecting litter from the grounds',
    ],
    notIncluded: ['We do not offer winter maintenance.', 'Landscaping and new planting schemes.'],
  },
  sections: [
    {
      title: 'Typical properties and situations',
      paragraphs: [
        'Residential complexes with lawns, hedges and a playground, commercial properties with a car park and entrance area, business buildings with flower beds and gravel areas. The grounds are the first thing visitors see, and what tenants use every day.',
        'Enquiries often come when the grounds have so far been looked after on the side and that is no longer enough, or when cleaning, caretaking and grounds maintenance are to be contracted out together.',
      ],
    },
    {
      title: 'Care through the seasons',
      paragraphs: [
        'The work follows the seasons. A typical year looks like this:',
      ],
      items: [
        'Spring: clearing paths and paved areas of winter dirt, tending flower beds, first lawn mowing',
        'Summer: mowing lawns regularly, removing weeds from paved areas and joints, lightly trimming passages where needed',
        'Autumn: clearing leaves, preparing flower beds for winter',
        'Winter: cutting hedges and shrubs, outside the bird breeding season. We do not offer winter maintenance, snow clearing and gritting need a different solution',
      ],
    },
    {
      title: 'Planning and frequency',
      paragraphs: [
        'How often the grounds are maintained depends on the season and the weather. In the growing season, the lawn needs more attention than in late autumn. We record the maintenance plan, and you can arrange additional visits with us, for example before an event.',
        'As part of [caretaking](/leistungen/hauswartung), grounds maintenance and inspection rounds can be combined: whoever works outside also notices when something is wrong with the building.',
      ],
    },
    {
      title: 'How to recognise well-kept grounds',
      items: [
        'Lawn edges are neatly trimmed',
        'Paths and paved areas are free of leaves, litter and weeds in the joints',
        'Hedges are in shape, passages and sight lines stay clear',
        'Flower beds are well kept and free of weeds',
      ],
    },
  ],
  steps: [
    {
      title: 'Maintenance plan',
      text: 'We record which work we take on and how often, in line with the season.',
    },
    {
      title: 'Maintenance',
      text: 'We maintain the grounds according to plan. Additional visits, for example before an event, can be arranged with us.',
    },
  ],
  faq: [
    { question: 'Do you also provide winter maintenance?', answer: 'No, we do not offer winter maintenance.' },
    {
      question: 'Can I contract out grounds maintenance without caretaking?',
      answer: 'Yes. Grounds and green space maintenance is available on its own or as part of [caretaking](/leistungen/hauswartung).',
    },
    {
      question: 'When is the best time to cut hedges?',
      answer:
        'Outside the breeding season, which for many species runs from spring into late summer. The Swiss Ornithological Institute in Sempach recommends cutting woody plants in winter, from November to March. If passages or sight lines grow over in summer, a light shaping cut with an eye on nests is usually enough. We record the timing for your hedges in the maintenance plan.',
    },
    {
      question: 'Do you also create new gardens?',
      answer: 'No. Landscaping and new planting schemes are not part of what we offer. We maintain existing grounds.',
    },
    { question: 'How much does grounds maintenance cost?', answer: answers.kosten },
    { question: 'Which regions do you cover?', answer: answers.gebiet },
  ],
  related: [
    { path: '/leistungen/hauswartung', text: 'If the building and building services are to be looked after as well as the grounds.' },
    { path: '/leistungen/facility-services', text: 'If cleaning, caretaking and grounds maintenance belong in one contract.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'For facades and glass surfaces.' },
  ],
  cta: {
    title: 'A quote for your grounds maintenance',
    text: 'Tell us about the property and the areas. We will look at the grounds and prepare a quote for you, free of charge and non-binding.',
  },
}

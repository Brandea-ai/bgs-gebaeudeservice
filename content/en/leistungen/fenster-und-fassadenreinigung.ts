import type { ServicePageContent } from '../../types'
import { answers } from '../common'

export const fensterUndFassade: ServicePageContent = {
  path: '/leistungen/fenster-und-fassadenreinigung',
  area: 'leistungen',
  eyebrow: 'One-off and special cleaning',
  h1: 'Window and facade cleaning for businesses and properties',
  lead: [
    'Dirty windows and grey facades stand out, on commercial buildings as much as on residential ones. We clean glass and facades as a one-off or at regular intervals.',
    'For facades, we also use high-pressure cleaning. Which method suits the material is clarified during the site visit.',
  ],
  facts: [
    { label: 'For', value: 'Businesses, property managers and owners' },
    { label: 'Surfaces', value: 'Windows, glass surfaces, frames and facades' },
    { label: 'Frequency', value: 'One-off or at regular intervals' },
  ],
  scope: {
    title: 'What is included',
    intro: 'We record the scope after the site visit. Typically this includes:',
    items: [
      'Windows inside and out, including frames and rebates',
      'Glass facades, glass doors and glass walls',
      'Shop windows and entrance areas',
      'Window sills and blinds by arrangement',
      'Facade cleaning, including high-pressure cleaning',
    ],
    notIncluded: [
      'Cleaning of interiors: see [maintenance cleaning](/leistungen/unterhaltsreinigung) or [office and practice cleaning](/leistungen/bueroreinigung).',
      'Renovation, painting and repairs to the facade.',
    ],
  },
  sections: [
    {
      title: 'Typical properties and situations',
      paragraphs: [
        'Office buildings with glass facades, shops with display windows, residential properties with many windows in the stairwell, commercial buildings with a grey or green facade. In all these places, glass shapes the first impression, and dirt is immediately visible against the light.',
        'Cleaning is often due in spring after the winter, when pollen is added, or before an event, a letting or a sale.',
      ],
    },
    {
      title: 'How glass and facades are cleaned',
      paragraphs: [
        'Glass is usually cleaned with water, a mild cleaning product and a squeegee, after which frames and rebates are wiped down. For large and high glass surfaces, there are telescopic poles with treated pure water that dries without residue.',
        'For facades, the material is decisive. Smooth, hard surfaces often tolerate high-pressure cleaning, while delicate render, wood or old natural stone need a gentler approach. Which method is suitable is clarified during the site visit.',
      ],
    },
    {
      title: 'Planning and frequency',
      paragraphs: [
        'How often glass should be cleaned depends on location, use and expectations. Everyone sees shop windows and entrances, hardly anyone sees the windows of a warehouse.',
      ],
      items: [
        'Entrances, shop windows and glass doors: more often, because everyone sees and touches them',
        'Windows in offices and stairwells: at regular intervals, often according to the season',
        'Facades: less often, when dirt, algae or a grey film become visible',
        'In frost, storms or heavy rain, exterior work cannot be done properly, so allow some leeway',
      ],
    },
    {
      title: 'What we clarify during the site visit',
      items: [
        'How high the surfaces are and how they can be reached safely',
        'Whether the windows can be opened or can only be reached from outside',
        'What the frames and facade are made of',
        'Access, parking and barriers, for example on the pavement in front of the building',
        'Whether tenants need to be informed because windows are cleaned from inside',
      ],
    },
    {
      title: 'How to recognise good window cleaning',
      items: [
        'No streaks are visible against the light',
        'The glass is clean right into the corners, including at the edge of the frame',
        'Frames, rebates and window sills have been cleaned too, as far as agreed',
        'Inside, no drips or water marks are left on floors and window sills',
      ],
    },
  ],
  steps: [
    {
      title: 'Cleaning',
      text: 'We clean on the agreed date and, if you wish, at fixed intervals.',
    },
  ],
  faq: [
    {
      question: 'How often should windows be cleaned?',
      answer:
        'That depends on location and use. On a busy road, glass gets dirty faster than in a green setting. After the site visit, we suggest a frequency.',
    },
    {
      question: 'Do you use high-pressure cleaning on facades?',
      answer: 'Yes, if the material allows it. Which method suits your facade is clarified during the site visit.',
    },
    {
      question: 'How do you clean high windows and facades?',
      answer:
        'That depends on the building and the access. We clarify it during the site visit and set out in the quote how we will reach the surfaces.',
    },
    {
      question: 'Do the tenants have to be at home?',
      answer:
        'For windows that can only be cleaned from inside, access to the flat or office is needed. We clarify this during the site visit, so that you can inform the tenants in good time.',
    },
    { question: 'What does the cleaning cost?', answer: answers.kosten },
    { question: 'Which regions do you cover?', answer: answers.gebiet },
    { question: 'Are you insured?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/unterhaltsreinigung', text: 'For regular cleaning of properties and business premises.' },
    { path: '/leistungen/bueroreinigung', text: 'For offices and practices, scheduled around your working hours.' },
    { path: '/leistungen/baureinigung', text: 'For glass and frames after construction and renovation work.' },
  ],
  cta: {
    title: 'A quote for your windows and facade',
    text: 'Tell us about the building, the surfaces and the date you would like. We will look at everything on site and prepare a quote for you, free of charge and non-binding.',
  },
}

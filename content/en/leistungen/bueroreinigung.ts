import type { ServicePageContent } from '../../types'
import { answers, languages } from '../common'

export const bueroreinigung: ServicePageContent = {
  path: '/leistungen/bueroreinigung',
  area: 'leistungen',
  eyebrow: 'Ongoing cleaning',
  h1: 'Cleaning for offices and practices',
  lead: [
    'In offices and practices, cleaning should not disrupt your work: no vacuum cleaner during a meeting, no wet floor during consulting hours. That is why we agree the cleaning times with you, to suit your working and opening hours.',
    `We clean offices, administrative premises and practices on a fixed schedule. Our staff speak ${languages}, which is practical for businesses with an international team.`,
  ],
  facts: [
    { label: 'For', value: 'Offices, administrative premises and practices' },
    { label: 'Times', value: 'By arrangement, to suit your working and opening hours' },
    { label: 'Frequency', value: 'Several times a week, depending on area and use' },
  ],
  scope: {
    title: 'What is included',
    intro: 'We record the exact scope after the site visit. Typically this includes:',
    items: [
      'Workstations and clear surfaces',
      'Floors in offices, corridors and meeting rooms',
      'Reception, entrance area and glass doors',
      'Kitchenettes and staff rooms',
      'Sanitary facilities',
      'Waste and paper recycling, restocking consumables',
    ],
    notIncluded: [
      'Stairwells and common areas of entire buildings: see [maintenance cleaning](/leistungen/unterhaltsreinigung).',
      'One-off deep cleaning: see [deep and special cleaning](/leistungen/sonderreinigungen).',
      'Reprocessing of instruments and medical devices, which remains the responsibility of your practice team.',
    ],
  },
  sections: [
    {
      title: 'Typical properties and situations',
      paragraphs: [
        'Small offices with a few workstations, administrative premises over several floors, medical and therapy practices with a waiting room: the rooms differ, the expectation is the same. In the morning everything should be clean and ready, without anyone noticing the cleaning.',
        'Enquiries often come when moving into new premises, when the team grows or when the previous cleaning no longer fits the working hours.',
      ],
    },
    {
      title: 'What happens during a cleaning visit',
      paragraphs: [
        'A fixed sequence has proven itself, from top to bottom and from clean to dirty: emptying bins and waste paper, wiping clear surfaces and workstations, cleaning the kitchenette and sanitary facilities, restocking consumables and finally the floors. That way, no floor that has already been cleaned gets dirty again.',
        'Whether screens, keyboards, telephones or plants are included is clarified during the site visit and set out in the quote.',
      ],
    },
    {
      title: 'Cleaning in practices',
      paragraphs: [
        'In practices, we follow your hygiene plan. Which rooms and surfaces we clean and what your practice team takes care of itself is clarified during the site visit and set out in the quote.',
        'At reception and in the waiting room, door handles, the counter, chairs and shelves are touched by many people. Which products apply to these surfaces is set out in your hygiene plan. Treatment rooms and equipment stay as your practice team specifies.',
      ],
    },
    {
      title: 'Times and access',
      paragraphs: [
        'Most offices are cleaned outside working hours, early in the morning or in the evening. In practices, the time depends on consulting hours. We agree the cleaning times with you.',
        'Access usually requires a key or badge and clear rules for the alarm system, lights and locking up. We clarify this before the first visit.',
      ],
    },
    {
      title: 'What determines the effort',
      paragraphs: [
        'How long a visit takes and how often we come depends less on the floor area alone than on how the rooms are used. We clarify these points during the site visit:',
      ],
      items: [
        'Floor area and type of rooms, such as single offices, open-plan areas, meeting rooms and reception',
        'Number of workstations and how intensively the rooms are used',
        'Kitchenettes and sanitary facilities, which take more time than office space',
        'Floor coverings such as carpet, parquet, stone or vinyl',
        'Glass doors, glass walls and other glass surfaces',
        'Schedule and cleaning times',
        'Access via key, badge or alarm system',
        'Whether consumables such as soap, paper and bin bags are included',
      ],
    },
    {
      title: 'What information to include in your quote request',
      paragraphs: [
        'The more precise your request, the better we can prepare the site visit. This information helps:',
      ],
      items: [
        'Address and type of business, such as office, administration or practice',
        'Approximate floor area and number of floors',
        'Number of workstations, meeting rooms, kitchenettes and sanitary facilities',
        'Preferred schedule and the times when cleaning should take place',
        'Special features such as practice rooms with a hygiene plan, confidential areas or large glass surfaces',
        'Whether you would like environmentally friendly cleaning products',
        'Preferred start date and contact person for the site visit',
      ],
    },
    {
      title: 'How to recognise good office cleaning',
      items: [
        'Bins are emptied and fitted with new bags',
        'The kitchenette is free of coffee rings, the sink clean and dry',
        'Glass doors and glass walls are free of fingerprints',
        'Soap and paper dispensers in the sanitary facilities are refilled',
        'Documents and personal belongings are exactly where you left them',
      ],
    },
  ],
  steps: [
    {
      title: 'Times and access',
      text: 'We agree when we clean and how we get into the building, for example with a key or badge.',
    },
    {
      title: 'Start',
      text: 'We start on the agreed date. If your needs change, we adjust the scope and frequency with you.',
    },
  ],
  faq: [
    {
      question: 'Do you clean outside our working hours?',
      answer:
        'We agree the cleaning times with you, to suit your working and opening hours. Let us know in your enquiry when cleaning should take place.',
    },
    {
      question: 'Do you also clean medical and therapy practices?',
      answer:
        'Yes. In practices, we follow your hygiene plan and clarify during the site visit which rooms and surfaces we take on.',
    },
    {
      question: 'Do we have to tidy the workstations before cleaning?',
      answer:
        'We clean clear surfaces. The less there is on the desks, the more thoroughly they can be cleaned. How you would like us to handle documents, screens and keyboards is clarified during the site visit.',
    },
    {
      question: 'How does the key handover work, and how does your team get into the building?',
      answer:
        'Before the first visit, we agree with you which keys, badges or codes our team receives and what rules apply to the alarm system, lights and locking up.',
    },
    {
      question: 'Do your staff also speak English?',
      answer: `${answers.sprachen} This is practical if several languages are spoken in your office.`,
    },
    {
      question: 'Who is liable if something is damaged during cleaning?',
      answer:
        'We hold business liability insurance with cover of CHF 10 million. If you notice any damage after a visit, please let us know straight away.',
    },
    {
      question: 'How long does the contract run, and how can it be terminated?',
      answer:
        'The term and notice are agreed in the quote. Raise your wishes on this during the site visit.',
    },
    { question: 'Do you also clean with environmentally friendly products?', answer: answers.mittel },
    {
      question: 'How much does office cleaning cost?',
      answer: `${answers.kosten} More in our guide: [What the cost of maintenance cleaning depends on](/blog/reinigungskosten-schweiz).`,
    },
    { question: 'Which regions do you cover?', answer: answers.gebiet },
  ],
  related: [
    { path: '/leistungen/unterhaltsreinigung', text: 'For stairwells and common areas of the whole building.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'For windows and glass surfaces, including the exterior.' },
    { path: '/leistungen/facility-services', text: 'If you want cleaning, caretaking and grounds maintenance from a single provider.' },
  ],
  cta: {
    title: 'A quote for your office or practice',
    text: 'Tell us the floor area, the rooms and the times you would like. We will visit you and prepare a quote, free of charge and non-binding.',
  },
}

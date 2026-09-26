import type { ServicePageContent } from '../types'
import { answers, languages, steps } from './common'

/**
 * English texts of the nine service pages under /leistungen (M29, M60).
 * Faithful translation of content/de/leistungen.ts. General descriptions of a
 * service («typically») are not a commitment, the binding scope is in the quote.
 */

const unterhaltsreinigung: ServicePageContent = {
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
    intro: 'We record what we clean and how often after the site visit. Typically this includes:',
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
      'One-off deep cleaning or move-out cleaning: see [special cleaning](/leistungen/sonderreinigungen).',
      'Exterior windows and facades: see [window and facade cleaning](/leistungen/fenster-und-fassadenreinigung).',
      'Private households. For villas and residences, there is our [premium range](/premium).',
    ],
  },
  sections: [
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
  ],
  steps: [
    steps.anfrage,
    steps.besichtigung,
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
        'Maintenance cleaning keeps areas clean on a fixed schedule. Deep cleaning is a one-off, thorough job that also removes dirt that ongoing cleaning does not reach. It is one of our [special cleaning services](/leistungen/sonderreinigungen).',
    },
    {
      question: 'Can we change the frequency later?',
      answer: 'Yes. If the use of the premises changes, we discuss a new scope or frequency with you.',
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
    { path: '/leistungen/sonderreinigungen', text: 'For deep cleaning or move-out cleaning with a handover guarantee.' },
  ],
  cta: {
    title: 'A quote for your property',
    text: 'Tell us about the property, the floor area and the frequency you would like. We will come for a site visit and prepare a quote for you, free of charge and non-binding.',
  },
}

const bueroreinigung: ServicePageContent = {
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
      'Waste and waste paper, restocking consumables',
    ],
    notIncluded: [
      'Stairwells and common areas of entire buildings: see [maintenance cleaning](/leistungen/unterhaltsreinigung).',
      'One-off deep cleaning: see [special cleaning](/leistungen/sonderreinigungen).',
      'Reprocessing of instruments and medical devices, which remains the responsibility of your practice team.',
    ],
  },
  sections: [
    {
      title: 'Cleaning in practices',
      paragraphs: [
        'In practices, we follow your hygiene plan. Which rooms and surfaces we clean and what your practice team takes care of itself is clarified during the site visit and set out in the quote.',
      ],
    },
  ],
  steps: [
    steps.anfrage,
    steps.besichtigung,
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
      question: 'Do your staff also speak English?',
      answer: `${answers.sprachen} This is practical if several languages are spoken in your office.`,
    },
    { question: 'Are you insured?', answer: answers.versicherung },
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

const sonderreinigungen: ServicePageContent = {
  path: '/leistungen/sonderreinigungen',
  area: 'leistungen',
  eyebrow: 'One-off and special cleaning',
  h1: 'Special cleaning: deep cleaning and move-out cleaning',
  lead: [
    'Some cleaning is not needed every week: before a flat is handed over, when dirt has built up over a long period, or when dust remains after construction work. That is what our special cleaning services are for.',
    'We carry them out for property managers, owners and businesses, as a one-off or at longer intervals.',
  ],
  facts: [
    { label: 'For', value: 'Property managers, owners, condominium owners’ associations and businesses' },
    { label: 'Type', value: 'One-off or at longer intervals' },
    { label: 'Move-out cleaning', value: 'With a handover guarantee' },
  ],
  scope: {
    title: 'Our special cleaning services',
    items: [
      'Deep cleaning of residential, office and commercial premises',
      'Move-out and end-of-tenancy cleaning with a handover guarantee',
      '[Final construction cleaning](/leistungen/baureinigung) after construction and renovation work',
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
      title: 'Deep cleaning',
      paragraphs: [
        'Deep cleaning goes further than ongoing cleaning. It removes dirt that has built up over a long period on floors, in sanitary facilities and kitchens, and on doors and surfaces.',
        'It is useful, for example, before office or commercial premises are re-let, after intensive use, or before [maintenance cleaning](/leistungen/unterhaltsreinigung) begins.',
      ],
    },
    {
      title: 'Move-out and end-of-tenancy cleaning with a handover guarantee',
      paragraphs: [
        'When a flat or business premises are handed over, everything must be clean so that the handover goes through without complaints. We clean the rooms thoroughly before the handover, with a handover guarantee: if the property management raises a complaint about our cleaning at the handover, we clean again free of charge. The details are set out in the quote.',
        'We offer move-out cleaning to property managers, owners and businesses and, for villas and residences in our [premium range](/premium), also to private individuals.',
      ],
    },
  ],
  steps: [
    steps.anfrage,
    steps.besichtigung,
    {
      title: 'Date',
      text: 'We schedule the job for a date that suits your handover or your operations.',
    },
    {
      title: 'Handover',
      text: 'After the job, we hand over the rooms. For move-out cleaning, the handover guarantee applies as set out in the quote.',
    },
  ],
  faq: [
    {
      question: 'What does handover guarantee mean?',
      answer:
        'If the property management raises a complaint about our cleaning at the handover, we clean again free of charge. The details are set out in the quote.',
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
    { question: 'How much does special cleaning cost?', answer: answers.kosten },
    { question: 'Which regions do you cover?', answer: answers.gebiet },
    { question: 'Are you insured?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/baureinigung', text: 'For cleaning during and after construction and renovation work.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'For glass surfaces and facades, including high-pressure cleaning.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'If regular cleaning is to follow the deep clean.' },
  ],
  cta: {
    title: 'A quote for your special cleaning',
    text: 'Tell us about the property, the occasion and the date. We will look at the rooms and prepare a quote for you, free of charge and non-binding.',
  },
}

const baureinigung: ServicePageContent = {
  path: '/leistungen/baureinigung',
  area: 'leistungen',
  eyebrow: 'One-off and special cleaning',
  h1: 'Construction and final construction cleaning for new builds and renovations',
  lead: [
    'After construction and renovation work, there is dust, mortar residue and protective film everywhere. Before tenants, buyers or your team move in, everything has to be ready for occupancy, often by a fixed handover date.',
    'We clean during and after the work until the rooms can be handed over. For building clients, architects, general contractors and property managers.',
  ],
  facts: [
    { label: 'For', value: 'Building clients, architects, general contractors and property managers' },
    { label: 'Properties', value: 'New builds, conversions and renovations' },
    { label: 'Timing', value: 'During the construction phase and before handover' },
  ],
  scope: {
    title: 'What is included',
    intro:
      'Construction cleaning is usually carried out in stages, in line with the progress of the work. We agree with you which stages we take on.',
    items: [
      'Rough cleaning during the construction phase',
      'Interim cleaning, for example before interior fit-out',
      'Final construction cleaning before handover',
      'Removing dust and residue from windows, frames and glass',
      'Removing adhesive residue and protective film',
      'Cleaning floors, sanitary facilities, kitchens and built-in cupboards ready for occupancy',
    ],
    notIncluded: [
      'Ongoing cleaning after occupancy: see [maintenance cleaning](/leistungen/unterhaltsreinigung).',
      'Facades: see [window and facade cleaning](/leistungen/fenster-und-fassadenreinigung).',
    ],
  },
  steps: [
    steps.anfrage,
    {
      title: 'Site visit and quote',
      text: 'We look at the construction site and clarify the scope and dates with you. You then receive a written quote, free of charge and non-binding.',
    },
    {
      title: 'Planning the stages',
      text: 'We coordinate the jobs with the site management and the schedule so that the cleaning keeps pace with the construction work.',
    },
    {
      title: 'Handover',
      text: 'Before the handover, we clean the rooms ready for occupancy. We schedule the date around your handover or move-in date.',
    },
  ],
  faq: [
    {
      question: 'What is the difference between construction cleaning and final construction cleaning?',
      answer:
        'Construction cleaning covers jobs during the construction phase, such as rough cleaning or interim cleaning. Final construction cleaning is the last, thorough clean before the handover, after which the rooms are ready for occupancy.',
    },
    {
      question: 'When should we schedule the final construction cleaning?',
      answer:
        'As soon as the handover date is fixed. The cleaning takes place after the last trades have finished and before the acceptance inspection. The earlier we know the date, the better we can plan.',
    },
    {
      question: 'Is window cleaning included?',
      answer:
        'Yes, we clean windows, frames and glass as part of the final construction cleaning. For facades, there is our [window and facade cleaning](/leistungen/fenster-und-fassadenreinigung).',
    },
    { question: 'How much does construction cleaning cost?', answer: answers.kosten },
    { question: 'Which regions do you cover?', answer: answers.gebiet },
    { question: 'Are you insured?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/sonderreinigungen', text: 'For deep cleaning and move-out cleaning with a handover guarantee.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'For glass surfaces and facades on the finished building.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'For ongoing cleaning after occupancy.' },
  ],
  cta: {
    title: 'A quote for your construction site',
    text: 'Tell us about the property, the floor area and the handover date. We will look at the site and prepare a quote for you, free of charge and non-binding.',
  },
}

const fensterUndFassade: ServicePageContent = {
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
  steps: [
    steps.anfrage,
    {
      title: 'Site visit and quote',
      text: 'We look at the glass surfaces and facade on site, clarify access and method, and prepare a written quote for you, free of charge and non-binding.',
    },
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
      question: 'Do you clean facades with high pressure?',
      answer: 'Yes, if the material allows it. Which method suits your facade is clarified during the site visit.',
    },
    {
      question: 'How do you clean high windows and facades?',
      answer:
        'That depends on the building and the access. We clarify it during the site visit and set out in the quote how we will reach the surfaces.',
    },
    { question: 'What does the cleaning cost?', answer: answers.kosten },
    { question: 'Which regions do you cover?', answer: answers.gebiet },
    { question: 'Are you insured?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/unterhaltsreinigung', text: 'For regular cleaning of residential and commercial buildings and business premises.' },
    { path: '/leistungen/bueroreinigung', text: 'For offices and practices, scheduled around your working hours.' },
    { path: '/leistungen/baureinigung', text: 'For glass and frames after construction and renovation work.' },
  ],
  cta: {
    title: 'A quote for windows and facade',
    text: 'Tell us about the building, the surfaces and the date you would like. We will look at everything on site and prepare a quote for you, free of charge and non-binding.',
  },
}

const industrieUndHallen: ServicePageContent = {
  path: '/leistungen/industrie-und-hallenreinigung',
  area: 'leistungen',
  eyebrow: 'One-off and special cleaning',
  h1: 'Industrial and warehouse cleaning for production and storage',
  lead: [
    'Production and storage generate dust, shavings and films of oil and grease. They make floors slippery and build up in installations. At the same time, cleaning must not hold up operations.',
    'We clean halls, floors, machinery and installations, as a one-off or regularly, at times we coordinate with you around production and shifts.',
  ],
  facts: [
    { label: 'For', value: 'Industrial and commercial businesses, logistics and warehousing' },
    { label: 'Areas', value: 'Production halls and warehouses, workshops, machinery and installations' },
    { label: 'Times', value: 'Coordinated with production and shift operations' },
  ],
  scope: {
    title: 'What is included',
    intro: 'We record the scope after a walk-through of your premises. Typically this includes:',
    items: [
      'Hall and production floors',
      'Storage areas, racking and traffic routes',
      'Workshops and ancillary rooms',
      'Machinery and installations according to your specifications',
      'Staff rooms, changing rooms and sanitary facilities',
    ],
    notIncluded: [
      'Maintenance and repair of machinery.',
      'Offices on the premises: see [office and practice cleaning](/leistungen/bueroreinigung).',
    ],
  },
  sections: [
    {
      title: 'Machinery and installations',
      paragraphs: [
        'We clean machinery according to your specifications and in consultation with your maintenance team. When an installation is shut down, what is cleaned and which products are suitable is agreed before the job.',
        'Your safety and operating rules also apply to our team. We clarify them with you before the first job.',
      ],
    },
  ],
  steps: [
    steps.anfrage,
    {
      title: 'Walk-through and quote',
      text: 'We look at the halls, installations and processes on site. You then receive a written quote, free of charge and non-binding.',
    },
    {
      title: 'Job planning',
      text: 'We agree times, areas and sequence, coordinated with production, shifts and shutdowns.',
    },
    {
      title: 'Cleaning',
      text: 'We clean according to plan. If your operations change, we adjust the plan with you.',
    },
  ],
  faq: [
    {
      question: 'Can you clean while operations are running?',
      answer:
        'We clarify that during the walk-through. Some areas can be cleaned during operation, others only during breaks, between shifts or during shutdowns. We agree the times with you.',
    },
    {
      question: 'Do you also clean machinery?',
      answer: 'Yes. What is cleaned on a machine and when it is shut down for this is agreed with you and your maintenance team.',
    },
    {
      question: 'Which rules apply to your team on our premises?',
      answer: 'Your safety and operating rules. We clarify them with you before the first job.',
    },
    { question: 'How much does industrial cleaning cost?', answer: answers.kosten },
    { question: 'Which regions do you cover?', answer: answers.gebiet },
    { question: 'Are you insured?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/sonderreinigungen', text: 'For a one-off, thorough deep clean.' },
    { path: '/leistungen/bueroreinigung', text: 'For offices and staff rooms on the premises.' },
    { path: '/leistungen/facility-services', text: 'If you want cleaning, caretaking and grounds maintenance from a single provider.' },
  ],
  cta: {
    title: 'A quote for your business',
    text: 'Tell us about the areas, machinery and operating hours. We will do a walk-through and prepare a quote for you, free of charge and non-binding.',
  },
}

const hauswartung: ServicePageContent = {
  path: '/leistungen/hauswartung',
  area: 'leistungen',
  eyebrow: 'Property care',
  h1: 'Caretaking for residential and commercial properties',
  lead: [
    'A property needs more than cleaning: someone has to check on things regularly, fix minor damage, organise waste disposal and be present when flats are handed over. That is what caretaking covers.',
    'For property managers, owners and condominium owners’ associations. We set out in writing which tasks we take on.',
  ],
  facts: [
    { label: 'For', value: 'Property managers, owners and condominium owners’ associations' },
    { label: 'Properties', value: 'Residential and commercial properties' },
    { label: 'Not offered', value: 'Winter services and on-call service' },
  ],
  scope: {
    title: 'What caretaking covers',
    intro: 'We put together the caretaking for your property from these tasks:',
    items: [
      'Inspection rounds: checking on things regularly and reporting defects',
      'Stairwell: cleaning and keeping it in order',
      'Keeping the laundry room and drying rooms clean',
      'Minor repairs, such as replacing light bulbs',
      'Keeping an eye on building services and reporting faults',
      'Assisting with flat handovers',
      'Organising the disposal of waste and recyclables',
      'Grounds maintenance, more under [grounds and green space maintenance](/leistungen/aussen-und-gruenflaechenpflege)',
    ],
    notIncluded: [
      'We do not offer winter services.',
      'Round-the-clock on-call and emergency service.',
      'Major repairs and trade work.',
    ],
  },
  steps: [
    steps.anfrage,
    {
      title: 'Walk-through and quote',
      text: 'We look at the property and clarify with you which tasks arise. You then receive a written quote, free of charge and non-binding.',
    },
    {
      title: 'Defining the tasks',
      text: 'We record which tasks we take on, how often we are on site and to whom we report defects.',
    },
    {
      title: 'Start',
      text: 'We start on the agreed date. If the property later needs more or less, we adjust the tasks with you.',
    },
  ],
  faq: [
    {
      question: 'How does it differ from maintenance cleaning?',
      answer:
        'Maintenance cleaning covers cleaning on a fixed schedule. Caretaking goes further: inspection rounds, minor repairs, building services, waste disposal, flat handovers and grounds maintenance. If you only need cleaning, [maintenance cleaning](/leistungen/unterhaltsreinigung) is the right choice.',
    },
    {
      question: 'Do you also carry out major repairs?',
      answer:
        'No, we carry out minor repairs. Major work requires a specialist firm. We report any damage we notice during inspection rounds to you.',
    },
    {
      question: 'Do you offer winter services or an on-call service?',
      answer: 'No. Winter services and on-call service are not part of what we offer.',
    },
    {
      question: 'Can we choose individual tasks?',
      answer: 'Yes. We put together the caretaking from the tasks your property needs.',
    },
    { question: 'How much does caretaking cost?', answer: answers.kosten },
    { question: 'Which regions do you cover?', answer: answers.gebiet },
  ],
  related: [
    { path: '/leistungen/aussen-und-gruenflaechenpflege', text: 'For the grounds and green spaces of the property.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'If only the cleaning is to be contracted out.' },
    { path: '/leistungen/facility-services', text: 'If cleaning, caretaking and grounds maintenance belong in one contract.' },
  ],
  cta: {
    title: 'A quote for your property',
    text: 'Tell us about the property, the number of flats or the floor area, and the tasks you would like to hand over. We will do a walk-through and prepare a quote for you, free of charge and non-binding.',
  },
}

const aussenUndGruen: ServicePageContent = {
  path: '/leistungen/aussen-und-gruenflaechenpflege',
  area: 'leistungen',
  eyebrow: 'Property care',
  h1: 'Grounds and green space maintenance for properties',
  lead: [
    'The grounds are the first thing tenants, customers and visitors see of a property. Well-kept green spaces, clean paths and open areas are therefore just as much part of its care as the stairwell.',
    'We maintain the grounds of your property, on their own or as part of [caretaking](/leistungen/hauswartung).',
  ],
  facts: [
    { label: 'For', value: 'Property managers, owners and businesses' },
    { label: 'Service', value: 'On its own or as part of caretaking' },
    { label: 'Not offered', value: 'Winter services' },
  ],
  scope: {
    title: 'What is included',
    intro: 'We record which work we take on after the site visit. Typically this includes:',
    items: [
      'Mowing lawns and trimming edges',
      'Tending hedges, shrubs and flower beds',
      'Removing leaves',
      'Keeping paths, open areas and car parks clean',
      'Removing weeds from open areas and joints',
      'Collecting litter from the grounds',
    ],
    notIncluded: ['We do not offer winter services.', 'Landscaping and new planting schemes.'],
  },
  steps: [
    steps.anfrage,
    steps.besichtigung,
    {
      title: 'Maintenance plan',
      text: 'We record which work we take on and how often, in line with the season.',
    },
    {
      title: 'Maintenance',
      text: 'We maintain the grounds according to plan. Please arrange additional visits, for example before an event, with us.',
    },
  ],
  faq: [
    { question: 'Do you also provide winter services?', answer: 'No, we do not offer winter services.' },
    {
      question: 'Can I contract out grounds maintenance without caretaking?',
      answer: 'Yes. Grounds and green space maintenance is available on its own or as part of [caretaking](/leistungen/hauswartung).',
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

const facilityServices: ServicePageContent = {
  path: '/leistungen/facility-services',
  area: 'leistungen',
  eyebrow: 'Property care',
  h1: 'Facility services: cleaning, caretaking and grounds from a single provider',
  lead: [
    'If you award cleaning, caretaking and grounds maintenance to different companies, you have several contracts, several contact people and a lot of coordination. With facility services, everything comes from us.',
    'You have one contract and one contact person. We put together the services included with you.',
  ],
  facts: [
    { label: 'For', value: 'Property managers, owners and businesses' },
    { label: 'Scope', value: 'Put together from our services as required' },
    { label: 'Contract', value: 'One contract, one contact person' },
  ],
  scope: {
    title: 'What can be combined',
    intro: 'We put together facility services from our own services:',
    items: [
      '[Maintenance cleaning](/leistungen/unterhaltsreinigung) with restocking service',
      '[Office and practice cleaning](/leistungen/bueroreinigung)',
      '[Caretaking](/leistungen/hauswartung)',
      '[Grounds and green space maintenance](/leistungen/aussen-und-gruenflaechenpflege)',
      '[Window and facade cleaning](/leistungen/fenster-und-fassadenreinigung)',
      '[Special cleaning](/leistungen/sonderreinigungen), such as deep cleaning',
      '[Industrial and warehouse cleaning](/leistungen/industrie-und-hallenreinigung)',
    ],
    notIncluded: [
      'Technical facility management, such as maintenance of heating, ventilation or lifts.',
      'Winter services.',
      'Arranging third-party companies, such as tradespeople.',
    ],
  },
  steps: [
    steps.anfrage,
    {
      title: 'Walk-through and quote',
      text: 'We look at your properties and clarify which services are needed. You then receive a written quote, free of charge and non-binding.',
    },
    {
      title: 'One contract',
      text: 'We set out the services your property needs in a single contract.',
    },
    {
      title: 'One contact person',
      text: 'You have one contact person with us for all services. You discuss any changes in one place.',
    },
  ],
  faq: [
    {
      question: 'What do you mean by facility services?',
      answer:
        'Cleaning, caretaking and grounds maintenance from a single provider, under one contract and with one contact person. Technical facility management, such as maintenance of heating and ventilation, is not included.',
    },
    {
      question: 'Can we start with a single service?',
      answer:
        'Yes. You can start with one service, such as [maintenance cleaning](/leistungen/unterhaltsreinigung), and add others later.',
    },
    { question: 'How much do facility services cost?', answer: answers.kosten },
    { question: 'Which regions do you cover?', answer: answers.gebiet },
    { question: 'Are you insured?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/hauswartung', text: 'Inspection rounds, minor repairs, building services, waste disposal and flat handovers.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Regular cleaning of residential and commercial buildings and business premises.' },
    { path: '/leistungen/aussen-und-gruenflaechenpflege', text: 'Maintenance of grounds and green spaces.' },
  ],
  cta: {
    title: 'A quote for facility services',
    text: 'Tell us about your properties and the services you would like to hand over. We will do a walk-through and prepare a quote for you, free of charge and non-binding.',
  },
}

export const leistungen = {
  unterhaltsreinigung,
  bueroreinigung,
  sonderreinigungen,
  baureinigung,
  fensterUndFassade,
  industrieUndHallen,
  hauswartung,
  aussenUndGruen,
  facilityServices,
}

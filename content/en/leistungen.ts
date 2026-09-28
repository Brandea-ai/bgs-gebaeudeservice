import type { ServicePageContent } from '../types'
import { answers, languages, steps } from './common'

/**
 * English texts of the service pages under /leistungen (M29, M60).
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

const sonderreinigungen: ServicePageContent = {
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
    steps.anfrage,
    steps.besichtigung,
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

const umzugsreinigung: ServicePageContent = {
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
    steps.anfrage,
    {
      title: 'Site visit and quote',
      text: 'We look at the flat or premises, if possible before moving out, and clarify the scope and date with you. You then receive a written quote, free of charge and non-binding.',
    },
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

const baureinigung: ServicePageContent = {
  path: '/leistungen/baureinigung',
  area: 'leistungen',
  eyebrow: 'One-off and special cleaning',
  h1: 'Construction and post-construction cleaning for new builds and renovations',
  lead: [
    'After construction and renovation work, there is dust, mortar residue and protective film everywhere. Before tenants, buyers or your team move in, everything has to be ready for occupancy, often by a fixed handover date.',
    'We clean during and after the work until the rooms can be handed over. For building owners, architects, general contractors and property managers.',
  ],
  facts: [
    { label: 'For', value: 'Building owners, architects, general contractors and property managers' },
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
      'Post-construction cleaning before handover',
      'Removing dust and residue from windows, frames and glass',
      'Removing adhesive residue and protective film',
      'Cleaning floors, sanitary facilities, kitchens and built-in cupboards ready for occupancy',
    ],
    notIncluded: [
      'Ongoing cleaning after move-in: see [maintenance cleaning](/leistungen/unterhaltsreinigung).',
      'Facades: see [window and facade cleaning](/leistungen/fenster-und-fassadenreinigung).',
    ],
  },
  sections: [
    {
      title: 'Typical properties and situations',
      paragraphs: [
        'New residential and commercial buildings, conversions of individual floors, renovated flats before re-letting or shops before opening. They all have one thing in common: a fixed date for handover, move-in or opening.',
        'Cleaning is often requested only shortly before that date. It is better to include it in the schedule early, so that there is room for it after the last trades have finished and before the acceptance inspection.',
      ],
    },
    {
      title: 'What happens during post-construction cleaning',
      paragraphs: [
        'Construction dust is fine and settles everywhere: on floors, in window rebates, on door frames, in cupboards and drawers. That is why cleaning is done from top to bottom and often in more than one pass.',
        'On top of that come residues such as adhesive, labels and protective film. They are removed with products and tools that suit the surface, so that glass, taps and new floors are not scratched.',
      ],
    },
    {
      title: 'The stages at a glance',
      items: [
        'Rough cleaning: removing coarse dirt and dust so that the next work can start on a clean base',
        'Interim cleaning: before the interior fit-out, for example before floors are laid or kitchens installed',
        'Post-construction cleaning: thorough and ready for occupancy, after the last trades have finished and before the acceptance inspection',
      ],
      paragraphs: [
        'If tradespeople are still working in the rooms after the post-construction cleaning, new dust is created. So schedule the final clean after the last work.',
      ],
    },
    {
      title: 'Working with the site management',
      paragraphs: [
        'On the construction site, the site management\'s rules apply. Before the first job, we clarify access, safety rules, electricity and water, a place for equipment and how waste is handled.',
        'A contact person on site who confirms dates and access is helpful. If the schedule shifts, we coordinate the jobs with you again.',
      ],
    },
    {
      title: 'How to recognise good post-construction cleaning',
      items: [
        'No film of dust on window sills, door frames or in drawers',
        'Glass free of adhesive residue, streaks and scratches',
        'Protective film has been removed from windows, doors and appliances',
        'Taps and tiles are free of residue',
        'Floors are clean, including in corners and along the skirting boards',
      ],
    },
  ],
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
      question: 'What is the difference between construction cleaning and post-construction cleaning?',
      answer:
        'Construction cleaning covers jobs during the construction phase, such as rough cleaning or interim cleaning. Post-construction cleaning is the final, thorough clean before the handover, after which the rooms are ready for occupancy.',
    },
    {
      question: 'When should we schedule the post-construction cleaning?',
      answer:
        'As soon as the handover date is fixed. The cleaning takes place after the last trades have finished and before the acceptance inspection. The earlier we know the date, the better we can plan.',
    },
    {
      question: 'Is window cleaning included?',
      answer:
        'Yes, we clean windows, frames and glass as part of the post-construction cleaning. For facades, there is our [window and facade cleaning](/leistungen/fenster-und-fassadenreinigung).',
    },
    {
      question: 'What is needed on the construction site for the cleaning?',
      answer:
        'Access to the rooms, electricity and water, and a place for equipment. Where we will find these is clarified during the site visit with you or the site management.',
    },
    { question: 'How much does construction cleaning cost?', answer: answers.kosten },
    { question: 'Which regions do you cover?', answer: answers.gebiet },
    { question: 'Are you insured?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/sonderreinigungen', text: 'For deep cleaning, when areas are to be thoroughly clean again after a long period of use.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'For glass surfaces and facades on the finished building.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'For ongoing cleaning after move-in.' },
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

const industrieUndHallen: ServicePageContent = {
  path: '/leistungen/industrie-und-hallenreinigung',
  area: 'leistungen',
  eyebrow: 'One-off and special cleaning',
  h1: 'Industrial and warehouse cleaning for production and storage',
  lead: [
    'Production and storage generate dust, shavings and films of oil and grease. They make floors slippery and build up in equipment. At the same time, cleaning must not hold up operations.',
    'We clean halls, floors, machinery and equipment, as a one-off or regularly, at times we coordinate with you around production and shifts.',
  ],
  facts: [
    { label: 'For', value: 'Industrial and commercial businesses, logistics and warehousing' },
    { label: 'Areas', value: 'Production halls and warehouses, workshops, machinery and equipment' },
    { label: 'Times', value: 'Coordinated with production and shift operations' },
  ],
  scope: {
    title: 'What is included',
    intro: 'We record the scope after a walk-through of your premises. Typically this includes:',
    items: [
      'Hall and production floors',
      'Storage areas, racking and traffic routes',
      'Workshops and ancillary rooms',
      'Machinery and equipment according to your specifications',
      'Staff rooms, changing rooms and sanitary facilities',
    ],
    notIncluded: [
      'Maintenance and repair of machinery.',
      'Offices on the premises: see [office and practice cleaning](/leistungen/bueroreinigung).',
    ],
  },
  sections: [
    {
      title: 'Machinery and equipment',
      paragraphs: [
        'We clean machinery according to your specifications and in consultation with your maintenance team. When equipment is shut down, what is cleaned and which products are suitable is agreed before the job.',
        'Your safety and operating rules also apply to our team. We clarify them with you before the first job.',
      ],
    },
    {
      title: 'Hall floors and traffic routes',
      paragraphs: [
        'Hall floors carry dust, shavings, tyre abrasion and films of oil or grease. Large areas are usually cleaned with scrubber dryers, which scrub and pick up the dirty water in a single pass. The floor can then quickly be walked and driven on again.',
        'Which approach and which product are suitable depends on the surface, such as concrete, coating or industrial parquet, and on the type of dirt. We clarify this during the walk-through.',
      ],
    },
    {
      title: 'Typical properties and situations',
      paragraphs: [
        'Production plants, workshops, warehouses and logistics halls, commercial businesses with a workshop and office under one roof. Occasions include an audit or a customer visit, a change in production, company holidays or the wish for fixed cleaning times instead of cleaning on the side.',
      ],
    },
    {
      title: 'Safety on the premises',
      paragraphs: [
        'Production and storage have their own rules: protective equipment, forklift routes, cordoned-off areas, handling of hazardous substances. We clarify these rules with you before the first job.',
        'For machinery, this includes who switches it off and secures it and who releases it again after cleaning. We agree this with your maintenance team before the job.',
      ],
    },
    {
      title: 'Planning and frequency',
      paragraphs: [
        'Not every area needs the same frequency. Staff rooms and sanitary facilities need frequent care. Hall floors, racking and machinery need thorough cleaning at longer intervals.',
        'A combination often makes sense: regular cleaning during operations and a deep clean during company holidays or planned shutdowns.',
      ],
    },
  ],
  steps: [
    steps.anfrage,
    {
      title: 'Walk-through and quote',
      text: 'We look at the halls, equipment and processes on site. You then receive a written quote, free of charge and non-binding.',
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
    {
      question: 'How is a hall floor cleaned?',
      answer:
        'Usually with a scrubber dryer, which scrubs and picks up the dirty water straight away. Which product is suitable depends on the surface and the type of dirt, such as dust, oil or abrasion. We clarify this during the walk-through.',
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
  h1: 'Caretaking for residential and commercial buildings',
  lead: [
    'A property needs more than cleaning: someone has to check on things regularly, fix minor damage, organise waste disposal and be present when flats are handed over. That is what caretaking covers.',
    'For property managers, owners and communities of condominium owners who cannot or do not want to check on things themselves. We set out in writing which tasks we take on, how often we are on site and to whom we report defects.',
  ],
  facts: [
    { label: 'For', value: 'Property managers, owners and communities of condominium owners' },
    { label: 'Properties', value: 'Residential and commercial properties' },
    { label: 'Scope', value: 'Tasks as required, set out in writing' },
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
      'Grounds maintenance, see [grounds and green space maintenance](/leistungen/aussen-und-gruenflaechenpflege)',
    ],
    notIncluded: [
      'We do not offer winter maintenance.',
      'Round-the-clock on-call and emergency service.',
      'Major repairs and work by tradespeople.',
    ],
  },
  sections: [
    {
      title: 'Typical properties and situations',
      paragraphs: [
        'Apartment buildings and residential complexes, condominiums, mixed-use buildings with shops or offices on the ground floor. Wherever that is, someone is needed who comes by regularly, keeps the laundry room in order and notices when something is wrong.',
        'Enquiries often come when the previous caretaker stops, when a property management firm takes over a property or when nobody in a community of condominium owners wants to take on the tasks any more.',
      ],
    },
    {
      title: 'What happens during an inspection round',
      paragraphs: [
        'During the inspection round, we check on things as often as agreed with you. What we can fix ourselves, such as replacing a light bulb, we take care of. Everything else we report to the contact we have agreed with you.',
      ],
      items: [
        'Lighting in the stairwell, the cellar and the grounds',
        'Doors, locks and letterboxes',
        'Laundry room, drying rooms and cellar',
        'Boiler room and building services for visible faults',
        'Waste collection point and grounds',
      ],
    },
    {
      title: 'Keeping an eye on building services',
      paragraphs: [
        'Caretaking does not mean servicing the installations. Heating, ventilation, lifts and fire protection are serviced by specialist firms. The caretaker looks regularly, notices faults early and reports them, such as an error message on the heating, a dripping tap in the laundry room or a lift that does not stop properly.',
      ],
    },
    {
      title: 'Flat handovers',
      paragraphs: [
        'How we assist with flat handovers is agreed with the property management, for example whether we open the flat, hand over keys or note meter readings. The acceptance inspection and the report remain with the property management.',
        'If the flat needs a final clean before the handover, there is our [end-of-tenancy cleaning with a handover guarantee](/leistungen/umzugsreinigung).',
      ],
    },
    {
      title: 'Working with property management and owners',
      paragraphs: [
        'Good caretaking depends on clear agreements: which tasks, how often, who receives reports and which small jobs may be done without asking first. We set this out in writing.',
        'Tenants should also know whom to contact. We agree with you who that contact person is.',
      ],
    },
    {
      title: 'Caretaking specification: what it should include',
      paragraphs: [
        'A specification sets out what the caretaker does in a property, how often and who is responsible for what. It creates clarity for property management, owners, tenants and caretaker, and makes quotes comparable.',
        'With us, this list is drawn up after the walk-through: we put in writing which tasks we take on, how often we are on site and to whom we report defects. These points belong in a specification:',
      ],
      items: [
        'Tasks and frequency for each area: stairwell, entrance, laundry and drying rooms, cellar and waste area, each with the activity and how often',
        'Inspection rounds: how often, which rooms and installations are included and how findings are recorded',
        'Grounds: which areas are maintained, such as lawns, hedges, flower beds, paths and forecourts',
        'Responsibilities and reporting lines: who receives reports from the caretaker, which small jobs may be done without asking and whom tenants should contact',
        'Keys and access: which keys, badges and codes the caretaker receives and how they are kept',
        'Materials: who provides cleaning products, consumables and equipment and where they are stored',
        'Boundary with tradespeople: which work specialist firms take on, such as major repairs and the servicing of heating, lifts and fire protection, and who commissions them',
      ],
    },
  ],
  steps: [
    steps.anfrage,
    {
      title: 'Walk-through and quote',
      text: 'We look at the property and clarify with you which tasks are needed. You then receive a written quote, free of charge and non-binding.',
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
      question: 'What tasks does a caretaker take on?',
      answer:
        'Typical tasks are inspection rounds, cleaning the stairwell, laundry and drying rooms, minor repairs, keeping an eye on building services, waste disposal, helping with flat handovers and looking after the grounds. Which tasks we take on in your property and how often is agreed with you in writing, as in a specification.',
    },
    {
      question: 'How does it differ from maintenance cleaning?',
      answer:
        'Maintenance cleaning covers cleaning on a fixed schedule. Caretaking goes further: inspection rounds, minor repairs, building services, waste disposal, flat handovers and grounds maintenance. If you only need cleaning, [maintenance cleaning](/leistungen/unterhaltsreinigung) is the right choice.',
    },
    {
      question: 'Do you also carry out major repairs?',
      answer:
        'No, we only carry out minor repairs. Major work requires a specialist firm. We report to you any damage we notice during inspection rounds.',
    },
    {
      question: 'Do you offer winter maintenance or an on-call service?',
      answer: 'No. Winter maintenance and on-call service are not part of what we offer.',
    },
    {
      question: 'Can we choose individual tasks?',
      answer: 'Yes. We put together the caretaking from the tasks your property needs.',
    },
    {
      question: 'How often does the caretaker come by?',
      answer:
        'That depends on the size, age and use of the property. We set out in writing how often we are on site, together with the other tasks.',
    },
    { question: 'Are you insured?', answer: answers.versicherung },
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
        'Summer: mowing lawns regularly, cutting hedges, removing weeds from paved areas and joints',
        'Autumn: clearing leaves, cutting back shrubs, preparing flower beds for winter',
        'Winter: we do not offer winter maintenance, snow clearing and gritting need a different solution',
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
    steps.anfrage,
    steps.besichtigung,
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
        'Usually in early summer and, if needed, again in late summer. During the bird breeding season, care must be taken with nests. We record the right time for your hedges in the maintenance plan.',
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

const facilityServices: ServicePageContent = {
  path: '/leistungen/facility-services',
  area: 'leistungen',
  eyebrow: 'Property care',
  h1: 'Facility services: cleaning, caretaking and grounds from a single provider',
  lead: [
    'If you award cleaning, caretaking and grounds maintenance to different companies, you have several contracts, several contact people and a lot of coordination. With facility services, everything comes from us.',
    'You have one contract and one contact person. We work out with you which services are included.',
  ],
  facts: [
    { label: 'For', value: 'Property managers, owners and businesses' },
    { label: 'Scope', value: 'Put together from our services as required' },
    { label: 'Contract', value: 'One contract, one contact person' },
  ],
  scope: {
    title: 'What can be combined',
    intro: 'We put together facility services from these in-house services:',
    items: [
      '[Maintenance cleaning](/leistungen/unterhaltsreinigung) with restocking service',
      '[Office and practice cleaning](/leistungen/bueroreinigung)',
      '[Caretaking](/leistungen/hauswartung)',
      '[Grounds and green space maintenance](/leistungen/aussen-und-gruenflaechenpflege)',
      '[Window and facade cleaning](/leistungen/fenster-und-fassadenreinigung)',
      '[Deep and special cleaning](/leistungen/sonderreinigungen)',
      '[Industrial and warehouse cleaning](/leistungen/industrie-und-hallenreinigung)',
    ],
    notIncluded: [
      'Technical facility management, such as maintenance of heating, ventilation or lifts.',
      'Winter maintenance.',
      'Referrals to third-party firms, such as tradespeople.',
    ],
  },
  sections: [
    {
      title: 'Typical situations',
      paragraphs: [
        'A property management firm looks after several properties and does not want to coordinate a separate company for every task. A business has offices, a hall and grounds and wants one point of contact for everything. Or an owner takes over a property and is looking for a solution that fits together from the start.',
      ],
    },
    {
      title: 'How individual services become one contract',
      paragraphs: [
        'During the walk-through, we look at what your property needs: interior cleaning, glass, caretaking, grounds. This results in a contract that sets out each service with its scope and frequency.',
        'If something is added later or dropped, you discuss it in one place, with your contact person at our company.',
      ],
    },
    {
      title: 'What you gain',
      items: [
        'One contact person for cleaning, caretaking and grounds',
        'One contract instead of several, with an overview of all services',
        'Less coordination between companies, for example about who cleans the stairwell after work on the grounds',
        'A view of the whole property: whoever cleans inside also notices when something is wrong outside',
      ],
    },
    {
      title: 'Limits and cooperation',
      paragraphs: [
        'For us, facility services means the services we provide ourselves. Technical facility management, such as maintenance of heating, ventilation or lifts, is not included, nor are referrals to tradespeople.',
        'We report faults we notice during our work to you, so that you can commission the right specialist firm.',
      ],
    },
  ],
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
    {
      question: 'How does it differ from caretaking?',
      answer:
        '[Caretaking](/leistungen/hauswartung) is a single service with inspection rounds, minor repairs, building services and waste disposal. Facility services combine it with cleaning and grounds maintenance in one contract.',
    },
    {
      question: 'Who is our contact person?',
      answer: 'You have one contact person with us for all services. You discuss any changes in one place.',
    },
    { question: 'How much do facility services cost?', answer: answers.kosten },
    { question: 'Which regions do you cover?', answer: answers.gebiet },
    { question: 'Are you insured?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/hauswartung', text: 'Inspection rounds, minor repairs, building services, waste disposal and flat handovers.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Regular cleaning of properties and business premises.' },
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
  umzugsreinigung,
  baureinigung,
  fensterUndFassade,
  industrieUndHallen,
  hauswartung,
  aussenUndGruen,
  facilityServices,
}

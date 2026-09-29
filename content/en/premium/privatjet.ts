import type { ServicePageContent, Source } from '../../types'

/** Privatjet (E85), same keys and sources as content/de/premium/privatjet.ts */
const source = {
  faa: {
    label: 'FAA Advisory Circular 43.13-1B, paragraph 3-25: cleaning and polishing transparent plastic',
    href: 'https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_43.13-1B_w-chg1.pdf',
  },
  who: {
    label: 'WHO, Guide to Hygiene and Sanitation in Aviation, 3rd edition 2009, chapter 3 and annex F',
    href: 'https://iris.who.int/handle/10665/44164',
  },
  cfr: {
    label: '14 CFR 25.853 (a): flammability of cabin materials, US airworthiness standard for large aeroplanes',
    href: 'https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-25/subpart-D/subject-group-ECFR1e1f52030ba4797/section-25.853',
  },
  leather: {
    label: 'Townsend Leather: care of aniline leather, manufacturer guidance',
    href: 'https://townsendleather.com/care-for-anilne-leathers',
  },
  textile: {
    label: 'Duncan Aviation: caring for the fabrics and leathers in your business aircraft',
    href: 'https://www.duncanaviation.aero/intelligence/caring-for-the-fabrics-and-leathers-in-your-business-aircraft',
  },
  vtnp: {
    label: 'Swiss Ordinance on Animal By-Products (VTNP), Art. 2 para. 2bis, Art. 4, 5 and 22 (in German)',
    href: 'https://www.fedlex.admin.ch/eli/cc/2011/372/de',
  },
} satisfies Record<string, Source>

export const privatjet: ServicePageContent = {
  path: '/premium/privatjet',
  area: 'premium',
  h1: 'Private jet cleaning for cabin, galley and lavatory',
  lead: [
    'After a long-haul flight there are coffee rings on the burr walnut, crumbs in the seat tracks and fingerprints on the cabin windows. Sometimes only a few hours remain before the next departure.',
    'We clean the cabin, galley and lavatory of your private jet between two flights, using the products approved for your aircraft. Below you will find what the materials on board can tolerate, what can be done in the time on the ground and what needs to be settled before the first job.',
  ],
  facts: [
    { label: 'Scope', value: 'Cabin, galley and lavatory' },
    { label: 'Not included', value: 'Exterior, toilet tanks and technical work' },
    { label: 'Products', value: 'Only those approved by your operator' },
    { label: 'Working hours', value: 'Between two flights, evenings and weekends too' },
    { label: 'Access', value: 'Arranged by your operator with the airfield' },
  ],
  sections: [
    {
      title: 'The cabin between two flights',
      paragraphs: [
        'In a private jet, the occasion determines what aircraft interior cleaning involves. After a full flight it is the upholstery, carpet and galley. After a stay at the maintenance organisation, dust and fingerprints cover panels, tables and windows. Before a flight with guests, every detail seen on boarding counts.',
        'Your flight schedule sets the time window. The earlier the next departure is fixed, the more precisely we can plan what has to be finished beforehand. Which tasks fit into an hour and which need a night is shown in the ground time table further down.',
      ],
    },
    {
      title: 'Galley and lavatory',
      paragraphs: [
        'In the galley, drinks run into joints, drawer runners and compartments that only become visible once the inserts are out. In the lavatory, what matters is the toilet, basin, taps, mirror, door handles and the floor around the toilet.',
        'In the WHO example schedule, cleaning the lavatory is fully on the list even for a stop of less than an hour. Only refilling soap and toiletries is then done on request. Food waste from flights across the border is subject to its own rules, as explained in the checklist below.',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'kabinenmaterialien',
      title: 'Cabin materials and what damages them',
      intro:
        'Which products are allowed on board is decided by the aircraft manufacturer and your operator. According to the WHO guide, the operator’s engineering department approves each product before use, and the list is usually in the maintenance manual.',
      columns: ['Material', 'What matters', 'What damages it'],
      rows: [
        [
          'Cabin windows, inside',
          'Approved products and a non-abrasive cloth, then wipe with water and dry. For plastic, the FAA recommends plenty of water, mild soap and a soft, grit-free cloth.',
          'On plastic: alcohol, acetone, thinners and window cleaning sprays soften it and cause fine cracks. Rubbing dry scratches and builds up static.',
        ],
        [
          'Aniline leather (no pigment finish)',
          'Remove dust with a soft, slightly damp cloth, heavier soil with water and a mild non-detergent soap. Air dry, away from heat and sun.',
          'Unsuitable cleaners darken it immediately, hard water leaves rings. Do not scrub or soak, blot spills at once.',
        ],
        [
          'Fabric covers and carpet',
          'Blot stains straight away with a clean cloth. Loosen sticky residue with a spatula, then vacuum.',
          'Rubbing grinds the dirt deeper into the fabric. Stain removers that are not approved.',
        ],
        [
          'Lacquered wood, high gloss, panels',
          'Products from the approved list, soft and clean cloths.',
          'Polish, wax or impregnation without approval. Under the US standard for large aeroplanes, applied finishes must also pass the flammability test.',
        ],
        [
          'Disinfection in galley and lavatory',
          'Only approved products from the operator’s list, used exactly as directed.',
          'Many disinfectants are oxidisers. They can attack metals and reduce the fire resistance of upholstery.',
        ],
      ],
      note: 'Where the documents from your manufacturer or completion centre say otherwise, they apply.',
      sources: [source.who, source.faa, source.leather, source.textile, source.cfr],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'bodenzeit',
      title: 'What each ground time allows',
      intro:
        'The World Health Organization divides cabin cleaning in its example schedule by the time on the ground. The schedule comes from airline operations. For a private jet, it shows what is worth doing during a short stop and what needs a night on the ground.',
      columns: ['Time on the ground', 'Standard in the WHO schedule', 'On request only in the WHO schedule'],
      rows: [
        [
          'Under 60 minutes',
          'Waste from cabin, closets and galley, stow pillows and blankets. Lavatory: toilet bowl and seat, basin, taps, mirror, walls, door handles and floor.',
          'Tables and armrests, galley sink and work surfaces, oven, refilling soap and toiletries. Carpet and floors only as required.',
        ],
        [
          'Over 60 minutes',
          'In addition, empty seat pockets, clean the galley sink, taps, work surfaces and retractable tables, and refill soap and toiletries in the lavatory.',
          'Vacuuming fabric seats, wiping leather seats, vacuuming carpet, oven inside and out, galley floor, tables and armrests.',
        ],
        [
          'Overnight',
          'Everything in the rows above, including what is on request there. Plus cabin windows inside, the cabin’s vinyl floors, removing seat cushions to vacuum beneath, carpet stains, seat tracks, ceiling, sidewalls, closets, doors, screens and the galley ventilation grilles.',
          'None: at this level everything is standard.',
        ],
      ],
      note: 'If time is short, the WHO gives priority to waste, galley and lavatory. As dirt traps it names the runners of the catering equipment, galley compartments, the sink drain, the lavatory cupboards and the first-aid stowage.',
      sources: [source.who],
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'erster-einsatz',
      title: 'Checklist for the first job on board',
      intro:
        'Settle these points with your operator before the first job. After that, they apply to every further one.',
      groups: [
        {
          title: 'Location and access',
          items: [
            'Airfield and hangar or parking position where the aircraft stands',
            'Who escorts our team to the aircraft or authorises access, with a phone number',
            'Whether power and light are available on board (hangar or ground power unit)',
            'The time window between landing and the next departure',
          ],
        },
        {
          title: 'Cabin and products',
          items: [
            'Which areas are included and which are not',
            'List of approved cleaning products and disinfectants',
            'Care instructions from the completion centre for leather, wood and textiles',
            'Who decides on care products, polish or impregnation',
          ],
        },
        {
          title: 'Galley and waste',
          items: [
            'Who takes the food waste: from aircraft in cross-border traffic, it is a category 1 animal by-product that must be incinerated',
            'Where the remaining waste goes',
          ],
        },
        {
          title: 'Handover and discretion',
          items: [
            'Who takes over the cabin after cleaning',
            'How we handle personal belongings and documents on board',
            'Whether you would like a non-disclosure agreement',
          ],
        },
      ],
      sources: [source.vtnp, source.who],
      printable: true,
      updated: '2026-09-28',
    },
  ],
  scope: {
    title: 'What we clean on board',
    intro: 'Depending on the occasion and ground time, this includes:',
    items: [
      'Leather seats and fabric covers, seat tracks and side ledges',
      'Carpets and floors, under the seats too',
      'Tables, panels and cabinets in wood or high-gloss lacquer',
      'Cabin windows inside, mirrors and glass',
      'Door handles, switches and other frequently touched spots',
      'Screens and seat controls',
      'Galley: work surfaces, sink, compartments and drawers',
      'Lavatory: toilet, basin, taps, mirror and floor',
    ],
    notIncluded: [
      'Exterior cleaning of fuselage, windows and engines',
      'Emptying the toilet tanks and refilling fresh water',
      'Removing seats, carpets or panels',
      'Repairs to leather, wood or lacquer',
    ],
  },
  steps: [
    {
      title: 'Approvals',
      text: 'Your operator tells us which products are allowed and arranges access to the aircraft. Both then apply to every further job.',
    },
    {
      title: 'Cleaning during ground time',
      text: 'We clean within the time window your flight schedule allows, evenings or weekends too.',
    },
    {
      title: 'Handing over the cabin',
      text: 'The cabin is taken over by the person you have nominated, for example a crew member or someone from your operator.',
    },
  ],
  faq: [
    {
      question: 'What does cleaning a private jet cabin cost?',
      answer:
        'There is no flat rate. The effort depends on the size of the cabin and the number of seats, the materials, the condition after the flight and the ground time. The frequency of visits also affects the workload. You receive the amount in writing after we have seen the cabin.',
    },
    {
      question: 'Which cleaning products do you use on board?',
      answer:
        'The products approved for your aircraft. The list is usually in the maintenance manual or held by your maintenance organisation. Household cleaners do not belong on board: window cleaning sprays and alcohol soften plastic panes, and unsuitable cleaners darken aniline leather (see the table of cabin materials above).',
    },
    {
      question: 'Do you also condition or impregnate leather and wood?',
      answer:
        'We clean. Care products, polish and impregnation leave a layer on the material. Whether they are applied on board is decided by your maintenance organisation, and the table of cabin materials above explains why.',
    },
    {
      question: 'Do you also clean the outside of the aircraft?',
      answer:
        'No. We clean the cabin including galley and lavatory. Exterior cleaning, toilet tanks and fresh water are handled by maintenance and ground handling.',
    },
    {
      question: 'How does your team get to the aircraft?',
      answer:
        'You or your operator arrange access to the hangar or parking position with the airfield, for example with an escort. Allow some time for this within the time window.',
    },
    {
      question: 'What happens to food waste from the galley?',
      answer:
        'From aircraft flying across the border, food waste counts in Switzerland as category 1 animal by-products, the group with the highest risk. The ordinance requires it to be incinerated. Who takes it belongs in the checklist for the first job further up.',
    },
    {
      question: 'Can our operator or family office commission the cleaning?',
      answer:
        'Yes. Enquiries can come from owners, operators, family offices or assistants. What matters is one person who can approve products and access.',
    },
    {
      question: 'How do you handle personal belongings on board?',
      answer:
        'As you decide: leave them in place, put them in a particular compartment or not touch them at all. This includes documents and devices.',
    },
  ],
  related: [
    { path: '/premium/luxusimmobilien', text: 'When a villa, residence or second home should be looked after alongside the jet.' },
    { path: '/premium/yacht', text: 'When you also have a boat on Lake Lucerne or Lake Zug in summer.' },
    { path: '/premium', text: 'When you would like your family office, office and events looked after discreetly as well.' },
  ],
  cta: {
    title: 'Enquire discreetly about cabin cleaning',
    text: 'For the quote we need the aircraft type, the airfield where it is usually based, your usual time windows and the list of products your operator has approved. After a look at the cabin you receive the quote, free of charge and without obligation.',
  },
}

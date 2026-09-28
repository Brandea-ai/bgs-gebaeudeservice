import type { ServicePageContent } from '../../types'

// Same keys as content/de/leistungen/unterhaltsreinigung.ts. Legal sources read on 28.09.2026 on
// fedlex.admin.ch (English translations of CO and CC, VMWG only in German, French and Italian).
export const unterhaltsreinigung: ServicePageContent = {
  path: '/leistungen/unterhaltsreinigung',
  area: 'leistungen',
  eyebrow: 'Ongoing cleaning',
  h1: 'Maintenance cleaning and stairwell cleaning for properties',
  lead: [
    'The stairwell, entrance, lift and laundry room are shared by everyone in a building, and complaints about dirt end up with the property manager. We clean these common areas several times a week, to a scope agreed in writing.',
    'We also restock soap, paper and bin bags. Further down you will find a sample cleaning specification for comparing quotes, an overview of service charges and condominium costs, and a checklist for your walk-round.',
  ],
  facts: [
    { label: 'For', value: 'Apartment buildings, condominiums, mixed-use buildings, business premises' },
    { label: 'Frequency', value: 'Several times a week, set per area' },
    { label: 'Included', value: 'Restocking soap, paper and bin bags' },
    { label: 'Not included', value: 'Flats, offices, exterior windows, deep cleaning' },
  ],
  sections: [
    {
      title: 'When a company should take over the stairwell',
      paragraphs: [
        'In many apartment buildings, the tenants clean the stairwell in turn according to a rota. That works as long as everyone takes part. Once tenants change, floors are left in different states or complaints pile up, regular cleaning by a company is usually the calmer solution.',
        'Other typical triggers: the previous company or caretaker stops, a property management firm takes over a building, or a shop with customers moves into the ground floor. That also changes how often the entrance and lift need cleaning.',
        'Who bears the costs after the switch depends on the lease and the law. The overview of service charges and condominium costs on this page shows what applies.',
      ],
    },
    {
      title: 'Restocking soap, paper and bin bags',
      paragraphs: [
        'Tenants and customers notice an empty soap dispenser sooner than a dusty landing. That is why restocking consumables is part of maintenance cleaning.',
        'The supplies are bought either by us or by you. The written quote sets out which items are included and who buys them.',
      ],
      items: [
        'Toilet paper and paper towels for the toilets',
        'Liquid soap for the dispensers at the washbasins',
        'Bin bags for bins and collection containers',
        'Other items if you mention them in your enquiry',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'leistungsverzeichnis',
      title: 'Sample cleaning specification for stairwells and common areas',
      intro:
        'A cleaning specification makes quotes comparable, because every company prices the same areas, tasks and frequencies. The sample applies to an apartment building with a lift and a shop on the ground floor and is not a quote. Delete what does not apply to you. Exterior windows, facades and deep cleaning belong in separate items.',
      columns: ['Area', 'Task', 'Frequency (example)'],
      rows: [
        ['Entrance and porch', 'Damp-mop the floor, vacuum the doormat, clean the glass door on both sides', 'Every visit'],
        ['Stairs, landings and handrails', 'Sweep and damp-mop the stairs, including edges and corners; wipe handrails, banisters and light switches with a damp cloth', 'Every visit'],
        ['Lift', 'Clean the floor, walls, mirror, control panel and doors of the car', 'Every visit'],
        ['Letterboxes, flat doors and door frames', 'Wipe down, remove fingerprints', 'Weekly'],
        ['Laundry room and drying room', 'Clean the floor, wipe the sink and shelves', 'Weekly'],
        ['Cellar and attic corridors, bike room', 'Sweep, remove cobwebs', 'Monthly'],
        ['Reception, corridors and toilets of the business premises', 'Clean floors, sanitary fittings and taps', 'Every visit'],
        ['Waste and consumables', 'Empty bins, restock soap, paper and bags', 'Every visit, where agreed'],
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'nebenkosten',
      title: 'Who pays for the cleaning: tenancy law and condominiums',
      intro:
        'Whether the cost of stairwell cleaning stays with the owners or is passed on is governed by the Code of Obligations, the Ordinance on the Lease of Residential and Commercial Premises (VMWG) and the Civil Code. The overview summarises the provisions for the most common cases.',
      columns: ['Case', 'What the law provides', 'What this means in practice'],
      rows: [
        [
          'Rented building, cleaning agreed as a service charge',
          'Service charges are the consideration for services provided by the landlord or a third party in connection with the use of the property (Art. 257a para. 1 CO). The actual outlays are charged (Art. 257b para. 1 CO).',
          'Ideally the invoice shows the cleaning for each building. Tenants may inspect the supporting documents (Art. 257b para. 2 CO).',
        ],
        [
          'Statement or flat rate',
          'A service charge statement must be drawn up and presented at least once a year. A flat rate must be based on average figures over three years (Art. 4 VMWG).',
          'File cleaning costs separately by building and year, so that a flat rate can also be justified later.',
        ],
        [
          'Rented building, cleaning not agreed as a service charge',
          'Tenants only have to pay service charges if this has been specifically agreed with the landlord (Art. 257a para. 2 CO).',
          'The costs stay with the owners. Passing them on requires an amendment to the lease (next row).',
        ],
        [
          'Tenants cleaned until now, a company takes over',
          'New service charges are a unilateral amendment to the lease. They apply from the next possible termination date and must be notified with reasons on the form approved by the canton, at least ten days before the notice period begins (Art. 269d paras. 1 and 3 CO).',
          'Plan the start of the company and the date of the new service charges together. Until then, the owners bear the costs.',
        ],
        [
          'Condominium ownership',
          'Condominium owners bear the costs of regular maintenance of the communal parts in proportion to the value of their shares (Art. 712h paras. 1 and 2 CC). Where parts are of little or no benefit to certain units, the allocation must take this into account (Art. 712h para. 3 CC).',
          'The owners’ meeting approves the budget, accounts and division of costs every year (Art. 712m para. 1 no. 4 CC). Costs per area show whether, for example, the lift should be allocated differently for the shop on the ground floor.',
        ],
      ],
      note: 'The overview simplifies the provisions and is not legal advice. Check individual cases against the lease and the condominium regulations, with a specialist if needed.',
      sources: [
        { label: 'Swiss Code of Obligations (CO), Art. 257a, 257b and 269d, English translation', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/en#art_257_a' },
        { label: 'Ordinance on the Lease of Residential and Commercial Premises (VMWG), Art. 4, in German', href: 'https://www.fedlex.admin.ch/eli/cc/1990/835_835_835/de#art_4' },
        { label: 'Swiss Civil Code (CC), Art. 712h and 712m, English translation', href: 'https://www.fedlex.admin.ch/eli/cc/24/233_245_233/en#art_712_h' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'rundgang',
      title: 'Walk-round checklist to print',
      intro:
        'With this checklist you can see in a few minutes whether the cleaning delivers what was agreed. Walk through the building on the cleaning day or the day after. Any later and you are judging use rather than cleaning, in wet weather within a few hours.',
      groups: [
        {
          title: 'Entrance and stairwell',
          items: [
            'Doormat vacuumed, no sand in the porch',
            'Glass door free of streaks and fingerprints on both sides',
            'Stair edges, corners and areas behind doors free of dust',
            'Handrails and light switches clean, not just the floors',
          ],
        },
        {
          title: 'Lift and ancillary rooms',
          items: [
            'Lift car: floor, mirror and control panel clean',
            'Laundry room: floor dry, sink free of residue',
            'Cellar and attic corridors free of cobwebs',
            'Letterboxes free of dust and fingerprints',
          ],
        },
        {
          title: 'Toilets and supplies',
          items: [
            'Toilet and washbasin clean, the room smells fresh',
            'Soap, paper and bin bags restocked',
            'Bins emptied',
          ],
        },
        {
          title: 'Documents',
          items: [
            'Current cleaning specification to hand',
            'Cleaning days posted in the stairwell',
            'Date, time and floor of anything noticed recorded',
          ],
        },
      ],
      note: 'If you notice anything, send us the checklist with the date and floor. A photo shows the point more precisely than any description.',
      printable: true,
      updated: '2026-09-28',
    },
  ],
  scope: {
    title: 'Scope of maintenance cleaning',
    intro: 'The core is stairwell cleaning. Depending on the building, ancillary rooms and the common areas of a commercial floor are added:',
    items: [
      'Stairwell cleaning: stairs, landings, banisters and handrails',
      'Entrances with porch, doormat and glass door',
      'Lift cars with floor, walls, mirror and control panel',
      'Flat doors and frames, light switches, letterboxes',
      'Laundry rooms, drying rooms and cellar and attic corridors',
      'Reception, corridors, toilets and kitchens in business premises',
      'Floors in all agreed rooms',
      'Emptying bins, restocking soap and paper',
    ],
    notIncluded: [
      'Cleaning inside the flats. Villas, residences and other private households are covered by our [premium services](/premium).',
      'Offices and practices with workstations: see [office and practice cleaning](/leistungen/bueroreinigung).',
      'Joints and stone floors that need a one-off deep clean: [deep and special cleaning](/leistungen/sonderreinigungen). Final cleaning before a flat handover: [end-of-tenancy cleaning](/leistungen/umzugsreinigung).',
      'Exterior windows and facades: [window and facade cleaning](/leistungen/fenster-und-fassadenreinigung).',
      'Inspection rounds, building services and minor repairs: [caretaking](/leistungen/hauswartung).',
    ],
  },
  steps: [
    {
      title: 'Preparing the start',
      text: 'Key or badge, a place for equipment and products, and a notice with the cleaning days: these three points are settled before the first visit.',
    },
    {
      title: 'Cleaning and restocking',
      text: 'We clean on the agreed days according to the cleaning specification and restock soap, paper and bin bags as we go.',
    },
    {
      title: 'Adjusting to new use',
      text: 'If a shop moves in or a floor stands empty, we agree a new scope and frequency with you, in writing as at the start.',
    },
  ],
  faq: [
    {
      question: 'How often does a stairwell need cleaning?',
      answer:
        'That depends on how many households use the stairwell and how much dirt comes in from outside. Our maintenance cleaning is intended for buildings that are cleaned several times a week. The entrance and lift usually need more attention than cellar and attic corridors. The sample cleaning specification on this page shows one possible split.',
    },
    {
      question: 'How much does maintenance cleaning cost?',
      answer:
        'The effort depends mainly on the number of floors and flights of stairs, whether there is a lift, the ancillary rooms, the frequency and how the building is used. An entrance with a shop on the ground floor takes more time than one used only by tenants. It also matters whether we supply the consumables or you do. We state the price after the site visit in the written quote. Cost factors and comparing quotes are explained in our [guide to cleaning costs](/blog/reinigungskosten-schweiz).',
    },
    {
      question: 'Can we pass the cleaning on through the service charges?',
      answer:
        'The Code of Obligations provides that tenants only pay service charges if they have been specifically agreed (Art. 257a para. 2 CO). If the cleaning is in the lease, the actual costs are charged. If it is to be added, the same applies as for a rent increase: using the form approved by the canton and from the next possible termination date (Art. 269d CO). Check your individual case against your lease.',
    },
    {
      question: 'Does the building need a cleaning room?',
      answer:
        'It makes the work easier. In a lockable cleaning room or cellar compartment, equipment and cleaning products can stay in the building between visits. A water supply with a sink nearby also saves time.',
    },
    {
      question: 'Do the tenants have to prepare anything?',
      answer:
        'No. It helps if stairs and corridors are clear of shoes, bicycles and other items on cleaning days. A notice in the stairwell with the cleaning days is usually enough.',
    },
    {
      question: 'Is maintenance cleaning enough, or do we also need a deep clean?',
      answer:
        'Maintenance cleaning removes the dirt that builds up between two visits. Over the years, however, residue settles in joints and on stone floors, and protective coatings wear off. That is when a one-off [deep clean](/leistungen/sonderreinigungen) helps, ideally before a new maintenance cleaning contract starts.',
    },
    {
      question: 'We are changing cleaning company. What should we watch out for?',
      answer:
        'Plan the start so that there is no gap between the last visit of the previous company and the first visit of the new one. The notice period is in the existing contract. Give all providers the same cleaning specification, otherwise you are comparing different services. Have the previous company return keys and badges against a receipt.',
    },
  ],
  related: [
    { path: '/leistungen/hauswartung', text: 'If inspection rounds, building services and flat handovers are to be looked after as well as the stairwell.' },
    { path: '/leistungen/sonderreinigungen', text: 'If old dirt has settled in joints and on stone floors, ideally before maintenance cleaning starts.' },
    { path: '/leistungen/bueroreinigung', text: 'If the business premises consist mainly of offices or a practice with workstations.' },
  ],
  cta: {
    title: 'A quote for your stairwell and common areas',
    text: 'For the quote we need the address, the number of floors and flats, whether there is a lift or businesses in the building, and the frequency you have in mind. If you already have a cleaning specification, please send it along. We visit the building and then send you the written quote, both free of charge and without obligation.',
  },
}

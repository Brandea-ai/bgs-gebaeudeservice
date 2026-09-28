import type { ServicePageContent } from '../../types'

// Same keys as content/de/leistungen/hauswartung.ts (E85). Legal terms follow the English fedlex
// translation of the Code of Obligations (CO) and the Civil Code (CC), read on 28.09.2026
// (CO Art. 58, 256, 257a, 257b, 259; CC Art. 647a, 647b, 712g, 712h, 712m, 712s).
// German-only sources are marked as such in the label.
export const hauswartung: ServicePageContent = {
  path: '/leistungen/hauswartung',
  area: 'leistungen',
  eyebrow: 'Property care',
  h1: 'Caretaking services for residential and commercial buildings',
  lead: [
    'We take on caretaking based on a written specification: which tasks, how often, up to what amount without prior approval and who receives our reports.',
    'That way property management, owners and tenants know what to expect, and nobody has to guess who deals with the damp patch in the cellar. The specification and the inspection round checklist are below, ready to print. The specification also lets you compare several quotes line by line.',
  ],
  facts: [
    { label: 'Properties', value: 'Apartment buildings, condominiums, residential and commercial buildings' },
    { label: 'Basis', value: 'Specification with tasks, frequency and reporting lines' },
    { label: 'Minor repairs', value: 'Up to the cost limit you set in the specification' },
    { label: 'Not included', value: 'Winter maintenance, on-call service, servicing of installations' },
  ],
  scope: {
    title: 'What caretaking covers',
    intro: 'The specification for your property is drawn up from these tasks. You choose what to hand over, individually if you wish.',
    items: [
      'Inspection rounds at the agreed frequency: checking on things and reporting defects',
      'Cleaning the stairwell and entrance and keeping them in order',
      'Keeping the laundry room and drying rooms clean',
      'Minor repairs, such as replacing light bulbs',
      'Keeping an eye on building services and reporting faults',
      'Assisting with flat handovers',
      'Organising the disposal of waste and recyclables',
      'Grounds maintenance, see [grounds and green space maintenance](/leistungen/aussen-und-gruenflaechenpflege)',
    ],
    notIncluded: [
      'Winter maintenance and snow clearing.',
      'Round-the-clock on-call and emergency service.',
      'Major repairs and work by tradespeople: the property management commissions a specialist firm.',
      'Servicing of heating, ventilation, lifts and fire protection systems, which requires specialist firms.',
    ],
  },
  sections: [
    {
      title: 'When to contract out caretaking',
      paragraphs: [
        'There is often a specific trigger. The long-standing caretaker (Hauswart) retires, a property management firm takes over a building without caretaking, or nobody in the community of condominium owners wants to keep an eye on the waste area and the laundry room any more.',
        'You can hand over tasks, not decisions. Repair orders, the choice of specialist firms and the acceptance of flats stay with the property management or the owners. Caretaking provides the basis for those decisions: it notices what is wrong in the building and reports it to the right place.',
      ],
    },
    {
      title: 'What happens on an inspection round',
      paragraphs: [
        'On an inspection round the caretaker walks through the common areas, from the entrance via the cellar and laundry room to the waste area. Small things such as a failed light bulb are fixed on the spot. Everything else goes to the contact named in the specification.',
        'Regular inspection rounds help to spot a loose stair nosing or a dark cellar staircase before someone falls. The checklist further down shows what to check and why, for owners, this is also a question of liability.',
      ],
    },
    {
      title: 'Building services: watching, not servicing',
      paragraphs: [
        'On every inspection round the caretaker looks at heating, ventilation, lifts and fire protection and reports what stands out: a fault message on the heating display, a dripping tap in the laundry room, a lift that does not stop level with the floor. The property management can then call in the specialist while the fault is still small.',
      ],
    },
    {
      title: 'Flat handovers',
      paragraphs: [
        'When tenants change, the caretaker can open the flat, hand over keys and note meter readings. The acceptance inspection and the report stay with the property management. Record these visits separately from cleaning; the table on minor maintenance and service charges above explains why.',
        'If the flat needs a final clean before the handover, our [end-of-tenancy cleaning with a handover guarantee](/leistungen/umzugsreinigung) takes care of it.',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'pflichtenheft',
      title: 'Caretaking specification template',
      intro:
        'Enter for each area how often and who is responsible. A verbal arrangement then becomes an assignment that everyone involved reads the same way.',
      columns: ['Area', 'Tasks', 'How often', 'Responsible or report to'],
      rows: [
        ['Property', 'Address, flats, stairwells: ____________________', 'Start date __________', 'Contact person ______________'],
        ['Inspection round', 'Check lighting, doors, letterboxes, laundry room, cellar, boiler room and waste area for visible defects, record findings', '__________', '______________'],
        ['Stairwell, entrance and laundry room', 'Clean floors, banisters and handrails, keep the laundry and drying rooms clean; report items left in the escape route and faults on machines', '__________', '______________'],
        ['Minor repairs', 'For example replace light bulbs, oil locks; without prior approval up to CHF ______ per case', 'as needed', '______________'],
        ['Building services', 'Look at heating, ventilation, lifts and fire protection equipment for faults; servicing is done by the specialist firm', 'on every round', '______________'],
        ['Waste disposal', 'Organise waste and recyclables, keep the collection point clean', '__________', '______________'],
        ['Grounds', 'Lawns, hedges, flower beds, paths and forecourts', 'as per care plan', '______________'],
        ['Flat handovers', 'Open the flat, hand over keys, note meter readings; the property management does the acceptance and the report', 'as needed', 'Property management'],
        ['Keys and materials', 'Which keys, badges and codes, where they are kept, who signs for the handover; who provides materials and equipment and where they are stored', 'set once', '______________'],
        ['Specialist firms', 'Heating, lifts, fire protection and major repairs: who commissions them, who pays', 'set once', 'Property management'],
        ['Tenants', 'Whom tenants contact and how they find out, for example from a notice at the entrance', 'set once', '______________'],
        ['Expressly not included', '____________________', 'not applicable', 'not applicable'],
      ],
      note:
        'With us, this list becomes the specification for your property after the walk-through. In a condominium, the assembly of owners approves the budget, the accounts and the division of costs every year (Art. 712m CC). A specification shows them what they are paying for.',
      sources: [
        { label: 'Art. 712g CC, authority to take administrative action in a condominium', href: 'https://www.fedlex.admin.ch/eli/cc/24/233_245_233/en#art_712_g' },
        { label: 'Art. 712m CC, rights of the assembly of condominium owners', href: 'https://www.fedlex.admin.ch/eli/cc/24/233_245_233/en#art_712_m' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'kontrollgang',
      title: 'Checklist for the inspection round',
      intro:
        'The owner of a building is liable for any damage caused by inadequate maintenance (Art. 58 CO). The Swiss Council for Accident Prevention (BFU) therefore advises owners to inspect regularly, document the inspections and carry out the necessary repairs.',
      groups: [
        {
          title: 'Entrance and stairwell',
          items: [
            'Lights in the entrance, stairwell and corridors work, timers and motion sensors respond',
            'Steps, stair nosings and floor coverings free of trip hazards, handrails secure',
            'Escape route clear: no bicycles, furniture or combustible items in the stairwell (VKF 16-15, section 2.2)',
            'Front door closes and opens in the direction of escape without a key (VKF 16-15, section 2.5.5)',
            'Letterboxes and bell panel intact',
          ],
        },
        {
          title: 'Cellar, laundry room and building services',
          items: [
            'Washing machines and tumble dryers without error messages, drains clear',
            'No water stains, damp or dripping taps',
            'Heating without fault messages, boiler room tidy and locked',
            'Lift stops level, where present',
            'Fire extinguishers in place and sealed, where present',
          ],
        },
        {
          title: 'Grounds and waste area',
          items: [
            'Outdoor lighting works, paths and steps free of trip hazards',
            'Railings, gates and fences secure',
            'Waste area clean, containers complete and closed',
            'Play equipment without visible damage, where present',
          ],
        },
        {
          title: 'Log',
          items: [
            'Date and name: ____________________',
            'Finding and location: ____________________',
            'Reported to, on: ____________________',
            'Date completed, by whom: ____________________',
          ],
        },
      ],
      note:
        'This list is not legal advice. Which inspections and what frequency your property needs should be clarified case by case, for example with your insurer.',
      sources: [
        { label: 'Art. 58 CO, liability of owners of buildings', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/en#art_58' },
        { label: 'BFU: What does owner’s liability mean? (in German)', href: 'https://www.bfu.ch/de/services/rechtsfragen/was-bedeutet-werkeigentuemerhaftung' },
        { label: 'VKF fire protection directive 16-15, escape and rescue routes (PDF, in German)', href: 'https://services.vkg.ch/rest/public/georg/bs/publikation/documents/BSPUB-1394520214-85.pdf/content' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'wer-bezahlt',
      title: 'Minor maintenance and service charges: who does it, who pays',
      intro:
        'Two questions matter for every task: who does it, and whether the cost may go through the service charges. Tenants owe service charges (accessory charges in the Code of Obligations) only if the lease specifically provides for them (Art. 257a CO), and only for services connected with the use of the property (Art. 257b CO).',
      columns: ['Task', 'Who does it', 'Who pays'],
      rows: [
        ['Replace a light bulb in one’s own flat, unblock the sink trap', 'Tenant', 'Tenant, as minor maintenance according to local custom (Art. 259 CO)'],
        ['Clean the stairwell, laundry room and grounds', 'Caretaker', 'Through the service charges if the lease names caretaking as an item, otherwise covered by the rent'],
        ['Replace light bulbs in the stairwell and cellar, oil locks', 'Caretaker', 'As for cleaning, as long as no specialist knowledge is needed'],
        ['Inspection round for defects, reporting faults to the property management', 'Caretaker', 'Owner: the Swiss Tenants’ Association does not count inspection rounds for repairs or reports to the property management as service charges'],
        ['Open a flat for a handover or viewing', 'Caretaker, on behalf of the property management', 'Owner: the Swiss Tenants’ Association does not count this work as service charges'],
        ['Repair that needs a specialist, such as unblocking the main drain', 'Specialist firm, commissioned by the property management', 'Owner, who must keep the rented property in a condition fit for use (Art. 256 CO)'],
      ],
      note:
        'The law does not say where minor maintenance ends. As a common cost limit, HEV Schweiz names CHF 150 to 250 per case, the Swiss Tenants’ Association CHF 150 for materials. According to the Tenants’ Association, courts increasingly ask whether the work requires specialist knowledge. It also advises tenants to ask for details of the caretaker’s activities and the hours spent. A specification that separates operation from repairs makes your statement verifiable. This note is not legal advice.',
      sources: [
        { label: 'Art. 256, 257a, 257b and 259 CO', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/en#art_256' },
        { label: 'Swiss Tenants’ Association: minor maintenance (in German)', href: 'https://www.mieterverband.ch/mietrecht/waehrend-der-miete/kleiner-unterhalt/' },
        { label: 'Swiss Tenants’ Association: leaflet on inadmissible service charges, 2026 (PDF, in German)', href: 'https://www.mieterverband.ch/upd_fm_media/ratgeber-mietrecht/topthemen/heiz-und-nebenkosten/2026_merkblatt_unzulaessige_nebenkosten.pdf/' },
        { label: 'HEV Schweiz: minor maintenance (in German)', href: 'https://www.hev-schweiz.ch/vermieten/mietrecht/mietvertrag/kleiner-unterhalt' },
        { label: 'HEV Schweiz: service charge statements (in German)', href: 'https://www.hev-schweiz.ch/vermieten/nebenkostenabrechnungen' },
      ],
      updated: '2026-09-28',
    },
  ],
  steps: [
    {
      title: 'Finalising the specification',
      text: 'The basis is the written list drawn up after the walk-through. You delete or add tasks, set the cost limit for minor repairs and name the contact who receives reports.',
      figure: 'offerte',
    },
    {
      title: 'Starting in the building',
      text: 'On the start date the caretaker receives the keys and access listed in the specification. Let tenants know whom to contact from now on, for example with a notice at the entrance.',
      figure: 'start',
    },
    {
      title: 'Inspection rounds at a set frequency',
      text: 'The caretaker walks through the building at the frequency in the specification, from the entrance to the boiler room, and fixes small things straight away.',
      figure: 'besichtigung',
    },
    {
      title: 'Reporting and updating',
      text: 'Anything that needs a specialist firm goes to the agreed contact. If the property later needs more or less, the specification is adjusted.',
      figure: 'anfrage',
    },
  ],
  faq: [
    {
      question: 'What does caretaking include?',
      answer:
        'At its core, three things: keeping the common areas clean, checking regularly and fixing small things, and reporting faults to the right place. Depending on the property, waste disposal, grounds and flat handovers are added. Which of these you hand over is set out in the specification.',
    },
    {
      question: 'What determines the cost of caretaking?',
      answer:
        'Mainly the number of flats and stairwells, how often inspection rounds and cleaning take place, the size of the grounds, the number of tenant changes per year and who provides the materials. We calculate the amount once we have seen the property. For the service charge statement, it is best to show cleaning and minor upkeep separately from inspection rounds, flat handovers and repairs. The table above explains why.',
    },
    {
      question: 'Isn’t maintenance cleaning enough for the stairwell?',
      answer:
        'If the stairwell only needs cleaning, yes: [maintenance cleaning](/leistungen/unterhaltsreinigung) covers that. You need a caretaking firm as soon as someone should also spot defects, fix small things and pass on faults.',
    },
    {
      question: 'How often should the caretaker come by?',
      answer:
        'Art. 58 CO sets no frequency. It depends on size, age and use: a building with a lift, a shared laundry room and many tenant changes needs more presence than a small condominium. The frequency is set in the specification and can be adjusted.',
    },
    {
      question: 'What must tenants fix themselves?',
      answer:
        'Defects in their own flat that can be remedied without a specialist by minor cleaning or repairs, according to local custom (Art. 259 CO). HEV Schweiz and the Swiss Tenants’ Association also include replacing small parts such as baking trays or shower hoses, even if their service life has expired. This must be done by the time the flat is handed back at the latest. The table above shows where caretaking fits in.',
    },
    {
      question: 'How should inspection rounds be documented?',
      answer:
        'In a way that shows later what was checked, reported and completed, and when. The checklist above has fields to fill in for this. A photo of the finding shows later what it looked like before, and the repair invoice shows that the defect was remedied.',
    },
    {
      question: 'Who decides on caretaking in a condominium?',
      answer:
        'The assembly of owners decides on all administrative matters outside the administrator’s remit (Art. 712m CC); the administrator carries out its resolutions (Art. 712s CC). For authority and the majorities required, Art. 712g CC refers to the rules on co-ownership (Art. 647a and 647b CC). Different rules apply only if they are set out in the deed of constitution or adopted unanimously. Check in each case what applies to your community. The owners bear the costs in principle in proportion to the value of their shares (Art. 712h CC).',
    },
  ],
  related: [
    { path: '/leistungen/aussen-und-gruenflaechenpflege', text: 'When lawns, hedges and flower beds need a care plan of their own.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'When the building only needs cleaning, without inspection rounds or minor repairs.' },
    { path: '/leistungen/facility-services', text: 'When you would rather not contract out cleaning, caretaking and grounds separately.' },
  ],
  cta: {
    title: 'Specification and quote for your property',
    text: 'For the quote we need the address, the number of flats and stairwells, and the tasks you would like to hand over. If you already have a specification, mention it in your message. The walk-through and the quote are free of charge and non-binding.',
  },
}

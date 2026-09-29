import type { ServicePageContent } from '../../types'

// Same structure and sources as content/de/leistungen/facility-services.ts (E85).
// Legal texts read on fedlex.admin.ch on 28.09.2026 (CO Art. 58, 257a, 257b, 335c, 336c;
// CC Art. 712h, 712m, 712s). The Accident Prevention Ordinance has no English version on
// fedlex, so the German text is linked. Reviewer findings FS-R1 to FS-08 applied on 28.09.2026.
const or = 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/en'
const zgb = 'https://www.fedlex.admin.ch/eli/cc/24/233_245_233/en'
const vuv = 'https://www.fedlex.admin.ch/eli/cc/1983/1968_1968_1968/de'

export const facilityServices: ServicePageContent = {
  path: '/leistungen/facility-services',
  area: 'leistungen',
  eyebrow: 'Property care',
  h1: 'Facility services: cleaning, caretaking and grounds from a single provider',
  lead: [
    'If you award cleaning, caretaking and grounds maintenance to three companies, you manage three contracts, each with its own notice period. Then come the questions in between: who sweeps the leaves out of the entrance, who replaces the light bulb in the bike room, who refills the soap in the toilets?',
    'With facility services, we provide these services ourselves, under one contract. Your specialist firms continue to service heating, lifts and fire protection. We report any faults we notice there.',
  ],
  facts: [
    { label: 'Scope', value: 'Cleaning, caretaking, grounds and glass, only what we provide ourselves' },
    { label: 'Not included', value: 'Servicing of heating, ventilation and lifts, major repairs' },
    { label: 'Contract', value: 'One contract and one contact person for all services' },
    { label: 'Getting started', value: 'Begin with one service and add others as old contracts expire' },
  ],
  scope: {
    title: 'What can be combined in one contract',
    intro: 'We put together facility services from our own services, tailored to each property and site:',
    items: [
      '[Maintenance cleaning](/leistungen/unterhaltsreinigung) of stairwells, common areas and business premises, with restocking service',
      '[Office and practice cleaning](/leistungen/bueroreinigung) at times that suit your opening hours',
      '[Caretaking](/leistungen/hauswartung) with inspection rounds, minor repairs and waste disposal',
      '[Grounds and green space maintenance](/leistungen/aussen-und-gruenflaechenpflege) for lawns, hedges, beds, paths and forecourts',
      '[Window and facade cleaning](/leistungen/fenster-und-fassadenreinigung) at the agreed frequency',
      '[Deep and special cleaning](/leistungen/sonderreinigungen) when floors or rooms need more than routine cleaning',
      '[End-of-tenancy cleaning with a handover guarantee](/leistungen/umzugsreinigung) when tenants change',
      '[Industrial and warehouse cleaning](/leistungen/industrie-und-hallenreinigung) for halls, storage and production areas',
    ],
    notIncluded: [
      'Technical facility management: servicing and testing of heating, ventilation, lifts and fire protection systems.',
      'Commercial facility management such as tenancy management, accounting or service charge statements.',
      'Major repairs and trade work, including referrals to tradespeople.',
      'Round-the-clock emergency and on-call service, for example for a water leak at night.',
      'Winter maintenance, even as part of a combined contract.',
    ],
  },
  sections: [
    {
      title: 'When one contract for everything makes sense',
      paragraphs: [
        'A property management firm looks after several buildings and does not want to coordinate three companies per building. A business has offices, a warehouse and a car park and wants one point of contact for all of it. A condominium owners’ association loses its caretaker and wants to sort out cleaning and grounds at the same time.',
        'If you only need a single service, its own page is the better place to start, for example [maintenance cleaning](/leistungen/unterhaltsreinigung). A combined contract makes sense as soon as two or more services come together at the same property.',
      ],
    },
    {
      title: 'Three contracts meet at the front door',
      paragraphs: [
        'There are leaves on the forecourt, fingerprints on the glass door and a flickering light above the entrance. With separate contracts, each of these belongs to a different company. Every boundary then has to be written into a contract, otherwise something is left undone or done twice.',
        'With a combined contract, every visit comes from the same company. Whoever looks after the forecourt also notices the flickering light, and the bulb is replaced as part of caretaking under the same contract.',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'schnittstellen',
      title: 'Interfaces a contract should cover',
      intro:
        'At these points, cleaning, caretaking and grounds maintenance overlap. Whether you hire one company or several, settle the points under «Set out in the contract» before the first visit, ideally in the job specification.',
      columns: ['Location', 'What comes together there', 'Set out in the contract'],
      rows: [
        ['Entrance and forecourt', 'Leaves and dirt from outside, doormats, glass of the entrance door, letterboxes', 'Who sweeps the forecourt, who cleans mats and glass, and how often'],
        ['Stairwell and lift', 'Floors, handrails, windows, lift car', 'Whether the lift car, including mirror and door tracks, is part of stairwell cleaning, and who cleans the stairwell windows inside and out'],
        ['Laundry room and drying room', 'Cleaning of the room, shared appliances, house rules', 'What the cleaning covers and what stays with tenants under the house rules, such as the lint filter'],
        ['Underground car park and bike room', 'Floor, lighting, doors and gates', 'How often it is swept, whether wet cleaning is included, whether doors and lighting are part of the inspection rounds'],
        ['After work by tradespeople', 'Dust and dirt in the stairwell and lift', 'Who cleans up afterwards and which budget it is charged to'],
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'zustaendigkeiten',
      title: 'Who does what under a combined contract',
      intro:
        'One contract for everything does not mean that everything lies with us.',
      columns: ['Task', 'Us', 'Property manager or owners'],
      rows: [
        ['Interior cleaning and glass', 'clean at the agreed frequency', 'set the scope and access to flats or offices'],
        ['Inspection rounds', 'check common areas and grounds, report defects', 'receive reports, decide, place orders'],
        ['Minor repairs, such as light bulbs', 'handle them up to the agreed limit', 'set the limit, award major repairs'],
        ['Heating, ventilation, lifts, fire protection', 'report faults we notice', 'have specialist firms service and repair them'],
        ['Grounds maintenance', 'follow the care plan', 'approve the care plan'],
        ['Consumables', 'refill them where agreed', 'decide who supplies them'],
        ['Waste disposal', 'organise it, keep the bin area clean', 'decide where the bins go and how many'],
      ],
      note:
        'The Code of Obligations provides that the owner of a building is liable for damage caused by inadequate maintenance, with a right of recourse against persons liable to them in this regard (Art. 58 CO). That is why the contract should state who takes on which task, to whom defects are reported and who decides.',
      sources: [{ label: 'Swiss Code of Obligations, Art. 58 (liability of owners of buildings)', href: `${or}#art_58` }],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'wechsel',
      title: 'Checklist: from several companies to one contract',
      intro:
        'The switch works best step by step, following the notice periods of the existing contracts. The points to tick off:',
      groups: [
        {
          title: 'Existing contracts',
          items: [
            'Gather all contracts for cleaning, caretaking, grounds and glass',
            'For each contract, note the notice period, the next possible end date and whether it renews automatically',
            'Employed caretaker: after the probationary period, notice is one month in the first year of service, two months in the second to ninth, three months thereafter, each to the end of a month. Other periods apply only under a written agreement or a standard or collective employment contract (Art. 335c CO). Protected periods, for example during illness or accident, can extend the notice period (Art. 336c CO)',
          ],
        },
        {
          title: 'Allocating costs correctly',
          items: [
            'Ask every provider for costs per property and per service, so they can be allocated correctly later',
            'Let properties: tenants pay service charges only where the lease specifically provides for them, and only in the amount of the actual outlays (Art. 257a and 257b CO)',
            'Condominiums: have costs for parts that are of little or no benefit to certain units, such as an underground car park, shown separately. Under the Civil Code, this must be taken into account when costs are allocated (Art. 712h para. 3 CC)',
          ],
        },
        {
          title: 'Before the start',
          items: [
            'Condominiums: check whether the administrator may sign the contract. The administrator acts in accordance with the law, the rules and the resolutions of the assembly, which decides all other administrative matters (Art. 712s para. 1 and 712m para. 1 no. 1 CC). Check the administration agreement as well',
            'Collect and list keys, badges and codes from the previous companies',
            'Confirm the last visit and the return of items to the previous companies',
          ],
        },
        {
          title: 'Reporting and information',
          items: [
            'Agree the reporting route: who receives reports and up to what amount repairs may be done without asking',
            'Tell tenants or staff who is responsible from which date',
            'Update the notice in the entrance and the contact details for reports',
            'Businesses: before the first visit, go through the hazards on site and the safety measures with the new provider (Art. 6 and 9 OPA)',
          ],
        },
      ],
      note: 'These notes are not legal advice. Check notice periods and responsibilities in each case against your contracts and the condominium rules.',
      sources: [
        { label: 'Swiss Code of Obligations, Art. 335c (notice periods in employment)', href: `${or}#art_335_c` },
        { label: 'Swiss Code of Obligations, Art. 336c (protected periods for notice by the employer)', href: `${or}#art_336_c` },
        { label: 'Swiss Code of Obligations, Art. 257a and 257b (service charges)', href: `${or}#art_257_a` },
        { label: 'Swiss Civil Code, Art. 712h (costs in condominium ownership)', href: `${zgb}#art_712_h` },
        { label: 'Swiss Civil Code, Art. 712m (powers of the assembly)', href: `${zgb}#art_712_m` },
        { label: 'Swiss Civil Code, Art. 712s (duties of the administrator)', href: `${zgb}#art_712_s` },
        { label: 'Accident Prevention Ordinance (OPA), Art. 6 (informing employees), German text', href: `${vuv}#art_6` },
        { label: 'Accident Prevention Ordinance (OPA), Art. 9 (cooperation of several companies), German text', href: `${vuv}#art_9` },
      ],
      printable: true,
      updated: '2026-09-29',
    },
  ],
  steps: [
    {
      title: 'One contract for all services',
      text: 'The contract sets out each service with its scope, frequency and working hours.',
    },
    {
      title: 'Handover at the start',
      text: 'At the start, you hand over keys, badges and codes and show us the storeroom, the bin area and the plant rooms. If an existing contract runs longer, that service stays with the previous company until it ends.',
    },
    {
      title: 'Changes in one place',
      text: 'If a property is added, a frequency changes or a service is dropped, let your contact person at our company know. Only that one contract needs amending.',
    },
  ],
  faq: [
    {
      question: 'How do facility services differ from facility management?',
      answer:
        'Facility management is often understood to include running the building services and commercial administration. Our facility services cover the services we provide ourselves: cleaning, caretaking, grounds maintenance and glass. Your specialist firms service the technical systems, and administration stays with you.',
    },
    {
      question: 'How do we switch from several companies to one?',
      answer:
        'Award the new contract first, then give notice. If you terminate the existing contracts beforehand, you risk a gap should the new contract be delayed. The checklist above covers notice periods, costs and handover point by point.',
    },
    {
      question: 'What does the cost of facility services depend on?',
      answer:
        'The price is made up of the individual services. It depends on the number and size of the properties or sites, the areas per service, how often cleaning and inspection rounds take place, the extent of the grounds, the working hours, who supplies consumables and the distances between properties. There is therefore no off-the-shelf price. You receive the price for your properties in writing after the walk-through.',
    },
    {
      question: 'Would caretaking alone not be enough?',
      answer:
        '[Caretaking](/leistungen/hauswartung) covers inspection rounds, the stairwell, the laundry room, minor repairs and waste disposal. If office cleaning, window cleaning or the care of larger green spaces are added, a combined contract is the better fit.',
    },
    {
      question: 'Can several properties or sites be covered by one contract?',
      answer:
        'Yes. Services, frequency and working hours can be set for each property or site. A residential building needs something different from an office building or a warehouse, for example stairwell cleaning in the morning and office cleaning in the evening after working hours.',
    },
    {
      question: 'What do we need to arrange on workplace safety as a business?',
      answer:
        'The Accident Prevention Ordinance provides that you also inform and instruct staff from another company who work on your premises about the hazards and the safety measures (Art. 6 OPA). Where staff from several companies work at the same workplace, their employers make the necessary arrangements (Art. 9 OPA). With one provider for cleaning, caretaking and grounds, you coordinate once instead of three times.',
    },
  ],
  related: [
    { path: '/leistungen/hauswartung', text: 'When inspection rounds, stairwell, laundry room and waste disposal are the main need and cleaning is already awarded.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'When you first want to re-award only the regular cleaning of stairwells and common areas.' },
    { path: '/leistungen/aussen-und-gruenflaechenpflege', text: 'When only the grounds are being re-awarded, for example because the previous gardener is stopping.' },
  ],
  cta: {
    title: 'A quote for facility services',
    text: 'For the quote, we need the addresses of the properties or sites, the services you would like to hand over and the end dates of your current contracts. We then visit the properties with you, free of charge and without obligation.',
  },
}

import type { ServicePageContent } from '../../types'

// Same structure and sources as content/de/leistungen/facility-services.ts (E85).
// Legal texts read on fedlex.admin.ch on 28.09.2026. The Accident Prevention
// Ordinance has no English version on fedlex, so the German text is linked.
const or = 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/en'
const zgb = 'https://www.fedlex.admin.ch/eli/cc/24/233_245_233/en'
const vuv = 'https://www.fedlex.admin.ch/eli/cc/1983/1968_1968_1968/de'

export const facilityServices: ServicePageContent = {
  path: '/leistungen/facility-services',
  area: 'leistungen',
  eyebrow: 'Property care',
  h1: 'Facility services: cleaning, caretaking and grounds from a single provider',
  lead: [
    'If you award cleaning, caretaking and grounds maintenance to three companies, you manage three contracts, each with its own notice period. Then come the questions in between: who sweeps the leaves out of the entrance, who replaces the light in the bike room, who refills the soap in the toilets?',
    'With facility services, we provide these services ourselves, under one contract. Heating, lifts and fire protection continue to be serviced by your specialist firms. Any faults we notice there, we report to you.',
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
      'Winter maintenance, not even as part of a combined contract.',
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
        'A combined contract sets out each service with its scope and frequency, and every visit comes from the same company. Whoever looks after the forecourt also sees the light and passes it on.',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'schnittstellen',
      title: 'Interfaces a contract should cover',
      intro:
        'At these points, cleaning, caretaking and grounds maintenance overlap. Whether you hire one company or several, the right-hand column belongs in the contract or the job specification.',
      columns: ['Location', 'What comes together there', 'Set out in the contract'],
      rows: [
        ['Entrance and forecourt', 'Leaves and dirt from outside, doormats, glass of the entrance door, letterboxes', 'Who sweeps the forecourt, who cleans mats and glass, and how often'],
        ['Stairwell and lift', 'Floors, handrails, lift car, lighting', 'Whether the lift car is cleaned with the stairwell, and where lift faults are reported'],
        ['Cellar, laundry room, drying room', 'Cleaning, tidiness, appliances used by tenants', 'Who reports a broken washing machine, and to whom'],
        ['Waste room and bin area', 'Cleaning, bins on collection day, recyclables', 'Who puts the bins out and brings them back, who cleans the area'],
        ['Underground car park and bike room', 'Sweeping, lighting, doors and gates', 'How often it is cleaned, who reports a gate that no longer closes'],
        ['Toilets and kitchenettes at work', 'Cleaning and consumables', 'Who supplies soap, paper and bin bags, and who refills them'],
        ['After work by tradespeople', 'Dust and dirt in the stairwell and lift', 'Who cleans up afterwards, and which budget it is charged to'],
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'zustaendigkeiten',
      title: 'Who does what under a combined contract',
      intro:
        'One contract for everything does not mean that everything lies with us. The table shows what we carry out and what stays with the property manager or owners.',
      columns: ['Task', 'Us', 'Property manager or owners'],
      rows: [
        ['Interior cleaning and glass', 'clean as set out in the contract, at the agreed frequency', 'define the scope, give notice of access to flats or offices'],
        ['Inspection rounds', 'check common areas, cellars and grounds, report defects', 'receive reports, decide, place orders'],
        ['Minor repairs, such as light bulbs', 'deal with them ourselves up to the agreed limit', 'set the limit, award major repairs to tradespeople'],
        ['Heating, ventilation, lifts, fire protection', 'report faults we notice', 'hold service contracts with specialist firms and instruct them'],
        ['Grounds and green spaces', 'maintain them according to the care plan', 'approve the care plan'],
        ['Consumables', 'refill them where the restocking service is agreed', 'decide who supplies the materials'],
        ['Waste disposal', 'organise waste and recyclables, keep the bin area clean', 'decide where the bin area is and how many bins are needed'],
      ],
      note:
        'Under Art. 58 CO, the owner of a building is liable for damage caused by inadequate maintenance, even if tasks have been delegated. That is why the contract should state to whom defects are reported and who decides.',
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
          title: 'Existing contracts and decision',
          items: [
            'Gather all contracts for cleaning, caretaking, grounds and glass',
            'For each contract, note the notice period and the next possible end date',
            'If the caretaker is your employee, employment law applies: unless the employment contract or a standard or collective employment contract provides otherwise, one month’s notice in the first year of service, two months in the second to ninth, three months thereafter, each to the end of a month (Art. 335c CO)',
            'Condominiums: check whether the administrator may sign the contract or the owners’ assembly decides. This depends on the rules, the administration agreement and resolutions (Art. 712m and 712s CC)',
          ],
        },
        {
          title: 'Allocating costs correctly',
          items: [
            'Ask every provider for costs per property and per service, so they can be allocated correctly later',
            'Let properties: tenants pay service charges only where the lease specifically provides for them, and only in the amount of the actual outlays (Art. 257a and 257b CO)',
            'Condominiums: have costs for parts that do not serve all units, such as an underground car park, shown separately. The Civil Code requires this to be taken into account when costs are allocated (Art. 712h para. 3 CC)',
          ],
        },
        {
          title: 'Before the start',
          items: [
            'Schedule the start of each service for the end of the respective existing contract',
            'Collect and list keys, badges and codes from the previous companies',
            'Confirm the last visit and the return of items to the previous companies',
            'Businesses: inform the new provider of hazards on site and the protective measures. Where several companies work at the same place, their employers must coordinate (Art. 6 and 9 OPA)',
          ],
        },
        {
          title: 'Reporting and information',
          items: [
            'Agree the reporting route: who receives reports and up to what amount repairs may be done without asking',
            'Tell tenants or staff who is responsible from which date',
            'Update the notice in the entrance and the contact details for reports',
          ],
        },
      ],
      note: 'These notes are not legal advice. Check notice periods and responsibilities in each case against your contracts and the condominium rules.',
      sources: [
        { label: 'Swiss Code of Obligations, Art. 335c (notice periods in employment)', href: `${or}#art_335_c` },
        { label: 'Swiss Code of Obligations, Art. 257a and 257b (service charges)', href: `${or}#art_257_a` },
        { label: 'Swiss Civil Code, Art. 712h (costs in condominium ownership)', href: `${zgb}#art_712_h` },
        { label: 'Swiss Civil Code, Art. 712m and 712s (assembly and administrator)', href: `${zgb}#art_712_m` },
        { label: 'Accident Prevention Ordinance (OPA), Art. 6 and 9, German text', href: `${vuv}#art_9` },
      ],
      printable: true,
      updated: '2026-09-28',
    },
  ],
  steps: [
    {
      title: 'One contract for all services',
      text: 'The contract sets out each service with its scope, frequency and working hours. It also states to whom we report defects and faults.',
      figure: 'offerte',
    },
    {
      title: 'Handover on site',
      text: 'At the start, we receive keys, badges and codes for the agreed rooms. You show us the storeroom, the bin area and the plant rooms for the inspection rounds.',
      figure: 'besichtigung',
    },
    {
      title: 'Start service by service',
      text: 'Each service starts when the previous contract for it ends. If a contract runs longer, that service stays with the previous company until then.',
      figure: 'start',
    },
    {
      title: 'Changes in one place',
      text: 'If a property is added, a frequency changes or a service is dropped, let your contact person at our company know. Only the one contract is amended.',
      figure: 'anfrage',
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
        'Step by step. Each service moves to us when the previous contract for it ends. So you can start with one service and add the others later. Which notice periods apply and what should be done before the start is listed in the checklist on this page.',
    },
    {
      question: 'What do facility services costs depend on?',
      answer:
        'The price is made up of the individual services. It depends on the number and size of the properties or sites, the areas per service, how often cleaning and inspection rounds take place, the extent of the grounds, the working hours, who supplies consumables and the distances between properties. There is therefore no off-the-shelf price. You receive the price for your properties in writing after the walk-through.',
    },
    {
      question: 'What stays with us as property manager or owners?',
      answer:
        'The decisions: which services, which budget, which specialist firm for heating, lifts or repairs. Liability for the upkeep of the building also stays with the owner. Our reports help to spot defects early. What happens next is up to you.',
    },
    {
      question: 'Would caretaking alone not be enough?',
      answer:
        '[Caretaking](/leistungen/hauswartung) covers inspection rounds, the stairwell, the laundry room, minor repairs and waste disposal. If office cleaning, window cleaning or the care of larger green spaces are added, a combined contract is the better fit.',
    },
    {
      question: 'Can several properties or sites be covered by one contract?',
      answer:
        'Yes. It is useful to record for each property which services are included, how often, and who receives reports on site. This way the costs can be allocated to each property, which matters for service charges and condominium ownership.',
    },
    {
      question: 'What do we need to arrange on workplace safety as a business?',
      answer:
        'If staff from another company work on your premises, you must inform them of the hazards and protective measures on site. Where several companies work at the same place, their employers must coordinate. This is required by the Accident Prevention Ordinance (Art. 6 and 9 OPA). With one provider for cleaning, caretaking and grounds, you coordinate once instead of three times.',
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

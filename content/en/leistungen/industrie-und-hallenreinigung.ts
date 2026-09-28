import type { ServicePageContent } from '../../types'

// Same keys as content/de (E85). Legal statements checked on 28.09.2026 against the primary sources:
// VUV SR 832.30 (no official English text, German linked), Waters Protection Act SR 814.20 (English on fedlex), Suva 84040 and 67075 (German).
export const industrieUndHallen: ServicePageContent = {
  path: '/leistungen/industrie-und-hallenreinigung',
  area: 'leistungen',
  eyebrow: 'Production, storage and workshops',
  h1: 'Industrial cleaning and warehouse cleaning for production and storage',
  lead: [
    'Swarf, tyre marks and oil films stay on hall floors, while dust and coolant build up on machinery. A hall can rarely stand still for cleaning.',
    'That is why each zone gets its own rhythm: aisles between shifts, staff rooms outside break times, machinery during planned shutdowns. Cleaning on a machine only starts once it has been switched off and secured against being switched back on.',
  ],
  facts: [
    { label: 'For', value: 'Production, logistics and commercial businesses with halls and workshops' },
    { label: 'Working hours', value: 'Between shifts, during breaks, on shutdown days and during company holidays' },
    { label: 'Before the first job', value: 'Safety handover with your maintenance team' },
    { label: 'Not included', value: 'Maintenance and repair of machinery' },
  ],
  scope: {
    title: 'What factory and warehouse cleaning covers',
    intro: 'Typical for a job in production and storage:',
    items: [
      'Hall and production floors in concrete, with a coating or in industrial parquet',
      'Storage areas, racking and aisles',
      'Machinery and equipment, secured and as specified by your maintenance team',
      'Workshops and ancillary rooms, staff rooms, changing rooms and sanitary facilities',
    ],
    notIncluded: [
      'Maintenance and repair of machinery: this remains with your maintenance team or the manufacturer.',
      'Offices, reception and meeting rooms in the same building: these are covered by [office cleaning](/leistungen/bueroreinigung).',
      'Yards, green spaces and access roads around the hall: see [grounds and green spaces](/leistungen/aussen-und-gruenflaechenpflege).',
    ],
  },
  sections: [
    {
      title: 'Hall floors and aisles',
      paragraphs: [
        'Large hall areas are cleaned with a scrubber dryer. It scrubs and picks up the dirty water in the same pass, so the floor can soon be walked and driven on again. Narrow aisles between pallet racks need a smaller machine or manual work.',
        'The cleaning agent depends on the surface and the dirt. Unsealed concrete absorbs oil, while epoxy or polyurethane coatings are impermeable but can turn dull with pads that are too coarse. Industrial parquet tolerates very little water. Oil puddles are first taken up with absorbent, otherwise the machine spreads the film along the whole aisle.',
      ],
    },
    {
      title: 'Machine cleaning: swarf, oil and coolant',
      paragraphs: [
        'Around machine tools, swarf collects on covers, around the base and on the floor, together with coolant and dust from machining. Swarf belongs in an industrial vacuum cleaner. Blown away with compressed air, it ends up deeper in the machine or in the next aisle.',
        'Your maintenance team decides what is cleaned on a machine: outer surfaces, trays and covers, or internal areas that are only accessible during a shutdown. Which agents a surface tolerates is usually stated in the manufacturer’s operating manual.',
        'Who switches a machine off before cleaning and releases it again afterwards is agreed in the safety handover below.',
      ],
    },
    {
      title: 'Typical occasions in production and storage',
      items: [
        'Audit, certification or customer visit: cleaning well ahead of the date, see the checklist above',
        'Company holidays and overhauls: deep cleaning of floors, racking and machinery while everything is at a standstill',
        'Production changeover or a new line: cleaning before the equipment is installed',
        'Change of tenant in a commercial hall: cleaning before the handover, on behalf of the owners or the property management',
        'Fixed cleaning times instead of fitting cleaning in around other work, if your own staff do it today',
      ],
    },
  ],
  tools: [
    {
      kind: 'checklist',
      id: 'sicherheits-uebergabe',
      title: 'Safety handover before the first job',
      intro:
        'When workers from several companies work at the same place, their employers must agree on hazards and protective measures and inform each other (VUV Art. 9). Machinery must be put into a non-hazardous state before cleaning (Art. 43). This list lets you go through both points with your maintenance team.',
      groups: [
        {
          title: 'Machinery and equipment',
          items: [
            'Who switches the machine off and secures it against being switched back on, for example with a padlock on the isolator switch?',
            'Has residual energy been released: pressure in pneumatic and hydraulic systems, heat, parts that run on or are raised?',
            'Which parts may the cleaning team touch, and which are reserved for maintenance?',
            'Which agents and methods are approved for the surfaces: water, high pressure, solvents?',
            'Who checks the machine after cleaning and releases it again?',
          ],
        },
        {
          title: 'Hall and traffic',
          items: [
            'Which protective equipment is mandatory in which area, for example safety shoes, hearing protection or a high-visibility vest?',
            'Where and when do forklifts operate, and which routes stay open during cleaning?',
            'Which areas are closed or accessible only when accompanied?',
            'How are wet areas cordoned off until they are dry?',
          ],
        },
        {
          title: 'Substances and dirty water',
          items: [
            'Which hazardous substances are stored or processed in the area, and where are the safety data sheets?',
            'Where may the dirty water from the scrubber dryer be emptied? Water containing oil must not go into a drain that leads to a soakaway or to a body of water such as a stream or lake (Waters Protection Act, Art. 6 and 7).',
            'Where are oil-soaked absorbents and cleaning rags collected, and who disposes of them?',
          ],
        },
        {
          title: 'Contacts and emergencies',
          items: [
            'Who can be reached on site during the job, including outside office hours?',
            'Where are the emergency exits, fire extinguishers, first-aid material and eyewash station?',
            'Who is notified of damage, a malfunction or a near miss?',
          ],
        },
      ],
      note: 'The list does not replace your company’s hazard assessment or the instruction on site. Check in each case which additional rules apply in your industry.',
      sources: [
        { label: 'Ordinance on the Prevention of Accidents and Occupational Diseases (VUV, SR 832.30), Art. 6, 9 and 43, German text', href: 'https://www.fedlex.admin.ch/eli/cc/1983/1968_1968_1968/de#art_9' },
        { label: 'Suva: eight life-saving rules for maintenance, rules 3 and 4 (German)', href: 'https://www.suva.ch/de-ch/praevention/lebenswichtige-regeln-und-bestimmungen/lebenswichtige-regeln-am-arbeitsplatz/filme-lebenswichtige-regeln-instandhaltung' },
        { label: 'Suva: checklist on unexpected start-up of machinery and equipment (67075, German)', href: 'https://www.suva.ch/67075.D' },
        { label: 'Waters Protection Act (WPA, SR 814.20), Art. 6 and 7', href: 'https://www.fedlex.admin.ch/eli/cc/1992/1860_1860_1860/en#art_6' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'zonenplan',
      title: 'Cleaning plan by zone (example)',
      intro:
        'This is what a plan for a production or storage hall can look like. On your premises, frequency and time slots depend on shifts, traffic and how quickly dirt builds up.',
      columns: ['Zone', 'Typical soiling', 'Frequency (example)', 'Time slot', 'Points to watch'],
      rows: [
        ['Aisles and traffic routes', 'Dust, tyre marks, swarf', 'daily to weekly', 'between shifts, section by section', 'keep markings visible, cordon off wet areas'],
        ['Production', 'Swarf, oil and grease films, coolant', 'as it builds up', 'breaks, shift changes, shutdown days', 'bind oil puddles first, then clean wet'],
        ['Storage and racking', 'Dust on the floor, beams and goods', 'monthly to quarterly', 'times with little goods in and out', 'move goods only with approval, never climb racking'],
        ['Staff rooms, changing rooms, sanitary', 'Hygiene, consumables', 'every working day', 'outside break times', 'refill soap and paper, separate cloths for toilets'],
        ['Machinery and equipment', 'Deposits, swarf, machining dust', 'as specified by maintenance', 'planned shutdowns, overhauls, company holidays', 'only when switched off and secured, only approved agents'],
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'vor-dem-audit',
      title: 'Before an audit or customer visit',
      intro:
        'A tour usually leads along the traffic routes, through production and storage and into the staff rooms. Plan the cleaning in two stages so that nothing is still wet or cordoned off on the day itself.',
      groups: [
        {
          title: 'One week before',
          items: [
            'Decide the route of the tour: goods receipt, production, storage, staff rooms',
            'Choose the cleaning date so that the floors are dry and clear before the tour',
            'Have machine surfaces cleaned during the next planned shutdown, not on the day of the audit',
            'Dust racking, shelves and window sills along the route',
          ],
        },
        {
          title: 'The day before',
          items: [
            'Traffic routes clear and floor markings easy to see; the VUV requires traffic routes to be marked where necessary (Art. 19)',
            'No oil or grease films on floors where people walk',
            'Emergency exits and escape routes clear, nothing left in front of them',
            'Staff rooms and sanitary facilities cleaned, soap and paper refilled',
            'Waste and recycling bins emptied, the area around the skips clean',
          ],
        },
      ],
      sources: [
        { label: 'Ordinance on the Prevention of Accidents and Occupational Diseases (VUV, SR 832.30), Art. 19, German text', href: 'https://www.fedlex.admin.ch/eli/cc/1983/1968_1968_1968/de#art_19' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
  ],
  steps: [
    {
      title: 'Plan by zone',
      text: 'Each zone gets a frequency and a time slot to suit shifts, forklift traffic and shutdowns. The example plan above shows what this can look like.',
      figure: 'besichtigung',
    },
    {
      title: 'Safety handover',
      text: 'Before the first job, your maintenance team and our cleaning team go through the checklist: shutdown, protective equipment, traffic routes, approved agents.',
      figure: 'offerte',
    },
    {
      title: 'Cleaning in step with operations',
      text: 'Cleaning takes place in the agreed time slots. If shifts or lines change, the plan is adjusted with you.',
      figure: 'start',
    },
  ],
  faq: [
    {
      question: 'How much does industrial cleaning cost?',
      answer:
        'The price depends mainly on the area and the number of zones, the type of dirt (dust comes off faster than oil or caked-on coolant), the floor surface and whether a scrubber dryer can get through. Then there are the time slots, such as jobs outside normal working hours or during short shutdowns, and the number and accessibility of the machines. We give a figure once we have walked through the hall.',
    },
    {
      question: 'Can you clean while operations are running?',
      answer:
        'In many zones, yes. Aisles, storage and staff rooms can usually be cleaned during operation, section by section and with wet areas cordoned off. Areas right next to running equipment are done during breaks, between shifts or during shutdowns.',
    },
    {
      question: 'Who switches off the machines before cleaning?',
      answer:
        'Ideally someone who knows the machine, for example from your maintenance team. They know which switches, valves and residual energy are involved, and they release the machine again after cleaning. The safety handover checklist on this page lets you settle this for each machine and gives the legal basis.',
    },
    {
      question: 'Which rules apply to your team in our hall?',
      answer:
        'Your safety and operating rules, from the forklift aisles to safety glasses at the machine. Under VUV Art. 6, your company also informs workers from other companies about the hazards at their workplace. The easiest moment for this is the safety handover.',
    },
    {
      question: 'How is an oily hall floor cleaned?',
      answer:
        'After absorbent has dealt with fresh puddles, a degreasing agent is left to act briefly, then the scrubber dryer scrubs and picks up. In unsealed concrete, older oil sits in the pores. There it often takes several passes, and stains sometimes remain visible. Where the oily dirty water may and may not go is set out in the safety handover checklist.',
    },
    {
      question: 'How often should a production hall be cleaned?',
      answer:
        'It is not the hall but each zone that has its own rhythm. Staff rooms and sanitary facilities need care every working day, aisles daily to weekly depending on traffic, racking and machinery at longer intervals or during shutdowns. The example plan on this page shows a typical split.',
    },
    {
      question: 'How do we prepare the hall for an audit?',
      answer:
        'With enough lead time: floors should be dry and clear before the tour, and machines cleaned during the last planned shutdown beforehand. The audit checklist on this page splits the points into one week before and the day before.',
    },
  ],
  related: [
    { path: '/leistungen/baureinigung', text: 'After a hall has been built or converted, before racking and equipment move in.' },
    { path: '/leistungen/bueroreinigung', text: 'For offices, reception and meeting rooms in the same building, with their own rhythm.' },
    { path: '/leistungen/facility-services', text: 'If caretaking and the grounds of the site should also be handled by one provider along with the hall.' },
  ],
  cta: {
    title: 'A quote for your hall',
    text: 'For the quote, it helps us to know the hall area in square metres, the floor surfaces, shift times and planned shutdowns, plus a list of the machines to be cleaned. A floor plan showing the zones saves time on the walk-through. The site visit and the quote are free of charge and non-binding.',
  },
}

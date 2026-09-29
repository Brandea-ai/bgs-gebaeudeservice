import type { ServicePageContent } from '../../types'

// Same keys and sources as content/de (sources read on 28.09.2026). Swiss sources without an English version are linked in German.
export const fensterUndFassade: ServicePageContent = {
  path: '/leistungen/fenster-und-fassadenreinigung',
  area: 'leistungen',
  eyebrow: 'Glass and facades',
  h1: 'Window cleaning and facade cleaning for businesses and properties',
  lead: [
    'Streaks against the light, grey frames and green growth on the facade are seen by everyone who enters the building. We clean windows, glass facades, shop windows and facades for property managers, owners and businesses, as a one-off or on a fixed schedule.',
    'This page sets out what needs to be settled before the job: which access suits which height, where the water from facade cleaning may go and how to inform tenants. You can print the checklist and the wastewater table straight away, and copy the tenant notice onto your own letterhead.',
  ],
  facts: [
    { label: 'Surfaces', value: 'Windows, glass facades, shop windows, frames and facades' },
    { label: 'Facade', value: 'High-pressure cleaning where the material allows it' },
    { label: 'Weather', value: 'No exterior work in frost, storms or heavy rain' },
    { label: 'Not included', value: 'Interiors, painting and repairs to the facade' },
    { label: 'Printable', value: 'Checklist and wastewater table' },
  ],
  scope: {
    title: 'Which surfaces we clean',
    intro: 'You choose which surfaces are cleaned. These are the most common:',
    items: [
      'Windows inside and out, including frames and rebates',
      'Windows in stairwells and common areas of residential buildings',
      'Glass facades, glass doors and glass walls',
      'Shop windows and glazed entrance areas',
      'Window sills and blinds if you wish',
      'Facades, with high-pressure cleaning where the material allows it',
    ],
    notIncluded: [
      'Cleaning of interiors: see [maintenance cleaning](/leistungen/unterhaltsreinigung) or [office and practice cleaning](/leistungen/bueroreinigung).',
      'Glass with mortar, paint splashes or labels after building work: see [construction cleaning](/leistungen/baureinigung).',
      'Renovation, painting and repairs to the facade.',
    ],
  },
  sections: [
    {
      title: 'The right time of year',
      paragraphs: [
        'Dirt on glass shows above all against the light: at entrances, shop windows and glass facades that customers and tenants see every day. Besides a fixed schedule, a new letting, a sale or an event in the building are typical reasons for booking a date.',
      ],
      items: [
        'Spring: after the main tree blossom, otherwise pollen settles on the glass again within a few days',
        'Autumn: after the leaves have fallen and before the dark season, when the low sun shows every streak',
        'Frost, storms and heavy rain: exterior work gets postponed, so plan a reserve date',
        'Before a letting or sale: clean only once no more dusty work is planned in the building',
      ],
    },
    {
      title: 'Pure water, squeegee, high pressure: what goes where',
      paragraphs: [
        'Glass within reach is cleaned with water, a mild cleaning product and a squeegee, then frames and rebates are wiped down. For high panes there are water-fed telescopic poles with pure water: it is demineralised and therefore dries without limescale marks.',
        'For facades, the material decides. Smooth, hard surfaces often tolerate high pressure, while delicate render, wood or old natural stone need less pressure or a different method. Whether cleaning agents are needed also determines what has to happen to the wastewater.',
      ],
    },
  ],
  tools: [
    {
      kind: 'checklist',
      id: 'checkliste-fenster',
      title: 'Checklist from enquiry to sign-off',
      intro: 'With these details, a quote for windows and facade can be calculated accurately. The last group helps you check the result.',
      groups: [
        {
          title: 'Have ready for your enquiry',
          items: [
            'Address, type of building and number of storeys',
            'Approximate number of windows or area of glass, plus photos of the facade and entrance',
            'Which windows open and how: inwards, tilt only or fixed glazing',
            'Material of frames and facade, if known: wood, metal, plastic, render, natural stone',
            'Surfaces required: outside, inside or both, plus frames, window sills, blinds',
            'Preferred date or schedule, and times when nobody in the building may be disturbed',
          ],
        },
        {
          title: 'In addition for the facade',
          items: [
            'Total area of the facades to be cleaned, in m²',
            'What needs removing: grey film, green growth, stains',
            'Ground below the facade: lawn, gravel, beds or a sealed surface',
            'Where the drains and manholes around the building lead; the municipality can tell you',
            'Whether the property lies in a groundwater protection zone or near a stream, river or lake',
          ],
        },
        {
          title: 'Before the cleaning date',
          items: [
            'Inform tenants or staff, with date, time window and key arrangements',
            'Have indoor window sills cleared and blinds raised',
            'Keep space free for a vehicle, a mobile elevating work platform or scaffolding',
            'On the pavement or road: obtain the municipality’s permit for using public land',
            'Ensure access to the roof, courtyard or plant room if it is needed',
          ],
        },
        {
          title: 'Sign-off after cleaning',
          items: [
            'No streaks are visible against the light',
            'The glass is clean right into the corners, including at the edge of the frame',
            'Frames, rebates and window sills are clean, as far as agreed',
            'Inside, no drips or water marks are left on floors and window sills',
            'The forecourt and beds below the facade are free of residue',
          ],
        },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'aushang-mieterschaft',
      printable: true,
      printHeader: false,
      updated: '2026-09-29',
      title: 'Notice for tenants: template to adapt',
      intro: 'Windows that can only be cleaned from inside require access to flats or offices. Copy the text onto your letterhead, replace the details in square brackets and put the notice up in the entrance.',
      columns: ['Section', 'Text for the notice'],
      rows: [
        ['Heading', 'Window cleaning in your flat on [date]'],
        ['Date', 'On [date] between [time] and [time], the windows of the property at [address] will be cleaned. Some windows can only be cleaned from inside.'],
        ['Access', 'Please be at home or leave your key with [property management or caretaker] by [date].'],
        ['Preparation', 'Please remove plants and objects from the window sills and raise the blinds.'],
        ['If you cannot make it', 'If the date does not suit you, please contact [name, telephone] by [date].'],
        ['Sender', '[Property management], [place and date of the notice]'],
      ],
    },
    {
      kind: 'table',
      id: 'zugang-hoehe',
      title: 'High windows and facades: which access is suitable',
      intro: 'Suva, the Swiss accident insurer, prefers technical protective measures to personal protective equipment. Windows that open inwards make it possible to clean the outside safely from inside as well. For all other surfaces, the table summarises the Suva publication, together with the permit for public land.',
      columns: ['Access', 'Suitable for', 'Requirements and limits'],
      rows: [
        ['Telescopic pole', 'Smooth surfaces, from the ground or another safe standing point, up to 10 m high', 'Needs no ladder, and various tools can be attached.'],
        ['Ladder', 'Light work that does not extend over larger areas, and only where no safer equipment is an option', 'Generally the wrong equipment where the fall height exceeds 2 m. If a ladder has to be used anyway, fall protection is required. According to the manufacturer’s instructions, mobile podium ladders can also be used at a standing height of more than 2 m.'],
        ['Mobile scaffold tower', 'Cleaning at low to medium heights', 'Working height at most 8 m outdoors and 12 m indoors. The ground must be level, stable and clear, and the danger zone secured.'],
        ['Mobile elevating work platform', 'Smaller buildings or minor work on larger buildings', 'Space for the platform must be provided and kept free. On the pavement or road, a municipal permit is normally required.'],
        ['Safety device in the window frame', 'Work from the window ledge, fitted from inside', 'A specialist first checks whether the frames are suitable. Access to the rooms is needed.'],
        ['Permanently installed system', 'Fixed glazing and facades of large buildings, without opening windows or disturbing operations', 'According to Suva, the best and in the long run cheapest solution. Retrofitting is costly and often impossible.'],
        ['Rope access', 'Exceptions where other equipment is not possible', 'Two separately anchored ropes, supervision by a second person, rescue ensured.'],
      ],
      note: 'If you are planning a new building, conversion or renovation, think about cleaning the glass and facade from the start. And ask with every quote which access will be used.',
      sources: [
        { label: 'Suva 44033: safe cleaning and maintenance of windows, facades and roofs, December 2025 (German)', href: 'https://www.suva.ch/44033.d' },
        { label: 'City of Lucerne: application for using public land (German)', href: 'https://www.stadtluzern.ch/politikverwaltung/stadtverwaltung/formularabisz/13472/detail' },
        { label: 'City of Zug: using public land during building work (German)', href: 'https://stadtzug.ch/de/bauen/bauvorhaben/benuetzung-oeffentlicher-grund' },
      ],
    },
    {
      kind: 'table',
      id: 'abwasser-fassade',
      title: 'Facade cleaning: where the wastewater may go',
      intro: 'Substances that may pollute water must not enter a body of water directly or indirectly, nor be allowed to seep into the ground (Art. 6 Waters Protection Act). This also applies to drains that lead into the rainwater system. Until an intercantonal enforcement aid is available, the authorities of Lucerne, Zug, Nidwalden and Obwalden follow the fact sheet of the cantons of Basel-Stadt and Basel-Landschaft (letter of 26.03.2025).',
      columns: ['Situation', 'What happens to the wastewater', 'Check beforehand'],
      rows: [
        ['Without cleaning agents, loose ground, under 300 m²', 'High pressure with cold water, no special installation', 'Total area of the facades to be cleaned'],
        ['Without cleaning agents, loose ground, over 300 m²', 'Collect with gutters, cover drains with mesh or fleece, discharge via the foul sewer to the treatment plant', 'With the municipality: do the drains and manholes lead into the foul sewer?'],
        ['Without cleaning agents, sealed ground with drains', 'Cover drains and gutters, discharge the wastewater via the foul sewer to the treatment plant', 'As above. If the drains lead into the rainwater system, the wastewater must not go into them.'],
        ['With cleaning agents or algae treatments', 'Not into the ground, a body of water or the sewer: collect in gutters and containers, treat in a separation plant', 'Which products are used. For algae treatments, degradable active substances where possible. Inform the authority at least three working days in advance.'],
        ['Groundwater protection zone S or near a stream, river or lake', 'No cleaning agents. Collect all water, cover loose ground, discharge everything via the foul sewer', 'Whether the property lies in a protection zone. Inform the authority at least three working days in advance.'],
      ],
      note: 'The duty of care under the Act applies to everyone (Art. 3 Waters Protection Act). So ask with every quote for facade cleaning: how is the wastewater collected, and where is it discharged? The letter from the Central Swiss authorities does not apply to Aargau; there, the cantonal authority can advise.',
      sources: [
        { label: 'Waters Protection Act, Art. 3 and 6', href: 'https://www.fedlex.admin.ch/eli/cc/1992/1860_1860_1860/en#art_6' },
        { label: 'Facade cleaning fact sheet of the cantons of Basel-Stadt and Basel-Landschaft (German)', href: 'https://www.bs.ch/publikationen/merkblatt-fassadenreinigung' },
        { label: 'Umwelt Zentralschweiz: environmental and water protection in facade cleaning, 26.03.2025 (German)', href: 'https://www.azimv.ch/wp-content/uploads/2026/02/Merkblatt_Fassadenreinigung_1_Bestaetigung_Zentralschweiz.pdf' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
  ],
  steps: [
    {
      title: 'Date and notice',
      text: 'Once the date is set, you inform tenants or staff, most easily with the notice on this page. If public land is needed, the municipality’s permit must be in place beforehand.',
    },
    {
      title: 'Cleaning on site',
      text: 'Glass, frames and the agreed facade areas are cleaned on the planned day. In frost, storms or heavy rain, the exterior work moves to the reserve date.',
    },
    {
      title: 'Check and next date',
      text: 'You check the result against the light, ideally with the checklist above. With a fixed schedule, you plan the next date at the same time.',
    },
  ],
  faq: [
    {
      question: 'What does it cost to have windows and facades cleaned?',
      answer:
        'We do not quote a price per window, because the effort varies widely. It depends on the number and size of the panes, on glazing bars and frames, and on whether the windows open inwards or can only be reached from outside. Then there is the access (telescopic pole, mobile elevating work platform or scaffolding), any permit for public land, how dirty the glass is and whether inside, outside or both are cleaned. For facades, the area, material, method and the effort for the wastewater count.',
    },
    {
      question: 'How often should windows and glass doors be cleaned?',
      answer:
        'That depends on location and use. Everyone sees and touches entrances, glass doors and shop windows, so they need shorter intervals than the windows in a stairwell or warehouse. On a busy road, under trees or next to a building site, glass gets dirty faster than in a quiet location.',
    },
    {
      question: 'Do tenants have to be at home on the day?',
      answer:
        'Only if windows are cleaned from inside. That applies to every inside surface and to windows whose outside can only be reached from inside, for example because they open inwards. Glass that can be reached from outside can be cleaned without access. Tenants who are away can leave a key, as set out in the notice above.',
    },
    {
      question: 'Who is responsible for the windows in rented flats?',
      answer:
        'The Code of Obligations provides that tenants must remedy, at their own expense and depending on local custom, defects that can be dealt with by minor cleaning as part of regular maintenance ([Art. 259 CO](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/en#art_259)). Whether cleaning the windows of a flat falls under this depends on the tenancy agreement and local custom. Windows in the stairwell and common areas do not belong to any single flat. If the property management also has the windows of the flats cleaned, it can only pass the cost on as accessory charges if this is specifically agreed in the tenancy agreement ([Art. 257a CO](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/en#art_257_a)). Check the individual case before passing on any costs.',
    },
    {
      question: 'Do you use high-pressure cleaning on facades?',
      answer:
        'Yes, where the material allows it. Delicate render, wood and old natural stone are the sensitive cases. Depending on area and products, the water must be collected; the wastewater table shows when this applies.',
    },
    {
      question: 'Is a permit needed if the work platform stands on the pavement?',
      answer:
        'Normally yes. The City of Lucerne requires an application with a dimensioned plan of the area for using public land, followed by approval or a site inspection. The City of Zug takes applications for using public land during building work online, for example for facade scaffolding. For a work platform used for cleaning, ask the building department there. In other municipalities, the building authority can advise. Submit the application early so that the date holds.',
    },
    {
      question: 'What is pure water?',
      answer:
        'Treated water from which the dissolved minerals have been removed. Because nothing is left behind, it dries on the glass without limescale marks. It flows through water-fed telescopic poles, which can clean panes from the ground up to around 10 m.',
    },
  ],
  related: [
    { path: '/leistungen/unterhaltsreinigung', text: 'When the stairwell and common areas should also be cleaned regularly, not just the glass.' },
    { path: '/leistungen/baureinigung', text: 'When mortar, paint and labels stick to glass and frames after building or renovation work.' },
    { path: '/leistungen/bueroreinigung', text: 'When workstations, floors and washrooms in offices and practices should be cleaned too.' },
  ],
  cta: {
    title: 'A quote for your windows and facade',
    text: 'Send us the address, the number of storeys, the approximate number of windows and a few photos. After the site visit, you receive the quote, free of charge and without obligation.',
  },
}

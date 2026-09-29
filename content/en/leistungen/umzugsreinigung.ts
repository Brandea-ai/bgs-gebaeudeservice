import type { ServicePageContent } from '../../types'

export const umzugsreinigung: ServicePageContent = {
  path: '/leistungen/umzugsreinigung',
  area: 'leistungen',
  eyebrow: 'Change of tenant and handover',
  h1: 'Move-out and end-of-tenancy cleaning with a handover guarantee',
  lead: [
    'When a flat is handed back, the property manager checks it room by room, from the oven to the cellar compartment, and records every defect in the handover report. Between the handover report and the new tenants moving in there is usually little time for the cleaning, and the move-in date is fixed.',
    'We carry out end-of-tenancy cleaning (Umzugsreinigung) of flats and business premises for property managers, owners and businesses, with a handover guarantee. On this page you will also find the handover checklist to print, the rules on notifying defects, and the termination dates for Zug and Obwalden with notes for Lucerne, Aargau and Nidwalden.',
  ],
  facts: [
    { label: 'Guarantee', value: 'Re-cleaning if our cleaning is objected to, not for damage or wear' },
    { label: 'Timing', value: 'Before the handover or, for property managers, after the handover report' },
    { label: 'When to ask', value: 'As soon as notice has been received' },
    { label: 'Not for', value: 'Tenants of individual flats' },
  ],
  scope: {
    title: 'What the final clean includes',
    intro: 'Typical tasks in the final clean of a flat:',
    items: [
      'Kitchen: oven including baking trays, hob, extractor hood, fridge and cupboards, inside and out',
      'Bathroom and WC: taps, tiles, joints and mirrors, descaled',
      'Windows inside and out, including frames, rebates and window sills',
      'Blinds and shutters, where agreed',
      'Built-in cupboards, doors, door frames, switches and sockets',
      'Floors and skirting boards in all rooms',
      'Balcony or patio, cellar and attic compartment',
    ],
    notIncluded: [
      'Jobs commissioned by tenants of individual flats. We look after villas and residences through our [premium services](/premium).',
      'Removals, clearing out and disposing of furniture.',
      'Repairs, painting and fixing damage, even if they are listed in the handover report.',
      'Deep cleaning without a change of occupant, for example of floors or tiles: see [deep and special cleaning](/leistungen/sonderreinigungen).',
    ],
  },
  sections: [
    {
      title: 'The handover guarantee and its limits',
      paragraphs: [
        'If the property manager raises a complaint about our cleaning at the handover, we clean again free of charge. The details are set out in the quote.',
        'The guarantee relates to our cleaning. Damage, wear and tear or repairs recorded at the handover do not concern the cleaning and are therefore not covered.',
        'Typical complaints about the cleaning are a film of grease in the oven or limescale on a tap. If the surface itself is damaged, that counts as damage: corroded chrome, for example, a burn mark on the parquet or a scratch on the hob. No re-cleaning can put it right; it calls for tradespeople.',
      ],
    },
    {
      title: 'Change of tenant, sale, return of office space',
      paragraphs: [
        'Property managers get flats ready for occupancy between two tenancies. If the previous tenants did not clean, or did not clean properly, the handover report comes first and our cleaning second. That way you can prove your claims against the tenants.',
        'Owners and condominium owners need the final clean before handing over to the buyer or before letting the flat for the first time.',
        'Businesses hand back office and business premises at the end of the lease. With a lease of limited duration, that date is known from the start. If a lease of indefinite duration is terminated with ordinary notice, the notice period for business premises is at least six months. Either way there is time to schedule the cleaning after the clear-out and any strip-out works.',
      ],
    },
    {
      title: 'What needs to be ready on cleaning day',
      paragraphs: [
        'Only an empty flat can be cleaned thoroughly. When businesses hand back premises or owners hand over to a buyer, the cleaning is best done shortly before the handover. The landlord or the buyer then finds exactly the condition we left behind.',
      ],
      items: [
        'Furniture, curtains and personal belongings have been cleared out, including from the cellar and attic',
        'Painting and repair work is finished',
        'Electricity and water are connected, and the lights work in every room',
        'Keys for the flat, cellar, attic and letterbox are available',
      ],
    },
  ],
  tools: [
    {
      kind: 'text',
      id: 'abnahme-maengelruege',
      title: 'Handover and notice of defects: record first, then clean',
      paragraphs: [
        'The Swiss Code of Obligations provides that, when a flat is returned, the landlord inspects its condition and immediately notifies the tenant of any defects for which the tenant is answerable (Art. 267a CO). A landlord who fails to do so loses these claims. The exception is defects that could not be detected on customary inspection. These must be notified immediately once discovered.',
        'The flat must be returned in the condition resulting from use in accordance with the lease (Art. 267 CO). Normal wear and tear is not the tenant’s responsibility. To distinguish between damage and wear, HEV Schweiz, the homeowners’ association, and the Swiss tenants’ association have drawn up a joint lifespan table.',
        'If you have the flat cleaned before the report is drawn up, you will hardly be able to prove its condition at the return later. In practice this means:',
      ],
      items: [
        'Record the condition in the report before any cleaning changes it.',
        'Describe each defect individually and precisely. ‘Kitchen dirty’ is not enough, ‘grease film on oven and extractor hood’ is.',
        'List dirt, normal wear and tear and damage separately.',
        'State clearly that the tenant is to be held liable for the defects listed.',
        'Hand the report to the tenant straight away. If the tenant does not take part in the return, notify the defects in writing immediately, by registered post for evidence.',
      ],
      note: 'This overview is no substitute for legal advice. Clarify individual cases with your association or the conciliation authority for tenancy matters.',
      sources: [
        { label: 'Code of Obligations, Art. 267 and 267a (Fedlex, as at 1 January 2026)', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/en#art_267_a' },
        { label: 'Zurich courts: notice of defects on return (in German)', href: 'https://www.gerichte-zh.ch/de/themen/miete/kuendigung-rueckgabe/rueckgabe-und-ausweisung/maengelruege' },
        { label: 'HEV Schweiz: lifespan table (in German)', href: 'https://www.hev-schweiz.ch/vermieten/verwalten/lebensdauertabelle' },
        { label: 'Swiss tenants’ association: lifespan table (in German)', href: 'https://www.mieterverband.ch/mietrecht/unterlagen-und-tools/lebensdauertabelle/' },
      ],
    },
    {
      kind: 'checklist',
      id: 'abnahme-checkliste',
      title: 'Handover checklist room by room',
      intro: 'To print for the return of a flat. The list shows what is checked closely at the handover and serves as a framework for your report. It is a checklist for the inspection, not a list of our services.',
      printable: true,
      updated: '2026-09-28',
      groups: [
        {
          title: 'Kitchen',
          items: [
            'Oven with baking trays and racks',
            'Hob and extractor hood with grease filter',
            'Fridge with seals and vegetable drawer',
            'Dishwasher with filter',
            'Cupboards inside, including the top shelves',
            'Sink and tap free of limescale',
          ],
        },
        {
          title: 'Bathroom and WC',
          items: [
            'Taps and shower head free of limescale marks',
            'Shower glass, bath and tiles',
            'Joints and silicone',
            'Mirror and mirror cabinet',
            'Drains and ventilation grilles',
            'Toilet bowl and cistern',
          ],
        },
        {
          title: 'Windows and blinds',
          items: [
            'Glass inside and out',
            'Frames, rebates and seals',
            'Window sills inside and out',
            'Blinds, roller shutters or shutters',
          ],
        },
        {
          title: 'All rooms',
          items: [
            'Floors and skirting boards',
            'Built-in cupboards inside',
            'Doors, frames and handles',
            'Light switches and sockets',
            'Radiators',
          ],
        },
        {
          title: 'Ancillary rooms',
          items: [
            'Balcony or patio including railing',
            'Cellar and attic compartment',
            'Letterbox',
          ],
        },
        {
          title: 'Report',
          items: [
            'Date and time of the return, persons present',
            'Keys counted: flat, cellar, attic, letterbox',
            'Defects described individually, damage and wear listed separately',
            'Report handed to the tenant or sent immediately',
          ],
        },
      ],
      note: 'Dated photos supplement the report, especially if the tenant is absent at the return.',
      sources: [
        { label: 'Code of Obligations, Art. 267a (Fedlex, as at 1 January 2026)', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/en#art_267_a' },
      ],
    },
    {
      kind: 'table',
      id: 'kuendigungstermine',
      title: 'Termination dates by canton',
      intro: 'If a lease of indefinite duration is terminated with ordinary notice, the notice period is at least three months for flats and at least six months for business premises, in each case for the termination date stated in the lease. If the lease states none, the date fixed by local custom applies, and without such custom the end of a three-month period of the lease (Art. 266a, 266c and 266d CO). A lease of limited duration ends without notice when the agreed term expires (Art. 266 CO).',
      printable: true,
      updated: '2026-09-29',
      columns: ['Canton', 'Customary local dates for flats', 'For planning'],
      rows: [
        ['Lucerne', 'Not stated on the canton’s website. The Lucerne conciliation authority for tenancy matters can advise.', 'According to the canton, notice is usually given for the end of a month, and dates and notice periods are mostly set out in the lease.'],
        ['Zug', 'End of March, end of June, end of September', 'Handovers and final cleans cluster on these three dates.'],
        ['Obwalden', 'End of March, end of June, end of September', 'For a handover at the end of June, notice must be received by the end of March at the latest. From then on, the handover date is fixed.'],
        ['Aargau and Nidwalden', 'Not stated on the cantons’ websites. The conciliation authorities for tenancy matters can advise, in Aargau the one for the district.', 'State the termination date given in the notice in your enquiry.'],
      ],
      note: 'Tenants can also return the flat before the termination date. They are only released from their obligations if they propose a solvent new tenant whom the landlord cannot reasonably refuse and who is willing to take over the lease on the same terms (Art. 264 CO). The handover can therefore fall on any date. Ask for the cleaning as soon as a handover date is fixed.',
      sources: [
        { label: 'Code of Obligations, Art. 264, 266, 266a, 266c and 266d (Fedlex, as at 1 January 2026)', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/en#art_266_c' },
        { label: 'Civil Procedure Code, Art. 201 para. 2 (Fedlex, as at 1 July 2026)', href: 'https://www.fedlex.admin.ch/eli/cc/2010/262/en#art_201' },
        { label: 'Canton of Lucerne: renting a flat (in German)', href: 'https://gruezi.lu.ch/wohnen/wohnung_mieten' },
        { label: 'Canton of Lucerne: conciliation authority for tenancy (in German)', href: 'https://gerichte.lu.ch/organisation/schlichtungsbehoerden/miete_pacht' },
        { label: 'Canton of Zug: tenancy law FAQ (in German)', href: 'https://zg.ch/de/recht-justiz/zivilverfahren/schlichtung/faq-zum-mietrecht' },
        { label: 'Canton of Obwalden: conciliation authority (in German)', href: 'https://www.ow.ch/fachbereiche/2131' },
        { label: 'Canton of Aargau: conciliation authorities for tenancy (in German)', href: 'https://www.ag.ch/de/ueber-uns/gerichte-kanton-aargau/organisation/schlichtungsbehoerden/schlichtungsbehoerden-fuer-miete-und-pacht' },
        { label: 'Canton of Nidwalden: conciliation authority (in German)', href: 'https://www.nw.ch/schlichtungsbehoerde/326' },
      ],
    },
  ],
  steps: [
    {
      title: 'Fixing the date',
      text: 'For property managers, the cleaning takes place between the handover report and the new tenants moving in; for owners and businesses, between moving out and the handover. We agree with you how the keys are handed over.',
    },
    {
      title: 'Final clean',
      text: 'We clean the empty rooms to the agreed scope, from the kitchen to the cellar and attic.',
    },
    {
      title: 'Handover',
      text: 'The property manager inspects the premises. We put right any complaints about our cleaning under the handover guarantee.',
    },
  ],
  faq: [
    {
      question: 'What does the price of end-of-tenancy cleaning depend on?',
      answer:
        'On the effort in this particular flat: number of rooms and floor area, the condition of the kitchen and bathroom (grease, limescale, nicotine), the number and type of windows, whether slatted blinds, roller shutters or shutters are included and which ancillary rooms such as cellar, attic or balcony need cleaning. That is why we do not quote a flat rate per room.',
    },
    {
      question: 'Do you clean before or after the handover?',
      answer:
        'Both are possible. When businesses hand back premises or owners hand over to a buyer, we clean beforehand. If the tenants returned the flat without cleaning it properly, we clean for the property manager once the defects are in the report.',
    },
    {
      question: 'What should property managers look out for at the handover?',
      answer:
        'Defects for which the tenant is answerable must be inspected at the return and notified immediately, otherwise the claims are lost (Art. 267a CO). So the report comes first and the cleaning second. What matters in the report is set out under [handover and notice of defects](/leistungen/umzugsreinigung#abnahme-maengelruege).',
    },
    {
      question: 'What condition can property managers demand when a flat is returned?',
      answer:
        'The flat must be returned in the condition resulting from use in accordance with the lease (Art. 267 CO). How thoroughly it has to be cleaned is usually governed by the lease. Normal wear and tear is not the tenant’s responsibility. This answer is not legal advice.',
    },
    {
      question: 'When should I ask for end-of-tenancy cleaning?',
      answer:
        'As soon as notice has been received. With ordinary notice, there are at least three months until the end of the lease for flats and at least six for business premises. If the tenants return the flat earlier, for example with a new tenant, the handover can also be earlier. In Zug and Obwalden, the end of March, June and September apply unless agreed otherwise; in Lucerne, according to the canton, the dates are mostly set out in the lease.',
    },
    {
      question: 'Can cleaning start while furniture is still in the flat?',
      answer:
        'Better not. At the handover the property manager looks closely behind furniture, in cupboards and under fitted units, and these places can only be cleaned thoroughly once the rooms are empty. We therefore only start once all rooms have been cleared, including the cellar and attic.',
    },
    {
      question: 'Do you also clean offices and business premises before they are handed back?',
      answer:
        'Yes. For businesses we clean offices and business premises before they are returned to the landlord. If fit-out has to be removed, the cleaning follows the tradespeople. After larger conversions, [construction cleaning](/leistungen/baureinigung) is the right service.',
    },
    {
      question: 'Do you also do end-of-tenancy cleaning for tenants?',
      answer:
        'No, we do not accept jobs from tenants of individual flats. Our clients are property managers, owners and businesses. For villas and residences, the final clean is also available to private individuals through our [premium services](/premium).',
    },
  ],
  related: [
    { path: '/leistungen/baureinigung', text: 'If the flat is renovated before it is re-let: after the painters and tradespeople comes the final construction clean.' },
    { path: '/leistungen/sonderreinigungen', text: 'If floors, tiles or joints need deep cleaning after a long tenancy, even without a change of tenant.' },
    { path: '/leistungen/hauswartung', text: 'If the caretaker is to assist with flat handovers and look after the building between changes of tenant.' },
  ],
  cta: {
    title: 'A quote for your handover date',
    text: 'Tell us the address, the number of rooms or the floor area, the handover or move-in date and whether blinds or shutters are included. For several changes of tenant, the easiest way is to send us a list of addresses and dates. The quote is free of charge and non-binding.',
  },
}

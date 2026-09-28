import type { ServicePageContent } from '../../types'

export const aussenUndGruen: ServicePageContent = {
  path: '/leistungen/aussen-und-gruenflaechenpflege',
  area: 'leistungen',
  eyebrow: 'Property care',
  h1: 'Garden maintenance and grounds care for properties',
  lead: [
    'Lawns, hedges and paved areas take a lot of work in May and almost none in January. We look after the grounds of your property to a maintenance plan that follows this yearly cycle: hedges in winter, weeds in the joints before they set seed, leaves cleared before they make the paths slippery.',
    'We provide garden maintenance for property managers, condominium owners and businesses, as a service of its own or together with [caretaking](/leistungen/hauswartung).',
  ],
  facts: [
    { label: 'Hedge cutting', value: 'November to March, outside the breeding season' },
    { label: 'Weeds on paths', value: 'Removed mechanically, as sprays are banned there' },
    { label: 'Frequency', value: 'To a maintenance plan, most often in early summer' },
    { label: 'Service', value: 'On its own or with caretaking' },
    { label: 'Not offered', value: 'Winter maintenance, landscaping, new planting' },
  ],
  scope: {
    title: 'What garden maintenance includes',
    intro: 'We carry out this work for the areas listed in the maintenance plan:',
    items: [
      'Mowing lawns',
      'Edging lawns and trimming borders',
      'Cutting hedges and shrubs, in winter outside the breeding season',
      'Weeding and tending flower beds and borders',
      'Clearing leaves from lawns, paths and paved areas',
      'Keeping paths, paved areas and car parks clean',
      'Removing weeds from joints and gravel areas by hand or with tools',
      'Collecting litter from the grounds',
    ],
    notIncluded: [
      'Winter maintenance such as snow clearing and gritting',
      'Landscaping and new planting, for example a new hedge or a new bed',
      'Inspection rounds of the building: this is part of [caretaking](/leistungen/hauswartung)',
      'Cleaning glass and facades: this is covered by [window and facade cleaning](/leistungen/fenster-und-fassadenreinigung)',
    ],
  },
  sections: [
    {
      title: 'When the grounds can no longer be looked after on the side',
      paragraphs: [
        'The caretaker retires, the condominium owners stop mowing themselves, or a new development has been occupied and nobody is responsible for the lawns and hedges. At that point the grounds need someone who keeps an eye on them all year round.',
        'We look after residential complexes with playgrounds, office buildings with car parks and commercial sites with gravel areas. The basis is a maintenance plan that lists every area with its work and frequency. That way tenants can be told when mowing and cutting will take place.',
      ],
    },
    {
      title: 'Cut hedges in winter, only keep them clear in summer',
      paragraphs: [
        'Every summer, the authorities remind property owners to cut back their hedges. For birds this is the worst time: blackbirds, greenfinches and garden warblers are nesting in dense hedges. The Swiss Ornithological Institute in Sempach therefore recommends cutting woody plants from November to March.',
        'In winter the branch structure is easy to see, so the cut can follow the natural shape of the plant. Along paths and pavements we then cut back far enough for them to stay clear through the summer. If a passage still grows over, a light trim is enough, once we have checked for nests.',
      ],
    },
    {
      title: 'Combining garden maintenance and inspection rounds',
      paragraphs: [
        'If grounds maintenance runs together with [caretaking](/leistungen/hauswartung), garden work and inspection rounds can be combined. Whoever mows and sweeps outside also notices the loose paving slab, the broken outdoor light or the blocked drain.',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'pflegekalender',
      title: 'Maintenance calendar for lawns, hedges and paved areas',
      intro: 'The grounds do not need the same amount of work every month. This overview shows what is due when and serves as the framework for the maintenance plan of your property.',
      columns: ['Period', 'Lawns', 'Hedges and shrubs', 'Paths, paved areas and beds'],
      rows: [
        [
          'March and April',
          'Rake off branches and leaves left from winter, first mowing as soon as the grass grows',
          'Finish cutting woody plants by the end of March',
          'Sweep up grit and winter dirt, weed beds and cover them with mulch or bark',
        ],
        [
          'May and June',
          'Main growing season: mow regularly, edge the lawns',
          'No cutting back. If a path grows over, trim lightly and check for nests first',
          'Sweep and weed joints before the weeds set seed',
        ],
        [
          'July and August',
          'Mow according to growth and weather',
          'Breeding season: leave the hedges alone',
          'Cut off the flower heads of invasive plants before the seeds ripen',
        ],
        [
          'September and October',
          'Rake leaves regularly, last mowing before winter',
          'Leave native shrubs with berries standing, they are winter food for birds. With cherry laurel, however, cut off the berries before the seeds ripen',
          'Clear leaves from paths and paved areas, they may stay under shrubs',
        ],
        [
          'November to February',
          'Rest period, only remove leaves and fallen branches',
          'Main period for cutting woody plants: shaping, thinning, cutting back generously along paths',
          'Clear leaves and branches from paths and paved areas',
        ],
      ],
      note: 'Along roads and pavements, cantonal and municipal rules also apply. The City of Lucerne requires a clear height of 2.50 m above footpaths and cycle paths and 4.50 m above the carriageway. This is why the Swiss Ornithological Institute advises cutting back generously along paths in winter.',
      sources: [
        { label: 'Swiss Ornithological Institute: cutting shrubs and hedges in built-up areas (German)', href: 'https://www.vogelwarte.ch/de/ratgeber/schnitt-von-straeuchern-und-hecken-in-siedlungen-wann-und-wie/' },
        { label: 'FOEN: 10 preventive measures and alternatives to herbicides, 2019 (German)', href: 'https://www.bafu.admin.ch/dam/de/sd-web/9yHQQ2lBw2VU/merkblatt_10_vorbeugendemassnahmenundalternativenzumherbizideins.pdf' },
        { label: 'City of Lucerne: cutting back plants (German)', href: 'https://www.stadtluzern.ch/dienstleistungeninformation/54265' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'spritzmittelverbot',
      title: 'Weeds and moss: where sprays are prohibited',
      intro: 'Sealed and paved surfaces have no humus layer to bind active substances, so rain washes them into drains and watercourses. The Chemical Risk Reduction Ordinance (ORRChem) therefore prohibits weedkillers there, and since December 2020 also products against algae and moss. This applies to companies and private individuals alike.',
      columns: ['Area', 'What applies', 'What works instead'],
      rows: [
        [
          'Paths, driveways, forecourts and car parks, including kerbs, pavements, drains and gutters',
          'Prohibited, including on gravel, marl, paving and grass pavers and in a 50 cm strip alongside',
          'Sweep regularly so that no fine material collects in the joints, scrape out joints, pull weeds before they set seed',
        ],
        [
          'Roofs and terraces',
          'Prohibited, including products against algae and moss',
          'Weed and brush by hand',
        ],
        [
          'Embankments and verges along roads',
          'Prohibited, individual problem plants only if mowing does not work',
          'Mow and remove the cuttings',
        ],
        [
          'Hedges, streams and ponds, each with a 3 m strip alongside',
          'All plant protection products prohibited, not only weedkillers. Along hedges, individual problem plants are exempt if mowing does not work',
          'Weed, mow, cover the soil with mulch',
        ],
      ],
      note: 'Tolerance lowers costs, the FOEN writes: removing weeds from every square metre is not necessary everywhere. Once joints and cracks are refilled and the surface is repaired, weeds can no longer grow there.',
      sources: [
        { label: 'ORRChem (SR 814.81), Annex 2.4 No 4bis and Annex 2.5 No 1.1', href: 'https://www.fedlex.admin.ch/eli/cc/2005/478/en' },
        { label: 'FOEN: bans on herbicides and biocides on and along roads, paths, paved areas, terraces and roofs, 2021 (German)', href: 'https://www.bafu.admin.ch/dam/de/sd-web/Cp1cASoaj-UD/merkblatt_verwendungsverbotefuerunkrautvertilgungsmittelaufundan.pdf' },
        { label: 'FOEN: plant protection in the municipality (German)', href: 'https://www.bafu.admin.ch/de/pflanzenschutz-in-der-gemeinde' },
        { label: 'FOEN: 10 preventive measures and alternatives to herbicides, 2019 (German)', href: 'https://www.bafu.admin.ch/dam/de/sd-web/9yHQQ2lBw2VU/merkblatt_10_vorbeugendemassnahmenundalternativenzumherbizideins.pdf' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'invasive-pflanzen',
      title: 'Invasive plants in the garden: the rules since 2024',
      intro: 'Since 1 September 2024, the Release Ordinance (RO) has regulated invasive garden plants more strictly. Plants in Annex 2.2 may no longer be passed on to others. For Annex 2.1 there is a ban on handling them, only control measures are still allowed.',
      columns: ['Plant', 'What applies', 'Care and disposal'],
      rows: [
        [
          'Cherry laurel',
          'Annex 2.2: existing hedges may stay and be cut, selling and passing on are prohibited',
          'Cut off the berries before the seeds ripen. Compost cuttings without fruit, put fruit and roots in the household waste',
        ],
        [
          'Butterfly bush and Chinese windmill palm (‘Ticino palm’)',
          'Annex 2.2: same rules as for cherry laurel',
          'Cut off the flower heads before seeds or fruit ripen and put them in the household waste',
        ],
        [
          'Asian knotweeds, such as Japanese knotweed',
          'Annex 2.1: do not tend, do not transplant, only control',
          'Put all parts of the plant in the household waste, even small pieces of root sprout again. Dispose of excavated soil containing roots only through proper channels',
        ],
        [
          'North American goldenrods',
          'Annex 2.1: only control',
          'Mow at the latest when they flower, bag parts with flowers, seeds or roots for the household waste',
        ],
        [
          'Common ragweed (Ambrosia)',
          'Annex 2.1. Control is compulsory under agricultural legislation. The Central Swiss cantons’ practical guide also asks for finds to be reported to the cantonal specialist office',
          'Pull out wearing gloves, and a dust mask while in flower, put the whole plant in the household waste',
        ],
      ],
      note: 'Environmental law does not require invasive plants to be removed from your own land. Common ragweed is different: it must be controlled under agricultural legislation. The duty of care applies to all of them, so owners must prevent the plants from spreading. Seeds and roots therefore never belong in the garden compost.',
      sources: [
        { label: 'Release Ordinance RO (SR 814.911), Art. 15 and Annexes 2.1 and 2.2', href: 'https://www.fedlex.admin.ch/eli/cc/2008/614/en' },
        { label: 'FOEN: changes to regulation on invasive alien plants', href: 'https://www.bafu.admin.ch/en/changes-to-regulation-on-invasive-alien-plants' },
        { label: 'Central Swiss cantons: practical guide to neophytes, 2025 (German)', href: 'https://lawa.lu.ch/-/media/LAWA/Dokumente/njf/lebensraeume/neobiota/Praxishilfe_Neophyten.pdf' },
      ],
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'pflegeplan',
      title: 'Maintenance plan: what goes into it',
      intro: 'The more precisely areas and requirements are recorded, the easier it is to compare quotes. This list helps you gather what is needed before the site visit.',
      groups: [
        {
          title: 'Areas',
          items: [
            'Lawns in square metres, ideally marked on the site plan',
            'Hedges: length in metres, height, one or both sides',
            'Flower beds, borders and planters',
            'Paths, paved areas, car parks, playground and roof terraces with their surface',
          ],
        },
        {
          title: 'Frequency and times',
          items: [
            'Mowing and weeding: how often in the growing season',
            'Weekdays and times that suit the tenants or the business',
            'Events before which the grounds should be in good order',
            'Hedge cutting in winter, outside the breeding season',
          ],
        },
        {
          title: 'Cuttings and responsibilities',
          items: [
            'Cuttings: green waste bin, municipal collection or removal',
            'Known locations of invasive plants',
            'Garden plots that tenants or owners look after themselves',
            'Water connection, equipment room and access for machines',
          ],
        },
        {
          title: 'After each visit',
          items: [
            'Lawn edges neatly cut',
            'Paths and paved areas free of leaves, cuttings and weeds in the joints',
            'Passages, sight lines and pavements clear',
            'Beds weeded, cuttings at the agreed place',
          ],
        },
      ],
      printable: true,
      updated: '2026-09-28',
    },
  ],
  steps: [
    {
      title: 'Maintenance plan',
      text: 'Every area is listed in the plan with its work and frequency, from the lawn edge to the hedge cut.',
    },
    {
      title: 'Season from March to October',
      text: 'During the growing season we mow, weed and sweep at the agreed frequency. If you need an extra visit, for example before an event, just let us know.',
    },
    {
      title: 'Cutting woody plants in winter',
      text: 'Between November and March, hedges and shrubs are cut, along with clearing leaves and branches where they fall.',
    },
  ],
  faq: [
    {
      question: 'What determines the cost of garden maintenance?',
      answer:
        'Mainly the size of the areas and how much manual work they need. A machine mows open lawns quickly, while joints, gravel areas and embankments take time. The length and height of the hedges, the number of visits in the growing season and how the cuttings are disposed of also play a part.',
    },
    {
      question: 'Can you spray weeds on the forecourt?',
      answer:
        'No, nobody is allowed to. Weedkillers are prohibited on paths, forecourts and car parks and in a 50 cm strip alongside them, and on roofs and terraces as well. That is why we remove weeds mechanically: sweeping, scraping out joints, weeding.',
    },
    {
      question: 'Does our cherry laurel hedge have to go?',
      answer:
        'No. Existing hedges may stay and be cut; since 1 September 2024, selling and passing them on are prohibited. The FOEN advises cutting off the berries before the seeds ripen. Otherwise birds carry the seeds further, as far as the woods.',
    },
    {
      question: 'The municipality wants the hedge cut back, but it is breeding season. What now?',
      answer:
        'Landowners must cut back plants along roads in good time, in the canton of Lucerne under § 86(7) of the Roads Act. The clearance profile, the space above the pavement and road, must stay free (§ 91). In summer we only cut what protrudes into this space, and only after checking for nests. The main cut follows in winter and is generous enough along paths that little needs trimming the following year.',
    },
    {
      question: 'Where do grass cuttings, leaves and branches go?',
      answer:
        'There are three options: the property’s green waste bin, the municipal green waste collection or removal. Branches can also be left as a pile in a quiet corner, where hedgehogs spend the winter. Parts of invasive plants with flowers, seeds or roots go in the household waste, never in the garden compost.',
    },
    {
      question: 'Can we contract out only the grounds, without caretaking?',
      answer:
        'Yes, garden maintenance is available as a service of its own, even alongside an existing caretaker. The maintenance plan then states exactly which areas we take on and which stay with the caretaker.',
    },
    {
      question: 'Do you also plant new hedges or create beds?',
      answer:
        'No, we do not offer landscaping or new planting; we look after existing grounds. A tip from the Swiss Ornithological Institute for new hedges: leave enough distance from the path when planting so that it stays clear for years to come.',
    },
  ],
  related: [
    { path: '/leistungen/hauswartung', text: 'If the stairwell, building services and inspection rounds are to be looked after as well as the lawns and hedges.' },
    { path: '/leistungen/facility-services', text: 'If the grounds belong in a single contract together with cleaning and caretaking, with one point of contact.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'If the entrance and stairwell should stay as clean as the forecourt, at the same frequency.' },
  ],
  cta: {
    title: 'Request garden maintenance for your property',
    text: 'Tell us the location, the type of property and the approximate areas: square metres of lawn, metres of hedge, paths and paved areas. A site plan also helps. After a site visit you receive our quote for the garden maintenance, free of charge and non-binding. Once the contract is awarded, we draw up the maintenance plan together with you.',
  },
}

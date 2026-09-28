import type { ServicePageContent, Source } from '../../types'

// Same keys and sources as content/de/premium/luxusimmobilien.ts (E85, sources read on 28.09.2026).

const nvs: Source = {
  label: 'Swiss Natural Stone Association NVS: leaflet on cleaning natural stone floors (January 2018, in German)',
  href: 'https://nvs.ch/fileadmin/user_upload/nvs/1_Dienstleistungen/Technische_Merkblaetter/15_MB_Reinigung_von_Naturstein_Belaegen.pdf',
}

export const luxusimmobilien: ServicePageContent = {
  path: '/premium/luxusimmobilien',
  area: 'premium',
  h1: 'Villa cleaning with material expertise and a dedicated team',
  lead: [
    'A marble washbasin, a brass tap beside it, oiled oak parquet in the living room: in a villa, almost every surface calls for a different product.',
    'We clean villas, lofts and residences in Lucerne, Zug and beyond with a dedicated team that knows your materials and your rules. It comes on a regular basis, around your events or while you are travelling.',
  ],
  facts: [
    { label: 'For', value: 'Owners, their property managers and estate agents' },
    { label: 'Working hours', value: 'Weekdays, evenings, weekends or while you travel' },
    { label: 'Team', value: 'Permanently assigned and vetted by us' },
    { label: 'To print', value: 'Materials table and list for the first walk-through' },
  ],
  scope: {
    title: 'What caring for your home covers',
    intro: 'You decide which rooms and surfaces are included during the first walk-through. These are the usual ones:',
    items: [
      'Living rooms, bedrooms and guest rooms',
      'Kitchens and bathrooms, with products that suit stone, lacquer and taps',
      'Natural stone and parquet floors, following the care instructions for each floor',
      'High-gloss surfaces, glass and mirrors',
      'Cleaning before you arrive, after you leave and checks in between',
      'Visits before and after receptions or family celebrations, weekends included',
      'Living spaces where art hangs and antiques stand',
      'Short-notice visits before a sale, a photo shoot or a handover, also on behalf of an estate agent or property manager',
    ],
    notIncluded: [
      'Restoration of artworks and antiques.',
      'Cleaning the artworks themselves unless you expressly approve it.',
    ],
  },
  sections: [
    {
      title: 'What helps the tap harms the marble',
      paragraphs: [
        'The bathroom shows why knowing your materials is more than caution. A major tap manufacturer recommends citric acid against limescale on the tap. On the marble washbasin next to it, that very acid attacks the polish, and the kitchen sponge with the green scouring pad can scratch it.',
        'That is why we never use one product for everything. On the first walk-through we go room by room through the stone, wood and finishes in your home. The table further down sums up what helps each material and what damages it.',
      ],
    },
    {
      title: 'Second homes and travel: ready when you arrive',
      paragraphs: [
        'A house on Lake Lucerne or Lake Zug often stands empty for weeks. Before you arrive, we clean so that you can walk in with nothing left to do. After you leave, we put the house back in order.',
        'In between, we look in as often as you wish. You decide what we pay attention to, for example whether windows and doors are shut or water is leaking anywhere. Anything we notice goes to the person you name: you, your property manager or someone you trust.',
      ],
    },
    {
      title: 'Before a sale, a photo shoot or a handover',
      paragraphs: [
        'Estate agents and property managers can instruct us on the owner’s behalf, at short notice too. For photos, what counts is what the camera sees: glass, mirrors, polished floors and kitchen fronts show every streak in raking light.',
        'Tell us the date of the photo shoot or the first viewing, the rooms that will be shown and how we get into the house. Once the house is cleared, the final clean before handover to the new owners is covered by our [move-out cleaning](/leistungen/umzugsreinigung).',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'materialkunde',
      title: 'What care each material needs',
      intro:
        'The rules of thumb from trade associations and manufacturers for the surfaces most often found in villas. Print it for everyone who cleans in your home.',
      columns: ['Material', 'How to keep it beautiful', 'What damages it'],
      rows: [
        [
          'Marble, limestone, travertine',
          'Remove sand and dust dry first. Then a neutral cleaner or stone soap, wipe with clear water and dry polished surfaces, otherwise water marks remain.',
          'Any acid, including vinegar, lemon and limescale removers: it etches the surface dull. Scouring agents and sponges with a green or blue pad can scratch the polish.',
        ],
        [
          'Granite, gneiss, quartzite',
          'Acid-resistant. According to the Swiss natural stone association, all usual cleaning methods can be used here.',
          'Mix-ups: if it is unclear which stone was laid, a test in a hidden spot shows whether it is sensitive to acid.',
        ],
        [
          'Parquet, sealed or oiled',
          'Vacuum and wipe with a damp cloth now and then. Microfibre cloths only if the manufacturer approves them. Oiled parquet needs regular re-treatment with its care system.',
          'Wet cleaning, scrubber-dryer machines and steam cleaners',
        ],
        [
          'Lacquered fronts, matt to high-gloss',
          'A mild household cleaner in warm water, with soft leather cloths or sponge cloths. Then wipe dry with a soft, lint-free cloth, always without pressure. On high-gloss fronts, a chamois and warm water are usually enough.',
          'Microfibre cloths, hardened rags and harsh products: they can leave permanent scratches.',
        ],
        [
          'Taps',
          'Put the product on a soft cotton cloth rather than spraying it on. One manufacturer recommends citric acid against limescale.',
          'Vinegar, acetic, formic, phosphoric and hydrochloric acid, chlorine bleach, scouring sponges, brushes and microfibre cloths',
        ],
      ],
      note:
        'Your manufacturers’ care instructions always come first. Where they differ from this table, we follow them.',
      sources: [
        nvs,
        { label: 'Natural Stone Institute: Care & Cleaning of Natural Stone', href: 'https://www.naturalstoneinstitute.org/consumers/care/' },
        { label: 'Swiss parquet association ISP: parquet basics and care instructions (in German)', href: 'https://www.parkett-verband.ch/de/Parkett/Parkett-ABC-und-Pflegeanleitungen' },
        { label: 'Kurt Keller AG: care instructions for fronts, surfaces and cabinets (in German)', href: 'https://www.kkag.ch/de/reinigung-und-pflege/pflegehinweise-fur-fronten-oberflachen-und-schranke/' },
        { label: 'hansgrohe: descaling and cleaning taps (in German)', href: 'https://www.hansgrohe.de/bad/ratgeber/pflege-wartung/armaturen-entkalken' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'text',
      id: 'gemaelde-und-kunst',
      title: 'Paintings and artworks: where cleaning stops',
      paragraphs: [
        'We only clean artworks themselves if you expressly approve it. The reason lies in the advice of conservation bodies: even the wrong kind of dusting can do lasting harm to a painting.',
      ],
      items: [
        'Dust cloths, dry or damp, stiff bristles and feather dusters do not belong on a painting. Threads catch on raised paint, bristles and feathers scratch, and moisture can loosen paint.',
        'Loose or flaking paint is not touched. Matte paint surfaces can take on permanent glossy marks from brushing alone.',
        'Cleaning the surface of a painting and repairing damage is a job for a conservator.',
        'For where to hang works, the experts advise: not above the fireplace, never in direct sunlight, and at relative humidity kept as steady as possible between 40 and 60 per cent.',
      ],
      note:
        'You will find specialists in Switzerland in the directory of the Swiss Association for Conservation and Restoration SKR.',
      sources: [
        { label: 'Smithsonian Museum Conservation Institute: Caring for Your Paintings', href: 'https://mci.si.edu/caring-your-paintings' },
        { label: 'Canadian Conservation Institute: Basic care, Paintings', href: 'https://www.canada.ca/en/conservation-institute/services/care-objects/fine-art/basic-care-paintings.html' },
        { label: 'Swiss Association for Conservation and Restoration SKR (in German)', href: 'https://restaurierung.swiss/de' },
      ],
    },
    {
      kind: 'checklist',
      id: 'erster-rundgang',
      title: 'Before the first visit: the walk-through list',
      intro:
        'We go through these points with you on the first walk-through. Printed out, the list helps you, your property manager or your estate agent to prepare.',
      groups: [
        {
          title: 'Rooms and materials',
          items: [
            'Which rooms are cleaned and which nobody enters',
            'Which stones, woods and finishes were used, as far as known',
            'Care instructions from the manufacturer, joiner or interior designer',
            'Products you prefer or rule out',
          ],
        },
        {
          title: 'Art and valuables',
          items: [
            'Whether you approve individual artworks or antiques for cleaning',
            'Display cabinets, collections and cupboards that stay closed',
            'Where delicate pieces stand, so that nobody knocks into them while cleaning the room',
            'Care notes from a gallery or conservator, if there are any',
          ],
        },
        {
          title: 'Keys, alarm and access',
          items: [
            'How keys are handed over and kept',
            'Who sets and unsets the alarm system, and how',
            'Who is in the house when the team arrives',
            'Whether you would like a non-disclosure agreement',
          ],
        },
        {
          title: 'Times and reporting',
          items: [
            'Fixed visit times, including evenings or weekends',
            'Your travel dates, so the house is ready before you arrive',
            'How often someone looks in while you are away',
            'Who hears about anything we notice, and how',
          ],
        },
      ],
      printable: true,
      updated: '2026-09-28',
    },
  ],
  steps: [
    {
      title: 'Rules for keys and alarm',
      text: 'Once you have accepted the quote, we agree how keys are handed over and kept, how the alarm system is handled and, if you wish, a non-disclosure agreement.',
    },
    {
      title: 'First visit',
      text: 'The team that will come to you from now on works to the care instructions gathered on the walk-through from day one.',
    },
    {
      title: 'Ongoing care',
      text: 'The team comes at the agreed times and, while you are away, for checks as well. If your plans change, for example before an event or a trip, we adjust the visits.',
    },
  ],
  faq: [
    {
      question: 'What does the price for looking after a villa depend on?',
      answer:
        'There is no flat rate, because houses differ greatly. The work involved depends mainly on the living space and the number of rooms, the share of delicate surfaces such as natural stone, high-gloss finishes and oiled parquet, and the frequency: weekly, monthly or only before events. Extras such as checks while you are away come on top. We give you the price after the walk-through, for your house specifically.',
    },
    {
      question: 'What do you need from us before the first visit?',
      answer:
        'Access to the house, the rules for the alarm system, any care instructions for floors, stone and kitchen, and a person who hears about anything we notice. You will find the printable list further up under «Before the first visit».',
    },
    {
      question: 'Who comes into our house?',
      answer:
        'A dedicated team assigned to your home, which knows the rules for keys and alarm agreed with you. Everyone on the team has been vetted by us.',
    },
    {
      question: 'Can we specify the care products?',
      answer:
        'Yes. If the manufacturer of your floors, kitchen or taps recommends particular products, we work with them. On the list for the first walk-through you can also note products you prefer or rule out.',
    },
    {
      question: 'Do you also clean before and after a reception?',
      answer:
        'Yes, in addition to the regular care and at weekends too. Tell us the date, the approximate number of guests and the rooms that will be used.',
    },
    {
      question: 'How do we find out which stone was used in our house?',
      answer:
        'Most reliably from the construction documents or the stone supplier, who according to the Swiss natural stone association can also name the right cleaning method. If the information is missing, a test in a hidden spot shows whether the stone is sensitive to acid. Because the test roughens the spot, it should be done by a specialist.',
    },
    {
      question: 'Why is the stone floor lighter under the rug than in the walkway?',
      answer:
        'This is part of the patina of use described by the Swiss natural stone association: the finest pores fill with dust and some colour particles in the stone fade. Less dust and light reach the stone under furniture and rugs, so it stays lighter there, while heavily used areas turn darker. Even a deep clean generally does not remove this patina completely. If only part of the floor is cleaned intensively, new differences in brightness can even appear.',
    },
  ],
  related: [
    { path: '/premium/yacht', text: 'If a boat comes with the house by the lake: teak, gelcoat and upholstery at the mooring.' },
    { path: '/leistungen/umzugsreinigung', text: 'When moving out or selling: the final clean before handover, for villas also for private individuals.' },
    { path: '/premium', text: 'All premium services, from second homes to family offices, on one page.' },
  ],
  cta: {
    title: 'Arrange a walk-through of your home',
    text: 'For the quote we need the location, the approximate living space and number of rooms, any special materials you know of, and whether it is about regular care, a second home or a single event. We do the walk-through with you, your property manager or your estate agent, under confidentiality if you wish. The walk-through and the quote cost you nothing and commit you to nothing.',
  },
}

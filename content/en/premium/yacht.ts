import type { ServicePageContent, Source } from '../../types'

/** Yacht and boat (E85): same keys and statements as content/de/premium/yacht.ts, sources checked 28.09.2026 */
const sources = {
  sika: { label: 'Sika Marine Application Guide: Teak Decking, Maintenance and Repair (2017)', href: 'https://gbr.sika.com/dms/getdocument.get/5f0d4442-0769-310e-8a04-89d6f3cb5c90/Marine%20Application%20Guide_12_Teak%20Decking_Maintenance_and_Repair.pdf' },
  hallbergRassy: { label: 'Hallberg-Rassy: Teak deck', href: 'https://shop.hallberg-rassy.com/deck-hull-mooring/teak.html' },
  axopar: { label: 'Axopar Owner’s Manual, 7.1 Cleaning and maintaining the gelcoat surface', href: 'https://manuals.axopar.com/content/p7len/2.0.1.0/en/189.html' },
  iser: { label: 'Informationsstelle Edelstahl Rostfrei: leaflet 824 on cleaning stainless steel (2024, in German)', href: 'https://www.edelstahl-rostfrei.de/fileadmin/user_upload/ISER/images/publikationen/iser_MB824_2025.pdf' },
  roehm: { label: 'Röhm: cleaning and disinfecting PLEXIGLAS (211-13, in German)', href: 'https://www.plexiglas.de/files/plexiglas-content/pdf/technische-informationen/211-13-Reinigen-und-Desinfizieren-von-PLEXIGLAS.pdf' },
  sunbrella: { label: 'Sunbrella: Clean Sunbrella Marine Upholstery', href: 'https://www.sunbrella.com/clean-sunbrella-marine-upholstery' },
  meteo: { label: 'MeteoSwiss: review of the 2022 pollen season (in German)', href: 'https://www.meteoschweiz.admin.ch/ueber-uns/meteoschweiz-blog/de/2022/8/pollensaison-2022-der-rueckblick.html' },
  gschg: { label: 'Federal Act on the Protection of Waters (WPA, SR 814.20), Art. 6 Principle', href: 'https://www.fedlex.admin.ch/eli/cc/1992/1860_1860_1860/en#art_6' },
  bsv: { label: 'Inland Navigation Ordinance (BSV, SR 747.201.1), Art. 10 and 108 (in German)', href: 'https://www.fedlex.admin.ch/eli/cc/1979/337_337_337/de#art_10' },
  hafenLuzern: { label: 'Bootshafen Luzern: harbour regulations, valid since 1 April 2024 (in German)', href: 'https://bootshafen-luzern.ch/hafenreglement/' },
  hafenKehrsiten: { label: 'Bootshafen Hostatt, Kehrsiten: harbour rules of 1 January 2018, section 10 (in German)', href: 'https://s9de133486e03e91b.jimcontent.com/download/version/1466356984/module/10266661993/name/Hafenordnung.pdf' },
  smrv: { label: 'Canton of Lucerne: explanatory notes on the boat reporting and cleaning ordinance (SMRV), 17 March 2026 (in German)', href: 'https://lawa.lu.ch/-/media/LAWA/Dokumente/njf/lebensraeume/neobiota/Schiffe/Erlaeuterungen_zur_Verordnung.pdf?rev=d06e1b64f51c48c9a2ef5613ea8ef1ce' },
  smrp: { label: 'Umwelt Zentralschweiz: FAQ on the boat reporting and cleaning obligation (in German)', href: 'https://www.umwelt-zentralschweiz.ch/was-wir-machen/themen/gebietsfremde-arten/aquatische-neobiota/faq-schiffsmelde-und-reinigungspflicht/' },
  zug: { label: 'Canton of Zug: boat cleaning obligation (in German)', href: 'https://zg.ch/de/natur-umwelt-tiere/arten-und-lebensraeume/artenmanagement-gewaesser/schiffsreinigungspflicht' },
} satisfies Record<string, Source>

export const yacht: ServicePageContent = {
  path: '/premium/yacht',
  area: 'premium',
  h1: 'Boat cleaning and yacht cleaning at your mooring',
  lead: [
    'Pollen, bird droppings and damp take their toll on a boat on the lake every season. We clean it where it lies, at the jetty or in the harbour, inside and out.',
    'Whatever runs off the deck ends up in the lake. So before the first visit, please have the harbour rules for your mooring and your builder’s care instructions to hand.',
  ],
  facts: [
    { label: 'Where', value: 'At your mooring, on Lake Lucerne and Lake Zug' },
    { label: 'Working hours', value: 'Also in the evening, at weekends and when you are not on board' },
    { label: 'Frequency', value: 'Once before an occasion or regularly until winter storage' },
    { label: 'Not included', value: 'Underwater hull, antifouling, engine and on-board systems' },
  ],
  sections: [
    {
      title: 'Why a boat is cleaned differently from a house',
      paragraphs: [
        'A boat is built from materials you rarely find in a house. Teak has soft fibres that hard brushes and pressure washers pull out: the deck turns rough and wears out before its time. Gelcoat loses its shine through sun and unsuitable cleaners, and stainless steel starts to rust when steel wool or chlorine-based products are used.',
        'Household cleaners are therefore usually the wrong choice on board. And what helps one material can harm the next: a mildly acidic cleaner removes surface rust from the rail, while acids can damage the gelcoat right beside it.',
      ],
    },
    {
      title: 'On the lake, many things are different',
      paragraphs: [
        'Lake Lucerne and Lake Zug have none of the salt that attacks fittings at sea. Instead, the shore brings other things on board: yellow pollen from conifers in spring, plus leaves, cobwebs and bird droppings, above all at moorings under trees. In the closed saloon the damp lingers, and cushions and upholstery develop mildew spots.',
        'And there is water all around. Which products are allowed at the jetty is set by law and by the harbour rules; the overview further down lists the rules with their sources. We use environmentally friendly products on request, and even those belong on deck only sparingly.',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'materialien',
      title: 'Teak, gelcoat, stainless steel: what helps and what harms',
      intro: 'These points come from care instructions issued by manufacturers and specialist bodies. If your boat’s builder has issued its own instructions, they take precedence.',
      columns: ['Material', 'How to clean it', 'What harms it'],
      rows: [
        [
          'Teak deck',
          'With a sponge or soft brush along the grain, using a mild teak cleaner, then rinse thoroughly with clean water. Working along the grain is recommended by Sika, a maker of teak deck systems, and by the Hallberg-Rassy yard.',
          'Pressure washers and hard brushes wear away the soft fibres, and the planks become thinner. According to Sika, bleach, strong acids and aggressive chemicals should never be used on the deck.',
        ],
        [
          'Gelcoat on deck and superstructure',
          'Wash with a cleaner made for boats, diluted as instructed, and a soft brush; rinse with clean water before and after.',
          'Household cleaners, chlorine and acids. Their pH value is wrong for the surface and can damage it.',
        ],
        [
          'Stainless steel on rails, cleats and fittings',
          'Wipe with a soft cloth in the direction of the polish lines. Remove surface rust early, for example with a mildly acidic stainless steel cleaner based on citric acid.',
          'Steel wool and wire brushes made of ordinary steel, scouring cream, products containing hydrochloric acid or chlorine. Iron particles from steel wool stay in the surface and start rust when damp.',
        ],
        [
          'Acrylic windows and hatches',
          'Clean with water, a little washing-up liquid and a soft, lint-free cloth, then wipe over once more with a slightly damp cloth.',
          'Wiping when dry, ordinary glass cleaners, products containing alcohol, solvents or thinners. They leave scratches or attack the acrylic.',
        ],
        [
          'Cushions and upholstery in outdoor fabric',
          'Brush off loose dirt, clean with a mild soap solution and a soft brush, rinse out all soap residue and leave to air dry.',
          'Bleach at the mooring: it can harm the environment, so the fabric maker Sunbrella advises against it when there is water nearby. It can also discolour fabrics from other makers. Dirt that is left in place: mildew grows on it.',
        ],
      ],
      note: 'If a teak deck stays wet for longer in certain places after wet cleaning, or the wood discolours there, a seam may be leaking. That is a job for the boatyard.',
      sources: [sources.sika, sources.hallbergRassy, sources.axopar, sources.iser, sources.roehm, sources.sunbrella],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'timeline',
      id: 'saisonkalender',
      title: 'Season calendar for your boat',
      intro: 'Which cleaning is due when on the lake. The months are a guide; flowering and weather shift from year to year.',
      entries: [
        {
          label: 'March and April',
          text: 'Before the first outing: air and clean the saloon and cabins, check cushions from winter storage for mildew spots, get the deck, gelcoat and windows ready for the season.',
        },
        {
          label: 'April and May',
          text: 'Spruce and pine are in flower. Their pollen settles as a yellow film on the deck, the cushions and the water. If the boat lies under trees, cleaning more often during these weeks pays off.',
        },
        {
          label: 'June to August',
          text: 'High season with outings and guests on board. In its owner’s manual, the boat builder Axopar recommends washing the boat after every trip, and every week if it lies outside without a cover.',
        },
        {
          label: 'September and October',
          text: 'End of season: clean thoroughly and let everything dry before the boat is laid up for winter. A plastic sheet as a cover traps moisture; a fabric tarpaulin is better.',
        },
        {
          label: 'Before moving to another lake',
          text: 'If the boat goes into a different lake after winter storage, plan for reporting the move and for cleaning at an authorised cleaning station before it is launched.',
        },
      ],
      sources: [sources.meteo, sources.axopar],
    },
    {
      kind: 'table',
      id: 'regeln-am-see',
      title: 'What applies at the mooring',
      intro: 'Law, ordinance and harbour rules determine what may enter the water during cleaning. This overview summarises the rules and is not legal advice; in individual cases the exact wording counts.',
      columns: ['Rule', 'What it requires', 'What it means for cleaning'],
      rows: [
        [
          'Waters Protection Act, Art. 6',
          'It is prohibited to introduce into a body of water, directly or indirectly, any substances which may pollute it.',
          'Any product used on deck can run into the lake with the rinsing water. So use as little as possible, and only what suits the material.',
        ],
        [
          'Inland Navigation Ordinance, Art. 10',
          'Navigation is subject to the same ban. If substances that endanger water, such as oil or fuel, get into the water and the skipper cannot remove the danger himself, he must notify the police without delay.',
          'Do not simply rinse away an oil film in the bilge or fuel traces on the hull; report them to the owner.',
        ],
        [
          'Inland Navigation Ordinance, Art. 108',
          'Boats with living, cooking or sanitary facilities must have tanks for sewage, waste water and rubbish that can be emptied ashore.',
          'Cleaning water from the heads and the galley belongs in these tanks or ashore, not overboard.',
        ],
        [
          'Harbour rules',
          'Each harbour regulates washing at the berth itself, and some are stricter than others. Bootshafen Luzern bans environmentally harmful products, while Bootshafen Hostatt in Kehrsiten bans cleaning agents and steam cleaners altogether.',
          'The harbour rules for your mooring set out which products are allowed at the jetty. Where they ban cleaning agents altogether, as in Kehrsiten, only clean water is left for washing at the berth.',
        ],
        [
          'Boat reporting and cleaning obligation',
          'Before a registered boat moves to another body of water, such as a different lake, the move must be reported and the boat cleaned by an authorised cleaning station. It may only be launched in the new body of water once it has been cleared. The reason is the quagga mussel, first found in Lake Lucerne in summer 2024.',
          'This applies in all cantons of Central Switzerland, and in Lucerne under its own ordinance since 1 April 2026. Letting the boat dry does not count as cleaning, and cleaning at the mooring does not replace it.',
        ],
      ],
      sources: [sources.gschg, sources.bsv, sources.hafenLuzern, sources.hafenKehrsiten, sources.smrv, sources.smrp, sources.zug],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'erster-einsatz',
      title: 'Before the first visit to your mooring',
      intro: 'With this information, the first appointment at the jetty is short. Print the list or pass it on to your skipper.',
      groups: [
        {
          title: 'Boat',
          items: [
            'Builder, model and length',
            'Care instructions from the builder or the deck manufacturer, if available',
            'Materials on board: teak, gelcoat, stainless steel, acrylic, leather or outdoor fabric',
            'Known damage, such as open seams in the teak or cracks in the gelcoat',
            'Lockers and areas we should not open',
          ],
        },
        {
          title: 'Mooring',
          items: [
            'Harbour, jetty and berth number',
            'Harbour rules on washing at the berth',
            'Water and electricity at the jetty',
            'Access road and parking near the jetty',
            'Disposal in the harbour: rubbish, pump-out for sewage and bilge',
          ],
        },
        {
          title: 'Access',
          items: [
            'Key, badge or code for the gate and jetty',
            'Who opens the boat when you are not there',
            'Alarm system on board, if there is one',
          ],
        },
        {
          title: 'Dates',
          items: [
            'Planned outings and weekends with guests',
            'Dates for lifting out and for winter storage',
            'Contact person at the lake: you, your skipper or the harbour master',
          ],
        },
      ],
      printable: true,
      updated: '2026-09-28',
    },
  ],
  scope: {
    title: 'Scope of the boat cleaning',
    intro: 'At your mooring:',
    items: [
      'Deck and teak surfaces',
      'Gelcoat on deck and superstructure',
      'Windows and glass',
      'Upholstery, cushions and textiles',
      'Saloon, cabins and galley',
      'Heads and showers',
    ],
    notIncluded: [
      'Underwater hull and antifouling. That is work for the boatyard.',
      'Technical maintenance of the engine and on-board systems, including winterising the engine.',
      'Repairs to the deck, seams or gelcoat.',
      'The mandatory cleaning before a move to another lake. That is a matter for an authorised cleaning station.',
    ],
  },
  steps: [
    {
      title: 'Keys and access',
      text: 'You decide how we get on board: with a key, with a badge for the jetty or through a person who opens the boat. Fixed rules apply to this, including while you are away.',
    },
    {
      title: 'A permanent team',
      text: 'Your boat is looked after by a permanent team. If the berth, the badge or the person who opens the boat changes, let us know before the next visit.',
    },
  ],
  faq: [
    {
      question: 'What does cleaning a boat cost?',
      answer:
        'The work involved depends above all on the length and layout of the boat, that is, whether it is an open motorboat or a yacht with a saloon, cabins and heads. Other factors are the area of teak, the condition, whether we clean inside, outside or both, how often we come and how easily equipment can be brought to the mooring. We give you a price once we have seen the boat.',
    },
    {
      question: 'How often does a boat at its mooring need cleaning?',
      answer:
        'Location and use are what matter. Under trees and during the flowering season in April and May, a boat gets dirty faster than at an open jetty. For the high season a fixed rhythm makes sense, such as once a week or before weekends with guests. What one boat builder recommends is given in the season calendar above.',
    },
    {
      question: 'Is a grey teak deck dirty?',
      answer:
        'Not necessarily. In the sun, teak weathers over time to a silver-grey patina, and some owners want exactly that colour. The deck becomes rough and blotchy, on the other hand, from hard brushes, pressure washers or aggressive products. If it is to keep its original shade, it needs teak care products that suit the deck and its seams.',
    },
    {
      question: 'What helps against mildew spots in the saloon?',
      answer:
        'Air and dryness. Let cushions and upholstery dry completely after cleaning, do not leave dirt in place, because mildew grows on it, and do not wrap the boat airtight in plastic sheeting over winter. For stubborn mildew stains the fabric maker Sunbrella recommends a solution with bleach, but advises against it when there is water nearby. According to Sunbrella, removable covers can also go in the washing machine on a cold wash.',
    },
    {
      question: 'Do we need to be on board while you clean?',
      answer:
        'No. You need not be at the jetty or on board. Who opens the boat and locks it again is agreed with you once and then applies to every visit.',
    },
    {
      question: 'Can you clean our boat for a move to another lake?',
      answer:
        'No. Before a boat moves to a different lake, the cantons of Central Switzerland require cleaning by an authorised cleaning station, usually a boatyard. You report the move online to Umwelt Zentralschweiz and receive clearance for the new lake after the cleaning. Our cleaning at the mooring does not replace it.',
    },
  ],
  related: [
    { path: '/premium/luxusimmobilien', text: 'If a house or second home by the lake goes with the boat and should be ready before you arrive.' },
    { path: '/premium/privatjet', text: 'If you would also like the cabin of your private jet cleaned between two flights.' },
    { path: '/premium', text: 'Everything our premium line offers, from the non-disclosure agreement to the permanent team.' },
  ],
  cta: {
    title: 'Request a quote for your boat',
    text: 'Tell us the make, model and length, the harbour or jetty and whether we should clean inside, outside or both, together with your preferred dates in the season. Once we have seen the boat at its mooring, we will send you the quote, free of charge and without obligation.',
  },
}

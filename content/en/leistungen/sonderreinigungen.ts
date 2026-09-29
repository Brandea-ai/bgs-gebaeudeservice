import type { ServicePageContent, Source } from '../../types'

// Same structure and keys as content/de/leistungen/sonderreinigungen.ts. The sources are the
// Swiss originals (mostly in German), checked on 28.09.2026.

const nvs: Source = {
  label: 'Swiss Natural Stone Association NVS: data sheet on cleaning natural stone floors (January 2018, in German)',
  href: 'https://nvs.ch/fileadmin/user_upload/nvs/1_Dienstleistungen/Technische_Merkblaetter/15_MB_Reinigung_von_Naturstein_Belaegen.pdf',
}
const ceruniqStein: Source = {
  label: 'Ceruniq (Swiss tiling association): care instructions for natural stone (February 2025, in German)',
  href: 'https://www.ceruniq.ch/wp-content/uploads/2025/03/reinigungs-und-pflegeanleitung-fuer-natursteinbelaege.pdf',
}
const ceruniqKeramik: Source = {
  label: 'Ceruniq: cleaning and care instructions for ceramic floors and walls (February 2025, in German)',
  href: 'https://www.ceruniq.ch/wp-content/uploads/2025/03/reinigungs-und-pflegeanleitung-fuer-keramische-belaege.pdf',
}
const ceruniqErst: Source = {
  label: 'Ceruniq: first cleaning of ceramic tiles with cement grout (February 2025, in German)',
  href: 'https://www.ceruniq.ch/wp-content/uploads/2025/03/erstreinigung-fuer-keramische_belaege.pdf',
}
const isp: Source = {
  label: 'ISP Swiss parquet association: care instructions for oiled and sealed parquet (in German)',
  href: 'https://www.parkett-verband.ch/de/Parkett/Parkett-ABC-und-Pflegeanleitungen',
}
const forboLinoleum: Source = {
  label: 'Forbo Flooring: cleaning and care recommendation for Marmoleum with Topshield Pro (03/2022, in German)',
  href: 'https://forbo.blob.core.windows.net/forbodocuments/9597/Forbo_Linoleum_Reinigung-Pflege_202204.pdf',
}
const forboVinyl: Source = {
  label: 'Forbo Flooring: cleaning and care recommendation for Allura vinyl design floors (in German)',
  href: 'https://forbo.blob.core.windows.net/forbodocuments/711557/Forbo_Allura-Designbelage_Reinigung-Pflege_202001.pdf',
}
const bag: Source = {
  label: 'Federal Office of Public Health FOPH: ‘Vorsicht Schimmel’, guidance on mould (August 2023, in German)',
  href: 'https://www.bag.admin.ch/dam/de/sd-web/wBJWq1KVfpS-/vorsicht-schimmel.pdf',
}
const or257h: Source = {
  label: 'Swiss Code of Obligations, Art. 257h para. 3 (notice of work on the rented property)',
  href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/en#art_257_h',
}

export const sonderreinigungen: ServicePageContent = {
  path: '/leistungen/sonderreinigungen',
  area: 'leistungen',
  eyebrow: 'Deep cleaning by floor type',
  h1: 'Deep cleaning and special cleaning for properties and businesses',
  lead: [
    'The stairwell, the office floor or the washroom no longer look clean, even though they are cleaned regularly: the grout is grey, old layers of floor care stick to the surface, limescale sits on the taps. A deep clean removes all of that, with products that suit the floor.',
    'We carry it out for property managers, communities of condominium owners, owners and businesses. On this page you will find what each floor can take, how to tell dirt from damage, and templates for preparation, the notice to tenants and the final check.',
  ],
  facts: [
    { label: 'When', value: 'One-off or at longer intervals, often between two tenancies or uses' },
    { label: 'While we work', value: 'Floors wet, areas closed off section by section' },
    { label: 'Your part', value: 'Clear the floors, switch off underfloor heating, inform tenants' },
    { label: 'Not included', value: 'Sanding, sealing, regrouting and repairs' },
  ],
  sections: [
    {
      title: 'What regular cleaning can no longer remove',
      paragraphs: [
        'Maintenance cleaning picks up the dirt of the last few days. What builds up over months stays: care products applied layer upon layer that trap dirt, limescale on taps, grey grout, sticky walkways.',
        'A deep clean strips these layers until the original surface is exposed again. It makes most sense in these cases:',
      ],
      items: [
        'Office or commercial space between two tenancies',
        'After a long vacancy or a period of heavy use',
        'Before new [maintenance cleaning](/leistungen/unterhaltsreinigung) starts, so that it begins from a clean baseline',
        'When floors look dull despite care and the grout is darker than in protected spots',
      ],
    },
    {
      title: 'Washrooms: limescale, urine scale and grout',
      paragraphs: [
        'Washrooms often need special cleaning. It tackles specific, stubborn soiling rather than the whole surface, here mainly limescale and urine scale.',
        'Both are removed with acidic products, and these attack cement grout. That is why tiles and joints are soaked with water first, the product only acts briefly, and everything is rinsed several times with clean water at the end. Marble, limestone and travertine must not come into contact with acid at all, not even after soaking.',
        'The joints in front of toilets and urinals need work by hand with a brush, because a machine cannot reach the edges. Black spots in silicone joints are a different matter: that is mould inside the material, and the joint has to be replaced.',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'bodenbelaege',
      title: 'Which floor can take which cleaning',
      intro:
        'In a deep clean, the product decides the outcome: what dissolves limescale on granite etches marble. The table sums up the recommendations of the Swiss trade associations and the manufacturers.',
      columns: ['Floor', 'What matters', 'What causes damage'],
      rows: [
        [
          'Marble, limestone, travertine',
          'pH-neutral or mildly alkaline products, then rinse thoroughly and vacuum up all the dirty water.',
          'Any acid, including vinegar, citric acid and acidic bathroom or sanitary cleaners: it etches the surface. Pads can scratch polished stone.',
        ],
        [
          'Granite, gneiss, quartzite',
          'Acid-resistant, all cleaning methods are possible, including removing limescale with acidic products.',
          'Hydrochloric and sulphuric acid discolour the stone. Cement joints next to it still need protecting by soaking them first.',
        ],
        [
          'Ceramic and porcelain tiles with cement grout',
          'Loosen grease and old care products with an alkaline cleaner, limescale with a sanitary cleaner. Always soak first, let it act briefly, rinse several times with clean water. Switch off underfloor heating completely beforehand.',
          'Acidic products on dry joints: they attack the grout and can damage dark or coloured joints. Too much cleaner with care additives leaves permanent stains on the surface.',
        ],
        [
          'Linoleum',
          'Cleaners below pH 9. Forbo supplies its linoleum with a factory-applied protective finish that must be neither removed nor damaged during cleaning.',
          'Strongly alkaline solutions, acids, sanitary cleaners, scouring powder and strong solvents.',
        ],
        [
          'Plastic floors (PVC, vinyl)',
          'Before a new coating, scrub by machine with a stripper suitable for vinyl and rinse with clean water. The floor must be free of residue and completely dry.',
          'Scouring powder, acids, sanitary cleaners and strong solvents.',
        ],
        [
          'Parquet, sealed',
          'Wipe only with a well wrung-out cloth, with a neutral cleaner if needed. Cleaning machines only with the manufacturer’s approval.',
          'Wet cleaning, steam devices and abrasive cleaners.',
        ],
        [
          'Parquet, oiled',
          'Clean with the products of the oil system used, then re-oil regularly.',
          'Steam cleaners, abrasive cleaners and microfibre cloths not approved for parquet.',
        ],
      ],
      note:
        'The floor manufacturer’s care instructions are what count. If the floor is unknown, a trial on an inconspicuous spot comes before any deep clean. For natural stone, the NVS also recommends a preliminary test of whether the stone can take acid.',
      sources: [nvs, ceruniqStein, ceruniqKeramik, ceruniqErst, forboLinoleum, forboVinyl, isp],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'schaden-oder-schmutz',
      title: 'Dirty or damaged?',
      intro:
        'A deep clean removes dirt, not damage. Use this table on your walk-through to judge whether cleaning will help or whether the job belongs with another specialist.',
      columns: ['What you see', 'Usual cause', 'What helps'],
      rows: [
        [
          'Dull, rough patches on polished marble or limestone',
          'Acid has etched the surface, for example vinegar, lemon juice or a descaler.',
          'Grinding and polishing by a natural stone specialist. Cleaning will not bring the shine back.',
        ],
        [
          'Grey cement grout, firm and without cracks',
          'Grease, dirt and care product residue in the surface of the joint.',
          'Deep clean with an alkaline cleaner, soaking the joints first.',
        ],
        [
          'Grout that is sandy, crumbling or missing in places',
          'The grout has been attacked, for example by acidic products used without soaking first.',
          'Regrouting by a tiler. A deep clean can make the damage worse.',
        ],
        [
          'Black spots in silicone joints around the shower, bath or kitchen',
          'Mould inside the sealant.',
          'Have the sealant removed and renewed by a specialist, and check the cause of the damp.',
        ],
        [
          'Walkways on natural stone darker than the edges',
          'Patina from use: the finest pores are filled with dust.',
          'Even a deep clean generally does not remove it completely. Always clean whole areas, otherwise differences in brightness appear.',
        ],
        [
          'Parquet grey, rough or bare in the walkways',
          'The seal or the oil layer is worn.',
          'Parquet specialist: depending on the surface, re-oil or sand and reseal.',
        ],
      ],
      note:
        'Record such spots before the cleaning, ideally with photos. That way it is clear later what was there beforehand.',
      sources: [nvs, ceruniqStein, ceruniqKeramik, bag, isp],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'checkliste-grundreinigung',
      title: 'Checklist for preparation and final check',
      intro:
        'For the property manager, caretaker or facility management: what should be done before the date and how to check the result.',
      groups: [
        {
          title: 'Before the date',
          items: [
            'Note the floor type in each room, find the care instructions from the building handover',
            'Record known damage with photos: etched spots, loose grout, worn parquet',
            'Inform tenants or staff in good time, for example with the notice below',
            'Have underfloor heating in the rooms concerned switched off completely',
            'Arrange access for the day, keep water, a sink and sockets accessible',
            'Clear the floors the day before. Move large furniture or deliberately leave it in place: the area underneath then stays uncleaned',
          ],
        },
        {
          title: 'At the final check',
          items: [
            'Grout is free from removable dirt. Cleaning cannot always remove permanent discolouration',
            'No limescale edges on taps, shower screens and wall tiles',
            'No haze under raking light: shine a torch flat across the floor',
            'No sticky patches and no white rims of product residue in corners',
            'Skirting boards, doors and door frames have been cleaned too',
            'No new dull spots on stone, silicone and grout undamaged',
          ],
        },
      ],
      sources: [or257h, ceruniqErst],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'text',
      id: 'aushang',
      printable: true,
      printHeader: false,
      updated: '2026-09-29',
      title: 'Template: notice for tenants',
      paragraphs: [
        'Heading: Deep cleaning of the stairwell',
        'On [date] between [time] and [time] the stairwell [and the laundry room] will be deep cleaned. During this time the floors will be wet and some sections briefly closed. You can reach the flats, letterboxes and lift via [state a dry route].',
        'Please put shoes, bicycles, prams and plants in your flat or in the cellar by the evening before. Anything left in the stairwell cannot be cleaned.',
        'Questions: [property management, name, telephone].',
      ],
      note:
        'The Code of Obligations requires landlords to give tenants timely notice of work on the rented property and to take their interests into account when carrying it out. Whether cleaning falls under this is a matter for the individual case. A notice is the simple way.',
      sources: [or257h],
    },
  ],
  scope: {
    title: 'What the deep clean covers',
    intro:
      'You decide which areas; we clean them once or at longer intervals. For glass and facades there is [window and facade cleaning](/leistungen/fenster-und-fassadenreinigung), for new buildings [post-construction cleaning](/leistungen/baureinigung).',
    items: [
      'Floors: ingrained dirt and residue of old care products, method according to the floor type',
      'Joints between floor and wall tiles',
      'Washrooms: limescale and urine scale on toilets, urinals, washbasins, taps and tiles',
      'Kitchens and kitchenettes: grease on cabinet fronts, worktops and wall tiles',
      'Skirting boards, doors and door frames',
      'Stairwells, entrances and laundry rooms in properties with tenants',
    ],
    notIncluded: [
      'Grinding, polishing and sealing stone or parquet: that is work for a natural stone specialist or a parquet layer.',
      'Regrouting and replacing silicone joints.',
      'Ongoing care afterwards: that is what [maintenance cleaning](/leistungen/unterhaltsreinigung) is for.',
      'Final cleaning when a flat is handed back: a separate service, [end-of-tenancy cleaning](/leistungen/umzugsreinigung).',
    ],
  },
  steps: [
    {
      title: 'Prepare',
      text: 'You work through the checklist above and put up the notice in good time.',
    },
    {
      title: 'Clean',
      text: 'Room by room: apply the product to suit the floor and let it act, loosen by machine and by hand at the edges, vacuum up the dirty water, rinse with clean water.',
    },
    {
      title: 'Handover',
      text: 'After the work, we hand over the areas. Check them with the checklist and only put furniture and equipment back once the floor is dry.',
    },
  ],
  faq: [
    {
      question: 'What does a deep clean cost?',
      answer:
        'The price depends mainly on the area, the floor type and the condition: how many layers of care product and how much limescale have to be removed. Then there is the share of hand work on joints, corners and washrooms, the working time, for example at a weekend, and how clear the rooms are. We look at these points on site and then give you a price for your property.',
    },
    {
      question: 'How long can the rooms not be used?',
      answer:
        'During the cleaning and until the floor is dry. How long that takes depends on the area, the floor and the ventilation. In stairwells the work can be done section by section, so that a route stays free. For offices and practices, weekends and company holidays work well.',
    },
    {
      question: 'Which products are suitable for marble and other natural stone?',
      answer:
        'For marble, limestone and travertine, pH-neutral or mildly alkaline products, never acid. Even vinegar or a descaler etches the surface. Granite, gneiss and quartzite can also take acidic products. If nobody knows which stone was laid, the preliminary test described by the Swiss Natural Stone Association helps: if a drop of acid fizzes on a hidden, lightly roughened spot, the stone cannot take acid.',
    },
    {
      question: 'What if the floor is damaged rather than dirty?',
      answer:
        'Then cleaning only brings part of it back. Etched marble needs grinding and polishing, worn parquet a parquet layer, washed-out grout a tiler. We tell you openly about anything we notice beforehand, so that you can hire the right trade. The table ‘Dirty or damaged?’ helps with a first assessment.',
    },
    {
      question: 'How often is a deep clean needed?',
      answer:
        'There is no fixed interval. For natural stone floors the Swiss Natural Stone Association gives monthly, every six months or yearly, depending on soiling and hygiene requirements. In your building the condition tells you: dark grout, dull walkways, marks on the skirting boards. Good regular cleaning and a mat at the entrance that holds back sand extend the interval.',
    },
    {
      question: 'Isn’t a more thorough maintenance clean enough?',
      answer:
        'Usually not, because the products are different. Maintenance cleaning works gently and often with care additives, and layers build up underneath over time. A deep clean strips these layers with stronger products and machines. Afterwards, [maintenance cleaning](/leistungen/unterhaltsreinigung) keeps the condition.',
    },
    {
      question: 'Can the wrong cleaning void the warranty?',
      answer:
        'It can. The cleaning instructions of the tiling association Ceruniq state that improper cleaning voids the warranty. The instructions provide for the tiler to enter the recommended cleaners, and for the first cleaning also the grout used. If you have the instructions from the building handover ready before the deep clean, you can see which products are intended for the floor.',
    },
  ],
  related: [
    { path: '/leistungen/unterhaltsreinigung', text: 'When the clean condition after the deep clean is to be kept on a fixed schedule.' },
    { path: '/leistungen/umzugsreinigung', text: 'When a flat has to be ready for handover between two tenancies, with a handover guarantee.' },
    { path: '/leistungen/baureinigung', text: 'When construction dust and tradespeople’s residue have to go after a new build or renovation.' },
  ],
  cta: {
    title: 'Request a deep clean',
    text: 'Give us the address, the areas with their approximate size, the floor types and your time window. You can send photos of floors and grout by e-mail afterwards. With these details we plan the site visit, which, like the quote, is free and without obligation.',
  },
}

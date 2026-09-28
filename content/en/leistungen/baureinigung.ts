import type { ServicePageContent } from '../../types'

// Translation of content/de/leistungen/baureinigung.ts (E85). Sources as in the German file,
// linked to the English fedlex versions (not legally binding) or the German and French SIGAB texts.
// Round 2 (review findings R1 to R6, BR-SO-1 to BR-SO-9): dispatch BBl 2022 2743, section 4.2
// (no English version, linked in German), SIGAB named as on sigab.ch.
export const baureinigung: ServicePageContent = {
  path: '/leistungen/baureinigung',
  area: 'leistungen',
  eyebrow: 'One-off and special cleaning',
  h1: 'Construction and post-construction cleaning for new builds and renovations',
  lead: [
    'Once the interior fit-out is finished, fine dust covers every surface, protective film is still stuck to windows and appliances, and mortar and paint splashes sit on glass and tiles. By the acceptance inspection, the building has to be ready for tenants, buyers or your team to move in on handover day.',
    'We clean in the stages your project needs: a rough clean after the shell, interim cleans before the fit-out and a thorough clean before handover. The jobs follow the site management’s schedule. That way the acceptance inspection starts on clean surfaces, where defects can actually be seen.',
  ],
  facts: [
    { label: 'For', value: 'Building owners, general contractors, architects and property managers' },
    { label: 'Stages', value: 'Rough clean, interim clean and post-construction clean, individually or together' },
    { label: 'Final clean', value: 'After the last trades, before the acceptance inspection' },
    { label: 'Needed on site', value: 'Access, electricity, water and space for equipment' },
    { label: 'Not included', value: 'Facade and ongoing cleaning after move-in' },
  ],
  scope: {
    title: 'What construction cleaning covers',
    intro:
      'Construction cleaning runs in stages, in step with the progress of the work. You can award all stages or only the post-construction clean before handover.',
    items: [
      'Rough clean after the shell: removing coarse dirt and dust from the floors of the building',
      'Interim cleans before floors are laid or kitchens installed',
      'Post-construction clean before the acceptance inspection, from top to bottom and in several passes where needed',
      'Removing construction dust and residue from windows, frames, window rebates and glass',
      'Removing protective film, labels, adhesive residue and mortar and paint splashes',
      'Cleaning floors, bathrooms and toilets, kitchens and built-in cupboards inside and out, ready for occupancy',
    ],
    notIncluded: [
      'The facade of the finished building is covered by our [window and facade cleaning](/leistungen/fenster-und-fassadenreinigung).',
      'After move-in, [maintenance cleaning](/leistungen/unterhaltsreinigung) takes over the regular cleaning.',
    ],
  },
  sections: [
    {
      title: 'Dust, film and splashes: what the post-construction clean deals with',
      paragraphs: [
        'Construction dust is fine and settles everywhere: on floors, in window rebates, on door frames, in cupboards and drawers. That is why cleaning runs from top to bottom, often in more than one pass, so that no dust falls onto surfaces that are already clean.',
        'Film, adhesive and dried-on splashes stick harder than dust. Each surface needs its own product and tool, because glass, stainless steel, taps and new floors should be handed over without scratches. The table further down shows what matters with glass.',
      ],
    },
    {
      title: 'Rough cleaning in the shell, so the fit-out starts clean',
      paragraphs: [
        'While the storeys are still empty, rubble and dust can be removed quickly and thoroughly. Floor layers, plasterers and kitchen fitters then start on a clean base, and with every work step less dust travels into the later stages.',
        'Every interim clean takes work off the post-construction clean. This matters most when only a few days separate the last trades from handover: the final clean then does not start from scratch.',
      ],
    },
    {
      title: 'Renovation in an occupied or working building',
      paragraphs: [
        'When pipe risers are replaced or a single floor is converted, the rest of the building stays in use. Every working day carries dust into the stairwell, the lift and up to the flat doors. An interim clean of these shared routes at a fixed rhythm keeps disruption for residents and staff to a minimum.',
        'The post-construction clean then follows stage by stage, as soon as the trades leave a flat or a section. Finished flats can be handed over before the whole renovation is complete.',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'bauablauf',
      title: 'Cleaning in the construction sequence',
      intro: 'Which clean comes when and who signs the area off for it, as a template for site management and tender.',
      columns: ['Stage', 'When in the build', 'What is cleaned', 'Signed off by'],
      rows: [
        [
          'Rough clean',
          'After the shell, before the interior fit-out begins',
          'Removing coarse dirt and dust from every storey',
          'Site management',
        ],
        [
          'Interim clean',
          'Before delicate work such as parquet, tiling or kitchen fitting',
          'Dust on floors, windows, installations and parts already fitted',
          'Site management',
        ],
        [
          'Post-construction clean',
          'At the end, once all trades have finished',
          'Everything ready for occupancy, top to bottom, often in several passes',
          'Site management or building owner',
        ],
        [
          'Follow-up clean',
          'When work continues after the final clean, for example to remedy defects',
          'Only the rooms in which trades worked after the final clean',
          'Site management',
        ],
      ],
      note: 'If trades are still working in the rooms after the post-construction clean, new dust is created. So keep a time slot free for follow-up cleans.',
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'ausschreibung',
      title: 'Tendering a post-construction clean: the details that make quotes comparable',
      intro: 'If every provider receives the same details, the quotes can be compared line by line. The list also works as a template for your enquiry to us.',
      groups: [
        {
          title: 'Property and areas',
          items: [
            'Property type, storeys and floor area',
            'Number of flats, offices or units',
            'Plans showing the rooms to be cleaned',
            'Natural stone, parquet or oiled floors',
            'Basement and car park: included or not',
          ],
        },
        {
          title: 'Glass and windows',
          items: [
            'Windows, glass doors and balustrades',
            'Glass at height, such as skylights',
            'Where toughened glass is fitted',
            'Blinds and roller shutters: included or not',
          ],
        },
        {
          title: 'Dates',
          items: [
            'Required stages with dates',
            'Handover and acceptance dates',
            'Time window before acceptance',
            'Reserve for a follow-up clean',
          ],
        },
        {
          title: 'Construction site',
          items: [
            'Site access, keys or badges',
            'Power, water, lift, room for equipment',
            'Site safety rules and a contact person',
            'Skips: who provides and who empties them',
          ],
        },
      ],
      note: 'The Waste Ordinance (ADWO) requires special waste to be disposed of separately and the remaining construction waste to be separated on site. Where this is not operationally possible, it must be separated in a suitable facility (Art. 17 ADWO). So also clarify where film and packaging from the cleaning should go.',
      sources: [
        { label: 'Waste Ordinance ADWO, Art. 17: separation of construction waste (English translation)', href: 'https://www.fedlex.admin.ch/eli/cc/2015/891/en#art_17' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'glas',
      title: 'New glass: what damages it and what the glass industry recommends',
      intro: 'Windows are often fitted months before handover and catch everything the construction site throws at them. The recommendations come from SIGAB, the technical office of the Swiss flat glass association SFV-ASVP.',
      columns: ['Situation', 'Why it is a problem', 'Recommendation'],
      rows: [
        [
          'Cement slurry, mortar or plaster on the pane',
          'They are highly alkaline and can etch the glass and make it cloudy. Heavy etching cannot be repaired, and the glass then has to be replaced.',
          'Remove immediately. Soak concrete residue first, then wipe it off carefully.',
        ],
        [
          'Dried-on construction dust',
          'Rubbing a damp cloth over dry dirt drags sharp grains across the pane and scratches it.',
          'Work with plenty of clean water: soak, loosen, rinse. Use microfibre cloths only with care.',
        ],
        [
          'Paint and mortar splashes',
          'If a blade or glass scraper is drawn over the whole pane, it rubs dirt particles into the glass. The result is a web of fine hairline scratches. Polishing would then have to cover the whole visible area and costs more than new glass.',
          'Use blades only on single spots and with great care, never over the whole surface.',
        ],
        [
          'Labels and adhesive tape',
          'Especially delicate on coated glass and in warm weather. Cleaners containing alkalis or acids can destroy the coating and the glass surface.',
          'Remove adhesive as soon as possible, carefully with isopropanol or acetone.',
        ],
        [
          'Toughened safety glass',
          'More sensitive to scratches than ordinary float glass, without being of lower quality. Under the product standards, toughened glass must not be worked after toughening, so it cannot be polished either.',
          'Clean with particular care.',
        ],
      ],
      note: 'According to many years of expert assessments by SIGAB, a large share of scratches is caused by improper post-construction cleaning, and they often only show when the sun is low. So look at the glazing together with the site management before the final clean and record any existing damage. Otherwise an expert report is often needed later to establish when a scratch appeared.',
      sources: [
        {
          label: 'SIGAB: dirty glass and incorrect cleaning cause damage (metall, April 2020, article in German and French)',
          href: 'https://www.sigab.ch/fileadmin/dam/upload/sigab/news/Fachartikel_DE/2020_04_Metall_Glaeser-im-Baualltag.pdf',
        },
        { label: 'SIGAB: cleaning windows without causing scratches (March 2021, in German)', href: 'https://www.sigab.ch/de/wissen/detail/fensterputzen-ohne-kratzer-zu-verursachen' },
      ],
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'uebergabe',
      title: 'Handover checklist for the post-construction clean',
      intro: 'For the walk-through before acceptance. Look at glass in daylight, also at an angle.',
      groups: [
        {
          title: 'Glass, windows and doors',
          items: [
            'Film, labels and adhesive removed',
            'Glass free of streaks and scratches',
            'Rebates and frames free of dust',
          ],
        },
        {
          title: 'Kitchen, bathroom and fittings',
          items: [
            'Taps and sanitary fittings free of mortar and paint residue',
            'Cupboards and drawers clean inside',
            'Tiles and joints free of residue',
          ],
        },
        {
          title: 'Floors and surfaces',
          items: [
            'Floors clean right into the corners',
            'No dust on window sills and doors',
            'Stairs and handrails free of dust',
          ],
        },
        {
          title: 'Before acceptance of the building',
          items: [
            'No trades left in the rooms',
            'Pre-existing damage recorded',
            'Defect list by room and component',
            'Notice period clarified (see note)',
          ],
        },
      ],
      note: 'The Code of Obligations provides that the building owner inspects the building after delivery and notifies the contractors of defects (Art. 367 CO). For construction contracts for buildings concluded on or after 1 January 2026, the period is at least 60 days, and for defects that only become apparent later it runs from their discovery (Art. 370 CO). For older contracts the previous law still applies, so give notice immediately. Clarify with your site management or legal adviser what your contract provides.',
      sources: [
        { label: 'Code of Obligations, Art. 367 and 370: inspection, notice of defects and approval (English translation)', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/en#art_367' },
        { label: 'Dispatch on construction defects, BBl 2022 2743, section 4.2: transitional law (in German)', href: 'https://www.fedlex.admin.ch/eli/fga/2022/2743/de' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
  ],
  steps: [
    {
      title: 'Stages in the schedule',
      text: 'Rough, interim and final cleans are entered with dates in the site management’s schedule. If the build is delayed, the jobs are rescheduled with the site management.',
      figure: 'start',
    },
    {
      title: 'Post-construction clean room by room',
      text: 'After the last trades, every room is cleaned from top to bottom, film and residue are removed, until the space is ready for occupancy.',
      figure: 'besichtigung',
    },
    {
      title: 'Acceptance on clean surfaces',
      text: 'You or your site management check with the handover checklist. Clean surfaces also reveal defects in the building that were hidden under the dust.',
      figure: 'offerte',
    },
  ],
  faq: [
    {
      question: 'What is the difference between construction cleaning, post-construction cleaning and a builders’ clean?',
      answer:
        'Construction cleaning is the umbrella term for all jobs on the site, from the rough clean after the shell to the interim cleans. The post-construction clean is the last, thorough clean before the acceptance inspection, after which the property is ready for occupancy. A final builders’ clean or sparkle clean are other names for the post-construction clean.',
    },
    {
      question: 'When does the post-construction clean belong in the schedule?',
      answer:
        'As soon as you know the handover date. It comes after the last trades and before the acceptance inspection, and it needs its own time slot. How long depends on the floor area, the share of glass and the number of passes.',
    },
    {
      question: 'How much does construction cleaning cost?',
      answer:
        'The effort depends mainly on the floor area and number of storeys, the share of glass and how high it is, the amount of film, adhesive and splashes, the number of stages and passes, the time window before handover, and electricity, water and a lift on site. With the tender checklist on this page you have the details together that we need for the quote.',
    },
    {
      question: 'Why does new glass sometimes have scratches after construction cleaning?',
      answer:
        'According to the glass experts at SIGAB, usually because of incorrect cleaning: a blade is drawn over the whole pane, or a cloth rubs over dried-on construction dust. Toughened safety glass is particularly sensitive to this. Such hairline scratches are often not noticed straight away, but only when the sun is low.',
    },
    {
      question: 'Who removes protective film, labels and adhesive residue?',
      answer:
        'That is part of the post-construction clean, using products that suit each surface. The table on new glass shows what to watch out for on glass. When you enquire, tell us which glass surfaces have labels or adhesive tape on them.',
    },
    {
      question: 'Construction cleaning or end-of-tenancy cleaning: which fits after a renovation?',
      answer:
        'If floors, the kitchen or the bathroom in a flat have been renewed, construction dust sits in window rebates, cupboards and on every surface, along with film and splashes: that calls for construction cleaning. If tenants move out without any renovation, [end-of-tenancy cleaning](/leistungen/umzugsreinigung) with a handover guarantee is the right service.',
    },
    {
      question: 'Are the windows part of the post-construction clean?',
      answer:
        'Yes, including frames, window rebates and glass. Regular care of glass and facade once the building is occupied is handled by our [window and facade cleaning](/leistungen/fenster-und-fassadenreinigung).',
    },
  ],
  related: [
    {
      path: '/leistungen/umzugsreinigung',
      text: 'When a flat passes to the next tenants without renovation and the final clean should come with a handover guarantee.',
    },
    {
      path: '/leistungen/fenster-und-fassadenreinigung',
      text: 'When the facade and glass surfaces of the finished building are to be cleaned regularly.',
    },
    {
      path: '/leistungen/unterhaltsreinigung',
      text: 'When the building is occupied and the stairwell, common areas or offices should stay clean on an ongoing basis.',
    },
  ],
  cta: {
    title: 'Enquire about a post-construction clean',
    text: 'Tell us the type of property, the floor area, the number of flats or units, the stages you need and the handover date. With these details we prepare the site visit, which, like the quote, is free of charge and non-binding.',
  },
}

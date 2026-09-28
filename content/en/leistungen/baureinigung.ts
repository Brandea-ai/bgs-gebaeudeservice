import type { ServicePageContent } from '../../types'

// Translation of content/de/leistungen/baureinigung.ts (E85). Sources as in the German file,
// linked to the English fedlex versions (not legally binding) or the German and French SIGAB texts.
export const baureinigung: ServicePageContent = {
  path: '/leistungen/baureinigung',
  area: 'leistungen',
  eyebrow: 'One-off and special cleaning',
  h1: 'Construction and post-construction cleaning for new builds and renovations',
  lead: [
    'Once the interior fit-out is finished, fine dust covers every surface, protective film is still stuck to windows and appliances, and mortar and paint splashes sit on glass and tiles. By the acceptance inspection, all of this has to become a property that tenants, buyers or your team can move into on handover day.',
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
      'Cleaning floors, sanitary rooms, kitchens and built-in cupboards inside and out, ready for occupancy',
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
        'Then there is protective film, labels, adhesive residue, mortar and paint splashes. Each surface needs its own product and tool, because glass, stainless steel, taps and new floors should be handed over without scratches. The table further down shows what matters with glass.',
      ],
    },
    {
      title: 'Rough cleaning in the shell, so the fit-out starts clean',
      paragraphs: [
        'Once the shell is weathertight, the rough clean removes coarse dirt and dust from the floors of the building. Floor layers, plasterers and kitchen fitters then start on a clean base, and less dust travels into the later stages.',
        'Before delicate work, an interim clean follows, for example before parquet is laid or the kitchen is fitted. Putting these jobs into the schedule early takes pressure off the end of the project: the post-construction clean does not start from scratch.',
      ],
    },
    {
      title: 'Renovation in an occupied or working building',
      paragraphs: [
        'When pipe risers are replaced or a single floor is converted, the rest of the building stays in use. Every working day carries dust into the stairwell, the lift and up to the flat doors. An interim clean of these shared routes at a fixed rhythm keeps the burden low for residents and staff.',
        'The post-construction clean then follows stage by stage, as soon as the trades leave a flat or a section. Finished flats can be handed over before the whole renovation is complete.',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'bauablauf',
      title: 'Cleaning in the construction sequence',
      intro: 'Which clean comes when, and who releases the area for it. To print for the site management or as a basis for the tender.',
      columns: ['Stage', 'When in the build', 'What is cleaned', 'Who releases'],
      rows: [
        [
          'Rough clean',
          'After the shell, before the interior fit-out begins',
          'Removing coarse dirt and dust from the floors of the building, so that the next work starts on a clean base',
          'Site management',
        ],
        [
          'Interim clean',
          'Before delicate work, for example before floors are laid or kitchens installed',
          'Dust on floors, windows, installations and parts already fitted',
          'Site management',
        ],
        [
          'Post-construction clean',
          'After the last trades have finished, before the acceptance inspection',
          'Everything ready for occupancy: top to bottom, film and residue removed, often in more than one pass',
          'Site management or building owner',
        ],
        [
          'Follow-up clean',
          'When work continues after the final clean, for example to remedy defects',
          'Only the rooms in which trades worked after the final clean',
          'Site management',
        ],
      ],
      note: 'If trades are still working in the rooms after the post-construction clean, new dust is created. So place the final clean after the last work and keep a time slot free for follow-up cleans.',
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
            'Type of property, number of storeys and floor area',
            'Number of flats, offices or units',
            'Floor plans or drawings showing the rooms to be cleaned',
            'Floor coverings, especially delicate ones such as natural stone, parquet or oiled floors',
            'Basement, underground car park, plant rooms and stairwells: included or not',
          ],
        },
        {
          title: 'Glass and windows',
          items: [
            'Number and type of windows, glass doors and glass balustrades',
            'Glass at height, such as skylights or glazing in the stairwell',
            'Where toughened safety glass has been fitted',
            'External blinds and roller shutters: included or not',
          ],
        },
        {
          title: 'Dates',
          items: [
            'Required stages with dates',
            'Handover date and date of the acceptance inspection',
            'Time window between the last trades and the acceptance inspection',
            'Reserve for a follow-up clean',
          ],
        },
        {
          title: 'Construction site',
          items: [
            'Vehicle access, site access and keys or badges',
            'Electricity, water, lift or builders’ hoist and space for equipment',
            'Site safety rules and a contact person on site',
            'Skips for waste: who provides them and who disposes of the waste',
          ],
        },
      ],
      note: 'The Waste Ordinance (ADWO) requires construction waste to be separated on site: special waste separately, and glass, metals, timber and plastics kept apart where possible (Art. 17 ADWO). So set out in the tender who provides the skips and where film and packaging from the cleaning should go.',
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
      intro: 'Windows are often fitted months before handover and catch everything the construction site throws at them. The recommendations come from SIGAB, the Swiss institute for glass in building.',
      columns: ['Situation', 'Why it is delicate', 'Recommendation'],
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
          'If a blade or glass scraper is drawn over the whole pane, it rubs dirt particles into the glass. The result is a web of fine hairline scratches.',
          'Use blades only on single spots and with great care, never over the whole surface.',
        ],
        [
          'Labels and adhesive tape',
          'Cleaners containing alkalis or acids can destroy the coating and the glass surface.',
          'Remove adhesive as soon as possible, especially on coated glass and in summer, carefully with isopropanol or acetone.',
        ],
        [
          'Toughened safety glass',
          'More sensitive to scratches than ordinary float glass, without being of lower quality. Toughened glass must not be worked after toughening, so scratches cannot be polished out.',
          'Clean with particular care and state in the tender where toughened glass has been fitted.',
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
      intro: 'For the walk-through before the acceptance inspection, room by room. Check in daylight and look at glass at an angle against the light as well.',
      groups: [
        {
          title: 'Glass, windows and doors',
          items: [
            'Protective film removed from windows, doors and appliances',
            'Labels and adhesive residue removed from glass, tiles and appliances',
            'Glass free of streaks, splashes and scratches, also checked at an angle against the light',
            'Window rebates, frames and door frames free of construction dust',
          ],
        },
        {
          title: 'Kitchen, bathroom and fittings',
          items: [
            'Taps and sanitary fittings free of mortar and paint residue',
            'Cupboards and drawers free of dust inside',
            'Built-in appliances clean inside and out, film removed',
            'Tiles and joints free of residue',
          ],
        },
        {
          title: 'Floors and surfaces',
          items: [
            'Floors clean, including corners and along the skirting boards',
            'No film of dust on window sills, doors and light switches',
            'Stairs, railings and handrails free of dust',
          ],
        },
        {
          title: 'Before the acceptance inspection',
          items: [
            'Final clean completed, no trades left in the rooms',
            'Damage that existed before the cleaning has been recorded',
            'List of defects prepared with room and component',
            'Deadline for notice of defects noted: 60 days for buildings',
          ],
        },
      ],
      note: 'The Code of Obligations provides that the building owner inspects the work after delivery and reports defects (Art. 367 CO). For buildings, the period for notice of defects has been 60 days since 1 January 2026, and a shorter period cannot be agreed. Defects that were not apparent at the acceptance inspection must be reported within 60 days of their discovery (Art. 370 CO). On clean surfaces, scratches, chips and stains are visible at the acceptance inspection itself. Clarify with your site management or legal adviser what your construction contract provides in detail.',
      sources: [
        { label: 'Code of Obligations, Art. 367: inspection of the work and notice of defects (English translation)', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/en#art_367' },
        { label: 'Code of Obligations, Art. 370: approval of the work (English translation)', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/en#art_370' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
  ],
  steps: [
    {
      title: 'Stages in the schedule',
      text: 'Rough, interim and final cleans are entered with dates in the site management’s schedule. If the build is delayed, the jobs move with it.',
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
        'As soon as you know the handover date. It comes after the last trades and before the acceptance inspection, and it needs its own time slot. How long depends on the floor area, the share of glass and the number of passes. Allow an extra reserve in case trades come back to remedy defects.',
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
        'That is part of the post-construction clean, using products that suit each surface. Adhesive on glass should come off as soon as possible, especially on coated glass and in summer. So when you enquire, tell us which glass surfaces have labels or adhesive tape on them.',
    },
    {
      question: 'What happens if trades return after the post-construction clean?',
      answer:
        'Then new dust is created and the rooms concerned need a follow-up clean, for example when defects are remedied after the acceptance inspection. So place the final clean after the last work wherever possible and reserve a time slot for follow-up cleans.',
    },
    {
      question: 'Construction cleaning or end-of-tenancy cleaning: which fits after a renovation?',
      answer:
        'If floors, the kitchen or the bathroom in a flat have been renewed, construction dust sits in window rebates, cupboards and on every surface, along with film and splashes: that calls for construction cleaning. If tenants move out without any renovation, [end-of-tenancy cleaning](/leistungen/umzugsreinigung) with a handover guarantee is the right service.',
    },
    {
      question: 'Are the windows part of the post-construction clean?',
      answer:
        'Yes. Windows, frames, window rebates and glass are part of the post-construction clean. The facade itself is covered by our [window and facade cleaning](/leistungen/fenster-und-fassadenreinigung).',
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

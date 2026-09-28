import { company } from '../../shared/company'
import type { RatgeberArtikel } from '../de/ratgeber'
import type { Source } from '../types'
import { cantons, languages, responseTime } from './common'

/**
 * English guides (M53, M60, E85). Faithful translation of content/de/ratgeber.ts:
 * general advice as such, statements about the company only as in E18. Sources
 * in English where Fedlex offers them, otherwise marked «in German».
 */

export const ratgeberUebersicht = {
  h1: 'Guides to building cleaning',
  intro:
    'Know-how for property managers, condominium owners’ associations and businesses: caretaking duties, flat handovers, floor coverings, choosing a cleaning company and what it costs.',
  note: `Each guide lists its sources and the date of its current version. By ${company.brand}, for properties and businesses in the cantons of ${cantons}.`,
  byline: `A guide by ${company.brand}`,
  updatedLabel: 'Last updated:',
  readMore: 'Read the article',
  publishedLabel: 'Published on',
  servicesTitle: 'Straight to our services',
  allServices: 'All services at a glance',
  allArticles: 'All guides',
  moreTitle: 'Read more',
  // Eckdaten rechts im IntroBand der Übersicht (E85)
  facts: [
    { label: 'For', value: 'Property managers, condominium owners, owners and businesses' },
    { label: 'To print', value: 'Report entries, products by pH value, comparison grid and calculation' },
    { label: 'Sources', value: 'Federal law on Fedlex, BFU, FOPH, associations and manufacturers' },
  ],
  serviceLabel: 'Matching service',
  offerShort: 'Request a quote',
}

// Sources (read on 28.09.2026)
const co = (art: string, label: string): Source => ({
  label: `Swiss Code of Obligations, ${label}`,
  href: `https://www.fedlex.admin.ch/eli/cc/27/317_321_377/en#art_${art}`,
})
const cc: Source = {
  label: 'Swiss Civil Code, Art. 712g, 712h, 712m and 712s (condominium ownership)',
  href: 'https://www.fedlex.admin.ch/eli/cc/24/233_245_233/en#art_712_g',
}
const ccCoOwnership: Source = {
  label: 'Swiss Civil Code, Art. 647a and 647b (administration in co-ownership)',
  href: 'https://www.fedlex.admin.ch/eli/cc/24/233_245_233/en#art_647_a',
}
const bfuLiability: Source = {
  label: 'BFU: What does owner’s liability mean? (in German)',
  href: 'https://www.bfu.ch/de/services/rechtsfragen/was-bedeutet-werkeigentuemerhaftung',
}
const bfuFloor: Source = { label: 'BFU: Floor coverings (in German)', href: 'https://www.bfu.ch/de/ratgeber/bodenbelag' }
const mvServiceCharges: Source = {
  label: 'Swiss Tenants’ Association: leaflet on inadmissible service charges 2026 (PDF, in German)',
  href: 'https://www.mieterverband.ch/upd_fm_media/ratgeber-mietrecht/topthemen/heiz-und-nebenkosten/2026_merkblatt_unzulaessige_nebenkosten.pdf/',
}
const hevHandover: Source = { label: 'HEV Schweiz: Flat handover (in German)', href: 'https://www.hev-schweiz.ch/vermieten/verwalten/wohnungsabgabe' }
const mvLifespan: Source = {
  label: 'Swiss Tenants’ Association: Lifespan table (in German)',
  href: 'https://www.mieterverband.ch/mietrecht/unterlagen-und-tools/lebensdauertabelle/',
}
const mvTips: Source = {
  label: 'Swiss Tenants’ Association: Flat handover and report, questions and answers (in German)',
  href: 'https://www.mieterverband.ch/mietrecht/ende-der-miete/wohnungsabgabe-protokoll/tipps/',
}
const mvFinal: Source = {
  label: 'Swiss Tenants’ Association: final statement and return of the deposit (in German)',
  href: 'https://www.mieterverband.ch/mietrecht/ende-der-miete/schlussrechnung-depotrueckgabe/',
}
const zhNotice: Source = {
  label: 'Zurich courts: notice of defects on return (in German)',
  href: 'https://www.gerichte-zh.ch/de/themen/miete/kuendigung-rueckgabe/rueckgabe-und-ausweisung/maengelruege',
}
const nvs: Source = {
  label: 'Swiss Natural Stone Association NVS: leaflet on cleaning natural stone floors (PDF, in German)',
  href: 'https://nvs.ch/fileadmin/user_upload/nvs/1_Dienstleistungen/Technische_Merkblaetter/15_MB_Reinigung_von_Naturstein_Belaegen.pdf',
}
const ceruniqCeramic: Source = {
  label: 'Ceruniq: cleaning and care instructions for ceramic floors (PDF, in German)',
  href: 'https://www.ceruniq.ch/wp-content/uploads/2025/03/reinigungs-und-pflegeanleitung-fuer-keramische-belaege.pdf',
}
const ceruniqStone: Source = {
  label: 'Ceruniq: cleaning and care instructions for natural stone floors (PDF, in German)',
  href: 'https://www.ceruniq.ch/wp-content/uploads/2025/03/reinigungs-und-pflegeanleitung-fuer-natursteinbelaege.pdf',
}
const ceruniqFirst: Source = {
  label: 'Ceruniq: first cleaning of ceramic floors (PDF, in German)',
  href: 'https://www.ceruniq.ch/wp-content/uploads/2025/03/erstreinigung-fuer-keramische_belaege.pdf',
}
const forboLinoleum: Source = {
  label: 'Forbo Flooring: cleaning and care recommendation for linoleum (PDF, in German)',
  href: 'https://forbo.blob.core.windows.net/forbodocuments/9597/Forbo_Linoleum_Reinigung-Pflege_202204.pdf',
}
const forboVinyl: Source = {
  label: 'Forbo Flooring: cleaning and care recommendation for vinyl design floors (PDF, in German)',
  href: 'https://forbo.blob.core.windows.net/forbodocuments/711557/Forbo_Allura-Designbelage_Reinigung-Pflege_202001.pdf',
}
const ispSealed: Source = {
  label: 'ISP parquet association: care of sealed parquet (PDF, in German)',
  href: 'https://www.parkett-verband.ch/images/content/Pflegeanleitungversiegelt2022de.pdf',
}
const ispOiled: Source = {
  label: 'ISP parquet association: care of oiled parquet (PDF, in German)',
  href: 'https://www.parkett-verband.ch/images/content/Pflegeanleitunggeoelt2022de.pdf',
}
const bagMould: Source = { label: 'FOPH: Beware of mould (PDF, in German)', href: 'https://www.bag.admin.ch/dam/de/sd-web/wBJWq1KVfpS-/vorsicht-schimmel.pdf' }
const bagBleach: Source = { label: 'FOPH: Bleach (in German)', href: 'https://www.bag.admin.ch/de/javelwasser' }
const zpkGav: Source = { label: 'ZPK: collective labour agreement for the cleaning sector, scope (in German)', href: 'https://zpk-reinigung.ch/recht-lohn/gav' }
const zpkContent: Source = { label: 'ZPK: content of the collective labour agreement (in German)', href: 'https://zpk-reinigung.ch/recht-lohn/gav-inhalte' }
const gavSmall: Source = {
  label: 'Unia GAV service: collective labour agreement for cleaning companies with fewer than 6 employees (in German)',
  href: 'https://www.gav-service.ch/gav/185006',
}
const arg: Source = { label: 'Employment Act, Art. 17b, pay supplement for night work (in German)', href: 'https://www.fedlex.admin.ch/eli/cc/1966/57_57_57/de#art_17_b' }
const vat: Source = { label: 'Value Added Tax Act, Art. 25 (tax rates)', href: 'https://www.fedlex.admin.ch/eli/cc/2009/615/en#art_25' }

const pflichtenheft: RatgeberArtikel = {
  path: '/blog/hauswartung-aufgaben',
  h1: 'Caretaking duties: what belongs in the specification',
  subtitle: 'Which tasks to record, how to set frequency and cost limit, and why the service charge statement benefits.',
  teaser: 'Structure, a completed example and typical gaps: how to write a specification that property management, owners and caretaker all read the same way.',
  updated: '2026-09-28',
  intro: [
    'Many caretaking arrangements have run on verbal instructions for years. That works until the caretaker changes, a tenant questions the service charge statement, or after a fall in the stairwell someone wants to know who checked what and when. A specification answers these questions before anyone asks them.',
  ],
  summary: {
    title: 'In brief',
    items: [
      'A specification lists every task with its frequency, who is responsible and where defects are reported, plus a cost limit for minor repairs.',
      'Keep the running of the building separate from administration and repairs. Only then can caretaking be charged cleanly as a service charge.',
      'Record inspection rounds with date and findings. Owners are liable for damage caused by poor maintenance even without fault (Art. 58 CO).',
      'Review tasks and frequency once a year, ideally together with the service charge statement.',
    ],
  },
  sections: [
    {
      title: 'What a specification is for',
      paragraphs: [
        'A specification is the written list of what the caretaker takes on in a particular property. It does not replace a contract, but it is the contract’s most important annex. Four things depend on it:',
      ],
      definitions: [
        {
          term: 'The assignment',
          text: 'Anything not written down is open to interpretation. Whether the caretaker oils the door to the bicycle room or puts the bins out on collection day is either in the specification or, sooner or later, a matter for discussion.',
        },
        {
          term: 'The comparison',
          text: 'Three quotes based on the same specification can be laid side by side. Without that common basis, three providers often describe three different services.',
        },
        {
          term: 'The statement',
          text: 'Tenants may ask to inspect the receipts for service charges (Art. 257b para. 2 CO). The specification shows which hours are spent on cleaning and running the building and which on administration or repairs.',
        },
        {
          term: 'The evidence',
          text: 'Under Art. 58 CO, the owner must compensate damage that a building causes through inadequate maintenance. The BFU advises inspecting existing buildings periodically and documenting the checks. The specification states who does this and how often.',
        },
      ],
      sources: [co('58', 'Art. 58 and 257b'), bfuLiability],
    },
    {
      title: 'The structure in five parts',
      paragraphs: [
        'Whether a block of flats, a condominium or an office building: a useful specification always has the same five parts. The property comes first, the evidence last.',
      ],
      items: [
        'Property: address, number of flats and stairwells, lift, laundry rooms, heating, size of the grounds, waste collection point.',
        'Tasks with frequency: each activity on its own line, with “weekly”, “monthly” or “as needed”, and the months for seasonal work.',
        'Limits: the cost limit for minor repairs without prior approval, and what is expressly excluded, such as winter maintenance or on-call service.',
        'Reporting lines: who receives defect reports, how quickly and by which channel, and who stands in when the caretaker is away.',
        'Evidence: inspection sheet, time sheet or annual report, plus the date of the next review.',
      ],
      ordered: true,
    },
    {
      title: 'Example: twelve flats, one lift, one laundry room',
      paragraphs: [
        'The table below shows a completed specification for a block of twelve flats with one stairwell and lift, a shared laundry room and around 600 m² of grounds. The values are an example, not a benchmark.',
        'A blank template to print, with columns for frequency and responsibility, is on the [caretaking](/leistungen/hauswartung#pflichtenheft) page.',
      ],
      tool: {
        kind: 'table',
        id: 'beispiel-pflichtenheft',
        title: 'Example with service charge classification',
        intro:
          'The last column shows how the Swiss Tenants’ Association classifies the task for service charges. In every case the tenancy agreement must list caretaking as a service charge (Art. 257a para. 2 CO).',
        columns: ['Task', 'Example', 'Service charge according to the Tenants’ Association'],
        rows: [
          ['Stairwell and entrance', 'Damp-clean weekly, including handrails and glass door', 'admissible (cleaning inside the building)'],
          ['Lift', 'Car and doors weekly, door sills monthly', 'admissible (cleaning inside the building)'],
          ['Laundry and drying room', 'Floor, basin and drain twice a month', 'admissible (cleaning inside the building)'],
          ['Waste collection point', 'Clean the area and the container space after each collection', 'admissible (cleaning around the building)'],
          ['Operating the heating', 'Read pressure and fault display once a week, note the value', 'admissible (operating the heating)'],
          ['Minor upkeep', 'Replace faulty lights in the stairwell, oil sticking locks, up to the agreed limit per case', 'admissible as long as no specialist knowledge is needed'],
          ['Grounds', 'Lawn every two weeks from April to October, leaves in autumn, hedges according to the care plan', 'admissible'],
          ['Putting out containers', 'Put them out on collection day and bring them back', 'not listed in the leaflet'],
          ['Inspection round for defects', 'Walk the common areas every week, findings on the inspection sheet', 'inadmissible (inspection rounds for repairs)'],
          ['Reports to the management', 'Defects by email the same day, urgent cases by phone', 'inadmissible'],
          ['Flat handovers', 'Open the flat, note meter readings, on behalf of the management', 'inadmissible'],
          ['Accompanying tradespeople', 'Provide access, supervise the work', 'inadmissible'],
          ['Expressly excluded', 'Winter maintenance, on-call service, servicing of heating and lift by specialist firms', 'not applicable'],
        ],
        note:
          'The classification follows the Tenants’ Association leaflet on inadmissible service charges (2026). According to the leaflet, administration and repairs, which include inspection rounds for repairs and reports to the management, do not belong in the service charges even if the tenancy agreement lists them. The table reflects this view and is not legal advice.',
        sources: [mvServiceCharges, co('257_a', 'Art. 257a')],
      },
    },
    {
      title: 'Justify the frequency',
      paragraphs: [
        'How often the caretaker comes determines most of the cost. A fixed weekly rhythm for everything is convenient but rarely fits. It is better to justify each frequency by how the building is used:',
      ],
      items: [
        'Many flats, prams and bicycles: clean the entrance area more often than the upper floors.',
        'Shared laundry room with a rota: time the checks to the washing days.',
        'Frequent changes of tenant: handovers as a separate item billed by effort, not in the flat rate.',
        'Grounds: months instead of “regularly”, so that leaves and hedge trimming are planned in.',
        'Flat roof, light wells or outdoor steps: add an extra inspection round after storms.',
      ],
      note: 'Art. 58 CO does not prescribe how often checks must take place. What matters is that defects are noticed and remedied early. A frequency with a reason behind it is easier to explain if someone asks later.',
    },
    {
      title: 'Cost limit and minor maintenance',
      paragraphs: [
        'The cost limit determines up to what amount the caretaker can deal with a small job without asking first. Without a limit, every light bulb turns into an email to the management. If it is set too high, the management loses track of spending.',
        'A practical approach is a limit per case and a total per year, both in the specification. Anything above goes to the management as a report, and the management commissions the specialist firm.',
        'This is different from the minor maintenance owed by tenants. Defects in their own flat that can be put right by small cleaning jobs or repairs are remedied by the tenants at their own expense, in line with local custom (Art. 259 CO). The caretaker looks after the common areas. State in the specification whether the caretaker works inside flats at all, and at whose expense.',
      ],
      sources: [co('259', 'Art. 259')],
    },
    {
      title: 'Caretaking in the service charge statement',
      paragraphs: [
        'Tenants owe service charges only if these have been specifically agreed (Art. 257a para. 2 CO), and only for services connected with the use of the property (Art. 257b para. 1 CO). For caretaking this means that cleaning, operating the heating and minor upkeep can be included. Administrative work and repairs are borne by the owner.',
        'The Tenants’ Association advises tenants to ask what the caretaker does and how many hours it takes, and writes that the specification must be disclosed. A management that records hours along the lines of the specification can answer such questions with evidence instead of estimates.',
        'Where an external firm is hired, the Tenants’ Association points to the principle of cost efficiency. Check additional services against the tenancy agreement before awarding the contract. General rules on service charges and statements are explained on the [maintenance cleaning](/leistungen/unterhaltsreinigung) page.',
      ],
      sources: [co('257_b', 'Art. 257a and 257b'), mvServiceCharges],
    },
    {
      title: 'In condominium ownership: two readers',
      paragraphs: [
        'In a condominium the specification has two readers: the management that implements it and the owners’ meeting that releases the money. The law gives the owners’ meeting the annual approval of the budget, the accounts and the allocation of costs (Art. 712m CC). The administrator has to put it into practice (Art. 712s CC).',
        'Attach the specification to the budget whenever caretaking is newly awarded or extended. If the owners have elected a committee, it can review the specification and the quotes in advance and submit a proposal to the meeting.',
        'Costs are divided according to value quotas. If a unit does not use a facility, or hardly uses it, such as a shop on the ground floor and the lift, this must be taken into account when costs are divided (Art. 712h para. 3 CC). Which majority the award requires follows from Art. 712g CC and the rules on co-ownership (Art. 647a and 647b CC). A different arrangement applies only if it is set out in the deed of constitution or was adopted unanimously. Clarify in each case what applies to your community.',
      ],
      sources: [cc, ccCoOwnership],
    },
    {
      title: 'Seven gaps that cause trouble later',
      items: [
        '“As needed” without a limit: who decides when there is a need?',
        'No reporting point: defects reach the caretaker and stay there.',
        'Repairs and cleaning in one flat rate: service charges can then not be backed up.',
        'Keys without a list: nobody knows who has which badge.',
        'Seasonal work without months: leaves and hedge trimming come as a surprise every year.',
        'No exclusions: tenants expect what is not mentioned anyway, such as winter maintenance.',
        'No review: a specification from ten years ago does not know about the new charging station in the underground car park.',
      ],
    },
    {
      title: 'Review it once a year',
      paragraphs: [
        'A good moment is the service charge statement, or in a condominium the preparation of the owners’ meeting. Three questions are enough: Which tasks have been added? Which lines took more or fewer hours than planned? Which reports remained open?',
        'If you award caretaking anew, the reviewed specification is also the basis for the quotes. How we take on caretaking is described on the [caretaking](/leistungen/hauswartung) page.',
      ],
    },
  ],
  service: '/leistungen/hauswartung',
  related: ['/blog/wohnungsabgabe-protokoll', '/blog/reinigungskosten-schweiz'],
  cta: {
    title: 'Caretaking based on your specification',
    text: 'Send us your specification or the key data: address, flats, stairwells, lift, laundry room and grounds. We walk through the property and base our quote on it. The walk-through and the quote cost you nothing and commit you to nothing.',
  },
}

const wohnungsabgabe: RatgeberArtikel = {
  path: '/blog/wohnungsabgabe-protokoll',
  h1: 'Flat handover: what property managers need to know about inspection, report and notice of defects',
  subtitle: 'How clean the flat must be, how to record defects so that they count, and when the final cleaning comes in.',
  teaser: 'Condition, report, notice of defects and cleaning: the handover of a flat from the management’s point of view, with examples of precise report entries.',
  updated: '2026-09-28',
  intro: [
    'At a flat handover, less than an hour decides who pays for what later. Anything missing from the report or described too vaguely can hardly be claimed afterwards. This guide is written for property managers and owners and shows what matters for the condition, the report and the final cleaning.',
  ],
  summary: {
    title: 'In brief',
    items: [
      'The flat is to be returned in the condition that results from use in accordance with the contract (Art. 267 CO). Normal wear and tear is covered by the rent.',
      'Defects must be checked on return and reported immediately (Art. 267a CO). According to the Zurich courts, they must be described specifically.',
      'Report before cleaning: only then can the condition at handover still be proven.',
      'The next tenants may inspect the handover report (Art. 256a CO). A precise report therefore pays off twice.',
    ],
  },
  sections: [
    {
      title: 'How clean does a flat have to be at handover?',
      paragraphs: [
        'The law does not require the flat to be as new. Tenants must return it in the condition that results from use in accordance with the contract (Art. 267 CO). What “cleaned” means in detail is set out in the tenancy agreement. The homeowners’ association HEV lists the following, among other things, as part of a thorough clean:',
      ],
      items: [
        'windows inside and out, with frames, shutters, roller shutters and venetian blinds',
        'in the kitchen the cooker, oven, fridge, grease in the extractor hood and adhesive film in the cupboards',
        'limescale in the bathroom and toilet',
        'adhesive residue on the parquet',
        'ancillary rooms such as cellar, attic and garage, completely cleared',
      ],
      note: 'The Tenants’ Association adds from the tenants’ point of view: a thorough clean includes shampooing a carpet, but not dangerous work or work that needs specialist knowledge, such as taking down and oiling shutters. If the flat is fully renovated after the tenants move out, in its view a broom-clean handover is enough.',
      sources: [co('267', 'Art. 267'), hevHandover, mvTips],
    },
    {
      title: 'Cleaning, wear and tear, damage',
      paragraphs: ['Reports often mix three kinds of findings. They have different consequences and belong on separate lines.'],
      definitions: [
        {
          term: 'Inadequate cleaning',
          text: 'Grease in the oven, limescale on the tap, dust on the blinds. According to the Tenants’ Association, the landlord must first allow a short period for the tenants to clean again. If the flat is still not clean enough, the landlord can have it cleaned and pass on the invoice.',
        },
        {
          term: 'Normal wear and tear',
          text: 'Worn carpets, faded wallpaper, light marks on the walls next to beds and pictures, a normal number of nail and screw holes. This is paid for by the rent.',
        },
        {
          term: 'Excessive wear',
          text: 'Smoke damage, burn marks in the carpet, scratches from pets on doors, cracks in the washbasin. Here the tenants are liable, but for a replacement only up to the residual value.',
        },
      ],
      note: 'The residual value is set by the joint lifespan table of the homeowners’ and tenants’ associations. An example from the Tenants’ Association: a medium-quality fitted carpet lasts ten years. If it has to be replaced after six years because of burn marks, the tenants bear 40 per cent of the cost. Once the lifespan has run out, they bear nothing.',
      sources: [mvTips, hevHandover, mvLifespan],
    },
    {
      title: 'The report: precise enough to count',
      paragraphs: [
        'The Zurich courts name three requirements for a valid notice of defects: the defects are specifically described, it is clear that the landlord intends to hold the tenants liable, and notice is given immediately on return. Collective terms often fail the first requirement.',
        'If the tenants sign defects charged to them, the homeowners’ association treats them as acknowledged. If they dispute an item, note this in the report and give notice of that item separately by registered letter.',
      ],
      tool: {
        kind: 'table',
        id: 'protokoll-eintraege',
        title: 'Report entries: too vague and precise enough',
        intro: 'Examples of typical findings, room by room. The last column classifies each finding so that cleaning, wear and damage stay separate.',
        columns: ['Room', 'Too vague', 'Precise enough', 'Type of finding'],
        rows: [
          ['Kitchen', '“Kitchen dirty”', 'Oven with burnt-on grease on back wall, tray and rack; grease filter in extractor hood clogged', 'Cleaning'],
          ['Bathroom and toilet', '“Bathroom not clean”', 'Shower glass and mixer tap with limescale edge; urine scale under the rim of the toilet bowl', 'Cleaning'],
          ['Living room', '“Parquet damaged”', 'In front of the balcony door three scratches in the parquet, each about 20 cm long; parquet laid in 2016', 'Damage (excessive wear), share of cost by residual value'],
          ['Bedroom', '“Walls dirty”', 'Grey marks over 1 m behind the bed; ceiling yellowed, lighter edge behind pictures', 'Marks: wear; discolouration from smoke: damage'],
          ['Windows', '“Windows not cleaned”', 'Kitchen window with dirt in rebates and frame, glass streaky outside; living room blinds dusty', 'Cleaning'],
          ['Cellar', '“Cellar not cleared”', 'Cellar compartment 4 contains a cupboard and five boxes', 'Clearance'],
          ['Keys', '“Keys incomplete”', 'Received 2 of 3 flat keys, letterbox key missing', 'Missing keys'],
        ],
        note: 'Numbered, dated photos support each entry but do not replace it. Refer to the number in the report so that it is clear later which picture belongs to which finding.',
        sources: [zhNotice, hevHandover],
        printable: true,
        updated: '2026-09-28',
      },
    },
    {
      title: 'Notice of defects: immediately, and later for hidden defects',
      paragraphs: [
        'Art. 267a CO does not set a deadline in days, only the word “immediately”. If the tenants have not already signed the defects in the report, the Tenants’ Association names two to three working days, and elsewhere one week at most. Anyone who misses the deadline loses their claims. Only notice on the day of the handover is safe, with a copy of the report for the tenants.',
        'If the tenants refuse to cooperate at the handover, notice is to be given in writing straight away according to the Zurich courts, by registered letter for evidence. The courts provide a template letter for this.',
        'Defects that could not be detected by a customary inspection must be reported immediately after they are discovered (Art. 267a para. 3 CO). Anyone who has the repair done first and then sends the invoice is too late, according to the Tenants’ Association.',
      ],
      sources: [co('267_a', 'Art. 267a'), zhNotice, mvFinal, mvTips],
    },
    {
      title: 'The timeline around the handover day',
      paragraphs: [
        'According to the homeowners’ association, the flat is in principle handed back on the last day of the tenancy during normal business hours. Tenancy agreements often specify the first day of the following month. Fix the date early, because cleaning, tradespeople and the new tenants’ move-in all depend on it.',
      ],
      tool: {
        kind: 'timeline',
        id: 'ablauf-abgabe',
        title: 'From the preliminary visit to the rent deposit',
        entries: [
          {
            label: 'A few weeks before',
            text: 'Preliminary visit with the tenants: show what will be checked at the inspection and mention small repairs they can do themselves. Set the dates for handover and final cleaning.',
          },
          {
            label: 'On the handover day',
            text: 'Check room by room, note findings separately as cleaning, wear and damage, read the meters, count all keys, including copies.',
          },
          {
            label: 'Straight afterwards',
            text: 'Hand over the report or send it at once, give notice of disputed items by registered letter, file the photos with numbers.',
          },
          {
            label: 'After the report',
            text: 'Painters and repairs first, then the final cleaning. If the flat is fully renovated, a [construction cleaning](/leistungen/baureinigung) follows at the end.',
          },
          {
            label: 'At the new tenancy',
            text: 'Draw up the move-in report with the new tenants. On request, show them the previous tenants’ handover report (Art. 256a CO).',
          },
          {
            label: 'Within one year',
            text: 'If the landlord has not asserted a claim by legal means within one year of the end of the tenancy, the tenants can ask the bank to release the rent deposit (Art. 257e para. 3 CO).',
          },
        ],
        sources: [hevHandover, co('256_a', 'Art. 256a and 257e')],
      },
    },
    {
      title: 'Final cleaning: who orders it and when',
      paragraphs: [
        'Two routes are common. Either the tenants hire a cleaning company themselves; the homeowners’ association then advises them to make sure the flat rate includes a handover guarantee. Or the management has the flat cleaned after the report, because it was returned inadequately cleaned or because it wants a uniform standard before re-letting.',
        'In the second case the order is decisive: report, notice, a short period to clean again, then cleaning. This keeps a record of what the tenants are responsible for, and the cleaning takes place in an empty flat where work behind fitted units is possible too.',
        'For property managers, owners and businesses we carry out the final cleaning with a handover guarantee, described on the [end-of-tenancy cleaning](/leistungen/umzugsreinigung) page. The order is placed by the management or the owner, not by the outgoing tenants.',
      ],
      sources: [hevHandover],
    },
    {
      title: 'Common mistakes at handover',
      items: [
        'Having the flat cleaned before the report.',
        'Collective terms such as “inadequately cleaned” instead of individual findings.',
        'Charging wear as damage without knowing the age of the fittings.',
        'Not handing over the report or sending it days later.',
        'Not counting the keys or not having them signed for.',
        'Reporting a hidden defect only with the tradesperson’s invoice.',
        'Not keeping the handover report, even though the next tenants may see it.',
      ],
      note: 'The article describes the legal position in general terms. For your case the tenancy agreement and circumstances count; in a dispute your association and the conciliation authority where the property is located can help.',
    },
  ],
  service: '/leistungen/umzugsreinigung',
  related: ['/blog/hauswartung-aufgaben', '/blog/bodenbelaege-reinigen'],
  cta: {
    title: 'Final cleaning for your next handover',
    text: 'To plan, we need the address, the handover date and the size of the flat. If several changes are coming up, for example at the end of a quarter, we plan them together. We look at the flat first, then you receive the written quote, free of charge and non-binding.',
  },
}

const bodenarten: RatgeberArtikel = {
  path: '/blog/bodenbelaege-reinigen',
  h1: 'Cleaning floor coverings properly: which products stone, tiles, linoleum and parquet can take',
  subtitle: 'Why the same product rescues one floor and etches another, how to identify the floor, and what to clarify before the work starts.',
  teaser: 'pH value, joints, care films and slip risk: floor knowledge for property managers and businesses planning or commissioning a deep clean.',
  updated: '2026-09-28',
  intro: [
    'A deep clean is more than just scrubbing harder. It removes layers that have built up over months, using stronger products and machines. That is exactly why it can damage a floor if product and floor covering do not match. This guide explains the basics so that you can plan a deep clean safely and judge the result.',
  ],
  summary: {
    title: 'In brief',
    items: [
      'Acid dissolves limescale and therefore also attacks marble, limestone and cement joints. Alkaline products dissolve grease and old care films.',
      'Identify unknown floors before a deep clean, or have them tested in a hidden spot.',
      'Rinsing matters as much as cleaning: residues leave the floor patchy or slippery.',
      'The manufacturer’s care instructions take precedence. Deviating from them can void the warranty.',
    ],
  },
  sections: [
    {
      title: 'Maintenance, deep cleaning, care, restoration',
      paragraphs: ['Four kinds of work are often lumped together. They differ in the products used, how often they are needed and who should carry them out.'],
      definitions: [
        {
          term: 'Maintenance cleaning',
          text: 'Removes loose and lightly adhering dirt, dry or damp. The frequency depends on use: the natural stone association mentions daily, weekly or monthly depending on how dirty the floor gets.',
        },
        {
          term: 'Deep cleaning',
          text: 'Removes what builds up despite maintenance: care films, limescale, grease, dirt in pores and joints. For natural stone the association’s leaflet gives intervals from one month in heavily soiled areas to one year.',
        },
        {
          term: 'Care',
          text: 'A protective film, oil or polish applied after deep cleaning. Newer linoleum and vinyl floors have a factory surface finish; according to the manufacturer, additional initial care is generally not needed.',
        },
        {
          term: 'Restoration',
          text: 'Grinding, polishing, resealing or re-oiling. This is work for a stone specialist, parquet or floor layer. Stone can only be ground down by a few millimetres.',
        },
      ],
      sources: [nvs, forboLinoleum, forboVinyl],
    },
    {
      title: 'The pH value decides',
      paragraphs: [
        'Cleaning products work through their pH value. Acidic products are below 7 and dissolve mineral deposits such as limescale, urine scale and cement film. Alkaline products are above 7 and dissolve grease, oil and old layers of care products. Neutral products around 7 are intended for routine cleaning.',
        'The problem: marble, limestone and travertine themselves consist largely of lime. An acid cannot tell the limescale ring from the stone beneath it, and it attacks cement joints too. That is why a descaler leaves dull patches on polished marble that no cleaning will remove.',
        'Alkaline products have limits too. For linoleum, the manufacturer Forbo specifies cleaners below pH 9 and rules out highly alkaline solutions.',
      ],
      note: 'Before a deep clean, ask which product with which pH value is planned for which floor. The answer belongs in the specification of services.',
      sources: [nvs, ceruniqStone, forboLinoleum],
      tool: {
        kind: 'table',
        id: 'mittel-nach-ph',
        title: 'Which product where: acidic, neutral, alkaline',
        intro: 'For the wall of the cleaning cupboard: three groups of cleaning products, what they dissolve and where they do not belong. The care instructions for your floor take precedence.',
        columns: ['Product', 'Dissolves', 'Do not use', 'Watch out for'],
        rows: [
          [
            'Acidic, below pH 7, such as descalers, sanitary cleaners, cement film removers',
            'limescale, cement film, grout residue',
            'on marble, limestone and travertine, on dry cement joints, on linoleum and vinyl',
            'Pre-wet the floor and joints with water, let the product act briefly, rinse several times with clear water. No hydrochloric or sulphuric acid on natural stone: it discolours it.',
          ],
          [
            'Neutral, around pH 7, such as maintenance cleaners',
            'loose and lightly adhering dirt',
            'wet on parquet: there, only wipe with a barely damp cloth',
            'Dose sparingly: too much product with care additives leaves ceramic tiles permanently patchy. It is not intended for care films or limescale.',
          ],
          [
            'Alkaline, above pH 7, such as deep cleaners',
            'grease, oil, old care films',
            'as a highly alkaline solution on linoleum, where only below pH 9; on oiled parquet, except for the products of the oil system',
            'Pick up the dirty water completely and rinse with clear water. On marble, limestone and travertine only pH-neutral or mildly alkaline.',
          ],
        ],
        note: 'On parquet, wet metal furniture feet leave oxidation stains, so keep them dry when mopping. And do not mix systems: manufacturers recommend products that are designed to work together.',
        sources: [nvs, ceruniqCeramic, ceruniqStone, forboLinoleum, forboVinyl, ispSealed, ispOiled],
        printable: true,
        updated: '2026-09-28',
      },
    },
    {
      title: 'Identifying the floor',
      paragraphs: [
        'The safest source is the construction documents: manufacturers’ care instructions, acceptance records, invoices from the floor layers. The instructions of the Swiss tiling association Ceruniq provide for the client’s signature and state that improper cleaning voids the warranty.',
        'If there are no documents, no guess can replace a test. The natural stone association describes how specialists test stone: a fingernail-sized spot in a hidden place is roughened and a few drops of acid are applied. If it fizzes, the stone is acid-sensitive.',
        'As long as the stone has not been identified, no acid goes on the floor. Every new method is tried first in an inconspicuous spot. What each floor covering can take during a deep clean, and how to tell damage from dirt, is summarised in the tables on the [deep and special cleaning](/leistungen/sonderreinigungen#bodenbelaege) page.',
      ],
      sources: [ceruniqCeramic, nvs],
    },
    {
      title: 'Joints: the most sensitive spot',
      paragraphs: [
        'Cement joints are porous, and acid attacks them just as it attacks limestone. When dry, they soak up an acidic product, which then works inside the joint instead of on the surface. The tiling association Ceruniq therefore prescribes pre-wetting the floor, and the joints in particular, thoroughly with water before every deep clean.',
        'Black, anthracite or coloured cement joints are especially delicate; Ceruniq explicitly warns of damage from improper cleaning. Epoxy joints, by contrast, are largely resistant to acidic cleaners.',
        'Silicone joints at showers, baths and kitchens contain fungicides. Ceruniq recommends cleaning them weekly with a neutral or mildly alkaline product and a soft cloth and then rubbing them dry. If mould has grown into the silicone, the FOPH advises removing the sealant and having it renewed by a specialist.',
      ],
      sources: [ceruniqCeramic, ceruniqFirst, bagMould],
    },
    {
      title: 'Rinsing, drying, slip risk',
      paragraphs: [
        'The natural stone association calls rinsing the most important part of any cleaning. Loosened dirt that is not completely picked up simply stays behind in a different distribution. On rough surfaces the water dries in the hollows into a film. That is why dirty water is vacuumed up and the floor rinsed with clean water, often more than once.',
        'Residues have a second effect. Forbo states that dirt brought in, cleaning frequency and the products used have a major influence on slip resistance. According to Ceruniq, too much cleaner with care additives can even leave ceramic tiles permanently patchy.',
        'While the work is going on, wet floors are a fall hazard. The BFU recommends warning stands and barrier tape and drying the floor quickly. In the stairwell of a rented building this means working section by section and always leaving a dry route open.',
      ],
      sources: [nvs, forboLinoleum, ceruniqCeramic, bfuFloor],
    },
    {
      title: 'Never mix products',
      paragraphs: [
        'If you dissolve limescale with acid and bleach stains with chlorine bleach, never use the two together. The Federal Office of Public Health warns that chlorine bleach combined with acids, including descalers, releases toxic chlorine gas. The two products must not be stored together either. That applies to your caretaker’s cleaning cupboard as well.',
      ],
      sources: [bagBleach],
    },
    {
      title: 'Less dirt, fewer deep cleans',
      paragraphs: [
        'Most dirt comes into the building on people’s shoes. For entrances the BFU recommends dirt-trapping zones whose mat is at least six steps long. Forbo cites a reduction in dirt brought in of up to 80 per cent for textile entrance zones of 4 to 6 metres.',
        'Add simple measures from the care instructions: felt pads under chairs, soft castors on office chairs, saucers under plants. For parquet the parquet association recommends a room climate of 20 to 22 °C with 35 to 45 per cent relative humidity.',
      ],
      sources: [bfuFloor, forboLinoleum, ispSealed],
    },
    {
      title: 'Typical mistakes',
      items: [
        'Descaler or vinegar on marble and limestone.',
        'Acidic products on dry cement joints.',
        'Cleaning only part of a natural stone floor intensively: the patina of use changes, leaving lighter and darker areas.',
        'Steam cleaners on parquet.',
        'Applying a new care layer on top of the old one without removing it first.',
        'A lot of product and little water for rinsing.',
        'Leaving the underfloor heating on.',
        'Wet areas without warning stands.',
      ],
      note: 'Deep cleaning as a service, with a checklist for preparation and acceptance, is described under [deep and special cleaning](/leistungen/sonderreinigungen).',
      sources: [nvs, ceruniqFirst, ispOiled],
    },
  ],
  service: '/leistungen/sonderreinigungen',
  related: ['/blog/wohnungsabgabe-protokoll', '/blog/reinigungskosten-schweiz'],
  cta: {
    title: 'Deep cleaning for your floors',
    text: 'Tell us which floor coverings are laid where and roughly how large the areas are. Care instructions and photos help with planning. After an appointment on site we price your floors individually, free of charge and non-binding.',
  },
}

const reinigungsfirmaFinden: RatgeberArtikel = {
  path: '/blog/richtige-reinigungsfirma-finden',
  h1: 'How do I find the right cleaning company?',
  subtitle: 'The questions to clarify before awarding a contract, from the scope of services to the contract itself.',
  teaser: 'The questions to clarify before awarding a contract: scope, insurance, working conditions, quality control, quote and contract. With a printable comparison grid.',
  updated: '2026-09-28',
  intro: [
    'The cleaning company that looks after your premises is usually a decision for several years. Switching takes time, and a bad start is noticed by clients and staff. This guide shows what to look for when choosing, which mistakes become expensive and how to make quotes comparable.',
  ],
  summary: {
    title: 'In brief',
    items: [
      'First clarify your needs: which service, how often and at what times.',
      'Obtain three to five quotes, each after a site visit.',
      'Compare scope, hours, insurance, working conditions and contract in one grid.',
      'Ask about quality control and cover during absences, and get the answers in writing.',
    ],
  },
  sections: [
    {
      title: 'Clarify your needs first',
      paragraphs: ['Before you compare providers, you should know what you need. The main services:'],
      definitions: [
        {
          term: 'Maintenance cleaning',
          text: 'Recurring cleaning on a fixed schedule, for example several times a week. It keeps premises clean and hygienic. Find out more about [maintenance cleaning](/leistungen/unterhaltsreinigung).',
        },
        {
          term: 'Deep cleaning',
          text: 'A thorough clean at longer intervals, against limescale, grease and old layers of care products. Which products each floor can take is explained in the guide [cleaning floor coverings properly](/blog/bodenbelaege-reinigen). The service: [deep and special cleaning](/leistungen/sonderreinigungen).',
        },
        {
          term: 'Caretaking',
          text: 'Looking after a property beyond cleaning, for example with inspection rounds, minor repairs and waste disposal. What it includes is set out in a specification, see [caretaking duties](/blog/hauswartung-aufgaben). Find out more about [caretaking](/leistungen/hauswartung).',
        },
      ],
      note: 'Also decide how often and at what times cleaning should take place, for example before work starts or after the shop closes. All providers need this information so that their quotes are comparable.',
    },
    {
      title: 'What to look out for',
      subsections: [
        {
          title: 'Scope of services and limits',
          text: 'Get it in writing which rooms and tasks are included and which are not. Ask: what is part of regular cleaning, and what is charged separately?',
        },
        {
          title: 'Insurance',
          text: 'Something may be damaged while work is being done on your premises. Ask about business liability insurance and for proof of the amount of cover.',
        },
        {
          title: 'Quality control and cover',
          text: 'Ask who checks the work on site, how often, and whether you receive the result in writing. Ask as well who cleans when the regular person is on holiday or ill, and how that stand-in is trained. Have both described to you before you sign.',
        },
        {
          title: 'Working conditions',
          text: 'In German-speaking Switzerland, the generally applicable collective labour agreement for the cleaning sector applies in full to companies with six or more employees. Through a simplified declaration of general applicability, its minimum wages also apply to smaller cleaning companies with employees. Ask about wages, especially if a quote is strikingly low.',
        },
        {
          title: 'Putting certificates in context',
          text: 'Certificates can show that processes have been audited against a standard. Ask about the standard, the certification body, the scope and the validity. Just as important is how the company checks quality day to day and remedies defects.',
        },
        {
          title: 'References and reviews',
          text: 'Ask for references for comparable properties. Whether you can speak to reference clients depends on their consent. Check online reviews as well.',
        },
        {
          title: 'Quote and price',
          text: 'Only someone who has seen the property can calculate reliably. Make sure that additional costs such as travel and cleaning products are shown and that special cleaning is listed separately. How a monthly amount comes about is shown in the guide [cost of maintenance cleaning](/blog/reinigungskosten-schweiz).',
        },
        {
          title: 'Contract',
          text: 'The term, the notice period, any trial period and the arrangements for cover belong in the contract.',
        },
        {
          title: 'Proximity and availability',
          text: 'Ask how quickly someone can be on site if there is a problem and how you can reach your contact person.',
        },
      ],
      sources: [zpkGav, gavSmall],
    },
    {
      title: 'Seven mistakes that become expensive later',
      items: [
        'Accepting a quote without a site visit. The price then often does not match the effort, and additional charges or cuts in the cleaning follow.',
        'Comparing only the hourly rate. What counts is hours per visit, visits per month and what is included.',
        'Not recording the scope in writing. Without a specification of services, there is no yardstick when you complain.',
        'Handing over keys without a list. Record who receives which keys, badges and codes and how loss and return are handled.',
        'Leaving cover open. Clarify who steps in during holidays or illness and who briefs that person.',
        'Signing a long term without a trial period. Term and notice period belong on the table before you sign.',
        'Not checking working conditions. A price below wage costs comes at the expense of the staff or the quality.',
      ],
    },
    {
      title: 'Questions for the site visit',
      items: [
        'What exactly is included, and what is not?',
        'How often and at what times will cleaning take place?',
        'How many hours per visit are calculated?',
        'Who is my contact person, and how do I reach them?',
        'Who checks the work on site, and how often?',
        'How is cover arranged during holidays or illness?',
        'Do you pay at least the wages set by the collective labour agreement for the cleaning sector?',
        'What insurance is in place, and with what cover?',
        'How is billing done, and what costs extra?',
      ],
      tool: {
        kind: 'table',
        id: 'vergleichsraster',
        title: 'Comparison grid for quotes',
        intro: 'To print: one row per point, one column per provider. Empty fields show where you should ask again.',
        columns: ['Point', 'Company A', 'Company B', 'Company C'],
        rows: [
          ['Site visit carried out on', '__________', '__________', '__________'],
          ['Hours per visit', '__________', '__________', '__________'],
          ['Visits per month', '__________', '__________', '__________'],
          ['Amount per month, including VAT', '__________', '__________', '__________'],
          ['Materials and products included', '__________', '__________', '__________'],
          ['Surcharges for evenings, nights and weekends', '__________', '__________', '__________'],
          ['On-site checks: who and how often', '__________', '__________', '__________'],
          ['Cover during holidays and illness', '__________', '__________', '__________'],
          ['Liability insurance with amount of cover', '__________', '__________', '__________'],
          ['Minimum wages under the collective labour agreement met', '__________', '__________', '__________'],
          ['Term and notice period', '__________', '__________', '__________'],
        ],
        note: 'For each column, multiply the hours per visit by the visits per month. The result shows how much work each company actually plans for your property.',
        printable: true,
        updated: '2026-09-28',
      },
    },
    {
      title: 'Step by step to the right cleaning company',
      ordered: true,
      items: [
        'Clarify your needs: note down the service, frequency, times and areas.',
        'Select three to five providers who work in your region.',
        'Arrange site visits. Without a site visit, there is no comparable quote.',
        'Set the quotes side by side in the comparison grid above: scope, hours, additional costs and term.',
        'Clarify any open questions, ideally in writing.',
        'Ask whether a trial clean or a start with a trial period is possible.',
        'Sign the contract and record who your contact person is.',
      ],
    },
    {
      title: `When you contact ${company.brand}`,
      items: [
        'Quote: in writing, after we have seen your property on site.',
        `Reply to your enquiry: ${responseTime}.`,
        'Insurance: business liability insurance with cover of CHF 10 million.',
        'Experience: since 2006, today over 50 employees and over 120 clients (as of September 2026).',
        `Languages in which we advise: ${languages}.`,
        `Area: the cantons of ${cantons}, with all services. Find out more about our [service area](/einzugsgebiet).`,
      ],
    },
  ],
  service: '/leistungen/unterhaltsreinigung',
  related: ['/blog/reinigungskosten-schweiz', '/blog/hauswartung-aufgaben'],
  cta: {
    title: 'On-site quote',
    text: 'Put our quote next to the others. Tell us about the property, floor area, frequency and cleaning times, and we will come by and calculate for your property. We charge nothing for this, and you enter into no obligation.',
  },
}

const kosten: RatgeberArtikel = {
  path: '/blog/reinigungskosten-schweiz',
  h1: 'The cost of maintenance cleaning: how the price is calculated',
  subtitle: 'What the monthly amount depends on, how a quote is calculated and what property managers should note about service charges.',
  teaser: 'Cost factors, the calculation and wages as the lower limit: how to read and compare quotes for maintenance cleaning.',
  updated: '2026-09-28',
  intro: [
    'This guide covers [maintenance cleaning](/leistungen/unterhaltsreinigung), that is, the regular cleaning of properties, offices and business premises. It gives no prices, but shows what a price is made up of, so that you can read quotes and compare them fairly.',
  ],
  summary: {
    title: 'In brief',
    items: [
      'The amount is determined by hours per visit, number of visits and the hourly rate, plus materials, surcharges and VAT.',
      'The hours depend on floor area, floor coverings, use and cleaning times. They cannot be estimated reliably without looking at the property.',
      'A generally applicable collective labour agreement sets a lower limit for wages. Very low quotes deserve a closer look.',
      'Compare the monthly amount and the hours calculated, not the hourly rate alone.',
    ],
  },
  sections: [
    {
      title: 'The cost factors',
      definitions: [
        { term: 'Floor area and types of room', text: 'Size, floor coverings, sanitary facilities and glass surfaces determine the time required.' },
        {
          term: 'Frequency',
          text: 'With frequent cleaning, the effort per visit often decreases, but the number of visits rises. What counts is what is paid per month in the end.',
        },
        { term: 'Use', text: 'Busy entrances, kitchens and sanitary facilities take more time than rooms that are rarely used.' },
        {
          term: 'Cleaning times',
          text: 'Cleaning in the evening, at night or at weekends can cost more. For night work that is only temporary, the Employment Act requires a pay supplement of at least 25 per cent (Art. 17b EmpA). Ask whether surcharges are included in the monthly amount.',
        },
        {
          term: 'Additional services',
          text: 'Consumables, window cleaning or a [deep clean](/leistungen/sonderreinigungen) before the start may be listed separately.',
        },
        {
          term: 'Working conditions',
          text: 'Cleaning is manual work, and most of the cost is wages. How wages are limited at the bottom is explained in the next section.',
        },
      ],
      sources: [arg],
    },
    {
      title: 'Wages as the lower limit',
      paragraphs: [
        'In the cantons of Lucerne, Zug, Aargau, Nidwalden and Obwalden, cleaning companies with six or more employees are bound by the generally applicable collective labour agreement for the cleaning sector in German-speaking Switzerland. It sets minimum wages for each wage category and runs until the end of 2029. Some provisions, including the minimum wages, also apply to smaller cleaning companies with employees.',
        'On top of wages come social security, holidays, travel, materials, equipment and the management of the work. A quote whose hourly rate is barely above the minimum wage cannot cover these costs. In that case, ask how it has been calculated.',
        'Compliance is monitored by the sector’s joint commission (ZPK), for example through payroll audits. Its website publishes the minimum wages and surcharges in the wording of the agreement.',
      ],
      sources: [zpkGav, zpkContent, gavSmall],
    },
    {
      title: 'How a quote is calculated',
      paragraphs: [
        'The hours per visit result from floor area, types of room, floor coverings and use. That is why a serious company looks at the property before calculating. The rest is multiplication.',
      ],
      tool: {
        kind: 'table',
        id: 'rechenweg',
        title: 'From the visit to the monthly amount',
        intro: 'The example calculates in hours only, not in prices. Insert the values from your quotes.',
        columns: ['Element', 'What it depends on', 'Example'],
        rows: [
          ['Hours per visit', 'Floor area, types of room, floor coverings, use', '3 hours'],
          ['× visits per month', 'Frequency, for example twice a week', '8.7 visits'],
          ['= hours per month', 'Basis of every comparison', 'about 26 hours'],
          ['× hourly rate', 'Wages, social security, management, travel', 'the provider’s figure'],
          ['+ materials and products', 'Separate or included in the rate', 'depends on the quote'],
          ['+ surcharges', 'Evening, night, Sunday', 'none for daytime work'],
          ['+ VAT', 'Standard rate 8.1 per cent (Art. 25 VAT Act)', 'on the total'],
          ['= amount per month', 'The figure you compare', 'sum of the rows'],
        ],
        note: 'Twice a week makes 104 visits a year, divided by twelve months just under 8.7 visits. Anyone who calculates with four weeks a month arrives at 8 visits and underestimates the hours by around 8 per cent.',
        sources: [vat],
        printable: true,
        updated: '2026-09-28',
      },
    },
    {
      title: 'Why we do not publish prices online',
      paragraphs: [
        'Two properties with the same floor area can involve very different amounts of work, depending on the floor covering, use and access. A price without a site visit would therefore either be set too high or turn out to be wrong later. That is why you receive our figure in writing, calculated for your property.',
      ],
    },
    {
      title: 'Comparing quotes',
      paragraphs: ['A comparable quote states at least:'],
      items: [
        'which rooms and tasks are included',
        'frequency and cleaning times',
        'the hours calculated per visit',
        'consumables and cleaning products',
        'any surcharges and additional costs such as travel',
        'term and notice period',
      ],
      note: 'A grid to print out can be found in the guide [How do I find the right cleaning company?](/blog/richtige-reinigungsfirma-finden#vergleichsraster).',
    },
    {
      title: 'For property managers: cleaning in the service charges',
      paragraphs: [
        'Cleaning costs for the stairwell and common areas may only be passed on to tenants if the tenancy agreement specifically agrees them as a service charge (Art. 257a para. 2 CO). Ask for quotes and invoices that show the cleaning per property. How the statement works is explained on the [maintenance cleaning](/leistungen/unterhaltsreinigung) page.',
      ],
      sources: [co('257_a', 'Art. 257a')],
    },
    {
      title: `How to get your quote from ${company.brand}`,
      ordered: true,
      items: [
        `You write or call us and tell us about the property, floor area and the frequency you would like. You will have a reply ${responseTime}.`,
        'We walk through the property with you and note rooms, floor coverings and times.',
        'Then we calculate and send you the quote in writing.',
      ],
      note: `The same travel terms apply throughout the cantons of ${cantons}.`,
    },
  ],
  service: '/leistungen/unterhaltsreinigung',
  related: ['/blog/richtige-reinigungsfirma-finden', '/blog/bodenbelaege-reinigen'],
  cta: {
    title: 'A quote for your maintenance cleaning',
    text: 'Tell us the address, floor area, use and the frequency you would like, and for residential buildings the number of stairwells. After the walk-through we calculate with your figures, free of charge and non-binding.',
  },
}

/** Articles in the order of the overview /blog, same keys as content/de/ratgeber.ts */
export const ratgeber = { pflichtenheft, wohnungsabgabe, bodenarten, reinigungsfirmaFinden, kosten }

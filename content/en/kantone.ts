import { company } from '../../shared/company'
import type { Dictionary } from '../de'
import type { KantonPage } from '../de/kantone'
import type { Source } from '../types'
import { responseTime } from './common'
import { nav } from './navigation'

/**
 * Texts of the five canton pages in English (E80, E85, M60). Faithful
 * translation of content/de/kantone.ts with the same keys, no new statements
 * (E18). Place names in English where one exists (Lucerne, Lake Lucerne),
 * otherwise the official name. Sources are the same primary sources as in
 * German, most of them only available in German. Titles without brand,
 * metaFor() in shared/seo.ts adds it (titles after 25-AUDIT/keywords-mehrsprachig.md).
 */

const menu = nav.areaMenu.cantons

/** Primary sources, read on 28 September 2026 (same links as the German page) */
const quelle = {
  are: {
    label: 'Federal Office for Spatial Development ARE, housing inventory and share of second homes, data as of 31 March 2026',
    href: 'https://map.geo.admin.ch/?lang=en&layers=ch.are.wohnungsinventar-zweitwohnungsanteil',
  },
  luRuhetage: {
    label: 'Canton of Lucerne, Rest Days Act (SRL No. 855), §§ 1a and 5 (in German)',
    href: 'https://srl.lu.ch/app/de/texts_of_law/855',
  },
  luMeldung: {
    label: 'City of Lucerne, change of tenant and owners’ duty to register (in German)',
    href: 'https://www.stadtluzern.ch/dienstleistungeninformation/28997',
  },
  vogelwarte: {
    label: 'Swiss Ornithological Institute, cutting shrubs and hedges in built-up areas (in German)',
    href: 'https://www.vogelwarte.ch/de/ratgeber/schnitt-von-straeuchern-und-hecken-in-siedlungen-wann-und-wie/',
  },
  zgMietrecht: {
    label: 'Canton of Zug, frequently asked questions on tenancy law (in German)',
    href: 'https://zg.ch/de/recht-justiz/zivilverfahren/schlichtung/faq-zum-mietrecht',
  },
  zgFeiertage: {
    label: 'Canton of Zug, working and rest periods, public holidays (in German)',
    href: 'https://zg.ch/de/wirtschaft-arbeit/arbeitsbedingungen/arbeits-und-ruhezeiten',
  },
  zgFeiertagsaehnlich: {
    label: 'Zug Office for Economy and Labour, public holidays 2026 and 2027 (PDF, in German)',
    href: 'https://cdn.zg.ch/dam/jcr:d241f3f6-4c0c-4bb2-9096-b53dd371501c/Feiertage_2026_2027_Kt-ZG_Daten.pdf',
  },
  agFeiertage: {
    label: 'Canton of Aargau, Office for Economy and Labour, fact sheet on public holidays (PDF, in German)',
    href: 'https://www.ag.ch/media/kanton-aargau/dvi/dokumente/awa/awa/arbeitnehmerschutz-im-betrieb/feiertage.pdf',
  },
  nwRuhetage: {
    label: 'Canton of Nidwalden, Rest Days Act (NG 921.1), Art. 2 (in German)',
    href: 'https://gesetze.nw.ch/app/de/texts_of_law/921.1',
  },
  owSchlichtung: {
    label: 'Canton of Obwalden, conciliation authority, questions on notice (in German)',
    href: 'https://www.ow.ch/fachbereiche/2131',
  },
  owRuhetage: {
    label: 'Canton of Obwalden, Rest Days Act (GDB 975.2), Art. 2, 3 and 5 (in German)',
    href: 'https://gdb.ow.ch/app/de/texts_of_law/975.2',
  },
  orMiete: {
    label: 'Swiss Code of Obligations (SR 220), Art. 266c and 266d, notice for flats and business premises',
    href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/en#art_266_c',
  },
  arg: {
    label: 'Labour Act (SR 822.11), Art. 20a, national and cantonal public holidays (in German)',
    href: 'https://www.fedlex.admin.ch/eli/cc/1966/57_57_57/de#art_20_a',
  },
} satisfies Record<string, Source>

const luzern: KantonPage = {
  name: 'Lucerne',
  kuerzel: 'LU',
  seo: {
    title: 'Cleaning company in Lucerne with caretaking',
    description:
      'Cleaning company in Lucerne based in Emmenbrücke: caretaking, maintenance and office cleaning from the city to the Entlebuch. Free quote after a site visit.',
  },
  h1: 'Cleaning company in Lucerne, based in Emmenbrücke',
  lead: [
    'Our head office is in Emmenbrücke, in the municipality of Emmen on the city boundary of Lucerne. Kriens, Horw and Ebikon are right next door, Sursee and Hochdorf only a little further.',
    'For property managers and communities of condominium owners, that means short distances, especially for buildings that are looked after every week.',
  ],
  facts: [
    { label: 'Our head office', value: `${company.address.city}, municipality of Emmen` },
    { label: 'Focus', value: 'Apartment buildings, condominiums, offices and practices' },
    { label: 'Public rest days', value: 'Ten across the canton, St Joseph’s Day depending on the municipality' },
    { label: 'Many second homes', value: 'Flühli, Vitznau and Weggis' },
  ],
  regionen: [
    { title: 'City and agglomeration', orte: ['Lucerne', 'Emmen', 'Kriens', 'Horw', 'Ebikon', 'Adligenswil'] },
    { title: 'On Lake Lucerne', orte: ['Meggen', 'Weggis', 'Vitznau', 'Greppen'] },
    { title: 'Sursee and Lake Sempach', orte: ['Sursee', 'Sempach', 'Nottwil', 'Eich', 'Triengen', 'Ruswil'] },
    { title: 'Seetal', orte: ['Hochdorf', 'Hitzkirch'] },
    { title: 'Willisau and Entlebuch', orte: ['Willisau', 'Entlebuch', 'Schüpfheim', 'Escholzmatt-Marbach'] },
  ],
  objekte: [
    {
      title: 'Apartment buildings and condominiums',
      text: 'The city and the surrounding municipalities have many residential and commercial buildings. We keep stairwells, laundry rooms and grounds clean and, on request, check on things regularly.',
    },
    {
      title: 'Offices and practices',
      text: 'In the city of Lucerne and in centres such as Sursee, we clean offices and practices at times that fit your consulting and office hours.',
    },
    {
      title: 'Change of tenant for the property manager',
      text: 'When tenants move out, we clean the flat before it is handed over to the next ones, with a handover guarantee. Our caretaking team is involved in the handover.',
    },
    {
      title: 'Second homes and villas on the lake',
      text: 'Around Weggis, Vitznau and in Sörenberg, many flats are occupied only part of the year. Villas and second homes on the shore from Meggen to Vitznau are looked after by our [premium services](/premium).',
      premium: true,
    },
  ],
  leistungen: [
    { path: '/leistungen/hauswartung', text: 'For property managers and communities of condominium owners who want their property looked after.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Stairwell, entrance and shared rooms, for example in Emmen, Kriens or Horw.' },
    { path: '/leistungen/umzugsreinigung', text: 'Final clean before handing over a flat, with a handover guarantee.' },
    { path: '/leistungen/bueroreinigung', text: 'For practices and offices in the city, in Kriens or in Sursee.' },
    { path: '/premium/luxusimmobilien', title: 'Villas and residences', text: 'Discreet cleaning and care of lakeside homes.' },
  ],
  planung: {
    title: 'Distances from Emmenbrücke',
    paragraphs: [
      'Because our head office is in the canton, the distances to the city and the agglomeration are short. The drive to the Seetal, Willisau or the Entlebuch takes longer. There it pays to combine several jobs in one visit, for example stairwell and grounds on the same day.',
      'In the city centre, a fixed space for vehicle and equipment helps. Before the first visit, settle where our team can park and how it gets keys and access to the rooms.',
      'The Swiss Ornithological Institute is based in Sempach. It advises cutting hedges and shrubs outside the breeding season, ideally between November and March. For the [grounds and green spaces](/leistungen/aussen-und-gruenflaechenpflege) of a Lucerne property, that means scheduling hedge cutting in winter.',
    ],
    sources: ['vogelwarte'],
  },
  daten: [
    {
      label: 'Public rest days across the canton',
      items: ['New Year’s Day', 'Good Friday', 'Ascension', 'Corpus Christi', '1 August', 'Assumption', 'All Saints’ Day', 'Immaculate Conception', 'Christmas Day', 'St Stephen’s Day'],
      text: 'In the canton of Lucerne, Easter Monday and Whit Monday are not among them. Each municipality decides for itself whether St Joseph’s Day (19 March) and the patronal feast of the parish are rest days.',
      source: 'luRuhetage',
    },
    {
      label: 'Notice dates if none are agreed',
      text: 'The tenancy agreement comes first. If it names no date, Art. 266c of the Code of Obligations provides for the customary local date for flats and, where there is no local custom, the end of a three-month tenancy period. The notice period is at least three months.',
      source: 'orMiete',
    },
    {
      label: 'Change of tenant in the city of Lucerne',
      text: 'Owners and landlords report their tenants’ moves in and out to the residents’ registration office, with flat number and date.',
      source: 'luMeldung',
    },
    {
      label: 'Second homes',
      text: 'Flühli including Sörenberg 58.31%, Vitznau 32.71% and Weggis 24.95%. In these three municipalities, the building rules of the Second Homes Act apply.',
      source: 'are',
    },
  ],
  faq: [
    {
      question: 'Is St Joseph’s Day a rest day in our municipality?',
      answer: 'In the canton of Lucerne each municipality decides this itself, as it does for the patronal feast of the parish. Where such a day applies, work in commercial businesses is in principle prohibited there, as on the other rest days (§ 5 Rest Days Act). Check with the municipal office before you schedule a job on 19 March.',
    },
    {
      question: 'Do you also work in the Entlebuch or the Seetal?',
      answer: 'Yes, throughout the canton, from Hochdorf and Hitzkirch to Schüpfheim and Escholzmatt-Marbach. The same services and terms apply there as in the city of Lucerne.',
    },
    {
      question: 'We manage flats in the city of Lucerne. When should we plan the final clean for a change of tenant?',
      answer: 'Use the move-out date that you report to the residents’ registration office anyway. Request [end-of-tenancy cleaning with a handover guarantee](/leistungen/umzugsreinigung) as soon as notice is received, so the cleaning takes place before the flat is handed over to the next tenants.',
    },
    {
      question: 'Do you look after second homes in Weggis, Vitznau or Sörenberg?',
      answer: 'Yes. Between two stays we clean the flat and check that everything is in order, so that all is ready when you arrive. The [premium services](/premium) page explains how this works.',
    },
    {
      question: 'How much does a cleaning company cost in the canton of Lucerne?',
      answer: 'The price depends on area, frequency, working times, access and the condition of the property. The guide [cost of maintenance cleaning](/blog/reinigungskosten-schweiz) explains how a quote is put together.',
    },
  ],
  menuText: menu.luzern.text,
}

const zug: KantonPage = {
  name: 'Zug',
  kuerzel: 'ZG',
  seo: {
    title: 'Office cleaning company in Zug',
    description:
      'Office cleaning company in Zug for headquarters: offices, glass and caretaking from Baar to the Ägeri valley, in English too. Free quote after a site visit.',
  },
  h1: 'Office cleaning company in Zug for businesses and headquarters',
  lead: [
    'Many companies, including international ones, have their registered office in the canton of Zug. Their offices are often in commercial buildings where reception, access and the alarm system need to be settled before the cleaning team arrives.',
    'For residential properties on Lake Zug and Lake Ägeri, we take on caretaking and upkeep.',
  ],
  facts: [
    { label: 'Access', value: 'Via the A14 motorway' },
    { label: 'Focus', value: 'Office buildings with lots of glass' },
    { label: 'Notice dates', value: '31 March, 30 June, 30 September' },
    { label: 'Public holidays', value: 'Nine treated like Sundays, plus four customary days off' },
  ],
  regionen: [
    { title: 'Zug, Baar and Steinhausen', orte: ['Zug', 'Baar', 'Steinhausen'] },
    { title: 'On Lake Zug', orte: ['Cham', 'Hünenberg', 'Risch (Rotkreuz)', 'Walchwil'] },
    { title: 'Ägeri valley and hill villages', orte: ['Unterägeri', 'Oberägeri', 'Menzingen', 'Neuheim'] },
  ],
  objekte: [
    {
      title: 'Offices and headquarters',
      text: 'From a small office to headquarters over several floors: workstations, meeting rooms, reception, kitchenettes and washrooms, at times that do not disrupt your working day.',
    },
    {
      title: 'Glass and facades',
      text: 'Office buildings often have large glass surfaces. We clean windows, glass doors and facades on their own or in addition to office cleaning.',
    },
    {
      title: 'Family offices and confidential rooms',
      text: 'Where confidential documents are kept, you always have the same team, including outside your working hours. How we handle discretion is described in our [premium services](/premium).',
      premium: true,
    },
    {
      title: 'Villas and boats on the lake',
      text: 'For villas and residences in Walchwil, Oberägeri or Cham, see [villas and luxury properties](/premium/luxusimmobilien); for boats on Lake Zug, [yacht cleaning](/premium/yacht).',
      premium: true,
    },
  ],
  leistungen: [
    { path: '/leistungen/bueroreinigung', text: 'For office floors, reception and meeting rooms, outside your office hours.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'For windows, glass surfaces and facades of commercial buildings.' },
    { path: '/leistungen/facility-services', text: 'When caretaking and grounds maintenance are to be added for the office building.' },
    { path: '/leistungen/sonderreinigungen', text: 'Deep cleaning when you move offices, against limescale, grease and old layers.' },
    { path: '/premium/yacht', title: 'Yacht', text: 'Interior, upholstery, teak and gelcoat, on Lake Zug and Lake Lucerne.' },
  ],
  planung: {
    title: 'Access and working times in office buildings',
    paragraphs: [
      'From Emmenbrücke we reach the canton of Zug via the A14 motorway. Cleaning takes place when it does not disturb your business, for example outside your office hours.',
      'In office buildings with a reception, access cards or an alarm system, the first visit sets the pattern for the rest. These points should be settled beforehand:',
    ],
    list: {
      title: 'Before the first visit to an office building',
      items: [
        'whether the team enters the building via reception, an access card or a key',
        'which floors and rooms are included and which remain closed',
        'how the alarm system, lighting and locking up are handled',
        'which language arrangements with your team are made in: German, English, French or Italian',
        'who your contact person is if something is noticed',
      ],
    },
  },
  daten: [
    {
      label: 'Notice dates',
      text: 'Unless the tenancy agreement says otherwise, 31 March, 30 June and 30 September apply. The notice period is at least three months for flats and six months for business premises.',
      source: 'zgMietrecht',
    },
    {
      label: 'Holidays treated like Sundays',
      items: ['New Year’s Day', 'Good Friday', 'Ascension', 'Corpus Christi', '1 August', 'Assumption', 'All Saints’ Day', 'Immaculate Conception', 'Christmas Day'],
      text: 'On these days employees may not work, as on a Sunday, from 11 pm the evening before until 11 pm on the holiday.',
      source: 'zgFeiertage',
    },
    {
      label: 'Customary days off',
      items: ['Berchtold’s Day', 'Easter Monday', 'Whit Monday', 'St Stephen’s Day'],
      text: 'Most businesses in Zug close voluntarily; work is allowed without a permit and without a surcharge. Exception: 2 January or 26 December falls on a Sunday.',
      source: 'zgFeiertagsaehnlich',
    },
  ],
  faq: [
    {
      question: 'Do you also look after several sites, for example in Zug and Lucerne?',
      answer: 'Yes, all five cantons are part of our service area. Give us all addresses when you enquire, and we will plan the site visits together. If caretaking is to be added to cleaning at one address, [facility services](/leistungen/facility-services) brings together the services for that property.',
    },
    {
      question: 'We are leaving our office in Zug. When should we book the final clean?',
      answer: 'As soon as the notice is settled. The notice period for business premises is at least six months, which leaves ample time for the [final cleaning before handover](/leistungen/umzugsreinigung).',
    },
    {
      question: 'Do you also work in Baar, Cham or the Ägeri valley?',
      answer: 'Yes, in all eleven municipalities of Zug, from Risch (Rotkreuz) to Menzingen and Neuheim, with all services and on the same terms.',
    },
    {
      question: 'May cleaning take place on the customary days off?',
      answer: 'Yes. On Berchtold’s Day, Easter Monday, Whit Monday and St Stephen’s Day, work in the canton of Zug is allowed without a permit, unless 2 January or 26 December falls on a Sunday. Most businesses are closed on these days. If you are planning [deep cleaning of floors](/leistungen/sonderreinigungen) without business going on, name one of these days as your preferred date when you enquire.',
    },
  ],
  menuText: menu.zug.text,
}

const aargau: KantonPage = {
  name: 'Aargau',
  kuerzel: 'AG',
  seo: {
    title: 'Cleaning company in Aargau with caretaking',
    description:
      'Cleaning company in Aargau for halls and properties: industrial, construction and maintenance cleaning from Aarau to the Freiamt. Free quote after a site visit.',
  },
  h1: 'Cleaning company in Aargau for industry, business and properties',
  lead: [
    'Aargau has many industrial and commercial businesses. For production and storage halls, workshops and commercial buildings there is our industrial and warehouse cleaning, for apartment buildings maintenance cleaning and caretaking.',
    'We work throughout the canton, from the Freiamt and the Seetal on the Lucerne border to Aarau, Baden, Brugg and the Fricktal.',
  ],
  facts: [
    { label: 'Access', value: 'On the same terms as in Lucerne' },
    { label: 'Focus', value: 'Industry and trade, plus housing' },
    { label: 'Public holidays', value: 'Six arrangements by district' },
    { label: 'Not a holiday', value: '1 May, throughout the canton' },
  ],
  regionen: [
    { title: 'Freiamt', orte: ['Muri', 'Wohlen', 'Bremgarten', 'Sins'] },
    { title: 'Seetal and Lake Hallwil', orte: ['Meisterschwanden', 'Seengen', 'Beinwil am See'] },
    { title: 'Aarau, Lenzburg and Zofingen', orte: ['Aarau', 'Lenzburg', 'Zofingen', 'Oftringen'] },
    { title: 'Baden, Wettingen and Mutschellen', orte: ['Baden', 'Wettingen', 'Ennetbaden', 'Bergdietikon', 'Oberwil-Lieli'] },
    { title: 'Brugg and Fricktal', orte: ['Brugg', 'Windisch', 'Rheinfelden', 'Frick'] },
  ],
  objekte: [
    {
      title: 'Production and storage halls',
      text: 'We clean hall floors, storage areas, racking and traffic routes once or regularly, at times that production and shift work allow.',
    },
    {
      title: 'Machines and equipment',
      text: 'Cleaning of machines in shift operations, during breaks, between shifts or during planned shutdowns. How this fits in with your maintenance team is explained under [industrial and warehouse cleaning](/leistungen/industrie-und-hallenreinigung).',
    },
    {
      title: 'New builds and conversions',
      text: 'After a hall has been built or a commercial building converted, we clean up to the handover so that operations can start.',
    },
    {
      title: 'Residential properties',
      text: 'For apartment buildings and condominiums, we take on maintenance cleaning and caretaking. Villas on Lake Hallwil or in the Baden region are looked after by our premium services.',
    },
  ],
  leistungen: [
    { path: '/leistungen/industrie-und-hallenreinigung', text: 'Hall floors, storage zones and equipment, planned around shifts and shutdowns.' },
    { path: '/leistungen/baureinigung', text: 'During and after construction and conversion work, up to the handover.' },
    { path: '/leistungen/bueroreinigung', text: 'For offices, break rooms and changing rooms on site.' },
    { path: '/leistungen/hauswartung', text: 'Inspection rounds, laundry room, minor repairs and waste disposal for residential properties.' },
    { path: '/leistungen/facility-services', text: 'Cleaning, caretaking and grounds for your business premises from a single source.' },
  ],
  planung: {
    title: 'Planning for businesses in Aargau',
    paragraphs: [
      'The distances from Emmenbrücke to Aargau vary by region; the terms for travel stay the same. For halls with shift work, three things matter: when a machine is shut down, which zones are accessible during production and which safety rules apply to external staff.',
      'Whatever applies to contractors in your plant also applies to the cleaning team. Put restricted zones, protective equipment and the emergency contact in writing before the first job starts.',
    ],
  },
  daten: [
    {
      label: 'Holidays in all districts',
      items: ['New Year’s Day', 'Good Friday', 'Ascension', '1 August', 'Christmas Day'],
      text: 'Only these five days are treated like Sundays throughout Aargau. The cantonal government sets four more by district; the fact sheet lists six different arrangements.',
      source: 'agFeiertage',
    },
    {
      label: 'Four more holidays by district',
      groups: [
        { title: 'Aarau, Brugg, Kulm, Lenzburg, Zofingen and Bergdietikon', items: ['Berchtold’s Day', 'Easter Monday', 'Whit Monday', 'St Stephen’s Day'] },
        { title: 'Baden except Bergdietikon', items: ['Easter Monday', 'Whit Monday', 'Corpus Christi', 'St Stephen’s Day'] },
        { title: 'Bremgarten', items: ['Corpus Christi', 'Assumption', 'All Saints’ Day', 'St Stephen’s Day'] },
        {
          title: 'Laufenburg, Muri and, in the Rheinfelden district, Hellikon, Mumpf, Obermumpf, Schupfart, Stein, Wegenstetten',
          items: ['Corpus Christi', 'Assumption', 'All Saints’ Day', 'Immaculate Conception'],
        },
        {
          title: 'Rest of the Rheinfelden district: Kaiseraugst, Magden, Möhlin, Olsberg, Rheinfelden, Wallbach, Zeiningen, Zuzgen',
          items: ['Easter Monday', 'Whit Monday', 'All Saints’ Day', 'St Stephen’s Day'],
        },
        { title: 'Zurzach', items: ['Berchtold’s Day', 'Corpus Christi', 'All Saints’ Day', 'St Stephen’s Day'] },
      ],
      source: 'agFeiertage',
    },
  ],
  faq: [
    {
      question: 'Do you also work in Aarau, Baden or Lenzburg?',
      answer: 'Yes, throughout the canton: in Aarau, Lenzburg and Zofingen, in Baden and Wettingen, in Brugg and the Fricktal, in the Freiamt and on Lake Hallwil. The terms are the same everywhere as in Lucerne, including travel.',
    },
    {
      question: 'Do you clean during shift operations?',
      answer: 'Yes. Cleaning takes place during breaks, between shifts or during planned shutdowns, depending on which zones are free at the time.',
    },
    {
      question: 'Can break rooms and offices on site be cleaned as well?',
      answer: 'Yes. Changing rooms, break rooms and offices can be planned together with the hall on one schedule, as described under [office and practice cleaning](/leistungen/bueroreinigung).',
    },
    {
      question: 'Which documents help before the walk through the hall?',
      answer: 'A hall plan with the zones, the shutdown times and your safety rules for external companies. Send these documents by email so that the walk-through can be prepared properly.',
    },
    {
      question: 'We have sites in several districts. What does that mean for public holidays?',
      answer: 'The cleaning schedule follows the district of each site. On Easter Monday, for example, Aarau has a public holiday while Muri has an ordinary working day; on Assumption it is the other way round. The holidays by district are listed in the box above.',
    },
  ],
  menuText: menu.aargau.text,
}

const nidwalden: KantonPage = {
  name: 'Nidwalden',
  kuerzel: 'NW',
  seo: {
    title: 'Cleaning company in Nidwalden with caretaking',
    description:
      'Cleaning company in Nidwalden for condominiums, lakeside properties and second homes from Hergiswil to Emmetten: caretaking, windows, grounds. Free quote.',
  },
  h1: 'Cleaning company in Nidwalden for lakeside properties',
  lead: [
    'Many properties in Nidwalden are close to Lake Lucerne, from Hergiswil to Beckenried. Not all owners live there; some only come for a few weeks a year.',
    'For communities of condominium owners and property managers, we take on cleaning and caretaking, even when the owners live far away.',
  ],
  facts: [
    { label: 'Access', value: 'A2 via Lucerne' },
    { label: 'Focus', value: 'Condominiums and lakeside properties' },
    { label: 'Many second homes', value: 'Emmetten, almost one flat in three' },
    { label: 'Own public holiday', value: '19 March, St Joseph’s Day' },
  ],
  regionen: [
    { title: 'On Lake Lucerne', orte: ['Hergiswil', 'Stansstad', 'Ennetbürgen', 'Buochs', 'Beckenried'] },
    { title: 'Stans and surroundings', orte: ['Stans', 'Oberdorf', 'Ennetmoos'] },
    { title: 'Engelberg valley and Emmetten', orte: ['Dallenwil', 'Wolfenschiessen', 'Emmetten'] },
  ],
  objekte: [
    {
      title: 'Condominiums with owners living elsewhere',
      text: 'If not all owners live on site, [caretaking](/leistungen/hauswartung) takes over the regular rounds through the building and the flat handovers.',
    },
    {
      title: 'Second homes',
      text: 'In Emmetten in particular, many flats are only used part of the time. We look after them before you arrive, after you leave and with inspection rounds in between.',
    },
    {
      title: 'Villas and residences on the lake',
      text: 'For homes with natural stone, parquet and large glass surfaces on the shore from Hergiswil to Beckenried, see [villas and luxury properties](/premium/luxusimmobilien).',
      premium: true,
    },
    {
      title: 'Boats on Lake Lucerne',
      text: 'Motorboats and yachts at the moorings in Stansstad, Buochs or Beckenried are cared for by our [yacht cleaning](/premium/yacht).',
      premium: true,
    },
  ],
  leistungen: [
    { path: '/leistungen/hauswartung', text: 'For communities of condominium owners and property managers, agreed in writing.' },
    { path: '/premium/luxusimmobilien', title: 'Lakeside villas', text: 'Looking after lakeside properties, even when you are not there.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'For large window fronts with lake views and glass surfaces.' },
    { path: '/leistungen/aussen-und-gruenflaechenpflege', text: 'For the garden, paths and surroundings of your property.' },
    { path: '/premium/yacht', title: 'Yacht', text: 'For boats and yachts on Lake Lucerne.' },
  ],
  planung: {
    title: 'Planning for lakeside municipalities and second homes',
    paragraphs: [
      'From Emmenbrücke the route to Nidwalden runs via Lucerne and the A2 motorway. Cleaning before your arrival needs some lead time, so let us know your dates as early as possible.',
      'Second homes need fixed rules for keys and alarm. Decide in advance who is informed if something is noticed during an inspection round: you, the property manager or a trusted person nearby.',
    ],
  },
  daten: [
    {
      label: 'Public rest days',
      items: ['New Year’s Day', 'St Joseph’s Day (19 March)', 'Ascension', 'Corpus Christi', '1 August', 'Assumption', 'All Saints’ Day', 'Immaculate Conception', 'Good Friday', 'Easter Sunday', 'Whit Sunday', 'Federal Day of Thanksgiving', 'Christmas Day'],
      text: 'Good Friday, Easter Sunday, Whit Sunday, the Federal Day of Thanksgiving and Christmas Day are high holidays. Apart from St Joseph’s Day, every day on the list is treated like a Sunday: eight under the Rest Days Act, 1 August under federal law (Art. 20a Labour Act), and the rest fall on a Sunday anyway. Municipalities may set further holidays by regulation.',
      source: ['nwRuhetage', 'arg'],
    },
    {
      label: 'Second homes',
      text: 'Emmetten 32.51%. It is the only municipality in Nidwalden above 20 percent and is therefore subject to the building rules of the Second Homes Act.',
      source: 'are',
    },
  ],
  faq: [
    {
      question: 'Do you look after second homes while we are away?',
      answer: 'Yes. We clean before you arrive and after you leave and carry out inspection rounds. More under [luxury properties](/premium/luxusimmobilien).',
    },
    {
      question: 'Who checks on the property if the owners do not live there?',
      answer: 'In lakeside municipalities, many flats belong to owners who are only there part of the time. Then there is often nobody who comes by regularly. [Caretaking](/leistungen/hauswartung) takes over inspection rounds, laundry room, waste disposal and flat handovers and reports defects to the body appointed by the community of owners, for example the property manager.',
    },
    {
      question: 'Do you also work in Emmetten and the Engelberg valley?',
      answer: 'Yes, in all eleven municipalities of Nidwalden, from Hergiswil and Stansstad to Wolfenschiessen and Emmetten, with all services and on the same terms.',
    },
    {
      question: 'Do you also care for boats at moorings in Nidwalden?',
      answer: 'Yes, yachts and motorboats on Lake Lucerne, for example in Stansstad, Buochs or Beckenried: interior, upholstery, teak and gelcoat. More under [yacht](/premium/yacht).',
    },
  ],
  menuText: menu.nidwalden.text,
}

const obwalden: KantonPage = {
  name: 'Obwalden',
  kuerzel: 'OW',
  seo: {
    title: 'Cleaning company in Obwalden and Engelberg',
    description:
      'Cleaning company in Obwalden for properties in the Sarneraatal, second homes and hotels in Engelberg: caretaking, deep and construction cleaning. Free quote.',
  },
  h1: 'Cleaning company in Obwalden, from the Sarneraatal to Engelberg',
  lead: [
    'Obwalden consists of two parts: the Sarneraatal with the capital Sarnen, and the high valley of Engelberg, which is reached via Nidwalden.',
    'The two parts need different planning: in the Sarneraatal a fixed routine in residential and commercial buildings matters, while in Engelberg jobs follow the season, arrivals and departures.',
  ],
  facts: [
    { label: 'Access', value: 'A8, Engelberg through its valley' },
    { label: 'Notice dates', value: 'End of March, June and September' },
    { label: 'Own public holiday', value: 'Feast of St Nicholas of Flüe, 25 September' },
    { label: 'Not offered', value: 'Winter maintenance' },
  ],
  regionen: [
    { title: 'Sarneraatal', orte: ['Sarnen', 'Kerns', 'Sachseln', 'Alpnach'] },
    { title: 'Towards the Brünig', orte: ['Giswil', 'Lungern'] },
    { title: 'High valley', orte: ['Engelberg'] },
  ],
  objekte: [
    {
      title: 'Second homes in Engelberg',
      text: 'Many flats in the monastery village stand empty between stays. Here, cleaning between two stays matters more than a fixed weekly routine, which is what our [premium services](/premium) are set up for.',
      premium: true,
    },
    {
      title: 'Hotels',
      text: 'For hotels, we take on deep and special cleaning, for example before an opening, before the season starts or after a renovation.',
    },
    {
      title: 'Properties in the Sarneraatal',
      text: 'In Sarnen, Kerns, Sachseln and Alpnach, we clean stairwells, offices and commercial premises and take on caretaking for residential and commercial buildings.',
    },
    {
      title: 'Change of tenant',
      text: 'When tenants change, we clean before the handover on behalf of the property manager or the owners, with a handover guarantee.',
    },
  ],
  leistungen: [
    { path: '/premium/luxusimmobilien', title: 'Holiday homes', text: 'Cleaning between two stays in Engelberg and on Lake Sarnen.' },
    { path: '/leistungen/sonderreinigungen', text: 'Deep cleaning for hotels and flats, for example before the season.' },
    { path: '/leistungen/baureinigung', text: 'After conversion and renovation, up to the handover.' },
    { path: '/leistungen/hauswartung', text: 'Inspection rounds, laundry room, waste disposal and flat handovers.' },
    { path: '/leistungen/umzugsreinigung', text: 'Final cleaning when tenants change in the Sarneraatal, with a handover guarantee.' },
  ],
  planung: {
    title: 'Season, access and Engelberg',
    paragraphs: [
      'We drive to the Sarneraatal from Emmenbrücke via Lucerne and the A8 motorway. The route to Engelberg runs through Nidwalden and the Engelberg valley.',
      'In Engelberg, settle access, parking and key handover before the first visit, especially if you are not on site yourself.',
      'We do not provide winter maintenance, including in Engelberg. Award snow clearing for driveways and open spaces separately, ideally before the season starts.',
    ],
  },
  daten: [
    {
      label: 'Notice dates',
      text: 'Unless the tenancy agreement says otherwise, a tenancy can be terminated with effect from the end of March, June or September. The notice must be deliverable by the end of December, March or June at the latest.',
      source: 'owSchlichtung',
    },
    {
      label: 'Public rest days',
      items: ['New Year’s Day', 'Ascension', 'Corpus Christi', '1 August', 'Assumption', 'Feast of St Nicholas of Flüe (25 September)', 'All Saints’ Day', 'Immaculate Conception', 'Good Friday', 'Easter Sunday', 'Whit Sunday', 'Federal Day of Thanksgiving', 'Christmas Day'],
      text: 'The Feast of St Nicholas of Flüe is not treated like a Sunday under the Labour Act. As a public rest day, however, work in commercial businesses is in principle prohibited on this day too (Art. 3); exceptions are set out in Art. 5. Each municipality may also set one local holiday that counts as a Sunday.',
      source: 'owRuhetage',
    },
    {
      label: 'Second homes',
      text: 'Engelberg 55.87%, the only municipality in Obwalden above 20 percent. Lungern is below it at 18.92%.',
      source: 'are',
    },
  ],
  faq: [
    {
      question: 'Do you also come to Engelberg?',
      answer: 'Yes. Engelberg belongs to the canton of Obwalden and therefore to our area, with all services and on the same terms.',
    },
    {
      question: 'Do you clean our holiday flat between two stays?',
      answer: 'Yes. Let us know your arrival and departure as early as possible, so that the cleaning falls between your stays and not on your first day of holiday.',
    },
    {
      question: 'When is the best time for deep cleaning in a hotel?',
      answer: 'When the hotel has few guests: in the off-season, before an opening or after a renovation. Plan the date early, as craftsmen are often working at the same time. Cleaning comes last so that no new dust is created. More under [deep and special cleaning](/leistungen/sonderreinigungen) and [construction cleaning](/leistungen/baureinigung).',
    },
    {
      question: 'Do you take on the final cleaning when tenants change?',
      answer: 'Yes, on behalf of the property manager or the owners, with a handover guarantee. Because tenancies in Obwalden end on the last day of March, June or September unless agreed otherwise, handovers cluster on these dates, see [end-of-tenancy cleaning](/leistungen/umzugsreinigung).',
    },
  ],
  menuText: menu.obwalden.text,
}

export const kantone: Dictionary['kantone']['seiten'] = { luzern, zug, aargau, nidwalden, obwalden }

export const kantonUi: Dictionary['kantone']['ui'] = {
  regionen: 'Regions and places',
  objekte: 'Typical properties',
  leistungen: 'Services in demand',
  planung: 'Planning',
  weitere: 'Other cantons',
  overview: 'The whole service area',
  toCanton: 'View canton page',
  seat: 'Our head office',
  daten: {
    title: 'Cantonal facts for planning',
    nav: 'Cantonal facts',
    intro: 'Cantonal rules and official figures that matter for cleaning schedules and changes of tenant, each with its source. In individual cases, the wording of the source applies.',
    source: 'Source:',
    stand: 'Information as of:',
  },
  datenStand: '2026-09-28',
  /** Quellen der Kantonsdaten, einmal je Sprache; Seiten verweisen per Schlüssel */
  quellen: quelle,
  gebiet: 'Throughout our service area, on the same terms',
  cta: {
    title: 'Site visit and quote',
    text: `Tell us about the property and its location. We will get back to you ${responseTime} and visit you for the site visit, free of charge and without obligation.`,
  },
}

export const kantoneUebersicht: Dictionary['kantone']['uebersicht'] = {
  title: 'Your canton in detail',
  text: 'Each canton has its own page: regions and places, typical properties, planning and cantonal facts with sources, for example on public holidays, notice dates or second homes.',
}

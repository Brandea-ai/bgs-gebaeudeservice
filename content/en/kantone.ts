import { company } from '../../shared/company'
import type { Dictionary } from '../de'
import type { KantonPage } from '../de/kantone'
import { answers, responseTime } from './common'
import { nav } from './navigation'

/**
 * Texts of the five canton pages in English (E80, M60). Faithful translation of
 * content/de/kantone.ts with the same keys, no new statements (E18). Place
 * names in English where one exists (Lucerne, Lake Lucerne), otherwise the
 * official name. Titles without brand, metaFor() in shared/seo.ts adds it.
 */

const sameTerms = 'All, on the same terms as across the whole area'
const seat = `${company.address.street}, ${company.address.postalCode} ${company.address.city}`
const menu = nav.areaMenu.cantons

const luzern: KantonPage = {
  name: 'Lucerne',
  kuerzel: 'LU',
  seo: {
    title: 'Cleaning company Lucerne and caretaking',
    description:
      'Building cleaning and caretaking in the canton of Lucerne from our base in Emmenbrücke: city, suburbs, lakeshore, Sursee and Seetal. Quote after a visit.',
  },
  h1: 'Your cleaning company in the canton of Lucerne',
  lead: [
    'Our head office is in Emmenbrücke, in the heart of the Lucerne agglomeration. From here we clean and look after properties, offices and commercial premises throughout the canton, from the city of Lucerne to Lake Sempach and the Entlebuch.',
    'We have been working in cleaning and caretaking since 2006. Before you receive a quote, we look at your property on site. The visit and the quote are free of charge and without obligation.',
  ],
  facts: [
    { label: 'Our head office', value: `${company.address.city}, municipality of Emmen` },
    { label: 'Capital', value: 'Lucerne' },
    { label: 'Lakes', value: 'Lake Lucerne, Lake Sempach, Lake Baldegg' },
    { label: 'Services', value: sameTerms },
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
      text: 'In the city of Lucerne and in centres such as Sursee, we clean offices and practices at times we agree with you to suit your business.',
    },
    {
      title: 'Change of tenant',
      text: 'When tenants change, we clean the flat before the handover, with a handover guarantee. Our caretaking team takes part in the handover.',
    },
    {
      title: 'Lakeside properties',
      text: 'For villas and residences on Lake Lucerne, for example in Meggen, Weggis or Vitznau, we have our premium services: always the same team, with a non-disclosure agreement on request.',
    },
  ],
  leistungen: [
    { path: '/leistungen/hauswartung', title: 'Caretaking', text: 'For property managers and communities of condominium owners who want their property looked after.' },
    { path: '/leistungen/unterhaltsreinigung', title: 'Maintenance cleaning', text: 'Stairwells, entrances and shared areas on a fixed schedule.' },
    { path: '/leistungen/umzugsreinigung', title: 'End-of-tenancy cleaning', text: 'Cleaning before the flat handover, with a handover guarantee.' },
    { path: '/leistungen/bueroreinigung', title: 'Office and practice cleaning', text: 'For offices and practices, scheduled around your working and opening hours.' },
    { path: '/premium/luxusimmobilien', title: 'Villas and residences', text: 'Discreet cleaning and care of lakeside homes.' },
  ],
  planung: {
    title: 'Travel and planning',
    paragraphs: [
      'Because our head office is in the canton, the distances into the city and the agglomeration are short. For properties in the Seetal, in Willisau or in the Entlebuch, we set the schedule and working times during the site visit.',
      'Before the first assignment, agree with us where our team can park and how it gets the keys and access to the rooms. In the city centre in particular, a fixed space for vehicle and equipment helps.',
    ],
  },
  faq: [
    { question: 'Where is your head office?', answer: `At ${seat}, in the Lucerne agglomeration.` },
    {
      question: 'Do you also work outside the city of Lucerne?',
      answer: 'Yes, throughout the canton, from the Seetal to the Entlebuch, with all services and on the same terms.',
    },
    { question: 'How much does a cleaning company cost in the canton of Lucerne?', answer: answers.kostenFaktoren },
    {
      question: 'Do you take care of the cleaning when tenants change?',
      answer: 'Yes. We offer move-out and end-of-tenancy cleaning with a handover guarantee as a separate service: [end-of-tenancy cleaning](/leistungen/umzugsreinigung).',
    },
    { question: 'Do you also take on short-notice assignments?', answer: 'Give us a call. We will clarify with you what is possible at short notice.' },
  ],
  menuText: menu.luzern.text,
}

const zug: KantonPage = {
  name: 'Zug',
  kuerzel: 'ZG',
  seo: {
    title: 'Cleaning company Zug, office cleaning',
    description:
      'Office cleaning, glass and caretaking in Zug: headquarters, practices and properties from Zug and Baar to the Ägeri valley. Advice in four languages.',
  },
  h1: 'Your cleaning company for offices and properties in the canton of Zug',
  lead: [
    'Many companies, including international ones, have their registered office in the canton of Zug. What they need is cleaning that follows the business day and does not disrupt it.',
    'Our staff speak German, English, French and Italian. This makes it easier to coordinate with teams whose working language is not German.',
  ],
  facts: [
    { label: 'Capital', value: 'Zug' },
    { label: 'Lakes', value: 'Lake Zug, Lake Ägeri' },
    { label: 'Municipalities', value: 'All eleven municipalities of the canton' },
    { label: 'Languages', value: 'German, English, French, Italian' },
  ],
  regionen: [
    { title: 'Zug, Baar and Steinhausen', orte: ['Zug', 'Baar', 'Steinhausen'] },
    { title: 'On Lake Zug', orte: ['Cham', 'Hünenberg', 'Risch (Rotkreuz)', 'Walchwil'] },
    { title: 'Ägeri valley and hill villages', orte: ['Unterägeri', 'Oberägeri', 'Menzingen', 'Neuheim'] },
  ],
  objekte: [
    {
      title: 'Offices and headquarters',
      text: 'From a small office to headquarters over several floors: workstations, meeting rooms, reception, kitchenettes and washrooms, at times we set with you.',
    },
    {
      title: 'Family offices and confidential rooms',
      text: 'Where confidential documents are kept, you always have the same team, including outside your working hours. On request, we sign a non-disclosure agreement.',
    },
    {
      title: 'Glass and facades',
      text: 'Office buildings often have large glass surfaces. We clean windows, glass doors and facades on their own or in addition to office cleaning.',
    },
    {
      title: 'Living on Lake Zug and Lake Ägeri',
      text: 'For lakeside villas and residences, for example in Walchwil or Oberägeri, we have our premium services. We also clean boats and yachts on Lake Zug.',
    },
  ],
  leistungen: [
    { path: '/leistungen/bueroreinigung', title: 'Office and practice cleaning', text: 'For offices, administrations and practices, scheduled around your working hours.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', title: 'Window and facade cleaning', text: 'For windows, glass surfaces and facades of commercial buildings.' },
    { path: '/leistungen/facility-services', title: 'Facility services', text: 'Cleaning, caretaking and grounds in one contract with one contact person.' },
    { path: '/leistungen/sonderreinigungen', title: 'Deep and special cleaning', text: 'Deep cleaning when you move offices, against limescale, grease and old layers.' },
    { path: '/premium/yacht', title: 'Yacht', text: 'Interior, upholstery, teak and gelcoat, on Lake Zug and Lake Lucerne.' },
  ],
  planung: {
    title: 'Travel and planning',
    paragraphs: [
      'From Emmenbrücke we reach the canton of Zug via the A14 motorway. We schedule office assignments so that they do not disrupt your business, for example outside your office hours.',
      'In commercial buildings with a reception, access cards or an alarm system, we clarify access before the first assignment. If you have several sites in our area, let us know all of them in your enquiry.',
    ],
  },
  faq: [
    {
      question: 'Can we communicate in English?',
      answer: `${answers.sprachen} Tell us in your enquiry which language you prefer.`,
    },
    {
      question: 'Do you clean outside office hours?',
      answer: 'We set the working times with you, to suit your working and opening hours.',
    },
    { question: 'How much does a cleaning company cost in the canton of Zug?', answer: answers.kostenFaktoren },
    {
      question: 'Do you also work in Baar, Cham or the Ägeri valley?',
      answer: 'Yes, in all municipalities of the canton of Zug, with all services and on the same terms.',
    },
    { question: 'Are you insured?', answer: answers.versicherung },
  ],
  menuText: menu.zug.text,
}

const aargau: KantonPage = {
  name: 'Aargau',
  kuerzel: 'AG',
  seo: {
    title: 'Cleaning company Aargau and caretaking',
    description:
      'Industrial, warehouse and construction cleaning and caretaking in Aargau: from the Freiamt and Seetal to Aarau and Baden, on the same terms as in Lucerne.',
  },
  h1: 'Your cleaning company for industry and businesses in the canton of Aargau',
  lead: [
    'Aargau has many industrial and commercial businesses. Production and storage halls, workshops and commercial buildings need cleaning that follows shifts and processes.',
    'From the Freiamt and the Seetal on the Lucerne border to the Aarau and Baden regions, we work throughout the canton, with all services and on the same terms as in Lucerne.',
  ],
  facts: [
    { label: 'Capital', value: 'Aarau' },
    { label: 'Lakes and rivers', value: 'Lake Hallwil, Aare, Reuss, Limmat and Rhine' },
    { label: 'Focus', value: 'Halls, warehouses, workshops and residential properties' },
    { label: 'Services', value: sameTerms },
  ],
  regionen: [
    { title: 'Freiamt', orte: ['Muri', 'Wohlen', 'Bremgarten', 'Sins'] },
    { title: 'Seetal and Lake Hallwil', orte: ['Meisterschwanden', 'Seengen', 'Beinwil am See'] },
    { title: 'Aarau, Lenzburg and Zofingen', orte: ['Aarau', 'Lenzburg', 'Zofingen', 'Oftringen'] },
    { title: 'Baden and Mutschellen region', orte: ['Baden', 'Wettingen', 'Ennetbaden', 'Bergdietikon', 'Oberwil-Lieli'] },
    { title: 'Brugg and Fricktal', orte: ['Brugg', 'Windisch', 'Rheinfelden', 'Frick'] },
  ],
  objekte: [
    {
      title: 'Production and storage halls',
      text: 'We clean hall floors, storage areas, racks and traffic routes once or regularly, at times we coordinate with production and shift work.',
    },
    {
      title: 'Machines and equipment',
      text: 'We clean machines to your specifications and in consultation with your maintenance team. When a system is shut down and which products are suitable, we agree before the assignment.',
    },
    {
      title: 'New builds and conversions',
      text: 'After a hall has been built or a commercial building converted, we clean until the handover so that operations can start.',
    },
    {
      title: 'Residential properties',
      text: 'For apartment buildings and condominiums, we provide maintenance cleaning and caretaking. Villas on Lake Hallwil or in the Baden region are looked after by our premium services.',
    },
  ],
  leistungen: [
    { path: '/leistungen/industrie-und-hallenreinigung', title: 'Industrial and warehouse cleaning', text: 'Production and storage halls, workshops, machines and equipment.' },
    { path: '/leistungen/baureinigung', title: 'Construction cleaning', text: 'During and after construction and conversion work, up to the handover.' },
    { path: '/leistungen/bueroreinigung', title: 'Office and practice cleaning', text: 'For offices, staff rooms and changing rooms on site.' },
    { path: '/leistungen/hauswartung', title: 'Caretaking', text: 'Inspection rounds, laundry room, minor repairs and waste disposal for residential properties.' },
    { path: '/leistungen/facility-services', title: 'Facility services', text: 'Cleaning, caretaking and grounds for your business premises from a single source.' },
  ],
  planung: {
    title: 'Travel and planning',
    paragraphs: [
      'The distance from Emmenbrücke into Aargau varies by region. We therefore set the schedule, working times and equipment shutdowns during the site visit and record them in the quote.',
      'Before the quote, we look at halls, equipment and processes on a walk-through. Your safety and operating rules also apply to our team, and we clarify them with you before the first assignment.',
    ],
  },
  faq: [
    {
      question: 'Do the same terms apply in Aargau as in Lucerne?',
      answer: 'Yes. We offer all services throughout our area on the same terms.',
    },
    {
      question: 'Do you also clean during shift operations?',
      answer: 'We coordinate the working times with you around production and shifts, so that the cleaning does not hold up operations.',
    },
    {
      question: 'Does machine maintenance come with it?',
      answer: 'No. We clean machines and equipment to your specifications, maintenance and repairs remain with your maintenance team.',
    },
    { question: 'How much does a cleaning company cost in the canton of Aargau?', answer: answers.kostenFaktoren },
    { question: 'Do you clean with environmentally friendly products?', answer: answers.mittel },
  ],
  menuText: menu.aargau.text,
}

const nidwalden: KantonPage = {
  name: 'Nidwalden',
  kuerzel: 'NW',
  seo: {
    title: 'Cleaning company Nidwalden, caretaking',
    description:
      'Cleaning and caretaking in Nidwalden: properties on Lake Lucerne, second homes and villas from Hergiswil to Beckenried. Quote after a site visit.',
  },
  h1: 'Your cleaning company in the canton of Nidwalden',
  lead: [
    'Nidwalden stretches from the shore of Lake Lucerne at Hergiswil and Ennetbürgen to the Engelberg valley. Many properties are close to the lake, and some are only lived in part of the time.',
    'We clean and look after residential and commercial buildings, second homes and villas throughout the canton. We prepare the quote after a site visit, free of charge and without obligation.',
  ],
  facts: [
    { label: 'Capital', value: 'Stans' },
    { label: 'Lake', value: 'Lake Lucerne' },
    { label: 'Municipalities', value: 'All eleven municipalities of the canton' },
    { label: 'Services', value: sameTerms },
  ],
  regionen: [
    { title: 'On Lake Lucerne', orte: ['Hergiswil', 'Stansstad', 'Ennetbürgen', 'Buochs', 'Beckenried'] },
    { title: 'Stans and surroundings', orte: ['Stans', 'Oberdorf', 'Ennetmoos'] },
    { title: 'Engelberg valley and Emmetten', orte: ['Dallenwil', 'Wolfenschiessen', 'Emmetten'] },
  ],
  objekte: [
    {
      title: 'Second homes',
      text: 'According to the federal housing inventory, around a third of the homes in Emmetten are second homes. We clean before you arrive and after you leave, and check on things while you are away.',
    },
    {
      title: 'Lakeside villas and residences',
      text: 'In homes with natural stone, parquet and large glass surfaces, we clean with care for each material. You always have the same team, with a non-disclosure agreement on request.',
    },
    {
      title: 'Condominiums',
      text: 'If not all owners live on site, caretaking covers inspection rounds, the laundry room, waste disposal and flat handovers, and reports defects to the agreed contact.',
    },
    {
      title: 'Boats on Lake Lucerne',
      text: 'We clean yachts and motorboats inside and out, with care for teak, gelcoat and upholstery.',
    },
  ],
  leistungen: [
    { path: '/leistungen/hauswartung', title: 'Caretaking', text: 'For communities of condominium owners and property managers, agreed in writing.' },
    { path: '/premium/luxusimmobilien', title: 'Villas and second homes', text: 'Cleaning before your arrival and after your departure, inspection rounds while you are away.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', title: 'Window and facade cleaning', text: 'For large window fronts and glass surfaces.' },
    { path: '/leistungen/aussen-und-gruenflaechenpflege', title: 'Grounds and green spaces', text: 'For the garden and grounds of your property.' },
    { path: '/premium/yacht', title: 'Yacht', text: 'For boats and yachts on Lake Lucerne.' },
  ],
  planung: {
    title: 'Travel and planning',
    paragraphs: [
      'From Emmenbrücke the route leads via Lucerne and the A2 motorway to Nidwalden. Cleaning before your arrival is best planned with some notice, so let us know your dates as early as possible.',
      'For second homes, we agree fixed rules for keys and alarm and decide whom we inform about anything we notice during inspection rounds.',
    ],
  },
  faq: [
    {
      question: 'Do you look after second homes while we are away?',
      answer: 'Yes. We clean before you arrive and after you leave, and carry out inspection rounds. More under [Luxury properties](/premium/luxusimmobilien).',
    },
    {
      question: 'Do you also clean boats?',
      answer: 'Yes, yachts and motorboats on Lake Lucerne: interior, upholstery, teak and gelcoat. More under [Yacht](/premium/yacht).',
    },
    { question: 'How much does a cleaning company cost in the canton of Nidwalden?', answer: answers.kostenFaktoren },
    {
      question: 'How do we get a quote?',
      answer: `Call us or write to us. We will get back to you ${responseTime}, look at the property and send you the quote in writing.`,
    },
    { question: 'Are you insured?', answer: answers.versicherung },
  ],
  menuText: menu.nidwalden.text,
}

const obwalden: KantonPage = {
  name: 'Obwalden',
  kuerzel: 'OW',
  seo: {
    title: 'Cleaning company Obwalden and Engelberg',
    description:
      'Cleaning and caretaking in Obwalden: properties in the Sarneraatal, second homes and hotels in Engelberg. Free quote after a site visit.',
  },
  h1: 'Your cleaning company in the canton of Obwalden',
  lead: [
    'Obwalden consists of two parts: the Sarneraatal with the capital Sarnen, and the high valley of Engelberg, which is reached via Nidwalden.',
    'In the Sarneraatal we clean and look after residential and commercial buildings and businesses. Engelberg is shaped by second homes and hotels, and we offer cleaning and care for both.',
  ],
  facts: [
    { label: 'Capital', value: 'Sarnen' },
    { label: 'Lakes', value: 'Lake Sarnen, Lake Lungern' },
    { label: 'Municipalities', value: 'All seven municipalities, Engelberg included' },
    { label: 'Not offered', value: 'Winter maintenance' },
  ],
  regionen: [
    { title: 'Sarneraatal', orte: ['Sarnen', 'Kerns', 'Sachseln', 'Alpnach'] },
    { title: 'Towards the Brünig Pass', orte: ['Giswil', 'Lungern'] },
    { title: 'High valley', orte: ['Engelberg'] },
  ],
  objekte: [
    {
      title: 'Second homes in Engelberg',
      text: 'According to the federal housing inventory, more than half of the homes in Engelberg are second homes. We clean before you arrive and after you leave, and check on things while you are away.',
    },
    {
      title: 'Hotels',
      text: 'For hotels, we provide deep and specialist cleaning, for example before an opening, before the start of the season or after a renovation.',
    },
    {
      title: 'Properties in the Sarneraatal',
      text: 'In Sarnen, Kerns, Sachseln and Alpnach, we clean stairwells, offices and commercial premises and provide caretaking for residential and commercial buildings.',
    },
    {
      title: 'Moves and handovers',
      text: 'When a flat changes owner or tenant, we clean before the handover, with a handover guarantee.',
    },
  ],
  leistungen: [
    { path: '/premium/luxusimmobilien', title: 'Villas and second homes', text: 'Cleaning before your arrival and after your departure, inspection rounds while you are away.' },
    { path: '/leistungen/sonderreinigungen', title: 'Deep and special cleaning', text: 'Deep cleaning for hotels and flats, for example before the season.' },
    { path: '/leistungen/baureinigung', title: 'Construction cleaning', text: 'After conversion and renovation, up to the handover.' },
    { path: '/leistungen/hauswartung', title: 'Caretaking', text: 'Inspection rounds, laundry room, waste disposal and flat handovers.' },
    { path: '/leistungen/unterhaltsreinigung', title: 'Maintenance cleaning', text: 'Stairwells and commercial premises on a fixed schedule.' },
  ],
  planung: {
    title: 'Travel and planning',
    paragraphs: [
      'We drive into the Sarneraatal from Emmenbrücke via Lucerne and the A8 motorway. The route to Engelberg leads through Nidwalden and the Engelberg valley.',
      'In Engelberg, we plan assignments around arrivals, departures and the season. Clarify access, parking and key handover during the site visit.',
      'We do not offer winter maintenance. Snow clearing around the property should therefore be arranged separately.',
    ],
  },
  faq: [
    {
      question: 'Do you also come to Engelberg?',
      answer: 'Yes. Engelberg belongs to the canton of Obwalden and therefore to our area, with all services and on the same terms.',
    },
    {
      question: 'Do you clean before we arrive?',
      answer: 'Yes. We clean before you arrive and after you leave. Let us know your dates as early as possible.',
    },
    { question: 'Do you offer winter maintenance?', answer: 'No, we do not offer winter maintenance.' },
    { question: 'How much does a cleaning company cost in the canton of Obwalden?', answer: answers.kostenFaktoren },
  ],
  menuText: menu.obwalden.text,
}

export const kantone: Dictionary['kantone']['seiten'] = { luzern, zug, aargau, nidwalden, obwalden }

export const kantonUi: Dictionary['kantone']['ui'] = {
  regionen: 'Regions and places',
  objekte: 'Typical properties',
  leistungen: 'Services in demand',
  weitere: 'Other cantons',
  overview: 'The whole service area',
  toCanton: 'View canton page',
  seat: 'Our head office',
  cta: {
    title: 'Site visit and quote',
    text: `Tell us about the property and its location. We will get back to you ${responseTime} and visit you for the site visit, free of charge and without obligation.`,
  },
}

export const kantoneUebersicht: Dictionary['kantone']['uebersicht'] = {
  title: 'Your canton in detail',
  text: 'Each canton has its own page: which regions and places belong to it, which properties are typical there and what we look out for when planning.',
}

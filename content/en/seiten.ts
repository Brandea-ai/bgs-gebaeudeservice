import { company, premiumLabel } from '../../shared/company'
import type { PagePath } from '../../shared/seo'
import type { Dictionary } from '../de'
import type { Step } from '../types'
import { answers, cantons, languages, premiumLine, register, responseTime, steps } from './common'

/**
 * English texts of the home page, About us, Contact, Service area and the two
 * overviews (M60). Faithful translation of content/de/seiten.ts (E18).
 */

type Card = { title: string; text: string }
type LinkCard = Card & { path: PagePath }
type Seiten = Dictionary['seiten']

/** Verified key figures (E18, as of September 2026) */
export const proof: Seiten['proof'] = [
  { value: 'Since 2006', label: 'Experience in cleaning and caretaking' },
  { value: 'Over 120', label: 'Clients' },
  { value: 'Over 50', label: 'Employees, four languages' },
  { value: 'CHF 10m', label: 'Business liability cover' },
]

/** Steps up to the first assignment, same on home and contact page (four steps, one video each) */
const offerSteps: Step[] = [
  steps.anfrage,
  steps.besichtigung,
  {
    title: 'Agreement',
    text: 'You review the quote at your own pace. Once you accept, it is settled which services we provide, how often and at what times.',
  },
  {
    title: 'Start',
    text: 'We schedule the first assignment and agree times and access with you, for example with a key or badge.',
  },
]

/** Questions that read the same on home and contact page (E18) */
const faq = {
  schnell: {
    question: 'How quickly will I receive a quote?',
    answer: `We will get back to you ${responseTime} and arrange an appointment for the site visit. You then receive the quote in writing.`,
  },
  kosten: {
    question: 'What does the cleaning cost?',
    answer: `${answers.kosten} More in our guide: [What the cost of maintenance cleaning depends on](/blog/reinigungskosten-schweiz).`,
  },
  gebiet: { question: 'Which regions do you cover?', answer: answers.gebiet },
  versichert: { question: 'Are you insured?', answer: answers.versicherung },
  kurzfristig: {
    question: 'Do you also take on assignments at short notice?',
    answer: 'Give us a call. We will discuss with you what is possible at short notice.',
  },
}

export const home: Seiten['home'] = {
  eyebrow: `Cleaning and caretaking from ${company.address.city}`,
  h1: 'Building cleaning and caretaking for Lucerne, Zug and the region',
  lead: 'Clean, well-kept properties, offices and halls, without you having to look after them yourself. For businesses, property managers and discerning private clients. We look at your property and prepare a written quote.',
  proofTitle: 'At a glance',
  services: {
    title: 'Our services',
    intro: 'Regular cleaning, one-off assignments and the care of entire properties. Choose by occasion, and we clarify the scope during the site visit.',
    all: 'All services at a glance',
    premium: {
      title: premiumLabel,
      text: 'Cleaning for exacting standards, discreet and in your language: villas, lofts and residences, private jets and yachts, as well as hotels and family offices.',
      link: 'Premium services',
    },
  },
  audiences: {
    title: 'Who we work for',
    intro: 'Four client groups with different needs. This is what you gain in concrete terms.',
    items: [
      {
        key: 'verwaltungen',
        title: 'Property managers and condominium owners',
        text: 'You look after properties and need someone on site to keep an eye on things.',
        points: [
          'Stairwell, entrance and grounds kept on a fixed schedule',
          'Inspection rounds in which we report defects to you',
          'Move-out cleaning with a handover guarantee when tenants change',
        ],
        link: { path: '/leistungen/hauswartung', text: 'Go to caretaking' },
      },
      {
        key: 'unternehmen',
        title: 'Businesses',
        text: 'Offices, practices, commercial premises and production stay clean without the cleaning disrupting your work.',
        points: [
          'Cleaning times to suit your working and opening hours',
          'Restocking service for consumables',
          'Cleaning, caretaking and grounds in one contract on request',
        ],
        link: { path: '/leistungen/bueroreinigung', text: 'Go to office cleaning' },
      },
      {
        key: 'privat',
        title: 'Private owners',
        text: 'For villas, lofts, residences and second homes. We do not take on ordinary private households.',
        points: [
          'The same team always works for you',
          'Natural stone, parquet and high-gloss surfaces, cleaned to suit the material',
          'Keys and alarm according to rules we agree with you',
        ],
        link: { path: '/premium/luxusimmobilien', text: 'Go to luxury properties' },
      },
      {
        key: 'premium',
        title: 'Private jets, yachts and hotels',
        text: 'For cabins, decks and rooms with high-quality materials that need particular care.',
        points: [
          'With a non-disclosure agreement on request',
          'Including evenings, weekends and while you are away',
          'In hotels, assignments before openings and after renovations',
        ],
        link: { path: '/premium', text: 'Premium services' },
      },
    ],
  },
  steps: {
    title: 'How to get your quote',
    intro: 'From the first call to the first assignment. The site visit and the quote are free of charge and non-binding.',
    items: offerSteps,
  },
  area: {
    title: 'Our service area',
    text: `From our base in ${company.address.city}, we work in the cantons of ${cantons}. We offer all our services throughout the area, on the same terms everywhere.`,
    link: 'View service area',
  },
  faq: [
    { question: 'How much does a cleaning company cost per hour?', answer: answers.kostenFaktoren },
    faq.schnell,
    {
      question: 'Do I need maintenance cleaning or caretaking?',
      answer:
        'Maintenance cleaning covers cleaning on a fixed schedule. Caretaking goes further: inspection rounds, minor repairs, building services, waste disposal, flat handovers and grounds maintenance. If you only need cleaning, [maintenance cleaning](/leistungen/unterhaltsreinigung) is the right choice.',
    },
    {
      question: 'Do you also clean private households?',
      answer: 'Not ordinary private households. For villas, lofts, residences and second homes, see our [premium services](/premium).',
    },
    faq.kurzfristig,
    { question: 'Do you clean with environmentally friendly products?', answer: answers.mittel },
  ],
  cta: {
    title: 'A quote for your property',
    text: `Briefly describe your property and what you need. We will get back to you ${responseTime} and arrange a site visit.`,
  },
}

export const about: Seiten['about'] = {
  h1: `Cleaning and caretaking from ${company.address.city}, since 2006`,
  lead: `We have been working in cleaning and caretaking since 2006. Today, over 50 employees look after more than 120 clients in the cantons of ${cantons}, in ${languages}.`,
  promises: {
    title: 'What you can rely on',
    items: [
      { key: 'persoenlich', title: 'Personal', text: 'Your enquiry is handled personally by our managing director.' },
      { key: 'offerte', title: 'Quote after a site visit', text: 'We only quote a price once we have seen your property. The site visit and the quote are free of charge and non-binding.' },
      { key: 'gebiet', title: 'Throughout the area', text: `All services in the cantons of ${cantons}, on the same terms everywhere.` },
      { key: 'versichert', title: 'Insured', text: answers.versicherung.replace('Yes. ', '') },
      { key: 'sprachen', title: 'Four languages', text: answers.sprachen },
      { key: 'umwelt', title: 'Environmentally friendly products', text: 'On request, we clean with environmentally friendly products.' },
    ],
  },
  work: {
    title: 'How we work',
    intro: 'Four principles that apply to every assignment, from office cleaning to caretaking.',
    items: [
      {
        title: 'Look first, then quote',
        paragraphs: [
          'Floor coverings, glass surfaces, use and access determine the effort involved. That is why we first look at your property on site and clarify the scope, schedule and times with you.',
          'Only then do we name a price, in writing in the quote, free of charge and non-binding.',
        ],
      },
      {
        title: 'Clearly agreed',
        paragraphs: [
          'Once you accept, it is settled which rooms and tasks are included, how often we come and at what times. We arrange access beforehand, for example with a key or badge.',
          'We say openly what is not included and name the service that fits.',
        ],
      },
      {
        title: 'Short lines of communication',
        paragraphs: [
          `Your enquiry is handled personally by our managing director, and you will hear from us ${responseTime}.`,
          'If you need several services, you can combine them as [facility services](/leistungen/facility-services) in one contract, with one contact person for everything.',
        ],
      },
      {
        title: 'Materials and products',
        paragraphs: [
          'With maintenance cleaning, we restock consumables such as paper and soap. On request, we clean with environmentally friendly products.',
          'We clean natural stone, parquet and high-gloss surfaces to suit the material, with care for sensitive surfaces.',
        ],
      },
    ],
  },
  history: {
    title: 'In the region since 2006',
    items: [
      { label: '2006', title: 'The beginning', text: 'We have been working in cleaning and caretaking since 2006.' },
      {
        label: 'Today',
        title: 'Over 50 employees, over 120 clients',
        text: 'As of September 2026. We work for businesses, property managers, owners and private clients with exacting standards.',
      },
      {
        label: 'Head office',
        title: company.address.city,
        text: `${company.legalName} is entered in the ${register}.`,
      },
    ],
  },
  languages: {
    title: 'Four languages',
    text: `Our employees speak ${languages}. This makes it easier to agree things with international teams, with tenants and with clients who prefer to speak their own language. This website is available in the same four languages.`,
  },
  region: {
    title: 'Five cantons, the same terms',
    text: `From ${company.address.city}, we work in the cantons of ${cantons}. We offer all our services throughout the area, and the same travel terms apply everywhere.`,
    link: 'View service area',
  },
  values: {
    title: 'Our values in everyday work',
    intro: 'Values show in what you do. That is why this lists what we actually do.',
    items: [
      { key: 'ehrlich', title: 'Honest about prices', text: 'We only name prices in the written quote, after we have seen the property. A price without a site visit would often turn out to be wrong later.' },
      { key: 'klar', title: 'Clear about scope', text: 'Every service page also states what is not included, with a link to the service that fits.' },
      { key: 'nachbessern', title: 'We stand by our work', text: 'If the property manager finds fault with our move-out cleaning at the handover, we clean again free of charge. The details are set out in the quote.' },
      { key: 'versichert', title: 'Responsibility', text: 'For damage during our work, we have business liability insurance with cover of CHF 10 million.' },
      { key: 'diskret', title: 'Discreet', text: 'In our premium services, we sign a non-disclosure agreement on request. We handle keys and alarms according to fixed rules.' },
      { key: 'umwelt', title: 'Care for the environment', text: 'On request, we clean with environmentally friendly products. Just let us know during the site visit.' },
    ],
  },
  contact: {
    title: 'Your contact person',
    text: `Your enquiry goes directly to our managing director. He will get back to you ${responseTime}.`,
  },
  register: { title: 'Registration details', court: register, uid: 'UID' },
  statsLabel: 'In figures',
  faq: [faq.kosten, faq.gebiet, faq.kurzfristig],
  cta: {
    title: 'Arrange a site visit',
    text: 'During the site visit, we look at your property and clarify the scope and times. You then receive a written quote.',
  },
}

export const contact: Seiten['contact'] = {
  h1: 'Contact and quote',
  lead: `Call us or write to us. We will get back to you ${responseTime}.`,
  channels: {
    title: 'How to reach us',
    phone: { title: 'Phone', hint: 'For questions and to arrange an appointment for the site visit.', action: 'Call' },
    mobile: { title: 'Mobile', hint: 'Our mobile number, in addition to the landline.', action: 'Call' },
    email: { title: 'Email', hint: 'For enquiries with documents, such as floor plans, area lists or photos.', action: 'Write an email' },
    form: { title: 'Form', value: 'Request a quote', hint: 'The key details in a few fields, and you choose the service from a list.', action: 'Go to the form' },
    address: { title: 'Address', hint: 'Our head office. The site visit takes place at your property.', action: 'Go to the map' },
  },
  brief: {
    title: 'What your enquiry should include',
    intro: 'The more precise your details, the better we can prepare the site visit. If anything is missing, we clarify it in conversation.',
    items: [
      { key: 'objekt', title: 'Property', text: 'Type of property, for example office, practice, apartment building, hall or villa.' },
      { key: 'ort', title: 'Location', text: 'Address or postcode of the property.' },
      { key: 'groesse', title: 'Size', text: 'Approximate area, number of rooms, flats or floors.' },
      { key: 'leistung', title: 'Service', text: 'What needs doing, for example maintenance cleaning, caretaking or a one-off cleaning.' },
      { key: 'rhythmus', title: 'Schedule and times', text: 'How often and when, for example before work starts, in the evening or at the weekend.' },
      { key: 'start', title: 'Start', text: 'From when you need the service, and for construction and move-out cleaning the handover date.' },
      { key: 'zugang', title: 'Access and special features', text: 'Key or badge, sensitive floors and materials, large glass surfaces.' },
    ],
    note: 'You can send us floor plans, area lists or photos by email.',
  },
  steps: { title: 'From enquiry to first assignment', items: offerSteps },
  map: {
    title: 'How to find us',
    text: `Based in ${company.address.city}. We work in the cantons of ${cantons}.`,
  },
  faq: [faq.schnell, faq.kosten, faq.gebiet, faq.versichert, faq.kurzfristig],
  cta: {
    title: 'Describe your property to us',
    text: `Your property and what you need, in the form just below, are enough. We will get back to you ${responseTime} and arrange the site visit.`,
  },
}

export const area: Seiten['area'] = {
  h1: 'Service area: Central Switzerland and Aargau',
  lead: `Our service area covers all of the cantons of ${cantons}. Every service is available throughout, for property managers and businesses as well as through our premium services.`,
  cantonsTitle: 'Cantons',
  cantonLabels: ['Canton of Lucerne', 'Canton of Zug', 'Canton of Aargau', 'Canton of Nidwalden', 'Canton of Obwalden'],
  // Places by canton (S06): same places as places.groups, regrouped; keys as in company.cantons
  cantonPlaces: {
    Luzern: ['Lucerne', 'Horw', 'Meggen', 'Weggis', 'Vitznau', 'Eich'],
    Zug: ['Zug', 'Cham', 'Risch', 'Hünenberg', 'Walchwil', 'Baar', 'Oberägeri'],
    Aargau: ['Meisterschwanden', 'Ennetbaden', 'Bergdietikon', 'Oberwil-Lieli'],
    Nidwalden: ['Hergiswil', 'Stansstad', 'Ennetbürgen'],
    Obwalden: ['Engelberg'],
  },
  seatTitle: 'Head office and contact',
  seatText: 'Travel from Emmenbrücke is on the same terms everywhere, whether to Sursee, Baar, Muri or Engelberg.',
  // Building block 6.1: only facts that appear with a source on the canton pages
  vergleich: {
    nav: 'Comparison',
    title: 'The five cantons compared',
    intro: 'Services and terms are the same everywhere, including travel. The differences lie in notice dates, public holidays and second homes, and they matter for the cleaning schedule.',
    columns: ['Canton', 'Focus', 'Default notice dates', 'Holidays: what is special', 'Second homes over 20%'],
    rows: [
      ['[Lucerne](/einzugsgebiet/luzern)', 'Housing, offices, practices', 'As in the tenancy agreement, otherwise local custom (Art. 266c CO)', 'St Stephen’s Day a holiday, St Joseph’s by municipality', 'Flühli, Vitznau, Weggis'],
      ['[Zug](/einzugsgebiet/zug)', 'Offices and headquarters', '31/3, 30/6, 30/9', 'Four customary days off', 'None'],
      ['[Aargau](/einzugsgebiet/aargau)', 'Halls, warehouses, housing', 'As in the tenancy agreement, otherwise local custom (Art. 266c CO)', 'Six district arrangements', 'None'],
      ['[Nidwalden](/einzugsgebiet/nidwalden)', 'Lakeside properties, condominiums', 'As in the tenancy agreement, otherwise local custom (Art. 266c CO)', 'St Joseph’s Day (19/3)', 'Emmetten'],
      ['[Obwalden](/einzugsgebiet/obwalden)', 'Sarneraatal, hotels in Engelberg', '31/3, 30/6, 30/9', 'Nicholas of Flüe (25/9)', 'Engelberg'],
    ],
    note: 'Municipalities do not have to record second homes as such in the buildings register. According to ARE, the shares can therefore not be compared between municipalities.',
    sources: ['zgMietrecht', 'owSchlichtung', 'orMiete', 'luRuhetage', 'zgFeiertagsaehnlich', 'agFeiertage', 'nwRuhetage', 'owRuhetage', 'are'] as const,
  },
  places: {
    title: 'Lakeside areas and holiday resorts',
    text: 'According to the housing inventory, more than half of the flats in Flühli with Sörenberg and in Engelberg are not primary residences, and almost one in three in Emmetten and Vitznau. What counts there is less a fixed weekly routine than cleaning before arrival and after departure, plus inspection rounds in between. For these properties, see our [premium services](/premium).',
    sources: ['are'] as const,
    groups: [
      { title: 'On Lake Lucerne', items: ['Lucerne', 'Horw', 'Meggen', 'Weggis', 'Vitznau', 'Hergiswil', 'Stansstad', 'Ennetbürgen'] },
      { title: 'On Lake Zug and Lake Ägeri', items: ['Zug', 'Cham', 'Risch', 'Hünenberg', 'Walchwil', 'Baar', 'Oberägeri'] },
      { title: 'On Lake Sempach and Lake Hallwil', items: ['Eich', 'Meisterschwanden'] },
      { title: 'Holiday resorts in the mountains', items: ['Sörenberg', 'Emmetten', 'Engelberg'] },
    ],
  },
  cta: {
    title: 'Is your property in our area?',
    text: `Tell us the address and type of property. If it is in one of the five cantons, we will get back to you ${responseTime} and arrange the site visit, free of charge and without obligation.`,
  },
}

export const servicesOverview: Seiten['servicesOverview'] = {
  h1: 'Cleaning and caretaking for properties, offices and businesses',
  lead: `Ongoing cleaning, one-off assignments or looking after entire properties: choose by what you need. For businesses, property managers and owners in the cantons of ${cantons}. Not sure what fits? We clarify it during the site visit.`,
  groups: [
    {
      title: 'Ongoing cleaning',
      text: 'For properties, offices and business premises, on a fixed schedule.',
      items: [
        { title: 'Maintenance cleaning', path: '/leistungen/unterhaltsreinigung', text: 'Regular cleaning of properties and business premises, restocking service included.' },
        { title: 'Office and practice cleaning', path: '/leistungen/bueroreinigung', text: 'Cleaning of offices and practices, scheduled around your working hours.' },
      ],
    },
    {
      title: 'One-off and special cleaning',
      text: 'For construction, moves, glass surfaces and production.',
      items: [
        { title: 'Deep and special cleaning', path: '/leistungen/sonderreinigungen', text: 'Deep cleaning of residential, office and commercial premises, as a one-off or at longer intervals.' },
        { title: 'End-of-tenancy cleaning', path: '/leistungen/umzugsreinigung', text: 'Final clean before a flat or business premises are handed over, with a handover guarantee.' },
        { title: 'Construction and post-construction cleaning', path: '/leistungen/baureinigung', text: 'Cleaning during and after construction and renovation work.' },
        { title: 'Window and facade cleaning', path: '/leistungen/fenster-und-fassadenreinigung', text: 'Windows, glass surfaces and facades, including high-pressure cleaning.' },
        { title: 'Industrial and warehouse cleaning', path: '/leistungen/industrie-und-hallenreinigung', text: 'Production halls, warehouses, machinery and equipment.' },
      ],
    },
    {
      title: 'Property care',
      text: 'For property managers, owners and businesses who want everything from a single provider.',
      items: [
        { title: 'Caretaking', path: '/leistungen/hauswartung', text: 'Inspection rounds, stairwell, laundry room, minor repairs, building services, flat handovers, waste disposal and grounds.' },
        { title: 'Grounds and green space maintenance', path: '/leistungen/aussen-und-gruenflaechenpflege', text: 'Maintenance of the grounds and green spaces of your property.' },
        { title: 'Facility services', path: '/leistungen/facility-services', text: 'Several services under one contract with one contact person.' },
      ],
    },
  ] satisfies { title: string; text: string; items: LinkCard[] }[],
  guide: {
    title: 'Which service is right for you?',
    intro: 'Common situations and the service that fits them. Not sure? We clarify it during the site visit.',
    items: [
      { situation: 'The stairwell and common areas should be cleaned regularly.', path: '/leistungen/unterhaltsreinigung' },
      { situation: 'An office or practice should be cleaned without disrupting work.', path: '/leistungen/bueroreinigung' },
      { situation: 'A flat or business premises are being handed over.', path: '/leistungen/umzugsreinigung' },
      { situation: 'Floors, joints and sanitary facilities need a thorough clean.', path: '/leistungen/sonderreinigungen' },
      { situation: 'A new build or conversion is about to be handed over.', path: '/leistungen/baureinigung' },
      { situation: 'Windows, shop windows or the facade are dirty.', path: '/leistungen/fenster-und-fassadenreinigung' },
      { situation: 'A hall, warehouse or machinery needs cleaning.', path: '/leistungen/industrie-und-hallenreinigung' },
      { situation: 'The property needs someone to check on things regularly.', path: '/leistungen/hauswartung' },
      { situation: 'Lawns, hedges, paths and paved areas should be well kept.', path: '/leistungen/aussen-und-gruenflaechenpflege' },
      { situation: 'Cleaning, caretaking and grounds should come from a single provider.', path: '/leistungen/facility-services' },
    ] satisfies { situation: string; path: PagePath }[] as { situation: string; path: PagePath }[],
  },
  principles: {
    title: 'The same for every service',
    items: [
      { title: 'Site visit before the quote', text: 'We look at the property before we name a price. The site visit and quote are free of charge and non-binding.' },
      { title: 'Scope in writing', text: 'What we take on and how often is set out in the quote.' },
      { title: 'Personal enquiry', text: `Your enquiry is handled personally by our managing director, and you will hear from us ${responseTime}.` },
      { title: 'Frequency based on use', text: 'How often we come depends on how your property is used. If that changes, we adjust the scope and frequency with you.' },
      { title: 'Environmentally friendly on request', text: 'On request, we clean with environmentally friendly products.' },
      { title: 'Clear limits', text: 'Each service page also states what is not included, such as winter maintenance or the servicing of technical installations.' },
    ] satisfies Card[] as Card[],
  },
  faq: [
    { question: 'What do your services cost?', answer: answers.kosten },
    {
      question: 'Can I combine several services?',
      answer: 'Yes. With [facility services](/leistungen/facility-services), cleaning, caretaking and grounds maintenance come under one contract, with one contact person.',
    },
    {
      question: 'Do you also clean private households?',
      answer: 'Private households only through our [premium services](/premium), for villas, lofts and residences.',
    },
    { question: 'Do you offer winter maintenance?', answer: 'No. Winter maintenance is not part of what we offer.' },
    { question: 'Which regions do you cover?', answer: answers.gebiet },
  ] as { question: string; answer: string }[],
  premium: {
    title: 'Villas, private jets or yachts?',
    text: 'For exacting standards, we offer our premium services.',
    detail: 'Villas and residences, private jet cabins, yachts on Lake Lucerne and Lake Zug. Always the same team, discreet and familiar with delicate materials.',
    link: 'Premium services',
  },
  cta: {
    title: 'Not sure what you need?',
    text: `Tell us about your property and what you need. We will visit you, clarify the scope with you and get back to you ${responseTime}.`,
  },
}

const promises: Seiten['premiumOverview']['promises'] = [
  { key: 'persoenlich', title: 'Personal', text: 'Your enquiry is handled personally by our managing director.' },
  { key: 'diskret', title: 'Discreet', text: 'On request, we sign a non-disclosure agreement.' },
  { key: 'teams', title: 'Dedicated teams', text: 'The same team always works for you.' },
  { key: 'personal', title: 'Vetted staff', text: 'Everyone who works for you has been vetted by us.' },
  { key: 'schluessel', title: 'Keys and alarm', text: 'According to fixed rules that we agree with you.' },
  { key: 'zeiten', title: 'At your convenience', text: 'Including evenings, weekends and while you are away.' },
  { key: 'material', title: 'Knowledge of materials', text: 'Natural stone, parquet and high-gloss surfaces, and on boats teak, gelcoat and upholstery.' },
  { key: 'sprachen', title: 'Four languages', text: `${languages}.` },
  { key: 'versichert', title: 'Insured', text: 'Business liability insurance with CHF 10 million cover.' },
  { key: 'offerte', title: 'On-site quote', text: 'Free of charge and non-binding, after a site visit.' },
]

export const premiumOverview: Seiten['premiumOverview'] = {
  line: premiumLine,
  h1: 'Cleaning for exacting standards',
  lead: 'For villas and residences, second homes, hotels with special requirements, family offices, private jets and yachts. Always the same team, discreet, familiar with delicate materials and in your language.',
  nameMeaning: company.premiumBrand
    ? `The name ${company.premiumBrand} comes from the Latin ‘clavis’, meaning key. You entrust us with your home, and we treat it as if it were our own.`
    : null,
  offers: [
    { title: 'Luxury properties', path: '/premium/luxusimmobilien', text: 'Villas, lofts and residences, regularly or ahead of special occasions, with care for delicate materials.' },
    { title: 'Private jet', path: '/premium/privatjet', text: 'Cabin cleaning with care for high-quality materials, by arrangement with you.' },
    { title: 'Yacht', path: '/premium/yacht', text: 'Cleaning of boats and yachts on Lake Lucerne and Lake Zug.' },
  ] satisfies LinkCard[],
  moreTitle: 'Also for',
  more: [
    { title: 'Second homes and residences', text: 'Cleaning before your arrival and after your departure, inspection rounds while you are away.' },
    { title: 'Hotels', text: 'Special and deep cleaning, assignments before openings and after renovations.' },
    { title: 'Offices and family offices', text: 'Confidential, outside your working hours, with dedicated teams.' },
    { title: 'Rooms with art and antiques', text: 'Careful cleaning of the rooms, works of art only with your approval.' },
    { title: 'Private events', text: 'Cleaning before and after the event, including at weekends.' },
    { title: 'Estate agents and property managers', text: 'Cleaning at short notice before a sale, photo shoot or handover.' },
  ] satisfies Card[],
  discretion: {
    title: 'Discretion from the first message',
    paragraphs: [
      'Your enquiry is handled personally by our managing director. On request, we sign a non-disclosure agreement.',
      'The same team always works for you, vetted by us. It knows your home, your wishes and the rules for keys and the alarm system that we agree with you.',
      'We only clean works of art with your approval. Times are set around you, including evenings, weekends or while you are away.',
    ],
  },
  promisesTitle: 'What you can rely on',
  // Same keys and order as the German list (symbols in app/premium/page.tsx). The
  // types; the assertion bridges that without changing content/de.
  promises,
  places: {
    title: 'Where we work',
    text: `On Lake Lucerne from Lucerne and Meggen to Weggis, Vitznau, Hergiswil and Ennetbürgen, on Lake Zug and Lake Ägeri from Zug and Walchwil to Oberägeri, in Engelberg and throughout the cantons of ${cantons}.`,
  },
  cta: {
    title: 'Enquire discreetly',
    text: 'Call us or write to us. Your enquiry is handled personally by our managing director, under confidentiality if you wish.',
  },
}

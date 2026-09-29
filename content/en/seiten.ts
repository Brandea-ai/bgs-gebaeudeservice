import { company, premiumLabel } from '../../shared/company'
import type { PagePath } from '../../shared/seo'
import type { Dictionary } from '../de'
import type { Step } from '../types'
import { answers, cantons, languages, premiumLine, register, responseTime, steps, ui } from './common'

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
  { value: 'Over 50', label: 'Employees' },
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
  h1: 'Cleaning services and caretaking for Lucerne, Zug and the region',
  // Quotable profile sentence (T5): the first sentence only with NEW_BRAND, the second as on About us
  profile: {
    title: 'At a glance',
    brand: company.premiumBrand
      ? `${company.brand} is the brand of ${company.legalName}, with its registered office in ${company.seat} (canton of Lucerne).`
      : null,
    text: `We have been working in cleaning and caretaking since 2006. Today, over 50 employees look after more than 120 clients in the cantons of ${cantons}, in ${languages}.`,
    facts: [
      { key: 'register', label: 'Commercial register', value: `Canton of Lucerne, UID ${company.uid}` },
      { key: 'persoenlich', label: 'Your enquiry', value: 'A reply with the next steps' },
      { key: 'umwelt', label: 'Cleaning products', value: 'Environmentally friendly on request' },
    ],
  },
  services: {
    title: 'Our services',
    intro: 'Ten services in three groups: what comes up regularly, what needs one thorough job, and what an entire property needs.',
    all: 'All services at a glance',
    swipe: 'Swipe sideways',
    cards: {
      '/leistungen/unterhaltsreinigung': 'Stairwell, entrance and lift stay clean without anyone in the building reaching for a broom. We top up soap and paper.',
      '/leistungen/bueroreinigung': 'Workstations, meeting rooms, kitchenettes and treatment rooms, cleaned at times that suit your business.',
      '/leistungen/hauswartung': 'Inspection rounds, minor repairs, waste disposal and help with flat handovers.',
      '/leistungen/aussen-und-gruenflaechenpflege': 'Well-kept grounds all year round, from the first mowing to the autumn leaves.',
      '/leistungen/facility-services': 'Several of our services combined, with one contract and one contact person.',
    },
    premium: {
      title: premiumLabel,
      text: 'A separate line for villas, lofts and residences, private jets and yachts, as well as hotels and family offices. Discreet, with permanent teams.',
      link: 'Premium services',
    },
  },
  audiences: {
    title: 'Who we work for',
    intro: 'A property manager needs something different from a business or a villa owner. Choose your group.',
    items: [
      {
        key: 'verwaltungen',
        short: 'Managers',
        title: 'Property managers and condominium associations',
        text: 'You look after residential or commercial properties for owners or a community of owners. On site, you need someone who comes regularly and reports what they notice.',
        points: [
          'Stairwell, laundry room and grounds on a fixed schedule',
          'Regular inspection rounds, with defects reported straight to you',
          'Final cleaning when tenants change, with a handover guarantee',
        ],
        link: { path: '/leistungen/hauswartung', hash: 'pflichtenheft', text: 'Caretaking specification template' },
      },
      {
        key: 'unternehmen',
        short: 'Businesses',
        title: 'Businesses',
        text: 'Offices, practices, commercial premises and production. The cleaning fits around your processes, not the other way round.',
        points: [
          'Cleaning times that suit your working and opening hours',
          'Restocking service for consumables',
          'Halls and machinery at times coordinated with production',
        ],
        link: { path: '/leistungen/bueroreinigung', hash: 'leistungsverzeichnis', text: 'Cleaning schedule for your office' },
      },
      {
        key: 'premium',
        short: 'Premium',
        title: 'Villas, jets, yachts and hotels',
        text: 'Natural stone, parquet, leather and fine wood do not forgive the wrong product. Anyone who has such surfaces cared for needs a team that knows the materials and works discreetly.',
        points: [
          'A permanent team that knows your home',
          'A non-disclosure agreement if you wish',
          'In hotels, cleaning before an opening and after a renovation',
        ],
        link: { path: '/premium/luxusimmobilien', hash: 'materialkunde', text: 'Material guide for natural stone, parquet and high gloss' },
      },
    ],
  },
  agreed: {
    title: 'Clearly agreed before we start',
    intro: 'Before the first assignment, the essentials are on paper. That way the property manager, the owners and our team all know what applies.',
    written: {
      title: 'What you receive in writing',
      items: [
        { title: 'Quote', text: 'after the site visit, with scope and price' },
        { title: 'Scope', text: 'which rooms and tasks are included, how often and at what times' },
        { title: 'Caretaking', text: 'how often we are on site and who we report defects to' },
        { title: 'Restocking service', text: 'which items are included and who procures them' },
        { title: 'End-of-tenancy cleaning', text: 'the handover guarantee and its details' },
      ],
      note: 'If an area is added later, we amend the agreement in writing.',
    },
    limits: {
      title: 'What we do not take on',
      intro: 'So that you do not lose time, we say it straight away.',
      items: [
        'Winter maintenance and snow clearing',
        'An on-call service reachable day and night for emergencies',
        'End-of-tenancy cleaning commissioned by tenants of individual flats',
        'Ordinary private households. We look after villas, residences and second homes in our [premium services](/premium).',
        'Servicing of heating, ventilation, lifts and fire protection, major repairs, landscaping and new planting',
      ],
    },
  },
  area: {
    title: 'Our service area',
    text: `From ${company.address.city}, we work throughout five cantons, offering every service in all of them. For each canton you will find places, typical properties and notes for planning.`,
    link: 'View service area',
  },
  faq: [
    {
      question: 'How much does a cleaning company cost per hour?',
      answer:
        'Without knowing the property, there is no reliable answer. What matters is the amount of work: how large the areas are, which floors they have, how heavily they are used, how often and at what times they are cleaned, and who supplies the consumables. Our guide [Cleaning costs in Switzerland](/blog/reinigungskosten-schweiz) explains how these factors play out.',
    },
    {
      question: 'Do I need maintenance cleaning or caretaking?',
      answer:
        'If it is only about cleaning, [maintenance cleaning](/leistungen/unterhaltsreinigung) is enough: stairwell, floors and common areas on a fixed schedule. [Caretaking](/leistungen/hauswartung) also looks after the property itself, with inspection rounds, minor repairs, waste disposal and help with flat handovers.',
    },
    {
      question: 'Which service suits my property?',
      answer:
        'The [guide on our services overview](/leistungen#wegweiser) shows you: it matches ten typical situations to the right service. On the same page, a table compares the four services that are most often confused. If none of the situations fits exactly, describe your property in the form below.',
    },
    {
      question: 'Can I book you for a single assignment?',
      answer:
        'Yes, for example [deep cleaning](/leistungen/sonderreinigungen), [end-of-tenancy cleaning](/leistungen/umzugsreinigung) before a handover, [construction cleaning](/leistungen/baureinigung) after new builds and conversions, or [window and facade cleaning](/leistungen/fenster-und-fassadenreinigung). You do not need a contract for ongoing cleaning for that.',
    },
    {
      question: 'Do I have to book several services together?',
      answer:
        'No. You can book any service on its own, for example just window cleaning or just grounds maintenance. If you need several for the same property, they can be combined as [facility services](/leistungen/facility-services): one contract instead of several.',
    },
    {
      question: 'What should I look for when choosing a cleaning company?',
      answer:
        'Above all, quotes that can genuinely be compared. That only works if every provider has seen the property and works from the same rooms, the same schedule and the same cleaning times. Which other questions to ask, from insurance to the contract, is covered in our guide [How do I find the right cleaning company?](/blog/richtige-reinigungsfirma-finden).',
    },
  ],
  cta: {
    title: 'A quote for your property',
    text: 'Briefly describe the property, its location and what you need. We then arrange the date of the site visit with you.',
  },
}

const uidRegister = `https://www.uid.admin.ch/Detail.aspx?uid_id=${company.uid.replace(/[-.]/g, '')}&lang=en`
const legalNameText = company.legalName.replace(' - ', '\u00a0-\u2060\u00a0')

export const about: Seiten['about'] = {
  h1: 'About us: cleaning and caretaking since 2006',
  lead: `We clean and look after residential buildings, offices, practices and halls in the cantons of ${cantons}.`,
  profile: {
    title: 'Company profile',
    items: [
      { value: 'Since 2006', label: 'Experience' },
      { value: 'Over 50', label: 'Employees' },
      { value: 'Over 120', label: 'Clients' },
      { value: 'CHF 10m', label: 'Business liability cover' },
    ],
    note: 'As of September 2026',
  },
  fit: {
    title: 'When we are the right choice, and when we are not',
    intro: 'We would rather say so before the first appointment. That way nobody spends time on an enquiry that does not suit us.',
    yesTitle: 'We are a good fit if you',
    yes: [
      'are a property manager, owner or condominium owners’ association and want a building cleaned or looked after, with [caretaking](/leistungen/hauswartung) and [maintenance cleaning](/leistungen/unterhaltsreinigung)',
      'need offices, practices, commercial premises or halls cleaned several times a week: [office and practice cleaning](/leistungen/bueroreinigung), [industrial and warehouse cleaning](/leistungen/industrie-und-hallenreinigung)',
      'want cleaning, caretaking and grounds maintenance combined in one contract, as [facility services](/leistungen/facility-services)',
      'are planning a one-off job, such as a [deep clean](/leistungen/sonderreinigungen), [construction cleaning](/leistungen/baureinigung) before handover or [end-of-tenancy cleaning](/leistungen/umzugsreinigung) between two tenancies',
      `are a private client with a villa, a second home or a yacht to be looked after, or a private jet cabin to be cleaned: that is what [${premiumLabel}](/premium) is for`,
    ],
    noTitle: 'We are not the right choice for',
    no: [
      'winter services and snow clearing',
      'an on-call service around the clock',
      'the end-of-tenancy cleaning of a single rented flat on behalf of the tenant',
      'cleaning for ordinary private households',
      'landscaping and new gardens',
    ],
    note: `What a service does not cover is listed on its page under [Services](/leistungen), in the section ‘${ui.notIncluded}’.`,
  },
  work: {
    title: 'How we work',
    intro: 'Four principles that guide how we approach an assignment.',
    items: [
      {
        title: 'The property first, then the price',
        paragraphs: [
          'How much work a cleaning job involves only becomes clear on site: floor coverings and glass surfaces, how the premises are used, routes and access.',
          'That is why we do not give prices over the phone. Without a site visit, they would often be wrong.',
          'The quote follows after this appointment, in writing and at no cost to you.',
        ],
      },
      {
        title: 'Scope and limits in writing',
        paragraphs: [
          'The quote lists the rooms and tasks, the frequency and the working hours. Once you accept, it becomes the agreement, including how we get into the building, for example with a key or badge.',
          'We state just as clearly what is not included, together with the service that covers it.',
          '[End-of-tenancy cleaning](/leistungen/umzugsreinigung) comes with our handover guarantee: if the property management raises a complaint about our cleaning at the handover, we clean again free of charge. The quote sets out exactly what the guarantee covers.',
        ],
      },
      {
        title: 'Direct contact',
        paragraphs: [
          'We reply to your enquiry about your property and the next steps.',
          'If you combine several services as [facility services](/leistungen/facility-services), you have one contact person with us for all of them.',
        ],
      },
      {
        title: 'Suited to the material',
        paragraphs: [
          'Marble and limestone do not tolerate acidic cleaners, and oiled parquet only a little water. Products and equipment therefore depend on the surface, not on habit.',
          'We restock paper, soap and other consumables as part of regular cleaning. Who buys the supplies, you or us, is set out in the agreement.',
          'We use environmentally friendly products if you would like us to.',
        ],
      },
    ],
  },
  check: {
    kind: 'table',
    id: 'firmenangaben',
    title: 'Company details you can check',
    intro: `${company.premiumBrand ? `${company.brand} is the brand of ${legalNameText}. ` : ''}For your supplier records: you will find each detail below in the [UID register](${uidRegister}) of the Federal Statistical Office, together with the field in which it appears there.`,
    columns: ['Detail', 'Entry', 'Field in the UID register'],
    rows: [
      ['Company name', company.legalName, '‘Name’'],
      ['Registered office and address', `Registered office ${company.seat} LU. The address ${company.address.street}, ${company.address.postalCode} ${company.address.city} is in the municipality of ${company.seat}.`, '‘Municipality’ and address'],
      ['Company number', `${company.registerNumber}, ${register}`, '‘Reference number’ under register of commerce data'],
      ['UID (business identification number)', company.uid, '‘UID’ under core properties'],
      // The register shows the suffix MWST in the English view too; the FTA does not allow ‘VAT’ (estv.admin.ch)
      ['VAT number', company.vat, '‘VAT number’ under VAT data'],
    ],
    note: 'For checking quotes and invoices: the Code of Obligations provides that the name entered in the commercial register appears in full and unamended in correspondence and on invoices (Art. 954a CO). Shortened names, logos and trade names may also be used. Under the VAT Act, an invoice as a rule also states the number under which the company is entered in the VAT register (Art. 26 VAT Act).',
    sources: [
      { label: `UID register, ${company.uid}`, href: uidRegister },
      { label: 'Art. 954a Code of Obligations (CO)', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/en#art_954_a' },
      { label: 'Art. 26 Value Added Tax Act (VAT Act)', href: 'https://www.fedlex.admin.ch/eli/cc/2009/615/en#art_26' },
    ],
    printable: true,
    updated: '2026-09-28',
  },
  languages: {
    title: 'Four languages',
    text: 'You can ask questions and make arrangements with us in German, English, French or Italian. That helps international companies, owners who live abroad and tenants who would rather ask their question in their own language.',
    switchLabel: 'This page in',
  },
  region: {
    title: 'Five cantons, the same terms',
    text: `From ${company.address.city}, we offer every service throughout the area, with the same travel terms everywhere.`,
    listLabel: 'The cantons in detail',
    link: 'Service area with map',
  },
  cta: {
    title: 'Arrange a site visit',
    text: 'Tell us about the property, its location and the service you need. The site visit and the quote are free of charge and non-binding.',
  },
}

/** Kontakt (E80, Audit Inhalt 9, Audit visuell /kontakt), Übersetzung von content/de/seiten.ts */
export const contact: Seiten['contact'] = {
  h1: 'Contact and quote',
  lead: `By phone, email or form. You will get a reply ${responseTime}.`,
  channels: {
    title: 'How to reach us',
    phone: { title: 'Phone', mobile: 'Mobile', hint: 'For questions and to arrange the appointment for the site visit.', action: 'Call' },
    email: { title: 'Email', hint: 'For enquiries with documents such as floor plans, area lists or photos.', action: 'Write an email' },
    address: { title: 'Address', hint: 'This is our business address. The site visit takes place at your property.', action: 'Go to the map' },
  },
  brief: {
    title: 'What to include in your enquiry',
    items: [
      { key: 'rolle' as const, title: 'Who is asking', text: 'property management, condominium owners’ association, owner, company or private client with a villa, second home, yacht or jet.' },
      { key: 'objekt' as const, title: 'Property', text: 'office, practice, apartment building, hall or villa.' },
      { key: 'ort' as const, title: 'Location', text: 'address or postcode.' },
      { key: 'groesse' as const, title: 'Size', text: 'area in m², number of flats, floors or properties.' },
      { key: 'leistung' as const, title: 'Service', text: 'for example maintenance cleaning, caretaking or a one-off cleaning.' },
      { key: 'rhythmus' as const, title: 'Frequency or occasion', text: 'a one-off job or regular cleaning, with your preferred times.' },
      { key: 'start' as const, title: 'Preferred date', text: 'cleaning date or start of ongoing care, plus the handover date for construction and end-of-tenancy cleaning.' },
      { key: 'zugang' as const, title: 'Access and special features', text: 'key or badge, sensitive floors, large glass surfaces.' },
    ],
  },
  steps: {
    title: 'What happens after you send your enquiry',
    items: [
      { title: 'Reply', text: 'We get back to you to discuss the details and arrange a date for the site visit.' },
      { title: 'Site visit', text: 'We walk through all the rooms and areas concerned with you or your contact person. That way we see the condition of each area, the materials and how to get in.' },
      { title: 'Quote', text: 'We send you the quote in writing. It lists the rooms and tasks, how often we carry them out and at what times.' },
      { title: 'Start', text: 'Once you accept, we set the date of the first job. By then, times and access to the property have been agreed with you.' },
    ] satisfies Step[] as Step[],
  },
  visit: {
    title: 'Preparing for the site visit',
    intro: 'What to have ready for the on-site appointment:',
    items: [
      'Access to all rooms that are to be cleaned or looked after, including cellar, attic, laundry room and plant rooms',
      'Plans or a list of areas, if available',
      'The current specification or service schedule, if a company already works for you',
      'Your preferred times and the cleaning or handover date',
      'A contact person who can answer questions about use and access',
    ],
  },
  map: {
    title: 'How to find us',
    text: `Our business address is in ${company.address.city}, in the municipality of ${company.seat}. From here we travel to your property anywhere in our service area.`,
  },
  faq: [
    { question: 'How is the quote prepared?', answer: 'First we arrange the date for the site visit with you. We then write the quote based on what we have seen on site.' },
    { question: 'What does the site visit cost me?', answer: 'Nothing. You pay neither for the site visit nor for the quote, and the quote does not commit you to anything.' },
    { question: 'Do you also work outside Lucerne?', answer: `Yes. Our area covers five entire cantons: ${cantons}. All services are available there on the same terms. You will find places and the map on the [Service area](/einzugsgebiet) page.` },
    { question: 'Do you have business liability insurance?', answer: 'Yes, with a sum insured of CHF 10 million.' },
    { question: 'Do you use environmentally friendly products?', answer: 'On request, yes. It is best to mention it in your enquiry under ‘Property and request’.' },
    { question: 'In which language can I make an enquiry?', answer: 'In German, English, French or Italian. We advise you in your language.' },
    { question: 'Is short notice possible?', answer: 'In that case, call us rather than writing. By phone you will find out fastest whether and when we can do the job.' },
  ],
  cta: {
    title: 'Request a cleaning quote',
    text: 'We need these details for the quote. Leave blank anything you do not know yet.',
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
  h1: 'Commercial cleaning services and caretaking for properties and businesses',
  lead: 'Ten services for property managers, owners and businesses, arranged by occasion. Here you can see what each one is for, how similar services differ and what is due when in the year.',
  groups: [
    {
      title: 'Ongoing cleaning',
      text: 'Recurring cleaning, with a frequency based on how the premises are used.',
      items: [
        {
          title: 'Maintenance cleaning',
          path: '/leistungen/unterhaltsreinigung',
          text: 'For apartment buildings, residential and commercial buildings and business premises: we clean the stairwell, floors and ancillary rooms, usually several times a week, and top up the consumables.',
        },
        {
          title: 'Office and practice cleaning',
          path: '/leistungen/bueroreinigung',
          text: 'Offices, administrative premises and practices, cleaned at times that fit around your meetings and consulting hours.',
        },
      ],
    },
    {
      title: 'One-off and special cleaning',
      text: 'Assignments with a fixed occasion, such as a handover, the end of a construction project or a production shutdown.',
      items: [
        {
          title: 'Deep and special cleaning',
          path: '/leistungen/sonderreinigungen',
          text: 'Against limescale, grease, dirt in joints and old layers of floor care that ongoing cleaning in flats, offices and business premises no longer removes.',
        },
        {
          title: 'End-of-tenancy cleaning',
          path: '/leistungen/umzugsreinigung',
          text: 'Final cleaning of flats and business premises before the handover inspection, on behalf of property managers, owners and businesses. With a handover guarantee.',
        },
        {
          title: 'Construction and post-construction cleaning',
          path: '/leistungen/baureinigung',
          text: 'Cleaning during the works and final construction cleaning before the handover to tenants, buyers or your team.',
        },
        {
          title: 'Window and facade cleaning',
          path: '/leistungen/fenster-und-fassadenreinigung',
          text: 'Windows, shop windows and other glass surfaces, plus facades, with high pressure where needed. As a single job or on a fixed cycle.',
        },
        {
          title: 'Industrial and warehouse cleaning',
          path: '/leistungen/industrie-und-hallenreinigung',
          text: 'Floors, halls, machinery and equipment in production and storage, coordinated with shifts and shutdowns.',
        },
      ],
    },
    {
      title: 'Property care',
      text: 'When someone should look after the entire property regularly, inside and out.',
      items: [
        {
          title: 'Caretaking',
          path: '/leistungen/hauswartung',
          text: 'Inspection rounds with reports to the property manager, stairwell and laundry room, minor repairs, waste disposal and flat handovers. Which tasks are included depends on your property.',
        },
        {
          title: 'Grounds and green space maintenance',
          path: '/leistungen/aussen-und-gruenflaechenpflege',
          text: 'Lawns, hedges, beds, paths and paved areas, awarded on their own or together with caretaking.',
        },
        {
          title: 'Facility services',
          path: '/leistungen/facility-services',
          text: 'Cleaning, caretaking and grounds under one contract. Technical installations such as heating, ventilation or lifts are not included.',
        },
      ],
    },
  ] satisfies { title: string; text: string; items: LinkCard[] }[],
  guide: {
    title: 'Which service is right for you?',
    intro: 'Ten common situations and the service that fits them.',
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
      { situation: 'Instead of several companies, a single one should take on everything.', path: '/leistungen/facility-services' },
    ] satisfies { situation: string; path: PagePath }[] as { situation: string; path: PagePath }[],
  },
  toolNav: { vergleich: 'Comparison', jahresplan: 'Annual plan' },
  tools: [
    {
      kind: 'table',
      id: 'vergleich',
      title: 'Cleaning, deep cleaning, caretaking or everything together?',
      intro: 'Four services that are easily confused, compared side by side.',
      columns: ['Service', 'What', 'How often', 'Typical occasion', 'Not included'],
      rows: [
        [
          '[Maintenance cleaning](/leistungen/unterhaltsreinigung)',
          'Cleaning on a fixed schedule, with restocking service',
          'Usually several times a week',
          'Stairwell, common areas or business premises should stay clean at all times',
          'Offices and practices, deep cleaning, exterior windows and facades',
        ],
        [
          '[Deep and special cleaning](/leistungen/sonderreinigungen)',
          'One thorough assignment against limescale, grease and old layers',
          'One-off, repeated at long intervals if needed',
          'Before re-letting or after intensive use',
          'Ongoing cleaning. The final clean before a handover is covered by end-of-tenancy cleaning',
        ],
        [
          '[Caretaking](/leistungen/hauswartung)',
          'Looking after the property: inspection rounds, minor repairs, reports',
          'As often as agreed in the specification',
          'The previous caretaker is leaving, or a property is being taken over',
          'Winter maintenance, round-the-clock on-call service, major repairs',
        ],
        [
          '[Facility services](/leistungen/facility-services)',
          'Several of our services under one contract',
          'Depending on the service',
          'Several companies are to be replaced by one',
          'Technical facility management, winter maintenance, arranging tradespeople',
        ],
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'timeline',
      id: 'jahresplan',
      title: 'Which work is due when',
      intro: 'Much of the work on a property has its season. This is how it is typically spread over the year:',
      entries: [
        {
          label: 'January to March',
          text: 'Deep cleaning of office and commercial premises in quiet weeks. Cut hedges and shrubs now: the Swiss Ornithological Institute in Sempach advises pruning outside the breeding season, ideally between November and March.',
        },
        {
          label: 'April to June',
          text: 'Clean windows and glass after the winter and the pollen season. Clear winter dirt from paths and paved areas, and mow the lawn for the first time. What follows in the garden until autumn is set out in the [grounds maintenance calendar](/leistungen/aussen-und-gruenflaechenpflege#pflegekalender).',
        },
        {
          label: 'July and August',
          text: 'Deep cleaning during company holidays, halls and machinery during planned shutdowns. Remove weeds from joints and paved areas by hand or with equipment, because herbicides are banned on and next to paths and paved areas. Where spray products are banned and what works instead is explained under [grounds and green spaces](/leistungen/aussen-und-gruenflaechenpflege#spritzmittelverbot).',
        },
        {
          label: 'September to November',
          text: 'Remove leaves from paths, paved areas and lawns, prepare beds for the winter and clean the windows before the dark season. From November, hedge-cutting time begins.',
        },
        {
          label: 'Before the first snow',
          text: 'Snow clearing and gritting are not part of what we offer. Award winter maintenance in good time to a company that provides it.',
        },
        {
          label: 'Around notice dates',
          text: 'Under the Swiss Code of Obligations, the notice period is three months for flats and six months for commercial premises, each to a date fixed by local custom or, where there is none, to the end of a three-month period of the lease. The lease may set longer periods or other dates. Plan the final cleaning together with the handover date; the [dates for each canton](/leistungen/umzugsreinigung#kuendigungstermine) are on the end-of-tenancy cleaning page.',
        },
      ],
      note: 'The months are guidelines. What is due when at your property depends on use, location and contract.',
      sources: [
        {
          label: 'Swiss Ornithological Institute: pruning shrubs and hedges in residential areas (German)',
          href: 'https://www.vogelwarte.ch/de/ratgeber/schnitt-von-straeuchern-und-hecken-in-siedlungen-wann-und-wie/',
        },
        { label: 'FOEN: plant protection in the municipality (German)', href: 'https://www.bafu.admin.ch/de/pflanzenschutz-in-der-gemeinde' },
        { label: 'Swiss Code of Obligations, Art. 266a, 266c and 266d (Fedlex, English translation)', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/en#art_266_c' },
      ],
    },
  ],
  principles: {
    title: 'The same for every service',
    items: [
      {
        title: 'Scope in writing',
        text: 'Rooms, tasks, frequency and working hours are fixed before we start. If an office is converted or used differently, we adjust the agreement.',
      },
      {
        title: 'Clear limits',
        text: 'Each service page also states what is not included, such as winter maintenance or the servicing of technical installations.',
      },
    ] satisfies Card[] as Card[],
  },
  faq: [
    {
      question: 'What do the costs of the individual services depend on?',
      answer:
        'Each service has its own cost drivers. For maintenance cleaning, they are area, frequency, working hours and consumables. For deep cleaning, what counts is the condition, the floor covering and how much furniture is in the way. Caretaking depends on the tasks and the number of inspection rounds, window cleaning on glass area, height and access. You therefore receive the price after the site visit, in writing.',
    },
    {
      question: 'What is the difference between maintenance cleaning and office cleaning?',
      answer:
        '[Maintenance cleaning](/leistungen/unterhaltsreinigung) looks after the shared areas of a property, such as the stairwell, entrance, lift and laundry room. [Office and practice cleaning](/leistungen/bueroreinigung) cleans the rooms where people work and is scheduled around working and opening hours. In a commercial building, both often apply.',
    },
    {
      question: 'Is window cleaning part of maintenance cleaning?',
      answer:
        'Partly. Glass in the entrance area, such as glass doors, is part of maintenance cleaning. Exterior windows and facades are covered by [window and facade cleaning](/leistungen/fenster-und-fassadenreinigung), as a one-off or at fixed intervals.',
    },
    {
      question: 'What is included in your facility services?',
      answer:
        'Our own services, put together as needed: cleaning, caretaking, grounds, windows, deep and industrial cleaning. There is a single contract with one contact person. We do not service heating, ventilation or lifts, and we do not arrange tradespeople.',
    },
    {
      question: 'Do you also clean medical and therapy practices?',
      answer:
        'Yes, practices are part of [office and practice cleaning](/leistungen/bueroreinigung). Cleaning times are based on your consulting hours. Instruments and medical devices continue to be reprocessed by your practice team.',
    },
    {
      question: 'When do I need deep cleaning, and when end-of-tenancy cleaning?',
      answer:
        'The occasion decides. [End-of-tenancy cleaning](/leistungen/umzugsreinigung) prepares a flat or business premises for the handover inspection and comes with a handover guarantee. [Deep cleaning](/leistungen/sonderreinigungen) brings floors, joints and washrooms back to a condition that routine cleaning can maintain again, including in rooms that stay in use.',
    },
  ] as { question: string; answer: string }[],
  premium: {
    title: 'Villas, private jets or yachts?',
    text: 'For private clients with exacting standards and for hotels, there is a separate line.',
    detail: 'Villas and residences, private jet cabins, yachts on Lake Lucerne and Lake Zug. With permanent teams who know how to handle delicate materials.',
    link: 'Premium services',
  },
  cta: {
    title: 'Not sure what you need?',
    text: 'Write to us in a few sentences about what you need. We look at the property and suggest the right service.',
  },
}

// Same keys and order as the German list (the six confirmed ways of working, E41)
const promises: Seiten['premiumOverview']['promises'] = [
  { key: 'diskret', title: 'Discreet', text: 'We sign a non-disclosure agreement at your request.' },
  { key: 'teams', title: 'Dedicated teams', text: 'A dedicated team looks after your house, boat or cabin.' },
  { key: 'personal', title: 'Vetted staff', text: 'No one works for you whom we have not vetted.' },
  { key: 'schluessel', title: 'Keys and alarm', text: 'Handover, safekeeping and the alarm system follow rules you agree with us.' },
  { key: 'zeiten', title: 'At your convenience', text: 'Assignments also in the evening, at weekends or while you are travelling.' },
  { key: 'material', title: 'Knowledge of materials', text: 'Natural stone, parquet and high-gloss surfaces, and on boats teak, gelcoat and upholstery.' },
]

export const premiumOverview: Seiten['premiumOverview'] = {
  line: premiumLine,
  h1: 'Premium cleaning for exacting standards',
  lead: 'Having a house, a yacht or the cabin of a private jet cleaned means handing over keys, schedules and private matters. That is why we work for you by rules you help to set.',
  nameMeaning: company.premiumBrand
    ? `The name ${company.premiumBrand} comes from the Latin ‘clavis’, meaning key. You entrust us with your home, and we treat it as if it were our own.`
    : null,
  firstMessage: {
    title: 'Enough for a first message',
    items: [
      'House, boat or cabin, with its location or mooring',
      'The occasion or the frequency you have in mind',
      'When you need us from',
      'Delicate materials and works of art we should know about',
    ],
  },
  nav: {
    bereiche: 'Services',
    diskretion: 'Discretion',
    zusagen: 'How we work',
    ablauf: 'Process',
    fragen: 'Questions',
    orte: 'Locations',
  },
  offersTitle: 'House, cabin or boat',
  offers: [
    {
      title: 'Villas and residences',
      name: 'Villa and luxury property cleaning',
      link: 'More on villa cleaning',
      path: '/premium/luxusimmobilien',
      text: 'Villas, lofts, residences and second homes, on a regular basis or ahead of an occasion.',
      detail: 'For homes with natural stone, parquet, high-gloss surfaces and art. We clean regularly or before a celebration or a sale.',
      notIncluded: 'Not included: restoration work, for example on paintings or antique furniture.',
    },
    {
      title: 'Private jet cabins',
      name: 'Private jet cabin cleaning',
      link: 'More on private jet cleaning',
      path: '/premium/privatjet',
      text: 'The cabin between two flights, planned with your aircraft operator.',
      detail: 'Leather, lacquered wood, high-gloss surfaces and fine textiles share a few square metres, and often there is only the time between two flights. You decide with your aircraft operator which products are permitted on board.',
      notIncluded: 'Not included: cleaning the exterior of the aircraft.',
    },
    {
      title: 'Yachts and motorboats',
      name: 'Yacht and boat cleaning',
      link: 'More on yacht cleaning',
      path: '/premium/yacht',
      text: 'Interior and deck, on Lake Lucerne and Lake Zug.',
      detail: 'Fresh water, pollen and bird droppings affect a boat on a lake differently from salt at sea. We clean teak, gelcoat and upholstery at the mooring, each material with its own method.',
      notIncluded: 'Not included: work below the waterline or on the engine.',
    },
  ],
  moreTitle: 'Also for',
  more: [
    { title: 'Second homes and residences', text: 'Cleaned before you arrive, put back in order after you leave, with inspection rounds in between at the agreed frequency.' },
    { title: 'Hotels', text: 'Special and deep cleaning before an opening and after a renovation. More on [deep and special cleaning](/leistungen/sonderreinigungen).' },
    { title: 'Offices and family offices', text: 'Confidential rooms, cleaned outside your working hours. More on [office and practice cleaning](/leistungen/bueroreinigung).' },
    { title: 'Rooms with art and antiques', text: 'We clean the rooms with care, and paintings, sculptures and other works of art only with your express approval.' },
    { title: 'Private events', text: 'Ready before the event and back in order afterwards, even if it falls on a weekend.' },
    { title: 'Estate agents and property managers', text: 'Cleaning at short notice before a sale, photo shoot or handover.' },
  ],
  discretion: {
    title: 'Discretion in writing',
    paragraphs: [
      'Whoever cleans for you learns more than any quote shows. What stays confidential, and for how long, can be set out in a non-disclosure agreement.',
    ],
  },
  // What such an agreement typically covers, not the content of a template of our own; no contractual penalty (not confirmed).
  // CO Art. 11 read on 28.09.2026 on fedlex.admin.ch; English is an unofficial translation.
  nda: {
    kind: 'checklist',
    id: 'geheimhaltung',
    title: 'What a non-disclosure agreement should cover',
    intro: 'The list shows what such an agreement typically covers and helps you check a draft.',
    groups: [
      {
        title: 'Who and what',
        items: [
          'Who is bound: the company and everyone who works for you',
          'What is confidential: address, absences, guests, rooms, furnishings and documents',
          'No photos in the house, on board or in the cabin, and nothing shared on social media',
        ],
      },
      {
        title: 'Duration and end',
        items: [
          'How long the obligation applies, including after the assignment ends',
          'How keys and badges are returned and codes changed',
          'What happens to documents such as floor plans or alarm plans at the end: return or destruction',
        ],
      },
    ],
    note: 'The Swiss Code of Obligations (CO) does not require any particular form for such an agreement (Art. 11 CO), but a signed version makes it easier to prove. Discuss the details of your case with your legal adviser.',
    sources: [
      { label: 'Swiss Code of Obligations, Art. 11: form of contracts', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/en#art_11' },
    ],
    printable: true,
    updated: '2026-09-28',
  },
  promisesTitle: 'What applies to every premium assignment',
  promises,
  stepsTitle: 'How a premium enquiry works',
  steps: [
    {
      title: 'Your enquiry',
      text: 'After your call or message, we arrange a date for the walk-through with you.',
    },
    {
      title: 'Walk-through and quote',
      text: 'At the house, the mooring or in the cabin we look at rooms, materials and access with you, for a private jet in coordination with your aircraft operator. On this basis we prepare your written quote.',
    },
    {
      title: 'Rules before the first assignment',
      text: 'Before we start, we agree with you when we will come, how keys and the alarm system are handled and which works of art or objects we touch only with your approval.',
    },
    {
      title: 'Your dedicated team',
      text: 'Your dedicated team knows the rules you set before the first assignment.',
    },
  ],
  faq: [
    {
      question: 'How does my enquiry stay confidential?',
      answer: 'If you would like a non-disclosure agreement, it is best to mention it in your first message. Start by describing only the property and the service you need.',
    },
    {
      question: 'Can estate agents or property managers enquire on behalf of owners?',
      answer: 'Yes. Tell us in your enquiry who will accompany the walk-through and who should receive the quote.',
    },
    {
      question: 'Do I have to commit to regular cleaning?',
      answer: 'No. You can also book us for a single assignment, for example before a private event.',
    },
    {
      question: 'Do you also work when nobody is at home?',
      answer: 'Yes, including while you are travelling. How we get into the house and operate the alarm system is agreed beforehand.',
    },
    {
      question: 'What does the price of premium cleaning depend on?',
      answer: 'For a house, on the floor area, materials and works of art; for a boat, on its size, deck and mooring; for a jet, on the cabin and the time slot. Added to this are the frequency and assignments in the evening or at weekends. That is why only the quote after the walk-through states a price.',
    },
    {
      question: 'Can we enquire in English, French or Italian?',
      answer: 'Yes. We can communicate with you in German, English, French or Italian. Write to us in whichever language you prefer.',
    },
  ],
  places: {
    title: 'Where we work',
    text: `On Lake Lucerne from Lucerne and Meggen to Weggis, Vitznau, Hergiswil and Ennetbürgen, on Lake Zug and Lake Ägeri from Zug and Walchwil to Oberägeri, in Engelberg and throughout the cantons of ${cantons}.`,
  },
  cta: {
    title: 'Enquire discreetly',
    text: 'A phone call or a few lines via the form are enough to get started.',
  },
}

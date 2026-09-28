import type { ServicePageContent } from '../../types'
import { languages } from '../common'

// Same keys and sources as content/de/leistungen/bueroreinigung.ts (E85). The Employment Act and
// Ordinance 2 have no current English text on fedlex, so those sources link to the German version.
export const bueroreinigung: ServicePageContent = {
  path: '/leistungen/bueroreinigung',
  area: 'leistungen',
  eyebrow: 'Ongoing cleaning',
  h1: 'Office cleaning for businesses and medical practices',
  lead: [
    'An office should be ready every morning: bins empty, kitchenette clean, soap and paper topped up. We clean offices, administrative premises and practices on a fixed schedule, usually before your team arrives or after it has left.',
    'What is cleaned on every visit and what only weekly is set out in a task schedule. Which rooms the team may enter is something you decide before the start. You will find printable templates for both on this page, together with the time windows that the Employment Act sets for cleaning work.',
  ],
  facts: [
    { label: 'Cleaning times', value: 'Usually early morning or evening, to suit your working and consulting hours' },
    { label: 'Frequency', value: 'Daily, several times a week or weekly' },
    { label: 'Languages in the team', value: languages },
    { label: 'Not included', value: 'Windows, stairwells of the building, instruments in practices' },
  ],
  scope: {
    title: 'What office cleaning covers',
    intro: 'Typical for offices, administrative premises and practices. How often each item is done is shown in the task schedule above.',
    items: [
      'Emptying bins and waste paper, replacing bags',
      'Clear work surfaces, shelves, door handles and light switches',
      'Floors in offices, corridors and meeting rooms, vacuumed or damp-mopped depending on the surface',
      'Reception, entrance area and glass doors',
      'Kitchenettes and staff rooms',
      'Toilets, including washbasins and mirrors',
      'Refilling soap, paper and bin bags',
      'In practices: reception, waiting room and the approved surfaces in treatment rooms',
    ],
    notIncluded: [
      'Stairwell, lift and entrance of the whole building: see [maintenance cleaning](/leistungen/unterhaltsreinigung).',
      'Deep cleaning of floors and toilets, for example before moving in: see [deep and special cleaning](/leistungen/sonderreinigungen).',
      'Windows inside and out: see [window and facade cleaning](/leistungen/fenster-und-fassadenreinigung).',
      'Reprocessing of instruments and medical devices, which remains with your practice team.',
    ],
  },
  sections: [
    {
      title: 'A cleaning visit from top to bottom',
      paragraphs: [
        'Waste comes first: emptying bins, taking waste paper to the collection point, fitting new bags. Then come the counter and door handles, on the agreed days also clear desk surfaces, followed by the kitchenette and the toilets. The floors come last, so that no freshly cleaned floor catches dust or drips again.',
        'Toilets and washbasins need their own cloths and gloves, which never touch a desk or the coffee machine. One colour per area makes the separation visible.',
      ],
    },
    {
      title: 'In medical and therapy practices, your hygiene plan applies',
      paragraphs: [
        'At reception and in the waiting room, many hands touch the same places every day: door handles, the counter, armrests and shelves. Your practice’s hygiene plan specifies which products are used there and how often, and the team follows it.',
        'In treatment rooms, the team cleans the floors and the surfaces your practice team approves. Your practice team reprocesses instruments and medical devices itself, and equipment and medicines are not part of the cleaning.',
      ],
    },
    {
      title: 'What you should see the morning after',
      paragraphs: [
        'Five minutes when you unlock the door are enough to check a visit. If you notice anything, report it the same day, while it is clear which visit is meant.',
      ],
      items: [
        'Bins empty and fitted with a fresh bag',
        'Kitchenette free of coffee rings, sink clean and dry',
        'Glass doors free of fingerprints at handle height',
        'Soap, paper and towels in the toilets topped up',
        'Documents and personal items where you left them',
        'Windows shut, lights off, doors locked',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'leistungsverzeichnis',
      title: 'Office task schedule: what is cleaned how often',
      intro:
        'Example for an office with reception, kitchenette and two toilets. Cross out what does not apply and add your own rooms. With the same list, you can compare quotes from different providers.',
      columns: ['Area', 'Every visit', 'Weekly', 'By arrangement'],
      rows: [
        ['Workstations', 'Empty bins, fit new bags', 'Damp-wipe clear desk surfaces', 'Screens, keyboards, telephones, chairs'],
        ['Kitchenette', 'Sink, worktops, coffee machine outside, floor', 'Fronts of cupboards and appliances', 'Inside of the fridge'],
        ['Toilets', 'WC, washbasin, mirror, floor, refill soap and paper', 'Wall tiles in the splash zone, doors', 'Descale taps, partitions'],
        ['Reception and waiting area', 'Counter, door handles, entrance glass door', 'Chairs, shelves, glass walls', 'Dust plants and decorations'],
        ['Floors', 'Corridors, reception, kitchenette, toilets', 'Individual offices and meeting rooms', 'Skirting boards and corners'],
        ['Doors and switches', 'Door handles in kitchenette and toilets', 'Door handles and light switches everywhere', 'Door leaves, frames, radiators'],
      ],
      note: 'The frequencies are an example. A kitchenette for thirty people needs more than one for five. Your own schedule becomes part of the quote.',
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'timeline',
      id: 'einsatzzeiten',
      title: 'Cleaning times and the Employment Act',
      intro:
        'The Employment Act applies to the cleaning team. It divides the day into time windows, and these determine when office cleaning is possible without a permit and when wage supplements apply.',
      entries: [
        {
          label: '6 am to 8 am',
          text: 'Day work. The kitchenette and toilets are clean when the first people arrive. If your team starts at half past seven, the window is tight for large areas.',
        },
        {
          label: 'During working hours',
          text: 'Day work. Good for heavily used toilets, reception or a practice over lunch. Vacuum cleaners and wet floors disturb conversations.',
        },
        {
          label: '6 pm to 8 pm',
          text: 'Day work. Most desks are free and the day’s waste is there. Tell us which rooms should come last because people are still working there.',
        },
        {
          label: '8 pm to 11 pm',
          text: 'Evening work, allowed without a permit. The rooms are empty and quiet, so access, alarm and locking up must be arranged.',
        },
        {
          label: '11 pm to 6 am',
          text: 'Night work: prohibited in principle, only with a permit, and temporary night work carries a wage supplement of at least 25 percent. Without a permit it is only possible if the client’s business itself falls under special rules, for example operating round the clock, and cleaning at night is needed for its operations.',
        },
        {
          label: 'Sundays and public holidays',
          text: 'Prohibited from 11 pm on Saturday to 11 pm on Sunday, as well as on the national holiday and on cantonal public holidays treated as Sundays. Exceptions apply as at night, and temporary Sunday work carries a wage supplement of 50 percent. Saturday during the day is ordinary day work.',
        },
      ],
      note: 'With the consent of the employee representatives or, where there are none, the majority of the employees concerned, the cleaning company can set the start and end of its day and evening work differently between 5 am and midnight. Even then, it spans no more than 17 hours (Art. 10 para. 2 ArG). For an ordinary office, this means: schedule cleaning from Monday to Saturday between 6 am and 11 pm and not on public holidays, and no permit is needed.',
      sources: [
        { label: 'Employment Act (ArG), Art. 10 and 16 to 20a (German text)', href: 'https://www.fedlex.admin.ch/eli/cc/1966/57_57_57/de#art_10' },
        { label: 'Ordinance 2 to the Employment Act (ArGV 2), Art. 51 cleaning companies (German text)', href: 'https://www.fedlex.admin.ch/eli/cc/2000/244/de#art_51' },
      ],
    },
    {
      kind: 'checklist',
      id: 'vertrauliche-raeume',
      title: 'Confidential rooms: agree before the first visit',
      intro:
        'Anyone cleaning in the evening enters rooms with personnel files, contracts and patient data. The Data Protection Act requires your business to ensure data security appropriate to the risk (Art. 8 FADP), and the ordinance names access control for this: only authorised persons should have access to premises in which personal data are processed (Art. 3 DPO). Use this list to decide where the cleaning team may go.',
      groups: [
        {
          title: 'Rooms',
          items: [
            'Rooms the team cleans on its own',
            'Rooms cleaned only when one of your staff is present, such as HR office, archive or server room',
            'Rooms that are not entered at all',
            'Cupboards, drawers and trays with documents: do not open, do not move',
          ],
        },
        {
          title: 'Desks, paper and screens',
          items: [
            'Documents put away in the evening, desks clear',
            'Screens locked, no passwords on notes',
            'Lockable containers for confidential paper that are not emptied with the waste paper',
            'Printers and copiers without forgotten printouts',
          ],
        },
        {
          title: 'Keys, badges and alarm',
          items: [
            'Who receives keys, badges or codes, and for which doors',
            'How the alarm system is switched on and off and whom the team calls in the event of a false alarm',
            'Who checks lights, windows and doors at the end',
            'What applies if a key or badge is lost',
          ],
        },
        {
          title: 'Additional points for practices and law firms',
          items: [
            'Patient files, appointment book and findings are not left open at reception',
            'Treatment rooms: which surfaces the team cleans and which your practice team cleans',
            'Professional secrecy (Art. 321 SCC), for example for doctors, physiotherapists, lawyers and notaries: files put away before the team arrives',
          ],
        },
      ],
      note: 'This list is not legal advice. Clarify in each case which measures your business needs. Under the Data Protection Act, health data are sensitive personal data (Art. 5 FADP).',
      sources: [
        { label: 'Federal Act on Data Protection (FADP), Art. 5 and 8', href: 'https://www.fedlex.admin.ch/eli/cc/2022/491/en#art_8' },
        { label: 'Data Protection Ordinance (DPO), Art. 3 access control', href: 'https://www.fedlex.admin.ch/eli/cc/2022/568/en#art_3' },
        { label: 'Swiss Criminal Code (SCC), Art. 321 professional secrecy', href: 'https://www.fedlex.admin.ch/eli/cc/54/757_781_799/en#art_321' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'offerten-vergleichen',
      title: 'Comparing quotes point by point',
      intro:
        'A low hourly rate says little if fewer hours are calculated. Put the quotes side by side and go through the same points for each. Our guide [What does maintenance cleaning cost?](/blog/reinigungskosten-schweiz) explains the general cost factors.',
      groups: [
        {
          title: 'Scope and method',
          items: [
            'Is there a task schedule that lists every room and every frequency?',
            'Are kitchenettes and toilets included on every visit or only weekly?',
            'How many hours per visit and how many visits per month are calculated?',
            'Which time windows are planned, and do they fall between 6 am and 11 pm?',
            'Are cloths for toilets and work surfaces kept separate, for example by colour?',
          ],
        },
        {
          title: 'Price and contract',
          items: [
            'What is the monthly amount, with or without VAT?',
            'Are consumables included, and who reorders them?',
            'Are supplements for night, Sunday or public holiday work shown?',
            'Who covers for the team during holidays or illness?',
            'How long does the contract run, and at what notice can it be terminated?',
          ],
        },
      ],
      note: 'For each quote, multiply the hours per visit by the visits per month. Only this figure shows whether two providers mean the same work.',
      printable: true,
      updated: '2026-09-28',
    },
  ],
  steps: [
    {
      title: 'Agree rooms and access',
      text: 'Before the first visit, you agree with us what the team cleans, what only when you are present, who receives keys or badges and how the alarm system is operated.',
    },
    {
      title: 'Fixed cleaning schedule',
      text: 'Days and time windows are fixed, for example Monday, Wednesday and Friday from 6 pm. The task schedule sets out what is done on every visit and what weekly.',
    },
    {
      title: 'Report changes',
      text: 'If you move, your team grows or consulting hours change, we adjust the scope and frequency. Let us know by phone or email.',
    },
  ],
  faq: [
    {
      question: 'How much does office cleaning cost?',
      answer:
        'We quote a price after the site visit, because two offices of the same size can mean very different amounts of work. Twelve individual offices, each with its own bin, take longer than an open-plan area of the same size. The deciding factors are the number of workstations, kitchenettes and toilets, the floor coverings and glass surfaces, the frequency, the cleaning time, in practices the requirements of the hygiene plan, and whether consumables are included. The checklist above shows how to compare quotes.',
    },
    {
      question: 'How often should an office be cleaned?',
      answer:
        'Rooms with running water set the pace. Kitchenettes and toilets need attention on every visit, so in an office with many people that means daily or several times a week. Workstations and meeting rooms often manage with weekly cleaning. A reception with customers needs more than a back office.',
    },
    {
      question: 'How does the cleaning team get into the building when nobody is there?',
      answer:
        'With a key, badge or code that you hand over to the team. Before the first visit, it is agreed with you who receives what and how the alarm system, lights and locking up are handled. The ‘Confidential rooms’ checklist above contains all the points to fill in.',
    },
    {
      question: 'Do we have to tidy the workstations, and what happens to confidential documents?',
      answer:
        'Clear surfaces are wiped, and whatever is on the desk stays there. A clear desk in the evening therefore pays off twice: the surface gets cleaner, and confidential papers are not left lying open. For paper that is to be destroyed, lockable containers that are not emptied with the waste paper are the right choice.',
    },
    {
      question: 'Are screens and keyboards included?',
      answer:
        'On request, as a separate item in the task schedule. Screens are cleaned only with a slightly damp, lint-free cloth and are never sprayed directly. Keyboards and telephones are cleaned when the computer is locked, so that no keystroke triggers anything.',
    },
    {
      question: 'Who supplies soap, paper and bin bags?',
      answer:
        'Refilling is done on every visit. You decide who buys the supplies: either the cleaning company brings them and invoices them, or you buy them yourself and the team refills from your stock. What matters is that the quote states which option is calculated, otherwise two prices cannot be compared.',
    },
    {
      question: 'Do you follow our hygiene plan in practices?',
      answer:
        'Yes. Your hygiene plan determines products, surfaces and frequency, and the team works to it. Have it ready for the site visit, and it will become the basis of the task schedule for your practice.',
    },
  ],
  related: [
    { path: '/leistungen/unterhaltsreinigung', text: 'If the stairwell, lift and entrance of the whole building are to be cleaned as well as your offices.' },
    { path: '/leistungen/sonderreinigungen', text: 'For a deep clean when moving into new offices or before handing back old premises.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'For windows and glass fronts inside and out, which are not part of ongoing office cleaning.' },
  ],
  cta: {
    title: 'A quote for your office or practice',
    text: 'For the quote, we need the address, the approximate floor area and the number of floors, workstations, kitchenettes and toilets. Add the time windows in which cleaning is allowed and, for practices, the hygiene plan. We will then visit you, and the site visit and written quote are free of charge and non-binding for you.',
  },
}

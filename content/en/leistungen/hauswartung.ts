import type { ServicePageContent } from '../../types'
import { answers } from '../common'

export const hauswartung: ServicePageContent = {
  path: '/leistungen/hauswartung',
  area: 'leistungen',
  eyebrow: 'Property care',
  h1: 'Caretaking for residential and commercial buildings',
  lead: [
    'A property needs more than cleaning: someone has to check on things regularly, fix minor damage, organise waste disposal and be present when flats are handed over. That is what caretaking covers.',
    'For property managers, owners and communities of condominium owners who cannot or do not want to check on things themselves. We set out in writing which tasks we take on, how often we are on site and to whom we report defects.',
  ],
  facts: [
    { label: 'For', value: 'Property managers, owners and communities of condominium owners' },
    { label: 'Properties', value: 'Residential and commercial properties' },
    { label: 'Scope', value: 'Tasks as required, set out in writing' },
  ],
  scope: {
    title: 'What caretaking covers',
    intro: 'We put together the caretaking for your property from these tasks:',
    items: [
      'Inspection rounds: checking on things regularly and reporting defects',
      'Stairwell: cleaning and keeping it in order',
      'Keeping the laundry room and drying rooms clean',
      'Minor repairs, such as replacing light bulbs',
      'Keeping an eye on building services and reporting faults',
      'Assisting with flat handovers',
      'Organising the disposal of waste and recyclables',
      'Grounds maintenance, see [grounds and green space maintenance](/leistungen/aussen-und-gruenflaechenpflege)',
    ],
    notIncluded: [
      'We do not offer winter maintenance.',
      'Round-the-clock on-call and emergency service.',
      'Major repairs and work by tradespeople.',
    ],
  },
  sections: [
    {
      title: 'Typical properties and situations',
      paragraphs: [
        'Apartment buildings and residential complexes, condominiums, mixed-use buildings with shops or offices on the ground floor. Wherever that is, someone is needed who comes by regularly, keeps the laundry room in order and notices when something is wrong.',
        'Enquiries often come when the previous caretaker stops, when a property management firm takes over a property or when nobody in a community of condominium owners wants to take on the tasks any more.',
      ],
    },
    {
      title: 'What happens during an inspection round',
      paragraphs: [
        'During the inspection round, we check on things as often as agreed with you. What we can fix ourselves, such as replacing a light bulb, we take care of. Everything else we report to the contact we have agreed with you.',
      ],
      items: [
        'Lighting in the stairwell, the cellar and the grounds',
        'Doors, locks and letterboxes',
        'Laundry room, drying rooms and cellar',
        'Boiler room and building services for visible faults',
        'Waste collection point and grounds',
      ],
    },
    {
      title: 'Keeping an eye on building services',
      paragraphs: [
        'Caretaking does not mean servicing the installations. Heating, ventilation, lifts and fire protection are serviced by specialist firms. The caretaker looks regularly, notices faults early and reports them, such as an error message on the heating, a dripping tap in the laundry room or a lift that does not stop properly.',
      ],
    },
    {
      title: 'Flat handovers',
      paragraphs: [
        'How we assist with flat handovers is agreed with the property management, for example whether we open the flat, hand over keys or note meter readings. The acceptance inspection and the report remain with the property management.',
        'If the flat needs a final clean before the handover, there is our [end-of-tenancy cleaning with a handover guarantee](/leistungen/umzugsreinigung).',
      ],
    },
    {
      title: 'Working with property management and owners',
      paragraphs: [
        'Good caretaking depends on clear agreements: which tasks, how often, who receives reports and which small jobs may be done without asking first. We set this out in writing.',
        'Tenants should also know whom to contact. We agree with you who that contact person is.',
      ],
    },
    {
      title: 'Caretaking specification: what it should include',
      paragraphs: [
        'A specification sets out what the caretaker does in a property, how often and who is responsible for what. It creates clarity for property management, owners, tenants and caretaker, and makes quotes comparable.',
        'With us, this list is drawn up after the walk-through: we put in writing which tasks we take on, how often we are on site and to whom we report defects. These points belong in a specification:',
      ],
      items: [
        'Tasks and frequency for each area: stairwell, entrance, laundry and drying rooms, cellar and waste area, each with the activity and how often',
        'Inspection rounds: how often, which rooms and installations are included and how findings are recorded',
        'Grounds: which areas are maintained, such as lawns, hedges, flower beds, paths and forecourts',
        'Responsibilities and reporting lines: who receives reports from the caretaker, which small jobs may be done without asking and whom tenants should contact',
        'Keys and access: which keys, badges and codes the caretaker receives and how they are kept',
        'Materials: who provides cleaning products, consumables and equipment and where they are stored',
        'Boundary with tradespeople: which work specialist firms take on, such as major repairs and the servicing of heating, lifts and fire protection, and who commissions them',
      ],
    },
  ],
  steps: [
    {
      title: 'Defining the tasks',
      text: 'We record which tasks we take on, how often we are on site and to whom we report defects.',
    },
    {
      title: 'Start',
      text: 'We start on the agreed date. If the property later needs more or less, we adjust the tasks with you.',
    },
  ],
  faq: [
    {
      question: 'What tasks does a caretaker take on?',
      answer:
        'Typical tasks are inspection rounds, cleaning the stairwell, laundry and drying rooms, minor repairs, keeping an eye on building services, waste disposal, helping with flat handovers and looking after the grounds. Which tasks we take on in your property and how often is agreed with you in writing, as in a specification.',
    },
    {
      question: 'How does it differ from maintenance cleaning?',
      answer:
        'Maintenance cleaning covers cleaning on a fixed schedule. Caretaking goes further: inspection rounds, minor repairs, building services, waste disposal, flat handovers and grounds maintenance. If you only need cleaning, [maintenance cleaning](/leistungen/unterhaltsreinigung) is the right choice.',
    },
    {
      question: 'Do you also carry out major repairs?',
      answer:
        'No, we only carry out minor repairs. Major work requires a specialist firm. We report to you any damage we notice during inspection rounds.',
    },
    {
      question: 'Do you offer winter maintenance or an on-call service?',
      answer: 'No. Winter maintenance and on-call service are not part of what we offer.',
    },
    {
      question: 'Can we choose individual tasks?',
      answer: 'Yes. We put together the caretaking from the tasks your property needs.',
    },
    {
      question: 'How often does the caretaker come by?',
      answer:
        'That depends on the size, age and use of the property. We set out in writing how often we are on site, together with the other tasks.',
    },
    { question: 'Are you insured?', answer: answers.versicherung },
    { question: 'How much does caretaking cost?', answer: answers.kosten },
    { question: 'Which regions do you cover?', answer: answers.gebiet },
  ],
  related: [
    { path: '/leistungen/aussen-und-gruenflaechenpflege', text: 'For the grounds and green spaces of the property.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'If only the cleaning is to be contracted out.' },
    { path: '/leistungen/facility-services', text: 'If cleaning, caretaking and grounds maintenance belong in one contract.' },
  ],
  cta: {
    title: 'A quote for your property',
    text: 'Tell us about the property, the number of flats or the floor area, and the tasks you would like to hand over. We will do a walk-through and prepare a quote for you, free of charge and non-binding.',
  },
}

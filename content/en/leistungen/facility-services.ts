import type { ServicePageContent } from '../../types'
import { answers } from '../common'

export const facilityServices: ServicePageContent = {
  path: '/leistungen/facility-services',
  area: 'leistungen',
  eyebrow: 'Property care',
  h1: 'Facility services: cleaning, caretaking and grounds from a single provider',
  lead: [
    'If you award cleaning, caretaking and grounds maintenance to different companies, you have several contracts, several contact people and a lot of coordination. With facility services, everything comes from us.',
    'You have one contract and one contact person. We work out with you which services are included.',
  ],
  facts: [
    { label: 'For', value: 'Property managers, owners and businesses' },
    { label: 'Scope', value: 'Put together from our services as required' },
    { label: 'Contract', value: 'One contract, one contact person' },
  ],
  scope: {
    title: 'What can be combined',
    intro: 'We put together facility services from these in-house services:',
    items: [
      '[Maintenance cleaning](/leistungen/unterhaltsreinigung) with restocking service',
      '[Office and practice cleaning](/leistungen/bueroreinigung)',
      '[Caretaking](/leistungen/hauswartung)',
      '[Grounds and green space maintenance](/leistungen/aussen-und-gruenflaechenpflege)',
      '[Window and facade cleaning](/leistungen/fenster-und-fassadenreinigung)',
      '[Deep and special cleaning](/leistungen/sonderreinigungen)',
      '[Industrial and warehouse cleaning](/leistungen/industrie-und-hallenreinigung)',
    ],
    notIncluded: [
      'Technical facility management, such as maintenance of heating, ventilation or lifts.',
      'Winter maintenance.',
      'Referrals to third-party firms, such as tradespeople.',
    ],
  },
  sections: [
    {
      title: 'Typical situations',
      paragraphs: [
        'A property management firm looks after several properties and does not want to coordinate a separate company for every task. A business has offices, a hall and grounds and wants one point of contact for everything. Or an owner takes over a property and is looking for a solution that fits together from the start.',
      ],
    },
    {
      title: 'How individual services become one contract',
      paragraphs: [
        'During the walk-through, we look at what your property needs: interior cleaning, glass, caretaking, grounds. This results in a contract that sets out each service with its scope and frequency.',
        'If something is added later or dropped, you discuss it in one place, with your contact person at our company.',
      ],
    },
    {
      title: 'What you gain',
      items: [
        'One contact person for cleaning, caretaking and grounds',
        'One contract instead of several, with an overview of all services',
        'Less coordination between companies, for example about who cleans the stairwell after work on the grounds',
        'A view of the whole property: whoever cleans inside also notices when something is wrong outside',
      ],
    },
    {
      title: 'Limits and cooperation',
      paragraphs: [
        'For us, facility services means the services we provide ourselves. Technical facility management, such as maintenance of heating, ventilation or lifts, is not included, nor are referrals to tradespeople.',
        'We report faults we notice during our work to you, so that you can commission the right specialist firm.',
      ],
    },
  ],
  steps: [
    {
      title: 'One contract',
      text: 'We set out the services your property needs in a single contract.',
    },
    {
      title: 'One contact person',
      text: 'You have one contact person with us for all services. You discuss any changes in one place.',
    },
  ],
  faq: [
    {
      question: 'What do you mean by facility services?',
      answer:
        'Cleaning, caretaking and grounds maintenance from a single provider, under one contract and with one contact person. Technical facility management, such as maintenance of heating and ventilation, is not included.',
    },
    {
      question: 'Can we start with a single service?',
      answer:
        'Yes. You can start with one service, such as [maintenance cleaning](/leistungen/unterhaltsreinigung), and add others later.',
    },
    {
      question: 'How does it differ from caretaking?',
      answer:
        '[Caretaking](/leistungen/hauswartung) is a single service with inspection rounds, minor repairs, building services and waste disposal. Facility services combine it with cleaning and grounds maintenance in one contract.',
    },
    {
      question: 'Who is our contact person?',
      answer: 'You have one contact person with us for all services. You discuss any changes in one place.',
    },
    { question: 'How much do facility services cost?', answer: answers.kosten },
    { question: 'Which regions do you cover?', answer: answers.gebiet },
    { question: 'Are you insured?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/hauswartung', text: 'Inspection rounds, minor repairs, building services, waste disposal and flat handovers.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Regular cleaning of properties and business premises.' },
    { path: '/leistungen/aussen-und-gruenflaechenpflege', text: 'Maintenance of grounds and green spaces.' },
  ],
  cta: {
    title: 'A quote for facility services',
    text: 'Tell us about your properties and the services you would like to hand over. We will do a walk-through and prepare a quote for you, free of charge and non-binding.',
  },
}

import type { ServicePageContent } from '../../types'
import { answers } from '../common'
import { team, cta } from './gemeinsam'

export const yacht: ServicePageContent = {
  path: '/premium/yacht',
  area: 'premium',
  h1: 'Cleaning for yachts and motorboats',
  lead: [
    'A boat on the lake is exposed to wind, weather, pollen and bird droppings, while moisture and dust settle inside. We clean your boat inside and out, on Lake Lucerne and Lake Zug.',
    'Teak, gelcoat and upholstery each need their own treatment. We agree with you in advance which products we use for your boat.',
  ],
  facts: [
    { label: 'For', value: 'Owners of yachts and motorboats' },
    { label: 'Area', value: 'On Lake Lucerne and Lake Zug' },
    { label: 'Materials', value: 'Teak, gelcoat and upholstery' },
    { label: 'Scheduling', value: 'By arrangement, one-off or regular' },
  ],
  scope: {
    title: 'What is included',
    intro: 'We define the scope after an inspection at the mooring. Typically this includes:',
    items: [
      'Deck and teak surfaces',
      'Gelcoat surfaces on deck and superstructure',
      'Upholstery and textiles',
      'Saloon, cabins and galley',
      'Heads and showers',
      'Windows and glass',
    ],
    notIncluded: ['Work on the underwater hull, such as antifouling.', 'Technical maintenance of the engine and on-board systems.'],
  },
  sections: [
    {
      title: 'Materials on board',
      paragraphs: [
        'Teak turns grey and rough if it is cleaned the wrong way: brushes that are too hard and high-pressure cleaning wash out the soft wood fibres. Gelcoat loses its shine through sun and water spots, stainless steel shows surface rust, and upholstery absorbs moisture.',
        'That is why each material needs its own approach. Which products we use for your boat is clarified with you in advance.',
      ],
    },
    {
      title: 'On the lake, many things are different',
      paragraphs: [
        'On Lake Lucerne and Lake Zug there is no salt, but pollen, leaves, spiders and bird droppings bring a lot of dirt onto the boat, especially in spring and summer. In the closed interior, moisture and dust settle.',
        'Because water runs straight off the deck into the lake, care is needed with cleaning products. On request, we clean with environmentally friendly products.',
      ],
    },
    {
      title: 'Typical occasions',
      items: [
        'Before the first outing of the season',
        'Regularly during the season',
        'Before and after guests on board',
        'At the end of the season, before the boat is laid up for winter',
      ],
    },
    {
      title: 'Access to the mooring',
      paragraphs: [
        'We clarify access to the jetty or harbour with you in advance, as well as electricity and water at the mooring and who opens the boat for us. The same team always works for you.',
      ],
    },
  ],
  steps: [
    {
      title: 'Appointments',
      text: 'We clean on the dates we agree with you, as a one-off or on a regular basis.',
    },
    team,
  ],
  faq: [
    {
      question: 'Where do you clean boats?',
      answer: 'At the mooring, on Lake Lucerne and Lake Zug. We clarify access to the jetty or harbour with you in advance.',
    },
    {
      question: 'Which materials do you clean?',
      answer: 'Teak, gelcoat and upholstery as well as the interior. We clarify which products we use for your boat during the inspection.',
    },
    {
      question: 'How often should a boat on the lake be cleaned?',
      answer:
        'That depends on the mooring, use and season. Under trees and in the flowering season, a boat gets dirty faster. After the inspection, we suggest dates, as a one-off or regularly.',
    },
    {
      question: 'Do you also work on the underwater hull or the engine?',
      answer: 'No. Work on the underwater hull, such as antifouling, and technical maintenance of the engine and on-board systems are not included.',
    },
    { question: 'Can you clean with environmentally friendly products?', answer: answers.mittel },
    { question: 'Are you insured?', answer: answers.versicherung },
    { question: 'What does the cleaning cost?', answer: answers.kosten },
  ],
  related: [
    { path: '/premium/luxusimmobilien', text: 'For villas, residences and second homes by the lake.' },
    { path: '/premium/privatjet', text: 'For the cabin of your private jet.' },
    { path: '/premium', text: 'All services and commitments of our premium line.' },
  ],
  cta: {
    title: cta.title,
    text: 'Tell us about the boat, its berth and your preferred dates. We look at the boat at its berth and prepare a quote for you, free of charge and without obligation.',
  },
}

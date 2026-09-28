import type { ServicePageContent } from '../../types'
import { answers } from '../common'
import { team, cta } from './gemeinsam'

export const privatjet: ServicePageContent = {
  path: '/premium/privatjet',
  area: 'premium',
  h1: 'Cabin cleaning for private jets',
  lead: [
    'In the cabin of a private jet, leather, wood, high-gloss surfaces and fine textiles come together in a confined space. Cleaning it calls for care, discretion and planning that fits around your flights.',
    'We clean the cabin by arrangement with you and your aircraft operator, with care for high-quality materials.',
  ],
  facts: [
    { label: 'For', value: 'Owners and operators of private jets' },
    { label: 'Scope', value: 'Cabin cleaning' },
    { label: 'Scheduling', value: 'By arrangement, to fit your flight schedule' },
    { label: 'Discretion', value: 'Non-disclosure agreement on request' },
  ],
  scope: {
    title: 'What is included',
    intro: 'We agree the scope with you in advance. Typically this includes:',
    items: [
      'Leather and fabric seats and upholstery',
      'Carpets and floors',
      'Wood and high-gloss surfaces',
      'Windows, mirrors and glass in the cabin',
      'Galley and lavatory',
    ],
  },
  sections: [
    {
      title: 'Materials in the cabin',
      paragraphs: [
        'Leather, lacquered wood, high-gloss surfaces, carpet and fine textiles sit close together in a cabin. Each material needs its own product and its own cloth, so that nothing fades, dries out or gets scratched.',
        'Which products are suitable for your cabin is clarified in advance with you and your aircraft operator.',
      ],
    },
    {
      title: 'Planning around your flights',
      paragraphs: [
        'Where and when we clean the cabin is agreed with you and your aircraft operator, so that the work fits into your flight schedule.',
        'The cleaning often takes place between two flights, after a longer trip or before a flight with guests. If the time window is tight, it helps to agree the dates early.',
      ],
    },
    {
      title: 'What must be settled before the job',
      items: [
        'The location of the aircraft and how access for our team is arranged',
        'The time window between flights',
        'Which areas of the cabin are included',
        'Which products are approved for the materials',
        'Who takes over the cabin after cleaning',
      ],
    },
    {
      title: 'Discretion on board',
      paragraphs: [
        'You decide how we handle personal belongings and documents on board. The same team always works for you, vetted by us. On request, we sign a non-disclosure agreement.',
      ],
    },
  ],
  steps: [
    {
      title: 'Cleaning',
      text: 'We clean the cabin at the agreed time.',
    },
    team,
  ],
  faq: [
    {
      question: 'How do you plan the cleaning around our flights?',
      answer: 'We agree the timing with you and your aircraft operator so that the cabin is ready before the next flight.',
    },
    {
      question: 'How do you treat leather and wood?',
      answer: 'We clean with care for the materials and clarify in advance which products are suitable for your cabin.',
    },
    {
      question: 'Do you also clean the outside of the aircraft?',
      answer: 'No. Our service covers cleaning the cabin.',
    },
    {
      question: 'Who works in our cabin?',
      answer: 'Always the same team. Everyone who works for you has been vetted by us. On request, we sign a non-disclosure agreement.',
    },
    { question: 'Are you insured?', answer: answers.versicherung },
    { question: 'In which languages can we communicate?', answer: answers.sprachen },
    { question: 'What does the cleaning cost?', answer: answers.kosten },
  ],
  related: [
    { path: '/premium/luxusimmobilien', text: 'For villas, residences and second homes.' },
    { path: '/premium/yacht', text: 'For yachts and motorboats on Lake Lucerne and Lake Zug.' },
    { path: '/premium', text: 'All services and commitments of our premium line.' },
  ],
  cta,
}

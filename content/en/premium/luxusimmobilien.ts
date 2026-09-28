import type { ServicePageContent } from '../../types'
import { answers } from '../common'
import { team, cta } from './gemeinsam'

export const luxusimmobilien: ServicePageContent = {
  path: '/premium/luxusimmobilien',
  area: 'premium',
  h1: 'Cleaning and care for villas and residences',
  lead: [
    'In a house with natural stone, parquet and high-gloss surfaces, every detail counts, and so does trust in the people who work there. We clean villas, lofts and residences on a regular basis or ahead of special occasions, with care for delicate materials.',
    'The same team always works for you, at times that suit you, including evenings, weekends or while you are away.',
  ],
  facts: [
    { label: 'For', value: 'Villas, lofts, residences and second homes' },
    { label: 'Frequency', value: 'Regularly or ahead of special occasions' },
    { label: 'Team', value: 'Always the same team' },
    { label: 'Discretion', value: 'Non-disclosure agreement on request' },
  ],
  scope: {
    title: 'What is included',
    intro: 'We define the scope after a walk-through of your home. Typically this includes:',
    items: [
      'Living rooms, bedrooms and guest rooms',
      'Kitchens and bathrooms',
      'Natural stone, parquet and high-gloss surfaces, cleaned to suit the material',
      'Glass surfaces and mirrors',
      'Cleaning before your arrival and after your departure',
      'Inspection rounds while you are away',
      'Cleaning before and after events, including at weekends',
      'Rooms with art and antiques, works of art only with your approval',
      'For estate agents and property managers: at short notice before a sale, photo shoot or handover',
    ],
    notIncluded: ['Restoration of works of art and antiques.'],
  },
  sections: [
    {
      title: 'Materials treated with care',
      paragraphs: [
        'Natural stone such as marble and limestone is sensitive to acid, including mild household cleaners and vinegar. Parquet tolerates little water, and high-gloss surfaces scratch with the wrong cloths. Brass and taps lose their finish with harsh products.',
        'That is why, during the walk-through, we clarify which materials have been used in your home and what care they need. If you have care instructions from the manufacturer or the interior designer, we follow them.',
      ],
    },
    {
      title: 'Keys, alarm and discretion',
      paragraphs: [
        'We agree fixed rules with you for keys and the alarm system. On request, we sign a non-disclosure agreement.',
        'Your enquiry is handled personally by our managing director. Everyone who works in your home has been vetted by us.',
      ],
    },
    {
      title: 'Typical situations',
      items: [
        'Regular care of your residence, at fixed times and always with the same team',
        'Second home: cleaning before you arrive and after you leave, inspection rounds in between',
        'Before and after an event, including at weekends',
        'Rooms with art and antiques, works of art only with your approval',
        'For estate agents and property managers: at short notice before a sale, photo shoot or handover',
      ],
    },
    {
      title: 'While you are away',
      paragraphs: [
        'For second homes and longer trips, we check on things as often as agreed with you. What we look at and to whom we report anything unusual is agreed with you in advance.',
        'Before you arrive, we clean the house so that you can arrive and have nothing left to do. After you leave, we put it back in order.',
      ],
    },
  ],
  steps: [
    {
      title: 'Fixed rules',
      text: 'We agree times, key handover and the handling of the alarm system, with a non-disclosure agreement on request.',
    },
    team,
  ],
  faq: [
    {
      question: 'Will the same team always work for us?',
      answer: 'Yes. The same team always works for you, one that knows your home and your wishes.',
    },
    {
      question: 'How do you handle works of art and antiques?',
      answer: 'We clean the rooms with care. We only clean the works of art themselves if you expressly approve it.',
    },
    {
      question: 'How do you care for natural stone and parquet?',
      answer:
        'In a way that suits the material: never acidic products on natural stone such as marble, little moisture on parquet. Which products we use in your home is clarified with you during the walk-through.',
    },
    {
      question: 'Can you clean while we are away?',
      answer: 'Yes, including while you are away, in the evening or at weekends. We agree fixed rules for keys and the alarm.',
    },
    { question: 'Are you insured?', answer: answers.versicherung },
    { question: 'In which languages can we communicate?', answer: answers.sprachen },
    { question: 'What does the cleaning cost?', answer: answers.kosten },
    { question: 'Where do you work?', answer: answers.gebiet },
  ],
  related: [
    { path: '/premium/yacht', text: 'For yachts and motorboats on Lake Lucerne and Lake Zug.' },
    { path: '/premium/privatjet', text: 'For the cabin of your private jet.' },
    { path: '/premium', text: 'All services and commitments of our premium line.' },
  ],
  cta,
}

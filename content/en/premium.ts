import type { ServicePageContent, Step } from '../types'
import { answers, responseTime } from './common'

/**
 * English texts of the three premium pages under /premium (M29, M57, M60).
 * Faithful translation of content/de/premium.ts, no additional claims (E18).
 */

const anfrage: Step = {
  title: 'Discreet enquiry',
  text: `Call us or write to us. Your enquiry is handled personally by our managing director, and you will hear from us ${responseTime}.`,
}

const team: Step = {
  title: 'Your team',
  text: 'The same team always works for you. Everyone who works in your home has been vetted by us.',
}

const cta = {
  title: 'Enquire discreetly',
  text: `Call us or write to us. Your enquiry is handled personally by our managing director, and you will hear from us ${responseTime}.`,
}

const luxusimmobilien: ServicePageContent = {
  path: '/premium/luxusimmobilien',
  area: 'premium',
  h1: 'Cleaning and care for villas and residences',
  lead: [
    'In a house with natural stone, parquet and high-gloss surfaces, every detail counts, and so does trust in the people who work there. We clean villas, lofts and residences on a regular basis or ahead of special occasions, with care for delicate materials.',
    'The same team always works for you, at times that suit you: including evenings, weekends or while you are away.',
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
      title: 'Keys, alarm and discretion',
      paragraphs: [
        'We agree fixed rules with you for keys and the alarm system. On request, we sign a non-disclosure agreement.',
        'Your enquiry is handled personally by our managing director. Everyone who works in your home has been vetted by us.',
      ],
    },
  ],
  steps: [
    anfrage,
    {
      title: 'Walk-through and quote',
      text: 'We look at your home and clarify materials, times and access. You then receive a quote, free of charge and non-binding.',
    },
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
    { path: '/premium', text: 'All offers and commitments of our premium line.' },
  ],
  cta,
}

const privatjet: ServicePageContent = {
  path: '/premium/privatjet',
  area: 'premium',
  h1: 'Cabin cleaning for private jets',
  lead: [
    'In the cabin of a private jet, leather, wood, high-gloss surfaces and fine textiles come together in a confined space. Cleaning it calls for care, discretion and planning that fits around your flights.',
    'We clean the cabin by arrangement with you and your flight operator, with care for high-quality materials.',
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
      title: 'Planning around your flights',
      paragraphs: [
        'Where and when we clean the cabin is agreed with you and your flight operator, so that the work fits into your flight schedule.',
      ],
    },
  ],
  steps: [
    anfrage,
    {
      title: 'Inspection and quote',
      text: 'We look at the cabin and clarify materials, location and time window with you and your flight operator. You then receive a quote, free of charge and non-binding.',
    },
    {
      title: 'Cleaning',
      text: 'We clean the cabin at the agreed time.',
    },
    team,
  ],
  faq: [
    {
      question: 'How do you plan the cleaning around our flights?',
      answer: 'We agree the timing with you and your flight operator so that the cabin is ready before the next flight.',
    },
    {
      question: 'How do you treat leather and wood?',
      answer: 'We clean with care for the materials and clarify in advance which products are suitable for your cabin.',
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
    { path: '/premium', text: 'All offers and commitments of our premium line.' },
  ],
  cta,
}

const yacht: ServicePageContent = {
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
  steps: [
    anfrage,
    {
      title: 'Inspection at the mooring',
      text: 'We look at the boat and clarify materials and access to the mooring. You then receive a quote, free of charge and non-binding.',
    },
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
    { question: 'Can you clean with environmentally friendly products?', answer: answers.mittel },
    { question: 'Are you insured?', answer: answers.versicherung },
    { question: 'What does the cleaning cost?', answer: answers.kosten },
  ],
  related: [
    { path: '/premium/luxusimmobilien', text: 'For villas, residences and second homes by the lake.' },
    { path: '/premium/privatjet', text: 'For the cabin of your private jet.' },
    { path: '/premium', text: 'All offers and commitments of our premium line.' },
  ],
  cta,
}

export const premium = { luxusimmobilien, privatjet, yacht }

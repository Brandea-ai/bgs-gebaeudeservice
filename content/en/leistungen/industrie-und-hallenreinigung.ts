import type { ServicePageContent } from '../../types'
import { answers } from '../common'

export const industrieUndHallen: ServicePageContent = {
  path: '/leistungen/industrie-und-hallenreinigung',
  area: 'leistungen',
  eyebrow: 'One-off and special cleaning',
  h1: 'Industrial and warehouse cleaning for production and storage',
  lead: [
    'Production and storage generate dust, shavings and films of oil and grease. They make floors slippery and build up in equipment. At the same time, cleaning must not hold up operations.',
    'We clean halls, floors, machinery and equipment, as a one-off or regularly, at times we coordinate with you around production and shifts.',
  ],
  facts: [
    { label: 'For', value: 'Industrial and commercial businesses, logistics and warehousing' },
    { label: 'Areas', value: 'Production halls and warehouses, workshops, machinery and equipment' },
    { label: 'Times', value: 'Coordinated with production and shift operations' },
  ],
  scope: {
    title: 'What is included',
    intro: 'We record the scope after a walk-through of your premises. Typically this includes:',
    items: [
      'Hall and production floors',
      'Storage areas, racking and traffic routes',
      'Workshops and ancillary rooms',
      'Machinery and equipment according to your specifications',
      'Staff rooms, changing rooms and sanitary facilities',
    ],
    notIncluded: [
      'Maintenance and repair of machinery.',
      'Offices on the premises: see [office and practice cleaning](/leistungen/bueroreinigung).',
    ],
  },
  sections: [
    {
      title: 'Machinery and equipment',
      paragraphs: [
        'We clean machinery according to your specifications and in consultation with your maintenance team. When equipment is shut down, what is cleaned and which products are suitable is agreed before the job.',
        'Your safety and operating rules also apply to our team. We clarify them with you before the first job.',
      ],
    },
    {
      title: 'Hall floors and traffic routes',
      paragraphs: [
        'Hall floors carry dust, shavings, tyre abrasion and films of oil or grease. Large areas are usually cleaned with scrubber dryers, which scrub and pick up the dirty water in a single pass. The floor can then quickly be walked and driven on again.',
        'Which approach and which product are suitable depends on the surface, such as concrete, coating or industrial parquet, and on the type of dirt. We clarify this during the walk-through.',
      ],
    },
    {
      title: 'Typical properties and situations',
      paragraphs: [
        'Production plants, workshops, warehouses and logistics halls, commercial businesses with a workshop and office under one roof. Occasions include an audit or a customer visit, a change in production, company holidays or the wish for fixed cleaning times instead of cleaning on the side.',
      ],
    },
    {
      title: 'Safety on the premises',
      paragraphs: [
        'Production and storage have their own rules: protective equipment, forklift routes, cordoned-off areas, handling of hazardous substances. We clarify these rules with you before the first job.',
        'For machinery, this includes who switches it off and secures it and who releases it again after cleaning. We agree this with your maintenance team before the job.',
      ],
    },
    {
      title: 'Planning and frequency',
      paragraphs: [
        'Not every area needs the same frequency. Staff rooms and sanitary facilities need frequent care. Hall floors, racking and machinery need thorough cleaning at longer intervals.',
        'A combination often makes sense: regular cleaning during operations and a deep clean during company holidays or planned shutdowns.',
      ],
    },
  ],
  steps: [
    {
      title: 'Job planning',
      text: 'We agree times, areas and sequence, coordinated with production, shifts and shutdowns.',
    },
    {
      title: 'Cleaning',
      text: 'We clean according to plan. If your operations change, we adjust the plan with you.',
    },
  ],
  faq: [
    {
      question: 'Can you clean while operations are running?',
      answer:
        'We clarify that during the walk-through. Some areas can be cleaned during operation, others only during breaks, between shifts or during shutdowns. We agree the times with you.',
    },
    {
      question: 'Do you also clean machinery?',
      answer: 'Yes. What is cleaned on a machine and when it is shut down for this is agreed with you and your maintenance team.',
    },
    {
      question: 'Which rules apply to your team on our premises?',
      answer: 'Your safety and operating rules. We clarify them with you before the first job.',
    },
    {
      question: 'How is a hall floor cleaned?',
      answer:
        'Usually with a scrubber dryer, which scrubs and picks up the dirty water straight away. Which product is suitable depends on the surface and the type of dirt, such as dust, oil or abrasion. We clarify this during the walk-through.',
    },
    { question: 'How much does industrial cleaning cost?', answer: answers.kosten },
    { question: 'Which regions do you cover?', answer: answers.gebiet },
    { question: 'Are you insured?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/sonderreinigungen', text: 'For a one-off, thorough deep clean.' },
    { path: '/leistungen/bueroreinigung', text: 'For offices and staff rooms on the premises.' },
    { path: '/leistungen/facility-services', text: 'If you want cleaning, caretaking and grounds maintenance from a single provider.' },
  ],
  cta: {
    title: 'A quote for your business',
    text: 'Tell us about the areas, machinery and operating hours. We will do a walk-through and prepare a quote for you, free of charge and non-binding.',
  },
}

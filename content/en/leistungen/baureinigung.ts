import type { ServicePageContent } from '../../types'
import { answers } from '../common'

export const baureinigung: ServicePageContent = {
  path: '/leistungen/baureinigung',
  area: 'leistungen',
  eyebrow: 'One-off and special cleaning',
  h1: 'Construction and post-construction cleaning for new builds and renovations',
  lead: [
    'After construction and renovation work, there is dust, mortar residue and protective film everywhere. Before tenants, buyers or your team move in, everything has to be ready for occupancy, often by a fixed handover date.',
    'We clean during and after the work until the rooms can be handed over. For building owners, architects, general contractors and property managers.',
  ],
  facts: [
    { label: 'For', value: 'Building owners, architects, general contractors and property managers' },
    { label: 'Properties', value: 'New builds, conversions and renovations' },
    { label: 'Timing', value: 'During the construction phase and before handover' },
  ],
  scope: {
    title: 'What is included',
    intro:
      'Construction cleaning is usually carried out in stages, in line with the progress of the work. We agree with you which stages we take on.',
    items: [
      'Rough cleaning during the construction phase',
      'Interim cleaning, for example before interior fit-out',
      'Post-construction cleaning before handover',
      'Removing dust and residue from windows, frames and glass',
      'Removing adhesive residue and protective film',
      'Cleaning floors, sanitary facilities, kitchens and built-in cupboards ready for occupancy',
    ],
    notIncluded: [
      'Ongoing cleaning after move-in: see [maintenance cleaning](/leistungen/unterhaltsreinigung).',
      'Facades: see [window and facade cleaning](/leistungen/fenster-und-fassadenreinigung).',
    ],
  },
  sections: [
    {
      title: 'Typical properties and situations',
      paragraphs: [
        'New residential and commercial buildings, conversions of individual floors, renovated flats before re-letting or shops before opening. They all have one thing in common: a fixed date for handover, move-in or opening.',
        'Cleaning is often requested only shortly before that date. It is better to include it in the schedule early, so that there is room for it after the last trades have finished and before the acceptance inspection.',
      ],
    },
    {
      title: 'What happens during post-construction cleaning',
      paragraphs: [
        'Construction dust is fine and settles everywhere: on floors, in window rebates, on door frames, in cupboards and drawers. That is why cleaning is done from top to bottom and often in more than one pass.',
        'On top of that come residues such as adhesive, labels and protective film. They are removed with products and tools that suit the surface, so that glass, taps and new floors are not scratched.',
      ],
    },
    {
      title: 'The stages at a glance',
      items: [
        'Rough cleaning: removing coarse dirt and dust so that the next work can start on a clean base',
        'Interim cleaning: before the interior fit-out, for example before floors are laid or kitchens installed',
        'Post-construction cleaning: thorough and ready for occupancy, after the last trades have finished and before the acceptance inspection',
      ],
      paragraphs: [
        'If tradespeople are still working in the rooms after the post-construction cleaning, new dust is created. So schedule the final clean after the last work.',
      ],
    },
    {
      title: 'Working with the site management',
      paragraphs: [
        'On the construction site, the site management\'s rules apply. Before the first job, we clarify access, safety rules, electricity and water, a place for equipment and how waste is handled.',
        'A contact person on site who confirms dates and access is helpful. If the schedule shifts, we coordinate the jobs with you again.',
      ],
    },
    {
      title: 'How to recognise good post-construction cleaning',
      items: [
        'No film of dust on window sills, door frames or in drawers',
        'Glass free of adhesive residue, streaks and scratches',
        'Protective film has been removed from windows, doors and appliances',
        'Taps and tiles are free of residue',
        'Floors are clean, including in corners and along the skirting boards',
      ],
    },
  ],
  steps: [
    {
      title: 'Planning the stages',
      text: 'We coordinate the jobs with the site management and the schedule so that the cleaning keeps pace with the construction work.',
    },
    {
      title: 'Handover',
      text: 'Before the handover, we clean the rooms ready for occupancy. We schedule the date around your handover or move-in date.',
    },
  ],
  faq: [
    {
      question: 'What is the difference between construction cleaning and post-construction cleaning?',
      answer:
        'Construction cleaning covers jobs during the construction phase, such as rough cleaning or interim cleaning. Post-construction cleaning is the final, thorough clean before the handover, after which the rooms are ready for occupancy.',
    },
    {
      question: 'When should we schedule the post-construction cleaning?',
      answer:
        'As soon as the handover date is fixed. The cleaning takes place after the last trades have finished and before the acceptance inspection. The earlier we know the date, the better we can plan.',
    },
    {
      question: 'Is window cleaning included?',
      answer:
        'Yes, we clean windows, frames and glass as part of the post-construction cleaning. For facades, there is our [window and facade cleaning](/leistungen/fenster-und-fassadenreinigung).',
    },
    {
      question: 'What is needed on the construction site for the cleaning?',
      answer:
        'Access to the rooms, electricity and water, and a place for equipment. Where we will find these is clarified during the site visit with you or the site management.',
    },
    { question: 'How much does construction cleaning cost?', answer: answers.kosten },
    { question: 'Which regions do you cover?', answer: answers.gebiet },
    { question: 'Are you insured?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/sonderreinigungen', text: 'For deep cleaning, when areas are to be thoroughly clean again after a long period of use.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'For glass surfaces and facades on the finished building.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'For ongoing cleaning after move-in.' },
  ],
  cta: {
    title: 'A quote for your construction site',
    text: 'Tell us about the property, the floor area and the handover date. We will look at the site and prepare a quote for you, free of charge and non-binding.',
  },
}

import { company } from '../../shared/company'
import type { ArticleContent } from '../types'
import { cantons, languages, responseTime } from './common'

/**
 * English guides (M53, M60). Faithful translation of content/de/ratgeber.ts:
 * general advice as such, statements about the company only as in E18.
 */

export const ratgeberUebersicht = {
  h1: 'Guides to building cleaning',
  intro: `Answers to questions about awarding, costing and running building cleaning contracts. By ${company.brand}, for businesses, property managers and owners in the cantons of ${cantons}.`,
  services:
    'Go straight to our services: [maintenance cleaning](/leistungen/unterhaltsreinigung), [caretaking](/leistungen/hauswartung) and [all services](/leistungen).',
  byline: `A guide by ${company.brand}`,
  updatedLabel: 'Last updated',
  publishedLabel: 'Published on',
}

const reinigungsfirmaFinden: ArticleContent = {
  path: '/blog/richtige-reinigungsfirma-finden',
  h1: 'How do I find the right cleaning company?',
  subtitle: 'The questions to clarify before awarding a contract, from the scope of services to the contract itself.',
  teaser: 'The questions to clarify before awarding a contract: scope of services, insurance, quality control, references, quote and contract.',
  updated: '2026-09-26',
  intro: [
    'Clean, well-kept premises create a pleasant working atmosphere and make a good first impression on clients. The cleaning company you choose to look after them is usually a decision for several years. This guide shows what to look for when making your choice.',
  ],
  summary: {
    title: 'In brief',
    items: [
      'First clarify your needs: which service, how often and at what times.',
      'Obtain three to five quotes, each after a site visit.',
      'Compare scope of services, insurance, quality control, references, quote and contract.',
      'Ask where anything remains unclear, and get the answers in writing.',
    ],
  },
  sections: [
    {
      title: 'Clarify your needs first',
      paragraphs: ['Before you compare providers, you should know what you need. The main services:'],
      definitions: [
        {
          term: 'Maintenance cleaning',
          text: 'Recurring cleaning on a fixed schedule, for example several times a week. It keeps premises clean and hygienic. More under [maintenance cleaning](/leistungen/unterhaltsreinigung).',
        },
        {
          term: 'Deep cleaning',
          text: 'A thorough clean at longer intervals. It removes dirt that regular cleaning leaves behind. More under [deep and special cleaning](/leistungen/sonderreinigungen).',
        },
        {
          term: 'Caretaking',
          text: 'Looking after a property beyond cleaning, for example with inspection rounds, minor repairs and waste disposal. More under [caretaking](/leistungen/hauswartung).',
        },
      ],
      note: 'Also decide how often and at what times cleaning should take place, for example before work starts or after the shop closes. All providers need this information so that their quotes are comparable.',
    },
    {
      title: 'What to look out for',
      subsections: [
        {
          title: 'Scope of services and limits',
          text: 'Get it in writing which rooms and tasks are included and which are not. Ask: what is part of regular cleaning, and what is charged separately?',
        },
        {
          title: 'Insurance',
          text: 'Something may be damaged while work is being done on your premises. Ask about business liability insurance and for proof of the amount of cover.',
        },
        {
          title: 'Quality control and contact person',
          text: 'Ask how new staff are trained and who checks the work on site. It is also important to know who your contact person is and how complaints are handled.',
        },
        {
          title: 'Putting certificates in context',
          text: 'Certificates can show that processes have been audited against a standard. Ask about the standard, the certification body, the scope and the validity. Just as important is how the company checks quality day to day and remedies defects.',
        },
        {
          title: 'References and reviews',
          text: 'Ask for references for comparable properties. Whether you can speak to reference clients depends on their consent. Check online reviews as well.',
        },
        {
          title: 'Quote and price',
          text: 'A reliable quote is only possible after a site visit. Make sure that additional costs such as travel and cleaning products are shown and that special cleaning is listed separately. If a quote is very low, ask which services and how much time are included. More on this: [What the cost of maintenance cleaning depends on](/blog/reinigungskosten-schweiz).',
        },
        {
          title: 'Contract',
          text: 'The term, the notice period and cover during holidays or illness belong in the contract.',
        },
        {
          title: 'Proximity and availability',
          text: 'Ask how quickly someone can be on site if there is a problem and how you can reach your contact person.',
        },
      ],
    },
    {
      title: 'Step by step to the right cleaning company',
      ordered: true,
      items: [
        'Clarify your needs: note down the service, frequency, times and areas.',
        'Select three to five providers who work in your region.',
        'Arrange site visits. Without a site visit, there is no comparable quote.',
        'Compare quotes: scope, frequency, additional costs and term.',
        'Clarify any open questions, ideally in writing.',
        'Ask whether a trial clean or a start with a trial period is possible.',
        'Sign the contract and record who your contact person is.',
      ],
    },
    {
      title: 'Questions for the site visit',
      items: [
        'What exactly is included, and what is not?',
        'How often and at what times will cleaning take place?',
        'Who is my contact person?',
        'How is quality checked?',
        'How is cover arranged during holidays or illness?',
        'What insurance is in place, and with what cover?',
        'How is billing done, and what costs extra?',
      ],
    },
    {
      title: `How ${company.brand} answers these questions`,
      items: [
        'Quote: free of charge and non-binding, after an on-site visit.',
        `Contact person: your enquiry is handled personally by our managing director. You will hear from us ${responseTime}.`,
        'Insurance: business liability insurance with cover of CHF 10 million.',
        'Experience: since 2006, today over 50 employees and over 120 clients (as of September 2026).',
        `Languages: ${languages}.`,
        `Area: the cantons of ${cantons}, with all services. More under [Service area](/einzugsgebiet).`,
      ],
    },
  ],
  cta: {
    title: 'Quote on site',
    text: 'We will visit you to prepare a free, non-binding quote. Tell us about the property, the floor area and the frequency you would like.',
  },
}

const kosten: ArticleContent = {
  path: '/blog/reinigungskosten-schweiz',
  h1: 'How much does maintenance cleaning cost?',
  subtitle: 'The main cost factors and how to obtain a reliable quote.',
  teaser: 'What the price of maintenance cleaning depends on, how it is billed and how to compare quotes.',
  updated: '2026-09-26',
  intro: [
    'This guide covers [maintenance cleaning](/leistungen/unterhaltsreinigung), that is, the regular cleaning of residential and commercial buildings, offices and business premises. It explains what the price depends on and what a quote should contain.',
  ],
  summary: {
    title: 'In brief',
    items: [
      'The price depends mainly on floor area, frequency, use and working hours.',
      'A reliable figure is only possible after a site visit.',
      'Compare quotes by scope of services and monthly amount, not by the hourly rate alone.',
      'We visit you for the site visit free of charge and without obligation.',
    ],
  },
  sections: [
    {
      title: 'The cost factors',
      definitions: [
        { term: 'Floor area and types of room', text: 'Size, floor coverings, sanitary facilities and glass surfaces determine the time required.' },
        {
          term: 'Frequency',
          text: 'With frequent cleaning, the effort per visit often decreases, but the number of visits rises. What counts is the monthly amount in the quote.',
        },
        { term: 'Use', text: 'Busy entrances, kitchens and sanitary facilities take more time than rooms that are rarely used.' },
        {
          term: 'Working hours',
          text: 'Cleaning in the evening, at night or at weekends may incur surcharges. Ask whether such surcharges are included in the quote.',
        },
        {
          term: 'Additional services',
          text: 'Consumables, window cleaning or a [deep clean](/leistungen/sonderreinigungen) before the start may be listed separately.',
        },
      ],
    },
    {
      title: 'Why we do not publish prices online',
      paragraphs: [
        'Two properties with the same floor area can involve very different amounts of work, depending on the floor covering, use and access. A price without a site visit would therefore either be set too high or turn out to be wrong later. We only quote prices once we have seen the property.',
      ],
    },
    {
      title: 'How billing works',
      paragraphs: [
        'Common options are hourly rates, monthly flat rates or prices based on floor area. Ask how billing works and what is included in each case. Only then can quotes be compared.',
      ],
    },
    {
      title: 'Comparing quotes',
      paragraphs: ['A comparable quote states at least:'],
      items: [
        'which rooms and tasks are included',
        'frequency and working hours',
        'consumables and cleaning products',
        'any surcharges and additional costs such as travel',
        'term and notice period',
      ],
      note: 'More on this: [What to look for when choosing a cleaning company](/blog/richtige-reinigungsfirma-finden).',
    },
    {
      title: `How to get your quote from ${company.brand}`,
      ordered: true,
      items: [
        `Call us or write to us. Your enquiry is handled personally by our managing director, and you will hear from us ${responseTime}.`,
        'We look at the property on site and clarify the scope, frequency and times.',
        'You receive a written quote, free of charge and non-binding.',
      ],
      note: `The same travel terms apply throughout the cantons of ${cantons}.`,
    },
  ],
  cta: {
    title: 'A quote for your property',
    text: 'Tell us about the property, the floor area and the frequency you would like. We will come for a site visit and prepare a quote for you, free of charge and non-binding.',
  },
}

export const ratgeber = { reinigungsfirmaFinden, kosten }

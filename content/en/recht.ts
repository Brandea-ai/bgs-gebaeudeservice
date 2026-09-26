import { company } from '../../shared/company'
import type { LegalContent } from '../types'
import { register } from './common'

/**
 * Legal notice and privacy policy in English (M14, M50, M60). Faithful
 * translation of content/de/recht.ts, same structure.
 */

const address = `${company.address.street}, ${company.address.postalCode} ${company.address.city}, Switzerland`

export const impressum: LegalContent = {
  h1: 'Legal notice',
  sections: [
    {
      title: 'Operator of this website',
      lines: [company.legalName, `Represented by ${company.representative}`, address],
    },
    {
      title: 'Contact',
      lines: [`Phone ${company.phone.display}`, `Mobile ${company.mobile.display}`, `Email ${company.email}`],
    },
    {
      title: 'Registration details',
      lines: [`Registered in the ${register}`, `UID ${company.uid}`, `VAT number ${company.vat}`],
    },
    {
      title: 'Liability for content',
      paragraphs: [
        'We compile the content of this website with care. However, we accept no liability for its accuracy, completeness or timeliness. Only our quotes and contracts are binding.',
        'Liability claims for damage arising from access to or use of this website, or from technical faults, are excluded to the extent permitted by law.',
      ],
    },
    {
      title: 'Links to other websites',
      paragraphs: ['The operators of third-party websites to which we link are responsible for their content. You visit them at your own risk.'],
    },
    {
      title: 'Copyright',
      paragraphs: [
        `Texts, design and other content of this website belong to ${company.legalName} or to the rights holders named. Any use outside this website requires our prior written consent.`,
      ],
    },
    {
      title: 'Data protection',
      paragraphs: ['How we handle personal data is set out in our [privacy policy](/datenschutz).'],
    },
  ],
  updated: '2026-09-26',
}

export const datenschutz: LegalContent = {
  h1: 'Privacy policy',
  intro:
    'This policy explains which personal data we process when you visit this website, for what purpose and to whom it is passed on. It is governed by the Swiss Federal Act on Data Protection (FADP).',
  sections: [
    {
      title: 'Controller',
      lines: [company.legalName, address, `Email ${company.email}`, `Phone ${company.phone.display}`],
    },
    {
      title: 'Visiting the website',
      paragraphs: [
        'The website is hosted by Vercel Inc., USA. Each visit generates technically necessary log data: IP address, date and time, the page requested, browser and operating system, and the page you came from.',
        'We need this data to deliver the website, find errors and fend off attacks. We do not use it for advertising and do not combine it with other data. Vercel keeps it only for as long as necessary for operation and security.',
      ],
    },
    {
      title: 'Contact form and email',
      paragraphs: [
        'When you write to us using the form, we process your details: name, email address and message and, if you choose to provide them, phone number, service required, location of the property and frequency. We use them to answer your enquiry and to prepare a quote for you.',
        `The form is sent to our mailbox via the email service Resend, Inc., USA. Until our own address has been set up, this is ${company.email}, the mailbox of Brandea GbR in Germany, which operates this website on our behalf and forwards enquiries to us.`,
        'To protect against misuse, the server briefly holds your IP address in memory in order to detect too many requests within a short time. It is not stored permanently.',
        'We keep your enquiry for as long as we need it to process it and for any follow-up questions. If a contract is concluded, the statutory retention periods apply.',
      ],
    },
    {
      title: 'Map',
      paragraphs: [
        'On the contact page, we only show a Google Maps map once you click «Load map». Only then does Google receive your IP address and technical information about your browser. The provider is Google Ireland Limited; the data may also be processed in the USA. For more information, see the Google privacy policy at policies.google.com/privacy.',
      ],
    },
    {
      title: 'No cookies, no analytics',
      paragraphs: [
        'This website does not set cookies and does not use any analytics, advertising or tracking services. We load fonts from our own server, not from Google.',
      ],
    },
    {
      title: 'Disclosure abroad',
      paragraphs: [
        'Personal data may be transferred to the USA (Vercel, Resend, Google) and to Germany (Brandea GbR). Germany provides an adequate level of data protection. For the USA, we rely on the providers’ certification under the Swiss-U.S. Data Privacy Framework or on standard contractual clauses.',
      ],
    },
    {
      title: 'Your rights',
      paragraphs: ['You may at any time:'],
      items: [
        'request information about which personal data we process about you',
        'have incorrect data corrected',
        'request the deletion of your data, unless we are obliged to retain it',
        'object to the processing',
        'request that your data be handed over in a common format',
      ],
    },
    {
      title: 'Contact and complaints',
      paragraphs: [
        `For questions and requests, please write to us at ${company.email} or by post to the address above. You may also contact the Federal Data Protection and Information Commissioner (FDPIC), edoeb.admin.ch.`,
      ],
    },
    {
      title: 'Security',
      paragraphs: ['The connection to this website is encrypted (HTTPS). We protect data with technical and organisational measures, as far as can reasonably be expected.'],
    },
    {
      title: 'Changes',
      paragraphs: ['We will update this policy if the website or the legal situation changes. The version published here applies.'],
    },
  ],
  updated: '2026-09-26',
}

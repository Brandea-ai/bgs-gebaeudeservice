import type { ServicePageContent } from '../../types'
import { answers } from '../common'
import { team, cta } from './gemeinsam'

export const privatjet: ServicePageContent = {
  path: '/premium/privatjet',
  area: 'premium',
  h1: 'Pulizia della cabina di jet privati',
  lead: [
    'Nella cabina di un jet privato pelle, legno, superfici lucide e tessuti pregiati si trovano in uno spazio ristretto. La pulizia richiede cura, discrezione e una pianificazione in linea con i Suoi voli.',
    'Puliamo la cabina d’intesa con Lei e con il Suo operatore aereo, con riguardo per i materiali di pregio.',
  ],
  facts: [
    { label: 'Per', value: 'Proprietari e operatori di jet privati' },
    { label: 'Prestazioni', value: 'Pulizia della cabina' },
    { label: 'Appuntamenti', value: 'Previo accordo, in funzione del Suo piano di volo' },
    { label: 'Discrezione', value: 'Su richiesta con accordo di riservatezza' },
  ],
  scope: {
    title: 'Che cosa comprende',
    intro: 'L’entità del servizio la stabiliamo con Lei in anticipo. Di norma:',
    items: [
      'Sedili e imbottiture in pelle e tessuto',
      'Tappeti e pavimenti',
      'Superfici in legno e superfici lucide',
      'Finestrini, specchi e vetri nella cabina',
      'Cucina di bordo e toilette',
    ],
  },
  sections: [
    {
      title: 'Materiali nella cabina',
      paragraphs: [
        'Pelle, legno laccato, superfici lucide, moquette e tessuti pregiati si trovano vicinissimi in una cabina. Ogni materiale richiede un prodotto e un panno propri, affinché nulla si scolorisca, si secchi o si graffi.',
        'Quali prodotti sono adatti alla Sua cabina lo chiariamo in anticipo con Lei e con il Suo operatore aereo.',
      ],
    },
    {
      title: 'Pianificazione in funzione dei Suoi voli',
      paragraphs: [
        'Dove e quando puliamo la cabina lo concordiamo con Lei e con il Suo operatore aereo. Così l’intervento si inserisce nel Suo piano di volo.',
        'Spesso la pulizia avviene tra due voli, dopo un viaggio lungo o prima di un volo con ospiti. Se la finestra temporale è stretta, è utile concordare le date per tempo.',
      ],
    },
    {
      title: 'Che cosa deve essere definito prima dell’intervento',
      items: [
        'Il luogo in cui si trova l’aeromobile e come è regolato l’accesso per il nostro team',
        'La finestra temporale tra i voli',
        'Quali zone della cabina sono comprese',
        'Quali prodotti sono autorizzati per i materiali',
        'Chi prende in consegna la cabina dopo la pulizia',
      ],
    },
    {
      title: 'Discrezione a bordo',
      paragraphs: [
        'Come trattiamo oggetti personali e documenti a bordo lo stabilisce Lei. Da Lei lavora sempre lo stesso team, verificato da noi. Su richiesta sottoscriviamo un accordo di riservatezza.',
      ],
    },
  ],
  steps: [
    {
      title: 'Pulizia',
      text: 'Puliamo la cabina al momento concordato.',
    },
    team,
  ],
  faq: [
    {
      question: 'Come pianificate la pulizia in funzione dei nostri voli?',
      answer: 'Il momento lo concordiamo con Lei e con il Suo operatore aereo, affinché la cabina sia pronta prima del volo successivo.',
    },
    {
      question: 'Come trattate pelle e legno?',
      answer: 'Puliamo con riguardo per i materiali e chiariamo in anticipo quali prodotti sono adatti alla Sua cabina.',
    },
    {
      question: 'Pulite anche l’esterno dell’aeromobile?',
      answer: 'No. La nostra offerta comprende la pulizia della cabina.',
    },
    {
      question: 'Chi lavora nella nostra cabina?',
      answer:
        'Sempre lo stesso team. Chi lavora da Lei è stato verificato da noi. Su richiesta sottoscriviamo un accordo di riservatezza.',
    },
    { question: 'Siete assicurati?', answer: answers.versicherung },
    { question: 'In quali lingue possiamo comunicare?', answer: answers.sprachen },
    { question: 'Quanto costa la pulizia?', answer: answers.kosten },
  ],
  related: [
    { path: '/premium/luxusimmobilien', text: 'Per ville, residenze e abitazioni secondarie.' },
    { path: '/premium/yacht', text: 'Per yacht e motoscafi sul lago dei Quattro Cantoni e sul lago di Zugo.' },
    { path: '/premium', text: 'Tutte le offerte e gli impegni della nostra linea premium.' },
  ],
  cta,
}

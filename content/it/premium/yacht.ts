import type { ServicePageContent } from '../../types'
import { answers } from '../common'
import { team, cta } from './gemeinsam'

export const yacht: ServicePageContent = {
  path: '/premium/yacht',
  area: 'premium',
  h1: 'Pulizia di yacht e motoscafi',
  lead: [
    'Un’imbarcazione sul lago è esposta a vento, intemperie, polline ed escrementi di uccelli; all’interno si depositano umidità e polvere. Puliamo la Sua imbarcazione all’interno e all’esterno, sul lago dei Quattro Cantoni e sul lago di Zugo.',
    'Teak, gelcoat e imbottiture richiedono ciascuno un trattamento specifico. Quali prodotti usiamo per la Sua imbarcazione lo chiariamo con Lei in anticipo.',
  ],
  facts: [
    { label: 'Per', value: 'Proprietari di yacht e motoscafi' },
    { label: 'Zona', value: 'Sul lago dei Quattro Cantoni e sul lago di Zugo' },
    { label: 'Materiali', value: 'Teak, gelcoat e imbottiture' },
    { label: 'Appuntamenti', value: 'Previo accordo, una tantum o regolarmente' },
  ],
  scope: {
    title: 'Che cosa comprende',
    intro: 'L’entità del servizio la stabiliamo dopo un sopralluogo all’ormeggio. Di norma:',
    items: [
      'Ponte e superfici in teak',
      'Superfici in gelcoat su ponte e sovrastrutture',
      'Imbottiture e tessili',
      'Salone, cabine e cambusa',
      'Bagni',
      'Finestrature e vetri',
    ],
    notIncluded: ['Lavori sull’opera viva, ad esempio l’antivegetativa.', 'Manutenzione tecnica del motore e degli impianti di bordo.'],
  },
  sections: [
    {
      title: 'Materiali a bordo',
      paragraphs: [
        'Il teak diventa grigio e ruvido se viene pulito in modo sbagliato: spazzole troppo dure e alta pressione staccano le fibre morbide del legno. Il gelcoat perde lucentezza a causa del sole e delle macchie d’acqua, l’acciaio inossidabile mostra ruggine superficiale, le imbottiture assorbono umidità.',
        'Per questo ogni materiale richiede un procedimento proprio. Quali prodotti usiamo per la Sua imbarcazione lo chiariamo con Lei in anticipo.',
      ],
    },
    {
      title: 'Sul lago molto è diverso',
      paragraphs: [
        'Sul lago dei Quattro Cantoni e sul lago di Zugo manca il sale, ma polline, foglie, ragni ed escrementi di uccelli portano molto sporco a bordo, soprattutto in primavera e in estate. Negli interni chiusi si depositano umidità e polvere.',
        'Poiché l’acqua che scorre dal ponte finisce direttamente nel lago, occorre cura nella scelta dei prodotti. Su richiesta puliamo con prodotti ecologici.',
      ],
    },
    {
      title: 'Occasioni tipiche',
      items: [
        'Prima della prima uscita della stagione',
        'Regolarmente durante la stagione',
        'Prima e dopo avere ospiti a bordo',
        'A fine stagione, prima del rimessaggio invernale',
      ],
    },
    {
      title: 'Accesso all’ormeggio',
      paragraphs: [
        'L’accesso al pontile o al porto lo chiariamo con Lei in anticipo, così come corrente e acqua all’ormeggio e chi ci apre l’imbarcazione. Da Lei lavora sempre lo stesso team.',
      ],
    },
  ],
  steps: [
    {
      title: 'Appuntamenti',
      text: 'Puliamo alle date che concordiamo con Lei, una tantum o regolarmente.',
    },
    team,
  ],
  faq: [
    {
      question: 'Dove pulite le imbarcazioni?',
      answer: 'All’ormeggio, sul lago dei Quattro Cantoni e sul lago di Zugo. L’accesso al pontile o al porto lo chiariamo con Lei in anticipo.',
    },
    {
      question: 'Quali materiali pulite?',
      answer: 'Teak, gelcoat e imbottiture, nonché gli interni. Quali prodotti usiamo per la Sua imbarcazione lo chiariamo durante il sopralluogo.',
    },
    {
      question: 'Con quale frequenza si dovrebbe pulire un’imbarcazione sul lago?',
      answer:
        'Dipende da ormeggio, utilizzo e stagione. Sotto gli alberi e durante la fioritura un’imbarcazione si sporca più in fretta. Dopo il sopralluogo Le proponiamo delle date, una tantum o regolarmente.',
    },
    {
      question: 'Lavorate anche sull’opera viva o sul motore?',
      answer: 'No. I lavori sull’opera viva, ad esempio l’antivegetativa, e la manutenzione tecnica del motore e degli impianti di bordo non ne fanno parte.',
    },
    { question: 'Potete pulire con prodotti ecologici?', answer: answers.mittel },
    { question: 'Siete assicurati?', answer: answers.versicherung },
    { question: 'Quanto costa la pulizia?', answer: answers.kosten },
  ],
  related: [
    { path: '/premium/luxusimmobilien', text: 'Per ville, residenze e abitazioni secondarie sul lago.' },
    { path: '/premium/privatjet', text: 'Per la cabina del Suo jet privato.' },
    { path: '/premium', text: 'Tutte le offerte e gli impegni della nostra linea premium.' },
  ],
  cta: {
    title: cta.title,
    text: 'Ci indichi l’imbarcazione, il posto barca e le date desiderate. Esaminiamo l’imbarcazione al posto barca e Le rimettiamo un’offerta, gratuitamente e senza impegno.',
  },
}

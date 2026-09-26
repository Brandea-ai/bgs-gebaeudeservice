import type { ServicePageContent, Step } from '../types'
import { answers, responseTime } from './common'

/**
 * Testi delle tre pagine premium sotto /premium, in italiano (M29, M57, M60).
 * Traduzione fedele di content/de/premium.ts: nessuna referenza, cifra o prezzo (E18).
 */

const anfrage: Step = {
  title: 'Richiesta discreta',
  text: `Ci telefoni o ci scriva. La Sua richiesta è trattata personalmente dal direttore; riceverà nostre notizie ${responseTime}.`,
}

const team: Step = {
  title: 'Il Suo team',
  text: 'Da Lei lavora sempre lo stesso team. Chi lavora da Lei è stato verificato da noi.',
}

const cta = {
  title: 'Richiesta discreta',
  text: `Ci telefoni o ci scriva. La Sua richiesta è trattata personalmente dal direttore; riceverà nostre notizie ${responseTime}.`,
}

const luxusimmobilien: ServicePageContent = {
  path: '/premium/luxusimmobilien',
  area: 'premium',
  h1: 'Pulizia e cura di ville e residenze',
  lead: [
    'In una casa con pietra naturale, parquet e superfici lucide conta ogni dettaglio, così come la fiducia nelle persone che vi lavorano. Puliamo ville, loft e residenze regolarmente o prima di occasioni particolari, con riguardo per i materiali delicati.',
    'Da Lei lavora sempre lo stesso team, negli orari che Le convengono: anche la sera, nel fine settimana o durante la Sua assenza.',
  ],
  facts: [
    { label: 'Per', value: 'Ville, loft, residenze e residenze secondarie' },
    { label: 'Cadenza', value: 'Regolarmente o prima di occasioni particolari' },
    { label: 'Team', value: 'Sempre lo stesso team' },
    { label: 'Discrezione', value: 'Su richiesta con accordo di riservatezza' },
  ],
  scope: {
    title: 'Che cosa comprende',
    intro: 'L’entità la stabiliamo dopo un giro della Sua casa. Di norma:',
    items: [
      'Soggiorni, camere da letto e camere per gli ospiti',
      'Cucine e bagni',
      'Pietra naturale, parquet e superfici lucide, puliti nel rispetto del materiale',
      'Superfici vetrate e specchi',
      'Pulizia prima del Suo arrivo e dopo la Sua partenza',
      'Giri di controllo durante la Sua assenza',
      'Pulizia prima e dopo eventi, anche nel fine settimana',
      'Locali con opere d’arte e oggetti d’antiquariato, opere d’arte solo con la Sua autorizzazione',
      'Per agenti immobiliari e amministrazioni: con breve preavviso prima di una vendita, di un servizio fotografico o di una consegna',
    ],
    notIncluded: ['Restauro di opere d’arte e oggetti d’antiquariato.'],
  },
  sections: [
    {
      title: 'Chiavi, allarme e discrezione',
      paragraphs: [
        'Per chiavi e impianto d’allarme concordiamo con Lei regole fisse. Su richiesta sottoscriviamo un accordo di riservatezza.',
        'La Sua richiesta è trattata personalmente dal direttore. Chi lavora da Lei è stato verificato da noi.',
      ],
    },
  ],
  steps: [
    anfrage,
    {
      title: 'Visita e offerta',
      text: 'Visitiamo la Sua casa e chiariamo materiali, orari e accesso. In seguito riceve un’offerta, gratuita e senza impegno.',
    },
    {
      title: 'Regole fisse',
      text: 'Concordiamo orari, consegna delle chiavi e gestione dell’impianto d’allarme, su richiesta con accordo di riservatezza.',
    },
    team,
  ],
  faq: [
    {
      question: 'Da noi lavora sempre lo stesso team?',
      answer: 'Sì. Da Lei lavora sempre lo stesso team, che conosce la Sua casa e i Suoi desideri.',
    },
    {
      question: 'Come trattate opere d’arte e oggetti d’antiquariato?',
      answer: 'Puliamo i locali con cura. Le opere d’arte in sé le puliamo solo se Lei lo autorizza espressamente.',
    },
    {
      question: 'Potete pulire durante la nostra assenza?',
      answer: 'Sì, anche durante la Sua assenza, la sera o nel fine settimana. Per chiavi e allarme concordiamo regole fisse.',
    },
    { question: 'Siete assicurati?', answer: answers.versicherung },
    { question: 'In quali lingue possiamo comunicare?', answer: answers.sprachen },
    { question: 'Quanto costa la pulizia?', answer: answers.kosten },
    { question: 'Dove operate?', answer: answers.gebiet },
  ],
  related: [
    { path: '/premium/yacht', text: 'Per yacht e motoscafi sul lago dei Quattro Cantoni e sul lago di Zugo.' },
    { path: '/premium/privatjet', text: 'Per la cabina del Suo jet privato.' },
    { path: '/premium', text: 'Tutte le offerte e gli impegni della nostra linea premium.' },
  ],
  cta,
}

const privatjet: ServicePageContent = {
  path: '/premium/privatjet',
  area: 'premium',
  h1: 'Pulizia della cabina di jet privati',
  lead: [
    'Nella cabina di un jet privato pelle, legno, superfici lucide e tessuti pregiati si trovano in uno spazio ristretto. La pulizia richiede cura, discrezione e una pianificazione in linea con i Suoi voli.',
    'Puliamo la cabina d’intesa con Lei e con il Suo operatore di volo, con riguardo per i materiali di pregio.',
  ],
  facts: [
    { label: 'Per', value: 'Proprietari e operatori di jet privati' },
    { label: 'Entità', value: 'Pulizia della cabina' },
    { label: 'Appuntamenti', value: 'Su accordo, in funzione del Suo piano di volo' },
    { label: 'Discrezione', value: 'Su richiesta con accordo di riservatezza' },
  ],
  scope: {
    title: 'Che cosa comprende',
    intro: 'L’entità la stabiliamo con Lei in anticipo. Di norma:',
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
      title: 'Pianificazione in funzione dei Suoi voli',
      paragraphs: [
        'Dove e quando puliamo la cabina lo concordiamo con Lei e con il Suo operatore di volo. Così l’intervento si inserisce nel Suo piano di volo.',
      ],
    },
  ],
  steps: [
    anfrage,
    {
      title: 'Sopralluogo e offerta',
      text: 'Visitiamo la cabina e chiariamo materiali, luogo e finestra temporale con Lei e con il Suo operatore di volo. In seguito riceve un’offerta, gratuita e senza impegno.',
    },
    {
      title: 'Pulizia',
      text: 'Puliamo la cabina al momento concordato.',
    },
    team,
  ],
  faq: [
    {
      question: 'Come pianificate la pulizia in funzione dei nostri voli?',
      answer: 'Il momento lo concordiamo con Lei e con il Suo operatore di volo, affinché la cabina sia pronta prima del volo successivo.',
    },
    {
      question: 'Come trattate pelle e legno?',
      answer: 'Puliamo con riguardo per i materiali e chiariamo in anticipo quali prodotti sono adatti alla Sua cabina.',
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
    { path: '/premium/luxusimmobilien', text: 'Per ville, residenze e residenze secondarie.' },
    { path: '/premium/yacht', text: 'Per yacht e motoscafi sul lago dei Quattro Cantoni e sul lago di Zugo.' },
    { path: '/premium', text: 'Tutte le offerte e gli impegni della nostra linea premium.' },
  ],
  cta,
}

const yacht: ServicePageContent = {
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
    { label: 'Appuntamenti', value: 'Su accordo, una tantum o regolarmente' },
  ],
  scope: {
    title: 'Che cosa comprende',
    intro: 'L’entità la stabiliamo dopo un sopralluogo all’ormeggio. Di norma:',
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
  steps: [
    anfrage,
    {
      title: 'Sopralluogo all’ormeggio',
      text: 'Visitiamo l’imbarcazione e chiariamo materiali e accesso all’ormeggio. In seguito riceve un’offerta, gratuita e senza impegno.',
    },
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
    { question: 'Potete pulire con prodotti ecologici?', answer: answers.mittel },
    { question: 'Siete assicurati?', answer: answers.versicherung },
    { question: 'Quanto costa la pulizia?', answer: answers.kosten },
  ],
  related: [
    { path: '/premium/luxusimmobilien', text: 'Per ville, residenze e residenze secondarie sul lago.' },
    { path: '/premium/privatjet', text: 'Per la cabina del Suo jet privato.' },
    { path: '/premium', text: 'Tutte le offerte e gli impegni della nostra linea premium.' },
  ],
  cta,
}

export const premium = { luxusimmobilien, privatjet, yacht }

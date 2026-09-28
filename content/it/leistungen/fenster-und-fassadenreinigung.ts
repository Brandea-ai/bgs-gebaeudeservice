import type { ServicePageContent } from '../../types'
import { answers } from '../common'

export const fensterUndFassade: ServicePageContent = {
  path: '/leistungen/fenster-und-fassadenreinigung',
  area: 'leistungen',
  eyebrow: 'Pulizie una tantum e speciali',
  h1: 'Pulizia di vetri e facciate per aziende e stabili',
  lead: [
    'Finestre sporche e facciate ingrigite si notano, negli stabili commerciali come in quelli abitativi. Puliamo vetri e facciate una tantum o a intervalli regolari.',
    'Per le facciate impieghiamo anche l’alta pressione. Quale metodo si addice al materiale lo chiariamo durante il sopralluogo.',
  ],
  facts: [
    { label: 'Per', value: 'Aziende, amministrazioni immobiliari e proprietari' },
    { label: 'Superfici', value: 'Finestre, superfici vetrate, telai e facciate' },
    { label: 'Cadenza', value: 'Una tantum o a intervalli regolari' },
  ],
  scope: {
    title: 'Che cosa comprende',
    intro: 'L’entità del servizio la stabiliamo dopo il sopralluogo. Di norma:',
    items: [
      'Finestre all’interno e all’esterno, con telai e battute',
      'Facciate in vetro, porte a vetri e pareti in vetro',
      'Vetrine e zone d’ingresso',
      'Davanzali, lamelle e tende da sole, previo accordo',
      'Pulizia di facciate, anche ad alta pressione',
    ],
    notIncluded: [
      'Pulizia degli spazi interni: vedi [Pulizia di manutenzione](/leistungen/unterhaltsreinigung) o [Pulizia di uffici e studi](/leistungen/bueroreinigung).',
      'Rinnovo, tinteggiatura e riparazioni della facciata.',
    ],
  },
  sections: [
    {
      title: 'Immobili e situazioni tipiche',
      paragraphs: [
        'Edifici per uffici con facciate in vetro, negozi con vetrine, stabili abitativi con molte finestre nel vano scale, edifici commerciali con facciate grigie o verdi. Ovunque il vetro determina la prima impressione, e in controluce lo sporco si nota subito.',
        'Spesso la pulizia si rende necessaria in primavera dopo l’inverno, quando si aggiunge il polline, oppure prima di un evento, di una locazione o di una vendita.',
      ],
    },
    {
      title: 'Come si puliscono vetri e facciate',
      paragraphs: [
        'Il vetro viene pulito perlopiù con acqua, un detergente delicato e un tergivetro, poi si ripassano telai e battute. Per superfici vetrate grandi e alte esistono aste telescopiche con acqua pura trattata, che asciuga senza lasciare residui.',
        'Per le facciate decide il materiale. Superfici lisce e resistenti sopportano spesso l’alta pressione, intonaco delicato, legno o vecchia pietra naturale richiedono un procedimento più delicato. Quale metodo sia adatto lo chiariamo durante il sopralluogo.',
      ],
    },
    {
      title: 'Pianificazione e cadenza',
      paragraphs: [
        'Con quale frequenza pulire i vetri dipende da posizione, utilizzo ed esigenze. Vetrine e ingressi li vedono tutti, le finestre di un magazzino quasi nessuno.',
      ],
      items: [
        'Ingressi, vetrine e porte a vetri: più spesso, perché tutti li vedono e li toccano',
        'Finestre di uffici e vani scale: a intervalli regolari, spesso secondo la stagione',
        'Facciate: più di rado, quando diventano visibili sporco, alghe o un velo grigio',
        'Con gelo, tempesta o pioggia forte all’esterno non si può lavorare bene, preveda quindi un certo margine',
      ],
    },
    {
      title: 'Che cosa chiariamo durante il sopralluogo',
      items: [
        'Quanto sono alte le superfici e come raggiungerle in sicurezza',
        'Se le finestre si possono aprire o sono raggiungibili solo dall’esterno',
        'Di quale materiale sono telai e facciata',
        'Accesso, parcheggio e sbarramenti, ad esempio sul marciapiede davanti all’edificio',
        'Se occorre informare le inquiline e gli inquilini, perché le finestre vengono pulite dall’interno',
      ],
    },
    {
      title: 'Come riconoscere una buona pulizia delle finestre',
      items: [
        'In controluce non si vedono aloni',
        'Il vetro è pulito fino agli angoli, anche sul bordo verso il telaio',
        'Telai, battute e davanzali sono puliti anch’essi, per quanto concordato',
        'All’interno non restano gocce e macchie d’acqua su pavimenti e davanzali',
      ],
    },
  ],
  steps: [
    {
      title: 'Intervento',
      text: 'Puliamo alla data concordata, su richiesta a intervalli fissi.',
    },
  ],
  faq: [
    {
      question: 'Con quale frequenza si dovrebbero pulire le finestre?',
      answer:
        'Dipende da posizione e utilizzo. Lungo una strada molto trafficata i vetri si sporcano più in fretta che nel verde. Dopo il sopralluogo Le proponiamo una cadenza.',
    },
    {
      question: 'Pulite le facciate ad alta pressione?',
      answer: 'Sì, se il materiale lo consente. Quale metodo si addice alla Sua facciata lo chiariamo durante il sopralluogo.',
    },
    {
      question: 'Come pulite finestre e facciate alte?',
      answer:
        'Dipende dall’edificio e dall’accesso. Lo chiariamo durante il sopralluogo e indichiamo nell’offerta come raggiungiamo le superfici.',
    },
    {
      question: 'Le inquiline e gli inquilini devono essere a casa?',
      answer:
        'Per le finestre che si possono pulire solo dall’interno serve l’accesso all’appartamento o all’ufficio. Lo chiariamo durante il sopralluogo, affinché possa informare per tempo gli inquilini.',
    },
    { question: 'Quanto costa la pulizia?', answer: answers.kosten },
    { question: 'In quali regioni operate?', answer: answers.gebiet },
    { question: 'Siete assicurati?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/unterhaltsreinigung', text: 'Per la pulizia regolare di stabili e superfici commerciali.' },
    { path: '/leistungen/bueroreinigung', text: 'Per uffici e studi, in funzione dei Suoi orari di lavoro.' },
    { path: '/leistungen/baureinigung', text: 'Per vetri e telai dopo lavori di costruzione e di ristrutturazione.' },
  ],
  cta: {
    title: 'Offerta per finestre e facciata',
    text: 'Ci indichi edificio, superfici e data desiderata. Esaminiamo tutto sul posto e Le allestiamo un’offerta, gratuita e senza impegno.',
  },
}

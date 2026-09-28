import type { ServicePageContent } from '../../types'
import { answers } from '../common'

export const baureinigung: ServicePageContent = {
  path: '/leistungen/baureinigung',
  area: 'leistungen',
  eyebrow: 'Pulizie una tantum e speciali',
  h1: 'Pulizia di cantiere e di fine cantiere per nuove costruzioni e ristrutturazioni',
  lead: [
    'Dopo lavori di costruzione e di ristrutturazione, polvere, residui di malta e pellicole protettive si trovano ovunque. Prima che inquilini, acquirenti o il Suo team si insedino, tutto deve essere pronto per l’uso, spesso entro una data di consegna fissa.',
    'Puliamo durante e dopo i lavori, fino a quando i locali possono essere consegnati. Per committenti, studi di architettura, imprese generali e amministrazioni immobiliari.',
  ],
  facts: [
    { label: 'Per', value: 'Committenti, studi di architettura, imprese generali e amministrazioni immobiliari' },
    { label: 'Cantieri', value: 'Nuove costruzioni, trasformazioni e rinnovi' },
    { label: 'Momento', value: 'Durante la fase di costruzione e prima della consegna' },
  ],
  scope: {
    title: 'Che cosa comprende',
    intro:
      'Una pulizia di cantiere si svolge perlopiù a tappe, in funzione dell’avanzamento dei lavori. Di quali tappe ci occupiamo lo stabiliamo con Lei.',
    items: [
      'Pulizia grossolana durante la fase di costruzione',
      'Pulizie intermedie, ad esempio prima delle finiture interne',
      'Pulizia di fine cantiere prima della consegna',
      'Liberare finestre, telai e vetri da polvere e residui',
      'Rimuovere residui di colla e pellicole protettive',
      'Pulire pavimenti, servizi igienici, cucine e armadi a muro fino a renderli pronti per l’uso',
    ],
    notIncluded: [
      'Pulizia regolare dopo l’insediamento: vedi [Pulizia di manutenzione](/leistungen/unterhaltsreinigung).',
      'Facciate: vedi [Pulizia di vetri e facciate](/leistungen/fenster-und-fassadenreinigung).',
    ],
  },
  sections: [
    {
      title: 'Immobili e situazioni tipiche',
      paragraphs: [
        'Nuove costruzioni di stabili abitativi e commerciali, trasformazioni di singoli piani, appartamenti rinnovati prima della nuova locazione o negozi prima dell’apertura. Tutti hanno in comune una data fissa: consegna, insediamento o apertura.',
        'Spesso la pulizia viene richiesta solo poco prima di questa data. È meglio inserirla presto nel cronoprogramma, affinché trovi posto dopo gli ultimi lavori degli artigiani e prima del collaudo.',
      ],
    },
    {
      title: 'Che cosa succede durante la pulizia di fine cantiere',
      paragraphs: [
        'La polvere di cantiere è fine e si deposita ovunque: sui pavimenti, nelle battute delle finestre, sui telai delle porte, negli armadi e nei cassetti. Per questo si pulisce dall’alto verso il basso e spesso in più di un passaggio.',
        'A ciò si aggiungono residui come colla, etichette e pellicole protettive. Vengono rimossi con prodotti e attrezzi adatti alla superficie, affinché vetri, rubinetteria e pavimenti nuovi non si graffino.',
      ],
    },
    {
      title: 'Le tappe in sintesi',
      items: [
        'Pulizia grossolana: rimuovere sporco grossolano e polvere, affinché i lavori successivi inizino su una base pulita',
        'Pulizia intermedia: prima delle finiture interne, ad esempio prima della posa dei pavimenti o del montaggio delle cucine',
        'Pulizia di fine cantiere: approfondita e pronta per l’uso, dopo gli ultimi lavori degli artigiani e prima del collaudo',
      ],
      paragraphs: [
        'Se dopo la pulizia di fine cantiere gli artigiani lavorano ancora nei locali, si forma nuova polvere. Pianifichi quindi la pulizia finale dopo gli ultimi lavori.',
      ],
    },
    {
      title: 'Collaborazione con la direzione lavori',
      paragraphs: [
        'Sul cantiere valgono le regole della direzione lavori. Prima del primo intervento chiariamo accesso, norme di sicurezza, corrente e acqua, uno spazio per gli attrezzi e la gestione dei rifiuti.',
        'È utile un interlocutore sul cantiere che confermi date e accesso. Se il cronoprogramma si sposta, coordiniamo di nuovo gli interventi con Lei.',
      ],
    },
    {
      title: 'Come riconoscere una buona pulizia di fine cantiere',
      items: [
        'Nessuna pellicola di polvere su davanzali, telai delle porte e nei cassetti',
        'Vetri senza residui di colla, aloni e graffi',
        'Le pellicole protettive su finestre, porte e apparecchi sono rimosse',
        'Rubinetteria e piastrelle sono senza residui',
        'I pavimenti sono puliti, anche negli angoli e lungo i battiscopa',
      ],
    },
  ],
  steps: [
    {
      title: 'Pianificare le tappe',
      text: 'Coordiniamo gli interventi con la direzione lavori e il cronoprogramma, affinché la pulizia segua l’avanzamento del cantiere.',
    },
    {
      title: 'Consegna',
      text: 'Prima della consegna puliamo i locali rendendoli pronti per l’uso. Fissiamo la data in base alla Sua data di consegna o d’insediamento.',
    },
  ],
  faq: [
    {
      question: 'Qual è la differenza tra pulizia di cantiere e pulizia di fine cantiere?',
      answer:
        'La pulizia di cantiere comprende gli interventi durante la fase di costruzione, ad esempio una pulizia grossolana o pulizie intermedie. La pulizia di fine cantiere è l’ultima pulizia approfondita prima della consegna; dopo, i locali sono pronti per l’uso.',
    },
    {
      question: 'Quando dovremmo pianificare la pulizia di fine cantiere?',
      answer:
        'Non appena è fissata la data di consegna. La pulizia avviene dopo gli ultimi lavori degli artigiani e prima del collaudo. Prima conosciamo la data, meglio possiamo pianificare.',
    },
    {
      question: 'È compresa la pulizia delle finestre?',
      answer:
        'Sì, finestre, telai e vetri li puliamo nell’ambito della pulizia di fine cantiere. Per le facciate c’è la [pulizia di vetri e facciate](/leistungen/fenster-und-fassadenreinigung).',
    },
    {
      question: 'Che cosa serve sul cantiere per la pulizia?',
      answer:
        'Accesso ai locali, corrente e acqua e uno spazio per gli attrezzi. Dove li troviamo lo chiariamo durante il sopralluogo con Lei o con la direzione lavori.',
    },
    { question: 'Quanto costa una pulizia di cantiere?', answer: answers.kosten },
    { question: 'In quali regioni operate?', answer: answers.gebiet },
    { question: 'Siete assicurati?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/sonderreinigungen', text: 'Per una pulizia a fondo, quando le superfici devono tornare accuratamente pulite dopo un lungo utilizzo.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'Per superfici vetrate e facciate dell’edificio ultimato.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Per la pulizia regolare dopo l’insediamento.' },
  ],
  cta: {
    title: 'Offerta per il Suo cantiere',
    text: 'Ci indichi l’edificio, la superficie e la data di consegna. Visitiamo il cantiere e Le allestiamo un’offerta, gratuita e senza impegno.',
  },
}

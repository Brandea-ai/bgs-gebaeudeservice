import type { ServicePageContent } from '../../types'
import { answers } from '../common'

export const umzugsreinigung: ServicePageContent = {
  path: '/leistungen/umzugsreinigung',
  area: 'leistungen',
  eyebrow: 'Pulizie una tantum e speciali',
  h1: 'Pulizia di trasloco e di fine locazione con garanzia di consegna',
  lead: [
    'Alla riconsegna dell’appartamento l’amministrazione controlla ogni locale: cucina, bagno, finestre, lamelle, armadi e locali accessori. Affinché la riconsegna avvenga senza contestazioni, l’appartamento deve essere pulito a fondo, e questo entro una data fissa.',
    'Eseguiamo la pulizia di trasloco e di fine locazione di appartamenti e superfici commerciali per amministrazioni immobiliari, proprietari e aziende, con garanzia di consegna: se in occasione della riconsegna l’amministrazione contesta qualcosa della nostra pulizia, ripuliamo gratuitamente.',
  ],
  facts: [
    { label: 'Per', value: 'Amministrazioni immobiliari, proprietari, comunioni dei proprietari per piani e aziende' },
    { label: 'Immobili', value: 'Appartamenti e superfici commerciali prima della riconsegna' },
    { label: 'Garanzia', value: 'Garanzia di consegna, dettagli nell’offerta' },
  ],
  scope: {
    title: 'Che cosa comprende la pulizia finale',
    intro: 'L’entità esatta della pulizia dell’appartamento la stabiliamo nell’offerta dopo il sopralluogo. Di norma:',
    items: [
      'Cucina con forno, piano cottura, cappa aspirante, frigorifero e armadi, all’interno e all’esterno',
      'Bagno e WC con rubinetteria, piastrelle, fughe e specchi, liberati dal calcare',
      'Finestre all’interno e all’esterno, con telai, battute e davanzali',
      'Lamelle e persiane previo accordo',
      'Armadi a muro, porte, telai delle porte, interruttori e prese',
      'Pavimenti e battiscopa in tutti i locali',
      'Balcone o terrazzino, compartimento in cantina e in solaio',
    ],
    notIncluded: [
      'Pulizie di fine locazione su incarico di inquiline e inquilini di singoli appartamenti. Per ville e residenze è a disposizione il nostro [settore Premium](/premium).',
      'Trasporto del trasloco e sgombero di mobili.',
      'Riparazioni, lavori di pittura ed eliminazione di danni.',
      'Pulizia a fondo senza riconsegna: vedi [Pulizie a fondo e speciali](/leistungen/sonderreinigungen).',
    ],
  },
  sections: [
    {
      title: 'La garanzia di consegna',
      paragraphs: [
        'Se in occasione della riconsegna l’amministrazione contesta qualcosa della nostra pulizia, ripuliamo gratuitamente. I dettagli sono indicati nell’offerta.',
        'La garanzia si riferisce alla nostra pulizia. Danni, usura o riparazioni che vengono annotati alla riconsegna non riguardano la pulizia e quindi non ne fanno parte.',
      ],
    },
    {
      title: 'Quanto deve essere pulito un appartamento alla riconsegna?',
      paragraphs: [
        'Quanto a fondo si debba pulire lo stabilisce di solito il contratto di locazione. In Svizzera è consuetudine una pulizia approfondita dell’intero appartamento, compresi i locali accessori. Alla riconsegna l’amministrazione guarda quindi anche dove nella vita quotidiana si pulisce di rado: nel forno, nella cappa aspirante, sulle lamelle, nelle battute delle finestre e negli armadi.',
        'Che cosa valga nel singolo caso è indicato nel contratto di locazione e nel verbale di riconsegna. Questa pagina offre una panoramica e non sostituisce una consulenza giuridica.',
      ],
    },
    {
      title: 'Pianificazione e data',
      paragraphs: [
        'La pulizia finale si colloca tra il trasloco e la riconsegna. È meglio che i locali siano allora vuoti, affinché si possano pulire anche armadi, pavimenti dietro i mobili e installazioni fisse. Pianifichi la pulizia in modo che tra pulizia e riconsegna passi il minor tempo possibile.',
        'Prenoti per tempo, non appena è fissata la data di riconsegna. A fine mese e in corrispondenza delle date di trasloco usuali nel luogo molte date sono richieste.',
      ],
      items: [
        'Mobili e oggetti personali sono stati sgomberati',
        'Corrente e acqua sono ancora allacciate',
        'Le chiavi di appartamento, cantina, solaio e bucalettere sono disponibili',
      ],
    },
    {
      title: 'Per chi eseguiamo la pulizia di fine locazione',
      paragraphs: [
        'Per amministrazioni immobiliari che rendono gli appartamenti pronti per l’uso tra due locazioni. Per proprietari e proprietari per piani che vendono, consegnano o rilocano un appartamento. E per aziende che lasciano uffici o superfici commerciali.',
        'Non serviamo inquiline e inquilini di singoli appartamenti. Per ville e residenze eseguiamo la pulizia finale nel [settore Premium](/premium) anche per privati.',
      ],
    },
    {
      title: 'Come riconoscere una buona pulizia finale',
      items: [
        'Forno, teglie e cappa aspirante sono senza pellicola di grasso',
        'Rubinetteria, vetro della doccia e piastrelle sono senza aloni di calcare',
        'Finestre, telai e battute sono senza aloni e senza polvere',
        'Gli armadi sono puliti e asciutti all’interno',
        'Lungo i battiscopa non restano bordi di polvere',
      ],
    },
  ],
  steps: [
    {
      title: 'Pulizia finale',
      text: 'Puliamo tra il trasloco e la riconsegna, alla data concordata.',
    },
    {
      title: 'Riconsegna',
      text: 'Alla riconsegna vale la garanzia di consegna prevista nell’offerta.',
    },
  ],
  faq: [
    {
      question: 'Quanto costa una pulizia di fine locazione?',
      answer:
        'Dipende soprattutto dalla grandezza e dallo stato dell’appartamento, dal numero di finestre e lamelle, da locali accessori come cantina, solaio o balcone e dalla data. Per questo indichiamo i prezzi solo nell’offerta, dopo aver visto l’immobile. Sopralluogo e offerta sono gratuiti e senza impegno.',
    },
    {
      question: 'Quanto deve essere pulito un appartamento alla riconsegna in Svizzera?',
      answer:
        'È consuetudine una pulizia approfondita dell’intero appartamento, compresi i locali accessori: cucina con elettrodomestici, bagno e WC, finestre all’interno e all’esterno con i telai, lamelle, armadi, pavimenti, cantina, solaio e balcone. Che cosa valga nel singolo caso lo stabiliscono il contratto di locazione e il verbale di riconsegna. Questa risposta non è una consulenza giuridica.',
    },
    {
      question: 'Che cosa succede se l’amministrazione contesta qualcosa alla riconsegna?',
      answer:
        'Se in occasione della riconsegna l’amministrazione contesta qualcosa della nostra pulizia, ripuliamo gratuitamente. I dettagli sono indicati nell’offerta.',
    },
    {
      question: 'Quando conviene prenotare la pulizia di fine locazione?',
      answer:
        'Non appena è fissata la data di riconsegna. A fine mese e in corrispondenza delle date di trasloco usuali nel luogo molte date sono richieste. La pulizia la collochiamo tra il trasloco e la riconsegna.',
    },
    {
      question: 'I locali devono essere vuoti per la pulizia finale?',
      answer:
        'Idealmente sì. Nei locali vuoti si possono pulire anche armadi, installazioni fisse e pavimenti dietro i mobili, ed è proprio lì che l’amministrazione controlla alla riconsegna.',
    },
    {
      question: 'Eseguite la pulizia di fine locazione anche per inquiline e inquilini?',
      answer:
        'No. Eseguiamo la pulizia di fine locazione per amministrazioni immobiliari, proprietari e aziende. Per ville e residenze è disponibile nel [settore Premium](/premium) anche per privati.',
    },
    { question: 'In quali regioni operate?', answer: answers.gebiet },
    { question: 'Siete assicurati?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/sonderreinigungen', text: 'Per una pulizia a fondo senza riconsegna, ad esempio prima dell’inizio di una pulizia di manutenzione.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'Per superfici vetrate e facciate dell’intero stabile.' },
    { path: '/leistungen/hauswartung', text: 'Se il servizio di custodia deve collaborare alle riconsegne degli appartamenti.' },
  ],
  cta: {
    title: 'Offerta per la Sua pulizia di fine locazione',
    text: 'Ci indichi l’immobile, la grandezza e la data di riconsegna. Visitiamo i locali e Le allestiamo un’offerta, gratuita e senza impegno.',
  },
}

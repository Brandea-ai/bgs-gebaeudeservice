import type { ServicePageContent } from '../../types'
import { answers } from '../common'

export const unterhaltsreinigung: ServicePageContent = {
  path: '/leistungen/unterhaltsreinigung',
  area: 'leistungen',
  eyebrow: 'Pulizia regolare',
  h1: 'Pulizia di manutenzione per stabili e superfici commerciali',
  lead: [
    'Vano scale, ingresso e locali comuni determinano l’impressione che uno stabile lascia, sia agli inquilini sia alla clientela e ai visitatori. Con una pulizia di manutenzione restano puliti, senza che Lei debba occuparsene personalmente.',
    'Puliamo case plurifamiliari, stabili abitativi e commerciali e superfici commerciali con una cadenza fissa, che stabiliamo con Lei dopo il sopralluogo. Nel contempo riforniamo il materiale di consumo.',
  ],
  facts: [
    { label: 'Per', value: 'Case plurifamiliari, stabili abitativi e commerciali, superfici commerciali' },
    { label: 'Cadenza', value: 'Più volte alla settimana, secondo superficie e utilizzo' },
    { label: 'Compreso', value: 'Servizio di rifornimento del materiale di consumo' },
  ],
  scope: {
    title: 'Che cosa comprende',
    intro: 'Che cosa puliamo e con quale frequenza lo stabiliamo dopo il sopralluogo. Di norma:',
    items: [
      'Vani scale, ingressi e ascensori',
      'Pavimenti in tutti i locali concordati',
      'Porte, corrimano, interruttori e vetri nella zona d’ingresso',
      'Servizi igienici, cucine e locali pausa',
      'Lavanderie, cantine e locali accessori',
      'Svuotare i cestini e rifornire il materiale di consumo',
    ],
    notIncluded: [
      'Uffici e studi: vedi [Pulizia di uffici e studi](/leistungen/bueroreinigung).',
      'Pulizie a fondo una tantum: vedi [Pulizie a fondo e speciali](/leistungen/sonderreinigungen), pulizie finali prima della riconsegna alla pagina [Pulizia di fine locazione](/leistungen/umzugsreinigung).',
      'Finestre all’esterno e facciate: vedi [Pulizia di vetri e facciate](/leistungen/fenster-und-fassadenreinigung).',
      'Economie domestiche private. Per ville e residenze è a disposizione il nostro [settore Premium](/premium).',
    ],
  },
  sections: [
    {
      title: 'Immobili e situazioni tipiche',
      paragraphs: [
        'Una pulizia di manutenzione conviene ovunque molte persone utilizzino le stesse superfici. Nelle case plurifamiliari si tratta di vano scale, ascensore e lavanderia. Negli stabili abitativi e commerciali si aggiungono ingressi frequentati dal pubblico, nelle superfici commerciali ricezione, corridoi e servizi igienici.',
        'Spesso la richiesta arriva quando la soluzione adottata finora non regge più: la pulizia da parte degli inquilini non funziona, l’impresa precedente cessa l’attività o un’amministrazione immobiliare assume un nuovo stabile.',
      ],
    },
    {
      title: 'Servizio di rifornimento',
      paragraphs: [
        'Nell’ambito della pulizia di manutenzione riforniamo il materiale di consumo. Quali articoli ne fanno parte e chi li acquista lo stabiliamo nell’offerta.',
      ],
      items: [
        'Carta igienica, asciugamani di carta e sapone',
        'Sacchi per i rifiuti e panni per la pulizia',
        'Altro materiale di consumo previo accordo',
      ],
    },
    {
      title: 'Pianificazione e cadenza',
      paragraphs: [
        'La frequenza delle pulizie dipende dall’utilizzo, non solo dalla superficie. Un ingresso molto frequentato dal pubblico richiede più cura di un corridoio in cantina percorso da poche persone. Conviene quindi una cadenza per ogni zona, anziché una sola per tutto l’edificio. La nostra proposta la discutiamo con Lei dopo il sopralluogo.',
      ],
      items: [
        'Ingresso, ascensore e vano scale: più spesso, perché qui entra la maggior parte dello sporco dall’esterno',
        'Servizi igienici e cucine: più spesso, per motivi di igiene',
        'Cantine, solai e locali accessori: più di rado, secondo l’utilizzo',
        'Vetri nella zona d’ingresso: secondo necessità, più spesso con la pioggia e in inverno',
      ],
    },
    {
      title: 'Come riconoscere una buona pulizia di manutenzione',
      paragraphs: [
        'Pulito significa più di un pavimento lavato. Durante un giro nello stabile questi punti Le mostrano rapidamente quanto accuratamente si pulisce:',
      ],
      items: [
        'Corrimano, interruttori della luce e pulsanti dell’ascensore sono puliti, non solo i pavimenti',
        'Negli angoli, sugli spigoli dei gradini e dietro le porte non resta sporco',
        'I servizi igienici hanno un odore fresco, sapone e carta sono riforniti',
        'Le porte a vetri all’ingresso sono senza aloni e impronte',
        'L’entità concordata è fissata per iscritto, così entrambe le parti sanno che cosa vale',
      ],
    },
    {
      title: 'Collaborazione con amministrazione e proprietà',
      paragraphs: [
        'Prima dell’inizio chiariamo con Lei l’accesso allo stabile, ad esempio con chiave o badge, e dove possono stare attrezzi e prodotti per la pulizia. Un locale di pulizia chiudibile a chiave o un compartimento in cantina facilita il lavoro.',
        'Per gli inquilini è utile un breve avviso che indichi in quali giorni si pulisce. Così in quei giorni scale e corridoi restano liberi da scarpe, biciclette e altri oggetti.',
      ],
    },
  ],
  steps: [
    {
      title: 'Accordo',
      text: 'Con la Sua conferma è stabilito quali locali puliamo, con quale frequenza e che cosa riforniamo.',
    },
    {
      title: 'Inizio',
      text: 'Iniziamo alla data concordata. Se l’utilizzo cambia, concordiamo con Lei un nuovo volume di lavoro o una nuova cadenza.',
    },
  ],
  faq: [
    {
      question: 'Con quale frequenza si dovrebbe pulire?',
      answer:
        'Dipende da quanto intensamente sono utilizzate le superfici. Dopo il sopralluogo Le proponiamo una cadenza. La pulizia di manutenzione è pensata per immobili che vengono puliti più volte alla settimana.',
    },
    {
      question: 'Qual è la differenza rispetto alla pulizia a fondo?',
      answer:
        'La pulizia di manutenzione mantiene pulite le superfici con una cadenza fissa. Una pulizia a fondo è un intervento unico e approfondito, che rimuove anche lo sporco che la pulizia regolare non raggiunge. Maggiori informazioni alla pagina [Pulizie a fondo e speciali](/leistungen/sonderreinigungen).',
    },
    {
      question: 'Possiamo modificare la cadenza in seguito?',
      answer: 'Sì. Se l’utilizzo cambia, concordiamo con Lei un nuovo volume di lavoro o una nuova cadenza.',
    },
    {
      question: 'Le inquiline e gli inquilini devono preparare qualcosa?',
      answer:
        'No. È utile che nei giorni di pulizia scale e corridoi siano liberi da scarpe, biciclette e altri oggetti. Di solito basta un breve avviso nel vano scale.',
    },
    { question: 'Pulite con prodotti ecologici?', answer: answers.mittel },
    { question: 'Quanto costa una pulizia di manutenzione?', answer: `${answers.kosten} Maggiori informazioni nella guida: [Da che cosa dipendono i costi di una pulizia di manutenzione](/blog/reinigungskosten-schweiz).` },
    {
      question: 'A che cosa prestare attenzione nella scelta di un’impresa di pulizie?',
      answer:
        'A un’entità del servizio descritta chiaramente, a un’assicurazione comprovata, a un interlocutore fisso e a un’offerta allestita dopo un sopralluogo. Maggiori informazioni nella guida: [Come trovare l’impresa di pulizie giusta?](/blog/richtige-reinigungsfirma-finden)',
    },
    { question: 'In quali regioni operate?', answer: answers.gebiet },
  ],
  related: [
    { path: '/leistungen/bueroreinigung', text: 'Se si tratta soprattutto di uffici o di uno studio.' },
    { path: '/leistungen/hauswartung', text: 'Se oltre alla pulizia servono anche giri di controllo, piccole riparazioni e smaltimento.' },
    { path: '/leistungen/sonderreinigungen', text: 'Per una pulizia a fondo, ad esempio prima dell’inizio o dopo un utilizzo intenso.' },
  ],
  cta: {
    title: 'Offerta per il Suo stabile',
    text: 'Ci descriva l’immobile, la superficie e la cadenza desiderata. Veniamo da Lei per il sopralluogo e Le allestiamo un’offerta, gratuita e senza impegno.',
  },
}

import { company } from '../../shared/company'
import type { ArticleContent } from '../types'
import { cantonListIt, languagesIt, responseTime } from './common'

/**
 * Guida in italiano (M53, M60). Traduzione fedele di content/de/ratgeber.ts:
 * consigli generali formulati come tali, sull’azienda solo quanto documentato (E18).
 */

export const ratgeberUebersicht = {
  h1: 'Guida alla pulizia di edifici',
  intro: `Risposte a domande sull’affidamento, sui costi e sullo svolgimento della pulizia di edifici. Di ${company.brand}, per aziende, amministrazioni immobiliari e proprietari nei Cantoni ${cantonListIt}.`,
  services:
    'Direttamente ai servizi: [Pulizia di manutenzione](/leistungen/unterhaltsreinigung), [Custodia di stabili](/leistungen/hauswartung) e [tutti i servizi](/leistungen).',
  byline: `Una guida di ${company.brand}`,
  updatedLabel: 'Aggiornato al',
  publishedLabel: 'Pubblicato il',
}

const reinigungsfirmaFinden: ArticleContent = {
  path: '/blog/richtige-reinigungsfirma-finden',
  h1: 'Come trovare l’impresa di pulizie giusta?',
  subtitle: 'Quali questioni chiarire prima dell’affidamento, dall’entità del servizio al contratto.',
  teaser: 'Quali questioni chiarire prima dell’affidamento: entità del servizio, assicurazione, controllo della qualità, referenze, offerta e contratto.',
  updated: '2026-09-26',
  intro: [
    'Locali puliti e curati creano un ambiente di lavoro gradevole e lasciano alla clientela una buona prima impressione. L’impresa di pulizie che se ne occupa la sceglie di solito per diversi anni. Questa guida mostra a che cosa prestare attenzione nella scelta.',
  ],
  summary: {
    title: 'In breve',
    items: [
      'Chiarisca innanzitutto le Sue esigenze: quale servizio, con quale frequenza e in quali orari.',
      'Richieda da tre a cinque offerte, ciascuna dopo un sopralluogo.',
      'Confronti entità del servizio, assicurazione, controllo della qualità, referenze, offerta e contratto.',
      'Chieda chiarimenti dove qualcosa resta poco chiaro e si faccia dare le risposte per iscritto.',
    ],
  },
  sections: [
    {
      title: 'Chiarire innanzitutto le esigenze',
      paragraphs: ['Prima di confrontare i fornitori, dovrebbe sapere di che cosa ha bisogno. I servizi principali:'],
      definitions: [
        {
          term: 'Pulizia di manutenzione',
          text: 'La pulizia ricorrente con una cadenza fissa, ad esempio più volte alla settimana. Mantiene i locali puliti e igienici. Maggiori informazioni alla pagina [Pulizia di manutenzione](/leistungen/unterhaltsreinigung).',
        },
        {
          term: 'Pulizia a fondo',
          text: 'Una pulizia approfondita a intervalli più lunghi. Rimuove lo sporco che resta dopo la pulizia regolare. Maggiori informazioni alla pagina [Pulizie a fondo e speciali](/leistungen/sonderreinigungen).',
        },
        {
          term: 'Custodia di stabili',
          text: 'La cura di uno stabile al di là della pulizia, ad esempio con giri di controllo, piccole riparazioni e smaltimento. Maggiori informazioni alla pagina [Custodia di stabili](/leistungen/hauswartung).',
        },
      ],
      note: 'Stabilisca inoltre con quale frequenza e in quali orari si deve pulire, ad esempio prima dell’inizio del lavoro o dopo la chiusura del negozio. Tutti i fornitori hanno bisogno di queste indicazioni, affinché le offerte siano confrontabili.',
    },
    {
      title: 'A che cosa prestare attenzione',
      subsections: [
        {
          title: 'Entità e limiti del servizio',
          text: 'Si faccia indicare per iscritto quali locali e attività sono compresi e quali no. Chieda: che cosa fa parte della pulizia regolare e che cosa viene fatturato separatamente?',
        },
        {
          title: 'Assicurazione',
          text: 'Durante il lavoro nei Suoi locali qualcosa può essere danneggiato. Chieda se esiste un’assicurazione di responsabilità civile aziendale e si faccia documentare la somma assicurata.',
        },
        {
          title: 'Controllo della qualità e interlocutore',
          text: 'Chieda come vengono formati i nuovi collaboratori e chi controlla il lavoro sul posto. È importante anche sapere chi è il Suo interlocutore e come vengono trattati i reclami.',
        },
        {
          title: 'Valutare correttamente i certificati',
          text: 'I certificati possono dimostrare che i processi sono stati verificati secondo una norma. Chieda norma, ente di certificazione, campo di applicazione e validità. Altrettanto importante è come l’impresa controlla la qualità nel lavoro quotidiano e rimedia ai difetti.',
        },
        {
          title: 'Referenze e valutazioni',
          text: 'Chieda referenze relative a oggetti comparabili. Se un colloquio con clienti di riferimento sia possibile dipende dal loro consenso. Verifichi anche le valutazioni online.',
        },
        {
          title: 'Offerta e prezzo',
          text: 'Un’offerta affidabile si ottiene solo dopo un sopralluogo. Verifichi che i costi accessori come la trasferta e i prodotti di pulizia siano indicati e che le pulizie speciali siano elencate separatamente. In caso di offerte molto convenienti, chieda quali servizi e quale tempo di lavoro sono compresi. Maggiori informazioni: [Da che cosa dipendono i costi di una pulizia di manutenzione](/blog/reinigungskosten-schweiz).',
        },
        {
          title: 'Contratto',
          text: 'Durata, termine di disdetta e la sostituzione in caso di vacanze o malattia devono figurare nel contratto.',
        },
        {
          title: 'Vicinanza e raggiungibilità',
          text: 'Chieda quanto rapidamente qualcuno è sul posto in caso di difetto e come può raggiungere il Suo interlocutore.',
        },
      ],
    },
    {
      title: 'Passo dopo passo verso l’impresa di pulizie',
      ordered: true,
      items: [
        'Chiarire le esigenze: annotare servizio, cadenza, orari e superfici.',
        'Scegliere da tre a cinque fornitori che operano nella Sua regione.',
        'Fissare i sopralluoghi. Senza sopralluogo non c’è un’offerta confrontabile.',
        'Confrontare le offerte: entità, cadenza, costi accessori e durata.',
        'Chiarire le questioni aperte, preferibilmente per iscritto.',
        'Chiedere se è possibile una pulizia di prova o un inizio con un periodo di prova.',
        'Concludere il contratto e fissare l’interlocutore.',
      ],
    },
    {
      title: 'Domande per il sopralluogo',
      items: [
        'Che cosa è compreso esattamente, e che cosa no?',
        'Con quale frequenza e in quali orari si pulisce?',
        'Chi è il mio interlocutore?',
        'Come viene controllata la qualità?',
        'Come è regolata la sostituzione in caso di vacanze o malattia?',
        'Quale assicurazione esiste, con quale copertura?',
        'Come si fattura, e che cosa costa in più?',
      ],
    },
    {
      title: `Come ${company.brand} risponde a queste domande`,
      items: [
        'Offerta: gratuita e senza impegno, dopo un sopralluogo.',
        `Interlocutore: la Sua richiesta è trattata personalmente dal direttore. Riceverà nostre notizie ${responseTime}.`,
        'Assicurazione: responsabilità civile aziendale con una copertura di CHF 10 milioni.',
        'Esperienza: dal 2006, oggi oltre 50 collaboratrici e collaboratori e oltre 120 clienti (stato a settembre 2026).',
        `Lingue: ${languagesIt}.`,
        `Zona: i Cantoni ${cantonListIt}, con tutti i servizi. Maggiori informazioni alla pagina [Zona d’intervento](/einzugsgebiet).`,
      ],
    },
  ],
  cta: {
    title: 'Offerta sul posto',
    text: 'Veniamo da Lei per un’offerta gratuita e senza impegno. Ci descriva oggetto, superficie e cadenza desiderata.',
  },
}

const kosten: ArticleContent = {
  path: '/blog/reinigungskosten-schweiz',
  h1: 'Quanto costa una pulizia di manutenzione?',
  subtitle: 'I principali fattori di costo e come ottenere un’offerta affidabile.',
  teaser: 'Da che cosa dipende il prezzo di una pulizia di manutenzione, come si fattura e come confrontare le offerte.',
  updated: '2026-09-26',
  intro: [
    'Questa guida riguarda la [pulizia di manutenzione](/leistungen/unterhaltsreinigung), cioè la pulizia regolare di stabili, uffici e superfici commerciali. Spiega da che cosa dipende il prezzo e che cosa dovrebbe figurare in un’offerta.',
  ],
  summary: {
    title: 'In breve',
    items: [
      'Il prezzo dipende soprattutto da superficie, cadenza, utilizzo e orari d’intervento.',
      'Una cifra affidabile si ottiene solo dopo un sopralluogo.',
      'Confronti le offerte in base all’entità del servizio e all’importo mensile, non solo in base alla tariffa oraria.',
      'Veniamo per il sopralluogo gratuitamente e senza impegno.',
    ],
  },
  sections: [
    {
      title: 'I fattori di costo',
      definitions: [
        { term: 'Superficie e tipi di locali', text: 'Dimensioni, rivestimenti dei pavimenti, servizi igienici e superfici vetrate determinano il tempo di lavoro.' },
        {
          term: 'Cadenza',
          text: 'Con una pulizia frequente l’impegno per intervento spesso diminuisce, ma aumenta il numero di interventi. Determinante è l’importo mensile indicato nell’offerta.',
        },
        { term: 'Utilizzo', text: 'Ingressi, cucine e servizi igienici molto frequentati richiedono più tempo rispetto a locali poco utilizzati.' },
        {
          term: 'Orari d’intervento',
          text: 'La pulizia la sera, di notte o nel fine settimana può comportare supplementi. Chieda se tali supplementi sono compresi nell’offerta.',
        },
        {
          term: 'Prestazioni supplementari',
          text: 'Materiale di consumo, pulizia delle finestre o una [pulizia a fondo](/leistungen/sonderreinigungen) prima dell’inizio possono essere indicati separatamente.',
        },
      ],
    },
    {
      title: 'Perché non indichiamo prezzi su internet',
      paragraphs: [
        'Due oggetti con la stessa superficie possono richiedere un impegno molto diverso, a seconda del rivestimento del pavimento, dell’utilizzo e dell’accesso. Un prezzo senza sopralluogo sarebbe quindi o troppo alto o non corrisponderebbe in seguito. Indichiamo i prezzi solo nell’offerta, dopo aver visto l’oggetto.',
      ],
    },
    {
      title: 'Come si fattura',
      paragraphs: [
        'Sono usuali tariffe orarie, forfait mensili o prezzi in base alla superficie. Chieda come si fattura e che cosa è compreso in ciascun caso. Solo così le offerte sono confrontabili.',
      ],
    },
    {
      title: 'Confrontare le offerte',
      paragraphs: ['Un’offerta confrontabile indica almeno:'],
      items: [
        'quali locali e attività sono compresi',
        'cadenza e orari d’intervento',
        'materiale di consumo e prodotti di pulizia',
        'eventuali supplementi e costi accessori come la trasferta',
        'durata e termine di disdetta',
      ],
      note: 'Maggiori informazioni: [A che cosa prestare attenzione nella scelta di un’impresa di pulizie](/blog/richtige-reinigungsfirma-finden).',
    },
    {
      title: `Come ottenere la Sua offerta da ${company.brand}`,
      ordered: true,
      items: [
        `Ci telefoni o ci scriva. La Sua richiesta è trattata personalmente dal direttore; riceverà nostre notizie ${responseTime}.`,
        'Visitiamo l’oggetto sul posto e chiariamo entità, cadenza e orari.',
        'Riceve un’offerta scritta, gratuita e senza impegno.',
      ],
      note: `Per la trasferta valgono le stesse condizioni nell’intero territorio dei Cantoni ${cantonListIt}.`,
    },
  ],
  cta: {
    title: 'Offerta per il Suo oggetto',
    text: 'Ci descriva oggetto, superficie e cadenza desiderata. Veniamo per il sopralluogo e Le allestiamo un’offerta, gratuita e senza impegno.',
  },
}

/** Articoli nell’ordine della panoramica, stato più recente per primo */
export const artikel = [reinigungsfirmaFinden, kosten]

export const ratgeber = { reinigungsfirmaFinden, kosten }

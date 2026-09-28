import type { ServicePageContent } from '../../types'

// Stesse chiavi di content/de/leistungen/unterhaltsreinigung.ts. Fonti giuridiche lette il 28.09.2026
// su fedlex.admin.ch (CO art. 257a, 257b, 269d; OLAL art. 4; CC art. 712h, 712m).
export const unterhaltsreinigung: ServicePageContent = {
  path: '/leistungen/unterhaltsreinigung',
  area: 'leistungen',
  eyebrow: 'Pulizia regolare',
  h1: 'Pulizia di manutenzione e pulizia delle scale per stabili',
  lead: [
    'Vano scale, ingresso, ascensore e lavanderia sono condivisi da tutti gli occupanti di uno stabile, e i reclami per lo sporco finiscono all’amministrazione. Puliamo queste parti comuni più volte alla settimana, con un volume di lavoro concordato per iscritto.',
    'Nel contempo riforniamo sapone, carta e sacchi per i rifiuti. Più in basso trova un modello di elenco delle prestazioni per confrontare le offerte, una panoramica su spese accessorie e proprietà per piani e un protocollo per il Suo giro di controllo.',
  ],
  facts: [
    { label: 'Per', value: 'Case plurifamiliari, proprietà per piani, stabili abitativi e commerciali, superfici commerciali' },
    { label: 'Cadenza', value: 'Più volte alla settimana, frequenza per zona' },
    { label: 'Compreso', value: 'Rifornimento di sapone, carta e sacchi per i rifiuti' },
    { label: 'Non compreso', value: 'Appartamenti, uffici, vetri esterni, pulizia a fondo' },
  ],
  sections: [
    {
      title: 'Quando affidare il vano scale a un’impresa',
      paragraphs: [
        'In molte case plurifamiliari sono gli inquilini a pulire il vano scale a turno, secondo un piano. Funziona finché tutti collaborano. Quando gli inquilini cambiano, i piani restano puliti in modo diverso o i reclami si accumulano, una pulizia regolare affidata a un’impresa è di solito la soluzione più tranquilla.',
        'Altre situazioni tipiche: l’impresa o il custode attuale smette, un’amministrazione immobiliare assume uno stabile, oppure al pianterreno apre un negozio con clientela. Cambia allora anche la frequenza con cui ingresso e ascensore vanno puliti.',
        'Chi sostiene i costi dopo il cambio dipende dal contratto di locazione e dalla legge. La panoramica su spese accessorie e proprietà per piani in questa pagina mostra che cosa vale.',
      ],
    },
    {
      title: 'Rifornimento di sapone, carta e sacchi per i rifiuti',
      paragraphs: [
        'Inquilini e clientela notano un dispenser di sapone vuoto prima di un pianerottolo impolverato. Per questo il rifornimento del materiale di consumo fa parte della pulizia di manutenzione.',
        'Il materiale lo acquistiamo noi oppure Lei. L’offerta scritta stabilisce quali articoli ne fanno parte e chi li acquista.',
      ],
      items: [
        'Carta igienica e asciugamani di carta per i servizi igienici',
        'Sapone liquido per i dispenser ai lavabi',
        'Sacchi per cestini e contenitori di raccolta',
        'Altri articoli, se li indica nella Sua richiesta',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'leistungsverzeichnis',
      title: 'Modello di elenco delle prestazioni per vano scale e parti comuni',
      intro:
        'Un elenco delle prestazioni rende le offerte confrontabili, perché ogni impresa calcola con le stesse zone, attività e frequenze. Il modello vale per una casa plurifamiliare con ascensore e negozio al pianterreno e non è un’offerta. Cancelli ciò che da Lei non c’è. Vetri esterni, facciate e pulizia a fondo vanno in posizioni separate.',
      columns: ['Zona', 'Attività', 'Frequenza (esempio)'],
      rows: [
        ['Ingresso e bussola', 'Lavare il pavimento, aspirare lo zerbino, pulire la porta a vetri su entrambi i lati', 'A ogni intervento'],
        ['Scale, pianerottoli e corrimano', 'Scopare e lavare i gradini, spigoli e angoli compresi; pulire con un panno umido corrimano, ringhiere e interruttori', 'A ogni intervento'],
        ['Ascensore', 'Pulire pavimento, pareti, specchio, pulsantiera e porte della cabina', 'A ogni intervento'],
        ['Cassette delle lettere, porte degli appartamenti e telai', 'Pulire, rimuovere le impronte', 'Ogni settimana'],
        ['Lavanderia e stenditoio', 'Pulire il pavimento, il lavatoio e i ripiani', 'Ogni settimana'],
        ['Corridoi di cantina e solaio, locale biciclette', 'Scopare, rimuovere le ragnatele', 'Ogni mese'],
        ['Ricezione, corridoi e WC della superficie commerciale', 'Pulire pavimenti, apparecchi sanitari e rubinetteria', 'A ogni intervento'],
        ['Rifiuti e materiale di consumo', 'Svuotare i cestini, rifornire sapone, carta e sacchi', 'A ogni intervento, se concordato'],
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'nebenkosten',
      title: 'Chi paga la pulizia: diritto di locazione e proprietà per piani',
      intro:
        'Se i costi della pulizia del vano scale restano alla proprietà o vengono ribaltati lo regolano il Codice delle obbligazioni, l’ordinanza concernente la locazione e l’affitto di locali d’abitazione o commerciali (OLAL) e il Codice civile. La panoramica riassume le disposizioni per i casi più frequenti.',
      columns: ['Caso', 'Che cosa prevede la legge', 'Che cosa significa in pratica'],
      rows: [
        [
          'Stabile locato, pulizia pattuita come spesa accessoria',
          'Le spese accessorie sono la remunerazione per le prestazioni fornite dal locatore o da un terzo in relazione all’uso della cosa (art. 257a cpv. 1 CO). Si addebitano i costi effettivamente sostenuti (art. 257b cpv. 1 CO).',
          'Idealmente la fattura indica la pulizia per ogni stabile. Gli inquilini possono visionare i documenti giustificativi (art. 257b cpv. 2 CO).',
        ],
        [
          'Conteggio o forfait',
          'Il conteggio delle spese accessorie va allestito e presentato almeno una volta all’anno. Un computo forfettario deve fondarsi sui valori medi di tre anni (art. 4 OLAL).',
          'Archiviare i costi di pulizia per stabile e per anno, così in seguito si può giustificare anche un forfait.',
        ],
        [
          'Stabile locato, pulizia non pattuita come spesa accessoria',
          'Le spese accessorie sono a carico del conduttore soltanto se specialmente pattuito (art. 257a cpv. 2 CO).',
          'I costi restano alla proprietà. Per ribaltarli serve una modifica del contratto (riga seguente).',
        ],
        [
          'Finora puliscono gli inquilini, ora un’impresa',
          'Nuove spese accessorie sono una modifica unilaterale del contratto. Valgono dalla prossima scadenza di disdetta e vanno comunicate e motivate sul modulo approvato dal Cantone, almeno dieci giorni prima dell’inizio del termine di preavviso (art. 269d cpv. 1 e 3 CO).',
          'Pianificare insieme l’inizio dell’impresa e la data delle nuove spese accessorie. Fino ad allora i costi restano alla proprietà.',
        ],
        [
          'Proprietà per piani',
          'I comproprietari contribuiscono alle spese per la manutenzione ordinaria delle parti comuni proporzionalmente al valore delle loro quote (art. 712h cpv. 1 e 2 CC). Se parti comuni non servono o servono minimamente a taluni comproprietari, se ne tiene conto nella ripartizione (art. 712h cpv. 3 CC).',
          'L’assemblea approva ogni anno il preventivo, il resoconto e la ripartizione delle spese (art. 712m cpv. 1 n. 4 CC). I costi per zona mostrano ad esempio se l’ascensore va ripartito diversamente per il negozio al pianterreno.',
        ],
      ],
      note: 'La panoramica riassume le disposizioni in modo semplificato e non sostituisce una consulenza legale. Verifichi il singolo caso in base al contratto di locazione e al regolamento, se necessario con uno specialista.',
      sources: [
        { label: 'Codice delle obbligazioni (CO), art. 257a, 257b e 269d', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/it#art_257_a' },
        { label: 'Ordinanza concernente la locazione e l’affitto di locali d’abitazione o commerciali (OLAL), art. 4', href: 'https://www.fedlex.admin.ch/eli/cc/1990/835_835_835/it#art_4' },
        { label: 'Codice civile svizzero (CC), art. 712h e 712m', href: 'https://www.fedlex.admin.ch/eli/cc/24/233_245_233/it#art_712_h' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'rundgang',
      title: 'Protocollo del giro di controllo da stampare',
      intro:
        'Con questo protocollo vede in pochi minuti se la pulizia mantiene quanto concordato. Percorra lo stabile il giorno della pulizia o il giorno dopo. Più tardi giudica piuttosto l’uso che la pulizia, e con la pioggia già dopo poche ore.',
      groups: [
        {
          title: 'Ingresso e vano scale',
          items: [
            'Zerbino aspirato, niente sabbia nella bussola',
            'Porta a vetri senza aloni e impronte su entrambi i lati',
            'Spigoli dei gradini, angoli e superfici dietro le porte senza polvere',
            'Corrimano e interruttori puliti, non solo i pavimenti',
          ],
        },
        {
          title: 'Ascensore, lavanderia e cantina',
          items: [
            'Cabina dell’ascensore: pavimento, specchio e pulsantiera puliti',
            'Lavanderia: pavimento asciutto, lavatoio senza residui',
            'Corridoi di cantina e solaio senza ragnatele',
            'Cassette delle lettere senza polvere e impronte',
          ],
        },
        {
          title: 'Servizi igienici e materiale',
          items: [
            'WC e lavabo puliti, il locale ha un odore fresco',
            'Sapone, carta e sacchi per i rifiuti riforniti',
            'Cestini svuotati',
          ],
        },
        {
          title: 'Documenti',
          items: [
            'Elenco delle prestazioni aggiornato a disposizione',
            'Giorni di pulizia affissi nel vano scale',
            'Data, ora e piano di ogni osservazione annotati',
          ],
        },
      ],
      note: 'Se nota qualcosa, ci mandi il protocollo con data e piano. Una foto mostra il punto meglio di qualsiasi descrizione.',
      printable: true,
      updated: '2026-09-28',
    },
  ],
  scope: {
    title: 'Volume della pulizia di manutenzione',
    intro: 'Il nucleo è la pulizia del vano scale. Secondo lo stabile si aggiungono locali accessori e le parti comuni di un piano commerciale:',
    items: [
      'Pulizia del vano scale: gradini, pianerottoli, ringhiere e corrimano',
      'Ingressi con bussola, zerbino e porta a vetri',
      'Cabine dell’ascensore: pavimento, pareti, specchio e pulsantiera',
      'Porte degli appartamenti e telai, interruttori, cassette delle lettere',
      'Lavanderie, stenditoi, corridoi di cantina e solaio',
      'Ricezione, corridoi, WC e cucine delle superfici commerciali',
      'Pavimenti in tutti i locali concordati',
      'Svuotare i cestini, rifornire sapone e carta',
    ],
    notIncluded: [
      'La pulizia all’interno degli appartamenti. Ville, residenze e altre economie domestiche private rientrano nel nostro [settore Premium](/premium).',
      'Uffici e studi con postazioni di lavoro: vedi [Pulizia di uffici e studi](/leistungen/bueroreinigung).',
      'Fughe e pavimenti in pietra che richiedono una pulizia a fondo una tantum: [Pulizie a fondo e speciali](/leistungen/sonderreinigungen). Pulizia finale prima della riconsegna di un appartamento: [Pulizia di fine locazione](/leistungen/umzugsreinigung).',
      'Finestre all’esterno e facciate: [Pulizia di vetri e facciate](/leistungen/fenster-und-fassadenreinigung).',
      'Giri di controllo, impiantistica e piccole riparazioni: [Custodia di stabili](/leistungen/hauswartung).',
    ],
  },
  steps: [
    {
      title: 'Preparare l’inizio',
      text: 'Chiave o badge, un posto per attrezzi e prodotti e un avviso con i giorni di pulizia: questi tre punti sono regolati prima del primo intervento.',
    },
    {
      title: 'Pulire e rifornire',
      text: 'Puliamo nei giorni concordati secondo l’elenco delle prestazioni e intanto riforniamo sapone, carta e sacchi per i rifiuti.',
    },
    {
      title: 'Adeguare a un nuovo uso',
      text: 'Se apre un negozio o un piano resta vuoto, concordiamo con Lei un nuovo volume di lavoro e una nuova cadenza, per iscritto come all’inizio.',
    },
  ],
  faq: [
    {
      question: 'Con quale frequenza pulire un vano scale?',
      answer:
        'Dipende da quante economie domestiche lo utilizzano e da quanto sporco entra dall’esterno. La nostra pulizia di manutenzione è pensata per stabili puliti più volte alla settimana. Ingresso e ascensore richiedono di solito più cura dei corridoi di cantina e solaio. Il modello di elenco delle prestazioni in questa pagina mostra una ripartizione possibile.',
    },
    {
      question: 'Quanto costa una pulizia di manutenzione?',
      answer:
        'L’impegno dipende soprattutto dal numero di piani e di rampe di scale, dalla presenza di un ascensore, dai locali accessori, dalla cadenza e dall’utilizzo. Un ingresso con un negozio al pianterreno richiede più tempo di uno usato solo dagli inquilini. Conta anche chi acquista il materiale di consumo, noi o Lei. Il prezzo lo indichiamo dopo il sopralluogo nell’offerta scritta. La nostra [guida ai costi di pulizia](/blog/reinigungskosten-schweiz) spiega i fattori di costo e il confronto delle offerte.',
    },
    {
      question: 'Possiamo addebitare la pulizia nelle spese accessorie?',
      answer:
        'Il CO prevede che gli inquilini paghino le spese accessorie solo se specialmente pattuite (art. 257a cpv. 2 CO). Se la pulizia figura nel contratto, si addebitano i costi effettivi. Se deve essere aggiunta, valgono le stesse regole di un aumento della pigione: con il modulo approvato dal Cantone e per la prossima scadenza di disdetta (art. 269d CO). Verifichi il singolo caso in base al Suo contratto di locazione.',
    },
    {
      question: 'Nello stabile serve un locale per le pulizie?',
      answer:
        'Facilita il lavoro. In un locale chiudibile a chiave o in un compartimento di cantina, attrezzi e prodotti restano nello stabile tra un intervento e l’altro. Un attacco d’acqua con scarico nelle vicinanze fa inoltre risparmiare tragitti.',
    },
    {
      question: 'Gli inquilini devono preparare qualcosa per la pulizia?',
      answer:
        'No. È utile che nei giorni di pulizia scale e corridoi siano liberi da scarpe, biciclette e altri oggetti. Di solito basta un avviso con i giorni di pulizia nel vano scale.',
    },
    {
      question: 'Basta la pulizia di manutenzione o serve anche una pulizia a fondo?',
      answer:
        'La pulizia di manutenzione rimuove lo sporco che si accumula tra due interventi. Con gli anni però si fissano residui nelle fughe e sui pavimenti in pietra, e gli strati protettivi si consumano. Allora aiuta una [pulizia a fondo](/leistungen/sonderreinigungen) una tantum, idealmente prima dell’inizio di una nuova pulizia di manutenzione.',
    },
    {
      question: 'Cambiamo impresa di pulizie. A che cosa dobbiamo fare attenzione?',
      answer:
        'Pianifichi l’inizio in modo che non ci sia una lacuna tra l’ultimo intervento dell’impresa precedente e il primo di quella nuova. Il termine di disdetta figura nel contratto attuale. Presenti a tutti gli offerenti lo stesso elenco delle prestazioni, altrimenti confronta prestazioni diverse. Si faccia restituire chiavi e badge dall’impresa precedente contro ricevuta.',
    },
  ],
  related: [
    { path: '/leistungen/hauswartung', text: 'Se oltre al vano scale servono anche giri di controllo, impiantistica e consegne di appartamenti.' },
    { path: '/leistungen/sonderreinigungen', text: 'Se nelle fughe e sui pavimenti in pietra si è fissato sporco vecchio, idealmente prima dell’inizio della pulizia di manutenzione.' },
    { path: '/leistungen/bueroreinigung', text: 'Se la superficie commerciale è composta soprattutto da uffici o da uno studio con postazioni di lavoro.' },
  ],
  cta: {
    title: 'Offerta per vano scale e parti comuni',
    text: 'Per l’offerta ci servono l’indirizzo, il numero di piani e di appartamenti, se nello stabile ci sono un ascensore o attività commerciali e la cadenza che desidera. Se ha già un elenco delle prestazioni o un capitolato, ce lo invii. Visitiamo lo stabile e poi Le mandiamo l’offerta scritta: sopralluogo e offerta sono gratuiti e senza impegno.',
  },
}

import type { ServicePageContent } from '../../types'

// Traduzione di content/de/leistungen/baureinigung.ts (E85). Fonti come nel file tedesco,
// collegate alle versioni italiane di fedlex e ai testi del SIGAB (tedesco e francese).
export const baureinigung: ServicePageContent = {
  path: '/leistungen/baureinigung',
  area: 'leistungen',
  eyebrow: 'Pulizie una tantum e speciali',
  h1: 'Pulizia di cantiere e di fine cantiere per nuove costruzioni e ristrutturazioni',
  lead: [
    'Finite le opere interne, una polvere fine copre ogni superficie, le pellicole protettive restano incollate a finestre e apparecchi, schizzi di malta e di pittura segnano vetri e piastrelle. Entro il collaudo tutto questo deve diventare un immobile in cui inquilini, acquirenti o il Suo team possano entrare il giorno della consegna.',
    'Puliamo nelle tappe di cui il Suo cantiere ha bisogno: una pulizia grossolana dopo il rustico, pulizie intermedie prima delle finiture interne e una pulizia accurata prima della consegna. Gli interventi seguono il cronoprogramma della direzione lavori. Così il collaudo inizia su superfici pulite, dove i difetti si vedono.',
  ],
  facts: [
    { label: 'Per', value: 'Committenti, imprese generali, studi di architettura e amministrazioni immobiliari' },
    { label: 'Tappe', value: 'Pulizia grossolana, intermedia e di fine cantiere, singolarmente o insieme' },
    { label: 'Pulizia finale', value: 'Dopo gli ultimi artigiani, prima del collaudo' },
    { label: 'Serve sul posto', value: 'Accesso, corrente, acqua e uno spazio per gli attrezzi' },
    { label: 'Non compreso', value: 'Facciata e pulizia regolare dopo l’insediamento' },
  ],
  scope: {
    title: 'Che cosa comprende la pulizia di cantiere',
    intro:
      'La pulizia di cantiere si svolge a tappe, al ritmo dell’avanzamento dei lavori. Può affidarci tutte le tappe o solo la pulizia di fine cantiere prima della consegna.',
    items: [
      'Pulizia grossolana dopo il rustico: rimuovere sporco grossolano e polvere dai piani',
      'Pulizie intermedie prima della posa dei pavimenti o del montaggio delle cucine',
      'Pulizia di fine cantiere prima del collaudo, dall’alto verso il basso e se necessario in più passaggi',
      'Liberare finestre, telai, battute e vetri da polvere di cantiere e residui',
      'Rimuovere pellicole protettive, etichette, residui di colla e schizzi di malta e di pittura',
      'Pulire pavimenti, servizi igienici, cucine e armadi a muro dentro e fuori, pronti per l’uso',
    ],
    notIncluded: [
      'La facciata dell’edificio ultimato rientra nella [pulizia di vetri e facciate](/leistungen/fenster-und-fassadenreinigung).',
      'Dopo l’insediamento la [pulizia di manutenzione](/leistungen/unterhaltsreinigung) si occupa della pulizia regolare.',
    ],
  },
  sections: [
    {
      title: 'Polvere, pellicole e schizzi: che cosa risolve la pulizia di fine cantiere',
      paragraphs: [
        'La polvere di cantiere è fine e si deposita ovunque: sui pavimenti, nelle battute delle finestre, sui telai delle porte, negli armadi e nei cassetti. Per questo si pulisce dall’alto verso il basso, spesso in più di un passaggio, affinché la polvere non ricada su superfici già pulite.',
        'A ciò si aggiungono pellicole protettive, etichette, residui di colla, schizzi di malta e di pittura. Ogni superficie richiede il suo prodotto e il suo attrezzo, perché vetri, acciaio inox, rubinetteria e pavimenti nuovi vanno consegnati senza graffi. La tabella più sotto mostra che cosa conta per il vetro.',
      ],
    },
    {
      title: 'Pulizia grossolana nel rustico, perché le finiture partano pulite',
      paragraphs: [
        'Appena il rustico è chiuso, la pulizia grossolana rimuove sporco grossolano e polvere dai piani. Posatori di pavimenti, gessatori e montatori di cucine iniziano così su una base pulita, e meno polvere passa alle tappe successive.',
        'Prima dei lavori delicati segue una pulizia intermedia, ad esempio prima della posa del parquet o del montaggio della cucina. Inserire presto questi interventi nel cronoprogramma alleggerisce la fine del cantiere: la pulizia di fine cantiere non parte da zero.',
      ],
    },
    {
      title: 'Ristrutturazione in un edificio abitato o in uso',
      paragraphs: [
        'Durante il risanamento delle colonne montanti o la trasformazione di un piano, il resto dell’edificio resta in uso. Ogni giorno di lavoro porta polvere nella tromba delle scale, nell’ascensore e fino davanti alle porte degli appartamenti. Una pulizia intermedia di questi percorsi comuni a ritmo fisso riduce il disagio per abitanti e personale.',
        'La pulizia di fine cantiere segue poi tappa per tappa, non appena gli artigiani lasciano un appartamento o un settore. Gli appartamenti finiti si possono così consegnare prima che l’intero risanamento sia concluso.',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'bauablauf',
      title: 'La pulizia nello svolgimento del cantiere',
      intro: 'Quale pulizia arriva quando e chi libera la zona. Da stampare per la direzione lavori o come base per il bando.',
      columns: ['Tappa', 'Quando nel cantiere', 'Che cosa si pulisce', 'Chi libera'],
      rows: [
        [
          'Pulizia grossolana',
          'Dopo il rustico, prima dell’inizio delle finiture interne',
          'Rimuovere sporco grossolano e polvere dai piani, affinché i lavori successivi inizino su una base pulita',
          'Direzione lavori',
        ],
        [
          'Pulizia intermedia',
          'Prima dei lavori delicati, ad esempio prima della posa dei pavimenti o del montaggio delle cucine',
          'Polvere su pavimenti, finestre, impianti ed elementi già montati',
          'Direzione lavori',
        ],
        [
          'Pulizia di fine cantiere',
          'Dopo gli ultimi lavori degli artigiani, prima del collaudo',
          'Tutto pronto per l’uso: dall’alto verso il basso, pellicole e residui rimossi, spesso in più di un passaggio',
          'Direzione lavori o committente',
        ],
        [
          'Pulizia di ripasso',
          'Quando si lavora ancora dopo la pulizia finale, ad esempio per eliminare difetti',
          'Solo i locali in cui gli artigiani hanno lavorato dopo la pulizia finale',
          'Direzione lavori',
        ],
      ],
      note: 'Se dopo la pulizia di fine cantiere gli artigiani lavorano ancora nei locali, si forma nuova polvere. Collochi quindi la pulizia finale dopo gli ultimi lavori e tenga libera una finestra di tempo per le pulizie di ripasso.',
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'ausschreibung',
      title: 'Mettere a concorso la pulizia di fine cantiere: i dati che rendono confrontabili le offerte',
      intro: 'Se tutti gli offerenti ricevono gli stessi dati, le offerte si confrontano riga per riga. La lista funziona anche come modello per la Sua richiesta a noi.',
      groups: [
        {
          title: 'Immobile e superfici',
          items: [
            'Tipo di immobile, numero di piani e superficie utile',
            'Numero di appartamenti, uffici o unità',
            'Piante o piani con i locali da pulire',
            'Pavimenti, soprattutto quelli delicati come pietra naturale, parquet o pavimenti oliati',
            'Cantine, autorimessa sotterranea, locali tecnici e trombe delle scale: compresi o no',
          ],
        },
        {
          title: 'Vetri e finestre',
          items: [
            'Numero e tipo di finestre, porte a vetri e parapetti in vetro',
            'Vetri in altezza, ad esempio lucernari o vetrate della tromba delle scale',
            'Dove è montato vetro di sicurezza temprato',
            'Lamelle e tapparelle: da pulire o no',
          ],
        },
        {
          title: 'Date',
          items: [
            'Tappe desiderate con la data',
            'Data di consegna e data del collaudo',
            'Finestra di tempo tra gli ultimi lavori degli artigiani e il collaudo',
            'Riserva per una pulizia di ripasso',
          ],
        },
        {
          title: 'Cantiere',
          items: [
            'Accesso per veicoli, accesso al cantiere e chiavi o badge',
            'Corrente, acqua, ascensore o montacarichi e spazio per gli attrezzi',
            'Regole di sicurezza e persona di contatto sul cantiere',
            'Benne per i rifiuti: chi le fornisce e chi smaltisce',
          ],
        },
      ],
      note: 'L’ordinanza sui rifiuti (OPSR) chiede di separare i rifiuti edili sul cantiere: i rifiuti speciali a parte, vetro, metalli, legno e materie plastiche il più possibile in base alla tipologia (art. 17 OPSR). Precisi quindi nel bando chi fornisce le benne e dove finiscono pellicole e imballaggi della pulizia.',
      sources: [
        { label: 'Ordinanza sui rifiuti OPSR, art. 17: separazione dei rifiuti edili', href: 'https://www.fedlex.admin.ch/eli/cc/2015/891/it#art_17' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'glas',
      title: 'Vetro nuovo: che cosa lo danneggia e che cosa raccomanda il settore del vetro',
      intro: 'Le finestre vengono spesso montate mesi prima della consegna e subiscono tutto ciò che produce il cantiere. Le raccomandazioni sono dell’istituto svizzero per il vetro nell’edilizia SIGAB.',
      columns: ['Situazione', 'Perché è delicato', 'Raccomandazione'],
      rows: [
        [
          'Boiacca di cemento, malta o intonaco sul vetro',
          'Sono fortemente alcalini e possono corrodere il vetro e renderlo opaco. Una forte corrosione è irreparabile e il vetro va sostituito.',
          'Rimuovere subito. Ammorbidire prima i residui di calcestruzzo, poi toglierli con cura.',
        ],
        [
          'Polvere di cantiere secca',
          'Strofinare un panno umido sullo sporco secco trascina granelli appuntiti sul vetro e lo graffia.',
          'Lavorare con molta acqua pulita: ammorbidire, sciogliere, risciacquare. Panni in microfibra solo con cautela.',
        ],
        [
          'Schizzi di pittura e di malta',
          'Se si passa una lama o un raschietto su tutto il vetro, le particelle di sporco vengono sfregate nel vetro. Ne nasce una rete di graffi sottili.',
          'Usare le lame solo in singoli punti e con grande attenzione, mai su tutta la superficie.',
        ],
        [
          'Etichette e nastro adesivo',
          'I detergenti con soluzioni alcaline o acidi possono distruggere il rivestimento e la superficie del vetro.',
          'Rimuovere la colla al più presto, soprattutto sui vetri rivestiti e d’estate, con cautela con isopropanolo o acetone.',
        ],
        [
          'Vetro di sicurezza temprato',
          'Più sensibile ai graffi del normale vetro float, senza essere di qualità inferiore. Il vetro precompresso non può più essere lavorato dopo la tempra, quindi i graffi non si possono lucidare via.',
          'Pulire con particolare cura e indicare nel bando dove è montato vetro temprato.',
        ],
      ],
      note: 'Secondo la lunga esperienza peritale del SIGAB, gran parte dei graffi nasce da una pulizia di fine cantiere non appropriata, e spesso si vede solo con il sole radente. Esamini quindi le vetrate con la direzione lavori prima della pulizia finale e documenti i danni esistenti. Altrimenti più tardi serve spesso una perizia per stabilire quando è nato un graffio.',
      sources: [
        {
          label: 'SIGAB: vetri sporchi e pulizia sbagliata causano danni (metall, aprile 2020, articolo in tedesco e francese)',
          href: 'https://www.sigab.ch/fileadmin/dam/upload/sigab/news/Fachartikel_DE/2020_04_Metall_Glaeser-im-Baualltag.pdf',
        },
        { label: 'SIGAB: pulire le finestre senza causare graffi (marzo 2021, in tedesco)', href: 'https://www.sigab.ch/de/wissen/detail/fensterputzen-ohne-kratzer-zu-verursachen' },
      ],
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'uebergabe',
      title: 'Lista di controllo per la consegna dopo la pulizia di fine cantiere',
      intro: 'Per il sopralluogo prima del collaudo, locale per locale. Controlli con la luce del giorno e guardi il vetro anche di sbieco, controluce.',
      groups: [
        {
          title: 'Vetri, finestre e porte',
          items: [
            'Pellicole protettive rimosse da finestre, porte e apparecchi',
            'Etichette e residui di colla rimossi da vetri, piastrelle e apparecchi',
            'Vetri senza aloni, schizzi e graffi, controllati anche di sbieco controluce',
            'Battute, telai delle finestre e telai delle porte senza polvere di cantiere',
          ],
        },
        {
          title: 'Cucina, bagno e arredi fissi',
          items: [
            'Rubinetteria e apparecchi sanitari senza residui di malta e di pittura',
            'Armadi e cassetti senza pellicola di polvere all’interno',
            'Elettrodomestici a incasso puliti dentro e fuori, pellicole rimosse',
            'Piastrelle e fughe senza residui',
          ],
        },
        {
          title: 'Pavimenti e superfici',
          items: [
            'Pavimenti puliti, anche negli angoli e lungo i battiscopa',
            'Nessuna pellicola di polvere su davanzali, porte e interruttori',
            'Scale, ringhiere e corrimano senza polvere',
          ],
        },
        {
          title: 'Prima del collaudo',
          items: [
            'Pulizia finale conclusa, nessun artigiano più nei locali',
            'I danni già presenti prima della pulizia sono documentati',
            'Elenco dei difetti preparato per locale e per elemento',
            'Termine per l’avviso dei difetti annotato: 60 giorni per gli edifici',
          ],
        },
      ],
      note: 'Il CO prevede che il committente verifichi l’opera dopo la consegna e ne segnali i difetti (art. 367 CO). Per un’opera immobiliare il termine per segnalare i difetti è di 60 giorni dal 1° gennaio 2026, e non si può pattuire un termine più breve. I difetti non riconoscibili all’atto del ricevimento vanno segnalati entro 60 giorni dalla loro scoperta (art. 370 CO). Su superfici pulite graffi, scheggiature e macchie si vedono già al collaudo. Che cosa preveda nel dettaglio il Suo contratto d’appalto lo chiarisca con la direzione lavori o con la Sua consulenza legale.',
      sources: [
        { label: 'Codice delle obbligazioni, art. 367: verificazione dell’opera e avviso dei difetti', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/it#art_367' },
        { label: 'Codice delle obbligazioni, art. 370: approvazione dell’opera', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/it#art_370' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
  ],
  steps: [
    {
      title: 'Tappe nel cronoprogramma',
      text: 'Pulizia grossolana, intermedia e finale figurano con la data nel cronoprogramma della direzione lavori. Se il cantiere slitta, gli interventi slittano con lui.',
      figure: 'start',
    },
    {
      title: 'Pulizia finale locale per locale',
      text: 'Dopo gli ultimi artigiani ogni locale viene pulito dall’alto verso il basso, pellicole e residui vengono rimossi, finché lo spazio è pronto per l’uso.',
      figure: 'besichtigung',
    },
    {
      title: 'Collaudo su superfici pulite',
      text: 'Lei o la Sua direzione lavori controlla con la lista di controllo per la consegna. Sulle superfici pulite emergono anche i difetti di costruzione nascosti sotto la polvere.',
      figure: 'offerte',
    },
  ],
  faq: [
    {
      question: 'Qual è la differenza tra pulizia di cantiere, pulizia di fine cantiere e pulizia fine lavori?',
      answer:
        'Pulizia di cantiere è il termine generale per tutti gli interventi sul cantiere, dalla pulizia grossolana dopo il rustico alle pulizie intermedie. La pulizia di fine cantiere è l’ultima pulizia accurata prima del collaudo, dopo la quale l’immobile è pronto per l’uso. Pulizia fine lavori o pulizia post cantiere indicano di solito la stessa pulizia di fine cantiere.',
    },
    {
      question: 'Quando va inserita nel cronoprogramma la pulizia di fine cantiere?',
      answer:
        'Appena Le è nota la data di consegna. Arriva dopo gli ultimi lavori degli artigiani e prima del collaudo e ha bisogno di una sua finestra di tempo. La durata dipende da superficie, quota di vetro e numero di passaggi. Preveda in più una riserva nel caso in cui gli artigiani tornino per dei difetti.',
    },
    {
      question: 'Quanto costa una pulizia di cantiere?',
      answer:
        'L’impegno dipende soprattutto dalla superficie e dal numero di piani, dalla quota di vetro e dalla sua altezza, dalla quantità di pellicole, colla e schizzi, dal numero di tappe e di passaggi, dal tempo a disposizione fino alla consegna e da corrente, acqua e ascensore sul cantiere. Con la lista per il bando di questa pagina ha insieme i dati che ci servono per l’offerta.',
    },
    {
      question: 'Perché il vetro nuovo a volte ha dei graffi dopo la pulizia di cantiere?',
      answer:
        'Secondo gli esperti del vetro del SIGAB, per lo più a causa di una pulizia sbagliata: una lama passata su tutto il vetro, oppure un panno strofinato su polvere di cantiere secca. Il vetro di sicurezza temprato è particolarmente sensibile. Questi graffi sottili spesso non si notano subito, ma solo con il sole radente.',
    },
    {
      question: 'Chi rimuove pellicole protettive, etichette e residui di colla?',
      answer:
        'Fa parte della pulizia di fine cantiere, con prodotti adatti a ogni superficie. La colla sul vetro va tolta al più presto, soprattutto sui vetri rivestiti e d’estate. Ci indichi quindi già nella richiesta le superfici vetrate con etichette o nastro adesivo.',
    },
    {
      question: 'Che cosa succede se gli artigiani tornano dopo la pulizia di fine cantiere?',
      answer:
        'Si forma nuova polvere e i locali interessati hanno bisogno di una pulizia di ripasso, ad esempio quando dopo il collaudo si eliminano dei difetti. Collochi quindi la pulizia finale, per quanto possibile, dopo gli ultimi lavori e riservi una finestra di tempo per le pulizie di ripasso.',
    },
    {
      question: 'Pulizia di cantiere o pulizia di fine locazione: che cosa serve dopo un rinnovo?',
      answer:
        'Se in un appartamento sono stati rifatti pavimenti, cucina o bagno, la polvere di cantiere si trova nelle battute, negli armadi e su tutte le superfici, insieme a pellicole e schizzi: serve una pulizia di cantiere. Se gli inquilini se ne vanno senza lavori, è adatta la [pulizia di fine locazione](/leistungen/umzugsreinigung) con garanzia di consegna.',
    },
    {
      question: 'Le finestre fanno parte della pulizia di fine cantiere?',
      answer:
        'Sì. Finestre, telai, battute e vetri fanno parte della pulizia di fine cantiere. La facciata stessa rientra nella nostra [pulizia di vetri e facciate](/leistungen/fenster-und-fassadenreinigung).',
    },
  ],
  related: [
    {
      path: '/leistungen/umzugsreinigung',
      text: 'Quando un appartamento passa senza lavori ai prossimi inquilini e la pulizia finale deve avere la garanzia di consegna.',
    },
    {
      path: '/leistungen/fenster-und-fassadenreinigung',
      text: 'Quando facciata e superfici vetrate dell’edificio ultimato vanno pulite regolarmente.',
    },
    {
      path: '/leistungen/unterhaltsreinigung',
      text: 'Quando l’edificio è abitato e tromba delle scale, parti comuni o uffici devono restare puliti in modo continuo.',
    },
  ],
  cta: {
    title: 'Richiedere una pulizia di fine cantiere',
    text: 'Ci indichi il tipo di immobile, la superficie utile, il numero di appartamenti o unità, le tappe desiderate e la data di consegna. Con questi dati prepariamo il sopralluogo del cantiere, gratuito e senza impegno come l’offerta.',
  },
}

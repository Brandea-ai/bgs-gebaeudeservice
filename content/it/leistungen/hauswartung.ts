import type { ServicePageContent } from '../../types'

// Stesse chiavi di content/de/leistungen/hauswartung.ts (E85). Termini giuridici dalla versione
// italiana del CO e del CC su fedlex, dall'UPI e dalla direttiva AICAA 16-15it, letti il 28.09.2026.
// Le fonti disponibili solo in tedesco sono indicate nell'etichetta.
export const hauswartung: ServicePageContent = {
  path: '/leistungen/hauswartung',
  area: 'leistungen',
  eyebrow: 'Cura degli stabili',
  h1: 'Custodia di stabili abitativi e per uffici',
  lead: [
    'Assumiamo la custodia dello stabile in base a un capitolato scritto: quali compiti, con quale frequenza, fino a quale importo senza chiedere e chi riceve le nostre segnalazioni.',
    'Così amministrazione, proprietà e inquilini sanno che cosa aspettarsi, e nessuno deve indovinare chi si occupa della macchia di umidità in cantina. Il capitolato e la lista per il giro di controllo si trovano più in basso, pronti da stampare. Con il capitolato si possono anche confrontare più offerte riga per riga.',
  ],
  facts: [
    { label: 'Immobili', value: 'Case plurifamiliari, proprietà per piani, stabili abitativi e commerciali' },
    { label: 'Base', value: 'Capitolato con compiti, frequenza e canali di segnalazione' },
    { label: 'Piccole riparazioni', value: 'Fino al limite di spesa che Lei fissa nel capitolato' },
    { label: 'Non compreso', value: 'Servizio invernale, picchetto, manutenzione degli impianti' },
  ],
  scope: {
    title: 'Che cosa comprende il servizio di custodia',
    intro: 'Il capitolato del Suo stabile nasce da questi compiti. Lei sceglie che cosa affidarci, anche singolarmente.',
    items: [
      'Giri di controllo con la frequenza concordata: verificare che tutto sia in ordine e segnalare i difetti',
      'Pulire il vano scale e l’ingresso e mantenerli in ordine',
      'Mantenere puliti lavanderia e locali di asciugatura',
      'Piccole riparazioni, ad esempio sostituire lampadine',
      'Tenere d’occhio l’impiantistica dell’edificio e segnalare i guasti',
      'Collaborare alle consegne e riconsegne degli appartamenti',
      'Organizzare lo smaltimento di rifiuti e materiali riciclabili',
      'Manutenzione delle aree esterne, maggiori informazioni alla pagina [Manutenzione delle aree esterne e verdi](/leistungen/aussen-und-gruenflaechenpflege)',
    ],
    notIncluded: [
      'Servizio invernale e sgombero della neve.',
      'Servizio di picchetto e d’emergenza 24 ore su 24.',
      'Riparazioni più importanti e lavori artigianali: l’amministrazione li affida a un’impresa specializzata.',
      'Manutenzione di riscaldamento, ventilazione, ascensore e impianti antincendio, per cui servono imprese specializzate.',
    ],
  },
  sections: [
    {
      title: 'Quando affidare la custodia dello stabile',
      paragraphs: [
        'Spesso c’è un motivo preciso. Il custode di lunga data va in pensione, un’amministrazione assume uno stabile senza custodia, oppure nella comunione dei proprietari per piani nessuno vuole più tenere d’occhio l’area rifiuti e la lavanderia.',
        'Si affidano compiti, non decisioni. Gli ordini di riparazione, la scelta delle imprese specializzate e il collaudo degli appartamenti restano all’amministrazione o alla proprietà. La custodia fornisce la base per queste decisioni: vede che cosa non va nello stabile e lo segnala al posto giusto.',
      ],
    },
    {
      title: 'Giro di controllo: vedere, sistemare, segnalare',
      paragraphs: [
        'Durante il giro di controllo il custode percorre le parti comuni, dall’ingresso fino all’area rifiuti passando per cantina e lavanderia. Le piccole cose, come una lampadina bruciata, le sistema da sé. Tutto il resto va all’interlocutore indicato nel capitolato.',
        'Per la proprietà c’è anche un aspetto giuridico: il proprietario di un edificio è tenuto a risarcire i danni cagionati da difetto di manutenzione (art. 58 CO). Giri di controllo regolari aiutano a notare un bordo di gradino staccato o una scala di cantina buia prima che qualcuno cada.',
      ],
    },
    {
      title: 'Impiantistica: osservare, non manutenere',
      paragraphs: [
        'Riscaldamento, ventilazione, ascensore e protezione antincendio li mantengono imprese specializzate. Il custode li osserva a ogni giro e segnala ciò che salta all’occhio: un messaggio di errore sul display del riscaldamento, un rubinetto che gocciola in lavanderia, un ascensore che non si ferma a livello del piano. L’amministrazione può così chiamare l’impresa finché il guasto è ancora piccolo.',
      ],
    },
    {
      title: 'Consegne e riconsegne degli appartamenti',
      paragraphs: [
        'Al cambio di inquilino il custode può aprire l’appartamento, consegnare le chiavi e annotare le letture dei contatori. Collaudo e verbale restano all’amministrazione. Poiché l’associazione degli inquilini (Mieterverband) non conta questi interventi tra le spese accessorie, conviene registrarli separatamente da pulizia e giri di controllo.',
        'Se prima della riconsegna l’appartamento necessita di una pulizia finale, se ne occupa la [pulizia di fine locazione con garanzia di consegna](/leistungen/umzugsreinigung).',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'pflichtenheft',
      title: 'Capitolato per la custodia da compilare',
      intro:
        'Indichi per ogni area con quale frequenza e chi è responsabile. Un accordo a voce diventa così un incarico che amministrazione, proprietà e custode leggono allo stesso modo.',
      columns: ['Area', 'Compiti', 'Frequenza', 'Responsabile o segnalazione a'],
      rows: [
        ['Giro di controllo', 'Controllare illuminazione, porte, bucalettere, lavanderia, cantina, locale caldaia e area rifiuti per difetti visibili, annotare quanto rilevato', '__________', '__________'],
        ['Vano scale, ingresso e lavanderia', 'Pulire pavimenti, ringhiere e corrimano, mantenere puliti lavanderia e locali di asciugatura; segnalare oggetti lasciati sulla via di fuga e guasti alle macchine', '__________', '__________'],
        ['Piccole riparazioni', 'Ad esempio sostituire lampadine, oliare le serrature; senza chiedere fino a CHF ______ per caso', 'secondo necessità', '__________'],
        ['Impiantistica', 'Osservare riscaldamento, ventilazione, ascensore e dispositivi antincendio; la manutenzione spetta all’impresa specializzata', 'a ogni giro', '__________'],
        ['Smaltimento', 'Organizzare rifiuti e materiali riciclabili, tenere pulito il punto di raccolta', '__________', '__________'],
        ['Aree esterne', 'Prati, siepi, aiuole, vialetti e piazzali', 'secondo il piano di cura', '__________'],
        ['Consegne degli appartamenti', 'Aprire l’appartamento, consegnare le chiavi, annotare i contatori; collaudo e verbale li fa l’amministrazione', 'secondo necessità', 'Amministrazione'],
        ['Chiavi e materiale', 'Quali chiavi, badge e codici, dove sono custoditi, chi firma la consegna; chi fornisce prodotti di pulizia, lampadine e attrezzature e dove sono depositati', 'da fissare una volta', '__________'],
        ['Imprese specializzate', 'Riscaldamento, ascensore, antincendio e riparazioni più importanti: chi incarica, chi paga', 'da fissare una volta', 'Amministrazione'],
        ['Inquilini', 'A chi si rivolgono gli inquilini, avviso all’ingresso', 'da fissare una volta', '__________'],
        ['Espressamente escluso', 'Ad esempio servizio invernale, servizio di picchetto e d’emergenza', 'non applicabile', 'non applicabile'],
      ],
      note:
        'Da noi questo elenco diventa, dopo la visita dello stabile, il capitolato del Suo immobile. Nella proprietà per piani l’assemblea dei comproprietari approva ogni anno preventivo, resoconto e ripartizione delle spese (art. 712m CC). Un capitolato le mostra per che cosa paga.',
      sources: [
        { label: 'Art. 712m CC, competenze dell’assemblea dei comproprietari', href: 'https://www.fedlex.admin.ch/eli/cc/24/233_245_233/it#art_712_m' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'kontrollgang',
      title: 'Giro di controllo: lista da spuntare',
      intro:
        'Il proprietario di un edificio è tenuto a risarcire i danni cagionati da difetto di manutenzione (art. 58 CO). L’UPI raccomanda perciò ai proprietari di effettuare ispezioni a intervalli regolari, di documentarle e di eseguire i lavori di manutenzione necessari. Questa lista copre le parti comuni di una casa plurifamiliare.',
      groups: [
        {
          title: 'Ingresso e vano scale',
          items: [
            'La luce in ingresso, vano scale e corridoi funziona, temporizzatori e sensori di movimento reagiscono',
            'Gradini, bordi dei gradini e pavimenti senza punti d’inciampo, corrimano saldi',
            'Via di fuga libera: niente biciclette, mobili od oggetti combustibili nel vano scale (AICAA 16-15, cifra 2.2)',
            'La porta d’ingresso si chiude e si apre nella direzione di fuga senza chiave (AICAA 16-15, cifra 2.5.5)',
            'Bucalettere e pulsantiera dei campanelli intatti',
          ],
        },
        {
          title: 'Cantina, lavanderia e impiantistica',
          items: [
            'Lavatrici e asciugatrici senza messaggi di errore, scarichi liberi',
            'Nessuna macchia d’acqua, umidità o rubinetto che gocciola',
            'Riscaldamento senza messaggi di guasto, locale caldaia in ordine e chiuso a chiave',
            'L’ascensore si ferma a livello, estintori al loro posto e piombati',
          ],
        },
        {
          title: 'Aree esterne e area rifiuti',
          items: [
            'L’illuminazione esterna funziona, vialetti e scale senza punti d’inciampo',
            'Ringhiere, cancelli e recinzioni saldi',
            'Area rifiuti pulita, contenitori completi e chiusi',
            'Giochi senza danni visibili, se presenti',
          ],
        },
        {
          title: 'Annotare',
          items: [
            'Data e nome',
            'Rilievo con luogo, con foto se utile',
            'Segnalato a chi e quando',
            'Risolto il, da chi',
          ],
        },
      ],
      note:
        'Questa lista non sostituisce una consulenza legale. Quali controlli e quale frequenza servono al Suo stabile va chiarito caso per caso, ad esempio con la Sua assicurazione.',
      sources: [
        { label: 'Art. 58 CO, responsabilità del proprietario di un’opera', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/it#art_58' },
        { label: 'UPI: Che cosa significa responsabilità del proprietario di un’opera?', href: 'https://www.bfu.ch/it/servizi/approfondimenti-giuridici/responsabilita-proprietario-opera' },
        { label: 'Direttiva antincendio AICAA 16-15, vie di fuga e di soccorso (PDF)', href: 'https://services.vkg.ch/rest/public/georg/bs/publikation/documents/BSPUB-1394520214-84.pdf/content' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'wer-bezahlt',
      title: 'Piccola manutenzione e spese accessorie: chi fa, chi paga',
      intro:
        'Per ogni compito contano due domande: chi lo svolge e se i costi possono passare dalle spese accessorie. Le spese accessorie sono a carico del conduttore soltanto se specialmente pattuite (art. 257a CO) e solo per prestazioni connesse con l’uso della cosa (art. 257b CO).',
      columns: ['Compito', 'Chi lo svolge', 'Chi paga'],
      rows: [
        ['Sostituire una lampadina nel proprio appartamento, sturare il sifone del lavabo', 'Inquilino', 'Inquilino, come piccola manutenzione secondo gli usi locali (art. 259 CO)'],
        ['Pulire vano scale, lavanderia e aree esterne', 'Custode', 'Tramite le spese accessorie se il contratto di locazione indica la custodia come voce, altrimenti compreso nella pigione'],
        ['Sostituire le lampadine di vano scale e cantina, oliare le serrature', 'Custode', 'Come la pulizia, finché non servono conoscenze specialistiche'],
        ['Aprire un appartamento per la riconsegna o una visita', 'Custode, su incarico dell’amministrazione', 'Proprietà: l’associazione degli inquilini non conta questi lavori tra le spese accessorie'],
        ['Riparazione che richiede un professionista, ad esempio sturare la condotta principale', 'Impresa specializzata, incaricata dall’amministrazione', 'Proprietà, che deve mantenere la cosa locata in stato idoneo all’uso (art. 256 CO)'],
      ],
      note:
        'La legge non dice dove finisce la piccola manutenzione. Una regola pratica diffusa indica circa CHF 150 per caso; oggi i tribunali guardano soprattutto se serve un professionista. L’associazione degli inquilini consiglia agli inquilini di chiedere il dettaglio delle attività del custode e delle ore impiegate. Un capitolato che separa esercizio e riparazioni rende verificabile il Suo conteggio. Questa nota non sostituisce una consulenza legale.',
      sources: [
        { label: 'Art. 256, 257a, 257b e 259 CO', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/it#art_256' },
        { label: 'Associazione degli inquilini (Mieterverband): piccola manutenzione (in tedesco)', href: 'https://www.mieterverband.ch/mietrecht/waehrend-der-miete/kleiner-unterhalt/' },
        { label: 'Associazione degli inquilini (Mieterverband): scheda sulle spese accessorie non ammesse, 2026 (PDF, in tedesco)', href: 'https://www.mieterverband.ch/upd_fm_media/ratgeber-mietrecht/topthemen/heiz-und-nebenkosten/2026_merkblatt_unzulaessige_nebenkosten.pdf/' },
        { label: 'HEV Schweiz, associazione dei proprietari: piccola manutenzione (in tedesco)', href: 'https://www.hev-schweiz.ch/vermieten/mietrecht/mietvertrag/kleiner-unterhalt' },
        { label: 'HEV Schweiz, associazione dei proprietari: conteggi delle spese accessorie (in tedesco)', href: 'https://www.hev-schweiz.ch/vermieten/nebenkostenabrechnungen' },
      ],
      updated: '2026-09-28',
    },
  ],
  steps: [
    {
      title: 'Definire il capitolato',
      text: 'La base è l’elenco scritto allestito dopo la visita dello stabile. Lei toglie o aggiunge compiti, fissa il limite di spesa per le piccole riparazioni e indica chi riceve le segnalazioni.',
      figure: 'offerte',
    },
    {
      title: 'Inizio nello stabile',
      text: 'Alla data d’inizio il custode riceve le chiavi e gli accessi previsti dal capitolato. Un avviso all’ingresso indica agli inquilini a chi rivolgersi d’ora in poi.',
      figure: 'start',
    },
    {
      title: 'Giri di controllo con cadenza fissa',
      text: 'Il custode percorre lo stabile con la frequenza del capitolato, dall’ingresso al locale caldaia, e sistema subito le piccole cose.',
      figure: 'besichtigung',
    },
    {
      title: 'Segnalare e aggiornare',
      text: 'Ciò che richiede un’impresa specializzata va all’interlocutore concordato. Se in seguito lo stabile ha bisogno di più o di meno, il capitolato viene adeguato.',
      figure: 'anfrage',
    },
  ],
  faq: [
    {
      question: 'Che cosa comprende la custodia di stabili?',
      answer:
        'In sostanza tre cose: tenere pulite le parti comuni, controllare regolarmente e sistemare le piccole cose, segnalare i guasti al posto giusto. A seconda dello stabile si aggiungono smaltimento, aree esterne e consegne degli appartamenti. Che cosa ci affida lo indica il capitolato.',
    },
    {
      question: 'Da che cosa dipende il costo della custodia?',
      answer:
        'Soprattutto dal numero di appartamenti e vani scale, dalla frequenza di giri di controllo e pulizia, dalla superficie delle aree esterne, dal numero di cambi d’inquilino all’anno e da chi fornisce il materiale. Calcoliamo l’importo dopo aver visto lo stabile. Per il conteggio delle spese accessorie conviene esporre pulizia e controlli separatamente da consegne degli appartamenti e riparazioni.',
    },
    {
      question: 'Per il vano scale non basta una pulizia di manutenzione?',
      answer:
        'Se serve solo pulire, sì: allora è adatta la [pulizia di manutenzione](/leistungen/unterhaltsreinigung). La custodia serve non appena qualcuno deve notare i difetti, sistemare le piccole cose e trasmettere i guasti.',
    },
    {
      question: 'Con quale frequenza dovrebbe passare il custode?',
      answer:
        'L’art. 58 CO non fissa alcuna frequenza. Dipende da grandezza, età e utilizzo: uno stabile con ascensore, lavanderia comune e molti cambi d’inquilino richiede più presenza di una piccola proprietà per piani. La frequenza figura nel capitolato e si può adeguare.',
    },
    {
      question: 'Che cosa devono sistemare gli inquilini da sé?',
      answer:
        'I piccoli lavori di pulitura o di riparazione nel proprio appartamento che si possono fare senza un professionista, come sostituire una lampadina o sturare il sifone del lavabo (art. 259 CO). Ciò che richiede un professionista spetta al locatore. La tabella più in alto mostra il ruolo del custode.',
    },
    {
      question: 'Come documentare i giri di controllo?',
      answer:
        'In modo da poter mostrare in seguito che cosa è stato controllato e segnalato, e quando: data, rilievo con luogo, segnalato a chi, risolto il. L’UPI raccomanda ai proprietari di documentare le ispezioni. La lista più in alto contiene questi campi, pronta da stampare.',
    },
    {
      question: 'Chi decide sulla custodia nella proprietà per piani?',
      answer:
        'L’assemblea dei comproprietari decide in tutti gli affari amministrativi che non competono all’amministratore e approva ogni anno preventivo e resoconto (art. 712m CC). L’amministratore esegue le decisioni (art. 712s CC). I comproprietari sostengono le spese proporzionalmente al valore delle loro quote (art. 712h CC). Quale maggioranza serve per assegnare l’incarico lo indica il Suo regolamento.',
    },
  ],
  related: [
    { path: '/leistungen/aussen-und-gruenflaechenpflege', text: 'Quando prati, siepi e aiuole richiedono un proprio piano di cura.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Quando lo stabile ha bisogno solo di pulizia, senza giri di controllo né piccole riparazioni.' },
    { path: '/leistungen/facility-services', text: 'Quando preferisce non affidare separatamente pulizia, custodia e aree esterne.' },
  ],
  cta: {
    title: 'Capitolato e offerta per il Suo stabile',
    text: 'Per l’offerta ci servono l’indirizzo, il numero di appartamenti e vani scale e i compiti che desidera affidarci. Se ha già un capitolato, lo menzioni nel messaggio. La visita dello stabile e l’offerta sono gratuite e senza impegno.',
  },
}

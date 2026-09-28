import type { ServicePageContent } from '../../types'

// Stesse chiavi di content/de (E85). Testi giuridici verificati il 28.09.2026 sulla fonte primaria:
// OPI RS 832.30 (stato 1° maggio 2018) art. 6, 9, 19, 43; LPAc RS 814.20 art. 6 e 7; Suva 84040 e 67075.
export const industrieUndHallen: ServicePageContent = {
  path: '/leistungen/industrie-und-hallenreinigung',
  area: 'leistungen',
  eyebrow: 'Produzione, magazzino e officina',
  h1: 'Pulizia industriale e di capannoni per produzione e magazzino',
  lead: [
    'Sui pavimenti dei capannoni restano trucioli, tracce di pneumatici e pellicole d’olio, mentre sulle macchine si depositano polvere e lubrorefrigerante. Raramente un capannone può fermarsi per la pulizia.',
    'Per questo ogni zona ha il suo ritmo: le corsie tra un turno e l’altro, i locali del personale fuori dalle pause, le macchine durante i fermi programmati. Su un impianto la pulizia inizia solo quando è spento e protetto contro il riavvio.',
  ],
  facts: [
    { label: 'Per', value: 'Aziende di produzione, logistica e artigianali con capannoni e officine' },
    { label: 'Orari d’intervento', value: 'Tra un turno e l’altro, nelle pause, nei giorni di fermo e durante le ferie aziendali' },
    { label: 'Prima del primo intervento', value: 'Passaggio di consegne sulla sicurezza con la Sua manutenzione' },
    { label: 'Non compreso', value: 'Manutenzione e riparazione delle macchine' },
  ],
  scope: {
    title: 'Che cosa comprendono le pulizie industriali',
    intro: 'Tipico per un incarico in produzione e magazzino:',
    items: [
      'Pavimenti di capannoni e di produzione in calcestruzzo, con rivestimento o in parquet industriale',
      'Zone di stoccaggio, scaffalature e corsie',
      'Macchinari e impianti, messi in sicurezza e secondo le indicazioni della Sua manutenzione',
      'Officine e locali accessori, locali del personale, spogliatoi e servizi igienici',
    ],
    notIncluded: [
      'Manutenzione e riparazione delle macchine: restano compito della Sua manutenzione o del fabbricante.',
      'Uffici, ricezione e sale riunioni nello stesso edificio: per questi c’è la [pulizia di uffici](/leistungen/bueroreinigung).',
      'Piazzali, aree verdi e accessi intorno al capannone: vedi [Manutenzione delle aree esterne e verdi](/leistungen/aussen-und-gruenflaechenpflege).',
    ],
  },
  sections: [
    {
      title: 'Pavimenti dei capannoni e corsie',
      paragraphs: [
        'Le grandi superfici dei capannoni si puliscono con una lavasciuga. Spazzola e aspira l’acqua sporca nello stesso passaggio, così il pavimento torna presto calpestabile e percorribile con i carrelli. Nelle corsie strette tra le scaffalature porta-pallet servono una macchina più piccola o il lavoro a mano.',
        'Il prodotto dipende dal rivestimento e dallo sporco. Il calcestruzzo non trattato assorbe l’olio, mentre i rivestimenti in resina epossidica o poliuretanica sono impermeabili ma con dischi troppo abrasivi possono diventare opachi. Il parquet industriale sopporta pochissima acqua. Le chiazze d’olio si raccolgono prima con un assorbente, altrimenti la macchina stende la pellicola su tutta la corsia.',
      ],
    },
    {
      title: 'Pulizia macchinari: trucioli, olio e lubrorefrigerante',
      paragraphs: [
        'Intorno alle macchine utensili i trucioli si accumulano sulle coperture, intorno al basamento e sul pavimento, insieme a lubrorefrigerante e polvere di lavorazione. I trucioli vanno nell’aspiratore industriale. Soffiati via con l’aria compressa, finiscono più in fondo nella macchina o nella corsia accanto.',
        'Che cosa si pulisce su un impianto lo decide la Sua manutenzione: superfici esterne, vasche e coperture o anche parti interne accessibili solo durante il fermo. Quali prodotti sopporta una superficie è di solito indicato nelle istruzioni per l’uso del fabbricante.',
        'Chi spegne un impianto prima della pulizia e lo rimette in servizio dopo, lo stabilisce il passaggio di consegne sulla sicurezza qui sotto.',
      ],
    },
    {
      title: 'Occasioni tipiche in produzione e magazzino',
      items: [
        'Audit, certificazione o visita di un cliente: pulizia con anticipo rispetto alla data, vedi la lista di controllo qui sopra',
        'Ferie aziendali e revisioni: pulizia a fondo di pavimenti, scaffalature e macchine mentre tutto è fermo',
        'Cambio di produzione o nuova linea: pulizia prima dell’installazione dell’impianto',
        'Cambio d’inquilino di un capannone commerciale: pulizia prima della riconsegna, su incarico della proprietà o dell’amministrazione',
        'Orari di pulizia fissi invece di pulire nei ritagli di tempo, quando oggi se ne occupa il personale stesso',
      ],
    },
  ],
  tools: [
    {
      kind: 'checklist',
      id: 'sicherheits-uebergabe',
      title: 'Passaggio di consegne sulla sicurezza',
      intro:
        'Se su un posto di lavoro operano lavoratori di più aziende, i datori di lavoro devono concordare i provvedimenti di sicurezza e informarsi reciprocamente sui pericoli (OPI art. 9). Le macchine devono essere poste in uno stato non pericoloso prima della pulizia (art. 43). Con questa lista verifica entrambi i punti con la Sua manutenzione.',
      groups: [
        {
          title: 'Macchinari e impianti',
          items: [
            'Chi spegne l’impianto e lo protegge contro il riavvio, per esempio con un lucchetto sul sezionatore?',
            'Le energie residue sono state eliminate: pressione in pneumatica e idraulica, calore, parti che girano per inerzia o sono sollevate?',
            'Quali parti può toccare la squadra di pulizia e quali restano riservate alla manutenzione?',
            'Quali prodotti e procedimenti sono ammessi per le superfici: acqua, alta pressione, solventi?',
            'Chi controlla l’impianto dopo la pulizia e lo rimette in servizio?',
          ],
        },
        {
          title: 'Capannone e circolazione',
          items: [
            'Quali dispositivi di protezione sono obbligatori in quale zona, per esempio scarpe di sicurezza, protezione dell’udito o gilet ad alta visibilità?',
            'Dove e quando circolano i carrelli elevatori, e quali passaggi restano aperti durante la pulizia?',
            'Quali zone sono vietate o accessibili solo con accompagnamento?',
            'Come vengono delimitate le superfici bagnate finché non sono asciutte?',
          ],
        },
        {
          title: 'Sostanze e acque di scarico',
          items: [
            'Quali sostanze pericolose sono stoccate o lavorate nella zona, e dove si trovano le schede di dati di sicurezza?',
            'Dove si può svuotare l’acqua sporca della lavasciuga? L’acqua contenente olio non deve finire in un pozzetto collegato a un’infiltrazione, a un corso d’acqua o a un lago (LPAc art. 6 e 7).',
            'Dove si raccolgono assorbenti e stracci impregnati d’olio, e chi li smaltisce?',
          ],
        },
        {
          title: 'Referenti ed emergenze',
          items: [
            'Chi è raggiungibile in azienda durante l’intervento, anche fuori dagli orari d’ufficio?',
            'Dove si trovano uscite di sicurezza, estintori, materiale di pronto soccorso e doccia oculare?',
            'A chi si segnala un danno, un guasto o un quasi infortunio?',
          ],
        },
      ],
      note: 'La lista non sostituisce né l’identificazione dei pericoli della Sua azienda né l’istruzione sul posto. Verifichi caso per caso quali regole del Suo settore si applicano in aggiunta.',
      sources: [
        { label: 'Ordinanza sulla prevenzione degli infortuni e delle malattie professionali (OPI, RS 832.30), art. 6, 9 e 43', href: 'https://www.fedlex.admin.ch/eli/cc/1983/1968_1968_1968/it#art_9' },
        { label: 'Suva: otto regole vitali per la manutenzione (regole 3 e 4)', href: 'https://www.suva.ch/it-ch/prevenzione/regole-vitali-e-disposizioni/regole-vitali-sul-posto-di-lavoro/video-regole-vitali-manutenzione' },
        { label: 'Suva: lista di controllo Avviamento inatteso di macchine e impianti (67075)', href: 'https://www.suva.ch/67075.I' },
        { label: 'Legge federale sulla protezione delle acque (LPAc, RS 814.20), art. 6 e 7', href: 'https://www.fedlex.admin.ch/eli/cc/1992/1860_1860_1860/it#art_6' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'zonenplan',
      title: 'Piano di pulizia per zone (esempio)',
      intro:
        'Ecco come può essere il piano per un capannone di produzione o di stoccaggio. Nella Sua azienda frequenza e fasce orarie dipendono da turni, traffico e accumulo di sporco.',
      columns: ['Zona', 'Sporco tipico', 'Frequenza (esempio)', 'Fascia oraria', 'A cosa fare attenzione'],
      rows: [
        ['Corsie e vie di circolazione', 'Polvere, tracce di pneumatici, trucioli', 'da giornaliera a settimanale', 'tra un turno e l’altro, a tratti', 'segnaletica visibile, tratti bagnati delimitati'],
        ['Produzione', 'Trucioli, pellicole d’olio e di grasso, lubrorefrigerante', 'secondo l’accumulo', 'pause, cambi turno, giorni di fermo', 'prima assorbire l’olio, poi pulire a umido'],
        ['Magazzino e scaffalature', 'Polvere su pavimento, correnti e merce', 'da mensile a trimestrale', 'momenti con pochi movimenti di merce', 'spostare la merce solo con autorizzazione, mai arrampicarsi sulle scaffalature'],
        ['Locali del personale, spogliatoi, servizi igienici', 'Igiene, materiale di consumo', 'ogni giorno lavorativo', 'fuori dalle pause', 'rifornire sapone e carta, panni separati per i WC'],
        ['Macchinari e impianti', 'Depositi, trucioli, polvere di lavorazione', 'secondo le indicazioni della manutenzione', 'fermi programmati, revisioni, ferie aziendali', 'solo spenti e messi in sicurezza, solo prodotti ammessi'],
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'vor-dem-audit',
      title: 'Prima di un audit o di una visita cliente',
      intro:
        'Una visita passa di solito per le vie di circolazione, la produzione, il magazzino e i locali del personale. Pianifichi la pulizia in due tappe, così il giorno stesso nulla è bagnato.',
      groups: [
        {
          title: 'Una settimana prima',
          items: [
            'Stabilire il percorso della visita: ricezione merci, produzione, magazzino, locali del personale',
            'Fissare la pulizia in modo che i pavimenti siano asciutti e sgombri per la visita',
            'Far pulire le superfici delle macchine durante il prossimo fermo programmato, non il giorno dell’audit',
            'Spolverare scaffalature, ripiani e davanzali lungo il percorso',
          ],
        },
        {
          title: 'Il giorno prima',
          items: [
            'Vie di circolazione sgombre e segnaletica a pavimento ben visibile (secondo l’OPI i passaggi devono, se necessario, essere marcati, art. 19)',
            'Nessuna pellicola d’olio o di grasso sui pavimenti dove camminano persone',
            'Uscite di sicurezza e vie di fuga sgombre, nulla depositato davanti',
            'Locali del personale e servizi igienici puliti, sapone e carta riforniti',
            'Contenitori per rifiuti e riciclaggio svuotati, dintorni dei cassoni puliti',
          ],
        },
      ],
      sources: [
        { label: 'Ordinanza sulla prevenzione degli infortuni e delle malattie professionali (OPI, RS 832.30), art. 19', href: 'https://www.fedlex.admin.ch/eli/cc/1983/1968_1968_1968/it#art_19' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
  ],
  steps: [
    {
      title: 'Piano per zone',
      text: 'Ogni zona riceve frequenza e fascia oraria, adatte a turni, traffico dei carrelli e fermi. Il piano di esempio qui sopra mostra come può essere.',
      figure: 'besichtigung',
    },
    {
      title: 'Passaggio di consegne sulla sicurezza',
      text: 'Prima del primo intervento la Sua manutenzione e la nostra squadra esaminano insieme la lista di controllo: spegnimento, dispositivi di protezione, vie di circolazione, prodotti ammessi.',
      figure: 'offerte',
    },
    {
      title: 'Interventi al ritmo dell’azienda',
      text: 'Si pulisce nelle fasce orarie concordate. Se cambiano turni o linee, il piano viene adeguato con Lei.',
      figure: 'start',
    },
  ],
  faq: [
    {
      question: 'Quanto costa una pulizia industriale?',
      answer:
        'Il prezzo dipende soprattutto dalla superficie e dal numero di zone, dal tipo di sporco (la polvere si toglie più in fretta dell’olio o del lubrorefrigerante incrostato), dal rivestimento del pavimento e dalla possibilità di passare con una lavasciuga. Si aggiungono le fasce orarie, per esempio interventi fuori dal normale orario di lavoro o durante brevi fermi, e il numero e l’accessibilità delle macchine. Una cifra la indichiamo dopo aver percorso il capannone.',
    },
    {
      question: 'Potete pulire durante l’attività?',
      answer:
        'In molte zone sì. Corsie, magazzino e locali del personale si possono di solito pulire durante l’attività, a tratti e con le superfici bagnate delimitate. Le zone accanto a impianti in funzione si puliscono durante le pause, tra un turno e l’altro o nei fermi.',
    },
    {
      question: 'Chi spegne le macchine prima della pulizia?',
      answer:
        'Idealmente una persona che conosce l’impianto, per esempio della Sua manutenzione. Sa quali interruttori, valvole ed energie residue sono coinvolti e dopo la pulizia rimette in servizio l’impianto. Con la lista di controllo del passaggio di consegne sulla sicurezza, in questa pagina, lo stabilisce per ogni impianto; lì trova anche la base legale.',
    },
    {
      question: 'Quali regole valgono per la vostra squadra nel nostro capannone?',
      answer:
        'Le Sue regole di sicurezza e d’esercizio, dalle corsie dei carrelli agli occhiali di protezione alla macchina. Secondo l’OPI art. 6 la Sua azienda informa anche i lavoratori di altre aziende sui pericoli sul posto di lavoro. Il momento più semplice è il passaggio di consegne sulla sicurezza.',
    },
    {
      question: 'Come si pulisce un pavimento di capannone sporco d’olio?',
      answer:
        'Dopo l’assorbente sulle chiazze fresche si lascia agire brevemente uno sgrassante, poi la lavasciuga spazzola e aspira. Nel calcestruzzo non trattato l’olio più vecchio resta nei pori. Lì servono spesso più passaggi, e a volte le macchie restano visibili. Dove può finire l’acqua sporca oleosa e dove no lo indica la lista di controllo del passaggio di consegne sulla sicurezza.',
    },
    {
      question: 'Ogni quanto va pulito un capannone di produzione?',
      answer:
        'Non il capannone, ma ogni zona ha il suo ritmo. Locali del personale e servizi igienici richiedono cura ogni giorno lavorativo, le corsie da ogni giorno a ogni settimana secondo il traffico, scaffalature e macchine a intervalli più lunghi o durante i fermi. Il piano di esempio in questa pagina mostra una ripartizione tipica.',
    },
    {
      question: 'Come prepariamo il capannone a un audit?',
      answer:
        'Con sufficiente anticipo: i pavimenti dovrebbero essere asciutti e sgombri prima della visita, le macchine pulite durante l’ultimo fermo programmato. La lista di controllo per gli audit in questa pagina divide i punti tra una settimana prima e il giorno prima.',
    },
  ],
  related: [
    { path: '/leistungen/baureinigung', text: 'Dopo la costruzione o la trasformazione di un capannone, prima che arrivino scaffalature e impianti.' },
    { path: '/leistungen/bueroreinigung', text: 'Per uffici, ricezione e sale riunioni nello stesso edificio, con un ritmo proprio.' },
    { path: '/leistungen/facility-services', text: 'Se oltre al capannone anche la custodia e le aree esterne del sito devono essere affidate a un unico fornitore.' },
  ],
  cta: {
    title: 'Un’offerta per il Suo capannone',
    text: 'Per l’offerta ci sono utili la superficie del capannone in metri quadrati, i rivestimenti dei pavimenti, gli orari dei turni e i fermi previsti, oltre a un elenco delle macchine da pulire. Una pianta con le zone fa risparmiare tempo durante il sopralluogo. Sopralluogo e offerta sono gratuiti e senza impegno.',
  },
}

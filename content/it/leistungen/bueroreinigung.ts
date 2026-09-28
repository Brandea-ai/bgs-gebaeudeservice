import type { ServicePageContent } from '../../types'

// Stesse chiavi e fonti di content/de/leistungen/bueroreinigung.ts (E85)
export const bueroreinigung: ServicePageContent = {
  path: '/leistungen/bueroreinigung',
  area: 'leistungen',
  eyebrow: 'Pulizia regolare',
  h1: 'Pulizia di uffici e studi medici',
  lead: [
    'Un ufficio deve essere pronto ogni mattina: cestini vuoti, angolo cucina pulito, sapone e carta riforniti. Puliamo uffici, amministrazioni e studi con una cadenza fissa, prima che arrivi il Suo team o dopo che è uscito.',
    'Che cosa si pulisce a ogni intervento e che cosa solo una volta alla settimana è fissato in un elenco delle prestazioni. In quali locali può entrare il team lo decide Lei prima dell’inizio. Su questa pagina trova modelli da stampare per entrambe le cose, insieme alle fasce orarie che la legge sul lavoro prevede per gli interventi di pulizia.',
  ],
  facts: [
    { label: 'Orari', value: 'Al mattino presto o la sera, fuori dai Suoi orari di lavoro e di consultazione' },
    { label: 'Cadenza', value: 'Ogni giorno, più volte alla settimana o una volta alla settimana' },
    { label: 'Lingue del team', value: 'Tedesco, inglese, francese e italiano' },
    { label: 'Non compreso', value: 'Finestre, vano scale dello stabile, strumenti degli studi medici' },
  ],
  scope: {
    title: 'Che cosa comprende la pulizia di uffici',
    intro: 'Prestazioni tipiche per uffici, amministrazioni e studi. Con quale frequenza si svolge ogni punto lo mostra l’elenco delle prestazioni più sopra.',
    items: [
      'Svuotare cestini e carta straccia, sostituire i sacchi',
      'Superfici di lavoro libere, ripiani, maniglie e interruttori',
      'Pavimenti di uffici, corridoi e sale riunioni, aspirati o lavati a umido secondo il rivestimento',
      'Ricezione, zona d’ingresso e porte a vetri',
      'Angoli cucina e locali pausa',
      'Servizi igienici con WC, lavabo e specchio',
      'Rifornire sapone, carta e sacchi per i rifiuti',
      'Negli studi medici: ricezione, sala d’attesa e superfici autorizzate delle sale di trattamento',
    ],
    notIncluded: [
      'Vano scale, ascensore e ingresso dell’intero stabile: vedi [Pulizia di manutenzione](/leistungen/unterhaltsreinigung).',
      'Pulizia a fondo di moquette e pavimenti, per esempio prima di un trasloco: vedi [Pulizie a fondo e speciali](/leistungen/sonderreinigungen).',
      'Finestre all’interno e all’esterno: vedi [Pulizia di vetri e facciate](/leistungen/fenster-und-fassadenreinigung).',
      'Il ricondizionamento di strumenti e dispositivi medici, che resta di competenza del team del Suo studio.',
    ],
  },
  sections: [
    {
      title: 'Un intervento dall’alto verso il basso',
      paragraphs: [
        'Si comincia dai rifiuti: svuotare i cestini, portare la carta straccia al punto di raccolta, mettere sacchi nuovi. Poi si puliscono le superfici libere delle scrivanie, i ripiani e le maniglie, quindi l’angolo cucina e i servizi igienici. I pavimenti vengono per ultimi, così nessun pavimento appena pulito riceve di nuovo polvere o gocce.',
        'WC e lavabi richiedono panni e guanti propri, che non toccano mai una scrivania o la macchina del caffè. Molte imprese di pulizia li distinguono perciò con i colori. Può verificarlo Lei stesso durante i primi interventi.',
      ],
    },
    {
      title: 'Negli studi medici e di terapia vale il Suo piano d’igiene',
      paragraphs: [
        'Alla ricezione e in sala d’attesa molte mani toccano ogni giorno gli stessi punti: maniglie, bancone, braccioli e ripiani. Il piano d’igiene del Suo studio prescrive quali prodotti usare e con quale frequenza, e il team vi si attiene.',
        'Nelle sale di trattamento il team pulisce i pavimenti e le superfici che il team del Suo studio autorizza. Strumenti e dispositivi medici li ricondiziona il Suo team, mentre apparecchi e medicamenti non fanno parte della pulizia.',
      ],
    },
    {
      title: 'Che cosa dovrebbe vedere il mattino dopo',
      paragraphs: [
        'Bastano cinque minuti all’apertura per controllare un intervento. Se nota qualcosa, lo segnali il giorno stesso, finché è chiaro di quale intervento si tratta.',
      ],
      items: [
        'Cestini vuoti e con un sacco nuovo',
        'Angolo cucina senza aloni di caffè, lavello pulito e asciutto',
        'Porte a vetri senza impronte all’altezza delle maniglie',
        'Sapone, carta e asciugamani riforniti nei servizi igienici',
        'Documenti e oggetti personali dove li ha lasciati',
        'Finestre chiuse, luci spente, porte chiuse a chiave',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'leistungsverzeichnis',
      title: 'Elenco delle prestazioni per l’ufficio: che cosa si pulisce e quanto spesso',
      intro:
        'Esempio per un ufficio con ricezione, angolo cucina e due WC. Cancelli ciò che non La riguarda e aggiunga i Suoi locali. Con la stessa lista può confrontare le offerte di fornitori diversi.',
      columns: ['Zona', 'A ogni intervento', 'Ogni settimana', 'Su richiesta'],
      rows: [
        ['Postazioni di lavoro', 'Svuotare i cestini, sacchi nuovi', 'Pulire a umido le superfici libere', 'Schermi, tastiere, telefoni, sedie'],
        ['Angolo cucina', 'Lavello, piani di lavoro, macchina del caffè all’esterno, pavimento', 'Frontali di armadi e apparecchi', 'Interno del frigorifero'],
        ['Servizi igienici', 'WC, lavabo, specchio, pavimento, sapone e carta', 'Piastrelle vicino ai lavabi, porte', 'Decalcificare la rubinetteria, pareti divisorie'],
        ['Ricezione e sala d’attesa', 'Bancone, maniglie, porta a vetri d’ingresso', 'Sedie, ripiani, pareti a vetri', 'Spolverare piante e decorazioni'],
        ['Pavimenti', 'Corridoi, ricezione, angolo cucina, servizi igienici', 'Uffici singoli e sale riunioni', 'Battiscopa e angoli'],
        ['Porte e interruttori', 'Maniglie di angolo cucina e WC', 'Maniglie e interruttori ovunque', 'Ante, telai, radiatori'],
      ],
      note: 'Le frequenze sono un esempio. Un angolo cucina per trenta persone richiede più di uno per cinque. Il Suo elenco delle prestazioni diventa parte dell’offerta.',
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'timeline',
      id: 'einsatzzeiten',
      title: 'Orari d’intervento e legge sul lavoro',
      intro:
        'Per il team di pulizia vale la legge sul lavoro. Suddivide la giornata in fasce orarie, e da queste dipende quando una pulizia di uffici è possibile senza autorizzazione e quando si applicano supplementi.',
      entries: [
        {
          label: 'Dalle 6 alle 8',
          text: 'Lavoro diurno. Angolo cucina e WC sono freschi quando arrivano i primi. Se il Suo team inizia alle 7.30, la fascia è stretta per superfici grandi.',
        },
        {
          label: 'Durante l’orario di lavoro',
          text: 'Lavoro diurno. Adatto per servizi igienici molto frequentati, la ricezione o lo studio durante la pausa di mezzogiorno. Aspirapolvere e pavimenti bagnati disturbano le conversazioni.',
        },
        {
          label: 'Dalle 18 alle 20',
          text: 'Lavoro diurno. La maggior parte delle postazioni è libera e ci sono i rifiuti della giornata. Ci dica quali locali vanno lasciati per ultimi, perché lì si lavora ancora.',
        },
        {
          label: 'Dalle 20 alle 23',
          text: 'Lavoro serale, senza autorizzazione. I locali sono vuoti e tranquilli, perciò accesso, allarme e chiusura devono essere regolati.',
        },
        {
          label: 'Dalle 23 alle 6',
          text: 'Lavoro notturno: in linea di principio vietato, solo con autorizzazione, e il lavoro notturno temporaneo dà diritto a un supplemento salariale di almeno il 25 per cento. Senza autorizzazione è possibile solo se l’azienda cliente rientra essa stessa in regole speciali, per esempio perché lavora 24 ore su 24, e la pulizia notturna è necessaria per il suo funzionamento.',
        },
        {
          label: 'Domenica e giorni festivi',
          text: 'Vietato dal sabato alle 23 alla domenica alle 23, come pure il giorno della festa nazionale e nei giorni festivi cantonali parificati alla domenica. Le deroghe seguono le stesse regole della notte, e il lavoro domenicale temporaneo dà diritto a un supplemento salariale del 50 per cento. Il sabato di giorno è normale lavoro diurno.',
        },
      ],
      note: 'Con il consenso del personale un’azienda può spostare la fascia, al più presto dalle 5 e al più tardi fino alle 24 (art. 10 LL). Per un ufficio normale significa: pianifichi la pulizia dal lunedì al sabato tra le 6 e le 23 e non nei giorni festivi, così non serve alcuna autorizzazione.',
      sources: [
        { label: 'Legge sul lavoro (LL), art. 10 e da 16 a 20a', href: 'https://www.fedlex.admin.ch/eli/cc/1966/57_57_57/it#art_10' },
        { label: 'Ordinanza 2 concernente la legge sul lavoro (OLL 2), art. 51 Aziende di pulizia', href: 'https://www.fedlex.admin.ch/eli/cc/2000/244/it#art_51' },
      ],
    },
    {
      kind: 'checklist',
      id: 'vertrauliche-raeume',
      title: 'Locali riservati: da regolare prima del primo intervento',
      intro:
        'Chi pulisce la sera entra in locali con dossier del personale, contratti e dati dei pazienti. La legge sulla protezione dei dati chiede alla Sua azienda una sicurezza dei dati adeguata al rischio (art. 8 LPD), e l’ordinanza cita a questo scopo il controllo dell’accesso ai locali: solo le persone autorizzate devono poter accedere ai locali in cui si trattano dati personali (art. 3 OPDa). Con questa lista stabilisce dove può andare il team di pulizia.',
      groups: [
        {
          title: 'Locali',
          items: [
            'Locali che il team pulisce da solo',
            'Locali puliti solo in presenza di una persona dei Suoi, per esempio ufficio del personale, archivio o sala server',
            'Locali in cui non si entra affatto',
            'Armadi, cassetti e vaschette con documenti: non aprire, non spostare',
          ],
        },
        {
          title: 'Scrivanie, carta e schermi',
          items: [
            'Documenti riposti la sera, scrivanie libere',
            'Schermi bloccati, nessuna password su foglietti',
            'Contenitori chiudibili a chiave per la carta riservata, che non vengono svuotati con la carta straccia',
            'Stampanti e fotocopiatrici senza stampe dimenticate',
          ],
        },
        {
          title: 'Chiavi, badge e allarme',
          items: [
            'Chi riceve chiavi, badge o codici, e per quali porte',
            'Come si inserisce e disinserisce l’allarme e chi chiama il team in caso di falso allarme',
            'Chi controlla alla fine luci, finestre e porte',
            'Che cosa vale se si perde una chiave o un badge',
          ],
        },
        {
          title: 'In più negli studi medici e legali',
          items: [
            'Cartelle dei pazienti, agenda e referti non restano in vista alla ricezione',
            'Sale di trattamento: quali superfici pulisce il team e quali il team del Suo studio',
            'Segreto professionale (art. 321 CP), per esempio per medici, fisioterapisti, avvocati e notai: incarti riposti prima che arrivi il team',
          ],
        },
      ],
      note: 'Questa lista non sostituisce una consulenza legale. Chiarisca caso per caso quali misure servono alla Sua azienda. Secondo la legge sulla protezione dei dati, i dati sulla salute sono dati personali degni di particolare protezione (art. 5 LPD).',
      sources: [
        { label: 'Legge federale sulla protezione dei dati (LPD), art. 5 e 8', href: 'https://www.fedlex.admin.ch/eli/cc/2022/491/it#art_8' },
        { label: 'Ordinanza sulla protezione dei dati (OPDa), art. 3 controllo dell’accesso', href: 'https://www.fedlex.admin.ch/eli/cc/2022/568/it#art_3' },
        { label: 'Codice penale svizzero (CP), art. 321 segreto professionale', href: 'https://www.fedlex.admin.ch/eli/cc/54/757_781_799/it#art_321' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'offerten-vergleichen',
      title: 'Confrontare le offerte punto per punto',
      intro:
        'Una tariffa oraria bassa dice poco se sono calcolate meno ore. Metta le offerte una accanto all’altra e verifichi per ciascuna gli stessi punti. La guida [Pulizia di manutenzione: quanto costa?](/blog/reinigungskosten-schweiz) spiega i fattori di costo generali.',
      groups: [
        {
          title: 'Prestazioni',
          items: [
            'C’è un elenco delle prestazioni che indica ogni locale e ogni frequenza?',
            'Angoli cucina e servizi igienici sono compresi a ogni intervento o solo una volta alla settimana?',
            'Quante ore per intervento e quanti interventi al mese sono calcolati?',
            'Quali fasce orarie sono previste, e sono comprese tra le 6 e le 23?',
          ],
        },
        {
          title: 'Prezzo e contratto',
          items: [
            'Qual è l’importo mensile, con o senza IVA?',
            'Il materiale di consumo è compreso, e chi lo riordina?',
            'I supplementi per notte, domenica o giorni festivi sono indicati?',
            'Chi sostituisce il team durante le vacanze o in caso di malattia?',
            'Quanto dura il contratto, e con quale termine si può disdire?',
          ],
        },
      ],
      note: 'Per ogni offerta moltiplichi le ore per intervento per il numero di interventi al mese. Solo questa cifra mostra se due fornitori intendono lo stesso lavoro.',
      printable: true,
      updated: '2026-09-28',
    },
  ],
  steps: [
    {
      title: 'Stabilire locali e accesso',
      text: 'Prima del primo intervento percorre con noi i locali: che cosa pulisce il team, che cosa solo in Sua presenza, chi riceve chiavi o badge e come si usa l’impianto d’allarme.',
      figure: 'besichtigung',
    },
    {
      title: 'Piano d’intervento fisso',
      text: 'Giorni e fasce orarie sono fissati, per esempio lunedì, mercoledì e venerdì dalle 18. L’elenco delle prestazioni stabilisce che cosa si fa a ogni intervento e che cosa ogni settimana.',
      figure: 'start',
    },
    {
      title: 'Segnalare i cambiamenti',
      text: 'Se trasloca, se il team cresce o se cambiano gli orari di consultazione, adeguiamo prestazioni e cadenza. Ce lo comunichi per telefono o per e-mail.',
      figure: 'anfrage',
    },
  ],
  faq: [
    {
      question: 'Quanto costa la pulizia di uffici?',
      answer:
        'Indichiamo un prezzo dopo il sopralluogo, perché due uffici della stessa grandezza possono richiedere quantità di lavoro molto diverse. Dodici uffici singoli, ciascuno con il proprio cestino, richiedono più tempo di un open space della stessa superficie. Decisivi sono il numero di postazioni, angoli cucina e servizi igienici, i rivestimenti dei pavimenti e le superfici vetrate, la cadenza, l’orario, negli studi medici le prescrizioni del piano d’igiene e se il materiale di consumo è compreso. La lista di controllo più sopra mostra come confrontare le offerte.',
    },
    {
      question: 'Con quale frequenza va pulito un ufficio?',
      answer:
        'Il ritmo lo danno i locali con l’acqua. Angoli cucina e servizi igienici richiedono cura a ogni intervento, quindi in un ufficio con molte persone ogni giorno o più volte alla settimana. Postazioni di lavoro e sale riunioni spesso bastano con una pulizia settimanale. Una ricezione con clientela richiede più di un back office.',
    },
    {
      question: 'Come entra il team di pulizia nell’edificio quando non c’è più nessuno?',
      answer:
        'Con una chiave, un badge o un codice che Lei consegna al team. Prima del primo intervento si stabilisce con Lei chi riceve che cosa e come si gestiscono allarme, luci e chiusura. La lista «Locali riservati» più sopra contiene tutti i punti da compilare.',
    },
    {
      question: 'Dobbiamo riordinare le postazioni, e che cosa succede ai documenti riservati?',
      answer:
        'Si puliscono le superfici libere, ciò che si trova sulla scrivania resta al suo posto. Una scrivania libera la sera conviene quindi due volte: la superficie viene pulita meglio e le carte riservate non restano in vista. Per la carta da distruggere sono adatti contenitori chiudibili a chiave che non vengono svuotati con la carta straccia.',
    },
    {
      question: 'Schermi e tastiere sono compresi?',
      answer:
        'Su richiesta, come punto separato dell’elenco delle prestazioni. Gli schermi si puliscono solo con un panno leggermente umido che non lascia pelucchi, mai spruzzandoli direttamente. Tastiere e telefoni si puliscono quando il computer è bloccato, così nessun tasto attiva qualcosa.',
    },
    {
      question: 'Chi fornisce sapone, carta e sacchi per i rifiuti?',
      answer:
        'Il rifornimento avviene a ogni intervento. Chi acquista il materiale lo decide Lei: o l’impresa di pulizia lo porta e lo fattura, oppure lo acquista Lei e il team rifornisce dalla Sua scorta. Importante è che l’offerta indichi la variante scelta, altrimenti due prezzi non sono confrontabili.',
    },
    {
      question: 'Negli studi medici vi attenete al nostro piano d’igiene?',
      answer:
        'Sì. Il Suo piano d’igiene stabilisce prodotti, superfici e frequenza, e il team lavora secondo il piano. Lo tenga pronto per il sopralluogo, così diventa la base dell’elenco delle prestazioni del Suo studio.',
    },
  ],
  related: [
    { path: '/leistungen/unterhaltsreinigung', text: 'Se oltre ai Suoi uffici vanno puliti anche vano scale, ascensore e ingresso di tutto lo stabile.' },
    { path: '/leistungen/sonderreinigungen', text: 'Per la pulizia a fondo quando entra in nuovi uffici o prima di riconsegnare i vecchi locali.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'Per finestre e fronti vetrati, all’interno e all’esterno, che non fanno parte della pulizia corrente degli uffici.' },
  ],
  cta: {
    title: 'Un’offerta per il Suo ufficio o il Suo studio',
    text: 'Per l’offerta ci servono l’indirizzo, la superficie approssimativa e il numero di piani, postazioni di lavoro, angoli cucina e WC. Aggiunga le fasce orarie in cui si può pulire e, per gli studi medici, il piano d’igiene. Poi passiamo da Lei: sopralluogo e offerta scritta sono gratuiti e senza impegno.',
  },
}

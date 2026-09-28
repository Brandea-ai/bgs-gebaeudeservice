import { company } from '../../shared/company'
import type { RatgeberArtikel } from '../de/ratgeber'
import type { Source } from '../types'
import { cantonListIt, languagesIt, responseTime } from './common'

/**
 * Guida in italiano (M53, M60, E85). Traduzione fedele di content/de/ratgeber.ts:
 * consigli generali formulati come tali, sull’azienda solo quanto documentato (E18).
 * Fonti in italiano dove Fedlex e l’UPI le offrono, altrimenti con l’indicazione
 * «in tedesco».
 */

export const ratgeberUebersicht = {
  h1: 'Guida alla pulizia di edifici',
  intro:
    'Conoscenze utili per amministrazioni immobiliari, comunioni di proprietari per piani e aziende: capitolato della custodia, riconsegna dell’appartamento, pavimenti, scelta dell’impresa e costi della pulizia di edifici.',
  note: `Ogni articolo indica le fonti e la data dell’ultima verifica. A cura di ${company.brand}, per stabili e aziende nei Cantoni di ${cantonListIt}.`,
  byline: `Una guida di ${company.brand}`,
  updatedLabel: 'Aggiornato al',
  readMore: 'Leggi l’articolo',
  publishedLabel: 'Pubblicato il',
  servicesTitle: 'Direttamente ai servizi',
  allServices: 'Tutti i servizi in sintesi',
  allArticles: 'Tutte le guide',
  moreTitle: 'Continua a leggere',
  // Eckdaten rechts im IntroBand der Übersicht (E85)
  facts: [
    { label: 'Per', value: 'Amministrazioni, proprietà per piani, proprietari e aziende' },
    { label: 'Da stampare', value: 'Capitolato, verbale, tabella dei pavimenti, griglia di confronto e calcolo' },
    { label: 'Fonti', value: 'Diritto federale su Fedlex, UPI, UFSP, associazioni e fabbricanti' },
  ],
  serviceLabel: 'Servizio corrispondente',
  offerShort: 'Richiedere un’offerta',
}

// Fonti (lette il 28.09.2026)
const co = (art: string, label: string): Source => ({
  label: `Codice delle obbligazioni, ${label}`,
  href: `https://www.fedlex.admin.ch/eli/cc/27/317_321_377/it#art_${art}`,
})
const cc: Source = {
  label: 'Codice civile, art. 712h, 712m e 712s (proprietà per piani)',
  href: 'https://www.fedlex.admin.ch/eli/cc/24/233_245_233/it#art_712_m',
}
const upiResponsabilita: Source = {
  label: 'UPI: Che cosa significa responsabilità del proprietario di un’opera?',
  href: 'https://www.bfu.ch/it/servizi/approfondimenti-giuridici/responsabilita-proprietario-opera',
}
const upiPavimento: Source = { label: 'UPI: Pavimento', href: 'https://www.bfu.ch/it/consigli/pavimento' }
const mvSpese: Source = {
  label: 'Associazione svizzera inquilini (MV): spese accessorie non ammesse 2026 (PDF, in tedesco)',
  href: 'https://www.mieterverband.ch/upd_fm_media/ratgeber-mietrecht/topthemen/heiz-und-nebenkosten/2026_merkblatt_unzulaessige_nebenkosten.pdf/',
}
const hevRiconsegna: Source = { label: 'HEV Schweiz: riconsegna dell’appartamento (in tedesco)', href: 'https://www.hev-schweiz.ch/vermieten/verwalten/wohnungsabgabe' }
const mvDurata: Source = {
  label: 'Associazione svizzera inquilini (MV): tabella della durata di vita (in tedesco)',
  href: 'https://www.mieterverband.ch/mietrecht/unterlagen-und-tools/lebensdauertabelle/',
}
const mvDomande: Source = {
  label: 'Associazione svizzera inquilini (MV): riconsegna e verbale, domande e risposte (in tedesco)',
  href: 'https://www.mieterverband.ch/mietrecht/ende-der-miete/wohnungsabgabe-protokoll/tipps/',
}
const zhNotifica: Source = {
  label: 'Tribunali zurighesi: notifica dei difetti alla riconsegna (in tedesco)',
  href: 'https://www.gerichte-zh.ch/de/themen/miete/kuendigung-rueckgabe/rueckgabe-und-ausweisung/maengelruege',
}
const nvs: Source = {
  label: 'Associazione svizzera della pietra naturale NVS: pulizia dei pavimenti in pietra naturale (PDF, in tedesco)',
  href: 'https://nvs.ch/fileadmin/user_upload/nvs/1_Dienstleistungen/Technische_Merkblaetter/15_MB_Reinigung_von_Naturstein_Belaegen.pdf',
}
const ceruniqCeramica: Source = {
  label: 'Ceruniq: pulizia e cura dei rivestimenti in ceramica (PDF, in tedesco)',
  href: 'https://www.ceruniq.ch/wp-content/uploads/2025/03/reinigungs-und-pflegeanleitung-fuer-keramische-belaege.pdf',
}
const ceruniqPrima: Source = {
  label: 'Ceruniq: prima pulizia dei rivestimenti in ceramica (PDF, in tedesco)',
  href: 'https://www.ceruniq.ch/wp-content/uploads/2025/03/erstreinigung-fuer-keramische_belaege.pdf',
}
const forboLinoleum: Source = {
  label: 'Forbo Flooring: pulizia e cura del linoleum (PDF, in tedesco)',
  href: 'https://forbo.blob.core.windows.net/forbodocuments/9597/Forbo_Linoleum_Reinigung-Pflege_202204.pdf',
}
const forboVinile: Source = {
  label: 'Forbo Flooring: pulizia e cura dei pavimenti design in vinile (PDF, in tedesco)',
  href: 'https://forbo.blob.core.windows.net/forbodocuments/711557/Forbo_Allura-Designbelage_Reinigung-Pflege_202001.pdf',
}
const ispVerniciato: Source = {
  label: 'ISP, associazione del parquet: cura del parquet verniciato (PDF, in tedesco)',
  href: 'https://www.parkett-verband.ch/images/content/Pflegeanleitungversiegelt2022de.pdf',
}
const ispOliato: Source = {
  label: 'ISP, associazione del parquet: cura del parquet oliato (PDF, in tedesco)',
  href: 'https://www.parkett-verband.ch/images/content/Pflegeanleitunggeoelt2022de.pdf',
}
const ufspMuffa: Source = { label: 'UFSP: Attenzione alla muffa (PDF, in tedesco)', href: 'https://www.bag.admin.ch/dam/de/sd-web/wBJWq1KVfpS-/vorsicht-schimmel.pdf' }
const ufspJavel: Source = { label: 'UFSP: Acqua di Javel (in tedesco)', href: 'https://www.bag.admin.ch/de/javelwasser' }
const zpkCcl: Source = { label: 'ZPK: contratto collettivo di lavoro delle pulizie, campo d’applicazione (in tedesco)', href: 'https://zpk-reinigung.ch/recht-lohn/gav' }
const zpkContenuto: Source = { label: 'ZPK: contenuti del contratto collettivo (in tedesco)', href: 'https://zpk-reinigung.ch/recht-lohn/gav-inhalte' }
const ll: Source = { label: 'Legge sul lavoro, art. 17b (supplemento per lavoro notturno)', href: 'https://www.fedlex.admin.ch/eli/cc/1966/57_57_57/it#art_17_b' }
const liva: Source = { label: 'Legge sull’IVA, art. 25 (aliquote d’imposta)', href: 'https://www.fedlex.admin.ch/eli/cc/2009/615/it#art_25' }

const pflichtenheft: RatgeberArtikel = {
  path: '/blog/pflichtenheft-hauswartung',
  h1: 'Capitolato per la custodia di stabili: modello e spiegazioni',
  subtitle: 'Che cosa deve contenere il capitolato della custodia, come fissare cadenza e limite di spesa e perché il conteggio delle spese accessorie ne trae vantaggio.',
  teaser: 'Struttura, esempio compilato e lacune tipiche: come redigere un capitolato che amministrazione, proprietà e custode leggono allo stesso modo.',
  updated: '2026-09-28',
  intro: [
    'Molte custodie funzionano da anni su indicazioni a voce. Va bene finché il custode cambia, un’inquilina mette in dubbio il conteggio delle spese accessorie o, dopo una caduta nel vano scala, qualcuno vuole sapere chi ha controllato che cosa e quando. Un capitolato risponde a queste domande prima che vengano poste.',
  ],
  summary: {
    title: 'In breve',
    items: [
      'Il capitolato indica ogni compito con cadenza, responsabile e canale di segnalazione, oltre a un limite di spesa per le piccole riparazioni.',
      'Tenga separata la gestione corrente dello stabile dal lavoro amministrativo e dalle riparazioni. Solo così la custodia si può conteggiare correttamente nelle spese accessorie.',
      'Documenti i giri di controllo con data e constatazioni. Il proprietario risponde dei danni dovuti a difetto di manutenzione anche senza colpa (art. 58 CO).',
      'Riveda compiti e cadenze una volta all’anno, idealmente insieme al conteggio delle spese accessorie.',
    ],
  },
  sections: [
    {
      title: 'A che cosa serve un capitolato',
      paragraphs: [
        'Il capitolato è l’elenco scritto di ciò che la custodia assume in un determinato stabile. Non sostituisce il contratto, ma ne è l’allegato più importante. Da esso dipendono quattro cose:',
      ],
      definitions: [
        {
          term: 'L’incarico',
          text: 'Ciò che non è scritto resta soggetto a interpretazione. Se il custode oli la porta del locale biciclette o porti i contenitori in strada il giorno della raccolta, sta nel capitolato oppure prima o poi diventa motivo di discussione.',
        },
        {
          term: 'Il confronto',
          text: 'Tre offerte basate sullo stesso capitolato si possono mettere una accanto all’altra. Senza questa base comune, tre fornitori descrivono spesso tre servizi diversi.',
        },
        {
          term: 'Il conteggio',
          text: 'Il conduttore può chiedere di vedere i documenti giustificativi delle spese accessorie (art. 257b cpv. 2 CO). Il capitolato mostra quali ore riguardano pulizia e gestione e quali amministrazione o riparazioni.',
        },
        {
          term: 'La prova',
          text: 'Secondo l’art. 58 CO, il proprietario risarcisce i danni che un edificio cagiona per difetto di manutenzione. L’UPI raccomanda di ispezionare periodicamente le opere esistenti e di documentare i controlli. Nel capitolato sta chi se ne occupa e con quale frequenza.',
        },
      ],
      sources: [co('58', 'art. 58 e 257b'), upiResponsabilita],
    },
    {
      title: 'Una struttura in cinque parti',
      paragraphs: [
        'Casa plurifamiliare, proprietà per piani o stabile commerciale: un capitolato utile ha sempre le stesse cinque parti. Prima viene l’oggetto, alla fine la prova.',
      ],
      items: [
        'Oggetto: indirizzo, numero di appartamenti e vani scala, ascensore, lavanderie, riscaldamento, superficie esterna, punto di raccolta dei rifiuti.',
        'Compiti con cadenza: ogni attività su una riga propria, con «settimanale», «mensile» o «secondo necessità» e, per i lavori stagionali, i mesi.',
        'Limiti: il limite di spesa per piccole riparazioni senza consultazione e ciò che è espressamente escluso, ad esempio il servizio invernale o il picchetto.',
        'Canali di segnalazione: chi riceve le segnalazioni di difetti, entro quando e attraverso quale canale, e chi sostituisce il custode in sua assenza.',
        'Prova: scheda di controllo, rapporto delle ore o rapporto annuale, con la data della prossima verifica.',
      ],
      ordered: true,
    },
    {
      title: 'Esempio: dodici appartamenti, un ascensore, una lavanderia',
      paragraphs: [
        'Il modello qui sotto è compilato per una casa plurifamiliare di dodici appartamenti con un vano scala e ascensore, una lavanderia comune e circa 600 m² di area esterna. I valori sono un esempio, non un riferimento. Nella colonna «La Sua voce» va ciò che vale per il Suo stabile.',
      ],
      tool: {
        kind: 'table',
        id: 'vorlage-pflichtenheft',
        title: 'Modello: capitolato con esempio',
        intro:
          'L’ultima colonna mostra come l’Associazione svizzera inquilini classifica il compito rispetto alle spese accessorie. In ogni caso il contratto di locazione deve indicare la custodia tra le spese accessorie (art. 257a cpv. 2 CO).',
        columns: ['Compito', 'Esempio', 'La Sua voce', 'Spese accessorie secondo l’associazione inquilini'],
        rows: [
          ['Vano scala e ingresso', 'Pulizia a umido ogni settimana, corrimano e porta a vetri compresi', '__________', 'ammesso'],
          ['Ascensore', 'Cabina e porte ogni settimana, soglie ogni mese', '__________', 'ammesso'],
          ['Lavanderia e locale asciugatura', 'Pavimento, lavabo e scarico due volte al mese', '__________', 'ammesso'],
          ['Servizio del riscaldamento', 'A ogni giro leggere pressione e indicazione guasti, annotare il risultato', '__________', 'ammesso'],
          ['Piccola manutenzione', 'Sostituire lampadine, oliare serrature; senza consultazione fino a CHF ______ per caso', '__________', 'ammesso se non servono conoscenze specialistiche'],
          ['Area esterna', 'Prato ogni due settimane da aprile a ottobre, foglie in autunno, siepi secondo il piano di cura', '__________', 'ammesso'],
          ['Giro di controllo delle parti comuni', 'Ogni settimana, constatazioni sulla scheda di controllo', '__________', 'non menzionato, da chiarire nel contratto'],
          ['Rifiuti e materiali riciclabili', 'Esporre i contenitori il giorno della raccolta, tenere pulito il punto di raccolta', '__________', 'non menzionato'],
          ['Riconsegne di appartamenti', 'Aprire l’appartamento, rilevare i contatori, su incarico dell’amministrazione', '__________', 'non ammesso'],
          ['Accompagnare gli artigiani', 'Dare accesso, sorvegliare i lavori', '__________', 'non ammesso'],
          ['Segnalazioni all’amministrazione', 'Difetti per e-mail in giornata, casi urgenti per telefono', '__________', 'non ammesso'],
          ['Espressamente escluso', 'Servizio invernale, picchetto, manutenzione di riscaldamento e ascensore da parte di ditte specializzate', '__________', 'non applicabile'],
        ],
        note:
          'La classificazione segue il promemoria dell’associazione inquilini sulle spese accessorie non ammesse (2026). La valutazione del singolo caso dipende dal contratto di locazione. La tabella descrive la situazione giuridica in generale e non costituisce una consulenza legale.',
        sources: [mvSpese, co('257_a', 'art. 257a')],
        printable: true,
        updated: '2026-09-28',
      },
    },
    {
      title: 'Motivare la cadenza',
      paragraphs: [
        'La frequenza degli interventi determina la maggior parte dei costi della custodia. Un ritmo settimanale per tutto è comodo, ma raramente adatto. Meglio motivare ogni cadenza con l’utilizzo:',
      ],
      items: [
        'Molti appartamenti, passeggini e biciclette: pulire l’ingresso più spesso dei piani superiori.',
        'Lavanderia comune con turni: far coincidere i controlli con i giorni di bucato.',
        'Frequenti cambi di inquilini: riconsegne come voce separata secondo l’impegno, non nel forfait.',
        'Area esterna: mesi invece di «regolarmente», affinché foglie e taglio delle siepi siano pianificati.',
        'Tetto piano, bocche di lupo o scale esterne: prevedere un giro di controllo in più dopo i temporali.',
      ],
      note: 'L’art. 58 CO non prescrive una frequenza dei controlli. Importante è notare presto i difetti e rimediarvi. Una cadenza motivata si spiega più facilmente se in seguito qualcuno lo chiede.',
    },
    {
      title: 'Limite di spesa e piccola manutenzione',
      paragraphs: [
        'Il limite di spesa stabilisce fino a quale importo il custode risolve una piccola cosa senza chiedere. Senza limite, ogni lampadina diventa un’e-mail all’amministrazione. Se è troppo alto, l’amministrazione perde la visione d’insieme delle spese.',
        'Una soluzione pratica è un limite per caso e un totale annuo, entrambi nel capitolato. Ciò che supera il limite va come segnalazione all’amministrazione, che incarica la ditta specializzata.',
        'Diversa è la piccola manutenzione a carico del conduttore. I difetti nel proprio appartamento rimediabili con piccoli lavori di pulitura o di riparazione li elimina il conduttore a proprie spese, secondo gli usi locali (art. 259 CO). La custodia si occupa delle parti comuni. Scriva nel capitolato se interviene anche negli appartamenti e a spese di chi.',
      ],
      sources: [co('259', 'art. 259')],
    },
    {
      title: 'La custodia nel conteggio delle spese accessorie',
      paragraphs: [
        'Il conduttore deve le spese accessorie solo se specialmente pattuite (art. 257a cpv. 2 CO) e solo per prestazioni connesse con l’uso della cosa (art. 257b cpv. 1 CO). Per la custodia significa che pulizia, servizio del riscaldamento e piccola manutenzione possono farne parte. Il lavoro amministrativo e le riparazioni sono a carico del proprietario.',
        'L’associazione inquilini consiglia ai conduttori di chiedere quali compiti svolge la custodia e con quante ore, e scrive che il capitolato deve essere reso noto. Un’amministrazione che registra le ore secondo le righe del capitolato risponde a queste domande con documenti invece che con stime.',
        'Se viene incaricata una ditta esterna, l’associazione inquilini richiama il principio di economicità. Verifichi quindi le prestazioni supplementari rispetto al contratto di locazione prima dell’affidamento. Le regole generali su spese accessorie e conteggio sono spiegate alla pagina [pulizia di manutenzione](/leistungen/unterhaltsreinigung).',
      ],
      sources: [co('257_b', 'art. 257a e 257b')],
    },
    {
      title: 'Nella proprietà per piani: due lettori',
      paragraphs: [
        'Nella proprietà per piani il capitolato ha due lettori: l’amministratore che lo applica e l’assemblea che stanzia i soldi. La legge attribuisce all’assemblea l’approvazione annuale di preventivo, conto e ripartizione delle spese (art. 712m CC). L’amministratore deve poi metterlo in pratica (art. 712s CC).',
        'Alleghi quindi il capitolato al preventivo quando la custodia viene affidata di nuovo o ampliata. Se la comunione ha eletto un comitato, questo può esaminare in anticipo capitolato e offerte e presentare una proposta all’assemblea.',
        'Le spese si ripartiscono secondo le quote di valore. Se un’unità non usa o usa pochissimo un impianto, ad esempio un negozio al pianterreno l’ascensore, se ne deve tenere conto nella ripartizione (art. 712h cpv. 3 CC). La maggioranza necessaria per l’affidamento è stabilita dal Suo regolamento.',
      ],
      sources: [cc],
    },
    {
      title: 'Sette lacune che creano problemi più tardi',
      items: [
        '«Secondo necessità» senza limite: chi decide quando c’è necessità?',
        'Nessun punto di segnalazione: i difetti arrivano al custode e restano lì.',
        'Riparazioni e pulizia in un unico forfait: le spese accessorie non si possono allora documentare.',
        'Chiavi senza elenco: nessuno sa chi ha quale badge.',
        'Lavori stagionali senza mesi: foglie e taglio delle siepi diventano ogni anno una sorpresa.',
        'Nessuna esclusione: ciò che non è menzionato, gli inquilini se lo aspettano comunque, ad esempio il servizio invernale.',
        'Nessuna verifica: il capitolato di dieci anni fa non conosce la nuova stazione di ricarica nell’autorimessa.',
      ],
    },
    {
      title: 'Verificarlo una volta all’anno',
      paragraphs: [
        'Un buon momento è il conteggio delle spese accessorie, nella proprietà per piani la preparazione dell’assemblea. Bastano tre domande: quali compiti si sono aggiunti? Quali righe hanno richiesto più o meno ore del previsto? Quali segnalazioni sono rimaste aperte?',
        'Se affida di nuovo la custodia, il capitolato verificato è anche la base per le offerte. Come assumiamo la custodia è descritto alla pagina [custodia di stabili](/leistungen/hauswartung).',
      ],
    },
  ],
  service: '/leistungen/hauswartung',
  related: ['/blog/wohnungsabgabe-reinigung', '/blog/reinigungskosten-schweiz'],
  cta: {
    title: 'Custodia secondo il Suo capitolato',
    text: 'Ci invii il Suo capitolato o i dati principali: indirizzo, appartamenti, vani scala, ascensore, lavanderia e area esterna. Percorriamo lo stabile e calcoliamo l’offerta su questa base. Sopralluogo e offerta non Le costano nulla e non La impegnano.',
  },
}

const wohnungsabgabe: RatgeberArtikel = {
  path: '/blog/wohnungsabgabe-reinigung',
  h1: 'Riconsegna dell’appartamento: che cosa devono sapere le amministrazioni su verbale e pulizia finale',
  subtitle: 'Quanto pulito deve essere l’appartamento, come annotare i difetti perché valgano e quando è il momento della pulizia finale.',
  teaser: 'Stato, verbale, notifica dei difetti e pulizia: la riconsegna dell’appartamento dal punto di vista dell’amministrazione, con esempi di annotazioni precise.',
  updated: '2026-09-28',
  intro: [
    'Alla riconsegna di un appartamento, meno di un’ora decide chi pagherà che cosa in seguito. Ciò che manca nel verbale o vi figura in modo troppo vago difficilmente si può far valere dopo. Questa guida si rivolge ad amministrazioni e proprietari e mostra che cosa conta per lo stato, il verbale e la pulizia finale.',
  ],
  summary: {
    title: 'In breve',
    items: [
      'L’appartamento si restituisce nello stato risultante da un uso conforme al contratto (art. 267 CO). La normale usura è coperta dalla pigione.',
      'I difetti vanno verificati alla riconsegna e notificati subito, uno per uno e con precisione (art. 267a CO).',
      'Il verbale prima della pulizia: solo così lo stato alla riconsegna resta dimostrabile.',
      'Il conduttore successivo può prendere visione del verbale di riconsegna (art. 256a CO). Un verbale preciso serve quindi due volte.',
    ],
  },
  sections: [
    {
      title: 'Quanto deve essere pulito un appartamento alla riconsegna?',
      paragraphs: [
        'La legge non chiede uno stato come nuovo. Il conduttore deve restituire l’appartamento nello stato che deriva da un uso conforme al contratto (art. 267 CO). Che cosa significhi «pulito» nel dettaglio lo stabilisce il contratto di locazione. L’associazione dei proprietari HEV include tra l’altro in una pulizia accurata:',
      ],
      items: [
        'finestre dentro e fuori, con telai, persiane, tapparelle e lamelle',
        'in cucina fornelli, forno, frigorifero, grasso nella cappa e pellicole adesive negli armadi',
        'il calcare in bagno e WC',
        'i residui di colla sul parquet',
        'i locali accessori come cantina, solaio e garage, completamente sgomberati',
      ],
      note: 'L’associazione inquilini aggiunge dal punto di vista del conduttore: una pulizia accurata comprende lo shampoo della moquette, ma non lavori pericolosi o che richiedono conoscenze specialistiche, come staccare e oliare le persiane. Se dopo il trasloco l’appartamento viene ristrutturato completamente, secondo l’associazione basta una riconsegna scopata.',
      sources: [co('267', 'art. 267'), hevRiconsegna, mvDomande],
    },
    {
      title: 'Pulizia, usura, danno',
      paragraphs: ['Nei verbali si mescolano spesso tre tipi di constatazioni. Hanno conseguenze diverse e vanno annotate separatamente.'],
      definitions: [
        {
          term: 'Pulizia insufficiente',
          text: 'Grasso nel forno, calcare sulla rubinetteria, polvere sulle lamelle. Secondo l’associazione inquilini, il locatore deve dapprima concedere un breve termine per pulire di nuovo. Se l’appartamento resta insufficientemente pulito, può farlo pulire e trasmettere la fattura.',
        },
        {
          term: 'Usura normale',
          text: 'Moquette consumate, tappezzerie sbiadite, leggere tracce sui muri accanto a letti e quadri, fori di tasselli in misura usuale. È pagata con la pigione.',
        },
        {
          term: 'Usura eccessiva',
          text: 'Danni da fumo, bruciature nella moquette, graffi di animali sulle porte, crepe nel lavabo. Qui il conduttore risponde, ma in caso di sostituzione solo del valore residuo.',
        },
      ],
      note: 'Il valore residuo si calcola con la tabella paritetica della durata di vita delle associazioni dei proprietari e degli inquilini. Un esempio dell’associazione inquilini: una moquette di qualità media dura dieci anni. Se deve essere sostituita dopo sei anni a causa di bruciature, il conduttore sostiene il 40 per cento dei costi. Scaduta la durata di vita, non sostiene più nulla.',
      sources: [mvDurata],
    },
    {
      title: 'Il verbale: abbastanza preciso da valere',
      paragraphs: [
        'I tribunali zurighesi indicano tre requisiti di una notifica dei difetti corretta: i difetti sono designati concretamente, risulta che il locatore intende renderne responsabile il conduttore e la notifica avviene subito alla riconsegna. I termini generici spesso non soddisfano il primo requisito.',
        'Se il conduttore firma difetti a suo carico, l’associazione dei proprietari li considera riconosciuti. Se ne contesta uno, lo annoti nel verbale e notifichi quel punto anche con lettera raccomandata.',
      ],
      tool: {
        kind: 'table',
        id: 'protokoll-eintraege',
        title: 'Annotazioni nel verbale: troppo vaghe e abbastanza precise',
        intro: 'Esempi di constatazioni tipiche, locale per locale. L’ultima colonna classifica ogni constatazione, affinché pulizia, usura e danno restino separati.',
        columns: ['Locale', 'Troppo vago', 'Abbastanza preciso', 'Tipo di constatazione'],
        rows: [
          ['Cucina', '«Cucina sporca»', 'Forno con crosta di grasso su parete posteriore, teglia e griglia; filtro della cappa intasato', 'Pulizia'],
          ['Bagno e WC', '«Bagno non pulito»', 'Vetro della doccia e miscelatore con bordo di calcare; incrostazioni di urina sotto il bordo del WC', 'Pulizia'],
          ['Soggiorno', '«Parquet danneggiato»', 'Davanti alla porta del balcone tre graffi di circa 20 cm, vernice consumata; parquet posato nel 2016', 'Danno o usura, secondo l’età'],
          ['Camera', '«Pareti sporche»', 'Tracce grigie su 1 m dietro il letto; soffitto ingiallito, bordo più chiaro dietro i quadri', 'Tracce: usura; ingiallimento da fumo: danno'],
          ['Finestre', '«Finestre non pulite»', 'Finestra della cucina con sporco nelle battute e nel telaio, vetro striato all’esterno; lamelle del soggiorno impolverate', 'Pulizia'],
          ['Cantina', '«Cantina non sgomberata»', 'Nel compartimento 4 ci sono un armadio e cinque scatoloni', 'Sgombero'],
          ['Chiavi', '«Chiavi incomplete»', 'Ricevute 2 chiavi dell’appartamento su 3, manca la chiave della bucalettere', 'Chiavi mancanti'],
        ],
        note: 'Foto numerate e datate sostengono ogni annotazione, senza sostituirla. Nel verbale rimandi al numero, così in seguito è chiaro quale immagine appartiene a quale constatazione.',
        sources: [zhNotifica, hevRiconsegna],
        printable: true,
        updated: '2026-09-28',
      },
    },
    {
      title: 'La notifica dei difetti: subito, e più tardi per i difetti nascosti',
      paragraphs: [
        'L’art. 267a CO non fissa un termine in giorni, solo la parola «subito». L’associazione inquilini considera una settimana come limite estremo, se il conduttore non ha già firmato i difetti nel verbale. Più sicuro è notificare il giorno della riconsegna, con una copia del verbale per il conduttore.',
        'Se il conduttore rifiuta di collaborare alla riconsegna, la notifica parte subito per iscritto secondo i tribunali zurighesi, per raccomandata a scopo di prova. I tribunali mettono a disposizione una lettera modello.',
        'I difetti non riconoscibili mediante l’ordinaria verifica vanno notificati subito dopo la loro scoperta (art. 267a cpv. 3 CO). Chi fa riparare prima e manda la fattura dopo, secondo l’associazione inquilini, è in ritardo.',
      ],
      sources: [co('267_a', 'art. 267a')],
    },
    {
      title: 'Lo svolgimento attorno al giorno della riconsegna',
      paragraphs: [
        'Secondo l’associazione dei proprietari, l’appartamento si riconsegna in linea di principio l’ultimo giorno della locazione durante il normale orario d’ufficio. Spesso il contratto prevede il primo giorno del mese successivo. Fissi la data presto, perché pulizia, artigiani e l’entrata dei nuovi inquilini ne dipendono.',
      ],
      tool: {
        kind: 'timeline',
        id: 'ablauf-abgabe',
        title: 'Dalla visita preliminare al deposito di garanzia',
        entries: [
          {
            label: 'Alcune settimane prima',
            text: 'Visita preliminare con il conduttore: mostrare che cosa sarà controllato e parlare delle piccole riparazioni che può fare da sé. Fissare le date di riconsegna e pulizia finale.',
          },
          {
            label: 'Il giorno della riconsegna',
            text: 'Controllare locale per locale, annotare separatamente pulizia, usura e danno, leggere i contatori, contare tutte le chiavi, anche le copie.',
          },
          {
            label: 'Subito dopo',
            text: 'Consegnare il verbale o inviarlo immediatamente, notificare per raccomandata i punti contestati, archiviare le foto numerate.',
          },
          {
            label: 'Dopo il verbale',
            text: 'Prima pittori e riparazioni, poi la pulizia finale. In caso di ristrutturazione completa segue alla fine una [pulizia di cantiere](/leistungen/baureinigung).',
          },
          {
            label: 'Alla consegna ai nuovi inquilini',
            text: 'Redigere il verbale d’entrata. Su richiesta, mostrare il verbale di riconsegna dei conduttori precedenti (art. 256a CO).',
          },
          {
            label: 'Entro un anno',
            text: 'Se entro un anno dalla fine della locazione il locatore non ha fatto valere legalmente alcuna pretesa, il conduttore può chiedere alla banca la restituzione del deposito di garanzia (art. 257e cpv. 3 CO).',
          },
        ],
        sources: [hevRiconsegna, co('256_a', 'art. 256a e 257e')],
      },
    },
    {
      title: 'La pulizia finale: chi la ordina e quando',
      paragraphs: [
        'Due strade sono usuali. O il conduttore incarica lui stesso un’impresa di pulizie; l’associazione dei proprietari gli consiglia allora una garanzia di consegna compresa nel forfait. Oppure l’amministrazione fa pulire dopo il verbale, perché l’appartamento è stato restituito insufficientemente pulito o perché vuole uno standard uniforme prima di rilocare.',
        'Nel secondo caso l’ordine è decisivo: verbale, notifica, breve termine per ripulire, poi pulizia. Così resta documentato di che cosa risponde il conduttore, e si pulisce in un appartamento vuoto, dove si può lavorare anche dietro gli elementi incassati.',
        'Per amministrazioni, proprietari e aziende eseguiamo la pulizia finale con garanzia di consegna, descritta alla pagina [pulizia di fine locazione](/leistungen/umzugsreinigung). L’incarico lo dà l’amministrazione o la proprietà, non il conduttore uscente.',
      ],
    },
    {
      title: 'Errori frequenti alla riconsegna',
      items: [
        'Far pulire l’appartamento prima del verbale.',
        'Termini generici come «pulizia insufficiente» invece di singole constatazioni.',
        'Fatturare l’usura come danno senza conoscere l’età degli impianti.',
        'Non consegnare il verbale o inviarlo solo giorni dopo.',
        'Non contare le chiavi e non farne firmare la consegna.',
        'Notificare un difetto nascosto solo con la fattura dell’artigiano.',
        'Non conservare il verbale di riconsegna, benché il conduttore successivo possa vederlo.',
      ],
      note: 'L’articolo descrive la situazione giuridica in generale. Per il Suo caso contano contratto e circostanze; in caso di controversia aiutano la Sua associazione e l’autorità di conciliazione del luogo dello stabile.',
    },
  ],
  service: '/leistungen/umzugsreinigung',
  related: ['/blog/pflichtenheft-hauswartung', '/blog/bodenbelaege-grundreinigung'],
  cta: {
    title: 'Pulizia finale per la Sua prossima riconsegna',
    text: 'Per pianificare ci servono indirizzo, data di riconsegna e dimensione dell’appartamento. Se sono previsti più cambi, ad esempio alla fine di un trimestre, li pianifichiamo insieme. Vediamo prima l’appartamento, poi riceve l’offerta scritta, gratuita e senza impegno.',
  },
}

const bodenarten: RatgeberArtikel = {
  path: '/blog/bodenbelaege-grundreinigung',
  h1: 'Pulizia a fondo secondo il pavimento: che cosa sopportano pietra, piastrelle, linoleum e parquet',
  subtitle: 'Perché lo stesso prodotto salva un pavimento e ne intacca un altro, come riconoscere il rivestimento e che cosa chiarire prima dei lavori.',
  teaser: 'pH, fughe, film di cura e rischio di scivolare: conoscenze sui pavimenti per amministrazioni e aziende che pianificano o affidano una pulizia a fondo.',
  updated: '2026-09-28',
  intro: [
    'Una pulizia a fondo non significa strofinare più forte. Rimuove strati accumulati in mesi, con prodotti più energici e con macchine. Proprio per questo può danneggiare un pavimento se prodotto e rivestimento non vanno d’accordo. Questa guida spiega le basi, perché Lei possa pianificare una pulizia a fondo in sicurezza e valutarne il risultato.',
  ],
  summary: {
    title: 'In breve',
    items: [
      'L’acido scioglie il calcare e intacca quindi anche marmo, calcare e fughe cementizie. I prodotti alcalini sciolgono grasso e vecchi film di cura.',
      'Identifichi i rivestimenti sconosciuti prima di una pulizia a fondo o li faccia testare in un punto nascosto.',
      'Il risciacquo conta quanto la pulizia: i residui rendono il pavimento macchiato o scivoloso.',
      'Le istruzioni del fabbricante hanno la precedenza. Chi se ne discosta rischia la garanzia.',
    ],
  },
  sections: [
    {
      title: 'Pulizia corrente, pulizia a fondo, cura, risanamento',
      paragraphs: ['Quattro lavori vengono spesso confusi. Si distinguono per prodotti, frequenza e per chi dovrebbe eseguirli.'],
      definitions: [
        {
          term: 'Pulizia di manutenzione',
          text: 'Rimuove lo sporco sciolto o poco aderente, a secco o a umido. La frequenza dipende dall’uso: l’associazione della pietra naturale indica, secondo lo sporco, ogni giorno, ogni settimana o ogni mese.',
        },
        {
          term: 'Pulizia a fondo',
          text: 'Elimina ciò che si accumula nonostante la manutenzione: film di cura, calcare, grasso, sporco nei pori e nelle fughe. Per la pietra naturale il promemoria dell’associazione indica intervalli da un mese nelle zone molto sporche fino a un anno.',
        },
        {
          term: 'Cura',
          text: 'Un film protettivo, un olio o un polish applicato dopo la pulizia a fondo. I linoleum e vinili recenti hanno di fabbrica un trattamento superficiale; secondo il fabbricante una prima cura supplementare di regola non è necessaria.',
        },
        {
          term: 'Risanamento',
          text: 'Levigare, lucidare, verniciare o oliare di nuovo. È lavoro per un marmista, un parchettista o un posatore, non per la pulizia. La pietra si può levigare solo di pochi millimetri.',
        },
      ],
      sources: [nvs, forboLinoleum, forboVinile],
    },
    {
      title: 'Decide il pH',
      paragraphs: [
        'I detergenti agiscono attraverso il loro pH. I prodotti acidi stanno sotto 7 e sciolgono depositi minerali come calcare, incrostazioni di urina e velo di cemento. I prodotti alcalini stanno sopra 7 e sciolgono grasso, olio e vecchi strati di cura. I prodotti neutri, attorno a 7, sono pensati per la pulizia corrente.',
        'Il problema: marmo, calcare e travertino sono composti in gran parte di calcare. Un acido non distingue il bordo di calcare dalla pietra sottostante, e intacca anche le fughe cementizie. Per questo un anticalcare lascia sul marmo lucidato macchie opache che nessuna pulizia rimuove più.',
        'Anche i prodotti alcalini hanno limiti. Per il linoleum il fabbricante Forbo indica detergenti con pH inferiore a 9 ed esclude le soluzioni fortemente alcaline.',
      ],
      note: 'Prima di una pulizia a fondo chieda quale prodotto, con quale pH, è previsto per quale rivestimento. La risposta va nel capitolato delle prestazioni.',
    },
    {
      title: 'Riconoscere il rivestimento',
      paragraphs: [
        'La fonte più sicura sono i documenti della costruzione: istruzioni di cura dei fabbricanti, verbali di collaudo, fatture dei posatori. Le istruzioni dell’associazione svizzera delle piastrelle Ceruniq prevedono la firma del committente e precisano che una pulizia inadeguata fa decadere la garanzia.',
        'Senza documenti, nessuna supposizione sostituisce una prova. L’associazione della pietra naturale descrive come gli specialisti testano la pietra: un punto grande come un’unghia, in un luogo nascosto, viene levigato e bagnato con qualche goccia di acido. Se fa effervescenza, la pietra è sensibile agli acidi.',
        'Finché la pietra non è identificata, nessun acido va sul pavimento. Ogni nuovo metodo si prova prima in un punto poco visibile.',
      ],
      sources: [ceruniqCeramica],
    },
    {
      title: 'I rivestimenti in sintesi',
      paragraphs: [
        'La tabella riassume ciò che i promemoria delle associazioni professionali svizzere e le istruzioni dei fabbricanti prevedono per la pulizia a fondo. Non sostituisce le istruzioni del Suo pavimento.',
      ],
      tool: {
        kind: 'table',
        id: 'belaege-grundreinigung',
        title: 'Pulizia a fondo e cura secondo il pavimento',
        columns: ['Pavimento', 'Pulizia a fondo', 'Dopo', 'Serve uno specialista se'],
        rows: [
          [
            'Marmo, calcare, travertino',
            'Nessun trattamento acido. Sciogliere grasso e residui di cura con un prodotto neutro o leggermente alcalino, aspirare l’acqua sporca, risciacquare due volte con acqua pulita.',
            'A umido con un prodotto neutro. Niente pad sulle superfici lucidate.',
            'restano punti opachi e ruvidi: la superficie è intaccata e va levigata.',
          ],
          [
            'Granito, gneiss, quarzite, porfido',
            'Tutti i metodi sono possibili, anche prodotti acidi contro il calcare. L’acido cloridrico e l’acido solforico lasciano alterazioni di colore.',
            'A umido con un prodotto neutro.',
            'olio o ruggine sono penetrati in profondità nella pietra.',
          ],
          [
            'Piastrelle e gres porcellanato con fughe cementizie',
            'Bagnare prima, lasciare agire brevemente, spazzolare, raccogliere l’acqua sporca, risciacquare due o tre volte con acqua pulita. Spegnere prima completamente il riscaldamento a pavimento.',
            'Poco prodotto neutro o leggermente alcalino, nessun detergente acido per il bagno nella pulizia corrente.',
            'le fughe si sgretolano, si sfaldano o mancano.',
          ],
          [
            'Piastrelle con fughe epossidiche',
            'Le fughe resistono a molti prodotti chimici e ai detergenti acidi. Fa stato la scheda tecnica del fabbricante delle fughe.',
            'Come le piastrelle con fughe cementizie.',
            'sulle piastrelle resta un velo epossidico: lo rimuove il posatore.',
          ],
          [
            'Linoleum',
            'A macchina con un detergente con pH inferiore a 9, raccogliere l’acqua sporca, risciacquare con acqua pulita. Il trattamento di fabbrica non deve subire danni.',
            'Lavaggio a umido, togliere le tracce di passaggio con il metodo spray, lucidare regolarmente.',
            'la superficie è distrutta: risanamento con un film di cura secondo il fabbricante.',
          ],
          [
            'Vinile e PVC',
            'Decerante per vinile, strofinare a macchina, risciacquare con acqua pulita. Prima di un nuovo rivestimento protettivo il pavimento deve essere privo di residui e completamente asciutto.',
            'Lavaggio a umido con un detergente che il fabbricante ammette per la superficie.',
            'serve un nuovo rivestimento protettivo: due strati secondo il fabbricante.',
          ],
          [
            'Parquet verniciato',
            'Nessuna pulizia a fondo con acqua. Scopa morbida, aspirapolvere o panno appena umido, se necessario con un prodotto neutro. Macchine solo dopo aver consultato il fabbricante.',
            'Curare regolarmente con polish per parquet.',
            'la vernice è consumata: levigare e verniciare di nuovo.',
          ],
          [
            'Parquet oliato',
            'Con i prodotti del sistema d’olio usato, mai a vapore. Panni solo se il fabbricante li ammette per il parquet.',
            'Oliare di nuovo secondo necessità.',
            'le zone di passaggio sono grigie e aperte.',
          ],
        ],
        note: 'Sul parquet i piedi metallici bagnati dei mobili lasciano macchie di ossidazione; li tenga asciutti durante la pulizia a umido. E non mescoli i sistemi: i fabbricanti raccomandano prodotti concepiti per funzionare insieme.',
        sources: [nvs, ceruniqCeramica, ceruniqPrima, forboLinoleum, forboVinile, ispVerniciato, ispOliato],
        printable: true,
        updated: '2026-09-28',
      },
    },
    {
      title: 'Le fughe: il punto più delicato',
      paragraphs: [
        'Le fughe cementizie sono porose, e l’acido le intacca come intacca il calcare. Asciutte, assorbono il prodotto acido, che agisce allora nella fuga invece che in superficie. L’associazione delle piastrelle Ceruniq prescrive quindi di bagnare bene il rivestimento, e soprattutto le fughe, prima di ogni pulizia a fondo.',
        'Le fughe cementizie nere, antracite o colorate sono particolarmente delicate; Ceruniq avverte espressamente dei danni dovuti a una pulizia inadeguata. Le fughe epossidiche invece resistono ampiamente ai detergenti acidi.',
        'Le fughe in silicone di doccia, vasca e cucina contengono antimuffa. Ceruniq raccomanda di pulirle ogni settimana con un prodotto neutro o leggermente alcalino e un panno morbido, e poi di asciugarle. Se la muffa è penetrata nel silicone, l’UFSP consiglia di rimuovere il sigillante e farlo rinnovare da uno specialista.',
      ],
      sources: [ufspMuffa],
    },
    {
      title: 'Risciacquare, asciugare, rischio di scivolare',
      paragraphs: [
        'L’associazione della pietra naturale definisce il risciacquo la cosa più importante di ogni pulizia. Lo sporco sciolto che non viene raccolto del tutto resta semplicemente distribuito in altro modo. Sulle superfici ruvide l’acqua si asciuga negli incavi formando un velo. Per questo l’acqua sporca viene aspirata e il pavimento risciacquato con acqua pulita, spesso più di una volta.',
        'I residui hanno un secondo effetto. Forbo afferma che lo sporco portato all’interno, la frequenza di pulizia e i prodotti usati influiscono in modo determinante sulla resistenza allo scivolamento. Secondo Ceruniq, troppo detergente con additivi di cura può perfino macchiare in modo permanente le piastrelle in ceramica.',
        'Durante i lavori i pavimenti bagnati sono un pericolo di caduta. L’UPI raccomanda cartelli di avvertimento e nastri di sbarramento e di asciugare rapidamente il pavimento. Nel vano scala di uno stabile in locazione significa lavorare a tratti e lasciare sempre libero un passaggio asciutto.',
      ],
      sources: [upiPavimento],
    },
    {
      title: 'Non mescolare mai i prodotti',
      paragraphs: [
        'Chi scioglie il calcare con l’acido e sbianca le macchie con l’acqua di Javel non deve mai usare i due prodotti insieme. L’Ufficio federale della sanità pubblica avverte che l’acqua di Javel mescolata con acidi, anche con anticalcare, libera cloro gassoso tossico. I due prodotti non vanno nemmeno conservati insieme. Questo vale anche per il locale delle pulizie della Sua custodia.',
      ],
      sources: [ufspJavel],
    },
    {
      title: 'Meno sporco, meno pulizie a fondo',
      paragraphs: [
        'La maggior parte dello sporco entra con le scarpe. Per gli ingressi l’UPI raccomanda barriere antisporco il cui tappeto misuri almeno sei passi. Forbo indica per zone tessili di pulizia di 4 a 6 metri una riduzione dello sporco portato all’interno fino all’80 per cento.',
        'A questo si aggiungono semplici misure tratte dalle istruzioni di cura: feltrini sotto le sedie, rotelle morbide sulle sedie da ufficio, sottovasi sotto le piante. Per il parquet l’associazione del parquet raccomanda un clima di 20 a 22 °C con il 35 a 45 per cento di umidità relativa.',
      ],
    },
    {
      title: 'Errori tipici',
      items: [
        'Anticalcare o aceto su marmo e calcare.',
        'Prodotti acidi su fughe cementizie asciutte.',
        'Pulire intensamente solo una parte di un pavimento in pietra naturale: la patina d’uso cambia e si formano zone più chiare e più scure.',
        'Pulitore a vapore sul parquet.',
        'Stendere un nuovo strato di cura su quello vecchio senza prima rimuoverlo.',
        'Molto prodotto e poca acqua nel risciacquo.',
        'Lasciare acceso il riscaldamento a pavimento.',
        'Superfici bagnate senza cartelli di avvertimento.',
      ],
      note: 'La pulizia a fondo come servizio, con una lista di controllo per preparazione e collaudo, è descritta alla pagina [pulizie a fondo e speciali](/leistungen/sonderreinigungen).',
    },
  ],
  service: '/leistungen/sonderreinigungen',
  related: ['/blog/wohnungsabgabe-reinigung', '/blog/reinigungskosten-schweiz'],
  cta: {
    title: 'Pulizia a fondo per i Suoi pavimenti',
    text: 'Ci scriva quali rivestimenti ci sono e dove, e quanto sono grandi le superfici all’incirca. Istruzioni di cura e foto aiutano nella pianificazione. Dopo un appuntamento sul posto calcoliamo i Suoi pavimenti uno per uno, gratuitamente e senza impegno.',
  },
}

const reinigungsfirmaFinden: RatgeberArtikel = {
  path: '/blog/richtige-reinigungsfirma-finden',
  h1: 'Come trovare l’impresa di pulizie giusta?',
  subtitle: 'Quali questioni chiarire prima dell’affidamento, dall’entità del servizio al contratto.',
  teaser: 'Quali questioni chiarire prima dell’affidamento: prestazioni, assicurazione, condizioni di lavoro, controllo della qualità, offerta e contratto. Con griglia di confronto da stampare.',
  updated: '2026-09-28',
  intro: [
    'L’impresa di pulizie che si occupa dei Suoi locali la sceglie di solito per diversi anni. Cambiare richiede tempo, e un cattivo inizio si nota presso la clientela e il personale. Questa guida mostra a che cosa prestare attenzione nella scelta, quali errori costano cari e come rendere confrontabili le offerte.',
  ],
  summary: {
    title: 'In breve',
    items: [
      'Chiarisca innanzitutto le Sue esigenze: quale servizio, con quale frequenza e in quali orari.',
      'Richieda da tre a cinque offerte, ciascuna dopo un sopralluogo.',
      'Confronti prestazioni, ore, assicurazione, condizioni di lavoro e contratto in una griglia.',
      'Chieda del controllo della qualità e della sostituzione e si faccia dare le risposte per iscritto.',
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
          text: 'Una pulizia approfondita a intervalli più lunghi, contro calcare, grasso e vecchi strati di cura. Quali prodotti sopporta ogni pavimento lo spiega la guida [Pulizia a fondo secondo il pavimento](/blog/bodenbelaege-grundreinigung). Il servizio: [Pulizie a fondo e speciali](/leistungen/sonderreinigungen).',
        },
        {
          term: 'Custodia di stabili',
          text: 'La cura di uno stabile al di là della pulizia, ad esempio con giri di controllo, piccole riparazioni e smaltimento. Che cosa comprende lo stabilisce un [capitolato](/blog/pflichtenheft-hauswartung). Maggiori informazioni alla pagina [Custodia di stabili](/leistungen/hauswartung).',
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
          title: 'Controllo della qualità e sostituzione',
          text: 'Chieda chi controlla il lavoro sul posto, con quale frequenza e se riceve il risultato per iscritto. Chieda anche chi pulisce quando la persona fissa è in vacanza o malata, e come viene istruita questa sostituzione. Si faccia descrivere entrambe le cose prima di firmare.',
        },
        {
          title: 'Condizioni di lavoro',
          text: 'Nella Svizzera tedesca le imprese di pulizia con almeno sei dipendenti sono soggette a un contratto collettivo di lavoro di obbligatorietà generale con salari minimi. La commissione paritetica del settore (ZPK) tiene un elenco delle imprese assoggettate. Lo chieda, soprattutto se un’offerta è sorprendentemente bassa.',
        },
        {
          title: 'Valutare correttamente i certificati',
          text: 'I certificati possono dimostrare che i processi sono stati verificati secondo una norma. Chieda norma, ente di certificazione, campo di applicazione e validità. Altrettanto importante è come l’impresa controlla la qualità nel lavoro quotidiano e rimedia ai difetti.',
        },
        {
          title: 'Referenze e valutazioni',
          text: 'Chieda referenze relative a immobili comparabili. Se un colloquio con clienti di riferimento sia possibile dipende dal loro consenso. Verifichi anche le valutazioni online.',
        },
        {
          title: 'Offerta e prezzo',
          text: 'Solo chi ha visto l’immobile può calcolare in modo affidabile. Verifichi che i costi accessori come la trasferta e i prodotti di pulizia siano indicati e che le pulizie speciali siano elencate separatamente. Come nasce un importo mensile lo mostra la guida [Costi della pulizia di manutenzione](/blog/reinigungskosten-schweiz).',
        },
        {
          title: 'Contratto',
          text: 'Durata, termine di disdetta, un eventuale periodo di prova e la regolazione della sostituzione devono figurare nel contratto.',
        },
        {
          title: 'Vicinanza e reperibilità',
          text: 'Chieda quanto rapidamente qualcuno è sul posto in caso di difetto e come può raggiungere il Suo interlocutore.',
        },
      ],
      sources: [zpkCcl],
    },
    {
      title: 'Sette errori che più tardi costano cari',
      items: [
        'Accettare un’offerta senza sopralluogo. Il prezzo spesso non corrisponde all’impegno, e seguono supplementi o tagli nella pulizia.',
        'Confrontare solo la tariffa oraria. Contano le ore per intervento, gli interventi al mese e ciò che è compreso.',
        'Non fissare per iscritto l’entità del servizio. Senza capitolato delle prestazioni manca un metro di paragone in caso di reclamo.',
        'Consegnare chiavi senza elenco. Annoti chi riceve quali chiavi, badge e codici e come sono regolate perdita e restituzione.',
        'Lasciare aperta la sostituzione. Chiarisca chi interviene durante vacanze o malattia e chi istruisce questa persona.',
        'Firmare una lunga durata senza periodo di prova. Durata e termine di disdetta vanno discussi prima della firma.',
        'Non verificare le condizioni di lavoro. Un prezzo sotto i costi salariali va a scapito del personale o della qualità.',
      ],
    },
    {
      title: 'Passo dopo passo verso l’impresa di pulizie',
      ordered: true,
      items: [
        'Chiarire le esigenze: annotare servizio, cadenza, orari e superfici.',
        'Scegliere da tre a cinque fornitori che operano nella Sua regione.',
        'Fissare i sopralluoghi. Senza sopralluogo non c’è un’offerta confrontabile.',
        'Confrontare le offerte nella griglia qui sotto: entità, ore, costi accessori e durata.',
        'Chiarire le questioni aperte, preferibilmente per iscritto.',
        'Chiedere se è possibile una pulizia di prova o un inizio con un periodo di prova.',
        'Concludere il contratto e indicarvi l’interlocutore.',
      ],
    },
    {
      title: 'Domande per il sopralluogo',
      items: [
        'Che cosa è compreso esattamente, e che cosa no?',
        'Con quale frequenza e in quali orari si pulisce?',
        'Quante ore per intervento sono calcolate?',
        'Chi è il mio interlocutore, e come lo raggiungo?',
        'Chi controlla il lavoro sul posto, e con quale frequenza?',
        'Come è regolata la sostituzione in caso di vacanze o malattia?',
        'La Sua impresa è soggetta al contratto collettivo del settore delle pulizie?',
        'Quale assicurazione esiste, con quale copertura?',
        'Come si fattura, e che cosa costa in più?',
      ],
      tool: {
        kind: 'table',
        id: 'vergleichsraster',
        title: 'Griglia di confronto delle offerte',
        intro: 'Da stampare: una riga per punto, una colonna per fornitore. I campi vuoti mostrano dove chiedere ancora.',
        columns: ['Punto', 'Impresa A', 'Impresa B', 'Impresa C'],
        rows: [
          ['Sopralluogo effettuato il', '__________', '__________', '__________'],
          ['Ore per intervento', '__________', '__________', '__________'],
          ['Interventi al mese', '__________', '__________', '__________'],
          ['Importo mensile, IVA compresa', '__________', '__________', '__________'],
          ['Materiale e prodotti compresi', '__________', '__________', '__________'],
          ['Supplementi per sera, notte e fine settimana', '__________', '__________', '__________'],
          ['Controllo sul posto: chi e con quale frequenza', '__________', '__________', '__________'],
          ['Sostituzione durante vacanze e malattia', '__________', '__________', '__________'],
          ['Responsabilità civile con somma assicurata', '__________', '__________', '__________'],
          ['Soggetta al contratto collettivo', '__________', '__________', '__________'],
          ['Durata e termine di disdetta', '__________', '__________', '__________'],
        ],
        note: 'Per ogni colonna moltiplichi le ore per intervento per gli interventi al mese. Il risultato mostra quanto lavoro ogni impresa prevede davvero per il Suo immobile.',
        printable: true,
        updated: '2026-09-28',
      },
    },
    {
      title: `Come ${company.brand} risponde a queste domande`,
      items: [
        'Offerta: per iscritto, dopo aver visto il Suo immobile sul posto.',
        `Risposta alla Sua richiesta: ${responseTime}.`,
        'Assicurazione: responsabilità civile aziendale con una copertura di CHF 10 milioni.',
        'Esperienza: dal 2006, oggi oltre 50 collaboratrici e collaboratori e oltre 120 clienti (dati di settembre 2026).',
        `Lingue della consulenza: ${languagesIt}.`,
        `Zona: i Cantoni di ${cantonListIt}, con tutti i servizi. Maggiori informazioni alla pagina [Zona d’intervento](/einzugsgebiet).`,
      ],
    },
  ],
  service: '/leistungen/unterhaltsreinigung',
  related: ['/blog/reinigungskosten-schweiz', '/blog/pflichtenheft-hauswartung'],
  cta: {
    title: 'Offerta sul posto',
    text: 'Metta la nostra offerta accanto alle altre. Ci indichi immobile, superficie, cadenza e orari, passiamo da Lei e calcoliamo per il Suo immobile. Per questo non chiediamo nulla, e Lei non assume alcun impegno.',
  },
}

const kosten: RatgeberArtikel = {
  path: '/blog/reinigungskosten-schweiz',
  h1: 'Costi della pulizia di manutenzione: come nasce il prezzo',
  subtitle: 'Da che cosa dipende l’importo mensile, come si calcola un’offerta e che cosa devono sapere le amministrazioni sulle spese accessorie.',
  teaser: 'Fattori di costo, calcolo e salari come soglia minima: come leggere e confrontare le offerte per la pulizia di manutenzione.',
  updated: '2026-09-28',
  intro: [
    'Questa guida riguarda la [pulizia di manutenzione](/leistungen/unterhaltsreinigung), cioè la pulizia regolare di stabili, uffici e superfici commerciali. Non indica prezzi, ma mostra di che cosa si compone un prezzo, perché Lei possa leggere le offerte e confrontarle in modo equo.',
  ],
  summary: {
    title: 'In breve',
    items: [
      'L’importo dipende dalle ore per intervento, dal numero di interventi e dalla tariffa oraria, più materiale, supplementi e IVA.',
      'Le ore dipendono da superficie, rivestimenti, utilizzo e orari. Senza vedere l’immobile non si possono stimare in modo affidabile.',
      'Un contratto collettivo di obbligatorietà generale fissa una soglia minima per i salari. Le offerte molto basse meritano un esame attento.',
      'Confronti l’importo mensile e le ore calcolate, non solo la tariffa oraria.',
    ],
  },
  sections: [
    {
      title: 'I fattori di costo',
      definitions: [
        { term: 'Superficie e tipi di locali', text: 'Dimensioni, pavimenti, servizi igienici e superfici vetrate determinano il tempo necessario.' },
        {
          term: 'Cadenza',
          text: 'Con una pulizia frequente l’impegno per intervento spesso diminuisce, ma aumenta il numero di interventi. Conta ciò che alla fine si paga al mese.',
        },
        { term: 'Utilizzo', text: 'Ingressi molto frequentati, cucine e servizi igienici richiedono più tempo dei locali poco usati.' },
        {
          term: 'Orari d’intervento',
          text: 'Gli interventi di sera, di notte o nel fine settimana possono costare di più. Per il lavoro notturno solo temporaneo la legge sul lavoro prescrive un supplemento salariale di almeno il 25 per cento (art. 17b LL). Chieda se i supplementi sono compresi nell’importo mensile.',
        },
        {
          term: 'Prestazioni supplementari',
          text: 'Materiale di consumo, pulizia dei vetri o una [pulizia a fondo](/leistungen/sonderreinigungen) prima dell’inizio possono essere indicati separatamente.',
        },
        {
          term: 'Condizioni di lavoro',
          text: 'La pulizia è lavoro manuale, la maggior parte dei costi sono salari. Come questi sono limitati verso il basso lo mostra la sezione seguente.',
        },
      ],
      sources: [ll],
    },
    {
      title: 'I salari come soglia minima',
      paragraphs: [
        'Nei Cantoni di Lucerna, Zugo, Argovia, Nidvaldo e Obvaldo le imprese di pulizia con almeno sei dipendenti sono soggette al contratto collettivo di lavoro del settore delle pulizie della Svizzera tedesca, dichiarato di obbligatorietà generale. Fissa salari minimi per ogni categoria e vale fino alla fine del 2029. Alcune disposizioni valgono anche per le imprese più piccole.',
        'Al salario si aggiungono assicurazioni sociali, vacanze, trasferta, materiale, apparecchi e la direzione degli interventi. Un’offerta la cui tariffa oraria supera appena il salario minimo non può coprire questi costi. In tal caso chieda come è stata calcolata.',
        'Il rispetto del contratto è controllato dalla commissione paritetica del settore (ZPK), ad esempio con controlli dei libri paga. Sul suo sito pubblica i salari minimi e i supplementi nel testo del contratto.',
      ],
      sources: [zpkCcl, zpkContenuto],
    },
    {
      title: 'Come si calcola un’offerta',
      paragraphs: [
        'Le ore per intervento derivano da superficie, tipi di locali, pavimenti e utilizzo. Per questo un’impresa seria vede l’immobile prima di calcolare. Il resto è una moltiplicazione.',
      ],
      tool: {
        kind: 'table',
        id: 'rechenweg',
        title: 'Dall’intervento all’importo mensile',
        intro: 'L’esempio calcola solo in ore, non in prezzi. Inserisca i valori delle Sue offerte.',
        columns: ['Elemento', 'Da che cosa dipende', 'Esempio'],
        rows: [
          ['Ore per intervento', 'Superficie, tipi di locali, pavimenti, utilizzo', '3 ore'],
          ['× interventi al mese', 'Cadenza, ad esempio due volte alla settimana', '8,7 interventi'],
          ['= ore al mese', 'Base di ogni confronto', 'circa 26 ore'],
          ['× tariffa oraria', 'Salari, oneri sociali, direzione, trasferta', 'valore del fornitore'],
          ['+ materiale e prodotti', 'Separati o compresi nella tariffa', 'secondo l’offerta'],
          ['+ supplementi', 'Sera, notte, domenica', 'nessuno per il lavoro diurno'],
          ['+ IVA', 'Aliquota normale dell’8,1 per cento (art. 25 LIVA)', 'sul totale'],
          ['= importo mensile', 'La cifra che confronta', 'somma delle righe'],
        ],
        note: 'Due volte alla settimana danno 104 interventi all’anno, divisi per dodici mesi poco più di 8,7 interventi. Chi calcola con quattro settimane al mese arriva a 8 interventi e sottostima le ore di circa l’8 per cento.',
        sources: [liva],
        printable: true,
        updated: '2026-09-28',
      },
    },
    {
      title: 'Perché non pubblichiamo prezzi online',
      paragraphs: [
        'Due immobili con la stessa superficie possono comportare un impegno molto diverso, a seconda di pavimento, utilizzo e accesso. Un prezzo senza sopralluogo sarebbe quindi troppo alto oppure in seguito non corrisponderebbe. Per questo riceve la nostra cifra per iscritto, calcolata per il Suo immobile.',
      ],
    },
    {
      title: 'Confrontare le offerte',
      paragraphs: ['Un’offerta confrontabile indica almeno:'],
      items: [
        'quali locali e attività sono compresi',
        'cadenza e orari d’intervento',
        'le ore calcolate per intervento',
        'materiale di consumo e prodotti di pulizia',
        'eventuali supplementi e costi accessori come la trasferta',
        'durata e termine di disdetta',
      ],
      note: 'Una griglia da stampare si trova nella guida [Come trovare l’impresa di pulizie giusta?](/blog/richtige-reinigungsfirma-finden#vergleichsraster).',
    },
    {
      title: 'Per le amministrazioni: la pulizia nelle spese accessorie',
      paragraphs: [
        'I costi di pulizia del vano scala e delle parti comuni possono essere addebitati ai conduttori solo se il contratto di locazione li prevede specialmente come spese accessorie (art. 257a cpv. 2 CO). Chieda quindi offerte e fatture che indichino la pulizia per stabile. Come funziona il conteggio è spiegato alla pagina [pulizia di manutenzione](/leistungen/unterhaltsreinigung).',
      ],
      sources: [co('257_a', 'art. 257a')],
    },
    {
      title: `Come ottenere la Sua offerta da ${company.brand}`,
      ordered: true,
      items: [
        `Ci scrive o ci chiama e indica immobile, superficie e cadenza desiderata. Riceve una risposta ${responseTime}.`,
        'Percorriamo l’immobile con Lei e annotiamo locali, pavimenti e orari.',
        'Poi calcoliamo e Le inviamo l’offerta per iscritto.',
      ],
      note: `Per la trasferta valgono le stesse condizioni in tutti i Cantoni di ${cantonListIt}.`,
    },
  ],
  service: '/leistungen/unterhaltsreinigung',
  related: ['/blog/richtige-reinigungsfirma-finden', '/blog/bodenbelaege-grundreinigung'],
  cta: {
    title: 'Un’offerta per la Sua pulizia di manutenzione',
    text: 'Ci indichi indirizzo, superficie, utilizzo e cadenza desiderata, per gli stabili anche il numero dei vani scala. Dopo il sopralluogo calcoliamo con i Suoi dati, gratuitamente e senza impegno.',
  },
}

/** Articoli nell’ordine della panoramica /blog, stesse chiavi di content/de/ratgeber.ts */
export const ratgeber = { pflichtenheft, wohnungsabgabe, bodenarten, reinigungsfirmaFinden, kosten }

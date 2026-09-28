import { company } from '../../shared/company'
import type { Step } from '../types'

/**
 * Testi comuni delle pagine dei servizi in italiano (M29, M60). Stesse chiavi
 * della versione tedesca (content/de/common.ts).
 */

/** Tempo di risposta, cantoni e lingue in italiano (non usare gli helper tedeschi) */
export const responseTime = 'entro 24 ore nei giorni feriali'
export const cantonListIt = 'Lucerna, Zugo, Argovia, Nidvaldo e Obvaldo'
export const languagesIt = 'tedesco, inglese, francese e italiano'
/** Registro di commercio in italiano */
export const registerIt = 'Registro di commercio del Cantone di Lucerna'

/** Riga sopra il titolo principale delle pagine premium */
export const premiumLine = company.premiumBrand ? `${company.premiumBrand} · Linea premium di ${company.brand}` : 'Premium'

/** Marchio nel titolo delle pagine premium */
export const premiumTitleBrand = company.premiumBrand ? `${company.premiumBrand} di ${company.brand}` : company.brand

export const ui = {
  offerCta: 'Richiedere un’offerta gratuita',
  toService: 'Vai al servizio',
  atAGlance: 'In sintesi',
  notIncluded: 'Non compreso in questo servizio',
  steps: 'Come si svolge',
  faq: 'Domande frequenti',
  related: 'Potrebbe interessarLe anche',
  onThisPage: 'In questa pagina',
  premiumLine,
  factArea: 'Zona',
  factAreaValue: `Cantoni di ${cantonListIt}`,
  factOffer: 'Offerta',
  factOfferValue: 'Gratuita e senza impegno, dopo un sopralluogo',
  factAnswer: 'Risposta',
  factAnswerValue: responseTime.charAt(0).toUpperCase() + responseTime.slice(1),
}

/**
 * I primi due passi sono uguali per tutti i servizi: richiesta al gerente
 * (R5d) e offerta dopo il sopralluogo (N014, R3e).
 */
export const steps = {
  anfrage: {
    title: 'Richiesta',
    text: `Ci telefoni o ci scriva. La Sua richiesta è trattata personalmente dal gerente; riceverà nostre notizie ${responseTime}.`,
  },
  besichtigung: {
    title: 'Sopralluogo e offerta',
    text: 'Visitiamo l’immobile e chiariamo con Lei l’entità del lavoro e gli orari. In seguito riceve un’offerta scritta, gratuita e senza impegno.',
  },
} satisfies Record<string, Step>

/** Risposte uguali su più pagine (E18, R3e, E30, E44) */
export const answers = {
  kosten:
    'Dipende da ciò che va pulito e dall’impegno richiesto. Per questo indichiamo i prezzi solo nell’offerta, dopo aver visto tutto sul posto. Sopralluogo e offerta sono gratuiti e senza impegno.',
  // Kosten pro Stunde oder Fläche: Einflussfaktoren ohne Preise und Zahlen (E18)
  kostenFaktoren:
    'Un prezzo all’ora o al metro quadrato da solo dice poco, perché l’impegno dipende dall’immobile: superficie e tipo dei locali, il loro stato, il ritmo, gli orari d’intervento, l’accesso e chi fornisce il materiale di consumo e i prodotti di pulizia. Per questo indichiamo i prezzi solo nell’offerta. Facciamo il sopralluogo gratuitamente e poi Le inviamo l’offerta per iscritto. Maggiori informazioni nella guida: [Da che cosa dipendono i costi di una pulizia di manutenzione](/blog/reinigungskosten-schweiz).',
  gebiet: `Nell’intero territorio dei Cantoni di ${cantonListIt}, con tutti i servizi e ovunque alle stesse condizioni. Maggiori informazioni alla pagina [Zona d’intervento](/einzugsgebiet).`,
  versicherung: 'Sì. Disponiamo di un’assicurazione di responsabilità civile aziendale con una copertura di CHF 10 milioni.',
  mittel: 'Sì, su richiesta puliamo con prodotti ecologici. Ce lo dica in occasione del sopralluogo.',
  sprachen: `Le nostre collaboratrici e i nostri collaboratori parlano ${languagesIt}.`,
}

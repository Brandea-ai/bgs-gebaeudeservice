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

/** Riga sopra il titolo principale delle pagine premium */
export const premiumLine = company.premiumBrand ? `${company.premiumBrand} · Linea premium di ${company.brand}` : 'Premium'

/** Marchio nel titolo delle pagine premium */
export const premiumTitleBrand = company.premiumBrand ? `${company.premiumBrand} di ${company.brand}` : company.brand

export const ui = {
  offerCta: 'Richiedere un’offerta gratuita',
  atAGlance: 'In sintesi',
  notIncluded: 'Non compreso in questo servizio',
  steps: 'Come si svolge',
  faq: 'Domande frequenti',
  related: 'Potrebbe interessarLe anche',
  premiumLine,
  factArea: 'Zona',
  factAreaValue: `Cantoni ${cantonListIt}`,
  factOffer: 'Offerta',
  factOfferValue: 'Gratuita e senza impegno, dopo un sopralluogo',
  factAnswer: 'Risposta',
  factAnswerValue: responseTime.charAt(0).toUpperCase() + responseTime.slice(1),
}

/**
 * I primi due passi sono uguali per tutti i servizi: richiesta al direttore
 * (R5d) e offerta dopo il sopralluogo (N014, R3e).
 */
export const steps = {
  anfrage: {
    title: 'Richiesta',
    text: `Ci telefoni o ci scriva. La Sua richiesta è trattata personalmente dal direttore; riceverà nostre notizie ${responseTime}.`,
  },
  besichtigung: {
    title: 'Sopralluogo e offerta',
    text: 'Visitiamo l’oggetto sul posto e chiariamo con Lei entità del lavoro e orari. In seguito riceve un’offerta scritta, gratuita e senza impegno.',
  },
} satisfies Record<string, Step>

/** Risposte uguali su più pagine (E18, R3e, E30, E44) */
export const answers = {
  kosten:
    'Dipende dall’oggetto e dall’impegno richiesto. Per questo indichiamo i prezzi solo nell’offerta, dopo aver visto l’oggetto. Sopralluogo e offerta sono gratuiti e senza impegno.',
  gebiet: `Nell’intero territorio dei Cantoni ${cantonListIt}, con tutti i servizi e ovunque alle stesse condizioni. Maggiori informazioni alla pagina [Zona d’intervento](/einzugsgebiet).`,
  versicherung: 'Sì. Disponiamo di un’assicurazione di responsabilità civile aziendale con una copertura di CHF 10 milioni.',
  mittel: 'Sì, su richiesta puliamo con prodotti ecologici. Ce lo dica in occasione del sopralluogo.',
  sprachen: `Le nostre collaboratrici e i nostri collaboratori parlano ${languagesIt}.`,
}

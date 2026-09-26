import { company, premiumLabel } from '../../shared/company'
import type { PagePath } from '../../shared/seo'
import type { Step } from '../types'
import type { Dictionary } from '../de'
import { answers, cantonList, languageList, premiumLine, register, responseTime, steps } from './common'

/**
 * Textes de la page d’accueil, de « À propos », du contact, de la zone
 * d’intervention et des deux aperçus en français (M60). Traduction fidèle de
 * content/de/seiten.ts, uniquement des affirmations attestées (E18).
 */

type Card = { title: string; text: string }
type LinkCard = Card & { path: PagePath }
type Seiten = Dictionary['seiten']

/** Chiffres attestés (E18, état septembre 2026) */
export const proof = [
  { value: 'Depuis 2006', label: 'D’expérience en nettoyage et conciergerie' },
  { value: 'Plus de 120', label: 'Clients' },
  { value: 'Plus de 50', label: 'Collaboratrices et collaborateurs, quatre langues' },
  { value: 'CHF 10 millions', label: 'Responsabilité civile d’entreprise' },
]

/** Déroulement jusqu’à la première intervention, identique sur l’accueil et le contact */
const offerSteps: Step[] = [
  steps.anfrage,
  steps.besichtigung,
  {
    title: 'Début',
    text: 'Avec votre accord, nous fixons la première intervention et convenons avec vous des horaires et de l’accès.',
  },
]

export const home = {
  eyebrow: `Nettoyage et conciergerie depuis ${company.address.city}`,
  h1: 'Nettoyage de bâtiments et conciergerie pour Lucerne, Zoug et environs',
  lead: 'Pour les entreprises, les gérances et une clientèle privée exigeante. Nous passons chez vous pour un devis gratuit et sans engagement.',
  proofTitle: 'En bref',
  services: {
    title: 'Nos prestations',
    intro: 'Nettoyage de bâtiments et conciergerie pour entreprises et immeubles, ainsi que des nettoyages pour des exigences particulières.',
    groups: [
      {
        key: 'reinigung',
        title: 'Nettoyage',
        text: 'Pour immeubles, bureaux, cabinets et surfaces commerciales.',
        items: ['Nettoyage d’entretien et de bureaux', 'Nettoyages spéciaux et de chantier', 'Vitres et façades', 'Industrie et halles'],
        link: { path: '/leistungen', text: 'Toutes les prestations' },
      },
      {
        key: 'hauswartung',
        title: 'Conciergerie et entretien',
        text: 'Pour les gérances, les propriétaires et les entreprises qui confient le suivi de leur immeuble.',
        items: ['Conciergerie', 'Entretien des extérieurs et des espaces verts', 'Facility services'],
        link: { path: '/leistungen/hauswartung', text: 'Vers la conciergerie' },
      },
      {
        key: 'premium',
        title: premiumLabel,
        text: 'Des nettoyages pour des exigences particulières, en toute discrétion et dans votre langue.',
        items: ['Villas, lofts et biens de prestige', 'Jets privés', 'Yachts'],
        link: { path: '/premium', text: 'Vers l’offre Premium' },
      },
    ] satisfies (Card & { key: string; items: string[]; link: { path: PagePath; text: string } })[],
  },
  steps: { title: 'Comment obtenir votre devis', items: offerSteps },
  area: {
    title: 'Notre zone d’intervention',
    text: `Depuis notre siège à ${company.address.city}, nous intervenons dans les cantons de ${cantonList}. Nous proposons toutes nos prestations dans toute la zone.`,
    link: 'Vers la zone d’intervention',
  },
  cta: {
    title: 'Un devis pour votre bien',
    text: `Décrivez-nous brièvement le bien et votre demande. Nous vous répondons ${responseTime} et passons pour la visite.`,
  },
}

export const about = {
  h1: `Nettoyage et conciergerie depuis ${company.address.city}`,
  imageAlt: 'Notre équipe au travail',
  lead: `Depuis 2006, nous sommes actifs dans le nettoyage et la conciergerie. Aujourd’hui, plus de 50 collaboratrices et collaborateurs s’occupent de plus de 120 clients dans les cantons de ${cantonList}, en ${languageList}.`,
  promises: {
    title: 'Ce sur quoi vous pouvez compter',
    items: [
      { title: 'Un suivi personnel', text: 'Notre directeur traite personnellement votre demande.' },
      { title: 'Un devis après visite', text: 'Nous n’indiquons un prix qu’après avoir vu votre bien. La visite et le devis sont gratuits et sans engagement.' },
      { title: 'Dans toute la zone', text: `Toutes nos prestations dans les cantons de ${cantonList}, partout aux mêmes conditions.` },
      { title: 'Assurés', text: answers.versicherung.replace('Oui. ', '') },
      { title: 'Quatre langues', text: answers.sprachen },
      { title: 'Produits respectueux de l’environnement', text: 'Sur demande, nous nettoyons avec des produits respectueux de l’environnement.' },
    ] satisfies Card[],
  },
  contact: {
    title: 'Votre interlocuteur',
    text: `Notre directeur traite personnellement votre demande. Nous vous répondons ${responseTime}.`,
  },
  // Le type allemand reprend la valeur littérale de company.register, le texte français la remplace
  register: { title: 'Données du registre', court: register as Seiten['about']['register']['court'] },
  statsLabel: 'En chiffres',
  cta: {
    title: 'Faisons connaissance',
    text: 'Lors de la visite, nous examinons votre bien et clarifions l’étendue des prestations et les horaires. Vous recevez ensuite un devis écrit.',
  },
}

export const contact = {
  h1: 'Contact et devis',
  lead: `Appelez-nous ou écrivez-nous. Nous vous répondons ${responseTime}.`,
  formLink: 'Vers le formulaire de contact',
  channelsLabel: 'Moyens de contact',
  phone: { title: 'Téléphone', text: 'Fixe et mobile', mobile: 'Mobile' },
  email: { title: 'E-mail', text: 'Écrivez-nous un message' },
  address: { title: 'Adresse', text: 'Notre siège' },
  steps: { title: 'De la demande à la première intervention', items: offerSteps },
  map: {
    title: 'Comment nous trouver',
    text: `Siège à ${company.address.city}. Nous intervenons dans les cantons de ${cantonList}.`,
  },
  faq: [
    {
      question: 'En combien de temps vais-je recevoir un devis ?',
      answer: `Nous vous répondons ${responseTime} et convenons d’un rendez-vous pour la visite. Vous recevez ensuite le devis par écrit.`,
    },
    { question: 'Combien coûte le nettoyage ?', answer: `${answers.kosten} Plus d’informations dans nos conseils : [Ce qui détermine le coût d’un nettoyage d’entretien](/blog/reinigungskosten-schweiz).` },
    { question: 'Dans quelles régions intervenez-vous ?', answer: answers.gebiet },
    { question: 'Êtes-vous assurés ?', answer: answers.versicherung },
    { question: 'Acceptez-vous aussi des interventions à bref délai ?', answer: 'Appelez-nous. Nous voyons avec vous ce qui est possible à bref délai.' },
  ],
  cta: {
    title: 'Prêt pour votre devis ?',
    text: `Le formulaire se trouve au bas de chaque page. Nous vous répondons ${responseTime}.`,
  },
}

export const area = {
  h1: `Zone d’intervention : ${cantonList}`,
  lead: `Depuis notre siège à ${company.address.city}, nous intervenons dans cinq cantons. Nous proposons toutes nos prestations dans toute la zone, aux entreprises comme à une clientèle privée exigeante.`,
  cantonsTitle: 'Cantons',
  cantonLabels: ['Canton de Lucerne', 'Canton de Zoug', 'Canton d’Argovie', 'Canton de Nidwald', 'Canton d’Obwald'],
  seatTitle: 'Siège et contact',
  places: {
    title: 'Rives des lacs et lieux de villégiature',
    text: 'Nous sommes aussi à votre service sur les rives des lacs et dans les lieux de villégiature de la région, par exemple pour des villas, des résidences secondaires et des hôtels. Pour des exigences particulières, nous proposons notre [offre Premium](/premium).',
    groups: [
      { title: 'Au bord du lac des Quatre-Cantons', items: ['Lucerne', 'Horw', 'Meggen', 'Weggis', 'Vitznau', 'Hergiswil', 'Stansstad', 'Ennetbürgen'] },
      { title: 'Au bord des lacs de Zoug et d’Ägeri', items: ['Zoug', 'Cham', 'Risch', 'Hünenberg', 'Walchwil', 'Baar', 'Oberägeri'] },
      { title: 'Au bord des lacs de Sempach et de Hallwil', items: ['Eich', 'Meisterschwanden'] },
      { title: 'Région de Baden et du Mutschellen', items: ['Ennetbaden', 'Bergdietikon', 'Oberwil-Lieli'] },
      { title: 'À la montagne', items: ['Engelberg'] },
    ],
  },
  cta: {
    title: 'Votre bien se trouve-t-il dans notre zone ?',
    text: `Décrivez-nous le bien et le lieu. Nous passons pour un devis gratuit et sans engagement et vous répondons ${responseTime}.`,
  },
}

export const servicesOverview = {
  h1: 'Prestations : nettoyage et conciergerie',
  lead: `Choisissez selon votre besoin. Nous proposons toutes nos prestations dans les cantons de ${cantonList}. Pour un devis, nous passons gratuitement et sans engagement.`,
  groups: [
    {
      title: 'Nettoyage régulier',
      text: 'Pour immeubles, bureaux et surfaces commerciales, selon une fréquence fixe.',
      items: [
        { title: 'Nettoyage d’entretien', path: '/leistungen/unterhaltsreinigung', text: 'Nettoyage régulier d’immeubles et de surfaces commerciales, service de réapprovisionnement compris.' },
        { title: 'Nettoyage de bureaux et de cabinets', path: '/leistungen/bueroreinigung', text: 'Nettoyage de bureaux et de cabinets, en fonction de vos horaires de travail.' },
      ],
    },
    {
      title: 'Nettoyage ponctuel et spécial',
      text: 'Pour la construction, le déménagement, les surfaces vitrées et la production.',
      items: [
        { title: 'Nettoyages spéciaux', path: '/leistungen/sonderreinigungen', text: 'Nettoyage en profondeur ainsi que nettoyage de fin de bail et nettoyage final d’appartement avec garantie de remise.' },
        { title: 'Nettoyage de chantier et de fin de chantier', path: '/leistungen/baureinigung', text: 'Nettoyage pendant et après des travaux de construction ou de transformation.' },
        { title: 'Nettoyage de vitres et de façades', path: '/leistungen/fenster-und-fassadenreinigung', text: 'Fenêtres, surfaces vitrées et façades, aussi à haute pression.' },
        { title: 'Nettoyage industriel et de halles', path: '/leistungen/industrie-und-hallenreinigung', text: 'Halles de production et entrepôts, machines et installations.' },
      ],
    },
    {
      title: 'Suivi d’immeubles',
      text: 'Pour les gérances, les propriétaires et les entreprises qui veulent tout d’un seul prestataire.',
      items: [
        { title: 'Conciergerie', path: '/leistungen/hauswartung', text: 'Rondes de contrôle, cage d’escalier, buanderie, petites réparations, technique du bâtiment, états des lieux, élimination des déchets et abords.' },
        { title: 'Entretien des extérieurs et des espaces verts', path: '/leistungen/aussen-und-gruenflaechenpflege', text: 'Entretien des abords et des espaces verts de votre immeuble.' },
        { title: 'Facility services', path: '/leistungen/facility-services', text: 'Plusieurs prestations dans un seul contrat, avec un seul interlocuteur.' },
      ],
    },
  ] satisfies { title: string; text: string; items: LinkCard[] }[],
  premium: {
    title: 'Villas, jets privés ou yachts ?',
    text: 'Pour des exigences particulières, nous proposons notre offre Premium.',
    link: 'Vers l’offre Premium',
  },
  cta: {
    title: 'Vous ne savez pas exactement ce dont vous avez besoin ?',
    text: `Décrivez-nous le bien et votre demande. Nous passons chez vous, clarifions l’étendue avec vous et vous répondons ${responseTime}.`,
  },
}

// Le type allemand fige les textes des engagements (as const), le texte français les remplace
const promises = [
  { key: 'persoenlich', title: 'Un suivi personnel', text: 'Notre directeur traite personnellement votre demande.' },
  { key: 'diskret', title: 'Discrétion', text: 'Sur demande, nous signons un accord de confidentialité.' },
  { key: 'teams', title: 'Des équipes fixes', text: 'Chez vous, c’est toujours la même équipe qui travaille.' },
  { key: 'personal', title: 'Du personnel vérifié', text: 'Les personnes qui interviennent chez vous ont été vérifiées par nos soins.' },
  { key: 'schluessel', title: 'Clés et alarme', text: 'Selon des règles fixes, convenues avec vous.' },
  { key: 'zeiten', title: 'À vos horaires', text: 'Aussi le soir, le week-end et pendant votre absence.' },
  { key: 'material', title: 'Connaissance des matériaux', text: 'Pierre naturelle, parquet et surfaces laquées brillantes, pour les bateaux teck, gelcoat et sellerie.' },
  { key: 'sprachen', title: 'Quatre langues', text: 'Allemand, anglais, français et italien.' },
  { key: 'versichert', title: 'Assurés', text: 'Responsabilité civile d’entreprise avec une couverture de CHF 10 millions.' },
  { key: 'offerte', title: 'Devis sur place', text: 'Gratuit et sans engagement, après une visite.' },
] as const

export const premiumOverview = {
  line: premiumLine,
  h1: 'Des nettoyages pour des exigences particulières',
  lead: 'Pour les villas et les résidences, les résidences secondaires, les hôtels aux souhaits particuliers, les family offices, les jets privés et les yachts. Discrets, soigneux et dans votre langue.',
  nameMeaning: company.premiumBrand
    ? `Le nom ${company.premiumBrand} vient du latin « clavis », la clé. Vous nous confiez votre maison, nous en prenons soin comme si c’était la nôtre.`
    : null,
  offers: [
    { title: 'Biens de prestige', path: '/premium/luxusimmobilien', text: 'Villas, lofts et résidences, régulièrement ou avant des occasions particulières, avec l’entretien des matériaux délicats.' },
    { title: 'Jet privé', path: '/premium/privatjet', text: 'Nettoyage de cabine dans le respect des matériaux haut de gamme, en accord avec vous.' },
    { title: 'Yacht', path: '/premium/yacht', text: 'Nettoyage de bateaux et de yachts sur le lac des Quatre-Cantons et le lac de Zoug.' },
  ] satisfies LinkCard[],
  moreTitle: 'Également pour',
  more: [
    { title: 'Résidences secondaires et résidences de standing', text: 'Nettoyage avant votre arrivée et après votre départ, rondes de contrôle pendant votre absence.' },
    { title: 'Hôtels', text: 'Nettoyages spéciaux et en profondeur, interventions avant une ouverture et après des rénovations.' },
    { title: 'Bureaux et family offices', text: 'En toute confidentialité, en dehors de vos heures de travail, avec des équipes fixes.' },
    { title: 'Pièces abritant des œuvres d’art et des antiquités', text: 'Nettoyage soigneux des pièces, les œuvres d’art uniquement avec votre accord.' },
    { title: 'Réceptions privées', text: 'Nettoyage avant et après la réception, aussi le week-end.' },
    { title: 'Courtiers et gérances', text: 'Nettoyage à bref délai avant une vente, une séance photo ou une remise.' },
  ] satisfies Card[],
  promisesTitle: 'Ce sur quoi vous pouvez compter',
  promises: promises as unknown as Seiten['premiumOverview']['promises'],
  places: {
    title: 'Où nous sommes à votre service',
    text: `Au bord du lac des Quatre-Cantons, de Lucerne et Meggen jusqu’à Weggis, Vitznau, Hergiswil et Ennetbürgen, au bord des lacs de Zoug et d’Ägeri, de Zoug et Walchwil jusqu’à Oberägeri, à Engelberg et dans l’ensemble des cantons de ${cantonList}. [Vers la zone d’intervention](/einzugsgebiet)`,
  },
  cta: {
    title: 'Demande discrète',
    text: `Appelez-nous ou écrivez-nous. Notre directeur traite personnellement votre demande, sur demande en toute confidentialité. Nous vous répondons ${responseTime}.`,
  },
}

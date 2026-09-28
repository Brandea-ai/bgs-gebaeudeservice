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
  { value: 'Depuis 2006', label: 'Expérience en nettoyage et en conciergerie' },
  { value: 'Plus de 120', label: 'Clients' },
  { value: 'Plus de 50', label: 'Collaboratrices et collaborateurs, quatre langues' },
  { value: 'CHF 10 millions', label: 'Responsabilité civile d’entreprise' },
]

/** Déroulement jusqu’à la première intervention, identique sur l’accueil et le contact (quatre étapes, une vidéo chacune) */
const offerSteps: Step[] = [
  steps.anfrage,
  steps.besichtigung,
  {
    title: 'Accord',
    text: 'Vous examinez le devis en toute tranquillité. Avec votre accord, il est établi quelles prestations nous fournissons, à quelle fréquence et à quels horaires.',
  },
  {
    title: 'Début',
    text: 'Nous fixons la première intervention et convenons avec vous des horaires et de l’accès, par exemple avec une clé ou un badge.',
  },
]

/** Questions identiques sur l’accueil et le contact (E18) */
const faq = {
  schnell: {
    question: 'En combien de temps vais-je recevoir un devis ?',
    answer: `Nous vous répondons ${responseTime} et convenons d’un rendez-vous pour la visite. Vous recevez ensuite le devis par écrit.`,
  },
  kosten: {
    question: 'Combien coûte le nettoyage ?',
    answer: `${answers.kosten} Plus d’informations dans notre guide : [Ce qui détermine le coût d’un nettoyage d’entretien](/blog/reinigungskosten-schweiz).`,
  },
  gebiet: { question: 'Dans quelles régions intervenez-vous ?', answer: answers.gebiet },
  versichert: { question: 'Êtes-vous assurés ?', answer: answers.versicherung },
  kurzfristig: {
    question: 'Acceptez-vous aussi des interventions à bref délai ?',
    answer: 'Appelez-nous. Nous voyons avec vous ce qui est possible à bref délai.',
  },
}

export const home = {
  eyebrow: `Nettoyage et conciergerie depuis ${company.address.city}`,
  h1: 'Nettoyage de bâtiments et conciergerie à Lucerne, Zoug et environs',
  lead: 'Des immeubles, des bureaux et des halles propres et entretenus, sans que vous ayez à vous en occuper. Pour les entreprises, les gérances et une clientèle privée exigeante. Nous examinons votre bien et vous remettons un devis écrit.',
  proofTitle: 'En bref',
  services: {
    title: 'Nos prestations',
    intro: 'Nettoyage régulier, interventions ponctuelles et suivi d’immeubles entiers. Choisissez selon votre besoin, nous précisons l’étendue lors de la visite.',
    all: 'Toutes les prestations en bref',
    premium: {
      title: premiumLabel,
      text: 'Des nettoyages pour des exigences particulières, en toute discrétion et dans votre langue : villas, lofts et résidences, jets privés et yachts, ainsi qu’hôtels et family offices.',
      link: 'Vers l’offre Premium',
    },
  },
  audiences: {
    title: 'Pour qui nous travaillons',
    intro: 'Quatre groupes de clients aux attentes différentes. Voici ce que vous y gagnez concrètement.',
    items: [
      {
        key: 'verwaltungen' as const,
        title: 'Gérances et propriétaires par étages',
        text: 'Vous gérez des immeubles et avez besoin de quelqu’un sur place pour veiller à tout.',
        points: [
          'Cage d’escalier, entrée et abords entretenus selon une fréquence fixe',
          'Rondes de contrôle au cours desquelles nous vous signalons les défauts',
          'Nettoyage de fin de bail avec garantie de remise lors d’un changement de locataire',
        ],
        link: { path: '/leistungen/hauswartung' as PagePath, text: 'Vers la conciergerie' },
      },
      {
        key: 'unternehmen' as const,
        title: 'Entreprises',
        text: 'Bureaux, cabinets, commerces et production restent propres, sans que le nettoyage perturbe votre activité.',
        points: [
          'Horaires d’intervention adaptés à vos heures de travail et d’ouverture',
          'Service de réapprovisionnement des consommables',
          'Sur demande, nettoyage, conciergerie et abords dans un seul contrat',
        ],
        link: { path: '/leistungen/bueroreinigung' as PagePath, text: 'Vers le nettoyage de bureaux' },
      },
      {
        key: 'privat' as const,
        title: 'Propriétaires privés',
        text: 'Pour les villas, lofts, résidences et résidences secondaires. Nous ne prenons pas en charge les ménages privés ordinaires.',
        points: [
          'Chez vous, c’est toujours la même équipe qui travaille',
          'Pierre naturelle, parquet et surfaces laquées brillantes, nettoyés dans le respect des matériaux',
          'Clés et alarme selon des règles convenues avec vous',
        ],
        link: { path: '/premium/luxusimmobilien' as PagePath, text: 'Vers les biens de prestige' },
      },
      {
        key: 'premium' as const,
        title: 'Jets privés, yachts et hôtels',
        text: 'Pour des cabines, des ponts et des pièces aux matériaux de grande qualité, qui demandent un soin particulier.',
        points: [
          'Sur demande, avec un accord de confidentialité',
          'Aussi le soir, le week-end et pendant votre absence',
          'Dans les hôtels, interventions avant une ouverture et après une rénovation',
        ],
        link: { path: '/premium' as PagePath, text: 'Vers l’offre Premium' },
      },
    ],
  },
  steps: {
    title: 'Comment obtenir votre devis',
    intro: 'Du premier appel à la première intervention. La visite et le devis sont gratuits et sans engagement.',
    items: offerSteps,
  },
  area: {
    title: 'Notre zone d’intervention',
    text: `Depuis notre siège à ${company.address.city}, nous intervenons dans les cantons de ${cantonList}. Nous proposons toutes nos prestations dans toute la zone, partout aux mêmes conditions.`,
    link: 'Vers la zone d’intervention',
  },
  faq: [
    { question: 'Combien coûte une entreprise de nettoyage à l’heure ?', answer: answers.kostenFaktoren },
    faq.schnell,
    {
      question: 'Ai-je besoin d’un nettoyage d’entretien ou d’une conciergerie ?',
      answer:
        'Le nettoyage d’entretien se fait selon une fréquence fixe. La conciergerie va plus loin : rondes de contrôle, petites réparations, technique du bâtiment, élimination des déchets, états des lieux et entretien des abords. Si vous n’avez besoin que du nettoyage, le [nettoyage d’entretien](/leistungen/unterhaltsreinigung) vous convient.',
    },
    {
      question: 'Nettoyez-vous aussi chez les particuliers ?',
      answer: 'Pas les ménages privés ordinaires. Pour les villas, lofts, résidences et résidences secondaires, nous proposons notre [offre Premium](/premium).',
    },
    faq.kurzfristig,
    { question: 'Nettoyez-vous avec des produits respectueux de l’environnement ?', answer: answers.mittel },
  ],
  cta: {
    title: 'Un devis pour votre bien',
    text: `Décrivez-nous brièvement le bien et votre demande. Nous vous répondons ${responseTime} et passons pour la visite.`,
  },
}

export const about = {
  h1: `Nettoyage et conciergerie depuis ${company.address.city}, depuis 2006`,
  lead: `Depuis 2006, nous sommes actifs dans le nettoyage et la conciergerie. Aujourd’hui, plus de 50 collaboratrices et collaborateurs s’occupent de plus de 120 clients dans les cantons de ${cantonList}, en ${languageList}.`,
  promises: {
    title: 'Ce sur quoi vous pouvez compter',
    items: [
      { key: 'persoenlich' as const, title: 'Un suivi personnel', text: 'Notre directeur traite personnellement votre demande.' },
      { key: 'offerte' as const, title: 'Un devis après visite', text: 'Nous n’indiquons un prix qu’après avoir vu votre bien. La visite et le devis sont gratuits et sans engagement.' },
      { key: 'gebiet' as const, title: 'Dans toute la zone', text: `Toutes nos prestations dans les cantons de ${cantonList}, partout aux mêmes conditions.` },
      { key: 'versichert' as const, title: 'Assurés', text: answers.versicherung.replace('Oui. ', '') },
      { key: 'sprachen' as const, title: 'Quatre langues', text: answers.sprachen },
      { key: 'umwelt' as const, title: 'Produits respectueux de l’environnement', text: 'Sur demande, nous nettoyons avec des produits respectueux de l’environnement.' },
    ],
  },
  work: {
    title: 'Notre façon de travailler',
    intro: 'Quatre principes valables pour chaque mandat, du nettoyage de bureaux à la conciergerie.',
    items: [
      {
        title: 'D’abord voir, ensuite chiffrer',
        paragraphs: [
          'Revêtements de sol, surfaces vitrées, utilisation et accès déterminent le travail nécessaire. C’est pourquoi nous examinons d’abord votre bien sur place et définissons avec vous l’étendue, la fréquence et les horaires.',
          'Nous n’indiquons un prix qu’ensuite, par écrit dans le devis, gratuit et sans engagement.',
        ],
      },
      {
        title: 'Clairement convenu',
        paragraphs: [
          'Avec votre accord, il est établi quelles pièces et quelles tâches sont comprises, à quelle fréquence nous passons et à quels horaires. Nous réglons l’accès au préalable, par exemple avec une clé ou un badge.',
          'Ce qui n’est pas compris, nous le disons ouvertement et indiquons la prestation qui convient.',
        ],
      },
      {
        title: 'Des échanges directs',
        paragraphs: [
          `Notre directeur traite personnellement votre demande, vous recevez une réponse ${responseTime}.`,
          'Si vous avez besoin de plusieurs prestations, vous pouvez les regrouper en [facility services](/leistungen/facility-services) dans un seul contrat, avec un seul interlocuteur pour tout.',
        ],
      },
      {
        title: 'Matériel et produits',
        paragraphs: [
          'Dans le cadre du nettoyage d’entretien, nous réapprovisionnons les consommables comme le papier et le savon. Sur demande, nous nettoyons avec des produits respectueux de l’environnement.',
          'Nous nettoyons la pierre naturelle, le parquet et les surfaces laquées brillantes dans le respect des matériaux, avec égard pour les surfaces délicates.',
        ],
      },
    ],
  },
  history: {
    title: 'Dans la région depuis 2006',
    items: [
      { label: '2006', title: 'Le début', text: 'Depuis 2006, nous sommes actifs dans le nettoyage et la conciergerie.' },
      {
        label: 'Aujourd’hui',
        title: 'Plus de 50 collaborateurs, plus de 120 clients',
        text: 'État septembre 2026. Nous travaillons pour des entreprises, des gérances, des propriétaires et une clientèle privée aux exigences particulières.',
      },
      {
        label: 'Siège',
        title: company.address.city,
        text: `${company.legalName} est inscrite au ${register}.`,
      },
    ],
  },
  languages: {
    title: 'Quatre langues',
    text: `Nos collaboratrices et collaborateurs parlent ${languageList}. Cela facilite les échanges avec des équipes internationales, avec les locataires et avec les clients qui préfèrent s’exprimer dans leur langue. Ce site existe dans les mêmes quatre langues.`,
  },
  region: {
    title: 'Cinq cantons, les mêmes conditions',
    text: `Depuis ${company.address.city}, nous intervenons dans les cantons de ${cantonList}. Nous proposons toutes nos prestations dans toute la zone, et les mêmes conditions de déplacement s’appliquent partout.`,
    link: 'Vers la zone d’intervention',
  },
  values: {
    title: 'Nos valeurs au quotidien',
    intro: 'Les valeurs se voient dans ce que l’on fait. Voici donc ce que nous faisons concrètement.',
    items: [
      { key: 'ehrlich' as const, title: 'Honnêtes sur le prix', text: 'Nous n’indiquons les prix que dans le devis écrit, après avoir vu le bien. Un prix sans visite serait souvent inexact par la suite.' },
      { key: 'klar' as const, title: 'Clairs sur l’étendue', text: 'Chaque page de prestation indique aussi ce qui n’est pas compris, avec un renvoi vers la prestation qui convient.' },
      { key: 'nachbessern' as const, title: 'Nous répondons de notre travail', text: 'Si la gérance conteste quelque chose à notre nettoyage de fin de bail lors de la remise, nous nettoyons à nouveau gratuitement. Les détails figurent dans le devis.' },
      { key: 'versichert' as const, title: 'Responsabilité', text: 'Pour les dommages causés pendant le travail, nous avons une assurance responsabilité civile d’entreprise avec une couverture de CHF 10 millions.' },
      { key: 'diskret' as const, title: 'Discrétion', text: 'Dans l’offre Premium, nous signons sur demande un accord de confidentialité. Nous gérons les clés et l’alarme selon des règles fixes.' },
      { key: 'umwelt' as const, title: 'Respect de l’environnement', text: 'Sur demande, nous nettoyons avec des produits respectueux de l’environnement. Dites-le-nous lors de la visite.' },
    ],
  },
  contact: {
    title: 'Votre interlocuteur',
    text: `Votre demande parvient directement à notre directeur. Il vous répond ${responseTime}.`,
  },
  // Le type allemand reprend la valeur littérale de company.register, le texte français la remplace
  register: { title: 'Données du registre', court: register, uid: 'IDE' },
  statsLabel: 'En chiffres',
  faq: [faq.kosten, faq.gebiet, faq.kurzfristig],
  cta: {
    title: 'Convenir d’une visite',
    text: 'Lors de la visite, nous examinons votre bien et clarifions l’étendue des prestations et les horaires. Vous recevez ensuite un devis écrit.',
  },
}

export const contact = {
  h1: 'Contact et devis',
  lead: `Appelez-nous ou écrivez-nous. Nous vous répondons ${responseTime}.`,
  channels: {
    title: 'Comment nous joindre',
    phone: { title: 'Téléphone', hint: 'Pour vos questions et pour convenir d’un rendez-vous de visite.', action: 'Appeler' },
    mobile: { title: 'Mobile', hint: 'Notre numéro mobile, en plus du fixe.', action: 'Appeler' },
    email: { title: 'E-mail', hint: 'Pour les demandes avec documents, par exemple plans, listes de surfaces ou photos.', action: 'Écrire un e-mail' },
    form: { title: 'Formulaire', value: 'Demander un devis', hint: 'Les informations essentielles en quelques champs, la prestation se choisit dans une liste.', action: 'Vers le formulaire' },
    address: { title: 'Adresse', hint: 'Notre siège. La visite a lieu chez vous, sur place.', action: 'Vers la carte' },
  },
  brief: {
    title: 'Ce que votre demande devrait contenir',
    intro: 'Plus vos indications sont précises, mieux nous préparons la visite. S’il manque quelque chose, nous le clarifions ensemble.',
    items: [
      { key: 'objekt' as const, title: 'Bien', text: 'Type de bien, par exemple bureau, cabinet, immeuble locatif, halle ou villa.' },
      { key: 'ort' as const, title: 'Lieu', text: 'Adresse ou numéro postal du bien.' },
      { key: 'groesse' as const, title: 'Taille', text: 'Surface approximative, nombre de pièces, d’appartements ou d’étages.' },
      { key: 'leistung' as const, title: 'Prestation', text: 'Ce qu’il faut faire, par exemple nettoyage d’entretien, conciergerie ou nettoyage ponctuel.' },
      { key: 'rhythmus' as const, title: 'Fréquence et horaires', text: 'À quelle fréquence et quand, par exemple avant le début du travail, le soir ou le week-end.' },
      { key: 'start' as const, title: 'Début', text: 'À partir de quand vous avez besoin de la prestation, pour un nettoyage de chantier ou de fin de bail la date de remise.' },
      { key: 'zugang' as const, title: 'Accès et particularités', text: 'Clé ou badge, sols et matériaux délicats, grandes surfaces vitrées.' },
    ],
    note: 'Vous pouvez nous envoyer plans, listes de surfaces ou photos par e-mail.',
  },
  steps: { title: 'De la demande à la première intervention', items: offerSteps },
  map: {
    title: 'Comment nous trouver',
    text: `Siège à ${company.address.city}. Nous intervenons dans les cantons de ${cantonList}.`,
  },
  faq: [faq.schnell, faq.kosten, faq.gebiet, faq.versichert, faq.kurzfristig],
  cta: {
    title: 'Décrivez-nous votre bien',
    text: `Le bien et votre demande dans le formulaire ci-dessous suffisent. Nous vous répondons ${responseTime} et convenons de la visite.`,
  },
}

export const area = {
  h1: 'Zone d’intervention : Suisse centrale et Argovie',
  lead: `Depuis notre siège à ${company.address.city}, nous intervenons dans les cantons de ${cantonList}. Nous proposons toutes nos prestations dans toute la zone, aux entreprises comme à une clientèle privée exigeante.`,
  cantonsTitle: 'Cantons',
  cantonLabels: ['Canton de Lucerne', 'Canton de Zoug', 'Canton d’Argovie', 'Canton de Nidwald', 'Canton d’Obwald'],
  // Localités par canton (S06) : mêmes localités que places.groups, regroupées ; clés comme company.cantons
  cantonPlaces: {
    Luzern: ['Lucerne', 'Horw', 'Meggen', 'Weggis', 'Vitznau', 'Eich'],
    Zug: ['Zoug', 'Cham', 'Risch', 'Hünenberg', 'Walchwil', 'Baar', 'Oberägeri'],
    Aargau: ['Meisterschwanden', 'Ennetbaden', 'Bergdietikon', 'Oberwil-Lieli'],
    Nidwalden: ['Hergiswil', 'Stansstad', 'Ennetbürgen'],
    Obwalden: ['Engelberg'],
  },
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
    text: `Décrivez-nous le bien et le lieu. Nous vous répondons ${responseTime} et passons pour la visite, gratuitement et sans engagement.`,
  },
}

export const servicesOverview = {
  h1: 'Nettoyage et conciergerie pour immeubles, bureaux et commerces',
  lead: `Nettoyage régulier, interventions ponctuelles ou suivi d’immeubles entiers : choisissez selon votre besoin. Pour les entreprises, les gérances et les propriétaires des cantons de ${cantonList}. Vous hésitez ? Nous clarifions cela lors de la visite.`,
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
        { title: 'Nettoyages en profondeur et spéciaux', path: '/leistungen/sonderreinigungen', text: 'Nettoyage en profondeur de logements, de bureaux et de surfaces commerciales, ponctuel ou à intervalles plus espacés.' },
        { title: 'Nettoyage de fin de bail', path: '/leistungen/umzugsreinigung', text: 'Nettoyage final avant la remise d’un appartement ou d’une surface commerciale, avec garantie de remise.' },
        { title: 'Nettoyage de chantier et de fin de chantier', path: '/leistungen/baureinigung', text: 'Nettoyage pendant et après des travaux de construction ou de transformation.' },
        { title: 'Nettoyage de vitres et de façades', path: '/leistungen/fenster-und-fassadenreinigung', text: 'Fenêtres, surfaces vitrées et façades, aussi à haute pression.' },
        { title: 'Nettoyage industriel et de halles', path: '/leistungen/industrie-und-hallenreinigung', text: 'Halles de production et entrepôts, machines et installations.' },
      ],
    },
    {
      title: 'Suivi d’immeubles',
      text: 'Pour les gérances, les propriétaires et les entreprises qui souhaitent tout confier à un seul prestataire.',
      items: [
        { title: 'Conciergerie', path: '/leistungen/hauswartung', text: 'Rondes de contrôle, cage d’escalier, buanderie, petites réparations, technique du bâtiment, états des lieux, élimination des déchets et abords.' },
        { title: 'Entretien des extérieurs et des espaces verts', path: '/leistungen/aussen-und-gruenflaechenpflege', text: 'Entretien des abords et des espaces verts de votre immeuble.' },
        { title: 'Facility services', path: '/leistungen/facility-services', text: 'Plusieurs prestations dans un seul contrat, avec un seul interlocuteur.' },
      ],
    },
  ] satisfies { title: string; text: string; items: LinkCard[] }[],
  guide: {
    title: 'Quelle prestation vous convient ?',
    intro: 'Des situations fréquentes et la prestation qui y répond. Vous hésitez ? Nous clarifions cela lors de la visite.',
    items: [
      { situation: 'La cage d’escalier et les locaux communs doivent être propres en permanence.', path: '/leistungen/unterhaltsreinigung' },
      { situation: 'Le bureau ou le cabinet doit être nettoyé sans perturber l’activité.', path: '/leistungen/bueroreinigung' },
      { situation: 'Un appartement ou une surface commerciale va être remis.', path: '/leistungen/umzugsreinigung' },
      { situation: 'Les sols, les joints et les sanitaires ont besoin d’un nettoyage minutieux.', path: '/leistungen/sonderreinigungen' },
      { situation: 'Une construction neuve ou une transformation arrive à la remise.', path: '/leistungen/baureinigung' },
      { situation: 'Les fenêtres, les vitrines ou la façade sont sales.', path: '/leistungen/fenster-und-fassadenreinigung' },
      { situation: 'Une halle, un entrepôt ou des machines doivent être nettoyés.', path: '/leistungen/industrie-und-hallenreinigung' },
      { situation: 'L’immeuble a besoin de quelqu’un qui vérifie régulièrement que tout est en ordre.', path: '/leistungen/hauswartung' },
      { situation: 'Le gazon, les haies, les chemins et les places doivent être entretenus.', path: '/leistungen/aussen-und-gruenflaechenpflege' },
      { situation: 'Le nettoyage, la conciergerie et les abords doivent venir d’un seul prestataire.', path: '/leistungen/facility-services' },
    ] satisfies { situation: string; path: PagePath }[] as { situation: string; path: PagePath }[],
  },
  principles: {
    title: 'Identique pour chaque prestation',
    items: [
      { title: 'Visite avant le devis', text: 'Nous examinons le bien avant d’indiquer un prix. La visite et le devis sont gratuits et sans engagement.' },
      { title: 'Étendue par écrit', text: 'Ce que nous prenons en charge et à quelle fréquence, nous le fixons dans le devis.' },
      { title: 'Demande personnelle', text: `Notre directeur traite personnellement votre demande, vous recevez une réponse ${responseTime}.` },
      { title: 'Fréquence selon l’utilisation', text: 'La fréquence de nos passages dépend de l’utilisation de votre bien. Si elle change, nous adaptons avec vous l’étendue et la fréquence.' },
      { title: 'Écologique sur demande', text: 'Sur demande, nous nettoyons avec des produits respectueux de l’environnement.' },
      { title: 'Des limites claires', text: 'Chaque page de prestation indique aussi ce qui n’est pas compris, par exemple le service hivernal ou l’entretien des installations techniques.' },
    ] satisfies Card[] as Card[],
  },
  faq: [
    { question: 'Combien coûtent vos prestations ?', answer: answers.kosten },
    {
      question: 'Puis-je combiner plusieurs prestations ?',
      answer: 'Oui. Avec les [facility services](/leistungen/facility-services), le nettoyage, la conciergerie et l’entretien des abords figurent dans un seul contrat, avec un seul interlocuteur.',
    },
    {
      question: 'Nettoyez-vous aussi chez les particuliers ?',
      answer: 'Les ménages privés uniquement dans le cadre de notre [offre Premium](/premium), pour les villas, les lofts et les résidences.',
    },
    { question: 'Proposez-vous un service hivernal ?', answer: 'Non. Le service hivernal ne fait pas partie de notre offre.' },
    { question: 'Dans quelles régions intervenez-vous ?', answer: answers.gebiet },
  ] as { question: string; answer: string }[],
  premium: {
    title: 'Villas, jets privés ou yachts ?',
    text: 'Pour des exigences particulières, nous proposons notre offre Premium.',
    detail: 'Villas et résidences, cabines de jets privés, yachts sur le lac des Quatre-Cantons et le lac de Zoug. Toujours la même équipe, en toute discrétion et avec la connaissance des matériaux délicats.',
    link: 'Vers l’offre Premium',
  },
  cta: {
    title: 'Vous ne savez pas exactement ce dont vous avez besoin ?',
    text: `Décrivez-nous le bien et votre demande. Nous passons chez vous, clarifions l’étendue avec vous et vous répondons ${responseTime}.`,
  },
}

// Mêmes clés et même ordre que la liste allemande (les six façons de travailler confirmées, E41)
const promises: Seiten['premiumOverview']['promises'] = [
  { key: 'diskret', title: 'Discrétion', text: 'Nous signons un accord de confidentialité si vous le souhaitez.' },
  { key: 'teams', title: 'Des équipes fixes', text: 'La même équipe s’occupe toujours de votre maison, de votre bateau ou de votre cabine.' },
  { key: 'personal', title: 'Du personnel vérifié', text: 'Personne ne travaille chez vous sans avoir été vérifié par nos soins.' },
  { key: 'schluessel', title: 'Clés et alarme', text: 'Remise, conservation et système d’alarme selon des règles convenues avec vous.' },
  { key: 'zeiten', title: 'À vos horaires', text: 'Des interventions aussi le soir, le week-end ou pendant vos voyages.' },
  { key: 'material', title: 'Connaissance des matériaux', text: 'Pierre naturelle, parquet et surfaces laquées brillantes, pour les bateaux teck, gelcoat et sellerie.' },
]

export const premiumOverview: Seiten['premiumOverview'] = {
  line: premiumLine,
  h1: 'Nettoyage premium pour des exigences particulières',
  lead: 'Faire nettoyer une maison, un yacht ou la cabine d’un jet privé, c’est confier ses clés, son agenda et sa vie privée. C’est pourquoi nous travaillons chez vous selon des règles que vous contribuez à fixer.',
  nameMeaning: company.premiumBrand
    ? `Le nom ${company.premiumBrand} vient du latin « clavis », la clé. Vous nous confiez votre maison, nous en prenons soin comme si c’était la nôtre.`
    : null,
  firstMessage: {
    title: 'Cela suffit pour un premier message',
    items: [
      'Maison, bateau ou cabine, avec le lieu ou la place d’amarrage',
      'L’occasion ou le rythme souhaité',
      'À partir de quand vous avez besoin de nous',
      'Les matériaux délicats et les œuvres d’art dont nous devons tenir compte',
    ],
  },
  nav: {
    bereiche: 'Prestations',
    diskretion: 'Discrétion',
    zusagen: 'Méthode',
    ablauf: 'Déroulement',
    fragen: 'Questions',
    orte: 'Lieux',
  },
  offersTitle: 'Maison, cabine ou bateau',
  offers: [
    {
      title: 'Villas et résidences',
      name: 'Nettoyage de villas et de biens de prestige',
      link: 'Voir le nettoyage de villas',
      path: '/premium/luxusimmobilien',
      text: 'Villas, lofts, résidences et résidences secondaires, régulièrement ou avant un événement.',
      detail: 'Pour les demeures avec pierre naturelle, parquet, surfaces brillantes et œuvres d’art. Nous nettoyons régulièrement ou avant une fête ou une vente.',
      notIncluded: 'Non compris : les restaurations, par exemple de tableaux ou de meubles anciens.',
    },
    {
      title: 'Cabines de jets privés',
      name: 'Nettoyage de jets privés',
      link: 'Voir le nettoyage de jets privés',
      path: '/premium/privatjet',
      text: 'La cabine entre deux vols, planifiée avec votre exploitant.',
      detail: 'Cuir, bois laqué, surfaces brillantes et textiles fins se côtoient sur quelques mètres carrés, et souvent seul le temps entre deux vols est disponible. Vous décidez avec votre exploitant quels produits sont autorisés à bord.',
      notIncluded: 'Non compris : le nettoyage extérieur de l’avion.',
    },
    {
      title: 'Yachts et bateaux à moteur',
      name: 'Nettoyage de yachts et de bateaux',
      link: 'Voir le nettoyage de yachts',
      path: '/premium/yacht',
      text: 'L’intérieur et le pont, à la place d’amarrage sur les lacs des Quatre-Cantons et de Zoug.',
      detail: 'L’eau douce, le pollen et les fientes d’oiseaux agissent autrement sur un bateau de lac que le sel en mer. Nous nettoyons le teck, le gelcoat et la sellerie à la place d’amarrage, chaque matériau selon sa propre méthode.',
      notIncluded: 'Non compris : les travaux sur la carène et le moteur.',
    },
  ],
  moreTitle: 'Également pour',
  more: [
    { title: 'Résidences secondaires et résidences de standing', text: 'Nettoyées avant votre arrivée, remises en ordre après votre départ, avec des rondes de contrôle entre-temps au rythme convenu.' },
    { title: 'Hôtels', text: 'Nettoyages spéciaux et en profondeur avant une ouverture et après une rénovation. En savoir plus sur les [nettoyages en profondeur et spéciaux](/leistungen/sonderreinigungen).' },
    { title: 'Bureaux et family offices', text: 'Des pièces confidentielles, nettoyées en dehors de vos heures de travail. En savoir plus sur le [nettoyage de bureaux et de cabinets](/leistungen/bueroreinigung).' },
    { title: 'Pièces abritant des œuvres d’art et des antiquités', text: 'Nous nettoyons les pièces avec soin, les tableaux, sculptures et autres œuvres d’art uniquement avec votre accord exprès.' },
    { title: 'Événements privés', text: 'Tout est prêt avant l’événement et remis en ordre après, même s’il tombe un week-end.' },
    { title: 'Courtiers et gérances', text: 'Nettoyage à bref délai avant une vente, une séance photo ou une remise.' },
  ],
  discretion: {
    title: 'La discrétion, noir sur blanc',
    paragraphs: [
      'Qui nettoie chez vous en apprend plus qu’un devis n’en dit. Ce qui reste confidentiel, et pour combien de temps, peut être fixé dans un accord de confidentialité.',
    ],
  },
  // Ce qu’un tel accord règle en général, pas le contenu d’un modèle propre ; sans peine conventionnelle (non confirmée).
  // Art. 11 CO lu le 28.09.2026 sur fedlex.admin.ch, sans conseil juridique.
  nda: {
    kind: 'checklist',
    id: 'geheimhaltung',
    title: 'Ce qu’un accord de confidentialité devrait régler',
    intro: 'La liste montre ce qu’un tel accord règle en général et vous aide à vérifier un texte.',
    groups: [
      {
        title: 'Qui et quoi',
        items: [
          'Qui est lié : l’entreprise et toutes les personnes qui travaillent chez vous',
          'Ce qui est confidentiel : adresse, absences, invités, pièces, aménagement et documents',
          'Aucune photo dans la maison, à bord ou dans la cabine, et aucune information sur les réseaux sociaux',
        ],
      },
      {
        title: 'Durée et fin',
        items: [
          'Combien de temps l’obligation s’applique, y compris après la fin du mandat',
          'Comment les clés et les badges sont restitués et les codes modifiés',
          'Ce qu’il advient à la fin des documents tels que plans d’étage ou schémas d’alarme : restitution ou destruction',
        ],
      },
    ],
    note: 'Le CO n’exige aucune forme particulière pour un tel accord (art. 11 CO), mais une version signée facilite la preuve. Clarifiez les détails de votre cas avec votre conseil juridique.',
    sources: [
      { label: 'Code des obligations, art. 11 : forme des contrats', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/fr#art_11' },
    ],
    printable: true,
    updated: '2026-09-28',
  },
  promisesTitle: 'Ce qui vaut pour chaque mandat premium',
  promises,
  stepsTitle: 'Le déroulement d’une demande premium',
  steps: [
    {
      title: 'Votre demande',
      text: 'Après votre appel ou votre message, nous convenons avec vous d’une date pour le tour des lieux.',
    },
    {
      title: 'Tour des lieux et devis',
      text: 'Dans la maison, à la place d’amarrage ou dans la cabine, nous examinons avec vous les pièces, les matériaux et les accès, pour un jet privé en accord avec votre exploitant. Sur cette base, nous établissons votre devis écrit.',
    },
    {
      title: 'Des règles fixées avant le début',
      text: 'Avant de commencer, il est établi quand nous venons, comment les clés et le système d’alarme sont gérés et quelles œuvres d’art ou quels objets nous ne touchons qu’avec votre accord.',
    },
    {
      title: 'Votre équipe fixe',
      text: 'La même équipe vient toujours chez vous, et elle connaît les règles fixées avant la première intervention.',
    },
  ],
  faq: [
    {
      question: 'Comment ma demande reste-t-elle confidentielle ?',
      answer: 'Notre directeur s’occupe lui-même des demandes premium. Si vous souhaitez un accord de confidentialité, mentionnez-le de préférence dès votre premier message.',
    },
    {
      question: 'Un courtier ou une gérance peut-il faire la demande pour le propriétaire ?',
      answer: 'Oui. Indiquez-nous dans la demande qui accompagnera le tour des lieux et qui recevra le devis.',
    },
    {
      question: 'Dois-je confier un mandat régulier ?',
      answer: 'Non. Vous pouvez aussi nous confier une intervention unique, par exemple avant un événement privé.',
    },
    {
      question: 'Travaillez-vous aussi quand personne n’est à la maison ?',
      answer: 'Oui, y compris pendant vos voyages. La manière d’entrer dans la maison et d’utiliser le système d’alarme est convenue au préalable.',
    },
    {
      question: 'De quoi dépend le prix d’un nettoyage premium ?',
      answer: 'Pour une maison, de la surface, des matériaux et des œuvres d’art ; pour un bateau, de sa taille, du pont et de la place d’amarrage ; pour un jet, de la cabine et du créneau horaire. S’y ajoutent le rythme et les interventions le soir ou le week-end. C’est pourquoi seul le devis établi après le tour des lieux indique un prix.',
    },
    {
      question: 'Pouvons-nous faire la demande en anglais, en français ou en italien ?',
      answer: 'Oui. Nous communiquons avec vous en allemand, en anglais, en français ou en italien. Écrivez-nous dans la langue que vous préférez.',
    },
  ],
  places: {
    title: 'Où nous sommes à votre service',
    text: `Au bord du lac des Quatre-Cantons, de Lucerne et Meggen jusqu’à Weggis, Vitznau, Hergiswil et Ennetbürgen, au bord des lacs de Zoug et d’Ägeri, de Zoug et Walchwil jusqu’à Oberägeri, à Engelberg et dans l’ensemble des cantons de ${cantonList}.`,
  },
  cta: {
    title: 'Demandez en toute discrétion',
    text: 'Un appel ou quelques lignes via le formulaire suffisent pour commencer.',
  },
}

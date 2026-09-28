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
  { value: 'Plus de 50', label: 'Collaboratrices et collaborateurs' },
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

export const home: Seiten['home'] = {
  h1: 'Entreprise de nettoyage et conciergerie à Lucerne, Zoug et environs',
  // Phrase de profil citable (T5), la première phrase seulement avec NEW_BRAND, la seconde comme sur la page À propos
  profile: {
    title: 'En bref',
    brand: company.premiumBrand
      ? `${company.brand} est la marque de ${company.legalName}, dont le siège est à ${company.seat} (LU).`
      : null,
    text: `Depuis 2006, nous sommes actifs dans le nettoyage et la conciergerie. Aujourd’hui, plus de 50 collaboratrices et collaborateurs s’occupent de plus de 120 clients dans les cantons de ${cantonList}, en ${languageList}.`,
    facts: [
      { key: 'register', label: 'Registre du commerce', value: `Canton de Lucerne, IDE ${company.uid}` },
      { key: 'persoenlich', label: 'Votre demande', value: 'Traitée personnellement par notre directeur' },
      { key: 'umwelt', label: 'Produits de nettoyage', value: 'Respectueux de l’environnement sur demande' },
    ],
  },
  services: {
    title: 'Nos prestations',
    intro: 'Dix prestations en trois groupes : ce qui revient régulièrement, ce qui demande une intervention en profondeur et ce dont un immeuble entier a besoin.',
    all: 'Toutes les prestations en bref',
    swipe: 'Faire défiler',
    cards: {
      '/leistungen/unterhaltsreinigung': 'Cage d’escalier, entrée et ascenseur restent propres sans que personne dans l’immeuble ne s’en charge. Nous réapprovisionnons savon et papier.',
      '/leistungen/bueroreinigung': 'Postes de travail, salles de réunion, cuisinettes et salles de consultation, nettoyés à des horaires adaptés à votre activité.',
      '/leistungen/hauswartung': 'Rondes de contrôle, petites réparations, élimination des déchets et participation aux états des lieux.',
      '/leistungen/aussen-und-gruenflaechenpflege': 'Des abords soignés toute l’année, de la première tonte aux feuilles d’automne.',
      '/leistungen/facility-services': 'Plusieurs de nos prestations réunies, avec un seul contrat et un seul interlocuteur.',
    },
    premium: {
      title: premiumLabel,
      text: 'Une ligne à part pour les villas, lofts et résidences, les jets privés et les yachts, ainsi que les hôtels et les family offices. Discrète, avec des équipes fixes.',
      link: 'Vers l’offre Premium',
    },
  },
  audiences: {
    title: 'Pour qui nous travaillons',
    intro: 'Une gérance n’a pas les mêmes besoins qu’une entreprise ou qu’une villa. Choisissez votre groupe.',
    items: [
      {
        key: 'verwaltungen',
        short: 'Gérances',
        title: 'Gérances et communautés de propriétaires par étages',
        text: 'Vous gérez des immeubles d’habitation ou commerciaux pour des propriétaires ou une communauté. Sur place, il faut quelqu’un qui passe régulièrement et signale ce qu’il remarque.',
        points: [
          'Cage d’escalier, buanderie et abords selon une fréquence fixe',
          'Rondes de contrôle régulières, les défauts vous sont signalés directement',
          'Nettoyage final lors d’un changement de locataire, avec garantie de remise',
        ],
        link: { path: '/leistungen/hauswartung', hash: 'pflichtenheft', text: 'Modèle de cahier des charges pour la conciergerie' },
      },
      {
        key: 'unternehmen',
        short: 'Entreprises',
        title: 'Entreprises',
        text: 'Bureaux, cabinets, commerces et production. Le nettoyage s’adapte à votre organisation, et non l’inverse.',
        points: [
          'Horaires d’intervention adaptés à vos heures de travail et d’ouverture',
          'Service de réapprovisionnement des consommables',
          'Halles et machines à des horaires coordonnés avec la production',
        ],
        link: { path: '/leistungen/bueroreinigung', hash: 'leistungsverzeichnis', text: 'Descriptif des prestations pour votre bureau' },
      },
      {
        key: 'premium',
        short: 'Premium',
        title: 'Villas, jets, yachts et hôtels',
        text: 'La pierre naturelle, le parquet, le cuir et les bois précieux ne pardonnent pas un mauvais produit. Pour les entretenir, il faut une équipe qui connaît les matériaux et travaille avec discrétion.',
        points: [
          'Une équipe fixe qui connaît votre maison',
          'Un accord de confidentialité si vous le souhaitez',
          'Dans les hôtels, nettoyage avant l’ouverture et après une rénovation',
        ],
        link: { path: '/premium/luxusimmobilien', hash: 'materialkunde', text: 'Guide des matériaux pour pierre naturelle, parquet et surfaces brillantes' },
      },
    ],
  },
  agreed: {
    title: 'Clairement réglé avant de commencer',
    intro: 'Avant la première intervention, l’essentiel est mis par écrit. Ainsi, la gérance, les propriétaires et notre équipe savent ce qui s’applique.',
    written: {
      title: 'Ce que vous recevez par écrit',
      items: [
        { title: 'Devis', text: 'après la visite, avec l’étendue et le prix' },
        { title: 'Étendue', text: 'quels locaux et quelles tâches sont compris, à quelle fréquence et à quels horaires' },
        { title: 'Conciergerie', text: 'à quelle fréquence nous passons et à qui nous signalons les défauts' },
        { title: 'Réapprovisionnement', text: 'quels articles sont compris et qui les achète' },
        { title: 'Nettoyage de fin de bail', text: 'la garantie de remise et ses modalités' },
      ],
      note: 'Si une surface s’ajoute plus tard, nous complétons la convention par écrit.',
    },
    limits: {
      title: 'Ce que nous ne prenons pas en charge',
      intro: 'Pour que vous ne perdiez pas de temps, nous le disons tout de suite.',
      items: [
        'Service hivernal et déneigement',
        'Un service de piquet joignable jour et nuit pour les urgences',
        'Les nettoyages de fin de bail commandés par les locataires d’appartements individuels',
        'Les ménages privés ordinaires. Nous nous occupons des villas, résidences et résidences secondaires dans notre [offre Premium](/premium).',
        'L’entretien du chauffage, de la ventilation, des ascenseurs et de la protection incendie, les grosses réparations, l’aménagement paysager et les nouvelles plantations',
      ],
    },
  },
  area: {
    title: 'Notre zone d’intervention',
    text: `Depuis ${company.address.city}, nous intervenons dans l’ensemble de cinq cantons, pour toutes nos prestations. Pour chaque canton, vous trouvez des localités, des objets typiques et des conseils de planification.`,
    link: 'Vers la zone d’intervention',
  },
  faq: [
    {
      question: 'Combien coûte une entreprise de nettoyage à l’heure ?',
      answer:
        'Sans connaître le bien, il est impossible de répondre sérieusement. Ce qui compte, c’est le volume de travail : la taille des surfaces, les types de sols, l’intensité d’utilisation, la fréquence et les horaires du nettoyage, et qui fournit les consommables. Le guide [Coûts du nettoyage en Suisse](/blog/reinigungskosten-schweiz) explique l’effet de ces facteurs.',
    },
    {
      question: 'Ai-je besoin d’un nettoyage d’entretien ou d’une conciergerie ?',
      answer:
        'S’il s’agit uniquement de nettoyer, le [nettoyage d’entretien](/leistungen/unterhaltsreinigung) suffit : cage d’escalier, sols et locaux communs selon une fréquence fixe. La [conciergerie](/leistungen/hauswartung) s’occupe en plus de l’immeuble lui-même, avec des rondes de contrôle, de petites réparations, l’élimination des déchets et la participation aux états des lieux.',
    },
    {
      question: 'Quelle prestation convient à mon bien ?',
      answer:
        'Le [guide de notre aperçu des prestations](/leistungen#wegweiser) vous l’indique : il associe dix situations typiques à la prestation adaptée. Sur la même page, un tableau compare les quatre prestations que l’on confond le plus souvent. Si aucune situation ne correspond exactement, décrivez votre bien dans le formulaire ci-dessous.',
    },
    {
      question: 'Puis-je vous confier une intervention unique ?',
      answer:
        'Oui, par exemple un [nettoyage en profondeur](/leistungen/sonderreinigungen), un [nettoyage de fin de bail](/leistungen/umzugsreinigung) avant une remise, un [nettoyage de chantier](/leistungen/baureinigung) après une construction ou une transformation, ou un [nettoyage de vitres et de façades](/leistungen/fenster-und-fassadenreinigung). Un contrat de nettoyage régulier n’est pas nécessaire pour cela.',
    },
    {
      question: 'Dois-je commander plusieurs prestations ensemble ?',
      answer:
        'Non. Vous pouvez commander chaque prestation séparément, par exemple uniquement le nettoyage des vitres ou uniquement l’entretien des extérieurs. Si vous en avez besoin de plusieurs pour le même immeuble, elles peuvent être regroupées en [facility services](/leistungen/facility-services) : un seul contrat au lieu de plusieurs.',
    },
    {
      question: 'À quoi faut-il veiller en choisissant une entreprise de nettoyage ?',
      answer:
        'Avant tout, à des devis réellement comparables. Ce n’est possible que si chaque prestataire a vu le bien et se base sur les mêmes locaux, la même fréquence et les mêmes horaires. Les autres questions à poser, de l’assurance jusqu’au contrat, figurent dans le guide [Comment trouver la bonne entreprise de nettoyage ?](/blog/richtige-reinigungsfirma-finden).',
    },
  ],
  cta: {
    title: 'Un devis pour votre bien',
    text: 'Décrivez brièvement le bien, le lieu et votre besoin. Nous convenons ensuite avec vous de la date de la visite.',
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
  lead: `Notre zone d’intervention couvre l’ensemble des cantons de ${cantonList}. Toutes nos prestations sont proposées partout, pour les gérances et les entreprises comme dans notre offre Premium.`,
  cantonsTitle: 'Cantons',
  cantonLabels: ['Canton de Lucerne', 'Canton de Zoug', 'Canton d’Argovie', 'Canton de Nidwald', 'Canton d’Obwald'],
  // Localités par canton (S06) : mêmes localités que places.groups, regroupées ; clés comme company.cantons
  cantonPlaces: {
    Luzern: ['Lucerne', 'Horw', 'Meggen', 'Weggis', 'Vitznau', 'Eich'],
    Zug: ['Zoug', 'Cham', 'Risch', 'Hünenberg', 'Walchwil', 'Baar', 'Oberägeri'],
    Aargau: ['Meisterschwanden', 'Ennetbaden', 'Bergdietikon', 'Oberwil-Lieli'],
    Nidwalden: ['Hergiswil', 'Stansstad', 'Ennetbürgen'],
    Obwalden: ['Engelberg'],
  },
  seatTitle: 'Siège et contact',
  seatText: 'Le déplacement depuis Emmenbrücke se fait partout aux mêmes conditions, que ce soit vers Sursee, Baar, Muri ou Engelberg.',
  // Élément 6.1 : uniquement des données qui figurent avec leur source sur les pages cantonales
  vergleich: {
    nav: 'Comparaison',
    title: 'Les cinq cantons en comparaison',
    intro: 'Prestations et conditions sont les mêmes partout, déplacement compris. Les différences portent sur les termes de résiliation sans autre accord dans le bail, les jours fériés et les résidences secondaires, et elles comptent pour le plan de nettoyage.',
    columns: ['Canton', 'Priorité', 'Termes de résiliation', 'Jours fériés : particularité', 'Résidences secondaires > 20 %'],
    rows: [
      ['[Lucerne](/einzugsgebiet/luzern)', 'Habitat, bureaux, cabinets', 'Selon le bail, sinon usage local (art. 266c CO)', 'Saint-Étienne fériée, Saint-Joseph selon commune', 'Flühli, Vitznau, Weggis'],
      ['[Zoug](/einzugsgebiet/zug)', 'Bureaux et sièges', '31.3, 30.6, 30.9', 'Quatre jours assimilés', 'Aucune'],
      ['[Argovie](/einzugsgebiet/aargau)', 'Halles, entrepôts, habitat', 'Selon le bail, sinon usage local (art. 266c CO)', 'Six régimes (districts)', 'Aucune'],
      ['[Nidwald](/einzugsgebiet/nidwalden)', 'Biens au bord du lac, PPE', 'Selon le bail, sinon usage local (art. 266c CO)', 'Saint-Joseph, 19 mars', 'Emmetten'],
      ['[Obwald](/einzugsgebiet/obwalden)', 'Sarneraatal, hôtels à Engelberg', '31.3, 30.6, 30.9', 'Nicolas de Flüe (25.9)', 'Engelberg'],
    ],
    note: 'Les communes n’ont pas l’obligation de déclarer les résidences secondaires comme telles dans le registre des bâtiments. Selon l’ARE, les proportions ne peuvent donc pas être comparées entre communes.',
    sources: ['zgMietrecht', 'owSchlichtung', 'orMiete', 'luRuhetage', 'zgFeiertagsaehnlich', 'agFeiertage', 'nwRuhetage', 'owRuhetage', 'are'] as const,
  },
  places: {
    title: 'Rives des lacs et lieux de villégiature',
    text: 'Selon l’inventaire des logements, plus de la moitié des logements de Flühli avec Sörenberg et d’Engelberg ne sont pas des résidences principales, et près d’un sur trois à Emmetten et à Vitznau. Ce qui compte là-bas, c’est moins un rythme hebdomadaire fixe que le nettoyage avant l’arrivée et après le départ, avec des rondes de contrôle entre-temps. Ces biens relèvent de notre [offre Premium](/premium).',
    sources: ['are'] as const,
    groups: [
      { title: 'Lac des Quatre-Cantons', items: ['Lucerne', 'Horw', 'Meggen', 'Weggis', 'Vitznau', 'Hergiswil', 'Stansstad', 'Ennetbürgen'] },
      { title: 'Au bord des lacs de Zoug et d’Ägeri', items: ['Zoug', 'Cham', 'Risch', 'Hünenberg', 'Walchwil', 'Baar', 'Oberägeri'] },
      { title: 'Au bord des lacs de Sempach et de Hallwil', items: ['Eich', 'Meisterschwanden'] },
      { title: 'Stations de montagne', items: ['Sörenberg', 'Emmetten', 'Engelberg'] },
    ],
  },
  cta: {
    title: 'Votre bien se trouve-t-il dans notre zone ?',
    text: `Indiquez-nous l’adresse et le type de bien. S’il se trouve dans l’un des cinq cantons, nous vous répondons ${responseTime} et convenons de la visite, gratuitement et sans engagement.`,
  },
}

export const servicesOverview = {
  h1: 'Services de nettoyage et de conciergerie pour immeubles, bureaux et commerces',
  lead: 'Dix prestations pour les gérances, les propriétaires et les entreprises, classées selon le besoin. Vous voyez ici à quoi sert chacune, en quoi des prestations proches se distinguent et ce qui est à faire à quel moment de l’année.',
  groups: [
    {
      title: 'Nettoyage régulier',
      text: 'Un nettoyage récurrent dont la fréquence dépend de l’utilisation.',
      items: [
        {
          title: 'Nettoyage d’entretien',
          path: '/leistungen/unterhaltsreinigung',
          text: 'Pour les immeubles locatifs, les immeubles d’habitation et commerciaux et les surfaces commerciales : nous nettoyons la cage d’escalier, les sols et les locaux annexes, généralement plusieurs fois par semaine, et réapprovisionnons les consommables.',
        },
        {
          title: 'Nettoyage de bureaux et de cabinets',
          path: '/leistungen/bueroreinigung',
          text: 'Bureaux, administrations et cabinets, nettoyés à des horaires qui tiennent compte de vos réunions et de vos heures de consultation.',
        },
      ],
    },
    {
      title: 'Nettoyage ponctuel et spécial',
      text: 'Des interventions liées à une occasion précise, par exemple une remise, la fin d’un chantier ou un arrêt de production.',
      items: [
        {
          title: 'Nettoyages en profondeur et spéciaux',
          path: '/leistungen/sonderreinigungen',
          text: 'Contre le calcaire, la graisse, la saleté dans les joints et les anciennes couches d’entretien que le nettoyage courant des logements, bureaux et surfaces commerciales n’élimine plus.',
        },
        {
          title: 'Nettoyage de fin de bail',
          path: '/leistungen/umzugsreinigung',
          text: 'Nettoyage final d’appartements et de surfaces commerciales avant l’état des lieux, sur mandat de gérances, de propriétaires et d’entreprises. Avec garantie de remise.',
        },
        {
          title: 'Nettoyage de chantier et de fin de chantier',
          path: '/leistungen/baureinigung',
          text: 'Nettoyage pendant les travaux et nettoyage de fin de chantier avant la remise aux locataires, aux acheteurs ou à votre équipe.',
        },
        {
          title: 'Nettoyage de vitres et de façades',
          path: '/leistungen/fenster-und-fassadenreinigung',
          text: 'Fenêtres, vitrines et autres surfaces vitrées, ainsi que façades, au besoin à haute pression. En mandat unique ou à un rythme fixe.',
        },
        {
          title: 'Nettoyage industriel et de halles',
          path: '/leistungen/industrie-und-hallenreinigung',
          text: 'Sols, halles, machines et installations en production et en stockage, en coordination avec les équipes et les arrêts.',
        },
      ],
    },
    {
      title: 'Suivi d’immeubles',
      text: 'Quand quelqu’un doit veiller régulièrement sur l’ensemble de l’immeuble, à l’intérieur comme à l’extérieur.',
      items: [
        {
          title: 'Conciergerie',
          path: '/leistungen/hauswartung',
          text: 'Rondes de contrôle avec rapport à la gérance, cage d’escalier et buanderie, petites réparations, élimination des déchets et états des lieux. Les tâches dépendent de votre immeuble.',
        },
        {
          title: 'Entretien des extérieurs et des espaces verts',
          path: '/leistungen/aussen-und-gruenflaechenpflege',
          text: 'Gazon, haies, plates-bandes, chemins et places, confiés seuls ou avec la conciergerie.',
        },
        {
          title: 'Facility services',
          path: '/leistungen/facility-services',
          text: 'Nettoyage, conciergerie et abords dans un seul contrat. Les installations techniques comme le chauffage, la ventilation ou les ascenseurs n’en font pas partie.',
        },
      ],
    },
  ] satisfies { title: string; text: string; items: LinkCard[] }[],
  guide: {
    title: 'Quelle prestation vous convient ?',
    intro: 'Dix situations fréquentes et la prestation qui y répond.',
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
      { situation: 'Au lieu de plusieurs entreprises, une seule doit tout prendre en charge.', path: '/leistungen/facility-services' },
    ] satisfies { situation: string; path: PagePath }[] as { situation: string; path: PagePath }[],
  },
  toolNav: { vergleich: 'Comparatif', jahresplan: 'Calendrier annuel' },
  tools: [
    {
      kind: 'table',
      id: 'vergleich',
      title: 'Nettoyage, nettoyage en profondeur, conciergerie ou tout ensemble ?',
      intro: 'Quatre prestations faciles à confondre, comparées côte à côte.',
      columns: ['Prestation', 'Quoi', 'Fréquence', 'Occasion typique', 'Non compris'],
      rows: [
        [
          '[Nettoyage d’entretien](/leistungen/unterhaltsreinigung)',
          'Nettoyage selon une fréquence fixe, avec réapprovisionnement',
          'Généralement plusieurs fois par semaine',
          'La cage d’escalier, les parties communes ou la surface commerciale doivent rester propres en permanence',
          'Bureaux et cabinets, nettoyage en profondeur, fenêtres à l’extérieur et façades',
        ],
        [
          '[Nettoyages en profondeur et spéciaux](/leistungen/sonderreinigungen)',
          'Une intervention approfondie contre le calcaire, la graisse et les anciennes couches',
          'Ponctuel, au besoin renouvelé à de longs intervalles',
          'Avant une relocation ou après une utilisation intensive',
          'Nettoyage courant. Le nettoyage final avant une remise relève du nettoyage de fin de bail',
        ],
        [
          '[Conciergerie](/leistungen/hauswartung)',
          'Suivi de l’immeuble : rondes de contrôle, petites réparations, signalements',
          'Aussi souvent que prévu dans le cahier des charges',
          'Le concierge actuel arrête, ou un immeuble est repris',
          'Service hivernal, piquet jour et nuit, grosses réparations',
        ],
        [
          '[Facility services](/leistungen/facility-services)',
          'Plusieurs de nos prestations dans un seul contrat',
          'Selon la prestation',
          'Plusieurs entreprises doivent être remplacées par une seule',
          'Facility management technique, service hivernal, intermédiation d’artisans',
        ],
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'timeline',
      id: 'jahresplan',
      title: 'Quel travail à quel moment',
      intro: 'Beaucoup de travaux sur un immeuble ont leur saison. Voici comment ils se répartissent en général sur l’année :',
      entries: [
        {
          label: 'Janvier à mars',
          text: 'Nettoyage en profondeur des bureaux et surfaces commerciales pendant les semaines calmes. Tailler maintenant haies et arbustes : la Station ornithologique de Sempach conseille de tailler les ligneux hors de la période de nidification, idéalement entre novembre et mars.',
        },
        {
          label: 'Avril à juin',
          text: 'Nettoyer fenêtres et vitrages après l’hiver et le pollen. Débarrasser chemins et places de la saleté de l’hiver, tondre le gazon pour la première fois. Ce qui suit au jardin jusqu’à l’automne figure dans le [calendrier d’entretien des extérieurs](/leistungen/aussen-und-gruenflaechenpflege#pflegekalender).',
        },
        {
          label: 'Juillet et août',
          text: 'Nettoyage en profondeur pendant les vacances d’entreprise, halles et machines lors des arrêts planifiés. Enlever les mauvaises herbes dans les joints et sur les places à la main ou avec des appareils, car les herbicides sont interdits sur et le long des chemins et des places. La page [Entretien des extérieurs et des espaces verts](/leistungen/aussen-und-gruenflaechenpflege#spritzmittelverbot) montre où les produits de traitement sont interdits et ce qui agit à la place.',
        },
        {
          label: 'Septembre à novembre',
          text: 'Ramasser les feuilles sur les chemins, les places et le gazon, préparer les plates-bandes pour l’hiver et nettoyer les fenêtres avant la saison sombre. En novembre commence la période de taille des haies.',
        },
        {
          label: 'Avant la première neige',
          text: 'Le déneigement et le salage ne font pas partie de notre offre. Confiez à temps le service hivernal à une entreprise qui l’assure.',
        },
        {
          label: 'Autour des termes de résiliation',
          text: 'Le CO prévoit pour les logements un délai de congé de trois mois, pour les locaux commerciaux de six mois, chaque fois pour le terme fixé par l’usage local ou, à défaut, pour la fin d’un trimestre de bail. Le bail peut prévoir des délais plus longs ou d’autres termes. Planifiez le nettoyage final avec la date de remise ; les [termes par canton](/leistungen/umzugsreinigung#kuendigungstermine) figurent sur la page du nettoyage de fin de bail.',
        },
      ],
      note: 'Les mois sont indicatifs. Ce qui est à faire chez vous dépend de l’utilisation, de la situation et du contrat.',
      sources: [
        {
          label: 'Station ornithologique suisse : taille des arbustes et des haies en zone bâtie (en allemand)',
          href: 'https://www.vogelwarte.ch/de/ratgeber/schnitt-von-straeuchern-und-hecken-in-siedlungen-wann-und-wie/',
        },
        { label: 'OFEV : protection des végétaux dans la commune (en allemand)', href: 'https://www.bafu.admin.ch/de/pflanzenschutz-in-der-gemeinde' },
        { label: 'Code des obligations, art. 266a, 266c et 266d (Fedlex)', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/fr#art_266_c' },
      ],
    },
  ] satisfies Seiten['servicesOverview']['tools'] as Seiten['servicesOverview']['tools'],
  principles: {
    title: 'Identique pour chaque prestation',
    items: [
      {
        title: 'Étendue par écrit',
        text: 'Locaux, tâches, fréquence et horaires sont fixés avant de commencer. Si un bureau est transformé ou utilisé autrement, nous adaptons la convention.',
      },
      {
        title: 'Des limites claires',
        text: 'Chaque page de prestation indique aussi ce qui n’est pas compris, par exemple le service hivernal ou l’entretien des installations techniques.',
      },
    ] satisfies Card[] as Card[],
  },
  faq: [
    {
      question: 'De quoi dépendent les coûts des différentes prestations ?',
      answer:
        'Chaque prestation a ses propres facteurs de coût. Pour le nettoyage d’entretien, ce sont la surface, la fréquence, les horaires et les consommables. Pour le nettoyage en profondeur, comptent l’état, le revêtement de sol et la quantité de mobilier à déplacer. La conciergerie dépend des tâches et du nombre de rondes de contrôle, le nettoyage de vitres de la surface vitrée, de la hauteur et de l’accès. Vous recevez donc le prix après la visite, par écrit.',
    },
    {
      question: 'Quelle différence entre nettoyage d’entretien et nettoyage de bureaux ?',
      answer:
        'Le [nettoyage d’entretien](/leistungen/unterhaltsreinigung) s’occupe des surfaces communes d’un immeuble, comme la cage d’escalier, l’entrée, l’ascenseur et la buanderie. Le [nettoyage de bureaux et de cabinets](/leistungen/bueroreinigung) nettoie les locaux où l’on travaille et s’adapte aux heures de travail et d’ouverture. Dans un immeuble commercial, les deux se combinent souvent.',
    },
    {
      question: 'Le nettoyage des vitres fait-il partie du nettoyage d’entretien ?',
      answer:
        'En partie. Les vitrages de l’entrée, par exemple les portes vitrées, en font partie. Les fenêtres à l’extérieur et les façades relèvent du [nettoyage de vitres et de façades](/leistungen/fenster-und-fassadenreinigung), ponctuel ou à intervalles fixes.',
    },
    {
      question: 'Que comprennent vos facility services ?',
      answer:
        'Nos propres prestations, réunies selon vos besoins : nettoyage, conciergerie, extérieurs, vitres, nettoyage en profondeur et industriel. Il y a un seul contrat avec un seul interlocuteur. Nous n’entretenons ni chauffage, ni ventilation, ni ascenseurs, et nous ne servons pas d’intermédiaire pour des artisans.',
    },
    {
      question: 'Nettoyez-vous aussi les cabinets médicaux et de thérapie ?',
      answer:
        'Oui, les cabinets font partie du [nettoyage de bureaux et de cabinets](/leistungen/bueroreinigung). Les horaires d’intervention suivent vos heures de consultation. Le retraitement des instruments et des dispositifs médicaux reste l’affaire de votre équipe.',
    },
    {
      question: 'Quand faut-il un nettoyage en profondeur, et quand un nettoyage de fin de bail ?',
      answer:
        'C’est l’occasion qui décide. Le [nettoyage de fin de bail](/leistungen/umzugsreinigung) prépare un appartement ou une surface commerciale à l’état des lieux lors de sa remise, avec garantie de remise. Le [nettoyage en profondeur](/leistungen/sonderreinigungen) ramène sols, joints et sanitaires à un état que le nettoyage courant peut de nouveau maintenir, y compris dans des locaux qui restent utilisés.',
    },
  ] as { question: string; answer: string }[],
  premium: {
    title: 'Villas, jets privés ou yachts ?',
    text: 'Pour une clientèle privée exigeante et pour les hôtels, il existe une ligne à part.',
    detail: 'Villas et résidences, cabines de jets privés, yachts sur le lac des Quatre-Cantons et le lac de Zoug. Avec des équipes fixes qui savent traiter les matériaux délicats.',
    link: 'Vers l’offre Premium',
  },
  cta: {
    title: 'Vous ne savez pas exactement ce dont vous avez besoin ?',
    text: 'Écrivez-nous en quelques phrases de quoi il s’agit. Nous examinons le bien et vous proposons la prestation qui convient.',
  },
}

const promises: Seiten['premiumOverview']['promises'] = [
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
]

export const premiumOverview = {
  line: premiumLine,
  h1: 'Des nettoyages pour des exigences particulières',
  lead: 'Pour les villas et les résidences, les résidences secondaires, les hôtels aux souhaits particuliers, les family offices, les jets privés et les yachts. Toujours la même équipe, en toute discrétion, avec la connaissance des matériaux délicats et dans votre langue.',
  nameMeaning: company.premiumBrand
    ? `Le nom ${company.premiumBrand} vient du latin « clavis », la clé. Vous nous confiez votre maison, nous en prenons soin comme si c’était la nôtre.`
    : null,
  offers: [
    { title: 'Biens de prestige', path: '/premium/luxusimmobilien', text: 'Villas, lofts et résidences, régulièrement ou avant des événements particuliers, avec l’entretien des matériaux délicats.' },
    { title: 'Jet privé', path: '/premium/privatjet', text: 'Nettoyage de cabine dans le respect des matériaux haut de gamme, en accord avec vous.' },
    { title: 'Yacht', path: '/premium/yacht', text: 'Nettoyage de bateaux et de yachts sur le lac des Quatre-Cantons et le lac de Zoug.' },
  ] satisfies LinkCard[],
  moreTitle: 'Également pour',
  more: [
    { title: 'Résidences secondaires et résidences de standing', text: 'Nettoyage avant votre arrivée et après votre départ, rondes de contrôle pendant votre absence.' },
    { title: 'Hôtels', text: 'Nettoyages spéciaux et en profondeur, interventions avant une ouverture et après des rénovations.' },
    { title: 'Bureaux et family offices', text: 'En toute confidentialité, en dehors de vos heures de travail, avec des équipes fixes.' },
    { title: 'Pièces abritant des œuvres d’art et des antiquités', text: 'Nettoyage soigneux des pièces, les œuvres d’art uniquement avec votre accord.' },
    { title: 'Événements privés', text: 'Nettoyage avant et après l’événement, aussi le week-end.' },
    { title: 'Courtiers et gérances', text: 'Nettoyage à bref délai avant une vente, une séance photo ou une remise.' },
  ] satisfies Card[],
  discretion: {
    title: 'La discrétion dès le premier message',
    paragraphs: [
      'Notre directeur traite personnellement votre demande. Sur demande, nous signons un accord de confidentialité.',
      'Chez vous, c’est toujours la même équipe qui travaille, vérifiée par nos soins. Elle connaît votre maison, vos souhaits et les règles pour les clés et le système d’alarme que nous convenons avec vous.',
      'Nous ne nettoyons les œuvres d’art qu’avec votre accord. Les horaires s’adaptent à vous, aussi le soir, le week-end ou pendant votre absence.',
    ],
  },
  promisesTitle: 'Ce sur quoi vous pouvez compter',
  promises,
  places: {
    title: 'Où nous sommes à votre service',
    text: `Au bord du lac des Quatre-Cantons, de Lucerne et Meggen jusqu’à Weggis, Vitznau, Hergiswil et Ennetbürgen, au bord des lacs de Zoug et d’Ägeri, de Zoug et Walchwil jusqu’à Oberägeri, à Engelberg et dans l’ensemble des cantons de ${cantonList}.`,
  },
  cta: {
    title: 'Demandez en toute discrétion',
    text: 'Appelez-nous ou écrivez-nous. Notre directeur traite personnellement votre demande, en toute confidentialité si vous le souhaitez.',
  },
}

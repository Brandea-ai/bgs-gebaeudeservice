import type { ServicePageContent } from '../../types'
import { answers } from '../common'

export const hauswartung: ServicePageContent = {
  path: '/leistungen/hauswartung',
  area: 'leistungen',
  eyebrow: 'Suivi d’immeubles',
  h1: 'Conciergerie pour immeubles d’habitation et de bureaux',
  lead: [
    'Un immeuble demande plus que du nettoyage : quelqu’un doit régulièrement vérifier que tout est en ordre, réparer les petits dégâts, organiser l’élimination des déchets et être présent lors des états des lieux. C’est le rôle de la conciergerie.',
    'Pour les gérances, les propriétaires et les communautés de PPE qui ne peuvent ou ne veulent pas veiller eux-mêmes à l’immeuble. Les tâches que nous prenons en charge, la fréquence de nos passages et la personne à qui nous signalons les défauts sont fixées par écrit.',
  ],
  facts: [
    { label: 'Pour', value: 'Gérances, propriétaires et communautés de PPE' },
    { label: 'Biens', value: 'Immeubles d’habitation et commerciaux' },
    { label: 'Étendue', value: 'Tâches selon les besoins, fixées par écrit' },
  ],
  scope: {
    title: 'Ce que la conciergerie prend en charge',
    intro: 'Nous composons la conciergerie de votre immeuble à partir de ces tâches :',
    items: [
      'Rondes de contrôle : vérifier régulièrement que tout est en ordre et signaler les défauts',
      'Cage d’escalier : nettoyer et maintenir en ordre',
      'Maintenir propres la buanderie et les séchoirs',
      'Petites réparations, par exemple remplacer des ampoules',
      'Surveiller la technique du bâtiment et signaler les pannes',
      'Participer aux états des lieux',
      'Organiser l’élimination des déchets et des matériaux recyclables',
      'Entretien des abords, voir [Entretien des extérieurs et des espaces verts](/leistungen/aussen-und-gruenflaechenpflege)',
    ],
    notIncluded: [
      'Nous ne proposons pas de service hivernal.',
      'Service de piquet et d’urgence 24 heures sur 24.',
      'Réparations importantes et travaux d’artisans.',
    ],
  },
  sections: [
    {
      title: 'Biens et situations typiques',
      paragraphs: [
        'Immeubles locatifs et ensembles résidentiels, propriétés par étages, immeubles mixtes avec commerces ou bureaux au rez-de-chaussée. Partout, il faut quelqu’un qui passe régulièrement, maintient la buanderie en ordre et voit quand quelque chose ne va pas.',
        'La demande arrive souvent lorsque le concierge actuel arrête, lorsqu’une gérance reprend un nouvel immeuble ou lorsque plus personne dans une communauté de PPE ne veut assumer les tâches.',
      ],
    },
    {
      title: 'Ce qui se passe lors d’une ronde de contrôle',
      paragraphs: [
        'Lors de la ronde de contrôle, nous vérifions que tout est en ordre, aussi souvent que convenu avec vous. Ce que nous pouvons régler nous-mêmes, par exemple remplacer une ampoule, nous le faisons. Tout le reste, nous le signalons à la personne que nous avons désignée avec vous.',
      ],
      items: [
        'Éclairage de la cage d’escalier, de la cave et des abords',
        'Portes, serrures et boîtes aux lettres',
        'Buanderie, séchoirs et caves',
        'Chaufferie et technique du bâtiment, pour les pannes visibles',
        'Emplacement des conteneurs et abords',
      ],
    },
    {
      title: 'La technique du bâtiment sous surveillance',
      paragraphs: [
        'Conciergerie ne veut pas dire entretien des installations. Le chauffage, la ventilation, l’ascenseur et la protection incendie sont entretenus par des entreprises spécialisées. La conciergerie les observe régulièrement, remarque tôt les pannes et les signale, par exemple un message d’erreur sur le chauffage, un robinet qui goutte à la buanderie ou un ascenseur qui s’arrête mal.',
      ],
    },
    {
      title: 'États des lieux',
      paragraphs: [
        'Nous fixons avec la gérance la façon dont nous participons aux états des lieux, par exemple si nous ouvrons l’appartement, remettons les clés ou relevons les compteurs. L’état des lieux et le procès-verbal restent du ressort de la gérance.',
        'Si l’appartement a besoin d’un nettoyage final avant la remise, nous proposons le [nettoyage de fin de bail avec garantie de remise](/leistungen/umzugsreinigung).',
      ],
    },
    {
      title: 'Collaboration avec la gérance et les propriétaires',
      paragraphs: [
        'Une bonne conciergerie repose sur des accords clairs : quelles tâches, à quelle fréquence, qui reçoit les signalements et quels petits travaux peuvent être faits sans demander. Nous le fixons par écrit.',
        'Les locataires aussi doivent savoir à qui s’adresser. Nous définissons avec vous qui est leur interlocuteur.',
      ],
    },
    {
      title: 'Cahier des charges de la conciergerie : ce qu’il doit contenir',
      paragraphs: [
        'Un cahier des charges fixe ce que la conciergerie prend en charge dans un immeuble, à quelle fréquence et qui est responsable de quoi. Il apporte de la clarté à la gérance, aux propriétaires, aux locataires et à la conciergerie, et rend les devis comparables.',
        'Chez nous, cette liste est établie après le tour des lieux : nous consignons par écrit les tâches que nous prenons en charge, la fréquence de nos passages et à qui nous signalons les défauts. Ces points font partie d’un cahier des charges :',
      ],
      items: [
        'Tâches et rythme par zone : cage d’escalier, entrée, buanderie et séchoirs, cave et emplacement des déchets, avec l’activité et sa fréquence',
        'Rondes de contrôle : à quelle fréquence, quels locaux et installations sont concernés et comment les constats sont consignés',
        'Extérieurs : quelles surfaces sont entretenues, par exemple pelouses, haies, massifs, chemins et places',
        'Responsabilités et voies de signalement : qui reçoit les signalements de la conciergerie, quels petits travaux peuvent être faits sans demander et à qui s’adressent les locataires',
        'Clés et accès : quelles clés, badges et codes la conciergerie reçoit et comment ils sont conservés',
        'Matériel : qui fournit les produits de nettoyage, le matériel de consommation et les appareils, et où ils sont entreposés',
        'Limites avec les artisans : quels travaux relèvent d’entreprises spécialisées, par exemple les réparations importantes et l’entretien du chauffage, de l’ascenseur et de la protection incendie, et qui les mandate',
      ],
    },
  ],
  steps: [
    {
      title: 'Définir les tâches',
      text: 'Nous fixons les tâches que nous prenons en charge, la fréquence de nos passages et à qui nous signalons les défauts.',
    },
    {
      title: 'Début',
      text: 'Nous commençons à la date convenue. Si les besoins de l’immeuble évoluent par la suite, nous adaptons les tâches avec vous.',
    },
  ],
  faq: [
    {
      question: 'Quelles tâches une conciergerie prend-elle en charge ?',
      answer:
        'Typiquement les rondes de contrôle, le nettoyage de la cage d’escalier, de la buanderie et des séchoirs, les petites réparations, la surveillance de la technique du bâtiment, l’élimination des déchets, la participation aux états des lieux et l’entretien des extérieurs. Les tâches que nous prenons en charge dans votre immeuble et leur fréquence sont fixées avec vous par écrit, comme dans un cahier des charges.',
    },
    {
      question: 'Quelle est la différence avec le nettoyage d’entretien ?',
      answer:
        'Le nettoyage d’entretien se fait selon une fréquence fixe. La conciergerie va plus loin : rondes de contrôle, petites réparations, technique du bâtiment, élimination des déchets, états des lieux et entretien des abords. Si vous n’avez besoin que du nettoyage, le [nettoyage d’entretien](/leistungen/unterhaltsreinigung) vous convient.',
    },
    {
      question: 'Prenez-vous aussi en charge des réparations importantes ?',
      answer:
        'Non, nous nous chargeons des petites réparations. Les travaux plus importants nécessitent une entreprise spécialisée. Nous vous signalons les dégâts constatés lors des rondes de contrôle.',
    },
    {
      question: 'Proposez-vous un service hivernal ou un service de piquet ?',
      answer: 'Non. Le service hivernal et le service de piquet ne font pas partie de notre offre.',
    },
    {
      question: 'Pouvons-nous choisir certaines tâches ?',
      answer: 'Oui. Nous composons la conciergerie à partir des tâches dont votre immeuble a besoin.',
    },
    {
      question: 'À quelle fréquence la conciergerie passe-t-elle ?',
      answer:
        'Cela dépend de la taille, de l’âge et de l’utilisation de l’immeuble. La fréquence de nos passages est fixée par écrit avec les autres tâches.',
    },
    { question: 'Êtes-vous assurés ?', answer: answers.versicherung },
    { question: 'Combien coûte la conciergerie ?', answer: answers.kosten },
    { question: 'Dans quelles régions intervenez-vous ?', answer: answers.gebiet },
  ],
  related: [
    { path: '/leistungen/aussen-und-gruenflaechenpflege', text: 'Pour les abords et les espaces verts de l’immeuble.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Si seul le nettoyage doit être confié.' },
    { path: '/leistungen/facility-services', text: 'Si le nettoyage, la conciergerie et l’entretien des abords doivent figurer dans un seul contrat.' },
  ],
  cta: {
    title: 'Un devis pour votre immeuble',
    text: 'Indiquez-nous le bien, le nombre d’appartements ou les surfaces et les tâches que vous souhaitez confier. Nous faisons un tour des lieux et établissons votre devis, gratuit et sans engagement.',
  },
}

import { company, premiumLabel } from '../../shared/company'
import { cantonList } from './common'
import { kantone } from './kantone'

/**
 * Nom, titre et description de chaque page en français (M16, M60). Mêmes clés
 * que content/de/seo.ts (adresse allemande). Titres sans la marque, metaFor()
 * dans shared/seo.ts l’ajoute.
 */

const region = cantonList

export const pages = {
  '/': {
    label: 'Accueil',
    title: `${company.brand} | Nettoyage et conciergerie à Lucerne`,
    description: `Nettoyage, conciergerie et facility services pour entreprises et immeubles, et nettoyage premium. Cantons de ${region}.`,
  },
  '/premium': {
    label: premiumLabel,
    title: 'Nettoyage premium : exigences élevées',
    description: company.premiumBrand
      ? `${company.premiumBrand}, la ligne premium de ${company.brand} : nettoyage discret pour villas, résidences secondaires, hôtels, family offices, jets privés et yachts.`
      : 'Nettoyage discret pour villas, résidences secondaires, hôtels, family offices, jets privés et yachts autour des lacs des Quatre-Cantons et de Zoug.',
  },
  '/premium/luxusimmobilien': {
    label: 'Biens de prestige',
    title: 'Nettoyage de villas de prestige',
    description: 'Nettoyage et entretien discrets de villas, lofts et résidences autour des lacs des Quatre-Cantons et de Zoug. Équipes fixes, devis sur place.',
  },
  '/premium/privatjet': {
    label: 'Jet privé',
    title: 'Nettoyage de jets privés',
    description: 'Nettoyage de cabine pour jets privés, dans le respect des matériaux haut de gamme. Discret, selon entente et avec des équipes fixes.',
  },
  '/premium/yacht': {
    label: 'Yacht',
    title: 'Nettoyage de yachts et de bateaux',
    description: 'Nettoyage de yachts et bateaux à moteur sur les lacs des Quatre-Cantons et de Zoug : intérieur, sellerie, teck et gelcoat. Discret et selon entente.',
  },
  '/leistungen': {
    label: 'Prestations',
    title: 'Prestations : nettoyage, conciergerie',
    description: 'Nettoyage d’entretien, de bureaux, spécial, de chantier, de vitres et industriel, conciergerie et facility services à Lucerne, Zoug et environs.',
  },
  '/leistungen/unterhaltsreinigung': {
    label: 'Nettoyage d’entretien',
    title: 'Nettoyage d’entretien, Lucerne et Zoug',
    description: `Nettoyage régulier d’immeubles, cages d’escalier et surfaces commerciales, avec réapprovisionnement. Cantons de ${region}.`,
  },
  '/leistungen/bueroreinigung': {
    label: 'Nettoyage de bureaux et de cabinets',
    title: 'Nettoyage de bureaux à Lucerne et Zoug',
    description: `Nettoyage de bureaux et cabinets, adapté à vos horaires de travail. Devis gratuit sur place. Cantons de ${region}.`,
  },
  '/leistungen/sonderreinigungen': {
    label: 'Nettoyages en profondeur et spéciaux',
    title: 'Nettoyage en profondeur, Lucerne et Zoug',
    description: 'Nettoyage en profondeur de logements, bureaux et surfaces commerciales, ponctuel ou périodique. Pour gérances, propriétaires et entreprises à Lucerne et Zoug.',
  },
  '/leistungen/umzugsreinigung': {
    label: 'Nettoyage de fin de bail',
    title: 'Nettoyage de fin de bail, garantie de remise',
    description: 'Nettoyage de fin de bail avant la remise du logement, avec garantie de remise. Pour gérances, propriétaires et entreprises à Lucerne et Zoug.',
  },
  '/leistungen/baureinigung': {
    label: 'Nettoyage de chantier et de fin de chantier',
    title: 'Nettoyage de chantier, Lucerne et Zoug',
    description: 'Nettoyage pendant et après les travaux de construction ou de transformation, jusqu’à la remise. Pour maîtres d’ouvrage, architectes et gérances.',
  },
  '/leistungen/fenster-und-fassadenreinigung': {
    label: 'Nettoyage de vitres et de façades',
    title: 'Nettoyage de vitres et de façades',
    description: `Nettoyage de fenêtres, vitrages et façades, aussi à haute pression, pour entreprises et immeubles. Cantons de ${region}.`,
  },
  '/leistungen/industrie-und-hallenreinigung': {
    label: 'Nettoyage industriel et de halles',
    title: 'Nettoyage industriel et de halles',
    description: `Nettoyage de halles de production, entrepôts, machines et installations, adapté à votre exploitation. Cantons de ${region}.`,
  },
  '/leistungen/hauswartung': {
    label: 'Conciergerie',
    title: 'Conciergerie à Lucerne et Zoug',
    description: 'Conciergerie d’immeuble : rondes de contrôle, cage d’escalier, buanderie, petites réparations, technique du bâtiment, états des lieux, déchets et abords.',
  },
  '/leistungen/aussen-und-gruenflaechenpflege': {
    label: 'Entretien des extérieurs et des espaces verts',
    title: 'Entretien des abords et espaces verts',
    description: `Entretien des abords et des espaces verts de votre immeuble, seul ou avec la conciergerie. Cantons de ${region}.`,
  },
  '/leistungen/facility-services': {
    label: 'Facility services',
    title: 'Facility services, un seul prestataire',
    description: 'Nettoyage, conciergerie et entretien des abords dans un seul contrat, avec un seul interlocuteur. Pour gérances et entreprises à Lucerne, Zoug et environs.',
  },
  '/einzugsgebiet': {
    label: 'Zone d’intervention',
    title: 'Zone d’intervention : Suisse centrale',
    description: `Cantons de ${region} depuis ${company.address.city}, y compris au bord des lacs et à Engelberg. Toutes les prestations partout.`,
  },
  '/einzugsgebiet/luzern': { label: 'Canton de Lucerne', ...kantone.luzern.seo },
  '/einzugsgebiet/zug': { label: 'Canton de Zoug', ...kantone.zug.seo },
  '/einzugsgebiet/aargau': { label: 'Canton d’Argovie', ...kantone.aargau.seo },
  '/einzugsgebiet/nidwalden': { label: 'Canton de Nidwald', ...kantone.nidwalden.seo },
  '/einzugsgebiet/obwalden': { label: 'Canton d’Obwald', ...kantone.obwalden.seo },
  '/blog': {
    label: 'Guide',
    title: 'Guide du nettoyage de bâtiments',
    description: 'Guide pour gérances et entreprises : cahier des charges du concierge, état des lieux de sortie, nettoyage en profondeur, choix du prestataire et coûts.',
  },
  '/blog/richtige-reinigungsfirma-finden': {
    label: 'Choisir une entreprise de nettoyage',
    title: 'Choisir une entreprise de nettoyage',
    description: 'Mandater une entreprise de nettoyage : prestations, assurance, conditions de travail, contrôle de la qualité et devis. Avec une grille de comparaison.',
  },
  '/blog/reinigungskosten-schweiz': {
    label: 'Coût du nettoyage d’entretien',
    title: 'Que coûte un nettoyage d’entretien ?',
    description: 'Ce qui détermine le coût d’un nettoyage d’entretien : heures, fréquence, horaires et salaires. Avec le calcul du montant mensuel et des conseils pour comparer.',
  },
  '/blog/pflichtenheft-hauswartung': {
    label: 'Cahier des charges du concierge',
    title: 'Cahier des charges du concierge : modèle',
    description: 'Rédiger le cahier des charges de la conciergerie : tâches, fréquence, plafond et voies de signalement, avec un modèle à imprimer et les frais accessoires.',
  },
  '/blog/wohnungsabgabe-reinigung': {
    label: 'État des lieux de sortie',
    title: 'Fin de bail : état des lieux et nettoyage',
    description: 'Fin de bail pour les gérances : quel niveau de propreté exiger, comment consigner les défauts avec précision et quand placer le nettoyage final.',
  },
  '/blog/bodenbelaege-grundreinigung': {
    label: 'Nettoyage en profondeur selon le sol',
    title: 'Nettoyage en profondeur selon le revêtement',
    description: 'Nettoyage en profondeur selon le sol : ce que supportent pierre naturelle, carrelage, linoléum, vinyle et parquet, et comment éviter les erreurs courantes.',
  },
  '/ueber-uns': {
    label: 'À propos',
    title: 'À propos de nous',
    description: `${company.legalName}, ${company.address.city} : depuis 2006, plus de 50 collaborateurs, plus de 120 clients, conseil en allemand, anglais, français et italien.`,
  },
  '/kontakt': {
    label: 'Contact',
    title: 'Contact et devis',
    description: `Appelez-nous au ${company.phone.display} ou écrivez-nous. Devis gratuit et sans engagement sur place, réponse dans les 24 heures les jours ouvrables.`,
  },
  '/impressum': {
    label: 'Mentions légales',
    title: 'Mentions légales',
    description: `Mentions légales de ${company.legalName}, ${company.address.street}, ${company.address.postalCode} ${company.address.city} : registre du commerce, numéro IDE et coordonnées.`,
  },
  '/datenschutz': {
    label: 'Protection des données',
    title: 'Déclaration de protection des données',
    description: `Comment ${company.legalName} traite vos données sur ce site web : hébergement, formulaire de contact, pas de cookies ni d’analyse, et vos droits.`,
  },
} satisfies Record<string, { label: string; title: string; description: string }>

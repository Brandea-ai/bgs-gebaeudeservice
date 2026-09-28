import { company } from '../../shared/company'
import type { Dictionary } from '../de'
import type { KantonPage } from '../de/kantone'
import { answers, responseTime } from './common'
import { nav } from './navigation'

/**
 * Textes des cinq pages cantonales en français (E80, M60). Traduction fidèle de
 * content/de/kantone.ts, mêmes clés, aucune affirmation nouvelle (E18). Noms des
 * cantons, lacs et villes en français quand il en existe un (Lucerne, Zoug, lac
 * des Quatre-Cantons), sinon le nom officiel. Titres sans la marque, metaFor()
 * dans shared/seo.ts l’ajoute.
 */

const sameTerms = 'Toutes, aux mêmes conditions dans toute la zone'
const seat = `${company.address.street}, ${company.address.postalCode} ${company.address.city}`
const menu = nav.areaMenu.cantons

const luzern: KantonPage = {
  name: 'Lucerne',
  kuerzel: 'LU',
  seo: {
    title: 'Entreprise de nettoyage Lucerne : conciergerie',
    description:
      'Nettoyage et conciergerie dans le canton de Lucerne, depuis notre siège d’Emmenbrücke : ville, agglomération, rives du lac, Sursee et Seetal. Devis sur place.',
  },
  h1: 'Nettoyage et conciergerie dans le canton de Lucerne',
  lead: [
    'Notre siège se trouve à Emmenbrücke, au cœur de l’agglomération lucernoise. D’ici, nous nettoyons et entretenons des immeubles, des bureaux et des surfaces commerciales dans tout le canton, de la ville de Lucerne au lac de Sempach et jusque dans l’Entlebuch.',
    'Nous travaillons dans le nettoyage et la conciergerie depuis 2006. Avant de vous remettre un devis, nous visitons votre bien sur place. La visite et le devis sont gratuits et sans engagement.',
  ],
  facts: [
    { label: 'Notre siège', value: `${company.address.city}, commune d’Emmen` },
    { label: 'Chef-lieu', value: 'Lucerne' },
    { label: 'Lacs', value: 'Lac des Quatre-Cantons, lac de Sempach, lac de Baldegg' },
    { label: 'Prestations', value: sameTerms },
  ],
  regionen: [
    { title: 'Ville et agglomération', orte: ['Lucerne', 'Emmen', 'Kriens', 'Horw', 'Ebikon', 'Adligenswil'] },
    { title: 'Au bord du lac des Quatre-Cantons', orte: ['Meggen', 'Weggis', 'Vitznau', 'Greppen'] },
    { title: 'Sursee et lac de Sempach', orte: ['Sursee', 'Sempach', 'Nottwil', 'Eich'] },
    { title: 'Seetal', orte: ['Hochdorf', 'Hitzkirch'] },
    { title: 'Willisau et Entlebuch', orte: ['Willisau', 'Entlebuch', 'Schüpfheim', 'Escholzmatt-Marbach'] },
  ],
  objekte: [
    {
      title: 'Immeubles locatifs et PPE',
      text: 'La ville et les communes de l’agglomération comptent de nombreux immeubles d’habitation et commerciaux. Nous gardons propres la cage d’escalier, la buanderie et les abords et, sur demande, passons régulièrement vérifier que tout est en ordre.',
    },
    {
      title: 'Bureaux et cabinets',
      text: 'En ville de Lucerne et dans des centres comme Sursee, nous nettoyons bureaux et cabinets à des horaires que nous adaptons avec vous à votre activité.',
    },
    {
      title: 'Changement de locataire',
      text: 'Lors d’un changement de locataire, nous nettoyons l’appartement avant la remise, avec garantie de remise. La conciergerie participe à la remise.',
    },
    {
      title: 'Biens au bord du lac',
      text: 'Pour les villas et résidences au bord du lac des Quatre-Cantons, par exemple à Meggen, Weggis ou Vitznau, nous proposons notre offre Premium : toujours la même équipe, sur demande avec un accord de confidentialité.',
    },
  ],
  leistungen: [
    { path: '/leistungen/hauswartung', title: 'Conciergerie', text: 'Pour les gérances et les communautés de PPE qui confient l’entretien de leur immeuble.' },
    { path: '/leistungen/unterhaltsreinigung', title: 'Nettoyage d’entretien', text: 'Cages d’escalier, entrées et locaux communs à un rythme fixe.' },
    { path: '/leistungen/sonderreinigungen', title: 'Nettoyages spéciaux', text: 'Nettoyage de déménagement et de fin de bail avec garantie de remise, et nettoyages en profondeur.' },
    { path: '/leistungen/bueroreinigung', title: 'Nettoyage de bureaux et de cabinets', text: 'Pour bureaux et cabinets, adapté à vos horaires de travail et d’ouverture.' },
    { path: '/premium/luxusimmobilien', title: 'Villas et résidences', text: 'Nettoyage et entretien discrets de maisons au bord du lac.' },
  ],
  planung: {
    title: 'Déplacement et planification',
    paragraphs: [
      'Comme notre siège se trouve dans le canton, les trajets vers la ville et l’agglomération sont courts. Pour les biens dans le Seetal, à Willisau ou dans l’Entlebuch, nous fixons le rythme et les horaires d’intervention lors de la visite.',
      'Convenez avec nous avant la première intervention de l’endroit où notre équipe peut se garer et de la manière dont elle accède aux clés et aux locaux. Au centre-ville en particulier, une place fixe pour le véhicule et le matériel est utile.',
    ],
  },
  faq: [
    { question: 'Où se trouve votre siège ?', answer: `À l’adresse ${seat}, dans l’agglomération lucernoise.` },
    {
      question: 'Travaillez-vous aussi en dehors de la ville de Lucerne ?',
      answer: 'Oui, dans tout le canton, du Seetal à l’Entlebuch, avec toutes nos prestations et aux mêmes conditions.',
    },
    {
      question: 'Vous chargez-vous du nettoyage lors d’un changement de locataire ?',
      answer: 'Oui. Le nettoyage de déménagement et de fin de bail avec garantie de remise fait partie de nos [nettoyages spéciaux](/leistungen/sonderreinigungen).',
    },
    { question: 'Intervenez-vous aussi à court terme ?', answer: 'Appelez-nous. Nous voyons avec vous ce qui est possible à court terme.' },
  ],
  menuText: menu.luzern.text,
}

const zug: KantonPage = {
  name: 'Zoug',
  kuerzel: 'ZG',
  seo: {
    title: 'Entreprise de nettoyage Zoug : bureaux, immeubles',
    description:
      'Nettoyage de bureaux, vitres et conciergerie à Zoug : sièges d’entreprise, cabinets et immeubles de Zoug et Baar à la vallée d’Ägeri. En quatre langues.',
  },
  h1: 'Nettoyage de bureaux et d’immeubles dans le canton de Zoug',
  lead: [
    'De nombreuses entreprises, y compris internationales, ont leur siège dans le canton de Zoug. Elles ont besoin d’un nettoyage qui suit le rythme de l’activité et ne perturbe pas la journée de travail.',
    'Nos collaboratrices et collaborateurs parlent allemand, anglais, français et italien. Cela facilite la coordination avec des équipes dont la langue de travail n’est pas l’allemand.',
  ],
  facts: [
    { label: 'Chef-lieu', value: 'Zoug' },
    { label: 'Lacs', value: 'Lac de Zoug, lac d’Ägeri' },
    { label: 'Communes', value: 'Les onze communes du canton' },
    { label: 'Langues', value: 'Allemand, anglais, français, italien' },
  ],
  regionen: [
    { title: 'Zoug, Baar et Steinhausen', orte: ['Zoug', 'Baar', 'Steinhausen'] },
    { title: 'Au bord du lac de Zoug', orte: ['Cham', 'Hünenberg', 'Risch (Rotkreuz)', 'Walchwil'] },
    { title: 'Vallée d’Ägeri et communes de montagne', orte: ['Unterägeri', 'Oberägeri', 'Menzingen', 'Neuheim'] },
  ],
  objekte: [
    {
      title: 'Bureaux et sièges d’entreprise',
      text: 'Du petit bureau au siège sur plusieurs étages : postes de travail, salles de réunion, réception, cuisinettes et sanitaires, à des horaires que nous fixons avec vous.',
    },
    {
      title: 'Family offices et locaux confidentiels',
      text: 'Là où se trouvent des documents confidentiels, c’est toujours la même équipe qui intervient chez vous, y compris en dehors de vos heures de travail. Sur demande, nous signons un accord de confidentialité.',
    },
    {
      title: 'Vitres et façades',
      text: 'Les immeubles de bureaux ont souvent de grandes surfaces vitrées. Nous nettoyons fenêtres, portes vitrées et façades séparément ou en complément du nettoyage de bureaux.',
    },
    {
      title: 'Habiter au bord des lacs de Zoug et d’Ägeri',
      text: 'Pour les villas et résidences au bord du lac, par exemple à Walchwil ou à Oberägeri, nous proposons notre offre Premium. Nous nettoyons aussi les bateaux et yachts sur le lac de Zoug.',
    },
  ],
  leistungen: [
    { path: '/leistungen/bueroreinigung', title: 'Nettoyage de bureaux et de cabinets', text: 'Pour bureaux, administrations et cabinets, adapté à vos horaires de travail.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', title: 'Nettoyage de vitres et de façades', text: 'Pour fenêtres, surfaces vitrées et façades d’immeubles commerciaux.' },
    { path: '/leistungen/facility-services', title: 'Facility services', text: 'Nettoyage, conciergerie et extérieurs dans un seul contrat, avec un seul interlocuteur.' },
    { path: '/leistungen/sonderreinigungen', title: 'Nettoyages spéciaux', text: 'Nettoyage en profondeur lors d’un changement de bureaux, nettoyage de déménagement avec garantie de remise.' },
    { path: '/premium/yacht', title: 'Yacht', text: 'Intérieur, sellerie, teck et gelcoat, sur le lac de Zoug et le lac des Quatre-Cantons.' },
  ],
  planung: {
    title: 'Déplacement et planification',
    paragraphs: [
      'Depuis Emmenbrücke, nous rejoignons le canton de Zoug par l’autoroute A14. Nous planifions les interventions dans les bureaux de façon à ne pas perturber votre activité, par exemple en dehors de vos heures de bureau.',
      'Dans les immeubles commerciaux avec réception, cartes d’accès ou système d’alarme, nous réglons l’accès avant la première intervention. Si vous avez plusieurs sites dans notre zone, indiquez-les tous dans votre demande.',
    ],
  },
  faq: [
    {
      question: 'Pouvons-nous communiquer en anglais ?',
      answer: `${answers.sprachen} Indiquez-nous dans votre demande la langue que vous préférez.`,
    },
    {
      question: 'Nettoyez-vous en dehors des heures de bureau ?',
      answer: 'Nous fixons les horaires d’intervention avec vous, en fonction de vos heures de travail et d’ouverture.',
    },
    {
      question: 'Intervenez-vous aussi à Baar, à Cham ou dans la vallée d’Ägeri ?',
      answer: 'Oui, dans toutes les communes du canton de Zoug, avec toutes nos prestations et aux mêmes conditions.',
    },
    { question: 'Êtes-vous assurés ?', answer: answers.versicherung },
  ],
  menuText: menu.zug.text,
}

const aargau: KantonPage = {
  name: 'Argovie',
  kuerzel: 'AG',
  seo: {
    title: 'Nettoyage en Argovie : industrie et conciergerie',
    description:
      'Nettoyage industriel, de halles et de chantier, conciergerie en Argovie : du Freiamt et du Seetal à Aarau et Baden, aux mêmes conditions qu’à Lucerne.',
  },
  h1: 'Nettoyage pour l’industrie, l’artisanat et les immeubles en Argovie',
  lead: [
    'L’Argovie compte de nombreuses entreprises industrielles et artisanales. Halles de production et de stockage, ateliers et bâtiments commerciaux ont besoin d’un nettoyage qui suit les équipes et les processus.',
    'Du Freiamt et du Seetal, à la frontière lucernoise, jusqu’aux régions d’Aarau et de Baden, nous intervenons dans tout le canton, avec toutes nos prestations et aux mêmes conditions qu’à Lucerne.',
  ],
  facts: [
    { label: 'Chef-lieu', value: 'Aarau' },
    { label: 'Lacs et rivières', value: 'Lac de Hallwil, Aar, Reuss, Limmat et Rhin' },
    { label: 'Spécialité', value: 'Halles, entrepôts, ateliers et immeubles d’habitation' },
    { label: 'Prestations', value: sameTerms },
  ],
  regionen: [
    { title: 'Freiamt', orte: ['Muri', 'Wohlen', 'Bremgarten', 'Sins'] },
    { title: 'Seetal et lac de Hallwil', orte: ['Meisterschwanden', 'Seengen', 'Beinwil am See'] },
    { title: 'Aarau, Lenzbourg et Zofingue', orte: ['Aarau', 'Lenzbourg', 'Zofingue', 'Oftringen'] },
    { title: 'Région de Baden et du Mutschellen', orte: ['Baden', 'Wettingen', 'Ennetbaden', 'Bergdietikon', 'Oberwil-Lieli'] },
    { title: 'Brugg et Fricktal', orte: ['Brugg', 'Windisch', 'Rheinfelden', 'Frick'] },
  ],
  objekte: [
    {
      title: 'Halles de production et de stockage',
      text: 'Nous nettoyons sols de halles, zones de stockage, rayonnages et voies de circulation, ponctuellement ou régulièrement, à des horaires adaptés à la production et au travail en équipes.',
    },
    {
      title: 'Machines et installations',
      text: 'Nous nettoyons les machines selon vos consignes et en accord avec votre service de maintenance. Nous fixons avant l’intervention quand une installation est à l’arrêt et quels produits conviennent.',
    },
    {
      title: 'Constructions neuves et transformations',
      text: 'Après la construction d’une halle ou la transformation d’un bâtiment commercial, nous nettoyons jusqu’à la remise pour que l’exploitation puisse démarrer.',
    },
    {
      title: 'Immeubles d’habitation',
      text: 'Pour les immeubles locatifs et les PPE, nous assurons le nettoyage d’entretien et la conciergerie. Les villas au bord du lac de Hallwil ou dans la région de Baden sont prises en charge par notre offre Premium.',
    },
  ],
  leistungen: [
    { path: '/leistungen/industrie-und-hallenreinigung', title: 'Nettoyage industriel et de halles', text: 'Halles de production et de stockage, ateliers, machines et installations.' },
    { path: '/leistungen/baureinigung', title: 'Nettoyage de chantier et de fin de chantier', text: 'Pendant et après les travaux de construction et de transformation, jusqu’à la remise.' },
    { path: '/leistungen/bueroreinigung', title: 'Nettoyage de bureaux et de cabinets', text: 'Pour bureaux, locaux du personnel et vestiaires de l’entreprise.' },
    { path: '/leistungen/hauswartung', title: 'Conciergerie', text: 'Rondes de contrôle, buanderie, petites réparations et élimination des déchets pour les immeubles d’habitation.' },
    { path: '/leistungen/facility-services', title: 'Facility services', text: 'Nettoyage, conciergerie et extérieurs pour votre site d’exploitation, d’un seul prestataire.' },
  ],
  planung: {
    title: 'Déplacement et planification',
    paragraphs: [
      'Les trajets d’Emmenbrücke vers l’Argovie varient selon la région. C’est pourquoi nous fixons le rythme, les horaires d’intervention et les arrêts des installations lors de la visite et les consignons dans le devis.',
      'Avant le devis, nous visitons halles, installations et processus lors d’un tour du site. Vos règles de sécurité et d’exploitation s’appliquent aussi à notre équipe, nous les clarifions avec vous avant la première intervention.',
    ],
  },
  faq: [
    {
      question: 'Les conditions sont-elles les mêmes en Argovie qu’à Lucerne ?',
      answer: 'Oui. Nous proposons toutes nos prestations dans toute la zone d’intervention aux mêmes conditions.',
    },
    {
      question: 'Nettoyez-vous aussi pendant le travail en équipes ?',
      answer: 'Nous adaptons avec vous les horaires d’intervention à la production et aux équipes, pour que le nettoyage ne ralentisse pas l’exploitation.',
    },
    {
      question: 'La maintenance des machines est-elle comprise ?',
      answer: 'Non. Nous nettoyons machines et installations selon vos consignes, la maintenance et les réparations restent l’affaire de votre service de maintenance.',
    },
    { question: 'Nettoyez-vous avec des produits respectueux de l’environnement ?', answer: answers.mittel },
  ],
  menuText: menu.aargau.text,
}

const nidwalden: KantonPage = {
  name: 'Nidwald',
  kuerzel: 'NW',
  seo: {
    title: 'Entreprise de nettoyage et conciergerie, Nidwald',
    description:
      'Nettoyage et conciergerie à Nidwald : biens au bord du lac des Quatre-Cantons, résidences secondaires et villas de Hergiswil à Beckenried. Devis sur place.',
  },
  h1: 'Nettoyage et conciergerie à Nidwald',
  lead: [
    'Nidwald s’étend de la rive du lac des Quatre-Cantons, à Hergiswil et Ennetbürgen, jusqu’à la vallée d’Engelberg. De nombreux biens se trouvent près du lac, certains ne sont habités qu’une partie de l’année.',
    'Nous nettoyons et entretenons immeubles d’habitation et commerciaux, résidences secondaires et villas dans tout le canton. Nous établissons le devis après une visite, gratuitement et sans engagement.',
  ],
  facts: [
    { label: 'Chef-lieu', value: 'Stans' },
    { label: 'Lac', value: 'Lac des Quatre-Cantons' },
    { label: 'Communes', value: 'Les onze communes du canton' },
    { label: 'Prestations', value: sameTerms },
  ],
  regionen: [
    { title: 'Au bord du lac des Quatre-Cantons', orte: ['Hergiswil', 'Stansstad', 'Ennetbürgen', 'Buochs', 'Beckenried'] },
    { title: 'Stans et environs', orte: ['Stans', 'Oberdorf', 'Ennetmoos'] },
    { title: 'Vallée d’Engelberg et Emmetten', orte: ['Dallenwil', 'Wolfenschiessen', 'Emmetten'] },
  ],
  objekte: [
    {
      title: 'Résidences secondaires',
      text: 'Selon l’inventaire des logements de la Confédération, environ un tiers des logements d’Emmetten sont des résidences secondaires. Nous nettoyons avant votre arrivée et après votre départ, et vérifions que tout est en ordre pendant votre absence.',
    },
    {
      title: 'Villas et résidences au bord du lac',
      text: 'Dans les maisons avec pierre naturelle, parquet et grandes surfaces vitrées, nous nettoyons dans le respect des matériaux. C’est toujours la même équipe qui intervient chez vous, sur demande avec un accord de confidentialité.',
    },
    {
      title: 'Propriété par étages',
      text: 'Si les propriétaires ne vivent pas tous sur place, la conciergerie assure les rondes de contrôle, la buanderie, l’élimination des déchets et les remises d’appartements, et signale les défauts à l’interlocuteur convenu.',
    },
    {
      title: 'Bateaux sur le lac des Quatre-Cantons',
      text: 'Nous nettoyons yachts et bateaux à moteur à l’intérieur et à l’extérieur, dans le respect du teck, du gelcoat et de la sellerie.',
    },
  ],
  leistungen: [
    { path: '/leistungen/hauswartung', title: 'Conciergerie', text: 'Pour les communautés de PPE et les gérances, convenue par écrit.' },
    { path: '/premium/luxusimmobilien', title: 'Villas et résidences secondaires', text: 'Nettoyage avant votre arrivée et après votre départ, rondes de contrôle pendant votre absence.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', title: 'Nettoyage de vitres et de façades', text: 'Pour les grandes baies vitrées et surfaces vitrées.' },
    { path: '/leistungen/aussen-und-gruenflaechenpflege', title: 'Entretien des extérieurs et des espaces verts', text: 'Pour le jardin et les abords de votre bien.' },
    { path: '/premium/yacht', title: 'Yacht', text: 'Pour bateaux et yachts sur le lac des Quatre-Cantons.' },
  ],
  planung: {
    title: 'Déplacement et planification',
    paragraphs: [
      'Depuis Emmenbrücke, le trajet passe par Lucerne et l’autoroute A2 jusqu’à Nidwald. Le nettoyage avant votre arrivée se planifie de préférence avec un peu d’avance, communiquez-nous donc vos dates le plus tôt possible.',
      'Pour les résidences secondaires, nous convenons de règles fixes pour les clés et l’alarme et déterminons à qui nous signalons ce que nous remarquons lors des rondes de contrôle.',
    ],
  },
  faq: [
    {
      question: 'Vous occupez-vous des résidences secondaires pendant notre absence ?',
      answer: 'Oui. Nous nettoyons avant votre arrivée et après votre départ et effectuons des rondes de contrôle. Plus d’informations sous [Biens de prestige](/premium/luxusimmobilien).',
    },
    {
      question: 'Nettoyez-vous aussi les bateaux ?',
      answer: 'Oui, yachts et bateaux à moteur sur le lac des Quatre-Cantons : intérieur, sellerie, teck et gelcoat. Plus d’informations sous [Yacht](/premium/yacht).',
    },
    {
      question: 'Comment obtenir un devis ?',
      answer: `Appelez-nous ou écrivez-nous. Nous vous répondons ${responseTime}, visitons le bien et vous envoyons le devis par écrit.`,
    },
    { question: 'Êtes-vous assurés ?', answer: answers.versicherung },
  ],
  menuText: menu.nidwalden.text,
}

const obwalden: KantonPage = {
  name: 'Obwald',
  kuerzel: 'OW',
  seo: {
    title: 'Nettoyage à Obwald : Sarnen et Engelberg',
    description:
      'Nettoyage et conciergerie à Obwald : immeubles dans le Sarneraatal, résidences secondaires et hôtels à Engelberg. Devis gratuit après une visite.',
  },
  h1: 'Nettoyage et conciergerie à Obwald',
  lead: [
    'Obwald se compose de deux parties : le Sarneraatal avec le chef-lieu Sarnen, et la haute vallée d’Engelberg, que l’on rejoint en passant par Nidwald.',
    'Dans le Sarneraatal, nous nettoyons et entretenons immeubles d’habitation et commerciaux ainsi que des locaux artisanaux. Engelberg est marqué par les résidences secondaires et les hôtels, nous proposons pour les deux nettoyage et suivi.',
  ],
  facts: [
    { label: 'Chef-lieu', value: 'Sarnen' },
    { label: 'Lacs', value: 'Lac de Sarnen, lac de Lungern' },
    { label: 'Communes', value: 'Les sept communes, Engelberg compris' },
    { label: 'Hors de notre offre', value: 'Service hivernal' },
  ],
  regionen: [
    { title: 'Sarneraatal', orte: ['Sarnen', 'Kerns', 'Sachseln', 'Alpnach'] },
    { title: 'En direction du col du Brünig', orte: ['Giswil', 'Lungern'] },
    { title: 'Haute vallée', orte: ['Engelberg'] },
  ],
  objekte: [
    {
      title: 'Résidences secondaires à Engelberg',
      text: 'Selon l’inventaire des logements de la Confédération, plus de la moitié des logements d’Engelberg sont des résidences secondaires. Nous nettoyons avant votre arrivée et après votre départ, et vérifions que tout est en ordre pendant votre absence.',
    },
    {
      title: 'Hôtels',
      text: 'Pour les hôtels, nous assurons des nettoyages en profondeur et spéciaux, par exemple avant une ouverture, avant le début de la saison ou après une rénovation.',
    },
    {
      title: 'Immeubles dans le Sarneraatal',
      text: 'À Sarnen, Kerns, Sachseln et Alpnach, nous nettoyons cages d’escalier, bureaux et surfaces commerciales et assurons la conciergerie d’immeubles d’habitation et commerciaux.',
    },
    {
      title: 'Déménagement et remise',
      text: 'Lorsqu’un appartement change de propriétaire ou de locataire, nous le nettoyons avant la remise, avec garantie de remise.',
    },
  ],
  leistungen: [
    { path: '/premium/luxusimmobilien', title: 'Villas et résidences secondaires', text: 'Nettoyage avant votre arrivée et après votre départ, rondes de contrôle pendant votre absence.' },
    { path: '/leistungen/sonderreinigungen', title: 'Nettoyages spéciaux', text: 'Nettoyage en profondeur pour hôtels et appartements, nettoyage de déménagement avec garantie de remise.' },
    { path: '/leistungen/baureinigung', title: 'Nettoyage de chantier et de fin de chantier', text: 'Après transformation et rénovation, jusqu’à la remise.' },
    { path: '/leistungen/hauswartung', title: 'Conciergerie', text: 'Rondes de contrôle, buanderie, élimination des déchets et remises d’appartements.' },
    { path: '/leistungen/unterhaltsreinigung', title: 'Nettoyage d’entretien', text: 'Cages d’escalier et surfaces commerciales à un rythme fixe.' },
  ],
  planung: {
    title: 'Déplacement et planification',
    paragraphs: [
      'Nous rejoignons le Sarneraatal depuis Emmenbrücke par Lucerne et l’autoroute A8. Pour Engelberg, le trajet passe par Nidwald et la vallée d’Engelberg.',
      'À Engelberg, nous adaptons les interventions aux arrivées, aux départs et à la saison. Clarifiez lors de la visite l’accès, le stationnement et la remise des clés.',
      'Nous ne proposons pas de service hivernal. Le déneigement autour du bien est donc à confier séparément.',
    ],
  },
  faq: [
    {
      question: 'Venez-vous aussi à Engelberg ?',
      answer: 'Oui. Engelberg fait partie du canton d’Obwald et donc de notre zone d’intervention, avec toutes nos prestations et aux mêmes conditions.',
    },
    {
      question: 'Nettoyez-vous avant notre arrivée ?',
      answer: 'Oui. Nous nettoyons avant votre arrivée et après votre départ. Communiquez-nous vos dates le plus tôt possible.',
    },
    { question: 'Assurez-vous le service hivernal ?', answer: 'Non, nous ne proposons pas de service hivernal.' },
    { question: 'Combien coûte le nettoyage ?', answer: answers.kosten },
  ],
  menuText: menu.obwalden.text,
}

export const kantone: Dictionary['kantone']['seiten'] = { luzern, zug, aargau, nidwalden, obwalden }

export const kantonUi: Dictionary['kantone']['ui'] = {
  regionen: 'Régions et localités',
  objekte: 'Biens typiques',
  leistungen: 'Prestations demandées',
  weitere: 'Autres cantons',
  overview: 'Toute la zone d’intervention',
  toCanton: 'Voir la page du canton',
  seat: 'Notre siège',
  cta: {
    title: 'Visite et devis',
    text: `Décrivez-nous le bien et le lieu. Nous vous répondons ${responseTime} et passons pour la visite, gratuitement et sans engagement.`,
  },
}

export const kantoneUebersicht: Dictionary['kantone']['uebersicht'] = {
  title: 'Votre canton en détail',
  text: 'Chaque canton a sa propre page : les régions et localités qui en font partie, les biens typiques et ce à quoi nous veillons lors de la planification.',
}

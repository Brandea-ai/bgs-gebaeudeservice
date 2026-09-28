import { company } from '../../shared/company'
import type { Dictionary } from '../de'
import type { KantonPage } from '../de/kantone'
import type { Source } from '../types'
import { responseTime } from './common'
import { nav } from './navigation'

/**
 * Textes des cinq pages cantonales en français (E80, E85, M60). Traduction
 * fidèle de content/de/kantone.ts, mêmes clés, aucune affirmation nouvelle
 * (E18). Noms des cantons, lacs et villes en français quand il en existe un
 * (Lucerne, Zoug, lac des Quatre-Cantons), sinon le nom officiel. Mêmes sources
 * primaires qu’en allemand, la plupart disponibles en allemand seulement.
 * Titres sans la marque, metaFor() dans shared/seo.ts l’ajoute.
 */

const seat = `${company.address.street}, ${company.address.postalCode} ${company.address.city}`
const menu = nav.areaMenu.cantons

/** Sources primaires, lues le 28 septembre 2026 (mêmes liens que la page allemande) */
const quelle = {
  are: {
    label: 'Office fédéral du développement territorial ARE, inventaire des logements et proportion de résidences secondaires, état au 31.03.2026',
    href: 'https://map.geo.admin.ch/?lang=fr&layers=ch.are.wohnungsinventar-zweitwohnungsanteil',
  },
  luRuhetage: {
    label: 'Canton de Lucerne, loi sur les jours de repos (SRL no 855), § 1a (en allemand)',
    href: 'https://srl.lu.ch/app/de/texts_of_law/855',
  },
  luMeldung: {
    label: 'Ville de Lucerne, changement de locataire et obligation d’annonce des propriétaires (en allemand)',
    href: 'https://www.stadtluzern.ch/dienstleistungeninformation/28997',
  },
  vogelwarte: {
    label: 'Station ornithologique suisse, taille des arbustes et des haies en zone bâtie (en allemand)',
    href: 'https://www.vogelwarte.ch/de/ratgeber/schnitt-von-straeuchern-und-hecken-in-siedlungen-wann-und-wie/',
  },
  zgMietrecht: {
    label: 'Canton de Zoug, questions fréquentes sur le droit du bail (en allemand)',
    href: 'https://zg.ch/de/recht-justiz/zivilverfahren/schlichtung/faq-zum-mietrecht',
  },
  zgFeiertage: {
    label: 'Canton de Zoug, durée du travail et du repos, jours fériés (en allemand)',
    href: 'https://zg.ch/de/wirtschaft-arbeit/arbeitsbedingungen/arbeits-und-ruhezeiten',
  },
  zgFeiertagsaehnlich: {
    label: 'Office de l’économie et du travail de Zoug, jours fériés 2026 et 2027 (PDF, en allemand)',
    href: 'https://cdn.zg.ch/dam/jcr:d241f3f6-4c0c-4bb2-9096-b53dd371501c/Feiertage_2026_2027_Kt-ZG_Daten.pdf',
  },
  agFeiertage: {
    label: 'Canton d’Argovie, Office de l’économie et du travail, notice sur les jours fériés légaux (PDF, en allemand)',
    href: 'https://www.ag.ch/media/kanton-aargau/dvi/dokumente/awa/awa/arbeitnehmerschutz-im-betrieb/feiertage.pdf',
  },
  nwRuhetage: {
    label: 'Canton de Nidwald, loi sur les jours de repos (NG 921.1), art. 2 (en allemand)',
    href: 'https://gesetze.nw.ch/app/de/texts_of_law/921.1',
  },
  owSchlichtung: {
    label: 'Canton d’Obwald, autorité de conciliation, questions sur la résiliation (en allemand)',
    href: 'https://www.ow.ch/fachbereiche/2131',
  },
  owRuhetage: {
    label: 'Canton d’Obwald, loi sur les jours de repos (GDB 975.2), art. 2 (en allemand)',
    href: 'https://gdb.ow.ch/app/de/texts_of_law/975.2',
  },
} satisfies Record<string, Source>

const luzern: KantonPage = {
  name: 'Lucerne',
  kuerzel: 'LU',
  seo: {
    title: 'Entreprise de nettoyage à Lucerne',
    description:
      'Entreprise de nettoyage à Lucerne, siège à Emmenbrücke : conciergerie, nettoyage d’entretien et de bureaux jusqu’à l’Entlebuch. Devis gratuit après une visite.',
  },
  h1: 'Entreprise de nettoyage à Lucerne, siège à Emmenbrücke',
  lead: [
    'Notre siège se trouve à Emmenbrücke, au cœur de l’agglomération lucernoise. D’ici, nous nettoyons et entretenons des immeubles, des bureaux et des surfaces commerciales dans tout le canton, de la ville de Lucerne au lac de Sempach et jusque dans l’Entlebuch.',
    'Pour les gérances et les communautés de PPE, cela signifie des trajets courts : Kriens, Horw, Ebikon et la ville sont juste à côté, Sursee et Hochdorf à peine plus loin.',
  ],
  facts: [
    { label: 'Notre siège', value: `${company.address.city}, commune d’Emmen` },
    { label: 'Priorité', value: 'Immeubles locatifs, PPE, bureaux et cabinets' },
    { label: 'Jours de repos publics', value: 'Dix dans tout le canton, la Saint-Joseph selon la commune' },
    { label: 'Résidences secondaires', value: 'Flühli, Vitznau et Weggis au-delà de 20 %' },
  ],
  regionen: [
    { title: 'Ville et agglomération', orte: ['Lucerne', 'Emmen', 'Kriens', 'Horw', 'Ebikon', 'Adligenswil'] },
    { title: 'Au bord du lac des Quatre-Cantons', orte: ['Meggen', 'Weggis', 'Vitznau', 'Greppen'] },
    { title: 'Sursee et lac de Sempach', orte: ['Sursee', 'Sempach', 'Nottwil', 'Eich', 'Triengen', 'Ruswil'] },
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
      text: 'En ville de Lucerne et dans des centres comme Sursee, nous nettoyons bureaux et cabinets à des horaires qui s’accordent avec vos consultations et vos heures de bureau.',
    },
    {
      title: 'Changement de locataire pour la gérance',
      text: 'Quand un locataire part, nous nettoyons l’appartement avant sa remise au suivant, avec garantie de remise. La conciergerie participe à la remise.',
    },
    {
      title: 'Résidences secondaires et villas au bord du lac',
      text: 'Autour de Weggis, de Vitznau et à Sörenberg, beaucoup de logements ne sont habités qu’une partie de l’année. Les villas et résidences secondaires au bord de l’eau, de Meggen à Vitznau, relèvent de notre [offre Premium](/premium).',
      premium: true,
    },
  ],
  leistungen: [
    { path: '/leistungen/hauswartung', text: 'Pour les gérances et les communautés de PPE qui confient l’entretien de leur immeuble.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Cage d’escalier, entrée et locaux communs, par exemple à Emmen, Kriens ou Horw.' },
    { path: '/leistungen/umzugsreinigung', text: 'Nettoyage final avant la remise du logement, avec garantie de remise.' },
    { path: '/leistungen/bueroreinigung', text: 'Pour cabinets et bureaux en ville, à Kriens ou à Sursee.' },
    { path: '/premium/luxusimmobilien', title: 'Villas et résidences', text: 'Nettoyage et entretien discrets de maisons au bord du lac.' },
  ],
  planung: {
    title: 'Trajets depuis Emmenbrücke',
    paragraphs: [
      'Comme notre siège se trouve dans le canton, les trajets vers la ville et l’agglomération sont courts. Vers le Seetal, Willisau ou l’Entlebuch, la route est plus longue. Là, il vaut la peine de regrouper plusieurs travaux en une intervention, par exemple cage d’escalier et abords le même jour.',
      'Au centre-ville, une place fixe pour le véhicule et le matériel est utile. Réglez avant la première intervention où notre équipe peut se garer et comment elle accède aux clés et aux locaux.',
      'La Station ornithologique suisse a son siège à Sempach. Elle recommande de tailler haies et arbustes en dehors de la période de nidification, idéalement entre novembre et mars. Pour l’[entretien des extérieurs](/leistungen/aussen-und-gruenflaechenpflege) d’un immeuble lucernois, cela signifie : placer la taille des haies en hiver.',
    ],
    sources: ['vogelwarte'],
  },
  daten: [
    {
      label: 'Jours de repos publics dans tout le canton',
      items: ['Nouvel An', 'Vendredi saint', 'Ascension', 'Fête-Dieu', '1er Août', 'Assomption', 'Toussaint', 'Immaculée Conception', 'Noël', 'Saint-Étienne'],
      text: 'Dans le canton de Lucerne, le lundi de Pâques et le lundi de Pentecôte n’en font pas partie.',
      source: 'luRuhetage',
    },
    {
      label: 'Saint-Joseph et fête patronale',
      text: 'Le 19 mars et la fête patronale de la paroisse ne sont jours de repos que là où la commune les déclare comme tels. Le secrétariat communal sait si cela vaut pour votre immeuble.',
      source: 'luRuhetage',
    },
    {
      label: 'Changement de locataire en ville de Lucerne',
      text: 'Propriétaires et bailleurs annoncent les arrivées et départs de leurs locataires au contrôle des habitants, avec numéro du logement et date. Cette même date sert à planifier le nettoyage final.',
      source: 'luMeldung',
    },
    {
      label: 'Beaucoup de résidences secondaires',
      text: 'Flühli avec Sörenberg 58,31 %, Vitznau 32,71 % et Weggis 24,95 %. Dans ces trois communes s’appliquent les règles de construction de la loi sur les résidences secondaires.',
      source: 'are',
    },
  ],
  faq: [
    { question: 'Où se trouve votre siège ?', answer: `À l’adresse ${seat}, dans l’agglomération lucernoise.` },
    {
      question: 'Travaillez-vous aussi dans l’Entlebuch ou le Seetal ?',
      answer: 'Oui, dans tout le canton, de Hochdorf et Hitzkirch à Schüpfheim et Escholzmatt-Marbach. Les mêmes prestations et conditions s’y appliquent qu’en ville de Lucerne.',
    },
    {
      question: 'Pour quelles dates les logements sont-ils résiliés dans le canton de Lucerne ?',
      answer: 'Le contrat de bail est déterminant en premier. S’il ne fixe aucun terme, l’art. 266c CO prévoit un terme usuel local et, à défaut, la fin d’un bail de trois mois. Pour les gérances, cela veut dire : demander le [nettoyage de fin de bail avec garantie de remise](/leistungen/umzugsreinigung) dès réception de la résiliation.',
    },
    {
      question: 'Vous occupez-vous de résidences secondaires à Weggis, Vitznau ou Sörenberg ?',
      answer: 'Oui. Entre deux séjours, nous nettoyons le logement et vérifions que tout est en ordre, pour que tout soit prêt à votre arrivée. La page [offre Premium](/premium) explique ce suivi.',
    },
    {
      question: 'Combien coûte une entreprise de nettoyage dans le canton de Lucerne ?',
      answer: 'Le prix dépend de la surface, de la fréquence, des horaires, de l’accès et de l’état du bien. Le guide [coût du nettoyage d’entretien](/blog/reinigungskosten-schweiz) explique comment se compose un devis.',
    },
  ],
  menuText: menu.luzern.text,
}

const zug: KantonPage = {
  name: 'Zoug',
  kuerzel: 'ZG',
  seo: {
    title: 'Entreprise de nettoyage à Zoug',
    description:
      'Entreprise de nettoyage à Zoug pour sièges d’entreprise : bureaux, vitres et conciergerie de Baar à la vallée d’Ägeri, aussi en anglais. Devis gratuit.',
  },
  h1: 'Entreprise de nettoyage à Zoug pour bureaux et sièges d’entreprise',
  lead: [
    'De nombreuses entreprises, y compris internationales, ont leur siège dans le canton de Zoug. Elles ont besoin d’un nettoyage qui suit le rythme de l’activité et ne perturbe pas la journée de travail.',
    'Là où l’on parle anglais au bureau, les échanges se font aussi en anglais. Pour les immeubles d’habitation au bord des lacs de Zoug et d’Ägeri, nous assurons la conciergerie et l’entretien.',
  ],
  facts: [
    { label: 'Accès', value: 'Par l’autoroute A14' },
    { label: 'Priorité', value: 'Immeubles de bureaux très vitrés' },
    { label: 'Termes de résiliation', value: '31 mars, 30 juin, 30 septembre' },
    { label: 'Échanges', value: 'Aussi en anglais' },
  ],
  regionen: [
    { title: 'Zoug, Baar et Steinhausen', orte: ['Zoug', 'Baar', 'Steinhausen'] },
    { title: 'Au bord du lac de Zoug', orte: ['Cham', 'Hünenberg', 'Risch (Rotkreuz)', 'Walchwil'] },
    { title: 'Vallée d’Ägeri et communes de montagne', orte: ['Unterägeri', 'Oberägeri', 'Menzingen', 'Neuheim'] },
  ],
  objekte: [
    {
      title: 'Bureaux et sièges d’entreprise',
      text: 'Du petit bureau au siège sur plusieurs étages : postes de travail, salles de réunion, réception, cuisinettes et sanitaires, à des horaires qui ne gênent pas votre journée de travail.',
    },
    {
      title: 'Vitres et façades',
      text: 'Les immeubles de bureaux ont souvent de grandes surfaces vitrées. Nous nettoyons fenêtres, portes vitrées et façades séparément ou en complément du nettoyage de bureaux.',
    },
    {
      title: 'Family offices et locaux confidentiels',
      text: 'Là où se trouvent des documents confidentiels, c’est toujours la même équipe qui travaille chez vous, y compris en dehors de vos heures de travail. Notre manière de garantir la discrétion est décrite dans l’[offre Premium](/premium).',
      premium: true,
    },
    {
      title: 'Villas et bateaux au bord du lac',
      text: 'Pour les villas et résidences à Walchwil, Oberägeri ou Cham, nous proposons [villas et biens de prestige](/premium/luxusimmobilien), pour les bateaux sur le lac de Zoug le [nettoyage de yachts](/premium/yacht).',
      premium: true,
    },
  ],
  leistungen: [
    { path: '/leistungen/bueroreinigung', text: 'Pour étages de bureaux, réception et salles de réunion, en dehors de vos heures de bureau.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'Pour fenêtres, surfaces vitrées et façades d’immeubles commerciaux.' },
    { path: '/leistungen/facility-services', text: 'Un contrat pour plusieurs sites, par exemple à Zoug, Baar et Lucerne.' },
    { path: '/leistungen/sonderreinigungen', text: 'Nettoyage en profondeur lors d’un changement de bureaux, contre le calcaire, la graisse et les anciennes couches.' },
    { path: '/premium/yacht', title: 'Yacht', text: 'Intérieur, sellerie, teck et gelcoat, sur les lacs de Zoug et des Quatre-Cantons.' },
  ],
  planung: {
    title: 'Accès et horaires dans l’immeuble de bureaux',
    paragraphs: [
      'Depuis Emmenbrücke, nous rejoignons le canton de Zoug par l’autoroute A14. Le nettoyage a lieu quand il ne gêne pas votre activité, par exemple en dehors de vos heures de bureau.',
      'Dans les immeubles avec réception, cartes d’accès ou alarme, la première intervention donne le ton pour la suite. Ces points devraient être réglés avant :',
    ],
    list: {
      title: 'Avant la première intervention dans l’immeuble de bureaux',
      items: [
        'si l’équipe entre par la réception, avec une carte d’accès ou une clé',
        'quels étages et locaux sont concernés et lesquels restent fermés',
        'comment l’alarme, l’éclairage et la fermeture sont réglés',
        'dans quelle langue se font les échanges avec votre équipe : allemand, anglais, français ou italien',
        'qui est votre personne de contact si quelque chose attire l’attention',
      ],
    },
  },
  daten: [
    {
      label: 'Termes de résiliation',
      text: 'Sauf autre accord dans le bail, les termes sont le 31 mars, le 30 juin et le 30 septembre. Le délai est de trois mois pour les logements et de six mois pour les locaux commerciaux.',
      source: 'zgMietrecht',
    },
    {
      label: 'Jours fériés assimilés au dimanche',
      items: ['Nouvel An', 'Vendredi saint', 'Ascension', 'Fête-Dieu', '1er Août', 'Assomption', 'Toussaint', 'Immaculée Conception', 'Noël'],
      text: 'Ces jours-là, le travail des employés est interdit comme un dimanche, de 23 h la veille à 23 h le jour férié.',
      source: 'zgFeiertage',
    },
    {
      label: 'Jours assimilés à des jours fériés',
      items: ['Saint-Berchtold', 'Lundi de Pâques', 'Lundi de Pentecôte', 'Saint-Étienne'],
      text: 'La plupart des entreprises zougoises ferment volontairement, le travail est permis sans autorisation ni supplément. Exception : le 2 janvier ou le 26 décembre tombe un dimanche.',
      source: 'zgFeiertagsaehnlich',
    },
  ],
  faq: [
    {
      question: 'Pouvons-nous communiquer en anglais ?',
      answer: 'Oui. Les échanges sont possibles en anglais, ainsi qu’en français et en italien. Indiquez dans le formulaire la langue que votre équipe préfère.',
    },
    {
      question: 'Vous occupez-vous aussi de plusieurs sites, par exemple à Zoug et à Lucerne ?',
      answer: 'Oui. Un siège à Zoug, une filiale à Lucerne, un entrepôt en Argovie : avec les [facility services](/leistungen/facility-services), tous les sites passent par un seul contrat et une seule personne de contact chez nous. Donnez-nous toutes les adresses lors de la demande, nous planifions les visites ensemble.',
    },
    {
      question: 'Nous quittons notre bureau à Zoug. Quand demander le nettoyage final ?',
      answer: 'Dès que la résiliation est arrêtée. Sans autre accord, les locaux commerciaux se résilient dans le canton de Zoug avec six mois de délai, ce qui laisse largement le temps pour le [nettoyage final avant la remise](/leistungen/umzugsreinigung).',
    },
    {
      question: 'Travaillez-vous aussi à Baar, Cham ou dans la vallée d’Ägeri ?',
      answer: 'Oui, dans les onze communes zougoises, de Risch (Rotkreuz) à Menzingen et Neuheim, avec toutes nos prestations et aux mêmes conditions.',
    },
    {
      question: 'Les jours assimilés à des jours fériés conviennent-ils pour un nettoyage en profondeur ?',
      answer: 'Souvent, oui. Selon l’Office de l’économie et du travail, la plupart des entreprises zougoises sont fermées à la Saint-Berchtold, au lundi de Pâques, au lundi de Pentecôte et à la Saint-Étienne. Des bureaux vides sont idéaux pour des travaux qui dérangent au quotidien, comme le [nettoyage en profondeur des sols](/leistungen/sonderreinigungen).',
    },
  ],
  menuText: menu.zug.text,
}

const aargau: KantonPage = {
  name: 'Argovie',
  kuerzel: 'AG',
  seo: {
    title: 'Entreprise de nettoyage en Argovie',
    description:
      'Entreprise de nettoyage en Argovie pour halles et immeubles : nettoyage industriel, de chantier et d’entretien d’Aarau au Freiamt. Devis gratuit après visite.',
  },
  h1: 'Entreprise de nettoyage en Argovie pour l’industrie, les commerces et les immeubles',
  lead: [
    'L’Argovie compte de nombreuses entreprises industrielles et artisanales. Halles de production et de stockage, ateliers et bâtiments commerciaux ont besoin d’un nettoyage qui suit les équipes et les processus.',
    'Nous travaillons dans tout le canton, du Freiamt et du Seetal à la frontière lucernoise jusqu’à Aarau, Baden, Brugg et le Fricktal.',
  ],
  facts: [
    { label: 'Accès', value: 'Aux mêmes conditions qu’à Lucerne' },
    { label: 'Priorité', value: 'Industrie et artisanat, plus l’habitat' },
    { label: 'Jours fériés', value: 'Six régimes selon le district' },
    { label: 'Pas un jour férié', value: 'Le 1er mai, dans tout le canton' },
  ],
  regionen: [
    { title: 'Freiamt', orte: ['Muri', 'Wohlen', 'Bremgarten', 'Sins'] },
    { title: 'Seetal et lac de Hallwil', orte: ['Meisterschwanden', 'Seengen', 'Beinwil am See'] },
    { title: 'Aarau, Lenzbourg et Zofingue', orte: ['Aarau', 'Lenzbourg', 'Zofingue', 'Oftringen'] },
    { title: 'Baden, Wettingen et Mutschellen', orte: ['Baden', 'Wettingen', 'Ennetbaden', 'Bergdietikon', 'Oberwil-Lieli'] },
    { title: 'Brugg et Fricktal', orte: ['Brugg', 'Windisch', 'Rheinfelden', 'Frick'] },
  ],
  objekte: [
    {
      title: 'Halles de production et de stockage',
      text: 'Nous nettoyons sols de halles, zones de stockage, rayonnages et voies de circulation, une fois ou régulièrement, aux heures que permettent la production et le travail en équipes.',
    },
    {
      title: 'Machines et installations',
      text: 'Nettoyage de machines en travail posté, pendant les pauses, entre deux équipes ou lors d’arrêts planifiés. La coordination avec votre maintenance est expliquée sous [nettoyage industriel et de halles](/leistungen/industrie-und-hallenreinigung).',
    },
    {
      title: 'Constructions neuves et transformations',
      text: 'Après la construction d’une halle ou la transformation d’un bâtiment commercial, nous nettoyons jusqu’à la remise, pour que l’exploitation puisse démarrer.',
    },
    {
      title: 'Immeubles d’habitation',
      text: 'Pour les immeubles locatifs et les PPE, nous assurons le nettoyage d’entretien et la conciergerie. Les villas au bord du lac de Hallwil ou dans la région de Baden relèvent de notre offre Premium.',
    },
  ],
  leistungen: [
    { path: '/leistungen/industrie-und-hallenreinigung', text: 'Sols de halles, zones de stockage et installations, planifiés selon les équipes et les arrêts.' },
    { path: '/leistungen/baureinigung', text: 'Pendant et après les travaux de construction et de transformation, jusqu’à la remise.' },
    { path: '/leistungen/bueroreinigung', text: 'Pour bureaux, locaux de pause et vestiaires de l’entreprise.' },
    { path: '/leistungen/hauswartung', text: 'Rondes de contrôle, buanderie, petites réparations et élimination des déchets pour immeubles d’habitation.' },
    { path: '/leistungen/facility-services', text: 'Nettoyage, conciergerie et extérieurs pour votre site d’entreprise, d’un seul prestataire.' },
  ],
  planung: {
    title: 'Planification pour les entreprises argoviennes',
    paragraphs: [
      'Les trajets d’Emmenbrücke vers l’Argovie varient selon la région, les conditions de déplacement restent les mêmes. Pour les halles en travail posté, trois éléments comptent : quand une installation est à l’arrêt, quelles zones restent accessibles pendant la production et quelles règles de sécurité valent pour le personnel externe.',
      'Ce qui vaut pour les entreprises externes dans votre usine vaut aussi pour l’équipe de nettoyage. Consignez par écrit zones interdites, équipements de protection et personne de contact en cas d’urgence avant la première intervention.',
    ],
  },
  daten: [
    {
      label: 'Jours fériés dans tous les districts',
      items: ['Nouvel An', 'Vendredi saint', 'Ascension', '1er Août', 'Noël'],
      text: 'Seuls ces cinq jours sont assimilés au dimanche dans toute l’Argovie. Le Conseil d’État fixe les autres jours fériés par district, la notice cantonale en recense six régimes.',
      source: 'agFeiertage',
    },
    {
      label: 'Lundi de Pâques et lundi de Pentecôte',
      text: 'Jours fériés dans les districts d’Aarau, Baden, Brugg, Kulm, Lenzbourg et Zofingue et dans huit communes du district de Rheinfelden, dont Rheinfelden, Möhlin et Kaiseraugst. À Bremgarten, Laufenburg, Muri et Zurzach, aucun des deux n’est férié.',
      source: 'agFeiertage',
    },
    {
      label: 'Fête-Dieu et Toussaint',
      text: 'La Fête-Dieu est fériée dans les districts de Baden (sauf Bergdietikon), Bremgarten, Laufenburg, Muri et Zurzach ainsi que dans six communes du district de Rheinfelden. La Toussaint vaut à Bremgarten, Laufenburg, Muri, Rheinfelden et Zurzach. À Aarau, Brugg, Kulm, Lenzbourg et Zofingue, aucun de ces deux jours n’est férié.',
      source: 'agFeiertage',
    },
    {
      label: 'Saint-Étienne et Saint-Berchtold',
      text: 'La Saint-Étienne est fériée partout sauf à Laufenburg, Muri et dans six communes du district de Rheinfelden. La Saint-Berchtold ne l’est qu’à Aarau, Brugg, Kulm, Lenzbourg, Zofingue, Zurzach et Bergdietikon.',
      source: 'agFeiertage',
    },
  ],
  faq: [
    {
      question: 'Travaillez-vous aussi à Aarau, Baden ou Lenzbourg ?',
      answer: 'Oui, dans tout le canton : à Aarau, Lenzbourg et Zofingue, à Baden et Wettingen, à Brugg et dans le Fricktal, dans le Freiamt et au bord du lac de Hallwil. Partout, les conditions sont les mêmes qu’à Lucerne, y compris pour le déplacement.',
    },
    {
      question: 'Nettoyez-vous aussi pendant le travail en équipes ?',
      answer: 'Oui. Le nettoyage a lieu pendant les pauses, entre deux équipes ou lors d’arrêts planifiés, selon les zones libres à ce moment.',
    },
    {
      question: 'Les locaux de pause et les bureaux de l’entreprise peuvent-ils être nettoyés en même temps ?',
      answer: 'Oui. Vestiaires, locaux de pause et bureaux se planifient avec la halle selon un même rythme, comme décrit sous [nettoyage de bureaux et de cabinets](/leistungen/bueroreinigung).',
    },
    {
      question: 'Quels documents aident avant la visite de la halle ?',
      answer: 'Un plan de la halle avec les zones, les horaires des arrêts et vos règles de sécurité pour les entreprises externes. Envoyez ces documents par e-mail, la visite pourra ainsi être préparée de manière ciblée.',
    },
    {
      question: 'Nous avons des sites dans plusieurs districts. Qu’est-ce que cela change pour les jours fériés ?',
      answer: 'Le plan de nettoyage suit le district de chaque site. Le lundi de Pâques, par exemple, est férié à Aarau mais un jour de travail ordinaire à Muri. Les règles par district figurent plus haut dans l’encadré.',
    },
  ],
  menuText: menu.aargau.text,
}

const nidwalden: KantonPage = {
  name: 'Nidwald',
  kuerzel: 'NW',
  seo: {
    title: 'Entreprise de nettoyage à Nidwald',
    description:
      'Entreprise de nettoyage à Nidwald pour PPE et résidences secondaires au bord du lac, de Hergiswil à Emmetten, avec conciergerie. Devis gratuit après visite.',
  },
  h1: 'Entreprise de nettoyage à Nidwald pour les biens au bord du lac',
  lead: [
    'Nidwald s’étend de la rive du lac des Quatre-Cantons à Hergiswil et Ennetbürgen jusqu’à la vallée d’Engelberg. De nombreux biens se trouvent près du lac, certains ne sont habités qu’une partie de l’année.',
    'Pour les communautés de PPE et les gérances, nous assurons nettoyage et conciergerie. Pour les résidences secondaires et les villas s’ajoute la surveillance pendant votre absence.',
  ],
  facts: [
    { label: 'Accès', value: 'A2 via Lucerne' },
    { label: 'Priorité', value: 'PPE et biens au bord du lac' },
    { label: 'Résidences secondaires', value: 'Emmetten, près d’un logement sur trois' },
    { label: 'Jour férié propre', value: '19 mars, Saint-Joseph' },
  ],
  regionen: [
    { title: 'Au bord du lac des Quatre-Cantons', orte: ['Hergiswil', 'Stansstad', 'Ennetbürgen', 'Buochs', 'Beckenried'] },
    { title: 'Stans et environs', orte: ['Stans', 'Oberdorf', 'Ennetmoos'] },
    { title: 'Vallée d’Engelberg et Emmetten', orte: ['Dallenwil', 'Wolfenschiessen', 'Emmetten'] },
  ],
  objekte: [
    {
      title: 'PPE avec propriétaires domiciliés ailleurs',
      text: 'Si tous les propriétaires n’habitent pas sur place, la [conciergerie](/leistungen/hauswartung) assure les passages réguliers dans l’immeuble et les remises de logements.',
    },
    {
      title: 'Résidences secondaires',
      text: 'À Emmetten en particulier, beaucoup de logements ne sont occupés qu’une partie de l’année. Nous nous en occupons avant votre arrivée, après votre départ et avec des rondes de contrôle entre-temps.',
    },
    {
      title: 'Villas et résidences au bord du lac',
      text: 'Pour les maisons avec pierre naturelle, parquet et grandes surfaces vitrées sur la rive, de Hergiswil à Beckenried, nous proposons [villas et biens de prestige](/premium/luxusimmobilien).',
      premium: true,
    },
    {
      title: 'Bateaux sur le lac des Quatre-Cantons',
      text: 'Les bateaux à moteur et les yachts amarrés à Stansstad, Buochs ou Beckenried sont entretenus par notre [nettoyage de yachts](/premium/yacht).',
      premium: true,
    },
  ],
  leistungen: [
    { path: '/leistungen/hauswartung', text: 'Pour les communautés de PPE et les gérances, convenue par écrit.' },
    { path: '/premium/luxusimmobilien', title: 'Villas au bord du lac', text: 'Suivi de biens au bord du lac, même en votre absence.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'Pour de grandes baies avec vue sur le lac et des surfaces vitrées.' },
    { path: '/leistungen/aussen-und-gruenflaechenpflege', text: 'Pour le jardin, les chemins et les abords de votre immeuble.' },
    { path: '/premium/yacht', title: 'Yacht', text: 'Pour bateaux et yachts sur le lac des Quatre-Cantons.' },
  ],
  planung: {
    title: 'Planification pour les communes lacustres et les résidences secondaires',
    paragraphs: [
      'Depuis Emmenbrücke, la route mène à Nidwald par Lucerne et l’autoroute A2. Un nettoyage avant votre arrivée demande un peu d’avance, communiquez-nous donc vos dates le plus tôt possible.',
      'Les résidences secondaires demandent des règles fixes pour les clés et l’alarme. Décidez à l’avance qui est informé si quelque chose attire l’attention lors d’une ronde : vous-même, la gérance ou une personne de confiance à proximité.',
    ],
  },
  daten: [
    {
      label: 'Jours de repos publics',
      items: ['Nouvel An', 'Saint-Joseph (19 mars)', 'Ascension', 'Fête-Dieu', '1er Août', 'Assomption', 'Toussaint', 'Immaculée Conception', 'Vendredi saint', 'Dimanche de Pâques', 'Dimanche de Pentecôte', 'Jeûne fédéral', 'Noël'],
      text: 'Les cinq derniers sont de grandes fêtes. Les communes nidwaldiennes peuvent fixer d’autres jours fériés par règlement.',
      source: 'nwRuhetage',
    },
    {
      label: 'Assimilés au dimanche',
      items: ['Nouvel An', 'Vendredi saint', 'Ascension', 'Fête-Dieu', 'Assomption', 'Toussaint', 'Immaculée Conception', 'Noël'],
      text: 'C’est ainsi que la loi sur les jours de repos applique la loi sur le travail. La Saint-Joseph est un jour de repos public, mais n’en fait pas partie.',
      source: 'nwRuhetage',
    },
    {
      label: 'Résidences secondaires à Emmetten',
      text: 'Emmetten 32,51 %. C’est la seule commune de Nidwald au-delà de 20 pour cent, soumise de ce fait aux règles de construction de la loi sur les résidences secondaires.',
      source: 'are',
    },
  ],
  faq: [
    {
      question: 'Vous occupez-vous de résidences secondaires pendant notre absence ?',
      answer: 'Oui. Nous nettoyons avant votre arrivée et après votre départ et effectuons des rondes de contrôle. Plus d’informations sous [biens de prestige](/premium/luxusimmobilien).',
    },
    {
      question: 'Qui veille sur l’immeuble quand les propriétaires n’habitent pas sur place ?',
      answer: 'Dans les communes lacustres, de nombreux logements appartiennent à des propriétaires qui ne sont là qu’une partie du temps. Il manque alors souvent quelqu’un qui passe régulièrement. La [conciergerie](/leistungen/hauswartung) assure rondes de contrôle, buanderie, élimination des déchets et remises de logements et signale les défauts à l’instance désignée par la communauté des propriétaires, par exemple la gérance.',
    },
    {
      question: 'Travaillez-vous aussi à Emmetten et dans la vallée d’Engelberg ?',
      answer: 'Oui, dans les onze communes de Nidwald, de Hergiswil et Stansstad à Wolfenschiessen et Emmetten, avec toutes nos prestations et aux mêmes conditions.',
    },
    {
      question: 'Entretenez-vous aussi des bateaux amarrés à Nidwald ?',
      answer: 'Oui, yachts et bateaux à moteur sur le lac des Quatre-Cantons, par exemple à Stansstad, Buochs ou Beckenried : intérieur, sellerie, teck et gelcoat. Plus d’informations sous [yacht](/premium/yacht).',
    },
  ],
  menuText: menu.nidwalden.text,
}

const obwalden: KantonPage = {
  name: 'Obwald',
  kuerzel: 'OW',
  seo: {
    title: 'Entreprise de nettoyage à Obwald',
    description:
      'Entreprise de nettoyage à Obwald pour le Sarneraatal et Engelberg : conciergerie, nettoyage en profondeur d’hôtels et de logements. Devis gratuit.',
  },
  h1: 'Entreprise de nettoyage à Obwald, du Sarneraatal à Engelberg',
  lead: [
    'Obwald se compose de deux parties : le Sarneraatal avec le chef-lieu Sarnen, et la haute vallée d’Engelberg, que l’on rejoint par Nidwald.',
    'Dans le Sarneraatal, nous nettoyons et entretenons des immeubles d’habitation et commerciaux ainsi que des entreprises. Engelberg est marqué par les résidences secondaires et les hôtels, nous proposons nettoyage et suivi pour les deux.',
  ],
  facts: [
    { label: 'Accès', value: 'A8, Engelberg par sa vallée' },
    { label: 'Termes de résiliation', value: 'Fin mars, fin juin, fin septembre' },
    { label: 'Jour férié propre', value: '25 septembre, Frère Nicolas' },
    { label: 'Pas dans l’offre', value: 'Service hivernal' },
  ],
  regionen: [
    { title: 'Sarneraatal', orte: ['Sarnen', 'Kerns', 'Sachseln', 'Alpnach'] },
    { title: 'Direction Brünig', orte: ['Giswil', 'Lungern'] },
    { title: 'Haute vallée', orte: ['Engelberg'] },
  ],
  objekte: [
    {
      title: 'Résidences secondaires à Engelberg',
      text: 'Beaucoup de logements du village abbatial restent vides entre deux séjours. Ici, le nettoyage entre deux séjours compte davantage qu’un rythme hebdomadaire fixe, et c’est ce que prévoit notre [offre Premium](/premium).',
      premium: true,
    },
    {
      title: 'Hôtels',
      text: 'Pour les hôtels, nous assurons des nettoyages en profondeur et spéciaux, par exemple avant une ouverture, avant le début de la saison ou après une rénovation.',
    },
    {
      title: 'Immeubles du Sarneraatal',
      text: 'À Sarnen, Kerns, Sachseln et Alpnach, nous nettoyons cages d’escalier, bureaux et surfaces commerciales et assurons la conciergerie d’immeubles d’habitation et commerciaux.',
    },
    {
      title: 'Changement de locataire',
      text: 'Quand les locataires changent, nous nettoyons avant la remise sur mandat de la gérance ou des propriétaires, avec garantie de remise.',
    },
  ],
  leistungen: [
    { path: '/premium/luxusimmobilien', title: 'Logements de vacances', text: 'Nettoyage entre deux séjours à Engelberg et au bord du lac de Sarnen.' },
    { path: '/leistungen/sonderreinigungen', text: 'Nettoyage en profondeur pour hôtels et logements, par exemple avant la saison.' },
    { path: '/leistungen/baureinigung', text: 'Après transformation et rénovation, jusqu’à la remise.' },
    { path: '/leistungen/hauswartung', text: 'Rondes de contrôle, buanderie, élimination des déchets et remises de logements.' },
    { path: '/leistungen/umzugsreinigung', text: 'Nettoyage final lors d’un changement de locataire dans le Sarneraatal, avec garantie de remise.' },
  ],
  planung: {
    title: 'Saison, accès et Engelberg',
    paragraphs: [
      'Nous rejoignons le Sarneraatal depuis Emmenbrücke par Lucerne et l’autoroute A8. La route vers Engelberg passe par Nidwald et la vallée d’Engelberg.',
      'À Engelberg, les interventions suivent les arrivées, les départs et la saison. Réglez accès, place de parc et remise des clés avant la première intervention, surtout si vous n’êtes pas sur place.',
      'Nous n’assurons pas le service hivernal, à Engelberg non plus. Confiez donc le déneigement des accès et des places séparément, de préférence avant le début de la saison.',
    ],
  },
  daten: [
    {
      label: 'Termes de résiliation',
      text: 'Sauf autre accord dans le bail, un logement peut être résilié pour fin mars, fin juin ou fin septembre. La résiliation doit pouvoir être remise au plus tard fin décembre, fin mars ou fin juin.',
      source: 'owSchlichtung',
    },
    {
      label: 'Jours de repos publics',
      items: ['Nouvel An', 'Ascension', 'Fête-Dieu', '1er Août', 'Assomption', 'Fête de saint Nicolas de Flüe (25 septembre)', 'Toussaint', 'Immaculée Conception', 'Vendredi saint', 'Dimanche de Pâques', 'Dimanche de Pentecôte', 'Jeûne fédéral', 'Noël'],
      text: 'La fête de saint Nicolas de Flüe n’est pas assimilée au dimanche au sens de la loi sur le travail. Chaque commune peut en outre fixer un jour férié local assimilé au dimanche.',
      source: 'owRuhetage',
    },
    {
      label: 'Résidences secondaires à Engelberg',
      text: 'Engelberg 55,87 %, seule commune d’Obwald au-delà de 20 pour cent. Lungern se situe en dessous avec 18,92 %.',
      source: 'are',
    },
  ],
  faq: [
    {
      question: 'Venez-vous aussi à Engelberg ?',
      answer: 'Oui. Engelberg fait partie du canton d’Obwald et donc de notre zone d’intervention, avec toutes nos prestations et aux mêmes conditions.',
    },
    {
      question: 'Nettoyez-vous notre appartement de vacances entre deux séjours ?',
      answer: 'Oui. Indiquez-nous votre arrivée et votre départ le plus tôt possible, le nettoyage aura alors lieu entre vos séjours et non le premier jour de vos vacances.',
    },
    {
      question: 'Quel est le meilleur moment pour un nettoyage en profondeur à l’hôtel ?',
      answer: 'Quand il y a peu de clients : en entre-saison, avant une ouverture ou après une rénovation. Planifiez la date tôt, car des travaux d’artisans ont souvent lieu à la même période. Le nettoyage vient en dernier, pour qu’aucune nouvelle poussière ne se forme. Plus d’informations sous [nettoyages en profondeur et spéciaux](/leistungen/sonderreinigungen) et [nettoyage de chantier](/leistungen/baureinigung).',
    },
    {
      question: 'Assurez-vous le nettoyage final lors d’un changement de locataire ?',
      answer: 'Oui, sur mandat de la gérance ou des propriétaires et avec garantie de remise. Comme à Obwald on résilie, sauf autre accord, pour fin mars, juin ou septembre, les remises se concentrent sur ces dates, voir [nettoyage de fin de bail](/leistungen/umzugsreinigung).',
    },
  ],
  menuText: menu.obwalden.text,
}

export const kantone: Dictionary['kantone']['seiten'] = { luzern, zug, aargau, nidwalden, obwalden }

export const kantonUi: Dictionary['kantone']['ui'] = {
  regionen: 'Régions et localités',
  objekte: 'Biens typiques',
  leistungen: 'Prestations demandées',
  planung: 'Planification',
  weitere: 'Autres cantons',
  overview: 'Toute la zone d’intervention',
  toCanton: 'Voir la page du canton',
  seat: 'Notre siège',
  daten: {
    title: 'Données cantonales pour la planification',
    nav: 'Données cantonales',
    intro: 'Règles cantonales et chiffres officiels qui comptent pour les plans de nettoyage et les changements de locataire, chacun avec sa source. Dans un cas particulier, le texte de la source fait foi.',
    source: 'Source :',
    stand: 'État des informations :',
  },
  datenStand: '2026-09-28',
  /** Quellen der Kantonsdaten, einmal je Sprache; Seiten verweisen per Schlüssel */
  quellen: quelle,
  gebiet: 'Dans toute notre zone d’intervention, aux mêmes conditions',
  cta: {
    title: 'Visite et devis',
    text: `Décrivez-nous le bien et le lieu. Nous vous répondons ${responseTime} et passons pour la visite, gratuitement et sans engagement.`,
  },
}

export const kantoneUebersicht: Dictionary['kantone']['uebersicht'] = {
  title: 'Votre canton en détail',
  text: 'Chaque canton a sa propre page : régions et localités, biens typiques, planification et données cantonales sur les jours de repos, les termes de résiliation et les résidences secondaires.',
}

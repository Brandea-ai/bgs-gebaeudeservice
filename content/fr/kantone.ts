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

const menu = nav.areaMenu.cantons

/** Sources primaires, lues le 28 septembre 2026 (mêmes liens que la page allemande) */
const quelle = {
  are: {
    label: 'Office fédéral du développement territorial ARE, inventaire des logements et proportion de résidences secondaires, état au 31.03.2026',
    href: 'https://map.geo.admin.ch/?lang=fr&layers=ch.are.wohnungsinventar-zweitwohnungsanteil',
  },
  luRuhetage: {
    label: 'Canton de Lucerne, loi sur les jours de repos (SRL no 855), §§ 1a et 5 (en allemand)',
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
    label: 'Canton d’Obwald, loi sur les jours de repos (GDB 975.2), art. 2, 3 et 5 (en allemand)',
    href: 'https://gdb.ow.ch/app/de/texts_of_law/975.2',
  },
  orMiete: {
    label: 'Code des obligations (RS 220), art. 266c et 266d, résiliation des baux d’habitations et de locaux commerciaux',
    href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/fr#art_266_c',
  },
  arg: {
    label: 'Loi sur le travail (RS 822.11), art. 20a, fête nationale et jours fériés cantonaux',
    href: 'https://www.fedlex.admin.ch/eli/cc/1966/57_57_57/fr#art_20_a',
  },
} satisfies Record<string, Source>

const luzern: KantonPage = {
  name: 'Lucerne',
  kuerzel: 'LU',
  seo: {
    title: 'Entreprise de nettoyage à Lucerne',
    description:
      'Entreprise de nettoyage à Lucerne, siège à Emmenbrücke : conciergerie, nettoyage d’entretien et de bureaux jusqu’à l’Entlebuch. Devis gratuit après une visite.',
  },
  h1: 'Entreprise de nettoyage à Lucerne, siège à Emmenbrücke',
  lead: [
    'Notre siège se trouve à Emmenbrücke, dans la commune d’Emmen, à la limite de la ville de Lucerne. Kriens, Horw et Ebikon sont juste à côté, Sursee et Hochdorf à peine plus loin.',
    'Pour les gérances et les communautés de PPE, cela signifie des trajets courts, en particulier pour les immeubles entretenus chaque semaine.',
  ],
  facts: [
    { label: 'Notre siège', value: `${company.address.city}, commune d’Emmen` },
    { label: 'Priorité', value: 'Immeubles locatifs, PPE, bureaux et cabinets' },
    { label: 'Jours de repos', value: 'Dix dans tout le canton, la Saint-Joseph selon la commune' },
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
      text: 'Dans le canton de Lucerne, le lundi de Pâques et le lundi de Pentecôte n’en font pas partie. Chaque commune décide elle-même si la Saint-Joseph (19 mars) et la fête patronale de la paroisse sont des jours de repos.',
      source: 'luRuhetage',
    },
    {
      label: 'Termes de résiliation sans accord',
      text: 'C’est d’abord le contrat de bail qui fait foi. S’il ne fixe aucun terme, l’art. 266c CO prévoit pour les logements le terme fixé par l’usage local et, à défaut, la fin d’un trimestre de bail. Le délai de congé est d’au moins trois mois.',
      source: 'orMiete',
    },
    {
      label: 'Changement de locataire en ville de Lucerne',
      text: 'Propriétaires et bailleurs annoncent les arrivées et départs de leurs locataires au contrôle des habitants, avec numéro du logement et date.',
      source: 'luMeldung',
    },
    {
      label: 'Résidences secondaires',
      text: 'Flühli avec Sörenberg 58,31 %, Vitznau 32,71 % et Weggis 24,95 %. Dans ces trois communes s’appliquent les règles de construction de la loi sur les résidences secondaires.',
      source: 'are',
    },
  ],
  faq: [
    {
      question: 'La Saint-Joseph est-elle un jour de repos dans notre commune ?',
      answer: 'Dans le canton de Lucerne, chaque commune en décide elle-même, tout comme pour la fête patronale de la paroisse. Là où un tel jour s’applique, le travail dans les entreprises artisanales et commerciales y est en principe interdit, comme les autres jours de repos (§ 5 de la loi sur les jours de repos). Renseignez-vous auprès du secrétariat communal avant de prévoir une intervention le 19 mars.',
    },
    {
      question: 'Travaillez-vous aussi dans l’Entlebuch ou le Seetal ?',
      answer: 'Oui, dans tout le canton, de Hochdorf et Hitzkirch à Schüpfheim et Escholzmatt-Marbach. Les mêmes prestations et conditions s’y appliquent qu’en ville de Lucerne.',
    },
    {
      question: 'Nous gérons des logements en ville de Lucerne. À quel moment demander le nettoyage de fin de bail ?',
      answer: 'Avec la date de départ que vous annoncez de toute façon au contrôle des habitants. Demandez le [nettoyage de fin de bail avec garantie de remise](/leistungen/umzugsreinigung) dès réception de la résiliation, le nettoyage aura ainsi lieu avant la remise au locataire suivant.',
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
      'Entreprise de nettoyage à Zoug pour sièges d’entreprise : bureaux, vitres et conciergerie de Baar à la vallée d’Ägeri, aussi en anglais. Devis gratuit.',
  },
  h1: 'Entreprise de nettoyage à Zoug pour bureaux et sièges d’entreprise',
  lead: [
    'De nombreuses entreprises, y compris internationales, ont leur siège dans le canton de Zoug. Leurs bureaux se trouvent souvent dans des immeubles où la réception, l’accès et l’alarme doivent être réglés avant l’arrivée de l’équipe de nettoyage.',
    'Pour les immeubles d’habitation au bord des lacs de Zoug et d’Ägeri, nous assurons la conciergerie et l’entretien.',
  ],
  facts: [
    { label: 'Accès', value: 'Par l’autoroute A14' },
    { label: 'Priorité', value: 'Immeubles de bureaux très vitrés' },
    { label: 'Termes de résiliation', value: '31 mars, 30 juin, 30 septembre' },
    { label: 'Jours fériés', value: 'Neuf assimilés au dimanche, plus quatre jours assimilés à des jours fériés' },
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
    { path: '/leistungen/facility-services', text: 'Quand la conciergerie et l’entretien des extérieurs s’ajoutent pour l’immeuble de bureaux.' },
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
      text: 'Sauf autre accord dans le bail, les termes sont le 31 mars, le 30 juin et le 30 septembre. Le délai de congé est d’au moins trois mois pour les logements et de six mois pour les locaux commerciaux.',
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
      question: 'Vous occupez-vous aussi de plusieurs sites, par exemple à Zoug et à Lucerne ?',
      answer: 'Oui, les cinq cantons font partie de notre zone d’intervention. Donnez-nous toutes les adresses lors de la demande, nous planifions les visites ensemble. Si la conciergerie doit s’ajouter au nettoyage à une adresse, les [facility services](/leistungen/facility-services) réunissent les prestations de ce bien.',
    },
    {
      question: 'Nous quittons notre bureau à Zoug. Quand demander le nettoyage final ?',
      answer: 'Dès que la résiliation est arrêtée. Pour les locaux commerciaux, le délai de congé est d’au moins six mois, ce qui laisse largement le temps pour le [nettoyage final avant la remise](/leistungen/umzugsreinigung).',
    },
    {
      question: 'Travaillez-vous aussi à Baar, Cham ou dans la vallée d’Ägeri ?',
      answer: 'Oui, dans les onze communes zougoises, de Risch (Rotkreuz) à Menzingen et Neuheim, avec toutes nos prestations et aux mêmes conditions.',
    },
    {
      question: 'Peut-on nettoyer les jours assimilés à des jours fériés ?',
      answer: 'Oui. À la Saint-Berchtold, au lundi de Pâques, au lundi de Pentecôte et à la Saint-Étienne, le travail est permis sans autorisation dans le canton de Zoug, sauf si le 2 janvier ou le 26 décembre tombe un dimanche. La plupart des entreprises sont fermées ces jours-là. Si vous prévoyez un [nettoyage en profondeur des sols](/leistungen/sonderreinigungen) sans activité, indiquez l’un de ces jours comme date souhaitée lors de la demande.',
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
      'Entreprise de nettoyage en Argovie pour halles et immeubles : nettoyage industriel, de chantier et d’entretien d’Aarau au Freiamt. Devis gratuit après visite.',
  },
  h1: 'Entreprise de nettoyage en Argovie pour l’industrie, les commerces et les immeubles',
  lead: [
    'L’Argovie compte de nombreuses entreprises industrielles et artisanales. Pour les halles de production et de stockage, les ateliers et les bâtiments commerciaux, nous proposons le nettoyage industriel et de halles, pour les immeubles locatifs le nettoyage d’entretien et la conciergerie.',
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
      text: 'Seuls ces cinq jours sont assimilés au dimanche dans toute l’Argovie. Le Conseil d’État en fixe quatre autres par district, la notice cantonale recense six régimes.',
      source: 'agFeiertage',
    },
    {
      label: 'Quatre autres jours fériés par district',
      groups: [
        { title: 'Aarau, Brugg, Kulm, Lenzbourg, Zofingue et Bergdietikon', items: ['Saint-Berchtold', 'Lundi de Pâques', 'Lundi de Pentecôte', 'Saint-Étienne'] },
        { title: 'Baden sans Bergdietikon', items: ['Lundi de Pâques', 'Lundi de Pentecôte', 'Fête-Dieu', 'Saint-Étienne'] },
        { title: 'Bremgarten', items: ['Fête-Dieu', 'Assomption', 'Toussaint', 'Saint-Étienne'] },
        {
          title: 'Laufenburg, Muri et, dans le district de Rheinfelden, Hellikon, Mumpf, Obermumpf, Schupfart, Stein, Wegenstetten',
          items: ['Fête-Dieu', 'Assomption', 'Toussaint', 'Immaculée Conception'],
        },
        {
          title: 'Reste du district de Rheinfelden : Kaiseraugst, Magden, Möhlin, Olsberg, Rheinfelden, Wallbach, Zeiningen, Zuzgen',
          items: ['Lundi de Pâques', 'Lundi de Pentecôte', 'Toussaint', 'Saint-Étienne'],
        },
        { title: 'Zurzach', items: ['Saint-Berchtold', 'Fête-Dieu', 'Toussaint', 'Saint-Étienne'] },
      ],
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
      answer: 'Le plan de nettoyage suit le district de chaque site. Le lundi de Pâques, par exemple, est férié à Aarau mais un jour de travail ordinaire à Muri, et c’est l’inverse à l’Assomption. Les jours fériés par district figurent plus haut dans l’encadré.',
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
    'De nombreux biens nidwaldiens se trouvent près du lac des Quatre-Cantons, de Hergiswil à Beckenried. Tous les propriétaires n’y habitent pas, certains ne viennent que quelques semaines par an.',
    'Pour les communautés de PPE et les gérances, nous assurons nettoyage et conciergerie, même lorsque les propriétaires habitent loin. Pour les résidences secondaires s’ajoute le suivi pendant votre absence, avec des rondes de contrôle.',
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
      label: 'Jours de repos',
      items: ['Nouvel An', 'Saint-Joseph (19 mars)', 'Ascension', 'Fête-Dieu', '1er Août', 'Assomption', 'Toussaint', 'Immaculée Conception', 'Vendredi saint', 'Dimanche de Pâques', 'Dimanche de Pentecôte', 'Jeûne fédéral', 'Noël'],
      text: 'Vendredi saint, dimanche de Pâques, dimanche de Pentecôte, Jeûne fédéral et Noël sont de grandes fêtes. Sauf la Saint-Joseph, tous les jours de la liste sont assimilés au dimanche : huit selon la loi sur les jours de repos, le 1er Août selon le droit fédéral (art. 20a LTr), les autres tombent de toute façon un dimanche. Les communes peuvent fixer d’autres jours fériés par règlement.',
      source: ['nwRuhetage', 'arg'],
    },
    {
      label: 'Résidences secondaires',
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
      'Entreprise de nettoyage à Obwald pour le Sarneraatal et Engelberg : conciergerie, nettoyage en profondeur d’hôtels et de logements. Devis gratuit.',
  },
  h1: 'Entreprise de nettoyage à Obwald, du Sarneraatal à Engelberg',
  lead: [
    'Obwald se compose de deux parties : le Sarneraatal avec le chef-lieu Sarnen, et la haute vallée d’Engelberg, que l’on rejoint par Nidwald.',
    'Les deux parties demandent une planification différente : dans le Sarneraatal compte le rythme fixe des immeubles d’habitation et commerciaux, à Engelberg les interventions suivent la saison, les arrivées et les départs.',
  ],
  facts: [
    { label: 'Accès', value: 'A8, Engelberg par sa vallée' },
    { label: 'Termes de résiliation', value: 'Fin mars, fin juin, fin septembre' },
    { label: 'Jour férié propre', value: 'Fête de saint Nicolas de Flüe, 25 septembre' },
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
      'À Engelberg, réglez accès, place de parc et remise des clés avant la première intervention, surtout si vous n’êtes pas sur place.',
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
      label: 'Jours de repos',
      items: ['Nouvel An', 'Ascension', 'Fête-Dieu', '1er Août', 'Assomption', 'Fête de saint Nicolas de Flüe (25 septembre)', 'Toussaint', 'Immaculée Conception', 'Vendredi saint', 'Dimanche de Pâques', 'Dimanche de Pentecôte', 'Jeûne fédéral', 'Noël'],
      text: 'La fête de saint Nicolas de Flüe n’est pas assimilée au dimanche au sens de la loi sur le travail. Comme jour de repos public, le travail dans les entreprises artisanales et commerciales y est toutefois aussi interdit en principe (art. 3), les exceptions figurent à l’art. 5. Chaque commune peut en outre fixer un jour férié local assimilé au dimanche.',
      source: 'owRuhetage',
    },
    {
      label: 'Résidences secondaires',
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
      answer: 'Quand il y a peu de clients : en entre-saison, avant une ouverture ou après une rénovation. Planifiez la date tôt, car des travaux d’artisans ont souvent lieu à la même période. Le nettoyage vient en dernier, pour qu’aucune nouvelle poussière ne se forme. Les pages [nettoyages en profondeur et spéciaux](/leistungen/sonderreinigungen) et [nettoyage de chantier](/leistungen/baureinigung) donnent les détails.',
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
  text: 'Chaque canton a sa propre page : régions et localités, biens typiques, planification et données cantonales avec leur source, par exemple sur les jours fériés, les termes de résiliation ou les résidences secondaires.',
}

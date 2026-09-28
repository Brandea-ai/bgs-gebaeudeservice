import { company } from '../../shared/company'
import type { RatgeberArtikel } from '../de/ratgeber'
import type { Source } from '../types'
import { cantonList, languageList, responseTime } from './common'

/**
 * Guide (M53, M60, E85) en français. Traduction fidèle de content/de/ratgeber.ts :
 * conseils généraux formulés comme tels, pas de prix, de certificats, de
 * références ni de témoignages de clients (E18). Sources en français lorsque
 * Fedlex, la BPA et l’OFSP les proposent, sinon avec la mention « en allemand ».
 */

export const ratgeberUebersicht = {
  h1: 'Guide du nettoyage de bâtiments',
  intro:
    'Des connaissances utiles pour les gérances, les copropriétés et les entreprises : cahier des charges du concierge, état des lieux de sortie, revêtements de sol, choix du prestataire et coût d’un nettoyage de bâtiments.',
  note: `Chaque article indique ses sources et la date de sa dernière vérification. Par ${company.brand}, pour les immeubles et les entreprises des cantons de ${cantonList}.`,
  byline: `Un guide de ${company.brand}`,
  updatedLabel: 'Mise à jour\u202f:',
  readMore: 'Lire l’article',
  publishedLabel: 'Publié le',
  servicesTitle: 'Directement vers les prestations',
  allServices: 'Toutes les prestations en bref',
  allArticles: 'Tous les guides',
  moreTitle: 'À lire aussi',
  // Eckdaten rechts im IntroBand der Übersicht (E85)
  facts: [
    { label: 'Pour', value: 'Gérances, copropriétés, propriétaires et entreprises' },
    { label: 'À imprimer', value: 'Cahier des charges, procès-verbal, tableau des sols, grille de comparaison et calcul' },
    { label: 'Sources', value: 'Droit fédéral sur Fedlex, BPA, OFSP, associations et fabricants' },
  ],
  serviceLabel: 'Prestation correspondante',
  offerShort: 'Demander un devis',
}

// Sources (lues le 28.09.2026)
const co = (art: string, label: string): Source => ({
  label: `Code des obligations, ${label}`,
  href: `https://www.fedlex.admin.ch/eli/cc/27/317_321_377/fr#art_${art}`,
})
const cc: Source = {
  label: 'Code civil, art. 712h, 712m et 712s (propriété par étages)',
  href: 'https://www.fedlex.admin.ch/eli/cc/24/233_245_233/fr#art_712_m',
}
const bpaResponsabilite: Source = {
  label: 'BPA : Responsabilité du propriétaire d’ouvrage',
  href: 'https://www.bfu.ch/fr/services/aspects-juridiques/responsabilite-du-proprietaire-d-ouvrage',
}
const bpaSol: Source = { label: 'BPA : Revêtement de sol', href: 'https://www.bfu.ch/fr/conseils/revetement-de-sol' }
const mvFrais: Source = {
  label: 'Association suisse des locataires (MV) : frais accessoires non admis 2026 (PDF, en allemand)',
  href: 'https://www.mieterverband.ch/upd_fm_media/ratgeber-mietrecht/topthemen/heiz-und-nebenkosten/2026_merkblatt_unzulaessige_nebenkosten.pdf/',
}
const hevRestitution: Source = { label: 'HEV Schweiz : restitution du logement (en allemand)', href: 'https://www.hev-schweiz.ch/vermieten/verwalten/wohnungsabgabe' }
const mvDuree: Source = {
  label: 'Association suisse des locataires (MV) : tableau des durées de vie (en allemand)',
  href: 'https://www.mieterverband.ch/mietrecht/unterlagen-und-tools/lebensdauertabelle/',
}
const mvQuestions: Source = {
  label: 'Association suisse des locataires (MV) : restitution et procès-verbal, questions et réponses (en allemand)',
  href: 'https://www.mieterverband.ch/mietrecht/ende-der-miete/wohnungsabgabe-protokoll/tipps/',
}
const zhAvis: Source = {
  label: 'Tribunaux zurichois : avis des défauts à la restitution (en allemand)',
  href: 'https://www.gerichte-zh.ch/de/themen/miete/kuendigung-rueckgabe/rueckgabe-und-ausweisung/maengelruege',
}
const nvs: Source = {
  label: 'Association suisse de la pierre naturelle NVS : nettoyage des revêtements en pierre naturelle (PDF, en allemand)',
  href: 'https://nvs.ch/fileadmin/user_upload/nvs/1_Dienstleistungen/Technische_Merkblaetter/15_MB_Reinigung_von_Naturstein_Belaegen.pdf',
}
const ceruniqCeramique: Source = {
  label: 'Ceruniq : nettoyage et entretien des revêtements céramiques (PDF, en allemand)',
  href: 'https://www.ceruniq.ch/wp-content/uploads/2025/03/reinigungs-und-pflegeanleitung-fuer-keramische-belaege.pdf',
}
const ceruniqPremier: Source = {
  label: 'Ceruniq : premier nettoyage des revêtements céramiques (PDF, en allemand)',
  href: 'https://www.ceruniq.ch/wp-content/uploads/2025/03/erstreinigung-fuer-keramische_belaege.pdf',
}
const forboLinoleum: Source = {
  label: 'Forbo Flooring : nettoyage et entretien du linoléum (PDF, en allemand)',
  href: 'https://forbo.blob.core.windows.net/forbodocuments/9597/Forbo_Linoleum_Reinigung-Pflege_202204.pdf',
}
const forboVinyle: Source = {
  label: 'Forbo Flooring : nettoyage et entretien des revêtements design en vinyle (PDF, en allemand)',
  href: 'https://forbo.blob.core.windows.net/forbodocuments/711557/Forbo_Allura-Designbelage_Reinigung-Pflege_202001.pdf',
}
const ispVitrifie: Source = {
  label: 'ISP, association du parquet : entretien du parquet vitrifié (PDF, en allemand)',
  href: 'https://www.parkett-verband.ch/images/content/Pflegeanleitungversiegelt2022de.pdf',
}
const ispHuile: Source = {
  label: 'ISP, association du parquet : entretien du parquet huilé (PDF, en allemand)',
  href: 'https://www.parkett-verband.ch/images/content/Pflegeanleitunggeoelt2022de.pdf',
}
const ofspMoisissures: Source = { label: 'OFSP : Attention aux moisissures (PDF, en allemand)', href: 'https://www.bag.admin.ch/dam/de/sd-web/wBJWq1KVfpS-/vorsicht-schimmel.pdf' }
const ofspJavel: Source = { label: 'OFSP : Eau de Javel', href: 'https://www.bag.admin.ch/fr/eau-de-javel' }
const zpkCct: Source = { label: 'ZPK : convention collective de travail du nettoyage, champ d’application (en allemand)', href: 'https://zpk-reinigung.ch/recht-lohn/gav' }
const zpkContenu: Source = { label: 'ZPK : contenu de la convention collective (en allemand)', href: 'https://zpk-reinigung.ch/recht-lohn/gav-inhalte' }
const ltr: Source = { label: 'Loi sur le travail, art. 17b (majoration pour travail de nuit)', href: 'https://www.fedlex.admin.ch/eli/cc/1966/57_57_57/fr#art_17_b' }
const ltva: Source = { label: 'Loi sur la TVA, art. 25 (taux de l’impôt)', href: 'https://www.fedlex.admin.ch/eli/cc/2009/615/fr#art_25' }

const pflichtenheft: RatgeberArtikel = {
  path: '/blog/pflichtenheft-hauswartung',
  h1: 'Cahier des charges du concierge : modèle et explications',
  subtitle: 'Ce qui figure dans un cahier des charges de conciergerie, comment fixer la fréquence et le plafond des dépenses, et pourquoi le décompte des frais accessoires en profite.',
  teaser: 'Structure, exemple complété et lacunes typiques : comment rédiger un cahier des charges que gérance, propriétaires et concierge lisent de la même façon.',
  updated: '2026-09-28',
  intro: [
    'Bien des conciergeries fonctionnent depuis des années sur simple consigne orale. Cela marche jusqu’au jour où le concierge change, où une locataire conteste le décompte des frais accessoires ou où, après une chute dans la cage d’escalier, quelqu’un veut savoir qui a contrôlé quoi et quand. Un cahier des charges répond à ces questions avant qu’on les pose.',
  ],
  summary: {
    title: 'En bref',
    items: [
      'Un cahier des charges indique chaque tâche avec sa fréquence, le responsable et la voie de signalement, ainsi qu’un plafond pour les petites réparations.',
      'Séparez l’exploitation de l’immeuble du travail administratif et des réparations. C’est la condition pour facturer proprement la conciergerie dans les frais accessoires.',
      'Consignez les rondes de contrôle avec date et constat. Le propriétaire répond du dommage causé par un défaut d’entretien, même sans faute (art. 58 CO).',
      'Revoyez tâches et fréquences une fois par an, idéalement avec le décompte des frais accessoires.',
    ],
  },
  sections: [
    {
      title: 'À quoi sert un cahier des charges',
      paragraphs: [
        'Le cahier des charges est la liste écrite de ce que la conciergerie assume dans un immeuble donné. Il ne remplace pas le contrat, mais c’en est l’annexe la plus importante. Quatre choses en dépendent :',
      ],
      definitions: [
        {
          term: 'Le mandat',
          text: 'Ce qui n’est pas écrit reste sujet à interprétation. Que le concierge huile la porte du local à vélos ou sorte les conteneurs le jour du ramassage, cela figure dans le cahier des charges ou donne tôt ou tard lieu à discussion.',
        },
        {
          term: 'La comparaison',
          text: 'Trois devis établis sur le même cahier des charges se comparent côte à côte. Sans cette base commune, trois prestataires décrivent souvent trois prestations différentes.',
        },
        {
          term: 'Le décompte',
          text: 'Le locataire peut demander à consulter les pièces justificatives des frais accessoires (art. 257b, al. 2, CO). Le cahier des charges montre quelles heures relèvent du nettoyage et de l’exploitation, et lesquelles de l’administration ou des réparations.',
        },
        {
          term: 'La preuve',
          text: 'Selon l’art. 58 CO, le propriétaire répond du dommage causé par le défaut d’entretien de son bâtiment. La BPA recommande d’inspecter périodiquement les ouvrages existants et de documenter ces contrôles. Le cahier des charges précise qui s’en charge et à quelle fréquence.',
        },
      ],
      sources: [co('58', 'art. 58 et 257b'), bpaResponsabilite],
    },
    {
      title: 'Une structure en cinq parties',
      paragraphs: [
        'Immeuble locatif, PPE ou immeuble commercial : un cahier des charges utile comporte toujours les mêmes cinq parties. L’objet vient en premier, la preuve en dernier.',
      ],
      items: [
        'Objet : adresse, nombre de logements et de cages d’escalier, ascenseur, buanderies, chauffage, surface des abords, point de collecte des déchets.',
        'Tâches et fréquences : chaque activité sur sa propre ligne, avec « chaque semaine », « chaque mois » ou « selon les besoins », et les mois pour les travaux saisonniers.',
        'Limites : le plafond des petites réparations sans accord préalable, et ce qui est expressément exclu, par exemple le service hivernal ou le piquet.',
        'Voies de signalement : qui reçoit les défauts signalés, dans quel délai et par quel canal, et qui remplace le concierge en son absence.',
        'Preuve : fiche de contrôle, rapport d’heures ou rapport annuel, avec la date du prochain réexamen.',
      ],
      ordered: true,
    },
    {
      title: 'Exemple : douze logements, un ascenseur, une buanderie',
      paragraphs: [
        'Le modèle ci-dessous est rempli pour un immeuble de douze logements avec une cage d’escalier et un ascenseur, une buanderie commune et environ 600 m² d’abords. Les valeurs sont un exemple, pas une référence. La colonne « Votre saisie » est destinée à votre immeuble.',
      ],
      tool: {
        kind: 'table',
        id: 'vorlage-pflichtenheft',
        title: 'Modèle : cahier des charges avec exemple',
        intro:
          'La dernière colonne indique comment l’Association suisse des locataires classe la tâche au regard des frais accessoires. Dans tous les cas, le bail doit mentionner la conciergerie comme frais accessoires (art. 257a, al. 2, CO).',
        columns: ['Tâche', 'Exemple', 'Votre saisie', 'Frais accessoires selon l’association des locataires'],
        rows: [
          ['Cage d’escalier et entrée', 'Nettoyage humide chaque semaine, mains courantes et porte vitrée comprises', '__________', 'admis'],
          ['Ascenseur', 'Cabine et portes chaque semaine, seuils chaque mois', '__________', 'admis'],
          ['Buanderie et séchoir', 'Sol, lavabo et écoulement deux fois par mois', '__________', 'admis'],
          ['Service du chauffage', 'À chaque ronde, relever pression et affichage des pannes, noter le résultat', '__________', 'admis'],
          ['Petit entretien', 'Remplacer les ampoules, huiler les serrures ; sans accord préalable jusqu’à CHF ______ par cas', '__________', 'admis tant qu’aucune connaissance spécialisée n’est nécessaire'],
          ['Abords', 'Gazon toutes les deux semaines d’avril à octobre, feuilles en automne, haies selon le plan d’entretien', '__________', 'admis'],
          ['Ronde des parties communes', 'Chaque semaine, constat sur la fiche de contrôle', '__________', 'non mentionné, à régler dans le bail'],
          ['Déchets et matières recyclables', 'Sortir les conteneurs le jour du ramassage, tenir propre le point de collecte', '__________', 'non mentionné'],
          ['Remises de logements', 'Ouvrir le logement, relever les compteurs, sur mandat de la gérance', '__________', 'non admis'],
          ['Accompagner les artisans', 'Donner l’accès, surveiller les travaux', '__________', 'non admis'],
          ['Signalements à la gérance', 'Défauts par courriel le jour même, cas urgents par téléphone', '__________', 'non admis'],
          ['Expressément exclu', 'Service hivernal, piquet, maintenance du chauffage et de l’ascenseur par des entreprises spécialisées', '__________', 'sans objet'],
        ],
        note:
          'Le classement suit la fiche de l’association des locataires sur les frais accessoires non admis (2026). L’appréciation d’un cas particulier dépend du bail. Le tableau décrit la situation juridique de manière générale et ne constitue pas un conseil juridique.',
        sources: [mvFrais, co('257_a', 'art. 257a')],
        printable: true,
        updated: '2026-09-28',
      },
    },
    {
      title: 'Justifier la fréquence',
      paragraphs: [
        'La fréquence des passages détermine l’essentiel du coût de la conciergerie. Un rythme hebdomadaire pour tout est pratique, mais convient rarement. Mieux vaut justifier chaque fréquence par l’utilisation :',
      ],
      items: [
        'Beaucoup de logements, de poussettes et de vélos : nettoyer l’entrée plus souvent que les étages supérieurs.',
        'Buanderie commune avec planning : caler les contrôles sur les jours de lessive.',
        'Changements de locataires fréquents : remises facturées à part selon l’effort, pas dans le forfait.',
        'Abords : des mois plutôt que « régulièrement », pour que les feuilles et la taille des haies soient planifiées.',
        'Toit plat, sauts-de-loup ou escaliers extérieurs : prévoir une ronde supplémentaire après les intempéries.',
      ],
      note: 'L’art. 58 CO ne fixe aucune fréquence de contrôle. L’important est de remarquer les défauts tôt et d’y remédier. Une fréquence motivée s’explique plus facilement si quelqu’un pose la question plus tard.',
    },
    {
      title: 'Plafond des dépenses et menu entretien',
      paragraphs: [
        'Le plafond détermine jusqu’à quel montant le concierge règle une petite chose sans demander. Sans plafond, chaque ampoule devient un courriel à la gérance. S’il est trop élevé, la gérance perd la vue d’ensemble des dépenses.',
        'Une solution pratique consiste à fixer une limite par cas et une somme annuelle, toutes deux dans le cahier des charges. Au-delà, un signalement part à la gérance, qui mandate l’entreprise spécialisée.',
        'Il ne faut pas confondre cela avec le menu entretien dû par le locataire. Les défauts de son propre logement qui peuvent être éliminés par de menus travaux de nettoyage ou de réparation sont à sa charge, conformément à l’usage local (art. 259 CO). La conciergerie s’occupe des parties communes. Précisez dans le cahier des charges si elle intervient dans les logements et aux frais de qui.',
      ],
      sources: [co('259', 'art. 259')],
    },
    {
      title: 'La conciergerie dans le décompte des frais accessoires',
      paragraphs: [
        'Le locataire ne doit des frais accessoires que s’ils ont été convenus spécialement (art. 257a, al. 2, CO), et seulement pour des prestations en rapport avec l’usage de la chose (art. 257b, al. 1, CO). Pour la conciergerie, cela signifie que le nettoyage, le service du chauffage et le petit entretien peuvent en faire partie. Le travail administratif et les réparations sont à la charge du propriétaire.',
        'L’association des locataires conseille aux locataires de demander les tâches de la conciergerie et le temps qu’elles prennent, et écrit que le cahier des charges doit être communiqué. Une gérance qui saisit les heures selon les lignes du cahier des charges répond à ces questions avec des pièces plutôt qu’avec des estimations.',
        'Si une entreprise externe est mandatée, l’association des locataires rappelle le principe d’économicité. Vérifiez donc les prestations supplémentaires au regard du bail avant l’attribution. Les règles générales sur les frais accessoires et leur décompte figurent sur la page [nettoyage d’entretien](/leistungen/unterhaltsreinigung).',
      ],
      sources: [co('257_b', 'art. 257a et 257b')],
    },
    {
      title: 'En PPE : deux lecteurs',
      paragraphs: [
        'En propriété par étages, le cahier des charges a deux lecteurs : l’administrateur qui l’applique et l’assemblée qui libère l’argent. La loi confie à l’assemblée l’approbation annuelle du budget, des comptes et de la répartition des frais (art. 712m CC). L’administrateur doit ensuite l’exécuter (art. 712s CC).',
        'Joignez donc le cahier des charges au budget lorsque la conciergerie est attribuée à nouveau ou étendue. Si la communauté a élu un comité, celui-ci peut examiner au préalable le cahier des charges et les devis et faire une proposition à l’assemblée.',
        'Les frais sont répartis selon les quotes-parts. Si une unité n’utilise pas ou presque pas une installation, par exemple un commerce au rez-de-chaussée et l’ascenseur, il faut en tenir compte dans la répartition (art. 712h, al. 3, CC). La majorité requise pour l’attribution figure dans votre règlement.',
      ],
      sources: [cc],
    },
    {
      title: 'Sept lacunes qui posent problème plus tard',
      items: [
        '« Selon les besoins » sans limite : qui décide quand il y a besoin ?',
        'Aucun point de signalement : les défauts arrivent chez le concierge et y restent.',
        'Réparations et nettoyage dans un seul forfait : les frais accessoires ne peuvent alors pas être justifiés.',
        'Des clés sans liste : personne ne sait qui détient quel badge.',
        'Des travaux saisonniers sans mois : les feuilles et la taille des haies surprennent chaque année.',
        'Aucune exclusion : ce qui n’est pas mentionné, les locataires l’attendent quand même, par exemple le service hivernal.',
        'Aucun réexamen : le cahier des charges d’il y a dix ans ignore la nouvelle borne de recharge du parking souterrain.',
      ],
    },
    {
      title: 'Le réexaminer une fois par an',
      paragraphs: [
        'Le bon moment est le décompte des frais accessoires, en PPE la préparation de l’assemblée. Trois questions suffisent : quelles tâches se sont ajoutées ? Quelles lignes ont demandé plus ou moins d’heures que prévu ? Quels signalements sont restés sans suite ?',
        'Si vous attribuez à nouveau la conciergerie, le cahier des charges réexaminé sert aussi de base aux devis. Notre manière d’assumer la conciergerie est décrite sur la page [conciergerie](/leistungen/hauswartung).',
      ],
    },
  ],
  service: '/leistungen/hauswartung',
  related: ['/blog/wohnungsabgabe-reinigung', '/blog/reinigungskosten-schweiz'],
  cta: {
    title: 'Une conciergerie selon votre cahier des charges',
    text: 'Envoyez-nous votre cahier des charges ou les données clés : adresse, logements, cages d’escalier, ascenseur, buanderie et abords. Nous parcourons l’immeuble et établissons le devis sur cette base. La visite et le devis ne vous coûtent rien et ne vous engagent à rien.',
  },
}

const wohnungsabgabe: RatgeberArtikel = {
  path: '/blog/wohnungsabgabe-reinigung',
  h1: 'État des lieux de sortie : ce que les gérances doivent savoir sur la restitution et le nettoyage final',
  subtitle: 'Quel niveau de propreté exiger, comment consigner les défauts pour qu’ils comptent, et à quel moment placer le nettoyage final.',
  teaser: 'État, procès-verbal, avis des défauts et nettoyage : la restitution d’un logement du point de vue de la gérance, avec des exemples d’inscriptions précises.',
  updated: '2026-09-28',
  intro: [
    'Lors d’une restitution de logement, moins d’une heure décide de qui paiera quoi plus tard. Ce qui manque au procès-verbal ou y figure trop vaguement ne peut guère être réclamé ensuite. Ce guide s’adresse aux gérances et aux propriétaires et montre ce qui compte pour l’état, le procès-verbal et le nettoyage final.',
  ],
  summary: {
    title: 'En bref',
    items: [
      'Le logement se restitue dans l’état qui découle d’un usage conforme au contrat (art. 267 CO). L’usure normale est couverte par le loyer.',
      'Les défauts doivent être vérifiés à la restitution et signalés immédiatement, un par un et avec précision (art. 267a CO).',
      'Le procès-verbal avant le nettoyage : c’est la seule façon de garder la preuve de l’état à la restitution.',
      'Le locataire suivant peut consulter le procès-verbal de restitution (art. 256a CO). Un procès-verbal précis sert donc deux fois.',
    ],
  },
  sections: [
    {
      title: 'Quel doit être l’état de propreté du logement à la restitution ?',
      paragraphs: [
        'La loi n’exige pas un état neuf. Le locataire doit restituer le logement tel qu’il résulte d’un usage conforme au contrat (art. 267 CO). Ce que « nettoyé » signifie en détail est réglé par le bail. L’association des propriétaires HEV compte notamment dans un nettoyage soigné :',
      ],
      items: [
        'les fenêtres dedans et dehors, avec cadres, volets, volets roulants et stores à lamelles',
        'dans la cuisine, la cuisinière, le four, le réfrigérateur, la graisse dans la hotte et les films adhésifs dans les armoires',
        'le calcaire dans la salle de bains et les WC',
        'les résidus de colle sur le parquet',
        'les locaux annexes comme cave, galetas et garage, entièrement vidés',
      ],
      note: 'L’association des locataires ajoute du point de vue du locataire : un nettoyage soigné comprend le shampouinage d’une moquette, mais pas des travaux dangereux ou demandant des connaissances spécialisées, comme décrocher et huiler les volets. Si le logement est entièrement rénové après le départ, une remise balayée suffit selon elle.',
      sources: [co('267', 'art. 267'), hevRestitution, mvQuestions],
    },
    {
      title: 'Nettoyage, usure, dommage',
      paragraphs: ['Les procès-verbaux mélangent souvent trois sortes de constats. Ils ont des conséquences différentes et doivent être notés séparément.'],
      definitions: [
        {
          term: 'Nettoyage insuffisant',
          text: 'De la graisse dans le four, du calcaire sur la robinetterie, de la poussière sur les stores. Selon l’association des locataires, le bailleur doit d’abord accorder un bref délai pour nettoyer à nouveau. Si le logement reste insuffisamment propre, il peut le faire nettoyer et transmettre la facture.',
        },
        {
          term: 'Usure normale',
          text: 'Moquettes usées, papiers peints défraîchis, légères traces sur les murs près des lits et des tableaux, trous de chevilles dans une mesure habituelle. Elle est payée par le loyer.',
        },
        {
          term: 'Usure excessive',
          text: 'Dégâts dus à la fumée, brûlures dans la moquette, griffures d’animaux sur les portes, fissures dans le lavabo. Ici le locataire répond, mais en cas de remplacement seulement de la valeur résiduelle.',
        },
      ],
      note: 'La valeur résiduelle se calcule avec le tableau paritaire des durées de vie des associations de propriétaires et de locataires. Un exemple de l’association des locataires : une moquette de qualité moyenne dure dix ans. Si elle doit être remplacée après six ans à cause de brûlures, le locataire supporte 40 pour cent du coût. Une fois la durée de vie écoulée, il ne supporte plus rien.',
      sources: [mvDuree],
    },
    {
      title: 'Le procès-verbal : assez précis pour valoir',
      paragraphs: [
        'Les tribunaux zurichois citent trois conditions d’un avis des défauts valable : les défauts sont désignés concrètement, il ressort que le bailleur entend en tenir le locataire responsable, et l’avis est donné immédiatement à la restitution. Les termes généraux ne remplissent souvent pas la première condition.',
        'Si le locataire signe des défauts mis à sa charge, l’association des propriétaires les considère comme reconnus. S’il en conteste un, notez-le au procès-verbal et signalez ce point en plus par lettre recommandée.',
      ],
      tool: {
        kind: 'table',
        id: 'protokoll-eintraege',
        title: 'Inscriptions au procès-verbal : trop vagues et assez précises',
        intro: 'Exemples de constats typiques, pièce par pièce. La dernière colonne classe chaque constat, pour que nettoyage, usure et dommage restent séparés.',
        columns: ['Pièce', 'Trop vague', 'Assez précis', 'Type de constat'],
        rows: [
          ['Cuisine', '« Cuisine sale »', 'Four avec croûte de graisse sur la paroi arrière, la plaque et la grille ; filtre à graisse de la hotte encrassé', 'Nettoyage'],
          ['Salle de bains et WC', '« Salle de bains pas propre »', 'Paroi de douche et mitigeur avec dépôt de calcaire ; tartre urinaire sous le rebord de la cuvette', 'Nettoyage'],
          ['Séjour', '« Parquet abîmé »', 'Devant la porte du balcon, trois rayures d’environ 20 cm, vitrification usée ; parquet posé en 2016', 'Dommage ou usure, selon l’âge'],
          ['Chambre', '« Murs sales »', 'Traces grises sur 1 m derrière le lit ; plafond jauni, bord plus clair derrière les tableaux', 'Traces : usure ; jaunissement dû à la fumée : dommage'],
          ['Fenêtres', '« Fenêtres pas nettoyées »', 'Fenêtre de cuisine avec saleté dans les feuillures et le cadre, vitre striée à l’extérieur ; stores du séjour poussiéreux', 'Nettoyage'],
          ['Cave', '« Cave pas vidée »', 'Dans le compartiment 4 se trouvent une armoire et cinq cartons', 'Évacuation'],
          ['Clés', '« Clés incomplètes »', 'Reçu 2 clés du logement sur 3, clé de la boîte aux lettres manquante', 'Clés manquantes'],
        ],
        note: 'Des photos numérotées et datées étayent chaque inscription sans la remplacer. Renvoyez au numéro dans le procès-verbal, pour qu’on sache plus tard quelle image correspond à quel constat.',
        sources: [zhAvis, hevRestitution],
        printable: true,
        updated: '2026-09-28',
      },
    },
    {
      title: 'L’avis des défauts : immédiatement, et plus tard pour les défauts cachés',
      paragraphs: [
        'L’art. 267a CO ne fixe pas de délai en jours, seulement le mot « immédiatement ». L’association des locataires considère une semaine comme limite extrême si le locataire n’a pas déjà signé les défauts au procès-verbal. Le plus sûr est de donner l’avis le jour de la restitution, avec une copie du procès-verbal pour le locataire.',
        'Si le locataire refuse de collaborer à la restitution, l’avis part immédiatement par écrit selon les tribunaux zurichois, en recommandé pour la preuve. Les tribunaux mettent un modèle de lettre à disposition.',
        'Les défauts qui ne pouvaient pas être découverts lors des vérifications usuelles doivent être signalés immédiatement après leur découverte (art. 267a, al. 3, CO). Faire réparer d’abord et envoyer la facture ensuite, c’est trop tard selon l’association des locataires.',
      ],
      sources: [co('267_a', 'art. 267a')],
    },
    {
      title: 'Le déroulement autour du jour de la restitution',
      paragraphs: [
        'Selon l’association des propriétaires, le logement se restitue en principe le dernier jour du bail pendant les heures d’ouverture usuelles. Souvent, le bail prévoit le premier jour du mois suivant. Fixez la date tôt, car le nettoyage, les artisans et l’emménagement des nouveaux locataires en dépendent.',
      ],
      tool: {
        kind: 'timeline',
        id: 'ablauf-abgabe',
        title: 'De la visite préalable à la garantie de loyer',
        entries: [
          {
            label: 'Quelques semaines avant',
            text: 'Visite préalable avec le locataire : montrer ce qui sera contrôlé et évoquer les petites réparations qu’il peut faire lui-même. Fixer les dates de restitution et de nettoyage final.',
          },
          {
            label: 'Le jour de la restitution',
            text: 'Contrôler pièce par pièce, noter les constats séparément comme nettoyage, usure et dommage, relever les compteurs, compter toutes les clés, copies comprises.',
          },
          {
            label: 'Juste après',
            text: 'Remettre le procès-verbal ou l’envoyer sans délai, signaler les points contestés par recommandé, classer les photos numérotées.',
          },
          {
            label: 'Après le procès-verbal',
            text: 'D’abord les peintres et les réparations, ensuite le nettoyage final. En cas de rénovation complète, un [nettoyage de chantier](/leistungen/baureinigung) suit à la fin.',
          },
          {
            label: 'À la remise au nouveau locataire',
            text: 'Établir l’état des lieux d’entrée. Sur demande, présenter le procès-verbal de restitution du locataire précédent (art. 256a CO).',
          },
          {
            label: 'Dans l’année',
            text: 'Si le bailleur n’a fait valoir aucune prétention par voie juridique dans l’année qui suit la fin du bail, le locataire peut exiger de la banque la restitution de la garantie (art. 257e, al. 3, CO).',
          },
        ],
        sources: [hevRestitution, co('256_a', 'art. 256a et 257e')],
      },
    },
    {
      title: 'Le nettoyage final : qui le commande et quand',
      paragraphs: [
        'Deux voies sont courantes. Soit le locataire mandate lui-même une entreprise de nettoyage ; l’association des propriétaires lui conseille alors une garantie de remise comprise dans le forfait. Soit la gérance fait nettoyer après le procès-verbal, parce que le logement a été rendu insuffisamment nettoyé ou parce qu’elle veut un standard uniforme avant la relocation.',
        'Dans le second cas, l’ordre est décisif : procès-verbal, avis, bref délai pour nettoyer, puis nettoyage. On garde ainsi la trace de ce dont le locataire répond, et le nettoyage se fait dans un logement vide, où l’on peut aussi travailler derrière les éléments encastrés.',
        'Pour les gérances, les propriétaires et les entreprises, nous assurons le nettoyage final avec garantie de remise, décrit sur la page [nettoyage de fin de bail](/leistungen/umzugsreinigung). Le mandat est donné par la gérance ou le propriétaire, pas par le locataire sortant.',
      ],
    },
    {
      title: 'Erreurs fréquentes à la restitution',
      items: [
        'Faire nettoyer le logement avant le procès-verbal.',
        'Des termes généraux comme « nettoyage insuffisant » au lieu de constats précis.',
        'Facturer l’usure comme un dommage sans connaître l’âge des équipements.',
        'Ne pas remettre le procès-verbal ou l’envoyer seulement des jours plus tard.',
        'Ne pas compter les clés ni en faire signer la remise.',
        'Signaler un défaut caché seulement avec la facture de l’artisan.',
        'Ne pas conserver le procès-verbal de restitution, alors que le locataire suivant peut le consulter.',
      ],
      note: 'L’article décrit la situation juridique de manière générale. Pour votre cas, le bail et les circonstances comptent ; en cas de litige, votre association et l’autorité de conciliation du lieu de l’immeuble peuvent vous aider.',
    },
  ],
  service: '/leistungen/umzugsreinigung',
  related: ['/blog/pflichtenheft-hauswartung', '/blog/bodenbelaege-grundreinigung'],
  cta: {
    title: 'Le nettoyage final de votre prochaine restitution',
    text: 'Pour planifier, il nous faut l’adresse, la date de restitution et la taille du logement. Si plusieurs changements approchent, par exemple à la fin d’un trimestre, nous les planifions ensemble. Nous voyons d’abord le logement, puis vous recevez le devis écrit, gratuit et sans engagement.',
  },
}

const bodenarten: RatgeberArtikel = {
  path: '/blog/bodenbelaege-grundreinigung',
  h1: 'Nettoyage en profondeur selon le revêtement : ce que supportent pierre, carrelage, linoléum et parquet',
  subtitle: 'Pourquoi le même produit sauve un sol et en attaque un autre, comment reconnaître le revêtement et ce qu’il faut clarifier avant les travaux.',
  teaser: 'pH, joints, films d’entretien et risque de glissade : des connaissances sur les sols pour les gérances et les entreprises qui planifient ou attribuent un nettoyage en profondeur.',
  updated: '2026-09-28',
  intro: [
    'Un nettoyage en profondeur ne consiste pas à frotter plus fort. Il élimine des couches accumulées pendant des mois, avec des produits plus puissants et des machines. C’est précisément pour cela qu’il peut abîmer un sol si le produit et le revêtement ne vont pas ensemble. Ce guide explique les bases, pour que vous puissiez planifier un nettoyage en profondeur en toute sécurité et en juger le résultat.',
  ],
  summary: {
    title: 'En bref',
    items: [
      'L’acide dissout le calcaire et attaque donc aussi le marbre, le calcaire et les joints au ciment. Les produits alcalins dissolvent la graisse et les anciens films d’entretien.',
      'Identifiez les revêtements inconnus avant un nettoyage en profondeur ou faites-les tester à un endroit caché.',
      'Le rinçage compte autant que le nettoyage : les résidus rendent le sol taché ou glissant.',
      'Les instructions du fabricant priment. S’en écarter peut faire perdre la garantie.',
    ],
  },
  sections: [
    {
      title: 'Entretien courant, nettoyage en profondeur, soin, rénovation',
      paragraphs: ['Quatre travaux sont souvent confondus. Ils diffèrent par les produits, la fréquence et la personne qui doit les exécuter.'],
      definitions: [
        {
          term: 'Nettoyage d’entretien',
          text: 'Enlève la saleté libre ou peu adhérente, à sec ou à l’humide. L’utilisation dicte la fréquence : l’association de la pierre naturelle cite, selon l’encrassement, chaque jour, chaque semaine ou chaque mois.',
        },
        {
          term: 'Nettoyage en profondeur',
          text: 'Élimine ce qui s’accumule malgré l’entretien : films d’entretien, calcaire, graisse, saleté dans les pores et les joints. Pour la pierre naturelle, la fiche de l’association indique des intervalles allant d’un mois dans les zones très sales à un an.',
        },
        {
          term: 'Soin',
          text: 'Un film de protection, une huile ou un polish appliqué après le nettoyage en profondeur. Les linoléums et vinyles récents reçoivent en usine un traitement de surface ; selon le fabricant, un premier soin supplémentaire n’est en principe pas nécessaire.',
        },
        {
          term: 'Rénovation',
          text: 'Poncer, polir, vitrifier ou huiler à nouveau. C’est le travail d’un marbrier, d’un parqueteur ou d’un poseur de sols, pas celui du nettoyage. La pierre ne se ponce que de quelques millimètres.',
        },
      ],
      sources: [nvs, forboLinoleum, forboVinyle],
    },
    {
      title: 'Le pH décide',
      paragraphs: [
        'Les produits de nettoyage agissent par leur pH. Les produits acides se situent sous 7 et dissolvent les dépôts minéraux comme le calcaire, le tartre urinaire et le voile de ciment. Les produits alcalins se situent au-dessus de 7 et dissolvent la graisse, l’huile et les anciennes couches d’entretien. Les produits neutres, autour de 7, sont destinés au nettoyage courant.',
        'Le problème : le marbre, le calcaire et le travertin sont eux-mêmes constitués en grande partie de calcaire. Un acide ne distingue pas le dépôt calcaire de la pierre en dessous, et il attaque aussi les joints au ciment. C’est pourquoi un détartrant laisse sur le marbre poli des taches mates qu’aucun nettoyage n’enlève.',
        'Les produits alcalins ont aussi leurs limites. Pour le linoléum, le fabricant Forbo indique des nettoyants d’un pH inférieur à 9 et exclut les solutions fortement alcalines.',
      ],
      note: 'Avant un nettoyage en profondeur, demandez quel produit, avec quel pH, est prévu pour quel revêtement. La réponse a sa place dans le descriptif des prestations.',
    },
    {
      title: 'Reconnaître le revêtement',
      paragraphs: [
        'Les documents de construction sont la source la plus sûre : instructions d’entretien des fabricants, procès-verbaux de réception, factures des poseurs. Les instructions de l’association suisse du carrelage Ceruniq prévoient la signature du maître d’ouvrage et précisent qu’un nettoyage inapproprié fait perdre la garantie.',
        'Sans documents, aucune supposition ne remplace un essai. L’association de la pierre naturelle décrit comment les spécialistes testent la pierre : un point de la taille d’un ongle, à un endroit caché, est poncé puis reçoit quelques gouttes d’acide. S’il effervesce, la pierre est sensible aux acides.',
        'Tant que la pierre n’est pas identifiée, aucun acide ne touche le sol. Chaque nouvelle méthode s’essaie d’abord à un endroit discret.',
      ],
      sources: [ceruniqCeramique],
    },
    {
      title: 'Les revêtements en un coup d’œil',
      paragraphs: [
        'Le tableau résume ce que les fiches des associations professionnelles suisses et les instructions des fabricants prévoient pour le nettoyage en profondeur. Il ne remplace pas les instructions de votre revêtement.',
      ],
      tool: {
        kind: 'table',
        id: 'belaege-grundreinigung',
        title: 'Nettoyage en profondeur et soin selon le revêtement',
        columns: ['Revêtement', 'Nettoyage en profondeur', 'Ensuite', 'Spécialiste nécessaire si'],
        rows: [
          [
            'Marbre, calcaire, travertin',
            'Pas de traitement acide. Dissoudre graisse et résidus d’entretien avec un produit neutre ou légèrement alcalin, aspirer l’eau sale, rincer deux fois à l’eau claire.',
            'À l’humide avec un produit neutre. Pas de pads sur les surfaces polies.',
            'des taches mates et rugueuses subsistent : la surface est attaquée et doit être poncée.',
          ],
          [
            'Granit, gneiss, quartzite, porphyre',
            'Toutes les méthodes sont possibles, y compris les produits acides contre le calcaire. L’acide chlorhydrique et l’acide sulfurique provoquent des décolorations.',
            'À l’humide avec un produit neutre.',
            'l’huile ou la rouille ont pénétré profondément dans la pierre.',
          ],
          [
            'Carrelage et grès cérame à joints ciment',
            'Mouiller au préalable, laisser agir brièvement, brosser, ramasser l’eau sale, rincer deux ou trois fois à l’eau claire. Couper complètement le chauffage au sol auparavant.',
            'Peu de produit neutre ou légèrement alcalin, pas de nettoyant acide pour salle de bains dans l’entretien courant.',
            'les joints s’effritent, se désagrègent ou manquent.',
          ],
          [
            'Carrelage à joints époxy',
            'Les joints résistent à de nombreux produits chimiques et aux nettoyants acides. La fiche technique du fabricant du mortier fait foi.',
            'Comme le carrelage à joints ciment.',
            'un voile d’époxy reste sur les carreaux : c’est au poseur de l’éliminer.',
          ],
          [
            'Linoléum',
            'À la machine avec un nettoyant de pH inférieur à 9, ramasser l’eau sale, rincer à l’eau claire. Le traitement d’usine ne doit pas être endommagé.',
            'Balayage humide, enlever les traces de pas par la méthode spray, polir régulièrement.',
            'la surface est détruite : rénovation avec un film d’entretien selon le fabricant.',
          ],
          [
            'Vinyle et PVC',
            'Décapant pour vinyle, récurer à la machine, rincer à l’eau claire. Avant un nouveau revêtement de protection, le sol doit être exempt de résidus et parfaitement sec.',
            'Balayage humide avec un nettoyant que le fabricant autorise pour la surface.',
            'un nouveau revêtement de protection est nécessaire : deux couches selon le fabricant.',
          ],
          [
            'Parquet vitrifié',
            'Pas de nettoyage en profondeur à l’eau. Balai doux, aspirateur ou chiffon à peine humide, au besoin avec un produit neutre. Machines seulement après accord du fabricant.',
            'Entretenir régulièrement avec un polish pour parquet.',
            'la vitrification est usée : poncer et vitrifier à nouveau.',
          ],
          [
            'Parquet huilé',
            'Avec les produits du système d’huile utilisé, jamais à la vapeur. Chiffons seulement si le fabricant les autorise pour le parquet.',
            'Huiler à nouveau selon les besoins.',
            'les zones de passage sont grises et ouvertes.',
          ],
        ],
        note: 'Sur le parquet, des pieds de meubles métalliques mouillés laissent des taches d’oxydation ; gardez-les au sec lors du nettoyage humide. Et ne mélangez pas les systèmes : les fabricants recommandent des produits conçus pour aller ensemble.',
        sources: [nvs, ceruniqCeramique, ceruniqPremier, forboLinoleum, forboVinyle, ispVitrifie, ispHuile],
        printable: true,
        updated: '2026-09-28',
      },
    },
    {
      title: 'Les joints : le point le plus sensible',
      paragraphs: [
        'Les joints au ciment sont poreux, et l’acide les attaque comme il attaque le calcaire. Secs, ils absorbent le produit acide, qui agit alors dans le joint au lieu d’agir en surface. L’association du carrelage Ceruniq prescrit donc de bien mouiller le revêtement, et surtout les joints, avant chaque nettoyage en profondeur.',
        'Les joints au ciment noirs, anthracite ou colorés sont particulièrement délicats ; Ceruniq met expressément en garde contre les dommages dus à un nettoyage inapproprié. Les joints époxy, en revanche, résistent largement aux nettoyants acides.',
        'Les joints silicone de la douche, de la baignoire et de la cuisine contiennent des fongicides. Ceruniq recommande de les nettoyer chaque semaine avec un produit neutre ou légèrement alcalin et un chiffon doux, puis de les sécher. Si la moisissure a pénétré le silicone, l’OFSP conseille de retirer le mastic et de le faire renouveler par un spécialiste.',
      ],
      sources: [ofspMoisissures],
    },
    {
      title: 'Rincer, sécher, risque de glissade',
      paragraphs: [
        'L’association de la pierre naturelle qualifie le rinçage d’étape la plus importante de tout nettoyage. La saleté détachée qui n’est pas entièrement ramassée reste simplement répartie autrement. Sur les surfaces rugueuses, l’eau sèche dans les creux et forme un voile. C’est pourquoi l’eau sale est aspirée et le sol rincé à l’eau propre, souvent plus d’une fois.',
        'Les résidus ont un second effet. Forbo constate que la saleté apportée, la fréquence de nettoyage et les produits utilisés influencent fortement la résistance au glissement. Selon Ceruniq, trop de nettoyant avec additifs d’entretien peut même tacher durablement les carreaux céramiques.',
        'Pendant les travaux, les sols mouillés présentent un risque de chute. La BPA recommande des panneaux d’avertissement et des rubans de balisage, et de sécher rapidement le sol. Dans la cage d’escalier d’un immeuble locatif, cela signifie travailler par tronçons et laisser toujours un passage sec.',
      ],
      sources: [bpaSol],
    },
    {
      title: 'Ne jamais mélanger les produits',
      paragraphs: [
        'Qui dissout le calcaire avec un acide et blanchit des taches à l’eau de Javel ne doit jamais utiliser les deux ensemble. L’Office fédéral de la santé publique avertit que l’eau de Javel mélangée à des acides, détartrants compris, dégage du chlore gazeux toxique. Les deux produits ne doivent pas non plus être stockés ensemble. Cela vaut aussi pour le local de nettoyage de votre conciergerie.',
      ],
      sources: [ofspJavel],
    },
    {
      title: 'Moins de saleté, moins de nettoyages en profondeur',
      paragraphs: [
        'La plupart de la saleté entre sous les chaussures. Pour les entrées, la BPA recommande des sas anti-saleté dont le tapis mesure au moins six pas. Forbo indique pour des zones textiles de propreté de 4 à 6 mètres une réduction de la saleté apportée allant jusqu’à 80 pour cent.',
        'S’y ajoutent des mesures simples tirées des instructions d’entretien : patins en feutre sous les chaises, roulettes souples sur les chaises de bureau, soucoupes sous les plantes. Pour le parquet, l’association du parquet recommande un climat de 20 à 22 °C avec 35 à 45 pour cent d’humidité relative.',
      ],
    },
    {
      title: 'Erreurs typiques',
      items: [
        'Détartrant ou vinaigre sur le marbre et le calcaire.',
        'Produits acides sur des joints au ciment secs.',
        'Nettoyer intensivement une partie seulement d’un sol en pierre naturelle : la patine d’usage change et il se forme des zones plus claires et plus foncées.',
        'Nettoyeur à vapeur sur le parquet.',
        'Appliquer une nouvelle couche d’entretien sur l’ancienne sans l’enlever d’abord.',
        'Beaucoup de produit et peu d’eau au rinçage.',
        'Laisser le chauffage au sol allumé.',
        'Des surfaces mouillées sans panneau d’avertissement.',
      ],
      note: 'Le nettoyage en profondeur en tant que prestation, avec une liste de contrôle pour la préparation et la réception, est décrit sous [nettoyages en profondeur et spéciaux](/leistungen/sonderreinigungen).',
    },
  ],
  service: '/leistungen/sonderreinigungen',
  related: ['/blog/wohnungsabgabe-reinigung', '/blog/reinigungskosten-schweiz'],
  cta: {
    title: 'Un nettoyage en profondeur pour vos sols',
    text: 'Indiquez-nous quels revêtements se trouvent où et la taille approximative des surfaces. Les instructions d’entretien et des photos aident à planifier. Après un rendez-vous sur place, nous chiffrons vos sols un par un, gratuitement et sans engagement.',
  },
}

const reinigungsfirmaFinden: RatgeberArtikel = {
  path: '/blog/richtige-reinigungsfirma-finden',
  h1: 'Comment trouver la bonne entreprise de nettoyage ?',
  subtitle: 'Les questions à clarifier avant d’attribuer le mandat, de l’étendue des prestations jusqu’au contrat.',
  teaser: 'Les questions à clarifier avant d’attribuer le mandat : prestations, assurance, conditions de travail, contrôle de la qualité, devis et contrat. Avec une grille de comparaison à imprimer.',
  updated: '2026-09-28',
  intro: [
    'L’entreprise de nettoyage qui s’occupe de vos locaux, vous la choisissez généralement pour plusieurs années. Changer prend du temps, et un mauvais départ se remarque auprès de la clientèle et du personnel. Ce guide montre à quoi veiller lors du choix, quelles erreurs coûtent cher et comment rendre les devis comparables.',
  ],
  summary: {
    title: 'En bref',
    items: [
      'Clarifiez d’abord vos besoins : quelle prestation, à quelle fréquence et à quels horaires.',
      'Demandez trois à cinq devis, chacun après une visite.',
      'Comparez prestations, heures, assurance, conditions de travail et contrat dans une grille.',
      'Posez des questions sur le contrôle de la qualité et le remplacement, et demandez les réponses par écrit.',
    ],
  },
  sections: [
    {
      title: 'Clarifier d’abord les besoins',
      paragraphs: ['Avant de comparer des prestataires, vous devriez savoir ce dont vous avez besoin. Les principales prestations :'],
      definitions: [
        {
          term: 'Nettoyage d’entretien',
          text: 'Le nettoyage récurrent selon une fréquence fixe, par exemple plusieurs fois par semaine. Il maintient les locaux propres et hygiéniques. Plus d’informations sous [Nettoyage d’entretien](/leistungen/unterhaltsreinigung).',
        },
        {
          term: 'Nettoyage en profondeur',
          text: 'Un nettoyage minutieux à intervalles plus espacés, contre le calcaire, la graisse et les anciennes couches d’entretien. Quels produits chaque sol supporte, le guide [Nettoyage en profondeur selon le revêtement](/blog/bodenbelaege-grundreinigung) l’explique. La prestation : [Nettoyages en profondeur et spéciaux](/leistungen/sonderreinigungen).',
        },
        {
          term: 'Conciergerie',
          text: 'Le suivi d’un immeuble au-delà du nettoyage, par exemple avec des rondes de contrôle, des petites réparations et l’élimination des déchets. Ce qu’elle comprend est fixé dans un [cahier des charges](/blog/pflichtenheft-hauswartung). Plus d’informations sous [Conciergerie](/leistungen/hauswartung).',
        },
      ],
      note: 'Définissez aussi à quelle fréquence et à quels horaires le nettoyage doit avoir lieu, par exemple avant le début du travail ou après la fermeture du magasin. Tous les prestataires ont besoin de ces indications pour que les devis soient comparables.',
    },
    {
      title: 'Les points à vérifier',
      subsections: [
        {
          title: 'Étendue des prestations et limites',
          text: 'Faites-vous confirmer par écrit quels locaux et quelles tâches sont compris et lesquels ne le sont pas. Demandez : qu’est-ce qui fait partie du nettoyage régulier, et qu’est-ce qui est facturé à part ?',
        },
        {
          title: 'Assurance',
          text: 'Un objet peut être endommagé lors du travail dans vos locaux. Renseignez-vous sur l’assurance responsabilité civile d’entreprise et faites-vous justifier le montant de la couverture.',
        },
        {
          title: 'Contrôle de la qualité et remplacement',
          text: 'Demandez qui contrôle le travail sur place, à quelle fréquence et si vous recevez le résultat par écrit. Demandez aussi qui nettoie lorsque la personne attitrée est en vacances ou malade, et comment ce remplaçant est formé. Faites-vous décrire les deux avant de signer.',
        },
        {
          title: 'Conditions de travail',
          text: 'En Suisse alémanique, les entreprises de nettoyage d’au moins six employés sont soumises à une convention collective de travail déclarée de force obligatoire, avec des salaires minimaux. La commission paritaire de la branche (ZPK) tient une liste des entreprises assujetties. Posez la question, surtout si un devis est étonnamment bas.',
        },
        {
          title: 'Bien situer les certificats',
          text: 'Les certificats peuvent montrer que des processus ont été vérifiés selon une norme. Demandez la norme, l’organisme de certification, le champ d’application et la validité. Il est tout aussi important de savoir comment l’entreprise contrôle la qualité au quotidien et remédie aux défauts.',
        },
        {
          title: 'Références et avis',
          text: 'Demandez des références pour des objets comparables. Un entretien avec des clients de référence dépend de leur accord. Consultez aussi les avis en ligne.',
        },
        {
          title: 'Devis et prix',
          text: 'Seul celui qui a vu l’objet peut calculer de façon fiable. Veillez à ce que les frais annexes comme le déplacement et les produits de nettoyage soient indiqués et que les nettoyages spéciaux figurent séparément. Comment se forme un montant mensuel, le guide [Coût du nettoyage d’entretien](/blog/reinigungskosten-schweiz) le montre.',
        },
        {
          title: 'Contrat',
          text: 'La durée, le délai de résiliation, une éventuelle période d’essai et le règlement du remplacement ont leur place dans le contrat.',
        },
        {
          title: 'Proximité et disponibilité',
          text: 'Demandez en combien de temps quelqu’un peut être sur place en cas de problème et comment joindre votre interlocuteur.',
        },
      ],
      sources: [zpkCct],
    },
    {
      title: 'Sept erreurs qui coûtent cher plus tard',
      items: [
        'Accepter un devis sans visite. Le prix ne correspond alors souvent pas à l’effort, et suivent des suppléments ou des économies sur le nettoyage.',
        'Comparer seulement le tarif horaire. Ce qui compte, ce sont les heures par passage, les passages par mois et ce qui est compris.',
        'Ne pas fixer l’étendue par écrit. Sans descriptif des prestations, il manque une référence en cas de réclamation.',
        'Remettre des clés sans liste. Notez qui reçoit quelles clés, quels badges et quels codes, et comment perte et restitution sont réglées.',
        'Laisser le remplacement en suspens. Clarifiez qui intervient pendant les vacances ou la maladie et qui instruit cette personne.',
        'Signer une longue durée sans période d’essai. Durée et délai de résiliation se discutent avant la signature.',
        'Ne pas vérifier les conditions de travail. Un prix inférieur aux coûts salariaux se fait au détriment du personnel ou de la qualité.',
      ],
    },
    {
      title: 'Étape par étape vers la bonne entreprise',
      ordered: true,
      items: [
        'Clarifier les besoins : noter la prestation, la fréquence, les horaires et les surfaces.',
        'Choisir trois à cinq prestataires actifs dans votre région.',
        'Convenir de visites. Sans visite, pas de devis comparable.',
        'Comparer les devis dans la grille ci-dessous : prestations, heures, frais annexes et durée.',
        'Clarifier les questions ouvertes, de préférence par écrit.',
        'Demander si un nettoyage d’essai ou un démarrage avec période d’essai est possible.',
        'Conclure le contrat et noter le nom de votre interlocuteur.',
      ],
    },
    {
      title: 'Questions pour la visite',
      items: [
        'Qu’est-ce qui est compris exactement, et qu’est-ce qui ne l’est pas ?',
        'À quelle fréquence et à quels horaires le nettoyage a-t-il lieu ?',
        'Combien d’heures par passage sont calculées ?',
        'Qui est mon interlocuteur, et comment le joindre ?',
        'Qui contrôle le travail sur place, et à quelle fréquence ?',
        'Comment le remplacement est-il réglé pendant les vacances ou la maladie ?',
        'Votre entreprise est-elle soumise à la convention collective de la branche du nettoyage ?',
        'Quelle assurance existe, avec quelle couverture ?',
        'Comment la facturation fonctionne-t-elle, et qu’est-ce qui coûte en plus ?',
      ],
      tool: {
        kind: 'table',
        id: 'vergleichsraster',
        title: 'Grille de comparaison des devis',
        intro: 'À imprimer : une ligne par point, une colonne par prestataire. Les cases vides montrent où il faut redemander.',
        columns: ['Point', 'Entreprise A', 'Entreprise B', 'Entreprise C'],
        rows: [
          ['Visite effectuée le', '__________', '__________', '__________'],
          ['Heures par passage', '__________', '__________', '__________'],
          ['Passages par mois', '__________', '__________', '__________'],
          ['Montant mensuel, TVA comprise', '__________', '__________', '__________'],
          ['Matériel et produits compris', '__________', '__________', '__________'],
          ['Suppléments soir, nuit et week-end', '__________', '__________', '__________'],
          ['Contrôle sur place : qui et à quelle fréquence', '__________', '__________', '__________'],
          ['Remplacement pendant vacances et maladie', '__________', '__________', '__________'],
          ['Responsabilité civile et montant couvert', '__________', '__________', '__________'],
          ['Soumise à la convention collective', '__________', '__________', '__________'],
          ['Durée et délai de résiliation', '__________', '__________', '__________'],
        ],
        note: 'Pour chaque colonne, multipliez les heures par passage par le nombre de passages par mois. Le résultat montre combien de travail chaque entreprise prévoit réellement pour votre objet.',
        printable: true,
        updated: '2026-09-28',
      },
    },
    {
      title: `Les réponses de ${company.brand} à ces questions`,
      items: [
        'Devis : par écrit, après avoir vu votre objet sur place.',
        `Réponse à votre demande : ${responseTime}.`,
        'Assurance : responsabilité civile d’entreprise avec une couverture de CHF 10 millions.',
        'Expérience : depuis 2006, aujourd’hui plus de 50 collaborateurs et plus de 120 clients (état septembre 2026).',
        `Langues de conseil : ${languageList}.`,
        `Zone : les cantons de ${cantonList}, avec toutes les prestations. Plus d’informations sous [Zone d’intervention](/einzugsgebiet).`,
      ],
    },
  ],
  service: '/leistungen/unterhaltsreinigung',
  related: ['/blog/reinigungskosten-schweiz', '/blog/pflichtenheft-hauswartung'],
  cta: {
    title: 'Devis sur place',
    text: 'Placez notre devis à côté des autres. Indiquez-nous l’objet, la surface, la fréquence et les horaires, nous passons et calculons pour votre objet. Nous ne vous demandons rien pour cela, et vous ne prenez aucun engagement.',
  },
}

const kosten: RatgeberArtikel = {
  path: '/blog/reinigungskosten-schweiz',
  h1: 'Coût du nettoyage d’entretien : comment se forme le prix',
  subtitle: 'Ce qui détermine le montant mensuel, comment un devis est calculé et ce que les gérances doivent savoir sur les frais accessoires.',
  teaser: 'Facteurs de coût, calcul et salaires comme limite inférieure : comment lire et comparer les devis de nettoyage d’entretien.',
  updated: '2026-09-28',
  intro: [
    'Ce guide porte sur le [nettoyage d’entretien](/leistungen/unterhaltsreinigung), c’est-à-dire le nettoyage régulier d’immeubles, de bureaux et de surfaces commerciales. Il ne donne pas de prix, mais montre de quoi un prix se compose, pour que vous puissiez lire les devis et les comparer équitablement.',
  ],
  summary: {
    title: 'En bref',
    items: [
      'Le montant dépend des heures par passage, du nombre de passages et du tarif horaire, plus le matériel, les suppléments et la TVA.',
      'Les heures dépendent de la surface, des revêtements, de l’utilisation et des horaires. Sans voir l’objet, on ne peut pas les estimer de façon fiable.',
      'Une convention collective de force obligatoire fixe un plancher aux salaires. Les devis très bas méritent un examen attentif.',
      'Comparez le montant mensuel et les heures calculées, pas seulement le tarif horaire.',
    ],
  },
  sections: [
    {
      title: 'Les facteurs de coût',
      definitions: [
        { term: 'Surface et types de locaux', text: 'La taille, les revêtements de sol, les sanitaires et les surfaces vitrées déterminent le temps nécessaire.' },
        {
          term: 'Fréquence',
          text: 'Avec un nettoyage fréquent, l’effort par passage diminue souvent, mais le nombre de passages augmente. Ce qui compte, c’est ce qui est payé par mois au bout du compte.',
        },
        { term: 'Utilisation', text: 'Les entrées très fréquentées, les cuisines et les sanitaires demandent plus de temps que les locaux peu utilisés.' },
        {
          term: 'Horaires',
          text: 'Les passages le soir, la nuit ou le week-end peuvent coûter plus. Pour un travail de nuit seulement temporaire, la loi sur le travail prescrit une majoration de salaire d’au moins 25 pour cent (art. 17b LTr). Demandez si les suppléments sont compris dans le montant mensuel.',
        },
        {
          term: 'Prestations supplémentaires',
          text: 'Le matériel de consommation, le nettoyage des vitres ou un [nettoyage en profondeur](/leistungen/sonderreinigungen) avant le démarrage peuvent figurer séparément.',
        },
        {
          term: 'Conditions de travail',
          text: 'Le nettoyage est un travail manuel, la plus grande partie des coûts sont des salaires. La section suivante montre comment ceux-ci sont limités vers le bas.',
        },
      ],
      sources: [ltr],
    },
    {
      title: 'Les salaires comme plancher',
      paragraphs: [
        'Dans les cantons de Lucerne, Zoug, Argovie, Nidwald et Obwald, les entreprises de nettoyage à partir de six employés sont soumises à la convention collective de travail de la branche du nettoyage de Suisse alémanique, déclarée de force obligatoire. Elle fixe des salaires minimaux par catégorie et court jusqu’à fin 2029. Certaines dispositions s’appliquent aussi aux petites entreprises.',
        'Au salaire s’ajoutent les assurances sociales, les vacances, le déplacement, le matériel, les machines et la conduite des interventions. Un devis dont le tarif horaire dépasse à peine le salaire minimal ne peut pas couvrir ces coûts. Dans ce cas, demandez comment il a été calculé.',
        'Le respect de la convention est contrôlé par la commission paritaire de la branche (ZPK), par exemple au moyen de contrôles des livres de salaires. Son site publie les salaires minimaux et les suppléments dans le texte de la convention.',
      ],
      sources: [zpkCct, zpkContenu],
    },
    {
      title: 'Le calcul d’un devis',
      paragraphs: [
        'Les heures par passage découlent de la surface, des types de locaux, des revêtements et de l’utilisation. C’est pourquoi une entreprise sérieuse voit l’objet avant de calculer. Le reste est une multiplication.',
      ],
      tool: {
        kind: 'table',
        id: 'rechenweg',
        title: 'Du passage au montant mensuel',
        intro: 'L’exemple calcule uniquement en heures, pas en prix. Reportez les valeurs de vos devis.',
        columns: ['Élément', 'Ce dont il dépend', 'Exemple'],
        rows: [
          ['Heures par passage', 'Surface, types de locaux, revêtements, utilisation', '3 heures'],
          ['× passages par mois', 'Fréquence, par exemple deux fois par semaine', '8,7 passages'],
          ['= heures par mois', 'Base de toute comparaison', 'environ 26 heures'],
          ['× tarif horaire', 'Salaires, charges sociales, conduite, déplacement', 'valeur du prestataire'],
          ['+ matériel et produits', 'À part ou compris dans le tarif', 'selon le devis'],
          ['+ suppléments', 'Soir, nuit, dimanche', 'aucun pour un travail de jour'],
          ['+ TVA', 'Taux normal de 8,1 pour cent (art. 25 LTVA)', 'sur le total'],
          ['= montant mensuel', 'Le chiffre que vous comparez', 'somme des lignes'],
        ],
        note: 'Deux fois par semaine donnent 104 passages par an, divisés par douze mois un peu plus de 8,7 passages. Qui calcule avec quatre semaines par mois arrive à 8 passages et sous-estime les heures d’environ 8 pour cent.',
        sources: [ltva],
        printable: true,
        updated: '2026-09-28',
      },
    },
    {
      title: 'Pourquoi nous ne publions pas de prix en ligne',
      paragraphs: [
        'Deux objets de même surface peuvent représenter des charges de travail très différentes, selon le revêtement de sol, l’utilisation et l’accès. Un prix sans visite serait donc soit trop élevé, soit inexact par la suite. Vous recevez donc notre chiffre par écrit, calculé pour votre objet.',
      ],
    },
    {
      title: 'Comparer les devis',
      paragraphs: ['Un devis comparable indique au minimum :'],
      items: [
        'quels locaux et quelles tâches sont compris',
        'la fréquence et les horaires',
        'les heures calculées par passage',
        'le matériel de consommation et les produits de nettoyage',
        'les éventuels suppléments et frais annexes comme le déplacement',
        'la durée et le délai de résiliation',
      ],
      note: 'Une grille à imprimer se trouve dans le guide [Comment trouver la bonne entreprise de nettoyage ?](/blog/richtige-reinigungsfirma-finden#vergleichsraster).',
    },
    {
      title: 'Pour les gérances : le nettoyage dans les frais accessoires',
      paragraphs: [
        'Les frais de nettoyage de la cage d’escalier et des parties communes ne peuvent être répercutés sur les locataires que si le bail les prévoit spécialement comme frais accessoires (art. 257a, al. 2, CO). Demandez des devis et des factures qui indiquent le nettoyage par immeuble. Le fonctionnement du décompte est expliqué sur la page [nettoyage d’entretien](/leistungen/unterhaltsreinigung).',
      ],
      sources: [co('257_a', 'art. 257a')],
    },
    {
      title: `Obtenir votre devis chez ${company.brand}`,
      ordered: true,
      items: [
        `Vous nous écrivez ou nous appelez et indiquez l’objet, la surface et la fréquence souhaitée. Vous avez une réponse ${responseTime}.`,
        'Nous parcourons l’objet avec vous et notons les locaux, les revêtements et les horaires.',
        'Ensuite nous calculons et vous envoyons le devis par écrit.',
      ],
      note: `Les mêmes conditions de déplacement s’appliquent dans l’ensemble des cantons de ${cantonList}.`,
    },
  ],
  service: '/leistungen/unterhaltsreinigung',
  related: ['/blog/richtige-reinigungsfirma-finden', '/blog/bodenbelaege-grundreinigung'],
  cta: {
    title: 'Un devis pour votre nettoyage d’entretien',
    text: 'Indiquez-nous l’adresse, la surface, l’utilisation et la fréquence souhaitée, pour les immeubles aussi le nombre de cages d’escalier. Après la visite, nous calculons avec vos chiffres, gratuitement et sans engagement.',
  },
}

/** Articles dans l’ordre de l’aperçu /blog, mêmes clés que content/de/ratgeber.ts */
export const ratgeber = { pflichtenheft, wohnungsabgabe, bodenarten, reinigungsfirmaFinden, kosten }

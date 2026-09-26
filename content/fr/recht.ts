import { company } from '../../shared/company'
import type { LegalContent } from '../types'
import { register } from './common'

/**
 * Mentions légales et politique de confidentialité en français (M14, M50, M60).
 * Traduction fidèle de content/de/recht.ts, même structure.
 */

const address = `${company.address.street}, ${company.address.postalCode} ${company.address.city}, Suisse`

export const impressum: LegalContent = {
  h1: 'Mentions légales',
  sections: [
    {
      title: 'Exploitante de ce site web',
      // Raison sociale inscrite, complète et inchangée (art. 954a CO)
      lines: [company.legalName, `Représentée par ${company.representative}`, address],
    },
    {
      title: 'Contact',
      lines: [`Téléphone ${company.phone.display}`, `Mobile ${company.mobile.display}`, `E-mail ${company.email}`],
    },
    {
      title: 'Inscription au registre',
      lines: [`Inscrite au ${register}`, `IDE ${company.uid}`, `Numéro TVA ${company.uid} TVA`],
    },
    {
      title: 'Responsabilité quant aux contenus',
      paragraphs: [
        'Nous rédigeons les contenus de ce site web avec soin. Nous n’assumons aucune garantie quant à leur exactitude, leur exhaustivité et leur actualité. Seuls nos devis et nos contrats font foi.',
        'Toute prétention en responsabilité pour des dommages résultant de l’accès à ce site web, de son utilisation ou de dérangements techniques est exclue dans la mesure permise par la loi.',
      ],
    },
    {
      title: 'Liens vers d’autres sites web',
      paragraphs: ['Les exploitants des sites web tiers vers lesquels nous renvoyons sont responsables de leurs contenus. La visite de ces sites se fait sous votre propre responsabilité.'],
    },
    {
      title: 'Droit d’auteur',
      paragraphs: [
        `Les textes, la conception et les autres contenus de ce site web appartiennent à ${company.legalName} ou aux titulaires de droits mentionnés. Toute utilisation en dehors de ce site web requiert notre accord écrit préalable.`,
      ],
    },
    {
      title: 'Protection des données',
      paragraphs: ['La manière dont nous traitons les données personnelles est décrite dans la [politique de confidentialité](/datenschutz).'],
    },
  ],
  updated: '2026-09-26',
}

export const datenschutz: LegalContent = {
  h1: 'Politique de confidentialité',
  intro:
    'Vous apprendrez ici quelles données personnelles nous traitons lors de la visite de ce site web, dans quel but et à qui elles sont transmises. La loi fédérale sur la protection des données (LPD) fait foi.',
  sections: [
    {
      title: 'Responsable',
      lines: [company.legalName, address, `E-mail ${company.email}`, `Téléphone ${company.phone.display}`],
    },
    {
      title: 'Visite du site web',
      paragraphs: [
        'Le site web est hébergé chez Vercel Inc., États-Unis. Chaque consultation génère des données de journal techniquement nécessaires : adresse IP, date et heure, page consultée, navigateur et système d’exploitation, ainsi que la page d’où vous venez.',
        'Nous avons besoin de ces données pour fournir le site web, détecter les erreurs et repousser les attaques. Nous ne les exploitons pas à des fins publicitaires et ne les relions pas à d’autres données. Vercel ne les conserve que le temps nécessaire à l’exploitation et à la sécurité.',
      ],
    },
    {
      title: 'Formulaire de contact et e-mail',
      paragraphs: [
        'Lorsque vous nous écrivez au moyen du formulaire, nous traitons vos indications : nom, adresse e-mail et message, ainsi que, de manière facultative, numéro de téléphone, prestation souhaitée, lieu du bien et fréquence. Nous les utilisons pour répondre à votre demande et établir votre devis.',
        `Le formulaire est envoyé à notre boîte de réception au moyen du service d’e-mail Resend, Inc., États-Unis. Jusqu’à la mise en place de notre propre adresse, il s’agit de ${company.email}, la boîte de réception de Brandea GbR en Allemagne, qui exploite ce site web pour nous et nous transmet les demandes.`,
        'Pour prévenir les abus, le serveur conserve brièvement votre adresse IP en mémoire vive afin de détecter un nombre excessif de demandes en peu de temps. Elle n’est pas enregistrée durablement.',
        'Nous conservons votre demande aussi longtemps que nous en avons besoin pour la traiter et pour d’éventuelles questions. Si un mandat est conclu, les délais légaux de conservation s’appliquent.',
      ],
    },
    {
      title: 'Carte',
      paragraphs: [
        'Sur la page de contact, nous n’affichons une carte Google Maps que lorsque vous cliquez sur « Charger la carte ». Ce n’est qu’à ce moment que Google reçoit votre adresse IP et des informations techniques sur votre navigateur. Le prestataire est Google Ireland Limited, les données peuvent aussi être traitées aux États-Unis. Plus d’informations dans la politique de confidentialité de Google sous policies.google.com/privacy.',
      ],
    },
    {
      title: 'Pas de cookies, pas d’analyse',
      paragraphs: [
        'Ce site web n’utilise pas de cookies ni de services d’analyse, de publicité ou de suivi. Nous chargeons les polices depuis notre propre serveur, et non depuis Google.',
      ],
    },
    {
      title: 'Communication à l’étranger',
      paragraphs: [
        'Des données personnelles peuvent être transmises aux États-Unis (Vercel, Resend, Google) et en Allemagne (Brandea GbR). L’Allemagne offre une protection des données adéquate. Pour les États-Unis, nous nous fondons sur la certification des prestataires au titre du Swiss-U.S. Data Privacy Framework ou sur les clauses contractuelles types.',
      ],
    },
    {
      title: 'Vos droits',
      paragraphs: ['Vous pouvez à tout moment :'],
      items: [
        'demander quelles données personnelles nous traitons à votre sujet',
        'faire rectifier des données inexactes',
        'demander l’effacement de vos données, pour autant qu’aucune obligation de conservation ne s’y oppose',
        'vous opposer au traitement',
        'demander la remise de vos données dans un format courant',
      ],
    },
    {
      title: 'Contact et réclamation',
      paragraphs: [
        `Pour toute question ou demande, écrivez-nous à ${company.email} ou par courrier à l’adresse ci-dessus. Vous pouvez également vous adresser au Préposé fédéral à la protection des données et à la transparence (PFPDT), edoeb.admin.ch.`,
      ],
    },
    {
      title: 'Sécurité',
      paragraphs: ['La connexion à ce site web est chiffrée (HTTPS). Nous protégeons les données par des mesures techniques et organisationnelles, dans la mesure où cela est raisonnablement possible.'],
    },
    {
      title: 'Modifications',
      paragraphs: ['Nous adaptons cette politique lorsque le site web ou la situation juridique change. La version publiée ici fait foi.'],
    },
  ],
  updated: '2026-09-26',
}

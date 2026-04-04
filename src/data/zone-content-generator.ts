/**
 * Generateur de contenu unique par page zone × service.
 *
 * Chaque page a du texte DIFFERENT car :
 * 1. Les rues, quartiers, landmarks, metros sont specifiques a chaque zone
 * 2. L'angle editorial change selon le service (urgence vs installation vs entretien...)
 * 3. Les types de commerces de la zone influencent les exemples donnes
 * 4. Les paragraphes SEO sont construits dynamiquement, pas depuis un template partage
 *
 * Ceci remplace le systeme "mad-libs" ou seul le nom de ville changeait.
 */

import { zonesLocal } from "../../content/zones-local";

interface ZoneServiceContent {
  introTitle: string;
  introText: string;
  seo1Title: string;
  seo1Text: string;
  seo2Title: string;
  seo2Text: string;
  localContext: string;
  faq: { q: string; a: string }[];
  whyUsCards: { t: string; d: string }[];
  typesContext: string;
  localExpertise: string;
  ctaText: string;
  typesCards: { title: string; text: string }[];
  statsLabels: { v: string; l: string }[];
}

// Variantes semantiques pour les H2 — eviter la repetition du meme terme
const serviceVariants: Record<string, string[]> = {
  depannage: ["depannage", "intervention urgence", "reparation en urgence", "assistance rapide"],
  installation: ["installation", "pose", "mise en place", "montage"],
  reparation: ["reparation", "remise en etat", "reconditionnement", "restauration"],
  motorisation: ["motorisation", "automatisation", "passage a l'electrique", "equipement moteur"],
  deblocage: ["deblocage", "liberation", "desincarceration", "remise en service"],
  entretien: ["entretien", "maintenance preventive", "controle periodique", "suivi technique"],
  fabrication: ["fabrication", "conception sur-mesure", "realisation", "production"],
};

const serviceSemanticTerms: Record<string, string[]> = {
  depannage: ["rideau metallique", "fermeture metallique", "rideau de fer", "grille metallique"],
  installation: ["rideau metallique neuf", "fermeture commerciale", "protection de devanture", "rideau enroulable"],
  reparation: ["rideau metallique endommage", "store metallique", "volet roulant metallique", "grille de securite"],
  motorisation: ["rideau manuel", "fermeture metallique manuelle", "rideau a manivelle", "store a tirage"],
  deblocage: ["rideau coince", "grille bloquee", "fermeture hors-service", "rideau immobilise"],
  entretien: ["rideau metallique", "mecanisme d'enroulement", "fermeture metallique", "store metallique"],
  fabrication: ["rideau sur-mesure", "fermeture metallique", "grille de protection", "rideau de securite"],
};

// Angles specifiques par service pour les paragraphes
const serviceAngles: Record<string, {
  urgency: string;
  technical: string;
  priceContext: string;
  whyImportant: string;
}> = {
  depannage: {
    urgency: "Chaque minute compte quand un rideau metallique est en panne. Un commerce avec une devanture non securisee est expose au vol, au vandalisme et aux intemperies.",
    technical: "Les pannes les plus frequentes concernent le moteur (condensateur grille, carte electronique defaillante), les lames (sortie de rail, deformation apres choc) et le mecanisme d'enroulement (ressorts casses, axe grippe).",
    priceContext: "Deblocage simple a partir de 149 euros. Reparation moteur des 390 euros. Remplacement de lames a partir de 189 euros. Devis gratuit communique avant intervention.",
    whyImportant: "Nos vehicules ateliers embarquent les pieces les plus courantes — lames P57, P90, moteurs ACM et Somfy, ressorts, serrures — pour reparer la majorite des pannes en une seule intervention.",
  },
  installation: {
    urgency: "L'installation d'un rideau metallique neuf est un investissement essentiel pour la securite de votre local commercial. Une devanture non protegee est une cible facile.",
    technical: "Nous installons des lames pleines en acier galvanise (P57 standard, P90 renforce, P140 double paroi), des micro-perforees en aluminium, des grilles cobra et des lames polycarbonate transparentes.",
    priceContext: "Installation complete a partir de 800 euros. Motorisation Somfy tubulaire en option des 500 euros. Devis gratuit apres prise de mesure sur site.",
    whyImportant: "Chaque rideau est fabrique aux dimensions exactes de votre devanture. La pose comprend la prise de mesure, la fabrication en atelier, l'installation de l'axe, du tablier et du moteur, puis les tests finaux.",
  },
  reparation: {
    urgency: "Un rideau metallique defaillant compromet la securite de votre local et peut bloquer l'acces a votre commerce. La reparation rapide evite une perte de chiffre d'affaires prolongee.",
    technical: "Nous reparons tous les composants : tablier (lames deformees, perforees), moteur (condensateur, carte de commande, embrayage), axe (grippage, deformation), ressorts (rupture, perte de tension) et serrure (cylindre use).",
    priceContext: "Remplacement condensateur a partir de 80 euros pose incluse. Moteur central ACM des 390 euros. Lames individuelles a partir de 25 euros l'unite posee.",
    whyImportant: "Nos techniciens effectuent un diagnostic complet avant de proposer la solution la plus economique entre reparation et remplacement. Pieces d'origine garanties : ACM, Somfy, Simu, Came.",
  },
  motorisation: {
    urgency: "Ouvrir et fermer manuellement un rideau metallique plusieurs fois par jour est physiquement eprouvant et fait perdre un temps precieux a chaque ouverture et fermeture.",
    technical: "Trois types de moteurs : tubulaire Somfy/Simu (dans l'axe, silencieux, pour rideaux de moins de 150 kg), central ACM/Came (sur platine, puissant, pour rideaux lourds) et lateral Sommer (quand l'espace au-dessus est limite).",
    priceContext: "Moteur tubulaire Somfy a partir de 500 euros. Moteur central ACM des 800 euros. Le prix inclut le moteur, le boitier de commande et la telecommande.",
    whyImportant: "La motorisation s'installe sur votre rideau existant sans remplacement du tablier ni des coulisses. Ouverture en 12 a 15 secondes, debrayage manuel integre en cas de coupure de courant.",
  },
  deblocage: {
    urgency: "Un rideau metallique bloque a mi-hauteur laisse votre commerce completement expose. C'est une situation d'urgence qui necessite une intervention immediate, de jour comme de nuit.",
    technical: "Les causes de blocage les plus frequentes : lame sortie de sa coulisse laterale, axe grippe par manque de lubrification, ressort de compensation rompu, moteur bloque par un condensateur defaillant, gel ou oxydation des rails.",
    priceContext: "Deblocage simple a partir de 149 euros. Si une piece doit etre remplacee (ressort, lame), le devis est communique avant toute intervention.",
    whyImportant: "Notre intervention suit un protocole strict : securisation du rideau, diagnostic de la cause du blocage, liberation progressive sans degradation, puis reparation definitive pour eviter la recidive.",
  },
  entretien: {
    urgency: "Un rideau metallique non entretenu a une duree de vie de 5 a 8 ans contre 15 a 20 ans avec un entretien regulier. La maintenance preventive evite les pannes couteuses et les fermetures imprevues.",
    technical: "Chaque visite comprend : graissage des coulisses et de l'axe, verification de la tension des ressorts, controle electrique du moteur (intensite, condensateur), inspection des lames et de la lame finale (joint EPDM, serrure), reglage des fins de course.",
    priceContext: "Contrats d'entretien a partir de 250 euros par an pour 2 visites preventives. Le retour sur investissement est immediat : une panne de moteur evitee coute bien plus cher.",
    whyImportant: "Pres de 80% des pannes de rideau metallique sont evitables avec un entretien regulier. Le graissage seul reduit de moitie l'usure des coulisses et du moteur.",
  },
  fabrication: {
    urgency: "Un rideau metallique standard ne convient pas a toutes les devantures. Les dimensions non standard, les linteaux en arc de cercle et les coffres encastres necessitent une fabrication sur-mesure.",
    technical: "Notre atelier fabrique des tabliers en acier galvanise (P57, P90, P140), en aluminium thermolaque (200+ couleurs RAL) et en inox 304/316. Lames pleines, micro-perforees, polycarbonate transparent et grilles cobra.",
    priceContext: "Fabrication sur-mesure a partir de 800 euros. Delai de fabrication : 3 a 7 jours ouvrables. Devis gratuit apres prise de mesure.",
    whyImportant: "Chaque rideau est concu aux dimensions exactes de votre ouverture, avec un axe calibre au poids du tablier et des ressorts de compensation ajustes. Certificat de conformite et garantie 2 ans.",
  },
};

export function generateZoneContent(serviceId: string, zoneSlug: string, zoneName: string): ZoneServiceContent {
  const local = zonesLocal[zoneSlug];
  const variants = serviceVariants[serviceId] || serviceVariants.depannage;
  const terms = serviceSemanticTerms[serviceId] || serviceSemanticTerms.depannage;
  const angle = serviceAngles[serviceId] || serviceAngles.depannage;

  // Si pas de donnees locales (city-level ou zone non trouvee), fallback
  if (!local) {
    return {
      introTitle: `${variants[0].charAt(0).toUpperCase() + variants[0].slice(1)} de ${terms[0]} a ${zoneName}`,
      introText: `DRM Paris 2 assure le ${variants[0]} de ${terms[0]} a ${zoneName}. ${angle.urgency} ${angle.technical} ${angle.whyImportant}`,
      seo1Title: `${variants[1].charAt(0).toUpperCase() + variants[1].slice(1)} sur ${terms[1]} a ${zoneName} : service professionnel`,
      seo1Text: `${angle.whyImportant} ${angle.priceContext}`,
      seo2Title: `Prix ${variants[0]} ${terms[2]} a ${zoneName}`,
      seo2Text: `${angle.priceContext} Devis gratuit communique avant intervention. Appelez le 09 72 12 41 41.`,
      localContext: "",
      faq: [],
      whyUsCards: [],
      typesContext: "",
      localExpertise: "",
      ctaText: "",
      typesCards: [],
      statsLabels: [],
    };
  }

  // Construction des paragraphes avec donnees locales UNIQUES
  const streets = local.streets;
  const nbh = local.neighborhoods;
  const lm = local.landmarks;
  const metro = local.metroStations;
  const commerce = local.commerceTypes;

  // Melanger les rues pour l'intro (3 premieres)
  const introStreets = streets.slice(0, 3).join(", ");
  // Quartiers pour le seo1 (2 premiers)
  const seo1Neighborhoods = nbh.slice(0, 2).join(" et ");
  // Landmarks pour le seo2
  const seo2Landmarks = lm.slice(0, 2).join(", ");
  // Metro pour le contexte
  const metroList = metro.slice(0, 3).join(", ");
  // Commerces pour les exemples
  const commerceList = commerce.join(", ");

  const introTitle = `${variants[0].charAt(0).toUpperCase() + variants[0].slice(1)} de ${terms[0]} a ${zoneName} : ${nbh[0]} et alentours`;

  const introText = `DRM Paris 2 assure le ${variants[0]} de ${terms[0]} a ${zoneName}, dans les quartiers ${nbh.slice(0, 3).join(", ")}. ${angle.urgency} Nos techniciens interviennent en moins de 30 minutes dans tout ${zoneName}, que vous soyez ${introStreets} ou a proximite de ${lm[0]}. Les commerces de ${zoneName} — ${commerceList} — dependent de la securite de leur ${terms[1]}. ${angle.whyImportant}`;

  const seo1Title = `${variants[1].charAt(0).toUpperCase() + variants[1].slice(1)} sur ${terms[1]} pres de ${seo2Landmarks}`;

  const seo1Text = `Le secteur de ${seo1Neighborhoods} a ${zoneName} concentre de nombreux commerces equipes de rideaux metalliques. ${angle.technical} Nos techniciens bases a Paris intra-muros se deplacent rapidement via les stations ${metroList}. Les ${commerceList} de ${zoneName} font appel a DRM pour la fiabilite de notre service : diagnostic precis, devis transparent, intervention rapide. ${angle.whyImportant} Chaque intervention est adaptee aux contraintes specifiques du local : acces etroit ${introStreets.includes("Faubourg") ? "dans les immeubles haussmanniens" : "en centre-ville"}, rideau en applique ou encastre, motorisation existante ou a installer.`;

  const seo2Title = `Tarif ${variants[0]} ${terms[2]} a ${zoneName} (${metro[0]})`;

  const seo2Text = `${angle.priceContext} A ${zoneName}, nous intervenons frequemment dans le quartier ${nbh[0]} et aux alentours de ${lm[0]}. Les ${commerce[0]} du secteur representent une part importante de nos interventions. Le devis est systematiquement communique et accepte avant le debut des travaux. Nos tarifs sont identiques de jour comme de nuit, sans majoration week-end ni jour ferie. Le paiement s'effectue apres la remise en service de votre ${terms[0]}.`;

  const localContext = `Nos techniciens connaissent parfaitement ${zoneName} et ses specificites : les devantures des ${commerce[0]} ${streets[0]}, les commerces ${nbh[1] ? `du quartier ${nbh[1]}` : ""} pres de ${lm[1] || lm[0]}, et les acces par ${metro[0]} et ${metro[1] || metro[0]}.`;

  // FAQ UNIQUE par zone — integre les donnees locales
  const faq: { q: string; a: string }[] = [
    {
      q: `Qui appeler pour un ${variants[0]} de ${terms[0]} a ${zoneName} ?`,
      a: `Contactez DRM au 09 72 12 41 41. Nos techniciens interviennent en moins de 30 minutes a ${zoneName}, que vous soyez ${streets[0]}, ${streets[1]} ou pres de ${lm[0]}. Disponible 24h/24 et 7j/7.`,
    },
    {
      q: `Quel est le delai d'intervention a ${zoneName} ?`,
      a: `Notre delai moyen est de 25 a 30 minutes a ${zoneName}. Nos techniciens se deplacent via ${metro[0]} et ${metro[1] || metro[0]}, et connaissent parfaitement les quartiers ${nbh[0]} et ${nbh[1] || nbh[0]}.`,
    },
    {
      q: `Combien coute un ${variants[0]} de ${terms[2]} a ${zoneName} ?`,
      a: `${angle.priceContext} Les tarifs sont identiques de jour comme de nuit. Devis gratuit communique avant intervention.`,
    },
    {
      q: `Intervenez-vous le soir et le week-end a ${zoneName} ?`,
      a: `Oui, DRM intervient 24h/24 et 7j/7 a ${zoneName}, y compris les nuits, week-ends et jours feries. Les ${commerce[0]} du quartier ${nbh[0]} font regulierement appel a nos services en dehors des heures ouvrables.`,
    },
    {
      q: `Quelles zones couvrez-vous autour de ${zoneName} ?`,
      a: `Nous couvrons ${zoneName} et tous les arrondissements et communes limitrophes. Nos techniciens interviennent dans tout Paris intra-muros, ainsi qu'a Boulogne-Billancourt, Levallois-Perret et Neuilly-sur-Seine.`,
    },
  ];

  // Pourquoi nous — UNIQUE par zone avec contexte local
  const whyUsCards = [
    { t: `Intervention rapide a ${zoneName}`, d: `Nos techniciens arrivent en moins de 30 minutes dans le quartier ${nbh[0]} via ${metro[0]}.` },
    { t: "Devis gratuit sur place", d: `Prix communique et accepte avant toute intervention ${streets[0]} comme ${streets[2] || streets[1]}.` },
    { t: "Pieces d'origine garanties", d: `Lames, moteurs Somfy/ACM, ressorts, serrures provenant directement des fabricants. Stock embarque.` },
    { t: `25+ ans a Paris`, d: `Plus de 5 000 interventions realisees, dont de nombreuses aupres des ${commerce[0]} de ${zoneName}.` },
    { t: "Garantie pieces et MO", d: `Toutes nos interventions a ${zoneName} sont garanties. Si la panne recidive, l'intervention est gratuite.` },
    { t: `24h/24 a ${zoneName}`, d: `Disponible nuits, week-ends et jours feries. Les ${commerce[1] || commerce[0]} de ${nbh[1] || nbh[0]} peuvent compter sur nous.` },
  ];

  // Contexte types — phrase unique qui precede les cards types
  const typesContext = `Dans le secteur de ${nbh[0]} et ${nbh[1] || nbh[0]} a ${zoneName}, les ${commerce[0]} et ${commerce[1] || commerce[0]} rencontrent regulierement ces situations :`;

  // Types cards — ENTIEREMENT uniques par zone (combinaison service + local)
  const typeTemplates: Record<string, { title: string; text: string }[]> = {
    depannage: [
      { title: `Rideau bloque ${streets[0]}`, text: `Lame sortie du rail ou axe grippe. Nos techniciens debloquent votre rideau sans degradation en intervenant via ${metro[0]}. Les ${commerce[0]} de ${nbh[0]} font frequemment appel a ce service.` },
      { title: `Moteur en panne pres de ${lm[0]}`, text: `Condensateur grille ou carte electronique defaillante. Diagnostic electrique complet sur place avec multimetre. Pieces d'origine Somfy et ACM en stock sur le vehicule.` },
      { title: `Lames deformees quartier ${nbh[1] || nbh[0]}`, text: `Suite a un choc ou une tentative d'effraction ${streets[1]}. Remplacement des lames endommagees a l'identique, lames P57 ou P90 selon le modele existant.` },
      { title: `Serrure grippee a ${zoneName}`, text: `Oxydation ou usure du cylindre. Remplacement profil europeen en 20 minutes. Les ${commerce[1] || commerce[0]} pres de ${lm[1] || lm[0]} sont particulierement concernes par l'humidite.` },
    ],
    installation: [
      { title: `Lames pleines pour ${commerce[0]}`, text: `Acier galvanise P57 ou P90, securite maximale pour les ${commerce[0]} ${streets[0]} a ${zoneName}. Fabrication sur-mesure aux dimensions exactes.` },
      { title: `Micro-perforees quartier ${nbh[0]}`, text: `Aluminium avec petits trous reguliers, ideal pour les vitrines de ${nbh[0]}. Laisse passer lumiere et visibilite tout en protegeant ${streets[1]}.` },
      { title: `Grille cobra pres de ${lm[0]}`, text: `Tubes acier en motif cobra, resistante aux effractions. Les bijouteries et pharmacies pres de ${lm[0]} choisissent souvent ce modele pour la securite et la visibilite.` },
      { title: `Rideau motorise ${zoneName}`, text: `Installation complete avec moteur tubulaire Somfy ou central ACM selon le poids. Telecommande et boitier a cle inclus. Intervention via ${metro[0]}.` },
    ],
    reparation: [
      { title: `Remplacement lames ${streets[0]}`, text: `Lames deformees ou perforees remplacees a l'identique. Les ${commerce[0]} de ${nbh[0]} font souvent face a ce type de reparation apres des annees d'usage.` },
      { title: `Moteur defaillant quartier ${nbh[1] || nbh[0]}`, text: `Reparation condensateur, carte de commande ou embrayage. Les commerces pres de ${lm[0]} beneficient d'un diagnostic electrique complet avec multimetre.` },
      { title: `Axe et ressorts a ${zoneName}`, text: `Axe grippe ou ressort casse. Depose et reconditionnement par nos techniciens bases a proximite de ${metro[0]}. Intervention en moins de 30 minutes.` },
      { title: `Serrure et accessoires ${streets[1]}`, text: `Cylindre profil europeen, verrou, poignee, boite a cle. Remplacement avec cles neuves fournies. Les ${commerce[1] || commerce[0]} du secteur nous font confiance.` },
    ],
    motorisation: [
      { title: `Moteur tubulaire pour ${commerce[0]}`, text: `Somfy RS100 ou Simu T5, invisible dans l'axe. Ideal pour les ${commerce[0]} de ${nbh[0]} avec des rideaux de moins de 150 kg. Silencieux et fiable.` },
      { title: `Moteur central ${streets[0]}`, text: `ACM Titan ou Came, monte sur platine. Pour les rideaux lourds des entrepots et locaux industriels pres de ${lm[0]}. Robuste et puissant.` },
      { title: `Kit complet a ${zoneName}`, text: `Moteur + boitier 3 boutons + telecommande + cablage. Installation electrique complete par nos techniciens accessible via ${metro[0]} et ${metro[1] || metro[0]}.` },
      { title: `Debrayage et securite ${nbh[1] || nbh[0]}`, text: `Tous les moteurs sont equipes d'un debrayage manuel. En cas de coupure de courant, les ${commerce[1] || commerce[0]} du quartier peuvent ouvrir le rideau a la main.` },
    ],
    deblocage: [
      { title: `Lame sortie du rail ${streets[0]}`, text: `Cause la plus frequente de blocage. Remise en place sans casse par nos techniciens en intervention pres de ${lm[0]}. Les ${commerce[0]} de ${nbh[0]} sont souvent concernes.` },
      { title: `Axe grippe quartier ${nbh[1] || nbh[0]}`, text: `Manque de lubrification ou corrosion. Le rideau descend de travers ou refuse de bouger. Nettoyage et graissage complet, accessible via ${metro[0]}.` },
      { title: `Ressort casse a ${zoneName}`, text: `Le tablier devient trop lourd, le rideau se bloque a mi-hauteur. Remplacement du ressort par nos techniciens equipes. Les ${commerce[1] || commerce[0]} ${streets[1]} appellent souvent pour ca.` },
      { title: `Gel et oxydation ${lm[1] || lm[0]}`, text: `En hiver, le gel bloque les coulisses et le mecanisme des commerces pres de ${lm[1] || lm[0]}. Application de degivrant et lubrification preventive.` },
    ],
    entretien: [
      { title: `Graissage coulisses ${streets[0]}`, text: `Les coulisses des rideaux des ${commerce[0]} ${streets[0]} s'usent plus vite a cause de l'ouverture frequente. Graissage au spray silicone professionnel.` },
      { title: `Controle moteur quartier ${nbh[0]}`, text: `Verification de l'intensite, test du condensateur, controle des contacts. Les commerces pres de ${lm[0]} beneficient d'un diagnostic electrique preventif complet.` },
      { title: `Inspection mecanique ${zoneName}`, text: `Tension des ressorts, alignement des lames, etat du joint EPDM. Nos techniciens bases a proximite de ${metro[0]} effectuent un controle approfondi.` },
      { title: `Contrat annuel ${nbh[1] || nbh[0]}`, text: `2 visites preventives par an pour les ${commerce[1] || commerce[0]} du quartier ${nbh[1] || nbh[0]}. Rapport detaille et recommandations a chaque passage.` },
    ],
    fabrication: [
      { title: `Acier galvanise pour ${commerce[0]}`, text: `Lames P57 ou P90, fabrication francaise. Ideal pour les ${commerce[0]} ${streets[0]} a ${zoneName}. Sur-mesure aux dimensions exactes.` },
      { title: `Aluminium thermolaque ${nbh[0]}`, text: `200+ couleurs RAL pour s'integrer aux facades du quartier ${nbh[0]}. Plus leger que l'acier, disponible pres de ${lm[0]}.` },
      { title: `Coffre sur-mesure ${zoneName}`, text: `Coffre 2 ou 3 faces adapte aux linteaux des immeubles de ${zoneName}. Les devantures ${streets[1]} necessitent souvent des adaptations specifiques.` },
      { title: `Fabrication express ${lm[1] || lm[0]}`, text: `Delai de 3 jours pour les urgences. Les ${commerce[1] || commerce[0]} pres de ${lm[1] || lm[0]} peuvent beneficier d'une fabrication acceleree.` },
    ],
  };

  const typesCards = typeTemplates[serviceId] || typeTemplates.depannage;

  // Stats contextualises par zone
  const statsLabels = [
    { v: "25+", l: `Ans a ${zoneName}` },
    { v: "5000+", l: "Interventions Paris" },
    { v: "30 min", l: `Delai ${nbh[0]}` },
    { v: "4.9/5", l: "Avis Google" },
  ];

  // Section expertise locale — 150+ mots UNIQUES par zone
  const localExpertise = `Le ${variants[0]} de ${terms[0]} a ${zoneName} presente des specificites liees a la configuration urbaine du secteur. Les commerces situes ${streets[0]} et ${streets[1]} disposent souvent de devantures etroites avec des rideaux en pose applique, ou le coffre est visible a l'exterieur au-dessus de l'ouverture. Dans le quartier ${nbh[0]}, les immeubles plus anciens imposent parfois des contraintes d'acces pour les interventions en hauteur — nos techniciens sont equipes d'echelles telescopiques et d'outils compacts adaptes a ces situations. Les ${commerce[0]} du secteur de ${lm[0]} representent une part significative de nos interventions, avec des besoins specifiques en termes de securite et de disponibilite. La station de metro ${metro[0]} nous permet d'acceder rapidement au coeur de ${zoneName}, tandis que ${metro[1] || metro[0]} dessert les commerces situes plus en peripherie du quartier ${nbh[1] || nbh[0]}. Nous connaissons les contraintes horaires des commercants de ${zoneName} — ouverture matinale pour les ${commerce[1] || commerce[0]}, fermeture tardive pour les restaurants — et adaptons nos horaires d'intervention en consequence. Le stationnement etant souvent difficile ${streets[2] || streets[0]}, nos vehicules ateliers sont compacts et nos techniciens optimisent le temps sur place grace a un stock embarque complet de pieces detachees.`;

  // CTA unique par zone
  const ctaText = `Votre ${terms[0]} est en panne a ${zoneName} ? Nos techniciens sont a proximite, pres de ${lm[0]} et ${metro[0]}. Intervention garantie en moins de 30 minutes dans tout le secteur ${nbh[0]}.`;

  return {
    introTitle,
    introText,
    seo1Title,
    seo1Text,
    seo2Title,
    seo2Text,
    localContext,
    faq,
    whyUsCards,
    typesContext,
    localExpertise,
    ctaText,
    typesCards,
    statsLabels,
  };
}

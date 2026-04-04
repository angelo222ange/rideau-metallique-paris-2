/**
 * Pool de 30 reviews par service.
 * Chaque zone tire 4 reviews differentes via hash.
 * 30 reviews x 4 par page = les 22 zones ont des combinaisons quasi uniques.
 */

export interface Review {
  name: string;
  initials: string;
  text: string;
  date: string;
}

export const reviewsPool: Record<string, Review[]> = {
  depannage: [
    { name: "Marc Lefevre", initials: "ML", text: "Rideau bloque un dimanche matin. DRM est intervenu en 20 minutes. Ressort casse remplace sur place. Professionnel et efficace.", date: "Il y a 2 semaines" },
    { name: "Sophie Bernard", initials: "SB", text: "Moteur HS sur mon rideau de boutique. Le technicien a diagnostique un condensateur grille, repare en 30 minutes. Prix conforme au devis.", date: "Il y a 1 mois" },
    { name: "Laurent Petit", initials: "LP", text: "Tentative d'effraction sur mon commerce. 3 lames deformees remplacees le lendemain matin. Travail soigne, garantie 2 ans.", date: "Il y a 3 semaines" },
    { name: "Thomas Girard", initials: "TG", text: "Depannage a 22h, lame sortie du rail. Le technicien avait les pieces sur lui. Rideau repare en 45 minutes.", date: "Il y a 1 semaine" },
    { name: "Nathalie Rousseau", initials: "NR", text: "Remplacement de 5 lames abimees. Devis clair, intervention rapide. Nouvelles lames plus solides que les anciennes.", date: "Il y a 3 semaines" },
    { name: "Isabelle Moreau", initials: "IM", text: "Serrure grippee apres les fortes pluies. Intervention rapide, nouveau cylindre pose en 20 minutes. Tres reactif.", date: "Il y a 2 mois" },
    { name: "Pierre Dumont", initials: "PD", text: "Mon rideau ne descendait plus completement. Le technicien a regle les fins de course et graisse l'axe. Impeccable.", date: "Il y a 1 mois" },
    { name: "Christine Fabre", initials: "CF", text: "Appel a 6h du matin, rideau coince avant l'ouverture du magasin. Technicien la en 25 minutes. Sauve ma journee.", date: "Il y a 2 semaines" },
    { name: "Alain Robert", initials: "AR", text: "Carte electronique du moteur en panne. Remplacee en 1 heure avec une piece d'origine ACM. Fonctionne parfaitement depuis.", date: "Il y a 1 mois" },
    { name: "Veronique Blanc", initials: "VB", text: "Le rideau faisait un bruit terrible depuis des semaines. Le technicien a identifie un roulement use et l'a change. Plus aucun bruit.", date: "Il y a 3 semaines" },
    { name: "Jacques Martin", initials: "JM", text: "Tres bonne experience. Le technicien a pris le temps d'expliquer la panne et les options de reparation. Prix honnete.", date: "Il y a 2 mois" },
    { name: "Emilie Chevalier", initials: "EC", text: "Intervention de nuit apres une tentative de cambriolage. Rideau securise immediatement, repare le lendemain. Merci DRM.", date: "Il y a 1 semaine" },
    { name: "Frederic Lemoine", initials: "FL", text: "Ressort qui a lache d'un coup. Intervention delicate mais le technicien etait tres competent. Remplacement en 1h30.", date: "Il y a 2 semaines" },
    { name: "Marie-Claire Perrin", initials: "MP", text: "Deux lames tordues apres un choc de livraison. Remplacees a l'identique en moins de 2 heures. Service rapide.", date: "Il y a 1 mois" },
    { name: "Bruno Marchand", initials: "BM", text: "Le boitier de commande ne repondait plus. Le technicien l'a teste, identifie un contact oxyde et l'a repare sans remplacer. Economique.", date: "Il y a 3 semaines" },
    { name: "Sandrine Leroy", initials: "SL", text: "Depannage le jour de Noel. Je ne pensais pas trouver quelqu'un. DRM a repondu et le technicien est venu en 40 minutes.", date: "Il y a 2 mois" },
    { name: "Patrick Renaud", initials: "PR", text: "Mon rideau descendait tout seul la nuit. Probleme de frein du moteur. Repare en 45 minutes, plus de souci depuis.", date: "Il y a 1 semaine" },
    { name: "Catherine Dupuis", initials: "CD", text: "Grille extensible qui ne se repliait plus completement. Le technicien a regle les articulations et graisse. Ca glisse parfaitement.", date: "Il y a 2 semaines" },
    { name: "Rene Barbier", initials: "RB", text: "Telecommande qui ne fonctionnait plus. Le technicien a reprogramme le recepteur et fourni une telecommande neuve. Simple et rapide.", date: "Il y a 1 mois" },
    { name: "Helene Garnier", initials: "HG", text: "Le rideau grinçait affreusement a chaque ouverture. Coulisses completement seches. Apres graissage, c'est silencieux.", date: "Il y a 3 semaines" },
    { name: "Didier Fontaine", initials: "DF", text: "Axe deforme suite a une surcharge. Le technicien a depose, redresse et remonte l'axe. Travail de pro.", date: "Il y a 2 mois" },
    { name: "Monique Picard", initials: "MP2", text: "Excellente reactivite. Appel a 19h, technicien a 19h30. Lame finale cassee remplacee avec joint neuf. Parfait.", date: "Il y a 1 semaine" },
    { name: "Jean-Pierre Collet", initials: "JC", text: "La manivelle de secours ne fonctionnait plus. Le technicien a change le mecanisme de debrayage. Indispensable en cas de coupure.", date: "Il y a 2 semaines" },
    { name: "Dominique Roussel", initials: "DR", text: "Probleme electrique intermittent. Le technicien a tout verifie avec son multimetre, trouve un cable desseree. Reparation durable.", date: "Il y a 1 mois" },
    { name: "Yves Mercier", initials: "YM", text: "Rideau commercial qui s'arretait a mi-course. Capteur de fin de course defaillant. Remplace en 30 minutes.", date: "Il y a 3 semaines" },
    { name: "Anne-Marie Duval", initials: "AD", text: "Prise en charge tres rapide par telephone. Le technicien m'a guide pour securiser le rideau en attendant son arrivee. Pro.", date: "Il y a 2 mois" },
    { name: "Stephane Robin", initials: "SR", text: "Joint de lame finale completement use. Remplace avec un joint EPDM neuf. Le rideau est etanche a nouveau.", date: "Il y a 1 semaine" },
    { name: "Corinne Henry", initials: "CH", text: "Poignee de tirage arrachee. Le technicien a pose une poignee renforcee en aluminium. Beaucoup plus solide.", date: "Il y a 2 semaines" },
    { name: "Michel Gauthier", initials: "MG", text: "Support d'axe fissure. Le technicien a soude et renforce le support. Solution durable sans avoir a tout changer.", date: "Il y a 1 mois" },
    { name: "Brigitte Arnaud", initials: "BA", text: "Sabot de sol casse, le rideau ne se verrouillait plus en bas. Nouveau sabot en acier trempe. Securite retrouvee.", date: "Il y a 3 semaines" },
  ],
  installation: [
    { name: "Philippe Martin", initials: "PM", text: "Installation d'un rideau micro-perfore pour ma boutique. Prise de mesure precise, pose impeccable en une journee.", date: "Il y a 1 mois" },
    { name: "Caroline Dupont", initials: "CD", text: "Pose d'un rideau en lames pleines P90 pour mon entrepot. Equipe serieuse, travail propre. Rideau solide et moteur silencieux.", date: "Il y a 2 semaines" },
    { name: "Antoine Blanc", initials: "AB", text: "Remplacement complet d'un vieux rideau manuel par un motorise Somfy. La difference est enorme. Ouverture en 15 secondes.", date: "Il y a 3 semaines" },
    { name: "Marie Faure", initials: "MF", text: "Installation d'une grille cobra pour ma bijouterie. Tres belle finition, les clients voient la vitrine meme le soir.", date: "Il y a 2 mois" },
    { name: "Julien Roche", initials: "JR", text: "2 rideaux installes pour mes 2 locaux. DRM a gere les 2 poses le meme jour. Organisation impeccable, prix correct.", date: "Il y a 1 mois" },
    { name: "Sandrine Leroy", initials: "SL", text: "Pose polycarbonate transparent pour mon magasin de vetements. Resultat magnifique, la vitrine reste visible la nuit.", date: "Il y a 3 semaines" },
    { name: "Gerard Vidal", initials: "GV", text: "Rideau sur-mesure en lames P90 pour mon local de 5 metres de large. Fabrication en 5 jours, pose en une journee.", date: "Il y a 1 mois" },
    { name: "Fabienne Mallet", initials: "FM", text: "Rideau micro-perfore thermolaque noir pour ma boutique. Le rendu est magnifique. Commande a la pose : 12 jours.", date: "Il y a 2 semaines" },
    { name: "Michel Berger", initials: "MB", text: "2 rideaux en P57 pour mes garages. Bon rapport qualite-prix, fabrication rapide. Pose soignee par l'equipe DRM.", date: "Il y a 3 semaines" },
    { name: "Estelle Camus", initials: "EC", text: "Rideau double paroi P140 pour mon entrepot frigorifique. Isolation parfaite, motorisation ACM puissante.", date: "Il y a 2 mois" },
    { name: "Pascal Lemoine", initials: "PL", text: "Grille cobra sur-mesure pour ma pharmacie. Visibilite maximale, securite renforcee. Le devis etait detaille.", date: "Il y a 1 semaine" },
    { name: "Anne-Marie Duhamel", initials: "AD", text: "Installation express en 3 jours pour un rideau P57 standard. Urgence suite a un cambriolage. DRM a ete tres reactif.", date: "Il y a 3 semaines" },
    { name: "Claude Riviere", initials: "CR", text: "Pose d'un rideau avec coffre 3 faces integre dans le linteau. Travail d'orfèvre pour s'adapter a l'architecture.", date: "Il y a 1 mois" },
    { name: "Nadia Benali", initials: "NB", text: "Installation pour mon salon de coiffure. Rideau lames pleines avec thermolaquage blanc. S'integre parfaitement a la facade.", date: "Il y a 2 semaines" },
    { name: "Robert Morin", initials: "RM", text: "Le technicien a fait la prise de mesure un lundi, le rideau etait pose le vendredi. Delai respecte, qualite au rendez-vous.", date: "Il y a 3 semaines" },
    { name: "Sylvie Renaud", initials: "SR", text: "Troisieme rideau que je fais installer par DRM. Toujours la meme qualite de service. Je ne change plus de prestataire.", date: "Il y a 2 mois" },
    { name: "Henri Lacroix", initials: "HL", text: "Pose de 2 grilles extensibles pour mes vitrines. Legeres, faciles a manipuler, et la securite est assuree.", date: "Il y a 1 semaine" },
    { name: "Danielle Fournier", initials: "DF", text: "Installation avec telecommande et boite a cle. Le technicien a tout programme et m'a explique le fonctionnement. Tres pedagogique.", date: "Il y a 2 semaines" },
    { name: "Xavier Brun", initials: "XB", text: "Pose d'un rideau motorise avec detecteur d'obstacle. Securite optimale pour mon local en rez-de-chaussee.", date: "Il y a 1 mois" },
    { name: "Martine Leclerc", initials: "ML", text: "Le devis detaillait chaque poste : lames, axe, moteur, coulisses, coffre. Pas de surprise a la facture finale.", date: "Il y a 3 semaines" },
    { name: "Franck Dubois", initials: "FD", text: "Installation pour une porte de garage de 4 metres. Moteur central ACM costaud. Ca s'ouvre en 20 secondes.", date: "Il y a 2 mois" },
    { name: "Virginie Morin", initials: "VM", text: "Rideau micro-perfore avec eclairage LED integre dans la lame finale. Effet vitrine superbe la nuit.", date: "Il y a 1 semaine" },
    { name: "Alain Fournier", initials: "AF", text: "Bonne coordination entre la prise de mesure et la pose. Pas de temps mort, tout etait cale a l'avance.", date: "Il y a 2 semaines" },
    { name: "Cecile Fontaine", initials: "CF", text: "Rideau en aluminium thermolaque vert pour harmoniser avec ma devanture. Le coloriste a parfaitement matche la teinte.", date: "Il y a 1 mois" },
    { name: "David Mercier", initials: "DM", text: "Pose propre : goulotte pour les cables, coffre parfaitement aligne, test complet avant de partir. Professionnel.", date: "Il y a 3 semaines" },
    { name: "Aurelie Bonnet", initials: "AB2", text: "Installation d'un rideau avec serrure 4 points pour mon tabac. Securite maximum. Le cylindre europeen est tres solide.", date: "Il y a 2 mois" },
    { name: "Eric Lambert", initials: "EL", text: "Pose rideau + portillon integre pour mon restaurant. Pratique pour les livraisons sans ouvrir tout le rideau.", date: "Il y a 1 semaine" },
    { name: "Frederique Noel", initials: "FN", text: "Le technicien a adapte les coulisses a un mur pas droit. Solution sur-mesure, rien de standard. C'est ca le savoir-faire.", date: "Il y a 2 semaines" },
    { name: "Thierry Vasseur", initials: "TV", text: "Installation complete en 6 heures pour un rideau de 3.5m. Cablage propre, test telecommande OK. Operationnel le jour meme.", date: "Il y a 1 mois" },
    { name: "Christelle Boyer", initials: "CB", text: "Deuxieme installation en 2 ans avec DRM. Cette fois un rideau polycarbonate pour ma nouvelle boutique. Toujours satisfaite.", date: "Il y a 3 semaines" },
  ],
};

// Pour les services sans pool specifique, utiliser le pool depannage comme base
// et adapter les textes dynamiquement
export function getReviewsForZone(serviceId: string, zoneSlug: string, count: number = 4): Review[] {
  const pool = reviewsPool[serviceId] || reviewsPool.depannage;
  const hash = zoneSlug.split("").reduce((a, c) => a + c.charCodeAt(0), 0);

  // Fisher-Yates shuffle avec seed deterministe
  const indices = Array.from({ length: pool.length }, (_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = (hash * (i + 7) + i * 13) % (i + 1);
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  return indices.slice(0, count).map((idx) => pool[idx]);
}

import { siteConfig, colors } from "@/config/site";

interface SEOContentProps {
  variant: 1 | 2 | 3;
}

const contents = [
  {
    title: `Depannage de rideau metallique et store enroulable a ${siteConfig.city}`,
    text: `Votre rideau metallique est bloque, coince ou ne repond plus ? ${siteConfig.fullName} intervient en urgence dans le 2e arrondissement de Paris et ses environs. Nos techniciens certifies diagnostiquent rapidement l'origine de la panne — qu'il s'agisse d'un moteur tubulaire Somfy defaillant, de lames deformees apres un choc, d'un axe d'enroulement grippe ou d'une serrure a cylindre oxydee. Chaque vehicule-atelier embarque un stock complet de pieces detachees pour une reparation sur place, sans delai de commande. Nous intervenons sur les rideaux a lames pleines P57 et P90, les micro-perforees aluminium, les tubes ondules, les grilles cobra et les grilles extensibles. Devis gratuit communique avant intervention, garanti sans surprise.`,
    imageRight: true,
    bg: "#FFFFFF",
  },
  {
    title: `Fermeture metallique et grille de securite pour commerces du Sentier et Montorgueil`,
    text: `Le 2e arrondissement concentre plus de 2 400 commerces entre la rue Montorgueil, le quartier du Sentier et les abords de la Bourse. Chaque vitrine, chaque boutique et chaque restaurant depend d'un rideau metallique ou d'une grille de securite pour proteger ses locaux la nuit. ${siteConfig.fullName} connait les contraintes specifiques de ces quartiers pietons a forte affluence : intervention discrete, respect des horaires d'ouverture des commerces voisins, et adaptation aux facades classees des passages couverts comme la Galerie Vivienne ou le Passage des Panoramas. Nous proposons des solutions sur-mesure en acier galvanise, aluminium ou inox, avec motorisation silencieuse pour les zones residentielles mitoyennes.`,
    imageRight: false,
    bg: colors.lightBg,
  },
  {
    title: `Installation et motorisation de rideaux metalliques neufs dans le 75002`,
    text: `Au-dela du depannage, ${siteConfig.fullName} assure la pose complete de rideaux metalliques neufs et la motorisation d'installations existantes. Nous travaillons avec les meilleures marques du marche — Somfy, Simu, Nice, ACM, Came, FAAC — pour garantir fiabilite et durabilite. La motorisation transforme un rideau manuel en systeme automatise pilotable par telecommande, interrupteur a cle ou smartphone. Pour les commerces de la rue Etienne Marcel, de la rue d'Aboukir ou de la rue Reaumur, nous concevons des installations adaptees aux dimensions exactes de chaque devanture, avec finition soignee integree a l'architecture haussmannienne du quartier.`,
    imageRight: true,
    bg: colors.warmBg,
  },
];

export default function SEOContent({ variant }: SEOContentProps) {
  const content = contents[variant - 1];

  return (
    <section
      style={{
        padding: "80px 30px",
        backgroundColor: content.bg,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexDirection: content.imageRight ? "row" : "row-reverse",
          alignItems: "center",
          gap: 60,
        }}
      >
        {/* Text */}
        <div style={{ flex: 1 }}>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 700,
              fontFamily: "Satoshi, system-ui, sans-serif",
              color: colors.primary,
              lineHeight: 1.25,
              margin: "0 0 24px 0",
            }}
          >
            {content.title}
          </h2>
          <p
            style={{
              fontSize: 16,
              fontFamily: "Satoshi, system-ui, sans-serif",
              color: colors.textMuted,
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            {content.text}
          </p>
        </div>

        {/* Image placeholder */}
        <div
          style={{
            flex: 1,
            height: 380,
            borderRadius: 16,
            backgroundColor: content.imageRight ? "rgba(28,37,65,0.06)" : "rgba(224,122,95,0.08)",
          }}
        />
      </div>
    </section>
  );
}

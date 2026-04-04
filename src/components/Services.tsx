import Link from "next/link";

const servicesList = [
  {
    title: "Depannage rideau metallique",
    description: "Intervention urgence 24h/24 sur tous types de rideaux metalliques bloques ou en panne dans le 2e arrondissement.",
    href: "/depannage-rideau-metallique-paris-2/",
    bg: "#FFFFFF",
    color: "#1B4332",
    arrowBg: "#1B4332",
    arrowColor: "#FFFFFF",
  },
  {
    title: "Installation rideau metallique",
    description: "Pose complete de rideaux metalliques neufs pour commerces, bureaux et entrepots. Sur-mesure, toutes dimensions.",
    href: "/installation-rideau-metallique-paris-2/",
    bg: "#C9A84C",
    color: "#1B4332",
    arrowBg: "#1B4332",
    arrowColor: "#C9A84C",
  },
  {
    title: "Reparation rideau metallique",
    description: "Remise en etat de lames, moteurs, axes et serrures. Pieces d'origine, reparation garantie.",
    href: "/reparation-rideau-metallique-paris-2/",
    bg: "#FFFFFF",
    color: "#1B4332",
    arrowBg: "#1B4332",
    arrowColor: "#FFFFFF",
  },
  {
    title: "Motorisation rideau metallique",
    description: "Automatisation de rideaux manuels avec moteurs Somfy, Simu, ACM ou Nice. Installation electrique complete.",
    href: "/motorisation-rideau-metallique-paris-2/",
    bg: "#FFFFFF",
    color: "#1B4332",
    arrowBg: "#1B4332",
    arrowColor: "#FFFFFF",
  },
  {
    title: "Deblocage rideau metallique",
    description: "Liberation rapide de rideaux coinces sans degradation. Intervention en moins de 30 minutes.",
    href: "/deblocage-rideau-metallique-paris-2/",
    bg: "#C9A84C",
    color: "#1B4332",
    arrowBg: "#1B4332",
    arrowColor: "#C9A84C",
  },
  {
    title: "Entretien rideau metallique",
    description: "Maintenance preventive et contrats annuels. Graissage, reglage, verification complete du mecanisme.",
    href: "/entretien-rideau-metallique-paris-2/",
    bg: "#FFFFFF",
    color: "#1B4332",
    arrowBg: "#1B4332",
    arrowColor: "#FFFFFF",
  },
  {
    title: "Fabrication rideau metallique",
    description: "Fabrication sur-mesure en acier, aluminium ou inox. Lames pleines, micro-perforees, grilles cobra.",
    href: "/fabrication-rideau-metallique-paris-2/",
    bg: "#FFFFFF",
    color: "#1B4332",
    arrowBg: "#1B4332",
    arrowColor: "#FFFFFF",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: "120px 30px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          gap: 60,
        }}
        className="services-layout"
      >
        {/* Left column */}
        <div style={{ flex: "0 0 360px" }} className="services-left">
          <div
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: 14,
              fontWeight: 600,
              color: "#1B4332",
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginBottom: 20,
            }}
          >
            Nos Services
          </div>

          <h2
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: 40,
              fontWeight: 600,
              color: "#1B4332",
              lineHeight: 1.2,
              margin: "0 0 32px 0",
            }}
            className="services-h2"
          >
            7 services pour votre rideau metallique a Paris 2
          </h2>

          <a
            href="tel:+33972124141"
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: 16,
              fontWeight: 600,
              backgroundColor: "transparent",
              color: "#1B4332",
              padding: "18px 24px",
              borderRadius: 0,
              height: 55,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              border: "1px solid #1B4332",
            }}
          >
            Appeler le 09 72 12 41 41
          </a>
        </div>

        {/* Right column - Service cards */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
          {servicesList.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              style={{
                backgroundColor: service.bg,
                border: service.bg === "#FFFFFF" ? "1px solid #E5E5E5" : "none",
                borderRadius: 12,
                padding: "28px 28px",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: 20,
                textDecoration: "none",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "Urbanist, sans-serif",
                    fontSize: 20,
                    fontWeight: 600,
                    color: service.color,
                    margin: "0 0 8px 0",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Urbanist, sans-serif",
                    fontSize: 15,
                    fontWeight: 400,
                    color: service.color,
                    opacity: 0.7,
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {service.description}
                </p>
              </div>

              <div
                style={{
                  flexShrink: 0,
                  width: 44,
                  height: 44,
                  backgroundColor: service.arrowBg,
                  borderRadius: 22,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ transform: "rotate(-45deg)" }}>
                  <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke={service.arrowColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-layout { flex-direction: column !important; gap: 32px !important; }
          .services-left { flex: none !important; }
          .services-h2 { font-size: 28px !important; }
        }
      `}</style>
    </section>
  );
}

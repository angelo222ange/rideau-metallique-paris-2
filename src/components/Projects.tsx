const projects = [
  { title: "Rideau lames pleines commerce", category: "Installation", image: "/images/gallery/realisation-rideau-metallique-lame-pleine-boulangerie-france.webp" },
  { title: "Grille cobra vitrine bijouterie", category: "Fabrication", image: "/images/gallery/rideau-metallique-cobra-realisation-.webp" },
  { title: "Rideau micro-perfore boutique", category: "Installation", image: "/images/gallery/rideau-metallique-micro-perforee-realisation-france.webp" },
  { title: "Rideau polycarbonate boutique mode", category: "Installation", image: "/images/gallery/rideau-metallique-polycarbonate-drm-realisation.webp" },
  { title: "Grille extensible restaurant", category: "Reparation", image: "/images/gallery/rideau-metallique-restaurant-grille-extensible.webp" },
  { title: "Rideau industriel entrepot", category: "Depannage", image: "/images/gallery/realisation-rideau-metallique-lame-pleine-industriel-france.webp" },
];

export default function Projects() {
  return (
    <section
      id="realisations"
      style={{
        padding: "120px 30px 60px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: 48,
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
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
              Realisations
            </div>
            <h2
              style={{
                fontFamily: "Urbanist, sans-serif",
                fontSize: 40,
                fontWeight: 600,
                color: "#1B4332",
                lineHeight: 1.2,
                maxWidth: 600,
                margin: 0,
              }}
              className="projects-h2"
            >
              Nos dernieres interventions a Paris et en Ile-de-France
            </h2>
          </div>

          <a
            href="/contact/"
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
              flexShrink: 0,
            }}
          >
            Demander un devis
          </a>
        </div>

        {/* 3x2 Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
          className="projects-grid"
        >
          {projects.map((project) => (
            <div
              key={project.title}
              style={{
                position: "relative",
                height: 340,
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <img
                src={project.image}
                alt={`${project.title} - DRM Paris 2`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />

              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "50%",
                  background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
                }}
              />

              <div style={{ position: "absolute", bottom: 24, left: 24, right: 24 }}>
                <div
                  style={{
                    fontFamily: "Urbanist, sans-serif",
                    fontSize: 12,
                    fontWeight: 500,
                    color: "#C9A84C",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    marginBottom: 8,
                  }}
                >
                  {project.category}
                </div>
                <div
                  style={{
                    fontFamily: "Urbanist, sans-serif",
                    fontSize: 18,
                    fontWeight: 600,
                    color: "#FFFFFF",
                  }}
                >
                  {project.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
          .projects-h2 { font-size: 28px !important; }
        }
      `}</style>
    </section>
  );
}

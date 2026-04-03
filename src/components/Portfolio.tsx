import { colors } from "@/config/site";

export default function Portfolio() {
  const projects = [
    { title: "Depannage rideau commerce Sentier", category: "Depannage" },
    { title: "Installation grille metallique restaurant", category: "Installation" },
    { title: "Motorisation Somfy boutique Montorgueil", category: "Motorisation" },
    { title: "Remplacement lames rideau passage couvert", category: "Reparation" },
    { title: "Entretien preventif pharmacie rue Reaumur", category: "Entretien" },
    { title: "Fabrication sur-mesure boulangerie", category: "Fabrication" },
  ];

  return (
    <section
      style={{
        padding: "120px 30px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <span
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: colors.accent,
              fontFamily: "Satoshi, system-ui, sans-serif",
              display: "block",
              marginBottom: 16,
            }}
          >
            Realisations
          </span>
          <h2
            style={{
              fontSize: 48,
              fontWeight: 700,
              fontFamily: "Satoshi, system-ui, sans-serif",
              color: colors.primary,
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Nos interventions recentes
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {projects.map((project) => (
            <div
              key={project.title}
              style={{
                borderRadius: 16,
                overflow: "hidden",
                backgroundColor: colors.lightBg,
              }}
            >
              <div
                style={{
                  height: 260,
                  backgroundColor: "rgba(28,37,65,0.06)",
                }}
              />
              <div style={{ padding: 24 }}>
                <span
                  style={{
                    display: "inline-block",
                    padding: "6px 16px",
                    borderRadius: 58,
                    backgroundColor: "rgba(224,122,95,0.1)",
                    color: colors.accent,
                    fontSize: 13,
                    fontWeight: 700,
                    fontFamily: "Satoshi, system-ui, sans-serif",
                    marginBottom: 12,
                  }}
                >
                  {project.category}
                </span>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    fontFamily: "Satoshi, system-ui, sans-serif",
                    color: colors.primary,
                    margin: 0,
                  }}
                >
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

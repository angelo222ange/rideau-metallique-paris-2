import { siteConfig, colors } from "@/config/site";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Techniciens certifies",
      description:
        `Nos techniciens sont formes et experimentes sur toutes les marques de rideaux metalliques : Somfy, Simu, ACM, Nice, Came, FAAC.`,
    },
    {
      title: "Devis transparent",
      description:
        "Aucun frais cache. Nous communiquons un devis detaille avant chaque intervention pour que vous puissiez decider en toute connaissance de cause.",
    },
    {
      title: "Disponible 24h/24",
      description:
        "Votre rideau metallique est bloque en pleine nuit ? Nos equipes interviennent a toute heure, week-ends et jours feries compris.",
    },
    {
      title: "Garantie totale",
      description:
        "Chaque intervention est couverte par notre garantie pieces et main-d'oeuvre. Votre satisfaction est notre priorite.",
    },
    {
      title: `Moins de ${siteConfig.delai} min`,
      description:
        `Nos techniciens sont repartis dans tout ${siteConfig.city} et arrivent sur place en moins de ${siteConfig.delai} minutes.`,
    },
    {
      title: "Pieces d'origine",
      description:
        "Nous utilisons exclusivement des pieces detachees d'origine ou de qualite equivalente pour garantir la durabilite des reparations.",
    },
  ];

  return (
    <section
      style={{
        padding: "0px 30px 120px",
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
            Pourquoi nous choisir
          </span>
          <h2
            style={{
              fontSize: 48,
              fontWeight: 700,
              fontFamily: "Satoshi, system-ui, sans-serif",
              color: colors.primary,
              lineHeight: 1.15,
              margin: "0 0 16px 0",
            }}
          >
            L&apos;avantage DRM {siteConfig.city}
          </h2>
          <p
            style={{
              fontSize: 18,
              fontFamily: "Satoshi, system-ui, sans-serif",
              color: colors.textMuted,
              lineHeight: 1.7,
              margin: "0 auto",
              maxWidth: 600,
            }}
          >
            Ce qui nous distingue des autres depanneurs de rideaux metalliques dans le 2e arrondissement.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              style={{
                backgroundColor: colors.lightBg,
                borderRadius: 16,
                padding: 32,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 12,
                  backgroundColor: "rgba(224,122,95,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: 24, color: colors.accent }}>&#10003;</span>
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  fontFamily: "Satoshi, system-ui, sans-serif",
                  color: colors.primary,
                  margin: 0,
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  fontFamily: "Satoshi, system-ui, sans-serif",
                  color: colors.textMuted,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

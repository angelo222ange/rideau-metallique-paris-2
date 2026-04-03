import { siteConfig, colors } from "@/config/site";

export default function About() {
  const checklistItems = [
    "Techniciens certifies et experimentes",
    "Intervention en moins de 30 minutes",
    "Devis gratuit, sans engagement",
    "Garantie pieces et main-d'oeuvre",
  ];

  return (
    <section
      id="about"
      style={{
        minHeight: 531,
        padding: "0px 30px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 60,
        }}
      >
        {/* Left Image */}
        <div
          style={{
            flex: 1,
            height: 460,
            borderRadius: 16,
            backgroundColor: colors.lightBg,
          }}
        />

        {/* Right Content */}
        <div style={{ flex: 1 }}>
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
            Votre specialiste rideau metallique
          </span>
          <h2
            style={{
              fontSize: 40,
              fontWeight: 700,
              fontFamily: "Satoshi, system-ui, sans-serif",
              color: colors.primary,
              lineHeight: 1.2,
              margin: "0 0 20px 0",
            }}
          >
            {siteConfig.experience} ans d&apos;expertise en fermetures metalliques a {siteConfig.city}
          </h2>
          <p
            style={{
              fontSize: 16,
              fontFamily: "Satoshi, system-ui, sans-serif",
              color: colors.textMuted,
              lineHeight: 1.7,
              margin: "0 0 32px 0",
            }}
          >
            {siteConfig.fullName} intervient sur tous types de rideaux metalliques,
            grilles de defence et fermetures pour commerces et industriels dans le
            2e arrondissement de Paris et alentours. Notre equipe de techniciens
            qualifies assure un service rapide et professionnel.
          </p>

          {/* Checklist */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              marginBottom: 32,
            }}
          >
            {checklistItems.map((item) => (
              <div
                key={item}
                style={{ display: "flex", alignItems: "center", gap: 12 }}
              >
                <div
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    backgroundColor: `rgba(224,122,95,0.1)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span style={{ color: colors.accent, fontSize: 14, fontWeight: 700 }}>
                    &#10003;
                  </span>
                </div>
                <span
                  style={{
                    fontSize: 16,
                    fontFamily: "Satoshi, system-ui, sans-serif",
                    color: colors.primary,
                    fontWeight: 500,
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          <a
            href={siteConfig.phoneLink}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              height: 51,
              padding: "12px 24px",
              borderRadius: 58,
              backgroundColor: colors.accent,
              color: "#FFFFFF",
              fontSize: 16,
              fontWeight: 700,
              textDecoration: "none",
              fontFamily: "Satoshi, system-ui, sans-serif",
            }}
          >
            Appelez le {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

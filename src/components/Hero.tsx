import { siteConfig, colors } from "@/config/site";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: 820,
        padding: "203px 30px 130px",
        backgroundColor: colors.primary,
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
        {/* Left Content */}
        <div style={{ flex: 1 }}>
          <h1
            style={{
              fontSize: 56,
              fontWeight: 700,
              fontFamily: "Satoshi, system-ui, sans-serif",
              color: "#FFFFFF",
              lineHeight: 1.1,
              margin: "0 0 24px 0",
            }}
          >
            Depannage Rideau Metallique {siteConfig.city}
          </h1>
          <p
            style={{
              fontSize: 18,
              fontFamily: "Satoshi, system-ui, sans-serif",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7,
              margin: "0 0 40px 0",
              maxWidth: 480,
            }}
          >
            Intervention urgente 24h/24, 7j/7 sur tous types de rideaux metalliques,
            grilles et fermetures dans le 2e arrondissement et ses environs. Devis gratuit.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 16, marginBottom: 60 }}>
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
                gap: 8,
              }}
            >
              <span style={{ fontSize: 18 }}>&#9742;</span>
              {siteConfig.phone}
            </a>
            <a
              href="/contact/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: 51,
                padding: "12px 24px",
                borderRadius: 58,
                backgroundColor: "transparent",
                color: "#FFFFFF",
                fontSize: 16,
                fontWeight: 700,
                textDecoration: "none",
                fontFamily: "Satoshi, system-ui, sans-serif",
                border: "2px solid rgba(255,255,255,0.3)",
              }}
            >
              Devis gratuit
            </a>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: 40 }}>
            {[
              { value: `${siteConfig.experience} ans`, label: "d'experience" },
              { value: siteConfig.interventions, label: "interventions" },
              { value: "24h/24", label: "disponibilite" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontSize: 32,
                    fontWeight: 700,
                    color: colors.accent,
                    fontFamily: "Satoshi, system-ui, sans-serif",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: "rgba(255,255,255,0.6)",
                    fontFamily: "Satoshi, system-ui, sans-serif",
                    marginTop: 4,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image placeholder */}
        <div
          style={{
            flex: 1,
            height: 520,
            borderRadius: 24,
            backgroundColor: "rgba(255,255,255,0.08)",
          }}
        />
      </div>
    </section>
  );
}

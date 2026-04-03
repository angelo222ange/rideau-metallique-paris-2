import { siteConfig, colors } from "@/config/site";

export default function CTA() {
  return (
    <section
      id="quote"
      style={{
        padding: "120px 30px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: 48,
            fontWeight: 700,
            fontFamily: "Satoshi, system-ui, sans-serif",
            color: colors.primary,
            lineHeight: 1.15,
            margin: "0 0 20px 0",
          }}
        >
          Rideau metallique en panne ?
          <br />
          Appelez-nous maintenant
        </h2>
        <p
          style={{
            fontSize: 18,
            fontFamily: "Satoshi, system-ui, sans-serif",
            color: colors.textMuted,
            lineHeight: 1.7,
            margin: "0 auto 40px auto",
            maxWidth: 600,
          }}
        >
          Nos techniciens sont disponibles 24h/24, 7j/7 pour intervenir dans
          le 2e arrondissement de Paris et ses environs. Devis gratuit, intervention rapide.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
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
              color: colors.primary,
              fontSize: 16,
              fontWeight: 700,
              textDecoration: "none",
              fontFamily: "Satoshi, system-ui, sans-serif",
              border: `2px solid ${colors.primary}`,
            }}
          >
            Demander un devis
          </a>
        </div>
      </div>
    </section>
  );
}

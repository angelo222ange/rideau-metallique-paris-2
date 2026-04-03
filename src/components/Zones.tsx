import Link from "next/link";
import { siteConfig, zones, colors } from "@/config/site";

export default function Zones() {
  return (
    <section
      style={{
        padding: "120px 30px",
        backgroundColor: colors.lightBg,
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
            Zones d&apos;intervention
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
            Intervention rapide dans tout Paris
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
            Nos techniciens sont repartis sur l&apos;ensemble de l&apos;Ile-de-France pour intervenir en moins de {siteConfig.delai} minutes.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
          }}
        >
          {zones.slice(0, 12).map((zone) => (
            <Link
              key={zone.slug}
              href={`/depannage-rideau-metallique-${zone.slug}/`}
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 12,
                  padding: "16px 20px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: colors.primary,
                      fontFamily: "Satoshi, system-ui, sans-serif",
                      display: "block",
                    }}
                  >
                    {zone.name}
                  </span>
                  <span
                    style={{
                      fontSize: 13,
                      color: colors.textMuted,
                      fontFamily: "Satoshi, system-ui, sans-serif",
                    }}
                  >
                    {zone.postalCode}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: 13,
                    color: colors.accent,
                    fontWeight: 600,
                    fontFamily: "Satoshi, system-ui, sans-serif",
                  }}
                >
                  {zone.distance}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 32 }}>
          <Link
            href="/zones/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              height: 48,
              padding: "10px 24px",
              borderRadius: 58,
              backgroundColor: colors.accent,
              color: "#FFFFFF",
              fontSize: 15,
              fontWeight: 700,
              textDecoration: "none",
              fontFamily: "Satoshi, system-ui, sans-serif",
            }}
          >
            Voir toutes les zones
          </Link>
        </div>
      </div>
    </section>
  );
}

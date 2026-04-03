import Link from "next/link";
import { siteConfig, services as servicesList, colors } from "@/config/site";

export default function Services() {
  const citySlug = siteConfig.city.toLowerCase().replace(/\s+/g, "-");

  return (
    <section
      id="services"
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
            Nos prestations
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
            Services rideau metallique
            <br />
            {siteConfig.city}
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            marginBottom: 48,
          }}
        >
          {servicesList.map((service) => (
            <Link
              key={service.id}
              href={`/${service.slug}-${citySlug}/`}
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 16,
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  minHeight: 200,
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
                  <span style={{ fontSize: 24, color: colors.accent }}>&#9881;</span>
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
                  {service.name} rideau metallique
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
                  {service.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
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
            Appeler le {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

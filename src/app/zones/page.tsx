import { Metadata } from "next";
import Link from "next/link";
import { siteConfig, services, zones, colors } from "@/config/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: `Zones d'intervention | DRM ${siteConfig.city}`,
  description: `DRM ${siteConfig.city} intervient dans ${zones.length}+ communes autour du 2e arrondissement. Depannage rideau metallique rapide. ${siteConfig.phone}`,
  alternates: { canonical: `${siteConfig.url}/zones/` },
};

export default function ZonesPage() {
  return (
    <>
      <Header />
      <main>
        <section
          style={{
            padding: "180px 30px 80px",
            backgroundColor: colors.primary,
          }}
        >
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <h1
              style={{
                fontSize: 48,
                fontWeight: 700,
                fontFamily: "Satoshi, system-ui, sans-serif",
                color: "#FFFFFF",
                margin: "0 0 16px 0",
              }}
            >
              Zones d&apos;intervention
            </h1>
            <p
              style={{
                fontSize: 18,
                fontFamily: "Satoshi, system-ui, sans-serif",
                color: "rgba(255,255,255,0.7)",
                margin: 0,
              }}
            >
              Nous intervenons dans tout Paris et les communes limitrophes en moins de {siteConfig.delai} minutes.
            </p>
          </div>
        </section>

        <section style={{ padding: "80px 30px", backgroundColor: "#FFFFFF" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 24,
              }}
            >
              {zones.map((zone) => (
                <div
                  key={zone.slug}
                  style={{
                    backgroundColor: colors.lightBg,
                    borderRadius: 16,
                    padding: 24,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 12,
                    }}
                  >
                    <h2
                      style={{
                        fontSize: 20,
                        fontWeight: 700,
                        fontFamily: "Satoshi, system-ui, sans-serif",
                        color: colors.primary,
                        margin: 0,
                      }}
                    >
                      {zone.name}
                    </h2>
                    <span
                      style={{
                        fontSize: 13,
                        color: colors.accent,
                        fontFamily: "Satoshi, system-ui, sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      {zone.distance}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      color: colors.textMuted,
                      fontFamily: "Satoshi, system-ui, sans-serif",
                      margin: "0 0 12px 0",
                    }}
                  >
                    {zone.postalCode}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 8,
                    }}
                  >
                    {services.slice(0, 3).map((service) => (
                      <Link
                        key={service.id}
                        href={`/${service.slug}-${zone.slug}/`}
                        style={{
                          fontSize: 12,
                          padding: "4px 10px",
                          borderRadius: 58,
                          backgroundColor: "rgba(224,122,95,0.1)",
                          color: colors.accent,
                          textDecoration: "none",
                          fontFamily: "Satoshi, system-ui, sans-serif",
                          fontWeight: 600,
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

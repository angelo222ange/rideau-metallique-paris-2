import { Metadata } from "next";
import { siteConfig, services, zones, colors } from "@/config/site";
import { parseSlug } from "@/lib/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";

const citySlug = siteConfig.city.toLowerCase().replace(/\s+/g, "-");

export function generateStaticParams() {
  const params: { service_zone: string }[] = [];

  for (const zone of zones) {
    for (const service of services) {
      params.push({ service_zone: `${service.slug}-${zone.slug}` });
    }
  }

  for (const service of services) {
    params.push({ service_zone: `${service.slug}-${citySlug}` });
  }

  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ service_zone: string }> }): Promise<Metadata> {
  const { service_zone } = await params;
  const parsed = parseSlug(service_zone);
  const serviceName = parsed
    ? services.find((s) => s.slug === parsed.serviceSlug)?.name || "Service"
    : "Service";
  const zoneName = parsed
    ? zones.find((z) => z.slug === parsed.zoneSlug)?.name || siteConfig.city
    : siteConfig.city;

  return {
    title: `${serviceName} Rideau Metallique ${zoneName} | ${siteConfig.phone}`,
    description: `${serviceName} rideau metallique a ${zoneName}. Intervention rapide 24h/24 par DRM. Techniciens certifies, devis gratuit. ${siteConfig.phone}`,
    alternates: {
      canonical: `${siteConfig.url}/${service_zone}/`,
    },
  };
}

export default async function ServiceZonePage({ params }: { params: Promise<{ service_zone: string }> }) {
  const { service_zone } = await params;
  const parsed = parseSlug(service_zone);
  const service = parsed
    ? services.find((s) => s.slug === parsed.serviceSlug)
    : null;
  const zone = parsed
    ? zones.find((z) => z.slug === parsed.zoneSlug)
    : null;

  const displayZone = zone?.name || siteConfig.city;
  const displayService = service?.name || "Service";

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          style={{
            padding: "180px 30px 100px",
            backgroundColor: colors.primary,
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h1
              style={{
                fontSize: 48,
                fontWeight: 700,
                fontFamily: "Satoshi, system-ui, sans-serif",
                color: "#FFFFFF",
                lineHeight: 1.15,
                margin: "0 0 20px 0",
              }}
            >
              {displayService} rideau metallique {displayZone}
            </h1>
            <p
              style={{
                fontSize: 18,
                fontFamily: "Satoshi, system-ui, sans-serif",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.7,
                margin: "0 0 32px 0",
                maxWidth: 600,
              }}
            >
              {service?.description || `Service professionnel de rideau metallique a ${displayZone}.`} Intervention rapide, devis gratuit. Appelez le {siteConfig.phone}.
            </p>
            <a
              href={siteConfig.phoneLink}
              style={{
                display: "inline-flex",
                alignItems: "center",
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
          </div>
        </section>

        {/* Content placeholder — Phase 3 fills this */}
        <section style={{ padding: "80px 30px", backgroundColor: "#FFFFFF" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2
              style={{
                fontSize: 36,
                fontWeight: 700,
                fontFamily: "Satoshi, system-ui, sans-serif",
                color: colors.primary,
                margin: "0 0 20px 0",
              }}
            >
              {displayService} de fermeture metallique a {displayZone}
            </h2>
            <p
              style={{
                fontSize: 16,
                fontFamily: "Satoshi, system-ui, sans-serif",
                color: colors.textMuted,
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              {service?.description || ""} Notre equipe de techniciens certifies intervient rapidement a {displayZone} et ses alentours pour tout type de rideau metallique, grille de defence ou store enroulable.
            </p>
          </div>
        </section>

        <CTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

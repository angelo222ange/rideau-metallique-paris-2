import { Metadata } from "next";
import Link from "next/link";
import { siteConfig, services, zones, colors } from "@/config/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const citySlug = siteConfig.city.toLowerCase().replace(/\s+/g, "-");

export const metadata: Metadata = {
  title: `Plan du site | DRM ${siteConfig.city}`,
  description: `Plan du site DRM ${siteConfig.city}. Toutes nos pages services, zones d'intervention et informations.`,
  alternates: { canonical: `${siteConfig.url}/plan-du-site/` },
};

export default function PlanDuSitePage() {
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
                margin: 0,
              }}
            >
              Plan du site
            </h1>
          </div>
        </section>

        <section style={{ padding: "80px 30px", backgroundColor: "#FFFFFF" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 60 }}>
              {/* Pages principales */}
              <div>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: colors.primary, fontFamily: "Satoshi, system-ui, sans-serif", margin: "0 0 16px 0" }}>
                  Pages principales
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    { label: "Accueil", href: "/" },
                    { label: "Contact", href: "/contact/" },
                    { label: "Tarifs", href: "/tarifs/" },
                    { label: "Zones d'intervention", href: "/zones/" },
                    { label: "Blog", href: "/blog/" },
                    { label: "Mentions legales", href: "/mentions-legales/" },
                    { label: "Confidentialite", href: "/confidentialite/" },
                  ].map((link) => (
                    <Link key={link.href} href={link.href} style={{ fontSize: 15, color: colors.accent, textDecoration: "none", fontFamily: "Satoshi, system-ui, sans-serif" }}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: colors.primary, fontFamily: "Satoshi, system-ui, sans-serif", margin: "0 0 16px 0" }}>
                  Services
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {services.map((service) => (
                    <Link key={service.id} href={`/${service.slug}-${citySlug}/`} style={{ fontSize: 15, color: colors.accent, textDecoration: "none", fontFamily: "Satoshi, system-ui, sans-serif" }}>
                      {service.name} rideau metallique
                    </Link>
                  ))}
                </div>
              </div>

              {/* Zones */}
              <div>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: colors.primary, fontFamily: "Satoshi, system-ui, sans-serif", margin: "0 0 16px 0" }}>
                  Zones d&apos;intervention
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {zones.map((zone) => (
                    <Link key={zone.slug} href={`/depannage-rideau-metallique-${zone.slug}/`} style={{ fontSize: 15, color: colors.accent, textDecoration: "none", fontFamily: "Satoshi, system-ui, sans-serif" }}>
                      {zone.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

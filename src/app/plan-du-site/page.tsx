import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services, zones } from "@/config/site";

export const metadata: Metadata = {
  title: "Plan du site | DRM Paris 2",
  description: "Plan du site DRM Paris 2 — toutes les pages du site.",
  alternates: { canonical: "https://depannagerideau-metallique-paris-2.fr/plan-du-site/" },
};

export default function PlanDuSitePage() {
  return (
    <>
      <Header />
      <main style={{ padding: "160px 30px 80px", backgroundColor: "#FFFFFF", minHeight: "80vh" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "Urbanist, sans-serif", fontSize: 36, fontWeight: 600, color: "#1B4332", marginBottom: 40 }}>
            Plan du site
          </h1>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }} className="sitemap-grid">
            <div>
              <h2 style={{ fontFamily: "Urbanist, sans-serif", fontSize: 18, fontWeight: 600, color: "#1B4332", marginBottom: 16 }}>Pages principales</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <Link href="/" style={{ fontFamily: "Urbanist, sans-serif", fontSize: 14, color: "#555", textDecoration: "none" }}>Accueil</Link>
                <Link href="/zones/" style={{ fontFamily: "Urbanist, sans-serif", fontSize: 14, color: "#555", textDecoration: "none" }}>Zones</Link>
                <Link href="/blog/" style={{ fontFamily: "Urbanist, sans-serif", fontSize: 14, color: "#555", textDecoration: "none" }}>Blog</Link>
                <Link href="/contact/" style={{ fontFamily: "Urbanist, sans-serif", fontSize: 14, color: "#555", textDecoration: "none" }}>Contact</Link>
              </div>
            </div>

            <div>
              <h2 style={{ fontFamily: "Urbanist, sans-serif", fontSize: 18, fontWeight: 600, color: "#1B4332", marginBottom: 16 }}>Services</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {services.map((svc) => (
                  <Link key={svc.id} href={`/${svc.slug}-paris-2/`} style={{ fontFamily: "Urbanist, sans-serif", fontSize: 14, color: "#555", textDecoration: "none" }}>
                    {svc.name} rideau metallique Paris 2
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 style={{ fontFamily: "Urbanist, sans-serif", fontSize: 18, fontWeight: 600, color: "#1B4332", marginBottom: 16 }}>Zones ({zones.length})</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {zones.map((zone) => (
                  <Link key={zone.slug} href={`/depannage-rideau-metallique-${zone.slug}/`} style={{ fontFamily: "Urbanist, sans-serif", fontSize: 13, color: "#555", textDecoration: "none" }}>
                    {zone.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <style>{`@media (max-width: 768px) { .sitemap-grid { grid-template-columns: 1fr !important; } }`}</style>
    </>
  );
}

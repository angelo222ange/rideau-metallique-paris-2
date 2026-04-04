import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { zones, services } from "@/config/site";

export const metadata: Metadata = {
  title: "Zones d'intervention | DRM Paris 2 — Rideau Metallique",
  description: "DRM Paris 2 intervient dans 22 zones : tous les arrondissements de Paris + Boulogne, Levallois, Neuilly. 09 72 12 41 41.",
  alternates: { canonical: "https://depannagerideau-metallique-paris-2.fr/zones/" },
};

export default function ZonesPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ padding: "160px 30px 80px", backgroundColor: "#1B4332" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h1 style={{ fontFamily: "Urbanist, sans-serif", fontSize: 48, fontWeight: 600, color: "#FFFFFF", marginBottom: 16 }} className="zones-h1">
              Zones d&apos;intervention
            </h1>
            <p style={{ fontFamily: "Urbanist, sans-serif", fontSize: 17, color: "rgba(255,255,255,0.7)", maxWidth: 600, lineHeight: 1.6 }}>
              Nos techniciens interviennent dans tout Paris et les communes limitrophes.
            </p>
          </div>
        </section>

        <section style={{ padding: "80px 30px", backgroundColor: "#FFFFFF" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="zones-grid">
              {zones.map((zone) => (
                <div
                  key={zone.slug}
                  style={{
                    border: "1px solid #E5E5E5",
                    borderRadius: 12,
                    padding: 24,
                  }}
                >
                  <h3 style={{ fontFamily: "Urbanist, sans-serif", fontSize: 18, fontWeight: 600, color: "#1B4332", marginBottom: 4, marginTop: 0 }}>
                    {zone.name}
                  </h3>
                  <p style={{ fontFamily: "Urbanist, sans-serif", fontSize: 13, color: "#888", marginBottom: 16 }}>
                    {zone.postalCode} — {zone.distance}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {services.slice(0, 3).map((svc) => (
                      <Link
                        key={svc.id}
                        href={`/${svc.slug}-${zone.slug}/`}
                        style={{
                          fontFamily: "Urbanist, sans-serif",
                          fontSize: 12,
                          fontWeight: 500,
                          color: "#1B4332",
                          backgroundColor: "#F5F0E8",
                          padding: "4px 10px",
                          borderRadius: 50,
                          textDecoration: "none",
                        }}
                      >
                        {svc.name}
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

      <style>{`
        @media (max-width: 768px) {
          .zones-h1 { font-size: 32px !important; }
          .zones-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

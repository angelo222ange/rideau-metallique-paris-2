import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { tarifs } from "@/config/site";

export const metadata: Metadata = {
  title: "Tarifs Rideau Metallique Paris 2 | DRM — Prix Intervention",
  description: "Tarifs depannage rideau metallique Paris 2. Deblocage a partir de 149 euros. Devis gratuit. Appelez le 09 72 12 41 41.",
  alternates: { canonical: "https://depannagerideau-metallique-paris-2.fr/tarifs/" },
};

export default function TarifsPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ padding: "160px 30px 80px", backgroundColor: "#1B4332" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h1 style={{ fontFamily: "Urbanist, sans-serif", fontSize: 48, fontWeight: 600, color: "#FFFFFF", marginBottom: 16 }} className="tarifs-h1">
              Tarifs rideau metallique Paris 2
            </h1>
            <p style={{ fontFamily: "Urbanist, sans-serif", fontSize: 17, color: "rgba(255,255,255,0.7)", maxWidth: 600, lineHeight: 1.6 }}>
              Prix indicatifs TTC. Devis gratuit et detaille communique avant chaque intervention.
            </p>
          </div>
        </section>

        <section style={{ padding: "80px 30px", backgroundColor: "#FFFFFF" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{ borderRadius: 12, border: "1px solid #E5E5E5", overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", backgroundColor: "#1B4332", padding: "16px 24px" }}>
                <div style={{ fontFamily: "Urbanist, sans-serif", fontSize: 14, fontWeight: 600, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "1px" }}>Intervention</div>
                <div style={{ fontFamily: "Urbanist, sans-serif", fontSize: 14, fontWeight: 600, color: "#C9A84C", textTransform: "uppercase", letterSpacing: "1px", textAlign: "right" }}>Prix TTC</div>
              </div>
              {tarifs.map((t, i) => (
                <div
                  key={t.intervention}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    padding: "18px 24px",
                    backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#FAF7F2",
                    borderTop: "1px solid #F0F0F0",
                  }}
                >
                  <div style={{ fontFamily: "Urbanist, sans-serif", fontSize: 15, fontWeight: 500, color: "#1B4332" }}>{t.intervention}</div>
                  <div style={{ fontFamily: "Urbanist, sans-serif", fontSize: 15, fontWeight: 600, color: "#C9A84C", textAlign: "right" }}>{t.prix} &euro;</div>
                </div>
              ))}
            </div>

            <p style={{ fontFamily: "Urbanist, sans-serif", fontSize: 14, color: "#888", marginTop: 24, lineHeight: 1.6 }}>
              * Prix indicatifs TTC. Le devis definitif est etabli apres diagnostic sur place et communique avant toute intervention.
              Pas de frais caches. Garantie pieces et main-d&apos;oeuvre.
            </p>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .tarifs-h1 { font-size: 32px !important; }
        }
      `}</style>
    </>
  );
}

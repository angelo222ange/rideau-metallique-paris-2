import { Metadata } from "next";
import { siteConfig, tarifs, colors } from "@/config/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: `Tarifs Rideau Metallique ${siteConfig.city} | Prix Depannage`,
  description: `Tarifs depannage rideau metallique ${siteConfig.city}. Deblocage des 149 euros. Devis gratuit, sans engagement. ${siteConfig.phone}`,
  alternates: { canonical: `${siteConfig.url}/tarifs/` },
};

export default function TarifsPage() {
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
              Tarifs rideau metallique {siteConfig.city}
            </h1>
            <p
              style={{
                fontSize: 18,
                fontFamily: "Satoshi, system-ui, sans-serif",
                color: "rgba(255,255,255,0.7)",
                margin: 0,
              }}
            >
              Prix indicatifs TTC. Devis gratuit et detaille avant chaque intervention.
            </p>
          </div>
        </section>

        <section style={{ padding: "80px 30px", backgroundColor: "#FFFFFF" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <div
              style={{
                borderRadius: 16,
                overflow: "hidden",
                border: `1px solid ${colors.border}`,
              }}
            >
              {/* Table Header */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr",
                  padding: "16px 24px",
                  backgroundColor: colors.primary,
                }}
              >
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    fontFamily: "Satoshi, system-ui, sans-serif",
                  }}
                >
                  Intervention
                </span>
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    fontFamily: "Satoshi, system-ui, sans-serif",
                    textAlign: "right",
                  }}
                >
                  Prix TTC
                </span>
              </div>

              {/* Rows */}
              {tarifs.map((t, i) => (
                <div
                  key={t.intervention}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr",
                    padding: "16px 24px",
                    backgroundColor: i % 2 === 0 ? "#FFFFFF" : colors.lightBg,
                    borderBottom: i < tarifs.length - 1 ? `1px solid ${colors.border}` : "none",
                  }}
                >
                  <span
                    style={{
                      fontSize: 16,
                      color: colors.primary,
                      fontFamily: "Satoshi, system-ui, sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    {t.intervention}
                  </span>
                  <span
                    style={{
                      fontSize: 16,
                      color: colors.accent,
                      fontFamily: "Satoshi, system-ui, sans-serif",
                      fontWeight: 700,
                      textAlign: "right",
                    }}
                  >
                    {t.prix} &euro;
                  </span>
                </div>
              ))}
            </div>

            <p
              style={{
                fontSize: 14,
                color: colors.textMuted,
                fontFamily: "Satoshi, system-ui, sans-serif",
                marginTop: 24,
                lineHeight: 1.6,
                textAlign: "center",
              }}
            >
              * Prix indicatifs. Le tarif exact depend du type de rideau, de la marque et de la nature de la panne.
              Un devis precis est etabli sur place avant toute intervention.
            </p>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}

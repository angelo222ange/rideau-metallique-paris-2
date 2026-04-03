import { Metadata } from "next";
import { siteConfig, colors } from "@/config/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: `Blog | DRM ${siteConfig.city}`,
  description: `Conseils et actualites sur les rideaux metalliques. Entretien, depannage, motorisation. Blog DRM ${siteConfig.city}.`,
  alternates: { canonical: `${siteConfig.url}/blog/` },
};

export default function BlogPage() {
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
              Blog DRM {siteConfig.city}
            </h1>
          </div>
        </section>

        <section style={{ padding: "80px 30px", backgroundColor: "#FFFFFF" }}>
          <div
            style={{
              maxWidth: 800,
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: 18,
                color: colors.textMuted,
                fontFamily: "Satoshi, system-ui, sans-serif",
                lineHeight: 1.7,
              }}
            >
              Les articles arrivent bientot. Revenez nous consulter prochainement.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

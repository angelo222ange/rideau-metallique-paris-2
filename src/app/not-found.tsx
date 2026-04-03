import Link from "next/link";
import { siteConfig, colors } from "@/config/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section
          style={{
            padding: "220px 30px 120px",
            backgroundColor: colors.primary,
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <div
              style={{
                fontSize: 120,
                fontWeight: 700,
                color: colors.accent,
                fontFamily: "Satoshi, system-ui, sans-serif",
                lineHeight: 1,
                marginBottom: 24,
              }}
            >
              404
            </div>
            <h1
              style={{
                fontSize: 36,
                fontWeight: 700,
                fontFamily: "Satoshi, system-ui, sans-serif",
                color: "#FFFFFF",
                margin: "0 0 16px 0",
              }}
            >
              Page introuvable
            </h1>
            <p
              style={{
                fontSize: 18,
                fontFamily: "Satoshi, system-ui, sans-serif",
                color: "rgba(255,255,255,0.7)",
                margin: "0 0 40px 0",
              }}
            >
              La page que vous cherchez n&apos;existe pas ou a ete deplacee.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
              <Link
                href="/"
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
                }}
              >
                Retour a l&apos;accueil
              </Link>
              <a
                href={siteConfig.phoneLink}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  height: 51,
                  padding: "12px 24px",
                  borderRadius: 58,
                  backgroundColor: "transparent",
                  color: "#FFFFFF",
                  fontSize: 16,
                  fontWeight: 700,
                  textDecoration: "none",
                  fontFamily: "Satoshi, system-ui, sans-serif",
                  border: "2px solid rgba(255,255,255,0.3)",
                  gap: 8,
                }}
              >
                <span style={{ fontSize: 18 }}>&#9742;</span>
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

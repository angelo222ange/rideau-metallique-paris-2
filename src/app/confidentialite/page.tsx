import { Metadata } from "next";
import { siteConfig, colors } from "@/config/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: `Politique de confidentialite | DRM ${siteConfig.city}`,
  description: `Politique de confidentialite et protection des donnees du site ${siteConfig.domain}.`,
  alternates: { canonical: `${siteConfig.url}/confidentialite/` },
};

export default function ConfidentialitePage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ padding: "180px 30px 80px", backgroundColor: colors.primary }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <h1 style={{ fontSize: 48, fontWeight: 700, fontFamily: "Satoshi, system-ui, sans-serif", color: "#FFFFFF", margin: 0 }}>
              Politique de confidentialite
            </h1>
          </div>
        </section>

        <section style={{ padding: "80px 30px", backgroundColor: "#FFFFFF" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <div style={{ fontSize: 16, fontFamily: "Satoshi, system-ui, sans-serif", color: colors.textMuted, lineHeight: 1.8 }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: colors.primary, margin: "0 0 16px 0" }}>Collecte des donnees</h2>
              <p>Les informations collectees via le formulaire de contact (nom, telephone, email, message) sont utilisees uniquement pour repondre a votre demande de devis ou d&apos;intervention.</p>

              <h2 style={{ fontSize: 24, fontWeight: 700, color: colors.primary, margin: "40px 0 16px 0" }}>Utilisation des donnees</h2>
              <p>Vos donnees ne sont jamais vendues, cedees ou partagees avec des tiers a des fins commerciales. Elles sont conservees pendant la duree necessaire au traitement de votre demande.</p>

              <h2 style={{ fontSize: 24, fontWeight: 700, color: colors.primary, margin: "40px 0 16px 0" }}>Vos droits</h2>
              <p>Conformement au RGPD, vous disposez d&apos;un droit d&apos;acces, de rectification et de suppression de vos donnees personnelles. Pour exercer ces droits, contactez-nous a {siteConfig.email}.</p>

              <h2 style={{ fontSize: 24, fontWeight: 700, color: colors.primary, margin: "40px 0 16px 0" }}>Cookies</h2>
              <p>Ce site utilise uniquement des cookies techniques necessaires a son bon fonctionnement. Aucun cookie publicitaire ou de suivi n&apos;est utilise.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

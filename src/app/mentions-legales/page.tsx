import { Metadata } from "next";
import { siteConfig, colors } from "@/config/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: `Mentions legales | DRM ${siteConfig.city}`,
  description: `Mentions legales du site ${siteConfig.domain}.`,
  alternates: { canonical: `${siteConfig.url}/mentions-legales/` },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ padding: "180px 30px 80px", backgroundColor: colors.primary }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <h1 style={{ fontSize: 48, fontWeight: 700, fontFamily: "Satoshi, system-ui, sans-serif", color: "#FFFFFF", margin: 0 }}>
              Mentions legales
            </h1>
          </div>
        </section>

        <section style={{ padding: "80px 30px", backgroundColor: "#FFFFFF" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <div style={{ fontSize: 16, fontFamily: "Satoshi, system-ui, sans-serif", color: colors.textMuted, lineHeight: 1.8 }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: colors.primary, margin: "0 0 16px 0" }}>Editeur du site</h2>
              <p>{siteConfig.fullName}</p>
              <p>Adresse : {siteConfig.address}</p>
              <p>Telephone : {siteConfig.phone}</p>
              <p>Email : {siteConfig.email}</p>

              <h2 style={{ fontSize: 24, fontWeight: 700, color: colors.primary, margin: "40px 0 16px 0" }}>Hebergement</h2>
              <p>Ce site est heberge par OVH SAS, 2 rue Kellermann, 59100 Roubaix, France.</p>

              <h2 style={{ fontSize: 24, fontWeight: 700, color: colors.primary, margin: "40px 0 16px 0" }}>Propriete intellectuelle</h2>
              <p>L&apos;ensemble des contenus (textes, images, logos) presents sur ce site sont la propriete exclusive de {siteConfig.fullName} et sont proteges par le droit d&apos;auteur. Toute reproduction est interdite sans autorisation prealable.</p>

              <h2 style={{ fontSize: 24, fontWeight: 700, color: colors.primary, margin: "40px 0 16px 0" }}>Responsabilite</h2>
              <p>{siteConfig.fullName} s&apos;efforce de fournir des informations exactes et a jour. Toutefois, nous ne pouvons garantir l&apos;exactitude de toutes les informations presentees sur ce site.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

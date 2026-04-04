import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Politique de confidentialite | DRM Paris 2",
  alternates: { canonical: "https://depannagerideau-metallique-paris-2.fr/confidentialite/" },
};

export default function ConfidentialitePage() {
  return (
    <>
      <Header />
      <main style={{ padding: "160px 30px 80px", backgroundColor: "#FFFFFF", minHeight: "80vh" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "Urbanist, sans-serif", fontSize: 36, fontWeight: 600, color: "#1B4332", marginBottom: 40 }}>
            Politique de confidentialite
          </h1>
          <div style={{ fontFamily: "Urbanist, sans-serif", fontSize: 15, color: "#555", lineHeight: 1.8 }}>
            <h2 style={{ fontSize: 20, fontWeight: 600, color: "#1B4332", marginTop: 32, marginBottom: 12 }}>Collecte des donnees</h2>
            <p>Les donnees personnelles collectees via le formulaire de contact (nom, email, telephone, message) sont utilisees uniquement pour repondre a votre demande de devis ou d&apos;intervention.</p>
            <h2 style={{ fontSize: 20, fontWeight: 600, color: "#1B4332", marginTop: 32, marginBottom: 12 }}>Conservation</h2>
            <p>Vos donnees sont conservees pendant une duree maximale de 3 ans a compter de votre derniere interaction avec nos services.</p>
            <h2 style={{ fontSize: 20, fontWeight: 600, color: "#1B4332", marginTop: 32, marginBottom: 12 }}>Droits</h2>
            <p>Conformement au RGPD, vous disposez d&apos;un droit d&apos;acces, de rectification et de suppression de vos donnees. Contactez-nous par email pour exercer ces droits.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

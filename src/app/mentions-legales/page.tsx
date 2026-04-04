import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mentions legales | DRM Paris 2",
  alternates: { canonical: "https://depannagerideau-metallique-paris-2.fr/mentions-legales/" },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main style={{ padding: "160px 30px 80px", backgroundColor: "#FFFFFF", minHeight: "80vh" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "Urbanist, sans-serif", fontSize: 36, fontWeight: 600, color: "#1B4332", marginBottom: 40 }}>
            Mentions legales
          </h1>
          <div style={{ fontFamily: "Urbanist, sans-serif", fontSize: 15, color: "#555", lineHeight: 1.8 }}>
            <h2 style={{ fontSize: 20, fontWeight: 600, color: "#1B4332", marginTop: 32, marginBottom: 12 }}>Editeur du site</h2>
            <p>DRM Paris 2 — Depannage Rideau Metallique<br />Impasse des Peintres, 75002 Paris<br />Telephone : 09 72 12 41 41<br />Email : contact@depannagerideau-metallique-paris-2.fr</p>
            <h2 style={{ fontSize: 20, fontWeight: 600, color: "#1B4332", marginTop: 32, marginBottom: 12 }}>Hebergement</h2>
            <p>OVH SAS — 2, rue Kellermann, 59100 Roubaix, France</p>
            <h2 style={{ fontSize: 20, fontWeight: 600, color: "#1B4332", marginTop: 32, marginBottom: 12 }}>Propriete intellectuelle</h2>
            <p>L&apos;ensemble du contenu de ce site (textes, images, logos) est protege par le droit d&apos;auteur. Toute reproduction est interdite sans autorisation prealable.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

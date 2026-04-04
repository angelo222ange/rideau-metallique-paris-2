import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact | DRM Paris 2 — Depannage Rideau Metallique",
  description: "Contactez DRM Paris 2 pour un depannage rideau metallique urgence. 09 72 12 41 41. Devis gratuit, intervention 24h/24.",
  alternates: { canonical: "https://depannagerideau-metallique-paris-2.fr/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ padding: "160px 30px 80px", backgroundColor: "#1B4332" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h1 style={{ fontFamily: "Urbanist, sans-serif", fontSize: 48, fontWeight: 600, color: "#FFFFFF", marginBottom: 16 }} className="contact-h1">
              Contactez DRM Paris 2
            </h1>
            <p style={{ fontFamily: "Urbanist, sans-serif", fontSize: 17, color: "rgba(255,255,255,0.7)", maxWidth: 600, lineHeight: 1.6 }}>
              Rideau metallique bloque ? Besoin d&apos;un devis ? Appelez-nous ou remplissez le formulaire ci-dessous.
            </p>
          </div>
        </section>

        <section style={{ padding: "80px 30px", backgroundColor: "#FFFFFF" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 60 }} className="contact-layout">
            {/* Contact info */}
            <div style={{ flex: 1 }}>
              <h2 style={{ fontFamily: "Urbanist, sans-serif", fontSize: 28, fontWeight: 600, color: "#1B4332", marginBottom: 32 }}>
                Nos coordonnees
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <div>
                  <div style={{ fontFamily: "Urbanist, sans-serif", fontSize: 14, fontWeight: 600, color: "#C9A84C", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 8 }}>Telephone</div>
                  <a href="tel:+33972124141" style={{ fontFamily: "Urbanist, sans-serif", fontSize: 24, fontWeight: 700, color: "#1B4332", textDecoration: "none" }}>09 72 12 41 41</a>
                </div>
                <div>
                  <div style={{ fontFamily: "Urbanist, sans-serif", fontSize: 14, fontWeight: 600, color: "#C9A84C", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 8 }}>Adresse</div>
                  <p style={{ fontFamily: "Urbanist, sans-serif", fontSize: 16, color: "#555" }}>Impasse des Peintres, 75002 Paris</p>
                </div>
                <div>
                  <div style={{ fontFamily: "Urbanist, sans-serif", fontSize: 14, fontWeight: 600, color: "#C9A84C", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 8 }}>Horaires</div>
                  <p style={{ fontFamily: "Urbanist, sans-serif", fontSize: 16, color: "#555" }}>24h/24, 7j/7 — week-ends et jours feries inclus</p>
                </div>
                <div>
                  <div style={{ fontFamily: "Urbanist, sans-serif", fontSize: 14, fontWeight: 600, color: "#C9A84C", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 8 }}>Email</div>
                  <p style={{ fontFamily: "Urbanist, sans-serif", fontSize: 16, color: "#555" }}>contact@depannagerideau-metallique-paris-2.fr</p>
                </div>
              </div>
            </div>

            {/* Contact form placeholder — Phase 4 adds webhook */}
            <div style={{ flex: 1 }}>
              <div style={{ backgroundColor: "#F5F0E8", borderRadius: 12, padding: 40 }}>
                <h3 style={{ fontFamily: "Urbanist, sans-serif", fontSize: 22, fontWeight: 600, color: "#1B4332", marginBottom: 24, marginTop: 0 }}>
                  Demander un devis gratuit
                </h3>
                <p style={{ fontFamily: "Urbanist, sans-serif", fontSize: 15, color: "#666", lineHeight: 1.6 }}>
                  Formulaire de contact — sera active en Phase 4.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .contact-h1 { font-size: 32px !important; }
          .contact-layout { flex-direction: column !important; gap: 40px !important; }
        }
      `}</style>
    </>
  );
}

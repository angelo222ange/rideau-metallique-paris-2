import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog | DRM Paris 2 — Conseils Rideau Metallique",
  description: "Blog DRM Paris 2 : conseils, guides et actualites sur les rideaux metalliques. Entretien, depannage, motorisation.",
  alternates: { canonical: "https://depannagerideau-metallique-paris-2.fr/blog/" },
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ padding: "160px 30px 80px", backgroundColor: "#1B4332" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h1 style={{ fontFamily: "Urbanist, sans-serif", fontSize: 48, fontWeight: 600, color: "#FFFFFF" }} className="blog-page-h1">
              Blog DRM Paris 2
            </h1>
          </div>
        </section>
        <section style={{ padding: "80px 30px", backgroundColor: "#FFFFFF" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <p style={{ fontFamily: "Urbanist, sans-serif", fontSize: 16, color: "#555", lineHeight: 1.7 }}>
              Articles a venir — generes automatiquement par BlogEngine.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`@media (max-width: 768px) { .blog-page-h1 { font-size: 32px !important; } }`}</style>
    </>
  );
}

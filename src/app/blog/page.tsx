import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog | DRM Paris 2 — Conseils Rideau Metallique",
  description: "Blog DRM Paris 2 : conseils, guides et actualites sur les rideaux metalliques. Entretien, depannage, motorisation.",
  alternates: { canonical: "https://depannagerideau-metallique-paris-2.fr/blog/" },
};

const articles = [
  {
    title: "Comment debloquer un rideau metallique coince : guide pratique",
    excerpt: "Votre rideau metallique est bloque en position fermee ou a mi-course ? Decouvrez les causes frequentes et les solutions professionnelles pour debloquer votre rideau rapidement.",
    category: "Depannage",
    date: "Mars 2026",
    slug: "debloquer-rideau-metallique-coince",
    image: "/images/gallery/rideau-metallique-bloque-depannage-rideau-metallique.webp",
  },
  {
    title: "Motorisation rideau metallique : quel moteur choisir ?",
    excerpt: "Moteur tubulaire, central ou lateral ? Guide complet pour choisir la motorisation adaptee a votre rideau metallique selon vos besoins et votre budget.",
    category: "Motorisation",
    date: "Fevrier 2026",
    slug: "motorisation-rideau-metallique-quel-moteur",
    image: "/images/gallery/moteur-tubulaire-rideau-metallique-drm.webp",
  },
  {
    title: "Entretien rideau metallique : les gestes qui evitent les pannes",
    excerpt: "Un entretien regulier prolonge la duree de vie de votre rideau metallique et previent les pannes couteuses. Decouvrez les gestes essentiels a adopter.",
    category: "Entretien",
    date: "Janvier 2026",
    slug: "entretien-rideau-metallique-gestes-preventifs",
    image: "/images/gallery/entretien-rideau-metallique-drm-france.webp",
  },
];

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
            <p style={{ fontFamily: "Urbanist, sans-serif", fontSize: 18, color: "#FFFFFFCC", marginTop: 16, maxWidth: 600 }}>
              Conseils, guides et actualites sur les rideaux metalliques a Paris 2e et alentours.
            </p>
          </div>
        </section>

        <section style={{ padding: "80px 30px", backgroundColor: "#F8F7F4" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "grid", gap: 28 }} className="blog-page-grid">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}/`}
                  style={{
                    display: "flex",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E5E5E5",
                    borderRadius: 12,
                    overflow: "hidden",
                    textDecoration: "none",
                  }}
                  className="blog-page-card"
                >
                  <div style={{ width: 320, minHeight: 240, flexShrink: 0, overflow: "hidden" }} className="blog-page-card-img">
                    <img
                      src={article.image}
                      alt={article.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ padding: "32px 36px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                      <span
                        style={{
                          fontFamily: "Urbanist, sans-serif",
                          fontSize: 12,
                          fontWeight: 600,
                          color: "#1B4332",
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                          backgroundColor: "#C9A84C",
                          padding: "5px 10px",
                        }}
                      >
                        {article.category}
                      </span>
                      <span style={{ fontFamily: "Urbanist, sans-serif", fontSize: 13, color: "#999999" }}>
                        {article.date}
                      </span>
                    </div>
                    <h2 style={{ fontFamily: "Urbanist, sans-serif", fontSize: 22, fontWeight: 600, color: "#1B4332", lineHeight: 1.3, margin: "0 0 12px 0" }}>
                      {article.title}
                    </h2>
                    <p style={{ fontFamily: "Urbanist, sans-serif", fontSize: 15, color: "#666", lineHeight: 1.7, margin: "0 0 20px 0" }}>
                      {article.excerpt}
                    </p>
                    <span
                      style={{
                        fontFamily: "Urbanist, sans-serif",
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#C9A84C",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      Lire l&apos;article
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        @media (max-width: 768px) {
          .blog-page-h1 { font-size: 32px !important; }
          .blog-page-grid { grid-template-columns: 1fr !important; }
          .blog-page-card { flex-direction: column !important; }
          .blog-page-card-img { width: 100% !important; height: 220px !important; min-height: auto !important; }
        }
        @media (min-width: 769px) {
          .blog-page-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}

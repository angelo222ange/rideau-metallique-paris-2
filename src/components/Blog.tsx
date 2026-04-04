import Link from "next/link";

const posts = [
  {
    title: "Comment debloquer un rideau metallique coince : guide pratique",
    category: "Depannage",
    date: "Mars 2026",
    slug: "debloquer-rideau-metallique-coince",
    image: "/images/gallery/rideau-metallique-bloque-depannage-rideau-metallique.webp",
  },
  {
    title: "Motorisation rideau metallique : quel moteur choisir ?",
    category: "Motorisation",
    date: "Fevrier 2026",
    slug: "motorisation-rideau-metallique-quel-moteur",
    image: "/images/gallery/moteur-tubulaire-rideau-metallique-drm.webp",
  },
  {
    title: "Entretien rideau metallique : les gestes qui evitent les pannes",
    category: "Entretien",
    date: "Janvier 2026",
    slug: "entretien-rideau-metallique-gestes-preventifs",
    image: "/images/gallery/entretien-rideau-metallique-drm-france.webp",
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      style={{
        padding: "120px 30px",
        backgroundColor: "#F5F0E8",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: 48,
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "Urbanist, sans-serif",
                fontSize: 14,
                fontWeight: 600,
                color: "#1B4332",
                textTransform: "uppercase",
                letterSpacing: "2px",
                marginBottom: 20,
              }}
            >
              Blog
            </div>
            <h2
              style={{
                fontFamily: "Urbanist, sans-serif",
                fontSize: 40,
                fontWeight: 600,
                color: "#1B4332",
                lineHeight: 1.2,
                maxWidth: 500,
                margin: 0,
              }}
              className="blog-h2"
            >
              Conseils et guides pour votre rideau metallique
            </h2>
          </div>

          <Link
            href="/blog/"
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: 16,
              fontWeight: 600,
              backgroundColor: "transparent",
              color: "#1B4332",
              padding: "18px 24px",
              borderRadius: 0,
              height: 55,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              border: "1px solid #1B4332",
              flexShrink: 0,
            }}
          >
            Tous les articles
          </Link>
        </div>

        {/* Blog cards */}
        <div style={{ display: "flex", gap: 20 }} className="blog-grid">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}/`}
              style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
                border: "1px solid #E5E5E5",
                borderRadius: 12,
                overflow: "hidden",
                textDecoration: "none",
              }}
            >
              <div style={{ width: "100%", height: 220, overflow: "hidden" }}>
                <img
                  src={post.image}
                  alt={post.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              <div style={{ padding: "24px 24px 28px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
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
                      borderRadius: 0,
                    }}
                  >
                    {post.category}
                  </span>
                  <span style={{ fontFamily: "Urbanist, sans-serif", fontSize: 13, fontWeight: 400, color: "#999999" }}>
                    {post.date}
                  </span>
                </div>

                <h3 style={{ fontFamily: "Urbanist, sans-serif", fontSize: 18, fontWeight: 600, color: "#1B4332", lineHeight: 1.3, margin: "0 0 14px 0" }}>
                  {post.title}
                </h3>

                <span
                  style={{
                    fontFamily: "Urbanist, sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#1B4332",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  Lire la suite
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="#1B4332" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .blog-grid { flex-direction: column !important; }
          .blog-h2 { font-size: 28px !important; }
        }
      `}</style>
    </section>
  );
}

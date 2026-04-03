import Link from "next/link";
import { colors } from "@/config/site";

export default function Blog() {
  const posts = [
    {
      slug: "comment-debloquer-rideau-metallique",
      date: "3 avril 2026",
      title: "Comment debloquer un rideau metallique coince ?",
      excerpt:
        "Votre rideau metallique refuse de monter ou descendre ? Decouvrez les causes les plus frequentes et les gestes a adopter avant d'appeler un professionnel.",
    },
    {
      slug: "entretien-rideau-metallique-guide",
      date: "1 avril 2026",
      title: "Guide d'entretien de votre rideau metallique",
      excerpt:
        "Un entretien regulier evite 80% des pannes. Voici les gestes simples a effectuer pour prolonger la duree de vie de votre fermeture metallique.",
    },
    {
      slug: "motorisation-rideau-metallique-avantages",
      date: "28 mars 2026",
      title: "Les avantages de la motorisation de rideau metallique",
      excerpt:
        "Passer d'un rideau manuel a un rideau motorise offre confort, securite et gain de temps. Comparatif des moteurs Somfy, Simu et Nice.",
    },
  ];

  return (
    <section
      id="blog"
      style={{
        padding: "120px 30px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 60,
          }}
        >
          <div>
            <span
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: colors.accent,
                fontFamily: "Satoshi, system-ui, sans-serif",
                display: "block",
                marginBottom: 16,
              }}
            >
              Actualites
            </span>
            <h2
              style={{
                fontSize: 48,
                fontWeight: 700,
                fontFamily: "Satoshi, system-ui, sans-serif",
                color: colors.primary,
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              Notre blog
            </h2>
          </div>
          <Link
            href="/blog/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
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
            Tous les articles
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}/`} style={{ textDecoration: "none" }}>
              <div
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  backgroundColor: colors.lightBg,
                }}
              >
                <div
                  style={{
                    height: 220,
                    backgroundColor: "rgba(28,37,65,0.06)",
                  }}
                />
                <div style={{ padding: 24 }}>
                  <span
                    style={{
                      fontSize: 14,
                      color: colors.accent,
                      fontFamily: "Satoshi, system-ui, sans-serif",
                      fontWeight: 600,
                      display: "block",
                      marginBottom: 12,
                    }}
                  >
                    {post.date}
                  </span>
                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      fontFamily: "Satoshi, system-ui, sans-serif",
                      color: colors.primary,
                      margin: "0 0 12px 0",
                      lineHeight: 1.3,
                    }}
                  >
                    {post.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      fontFamily: "Satoshi, system-ui, sans-serif",
                      color: colors.textMuted,
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

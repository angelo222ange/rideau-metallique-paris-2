import { Metadata } from "next";
import { siteConfig, colors } from "@/config/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return [
    { slug: "comment-debloquer-rideau-metallique" },
    { slug: "entretien-rideau-metallique-guide" },
    { slug: "motorisation-rideau-metallique-avantages" },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return {
    title: `${title} | Blog DRM ${siteConfig.city}`,
    description: `Article sur ${title.toLowerCase()}. Conseils professionnels par DRM ${siteConfig.city}.`,
    alternates: { canonical: `${siteConfig.url}/blog/${slug}/` },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <>
      <Header />
      <main>
        <section
          style={{
            padding: "180px 30px 80px",
            backgroundColor: colors.primary,
          }}
        >
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h1
              style={{
                fontSize: 40,
                fontWeight: 700,
                fontFamily: "Satoshi, system-ui, sans-serif",
                color: "#FFFFFF",
                margin: 0,
              }}
            >
              {title}
            </h1>
          </div>
        </section>

        <section style={{ padding: "80px 30px", backgroundColor: "#FFFFFF" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <p
              style={{
                fontSize: 16,
                color: colors.textMuted,
                fontFamily: "Satoshi, system-ui, sans-serif",
                lineHeight: 1.8,
              }}
            >
              Contenu de l&apos;article en cours de redaction. Revenez bientot.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

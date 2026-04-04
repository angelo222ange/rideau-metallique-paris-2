import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return [
    { slug: "debloquer-rideau-metallique-coince" },
    { slug: "motorisation-rideau-metallique-quel-moteur" },
    { slug: "entretien-rideau-metallique-gestes-preventifs" },
  ];
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.replace(/-/g, " ");

  return (
    <>
      <Header />
      <main>
        <section style={{ padding: "160px 30px 80px", backgroundColor: "#1B4332" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h1 style={{ fontFamily: "Urbanist, sans-serif", fontSize: 36, fontWeight: 600, color: "#FFFFFF" }}>
              {title}
            </h1>
          </div>
        </section>
        <section style={{ padding: "80px 30px", backgroundColor: "#FFFFFF" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <p style={{ fontFamily: "Urbanist, sans-serif", fontSize: 16, color: "#555", lineHeight: 1.7 }}>
              Contenu de l&apos;article a generer par BlogEngine.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

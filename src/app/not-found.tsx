import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main style={{ padding: "200px 30px 120px", textAlign: "center", minHeight: "70vh" }}>
        <h1 style={{ fontFamily: "Urbanist, sans-serif", fontSize: 72, fontWeight: 700, color: "#C9A84C", marginBottom: 16 }}>
          404
        </h1>
        <p style={{ fontFamily: "Urbanist, sans-serif", fontSize: 20, fontWeight: 500, color: "#1B4332", marginBottom: 32 }}>
          Page non trouvee
        </p>
        <p style={{ fontFamily: "Urbanist, sans-serif", fontSize: 16, color: "#555", marginBottom: 40, maxWidth: 500, margin: "0 auto 40px" }}>
          La page que vous recherchez n&apos;existe pas ou a ete deplacee.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="/"
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: 16,
              fontWeight: 600,
              backgroundColor: "#C9A84C",
              color: "#1B4332",
              padding: "16px 28px",
              borderRadius: 0,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            Retour a l&apos;accueil
          </a>
          <a
            href="tel:+33972124141"
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: 16,
              fontWeight: 600,
              backgroundColor: "transparent",
              color: "#1B4332",
              padding: "16px 28px",
              borderRadius: 0,
              textDecoration: "none",
              border: "1px solid #1B4332",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            09 72 12 41 41
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}

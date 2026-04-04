export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Appel telephonique",
      description: "Appelez le 09 72 12 41 41. Un technicien qualifie prend votre appel et etablit un premier diagnostic telephonique gratuit.",
    },
    {
      number: "02",
      title: "Intervention rapide",
      description: "Un technicien equipe se deplace chez vous en moins de 30 minutes avec toutes les pieces necessaires dans son vehicule atelier.",
    },
    {
      number: "03",
      title: "Diagnostic et devis",
      description: "Sur place, le technicien etablit un diagnostic precis et vous communique un devis detaille avant toute intervention. Sans engagement.",
    },
    {
      number: "04",
      title: "Reparation garantie",
      description: "Intervention realisee avec des pieces d'origine. Garantie pieces et main-d'oeuvre sur toutes nos interventions.",
    },
  ];

  return (
    <section
      style={{
        padding: "120px 30px 60px",
        backgroundColor: "#F5F0E8",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          gap: 60,
        }}
        className="howitworks-layout"
      >
        {/* Left column */}
        <div style={{ flex: 1 }}>
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
            Notre Methode
          </div>

          <p
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: 17,
              fontWeight: 400,
              color: "#555555",
              lineHeight: 1.7,
              marginBottom: 40,
              maxWidth: 480,
            }}
          >
            Une intervention structuree et transparente, du premier appel a la
            remise en service de votre rideau metallique. Chaque etape est pensee
            pour votre tranquillite.
          </p>

          {/* Steps */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {steps.map((step) => (
              <div key={step.number} style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
                <div
                  style={{
                    fontFamily: "Urbanist, sans-serif",
                    fontSize: 36,
                    fontWeight: 700,
                    color: "#C9A84C",
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                >
                  {step.number}
                </div>
                <div>
                  <h3 style={{ fontFamily: "Urbanist, sans-serif", fontSize: 20, fontWeight: 600, color: "#1B4332", margin: "0 0 8px 0" }}>
                    {step.title}
                  </h3>
                  <p style={{ fontFamily: "Urbanist, sans-serif", fontSize: 15, fontWeight: 400, color: "#666666", lineHeight: 1.6, margin: 0 }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column - Testimonial */}
        <div style={{ flex: 1 }}>
          <h2
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: 40,
              fontWeight: 600,
              color: "#1B4332",
              lineHeight: 1.2,
              margin: "0 0 40px 0",
            }}
            className="howitworks-h2"
          >
            Nos clients temoignent de leur confiance
          </h2>

          <div style={{ backgroundColor: "#FFFFFF", borderRadius: 12, padding: 40 }}>
            <div style={{ width: "100%", height: 240, borderRadius: 12, marginBottom: 32, overflow: "hidden" }}>
              <img
                src="/images/gallery/realisation-rideau-metallique-lame-pleinela-cantoche-france.webp"
                alt="Realisation DRM sur restaurant La Cantoche"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <p
              style={{
                fontFamily: "Urbanist, sans-serif",
                fontSize: 17,
                fontWeight: 400,
                color: "#333333",
                lineHeight: 1.7,
                fontStyle: "italic",
                margin: "0 0 24px 0",
              }}
            >
              &laquo; Mon rideau metallique etait completement bloque un samedi soir. J&apos;ai appele DRM et un technicien est arrive en 25 minutes. Reparation impeccable, prix conforme au devis. Je recommande vivement. &raquo;
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  backgroundColor: "#C9A84C",
                  borderRadius: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "Urbanist, sans-serif",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#1B4332",
                }}
              >
                PD
              </div>
              <div>
                <div style={{ fontFamily: "Urbanist, sans-serif", fontSize: 16, fontWeight: 600, color: "#1B4332" }}>
                  Pierre Dumont
                </div>
                <div style={{ fontFamily: "Urbanist, sans-serif", fontSize: 14, fontWeight: 400, color: "#888888" }}>
                  Restaurateur, Paris 2e
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .howitworks-layout { flex-direction: column !important; gap: 40px !important; }
          .howitworks-h2 { font-size: 28px !important; }
        }
      `}</style>
    </section>
  );
}

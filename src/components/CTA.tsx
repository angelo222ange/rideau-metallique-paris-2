export default function CTA() {
  return (
    <section
      style={{
        padding: "120px 30px 100px",
        backgroundColor: "#1B4332",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(201,168,76,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(201,168,76,0.04) 0%, transparent 50%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 700,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "Urbanist, sans-serif",
            fontSize: 14,
            fontWeight: 600,
            color: "#C9A84C",
            textTransform: "uppercase",
            letterSpacing: "2px",
            marginBottom: 20,
          }}
        >
          Urgence 24h/24
        </div>

        <h2
          style={{
            fontFamily: "Urbanist, sans-serif",
            fontSize: 40,
            fontWeight: 600,
            color: "#FFFFFF",
            lineHeight: 1.2,
            margin: "0 0 24px 0",
          }}
          className="cta-h2"
        >
          Votre rideau metallique est en panne ? Appelez maintenant.
        </h2>

        <p
          style={{
            fontFamily: "Urbanist, sans-serif",
            fontSize: 17,
            fontWeight: 400,
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.7,
            marginBottom: 40,
          }}
        >
          Nos techniciens certifies interviennent en moins de 30 minutes dans tout
          le 2e arrondissement de Paris. Devis gratuit, sans engagement.
          Disponible 24h/24, 7j/7.
        </p>

        {/* CTA buttons */}
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="tel:+33972124141"
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: 18,
              fontWeight: 600,
              backgroundColor: "#C9A84C",
              color: "#1B4332",
              padding: "18px 32px",
              height: 58,
              borderRadius: 0,
              border: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              gap: 10,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B4332" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            09 72 12 41 41
          </a>
          <a
            href="/contact/"
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: 16,
              fontWeight: 600,
              backgroundColor: "transparent",
              color: "#FFFFFF",
              padding: "18px 28px",
              height: 58,
              borderRadius: 0,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            Demander un devis gratuit
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cta-h2 { font-size: 28px !important; }
        }
      `}</style>
    </section>
  );
}

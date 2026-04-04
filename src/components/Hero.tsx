export default function Hero() {
  const features = [
    "Techniciens certifies 25+ ans",
    "Intervention en 30 minutes",
    "Devis gratuit, sans engagement",
  ];

  return (
    <section
      style={{
        position: "relative",
        minHeight: 800,
        padding: "200px 30px 80px",
        backgroundColor: "#1B4332",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/images/gallery/hero-bg-technicien-drm.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(15,43,33,0.75)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: 500,
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: 72,
              fontWeight: 500,
              color: "#FFFFFF",
              lineHeight: 1.05,
              letterSpacing: "-2px",
              maxWidth: 900,
              margin: 0,
            }}
            className="hero-h1"
          >
            Depannage Rideau Metallique Paris 2e
          </h1>

          <p
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: 18,
              fontWeight: 400,
              color: "#FFFFFF",
              opacity: 0.8,
              marginTop: 24,
              maxWidth: 560,
              lineHeight: 1.6,
            }}
          >
            Intervention urgence 24h/24, 7j/7 sur tous types de rideaux metalliques,
            grilles et fermetures metalliques dans le 2e arrondissement de Paris.
          </p>

          {/* CTA Row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginTop: 40,
              flexWrap: "wrap",
            }}
          >
            <a
              href="tel:+33972124141"
              style={{
                fontFamily: "Urbanist, sans-serif",
                fontSize: 16,
                fontWeight: 600,
                backgroundColor: "#C9A84C",
                color: "#1B4332",
                padding: "18px 28px",
                borderRadius: 0,
                height: 55,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                gap: 8,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1B4332" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                borderRadius: 0,
                height: 55,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.4)",
              }}
            >
              Devis gratuit
            </a>
          </div>
        </div>

        {/* Feature pills */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap",
            marginTop: 60,
          }}
        >
          {features.map((feature) => (
            <div
              key={feature}
              style={{
                fontFamily: "Urbanist, sans-serif",
                fontSize: 14,
                fontWeight: 500,
                color: "#FFFFFF",
                backgroundColor: "rgba(201,168,76,0.15)",
                border: "1px solid rgba(201,168,76,0.3)",
                padding: "12px 20px",
                borderRadius: 50,
              }}
            >
              {feature}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-h1 { font-size: 36px !important; letter-spacing: -1px !important; }
        }
      `}</style>
    </section>
  );
}

"use client";

export default function Industries() {
  const stats = [
    { value: "5000+", label: "Interventions realisees" },
    { value: "25+", label: "Annees d'experience" },
    { value: "4.9/5", label: "Note Google" },
    { value: "30 min", label: "Delai d'intervention" },
  ];

  const marques = [
    { name: "Somfy", src: "/images/marques/somfy.webp" },
    { name: "Simu", src: "/images/marques/simu.webp" },
    { name: "ACM", src: "/images/marques/acm.webp" },
    { name: "Came", src: "/images/marques/came.webp" },
    { name: "Nice", src: "/images/marques/nice.webp" },
    { name: "FAAC", src: "/images/marques/faac.webp" },
    { name: "BFT", src: "/images/marques/bft.webp" },
    { name: "Sommer", src: "/images/marques/sommer.webp" },
  ];

  return (
    <section
      style={{
        padding: "100px 30px",
        backgroundColor: "#1B4332",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
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
          Confiance
        </div>

        <h2
          style={{
            fontFamily: "Urbanist, sans-serif",
            fontSize: 40,
            fontWeight: 600,
            color: "#FFFFFF",
            lineHeight: 1.2,
            maxWidth: 700,
            margin: "0 0 60px 0",
          }}
          className="industries-h2"
        >
          Des chiffres qui parlent d&apos;eux-memes
        </h2>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: 60,
            marginBottom: 80,
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            paddingBottom: 60,
            flexWrap: "wrap",
          }}
          className="stats-row"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: "Urbanist, sans-serif",
                  fontSize: 48,
                  fontWeight: 700,
                  color: "#C9A84C",
                  lineHeight: 1,
                  marginBottom: 12,
                }}
                className="stat-value"
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "Urbanist, sans-serif",
                  fontSize: 15,
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Marques logos */}
        <div
          style={{
            display: "flex",
            gap: 24,
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {marques.map((m) => (
            <div
              key={m.name}
              style={{
                width: 120,
                height: 48,
                backgroundColor: "rgba(255,255,255,0.07)",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <img
                src={m.src}
                alt={`Logo ${m.name} partenaire DRM Paris 2`}
                style={{ maxWidth: "80%", maxHeight: "70%", objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.6 }}
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    const span = document.createElement("span");
                    span.textContent = m.name;
                    span.style.cssText = "font-family:Urbanist,sans-serif;font-size:13px;font-weight:600;color:rgba(255,255,255,0.5)";
                    parent.appendChild(span);
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .industries-h2 { font-size: 28px !important; }
          .stats-row { gap: 32px !important; }
          .stat-value { font-size: 36px !important; }
        }
      `}</style>
    </section>
  );
}

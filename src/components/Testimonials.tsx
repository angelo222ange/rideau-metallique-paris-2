"use client";

import { colors } from "@/config/site";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Marc Dubois",
      initials: "MD",
      text: "Rideau metallique bloque a 22h un samedi, ils sont venus en moins de 25 minutes. Travail impeccable, tarif honnete. Je recommande vivement pour tout depannage urgent.",
      rating: 5,
    },
    {
      name: "Sophie Laurent",
      initials: "SL",
      text: "Excellent service pour la motorisation de notre rideau de boutique rue Montorgueil. Equipe professionnelle, propre et ponctuelle. Le rideau fonctionne parfaitement depuis.",
      rating: 5,
    },
    {
      name: "Philippe Martin",
      initials: "PM",
      text: "Intervention rapide pour un remplacement de lames endommagees sur notre commerce. Devis respecte, technicien competent. Tres satisfait du resultat final.",
      rating: 5,
    },
  ];

  return (
    <section
      style={{
        padding: "120px 30px 180px",
        backgroundColor: colors.primary,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
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
            Temoignages
          </span>
          <h2
            style={{
              fontSize: 48,
              fontWeight: 700,
              fontFamily: "Satoshi, system-ui, sans-serif",
              color: "#FFFFFF",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Ce que disent nos clients
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              style={{
                backgroundColor: "rgba(255,255,255,0.12)",
                borderRadius: 16,
                padding: 24,
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ display: "flex", gap: 2 }}>
                  <span style={{ color: "#4285F4", fontSize: 16, fontWeight: 700 }}>G</span>
                  <span style={{ color: "#EA4335", fontSize: 16, fontWeight: 700 }}>o</span>
                  <span style={{ color: "#FBBC05", fontSize: 16, fontWeight: 700 }}>o</span>
                  <span style={{ color: "#4285F4", fontSize: 16, fontWeight: 700 }}>g</span>
                  <span style={{ color: "#34A853", fontSize: 16, fontWeight: 700 }}>l</span>
                  <span style={{ color: "#EA4335", fontSize: 16, fontWeight: 700 }}>e</span>
                </div>
                <span
                  style={{
                    fontSize: 13,
                    color: "#4285F4",
                    fontFamily: "Satoshi, system-ui, sans-serif",
                  }}
                >
                  Avis Google
                </span>
              </div>

              <div style={{ display: "flex", gap: 4 }}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} style={{ color: colors.starColor, fontSize: 20 }}>
                    &#9733;
                  </span>
                ))}
              </div>

              <p
                style={{
                  fontSize: 15,
                  fontFamily: "Satoshi, system-ui, sans-serif",
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.7,
                  margin: 0,
                  flex: 1,
                }}
              >
                &ldquo;{t.text}&rdquo;
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    backgroundColor: colors.accent,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontSize: 16,
                      fontWeight: 700,
                      fontFamily: "Satoshi, system-ui, sans-serif",
                    }}
                  >
                    {t.initials}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    fontFamily: "Satoshi, system-ui, sans-serif",
                    color: "#FFFFFF",
                  }}
                >
                  {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

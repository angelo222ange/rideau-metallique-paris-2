"use client";

import { useState } from "react";

const reviews = [
  {
    name: "Marc Lefevre",
    initials: "ML",
    rating: 5,
    text: "Rideau metallique bloque un dimanche matin. DRM est intervenu en 20 minutes. Le technicien a diagnostique un ressort casse, l'a remplace sur place. Professionnel et efficace.",
    date: "Il y a 2 semaines",
  },
  {
    name: "Sophie Bernard",
    initials: "SB",
    rating: 5,
    text: "Installation complete d'un rideau metallique pour ma boutique rue Montmartre. Travail impeccable, equipe serieuse. Le rideau fonctionne parfaitement. Prix correct.",
    date: "Il y a 1 mois",
  },
  {
    name: "Laurent Petit",
    initials: "LP",
    rating: 5,
    text: "Motorisation de mon ancien rideau manuel. Le technicien a installe un moteur Somfy en 2 heures. Telecommande, boitier a cle, tout a ete fait proprement. Tres content.",
    date: "Il y a 3 semaines",
  },
  {
    name: "Isabelle Moreau",
    initials: "IM",
    rating: 5,
    text: "Contrat d'entretien annuel pour mes 3 locaux commerciaux. DRM passe 2 fois par an, tout est verifie et graisse. Aucune panne depuis 2 ans. Service au top.",
    date: "Il y a 2 mois",
  },
  {
    name: "Thomas Girard",
    initials: "TG",
    rating: 5,
    text: "Depannage en urgence a 22h, lame sortie du rail. Intervention rapide, le technicien avait les pieces sur lui. Rideau repare en 45 minutes. Merci DRM.",
    date: "Il y a 1 semaine",
  },
  {
    name: "Nathalie Rousseau",
    initials: "NR",
    rating: 5,
    text: "Remplacement de 5 lames abimees apres une tentative d'effraction. Devis clair, intervention rapide. Les nouvelles lames sont plus solides que les anciennes. Parfait.",
    date: "Il y a 3 semaines",
  },
];

export default function Reviews() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const visible = reviews.slice(page * perPage, page * perPage + perPage);

  return (
    <section
      style={{
        padding: "120px 30px 80px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 48,
            flexWrap: "wrap",
            gap: 20,
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
              Avis Clients
            </div>
            <h2
              style={{
                fontFamily: "Urbanist, sans-serif",
                fontSize: 40,
                fontWeight: 600,
                color: "#1B4332",
                lineHeight: 1.2,
                margin: 0,
              }}
              className="reviews-h2"
            >
              Ce que disent nos clients
            </h2>
          </div>

          {/* Google badge */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ display: "flex", gap: 2 }}>
              <span style={{ color: "#4285F4", fontSize: 22, fontWeight: 700, fontFamily: "Urbanist, sans-serif" }}>G</span>
              <span style={{ color: "#EA4335", fontSize: 22, fontWeight: 700, fontFamily: "Urbanist, sans-serif" }}>o</span>
              <span style={{ color: "#FBBC05", fontSize: 22, fontWeight: 700, fontFamily: "Urbanist, sans-serif" }}>o</span>
              <span style={{ color: "#4285F4", fontSize: 22, fontWeight: 700, fontFamily: "Urbanist, sans-serif" }}>g</span>
              <span style={{ color: "#34A853", fontSize: 22, fontWeight: 700, fontFamily: "Urbanist, sans-serif" }}>l</span>
              <span style={{ color: "#EA4335", fontSize: 22, fontWeight: 700, fontFamily: "Urbanist, sans-serif" }}>e</span>
            </div>
            <span style={{ fontFamily: "Urbanist, sans-serif", fontSize: 14, fontWeight: 500, color: "#555" }}>
              4.9/5 — Avis verifies
            </span>
          </div>
        </div>

        {/* Review cards */}
        <div style={{ display: "flex", gap: 20 }} className="reviews-grid">
          {visible.map((review) => (
            <div
              key={review.name}
              style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
                border: "1px solid #E5E5E5",
                borderRadius: 12,
                padding: 28,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    backgroundColor: "#C9A84C",
                    borderRadius: 22,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "Urbanist, sans-serif",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#1B4332",
                  }}
                >
                  {review.initials}
                </div>
                <div>
                  <div style={{ fontFamily: "Urbanist, sans-serif", fontSize: 15, fontWeight: 600, color: "#1B4332" }}>
                    {review.name}
                  </div>
                  <div style={{ fontFamily: "Urbanist, sans-serif", fontSize: 13, fontWeight: 400, color: "#999999" }}>
                    {review.date}
                  </div>
                </div>
              </div>

              {/* Stars */}
              <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p style={{ fontFamily: "Urbanist, sans-serif", fontSize: 14, fontWeight: 400, color: "#555555", lineHeight: 1.7, margin: 0 }}>
                {review.text}
              </p>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        {reviews.length > perPage && (
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 32 }}>
            {Array.from({ length: Math.ceil(reviews.length / perPage) }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                style={{
                  width: page === i ? 32 : 10,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: page === i ? "#C9A84C" : "#E5E5E5",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .reviews-grid { flex-direction: column !important; }
          .reviews-h2 { font-size: 28px !important; }
        }
      `}</style>
    </section>
  );
}

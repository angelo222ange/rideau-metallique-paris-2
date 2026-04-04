"use client";

import { useState } from "react";

const questions = [
  {
    q: "Qui appeler pour un depannage rideau metallique a Paris 2 ?",
    a: "Appelez DRM Paris 2 au 09 72 12 41 41. Nos techniciens certifies interviennent 24h/24, 7j/7 dans tout le 2e arrondissement, du quartier du Sentier a la Bourse. Intervention en moins de 30 minutes, devis gratuit communique avant toute reparation.",
  },
  {
    q: "Quel est le delai d'intervention pour un rideau metallique bloque ?",
    a: "Notre delai moyen d'intervention est de 30 minutes a Paris 2e. Nos techniciens sont equipes de vehicules ateliers avec les pieces les plus courantes (lames, moteurs, ressorts, serrures). L'intervention peut etre realisee immediatement dans la majorite des cas.",
  },
  {
    q: "Combien coute un depannage de rideau metallique a Paris ?",
    a: "Le cout depend du type de panne : deblocage simple a partir de 149 euros, reparation moteur de 390 a 800 euros, remplacement de lames de 189 a 500 euros. Un devis detaille est systematiquement communique avant intervention. Pas de surprise sur la facture.",
  },
  {
    q: "Quelles marques de moteurs installez-vous ?",
    a: "Nous installons et reparons toutes les grandes marques : Somfy, Simu, ACM, Came, Nice, FAAC, BFT et Sommer. Moteurs tubulaires pour les commerces standard, moteurs centraux ACM pour les rideaux industriels lourds. Garantie constructeur sur chaque installation.",
  },
  {
    q: "Intervenez-vous la nuit et le week-end ?",
    a: "Oui, DRM Paris 2 intervient 24 heures sur 24, 7 jours sur 7, y compris les nuits, week-ends et jours feries. Les urgences nocturnes sont traitees avec le meme professionnalisme et les memes tarifs transparents qu'en journee.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      style={{
        padding: "120px 30px 80px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          gap: 60,
        }}
        className="faq-layout"
      >
        {/* Left column */}
        <div style={{ flex: "0 0 400px" }} className="faq-left">
          <h2
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: 40,
              fontWeight: 600,
              color: "#1B4332",
              lineHeight: 1.2,
              margin: "0 0 32px 0",
            }}
            className="faq-h2"
          >
            Questions frequentes sur nos services
          </h2>

          <div style={{ width: "100%", height: 280, borderRadius: 12, overflow: "hidden" }}>
            <img
              src="/images/gallery/depannage-rideau-metallique-drm-services.webp"
              alt="Technicien DRM services depannage rideau metallique Paris 2"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Right column - Accordion */}
        <div style={{ flex: 1 }}>
          {questions.map((item, index) => (
            <div key={index} style={{ borderBottom: "1px solid #E5E5E5" }}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "24px 0",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span style={{ fontFamily: "Urbanist, sans-serif", fontSize: 17, fontWeight: 600, color: "#1B4332", paddingRight: 16 }}>
                  {item.q}
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  style={{
                    flexShrink: 0,
                    transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="#1B4332" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {openIndex === index && (
                <div style={{ paddingBottom: 24 }}>
                  <p style={{ fontFamily: "Urbanist, sans-serif", fontSize: 15, fontWeight: 400, color: "#666666", lineHeight: 1.7, margin: 0 }}>
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .faq-layout { flex-direction: column !important; gap: 32px !important; }
          .faq-left { flex: none !important; }
          .faq-h2 { font-size: 28px !important; }
        }
      `}</style>
    </section>
  );
}

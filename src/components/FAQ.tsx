"use client";

import { useState } from "react";
import { siteConfig, colors } from "@/config/site";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Quel est le delai d'intervention pour un depannage urgent ?",
      answer:
        `Nos techniciens interviennent en moins de ${siteConfig.delai} minutes dans le 2e arrondissement de Paris et les arrondissements limitrophes. Service disponible 24h/24, 7j/7.`,
    },
    {
      question: "Combien coute un depannage de rideau metallique ?",
      answer:
        "Le cout varie selon le type de panne. Un deblocage simple demarre a 149 euros. Nous etablissons systematiquement un devis gratuit sur place avant toute intervention. Aucun frais cache.",
    },
    {
      question: "Quelles marques de rideaux metalliques depannez-vous ?",
      answer:
        "Nous intervenons sur toutes les marques : Somfy, Simu, ACM, Came, Nice, FAAC, BFT, Sommer. Nos techniciens sont formes et certifies sur ces equipements.",
    },
    {
      question: "Proposez-vous des contrats d'entretien ?",
      answer:
        "Oui, nous proposons des contrats d'entretien annuel a partir de 250 euros. La maintenance preventive evite 80% des pannes et prolonge la duree de vie de votre rideau metallique.",
    },
    {
      question: "Intervenez-vous en dehors du 2e arrondissement ?",
      answer:
        "Absolument. Nous couvrons l'ensemble de Paris intra-muros ainsi que les communes proches : Boulogne-Billancourt, Levallois-Perret, Neuilly-sur-Seine et plus encore.",
    },
  ];

  return (
    <section
      style={{
        padding: "120px 30px 200px",
        backgroundColor: colors.lightBg,
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2
            style={{
              fontSize: 48,
              fontWeight: 700,
              fontFamily: "Satoshi, system-ui, sans-serif",
              color: colors.primary,
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Questions frequentes
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 24px",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    fontFamily: "Satoshi, system-ui, sans-serif",
                    color: colors.primary,
                  }}
                >
                  {faq.question}
                </span>
                <span
                  style={{
                    fontSize: 24,
                    color: colors.accent,
                    fontWeight: 700,
                    transform:
                      openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                    flexShrink: 0,
                    marginLeft: 16,
                  }}
                >
                  &#8964;
                </span>
              </button>
              {openIndex === i && (
                <div style={{ padding: "0 24px 20px" }}>
                  <p
                    style={{
                      fontSize: 16,
                      fontFamily: "Satoshi, system-ui, sans-serif",
                      color: colors.textMuted,
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

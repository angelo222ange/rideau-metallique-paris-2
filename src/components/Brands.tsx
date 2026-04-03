"use client";

import { colors, marques } from "@/config/site";

export default function Brands() {
  return (
    <section
      style={{
        padding: "60px 30px",
        backgroundColor: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: colors.accent,
              fontFamily: "Satoshi, system-ui, sans-serif",
              display: "block",
              marginBottom: 8,
            }}
          >
            Marques partenaires
          </span>
          <h2
            style={{
              fontSize: 28,
              fontWeight: 700,
              fontFamily: "Satoshi, system-ui, sans-serif",
              color: colors.primary,
              margin: 0,
            }}
          >
            Nous intervenons sur toutes les marques
          </h2>
        </div>

        {/* Marquee animation with CSS */}
        <div
          style={{
            display: "flex",
            gap: 48,
            animation: "marquee 20s linear infinite",
            width: "max-content",
          }}
        >
          {[...marques, ...marques, ...marques].map((marque, i) => (
            <div
              key={`${marque}-${i}`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px 32px",
                borderRadius: 12,
                backgroundColor: colors.lightBg,
                minWidth: 140,
              }}
            >
              <span
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: colors.primary,
                  fontFamily: "Satoshi, system-ui, sans-serif",
                  opacity: 0.7,
                }}
              >
                {marque}
              </span>
            </div>
          ))}
        </div>

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
        `}</style>
      </div>
    </section>
  );
}

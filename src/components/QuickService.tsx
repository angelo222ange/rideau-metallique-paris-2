"use client";

import { siteConfig, colors } from "@/config/site";

export default function QuickService() {
  return (
    <section
      style={{
        padding: "80px 30px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 60,
        }}
      >
        <div style={{ flex: 1 }}>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 700,
              fontFamily: "Satoshi, system-ui, sans-serif",
              color: colors.primary,
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            Urgence rideau metallique ?
            <br />
            Appelez le {siteConfig.phone}
          </h2>
        </div>

        <div style={{ flex: 1 }}>
          <div
            style={{
              backgroundColor: colors.lightBg,
              borderRadius: 16,
              padding: 32,
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: 18,
                fontFamily: "Satoshi, system-ui, sans-serif",
                color: colors.primary,
                fontWeight: 600,
                margin: "0 0 20px 0",
              }}
            >
              Intervention en moins de {siteConfig.delai} minutes
            </p>
            <a
              href={siteConfig.phoneLink}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: 51,
                padding: "12px 32px",
                borderRadius: 58,
                backgroundColor: colors.accent,
                color: "#FFFFFF",
                fontSize: 16,
                fontWeight: 700,
                fontFamily: "Satoshi, system-ui, sans-serif",
                textDecoration: "none",
                gap: 8,
              }}
            >
              <span style={{ fontSize: 18 }}>&#9742;</span>
              Appeler maintenant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

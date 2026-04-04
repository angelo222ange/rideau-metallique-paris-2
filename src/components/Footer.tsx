"use client";

import Link from "next/link";

const serviceLinks = [
  { name: "Depannage", href: "/depannage-rideau-metallique-paris-2/" },
  { name: "Installation", href: "/installation-rideau-metallique-paris-2/" },
  { name: "Reparation", href: "/reparation-rideau-metallique-paris-2/" },
  { name: "Motorisation", href: "/motorisation-rideau-metallique-paris-2/" },
  { name: "Deblocage", href: "/deblocage-rideau-metallique-paris-2/" },
  { name: "Entretien", href: "/entretien-rideau-metallique-paris-2/" },
  { name: "Fabrication", href: "/fabrication-rideau-metallique-paris-2/" },
];

const quickLinks = [
  { name: "Accueil", href: "/" },
  { name: "Zones", href: "/zones/" },
  { name: "Blog", href: "/blog/" },
  { name: "Contact", href: "/contact/" },
  { name: "Plan du site", href: "/plan-du-site/" },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0F2B21",
        padding: "80px 30px 30px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* 4 column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 0.8fr 0.8fr 1.1fr",
            gap: 40,
            marginBottom: 60,
          }}
          className="footer-grid"
        >
          {/* Col 1 - Company */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  backgroundColor: "#C9A84C",
                  borderRadius: 6,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "Urbanist, sans-serif",
                  fontSize: 14,
                  fontWeight: 800,
                  color: "#1B4332",
                }}
              >
                D
              </div>
              <span style={{ fontFamily: "Urbanist, sans-serif", fontSize: 22, fontWeight: 700, color: "#FFFFFF" }}>
                DRM <span style={{ fontWeight: 400, opacity: 0.7 }}>Paris 2</span>
              </span>
            </div>

            <p style={{ fontFamily: "Urbanist, sans-serif", fontSize: 14, fontWeight: 400, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: 24 }}>
              Impasse des Peintres, 75002 Paris
              <br />
              Depannage rideau metallique 24h/24, 7j/7
            </p>

            <div style={{ fontFamily: "Urbanist, sans-serif", fontSize: 14, fontWeight: 400, color: "rgba(255,255,255,0.5)", lineHeight: 2 }}>
              <div>
                <a href="tel:+33972124141" style={{ color: "#C9A84C", textDecoration: "none", fontWeight: 600 }}>
                  09 72 12 41 41
                </a>
              </div>
              <div>contact@depannagerideau-metallique-paris-2.fr</div>
            </div>
          </div>

          {/* Col 2 - Services */}
          <div>
            <h4 style={{ fontFamily: "Urbanist, sans-serif", fontSize: 16, fontWeight: 600, color: "#FFFFFF", marginBottom: 24, marginTop: 0 }}>
              Nos Services
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "Urbanist, sans-serif",
                    fontSize: 14,
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3 - Liens rapides */}
          <div>
            <h4 style={{ fontFamily: "Urbanist, sans-serif", fontSize: 16, fontWeight: 600, color: "#FFFFFF", marginBottom: 24, marginTop: 0 }}>
              Liens Rapides
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "Urbanist, sans-serif",
                    fontSize: 14,
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 4 - Urgence */}
          <div>
            <h4 style={{ fontFamily: "Urbanist, sans-serif", fontSize: 16, fontWeight: 600, color: "#FFFFFF", marginBottom: 24, marginTop: 0 }}>
              Urgence 24h/24
            </h4>
            <p style={{ fontFamily: "Urbanist, sans-serif", fontSize: 14, fontWeight: 400, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: 16 }}>
              Rideau metallique bloque ? Nos techniciens interviennent en moins de 30 minutes dans tout Paris 2e et alentours.
            </p>
            <a
              href="tel:+33972124141"
              style={{
                fontFamily: "Urbanist, sans-serif",
                fontSize: 16,
                fontWeight: 600,
                backgroundColor: "#C9A84C",
                color: "#1B4332",
                padding: "14px 24px",
                height: 48,
                borderRadius: 0,
                border: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                gap: 8,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1B4332" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              Appeler maintenant
            </a>
          </div>
        </div>

        {/* Huge decorative text */}
        <div
          style={{
            fontFamily: "Urbanist, sans-serif",
            fontSize: 200,
            fontWeight: 800,
            color: "rgba(201,168,76,0.04)",
            lineHeight: 0.85,
            letterSpacing: "-8px",
            textAlign: "center",
            overflow: "hidden",
            marginBottom: 40,
            userSelect: "none",
          }}
          className="footer-bigtext"
        >
          DRM Paris
        </div>

        {/* Divider */}
        <div style={{ height: 1, backgroundColor: "rgba(255,255,255,0.1)", marginBottom: 24 }} />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div style={{ fontFamily: "Urbanist, sans-serif", fontSize: 13, fontWeight: 400, color: "rgba(255,255,255,0.4)" }}>
            2026 DRM Paris 2. Tous droits reserves.
          </div>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {[
              { name: "Mentions legales", href: "/mentions-legales/" },
              { name: "Confidentialite", href: "/confidentialite/" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "Urbanist, sans-serif",
                  fontSize: 13,
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.4)",
                  textDecoration: "none",
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .footer-bigtext { font-size: 80px !important; letter-spacing: -3px !important; }
        }
      `}</style>
    </footer>
  );
}

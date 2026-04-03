"use client";

import Link from "next/link";
import { siteConfig, services, colors } from "@/config/site";

export default function Footer() {
  const citySlug = siteConfig.city.toLowerCase().replace(/\s+/g, "-");

  return (
    <footer
      style={{
        backgroundColor: colors.primary,
        padding: "80px 30px 40px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* Top Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
            gap: 40,
            marginBottom: 60,
          }}
        >
          {/* Col 1 - Logo & Description */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 36,
                  borderRadius: 8,
                  backgroundColor: colors.accent,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    color: "#FFFFFF",
                    fontSize: 13,
                    fontWeight: 700,
                    fontFamily: "Satoshi, system-ui, sans-serif",
                  }}
                >
                  DRM
                </span>
              </div>
              <span
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  fontFamily: "Satoshi, system-ui, sans-serif",
                }}
              >
                DRM {siteConfig.city}
              </span>
            </div>
            <p
              style={{
                fontSize: 15,
                fontFamily: "Satoshi, system-ui, sans-serif",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.7,
                margin: "0 0 16px 0",
                maxWidth: 300,
              }}
            >
              {siteConfig.fullName} — {siteConfig.experience} ans d&apos;experience.
              Intervention urgente 24h/24, 7j/7 dans tout le {siteConfig.departmentCode}.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <a
                href={siteConfig.phoneLink}
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: colors.accent,
                  textDecoration: "none",
                  fontFamily: "Satoshi, system-ui, sans-serif",
                }}
              >
                {siteConfig.phone}
              </a>
              <span
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.5)",
                  fontFamily: "Satoshi, system-ui, sans-serif",
                }}
              >
                {siteConfig.address}
              </span>
            </div>
          </div>

          {/* Col 2 - Liens rapides */}
          <div>
            <h4
              style={{
                fontSize: 18,
                fontWeight: 700,
                fontFamily: "Satoshi, system-ui, sans-serif",
                color: "#FFFFFF",
                margin: "0 0 20px 0",
              }}
            >
              Liens rapides
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {[
                { label: "Accueil", href: "/" },
                { label: "Tarifs", href: "/tarifs/" },
                { label: "Zones d'intervention", href: "/zones/" },
                { label: "Blog", href: "/blog/" },
                { label: "Contact", href: "/contact/" },
                { label: "Plan du site", href: "/plan-du-site/" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{
                    fontSize: 15,
                    fontFamily: "Satoshi, system-ui, sans-serif",
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3 - Services */}
          <div>
            <h4
              style={{
                fontSize: 18,
                fontWeight: 700,
                fontFamily: "Satoshi, system-ui, sans-serif",
                color: "#FFFFFF",
                margin: "0 0 20px 0",
              }}
            >
              Nos services
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/${service.slug}-${citySlug}/`}
                  style={{
                    fontSize: 15,
                    fontFamily: "Satoshi, system-ui, sans-serif",
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                  }}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 4 - Horaires */}
          <div>
            <h4
              style={{
                fontSize: 18,
                fontWeight: 700,
                fontFamily: "Satoshi, system-ui, sans-serif",
                color: "#FFFFFF",
                margin: "0 0 20px 0",
              }}
            >
              Horaires
            </h4>
            <p
              style={{
                fontSize: 15,
                fontFamily: "Satoshi, system-ui, sans-serif",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.7,
                margin: "0 0 20px 0",
              }}
            >
              Disponible {siteConfig.openingHours}
              <br />
              Week-ends et jours feries inclus
            </p>
            <a
              href={siteConfig.phoneLink}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: 48,
                padding: "10px 24px",
                borderRadius: 58,
                backgroundColor: colors.accent,
                color: "#FFFFFF",
                fontSize: 15,
                fontWeight: 700,
                textDecoration: "none",
                fontFamily: "Satoshi, system-ui, sans-serif",
              }}
            >
              Appeler maintenant
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            backgroundColor: "rgba(255,255,255,0.1)",
            marginBottom: 30,
          }}
        />

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontSize: 14,
              fontFamily: "Satoshi, system-ui, sans-serif",
              color: "rgba(255,255,255,0.4)",
              margin: 0,
            }}
          >
            &copy; 2026 {siteConfig.fullName}. Tous droits reserves.
          </p>
          <div style={{ display: "flex", gap: 16 }}>
            <Link
              href="/mentions-legales/"
              style={{
                fontSize: 13,
                fontFamily: "Satoshi, system-ui, sans-serif",
                color: "rgba(255,255,255,0.4)",
                textDecoration: "none",
              }}
            >
              Mentions legales
            </Link>
            <Link
              href="/confidentialite/"
              style={{
                fontSize: 13,
                fontFamily: "Satoshi, system-ui, sans-serif",
                color: "rgba(255,255,255,0.4)",
                textDecoration: "none",
              }}
            >
              Confidentialite
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

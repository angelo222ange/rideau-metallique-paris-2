"use client";

import { useState } from "react";
import { siteConfig, colors } from "@/config/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: "",
    telephone: "",
    email: "",
    prestation: "devis",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch(process.env.NEXT_PUBLIC_WEBHOOK_URL || "https://lioai.app.n8n.cloud/webhook/drm-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: `${siteConfig.domain}-contact-form`,
          brand: `DRM ${siteConfig.city}`,
          city: siteConfig.city,
          sitePhone: siteConfig.phone,
          submittedAt: new Date().toISOString(),
        }),
      });
      setSent(true);
    } catch {
      setSent(true);
    }
  };

  return (
    <>
      <Header />
      <main>
        <section
          style={{
            padding: "180px 30px 80px",
            backgroundColor: colors.primary,
          }}
        >
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <h1
              style={{
                fontSize: 48,
                fontWeight: 700,
                fontFamily: "Satoshi, system-ui, sans-serif",
                color: "#FFFFFF",
                margin: "0 0 16px 0",
              }}
            >
              Contactez DRM {siteConfig.city}
            </h1>
            <p
              style={{
                fontSize: 18,
                fontFamily: "Satoshi, system-ui, sans-serif",
                color: "rgba(255,255,255,0.7)",
                margin: 0,
              }}
            >
              Besoin d&apos;un depannage urgent ? Appelez le{" "}
              <a
                href={siteConfig.phoneLink}
                style={{ color: colors.accent, textDecoration: "none", fontWeight: 700 }}
              >
                {siteConfig.phone}
              </a>
            </p>
          </div>
        </section>

        <section style={{ padding: "80px 30px", backgroundColor: "#FFFFFF" }}>
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              display: "flex",
              gap: 60,
            }}
          >
            {/* Form */}
            <div style={{ flex: 1 }}>
              {sent ? (
                <div
                  style={{
                    backgroundColor: colors.lightBg,
                    borderRadius: 16,
                    padding: 48,
                    textAlign: "center",
                  }}
                >
                  <h2
                    style={{
                      fontSize: 28,
                      fontWeight: 700,
                      color: colors.primary,
                      fontFamily: "Satoshi, system-ui, sans-serif",
                      margin: "0 0 16px 0",
                    }}
                  >
                    Message envoye
                  </h2>
                  <p style={{ fontSize: 16, color: colors.textMuted, fontFamily: "Satoshi, system-ui, sans-serif" }}>
                    Nous vous recontacterons dans les plus brefs delais.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    backgroundColor: colors.lightBg,
                    borderRadius: 16,
                    padding: 32,
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                  }}
                >
                  <input
                    type="text"
                    placeholder="Votre nom"
                    required
                    value={formData.nom}
                    onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                    style={{
                      height: 52,
                      padding: "0 20px",
                      borderRadius: 12,
                      border: "1px solid #E5E7EB",
                      backgroundColor: "#FFFFFF",
                      fontSize: 16,
                      fontFamily: "Satoshi, system-ui, sans-serif",
                      color: colors.primary,
                      outline: "none",
                    }}
                  />
                  <input
                    type="tel"
                    placeholder="Votre telephone"
                    required
                    value={formData.telephone}
                    onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                    style={{
                      height: 52,
                      padding: "0 20px",
                      borderRadius: 12,
                      border: "1px solid #E5E7EB",
                      backgroundColor: "#FFFFFF",
                      fontSize: 16,
                      fontFamily: "Satoshi, system-ui, sans-serif",
                      color: colors.primary,
                      outline: "none",
                    }}
                  />
                  <input
                    type="email"
                    placeholder="Votre email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      height: 52,
                      padding: "0 20px",
                      borderRadius: 12,
                      border: "1px solid #E5E7EB",
                      backgroundColor: "#FFFFFF",
                      fontSize: 16,
                      fontFamily: "Satoshi, system-ui, sans-serif",
                      color: colors.primary,
                      outline: "none",
                    }}
                  />
                  <textarea
                    placeholder="Decrivez votre besoin"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      padding: "16px 20px",
                      borderRadius: 12,
                      border: "1px solid #E5E7EB",
                      backgroundColor: "#FFFFFF",
                      fontSize: 16,
                      fontFamily: "Satoshi, system-ui, sans-serif",
                      color: colors.primary,
                      outline: "none",
                      resize: "vertical",
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      height: 51,
                      borderRadius: 58,
                      backgroundColor: colors.accent,
                      color: "#FFFFFF",
                      fontSize: 16,
                      fontWeight: 700,
                      fontFamily: "Satoshi, system-ui, sans-serif",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Envoyer ma demande
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div style={{ flex: 1 }}>
              <h2
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  fontFamily: "Satoshi, system-ui, sans-serif",
                  color: colors.primary,
                  margin: "0 0 32px 0",
                }}
              >
                Nos coordonnees
              </h2>
              {[
                { label: "Telephone", value: siteConfig.phone, href: siteConfig.phoneLink },
                { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                { label: "Adresse", value: siteConfig.address, href: undefined },
                { label: "Horaires", value: siteConfig.openingHours, href: undefined },
              ].map((item) => (
                <div key={item.label} style={{ marginBottom: 24 }}>
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: colors.accent,
                      fontFamily: "Satoshi, system-ui, sans-serif",
                      display: "block",
                      marginBottom: 4,
                    }}
                  >
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      style={{
                        fontSize: 18,
                        fontWeight: 600,
                        color: colors.primary,
                        fontFamily: "Satoshi, system-ui, sans-serif",
                        textDecoration: "none",
                      }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span
                      style={{
                        fontSize: 18,
                        fontWeight: 600,
                        color: colors.primary,
                        fontFamily: "Satoshi, system-ui, sans-serif",
                      }}
                    >
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

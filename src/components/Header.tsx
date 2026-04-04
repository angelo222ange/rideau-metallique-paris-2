"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const services = [
  { name: "Depannage", slug: "depannage-rideau-metallique-paris-2" },
  { name: "Installation", slug: "installation-rideau-metallique-paris-2" },
  { name: "Reparation", slug: "reparation-rideau-metallique-paris-2" },
  { name: "Motorisation", slug: "motorisation-rideau-metallique-paris-2" },
  { name: "Deblocage", slug: "deblocage-rideau-metallique-paris-2" },
  { name: "Entretien", slug: "entretien-rideau-metallique-paris-2" },
  { name: "Fabrication", slug: "fabrication-rideau-metallique-paris-2" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: scrolled ? "rgba(15,43,33,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          transition: "background-color 0.3s ease",
          padding: "0 30px",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 80,
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <img
              src="/images/logos/favicon.png"
              alt="DRM Paris 2"
              width={32}
              height={32}
              style={{ borderRadius: 6 }}
            />
            <span
              style={{
                fontFamily: "Urbanist, sans-serif",
                fontSize: 22,
                fontWeight: 700,
                color: "#FFFFFF",
                letterSpacing: "-0.5px",
              }}
            >
              DRM <span style={{ fontWeight: 400, opacity: 0.7 }}>Paris 2</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: 28,
            }}
            className="desktop-nav"
          >
            <Link
              href="/"
              style={{
                fontFamily: "Urbanist, sans-serif",
                fontSize: 15,
                fontWeight: 500,
                color: "#C9A84C",
                textDecoration: "none",
              }}
            >
              Accueil
            </Link>

            {/* Services dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                style={{
                  fontFamily: "Urbanist, sans-serif",
                  fontSize: 15,
                  fontWeight: 500,
                  color: "#C9A84C",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  padding: 0,
                }}
              >
                Services
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {servicesOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: -16,
                    paddingTop: 8,
                    zIndex: 1001,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "rgba(15,43,33,0.98)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(201,168,76,0.2)",
                      borderRadius: 12,
                      padding: "8px 0",
                      minWidth: 280,
                      boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                    }}
                  >
                    {services.map((svc) => (
                      <Link
                        key={svc.slug}
                        href={`/${svc.slug}/`}
                        style={{
                          display: "block",
                          fontFamily: "Urbanist, sans-serif",
                          fontSize: 14,
                          fontWeight: 500,
                          color: "rgba(255,255,255,0.8)",
                          textDecoration: "none",
                          padding: "10px 20px",
                          transition: "background-color 0.15s, color 0.15s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "rgba(201,168,76,0.1)";
                          e.currentTarget.style.color = "#C9A84C";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.color = "rgba(255,255,255,0.8)";
                        }}
                      >
                        {svc.name} rideau metallique
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/zones/" style={{ fontFamily: "Urbanist, sans-serif", fontSize: 15, fontWeight: 500, color: "#C9A84C", textDecoration: "none" }}>
              Zones
            </Link>
            <Link href="/blog/" style={{ fontFamily: "Urbanist, sans-serif", fontSize: 15, fontWeight: 500, color: "#C9A84C", textDecoration: "none" }}>
              Blog
            </Link>
            <Link href="/contact/" style={{ fontFamily: "Urbanist, sans-serif", fontSize: 15, fontWeight: 500, color: "#C9A84C", textDecoration: "none" }}>
              Contact
            </Link>
          </nav>

          {/* CTA Phone */}
          <a
            href="tel:+33972124141"
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: 15,
              fontWeight: 600,
              backgroundColor: "#C9A84C",
              color: "#1B4332",
              padding: "14px 20px",
              borderRadius: 0,
              height: 48,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              gap: 8,
            }}
            className="desktop-cta"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1B4332" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            09 72 12 41 41
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
            }}
            className="mobile-burger"
            aria-label="Menu"
          >
            <div style={{ width: 24, height: 2, backgroundColor: "#C9A84C", marginBottom: 6, transition: "all 0.3s", transform: mobileOpen ? "rotate(45deg) translateY(8px)" : "none" }} />
            <div style={{ width: 24, height: 2, backgroundColor: "#C9A84C", marginBottom: 6, opacity: mobileOpen ? 0 : 1, transition: "opacity 0.3s" }} />
            <div style={{ width: 24, height: 2, backgroundColor: "#C9A84C", transition: "all 0.3s", transform: mobileOpen ? "rotate(-45deg) translateY(-8px)" : "none" }} />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            top: 80,
            zIndex: 999,
            backgroundColor: "rgba(15,43,33,0.98)",
            backdropFilter: "blur(12px)",
            padding: "24px 30px",
            overflowY: "auto",
          }}
        >
          <nav style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <Link href="/" onClick={() => setMobileOpen(false)} style={{ fontFamily: "Urbanist, sans-serif", fontSize: 18, fontWeight: 500, color: "#FFFFFF", textDecoration: "none", padding: "16px 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              Accueil
            </Link>

            <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ fontFamily: "Urbanist, sans-serif", fontSize: 18, fontWeight: 500, color: "#C9A84C", padding: "16px 0" }}>
                Services
              </div>
              {services.map((svc) => (
                <Link key={svc.slug} href={`/${svc.slug}/`} onClick={() => setMobileOpen(false)} style={{ display: "block", fontFamily: "Urbanist, sans-serif", fontSize: 15, fontWeight: 400, color: "rgba(255,255,255,0.7)", textDecoration: "none", padding: "10px 0 10px 16px" }}>
                  {svc.name} rideau metallique
                </Link>
              ))}
            </div>

            <Link href="/zones/" onClick={() => setMobileOpen(false)} style={{ fontFamily: "Urbanist, sans-serif", fontSize: 18, fontWeight: 500, color: "#FFFFFF", textDecoration: "none", padding: "16px 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              Zones
            </Link>
            <Link href="/blog/" onClick={() => setMobileOpen(false)} style={{ fontFamily: "Urbanist, sans-serif", fontSize: 18, fontWeight: 500, color: "#FFFFFF", textDecoration: "none", padding: "16px 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              Blog
            </Link>
            <Link href="/contact/" onClick={() => setMobileOpen(false)} style={{ fontFamily: "Urbanist, sans-serif", fontSize: 18, fontWeight: 500, color: "#FFFFFF", textDecoration: "none", padding: "16px 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              Contact
            </Link>

            <a
              href="tel:+33972124141"
              style={{
                fontFamily: "Urbanist, sans-serif",
                fontSize: 18,
                fontWeight: 600,
                backgroundColor: "#C9A84C",
                color: "#1B4332",
                padding: "16px 24px",
                borderRadius: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                marginTop: 24,
                gap: 8,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1B4332" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              09 72 12 41 41
            </a>
          </nav>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-burger { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-burger { display: none !important; }
        }
      `}</style>
    </>
  );
}

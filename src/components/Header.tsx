"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig, services, colors } from "@/config/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const citySlug = siteConfig.city.toLowerCase().replace(/\s+/g, "-");

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? "#FFFFFF" : "transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
        transition: "all 0.3s ease",
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
                letterSpacing: -0.5,
              }}
            >
              DRM
            </span>
          </div>
          <span
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: scrolled ? colors.primary : "#FFFFFF",
              fontFamily: "Satoshi, system-ui, sans-serif",
              transition: "color 0.3s ease",
            }}
          >
            DRM {siteConfig.city}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <Link
            href="/"
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: scrolled ? colors.primary : "#FFFFFF",
              textDecoration: "none",
              fontFamily: "Satoshi, system-ui, sans-serif",
              transition: "color 0.3s ease",
            }}
          >
            Accueil
          </Link>

          {/* Services Dropdown */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <span
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: scrolled ? colors.primary : "#FFFFFF",
                fontFamily: "Satoshi, system-ui, sans-serif",
                cursor: "pointer",
                transition: "color 0.3s ease",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              Services
              <span style={{ fontSize: 10, marginTop: 2 }}>&#9660;</span>
            </span>
            {servicesOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  paddingTop: 12,
                  zIndex: 100,
                }}
              >
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: 12,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                    padding: "12px 0",
                    minWidth: 320,
                  }}
                >
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      href={`/${service.slug}-${citySlug}/`}
                      style={{
                        display: "block",
                        padding: "10px 20px",
                        fontSize: 14,
                        fontWeight: 600,
                        color: colors.primary,
                        textDecoration: "none",
                        fontFamily: "Satoshi, system-ui, sans-serif",
                      }}
                    >
                      {service.name} rideau metallique
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/tarifs/"
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: scrolled ? colors.primary : "#FFFFFF",
              textDecoration: "none",
              fontFamily: "Satoshi, system-ui, sans-serif",
              transition: "color 0.3s ease",
            }}
          >
            Tarifs
          </Link>
          <Link
            href="/zones/"
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: scrolled ? colors.primary : "#FFFFFF",
              textDecoration: "none",
              fontFamily: "Satoshi, system-ui, sans-serif",
              transition: "color 0.3s ease",
            }}
          >
            Zones
          </Link>
          <Link
            href="/blog/"
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: scrolled ? colors.primary : "#FFFFFF",
              textDecoration: "none",
              fontFamily: "Satoshi, system-ui, sans-serif",
              transition: "color 0.3s ease",
            }}
          >
            Blog
          </Link>
          <Link
            href="/contact/"
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: scrolled ? colors.primary : "#FFFFFF",
              textDecoration: "none",
              fontFamily: "Satoshi, system-ui, sans-serif",
              transition: "color 0.3s ease",
            }}
          >
            Contact
          </Link>
        </nav>

        {/* CTA Phone */}
        <a
          href={siteConfig.phoneLink}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            height: 48,
            padding: "10px 20px",
            borderRadius: 58,
            backgroundColor: colors.accent,
            color: "#FFFFFF",
            fontSize: 15,
            fontWeight: 700,
            textDecoration: "none",
            fontFamily: "Satoshi, system-ui, sans-serif",
          }}
        >
          <span style={{ fontSize: 16 }}>&#9742;</span>
          {siteConfig.phone}
        </a>
      </div>
    </header>
  );
}

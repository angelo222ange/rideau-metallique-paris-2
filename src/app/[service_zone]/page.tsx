import { Metadata } from "next";
import { siteConfig, services, zones } from "@/config/site";
import { servicesContent } from "@/data/services-content";
import { generateZoneContent } from "@/data/zone-content-generator";
import { zonesLocal } from "../../../content/zones-local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  const params: { service_zone: string }[] = [];
  for (const zone of zones) {
    for (const service of services) {
      params.push({ service_zone: `${service.slug}-${zone.slug}` });
    }
  }
  for (const service of services) {
    params.push({ service_zone: `${service.slug}-${siteConfig.citySlug}` });
  }
  return params;
}

function parseServiceZone(slug: string) {
  for (const service of services) {
    for (const zone of zones) {
      if (slug === `${service.slug}-${zone.slug}`) {
        return { service, zone, isCityLevel: false };
      }
    }
    if (slug === `${service.slug}-${siteConfig.citySlug}`) {
      return {
        service,
        zone: { name: siteConfig.city, slug: siteConfig.citySlug, postalCode: siteConfig.postalCode, distance: "0 km" },
        isCityLevel: true,
      };
    }
  }
  return null;
}

export async function generateMetadata({ params }: { params: Promise<{ service_zone: string }> }): Promise<Metadata> {
  const { service_zone } = await params;
  const parsed = parseServiceZone(service_zone);
  if (!parsed) return { title: `Service rideau metallique ${siteConfig.city}` };
  const { service, zone } = parsed;
  const title = `${service.name} rideau metallique ${zone.name} (${zone.postalCode})`;
  return {
    title: title.length > 65 ? title.slice(0, 62) + "..." : title,
    description: `${service.description} a ${zone.name}. Intervention 24h/24, devis gratuit. Appelez le ${siteConfig.phone}.`,
    alternates: { canonical: `${siteConfig.url}/${service_zone}/` },
  };
}

export default async function ServiceZonePage({ params }: { params: Promise<{ service_zone: string }> }) {
  const { service_zone } = await params;
  const parsed = parseServiceZone(service_zone);
  if (!parsed) {
    return (<><Header /><main style={{ padding: "200px 30px 120px", textAlign: "center" }}><h1>Page non trouvee</h1></main><Footer /></>);
  }

  const { service, zone, isCityLevel } = parsed;
  const svcData = servicesContent[service.id] || servicesContent.depannage;
  const phone = siteConfig.phone;

  // Contenu UNIQUE par page : combine donnees service + donnees locales de la zone
  const zoneContent = isCityLevel ? null : generateZoneContent(service.id, zone.slug, zone.name);

  // Pour les pages city-level, on utilise le contenu service complet (deja unique par service)
  // Pour les pages zone, on utilise le contenu genere dynamiquement (unique par zone x service)
  const introTitle = zoneContent?.introTitle || svcData.introTitle;
  const introText = zoneContent?.introText || svcData.introText;
  const seo1Title = zoneContent?.seo1Title || svcData.seo1Title;
  const seo1Text = zoneContent?.seo1Text || svcData.seo1Text;
  const seo2Title = zoneContent?.seo2Title || svcData.seo2Title;
  const seo2Text = zoneContent?.seo2Text || svcData.seo2Text;
  const localContext = zoneContent?.localContext || "";
  // FAQ et pourquoi-nous : version zone si disponible, sinon version service
  const faqItems = (zoneContent?.faq && zoneContent.faq.length > 0) ? zoneContent.faq : svcData.faq;

  // Rotation des reviews par zone — chaque zone montre 3 reviews differentes dans un ordre different
  const zoneHash = zone.slug.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const rotatedReviews = [...svcData.reviews].sort((a, b) => {
    const ha = (a.name.charCodeAt(0) + zoneHash) % 100;
    const hb = (b.name.charCodeAt(0) + zoneHash) % 100;
    return ha - hb;
  }).slice(0, isCityLevel ? 6 : 4);
  const whyUsCards = (zoneContent?.whyUsCards && zoneContent.whyUsCards.length > 0) ? zoneContent.whyUsCards : [
    { t: "Intervention en 30 min", d: "Techniciens bases a Paris, deplacement rapide." },
    { t: "Devis gratuit", d: "Prix communique avant intervention." },
    { t: "Pieces d'origine", d: "Fabricants officiels : Somfy, ACM, Simu, Came." },
    { t: "25+ ans d'experience", d: "Plus de 5 000 interventions realisees." },
    { t: "Garantie pieces et MO", d: "Recidive = intervention gratuite." },
    { t: "24h/24, 7j/7", d: "Nuits, week-ends, jours feries sans majoration." },
  ];
  const typesContext = zoneContent?.typesContext || "";
  const localExpertise = zoneContent?.localExpertise || "";
  const ctaText = zoneContent?.ctaText || `Besoin d'un ${service.name.toLowerCase()} de rideau metallique a ${zone.name} ? Appelez maintenant.`;

  // Types cards — ajoute du contexte local si zone disponible
  const typesCards = svcData.types.map((t, i) => {
    if (!zoneContent || !zonesLocal[zone.slug]) return t;
    const local = zonesLocal[zone.slug];
    // Ajoute une phrase locale differente par card (rotation par index)
    const localAddons = [
      `Frequemment rencontre pres de ${local.landmarks[0]} a ${zone.name}.`,
      `Les ${local.commerceTypes[0]} ${local.streets[i % local.streets.length]} sont particulierement concernes.`,
      `Nos techniciens interviennent via ${local.metroStations[i % local.metroStations.length]} pour ce type de situation.`,
      `Les commerces du quartier ${local.neighborhoods[i % local.neighborhoods.length]} font souvent face a ce probleme.`,
    ];
    return { ...t, text: t.text + " " + localAddons[i % localAddons.length] };
  });

  return (
    <>
      <Header />
      <main>
        {/* 1. Hero + Breadcrumb */}
        <section style={{ position: "relative", minHeight: 480, padding: "180px 30px 70px", backgroundColor: "#1B4332", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${svcData.heroImage})`, backgroundSize: "cover", backgroundPosition: "center" }} />
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(15,43,33,0.8)" }} />
          <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto" }}>
            <nav style={{ fontFamily: "Urbanist, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 20 }}>
              <a href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Accueil</a>{" / "}
              <a href={`/${service.slug}-${siteConfig.citySlug}/`} style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>{service.name}</a>{" / "}
              <span style={{ color: "#C9A84C" }}>{zone.name}</span>
            </nav>
            <h1 style={{ fontFamily: "Urbanist, sans-serif", fontSize: 44, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.1, maxWidth: 800, margin: "0 0 16px 0" }} className="svc-h1">
              {service.name} rideau metallique {zone.name}
            </h1>
            <p style={{ fontFamily: "Urbanist, sans-serif", fontSize: 16, color: "rgba(255,255,255,0.8)", maxWidth: 600, lineHeight: 1.6, marginBottom: 28 }}>
              {service.description} a {zone.name} ({zone.postalCode}). Techniciens certifies, 25+ ans d&apos;experience. Devis gratuit.
            </p>
            <a href="tel:+33972124141" style={{ fontFamily: "Urbanist, sans-serif", fontSize: 16, fontWeight: 600, backgroundColor: "#C9A84C", color: "#1B4332", padding: "14px 24px", borderRadius: 0, display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1B4332" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
              {phone}
            </a>
          </div>
        </section>

        {/* 2. Stats */}
        <section style={{ padding: "40px 30px", backgroundColor: "#0F2B21" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 24 }}>
            {[
              { v: "25+", l: "Ans d'experience" },
              { v: "5000+", l: "Interventions" },
              { v: "24h/24", l: "Disponibilite" },
              { v: "4.9/5", l: "Note Google" },
            ].map((s) => (
              <div key={s.l} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "Urbanist, sans-serif", fontSize: 32, fontWeight: 700, color: "#C9A84C" }}>{s.v}</div>
                <div style={{ fontFamily: "Urbanist, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Intro service — CONTENU UNIQUE par zone */}
        <section style={{ padding: "80px 30px", backgroundColor: "#FFFFFF" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 50, alignItems: "center" }} className="svc-intro">
            <div style={{ flex: 1 }}>
              <h2 style={{ fontFamily: "Urbanist, sans-serif", fontSize: 32, fontWeight: 600, color: "#1B4332", lineHeight: 1.25, marginBottom: 20, marginTop: 0 }} className="svc-h2">
                {introTitle}
              </h2>
              <p style={{ fontFamily: "Urbanist, sans-serif", fontSize: 16, color: "#555", lineHeight: 1.8, margin: 0 }}>
                {introText}
              </p>
            </div>
            <div style={{ flex: "0 0 420px", height: 360, borderRadius: 12, overflow: "hidden" }} className="svc-intro-img">
              <img src={svcData.introImage} alt={`${service.name} rideau metallique ${zone.name}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </section>

        {/* 4. Types intervention */}
        <section style={{ padding: "70px 30px", backgroundColor: "#F5F0E8" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Urbanist, sans-serif", fontSize: 28, fontWeight: 600, color: "#1B4332", marginBottom: 16, marginTop: 0 }}>
              {svcData.typesTitle}
            </h2>
            {typesContext && (
              <p style={{ fontFamily: "Urbanist, sans-serif", fontSize: 15, color: "#666", lineHeight: 1.6, marginBottom: 24 }}>{typesContext}</p>
            )}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }} className="types-grid">
              {typesCards.map((t) => (
                <div key={t.title} style={{ backgroundColor: "#FFFFFF", padding: 28, borderRadius: 12 }}>
                  <h3 style={{ fontFamily: "Urbanist, sans-serif", fontSize: 18, fontWeight: 600, color: "#1B4332", marginBottom: 8, marginTop: 0 }}>{t.title}</h3>
                  <p style={{ fontFamily: "Urbanist, sans-serif", fontSize: 14, color: "#666", lineHeight: 1.6, margin: 0 }}>{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. SEO Content 1 — CONTENU UNIQUE par zone */}
        <section style={{ padding: "80px 30px", backgroundColor: "#FFFFFF" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 50, alignItems: "center" }} className="seo-block">
            <div style={{ flex: 1 }}>
              <h2 style={{ fontFamily: "Urbanist, sans-serif", fontSize: 28, fontWeight: 600, color: "#1B4332", lineHeight: 1.25, marginBottom: 20, marginTop: 0 }} className="svc-h2">{seo1Title}</h2>
              <p style={{ fontFamily: "Urbanist, sans-serif", fontSize: 16, color: "#555", lineHeight: 1.8, margin: 0 }}>{seo1Text}</p>
            </div>
            <div style={{ flex: "0 0 400px", height: 320, borderRadius: 12, overflow: "hidden" }} className="seo-img">
              <img src={svcData.seo1Image} alt={`${seo1Title} - DRM Paris 2`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </section>

        {/* 6. SEO Content 2 — CONTENU UNIQUE par zone */}
        <section style={{ padding: "80px 30px", backgroundColor: "#F5F0E8" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 50, alignItems: "center" }} className="seo-block-rev">
            <div style={{ flex: "0 0 400px", height: 320, borderRadius: 12, overflow: "hidden" }} className="seo-img">
              <img src={svcData.seo2Image} alt={`${seo2Title} - DRM Paris 2`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontFamily: "Urbanist, sans-serif", fontSize: 28, fontWeight: 600, color: "#1B4332", lineHeight: 1.25, marginBottom: 20, marginTop: 0 }} className="svc-h2">{seo2Title}</h2>
              <p style={{ fontFamily: "Urbanist, sans-serif", fontSize: 16, color: "#555", lineHeight: 1.8, margin: 0 }}>{seo2Text}</p>
            </div>
          </div>
        </section>

        {/* 7. Contexte local (UNIQUEMENT pour les pages zone, pas city-level) */}
        {localContext && (
          <section style={{ padding: "50px 30px", backgroundColor: "#FFFFFF" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
              <p style={{ fontFamily: "Urbanist, sans-serif", fontSize: 16, color: "#555", lineHeight: 1.8, margin: 0, maxWidth: 900 }}>
                {localContext}
              </p>
            </div>
          </section>
        )}

        {/* 8. Pourquoi nous */}
        <section style={{ padding: "70px 30px", backgroundColor: "#1B4332" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Urbanist, sans-serif", fontSize: 28, fontWeight: 600, color: "#FFFFFF", marginBottom: 32, marginTop: 0 }}>
              Pourquoi choisir DRM pour votre rideau metallique a {zone.name} ?
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="why-svc-grid">
              {whyUsCards.map((f) => (
                <div key={f.t} style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: 24 }}>
                  <h3 style={{ fontFamily: "Urbanist, sans-serif", fontSize: 16, fontWeight: 600, color: "#C9A84C", marginBottom: 8, marginTop: 0 }}>{f.t}</h3>
                  <p style={{ fontFamily: "Urbanist, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, margin: 0 }}>{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8b. Expertise locale — 150+ mots UNIQUES par zone */}
        {localExpertise && (
          <section style={{ padding: "70px 30px", backgroundColor: "#FAF7F2" }}>
            <div style={{ maxWidth: 900, margin: "0 auto" }}>
              <h2 style={{ fontFamily: "Urbanist, sans-serif", fontSize: 26, fontWeight: 600, color: "#1B4332", marginBottom: 20, marginTop: 0 }}>
                Notre expertise {service.name.toLowerCase()} a {zone.name}
              </h2>
              <p style={{ fontFamily: "Urbanist, sans-serif", fontSize: 16, color: "#555", lineHeight: 1.8, margin: 0 }}>
                {localExpertise}
              </p>
            </div>
          </section>
        )}

        {/* 9. Reviews */}
        <section style={{ padding: "70px 30px", backgroundColor: "#FFFFFF" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
              <h2 style={{ fontFamily: "Urbanist, sans-serif", fontSize: 28, fontWeight: 600, color: "#1B4332", margin: 0 }}>
                Avis clients — {service.name} rideau metallique
              </h2>
              <div style={{ display: "flex", gap: 2 }}>
                <span style={{ color: "#4285F4", fontSize: 18, fontWeight: 700, fontFamily: "Urbanist" }}>G</span>
                <span style={{ color: "#EA4335", fontSize: 18, fontWeight: 700, fontFamily: "Urbanist" }}>o</span>
                <span style={{ color: "#FBBC05", fontSize: 18, fontWeight: 700, fontFamily: "Urbanist" }}>o</span>
                <span style={{ color: "#4285F4", fontSize: 18, fontWeight: 700, fontFamily: "Urbanist" }}>g</span>
                <span style={{ color: "#34A853", fontSize: 18, fontWeight: 700, fontFamily: "Urbanist" }}>l</span>
                <span style={{ color: "#EA4335", fontSize: 18, fontWeight: 700, fontFamily: "Urbanist" }}>e</span>
                <span style={{ fontFamily: "Urbanist", fontSize: 14, color: "#888", marginLeft: 8 }}>4.9/5</span>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="reviews-svc-grid">
              {rotatedReviews.map((r) => (
                <div key={r.name} style={{ border: "1px solid #E5E5E5", borderRadius: 12, padding: 24 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                    <div style={{ width: 40, height: 40, backgroundColor: "#C9A84C", borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Urbanist", fontSize: 13, fontWeight: 700, color: "#1B4332" }}>{r.initials}</div>
                    <div>
                      <div style={{ fontFamily: "Urbanist", fontSize: 14, fontWeight: 600, color: "#1B4332" }}>{r.name}</div>
                      <div style={{ fontFamily: "Urbanist", fontSize: 12, color: "#999" }}>{r.date}</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 2, marginBottom: 10 }}>
                    {[1,2,3,4,5].map((i) => (<svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>))}
                  </div>
                  <p style={{ fontFamily: "Urbanist", fontSize: 13, color: "#555", lineHeight: 1.6, margin: 0 }}>{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. FAQ — premiere question = "Qui appeler" */}
        <section style={{ padding: "70px 30px", backgroundColor: "#F5F0E8" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Urbanist, sans-serif", fontSize: 28, fontWeight: 600, color: "#1B4332", marginBottom: 32, marginTop: 0 }}>
              Questions frequentes — {service.name} a {zone.name}
            </h2>
            {faqItems.map((item, idx) => (
              <div key={idx} style={{ borderBottom: "1px solid #E5E5E5", padding: "20px 0" }}>
                <h3 style={{ fontFamily: "Urbanist, sans-serif", fontSize: 17, fontWeight: 600, color: "#1B4332", marginBottom: 10, marginTop: 0 }}>{item.q}</h3>
                <p style={{ fontFamily: "Urbanist, sans-serif", fontSize: 15, color: "#666", lineHeight: 1.7, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 11. Maillage services */}
        <section style={{ padding: "70px 30px", backgroundColor: "#FFFFFF" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Urbanist, sans-serif", fontSize: 28, fontWeight: 600, color: "#1B4332", marginBottom: 24, marginTop: 0 }}>
              Nos autres services a {zone.name}
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {services.filter((s) => s.id !== service.id).map((s) => (
                <a key={s.id} href={`/${s.slug}-${zone.slug}/`} style={{ fontFamily: "Urbanist, sans-serif", fontSize: 14, fontWeight: 500, color: "#1B4332", backgroundColor: "#F5F0E8", padding: "10px 18px", borderRadius: 50, textDecoration: "none", border: "1px solid #E5E5E5" }}>
                  {s.name} {zone.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 12. CTA */}
        <section style={{ padding: "80px 30px", backgroundColor: "#1B4332", textAlign: "center" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <div style={{ fontFamily: "Urbanist, sans-serif", fontSize: 14, fontWeight: 600, color: "#C9A84C", textTransform: "uppercase", letterSpacing: "2px", marginBottom: 16 }}>Urgence 24h/24</div>
            <h2 style={{ fontFamily: "Urbanist, sans-serif", fontSize: 32, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.2, marginBottom: 20, marginTop: 0 }} className="svc-h2">
              Besoin d&apos;un {service.name.toLowerCase()} de rideau metallique a {zone.name} ?
            </h2>
            <p style={{ fontFamily: "Urbanist, sans-serif", fontSize: 16, color: "rgba(255,255,255,0.6)", marginBottom: 32 }}>
              {ctaText}
            </p>
            <a href="tel:+33972124141" style={{ fontFamily: "Urbanist, sans-serif", fontSize: 18, fontWeight: 600, backgroundColor: "#C9A84C", color: "#1B4332", padding: "18px 32px", borderRadius: 0, display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B4332" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
              {phone}
            </a>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .svc-h1 { font-size: 28px !important; }
          .svc-h2 { font-size: 24px !important; }
          .svc-intro, .seo-block { flex-direction: column !important; gap: 24px !important; }
          .seo-block-rev { flex-direction: column-reverse !important; gap: 24px !important; }
          .svc-intro-img, .seo-img { flex: none !important; width: 100% !important; height: 240px !important; }
          .types-grid, .why-svc-grid, .reviews-svc-grid, .maillage-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

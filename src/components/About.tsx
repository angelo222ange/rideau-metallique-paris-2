export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "120px 30px 60px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            fontFamily: "Urbanist, sans-serif",
            fontSize: 14,
            fontWeight: 600,
            color: "#1B4332",
            textTransform: "uppercase",
            letterSpacing: "2px",
            marginBottom: 20,
          }}
        >
          A Propos
        </div>

        <h2
          style={{
            fontFamily: "Urbanist, sans-serif",
            fontSize: 40,
            fontWeight: 600,
            color: "#1B4332",
            lineHeight: 1.3,
            maxWidth: 700,
            margin: "0 0 24px 0",
          }}
          className="about-h2"
        >
          Specialistes du rideau metallique a Paris 2e depuis plus de 25 ans
        </h2>

        <p
          style={{
            fontFamily: "Urbanist, sans-serif",
            fontSize: 17,
            fontWeight: 400,
            color: "#555555",
            lineHeight: 1.7,
            maxWidth: 600,
            marginBottom: 48,
          }}
        >
          <strong>DRM Paris 2</strong> intervient dans le quartier du Sentier, de la Bourse et des
          Grands Boulevards pour le <strong>depannage</strong>, la <strong>reparation</strong> et l&apos;<strong>installation</strong>
          de <strong>rideaux metalliques</strong>. Nos techniciens certifies se deplacent avec un
          vehicule atelier equipe de toutes les pieces necessaires.
        </p>

        {/* 3 images row */}
        <div style={{ display: "flex", gap: 20 }} className="about-images">
          <div style={{ flex: 1, height: 400, borderRadius: 12, overflow: "hidden", position: "relative" }}>
            <img
              src="/images/gallery/depannage-rideau-metallique-DRM-reparation.webp"
              alt="Technicien DRM en intervention sur rideau metallique Paris 2"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div style={{ flex: 1, height: 400, borderRadius: 12, overflow: "hidden", position: "relative" }}>
            <img
              src="/images/gallery/installation-rideau-metallique-drm.webp"
              alt="Installation rideau metallique commerce Paris 2e arrondissement"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div style={{ flex: 1, height: 400, borderRadius: 12, overflow: "hidden", position: "relative" }}>
            <img
              src="/images/gallery/realisation-rideau-metallique-lame-pleine-commerce.webp"
              alt="Realisation rideau metallique lames pleines sur commerce Paris"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-h2 { font-size: 28px !important; }
          .about-images { flex-direction: column !important; }
          .about-images > div { height: 240px !important; }
        }
      `}</style>
    </section>
  );
}

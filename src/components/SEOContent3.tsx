export default function SEOContent3() {
  return (
    <section style={{ padding: "100px 30px", backgroundColor: "#FFFFFF" }}>
      <div
        style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 60, alignItems: "center" }}
        className="seo3-layout"
      >
        {/* Text */}
        <div style={{ flex: 1 }}>
          <h2
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: 36,
              fontWeight: 600,
              color: "#1B4332",
              lineHeight: 1.25,
              margin: "0 0 24px 0",
            }}
            className="seo3-h2"
          >
            Entretien et maintenance de store metallique a Paris 2 : prevention des pannes
          </h2>
          <div style={{ fontFamily: "Urbanist, sans-serif", fontSize: 16, color: "#555", lineHeight: 1.8 }}>
            <p style={{ marginBottom: 16 }}>
              L&apos;entretien regulier d&apos;un rideau metallique est la meilleure assurance contre les pannes imprevues. Dans le 2e arrondissement, ou les commerces des Grands Boulevards, de la rue Reaumur et du passage des Panoramas ouvrent et ferment leurs grilles metalliques plusieurs fois par jour, l&apos;usure mecanique est acceleree. Un contrat de maintenance annuel avec DRM Paris 2 comprend deux visites preventives : graissage des coulisses et de l&apos;axe, verification de la tension des ressorts, controle electrique du moteur et du boitier de commande, inspection visuelle des lames et de la lame finale.
            </p>
            <p style={{ marginBottom: 16 }}>
              Nos contrats d&apos;entretien debutent a 250 euros par an et couvrent le deplacement, la main-d&apos;oeuvre et les petites pieces d&apos;usure (joints EPDM, vis de fixation, contacts electriques). Pour les commerces equipes de rideaux motorises, nous effectuons egalement le reglage des fins de course, la verification du systeme de debrayage manuel et la mise a jour de la programmation des telecommandes.
            </p>
            <p>
              Pres de la rue Montorgueil et de la rue Etienne Marcel, de nombreux restaurateurs et commercants nous font confiance pour la maintenance de leurs fermetures metalliques. Un rideau bien entretenu dure en moyenne 15 a 20 ans sans panne majeure, contre 5 a 8 ans sans entretien. Le retour sur investissement d&apos;un contrat de maintenance est mesurable des la premiere annee : moins de pannes imprevues, pas d&apos;arret d&apos;activite force, et une meilleure durabilite de l&apos;equipement.
            </p>
          </div>
        </div>

        {/* Image */}
        <div style={{ flex: "0 0 480px", height: 420, borderRadius: 12, overflow: "hidden" }} className="seo3-img">
          <img
            src="/images/gallery/entretien-rideau-metallique-drm-france.webp"
            alt="Entretien preventif rideau metallique technicien DRM Paris 2"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .seo3-layout { flex-direction: column !important; gap: 32px !important; }
          .seo3-img { flex: none !important; width: 100% !important; height: 280px !important; }
          .seo3-h2 { font-size: 26px !important; }
        }
      `}</style>
    </section>
  );
}

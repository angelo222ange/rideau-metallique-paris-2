export default function SEOContent1() {
  return (
    <section style={{ padding: "100px 30px", backgroundColor: "#FFFFFF" }}>
      <div
        style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 60, alignItems: "center" }}
        className="seo1-layout"
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
            className="seo1-h2"
          >
            Depannage de fermeture metallique a Paris 2e : intervention urgence dans le Sentier et la Bourse
          </h2>
          <div style={{ fontFamily: "Urbanist, sans-serif", fontSize: 16, color: "#555", lineHeight: 1.8 }}>
            <p style={{ marginBottom: 16 }}>
              Votre <strong>rideau metallique</strong> est bloque rue du Sentier, rue Montmartre ou pres de la place de la Bourse ? <strong>DRM Paris 2</strong> deploie ses techniciens certifies en moins de <strong>30 minutes</strong> dans tout le 2e arrondissement. Que votre <strong>fermeture metallique</strong> soit coincee a mi-hauteur, que le moteur ne reponde plus ou que les lames soient deformees apres une tentative d&apos;effraction, nous avons la solution adaptee.
            </p>
            <p style={{ marginBottom: 16 }}>
              Nos vehicules ateliers sont equipes en permanence de pieces detachees d&apos;origine : lames P57 et P90, moteurs centraux ACM et tubulaires Somfy, ressorts de compensation, serrures a profil europeen et boitiers de commande. Cette autonomie nous permet de reparer la majorite des pannes en une seule intervention, sans allers-retours couteux.
            </p>
            <p>
              Le quartier du Sentier, coeur historique du textile parisien reconverti en pole tech et mode, concentre des centaines de commerces qui dependent de la securite de leur rideau metallique. Boutiques de pret-a-porter, ateliers de creation, showrooms et restaurants : chaque heure de fermeture forcee represente une perte de chiffre d&apos;affaires. C&apos;est pourquoi nous garantissons un depannage en urgence 24 heures sur 24, 7 jours sur 7, week-ends et jours feries inclus.
            </p>
          </div>
        </div>

        {/* Image */}
        <div style={{ flex: "0 0 480px", height: 420, borderRadius: 12, overflow: "hidden" }} className="seo1-img">
          <img
            src="/images/gallery/depannage-rideau-metallique-drm-france-rm.webp"
            alt="Technicien DRM depannage rideau metallique urgence Paris 2e arrondissement"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .seo1-layout { flex-direction: column !important; gap: 32px !important; }
          .seo1-img { flex: none !important; width: 100% !important; height: 280px !important; }
          .seo1-h2 { font-size: 26px !important; }
        }
      `}</style>
    </section>
  );
}

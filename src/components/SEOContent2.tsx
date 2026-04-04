export default function SEOContent2() {
  return (
    <section style={{ padding: "100px 30px", backgroundColor: "#F5F0E8" }}>
      <div
        style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 60, alignItems: "center" }}
        className="seo2-layout"
      >
        {/* Image */}
        <div style={{ flex: "0 0 480px", height: 420, borderRadius: 12, overflow: "hidden" }} className="seo2-img">
          <img
            src="/images/gallery/rideau-metallique-bloque-depannage-rideau-metallique.webp"
            alt="Rideau metallique bloque lame sortie du rail depannage Paris 2"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

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
            className="seo2-h2"
          >
            Pannes courantes de rideau de fer a Paris : diagnostic et reparation rapide
          </h2>
          <div style={{ fontFamily: "Urbanist, sans-serif", fontSize: 16, color: "#555", lineHeight: 1.8 }}>
            <p style={{ marginBottom: 16 }}>
              Les rideaux metalliques des commerces parisiens subissent des contraintes quotidiennes : ouvertures et fermetures repetees, vibrations du trafic, tentatives d&apos;effraction, intemperies. Les pannes les plus frequentes dans le 2e arrondissement concernent le moteur (condensateur HS, carte electronique defaillante, surchauffe), les lames (deformation apres choc, corrosion, sortie de rail) et le mecanisme d&apos;enroulement (ressorts casses, axe grippe).
            </p>
            <p style={{ marginBottom: 16 }}>
              Un rideau de fer bloque a mi-hauteur est le signe classique d&apos;une lame sortie de sa coulisse laterale ou d&apos;un ressort de compensation rompu. Le deblocage necessite un savoir-faire specifique pour eviter d&apos;aggraver les dommages : nos techniciens utilisent un outillage adapte (pieds-de-biche plats, pinces de reglage) et reintroduisent la lame dans son rail sans forcer sur le mecanisme.
            </p>
            <p>
              La motorisation defaillante represente pres de 40% de nos interventions a Paris. Un moteur central ACM qui ne repond plus peut etre lie a un simple condensateur grille (reparation 30 minutes, 80 a 150 euros) ou a une carte de commande HS (remplacement en 1 heure). Nos techniciens effectuent un diagnostic electrique complet avec multimetre avant de proposer la solution la plus economique entre reparation et remplacement.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .seo2-layout { flex-direction: column-reverse !important; gap: 32px !important; }
          .seo2-img { flex: none !important; width: 100% !important; height: 280px !important; }
          .seo2-h2 { font-size: 26px !important; }
        }
      `}</style>
    </section>
  );
}

const features = [
  {
    title: "Intervention en 30 min",
    text: "Nos techniciens sont bases dans Paris intra-muros. Deplacement rapide dans le 2e arrondissement et les arrondissements limitrophes, 24h/24.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Devis gratuit avant intervention",
    text: "Le prix est communique et accepte AVANT que le technicien commence les travaux. Aucun frais cache, aucune surprise. Paiement apres intervention.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: "Pieces d'origine garanties",
    text: "Lames, moteurs, ressorts et serrures proviennent directement des fabricants : Somfy, Simu, ACM, Came. Garantie constructeur sur chaque piece.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "25+ ans d'experience",
    text: "Plus de 5 000 interventions realisees sur tous types de rideaux metalliques : lames pleines, micro-perforees, grilles cobra, rideaux polycarbonate.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    title: "Disponible 24h/24, 7j/7",
    text: "Urgences nocturnes, week-ends, jours feries : nos techniciens sont mobilisables a tout moment. Un rideau bloque ne peut pas attendre lundi.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    title: "Vehicule atelier equipe",
    text: "Chaque technicien se deplace avec un stock de pieces courantes : lames, moteurs, ressorts, serrures. La majorite des reparations se font en une seule visite.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section style={{ padding: "100px 30px", backgroundColor: "#1B4332" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: 14,
              fontWeight: 600,
              color: "#C9A84C",
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginBottom: 20,
            }}
          >
            Pourquoi Nous
          </div>
          <h2
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: 40,
              fontWeight: 600,
              color: "#FFFFFF",
              lineHeight: 1.2,
              maxWidth: 600,
              margin: "0 auto",
            }}
            className="why-h2"
          >
            6 raisons de confier votre grille metallique a DRM Paris 2
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
          className="why-grid"
        >
          {features.map((f) => (
            <div
              key={f.title}
              style={{
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 12,
                padding: 32,
              }}
            >
              <div style={{ marginBottom: 16 }}>{f.icon}</div>
              <h3
                style={{
                  fontFamily: "Urbanist, sans-serif",
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#FFFFFF",
                  margin: "0 0 10px 0",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontFamily: "Urbanist, sans-serif",
                  fontSize: 14,
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .why-grid { grid-template-columns: 1fr !important; }
          .why-h2 { font-size: 28px !important; }
        }
      `}</style>
    </section>
  );
}

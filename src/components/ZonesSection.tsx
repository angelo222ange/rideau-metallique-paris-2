import Link from "next/link";

const topZones = [
  { name: "Paris 1er", slug: "paris-1er", cp: "75001" },
  { name: "Paris 3e", slug: "paris-3e", cp: "75003" },
  { name: "Paris 4e", slug: "paris-4e", cp: "75004" },
  { name: "Paris 8e", slug: "paris-8e", cp: "75008" },
  { name: "Paris 9e", slug: "paris-9e", cp: "75009" },
  { name: "Paris 10e", slug: "paris-10e", cp: "75010" },
  { name: "Paris 11e", slug: "paris-11e", cp: "75011" },
  { name: "Paris 17e", slug: "paris-17e", cp: "75017" },
  { name: "Paris 18e", slug: "paris-18e", cp: "75018" },
  { name: "Paris 19e", slug: "paris-19e", cp: "75019" },
  { name: "Paris 20e", slug: "paris-20e", cp: "75020" },
  { name: "Boulogne-Billancourt", slug: "boulogne-billancourt", cp: "92100" },
  { name: "Levallois-Perret", slug: "levallois-perret", cp: "92300" },
  { name: "Neuilly-sur-Seine", slug: "neuilly-sur-seine", cp: "92200" },
];

export default function ZonesSection() {
  return (
    <section style={{ padding: "100px 30px", backgroundColor: "#FAF7F2" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
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
            Zones d&apos;intervention
          </div>
          <h2
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: 36,
              fontWeight: 600,
              color: "#1B4332",
              lineHeight: 1.2,
              maxWidth: 600,
              margin: "0 auto 16px",
            }}
            className="zones-sec-h2"
          >
            Depannage rideau metallique dans tout Paris et sa proche banlieue
          </h2>
          <p style={{ fontFamily: "Urbanist, sans-serif", fontSize: 16, color: "#555", maxWidth: 600, margin: "0 auto" }}>
            Nos techniciens interviennent en moins de 30 minutes dans les 20 arrondissements de Paris et les communes limitrophes.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
          }}
          className="zones-sec-grid"
        >
          {topZones.map((z) => (
            <Link
              key={z.slug}
              href={`/depannage-rideau-metallique-${z.slug}/`}
              style={{
                display: "block",
                backgroundColor: "#FFFFFF",
                border: "1px solid #E5E5E5",
                borderRadius: 8,
                padding: "16px 20px",
                textDecoration: "none",
                transition: "border-color 0.2s ease, transform 0.2s ease",
              }}
            >
              <div style={{ fontFamily: "Urbanist, sans-serif", fontSize: 15, fontWeight: 600, color: "#1B4332" }}>
                {z.name}
              </div>
              <div style={{ fontFamily: "Urbanist, sans-serif", fontSize: 13, color: "#888" }}>
                {z.cp}
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 32 }}>
          <Link
            href="/zones/"
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: 15,
              fontWeight: 600,
              color: "#1B4332",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "12px 24px",
              border: "1px solid #1B4332",
              borderRadius: 0,
            }}
          >
            Voir toutes les zones
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="#1B4332" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .zones-sec-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .zones-sec-h2 { font-size: 26px !important; }
        }
      `}</style>
    </section>
  );
}

import { siteConfig, colors } from "@/config/site";

export default function Counter() {
  const stats = [
    { value: `${siteConfig.experience} ans`, label: "d'experience" },
    { value: siteConfig.interventions, label: "interventions realisees" },
    { value: `${siteConfig.rating}/5`, label: "satisfaction client" },
    { value: "24h/24", label: "disponibilite" },
  ];

  return (
    <section
      style={{
        minHeight: 200,
        padding: "80px 30px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            style={{
              textAlign: "center",
              flex: 1,
              borderRight:
                i < stats.length - 1
                  ? `1px solid rgba(28,37,65,0.1)`
                  : "none",
            }}
          >
            <div
              style={{
                fontSize: 48,
                fontWeight: 700,
                color: colors.primary,
                fontFamily: "Satoshi, system-ui, sans-serif",
                lineHeight: 1,
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontSize: 16,
                color: colors.textMuted,
                fontFamily: "Satoshi, system-ui, sans-serif",
                marginTop: 12,
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

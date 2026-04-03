import { colors } from "@/config/site";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Appel et diagnostic",
      description:
        "Vous nous appelez, notre technicien evalue la situation par telephone et vous communique un premier diagnostic et une estimation tarifaire.",
    },
    {
      number: "02",
      title: "Intervention rapide",
      description:
        "Un technicien certifie arrive sur place en moins de 30 minutes avec son vehicule atelier equipe de toutes les pieces necessaires.",
    },
    {
      number: "03",
      title: "Devis sur place",
      description:
        "Apres examen du rideau metallique, nous etablissons un devis precis et transparent. Aucune intervention sans votre accord prealable.",
    },
    {
      number: "04",
      title: "Reparation garantie",
      description:
        "Le depannage ou la reparation est effectue dans les regles de l'art avec des pieces de qualite. Garantie pieces et main-d'oeuvre sur chaque intervention.",
    },
    {
      number: "05",
      title: "Suivi et entretien",
      description:
        "Nous restons disponibles pour toute question apres intervention. Possibilite de souscrire un contrat d'entretien annuel preventif.",
    },
  ];

  return (
    <section
      style={{
        padding: "120px 30px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <span
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: colors.accent,
              fontFamily: "Satoshi, system-ui, sans-serif",
              display: "block",
              marginBottom: 16,
            }}
          >
            Notre methode
          </span>
          <h2
            style={{
              fontSize: 48,
              fontWeight: 700,
              fontFamily: "Satoshi, system-ui, sans-serif",
              color: colors.primary,
              lineHeight: 1.15,
              margin: "0 0 16px 0",
            }}
          >
            Comment se deroule une intervention
          </h2>
          <p
            style={{
              fontSize: 18,
              fontFamily: "Satoshi, system-ui, sans-serif",
              color: colors.textMuted,
              lineHeight: 1.7,
              margin: "0 auto",
              maxWidth: 600,
            }}
          >
            Un processus eprouve en 5 etapes pour un depannage rapide et efficace.
          </p>
        </div>

        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 2,
              backgroundColor: "rgba(28,37,65,0.1)",
              transform: "translateX(-50%)",
            }}
          />

          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={step.number}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 60,
                  marginBottom: i < steps.length - 1 ? 80 : 0,
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    backgroundColor: colors.accent,
                    zIndex: 1,
                    border: "4px solid #FFFFFF",
                    boxShadow: "0 0 0 2px rgba(224,122,95,0.2)",
                  }}
                />

                <div
                  style={{
                    flex: 1,
                    textAlign: isLeft ? "right" : "left",
                    paddingRight: isLeft ? 60 : 0,
                    paddingLeft: isLeft ? 0 : 60,
                  }}
                >
                  {isLeft ? (
                    <>
                      <span
                        style={{
                          fontSize: 48,
                          fontWeight: 700,
                          color: "rgba(28,37,65,0.08)",
                          fontFamily: "Satoshi, system-ui, sans-serif",
                          display: "block",
                        }}
                      >
                        {step.number}
                      </span>
                      <h3
                        style={{
                          fontSize: 24,
                          fontWeight: 700,
                          fontFamily: "Satoshi, system-ui, sans-serif",
                          color: colors.primary,
                          margin: "8px 0 12px 0",
                        }}
                      >
                        {step.title}
                      </h3>
                      <p
                        style={{
                          fontSize: 16,
                          fontFamily: "Satoshi, system-ui, sans-serif",
                          color: colors.textMuted,
                          lineHeight: 1.7,
                          margin: 0,
                        }}
                      >
                        {step.description}
                      </p>
                    </>
                  ) : (
                    <div
                      style={{
                        height: 200,
                        borderRadius: 16,
                        backgroundColor: colors.lightBg,
                      }}
                    />
                  )}
                </div>

                <div
                  style={{
                    flex: 1,
                    paddingLeft: isLeft ? 60 : 0,
                    paddingRight: isLeft ? 0 : 60,
                  }}
                >
                  {isLeft ? (
                    <div
                      style={{
                        height: 200,
                        borderRadius: 16,
                        backgroundColor: colors.lightBg,
                      }}
                    />
                  ) : (
                    <>
                      <span
                        style={{
                          fontSize: 48,
                          fontWeight: 700,
                          color: "rgba(28,37,65,0.08)",
                          fontFamily: "Satoshi, system-ui, sans-serif",
                          display: "block",
                        }}
                      >
                        {step.number}
                      </span>
                      <h3
                        style={{
                          fontSize: 24,
                          fontWeight: 700,
                          fontFamily: "Satoshi, system-ui, sans-serif",
                          color: colors.primary,
                          margin: "8px 0 12px 0",
                        }}
                      >
                        {step.title}
                      </h3>
                      <p
                        style={{
                          fontSize: 16,
                          fontFamily: "Satoshi, system-ui, sans-serif",
                          color: colors.textMuted,
                          lineHeight: 1.7,
                          margin: 0,
                        }}
                      >
                        {step.description}
                      </p>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

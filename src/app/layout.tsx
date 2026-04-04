import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Depannage Rideau Metallique Paris 2 (75002) | DRM 24h/24",
  description:
    "Depannage rideau metallique Paris 2e arrondissement. Intervention urgence 24h/24, 7j/7. Techniciens certifies, devis gratuit. Appelez le 09 72 12 41 41.",
  metadataBase: new URL("https://depannagerideau-metallique-paris-2.fr"),
  alternates: {
    canonical: "https://depannagerideau-metallique-paris-2.fr",
  },
  openGraph: {
    title: "Depannage Rideau Metallique Paris 2 | DRM 24h/24",
    description: "Intervention urgence rideau metallique Paris 2e. Techniciens certifies, 25+ ans d'experience. 09 72 12 41 41.",
    url: "https://depannagerideau-metallique-paris-2.fr",
    siteName: "DRM Paris 2",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={urbanist.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "DRM Paris 2 — Depannage Rideau Metallique",
              image: "https://depannagerideau-metallique-paris-2.fr/images/gallery/hero-bg-technicien-drm.webp",
              url: "https://depannagerideau-metallique-paris-2.fr",
              telephone: "+33972124141",
              email: "contact@depannagerideau-metallique-paris-2.fr",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Impasse des Peintres",
                addressLocality: "Paris",
                postalCode: "75002",
                addressRegion: "Ile-de-France",
                addressCountry: "FR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 48.8687,
                longitude: 2.3412,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "5",
                bestRating: "5",
              },
              priceRange: "$$",
              areaServed: {
                "@type": "City",
                name: "Paris 2e arrondissement",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "DRM Paris 2",
              url: "https://depannagerideau-metallique-paris-2.fr",
            }),
          }}
        />
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "Urbanist, sans-serif",
          backgroundColor: "#FFFFFF",
          color: "#1B4332",
        }}
      >
        {children}
      </body>
    </html>
  );
}

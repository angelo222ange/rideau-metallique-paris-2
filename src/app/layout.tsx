import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  title: `Depannage Rideau Metallique Paris 2 (75002) | ${siteConfig.phone}`,
  description: `Depannage rideau metallique Paris 2e arrondissement. Intervention urgente 24h/24, 7j/7. Techniciens certifies, devis gratuit. Appelez le ${siteConfig.phone}.`,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: `Depannage Rideau Metallique Paris 2 | ${siteConfig.phone}`,
    description: `Intervention urgente 24h/24 sur rideaux metalliques, grilles et fermetures a Paris 2e. Devis gratuit. ${siteConfig.phone}`,
    url: siteConfig.url,
    siteName: siteConfig.fullName,
    locale: "fr_FR",
    type: "website",
  },
};

const schemaLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteConfig.url}/#localbusiness`,
  name: siteConfig.fullName,
  image: `${siteConfig.url}/images/logos/favicon.png`,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  url: siteConfig.url,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Impasse des Peintres",
    addressLocality: "Paris",
    postalCode: siteConfig.postalCode,
    addressRegion: siteConfig.region,
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday", "Tuesday", "Wednesday", "Thursday",
      "Friday", "Saturday", "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: siteConfig.rating,
    reviewCount: siteConfig.ratingCount,
    bestRating: "5",
  },
  priceRange: "$$",
  areaServed: {
    "@type": "City",
    name: "Paris",
  },
};

const schemaWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.fullName,
  url: siteConfig.url,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteConfig.url}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaLocalBusiness),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaWebSite),
          }}
        />
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "Satoshi, system-ui, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}

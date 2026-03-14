import type { Metadata, Viewport } from "next";
import "./globals.scss";
import { siteConfig, faqs, services } from "@/config/site";
import { ParallaxProviderWrapper } from "@/components/providers/ParallaxProviderWrapper";

const siteUrl = siteConfig.company.website;

export const viewport: Viewport = {
  themeColor: "#f36f23",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.company.legalName} | Security & Manpower Services in Delhi NCR`,
    template: `%s | ${siteConfig.company.name}`,
  },
  description: siteConfig.company.description,
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  keywords: [
    "security services in Delhi NCR",
    "security guards service",
    "armed guards",
    "housekeeping services",
    "manpower services",
    "CCTV support",
    "Sumeru Securities",
    "facility management Delhi",
    "security guard company",
    "bodyguard services",
    "fire watch services",
    "patrol services Delhi NCR",
  ],
  authors: [{ name: siteConfig.company.legalName, url: siteUrl }],
  creator: siteConfig.company.legalName,
  publisher: siteConfig.company.legalName,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: `${siteConfig.company.legalName} | Security & Manpower Services`,
    description: siteConfig.company.description,
    url: siteUrl,
    siteName: siteConfig.company.legalName,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.company.name} — Reliable Security & Manpower Services`,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.company.legalName} | Security & Manpower Services`,
    description: siteConfig.company.description,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

function buildJsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#business`,
    name: siteConfig.company.legalName,
    description: siteConfig.company.description,
    telephone: siteConfig.company.phone,
    email: siteConfig.company.email,
    url: siteUrl,
    image: `${siteUrl}/images/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "100, South Enclave, Opp. Dr. Ambedkar Nagar Police Station",
      addressLocality: "New Delhi",
      postalCode: "110062",
      addressRegion: "DL",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.5355,
      longitude: 77.2096,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: 28.6139, longitude: 77.209 },
      geoRadius: "50000",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "$$",
    sameAs: [],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Security & Manpower Services",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: { "@id": `${siteUrl}/#business` },
      },
    })),
  };

  return [localBusiness, faqPage, serviceSchema];
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdItems = buildJsonLd();

  return (
    <html lang="en">
      <body>
        {jsonLdItems.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ParallaxProviderWrapper>{children}</ParallaxProviderWrapper>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.scss";
import { siteConfig } from "@/config/site";
import { ParallaxProviderWrapper } from "@/components/providers/ParallaxProviderWrapper";

export const metadata: Metadata = {
  title: `${siteConfig.company.legalName} | Security & Manpower Services`,
  description: siteConfig.company.description,
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "security services in Delhi NCR",
    "security guards service",
    "armed guards",
    "housekeeping services",
    "manpower services",
    "CCTV support",
    "Sumeru Securities",
  ],
  openGraph: {
    title: `${siteConfig.company.legalName} | Security & Manpower Services`,
    description: siteConfig.company.description,
    url: siteConfig.company.website,
    siteName: siteConfig.company.legalName,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.company.name,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.company.legalName,
    description: siteConfig.company.description,
    telephone: siteConfig.company.phone,
    email: siteConfig.company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.company.address,
      addressCountry: "IN",
    },
    url: siteConfig.company.website,
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ParallaxProviderWrapper>{children}</ParallaxProviderWrapper>
      </body>
    </html>
  );
}

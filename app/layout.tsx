import type { Metadata } from "next";
import "./globals.scss";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.company.name} | Security & Manpower Services`,
  description: siteConfig.company.description,
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
    title: `${siteConfig.company.name} | Security & Manpower Services`,
    description: siteConfig.company.description,
    url: siteConfig.company.website,
    siteName: siteConfig.company.name,
    images: [
      {
        url: "/images/hero-security.png",
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
    name: siteConfig.company.name,
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
        {children}
      </body>
    </html>
  );
}

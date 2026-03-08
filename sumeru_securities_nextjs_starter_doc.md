# Sumeru Securities — Next.js Single-Page Starter

Below is a full starter structure for a **single-page, config-based, SEO-ready** redesign using **Next.js + TypeScript + SCSS modules + shadcn/ui + Framer Motion**.

---

## 1. Project structure

```txt
app/
  layout.tsx
  page.tsx
  globals.scss
components/
  common/
    SectionHeading.tsx
    AnimatedReveal.tsx
  layout/
    Header.tsx
    Footer.tsx
  sections/
    HeroSection.tsx
    TrustStrip.tsx
    AboutSection.tsx
    ServicesSection.tsx
    WhyChooseUsSection.tsx
    ProcessSection.tsx
    IndustriesSection.tsx
    GallerySection.tsx
    StatsSection.tsx
    FaqSection.tsx
    ContactSection.tsx
components/ui/
  ...shadcn files
config/
  site.ts
styles/
  mixins.scss
  variables.scss
  section-heading.module.scss
  header.module.scss
  footer.module.scss
  hero-section.module.scss
  trust-strip.module.scss
  about-section.module.scss
  services-section.module.scss
  why-choose-us-section.module.scss
  process-section.module.scss
  industries-section.module.scss
  gallery-section.module.scss
  stats-section.module.scss
  faq-section.module.scss
  contact-section.module.scss
lib/
  utils.ts
public/
  images/
    hero-security.jpg
    gallery-1.jpg
    gallery-2.jpg
    gallery-3.jpg
    gallery-4.jpg
```

---

## 2. Install packages

```bash
npm install framer-motion swiper lucide-react
npm install class-variance-authority clsx tailwind-merge
```

If shadcn/ui is not initialized yet:

```bash
npx shadcn@latest init
```

Add components you need:

```bash
npx shadcn@latest add button card badge accordion input textarea sheet separator
```

---

## 3. `config/site.ts`

```ts
import {
  Building2,
  Camera,
  Shield,
  ShieldAlert,
  Sparkles,
  UserCheck,
  Users,
  Warehouse,
  Hospital,
  GraduationCap,
  Store,
  Briefcase,
} from "lucide-react";

export const siteConfig = {
  company: {
    name: "Sumeru Securities",
    shortName: "Sumeru",
    description:
      "Reliable security, manpower, housekeeping, and surveillance support services for residential, commercial, and industrial spaces.",
    phone: "+91 9873234375",
    phoneHref: "tel:+919873234375",
    email: "info@sumerullp.com",
    emailHref: "mailto:info@sumerullp.com",
    address:
      "100, South Enclave, Opp. Dr. Ambedkar Nagar Police Station, New Delhi - 110062",
    whatsappHref: "https://wa.me/919873234375",
    website: "https://www.sumerusecurities.com",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Gallery", href: "#gallery" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  trustPoints: [
    "Verified personnel",
    "24/7 support",
    "Fast deployment",
    "Disciplined supervision",
    "Delhi NCR coverage",
  ],
};

export const heroData = {
  eyebrow: "Trusted Security & Manpower Solutions",
  title: "Reliable Security Services with a Modern Professional Standard",
  description:
    "From trained guards and armed protection to housekeeping, CCTV support, and manpower deployment — Sumeru Securities helps businesses and communities stay secure, efficient, and supported.",
  primaryCta: {
    label: "Request Consultation",
    href: "#contact",
  },
  secondaryCta: {
    label: "Explore Services",
    href: "#services",
  },
  highlights: [
    "Trained & verified staff",
    "Residential & corporate coverage",
    "Responsive on-ground support",
  ],
};

export const services = [
  {
    title: "Security Guards",
    description:
      "Disciplined guards for offices, societies, retail spaces, and commercial properties.",
    icon: Shield,
  },
  {
    title: "Armed Guards",
    description:
      "Licensed armed security support for high-sensitivity premises and assignments.",
    icon: ShieldAlert,
  },
  {
    title: "PSO / Bodyguard",
    description:
      "Professional personal security support for executives, families, and private needs.",
    icon: UserCheck,
  },
  {
    title: "Housekeeping Staff",
    description:
      "Well-managed housekeeping teams for residential and commercial environments.",
    icon: Sparkles,
  },
  {
    title: "CCTV Support",
    description:
      "Surveillance coordination and support services for effective security monitoring.",
    icon: Camera,
  },
  {
    title: "Manpower Services",
    description:
      "Flexible staffing support for operational, facility, and site requirements.",
    icon: Users,
  },
];

export const reasons = [
  "Verified and trained workforce",
  "Deployment tailored to site requirements",
  "Professional supervision and coordination",
  "Short-term and long-term staffing support",
  "Strong focus on punctuality, discipline, and safety",
  "Responsive escalation and service support",
];

export const processSteps = [
  {
    step: "01",
    title: "Requirement Discussion",
    description: "We understand your site type, staffing needs, risk level, and service expectations.",
  },
  {
    step: "02",
    title: "Site Assessment",
    description: "We assess deployment conditions and recommend the right manpower or security setup.",
  },
  {
    step: "03",
    title: "Deployment",
    description: "Trained personnel are assigned based on your operational and security requirements.",
  },
  {
    step: "04",
    title: "Supervision & Support",
    description: "We maintain quality through active supervision, communication, and issue handling.",
  },
];

export const industries = [
  { title: "Corporate Offices", icon: Briefcase },
  { title: "Residential Societies", icon: Building2 },
  { title: "Retail Stores", icon: Store },
  { title: "Warehouses", icon: Warehouse },
  { title: "Educational Institutions", icon: GraduationCap },
  { title: "Healthcare Facilities", icon: Hospital },
];

export const stats = [
  { value: "10+", label: "Years of service" },
  { value: "500+", label: "Personnel deployed" },
  { value: "100+", label: "Clients served" },
  { value: "24/7", label: "Support availability" },
];

export const faqs = [
  {
    question: "What areas do you serve?",
    answer:
      "We primarily serve Delhi NCR and nearby regions depending on project requirements.",
  },
  {
    question: "Do you provide armed guards?",
    answer:
      "Yes, subject to legal and assignment requirements, we can provide licensed armed guard services.",
  },
  {
    question: "Can I hire staff for short-term events or temporary needs?",
    answer:
      "Yes, we support both short-term and long-term deployment depending on availability and requirements.",
  },
  {
    question: "Do you provide housekeeping and manpower services as well?",
    answer:
      "Yes, we provide integrated support including housekeeping staff and manpower services.",
  },
  {
    question: "How quickly can deployment happen?",
    answer:
      "Timelines depend on the location, role, and scale of deployment, but we aim for quick turnaround wherever possible.",
  },
];

export const galleryImages = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Security personnel at commercial entrance",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Professional guard on site patrol duty",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "CCTV and surveillance monitoring support",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Housekeeping and facility support staff",
  },
];
```

---

## 4. `app/layout.tsx`

```tsx
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
        url: "/images/hero-security.jpg",
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
```

---

## 5. `app/page.tsx`

```tsx
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { StatsSection } from "@/components/sections/StatsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustStrip />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <ProcessSection />
        <IndustriesSection />
        <GallerySection />
        <StatsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
```

---

## 6. `components/common/AnimatedReveal.tsx`

```tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedRevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
}

export function AnimatedReveal({
  children,
  delay = 0,
  y = 24,
}: AnimatedRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
```

---

## 7. `components/common/SectionHeading.tsx`

```tsx
import styles from "@/styles/section-heading.module.scss";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`${styles.wrapper} ${centered ? styles.centered : ""}`}>
      {eyebrow ? <span className={styles.eyebrow}>{eyebrow}</span> : null}
      <h2 className={styles.title}>{title}</h2>
      {description ? <p className={styles.description}>{description}</p> : null}
    </div>
  );
}
```

---

## 8. `components/layout/Header.tsx`

```tsx
"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";
import styles from "@/styles/header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <Link href="#home" className={styles.logo}>
          {siteConfig.company.shortName}
        </Link>

        <nav className={styles.desktopNav}>
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.desktopCta}>
          <Button asChild>
            <Link href="#contact">Get Quote</Link>
          </Button>
        </div>

        <div className={styles.mobileNav}>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu size={18} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className={styles.sheetContent}>
              <div className={styles.mobileMenuInner}>
                {siteConfig.nav.map((item) => (
                  <Link key={item.href} href={item.href} className={styles.mobileLink}>
                    {item.label}
                  </Link>
                ))}
                <Button asChild>
                  <Link href="#contact">Request Consultation</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
```

---

## 9. `components/layout/Footer.tsx`

```tsx
import Link from "next/link";
import { siteConfig } from "@/config/site";
import styles from "@/styles/footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div>
            <h3>{siteConfig.company.name}</h3>
            <p>{siteConfig.company.description}</p>
          </div>
          <div className={styles.links}>
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} {siteConfig.company.name}. All rights reserved.</span>
          <span>{siteConfig.company.address}</span>
        </div>
      </div>
    </footer>
  );
}
```

---

## 10. `components/sections/HeroSection.tsx`

```tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { heroData } from "@/config/site";
import styles from "@/styles/hero-section.module.scss";

export function HeroSection() {
  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className={styles.badge}>{heroData.eyebrow}</Badge>
              <h1>{heroData.title}</h1>
              <p>{heroData.description}</p>

              <div className={styles.actions}>
                <Button asChild size="lg">
                  <Link href={heroData.primaryCta.href}>{heroData.primaryCta.label}</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={heroData.secondaryCta.href}>{heroData.secondaryCta.label}</Link>
                </Button>
              </div>

              <div className={styles.highlights}>
                {heroData.highlights.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className={styles.visual}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className={styles.imageWrap}>
              <Image
                src="/images/hero-security.jpg"
                alt="Professional security team at commercial premises"
                fill
                priority
                className={styles.image}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

---

## 11. `components/sections/TrustStrip.tsx`

```tsx
import { siteConfig } from "@/config/site";
import styles from "@/styles/trust-strip.module.scss";

export function TrustStrip() {
  return (
    <section className={styles.strip}>
      <div className="container">
        <div className={styles.items}>
          {siteConfig.trustPoints.map((point) => (
            <span key={point}>{point}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## 12. `components/sections/AboutSection.tsx`

```tsx
import { AnimatedReveal } from "@/components/common/AnimatedReveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import styles from "@/styles/about-section.module.scss";

export function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="About Us"
            title="A disciplined service approach built on trust, responsiveness, and professionalism"
            description="Sumeru Securities delivers dependable security and support manpower for modern businesses, residential communities, institutions, and facilities. Our focus is not just deployment — it is consistent service quality, active supervision, and long-term trust."
          />
        </AnimatedReveal>

        <div className={styles.grid}>
          <AnimatedReveal delay={0.1}>
            <div className={styles.card}>
              <h3>Our Mission</h3>
              <p>
                To provide reliable and well-managed security, manpower, and facility support services that help clients operate with confidence.
              </p>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.2}>
            <div className={styles.card}>
              <h3>Our Vision</h3>
              <p>
                To become a trusted service partner known for discipline, professionalism, and operational consistency.
              </p>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
```

---

## 13. `components/sections/ServicesSection.tsx`

```tsx
import { SectionHeading } from "@/components/common/SectionHeading";
import { AnimatedReveal } from "@/components/common/AnimatedReveal";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/config/site";
import styles from "@/styles/services-section.module.scss";

export function ServicesSection() {
  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title="Integrated security and support services for every type of site"
          description="From front-gate security to housekeeping and manpower deployment, we support operational confidence with dependable teams."
          centered
        />

        <div className={styles.grid}>
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <AnimatedReveal key={service.title} delay={index * 0.08}>
                <Card className={styles.card}>
                  <CardContent className={styles.cardContent}>
                    <div className={styles.iconWrap}>
                      <Icon size={22} />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </CardContent>
                </Card>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

---

## 14. `components/sections/WhyChooseUsSection.tsx`

```tsx
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { reasons } from "@/config/site";
import styles from "@/styles/why-choose-us-section.module.scss";

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Traditional reliability with a more modern standard of service"
              description="We combine on-ground discipline with better presentation, communication, and service management for modern clients."
            />
          </div>

          <div className={styles.list}>
            {reasons.map((reason) => (
              <div key={reason} className={styles.item}>
                <CheckCircle2 size={18} />
                <span>{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## 15. `components/sections/ProcessSection.tsx`

```tsx
import { SectionHeading } from "@/components/common/SectionHeading";
import { processSteps } from "@/config/site";
import styles from "@/styles/process-section.module.scss";

export function ProcessSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading
          eyebrow="How It Works"
          title="A clear engagement process from requirement to deployment"
          centered
        />

        <div className={styles.grid}>
          {processSteps.map((item) => (
            <div key={item.step} className={styles.card}>
              <span className={styles.step}>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## 16. `components/sections/IndustriesSection.tsx`

```tsx
import { SectionHeading } from "@/components/common/SectionHeading";
import { industries } from "@/config/site";
import styles from "@/styles/industries-section.module.scss";

export function IndustriesSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Flexible coverage across residential, commercial, and institutional spaces"
          centered
        />

        <div className={styles.grid}>
          {industries.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className={styles.card}>
                <Icon size={22} />
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

---

## 17. `components/sections/GallerySection.tsx`

```tsx
import Image from "next/image";
import { SectionHeading } from "@/components/common/SectionHeading";
import { galleryImages } from "@/config/site";
import styles from "@/styles/gallery-section.module.scss";

export function GallerySection() {
  return (
    <section id="gallery" className={styles.section}>
      <div className="container">
        <SectionHeading
          eyebrow="Gallery"
          title="A visual look at professional deployment and support environments"
          centered
        />

        <div className={styles.grid}>
          {galleryImages.map((image) => (
            <div key={image.src} className={styles.imageCard}>
              <Image src={image.src} alt={image.alt} fill className={styles.image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## 18. `components/sections/StatsSection.tsx`

```tsx
import { stats } from "@/config/site";
import styles from "@/styles/stats-section.module.scss";

export function StatsSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((item) => (
            <div key={item.label} className={styles.card}>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## 19. `components/sections/FaqSection.tsx`

```tsx
import { SectionHeading } from "@/components/common/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/config/site";
import styles from "@/styles/faq-section.module.scss";

export function FaqSection() {
  return (
    <section id="faq" className={styles.section}>
      <div className="container smallContainer">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          centered
        />

        <Accordion type="single" collapsible className={styles.accordion}>
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
```

---

## 20. `components/sections/ContactSection.tsx`

```tsx
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/common/SectionHeading";
import { siteConfig } from "@/config/site";
import styles from "@/styles/contact-section.module.scss";

export function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let’s discuss your security or manpower requirements"
              description="Share your requirement and our team will get in touch with you for the right deployment plan."
            />

            <div className={styles.details}>
              <a href={siteConfig.company.phoneHref}>{siteConfig.company.phone}</a>
              <a href={siteConfig.company.emailHref}>{siteConfig.company.email}</a>
              <p>{siteConfig.company.address}</p>
              <Button asChild variant="outline">
                <Link href={siteConfig.company.whatsappHref} target="_blank">
                  WhatsApp Us
                </Link>
              </Button>
            </div>
          </div>

          <form className={styles.form}>
            <Input placeholder="Your name" />
            <Input placeholder="Phone number" />
            <Input placeholder="Email address" />
            <Textarea placeholder="Tell us about your requirement" rows={6} />
            <Button type="submit" size="lg">Send Inquiry</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
```

---

## 21. `app/globals.scss`

```scss
@use "../styles/variables" as *;

:root {
  --background: #0d1523;
  --foreground: #f7f2e8;
  --card: #121d2d;
  --card-foreground: #f7f2e8;
  --primary: #c5a46d;
  --primary-foreground: #0f1723;
  --muted: #182334;
  --muted-foreground: #c8d0db;
  --border: rgba(255, 255, 255, 0.1);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background:
    radial-gradient(circle at top, rgba(197, 164, 109, 0.14), transparent 22%),
    linear-gradient(180deg, #0b1220 0%, #111b2c 100%);
  color: #f7f2e8;
  font-family: Arial, Helvetica, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
}

section {
  scroll-margin-top: 90px;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.smallContainer {
  width: min(860px, calc(100% - 32px));
  margin: 0 auto;
}

h1,
h2,
h3,
h4 {
  font-family: Georgia, "Times New Roman", serif;
  letter-spacing: -0.02em;
}
```

---

## 22. Full SCSS files

### `styles/variables.scss`

```scss
$bg-dark: #0b1220;
$bg-surface: #101a2b;
$bg-card: rgba(255, 255, 255, 0.04);
$bg-card-strong: rgba(255, 255, 255, 0.06);
$gold: #c5a46d;
$gold-soft: #f3d8a6;
$text-main: #f7f2e8;
$text-muted: #d8e0ea;
$text-dim: #aeb9c8;
$border: rgba(255, 255, 255, 0.1);
$border-strong: rgba(197, 164, 109, 0.28);
$shadow: 0 24px 80px rgba(0, 0, 0, 0.28);
$radius-sm: 14px;
$radius-md: 20px;
$radius-lg: 28px;
$radius-pill: 999px;
$container: 1180px;
$container-sm: 860px;
$header-height: 76px;
$transition: 0.3s ease;
```

### `styles/mixins.scss`

```scss
@use "./variables" as *;

@mixin section-spacing {
  padding: 5rem 0;
}

@mixin card-surface {
  border: 1px solid $border;
  background: $bg-card;
  backdrop-filter: blur(10px);
  border-radius: $radius-md;
}

@mixin hover-lift {
  transition:
    transform $transition,
    border-color $transition,
    background $transition,
    box-shadow $transition;

  &:hover {
    transform: translateY(-4px);
    border-color: $border-strong;
    background: $bg-card-strong;
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.2);
  }
}

@mixin grid-auto($min) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax($min, 1fr));
  gap: 1.5rem;
}

@mixin section-title {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3.25rem);
  line-height: 1.1;
}

@mixin body-copy {
  color: $text-muted;
  line-height: 1.8;
}

@mixin mobile {
  @media (max-width: 900px) {
    @content;
  }
}
```

### `styles/section-heading.module.scss`

```scss
@use "./variables" as *;

.wrapper {
  max-width: 720px;
  margin-bottom: 2.25rem;
}

.centered {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 0.85rem;
  border-radius: $radius-pill;
  border: 1px solid $border-strong;
  background: rgba(197, 164, 109, 0.1);
  color: $gold-soft;
  font-size: 0.85rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.title {
  margin: 1rem 0 0;
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1.1;
}

.description {
  margin: 1rem 0 0;
  color: $text-muted;
  line-height: 1.8;
  font-size: 1.02rem;
}
```

### `styles/header.module.scss`

```scss
@use "./variables" as *;

.header {
  position: sticky;
  top: 0;
  z-index: 50;
  height: $header-height;
  border-bottom: 1px solid $border;
  background: rgba(11, 18, 32, 0.78);
  backdrop-filter: blur(14px);

  :global(.container) {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
}

.logo {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.35rem;
  font-weight: 700;
  color: $text-main;
}

.desktopNav {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.navLink {
  color: $text-dim;
  transition: color $transition;

  &:hover {
    color: $text-main;
  }
}

.desktopCta {
  display: flex;
}

.mobileNav {
  display: none;
}

.sheetContent {
  border-left: 1px solid $border;
  background: #0f1828;
}

.mobileMenuInner {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2rem;
}

.mobileLink {
  font-size: 1rem;
  color: $text-main;
}

@media (max-width: 900px) {
  .desktopNav,
  .desktopCta {
    display: none;
  }

  .mobileNav {
    display: flex;
  }
}
```

### `styles/footer.module.scss`

```scss
@use "./variables" as *;

.footer {
  padding: 2.5rem 0;
  border-top: 1px solid $border;
  background: rgba(255, 255, 255, 0.02);
}

.top {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding-bottom: 1.5rem;
}

.top h3 {
  margin: 0 0 0.75rem;
}

.top p {
  max-width: 560px;
  color: $text-muted;
  line-height: 1.8;
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-content: flex-start;
}

.links a {
  color: $text-dim;
}

.bottom {
  padding-top: 1.25rem;
  border-top: 1px solid $border;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  color: $text-dim;
  font-size: 0.95rem;
}

@media (max-width: 900px) {
  .top,
  .bottom {
    flex-direction: column;
  }
}
```

### `styles/hero-section.module.scss`

```scss
@use "./variables" as *;

.hero {
  padding: 8rem 0 4rem;
}

.grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 2rem;
  align-items: center;
}

.content h1 {
  margin: 1rem 0;
  font-size: clamp(2.5rem, 6vw, 4.75rem);
  line-height: 1.05;
}

.content p {
  max-width: 640px;
  color: $text-muted;
  font-size: 1.05rem;
  line-height: 1.8;
}

.badge {
  border: 1px solid $border-strong;
  background: rgba(197, 164, 109, 0.12);
  color: $gold-soft;
}

.actions {
  display: flex;
  gap: 1rem;
  margin-top: 1.75rem;
  flex-wrap: wrap;
}

.highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.highlights span {
  padding: 0.75rem 1rem;
  border: 1px solid $border;
  border-radius: $radius-pill;
  background: rgba(255, 255, 255, 0.04);
  font-size: 0.92rem;
}

.visual {
  position: relative;
}

.imageWrap {
  position: relative;
  min-height: 560px;
  overflow: hidden;
  border-radius: $radius-lg;
  border: 1px solid $border;
  box-shadow: $shadow;
}

.image {
  object-fit: cover;
}

@media (max-width: 900px) {
  .hero {
    padding-top: 6rem;
  }

  .grid {
    grid-template-columns: 1fr;
  }

  .imageWrap {
    min-height: 380px;
  }
}
```

### `styles/trust-strip.module.scss`

```scss
@use "./variables" as *;

.strip {
  padding: 1rem 0 0;
}

.items {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}

.items span {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 58px;
  padding: 0.9rem 1rem;
  text-align: center;
  border: 1px solid $border;
  border-radius: $radius-pill;
  background: rgba(255, 255, 255, 0.04);
  color: $text-main;
  font-size: 0.94rem;
}

@media (max-width: 900px) {
  .items {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 520px) {
  .items {
    grid-template-columns: 1fr;
  }
}
```

### `styles/about-section.module.scss`

```scss
@use "./variables" as *;
@use "./mixins" as *;

.section {
  @include section-spacing;
}

.grid {
  @include grid-auto(280px);
}

.card {
  @include card-surface;
  padding: 1.75rem;
}

.card h3 {
  margin: 0 0 0.75rem;
  font-size: 1.4rem;
}

.card p {
  margin: 0;
  color: $text-muted;
  line-height: 1.8;
}
```

### `styles/services-section.module.scss`

```scss
@use "./variables" as *;
@use "./mixins" as *;

.section {
  @include section-spacing;
}

.grid {
  @include grid-auto(260px);
}

.card {
  @include card-surface;
  @include hover-lift;
  height: 100%;
}

.cardContent {
  padding: 1.5rem;
}

.iconWrap {
  width: 52px;
  height: 52px;
  border-radius: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid $border-strong;
  background: rgba(197, 164, 109, 0.1);
  color: $gold-soft;
  margin-bottom: 1rem;
}

.card h3 {
  margin: 0 0 0.7rem;
  font-size: 1.3rem;
}

.card p {
  margin: 0;
  color: $text-muted;
  line-height: 1.75;
}
```

### `styles/why-choose-us-section.module.scss`

```scss
@use "./variables" as *;
@use "./mixins" as *;

.section {
  @include section-spacing;
}

.grid {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 2rem;
  align-items: start;
}

.list {
  display: grid;
  gap: 1rem;
}

.item {
  @include card-surface;
  display: flex;
  align-items: flex-start;
  gap: 0.9rem;
  padding: 1.2rem 1.25rem;
}

.item svg {
  color: $gold;
  margin-top: 0.15rem;
  flex-shrink: 0;
}

.item span {
  color: $text-main;
  line-height: 1.7;
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
```

### `styles/process-section.module.scss`

```scss
@use "./variables" as *;
@use "./mixins" as *;

.section {
  @include section-spacing;
}

.grid {
  @include grid-auto(240px);
}

.card {
  @include card-surface;
  padding: 1.6rem;
  position: relative;
  overflow: hidden;
}

.step {
  display: inline-flex;
  margin-bottom: 1rem;
  color: $gold-soft;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.4rem;
}

.card h3 {
  margin: 0 0 0.7rem;
  font-size: 1.25rem;
}

.card p {
  margin: 0;
  color: $text-muted;
  line-height: 1.75;
}
```

### `styles/industries-section.module.scss`

```scss
@use "./variables" as *;
@use "./mixins" as *;

.section {
  @include section-spacing;
}

.grid {
  @include grid-auto(180px);
}

.card {
  @include card-surface;
  @include hover-lift;
  min-height: 132px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.85rem;
  text-align: center;
  padding: 1.2rem;
}

.card svg {
  color: $gold;
}

.card span {
  color: $text-main;
}
```

### `styles/gallery-section.module.scss`

```scss
@use "./variables" as *;
@use "./mixins" as *;

.section {
  @include section-spacing;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.imageCard {
  position: relative;
  min-height: 280px;
  overflow: hidden;
  border-radius: 22px;
  border: 1px solid $border;
  background: rgba(255, 255, 255, 0.03);
}

.image {
  object-fit: cover;
  transition: transform 0.5s ease;
}

.imageCard:hover .image {
  transform: scale(1.05);
}

@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
```

### `styles/stats-section.module.scss`

```scss
@use "./variables" as *;
@use "./mixins" as *;

.section {
  @include section-spacing;
  padding-top: 1rem;
}

.grid {
  @include grid-auto(220px);
}

.card {
  @include card-surface;
  text-align: center;
  padding: 2rem 1.25rem;
}

.card h3 {
  margin: 0;
  color: $gold-soft;
  font-size: clamp(2rem, 4vw, 3rem);
}

.card p {
  margin: 0.5rem 0 0;
  color: $text-muted;
}
```

### `styles/faq-section.module.scss`

```scss
@use "./variables" as *;
@use "./mixins" as *;

.section {
  @include section-spacing;
}

.accordion {
  border: 1px solid $border;
  border-radius: $radius-md;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.03);
  padding: 0 1rem;
}

.accordion :global([data-state="open"]) {
  color: $text-main;
}

.accordion :global(button) {
  color: $text-main;
}

.accordion :global(.text-sm),
.accordion :global([data-radix-accordion-content]) {
  color: $text-muted;
}
```

### `styles/contact-section.module.scss`

```scss
@use "./variables" as *;
@use "./mixins" as *;

.section {
  @include section-spacing;
}

.grid {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 2rem;
  align-items: start;
}

.details {
  display: grid;
  gap: 0.85rem;
  margin-top: 1.5rem;
}

.details a,
.details p {
  margin: 0;
  color: $text-muted;
  line-height: 1.8;
}

.form {
  @include card-surface;
  display: grid;
  gap: 1rem;
  padding: 1.5rem;
}

.form :global(input),
.form :global(textarea) {
  border-color: $border;
  background: rgba(255, 255, 255, 0.03);
  color: $text-main;
}

.form :global(input::placeholder),
.form :global(textarea::placeholder) {
  color: $text-dim;
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
```

---

## 23. Banner / poster / image prompts

### Main hero banner
```txt
Create a premium website hero banner for Sumeru Securities, a security and manpower services company in India. Show a confident uniformed security guard in the foreground, modern commercial architecture in the background, realistic photography style, elegant navy and muted gold color grading, cinematic light, premium corporate brand mood, trustworthy and disciplined tone, wide composition with clean negative space for website headline text.
```

### Integrated services poster
```txt
Create a high-end vertical poster for Sumeru Securities featuring three professionals: a security guard, a housekeeping staff member, and a manpower worker. Use an Indian commercial setting, premium navy, charcoal and muted gold color palette, realistic photography style, modern luxury corporate aesthetic, strong disciplined posture, clean text space for service branding.
```

### Gallery set
```txt
Generate realistic images for an Indian security services website: professional guards at office entrances, patrol duty at a commercial building, CCTV monitoring station, housekeeping staff working in a clean corporate lobby, premium documentary photography style.
```

---

## 24. What you should do next in your actual project

1. Create the folders and files from above.
2. Paste the config first.
3. Build page composition.
4. Add section modules one by one.
5. Add your real images into `public/images`.
6. Connect the contact form to API / email service later.
7. Add sitemap and robots after deployment.

---

## 25. Best improvements after this starter

- add Swiper hero if you want multiple banners
- add number counter animation in stats
- add testimonial slider
- connect form with Resend / Formspree / custom API
- add sticky WhatsApp floating button
- add FAQ schema and Organization schema in more detail
- add optimized local SEO copy for Delhi NCR

---

## 26. Recommended visual content set

Create these assets first:
- 1 hero banner
- 4 gallery images
- 2 service posters
- 1 og image for social sharing

---

## 27. Suggested image filenames

```txt
public/images/
  hero-security.jpg
  gallery-1.jpg
  gallery-2.jpg
  gallery-3.jpg
  gallery-4.jpg
  poster-corporate-security.jpg
  poster-housekeeping.jpg
  og-image.jpg
```


https://github.com/Anujsharma2590/sumeru-client.git
Updates: 

use Logo, and favicon, 
#f36f23 this is the color of logo, so please choose color pallette or theme based on this color?
please use poster and images, or images parallex effect, and let me know the size and what type and description of the images, then i will add this later in public folder.

please read from  @Sumeru-Securities-Profile and i have added bodyguard images also




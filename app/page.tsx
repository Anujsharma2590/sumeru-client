import dynamic from "next/dynamic";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { ContactSection } from "@/components/sections/ContactSection";

const TestimonialsSection = dynamic(
  () => import("@/components/sections/TestimonialsSection").then((m) => m.TestimonialsSection),
);
const ProcessSection = dynamic(
  () => import("@/components/sections/ProcessSection").then((m) => m.ProcessSection),
);
const IndustriesSection = dynamic(
  () => import("@/components/sections/IndustriesSection").then((m) => m.IndustriesSection),
);
const ParallaxSection = dynamic(
  () => import("@/components/sections/ParallaxSection").then((m) => m.ParallaxSection),
);
const GallerySection = dynamic(
  () => import("@/components/sections/GallerySection").then((m) => m.GallerySection),
);
const StatsSection = dynamic(
  () => import("@/components/sections/StatsSection").then((m) => m.StatsSection),
);
const FaqSection = dynamic(
  () => import("@/components/sections/FaqSection").then((m) => m.FaqSection),
);

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <TrustStrip />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <ProcessSection />
        <IndustriesSection />
        <ParallaxSection />
        <GallerySection />
        <StatsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
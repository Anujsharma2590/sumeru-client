import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ParallaxSection } from "@/components/sections/ParallaxSection";
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
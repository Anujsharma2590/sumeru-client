"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { heroData, heroBanners } from "@/config/site";
import styles from "@/styles/hero-section.module.scss";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export function HeroSection() {
  const useSwiper = heroBanners.length > 1;

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroBgWrap} aria-hidden>
        {useSwiper ? (
          <Swiper
            className={styles.heroSwiper}
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            allowTouchMove={false}
            speed={600}
          >
            {heroBanners.map((src, index) => (
              <SwiperSlide key={`hero-bg-${index}`}>
                <div
                  className={styles.heroBgSlide}
                  style={{ backgroundImage: `url(${src})` }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div
            className={styles.heroBgSlide}
            style={{
              backgroundImage: `url(${heroBanners[0] ?? "/images/hero-security.png"})`,
            }}
          />
        )}
      </div>
      <div className={styles.heroOverlay} aria-hidden />
      <div className={styles.heroContent}>
        <div className="container">
          <motion.div
            className={styles.grid}
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <div className={styles.content}>
              <motion.div variants={itemUp} transition={{ duration: 0.5 }}>
                <Badge className={styles.badge}>{heroData.eyebrow}</Badge>
              </motion.div>
              <motion.h1
                variants={itemUp}
                transition={{ duration: 0.5 }}
                className={styles.title}
              >
                <span className={styles.titleHighlight}>
                  {heroData.titleHighlight}
                </span>
                {heroData.titleRest}
              </motion.h1>
              <motion.p
                variants={itemUp}
                transition={{ duration: 0.5 }}
                className={styles.description}
              >
                {heroData.description}
              </motion.p>

              <motion.div
                className={styles.actions}
                variants={itemUp}
                transition={{ duration: 0.5 }}
              >
                <Button asChild size="lg" className={styles.ctaPrimary}>
                  <Link href={heroData.primaryCta.href}>
                    {heroData.primaryCta.label}
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className={styles.ctaSecondary}
                >
                  <Link href={heroData.secondaryCta.href}>
                    {heroData.secondaryCta.label}
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                className={styles.highlights}
                variants={itemUp}
                transition={{ duration: 0.5 }}
              >
                {heroData.highlights.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
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
            <Parallax speed={8} className={styles.imageParallax}>
              <div className={styles.imageWrap}>
                <Image
                  src="/images/hero-security.jpg"
                  alt="Professional security team at commercial premises"
                  fill
                  priority
                  className={styles.image}
                />
              </div>
            </Parallax>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

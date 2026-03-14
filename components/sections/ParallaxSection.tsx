"use client";

import { Parallax } from "react-scroll-parallax";
import styles from "@/styles/parallax-section.module.scss";

export function ParallaxSection() {
  return (
    <section className={styles.parallax} aria-label="Tagline">
      <Parallax speed={-20} className={styles.parallaxLayer}>
        <div className={styles.bgImage} aria-hidden="true" />
      </Parallax>
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.content}>
        <p className={styles.tagline}>Trusted across sectors</p>
        <p className={styles.sub}>
          Security, manpower & facility support — one partner.
        </p>
      </div>
    </section>
  );
}

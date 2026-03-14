import { AnimatedReveal } from "@/components/common/AnimatedReveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { aboutContent } from "@/config/site";
import styles from "@/styles/about-section.module.scss";

export function AboutSection() {
  return (
    <section id="about" className={styles.section} aria-label="About us">
      <div className="container">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="About Us"
            title="A disciplined service approach built on trust, responsiveness, and professionalism"
            description={aboutContent.intro}
          />
        </AnimatedReveal>

        <div className={styles.grid}>
          <AnimatedReveal delay={0.1}>
            <div className={styles.card}>
              <h3>Our Vision</h3>
              <p>{aboutContent.vision}</p>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.2}>
            <div className={styles.card}>
              <h3>Our Mission</h3>
              <p>{aboutContent.mission}</p>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
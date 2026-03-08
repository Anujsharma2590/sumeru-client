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
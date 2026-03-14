import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { reasons } from "@/config/site";
import styles from "@/styles/why-choose-us-section.module.scss";

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className={styles.section} aria-label="Why choose us">
      <div className="container">
        <div className={styles.grid}>
          <div>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Traditional reliability with a more modern standard of service"
              description="We combine on-ground discipline with better presentation, communication, and service management for modern clients."
            />
          </div>

          <ul className={styles.list} role="list">
            {reasons.map((reason) => (
              <li key={reason} className={styles.item}>
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
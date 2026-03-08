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
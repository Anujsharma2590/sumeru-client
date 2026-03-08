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
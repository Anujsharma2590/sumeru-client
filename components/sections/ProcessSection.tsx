import { SectionHeading } from "@/components/common/SectionHeading";
import { processSteps } from "@/config/site";
import styles from "@/styles/process-section.module.scss";

export function ProcessSection() {
  return (
    <section id="process" className={styles.section} aria-label="Our process">
      <div className="container">
        <SectionHeading
          eyebrow="How It Works"
          title="A clear engagement process from requirement to deployment"
          centered
        />

        <ol className={styles.grid} role="list">
          {processSteps.map((item) => (
            <li key={item.step} className={styles.card}>
              <span className={styles.step} aria-hidden="true">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
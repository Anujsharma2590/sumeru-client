import { siteConfig } from "@/config/site";
import styles from "@/styles/trust-strip.module.scss";

export function TrustStrip() {
  return (
    <section className={styles.strip} aria-label="Trust highlights">
      <div className="container">
        <ul className={styles.items} role="list">
          {siteConfig.trustPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
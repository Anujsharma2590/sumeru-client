import { siteConfig } from "@/config/site";
import styles from "@/styles/trust-strip.module.scss";

export function TrustStrip() {
  return (
    <section className={styles.strip}>
      <div className="container">
        <div className={styles.items}>
          {siteConfig.trustPoints.map((point) => (
            <span key={point}>{point}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
import { stats } from "@/config/site";
import styles from "@/styles/stats-section.module.scss";

export function StatsSection() {
  return (
    <section className={styles.section} aria-label="Company statistics">
      <div className="container">
        <div className={styles.grid} role="list">
          {stats.map((item) => (
            <div key={item.label} className={styles.card} role="listitem">
              <h3 aria-label={`${item.value} ${item.label}`}>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
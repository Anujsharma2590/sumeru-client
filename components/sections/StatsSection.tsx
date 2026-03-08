import { stats } from "@/config/site";
import styles from "@/styles/stats-section.module.scss";

export function StatsSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((item) => (
            <div key={item.label} className={styles.card}>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
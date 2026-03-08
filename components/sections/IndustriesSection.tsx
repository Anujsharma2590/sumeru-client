import { SectionHeading } from "@/components/common/SectionHeading";
import { industries } from "@/config/site";
import styles from "@/styles/industries-section.module.scss";

export function IndustriesSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Flexible coverage across residential, commercial, and institutional spaces"
          centered
        />

        <div className={styles.grid}>
          {industries.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className={styles.card}>
                <Icon size={22} />
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
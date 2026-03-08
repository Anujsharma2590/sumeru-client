import { SectionHeading } from "@/components/common/SectionHeading";
import { AnimatedReveal } from "@/components/common/AnimatedReveal";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/config/site";
import styles from "@/styles/services-section.module.scss";

export function ServicesSection() {
  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title="Integrated security and support services for every type of site"
          description="From front-gate security to housekeeping and manpower deployment, we support operational confidence with dependable teams."
          centered
        />

        <div className={styles.grid}>
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <AnimatedReveal key={service.title} delay={index * 0.08}>
                <Card className={styles.card}>
                  <CardContent className={styles.cardContent}>
                    <div className={styles.iconWrap}>
                      <Icon size={22} />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </CardContent>
                </Card>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
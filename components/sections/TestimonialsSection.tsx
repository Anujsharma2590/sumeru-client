import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { AnimatedReveal } from "@/components/common/AnimatedReveal";
import { testimonials } from "@/config/site";
import styles from "@/styles/testimonials-section.module.scss";

export function TestimonialsSection() {
  return (
    <section className={styles.section} aria-label="Client testimonials">
      <div className="container">
        <SectionHeading
          eyebrow="Client Testimonials"
          title="What our clients say about us"
          centered
        />

        <div className={styles.grid} role="list">
          {testimonials.map((testimonial, index) => (
            <AnimatedReveal key={testimonial.company} delay={index * 0.1}>
              <article className={styles.card} role="listitem">
                <Quote className={styles.quoteIcon} size={28} aria-hidden="true" />
                <blockquote className={styles.quote}>{testimonial.quote}</blockquote>
                <cite className={styles.company}>— {testimonial.company}</cite>
              </article>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

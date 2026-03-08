"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { faqs } from "@/config/site";
import styles from "@/styles/faq-section.module.scss";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className={styles.section}>
      <div className="container smallContainer">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          centered
        />

        <div className={styles.faqList} role="list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const triggerId = `faq-trigger-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={faq.question}
                className={styles.faqItem}
                role="listitem"
              >
                <button
                  type="button"
                  id={triggerId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(index)}
                  className={styles.faqTrigger}
                >
                  <span className={styles.faqQuestion}>{faq.question}</span>
                  <span className={styles.faqIcon} aria-hidden>
                    {isOpen ? (
                      <Minus size={20} strokeWidth={2.5} />
                    ) : (
                      <Plus size={20} strokeWidth={2.5} />
                    )}
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  className={styles.faqPanel}
                  data-open={isOpen}
                >
                  <div className={styles.faqContent}>{faq.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

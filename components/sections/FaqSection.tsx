import { SectionHeading } from "@/components/common/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/config/site";
import styles from "@/styles/faq-section.module.scss";

export function FaqSection() {
  return (
    <section id="faq" className={styles.section}>
      <div className="container smallContainer">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          centered
        />

        <Accordion type="single" collapsible className={styles.accordion}>
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/common/SectionHeading";
import { siteConfig } from "@/config/site";
import styles from "@/styles/contact-section.module.scss";

export function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let’s discuss your security or manpower requirements"
              description="Share your requirement and our team will get in touch with you for the right deployment plan."
            />

            <div className={styles.details}>
              <a href={siteConfig.company.phoneHref}>{siteConfig.company.phone}</a>
              <a href={siteConfig.company.emailHref}>{siteConfig.company.email}</a>
              <p>{siteConfig.company.address}</p>
              <Button asChild variant="outline">
                <Link href={siteConfig.company.whatsappHref} target="_blank">
                  WhatsApp Us
                </Link>
              </Button>
            </div>
          </div>

          <form className={styles.form}>
            <Input placeholder="Your name" />
            <Input placeholder="Phone number" />
            <Input placeholder="Email address" />
            <Textarea placeholder="Tell us about your requirement" rows={6} />
            <Button type="submit" size="lg">Send Inquiry</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
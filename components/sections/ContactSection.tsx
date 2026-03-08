import Link from "next/link";
import { Mail, Phone, MessageCircle } from "lucide-react";
import styles from "@/styles/contact-section.module.scss";
import { siteConfig } from "@/config/site";

const contactItems = [
  {
    title: "Call Us",
    description: "Speak with our team for service inquiries and deployment support.",
    href: siteConfig.company.phones?.[0]?.href || "#",
    label: siteConfig.company.phones?.[0]?.number || "Contact Number",
    icon: Phone,
  },
  {
    title: "Email",
    description: "Send us your requirement and our team will get back to you soon.",
    href: siteConfig.company.emailHref,
    label: siteConfig.company.email,
    icon: Mail,
  },
  {
    title: "WhatsApp",
    description: "Connect with us directly for quick assistance and consultations.",
    href: siteConfig.company.whatsappHref,
    label: "Chat on WhatsApp",
    icon: MessageCircle,
    external: true,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <span className={styles.eyebrow}>Contact</span>

            <h2 className={styles.title}>Contact us</h2>

            <p className={styles.description}>
              Reach out to Sumeru Securities for trained security personnel,
              armed guards, housekeeping staff, CCTV support, and manpower deployment.
              Our team is here to help with the right solution for your site.
            </p>
          </div>

          <div className={styles.contactGrid}>
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className={styles.card}>
                  <div className={styles.iconBox}>
                    <Icon size={20} strokeWidth={2.2} />
                  </div>

                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDescription}>{item.description}</p>

                  <Link
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer noopener" : undefined}
                    className={styles.cardLink}
                  >
                    {item.label}
                  </Link>
                </article>
              );
            })}
          </div>

          <div className={styles.addressBlock}>
            <h3 className={styles.addressTitle}>Office Address</h3>
            <p className={styles.addressText}>{siteConfig.company.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
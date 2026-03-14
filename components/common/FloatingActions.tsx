import Image from "next/image";
import { siteConfig } from "@/config/site";
import styles from "@/styles/floating-actions.module.scss";

export function FloatingActions() {
  return (
    <div className={styles.wrapper} aria-label="Quick contact">
      <a
        href={siteConfig.company.whatsappHref}
        target="_blank"
        rel="noreferrer noopener"
        className={`${styles.fab} ${styles.whatsapp}`}
        aria-label="Chat on WhatsApp"
      >
        <Image
          src="/icons/whatsapp.png"
          alt=""
          width={32}
          height={32}
          sizes="32px"
        />
      </a>
      <a
        href={siteConfig.company.phoneHref}
        className={`${styles.fab} ${styles.call}`}
        aria-label="Call us"
      >
        <Image
          src="/icons/icons-call.png"
          alt=""
          width={28}
          height={28}
          sizes="28px"
        />
      </a>
    </div>
  );
}

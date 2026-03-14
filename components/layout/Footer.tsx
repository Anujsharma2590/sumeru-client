import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import styles from "@/styles/footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.top}>
          <div>
            <Link href="#home" className={styles.footerLogo} aria-label="Sumeru Securities - Home">
              <Image
                src="/logo.png"
                alt="Sumeru Securities and Consultants LLP"
                width={140}
                height={42}
                sizes="140px"
                loading="lazy"
                className={styles.footerLogoImage}
              />
            </Link>
            <h3>{siteConfig.company.name}</h3>
            <p>{siteConfig.company.description}</p>
          </div>
          <nav className={styles.links} aria-label="Footer navigation">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} {siteConfig.company.name}. All rights reserved.</span>
          <address>{siteConfig.company.address}</address>
        </div>
      </div>
    </footer>
  );
}
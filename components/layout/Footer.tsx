import Link from "next/link";
import { siteConfig } from "@/config/site";
import styles from "@/styles/footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div>
            <h3>{siteConfig.company.name}</h3>
            <p>{siteConfig.company.description}</p>
          </div>
          <div className={styles.links}>
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} {siteConfig.company.name}. All rights reserved.</span>
          <span>{siteConfig.company.address}</span>
        </div>
      </div>
    </footer>
  );
}
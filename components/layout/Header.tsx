"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";
import styles from "@/styles/header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <Link href="#home" className={styles.logo}>
          {siteConfig.company.shortName}
        </Link>

        <nav className={styles.desktopNav}>
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.desktopCta}>
          <Button asChild>
            <Link href="#contact">Get Quote</Link>
          </Button>
        </div>

        <div className={styles.mobileNav}>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu size={18} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className={styles.sheetContent}>
              <div className={styles.mobileMenuInner}>
                {siteConfig.nav.map((item) => (
                  <Link key={item.href} href={item.href} className={styles.mobileLink}>
                    {item.label}
                  </Link>
                ))}
                <Button asChild>
                  <Link href="#contact">Request Consultation</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

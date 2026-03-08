"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import Drawer from "@mui/material/Drawer";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import styles from "@/styles/header.module.scss";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <Link href="#home" className={styles.logo} aria-label="Sumeru Securities - Home">
          <Image
            src="/logo.png"
            alt="Sumeru Securities and Consultants LLP"
            width={160}
            height={48}
            className={styles.logoImage}
            priority
          />
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
          <button
            type="button"
            className={styles.hamburger}
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={closeMenu}
        slotProps={{
          backdrop: { sx: { backgroundColor: "rgba(0,0,0,0.4)" } },
          paper: {
            sx: {
              width: "min(320px, 85vw)",
              boxSizing: "border-box",
              borderLeft: "1px solid rgba(0,0,0,0.08)",
              boxShadow: "-4px 0 24px rgba(0, 0, 0, 0.12)",
              backgroundColor: "#ffffff",
            },
          },
        }}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        <div className={styles.mobileMenuInner}>
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.mobileLink}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild>
            <Link href="#contact" onClick={closeMenu}>
              Request Consultation
            </Link>
          </Button>
        </div>
      </Drawer>
    </header>
  );
}

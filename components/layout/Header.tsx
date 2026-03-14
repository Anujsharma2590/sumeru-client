"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import styles from "@/styles/header.module.scss";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const openMenu = () => setMobileMenuOpen(true);
  const closeMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx(styles.header, {
        [styles.scrolled]: isScrolled,
      })}
    >
      <div className="container">
        <Link
          href="#home"
          className={styles.logo}
          aria-label="Sumeru Securities - Home"
        >
          <Image
            src="/logo.png"
            alt="Sumeru Securities and Consultants LLP"
            width={160}
            height={48}
            className={styles.logoImage}
            priority
          />
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.desktopCta}>
          <Button
            component={Link}
            href="#contact"
            variant="contained"
            size="large"
            className={styles.ctaButton}
          >
            Talk to Our Team
          </Button>
        </div>

        <div className={styles.mobileNav}>
          <button
            type="button"
            className={styles.hamburger}
            onClick={openMenu}
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
          backdrop: {
            sx: { backgroundColor: "rgba(0,0,0,0.42)" },
          },
          paper: {
            sx: {
              width: "min(340px, 86vw)",
              boxSizing: "border-box",
              borderLeft: "1px solid rgba(0,0,0,0.08)",
              boxShadow: "-8px 0 28px rgba(0,0,0,0.12)",
              backgroundColor: "#ffffff",
            },
          },
        }}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        <div className={styles.mobileMenuInner}>
          <div className={styles.mobileMenuTop}>
            <Image
              src="/logo.png"
              alt="Sumeru Securities and Consultants LLP"
              width={140}
              height={42}
              className={styles.mobileLogoImage}
            />

            <button
              type="button"
              className={styles.closeButton}
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className={styles.mobileMenuNav} aria-label="Mobile navigation">
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
          </nav>

          <div className={styles.mobileCta}>
            <Button
              component={Link}
              href="#contact"
              variant="contained"
              fullWidth
              size="large"
              className={styles.ctaButton}
              onClick={closeMenu}
            >
              Request Consultation
            </Button>
          </div>
        </div>
      </Drawer>
    </header>
  );
}
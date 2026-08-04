"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { Shield, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export function Navbar({ onOpenConsultation }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar} id="navbar">
      <div className={`container ${styles.navInner}`}>
        <Link href="/" className={styles.navLogo} id="nav-logo">
          <img
            src="https://assets.cdn.filesafe.space/ApWkZ2IFXdvkS2AT3Tqg/media/691d0ba7c2cf864910f19e13.png"
            alt="SGSS Logo"
            className={styles.logoImg}
          />
          <div className={styles.navBrandContainer}>
            <span className={styles.brandTitle}>Secure Guard</span>
            <span className={styles.brandSubtitle}>SecureTrack Technology</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <ul className={styles.navLinks}>
          <li>
            <Link href="#trust-gap" className={styles.navLink}>
              The Trust Gap
            </Link>
          </li>
          <li>
            <Link href="#securetrack" className={styles.navLink}>
              SecureTrack
            </Link>
          </li>
          <li>
            <Link href="#how-it-helps" className={styles.navLink}>
              How It Helps
            </Link>
          </li>
          <li>
            <Link href="#features" className={styles.navLink}>
              Features
            </Link>
          </li>
          <li>
            <button
              onClick={onOpenConsultation}
              className={styles.navCta}
              id="nav-cta"
            >
              <Shield className="w-4 h-4 inline mr-1.5" />
              Schedule Free Consultation
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className={styles.mobileMenuToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className={styles.mobileDropdown}>
          <Link
            href="#trust-gap"
            className={styles.mobileNavLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            The Trust Gap
          </Link>
          <Link
            href="#securetrack"
            className={styles.mobileNavLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            SecureTrack
          </Link>
          <Link
            href="#how-it-helps"
            className={styles.mobileNavLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            How It Helps
          </Link>
          <Link
            href="#features"
            className={styles.mobileNavLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </Link>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenConsultation) onOpenConsultation();
            }}
            className={styles.mobileCta}
          >
            Schedule Free Consultation
          </button>
        </div>
      )}
    </nav>
  );
}

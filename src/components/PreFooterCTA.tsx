"use client";

import React from "react";
import styles from "./PreFooterCTA.module.css";
import { ShieldCheck, Calendar } from "lucide-react";

interface PreFooterCTAProps {
  onOpenConsultation?: () => void;
}

export function PreFooterCTA({ onOpenConsultation }: PreFooterCTAProps) {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.badge}>
          <ShieldCheck size={16} />
          Total Visibility & Oversight
        </div>
        <h2 className={styles.heading}>
          Are you ready to see exactly what happens during every shift?
        </h2>
        <div className={styles.subtext}>
          <p>
            You are running a business, not a security agency. SecureTrack gives you the oversight you need to hold your security team accountable, optimize patrol routes, and document site activity without the headache of manual paperwork.
          </p>
        </div>
        <div className={styles.buttons}>
          <button
            onClick={onOpenConsultation}
            className={styles.btnPrimary}
          >
            <Calendar size={18} />
            Schedule a Demo of SecureTrack
          </button>
          <a
            href="tel:1-888-908-7818"
            className={styles.btnSecondary}
          >
            Speak to a Specialist (1-888-908-7818)
          </a>
        </div>
      </div>
    </section>
  );
}

export default PreFooterCTA;

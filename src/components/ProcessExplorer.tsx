"use client";

import React, { useState } from "react";
import { 
  MapPin, 
  FileSpreadsheet, 
  Bell, 
  Clock, 
  FileCheck, 
  Globe 
} from "lucide-react";
import styles from "./ProcessExplorer.module.css";

const processItems = [
  {
    title: "GPS Checkpoints",
    shortTitle: "GPS Checkpoints",
    description: "Electronic Near Field Communication (NFC) and Quick Response (QR) code scan tags installed at high-risk site zones, such as stairwells, parking structures, loading docks, and perimeter gates, record exact location data using GPS technology as officers complete their rounds. System algorithms log each scan in real time, confirm 100% route completion, and instantly flag skipped or delayed checkpoints to central dispatch.",
    icon: MapPin,
    label: "GPS Patrols"
  },
  {
    title: "Daily Activity Reports",
    shortTitle: "Daily Reports",
    description: "At the end of every shift, SecureTrack automatically compiles visitor registries, parking enforcement logs, vendor check-ins, and patrol checkpoint scans into a clean Daily Activity Report (DAR). Delivered straight to your inbox daily, these automated summaries deliver organized, professional records without missing paperwork or illegible handwriting.",
    icon: FileSpreadsheet,
    label: "Shift Summary"
  },
  {
    title: "Instant Alerts",
    shortTitle: "Instant Alerts",
    description: "High-level security incidents, property breaches, or urgent safety hazards trigger automated email and SMS text alerts directly to designated property management personnel the moment they are logged on site. This ensures immediate management awareness and enables swift decision-making without waiting for end-of-shift reporting.",
    icon: Bell,
    label: "Real-Time Alerts"
  },
  {
    title: "Timekeeping",
    shortTitle: "Timekeeping",
    description: "Guard clock-in and clock-out activity is verified via geofenced GPS positioning on officers' mobile devices. This guarantees that personnel are physically present on site before their shift begins, eliminating time-card manipulation, preventing post abandonment, and ensuring continuous property coverage.",
    icon: Clock,
    label: "GPS Verification"
  },
  {
    title: "Digital Shift Logs",
    shortTitle: "Shift Logs",
    description: "Daily post instructions, temporary access passes, active maintenance tickets, and emergency contacts are stored digitally on officers' devices. Shift handoff logs require incoming personnel to review and acknowledge open site items, maintaining uninterrupted operational continuity across guard transitions.",
    icon: FileCheck,
    label: "Site Operations"
  },
  {
    title: "Client Portal",
    shortTitle: "Client Portal",
    description: "Authorized management personnel gain full web-based access to a real-time portal 24 hours a day, 7 days a week from any desktop or mobile device. The dashboard allows you to review live patrol feeds, filter historical incident archives, download site analytics, and verify supervisor audit reports at your convenience.",
    icon: Globe,
    label: "24/7 Access"
  }
];

export function ProcessExplorer() {
  const [activeTab, setActiveTab] = useState(0);
  const activeItem = processItems[activeTab];
  const IconComponent = activeItem.icon;

  return (
    <div className={styles.explorerContainer}>
      {/* Left Column: Navigation Tabs */}
      <div className={styles.tabList}>
        {processItems.map((item, index) => {
          const ItemIcon = item.icon;
          return (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`${styles.tabButton} ${activeTab === index ? styles.activeTabButton : ""}`}
              aria-label={`Show details for ${item.title}`}
            >
              <span className={styles.tabIcon}>
                <ItemIcon size={20} />
              </span>
              <span className={styles.tabTitle}>{item.shortTitle}</span>
            </button>
          );
        })}
      </div>

      {/* Right Column: Display Card */}
      <div className={styles.displayCard} key={activeTab}>
        <div className={styles.cardHeader}>
          <span className={styles.cardTag}>{activeItem.label}</span>
          <h3 className={styles.cardTitle}>{activeItem.title}</h3>
          <p className={styles.cardDescription}>{activeItem.description}</p>
        </div>

        {/* Visual Mockup Side */}
        <div className={styles.visualWrapper}>
          <div className={styles.glowOrb} />
          <div className={styles.illustrationCard}>
            <IconComponent size={64} className={styles.visualIcon} />
            <span className={styles.visualLabel}>{activeItem.label}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

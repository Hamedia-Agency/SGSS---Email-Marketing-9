"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PreFooterCTA } from "@/components/PreFooterCTA";
import { LeadGenForm } from "@/components/LeadGenForm";
import { LeadGenModal } from "@/components/LeadGenModal";
import { SecureTrackDemoWidget } from "@/components/SecureTrackDemoWidget";
import { 
  ShieldCheck, 
  MapPin, 
  FileText, 
  Camera, 
  FileSpreadsheet, 
  CheckCircle, 
  Eye, 
  AlertCircle, 
  UserCheck, 
  Headphones, 
  TrendingUp, 
  ArrowRight,
  Shield,
  FileCheck
} from "lucide-react";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Schedule Your Free Security Consultation");

  const handleOpenConsultation = (title?: string) => {
    if (title) setModalTitle(title);
    else setModalTitle("Schedule Your Free Security Consultation");
    setModalOpen(true);
  };

  return (
    <main className={styles.main}>
      {/* ===== NAVBAR ===== */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* ===== HERO SECTION ===== */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroBg}>
          <Image
            src="/shopping_center_hero.png"
            alt="The Secure Guard Advantage"
            fill
            className={styles.heroBgImg}
            priority
            quality={90}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroWrapper}`}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge} id="hero-badge">
              <span className={styles.heroBadgeDot} />
              The Secure Guard Advantage
            </div>
            <h1 className={styles.heroTitle} id="hero-title">
              Stop Guessing. <br />
              <span className={styles.heroTitleAccent}>
                Start Verifying.
              </span>
            </h1>
            <p className={styles.heroSubtitle}>
              You shouldn't have to take "trust me" as a security strategy. Experience total transparency with SecureTrack technology.
            </p>
            <div className={styles.heroCtas}>
              <button 
                onClick={() => handleOpenConsultation("Schedule Your Free Security Consultation")}
                className={styles.btnPrimary} 
                id="hero-cta-primary"
              >
                <Shield className="w-5 h-5 inline mr-2" />
                Schedule Your Free Security Consultation
              </button>
              <a
                href="#securetrack"
                className={styles.btnSecondary}
              >
                Explore SecureTrack Technology
              </a>
            </div>
          </div>
        </div>
        <div className={styles.heroScroll} aria-hidden="true">
          <span className={styles.heroScrollDot} />
        </div>
      </section>

      {/* ===== SECTION 1: THE TRUST GAP IN TRADITIONAL SECURITY ===== */}
      <section className={styles.trustGapSection} id="trust-gap">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Current Security Industry Flaws</span>
            <h2 className={styles.sectionTitle}>
              The Trust Gap in Traditional Security
            </h2>
            <div className={styles.titleDivider} />
          </div>

          <div className={styles.trustGapGrid}>
            {/* Left Card: Traditional Paper / Verbal Security */}
            <div className={styles.gapCardDanger}>
              <div className={styles.gapCardHeader}>
                <AlertCircle className={styles.gapHeaderIconDanger} size={28} />
                <h3>Traditional "Trust-Based" Security</h3>
              </div>
              <ul className={styles.gapList}>
                <li>
                  <strong>Handwritten Logs & Delayed Reports:</strong> A handwritten log may provide limited detail. A report submitted days later may leave out important information.
                </li>
                <li>
                  <strong>Unverifiable "No Incident" Claims:</strong> A simple “no incidents” update does not confirm whether the officer followed the patrol route, checked priority areas, or noticed a condition that needed attention.
                </li>
                <li>
                  <strong>Invisible Property Service:</strong> This lack of visibility can make it difficult to evaluate your security service or justify your security investment.
                </li>
              </ul>
            </div>

            {/* Right Card: SecureTrack Evidence Solution */}
            <div className={styles.gapCardSuccess}>
              <div className={styles.gapCardHeader}>
                <CheckCircle className={styles.gapHeaderIconSuccess} size={28} />
                <h3>SecureTrack "Evidence-Based" Security</h3>
              </div>
              <div className={styles.gapContentSuccess}>
                <p>
                  Secure Guard Security Services uses <strong>SecureTrack</strong> to give clients clearer visibility into the work being performed at their properties. Instead of relying only on verbal updates or end-of-month summaries, you can review documented activity from the field.
                </p>
                <div className={styles.quoteBox}>
                  "We move security from 'trust-based' to 'evidence-based' with real-time digital verification."
                </div>
                <div className={`${styles.quoteBtnWrapper} text-center sm:text-left`}>
                  <button
                    onClick={() => handleOpenConsultation("Schedule Your Free Security Consultation")}
                    className={styles.btnPrimarySm}
                  >
                    Schedule Your Free Security Consultation <ArrowRight size={16} className="inline ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: INTRODUCING SECURETRACK ===== */}
      <section className={styles.secureTrackSection} id="securetrack">
        <div className="container">
          <div className={styles.sectionHeaderLight}>
            <span className={styles.sectionTagLight}>Proprietary Field Reporting</span>
            <h2 className={styles.sectionTitleLight}>
              Introducing SecureTrack: <span className={styles.titleAccentGold}>Data-Driven Protection</span>
            </h2>
            <p className={styles.sectionSubtextLight}>
              SecureTrack is our proprietary field reporting platform designed to give you the visibility you need to manage your property with confidence. By digitizing guard activity, we move security from "trust-based" to "evidence-based."
            </p>
          </div>

          <div className={styles.secureTrackGrid}>
            <div className={styles.pillarList}>
              <div className={styles.pillarCard}>
                <div className={styles.pillarHeader}>
                  <Eye size={20} className={styles.pillarIcon} />
                  <span>Organized Field Operations</span>
                </div>
                <p className={styles.pillarDesc}>
                  SecureTrack provides a more organized approach by capturing security activity, patrol information, incident reports, photos, and relevant site updates in one system.
                </p>
              </div>

              <div className={styles.pillarCard}>
                <div className={styles.pillarHeader}>
                  <ShieldCheck size={20} className={styles.pillarIcon} />
                  <span>Actionable Clarity, Not Noise</span>
                </div>
                <p className={styles.pillarDesc}>
                  The goal is not to overwhelm you with reports. It is to give you the information needed to understand how your property was protected.
                </p>
              </div>

              <div className={styles.pillarCard}>
                <div className={styles.pillarHeader}>
                  <FileCheck size={20} className={styles.pillarIcon} />
                  <span>Comprehensive Platform</span>
                </div>
                <p className={styles.pillarDesc}>
                  SecureTrack serves as SGSS’s platform for field logs, compliance oversight, GPS-supported guard activity, reporting, and client transparency.
                </p>
              </div>
            </div>

            {/* Interactive Widget Column */}
            <div>
              <SecureTrackDemoWidget />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: HOW SECURE GUARD HELPS ===== */}
      <section className={styles.howHelpsSection} id="how-it-helps">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Human Accountability Network</span>
            <h2 className={styles.sectionTitle}>
              How Secure Guard Helps
            </h2>
            <div className={styles.titleDivider} />
            <p className={styles.sectionSubtext}>
              Secure Guard does more than provide access to reporting software. Our officers, supervisors, dispatch team, and operations managers use SecureTrack as part of a larger accountability system.
            </p>
          </div>

          <div className={styles.teamGrid}>
            <div className={styles.teamCard}>
              <div className={styles.teamIconBadge}>
                <UserCheck size={24} />
              </div>
              <h3 className={styles.teamTitle}>1. Field Officers</h3>
              <p className={styles.teamDesc}>
                Officers document activity directly from the field. Every timestamp, patrol checkpoint scan, and site photo is recorded live into the system.
              </p>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamIconBadge}>
                <Eye size={24} />
              </div>
              <h3 className={styles.teamTitle}>2. Field Supervisors</h3>
              <p className={styles.teamDesc}>
                Supervisors review officer performance, spot check site presence, and verify Post Order compliance to maintain rigorous standards.
              </p>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamIconBadge}>
                <Headphones size={24} />
              </div>
              <h3 className={styles.teamTitle}>3. 24/7 Dispatch Team</h3>
              <p className={styles.teamDesc}>
                Dispatch supports field communication, handles urgent request calls, monitors attendance, and coordinates immediate incident escalation.
              </p>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamIconBadge}>
                <TrendingUp size={24} />
              </div>
              <h3 className={styles.teamTitle}>4. Operations Managers</h3>
              <p className={styles.teamDesc}>
                Operations managers use field data to identify patterns, address site concerns, and make strategic coverage adjustments whenever needed.
              </p>
            </div>
          </div>

          <div className={styles.accountabilityCallout}>
            <h4 className={styles.calloutTitle}>Connected Security Management</h4>
            <p className={styles.calloutText}>
              This means your security reporting is connected to the way the program is actually managed. When something is incomplete, inconsistent, or concerning, our team has the information needed to follow up. That may involve clarifying instructions, coaching an officer, increasing supervision, or adjusting how the property is being covered.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: WHAT SECURETRACK DOES FOR YOUR PROPERTY (4 FEATURES) ===== */}
      <section className={styles.featuresSection} id="features">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Core Capabilities</span>
            <h2 className={styles.sectionTitle}>
              What SecureTrack Does For Your Property:
            </h2>
            <div className={styles.titleDivider} />
          </div>

          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIconContainer}>
                <MapPin size={28} className={styles.featureIcon} />
              </div>
              <h3 className={styles.featureCardTitle}>Verified Patrols</h3>
              <p className={styles.featureCardDesc}>
                Our GPS-enabled checkpoints prove exactly when patrols were completed, ensuring your site is never left unmonitored.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIconContainer}>
                <FileText size={28} className={styles.featureIcon} />
              </div>
              <h3 className={styles.featureCardTitle}>Real-Time Reporting</h3>
              <p className={styles.featureCardDesc}>
                Incident reports are generated and submitted from the field instantly, allowing you to react to situations as they unfold.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIconContainer}>
                <Camera size={28} className={styles.featureIcon} />
              </div>
              <h3 className={styles.featureCardTitle}>Visual Documentation</h3>
              <p className={styles.featureCardDesc}>
                Our guards capture photos of potential hazards, maintenance issues, or site incidents, giving you clear context without needing a site visit.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIconContainer}>
                <FileSpreadsheet size={28} className={styles.featureIcon} />
              </div>
              <h3 className={styles.featureCardTitle}>Accountability Logs</h3>
              <p className={styles.featureCardDesc}>
                Every action taken by your security team is recorded in a digital, immutable log, providing you with a reliable history of your property’s security status.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: BETTER SECURITY THROUGH TRANSPARENCY & FORM ===== */}
      <section className={styles.transparencySection} id="lead-form">
        <div className="container">
          <div className={styles.transparencyGrid}>
            <div className={styles.transparencyColLeft}>
              <span className={styles.sectionTag}>Maximum Oversight</span>
              <h2 className={styles.sectionTitleLeft}>
                Better Security Through Transparency
              </h2>
              <p className={styles.bodyTextLeft}>
                You are running a business, not a security agency. SecureTrack gives you the oversight you need to hold your security team accountable, optimize patrol routes, and document site activity without the headache of manual paperwork.
              </p>
              <blockquote className={styles.questionBox}>
                <p className={styles.questionText}>
                  "Are you ready to see exactly what happens during every shift?"
                </p>
              </blockquote>
              <div>
                <button
                  onClick={() => handleOpenConsultation("Schedule a Demo of SecureTrack")}
                  className={styles.btnGoldAction}
                >
                  <ShieldCheck size={20} />
                  Schedule a Demo of SecureTrack
                </button>
              </div>
            </div>

            <div>
              <LeadGenForm
                title="Schedule Your SecureTrack Review"
                subtitle="Fill out the property details below. An SGSS operations specialist will contact you with a customized security analysis."
                buttonText="Schedule Your Free Consultation"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRE-FOOTER CTA ===== */}
      <PreFooterCTA onOpenConsultation={() => handleOpenConsultation("Schedule a Demo of SecureTrack")} />

      {/* ===== FOOTER ===== */}
      <Footer />

      {/* ===== LEAD GENERATION MODAL ===== */}
      <LeadGenModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
      />
    </main>
  );
}

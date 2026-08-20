"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { PreFooterCTA } from "@/components/PreFooterCTA";
import { LeadGenForm } from "@/components/LeadGenForm";
import { LeadGenModal } from "@/components/LeadGenModal";
import { ProcessExplorer } from "@/components/ProcessExplorer";
import { CarouselSection } from "@/components/CarouselSection";
import { CoverageSection } from "@/components/CoverageSection";
import { FAQAccordion } from "@/components/FAQAccordion";
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
  FileCheck,
  BellRing,
  Clock,
  BookOpen,
  Lock,
  Key,
  Users
} from "lucide-react";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Schedule Your Free Security Consultation");

  const handleOpenConsultation = (title?: string) => {
    if (title) setModalTitle(title);
    else setModalTitle("Schedule Your Free Security Consultation");
    setModalOpen(true);
  };

  const faqs = [
    {
      question: "How do I access SecureTrack reporting for my property?",
      answer: "Reports are accessible anytime through our secure client web portal, or delivered automatically to your inbox via Daily Activity Reports (DAR) at the end of each shift."
    },
    {
      question: "Can multiple members of my management team receive incident notifications?",
      answer: "Yes. System configurations allow property managers, facility directors, and administrative staff to receive real-time email or SMS alerts simultaneously."
    },
    {
      question: "What happens if a guard fails to complete a scheduled GPS patrol scan?",
      answer: "Our 24/7 central dispatch receives an automated system alert upon any delayed scan. Dispatch personnel contact the on-site guard or field supervisor immediately to verify safety and resolve patrol gaps."
    },
    {
      question: "Are SecureTrack photo incident reports detailed enough for insurance or legal claims?",
      answer: "Yes. Every incident report includes verified time/date stamps, GPS location metadata, officer notes, and high-resolution photographic evidence structured specifically for official documentation and claims support."
    },
    {
      question: "Is there an additional software fee or subscription cost to use SecureTrack?",
      answer: "No. SecureTrack is fully integrated into Secure Guard’s security officer and patrol services at no extra charge. Client portal access, mobile logging, and automated reporting are included in your standard service."
    },
    {
      question: "Does our property need to provide Wi-Fi or install complex IT hardware?",
      answer: "None at all. Officers operate on cellular-enabled mobile devices provided by Secure Guard. Checkpoint locations utilize discreet, weatherproof NFC tags and QR codes installed across designated zones without tapping into your facility's infrastructure."
    },
    {
      question: "How long are digital patrol records, photos, and incident reports stored?",
      answer: "All timestamped patrol logs, photo entries, and incident reports are archived securely in the cloud and remain accessible on your client dashboard 24/7 for historical auditing and legal defense."
    },
    {
      question: "Can SecureTrack checkpoint routes and inspection checklists be customized for our site?",
      answer: "Yes. During onboarding, our operations team maps specific checkpoint zones, custom safety checklists, and tailored alert rules based on your property's unique layout and post order requirements."
    }
  ];

  return (
    <main className={styles.main}>
      {/* ===== NAVBAR ===== */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* ===== HERO SECTION (Real-Time Reporting & Visibility) ===== */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="https://cms.secureguardservices.com/wp-content/uploads/2026/08/diffguards.webp"
            alt="Real-Time Reporting & Visibility"
            fill
            className={styles.heroBgImg}
            priority
            quality={90}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroWrapper}`}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              Real-Time Reporting & Visibility
            </div>
            <h1 className={styles.heroTitle}>
              Stop Guessing. <br /> <span className={styles.heroTitleAccent}>Start Verifying.</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Secure Guard Security Services uses SecureTrack to connect on-site security activity with digital reporting, patrol verification, incident documentation, photographs, and operational updates. This gives authorized clients greater visibility into the activity taking place at their property during and after each shift.
            </p>
            <a 
              href="https://www.secureguardservices.com/contact"
              className={styles.btnPrimary}
            >
              Verify Your Property Security
            </a>
          </div>
        </div>
        <div className={styles.heroScroll} aria-hidden="true">
          <span className={styles.heroScrollDot} />
        </div>
      </section>

      {/* ===== SECTION 1: THE INFORMATION GAP (Traditional vs SecureTrack) ===== */}
      <section className={styles.section} id="securetrack">
        <div className="container">
          <div className={styles.splitGrid}>
            <div className={styles.splitContent}>
              <span className={styles.sectionTag}>Digital Accountability</span>
              <h2 className={styles.sectionTitle}>
                SecureTrack
              </h2>
              <p className={styles.bodyText}>
                A report may say that a patrol was completed, but without supporting information, it can be difficult to determine when the patrol occurred, which areas were checked, or whether anything unusual was observed.
              </p>
              <p className={styles.bodyText}>
                SecureTrack is designed to create a more detailed digital record of security or patrol activity. Incidents can be documented with timestamps and photographs, and important site conditions can be communicated through digital reporting.
              </p>
            </div>
            <div className={styles.splitImageWrapper}>
              <Image 
                src="https://cms.secureguardservices.com/wp-content/uploads/2026/08/defplan.webp" 
                alt="Digital Records & Patrol Logs" 
                fill
                className={styles.splitImage}
              />
            </div>
          </div>

          {/* ===== SECTION 2: HOW SECURETRACK CREATES GREATER VISIBILITY (3 Feature Cards) ===== */}
          <div className={styles.cardsGridFive} style={{ marginTop: "80px" }}>
            <div className={styles.featureCard} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "30px 20px" }}>
              <div className={styles.featureCardIcon} style={{ width: "56px", height: "56px", marginBottom: "16px" }}>
                <ShieldCheck size={28} />
              </div>
              <h3 className={styles.featureTitle} style={{ marginBottom: "10px", fontSize: "1.15rem" }}>Verified Patrol Execution</h3>
              <p className={styles.featureDesc} style={{ fontSize: "0.95rem" }}>
                SecureTrack mandates digital checkpoint scans across designated site zones, providing absolute confirmation that required areas are inspected thoroughly and on schedule.
              </p>
            </div>

            <div className={styles.featureCard} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "30px 20px" }}>
              <div className={styles.featureCardIcon} style={{ width: "56px", height: "56px", marginBottom: "16px" }}>
                <Clock size={28} />
              </div>
              <h3 className={styles.featureTitle} style={{ marginBottom: "10px", fontSize: "1.15rem" }}>Timestamped Audit</h3>
              <p className={styles.featureDesc} style={{ fontSize: "0.95rem" }}>
                Every patrol round, scan, and station check generates an immutable digital timestamp, creating an accurate, defensible timeline of all on-site field activity.
              </p>
            </div>

            <div className={styles.featureCard} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "30px 20px" }}>
              <div className={styles.featureCardIcon} style={{ width: "56px", height: "56px", marginBottom: "16px" }}>
                <FileCheck size={28} />
              </div>
              <h3 className={styles.featureTitle} style={{ marginBottom: "10px", fontSize: "1.15rem" }}>Documented Site Condition</h3>
              <p className={styles.featureDesc} style={{ fontSize: "0.95rem" }}>
                Officers log physical risks, maintenance issues, and safety hazards directly into the system, replacing informal verbal messages with actionable, documented work records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: CAROUSEL (Photo Documentation & GPS Checkpoints) ===== */}
      <section className={styles.section} id="documentation">
        <div className="container">
          <div className={styles.sectionHeaderCentered} style={{ marginBottom: "40px" }}>
            <span className={styles.sectionTag}>Digital Accountability</span>
            <h2 className={styles.sectionTitle}>
              Real-Time Site Documentation & Tracking
            </h2>
            <p className={styles.bodyTextCentered}>
              Explore how SecureTrack provides a more detailed digital record of security activity.
            </p>
          </div>
          <CarouselSection 
            autoplay={true}
            items={[
              {
                title: "Photo Documentation / Incident Reporting",
                tag: "WHY DIGITAL REPORTING MATTERS",
                description: (
                  <>
                    <p style={{ marginBottom: "16px" }}>
                      SecureTrack enables security officers to capture high-resolution photos directly through their mobile devices and attach them immediately to digital incident reports or routine site observations. Combined with timestamps and officer notes, visual documentation creates a more complete record of the event.
                    </p>
                    <p>
                      SecureTrack modernizes event logging by replacing delayed, handwritten incident notes with structured, real-time digital incident reports instantly logged through the SecureTrack mobile platform while on scene.
                    </p>
                  </>
                ),
                image: "https://cms.secureguardservices.com/wp-content/uploads/2026/08/custompostord.webp"
              },
              {
                title: "GPS Checkpoints / NFC Tags",
                tag: "MORE THAN A REPORTING PLATFORM",
                description: (
                  <>
                    <p style={{ marginBottom: "16px" }}>
                      Electronic Near Field Communication (NFC) and Quick Response (QR) code scan tags installed at high-risk site zones, such as stairwells, parking structures, loading docks, and perimeter gates, record exact location data using GPS technology as officers complete their rounds.
                    </p>
                    <p>
                      System algorithms log each scan in real time, confirm 100% route completion, and instantly flag skipped or delayed checkpoints to central dispatch.
                    </p>
                  </>
                ),
                image: "https://cms.secureguardservices.com/wp-content/uploads/2026/08/defplan.webp"
              }
            ]} 
          />
        </div>
      </section>

      {/* ===== SECTION 4: PROCESS EXPLORER (SecureTrack Capabilities) ===== */}
      <section className={styles.section} id="capabilities">
        <div className="container">
          <div className={styles.sectionHeaderCentered} style={{ marginBottom: "56px" }}>
            <span className={styles.sectionTag}>Capabilities</span>
            <h2 className={styles.sectionTitle}>
              SecureTrack Capabilities
            </h2>
            <p className={styles.bodyTextCentered}>
              SecureTrack serves as our integrated security management platform. Discover how the platform's core functions protect your property.
            </p>
          </div>
          
          <ProcessExplorer />
        </div>
      </section>

      {/* ===== SECTION 5: STICKY FLOW (Connecting Technology with Action) ===== */}
      <section className={`${styles.section} ${styles.sectionDark}`} id="connecting">
        <div className="container">
          <div className={styles.stickyGrid}>
            <div className={styles.leftStickyCol}>
              <div className={styles.stickyHeader}>
                <span className={`${styles.sectionTag} ${styles.sectionTagDark}`}>Operational Support</span>
                <h2 className={`${styles.sectionTitle} ${styles.sectionTitleDark}`} style={{ marginBottom: "16px" }}>
                  Connecting Technology with Action
                </h2>
                <p className={`${styles.bodyText} ${styles.bodyTextDark}`} style={{ fontSize: "1.05rem", opacity: 0.85 }}>
                  SecureTrack links field officers, digital patrol verification, dispatch, and supervision into a single operational framework.
                </p>
              </div>
            </div>

            <div className={styles.rightFlowCol}>
              {/* Pillar 1 */}
              <div className={styles.flowCard}>
                <span className={styles.flowNumber}>01</span>
                <div className={styles.flowCardHeader}>
                  <div className={styles.flowIconContainer}>
                    <Headphones size={26} />
                  </div>
                  <div className={styles.flowHeaderText}>
                    <span className={styles.flowCardTag}>Operations Center</span>
                    <h3 className={styles.flowTitle}>Dispatch</h3>
                  </div>
                </div>
                <div className={styles.flowBody}>
                  <p className={styles.flowDesc}>
                    SecureTrack operates alongside Secure Guard’s 24/7 central dispatch and field operations team. When a critical issue or property hazard is logged on site, dispatch personnel immediately review the entry to determine whether supervisor deployment, emergency escalation, or client notifications are required, connecting on-ground guard observations directly with operational management.
                  </p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className={styles.flowCard}>
                <span className={styles.flowNumber}>02</span>
                <div className={styles.flowCardHeader}>
                  <div className={styles.flowIconContainer}>
                    <UserCheck size={26} />
                  </div>
                  <div className={styles.flowHeaderText}>
                    <span className={styles.flowCardTag}>Compliance Control</span>
                    <h3 className={styles.flowTitle}>Field Supervision</h3>
                  </div>
                </div>
                <div className={styles.flowBody}>
                  <p className={styles.flowDesc}>
                    Mobile field supervisors conduct unannounced site visits, inspect officer post compliance, audit station registries, and evaluate guard conduct and uniform appearance. While digital reporting documents field activity, active supervision guarantees that your security program is executed according to your property's established expectations.
                  </p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className={styles.flowCard}>
                <span className={styles.flowNumber}>03</span>
                <div className={styles.flowCardHeader}>
                  <div className={styles.flowIconContainer}>
                    <AlertCircle size={26} />
                  </div>
                  <div className={styles.flowHeaderText}>
                    <span className={styles.flowCardTag}>Real-Time Escalation</span>
                    <h3 className={styles.flowTitle}>When a Patrol Is Missed</h3>
                  </div>
                </div>
                <div className={styles.flowBody}>
                  <p className={styles.flowDesc}>
                    SecureTrack actively monitors patrol schedules and alerts central dispatch the moment a checkpoint scan is delayed or skipped. Dispatch personnel immediately contact the officer on site to verify safety, confirm post integrity, and resolve patrol gaps in real time, catching and correcting potential service issues before they impact your property.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: WHY DIGITAL REPORTING MATTERS & ECOSYSTEM (Split Sections) ===== */}
      <section className={styles.section} id="why-reporting-matters">
        <div className="container">
          <div className={styles.splitGrid} style={{ alignItems: "center" }}>
            <div className={styles.splitImageWrapper} style={{ height: "100%", minHeight: "400px" }}>
              <Image 
                src="https://cms.secureguardservices.com/wp-content/uploads/2026/08/clearpostord.webp" 
                alt="Why Digital Reporting Matters" 
                fill
                className={styles.splitImage}
              />
            </div>
            <div className={styles.splitContent}>
              <h2 className={styles.sectionTitle}>
                Why Digital Reporting Matters
              </h2>
              <p className={styles.bodyText}>
                Property managers need immediate, verifiable site data to make informed decisions and resolve property issues without delay. SecureTrack transforms routine event logging into a structured, audit-ready digital account, capturing exact timestamps, detailed officer notes, supporting photo evidence, and precise location data in real time.
              </p>
              <p className={styles.bodyText} style={{ marginTop: "16px" }}>
                That difference matters when resolving tenant disputes, handling insurance claims, or mitigating site hazards. By keeping critical security records instantly accessible and fully transparent, SecureTrack delivers total operational clarity for your property.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionDark}`} id="ecosystem">
        <div className="container">
          <div className={styles.splitGrid} style={{ alignItems: "center" }}>
            <div className={styles.splitContent}>
              <h2 className={`${styles.sectionTitle} ${styles.sectionTitleDark}`}>
                More Than a Reporting Platform
              </h2>
              <p className={`${styles.bodyText} ${styles.bodyTextDark}`}>
                SecureTrack is not merely a standalone application, it is an integrated pillar of Secure Guard’s broader security management ecosystem. By seamlessly linking field officers, digital patrol verification, 24/7 dispatch, and active supervision into a single operational framework, site data is actively leveraged during every shift rather than sitting idle in an archive.
              </p>
              <p className={`${styles.bodyText} ${styles.bodyTextDark}`} style={{ marginTop: "16px" }}>
                When technology, field personnel, and operational management work in sync, property managers gain an unfiltered, complete view of their site's true security performance.
              </p>
            </div>
            <div className={`${styles.splitImageWrapper} ${styles.orderFirstMobile}`} style={{ height: "100%", minHeight: "400px" }}>
              <Image 
                src="https://cms.secureguardservices.com/wp-content/uploads/2026/08/whysecgu.webp" 
                alt="Unified Management Ecosystem" 
                fill
                className={styles.splitImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: COVERAGE ===== */}
      <CoverageSection />

      {/* ===== SECTION 8: FAQ ACCORDION ===== */}
      <section className={`${styles.section} ${styles.faqSection}`} id="faq">
        <div className="container">
          <div className={styles.sectionHeaderCentered} style={{ marginBottom: "56px" }}>
            <span className={styles.sectionTag}>Questions & Answers</span>
            <h2 className={styles.sectionTitle}>
              Frequently Asked Questions (FAQ)
            </h2>
            <p className={styles.bodyTextCentered}>
              Find answers to common questions about SecureTrack and our reporting systems.
            </p>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* ===== PRE-FOOTER CTA ===== */}
      <PreFooterCTA onOpenConsultation={() => handleOpenConsultation("Verify Your Property Security")} />

      {/* ===== FOOTER ===== */}
      <Footer />

      {/* ===== LEAD GENERATION MODAL ===== */}
      <LeadGenModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
      />

      {/* ===== BACK TO TOP ===== */}
      <BackToTop />
    </main>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stop Guessing. Start Verifying. | Secure Guard Security Services",
  description:
    "You shouldn't have to take 'trust me' as a security strategy. Experience total transparency with SecureTrack technology.",
  keywords: [
    "SecureTrack",
    "security guard services",
    "verified patrols",
    "real-time reporting",
    "visual documentation",
    "accountability logs",
    "Southern California security",
    "GPS guard activity",
  ],
  openGraph: {
    title: "Stop Guessing. Start Verifying. | SecureTrack Technology",
    description:
      "Experience total transparency with SecureTrack technology by Secure Guard Security Services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
        <BackToTop />
      </body>
    </html>
  );
}

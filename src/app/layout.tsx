import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ShifAI — AI-Powered Clinical Documentation",
  description:
    "Next-generation AI-powered clinical documentation platform. Real-time transcription, automated medical documents, and intelligent decision support — all running locally on secure GPU infrastructure.",
  keywords: [
    "AI clinical documentation",
    "medical transcription",
    "healthcare AI",
    "EHR integration",
    "HIPAA compliant",
    "HL7 FHIR",
    "clinical decision support",
  ],
  openGraph: {
    title: "ShifAI — AI-Powered Clinical Documentation",
    description:
      "Reduce documentation burden by up to 70%. Real-time AI transcription, automated medical documents, and clinical decision support.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

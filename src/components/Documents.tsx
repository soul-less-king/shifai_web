"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FileText,
  Pill,
  TestTubeDiagonal,
  Send,
  ClipboardList,
  Receipt,
  CalendarCheck,
} from "lucide-react";

const documents = [
  {
    icon: FileText,
    title: "Consultation Summaries",
    description: "SOAP-formatted clinical notes with structured assessment and plan sections",
    tag: "Auto-generated",
    color: "text-cyan-400",
  },
  {
    icon: Pill,
    title: "E-Prescriptions",
    description: "Drug-checked prescriptions with automated dosage validation and interaction screening",
    tag: "Pharmacologically validated",
    color: "text-violet-400",
  },
  {
    icon: TestTubeDiagonal,
    title: "Laboratory Orders",
    description: "Context-aware diagnostic test recommendations based on presenting symptoms",
    tag: "ICD-10 coded",
    color: "text-emerald-400",
  },
  {
    icon: Send,
    title: "Referral Letters",
    description: "Specialty-specific referral correspondence with complete clinical context",
    tag: "Template-driven",
    color: "text-amber-400",
  },
  {
    icon: ClipboardList,
    title: "Discharge Summaries",
    description: "Comprehensive handoff documents with medication reconciliation and follow-up plans",
    tag: "Continuity-focused",
    color: "text-pink-400",
  },
  {
    icon: Receipt,
    title: "Insurance & Billing",
    description: "ICD-10-CM coded claims with automated procedure classification and billing forms",
    tag: "Revenue cycle ready",
    color: "text-blue-400",
  },
  {
    icon: CalendarCheck,
    title: "Medical Leave Certificates",
    description: "Legally compliant sick leave documentation with appropriate clinical justification",
    tag: "Regulation compliant",
    color: "text-teal-400",
  },
];

export default function Documents() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-100px" });

  return (
    <section
      id="documents"
      className="relative py-32 bg-gradient-to-b from-transparent via-surface-light/20 to-transparent"
    >
      <div className="absolute top-1/4 left-0 -translate-x-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full border border-cyan-500/5 border-l-cyan-400/20 border-r-transparent animate-spin-slow pointer-events-none" />
      <div className="absolute bottom-0 right-0 translate-x-1/3 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full border border-violet-500/5 border-t-violet-400/20 border-b-transparent animate-spin-reverse-slow pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 flex flex-col items-center"
        >
          <div className="relative inline-flex items-center justify-center mb-6 group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 blur-xl rounded-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 bg-white/60 backdrop-blur-xl px-8 py-4 rounded-3xl border border-white/40 overflow-hidden relative shadow-[0_0_15px_rgba(6,182,212,0.1)] flex items-center justify-center">
               <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 pointer-events-none" />
               <img src="/logo.png" alt="ShifAI Logo" className="h-12 md:h-16 object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] transition-transform duration-500 group-hover:scale-105 brightness-0 invert" />
            </div>
          </div>
          <span className="text-sm font-semibold tracking-widest uppercase text-primary-light mb-4 block">
            Document Generation
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Seven Documents and More.{" "}
            <span className="gradient-text">One Conversation.</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            ShifAI's clinical NLP pipeline produces a complete documentation
            suite from a single consultation — formatted, coded, and ready
            for review.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {documents.map((doc, i) => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: true, margin: "-60px" });
            return (
              <motion.div
                key={doc.title}
                ref={ref}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="glass rounded-2xl p-5 hover:bg-white/[0.04] transition-colors duration-300 group"
              >
                <doc.icon
                  size={28}
                  className={`${doc.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                />
                <h3 className="text-base font-semibold text-white mb-2">
                  {doc.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed mb-3">
                  {doc.description}
                </p>
                <span className="inline-block bg-white/5 border border-white/8 px-2.5 py-1 rounded-md text-[10px] font-medium text-text-muted uppercase tracking-wider">
                  {doc.tag}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

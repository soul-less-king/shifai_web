"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Shield,
  Lock,
  Server,
  Eye,
  Key,
  ShieldCheck,
  Fingerprint,
  HardDrive,
  Mic,
  Brain,
  FileText
} from "lucide-react";

const securityFeatures = [
  {
    icon: Server,
    title: "100% On-Premise AI",
    description:
      "All large language models run locally on your GPU infrastructure. No patient data is ever transmitted to external servers, cloud APIs, or third-party services.",
  },
  {
    icon: Lock,
    title: "AES-256 Encryption",
    description:
      "All data at rest is encrypted using AES-256 with keys managed by a dedicated hardware security module (HSM). Data in transit is protected by TLS 1.3.",
  },
  {
    icon: Fingerprint,
    title: "Multi-Factor Auth",
    description:
      "Role-based access control with multi-factor authentication ensures only authorized clinicians access patient records scoped to their direct care.",
  },
  {
    icon: Eye,
    title: "Immutable Audit Trails",
    description:
      "Every data access, modification, and AI inference is logged in tamper-proof, append-only audit records retained for a minimum of 7 years.",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Compliance",
    description:
      "Architected for compliance with Qatar's Personal Data Privacy Protection Law, HIPAA, and GDPR principles. HL7 FHIR R4 standard for interoperability.",
  },
  {
    icon: HardDrive,
    title: "Enterprise Backup",
    description:
      "Automated incremental backups every 6 hours, daily full backups, and geo-separated disaster recovery with RPO 6h / RTO 4h guarantees.",
  },
];

export default function Security() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-100px" });

  return (
    <section id="security" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/4 left-0 -translate-x-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full border border-cyan-500/5 border-l-cyan-400/20 border-r-transparent animate-spin-slow pointer-events-none" />
      <div className="absolute bottom-0 right-0 translate-x-1/3 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full border border-violet-500/5 border-t-violet-400/20 border-b-transparent animate-spin-reverse-slow pointer-events-none" />
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-emerald-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 flex flex-col items-center"
        >
          <div className="relative inline-flex items-center justify-center mb-6 group">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-xl rounded-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 bg-white/60 backdrop-blur-xl px-8 py-4 rounded-3xl border border-white/40 overflow-hidden relative shadow-[0_0_15px_rgba(16,185,129,0.1)] flex items-center justify-center">
               <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 pointer-events-none" />
               <img src="/logo.png" alt="ShifAI Logo" className="h-12 md:h-16 object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] transition-transform duration-500 group-hover:scale-105 brightness-0 invert" />
            </div>
          </div>
          <span className="text-sm font-semibold tracking-widest uppercase text-emerald-400 mb-4 block">
            Security & Privacy
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Data <span className="gradient-text">Never Leaves</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            ShifAI is built from the ground up with a local-first architecture.
            Every AI computation happens on your own hardware, inside your own
            facility, under your own control.
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 mb-16 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {[
              {
                icon: <Mic size={32} className="text-primary-light" />,
                label: "Voice Input",
                sub: "Medical Microphone",
              },
              { icon: "→", label: "", sub: "", isArrow: true },
              {
                icon: <Brain size={32} className="text-accent-light" />,
                label: "ShifAI Core",
                sub: "Local GPU (A100/H100)",
                highlight: true,
              },
              { icon: "→", label: "", sub: "", isArrow: true },
              {
                icon: <FileText size={32} className="text-emerald-400" />,
                label: "Clinical Documents",
                sub: "FHIR R4 / PDF/A",
              },
            ].map((item, i) =>
              item.isArrow ? (
                <div
                  key={i}
                  className="text-2xl text-text-muted hidden md:block"
                >
                  →
                </div>
              ) : (
                <div
                  key={i}
                  className={`text-center px-6 py-4 rounded-xl ${
                    item.highlight
                      ? "bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20"
                      : "bg-white/5"
                  }`}
                >
                  <div className="mb-3 flex justify-center">{item.icon}</div>
                  <div className="text-sm font-semibold text-white">
                    {item.label}
                  </div>
                  <div className="text-xs text-text-muted mt-1">{item.sub}</div>
                </div>
              )
            )}
          </div>
          <div className="text-center mt-6">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-lg">
              <Shield size={14} className="text-emerald-400" />
              <span className="text-xs text-emerald-400 font-medium">
                All processing contained within your facility&apos;s secure
                perimeter
              </span>
            </div>
          </div>
        </motion.div>

        {/* Security Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((f, i) => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: true, margin: "-80px" });
            return (
              <motion.div
                key={f.title}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="gradient-border p-6"
              >
                <f.icon
                  size={24}
                  className="text-emerald-400 mb-4"
                />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {f.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

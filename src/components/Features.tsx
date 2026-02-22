"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mic,
  FileText,
  Brain,
  Shield,
  Globe,
  Stethoscope,
  Zap,
  Languages,
  Server,
  HeartPulse,
  ClipboardCheck,
  AlertTriangle,
} from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Real-Time Transcription",
    description:
      "Capture every consultation detail hands-free with medical-grade speech recognition, optimized for clinical terminology in English and Arabic.",
    color: "from-cyan-500 to-blue-500",
    glow: "shadow-cyan-500/20",
  },
  {
    icon: FileText,
    title: "Automated Documents",
    description:
      "Generate SOAP notes, prescriptions, lab orders, referral letters, discharge summaries, and insurance claims in seconds — not hours.",
    color: "from-violet-500 to-purple-500",
    glow: "shadow-violet-500/20",
  },
  {
    icon: Brain,
    title: "Clinical Decision Support",
    description:
      "AI-powered differential diagnosis suggestions, drug interaction alerts, and evidence-based treatment recommendations in real time.",
    color: "from-emerald-500 to-green-500",
    glow: "shadow-emerald-500/20",
  },
  {
    icon: Shield,
    title: "Data Sovereignty",
    description:
      "All AI models run locally on dedicated GPU infrastructure. Zero patient data ever leaves your facility. Full regulatory compliance built in.",
    color: "from-amber-500 to-orange-500",
    glow: "shadow-amber-500/20",
  },
  {
    icon: Languages,
    title: "Multilingual Support",
    description:
      "Native Arabic and English interfaces with full RTL support. Medical terminology optimization for Gulf region clinical practice.",
    color: "from-pink-500 to-rose-500",
    glow: "shadow-pink-500/20",
  },
  {
    icon: Stethoscope,
    title: "EHR Integration Ready",
    description:
      "HL7 FHIR R4 compliant APIs designed for seamless integration with Epic, Cerner, and custom EHR systems via REST or embedded widgets.",
    color: "from-indigo-500 to-blue-600",
    glow: "shadow-indigo-500/20",
  },
  {
    icon: HeartPulse,
    title: "Patient Tracking",
    description:
      "Comprehensive patient profiles with longitudinal medical history, allergy records, chronic condition flags, and appointment intelligence.",
    color: "from-red-500 to-pink-500",
    glow: "shadow-red-500/20",
  },
  {
    icon: AlertTriangle,
    title: "Drug Interaction Alerts",
    description:
      "Real-time contraindication warnings and dosage validation cross-referenced against the patient's full medication profile.",
    color: "from-yellow-500 to-amber-500",
    glow: "shadow-yellow-500/20",
  },
  {
    icon: Server,
    title: "On-Premise AI Engine",
    description:
      "Enterprise GPU servers running locally hosted large language models. No cloud dependencies, no third-party API calls, no data exposure.",
    color: "from-teal-500 to-cyan-500",
    glow: "shadow-teal-500/20",
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group gradient-border p-6 transition-all duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]"
    >
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:shadow-lg ${feature.glow} transition-shadow duration-300`}
      >
        <feature.icon size={24} className="text-white" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
      <p className="text-sm text-text-muted leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
}

export default function Features() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-100px" });

  return (
    <section id="features" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/4 left-0 -translate-x-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full border border-cyan-500/5 border-l-cyan-400/20 border-r-transparent animate-spin-slow pointer-events-none" />
      <div className="absolute bottom-0 right-0 translate-x-1/3 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full border border-violet-500/5 border-t-violet-400/20 border-b-transparent animate-spin-reverse-slow pointer-events-none" />
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
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
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="gradient-text">Transform Care</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            A comprehensive AI platform that handles every aspect of clinical
            documentation, from the moment a patient walks in to the final
            discharge summary.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

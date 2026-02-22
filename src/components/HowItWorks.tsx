"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mic, Cpu, FileText, CheckCircle, ArrowDown } from "lucide-react";

const steps = [
  {
    icon: Mic,
    step: "01",
    title: "Voice Capture",
    description:
      "The physician speaks naturally during the consultation. ShifAI's medical-grade audio system captures every word with zero disruption to the clinical workflow.",
    detail: "Supports English & Arabic with accented speech recognition",
    color: "from-cyan-400 to-cyan-600",
  },
  {
    icon: Cpu,
    step: "02",
    title: "On-Premise AI Processing",
    description:
      "Audio is transcribed in real time by locally deployed large language models running on dedicated NVIDIA GPU accelerators. No data leaves your facility — ever.",
    detail: "97%+ accuracy with medical terminology optimization",
    color: "from-violet-400 to-violet-600",
  },
  {
    icon: FileText,
    step: "03",
    title: "Intelligent Document Generation",
    description:
      "Our clinical NLP pipeline analyzes the transcript and automatically generates formatted medical documents: SOAP notes, prescriptions, lab orders, referrals, and more.",
    detail: "HL7 FHIR R4 compliant output in PDF/A and structured formats",
    color: "from-emerald-400 to-emerald-600",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Clinician Review & Approval",
    description:
      "The physician reviews AI-generated documents with one-click approval or inline editing. Decision support alerts highlight drug interactions and suggest differential diagnoses.",
    detail: "Full audit trail maintained for every modification",
    color: "from-amber-400 to-amber-600",
  },
];

function StepCard({
  step,
  index,
  isLast,
}: {
  step: (typeof steps)[0];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="relative">
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex items-start gap-6 md:gap-10"
      >
        {/* Step Number & Line */}
        <div className="flex flex-col items-center flex-shrink-0">
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{
              type: "spring",
              stiffness: 200,
              delay: 0.2,
            }}
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
          >
            <step.icon size={28} className="text-white" />
          </motion.div>
          {!isLast && (
            <motion.div
              initial={{ height: 0 }}
              animate={inView ? { height: "100%" } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-px bg-gradient-to-b from-white/20 to-transparent mt-4 min-h-[40px]"
            />
          )}
        </div>

        {/* Content */}
        <div className="pb-16">
          <span className="text-xs font-bold tracking-widest text-text-muted uppercase mb-2 block">
            Step {step.step}
          </span>
          <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
          <p className="text-text-muted leading-relaxed mb-3 max-w-lg">
            {step.description}
          </p>
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-light" />
            <span className="text-xs text-primary-light">{step.detail}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function HowItWorks() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-100px" });

  return (
    <section
      id="how-it-works"
      className="relative py-32 bg-gradient-to-b from-transparent via-surface-light/30 to-transparent"
    >
      <div className="absolute top-1/4 left-0 -translate-x-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full border border-cyan-500/5 border-l-cyan-400/20 border-r-transparent animate-spin-slow pointer-events-none" />
      <div className="absolute bottom-0 right-0 translate-x-1/3 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full border border-violet-500/5 border-t-violet-400/20 border-b-transparent animate-spin-reverse-slow pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6">
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
            Workflow
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            From Voice to <span className="gradient-text">Verified Record</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Four seamless steps that transform a natural conversation into
            complete, coded, and compliant medical documentation.
          </p>
        </motion.div>

        <div className="relative">
          {steps.map((s, i) => (
            <StepCard
              key={s.step}
              step={s}
              index={i}
              isLast={i === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const tiers = [
  {
    name: "Clinic",
    audience: "Individual Practitioners",
    price: "Contact Sales",
    description: "Perfect for solo practitioners and small clinics",
    features: [
      "Up to 5,000 concurrent users",
      "Real-time voice transcription",
      "All 7 document types",
      "Clinical decision support",
      "Arabic & English interfaces",
      "On-premise GPU deployment",
      "Standard support (business hours)",
      "12-month software updates",
    ],
    highlight: false,
  },
  {
    name: "Hospital",
    audience: "Healthcare Facilities",
    price: "Contact Sales",
    description: "Designed for multi-department healthcare organizations",
    features: [
      "Up to 50,000 concurrent users",
      "Everything in Clinic, plus:",
      "Multi-department configuration",
      "EHR integration (HL7 FHIR R4)",
      "Centralized patient database",
      "Analytics & reporting dashboard",
      "Role-based access management",
      "Priority support (24/7)",
      "Dedicated onboarding specialist",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    audience: "Healthcare Networks",
    price: "Custom",
    description: "For national health systems and hospital networks",
    features: [
      "Unlimited users",
      "Everything in Hospital, plus:",
      "Multi-site deployment",
      "Custom AI model fine-tuning",
      "Advanced population health analytics",
      "SLA-backed uptime guarantees",
      "Dedicated account management",
      "Custom integration development",
      "On-site training & implementation",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/4 left-0 -translate-x-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full border border-cyan-500/5 border-l-cyan-400/20 border-r-transparent animate-spin-slow pointer-events-none" />
      <div className="absolute bottom-0 right-0 translate-x-1/3 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full border border-violet-500/5 border-t-violet-400/20 border-b-transparent animate-spin-reverse-slow pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-accent/5 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 flex flex-col items-center"
        >
          <div className="relative inline-flex items-center justify-center mb-6 group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 blur-xl rounded-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 bg-white/60 backdrop-blur-xl px-8 py-4 rounded-3xl border border-white/40 overflow-hidden relative shadow-[0_0_15px_rgba(139,92,246,0.1)] flex items-center justify-center">
               <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 pointer-events-none" />
               <img src="/logo.png" alt="ShifAI Logo" className="h-12 md:h-16 object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] transition-transform duration-500 group-hover:scale-105 brightness-0 invert" />
            </div>
          </div>
          <span className="text-sm font-semibold tracking-widest uppercase text-primary-light mb-4 block">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for <span className="gradient-text">Every Scale</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            From solo practitioners to national healthcare networks. Every tier
            includes unlimited AI-powered consultations with on-premise
            processing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tiers.map((tier, i) => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: true, margin: "-60px" });
            return (
              <motion.div
                key={tier.name}
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  tier.highlight
                    ? "bg-gradient-to-b from-primary/10 via-surface-light to-surface-light border-2 border-primary/30 shadow-xl shadow-primary/10"
                    : "glass"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-accent px-4 py-1.5 rounded-full text-xs font-bold text-white flex items-center gap-1.5">
                      <Sparkles size={12} /> Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                  <p className="text-sm text-text-muted mt-1">
                    {tier.audience}
                  </p>
                </div>

                <div className="mb-6">
                  <span className="text-3xl font-bold gradient-text">
                    {tier.price}
                  </span>
                </div>

                <p className="text-sm text-text-muted mb-6">
                  {tier.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check
                        size={16}
                        className={`mt-0.5 flex-shrink-0 ${
                          tier.highlight
                            ? "text-primary-light"
                            : "text-text-muted"
                        }`}
                      />
                      <span className="text-sm text-text-muted">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    tier.highlight
                      ? "bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
                      : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                  }`}
                >
                  Get Started
                  <ArrowRight size={16} />
                </a>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-text-muted mt-10"
        >
          All tiers include unlimited AI-powered consultations • On-premise GPU
          deployment • Full data sovereignty
        </motion.p>
      </div>
    </section>
  );
}

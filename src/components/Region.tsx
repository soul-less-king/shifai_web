"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Users, Ear, MessagesSquare } from "lucide-react";

const demographics = [
  {
    icon: MessagesSquare,
    title: "All Arabic Dialects",
    description: "Trained extensively on Khaleeji (Gulf), Levantine, and Egyptian dialects. Flawlessly understands Qatari, Saudi, and regional nuances without requiring formal MSA.",
  },
  {
    icon: Ear,
    title: "Acoustic Inclusion",
    description: "Advanced acoustic models designed to accurately transcribe elderly patients, soft-spoken individuals, and distinct accents with medical-grade precision.",
  },
  {
    icon: Users,
    title: "For Every Generation",
    description: "Whether an older patient describing symptoms in traditional local terms or a specialist mixing English and Arabic, ShifAI captures the complete clinical picture.",
  },
  {
    icon: Globe,
    title: "GCC-Native Infrastructure",
    description: "Not a translated western product, but a clinically validated AI engine built specifically for the unique cultural and linguistic landscape of healthcare in Qatar and the GCC.",
  }
];

export default function Region() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-100px" });

  return (
    <section id="region" className="relative py-32 overflow-hidden bg-surface-light/30">
      <div className="absolute top-1/4 left-0 -translate-x-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full border border-cyan-500/5 border-l-cyan-400/20 border-r-transparent animate-spin-slow pointer-events-none" />
      <div className="absolute bottom-0 right-0 translate-x-1/3 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full border border-violet-500/5 border-t-violet-400/20 border-b-transparent animate-spin-reverse-slow pointer-events-none" />
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-rose-500/5 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 flex flex-col items-center"
        >
          <div className="flex justify-center mb-6">
            <div className="relative inline-flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-pink-500/20 blur-xl rounded-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 bg-white/60 backdrop-blur-xl px-8 py-4 rounded-3xl border border-white/40 overflow-hidden relative shadow-[0_0_15px_rgba(244,63,94,0.1)] flex items-center justify-center">
                 <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 pointer-events-none" />
               <img src="/logo.png" alt="ShifAI Logo" className="h-12 md:h-16 object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] transition-transform duration-500 group-hover:scale-105 brightness-0 invert" />
              </div>
            </div>
          </div>
          <span className="text-sm font-semibold tracking-widest uppercase text-rose-400 mb-4 block">
            Native Intelligence
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for Qatar. <span className="gradient-text">Designed for Everyone.</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Healthcare communication is deeply personal and cultural. ShifAI is the first clinical AI engineered to master all Arab dialects and capture the nuances of every patient, regardless of age or origin.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {demographics.map((f, i) => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: true, margin: "-80px" });
            return (
              <motion.div
                key={f.title}
                ref={ref}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-start group hover:bg-white/[0.03] transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500/20 to-pink-500/20 border border-rose-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <f.icon size={28} className="text-rose-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-text-muted leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

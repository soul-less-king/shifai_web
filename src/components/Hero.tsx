"use client";

import { motion } from "framer-motion";
import {
  Mic,
  FileText,
  Brain,
  Shield,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

function FloatingOrb({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-20 ${className}`}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

import dynamic from 'next/dynamic';


const ParticlesBackground = dynamic(() => import("./ParticlesBackground"), { 
  ssr: false 
});

const stats = [
  { value: "97%+", label: "Transcription Accuracy" },
  { value: "70%", label: "Less Documentation Time" },
  { value: "<2s", label: "AI Response Latency" },
  { value: "100%", label: "On-Premise Processing" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* <ParticlesBackground /> */}
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <FloatingOrb
          className="w-96 h-96 bg-cyan-500 -top-20 -left-20"
          delay={0}
        />
        <FloatingOrb
          className="w-80 h-80 bg-violet-600 top-1/3 right-0"
          delay={2}
        />
        <FloatingOrb
          className="w-64 h-64 bg-indigo-500 bottom-20 left-1/3"
          delay={4}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center">
        {/* Futuristic HUD Logo Landing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-10 md:mb-16 relative"
        >
          <div className="relative group inline-flex items-center justify-center p-8 md:p-12">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 rounded-full border border-cyan-500/20 border-l-cyan-400/60 border-r-transparent animate-spin-slow pointer-events-none" />
            
            {/* Inner rotating ring */}
            <div className="absolute inset-4 rounded-full border border-violet-500/20 border-t-violet-400/60 border-b-transparent animate-spin-reverse-slow pointer-events-none" />
            
            {/* Core glow (colored cyan/purple, highly blurred) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 blur-[50px] rounded-full" />
            
            {/* Glass Container */}
            <div className="relative z-10 glass bg-white/60 px-10 py-6 md:px-14 md:py-8 rounded-3xl border border-white/40 shadow-[0_0_50px_rgba(255,255,255,0.2)] backdrop-blur-xl overflow-hidden flex justify-center items-center">
               {/* Shimmer sweeping effect */}
               <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 pointer-events-none" />
               {/* Scanner line */}
               <div className="absolute left-0 right-0 h-[3px] bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,1)] animate-scan pointer-events-none z-20" />
               
               <img 
                 src="/logo.png" 
                 alt="ShifAI Logo" 
                 className="relative z-10 h-20 sm:h-28 md:h-36 lg:h-44 xl:h-52 object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-transform duration-500 group-hover:scale-105 brightness-0 invert" 
               />
            </div>
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2 rounded-full mb-8 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse relative z-10" />
          <span className="text-sm font-medium text-text-muted relative z-10">
            Proudly <span className="font-bold text-white">Made in Qatar</span> for Global Healthcare
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6 text-balance"
        >
          The Future of
          <br className="hidden sm:block" />
          <span className="gradient-text sm:ml-0 ml-1">Clinical Documentation</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          ShifAI transforms healthcare workflows with on-premise AI that
          transcribes consultations in real time, generates medical documents
          instantly, and provides clinical decision support — all powered by
          locally deployed large language models on dedicated GPU infrastructure.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent px-8 py-4 rounded-2xl text-lg font-semibold text-white hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-1 group"
          >
            Request a Demo
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl text-lg font-semibold text-text hover:bg-white/10 transition-all duration-300"
          >
            Explore Features
          </a>
        </motion.div>

        {/* Feature Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          {[
            { icon: Mic, label: "Voice-to-Text" },
            { icon: FileText, label: "Auto Documents" },
            { icon: Brain, label: "Clinical AI" },
            { icon: Shield, label: "100% On-Premise" },
          ].map((chip) => (
            <div
              key={chip.label}
              className="flex items-center gap-2 bg-white/5 border border-white/8 px-4 py-2 rounded-full"
            >
              <chip.icon size={16} className="text-primary-light" />
              <span className="text-sm text-text-muted">{chip.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="glass rounded-2xl p-8 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={s.label} className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: 0.9 + i * 0.1,
                  }}
                  className="text-3xl md:text-4xl font-bold gradient-text mb-1"
                >
                  {s.value}
                </motion.div>
                <div className="text-sm text-text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#features"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-text-muted hover:text-primary-light transition-colors"
        >
          <ChevronDown size={28} />
        </motion.a>
      </motion.div>
    </section>
  );
}

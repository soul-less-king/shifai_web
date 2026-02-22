"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  CalendarCheck,
  Activity,
  MessageCircleHeart,
  Stethoscope,
  ClipboardList,
  UserCheck
} from "lucide-react";

const portalFeatures = [
  {
    icon: CalendarCheck,
    title: "Smart Scheduling",
    description:
      "Patients can view upcoming appointments, reschedule autonomously, and receive predictive reminders based on their care plan.",
    color: "from-blue-500 to-cyan-500",
    glow: "shadow-cyan-500/20",
  },
  {
    icon: Activity,
    title: "Lab Results & Analytics",
    description:
      "Interactive graphs and AI-generated plain-English summaries help patients understand their metabolic panels, imaging, and vitals.",
    color: "from-purple-500 to-indigo-500",
    glow: "shadow-indigo-500/20",
  },
  {
    icon: MessageCircleHeart,
    title: "Personal AI Companion",
    description:
      "A proactive, 24/7 AI health assistant that understands the patient's entire medical history and provides personalized medical triage and guidance.",
    color: "from-pink-500 to-rose-500",
    glow: "shadow-pink-500/20",
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof portalFeatures)[0];
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
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group gradient-border p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_0_40px_rgba(236,72,153,0.15)] bg-white/[0.02]"
    >
      <div
        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg ${feature.glow} transition-all duration-300`}
      >
        <feature.icon size={32} className="text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
      <p className="text-base text-text-muted leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
}

export default function PatientPortal() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-100px" });

  return (
    <section id="patient-portal" className="relative py-32 overflow-hidden bg-gradient-to-b from-transparent via-surface-light/30 to-transparent">
      {/* Background Orbs */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-pink-500/10 to-transparent rounded-full blur-3xl mix-blend-screen" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-violet-500/10 to-transparent rounded-full blur-3xl mix-blend-screen" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 flex flex-col items-center"
        >
          <div className="flex justify-center mb-6">
            <div className="relative inline-flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-rose-500/20 blur-xl rounded-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 bg-white/60 backdrop-blur-xl px-8 py-4 rounded-3xl border border-white/40 overflow-hidden relative shadow-[0_0_15px_rgba(244,63,94,0.1)] flex items-center justify-center gap-3">
                 <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 pointer-events-none" />
                 <UserCheck className="text-pink-500" size={24} />
                 <span className="font-bold text-lg text-gray-900 tracking-wide">Patient App</span>
              </div>
            </div>
          </div>
          <span className="text-sm font-semibold tracking-widest uppercase text-pink-400 mb-4 block">
            Empowering the Patient
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Their Care, <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">In Their Hands.</span>
          </h2>
          <p className="text-text-muted text-lg max-w-3xl mx-auto">
            Give your patients a beautifully designed portal to track their health journey. 
            From viewing complex test results simplified by AI, to interacting with a 24/7 personal digital nurse companion that understands their unique history.
          </p>
        </motion.div>

        {/* Bento Grid layout for portal features */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {portalFeatures.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>

        {/* Large Decorative Graphic or Mockup area */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 mx-auto max-w-5xl relative"
        >
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/30 to-violet-500/30 blur-2xl rounded-[40px] opacity-50" />
            <div className="relative glass p-6 md:p-10 rounded-[32px] border border-white/10 shadow-2xl overflow-hidden min-h-[400px] flex items-center justify-center">
                {/* Abstract mockup representation */}
                <div className="absolute inset-0 bg-gradient-to-br from-surface to-surface-light opacity-90" />
                <div className="absolute inset-0 opacity-20"
                     style={{
                         backgroundImage: `linear-gradient(rgba(244,63,94,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(244,63,94,0.3) 1px, transparent 1px)`,
                         backgroundSize: '40px 40px'
                     }}
                />
                
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-center w-full">
                    {/* Chat UI Mockup */}
                    <div className="glass bg-surface/80 rounded-2xl p-6 w-full max-w-sm border border-white/5 shadow-xl">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                                <Stethoscope size={20} className="text-white" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-white text-sm">Nour</h4>
                                <p className="text-xs text-text-muted">Personal AI Nurse</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-white/5 rounded-2xl rounded-tl-sm p-4 text-sm text-text-muted">
                                Hello Ahmed! Your recent full blood count results just came in. Everything looks normal, but your Vitamin D is slightly low.
                            </div>
                            <div className="bg-pink-500/20 border border-pink-500/30 rounded-2xl rounded-tr-sm p-4 text-sm text-white ml-8">
                                Oh okay, what should I do about that?
                            </div>
                            <div className="bg-white/5 rounded-2xl text-sm text-text-muted pb-0 overflow-hidden">
                                <div className="p-4">Dr. Sarah has automatically updated your care plan to include a D3 supplement recommendation.</div>
                                <div className="bg-white/5 p-3 flex items-center gap-2 border-t border-white/5 mt-2">
                                     <ClipboardList size={14} className="text-pink-400" />
                                     <span className="text-xs font-semibold text-pink-400">View Care Plan</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}

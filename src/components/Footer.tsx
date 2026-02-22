"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Globe, ArrowRight, Send } from "lucide-react";

export default function Footer() {
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* CTA Section */}
      <section id="contact" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.div
            ref={ctaRef}
            initial={{ opacity: 0, y: 40 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="glass rounded-3xl p-12 md:p-16 text-center glow-cyan"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to{" "}
              <span className="gradient-text">Transform Your Practice?</span>
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto mb-10">
              Join the future of clinical documentation. Request a live
              demonstration and see how ShifAI can reduce your documentation
              burden by up to 70%.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="mailto:userstorexxx@gmail.com?subject=Demo Request"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-accent px-8 py-4 rounded-2xl text-lg font-semibold text-white hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-1 group"
              >
                <Mail size={20} />
                Request a Demo
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-text-muted">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary-light" />
                <a
                  href="mailto:userstorexxx@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  userstorexxx@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={16} className="text-primary-light" />
                <a
                  href="https://www.shifai.qa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  www.shifai.qa
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary-light" />
                <span>Doha, Qatar</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center mb-6">
                <div className="relative w-48 md:w-64 h-16 md:h-20 flex-shrink-0 flex items-center justify-center bg-white/60 backdrop-blur-md rounded-2xl border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.15)] overflow-hidden group">
                  <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 pointer-events-none" />
                  <img 
                    src="/logo.png" 
                    alt="ShifAI Logo" 
                    className="relative z-10 w-[90%] h-[80%] object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300 brightness-0 invert" 
                  />
                </div>
              </div>
              <p className="text-sm text-text-muted leading-relaxed">
                Next-generation AI-powered clinical documentation, built in
                Qatar for global healthcare innovation.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">
                Product
              </h4>
              <ul className="space-y-2.5">
                {[
                  "Features",
                  "How It Works",
                  "Security",
                  "Document Types",
                  "Pricing",
                ].map((l) => (
                  <li key={l}>
                    <a
                      href={`#${l.toLowerCase().replace(/ /g, "-")}`}
                      className="text-sm text-text-muted hover:text-white transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compliance */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">
                Compliance
              </h4>
              <ul className="space-y-2.5">
                {[
                  "HL7 FHIR R4",
                  "HIPAA Aligned",
                  "Qatar Data Privacy Law",
                  "GDPR Principles",
                  "ICD-10 / SNOMED CT",
                ].map((l) => (
                  <li key={l}>
                    <span className="text-sm text-text-muted">{l}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">
                Company
              </h4>
              <ul className="space-y-2.5">
                {[
                  { label: "Contact Us", href: "mailto:userstorexxx@gmail.com" },
                  {
                    label: "www.shifai.qa",
                    href: "https://www.shifai.qa",
                  },
                ].map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-text-muted hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li className="text-sm text-text-muted flex items-center gap-1.5">
                  <MapPin size={12} />
                  Doha, Qatar
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-text-muted">
              © {new Date().getFullYear()} ShifAI Technologies. All
              rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold tracking-wide text-white bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
                Proudly <span className="gradient-text">Made in Qatar</span>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Film, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 relative bg-dark-bg border-t border-dark-border/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-br from-dark-card via-dark-surface to-dark-card border border-brand-amber/30 p-8 sm:p-16 text-center overflow-hidden shadow-2xl"
        >
          {/* Animated Background Light Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-amber/15 rounded-full blur-[140px] pointer-events-none -z-10" />

          {/* Icon Header */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-amber/10 border border-brand-amber/30 text-brand-amber mb-6">
            <Film className="w-7 h-7" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-6xl font-black font-display text-white tracking-tight leading-tight mb-4">
            HAVE A VIDEO <br />
            <span className="text-brand-amber">IN MIND?</span>
          </h2>

          <p className="text-dark-muted font-sans text-base sm:text-xl max-w-xl mx-auto mb-8">
            Let's turn your raw footage into something people want to watch.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              data-cursor="expand"
              className="group flex items-center gap-2 bg-brand-amber hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-mono text-xs font-bold tracking-wider transition-all shadow-glow-amber hover:scale-105"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#work"
              data-cursor="expand"
              className="flex items-center gap-2 bg-dark-bg border border-dark-border text-white hover:text-brand-amber px-8 py-4 rounded-full font-mono text-xs font-semibold tracking-wider transition-all hover:border-brand-amber/40"
            >
              <span>View My Work</span>
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

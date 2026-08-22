import React from 'react';
import { motion } from 'framer-motion';
import { whyChooseMePillars } from '../data/process';
import { BookOpen, Target, Flame, Sparkles } from 'lucide-react';

export default function WhyChooseMe() {
  const icons = [
    <BookOpen className="w-6 h-6 text-brand-amber" />,
    <Target className="w-6 h-6 text-brand-cyan" />,
    <Flame className="w-6 h-6 text-red-500" />,
    <Sparkles className="w-6 h-6 text-yellow-400" />
  ];

  return (
    <section className="py-24 relative bg-dark-bg film-grain border-t border-dark-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-brand-amber tracking-[0.25em] uppercase font-bold"
          >
            THE EDITING EDGE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight"
          >
            WHY CLIENTS CHOOSE ME
          </motion.h2>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseMePillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-card border border-dark-border rounded-2xl p-6 hover:border-brand-amber/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-dark-surface border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {icons[index]}
                </div>
                <h3 className="text-xl font-bold font-display text-white group-hover:text-brand-amber transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs font-sans text-dark-muted leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

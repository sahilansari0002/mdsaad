import React from 'react';
import { motion } from 'framer-motion';
import { tools } from '../data/tools';
import { Film, Sparkles, Sliders, CheckCircle2 } from 'lucide-react';

export default function Tools() {
  return (
    <section className="py-24 relative bg-dark-bg border-t border-dark-border/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-brand-amber tracking-[0.25em] uppercase font-bold"
          >
            SOFTWARE ARSENAL
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight"
          >
            TOOLS I USE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-dark-muted font-sans text-sm sm:text-base max-w-xl mx-auto"
          >
            Industry-standard editing software to ensure top-notch storytelling, visual effects, and crisp exports.
          </motion.p>
        </div>

        {/* Tools Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              data-cursor="expand"
              className={`group relative rounded-2xl bg-dark-card border border-dark-border p-8 hover:border-brand-amber/50 transition-all duration-500 flex flex-col justify-between hover:-translate-y-2 shadow-xl hover:shadow-2xl`}
            >
              {/* Background gradient glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 -z-10`} />

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-dark-surface border border-white/10 flex items-center justify-center text-brand-amber group-hover:scale-110 transition-transform">
                    {index === 0 && <Sliders className="w-6 h-6" />}
                    {index === 1 && <Film className="w-6 h-6" />}
                    {index === 2 && <Sparkles className="w-6 h-6" />}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-black/40 border border-white/10 text-brand-amber font-semibold">
                    {tool.badge}
                  </span>
                </div>

                {/* Tool Name & Category */}
                <h3 className="text-2xl font-black font-display text-white mb-1 group-hover:text-brand-amber transition-colors">
                  {tool.name}
                </h3>
                <p className="text-xs font-mono text-dark-muted mb-4">
                  {tool.category}
                </p>

                {/* Description */}
                <p className="text-sm font-sans text-dark-muted leading-relaxed mb-6">
                  {tool.description}
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="pt-4 border-t border-dark-border/60 space-y-2">
                {tool.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-mono text-white/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-amber flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

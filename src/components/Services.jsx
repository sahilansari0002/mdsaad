import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import { Video, Film, Share2, Megaphone, Sparkles, Layers, Scissors } from 'lucide-react';
import { YoutubeIcon } from './SocialIcons';

export default function Services() {
  const serviceIcons = [
    <Share2 className="w-5 h-5 text-brand-amber" />,
    <YoutubeIcon className="w-5 h-5 text-red-500" />,
    <Video className="w-5 h-5 text-brand-cyan" />,
    <Film className="w-5 h-5 text-purple-400" />,
    <Megaphone className="w-5 h-5 text-emerald-400" />,
    <Sparkles className="w-5 h-5 text-yellow-400" />,
    <Scissors className="w-5 h-5 text-blue-400" />,
    <Layers className="w-5 h-5 text-amber-400" />
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
            EDITING SERVICES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight"
          >
            WHAT I CAN EDIT
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-dark-card border border-dark-border rounded-2xl p-6 hover:border-brand-amber/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div className="w-10 h-10 rounded-xl bg-dark-surface border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {serviceIcons[index % serviceIcons.length]}
              </div>
              <h3 className="text-lg font-bold font-display text-white mb-2 group-hover:text-brand-amber transition-colors">
                {service.title}
              </h3>
              <p className="text-xs font-sans text-dark-muted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

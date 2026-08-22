import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';
import { Video, Award, Users, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-dark-bg film-grain border-t border-dark-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editor Portrait & Large Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Editor Portrait Card */}
            <div className="relative rounded-2xl bg-dark-card border border-dark-border p-3 shadow-2xl overflow-hidden group">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-dark-surface">
                <img
                  src={personalInfo.photo}
                  alt="Mohammad Saad - Freelance Video Editor"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs">
                  <div>
                    <div className="text-white font-bold font-sans text-lg">{personalInfo.name}</div>
                    <div className="text-brand-amber text-xs">{personalInfo.title}</div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-brand-amber/90 text-black text-[10px] font-bold">
                    PRO EDITOR
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-brand-amber tracking-[0.25em] uppercase font-bold">
                BEHIND THE TIMELINE
              </span>
              <h2 className="text-3xl sm:text-5xl font-black font-display text-white leading-tight">
                ABOUT <span className="text-brand-amber">THE EDITOR</span>
              </h2>
            </div>
          </motion.div>

          {/* Right Column: Bio & Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Bio Paragraphs */}
            <div className="space-y-4 text-dark-muted font-sans text-base sm:text-lg leading-relaxed">
              {personalInfo.aboutBio.map((paragraph, index) => (
                <p key={index} className={index === 0 ? "text-white font-medium text-lg sm:text-xl" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Stat Cards Container */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="bg-dark-card border border-dark-border rounded-xl p-5 hover:border-brand-amber/40 transition-colors">
                <div className="flex items-center gap-3 text-brand-amber mb-2">
                  <Award className="w-5 h-5" />
                  <span className="text-2xl font-black font-display text-white">{personalInfo.experienceYears}</span>
                </div>
                <div className="text-xs font-mono text-dark-muted uppercase font-semibold">Years Experience</div>
              </div>

              <div className="bg-dark-card border border-dark-border rounded-xl p-5 hover:border-brand-amber/40 transition-colors">
                <div className="flex items-center gap-3 text-brand-cyan mb-2">
                  <Users className="w-5 h-5" />
                  <span className="text-2xl font-black font-display text-white">{personalInfo.satisfiedClients}</span>
                </div>
                <div className="text-xs font-mono text-dark-muted uppercase font-semibold">Satisfied Clients</div>
              </div>

              <div className="bg-dark-card border border-dark-border rounded-xl p-5 hover:border-brand-amber/40 transition-colors">
                <div className="flex items-center gap-3 text-emerald-400 mb-2">
                  <Video className="w-5 h-5" />
                  <span className="text-2xl font-black font-display text-white">{personalInfo.videoSamplesCount}</span>
                </div>
                <div className="text-xs font-mono text-dark-muted uppercase font-semibold">Video Samples</div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

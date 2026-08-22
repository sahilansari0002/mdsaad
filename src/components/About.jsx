import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';
import { Video, Award, Users, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-dark-bg film-grain border-t border-dark-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Large Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            <span className="text-xs font-mono text-brand-amber tracking-[0.25em] uppercase font-bold">
              BEHIND THE TIMELINE
            </span>
            <h2 className="text-4xl sm:text-6xl font-black font-display text-white leading-tight">
              ABOUT <br />
              <span className="text-brand-amber">THE EDITOR</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-brand-amber to-transparent rounded-full mt-2" />
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

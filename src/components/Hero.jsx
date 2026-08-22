import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowDownRight, Sparkles, Film, CheckCircle2, Sliders } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { useLightbox } from '../context/LightboxContext';
import { projects } from '../data/projects';

export default function Hero() {
  const { openLightbox } = useLightbox();
  const featuredProject = projects[0];

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden film-grain">
      {/* Background ambient lighting glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-amber/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-cyan/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Typography Content */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-card/90 border border-brand-amber/30 text-xs font-mono text-white/90 shadow-lg"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="tracking-wider uppercase text-[11px] font-semibold">{personalInfo.availability}</span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-1"
            >
              <p className="text-xs font-mono text-brand-amber tracking-[0.25em] uppercase font-bold">
                {personalInfo.eyebrow}
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display tracking-tight text-white leading-[1.05]">
                I EDIT STORIES <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">THAT PEOPLE</span> <br />
                <span className="text-brand-amber underline decoration-brand-amber/40 decoration-wavy decoration-2">DON’T SKIP.</span>
              </h1>
            </motion.div>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-xl text-dark-muted max-w-xl font-sans leading-relaxed"
            >
              {personalInfo.heroSubheadline}
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#work"
                data-cursor="expand"
                className="group flex items-center gap-3 bg-brand-amber hover:bg-yellow-400 text-black px-7 py-3.5 rounded-full font-mono text-xs font-bold tracking-wider transition-all shadow-glow-amber hover:scale-105"
              >
                <span>View My Work</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                data-cursor="expand"
                className="flex items-center gap-2 bg-dark-card hover:bg-dark-surface border border-dark-border text-white px-7 py-3.5 rounded-full font-mono text-xs font-semibold tracking-wider transition-all hover:border-brand-amber/50"
              >
                <span>Hire Me</span>
              </a>
            </motion.div>

            {/* Key Stats Counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-8 border-t border-dark-border/60 grid grid-cols-3 gap-6 max-w-lg"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-black font-display text-white">{personalInfo.satisfiedClients}</div>
                <div className="text-xs font-mono text-dark-muted uppercase mt-0.5">Satisfied Clients</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black font-display text-brand-amber">{personalInfo.experienceYears}</div>
                <div className="text-xs font-mono text-dark-muted uppercase mt-0.5">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black font-display text-white">{personalInfo.videoSamplesCount}</div>
                <div className="text-xs font-mono text-dark-muted uppercase mt-0.5">Video Samples</div>
              </div>
            </motion.div>

          </div>

          {/* Right Hero Video Card / Interactive Media Preview */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-2xl bg-dark-card border border-dark-border p-3 shadow-2xl overflow-hidden group"
            >
              {/* Top Bar Video UI Controls */}
              <div className="flex items-center justify-between font-mono text-[11px] text-dark-muted px-2 pb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
                <span className="text-brand-amber flex items-center gap-1">
                  <Sliders className="w-3 h-3" /> FEATURED EDIT
                </span>
              </div>

              {/* Media Thumbnail Container */}
              <div
                onClick={() => openLightbox(featuredProject)}
                data-cursor="play"
                className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group/vid"
              >
                <img
                  src={featuredProject.thumbnail}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/vid:scale-105"
                />
                
                {/* Overlay Dark Tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Big Ripple Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-brand-amber text-black flex items-center justify-center shadow-glow-amber group-hover/vid:scale-110 transition-transform">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </div>
                </div>

                {/* Project Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white font-mono text-xs">
                  <div>
                    <div className="font-bold font-sans text-sm">{featuredProject.title}</div>
                    <div className="text-[10px] text-brand-amber">{featuredProject.category} • {featuredProject.duration}</div>
                  </div>
                  <span className="px-2 py-1 rounded bg-black/60 backdrop-blur text-[10px] border border-white/10">
                    CLICK TO PLAY
                  </span>
                </div>
              </div>

              {/* Floating Keyframe Marker Card */}
              <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-3 bg-dark-surface/90 border border-dark-border px-4 py-2.5 rounded-xl shadow-xl backdrop-blur-md">
                <Film className="w-5 h-5 text-brand-amber" />
                <div>
                  <div className="text-xs font-bold text-white">CapCut & Premiere Pro</div>
                  <div className="text-[10px] font-mono text-dark-muted">Smooth Cuts & FX</div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

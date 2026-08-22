import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowUpRight, Clock, Tag } from 'lucide-react';
import { useLightbox } from '../../context/LightboxContext';

export default function VideoCard({ project }) {
  const { openLightbox } = useLightbox();

  // Determine aspect ratio class
  const getAspectClass = () => {
    if (project.aspectRatio === '9:16') return 'aspect-[9/16]';
    if (project.aspectRatio === '1:1') return 'aspect-square';
    return 'aspect-video';
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="group relative rounded-2xl bg-dark-card border border-dark-border overflow-hidden shadow-xl hover:border-brand-amber/40 transition-all duration-300 flex flex-col"
    >
      {/* Thumbnail Container with Play Hover Overlay */}
      <div 
        onClick={() => openLightbox(project)}
        data-cursor="play"
        className={`relative ${getAspectClass()} overflow-hidden bg-black cursor-pointer`}
      >
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Aspect Ratio Badge Top Left */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur border border-white/10 text-[10px] font-mono font-bold text-white uppercase tracking-wider">
            {project.aspectRatio}
          </span>
          <span className="px-2.5 py-1 rounded-md bg-brand-amber/90 text-black text-[10px] font-mono font-bold uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        {/* Play Icon Center Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-brand-amber text-black flex items-center justify-center shadow-glow-amber group-hover:scale-110 transition-transform">
            <Play className="w-6 h-6 fill-current ml-0.5" />
          </div>
        </div>

        {/* Duration Bottom Right */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 font-mono text-[10px] bg-black/70 backdrop-blur px-2 py-1 rounded border border-white/10 text-dark-muted">
          <Clock className="w-3 h-3 text-brand-amber" />
          <span>{project.duration}</span>
        </div>
      </div>

      {/* Card Body Info */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 
            onClick={() => openLightbox(project)}
            className="text-lg font-bold font-display text-white hover:text-brand-amber transition-colors cursor-pointer line-clamp-1"
          >
            {project.title}
          </h3>
          <p className="text-xs font-sans text-dark-muted mt-1 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tags & Action Button */}
        <div className="pt-3 border-t border-dark-border/50 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {project.tags?.map((tag, i) => (
              <span key={i} className="text-[10px] font-mono text-dark-muted bg-dark-surface px-2 py-0.5 rounded">
                #{tag}
              </span>
            ))}
          </div>

          <button
            onClick={() => openLightbox(project)}
            data-cursor="expand"
            className="flex items-center gap-1 text-xs font-mono text-brand-amber font-bold hover:underline"
          >
            <span>View</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

    </motion.div>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, categories } from '../../data/projects';
import FilterBar from './FilterBar';
import VideoCard from './VideoCard';
import { ChevronDown } from 'lucide-react';

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  // Filter projects dynamically
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  const handleSelectCategory = (cat) => {
    setActiveCategory(cat);
    setVisibleCount(6); // reset pagination when filter changes
  };

  return (
    <section id="work" className="py-24 relative bg-dark-bg film-grain border-t border-dark-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-brand-amber tracking-[0.25em] uppercase font-bold"
          >
            PORTFOLIO SHOWCASE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight"
          >
            SELECTED WORK
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-dark-muted font-sans text-sm sm:text-base max-w-xl mx-auto"
          >
            A collection of edits created to capture attention, tell stories and keep audiences watching.
          </motion.p>
        </div>

        {/* Filter Tabs Navigation */}
        <FilterBar
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* Responsive Grid Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {displayedProjects.map((project) => (
              <VideoCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="mt-16 text-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 6)}
              data-cursor="expand"
              className="inline-flex items-center gap-2 bg-dark-card border border-dark-border hover:border-brand-amber text-white font-mono text-xs font-bold px-8 py-3.5 rounded-full transition-all hover:bg-dark-surface shadow-xl"
            >
              <span>Load More Projects</span>
              <ChevronDown className="w-4 h-4 text-brand-amber" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

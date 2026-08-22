import React from 'react';
import { motion } from 'framer-motion';

export default function FilterBar({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`relative px-5 py-2.5 rounded-full font-mono text-xs tracking-wider uppercase transition-all duration-300 ${
              isActive ? 'text-black font-bold' : 'text-dark-muted hover:text-white bg-dark-card border border-dark-border'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeFilterPill"
                className="absolute inset-0 bg-brand-amber rounded-full -z-10 shadow-glow-amber"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            {cat}
          </button>
        );
      })}
    </div>
  );
}

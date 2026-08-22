import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Film, Play, Scissors, Layers, Cpu } from 'lucide-react';

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING PROJECT...');
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setStatusText('READY TO PLAY');
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(() => onFinish && onFinish(), 600);
          }, 400);
          return 100;
        }

        const next = prev + Math.floor(Math.random() * 8) + 3;
        if (next > 30 && next < 60) setStatusText('LOADING ASSETS...');
        if (next >= 60 && next < 95) setStatusText('RENDERING EXPERIENCE...');
        return next > 100 ? 100 : next;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-[#090A0F] film-grain flex flex-col justify-between p-6 sm:p-12 select-none overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Top Post-Production Header Bar */}
          <div className="flex items-center justify-between text-xs font-mono text-dark-muted border-b border-dark-border/40 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse" />
              <span className="text-white font-semibold">ANTIGRAVITY NLE // V2.6</span>
            </div>
            <div className="hidden sm:flex items-center gap-6">
              <span>RES: 4K UHD</span>
              <span>FPS: 60.00</span>
              <span>CODEC: PRORES 422 HQ</span>
            </div>
          </div>

          {/* Center Brand & Timeline */}
          <div className="my-auto max-w-4xl mx-auto w-full text-center flex flex-col items-center">
            {/* Icons row */}
            <motion.div 
              className="flex items-center gap-4 mb-6 text-brand-amber/80"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Scissors className="w-5 h-5 animate-bounce" />
              <Layers className="w-5 h-5" />
              <Cpu className="w-5 h-5" />
              <Film className="w-5 h-5" />
            </motion.div>

            {/* Main Name */}
            <motion.h1 
              className="text-4xl sm:text-7xl font-black font-display tracking-wider text-white mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              MOHAMMAD SAAD
            </motion.h1>
            <motion.p
              className="text-sm sm:text-xl font-mono text-brand-amber tracking-[0.3em] uppercase mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              FREELANCE VIDEO EDITOR
            </motion.p>

            {/* Editing Timeline Progress Container */}
            <div className="w-full max-w-2xl bg-dark-card border border-dark-border rounded-xl p-4 shadow-2xl relative">
              {/* Timeline Header Track */}
              <div className="flex items-center justify-between font-mono text-xs text-dark-muted mb-3">
                <span className="flex items-center gap-1.5 text-brand-amber">
                  <Play className="w-3.5 h-3.5 fill-current" />
                  {statusText}
                </span>
                <span className="text-2xl font-bold text-white font-mono">
                  {String(progress).padStart(2, '0')}%
                </span>
              </div>

              {/* Progress Bar Track */}
              <div className="w-full h-3 bg-dark-bg rounded-full overflow-hidden p-0.5 border border-white/5 relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-brand-amber via-yellow-400 to-brand-cyan rounded-full relative"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-0 bottom-0 w-2 bg-white rounded-full shadow-[0_0_10px_#fff]" />
                </motion.div>
              </div>

              {/* Video Timeline Markers */}
              <div className="flex justify-between mt-3 px-1 font-mono text-[10px] text-dark-muted/60">
                <span>00:00:00</span>
                <span>00:00:15</span>
                <span>00:00:30</span>
                <span>00:00:45</span>
                <span>00:01:00</span>
              </div>
            </div>
          </div>

          {/* Footer Metadata */}
          <div className="flex items-center justify-between font-mono text-xs text-dark-muted border-t border-dark-border/40 pt-4">
            <span>CLIENT: PORTFOLIO SHOWCASE</span>
            <span className="text-brand-amber">STATUS: EDITING IN PROGRESS</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

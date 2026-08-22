import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw } from 'lucide-react';
import { showreelVideo } from '../data/projects';

export default function Showreel() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration || 1;
    setProgress((current / total) * 100);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section className="py-20 relative bg-dark-bg border-t border-dark-border/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-brand-amber tracking-[0.25em] uppercase font-bold"
          >
            FEATURED COMPILATION
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight"
          >
            WATCH THE SHOWREEL
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-dark-muted font-sans text-sm sm:text-base"
          >
            {showreelVideo.subtitle}
          </motion.p>
        </div>

        {/* Video Player Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-5xl mx-auto rounded-2xl bg-dark-card border border-dark-border overflow-hidden shadow-2xl group"
        >
          {/* Main HTML5 Video Tag */}
          <div className="relative aspect-video bg-black flex items-center justify-center">
            <video
              ref={videoRef}
              src={showreelVideo.videoUrl}
              poster={showreelVideo.poster}
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
              playsInline
              className="w-full h-full object-cover"
            />

            {/* Overlay big play button when paused */}
            {!isPlaying && (
              <div 
                onClick={togglePlay}
                data-cursor="play"
                className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer transition-opacity"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-brand-amber text-black flex items-center justify-center shadow-glow-amber hover:scale-110 transition-transform">
                  <Play className="w-9 h-9 fill-current ml-1" />
                </div>
              </div>
            )}
          </div>

          {/* Custom Video Controls Bar */}
          <div className="bg-dark-surface/90 border-t border-dark-border p-3 sm:p-4 flex flex-col gap-2">
            
            {/* Timeline Progress Bar */}
            <div className="w-full h-1.5 bg-dark-bg rounded-full overflow-hidden cursor-pointer">
              <div 
                className="h-full bg-brand-amber transition-all duration-100" 
                style={{ width: `${progress}%` }} 
              />
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between font-mono text-xs text-white">
              <div className="flex items-center gap-4">
                <button
                  onClick={togglePlay}
                  className="p-1.5 rounded-lg hover:bg-dark-card text-brand-amber transition-colors"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
                </button>
                <button
                  onClick={toggleMute}
                  className="p-1.5 rounded-lg hover:bg-dark-card text-dark-muted hover:text-white transition-colors"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX className="w-5 h-5 text-brand-red" /> : <Volume2 className="w-5 h-5" />}
                </button>
                <span className="text-[11px] text-dark-muted hidden sm:inline">
                  {showreelVideo.title}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={toggleFullscreen}
                  className="p-1.5 rounded-lg hover:bg-dark-card text-dark-muted hover:text-white transition-colors"
                  aria-label="Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}

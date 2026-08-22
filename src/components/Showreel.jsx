import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize2, ExternalLink } from 'lucide-react';
import { showreelVideo } from '../data/projects';
import { parseVideoUrl } from '../utils/videoHelper';

export default function Showreel() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  const videoParsed = parseVideoUrl(showreelVideo.videoUrl);

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
          {/* Main Video Container */}
          <div className="relative aspect-video bg-black flex items-center justify-center">
            {videoParsed.isGoogleDrive ? (
              /* Google Drive Embed Iframe */
              <iframe
                src={videoParsed.embedUrl}
                className="w-full h-full border-0"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                title={showreelVideo.title}
              />
            ) : (
              /* Standard Video Tag */
              <>
                <video
                  ref={videoRef}
                  src={showreelVideo.videoUrl}
                  poster={showreelVideo.poster}
                  onTimeUpdate={handleTimeUpdate}
                  onEnded={() => setIsPlaying(false)}
                  playsInline
                  className="w-full h-full object-cover"
                />

                {!isPlaying && (
                  <div 
                    onClick={togglePlay}
                    className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer transition-opacity"
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-brand-amber text-black flex items-center justify-center shadow-glow-amber hover:scale-110 transition-transform">
                      <Play className="w-9 h-9 fill-current ml-1" />
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Controls Bar / Metadata */}
          <div className="bg-dark-surface/90 border-t border-dark-border p-3 sm:p-4 flex items-center justify-between font-mono text-xs text-white">
            <div className="flex items-center gap-3">
              <span className="text-brand-amber font-semibold">{showreelVideo.title}</span>
              {videoParsed.isGoogleDrive && (
                <span className="px-2 py-0.5 rounded bg-brand-amber/10 border border-brand-amber/30 text-brand-amber text-[10px]">
                  Google Drive Stream
                </span>
              )}
            </div>

            {videoParsed.isGoogleDrive && (
              <a
                href={videoParsed.viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[11px] text-dark-muted hover:text-white transition-colors"
              >
                <span>Open in Drive</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

        </motion.div>
      </div>
    </section>
  );
}

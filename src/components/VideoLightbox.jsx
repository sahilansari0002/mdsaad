import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, Volume2, VolumeX, Tag, ExternalLink } from 'lucide-react';
import { useLightbox } from '../context/LightboxContext';
import { parseVideoUrl } from '../utils/videoHelper';

export default function VideoLightbox() {
  const { activeProject, closeLightbox } = useLightbox();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeLightbox]);

  useEffect(() => {
    if (activeProject && videoRef.current) {
      setIsPlaying(true);
      videoRef.current.play().catch(() => setIsPlaying(false));
    }
  }, [activeProject]);

  if (!activeProject) return null;

  const videoParsed = parseVideoUrl(activeProject.videoUrl);

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

  const isVertical = activeProject.aspectRatio === '9:16';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[10000] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
        onClick={closeLightbox}
      >
        {/* Modal Container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className={`relative bg-dark-card border border-dark-border rounded-2xl overflow-hidden shadow-2xl flex flex-col ${
            isVertical ? 'max-w-md w-full max-h-[90vh]' : 'max-w-5xl w-full'
          }`}
        >
          {/* Close Action Button */}
          <button
            onClick={closeLightbox}
            aria-label="Close modal"
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 border border-white/20 text-white hover:text-brand-amber flex items-center justify-center backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Video Container */}
          <div className={`relative bg-black flex items-center justify-center ${isVertical ? 'aspect-[9/16] max-h-[65vh]' : 'aspect-video'}`}>
            {videoParsed.isGoogleDrive ? (
              /* Google Drive Embed Player */
              <iframe
                src={videoParsed.embedUrl}
                className="w-full h-full border-0 rounded-t-2xl"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                title={activeProject.title}
              />
            ) : (
              /* Standard HTML5 Video Player */
              <>
                <video
                  ref={videoRef}
                  src={activeProject.videoUrl}
                  poster={activeProject.thumbnail}
                  onTimeUpdate={handleTimeUpdate}
                  onEnded={() => setIsPlaying(false)}
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                />

                {/* Big Play Overlay when Paused */}
                {!isPlaying && (
                  <div 
                    onClick={togglePlay}
                    className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-amber text-black flex items-center justify-center shadow-glow-amber">
                      <Play className="w-7 h-7 fill-current ml-1" />
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Controls Bar & Video Info */}
          <div className="bg-dark-surface p-4 sm:p-5 flex flex-col gap-3">
            {!videoParsed.isGoogleDrive && (
              /* Timeline Progress for standard videos */
              <div className="w-full h-1.5 bg-dark-bg rounded-full overflow-hidden cursor-pointer">
                <div 
                  className="h-full bg-brand-amber transition-all duration-100" 
                  style={{ width: `${progress}%` }} 
                />
              </div>
            )}

            {/* Video Controls & Title Header */}
            <div className="flex items-center justify-between font-mono text-xs text-white">
              {!videoParsed.isGoogleDrive ? (
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="p-1.5 rounded-lg bg-dark-card hover:bg-dark-border text-brand-amber transition-colors"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="p-1.5 rounded-lg bg-dark-card hover:bg-dark-border text-dark-muted hover:text-white transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-brand-red" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-brand-amber font-mono text-[11px]">
                  <span>GOOGLE DRIVE STREAM</span>
                </div>
              )}

              {/* Title & Category Info */}
              <div className="text-right flex flex-col items-end gap-1">
                <div className="font-bold text-white font-sans text-sm">{activeProject.title}</div>
                <div className="flex items-center gap-2">
                  {videoParsed.isGoogleDrive && (
                    <a
                      href={videoParsed.viewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[10px] text-brand-amber hover:underline bg-brand-amber/10 px-2 py-0.5 rounded border border-brand-amber/30"
                    >
                      <span>Open in Drive</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  <span className="text-[10px] text-brand-amber">{activeProject.category} • {activeProject.duration}</span>
                </div>
              </div>
            </div>

            <p className="text-xs font-sans text-dark-muted line-clamp-2 pt-1 border-t border-dark-border/40">
              {activeProject.description}
            </p>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

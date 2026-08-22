import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState({ text: '', variant: 'default' });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });

      // Inspect hovered target for custom cursor attributes
      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
      if (hoveredElement) {
        const cursorTarget = hoveredElement.closest('[data-cursor]');
        if (cursorTarget) {
          const type = cursorTarget.getAttribute('data-cursor');
          if (type === 'play') {
            setCursorState({ text: 'PLAY', variant: 'play' });
            return;
          } else if (type === 'view') {
            setCursorState({ text: 'VIEW', variant: 'view' });
            return;
          } else if (type === 'expand') {
            setCursorState({ text: '', variant: 'expand' });
            return;
          }
        }
      }
      setCursorState({ text: '', variant: 'default' });
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  if (isTouchDevice) return null;

  const variants = {
    default: {
      width: 14,
      height: 14,
      backgroundColor: '#F59E0B',
      border: '0px solid transparent',
      opacity: 0.8
    },
    expand: {
      width: 48,
      height: 48,
      backgroundColor: 'rgba(245, 158, 11, 0.15)',
      border: '1px solid rgba(245, 158, 11, 0.6)',
      opacity: 1
    },
    play: {
      width: 68,
      height: 68,
      backgroundColor: 'rgba(245, 158, 11, 0.95)',
      border: '0px solid transparent',
      opacity: 1
    },
    view: {
      width: 60,
      height: 60,
      backgroundColor: 'rgba(6, 182, 212, 0.95)',
      border: '0px solid transparent',
      opacity: 1
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full flex items-center justify-center font-mono text-xs font-bold text-black tracking-widest transition-transform duration-75"
      animate={{
        x: cursorPos.x - (variants[cursorState.variant].width / 2),
        y: cursorPos.y - (variants[cursorState.variant].height / 2),
        ...variants[cursorState.variant]
      }}
      transition={{ type: 'spring', damping: 28, stiffness: 350, mass: 0.3 }}
    >
      {cursorState.text}
    </motion.div>
  );
}

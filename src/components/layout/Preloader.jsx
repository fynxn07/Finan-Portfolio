import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const duration = prefersReducedMotion ? 0 : 2200;

    const timer = setTimeout(() => {
      setIsLoading(false);
      onComplete?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [prefersReducedMotion, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          // Radial red -> black gradient instead of a flat red fill —
          // bright red concentrated top-left, fading through dark maroon
          // into near-black toward the bottom-right, matching your
          // reference. "fixed inset-0" (no w-full/h-screen) still holds —
          // that's what guarantees full mobile coverage.
          className="fixed inset-0 z-[100000] flex flex-col items-center justify-center"
          style={{
            background: 'radial-gradient(circle at top left, #ff2a2a 0%, #6b0000 45%, #0a0000 100%)',
          }}
        >
          <motion.div
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="relative flex flex-col items-center"
          >
            <div className="relative text-5xl md:text-7xl font-black tracking-tighter">
              <div className="text-red-900/30">
                Finan Roshan
              </div>

              <motion.div
                className="absolute top-0 left-0 text-white overflow-hidden whitespace-nowrap"
                initial={{ clipPath: 'inset(100% 0 0 0)' }}
                animate={{ clipPath: 'inset(0% 0 0 0)' }}
                transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.2 }}
              >
                Finan Roshan
              </motion.div>
            </div>

            {/* Underline accent — animates in after the text reveal
                finishes, growing from the center outward like a loading
                bar settling into place. */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 1.1 }}
              className="mt-4 h-[1.5px] w-40 md:w-56 bg-white origin-center"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
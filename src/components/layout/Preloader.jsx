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
          // Removed "w-full h-screen" — they were conflicting with
          // "inset-0" and forcing the element back down to the shorter
          // 100vh height (which excludes the mobile address bar). "fixed
          // inset-0" alone already anchors to all four edges of the real
          // visible viewport, no vh unit involved, so it can't leave a gap.
          className="fixed inset-0 bg-[#ff2a2a] z-[100000] flex items-center justify-center"
        >
          <motion.div
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="relative text-5xl md:text-7xl font-black tracking-tighter"
          >
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
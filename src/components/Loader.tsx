import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../assets/images/logo.jpeg';

const Loader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          id="global-page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[150] bg-slate-950 flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-6">
            
            {/* Animated Logo Container */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="flex items-center justify-center"
            >
              <img
                src={logo}
                alt="Natiapara Air Travels"
                className="w-40 h-40 md:w-52 md:h-52 object-contain select-none"
                draggable={false}
              />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="text-xs md:text-sm font-semibold tracking-[0.35em] uppercase text-sky-400 text-center"
            >
              Aviation & Foreign Careers
            </motion.p>

            {/* Loading Bar */}
            <div className="w-48 h-1.5 bg-slate-800 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '300%' }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute top-0 left-0 h-full w-1/3 rounded-full bg-gradient-to-r from-blue-500 to-sky-400"
              />
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
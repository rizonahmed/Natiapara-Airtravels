import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PlaneTakeoff } from 'lucide-react';

export const Loader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dismiss loading scene after 1200ms
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
          className="fixed inset-0 z-150 bg-slate-950 flex flex-col items-center justify-center text-white"
        >
          <div className="relative flex flex-col items-center space-y-6">
            
            {/* Flying airplane taking off loop */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [-5, 10, -5],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="p-5 bg-blue-600 rounded-3xl text-white shadow-xl shadow-blue-500/10 border border-blue-500/20"
            >
              <PlaneTakeoff className="w-10 h-10" />
            </motion.div>

            {/* Pulsing branding title */}
            <div className="text-center">
              <motion.h2
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-2xl font-black tracking-widest text-white uppercase font-sans"
              >
                NATIAPARA
              </motion.h2>
              <p className="text-[10px] font-bold text-sky-450 tracking-wider text-sky-450 text-sky-400 uppercase">
                Aviation & Foreign Careers
              </p>
            </div>

            {/* Dotted travel runway indicator */}
            <div className="w-40 h-1 bg-slate-900 rounded-full relative overflow-hidden">
              <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: '100%' }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
                className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-blue-600 to-sky-450 to-sky-400 rounded-full"
              />
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Loader;

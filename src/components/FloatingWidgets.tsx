import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, MessageSquare } from 'lucide-react';

export const FloatingWidgets: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div id="corner-floating-widgets" className="fixed bottom-6 right-6 z-45 flex flex-col gap-4 select-none">
      
      {/* Scroll to Top Arrow Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            id="back-to-top-btn"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-12 h-12 flex items-center justify-center bg-slate-900/90 dark:bg-slate-100/95 text-white dark:text-slate-900 rounded-full shadow-lg border border-slate-800 dark:border-white/20 backdrop-blur-md cursor-pointer transition-colors"
            aria-label="Scroll back to Top page"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating pulsing WhatsApp Callout */}
      <motion.a
        id="floating-whatsapp-widget"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        href="https://wa.me/8801739284204"
        target="_blank"
        rel="noreferrer"
        className="relative w-12 h-12 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-xl flex items-center justify-center cursor-pointer shadow-emerald-500/20 overflow-visible group"
        aria-label="Direct WhatsApp Contact Support"
      >
        {/* Pulsing radar waves decoration */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping pointer-events-none scale-125 opacity-75" />
        
        <MessageSquare className="w-5 h-5 fill-current relative z-10" />

        {/* Hover label context */}
        <div className="absolute right-14 bg-slate-900/90 backdrop-blur-md text-white text-[10px] font-bold py-1 px-2.5 rounded-lg border border-slate-800 tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block whitespace-nowrap">
          WhatsApp Support Call
        </div>
      </motion.a>

    </div>
  );
};
export default FloatingWidgets;

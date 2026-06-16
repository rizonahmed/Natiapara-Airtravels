import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { motion, AnimatePresence } from 'motion/react';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      id="theme-toggle-btn"
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      onClick={toggleTheme}
      className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/60 dark:hover:bg-slate-800/80 text-slate-800 dark:text-amber-400 font-medium transition-colors border border-slate-200/50 dark:border-slate-800/60 relative overflow-hidden flex items-center justify-center w-10 h-10 cursor-pointer"
      aria-label="Toggle theme mode"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'light' ? (
          <motion.div
            key="moon"
            initial={{ y: -30, rotate: -90, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            exit={{ y: 30, rotate: 90, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 450, damping: 20 }}
            className="flex items-center justify-center"
          >
            <Moon id="theme-toggle-icon-moon" className="w-5 h-5" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ y: -30, rotate: 90, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            exit={{ y: 30, rotate: -90, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 450, damping: 20 }}
            className="flex items-center justify-center"
          >
            <Sun id="theme-toggle-icon-sun" className="w-5 h-5 text-amber-400" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};
export default ThemeToggle;

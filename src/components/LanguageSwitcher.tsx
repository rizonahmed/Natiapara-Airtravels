import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Languages } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div id="language-switcher-container" className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/60 p-1 rounded-xl">
      <Languages className="hidden md:block w-4 h-4 text-slate-500 dark:text-slate-400 ml-1" />
      <motion.button
        id="btn-lang-en"
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 text-xs font-semibold rounded ${
          language === 'en'
            ? 'bg-blue-600 text-white shadow-sm'
            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
        } transition-all`}
      >
        EN
      </motion.button>
      <motion.button
        id="btn-lang-bn"
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage('bn')}
        className={`px-2.5 py-1 text-xs font-semibold rounded ${
          language === 'bn'
            ? 'bg-blue-600 text-white shadow-sm'
            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
        } transition-all`}
      >
        বাং
      </motion.button>
    </div>
  );
};
export default LanguageSwitcher;

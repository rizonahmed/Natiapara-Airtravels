import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqItems = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
    { q: t('faq.q5'), a: t('faq.a5') },
  ];

  const handleToggle = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      className="relative py-28 bg-slate-50 dark:bg-slate-950 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 left-10 w-[320px] h-[320px] bg-blue-500/10 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 right-10 w-[340px] h-[340px] bg-sky-500/10 blur-[120px] rounded-full"
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase
            bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-md"
          >
            <HelpCircle className="w-4 h-4 text-blue-500" />
            {t('faq.badge')}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-4xl sm:text-5xl font-black text-slate-900 dark:text-white"
          >
            {t('faq.title')}
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 150 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="h-[3px] mx-auto mt-5 rounded-full bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-300"
          />
        </div>

        {/* FAQ Items */}
        <div className="space-y-5">
          {faqItems.map((item, idx) => {
            const isOpen = openIdx === idx;

            return (
              <motion.div
                key={idx}
                layout
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className={`relative rounded-2xl border overflow-hidden backdrop-blur-md transition-all duration-300
                  ${
                    isOpen
                      ? 'border-blue-400/60 shadow-lg shadow-blue-200/20 dark:shadow-blue-900/20'
                      : 'border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-sky-700'
                  }
                  bg-white/70 dark:bg-slate-900/60`}
              >
                {/* glow line */}
                <motion.div
                  animate={{ width: isOpen ? '100%' : '0%' }}
                  transition={{ duration: 0.4 }}
                  className="h-[2px] bg-gradient-to-r from-blue-500 to-sky-400"
                />

                {/* Question */}
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left group"
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/40"
                    >
                      <HelpCircle className="w-5 h-5 text-blue-500 dark:text-sky-400" />
                    </motion.div>

                    <span className="text-sm sm:text-base font-semibold text-slate-800 dark:text-white">
                      {item.q}
                    </span>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:scale-110 transition"
                  >
                    <ChevronDown className="w-5 h-5 text-slate-500 dark:text-slate-300" />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-2">
                        <motion.div
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          className="pl-10 border-l-2 border-blue-200 dark:border-sky-800"
                        >
                          <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                            {item.a}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
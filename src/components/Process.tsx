import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { MessageSquare, FolderDown, Activity, PlaneTakeoff, ChevronRight } from 'lucide-react';

export const Process: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      id: 1,
      icon: <MessageSquare className="w-5 h-5 text-blue-650 text-blue-600" />,
      title: t('process.step1.title'),
      desc: t('process.step1.desc'),
    },
    {
      id: 2,
      icon: <FolderDown className="w-5 h-5 text-amber-500" />,
      title: t('process.step2.title'),
      desc: t('process.step2.desc'),
    },
    {
      id: 3,
      icon: <Activity className="w-5 h-5 text-emerald-500" />,
      title: t('process.step3.title'),
      desc: t('process.step3.desc'),
    },
    {
      id: 4,
      icon: <PlaneTakeoff className="w-5 h-5 text-purple-500 rotate-45" />,
      title: t('process.step4.title'),
      desc: t('process.step4.desc'),
    },
  ];

  return (
    <section
      id="process"
      className="py-24 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors relative overflow-hidden"
    >
      {/* Decorative runway vector */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-dashed border-t-2 border-dashed border-slate-300 dark:border-slate-800 z-0 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Process Header */}
        <div id="process-header" className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-bold tracking-widest text-blue-600 dark:text-sky-400 uppercase bg-blue-50 dark:bg-blue-950/40 px-3.5 py-1.5 rounded-full"
          >
            {t('process.badge')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mt-4"
          >
            {t('process.title')}
          </motion.h2>
        </div>

        {/* Timeline Steps Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              id={`process-step-${step.id}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 p-6 rounded-3xl shadow-xs hover:shadow-lg transition-all"
            >
              {/* Runway index label */}
              <div className="absolute top-4 right-4 text-3xl font-black text-slate-100 dark:text-slate-800 select-none group-hover:scale-105 group-hover:text-amber-500/10 transition-all">
                0{step.id}
              </div>

              {/* Step Icon Container */}
              <div className="p-3 w-fit rounded-2xl bg-slate-50 dark:bg-slate-950 shadow-xs border border-slate-100 dark:border-slate-800 flex items-center justify-center mb-5 group-hover:bg-blue-500/10 dark:group-hover:bg-sky-400/15 group-hover:scale-110 transition-all duration-350">
                {step.icon}
              </div>

              {/* Text Blocks */}
              <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white mb-2 leading-tight">
                {step.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed text-justify">
                {step.desc}
              </p>

              {/* Dotted connecting arrow right on web layout */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-6 transform -translate-y-1/2 z-20 text-slate-300 dark:text-slate-700 font-bold">
                  <ChevronRight className="w-5 h-5" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Process;

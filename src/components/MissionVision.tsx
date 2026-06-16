import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Target, Eye, Compass, Trophy } from 'lucide-react';

export const MissionVision: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="mission-vision"
      className="py-24 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Mission Card block */}
          <motion.div
            id="mission-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 text-white relative overflow-hidden group shadow-xl border border-slate-800"
          >
            {/* Ambient pattern backdrop */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] pointer-events-none rounded-full group-hover:bg-blue-600/20 transition-all" />

            <div className="relative z-10">
              <div className="p-4 w-fit rounded-2xl bg-slate-805 bg-slate-800 border border-slate-700/60 shadow-inner text-sky-400 mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4">
                {t('mission.title')}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
                {t('mission.desc')}
              </p>
            </div>
            
            {/* Golden Highlight Border Accent at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#F59E0B]" />
          </motion.div>

          {/* Vision Card block */}
          <motion.div
            id="vision-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 text-white relative overflow-hidden group shadow-xl border border-slate-800"
          >
            {/* Ambient pattern backdrop */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 blur-[50px] pointer-events-none rounded-full group-hover:bg-sky-500/20 transition-all" />

            <div className="relative z-10">
              <div className="p-4 w-fit rounded-2xl bg-slate-805 bg-slate-800 border border-slate-700/60 shadow-inner text-[#F59E0B] mb-6 group-hover:scale-110 transition-transform">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4">
                {t('vision.title')}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
                {t('vision.desc')}
              </p>
            </div>

            {/* Blue Accent at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#1E40AF]" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
export default MissionVision;

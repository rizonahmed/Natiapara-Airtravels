import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { ShieldCheck, Heart, PhoneCall, Tag, Zap, Award, Map, Smile } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();

  const reasons = [
    {
      id: 'licensed',
      icon: <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-sky-400" />,
      title: t('why.licensed.title'),
      desc: t('why.licensed.desc'),
    },
    {
      id: 'trusted',
      icon: <Heart className="w-6 h-6 text-rose-550 text-rose-500" />,
      title: t('why.trusted.title'),
      desc: t('why.trusted.desc'),
    },
    {
      id: 'support',
      icon: <PhoneCall className="w-6 h-6 text-emerald-500" />,
      title: t('why.support.title'),
      desc: t('why.support.desc'),
    },
    {
      id: 'pricing',
      icon: <Tag className="w-6 h-6 text-amber-500" />,
      title: t('why.pricing.title'),
      desc: t('why.pricing.desc'),
    },
    {
      id: 'processing',
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: t('why.processing.title'),
      desc: t('why.processing.desc'),
    },
    {
      id: 'team',
      icon: <Award className="w-6 h-6 text-purple-500" />,
      title: t('why.team.title'),
      desc: t('why.team.desc'),
    },
    {
      id: 'coverage',
      icon: <Map className="w-6 h-6 text-teal-500" />,
      title: t('why.coverage.title'),
      desc: t('why.coverage.desc'),
    },
    {
      id: 'satisfaction',
      icon: <Smile className="w-6 h-6 text-indigo-500" />,
      title: t('why.satisfaction.title'),
      desc: t('why.satisfaction.desc'),
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-24 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Why Choose Us Header */}
        <div id="why-choose-us-header" className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-bold tracking-widest text-blue-600 dark:text-sky-450 dark:text-sky-400 uppercase bg-blue-50 dark:bg-blue-950/40 px-3.5 py-1.5 rounded-full"
          >
            {t('why.badge')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mt-4"
          >
            {t('why.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-4"
          >
            {t('why.subtitle')}
          </motion.p>
        </div>

        {/* Features Card List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div
              key={reason.id}
              id={`why-card-${reason.id}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-850/80 hover:border-blue-500/15 dark:hover:border-sky-400/20 hover:bg-white dark:hover:bg-slate-850 hover:shadow-lg transition-all"
            >
              <div className="p-3 w-fit rounded-xl bg-white dark:bg-slate-900 shadow-xs mb-4">
                {reason.icon}
              </div>
              <h3 className="font-extrabold text-base text-slate-905 dark:text-white mb-2 leading-none">
                {reason.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default WhyChooseUs;

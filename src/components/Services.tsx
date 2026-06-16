import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Plane, Ticket, PlaneTakeoff, Globe, FileText, Briefcase, Users, Sparkles } from 'lucide-react';
import { HelicopterIcon } from './Icons';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const servicesData = [
    {
      id: 'intl',
      icon: <Plane className="w-7 h-7 text-blue-600 dark:text-sky-400 rotate-45" />,
      title: t('services.intl.title'),
      desc: t('services.intl.desc'),
    },
    {
      id: 'dom',
      icon: <Ticket className="w-7 h-7 text-amber-500" />,
      title: t('services.dom.title'),
      desc: t('services.dom.desc'),
    },
    {
      id: 'heli',
      icon: <HelicopterIcon className="w-7 h-7 text-emerald-500" />,
      title: t('services.heli.title'),
      desc: t('services.heli.desc'),
    },
    {
      id: 'manpower',
      icon: <Globe className="w-7 h-7 text-purple-500 animate-spin-slow" />,
      title: t('services.manpower.title'),
      desc: t('services.manpower.desc'),
    },
    {
      id: 'visa',
      icon: <FileText className="w-7 h-7 text-blue-550 text-sky-400" />,
      title: t('services.visa.title'),
      desc: t('services.visa.desc'),
    },
    {
      id: 'corporate',
      icon: <Briefcase className="w-7 h-7 text-slate-700 dark:text-slate-350" />,
      title: t('services.corp.title'),
      desc: t('services.corp.desc'),
    },
    {
      id: 'group',
      icon: <Users className="w-7 h-7 text-teal-650 text-teal-550" />,
      title: t('services.group.title'),
      desc: t('services.group.desc'),
    },
    {
      id: 'umrah',
      icon: <Sparkles className="w-7 h-7 text-amber-500" />,
      title: t('services.umrah.title'),
      desc: t('services.umrah.desc'),
    },
  ];

  const handleLearnMore = (serviceTitle: string) => {
    // Select dropdown in Contact Form
    const selectEl = document.getElementById('contact-service-select') as HTMLSelectElement;
    if (selectEl) {
      selectEl.value = serviceTitle;
      // Trigger native change event so any local React state is synchronized
      const event = new Event('change', { bubbles: true });
      selectEl.dispatchEvent(event);
    }

    // Scroll to contact
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      className="py-24 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Services Header */}
        <div id="services-header" className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-bold tracking-widest text-blue-600 dark:text-sky-400 uppercase bg-blue-50 dark:bg-blue-950/40 px-3.5 py-1.5 rounded-full"
          >
            {t('services.badge')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mt-4"
          >
            {t('services.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-4"
          >
            {t('services.subtitle')}
          </motion.p>
        </div>

        {/* Services Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.id}
              id={`service-card-${service.id}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/60 shadow-xs hover:shadow-xl hover:bg-white dark:hover:bg-slate-800 hover:border-blue-500/20 dark:hover:border-sky-400/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon stage */}
                <div className="p-3 w-fit rounded-xl bg-white dark:bg-slate-900 shadow-xs group-hover:scale-110 transition-transform duration-300 mb-5">
                  {service.icon}
                </div>
                
                {/* Text Content */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
                  {service.desc}
                </p>
              </div>

              {/* Action Trigger */}
              <button
                id={`service-learn-more-${service.id}`}
                onClick={() => handleLearnMore(service.title)}
                className="w-fit text-xs font-bold text-blue-600 dark:text-sky-450 dark:text-sky-450 text-blue-600 dark:text-sky-400 group-hover:underline flex items-center gap-1 hover:translate-x-1 transition-transform cursor-pointer"
              >
                <span>{t('btn.learnMore')}</span>
                <span>&rarr;</span>
              </button>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Services;

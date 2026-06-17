import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { ShieldCheck, Calendar, Award, Landmark, Users } from 'lucide-react';

const aboutImg = '/src/assets/images/travel_consultation_about_1780953619292.png';

export const About: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section
      id="about"
      className="py-24 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Section Header */}
        <div id="about-header" className="max-w-3xl mb-16 text-left">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-bold tracking-widest text-blue-600 dark:text-sky-450 dark:text-sky-400 uppercase bg-blue-50 dark:bg-blue-950/40 px-3.5 py-1.5 rounded-full"
          >
            {t('about.badge')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mt-4 leading-tight"
          >
            {t('about.title')}
          </motion.h2>
        </div>

        {/* Side by Side Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Side A: Styled Image with Badge and Stats Overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative group"
          >
            {/* Soft backdrop blur decoration */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-sky-500/10 to-blue-600/10 rounded-2xl blur-xl group-hover:opacity-100 transition duration-500 opacity-75" />
            
            <div className="relative overflow-hidden rounded-3xl shadow-xl border border-slate-200/50 dark:border-slate-800/80">
              <img
                src="https://a.storyblok.com/f/203826/5890x3919/ab047cd564/istock-1413299539.jpg/m/3840x0/filters:quality(60)"
                alt="Travel Consultation Desk"
                referrerPolicy="no-referrer"
                className="w-full h-auto aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Image Gradient Tint */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />
            </div>

            {/* Experience overlay card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 right-6 left-6 sm:left-auto sm:w-72 p-5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800/80 flex items-center gap-4"
            >
              <div className="p-3 bg-blue-600 rounded-xl text-white shadow-lg shadow-blue-500/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-slate-900 dark:text-white text-lg">
                  {t('company.reg')}
                </span>
                <span className="text-xs text-blue-600 dark:text-sky-400 font-semibold uppercase tracking-wider">
                  {language === 'en' ? 'Government License Approved' : 'সরকারি রেজি লাইসেন্সপ্রাপ্ত'}
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Side B: Rich Content, Credentials, and Badges */}
          <div className="lg:col-span-6 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium"
            >
              {t('about.desc1')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base text-justify"
            >
              {t('about.desc2')}
            </motion.p>

            {/* Value Check Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200/65 dark:border-slate-800/80">
              <div className="flex items-start gap-2.5">
                <div className="mt-1 p-1.5 rounded-lg bg-blue-550/10 text-blue-600 dark:text-sky-400 bg-sky-500/10">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                    10+ {t('about.experience')}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {language === 'en' ? 'Trusted Market Presence' : 'দীর্ধদিনের বিশ্বস্ত সেবা'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="mt-1 p-1.5 rounded-lg bg-emerald-555/10 text-emerald-600 dark:text-emerald-450 bg-emerald-500/10">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                    {language === 'en' ? '100% Secure' : '১০০% বিশ্বস্ততা'}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {language === 'en' ? 'Safe document management' : 'নিরাপদ ডকুমেন্ট প্রসেসিং'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="mt-1 p-1.5 rounded-lg bg-amber-555/10 text-amber-600 dark:text-amber-450 bg-amber-500/10">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                    {language === 'en' ? 'Official Plaza Office' : 'অফিশিয়াল প্লাজা অফিস'}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {language === 'en' ? 'M A Plaza, Natiapara' : 'এম এ প্লাজা, নাটিয়াপাড়া'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="mt-1 p-1.5 rounded-lg bg-purple-555/10 text-purple-600 dark:text-purple-450 bg-purple-500/10">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                    {language === 'en' ? 'Expert Team' : 'অভিজ্ঞ ও স্পেশালিস্ট টিম'}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {language === 'en' ? 'Custom flight & job routing' : 'সেরা ট্রাভেল ও ফ্লাইট গাইড'}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default About;

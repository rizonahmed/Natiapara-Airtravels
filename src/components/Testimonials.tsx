import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);

  const reviews = [
    {
      name: 'Jewel Ahmed',
      country: language === 'en' ? 'Saudi Arabia' : 'সৌদি আরব',
      rating: 5,
      review:
        language === 'en'
          ? 'Natiapara Air Travels processed my Saudi Arabia tourist visa with absolute transparency. I received my verified ticket in record time. Excellent advice.'
          : 'নাটিয়াপাড়া এয়ার ট্রাভেলস আমার সৌদি আরবের ট্যুরিস্ট ও ওমরাহ ভিসা অত্যন্ত স্বচ্ছ ও আইনি নিয়মে সম্পন্ন করে দিয়েছে। খুব দ্রুত সময়ের মধ্যে ফ্লাইটের টিকিটও পেয়ে যাই।',
    },
    {
      name: 'Shamim Reza',
      country: language === 'en' ? 'Romania (Europe)' : 'রোমানিয়া (ইউরোপ)',
      rating: 5,
      review:
        language === 'en'
          ? 'Exceptional visa consulting for European travels. Their team curated my documents and submission files with meticulous professionalism. Highly recommended.'
          : 'ইউরোপ বা রোমানিয়ার ট্যুরিস্ট ভিসার ফাইল প্রসেসিংয়ের জন্য তাদের টিম নিখুঁত সহযোগিতা করেছে। প্রতিটি ধাপে তাদের কাজের জবাবদিহিতা ও আন্তরিকতা ছিল প্রশংসনীয়।',
    },
    {
      name: 'Tania Sultana',
      country: language === 'en' ? 'Dubai, UAE' : 'দুবাই, ইউএই',
      rating: 5,
      review:
        language === 'en'
          ? 'Outstanding flight booking experience. Their 24/7 support desk is incredibly highly professional; they assisted us with a midnight reschedule effortlessly. Truly wonderful.'
          : 'অসাধারণ এয়ার টিকিট বুকিং সার্ভিস। গভীর রাতে ফ্লাইট পরিবর্তনের জরুরি প্রয়োজনে ২৪/৭ কাস্টমার ডেস্ক মিনিট কয়েকের মধ্যে সাপোর্ট দিয়ে টিকিট কনফার্ম করে দিয়েছিল।',
    },
  ];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section
      id="testimonials"
      className="py-24 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Testimonials Header */}
        <div id="testimonials-header" className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-bold tracking-widest text-blue-600 dark:text-sky-400 uppercase bg-blue-50 dark:bg-blue-950/40 px-3.5 py-1.5 rounded-full"
          >
            {t('testi.badge')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mt-4"
          >
            {t('testi.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-4"
          >
            {t('testi.subtitle')}
          </motion.p>
        </div>

        {/* Carousel Slider Stage */}
        <div className="max-w-3xl mx-auto relative px-4">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="p-8 sm:p-12 bg-white dark:bg-slate-900 rounded-3xl shadow-lg border border-slate-200/50 dark:border-slate-800/80 relative"
            >
              {/* Giant decorative quote mark */}
              <Quote className="absolute top-6 left-6 w-12 h-12 text-slate-100 dark:text-slate-800 pointer-events-none" />

              {/* Star rating stack */}
              <div id="stars-row" className="flex items-center gap-1 mb-6">
                {[...Array(reviews[activeIdx].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                ))}
              </div>

              {/* Customer review text */}
              <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-355 text-slate-600 dark:text-slate-300 italic leading-relaxed mb-6">
                "{reviews[activeIdx].review}"
              </p>

              {/* Author alignment details */}
              <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-5">
                <div>
                  <h4 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                    {reviews[activeIdx].name}
                  </h4>
                  <p className="text-xs text-blue-600 dark:text-sky-400 font-semibold uppercase tracking-wider">
                    {reviews[activeIdx].country}
                  </p>
                </div>
                <div className="hidden sm:block text-xs font-mono font-bold text-slate-450 dark:text-slate-500 bg-slate-50 dark:bg-slate-950 px-2.5 py-1 rounded">
                  VERIFIED CLIENT
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              id="slider-btn-prev"
              onClick={handlePrev}
              className="p-3 bg-white hover:bg-slate-55 bg-white hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-white rounded-full border border-slate-200 dark:border-slate-800 shadow-md hover:scale-105 transition-all cursor-pointer"
              aria-label="Previous slide review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-1.5">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`h-2 rounded-full cursor-pointer transition-all ${
                    i === activeIdx ? 'w-6 bg-blue-650 bg-blue-600' : 'w-2 bg-slate-300 dark:bg-slate-700'
                  }`}
                  aria-label={`Go to slide ${i}`}
                />
              ))}
            </div>
            <button
              id="slider-btn-next"
              onClick={handleNext}
              className="p-3 bg-white hover:bg-slate-55 bg-white hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-white rounded-full border border-slate-200 dark:border-slate-800 shadow-md hover:scale-105 transition-all cursor-pointer"
              aria-label="Next slide review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
export default Testimonials;

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../hooks/useTheme';
import { motion } from 'motion/react';
import { Plane, Compass, Globe, FileText, ChevronRight, Phone, ChevronLeft, PlaneTakeoff } from 'lucide-react';
import { HelicopterIcon, WhatsAppIcon } from './Icons';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  // Track real-time window width for bulletproof mobile calibration
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 640;
  const xOffset = isMobile ? 12 : 24;
  const yOffset = isMobile ? 8 : 14;

  const carouselItems = [
    {
      id: 'intl',
      icon: <Plane className="w-5 h-5 text-sky-500 dark:text-sky-400 rotate-45" />,
      title: t('services.intl.title'),
      desc: t('services.intl.desc'),
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
      tag: t('hero.feat.intl'),
      badgeColor: 'bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800'
    },
    {
      id: 'dom',
      icon: <PlaneTakeoff className="w-5 h-5 text-amber-500 dark:text-amber-400" />,
      title: t('services.dom.title'),
      desc: t('services.dom.desc'),
      image: 'https://businessinspection.com.bd/wp-content/uploads/2021/12/Domestic-Aviation-Industry-1.jpg',
      tag: t('nav.services'),
      badgeColor: 'bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800'
    },
    {
      id: 'heli',
      icon: <HelicopterIcon className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />,
      title: t('services.heli.title'),
      desc: t('services.heli.desc'),
      image: 'https://redballoon.com.au/dw/image/v2/BCRD_PRD/on/demandware.static/-/Sites-rb-au-catalog/default/images/products/BOH040-M/i25a9ggj4rnvz9ftsekm.jpg?sw=784&sh=431&q=70',
      tag: t('hero.feat.heli'),
      badgeColor: 'bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800'
    },
    {
      id: 'visa',
      icon: <FileText className="w-5 h-5 text-purple-500 dark:text-purple-400" />,
      title: t('services.manpower.title'),
      desc: t('services.manpower.desc'),
      image: 'https://images.unsplash.com/photo-1544750040-4ea9b8a27d38?auto=format&fit=crop&w=800&q=80',
      tag: t('hero.feat.visa'),
      badgeColor: 'bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-800'
    },
    {
      id: 'umrah',
      icon: <Globe className="w-5 h-5 text-rose-500 dark:text-rose-400" />,
      title: t('services.umrah.title'),
      desc: t('services.umrah.desc'),
      image: 'https://media.istockphoto.com/id/1513886439/photo/kabe-mekke-medine-hac-hz-muhammed.jpg?s=612x612&w=0&k=20&c=ER0DWMUsgPAiFaL6NACKvNE7dHKYDH8eOFsezDUJ2iU=',
      tag: t('hero.feat.overseas'),
      badgeColor: 'bg-rose-100 dark:bg-rose-950/50 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-800'
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play the 3D Carousel Slider every 4.5 seconds
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselItems.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered, carouselItems.length]);

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % carouselItems.length);
  };

  return (
    <section
      id="home"
      className="relative min-h-[110vh] lg:min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-white transition-colors duration-500"
    >
      {/* Background Image with elegant overlay */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="/src/assets/images/aviation_hero_bg_1780953603171.png"
          alt="Aviation Background"
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover object-center transition-all duration-700 ${
            theme === 'dark' 
              ? 'opacity-35' 
              : 'opacity-[0.48] brightness-[0.98] contrast-[1.05] grayscale-[20%]'
          }`}
        />
        {/* Dynamic theme-relative gradients for readable typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-slate-50/30 dark:from-slate-950 dark:via-slate-950/95 dark:to-transparent transition-all duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50/90 via-transparent to-slate-50/45 dark:from-slate-950/80 dark:via-transparent dark:to-slate-950/50 transition-all duration-500" />
      </div>

      {/* Floating Animated Radials/Aviation particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-[340px] h-[340px] bg-blue-500/10 dark:bg-blue-500/10 blur-[110px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/3 right-1/4 w-[380px] h-[380px] bg-sky-500/15 dark:bg-sky-500/10 blur-[130px] rounded-full"
        />
      </div>

      {/* Main Content Stage */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Curation */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/65 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 backdrop-blur-md"
            >
              <Plane className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 rotate-45 animate-pulse" />
              <span className="text-xs sm:text-sm font-bold tracking-wide text-blue-700 dark:text-sky-300">
                {t('hero.badge')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-slate-900 dark:text-white font-sans"
            >
              {t('hero.title')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl font-bold text-blue-600 dark:text-sky-400"
            >
              {t('hero.sub')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed"
            >
              {t('hero.desc')}
            </motion.p>

            {/* Premium CTA Button Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3.5 pt-4"
            >
              <motion.a
                id="hero-call-now"
                href="tel:+8801739284204"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-bold text-white btn-3d-primary shimmer-btn transition-all text-sm sm:text-base cursor-pointer"
              >
                <Phone className="w-4.5 h-4.5" />
                <span>{t('btn.call')}</span>
              </motion.a>

              <motion.a
                id="hero-whatsapp-now"
                href="https://wa.me/8801739284204"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-bold text-white btn-3d-emerald shimmer-btn transition-all text-sm sm:text-base cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white" />
                <span>{t('btn.whatsapp')}</span>
              </motion.a>

              <motion.a
                id="hero-get-quote"
                href="#contact"
                className="inline-flex items-center gap-1.5 px-6 py-4 rounded-xl font-bold text-slate-750 dark:text-slate-200 btn-3d-glass shimmer-btn transition-all text-sm sm:text-base cursor-pointer"
              >
                <span>{t('btn.getQuote')}</span>
                <ChevronRight className="w-4 h-4 text-blue-500 dark:text-sky-400 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </motion.div>
          </div>

          {/* Premium 3D Stacked-Deck Carousel Slider Panel */}
          <div className="lg:col-span-6 flex flex-col items-center mt-12 lg:mt-0 relative overflow-visible select-none px-4 sm:px-0">
            <div
              className="relative w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[460px] h-[410px] sm:h-[480px] lg:h-[490px] flex items-center justify-center select-none overflow-visible"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {carouselItems.map((item, idx) => {
                const totalItems = carouselItems.length;
                // Calculate stack position relative to active card
                const stackPos = (idx - activeIndex + totalItems) % totalItems;

                const isActive = stackPos === 0;

                // Render only 3 cards in the deck stack to keep it extremely clean and clear
                if (stackPos > 2) return null;

                const translateX = stackPos * xOffset;
                const translateY = stackPos * yOffset;
                const rotateZ = stackPos * 3.5;
                const scale = 1 - stackPos * 0.06;
                const zIndex = 30 - stackPos;
                const opacity = stackPos === 0 ? 1 : stackPos === 1 ? 0.9 : 0.6;

                return (
                  <motion.div
                    key={item.id}
                    id={`hero-slide-${item.id}`}
                    style={{
                      zIndex,
                    }}
                    animate={{
                      x: translateX,
                      y: translateY,
                      scale,
                      opacity,
                      rotate: rotateZ,
                    }}
                    whileHover={isActive ? { y: translateY - 8, scale: 1.015, zIndex: 35 } : {}}
                    transition={{
                      type: 'spring',
                      stiffness: 160,
                      damping: 18,
                    }}
                    onClick={() => {
                      if (!isActive) setActiveIndex(idx);
                    }}
                    className={`absolute w-full h-full rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-2xl transition-colors duration-300 flex flex-col hover:border-blue-300 dark:hover:border-slate-700 group ${
                      isActive 
                        ? 'ring-1 ring-blue-500/25 dark:ring-sky-400/20 shadow-blue-500/10 dark:shadow-sky-400/5 cursor-default' 
                        : 'cursor-pointer hover:opacity-100'
                    }`}
                  >
                    {/* Cover Photo */}
                    <div className="relative w-full h-[54%] overflow-hidden bg-slate-100 dark:bg-slate-800">
                      <img
                        src={item.image}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-transparent to-transparent" />
                      
                      {/* Interactive Visual Tag */}
                      <span className={`absolute top-4 left-4 text-[10px] sm:text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border backdrop-blur-md ${item.badgeColor}`}>
                        {item.tag}
                      </span>
                    </div>

                    {/* Content Detail */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between text-left">
                      <div>
                        <div className="flex items-center gap-2 mb-1 border-b border-slate-100 dark:border-slate-800/10 pb-1.5">
                          <span className="p-1 rounded-lg bg-blue-50 dark:bg-blue-950/40">
                            {item.icon}
                          </span>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-800 dark:text-white leading-snug line-clamp-1">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed line-clamp-3">
                          {item.desc}
                        </p>
                      </div>

                      {/* Direct Slider Booking Link */}
                      <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                        <span className="text-[10px] sm:text-xs font-bold text-slate-400 tracking-wider">
                          Natiapara Air Travels
                        </span>
                        <a
                          id={`slide-btn-${item.id}`}
                          href="#contact"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/20 active:scale-95 transition-transform"
                        >
                          <span>{t('btn.getQuote')}</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Slider Micro Controls */}
            <div className="flex items-center gap-5 mt-6 relative z-30">
              <button
                id="hero-slider-prev"
                onClick={(e) => handlePrev(e)}
                className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 active:scale-90 transition-transform shadow-md"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Slider Dots Indicator */}
              <div className="flex items-center gap-2.5">
                {carouselItems.map((_, idx) => (
                  <button
                    key={idx}
                    id={`hero-slider-dot-${idx}`}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      idx === activeIndex
                        ? 'bg-blue-600 dark:bg-sky-400 w-6'
                        : 'bg-slate-350 dark:bg-slate-700 lg:bg-slate-200 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                id="hero-slider-next"
                onClick={(e) => handleNext(e)}
                className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 active:scale-90 transition-transform shadow-md"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default Hero;

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../hooks/useTheme';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'motion/react';
import { PlaneTakeoff, Menu, X, Phone } from 'lucide-react';
import { WhatsAppIcon } from './Icons';
import logo from '../assets/images/logo.jpeg'

export const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeItem, setActiveItem] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      // Scrolled state for navigation styling
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll progress percentage calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver to detect currently active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger when section fills focal middle screen region
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveItem(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    const sectionIds = ['home', 'about', 'services', 'countries', 'faq', 'contact'];
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const navItems = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.countries'), href: '#countries' },
    { label: t('nav.faq'), href: '#faq' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-md border-slate-200/80 dark:border-slate-800/80'
          : 'bg-white/80 dark:bg-slate-900/40 backdrop-blur-xs border-slate-200/50 dark:border-slate-800/20'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div
        id="scroll-progress-bar"
        className="h-[3px] bg-gradient-to-r from-blue-600 via-sky-400 to-amber-500 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Company Name */}
          <a
            id="nav-logo-link"
            href="#home"
            className="flex items-center gap-2 group cursor-pointer max-w-[55%]"
          >
            <div className="p-1.5 sm:p-2    text-white   group-hover:scale-110 transition-transform  ">
              <img src={logo} alt=""  className='h-16  rounded-2xl'/>
            </div>
          </a>

          {/* Desktop Navigation Links with sliding active underlines */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = activeItem === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-bold relative py-2 px-1 cursor-pointer transition-all duration-150 ${
                    isActive
                      ? 'text-blue-600 dark:text-sky-400'
                      : 'text-slate-700 dark:text-slate-250 hover:text-blue-600 dark:hover:text-sky-400 hover:-translate-y-[1px]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 to-sky-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Widgets */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeToggle />

            {/* Quick Contact Buttons */}
            <div className="flex items-center gap-2">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                id="header-call-btn"
                href="tel:+8801739284204"
                className="inline-flex items-center justify-center gap-1.5 px-4 h-10 text-xs font-bold text-slate-800 dark:text-white btn-3d-glass shimmer-btn rounded-xl transition-all shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                id="header-whatsapp-btn"
                href="https://wa.me/8801739284204"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 h-10 text-xs font-bold text-white btn-3d-emerald shimmer-btn rounded-xl transition-all shadow-md shadow-emerald-500/10"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp</span>
              </motion.a>
            </div>
          </div>

          {/* Mobile controls & toggle button */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              id="mobile-nav-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors w-10 h-10 flex items-center justify-center border border-slate-200/50 dark:border-slate-800/50"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop & Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white/98 dark:bg-slate-950/98 backdrop-blur-md border-b border-slate-250 dark:border-slate-800 shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-3.5">
              <div className="h-px bg-slate-150 dark:bg-slate-800 my-2" />
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-bold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 py-1 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="h-px bg-slate-150 dark:bg-slate-800 my-2" />
              
              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  id="mobile-menu-call"
                  href="tel:+8801739284204"
                  className="flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-bold text-slate-800 dark:text-white btn-3d-glass shimmer-btn rounded-xl transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
                <a
                  id="mobile-menu-whatsapp"
                  href="https://wa.me/8801739284204"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-bold text-white btn-3d-emerald shimmer-btn rounded-xl transition-all shadow-md shadow-emerald-500/10"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
export default Navbar;

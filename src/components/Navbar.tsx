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
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ FIXED IntersectionObserver (ONLY FIX HERE)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // FIXED
      threshold: 0.01, // FIXED
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      let activeFound = false;

      entries.forEach((entry) => {
        if (entry.isIntersecting && !activeFound) {
          setActiveItem(`#${entry.target.id}`);
          activeFound = true;
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    const sectionIds = [
      'home',
      'about',
      'services',
      'countries',
      'faq',
      'contact',
    ];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const navItems = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.services'), href: '#services' },
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
          
          {/* Logo */}
          <a
            id="nav-logo-link"
            href="#home"
            className="flex items-center gap-2 group cursor-pointer max-w-[55%]"
          >
            <div className="p-1.5 sm:p-2 text-white group-hover:scale-110 transition-transform">
              <img src={logo} alt="" className="h-16 rounded-2xl" />
            </div>
          </a>

          {/* Desktop Navigation */}
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
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeToggle />

            <div className="flex items-center gap-2">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="tel:+8801739284204"
                className="inline-flex items-center justify-center gap-1.5 px-4 h-10 text-xs font-bold text-slate-800 dark:text-white btn-3d-glass shimmer-btn rounded-xl"
              >
                <Phone className="w-3.5 h-3.5" />
                Call
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="https://wa.me/8801739284204"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 h-10 text-xs font-bold text-white btn-3d-emerald shimmer-btn rounded-xl"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                WhatsApp
              </motion.a>
            </div>
          </div>

          {/* Mobile Button */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <LanguageSwitcher />
            <ThemeToggle />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-700 dark:text-slate-200 rounded-xl"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-white dark:bg-slate-950 border-b"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block font-bold text-slate-800 dark:text-slate-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
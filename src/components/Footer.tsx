import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { PlaneTakeoff, Facebook, Youtube, Linkedin, MessageSquare, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.countries'), href: '#countries' },
    { label: t('nav.faq'), href: '#faq' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  const footServices = [
    t('services.intl.title'),
    t('services.dom.title'),
    t('services.heli.title'),
    t('services.manpower.title'),
    t('services.visa.title'),
  ];

  return (
    <footer
      id="main-footer"
      className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-slate-900 overflow-hidden font-sans select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 text-left mb-16">
          
          {/* Column A: Company bio */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex items-center gap-2.5 group">
              <div className="p-2 bg-gradient-to-tr from-blue-600 to-sky-400 rounded-xl text-white shadow-md shadow-blue-500/20">
                <PlaneTakeoff className="w-5 h-5 rotate-[-15deg] group-hover:scale-105 transition-transform" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-tight text-white leading-tight">
                  NATIAPARA
                </span>
                <span className="text-[10px] font-semibold tracking-wider text-sky-450 text-sky-400 uppercase leading-none">
                  Air Travels
                </span>
              </div>
            </a>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {t('company.tagline')}. Fully approved air ticketer, licensed helicopter operator, and reliable tour and travel planner in Tangail, Bangladesh.
            </p>

            {/* Social channels */}
            <div className="flex items-center gap-3 pt-2">
              <a
                id="footer-social-fb"
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-slate-900 hover:bg-blue-600 hover:text-white rounded-xl transition-all"
                aria-label="Facebook Link Handle"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                id="footer-social-wa"
                href="https://wa.me/8801739284204"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-slate-900 hover:bg-emerald-600 hover:text-white rounded-xl transition-all"
                aria-label="WhatsApp Hotline Mobile"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                id="footer-social-yt"
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-slate-900 hover:bg-rose-600 hover:text-white rounded-xl transition-all"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                id="footer-social-li"
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-slate-900 hover:bg-sky-600 hover:text-white rounded-xl transition-all"
                aria-label="LinkedIn Corporate Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column B: Quick navigation links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-extrabold text-sm sm:text-base text-white tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-sky-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column C: Catalog listing of services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-extrabold text-sm sm:text-base text-white tracking-wider uppercase">
              Primary Services
            </h4>
            <ul className="space-y-2 text-[11px] sm:text-xs">
              {footServices.map((srv, i) => (
                <li key={i} className="hover:text-sky-400 transition-colors truncate">
                  {srv}
                </li>
              ))}
            </ul>
          </div>

          {/* Column D: Full contact info block */}
          <div className="lg:col-span-3 space-y-4 text-xs sm:text-sm">
            <h4 className="font-extrabold text-sm sm:text-base text-white tracking-wider uppercase">
              Contact Details
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-sky-400 shrink-0 select-none mt-0.5" />
                <span>{t('contact.address')}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4.5 h-4.5 text-sky-400 shrink-0 select-none" />
                <div className="flex flex-col">
                  <a href="tel:+8801739284204" className="hover:text-white">
                    +8801739284204
                  </a>
                  <a href="tel:+8801305040763" className="hover:text-white">
                    +8801305040763
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4.5 h-4.5 text-sky-400 shrink-0 select-none" />
                <a href="mailto:natiaparatravels@gmail.com" className="hover:text-white block overflow-hidden text-ellipsis">
                  natiaparatravels@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Horizontal separator strip */}
        <div className="h-px bg-slate-900 mb-8" />

        {/* Underbar Copyright statement */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Natiapara Air Travels. All Rights Reserved. Created by Pro Consultancy.</p>
          <div className="flex gap-4">
            <span className="hover:text-slate-400 cursor-help">Terms of Services</span>
            <span className="hover:text-slate-400 cursor-help">Cookie Privacy</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
export default Footer;

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  Luggage, 
  ShieldCheck, 
  Plane, 
  Clock, 
  FileText, 
  HelpCircle, 
  ArrowRight, 
  CheckCircle2, 
  AlertOctagon, 
  Backpack, 
  Compass, 
  Info,
  CalendarDays
} from 'lucide-react';
import { WhatsAppIcon } from './Icons';

type TabType = 'checklist' | 'baggage' | 'carriers';

interface AirlinePartner {
  nameEn: string;
  nameBn: string;
  code: string;
  typeEn: string;
  typeBn: string;
  logo: string;
}

export const TravelGuide: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabType>('checklist');

  const airlines: AirlinePartner[] = [
    { nameEn: 'Biman Bangladesh Airlines', nameBn: 'বিমান বাংলাদেশ এয়ারলাইন্স', code: 'BG', typeEn: 'National Carrier of Bangladesh', typeBn: 'বাংলাদেশের জাতীয় বিমান সংস্থা', logo: '🇧🇩' },
    { nameEn: 'Saudia', nameBn: 'সৌদিয়া এয়ারলাইন্স', code: 'SV', typeEn: 'National Carrier of Saudi Arabia', typeBn: 'সৌদি আরবের জাতীয় বিমান সংস্থা', logo: '🇸🇦' },
    { nameEn: 'Qatar Airways', nameBn: 'কাতার এয়ারওয়েজ', code: 'QR', typeEn: 'World-class Transit Carrier', typeBn: 'বিশ্বমানের ট্রানজিট এয়ারলাইন্স', logo: '🇶🇦' },
    { nameEn: 'Emirates', nameBn: 'এমিরেটস এয়ারলাইন্স', code: 'EK', typeEn: 'Premium UAE Flag Carrier', typeBn: 'সংযুক্ত আরব আমিরাতের সেরা ক্যাব', logo: '🇦🇪' },
    { nameEn: 'Flydubai', nameBn: 'ফ্লাইদুবাই', code: 'FZ', typeEn: 'Popular Choice of UAE Express', typeBn: 'ইউএই সরাসরি সাশ্রয়ী বিমান সংস্থা', logo: '🇦🇪' },
    { nameEn: 'Gulf Air', nameBn: 'গালিফ এয়ার', code: 'GF', typeEn: 'National Carrier of Bahrain', typeBn: 'বাহরাইনের জাতীয় বিমান সংস্থা', logo: '🇧🇭' },
    { nameEn: 'Malaysia Airlines', nameBn: 'মালয়েশিয়া এয়ারলাইন্স', code: 'MH', typeEn: 'Direct ASEAN Gateway', typeBn: 'দক্ষিণ-পূর্ব এশিয়ার গেটওয়ে', logo: '🇲🇾' },
    { nameEn: 'Singapore Airlines', nameBn: 'সিঙ্গাপুর এয়ারলাইন্স', code: 'SQ', typeEn: 'Five-Star Luxury Travel', typeBn: 'ফাইভ-স্টার ওয়ার্ল্ড ক্লাস সার্ভিস', logo: '🇸🇬' },
  ];

  const handleQuickContact = (topic: string) => {
    const mapSelect = document.getElementById('contact-service-select') as HTMLSelectElement;
    if (mapSelect) {
      mapSelect.value = t('services.intl.title');
      const ev = new Event('change', { bubbles: true });
      mapSelect.dispatchEvent(ev);
    }
    const msgBox = document.getElementById('contact-message-area') as HTMLTextAreaElement;
    if (msgBox) {
      msgBox.value = language === 'en'
        ? `Hello Natiapara Air Travels! I checked your Airport Board and am interested in flight schedules & luggage queries for: ${topic}. Please guide me on booking tickets.`
        : `আসসালামু আলাইকুম নাটিয়াপাড়া এয়ার ট্রাভেলস! আমি আপনাদের এয়ারপোর্ট গাইড দেখেছি এবং এই যোগাযোগ বিষয়ে আগ্রহী: ${topic}। অনুগ্রহ করে টিকেট বুক করার নিয়ম ও সহযোগী এয়ারলাইন্স সমূহের ফ্লাইট শিডিউল জানান।`;
      const ev = new Event('input', { bubbles: true });
      msgBox.dispatchEvent(ev);
    }
    const contactSec = document.getElementById('contact');
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getWhatsAppLink = (type: string) => {
    const text = language === 'en'
      ? `Hello Natiapara Air Travels! I want to inquire about passenger flights, seating availability, and ticket bookings for: ${type}. Please contact me back with available choices. Thank you!`
      : `আসসালামু আলাইকুম নাটিয়াপাড়া এয়ার ট্রাভেলস! আমি ফ্লাইটের বুকিং, টিকেট প্রাপ্যতা এবং আসন সম্পর্কিত তথ্য জানতে চাচ্ছি। অনুগ্রহ করে আমার সাথে যোগাযোগ করুন। ধন্যবাদ!`;
    return `https://wa.me/8801739284204?text=${encodeURIComponent(text)}`;
  };

  return (
    <section 
      id="travel-guide" 
      className="py-24 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Dynamic decorative radar background element */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.015] pointer-events-none select-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="currentColor" strokeWidth="1" strokeDasharray="8 8" />
          <circle cx="50%" cy="50%" r="220" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 8" />
          <circle cx="50%" cy="50%" r="440" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 8" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div id="guide-section-header" className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <motion.span 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-xs font-extrabold tracking-widest text-blue-600 dark:text-sky-450 uppercase bg-blue-50 dark:bg-blue-950/40 px-4 py-2 rounded-full border border-blue-200/30 dark:border-blue-900/40 inline-flex items-center gap-2"
          >
            <Compass className="w-4 h-4 text-blue-500 dark:text-sky-400" />
            <span>{language === 'en' ? 'Aviation & Airport Guide' : 'এভিয়েশন ও এয়ারপোর্ট গাইড'}</span>
          </motion.span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight font-display">
            {language === 'en' ? 'Essential Traveler Guidelines & Airport Preparation' : 'বিমান ভ্রমণ গাইডলাইন ও এয়ারপোর্ট প্রস্তুতি'}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            {language === 'en' 
              ? 'Navigate your flight with absolute confidence. Check the standard luggage policies, airport security controls, and our supported airway partners.'
              : 'বিদেশে প্রথমবার ভ্রমণের জন্য সঠিক এয়ারপোর্ট সিকিউরিটি নিয়মাবলী, কাস্টমস লাগেজ পলিসি এবং সহযোগী এয়ারলাইন্স সমূহের বিস্তারিত বিবরণ।'}
          </p>
        </div>

        {/* Segment Tabs Navigation Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-2xl mx-auto bg-slate-200/50 dark:bg-slate-900/60 p-1.5 rounded-2xl border border-slate-300/40 dark:border-slate-800/40 backdrop-blur-md">
          <button
            onClick={() => setActiveTab('checklist')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'checklist'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-605/15'
                : 'text-slate-600 dark:text-slate-350 hover:bg-white dark:hover:bg-slate-855 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <ShieldCheck className="w-4.5 h-4.5" />
            <span>{language === 'en' ? 'Airport Preparation Checklist' : 'এয়ারপোর্ট চেক-ইন গাইড'}</span>
          </button>

          <button
            onClick={() => setActiveTab('baggage')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'baggage'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-605/15'
                : 'text-slate-600 dark:text-slate-350 hover:bg-white dark:hover:bg-slate-855 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Luggage className="w-4.5 h-4.5" />
            <span>{language === 'en' ? 'Luggage & Baggage Rules' : 'লাগেজ ও মালামাল নিয়মাবলী'}</span>
          </button>

          <button
            onClick={() => setActiveTab('carriers')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'carriers'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-605/15'
                : 'text-slate-600 dark:text-slate-350 hover:bg-white dark:hover:bg-slate-855 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Plane className="w-4.5 h-4.5" />
            <span>{language === 'en' ? 'Our Airline Associates' : 'সহযোগী এয়ারলাইন্স সমূহ'}</span>
          </button>
        </div>

        {/* Dynamic Interactive Frame */}
        <div id="guide-interactive-display" className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'checklist' && (
              <motion.div
                key="checklist-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch"
              >
                {/* Left explanation card */}
                <div className="md:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
                  <div className="space-y-4">
                    <span className="text-[10px] tracking-widest font-extrabold text-blue-600 dark:text-sky-450 uppercase font-mono block">
                      {language === 'en' ? 'SECURE FLOWS' : 'নিরাপদ এভিয়েশন'}
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white font-display leading-tight">
                      {language === 'en' ? '5 Pre-Flight Critical Rules' : 'ফ্লাইটের আগের ৫টি গুরুত্বপূর্ণ পদক্ষেপ'}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {language === 'en'
                        ? 'Proper documentation and on-time terminal presence prevent unexpected delays at airport customs.'
                        : 'যাত্রার আগে সঠিক নথিপত্র প্রস্তুতি এবং যথাসময়ে টার্মিনালে উপস্থিতি এয়ারপোর্ট ইমিগ্রেশন ও কাস্টমস তল্লাশী প্রক্রিয়া অনেক সহজ করে তোলে।'}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 space-y-4">
                    <div className="flex gap-3 text-xs text-slate-500 dark:text-slate-400">
                      <Clock className="w-5 h-5 text-amber-500 shrink-0" />
                      <span>
                        <strong>{language === 'en' ? 'Terminal Arrival Timing:' : 'হাজির হওয়ার সময়কাল:'}</strong><br />
                        {language === 'en' ? 'Reach Airport at least 4 Hours prior to departure.' : 'আপনার আন্তর্জাতিক ফ্লাইট ছাড়ার কমপক্ষে ৪ ঘণ্টা আগে রিপোর্টে যান।'}
                      </span>
                    </div>

                    <div className="flex gap-3 text-xs text-slate-500 dark:text-slate-400">
                      <CalendarDays className="w-5 h-5 text-blue-550 text-blue-500 shrink-0" />
                      <span>
                        <strong>{language === 'en' ? 'Passport Validity Limits:' : 'পাসপোর্ট মেয়াদের সীমা:'}</strong><br />
                        {language === 'en' ? 'Passport must possess at least 6 months check-in slot.' : 'পাসপোর্টের মেয়াদ যাত্রার দিন থেকে নূন্যতম ৬ মাস থাকতে হবে।'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right detailed list cards */}
                <div className="md:col-span-7 space-y-4">
                  
                  {/* Item 1 */}
                  <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-2xl flex gap-4 shadow-sm hover:border-blue-500/30 dark:hover:border-sky-400/30 duration-150 group">
                    <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center font-bold text-blue-600 dark:text-sky-400 shrink-0 select-none">
                      ১
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 dark:text-white text-base">
                        {language === 'en' ? 'Document Alignment Checks' : 'নথিপত্র ও নাম মিলকরণ'}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-1">
                        {language === 'en'
                          ? 'Ensure names spelling on Passport, Airline Ticket, and Visa are absolutely identical. Correct double-naming issues beforehand.'
                          : 'বিমানের টিকিট বুক করার আগে আপনার পাসপোর্ট, ভিসা ও জাতীয় পরিচয়পত্রের নামের বানান সঠিকভাবে মিলিয়ে নিন। বানান অমিল থাকলে দ্রুত সমাধান করুন।'}
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-2xl flex gap-4 shadow-sm hover:border-blue-500/30 dark:hover:border-sky-400/30 duration-150 group">
                    <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center font-bold text-blue-600 dark:text-sky-400 shrink-0 select-none">
                      ২
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 dark:text-white text-base">
                        {language === 'en' ? 'Visa Copy & Embassy Hardcopies' : 'নিরাপদ ভিসা কপি ও মূল কাগজপত্র'}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-1">
                        {language === 'en'
                          ? 'Always keep physical prints of your E-Visa copy, original biometric visa stamps, job papers, or student offer sheets printed on clean clear papers.'
                          : 'আপনার অনলাইন ই-ভিসা কপি, ওমরাহ পারমিট বা কোম্পানির কাজের চিঠি এবং মূল পাসপোর্ট সবসময় পরিষ্কার ট্রাভেল ফাইল বক্সে হাতের কাছে রাখুন।'}
                      </p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-2xl flex gap-4 shadow-sm hover:border-blue-500/30 dark:hover:border-sky-400/30 duration-150 group">
                    <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center font-bold text-blue-600 dark:text-sky-400 shrink-0 select-none">
                      ৩
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 dark:text-white text-base">
                        {language === 'en' ? 'Biometric smart BMET card (for workers)' : 'বায়োমেট্রিক স্মার্ট বিএমইটি কার্ড'}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-1">
                        {language === 'en'
                          ? 'In case of official work visa clearance, BMET biometric smart card database records must be active to complete airport clearance.'
                          : 'সৌদি বা মালয়েশিয়াগামী প্রবাসী ভাইদের কাস্টম ক্লিয়ারেন্স সহজ করতে BMET বায়োমেট্রিক রেজিস্ট্রেশন ও স্মার্ট কার্ড ভেরিফাইড থাকা আবশ্যিক।'}
                      </p>
                    </div>
                  </div>

                </div>
              </motion.div>
            )}

            {activeTab === 'baggage' && (
              <motion.div
                key="baggage-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
              >
                {/* Checked Luggage Card */}
                <div className="p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-3xl shadow-xl flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-blue-600 dark:text-sky-450 tracking-widest uppercase font-mono block">
                        {language === 'en' ? 'CHECK-IN CARGO' : 'মূল লাগেজ চেক-ইন'}
                      </span>
                      <Luggage className="w-5 h-5 text-blue-600 dark:text-sky-400" />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white font-display">
                      {language === 'en' ? 'Checked Luggage Rules' : 'মূল লাগেজ নিয়ম ও ওজন'}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {language === 'en'
                        ? 'Checked bags are placed inside the cargo hold. Limits typically depend on airline policies (approx. 30 kg - 40 kg per tickets).'
                        : 'এয়ারপোর্টের চেক-ইন কাউন্টারে আপনার মূল লাগেজ জমা দিতে হয়। বেশিরভাগ ফ্লাইটের টিকেটে ৩০ থেকে ৪০ কেজি মালামাল অনুমোদন থাকে।'}
                    </p>

                    <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                      <h4 className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wide">
                        {language === 'en' ? '🚫 STRICTLY FORBIDDEN IN CARGO' : '🚫 মূল লাগেজে সম্পূর্ণ নিষিদ্ধ'}
                      </h4>
                      <ul className="space-y-2 text-xs text-slate-500 dark:text-slate-400">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                          <span>{language === 'en' ? 'Power Banks & Lithium Spare Batteries' : 'পাওয়ার ব্যাংক এবং খুচরা লিথিয়াম ব্যাটারি'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                          <span>{language === 'en' ? 'Matches, Gas Lighters or Oxidizers' : 'গ্যাস লাইটার, ম্যাচের কাঠি বা জ্বলনশীল তরল'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                          <span>{language === 'en' ? 'Unmarked medications or valuable jewelry gold' : 'প্রেসক্রিপশনহীন দামি ওষুধ বা মূল্যবান স্বর্ণের অলংকার'}</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-3.5 bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-250 border-yellow-200/20 rounded-xl text-xs text-yellow-800 dark:text-yellow-300 mt-6 font-medium">
                    ⚠️ {language === 'en' ? 'Powerbanks must always be carried inside Cabin hand baggage.' : 'পাওয়ার ব্যাংক সব সময় কেবিন বা হাত ব্যাগ এর ভেতর বহন করার নিয়ম।'}
                  </div>
                </div>

                {/* Cabin Bag Card */}
                <div className="p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-3xl shadow-xl flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-blue-600 dark:text-sky-450 tracking-widest uppercase font-mono block">
                        {language === 'en' ? 'CABIN LUGGAGE' : 'হ্যান্ড বা কেবিন লাগেজ'}
                      </span>
                      <Backpack className="w-5 h-5 text-emerald-500" />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white font-display">
                      {language === 'en' ? 'Cabin & Hand Carrying Rules' : 'হ্যান্ড বা কেবিন লাগেজ নিয়মাবলি'}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {language === 'en'
                        ? 'Cabin luggage is kept in the overhead storage bin during the flight. Maximum limit is strictly 7 kg per passenger.'
                        : 'হাত লাগেজ যা উড়োজাহাজের অভ্যন্তরে নিজস্ব সিটের উপর রাখা হয়। স্ট্যান্ডার্ড নিয়ম অনুযায়ী এর সর্বোচ্চ ওজন ৭ কেজির মধ্যে হতে হবে।'}
                    </p>

                    <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                      <h4 className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wide">
                        {language === 'en' ? '🚫 STRICTLY FORBIDDEN IN CABIN' : '🚫 কেবিন বা হাত লাগেজে সম্পূর্ণ নিষিদ্ধ'}
                      </h4>
                      <ul className="space-y-2 text-xs text-slate-500 dark:text-slate-400">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                          <span>{language === 'en' ? 'Liquids or Gels above 100ml' : '১০০ মিলি লিটারের বেশি যেকোনো তরল বা বডি স্প্রে'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                          <span>{language === 'en' ? 'Knives, Nail-Cutters, Scissors, or Blades' : 'ছুরি, কাঁচি, নেইল-কাটার বা ধারালো ধাতব যন্ত্র'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                          <span>{language === 'en' ? 'Heavy iron tools or any magnetic components' : 'ভারী আয়রন হ্যামার বা চুম্বকীয় বৈদ্যুতিক কয়েল ডিভাইস'}</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-3.5 bg-blue-50 dark:bg-blue-950/20 border border-blue-200/20 rounded-xl text-xs text-blue-700 dark:text-sky-300 mt-6 font-medium">
                    ✅ {language === 'en' ? 'Approved items: Laptop, mobile, power bank, standard dry foods.' : 'অনুমোদিত মালামাল: ল্যাপটপ, মোবাইল ফোন, পাওয়ার ব্যাংক, শুকনো বিস্কুট।'}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'carriers' && (
              <motion.div
                key="carriers-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                {/* Visual grid layout of our airline associates */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {airlines.map((airline) => (
                    <motion.div
                      key={airline.code}
                      whileHover={{ y: -3 }}
                      className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-2xl flex flex-col justify-between items-center text-center shadow-sm relative overflow-hidden group"
                    >
                      <span className="text-4xl filter drop-shadow select-none mb-3 duration-200 group-hover:scale-110">
                        {airline.logo}
                      </span>
                      <div>
                        <span className="text-[10px] tracking-wide font-extrabold text-blue-600 dark:text-sky-400 uppercase font-mono block">
                          IATA: {airline.code}
                        </span>
                        <h4 className="font-extrabold text-xs sm:text-sm text-slate-800 dark:text-white leading-tight mt-1 truncate">
                          {language === 'en' ? airline.nameEn : airline.nameBn}
                        </h4>
                        <span className="text-[9px] text-slate-400 dark:text-slate-500 block mt-1 line-clamp-1">
                          {language === 'en' ? airline.typeEn : airline.typeBn}
                        </span>
                      </div>
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-550 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  ))}
                </div>

                {/* Call to action panel under airlines list */}
                <div className="p-6 sm:p-8 bg-blue-600 rounded-3xl text-white flex flex-col sm:flex-row justify-between items-center gap-6 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl pointer-events-none" />
                  
                  <div className="space-y-2 text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-black font-display text-white">
                      {language === 'en' ? 'Direct Booking & Custom Seat Upgrades' : 'সরাসরি সিট বুকিং ও টিকেট রিজার্ভেশন'}
                    </h3>
                    <p className="text-xs text-blue-100 max-w-xl">
                      {language === 'en'
                        ? 'We provide dynamic ticketing across Saudia, Biman Bangladesh, Emirates and Qatar Airways with direct custom check-in assistance.'
                        : 'আমরা আন্তর্জাতিক সেরা বিমানসংস্থাসমূহের সাথে অংশীদারী চুক্তিতে সবচেয়ে কম দামে আসন কনফার্ম টিকিট সুবিধা প্রদান দিয়ে আসছি।'}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
                    <motion.a
                      whileHover={{ y: -3, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      id="guide-airlines-whatsapp"
                      href={getWhatsAppLink('Airlines Ticket Reservation')}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-extrabold text-blue-600 bg-white hover:bg-slate-50 transition-all cursor-pointer shadow-lg duration-150"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-blue-600" />
                      <span>{language === 'en' ? 'WhatsApp Ticket Info' : 'হোয়াটসঅ্যাপ টিকেটের তথ্য'}</span>
                    </motion.a>

                    <motion.button
                      whileHover={{ y: -3, scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                      whileTap={{ scale: 0.98 }}
                      id="guide-airlines-contact"
                      onClick={() => handleQuickContact('Direct Ticket Reservation')}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl text-xs font-extrabold border border-white/40 text-white bg-transparent hover:bg-white/10 transition-all cursor-pointer duration-150"
                    >
                      <span>{language === 'en' ? 'Inquire Reservation' : 'আসন রিজার্ভেশন জিজ্ঞাসা'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dynamic support bottom text */}
        <div className="text-center mt-12 text-xs text-slate-400 dark:text-slate-500 flex flex-wrap items-center justify-center gap-1">
          <span>{language === 'en' ? 'Need dynamic updates regarding luggage weight limit regulations?' : 'লাগেজ ওজন সংক্রান্ত যেকোনো জরুরি নিয়মাবলী বা তথ্য জানতে চান?'}</span>
          <button
            id="guide-ask-custom-bottom"
            onClick={() => {
              const msgBox = document.getElementById('contact-message-area') as HTMLTextAreaElement;
              if (msgBox) {
                msgBox.value = "Hello Natiapara Air Travels! I need custom baggage luggage dimensions guidance or child stroller regulations queries.";
                const ev = new Event('input', { bubbles: true });
                msgBox.dispatchEvent(ev);
              }
              const contactSec = document.getElementById('contact');
              if (contactSec) {
                contactSec.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="text-blue-600 dark:text-sky-450 hover:underline font-extrabold cursor-pointer"
          >
            {language === 'en' ? 'Ask our aviation experts here &rarr;' : 'সরাসরি আমাদের টিমকে জিজ্ঞাসা করুন &rarr;'}
          </button>
        </div>

      </div>
    </section>
  );
};

export default TravelGuide;

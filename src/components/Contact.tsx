import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageSquare, HeartHandshake, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: t('services.intl.title'),
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setLoading(true);

    // Simulate backend synchronization and save in localStorage
    setTimeout(() => {
      const existingQueries = JSON.parse(localStorage.getItem('natiapara_leads') || '[]');
      const newQuery = {
        ...formData,
        id: `lead_${Date.now()}`,
        timestamp: new Date().toISOString(),
      };
      existingQueries.push(newQuery);
      localStorage.setItem('natiapara_leads', JSON.stringify(existingQueries));

      setLoading(false);
      setSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: t('services.intl.title'),
        message: '',
      });

      // Clear success alert after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Contact Header Block */}
        <div id="contact-header" className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-bold tracking-widest text-blue-600 dark:text-sky-400 uppercase bg-blue-50 dark:bg-blue-950/40 px-3.5 py-1.5 rounded-full"
          >
            {t('nav.contact')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mt-4"
          >
            {t('contact.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-4"
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>

        {/* Contact Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Side A: Interactive Information Matrix */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 bg-slate-50 dark:bg-slate-800/40 rounded-3xl border border-slate-100 dark:border-slate-800 flex flex-col justify-between">
              <h3 className="font-extrabold text-lg sm:text-xl text-slate-905 dark:text-white mb-6 flex items-center gap-2">
                <HeartHandshake className="text-blue-605 text-blue-600 dark:text-sky-400 w-5 h-5" />
                <span>{t('contact.info')}</span>
              </h3>

              {/* Information Cards Stack */}
              <div className="space-y-6">
                
                {/* Phones */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 dark:bg-slate-900 rounded-xl text-blue-600 dark:text-sky-400 border border-blue-500/10 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                      {t('contact.phone')}
                    </h4>
                    <a href="tel:+8801739284204" className="block text-sm sm:text-base font-extrabold text-slate-800 dark:text-slate-100 hover:text-blue-600 dark:hover:text-sky-400">
                      +880 1739-284204
                    </a>
                    <a href="tel:+8801305040763" className="block text-sm sm:text-base font-extrabold text-slate-800 dark:text-slate-100 hover:text-blue-600 dark:hover:text-sky-400">
                      +880 1305-040763
                    </a>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500/10 dark:bg-slate-900 rounded-xl text-amber-500 border border-amber-500/10 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                      {t('contact.email')}
                    </h4>
                    <a href="mailto:natiaparatravels@gmail.com" className="block text-sm sm:text-base font-extrabold text-slate-800 dark:text-slate-100 hover:text-blue-600 dark:hover:text-sky-400">
                      natiaparatravels@gmail.com
                    </a>
                  </div>
                </div>

                {/* Physical Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-500/10 dark:bg-slate-900 rounded-xl text-emerald-500 border border-emerald-500/10 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                      {language === 'en' ? 'Office Address Location' : 'অফিসের অবস্থান ও ঠিকানা'}
                    </h4>
                    <p className="text-xs sm:text-sm font-semibold text-slate-655 text-slate-600 dark:text-slate-300 leading-relaxed max-w-sm">
                      {t('contact.address')}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Simulated Authenticity Stamp */}
            <div className="p-4 bg-blue-50 dark:bg-slate-800/20 rounded-2xl border border-blue-100 dark:border-slate-800/80 text-xs text-blue-700 dark:text-sky-450 leading-relaxed flex items-center gap-3.5 select-none font-bold">
              <span>✈</span>
              <span>
                {language === 'en' 
                  ? 'Reg. No.: 0016596 | Licensed by Tangail, Bangladesh District Bureau. Approved flight tickets & holiday travel visas.' 
                  : 'রেজি নং: ০০১৬৫৯৬ | টাঙ্গাইল জেলা ব্যুরো কর্তৃক অনুমোদিত ও লাইসেন্সপ্রাপ্ত। নির্ভরযোগ্য এয়ার টিকিট বুকিং ও ওমরাহ ভিসা প্রসেসিং।'}
              </span>
            </div>
          </div>

          {/* Side B: Form & Google Maps embedded side-by-side stack */}
          <div className="lg:col-span-7 space-y-6">

            <form
              id="contact-lead-form"
              onSubmit={handleFormSubmission}
              className="p-6 sm:p-8 bg-slate-50 dark:bg-slate-800/45 rounded-3xl border border-slate-150 border-slate-100 dark:border-slate-800 space-y-5"
            >
              {/* Form Input Block A: Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-name" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                    {t('form.name')} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-805/70 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-hidden dark:text-white"
                    placeholder="e.g. Rizon Ahmed"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-phone" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                    {t('form.phone')} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-805/70 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-hidden dark:text-white"
                    placeholder="e.g. +8801739284204"
                  />
                </div>
              </div>

              {/* Form Input Block B: Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-email" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                  {t('form.email')}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-805/70 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-hidden dark:text-white"
                  placeholder="name@example.com"
                />
              </div>

              {/* Form Input Block C: Dropdown selection */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-service-select" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                  {t('form.service')}
                </label>
                <select
                  id="contact-service-select"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full bg-white dark:bg-slate-900 border border-slate-205 dark:border-slate-805 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-hidden dark:text-white cursor-pointer"
                >
                  <option value={t('services.intl.title')}>{t('services.intl.title')}</option>
                  <option value={t('services.dom.title')}>{t('services.dom.title')}</option>
                  <option value={t('services.heli.title')}>{t('services.heli.title')}</option>
                  <option value={t('services.manpower.title')}>{t('services.manpower.title')}</option>
                  <option value={t('services.visa.title')}>{t('services.visa.title')}</option>
                  <option value={t('services.corp.title')}>{t('services.corp.title')}</option>
                  <option value={t('services.group.title')}>{t('services.group.title')}</option>
                  <option value={t('services.umrah.title')}>{t('services.umrah.title')}</option>
                </select>
              </div>

              {/* Form Input Block D: Message Area */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-message-area" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                  {t('form.message')}
                </label>
                <textarea
                  id="contact-message-area"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-805/70 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-hidden dark:text-white resize-none"
                  placeholder={
                    language === 'en'
                      ? 'Describe your flight dates, budget, or preferred recruiting countries...'
                      : 'আপনার পছন্দের তারিখ, গন্তব্য, বাজেট বা টিকিট বুকিং এর তথ্য লিখুন...'
                  }
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3">
                
                {/* Submit button with loading text */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-fit flex items-center justify-center gap-2 px-6.5 py-3.5 rounded-xl font-bold btn-3d-primary shimmer-btn text-white disabled:opacity-50 transition-all cursor-pointer"
                >
                  {loading ? (
                    <span>{t('form.sending')}</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t('btn.submit')}</span>
                    </>
                  )}
                </button>

                {/* Absolute Local Form feedback */}
                <AnimatePresence>
                  {success && (
                    <motion.div
                      id="contact-success-notification"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="p-3 bg-emerald-55 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-150 rounded-xl text-xs font-bold flex items-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4" />
                      <span>{t('form.success')}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </form>

            {/* Google Map Embed section */}
            <div
              id="google-map-iframe-wrapper"
              className="w-full h-80 rounded-3xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-800"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4317.721715553457!2d90.01289397590645!3d24.172876972425037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3756011c98207639%3A0xc3e6371aaf4b1ddc!2sNatiapara%20Air%20Travels!5e1!3m2!1sen!2sbd!4v1781638112515!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
export default Contact;

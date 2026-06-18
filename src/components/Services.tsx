import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import {
  Plane,
  Ticket,
  Globe,
  FileText,
  Briefcase,
  Users,
  Sparkles,
} from 'lucide-react';
import { HelicopterIcon } from './Icons';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const [expanded, setExpanded] = useState<string[]>([]);

  const toggle = (id: string) => {
    setExpanded((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id]
    );
  };

  const servicesData = [
    {
      id: 'intl',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/074/179/171/small/airplane-soaring-above-a-stunning-cloudscape-during-a-bright-daylight-flight-photo.jpg',
      icon: <Plane className="w-7 h-7 text-blue-600" />,
      title: t('services.intl.title'),
      desc: t('services.intl.desc'),
    },
    {
      id: 'dom',
      image: 'https://www.popsci.com/wp-content/uploads/2018/12/20/Y7WZ4YDMSLAXLUV33VNUY66OBM.jpg?strip=all&quality=85',
      icon: <Ticket className="w-7 h-7 text-amber-500" />,
      title: t('services.dom.title'),
      desc: t('services.dom.desc'),
    },
    {
      id: 'heli',
      image: 'https://www.keihanhotels-resorts.co.jp/the-thousand-kyoto/en/okutrip/asset/heri1200.jpg',
      icon: <HelicopterIcon className="w-7 h-7 text-emerald-500" />,
      title: t('services.heli.title'),
      desc: t('services.heli.desc'),
    },
    {
      id: 'manpower',
      image: 'https://mailmktg.makemytrip.com/mybusiness/images/CTM-2.jpg',
      icon: <Globe className="w-7 h-7 text-purple-500" />,
      title: t('services.manpower.title'),
      desc: t('services.manpower.desc'),
    },
    {
      id: 'visa',
      image: 'https://sophelp.com/wp-content/uploads/2022/11/SOP-for-Canada-student-visa-and-University-Application.webp',
      icon: <FileText className="w-7 h-7 text-sky-500" />,
      title: t('services.visa.title'),
      desc: t('services.visa.desc'),
    },
    {
      id: 'corporate',
      image: 'https://www.skiltravel.com/public/uploads/blog/2de0d037c64f260ba6fe29473873e236.webp',
      icon: <Briefcase className="w-7 h-7 text-slate-700" />,
      title: t('services.corp.title'),
      desc: t('services.corp.desc'),
    },
    {
      id: 'group',
      image: 'https://wptravel.io/wp-content/uploads/2024/05/travel-management-company-in-travel-industry-1024x576.jpeg',
      icon: <Users className="w-7 h-7 text-teal-500" />,
      title: t('services.group.title'),
      desc: t('services.group.desc'),
    },
    {
      id: 'umrah',
      image: 'https://img.magnific.com/premium-photo/breathtaking-view-kaaba-makkah-sunset_573056-41845.jpg?semt=ais_hybrid&w=740&q=80',
      icon: <Sparkles className="w-7 h-7 text-amber-500" />,
      title: t('services.umrah.title'),
      desc: t('services.umrah.desc'),
    },
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            {t('services.title')}
          </h2>
          <p className="text-slate-500 mt-3">
            {t('services.subtitle')}
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {servicesData.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-800 shadow hover:shadow-xl transition"
            >

              {/* ✅ IMAGE TOP */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-5">

                {/* ICON */}
                <div className="mb-3">
                  {service.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className={`text-sm text-slate-500 mt-2 transition-all ${
                    expanded.includes(service.id)
                      ? ''
                      : 'line-clamp-1'
                  }`}
                >
                  {service.desc}
                </p>

                {/* BUTTON */}
                <button
                  onClick={() => toggle(service.id)}
                  className="mt-3 text-sm font-semibold text-blue-600"
                >
                  {expanded.includes(service.id)
                    ? 'Show Less'
                    : 'Learn More'}
                </button>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;
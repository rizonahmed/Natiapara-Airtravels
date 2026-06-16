import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, useInView } from 'motion/react';
import { Ticket, ShieldCheck, Award, MessageSquare, PlaneTakeoff, Globe2 } from 'lucide-react';

// Reusable CountUp component with clean vanilla performance
const CountUpValue: React.FC<{ target: number; suffix?: string; delay?: number }> = ({ target, suffix = '', delay = 0 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(elementRef, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000; // 2 seconds total duration
    const speed = Math.max(10, Math.floor(duration / target));
    const increment = Math.ceil(target / (duration / speed));

    const timeout = setTimeout(() => {
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, speed);

      return () => clearInterval(timer);
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [isInView, target, delay]);

  return (
    <span ref={elementRef} className="tabular-nums font-extrabold text-3xl sm:text-4xl md:text-5xl text-blue-600 dark:text-sky-400">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export const Statistics: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    {
      id: 'tickets',
      label: t('stats.tickets'),
      target: 10000,
      suffix: '+',
      icon: <Ticket className="w-6 h-6 text-blue-500" />,
      sub: 'Global Tickets booked',
    },
    {
      id: 'heli',
      label: t('stats.heli'),
      target: 500,
      suffix: '+',
      icon: <PlaneTakeoff className="w-6 h-6 text-amber-500" />,
      sub: 'Luxury Air Charters',
    },
    {
      id: 'visas',
      label: t('stats.visas'),
      target: 3000,
      suffix: '+',
      icon: <Globe2 className="w-6 h-6 text-emerald-500" />,
      sub: 'Successful visa clearances',
    },
    {
      id: 'satisfaction',
      label: t('stats.satisfaction'),
      target: 98,
      suffix: '%',
      icon: <Award className="w-6 h-6 text-purple-500" />,
      sub: 'Transparent operations',
    },
  ];

  return (
    <section
      id="statistics"
      className="py-20 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 text-slate-800 dark:text-slate-100 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated grid of numeric milestones */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              id={`stat-block-${stat.id}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-850/50 border border-slate-100 dark:border-slate-800/80 flex flex-col justify-center items-center text-center group hover:bg-white dark:hover:bg-slate-800 hover:shadow-md transition-all duration-300"
            >
              {/* Dynamic Icon */}
              <div className="p-3 bg-white dark:bg-slate-900 shadow-xs rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>

              {/* Real Animated Counter */}
              <div className="mb-2">
                <CountUpValue target={stat.target} suffix={stat.suffix} delay={0.1 * idx} />
              </div>

              {/* Text label details */}
              <h4 className="font-extrabold text-xs sm:text-sm text-slate-800 dark:text-slate-100 select-none">
                {stat.label}
              </h4>
              <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 uppercase font-semibold font-mono tracking-wide">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Statistics;

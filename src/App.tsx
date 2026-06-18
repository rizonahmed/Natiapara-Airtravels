import React, { useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './hooks/useTheme';
import { setUpSEO } from './utils/seo';

// Import all modular sub-components
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Countries from './components/Countries';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Statistics from './components/Statistics';
import Testimonials from './components/Testimonials';
import MissionVision from './components/MissionVision';
import FAQ from './components/FAQ';
import Gallery from './components/Gallery';
import TravelGuide from './components/TravelGuide';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';
import CoolMode from './components/CoolMode';

export default function App() {
  useEffect(() => {
    // Inject and establish SEO Metas + JSON Scheme Markup
    setUpSEO();
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        {/* Interactive burst feedback on click */}
        <CoolMode />

        {/* Core Layout Shell */}
        <div id="natiapara-app-container" className="overflow-x-clip  min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-300 font-sans">
          
          {/* Take-off aircraft loader */}
          <Loader />

          {/* Sticky Navbar holding Language Switcher and Theme toggles */}
          <Navbar />

          {/* Page Sections */}
          <main id="main-content-flow">
            <Hero />
            <About />
            <Services />
            {/* <Countries /> */}
            <WhyChooseUs />
            {/* <Process /> */}
            {/* <Statistics /> */}
            {/* <MissionVision /> */}
            <FAQ />
            <Gallery />
            {/* <Testimonials /> */}
            {/* <TravelGuide /> */}
            <Contact />
          </main>

          {/* Corporate Footer block */}
          <Footer />

          {/* Sticky Back To Top + WhatsApp Corner Widget */}
          <FloatingWidgets />

        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { Eye } from 'lucide-react';

interface GalleryItem {
  id: string;
  category: 'planes' | 'airport' | 'heli' | 'visas' | 'dest';
  src: string;
  titleEn: string;
  titleBn: string;
  altEn: string;
  altBn: string;
}

export const Gallery: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const galleryItems: GalleryItem[] = [
    // --- AIRPLANES (planes) ---
    {
      id: 'g-plane-1',
      category: 'planes',
      src: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80',
      titleEn: 'Commercial Passenger Flight',
      titleBn: 'কমার্শিয়াল প্যাসেঞ্জার বিমান সার্ভিস',
      altEn: 'Luxury commercial jet airliner flying in the sky',
      altBn: 'নাটিয়াপাড়া এয়ার ট্রাভেলস এর কমার্শিয়াল বিমান টিকিট',
    },
    {
      id: 'g-plane-2',
      category: 'planes',
      src: 'https://thumbs.dreamstime.com/b/passenger-jet-plane-landing-air-port-runways-against-beautifu-beautiful-dusky-sky-use-travel-business-transport-cargo-40982149.jpg',
      titleEn: 'Modern Passenger Jetliner',
      titleBn: 'আধুনিক কমার্শিয়াল এয়ারলাইনার',
      altEn: 'White passenger jet airplane flying in high altitude',
      altBn: 'উচ্চ আকাশে ডানা মেলে উড়ে চলা দীর্ঘপাল্লার যাত্রীবাহী উড়োজাহাজ',
    },
    {
      id: 'g-plane-3',
      category: 'planes',
      src: 'https://images.stockcake.com/public/a/e/6/ae6bd29c-88b7-4ca5-bafa-192a02b984a5_large/soaring-through-sunset-stockcake.jpg',
      titleEn: 'Sunset Golden Ascent',
      titleBn: 'সূর্যাস্তের নয়নাভিরাম উড্ডয়ন',
      altEn: 'Large jet passenger plane taking off beautifully during golden sunset',
      altBn: 'সূর্যাস্তের নয়নাভিরাম মুহূর্তে বিশাল আকৃতির আন্তর্জাতিক ফ্লাইট উড্ডয়ন',
    },
    {
      id: 'g-plane-4',
      category: 'planes',
      src: 'https://media.istockphoto.com/id/902818356/photo/sunset-sky-on-airplane-window-over-copenhagen-denmark-in-friday.jpg?s=612x612&w=0&k=20&c=lmUoxCl8_lyfNuRMoPwSpg6CE36xjd2nMHCiaKpuL0c=',
      titleEn: 'Airliner Wing Over Clouds',
      titleBn: 'মেঘের উপরে বিমান উইং ভিউ',
      altEn: 'Passenger jet wing and sky with clouds beautiful scenery',
      altBn: 'আকাশে উড্ডয়নরত বিমান জানালা থেকে মেঘের নয়নাভিরাম ভিউ',
    },
    // {
    //   id: 'g-plane-5',
    //   category: 'planes',
    //   src: 'https://images.unsplash.com/photo-1483450388369-9ed95738483c?auto=format&fit=crop&w=600&q=80',
    //   titleEn: 'Commercial Jet Profile',
    //   titleBn: 'রানওয়েতে রেডি জেট বিমান',
    //   altEn: 'Aircraft nose and cockpit detailed close up at the airport hangar',
    //   altBn: 'বিপন্ন এয়ারপোর্ট টার্মমার্কে প্রস্তুত কমার্শিয়াল বিমান',
    // },
    // {
    //   id: 'g-plane-6',
    //   category: 'planes',
    //   src: 'https://assets.paramountbusinessjets.com/media/blog/uploads/blog_speed_private_jet_flying.jpg',
    //   titleEn: 'Cruising Jet Flight',
    //   titleBn: 'উন্নত কমার্শিয়াল ডাবল ডেকার বিমান',
    //   altEn: 'Clean high speed commercial airliner cruising above beautiful clouds',
    //   altBn: 'নীল মেঘের বুক চিরে নিরাপদে উড়ে চলা আন্তর্জাতিক ট্রাভেল ফ্লাইট',
    // },
    // {
    //   id: 'g-plane-7',
    //   category: 'planes',
    //   src: 'https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&w=600&q=80',
    //   titleEn: 'Majestic Flight Over Skies',
    //   titleBn: 'আকাশে ডানা মেলার প্রিমিয়াম ছবি',
    //   altEn: 'Large commercial passenger airplane in flight high above the clouds',
    //   altBn: 'মেঘমালা পাড়ি দিয়ে সুউচ্চ আকাশে উড্ডয়নরত আন্তর্জাতিক যাত্রীবাহী উড়োজাহাজ',
    // },
    // {
    //   id: 'g-plane-8',
    //   category: 'planes',
    //   src: 'https://www.theglobeandmail.com/resizer/v2/7WO7FIQZMBCMLMYOAOZJ5QAHNU.JPG?auth=ecb08d774903c09447ed2ae024210418423bcda6d89d9021d1de2ea093808ed4&width=600&quality=80',
    //   titleEn: 'Scenic Aircraft Flight Route',
    //   titleBn: 'স্নো মাউন্টেন বিমান রুট',
    //   altEn: 'White commercial passenger airline cruising elegantly over beautiful white snow peak chain',
    //   altBn: 'বরফাবৃত পর্বতশ্রেণীর উপর চমৎকার দৃশ্য সহযোগে আন্তর্জাতিক বিমান ভ্রমণ',
    // },
    // {
    //   id: 'g-plane-9',
    //   category: 'planes',
    //   src: 'https://static0.simpleflyingimages.com/wordpress/wp-content/uploads/2023/10/shutterstock_2187992265_169.jpg',
    //   titleEn: 'Ascending High Altitude Jet',
    //   titleBn: 'উড্ডয়নরত আধুনিক এয়ারবাস',
    //   altEn: 'Modern passenger jet cruising elegantly towards horizon',
    //   altBn: 'নীল দিগন্ত স্পর্শ করতে উড্ডয়নরত প্রিমিয়াম এয়ারলাইনার',
    // },

    // --- AIRPORTS (airport) ---
    {
      id: 'g-airport-1',
      category: 'airport',
      src: 'https://www.futuretravelexperience.com/wp-content/uploads/2025/08/CPK-enters-next-phase.jpg',
      titleEn: 'Modern Passenger Terminal',
      titleBn: 'আধুনিক এয়ারপোর্ট টার্মিনাল ভবন',
      altEn: 'Beautiful futuristic architecture of airport terminal with natural lighting',
      altBn: 'ওয়ান-স্টপ বোর্ডিংসহ আধুনিক নির্মাণশৈলীর আন্তর্জাতিক এয়ারপোর্ট লাউঞ্জ',
    },
    {
      id: 'g-airport-2',
      category: 'airport',
      src: 'https://preview.redd.it/ive-never-seen-a-similar-ramp-to-disembark-how-common-v0-yjsymozi1dnf1.jpg?width=640&crop=smart&auto=webp&s=4b3c2c73189e451a8c79c7a301b4ed05abe62cea',
      titleEn: 'Airport Gates and Boarding Ramps',
      titleBn: 'এয়ারপোর্ট বোর্ডিং গেট ও টার্মিনাল',
      altEn: 'Passenger airlines parked ready next to terminal boarding gates',
      altBn: 'বিমানে প্যাসেঞ্জারদের সহজে যাতায়তের জন্য আধুনিক বোর্ডিং এবং এপ্রোন সংযোগ',
    },
    {
      id: 'g-airport-3',
      category: 'airport',
      src: 'https://thumbs.dreamstime.com/b/airport-bangkok-thailand-august-passengers-arrive-check-desk-suvarnabhumi-bangkok-thailand-handling-60000143.jpg',
      titleEn: 'Ticketing and Immigration Desks',
      titleBn: 'টিকিট এবং চেক-ইন কাউন্টার',
      altEn: 'Spacious airport lobby with clear terminal maps, flags and travel boards',
      altBn: 'আমাদের বিশেষ গাইডেন্স এবং দ্রুততম বিমান টিকিট বুকিং ও চেকিং সহায়তা',
    },
    {
      id: 'g-airport-4',
      category: 'airport',
      src: 'https://www.marhabaservices.com/dw/image/v2/BDFQ_PRD/on/demandware.static/-/Sites-dnata-master-catalog/default/dwe5361dbe/images/hi-res/PPG%20CGK%20Lounge/CGK-lounge-interiors-3.jpeg?sw=1075&sh=825&sm=fit&q=80',
      titleEn: 'International Airport Lounge',
      titleBn: 'আন্তর্জাতিক এয়ারপোর্ট ওয়েটিং লাউঞ্জ',
      altEn: 'Tourists sitting inside terminal lounge looking out the glass window at flights',
      altBn: 'বিমানযাত্রীদের স্বাচ্ছন্দ্যে অপেক্ষার জন্য প্রিমিয়াম আন্তর্জাতিক লাউঞ্জ সুবিধা',
    },
    // {
    //   id: 'g-airport-5',
    //   category: 'airport',
    //   src: 'https://static0.simpleflyingimages.com/wordpress/wp-content/uploads/2024/01/clipboard-46.png?w=1600&h=900&fit=crop',
    //   titleEn: 'Flight Departure Board Display',
    //   titleBn: 'ডিপার্চার শিডিউল এবং ট্র্যাকিং',
    //   altEn: 'Dynamic digital departure times monitor screen on terminal airport',
    //   altBn: 'ইউরোপ, আমেরিকা ও মিডল-ইস্ট রুটের নির্ভরযোগ্য রিয়েল-টাইম ফ্লাইটের সময়সূচী',
    // },

    // --- HELICOPTERS (heli) ---
    {
      id: 'g-heli-1',
      category: 'heli',
      src: 'https://images.pexels.com/photos/34911798/pexels-photo-34911798/free-photo-of-helicopter-flight-over-nepal-s-snowy-himalayas.jpeg',
      titleEn: 'Scenic Mountain Copter',
      titleBn: 'পাহাড় চিড়ে উড্ডয়নরত হেলিকপ্টার',
      altEn: 'Modern response and charter helicopter cruising beautifully over scenic mountain peaks',
      altBn: 'আমাদের বিশেষ চুক্তিতে কর্পোরেট বা ফ্যামিলি রাইডের জন্য হেলিকপ্টার ট্রাভেল সেবা',
    },
    {
      id: 'g-heli-2',
      category: 'heli',
      src: 'https://www.ach.airbus.com/sites/g/files/jlcbta206/files/styles/w750h1560/public/2024-04/dcb667438611261ece085a7fd61cc092.jpeg?h=11dd27ce&itok=gTD-0BkE',
      titleEn: 'Luxurious Executive Helicopter',
      titleBn: 'ভিআইপি ও লাক্সারি প্রাইভেট কপ্টার',
      altEn: 'Sleek dark private corporate transport helicopter parked on airport tarmac',
      altBn: 'জরুরি রোগীবহন, কর্পোরেট মিটিং অথবা বিলাসবহুল লাইফস্টাইল ট্যুর হেলিকপ্টার বুকিং',
    },
    {
      id: 'g-heli-3',
      category: 'heli',
      src: 'https://www.bangladeshhelicopterservice.com/helicopter/air-ambulance/air-ambulance-book8.jpeg',
      titleEn: 'Air Ambulance Rescue Charter',
      titleBn: 'জরুরী এয়ার অ্যাম্বুলেন্স কপ্টার',
      altEn: 'Active medical rescue responder helicopter flying gracefully in clear blue skies',
      altBn: 'মেডিকেল ইমার্জেন্সি সময়ে উন্নত ও জীবন রক্ষাকারী এয়ার হেলিকপ্টার এম্বুলেন্স চার্টার',
    },
    {
      id: 'g-heli-4',
      category: 'heli',
      src: 'https://cdn-imgix.headout.com/media/images/4fef5fceb3d82bc2ba21db2d658354a7-17570-dubai-12-minutes-atlantis-helicopter-tour-07.jpg?auto=compress%2Cformat&w=900&h=562.5&q=90&ar=16%3A10&crop=faces%2Ccenter&fit=crop',
      titleEn: 'Private Helicopter Heliport Lounge',
      titleBn: 'হেলিপ্যাড প্রাঙ্গণে প্রাইভেট কপ্টার',
      altEn: 'Executive civilian private helicopter ready to depart on the lawn helipad',
      altBn: 'নাটিয়াপাড়া এয়ার ট্রাভেলসের বিশেষ ব্যবস্থাপনায় দেশের যে কোনো প্রান্তে হেলিকপ্টার সেবা',
    },

    // --- VISA CASES (visas) ---
    // {
    //   id: 'g-visa-1',
    //   category: 'visas',
    //   src: 'https://png.pngtree.com/thumb_back/fw800/background/20251105/pngtree-close-up-of-a-hand-stamping-an-entry-visa-into-passport-image_20250015.webp',
    //   titleEn: 'Passports with Stamped Visas',
    //   titleBn: 'পাসপোর্ট ভিসা স্ট্যাম্প সাকসেস',
    //   altEn: 'Valid travel international passports with active official visa stamps',
    //   altBn: 'আমাদের মাধ্যমে সফলভাবে প্রসেসকৃত স্ট্যাম্পড ভিসা কেস স্টাডিজ',
    // },
    {
      id: 'g-visa-2',
      category: 'visas',
      src: 'https://media.istockphoto.com/id/2222985151/photo/approved-stamp-visa-and-passport-with-us-flag-document-to-immigration-at-airport-in-country.jpg?s=612x612&w=0&k=20&c=pTYde6Y9oVCbWb5HQq0vkmwtwonxP9_5rikmsnZPGgM=',
      titleEn: 'Approved Travel Documentation',
      titleBn: 'ভ্রমণ ক্যাটাগরি ডকুমেন্ট অনুমোদন',
      altEn: 'Immigration official documents and global travel passports on study desk',
      altBn: 'সঠিক পোর্টফোলিও ও ইন্টারভিউ গাইডেন্স সহযোগে নিশ্চিত ভিসা আবেদন সফল ফাইল',
    },
    {
      id: 'g-visa-3',
      category: 'visas',
      src: 'https://www.jmvisaservices.com/images/work-visa.jpg',
      titleEn: 'Work & Employment Visas',
      titleBn: 'ওয়ার্ক ও ট্যুরিস্ট ভিসা সাকসেস',
      altEn: 'Passports with official sticker visa placements and authorization seals',
      altBn: 'ইউরোপ, শেনজেন, মধ্যপ্রাচ্য ও মালেশিয়ার নির্ভুল ওয়ার্ক ভিসা প্রসেস',
    },
    // {
    //   id: 'g-visa-4',
    //   category: 'visas',
    //   src: 'https://www.accurate.com/au/wp-content/uploads/sites/3/2022/12/VerNow-1-Copy-1024x1024.png.png',
    //   titleEn: 'Visa Guidelines Verification',
    //   titleBn: 'নির্ভুল ফাইল প্রসেস যাচাইকরণ',
    //   altEn: 'Legal visa notary stamps and official verification documentation',
    //   altBn: 'অভিজ্ঞ বিশেষজ্ঞ প্যানেল দ্বারা নিখুঁত ও দ্রুততম সময়ে পেপারস সাবমিশন',
    // },

    // --- DESTINATIONS (dest) ---
    {
      id: 'g-dest-1',
      category: 'dest',
      src: 'https://media.istockphoto.com/id/2210518516/photo/realistic-islamic-hajj-pilgrimage-illustration.jpg?s=612x612&w=0&k=20&c=YZgfwgTjmyru5unygHnDJ8B8f-Tm02w-DxAZj476114=',
      titleEn: 'Holy Kaaba Pilgrimage Mecca',
      titleBn: 'পবিত্র কাবা শরিফ ওমরাহ ও হজ',
      altEn: 'Magnificent close up of Holy Kaaba with gold calligraphy Kiswah in Mecca',
      altBn: 'কাবা শরীফের সম্মুখে ওমরাহ ও হজ পালনকারীদের আবেগঘন মোনাজাত',
    },
    {
      id: 'g-dest-2',
      category: 'dest',
      src: 'https://www.islamiclandmarks.com/wp-content/uploads/2023/05/prophet_saw_mosque_second_largest_mosque.jpg',
      titleEn: 'Prophets Mosque in Madina',
      titleBn: 'পবিত্র মদীনা আল-মনোয়ারা জিয়ারত',
      altEn: 'Serene and beautiful view of the Prophets Masjid in Medina Al-Munawwarah',
      altBn: 'স্নিগ্ধ ও আধ্যাত্মিক শান্তিময় মসজিদে নববী বা রাসূলের রওজা জিয়ারত প্যাকেজ',
    },
    // {
    //   id: 'g-dest-3',
    //   category: 'dest',
    //   src: 'https://media.istockphoto.com/id/2189017784/photo/night-aerial-of-meccas-grand-mosque-and-abraj-al-bait-clock-tower.jpg?s=612x612&w=0&k=20&c=yPiLcwYdkfaWgXEa8aSC2UDj6vo2jloEQl58ahIHQns=',
    //   titleEn: 'Al-Haram Air View',
    //   titleBn: 'কাবা তাওয়াফ এয়ার ভিউ',
    //   altEn: 'Beautiful aerial view of pilgrims performing prayers at Masjid Al-Haram',
    //   altBn: 'পবিত্র মসজিদুল হারামে হাজী বা ওমরাহ পালনকারী ভাই-বোনদের তাওয়াফ দৃশ্য',
    // },
    {
      id: 'g-dest-4',
      category: 'dest',
      src: 'https://paradiseislandmaldives.net/wp-content/uploads/2022/12/DJI_0913-copy-scaled.jpg',
      titleEn: 'Maldives Paradise Beach Resorts',
      titleBn: 'মালদ্বীপ ও লাক্সারি হলিডে স্পট',
      altEn: 'Beautiful blue beach ocean overwater villa resort tourist paradise',
      altBn: 'হানিমুন বা উইকেন্ড ট্রাভেলারদের জন্য বাজেট ফ্রেন্ডলি মালদ্বীপ ও ব্যাংকক ট্যুর',
    },
    // {
    //   id: 'g-dest-5',
    //   category: 'dest',
    //   src: 'https://www.autoeurope.co.uk/UK/assets/image/Colosseum-rome.jpg',
    //   titleEn: 'Ancient Rome Colosseum Europe',
    //   titleBn: 'শেনজেন ইউরোপ ঐতিহাসিক ভ্রমণ স্পট',
    //   altEn: 'Italy Colosseum historical architectural ruins in Rome',
    //   altBn: 'ঐতিহাসিক ইউরোপ ভ্রমণ ইতালির রোম কলোসিয়ামের গাইড বুকিং সুবিধা',
    // },
    // {
    //   id: 'g-dest-6',
    //   category: 'dest',
    //   src: 'https://assets.oakshotels.com/image/upload/q_auto,f_auto/media/minor/oaks/images/blog/2023/must-see-sydney-landmarks/_h1_-exploring-the-iconic-landmarks-of-sydney---a-must-visit-guide.png?h=67%25&w=100%25',
    //   titleEn: 'Sydney Iconic Travel Spot',
    //   titleBn: 'সিডনি অপেরা হাউস অস্ট্রেলিয়া ট্রাভেল',
    //   altEn: 'Sydney Opera house harbor front travel and touring',
    //   altBn: 'সিডনি অপেরা হাউস সংলগ্ন অস্ট্রেলিয়া ট্যুরিস্ট ভিসা প্রসেস ও ওয়ান-স্টপ বুকিং',
    // },
  ];

  const filterConfigs = [
    { id: 'all', label: t('gallery.filter.all') },
    { id: 'planes', label: t('gallery.filter.planes') },
    { id: 'airport', label: t('gallery.filter.airport') },
    { id: 'heli', label: t('gallery.filter.heli') },
    { id: 'visas', label: t('gallery.filter.visas') },
    { id: 'dest', label: t('gallery.filter.dest') },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section
      id="gallery"
      className="py-24 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Gallery Header */}
        <div id="gallery-header" className="max-w-3xl mx-auto text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-bold tracking-widest text-blue-600 dark:text-sky-400 uppercase bg-blue-50 dark:bg-blue-950/40 px-3.5 py-1.5 rounded-full"
          >
            {t('gallery.badge')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mt-4 font-display"
          >
            {t('gallery.title')}
          </motion.h2>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {filterConfigs.map((tab) => (
            <button
              key={tab.id}
              id={`gallery-filter-${tab.id}`}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid Stage */}
        <motion.div
          id="gallery-grid"
          layout
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                id={`gallery-wrapper-${item.id}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="break-inside-avoid relative overflow-hidden rounded-3xl group shadow-xs hover:shadow-xl border border-slate-100 dark:border-slate-800 cursor-zoom-in"
                onClick={() => setSelectedImg(item.src)}
              >
                <img
                  src={item.src}
                  alt={language === 'en' ? item.altEn : item.altBn}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 rounded-3xl"
                />
                
                {/* Visual hover mask holding a search icon and clean bilingual description */}
                <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                  <div className="flex justify-end">
                    <div className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white border border-white/20">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="space-y-1.5 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[9px] tracking-widest font-extrabold uppercase text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded-md border border-sky-800/50 w-max block">
                      {tabIdToLabel(item.category, language)}
                    </span>
                    <h5 className="text-sm font-bold leading-tight font-display text-white">
                      {language === 'en' ? item.titleEn : item.titleBn}
                    </h5>
                    <p className="text-[11px] text-slate-300 leading-normal line-clamp-2 font-sans">
                      {language === 'en' ? item.altEn : item.altBn}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Full screen Image Lightbox Modal */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              id="gallery-lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImg(null)}
              className="fixed inset-0 z-100 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl border border-white/10"
              >
                <img
                  src={selectedImg}
                  alt="Enhanced view"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[85vh] object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

// Helper to translate category tags inside hover overlays
function tabIdToLabel(cat: string, lang: 'en' | 'bn'): string {
  switch (cat) {
    case 'planes': return lang === 'en' ? 'Airplane' : 'বিমান সার্ভিস';
    case 'airport': return lang === 'en' ? 'Airport' : 'বিমানবন্দর';
    case 'heli': return lang === 'en' ? 'Helicopter' : 'হেলিকপ্টার';
    case 'visas': return lang === 'en' ? 'Visas' : 'ভিসা কেস';
    case 'dest': return lang === 'en' ? 'Destination' : 'গন্তব্য';
    default: return '';
  }
}

export default Gallery;

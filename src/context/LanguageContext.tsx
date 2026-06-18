import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'bn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // General / Common
    'company.name': 'Natiapara Air Travels',
    'company.tagline': 'Your Trusted Travel, Aviation & Visa Partner',
    'company.reg': 'Reg. No.: 0016596',
    'btn.call': 'Call Now',
    'btn.whatsapp': 'WhatsApp Now',
    'btn.getQuote': 'Get Quote',
    'btn.learnMore': 'Learn More',
    'btn.submit': 'Submit Message',
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch for flights, bookings, and visa support',

    // Nav
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.countries': 'Countries',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'Natiapara Air Travels',
    'hero.sub': 'Your Trusted Air Ticket, Manpower & Helicopter Reservation Partner',
    'hero.desc': 'Natiapara Air Travels is a trusted travel agency in Bangladesh, providing domestic and international air ticket booking, manpower processing, helicopter reservations, and visa assistance. We are committed to delivering fast, secure, and professional travel solutions at competitive prices.',
    'hero.badge': '✈ Flying High, Serving Trusted',
    'hero.feat.intl': 'International Booking',
    'hero.feat.heli': 'Helicopter Rental',
    'hero.feat.overseas': 'Hajj & Umrah',
    'hero.feat.visa': 'Visa Guidance',

    // About
    'about.badge': 'Who We Are',
    'about.title': 'Pioneering Worldwide Aviation & Travel Support Solutions',
    'about.desc1': 'Natiapara Air Travels stands as a prominent name in Bangladesh for travel assistance and aviation services. Under Reg. No. 0016596, we have set a golden benchmark in delivering trustworthy ticketing, premium helicopter reservations, and premium visa support.',
    'about.desc2': 'With years of expert consultancy, we simplify complex flight bookings, corporate travels, and passport document submission processing. Our dedicated team is committed to making your journey safe, secure, and infinitely successful.',
    'about.experience': 'Years of Excellence',
    'about.cta': 'Discover Our Story',
    'about.team': 'Meet Our Professional Experts',

    // Services
    'services.badge': 'Our Services',
    'services.title': 'Comprehensive Travel & Aviation Solutions',
    'services.subtitle': 'Explore our wide portfolio of services tailored to meet individual, corporate, and private goals.',
    'services.intl.title': 'International Air Ticket Booking',
    'services.intl.desc': 'Seamless and stress-free ticket bookings with major airlines to any global destination at competitive pricing.',
    'services.dom.title': 'Domestic Air Ticket Booking',
    'services.dom.desc': 'Instant domestic flight options covering all airports across Bangladesh with priority seating.',
    'services.heli.title': 'Helicopter Reservation',
    'services.heli.desc': 'Luxury helicopter charter services for corporate VIP travels, medical emergencies, or special events anywhere in Bangladesh.',
    'services.manpower.title': 'Tourist & Business Visas',
    'services.manpower.desc': 'Complete support for tourist, visit, and business visa file processing for travel and tourism across the globe.',
    'services.visa.title': 'Visa Assistance',
    'services.visa.desc': 'Complete document curation, processing support, and visa application submission with high success rates.',
    'services.corp.title': 'Corporate Travel Solutions',
    'services.corp.desc': 'Dedicated travel management portal for enterprises offering discounted rates, flexible bookings, and analytics.',
    'services.group.title': 'Group Travel Management',
    'services.group.desc': 'Custom travel itineraries, transport arrangements, and discounted accommodations for leisure or study groups.',
    'services.umrah.title': 'Hajj, Umrah & Religious Travel Support',
    'services.umrah.desc': 'Complete Hajj and Umrah packages offering premium visa support, reliable flights, and proximity hotel bookings in holy cities.',

    // Countries
    'countries.badge': 'Global Reach',
    'countries.title': 'Global Destinations We Serve',
    'countries.subtitle': 'Explore major global destinations where we assist in travel planning, ticket booking, and tourist visa support.',
    'countries.saudi': 'Saudi Arabia',
    'countries.uae': 'United Arab Emirates',
    'countries.qatar': 'Qatar',
    'countries.oman': 'Oman',
    'countries.kuwait': 'Kuwait',
    'countries.malaysia': 'Malaysia',
    'countries.singapore': 'Singapore',
    'countries.italy': 'Italy',
    'countries.romania': 'Romania',
    'countries.poland': 'Poland',
    'countries.canada': 'Canada',

    // Why Choose Us
    'why.badge': 'Why Choose Us',
    'why.title': 'Our Standards of Absolute Perfection',
    'why.subtitle': 'We emphasize core values of trust, transparency, and high-efficiency compliance.',
    'why.licensed.title': 'Government approved',
    'why.licensed.desc': 'Fully registered under Reg. No. 0016596 ensuring complete compliance and standard security.',
    'why.trusted.title': 'Trusted Service',
    'why.trusted.desc': 'Trusted by thousands of travel enthusiasts and international passengers over the years.',
    'why.support.title': '24/7 Support Desk',
    'why.support.desc': 'Dedicated round-the-clock emergency support for flight reschedules, visa alerts, and travel consultations.',
    'why.pricing.title': 'Affordable Pricing',
    'why.pricing.desc': 'Highly competitive transparent rates with zero hidden agent fees or unexpected charges.',
    'why.processing.title': 'Fast Processing',
    'why.processing.desc': 'Highly-optimized paperwork curation ensuring modern velocity for visa and ticket issues.',
    'why.team.title': 'Experienced Consultants',
    'why.team.desc': 'Staffed by industry pioneers with robust connections across airlines and global embassies.',
    'why.coverage.title': 'Nationwide Operations',
    'why.coverage.desc': 'Operating out of Tangail with robust network reach and document courier support nationwide.',
    'why.satisfaction.title': '98% Customer Delight',
    'why.satisfaction.desc': 'Exemplary focus on client comfort and long-term relationships resulting in stellar reviews.',

    // Process
    'process.badge': 'How We Work',
    'process.title': 'Simple 4-Step Booking Structure',
    'process.step1.title': '1. Quick Contact',
    'process.step1.desc': 'Reach out to our agents online, over the phone, or visit our standard physical offices.',
    'process.step2.title': '2. Document Curation',
    'process.step2.desc': 'Submit passports, visa specifications, and supporting official papers for verification.',
    'process.step3.title': '3. Fast Booking & Verification',
    'process.step3.desc': 'Our experts run thorough background alignment checks and process the appropriate entries.',
    'process.step4.title': '4. Safe Delivery & Support',
    'process.step4.desc': 'Receive your valid visa, verified air tickets, and full travel briefing with active support.',

    // Statistics
    'stats.tickets': '10,000+ Air Tickets Sold',
    'stats.heli': '500+ Helicopter Rentals',
    'stats.visas': '3,000+ Successful Visas Processed',
    'stats.satisfaction': '98% Positive Feedback Rate',

    // Mission Vision
    'mission.title': 'Our Core Mission',
    'mission.desc': 'To provide premium-grade, safe, and transparent travel logistics and visa processing solutions to Bangladeshis, enabling global aspirations with legal and moral integrity.',
    'vision.title': 'Our Visual Horizon',
    'vision.desc': 'To stand as the absolute absolute most trusted household aviation and travel partner in Tangail and Bangladesh, transforming travel dreams into secure pathways of life-long success.',

    // Testimonials
    'testi.badge': 'Reviews',
    'testi.title': 'Loved by Travel Enthusiasts & Explorers',
    'testi.subtitle': 'Read direct feedback from clients whom we assisted in ticket booking, helicopter booking, and visa processing.',

    // Gallery
    'gallery.badge': 'Fascinating Gallery',
    'gallery.title': 'Glimpses of Our Aviation Work',
    'gallery.filter.all': 'All Images',
    'gallery.filter.planes': 'Airplanes',
    'gallery.filter.airport': 'Airports',
    'gallery.filter.heli': 'Helicopters',
    'gallery.filter.visas': 'Visa Cases',
    'gallery.filter.dest': 'Destinations',

    // FAQ
    'faq.badge': 'FAQ Support',
    'faq.title': 'Frequently Asked Queries',
    'faq.q1': 'How do I book air tickets with Natiapara Air Travels?',
    'faq.a1': 'You can book your international or domestic air tickets simply by contacting us via Call, WhatsApp, or visiting our office. Just provide your travel dates and passenger passport copies.',
    'faq.q2': 'What is the booking procedure for helicopter services in Bangladesh?',
    'faq.a2': 'For helicopter reservation, we require at least 24 to 48 hours notice to process flight clearances and permits. Contact our dedicated hotline for spot rates and fleet sizes.',
    'faq.q3': 'Which countries do you process tourist and transit visas for?',
    'faq.a3': 'We process tourist, visitor, transit, and business visas primarily to Middle-Eastern and European countries including Saudi Arabia, UAE, Qatar, Oman, Kuwait, Malaysia, Singapore, Italy, Romania, Poland, and Canada.',
    'faq.q4': 'How long does a general corporate visa processing take?',
    'faq.a4': 'Processing times vary greatly depending on country regulations and embassy speeds, typically ranging from 15 days to 2 months. We maintain strict digital timelines and provide constant milestone updates.',
    'faq.q5': 'Are your consulting services accessible nationwide?',
    'faq.a5': 'Yes, while our headquarters is located in Delduar, Tangail, our digital document collection systems and partnerships allow citizens from any corner of Bangladesh to acquire our services seamlessly.',

    // CTA Section
    'cta.title': 'Ready to Launch Your Journey or Book a Private Helicopter?',
    'cta.desc': 'Get in touch with Natiapara Air Travels right now. Enjoy professional ticketing and authentic visa consultancy.',

    // Contact Form & Info
    'form.name': 'Your Full Name',
    'form.phone': 'WhatsApp or Phone Number',
    'form.email': 'Email Address (Optional)',
    'form.service': 'Select Service Needed',
    'form.message': 'Explain Your Travel or Ticket Goals',
    'form.success': 'Your message has been submitted and saved successfully! We will contact you soon.',
    'form.sending': 'Saving request details...',
    'contact.info': 'Corporate Information Details',
    'contact.address': 'Natiapara Bazar, M A Plaza, Poraikhali Road, Delduar, Tangail, Bangladesh',
    'contact.phone': 'Direct Support Hotline',
    'contact.email': 'Official Electronic Mail',
  },
  bn: {
    // General / Common
    'company.name': 'নাটিয়াপাড়া এয়ার ট্রাভেলস',
    'company.tagline': 'আপনার বিশ্বস্ত ভ্রমণ, বিমান এবং ওমরাহ ও ভিসা পার্টনার',
    'company.reg': 'রেজি নং: ০০১৬৫৯৬',
    'btn.call': 'সরাসরি কল করুন',
    'btn.whatsapp': 'হোয়াটসঅ্যাপ মেসেজ',
    'btn.getQuote': 'কোটেশন নিন',
    'btn.learnMore': 'আরও জানুন',
    'btn.submit': 'বার্তা পাঠান',
    'contact.title': 'যোগাযোগ করুন',
    'contact.subtitle': 'টিকিট বুকিং, হেলিকপ্টার রিজার্ভেশন এবং দ্রুত ভিসা প্রসেসিং সেবা পেতে আমাদের সাথে যুক্ত হন',

    // Nav
    'nav.home': 'হোম',
    'nav.about': 'আমাদের সম্পর্কে',
    'nav.services': 'সেবা সমূহ',
    'nav.countries': 'দেশ সমূহ',
    'nav.faq': 'জিজ্ঞাসা',
    'nav.contact': 'যোগাযোগ',

    // Hero
    'hero.title': 'নাটিয়াপাড়া এয়ার ট্রাভেলস',
    'hero.sub': 'আপনার বিশ্বস্ত বিমান টিকিট, ম্যানপাওয়ার ও হেলিকপ্টার রিজার্ভেশন সেবার নির্ভরযোগ্য  পার্টনার',
    'hero.desc': 'নাটিয়াপাড়া এয়ার ট্রাভেলস বাংলাদেশের একটি নির্ভরযোগ্য ও বিশ্বস্ত ট্রাভেল এজেন্সি। আমরা দেশীয় ও আন্তর্জাতিক বিমান টিকিট বুকিং, ম্যানপাওয়ার প্রসেসিং, হেলিকপ্টার রিজার্ভেশন, ভিসা সহায়তা এবং বিভিন্ন ভ্রমণসেবা প্রদান করে থাকি। আমাদের লক্ষ্য হলো গ্রাহকদের জন্য দ্রুত, নিরাপদ এবং পেশাদার সেবা নিশ্চিত করা, যাতে তারা সাশ্রয়ী মূল্যে সর্বোত্তম ভ্রমণ অভিজ্ঞতা লাভ করতে পারেন।',
    'hero.badge': '✈ আস্থার সাথে উড়ুন বিশ্বজুড়ে',
    'hero.feat.intl': 'আন্তর্জাতিক বিমান টিকিট',
    'hero.feat.heli': 'হেলিকপ্টার রিজার্ভেশন',
    'hero.feat.overseas': 'পবিত্র হজ ও ওমরাহ',
    'hero.feat.visa': 'ভিসা প্রসেসিং সেবা',

    // About
    'about.badge': 'আমাদের সম্পর্কে জানুন',
    'about.title': 'বিশ্বজুড়ে এভিয়েশন এবং ভ্রমণ সুবিধায় এক নির্ভরযোগ্য নাম',
    'about.desc1': 'নাটিয়াপাড়া এয়ার ট্রাভেলস বাংলাদেশের বিমান ভ্রমণ সুবিধা এবং এয়ার টিকিট বুকিং সেবায় একটি অত্যন্ত পরিচিত এবং বিশ্বস্ত নাম। সরকারি রেজি নং: ০০১৬৫৯৬ এর অধীনে, আমরা গ্রাহকদের জন্য সম্পূর্ণ স্বচ্ছতা বজায় রেখে সেবা প্রদান করে আসছি।',
    'about.desc2': 'বিগত বছরগুলোতে আমরা হাজার হাজার সাধারণ যাত্রীদের আন্তর্জাতিক ও অভ্যন্তরীণ ট্রাভেল এয়ার টিকিট এবং ট্যুরিস্ট ভিসা প্রসেসিং সফলভাবে সম্পন্ন করেছি। আমাদের দক্ষ টিম আপনার বিদেশ যাত্রাকে ঝামেলামুক্ত করতে দিনরাত কাজ করে যাচ্ছে।',
    'about.experience': 'বছরের গৌরবময় পথচলা',
    'about.cta': 'বিস্তারিত জানার জন্য ক্লিক করুন',
    'about.team': 'আমাদের অভিজ্ঞ ও পেশাদার কর্মকর্তা',

    // Services
    'services.badge': 'সেবা সমূহ',
    'services.title': 'আমাদের সেরা ভ্রমণ ও এভিয়েশন সেবা',
    'services.subtitle': 'আমাদের প্রধান সেবাসমূহ নিচে দেওয়া হলো, যা আপনার বিদেশযাত্রা ও আনন্দময় ভ্রমণ নিশ্চিত করবে।',
    'services.intl.title': 'আন্তর্জাতিক এয়ার টিকিট বুকিং',
    'services.intl.desc': 'বিশ্বের যেকোনো রুটের টিকিট বুক করতে আমাদের অভিজ্ঞ টিম কাজ করছে। সবচেয়ে কম রেটে আপনার পছন্দের আসন বুক করুন।',
    'services.dom.title': 'অভ্যন্তরীণ ট্রাভেল টিকিট',
    'services.dom.desc': 'বাংলাদেশের অভ্যন্তরের সকল বিমানবন্দরে যাতায়াতে দ্রুত টিকিট এবং পছন্দ মতন আসন বুকিং সুবিধা।',
    'services.heli.title': 'হেলিকপ্টার রিজার্ভেশন রেট',
    'services.heli.desc': 'জরুরি চিকিৎসা, বিজনেস মিটিং বা ভিআইপি মুভমেন্টের জন্য যেকোনো সময় দেশের যেকোনো প্রান্তে হেলিকপ্টার ভাড়া সুবিধা।',
    'services.manpower.title': 'ট্যুরিস্ট ও বিজনেস ভিসা প্রসেস',
    'services.manpower.desc': 'বিশ্বের যেকোনো দেশে বেড়াতে যাওয়া বা ব্যবসার কাজে ভ্রমণের জন্য ভিসা ফাইল প্রসেসিং এবং ফাইল প্রস্তুত করতে আমাদের দক্ষ টিম সহায়তা দেবে।',
    'services.visa.title': 'ভিসা প্রসেসিং ও কনসালটেন্সি',
    'services.visa.desc': 'সহজ নিয়ম ও সঠিক কাগজপত্র প্রসেস করে আমরা ভিসা ও ট্রাভেল প্রসেসিং এর উচ্চ সাফল্যের রেকর্ড বজায় রেখেছি।',
    'services.corp.title': 'কর্পোরেট ট্রাভেল ম্যানেজমেন্ট',
    'services.corp.desc': 'কোম্পানি বা ব্যবসার অফিশিয়াল ডেস্টিনেশন ট্রাভেলে বিশেষ চার্টার ও ফ্লেক্সিবল অফার প্রদান করি।',
    'services.group.title': 'গ্রুপ ট্যুর ও ট্রাভেল প্ল্যান',
    'services.group.desc': 'পারিবারিক ভ্রমণ বা গ্রুপ ট্যুরের খরচ কমাতে বিশেষ গ্রুপ ডিসকাউন্ট প্যাকেজ সুবিধা।',
    'services.umrah.title': 'পবিত্র হজ ও ওমরাহ এবং ধর্মীয় ট্রাভেল সাপোর্ট',
    'services.umrah.desc': 'নির্ভরযোগ্য ভিসা প্রসেসিং, হারামের নিকটে ভালো হোটেল বুকিং এবং অভিজ্ঞ গাইডসহ কমপ্লিট হজ ও ওমরাহ প্যাকেজ।',

    // Countries
    'countries.badge': 'বৈদেশিক রুটসমূহ',
    'countries.title': 'যেসব দেশের জন্য আমরা সার্ভিস দিই',
    'countries.subtitle': 'ভ্রমণ টিকিট ও ভিসা প্রসেস এর জন্য ইউরোপ ও মধ্যপ্রাচ্যের যেসব দেশে আমাদের রেগুলার সার্ভিস ও বুকিং রয়েছে।',
    'countries.saudi': 'সৌদি আরব',
    'countries.uae': 'সংযুক্ত আরব আমিরাত (ইউএই)',
    'countries.qatar': 'কাতার',
    'countries.oman': 'ওমান',
    'countries.kuwait': 'কুয়েত',
    'countries.malaysia': 'মালয়েশিয়া',
    'countries.singapore': 'সিঙ্গাপুর',
    'countries.italy': 'ইতালি',
    'countries.romania': 'রোমানিয়া',
    'countries.poland': 'পোল্যান্ড',
    'countries.canada': 'কানাডা',

    // Why Choose Us
    'why.badge': 'কেন আমাদের বেছে নেবেন?',
    'why.title': 'আমাদের সেরা গুণাবলী ও কাজের মান',
    'why.subtitle': 'আমরা সবসময় সত্যতা, আর্থিক নিরাপত্তা এবং গ্রাহক সন্তুষ্টি বজায় রেখে কাজ করি।',
    'why.licensed.title': 'সরকারি লাইসেন্সপ্রাপ্ত',
    'why.licensed.desc': 'রেজি নং: ০০১৬৫৯৬ এর অধীনে আইন মেনে সম্পূর্ণ বিশ্বস্ত উপায়ে সমস্ত নথি যাচাইপূর্বক প্রসেসিং করি।',
    'why.trusted.title': 'দীর্ঘদিনের বিশ্বস্ততা',
    'why.trusted.desc': 'হাজার হাজার সাধারণ যাত্রী এবং সুখী ভ্রমণকারীদের প্রথম আস্থার নাম নাটিয়াপাড়া এয়ার ট্রাভেলস।',
    'why.support.title': '২৪/৭ অ্যাক্টিভ সাপোর্ট',
    'why.support.desc': 'টিকিট বুকিং বাতিল, ফ্লাইট পরিবর্তন বা জরুরি ভিসা সহায়তায় ২৪ ঘণ্টাই খোলা আছে কাস্টমার সাপোর্ট।',
    'why.pricing.title': 'ন্যায্য ও সাশ্রয়ী দাম',
    'why.pricing.desc': 'কোনো গোপন বা অপ্রয়োজনীয় লুকানো চার্জ ছাড়াই বাজারে সবচেয়ে সাশ্রয়ী প্যাকেজ ও রেট প্রদান করি।',
    'why.processing.title': 'দ্রুততম সময়ে ফাইল প্রসেস',
    'why.processing.desc': 'আমাদের ডিজিটাল ও গতিশীল ওয়ার্ক ফ্লো ফাইল প্রসেসিং এবং সাবমিশনে নিশ্চিত করে সর্বোচ্চ গতি।',
    'why.team.title': 'দক্ষ ও অভিজ্ঞ টিম',
    'why.team.desc': 'বিভিন্ন দেশের দূতাবাস এবং শীর্ষস্থানীয় এয়ারলাইন্স সমূহের নিয়মাবলী তদারকিতে আমাদের টিমের রয়েছে বিশেষ অভিজ্ঞতা ও দক্ষতা।',
    'why.coverage.title': 'সারাদেশে বিস্তৃত নেটওয়ার্ক',
    'why.coverage.desc': 'টাঙ্গাইল জেলা ছাড়িয়ে কুরিয়ার ও অনলাইনের মাধ্যমে দেশের যেকোনো প্রান্ত থেকে আমাদের সেবা নেওয়া যাবে।',
    'why.satisfaction.title': '৯৮% গ্রাহক সন্তুষ্টির রেকর্ড',
    'why.satisfaction.desc': 'যাত্রীদের সুস্বাস্থ্য, চমৎকার আচরণ এবং দায়িত্বশীল কাজের মাধ্যমে আমরা অর্জন করেছি ৯৮% শতভাগ পজিティブ রিভিউ।',

    // Process
    'process.badge': 'আমাদের কাজের প্রসেস',
    'process.title': 'সহজ ৪-ধাপে আপনার সফর শুরু করুন',
    'process.step1.title': '১. সরাসরি যোগাযোগ',
    'process.step1.desc': 'আমাদের অফিস পরিদর্শনে আসুন অথবা সরাসরি হোয়াটসঅ্যাপ বা মোবাইলে কল করুন।',
    'process.step2.title': '২. ডকুমেন্টস জমা',
    'process.step2.desc': 'আপনার ভ্যালিড পাসপোর্ট, ছবি ও প্রয়োজনীয় ভ্রমণের সঠিক কাগজপত্রের সফ্টকপি জমা দিন।',
    'process.step3.title': '৩. প্রসেসিং ও টিকিট বুকিং',
    'process.step3.desc': 'আমাদের টিম নিখুঁতভাবে আপনার তথ্য দিয়ে ভিসা আবেদন করবে ও কনফার্ম টিকিট বুকিং দেবে।',
    'process.step4.title': '৪. নিরাপদে যাত্রা আরম্ভ',
    'process.step4.desc': 'ভিসা ও ফ্লাইটের সঠিক ব্রিফিং সমেত সমস্ত কাগজপত্র সংগ্রহ করুন ও নিরাপদে উড়াল দিন আপনার গন্তব্যে।',

    // Statistics
    'stats.tickets': '১০,০০০+ এয়ার টিকিট বুকিং',
    'stats.heli': '৫০০+ সফল হেলিকপ্টার রাইড',
    'stats.visas': '৩,০০০+ সফল ভিসা প্রসেসিং',
    'stats.satisfaction': '৯৮% গ্রাহকদের চমৎকার সন্তুষ্টি',

    // Mission Vision
    'mission.title': 'আমাদের মিশন',
    'mission.desc': 'বাংলাদেশি যাত্রী ও সুপ্রিয় প্রবাসী ভাইদের জন্য ঝামেলামুক্ত, শতভাগ স্বচ্ছ ট্রাভেল লজিস্টিকস এবং নির্ভরযোগ্য এয়ার টিকিট ও ভিসা কনসালটেন্সি সার্ভিস নিশ্চিত করা।',
    'vision.title': 'আমাদের ভিশন',
    'vision.desc': 'টাঙ্গাইল জেলা ও সমগ্র বাংলাদেশে এভিয়েশন এবং বিশ্বস্ত ট্রাভেল কনসালটেন্ট হিসেবে শীর্ষ স্থান অর্জন করা এবং মানুষের নিরাপদ যাত্রাকে সহজতর করা।',

    // Testimonials
    'testi.badge': 'গ্রাহকদের মতামত',
    'testi.title': 'আমাদের সেবা গ্রহীতাদের কথা',
    'testi.subtitle': 'আমাদের কাছ থেকে ফ্লাইটের টিকিট ও ভিসা সংক্রান্ত চমৎকার সহায়তা নিয়েছেন এমন কয়েকজন সন্তুষ্ট যাত্রীর মন্তব্য।',

    // Gallery
    'gallery.badge': 'ফটো গ্যালারি',
    'gallery.title': 'আমাদের কাজের দৃশ্য ও এভিয়েশন গ্যালারি',
    'gallery.filter.all': 'সব ছবি',
    'gallery.filter.planes': 'উড়োজাহাজ',
    'gallery.filter.airport': 'বিমানবন্দর',
    'gallery.filter.heli': 'হেলিকপ্টার',
    'gallery.filter.visas': 'ভিসা সফল কেস',
    'gallery.filter.dest': 'দর্শনীয় স্থান',

    // FAQ
    'faq.badge': 'সাধারণ প্রশ্নোত্তর',
    'faq.title': 'সচরাচর জিজ্ঞাসা সমূহ',
    'faq.q1': 'আমি নাটিয়াপাড়া এয়ার ট্রাভেলসের মাধ্যমে কিভাবে বিমানের টিকিট কাটব?',
    'faq.a1': 'খুবই সহজ! আপনি আমাদের মোবাইল নাম্বারে বা সরাসরি হোয়াটসঅ্যাপে যোগাযোগ করে পাসপোর্টের ছবি পাঠালে আমরা কম সময়ে টিকিট বুক করে আপনাকে ফ্রন্ট কপি পাঠিয়ে দেব।',
    'faq.q2': 'হেলিকপ্টার ভাড়া নেওয়ার নিয়ম কী?',
    'faq.a2': 'হেলিকপ্টার ভাড়ার জন্য কমপক্ষে ২৪ থেকে ৪৮ ঘণ্টা আগে সিভিল এভিয়েশন ক্লিয়ারেন্স ও ফ্লাইং পারমিটের জন্য অর্ডার কনফার্ম করতে হবে। যেকোনো জরুরি প্রয়োজনে আমাদের হটলাইনে যোগাযোগ করুন।',
    'faq.q3': 'আপনারা কোন কোন দেশের ভিসা প্রসেসিং বা এয়ার টিকিট বুকিং করেন?',
    'faq.a3': 'আমরা মূলত মধ্যপ্রাচ্য ও ইউরোপের জনপ্রিয় সব গন্তব্য যেমন: সৌদি আরব, দুবাই/ইউএই, কাতার, কুয়েত, ওমান, মালয়েশিয়া, সিঙ্গাপুর, ইতালি, রোমানিয়া এবং পোল্যান্ডের ট্যুরিস্ট ভিসা ও এয়ার টিকিট বুকিং করে থাকি।',
    'faq.q4': 'ভিসা ও ওয়ার্ক পারমিট প্রসেস করতে কত সময়ের প্রয়োজন হয়?',
    'faq.a4': 'দেশের ধরন এবং দূতাবাসের কাজের গতির ওপর নির্ভর করে সাধারণত ১৫ দিন থেকে সর্বোচ্চ ২ মাস পর্যন্ত সময় লাগতে পারে। আমরা নিয়মিত ফাইলে তদারকি করে গ্রাহককে সিসি টাইম ট্র্যাক ব্যাক দিই।',
    'faq.q5': 'আমি কি টাঙ্গাইলের বাইরে থেকেও কন্টাক্ট করতে পারি?',
    'faq.a5': 'হ্যাঁ, অবশ্যই! আমাদের ডিজিটাল সেবা ও সুরক্ষিত কুরিয়ার সুবিধার মাধ্যমে বাংলাদেশের ৬৪ জেলার যেকোনো স্থান থেকে আপনি ঘরে বসেই আপনার টিকিট বুক ও ভিসা কনসালটেন্সি সেবা নিতে পারবেন।',

    // CTA
    'cta.title': 'আপনার নিরাপদ বিদেশ যাত্রা এবং সঠিক ভ্রমণ বুকিং সফল করতে প্রস্তুত?',
    'cta.desc': 'আজই নাটিয়াপাড়া এয়ার ট্রাভেলসে যোগাযোগ করুন এবং সর্বোচ্চ প্রফেশনাল মান ও শতভাগ বিশ্বস্ততার সাথে বিমান টিকিট বুকিং ও ভিসা প্রসেস সেবা উপভোগ করুন।',

    // Contact Form & Info
    'form.name': 'আপনার পুরো নাম',
    'form.phone': 'মোবাইল বা হোয়াটসঅ্যাপ নাম্বার',
    'form.email': 'ইমেইল অ্যাড্রেস (ঐচ্ছিক)',
    'form.service': 'যে সেবাটি পেতে চান',
    'form.message': 'আপনার যাত্রা বা টিকিট সংক্রান্ত ডিটেইলস লিখুন',
    'form.success': 'আপনার আবেদনটি সফলভাবে জমা হয়েছে এবং আমাদের ডেটাবেসে সংরক্ষিত হয়েছে! দ্রুত আমাদের প্রতিনিধি যোগাযোগ করবেন।',
    'form.sending': 'তথ্য সংরক্ষণ করা হচ্ছে...',
    'contact.info': 'কর্পোরেট যোগাযোগের তথ্য',
    'contact.address': 'নাটিয়াপাড়া বাজার, এম এ প্লাজা, পোড়াইখালী রোড, দেলদুয়ার, টাঙ্গাইল, বাংলাদেশ',
    'contact.phone': 'সরাসরি সাপোর্ট হটলাইন',
    'contact.email': 'অফিশিয়াল ইমেইল আইডি',
  },
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('natiapara_lang');
    return (saved as Language) || 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('natiapara_lang', lang);
  };

  const t = (key: string): string => {
    const dict = translations[language];
    return dict[key as keyof typeof dict] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

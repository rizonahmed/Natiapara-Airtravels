import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { Plane, MapPin, ShieldAlert, CheckCircle, ExternalLink, Compass, Clock, FileText } from 'lucide-react';
import { WhatsAppIcon } from './Icons';

interface DetailedCountry {
  id: string;
  nameEn: string;
  nameBn: string;
  flag: string;
  code: string;
  region: string;
  categoryEn: string;
  categoryBn: string;
  hubAirport: string;
  visaTypeEn: string;
  visaTypeBn: string;
  processingTimeEn: string;
  processingTimeBn: string;
  successRate: number;
  airlines: string[];
  documentsEn: string[];
  documentsBn: string[];
}

export const Countries: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedCountryId, setSelectedCountryId] = useState<string>('singapore');
  const [regionFilter, setRegionFilter] = useState<string>('All');

  const countriesList: DetailedCountry[] = [
    {
      id: 'singapore',
      nameEn: 'Singapore',
      nameBn: 'সিঙ্গাপুর',
      flag: '🇸🇬',
      code: 'SIN',
      region: 'Southeast Asia',
      categoryEn: 'ASEAN Financial Hub',
      categoryBn: 'অর্থনৈতিক সমৃদ্ধ কেন্দ্র',
      hubAirport: 'Singapore Changi Airport (SIN)',
      visaTypeEn: 'Electronic Tourist Visa (Via Authorized Agent)',
      visaTypeBn: 'ইলেকট্রনিক ট্যুরিস্ট ভিসা (অনুমোদিত এজেন্ট রুট)',
      processingTimeEn: '6 - 9 Working Days',
      processingTimeBn: '৬ - ৯ কার্যদিবস',
      successRate: 95,
      airlines: ['Singapore Airlines', 'Biman Bangladesh', 'US-Bangla Airlines'],
      documentsEn: ['Original Passport with Validity', 'White Background Photo Mat Finish', 'Bank statement with min. ৳ 2 Lakh balance', 'Official Local Sponsor Letter (Form V39A)'],
      documentsBn: ['মূল পাসপোর্ট কপি', 'ম্যাট ফিনিশ সাদা ব্যাকগ্রাউন্ড ছবি', 'ন্যূনতম ২ লক্ষ টাকার ব্যাংক স্টেটমেন্ট', 'সিঙ্গাপুরের লোকাল স্পন্সর লেটার (Form V39A)']
    },
    {
      id: 'saudi',
      nameEn: 'Saudi Arabia',
      nameBn: 'সৌদি আরব',
      flag: '🇸🇦',
      code: 'RUH / JED',
      region: 'Middle East',
      categoryEn: 'GCC Gateway & Umrah',
      categoryBn: 'জিসিসি গেটওয়ে ও ওমরাহ',
      hubAirport: 'King Khalid Int\'l (Riyadh) / King Abdulaziz Int\'l (Jeddah)',
      visaTypeEn: 'Tourist E-Visa, Work Stamp, Umrah Curation',
      visaTypeBn: 'ট্যুরিস্ট ই-ভিসা, ওয়ার্ক স্ট্যাম্পিং ও ওমরাহ',
      processingTimeEn: '3 - 7 Working Days',
      processingTimeBn: '৩ - ৭ কার্যদিবস',
      successRate: 99,
      airlines: ['Biman Bangladesh', 'Saudia', 'Flynas', 'Gulf Air', 'Kuwait Airways'],
      documentsEn: ['Original Passport with 6m Validity', 'Biometric Photo with White Background', 'National ID Card Copy', 'Fever/Covid Vaccine Certificate'],
      documentsBn: ['ন্যূনতম ৬ মাসের মেয়াদসহ মূল পাসপোর্ট', 'সাদা ব্যাকগ্রাউন্ড ছবি', 'জাতীয় পরিচয়পত্র কপি', 'ভ্যাকসিন সার্টিফিকেট কপি']
    },
    {
      id: 'malaysia',
      nameEn: 'Malaysia',
      nameBn: 'মালয়েশিয়া',
      flag: '🇲🇾',
      code: 'KUL',
      region: 'Southeast Asia',
      categoryEn: 'ASEAN Tourism Peak',
      categoryBn: 'দক্ষিণ-পূর্ব এশিয়া গেটওয়ে',
      hubAirport: 'Kuala Lumpur International Airport (KUL)',
      visaTypeEn: 'Single Entry E-Visa, Study, Expatriate Curation',
      visaTypeBn: 'সিঙ্গেল এন্ট্রি ই-ভিসা, স্টুডেন্ট ও এক্সপ্যাট্রিয়েট সাপোর্ট',
      processingTimeEn: '5 - 8 Working Days',
      processingTimeBn: '৫ - ৮ কার্যদিবস',
      successRate: 96,
      airlines: ['Malaysia Airlines', 'AirAsia', 'Biman Bangladesh', 'US-Bangla'],
      documentsEn: ['Passport Bio-Page Copy', 'Digital Studio Quality Photo', '6 Months Bank Statement & Solvency', 'Company NOC / Student ID'],
      documentsBn: ['পাসপোর্টের নিখুঁত স্ক্যান কপি', 'ল্যাব কোয়ালিটি ডিজিটাল ছবি', '৬ মাসের ব্যাংক স্টেটমেন্ট ও সলভেন্সি', 'কোম্পানির নো-অবজেকশন লেটার (NOC)']
    },
    {
      id: 'uae',
      nameEn: 'United Arab Emirates',
      nameBn: 'সংযুক্ত আরব আমিরাত (ইউএইচ)',
      flag: '🇦🇪',
      code: 'DXB / AUH',
      region: 'Middle East',
      categoryEn: 'GCC Business Hub',
      categoryBn: 'বিজনেস ও ট্যুরিজম ক্যাটাগরি',
      hubAirport: 'Dubai International (DXB) / Abu Dhabi International (AUH)',
      visaTypeEn: '30/60 Days Entry Visas, Partner Visas',
      visaTypeBn: '৩০/৬০ দিনের এন্ট্রি ভিসা এবং পার্টনার ভিসা',
      processingTimeEn: '2 - 5 Working Days',
      processingTimeBn: '২ - ৫ কার্যদিবস',
      successRate: 98,
      airlines: ['Emirates', 'Flydubai', 'US-Bangla Airlines', 'Air Arabia', 'Biman'],
      documentsEn: ['Color Scan Passport Bio-Page', 'Passport Size Zoom Photo', 'Aadhar/National Identity Card Paper'],
      documentsBn: ['পাসপোর্টের রঙ্গিন স্ক্যান কপি', 'পাসপোর্ট সাইজ ছবি', 'জাতীয় পরিচয়পত্র কপি']
    },
    {
      id: 'qatar',
      nameEn: 'Qatar',
      nameBn: 'কাতার',
      flag: '🇶🇦',
      code: 'DOH',
      region: 'Middle East',
      categoryEn: 'GCC Express Transit',
      categoryBn: 'এক্সপ্রেস ট্রানজিট রুট',
      hubAirport: 'Hamad International Airport (DOH)',
      visaTypeEn: 'Tourist E-Visa, Business Curation, Family Visit',
      visaTypeBn: 'ট্যুরিস্ট ই-ভিসা, ফ্যামিলি ভিজিট ও ওয়ার্ক পারমিট',
      processingTimeEn: '4 - 8 Working Days',
      processingTimeBn: '৪ - ৮ কার্যদিবস',
      successRate: 98,
      airlines: ['Qatar Airways', 'Biman Bangladesh', 'US-Bangla Airlines', 'Gulf Air'],
      documentsEn: ['Valid Passport', 'White Background Photo', 'Hotel Reservation details', 'Valid return tickets'],
      documentsBn: ['ভ্যালিড পাসপোর্ট', 'সাদা ব্যাকগ্রাউন্ড ছবি', 'হোটেল বুকিং কপি', 'রিটার্ন এয়ার টিকিট']
    },
    {
      id: 'kuwait',
      nameEn: 'Kuwait',
      nameBn: 'কুয়েত',
      flag: '🇰🇼',
      code: 'KWI',
      region: 'Middle East',
      categoryEn: 'GCC Direct Link',
      categoryBn: 'জিসিসি ডিরেক্ট লিংক',
      hubAirport: 'Kuwait International Airport (KWI)',
      visaTypeEn: 'Work Visa Stamping, Commercial & Tourist Visit',
      visaTypeBn: 'ওয়ার্ক ভিসা স্ট্যাম্পিং, বাণিজ্যিক ও ট্যুরিস্ট এন্ট্রি',
      processingTimeEn: '5 - 10 Working Days',
      processingTimeBn: '৫ - ১০ কার্যদিবস',
      successRate: 97,
      airlines: ['Kuwait Airways', 'Jazeera Airways', 'Biman Bangladesh'],
      documentsEn: ['Original Valid Passport', 'Attested Police Clearance', 'Biometric White Background Photo', 'Medical Fitness Certificate'],
      documentsBn: ['মেয়াদসহ মূল পাসপোর্ট', 'সত্যায়িত পুলিশ ক্লিয়ারেন্স', 'সাদা ব্যাকগ্রাউন্ড বায়োমেট্রিক ছবি', 'মেডিকেল ফিটনেস সার্টিফিকেট']
    },
    {
      id: 'thailand',
      nameEn: 'Thailand',
      nameBn: 'থাইল্যান্ড',
      flag: '🇹🇭',
      code: 'BKK / DMK',
      region: 'Southeast Asia',
      categoryEn: 'ASEAN Leisure & Wellness',
      categoryBn: 'পর্যটন ও উন্নত চিকিৎসা হাব',
      hubAirport: 'Suvarnabhumi Airport (BKK) / Don Mueang (DMK)',
      visaTypeEn: 'Tourist Visa, Medical Curation & Business Entry',
      visaTypeBn: 'ট্যুরিস্ট ভিসা, মেডিকেল ট্রিটমেন্ট ও বিজনেস ক্যাটাগরি',
      processingTimeEn: '5 - 7 Working Days',
      processingTimeBn: '৫ - ৭ কার্যদিবস',
      successRate: 97,
      airlines: ['Thai Airways', 'Biman Bangladesh', 'US-Bangla Airlines', 'Thai Lion Air'],
      documentsEn: ['Original Passport with 6m Validity', 'Two Recent Passport-Sized Photos', '6 Months Bank Statement & Solvency', 'Professional Proof (NOC or Trade License)'],
      documentsBn: ['কমপক্ষে ৬ মাসের মেয়াদসহ মূল পাসপোর্ট', '২ কপি রিলেটেড পাসপোর্ট সাইজ ছবি', '৬ মাসের ব্যাংক স্টেটমেন্ট ও সলভেন্সি', 'পেশাগত প্রমাণপত্র (NOC বা ট্রেড লাইসেন্স)']
    },
    {
      id: 'maldives',
      nameEn: 'Maldives',
      nameBn: 'মালদ্বীপ',
      flag: '🇲🇻',
      code: 'MLE',
      region: 'Southeast Asia',
      categoryEn: 'Tropical Island Escape',
      categoryBn: 'লাক্সারি আইল্যান্ড ট্যুরিজম',
      hubAirport: 'Velana International Airport (MLE)',
      visaTypeEn: 'Visa on Arrival Curation, Holiday & Work Entry',
      visaTypeBn: 'অন-অ্যারাইভাল ভিসা সাপোর্ট, হলিডে ও ওয়ার্ক এন্ট্রি',
      processingTimeEn: '1 - 3 Working Days',
      processingTimeBn: '১ - ৩ কার্যদিবস',
      successRate: 99,
      airlines: ['US-Bangla Airlines', 'Maldivian', 'Biman Bangladesh', 'SriLankan Airlines'],
      documentsEn: ['Valid Passport', 'Confirmed Hotel/Resort Booking', 'IMUGA Travel Declaration', 'Sufficient funds proof'],
      documentsBn: ['মেয়াদসহ মূল পাসপোর্ট', 'বুকিংকৃত হোটেল অথবা রিসোর্ট কনফার্মেশন', 'ইমুগা ট্রাভেল ডিক্লারেশন ফর্ম', 'পর্যাপ্ত ব্যালেন্স ও বিমান টিকিট']
    },
    {
      id: 'oman',
      nameEn: 'Oman',
      nameBn: 'ওমান',
      flag: '🇴🇲',
      code: 'MCT',
      region: 'Middle East',
      categoryEn: 'GCC Coastal Gateway',
      categoryBn: 'উপকূলীয় জিসিসি স্টেট',
      hubAirport: 'Muscat International Airport (MCT)',
      visaTypeEn: 'Tourist E-Visa, Job Curation, Multi-Entry visa',
      visaTypeBn: 'ট্যুরিস্ট ই-ভিসা, ওয়ার্ক প্রসেস ও স্পন্সরশিপ ফাইল',
      processingTimeEn: '3 - 6 Working Days',
      processingTimeBn: '৩ - ৬ কার্যদিবস',
      successRate: 97,
      airlines: ['Oman Air', 'SalamAir', 'Biman Bangladesh', 'Gulf Air'],
      documentsEn: ['Passport Scan Copy', 'Recent Passport Photo', 'Guarantor/Sponsor Paper (If Applicable)'],
      documentsBn: ['পাসপোর্ট স্ক্যান কপি', 'সদ্য তোলা রঙ্গিন ছবি', 'স্পন্সর বা গ্যারান্টর ট্রাভেল পেপার']
    },
    {
      id: 'jordan',
      nameEn: 'Jordan',
      nameBn: 'জর্ডান',
      flag: '🇯🇴',
      code: 'AMM',
      region: 'Middle East',
      categoryEn: 'GCC Buffer Gateway',
      categoryBn: 'ঐতিহাসিক ও ওয়ার্ক গেটওয়ে',
      hubAirport: 'Queen Alia International Airport (AMM)',
      visaTypeEn: 'Work Visa Stamping, Tourist & Medical Visit',
      visaTypeBn: 'ওয়ার্ক ভিসা স্ট্যাম্পিং, ট্যুরিস্ট ও মেডিকেল প্রসেসিং',
      processingTimeEn: '5 - 10 Working Days',
      processingTimeBn: '৫ - ১০ কার্যদিবস',
      successRate: 98,
      airlines: ['Gulf Air', 'Qatar Airways', 'Emirates', 'Flydubai'],
      documentsEn: ['Original Passport with Validity', 'White Background Photo', 'NOC Letter or Business Proof', 'Police Clearance Report'],
      documentsBn: ['মেয়াদসহ মূল পাসপোর্ট', 'সাদা ব্যাকগ্রাউন্ড ছবি', 'পেশাগত প্রমাণপত্র (NOC বা ট্রেড লাইসেন্স)', 'পুলিশ ক্লিয়ারেন্স সার্টিফিকেট']
    },
    {
      id: 'iraq',
      nameEn: 'Iraq',
      nameBn: 'ইরাক',
      flag: '🇮🇶',
      code: 'BGW',
      region: 'Middle East',
      categoryEn: 'Religious Hub & Labor Route',
      categoryBn: 'ধর্মীয় সফর ও লেবার রুট',
      hubAirport: 'Baghdad International Airport (BGW)',
      visaTypeEn: 'Pilgrimage, Work Permit & Business Visit',
      visaTypeBn: 'জিয়ারত ভিসা, ওয়ার্ক পারমিট ও বিজনেস এন্ট্রি',
      processingTimeEn: '7 - 12 Working Days',
      processingTimeBn: '৭ - ১২ কার্যদিবস',
      successRate: 95,
      airlines: ['Air Arabia', 'Flydubai', 'Qatar Airways', 'Gulf Air'],
      documentsEn: ['Original Passport', 'Medical fitness clearance', 'Clear Police Record Copy', 'Sponsorship Verification from Baghdad'],
      documentsBn: ['মেয়াদসহ মূল পাসপোর্ট', 'মেডিকেল ক্লিয়ারেন্স সার্টিফিকেট', 'পুলিশ ক্লিয়ারেন্স কপি', 'ইরাক থেকে অনুমোদিত স্পন্সরশিপের প্রমাণপত্র']
    },
    {
      id: 'bahrain',
      nameEn: 'Bahrain',
      nameBn: 'বাহরাইন',
      flag: '🇧🇭',
      code: 'BAH',
      region: 'Middle East',
      categoryEn: 'GCC Island Gateway',
      categoryBn: 'জিসিসি আইল্যান্ড গেটওয়ে',
      hubAirport: 'Bahrain International Airport (BAH)',
      visaTypeEn: 'E-Visa, Work Stamp & Investment Entry',
      visaTypeBn: 'অনলাইন ই-ভিসা, ওয়ার্ক স্ট্যাম্পিং ও ইনভেস্টর এন্ট্রি',
      processingTimeEn: '4 - 7 Working Days',
      processingTimeBn: '৪ - ৭ কার্যদিবস',
      successRate: 98,
      airlines: ['Gulf Air', 'Flydubai', 'Qatar Airways'],
      documentsEn: ['Scanned Passport Copy', 'Bank Statement', 'Return Air Ticket', 'Confirmed Hotel Spot Placement'],
      documentsBn: ['পাসপোর্ট রঙিন স্ক্যান কপি', 'ব্যাংক অ্যাকাউন্ট বিবরণী', 'অনুমোদিত রিটার্ন এয়ার টিকিট', 'হোটেল বুকিং বিবরণী']
    },
    {
      id: 'italy',
      nameEn: 'Italy',
      nameBn: 'ইতালি',
      flag: '🇮🇹',
      code: 'FCO / MXP',
      region: 'Europe',
      categoryEn: 'Schengen Area Member',
      categoryBn: 'শেনজেন ইউরোপীয় জোন',
      hubAirport: 'Rome Fiumicino Airport (FCO) / Milan Malpensa (MXP)',
      visaTypeEn: 'Schengen Visa (Tourist/Business/Flussi Curation)',
      visaTypeBn: 'শেনজেন ট্যুরিস্ট, বিজনেস বা ফ্লুসি ওয়ার্ক ক্যাটাগরি',
      processingTimeEn: '30 - 60 Calendar Days',
      processingTimeBn: '৩০ - ৬০ দিন',
      successRate: 90,
      airlines: ['Saudia', 'Qatar Airways', 'Emirates', 'Turkish Airlines', 'Gulf Air'],
      documentsEn: ['Full Completed Schengen Form', 'Passport with at least 2 Blank Pages', '6 Months Strong Bank Record', 'Income Tax Returns (TIN)', 'Travel Medical Insurance (Up to €30,000)'],
      documentsBn: ['সম্পূর্ণ শেনজেন ভিসা ফর্ম', 'কমপক্ষে ২টি খালি পেজ বিশিষ্ট পাসপোর্ট', '৬ মাসের মজবুত ব্যাংক বিবরণী', 'টিন সার্টিফিকেট ও ট্যাক্স রিটার্ন', 'ইউরোপীয় ট্রাভেল মেডিকেল ইন্সুরেন্স']
    },
    {
      id: 'romania',
      nameEn: 'Romania',
      nameBn: 'রোমানিয়া',
      flag: '🇷🇴',
      code: 'OTP',
      region: 'Europe',
      categoryEn: 'European Schengen Bloc',
      categoryBn: 'ইইউ শেনজেন বাউন্ডারি',
      hubAirport: 'Henri Coandă International Airport (OTP)',
      visaTypeEn: 'Employment Visa (D/AM Category), Tourist Visas',
      visaTypeBn: 'ওয়ার্ক এমপ্লয়মেন্ট ভিসা ও ইউরোপ ট্যুরিস্ট ফাইল',
      processingTimeEn: '30 - 45 Calendar Days',
      processingTimeBn: '৩০ - ৪৫ দিন',
      successRate: 93,
      airlines: ['Qatar Airways', 'Turkish Airlines', 'Flydubai', 'Saudia'],
      documentsEn: ['Original Work Permit Authorization', 'Registered Police Clearance Certificate', 'Accommodation proof in Bucharest', 'Active Travel Insurance'],
      documentsBn: ['মূল ওয়ার্ক পারমিট লেটার', 'পুলিশ ক্লিয়ারেন্স সার্টিফিকেট', 'বুকিং বা আবাসনের বিবরণ', 'ভ্যালিড ট্রাভেল ইন্সুরেন্স']
    },
    {
      id: 'poland',
      nameEn: 'Poland',
      nameBn: 'পোল্যান্ড',
      flag: '🇵🇱',
      code: 'WAW',
      region: 'Europe',
      categoryEn: 'Central European Core',
      categoryBn: 'মধ্য ইউরোপীয় শেনজেন',
      hubAirport: 'Warsaw Chopin Airport (WAW)',
      visaTypeEn: 'National D-Type Visa (Work/Study)',
      visaTypeBn: 'ন্যাশনাল ডি-টাইপ ভিসা (শিক্ষা ও কর্মসংস্থান)',
      processingTimeEn: '35 - 50 Calendar Days',
      processingTimeBn: '৩৫ - ৫০ দিন',
      successRate: 91,
      airlines: ['Turkish Airlines', 'Qatar Airways', 'Emirates', 'Saudia'],
      documentsEn: ['Work Permit Invitation from Voivodeship', 'Embassy Visa Appointment Slip', 'Educational Curation papers', 'National Police Clearance'],
      documentsBn: ['ভয়ভোডশিপ কর্তৃক অনুমোদিত ওয়ার্ক পারমিট', 'এম্বাসি অ্যাপয়েন্টমেন্ট স্লিপ', 'অনুমোদিত শিক্ষাগত যোগ্যতার সনদ', 'পুলিশ ক্লিয়ারেন্স কপি']
    },
    {
      id: 'uk',
      nameEn: 'United Kingdom',
      nameBn: 'যুক্তরাজ্য (ইউকে)',
      flag: '🇬🇧',
      code: 'LHR / MAN',
      region: 'Europe',
      categoryEn: 'Global Academic & Elite Transit',
      categoryBn: 'উচ্চশিক্ষা ও অভিজাত গ্লোবাল হাব',
      hubAirport: 'London Heathrow (LHR) / Manchester Airport (MAN)',
      visaTypeEn: 'Standard Visitor Visa, Student & Tier-2 Work Curation',
      visaTypeBn: 'স্ট্যান্ডার্ড ভিজিটর ভিসা, স্টুডেন্ট ও টিয়ার-২ ওয়ার্ক প্রসেস',
      processingTimeEn: '15 - 28 Working Days',
      processingTimeBn: '১৫ - ২৮ কার্যদিবস',
      successRate: 92,
      airlines: ['Biman Bangladesh', 'Emirates', 'Qatar Airways', 'Saudia', 'Gulf Air'],
      documentsEn: ['Valid Passport', '6 Months Strong Bank Record with Source', 'Tuberculosis Test Certificate', 'Proof of Accommodation & Itinerary', 'Educational/Job Sponsorship Docs'],
      documentsBn: ['ন্যূনতম ৬ মাসের ভ্যালিড পাসপোর্ট', 'উৎসসহ ৬ মাসের শক্তিশালী ব্যাংক স্টেটমেন্ট', 'টিবি টেস্ট ক্লিয়ারেন্স সার্টিফিকেট', 'আবাসন ও ট্রাভেল প্ল্যান বুকিং', 'শিক্ষা বা কর্মসংস্থানের স্পন্সরশিপ পেপারস']
    },
    {
      id: 'usa',
      nameEn: 'United States',
      nameBn: 'মার্কিন যুক্তরাষ্ট্র (ইউএসএ)',
      flag: '🇺🇸',
      code: 'JFK / LAX',
      region: 'North America & Oceania',
      categoryEn: 'Long-Haul Transatlantic',
      categoryBn: 'লং-হল গ্লোবাল ট্রাভেল',
      hubAirport: 'John F. Kennedy (JFK) / Los Angeles (LAX) / Chicago (ORD)',
      visaTypeEn: 'B1/B2 Visitor, Student (F-1) & Employment Route',
      visaTypeBn: 'বি১/বি২ ভিজিটর, স্টুডেন্ট (এফ-১) ও এমপ্লয়মেন্ট রুট',
      processingTimeEn: '30 - 90 Calendar Days',
      processingTimeBn: '৩০ - ৯০ দিন',
      successRate: 88,
      airlines: ['Emirates', 'Qatar Airways', 'Kuwait Airways', 'Saudia', 'Turkish Airlines', 'British Airways'],
      documentsEn: ['Valid Passport', 'DS-160 Confirmation Page', 'US Embassy Interview Appointment', 'Strong Financial Asset Valuation', 'Academic/Sponsorship papers'],
      documentsBn: ['মেয়াদসহ মূল পাসপোর্ট', 'ডিএস-১৬০ অনলাইন কনফার্মেশন স্লিপ', 'ইউএস এম্বাসি ইন্টারভিউ স্লিপ', 'সম্পদ ও ব্যাংক সলভেন্সি বিবরণী', 'শিক্ষা বা স্পন্সরশিপের ডকুমেন্টসমূহ']
    },
    {
      id: 'canada',
      nameEn: 'Canada',
      nameBn: 'কানাডা',
      flag: '🇨🇦',
      code: 'YYZ / YVR',
      region: 'North America & Oceania',
      categoryEn: 'Maple Leaf Gateway',
      categoryBn: 'গ্লোবাল একাডেমিক গেটওয়ে',
      hubAirport: 'Toronto Pearson (YYZ) / Vancouver Airport (YVR)',
      visaTypeEn: 'Tourist (TRV), Study Permit & express Entry Support',
      visaTypeBn: 'ট্যুরিস্ট (TRV) ভিসা, স্টুডেন্ট পারমিট ও এক্সপ্রেস এন্ট্রি',
      processingTimeEn: '25 - 60 Calendar Days',
      processingTimeBn: '২৫ - ৬০ দিন',
      successRate: 89,
      airlines: ['Qatar Airways', 'Emirates', 'Turkish Airlines', 'Air Canada'],
      documentsEn: ['Valid Passport', 'Strong Family & Asset Ties Proof', '6 Months Detailed Bank Statement', 'Biometrics (In-Person at VFS Global)', 'Sponsorship Letter or LOA'],
      documentsBn: ['মুল ভ্যালিড পাসপোর্ট', 'পারিবারিক ও ব্যবসায়িক সম্পর্কের প্রমাণ', '৬ মাসের বিস্তারিত ব্যাংক রেকর্ড', 'ভিএফএস গ্লোবাল বায়োমেট্রিক স্লিপ', 'স্পন্সরশিপ বা লিগ্যাল ইনফরমেশন']
    },
    {
      id: 'australia',
      nameEn: 'Australia',
      nameBn: 'অস্ট্রেলিয়া',
      flag: '🇦🇺',
      code: 'SYD / MEL',
      region: 'North America & Oceania',
      categoryEn: 'Oceanic Horizon',
      categoryBn: 'ট্যুরিজম ও হায়ার স্টাডি রুট',
      hubAirport: 'Sydney Kingsford Smith (SYD) / Melbourne Airport (MEL)',
      visaTypeEn: 'Tourist (Subclass 600), Higher Education & Work',
      visaTypeBn: 'ট্যুরিস্ট ভিসা (সাবক্লাস ৬০০), উচ্চশিক্ষা ও ওয়ার্ক ক্যাটাগরি',
      processingTimeEn: '20 - 45 Calendar Days',
      processingTimeBn: '২০ - ৪৫ দিন',
      successRate: 91,
      airlines: ['Singapore Airlines', 'Malaysia Airlines', 'SriLankan Airlines', 'Qatar Airways'],
      documentsEn: ['Original Passport with Validity', 'Detailed Itinerary and Leave Letter (NOC)', '6 Months Personal & Business Bank Records', 'Visa Application Fee Payment Slip'],
      documentsBn: ['মেয়াদসহ মূল পাসপোর্ট', 'ছুটির লেটার (NOC) ও ভ্রমণ পরিকল্পনা', 'ব্যক্তিগত বা বাণিজ্যিক ব্যাংক হিসাব', 'ভিসা ফি পেমেন্ট স্লিপ কনফার্মেশন']
    }
  ];

  const regions = ['All', 'Middle East', 'Southeast Asia', 'Europe', 'North America & Oceania'];

  const filteredCountries = regionFilter === 'All'
    ? countriesList
    : countriesList.filter(c => c.region === regionFilter);

  const selectedCountry = countriesList.find(c => c.id === selectedCountryId) || countriesList[0];

  const handleCountryInquiry = (countryName: string, flag: string) => {
    // Fill contact form
    const mapSelect = document.getElementById('contact-service-select') as HTMLSelectElement;
    if (mapSelect) {
      mapSelect.value = t('services.manpower.title');
      const ev = new Event('change', { bubbles: true });
      mapSelect.dispatchEvent(ev);
    }
    const msgBox = document.getElementById('contact-message-area') as HTMLTextAreaElement;
    if (msgBox) {
      msgBox.value = language === 'en'
        ? `Hello Natiapara Air Travels! I am inquiring about flights, tickets, or visa documentation criteria for ${countryName} ${flag}. Please send me the detailed fee layout of documents required.`
        : `আসসালামু আলাইকুম নাটিয়াপাড়া এয়ার ট্রাভেলস! আমি ${language === 'en' ? countryName : (selectedCountry.nameBn)} ${flag} এর ফ্লাইট শিডিউল এবং ভিসা প্রসেসের জন্য প্রয়োজনীয় কাগজপত্রের বিষয়ে জানতে চাচ্ছি। অনুগ্রহ করে বিস্তারিত ফি এবং নিয়মের তালিকাটি জানান।`;
      const ev = new Event('input', { bubbles: true });
      msgBox.dispatchEvent(ev);
    }
    const contactSec = document.getElementById('contact');
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getWhatsAppVisaLink = (countryName: string) => {
    const messageText = language === 'en'
      ? `Hello Natiapara Air Travels, I am interested in flight ticketing schedules and visa document consultation details for ${countryName}. Please discuss current processing periods and seat availability.`
      : `আসসালামু আলাইকুম নাটিয়াপাড়া এয়ার ট্রাভেলস! আমি ${selectedCountry.nameBn} এর ফ্লাইট টিকিট ও ওমরাহ/ভিসা কনসালটেন্সির প্রসেসিং সময় এবং টিকেটের ফি সম্পর্কে জানতে আগ্রহী। অনুগ্রহ করে সহযোগিতা করুন।`;
    return `https://wa.me/8801739284204?text=${encodeURIComponent(messageText)}`;
  };

  return (
    <section 
      id="countries" 
      className="py-24 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Visual map dashboard grid accents */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none select-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
          <circle cx="1000" cy="500" r="300" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 5" />
          <path d="M0 0 L1920 1080 M1920 0 L0 1080" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div id="countries-header" className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-bold tracking-widest text-blue-600 dark:text-sky-450 uppercase bg-blue-50 dark:bg-blue-950/40 px-3.5 py-1.5 rounded-full border border-blue-200/30 dark:border-blue-900/40"
          >
            {t('countries.badge')}
          </motion.span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white font-display">
            {t('countries.title')}
          </h2>
          
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            {t('countries.subtitle')}
          </p>
        </div>

        {/* Region Filter Sub-Navigation Slider Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-10 max-w-2xl mx-auto bg-slate-200/50 dark:bg-slate-900/60 p-1.5 rounded-2xl border border-slate-300/40 dark:border-slate-800/40 backdrop-blur-md">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => {
                setRegionFilter(region);
                // Auto switch selected country to first in filtered view to prevent mismatch
                const filtered = region === 'All' ? countriesList : countriesList.filter(c => c.region === region);
                if (filtered.length > 0) {
                  setSelectedCountryId(filtered[0].id);
                }
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                regionFilter === region
                  ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/15'
                  : 'text-slate-600 dark:text-slate-355 hover:bg-white dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {region === 'All' 
                ? (language === 'en' ? 'All Channels' : 'সব চ্যানেলসমূহ') 
                : (language === 'en' 
                    ? region 
                    : (region === 'Middle East' 
                        ? 'মধ্যপ্রাচ্য' 
                        : region === 'Southeast Asia' 
                          ? 'দক্ষিণ-পূর্ব এশিয়া' 
                          : region === 'Europe'
                            ? 'ইউরোপ'
                            : 'আমেরিকা ও ওশেনিয়া'))}
            </button>
          ))}
        </div>

        {/* Main Splitscreen Gateway Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* LEFT: Gateway Country List Terminal Selector */}
          <div className="lg:col-span-5 space-y-3 max-h-[560px] overflow-y-auto pr-2 custom-scrollbar">
            <AnimatePresence mode="popLayout">
              {filteredCountries.map((country) => {
                const isSelected = selectedCountryId === country.id;
                return (
                  <motion.div
                    key={country.id}
                    layoutId={`country-item-${country.id}`}
                    whileHover={{ x: 4 }}
                    onClick={() => setSelectedCountryId(country.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between group relative overflow-hidden ${
                      isSelected 
                        ? 'bg-white dark:bg-slate-900 border-blue-500 dark:border-sky-400 shadow-xl shadow-black/5 dark:shadow-sky-404/5' 
                        : 'bg-white/50 dark:bg-slate-900/30 border-slate-200 dark:border-slate-850 hover:bg-white dark:hover:bg-slate-900/55'
                    }`}
                  >
                    {/* Selected state bar */}
                    {isSelected && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 dark:bg-sky-450" />
                    )}

                    <div className="flex items-center gap-3 w-[70%]">
                      <span className="text-3xl filter drop-shadow select-none shrink-0 group-hover:scale-110 duration-200 transition-transform">
                        {country.flag}
                      </span>
                      <div className="truncate">
                        <span className="text-[10px] tracking-wide font-extrabold text-blue-600 dark:text-sky-400 block uppercase font-mono">
                          {country.code}
                        </span>
                        <h4 className="font-extrabold text-base sm:text-lg text-slate-800 dark:text-white leading-tight mt-0.5 truncate">
                          {language === 'en' ? country.nameEn : country.nameBn}
                        </h4>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-[10px] font-bold block uppercase text-slate-400 dark:text-slate-500">
                        {country.region}
                      </span>
                      <span className="inline-block mt-1 text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {language === 'en' ? country.categoryEn.split(' ')[0] : country.categoryBn.split(' ')[0]}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* RIGHT: Operational Board detailed display screen */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-3xl p-6 sm:p-8 shadow-2xl relative flex flex-col justify-between overflow-hidden">
            {/* Airport radar loop background ornament */}
            <div className="absolute -bottom-16 -right-16 text-slate-100 dark:text-slate-850 select-none pointer-events-none opacity-50">
              <Compass className="w-48 h-48 stroke-[1]" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCountry.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6 relative z-10 flex-grow"
              >
                {/* Header Flag + Hub detail */}
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 border-b border-slate-105 border-slate-100 dark:border-slate-800/80 pb-5">
                  <div className="flex items-center gap-3">
                    <span className="text-5xl select-none filter drop-shadow-md">
                      {selectedCountry.flag}
                    </span>
                    <div>
                      <span className="text-xs font-bold text-blue-600 dark:text-sky-400 tracking-widest uppercase font-mono block">
                        {selectedCountry.code} {language === 'en' ? 'Gateway Terminal' : 'গেটওয়ে টার্মিনাল'}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-display tracking-tight leading-none mt-0.5">
                        {language === 'en' ? selectedCountry.nameEn : selectedCountry.nameBn}
                      </h3>
                    </div>
                  </div>

                  <div className="sm:text-right">
                    <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider block font-mono">
                      {language === 'en' ? 'EMBASSY COMPLIANCE' : 'দূতাবাস অনুমোদন'}
                    </span>
                    <span className="inline-flex mt-1 text-xs font-black px-3 py-1 rounded-full bg-blue-50 dark:bg-sky-950/30 border border-blue-200/20 text-blue-700 dark:text-sky-300">
                      {language === 'en' ? selectedCountry.categoryEn : selectedCountry.categoryBn}
                    </span>
                  </div>
                </div>

                {/* Primary flight hub routes info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-950/40 rounded-2xl border border-slate-200/40 dark:border-slate-850">
                    <span className="text-[10px] font-extrabold tracking-widest text-slate-400 dark:text-slate-500 uppercase block font-mono">
                      {language === 'en' ? 'Destination Core Hub' : 'প্রধান আন্তর্জাতিক বিমানবন্দর'}
                    </span>
                    <p className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1 flex items-start gap-2">
                      <MapPin className="w-4.5 h-4.5 text-blue-600 dark:text-sky-400 shrink-0 mt-0.5" />
                      <span>{selectedCountry.hubAirport}</span>
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 dark:bg-slate-950/40 rounded-2xl border border-slate-200/40 dark:border-slate-850">
                    <span className="text-[10px] font-extrabold tracking-widest text-slate-400 dark:text-slate-500 uppercase block font-mono">
                      {language === 'en' ? 'Visa Channels Available' : 'বিদ্যমান ভিসা সুবিধাসমূহ'}
                    </span>
                    <p className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1 flex items-start gap-2">
                      <FileText className="w-4.5 h-4.5 text-blue-600 dark:text-sky-400 shrink-0 mt-0.5" />
                      <span>{language === 'en' ? selectedCountry.visaTypeEn : selectedCountry.visaTypeBn}</span>
                    </p>
                  </div>
                </div>

                {/* Timelines and Sucess indicators */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-50 dark:bg-amber-950/30 flex items-center justify-center text-amber-500 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 block font-mono leading-none">
                        {language === 'en' ? 'PROPOSED TIMELINE' : 'প্রয়োজনীয় সময়সীমা'}
                      </span>
                      <span className="text-sm font-extrabold text-slate-700 dark:text-slate-250">
                        {language === 'en' ? selectedCountry.processingTimeEn : selectedCountry.processingTimeBn}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center text-emerald-500 shrink-0">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <span className="text-[10px] font-bold text-slate-400 block font-mono leading-none">
                        {language === 'en' ? 'VISA SUCCESS RATE' : 'ভিসা সাফল্যের হার'}
                      </span>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-sm font-black text-slate-700 dark:text-slate-250">
                          {selectedCountry.successRate}%
                        </span>
                        {/* Interactive gauge bar */}
                        <div className="w-20 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${selectedCountry.successRate}%` }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Supported Airways and required checklist */}
                <div className="space-y-4 pt-2">
                  <div className="space-y-2">
                    <span className="text-xs font-black tracking-widest text-slate-400 block font-mono uppercase">
                      {language === 'en' ? 'Supported Embassy Checklist' : 'প্রয়োজনীয় কাগজপত্রের তালিকা'}
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-350">
                      {(language === 'en' ? selectedCountry.documentsEn : selectedCountry.documentsBn).map((doc, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                           <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Registered partner carriers */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-extrabold tracking-widest text-slate-400 block font-mono uppercase">
                      {language === 'en' ? 'Authorized Cargo & Passenger Air carriers' : 'অনুমোদিত এয়ারলাইন্স ও ক্যারিয়ার সমূহ'}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCountry.airlines.map((airline) => (
                        <span 
                          key={airline} 
                          className="bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800/40 text-[10px] font-extrabold font-mono px-2.5 py-1 rounded"
                        >
                          ✈ {airline}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

            {/* Micro booking buttons on board footer - COOL STYLE requested! */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-6 border-t border-slate-100 dark:border-slate-800/80 mt-6 shrink-0 relative z-10">
              
              <motion.a
                whileHover={{ y: -3, scale: 1.02, boxShadow: '0 10px 20px -4px rgba(37, 99, 235, 0.4)' }}
                whileTap={{ scale: 0.98 }}
                id="country-action-whatsapp"
                href={getWhatsAppVisaLink(selectedCountry.nameEn)}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-extrabold text-white bg-blue-600 hover:bg-blue-500 transition-all cursor-pointer shadow-lg shadow-blue-500/10 duration-150"
              >
                <WhatsAppIcon className="w-4.5 h-4.5 fill-white" />
                <span>{language === 'en' ? 'WhatsApp Consult' : 'হোয়াটসঅ্যাপ মেসেজ'}</span>
              </motion.a>

              <motion.button
                whileHover={{ y: -3, scale: 1.02, backgroundColor: 'rgba(51, 65, 85, 0.05)' }}
                whileTap={{ scale: 0.98 }}
                id="country-action-form"
                onClick={() => handleCountryInquiry(selectedCountry.nameEn, selectedCountry.flag)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl text-xs font-extrabold border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 transition-all cursor-pointer duration-150"
              >
                <span>{language === 'en' ? 'Prefill Form' : 'ফর্ম পূরণ করুন'}</span>
                <ExternalLink className="w-3.5 h-3.5 text-blue-500" />
              </motion.button>

            </div>

          </div>

        </div>

        {/* Dynamic support bottom text */}
        <div className="text-center mt-12 text-xs text-slate-400 dark:text-slate-500 flex flex-wrap items-center justify-center gap-1">
          <span>{language === 'en' ? 'Need consultation on any other country?' : 'তালিকায় আপনার পছন্দের দেশটি খুঁজে পাচ্ছেন না?'}</span>
          <button
            id="countries-ask-custom-bottom"
            onClick={() => {
              const msgBox = document.getElementById('contact-message-area') as HTMLTextAreaElement;
              if (msgBox) {
                msgBox.value = language === 'en' 
                  ? "Hello Natiapara Air Travels! I need custom visa processing or ticketing guidance for a country that is not currently displayed on your active board list."
                  : "আসসালামু আলাইকুম নাটিয়াপাড়া এয়ার ট্রাভেলস! আমি এমন একটি দেশের এয়ার টিকিট ও ওমরাহ/ভিসা প্রসেসিং সংক্রান্ত তথ্য পেতে চাচ্ছি যা তালিকায় উল্লেখ নেই। অনুগ্রহ করে যোগাযোগ করে সাহায্য করুন।";
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
            {language === 'en' ? 'Submit a custom consulting request \u2192' : 'কাস্টম কনসালটেন্সি রিকোয়েস্ট পাঠান \u2192'}
          </button>
        </div>

      </div>
    </section>
  );
};

export default Countries;

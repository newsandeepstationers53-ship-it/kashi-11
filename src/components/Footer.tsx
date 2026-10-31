import React from 'react';
import { Phone, MessageSquare, MapPin, Clock } from 'lucide-react';
import { SHOP_INFO } from '../data/repairData.ts';

interface FooterProps {
  language: 'en' | 'hi';
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const isHi = language === 'hi';

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs pt-16 pb-24 sm:pb-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand & Mission */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 font-bold flex items-center justify-center text-base">
                K
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                {isHi ? 'काशी कंप्यूटर एवं मोबाइल' : 'Kashi Computer & Mobile'}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {isHi 
                ? 'शुक्ला कॉम्प्लेक्स, राजघाट, रायबरेली में कंप्यूटर, लैपटॉप और स्मार्टफोन रिपेयरिंग का प्रमुख तकनीकी केंद्र।' 
                : 'Premier chip-level motherboard and display replacement center at Shukla Complex, Rajghat, Raebareli.'}
            </p>
            <div className="pt-2 text-slate-300">
              <span className="block text-slate-500 text-[11px] uppercase tracking-wider">{isHi ? 'हेल्पलाइन नंबर' : 'Direct Helpline'}</span>
              <a href={SHOP_INFO.phoneTel} className="text-amber-400 font-mono font-bold text-base hover:underline">
                7398396002
              </a>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              {isHi ? 'मुख्य सेवाएं' : 'Key Repair Solutions'}
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">{isHi ? 'मोबाइल स्क्रीन व फोल्डर रिप्लेसमेंट' : 'Smartphone Screen Replacement'}</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">{isHi ? 'लैपटॉप मदरबोर्ड चिप-लेवल रिपेयर' : 'Laptop Motherboard IC Repair'}</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">{isHi ? 'सुपरफास्ट SSD व RAM अपग्रेड' : 'SSD & RAM Performance Boost'}</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">{isHi ? 'पानी में गिरे फोन की सफाई' : 'Water Damage Ultrasonic Revival'}</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">{isHi ? 'टूटा लैपटॉप हिंज व बॉडी फिक्स' : 'Broken Laptop Hinge Fabrication'}</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">{isHi ? 'टोनर कार्ट्रिज रिफिलिंग व CCTV' : 'Printer Toner Refill & CCTV'}</a></li>
            </ul>
          </div>

          {/* Navigation Mirrors */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              {isHi ? 'त्वरित नेविगेशन' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="#estimator" className="hover:text-amber-400 transition-colors">{isHi ? 'खर्च का ऑनलाइन अनुमान' : 'Instant Repair Calculator'}</a></li>
              <li><a href="#tracker" className="hover:text-amber-400 transition-colors">{isHi ? 'जॉब शीट ट्रैक करें' : 'Track Repair Job Sheet'}</a></li>
              <li><a href="#diagnostic" className="hover:text-amber-400 transition-colors">{isHi ? 'स्मार्ट डिवाइस डायग्नोस्टिक' : 'Symptom Troubleshooter'}</a></li>
              <li><a href="#location" className="hover:text-amber-400 transition-colors">{isHi ? 'दुकान का नक्शा व पता' : 'Workshop Map & Address'}</a></li>
            </ul>
          </div>

          {/* Shop Hours & Location Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
              {isHi ? 'दुकान की लोकेशन' : 'Workshop Location'}
            </h4>
            <div className="flex items-start gap-2 text-slate-400">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{isHi ? SHOP_INFO.addressHi : SHOP_INFO.address}</span>
            </div>
            <div className="flex items-start gap-2 text-slate-400">
              <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{isHi ? SHOP_INFO.openingHoursHi : SHOP_INFO.openingHours}</span>
            </div>
            <div className="pt-2">
              <a
                href={SHOP_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold"
              >
                <span>{isHi ? 'गूगल मैप्स में खोलें →' : 'Open in Google Maps →'}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Quiet Bottom Copyright Line (No ornamental engines, tickers, or slop) */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Kashi Computer and Mobile Repairing. All rights reserved. Shukla Complex, Rajghat, Raebareli.
          </div>
          <div className="flex items-center gap-4">
            <span>Phone: 7398396002</span>
            <span>·</span>
            <span>Raebareli, Uttar Pradesh</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X, Globe } from 'lucide-react';
import { SHOP_INFO } from '../data/repairData.ts';

interface NavbarProps {
  language: 'en' | 'hi';
  setLanguage: (lang: 'en' | 'hi') => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ language, setLanguage, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHi = language === 'hi';

  const navLinks = [
    { label: isHi ? 'सेवाएं' : 'Services', href: '#services' },
    { label: isHi ? 'खर्च अनुमान' : 'Price Estimator', href: '#estimator' },
    { label: isHi ? 'स्टेटस ट्रैक करें' : 'Track Repair', href: '#tracker' },
    { label: isHi ? 'डायग्नोस्टिक' : 'Diagnostic', href: '#diagnostic' },
    { label: isHi ? 'दुकान का पता' : 'Location & Contact', href: '#location' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top Notification Bar for location and contact reminder */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="truncate">
            <span className="text-amber-400 font-medium">
              {isHi ? '📍 शुक्ला कॉम्प्लेक्स, राजघाट, रायबरेली' : '📍 Shukla Complex, Rajghat, Raebareli'}
            </span>
            <span className="hidden sm:inline text-slate-400 ml-2">
              · {isHi ? 'सोम-शनि: 9:30 AM - 8:30 PM' : 'Mon-Sat: 9:30 AM - 8:30 PM'}
            </span>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <a
              href={SHOP_INFO.whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="font-mono text-xs">WhatsApp</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={SHOP_INFO.phoneTel}
              className="text-amber-400 hover:text-amber-300 font-mono font-semibold"
            >
              7398396002
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: Zone 1 (Wordmark) - Zone 2 (Nav Links) - Zone 3 (Primary Action) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Wordmark */}
        <a href="#" className="flex items-center gap-2 shrink-0 group">
          <div className="w-9 h-9 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
            K
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap">
              {isHi ? 'काशी कंप्यूटर & मोबाइल' : 'Kashi Computer & Mobile'}
            </span>
            <span className="text-[11px] text-slate-500 hidden sm:block">
              {isHi ? 'राजघाट, रायबरेली' : 'Rajghat, Raebareli'}
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-amber-700 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Language Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-900 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            title="Switch Language / भाषा बदलें"
          >
            <Globe className="w-3.5 h-3.5 text-slate-500" />
            <span className="font-semibold">{language === 'en' ? 'हिन्दी' : 'English'}</span>
          </button>

          {/* Direct Call Button */}
          <a
            href={SHOP_INFO.phoneTel}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-xs whitespace-nowrap shrink-0"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>{isHi ? 'कॉल करें: 7398396002' : 'Call: 7398396002'}</span>
          </a>

          {/* Book / Request button */}
          <button
            onClick={onOpenBooking}
            className="px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            {isHi ? 'रिपेयर बुक करें' : 'Book Repair'}
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-amber-50 hover:text-amber-800 rounded-md"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={SHOP_INFO.phoneTel}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-slate-900 bg-amber-400 rounded-lg"
            >
              <Phone className="w-4 h-4" />
              <span>{isHi ? 'कॉल करें 7398396002' : 'Call 7398396002'}</span>
            </a>
            <a
              href={SHOP_INFO.whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-white bg-emerald-600 rounded-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{isHi ? 'व्हाट्सएप चैट' : 'Chat on WhatsApp'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

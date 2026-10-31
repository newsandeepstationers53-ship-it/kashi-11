import React from 'react';
import { Phone, MessageSquare, Wrench, ShieldCheck, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { SHOP_INFO } from '../data/repairData.ts';

interface HeroProps {
  language: 'en' | 'hi';
  onScrollToEstimator: () => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onScrollToEstimator, onOpenBooking }) => {
  const isHi = language === 'hi';

  return (
    <section className="relative overflow-hidden bg-slate-900 text-white pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Subtle decorative grid background */}
      <div 
        className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Unboxed Metadata Trust Line (Zero-Pill Discipline) */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-amber-400">
              <span>{isHi ? 'शुक्ला कॉम्प्लेक्स, राजघाट, रायबरेली' : 'Shukla Complex, Rajghat, Raebareli'}</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span>{isHi ? '45 मिनट में स्क्रीन रिप्लेसमेंट' : '45-Min Express Screen Fix'}</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span>{isHi ? '90 दिनों की वारंटी' : '90-Day Warranty'}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight" style={{ textWrap: 'balance' }}>
              {isHi ? (
                <>
                  कंप्यूटर, लैपटॉप एवं मोबाइल की <span className="text-amber-400">चिप-लेवल रिपेयरिंग</span> दुकान
                </>
              ) : (
                <>
                  Fast & Trusted <span className="text-amber-400">Computer & Smartphone</span> Repair in Raebareli
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {isHi ? (
                <>
                  क्या आपका स्मार्टफोन टूट गया है या लैपटॉप ऑन नहीं हो रहा? काशी कंप्यूटर पर पाएं ओरिजिनल डिस्प्ले, मदरबोर्ड आईसी रिपेयर, डेड फोन चालू करना, तेज SSD अपग्रेड और डेटा रिकवरी — सीधे राजघाट, रायबरेली में।
                </>
              ) : (
                <>
                  Broken display, dead motherboard, water damage, or slow booting laptop? We repair all smartphones, MacBooks, and PCs with genuine spare parts, transparent pricing, and up to 90 days warranty.
                </>
              )}
            </p>

            {/* Key Advantages Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{isHi ? 'फ्री डायग्नोस्टिक: नो फिक्स, नो फीस' : 'Free Diagnosis: No Fix, No Fee'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{isHi ? 'सैमसंग, एप्पल, वीवो, रियलमी, शाओमी' : 'All Brands: Apple, Samsung, Xiaomi, Vivo'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{isHi ? 'HP, डेल, लेनोवो लैपटॉप मदरबोर्ड स्पेशलिस्ट' : 'Dell, HP, Lenovo Laptop Motherboard Lab'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{isHi ? 'डेटा की 100% सुरक्षा एवं गोपनीयता' : '100% Data Confidentiality & Safety'}</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href={SHOP_INFO.phoneTel}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-md whitespace-nowrap"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>{isHi ? 'तुरंत कॉल करें: 7398396002' : 'Call Now: 7398396002'}</span>
              </a>

              <a
                href={SHOP_INFO.whatsappUrl('Hello Kashi Computer, I need repair service for my device. Please share details.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors shadow-sm whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{isHi ? 'व्हाट्सएप पर पूछें' : 'Chat on WhatsApp'}</span>
              </a>

              <button
                onClick={onScrollToEstimator}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors whitespace-nowrap"
              >
                <Wrench className="w-4 h-4 text-amber-400" />
                <span>{isHi ? 'खर्च का अनुमान लगाएं' : 'Instant Cost Calculator'}</span>
              </button>
            </div>

            {/* Location Address Anchor */}
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                {isHi 
                  ? 'पता: शुक्ला कॉम्प्लेक्स, राजघाट, रायबरेली (फोन: 7398396002)' 
                  : 'Address: Shukla Complex, Rajghat, Raebareli, UP (Phone: 7398396002)'}
              </span>
            </div>

          </div>

          {/* Right Column: High-Impact Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-800">
              <img
                src="/src/assets/images/hero_repair_lab_1793450699056.jpg"
                alt="Kashi Computer and Mobile Repairing Workshop Bench"
                className="w-full h-80 sm:h-96 lg:h-[420px] object-cover"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Overlay card for immediate credibility */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-xl p-3.5 text-xs text-slate-200 flex items-center justify-between gap-4">
                <div>
                  <p className="font-semibold text-white">
                    {isHi ? 'काशी कंप्यूटर रिपेयरिंग लैब' : 'Kashi Computer & Mobile Lab'}
                  </p>
                  <p className="text-slate-400">
                    {isHi ? 'राजघाट, रायबरेली · ऑन-द-स्पॉट रिपेयर' : 'Rajghat, Raebareli · On-the-spot repair'}
                  </p>
                </div>
                <button
                  onClick={onOpenBooking}
                  className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs transition-colors shrink-0"
                >
                  {isHi ? 'जॉब बुक करें' : 'Book Repair'}
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column Proof & Metric Strip below Hero Split */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-amber-400">
              <Clock className="w-4 h-4" />
              <span className="text-2xl font-bold font-mono tabular-nums text-white">45 Mins</span>
            </div>
            <p className="text-xs text-slate-400">
              {isHi ? 'अधिकतर स्क्रीन व बैटरी रिप्लेसमेंट' : 'Express screen & battery replacements'}
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-amber-400">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-2xl font-bold font-mono tabular-nums text-white">90 Days</span>
            </div>
            <p className="text-xs text-slate-400">
              {isHi ? 'पार्ट्स व सर्विस पर गारंटी' : 'Service & replaced parts warranty'}
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-amber-400">
              <Wrench className="w-4 h-4" />
              <span className="text-2xl font-bold font-mono tabular-nums text-white">10,000+</span>
            </div>
            <p className="text-xs text-slate-400">
              {isHi ? 'रायबरेली में सफलतापूर्वक ठीक किए गए उपकरण' : 'Devices repaired successfully in Raebareli'}
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-amber-400">
              <MapPin className="w-4 h-4" />
              <span className="text-2xl font-bold text-white">Rajghat</span>
            </div>
            <p className="text-xs text-slate-400">
              {isHi ? 'शुक्ला कॉम्प्लेक्स, सेंट्रल रायबरेली' : 'Shukla Complex, Central Raebareli'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

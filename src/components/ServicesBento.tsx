import React, { useState } from 'react';
import { 
  Smartphone, 
  Laptop, 
  Cpu, 
  HardDrive, 
  BatteryCharging, 
  Flame, 
  ShieldCheck, 
  Clock, 
  ArrowRight,
  Sparkles,
  Printer
} from 'lucide-react';
import { SERVICES_LIST, ServiceItem, SHOP_INFO } from '../data/repairData.ts';

interface ServicesBentoProps {
  language: 'en' | 'hi';
  onBookService: (serviceTitle: string) => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ language, onBookService }) => {
  const isHi = language === 'hi';
  const [filter, setFilter] = useState<'all' | 'mobile' | 'laptop' | 'software' | 'peripherals'>('all');

  const filteredServices = filter === 'all' 
    ? SERVICES_LIST 
    : SERVICES_LIST.filter(s => s.category === filter);

  const filterTabs = [
    { id: 'all', label: isHi ? 'सभी सेवाएं' : 'All Services' },
    { id: 'mobile', label: isHi ? 'मोबाइल फोन' : 'Mobile Phone' },
    { id: 'laptop', label: isHi ? 'लैपटॉप व कंप्यूटर' : 'Laptop & PC' },
    { id: 'software', label: isHi ? 'सॉफ्टवेयर व OS' : 'Software & OS' },
    { id: 'peripherals', label: isHi ? 'प्रिंटर व CCTV' : 'Printers & CCTV' },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-2">
              {isHi ? 'हमारी विशेषज्ञ सेवाएं' : 'Specialized Engineering Capabilities'}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
              {isHi 
                ? 'कंप्यूटर और स्मार्टफोन रिपेयरिंग के संपूर्ण समाधान' 
                : 'Complete Computer & Smartphone Repair Services in Raebareli'}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              {isHi
                ? 'शुक्ला कॉम्प्लेक्स, राजघाट पर आधुनिक माइक्रोस्कोप सोल्डरिंग व ओरिजिनल कंपोनेंट्स के साथ विश्वसनीय काम।'
                : 'Advanced chip-level diagnostic stations and genuine OEM spares for all brands under one roof at Shukla Complex, Rajghat.'}
            </p>
          </div>

          {/* Interactive Category Filter Tabs (Zero-Pill: segmented controls with functional button handlers) */}
          <div className="flex items-center gap-1 p-1 bg-slate-200/80 rounded-xl overflow-x-auto shrink-0">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  filter === tab.id
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Visual Spotlight (Two Key Photos) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: Mobile Screen Lab Spotlight */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs flex flex-col md:flex-row items-stretch">
            <div className="md:w-1/2 relative bg-slate-100 min-h-[220px]">
              <img
                src="/src/assets/images/mobile_screen_repair_1793450699098.jpg"
                alt="Smartphone Screen Replacement Lab"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="p-6 md:w-1/2 flex flex-col justify-between space-y-4">
              <div>
                <div className="text-xs font-medium text-slate-500 mb-1">
                  <span>{isHi ? 'मोबाइल लैब' : 'Mobile Lab'}</span>
                  <span aria-hidden="true" className="mx-1">·</span>
                  <span>{isHi ? '45 मिनट एक्सप्रेस' : '45-Min Express'}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {isHi ? 'ओरिजिनल OLED/AMOLED स्क्रीन फिटिंग' : 'OEM Smartphone Display Replacement'}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {isHi 
                    ? 'सैमसंग, आईफोन, वनप्लस, वीवो, रियलमी और शाओमी के ओरिजिनल एवं हाई-क्वालिटी फोल्डर 100% टच कैलिब्रेशन के साथ।' 
                    : 'Precision laser separation, bezel re-alignment, and touch testing for iPhone, Samsung, OnePlus, Vivo, and Redmi.'}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 block">{isHi ? 'शुरुआती कीमत' : 'Starts at'}</span>
                  <span className="text-base font-bold text-slate-900 font-mono">₹899</span>
                </div>
                <button
                  onClick={() => onBookService('Screen Replacement')}
                  className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{isHi ? 'स्क्रीन बदलवाएं' : 'Book Screen Fix'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Laptop Chip-Level Motherboard Spotlight */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs flex flex-col md:flex-row items-stretch">
            <div className="md:w-1/2 relative bg-slate-100 min-h-[220px]">
              <img
                src="/src/assets/images/laptop_motherboard_fix_1793450699577.jpg"
                alt="Laptop Motherboard Chip Repair"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="p-6 md:w-1/2 flex flex-col justify-between space-y-4">
              <div>
                <div className="text-xs font-medium text-slate-500 mb-1">
                  <span>{isHi ? 'चिप-लेवल हार्डवेयर' : 'Chip-Level Lab'}</span>
                  <span aria-hidden="true" className="mx-1">·</span>
                  <span>{isHi ? 'डेड लैपटॉप समाधान' : 'Dead PC Revival'}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {isHi ? 'लैपटॉप मदरबोर्ड एवं शॉर्ट-सर्किट रिपेयर' : 'Motherboard IC & BGA Micro-Soldering'}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {isHi 
                    ? 'डेड लैपटॉप, नो पावर, चार्जिंग IC फॉल्ट और वाटर डैमेज बोर्ड को बिना पूरा मदरबोर्ड बदले चिप लेवल पर ठीक करें।' 
                    : 'Multimeter trace probing, power MOSFET replacements, charging IC repairs, and BIOS chip flashing.'}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 block">{isHi ? 'शुरुआती कीमत' : 'Starts at'}</span>
                  <span className="text-base font-bold text-slate-900 font-mono">₹650</span>
                </div>
                <button
                  onClick={() => onBookService('Laptop Motherboard Repair')}
                  className="px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-lg transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{isHi ? 'लैपटॉप रिपेयर कराएं' : 'Book Motherboard'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic Bento Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const isMarquee = index === 0 || index === 3;

            return (
              <div
                key={service.id}
                className={`bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between transition-all hover:border-slate-300 hover:shadow-sm ${
                  isMarquee ? 'lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Clean unboxed category metadata with separator */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <span className="capitalize">{service.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-600" />
                      {isHi ? service.typicalTimeHi : service.typicalTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {isHi ? service.titleHi : service.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {isHi ? service.descriptionHi : service.description}
                  </p>

                  {/* Bullet features */}
                  <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
                    {(isHi ? service.featuresHi : service.features).map((feat, fidx) => (
                      <li key={fidx} className="flex items-start gap-1.5">
                        <span className="text-amber-500 font-bold">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] text-slate-400 block">
                      {isHi ? 'शुरुआती दर' : 'From'}
                    </span>
                    <span className="text-sm font-mono font-bold text-slate-900">
                      ₹{service.startingPrice.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={SHOP_INFO.whatsappUrl(`Hello Kashi Computer, I want to book: ${service.title}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 text-xs text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors font-medium"
                    >
                      WhatsApp
                    </a>
                    <button
                      onClick={() => onBookService(service.title)}
                      className="px-3 py-1 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors"
                    >
                      {isHi ? 'बुक करें' : 'Book'}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

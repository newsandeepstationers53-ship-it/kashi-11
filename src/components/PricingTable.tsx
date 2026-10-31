import React from 'react';
import { Tag, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';
import { SHOP_INFO } from '../data/repairData.ts';

interface PricingTableProps {
  language: 'en' | 'hi';
  onBookItem: (title: string) => void;
}

export const PricingTable: React.FC<PricingTableProps> = ({ language, onBookItem }) => {
  const isHi = language === 'hi';

  const priceRows = [
    {
      category: isHi ? 'मोबाइल' : 'Mobile',
      service: isHi ? 'ओरिजिनल/प्रीमियम फोल्डर स्क्रीन फिटिंग' : 'Smartphone Screen / Display Replacement',
      price: '₹899 – ₹2,800',
      time: '45 Mins',
      warranty: '60 - 90 Days'
    },
    {
      category: isHi ? 'मोबाइल' : 'Mobile',
      service: isHi ? 'बैटरी रिप्लेसमेंट (ओरिजिनल बैकअप)' : 'Smartphone Battery Replacement (Original Capacity)',
      price: '₹450 – ₹1,200',
      time: '30 Mins',
      warranty: '90 Days'
    },
    {
      category: isHi ? 'मोबाइल' : 'Mobile',
      service: isHi ? 'टाइप-सी / माइक्रो USB चार्जिंग जैक रिपेयर' : 'Type-C / Lightning Charging Jack & Port Fix',
      price: '₹250 – ₹650',
      time: '30 Mins',
      warranty: '30 Days'
    },
    {
      category: isHi ? 'मोबाइल' : 'Mobile',
      service: isHi ? 'पानी में गिरे फोन की अल्ट्रासोनिक केमिकल क्लीनिंग' : 'Water Damage Ultrasonic Chemical Revival',
      price: '₹499 – ₹1,200',
      time: '2 - 3 Hours',
      warranty: 'Service Warranty'
    },
    {
      category: isHi ? 'लैपटॉप' : 'Laptop',
      service: isHi ? 'सुपरफास्ट SSD 256GB / 512GB + विंडोज सेटअप' : 'NVMe/SATA SSD High-Speed Upgrade + OS Cloning',
      price: '₹1,250 – ₹2,800',
      time: '60 Mins',
      warranty: '3 - 5 Years'
    },
    {
      category: isHi ? 'लैपटॉप' : 'Laptop',
      service: isHi ? 'लैपटॉप मदरबोर्ड चिप-लेवल शॉर्ट सर्किट रिपेयर' : 'Motherboard Power IC & Dead Short Circuit Fix',
      price: '₹650 – ₹2,400',
      time: '2 - 4 Hours',
      warranty: '60 Days'
    },
    {
      category: isHi ? 'लैपटॉप' : 'Laptop',
      service: isHi ? 'टूटा हुआ स्क्रीन हिंज व बॉडी फैब्रिकेशन' : 'Broken Hinge & Plastic Casing Metal Binding',
      price: '₹400 – ₹950',
      time: '2 Hours',
      warranty: 'Lifetime Joint'
    },
    {
      category: isHi ? 'लैपटॉप' : 'Laptop',
      service: isHi ? 'थर्मल पेस्टिंग एवं फैन कूलिंग सर्विस' : 'Thermal Repasting & Heatsink Fan Cleaning',
      price: '₹350 – ₹550',
      time: '45 Mins',
      warranty: 'Cooling Guarantee'
    },
    {
      category: isHi ? 'सॉफ्टवेयर' : 'Software',
      service: isHi ? 'विंडोज 11/10 इंस्टॉलेशन + ओरिजिनल ड्राइवर्स' : 'Windows 11 / 10 Clean Install + All Drivers & Office',
      price: '₹300 – ₹500',
      time: '45 Mins',
      warranty: 'Activation Support'
    },
    {
      category: isHi ? 'प्रिंटर' : 'Printer',
      service: isHi ? 'लेजरजेट टोनर कार्ट्रिज रिफिलिंग (डार्क प्रिंट)' : 'LaserJet Toner Refill (High Page Yield)',
      price: '₹250 – ₹450',
      time: '20 Mins',
      warranty: 'Page Guarantee'
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
            <Tag className="w-4 h-4" />
            <span>{isHi ? 'स्पष्ट एवं प्रामाणिक दरें' : 'Fair & Transparent Pricing'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            {isHi ? 'मुख्य रिपेयरिंग सेवाओं की मूल्य तालिका' : 'Standard Repair Rates & Warranty Schedule'}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            {isHi 
              ? 'सभी दरों में कंपोनेंट्स की टेस्टिंग व पेशेवर कारीगरी शामिल है। कोई गुप्त शुल्क नहीं।' 
              : 'All charges include testing and warranty coverage. Exact quote confirmed upfront before opening the device.'}
          </p>
        </div>

        {/* Pricing Table Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-900 text-white text-xs font-bold uppercase tracking-wider">
                  <th className="py-3.5 px-4 sm:px-6">{isHi ? 'श्रेणी' : 'Category'}</th>
                  <th className="py-3.5 px-4 sm:px-6">{isHi ? 'रिपेयर सेवा' : 'Service Description'}</th>
                  <th className="py-3.5 px-4 sm:px-6">{isHi ? 'अनुमानित दर' : 'Price (INR)'}</th>
                  <th className="py-3.5 px-4 sm:px-6">{isHi ? 'समय' : 'Turnaround'}</th>
                  <th className="py-3.5 px-4 sm:px-6">{isHi ? 'वारंटी' : 'Warranty'}</th>
                  <th className="py-3.5 px-4 sm:px-6 text-right">{isHi ? 'एक्शन' : 'Action'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {priceRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-amber-50/40 transition-colors">
                    <td className="py-3 px-4 sm:px-6 font-semibold text-slate-700 whitespace-nowrap">
                      {row.category}
                    </td>
                    <td className="py-3 px-4 sm:px-6 font-medium text-slate-900">
                      {row.service}
                    </td>
                    <td className="py-3 px-4 sm:px-6 font-mono font-bold text-amber-700 tabular-nums whitespace-nowrap">
                      {row.price}
                    </td>
                    <td className="py-3 px-4 sm:px-6 text-slate-600 whitespace-nowrap font-mono">
                      {row.time}
                    </td>
                    <td className="py-3 px-4 sm:px-6 text-emerald-700 font-semibold whitespace-nowrap">
                      {row.warranty}
                    </td>
                    <td className="py-3 px-4 sm:px-6 text-right whitespace-nowrap">
                      <button
                        onClick={() => onBookItem(row.service)}
                        className="px-3 py-1 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors"
                      >
                        {isHi ? 'बुक करें' : 'Select'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Bottom Guarantee Note */}
          <div className="bg-slate-100 p-4 border-t border-slate-200 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                {isHi 
                  ? 'निःशुल्क प्रारंभिक जांच: यदि आपकी समस्या हल नहीं होती, तो हम कोई शुल्क नहीं लेते।' 
                  : 'Free Initial Inspection: No Fix, No Fee. If we cannot repair your unit, you pay ₹0.'}
              </span>
            </div>
            <a
              href={SHOP_INFO.phoneTel}
              className="text-amber-800 font-bold hover:underline"
            >
              {isHi ? 'सटीक मॉडल के लिए कॉल करें: 7398396002' : 'Call 7398396002 for exact model quote'}
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

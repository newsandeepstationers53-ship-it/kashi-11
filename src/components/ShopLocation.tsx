import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Clock, Navigation, CheckCircle2, Send, Mail } from 'lucide-react';
import { SHOP_INFO } from '../data/repairData.ts';

interface ShopLocationProps {
  language: 'en' | 'hi';
}

export const ShopLocation: React.FC<ShopLocationProps> = ({ language }) => {
  const isHi = language === 'hi';

  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryMsg, setInquiryMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryPhone.trim()) return;

    setSubmitted(true);
  };

  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-2">
            {isHi ? 'दुकान का पता व संपर्क' : 'Visit Our Workshop in Raebareli'}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            {isHi ? 'काशी कंप्यूटर एवं मोबाइल रिपेयरिंग सेंटर' : 'Find Us at Shukla Complex, Rajghat, Raebareli'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {isHi 
              ? 'राजघाट पुल के पास, शुक्ला कॉम्प्लेक्स में हमारी मुख्य वर्कशॉप स्थित है। तुरंत पहुंचें या फोन पर रास्ता पूछें।' 
              : 'Centrally situated in Shukla Complex, Rajghat. Easily accessible by e-rickshaw, bike, or car from any corner of Raebareli.'}
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (5 Cols): Info Cards & Quick Message */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Details Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-5">
              
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {isHi ? 'दुकान का पता' : 'Workshop Address'}
                  </h4>
                  <p className="text-sm font-semibold text-slate-900 mt-1 leading-snug">
                    {isHi ? SHOP_INFO.addressHi : SHOP_INFO.address}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {isHi ? 'प्रमुख पहचान: ' + SHOP_INFO.landmarkHi : 'Landmark: ' + SHOP_INFO.landmark}
                  </p>
                </div>
              </div>

              {/* Phone & Instant Contact */}
              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-200/80">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {isHi ? 'फोन नंबर (कॉल व सहायता)' : 'Phone & Hotline'}
                  </h4>
                  <a
                    href={SHOP_INFO.phoneTel}
                    className="text-lg font-bold font-mono text-amber-700 hover:text-amber-800 block mt-0.5"
                  >
                    {SHOP_INFO.phoneFormatted}
                  </a>
                  <p className="text-xs text-slate-500">
                    {isHi ? 'किसी भी तकनीकी सवाल के लिए कॉल करें' : 'Call anytime during store hours for quick support'}
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-200/80">
                <div className="w-9 h-9 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {isHi ? 'खुलने का समय' : 'Store Timings'}
                  </h4>
                  <p className="text-xs font-semibold text-slate-800 mt-1">
                    {isHi ? SHOP_INFO.openingHoursHi : SHOP_INFO.openingHours}
                  </p>
                  <span className="text-[11px] text-emerald-700 font-medium block mt-0.5">
                    {isHi ? '✓ सभी 7 दिन खुला है' : '✓ Open 7 Days a week'}
                  </span>
                </div>
              </div>

              {/* Navigation Action */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <a
                  href={SHOP_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl transition-colors shadow-xs"
                >
                  <Navigation className="w-4 h-4 text-amber-400" />
                  <span>{isHi ? 'गूगल मैप्स में रास्ता देखें' : 'Get Directions in Maps'}</span>
                </a>

                <a
                  href={SHOP_INFO.whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl transition-colors shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{isHi ? 'व्हाट्सएप चैट' : 'Chat WhatsApp'}</span>
                </a>
              </div>

            </div>

            {/* Quick Contact Inquiry Form */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
              <h4 className="text-sm font-bold text-slate-900 mb-1">
                {isHi ? 'सीधे संदेश या सवाल भेजें' : 'Send a Quick Message to Shop'}
              </h4>
              <p className="text-xs text-slate-500 mb-4">
                {isHi ? 'हम 15 मिनट के अंदर आपको फोन या व्हाट्सएप करेंगे।' : 'We will respond promptly on call or WhatsApp.'}
              </p>

              {submitted ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
                  <CheckCircle2 className="w-7 h-7 text-emerald-600 mx-auto" />
                  <p className="text-xs font-bold text-emerald-900">
                    {isHi ? 'संदेश प्राप्त हुआ!' : 'Message Received!'}
                  </p>
                  <p className="text-[11px] text-emerald-700">
                    {isHi 
                      ? 'काशी कंप्यूटर टीम जल्द ही आपसे 7398396002 से संपर्क करेगी।' 
                      : 'Kashi Computer team will contact you shortly.'}
                  </p>
                  <a
                    href={SHOP_INFO.whatsappUrl(`Hello Kashi Computer, my name is ${inquiryName} (${inquiryPhone}). I sent an inquiry: ${inquiryMsg}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs font-semibold text-emerald-800 underline"
                  >
                    {isHi ? 'व्हाट्सएप पर तुरंत चैट खोलें →' : 'Open in WhatsApp now →'}
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <input
                      type="text"
                      required
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      placeholder={isHi ? 'आपका नाम' : 'Your Name'}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value)}
                      placeholder={isHi ? '10-अंकों का मोबाइल नंबर' : '10-digit Phone Number'}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs font-mono focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  </div>

                  <div>
                    <textarea
                      rows={2}
                      required
                      value={inquiryMsg}
                      onChange={(e) => setInquiryMsg(e.target.value)}
                      placeholder={isHi ? 'आप क्या रिपेयर कराना चाहते हैं?' : 'Describe your device model and problem'}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5 text-amber-400" />
                    <span>{isHi ? 'संदेश भेजें' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Right Column (7 Cols): Map Visualization & Landmark Guides */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Map Frame */}
            <div className="bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden shadow-xs relative">
              <div className="h-80 sm:h-96 w-full relative">
                {/* Embedded OpenStreetMap / Google Maps iframe focused on Rajghat Raebareli */}
                <iframe
                  title="Kashi Computer Location Map"
                  src="https://maps.google.com/maps?q=Rajghat+Raebareli+Uttar+Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Map Footer Bar */}
              <div className="p-4 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs">
                <div>
                  <span className="font-bold text-slate-900 block">
                    {isHi ? 'शुक्ला कॉम्प्लेक्स, राजघाट' : 'Shukla Complex, Rajghat'}
                  </span>
                  <span className="text-slate-500">
                    {isHi ? 'रायबरेली, उत्तर प्रदेश - 229001' : 'Raebareli, UP - 229001'}
                  </span>
                </div>
                <a
                  href={SHOP_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg transition-colors inline-flex items-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{isHi ? 'नेविगेट करें' : 'Start Navigation'}</span>
                </a>
              </div>
            </div>

            {/* Landmark Guidance Box */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 text-xs text-slate-700 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm">
                {isHi ? 'पहुंचने के आसान रास्ते (Landmark Directions)' : 'How to Reach Shukla Complex, Rajghat:'}
              </h4>
              <ul className="space-y-1.5 pl-1">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold font-mono">1.</span>
                  <span>
                    {isHi 
                      ? 'सुपर मार्केट / डिग्री कॉलेज चौराहे से राजघाट की ओर आने वाले मार्ग पर।' 
                      : 'Coming from Super Market / Degree College चौराहा towards Rajghat main road.'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold font-mono">2.</span>
                  <span>
                    {isHi 
                      ? 'राजघाट पुल के निकट, शुक्ला कॉम्प्लेक्स के ग्राउंड फ्लोर पर काशी कंप्यूटर बोर्ड लगा हुआ है।' 
                      : 'Near Rajghat bridge, ground floor in Shukla Complex with clear Kashi Computer signboards.'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold font-mono">3.</span>
                  <span>
                    {isHi 
                      ? 'अगर रास्ता मिलने में कोई भी असुविधा हो, तो 7398396002 पर बेझिझक कॉल करें, हम तुरंत रिसीव करेंगे।' 
                      : 'If you have trouble finding the exact shop, simply call 7398396002 for immediate guidance.'}
                  </span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

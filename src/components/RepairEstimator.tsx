import React, { useState } from 'react';
import { Calculator, MessageSquare, Phone, CheckCircle, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { 
  ESTIMATOR_DEVICES, 
  ESTIMATOR_BRANDS, 
  ESTIMATOR_ISSUES, 
  SHOP_INFO 
} from '../data/repairData.ts';

interface RepairEstimatorProps {
  language: 'en' | 'hi';
  onBookWithEstimate: (details: { deviceType: string; brand: string; issue: string; estCost: number }) => void;
}

export const RepairEstimator: React.FC<RepairEstimatorProps> = ({ language, onBookWithEstimate }) => {
  const isHi = language === 'hi';

  const [selectedDevice, setSelectedDevice] = useState<string>('smartphone');
  const [selectedBrand, setSelectedBrand] = useState<string>('Samsung');
  const [selectedIssueId, setSelectedIssueId] = useState<string>('broken_screen');

  const availableBrands = ESTIMATOR_BRANDS[selectedDevice] || [];
  const availableIssues = ESTIMATOR_ISSUES[selectedDevice] || [];

  const currentIssue = availableIssues.find(i => i.id === selectedIssueId) || availableIssues[0];

  const handleDeviceChange = (devId: string) => {
    setSelectedDevice(devId);
    const brands = ESTIMATOR_BRANDS[devId] || [];
    if (brands.length > 0) setSelectedBrand(brands[0]);
    const issues = ESTIMATOR_ISSUES[devId] || [];
    if (issues.length > 0) setSelectedIssueId(issues[0].id);
  };

  const getWhatsAppMessage = () => {
    const devName = ESTIMATOR_DEVICES.find(d => d.id === selectedDevice)?.name || selectedDevice;
    const issueName = currentIssue ? currentIssue.label : 'Repair';
    return `Hello Kashi Computer, I checked your online calculator for:
Device: ${devName}
Brand: ${selectedBrand}
Issue: ${issueName}
Estimated Quote: ₹${currentIssue.minPrice} - ₹${currentIssue.maxPrice}
Address: Shukla Complex, Rajghat, Raebareli
Please let me know when I can bring my device!`;
  };

  return (
    <section id="estimator" className="py-16 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
            <Calculator className="w-4 h-4" />
            <span>{isHi ? 'पारदर्शी मूल्य कैलकुलेटर' : 'Transparent Cost Calculator'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            {isHi ? 'अपने उपकरण की रिपेयरिंग का अनुमानित खर्च जानें' : 'Instant Repair Cost & Time Estimator'}
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {isHi 
              ? 'बिना किसी छुपे हुए चार्ज के, पहले ही जानें कि आपकी स्क्रीन, बैटरी या मदरबोर्ड रिपेयर में कितना समय और खर्च लगेगा।' 
              : 'Select your device type, brand, and problem below to get an instant cost range, turnaround time, and warranty period.'}
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
            
            {/* Step 1: Device Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                1. {isHi ? 'उपकरण चुनें (Device Type)' : 'Select Device Type'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {ESTIMATOR_DEVICES.map((dev) => (
                  <button
                    key={dev.id}
                    onClick={() => handleDeviceChange(dev.id)}
                    className={`py-3 px-3 text-xs sm:text-sm font-semibold rounded-xl border transition-all text-center ${
                      selectedDevice === dev.id
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {isHi ? dev.nameHi : dev.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Brand Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                2. {isHi ? 'ब्रांड चुनें (Brand / Model)' : 'Select Device Brand'}
              </label>
              <div className="flex flex-wrap gap-2">
                {availableBrands.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => setSelectedBrand(brand)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                      selectedBrand === brand
                        ? 'bg-amber-500 text-slate-950 border-amber-500 font-semibold shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Issue Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                3. {isHi ? 'समस्या या खराबी चुनें (Select Issue)' : 'Select The Problem'}
              </label>
              <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                {availableIssues.map((issue) => (
                  <button
                    key={issue.id}
                    onClick={() => setSelectedIssueId(issue.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                      selectedIssueId === issue.id
                        ? 'bg-amber-50 border-amber-500 text-slate-950 shadow-xs'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="font-medium text-xs sm:text-sm">
                      {isHi ? issue.labelHi : issue.label}
                    </div>
                    <div className="text-xs font-mono font-bold text-slate-900 shrink-0 ml-3">
                      ₹{issue.minPrice.toLocaleString()} - ₹{issue.maxPrice.toLocaleString()}
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Result Card (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
            
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                {isHi ? 'अनुमानित सारांश' : 'Instant Quote Summary'}
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                {selectedBrand} {ESTIMATOR_DEVICES.find(d => d.id === selectedDevice)?.name.split('/')[0]}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {isHi ? currentIssue?.labelHi : currentIssue?.label}
              </p>
            </div>

            {/* Price Range Box */}
            <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/80">
              <span className="text-xs text-slate-400 block mb-1">
                {isHi ? 'अनुमानित रिपेयर खर्च (पार्ट्स + लेबर)' : 'Estimated Price Range (Parts + Labor)'}
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono tracking-tight">
                ₹{currentIssue?.minPrice.toLocaleString()} - ₹{currentIssue?.maxPrice.toLocaleString()}
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                {isHi 
                  ? '*वास्तविक खर्च सटीक मॉडल और ओरिजिनल डिस्प्ले वेरिएंट पर निर्भर करता है।' 
                  : '*Exact price depends on phone generation and original vs premium OLED tier.'}
              </p>
            </div>

            {/* Turnaround & Warranty */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-800">
                <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isHi ? 'रिपेयर समय' : 'Repair Time'}</span>
                </div>
                <div className="font-semibold text-white font-mono">
                  {currentIssue?.estTime}
                </div>
              </div>

              <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-800">
                <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isHi ? 'वारंटी' : 'Warranty'}</span>
                </div>
                <div className="font-semibold text-white font-mono">
                  {currentIssue?.warranty}
                </div>
              </div>
            </div>

            {/* Shop Guarantees */}
            <div className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{isHi ? 'फ्री डायग्नोस्टिक: अगर ठीक नहीं हुआ तो ₹0 फीस' : 'Free Diagnostic: No Fix, No Fee Guarantee'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{isHi ? 'आपकी आंखों के सामने रिपेयरिंग की सुविधा' : 'On-the-spot repair in front of you'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{isHi ? 'शुक्ला कॉम्प्लेक्स, राजघाट, रायबरेली' : 'Shukla Complex, Rajghat, Raebareli'}</span>
              </div>
            </div>

            {/* Direct Booking & WhatsApp Actions */}
            <div className="space-y-2 pt-2">
              <a
                href={SHOP_INFO.whatsappUrl(getWhatsAppMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{isHi ? 'यह कोटेशन व्हाट्सएप पर भेजें' : 'Send This Quote on WhatsApp'}</span>
              </a>

              <button
                onClick={() => {
                  onBookWithEstimate({
                    deviceType: selectedDevice,
                    brand: selectedBrand,
                    issue: currentIssue?.label || 'General Repair',
                    estCost: currentIssue?.minPrice || 500
                  });
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl transition-colors shadow-sm"
              >
                <span>{isHi ? 'ऑनलाइन रिपेयर टोकन बुक करें' : 'Book Online Repair Token'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center pt-1">
                <a
                  href={SHOP_INFO.phoneTel}
                  className="text-xs text-slate-400 hover:text-amber-400 transition-colors inline-flex items-center gap-1"
                >
                  <Phone className="w-3 h-3" />
                  <span>{isHi ? 'या सीधे कॉल करें: 7398396002' : 'Or Call Directly: 7398396002'}</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

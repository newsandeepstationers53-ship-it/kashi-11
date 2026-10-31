import React, { useState, useEffect } from 'react';
import { Search, CheckCircle2, Clock, AlertCircle, Phone, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { RepairJobTicket, INITIAL_TICKETS, SHOP_INFO } from '../data/repairData.ts';

interface JobTrackerProps {
  language: 'en' | 'hi';
  prefilledBooking?: {
    deviceType: string;
    brand: string;
    issue: string;
    estCost: number;
  } | null;
  onClearPrefilled?: () => void;
}

const STORAGE_KEY = 'kashi_repair_tickets';

export const JobTracker: React.FC<JobTrackerProps> = ({ 
  language, 
  prefilledBooking, 
  onClearPrefilled 
}) => {
  const isHi = language === 'hi';

  const [tickets, setTickets] = useState<RepairJobTicket[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return INITIAL_TICKETS;
  });

  const [activeTab, setActiveTab] = useState<'track' | 'book'>('track');
  const [searchQuery, setSearchQuery] = useState('KC-8921');
  const [activeTicket, setActiveTicket] = useState<RepairJobTicket | null>(null);
  const [searchError, setSearchError] = useState(false);

  // New Booking State
  const [custName, setCustName] = useState('');
  const [custPhone, setCustPhone] = useState('');
  const [deviceModel, setDeviceModel] = useState('');
  const [issueDesc, setIssueDesc] = useState('');
  const [bookedTicketId, setBookedTicketId] = useState<string | null>(null);

  // Sync prefilled booking if provided
  useEffect(() => {
    if (prefilledBooking) {
      setActiveTab('book');
      setDeviceModel(`${prefilledBooking.brand} (${prefilledBooking.deviceType})`);
      setIssueDesc(prefilledBooking.issue);
      if (onClearPrefilled) onClearPrefilled();
    }
  }, [prefilledBooking, onClearPrefilled]);

  // Initial search on mount
  useEffect(() => {
    handleSearch('KC-8921');
  }, []);

  const saveTickets = (updated: RepairJobTicket[]) => {
    setTickets(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleSearch = (queryOverride?: string) => {
    const q = (queryOverride !== undefined ? queryOverride : searchQuery).trim().toLowerCase();
    if (!q) return;

    const found = tickets.find(
      t => t.ticketId.toLowerCase() === q || t.phone.toLowerCase().includes(q)
    );

    if (found) {
      setActiveTicket(found);
      setSearchError(false);
    } else {
      setActiveTicket(null);
      setSearchError(true);
    }
  };

  const handleCreateBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!custName.trim() || !custPhone.trim() || !deviceModel.trim()) return;

    const randNum = Math.floor(1000 + Math.random() * 9000);
    const newId = `KC-${randNum}`;

    const newTicket: RepairJobTicket = {
      ticketId: newId,
      customerName: custName.trim(),
      phone: custPhone.trim(),
      device: deviceModel.trim(),
      issue: issueDesc.trim() || 'General diagnosis and service',
      status: 'received',
      statusLabel: 'Received & Logged',
      statusLabelHi: 'प्राप्त व पंजीकृत',
      dateReceived: new Date().toISOString().split('T')[0],
      estimatedDelivery: 'Same Day / Next Working Day',
      estimatedCost: 650,
      notes: 'Customer registered online token. Awaiting physical drop-off at Shukla Complex.'
    };

    const updated = [newTicket, ...tickets];
    saveTickets(updated);

    setBookedTicketId(newId);
    setActiveTicket(newTicket);
    setSearchQuery(newId);
  };

  const steps = [
    { key: 'received', label: 'Device Received', labelHi: 'प्राप्त हुआ' },
    { key: 'diagnosing', label: 'Diagnostics', labelHi: 'जांच' },
    { key: 'repairing', label: 'Repair in Progress', labelHi: 'काम चालू' },
    { key: 'tested', label: 'Quality Tested', labelHi: 'टेस्टिंग सफल' },
    { key: 'ready', label: 'Ready for Pickup', labelHi: 'पिकअप हेतु तैयार' }
  ];

  const getStepIndex = (status: string) => {
    switch (status) {
      case 'received': return 0;
      case 'diagnosing': return 1;
      case 'parts_ready': return 1;
      case 'repairing': return 2;
      case 'tested': return 3;
      case 'ready': return 4;
      default: return 0;
    }
  };

  return (
    <section id="tracker" className="py-16 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
            <Clock className="w-4 h-4" />
            <span>{isHi ? 'लाइव रिपेयर स्टेटस ट्रैकिंग' : 'Live Repair Status'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            {isHi ? 'अपने उपकरण की रिपेयरिंग स्थिति जानें' : 'Track Your Device or Book a Job Sheet'}
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {isHi 
              ? 'अपना जॉब शीट नंबर (जैसे KC-8921) या फोन नंबर दर्ज करके लाइव स्थिति देखें या नया टोकन बुक करें।' 
              : 'Enter your Job Sheet ID (e.g. KC-8921) or phone number to check current testing status, or book a drop-off token.'}
          </p>

          {/* Segmented Control Tabs */}
          <div className="mt-6 inline-flex p-1 bg-slate-200/80 rounded-xl">
            <button
              onClick={() => setActiveTab('track')}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'track'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isHi ? 'स्थिति ट्रैक करें' : 'Track Existing Job'}
            </button>
            <button
              onClick={() => setActiveTab('book')}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'book'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isHi ? 'नया रिपेयर टोकन बनाएं' : 'Book New Drop-off Token'}
            </button>
          </div>
        </div>

        {/* TAB 1: TRACK JOB SHEET */}
        {activeTab === 'track' && (
          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            
            {/* Search Input Bar */}
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  placeholder={isHi ? 'जॉब शीट नंबर दर्ज करें (उदा. KC-8921)' : 'Enter Ticket ID (e.g. KC-8921 or phone)'}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 font-mono"
                />
              </div>
              <button
                onClick={() => handleSearch()}
                className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-xl transition-colors shrink-0"
              >
                {isHi ? 'खोजें' : 'Check Status'}
              </button>
            </div>

            {/* Quick Demo Previews */}
            <div className="flex items-center gap-2 text-xs text-slate-500 flex-wrap">
              <span>{isHi ? 'उदाहरण टोकन:' : 'Try sample job tickets:'}</span>
              {['KC-8921', 'KC-8922', 'KC-8923'].map((code) => (
                <button
                  key={code}
                  onClick={() => {
                    setSearchQuery(code);
                    handleSearch(code);
                  }}
                  className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono rounded text-xs transition-colors"
                >
                  {code}
                </button>
              ))}
            </div>

            {searchError && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>
                  {isHi 
                    ? 'कोई जॉब शीट नहीं मिली। कृपया सही आईडी जांचें या 7398396002 पर संपर्क करें।' 
                    : 'No job sheet found matching this search. Please re-check or contact 7398396002.'}
                </span>
              </div>
            )}

            {activeTicket && (
              <div className="border border-slate-200 rounded-xl p-5 bg-slate-50/50 space-y-6">
                
                {/* Header Info */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-900 font-mono">
                        {activeTicket.ticketId}
                      </span>
                      <span className="text-xs text-slate-500 font-mono">· {activeTicket.dateReceived}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mt-1">
                      {activeTicket.device}
                    </h3>
                    <p className="text-xs text-slate-600">
                      {isHi ? 'ग्राहक:' : 'Customer:'} {activeTicket.customerName} ({activeTicket.phone})
                    </p>
                  </div>

                  <div className="text-right">
                    <span className="text-xs text-slate-500 block">
                      {isHi ? 'अनुमानित शुल्क:' : 'Estimated Cost:'}
                    </span>
                    <span className="text-xl font-mono font-extrabold text-amber-700">
                      ₹{activeTicket.estimatedCost.toLocaleString()}
                    </span>
                    <span className="text-[11px] block text-emerald-600 font-medium">
                      {isHi ? activeTicket.statusLabelHi : activeTicket.statusLabel}
                    </span>
                  </div>
                </div>

                {/* Progress Stepper */}
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">
                    {isHi ? 'लाइव प्रगति' : 'Current Repair Stage'}
                  </span>
                  
                  <div className="grid grid-cols-5 gap-1 sm:gap-2">
                    {steps.map((st, idx) => {
                      const currentIdx = getStepIndex(activeTicket.status);
                      const isCompleted = idx <= currentIdx;
                      const isCurrent = idx === currentIdx;

                      return (
                        <div key={st.key} className="flex flex-col items-center text-center space-y-1.5">
                          <div 
                            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                              isCompleted 
                                ? 'bg-emerald-600 text-white' 
                                : 'bg-slate-200 text-slate-500'
                            } ${isCurrent ? 'ring-2 ring-emerald-400 ring-offset-2' : ''}`}
                          >
                            {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                          </div>
                          <span className={`text-[10px] sm:text-xs leading-tight font-medium ${
                            isCompleted ? 'text-slate-900 font-semibold' : 'text-slate-400'
                          }`}>
                            {isHi ? st.labelHi : st.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Technician Notes */}
                <div className="bg-white p-3.5 rounded-lg border border-slate-200 text-xs space-y-1">
                  <span className="font-bold text-slate-700">
                    {isHi ? 'तकनीशियन की टिप्पणी:' : 'Technician Desk Notes:'}
                  </span>
                  <p className="text-slate-600">{activeTicket.notes}</p>
                </div>

                {/* Store Location & Pickup Help */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <MapPin className="w-3.5 h-3.5 text-amber-600" />
                    <span>{isHi ? 'पिकअप काउंटर: शुक्ला कॉम्प्लेक्स, राजघाट' : 'Pickup counter: Shukla Complex, Rajghat'}</span>
                  </div>

                  <a
                    href={SHOP_INFO.whatsappUrl(`Hello Kashi Computer, checking progress for Job ID ${activeTicket.ticketId} (${activeTicket.device})`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 font-semibold"
                  >
                    <span>{isHi ? 'व्हाट्सएप पर अपडेट पूछें' : 'Ask Update on WhatsApp'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            )}

          </div>
        )}

        {/* TAB 2: BOOK NEW DROP-OFF TOKEN */}
        {activeTab === 'book' && (
          <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            {bookedTicketId ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {isHi ? 'रिपेयर टोकन सफलतापूर्वक जनरेट हुआ!' : 'Drop-off Token Created Successfully!'}
                </h3>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-sm mx-auto text-center font-mono">
                  <span className="text-xs text-slate-500 block">{isHi ? 'आपका टोकन नंबर' : 'Your Job Sheet ID'}</span>
                  <span className="text-2xl font-extrabold text-amber-600 tracking-wider block mt-1">
                    {bookedTicketId}
                  </span>
                </div>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  {isHi 
                    ? 'कृपया अपने उपकरण के साथ शुक्ला कॉम्प्लेक्स, राजघाट, रायबरेली स्थित काशी कंप्यूटर पर पधारें। आप इस टोकन को व्हाट्सएप पर भी भेज सकते हैं।'
                    : 'Bring your device to Kashi Computer at Shukla Complex, Rajghat, Raebareli. Show this token for priority queueing.'}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                  <a
                    href={SHOP_INFO.whatsappUrl(`Hello Kashi Computer, I have created a repair token: ${bookedTicketId} for ${deviceModel} with issue: ${issueDesc}. I am coming to Shukla Complex shop.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-emerald-600 text-white font-semibold text-xs rounded-xl shadow-xs hover:bg-emerald-500 transition-colors"
                  >
                    {isHi ? 'दुकानदार को व्हाट्सएप भेजें' : 'Send Token to Shop on WhatsApp'}
                  </a>
                  <button
                    onClick={() => {
                      setActiveTab('track');
                      setSearchQuery(bookedTicketId);
                      handleSearch(bookedTicketId);
                    }}
                    className="px-5 py-2.5 bg-slate-900 text-white font-semibold text-xs rounded-xl hover:bg-slate-800 transition-colors"
                  >
                    {isHi ? 'लाइव स्टेटस देखें' : 'View Live Timeline'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleCreateBooking} className="space-y-4">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-lg font-bold text-slate-900">
                    {isHi ? 'ऑनलाइन रिपेयर टोकन फॉर्म' : 'Create Repair Drop-off Token'}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {isHi 
                      ? 'दुकान पर आने से पहले विवरण भरें ताकि हमारे पास पार्ट्स तैयार रहें।' 
                      : 'Fill details before visiting Shukla Complex for priority inspection.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {isHi ? 'आपका पूरा नाम' : 'Your Full Name'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={custName}
                      onChange={(e) => setCustName(e.target.value)}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {isHi ? 'मोबाइल नंबर (कॉल/व्हाट्सएप)' : 'Mobile Number'} *
                    </label>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      value={custPhone}
                      onChange={(e) => setCustPhone(e.target.value)}
                      placeholder="10-digit mobile number"
                      className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isHi ? 'डिवाइस मॉडल (उदा. HP 15s या Redmi Note 11)' : 'Device Model'} *
                  </label>
                  <input
                    type="text"
                    required
                    value={deviceModel}
                    onChange={(e) => setDeviceModel(e.target.value)}
                    placeholder="e.g. Dell Inspiron 3511 / Vivo V27 / Samsung A52"
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isHi ? 'खराबी का विवरण' : 'Issue Description'} *
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={issueDesc}
                    onChange={(e) => setIssueDesc(e.target.value)}
                    placeholder={isHi ? 'स्क्रीन टूट गई, बैटरी जल्दी खत्म होती है, ऑन नहीं हो रहा...' : 'Broken display, fast battery drain, dead motherboard...'}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-colors shadow-sm"
                  >
                    {isHi ? 'टोकन जनरेट करें एवं प्राथमिकता पाएं' : 'Generate Token & Priority Slot'}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

      </div>
    </section>
  );
};

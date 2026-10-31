import React from 'react';
import { Phone, MessageSquare, MapPin, Calculator } from 'lucide-react';
import { SHOP_INFO } from '../data/repairData.ts';

interface QuickActionFooterBarProps {
  language: 'en' | 'hi';
  onScrollToEstimator: () => void;
}

export const QuickActionFooterBar: React.FC<QuickActionFooterBarProps> = ({ 
  language, 
  onScrollToEstimator 
}) => {
  const isHi = language === 'hi';

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 px-3 py-2 text-white shadow-2xl">
      <div className="grid grid-cols-4 gap-1 items-center text-center">
        
        {/* Call Button */}
        <a
          href={SHOP_INFO.phoneTel}
          className="flex flex-col items-center justify-center py-1 text-amber-400 hover:text-amber-300"
        >
          <Phone className="w-4 h-4 fill-current mb-0.5" />
          <span className="text-[10px] font-bold">{isHi ? 'कॉल' : 'Call'}</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={SHOP_INFO.whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 text-emerald-400 hover:text-emerald-300"
        >
          <MessageSquare className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-bold">WhatsApp</span>
        </a>

        {/* Estimate Button */}
        <button
          onClick={onScrollToEstimator}
          className="flex flex-col items-center justify-center py-1 text-slate-300 hover:text-white"
        >
          <Calculator className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-bold">{isHi ? 'खर्च' : 'Estimate'}</span>
        </button>

        {/* Directions Button */}
        <a
          href={SHOP_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 text-amber-400 hover:text-amber-300"
        >
          <MapPin className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-bold">{isHi ? 'रास्ता' : 'Directions'}</span>
        </a>

      </div>
    </div>
  );
};
